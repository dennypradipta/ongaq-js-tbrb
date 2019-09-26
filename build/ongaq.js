!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof self?i=self:(console.warn("Using browser-only version of superagent in non-browser environment"),i=this);var n=r(3),s=r(4),o=r(1),a=r(5),u=r(7);function h(){}var c=e=t.exports=function(t,r){return"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r)};e.Request=g,c.getXHR=function(){if(!(!i.XMLHttpRequest||i.location&&"file:"==i.location.protocol&&i.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var l="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};function p(t){if(!o(t))return t;var e=[];for(var r in t)d(e,r,t[r]);return e.join("&")}function d(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){d(t,e,r)});else if(o(r))for(var i in r)d(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function f(t){for(var e,r,i={},n=t.split("&"),s=0,o=n.length;s<o;++s)-1==(r=(e=n[s]).indexOf("="))?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function m(t){return/[\/+]json($|[^-\w])/.test(t)}function y(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=function(t){for(var e,r,i,n,s=t.split(/\r?\n/),o={},a=0,u=s.length;a<u;++a)-1!==(e=(r=s[a]).indexOf(":"))&&(i=r.slice(0,e).toLowerCase(),n=l(r.slice(e+1)),o[i]=n);return o}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function g(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t,e=null,i=null;try{i=new y(r)}catch(t){return(e=new Error("Parser is unable to parse the response")).parse=!0,e.original=t,r.xhr?(e.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,e.status=r.xhr.status?r.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),r.callback(e)}r.emit("response",i);try{r._isResponseOK(i)||(t=new Error(i.statusText||"Unsuccessful HTTP response"))}catch(e){t=e}t?(t.original=e,t.response=i,t.status=i.status,r.callback(t,i)):r.callback(null,i)})}function v(t,e,r){var i=c("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}c.serializeObject=p,c.parseString=f,c.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},c.serialize={"application/x-www-form-urlencoded":p,"application/json":JSON.stringify},c.parse={"application/x-www-form-urlencoded":f,"application/json":JSON.parse},a(y.prototype),y.prototype._parseBody=function(t){var e=c.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&m(this.type)&&(e=c.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},y.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",n=new Error(i);return n.status=this.status,n.method=e,n.url=r,n},c.Response=y,n(g.prototype),s(g.prototype),g.prototype.type=function(t){return this.set("Content-Type",c.types[t]||t),this},g.prototype.accept=function(t){return this.set("Accept",c.types[t]||t),this},g.prototype.auth=function(t,e,r){1===arguments.length&&(e=""),"object"==typeof e&&null!==e&&(r=e,e=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});return this._auth(t,e,r,function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")})},g.prototype.query=function(t){return"string"!=typeof t&&(t=p(t)),t&&this._query.push(t),this},g.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},g.prototype._getFormData=function(){return this._formData||(this._formData=new i.FormData),this._formData},g.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},g.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},g.prototype.buffer=g.prototype.ca=g.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},g.prototype.pipe=g.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},g.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},g.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||h,this._finalizeQueryString(),this._end()},g.prototype._end=function(){var t=this,e=this.xhr=c.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var i;try{i=e.status}catch(t){i=0}if(!i){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var i=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=i.bind(null,"download"),e.upload&&(e.upload.onprogress=i.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var n=this._header["content-type"],s=this._serializer||c.serialize[n?n.split(";")[0]:""];!s&&m(n)&&(s=c.serialize["application/json"]),s&&(r=s(r))}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&e.setRequestHeader(o,this.header[o]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},c.agent=function(){return new u},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){u.prototype[t.toLowerCase()]=function(e,r){var i=new c.Request(t,e);return this._setDefaults(i),r&&i.end(r),i}}),u.prototype.del=u.prototype.delete,c.get=function(t,e,r){var i=c("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},c.head=function(t,e,r){var i=c("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},c.options=function(t,e,r){var i=c("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.del=v,c.delete=v,c.patch=function(t,e,r){var i=c("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.post=function(t,e,r){var i=c("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.put=function(t,e,r){var i=c("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},function(t,e,r){"use strict";t.exports=function(t){return null!==t&&"object"==typeof t}},function(t,e,r){var i=r(8);t.exports=function(t,e){return t.set("X-Requested-With","XMLHttpRequest"),t.set("Expires","-1"),t.set("Cache-Control","no-cache,no-store,must-revalidate,max-age=-1,private"),(i||e)&&function(t){var e=Date.now().toString();void 0!==t._query&&t._query[0]?t._query[0]+="&"+e:t._query=[e]}(t),t}},function(t,e,r){function i(t){if(t)return function(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}(t)}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<i.length;n++)if((r=i[n])===e||r.fn===e){i.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r)for(var i=0,n=(r=r.slice(0)).length;i<n;++i)r[i].apply(this,e);return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){"use strict";var i=r(1);function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},n.prototype.parse=function(t){return this._parser=t,this},n.prototype.responseType=function(t){return this._responseType=t,this},n.prototype.serialize=function(t){return this._serializer=t,this},n.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},n.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var s=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];n.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!=e.status)return!0;if(t){if(t.code&&~s.indexOf(t.code))return!0;if(t.timeout&&"ECONNABORTED"==t.code)return!0;if(t.crossDomain)return!0}return!1},n.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},n.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.use=function(t){return t(this),this},n.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},n.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},n.prototype.get=function(t){return this._header[t.toLowerCase()]},n.prototype.getHeader=n.prototype.get,n.prototype.set=function(t,e){if(i(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},n.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},n.prototype.field=function(t,e){if(null==t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),i(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)this.field(t,e[n]);return this}if(null==e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},n.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype._auth=function(t,e,r,i){switch(r.type){case"basic":this.set("Authorization","Basic "+i(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},n.prototype.withCredentials=function(t){return null==t&&(t=!0),this._withCredentials=t,this},n.prototype.redirects=function(t){return this._maxRedirects=t,this},n.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},n.prototype.send=function(t){var e=i(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&i(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},n.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},n.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},n.prototype._appendQueryString=function(){console.trace("Unsupported")},n.prototype._timeoutError=function(t,e,r){if(!this._aborted){var i=new Error(t+e+"ms exceeded");i.timeout=e,i.code="ECONNABORTED",i.errno=r,this.timedout=!0,this.abort(),this.callback(i)}},n.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(t,e,r){"use strict";var i=r(6);function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.get=function(t){return this.header[t.toLowerCase()]},n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{t.link&&(this.links=i.parseLinks(t.link))}catch(t){}},n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.created=201==t,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t,this.unprocessableEntity=422==t}},function(t,e,r){"use strict";e.type=function(t){return t.split(/ *; */).shift()},e.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),i=r.shift(),n=r.shift();return i&&n&&(t[i]=n),t},{})},e.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),i=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=i,t},{})},e.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&(delete t.authorization,delete t.cookie),t}},function(t,e){function r(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){r.prototype[t]=function(){return this._defaults.push({fn:t,arguments:arguments}),this}}),r.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},t.exports=r},function(t,e){t.exports=function(){for(var t=3,e=document.createElement("b"),r=e.all||[];e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i><![endif]--\x3e",r[0];);return t>4?t:document.documentMode}()},function(t,e,r){"use strict";r.r(e);var i={};r.r(i),r.d(i,"note",function(){return _}),r.d(i,"phrase",function(){return T}),r.d(i,"pan",function(){return x}),r.d(i,"arpeggio",function(){return E}),r.d(i,"empty",function(){return A});var n={};r.r(n),r.d(n,"audioBufferLine",function(){return O}),r.d(n,"delayLine",function(){return I}),r.d(n,"pannerLine",function(){return L});var s=new((()=>{const t=new(window.AudioContext||window.webkitAudioContext),e=(new Date).getTime(),r=(()=>{let t=window.navigator.userAgent;return["iPhone","iPad","iPod","Android"].some(e=>-1!==t.indexOf(e))?"low":"middle"})();return class{get context(){return t}get originTime(){return e}get powerMode(){return r}toAudioBuffer({src:e,length:r}){return!(!e||!r)&&new Promise((i,n)=>{try{let s=new ArrayBuffer(r),o=new Uint8Array(s);for(let t=0;t<r;t++)o[t]=e.charCodeAt(t);t.decodeAudioData(s,t=>t?i(t):n(),n)}catch(t){return n(t)}})}}}).call(void 0,window||{}));var o=new Map([["C",1],["C#",2],["Db",2],["D",3],["D#",4],["Eb",4],["E",5],["F",6],["F#",7],["Gb",7],["G",8],["G#",9],["Ab",9],["A",10],["A#",11],["Bb",11],["B",12]]);var a=new Map([["kick","1$1"],["kick2","2$1"],["hihat","1$2"],["hihat2","2$2"],["snare","1$3"],["snare2","2$3"],["tom","1$4"],["tom2","2$4"],["side","1$9"],["side2","2$9"],["cymbal","1$12"],["cymbal2","2$12"]]);var u="https://api.ongaqjs.com",h=r(0),c=r.n(h),l=r(2),p=r.n(l);let d;const f=(()=>{const t=/^([A-Z])+([1-4])+(b|\#)?$/;return(e="")=>{if(!1===t.test(e))return e;{const r=t.exec(e);return r&&o.get(r[1])?`${r[2]}$${o.get(r[1]+(r[3]||""))}`:e}}})(),m=(t="")=>a.get(t)||t;let y=new Map;var g=new((()=>{return class{set({api_key:t,offline:e,resource:r,sound_name_map:i}){this.api_key=t,this.offline=!0===e,this.resource=r||"/sounds/",i instanceof Map?d=i:c.a.get(`${u}/soundnamemap/`).then(t=>{if(!t||200!==t.body.statusCode)throw new Error("Cannot download instrumental master data.");d=new Map(t.body.data)}).catch(()=>{throw new Error("Cannot download instrumental master data.")})}get endpoint(){return!1===this.offline?`${u}${this.resource}`:`${this.resource}`}import(t){if(!Array.isArray(t))return!1;const e=t.filter(t=>!y.get(t));if(0===e.length)return new Promise(t=>t());let r=e.map(t=>new Promise((r,i)=>{let n;(n=!1===this.offline?c.a.get(this.endpoint).query({sound:t,api_key:this.api_key}):c.a.get(`${this.endpoint}${d.get(t)&&d.get(t).id}.json`)).set("Content-Type","application/json").use(p.a).then(n=>{let o,a;if(!1===this.offline){if(!(o=n.body.sounds[0])||"OK"!==o.status)return i();a="string"==typeof o.data?JSON.parse(o.data):o.data}else a=n.body;let u=Object.keys(a.note),h=new Map,c=0;u.forEach(n=>{let o=a.note[n];s.toAudioBuffer({src:o.src,length:o.length}).then(e=>{h.set(n,e),++c===u.length&&(u=null,y.set(t,h),r())}).catch(()=>{e.forEach(t=>{y.has(t)&&y.delete(t)}),i()})})}).catch(()=>{e.forEach(t=>y.delete(t)),i(`Cannot load sound resources. There are 3 possible reasons: 1) Some of [ ${e.join(",")} ] is/are invalid instrumental name. 2) Some of them is/are not free and you don't have a pro license. 3) [ ${this.api_key} ] is not a valid API key.`)})}));return Promise.all(r)}ship({sound:t,key:e}){if(!t||!e||!y.get(t))return!1;const r=d.get(t)&&d.get(t).id;return r<2e4?e=f(e):r<3e4&&(e=m(e)),Array.isArray(e)?e.map(e=>y.get(t).get(e)).filter(t=>t):"string"==typeof e?[y.get(t).get(e)]:[]}}}).call(void 0,window||{}));let v=new Float32Array(6);var w=class{static toInt(t,e={}){let r="number"==typeof e.max?e.max:Number.POSITIVE_INFINITY,i="number"==typeof e.min?e.min:Number.NEGATIVE_INFINITY,n="number"==typeof e.min?e.base:10,s=parseInt(t,n);return!Number.isNaN(s)&&s<=r&&s>=i&&s}static getUUID(t){let e,r,i="";for(e=0;e<32;e++)r=16*Math.random()|0,8!=e&&12!=e&&16!=e&&20!=e||(i+="-"),i+=(12==e?4:16==e?3&r|8:r).toString(16);return"number"==typeof t&&(i=i.slice(0,t)),i}static getWaveShapeArray(t){let e=t&&t>=0&&t<=1?t:1;return v[0]=1*e,v[1]=.8*e,v[2]=.5*e,v[3]=.3*e,v[4]=.1*e,v[5]=0,v}static toKeyList(t,e,r){return!!t&&(Array.isArray(t)?t:Array.isArray(t.list)?t.list:"function"==typeof t?e>=0&&t(e,r):"string"==typeof t&&[t])}static toLength(t,e,r){switch(typeof t){case"number":return t;case"function":return e>=0&&t(e,r);default:return!1}}};const b=4;var _=(()=>(t={},e={})=>{let r=(t=>{let r;switch(typeof t){case"string":return[t];case"function":return!!(r=t(e.noteIndex,e.measure))&&(Array.isArray(r)?r:"object"==typeof r?Array.isArray(r)?r:r.key:"string"==typeof r&&[r]);case"object":return Array.isArray(t)?t:t.key;default:return!1}})(t.key);if(!r)return!1;let i=(()=>{if(!t.length)return b;switch(typeof t.length){case"number":return t.length;case"function":return t.length(e.noteIndex,e.measure);default:return!1}})();return!!i&&r.map(r=>({invoker:"audioBufferLine",data:{buffer:{sound:e.sound,length:i*e.secondsPerNote,key:r,startTime:e.noteTime},volume:t.volume>=0&&t.volume<=100?t.volume/100:null,secondsPerNote:e.secondsPerNote,targetIndex:0}}))}).call(void 0,window||{});var T=(()=>(t={},e={})=>{if(!Array.isArray(t.path)||0===t.path.length)return!1;let r,i,n=0,s=[];return t.path.forEach(o=>!(o.length<2)&&(o[1]>0&&(n+=o[1]),r=w.toKeyList(o[0],e.noteIndex,e.measure),i=w.toLength(o[1],e.noteIndex,e.measure),!(!r||!i)&&void r.forEach(r=>{s.push({invoker:"audioBufferLine",data:{buffer:{sound:e.sound,length:o[1]*e.secondsPerNote,key:r,startTime:e.noteTime+n*e.secondsPerNote},volume:o[2]>=0&&o[2]<=1?o[2]:t.volume>=0&&t.volume<=100?t.volume/100:null,secondsPerNote:e.secondsPerNote}})}))),s}).call(void 0,window||{});var x=(()=>(t={},e={})=>{let r=[],i=(()=>{if(0===e.layer.length)return!1;for(let t=e.layer.length-1,r=0;t>=r;t--)if("audioBufferLine"===e.layer[t][0].invoker)return e.layer[t];return!1})();if(!i)return!1;let n=(t=>{switch(typeof t){case"string":case"number":return w.toInt(t,{max:90,min:-90})/30;case"function":return w.toInt(t(e.noteIndex),{max:90,min:-90})/30;default:return 0}})(t.x);return 0!==n&&(i.forEach((t,e)=>{r.push({invoker:"pannerLine",data:{positionX:n,targetIndex:e}})}),r)}).call(void 0,window||{});var E=(()=>(t={},e={})=>{let r=[],i=(()=>{if(0===e.layer.length)return!1;for(let t=e.layer.length-1,r=0;t>=r;t--)if("audioBufferLine"===e.layer[t][0].invoker)return e.layer[t];return!1})();if(!i)return!1;let n="number"==typeof t.step&&t.step<16?t.step:1;return i.forEach((t,i)=>{r.push({invoker:"delayLine",data:{delayTime:e.secondsPerNote*(i<=3?i:3)*n,targetIndex:i}})}),r}).call(void 0,window||{});var A=(()=>()=>!1).call(void 0,window||{});var k=(()=>{let t={required:0,retrived:0,recycled:0};return class{constructor(t){this.x=s.context,this.name=t.name,this.isClass=t.isClass,this.active=!1!==t.active,this.makeMethod=t.makeMethod,this.make=(t=>this.isClass?new this.makeMethod(t):this.makeMethod(t)),this.washMethod=t.washMethod,this.pool=[],this.metrics={required:0,retrived:0,recycled:0}}allocate(e){let r=void 0;return t.required++,this.metrics.required++,0===this.pool.length||!1===this.active?r=this.make(e):(r=this.pool.pop())?(t.recycled++,this.metrics.recycled++):(r=this.make(e))&&this.washMethod&&(r=this.washMethod(r,e)),r}retrieve(e){this.pool.push(e),t.retrived++,this.metrics.retrived++}flush(){this.pool=[]}}}).call(void 0,window||{});const N=s.context;var P=class{constructor(t={}){this.init(t)}init(t){this.audioBufferNode=t.audioBufferNode instanceof AudioNode&&t.audioBufferNode,this.gainNode=t.gainNode instanceof GainNode?t.gainNode:(t=>(t.gain.setValueAtTime(1,0),t))(N.createGain()),this.output=t.output||this.gainNode,this.name=t.name,this.loader="function"==typeof t.loader?t.loader:null,this.starter="function"==typeof t.starter?t.starter:null}};const C=s.context;var O=({buffer:t,volume:e})=>{let r=g.ship(t);if(!r)return!1;let i=C.createBufferSource();i.length=t.length,i.buffer=r[0],i.startTime=t.startTime||C.currentTime;let n=C.createGain();return n.gain.setValueAtTime(e&&e>=0&&e<1?e:1,0),n.gain.setValueCurveAtTime(w.getWaveShapeArray(e),t.startTime+t.length-.02,.02),i.connect(n),new P({name:"audioBufferLine",audioBufferNode:i,gainNode:n,loader:(t,e)=>{t[e]&&n.connect(t[e].output)},starter:()=>{i.start(i.startTime)}})};const M=s.context;var I=({delayTime:t,targetIndex:e})=>{let r=M.createDelay();return r.delayTime.value=t,new P({name:"delayLine",delayNode:r,loader:(t,i)=>{if(0===i||!t[i-1])return!1;t[i-1]&&t[i-1].instance[e].output&&t[i-1].instance[e].output.connect(r),t[i]&&r.connect(t[i].output)},starter:null})};const S=s.context;var L=(({innerWidth:t,innerHeight:e})=>{let r=t,i=e,n=S.listener;return n.forwardX?(n.forwardX.setValueAtTime(0,S.currentTime),n.forwardY.setValueAtTime(0,S.currentTime),n.forwardZ.setValueAtTime(-1,S.currentTime),n.upX.setValueAtTime(0,S.currentTime),n.upY.setValueAtTime(1,S.currentTime),n.upZ.setValueAtTime(0,S.currentTime)):n.setOrientation(0,0,-1,0,1,0),n.positionX?(n.positionX.value=r/2,n.positionY.value=i/2,n.positionZ.value=200):n.setPosition(r/2,i/2,200),t=>{if(t.targetIndex>0)return!1;const e=S.createPanner(),n=[1,0,0];e.orientationX?(e.orientationX.setValueAtTime(n[0],S.currentTime),e.orientationY.setValueAtTime(n[1],S.currentTime),e.orientationZ.setValueAtTime(n[2],S.currentTime)):e.setOrientation(...n);let s=(t=>"number"==typeof t&&t>=-90&&t<=90?t:0)(t.positionX);const o=[r/2+s,i/2,200];return e.positionX?(e.positionX.setValueAtTime(o[0],S.currentTime),e.positionY.setValueAtTime(o[1],S.currentTime),e.positionZ.setValueAtTime(o[2],S.currentTime)):e.setPosition(...o),new P({name:"pannerLine",loader:(t,r)=>{if(0===r||!t[r-1])return!1;t[r-1].output.connect(e),t[r]&&e.connect(t[r].output)},starter:null})}}).call(null,window);const $=s.context;var R=new k({makeMethod:class{constructor(t){this.init(t)}init(t){this.graph=t,this.output=$.createGain(),this.secondsPerNote=t.secondsPerNote,this.layer=this.invokeAll()}invokeAll(){if(!Array.isArray(this.graph.layer))return!1;let t=new Array(this.graph.layer.length);this.graph.layer.forEach((e,r)=>{let i=e.map(e=>e.invoker in n&&n[e.invoker](e.data,r>0&&t[r-1])).filter(t=>t);i.length>0&&(t[r]={name:i[0].name,loader:(t,e)=>{i.forEach(r=>r.loader&&r.loader(t,e))},starter:()=>{i.forEach(t=>t.starter&&t.starter())},output:$.createGain(),instance:i})});for(let e=0,r=(t=t.filter(t=>t)).length;e<r;e++)t[e].loader(t,e),"audioBufferLine"===t[e].name&&t[e].output.connect(this.output);return t}connect(t){return this.output&&this.output.connect(t),this}start(){return!!this.startAble&&(this.layer.forEach(t=>t.starter()),this)}get startAble(){return this.layer&&this.layer[0]&&"function"==typeof this.layer[0].loader}},active:!0,isClass:!0,name:"SoundTree"});var q=new k({makeMethod:(()=>{return class{constructor(t){this.sound=t.sound,this.measure=t.measure,this.noteIndex=t.noteIndex,this.noteTime=t.noteTime,this.secondsPerNote=t.secondsPerNote,this.age=t.age,this.layer=[]}note(t={}){return this.develop("note",t)}pan(t={}){return this.develop("pan",t)}arpeggio(t={}){return this.develop("arpeggio",t)}empty(t={}){return this.develop("empty",t)}phrase(t={}){return this.develop("phrase",t)}pass(t){switch(typeof t){case"function":return t(this.noteIndex,this.measure);case"object":return Array.isArray(t)&&t.includes(this.noteIndex);case"number":return t===this.noteIndex;default:return!0}}develop(t,e){if(!this.pass(e.active))return this;let r=i[t](e,this);return r&&this.layer.push(r),this}}}).call(void 0,window||{}),active:!0,isClass:!0,name:"Graph"});var j={MIN_BPM:60,MAX_BPM:180,MEASURE:1,VOLUME:.5,NOTES_IN_MEASURE:16,PREFETCH_SECOND:"middle"===s.powerMode?.3:2};const D=s.context;var H=(()=>{return class{constructor(t,e){this.sound=t.sound,this.id=t.id||w.getUUID(),this.tag=Array.isArray(t.tag)?t.tag:[],this.bpm=t.bpm,this.measure=t.measure,this.notesInMeasure=t.notesInMeasure,this.currentNoteIndex=0,this.filters=t.filters,this.generator=(e=>t.filters.reduce((t,e)=>Object.hasOwnProperty.call(i,e.type)?t[e.type](e.params):t,e)),this.generator=this.generator.bind(this),this.nextNoteTime=0,this.age=0,this.noteQuota=0,this.consumedNotes=0,this.attachment={},this.active=!1,this.mute=!!t.mute,this.putTimerRight(),this.observe=this.observe.bind(this),g.import([this.sound]).then(()=>{console.log(this.sound),this.active=!0,e.onLoad&&e.onLoad()}).catch(t=>{e.onError&&e.onError(t)})}reset(){this.age=0,this.currentNoteIndex=0,this.consumedNotes=0,this.noteQuota=0}putTimerRight(t){this.nextNoteTime=t||D.currentTime}setQuota(t){this.noteQuota=t*this.notesInMeasure,this.active=!0}observe(t){let e=[],r=D.currentTime+j.PREFETCH_SECOND;for(;this.nextNoteTime-r>0&&this.nextNoteTime-r<j.PREFETCH_SECOND;)r+=j.PREFETCH_SECOND;for(;this.active&&this.nextNoteTime<r&&!(this.consumedNotes>=this.noteQuota);){t="object"==typeof t?Object.assign(t,this.attachment):this.attachment;let r=!this.mute&&this.capture(t);if(r&&r.layer.length>0&&(e=e.concat(r)),this.nextNoteTime+=this.secondsPerNote,this.currentNoteIndex+1>=this.measure*this.notesInMeasure?(this.currentNoteIndex=0,this.age++):this.currentNoteIndex++,++this.consumedNotes>=this.noteQuota){this.active=!1;break}}return e}capture(t){return!!this.generator&&(this.currentGraph=this.generator(q.allocate({sound:this.sound,measure:Math.floor(this.currentNoteIndex/this.notesInMeasure),noteIndex:this.currentNoteIndex%this.notesInMeasure,noteTime:this.nextNoteTime,secondsPerNote:this.secondsPerNote,age:this.age,attachment:t})),this.currentSoundTree=R.allocate(this.currentGraph),this.currentSoundTree.layer.length>0&&this.currentSoundTree)}attach(t={}){this.attachment=Object.assign(this.attachment,t)}detach(t){"string"==typeof t?delete this.attachment[t]:this.attachment={}}tag(...t){return this.tag=Array.isArray(this.tag)?this.tag:[],t.forEach(t=>{this.tag.includes(t)||this.tag.push(t)}),!1}set mute(t){"boolean"==typeof t&&(this._mute=t)}get mute(){return this._mute}set bpm(t){let e=w.toInt(t,{max:j.MAX_BPM,min:j.MIN_BPM});e&&(this._bpm=e)}get bpm(){return this._bpm}set chapter(t){if(!Array.isArray(t))return!1;this._chapter=t}get chapter(){return this._chapter}get secondsPerNote(){return 60/this.bpm/8}get absNoteIndex(){return this.currentNoteIndex+this.age*this.measure*this.notesInMeasure}}}).call(void 0,window||{});const G=100,B=.5,X=16,V=1,U=s.context;var z=new((()=>{return class{constructor(){this.parts=new Map,this.previousVolume=B,this.volume=B,this.isPlaying=!1,this.nextZeroTime=0,this.routine=this.routine.bind(this),this.pauseScheduling=this.pauseScheduling.bind(this),"low"===s.powerMode&&window.addEventListener("blur",()=>{this.pauseScheduling()})}add(t){return t.bpm=t.bpm||G,t.notesInMeasure=t.notesInMeasure||X,t.measure=t.measure||V,new Promise((e,r)=>{const i=new H(t,{onLoad:()=>{this.parts.set(i.id,i),e(i)},onError:t=>{r(t)}})})}prepareCommonGain(){if(this.commonGain)return!1;this.commonComp||(this.commonComp=U.createDynamicsCompressor(),this.commonComp.connect(U.destination)),this.commonGain=U.createGain(),this.commonGain.connect(this.commonComp),this.commonGain.gain.setValueAtTime(this.previousVolume||this.volume,0)}removeCommonGain(){if(!this.commonGain)return!1;this.commonGain.gain.setValueAtTime(0,0),this.commonGain=null}connect(t){return!(!t||!this.isPlaying||(t.connect(this.commonGain).start(),t=null,0))}setVolume(t,e){return!("number"!=typeof t||t<0||t>100||(t>0&&(this.previousVolume=this.volume),this.volume=t/100,this.commonGain&&this.commonGain.gain.setValueAtTime(this.volume,void 0!==e?e:U.currentTime+.01),1))}setBpm(t){return!("number"!=typeof t||t<60||t>180||(this.parts.forEach(e=>{e.bpm=t}),1))}startScheduling(){if(this.isPlaying||0===this.parts.size)return!1;this.isPlaying=!0,this.prepareCommonGain(),this.parts.forEach(t=>{t.putTimerRight(U.currentTime)});let t=[];this.parts.forEach(e=>t.push(e.measure)),this.parts.forEach(t=>{t.setQuota(1/0)}),this.scheduler=window.setInterval(this.routine,"middle"===s.powerMode?50:200)}pauseScheduling(){if(!this.isPlaying)return!1;this.scheduler&&(window.clearInterval(this.scheduler),this.scheduler=null),this.isPlaying=!1,this.removeCommonGain()}routine(){let t,e=[];this.parts.forEach(r=>{(t=r.observe())&&(t=t.filter(t=>t)),t.length>0&&(e=e.concat(t))}),e.length>0&&e.forEach(t=>{t.layer&&t.layer.length>0&&this.connect(t)})}switch({id:t,limitAge:e}){return!0}find({resource:t,data:e}){const r=["id","tag"];let i=void 0;const n=(t,e)=>{if(e)for(let n in e)r.includes(n)&&("tag"===n&&t[n].includes(e[n])||"tag"!==n&&t[n]===e[n])&&(i=i||[]).push(t);else(i=i||[]).push(t)};switch(t){case"loop":if(this.loop instanceof Map==0)return!1;this.loop.forEach(t=>n(t,e));break;case"part":if(this.loop instanceof Map==0)return!1;this.loop.forEach(t=>{if(t.part instanceof Map==0)return!1;t.part.forEach(t=>n(t,e))})}return i}}}).call(void 0,window||{}));const F=s.context;class Q{constructor(t){this.init(t)}init({api_key:t,offline:e,resourcesPath:r,volume:i,bpm:n}){return g.set({api_key:t,offline:e,resourcesPath:r}),this.volume=i,this.bpm=n,!1}add(t,e={}){return new Promise((e,r)=>{t.bpm=t.bpm||this.bpm;const i=z.add(t);i.then(e),i.catch(r)})}switch(t={}){return new Promise((e,r)=>{z.switch(t)?e():r()})}set volume(t){z.setVolume(t)}set bpm(t){z.setBpm(t)}start(){return new Promise((t,e)=>{z.startScheduling(),t()})}pause(){return new Promise((t,e)=>{z.pauseScheduling(),t()})}find(t){return z.find(t)}get params(){return{isPlaying:z.isPlaying,originTime:s.originTime,currentTime:F.currentTime,volume:100*z.volume}}}window.Ongaq=window.Ongaq||Q;var K=Q;var Y=new Map([["",[4,3]],["M7",[4,3,4]],["7",[4,3,3]],["m",[3,4]],["m7",[3,4,3]],["mM7",[3,4,4]],["6",[4,3,2]],["m6",[3,4,2]],["dim",[3,3,3]],["aug",[4,4]],["sus4",[5,2]],["7sus4",[5,2,3]],["7-5",[4,2,4]],["m7-5",[3,3,4]],["M7+5",[4,4,3]],["M9",[4,3,4,3]],["m9",[3,4,3,4]],["m11",[3,4,3,7]],["6(9)",[4,3,2,5]],["m6(9)",[3,4,2,5]],["7(b9)",[4,3,3,3]],["9",[4,3,3,4]],["7(9)",[4,3,3,4]],["7(#9)",[4,3,3,5]],["11",[4,3,3,7]],["7(#11)",[4,3,3,8]],["13",[4,3,3,11]],["7(13)",[4,3,3,11]]]);const Z=(t,e)=>{if(0===t||t<=-13||t>=13)return e;if(!Array.isArray(e))return[];let r=e.map(t=>t.split("$").map(t=>+t));return r=r.map(e=>e[1]+t<=12&&e[1]+t>0?`${e[0]}$${e[1]+t}`:t<0&&e[1]+t<=0?e[0]>1&&`${e[0]-1}$${12+e[1]+t}`:t>0&&e[1]+t>12&&(e[0]<4?`${e[0]+1}$${-12+e[1]+t}`:void 0)).filter(t=>t)};class W{constructor(t,e={}){this.init(t,e)}init(t,e){if(this.active=!0,this.defaultShift=e.defaultShift||0,this.defaultOctave=e.octave>0&&e.octave<=4?e.octave:2,"string"!=typeof t)return this.active=!1,!1;let r=(()=>{let e,r,i=[];return o.forEach((n,s)=>{(i=t.match(new RegExp("^"+s)))&&i[0]===s&&(e=n,r=s)}),{root:e,rootLabel:r}})();if(!r.root)return this.active=!1,!1;let i=(t=>{let e,r;return Y.forEach((i,n)=>{n===t&&(e=i,r=n)}),{scheme:e,schemeLabel:r}})(t.replace(r.rootLabel,""));if(!i.scheme)return this.active=!1,!1;let n=(()=>{if(e.key)return e.key;let t=[],n=r.root,s=this.defaultOctave;return t.push(`${s}$${n}`),i.scheme.forEach(e=>{let r=n+e>12;n=r?n+e-12:n+e,(s=r?s+1:s)<=4&&t.push(`${s}$${n}`)}),t})();this.rootLabel=r.rootLabel,this.defaultOctave=e.octave,this.scheme=i.scheme,this.schemeLabel=i.schemeLabel,this.originalKey=Z(this.defaultShift,n.map(t=>t)),this.key=Z(this.defaultShift,n)}shift(t){return new W(this.name,{octave:this.defaultOctave,key:Z(t,this.originalKey)})}octave(t){if(0===t||"number"!=typeof t||Number.isNaN(t))return this;let e=this.originalKey.map(t=>t.split("$").map(t=>+t));return e=e.map(e=>{if(e[0]+t<=4&&e[0]+t>0)return`${e[0]+t}$${e[1]}`}).filter(t=>t),new W(this.name,{octave:this.defaultOctave,key:e})}reverse(){let t=this.originalKey.reverse();return new W(this.name,{octave:this.defaultOctave,key:t})}slice(t,e){if(Number.isNaN(t))return this;let r=this.originalKey.slice(t,e);return new W(this.name,{octave:this.defaultOctave,key:r})}rotate(){if(!this.key)return this;let t=this.originalKey.map(t=>t),e=t.splice(-1,1)[0],r=t.splice(0,1)[0],i=e.split("$").map(t=>+t),n=r.split("$").map(t=>+t),s=n[1],o=(()=>n[1]>i[1]?i[0]:n[1]+i[1]>12?i[0]+1:i[0])();if(o>4)return this;let a=this.key.map(t=>t).splice(1);return a.push(`${o}$${s}`),new W(this.name,{octave:this.defaultOctave,key:a})}get route(){return Array.isArray(this.key)&&this.key[0]}get name(){return this.rootLabel+this.schemeLabel}}window.Chord=window.Chord||W;var J=W;class tt{constructor(t={},e={}){this.init(t,e)}init(t){this.bpm=t.bpm,this.id=t.id,this.tag=t.tag,this._part=[]}get part(){return this._part}add(t){return this._part.push(t),this}merge(t){return!(!t||!Array.isArray(t.part)||0===t.part.length)&&(t.part.forEach(t=>this.add(t)),this)}}window.Loop=window.Loop||tt;var et=tt;class rt{constructor(t={}){this.init(t)}init(t){this.id=t.id,this.sound=t.sound,this.tag=t.tag,this.measure=t.measure,this.notesInMeasure=t.notesInMeasure,this._filters=[],this.mute=!!t.mute}get filters(){return this._filters}add(t){return t?(this._filters.push(t),this):this}}window.Part=window.Part||rt;var it=rt;class nt{constructor(t){this.init(t)}init(t={type:type}){this.type="string"==typeof t.type?t.type:"note",this.params=t,delete t.type}}window.Filter=window.Filter||nt;const st={ROOT:o,SCHEME:Y,ENDPOINT:u};window.ONGAQ_CONSTANTS=window.ONGAQ_CONSTANTS||st;var ot=st;e.default={Ongaq:K,ONGAQ_CONSTANTS:ot,Chord:J,Loop:et,Part:it}}]);