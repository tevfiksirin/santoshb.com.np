(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{207:function(t,n,e){},219:function(t,n,e){"use strict";var l=e(207);e.n(l).a},241:function(t,n,e){"use strict";e.r(n);var l={components:{ImageTransition:function(){return e.e(16).then(e.bind(null,239))}},data:function(){return{images:[{name:"Vue.js",image:"image/technology/vuejs.png"},{name:"Nuxt.js",image:"image/technology/nuxtjs.png"},{name:"Github",image:"image/technology/github.png"},{name:"Git",image:"image/technology/git.png"},{name:"Bootstrap",image:"image/technology/bootstrap.png"},{name:"Node.js",image:"image/technology/nodejs.png"},{name:"VS Code",image:"image/technology/vscode.png"}],skills:[{title:"Programming Languages",id:"skill-languages",rating:4,list:[{name:"Javascript",strong:!0},{name:"C"},{name:"C++"},{name:"HTML"},{name:"Visual Basics"},{name:"SQL",strong:!0}]},{title:"Front End Technologies",id:"skill-front-end",rating:3,list:[{name:"Vue.js"},{name:"Nuxt.js",strong:!0},{name:"CSS"},{name:"SCSS"},{name:"Bootstrap",strong:!0},{name:"Bulma"}]},{title:"VC & CI",id:"skill-vc-ci",rating:4,list:[{name:"Git",strong:!0},{name:"Travis CI"}]},{title:"Others",id:"skill-tools",rating:4,list:[{name:"Github desktop",strong:!0},{name:"Visual Studio"},{name:"Visual Studio Code",strong:!0},{name:"JSON",strong:!0}]}]}},methods:{getSkillName:function(t,n,e){return"".concat(t).concat(n<e-1?", ":"")}}},o=(e(219),e(60)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("b-row",{staticClass:"pt-5",attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"7",lg:"8"}},t._l(t.skills,(function(n,i){return e("div",{key:"skillset-"+i,staticClass:"pt-2 pb-3"},[e("h4",[e("span",{staticClass:"mr-3"},[t._v(t._s(n.title))]),t._v(" "),t._l(5,(function(t){return e("b-icon",{key:"skillset-"+i+"-value-"+t,staticClass:"mr-1",attrs:{"font-scale":"0.85",rotate:"45",icon:t<=n.rating?"star-fill":"star",color:t<=n.rating?"orange":"black"}})}))],2),t._v(" "),t._l(n.list,(function(l,o){return e("span",{key:"skillset-"+i+"-skill-"+o,class:l.strong?"font-weight-bold":""},[e("i",[t._v(t._s(t.getSkillName(l.name,o,n.list.length)))])])}))],2)})),0),t._v(" "),e("b-col",{staticClass:"d-none d-md-block"},[e("ImageTransition",{attrs:{list:t.images}})],1)],1)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"h3 font-weight-bold"},[n("u",[this._v("My skills")])])}],!1,null,"bff73bcc",null);n.default=component.exports}}]);