(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3769f3e8"],{3689:function(e,t,i){},"691c":function(e,t,i){e.exports=i.p+"img/vue.82b9c7a5.png"},7541:function(e,t,i){"use strict";i("3689")},9224:function(e){e.exports=JSON.parse('{"name":"vue-d3-examples","version":"0.1.2","private":true,"author":"YuanWei GUO","email":"qingyi_w@outlook.com","scripts":{"dev":"npm run lint & vue-cli-service serve","serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","new:view":"node ./scripts/generateView/index","new:comp":"node ./scripts/generateComponent/index"},"dependencies":{"vue":"^2.6.6","vue-i18n":"^8.24.1","vue-router":"^3.0.2"},"devDependencies":{"@vue/cli-plugin-babel":"^3.4.0","@vue/cli-plugin-eslint":"^3.4.0","@vue/cli-service":"^4.2.3","@vue/eslint-config-standard":"^4.0.0","babel-eslint":"^10.0.1","babel-plugin-syntax-dynamic-import":"^6.18.0","cz-conventional-changelog":"^3.1.0","d3":"^5.12.0","eslint":"^5.8.0","eslint-plugin-vue":"^5.0.0","minimist":"^1.2.5","validate-commit-msg":"^2.14.0","vue-particles":"^1.0.9","vue-template-compiler":"^2.5.21","vuetify":"^2.4.5"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"],"config":{"commitizen":{"path":"./node_modules/cz-conventional-changelog"}}}')},a451:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-app",{attrs:{id:"inspire"}},[l("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:"",width:"280"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[l("div",{staticClass:"img-container cursor-pointer"},[l("img",{staticClass:"logo-img",attrs:{src:i("691c")},on:{click:e.goHome}}),l("img",{staticClass:"logo-img img-d3-padding",attrs:{src:i("c852")},on:{click:e.goHome}})]),l("v-divider"),l("v-list",e._l(e.items,(function(t,i){return l("v-list-group",{key:i,attrs:{"append-icon":t.appendIcon},on:{click:function(l){return e.itemClick(t,i)}},scopedSlots:e._u([{key:"activator",fn:function(){return[l("v-list-item-icon",[l("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),l("v-list-item-content",[l("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)]},proxy:!0}],null,!0),model:{value:t.active,callback:function(i){e.$set(t,"active",i)},expression:"item.active"}},[t.children?l("v-list-item-group",{attrs:{color:"primary"},model:{value:e.subItemActive,callback:function(t){e.subItemActive=t},expression:"subItemActive"}},e._l(t.children,(function(t,i){return l("v-list-item",{key:i,on:{click:function(l){return e.subItemClick(t,i)}}},[l("v-list-item-icon"),l("v-list-item-content",[l("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1):e._e()],1)})),1)],1),l("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:""}},[l("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),l("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[l("span",{staticClass:"hidden-sm-and-down"},[e._v("Vue D3 Examples")])]),l("v-spacer"),l("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[l("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",n,!1),i),[l("v-icon",[e._v("mdi-translate")]),l("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-down ")])],1)]}}])},[l("v-list",[l("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},[l("v-list-item",[l("v-list-item-title",{on:{click:function(t){return e.changeLang("en")}}},[e._v("English")])],1),l("v-list-item",[l("v-list-item-title",{on:{click:function(t){return e.changeLang("zh")}}},[e._v("简体中文")])],1)],1)],1)],1),l("v-btn",{attrs:{icon:""},on:{click:e.requestFullscreen}},[l("v-icon",[e._v("mdi-fullscreen")])],1),l("v-btn",{attrs:{icon:""},on:{click:e.exitFullScreen}},[l("v-icon",[e._v("mdi-fullscreen-exit")])],1),l("v-btn",{attrs:{icon:""},on:{click:e.changeTheme}},[e.dark?l("v-icon",[e._v("mdi-brightness-4")]):l("v-icon",[e._v("mdi-brightness-7")])],1),l("v-btn",{attrs:{icon:""},on:{click:e.openTab}},[l("v-icon",{attrs:{size:"28"}},[e._v("mdi-github")])],1),l("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!0}}},[l("v-icon",{attrs:{size:"28"}},[e._v("mdi-information-outline")])],1)],1),l("v-main",[l("v-container",[l("router-view")],1)],1),l("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[l("v-card",[l("v-card-title",{attrs:{"primary-title":""}},[e._v("Vue D3 Examples")]),l("v-card-text",[e._v("Version: v"+e._s(e.version))]),l("v-card-text",[e._v("Author: YuanWei Guo")]),l("v-card-text",[e._v("Email: qingyi_w@outlook.com")])],1)],1)],1)},n=[],a=(i("c5f6"),i("ac6a"),i("9224")),s={data:function(){return{version:"",dialog:!1,dark:!1,drawer:null,itemActive:0,subItemActive:0,selectedItem:0}},computed:{items:function(){return[{icon:"mdi-alpha-i-box-outline",title:"Introduction",path:"/examples/introduction",appendIcon:null,active:!0},{icon:"mdi-alpha-b-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title1.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title1.value"),path:"/examples/helloworld"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title2.value"),path:"/examples/updateenterexit"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title3.value"),path:"/examples/generalupdatepattern"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title4.value"),path:"/examples/selectelementbinddata"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title5.value"),path:"/examples/selectinsertremove"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-t-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title2.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title1.value"),path:"/examples/treeI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title2.value"),path:"/examples/treeII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title3.value"),path:"/examples/treeIII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title4.value"),path:"/examples/treeIV"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title5.value"),path:"/examples/treeV"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title6.value"),path:"/examples/treeVI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title7.value"),path:"/examples/treeVII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title8.value"),path:"/examples/treeVIII"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-b-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title3.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title1.value"),path:"/examples/barchartI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title2.value"),path:"/examples/barchartII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title3.value"),path:"/examples/axis"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title4.value"),path:"/examples/simplebarchart"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title5.value"),path:"/examples/scale"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-z-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title4.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title4.children.title1.value"),path:"/examples/zoomable"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title4.children.title2.value"),path:"/examples/zoomabletext"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-f-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title5.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title1.value"),path:"/examples/forcebasedI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title2.value"),path:"/examples/forcebasedII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title3.value"),path:"/examples/forcebasedIII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title4.value"),path:"/examples/forcedirected"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title5.value"),path:"/examples/forcelayoutI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title6.value"),path:"/examples/forcelayoutII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title7.value"),path:"/examples/forcelayoutIII"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-h-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title6.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title1.value"),path:"/examples/histogramI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title2.value"),path:"/examples/histogramII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title3.value"),path:"/examples/histogramIII"}],appendIcon:"mdi-chevron-down"}]}},created:function(){var e=this;if(this.version=a.version,localStorage.getItem("themeDark")&&"true"===localStorage.getItem("themeDark")&&(this.$vuetify.theme.dark=!0,this.dark=!0),"/examples"===this.$route.path)this.$router.push("/examples/introduction").catch((function(e){}));else{this.$router.push(this.$route.path).catch((function(e){}));var t=this.$route.path;this.items.forEach((function(i,l){i.path===t?e.itemActive=l:i.children&&i.children.length>0&&i.children.forEach((function(e,i){e.path===t&&(sessionStorage.setItem("itemActive",l),sessionStorage.setItem("subItemActive",i))}))})),sessionStorage.getItem("itemActive")&&(this.items[0].active=!1,this.items[Number(sessionStorage.getItem("itemActive"))]["active"]=!0),sessionStorage.getItem("subItemActive")&&(this.subItemActive=Number(sessionStorage.getItem("subItemActive")))}},mounted:function(){sessionStorage.getItem("i18nLocale")&&"zh"===sessionStorage.getItem("i18nLocale")&&(this.selectedItem=1),document.addEventListener("fullscreenchange",(function(){console.log("fullscreenchange")}))},beforeDestroy:function(){sessionStorage.removeItem("subItemActive"),sessionStorage.removeItem("itemActive")},methods:{requestFullscreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()},changeLang:function(e){this.$i18n.locale=e,sessionStorage.setItem("i18nLocale",e),sessionStorage.getItem("itemActive")&&(this.items[0].active=!1,this.items[Number(sessionStorage.getItem("itemActive"))]["active"]=!0,sessionStorage.getItem("subItemActive")&&(this.subItemActive=Number(sessionStorage.getItem("subItemActive"))))},openTab:function(){window.open("https://github.com/gywgithub/vue-d3-examples","_blank")},itemClick:function(e,t){this.subItemActive=null,sessionStorage.setItem("itemActive",t),console.dir(e),e.children||this.$router.push(e.path).catch((function(e){}))},subItemClick:function(e,t){sessionStorage.setItem("subItemActive",t),this.$router.push(e.path).catch((function(e){}))},goHome:function(){this.$router.push("/Home").catch((function(e){}))},changeTheme:function(){this.dark=!this.dark,localStorage.setItem("themeDark",String(this.dark)),this.$vuetify.theme.dark=this.dark}}},r=s,c=(i("7541"),i("2877")),o=Object(c["a"])(r,l,n,!1,null,"27b083cd",null);t["default"]=o.exports},ac6a:function(e,t,i){for(var l=i("cadf"),n=i("0d58"),a=i("2aba"),s=i("7726"),r=i("32e9"),c=i("84f2"),o=i("2b4c"),u=o("iterator"),v=o("toStringTag"),d=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=n(m),p=0;p<h.length;p++){var f,g=h[p],b=m[g],y=s[g],$=y&&y.prototype;if($&&($[u]||r($,u,d),$[v]||r($,v,g),c[g]=d,b))for(f in l)$[f]||a($,f,l[f],!0)}},c852:function(e,t,i){e.exports=i.p+"img/d3.dd2952b2.svg"}}]);
//# sourceMappingURL=chunk-3769f3e8.16cd4b6b.js.map