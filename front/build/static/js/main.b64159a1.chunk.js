(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(65)},36:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),l=n(27),c=n.n(l),r=n(30),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{paddingLeft:"5px",display:"flex",backgroundColor:"#f4f4f4",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("div",null,a.a.createElement("input",{style:{height:"100%",margin:0},type:"checkbox",checked:this.props.todo.completed,onChange:this.props.markComplete.bind(this,e)})),a.a.createElement("strong",{style:{flex:20,padding:"5px"}}," ",n),a.a.createElement("button",{style:h,onClick:this.props.onBtnDeleteClick.bind(this,e)},"x"))}}]),e}(o.Component),h={flex:"1",backgroundColor:"#f00",float:"right",border:"none"},f=m,b=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(f,{key:e.id,todo:e,markComplete:t.props.markComplete,onBtnDeleteClick:t.props.onBtnDeleteClick})})}}]),e}(o.Component),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onTitleChange=function(t){n.setState({title:t.target.value})},n.onSubmit=function(t){n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("input",{value:this.state.title,onChange:this.onTitleChange,type:"text",placeholder:"Some text ...",name:"title",className:"inputTitle"}),a.a.createElement("button",{className:"btnAdd",type:"submit",onClick:this.onSubmit},"Add Todo"))}}]),e}(o.Component),y=(n(36),n(13));var E={background:"#333",textAlign:"center",color:"white",padding:"10px"},v={color:"#fff",textDecoration:"none"},k=function(){return a.a.createElement("header",{style:E},a.a.createElement("h1",null,"TodoList"),a.a.createElement(y.b,{style:v,to:"/"},"Home")," | ",a.a.createElement(y.b,{style:v,to:"/about"},"About"))},C=n(11);function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is TodoList app v1.0.0"),a.a.createElement("p",null,"App create by Nguy\u1ec5n \u0110\u1ee9c Long"))}var j=n(14),x=n.n(j),S=Object({NODE_ENV:"production",PUBLIC_URL:""}).SERVER_URL||"http://localhost:2307/api",T=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){console.log(t);var e=S+"/todo/u/"+t;n.setState({todos:n.state.todos.map(function(n){return n.id===t&&(n.completed=!n.completed,x.a.post(e,{completed:n.completed}).then(function(t){return n})),n})})},n.onBtnDeleteClick=function(t){console.log("id",t);var e=S+"/todo/d/"+t;x.a.post(e).then(function(e){console.log(e.data),n.state.todos.splice(n.state.todos.findIndex(function(e){return e.id===t}),1),n.setState({todos:n.state.todos})}).catch(function(t){console.log(t.response)})},n.addTodo=function(t){console.log("Add Todo");var e=S+"/todo/a",o={title:t,completed:!1};x.a.post(e,o).then(function(t){console.log(t),n.setState({todos:[].concat(Object(r.a)(n.state.todos),[o])})}).catch(function(t){console.log(t.response)})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=S+"/todo/l/0-10";x.a.get(e).then(function(e){e.data.map(function(t){return t.id=t._id,delete t._id}),console.log(e.data),t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement(y.a,null,a.a.createElement(k,null),a.a.createElement(C.a,{path:"/",exact:!0,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{addTodo:t.addTodo}),a.a.createElement(b,{todos:t.state.todos,markComplete:t.markComplete,onBtnDeleteClick:t.onBtnDeleteClick}))}}),a.a.createElement(C.a,{path:"/about",component:O})))}}]),e}(o.Component);n(64);c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b64159a1.chunk.js.map