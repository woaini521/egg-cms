(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce2d3840"],{"02dd":function(e,t,n){"use strict";var r=n("ebfe"),o=n("708d"),i=n("5152"),l=n("9ba3"),a=n("4f56"),s=n("97d7");r("match",1,(function(e,t,n){return[function(t){var n=l(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var l=o(e),c=String(this);if(!l.global)return s(l,c);var u=l.unicode;l.lastIndex=0;var p,m=[],d=0;while(null!==(p=s(l,c))){var f=String(p[0]);m[d]=f,""===f&&(l.lastIndex=a(c,i(l.lastIndex),u)),d++}return 0===d?null:m}]}))},"19f4":function(e,t,n){"use strict";var r=n("ec1d"),o=n("8ff4"),i=RegExp.prototype.exec,l=String.prototype.replace,a=i,s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=s||u||c;p&&(a=function(e){var t,n,o,a,p=this,m=c&&p.sticky,d=r.call(p),f=p.source,h=0,v=e;return m&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,h++),n=new RegExp("^(?:"+f+")",d)),u&&(n=new RegExp("^"+f+"$(?!\\s)",d)),s&&(t=p.lastIndex),o=i.call(m?n:p,v),m?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:s&&o&&(p.lastIndex=p.global?o.index+o[0].length:t),u&&o&&o.length>1&&l.call(o[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),e.exports=a},"4f56":function(e,t,n){"use strict";var r=n("165d").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"6a22":function(e,t,n){"use strict";var r=n("bbcf"),o=n("19f4");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},"6eb7":function(e,t,n){"use strict";n("8335")},8335:function(e,t,n){},"8ff4":function(e,t,n){"use strict";var r=n("e4bd");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"97d7":function(e,t,n){var r=n("40e6"),o=n("19f4");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},ebfe:function(e,t,n){"use strict";n("6a22");var r=n("58e4"),o=n("e4bd"),i=n("19d6"),l=n("19f4"),a=n("d655"),s=i("species"),c=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),m=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var f=i(e),h=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=h&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!v||"replace"===e&&(!c||!u||m)||"split"===e&&!d){var b=/./[f],g=n(f,""[e],(function(e,t,n,r,o){return t.exec===l?h&&!o?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),x=g[0],y=g[1];r(String.prototype,e,x),r(RegExp.prototype,f,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}p&&a(RegExp.prototype[f],"sham",!0)}},f794:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.app.loading,expression:"$store.state.app.loading"}],attrs:{data:e.menuList,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"title",label:"菜单名称","show-overflow-tooltip":!0,width:"160"}}),n("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("svg-icon",{attrs:{"icon-class":e.row.icon}})]}}])}),n("el-table-column",{attrs:{prop:"orderNum",label:"排序",width:"60"}}),n("el-table-column",{attrs:{prop:"perms",label:"权限标识","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"component",label:"组件名","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"status",label:"状态",formatter:e.statusFormat,width:"80"}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createdAt",formatter:e.dateFormatter}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:menu:update"],expression:"['system:menu:update']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(n){return e.handleAdd(t.row)}}},[e._v("新增")]),n("el-button",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:menu:delete"],expression:"['system:menu:delete']"}],staticClass:"delete",attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"上级菜单"}},[n("treeselect",{attrs:{options:e.menuOptions,normalizer:e.normalizer,"show-count":!0,placeholder:"选择上级菜单"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"菜单类型",prop:"menuType"}},[n("el-radio-group",{model:{value:e.form.menuType,callback:function(t){e.$set(e.form,"menuType",t)},expression:"form.menuType"}},[n("el-radio",{attrs:{label:"M"}},[e._v("目录")]),n("el-radio",{attrs:{label:"C"}},[e._v("菜单")]),n("el-radio",{attrs:{label:"F"}},[e._v("按钮")])],1)],1)],1),n("el-col",{attrs:{span:24}},["F"!==e.form.menuType?n("el-form-item",{attrs:{label:"菜单图标"}},[n("el-popover",{attrs:{placement:"bottom-start",width:"460",trigger:"click"},on:{show:function(t){return e.$refs["iconSelect"].reset()}}},[n("IconSelect",{ref:"iconSelect",on:{selected:e.selected}}),n("el-input",{attrs:{slot:"reference",placeholder:"点击选择图标, 输入 # 代表不使用",clearable:""},slot:"reference",model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},[e.form.icon?n("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"32px",width:"16px"},attrs:{slot:"prefix","icon-class":e.form.icon},slot:"prefix"}):n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1):e._e()],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"title"}},[n("el-input",{attrs:{placeholder:"请输入菜单名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"显示排序",prop:"orderNum"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1)],1),n("el-col",{attrs:{span:12}},["F"!==e.form.menuType?n("el-form-item",{attrs:{label:"是否外链"}},[n("el-radio-group",{model:{value:e.form.isFrame,callback:function(t){e.$set(e.form,"isFrame",t)},expression:"form.isFrame"}},[n("el-radio",{attrs:{label:"0"}},[e._v("是")]),n("el-radio",{attrs:{label:"1"}},[e._v("否")])],1)],1):e._e()],1),n("el-col",{attrs:{span:12}},["F"!==e.form.menuType?n("el-form-item",{attrs:{label:"路由地址",prop:"path"}},[n("el-input",{attrs:{placeholder:"请输入路由地址"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1):e._e()],1),"C"===e.form.menuType||"M"===e.form.menuType?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"组件名",prop:"component"}},[n("el-input",{attrs:{placeholder:"请输入组件名"},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1):e._e(),n("el-col",{attrs:{span:12}},["M"!==e.form.menuType?n("el-form-item",{attrs:{label:"权限标识"}},[n("el-input",{attrs:{placeholder:"请权限标识",maxlength:"50"},model:{value:e.form.perms,callback:function(t){e.$set(e.form,"perms",t)},expression:"form.perms"}})],1):e._e()],1),n("el-col",{attrs:{span:12}},["F"!==e.form.menuType?n("el-form-item",{attrs:{label:"显示状态"}},[n("el-radio-group",{model:{value:e.form.visible,callback:function(t){e.$set(e.form,"visible",t)},expression:"form.visible"}},e._l(e.visibleOptions,(function(t){return n("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1):e._e()],1),n("el-col",{attrs:{span:12}},["F"!==e.form.menuType?n("el-form-item",{attrs:{label:"菜单状态"}},[n("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return n("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1):e._e()],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],i=(n("957b"),n("a6dc")),l=n("7d66"),a=n.n(l),s=(n("5166"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-body"},[n("el-input",{staticStyle:{position:"relative"},attrs:{clearable:"",placeholder:"请输入图标名称"},on:{clear:e.filterIcons},nativeOn:{input:function(t){return e.filterIcons(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),n("div",{staticClass:"icon-list"},e._l(e.iconList,(function(t,r){return n("div",{key:r,on:{click:function(n){return e.selectedIcon(t)}}},[n("svg-icon",{staticStyle:{height:"30px",width:"16px"},attrs:{"icon-class":t}}),n("span",[e._v(e._s(t))])],1)})),0)],1)}),c=[],u=(n("3f4b"),n("4318"),n("1e6a"),n("2e4f"),n("4d20"),n("6a22"),n("02dd"),n("659e"),n("4824")),p=function(e){return e.keys()},m=/\.\/(.*)\.svg/,d=p(u).map((function(e){return e.match(m)[1]})),f=d,h={name:"IconSelect",data:function(){return{name:"",iconList:f}},methods:{filterIcons:function(){var e=this;this.iconList=f,this.name&&(this.iconList=this.iconList.filter((function(t){return t.includes(e.name)})))},selectedIcon:function(e){this.$emit("selected",e),document.body.click()},reset:function(){this.name="",this.iconList=f}}},v=h,b=(n("6eb7"),n("5d22")),g=Object(b["a"])(v,s,c,!1,null,"192214d0",null),x=g.exports,y={name:"Menu",components:{Treeselect:a.a,IconSelect:x},data:function(){return{menuList:[],multiple:!0,menuOptions:[],title:"",open:!1,visibleOptions:[],statusOptions:[],form:{},rules:{title:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}],path:[{required:!0,message:"路由地址不能为空",trigger:"blur"}],component:[{required:!0,message:"组件不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_show_hide").then((function(t){e.visibleOptions=t.data})),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data}))},methods:{selected:function(e){this.form.icon=e},getList:function(){var e=this;Object(i["c"])().then((function(t){e.menuList=e.handleTree(t.data.rows,"id","parentId").tree}))},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.id,label:e.title,children:e.children}},getTreeselect:function(){var e=this;Object(i["c"])().then((function(t){e.menuOptions=[{id:0,title:"主目录",children:e.handleTree(t.data.rows,"id").tree}]}))},statusFormat:function(e,t){return"F"===e.menuType?"":this.selectDictLabel(this.statusOptions,e.status)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:void 0,parentId:0,title:void 0,icon:void 0,menuType:"M",orderNum:void 0,isFrame:"1",visible:"1",status:"1"},this.resetForm("form")},handleQuery:function(){this.getList()},handleAdd:function(e){this.reset(),this.getTreeselect(),null!=e&&(this.form.parentId=e.id),this.open=!0,this.title="添加菜单"},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect(),Object(i["d"])(e.id).then((function(e){t.form=e.data,t.open=!0,t.title="修改菜单"}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){t&&(void 0!==e.form.id?Object(i["f"])(e.form).then((function(t){e.$httpResponse(t.message),e.open=!1,e.getList()})):(e.form.roleIds=e.$store.state.user.userInfo.user.roles.map((function(e){return e.id})),Object(i["a"])(e.form).then((function(t){e.$httpResponse(t.message),e.open=!1,e.getList()}))))}))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.title+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(i["b"])(e.id)})).then((function(){t.getList(),t.$httpResponse("删除成功")})).catch((function(){}))}}},_=y,w=Object(b["a"])(_,r,o,!1,null,null,null);t["default"]=w.exports}}]);