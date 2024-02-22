/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
{"version":3,"sources":["jquery.js"],"names":["global","factory","module","exports","document","w","Error","window","this","noGlobal","arr","getProto","Object","getPrototypeOf","slice","flat","array","call","concat","apply","push","indexOf","class2type","toString","hasOwn","hasOwnProperty","fnToString","ObjectFunctionString","support","isFunction","obj","nodeType","item","isWindow","preservedScriptAttributes","type","src","nonce","noModule","DOMEval","code","node","doc","i","val","script","createElement","text","getAttribute","setAttribute","head","appendChild","parentNode","removeChild","toType","version","jQuery","selector","context","fn","init","isArrayLike","length","prototype","jquery","constructor","toArray","get","num","pushStack","elems","ret","merge","prevObject","each","callback","map","elem","arguments","first","eq","last","even","grep","_elem","odd","len","j","end","sort","splice","extend","options","name","copy","copyIsArray","clone","target","deep","isPlainObject","Array","isArray","undefined","expando","Math","random","replace","isReady","error","msg","noop","proto","Ctor","isEmptyObject","globalEval","makeArray","results","inArray","second","invert","matches","callbackExpect","arg","value","guid","Symbol","iterator","split","_i","toLowerCase","Sizzle","Expr","getText","isXML","tokenize","compile","select","outermostContext","sortInput","hasDuplicate","setDocument","docElem","documentIsHTML","rbuggyQSA","rbuggyMatches","contains","Date","preferredDoc","dirruns","done","classCache","createCache","tokenCache","compilerCache","nonnativeSelectorCache","sortOrder","a","b","pop","pushNative","list","booleans","whitespace","identifier","attributes","pseudos","rwhitespace","RegExp","rtrim","rcomma","rcombinators","rdescend","rpseudo","ridentifier","matchExpr","ID","CLASS","TAG","ATTR","PSEUDO","CHILD","bool","needsContext","rhtml","rinputs","rheader","rnative","rquickExpr","rsibling","runescape","funescape","escape","nonHex","high","String","fromCharCode","rcssescape","fcssescape","ch","asCodePoint","charCodeAt","unloadHandler","inDisabledFieldset","addCombinator","disabled","nodeName","dir","next","childNodes","e","els","seed","m","nid","match","groups","newSelector","newContext","ownerDocument","exec","getElementById","id","getElementsByTagName","getElementsByClassName","qsa","test","testContext","scope","toSelector","join","querySelectorAll","qsaError","removeAttribute","keys","cache","key","cacheLength","shift","markFunction","assert","el","addHandle","attrs","handler","attrHandle","siblingCheck","cur","diff","sourceIndex","nextSibling","createInputPseudo","createButtonPseudo","createDisabledPseudo","isDisabled","createPositionalPseudo","argument","matchIndexes","namespace","namespaceURI","documentElement","hasCompare","subWindow","defaultView","top","addEventListener","attachEvent","className","createComment","getById","getElementsByName","filter","attrId","find","getAttributeNode","tag","tmp","input","innerHTML","matchesSelector","webkitMatchesSelector","mozMatchesSelector","oMatchesSelector","msMatchesSelector","disconnectedMatch","compareDocumentPosition","adown","bup","compare","sortDetached","aup","ap","bp","unshift","expr","elements","attr","specified","sel","uniqueSort","duplicates","detectDuplicates","sortStable","textContent","firstChild","nodeValue","selectors","createPseudo","relative",">"," ","+","~","preFilter","excess","unquoted","nodeNameSelector","pattern","operator","check","result","what","_argument","simple","forward","ofType","_context","xml","uniqueCache","outerCache","nodeIndex","start","parent","useCache","lastChild","uniqueID","pseudo","args","setFilters","idx","matched","not","matcher","unmatched","has","lang","elemLang","hash","location","root","focus","activeElement","hasFocus","href","tabIndex","enabled","checked","selected","selectedIndex","empty","header","button","_matchIndexes","lt","gt","radio","checkbox","file","password","image","submit","reset","tokens","combinator","base","skip","checkNonElements","doneName","oldCache","newCache","elementMatcher","matchers","condense","newUnmatched","mapped","setMatcher","postFilter","postFinder","postSelector","temp","preMap","postMap","preexisting","contexts","multipleContexts","matcherIn","matcherOut","matcherFromTokens","checkContext","leadingRelative","implicitRelative","matchContext","matchAnyContext","filters","parseOnly","soFar","preFilters","cached","elementMatchers","setMatchers","bySet","byElement","superMatcher","outermost","matchedCount","setMatched","contextBackup","dirrunsUnique","token","compiled","_name","defaultValue","unique","isXMLDoc","escapeSelector","until","truncate","is","siblings","n","rneedsContext","rsingleTag","winnow","qualifier","self","rootjQuery","parseHTML","ready","rparentsprev","guaranteedUnique","children","contents","prev","sibling","targets","l","closest","index","prevAll","add","addBack","parents","parentsUntil","nextAll","nextUntil","prevUntil","contentDocument","content","reverse","rnothtmlwhite","Identity","v","Thrower","ex","adoptValue","resolve","reject","noValue","method","promise","fail","then","Callbacks","object","_","flag","firing","memory","fired","locked","queue","firingIndex","fire","once","stopOnFalse","remove","disable","lock","fireWith","Deferred","func","tuples","state","always","deferred","catch","pipe","fns","newDefer","tuple","returned","progress","notify","onFulfilled","onRejected","onProgress","maxDepth","depth","special","that","mightThrow","TypeError","notifyWith","resolveWith","process","exceptionHook","stackTrace","rejectWith","getStackHook","setTimeout","stateString","when","singleValue","remaining","resolveContexts","resolveValues","primary","updateFunc","rerrorNames","stack","console","warn","message","readyException","readyList","completed","removeEventListener","readyWait","wait","readyState","doScroll","access","chainable","emptyGet","raw","bulk","_key","rmsPrefix","rdashAlpha","fcamelCase","_all","letter","toUpperCase","camelCase","string","acceptData","owner","Data","uid","defineProperty","configurable","set","data","prop","hasData","dataPriv","dataUser","rbrace","rmultiDash","dataAttr","JSON","parse","removeData","_data","_removeData","dequeue","startLength","hooks","_queueHooks","stop","setter","clearQueue","count","defer","pnum","source","rcssNum","cssExpand","isAttached","composed","getRootNode","isHiddenWithinTree","style","display","css","adjustCSS","valueParts","tween","adjusted","scale","maxIterations","currentValue","initial","unit","cssNumber","initialInUnit","defaultDisplayMap","showHide","show","values","body","hide","toggle","div","rcheckableType","rtagName","rscriptType","createDocumentFragment","checkClone","cloneNode","noCloneChecked","option","wrapMap","thead","col","tr","td","_default","getAll","setGlobalEval","refElements","tbody","tfoot","colgroup","caption","th","optgroup","buildFragment","scripts","selection","ignored","wrap","attached","fragment","nodes","htmlPrefilter","createTextNode","rtypenamespace","returnTrue","returnFalse","expectSync","err","safeActiveElement","on","types","one","origFn","event","off","leverageNative","notAsync","saved","isTrigger","delegateType","stopPropagation","stopImmediatePropagation","preventDefault","trigger","Event","handleObjIn","eventHandle","events","t","handleObj","handlers","namespaces","origType","elemData","create","handle","triggered","dispatch","bindType","delegateCount","setup","mappedTypes","origCount","teardown","removeEvent","nativeEvent","handlerQueue","fix","delegateTarget","preDispatch","isPropagationStopped","currentTarget","isImmediatePropagationStopped","rnamespace","postDispatch","matchedHandlers","matchedSelectors","addProp","hook","enumerable","originalEvent","writable","load","noBubble","click","beforeunload","returnValue","props","isDefaultPrevented","defaultPrevented","relatedTarget","timeStamp","now","isSimulated","altKey","bubbles","cancelable","changedTouches","ctrlKey","detail","eventPhase","metaKey","pageX","pageY","shiftKey","view","char","charCode","keyCode","buttons","clientX","clientY","offsetX","offsetY","pointerId","pointerType","screenX","screenY","targetTouches","toElement","touches","which","blur","mouseenter","mouseleave","pointerenter","pointerleave","orig","related","rnoInnerhtml","rchecked","rcleanScript","manipulationTarget","disableScript","restoreScript","cloneCopyEvent","dest","udataOld","udataCur","domManip","collection","hasScripts","iNoClone","valueIsFunction","html","_evalUrl","keepData","cleanData","dataAndEvents","deepDataAndEvents","srcElements","destElements","inPage","detach","append","prepend","insertBefore","before","after","replaceWith","replaceChild","appendTo","prependTo","insertAfter","replaceAll","original","insert","rnumnonpx","getStyles","opener","getComputedStyle","swap","old","rboxStyle","curCSS","computed","width","minWidth","maxWidth","getPropertyValue","pixelBoxStyles","addGetHookIf","conditionFn","hookFn","computeStyleTests","container","cssText","divStyle","pixelPositionVal","reliableMarginLeftVal","roundPixelMeasures","marginLeft","right","pixelBoxStylesVal","boxSizingReliableVal","position","scrollboxSizeVal","offsetWidth","measure","round","parseFloat","reliableTrDimensionsVal","backgroundClip","clearCloneStyle","boxSizingReliable","pixelPosition","reliableMarginLeft","scrollboxSize","reliableTrDimensions","table","trChild","trStyle","height","parseInt","borderTopWidth","borderBottomWidth","offsetHeight","cssPrefixes","emptyStyle","vendorProps","finalPropName","final","cssProps","capName","vendorPropName","rdisplayswap","rcustomProp","cssShow","visibility","cssNormalTransform","letterSpacing","fontWeight","setPositiveNumber","subtract","max","boxModelAdjustment","dimension","box","isBorderBox","styles","computedVal","extra","delta","ceil","getWidthOrHeight","valueIsBorderBox","offsetProp","getClientRects","Tween","easing","cssHooks","opacity","animationIterationCount","columnCount","fillOpacity","flexGrow","flexShrink","gridArea","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineHeight","order","orphans","widows","zIndex","zoom","origName","isCustomProp","setProperty","isFinite","getBoundingClientRect","scrollboxSizeBuggy","left","margin","padding","border","prefix","suffix","expand","expanded","parts","propHooks","run","percent","eased","duration","pos","step","fx","scrollTop","scrollLeft","linear","p","swing","cos","PI","fxNow","inProgress","opt","rfxtypes","rrun","schedule","hidden","requestAnimationFrame","interval","tick","createFxNow","genFx","includeWidth","createTween","animation","Animation","tweeners","properties","stopped","prefilters","currentTime","startTime","tweens","opts","specialEasing","originalProperties","originalOptions","gotoEnd","propFilter","bind","complete","timer","anim","*","tweener","oldfire","propTween","restoreDisplay","isBox","dataShow","unqueued","overflow","overflowX","overflowY","prefilter","speed","speeds","fadeTo","to","animate","optall","doAnimation","finish","stopQueue","timers","cssFn","slideDown","slideUp","slideToggle","fadeIn","fadeOut","fadeToggle","slow","fast","delay","time","timeout","clearTimeout","checkOn","optSelected","radioValue","boolHook","removeAttr","nType","attrHooks","attrNames","getter","lowercaseName","rfocusable","rclickable","stripAndCollapse","getClass","classesToArray","removeProp","propFix","tabindex","for","class","addClass","classes","curValue","clazz","finalValue","removeClass","toggleClass","stateVal","isValidValue","classNames","hasClass","rreturn","valHooks","optionSet","focusin","rfocusMorph","stopPropagationCallback","onlyHandlers","bubbleType","ontype","lastElement","eventPath","parentWindow","simulate","triggerHandler","attaches","rquery","parseXML","parserErrorElem","DOMParser","parseFromString","rbracket","rCRLF","rsubmitterTypes","rsubmittable","buildParams","traditional","param","s","valueOrFunction","encodeURIComponent","serialize","serializeArray","r20","rhash","rantiCache","rheaders","rnoContent","rprotocol","transports","allTypes","originAnchor","addToPrefiltersOrTransports","structure","dataTypeExpression","dataType","dataTypes","inspectPrefiltersOrTransports","jqXHR","inspected","seekingTransport","inspect","prefilterOrFactory","dataTypeOrTransport","ajaxExtend","flatOptions","ajaxSettings","active","lastModified","etag","url","isLocal","protocol","processData","async","contentType","accepts","json","responseFields","converters","* text","text html","text json","text xml","ajaxSetup","settings","ajaxPrefilter","ajaxTransport","ajax","transport","cacheURL","responseHeadersString","responseHeaders","timeoutTimer","urlAnchor","fireGlobals","uncached","callbackContext","globalEventContext","completeDeferred","statusCode","requestHeaders","requestHeadersNames","strAbort","getResponseHeader","getAllResponseHeaders","setRequestHeader","overrideMimeType","mimeType","status","abort","statusText","finalText","crossDomain","host","hasContent","ifModified","headers","beforeSend","success","send","nativeStatusText","responses","isSuccess","response","modified","ct","finalDataType","firstDataType","ajaxHandleResponses","conv2","current","conv","dataFilter","throws","ajaxConvert","getJSON","getScript","text script","wrapAll","firstElementChild","wrapInner","htmlIsFunction","unwrap","visible","xhr","XMLHttpRequest","xhrSuccessStatus","0","1223","xhrSupported","cors","errorCallback","open","username","xhrFields","onload","onerror","onabort","ontimeout","onreadystatechange","responseType","responseText","binary","scriptAttrs","charset","scriptCharset","evt","oldCallbacks","rjsonp","jsonp","jsonpCallback","originalSettings","callbackName","overwritten","responseContainer","jsonProp","createHTMLDocument","implementation","keepScripts","parsed","params","animated","offset","setOffset","curPosition","curLeft","curCSSTop","curTop","curOffset","curCSSLeft","curElem","using","rect","win","pageYOffset","pageXOffset","offsetParent","parentOffset","scrollTo","Height","Width","","defaultExtra","funcName","unbind","delegate","undelegate","hover","fnOver","fnOut","proxy","holdReady","hold","parseJSON","isNumeric","isNaN","trim","define","amd","_jQuery","_$","$","noConflict"],"mappings":"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","file":"jquery.min.js"}
/*!
 * jQuery JavaScript Library v3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/*! jQuery v3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(g,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,v=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),m={},b=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},w=g.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function C(e,t,n){var r,i,o=(n=n||w).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",E=function(e,t){return new E.fn.init(e,t)};function d(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!b(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||b(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){C(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return v(a)},guid:1,support:m}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var p=function(n){var e,p,x,o,i,h,f,g,w,u,l,C,T,a,E,v,s,c,y,A="sizzle"+1*new Date,d=n.document,N=0,r=0,m=ue(),b=ue(),S=ue(),k=ue(),D=function(e,t){return e===t&&(l=!0),0},L={}.hasOwnProperty,t=[],j=t.pop,q=t.push,O=t.push,P=t.slice,H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",B="(?:\\\\[\\da-fA-F]{1,6}"+R+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",M="\\["+R+"*("+B+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",F=new RegExp(R+"+","g"),$=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),_=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp(R+"|>"),V=new RegExp(W),X=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,G=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+R+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){C()},ae=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{O.apply(t=P.call(d.childNodes),d.childNodes),t[d.childNodes.length].nodeType}catch(e){O={apply:t.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,d=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return n;if(!r&&(C(e),e=e||T,E)){if(11!==d&&(u=Z.exec(t)))if(i=u[1]){if(9===d){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return O.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&p.getElementsByClassName&&e.getElementsByClassName)return O.apply(n,e.getElementsByClassName(i)),n}if(p.qsa&&!k[t+" "]&&(!v||!v.test(t))&&(1!==d||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===d&&(U.test(t)||_.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&p.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=A)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+be(l[o]);c=l.join(",")}try{return O.apply(n,f.querySelectorAll(c)),n}catch(e){k(t,!0)}finally{s===A&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>x.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[A]=!0,e}function ce(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)x.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in p=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},C=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:d;return r!=T&&9===r.nodeType&&r.documentElement&&(a=(T=r).documentElement,E=!i(T),d!=T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),p.scope=ce(function(e){return a.appendChild(e).appendChild(T.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),p.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=ce(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=J.test(T.getElementsByClassName),p.getById=ce(function(e){return a.appendChild(e).id=A,!T.getElementsByName||!T.getElementsByName(A).length}),p.getById?(x.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=p.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=p.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(p.qsa=J.test(T.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+A+"'></a><select id='"+A+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+A+"-]").length||v.push("~="),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+R+"*name"+R+"*="+R+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+A+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(p.matchesSelector=J.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){p.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=J.test(a.compareDocumentPosition),y=t||J.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e==T||e.ownerDocument==d&&y(d,e)?-1:t==T||t.ownerDocument==d&&y(d,t)?1:u?H(u,e)-H(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==T?-1:t==T?1:i?-1:o?1:u?H(u,e)-H(u,t):0;if(i===o)return de(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?de(a[r],s[r]):a[r]==d?-1:s[r]==d?1:0}),T},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(C(e),p.matchesSelector&&E&&!k[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){k(t,!0)}return 0<se(t,T,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=T&&C(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=T&&C(e);var n=x.attrHandle[t.toLowerCase()],r=n&&L.call(x.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:p.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!p.detectDuplicates,u=!p.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(x=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&d){p=(s=(r=(i=(o=(a=c)[A]||(a[A]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===N&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if(1===a.nodeType&&++p&&a===e){i[h]=[N,s,p];break}}else if(d&&(p=s=(r=(i=(o=(a=e)[A]||(a[A]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===N&&r[1]),!1===p)while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if((b?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++p&&(d&&((i=(o=a[A]||(a[A]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[N,p]),a===e))break;return(p-=v)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[A]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=H(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[A]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return X.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=pe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=he(e);function me(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,d=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[N,d];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[A]||(e[A]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===N&&r[1]===d)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Ce(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(p,h,g,v,y,e){return v&&!v[A]&&(v=Te(v)),y&&!y[A]&&(y=Te(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?c:Ce(c,s,p,n,r),d=g?y||(e?p:l||v)?[]:t:f;if(g&&g(f,d,n,r),v){i=Ce(d,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(d[u[o]]=!(f[u[o]]=a))}if(e){if(y||p){if(y){i=[],o=d.length;while(o--)(a=d[o])&&i.push(f[o]=a);y(null,d=[],i,r)}o=d.length;while(o--)(a=d[o])&&-1<(i=y?H(e,a):s[o])&&(e[i]=!(t[i]=a))}}else d=Ce(d===t?d.splice(l,d.length):d),y?y(null,t,d,r):O.apply(t,d)})}function Ee(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=xe(function(e){return e===i},a,!0),l=xe(function(e){return-1<H(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])c=[xe(we(c),t)];else{if((t=x.filter[e[s].type].apply(null,e[s].matches))[A]){for(n=++s;n<r;n++)if(x.relative[e[n].type])break;return Te(1<s&&we(c),1<s&&be(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&be(e))}c.push(t)}return we(c)}return me.prototype=x.filters=x.pseudos,x.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=b[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=x.preFilter;while(a){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),x.filter)!(r=Q[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):b(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,b,r,i=[],o=[],a=S[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[A]?i.push(a):o.push(a);(a=S(e,(v=o,m=0<(y=i).length,b=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],d=w,p=e||b&&x.find.TAG("*",i),h=N+=null==d?1:Math.random()||.1,g=p.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=p[l]);l++){if(b&&o){a=0,t||o.ownerDocument==T||(C(o),n=!E);while(s=v[a++])if(s(o,t||T,n)){r.push(o);break}i&&(N=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=j.call(r));f=Ce(f)}O.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(N=h,w=d),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=Q.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],x.relative[s=a.type])break;if((u=x.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&be(o)))return O.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},p.sortStable=A.split("").sort(D).join("")===A,p.detectDuplicates=!!l,C(),p.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(I,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(g);E.find=p,E.expr=p.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=p.uniqueSort,E.text=p.getText,E.isXMLDoc=p.isXML,E.contains=p.contains,E.escapeSelector=p.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=E.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var k=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return b(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&N.test(e)?E(e):e||[],!1).length}});var L,j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:j.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:w,!0)),k.test(r[1])&&E.isPlainObject(t))for(r in t)b(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=w.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):b(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,L=E(w);var q=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(S(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(O[r]||E.uniqueSort(n),q.test(r)&&n.reverse()),this.pushStack(n)}});var H=/[^\x20\t\r\n\f]+/g;function I(e){return e}function R(e){throw e}function B(e,t,n,r){var i;try{e&&b(i=e.promise)?i.call(e).done(t).fail(n):e&&b(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(H)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){b(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==T(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=b(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&b(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,b(t)?s?t.call(e,l(u,o,I,s),l(u,o,R,s)):(u++,t.call(e,l(u,o,I,s),l(u,o,R,s),l(u,o,I,o.notifyWith))):(a!==I&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==R&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),g.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,b(r)?r:I,e.notifyWith)),o[1][3].add(l(0,e,b(t)?t:I)),o[2][3].add(l(0,e,b(n)?n:R))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(B(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||b(i[t]&&i[t].then)))return o.then();while(t--)B(i[t],a(t),o.reject);return o.promise()}});var M=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){g.console&&g.console.warn&&e&&M.test(e.name)&&g.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){g.setTimeout(function(){throw e})};var W=E.Deferred();function F(){w.removeEventListener("DOMContentLoaded",F),g.removeEventListener("load",F),E.ready()}E.fn.ready=function(e){return W.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||W.resolveWith(w,[E])}}),E.ready.then=W.then,"complete"===w.readyState||"loading"!==w.readyState&&!w.documentElement.doScroll?g.setTimeout(E.ready):(w.addEventListener("DOMContentLoaded",F),g.addEventListener("load",F));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===T(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,b(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,_=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(_,U)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=E.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(H)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new Q,G=new Q,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}G.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return G.hasData(e)||Y.hasData(e)},data:function(e,t,n){return G.access(e,t,n)},removeData:function(e,t){G.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=G.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){G.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=G.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){G.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){G.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=w.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};var se={};function ue(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=se[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),se[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return ue(this,!0)},hide:function(){return ue(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var le,ce,fe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pe=/^$|^module$|\/(?:java|ecma)script/i;le=w.createDocumentFragment().appendChild(w.createElement("div")),(ce=w.createElement("input")).setAttribute("type","radio"),ce.setAttribute("checked","checked"),ce.setAttribute("name","t"),le.appendChild(ce),m.checkClone=le.cloneNode(!0).cloneNode(!0).lastChild.checked,le.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!le.cloneNode(!0).lastChild.defaultValue,le.innerHTML="<option></option>",m.option=!!le.lastChild;var he={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td,m.option||(he.optgroup=he.option=[1,"<select multiple='multiple'>","</select>"]);var ye=/<|&#?\w+;/;function me(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===T(o))E.merge(d,o.nodeType?[o]:o);else if(ye.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=he[s]||he._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ge(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])pe.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function xe(){return!0}function we(){return!1}function Ce(e,t){return e===function(){try{return w.activeElement}catch(e){}}()==("focus"===t)}function Te(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Te(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=we;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,xe)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=Y.get(t);if(X(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(H)||[""]).length;while(l--)p=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(f=E.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=E.event.special[p]||{},c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||((d=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(H)||[""]).length;while(l--)if(p=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){f=E.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,p,v.handle),delete u[p])}else for(p in u)E.event.remove(e,p+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:b(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Ee(t,"click",xe),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&S(t,"input")&&Y.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?xe:we,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:we,isPropagationStopped:we,isImmediatePropagationStopped:we,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Ee(this,e,Ce),!1},trigger:function(){return Ee(this,e),!0},_default:function(){return!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Te(this,e,t,n,r)},one:function(e,t,n,r){return Te(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=we),this.each(function(){E.event.remove(this,e,n,t)})}});var Ae=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ke(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Le(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function je(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);G.hasData(e)&&(o=G.access(e),a=E.extend({},o),G.set(t,a))}}function qe(n,r,i,o){r=v(r);var e,t,a,s,u,l,c=0,f=n.length,d=f-1,p=r[0],h=b(p);if(h||1<f&&"string"==typeof p&&!m.checkClone&&Ne.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),qe(t,r,i,o)});if(f&&(t=(e=me(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ge(e,"script"),De)).length;c<f;c++)u=e,c!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,ge(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,Le),c=0;c<s;c++)u=a[c],pe.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):C(u.textContent.replace(Se,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ge(r)),r.parentNode&&(n&&ie(r)&&ve(ge(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ge(c),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&fe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(c),r=0,i=o.length;r<i;r++)je(o[r],a[r]);else je(e,c);return 0<(a=ge(c,"script")).length&&ve(a,!f&&ge(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||ke(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ke(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!he[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return qe(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ge(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),He=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=g),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Re=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||He(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=E.style(e,t)),!m.pixelBoxStyles()&&Pe.test(a)&&Re.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Me(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=g.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=w.createElement("div"),l=w.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(m,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=w.createElement("table"),t=w.createElement("tr"),n=w.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=g.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var We=["Webkit","Moz","ms"],Fe=w.createElement("div").style,$e={};function ze(e){var t=E.cssProps[e]||$e[e];return t||(e in Fe?e:$e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=We.length;while(n--)if((e=We[n]+t)in Fe)return e}(e)||e)}var _e,Ue,Ve=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Qe={position:"absolute",visibility:"hidden",display:"block"},Ye={letterSpacing:"0",fontWeight:"400"};function Ge(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=He(e),i=(!m.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&S(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=function(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Xe.test(t)||(t=ze(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Ye&&(i=Ye[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Ie(e,Qe,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=He(e),o=!m.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Ge(0,t,s)}}}),E.cssHooks.marginLeft=Me(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Ge)}),E.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=He(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=g.setTimeout(e,r);t.stop=function(){g.clearTimeout(n)}})},_e=w.createElement("input"),Ue=w.createElement("select").appendChild(w.createElement("option")),_e.type="checkbox",m.checkOn=""!==_e.value,m.optSelected=Ue.selected,(_e=w.createElement("input")).value="t",_e.type="radio",m.radioValue="t"===_e.value;var Ze,et=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return $(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?Ze:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(H);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),Ze={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=et[t]||E.find.attr;et[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=et[o],et[o]=r,r=null!=a(e,t,n)?o:null,et[o]=i),r}});var tt=/^(?:input|select|textarea|button)$/i,nt=/^(?:a|area)$/i;function rt(e){return(e.match(H)||[]).join(" ")}function it(e){return e.getAttribute&&e.getAttribute("class")||""}function ot(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(H)||[]}E.fn.extend({prop:function(e,t){return $(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):tt.test(e.nodeName)||nt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),m.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(b(t))return this.each(function(e){E(this).addClass(t.call(this,e,it(this)))});if((e=ot(t)).length)while(n=this[u++])if(i=it(n),r=1===n.nodeType&&" "+rt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=rt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(b(t))return this.each(function(e){E(this).removeClass(t.call(this,e,it(this)))});if(!arguments.length)return this.attr("class","");if((e=ot(t)).length)while(n=this[u++])if(i=it(n),r=1===n.nodeType&&" "+rt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=rt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):b(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,it(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=E(this),r=ot(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=it(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+rt(it(n))+" ").indexOf(t))return!0;return!1}});var at=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=b(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(at,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:rt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},m.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),m.focusin="onfocusin"in g;var st=/^(?:focusinfocus|focusoutblur)$/,ut=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,d=[n||w],p=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||w,3!==n.nodeType&&8!==n.nodeType&&!st.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(h=p.split(".")).shift(),h.sort()),u=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[p]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||p,st.test(s+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;a===(n.ownerDocument||w)&&d.push(a.defaultView||a.parentWindow||g)}i=0;while((o=d[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||p,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&X(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!X(n)||u&&b(n[p])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=p,e.isPropagationStopped()&&f.addEventListener(p,ut),n[p](),e.isPropagationStopped()&&f.removeEventListener(p,ut),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),m.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}}),E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new g.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var lt,ct=/\[\]$/,ft=/\r?\n/g,dt=/^(?:submit|button|image|reset|file)$/i,pt=/^(?:input|select|textarea|keygen)/i;function ht(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||ct.test(n)?i(n,t):ht(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==T(e))i(n,e);else for(t in e)ht(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=b(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)ht(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&pt.test(this.nodeName)&&!dt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(ft,"\r\n")}}):{name:t.name,value:n.replace(ft,"\r\n")}}).get()}}),E.fn.extend({wrapAll:function(e){var t;return this[0]&&(b(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return b(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=b(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},m.createHTMLDocument=((lt=w.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===lt.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=w.implementation.createHTMLDocument("")).createElement("base")).href=w.location.href,t.head.appendChild(r)):t=w),o=!n&&[],(i=k.exec(e))?[t.createElement(i[1])]:(i=me([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),b(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=Me(m.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),b(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=S,E.isFunction=b,E.isWindow=x,E.camelCase=V,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var vt=g.jQuery,yt=g.$;return E.noConflict=function(e){return g.$===E&&(g.$=yt),e&&g.jQuery===E&&(g.jQuery=vt),E},"undefined"==typeof e&&(g.jQuery=g.$=E),E});
{"version":3,"sources":["jquery.slim.js"],"names":["global","factory","module","exports","document","w","Error","window","this","noGlobal","arr","getProto","Object","getPrototypeOf","slice","flat","array","call","concat","apply","push","indexOf","class2type","toString","hasOwn","hasOwnProperty","fnToString","ObjectFunctionString","support","isFunction","obj","nodeType","item","isWindow","preservedScriptAttributes","type","src","nonce","noModule","DOMEval","code","node","doc","i","val","script","createElement","text","getAttribute","setAttribute","head","appendChild","parentNode","removeChild","toType","version","jQuery","selector","context","fn","init","isArrayLike","length","prototype","jquery","constructor","toArray","get","num","pushStack","elems","ret","merge","prevObject","each","callback","map","elem","arguments","first","eq","last","even","grep","_elem","odd","len","j","end","sort","splice","extend","options","name","copy","copyIsArray","clone","target","deep","isPlainObject","Array","isArray","undefined","expando","Math","random","replace","isReady","error","msg","noop","proto","Ctor","isEmptyObject","globalEval","makeArray","results","inArray","second","invert","matches","callbackExpect","arg","value","guid","Symbol","iterator","split","_i","toLowerCase","Sizzle","Expr","getText","isXML","tokenize","compile","select","outermostContext","sortInput","hasDuplicate","setDocument","docElem","documentIsHTML","rbuggyQSA","rbuggyMatches","contains","Date","preferredDoc","dirruns","done","classCache","createCache","tokenCache","compilerCache","nonnativeSelectorCache","sortOrder","a","b","pop","pushNative","list","booleans","whitespace","identifier","attributes","pseudos","rwhitespace","RegExp","rtrim","rcomma","rcombinators","rdescend","rpseudo","ridentifier","matchExpr","ID","CLASS","TAG","ATTR","PSEUDO","CHILD","bool","needsContext","rhtml","rinputs","rheader","rnative","rquickExpr","rsibling","runescape","funescape","escape","nonHex","high","String","fromCharCode","rcssescape","fcssescape","ch","asCodePoint","charCodeAt","unloadHandler","inDisabledFieldset","addCombinator","disabled","nodeName","dir","next","childNodes","e","els","seed","m","nid","match","groups","newSelector","newContext","ownerDocument","exec","getElementById","id","getElementsByTagName","getElementsByClassName","qsa","test","testContext","scope","toSelector","join","querySelectorAll","qsaError","removeAttribute","keys","cache","key","cacheLength","shift","markFunction","assert","el","addHandle","attrs","handler","attrHandle","siblingCheck","cur","diff","sourceIndex","nextSibling","createInputPseudo","createButtonPseudo","createDisabledPseudo","isDisabled","createPositionalPseudo","argument","matchIndexes","namespace","namespaceURI","documentElement","hasCompare","subWindow","defaultView","top","addEventListener","attachEvent","className","createComment","getById","getElementsByName","filter","attrId","find","getAttributeNode","tag","tmp","input","innerHTML","matchesSelector","webkitMatchesSelector","mozMatchesSelector","oMatchesSelector","msMatchesSelector","disconnectedMatch","compareDocumentPosition","adown","bup","compare","sortDetached","aup","ap","bp","unshift","expr","elements","attr","specified","sel","uniqueSort","duplicates","detectDuplicates","sortStable","textContent","firstChild","nodeValue","selectors","createPseudo","relative",">"," ","+","~","preFilter","excess","unquoted","nodeNameSelector","pattern","operator","check","result","what","_argument","simple","forward","ofType","_context","xml","uniqueCache","outerCache","nodeIndex","start","parent","useCache","lastChild","uniqueID","pseudo","args","setFilters","idx","matched","not","matcher","unmatched","has","lang","elemLang","hash","location","root","focus","activeElement","hasFocus","href","tabIndex","enabled","checked","selected","selectedIndex","empty","header","button","_matchIndexes","lt","gt","radio","checkbox","file","password","image","submit","reset","tokens","combinator","base","skip","checkNonElements","doneName","oldCache","newCache","elementMatcher","matchers","condense","newUnmatched","mapped","setMatcher","postFilter","postFinder","postSelector","temp","preMap","postMap","preexisting","contexts","multipleContexts","matcherIn","matcherOut","matcherFromTokens","checkContext","leadingRelative","implicitRelative","matchContext","matchAnyContext","filters","parseOnly","soFar","preFilters","cached","elementMatchers","setMatchers","bySet","byElement","superMatcher","outermost","matchedCount","setMatched","contextBackup","dirrunsUnique","token","compiled","_name","defaultValue","unique","isXMLDoc","escapeSelector","until","truncate","is","siblings","n","rneedsContext","rsingleTag","winnow","qualifier","self","rootjQuery","parseHTML","ready","rparentsprev","guaranteedUnique","children","contents","prev","sibling","targets","l","closest","index","prevAll","add","addBack","parents","parentsUntil","nextAll","nextUntil","prevUntil","contentDocument","content","reverse","rnothtmlwhite","Identity","v","Thrower","ex","adoptValue","resolve","reject","noValue","method","promise","fail","then","Callbacks","object","_","flag","firing","memory","fired","locked","queue","firingIndex","fire","once","stopOnFalse","remove","disable","lock","fireWith","Deferred","func","tuples","state","always","deferred","catch","pipe","fns","newDefer","tuple","returned","progress","notify","onFulfilled","onRejected","onProgress","maxDepth","depth","special","that","mightThrow","TypeError","notifyWith","resolveWith","process","exceptionHook","stackTrace","rejectWith","getStackHook","setTimeout","stateString","when","singleValue","remaining","resolveContexts","resolveValues","primary","updateFunc","rerrorNames","stack","console","warn","message","readyException","readyList","completed","removeEventListener","readyWait","wait","readyState","doScroll","access","chainable","emptyGet","raw","bulk","_key","rmsPrefix","rdashAlpha","fcamelCase","_all","letter","toUpperCase","camelCase","string","acceptData","owner","Data","uid","defineProperty","configurable","set","data","prop","hasData","dataPriv","dataUser","rbrace","rmultiDash","dataAttr","JSON","parse","removeData","_data","_removeData","dequeue","startLength","hooks","_queueHooks","stop","setter","clearQueue","count","defer","pnum","source","rcssNum","cssExpand","isAttached","composed","getRootNode","isHiddenWithinTree","style","display","css","defaultDisplayMap","showHide","show","values","body","hide","toggle","div","rcheckableType","rtagName","rscriptType","createDocumentFragment","checkClone","cloneNode","noCloneChecked","option","wrapMap","thead","col","tr","td","_default","getAll","setGlobalEval","refElements","tbody","tfoot","colgroup","caption","th","optgroup","buildFragment","scripts","selection","ignored","wrap","attached","fragment","nodes","htmlPrefilter","createTextNode","rtypenamespace","returnTrue","returnFalse","expectSync","err","safeActiveElement","on","types","one","origFn","event","off","leverageNative","notAsync","saved","isTrigger","delegateType","stopPropagation","stopImmediatePropagation","preventDefault","trigger","Event","handleObjIn","eventHandle","events","t","handleObj","handlers","namespaces","origType","elemData","create","handle","triggered","dispatch","bindType","delegateCount","setup","mappedTypes","origCount","teardown","removeEvent","nativeEvent","handlerQueue","fix","delegateTarget","preDispatch","isPropagationStopped","currentTarget","isImmediatePropagationStopped","rnamespace","postDispatch","matchedHandlers","matchedSelectors","addProp","hook","enumerable","originalEvent","writable","load","noBubble","click","beforeunload","returnValue","props","isDefaultPrevented","defaultPrevented","relatedTarget","timeStamp","now","isSimulated","altKey","bubbles","cancelable","changedTouches","ctrlKey","detail","eventPhase","metaKey","pageX","pageY","shiftKey","view","char","charCode","keyCode","buttons","clientX","clientY","offsetX","offsetY","pointerId","pointerType","screenX","screenY","targetTouches","toElement","touches","which","blur","mouseenter","mouseleave","pointerenter","pointerleave","orig","related","rnoInnerhtml","rchecked","rcleanScript","manipulationTarget","disableScript","restoreScript","cloneCopyEvent","dest","udataOld","udataCur","domManip","collection","hasScripts","iNoClone","valueIsFunction","html","_evalUrl","keepData","cleanData","dataAndEvents","deepDataAndEvents","srcElements","destElements","inPage","detach","append","prepend","insertBefore","before","after","replaceWith","replaceChild","appendTo","prependTo","insertAfter","replaceAll","original","insert","rnumnonpx","getStyles","opener","getComputedStyle","swap","old","rboxStyle","curCSS","computed","width","minWidth","maxWidth","getPropertyValue","pixelBoxStyles","addGetHookIf","conditionFn","hookFn","computeStyleTests","container","cssText","divStyle","pixelPositionVal","reliableMarginLeftVal","roundPixelMeasures","marginLeft","right","pixelBoxStylesVal","boxSizingReliableVal","position","scrollboxSizeVal","offsetWidth","measure","round","parseFloat","reliableTrDimensionsVal","backgroundClip","clearCloneStyle","boxSizingReliable","pixelPosition","reliableMarginLeft","scrollboxSize","reliableTrDimensions","table","trChild","trStyle","height","parseInt","borderTopWidth","borderBottomWidth","offsetHeight","cssPrefixes","emptyStyle","vendorProps","finalPropName","final","cssProps","capName","vendorPropName","opt","rdisplayswap","rcustomProp","cssShow","visibility","cssNormalTransform","letterSpacing","fontWeight","setPositiveNumber","subtract","max","boxModelAdjustment","dimension","box","isBorderBox","styles","computedVal","extra","delta","ceil","getWidthOrHeight","valueIsBorderBox","offsetProp","getClientRects","cssHooks","opacity","cssNumber","animationIterationCount","columnCount","fillOpacity","flexGrow","flexShrink","gridArea","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineHeight","order","orphans","widows","zIndex","zoom","origName","isCustomProp","valueParts","tween","adjusted","scale","maxIterations","currentValue","initial","unit","initialInUnit","adjustCSS","setProperty","isFinite","getBoundingClientRect","scrollboxSizeBuggy","left","margin","padding","border","prefix","suffix","expand","expanded","parts","delay","time","fx","speeds","timeout","clearTimeout","checkOn","optSelected","radioValue","boolHook","removeAttr","nType","attrHooks","attrNames","getter","lowercaseName","rfocusable","rclickable","stripAndCollapse","getClass","classesToArray","removeProp","propFix","propHooks","tabindex","for","class","addClass","classes","curValue","clazz","finalValue","removeClass","toggleClass","stateVal","isValidValue","classNames","hasClass","rreturn","valHooks","optionSet","focusin","rfocusMorph","stopPropagationCallback","onlyHandlers","bubbleType","ontype","lastElement","eventPath","parentWindow","simulate","triggerHandler","attaches","parseXML","parserErrorElem","DOMParser","parseFromString","rbracket","rCRLF","rsubmitterTypes","rsubmittable","buildParams","traditional","param","s","valueOrFunction","encodeURIComponent","serialize","serializeArray","wrapAll","firstElementChild","wrapInner","htmlIsFunction","unwrap","hidden","visible","createHTMLDocument","implementation","keepScripts","parsed","offset","setOffset","curPosition","curLeft","curCSSTop","curTop","curOffset","curCSSLeft","curElem","using","rect","win","pageYOffset","pageXOffset","offsetParent","parentOffset","scrollLeft","scrollTop","scrollTo","Height","Width","","defaultExtra","funcName","bind","unbind","delegate","undelegate","hover","fnOver","fnOut","proxy","holdReady","hold","parseJSON","isNumeric","isNaN","trim","define","amd","_jQuery","_$","$","noConflict"],"mappings":"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","file":"jquery.slim.min.js"}
