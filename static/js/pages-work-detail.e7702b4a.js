(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-detail"],{1269:function(e,t,a){"use strict";a.r(t);var i=a("98b5"),s=a("826b");for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);a("9f62");var n=a("2877"),r=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,"05f0b3ce",null);t["default"]=r.exports},"826b":function(e,t,a){"use strict";a.r(t);var i=a("d7a3"),s=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=s.a},"98b5":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[e.$store.state.user.token?[a("v-uni-view",{staticClass:"pages page-main"},[a("v-uni-view",{staticClass:"work-dtl-head"},[a("v-uni-view",{staticClass:"work-head-main"},[a("v-uni-view",{staticClass:"work-head-list"},[a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-block-title work-dtl-name"},[e._v(e._s(e.datas.name)+" | "+e._s(e.datas.type))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-require"},[e._v(e._s(e.datas.province?e.datas.province+" | ":"")+e._s(e.datas.city?e.datas.city+" | ":"")+e._s(e.datas.age_min)+"-"+e._s(e.datas.age_max)+"年\n\t\t\t\t\t\t\t\t| "+e._s(e.datas.education?e.datas.education:"无学历要求"))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-salary"},[e._v(e._s(e.datas.salary))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-tag-list"},[e._l(e.datas.tags,function(t,i){return[a("v-uni-view",{key:i+"_0",staticClass:"work-tag"},[e._v(e._s(t))])]})],2)],1)],1),a("v-uni-view",{staticClass:"work-head-list"},[a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-block-title"},[a("uni-icon",{attrs:{type:"weizhi",size:"20",color:"#898989"}}),e._v(e._s(e.datas.province?e.datas.province+" - ":"")+e._s(e.datas.city?e.datas.city:""))],1)],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-address"},[e._v(e._s(e.datas.address?e.datas.address:""))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"work-detail-overview"},[a("v-uni-view",{staticClass:"work-block-title title-block"},[e._v("岗位职责")]),a("v-uni-view",{staticClass:"work-content"},[a("v-uni-rich-text",{attrs:{nodes:e.datas.responsibilities}})],1)],1),a("v-uni-view",{staticClass:"work-detail-overview"},[a("v-uni-view",{staticClass:"work-block-title title-block"},[e._v("任职资格")]),a("v-uni-view",{staticClass:"work-content"},[a("v-uni-rich-text",{attrs:{nodes:e.datas.qualifications}})],1)],1),a("fix-button",[e.datas.needExam?[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(t){t=e.$handleEvent(t),e.workExam(t)}}},[e._v("求职前小测试")])]:[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:e.disabled?"btn-disabled":"",on:{click:function(t){t=e.$handleEvent(t),e.showResume(t)}}},[e._v(e._s(1==e.datas.resume_article?"简历已投递":"发送简历"))])]],2)],1),a("uni-popup",{attrs:{show:"showReume"===e.poptype,position:"middle",mode:"posfixed",width:"80"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.togglePopup("")}}},[a("v-uni-view",{staticClass:"train-show-modal-box"},[a("user-resume",{attrs:{editBlock:e.editBlock,isSendResume:"true",temp:e.temp,datas:e.resume_temp},on:{switchResume:function(t){t=e.$handleEvent(t),e.switchResume(t)},sendResume:function(t){t=e.$handleEvent(t),e.sendResume(t)}}})],1)],1)]:[a("login-tip"),a("tab-bar")]],2)},s=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s})},"9e8f":function(e,t,a){var i=a("f9b1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("7625afeb",i,!0,{sourceMap:!1,shadowMode:!1})},"9f62":function(e,t,a){"use strict";var i=a("9e8f"),s=a.n(i);s.a},d7a3:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7f7f"),a("a481"),a("28a5");var s=i(a("6b1d")),o=i(a("ac84")),n=i(a("20ca")),r=a("64a1"),c={data:function(){return{article_id:"",__token:"",datas:[],saveData:{},temp:{},resume_temp:{},poptype:"",editBlock:"basic",hasResume:!1,disabled:!1}},onLoad:function(e){var t=this;t.article_id=e.id},onShow:function(){var e=this;e.$store.dispatch("cheack_user"),e.__token=e.$store.state.user.token,e.getDatas(),e.getResume()},onReady:function(){},components:{fixButton:s.default,uniPopup:o.default,userResume:n.default},onPullDownRefresh:function(){var e=this;e.getDatas()},computed:{},methods:{getDatas:function(){var e=this,t={inter:"support",parm:"?article_id=".concat(e.article_id),header:{token:e.__token},fun:function(t){if(uni.stopPullDownRefresh(),t.success){var a=t.data;a["tags"]=a["tag"].split("，"),a["responsibilities"]=a["responsibilities"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),a["qualifications"]=a["qualifications"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),e.datas=a,e.disabled=!!a.resume_article,uni.setNavigationBarTitle({title:t.data.name})}}};e.$store.dispatch("getData",t)},getResume:function(){var e=this,t={inter:"resume",header:{token:e.__token},fun:function(t){if(t.success){var a=t.data.info;a&&(a.company&&a.company.map(function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]}),a.school&&a.school.map(function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]}),a.project&&a.project.map(function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]}),e.temp=a,e.resume_temp=a,e.hasResume=!0)}else e.hasResume=!1}};e.$store.dispatch("getData",t)},workExam:function(){var e=this;uni.navigateTo({url:"/pages/train/test?type=workExam&id=".concat(e.article_id)})},showResume:function(){var e=this;e.disabled||(e.poptype="showReume")},switchResume:function(e){var t=this;if("next"==e){switch(t.editBlock){case"basic":var a=[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"姓名不能为空"},{name:"education",checkType:"notnull",checkRule:"",errorMsg:"请选择学历"},{name:"age_work",checkType:"notnull",checkRule:"",errorMsg:"请选择工作年限"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],i=r.check(t.temp,a);if(!i)return void uni.showToast({title:r.error,icon:"none"});t.saveData=t.temp,t.saveData["about_self"]=t.resume_temp&&t.resume_temp.about_self?t.resume_temp.about_self:"",t.editBlock="company",t.temp=t.resume_temp&&t.resume_temp.company?t.resume_temp.company[0]:{};break;case"company":t.saveData["company"]=[t.temp],t.temp=t.resume_temp&&t.resume_temp.school?t.resume_temp.school[0]:{},t.editBlock="school";break;case"school":t.saveData["school"]=[t.temp],t.temp=t.resume_temp&&t.resume_temp.project?t.resume_temp.project[0]:{},t.editBlock="project";break;case"project":t.saveData["project"]=[t.temp];var s=t.resume_temp&&t.resume_temp.about_self?t.resume_temp.about_self:"";t.temp={about_self:s},t.editBlock="about_self";break;default:break}console.log(t.temp)}else if("prev"==e)switch(t.editBlock){case"about_self":t.editBlock="project",t.temp=t.resume_temp&&t.resume_temp.project?t.resume_temp.project[0]:{};break;case"project":t.editBlock="school",t.temp=t.resume_temp&&t.resume_temp.school?t.resume_temp.school[0]:{};break;case"school":t.editBlock="company",t.temp=t.resume_temp&&t.resume_temp.company?t.resume_temp.company[0]:{};break;case"company":t.editBlock="basic",t.temp=t.resume_temp;break;default:break}},sendResume:function(){var e=this;if(e.hasResume){e.saveData["about_self"]=e.temp.about_self,e.saveDatas(e.saveData);var t={inter:"resume",method:"POST",data:{article_id:e.article_id},header:{token:e.__token},fun:function(t){t.success?(e.poptype="",e.disabled=!0,uni.showToast({title:"简历已投递",icon:"success"})):uni.showToast({title:"简历发送失败！请重试",icon:"none"})}};e.$store.dispatch("getData",t)}else uni.showToast({title:"请完善简历信息",icon:"none"})},saveDatas:function(e){var t=this,a={inter:"resume",method:"PUT",data:e,header:{token:t.__token,"Content-Type":"application/json"}};console.log(a),a["fun"]=function(e){e.success&&t.getResume()},t.$store.dispatch("getData",a)},togglePopup:function(e){var t=this;t.poptype=e}}};t.default=c},f9b1:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".flex-top-box[data-v-05f0b3ce]{position:relative}.flex-filter[data-v-05f0b3ce]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #d1d1d1;position:fixed;z-index:998;width:100%;left:0;height:44px}.filter-block[data-v-05f0b3ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.filter-block[data-v-05f0b3ce]:first-child{border-right:1px solid #d1d1d1}.filter-more-btn[data-v-05f0b3ce]{-webkit-box-flex:0;-webkit-flex:0;-ms-flex:0;flex:0;width:10%}.filter-more-box[data-v-05f0b3ce]{padding:%?40?% %?20?%}.filter-more[data-v-05f0b3ce]{padding-bottom:%?15?%;margin-bottom:%?15?%;border-bottom:1px solid #eee}.filter-more[data-v-05f0b3ce]:last-child{border-bottom:0}.filter-title[data-v-05f0b3ce]{font-size:%?32?%;padding-bottom:%?10?%;color:#333}.filter-vals[data-v-05f0b3ce]{color:#666}.filter-btns[data-v-05f0b3ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.frbtns[data-v-05f0b3ce]{width:45%;border:%?2?% solid #d1d1d1;font-size:%?24?%;color:#333}.btn-disabled[data-v-05f0b3ce]{background:#929292;border-color:#666;color:#fff}.f-confirm[data-v-05f0b3ce]{background:#008cee;color:#fff;border-color:#007aff}.work-list[data-v-05f0b3ce]{padding:%?20?% %?30?%;border-bottom:%?15?% solid #f4f4f4}.work-list[data-v-05f0b3ce]:last-child{border-bottom:none}.work-block[data-v-05f0b3ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#929292;font-size:%?26?%;padding-bottom:%?6?%}.work-detail-overview[data-v-05f0b3ce]{padding-bottom:%?40?%}.work-block-title[data-v-05f0b3ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;font-size:%?34?%;color:#222}.title-block[data-v-05f0b3ce]{padding-bottom:%?20?%}.work-dtl-name[data-v-05f0b3ce]{font-size:%?44?%}.work-salary[data-v-05f0b3ce]{font-size:%?34?%;color:#008cee}.work-tag-list[data-v-05f0b3ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.work-tag[data-v-05f0b3ce]{background:#f2f2f3;padding:%?5?% %?10?%;margin:0 %?10?% %?8?% 0;border-radius:%?8?%;font-size:%?24?%}.work-dtl-head[data-v-05f0b3ce]{border-radius:%?10?%;border:1px solid #e0e0e0;-webkit-box-shadow:0 0 %?10?% %?3?% #e0e0e0;box-shadow:0 0 %?10?% %?3?% #e0e0e0;margin-bottom:%?40?%}.work-head-main[data-v-05f0b3ce]{padding:%?25?%}.work-head-list[data-v-05f0b3ce]{border-bottom:1px solid #d1d1d1;padding-bottom:%?20?%;margin-bottom:%?20?%}.work-head-list[data-v-05f0b3ce]:last-child{border-bottom:0;padding-bottom:0;margin-bottom:0}.work-content[data-v-05f0b3ce]{color:#666;font-size:%?28?%;line-height:1.4}",""])}}]);