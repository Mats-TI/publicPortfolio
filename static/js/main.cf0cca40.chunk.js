(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),o=t.n(l),c=(t(49),t.p,t(50),t(15),t(7)),s=t(11),i=t(12),m=t(14),u=t(13),h=t.p+"static/media/MainDC.0a5a0266.jpg",E=t.p+"static/media/gallery_logo.e39553c7.png",g=t.p+"static/media/Chess pic.2edb95c2.jpg",d=t(41),p=[r.a.createElement("img",{src:h}),r.a.createElement("img",{src:g}),r.a.createElement("img",{src:E})],b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectsDiv",id:"ProID"},r.a.createElement("h1",null,r.a.createElement("span",{className:"h1"},"My Projects")),r.a.createElement("section",{className:"projectSection"},r.a.createElement(d.Carousel,{slides:p}),r.a.createElement("div",{className:"projectDetails"},r.a.createElement("h2",null,"Project Details"),r.a.createElement("p",null,"Project name: DC Quiz Game."),r.a.createElement("p",null,"Project type: Web-application."),r.a.createElement("a",{href:"https://thapza101.github.io/DCGame"},"Go to DC Quiz Game's Page"))))}}]),t}(n.Component),f=t(25),v=t(42),A=t.n(v),j=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).formValidation=function(){var a=!1,t={errorName:"",errorEmail:"",errorSubject:"",errorMessage:""};return 0===e.state.yourName.length&&(a=!0,t.errorName="Name cannot be blank "),0===e.state.yourSubject.length&&(a=!0,t.errorSubject="Subject cannot be blank "),e.state.Email.includes("@")||(a=!0,t.errorEmail="Invalid Email. Your Email should be of the form John@Doe.domain"),0===e.state.Message.length&&(a=!0,t.errorMessage="Message cannot be blank"),e.setState(Object(f.a)(Object(f.a)({},e.state),t)),a},e.onChangeName=function(a){e.setState({yourName:a.target.value})},e.onChangeSubject=function(a){e.setState({yourSubject:a.target.value})},e.onChangeMail=function(a){e.setState({Email:a.target.value})},e.onChangeMsg=function(a){e.setState({Message:a.target.value})},e.dataHandler=function(a){a.preventDefault();var t=e.formValidation();t||e.setState({yourName:"",yourSubject:"",Email:"",Message:"",errorName:"",errorEmail:"",errorSubject:"",errorMessage:""}),t||(A.a.post("https://still-dusk-29985.herokuapp.com/api/forms",e.state).then((function(e){console.log(e)})).catch((function(e){console.log("Message not sent because of ".concat(e))})),e.setState({sent:!0}))},e.state={yourName:"",yourSubject:"",Email:"",Message:"",sent:!1,errorName:"",errorEmail:"",errorSubject:"",errorMessage:""},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"ContactID",className:"contactDiv"},r.a.createElement("section",{className:"contactSection"},r.a.createElement("h1",{className:"h1"},"Get in Touch"),r.a.createElement("p",null,"Feel free to use the contact form for any questions, comments or just feedback in general. If necessary, I will get back to you as soon as possible.")),r.a.createElement("form",{onSubmit:this.dataHandler.bind(this),id:"contactForm"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",name:"yourName",value:this.state.yourName,onChange:this.onChangeName.bind(this)}),r.a.createElement("div",{className:"error-msgs"},this.state.errorName),r.a.createElement("label",null,"Subject: "),r.a.createElement("input",{type:"text",name:"yourSubject",value:this.state.yourSubject,onChange:this.onChangeSubject.bind(this)}),r.a.createElement("div",{className:"error-msgs"},this.state.errorSubject),r.a.createElement("label",null,"Email Address: "),r.a.createElement("input",{type:"text",name:"Email",value:this.state.Email,onChange:this.onChangeMail.bind(this)}),r.a.createElement("div",{className:"error-msgs"},this.state.errorEmail),r.a.createElement("label",null,"Message: "),r.a.createElement("textarea",{name:"Message",value:this.state.Message,onChange:this.onChangeMsg.bind(this)}),r.a.createElement("div",{className:"error-msgs"},this.state.errorMessage),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("div",{className:this.state.sent?"confirmationAppear":"submission"},r.a.createElement("h3",null,"Your E-mail has been successfully sent!"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component),N=t(43),S=t.n(N),y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"Wrapper",id:"Home"},r.a.createElement("h1",null,"The name is Thapelo, pleased to make your acquintance."),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"p1"},"I am a Front-end Developer with proficiency in HTML5, CSS3, Vanilla Javascript and React.js library."),r.a.createElement("p",{className:"p1"},"My other konwledge areas include server-side scripting in Node.js runtime environment and MySQL Database Management System."),r.a.createElement("p",{className:"p1"},"Feel free to have a look at my constantly improving work under the ",r.a.createElement("a",{href:"#ProID"},"Projects")," section.")),r.a.createElement(S.a,{showAt:300},r.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAASdJREFUeJzt2UFuwjAQheG/PRLtEdobIXVVaQ5Y9SiFG9AFjUDJhNjgZGr7fRIbx1jzXrJABERERERERKQ/TwXOOBU44xEPZXguNUWtVED0ACLSNfv7dMk4/4Y40WEJxiV8dyUY0/DdlGDMh2++BGM5fLMlGOnhmyvBmIY7JK7Z5tMWZvhBX5z1VxorwZgPj3MNGirBmIb44RIe5/qg+hKM5fA4e65VW4KRFh5n31h1JRh++N3M/qUCoKISjLzwOPvn/PsSjPzwON+5ZbUS1vhP8AC8Ad8Fz/wC3oHjaH2puM0Y6Xd+kPMEDK6fhM+8Edf3QXp4uK8AOJewz9h/U4k3Q/cahw6Zpfv3AiogeoBoKiB6gGgqIHqAaCogegARERERERGR7f0CNp7PDIKnwGIAAAAASUVORK5CYII=",alt:"Back To Top"}))),r.a.createElement(b,null),r.a.createElement(j,null)))}}]),t}(r.a.Component);var M=t(1);var C=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"mainNav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#Home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#ProID"},"My Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#ContactID"},"Get in touch")))),r.a.createElement(M.a,{path:"/publicPortfolio",exact:!0,component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[91,1,2]]]);
//# sourceMappingURL=main.cf0cca40.chunk.js.map