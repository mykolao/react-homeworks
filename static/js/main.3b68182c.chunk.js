(this["webpackJsonphomework-1"]=this["webpackJsonphomework-1"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={header:"Header_header__KywuQ",nav:"Header_nav__-ByPN",nav_link:"Header_nav_link__DBZYB",active:"Header_active__oRSrX",nav_hider:"Header_nav_hider__ip9gX",visible:"Header_visible__2Gbbi",hidden:"Header_hidden__2GjFY"}},function(e,t,n){e.exports={message:"Message_message__2Zzqx",message_body:"Message_message_body__3uv3u",avatar_containter:"Message_avatar_containter__36X5m",avatar_bg_low:"Message_avatar_bg_low__1SzhD",avatar_bg_high:"Message_avatar_bg_high__34-w9",avatar:"Message_avatar__3_BOX",message_username:"Message_message_username__MmdA5",content_time_container:"Message_content_time_container__Re2aN",message_content:"Message_message_content__UYtZh",message_time:"Message_message_time__1unGP"}},,,,function(e,t,n){e.exports={affairs:"Affairs_affairs__1EBG8",button:"Affairs_button__1MZZJ",buttons:"Affairs_buttons__3wm05"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__13JhW",input:"SuperRadio_input__2CiY3",option:"SuperRadio_option__3CtJM",selected:"SuperRadio_selected__33ItJ"}},function(e,t,n){e.exports={users:"HW8_users__1Ep7Z",user:"HW8_user__X0gZB",name:"HW8_name__2lp9p",age:"HW8_age__AWIZ6",filters:"HW8_filters__1U0Ur"}},function(e,t,n){e.exports={affair:"Affair_affair__3qXQV",priority:"Affair_priority__3e6VU",high:"Affair_high__2Cxtz",middle:"Affair_middle__3SRRT",low:"Affair_low__2wBDS",button:"Affair_button__6_Bot"}},,,function(e,t,n){e.exports={body:"HW6_body__3QHm4",buttons:"HW6_buttons__37M3c",span:"HW6_span__3pHRs"}},function(e,t,n){e.exports={error:"Error404_error__338QL",number:"Error404_number__3fRaO",message:"Error404_message__3Z9pX",ascii:"Error404_ascii__10XxL"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__15Bg4",validInput:"SuperInputText_validInput__3j3SN",errorInput:"SuperInputText_errorInput__3cEtx",error:"SuperInputText_error__12BqD"}},function(e,t,n){e.exports={greeting:"Greeting_greeting__kBuzl",input:"Greeting_input__1rUBo",button:"Greeting_button__1QOU2",counter:"Greeting_counter__1gHe1"}},,,,function(e,t,n){e.exports={default:"SuperButton_default__2gfSd",red:"SuperButton_red__3vVYe",disabled:"SuperButton_disabled__1lrI_"}},function(e,t,n){e.exports={container:"HW12_container__2fO--",dark:"HW12_dark__31Nl3","dark-text":"HW12_dark-text__2V1Bd",red:"HW12_red__3g0BQ","red-text":"HW12_red-text__1RvR2",light:"HW12_light__3lVMD","light-text":"HW12_light-text__w6xg-"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__1rWlL",column:"HW4_column__3oGkE",testSpanError:"HW4_testSpanError__3PlU6"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__gOHsF",spanClassName:"SuperCheckbox_spanClassName__GPCJM"}},,,,,,,function(e,t,n){e.exports={range:"SuperRange_range__2auuV"}},function(e,t,n){e.exports={container:"SuperDoubleRange_container__2iQ9q"}},,function(e,t,n){e.exports={select:"SuperSelect_select__16mFk"}},,,,,,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(57),n(18)),o=n(4),l=n(8),j=n(26),u=n.n(j),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.error,children:[Object(d.jsx)("div",{className:u.a.number,children:"404"}),Object(d.jsx)("div",{className:u.a.message,children:"Page not found!"}),Object(d.jsx)("div",{className:u.a.ascii,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=n(16),_=n(6),O=n(10),x=n(32),m=n.n(x),v=function(e){var t=e.red,n=e.className,a=e.disabled,c=Object(O.a)(e,["red","className","disabled"]),r="".concat(t?m.a.red:m.a.default," ").concat(n||""," ").concat(a?m.a.disabled:"");return Object(d.jsx)("button",Object(_.a)({className:r},c))},p={loading:!1},f=function(){var e=c.a.useState(1),t=Object(o.a)(e,2),n=t[0],a=t[1];c.a.useEffect((function(){var e=window.setInterval((function(){console.log("Spinnin"),a((function(e){return e+25*Math.abs(Math.sin(e))}))}),16);return function(){return window.clearInterval(e)}}),[]);var r={width:"3px",height:"27px",backgroundColor:"var(--color-red)",borderRadius:"50px",transform:"rotate(".concat(n,"deg)")};return Object(d.jsx)("div",{style:{paddingBottom:"12px"},children:Object(d.jsx)("div",{style:{height:"31px",width:"54px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("div",{style:r})})})};var g=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.loading}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 10"}),Object(d.jsx)("div",{style:{margin:"12px"},children:t?Object(d.jsx)(f,{}):Object(d.jsx)("div",{children:Object(d.jsx)(v,{onClick:function(){e({type:"TOGGLE_LOADING"}),window.setTimeout(e,2e3,{type:"TOGGLE_LOADING"})},children:"Load"})})}),Object(d.jsx)("hr",{})]})},N=n(45),C=n.n(N),k=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(O.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(C.a.range," ").concat(a||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(_.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},y=n(79),S=n(46),w=n.n(S),H=function(e){var t=e.onChangeRange,n=e.min,a=e.max,c=e.step;n=n||0,a=a||100,c=c||1;var r=e.values||[n,a],s=Object(o.a)(r,2),i=s[0],l=s[1];i>l&&(i=l);return Object(d.jsx)("div",{className:w.a.container,children:Object(d.jsx)(y.a,{min:n,max:a,step:c,value:[i,l],onChange:function(e,n){t&&t(n)}})})},E={margin:"0 12px",display:"flex",alignItems:"center",gap:"12px"},I={fontSize:"1.2rem",fontWeight:"bold",color:"var(--color-violet)"};var M=function(){var e=c.a.useState(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=c.a.useState(100),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 11"}),Object(d.jsxs)("div",{style:E,children:[Object(d.jsx)(k,{onChangeRange:function(e){a(e)},value:n}),Object(d.jsx)("span",{style:I,children:n})]}),Object(d.jsxs)("div",{style:E,children:[Object(d.jsx)(H,{onChangeRange:function(e){var t=Object(o.a)(e,2),c=t[0],r=t[1];c!==n?a(c):l(r)},values:[n,i]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:I,children:n}),Object(d.jsx)("span",{style:Object(_.a)(Object(_.a)({},I),{},{marginLeft:"6px"}),children:i})]})]}),Object(d.jsx)("hr",{})]})},W=n(48),A=n.n(W),B=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(O.a)(e,["options","onChange","onChangeOption"]),r=(null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},"".concat(t).concat(e))})))||[];return Object(d.jsx)("select",Object(_.a)(Object(_.a)({className:A.a.select,onChange:function(e){var t=e.currentTarget.value;a&&a(t),n&&n(e)}},c),{},{children:r}))},R=n(20),T=n.n(R),G=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(O.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var t=e.currentTarget.value;r&&r(t),c&&c(e)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:T.a.input,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===a,value:e,onChange:s}),Object(d.jsx)("div",{className:"".concat(T.a.option," ").concat(e===a?T.a.selected:T.a.not_selected),children:e})]},t+"-"+n)})):[];return Object(d.jsx)("div",{className:T.a.radio,children:i})},D=["x","y","z"];var F=function(){var e=Object(a.useState)(D[1]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 7"}),Object(d.jsx)("div",{children:Object(d.jsx)(B,{options:D,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(G,{name:"radio",options:D,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{})]})},L=n(9),U=function(e,t){switch(t.type){case"sort":var n=Object(L.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.name.localeCompare(t.name)})):n.sort((function(e,t){return t.name.localeCompare(e.name)}));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},J=n(21),P=n.n(J),X=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Z=function(){var e=Object(a.useState)(X),t=Object(o.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:P.a.user,children:[Object(d.jsx)("div",{className:P.a.name,children:e.name}),Object(d.jsx)("div",{className:P.a.age,children:e.age})]},e._id)}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 8"}),Object(d.jsx)("div",{className:P.a.users,children:r}),Object(d.jsxs)("div",{className:P.a.filters,children:[Object(d.jsx)(v,{onClick:function(){return c(U(X,{type:"sort",payload:"up"}))},children:"Sort Up"}),Object(d.jsx)(v,{onClick:function(){return c(U(X,{type:"sort",payload:"down"}))},children:"Sort Down"}),Object(d.jsx)(v,{onClick:function(){return c(U(X,{type:"check",payload:18}))},children:"Check 18"})]}),Object(d.jsx)("hr",{})]})},q=function(e){var t=String(e.getHours()),n=String(e.getMinutes()),a=String(e.getSeconds());return t=+t<10?"0".concat(t):t,n=+n<10?"0".concat(n):n,a=+a<10?"0".concat(a):a,"".concat(t,":").concat(n,":").concat(a)},z=function(e){var t=String(e.getFullYear()),n=String(e.getMonth()+1),a=String(e.getDay()+2);return n=+n<10?"0".concat(n):n,a=+a<10?"0".concat(a):a,"".concat(t,":").concat(n,":").concat(a)},Q={margin:"12px"},Y={fontSize:"1.2rem",fontWeight:"bold",letterSpacing:"1px",color:"var(--color-blue)",paddingBottom:"2px"},V=Object(_.a)(Object(_.a)({},Y),{},{color:"var(--color-red)"}),K={display:"flex",gap:"4px",marginTop:"8px"};var $=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(new Date),u=Object(o.a)(j,1)[0],b=Object(a.useState)(!1),h=Object(o.a)(b,2),_=h[0],O=h[1],x=function(){window.clearInterval(n)},m=q(i||u),p=z(i||u);return Object(d.jsxs)("div",{style:Q,children:[Object(d.jsx)("div",{style:Y,onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},children:m}),_&&Object(d.jsx)("div",{style:V,children:p}),Object(d.jsxs)("div",{style:K,children:[Object(d.jsx)(v,{onClick:function(){x();var e=window.setInterval((function(){l(new Date)}),1e3);c(e)},children:"Start"}),Object(d.jsx)(v,{onClick:x,children:"Stop"})]})]})};var ee=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 9"}),Object(d.jsx)($,{}),Object(d.jsx)("hr",{})]})},te=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ee,{}),Object(d.jsx)(g,{}),Object(d.jsx)(M,{})]})},ne="dark",ae=n(33),ce=n.n(ae),re=["dark","light","red"];var se=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.theme}));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 12"}),Object(d.jsxs)("div",{className:"".concat(ce.a[t]," ").concat(ce.a.container),children:[Object(d.jsx)("span",{className:ce.a[t+"-text"],children:"Hello 12"}),Object(d.jsx)(B,{options:re,value:t,onChangeOption:function(t){e(function(e){return{type:"CHANGE_THEME",payload:e}}(t))}})]}),Object(d.jsx)("hr",{})]})},ie=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(se,{})})},oe=n(15),le=n.n(oe),je=function(e){return Object(d.jsxs)("div",{className:le.a.message,children:[Object(d.jsx)("div",{className:le.a.avatar_containter,children:Object(d.jsx)("div",{className:le.a.avatar_bg_low,children:Object(d.jsx)("div",{className:le.a.avatar_bg_high,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:le.a.avatar})})})}),Object(d.jsxs)("div",{className:le.a.message_body,children:[Object(d.jsx)("div",{className:le.a.message_username,children:e.name}),Object(d.jsxs)("div",{className:le.a.content_time_container,children:[Object(d.jsx)("div",{className:le.a.message_content,children:e.message}),Object(d.jsx)("div",{className:le.a.message_time,children:Object(d.jsx)("span",{children:e.time})})]})]})]})},ue="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",de="\u0412\u0430\u0441\u044f\u043d\u044b\u0447",be="\u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u043d\u0430 \u0440\u0430\u0441\u043f\u0438\u0442\u0438\u0435 \u0431\u043b\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \ud83e\uddd0",he="22:00";var _e=function(){return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 1"}),Object(d.jsx)(je,{avatar:ue,name:de,message:be,time:he}),Object(d.jsx)("hr",{})]})},Oe=n(22),xe=n.n(Oe);var me=function(e){var t=e.affair.priority;return Object(d.jsxs)("div",{className:xe.a.affair,children:[Object(d.jsx)("div",{className:xe.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:"".concat(xe.a.priority," ").concat(xe.a[t]),children:t}),Object(d.jsx)("button",{className:xe.a.button,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})},ve=n(19),pe=n.n(ve);var fe=function(e){var t=e.data.map((function(t){return Object(d.jsx)(me,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:pe.a.affairs,children:[t,Object(d.jsxs)("div",{className:pe.a.buttons,children:[Object(d.jsx)("button",{className:pe.a.button,onClick:function(){return e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:pe.a.button,onClick:function(){return e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:pe.a.button,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:pe.a.button,onClick:function(){return e.setFilter("low")},children:"Low"})]})]})},ge=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var Ne=function(){var e,t,n=Object(a.useState)(ge),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)("all"),l=Object(o.a)(i,2),j=l[0],u=l[1],b=(e=r,"all"===(t=j)?e:e.filter((function(e){return e.priority===t})));return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 2"}),Object(d.jsx)(fe,{data:b,setFilter:u,deleteAffairCallback:function(e){return s(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{})]})},Ce=n(80),ke=n(27),ye=n.n(ke),Se=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(ye.a.error," ").concat(i||""),j="".concat(r?ye.a.errorInput:ye.a.validInput," ").concat(ye.a.superInput," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(_.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},we=n(28),He=n.n(we),Ee=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers;return Object(d.jsxs)("div",{className:He.a.greeting,children:[Object(d.jsx)("div",{className:He.a.input,children:Object(d.jsx)(Se,{value:t,onEnter:a,onChange:n,error:c})}),Object(d.jsx)(v,{disabled:!!c,onClick:a,className:He.a.button,children:"Add"}),Object(d.jsx)("span",{className:He.a.counter,children:r})]})},Ie=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)("Name is required."),j=Object(o.a)(l,2),u=j[0],b=j[1],h=t.length;return Object(d.jsx)(Ee,{name:s,setNameCallback:function(e){var t=e.target.value;t.length?(i(t),b("")):(i(""),b("Name is required."))},addUser:function(){s.length&&(n(s),i(""),alert("Hello  ".concat(s))),b("Name is required.")},error:u,totalUsers:h})};var Me=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 3"}),Object(d.jsx)(Ie,{users:n,addUserCallback:function(e){var t={_id:Object(Ce.a)(),name:e};c([].concat(Object(L.a)(n),[t]))}}),Object(d.jsx)("hr",{})]})},We=n(37),Ae=n.n(We),Be=n(38),Re=n.n(Be),Te=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Re.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},r)),c&&Object(d.jsx)("span",{className:Re.a.spanClassName,children:c})]})};var Ge=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=n?"":"Wrong Input",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 4"}),Object(d.jsxs)("div",{className:Ae.a.column,children:[Object(d.jsx)(Se,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(Se,{className:Ae.a.blue}),Object(d.jsx)(v,{children:"Default"}),Object(d.jsx)(v,{red:!0,onClick:s,children:"Delete "}),Object(d.jsx)(v,{disabled:!0,children:"Disabled"}),Object(d.jsx)(Te,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Te,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{})]})},De=n(25),Fe=n.n(De),Le=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=c||{},b=u.children,h=u.onDoubleClick,x=u.className,m=Object(O.a)(u,["children","onDoubleClick","className"]),v="".concat(Fe.a.span," ").concat(x);return Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(Se,Object(_.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:v},m),{},{children:["\u270f\ufe0f ",b||r.value]}))})};function Ue(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}Ue("test",{x:"A",y:1});var Je=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"Homework 6"}),Object(d.jsxs)("div",{className:Fe.a.body,children:[Object(d.jsx)(Le,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}}),Object(d.jsxs)("div",{className:Fe.a.buttons,children:[Object(d.jsx)(v,{onClick:function(){Ue("editable-span-value",n)},children:"Save"}),Object(d.jsx)(v,{onClick:function(){c(function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value",""))},children:"Restore"})]})]}),Object(d.jsx)("hr",{})]})};var Pe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_e,{}),Object(d.jsx)(Ne,{}),Object(d.jsx)(Me,{}),Object(d.jsx)(Ge,{}),Object(d.jsx)(Je,{})]})},Xe="/pre-junior",Ze="/junior",qe="/junior_plus";var ze=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(l.a,{to:Xe})}}),Object(d.jsx)(l.b,{path:Xe,render:function(){return Object(d.jsx)(Pe,{})}}),Object(d.jsx)(l.b,{path:Ze,render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(l.b,{path:qe,render:function(){return Object(d.jsx)(ie,{})}}),Object(d.jsx)(l.b,{render:function(){return Object(d.jsx)(b,{})}})]})})},Qe=n(14),Ye=n.n(Qe);var Ve=function(){var e=Object(a.useState)(">"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("hidden"),s=Object(o.a)(r,2),l=s[0],j=s[1],u=function(){c(">"===n?"<":">"),j("hidden"===l?"visible":"hidden")};return Object(d.jsxs)("div",{className:Ye.a.header,onMouseEnter:u,onMouseLeave:u,children:[Object(d.jsxs)("nav",{className:"".concat(Ye.a.nav," ").concat(Ye.a[l]),children:[Object(d.jsx)(i.b,{className:Ye.a.nav_link,activeClassName:Ye.a.active,to:Xe,children:"Pre Junior"}),Object(d.jsx)(i.b,{className:Ye.a.nav_link,activeClassName:Ye.a.active,to:Ze,children:"Junior"}),Object(d.jsx)(i.b,{className:Ye.a.nav_link,activeClassName:Ye.a.active,to:qe,children:"Junior+"})]}),Object(d.jsx)("div",{className:"".concat(Ye.a.nav_hider," ").concat(Ye.a[l]),children:n})]})};var Ke=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"homework",children:[Object(d.jsx)("h2",{className:"section_title",children:"REACT HOMEWORKS"}),Object(d.jsx)(Ve,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(ze,{})]})})})},$e=n(40),et=Object($e.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return Object(_.a)(Object(_.a)({},e),{},{loading:!e.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return t.payload!==e?t.payload:e;default:return e}}}),tt=Object($e.b)(et);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{store:tt,children:Object(d.jsx)(Ke,{})})})}),document.getElementById("root"))}],[[69,1,2]]]);
//# sourceMappingURL=main.3b68182c.chunk.js.map