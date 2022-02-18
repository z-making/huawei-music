/*
let Swiper = (function(){
  let root = document
  let eventHub = {'swipLeft':[],'swipRight':[]}
  function bind(node){
    root = typeof node === 'string' ? document.querySelector(node) : node
  }
  function on(type,fn){
    if(eventHub[type]){
      eventHub[type].push(fn)
    }
  }

  var initX
  var newX
  var clock
  root.ontouchstart = function(e){
    initX = e.changedTouches[0].pageX
  }

  root.ontouchmove = function(e){
    if(clock) clearInterval(clock)
    clock = setTimeout(() => {
      newX = e.changedTouches[0].pageX
      if(newX - initX > 0){
        eventHub['swipRight'].forEach(fn => fn())
      }else{
        eventHub['swipLeft'].forEach(fn => fn())
      }
    },100)
  }

  return {
   bind:bind,
   on:on
 }
})()

Swiper.bind('#box')

Swiper.on('swiper',function(){
  
})

*/


class Swiper{
  constructor(node){
    if(!node) throw new Error('传递需要绑定的dom元素')
    let root = typeof node === 'string' ? document.querySelector('node') : node
    let eventHub = {'swipLeft': [],'swipRight': []}

    let initX
    let newX
    let clock
    root.ontouchstart = function(e){
      initX = e.changedTouches[0].pageX
    }

    root.ontouchmove = function(e){
      if(clock) clearInterval(clock)
      clock = setTimeout(() => {
        newX = e.changedTouches[0].pageX
        if(newX - initX > 10){
          eventHub['swipRight'].forEach(fn=>fn.bind(root)())
        }else if(initX - newX > 10){
          eventHub['swipLeft'].forEach(fn=>fn.bind(root)())
        }
      }, 100);
    }
    this.on = function(type,fn){
      if(eventHub[type]){
        eventHub[type].push(fn)
      }
    }
    this.off = function(type,fn){
      let index = eventHub[type].indexOf(fn)
      if(index !== -1)[
        eventHub[type].splice(index,1)
      ]
    }
  }
}

// let swiper = new Swiper('#box')
// swiper.on('swipLeft',()=>{
//   console.log('此处执行代码')
// })
// swiper.on('swipRight',()=>{
//   console.log('此处执行代码')
// })

// let onLeft = () => console.log('left 2')
// swiper.on('swipLeft',onLeft)
// swiper.off('swipLeft',onLeft)

export default Swiper