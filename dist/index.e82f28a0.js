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
})({"aVpBY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
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
            var F = function F() {};
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
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
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
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
    bundle.hotData = {};
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

},{}],"dV6cC":[function(require,module,exports) {
var _bbinformer = require("./informers/BBInformer");
var _bbcardsBuyInputs = require("./elements/BBCardsBuyInputs");
var _bbcardsSellInputs = require("./elements/BBCardsSellInputs");
const bbCardCurrencyArr = [
    "USDCARD_in",
    "USDCARD_out",
    "EURCARD_in",
    "EURCARD_out",
    "RUBCARD_in",
    "RUBCARD_out"
];
const bbCardConversionArr = [
    "USDCARD_EURCARD_in",
    "USDCARD_EURCARD_out",
    "USDCARD_RUBCARD_in",
    "USDCARD_RUBCARD_out",
    "RUBCARD_EURCARD_in",
    "RUBCARD_EURCARD_out"
];
const bbNalCurrencyArr = [
    "USD_in",
    "USD_out",
    "EUR_in",
    "EUR_out",
    "RUB_in",
    "RUB_out"
];
const bbNalConversionArr = [
    "USD_EUR_in",
    "USD_EUR_out",
    "USD_RUB_in",
    "USD_RUB_out",
    "RUB_EUR_in",
    "RUB_EUR_out"
];
window.addEventListener("DOMContentLoaded", async ()=>{
    const cardBB = new _bbinformer.BBInformer(bbCardCurrencyArr, bbCardConversionArr);
    const nalBB = new _bbinformer.BBInformer(bbNalCurrencyArr, bbNalConversionArr, "Минск");
    const dataCards = await cardBB.getCardCursFromApi();
    const dataNal = await nalBB.getNalCursFromApi();
    function renderInputs() {
        const sectionMain = document.querySelector(".change-cards");
        const bbCardsBuyInputs = new _bbcardsBuyInputs.BBCardsBuyInputs();
        const bbCardsSellInputs = new _bbcardsSellInputs.BBCardsSellInputs();
        sectionMain.append(bbCardsBuyInputs.render());
        sectionMain.append(bbCardsSellInputs.render());
        fillDataCardsBuy(".change-cards__buy", 1, "eur");
        fillDataCardsSell(".change-cards__sell", 1, "eur");
        addListeners();
    }
    function addListeners() {
        const blockCardsBuy = document.querySelector(".change-cards__buy");
        const blockCardsSell = document.querySelector(".change-cards__sell");
        blockCardsBuy.addEventListener("input", (e)=>{
            let inputNum = e.target.value.replace(/[^0-9.]+/g, "").slice(0, 10);
            switch(true){
                case e.target.id === "bynInputIn":
                    fillDataCardsBuy(".change-cards__buy", inputNum, "byn");
                    break;
                case e.target.id === "eurInputIn":
                    fillDataCardsBuy(".change-cards__buy", inputNum, "eur");
                    break;
                case e.target.id === "usdInputIn":
                    fillDataCardsBuy(".change-cards__buy", inputNum, "usd");
                    break;
                case e.target.id === "rubInputIn":
                    fillDataCardsBuy(".change-cards__buy", inputNum, "rub");
                    break;
            }
            e.target.value = inputNum;
        });
        blockCardsSell.addEventListener("input", (e)=>{
            let inputNum = e.target.value.replace(/[^0-9.]+/g, "").slice(0, 10);
            switch(true){
                case e.target.id === "bynInputOut":
                    fillDataCardsSell(".change-cards__sell", inputNum, "byn");
                    break;
                case e.target.id === "eurInputOut":
                    fillDataCardsSell(".change-cards__sell", inputNum, "eur");
                    break;
                case e.target.id === "usdInputOut":
                    fillDataCardsSell(".change-cards__sell", inputNum, "usd");
                    break;
                case e.target.id === "rubInputOut":
                    fillDataCardsSell(".change-cards__sell", inputNum, "rub");
                    break;
            }
            e.target.value = inputNum;
        });
    }
    function fillDataCardsBuy(parentClass, num = 1, currency = "usd") {
        const inputs = document.querySelector(parentClass).querySelectorAll("input");
        let bynIn;
        switch(currency){
            case "usd":
                bynIn = +dataCards.USDCARD_in * num;
                break;
            case "eur":
                bynIn = +dataCards.EURCARD_in * num;
                break;
            case "rub":
                bynIn = +dataCards.RUBCARD_in / 100 * num;
                break;
            case "byn":
                bynIn = num;
                break;
        }
        let usdIn = Number(bynIn / +dataCards.USDCARD_in).toFixed(4);
        let eurIn = Number(bynIn / +dataCards.EURCARD_in).toFixed(4);
        let rubIn = Number(bynIn / +dataCards.RUBCARD_in * 100).toFixed(4);
        bynIn = Number(bynIn).toFixed(4);
        inputs.forEach((item)=>{
            switch(item.id){
                case "bynInputIn":
                    item.value = bynIn;
                    break;
                case "eurInputIn":
                    item.value = eurIn;
                    break;
                case "usdInputIn":
                    item.value = usdIn;
                    break;
                case "rubInputIn":
                    item.value = rubIn;
                    break;
            }
        });
    }
    function fillDataCardsSell(parentClass, num = 1, currency = "usd") {
        const inputs = document.querySelector(parentClass).querySelectorAll("input");
        let bynOut;
        switch(currency){
            case "usd":
                bynOut = +dataCards.USDCARD_out * num;
                break;
            case "eur":
                bynOut = +dataCards.EURCARD_out * num;
                break;
            case "rub":
                bynOut = +dataCards.RUBCARD_out / 100 * num;
                break;
            case "byn":
                bynOut = num;
                break;
        }
        let usdOut = Number(bynOut / +dataCards.USDCARD_out).toFixed(4);
        let eurOut = Number(bynOut / +dataCards.EURCARD_out).toFixed(4);
        let rubOut = Number(bynOut / +dataCards.RUBCARD_out * 100).toFixed(4);
        bynOut = Number(bynOut).toFixed(4);
        inputs.forEach((item)=>{
            switch(item.id){
                case "bynInputOut":
                    item.value = bynOut;
                    break;
                case "eurInputOut":
                    item.value = eurOut;
                    break;
                case "usdInputOut":
                    item.value = usdOut;
                    break;
                case "rubInputOut":
                    item.value = rubOut;
                    break;
            }
        });
    }
    renderInputs();
});

},{"./informers/BBInformer":"kwRoy","./elements/BBCardsBuyInputs":"3BTXJ","./elements/BBCardsSellInputs":"4Y2Mg"}],"kwRoy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BBInformer", ()=>BBInformer
);
class BBInformer {
    constructor(currencyArray, conversionArray, city = "Минск"){
        this.currencyArray = currencyArray;
        this.conversionArray = conversionArray;
        this.city = city;
    }
    async getCardCursFromApi() {
        try {
            const req = await fetch(`https://belarusbank.by/api/kurs_cards`);
            if (req.ok) {
                const json = await req.json();
                const res = {};
                for(let key in json[0])this.currencyArray.forEach((item)=>{
                    if (key === item) res[key] = json[0][key];
                });
                return res;
            } else throw new Error(`${req.status}`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    async getCardConversionFromApi() {
        try {
            const req = await fetch(`https://belarusbank.by/api/kurs_cards`);
            if (req.ok) {
                const json = await req.json();
                const res = {};
                for(let key in json[0])this.conversionArray.forEach((item)=>{
                    if (key === item) res[key] = json[0][key];
                });
                return res;
            } else throw new Error(`${req.status}`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    async getNalCursFromApi() {
        try {
            const req = await fetch(`https://belarusbank.by/api/kursExchange?city=${this.city}`);
            if (req.ok) {
                const json = await req.json();
                const res = {};
                for(let key in json[0])this.currencyArray.forEach((item)=>{
                    if (key === item) res[key] = json[0][key];
                });
                return res;
            } else throw new Error(`${req.status}`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    async getNalConversionFromApi() {
        try {
            const req = await fetch(`https://belarusbank.by/api/kursExchange?city=${this.city}`);
            if (req.ok) {
                const json = await req.json();
                const res = {};
                for(let key in json[0])this.conversionArray.forEach((item)=>{
                    if (key === item) res[key] = json[0][key];
                });
                return res;
            } else throw new Error(`${req.status}`);
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"3BTXJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BBCardsBuyInputs", ()=>BBCardsBuyInputs
);
class BBCardsBuyInputs {
    render() {
        const div = document.createElement("div");
        div.classList.add("change-cards__buy");
        div.innerHTML += `
    <div class="change-cards__title">Беларусбанк по картам покупает</div>
    <div class="change-cards__item">
        <label for="bynInputIn">BYN: </label>
        <input type="text"
               id="bynInputIn"
               name="bynInputIn"
               value="0">
    </div> 
    <div class="change-cards__item">
        <label for="usdInputIn">USD: </label>
        <input type="text"
               id="usdInputIn"
               name="usdInputIn"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="eurInputIn">EUR: </label>
        <input type="text"
               id="eurInputIn"
               name="eurInputIn"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="rubInputIn">RUB: </label>
        <input type="text"
               id="rubInputIn"
               name="rubInputIn"
               value="0">
    </div>`;
        return div;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Y2Mg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BBCardsSellInputs", ()=>BBCardsSellInputs
);
class BBCardsSellInputs {
    render() {
        const div = document.createElement("div");
        div.classList.add("change-cards__sell");
        div.innerHTML += `
    <div class="change-cards__title">Беларусбанк по картам продает</div>
    <div class="change-cards__item">
        <label for="bynInputOut">BYN: </label>
        <input type="text"
               id="bynInputOut"
               name="bynInputOut"
               value="0">
    </div> 
    <div class="change-cards__item">
        <label for="usdInputOut">USD: </label>
        <input type="text"
               id="usdInputOut"
               name="usdInputOut"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="eurInputOut">EUR: </label>
        <input type="text"
               id="eurInputOut"
               name="eurInputOut"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="rubInputOut">RUB: </label>
        <input type="text"
               id="rubInputOut"
               name="rubInputOut"
               value="0">
    </div>`;
        return div;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aVpBY","dV6cC"], "dV6cC", "parcelRequire0bae")

//# sourceMappingURL=index.e82f28a0.js.map
