!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Toast=e()}(this,(function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function c(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let o=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const a=new Set;function d(t){a.forEach(e=>{e.c(t)||(a.delete(e),e.f())}),0!==a.size&&u(d)}function f(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function b(){return p("")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}const k=new Set;let _,j=0;function z(t,e,n,s,c,r,i,l=0){const o=16.666/s;let u="{\n";for(let t=0;t<=1;t+=o){const s=e+(n-e)*r(t);u+=100*t+`%{${i(s,1-s)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,f=t.ownerDocument;k.add(f);const v=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild($("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,v.insertRule(`@keyframes ${d} ${a}`,v.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${d} ${s}ms linear ${c}ms 1 both`,j+=1,d}function q(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),c=n.length-s.length;c&&(t.style.animation=s.join(", "),j-=c,j||u(()=>{j||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function C(t){_=t}const T=[],M=[],O=[],E=[],S=Promise.resolve();let L=!1;function H(t){O.push(t)}let N=!1;const A=new Set;function I(){if(!N){N=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];C(e),B(e.$$)}for(T.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];A.has(e)||(A.add(e),e())}O.length=0}while(T.length);for(;E.length;)E.pop()();L=!1,N=!1,A.clear()}}function B(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let P;function R(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const D=new Set;let V;function F(){V={r:0,c:[],p:V}}function G(){V.r||c(V.c),V=V.p}function J(t,e){t&&t.i&&(D.delete(t),t.i(e))}function K(t,e,n,s){if(t&&t.o){if(D.has(t))return;D.add(t),V.c.push(()=>{D.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Q={duration:0};function U(n,s,i,l){let f=s(n,i),v=l?0:1,h=null,$=null,m=null;function p(){m&&q(n,m)}function g(t,e){const n=t.b-v;return e*=Math.abs(n),{a:v,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(s){const{delay:r=0,duration:i=300,easing:l=e,tick:b=t,css:x}=f||Q,w={start:o()+r,b:s};s||(w.group=V,V.r+=1),h?$=w:(x&&(p(),m=z(n,v,s,i,r,l,x)),s&&b(0,1),h=g(w,i),H(()=>R(n,s,"start")),function(t){let e;0===a.size&&u(d),new Promise(n=>{a.add(e={c:t,f:n})})}(t=>{if($&&t>$.start&&(h=g($,i),$=null,R(n,h.b,"start"),x&&(p(),m=z(n,v,h.b,h.duration,0,l,f.css))),h)if(t>=h.end)b(v=h.b,1-v),R(n,h.b,"end"),$||(h.b?p():--h.group.r||c(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;v=h.a+h.d*l(e/h.duration),b(v,1-v)}return!(!h&&!$)}))}return{run(t){r(f)?(P||(P=Promise.resolve(),P.then(()=>{P=null})),P).then(()=>{f=f(),b(t)}):b(t)},end(){p(),h=$=null}}}function W(t){t&&t.c()}function X(t,e,s){const{fragment:i,on_mount:l,on_destroy:o,after_update:u}=t.$$;i&&i.m(e,s),H(()=>{const e=l.map(n).filter(r);o?o.push(...e):c(e),t.$$.on_mount=[]}),u.forEach(H)}function Y(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(T.push(t),L||(L=!0,S.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,r,i,l,o,u=[-1]){const a=_;C(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:o,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:s(),dirty:u,skip_bound:!1};let v=!1;if(f.ctx=r?r(e,d,(t,n,...s)=>{const c=s.length?s[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=c)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](c),v&&Z(e,t)),n}):[],f.update(),v=!0,c(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&J(e.$$.fragment),X(e,n.target,n.anchor),I()}C(a)}class et{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t,{delay:n=0,duration:s=400,easing:c=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:c,css:t=>"opacity: "+t*r}}function st(e){let n,s,c;return{c(){n=m("svg"),s=m("path"),c=m("path"),x(s,"fill","none"),x(s,"d","M0 0h24v24H0z"),x(c,"d","M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10\n    10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414\n    1.414L11.003 16z"),x(c,"fill","rgba(255,255,255,1)"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox","0 0 24 24"),x(n,"width","46"),x(n,"height","46")},m(t,e){v(t,n,e),f(n,s),f(n,c)},p:t,i:t,o:t,d(t){t&&h(n)}}}class ct extends et{constructor(t){super(),tt(this,t,null,st,i,{})}}function rt(e){let n,s,c;return{c(){n=m("svg"),s=m("path"),c=m("path"),x(s,"fill","none"),x(s,"d","M0 0h24v24H0z"),x(c,"d","M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10\n    10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12\n    13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"),x(c,"fill","rgba(255,255,255,1)"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox","0 0 24 24"),x(n,"width","48"),x(n,"height","48")},m(t,e){v(t,n,e),f(n,s),f(n,c)},p:t,i:t,o:t,d(t){t&&h(n)}}}class it extends et{constructor(t){super(),tt(this,t,null,rt,i,{})}}function lt(e){let n,s,c;return{c(){n=m("svg"),s=m("path"),c=m("path"),x(s,"fill","none"),x(s,"d","M0 0h24v24H0z"),x(c,"d","M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10\n    10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"),x(c,"fill","rgba(255,255,255,1)"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox","0 0 24 24"),x(n,"width","46"),x(n,"height","46")},m(t,e){v(t,n,e),f(n,s),f(n,c)},p:t,i:t,o:t,d(t){t&&h(n)}}}class ot extends et{constructor(t){super(),tt(this,t,null,lt,i,{})}}function ut(e){let n,s,c;return{c(){n=m("svg"),s=m("path"),c=m("path"),x(s,"fill","none"),x(s,"d","M0 0h24v24H0z"),x(c,"d","M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134\n    3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"),x(c,"fill","rgba(255,255,255,1)"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox","0 0 24 24"),x(n,"width","46"),x(n,"height","46")},m(t,e){v(t,n,e),f(n,s),f(n,c)},p:t,i:t,o:t,d(t){t&&h(n)}}}class at extends et{constructor(t){super(),tt(this,t,null,ut,i,{})}}function dt(t){let e,n;return e=new at({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function ft(t){let e,n;return e=new ot({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function vt(t){let e,n;return e=new ct({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function ht(t){let e,n;return e=new it({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function $t(t){let e,n,s,c;const r=[ht,vt,ft,dt],i=[];function l(t,e){return"error"===t[0]?0:"success"===t[0]?1:"info"===t[0]?2:"warning"===t[0]?3:-1}return~(e=l(t))&&(n=i[e]=r[e](t)),{c(){n&&n.c(),s=b()},m(t,n){~e&&i[e].m(t,n),v(t,s,n),c=!0},p(t,[c]){let o=e;e=l(t),e!==o&&(n&&(F(),K(i[o],1,1,()=>{i[o]=null}),G()),~e?(n=i[e],n||(n=i[e]=r[e](t),n.c()),J(n,1),n.m(s.parentNode,s)):n=null)},i(t){c||(J(n),c=!0)},o(t){K(n),c=!1},d(t){~e&&i[e].d(t),t&&h(s)}}}function mt(t,e,n){let{type:s}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type)},[s]}class pt extends et{constructor(t){super(),tt(this,t,mt,$t,i,{type:0})}}function gt(e){let n;return{c(){n=$("div"),x(n,"class","loading svelte-o9gack")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class bt extends et{constructor(t){super(),tt(this,t,null,gt,i,{})}}function xt(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="rect1 svelte-14w57fb"></div> \n  <div class="rect2 svelte-14w57fb"></div> \n  <div class="rect3 svelte-14w57fb"></div> \n  <div class="rect4 svelte-14w57fb"></div> \n  <div class="rect5 svelte-14w57fb"></div>',x(n,"class","spinner svelte-14w57fb")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class wt extends et{constructor(t){super(),tt(this,t,null,xt,i,{})}}function yt(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="bounce1 svelte-nqu8i9"></div> \n  <div class="bounce2 svelte-nqu8i9"></div> \n  <div class="bounce3 svelte-nqu8i9"></div>',x(n,"class","spinner svelte-nqu8i9")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class kt extends et{constructor(t){super(),tt(this,t,null,yt,i,{})}}function _t(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="spinner-container container1 svelte-1hhja4q"><div class="circle1 svelte-1hhja4q"></div> \n    <div class="circle2 svelte-1hhja4q"></div> \n    <div class="circle3 svelte-1hhja4q"></div> \n    <div class="circle4 svelte-1hhja4q"></div></div> \n  <div class="spinner-container container2 svelte-1hhja4q"><div class="circle1 svelte-1hhja4q"></div> \n    <div class="circle2 svelte-1hhja4q"></div> \n    <div class="circle3 svelte-1hhja4q"></div> \n    <div class="circle4 svelte-1hhja4q"></div></div> \n  <div class="spinner-container container3 svelte-1hhja4q"><div class="circle1 svelte-1hhja4q"></div> \n    <div class="circle2 svelte-1hhja4q"></div> \n    <div class="circle3 svelte-1hhja4q"></div> \n    <div class="circle4 svelte-1hhja4q"></div></div>',x(n,"class","spinner svelte-1hhja4q")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class jt extends et{constructor(t){super(),tt(this,t,null,_t,i,{})}}function zt(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="sk-cube sk-cube1 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube2 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube3 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube4 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube5 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube6 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube7 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube8 svelte-f9cebt"></div> \n  <div class="sk-cube sk-cube9 svelte-f9cebt"></div>',x(n,"class","sk-cube-grid svelte-f9cebt")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class qt extends et{constructor(t){super(),tt(this,t,null,zt,i,{})}}function Ct(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="sk-child sk-double-bounce1 svelte-17jc42p"></div> \n  <div class="sk-child sk-double-bounce2 svelte-17jc42p"></div>',x(n,"class","sk-double-bounce svelte-17jc42p")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Tt extends et{constructor(t){super(),tt(this,t,null,Ct,i,{})}}function Mt(e){let n;return{c(){n=$("div"),x(n,"class","sk-rotating-plane svelte-15yp1fg")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Ot extends et{constructor(t){super(),tt(this,t,null,Mt,i,{})}}function Et(e){let n;return{c(){n=$("div"),x(n,"class","cssload-zenith svelte-ytrlg6")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class St extends et{constructor(t){super(),tt(this,t,null,Et,i,{})}}function Lt(t){let e,n;return e=new bt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Ht(t){let e,n;return e=new St({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Nt(t){let e,n;return e=new Ot({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function At(t){let e,n;return e=new Tt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function It(t){let e,n;return e=new qt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Bt(t){let e,n;return e=new jt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Pt(t){let e,n;return e=new kt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Rt(t){let e,n;return e=new wt({}),{c(){W(e.$$.fragment)},m(t,s){X(e,t,s),n=!0},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Dt(t){let e,n,s,c;const r=[Rt,Pt,Bt,It,At,Nt,Ht,Lt],i=[];function l(t,e){return"style1"===t[0]?0:"style2"===t[0]?1:"style3"===t[0]?2:"style4"===t[0]?3:"style5"===t[0]?4:"style6"===t[0]?5:"style7"===t[0]?6:7}return e=l(t),n=i[e]=r[e](t),{c(){n.c(),s=b()},m(t,n){i[e].m(t,n),v(t,s,n),c=!0},p(t,[c]){let o=e;e=l(t),e!==o&&(F(),K(i[o],1,1,()=>{i[o]=null}),G(),n=i[e],n||(n=i[e]=r[e](t),n.c()),J(n,1),n.m(s.parentNode,s))},i(t){c||(J(n),c=!0)},o(t){K(n),c=!1},d(t){i[e].d(t),t&&h(s)}}}function Vt(t,e,n){let{type:s}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type)},[s]}class Ft extends et{constructor(t){super(),tt(this,t,Vt,Dt,i,{type:0})}}function Gt(t){let e,n,s,c,r,i;const l=[Qt,Kt,Jt],o=[];function u(t,e){return"icon"===t[0].type?0:"text"===t[0].type?1:2}return s=u(t),c=o[s]=l[s](t),{c(){e=$("div"),n=$("div"),c.c(),x(n,"class","content-box svelte-rel89c"),x(e,"class","toast-box svelte-rel89c"),y(e,"pointer-events",t[0].forbidClick?"all":"none"),y(e,"z-index",t[0].zIndex)},m(t,c){v(t,e,c),f(e,n),o[s].m(n,null),i=!0},p(t,r){let a=s;s=u(t),s===a?o[s].p(t,r):(F(),K(o[a],1,1,()=>{o[a]=null}),G(),c=o[s],c||(c=o[s]=l[s](t),c.c()),J(c,1),c.m(n,null)),(!i||1&r)&&y(e,"pointer-events",t[0].forbidClick?"all":"none"),(!i||1&r)&&y(e,"z-index",t[0].zIndex)},i(t){i||(J(c),H(()=>{r||(r=U(e,nt,{duration:300},!0)),r.run(1)}),i=!0)},o(t){K(c),r||(r=U(e,nt,{duration:300},!1)),r.run(0),i=!1},d(t){t&&h(e),o[s].d(),t&&r&&r.end()}}}function Jt(t){let e,n,s,c,r;s=new Ft({props:{type:t[0].loadingStyle}});let i=t[0].text&&Ut(t);return{c(){e=$("div"),n=$("div"),W(s.$$.fragment),c=g(),i&&i.c(),x(n,"class","icon"),x(e,"class","loading-box svelte-rel89c")},m(t,l){v(t,e,l),f(e,n),X(s,n,null),f(e,c),i&&i.m(e,null),r=!0},p(t,n){const c={};1&n&&(c.type=t[0].loadingStyle),s.$set(c),t[0].text?i?i.p(t,n):(i=Ut(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(t){r||(J(s.$$.fragment,t),r=!0)},o(t){K(s.$$.fragment,t),r=!1},d(t){t&&h(e),Y(s),i&&i.d()}}}function Kt(e){let n,s,c=e[0].text+"";return{c(){n=$("div"),s=p(c),x(n,"class","text-box svelte-rel89c")},m(t,e){v(t,n,e),f(n,s)},p(t,e){1&e&&c!==(c=t[0].text+"")&&w(s,c)},i:t,o:t,d(t){t&&h(n)}}}function Qt(t){let e,n,s,c;n=new pt({props:{type:t[0].icon}});let r=t[0].text&&Wt(t);return{c(){e=$("div"),W(n.$$.fragment),s=g(),r&&r.c(),x(e,"class","icon-box svelte-rel89c")},m(t,i){v(t,e,i),X(n,e,null),f(e,s),r&&r.m(e,null),c=!0},p(t,s){const c={};1&s&&(c.type=t[0].icon),n.$set(c),t[0].text?r?r.p(t,s):(r=Wt(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i(t){c||(J(n.$$.fragment,t),c=!0)},o(t){K(n.$$.fragment,t),c=!1},d(t){t&&h(e),Y(n),r&&r.d()}}}function Ut(t){let e,n,s=t[0].text+"";return{c(){e=$("div"),n=p(s),x(e,"class","text svelte-rel89c")},m(t,s){v(t,e,s),f(e,n)},p(t,e){1&e&&s!==(s=t[0].text+"")&&w(n,s)},d(t){t&&h(e)}}}function Wt(t){let e,n,s=t[0].text+"";return{c(){e=$("div"),n=p(s),x(e,"class","text svelte-rel89c")},m(t,s){v(t,e,s),f(e,n)},p(t,e){1&e&&s!==(s=t[0].text+"")&&w(n,s)},d(t){t&&h(e)}}}function Xt(t){let e,n,s=t[0].show&&Gt(t);return{c(){s&&s.c(),e=b()},m(t,c){s&&s.m(t,c),v(t,e,c),n=!0},p(t,[n]){t[0].show?s?(s.p(t,n),1&n&&J(s,1)):(s=Gt(t),s.c(),J(s,1),s.m(e.parentNode,e)):s&&(F(),K(s,1,1,()=>{s=null}),G())},i(t){n||(J(s),n=!0)},o(t){K(s),n=!1},d(t){s&&s.d(t),t&&h(e)}}}function Yt(t,e,n){let s,c={duration:1500,zIndex:99999,forbidClick:!1},r=Object.assign({},{show:!1,text:null,icon:null,forbidClick:!1,zIndex:99999});function i(){clearTimeout(s),n(0,r.show=!1,r)}function l(t){n(0,r.text=t,r)}function o(t,e,s){return n(0,r.type="icon",r),n(0,r.icon=e,r),n(0,r.text=t,r),u(s=Object.assign(Object.assign({},c),s))}function u(t){return clearTimeout(s),n(0,r.show=!0,r),n(0,r.forbidClick=t.forbidClick,r),t.duration>0&&(s=setTimeout(()=>{n(0,r.show=!1,r)},t.duration)),n(0,r.zIndex=t.zIndex,r),{setText:l,clear:i}}return[r,function(t){c=Object.assign(Object.assign({},c),t)},function(t,e){if(t)return n(0,r.type="text",r),n(0,r.text=t,r),u(e=Object.assign(Object.assign({},c),e))},function(t,e){return o(t,"info",e)},function(t,e){return o(t,"success",e)},function(t,e){return o(t,"error",e)},function(t,e){return o(t,"warning",e)},function(t){clearTimeout(s),n(0,r.type="loading",r);let e=Object.assign(Object.assign({},c),{duration:-1,forbidClick:!0});return t?"string"==typeof t?(n(0,r.text=t,r),u(e)):(n(0,r.text=t.text,r),n(0,r.loadingStyle=t.style||"style0",r),u(t=Object.assign(Object.assign({},e),t))):u(e)},i,l]}return new class extends et{constructor(t){super(),tt(this,t,Yt,Xt,i,{config:1,text:2,info:3,success:4,error:5,warning:6,loading:7,clear:8,setText:9})}get config(){return this.$$.ctx[1]}get text(){return this.$$.ctx[2]}get info(){return this.$$.ctx[3]}get success(){return this.$$.ctx[4]}get error(){return this.$$.ctx[5]}get warning(){return this.$$.ctx[6]}get loading(){return this.$$.ctx[7]}get clear(){return this.$$.ctx[8]}get setText(){return this.$$.ctx[9]}}({target:document.body})}));