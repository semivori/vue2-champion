(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue2-champion/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._v(" PES2021 "),a("div",{attrs:{id:"panel"}},[a("button",{staticClass:"btn btn-sm btn-primary mr-2",attrs:{type:"button"},on:{click:t.dump}},[t._v(" Export ")]),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:t.reset}},[t._v(" Reset ")])]),t.configStatus?t.teamsStatus?t.matchesStatus?a("div",[a("matches"),a("hr"),a("h5",{staticClass:"mt-4 mb-2"},[t._v("Table")]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-4"},[a("standings")],1)])],1):t._e():a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12"},[a("teams-form")],1)]):a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-6"},[a("config-form")],1)])])},r=[],o=a("5530"),i=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Settings")]),a("div",{staticClass:"row form-group"},[a("label",{staticClass:"col-6 col-form-label"},[t._v(" Teams: ")]),a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.teams,expression:"teams"}],staticClass:"form-control",attrs:{type:"number",disabled:t.status,required:""},domProps:{value:t.teams},on:{input:function(e){e.target.composing||(t.teams=e.target.value)}}})])]),a("div",{staticClass:"row form-group"},[a("label",{staticClass:"col-6 col-form-label"},[t._v(" Laps: ")]),a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.laps,expression:"laps"}],staticClass:"form-control",attrs:{type:"number",disabled:t.status,required:""},domProps:{value:t.laps},on:{input:function(e){e.target.composing||(t.laps=e.target.value)}}})])]),a("div",{staticClass:"row form-group"},[a("label",{staticClass:"col-6 col-form-label"},[t._v(" Random Mode: ")]),a("div",{staticClass:"col-6 text-left"},[a("button",{class:"btn btn-sm btn-"+(t.randomMode?"primary":"danger"),attrs:{type:"button"},on:{click:t.toggleRandomMode}},[t._v(" "+t._s(t.randomMode?"On":"Off")+" ")])])]),a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:t.save}},[t._v(" Save ")])])])},l=[],u={name:"ConfigForm",computed:{teams:{get:function(){return this.$store.state.config.teams},set:function(t){this.$store.commit("setConfig",{teams:t})}},laps:{get:function(){return this.$store.state.config.laps},set:function(t){this.$store.commit("setConfig",{laps:t})}},status:{get:function(){return this.$store.state.config.status}},randomMode:{get:function(){return this.$store.state.config.randomMode}}},methods:{toggleRandomMode:function(){this.$store.commit("toggleRandomMode")},save:function(){this.$store.commit("saveConfig")}}},m=u,d=a("2877"),f=Object(d["a"])(m,c,l,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-0"},[a("h5",{staticClass:"card-header mb-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[t.round>1?a("button",{staticClass:"btn btn-sm btn-link",attrs:{type:"button"},on:{click:function(e){return t.decrementRound()}}},[t._v(" Prev ")]):t._e()]),a("div",{staticClass:"col-6"},[t._v(" Round "+t._s(t.round)+" "),a("br"),t.randomMode?a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.playRandom}},[t._v("Play Random")]):t._e()]),a("div",{staticClass:"col-3"},[t.round<t.numberOfRounds?a("button",{staticClass:"btn btn-sm btn-light",attrs:{type:"button"},on:{click:function(e){return t.incrementRound()}}},[t._v(" Next ")]):t._e()])])]),a("round",{attrs:{number:t.round}})],1)])},v=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-group"},t._l(t.matches,(function(t){return a("div",{key:t.id,staticClass:"list-group-item"},[a("match-form",{attrs:{match:t}})],1)})),0)},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v(" "+t._s(t.match.homeTeam.name)+" "),t.match.isPlayable?a("span",{class:"badge badge-pill badge-"+t.homeColor},[t._v("###")]):t._e()]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.homeScore,expression:"homeScore"}],staticClass:"form-control text-center",attrs:{type:"number",disabled:!t.match.isPlayable},domProps:{value:t.homeScore},on:{input:function(e){e.target.composing||(t.homeScore=e.target.value)}}})]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.awayScore,expression:"awayScore"}],staticClass:"form-control text-center",attrs:{type:"number",disabled:!t.match.isPlayable},domProps:{value:t.awayScore},on:{input:function(e){e.target.composing||(t.awayScore=e.target.value)}}})]),a("div",{staticClass:"col-4"},[t._v(" "+t._s(t.match.awayTeam.name)+" "),t.match.isPlayable?a("span",{class:"badge badge-pill badge-"+t.awayColor},[t._v("###")]):t._e()])]),t.randomMode?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v(" User: "+t._s(t.match.homeTeam.user.name)+" "),a("br"),t._v(" Player: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.homePlayerId,expression:"homePlayerId"}],attrs:{disabled:!t.match.isPlayable},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.homePlayerId=e.target.multiple?a:a[0]}}},t._l(t.users,(function(e){return a("option",{key:e.id,domProps:{value:e.id,selected:e.id==t.homePlayerId}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"},[t._v(" User: "+t._s(t.match.awayTeam.user.name)+" "),a("br"),t._v(" Player: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.awayPlayerId,expression:"awayPlayerId"}],attrs:{disabled:!t.match.isPlayable},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.awayPlayerId=e.target.multiple?a:a[0]}}},t._l(t.users,(function(e){return a("option",{key:e.id,domProps:{value:e.id,selected:e.id==t.awayPlayerId}},[t._v(" "+t._s(e.name)+" ")])})),0)])])])},b=[],C=(a("ac1f"),a("466d"),"primary"),w="success",P={name:"MatchForm",props:["match"],computed:{randomMode:function(){return this.$store.state.config.randomMode},users:function(){return this.$store.state.users},homePlayer:{get:function(){return this.$store.getters.getUserById(this.match.homePlayerId)}},awayPlayer:{get:function(){return this.$store.getters.getUserById(this.match.awayPlayerId)}},homePlayerId:{get:function(){return this.match.homePlayerId},set:function(t){this.$store.commit("updateMatchHomePlayer",{match_id:this.match.id,player_id:t})}},awayPlayerId:{get:function(){return this.match.awayPlayerId},set:function(t){this.$store.commit("updateMatchAwayPlayer",{match_id:this.match.id,player_id:t})}},homeScore:{get:function(){return this.match.hc_score},set:function(t){isNaN(t)||this.$store.commit("updateMatchScore",{id:this.match.id,hc_score:+t})}},awayScore:{get:function(){return this.match.ac_score},set:function(t){isNaN(t)||this.$store.commit("updateMatchScore",{id:this.match.id,ac_score:+t})}},homeColor:function(){return 1==this.homePlayerId?C:w},awayColor:function(){return 1==this.awayPlayerId?C:w}}},O=P,j=Object(d["a"])(O,y,b,!1,null,null,null),x=j.exports,M={props:["number"],components:{MatchForm:x},computed:{matches:function(){return this.$store.getters.getRoundMatches(this.number)}}},T=M,S=Object(d["a"])(T,g,_,!1,null,null,null),$=S.exports,I={components:{Round:$},data:function(){return{round:1}},computed:{numberOfRounds:function(){return this.$store.getters.numberOfRounds},randomMode:function(){return this.$store.state.config.randomMode}},methods:{incrementRound:function(){this.round=this.round+1},decrementRound:function(){this.round=this.round-1},playRandom:function(){this.$store.commit("playRandom",{round:this.round})}}},N=I,R=Object(d["a"])(N,h,v,!1,null,null,null),k=R.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Teams")]),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.save(e)}}},[a("div",{staticClass:"row form-group"},[a("div",{staticClass:"col-6"},[t._v(" Vlad "),a("hr"),t._l(t.teams1,(function(t){return a("div",{key:t.id},[a("team-form",{attrs:{team:t}})],1)}))],2),a("div",{staticClass:"col-6"},[t._v(" Oleg "),a("hr"),t._l(t.teams2,(function(t){return a("div",{key:t.id},[a("team-form",{attrs:{team:t}})],1)}))],2)]),a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"submit"}},[t._v("Save")])])])])},U=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.priority,expression:"priority"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.priority},on:{input:function(e){e.target.composing||(t.priority=e.target.value)}}})]),a("div",{staticClass:"col-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])])},A=[],B=(a("b0c0"),{name:"TeamForm",props:["team"],computed:{name:{get:function(){return this.team.name},set:function(t){this.$store.commit("updateTeam",{id:this.team.id,name:t})}},priority:{get:function(){return this.team.priority},set:function(t){t&&this.$store.commit("updateTeam",{id:this.team.id,priority:t})}}}}),D=B,q=Object(d["a"])(D,F,A,!1,null,null,null),J=q.exports,G={components:{TeamForm:J},name:"TeamsForm",computed:{teams1:{get:function(){return this.$store.getters.getUserTeams(1)}},teams2:{get:function(){return this.$store.getters.getUserTeams(2)}}},methods:{save:function(){this.$store.commit("saveTeams")}}},H=G,V=Object(d["a"])(H,E,U,!1,null,null,null),L=V.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-sm table-striped mt-2"},[t._m(0),a("tbody",t._l(t.standings,(function(e,s){return a("tr",{key:e.id},[a("td",{staticClass:"text-left"},[t._v(t._s(s+1))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.name))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.games))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.g_score)+":"+t._s(e.g_left))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.g_score-e.g_left))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.points))])])})),0)])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("#")]),a("th",{staticClass:"text-left"},[t._v("Club")]),a("th",{staticClass:"text-left"},[t._v("Played")]),a("th",{staticClass:"text-left"},[t._v("G")]),a("th",{staticClass:"text-left"},[t._v("GD")]),a("th",{staticClass:"text-left"},[t._v("Points")])])])}],Q={name:"Standings",computed:{standings:function(){return this.$store.getters.standings}}},W=Q,X=Object(d["a"])(W,z,K,!1,null,null,null),Y=X.exports,Z=a("21a6"),tt={name:"App",components:{ConfigForm:p,TeamsForm:L,Matches:k,Standings:Y},computed:Object(o["a"])({},Object(i["b"])({configStatus:function(t){return t.config.status},teamsStatus:function(t){return t.config.teamsStatus},matchesStatus:function(t){return t.config.matchesStatus}})),methods:{reset:function(){confirm("Are you sure?")&&this.$store.commit("reset")},dump:function(){var t=new Blob([this.$store.getters.dump],{type:"text/json;charset=utf-8"});Object(Z["saveAs"])(t,"dump.json")}}},et=tt,at=(a("034f"),Object(d["a"])(et,n,r,!1,null,null,null)),st=at.exports,nt=(a("99af"),a("4de4"),a("7db0"),a("c740"),a("d81d"),a("a434"),a("2909")),rt=a("0e44"),ot=a("8a77");s["a"].use(i["a"]);var it=Object(rt["a"])();function ct(t){t.sort((function(){return Math.random()-.5}))}function lt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}function ut(t,e){ct(t);for(var a=[],s=t.splice(t.length/2),n=t,r=0;r<n.length+s.length-1;r++){for(var o=0;o<n.length;o++){var i={id:Object(ot["a"])(),round:r+1,hc_score:null,ac_score:null};i.homeTeam=n[o],i.awayTeam=s[o],i.homeTeam.user.id!=i.awayTeam.user.id||i.homeTeam.priority<i.awayTeam.priority?(i.homePlayerId=1==i.homeTeam.user.id?1:2,i.awayPlayerId=1==i.homeTeam.user.id?2:1):(i.homePlayerId=1==i.awayTeam.user.id?2:1,i.awayPlayerId=1==i.awayTeam.user.id?1:2),i.isPlayable=!e||(1==i.homeTeam.priority||1==i.awayTeam.priority),a.push(i)}if(n.length+s.length-1>2){var c=n.splice(1,1);s.unshift(c.shift()),n.push(s.pop())}}return a}var mt={config:{teams:10,laps:1,status:!1,teamsStatus:!1,matchesStatus:!1,randomMode:!1},teams:[],matches:[],users:[{id:1,name:"Vlad"},{id:2,name:"Oleg"}]},dt=new i["a"].Store({state:Object(o["a"])({},mt),getters:{dump:function(t){return JSON.stringify(t)},getUserById:function(t){return function(e){return t.users.find((function(t){return t.id===e}))}},getTeamById:function(t){return function(e){return t.teams.find((function(t){return t.id===e}))}},getUserTeams:function(t){return function(e){return t.teams.filter((function(t){return t.user.id===e})).sort((function(t,e){return t.points!=e.points?t.points-e.points:t.priority-e.priority}))}},getRoundMatches:function(t){return function(e){return t.matches.filter((function(t){return t.round===e}))}},numberOfRounds:function(t){return(t.config.teams-1)*t.config.laps},standings:function(t){var e=t.teams.sort((function(t,e){return t.points!=e.points?e.points-t.points:e.g_score-e.g_left!=t.g_score-t.g_left?e.g_score-e.g_left-(t.g_score-t.g_left):e.g_score-t.g_score}));return console.log(e),t.teams.sort((function(t,e){return t.points!=e.points?t.points<e.points:t.g_score<e.g_score}))}},mutations:{makeCalendar:function(t){for(var e=Object(nt["a"])(t.teams),a=[],s=0;s<t.config.laps;s++)a=[].concat(Object(nt["a"])(a),Object(nt["a"])(ut(e,t.config.randomMode)));t.matches=a,t.config.matchesStatus=!0},toggleRandomMode:function(t){this.commit("setConfig",{randomMode:!t.config.randomMode})},setConfig:function(t,e){t.config=Object(o["a"])(Object(o["a"])({},t.config),e)},saveConfig:function(t){for(var e=[],a=this.getters.getUserById(1),s=this.getters.getUserById(2),n=0;n<t.config.teams;n++)e.push({id:n,name:"",user:n<t.config.teams/2?a:s,priority:n<t.config.teams/2?n+1:n-(t.config.teams/2-1),points:0,games:0,g_score:0,g_left:0});t.config=Object(o["a"])(Object(o["a"])({},t.config),{},{status:!0}),t.teams=e,console.log(e)},updateTeam:function(t,e){var a=t.teams.findIndex((function(t){return t.id==e.id}));-1!=a&&s["a"].set(t.teams,a,Object(o["a"])(Object(o["a"])(Object(o["a"])({},t.teams[a]),e),{},{id:t.teams[a].id}))},addTeamMatchData:function(t,e){var a=t.teams.findIndex((function(t){return t.id==e.id}));if(-1!=a){var n=isNaN(t.teams[a].games)?1:t.teams[a].games+1,r=isNaN(t.teams[a].points)?e.points:t.teams[a].points+ +e.points,i=isNaN(t.teams[a].g_score)?e.g_score:t.teams[a].g_score+ +e.g_score,c=isNaN(t.teams[a].g_left)?e.g_left:t.teams[a].g_left+ +e.g_left;s["a"].set(t.teams,a,Object(o["a"])(Object(o["a"])({},t.teams[a]),{},{points:r,games:n,g_score:i,g_left:c}))}},saveTeams:function(t){t.config=Object(o["a"])(Object(o["a"])({},t.config),{},{teamsStatus:!0}),this.commit("makeCalendar")},recalculatePoints:function(t){var e=this;t.teams.map((function(t){e.commit("updateTeam",{id:t.id,points:0,games:0,g_score:0,g_left:0})})),t.matches.map((function(t){if(!isNaN(t.hc_score)&&!isNaN(t.ac_score)&&null!==t.hc_score&&null!==t.ac_score&&void 0!==t.hc_score&&void 0!==t.ac_score){var a=0,s=0;t.hc_score>t.ac_score?a=3:t.hc_score==t.ac_score?(a=1,s=1):s=3,e.commit("addTeamMatchData",{id:t.homeTeam.id,points:a,g_score:t.hc_score,g_left:t.ac_score}),e.commit("addTeamMatchData",{id:t.awayTeam.id,points:s,g_score:t.ac_score,g_left:t.hc_score})}}))},updateMatchScore:function(t,e){var a=t.matches.findIndex((function(t){return t.id==e.id}));if(-1!=a){var n={hc_score:isNaN(e.hc_score)?t.matches[a].hc_score:e.hc_score,ac_score:isNaN(e.ac_score)?t.matches[a].ac_score:e.ac_score};s["a"].set(t.matches,a,Object(o["a"])(Object(o["a"])({},t.matches[a]),n)),null!=t.matches[a].hc_score&&null!=t.matches[a].ac_score&&this.commit("recalculatePoints")}},updateMatchHomePlayer:function(t,e){var a=t.matches.findIndex((function(t){return t.id==e.match_id}));if(-1!=a){var n={homePlayerId:e.player_id,awayPlayerId:1==e.player_id?2:1};s["a"].set(t.matches,a,Object(o["a"])(Object(o["a"])({},t.matches[a]),n))}},updateMatchAwayPlayer:function(t,e){var a=t.matches.findIndex((function(t){return t.id==e.match_id}));if(-1!=a){var n={awayPlayerId:e.player_id,homePlayerId:1==e.player_id?2:1};s["a"].set(t.matches,a,Object(o["a"])(Object(o["a"])({},t.matches[a]),n))}},playRandom:function(t,e){var a=t.matches.map((function(t){if(t.round!=e.round||null!=t.hc_score||null!=t.ac_score||t.isPlayable)return t;var a=lt(1,5),s=lt(0,3),n=lt(s,5),r=0,i=0;return 3==a?(r=s,i=s):a<3?(r=n,i=s):(r=s,i=n),Object(o["a"])(Object(o["a"])({},t),{},{hc_score:r,ac_score:i})}));t.matches=a},reset:function(t){Object.assign(t,mt)}},actions:{},modules:{},plugins:[it]});s["a"].config.productionTip=!1,new s["a"]({store:dt,render:function(t){return t(st)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.32fe9bd6.js.map