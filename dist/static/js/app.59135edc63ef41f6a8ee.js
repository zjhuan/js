webpackJsonp([0],{"4O4o":function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("this is me")])},staticRenderFns:[]};var s=e("VU/8")({},i,!1,function(t){e("8qH7")},null,null);n.a=s.exports},"56KN":function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("this is Cart")])},staticRenderFns:[]};var s=e("VU/8")({},i,!1,function(t){e("uXKW")},null,null);n.a=s.exports},"8qH7":function(t,n){},BMzc:function(t,n,e){"use strict";var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"tabs"},[e("ul",[e("router-link",{attrs:{to:{name:"Home"},tag:"li","active-class":"active"}},[e("div",[e("img")]),t._v(" "),e("div",[t._v("首页")])]),t._v(" "),e("router-link",{attrs:{to:{name:"Explorer"},tag:"li","active-class":"active",exact:""}},[e("div",[e("img")]),t._v(" "),e("div",[t._v("图书分类")])]),t._v(" "),e("router-link",{attrs:{to:{name:"Cart"},tag:"li"}},[e("div",[e("img")]),t._v(" "),e("div",[t._v("购物车")])]),t._v(" "),e("router-link",{attrs:{to:{name:"Me"},tag:"li"}},[e("div",[e("img")]),t._v(" "),e("div",[t._v("我")])])],1),t._v(" "),e("span",[e("router-link",{attrs:{tag:"li",to:{name:"BookDetails",params:{id:1}}}},[e("div",[t._v("BookDetails")]),e("br")])],1)]),t._v(" "),[e("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[e("router-view")],1)]],2)},staticRenderFns:[]};var s=e("VU/8")({},i,!1,function(t){e("bMKf")},null,null);n.a=s.exports},Cn9H:function(t,n){},FBhY:function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("this is explorer")])},staticRenderFns:[]};var s=e("VU/8")({},i,!1,function(t){e("wMly")},null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("router-view")],1)])},staticRenderFns:[]};var a=e("VU/8")({name:"App"},s,!1,function(t){e("i9Ul")},null,null).exports,r=e("YaEn");i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,components:{App:a},template:"<App/>"})},RQXl:function(t,n){},YaEn:function(t,n,e){"use strict";(function(t){var i=e("7+uW"),s=e("/ocq"),a=e("BMzc"),r=e("xkS0"),o=e("FBhY"),c=e("56KN"),l=e("4O4o"),u=e("bSo9");i.a.use(s.a),n.a=new s.a({mode:"history",base:t,linkActiveClass:"active",routes:[{name:"Main",path:"/",component:a.a,children:[{path:"/home",name:"Home",component:r.a},{path:"/explorer",name:"Explorer",component:o.a},{path:"/cart",name:"Cart",component:c.a},{path:"/me",name:"Me",component:l.a}]},{path:"/books/:id",name:"BookDetails",component:u.a}]})}).call(n,"/")},bMKf:function(t,n){},bSo9:function(t,n,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("this is bookdetails "+this._s(this.id))])},staticRenderFns:[]};var s=e("VU/8")({},i,!1,function(t){e("RQXl")},null,null);n.a=s.exports},i9Ul:function(t,n){},uXKW:function(t,n){},v2ns:function(t,n){},wMly:function(t,n){},xkS0:function(t,n,e){"use strict";var i=e("DNVT"),s=(e("v2ns"),{data:function(){return{announcement:"今日上架图书全部8折！",slides:[{id:1,img_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=28849038,472140465&fm=26&gp=0.jpg"},{id:2,img_url:"../assets/logo.png"}]}},mounted:function(){new i.a(".swiper-container",{loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",scrollbar:".swiper-scrollbar"})}}),a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"section"},[e("div",[e("div",{staticClass:"swiper-container"},[t._l(t.slides,function(t){return e("div",{staticClass:"swiper-wrapper"},[e("router-link",{staticClass:"swiper-slide",attrs:{tag:"div",to:{name:"BookDetails",params:{id:t.id}}}},[e("img",{attrs:{src:t.img_url}})])],1)}),t._v(" "),e("div",{staticClass:"swiper-pagination"}),t._v(" "),e("div",{staticClass:"swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next"}),t._v(" "),e("div",{staticClass:"swiper-scrollbar"})],2),t._v(" "),e("div",{staticClass:"announcement"},[e("label",[t._v("快讯")]),t._v(" "),e("span",[t._v(t._s(t.announcement))])])])]),t._v(" "),e("div",{staticClass:"section"}),t._v(" "),e("div",{staticClass:"section"})])},staticRenderFns:[]};var r=e("VU/8")(s,a,!1,function(t){e("Cn9H")},null,null);n.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.59135edc63ef41f6a8ee.js.map