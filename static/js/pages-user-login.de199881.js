(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"1d45":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uni-popup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},width:{type:String,default:"80"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(e){this.offsetTop=e?44:0}},computed:{},methods:{setWidth:function(e){return"".concat(e,"%")},hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}},created:function(){var e=0;e=this.h5Top?0:44,this.offsetTop=e}};t.default=n},"22bd":function(e,t,i){"use strict";i.r(t);var n=i("f381"),a=i("f38a");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("8e62");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"385306ca",null);t["default"]=s.exports},4484:function(e,t,i){"use strict";i.r(t);var n=i("4956"),a=i("4bc8");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("616d");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"433ddcee",null);t["default"]=s.exports},4505:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-mask[data-v-433ddcee]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-433ddcee]{position:absolute;z-index:999;background-color:#fff}.uni-popup-middle[data-v-433ddcee]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-433ddcee]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-433ddcee]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-433ddcee],.uni-close-right[data-v-433ddcee]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-right[data-v-433ddcee]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-433ddcee]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-top[data-v-433ddcee]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-433ddcee]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])},4956:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){t=e.$handleEvent(t),e.hide(t)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),t=e.$handleEvent(t),e.moveHandle(t)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+e.position+" uni-popup-"+e.mode+" uni-popup-"+e.width,style:"width:"+e.setWidth(e.width)},[e._v(e._s(e.msg)),e._t("default"),"middle"===e.position&&"insert"===e.mode?i("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===e.buttonMode,"uni-close-right":"right"===e.buttonMode},on:{click:function(t){t=e.$handleEvent(t),e.closeMask(t)}}}):e._e()],2)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"4bc8":function(e,t,i){"use strict";i.r(t);var n=i("1d45"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"616d":function(e,t,i){"use strict";var n=i("faa7"),a=i.n(n);a.a},7964:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".train-input[data-v-385306ca]{background:#f4f4f4;border-radius:%?5?%;border:1px solid #e0e0e0}.get-code-left[data-v-385306ca]{width:60%}.get-code[data-v-385306ca]{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#008cee;border-radius:%?5?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:38%}.user-login-more[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#008cee;font-size:%?32?%}.user-center[data-v-385306ca]{width:93%;padding:%?30?% 3%}.user-center-full[data-v-385306ca]{width:100%;padding:0}.user-block[data-v-385306ca]{padding-bottom:%?40?%}.border-block[data-v-385306ca]{padding:%?30?% %?20?%;border-bottom:%?20?% solid #f4f4f4}.border-block[data-v-385306ca]:last-child{border-bottom:0}.user-head[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:%?20?%}.portrait[data-v-385306ca]{width:%?125?%;height:%?125?%;border-radius:50%;overflow:hidden}.user-portrait[data-v-385306ca]{width:100%;height:100%}.user-infos[data-v-385306ca]{-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.user-name[data-v-385306ca]{line-height:2;width:100%}.logout[data-v-385306ca]{font-weight:200;padding:0 %?10?%;font-size:%?26?%}.user-more[data-v-385306ca]{border:%?2?% solid #929292;border-radius:%?30?%;color:#929292;padding:0 %?20?%;margin-right:%?20?%}.job[data-v-385306ca]{border:none;border-radius:0;padding:0}.user-edit[data-v-385306ca]{width:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;height:100%}.user-class-info[data-v-385306ca]{border:%?2?% solid #e0e0e0;border-radius:%?8?%;-webkit-box-shadow:0 0 %?10?% %?3?% #e0e0e0;box-shadow:0 0 %?10?% %?3?% #e0e0e0}.user-my-class[data-v-385306ca]{padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.my-class-block[data-v-385306ca]{height:%?150?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:33%;border-right:%?2?% solid #e0e0e0}.my-class-block[data-v-385306ca]:last-child{border-right:none}.class-overview[data-v-385306ca]{font-size:%?24?%}.class-count[data-v-385306ca]{font-size:%?52?%;color:#008cee}.class-state-green[data-v-385306ca]{color:#3bc1b0}.class-state-red[data-v-385306ca]{color:#ee6858}.my-class-head[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-tip[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-icon[data-v-385306ca]{background:-webkit-gradient(linear,left top,left bottom,from(#48afbe),to(#58d3be));background:-o-linear-gradient(#48afbe,#58d3be);background:linear-gradient(#48afbe,#58d3be);width:%?50?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden;margin-right:%?10?%}.class-more[data-v-385306ca]{font-size:%?28?%;color:#929292}.class-list-row[data-v-385306ca]{border-bottom:none}.class-list-left[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;height:%?134?%}.class-progress[data-v-385306ca]{width:95%}.progress-box[data-v-385306ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?50?%}.percent[data-v-385306ca]{text-align:right}",""])},"7c51":function(e,t,i){var n=i("7964");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("17c9fd7f",n,!0,{sourceMap:!1,shadowMode:!1})},8768:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("4484"));function a(e){return e&&e.__esModule?e:{default:e}}var o=i("d2c6"),r={data:function(){return{UserType:"",loading:!1,poptype:"",popTxtType:"company-reg",formData:{phone:"",password:""}}},onLoad:function(e){var t=this,i=e.type;t.UserType=i,uni.setNavigationBarTitle({title:"company"==i?"企业登录":"个人登录"})},onShow:function(){},computed:{},components:{uniPopup:n.default},methods:{formSubmit:function(e){var t=this;if(1!=t.loading){var i=t.formData;t.loading=!0;var n=[{name:"phone",checkType:"notnull",checkRule:"",errorMsg:"用户名不能为空"},{name:"password",checkType:"notnull",checkRule:"",errorMsg:"密码不能为空"}],a=o.check(i,n);if(a){var r={inter:"login",data:i,method:"POST",fun:function(e){if(e.success){var i=e.data.token,n=e.data.deathline,a={inter:"info",header:{token:i},fun:function(e){t.loading=!1,e.success&&(e["data"]["tabBarType"]=t.UserType,e["data"]["token"]=i,e["data"]["deathline"]=n,uni.setStorage({key:"user",data:e.data}),uni.showToast({title:"登录成功",icon:"none",duration:1500}),setTimeout(function(){t.$store.commit("change_page",0),uni.redirectTo({url:"/"})},1500))}};t.$store.dispatch("getData",a)}else t.loading=!1,uni.showToast({title:e.msg,icon:"none"})}};t.$store.dispatch("getData",r)}else uni.showToast({title:o.error,icon:"none"}),t.loading=!1}},toRegister:function(e){var t=this;if("company"==t.UserType)t.poptype="company-reg",t.popTxtType=e?"":"company-reg";else{var i=e?"?type="+e:"";uni.navigateTo({url:"/pages/user/register".concat(i)})}},togglePopup:function(e){this.poptype=e},setData:function(e){var t=this;t.formData["".concat(e.currentTarget.dataset.key)]=e.detail.value}}};t.default=r},"8e62":function(e,t,i){"use strict";var n=i("7c51"),a=i.n(n);a.a},d2c6:function(e,t,i){"use strict";e.exports={error:"",check:function(e,t){for(var i=0;i<t.length;i++){if(!t[i].checkType)return!0;if(!t[i].name)return!0;if(!t[i].errorMsg)return!0;if(!e[t[i].name])return this.error=t[i].errorMsg,!1;switch(t[i].checkType){case"string":var n=new RegExp("^.{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[i].checkRule+"}$");if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[i].name]))return this.error=t[i].errorMsg,!1;var a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;a=t[i].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[i].name]>a[1]||e[t[i].name]<a[0])return this.error=t[i].errorMsg,!1;break;case"same":if(e[t[i].name]!=t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"notsame":if(e[t[i].name]==t[i].checkRule)return this.error=t[i].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"reg":n=new RegExp(t[i].checkRule);if(!n.test(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"in":if(-1==t[i].checkRule.indexOf(e[t[i].name]))return this.error=t[i].errorMsg,!1;break;case"notnull":if(null==e[t[i].name]||e[t[i].name].length<1)return this.error=t[i].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},f381:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"login-box pages"},[i("v-uni-view",{staticClass:"page-main"},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"phone","data-key":"phone",placeholder:"company"==e.UserType?"用户名":"用户名/邮箱/手机号"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"with-fun"},[i("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"password","data-key":"password",placeholder:"登录密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1)],1),i("v-uni-view",{staticClass:"uni-btn-block"},[i("v-uni-view",{staticClass:"btns btns-full",on:{click:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[e._v("登录")]),i("v-uni-view",{staticClass:"btns btn-back",on:{click:function(t){t=e.$handleEvent(t),e.$store.dispatch("goback","/pages/index/index")}}},[e._v("返回")])],1)],1),i("v-uni-view",{staticClass:"user-login-more"},[i("v-uni-view",{staticClass:"more-btn",on:{click:function(t){t=e.$handleEvent(t),e.toRegister("")}}},[e._v(e._s("company"==e.UserType?"企业注册":"手机快速注册"))]),i("v-uni-view",{staticClass:"more-btn",on:{click:function(t){t=e.$handleEvent(t),e.toRegister("forgetpw")}}},[e._v("忘记密码")])],1)],1),i("uni-popup",{attrs:{show:"company-reg"===e.poptype,position:"middle",mode:"fixed",width:"70"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.togglePopup("")}}},[i("v-uni-view",{staticClass:"train-show-modal-box"},[i("v-uni-view",{staticClass:"train-show-modal-info"},[i("v-uni-view",{staticClass:"train-show-modal-row"},[e._v("请与我们联系")]),i("v-uni-view",{staticClass:"train-show-modal-row"},[e._v(e._s("company-reg"==e.popTxtType?"开通企业专属账号":"寻回密码"))])],1),i("v-uni-view",{staticClass:"btns btns-full btns-big",on:{click:function(t){t=e.$handleEvent(t),e.$store.dispatch("makePhoneCall")}}},[e._v("拨打电话")])],1)],1),i("loading")],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},f38a:function(e,t,i){"use strict";i.r(t);var n=i("8768"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},faa7:function(e,t,i){var n=i("4505");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("5881e365",n,!0,{sourceMap:!1,shadowMode:!1})}}]);