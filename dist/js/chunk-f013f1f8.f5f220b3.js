(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f013f1f8"],{"21d0":function(t,e,n){},3883:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"网络地址"}},[n("el-input",{staticClass:"el-input-url",attrs:{placeholder:"https://zhaochangjin.com/[参数1]?param=[参数2]"},on:{change:t.onGeneratClick},nativeOn:{click:function(e){return t.onUrlClick(e)}},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),n("el-button",{staticStyle:{"margin-left":"100px","margin-bottom":"22px"},attrs:{type:"primary",round:""},on:{click:t.onAddClick}},[t._v("\n      添加参数\n    ")]),n("el-button",{attrs:{type:"primary",round:"",disabled:t.isRealTimeGenerat},on:{click:t.onGeneratClick}},[t._v("\n      生成地址\n    ")]),n("el-checkbox",{staticStyle:{"margin-left":"22px"},on:{change:t.onRealTimeGeneratChange},model:{value:t.isRealTimeGenerat,callback:function(e){t.isRealTimeGenerat=e},expression:"isRealTimeGenerat"}},[t._v("\n      实时生成\n    ")]),n("el-row",[n("el-col",{attrs:{span:9}},[n("el-form-item",{attrs:{label:"参数列表"}},[n("el-table",{attrs:{stripe:"",border:!0,data:t.formData.paramDatas,size:"mini",height:"469","header-cell-style":{background:"#FAFAFA",color:"#50646F","line-height":"21px","border-color":"#dcdfe6"}}},[n("el-table-column",{attrs:{align:"center",prop:"name",label:"参数名"}}),n("el-table-column",{attrs:{align:"center",prop:"type",label:"参数类型"},scopedSlots:t._u([{key:"default",fn:function(e){return["ParamConfigNumber"===e.row.type?n("span",[t._v("\n                  数字\n                ")]):t._e(),"ParamConfigLetter"===e.row.type?n("span",[t._v("\n                  字母\n                ")]):t._e(),"ParamConfigTime"===e.row.type?n("span",[t._v("\n                  时间\n                ")]):t._e(),"ParamConfigCustomize"===e.row.type?n("span",[t._v("\n                  自定义\n                ")]):t._e()]}}])}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{"margin-right":"10px",padding:"0"},attrs:{type:"text"},on:{click:function(n){return t.onEditClick(e.row,e.$index)}}},[t._v("\n                  编辑\n                ")]),n("el-popover",{attrs:{placement:"right"},model:{value:t.delPopoverVisible[e.$index],callback:function(n){t.$set(t.delPopoverVisible,e.$index,n)},expression:"delPopoverVisible[scope.$index]"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"danger",round:"",size:"mini"},on:{click:function(n){return t.onDeleteClick(e.row,e.$index)}}},[t._v("\n                      点击确认删除\n                    ")])],1),n("el-button",{staticStyle:{padding:"0"},attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("\n                    删除\n                  ")])],1)]}}])})],1)],1)],1),n("el-col",{attrs:{span:15}},[n("div",{staticClass:"generat-content-title"},[n("el-button",{staticClass:"generat-content-copy-btn",staticStyle:{padding:"3px",float:"left"},attrs:{type:"info","data-clipboard-text":t.formData.generatContent}},[t._v("复制")]),n("span",[t._v("生成结果")])],1),n("el-input",{attrs:{readonly:"",type:"textarea",rows:"20",resize:"none"},model:{value:t.formData.generatContent,callback:function(e){t.$set(t.formData,"generatContent",e)},expression:"formData.generatContent"}})],1)],1),n("el-form-item",{attrs:{label:"结果处理"}},[n("el-button",{attrs:{type:"primary",round:"",disabled:!t.formData.generatContent},on:{click:t.onBatchDownloadClick}},[t._v("\n        迅雷批量下载\n      ")])],1)],1),n("param-form-dialog",{attrs:{visible:t.paramFormDialogVisible,type:t.paramFormDialogType,value:t.currentParamData},on:{close:function(e){t.paramFormDialogVisible=!1},confirm:t.onDialogConfirm}})],1)},r=[],i=(n("a481"),n("6b54"),n("ac6a"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"参数"+t.typeName,visible:t._visible,width:"45%","close-on-click-modal":!1},on:{"update:visible":function(e){t._visible=e},open:t.onDialogOpen,closed:t.onDialogClosed}},[n("el-form",{ref:"form",attrs:{model:t.value_,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"参数名称"}},[n("el-input",{attrs:{disabled:!0,placeholder:"请输入参数名称"},model:{value:t.value_.name,callback:function(e){t.$set(t.value_,"name",e)},expression:"value_.name"}})],1),n("el-form-item",{attrs:{label:"参数类型"}},[n("el-radio-group",{model:{value:t.value_.type,callback:function(e){t.$set(t.value_,"type",e)},expression:"value_.type"}},[n("el-radio-button",{attrs:{label:"ParamConfigNumber"}},[t._v("数字")]),n("el-radio-button",{attrs:{disabled:"",label:"ParamConfigLetter"}},[t._v("字母")]),n("el-radio-button",{attrs:{disabled:"",label:"ParamConfigTime"}},[t._v("时间")]),n("el-radio-button",{attrs:{disabled:"",label:"ParamConfigCustomize"}},[t._v("自定义")])],1)],1),n("el-form-item",{attrs:{label:"参数配置"}},[n(t.value_.type,{tag:"components",attrs:{value:t.value_.paramConfig},on:{change:t.onParamConfigChange}})],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{round:""},on:{click:function(e){t._visible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){t.$emit("confirm",JSON.parse(JSON.stringify(t.value_)))}}},[t._v("确 定")])],1)],1)}),o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{attrs:{model:t.value,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"开始值"}},[n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:t.value.start,callback:function(e){t.$set(t.value,"start",e)},expression:"value.start"}}),n("el-checkbox",{staticStyle:{"margin-left":"22px"},model:{value:t.value.isZeroPadding,callback:function(e){t.$set(t.value,"isZeroPadding",e)},expression:"value.isZeroPadding"}},[t._v("补零")]),n("el-popover",{attrs:{placement:"right",trigger:"hover"}},[n("div",[t._v("不补零格式：1、2、3 ... 1000")]),n("div",{staticStyle:{"margin-top":"10px"}},[t._v("\n          补零格式：0001、0002、0003 ... 1000\n        ")]),n("i",{staticClass:"fa fa-question-circle-o",staticStyle:{"margin-left":"22px"},attrs:{slot:"reference"},slot:"reference"})])],1),n("el-form-item",{staticStyle:{"margin-top":"22px"},attrs:{label:"每次动作"}},[n("el-select",{staticStyle:{width:"150px","margin-right":"22px"},model:{value:t.value.action,callback:function(e){t.$set(t.value,"action",e)},expression:"value.action"}},[n("el-option",{attrs:{label:"递增",value:"up"}}),n("el-option",{attrs:{label:"递减",value:"down"}})],1),n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:t.value.actionRange,callback:function(e){t.$set(t.value,"actionRange",e)},expression:"value.actionRange"}})],1),n("el-form-item",{staticStyle:{"margin-top":"22px"},attrs:{label:"结束条件"}},[n("el-select",{staticStyle:{width:"150px","margin-right":"22px"},model:{value:t.value.endCondition,callback:function(e){t.$set(t.value,"endCondition",e)},expression:"value.endCondition"}},[n("el-option",{attrs:{label:"结束值",value:"endValue"}}),n("el-option",{attrs:{label:"项数",value:"count"}})],1),n("el-input-number",{staticStyle:{width:"150px"},attrs:{"controls-position":"right"},model:{value:t.value.endConditionValue,callback:function(e){t.$set(t.value,"endConditionValue",e)},expression:"value.endConditionValue"}})],1)],1)],1)},s=[],c={data:function(){return{}},watch:{value:{handler:function(t){this.$emit("change",t)},deep:!0}},props:{value:Object,type:String},mounted:function(){this.$emit("change",this.value)}},u=c,f=n("2877"),d=Object(f["a"])(u,l,s,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("该功能暂未开放")])},h=[],v={},g=Object(f["a"])(v,m,h,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("该功能暂未开放")])},k=[],x={},C=Object(f["a"])(x,y,k,!1,null,null,null),_=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("该功能暂未开放")])},E=[],w={},D=Object(f["a"])(w,S,E,!1,null,null,null),T=D.exports,P=(n("456d"),{data:function(){return{confirmLoading:!1,formRef:"form",formData:{}}},props:{visible:{type:Boolean,default:!1,required:!1}},computed:{_visible:{get:function(){return this.visible},set:function(t){var e=this;t||(this.$emit("close"),this.$refs[this.formRef]&&this.$refs[this.formRef].resetFields(),Object.keys(this.formData).forEach((function(t){return e.formData[t]=""})))}}}}),O={mixins:[P],props:{value:Object,type:String},data:function(){return{value_:{name:"",type:"ParamConfigNumber",paramConfig:{start:1,isZeroPadding:!1,action:"up",actionRange:1,endCondition:"endValue",endConditionValue:"1"}}}},computed:{isAdd:function(){return"add"===this.type},isEdit:function(){return"edit"===this.type},typeName:function(){return this.isAdd?"添加":this.isEdit?"编辑":""}},components:{ParamConfigNumber:p,ParamConfigLetter:b,ParamConfigTime:_,ParamConfigCustomize:T},methods:{onDialogOpen:function(){this.isAdd?this.value_=Object.assign({},this.value_,this.value):this.isEdit&&(this.value_=JSON.parse(JSON.stringify(this.value)))},onDialogClosed:function(){},onParamConfigChange:function(t){this.isAdd||this.isEdit&&(this.value_.paramConfig=t)}}},A=O,j=(n("bc5b"),Object(f["a"])(A,i,o,!1,null,"b0391404",null)),F=j.exports,$={loadJs:function(t,e){var n=document.createElement("script");n.setAttribute("src",t),document.body.insertBefore(n,document.body.lastChild),n.onload=e,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,e())}:n.onload=e}},R=$,L=n("b311"),N=n.n(L),V=n("5c96"),G=new N.a(".generat-content-copy-btn");G.on("success",(function(t){V["Message"].success("已复制到剪切板"),t.clearSelection()})),G.on("error",(function(t){V["Message"].error("复制失败")}));var M={data:function(){return{formData:{url:"",paramDatas:[],generatContent:"",generatContentArr:[]},generatText:"",paramFormDialogVisible:!1,paramFormDialogType:"add",currentParamData:{},currentParamIndex:0,cursorStartPosition:0,cursorEndPosition:0,delPopoverVisible:[],isRealTimeGenerat:!0}},components:{"param-form-dialog":F},computed:{isAdd:function(){return"add"===this.paramFormDialogType},isEdit:function(){return"edit"===this.paramFormDialogType}},methods:{onUrlClick:function(){this.cursorStartPosition=document.querySelector(".el-input-url .el-input__inner").selectionStart,this.cursorEndPosition=document.querySelector(".el-input-url .el-input__inner").selectionEnd},onAddClick:function(){this.paramFormDialogType="add",this.paramFormDialogVisible=!0;var t="参数".concat(this.formData.paramDatas.length+1);this.currentParamData={name:t}},onEditClick:function(t,e){this.paramFormDialogType="edit",this.paramFormDialogVisible=!0,this.currentParamData=t,this.currentParamIndex=e},onDeleteClick:function(t,e){this.formData.paramDatas.splice(e,1),this.formData.url=this.formData.url.replaceAll("[".concat(t.name,"]"),""),this.delPopoverVisible[e]=!1,this.isRealTimeGenerat&&this.onGeneratClick()},onGeneratClick:function(){for(var t=[],e=0;e<this.formData.paramDatas.length;e++)"ParamConfigNumber"===this.formData.paramDatas[e].type&&(t=0===e?this._replaceParamConfigNumber([this.formData.url],this.formData.paramDatas[e]):this._replaceParamConfigNumber(t,this.formData.paramDatas[e]));this.formData.generatList=t,this.formData.generatContent=t.join("\n"),!this.isRealTimeGenerat&&this.$message.success("执行完毕")},_replaceParamConfigNumber:function(t,e){for(var n=this,a="[".concat(e.name,"]"),r=e.paramConfig.start,i=e.paramConfig.endCondition,o=e.paramConfig.endConditionValue,l=e.paramConfig.action,s=e.paramConfig.actionRange,c=function(){return"count"===i?"up"===l?r+o*s:r-o*s:"up"===l?o+1:o-1}(),u=function(){for(var t=[],e=r;"up"===l?e<c:e>c;e+="up"===l?s:-s)t.push(e);return Math.max.apply(Math,t)}(),f=[],d=function(r){t.forEach((function(t){if(e.paramConfig.isZeroPadding){var i=u.toString().length,o=n._leftPad(r,"0",i);f.push(t.replace(a,o))}else f.push(t.replace(a,r))}))},p=r;"up"===l?p<c:p>c;p+="up"===l?s:-s)d(p);return f},_leftPad:function(t,e,n){null==t&&(t="");var a=t.toString().length;if(a>=n)return t;for(var r=n-a,i="",o=0;o<r;o++)i+=e;return i+=t,i},onDialogConfirm:function(t){if(this.isAdd)if(this.paramFormDialogVisible=!1,this.formData.paramDatas.push(t),this.formData.url){var e=this.formData.url.substring(0,this.cursorStartPosition),n=this.formData.url.substring(this.cursorEndPosition);this.formData.url="".concat(e,"[").concat(t.name,"]").concat(n)}else this.formData.url="[".concat(t.name,"]");else this.isEdit&&(this.paramFormDialogVisible=!1,this.formData.paramDatas.splice(this.currentParamIndex,1,t));this.isRealTimeGenerat&&this.onGeneratClick()},onRealTimeGeneratChange:function(t){t&&this.onGeneratClick()},onBatchDownloadClick:function(){var t=[];this.formData.generatList.forEach((function(e,n){t.push({url:e})})),R.loadJs(window.location.origin+window.location.pathname+"/static/thunder-link.js",(function(){thunderLink.newTask({downloadDir:"",taskGroupName:"分组1",tasks:t})}))}},mounted:function(){}},H=M,q=(n("7a24"),Object(f["a"])(H,a,r,!1,null,"6b81cb66",null));e["default"]=q.exports},"456d":function(t,e,n){var a=n("4bf8"),r=n("0d58");n("5eda")("keys",(function(){return function(t){return r(a(t))}}))},"5eda":function(t,e,n){var a=n("5ca1"),r=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i((function(){n(1)})),"Object",o)}},"7a24":function(t,e,n){"use strict";n("a4cf")},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in r||n("9e1e")&&a(r,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},a4cf:function(t,e,n){},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(t),a.removeAllRanges(),a.addRange(r),e=a.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var a=this.e||(this.e={});return(a[t]||(a[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var a=this;function r(){a.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),a=0,r=n.length;for(a;a<r;a++)n[a].fn.apply(n[a].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),a=n[t],r=[];if(a&&e)for(var i=0,o=a.length;i<o;i++)a[i].fn!==e&&a[i].fn._!==e&&r.push(a[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var a=n(3),r=n(4);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return o(t,e,n);if(a.nodeList(t))return l(t,e,n);if(a.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function l(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function s(t,e,n){return r(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var a=n(5);function r(t,e,n,a,r){var i=o.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}function i(t,e,n,a,i){return"function"===typeof t.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,a,i)})))}function o(t,e,n,r){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}function r(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=r},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(e){l(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),c=s,u=n(1),f=n.n(u),d=n(2),p=n.n(d),m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var y=function(t){function e(t,n){v(this,e);var a=g(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.resolveOptions(n),a.listenClick(t),a}return b(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===m(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=p()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return k("action",t)}},{key:"defaultTarget",value:function(t){var e=k("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return k("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(f.a);function k(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=y}])["default"]}))},bc5b:function(t,e,n){"use strict";n("21d0")}}]);
//# sourceMappingURL=chunk-f013f1f8.f5f220b3.js.map