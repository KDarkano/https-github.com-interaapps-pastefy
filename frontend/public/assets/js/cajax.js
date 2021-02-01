!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"Cajax",(function(){return h})),n.d(e,"Prajax",(function(){return v})),n.d(e,"PrajaxPromise",(function(){return f})),n.d(e,"CajaxRequest",(function(){return l})),n.d(e,"PrajaxClient",(function(){return x}));var s=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(u(this,t),this.onResponseFunction=function(){},this.catchFunction=function(){},this.thenFunction=function(){},this.params=r,this.method=n,this.url=e,this.fetch=null,this.options=o,null!=r)if(r instanceof FormData)this.data=r;else{var i,a=[];for(i in r)a.push(encodeURIComponent(i)+"="+encodeURIComponent(r[i]));this.data=a.join("&").replace(/%20/g,"+")}else this.data=null;if(this.method=n,r instanceof FormData||(this.contenttype=o.usinginput||o.json?"application/json; charset=utf-8":"application/x-www-form-urlencoded"),!t.useFetch){var s=new XMLHttpRequest;s.open(n,e+("GET"!=this.method&&"DELETE"!=this.method||0===Object.keys(r).length?"":"?"+this.data)),this.xhr=s}(o.usinginput||o.json)&&null!=r&&(this.data=JSON.stringify(r))}var e,n,r;return e=t,(n=[{key:"response",value:function(t){var e=this;return this.onResponseFunction=function(){t(e.xhr)},this}},{key:"then",value:function(t){return this.thenFunction=t,this}},{key:"progress",value:function(t){var e=this;return this.xhr.upload.onprogress=function(n){t(e.xhr,n.loaded/n.total*100)},this}},{key:"catch",value:function(t){return this.catchFunction=t,this}},{key:"custom",value:function(t){return t(this.xhr),this}},{key:"contentType",value:function(t){return this.contenttype=t,this}},{key:"send",value:function(){var e,n=this,r=(i(e={resType:"none",res:null,response:null,responseText:null,ok:!1,status:null,statusText:"",url:this.url},"res",null),i(e,"json",(function(){return JSON.parse(this.responseText)})),e);if(t.useFetch){var u=o(o({},{method:this.method,headers:{"Content-Type":this.contenttype}}),this.options);"GET"!=this.method&&"HEAD"!=this.method&&(u.body=this.data),this.fetch=fetch(this.url+("GET"!=this.method&&"DELETE"!=this.method||0===Object.keys(this.params).length?"":"?"+this.data),u).then((function(t){t.text().then((function(e){n.thenFunction(o(o(o({},r),{responseText:e,response:e}),{resType:"fetch",res:t,status:t.status,statusText:t.statusText,url:t.url,ok:t.ok}))})).catch((function(e){return n.thenFunction(o(o(o({},r),{responseText:e,response:e}),{resType:"fetch",res:t,status:t.status,statusText:t.statusText,url:t.url,ok:t.ok}))}))})).catch((function(t){t.text().then((function(e){n.catchFunction(o(o(o({},r),{responseText:e,response:e}),t))})).catch((function(e){return n.catchFunction(o(o({},r),t))}))}))}else{if(null!=this.options)for(var a in this.options)this.xhr[a]=this.options[a];if(null!=this.options.header)for(var s in this.options.header)this.xhr.setRequestHeader(s,this.options.header[s]);this.xhr.setRequestHeader("Content-type",this.contenttype),this.xhr.send(this.data);var l=function(){n.catchFunction(o(o({},r),{resType:"xhr",res:n.xhr,status:n.xhr.status,statusText:n.xhr.statusText,url:n.xhr.responseURL,ok:!1,responseText:n.xhr.responseText,response:n.xhr.response}))};this.xhr.onerror=function(){l()},this.xhr.onblocked=function(){l()},this.xhr.onload=function(){n.thenFunction(o(o({},r),{resType:"xhr",res:n.xhr,status:n.xhr.status,statusText:n.xhr.statusText,url:n.xhr.responseURL,ok:!0,responseText:n.xhr.responseText,response:n.xhr.response}))}}return this}}])&&a(e.prototype,n),r&&a(e,r),t}();s.useFetch=!1,"undefined"==typeof XMLHttpRequest&&(s.useFetch=!0);var l=s;function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"POST",e,n)}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"GET",e,n)}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"POST",e,n)}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"DELETE",e,n)}},{key:"trace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"TRACE",e,n)}},{key:"connect",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"CONNECT",e,n)}},{key:"options",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"OPTIONS",e,n)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l(t,"UPDATE",e,n)}},{key:"ajax",value:function(t){return new l(null!=t.url&&t.url,null!=t.method&&t.method,null!=t.options&&t.options,null!=t.data&&t.data)}}],(n=null)&&c(e.prototype,n),r&&c(e,r),t}();var f=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(o,i){var u=new l(t,e,n,r);u.then((function(t){o(t)})),u.catch((function(t){i(t)})),void 0!==r.cajax&&(void 0!==r.cajax.custom&&u.cajax.custom(r.cajax.custom),void 0!==r.cajax.response&&u.cajax.response(r.cajax.response)),u.send()}))};function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"POST",e,n)}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"GET",e,n)}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"POST",e,n)}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"DELETE",e,n)}},{key:"trace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"TRACE",e,n)}},{key:"connect",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"CONNECT",e,n)}},{key:"options",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"OPTIONS",e,n)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return f(t,"UPDATE",e,n)}},{key:"ajax",value:function(t){return f(null!=t.url&&t.url,null!=t.method&&t.method,null!=t.options&&t.options,null!=t.data&&t.data)}}],(n=null)&&p(e.prototype,n),r&&p(e,r),t}();function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl||"",this.options=e.options||{},this.data=e.data||{}}var e,n,r;return e=t,(n=[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.get(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.post(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.put(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.delete(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"trace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.trace(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"connect",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.connect(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"options",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.options(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.update(this.baseUrl+t,y(y({},this.data),e),y(y({},this.options),n))}},{key:"ajax",value:function(t){return v.ajax(t)}}])&&b(e.prototype,n),r&&b(e,r),t}();e.default={Cajax:h,Prajax:v,PrajaxPromise:f,CajaxRequest:l,PrajaxClient:x}}]).default}));