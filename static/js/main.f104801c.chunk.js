(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=n(3),i=n(4),s=n(6),u=n(5),h=n(7),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},b=function(e){var t=e.onInputChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},p=(n(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)}),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{onInputChange:this.onInputChange}),r.a.createElement(p,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.f104801c.chunk.js.map