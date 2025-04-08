"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{5979:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(1880);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7001:function(e,t,n){function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(1880),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7927:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(6362),o=n(1904),a=r._(n(9767)),i=n(6022),u=n(8275),s=n(3108),l=n(6808),c=n(5979),f=n(2544),d=n(1827),p=n(8796),h=n(7001),_=n(7066),g=n(5111),m=new Set;function E(e,t,n,r,o,a){if("undefined"!=typeof window&&(a||(0,u.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function R(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let n,r;let{href:s,as:m,children:y,prefetch:P=null,passHref:S,replace:b,shallow:O,scroll:A,locale:v,onClick:T,onMouseEnter:N,onTouchStart:I,legacyBehavior:C=!1,...x}=e;n=y,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let j=a.default.useContext(f.RouterContext),M=a.default.useContext(d.AppRouterContext),w=null!=j?j:M,L=!j,D=!1!==P,U=null===P?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:k,as:F}=a.default.useMemo(()=>{if(!j){let e=R(s);return{href:e,as:m?R(m):e}}let[e,t]=(0,i.resolveHref)(j,s,!0);return{href:e,as:m?(0,i.resolveHref)(j,m):t||e}},[j,s,m]),X=a.default.useRef(k),W=a.default.useRef(F);C&&(r=a.default.Children.only(n));let G=C?r&&"object"==typeof r&&r.ref:t,[H,Y,B]=(0,p.useIntersection)({rootMargin:"200px"}),K=a.default.useCallback(e=>{(W.current!==F||X.current!==k)&&(B(),W.current=F,X.current=k),H(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[F,G,k,B,H]);a.default.useEffect(()=>{w&&Y&&D&&E(w,k,F,{locale:v},{kind:U},L)},[F,k,Y,v,D,null==j?void 0:j.locale,w,L,U]);let V={ref:K,onClick(e){C||"function"!=typeof T||T(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,l,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?a.default.startTransition(d):d()}(e,w,k,F,b,O,A,v,L)},onMouseEnter(e){C||"function"!=typeof N||N(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&(D||!L)&&E(w,k,F,{locale:v,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){C||"function"!=typeof I||I(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&(D||!L)&&E(w,k,F,{locale:v,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,l.isAbsoluteUrl)(F))V.href=F;else if(!C||S||"a"===r.type&&!("href"in r.props)){let e=void 0!==v?v:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);V.href=t||(0,_.addBasePath)((0,c.addLocale)(F,e,null==j?void 0:j.defaultLocale))}return C?a.default.cloneElement(r,V):(0,o.jsx)("a",{...x,...V,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3007:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6022:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(7020),o=n(3108),a=n(7191),i=n(6808),u=n(1880),s=n(8275),l=n(8066),c=n(7937);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,l.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:i,params:u}=(0,c.interpolateAs)(e.pathname,e.pathname,n);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(n,u)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[i,t||i]:i}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8796:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(9767),o=n(3007),a="function"==typeof IntersectionObserver,i=new Map,u=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,l=s||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(l||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8700:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_SUFFIX:function(){return s},APP_DIR_ALIAS:function(){return T},CACHE_ONE_YEAR:function(){return y},DOT_NEXT_ALIAS:function(){return A},ESLINT_DEFAULT_DIRS:function(){return B},GSP_NO_RETURNED_VALUE:function(){return F},GSSP_COMPONENT_MEMBER_ERROR:function(){return G},GSSP_NO_RETURNED_VALUE:function(){return X},INSTRUMENTATION_HOOK_FILENAME:function(){return b},MIDDLEWARE_FILENAME:function(){return P},MIDDLEWARE_LOCATION_REGEXP:function(){return S},NEXT_BODY_SUFFIX:function(){return f},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return R},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return h},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return _},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return p},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return E},NEXT_CACHE_TAGS_HEADER:function(){return d},NEXT_CACHE_TAG_MAX_ITEMS:function(){return g},NEXT_CACHE_TAG_MAX_LENGTH:function(){return m},NEXT_DATA_SUFFIX:function(){return l},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return r},NEXT_META_SUFFIX:function(){return c},NEXT_QUERY_PARAM_PREFIX:function(){return n},NON_STANDARD_NODE_ENV:function(){return H},PAGES_DIR_ALIAS:function(){return O},PRERENDER_REVALIDATE_HEADER:function(){return o},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return a},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return M},ROOT_DIR_ALIAS:function(){return v},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return j},RSC_ACTION_ENCRYPTION_ALIAS:function(){return x},RSC_ACTION_PROXY_ALIAS:function(){return C},RSC_ACTION_VALIDATE_ALIAS:function(){return I},RSC_MOD_REF_PROXY_ALIAS:function(){return N},RSC_PREFETCH_SUFFIX:function(){return i},RSC_SUFFIX:function(){return u},SERVER_PROPS_EXPORT_ERROR:function(){return k},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return L},SERVER_PROPS_SSG_CONFLICT:function(){return D},SERVER_RUNTIME:function(){return K},SSG_FALLBACK_EXPORT_ERROR:function(){return Y},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return w},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return U},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return W},WEBPACK_LAYERS:function(){return z},WEBPACK_RESOURCE_QUERIES:function(){return q}});let n="nxtP",r="nxtI",o="x-prerender-revalidate",a="x-prerender-revalidate-if-generated",i=".prefetch.rsc",u=".rsc",s=".action",l=".json",c=".meta",f=".body",d="x-next-cache-tags",p="x-next-cache-soft-tags",h="x-next-revalidated-tags",_="x-next-revalidate-tag-token",g=128,m=256,E=1024,R="_N_T_",y=31536e3,P="middleware",S=`(?:src/)?${P}`,b="instrumentation",O="private-next-pages",A="private-dot-next",v="private-next-root-dir",T="private-next-app-dir",N="private-next-rsc-mod-ref-proxy",I="private-next-rsc-action-validate",C="private-next-rsc-server-reference",x="private-next-rsc-action-encryption",j="private-next-rsc-action-client-wrapper",M="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",w="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",L="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",D="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",U="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",k="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",F="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",X="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",W="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",G="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",H='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',Y="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",B=["app","pages","components","lib","src"],K={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},V={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route",appRouteHandler:"app-route-handler"},z={...V,GROUP:{serverOnly:[V.reactServerComponents,V.actionBrowser,V.appMetadataRoute,V.appRouteHandler,V.instrument],clientOnly:[V.serverSideRendering,V.appPagesBrowser],nonClientServerTarget:[V.middleware,V.api],app:[V.reactServerComponents,V.actionBrowser,V.appMetadataRoute,V.appRouteHandler,V.serverSideRendering,V.appPagesBrowser,V.shared,V.instrument]}},q={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},979:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},2544:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(6362)._(n(9767)).default.createContext(null)},3108:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return i}});let r=n(7519)._(n(7020)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",s=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:n&&(l=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(l+=":"+e.port)),s&&"object"==typeof s&&(s=String(r.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+l+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},8066:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(986),o=n(4136)},7937:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let r=n(1150),o=n(9753);function a(e,t,n){let a="",i=(0,o.getRouteRegex)(e),u=i.groups,s=(t!==e?(0,r.getRouteMatcher)(i)(t):"")||n;a=e;let l=Object.keys(u);return l.every(e=>{let t=s[e]||"",{repeat:n,optional:r}=u[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in s)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:l,result:a}}},4136:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let r=n(2295),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},8275:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=n(6808),o=n(5189);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},7191:function(e,t){function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},7020:function(e,t){function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},1150:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(6808);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},i={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(i[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),i}}},9753:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return p},getNamedRouteRegex:function(){return d},getRouteRegex:function(){return l},parseParameter:function(){return u}});let r=n(8700),o=n(2295),a=n(979),i=n(2874);function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function s(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},r=1;return{parameterizedRoute:t.map(e=>{let t=o.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:o,repeat:s}=u(i[1]);return n[e]={pos:r++,repeat:s,optional:o},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:o}=u(i[1]);return n[e]={pos:r++,repeat:t,optional:o},t?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function l(e){let{parameterizedRoute:t,groups:n}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function c(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:o,keyPrefix:i}=e,{key:s,optional:l,repeat:c}=u(r),f=s.replace(/\W/g,"");i&&(f=""+i+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),i?o[f]=""+i+s:o[f]=s;let p=t?(0,a.escapeStringRegexp)(t):"";return c?l?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function f(e,t){let n;let u=(0,i.removeTrailingSlash)(e).slice(1).split("/"),s=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:u.map(e=>{let n=o.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){let[n]=e.split(i[0]);return c({getSafeRouteKey:s,interceptionMarker:n,segment:i[1],routeKeys:l,keyPrefix:t?r.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return i?c({getSafeRouteKey:s,segment:i[1],routeKeys:l,keyPrefix:t?r.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function d(e,t){let n=f(e,t);return{...l(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function p(e,t){let{parameterizedRoute:n}=s(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=f(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},986:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),i=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),i=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function a(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},6808:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return m},NormalizeError:function(){return _},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return s},getLocationOrigin:function(){return i},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return R}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function u(){let{href:e}=window.location,t=i();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&l(n))return r;if(!r)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class _ extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function R(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);