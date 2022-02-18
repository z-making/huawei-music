// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1HJVd":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3a19bfb0fce79ae";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dP9tu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _icons = require("./icons");
var _swiper = require("./swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
const $ = (selector)=>document.querySelector(selector)
;
const $$ = (selector)=>document.querySelectorAll(selector)
;
class Player {
    constructor(node){
        this.root = typeof node === 'string' ? $(node) : node;
        this.$ = (selector)=>this.root.querySelector(selector)
        ;
        this.$$ = (selector)=>this.root.querySelectorAll(selector)
        ;
        this.songList = [];
        this.currentIndex = 0;
        this.audio = new Audio();
        this.lyricsArr = [];
        this.lyricIndex = -1;
        this.btn = this.$('.btn-play-pause');
        this.start();
        this.bind();
    }
    //https://jirengu.github.io/data-mock/huawei-music/music-list.json
    start() {
        fetch('https://jirengu.github.io/data-mock/huawei-music/music-list.json').then((res)=>res.json()
        ).then((data)=>{
            console.log(data);
            this.songList = data;
            this.loadSong();
        });
    }
    bind() {
        let self = this;
        // this.root.querySelector('.btn-play-pause').audio.src = this.songList[this.currentIndex].url
        this.$('.btn-play-pause').onclick = function() {
            if (this.classList.contains('playing')) {
                self.audio.pause();
                this.classList.remove('playing');
                this.classList.add('pause');
                this.querySelector('use').setAttribute('xlink:href', '#icon-pause');
            } else if (this.classList.contains('pause')) {
                self.audio.play();
                self.iconPlay();
            }
        };
        this.$('.btn-pre').onclick = function() {
            self.playPrevSong();
            self.loadSong();
        };
        this.$('.btn-next').onclick = function() {
            self.playNextSong();
            self.loadSong();
        };
        this.audio.ontimeupdate = function() {
            self.locateLyric();
            self.setProgerssBar();
        };
        let swiper = new _swiperDefault.default(this.$('.panels'));
        swiper.on('swipLeft', function() {
            this.classList.remove('panel1');
            this.classList.add('panel2');
        });
        swiper.on('swipRight', function() {
            this.classList.remove('panel2');
            this.classList.add('panel1');
        });
    }
    loadSong() {
        let songObj = this.songList[this.currentIndex];
        this.$('.header h1').innerText = songObj.title;
        this.$('.header p').innerText = songObj.author + '-' + songObj.albumn;
        this.audio.src = songObj.url;
        this.audio.onloadedmetadata = ()=>this.$('.time-end').innerText = this.formateTime(this.audio.duration)
        ;
        this.loadLyrics();
    }
    // playSong(){
    //   this.audio.oncanplaythrough = () => this.audio.play()
    // }
    iconPlay() {
        if (!this.btn.classList.contains('playing')) {
            this.btn.classList.remove('pause');
            this.btn.classList.add('playing');
            this.btn.querySelector('use').setAttribute('xlink:href', '#icon-play');
        }
    }
    playPrevSong() {
        this.currentIndex = (this.songList.length + this.currentIndex - 1) % this.songList.length;
        this.audio.src = this.songList[this.currentIndex].url;
        // this.renderSong()
        this.audio.oncanplaythrough = ()=>this.audio.play()
        ;
        this.iconPlay();
    }
    playNextSong() {
        this.currentIndex = (this.songList.length + this.currentIndex + 1) % this.songList.length;
        this.audio.src = this.songList[this.currentIndex].url;
        // this.renderSong()
        this.audio.oncanplaythrough = ()=>this.audio.play()
        ;
        this.iconPlay();
    }
    loadLyrics() {
        fetch(this.songList[this.currentIndex].lyric).then((res)=>res.json()
        ).then((data)=>{
            console.log(data.lrc.lyric);
            this.setLyrics(data.lrc.lyric);
            window.lyrics = data.lrc.lyric;
        });
    }
    locateLyric() {
        let currentTime = this.audio.currentTime * 1000;
        let nextLineTime = this.lyricsArr[this.lyricIndex + 1][0];
        if (currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1) {
            this.lyricIndex++;
            let node = this.$('[data-time="' + this.lyricsArr[this.lyricIndex][0] + '"]');
            if (node) this.setLyricToCenter(node);
            this.$$('.panel-effect .lyrics p')[0].innerText = this.lyricsArr[this.lyricIndex][1];
            this.$$('.panel-effect .lyrics p')[1].innerText = this.lyricsArr[this.lyricIndex + 1] ? this.lyricsArr[this.lyricIndex + 1][1] : '';
            console.log(this.$$('.panel-effect .lyrics p')[0]);
        }
    }
    setLyrics(lyrics) {
        this.lyricIndex = 0;
        let fragment = document.createDocumentFragment();
        let lyricsArr = [];
        this.lyricsArr = lyricsArr;
        lyrics.split(/\n/).filter((str)=>str.match(/\[.+?\]/)
        ).forEach((line)=>{
            let str = line.replace(/\[.+?\]/g, '');
            line.match(/\[.+?\]/g).forEach((t)=>{
                t = t.replace(/[\[\]]/g, '');
                let milliseconds = parseInt(t.slice(0, 2)) * 60000 + parseInt(t.slice(3, 5)) * 1000 + parseInt(t.slice(6));
                lyricsArr.push([
                    milliseconds,
                    str
                ]);
            });
        });
        lyricsArr.filter((line)=>line[1].trim() !== ''
        ).sort((v1, v2)=>{
            if (v1[0] > v2[0]) return 1;
            else return -1;
        }).forEach((line)=>{
            let node = document.createElement('p');
            node.setAttribute('data-time', line[0]);
            node.innerText = line[1];
            fragment.appendChild(node);
        });
        this.$('.panel-lyrics .container').innerHTML = '';
        this.$('.panel-lyrics .container').appendChild(fragment);
    }
    setLyricToCenter(node1) {
        let translateY = node1.offsetTop - this.$('.panel-lyrics').offsetHeight / 2;
        console.log(translateY);
        translateY = translateY > 0 ? translateY : 0;
        this.$('.panel-lyrics .container').style.transform = `translateY(-${translateY}px)`;
        this.$$('.panel-lyrics p').forEach((node)=>node.classList.remove('current')
        );
        node1.classList.add('current');
    }
    setProgerssBar() {
        let percent = this.audio.currentTime * 100 / this.audio.duration + '%';
        this.$('.bar .progress').style.width = percent;
        this.$('.time-start').innerText = this.formateTime(this.audio.currentTime);
    }
    formateTime(secondsTotal) {
        let minutes = parseInt(secondsTotal / 60);
        minutes = minutes >= 10 ? '' + minutes : '0' + minutes;
        let seconds = parseInt(secondsTotal % 60);
        seconds = seconds >= 10 ? '' + seconds : '0' + seconds;
        return minutes + ':' + seconds;
    }
}
new Player('#player');

},{"./icons":"kUw3l","./swiper":"a1DMY","@parcel/transformer-js/src/esmodule-helpers.js":"c9O3I"}],"kUw3l":[function(require,module,exports) {
let svgPlaceholder = document.createElement('div');
svgPlaceholder.style.position = "absolute";
svgPlaceholder.style.width = 0;
svgPlaceholder.style.height = 0;
svgPlaceholder.style.overflow = "hidden";
document.body.appendChild(svgPlaceholder);
svgPlaceholder.innerHTML = `
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg style="display:none" width="0" height="0" t="1641797799438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1157" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
  <symbol id="icon-circle" t="1641797799438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1157" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs><style type="text/css"></style></defs><path d="M594.048 937.472c33.6 35.072-21.504 88.896-59.456 55.04-38.528-34.56-77.184-69.056-115.776-103.616-16.192-14.464-15.744-42.688-0.384-57.344 38.08-36.608 76.096-73.216 114.176-109.76 36.608-35.008 91.648 17.216 60.864 53.504 189.824-22.016 258.112-230.336 155.008-379.968-59.648-86.144 78.08-163.136 137.088-77.696C1065.216 577.856 895.808 904.384 594.048 937.472L594.048 937.472zM157.44 706.112C-22.272 445.952 147.072 119.68 448.64 86.464 415.104 51.456 470.208-2.432 508.096 31.488c38.592 34.432 77.12 68.928 115.84 103.552C640 149.376 639.68 177.6 624.32 192.384 586.24 228.928 548.288 265.408 510.144 301.952c-36.48 35.072-91.584-17.216-60.8-53.376-189.76 21.888-258.112 230.272-154.88 379.84C353.984 714.432 216.384 791.488 157.44 706.112L157.44 706.112z" fill="#8f8f92" p-id="1158"></path>
  </symbol>
  <symbol id="icon-pre" t="1641795974436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1565" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs><style type="text/css"></style></defs><path d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z" fill="#8f8f92" p-id="1566"></path>
  </symbol>
  <symbol id="icon-play" t="1641795861526" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1127" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
    <defs><style type="text/css"></style></defs><path d="M512 928C282.25 928 96 741.75 96 512S282.25 96 512 96s416 186.25 416 416-186.25 416-416 416zM384 304c-17.673 0-32 14.327-32 32v384h96c17.673 0 32-14.327 32-32V304h-96z m192 0c-17.673 0-32 14.327-32 32v384h96c17.673 0 32-14.327 32-32V304h-96z" fill="#8f8f92" p-id="1128"></path>
  </symbol>
  <symbol id="icon-pause" t="1642426740118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1187" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
    <defs><style type="text/css"></style></defs><path d="M512 90.125C279.00236621 90.125 90.125 279.00236621 90.125 512s188.87736622 421.875 421.875 421.875S933.875 744.99763379 933.875 512 744.99763379 90.125 512 90.125z m150.8979614 458.62852341l-193.18513596 172.9981939c-30.93345208 19.30476517-69.72629206-4.82332736-69.72629206-43.44431423v-345.99638782c0-38.60953033 38.7355556-62.74908023 69.72629206-43.44431507l193.18513596 172.99819392c30.99073645 19.31622253 30.99073645 67.58386414 0 86.8886293z" fill="#8f8f92" p-id="1188"></path>
  </symbol>
  <symbol id="icon-next" t="1641795978488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1711" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs><style type="text/css"></style></defs><path d="M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.408z" fill="#8f8f92" p-id="1712"></path>
  </symbol>
  <symbol id="icon-list" t="1641795965774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1273" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs><style type="text/css"></style></defs><path d="M875.52 433.152q-7.168-1.024-12.8-10.24t-8.704-33.792q-5.12-39.936-26.112-58.88t-65.024-27.136q-46.08-9.216-81.408-37.376t-58.88-52.736q-22.528-21.504-34.816-15.36t-12.288 22.528l0 44.032 0 96.256q0 57.344-0.512 123.904t-0.512 125.952l0 104.448 0 58.368q1.024 24.576-7.68 54.784t-32.768 56.832-64 45.568-99.328 22.016q-60.416 3.072-109.056-21.504t-75.264-61.952-26.112-81.92 38.4-83.456 81.92-54.272 84.992-16.896 73.216 5.632 47.616 13.312l0-289.792q0-120.832 1.024-272.384 0-29.696 15.36-48.64t40.96-22.016q21.504-3.072 35.328 8.704t28.16 32.768 35.328 47.616 56.832 52.224q30.72 23.552 53.76 33.792t43.008 18.944 39.424 20.992 43.008 39.936q23.552 26.624 28.672 55.296t0.512 52.224-14.848 38.4-17.408 13.824z" fill="#8f8f92" p-id="1274"></path>
  </symbol>
</svg>`;

},{}],"a1DMY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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

