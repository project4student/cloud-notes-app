(this["webpackJsonpcloud-notes-app"]=this["webpackJsonpcloud-notes-app"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),c=a.n(s),l=(a(23),a(24),a(9)),o=a(2),i=a(0);function d(){var e=Object(o.g)(),t=Object(o.f)();return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Notes-App"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})})]}),"true"!==function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("isloggedin")?Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)(l.b,{className:"btn btn-sm btn-outline-light me-2",to:"/signup",children:"Signup"}),Object(i.jsx)(l.b,{className:"btn btn-sm btn-outline-light",to:"/login",children:"Login"})]}):Object(i.jsx)("div",{className:"d-flex",children:Object(i.jsx)("button",{onClick:function(){document.cookie="isloggedin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="authtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t.push("/login")},className:"btn btn-sm btn-outline-light me-2",children:"Logout"})})]})]})})}var b=a(8),j=a(4),u=a(3),m=a.n(u),h=a(10),p=a(7);function x(e){var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a=e.note.tag?t(e.note.tag):"General",r=e.note.title?t(e.note.title):"No Title",s=e.note.description?t(e.note.description):"No Description",c=new Date(parseInt(e.note.date)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",dateStyle:"long",timeStyle:"medium",hour12:!0}),l=Object(n.useState)({title:r,description:s,tag:a}),o=Object(p.a)(l,2),d=o[0],u=o[1],m=function(e){return u(Object(j.a)(Object(j.a)({},d),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"modal fade",id:"d".concat(e.note.date),tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(i.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",id:"updateModalLabel",children:"Update Modal"}),Object(i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Enter New Title: "}),Object(i.jsx)("input",{type:"text",className:"form-control",value:d.title,id:"title",name:"title",onChange:m})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"description",className:"form-label",children:"Enter New Description: "}),Object(i.jsx)("input",{type:"text",className:"form-control",value:d.description,id:"description",name:"description",onChange:m})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Enter New Tag: "}),Object(i.jsx)("input",{type:"text",className:"form-control",value:d.tag,id:"tag",name:"tag",onChange:m})]})]}),Object(i.jsxs)("div",{className:"modal-footer d-flex align-item-center justify-content-between",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-outline-danger","data-bs-dismiss":"modal",children:"Cancel"}),Object(i.jsx)("button",{type:"button",className:"btn btn-outline-dark","data-bs-dismiss":"modal",onClick:function(){e.updateNote(e.date,d)},children:"Update"})]})]})})}),Object(i.jsxs)("div",{className:"card border-dark mx-3 my-2",children:[Object(i.jsxs)("div",{className:"d-flex align-item-center justify-content-between card-header border-dark",children:[Object(i.jsx)("i",{className:"pe-2 far fa-edit text-primary",title:"Edit This Note","data-bs-toggle":"modal","data-bs-target":"#d".concat(e.note.date)}),Object(i.jsx)("div",{className:"text-center fs-5",children:a}),Object(i.jsx)("i",{className:"ps-2 far fa-trash-alt text-danger",onClick:function(){e.deleteNote(e.date)},title:"Delete This Note"})]}),Object(i.jsxs)("div",{className:"card-body text-dark",children:[Object(i.jsx)("h5",{className:"card-title",children:r}),Object(i.jsx)("p",{className:"card-text",children:s})]}),Object(i.jsx)("div",{className:"card-footer border-dark",children:c})]})]})}var O=Object(n.createContext)();function g(e){return e.alert?Object(i.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),style:{minHeight:"60px",opacity:"1",transition:"opacity 0.7s"},role:"alert",children:e.alert.message}):Object(i.jsx)("div",{style:{minHeight:"60px",opacity:"0",transition:"opacity 0.7s"}})}function f(){var e=Object(n.useContext)(O),t=e.alert,a=e.showAlert,r=Object(o.f)(),s=Object(n.useState)([]),c=Object(p.a)(s,2),l=c[0],d=c[1],u=Object(n.useState)({title:"",description:"",tag:""}),f=Object(p.a)(u,2),v=f[0],N=f[1];Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/notes/fetchallnotes",{method:"GET",headers:{"Access-Control-Allow-Origin":"http://localhost:3001","Access-Control-Allow-Credentials":!0}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).error&&n.error.includes("You are not authorized")?r.push("/login"):n.error?a(n.error,"danger"):n.success&&d(n.notes),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(e.t0.message,"danger");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=function(e){return N(Object(j.a)(Object(j.a)({},v),{},Object(b.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(h.a)(m.a.mark((function e(t){var n,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n={}).title=v.title,n.description=v.description,v.tag&&(n.tag=v.tag),e.prev=5,e.next=8,fetch("/notes/addnewnote",{method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"http://localhost:3001","Access-Control-Allow-Credentials":!0},body:JSON.stringify(n)});case 8:return s=e.sent,e.next=11,s.json();case 11:if(!(c=e.sent).error||!c.error.includes("You are not authorized")){e.next=16;break}r.push("/login"),e.next=25;break;case 16:if(!c.error){e.next=20;break}a(c.error,"danger"),e.next=25;break;case 20:if(!c.errors){e.next=24;break}throw new Error(c.errors[0].msg);case 24:c.success&&(d(l.concat(Object(j.a)(Object(j.a)({},n),{},{date:c.date}))),a("Note Added!!","success"),N({title:"",description:"",tag:""}));case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(5),a(e.t0.message,"danger");case 30:case"end":return e.stop()}}),e,null,[[5,27]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(m.a.mark((function e(t,n){var s,c,o,i,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),s={},n.title&&(s.title=n.title),n.description&&(s.description=n.description),n.tag&&(s.tag=n.tag),e.prev=5,e.next=8,fetch("/notes/updatenote?time=".concat(t),{method:"PUT",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"http://localhost:3001","Access-Control-Allow-Credentials":!0},body:JSON.stringify(s)});case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(o=e.sent).error||!o.error.includes("You are not authorized")){e.next=16;break}r.push("/login"),e.next=26;break;case 16:if(!o.error){e.next=20;break}a(o.error,"danger"),e.next=26;break;case 20:if(!o.errors){e.next=25;break}throw console.log("in errors"),new Error(o.errors[0].msg);case 25:o.success&&(b=(i=l).findIndex((function(e){return e.date===t})),i[b].title=s.title,i[b].description=s.description,n.tag&&(i[b].tag=s.tag),d(i),a("Note Updated!!","success"));case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(5),a(e.t0.message,"danger");case 31:case"end":return e.stop()}}),e,null,[[5,28]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(m.a.mark((function e(t){var n,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/notes/deletenote?time=".concat(t),{method:"DELETE",headers:{"Access-Control-Allow-Origin":"http://localhost:3001","Access-Control-Allow-Credentials":!0}});case 3:return n=e.sent,e.next=6,n.json();case 6:(s=e.sent).error&&s.error.includes("You are not authorized")?r.push("/login"):s.error?a(s.error,"danger"):s.success&&((c=l).splice(c.findIndex((function(e){return e.date===t})),1),N(c),a("Note Deleted!!","warning")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(e.t0.message,"danger");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{alert:t}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Add Note"}),Object(i.jsxs)("form",{onSubmit:y,children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Enter Title :"}),Object(i.jsx)("input",{type:"text",className:"form-control",value:v.title,id:"title",name:"title",onChange:w,required:!0,minLength:3})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"description",className:"form-label",children:"Enter Description :"}),Object(i.jsx)("input",{type:"text",className:"form-control",value:v.description,id:"description",name:"description",onChange:w,required:!0,minLength:5})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Enter Tag :"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"tag",value:v.tag,name:"tag",onChange:w})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Add"})]}),Object(i.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center flex-wrap my-3",children:l.length>0?l.map((function(e){return Object(i.jsx)(x,{handleChange:w,updateNote:k,date:e.date,note:e,deleteNote:C},e.date)})):Object(i.jsx)("h5",{children:"No Note to show !!"})})]})]})}function v(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{})})}function N(){return Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)("h1",{children:"This is About Page [TODO]"})})}var w=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),r=a[0],s=a[1];return Object(i.jsx)(O.Provider,{value:{alert:r,setAlert:s,showAlert:function(e,t){s({message:e,type:t}),setTimeout((function(){s(null)}),3500)}},children:e.children})};function y(){var e=Object(n.useContext)(O),t=e.alert,a=e.showAlert,r=Object(n.useState)({name:"",email:"",password:""}),s=Object(p.a)(r,2),c=s[0],l=s[1],o=function(e){return l(Object(j.a)(Object(j.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(h.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/auth/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(r=e.sent).success){e.next=12;break}a("SignUP successful !!","success"),e.next=18;break;case 12:if(!r.error){e.next=18;break}if(!r.error.includes("already exsits")){e.next=17;break}a(r.error,"danger"),e.next=18;break;case 17:throw new Error("Enter Field properly !!");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),a(e.t0.message,"danger");case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{alert:t}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{className:"mb-3",children:"Sign Up"}),Object(i.jsxs)("form",{onSubmit:d,children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name :"}),Object(i.jsx)("input",{type:"text",value:c.name,onChange:o,className:"form-control",id:"name",name:"name"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address :"}),Object(i.jsx)("input",{type:"email",value:c.email,onChange:o,className:"form-control",id:"email",name:"email"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password :"}),Object(i.jsx)("input",{type:"password",value:c.password,onChange:o,className:"form-control",id:"password",name:"password"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Sign UP"})]})]})]})}function k(){var e=Object(n.useContext)(O),t=e.alert,a=e.showAlert,r=Object(n.useState)({email:"",password:""}),s=Object(p.a)(r,2),c=s[0],l=s[1],d=Object(o.f)(),u=function(e){return l(Object(j.a)(Object(j.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(h.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/auth/login",{method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"http://localhost:3001","Access-Control-Allow-Credentials":!0},body:JSON.stringify(c)});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(r=e.sent).success){e.next=13;break}a("Logged In !! You Will be redirected in few second","success"),setTimeout((function(){d.push("/")}),3500),e.next=19;break;case 13:if(!r.errors){e.next=17;break}throw new Error(r.errors[0].msg);case 17:if(!r.error||!r.error.includes("Authentication Failed !!")){e.next=19;break}throw new Error(r.error);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),a(e.t0.message,"danger");case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{alert:t}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{className:"mb-3",children:"Login"}),Object(i.jsxs)("form",{onSubmit:x,children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address :"}),Object(i.jsx)("input",{type:"email",value:c.email,onChange:u,className:"form-control",id:"email",name:"email"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password :"}),Object(i.jsx)("input",{type:"password",value:c.password,onChange:u,className:"form-control",id:"password",name:"password"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Login"})]})]})]})}var C=function(){return Object(i.jsx)(w,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(v,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/about",children:Object(i.jsx)(N,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/signup",children:Object(i.jsx)(y,{})}),Object(i.jsx)(o.a,{exact:!0,path:"/login",children:Object(i.jsx)(k,{})})]})})]})})};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e13227dd.chunk.js.map