(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],d=0,v=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"teal",dark:"",dense:"",outlined:""}},[r("v-toolbar-title",[e._v("2020 Movies Listing ")]),r("v-spacer")],1),r("Main")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("movie-searcher",{on:{updatedSearchResults:e.updateSearchResults,searchLoading:e.handleSearchLoading,tooManyResults:e.handleTooManyResults,zeroResult:e.handleZeroResult}})],1),e.loading?r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-progress-circular",{attrs:{color:"teal",indeterminate:"",size:"70"}})],1):e.hasTooManyResults?r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" Too many results. Keep searching! ")]):e.isZeroResult?r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" No movies found ")]):e.items.length>0?r("v-row",e._l(e.items,(function(e){return r("v-col",{key:e.imdbID,attrs:{cols:"6"}},[r("movie-item",{attrs:{item:e}})],1)})),1):e._e(),e.isNextPageLoading?r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-progress-circular",{attrs:{color:"teal",indeterminate:"",size:"70"}})],1):e.hasMultiplePages?r("v-btn",{staticClass:"mt-3",attrs:{dark:"",block:"",color:"teal"},on:{click:e.fetchNextPage}},[e._v(" Load more "),r("v-icon",[e._v("mdi-download-multiple")])],1):e._e()],1),e.error?r("error-dialog",{attrs:{error:e.error}}):e._e()],1)],1)},l=[],c=r("2909"),s=(r("d3b7"),r("ed09")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{attrs:{cols:"12"}},[r("v-combobox",{attrs:{items:e.items,loading:e.loading,"search-input":e.search,color:"teal","hide-no-data":"","item-text":"Title","item-value":"imdbID",label:"2020 Movies",placeholder:"Search a movie title released in 2020","return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}}}),e.error?r("error-dialog",{attrs:{error:e.error}}):e._e()],1)},d=[],v=(r("caad"),r("d81d"),r("1da1")),p=(r("96cf"),r("99af"),"//www.omdbapi.com/?apikey=8bd0a139"),f=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r,a,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:1,e.prev=1,e.next=4,fetch("".concat(p,"&y=2020&s=").concat(t,"&page=").concat(r));case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"&i=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{persisten:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"red--text"},[e._v("Error")]),r("v-card-text",{staticClass:"red--text"},[e._v(" An unexpected error occurred. "),r("a",{attrs:{href:"#"},on:{click:e.reloadPage}},[e._v("Click here")]),e._v(" to reload the page and try again. ")]),r("v-card-text",{staticClass:"red--text"},[e._v(" Error message: "),r("p",[e._v(e._s(e.error))])])],1)],1)},g=[],h={props:["error"],setup:function(){var e=function(){return window.location.reload()};return{dialog:!0,reloadPage:e}}},_=h,j=r("2877"),x=r("6544"),O=r.n(x),w=r("b0af"),V=r("99d9"),y=r("169a"),D=Object(j["a"])(_,b,g,!1,null,null,null),R=D.exports;O()(D,{VCard:w["a"],VCardText:V["c"],VCardTitle:V["d"],VDialog:y["a"]});var C=["Too many results.","Movie not found!"],P=1e3,T=function(e,t){switch(e){case C[0]:t.emit("tooManyResults",!0);break;case C[1]:t.emit("zeroResult",!0);break}},k={components:{ErrorDialog:R},setup:function(e,t){var r,a=Object(s["d"])(!1),n=Object(s["d"])([]),o=Object(s["d"])(""),i=Object(s["d"])(null);return Object(s["e"])(o,(function(){if(clearTimeout(r),n.value.length=0,t.emit("tooManyResults",!1),t.emit("zeroResult",!1),!o.value)return t.emit("searchLoading",!1),void t.emit("updatedSearchResults",{searchValue:o.value,items:n.value,pages:0});r=setTimeout((function(){a.value=!0,t.emit("searchLoading",!0),f(o.value).then((function(e){var r=e.Search,a=e.Error,i=e.totalResults;if(a){if(!C.includes(a))return Promise.reject(a);T(a,t)}else{var l;n.value.length=0,(l=n.value).push.apply(l,Object(c["a"])(r.map((function(e){return Object(s["c"])(e)}))))}t.emit("updatedSearchResults",{searchValue:o.value,items:n.value,pages:Math.ceil(i/10)||0})})).catch((function(e){console.error(e),i.value=e})).finally((function(){a.value=!1,t.emit("searchLoading",!1)}))}),P)})),{loading:a,items:n,search:o,error:i}}},M=k,S=r("62ad"),I=r("2b5d"),E=Object(j["a"])(M,u,d,!1,null,null,null),L=E.exports;O()(E,{VCol:S["a"],VCombobox:I["a"]});var A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"item",on:{click:e.toggleViewDetail}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",src:e.poster,height:"250px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("v-card-title",{staticClass:"pb-0",domProps:{textContent:e._s(e.item.Title)}}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"}},[e._v(" Details "),r("v-icon",[e._v("mdi-movie-open-cog")])],1)],1)],1)],1),r("movie-detail",{attrs:{item:e.item,poster:e.poster,viewDetail:e.viewDetail},on:{closedDialog:e.toggleViewDetail}})],1)},N=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.viewDetail,callback:function(t){e.viewDetail=t},expression:"viewDetail"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"teal"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.closeDialog}},[r("v-icon",[e._v("mdi-close")])],1),r("v-toolbar-title",[e._v("Movie Details")])],1),r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",src:e.poster,"max-height":"300px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("v-card-title",{staticClass:"pb-0",domProps:{textContent:e._s(e.item.Title)}})],1),e.loading?r("v-card-text",{staticClass:"text-center mt-3"},[r("v-progress-circular",{attrs:{color:"teal",indeterminate:"",size:"70"}})],1):e.itemDetails?r("v-card-text",{staticClass:"mt-3"},[r("v-card-subtitle",[e._v(" "+e._s(e.itemDetails.Plot)+" ")]),e.autoRenderedItemProperties&&e.autoRenderedItemProperties.length>0?r("v-row",e._l(e.autoRenderedItemProperties,(function(t,a){return r("v-col",{key:a,attrs:{cols:"6"}},[r("b",[e._v(e._s(t)+":")]),e._v(" "+e._s(e.itemDetails[t])+" ")])})),1):e._e(),e.itemDetails.Ratings&&e.itemDetails.Ratings.length>0?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("b",[e._v("Ratings:")])]),e._l(e.itemDetails.Ratings,(function(t){return r("v-col",{key:t.Source,attrs:{cols:"4"}},[r("li",[r("b",[e._v(e._s(t.Source)+":")]),e._v(" "+e._s(t.Value)+" ")])])}))],2):e._e()],1):e._e()],1),e.error?r("error-dialog",{attrs:{error:e.error}}):e._e()],1)},z=[],B=(r("4de4"),r("b64b"),r("2532"),{}),Z=["Plot","Ratings","Title","Poster","Response","Type","imdbID","imdbRating","imdbVotes"],J={components:{ErrorDialog:R},props:{item:Object,poster:String,viewDetail:Boolean},setup:function(e,t){var r=Object(s["d"])(!1),a=Object(s["d"])(null),n=Object(s["d"])(B[e.item.imdbID]),o=function(){t.emit("closedDialog")},i=Object(s["a"])((function(){return n&&n.value?Object.keys(n.value).filter((function(e){return!Z.includes(e)&&n.value[e]&&"N/A"!==n.value[e]})):[]}));return Object(s["e"])((function(){return e.viewDetail}),(function(){e.viewDetail&&!n.value&&(r.value=!0,m(e.item.imdbID).then((function(t){n.value=t,B[e.item.imdbID]=t})).catch((function(e){console.error(e),a.value=e})).finally((function(){r.value=!1})))})),{loading:r,error:a,itemDetails:n,autoRenderedItemProperties:i,closeDialog:o}}},K=J,q=r("8336"),F=r("132d"),G=r("adda"),H=r("490a"),Q=r("0fd9"),U=r("71d9"),W=r("2a7f"),X=Object(j["a"])(K,$,z,!1,null,null,null),Y=X.exports;O()(X,{VBtn:q["a"],VCard:w["a"],VCardSubtitle:V["b"],VCardText:V["c"],VCardTitle:V["d"],VCol:S["a"],VDialog:y["a"],VIcon:F["a"],VImg:G["a"],VProgressCircular:H["a"],VRow:Q["a"],VToolbar:U["a"],VToolbarTitle:W["a"]});var ee={components:{MovieDetail:Y},props:{item:Object},setup:function(e){var t=Object(s["d"])(!1),r=Object(s["d"])(""),a=function(){t.value=!t.value};return e.item&&e.item.Poster&&"N/A"!==e.item.Poster&&(r.value=e.item.Poster),{poster:r,viewDetail:t,toggleViewDetail:a}}},te=ee,re=(r("7b05"),r("2fa4")),ae=Object(j["a"])(te,A,N,!1,null,"6c40daa0",null),ne=ae.exports;O()(ae,{VBtn:q["a"],VCard:w["a"],VCardActions:V["a"],VCardTitle:V["d"],VIcon:F["a"],VImg:G["a"],VSpacer:re["a"]});var oe={components:{ErrorDialog:R,MovieSearcher:L,MovieItem:ne},setup:function(){var e=Object(s["d"])([]),t=Object(s["d"])(1),r=Object(s["d"])(1),a=Object(s["d"])(""),n=Object(s["d"])(!1),o=Object(s["d"])(!1),i=Object(s["d"])(!1),l=Object(s["d"])(!1),u=Object(s["d"])(null),d=Object(s["a"])((function(){return r.value>1&&t.value<r.value})),v=function(n){e.value=n.items,r.value=n.pages,a.value=n.searchValue,t.value=1},p=function(e){n.value=e},m=function(){o.value=!0,t.value++,f(a.value,t.value).then((function(t){var r;(r=e.value).push.apply(r,Object(c["a"])(t.Search))})).catch((function(e){console.error(e),u.value=e})).finally((function(){o.value=!1}))},b=function(e){i.value=e},g=function(e){l.value=e};return{loading:n,isNextPageLoading:o,error:u,items:e,hasMultiplePages:d,hasTooManyResults:i,isZeroResult:l,updateSearchResults:v,handleSearchLoading:p,handleTooManyResults:b,handleZeroResult:g,fetchNextPage:m}}},ie=oe,le=r("a523"),ce=r("f6c4"),se=Object(j["a"])(ie,i,l,!1,null,null,null),ue=se.exports;O()(se,{VBtn:q["a"],VCol:S["a"],VContainer:le["a"],VIcon:F["a"],VMain:ce["a"],VProgressCircular:H["a"],VRow:Q["a"]});var de={name:"App",components:{Main:ue},setup:function(){return{}}},ve=de,pe=r("7496"),fe=r("40dc"),me=Object(j["a"])(ve,n,o,!1,null,null,null),be=me.exports;O()(me,{VApp:pe["a"],VAppBar:fe["a"],VSpacer:re["a"],VToolbarTitle:W["a"]});var ge=r("f309");a["default"].use(ge["a"]);var he=new ge["a"]({});a["default"].use(s["b"]);var _e=s["b"];a["default"].config.productionTip=!1,new a["default"]({vuetify:he,vueCompositionApi:_e,render:function(e){return e(be)}}).$mount("#app")},"7b05":function(e,t,r){"use strict";r("dbe1")},dbe1:function(e,t,r){}});
//# sourceMappingURL=app.13f81851.js.map