// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./images\\phonebest01.jpg":[["phonebest01.d9beeed7.jpg","css/images/phonebest01.jpg"],"css/images/phonebest01.jpg"],"./images\\phonebest011.jpg":[["phonebest011.f91d44c3.jpg","css/images/phonebest011.jpg"],"css/images/phonebest011.jpg"],"./images\\phonebest02.jpg":[["phonebest02.5189b983.jpg","css/images/phonebest02.jpg"],"css/images/phonebest02.jpg"],"./images\\phonebest022.jpg":[["phonebest022.a7c86916.jpg","css/images/phonebest022.jpg"],"css/images/phonebest022.jpg"],"./images\\phonebest03.jpg":[["phonebest03.4b6601df.jpg","css/images/phonebest03.jpg"],"css/images/phonebest03.jpg"],"./images\\phonebest033.jpg":[["phonebest033.d8533f54.jpg","css/images/phonebest033.jpg"],"css/images/phonebest033.jpg"],"./images\\phonebest04.jpg":[["phonebest04.7ad574ff.jpg","css/images/phonebest04.jpg"],"css/images/phonebest04.jpg"],"./images\\phonebest044.jpg":[["phonebest044.604a3c0f.jpg","css/images/phonebest044.jpg"],"css/images/phonebest044.jpg"],"./images\\mainair01.jpg":[["mainair01.1b37bb0f.jpg","css/images/mainair01.jpg"],"css/images/mainair01.jpg"],"./images\\mainair011.jpg":[["mainair011.5393b0da.jpg","css/images/mainair011.jpg"],"css/images/mainair011.jpg"],"./images\\mainair02.jpg":[["mainair02.d3b79004.jpg","css/images/mainair02.jpg"],"css/images/mainair02.jpg"],"./images\\mainair022.jpg":[["mainair022.9ef06c52.jpg","css/images/mainair022.jpg"],"css/images/mainair022.jpg"],"./images\\mainair03.jpg":[["mainair03.859fe099.jpg","css/images/mainair03.jpg"],"css/images/mainair03.jpg"],"./images\\mainair033.jpg":[["mainair033.336470c2.jpg","css/images/mainair033.jpg"],"css/images/mainair033.jpg"],"./images\\mainair04.jpg":[["mainair04.930bcb0f.jpg","css/images/mainair04.jpg"],"css/images/mainair04.jpg"],"./images\\mainair044.jpg":[["mainair044.d7660b5f.jpg","css/images/mainair044.jpg"],"css/images/mainair044.jpg"],"./images\\mainsmart01.jpg":[["mainsmart01.9fcbb002.jpg","css/images/mainsmart01.jpg"],"css/images/mainsmart01.jpg"],"./images\\mainsmart011.jpg":[["mainsmart011.fa420422.jpg","css/images/mainsmart011.jpg"],"css/images/mainsmart011.jpg"],"./images\\mainsmart02.jpg":[["mainsmart02.a7bf6668.jpg","css/images/mainsmart02.jpg"],"css/images/mainsmart02.jpg"],"./images\\mainsmart022.jpg":[["mainsmart022.24f21dcd.jpg","css/images/mainsmart022.jpg"],"css/images/mainsmart022.jpg"],"./images\\mainsmart03.jpg":[["mainsmart03.e496e4a8.jpg","css/images/mainsmart03.jpg"],"css/images/mainsmart03.jpg"],"./images\\mainsmart033.jpg":[["mainsmart033.c50634eb.jpg","css/images/mainsmart033.jpg"],"css/images/mainsmart033.jpg"],"./images\\mainsmart04.jpg":[["mainsmart04.b2839547.jpg","css/images/mainsmart04.jpg"],"css/images/mainsmart04.jpg"],"./images\\mainsmart044.jpg":[["mainsmart044.f06c5dda.jpg","css/images/mainsmart044.jpg"],"css/images/mainsmart044.jpg"],"./images\\mainlife01.jpg":[["mainlife01.58bfee28.jpg","css/images/mainlife01.jpg"],"css/images/mainlife01.jpg"],"./images\\mainlife011.jpg":[["mainlife011.f80b3d0c.jpg","css/images/mainlife011.jpg"],"css/images/mainlife011.jpg"],"./images\\mainlife02.jpg":[["mainlife02.66ac04c9.jpg","css/images/mainlife02.jpg"],"css/images/mainlife02.jpg"],"./images\\mainlife022.jpg":[["mainlife022.1259d97e.jpg","css/images/mainlife022.jpg"],"css/images/mainlife022.jpg"],"./images\\mainlife03.jpg":[["mainlife03.b085e993.jpg","css/images/mainlife03.jpg"],"css/images/mainlife03.jpg"],"./images\\mainlife033.jpg":[["mainlife033.ae386403.jpg","css/images/mainlife033.jpg"],"css/images/mainlife033.jpg"],"./images\\mainlife04.jpg":[["mainlife04.a00c7a2e.jpg","css/images/mainlife04.jpg"],"css/images/mainlife04.jpg"],"./images\\mainlife044.jpg":[["mainlife044.01d00019.jpg","css/images/mainlife044.jpg"],"css/images/mainlife044.jpg"],"./images\\mainphone01.jpg":[["mainphone01.944b31ea.jpg","css/images/mainphone01.jpg"],"css/images/mainphone01.jpg"],"./images\\mainphone011.jpg":[["mainphone011.0a201c39.jpg","css/images/mainphone011.jpg"],"css/images/mainphone011.jpg"],"./images\\mainphone02.jpg":[["mainphone02.467eb42a.jpg","css/images/mainphone02.jpg"],"css/images/mainphone02.jpg"],"./images\\mainphone022.jpg":[["mainphone022.80d9a14d.jpg","css/images/mainphone022.jpg"],"css/images/mainphone022.jpg"],"./images\\mainphone03.jpg":[["mainphone03.bcc256b2.jpg","css/images/mainphone03.jpg"],"css/images/mainphone03.jpg"],"./images\\mainphone033.jpg":[["mainphone033.d45408f7.jpg","css/images/mainphone033.jpg"],"css/images/mainphone033.jpg"],"./images\\twitter0111.jpg":[["twitter0111.4866da38.jpg","css/images/twitter0111.jpg"],"css/images/twitter0111.jpg"],"./images\\insta1.jpg":[["insta1.2c2bd78e.jpg","css/images/insta1.jpg"],"css/images/insta1.jpg"],"./images\\facebook1.jpg":[["facebook1.f5976a37.jpg","css/images/facebook1.jpg"],"css/images/facebook1.jpg"],"./images\\youtube1.jpg":[["youtube1.cb412d4c.jpg","css/images/youtube1.jpg"],"css/images/youtube1.jpg"],"./images\\kakao0.jpg":[["kakao0.e960799a.jpg","css/images/kakao0.jpg"],"css/images/kakao0.jpg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52094" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/css.967bad95.js.map