*/ class Swiper {
    constructor(node){
        if (!node) throw new Error('传递需要绑定的dom元素');
        let root = typeof node === 'string' ? document.querySelector('node') : node;
        let eventHub = {
            'swipLeft': [],
            'swipRight': []
        };
        let initX;
        let newX;
        let clock;
        root.ontouchstart = function(e) {
            initX = e.changedTouches[0].pageX;
        };
        root.ontouchmove = function(e) {
            if (clock) clearInterval(clock);
            clock = setTimeout(()=>{
                newX = e.changedTouches[0].pageX;
                if (newX - initX > 10) eventHub['swipRight'].forEach((fn)=>fn.bind(root)()
                );
                else if (initX - newX > 10) eventHub['swipLeft'].forEach((fn)=>fn.bind(root)()
                );
            }, 100);
        };
        this.on = function(type, fn) {
            if (eventHub[type]) eventHub[type].push(fn);
        };
        this.off = function(type, fn) {
            let index = eventHub[type].indexOf(fn);
            if (index !== -1) eventHub[type].splice(index, 1);
        };
    }
}
exports.default = Swiper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c9O3I"}],"c9O3I":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1HJVd","dP9tu"], "dP9tu", "parcelRequire5c03")

//# sourceMappingURL=index.0fce79ae.js.map
