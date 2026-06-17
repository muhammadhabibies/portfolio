(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,_=g?g.emptyScript:``,ee=h.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},te=(e,t)=>!l(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??te)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:`open`},x[v(`elementProperties`)]=new Map,x[v(`finalized`)]=new Map,ee?.({ReactiveElement:x}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var S=globalThis,ne=e=>e,C=S.trustedTypes,w=C?C.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,re=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,ie=`?`+T,ae=`<${ie}>`,E=document,D=()=>E.createComment(``),O=e=>e===null||typeof e!=`object`&&typeof e!=`function`,k=Array.isArray,oe=e=>k(e)||typeof e?.[Symbol.iterator]==`function`,A=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,M=/>/g,N=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),P=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),ce=new WeakMap,B=E.createTreeWalker(E,129);function le(e,t){if(!k(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return w===void 0?t:w.createHTML(t)}var ue=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=j;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===j?c[1]===`!--`?o=se:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(I.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=M:o===N?c[0]===`>`?(o=i??j,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?F:P):o===F||o===P?o=N:o===se||o===M?o=j:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===j?n+ae:l>=0?(r.push(s),n.slice(0,l)+re+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[le(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},V=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ue(t,n);if(this.el=e.createElement(l,r),B.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=B.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(re)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?fe:r[1]===`?`?pe:r[1]===`@`?me:W}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(I.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],D()),B.nextNode(),c.push({type:2,index:++a});i.append(e[t],D())}}}else if(i.nodeType===8)if(i.data===ie)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}a++}}static createElement(e,t){let n=E.createElement(`template`);return n.innerHTML=e,n}};function H(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=O(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=H(e,i._$AS(e,t.values),i,r)),t}var de=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);B.currentNode=r;let i=B.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new U(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new he(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=B.nextNode(),a++)}return B.currentNode=E,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},U=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),O(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=V.createElement(le(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new de(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new V(e)),t}k(t){k(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(D()),this.O(D()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ne(e).nextSibling;ne(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=H(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=H(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!O(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},fe=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},pe=class extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},me=class extends W{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},he=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}},ge=S.litHtmlPolyfillSupport;ge?.(V,U),(S.litHtmlVersions??=[]).push(`3.3.3`);var _e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new U(t.insertBefore(D(),e),e,void 0,n??{})}return i._$AI(e),i},G=globalThis,K=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};K._$litElement$=!0,K.finalized=!0,G.litElementHydrateSupport?.({LitElement:K});var ve=G.litElementPolyfillSupport;ve?.({LitElement:K}),(G.litElementVersions??=[]).push(`4.2.2`);var q=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ye=`http://www.w3.org/2000/svg`,be=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}};function J(e,t,n,r,i){return{type:`path`,ops:Z(e,t,n,r,i)}}function xe(e,t,n){let r=(e||[]).length;if(r>2){let i=[];for(let t=0;t<r-1;t++)i.push(...Z(e[t][0],e[t][1],e[t+1][0],e[t+1][1],n));return t&&i.push(...Z(e[r-1][0],e[r-1][1],e[0][0],e[0][1],n)),{type:`path`,ops:i}}return r===2?J(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:`path`,ops:[]}}function Se(e,t,n,r,i){return function(e,t){return xe(e,!0,t)}([[e,t],[e+n,t],[e+n,t+r],[e,t+r]],i)}function Ce(e,t,n,r,i){return function(e,t,n,r){let[i,a]=De(r.increment,e,t,r.rx,r.ry,1,r.increment*Y(.1,Y(.4,1,n),n),n),o=Ee(i,null,n);if(!n.disableMultiStroke){let[i]=De(r.increment,e,t,r.rx,r.ry,1.5,0,n),a=Ee(i,null,n);o=o.concat(a)}return{estimatedPoints:a,opset:{type:`path`,ops:o}}}(e,t,i,function(e,t,n){let r=Math.sqrt(2*Math.PI*Math.sqrt(((e/2)**2+(t/2)**2)/2)),i=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r),a=2*Math.PI/i,o=Math.abs(e/2),s=Math.abs(t/2),c=1-n.curveFitting;return o+=X(o*c,n),s+=X(s*c,n),{increment:a,rx:o,ry:s}}(n,r,i)).opset}function we(e){return e.randomizer||=new be(e.seed||0),e.randomizer.next()}function Y(e,t,n,r=1){return n.roughness*r*(we(n)*(t-e)+e)}function X(e,t,n=1){return Y(-e,e,t,n)}function Z(e,t,n,r,i,a=!1){let o=a?i.disableMultiStrokeFill:i.disableMultiStroke,s=Te(e,t,n,r,i,!0,!1);if(o)return s;let c=Te(e,t,n,r,i,!0,!0);return s.concat(c)}function Te(e,t,n,r,i,a,o){let s=(e-n)**2+(t-r)**2,c=Math.sqrt(s),l=1;l=c<200?1:c>500?.4:-.0016668*c+1.233334;let u=i.maxRandomnessOffset||0;u*u*100>s&&(u=c/10);let d=u/2,f=.2+.2*we(i),p=i.bowing*i.maxRandomnessOffset*(r-t)/200,m=i.bowing*i.maxRandomnessOffset*(e-n)/200;p=X(p,i,l),m=X(m,i,l);let h=[],g=()=>X(d,i,l),_=()=>X(u,i,l);return a&&(o?h.push({op:`move`,data:[e+g(),t+g()]}):h.push({op:`move`,data:[e+X(u,i,l),t+X(u,i,l)]})),o?h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+g(),m+t+(r-t)*f+g(),p+e+2*(n-e)*f+g(),m+t+2*(r-t)*f+g(),n+g(),r+g()]}):h.push({op:`bcurveTo`,data:[p+e+(n-e)*f+_(),m+t+(r-t)*f+_(),p+e+2*(n-e)*f+_(),m+t+2*(r-t)*f+_(),n+_(),r+_()]}),h}function Ee(e,t,n){let r=e.length,i=[];if(r>3){let a=[],o=1-n.curveTightness;i.push({op:`move`,data:[e[1][0],e[1][1]]});for(let t=1;t+2<r;t++){let n=e[t];a[0]=[n[0],n[1]],a[1]=[n[0]+(o*e[t+1][0]-o*e[t-1][0])/6,n[1]+(o*e[t+1][1]-o*e[t-1][1])/6],a[2]=[e[t+1][0]+(o*e[t][0]-o*e[t+2][0])/6,e[t+1][1]+(o*e[t][1]-o*e[t+2][1])/6],a[3]=[e[t+1][0],e[t+1][1]],i.push({op:`bcurveTo`,data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&t.length===2){let e=n.maxRandomnessOffset;i.push({op:`lineTo`,data:[t[0]+X(e,n),t[1]+X(e,n)]})}}else r===3?(i.push({op:`move`,data:[e[1][0],e[1][1]]}),i.push({op:`bcurveTo`,data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):r===2&&i.push(...Z(e[0][0],e[0][1],e[1][0],e[1][1],n));return i}function De(e,t,n,r,i,a,o,s){let c=[],l=[],u=X(.5,s)-Math.PI/2;l.push([X(a,s)+t+.9*r*Math.cos(u-e),X(a,s)+n+.9*i*Math.sin(u-e)]);for(let o=u;o<2*Math.PI+u-.01;o+=e){let e=[X(a,s)+t+r*Math.cos(o),X(a,s)+n+i*Math.sin(o)];c.push(e),l.push(e)}return l.push([X(a,s)+t+r*Math.cos(u+2*Math.PI+.5*o),X(a,s)+n+i*Math.sin(u+2*Math.PI+.5*o)]),l.push([X(a,s)+t+.98*r*Math.cos(u+o),X(a,s)+n+.98*i*Math.sin(u+o)]),l.push([X(a,s)+t+.9*r*Math.cos(u+.5*o),X(a,s)+n+.9*i*Math.sin(u+.5*o)]),[l,c]}function Q(e,t){return{maxRandomnessOffset:2,roughness:e===`highlight`?3:1.5,bowing:1,stroke:`#000`,strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:`hachure`,fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:e!==`double`,disableMultiStrokeFill:!1,seed:t}}function Oe(e,t,n,r,i,a){let o=[],s=n.strokeWidth||2,c=function(e){let t=e.padding;if(t||t===0){if(typeof t==`number`)return[t,t,t,t];if(Array.isArray(t)){let e=t;if(e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}}return[5,5,5,5]}(n),l=n.animate===void 0||!!n.animate,u=n.iterations||2,d=+!!n.rtl,f=Q(`single`,a);switch(n.type){case`underline`:{let e=t.y+t.h+c[2];for(let n=d;n<u+d;n++)n%2?o.push(J(t.x+t.w,e,t.x,e,f)):o.push(J(t.x,e,t.x+t.w,e,f));break}case`strike-through`:{let e=t.y+t.h/2;for(let n=d;n<u+d;n++)n%2?o.push(J(t.x+t.w,e,t.x,e,f)):o.push(J(t.x,e,t.x+t.w,e,f));break}case`box`:{let e=t.x-c[3],n=t.y-c[0],r=t.w+(c[1]+c[3]),i=t.h+(c[0]+c[2]);for(let t=0;t<u;t++)o.push(Se(e,n,r,i,f));break}case`bracket`:{let e=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:[`right`],r=t.x-2*c[3],i=t.x+t.w+2*c[1],a=t.y-2*c[0],s=t.y+t.h+2*c[2];for(let n of e){let e;switch(n){case`bottom`:e=[[r,t.y+t.h],[r,s],[i,s],[i,t.y+t.h]];break;case`top`:e=[[r,t.y],[r,a],[i,a],[i,t.y]];break;case`left`:e=[[t.x,a],[r,a],[r,s],[t.x,s]];break;case`right`:e=[[t.x+t.w,a],[i,a],[i,s],[t.x+t.w,s]]}e&&o.push(xe(e,!1,f))}break}case`crossed-off`:{let e=t.x,n=t.y,r=e+t.w,i=n+t.h;for(let t=d;t<u+d;t++)t%2?o.push(J(r,i,e,n,f)):o.push(J(e,n,r,i,f));for(let t=d;t<u+d;t++)t%2?o.push(J(e,i,r,n,f)):o.push(J(r,n,e,i,f));break}case`circle`:{let e=Q(`double`,a),n=t.w+(c[1]+c[3]),r=t.h+(c[0]+c[2]),i=t.x-c[3]+n/2,s=t.y-c[0]+r/2,l=Math.floor(u/2),d=u-2*l;for(let t=0;t<l;t++)o.push(Ce(i,s,n,r,e));for(let e=0;e<d;e++)o.push(Ce(i,s,n,r,f));break}case`highlight`:{let e=Q(`highlight`,a);s=.95*t.h;let n=t.y+t.h/2;for(let r=d;r<u+d;r++)r%2?o.push(J(t.x+t.w,n,t.x,n,e)):o.push(J(t.x,n,t.x+t.w,n,e));break}}if(o.length){let t=function(e){let t=[];for(let n of e){let e=``;for(let r of n.ops){let n=r.data;switch(r.op){case`move`:e.trim()&&t.push(e.trim()),e=`M${n[0]} ${n[1]} `;break;case`bcurveTo`:e+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case`lineTo`:e+=`L${n[0]} ${n[1]} `}}e.trim()&&t.push(e.trim())}return t}(o),a=[],c=[],u=0,d=(e,t,n)=>e.setAttribute(t,n);for(let r of t){let t=document.createElementNS(ye,`path`);if(d(t,`d`,r),d(t,`fill`,`none`),d(t,`stroke`,n.color||`currentColor`),d(t,`stroke-width`,``+s),l){let e=t.getTotalLength();a.push(e),u+=e}e.appendChild(t),c.push(t)}if(l){let e=0;for(let t=0;t<c.length;t++){let n=c[t],o=a[t],s=u?o/u*i:0,l=r+e,d=n.style;d.strokeDashoffset=``+o,d.strokeDasharray=``+o,d.animation=`rough-notation-dash ${s}ms ease-out ${l}ms forwards`,e+=s}}}}var ke=class{constructor(e,t){this._state=`unattached`,this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state===`showing`&&this.haveRectsChanged()&&this.show()},400))},this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state===`unattached`&&this._e.parentElement){(function(){if(!window.__rno_kf_s){let e=window.__rno_kf_s=document.createElement(`style`);e.textContent=`@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`,document.head.appendChild(e)}})();let e=this._svg=document.createElementNS(ye,`svg`);e.setAttribute(`class`,`rough-annotation`);let t=e.style;t.position=`absolute`,t.top=`0`,t.left=`0`,t.overflow=`visible`,t.pointerEvents=`none`,t.width=`100px`,t.height=`100px`;let n=this._config.type===`highlight`;if(this._e.insertAdjacentElement(n?`beforebegin`:`afterend`,e),this._state=`not-showing`,n){let e=window.getComputedStyle(this._e).position;(!e||e===`static`)&&(this._e.style.position=`relative`)}this.attachListeners()}}detachListeners(){window.removeEventListener(`resize`,this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener(`resize`,this._resizeListener,{passive:!0}),!this._ro&&`ResizeObserver`in window&&(this._ro=new window.ResizeObserver(e=>{for(let t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let e=this.rects();if(e.length!==this._lastSizes.length)return!0;for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}return!1}isSameRect(e,t){let n=(e,t)=>Math.round(e)===Math.round(t);return n(e.x,t.x)&&n(e.y,t.y)&&n(e.w,t.w)&&n(e.h,t.h)}isShowing(){return this._state!==`not-showing`}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case`unattached`:break;case`showing`:this.hide(),this._svg&&this.render(this._svg,!0);break;case`not-showing`:this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state=`not-showing`}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state=`unattached`,this.detachListeners()}render(e,t){let n=this._config;t&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);let r=this.rects(),i=0;r.forEach(e=>i+=e.w);let a=n.animationDuration||800,o=0;for(let t=0;t<r.length;t++){let s=a*(r[t].w/i);Oe(e,r[t],n,o+this._animationDelay,s,this._seed),o+=s}this._lastSizes=r,this._state=`showing`}rects(){let e=[];if(this._svg)if(this._config.multiline){let t=this._e.getClientRects();for(let n=0;n<t.length;n++)e.push(this.svgRect(this._svg,t[n]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){let n=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(n.x||n.left),y:(r.y||r.top)-(n.y||n.top),w:r.width,h:r.height}}};function Ae(e,t){return new ke(e,t)}function je(e){let t=0;for(let n of e){let e=n;e._animationDelay=t,t+=e.animationDuration===0?0:e.animationDuration||800}let n=[...e];return{show(){for(let e of n)e.show()},hide(){for(let e of n)e.hide()}}}var Me=class extends HTMLElement{constructor(){super(),this._groupInstance=null,this.annotationElements=[],this.showOnLoad=!1}setProperties(){this.showOnLoad=this.hasAttribute(`showOnLoad`)}connectedCallback(){if(this.setProperties(),this.shadowRoot||this.attachShadow({mode:`open`}),!this.shadowRoot)return;this.shadowRoot.innerHTML=`<slot></slot>`;let e=this.shadowRoot.querySelector(`slot`);e&&e.addEventListener(`slotchange`,()=>{this.annotationElements=e.assignedNodes().filter(e=>e.nodeName===`ROUGH-NOTATION`),this.showOnLoad&&setTimeout(()=>{this.show()},0)})}show(){this.annotationElements.some(e=>e.order!==void 0)&&this.annotationElements.sort((e,t)=>(e.order||0)-(t.order||0));let e=this.annotationElements.map(e=>e.annotation).filter(e=>e!=null);e.length>0&&(this._groupInstance=je(e),this._groupInstance.show())}};customElements.get(`rough-notation-group`)||customElements.define(`rough-notation-group`,Me);var Ne=class extends HTMLElement{constructor(){super(),this.type=`underline`,this.animation=!0,this.animationDuration=800,this.color=`currentColor`,this.strokeWidth=1,this.padding=5,this.showOnLoad=!1,this.order=0,this.brackets=`right`,this.multiline=!0,this.iterations=2,this.annotation=null}setAttributes(){this.type=this.getAttribute(`type`)||this.type,this.animation=this.hasAttribute(`animation`)?this.getAttribute(`animation`)===`true`:this.animation;let e=this.getAttribute(`animationDuration`);this.animationDuration=e?Number(e):this.animationDuration,this.color=this.getAttribute(`color`)||this.color;let t=this.getAttribute(`strokeWidth`);this.strokeWidth=t?Number(t):this.strokeWidth;let n=this.getAttribute(`padding`);if(n)try{this.padding=JSON.parse(n)}catch{this.padding=Number(n)||this.padding}this.showOnLoad=this.hasAttribute(`showOnLoad`);let r=this.getAttribute(`order`);this.order=r?Number(r):this.order,this.multiline=this.hasAttribute(`multiline`)?this.getAttribute(`multiline`)===`true`:this.multiline,this.brackets=this.getBrackets();let i=this.getAttribute(`iterations`);this.iterations=i?Number(i):this.iterations}getBrackets(){let e=this.getAttribute(`brackets`)||this.brackets;if(typeof e==`string`&&e.includes(`[`))try{e=JSON.parse(e.replace(/'/g,`"`))}catch(e){console.error(`Failed to parse brackets attribute:`,e)}return e}connectedCallback(){if(this.setAttributes(),this.shadowRoot||this.attachShadow({mode:`open`}),!this.shadowRoot)return;this.shadowRoot.innerHTML=`<slot></slot>`;let e=this.shadowRoot.querySelector(`slot`);e&&(e.assignedNodes().filter(e=>e instanceof HTMLElement).forEach(e=>{this.annotation=Ae(e,{type:this.type,animate:this.animation,animationDuration:this.animationDuration,color:this.color,strokeWidth:this.strokeWidth,padding:this.padding,brackets:this.brackets,multiline:this.multiline,iterations:this.iterations})}),window.__rno_kf_s&&this.shadowRoot.append(window.__rno_kf_s.cloneNode(!0)),window.requestAnimationFrame(()=>{this.showOnLoad&&this.annotation&&this.annotation.show()}))}isShowing(){return this.annotation!=null&&this.annotation.isShowing()}show(){this.annotation&&this.annotation.show()}hide(){this.annotation&&this.annotation.hide()}remove(){this.annotation&&this.annotation.remove()}};customElements.get(`rough-notation`)||customElements.define(`rough-notation`,Ne);var Pe=o`
  *:focus-visible,
  :host(:focus-visible) {
    outline: 3px solid var(--global-focus-color, #ff5722) !important;
    outline-offset: 4px !important;
    border-radius: 1px;
  }
`;o`
  button {
    background-color: #141414;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;function $(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Fe=[{id:`about`,label:`About`},{id:`project`,label:`Projects`},{id:`contact`,label:`Contact`}],Ie=`#about`,Le=class extends K{static{this.properties={isMenuOpen:{type:Boolean},activeSection:{type:String},_menuItems:{state:!0}}}constructor(){super(),this.isMenuOpen=!1,this.activeSection=Ie,this._menuItems=Fe,this._observer=null,this.isMenuOpen=!1,this.activeSection=window.location.hash||Ie}connectedCallback(){super.connectedCallback(),this._initScrollObserver()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_handleToggleMenu(){this.isMenuOpen=!this.isMenuOpen}_handleNavLinkClick(e){this.activeSection=e,this.isMenuOpen=!1}_initScrollObserver(){let e={root:null,rootMargin:`-20% 0px -60% 0px`,threshold:0};this._observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=`#${e.target.id}`)})},e),this._menuItems.forEach(e=>{let t=document.getElementById(e.id);t&&this._observer&&this._observer.observe(t)})}render(){return L`
      <nav>
        <div class="container">
          <a
            class="brand"
            href="#about"
            @click="${()=>this._handleNavLinkClick(`#about`)}"
            rel="noopener noreferrer"
          >
            Muhammad Habibie Syihab
          </a>

          <button class="hamburger" @click="${this._handleToggleMenu}">
            ☰
          </button>

          <div class="nav-links ${this.isMenuOpen?`open`:``}">
            ${this._menuItems.map(e=>L`
                <a
                  class="nav-link ${this.activeSection===`#${e.id}`?`active`:``}"
                  href="#${e.id}"
                  rel="noopener noreferrer"
                  @click="${()=>this._handleNavLinkClick(`#${e.id}`)}"
                >
                  ${e.label}
                </a>
              `)}
          </div>
        </div>
      </nav>
    `}static{this.styles=[Pe,o`
      :host {
        display: block;
        --text: #212529;
      }

      nav {
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        z-index: 1030;
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1rem;
        gap: 0 1rem;
      }
      .brand {
        color: var(--text);
        font-size: 1.25rem;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1;
        min-width: 0;
        margin-right: 1rem;
      }

      .hamburger {
        display: block;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.55);
        font-size: 1.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      .nav-links {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.35s ease-in-out;
      }

      .nav-links.open {
        max-height: 300px;
        opacity: 1;
        margin-top: 1rem;
      }
      .nav-link {
        color: rgba(0, 0, 0, 0.55);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.15s;
      }
      .nav-link:hover {
        color: rgba(0, 0, 0, 0.75);
      }
      .nav-link.active {
        color: var(--text) !important;
        font-weight: 500;
      }

      @media (min-width: 992px) {
        .container {
          flex-wrap: nowrap;
          max-width: 1100px;
        }

        .hamburger {
          display: none;
        }

        .nav-links {
          display: flex;
          flex-direction: row;
          width: auto;
          max-height: none;
          opacity: 1;
          overflow: visible;
          gap: 1.6rem;
        }

        .nav-links.open {
          margin-top: 0;
        }
      }
    `]}};Le=$([q(`pt-navbar`)],Le);var Re=class extends K{createRenderRoot(){return this}firstUpdated(e){window.setTimeout(()=>{document.querySelector(`#rn-1`).show(),window.setTimeout(()=>{document.querySelector(`#rn-2`).show(),window.setTimeout(()=>{document.querySelector(`#rn-3`).show(),window.setTimeout(()=>{document.querySelector(`#rn-4`).show()},2e3)},1e3)},1e3)},3e3)}render(){return L`
      <section>
        <div class="content">
          <h1>
            Hello! I'm Habibie, a
            <rough-notation
              multiline="true"
              id="rn-1"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>developer</span>
            </rough-notation>
            based in Bandung, Indonesia.
          </h1>

          <p>
            I focus on building
            <rough-notation
              multiline="true"
              id="rn-2"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>structured, efficient,</span>
            </rough-notation>
            and
            <rough-notation
              multiline="true"
              id="rn-3"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>scalable</span>
            </rough-notation>
            applications. Passionate about continuous learning and delivering
            clean code to solve real-world problems.
          </p>

          <p>
            I'm currently looking for a new role as a developer.
            <rough-notation
              id="rn-4"
              multiline="true"
              type="circle"
              color="orange"
              iterations="2"
              strokeWidth="3"
              order="2"
            >
              <a class="hire" href="#contact" rel="noopener noreferrer"
                >Hire me?</a
              >
            </rough-notation>
          </p>

          <div class="button-wrapper">
            <a
              href="https://www.linkedin.com/in/muhammad-habibie-syihab-77233a1a6"
              target="_blank"
              rel="noopener noreferrer"
              class="linkedin"
              >View Linkedin</a
            >
            <a
              href="https://github.com/muhammadhabibies"
              target="_blank"
              rel="noopener noreferrer"
              class="github"
              >View Github</a
            >
          </div>
        </div>

        <img src="img/pp.png" alt="Muhammad Habibie Syihab" class="image" />
      </section>

      <style>
        section {
          margin: 0 auto;
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 6rem 0 0;
          text-align: center;
          max-width: 1140px;
          font-family:
            system-ui,
            -apple-system,
            'Segoe UI',
            Roboto,
            sans-serif;
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #212529;
        }
        .hire {
          text-decoration: none;
          color: inherit;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          line-height: 1.6;
          color: #4d4d4d;
        }

        .button-wrapper {
          margin-top: 1rem;
          font-size: 1rem;
          display: flex;
          gap: 1rem;
        }
        .button-wrapper a {
          font-size: inherit;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: 2px solid transparent;
          cursor: pointer;
        }
        button:focus-visible,
        a:focus-visible {
          outline: 3px solid #ff5722;
          outline-offset: 4px;
        }
        .button-wrapper .linkedin:hover,
        .button-wrapper .github:hover {
          opacity: 0.9;
          transition: opacity 0.3s;
        }
        .button-wrapper .linkedin {
          background: #141414;
          border-color: transparent;
          color: #e6e6e6;
        }
        .button-wrapper .linkedin:hover {
          border-color: #141414;
        }
        .button-wrapper .github {
          background: #fff;
          color: #4d4d4d;
          border-color: #a5a5a5;
        }

        .image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #dee2e6;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }

        @media (min-width: 768px) {
          section {
            flex-direction: row;
            align-items: start;
            gap: 2rem;
            padding: 6rem 0 4rem;
          }

          h1 {
            font-size: 2.3rem;
          }

          .content {
            font-size: 1.2rem;
            text-align: start;
            align-items: start;
          }
          .button-wrapper {
            font-size: 1.2rem;
          }
          .button-wrapper a {
            padding: 0.5rem 2rem;
          }

          .image {
            width: 350px;
            height: 400px;
            border-radius: 5%;
          }
        }
      </style>
    `}};Re=$([q(`pt-about`)],Re);var ze=[{id:1,image:`img/projects/mypro.jpg`,alt:`MyPro Project`,title:`MYPRO Property`,link:`https://myproindonesia.com/`,description:`Application for clients who are looking for and becoming property agents.`,stack:[`Laravel`,`React`,`Tailwind`]},{id:2,image:`img/projects/admin-mypro.jpg`,alt:`Admin Mypro Project`,title:`Admin MYPRO Property`,link:`https://admin.myproindonesia.com/`,description:`Application for managing property agents from the company side.`,stack:[`Laravel`,`React`,`Material UI`,`Emotion`]},{id:3,image:`img/projects/seller-swapup.jpg`,alt:`Seller SwapUp Project`,title:`SwapUp Seller`,link:`https://seller.swapup.com.au/`,description:`Application for sellers to transact at SwapUp's.`,stack:[`Laravel`,`React`,`Shadcn UI`,`Stripe`]},{id:4,image:`img/projects/mustika.jpg`,alt:`Mustika Petrotech Project`,title:`Mustika Petrotech`,link:`https://mustikapetrotech.com/`,description:`Landing page of PT Mustika Petrotech Indonesia company.`,stack:[`WordPress`]},{id:5,image:`img/projects/digyta.jpg`,alt:`Digyta Project`,title:`Digyta`,link:`https://digyta.net/`,description:`Landing page of PT Digital Agensi Nusantara company.`,stack:[`WordPress`]}],Be=class extends K{constructor(...e){super(...e),this.projects=ze}static{this.properties={projects:{type:Array}}}render(){return L`
      <section>
        <h2>Projects</h2>

        <p>Here are some projects that I have worked on:</p>

        <div class="card-wrapper">
          ${this.projects.map(e=>L`
              <a
                class="card"
                href="${e.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- <img src="${e.image}" alt="${e.alt}" /> -->

                <h4 class="card-title">${e.title}</h4>

                <div class="card-body">
                  <p class="short">${e.description}</p>

                  <p class="stack">${e.stack.join(`, `)}</p>
                </div>
              </a>
            `)}
        </div>
      </section>
    `}static{this.styles=o`
    :host {
      display: block;

      --text: #4f565c;
      --text-h: #212529;
      --bg: #fafafae6;

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.2);

      --card-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      --card-shadow-hover: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }

    section {
      padding-top: 5rem;
      max-width: 1140px;
      margin: 0 auto;
      font-family:
        system-ui,
        -apple-system,
        'Segoe UI',
        Roboto,
        sans-serif;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-h);
    }

    .card-wrapper {
      margin-top: 2.5rem;
      display: grid;
      justify-items: center;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }
    .card {
      text-decoration: none;
      background-color: var(--bg);
      color: var(--text);
      border-radius: 0.5rem;
      box-shadow: var(--card-shadow);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1 1 300px;
      max-width: 350px;
      cursor: pointer;
      border: 2px solid var(--text);
      transition:
        transform 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: var(--card-shadow-hover);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-title,
    .card-body {
      padding: 1.25rem;
    }
    .card-title {
      margin: 0;
      padding-bottom: 0;
    }
    .card-body {
      padding-top: 0;
      padding-bottom: 0;
      font-size: 1rem;
      line-height: 1.5;
    }

    .card-title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 1.5em;
      transition: max-height 0.3s ease-in-out;
    }
    .card-title:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }
    .short {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 3em;
      transition: max-height 0.3s ease-in-out;
    }
    .short:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }
    .stack {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 1.5em;
      transition: max-height 0.3s ease-in-out;
    }
    .stack:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }

    @media (min-width: 640px) {
      .card-wrapper {
        grid-template-columns: repeat(2, 1fr);
        justify-items: stretch;
      }
    }

    @media (min-width: 768px) {
      .card-wrapper {
        grid-template-columns: repeat(3, 1fr);
        justify-items: stretch;
      }
    }
  `}};Be=$([q(`pt-project`)],Be);var Ve=class extends K{render(){return L`
      <section>
        <div class="container">
          <h2>Get in touch</h2>

          <p>
            Do you have a job opportunity or idea you'd like to discuss? Feel
            free to reach me at
            <a
              href="mailto=muhammadhabibiesyihab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >muhammadhabibiesyihab@gmail.com</a
            >. You can also find me on
            <a
              href="https://www.instagram.com/muhammad_habibies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram</a
            >,
            <a
              href="https://github.com/muhammadhabibies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            and
            <a
              href="https://www.linkedin.com/in/muhammad-habibie-syihab-77233a1a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin</a
            >.
          </p>
        </div>
      </section>
    `}static{this.styles=[Pe,o`
      :host {
        display: block;

        --text: #212529;
        --text-h: #4d4d4d;
      }

      section {
        display: flex;
        padding: 2rem 0 1rem;
        align-items: center;
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;
        color: var(--text);
        font-family:
          system-ui,
          -apple-system,
          'Segoe UI',
          Roboto,
          sans-serif;
      }

      .container {
        margin-top: 5rem;
      }

      h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
        color: var(--text);
      }

      p {
        line-height: 1.5;
      }

      a {
        color: var(--text-h);
        font-weight: 700;
        text-decoration: none;
        transition: opacity 0.15s ease-in-out;
      }
      a:hover {
        text-decoration: underline;
        opacity: 0.9;
      }

      @media (min-width: 768px) {
        section {
          padding: 3rem 0;
          margin-bottom: 2.5rem;
        }
      }
    `]}};Ve=$([q(`pt-contact`)],Ve);var He=class extends K{render(){return L`
      <footer>
        <p>
          Built with TypeScript, Lit, and Vite
          <svg
            class="heart-icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </p>
      </footer>
    `}static{this.styles=o`
    :host {
      display: block;
      --text: #212529;
    }

    footer {
      padding: 2rem 0;
      padding-bottom: 13rem;
      border-top: 3px solid #e4e7e9;
      color: var(--text);
      font-family:
        system-ui,
        -apple-system,
        'Segoe UI',
        Roboto,
        sans-serif;
    }

    @media (min-width: 768px) {
      padding-bottom: 15rem;
    }

    p {
      color: var(--text);
      margin: 0;
      font-size: 1rem;
      gap: 0.35rem;
      flex-wrap: wrap;
    }

    .heart-icon {
      width: 1em;
      height: 1em;
      fill: var(--text);
      display: inline-block;
      vertical-align: middle;
    }
  `}};He=$([q(`pt-footer`)],He);var Ue=class extends K{createRenderRoot(){return this}render(){return L`
      <main>
        <pt-navbar></pt-navbar>

        <pt-about id="about"></pt-about>

        <pt-project id="project"></pt-project>

        <pt-contact id="contact"></pt-contact>

        <pt-footer></pt-footer>
      </main>
    `}};Ue=$([q(`pt-main`)],Ue);