(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__1e6Eo",avatar:"Message_avatar__27qbc",body:"Message_body__38vA3",name:"Message_name__2CUjR",text:"Message_text__3ga52",time:"Message_time__336OU"}},function(e,a,t){e.exports={message:"AlternativeMessage_message__29Qhd",body:"AlternativeMessage_body__c4PI4",name:"AlternativeMessage_name__2sYrl",avatar:"AlternativeMessage_avatar__2ZNb_",text:"AlternativeMessage_text__1lXdz",time:"AlternativeMessage_time__2sRGq"}},function(e,a,t){e.exports={nav:"Header_nav__31iiN",list:"Header_list__1D-yV",item:"Header_item__1njtr",active:"Header_active__3p1dw"}},,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__31hM2"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3SclI",spanClassName:"SuperCheckbox_spanClassName__3KNhv",defaultClass:"SuperCheckbox_defaultClass__wENJs"}},function(e,a,t){e.exports={blue:"HW4_blue__jE-Aa",green:"HW4_green__3-SUA",column:"HW4_column__2Dmxz",testSpanError:"HW4_testSpanError__2RQah"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2NCY_",error:"Greeting_error__32fFd",errorText:"Greeting_errorText__2kGn2"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__164C6",errorInput:"SuperInputText_errorInput__1fV0r",error:"SuperInputText_error__3U1W1"}},function(e,a,t){e.exports={default:"SuperButton_default__oucav",red:"SuperButton_red__1x86h"}},,,function(e,a,t){e.exports={App:"App_App__2DoSx"}},,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),s=(t(26),t(19)),m=t.n(s),o=t(4),i=t(1),u=t(5),d=t.n(u);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:d.a.body},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:d.a.time},e.time)))},_=t(6),v=t.n(_);var p=function(e){return r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:v.a.body},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:v.a.time},e.time)))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",g="some text",b="22:00",C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Gacha Life",k="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quod consectetur dolors. Last symbol! ->",x="21:30",S="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",y="Gacha Life",j="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Test text!",O="21:31",A="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",w="Gacha Life",T="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Goodbye!",H="21:33";var M=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:h,name:f,message:g,time:b}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(p,{avatar:C,name:N,message:k,time:x}),r.a.createElement(p,{avatar:S,name:y,message:j,time:O}),r.a.createElement(p,{avatar:A,name:w,message:T,time:H})),r.a.createElement("hr",null))},W=t(2);var G=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback()}},"X"))},I=t(11),F=t.n(I);var J=function(e){var a=e.data.map((function(a){return r.a.createElement(G,{key:a._id,affair:a,deleteAffairCallback:function(){return e.deleteAffairCallback(a._id)}})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:"all"===e.filter?F.a.someClass:"",onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:"high"===e.filter?F.a.someClass:"",onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:"middle"===e.filter?F.a.someClass:"",onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:"low"===e.filter?F.a.someClass:"",onClick:function(){e.setFilter("low")}},"Low"))},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var U=function(){var e=Object(n.useState)(P),a=Object(W.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(W.a)(c,2),m=s[0],o=s[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,m);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(J,{data:i,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:m}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(20),L=t(14),q=t.n(L),K=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyHandler,m=!a.trim(),o=!l?"":q.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onKeyDown:s,onChange:t,className:o,onBlur:t}),r.a.createElement("button",{onClick:n,disabled:m},"add"),r.a.createElement("span",null,c),r.a.createElement("div",{className:q.a.errorText},l))},X=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(W.a)(l,2),s=c[0],m=c[1],o=Object(n.useState)(""),i=Object(W.a)(o,2),u=i[0],d=i[1],E=function(){var e=s.trim();alert("Hello ".concat(e,"!")),t(e),m("")},_=a.length;return r.a.createElement(K,{name:s,setNameCallback:function(e){var a=e.currentTarget.value;m(a),u&&d(""),a||d("Invalid Value")},addUser:E,error:u,totalUsers:_,onKeyHandler:function(e){s&&"Enter"===e.key&&E()}})},Y=t(29);var R=function(){var e=Object(n.useState)([]),a=Object(W.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(X,{users:t,addUserCallback:function(e){var a={_id:Object(Y.a)(),name:e};l([].concat(Object(B.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=t(9),D=t(15),V=t.n(D),z=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,m=e.spanClassName,o=Object(Z.a)(e,z),i="".concat(V.a.error," ").concat(m||""),u=c?"".concat(V.a.errorInput," ").concat(s):"".concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},o)),c&&r.a.createElement("span",{className:i},c))},$=t(13),ee=t.n($),ae=t(16),te=t.n(ae),ne=["red","className"],re=function(e){var a=e.red,t=e.className,n=Object(Z.a)(e,ne),l="".concat(a?te.a.red:te.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},le=t(12),ce=t.n(le),se=["type","onChange","onChangeChecked","className","spanClassName","children"],me=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(Z.a)(e,se),s="".concat(ce.a.checkbox," ").concat(n||ce.a.defaultClass);return r.a.createElement("label",{className:s},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)}},c)),r.a.createElement("span",{className:ce.a.checkbox}),l&&r.a.createElement("span",{className:ce.a.spanClassName},l))};var oe=function(){var e=Object(n.useState)(""),a=Object(W.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},m=Object(n.useState)(!1),o=Object(W.a)(m,2),i=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:ee.a.column},r.a.createElement(Q,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(Q,{value:t,onChangeText:l,onEnter:s,error:c,className:"".concat(ee.a.blue," ").concat(ee.a.green)}),r.a.createElement(re,null,"default"),r.a.createElement(re,{red:!0,onClick:s},"delete "),r.a.createElement(re,{disabled:!0},"disabled"),r.a.createElement(me,{checked:i,onChangeChecked:u},"some text "),r.a.createElement(me,{checked:i,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ie=function(){return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(U,null),r.a.createElement(R,null),r.a.createElement(oe,null))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var de=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Junior"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Rest homework"))},_e="/pre-junior",ve="/junior",pe="/junior-plus";var he=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:_e})}),r.a.createElement(i.b,{path:_e,element:r.a.createElement(ie,null)}),r.a.createElement(i.b,{path:ve,element:r.a.createElement(de,null)}),r.a.createElement(i.b,{path:pe,element:r.a.createElement(Ee,null)}),r.a.createElement(i.b,{path:"/*",element:r.a.createElement(ue,null)})))},fe=t(7),ge=t.n(fe);var be=function(){var e=function(e){return e.isActive?ge.a.active:""};return r.a.createElement("nav",{className:ge.a.nav},r.a.createElement("ul",{className:ge.a.list},r.a.createElement("li",{className:ge.a.item},r.a.createElement(o.b,{to:_e,className:e},"Pre Junior")),r.a.createElement("li",{className:ge.a.item},r.a.createElement(o.b,{to:ve,className:e},"Junior")),r.a.createElement("li",{className:ge.a.item},r.a.createElement(o.b,{to:pe,className:e},"Junior+"))))};var Ce=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(be,null),r.a.createElement(he,null)))};var Ne=function(){return r.a.createElement("div",{className:m.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.89a8342e.chunk.js.map