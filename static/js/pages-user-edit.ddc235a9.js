(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-edit"],{"08fe":function(e,t,n){var i=n("c520");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("261e8552",i,!0,{sourceMap:!1,shadowMode:!1})},1918:function(e,t,n){"use strict";n.r(t);var i=n("c56a"),a=n("e7e8");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("4482");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"0ef29eeb",null);t["default"]=s.exports},"23e5":function(e,t,n){"use strict";n.r(t);var i=n("a028"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"25b7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(e){e!==this.currentIndex&&(this.currentIndex=e)}},computed:{wrapStyle:function(){var e="";switch(this.styleType){case"text":e="border:0;";break;default:e="border-color: ".concat(this.activeColor);break}return e},itemStyle:function(){var e="";switch(this.styleType){case"text":e="color:#000;border-left:0;";break;default:e="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return e},activeStyle:function(){var e="";switch(this.styleType){case"text":e="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:e="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return e}},methods:{onClick:function(e){this.currentIndex!==e&&(this.currentIndex=e,this.$emit("clickItem",e))}}};t.default=i},4482:function(e,t,n){"use strict";var i=n("6b2c"),a=n.n(i);a.a},5567:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-button",style:"position:"+e.isFixed},[n("v-uni-view",{staticClass:"fbtn-main"},["show"==e.gobackShow?n("v-uni-view",{staticClass:"fbtns btn-goback",class:e.btnType,on:{click:function(t){t=e.$handleEvent(t),e.$store.dispatch("goback")}}},[e._v("返回")]):e._e(),e._t("default")],2)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},6405:function(e,t,n){"use strict";n.r(t);var i=n("db17"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"64a1":function(e,t,n){"use strict";e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var i=new RegExp("^.{"+t[n].checkRule+"}$");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":i=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":i=/^-?[1-9][0-9]?$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":i=/^-?[0-9][0-9]?.+[0-9]+$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;a=t[n].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[t[n].name]>a[1]||e[t[n].name]<a[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":i=/^1[0-9]{10,10}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":i=/^[0-9]{6}$/;if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":i=new RegExp(t[n].checkRule);if(!i.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},"6b1d":function(e,t,n){"use strict";n.r(t);var i=n("5567"),a=n("23e5");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"79ac0b39",null);t["default"]=s.exports},"6b2c":function(e,t,n){var i=n("cfe4");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("60bf2bd2",i,!0,{sourceMap:!1,shadowMode:!1})},"816e":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"user-center"},[n("v-uni-view",{staticClass:"page-main"},[n("v-uni-view",{staticClass:"edit-segment"},[n("uni-segmented-control",{attrs:{current:e.current,values:e.segmented,styleType:"text",activeColor:"#008CEE"},on:{clickItem:function(t){t=e.$handleEvent(t),e.onClicksegmented(t)}}})],1),n("v-uni-view",{staticClass:"unit-content"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.current,expression:"current === 0"}]},[n("v-uni-view",{staticClass:"form-box"},[n("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.bindCompany(t)}}},[""==e.companyStatu||"2"==e.companyStatu?n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("企业代码：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"companyCode","data-key":"companyCode",placeholder:"请输入企业代码",value:e.formData.companyCode},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1):e._e(),e.companyName?n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"uni-title-edit with-full ",class:"0"==e.companyStatu?"text-align-center":""},[e._v("所属企业："+e._s(e.companyName)),"1"!=e.companyStatu?n("v-uni-text",{staticClass:"txt-gray"},[e._v("["+e._s("0"==e.companyStatu?"审核中":"审核未通过")+"]")]):e._e()],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-btn-block"},[e.companyName?n("v-uni-view",{staticClass:"btns",class:"0"==e.companyStatu?"btns-big":"",on:{click:function(t){t=e.$handleEvent(t),e.$store.dispatch("makePhoneCall",e.companyPhone)}}},[e._v("联系企业")]):e._e(),"0"!=e.companyStatu?n("v-uni-view",{staticClass:"btns btns-full",class:""==e.companyName?"btns-big":"",on:{click:function(t){t=e.$handleEvent(t),e.bindCompany("1"==e.companyStatu?"unbind":"")}}},[e._v(e._s("1"!=e.companyStatu?"绑定":"解绑"))]):e._e()],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}]},[n("v-uni-view",{staticClass:"form-box"},[n("v-uni-form",[n("v-uni-view",{staticClass:"edit-block"},[n("v-uni-view",{staticClass:"edit-block-title"},[n("v-uni-view",{staticClass:"block-title"},[e._v("基本信息修改")])],1),n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("头像：")]),n("v-uni-view",{staticClass:"uni-uploader"},[n("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,i){return[n("v-uni-view",{key:i+"_0",staticClass:"uni-uploader__file"},[n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t.tempFilePaths?t.tempFilePaths:e.sourceUrl+t,"data-src":t},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}}),n("v-uni-progress",{directives:[{name:"show",rawName:"v-show",value:100!=e.progress&&t.tempFilePaths,expression:"progress!=100&&image.tempFilePaths"}],attrs:{percent:e.progress,active:"","stroke-width":"2"}})],1)]}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<=0,expression:"imageList.length<=0"}],staticClass:"uni-uploader__input-box"},[n("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})],1)],2)],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("手机号：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"phone","data-key":"phone",placeholder:"请输入手机号",value:e.formData.phone},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),e.oldPhone!=e.formData.phone?[n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("验证码：")]),n("v-uni-view",{staticClass:"uni-form-item uni-form-item-edit flex-between uni-row "},[n("v-uni-view",{staticClass:"input-block"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"code","data-key":"code",placeholder:"手机号验证码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"get-code get-code-edit",class:e.btnLoading,on:{click:function(t){t=e.$handleEvent(t),e.getCode(t)}}},[e._v(e._s(e.getCodeTxt))])],1)],1)]:e._e(),n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("姓名：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"name","data-key":"name",placeholder:"请输入真实姓名",value:e.formData.name},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1)],2),n("v-uni-view",{staticClass:"edit-block"},[n("v-uni-view",{staticClass:"edit-block-title"},[n("v-uni-view",{staticClass:"block-title"},[e._v("密码修改")]),n("v-uni-view",{staticClass:"block-edit",on:{click:function(t){t=e.$handleEvent(t),e.blockShow("password")}}},[n("v-uni-view",{staticClass:"edit-name"},[e._v("编辑")]),n("uni-icon",{attrs:{type:"bianji",size:18,color:"#008CEE"}})],1)],1),"password"===e.editBlock?[n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("原始密码：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"password","data-key":"password",placeholder:"原始密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("新密码：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"new_password","data-key":"new_password",placeholder:"新密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-row"},[n("v-uni-view",{staticClass:"uni-title-edit"},[e._v("确认密码：")]),n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"new_password_cfn","data-key":"new_password_cfn",placeholder:"确认新密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1)]:e._e()],2),n("v-uni-view",{staticClass:"uni-btn-block"},[n("v-uni-view",{staticClass:"btns btns-full btns-big",class:e.loading?"btns-loading":"",on:{click:function(t){t=e.$handleEvent(t),e.getDatas("basicInfo")}}},[e._v("确认修改")])],1)],1)],1)],1)],1)],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},a028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};t.default=i},a34a:function(e,t,n){e.exports=n("bbdd")},bbdd:function(e,t,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,r=a&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,e.exports=n("96cf"),a)i.regeneratorRuntime=r;else try{delete i.regeneratorRuntime}catch(o){i.regeneratorRuntime=void 0}},c520:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".train-input[data-v-3d7abfe0]{background:#f4f4f4;border-radius:%?5?%;border:1px solid #e0e0e0}.get-code-left[data-v-3d7abfe0]{width:60%}.get-code[data-v-3d7abfe0]{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#008cee;border-radius:%?5?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:38%}.user-login-more[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#008cee;font-size:%?32?%}.user-center[data-v-3d7abfe0]{width:93%;padding:%?30?% 3%}.user-center-full[data-v-3d7abfe0]{width:100%;padding:0}.user-block[data-v-3d7abfe0]{padding-bottom:%?40?%}.border-block[data-v-3d7abfe0]{padding:%?30?% %?20?%;border-bottom:%?20?% solid #f4f4f4}.border-block[data-v-3d7abfe0]:last-child{border-bottom:0}\r\n\r\n/* \r\n.user-head {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-start;\r\n\talign-content: center;\r\n\tflex-direction: row;\r\n\tpadding-bottom: 20upx;\r\n}\r\n\r\n.portrait {\r\n\twidth: 125upx;\r\n\theight: 125upx;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.user-portrait {\r\n\twidth: 100%;\r\n\theight: 100%\r\n}\r\n\r\n.user-infos {\r\n\tflex: 1 1 0%;\r\n\tpadding: 0 20upx;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.user-name {\r\n\tline-height: 2;\r\n\twidth: 100%;\r\n}\r\n\r\n.logout {\r\n\tfont-weight: 200;\r\n\tpadding: 0 10upx;\r\n\tfont-size: 26upx;\r\n}\r\n\r\n.user-more {\r\n\tborder: 2upx solid #929292;\r\n\tborder-radius: 30upx;\r\n\tcolor: #929292;\r\n\tpadding: 0 20upx;\r\n\tmargin-right: 20upx;\r\n}\r\n\r\n.job {\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.user-edit {\r\n\twidth: 60upx;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-content: flex-start;\r\n\talign-items: flex-start;\r\n\tflex-direction: column-reverse;\r\n\theight: 100%;\r\n}\r\n\r\n.user-class-info {\r\n\tborder: 2upx solid #E0E0E0;\r\n\tborder-radius: 8upx;\r\n\tbox-shadow: 0 0 10upx 3upx #E0E0E0;\r\n}\r\n\r\n.user-my-class {\r\n\tpadding: 20upx 0;\r\n\tdisplay: flex;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.my-class-block {\r\n\theight: 150upx;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\twidth: 33%;\r\n\tborder-right: 2upx solid #E0E0E0;\r\n}\r\n\r\n.my-class-block:last-child {\r\n\tborder-right: none;\r\n}\r\n\r\n.class-overview {\r\n\tfont-size: 24upx;\r\n}\r\n\r\n.class-count {\r\n\tfont-size: 52upx;\r\n\tcolor: #008CEE;\r\n}\r\n\r\n.class-state-green {\r\n\tcolor: #3BC1B0;\r\n}\r\n\r\n.class-state-red {\r\n\tcolor: #EE6858;\r\n}\r\n */.my-class-head[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-tip[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-icon[data-v-3d7abfe0]{background:-webkit-gradient(linear,left top,left bottom,from(#48afbe),to(#58d3be));background:-o-linear-gradient(#48afbe,#58d3be);background:linear-gradient(#48afbe,#58d3be);width:%?50?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden;margin-right:%?10?%}.class-icon-qy[data-v-3d7abfe0]{background:-webkit-gradient(linear,left top,left bottom,from(#66d3f4),to(#4697e9));background:-o-linear-gradient(#66d3f4,#4697e9);background:linear-gradient(#66d3f4,#4697e9)}.class-more[data-v-3d7abfe0]{font-size:%?28?%;color:#929292}.class-list-row[data-v-3d7abfe0]{border-bottom:none}.class-list-left[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;height:%?134?%}.class-progress[data-v-3d7abfe0]{width:95%}.progress-box[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?50?%}.percent[data-v-3d7abfe0]{text-align:right}.edit-segment[data-v-3d7abfe0]{margin-bottom:%?40?%;line-height:2;font-size:%?36?%;border-bottom:1px solid #d1d1d1}.uni-form-item[data-v-3d7abfe0]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-title-edit[data-v-3d7abfe0]{font-size:%?32?%;width:25%}.with-full[data-v-3d7abfe0]{width:100%}.text-align-center[data-v-3d7abfe0]{text-align:center}.uni-form-item-edit[data-v-3d7abfe0]{width:auto;overflow:hidden}.get-code-edit[data-v-3d7abfe0]{margin-left:%?10?%;height:100%;padding:%?12?% 0}.edit-block[data-v-3d7abfe0]{padding-bottom:%?25?%}.edit-block-title[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#333;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #d1d1d1;padding-bottom:%?15?%;margin-bottom:%?15?%}.block-title[data-v-3d7abfe0]{font-size:%?32?%}.block-edit[data-v-3d7abfe0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?26?%;color:#929292;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.edit-name[data-v-3d7abfe0]{font-size:%?28?%;padding-right:%?20?%}",""])},c56a:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"segmented-control",class:e.styleType,style:e.wrapStyle},e._l(e.values,function(t,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:e.styleType,style:i===e.currentIndex?e.activeStyle:e.itemStyle,on:{click:function(t){t=e.$handleEvent(t),e.onClick(i)}}},[e._v(e._s(t))])}),1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},cfe4:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".segmented-control[data-v-0ef29eeb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?32?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden}.segmented-control.button[data-v-0ef29eeb]{border:%?2?% solid}.segmented-control.text[data-v-0ef29eeb]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-0ef29eeb]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box}.segmented-control-item.button[data-v-0ef29eeb]{border-left:%?1?% solid}.segmented-control-item.text[data-v-0ef29eeb]{border-left:0}.segmented-control-item[data-v-0ef29eeb]:first-child{border-left-width:0}",""])},d91a:function(e,t,n){"use strict";n.r(t);var i=n("816e"),a=n("6405");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("ef25");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"3d7abfe0",null);t["default"]=s.exports},db17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a")),a=o(n("6b1d")),r=o(n("1918"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a,r,o){try{var s=e[r](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(i,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function o(e){s(r,i,a,o,c,"next",e)}function c(e){s(r,i,a,o,c,"throw",e)}o(void 0)})}}var l=n("64a1"),u={data:function(){return{loading:!1,current:0,btnLoading:"",seconds:60,getCodeTxt:"获取验证码",segmented:["绑定企业","修改个人信息"],editBlock:"basicInfo",companyName:"",companyPhone:"",companyStatu:"",imageList:[],progress:"0",oldPhone:"",formData:{photo:"",phone:"",code:"",name:"",password:"",new_password:"",new_password_cfn:"",companyCode:""}}},onLoad:function(e){},onShow:function(){var e=this;e.$store.dispatch("cheack_user");var t=e.$store.state.user.userInfo;e.imageList=t.photo?["".concat(t.photo)]:[],e.setPageData(t)},components:{fixButton:a.default,uniSegmentedControl:r.default},methods:{onClicksegmented:function(e){this.current!==e&&(this.current=e)},blockShow:function(e){this.editBlock=e},bindCompany:function(e){console.log(e);var t=this;if("unbind"!==e){var n=t.formData;console.log(n);var i=[{name:"companyCode",checkType:"notnull",checkRule:"",errorMsg:"企业代码不能为空"}],a=l.check(n,i);a?uni.showModal({title:"确认绑定企业",content:"企业代码: ".concat(n.companyCode),confirmText:"确定",cancelText:"取消",success:function(e){e.confirm?t.getDatas("bindCompany"):e.cancel}}):(uni.showToast({title:l.error,icon:"none"}),t.loading=!1)}else t.getDatas(e)},getDatas:function(e){var t=this;if(1!=t.loading){if("basicInfo"==e){var n=t.formData,i=[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"请输入真实姓名"}];if(t.oldPhone!=n.phone){var a={name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},r={name:"code",checkType:"notnull",checkRule:"",errorMsg:"验证码不能为空"};i.push(a),i.push(r)}if(""!=n.new_password||""!=n.password){var o={name:"password",checkType:"notnull",checkRule:"",errorMsg:"原始密码不能为空"},s={name:"new_password",checkType:"same",checkRule:n.new_password,errorMsg:"新密码不能为空"},c={name:"new_password_cfn",checkType:"same",checkRule:n.new_password,errorMsg:"新密码不一致，请确认"};i.push(o),i.push(s),i.push(c)}var u=l.check(n,i);if(!u)return uni.showToast({title:l.error,icon:"none"}),void(t.loading=!1)}t.loading=!0;var d={inter:"bindCompany"==e||"unbind"==e?"enterprise":"editInfo",method:"bindCompany"==e||"unbind"==e?"POST":"PUT",header:{token:t.$store.state.user.token||""}};"bindCompany"==e?d["data"]={code:t.formData.companyCode}:"basicInfo"==e&&(d["data"]={photo:n.photo,name:n.name},t.oldPhone!=n.phone&&(d["data"]["phone"]=n.phone,d["data"]["code"]=n.code),n.new_password&&(d["data"]["password"]=n.password,d["data"]["new_password"]=n.new_password,d["data"]["new_password_cfn"]=n.new_password_cfn)),console.log(d),d["fun"]=function(i){if(t.loading=!1,i.success){if("bindCompany"==e){var a=i.data;console.log(a),uni.getStorage({key:"user",success:function(e){var n=e.data;n["userInfo"]["eName"]=a.eName,n["userInfo"]["ePhone"]=a.ePhone,n["userInfo"]["eStatus"]=a.eStatus,t.setPageData(n["userInfo"]),uni.setStorage({key:"user",data:n})},fail:function(){}}),uni.showModal({title:"申请成功",content:"等待管理员审核",showCancel:!1,confirmText:"确定"})}else if("basicInfo"==e){var r=i.data;console.log(r),uni.getStorage({key:"user",success:function(e){var i=e.data;i["userInfo"]["phone"]=n.phone||i["userInfo"]["phone"],i["userInfo"]["name"]=n.name||i["userInfo"]["name"],t.setPageData(i["userInfo"]),uni.setStorage({key:"user",data:i})},fail:function(){}}),uni.showToast({title:"信息修改成功",icon:"success",duration:1500}),setTimeout(function(){uni.redirectTo({url:"/pages/user/index"})},1500)}}else uni.showToast({title:i.msg,icon:"none",duration:1500})},t.$store.dispatch("getData",d)}},setPageData:function(e){var t=this;t.companyName=e.eName?e.eName:"",t.companyStatu=e.eStatus?e.eStatus:"",t.companyPhone=e.ePhone?e.ePhone:"",t.formData.companyCode=e.code?e.code:"",t.formData.phone=e.phone,t.oldPhone=e.phone,t.formData.name=e.name,t.formData.photo=e.photo},chooseImage:function(){var e=c(i.default.mark(function e(){var t;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,uni.chooseImage({count:1,success:function(e){console.log(e),t.imageList=[{tempFilePaths:e.tempFilePaths[0]}];e.tempFiles;t.uploadFile(e.tempFiles[0])}});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),uploadFile:function(e){var t=this,n=this,a=n.$store.state.interface,r=a.apiurl+a.addr.photo;console.log(r);var o=uni.uploadFile({url:a.apiurl+a.addr.photo,filePath:e["path"],name:"photo",header:{token:n.$store.state.user.token||""},formData:{},success:function(){var e=c(i.default.mark(function e(t){var a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:200==t.statusCode&&(a=JSON.parse(t.data),console.log(a),a.success?(n.formData.photo=a.data,uni.getStorage({key:"user",success:function(e){var t=e.data;t["userInfo"]["photo"]=a.data,n.setPageData(t["userInfo"]),uni.setStorage({key:"user",data:t})},fail:function(){}})):(uni.showLoading({title:"上传失败!"}),n.imageList=[],setTimeout(function(){uni.hideLoading()},2e3)),uni.hideLoading());case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),fail:function(){var e=c(i.default.mark(function e(t){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:uni.showLoading({title:"上传失败!"}),n.imageList=[],setTimeout(function(){uni.hideLoading()},2e3);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()});o.onProgressUpdate(function(){var e=c(i.default.mark(function e(a){var r,o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=0,o=n.imageList.length;r<o;r++)t.progress=a.progress;case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},getCode:function(){var e=this;if(!e.btnLoading){var t=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],n=e.formData,i=l.check(n,t);if(i){uni.showToast({title:"验证码已发送",icon:"none"}),e.btnLoading="btn-loading";var a=setInterval(function(){if(e.seconds--,e.seconds<0)return e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",void clearInterval(a);e.getCodeTxt="".concat(e.seconds," 秒后重试")},1e3),r={inter:"sendSms",parm:"?phone=".concat(n.phone),fun:function(t){t.success||(uni.showToast({title:t.msg,icon:"none"}),e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",clearInterval(a))}};e.$store.dispatch("getData",r)}else uni.showToast({title:l.error,icon:"none"})}},setData:function(e){var t=this;t.formData["".concat(e.currentTarget.dataset.key)]=e.detail.value,"phone"===e.currentTarget.dataset.key&&e.detail.value==t.oldPhone&&(t.formData.code="")}}};t.default=u},e7e8:function(e,t,n){"use strict";n.r(t);var i=n("25b7"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},ef25:function(e,t,n){"use strict";var i=n("08fe"),a=n.n(i);a.a}}]);