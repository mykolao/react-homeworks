(this["webpackJsonphomework-1"]=this["webpackJsonphomework-1"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__2Zzqx",message_body:"Message_message_body__3uv3u",avatar_containter:"Message_avatar_containter__36X5m",avatar_bg_low:"Message_avatar_bg_low__1SzhD",avatar_bg_high:"Message_avatar_bg_high__34-w9",avatar:"Message_avatar__3_BOX",message_username:"Message_message_username__MmdA5",content_time_container:"Message_content_time_container__Re2aN",message_content:"Message_message_content__UYtZh",message_time:"Message_message_time__1unGP"}},,function(e,a,t){e.exports={greeting:"Greeting_greeting__kBuzl",input:"Greeting_input__1rUBo",noerror:"Greeting_noerror__2Nh6-",error:"Greeting_error__1Iw3K",button:"Greeting_button__1QOU2",counter:"Greeting_counter__1gHe1",error_message:"Greeting_error_message__3wPYW"}},function(e,a,t){e.exports={affairs:"Affairs_affairs__1EBG8",button:"Affairs_button__1MZZJ",buttons:"Affairs_buttons__3wm05"}},function(e,a,t){e.exports={affair:"Affair_affair__3qXQV",priority:"Affair_priority__3e6VU",high:"Affair_high__2Cxtz",middle:"Affair_middle__3SRRT",low:"Affair_low__2wBDS",button:"Affair_button__6_Bot"}},,,,,,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(1),s=t.n(r),n=t(10),i=t.n(n),c=(t(16),t(2)),o=t.n(c),l=t(0),_=function(e){return Object(l.jsxs)("div",{className:o.a.message,children:[Object(l.jsx)("div",{className:o.a.avatar_containter,children:Object(l.jsx)("div",{className:o.a.avatar_bg_low,children:Object(l.jsx)("div",{className:o.a.avatar_bg_high,children:Object(l.jsx)("img",{src:e.avatar,alt:"avatar",className:o.a.avatar})})})}),Object(l.jsxs)("div",{className:o.a.message_body,children:[Object(l.jsx)("div",{className:o.a.message_username,children:e.name}),Object(l.jsxs)("div",{className:o.a.content_time_container,children:[Object(l.jsx)("div",{className:o.a.message_content,children:e.message}),Object(l.jsx)("div",{className:o.a.message_time,children:Object(l.jsx)("span",{children:e.time})})]})]})]})},j="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="\u0412\u0430\u0441\u044f\u043d\u044b\u0447",b="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u043d\u0430 \u0440\u0430\u0441\u043f\u0438\u0442\u0438\u0435 \u0431\u043b\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \ud83e\uddd0",d="22:00";var u=function(){return Object(l.jsxs)("div",{className:"homework",children:[Object(l.jsx)("h2",{className:"section_title",children:"Homework 1"}),Object(l.jsx)(_,{avatar:j,name:m,message:b,time:d}),Object(l.jsx)("hr",{})]})},f=t(3),h=t(6),g=t.n(h);var O=function(e){var a=e.affair.priority;return Object(l.jsxs)("div",{className:g.a.affair,children:[Object(l.jsx)("div",{className:g.a.name,children:e.affair.name}),Object(l.jsx)("div",{className:"".concat(g.a.priority," ").concat(g.a[a]),children:a}),Object(l.jsx)("button",{className:g.a.button,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})},v=t(5),x=t.n(v);var N=function(e){var a=e.data.map((function(a){return Object(l.jsx)(O,{affair:a,deleteAffairCallback:e.deleteAffairCallback},a._id)}));return Object(l.jsxs)("div",{className:x.a.affairs,children:[a,Object(l.jsxs)("div",{className:x.a.buttons,children:[Object(l.jsx)("button",{className:x.a.button,onClick:function(){return e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:x.a.button,onClick:function(){return e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{className:x.a.button,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{className:x.a.button,onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},p=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e,a,t=Object(r.useState)(p),s=Object(f.a)(t,2),n=s[0],i=s[1],c=Object(r.useState)("all"),o=Object(f.a)(c,2),_=o[0],j=o[1],m=(e=n,"all"===(a=_)?e:e.filter((function(e){return e.priority===a})));return Object(l.jsxs)("div",{className:"homework",children:[Object(l.jsx)("h2",{className:"section_title",children:"Homework 2"}),Object(l.jsx)(N,{data:m,setFilter:j,deleteAffairCallback:function(e){return i(function(e,a){return e.filter((function(e){return e._id!==a}))}(n,e))}}),Object(l.jsx)("hr",{})]})},w=t(11),A=t(20),C=t(4),y=t.n(C),M=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,s=e.error,n=e.totalUsers,i=s?y.a.error:y.a.noerror,c=s?"Name is required.":"";return Object(l.jsxs)("div",{className:y.a.greeting,children:[Object(l.jsx)("input",{value:a,onChange:t,className:"".concat(y.a.input," ").concat(i),placeholder:"Enter new name"}),Object(l.jsx)("span",{children:s}),Object(l.jsx)("button",{className:y.a.button,onClick:r,children:"Add"}),Object(l.jsx)("span",{className:y.a.counter,children:n}),Object(l.jsx)("i",{className:y.a.error_message,children:c})]})},S=function(e){var a=e.users,t=e.addUserCallback,s=Object(r.useState)(""),n=Object(f.a)(s,2),i=n[0],c=n[1],o=Object(r.useState)(!0),_=Object(f.a)(o,2),j=_[0],m=_[1],b=a.length;return Object(l.jsx)(M,{name:i,setNameCallback:function(e){var a=e.target.value;a.length?(c(a),m(!1)):(c(""),m(!0))},addUser:function(){i.length&&(t(i),c(""),alert("Hello  ".concat(i))),m(!0)},error:j,totalUsers:b})};var G=function(){var e=Object(r.useState)([]),a=Object(f.a)(e,2),t=a[0],s=a[1];return Object(l.jsxs)("div",{className:"homework",children:[Object(l.jsx)("h2",{className:"section_title",children:"Homework 3"}),Object(l.jsx)(S,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};s([].concat(Object(w.a)(t),[a]))}}),Object(l.jsx)("hr",{})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(k,{}),Object(l.jsx)(G,{})]})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.dace40c9.chunk.js.map