(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-technical-detail"],{"05cc":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a481"),a("7f7f");var n=i(a("6b1d")),o={data:function(){return{article_id:"",datas:[]}},onLoad:function(t){var e=this;e.article_id=t.id},onShow:function(){var t=this;uni.showLoading({title:"加载中..."}),t.$store.dispatch("cheack_user"),t.getDatas()},components:{fixButton:n.default},methods:{getDatas:function(){var t=this,e={inter:"support",parm:"?article_id=".concat(t.article_id),header:{token:t.$store.state.user.token||""},fun:function(e){if(uni.hideLoading(),e.success){var a=e.data;uni.setNavigationBarTitle({title:e.data.name}),a["detail"]=a["detail"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),t.datas=a}}};t.$store.dispatch("getData",e)}}};e.default=o},"0f4d":function(t,e,a){"use strict";a.r(e);var i=a("05cc"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"23e5":function(t,e,a){"use strict";a.r(e);var i=a("53e21"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},2542:function(t,e,a){"use strict";a.r(e);var i=a("96e9"),n=a("0f4d");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("3ab1");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"6f65b695",null);e["default"]=s.exports},"3ab1":function(t,e,a){"use strict";var i=a("c986"),n=a.n(i);n.a},"53e21":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=i},"6b1d":function(t,e,a){"use strict";a.r(e);var i=a("c976"),n=a("23e5");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"88554764",null);e["default"]=s.exports},"96e9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"article-detail"},[t.$store.state.user.token?[a("v-uni-view",{staticClass:"page-main"},[t.datas.id?[a("v-uni-view",{staticClass:"banner"},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:t.datas.original_src||"/static/default.png",mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.datas.name))]),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:t.datas.detail}})],1)]:t._e(),a("fix-button",[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("makePhoneCall")}}},[a("uni-icon",{attrs:{type:"dianhua1",size:"25",color:"#fff"}}),t._v("咨询我们")],1)],1)],2)]:[a("login-tip"),a("tab-bar")]],2)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},ab66:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".banner[data-v-6f65b695]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-6f65b695]{width:100%}.banner-title[data-v-6f65b695]{padding:%?30?% 3% %?10?%;font-size:%?44?%;font-weight:500;color:#222}.article-meta[data-v-6f65b695]{padding:0 3% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:grey}.article-text[data-v-6f65b695]{font-size:%?26?%;margin:0 %?20?%}.article-author[data-v-6f65b695],.article-time[data-v-6f65b695]{font-size:%?30?%}.article-content[data-v-6f65b695]{padding:0 3%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])},c976:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[a("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?a("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},c986:function(t,e,a){var i=a("ab66");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f9fb2918",i,!0,{sourceMap:!1,shadowMode:!1})}}]);