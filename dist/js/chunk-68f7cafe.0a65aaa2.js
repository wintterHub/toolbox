(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f7cafe"],{"17c3":function(e,t,n){"use strict";n("96e4")},3883:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":"padding: 0px;"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("网络地址")])]),n("el-input",{staticClass:"el-input-url noborder",attrs:{placeholder:"示例：https://zhaochangjin.com/[参数1]?param=[参数2]",clearable:""},on:{change:e.onGeneratClick},nativeOn:{click:function(t){return e.onUrlClick(t)}},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),n("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[n("el-col",{attrs:{span:9}},[n("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":"padding: 0px;"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("参数列表")]),n("el-button",{attrs:{plain:""},on:{click:e.onAddClick}},[n("i",{staticClass:"fas fa-plus"}),e._v(" 添加参数\n          ")])],1),n("el-table",{attrs:{stripe:"",data:e.formData.paramDatas,height:"536"}},[n("el-table-column",{attrs:{align:"center",prop:"name",label:"参数名"}}),n("el-table-column",{attrs:{align:"center",prop:"type",label:"参数类型"},scopedSlots:e._u([{key:"default",fn:function(t){return["paramConfigNumber"===t.row.type?n("span",[e._v("\n                数字\n              ")]):e._e(),"paramConfigLetter"===t.row.type?n("span",[e._v("\n                字母\n              ")]):e._e(),"paramConfigTime"===t.row.type?n("span",[e._v("\n                时间\n              ")]):e._e(),"paramConfigCustomize"===t.row.type?n("span",[e._v("\n                自定义\n              ")]):e._e()]}}])}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{"margin-right":"10px",padding:"0"},attrs:{type:"text"},on:{click:function(n){return e.onEditClick(t.row,t.$index)}}},[n("i",{staticClass:"far fa-edit"}),e._v(" 编辑\n              ")]),n("el-popover",{attrs:{placement:"right"},model:{value:e.delPopoverVisible[t.$index],callback:function(n){e.$set(e.delPopoverVisible,t.$index,n)},expression:"delPopoverVisible[scope.$index]"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{plain:"",type:"danger"},on:{click:function(n){return e.onDeleteClick(t.row,t.$index)}}},[n("i",{staticClass:"fas fa-check-double"}),e._v(" 确认删除\n                  ")])],1),n("el-button",{staticStyle:{padding:"0"},attrs:{slot:"reference",type:"text"},slot:"reference"},[n("i",{staticClass:"far fa-trash-alt"}),e._v(" 删除\n                ")])],1)]}}])})],1)],1)],1),n("el-col",{attrs:{span:15}},[n("el-card",{staticClass:"box-card",attrs:{shadow:"never","body-style":"padding: 0px;"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("生成结果")]),n("el-button",{staticClass:"generat-content-copy-btn",staticStyle:{"margin-left":"20px"},attrs:{plain:"","data-clipboard-text":e.formData.generatContent,disabled:!e.formData.generatContent}},[n("i",{staticClass:"far fa-copy"}),e._v(" 复制")]),n("el-button",{attrs:{plain:"",disabled:!e.formData.generatContent},on:{click:e.onBatchDownloadClick}},[n("i",{staticClass:"fas fa-download"}),e._v(" 迅雷批量下载\n          ")])],1),n("el-input",{staticClass:"noborder",attrs:{readonly:"",type:"textarea",rows:"25",resize:"none"},model:{value:e.formData.generatContent,callback:function(t){e.$set(e.formData,"generatContent",t)},expression:"formData.generatContent"}})],1)],1)],1),n("param-form-dialog",{attrs:{visible:e.paramFormDialogVisible,type:e.paramFormDialogType,value:e.currentParamData},on:{close:function(t){e.paramFormDialogVisible=!1},confirm:e.onDialogConfirm}})],1)},r=[],o=(n("ac6a"),n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"参数"+e.typeName,visible:e.propVisible,width:"45%","close-on-click-modal":!1},on:{"update:visible":function(t){e.propVisible=t},open:e.onDialogOpen}},[n("el-form",{ref:"form",attrs:{model:e.returnValue,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"参数名称"}},[n("el-input",{attrs:{disabled:!0,placeholder:"请输入参数名称"},model:{value:e.returnValue.name,callback:function(t){e.$set(e.returnValue,"name",t)},expression:"returnValue.name"}})],1),n("el-form-item",{attrs:{label:"参数类型"}},[n("el-radio-group",{model:{value:e.returnValue.type,callback:function(t){e.$set(e.returnValue,"type",t)},expression:"returnValue.type"}},[n("el-radio-button",{attrs:{label:"paramConfigNumber"}},[e._v("数字")]),n("el-radio-button",{attrs:{label:"paramConfigLetter"}},[e._v("字母")]),n("el-radio-button",{attrs:{disabled:"",label:"paramConfigTime"}},[e._v("时间")]),n("el-radio-button",{attrs:{disabled:"",label:"paramConfigCustomize"}},[e._v("自定义")])],1)],1),n("el-form-item",{attrs:{label:"参数配置"}},[n(e.returnValue.type,{tag:"components",model:{value:e.returnValue[e.returnValue.type],callback:function(t){e.$set(e.returnValue,e.returnValue.type,t)},expression:"returnValue[returnValue.type]"}})],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:""},on:{click:function(t){e.propVisible=!1}}},[n("i",{staticClass:"fas fa-times"}),e._v(" 取 消")]),n("el-button",{attrs:{plain:""},on:{click:function(t){e.$emit("confirm",JSON.parse(JSON.stringify(e.returnValue)))}}},[n("i",{staticClass:"fas fa-check"}),e._v(" 确 定")])],1)],1)}),i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{attrs:{model:e.value,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"开始值"}},[n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:e.value.start,callback:function(t){e.$set(e.value,"start",t)},expression:"value.start"}}),n("el-checkbox",{staticStyle:{"margin-left":"22px"},model:{value:e.value.isZeroPadding,callback:function(t){e.$set(e.value,"isZeroPadding",t)},expression:"value.isZeroPadding"}},[e._v("补零")]),n("el-popover",{attrs:{placement:"top",trigger:"click"}},[n("div",{staticClass:"sunken"},[n("div",[e._v("不补零格式：1、2、3 ... 1000")]),n("div",{staticStyle:{"margin-top":"10px"}},[e._v("\n            补零格式：0001、0002、0003 ... 1000\n          ")])]),n("i",{staticClass:"fa fa-question-circle-o",attrs:{slot:"reference"},slot:"reference"})])],1),n("el-form-item",{staticStyle:{"margin-top":"22px"},attrs:{label:"每次动作"}},[n("el-select",{staticStyle:{width:"150px","margin-right":"22px"},model:{value:e.value.action,callback:function(t){e.$set(e.value,"action",t)},expression:"value.action"}},[n("el-option",{attrs:{label:"递增",value:"up"}}),n("el-option",{attrs:{label:"递减",value:"down"}})],1),n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:e.value.actionRange,callback:function(t){e.$set(e.value,"actionRange",t)},expression:"value.actionRange"}})],1),n("el-form-item",{staticStyle:{"margin-top":"22px"},attrs:{label:"结束条件"}},[n("el-select",{staticStyle:{width:"150px","margin-right":"22px"},model:{value:e.value.endCondition,callback:function(t){e.$set(e.value,"endCondition",t)},expression:"value.endCondition"}},[n("el-option",{attrs:{label:"结束值",value:"endValue"}}),n("el-option",{attrs:{label:"项数",value:"count"}})],1),n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:e.value.endConditionValue,callback:function(t){e.$set(e.value,"endConditionValue",t)},expression:"value.endConditionValue"}})],1)],1)],1)},s=[],c={props:{value:Object}},u=c,f=n("2877"),p=Object(f["a"])(u,l,s,!1,null,null,null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{attrs:{model:e.value,"label-position":"left"}},[n("el-form-item",[n("el-checkbox",{model:{value:e.value.lowercase,callback:function(t){e.$set(e.value,"lowercase",t)},expression:"value.lowercase"}},[e._v("\n        小写\n      ")]),e._v("\n      从\n      "),n("el-select",{staticStyle:{width:"150px"},attrs:{disabled:!e.value.lowercase},model:{value:e.value.lowercaseStart,callback:function(t){e.$set(e.value,"lowercaseStart",t)},expression:"value.lowercaseStart"}},e._l(e.lowercaseLetters,(function(e){return n("el-option",{key:e.charCodeAt(0),attrs:{value:e.charCodeAt(0),label:e}})})),1),e._v("\n      到\n      "),n("el-select",{staticStyle:{width:"150px"},attrs:{disabled:!e.value.lowercase},model:{value:e.value.lowercaseEnd,callback:function(t){e.$set(e.value,"lowercaseEnd",t)},expression:"value.lowercaseEnd"}},e._l(e.lowercaseLetters,(function(e){return n("el-option",{key:e.charCodeAt(0),attrs:{value:e.charCodeAt(0),label:e}})})),1)],1),n("el-form-item",{staticStyle:{"margin-top":"22px"}},[n("el-checkbox",{model:{value:e.value.uppercase,callback:function(t){e.$set(e.value,"uppercase",t)},expression:"value.uppercase"}},[e._v("\n        大写\n      ")]),e._v("\n      从\n      "),n("el-select",{staticStyle:{width:"150px"},attrs:{disabled:!e.value.uppercase},model:{value:e.value.uppercaseStart,callback:function(t){e.$set(e.value,"uppercaseStart",t)},expression:"value.uppercaseStart"}},e._l(e.uppercaseLetters,(function(e){return n("el-option",{key:e.charCodeAt(0),attrs:{value:e.charCodeAt(0),label:e}})})),1),e._v("\n      到\n      "),n("el-select",{staticStyle:{width:"150px"},attrs:{disabled:!e.value.uppercase},model:{value:e.value.uppercaseEnd,callback:function(t){e.$set(e.value,"uppercaseEnd",t)},expression:"value.uppercaseEnd"}},e._l(e.uppercaseLetters,(function(e){return n("el-option",{key:e.charCodeAt(0),attrs:{value:e.charCodeAt(0),label:e}})})),1)],1)],1)],1)},h=[],v=n("97d9"),b={props:{value:Object},data:function(){return{lowercaseLetters:v["a"].getLowercaseLetters(),uppercaseLetters:v["a"].getUppercaseLetters()}}},g=b,y=Object(f["a"])(g,m,h,!1,null,null,null),C=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("该功能暂未开放")])},x=[],S={},w=Object(f["a"])(S,k,x,!1,null,null,null),E=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("该功能暂未开放")])},D=[],A={},T=Object(f["a"])(A,_,D,!1,null,null,null),O=T.exports,L=(n("456d"),{data:function(){return{confirmLoading:!1,formRef:"form",formData:{}}},props:{visible:{type:Boolean,default:!1,required:!1}},computed:{propVisible:{get:function(){return this.visible},set:function(e){var t=this;e||(this.$emit("close"),this.$refs[this.formRef]&&this.$refs[this.formRef].resetFields(),Object.keys(this.formData).forEach((function(e){return t.formData[e]=""})))}}}}),j={name:"",type:"paramConfigNumber",paramConfigNumber:{start:1,isZeroPadding:!1,action:"up",actionRange:1,endCondition:"endValue",endConditionValue:"1"},paramConfigLetter:{lowercase:!0,lowercaseStart:"a".charCodeAt(0),lowercaseEnd:"z".charCodeAt(0),uppercase:!0,uppercaseStart:"A".charCodeAt(0),uppercaseEnd:"Z".charCodeAt(0)},paramConfigTime:{},paramConfigCustomize:{}},P={mixins:[L],props:{value:Object,type:String},data:function(){return{returnValue:{}}},computed:{isAdd:function(){return"add"===this.type},isEdit:function(){return"edit"===this.type},typeName:function(){return this.isAdd?"添加":this.isEdit?"编辑":""}},components:{paramConfigNumber:d,paramConfigLetter:C,paramConfigTime:E,paramConfigCustomize:O},methods:{onDialogOpen:function(){this.isAdd?this.returnValue=Object.assign({},JSON.parse(JSON.stringify(j)),JSON.parse(JSON.stringify(this.value))):this.isEdit&&(this.returnValue=JSON.parse(JSON.stringify(this.value)))}}},V=P,$=(n("17c3"),Object(f["a"])(V,o,i,!1,null,"84cf441a",null)),N=$.exports,F=n("b311"),R=n.n(F),I=n("5c96"),M=(n("a481"),n("6b54"),function(e,t){for(var n="[".concat(t.name,"]"),a=t.paramConfigNumber.start,r=t.paramConfigNumber.endCondition,o=t.paramConfigNumber.endConditionValue,i=t.paramConfigNumber.action,l=t.paramConfigNumber.actionRange,s=t.paramConfigNumber.isZeroPadding,c=function(){return"count"===r?"up"===i?a+o*l:a-o*l:"up"===i?o+1:o-1}(),u=function(){for(var e=[],t=a;"up"===i?t<c:t>c;t+="up"===i?l:-l)e.push(t);return Math.max.apply(Math,e)}(),f=[],p=function(t){e.forEach((function(e){if(s){var a=u.toString().length,r=v["a"].leftPad(t,"0",a);f.push(e.replace(n,r))}else f.push(e.replace(n,t))}))},d=a;"up"===i?d<c:d>c;d+="up"===i?l:-l)p(d);return f}),J=function(e,t){var n="[".concat(t.name,"]"),a=t.paramConfigLetter.lowercase,r=t.paramConfigLetter.lowercaseStart,o=t.paramConfigLetter.lowercaseEnd,i=t.paramConfigLetter.uppercase,l=t.paramConfigLetter.uppercaseStart,s=t.paramConfigLetter.uppercaseEnd,c=[];if(a)for(var u=function(t){e.forEach((function(e){c.push(e.replace(n,String.fromCharCode(t)))}))},f=r;f<=o;f++)u(f);if(i)for(var p=function(t){e.forEach((function(e){c.push(e.replace(n,String.fromCharCode(t)))}))},d=l;d<=s;d++)p(d);return c},G=function(e,t){},H=function(e,t){},z={replaceParamConfigNumber:M,replaceParamConfigLetter:J,replaceParamConfigTime:G,replaceParamConfigCustomize:H},U=new R.a(".generat-content-copy-btn");U.on("success",(function(e){I["Message"].success("已复制到剪切板"),e.clearSelection()})),U.on("error",(function(e){I["Message"].error("复制失败")}));var q={data:function(){return{formData:{url:"",paramDatas:[],generatContent:"",generatContentArr:[]},generatText:"",paramFormDialogVisible:!1,paramFormDialogType:"add",currentParamData:{},currentParamIndex:0,cursorStartPosition:0,cursorEndPosition:0,delPopoverVisible:[],isAutoGenerat:!0,nameIndex:1}},components:{"param-form-dialog":N},computed:{isAdd:function(){return"add"===this.paramFormDialogType},isEdit:function(){return"edit"===this.paramFormDialogType}},mounted:function(){var e=localStorage.getItem("url"),t=JSON.parse(localStorage.getItem("paramDatas"));e&&(this.formData.url=e),t&&(this.formData.paramDatas=t),this.isAutoGenerat&&this.onGeneratClick()},methods:{onUrlClick:function(){this.cursorStartPosition=document.querySelector(".el-input-url .el-input__inner").selectionStart,this.cursorEndPosition=document.querySelector(".el-input-url .el-input__inner").selectionEnd},onAddClick:function(){this.paramFormDialogType="add",this.paramFormDialogVisible=!0;var e="参数".concat(this.nameIndex);this.nameIndex+=1,this.currentParamData={name:e}},onEditClick:function(e,t){this.paramFormDialogType="edit",this.paramFormDialogVisible=!0,this.currentParamData=e,this.currentParamIndex=t},onDeleteClick:function(e,t){this.formData.paramDatas.splice(t,1),this.formData.url=this.formData.url.replaceAll("[".concat(e.name,"]"),""),this.delPopoverVisible[t]=!1,this.isAutoGenerat&&this.onGeneratClick()},onGeneratClick:function(){for(var e=[this.formData.url],t=0;t<this.formData.paramDatas.length;t++){var n=v["a"].toUpperCamelCase(this.formData.paramDatas[t].type),a="replace".concat(n);e=z[a](e,this.formData.paramDatas[t])||[]}this.formData.generatList=e,this.formData.generatContent=e.join("\n"),!this.isAutoGenerat&&this.$message.success("执行完毕"),localStorage.setItem("url",this.formData.url),localStorage.setItem("paramDatas",JSON.stringify(this.formData.paramDatas))},onDialogConfirm:function(e){if(this.isAdd)if(this.paramFormDialogVisible=!1,this.formData.paramDatas.push(e),this.formData.url){var t=this.formData.url.substring(0,this.cursorStartPosition),n=this.formData.url.substring(this.cursorEndPosition);this.formData.url="".concat(t,"[").concat(e.name,"]").concat(n)}else this.formData.url="[".concat(e.name,"]");else this.isEdit&&(this.paramFormDialogVisible=!1,this.formData.paramDatas.splice(this.currentParamIndex,1,e));this.isAutoGenerat&&this.onGeneratClick()},onRealTimeGeneratChange:function(e){e&&this.onGeneratClick()},onBatchDownloadClick:function(){var e=[];this.formData.generatList.forEach((function(t,n){e.push({url:t})})),v["a"].loadJs(window.location.origin+window.location.pathname+"/static/thunder-link.js",(function(){thunderLink.newTask({downloadDir:"",taskGroupName:"分组1",tasks:e})}))}}},B=q,Z=(n("f0ed"),Object(f["a"])(B,a,r,!1,null,"14cefa95",null));t["default"]=Z.exports},"456d":function(e,t,n){var a=n("4bf8"),r=n("0d58");n("5eda")("keys",(function(){return function(e){return r(a(e))}}))},"5eda":function(e,t,n){var a=n("5ca1"),r=n("8378"),o=n("79e5");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o((function(){n(1)})),"Object",i)}},"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"96e4":function(e,t,n){},"97d9":function(e,t,n){"use strict";n("7f7f");function a(e){if(Array.isArray(e))return e}var r=n("db90"),o=n("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return a(e)||Object(r["a"])(e)||Object(o["a"])(e)||i()}n("6b54");function s(e,t){var n=document.createElement("script");n.setAttribute("src",e),document.body.insertBefore(n,document.body.lastChild),n.onload=t,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=t}function c(e,t,n){null==e&&(e="");var a=e.toString().length;if(a>=n)return e;for(var r=n-a,o="",i=0;i<r;i++)o+=t;return o+=e,o}function u(){for(var e=[],t=65;t<91;t++)e.push(String.fromCharCode(t));return e}function f(){for(var e=[],t=97;t<123;t++)e.push(String.fromCharCode(t));return e}function p(e){var t=l(e),n=t[0],a=t.slice(1);return n.toUpperCase()+a.join("")}function d(e,t){var n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=t||e.name,n.click()}t["a"]={loadJs:s,leftPad:c,getUppercaseLetters:u,getLowercaseLetters:f,toUpperCamelCase:p,downloadFileByBlob:d}},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;for(a;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var o=0,i=a.length;o<i;o++)a[o].fn!==t&&a[o].fn._!==t&&r.push(a[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return i(e,t,n);if(a.nodeList(e))return l(e,t,n);if(a.string(e))return s(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function l(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function s(e,t,n){return r(document.body,e,t,n)}e.exports=o},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var o=i.apply(this,arguments);return e.addEventListener(n,o,r),{destroy:function(){e.removeEventListener(n,o,r)}}}function o(e,t,n,a,o){return"function"===typeof e.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,o)})))}function i(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=o},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}function r(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=r},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(t){l(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=s,u=n(1),f=n.n(u),p=n(2),d=n.n(p),m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(e,n){v(this,t);var a=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return g(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return C("action",e)}},{key:"defaultTarget",value:function(e){var t=C("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return C("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(f.a);function C(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t["default"]=y}])["default"]}))},f0ed:function(e,t,n){"use strict";n("f253")},f253:function(e,t,n){}}]);
//# sourceMappingURL=chunk-68f7cafe.0a65aaa2.js.map