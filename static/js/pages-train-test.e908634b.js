(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-train-test"],{"094a":function(t,e,n){"use strict";var i=n("ef83"),o=n.n(i);o.a},"1a56":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-popup",props:{show:{type:Boolean,default:!1},closeBtnShow:{type:Boolean,default:!0},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},width:{type:String,default:"80"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(t){this.offsetTop=t?44:0}},computed:{},methods:{setWidth:function(t){return"".concat(t,"%")},hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}},created:function(){var t=0;t=this.h5Top?0:44,this.offsetTop=t}};e.default=i},"1aa3":function(t,e,n){"use strict";n.r(e);var i=n("afec"),o=n("b474");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ba94");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"fcc6d114",null);e["default"]=r.exports},"23e5":function(t,e,n){"use strict";n.r(e);var i=n("d7a8"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"3ee6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.moveHandle(e)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+t.position+" uni-popup-"+t.mode+" uni-popup-"+t.width,style:t.width?"width:"+t.width+"%":""},[t._v(t._s(t.msg)),t._t("default"),"middle"===t.position&&"insert"===t.mode&&t.closeBtnShow?n("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===t.buttonMode,"uni-close-right":"right"===t.buttonMode},on:{click:function(e){e=t.$handleEvent(e),t.closeMask(e)}}}):t._e()],2)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"6b1d":function(t,e,n){"use strict";n.r(e);var i=n("c976"),o=n("23e5");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"88554764",null);e["default"]=r.exports},"829c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("1aa3")),o=s(n("6b1d")),a=s(n("ac84"));function s(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{courseId:"",__token:"",current:1,tests:[],test_leng:5,test_total:0,countdown:3,loading:!1,submitted:!1,formData:[],type:"",scoreDes:"成绩不合格",score:0,scoreState:"stateRed",fixBtn:"fixed",closeBtnShow:!1}},onLoad:function(t){var e=this;e.courseId=t.course_id,e.$store.dispatch("cheack_user"),e.__token=e.$store.state.user.token,uni.setNavigationBarTitle({title:"理论测试"});var n={inter:"tests",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){t.success&&(e.tests=t.data.list,e.test_leng=t.data.max,e.test_total=t.data.total)}};e.$store.dispatch("getData",n)},onShow:function(){this.$store.dispatch("cheack_user"),this.$store.dispatch("getSystemInfo")},onBackPress:function(){if(""!==this.type)return this.type="",!0},onReady:function(t){},computed:{getFixBtn:function(){var t=this,e="fixed",n=t.$store.state.systemInfo.platform||"ALL";return"IOS"!=n.toUpperCase()&&"ALL"!=n||(e="static"),e},selectType:function(t){var e=t;switch(t){case"对":e='<text class="TorF true">✔</text>';break;case"错":e='<text class="TorF false">✘</text>';break;default:e=t;break}return e}},components:{fixButton:o.default,uniPopup:a.default,uniCountdown:i.default},methods:{togglePopup:function(t){this.type=t},test_more:function(t){var e=this;switch(e.countdown,t){case"prev":e.current=e.current-1>=1?e.current-1:1;break;case"next":e.current=e.current+1<=e.test_leng?e.current+1:e.test_leng;break}},answerAgain:function(){uni.redirectTo({url:"/pages/train/test?course_id=".concat(this.courseId)})},goToList:function(){this.togglePopup(""),uni.redirectTo({url:"/pages/train/unitlist?id=".concat(this.courseId)})},setData:function(t){var e=this,n=t.detail.value;if(t.currentTarget.dataset.tyle&&"checkbox"==t.currentTarget.dataset.tyle){var i="";n.forEach(function(t,e,n){i+=t}),n=i}e.formData["".concat(t.currentTarget.dataset.key)]=n},setFixBtn:function(t){},toSubmit:function(){var t=this;1!=t.submitted&&t.formSubmit()},formSubmit:function(t){var e=this,n=e.formData;if(1!=e.loading)if(1!=e.submitted){e.loading=!0,console.log(n);var i={course_id:e.courseId,aws:n},o={inter:"test",data:i,method:"POST",header:{token:e.__token},fun:function(t){if(e.loading=!1,t.success){e.togglePopup("score");var n=t.data.exam&&t.data.exam.point?t.data.exam.point:0;e.score=n,e.countdown=0,e.submitted=!0,n>=60?(e.scoreDes="成绩合格",e.scoreState="stateGreen"):(e.scoreDes="成绩不合格",e.scoreState="stateRed")}}};e.$store.dispatch("getData",o)}else uni.showToast({title:"您已交卷！不可重复提交",icon:"none"})}}};e.default=r},"89c3":function(t,e,n){var i=n("fe03");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("425705e1",i,!0,{sourceMap:!1,shadowMode:!1})},9008:function(t,e,n){"use strict";n.r(e);var i=n("93f9"),o=n("b655");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("094a");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"61f514fe",null);e["default"]=r.exports},"93f9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"train-test"},[n("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[n("v-uni-view",{staticClass:"test-content"},[n("v-uni-view",{staticClass:"test-head"},[n("v-uni-view",{staticClass:"test-countdown"},[t._v("答题倒计时"),n("uni-countdown",{attrs:{color:"#f40","border-color":"#f40","show-day":!1,minute:t.countdown,second:0},on:{timeup:function(e){e=t.$handleEvent(e),t.toSubmit(e)}}}),t._v("后自动提交")],1),n("v-uni-view",{staticClass:"test-total"},[t._v("本章节测试，共"+t._s(t.test_total)+"题")])],1),t._l(t.tests,function(e,i){return[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.current===i+1,expression:"current === i+1"}],key:i+"_0"},[n("v-uni-view",{staticClass:"test-block"},[1==t.submitted?[n("v-uni-view",{staticClass:"test-marking"},[n("uni-icon",{attrs:{type:e.serialization==t.formData[e.id]?"buoumaotubiao49":"kulian",size:"80",color:e.serialization==t.formData[e.id]?"#5FC1B7":"#DE544C"}})],1)]:t._e(),n("v-uni-view",{staticClass:"test-title-box"},[n("v-uni-view",{staticClass:"test-title"},[t._v("第"+t._s(t.current)+"题:"+t._s(e.name))]),n("v-uni-view",{staticClass:"test-tyle"},["select"===e.type?[t._v("单选题")]:"selects"===e.type?[t._v("多选题")]:[t._v("填空题")]],2)],1),e.detail?n("v-uni-rich-text",{attrs:{nodes:e.detail}}):t._e(),"select"===e.type?[n("v-uni-view",{staticClass:"choose-list radio-box"},[n("v-uni-radio-group",{attrs:{name:e.id,"data-key":e.id},on:{change:function(e){e=t.$handleEvent(e),t.setData(e)}}},t._l(e.select,function(e,i){return n("v-uni-label",{key:e,staticClass:"train-choose-list"},[n("v-uni-view",[n("v-uni-radio",{attrs:{value:i}})],1),n("v-uni-view",["对"==e||"正确"==e?n("v-uni-text",{staticClass:"TorF true"},[t._v("✔")]):"错"==e||"错误"==e?n("v-uni-text",{staticClass:"TorF false"},[t._v("✘")]):n("v-uni-text",[t._v(t._s(i)+"："+t._s(e))])],1)],1)}),1)],1)]:"selects"===e.type?[n("v-uni-checkbox-group",{attrs:{name:e.id,"data-key":e.id,"data-tyle":"checkbox"},on:{change:function(e){e=t.$handleEvent(e),t.setData(e)}}},t._l(e.select,function(e,i){return n("v-uni-label",{key:e,staticClass:"train-choose-list"},[n("v-uni-checkbox",{attrs:{value:i}}),t._v(t._s(i)+"："+t._s(e))],1)}),1)]:[n("v-uni-view",{staticClass:"test-answer"},[n("v-uni-view",{staticClass:"test-answer-info"},[t._v("答案：")]),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-input",{staticClass:"uni-input",attrs:{name:e.id,"data-key":e.id},on:{input:function(e){e=t.$handleEvent(e),t.setData(e)},focus:function(e){e=t.$handleEvent(e),t.setFixBtn("static")},blur:function(e){e=t.$handleEvent(e),t.setFixBtn("fixed")}}})],1)],1)]],2)],1)]})],2),n("fix-button",{attrs:{gobackShow:"hide",isFixed:t.getFixBtn}},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current===1"}],staticClass:"fbtns btn-goback",class:t.test_total<=0?"fbtn-full":"",on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("退出测试")]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.current>1,expression:"current>1"}],staticClass:"fbtns btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.test_more("prev")}}},[t._v("上一题")]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.current<t.test_total,expression:"current<test_total"}],staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.test_more("next")}}},[t._v("下一题")]),t.submitted?n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.current===t.test_total,expression:"current===test_total"}],staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.goToList(e)}}},[t._v("继续学习")]):n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.current===t.test_total,expression:"current===test_total"}],staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[t._v("提交")])],1)],1),n("uni-popup",{attrs:{show:"score"===t.type,position:"middle",mode:"insert",closeBtnShow:t.closeBtnShow,width:"70"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[n("v-uni-view",{staticClass:"uni-center center-box score-box",class:t.scoreState},[n("v-uni-view",{staticClass:"score-block score-top",class:t.scoreState},[n("v-uni-view",{staticClass:"score-top-val score-des"},[t._v(t._s(t.scoreDes))]),n("v-uni-view",{staticClass:"score-top-val score-star"},["stateGreen"==t.scoreState?n("uni-icon",{attrs:{type:"al-star",isGradient:"isGradient",iconBig:"icon-big",size:"35",color:"#FFDA76"}}):t._e(),n("uni-icon",{attrs:{type:"al-star",isGradient:"isGradient",iconBig:"icon-big",size:"50",color:"#FFDA76"}}),"stateGreen"==t.scoreState?n("uni-icon",{attrs:{type:"al-star",isGradient:"isGradient",iconBig:"icon-big",size:"35",color:"#FFDA76"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"score-block score-middle"},[n("v-uni-view",{staticClass:"score-ov"},[t._v("您的成绩")]),n("v-uni-view",{staticClass:"score"},[t._v(t._s(t.score))])],1),n("v-uni-view",{staticClass:"score-block score-bottom"},[n("v-uni-view",{staticClass:"score-btn score-back-btn",on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[t._v("查看结果")]),n("v-uni-view",{staticClass:"score-btn",class:t.scoreState,on:{click:function(e){e=t.$handleEvent(e),t.goToList(e)}}},[t._v("继续学习")])],1)],1)],1),n("uni-popup",{attrs:{show:"overtime"===t.type,position:"middle",mode:"fixed",width:"70"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[n("v-uni-view",{staticClass:"train-show-modal-box"},[n("v-uni-view",{staticClass:"train-show-modal-info"},[n("v-uni-view",{staticClass:"train-show-modal-row"},[t._v("答题已超时")])],1),n("v-uni-view",{staticClass:"btns btns-full",on:{click:function(e){e=t.$handleEvent(e),t.answerAgain(e)}}},[t._v("重新答题")])],1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},a923:function(t,e,n){"use strict";n.r(e);var i=n("1a56"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},ac84:function(t,e,n){"use strict";n.r(e);var i=n("3ee6"),o=n("a923");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ae50");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"6dfc8908",null);e["default"]=r.exports},ae50:function(t,e,n){"use strict";var i=n("89c3"),o=n.n(i);o.a},afec:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b474:function(t,e,n){"use strict";n.r(e);var i=n("eb3b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},b655:function(t,e,n){"use strict";n.r(e);var i=n("829c"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},ba94:function(t,e,n){"use strict";var i=n("f109"),o=n.n(i);o.a},c976:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[n("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?n("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},d0c9:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.sub-btn[data-v-61f514fe]{padding:0;margin:0;background:rgba(0,0,0,0);-webkit-border-radius:0;border-radius:0;line-height:1}.sub-btn[data-v-61f514fe]:after{width:100%;height:100%;border:none}.uni-popup-middle[data-v-61f514fe]{width:80%}.score-box[data-v-61f514fe]{background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;width:100%;overflow:hidden;color:#f04b3f;padding:0 0 %?30?%}.score-box.stateGreen[data-v-61f514fe]{color:#56cebe}.score-block[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.score-top[data-v-61f514fe]{position:relative;overflow:hidden;padding:%?40?% 0 %?20?%}.score-top[data-v-61f514fe]:before{position:absolute;left:-50%;top:-125%;width:200%;height:200%;content:"";background:-webkit-gradient(linear,left top,left bottom,from(#f58568),to(#ea5950));background:-webkit-linear-gradient(#f58568,#ea5950);background:-o-linear-gradient(#f58568,#ea5950);background:linear-gradient(#f58568,#ea5950);z-index:0;-webkit-border-radius:50%;border-radius:50%}.score-top.stateGreen[data-v-61f514fe]:before{background:-webkit-gradient(linear,left top,left bottom,from(#48afbe),to(#58d3be));background:-webkit-linear-gradient(#48afbe,#58d3be);background:-o-linear-gradient(#48afbe,#58d3be);background:linear-gradient(#48afbe,#58d3be)}.score-top-val[data-v-61f514fe]{position:relative;z-index:1}.score-des[data-v-61f514fe]{font-size:%?60?%;line-height:2;color:#fff}.score-star[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;width:80%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.score-ov[data-v-61f514fe]{font-size:%?28?%}.score[data-v-61f514fe]{font-size:%?130?%;line-height:1;padding:%?10?% 0 %?50?%}.score-bottom[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.score-btn[data-v-61f514fe]{color:#fff;background:#f04b3f;line-height:2.4;width:45%;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?32?%}.score-btn.stateGreen[data-v-61f514fe]{background:#56cebe}.score-back-btn[data-v-61f514fe]{background:#fff;border:1px solid #bbb;color:#666}.test-head[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?% %?30?%}.test-countdown[data-v-61f514fe]{font-size:%?34?%}.test-total[data-v-61f514fe]{font-size:%?32?%;padding:%?20?% 0 0}.test-block[data-v-61f514fe]{font-size:%?32?%;color:#222;padding:%?30?%;position:relative}.test-marking[data-v-61f514fe]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.test-title-box[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.test-title[data-v-61f514fe]{font-size:%?34?%;padding-bottom:%?20?%;width:84%}.test-tyle[data-v-61f514fe]{width:15%;color:#008cee;border:1px solid #008cee;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;top:%?10?%}.test-answer[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?40?% 0}.test-answer-info[data-v-61f514fe]{font-size:%?36?%}.tst-input[data-v-61f514fe]{border-bottom:1px solid #929292;margin-left:%?5?%;padding:%?2?% %?20?%}.btn-button[data-v-61f514fe]{line-height:1.8;margin:0;-webkit-box-sizing:content-box;box-sizing:content-box}.btn-button[data-v-61f514fe]:after{border:none}.train-choose-list[data-v-61f514fe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%}.TorF[data-v-61f514fe]{font-size:%?38?%;color:#007aff;padding:0 %?25?%}.false[data-v-61f514fe]{color:#3a3a3a}',""])},d7a8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=i},e89f:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-countdown[data-v-fcc6d114]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown__splitor[data-v-fcc6d114]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-fcc6d114]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}",""])},eb3b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,i){return 60*t*60*24+60*e*60+60*n+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,i=0,o=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,i=Math.floor(t/60)-24*e*60-60*n,o=Math.floor(t)-24*e*60*60-60*n*60-60*i):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),i<10&&(i="0"+i),o<10&&(o="0"+o),this.d=e,this.h=n,this.i=i,this.s=o}}};e.default=i},ef83:function(t,e,n){var i=n("d0c9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("cd3d12cc",i,!0,{sourceMap:!1,shadowMode:!1})},f109:function(t,e,n){var i=n("e89f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7034f1ed",i,!0,{sourceMap:!1,shadowMode:!1})},fe03:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-mask[data-v-6dfc8908]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-6dfc8908]{position:absolute;z-index:999;background-color:#fff}.uni-popup-middle[data-v-6dfc8908]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-6dfc8908]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-6dfc8908],.uni-popup-middle.uni-popup-posfixed[data-v-6dfc8908]{-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?30?%}.uni-popup-middle.uni-popup-posfixed[data-v-6dfc8908]{position:fixed}.uni-close-bottom[data-v-6dfc8908],.uni-close-right[data-v-6dfc8908]{position:absolute;bottom:%?-180?%;text-align:center;-webkit-border-radius:50%;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-right[data-v-6dfc8908]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-6dfc8908]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-top[data-v-6dfc8908]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-6dfc8908]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])}}]);