(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-register"],{"1a60":function(e,t,n){"use strict";n.r(t);var i=n("d58c"),a=n("9216");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("3ac7");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"d76ca6b0",null);t["default"]=o.exports},"3ac7":function(e,t,n){"use strict";var i=n("7e48"),a=n.n(i);a.a},"64a1":function(e,t,n){"use strict";e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var i=new RegExp("^.{"+t[n].checkRule+"}$");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":i=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":i=/^-?[1-9][0-9]?$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":i=/^-?[0-9][0-9]?.+[0-9]+$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":i=/^1[0-9]{10,10}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":i=/^[0-9]{6}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":i=new RegExp(t[n].checkRule);if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},"653a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".train-input[data-v-d76ca6b0]{background:#f4f4f4;border-radius:%?5?%;border:1px solid #e0e0e0}.get-code-left[data-v-d76ca6b0]{width:60%}.get-code[data-v-d76ca6b0]{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#008cee;border-radius:%?5?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:38%}.user-login-more[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#008cee;font-size:%?32?%}.user-center[data-v-d76ca6b0]{width:93%;padding:%?30?% 3%}.user-center-full[data-v-d76ca6b0]{width:100%;padding:0}.user-block[data-v-d76ca6b0]{padding-bottom:%?40?%}.border-block[data-v-d76ca6b0]{padding:%?30?% %?20?%;border-bottom:%?20?% solid #f4f4f4}.border-block[data-v-d76ca6b0]:last-child{border-bottom:0}.user-head[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-bottom:%?20?%}.portrait[data-v-d76ca6b0]{width:%?125?%;height:%?125?%;border-radius:50%;overflow:hidden}.user-portrait[data-v-d76ca6b0]{width:100%;height:100%}.user-infos[data-v-d76ca6b0]{-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.user-name[data-v-d76ca6b0]{line-height:2;width:100%}.logout[data-v-d76ca6b0]{font-weight:200;padding:0 %?10?%;font-size:%?26?%}.user-more[data-v-d76ca6b0]{border:%?2?% solid #929292;border-radius:%?30?%;color:#929292;padding:0 %?20?%;margin-right:%?20?%}.job[data-v-d76ca6b0]{border:none;border-radius:0;padding:0}.user-edit[data-v-d76ca6b0]{width:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;height:100%}.user-class-info[data-v-d76ca6b0]{border:%?2?% solid #e0e0e0;border-radius:%?8?%;-webkit-box-shadow:0 0 %?10?% %?3?% #e0e0e0;box-shadow:0 0 %?10?% %?3?% #e0e0e0}.user-my-class[data-v-d76ca6b0]{padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.my-class-block[data-v-d76ca6b0]{height:%?150?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:33%;border-right:%?2?% solid #e0e0e0}.my-class-block[data-v-d76ca6b0]:last-child{border-right:none}.class-overview[data-v-d76ca6b0]{font-size:%?24?%}.class-count[data-v-d76ca6b0]{font-size:%?52?%;color:#008cee}.class-state-green[data-v-d76ca6b0]{color:#3bc1b0}.class-state-red[data-v-d76ca6b0]{color:#ee6858}.my-class-head[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-tip[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-icon[data-v-d76ca6b0]{background:-webkit-gradient(linear,left top,left bottom,from(#48afbe),to(#58d3be));background:-o-linear-gradient(#48afbe,#58d3be);background:linear-gradient(#48afbe,#58d3be);width:%?50?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden;margin-right:%?10?%}.class-more[data-v-d76ca6b0]{font-size:%?28?%;color:#929292}.class-list-row[data-v-d76ca6b0]{border-bottom:none}.class-list-left[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;height:%?134?%}.class-progress[data-v-d76ca6b0]{width:95%}.progress-box[data-v-d76ca6b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?50?%}.percent[data-v-d76ca6b0]{text-align:right}",""])},"77bb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("64a1"),a={data:function(){return{regType:"",loading:!1,current:0,getCodeTxt:"获取验证码",seconds:60,btnLoading:"",checkCode:"",formData:{phone:"",code:"",name:"",password:"",cfn_password:""}}},onLoad:function(e){var t=this,n=e.type;t.regType=n||"register",uni.setNavigationBarTitle({title:"register"===t.regType?"个人注册":"寻回密码"})},onShow:function(){},computed:{},components:{},methods:{formSubmit:function(e){var t=this;if(1!=t.loading){var n=t.formData;t.loading=!0,console.log(n);var a=[{name:"password",checkType:"notnull",checkRule:"",errorMsg:"密码不能为空"},{name:"cfn_password",checkType:"same",checkRule:n.password,errorMsg:"密码不一致，请确认"}],r=i.check(n,a);if(r){var s={inter:"register",data:n,method:"POST",fun:function(e){if(console.log(e),t.loading=!1,e.success){var n="forgetpw"===t.regType?"修改成功，请登录":"注册成功";uni.showToast({title:n,icon:"none",duration:1500}),setTimeout(function(){uni.redirectTo({url:"/pages/user/login?type=user"})},1500)}else uni.showToast({title:e.msg,icon:"none"})}};"forgetpw"===t.regType&&(s["inter"]="reset",s["method"]="PUT"),t.$store.dispatch("getData",s)}else uni.showToast({title:i.error,icon:"none"}),t.loading=!1}},toRegister:function(){var e=this;"company"==e.UserType||uni.navigateTo({url:"/pages/user/register"})},regNext:function(e){var t=this,n=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},{name:"code",checkType:"notnull",checkRule:"",errorMsg:"验证码不能为空"}];if("register"===t.regType){var a={name:"name",checkType:"notnull",checkRule:"",errorMsg:"请输入真实姓名"};n.push(a)}var r=t.formData,s=i.check(r,n);s?t.current=e:(uni.showToast({title:i.error,icon:"none"}),t.loading=!1)},getCode:function(){var e=this;if(!e.btnLoading){var t=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],n=e.formData,a=i.check(n,t);if(a){uni.showToast({title:"验证码已发送",icon:"none"}),e.btnLoading="btn-loading";var r=setInterval(function(){if(e.seconds--,e.seconds<0)return e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",void clearInterval(r);e.getCodeTxt="".concat(e.seconds," 秒后重试")},1e3),s="sendRegistSms";"forgetpw"===e.regType&&(s="sendSms");var o={inter:s,parm:"?phone=".concat(n.phone),fun:function(t){t.success||(uni.showToast({title:t.msg,icon:"none"}),e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",clearInterval(r))}};e.$store.dispatch("getData",o)}else uni.showToast({title:i.error,icon:"none"})}},setData:function(e){var t=this;t.formData["".concat(e.currentTarget.dataset.key)]=e.detail.value}}};t.default=a},"7e48":function(e,t,n){var i=n("653a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0bb94520",i,!0,{sourceMap:!1,shadowMode:!1})},9216:function(e,t,n){"use strict";n.r(t);var i=n("77bb"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},d58c:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login-box pages"},[n("v-uni-view",{staticClass:"page-main"},[n("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.current,expression:"current === 0"}]},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"phone","data-key":"phone",placeholder:"请输入手机号"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item flex-between uni-row"},[n("v-uni-view",{staticClass:"input-block get-code-left"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"code","data-key":"code",placeholder:"验证码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"get-code",class:e.btnLoading,on:{click:function(t){t=e.$handleEvent(t),e.getCode(t)}}},[e._v(e._s(e.getCodeTxt))])],1),"register"===e.regType?n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"name","data-key":"name",placeholder:"请输入真实姓名"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1):e._e(),n("v-uni-view",{staticClass:"uni-btn-block"},[n("v-uni-view",{staticClass:"btns btns-full btns-big",on:{click:function(t){t=e.$handleEvent(t),e.regNext(1)}}},[e._v("下一步")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}]},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"password","data-key":"password",placeholder:"输入密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"cfn_password","data-key":"cfn_password",placeholder:"再次确认"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-btn-block"},[n("v-uni-view",{staticClass:"btns btn-back",on:{click:function(t){t=e.$handleEvent(t),e.regNext(0)}}},[e._v("返回")]),n("v-uni-view",{staticClass:"btns btns-full",on:{click:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[e._v("确认提交")])],1)],1)],1)],1),n("loading")],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}}]);