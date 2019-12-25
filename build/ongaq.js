!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof self?i=self:(console.warn("Using browser-only version of superagent in non-browser environment"),i=this);var n=r(3),s=r(4),o=r(1),a=r(5),u=r(7);function h(){}var c=e=t.exports=function(t,r){return"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r)};e.Request=_,c.getXHR=function(){if(!(!i.XMLHttpRequest||i.location&&"file:"==i.location.protocol&&i.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var l="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};function p(t){if(!o(t))return t;var e=[];for(var r in t)m(e,r,t[r]);return e.join("&")}function m(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){m(t,e,r)});else if(o(r))for(var i in r)m(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function d(t){for(var e,r,i={},n=t.split("&"),s=0,o=n.length;s<o;++s)-1==(r=(e=n[s]).indexOf("="))?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function f(t){return/[\/+]json($|[^-\w])/.test(t)}function y(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=function(t){for(var e,r,i,n,s=t.split(/\r?\n/),o={},a=0,u=s.length;a<u;++a)-1!==(e=(r=s[a]).indexOf(":"))&&(i=r.slice(0,e).toLowerCase(),n=l(r.slice(e+1)),o[i]=n);return o}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function _(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t,e=null,i=null;try{i=new y(r)}catch(t){return(e=new Error("Parser is unable to parse the response")).parse=!0,e.original=t,r.xhr?(e.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,e.status=r.xhr.status?r.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),r.callback(e)}r.emit("response",i);try{r._isResponseOK(i)||(t=new Error(i.statusText||"Unsuccessful HTTP response"))}catch(e){t=e}t?(t.original=e,t.response=i,t.status=i.status,r.callback(t,i)):r.callback(null,i)})}function g(t,e,r){var i=c("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}c.serializeObject=p,c.parseString=d,c.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},c.serialize={"application/x-www-form-urlencoded":p,"application/json":JSON.stringify},c.parse={"application/x-www-form-urlencoded":d,"application/json":JSON.parse},a(y.prototype),y.prototype._parseBody=function(t){var e=c.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&f(this.type)&&(e=c.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},y.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",n=new Error(i);return n.status=this.status,n.method=e,n.url=r,n},c.Response=y,n(_.prototype),s(_.prototype),_.prototype.type=function(t){return this.set("Content-Type",c.types[t]||t),this},_.prototype.accept=function(t){return this.set("Accept",c.types[t]||t),this},_.prototype.auth=function(t,e,r){1===arguments.length&&(e=""),"object"==typeof e&&null!==e&&(r=e,e=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});return this._auth(t,e,r,function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")})},_.prototype.query=function(t){return"string"!=typeof t&&(t=p(t)),t&&this._query.push(t),this},_.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},_.prototype._getFormData=function(){return this._formData||(this._formData=new i.FormData),this._formData},_.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},_.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},_.prototype.buffer=_.prototype.ca=_.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},_.prototype.pipe=_.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},_.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},_.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||h,this._finalizeQueryString(),this._end()},_.prototype._end=function(){var t=this,e=this.xhr=c.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var i;try{i=e.status}catch(t){i=0}if(!i){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var i=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=i.bind(null,"download"),e.upload&&(e.upload.onprogress=i.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var n=this._header["content-type"],s=this._serializer||c.serialize[n?n.split(";")[0]:""];!s&&f(n)&&(s=c.serialize["application/json"]),s&&(r=s(r))}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&e.setRequestHeader(o,this.header[o]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},c.agent=function(){return new u},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){u.prototype[t.toLowerCase()]=function(e,r){var i=new c.Request(t,e);return this._setDefaults(i),r&&i.end(r),i}}),u.prototype.del=u.prototype.delete,c.get=function(t,e,r){var i=c("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},c.head=function(t,e,r){var i=c("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},c.options=function(t,e,r){var i=c("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.del=g,c.delete=g,c.patch=function(t,e,r){var i=c("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.post=function(t,e,r){var i=c("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},c.put=function(t,e,r){var i=c("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},function(t,e,r){"use strict";t.exports=function(t){return null!==t&&"object"==typeof t}},function(t,e,r){var i=r(8);t.exports=function(t,e){return t.set("X-Requested-With","XMLHttpRequest"),t.set("Expires","-1"),t.set("Cache-Control","no-cache,no-store,must-revalidate,max-age=-1,private"),(i||e)&&function(t){var e=Date.now().toString();void 0!==t._query&&t._query[0]?t._query[0]+="&"+e:t._query=[e]}(t),t}},function(t,e,r){function i(t){if(t)return function(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}(t)}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<i.length;n++)if((r=i[n])===e||r.fn===e){i.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r)for(var i=0,n=(r=r.slice(0)).length;i<n;++i)r[i].apply(this,e);return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){"use strict";var i=r(1);function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},n.prototype.parse=function(t){return this._parser=t,this},n.prototype.responseType=function(t){return this._responseType=t,this},n.prototype.serialize=function(t){return this._serializer=t,this},n.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},n.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var s=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];n.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!=e.status)return!0;if(t){if(t.code&&~s.indexOf(t.code))return!0;if(t.timeout&&"ECONNABORTED"==t.code)return!0;if(t.crossDomain)return!0}return!1},n.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},n.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.use=function(t){return t(this),this},n.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},n.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},n.prototype.get=function(t){return this._header[t.toLowerCase()]},n.prototype.getHeader=n.prototype.get,n.prototype.set=function(t,e){if(i(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},n.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},n.prototype.field=function(t,e){if(null==t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),i(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)this.field(t,e[n]);return this}if(null==e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},n.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype._auth=function(t,e,r,i){switch(r.type){case"basic":this.set("Authorization","Basic "+i(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},n.prototype.withCredentials=function(t){return null==t&&(t=!0),this._withCredentials=t,this},n.prototype.redirects=function(t){return this._maxRedirects=t,this},n.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},n.prototype.send=function(t){var e=i(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&i(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},n.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},n.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},n.prototype._appendQueryString=function(){console.trace("Unsupported")},n.prototype._timeoutError=function(t,e,r){if(!this._aborted){var i=new Error(t+e+"ms exceeded");i.timeout=e,i.code="ECONNABORTED",i.errno=r,this.timedout=!0,this.abort(),this.callback(i)}},n.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(t,e,r){"use strict";var i=r(6);function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.get=function(t){return this.header[t.toLowerCase()]},n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{t.link&&(this.links=i.parseLinks(t.link))}catch(t){}},n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.created=201==t,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t,this.unprocessableEntity=422==t}},function(t,e,r){"use strict";e.type=function(t){return t.split(/ *; */).shift()},e.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),i=r.shift(),n=r.shift();return i&&n&&(t[i]=n),t},{})},e.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),i=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=i,t},{})},e.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&(delete t.authorization,delete t.cookie),t}},function(t,e){function r(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(t){r.prototype[t]=function(){return this._defaults.push({fn:t,arguments:arguments}),this}}),r.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,e.arguments)})},t.exports=r},function(t,e){t.exports=function(){for(var t=3,e=document.createElement("b"),r=e.all||[];e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i><![endif]--\x3e",r[0];);return t>4?t:document.documentMode}()},function(t,e,r){"use strict";r.r(e);var i={};r.r(i),r.d(i,"empty",function(){return N}),r.d(i,"note",function(){return rt}),r.d(i,"arpeggio",function(){return at}),r.d(i,"pan",function(){return lt});const n=new(window.AudioContext||window.webkitAudioContext),s=(new Date).getTime(),o=(()=>{let t=window.navigator.userAgent;return["iPhone","iPad","iPod","Android"].some(e=>-1!==t.indexOf(e))?"low":"middle"})();var a={context:n,originTime:s,powerMode:o,SUPPRESSION:.5,toAudioBuffer:({src:t,length:e})=>!(!t||!e)&&new Promise((r,i)=>{try{let s=new ArrayBuffer(e),o=new Uint8Array(s);for(let r=0;r<e;r++)o[r]=t.charCodeAt(r);n.decodeAudioData(s,t=>t?r(t):i(),i)}catch(t){return i(t)}})};var u="https://api.ongaqjs.com";var h=new Map([["C",1],["C#",2],["Db",2],["D",3],["D#",4],["Eb",4],["E",5],["F",6],["F#",7],["Gb",7],["G",8],["G#",9],["Ab",9],["A",10],["A#",11],["Bb",11],["B",12]]);const c=/^([A-Z])+([1-4])+(b|#)?$/;var l=(t="")=>{if(!1===c.test(t))return t;{const e=c.exec(t);return e&&h.get(e[1])?`${e[2]}$${h.get(e[1]+(e[3]||""))}`:t}};var p=new Map([["kick","1$1"],["kick2","2$1"],["hihat","1$2"],["hihat2","2$2"],["snare","1$3"],["snare2","2$3"],["tom","1$4"],["tom2","2$4"],["side","1$9"],["side2","2$9"],["cymbal","1$12"],["cymbal2","2$12"]]),m=(t="")=>p.get(t)||t,d=r(0),f=r.n(d),y=r(2),_=r.n(y);let g=new Map;var v=new class{constructor(){this.soundNameMap=new Map}set({api_key:t}){this.api_key=t,f.a.get(`${u}/soundnamemap/`).then(t=>{if(!t||200!==t.body.statusCode)throw new Error("Cannot download instrumental master data.");this.soundNameMap=new Map(t.body.data)}).catch(()=>{throw new Error("Cannot download instrumental master data.")})}async import(t){return new Promise((e,r)=>{if(g.get(t))return e();f.a.get(`${u}/sounds/`).query({sound:t,api_key:this.api_key}).set("Content-Type","application/json").use(_.a).then(i=>{let n=i.body.sounds[0];if(!n||"OK"!==n.status)return r();let s="string"==typeof n.data?JSON.parse(n.data):n.data,o=Object.keys(s.note),u=new Map,h=0;o.forEach(async i=>{let n=s.note[i];try{let s=await a.toAudioBuffer({src:n.src,length:n.length});u.set(i,s),++h===o.length&&(o=null,g.set(t,u),e())}catch(e){g.has(t)&&g.delete(t),r()}})}).catch(()=>{g.has(t)&&g.delete(t),r(`Cannot load sound resources. There are 3 possible reasons: 1) [ ${t} ] is invalid instrumental name. 2) [ ${t} ] is not free and you don't have a pro license. 3) [ ${this.api_key} ] is not a valid API key.`)})})}ship({sound:t,key:e}){if(!t||!e||!g.get(t))return!1;const r=this.soundNameMap.get(t)&&this.soundNameMap.get(t).id;return r<2e4?e=l(e):r<3e4&&(e=m(e)),Array.isArray(e)?e.map(e=>g.get(t).get(e)).filter(t=>t):"string"==typeof e?[g.get(t).get(e)]:[]}};var b={BPM:120,MIN_BPM:60,MAX_BPM:180,MEASURE:4,VOLUME:.5,NOTE_VOLUME:.5,NOTES_IN_MEASURE:16,PREFETCH_SECOND:"middle"===a.powerMode?.3:2};let w=new Float32Array(6);var T={toInt:(t,e={})=>{let r="number"==typeof e.max?e.max:Number.POSITIVE_INFINITY,i="number"==typeof e.min?e.min:Number.NEGATIVE_INFINITY,n="number"==typeof e.min?e.base:10,s=parseInt(t,n);return!Number.isNaN(s)&&s<=r&&s>=i&&s},getUUID:t=>{let e,r,i="";for(e=0;e<32;e++)r=16*Math.random()|0,8!=e&&12!=e&&16!=e&&20!=e||(i+="-"),i+=(12==e?4:16==e?3&r|8:r).toString(16);return"number"==typeof t&&(i=i.slice(0,t)),i},getWaveShapeArray:t=>{let e=t&&t>=0&&t<=1?t:b.NOTE_VOLUME;return w[0]=1*e*a.SUPPRESSION,w[1]=.8*e*a.SUPPRESSION,w[2]=.5*e*a.SUPPRESSION,w[3]=.3*e*a.SUPPRESSION,w[4]=.1*e*a.SUPPRESSION,w[5]=0,w},toKeyList:(t,e,r)=>!!t&&(Array.isArray(t)?t:Array.isArray(t.list)?t.list:"function"==typeof t?e>=0&&t(e,r):"string"==typeof t&&[t]),toLength:(t,e,r)=>{switch(typeof t){case"number":return t;case"function":return e>=0&&t(e,r);default:return!1}}};let E={required:0,retrived:0,recycled:0};var x=class{constructor(t){this.x=a.context,this.name=t.name,this.isClass=t.isClass,this.active=!1!==t.active,this.makeMethod=t.makeMethod,this.make=(t=>this.isClass?new this.makeMethod(t):this.makeMethod(t)),this.pool=[],this.metrics={required:0,retrived:0,recycled:0}}allocate(t){let e=void 0;return E.required++,this.metrics.required++,0===this.pool.length||!1===this.active?e=this.make(t):(e=this.pool.pop())?(E.recycled++,this.metrics.recycled++):e=this.make(t),e}retrieve(t){this.pool.push(t),E.retrived++,this.metrics.retrived++}flush(){this.pool=[]}};var k=new x({makeMethod:()=>({}),active:!0,isClass:!1,name:"Element"});var A=new Map([["",[4,3]],["M7",[4,3,4]],["7",[4,3,3]],["m",[3,4]],["m7",[3,4,3]],["mM7",[3,4,4]],["6",[4,3,2]],["m6",[3,4,2]],["dim",[3,3,3]],["aug",[4,4]],["sus4",[5,2]],["7sus4",[5,2,3]],["7-5",[4,2,4]],["m7-5",[3,3,4]],["M7+5",[4,4,3]],["M9",[4,3,4,3]],["m9",[3,4,3,4]],["m11",[3,4,3,7]],["6(9)",[4,3,2,5]],["m6(9)",[3,4,2,5]],["7(b9)",[4,3,3,3]],["9",[4,3,3,4]],["7(9)",[4,3,3,4]],["7(#9)",[4,3,3,5]],["11",[4,3,3,7]],["7(#11)",[4,3,3,8]],["13",[4,3,3,11]],["7(13)",[4,3,3,11]]]),P="0.4.0";const O=a.context;var M=class{constructor(t){this._init(t)}add(t){return new Promise(async(e,r)=>{if("function"!=typeof t.loadSound)return r("not a Part object");t.bpm=t.bpm||this.bpm,t._beatsInMeasure=t._beatsInMeasure||b.NOTES_IN_MEASURE,t.measure=t.measure||b.MEASURE,this.parts.set(t.id,t);try{await t.loadSound();let i=!0;this.parts.forEach(t=>{(t._isLoading||t._loadingFailed)&&(i=!1)}),i&&this.onReady&&this.onReady(),e()}catch(t){this.isError||(this.onError&&this.onError(t),this.isError=!0),r(t)}})}start(){return!this.isPlaying&&0!==this.parts.size&&(this.isPlaying=!0,this._prepareCommonGain(),this.parts.forEach(t=>{t._putTimerRight(O.currentTime)}),this._scheduler=window.setInterval(this._routine,"middle"===a.powerMode?50:200),!1)}pause(){return!!this.isPlaying&&(this._scheduler&&(window.clearInterval(this._scheduler),this._scheduler=null),this.isPlaying=!1,this._removeCommonGain(),!1)}find(...t){let e=[];return 0===t.length?e:(this.parts.forEach(r=>{t.every(t=>r.tags.includes(t))&&e.push(r)}),e)}get params(){let t=!1;return this.parts.forEach(e=>{e._isLoading&&(t=!0)}),{loading:t,isPlaying:this.isPlaying,originTime:a.originTime,currentTime:O.currentTime,volume:this.volume}}get constants(){return{DRUM_NOTE:p,ROOT:h,SCHEME:A}}get version(){return P}set volume(t){if("number"!=typeof t||t<0||t>100)return!1;this._volume=t/100*a.SUPPRESSION,this.commonGain&&this.commonGain.gain.setValueAtTime(this._volume,O.currentTime+.01)}get volume(){return 100*this._volume/a.SUPPRESSION}set bpm(t){let e=T.toInt(t,{max:b.MAX_BPM,min:b.MIN_BPM});if(!e)return!1;this._bpm=e,this.parts.forEach(t=>{t.bpm=e})}get bpm(){return this._bpm}_init({api_key:t,volume:e,bpm:r,onReady:i,onError:n}){this.parts=new Map,this.isPlaying=!1,this.volume=e||b.VOLUME,this._nextZeroTime=0,this.bpm=r||b.BPM,"low"===a.powerMode&&window.addEventListener("blur",()=>{this.pauseScheduling()}),this.onReady="function"==typeof i&&i,this.onError="function"==typeof n&&n,this.isError=!1,this._routine=this._routine.bind(this),v.set({api_key:t})}_prepareCommonGain(){return!this.commonGain&&(this.commonComp||(this.commonComp=O.createDynamicsCompressor(),this.commonComp.connect(O.destination)),this.commonGain=O.createGain(),this.commonGain.connect(this.commonComp),this.commonGain.gain.setValueAtTime(this._volume,0),!1)}_removeCommonGain(){return!!this.commonGain&&(this.commonGain.gain.setValueAtTime(0,0),this.commonGain=null,!1)}_connect(t){return!(!t||!this.isPlaying||(t.terminal.length>0&&t.terminal[t.terminal.length-1].forEach(t=>{t.connect(this.commonGain)}),t.initialize(),k.retrieve(t),1))}_routine(){let t,e;return this.parts.forEach(r=>{(e=r.collect())&&e.length>0&&(t=(t=t||[]).concat(e))}),!(!t||0===t.length||(t.forEach(t=>{this._connect(t)}),1))}};var C=(t,e)=>{if(0===t||t<=-13||t>=13)return e;if(!Array.isArray(e))return[];let r=e.map(t=>t.split("$").map(t=>+t));return r=r.map(e=>e[1]+t<=12&&e[1]+t>0?`${e[0]}$${e[1]+t}`:t<0&&e[1]+t<=0?e[0]>1&&`${e[0]-1}$${12+e[1]+t}`:t>0&&e[1]+t>12&&(e[0]<4?`${e[0]+1}$${-12+e[1]+t}`:void 0)).filter(t=>t)};class S{constructor(t,e={}){this._init(t,e)}shift(t){return new S(this.name,{octave:this.defaultOctave,key:C(t,this.originalKey)})}octave(t){if(0===t||"number"!=typeof t||Number.isNaN(t))return this;let e=this.originalKey.map(t=>t.split("$").map(t=>+t));return e=e.map(e=>{if(e[0]+t<=4&&e[0]+t>0)return`${e[0]+t}$${e[1]}`}).filter(t=>t),new S(this.name,{octave:this.defaultOctave,key:e})}reverse(){let t=this.originalKey.reverse();return new S(this.name,{octave:this.defaultOctave,key:t})}slice(t,e){if(Number.isNaN(t))return this;let r=this.originalKey.slice(t,e);return new S(this.name,{octave:this.defaultOctave,key:r})}rotate(){if(!this.key)return this;let t=this.originalKey.map(t=>t),e=t.splice(-1,1)[0],r=t.splice(0,1)[0],i=e.split("$").map(t=>+t),n=r.split("$").map(t=>+t),s=n[1],o=(()=>n[1]>i[1]?i[0]:n[1]+i[1]>12?i[0]+1:i[0])();if(o>4)return this;let a=this.key.map(t=>t).splice(1);return a.push(`${o}$${s}`),new S(this.name,{octave:this.defaultOctave,key:a})}get route(){return Array.isArray(this.key)&&this.key[0]}get name(){return this.rootLabel+this.schemeLabel}_init(t,e){if(this.active=!0,this.defaultShift=e.defaultShift||0,this.defaultOctave=e.octave>0&&e.octave<=4?e.octave:2,"string"!=typeof t)return this.active=!1,!1;let r=(()=>{let e,r,i=[];return h.forEach((n,s)=>{(i=t.match(new RegExp("^"+s)))&&i[0]===s&&(e=n,r=s)}),{root:e,rootLabel:r}})();if(!r.root)return this.active=!1,!1;let i=(t=>{let e,r;return A.forEach((i,n)=>{n===t&&(e=i,r=n)}),{scheme:e,schemeLabel:r}})(t.replace(r.rootLabel,""));if(!i.scheme)return this.active=!1,!1;let n=(()=>{if(e.key)return e.key;let t=[],n=r.root,s=this.defaultOctave;return t.push(`${s}$${n}`),i.scheme.forEach(e=>{let r=n+e>12;n=r?n+e-12:n+e,(s=r?s+1:s)<=4&&t.push(`${s}$${n}`)}),t})();this.rootLabel=r.rootLabel,this.defaultOctave=e.octave,this.scheme=i.scheme,this.schemeLabel=i.schemeLabel,this.originalKey=C(this.defaultShift,n.map(t=>t)),this.key=C(this.defaultShift,n)}}var I=S,R={empty:10,phrase:110,note:140,arpeggio:240,pan:340};const L=R.empty;var N=()=>()=>{const t=k.allocate();return t.priority=L,t.terminal=[],t._inits=[],t.initialize=(()=>{t._inits.forEach(t=>t())}),t};const $=a.context;var B=new x({makeMethod:()=>$.createGain(),active:!0,isClass:!1,name:"GainNode"});const q=a.context,D=new Map,j=new Map;let U=[2,3,4,5].map(t=>4*t+q.currentTime);U.forEach(t=>{D.set(t,[]),j.set(t,[])});const H=t=>{const e=t+4;return(U=U.slice(1)).push(e),D.set(e,[]),j.set(e,[]),e};var G=({buffer:t,volume:e})=>{(t=>{if(U[0]>t)return!1;for(let e=0,r=U.length;e<r;e++)U[e]>t||(D.get(U[e])&&D.get(U[e]).forEach(t=>{t.disconnect(),B.retrieve(t)}),j.get(U[e])&&j.get(U[e]).forEach(t=>{t.disconnect()}),D.delete(U[e]),j.delete(U[e]),H(U[r-1]))})(q.currentTime);let r=v.ship(t);if(!r)return!1;let i=q.createBufferSource();i.length=t.length,i.buffer=r[0];let n=B.allocate();n.gain.setValueAtTime(a.SUPPRESSION*(e&&e>=0&&e<1?e:b.NOTE_VOLUME),0),!((t="")=>!!p.get(t))(t.key)&&n.gain.setValueCurveAtTime(T.getWaveShapeArray(e),t.startTime+t.length-(.03<t.length?.03:.6*t.length),.03<t.length?.03:.6*t.length),i.start(t.startTime),i.connect(n);for(let e=0,r=U.length;e<r;e++){if(t.startTime+t.length+.1<U[e]){D.get(U[e]).push(n),j.get(U[e]).push(i);break}if(e===r-1){const e=H(t.startTime+t.length+.1);D.get(e).push(n),j.get(e).push(i)}}return n};const X=a.context;var V=({delayTime:t})=>{let e=X.createDelay();return e.delayTime.value=t,e};const F=a.context,z=window.innerWidth,K=window.innerHeight,W=F.listener;W.forwardX?(W.forwardX.setValueAtTime(0,F.currentTime),W.forwardY.setValueAtTime(0,F.currentTime),W.forwardZ.setValueAtTime(-1,F.currentTime),W.upX.setValueAtTime(0,F.currentTime),W.upY.setValueAtTime(1,F.currentTime),W.upZ.setValueAtTime(0,F.currentTime)):W.setOrientation(0,0,-1,0,1,0),W.positionX?(W.positionX.value=z/2,W.positionY.value=K/2,W.positionZ.value=300):W.setPosition(z/2,K/2,300);var Y=({x:t})=>{const e=F.createPanner();e.refDistance=1e3,e.maxDistance=1e4,e.coneOuterGain=1;const r=[1,0,0];e.orientationX?(e.orientationX.setValueAtTime(r[0],F.currentTime),e.orientationY.setValueAtTime(r[1],F.currentTime),e.orientationZ.setValueAtTime(r[2],F.currentTime)):e.setOrientation(...r);const i=(t=>"number"==typeof t&&t>=-90&&t<=90?t:0)(t),n=[z/2+1e3/z*z/90*i/52,K/2,299];return e.positionX?(e.positionX.setValueAtTime(n[0],F.currentTime),e.positionY.setValueAtTime(n[1],F.currentTime),e.positionZ.setValueAtTime(n[2],F.currentTime)):e.setPosition(...n),e};var Z=(t,e)=>{switch(t){case"audiobuffer":return G(e);case"delay":return V(e);case"panner":return Y(e);default:return null}};const Q=(t,e={},r=!0)=>{let i;switch(typeof t){case"string":return e.string(t);case"object":return Array.isArray(t)&&e.array?e.array(t):e.object(t);case"number":return e.number(t);case"boolean":return t;case"function":return i=t(...e._arguments),"function"==typeof e._next&&(i=e._next(i)),r?Q(i,e,!1):i;default:return e.default?"function"==typeof e.default?e.default(e._arguments):e.default:t}};var J=Q;var tt=(t,e)=>J(t,{_arguments:[e.beatIndex,e.measure,e.attachment],object:t=>Array.isArray(t)&&t.includes(e.beatIndex),number:t=>t===e.beatIndex,default:!0});const et=R.note;var rt=(t={},e={})=>{if(!tt(t.active,e))return!1;const r=J(t.key,{_arguments:[e.beatIndex,e.measure,e.attachment],string:t=>[t],object:t=>t.key,array:t=>t});if(!r||0===r.length)return e._hasNote=!1,!1;const i=J(t.length,{_arguments:[e.beatIndex,e.measure,e.attachment],number:t=>t,default:4});return i?(e._hasNote=!0,n=>{let s=r.map(r=>Z("audiobuffer",{buffer:{sound:e.sound,length:i*e.secondsPerBeat,key:r,startTime:e.beatTime},volume:t.volume>=0&&t.volume<=100?t.volume/100:null}));return n.terminal[0]=n.terminal[0]||[],n.terminal[0].push(...s),n.priority=et,n.footprints=n.footprints||{},n.footprints._noteLength=i*e.secondsPerBeat,n.footprints._beatTime=e.beatTime,n}):(e._hasNote=!1,!1)};const it=R.arpeggio,nt=a.context,st=new Map,ot=new Map;var at=(t={},e={})=>{if(!tt(t.active,e))return!1;const r=J(t.step,{number:t=>t<16?t:1,_arguments:[e.beatIndex,e.measure,e.attachment],default:0});if(!r)return!1;const i=J(t.range,{number:t=>t>0&&t<9?t:3,_arguments:[e.beatIndex,e.measure,e.attachment],default:3}),n=`${r}_${i}_${e.secondsPerBeat}`;return ot.get(n)?ot.get(n):(ot.set(n,((t,e,r)=>i=>{if(0===i.terminal.length||0===i.terminal[i.terminal.length-1].length)return i;let n=[];for(let s,o=0,a=i.terminal[i.terminal.length-1].length;o<a;o++)s=r*(o<=e?o:e)*t,st.get(s)||st.set(s,Z("delay",{delayTime:s})),n.push(st.get(s));let s=nt.createGain();return s.gain.setValueAtTime(1,0),s.gain.setValueCurveAtTime(T.getWaveShapeArray(0),i.footprints._beatTime+i.footprints._noteLength-.02,.02),n.forEach(t=>{t.connect(s)}),i.terminal.push([s]),i.terminal[i.terminal.length-2].forEach((t,e)=>{t.connect(n[e<=n.length-1?e:n.length-1])}),n=n.slice(0,i.terminal[i.terminal.length-2].length),i.priority=it,i})(r,i,e.secondsPerBeat)),ot.get(n))};const ut=R.pan,ht=new Map,ct=new Map;var lt=(t={},e={})=>{if(!tt(t.active,e))return!1;const r=J(t.x,{string:t=>T.toInt(t,{max:90,min:-90}),number:t=>T.toInt(t,{max:90,min:-90}),_arguments:[e.beatIndex,e.measure,e.attachment],_next:t=>T.toInt(t,{max:90,min:-90}),default:0});return!!r&&(ct.get(r)?ct.get(r):(ct.set(r,(t=>e=>{if(0===e.terminal.length)return e;ht.get(t)||ht.set(t,Z("panner",{x:t}));const r=ht.get(t);return e.terminal.push([r]),e.terminal[e.terminal.length-2].forEach(t=>{t.connect(r)}),e.priority=ut,e})(r)),ct.get(r)))};const pt=a.context;var mt=class{constructor(t={}){this.sound=t.sound,this.id=t.id||T.getUUID(),this.tags=Array.isArray(t.tags)?t.tags:[],this.bpm=t.bpm,this.measure=t.measure,this.willMakeLap=t&&"function"==typeof t.willMakeLap&&t.willMakeLap,this.maxLap="number"==typeof t.maxLap&&t.maxLap>=0?t.maxLap:1/0,this.repeat=!1!==t.repeat,this._isLoading=!1,this._beatsInMeasure=t._beatsInMeasure,this._currentBeatIndex=0,this._nextBeatTime=0,this._lap=0,this._attachment={},this.default={},this.default.active=!1!==t.active,this.active=!1,this.mute=!!t.mute,this._putTimerRight(),this.collect=this.collect.bind(this)}add(t){return!(!t||!t.priority||-1===t.priority||(this.filters=this.filters||[],this.filters.push(t),this.filters.sort((t,e)=>t.priority>e.priority?1:t.priority<e.priority?-1:0),this._generator=(()=>{this._targetBeat=this._targetBeat||{},this._targetBeat.sound=this.sound,this._targetBeat.measure=Math.floor(this._currentBeatIndex/this._beatsInMeasure),this._targetBeat.beatIndex=this._currentBeatIndex%this._beatsInMeasure,this._targetBeat.beatTime=this._nextBeatTime,this._targetBeat.secondsPerBeat=this._secondsPerBeat,this._targetBeat.lap=this._lap,this._targetBeat.attachment=this._attachment;let t=!1,e=[];return this.filters.forEach(r=>{if(!Object.hasOwnProperty.call(i,r.type)||"note"!==r.type&&!t)return!1;const n=i[r.type](r.params,this._targetBeat);n&&("note"===r.type&&(t=!0),e.push(n))}),e.reduce((t,e)=>e(t),N()())}),this._generator=this._generator.bind(this),1))}attach(t={}){this._attachment=Object.assign(this._attachment,t)}collect(){let t,e=pt.currentTime+b.PREFETCH_SECOND;for(;this._nextBeatTime-e>0&&this._nextBeatTime-e<b.PREFETCH_SECOND;)e+=b.PREFETCH_SECOND;for(this._endTime&&this._endTime<e&&this._shutdown();this.active&&this._nextBeatTime<e;){let e=!this.mute&&this._generator();e&&(t=(t=t||[]).concat(e)),this._nextBeatTime+=this._secondsPerBeat,this._currentBeatIndex+1>=this.measure*this._beatsInMeasure?(this._currentBeatIndex=0,this._lap++,"function"==typeof this.willMakeLap&&this.willMakeLap({nextLap:this._lap,meanTime:this._nextBeatTime}),this._lap>this.maxLap&&(this.repeat?this.resetLap():this.out())):this._currentBeatIndex++}return t}detach(t){"string"==typeof t?delete this._attachment[t]:this._attachment={}}in(t){if("number"!=typeof t||t<=pt.currentTime)throw new Error("assign a number for the first argument for Part.in( )");return!this.active&&(this._meanTime=t,this._nextBeatTime=t,this.default.active=!0,this.active=!0,!1)}async loadSound(){return this._isLoading=!0,new Promise(async(t,e)=>{try{await v.import(this.sound),this._isLoading=!1,this.active=this.default.active,t()}catch(t){this._isLoading=!1,this._loadingFailed=!0,e(t)}})}out(t,e=!1){return!!this.active&&(this._endTime?e&&t&&t>pt.currentTime&&(this._endTime=t):t&&t>pt.currentTime?this._endTime=t:this._shutdown(),!1)}tag(...t){this.tags=Array.isArray(this.tags)?this.tags:[],t.forEach(t=>{this.tags.includes(t)||this.tags.push(t)})}removeTag(...t){this.tags=Array.isArray(this.tags)?this.tags:[],this.tags=this.tags.filter(e=>!t.includes(e))}resetLap(){this._lap=0}set mute(t){"boolean"==typeof t&&(this._mute=t)}get mute(){return this._mute}set bpm(t){let e=T.toInt(t,{max:b.MAX_BPM,min:b.MIN_BPM});e&&(this._bpm=e)}get bpm(){return this._bpm}_shutdown(){if(!this.active)return!1;this._meanTime=0,this._endTime=0,this._nextBeatTime=0,this.active=!1}_putTimerRight(t){if(!this.active)return!1;this._nextBeatTime=t||pt.currentTime}_reset(){this._lap=0,this._currentBeatIndex=0}get _secondsPerBeat(){return 60/this._bpm/8}};var dt=class{constructor(t){this.init(t)}init(t={type:null}){this.type="string"==typeof t.type?t.type:"note",this.params=t,this.priority=R[this.type]||-1,delete t.type}};window.Ongaq=window.Ongaq||M,window.Chord=window.Chord||I,window.Part=window.Part||mt,window.Filter=window.Filter||dt;e.default={Ongaq:M,Chord:I,Part:mt,Filter:dt}}]);