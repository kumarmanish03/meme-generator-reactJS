(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),m=a.n(l),c=(a(13),a(1)),s=a(2),o=a(4),u=a(3);var i=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Meme Generator"))},h=a(7),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={upperText:"",lowerText:"",randomImg:"https://i.imgflip.com/30b1gx.jpg",allMemesImg:[]},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=Math.floor(Math.random()*e.state.allMemesImg.length),n=e.state.allMemesImg[a].url;e.setState({randomImg:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){e.setState({allMemesImg:t.data.memes})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"meme"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"myForm"},r.a.createElement("input",{type:"text",placeholder:"Upper text",name:"upperText",value:this.state.upperText,onChange:this.handleChange}),r.a.createElement("input",{type:"text",placeholder:"Lower text",name:"lowerText",value:this.state.lowerText,onChange:this.handleChange}),r.a.createElement("button",null,"Generate")),r.a.createElement("div",{className:"meme"},r.a.createElement("img",{src:this.state.randomImg,alt:""}),r.a.createElement("h2",{className:"top"},this.state.upperText),r.a.createElement("h2",{className:"bottom"},this.state.lowerText)))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i,null),r.a.createElement(p,null),r.a.createElement("h1",{className:"sign"},"By: ",r.a.createElement("span",null,"Manish Kumar")))}}]),a}(r.a.Component);m.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.afdebeaf.chunk.js.map