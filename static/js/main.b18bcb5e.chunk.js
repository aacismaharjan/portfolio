(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.a42176f4.jpg"},function(e,a,t){e.exports=t.p+"static/media/resume.f3dfe663.pdf"},,,function(e,a,t){e.exports=t.p+"static/media/thumb.be5e8be4.png"},function(e,a,t){e.exports=t.p+"static/media/hamrojourney.23fb6110.png"},function(e,a,t){e.exports=t.p+"static/media/himalayanresort.29a7b106.png"},function(e,a,t){e.exports=t.p+"static/media/rms.86885b54.png"},function(e,a,t){e.exports=t.p+"static/media/quizbee.b34977b6.png"},function(e,a,t){e.exports=t.p+"static/media/youtube-clone.f4940144.png"},function(e,a,t){e.exports=t.p+"static/media/simple_portfolio.7ebadcf6.png"},function(e,a,t){e.exports=t.p+"static/media/coolors.730804f4.png"},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),o=t.n(s),i=(t(23),t(24),t(1)),c=t(4),l=t.n(c);function m(){var e=Object(r.useState)(l.a),a=Object(i.a)(e,2),t=a[0],s=a[1],o=Object(r.useState)(""),c=Object(i.a)(o,2),m=c[0],h=c[1];return Object(r.useEffect)((function(){fetch("https://api.github.com/users/aacismaharjan").then((function(e){return e.json()})).then((function(e){e.avatar_url&&(s(e.avatar_url),h(e.name))})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"/"},n.a.createElement("span",{className:"d-block d-lg-none"},m),n.a.createElement("span",{className:"d-none d-lg-block"},n.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:t,alt:"Aashish Maharjan"}))),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")))))}function h(e){var a=e.id,t=e.title,r=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"resume-section",id:a},n.a.createElement("div",{className:"resume-section-content"},n.a.createElement("h2",{className:"mb-5"},t),r)),n.a.createElement("hr",{className:"m-0"}))}var u=t(5),p=t.n(u),d=function(e){var a=e.href,t=e.icon;return n.a.createElement("a",{className:"social-icon",href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab ".concat(t)}))};function g(){return n.a.createElement(h,{id:"about"},n.a.createElement("h1",{className:"mb-0"},"Aashish",n.a.createElement("span",{className:"text-primary"},"Maharjan")),n.a.createElement("div",{className:"subheading mb-5"},"Purano Kalimati, Kathmandu, Nepal \xb7",n.a.createElement("a",{href:"mailto:aashishmaharjan2001@gmail.com"},"aashishmaharjan2001@gmail.com")),n.a.createElement("p",{className:"lead mb-4"},"Aashish Maharjan connects online brands to their target audiences for the perfect communicating experience. At the Gyanodaya School, Aashish learned the importance of applying classic web designing ideas to modern brands strategies from experts in the field, including his Computer Teacher, Mr. Mannor Shakya."),n.a.createElement("div",{className:"btn-group mb-5"},n.a.createElement("button",{className:"btn btn-primary btn-custom py-2 px-5",type:"submit",onClick:function(){return window.open(p.a)}},"Download CV")),n.a.createElement("div",{className:"social-icons"},[{href:"https://www.linkedin.com/in/aashish-maharjan-788b661b0/",icon:"fa-linkedin-in"},{href:"https://github.com/aacismaharjan",icon:"fa-github"},{href:"https://twitter.com/aacismhrzn",icon:"fa-twitter"},{href:"https://www.facebook.com/aashishmaharjan.2001",icon:"fa-facebook-f"}].map((function(e,a){var t=e.href,r=e.icon;return n.a.createElement(d,{href:t,icon:r,key:a})}))))}var b=t(6),f=t(7),v=t(17),E=t(16),N=function(e){var a=e.skill,t=a.title,r=a.progress,s=e.secondary,o=void 0!==s&&s;return n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated ".concat(o?"bg-info":""),role:"progressbar",style:{width:r}},n.a.createElement("span",{className:"text-left pl-2"},t)))},y=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={workData:[{icon:"fa-check",text:"Mobile-First, Responsive Design"},{icon:"fa-check",text:"Cross Browser Testing & Debugging"},{icon:"fa-check",text:"Cross Functional Teams"},{icon:"fa-check",text:"Agile Development & Scrum"}],skills:[{title:"HTML",progress:"90%"},{title:"CSS",progress:"80%"},{title:"Javascript",progress:"65%"},{title:"Python",progress:"35%"},{title:"C Programming",progress:"40%"},{title:"Photoshop / Figma",progress:"60%"}],frameworks:[{title:"Bootstrap",progress:"60%"},{title:"Material-UI",progress:"30%"},{title:"React.js",progress:"55%"},{title:"Django",progress:"30%"}]},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.state,a=e.workData,t=e.skills,r=e.frameworks,s=t.map((function(e,a){return n.a.createElement("div",{className:"col-md-8 py-1",key:a},n.a.createElement(N,{skill:e}))})),o=r.map((function(e,a){return n.a.createElement("div",{className:"col-md-8 py-1",key:a},n.a.createElement(N,{skill:e,secondary:!0}))})),i=n.a.createElement("ul",{className:"fa-ul mb-0"},a.map((function(e,a){var t=e.icon,r=e.text;return n.a.createElement("li",{key:a},n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas ".concat(t)})),r)})));return n.a.createElement(h,{id:"skills",title:"Skills"},n.a.createElement("div",{className:"subheading mb-3"},"Coding Languages"),n.a.createElement("div",{className:"row mb-4"},s),n.a.createElement("div",{className:"subheading mb-3"},"Frameworks / Libraries"),n.a.createElement("div",{className:"row mb-4"},o),n.a.createElement("div",{className:"subheading mb-3"},"Workflow"),i)}}]),t}(r.Component);function k(e){var a=e.card,t=a.img,r=a.title,s=a.desc,o=a.demo,i=a.source;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-thumbnail",style:{backgroundImage:"url(".concat(t,")")}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"title"},r),n.a.createElement("p",null,s),n.a.createElement("div",{className:"btn-grp"},n.a.createElement("a",{href:o,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),n.a.createElement("a",{href:i,className:"btn btn-secondary",target:"_blank",rel:"noopener noreferrer"},"Source Code"))))}var j=t(8),w=t.n(j),S=t(9),x=t.n(S),C=t(10),M=t.n(C),R=t(11),T=t.n(R),A=t(12),J=t.n(A),D=t(13),P=t.n(D),O=t(14),L=t.n(O),_=t(15),z=t.n(_);function F(){var e=[{img:w.a,title:"Corona Tracker - ReactJS",desc:"It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.",demo:"https://aacismaharjan.github.io/coronatracker/",source:"https://github.com/aacismaharjan/coronatracker"},{img:M.a,title:"Himalayan Resort - ReactJS",desc:"A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.",demo:"https://himalayanresort.netlify.app/",source:"https://github.com/aacismaharjan/himalayanresort"},{img:P.a,title:"Youtube Clone - ReactJS",desc:"Simple Youtube Clone with React.js. It utilizes the Youtube api to fetch the data and display it",demo:"https://aacismaharjan.github.io/youtube-clone/",source:"https://github.com/aacismaharjan/youtube-clone"},{img:L.a,title:"Simple Portfolio - HTML Template",desc:"Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.",demo:"https://aacismaharjan.github.io/simple_portfolio/",source:"https://github.com/aacismaharjan/simple_portfolio"},{img:x.a,title:"Hamro Journey - HTML, CSS & JS",desc:"This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.",demo:"https://aacismaharjan.github.io/hamrojourney/",source:"https://github.com/aacismaharjan/hamrojourney"},{img:z.a,title:"Coolors Everywhere! - ReactJS",desc:"Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.",demo:"https://aacismaharjan.github.io/coolors/",source:"https://github.com/aacismaharjan/coolors"},{img:J.a,title:"Quizbee - Reactjs and External Api",desc:"Simple Quizbee web app build with ReactJS which eats the api and interacts with users!",demo:"https://aacismaharjan.github.io/quizbee/",source:"https://github.com/aacismaharjan/quizbee"},{img:T.a,title:"Result Management System - C Programming",desc:"My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.",demo:"https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled",source:"https://github.com/aacismaharjan/RMS"}];return n.a.createElement(h,{id:"portfolio",title:"portfolio"},n.a.createElement("div",{className:"cards"},e.map((function(e,a){return n.a.createElement(k,{card:e,key:a})}))))}var H=function(){return n.a.createElement("div",{id:"wrapper"},n.a.createElement(m,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement(g,null),n.a.createElement(y,null),n.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.b18bcb5e.chunk.js.map