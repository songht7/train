(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-technical-detail"],{"00ad":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("6b1d"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{isCollect:!1,title:"IOS 9001 认证",banner:{title:"IOS 9001 认证",author_name:"职照小编",published_at:"2019-3-20",original_src:"/data/image_doc/9c84faccb7f85cddfebd2ca072f879ba.jpg"},htmlString:"<p>详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p><p>详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p><p>详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>"}},onLoad:function(t){this.getDetail(),uni.setNavigationBarTitle({title:"IOS 9001 认证"})},components:{fixButton:n.default},methods:{getDetail:function(){}}};e.default=r},"0f4d":function(t,e,a){"use strict";a.r(e);var n=a("00ad"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"23e5":function(t,e,a){"use strict";a.r(e);var n=a("a028"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},2542:function(t,e,a){"use strict";a.r(e);var n=a("3f43"),i=a("0f4d");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("cf4a");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"0ab5bf68",null);e["default"]=c.exports},"3b02":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".banner[data-v-0ab5bf68]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-0ab5bf68]{width:100%}.banner-title[data-v-0ab5bf68]{padding:%?30?% 3% %?10?%;font-size:%?44?%;font-weight:500;color:#222}.article-meta[data-v-0ab5bf68]{padding:0 3% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:grey}.article-text[data-v-0ab5bf68]{font-size:%?26?%;margin:0 %?20?%}.article-author[data-v-0ab5bf68],.article-time[data-v-0ab5bf68]{font-size:%?30?%}.article-content[data-v-0ab5bf68]{padding:0 3%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])},"3f43":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"article-detail"},[a("v-uni-view",{staticClass:"banner"},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:t.sourceUrl+t.banner.original_src}})],1),a("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))]),a("v-uni-view",{staticClass:"article-meta"},[a("v-uni-text",{staticClass:"article-author"},[t._v("21人已办理")])],1),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:t.htmlString}})],1),a("fix-button",[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("makePhoneCall")}}},[a("uni-icon",{attrs:{type:"dianhua1",size:"25",color:"#fff"}}),t._v("咨询我们")],1)],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"54be":function(t,e,a){var n=a("3b02");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("08894e3a",n,!0,{sourceMap:!1,shadowMode:!1})},5567:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[a("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?a("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"6b1d":function(t,e,a){"use strict";a.r(e);var n=a("5567"),i=a("23e5");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"79ac0b39",null);e["default"]=c.exports},a028:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=n},cf4a:function(t,e,a){"use strict";var n=a("54be"),i=a.n(n);i.a}}]);