(this["webpackJsonphomework-1"]=this["webpackJsonphomework-1"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={header:"Header_header__KywuQ",nav:"Header_nav__-ByPN",nav_link:"Header_nav_link__DBZYB",active:"Header_active__oRSrX",nav_hider:"Header_nav_hider__ip9gX",visible:"Header_visible__2Gbbi",hidden:"Header_hidden__2GjFY"}},function(e,t,a){e.exports={message:"Message_message__2Zzqx",message_body:"Message_message_body__3uv3u",avatar_containter:"Message_avatar_containter__36X5m",avatar_bg_low:"Message_avatar_bg_low__1SzhD",avatar_bg_high:"Message_avatar_bg_high__34-w9",avatar:"Message_avatar__3_BOX",message_username:"Message_message_username__MmdA5",content_time_container:"Message_content_time_container__Re2aN",message_content:"Message_message_content__UYtZh",message_time:"Message_message_time__1unGP"}},,function(e,t,a){e.exports={affairs:"Affairs_affairs__1EBG8",button:"Affairs_button__1MZZJ",buttons:"Affairs_buttons__3wm05"}},function(e,t,a){e.exports={radio:"SuperRadio_radio__13JhW",input:"SuperRadio_input__2CiY3",option:"SuperRadio_option__3CtJM",selected:"SuperRadio_selected__33ItJ"}},function(e,t,a){e.exports={users:"HW8_users__1Ep7Z",user:"HW8_user__X0gZB",name:"HW8_name__2lp9p",age:"HW8_age__AWIZ6",filters:"HW8_filters__1U0Ur"}},function(e,t,a){e.exports={affair:"Affair_affair__3qXQV",priority:"Affair_priority__3e6VU",high:"Affair_high__2Cxtz",middle:"Affair_middle__3SRRT",low:"Affair_low__2wBDS",button:"Affair_button__6_Bot"}},,,function(e,t,a){e.exports={body:"HW6_body__3QHm4",buttons:"HW6_buttons__37M3c",span:"HW6_span__3pHRs"}},function(e,t,a){e.exports={error:"Error404_error__338QL",number:"Error404_number__3fRaO",message:"Error404_message__3Z9pX",ascii:"Error404_ascii__10XxL"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__15Bg4",validInput:"SuperInputText_validInput__3j3SN",errorInput:"SuperInputText_errorInput__3cEtx",error:"SuperInputText_error__12BqD"}},function(e,t,a){e.exports={greeting:"Greeting_greeting__kBuzl",input:"Greeting_input__1rUBo",button:"Greeting_button__1QOU2",counter:"Greeting_counter__1gHe1"}},,,function(e,t,a){e.exports={default:"SuperButton_default__2gfSd",red:"SuperButton_red__3vVYe",disabled:"SuperButton_disabled__1lrI_"}},,,function(e,t,a){e.exports={blue:"HW4_blue__1rWlL",column:"HW4_column__3oGkE",testSpanError:"HW4_testSpanError__3PlU6"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__gOHsF",spanClassName:"SuperCheckbox_spanClassName__GPCJM"}},,,,,function(e,t,a){e.exports={select:"SuperSelect_select__16mFk"}},,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(31),s=a.n(r),i=(a(39),a(10)),o=a(2),l=a(3),j=a(18),u=a.n(j),d=a(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.error,children:[Object(d.jsx)("div",{className:u.a.number,children:"404"}),Object(d.jsx)("div",{className:u.a.message,children:"Page not found!"}),Object(d.jsx)("div",{className:u.a.ascii,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},_=a(4),h=a(6),m=a(32),O=a.n(m),x=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,c=Object(h.a)(e,["options","onChange","onChangeOption"]),r=(null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},"".concat(t).concat(e))})))||[];return Object(d.jsx)("select",Object(_.a)(Object(_.a)({className:O.a.select,onChange:function(e){var t=e.currentTarget.value;n&&n(t),a&&a(e)}},c),{},{children:r}))},v=a(12),p=a.n(v),f=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;r&&r(t),c&&c(e)}),i=a?a.map((function(e,a){return Object(d.jsxs)("label",{className:p.a.input,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===n,value:e,onChange:s}),Object(d.jsx)("div",{className:"".concat(p.a.option," ").concat(e===n?p.a.selected:p.a.not_selected),children:e})]},t+"-"+a)})):[];return Object(d.jsx)("div",{className:p.a.radio,children:i})},g=["x","y","z"];var N=function(){var e=Object(n.useState)(g[1]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 7"}),Object(d.jsx)("div",{children:Object(d.jsx)(x,{options:g,value:a,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{name:"radio",options:g,value:a,onChangeOption:c})}),Object(d.jsx)("hr",{})]})},C=a(23),k=a.n(C),S=function(e){var t=e.red,a=e.className,n=e.disabled,c=Object(h.a)(e,["red","className","disabled"]),r="".concat(t?k.a.red:k.a.default," ").concat(a||""," ").concat(n?k.a.disabled:"");return Object(d.jsx)("button",Object(_.a)({className:r},c))},y=a(22),w=function(e,t){switch(t.type){case"sort":var a=Object(y.a)(e);return"up"===t.payload?a.sort((function(e,t){return e.name.localeCompare(t.name)})):a.sort((function(e,t){return t.name.localeCompare(e.name)}));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},H=a(13),M=a.n(H),E=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var I=function(){var e=Object(n.useState)(E),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a.map((function(e){return Object(d.jsxs)("div",{className:M.a.user,children:[Object(d.jsx)("div",{className:M.a.name,children:e.name}),Object(d.jsx)("div",{className:M.a.age,children:e.age})]},e._id)}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 8"}),Object(d.jsx)("div",{className:M.a.users,children:r}),Object(d.jsxs)("div",{className:M.a.filters,children:[Object(d.jsx)(S,{onClick:function(){return c(w(E,{type:"sort",payload:"up"}))},children:"Sort Up"}),Object(d.jsx)(S,{onClick:function(){return c(w(E,{type:"sort",payload:"down"}))},children:"Sort Down"}),Object(d.jsx)(S,{onClick:function(){return c(w(E,{type:"check",payload:18}))},children:"Check 18"})]}),Object(d.jsx)("hr",{})]})},B=function(e){var t=String(e.getHours()),a=String(e.getMinutes()),n=String(e.getSeconds());return t=+t<10?"0".concat(t):t,a=+a<10?"0".concat(a):a,n=+n<10?"0".concat(n):n,"".concat(t,":").concat(a,":").concat(n)},A=function(e){var t=String(e.getFullYear()),a=String(e.getMonth()+1),n=String(e.getDay()+2);return a=+a<10?"0".concat(a):a,n=+n<10?"0".concat(n):n,"".concat(t,":").concat(a,":").concat(n)},W={margin:"12px"},F={fontSize:"1.2rem",fontWeight:"bold",letterSpacing:"1px",color:"var(--color-blue)",paddingBottom:"2px"},T=Object(_.a)(Object(_.a)({},F),{},{color:"var(--color-red)"}),D={display:"flex",gap:"4px",marginTop:"8px"};var J=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(new Date),u=Object(o.a)(j,1)[0],b=Object(n.useState)(!1),_=Object(o.a)(b,2),h=_[0],m=_[1],O=function(){window.clearInterval(a)},x=B(i||u),v=A(i||u);return Object(d.jsxs)("div",{style:W,children:[Object(d.jsx)("div",{style:F,onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)},children:x}),h&&Object(d.jsx)("div",{style:T,children:v}),Object(d.jsxs)("div",{style:D,children:[Object(d.jsx)(S,{onClick:function(){O();var e=window.setInterval((function(){l(new Date)}),1e3);c(e)},children:"Start"}),Object(d.jsx)(S,{onClick:O,children:"Stop"})]})]})};var P=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 9"}),Object(d.jsx)(J,{}),Object(d.jsx)("hr",{})]})},U=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(I,{}),Object(d.jsx)(P,{})]})},R=function(){return Object(d.jsx)("div",{className:"section_title",children:"Junior+ Page"})},G=a(9),X=a.n(G),Z=function(e){return Object(d.jsxs)("div",{className:X.a.message,children:[Object(d.jsx)("div",{className:X.a.avatar_containter,children:Object(d.jsx)("div",{className:X.a.avatar_bg_low,children:Object(d.jsx)("div",{className:X.a.avatar_bg_high,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:X.a.avatar})})})}),Object(d.jsxs)("div",{className:X.a.message_body,children:[Object(d.jsx)("div",{className:X.a.message_username,children:e.name}),Object(d.jsxs)("div",{className:X.a.content_time_container,children:[Object(d.jsx)("div",{className:X.a.message_content,children:e.message}),Object(d.jsx)("div",{className:X.a.message_time,children:Object(d.jsx)("span",{children:e.time})})]})]})]})},q="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",Y="\u0412\u0430\u0441\u044f\u043d\u044b\u0447",z="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u043d\u0430 \u0440\u0430\u0441\u043f\u0438\u0442\u0438\u0435 \u0431\u043b\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \ud83e\uddd0",L="22:00";var Q=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 1"}),Object(d.jsx)(Z,{avatar:q,name:Y,message:z,time:L}),Object(d.jsx)("hr",{})]})},K=a(14),V=a.n(K);var $=function(e){var t=e.affair.priority;return Object(d.jsxs)("div",{className:V.a.affair,children:[Object(d.jsx)("div",{className:V.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:"".concat(V.a.priority," ").concat(V.a[t]),children:t}),Object(d.jsx)("button",{className:V.a.button,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})},ee=a(11),te=a.n(ee);var ae=function(e){var t=e.data.map((function(t){return Object(d.jsx)($,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:te.a.affairs,children:[t,Object(d.jsxs)("div",{className:te.a.buttons,children:[Object(d.jsx)("button",{className:te.a.button,onClick:function(){return e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){return e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:te.a.button,onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},ne=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var ce=function(){var e,t,a=Object(n.useState)(ne),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)("all"),l=Object(o.a)(i,2),j=l[0],u=l[1],b=(e=r,"all"===(t=j)?e:e.filter((function(e){return e.priority===t})));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 2"}),Object(d.jsx)(ae,{data:b,setFilter:u,deleteAffairCallback:function(e){return s(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{})]})},re=a(48),se=a(19),ie=a.n(se),oe=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(ie.a.error," ").concat(i||""),j="".concat(r?ie.a.errorInput:ie.a.validInput," ").concat(ie.a.superInput," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(_.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},le=a(20),je=a.n(le),ue=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,c=e.error,r=e.totalUsers;return Object(d.jsxs)("div",{className:je.a.greeting,children:[Object(d.jsx)("div",{className:je.a.input,children:Object(d.jsx)(oe,{value:t,onEnter:n,onChange:a,error:c})}),Object(d.jsx)(S,{disabled:!!c,onClick:n,className:je.a.button,children:"Add"}),Object(d.jsx)("span",{className:je.a.counter,children:r})]})},de=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)("Name is required."),j=Object(o.a)(l,2),u=j[0],b=j[1],_=t.length;return Object(d.jsx)(ue,{name:s,setNameCallback:function(e){var t=e.target.value;t.length?(i(t),b("")):(i(""),b("Name is required."))},addUser:function(){s.length&&(a(s),i(""),alert("Hello  ".concat(s))),b("Name is required.")},error:u,totalUsers:_})};var be=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 3"}),Object(d.jsx)(de,{users:a,addUserCallback:function(e){var t={_id:Object(re.a)(),name:e};c([].concat(Object(y.a)(a),[t]))}}),Object(d.jsx)("hr",{})]})},_e=a(26),he=a.n(_e),me=a(27),Oe=a.n(me),xe=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Oe.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},r)),c&&Object(d.jsx)("span",{className:Oe.a.spanClassName,children:c})]})};var ve=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a?"":"Wrong Input",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 4"}),Object(d.jsxs)("div",{className:he.a.column,children:[Object(d.jsx)(oe,{value:a,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(oe,{className:he.a.blue}),Object(d.jsx)(S,{children:"Default"}),Object(d.jsx)(S,{red:!0,onClick:s,children:"Delete "}),Object(d.jsx)(S,{disabled:!0,children:"Disabled"}),Object(d.jsx)(xe,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(xe,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{})]})},pe=a(17),fe=a.n(pe),ge=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,r=Object(h.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=c||{},b=u.children,m=u.onDoubleClick,O=u.className,x=Object(h.a)(u,["children","onDoubleClick","className"]),v="".concat(fe.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(oe,Object(_.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()}},r)):Object(d.jsxs)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){j(!0),m&&m(e)},className:v},x),{},{children:["\u270f\ufe0f ",b||r.value]}))})};function Ne(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}Ne("test",{x:"A",y:1});var Ce=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 6"}),Object(d.jsxs)("div",{className:fe.a.body,children:[Object(d.jsx)(ge,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text..."}}),Object(d.jsxs)("div",{className:fe.a.buttons,children:[Object(d.jsx)(S,{onClick:function(){Ne("editable-span-value",a)},children:"Save"}),Object(d.jsx)(S,{onClick:function(){c(function(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}("editable-span-value",""))},children:"Restore"})]})]}),Object(d.jsx)("hr",{})]})};var ke=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(Q,{}),Object(d.jsx)(ce,{}),Object(d.jsx)(be,{}),Object(d.jsx)(ve,{}),Object(d.jsx)(Ce,{})]})},Se="/pre-junior",ye="/junior",we="/junior_plus";var He=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(l.a,{to:Se})}}),Object(d.jsx)(l.b,{path:Se,render:function(){return Object(d.jsx)(ke,{})}}),Object(d.jsx)(l.b,{path:ye,render:function(){return Object(d.jsx)(U,{})}}),Object(d.jsx)(l.b,{path:we,render:function(){return Object(d.jsx)(R,{})}}),Object(d.jsx)(l.b,{render:function(){return Object(d.jsx)(b,{})}})]})})},Me=a(8),Ee=a.n(Me);var Ie=function(){var e=Object(n.useState)(">"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("hidden"),s=Object(o.a)(r,2),l=s[0],j=s[1],u=function(){c(">"===a?"<":">"),j("hidden"===l?"visible":"hidden")};return Object(d.jsxs)("div",{className:Ee.a.header,onMouseEnter:u,onMouseLeave:u,children:[Object(d.jsxs)("nav",{className:"".concat(Ee.a.nav," ").concat(Ee.a[l]),children:[Object(d.jsx)(i.b,{className:Ee.a.nav_link,activeClassName:Ee.a.active,to:Se,children:"Pre Junior"}),Object(d.jsx)(i.b,{className:Ee.a.nav_link,activeClassName:Ee.a.active,to:ye,children:"Junior"}),Object(d.jsx)(i.b,{className:Ee.a.nav_link,activeClassName:Ee.a.active,to:we,children:"Junior+"})]}),Object(d.jsx)("div",{className:"".concat(Ee.a.nav_hider," ").concat(Ee.a[l]),children:a})]})};var Be=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 5"}),Object(d.jsx)(Ie,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(He,{})]})})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)("div",{children:Object(d.jsx)(Be,{})})}),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.ae76e8dc.chunk.js.map