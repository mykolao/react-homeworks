(this["webpackJsonphomework-1"]=this["webpackJsonphomework-1"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={header:"Header_header__KywuQ",nav:"Header_nav__-ByPN",nav_link:"Header_nav_link__DBZYB",active:"Header_active__oRSrX",nav_hider:"Header_nav_hider__ip9gX",visible:"Header_visible__2Gbbi",hidden:"Header_hidden__2GjFY"}},function(e,t,a){e.exports={message:"Message_message__2Zzqx",message_body:"Message_message_body__3uv3u",avatar_containter:"Message_avatar_containter__36X5m",avatar_bg_low:"Message_avatar_bg_low__1SzhD",avatar_bg_high:"Message_avatar_bg_high__34-w9",avatar:"Message_avatar__3_BOX",message_username:"Message_message_username__MmdA5",content_time_container:"Message_content_time_container__Re2aN",message_content:"Message_message_content__UYtZh",message_time:"Message_message_time__1unGP"}},,function(e,t,a){e.exports={affairs:"Affairs_affairs__1EBG8",button:"Affairs_button__1MZZJ",buttons:"Affairs_buttons__3wm05"}},,function(e,t,a){e.exports={radio:"SuperRadio_radio__13JhW",input:"SuperRadio_input__2CiY3",option:"SuperRadio_option__3CtJM",selected:"SuperRadio_selected__33ItJ"}},function(e,t,a){e.exports={users:"HW8_users__1Ep7Z",user:"HW8_user__X0gZB",name:"HW8_name__2lp9p",age:"HW8_age__AWIZ6",filters:"HW8_filters__1U0Ur"}},function(e,t,a){e.exports={affair:"Affair_affair__3qXQV",priority:"Affair_priority__3e6VU",high:"Affair_high__2Cxtz",middle:"Affair_middle__3SRRT",low:"Affair_low__2wBDS",button:"Affair_button__6_Bot"}},,,function(e,t,a){e.exports={body:"HW6_body__3QHm4",buttons:"HW6_buttons__37M3c",span:"HW6_span__3pHRs"}},,function(e,t,a){e.exports={error:"Error404_error__338QL",number:"Error404_number__3fRaO",message:"Error404_message__3Z9pX",ascii:"Error404_ascii__10XxL"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__15Bg4",validInput:"SuperInputText_validInput__3j3SN",errorInput:"SuperInputText_errorInput__3cEtx",error:"SuperInputText_error__12BqD"}},function(e,t,a){e.exports={greeting:"Greeting_greeting__kBuzl",input:"Greeting_input__1rUBo",button:"Greeting_button__1QOU2",counter:"Greeting_counter__1gHe1"}},,,,function(e,t,a){e.exports={default:"SuperButton_default__2gfSd",red:"SuperButton_red__3vVYe",disabled:"SuperButton_disabled__1lrI_"}},,,function(e,t,a){e.exports={blue:"HW4_blue__1rWlL",column:"HW4_column__3oGkE",testSpanError:"HW4_testSpanError__3PlU6"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__gOHsF",spanClassName:"SuperCheckbox_spanClassName__GPCJM"}},,,,,function(e,t,a){e.exports={select:"SuperSelect_select__16mFk"}},,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),i=(a(42),a(10)),o=a(2),l=a(3),j=a(20),u=a.n(j),d=a(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.error,children:[Object(d.jsx)("div",{className:u.a.number,children:"404"}),Object(d.jsx)("div",{className:u.a.message,children:"Page not found!"}),Object(d.jsx)("div",{className:u.a.ascii,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},_=a(19),h=a(4),O=a(6),m=a(26),x=a.n(m),v=function(e){var t=e.red,a=e.className,n=e.disabled,c=Object(O.a)(e,["red","className","disabled"]),r="".concat(t?x.a.red:x.a.default," ").concat(a||""," ").concat(n?x.a.disabled:"");return Object(d.jsx)("button",Object(h.a)({className:r},c))},p={loading:!1},f=function(){var e=c.a.useState(1),t=Object(o.a)(e,2),a=t[0],n=t[1];c.a.useEffect((function(){var e=window.setInterval((function(){console.log("Spinnin"),n((function(e){return e+25*Math.abs(Math.sin(e))}))}),16);return function(){return window.clearInterval(e)}}),[]);var r={width:"3px",height:"27px",backgroundColor:"var(--color-red)",borderRadius:"50px",transform:"rotate(".concat(a,"deg)")};return Object(d.jsx)("div",{style:{paddingBottom:"12px"},children:Object(d.jsx)("div",{style:{height:"31px",width:"54px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("div",{style:r})})})};var g=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.loading}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 10"}),Object(d.jsx)("div",{style:{margin:"12px"},children:t?Object(d.jsx)(f,{}):Object(d.jsx)("div",{children:Object(d.jsx)(v,{onClick:function(){e({type:"TOGGLE_LOADING"}),window.setTimeout(e,2e3,{type:"TOGGLE_LOADING"})},children:"Load"})})}),Object(d.jsx)("hr",{})]})},N=a(35),k=a.n(N),C=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,c=Object(O.a)(e,["options","onChange","onChangeOption"]),r=(null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},"".concat(t).concat(e))})))||[];return Object(d.jsx)("select",Object(h.a)(Object(h.a)({className:k.a.select,onChange:function(e){var t=e.currentTarget.value;n&&n(t),a&&a(e)}},c),{},{children:r}))},S=a(13),y=a.n(S),w=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(O.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;r&&r(t),c&&c(e)}),i=a?a.map((function(e,a){return Object(d.jsxs)("label",{className:y.a.input,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===n,value:e,onChange:s}),Object(d.jsx)("div",{className:"".concat(y.a.option," ").concat(e===n?y.a.selected:y.a.not_selected),children:e})]},t+"-"+a)})):[];return Object(d.jsx)("div",{className:y.a.radio,children:i})},H=["x","y","z"];var I=function(){var e=Object(n.useState)(H[1]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 7"}),Object(d.jsx)("div",{children:Object(d.jsx)(C,{options:H,value:a,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(w,{name:"radio",options:H,value:a,onChangeOption:c})}),Object(d.jsx)("hr",{})]})},E=a(25),M=function(e,t){switch(t.type){case"sort":var a=Object(E.a)(e);return"up"===t.payload?a.sort((function(e,t){return e.name.localeCompare(t.name)})):a.sort((function(e,t){return t.name.localeCompare(e.name)}));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},A=a(14),B=a.n(A),G=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var T=function(){var e=Object(n.useState)(G),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a.map((function(e){return Object(d.jsxs)("div",{className:B.a.user,children:[Object(d.jsx)("div",{className:B.a.name,children:e.name}),Object(d.jsx)("div",{className:B.a.age,children:e.age})]},e._id)}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 8"}),Object(d.jsx)("div",{className:B.a.users,children:r}),Object(d.jsxs)("div",{className:B.a.filters,children:[Object(d.jsx)(v,{onClick:function(){return c(M(G,{type:"sort",payload:"up"}))},children:"Sort Up"}),Object(d.jsx)(v,{onClick:function(){return c(M(G,{type:"sort",payload:"down"}))},children:"Sort Down"}),Object(d.jsx)(v,{onClick:function(){return c(M(G,{type:"check",payload:18}))},children:"Check 18"})]}),Object(d.jsx)("hr",{})]})},W=function(e){var t=String(e.getHours()),a=String(e.getMinutes()),n=String(e.getSeconds());return t=+t<10?"0".concat(t):t,a=+a<10?"0".concat(a):a,n=+n<10?"0".concat(n):n,"".concat(t,":").concat(a,":").concat(n)},D=function(e){var t=String(e.getFullYear()),a=String(e.getMonth()+1),n=String(e.getDay()+2);return a=+a<10?"0".concat(a):a,n=+n<10?"0".concat(n):n,"".concat(t,":").concat(a,":").concat(n)},F={margin:"12px"},J={fontSize:"1.2rem",fontWeight:"bold",letterSpacing:"1px",color:"var(--color-blue)",paddingBottom:"2px"},P=Object(h.a)(Object(h.a)({},J),{},{color:"var(--color-red)"}),U={display:"flex",gap:"4px",marginTop:"8px"};var L=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(new Date),u=Object(o.a)(j,1)[0],b=Object(n.useState)(!1),_=Object(o.a)(b,2),h=_[0],O=_[1],m=function(){window.clearInterval(a)},x=W(i||u),p=D(i||u);return Object(d.jsxs)("div",{style:F,children:[Object(d.jsx)("div",{style:J,onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},children:x}),h&&Object(d.jsx)("div",{style:P,children:p}),Object(d.jsxs)("div",{style:U,children:[Object(d.jsx)(v,{onClick:function(){m();var e=window.setInterval((function(){l(new Date)}),1e3);c(e)},children:"Start"}),Object(d.jsx)(v,{onClick:m,children:"Stop"})]})]})};var R=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 9"}),Object(d.jsx)(L,{}),Object(d.jsx)("hr",{})]})},X=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I,{}),Object(d.jsx)(T,{}),Object(d.jsx)(R,{}),Object(d.jsx)(g,{})]})},Z=function(){return Object(d.jsx)("div",{className:"section_title",children:"Junior+ Page"})},q=a(9),Y=a.n(q),z=function(e){return Object(d.jsxs)("div",{className:Y.a.message,children:[Object(d.jsx)("div",{className:Y.a.avatar_containter,children:Object(d.jsx)("div",{className:Y.a.avatar_bg_low,children:Object(d.jsx)("div",{className:Y.a.avatar_bg_high,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:Y.a.avatar})})})}),Object(d.jsxs)("div",{className:Y.a.message_body,children:[Object(d.jsx)("div",{className:Y.a.message_username,children:e.name}),Object(d.jsxs)("div",{className:Y.a.content_time_container,children:[Object(d.jsx)("div",{className:Y.a.message_content,children:e.message}),Object(d.jsx)("div",{className:Y.a.message_time,children:Object(d.jsx)("span",{children:e.time})})]})]})]})},Q="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",K="\u0412\u0430\u0441\u044f\u043d\u044b\u0447",V="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u043d\u0430 \u0440\u0430\u0441\u043f\u0438\u0442\u0438\u0435 \u0431\u043b\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \ud83e\uddd0",$="22:00";var ee=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 1"}),Object(d.jsx)(z,{avatar:Q,name:K,message:V,time:$}),Object(d.jsx)("hr",{})]})},te=a(15),ae=a.n(te);var ne=function(e){var t=e.affair.priority;return Object(d.jsxs)("div",{className:ae.a.affair,children:[Object(d.jsx)("div",{className:ae.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:"".concat(ae.a.priority," ").concat(ae.a[t]),children:t}),Object(d.jsx)("button",{className:ae.a.button,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})},ce=a(11),re=a.n(ce);var se=function(e){var t=e.data.map((function(t){return Object(d.jsx)(ne,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:re.a.affairs,children:[t,Object(d.jsxs)("div",{className:re.a.buttons,children:[Object(d.jsx)("button",{className:re.a.button,onClick:function(){return e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:re.a.button,onClick:function(){return e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:re.a.button,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:re.a.button,onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},ie=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var oe=function(){var e,t,a=Object(n.useState)(ie),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)("all"),l=Object(o.a)(i,2),j=l[0],u=l[1],b=(e=r,"all"===(t=j)?e:e.filter((function(e){return e.priority===t})));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 2"}),Object(d.jsx)(se,{data:b,setFilter:u,deleteAffairCallback:function(e){return s(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{})]})},le=a(52),je=a(21),ue=a.n(je),de=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(ue.a.error," ").concat(i||""),j="".concat(r?ue.a.errorInput:ue.a.validInput," ").concat(ue.a.superInput," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},be=a(22),_e=a.n(be),he=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,c=e.error,r=e.totalUsers;return Object(d.jsxs)("div",{className:_e.a.greeting,children:[Object(d.jsx)("div",{className:_e.a.input,children:Object(d.jsx)(de,{value:t,onEnter:n,onChange:a,error:c})}),Object(d.jsx)(v,{disabled:!!c,onClick:n,className:_e.a.button,children:"Add"}),Object(d.jsx)("span",{className:_e.a.counter,children:r})]})},Oe=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)("Name is required."),j=Object(o.a)(l,2),u=j[0],b=j[1],_=t.length;return Object(d.jsx)(he,{name:s,setNameCallback:function(e){var t=e.target.value;t.length?(i(t),b("")):(i(""),b("Name is required."))},addUser:function(){s.length&&(a(s),i(""),alert("Hello  ".concat(s))),b("Name is required.")},error:u,totalUsers:_})};var me=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 3"}),Object(d.jsx)(Oe,{users:a,addUserCallback:function(e){var t={_id:Object(le.a)(),name:e};c([].concat(Object(E.a)(a),[t]))}}),Object(d.jsx)("hr",{})]})},xe=a(29),ve=a.n(xe),pe=a(30),fe=a.n(pe),ge=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(fe.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},r)),c&&Object(d.jsx)("span",{className:fe.a.spanClassName,children:c})]})};var Ne=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a?"":"Wrong Input",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 4"}),Object(d.jsxs)("div",{className:ve.a.column,children:[Object(d.jsx)(de,{value:a,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(de,{className:ve.a.blue}),Object(d.jsx)(v,{children:"Default"}),Object(d.jsx)(v,{red:!0,onClick:s,children:"Delete "}),Object(d.jsx)(v,{disabled:!0,children:"Disabled"}),Object(d.jsx)(ge,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(ge,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{})]})},ke=a(18),Ce=a.n(ke),Se=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,r=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=c||{},b=u.children,_=u.onDoubleClick,m=u.className,x=Object(O.a)(u,["children","onDoubleClick","className"]),v="".concat(Ce.a.span," ").concat(m);return Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(de,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()}},r)):Object(d.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),_&&_(e)},className:v},x),{},{children:["\u270f\ufe0f ",b||r.value]}))})};function ye(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}ye("test",{x:"A",y:1});var we=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 6"}),Object(d.jsxs)("div",{className:Ce.a.body,children:[Object(d.jsx)(Se,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text..."}}),Object(d.jsxs)("div",{className:Ce.a.buttons,children:[Object(d.jsx)(v,{onClick:function(){ye("editable-span-value",a)},children:"Save"}),Object(d.jsx)(v,{onClick:function(){c(function(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}("editable-span-value",""))},children:"Restore"})]})]}),Object(d.jsx)("hr",{})]})};var He=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ee,{}),Object(d.jsx)(oe,{}),Object(d.jsx)(me,{}),Object(d.jsx)(Ne,{}),Object(d.jsx)(we,{})]})},Ie="/pre-junior",Ee="/junior",Me="/junior_plus";var Ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(l.a,{to:Ie})}}),Object(d.jsx)(l.b,{path:Ie,render:function(){return Object(d.jsx)(He,{})}}),Object(d.jsx)(l.b,{path:Ee,render:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(l.b,{path:Me,render:function(){return Object(d.jsx)(Z,{})}}),Object(d.jsx)(l.b,{render:function(){return Object(d.jsx)(b,{})}})]})})},Be=a(8),Ge=a.n(Be);var Te=function(){var e=Object(n.useState)(">"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("hidden"),s=Object(o.a)(r,2),l=s[0],j=s[1],u=function(){c(">"===a?"<":">"),j("hidden"===l?"visible":"hidden")};return Object(d.jsxs)("div",{className:Ge.a.header,onMouseEnter:u,onMouseLeave:u,children:[Object(d.jsxs)("nav",{className:"".concat(Ge.a.nav," ").concat(Ge.a[l]),children:[Object(d.jsx)(i.b,{className:Ge.a.nav_link,activeClassName:Ge.a.active,to:Ie,children:"Pre Junior"}),Object(d.jsx)(i.b,{className:Ge.a.nav_link,activeClassName:Ge.a.active,to:Ee,children:"Junior"}),Object(d.jsx)(i.b,{className:Ge.a.nav_link,activeClassName:Ge.a.active,to:Me,children:"Junior+"})]}),Object(d.jsx)("div",{className:"".concat(Ge.a.nav_hider," ").concat(Ge.a[l]),children:a})]})};var We=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 5"}),Object(d.jsx)(Te,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(Ae,{})]})})})},De=a(37),Fe=Object(De.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return Object(h.a)(Object(h.a)({},e),{},{loading:!e.loading});default:return e}}));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)("div",{children:Object(d.jsx)(_.a,{store:Fe,children:Object(d.jsx)(We,{})})})}),document.getElementById("root"))}],[[50,1,2]]]);
//# sourceMappingURL=main.803fa5cf.chunk.js.map