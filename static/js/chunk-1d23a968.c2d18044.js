(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d23a968"],{"440b":function(n,e,t){"use strict";t.r(e);var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"components-container"},[n._m(0),t("div",{staticClass:"editor-container"},[t("el-tag",{staticClass:"tag-title"},[n._v(" Basic: ")]),t("markdown-editor",{attrs:{height:"300px"},model:{value:n.content1,callback:function(e){n.content1=e},expression:"content1"}})],1),t("div",{staticClass:"editor-container"},[t("el-tag",{staticClass:"tag-title"},[n._v(" Markdown Mode: ")]),t("markdown-editor",{ref:"markdownEditor",attrs:{options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},model:{value:n.content2,callback:function(e){n.content2=e},expression:"content2"}})],1),t("div",{staticClass:"editor-container"},[t("el-tag",{staticClass:"tag-title"},[n._v(" Customize Toolbar: ")]),t("markdown-editor",{attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:n.content3,callback:function(e){n.content3=e},expression:"content3"}})],1),t("div",{staticClass:"editor-container"},[t("el-tag",{staticClass:"tag-title"},[n._v(" I18n: ")]),t("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),t("markdown-editor",{ref:"markdownEditor",attrs:{language:n.language,height:"300px"},model:{value:n.content4,callback:function(e){n.content4=e},expression:"content4"}})],1),t("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:n.getHtml}},[n._v(" Get HTML ")]),t("div",{domProps:{innerHTML:n._s(n.html)}})],1)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("aside",[n._v("Markdown is based on "),t("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[n._v("tui.editor")]),n._v(" ，simply wrapped with Vue. "),t("a",{attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"}},[n._v(" Documentation ")])])}],i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:n.id}})},c=[],a=t("5530"),d=(t("b680"),t("a7be"),t("f513"),t("e459"));function s(){var n="/Users/sunshine/Documents/project/vue-element-admin/src/components/MarkdownEditor/default-options.js",e="b2dbbb8b92136e5e9585228a5338dd29eed6cfd2",t=new Function("return this")(),l="__coverage__",o={path:"/Users/sunshine/Documents/project/vue-element-admin/src/components/MarkdownEditor/default-options.js",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"5ff1b4bcb11e51d158fafb61c5f9281be39dd5cd",hash:"b2dbbb8b92136e5e9585228a5338dd29eed6cfd2"},i=t[l]||(t[l]={});i[n]&&i[n].hash===e||(i[n]=o);var c=i[n];return s=function(){return c},c}s();var u={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]};function r(){var n="/Users/sunshine/Documents/project/vue-element-admin/src/components/MarkdownEditor/index.vue",e="ef709b318f34c65ede90eb96903a31012b887d43",t=new Function("return this")(),l="__coverage__",o={path:"/Users/sunshine/Documents/project/vue-element-admin/src/components/MarkdownEditor/index.vue",statementMap:{0:{start:{line:23,column:8},end:{line:23,column:90}},1:{start:{line:29,column:8},end:{line:29,column:29}},2:{start:{line:48,column:4},end:{line:50,column:5}},3:{start:{line:54,column:22},end:{line:54,column:69}},4:{start:{line:55,column:6},end:{line:55,column:41}},5:{start:{line:56,column:6},end:{line:56,column:34}},6:{start:{line:57,column:6},end:{line:57,column:38}},7:{start:{line:58,column:6},end:{line:58,column:20}},8:{start:{line:63,column:6},end:{line:65,column:7}},9:{start:{line:64,column:8},end:{line:64,column:41}},10:{start:{line:68,column:6},end:{line:68,column:26}},11:{start:{line:69,column:6},end:{line:69,column:23}},12:{start:{line:72,column:6},end:{line:72,column:34}},13:{start:{line:75,column:6},end:{line:75,column:38}},14:{start:{line:79,column:4},end:{line:79,column:21}},15:{start:{line:82,column:4},end:{line:82,column:24}},16:{start:{line:86,column:6},end:{line:89,column:8}},17:{start:{line:90,column:6},end:{line:92,column:7}},18:{start:{line:91,column:8},end:{line:91,column:43}},19:{start:{line:93,column:6},end:{line:95,column:8}},20:{start:{line:94,column:8},end:{line:94,column:54}},21:{start:{line:98,column:6},end:{line:98,column:30}},22:{start:{line:98,column:24},end:{line:98,column:30}},23:{start:{line:99,column:6},end:{line:99,column:31}},24:{start:{line:100,column:6},end:{line:100,column:26}},25:{start:{line:103,column:6},end:{line:103,column:36}},26:{start:{line:106,column:6},end:{line:106,column:38}},27:{start:{line:109,column:6},end:{line:109,column:32}},28:{start:{line:112,column:6},end:{line:112,column:34}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:22,column:6},end:{line:22,column:7}},loc:{start:{line:22,column:16},end:{line:24,column:7}},line:22,hash:"9f3aa4c691b58345de3dfdd2189871cdd2a7ac0d"},1:{name:"(anonymous_1)",decl:{start:{line:28,column:6},end:{line:28,column:7}},loc:{start:{line:28,column:16},end:{line:30,column:7}},line:28,hash:"9f3aa4c691b58345de3dfdd2189871cdd2a7ac0d"},2:{name:"(anonymous_2)",decl:{start:{line:47,column:2},end:{line:47,column:3}},loc:{start:{line:47,column:9},end:{line:51,column:3}},line:47,hash:"2e113a63577ab47f163b12f35f2e4c9b5a9adf13"},3:{name:"(anonymous_3)",decl:{start:{line:53,column:4},end:{line:53,column:5}},loc:{start:{line:53,column:20},end:{line:59,column:5}},line:53,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"},4:{name:"(anonymous_4)",decl:{start:{line:62,column:4},end:{line:62,column:5}},loc:{start:{line:62,column:30},end:{line:66,column:5}},line:62,hash:"f0ef433d3316eb66a1a1fd8a04ab1ec77d8186ab"},5:{name:"(anonymous_5)",decl:{start:{line:67,column:4},end:{line:67,column:5}},loc:{start:{line:67,column:18},end:{line:70,column:5}},line:67,hash:"a74b9602def48bf7fc258ee5b48e54afe882e3e2"},6:{name:"(anonymous_6)",decl:{start:{line:71,column:4},end:{line:71,column:5}},loc:{start:{line:71,column:21},end:{line:73,column:5}},line:71,hash:"b49fe587081f5c81e3ac61f98f80f5402c0f55b2"},7:{name:"(anonymous_7)",decl:{start:{line:74,column:4},end:{line:74,column:5}},loc:{start:{line:74,column:19},end:{line:76,column:5}},line:74,hash:"b49fe587081f5c81e3ac61f98f80f5402c0f55b2"},8:{name:"(anonymous_8)",decl:{start:{line:78,column:2},end:{line:78,column:3}},loc:{start:{line:78,column:12},end:{line:80,column:3}},line:78,hash:"2e113a63577ab47f163b12f35f2e4c9b5a9adf13"},9:{name:"(anonymous_9)",decl:{start:{line:81,column:2},end:{line:81,column:3}},loc:{start:{line:81,column:14},end:{line:83,column:3}},line:81,hash:"2e113a63577ab47f163b12f35f2e4c9b5a9adf13"},10:{name:"(anonymous_10)",decl:{start:{line:85,column:4},end:{line:85,column:5}},loc:{start:{line:85,column:17},end:{line:96,column:5}},line:85,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"},11:{name:"(anonymous_11)",decl:{start:{line:93,column:31},end:{line:93,column:32}},loc:{start:{line:93,column:37},end:{line:95,column:7}},line:93,hash:"9982acdea917c232d52a0a90031413a1b313f147"},12:{name:"(anonymous_12)",decl:{start:{line:97,column:4},end:{line:97,column:5}},loc:{start:{line:97,column:20},end:{line:101,column:5}},line:97,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"},13:{name:"(anonymous_13)",decl:{start:{line:102,column:4},end:{line:102,column:5}},loc:{start:{line:102,column:20},end:{line:104,column:5}},line:102,hash:"f46ccf1fa922bcedc091d71594c99b8a901c5e9b"},14:{name:"(anonymous_14)",decl:{start:{line:105,column:4},end:{line:105,column:5}},loc:{start:{line:105,column:15},end:{line:107,column:5}},line:105,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"},15:{name:"(anonymous_15)",decl:{start:{line:108,column:4},end:{line:108,column:5}},loc:{start:{line:108,column:19},end:{line:110,column:5}},line:108,hash:"f46ccf1fa922bcedc091d71594c99b8a901c5e9b"},16:{name:"(anonymous_16)",decl:{start:{line:111,column:4},end:{line:111,column:5}},loc:{start:{line:111,column:14},end:{line:113,column:5}},line:111,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"}},branchMap:{0:{loc:{start:{line:63,column:6},end:{line:65,column:7}},type:"if",locations:[{start:{line:63,column:6},end:{line:65,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:63},1:{loc:{start:{line:63,column:10},end:{line:63,column:73}},type:"binary-expr",locations:[{start:{line:63,column:10},end:{line:63,column:31}},{start:{line:63,column:35},end:{line:63,column:73}}],line:63},2:{loc:{start:{line:90,column:6},end:{line:92,column:7}},type:"if",locations:[{start:{line:90,column:6},end:{line:92,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:90},3:{loc:{start:{line:98,column:6},end:{line:98,column:30}},type:"if",locations:[{start:{line:98,column:6},end:{line:98,column:30}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:98}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"5ff1b4bcb11e51d158fafb61c5f9281be39dd5cd",hash:"ef709b318f34c65ede90eb96903a31012b887d43"},i=t[l]||(t[l]={});i[n]&&i[n].hash===e||(i[n]=o);var c=i[n];return r=function(){return c},c}r();var m={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return r().f[0]++,r().s[0]++,"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return r().f[1]++,r().s[1]++,u}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return r().f[2]++,r().s[2]++,{editor:null}},computed:{editorOptions:function(){r().f[3]++;var n=(r().s[3]++,Object.assign({},u,this.options));return r().s[4]++,n.initialEditType=this.mode,r().s[5]++,n.height=this.height,r().s[6]++,n.language=this.language,r().s[7]++,n}},watch:{value:function(n,e){r().f[4]++,r().s[8]++,r().b[1][0]++,n!==e&&(r().b[1][1]++,n!==this.editor.getMarkdown())?(r().b[0][0]++,r().s[9]++,this.editor.setMarkdown(n)):r().b[0][1]++},language:function(n){r().f[5]++,r().s[10]++,this.destroyEditor(),r().s[11]++,this.initEditor()},height:function(n){r().f[6]++,r().s[12]++,this.editor.height(n)},mode:function(n){r().f[7]++,r().s[13]++,this.editor.changeMode(n)}},mounted:function(){r().f[8]++,r().s[14]++,this.initEditor()},destroyed:function(){r().f[9]++,r().s[15]++,this.destroyEditor()},methods:{initEditor:function(){var n=this;r().f[10]++,r().s[16]++,this.editor=new d["default"](Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),r().s[17]++,this.value?(r().b[2][0]++,r().s[18]++,this.editor.setMarkdown(this.value)):r().b[2][1]++,r().s[19]++,this.editor.on("change",(function(){r().f[11]++,r().s[20]++,n.$emit("input",n.editor.getMarkdown())}))},destroyEditor:function(){if(r().f[12]++,r().s[21]++,!this.editor)return r().b[3][0]++,void r().s[22]++;r().b[3][1]++,r().s[23]++,this.editor.off("change"),r().s[24]++,this.editor.remove()},setVlaue:function(n){r().f[13]++,r().s[25]++,this.editor.setMarkdown(n)},getVlaue:function(){return r().f[14]++,r().s[26]++,this.editor.getMarkdown()},setHtml:function(n){r().f[15]++,r().s[27]++,this.editor.setHtml(n)},getHtml:function(){return r().f[16]++,r().s[28]++,this.editor.getHtml()}}},f=m,h=t("2877"),b=Object(h["a"])(f,i,c,!1,null,null,null),p=b.exports;function v(){var n="/Users/sunshine/Documents/project/vue-element-admin/src/views/components-demo/markdown.vue",e="1bb12df8aa1daabdba86f461c7776b4e31f4832b",t=new Function("return this")(),l="__coverage__",o={path:"/Users/sunshine/Documents/project/vue-element-admin/src/views/components-demo/markdown.vue",statementMap:{0:{start:{line:55,column:16},end:{line:62,column:1}},1:{start:{line:67,column:4},end:{line:78,column:5}},2:{start:{line:82,column:6},end:{line:82,column:40}},3:{start:{line:87,column:6},end:{line:87,column:53}},4:{start:{line:88,column:6},end:{line:88,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:66,column:2},end:{line:66,column:3}},loc:{start:{line:66,column:9},end:{line:79,column:3}},line:66,hash:"2e113a63577ab47f163b12f35f2e4c9b5a9adf13"},1:{name:"(anonymous_1)",decl:{start:{line:81,column:4},end:{line:81,column:5}},loc:{start:{line:81,column:15},end:{line:83,column:5}},line:81,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"},2:{name:"(anonymous_2)",decl:{start:{line:86,column:4},end:{line:86,column:5}},loc:{start:{line:86,column:14},end:{line:89,column:5}},line:86,hash:"404d31e25df5ed67ecd037394dcff8ff62d14be5"}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0,2:0},b:{},_coverageSchema:"5ff1b4bcb11e51d158fafb61c5f9281be39dd5cd",hash:"1bb12df8aa1daabdba86f461c7776b4e31f4832b"},i=t[l]||(t[l]={});i[n]&&i[n].hash===e||(i[n]=o);var c=i[n];return v=function(){return c},c}v();var g=(v().s[0]++,"\n**This is test**\n\n* vue\n* element\n* webpack\n\n"),_={name:"MarkdownDemo",components:{MarkdownEditor:p},data:function(){return v().f[0]++,v().s[1]++,{content1:g,content2:g,content3:g,content4:g,html:"",languageTypeList:{en:"en_US",zh:"zh_CN",es:"es_ES"}}},computed:{language:function(){return v().f[1]++,v().s[2]++,this.languageTypeList["en"]}},methods:{getHtml:function(){v().f[2]++,v().s[3]++,this.html=this.$refs.markdownEditor.getHtml(),v().s[4]++,console.log(this.html)}}},w=_,y=(t("c270"),Object(h["a"])(w,l,o,!1,null,"76fc6684",null));e["default"]=y.exports},a509:function(n,e,t){},c270:function(n,e,t){"use strict";t("a509")}}]);