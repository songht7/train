(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-train-unitlist"],{1748:function(t,e,n){"use strict";n.r(e);var i=n("81cd"),s=n("9b65");for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var o=n("2877"),a=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"dce740b8",null);e["default"]=a.exports},1855:function(t,e,n){"use strict";n.r(e);var i=n("db36"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=s.a},"1f61":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},"529c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=i},"6ad8":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".swiper-slide-unit[data-v-f165f08e]{height:%?422?%}.segmented-box[data-v-f165f08e]{border-bottom:%?2?% solid #d1d1d1}.unit-content[data-v-f165f08e]{padding-bottom:%?30?%}.course-inner[data-v-f165f08e]{padding:%?30?%}.is-joined[data-v-f165f08e]{background:#929292;color:#fff;border-color:#929292}.course-detail-box[data-v-f165f08e]{border-bottom:%?20?% solid #f4f4f4}.less-active[data-v-f165f08e]{color:#008cee}",""])},"80a4":function(t,e,n){"use strict";n.r(e);var i=n("9e89"),s=n("e890");for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);n("f8ac");var o=n("2877"),a=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"29ef49d5",null);e["default"]=a.exports},"81cd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[n("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?n("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"9b65":function(t,e,n){"use strict";n.r(e);var i=n("529c"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=s.a},"9c97":function(t,e,n){var i=n("fe7c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("b909debc",i,!0,{sourceMap:!1,shadowMode:!1})},"9e89":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.values,function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:t.styleType,style:i===t.currentIndex?t.activeStyle:t.itemStyle,on:{click:function(e){e=t.$handleEvent(e),t.onClick(i)}}},[t._v(t._s(e))])}),1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},a90c:function(t,e,n){"use strict";n.r(e);var i=n("b870"),s=n("1855");for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);n("ed94");var o=n("2877"),a=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"f165f08e",null);e["default"]=a.exports},b870:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"unit-list"},[n("v-uni-swiper",{staticClass:"swiper-box swiper-slide-unit",attrs:{"indicator-dots":t.swiperleng?"true":"false",circular:"circular",interval:"interval",duration:"duration","indicator-color":"#E0E0E0","indicator-active-color":"#008CEE",current:t.swiperCurrent},on:{change:function(e){e=t.$handleEvent(e),t.swiperChange(e)}}},t._l(t.swiperList,function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[n("v-uni-view",{staticClass:"vli"},[n("v-uni-view",{staticClass:"vli2"},[n("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:e.default?e.original_src:t.sourceUrl+e.original_src,mode:"aspectFill"},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(e)}}})],1)],1)],1)}),1),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt segmented-box"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.segmented,styleType:"text",activeColor:"#008CEE"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClicksegmented(e)}}})],1),n("v-uni-view",{staticClass:"unit-content"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}]},[n("v-uni-view",{staticClass:"course-detail-box"},[n("v-uni-view",{staticClass:"course-inner"},[n("v-uni-view",{staticClass:"course-title"},[t._v(t._s(t.data.name))]),n("v-uni-view",{staticClass:"course-more list-more"},[n("v-uni-view",[t._v("123人在学")]),n("v-uni-view",[t._v("共"+t._s(t.lessTotal)+"门课程")])],1),n("v-uni-rich-text",{staticClass:"course-detail",attrs:{nodes:t.data.detail}})],1)],1),n("v-uni-view",{staticClass:"course-lessions"},[n("v-uni-view",{staticClass:"course-inner"},[t._l(t.lessions,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"less-row",class:[i==t.lessActive?"less-active":""],on:{click:function(n){n=t.$handleEvent(n),t.getLessDtl(e.id,i)}}},[t._v(t._s(i+1)+"."+t._s(e.name))])]})],2)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}]},[n("v-uni-view",{staticClass:"course-lessions"},[n("v-uni-view",{staticClass:"course-inner"},[t._l(t.lessions,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"less-row",class:[i==t.lessActive?"less-active":""],on:{click:function(n){n=t.$handleEvent(n),t.getLessDtl(e.id,i)}}},[t._v(t._s(i+1)+"."+t._s(e.name))])]})],2)],1)],1)],1),n("fix-button",[t.canTest?t._e():n("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:t.isJoined?"is-joined":"",on:{click:function(e){e=t.$handleEvent(e),t.joinlearning(t.courseId)}}},[t._v(t._s(t.isJoinTxt))]),t.canTest?n("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:t.canTest?"":"fbtn-disable",on:{click:function(e){e=t.$handleEvent(e),t.to_test(t.courseId)}}},[t._v("开始测试")]):t._e()],1)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},d7ed:function(t,e,n){var i=n("6ad8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("a6106f48",i,!0,{sourceMap:!1,shadowMode:!1})},db36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("1748")),s=r(n("80a4"));function r(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{__token:"",courseId:"",data:[],lessions:[],lessTotal:"",lessDtl:[],cover:[],swiperList:[{original_src:"/static/img-1.png",default:!0}],swiperCurrent:0,lessActive:0,lessDefaultActive:0,isJoined:!1,isJoinTxt:"加入学习",current:0,segmented:["介绍","课程目录"],canTest:!1}},onLoad:function(t){var e=this;e.courseId=t.id,e.$store.dispatch("cheack_user"),e.__token=e.$store.state.user.token;var n={inter:"course",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){if(t.success){var n=t.data;if(e.data=n,e.isJoined="1"==n.ucStatus||"2"==n.ucStatus,e.isJoinTxt="1"==n.ucStatus?"学习完成后开启测试":"加入学习",n.lessonCount==n.lessonStartCount&&"0"!=n.lessonCount&&"0"!=n.lessonStartCount&&(e.canTest=!0),t.data.original_src){var i=[{original_src:t.data.original_src}];e.swiperList=i}}}};e.$store.dispatch("getData",n);var i={inter:"lessons",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){if(t.success){e.lessions=t.data.list,e.lessTotal=t.data.total;var n=e.lessDefaultActive;t.data.list[n]&&t.data.list[n].id&&e.getLessDtl(t.data.list[n].id,n)}}};e.$store.dispatch("getData",i)},onShow:function(){},onReady:function(t){},components:{fixButton:i.default,uniSegmentedControl:s.default},computed:{swiperleng:function(){return this.swiperList.length}},methods:{getLessDtl:function(t,e){var n=this;if(e!=n.lessActive){var i={inter:"lesson",parm:"?lesson_id=".concat(t),header:{token:n.__token},fun:function(i){n.swiperCurrent=0,n.lessActive=e;var s={inter:"accountLesson",data:{lesson_id:t},method:"POST",header:{"Content-Type":"application/json",token:n.__token},fun:function(t){t.success}};n.$store.dispatch("getData",s),i.success&&(n.lessDtl=i.data,i.data.images&&(n.swiperList=i.data.images))}};n.$store.dispatch("getData",i)}},onClicksegmented:function(t){this.current!==t&&(this.current=t)},previewImage:function(){var t=this,e=t.swiperCurrent,n=t.swiperList,i=n.map(function(e){return t.$store.state.interface.apiurl+e.original_src}),s={urls:i,indicator:"number",current:e.toString()};console.log(s),uni.previewImage(s)},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},swiperChange:function(t){var e=this;e.swiperCurrent=t.detail.current},joinlearning:function(t){var e=this;if(!e.isJoined){var n={inter:"accountCourse",data:{course_id:t},method:"POST",header:{"Content-Type":"application/json",token:e.__token},fun:function(t){t.success&&(e.isJoined=!0,e.isJoinTxt="学习完成后开启测试")}};e.$store.dispatch("getData",n)}},to_test:function(t){var e=this;e.canTest?uni.navigateTo({url:"/pages/train/test?course_id=".concat(t)}):uni.showModal({content:"学习完成当前课程方可测试！",showCancel:!1})}}};e.default=o},e890:function(t,e,n){"use strict";n.r(e);var i=n("1f61"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=s.a},ed94:function(t,e,n){"use strict";var i=n("d7ed"),s=n.n(i);s.a},f8ac:function(t,e,n){"use strict";var i=n("9c97"),s=n.n(i);s.a},fe7c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-29ef49d5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?32?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden}.segmented-control.button[data-v-29ef49d5]{border:%?2?% solid}.segmented-control.text[data-v-29ef49d5]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-29ef49d5]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box}.segmented-control-item.button[data-v-29ef49d5]{border-left:%?1?% solid}.segmented-control-item.text[data-v-29ef49d5]{border-left:0}.segmented-control-item[data-v-29ef49d5]:first-child{border-left-width:0}",""])}}]);