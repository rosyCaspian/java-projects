(function(t){function s(s){for(var e,a,c=s[0],r=s[1],l=s[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,s=0;s<i.length;s++){for(var n=i[s],e=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(e=!1)}e&&(i.splice(s--,1),t=a(a.s=n[0]))}return t}var e={},o={app:0},i=[];function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,s,n){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)a.d(n,e,function(s){return t[s]}.bind(null,e));return n},a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("56d7")},"018b":function(t,s,n){"use strict";var e=n("1f6e"),o=n.n(e);o.a},"034f":function(t,s,n){"use strict";var e=n("85ec"),o=n.n(e);o.a},1:function(t,s){},1316:function(t,s,n){"use strict";var e=n("ae84"),o=n.n(e);o.a},"1f6e":function(t,s,n){},"404f":function(t,s,n){},"4e81":function(t,s,n){"use strict";var e=n("a36a"),o=n.n(e);o.a},"56d7":function(t,s,n){"use strict";n.r(s);n("e623"),n("e379"),n("5dc8"),n("37e1");var e=n("a026"),o=n("28dd"),i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("navmenu")],1)},a=[],c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("div",{staticClass:"nav"},[n("div",{staticClass:"icon"},[t._v("Bank")]),n("div",{staticClass:"transaction",on:{click:function(s){return t.tabChange("/transaction")}}},[n("i",{staticClass:"el-icon-coin"})]),n("div",{staticClass:"users",on:{click:function(s){return t.tabChange("/users")}}},[n("i",{staticClass:"el-icon-user"})])]),n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},r=[],l={name:"navmenu",data:function(){return{}},methods:{tabChange:function(t){this.$router.push(t)}},mounted:function(){this.$router.push("/transaction")}},u=l,d=(n("1316"),n("2877")),p=Object(d["a"])(u,c,r,!1,null,"f2ada10e",null),v=p.exports,h={name:"app",data:function(){return{}},components:{navmenu:v},mounted:function(){this.$message({message:"Welcome to My Bank",duration:2e3,center:!0,iconClass:"el-icon-sunny",customClass:"welcome"})},methods:{}},f=h,_=(n("034f"),Object(d["a"])(f,i,a,!1,null,null,null)),C=_.exports,y=n("5c96"),b=n.n(y);n("0fae");e["default"].use(b.a);var g=n("8c4f"),w=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"top"},[n("el-col",{attrs:{span:t.titlesize}},[n("div",{staticClass:"top-title"},[t._v("Transaction System")])]),n("el-col",{staticClass:"controll-button",attrs:{span:t.buttonsize}},[n("el-button",{attrs:{type:t.buttontype,round:"",disabled:t.inprocess},on:{click:function(s){t.flash(),t.start()}}},[t._v(t._s(t.buttontitle))])],1),n("el-col",{staticClass:"controll-button",attrs:{span:t.roundsize}},[n("div",{staticClass:"up"},[t._v("Round")]),n("div",{staticClass:"down"},[t._v(t._s(t.round))])])],1),n("el-row",{staticClass:"content"},[n("el-col",{attrs:{span:12}},[n("transdialog",{staticClass:"dialog",attrs:{type:"Deposit into current account",icon:"el-icon-wallet",color:"in-color",records:t.records_deposit_current}})],1),n("el-col",{attrs:{span:12}},[n("transdialog",{staticClass:"dialog",attrs:{type:"Withdrawal from current account",icon:"el-icon-bank-card",color:"in-color",records:t.records_withdrawal_current}})],1)],1),n("el-row",{staticClass:"content"},[n("el-col",{attrs:{span:12}},[n("transdialog",{staticClass:"dialog",attrs:{type:"Deposit into savings account",icon:"el-icon-wallet",color:"out-color",records:t.records_deposit_savings}})],1),n("el-col",{attrs:{span:12}},[n("transdialog",{staticClass:"dialog",attrs:{type:"Withdrawal from savings account",icon:"el-icon-bank-card",color:"out-color",records:t.records_withdrawal_savings}})],1)],1),n("el-row",{staticClass:"content"},[n("el-col",{attrs:{span:24}},[n("transdialoglog",{staticClass:"dialog",attrs:{type:"Pay monies",icon:"el-icon-wallet",color:"out-color",records:t.records_pay_monies}})],1)],1)],1)},m=[],$=(n("13d5"),n("b0c0"),function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"top"},[n("el-col",{attrs:{span:22}},[n("div",{staticClass:"title"},[t._v(t._s(t.type))])]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"icon"},[n("i",{class:t.icon+" "+t.color})])])],1),n("div",{staticClass:"line"}),n("div",{ref:"chatContent",staticClass:"content"},t._l(t.records,(function(s,e){return n("el-row",{key:e,staticClass:"record"},[n("div",{staticClass:"status"},[n("i",{staticClass:"el-icon-success"}),t._v(" "+t._s(s.status)+" ")]),n("div",{staticClass:"id"},[n("div",{staticClass:"up"},[t._v("ID")]),n("div",{staticClass:"down"},[t._v(t._s(s.id))])]),n("div",{staticClass:"client"},[n("div",{staticClass:"up"},[t._v("Client")]),n("div",{staticClass:"down"},[t._v(t._s(s.client))])]),n("div",{staticClass:"overall"},[n("div",{staticClass:"up"},[t._v("Overall")]),n("div",{staticClass:"down"},[t._v(" "+t._s("£"+parseFloat(s.overall).toFixed(2))+" ")])]),n("div",{staticClass:"round"},[n("div",{staticClass:"up",attrs:{div:""}},[t._v("Round")]),n("div",{staticClass:"down"},[t._v(t._s(s.round))])])])})),1)],1)}),x=[],k=n("53ca"),O={name:"transdialog",data:function(){return{}},props:["type","records","icon","color"],watch:{records:function(){var t=this;this.$nextTick((function(){try{void 0!=Object(k["a"])(t.$refs.chatContent.scrollHeigh)&&(t.$refs.chatContent.scrollTop=t.$refs.chatContent.scrollHeight)}catch(s){}}))}}},j=O,A=(n("af0c"),Object(d["a"])(j,$,x,!1,null,"7646f449",null)),T=A.exports,S=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"top"},[n("el-col",{attrs:{span:22}},[n("div",{staticClass:"title"},[t._v(t._s(t.type))])]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"icon"},[n("i",{class:t.icon+" "+t.color})])])],1),n("div",{staticClass:"line"}),n("div",{staticClass:"content"},t._l(t.records,(function(s,e){return n("el-row",{key:e,staticClass:"record"},[n("div",{staticClass:"status"},[n("i",{staticClass:"el-icon-success"}),t._v(" "+t._s(s.status)+" ")]),n("div",{staticClass:"id"},[n("div",{staticClass:"up"},[t._v("ID_In")]),n("div",{staticClass:"down"},[t._v(t._s(s.id_in))])]),n("div",{staticClass:"id"},[n("div",{staticClass:"up"},[t._v("ID_Out")]),n("div",{staticClass:"down"},[t._v(t._s(s.id_out))])]),n("div",{staticClass:"client"},[n("div",{staticClass:"up"},[t._v("ClientIn")]),n("div",{staticClass:"down"},[t._v(t._s(s.client_in))])]),n("div",{staticClass:"client"},[n("div",{staticClass:"up"},[t._v("ClientOut")]),n("div",{staticClass:"down"},[t._v(t._s(s.client_out))])]),n("div",{staticClass:"overall"},[n("div",{staticClass:"up"},[t._v("MonyOut")]),n("div",{staticClass:"down"},[t._v(" "+t._s("£"+parseFloat(s.money_out).toFixed(2))+" ")])]),n("div",{staticClass:"overall"},[n("div",{staticClass:"up"},[t._v("MonyIn")]),n("div",{staticClass:"down"},[t._v(" "+t._s("£"+parseFloat(s.money_in).toFixed(2))+" ")])]),n("div",{staticClass:"overall"},[n("div",{staticClass:"up"},[t._v("Overall")]),n("div",{staticClass:"down"},[t._v(" "+t._s("£"+parseFloat(s.overall).toFixed(2))+" ")])]),n("div",{staticClass:"round"},[n("div",{staticClass:"up",attrs:{div:""}},[t._v("Round")]),n("div",{staticClass:"down"},[t._v(t._s(s.round))])])])})),1)],1)},I=[],R={name:"transdialog",data:function(){return{}},props:["type","records","icon","color"],watch:{records:function(){var t=this;this.$nextTick((function(){try{void 0!=Object(k["a"])(t.$refs.chatContent.scrollHeigh)&&(t.$refs.chatContent.scrollTop=t.$refs.chatContent.scrollHeight)}catch(s){}}))}}},F=R,M=(n("018b"),Object(d["a"])(F,S,I,!1,null,"02b18f21",null)),P=M.exports,z={name:"transaction",data:function(){return{round:0,maxRound:10,buttontitle:"Start",buttontype:"warning",inprocess:!1,titlesize:18,buttonsize:3,roundsize:3,records:[],records_deposit_current:[],records_withdrawal_current:[],records_deposit_savings:[],records_withdrawal_savings:[],records_pay_monies:[]}},components:{transdialog:T,transdialoglog:P},mounted:function(){this.$http.get("http://localhost:8080/bank/record").then((function(t){try{this.round=t.body[t.body.length-1].round}catch(s){this.round=0}this.records=t.body,this.records_deposit_current=t.body.reduce((function(t,s){return"depositCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_current=t.body.reduce((function(t,s){return"withdrawalCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_deposit_savings=t.body.reduce((function(t,s){return"depositSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_savings=t.body.reduce((function(t,s){return"withdrawSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_pay_monies=t.body.reduce((function(t,s){return"payMonies"===s.type&&t.push(s),t}),[])}),(function(t){console.log("fail...",t)}))},methods:{update_s:function(){this.$http.get("http://localhost:8080/bank/record").then((function(t){try{this.round=t.body[t.body.length-1].round}catch(s){this.round=0}this.records=t.body,this.records_deposit_current=t.body.reduce((function(t,s){return"depositCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_current=t.body.reduce((function(t,s){return"withdrawalCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_deposit_savings=t.body.reduce((function(t,s){return"depositSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_savings=t.body.reduce((function(t,s){return"withdrawSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_pay_monies=t.body.reduce((function(t,s){return"payMonies"===s.type&&t.push(s),t}),[])}))},update:function(){this.$http.get("http://localhost:8080/bank/record").then((function(t){var s=this;try{this.round=t.body[t.body.length-1].round}catch(n){this.round=0}this.records=t.body,this.records_deposit_current=t.body.reduce((function(t,s){return"depositCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_current=t.body.reduce((function(t,s){return"withdrawalCurrentAccount"===s.type&&t.push(s),t}),[]),this.records_deposit_savings=t.body.reduce((function(t,s){return"depositSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_withdrawal_savings=t.body.reduce((function(t,s){return"withdrawSavingsAccount"===s.type&&t.push(s),t}),[]),this.records_pay_monies=t.body.reduce((function(t,s){return"payMonies"===s.type&&t.push(s),t}),[]),this.update_s(),this.round=parseInt(this.round),this.maxRound=parseInt(this.maxRound),this.round>=10&&this.round%10===0&&(this.buttontitle="Phrase",this.buttontype="success",this.titlesize=18,this.buttonsize=3,this.inprocess=!1),this.round<this.maxRound?setTimeout((function(){s.update_s(),s.start()}),5e3):this.maxRound=parseInt(this.maxRound)+10}),(function(t){console.log("fail...",t)}))},process:function(){this.$http.get("http://localhost:8080/bank/start").then((function(t){var s=this,n=t.body,e=this.$loading({lock:!0,text:n.transaction_type+" is chosen~",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"});setTimeout((function(){var t,o;e.close(),"payMonies"!==n.type_of_customer?(t=n.name+"'s "+n.type_of_customer+" "+n.overall+".00",s.$message({showClose:!0,message:t,type:"success",duration:3600})):(t=n.name_1+"'s Current Account - £"+n.overall+".00",o=n.name_2+"'s Current Account + £"+n.overall+".00",s.$message({showClose:!0,message:t,type:"success",duration:2e3}),setTimeout((function(){s.$message({showClose:!0,message:o,type:"success",duration:2e3})}),2200)),s.update()}),2600)}),(function(t){console.log("fail...",t)}))},flash:function(){if("Start"===this.buttontitle){try{this.maxRound=parseInt(this.records[this.records.length-1].round)+10}catch(t){this.maxRound=10}this.buttontitle="Processing",this.inprocess=!0,this.buttontype="info",this.titlesize=17,this.buttonsize=4}},start:function(){var t=this;if(this.update_s(),"Phrase"!==this.buttontitle){var s=this.$loading({text:"Transaction in progress...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"});setTimeout((function(){s.close()}),1800),setTimeout((function(){t.process()}),2e3)}else{this.$http.get("http://localhost:8080/bank/phrase").then((function(t){})),this.buttontitle="Start",this.buttontype="warning";var n=this.$createElement;this.$notify({type:"success",title:"Bank phrase success",offset:105,duration:2600,message:n("i",{style:"color: teal"},"Interest has been calculated and distributed to user accounts～")}),setTimeout((function(){t.$router.push("/users")}),2600)}}}},D=z,E=(n("5850"),Object(d["a"])(D,w,m,!1,null,"ac4126aa",null)),H=E.exports,B=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"top"},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"top-title"},[t._v("Users Information")])])],1),n("div",{staticClass:"content"},t._l(t.usersData,(function(t,s){return n("userdialog",{key:s,staticClass:"content-dialog",attrs:{id:t.id,savingaccount:t.savings_account,currentaccount:t.current_acccount,name:t.name,accounttype:t.type_of_customer,overall:t.current_acccount+t.savings_account,gender:t.gender}})})),1)],1)},W=[],J=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("el-row",{staticClass:"top"},[n("el-col",{attrs:{span:19}},[n("div",{staticClass:"top-title"},[t._v(t._s(t.name))])])],1),n("el-row",{staticClass:"information"},[n("el-col",{staticClass:"info-block",attrs:{span:8}},[n("div",{staticClass:"info-content"},[n("div",{staticClass:"info-content-up"},[n("div",{staticClass:"info-content-up-title"},[t._v("ID")]),n("div",{staticClass:"info-content-up-content"},[t._v(t._s(t.id))])]),n("div",{staticClass:"info-line-row"}),n("div",{staticClass:"info-content-down"},[n("div",{staticClass:"info-content-down-title"},[t._v("Saving Account")]),n("div",{staticClass:"info-content-down-content"},[t._v(t._s("£"+t.savingaccount.toFixed(2)))])])]),n("div",{staticClass:"info-line-1"})]),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"info-content"},[n("div",{staticClass:"info-content-up"},[n("div",{staticClass:"info-content-up-title"},[t._v("Gender")]),n("div",{staticClass:"info-content-up-content"},[t._v(t._s(t.gender))])]),n("div",{staticClass:"info-line-row"}),n("div",{staticClass:"info-content-down"},[n("div",{staticClass:"info-content-down-title"},[t._v("Current Account")]),n("div",{staticClass:"info-content-down-content"},[t._v(t._s("£"+t.currentaccount.toFixed(2)))])])]),n("div",{staticClass:"info-line-2"})]),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"info-content"},[n("div",{staticClass:"info-content-up"},[n("div",{staticClass:"info-content-up-title"},[t._v("Account Type")]),n("div",{staticClass:"info-content-up-content"},[t._v(t._s(t.accounttype))])]),n("div",{staticClass:"info-line-row"}),n("div",{staticClass:"info-content-down"},[n("div",{staticClass:"info-content-down-title"},[t._v("Overall")]),n("div",{staticClass:"info-content-down-content"},[t._v(t._s("£"+t.overall.toFixed(2)))])])])])],1)],1)},U=[],G={name:"userdialog",data:function(){return{isNewRecord:!0}},props:["id","savingaccount","gender","currentaccount","accounttype","overall","name"],mounted:function(){},methods:{}},N=G,q=(n("68b2"),Object(d["a"])(N,J,U,!1,null,"83c51e4e",null)),K=q.exports,L={name:"users",data:function(){return{usersData:[]}},components:{userdialog:K},mounted:function(){this.$http.get("http://localhost:8080/bank/info").then((function(t){this.usersData=t.body}),(function(t){console.log("fail...",t)}))}},Q=L,V=(n("4e81"),Object(d["a"])(Q,B,W,!1,null,"bf51c2b6",null)),X=V.exports;e["default"].use(g["a"]);var Y=[{path:"/transaction",name:"Transaction",component:H},{path:"/users",name:"Users",component:X}],Z=new g["a"]({routes:Y}),tt=g["a"].prototype.push;g["a"].prototype.push=function(t){return tt.call(this,t).catch((function(t){return t}))};var st=Z;e["default"].use(o["a"]),e["default"].config.productionTip=!1,new e["default"]({router:st,render:function(t){return t(C)}}).$mount("#app")},5850:function(t,s,n){"use strict";var e=n("d24b"),o=n.n(e);o.a},"68b2":function(t,s,n){"use strict";var e=n("404f"),o=n.n(e);o.a},"85ec":function(t,s,n){},a36a:function(t,s,n){},ae84:function(t,s,n){},af0c:function(t,s,n){"use strict";var e=n("bf61"),o=n.n(e);o.a},bf61:function(t,s,n){},d24b:function(t,s,n){}});