
import './icons'
import Swiper from './swiper'

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

class Player{
  constructor(node){
    this.root = typeof node === 'string' ? $(node) : node
    this.$ = selector => this.root.querySelector(selector)
    this.$$ = selector => this.root.querySelectorAll(selector)
    this.songList = []
    this.currentIndex = 0
    this.audio = new Audio()
    this.lyricsArr = []
    this.lyricIndex = -1
    this.btn = this.$('.btn-play-pause')

    this.start()
    this.bind()
  }
  //https://jirengu.github.io/data-mock/huawei-music/music-list.json
  start(){
    fetch('https://jirengu.github.io/data-mock/huawei-music/music-list.json')
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      this.songList = data
      this.loadSong()
    })
  }
  bind(){
    let self = this
    // this.root.querySelector('.btn-play-pause').audio.src = this.songList[this.currentIndex].url
    this.$('.btn-play-pause').onclick = function(){
      if(this.classList.contains('playing')){
        self.audio.pause()
        this.classList.remove('playing')
        this.classList.add('pause')
        this.querySelector('use').setAttribute('xlink:href','#icon-pause')
      }else if(this.classList.contains('pause')){
        self.audio.play()
        self.iconPlay()
      }
    }
    this.$('.btn-pre').onclick = function(){
      self.playPrevSong()
      self.loadSong()
    }
    this.$('.btn-next').onclick = function(){
      self.playNextSong()
      self.loadSong()
    }

    this.audio.ontimeupdate = function(){
      self.locateLyric()
      self.setProgerssBar()
    }
    
    let swiper = new Swiper(this.$('.panels'))
    swiper.on('swipLeft',function(){
      this.classList.remove('panel1')
      this.classList.add('panel2')
    })
    swiper.on('swipRight',function(){
      this.classList.remove('panel2')
      this.classList.add('panel1')
    })
  }

  loadSong(){
    let songObj = this.songList[this.currentIndex]
    this.$('.header h1').innerText = songObj.title
    this.$('.header p').innerText = songObj.author + '-' + songObj.albumn
    this.audio.src = songObj.url
    this.audio.onloadedmetadata = () => this.$('.time-end').innerText = this.formateTime(this.audio.duration)
    this.loadLyrics()
  }

  // playSong(){
  //   this.audio.oncanplaythrough = () => this.audio.play()
  // }

  iconPlay(){
    if(!this.btn.classList.contains('playing')){
      this.btn.classList.remove('pause')
      this.btn.classList.add('playing')
      this.btn.querySelector('use').setAttribute('xlink:href','#icon-play')
    }
  }

  playPrevSong(){
    this.currentIndex = (this.songList.length + this.currentIndex -1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    // this.renderSong()
    this.audio.oncanplaythrough = () => this.audio.play()
    this.iconPlay()
  }

  playNextSong(){
    this.currentIndex = (this.songList.length + this.currentIndex + 1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    // this.renderSong()
    this.audio.oncanplaythrough = () => this.audio.play()
    this.iconPlay()
  }

  loadLyrics(){
    fetch(this.songList[this.currentIndex].lyric)
    .then(res => res.json())
    .then( data =>{
      console.log(data.lrc.lyric)
      this.setLyrics(data.lrc.lyric)
      window.lyrics = data.lrc.lyric
    })
  }

  locateLyric(){
    let currentTime = this.audio.currentTime*1000
    let nextLineTime = this.lyricsArr[this.lyricIndex+1][0]
    if(currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1){
      this.lyricIndex++
      let node = this.$('[data-time="'+this.lyricsArr[this.lyricIndex][0]+'"]')
      if(node) this.setLyricToCenter(node)
      this.$$('.panel-effect .lyrics p')[0].innerText = this.lyricsArr[this.lyricIndex][1]
      this.$$('.panel-effect .lyrics p')[1].innerText = this.lyricsArr[this.lyricIndex+1] ? this.lyricsArr[this.lyricIndex+1][1] : ''
      console.log(this.$$('.panel-effect .lyrics p')[0])
    }
  }

  setLyrics(lyrics){
    this.lyricIndex = 0
    let fragment = document.createDocumentFragment()
    let lyricsArr = []
    this.lyricsArr = lyricsArr
    lyrics.split(/\n/)
      .filter(str => str.match(/\[.+?\]/))
      .forEach(line =>{
        let str = line.replace(/\[.+?\]/g, '')
        line.match(/\[.+?\]/g).forEach(t=>{
          t = t.replace(/[\[\]]/g,'')
          let milliseconds = parseInt(t.slice(0,2))*60*1000 + parseInt(t.slice(3,5))*1000 + parseInt(t.slice(6))
          lyricsArr.push([milliseconds,str])
        })
      })

      lyricsArr.filter(line => line[1].trim() !== '').sort((v1,v2)=>{
        if(v1[0] > v2[0]){
          return 1
        }else{
          return -1
        }
      }).forEach(line =>{
        let node = document.createElement('p')
        node.setAttribute('data-time',line[0])
        node.innerText = line[1]
        fragment.appendChild(node)
      })
      this.$('.panel-lyrics .container').innerHTML=''
      this.$('.panel-lyrics .container').appendChild(fragment)
  }

  setLyricToCenter(node){
    let translateY = node.offsetTop - this.$('.panel-lyrics').offsetHeight/2
    console.log(translateY)
    translateY = translateY > 0 ? translateY : 0
    this.$('.panel-lyrics .container').style.transform=`translateY(-${translateY}px)`
    this.$$('.panel-lyrics p').forEach(node => node.classList.remove('current'))
    node.classList.add('current')
  }

  setProgerssBar(){
    let percent = (this.audio.currentTime * 100 / this.audio.duration) + '%'
    this.$('.bar .progress').style.width = percent
    this.$('.time-start').innerText = this.formateTime(this.audio.currentTime)
  }

  formateTime(secondsTotal){
    let minutes = parseInt(secondsTotal/60)
    minutes = minutes >= 10 ? ''+ minutes : '0' + minutes
    let  seconds = parseInt(secondsTotal%60)
    seconds = seconds >= 10 ? '' + seconds : '0' + seconds
    return minutes + ':' + seconds
  }
}


new Player('#player')