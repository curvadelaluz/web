(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[815],{8926:function(e){function t(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},9483:function(e,t,n){var r=n(7854),o=n(4411),a=n(6330),i=r.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not a constructor")}},3366:function(e,t,n){var r=n(7854);e.exports=r.Promise},8523:function(e,t,n){"use strict";var r=n(9662),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},9478:function(e,t,n){var r=n(9670),o=n(111),a=n(8523);e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=a.f(e);return(0,n.resolve)(t),n.promise}},6707:function(e,t,n){var r=n(9670),o=n(9483),a=n(5112)("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||null==(n=r(i)[a])?t:o(n)}},6091:function(e,t,n){var r=n(6530).PROPER,o=n(7293),a=n(1361);e.exports=function(e){return o((function(){return!!a[e]()||"​᠎"!=="​᠎"[e]()||r&&a[e].name!==e}))}},3111:function(e,t,n){var r=n(1702),o=n(4488),a=n(1340),i=n(1361),c=r("".replace),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(e){return function(t){var n=a(o(t));return 1&e&&(n=c(n,u,"")),2&e&&(n=c(n,l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},1340:function(e,t,n){var r=n(7854),o=n(648),a=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7727:function(e,t,n){"use strict";var r=n(2109),o=n(1913),a=n(3366),i=n(7293),c=n(5005),s=n(614),u=n(6707),l=n(9478),f=n(1320);if(r({target:"Promise",proto:!0,real:!0,forced:!!a&&i((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,c("Promise")),n=s(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&s(a)){var d=c("Promise").prototype.finally;a.prototype.finally!==d&&f(a.prototype,"finally",d,{unsafe:!0})}},5674:function(e,t,n){"use strict";var r=n(2109),o=n(3111).start,a=n(6091)("trimStart"),i=a?function(){return o(this)}:"".trimStart;r({target:"String",proto:!0,name:"trimStart",forced:a},{trimStart:i,trimLeft:i})},4286:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(1880),o=n(7294),a=n(5444),i=n(6911),c=n(5127),s=n(7037),u=n(3751),l=n(9);function f(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var h=n(7326),p=n(4578),m=n(8812),v=n(5706),y=n.n(v);function b(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var E=o.createContext();var g={initialChunks:{}},k="PENDING",w="REJECTED";var x=function(e){return e};function C(e){var t=e.defaultResolveComponent,n=void 0===t?x:t,r=e.render,a=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),c={};function s(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):"static"}function u(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,m.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return y()(o,a,{preload:!0}),a}var l,v,x=function(e){var t=s(e),n=c[t];return n&&n.status!==w||((n=i.requireAsync(e)).status=k,c[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e),chunkName:i.chunkName(e),error:t?t.message:t}),n.status=w}))),n},C=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:s(n)},b(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),(0,h.Z)(r)):(!1!==t.ssr&&(i.isReady&&i.isReady(n)||i.chunkName&&g.initialChunks[i.chunkName(n)])&&r.loadSync(),r)}(0,p.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=s(e);return d({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var o=n.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===w&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return s(this.props)},o.getCache=function(){return c[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),c[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=u(i.requireSync(this.props),this.props,N);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=u(t,e.props,N);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,f(e,["__chunkExtractor","forwardedRef"]));return x(t)},o.render=function(){var e=this.props,n=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,f(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,c=i.error,s=i.loading,u=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===k)throw this.loadAsync();if(c)throw c;var l=o||t.fallback||null;return s?l:r({fallback:l,result:u,options:t,props:d({},a,{ref:n})})},n}(o.Component),S=(v=function(e){return o.createElement(E.Consumer,null,(function(t){return o.createElement(l,Object.assign({__chunkExtractor:t},e))}))},(l=C).displayName&&(v.displayName=l.displayName+"WithChunkExtractor"),v),N=o.forwardRef((function(e,t){return o.createElement(S,Object.assign({forwardedRef:t},e))}));return N.displayName="Loadable",N.preload=function(e){N.load(e)},N.load=function(e){return x(e)},N}return{loadable:i,lazy:function(e,t){return i(e,d({},t,{suspense:!0}))}}}var S=C({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return o.createElement(t,n)}}),N=S.loadable,_=S.lazy,R=C({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),P=R.loadable,O=R.lazy;var A=N;A.lib=P,_.lib=O;var q,K=A,L=(n(1652),K.lib((function(){return Promise.resolve().then(n.t.bind(n,1652,23))}))),T=function(){var e=function(){return(0,o.useLayoutEffect)((function(){console.dir(0==document.querySelector("[play-on-click]").attached||null==document.querySelector("[play-on-click]").attached),setTimeout((function(){0!=document.querySelector("[play-on-click]").attached&&null!=document.querySelector("[play-on-click]").attached||L.registerComponent("play-on-click",{init:function(){this.onClick=this.onClick.bind(this)},play:function(){window.addEventListener("click",this.onClick)},pause:function(){window.removeEventListener("click",this.onClick)},onClick:function(e){console.dir("click");var t=this.el.getAttribute("material").src;t&&(this.el.object3D.visible=!0,t.play())}})}),5e3)}),[]),o.createElement(o.Fragment,null,o.createElement(L,null),o.createElement("a-scene",null,o.createElement("a-assets",null,o.createElement("video",{id:"video",loop:!0,crossOrigin:"anonymous",playsInline:!0,src:"/camen2.mp4"})),o.createElement("a-videosphere",{rotation:"0 -90 0",src:"#video","play-on-click":!0}),o.createElement("a-camera",null,o.createElement("a-entity",{position:"0 0 -1.5","hide-on-play":"#video"}))))},t=(0,a.useStaticQuery)("156103689"),n=t.bg1.childImageSharp.fluid;t.bg2.childImageSharp.fluid;return o.createElement(c.Z,null,o.createElement(u.Z,{title:"Home"}),o.createElement(s.Z,null,o.createElement(i.Z,{Tag:"section",className:"container-fluid fullheight-ribbon d-flex flex-column",fluid:n,backgroundColor:"#040e18"},o.createElement("div",{className:"row flex-1"},o.createElement("div",{className:"col flex-1"},o.createElement("div",{className:"controls"},o.createElement("button",{type:"button",className:"btn btn-light btn-sm btn-pausar"},o.createElement("i",{className:"fas fa-pause"})),o.createElement("button",{type:"button",className:"btn btn-light btn-sm btn-pausar"},o.createElement("i",{className:"fas fa-step-backward"})),o.createElement("button",{type:"button",className:"btn btn-light btn-sm btn-pausar"},"2x")),o.createElement(e,null))),o.createElement("div",{className:"row ribbon no-gutters"},o.createElement("div",{className:"col-3 ribbon-blue"}),o.createElement("div",{className:"col-2 ribbon-red"}),o.createElement("div",{className:"col-4 ribbon-navy"}),o.createElement("div",{className:"col-3 ribbon-gray"})))))},Z=((0,l.ZP)(T)(q||(q=(0,r.Z)(["\n  width: 100%;\n  background-position: bottom center;\n  background-repeat: repeat-y;\n  background-size: cover;\n"]))),T)},7326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-vr-js-339f5729727d134a7ee6.js.map