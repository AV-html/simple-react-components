(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__1e6Eo",avatar:"Message_avatar__27qbc",body:"Message_body__38vA3",name:"Message_name__2CUjR",text:"Message_text__3ga52",time:"Message_time__336OU"}},function(e,a,t){e.exports={message:"AlternativeMessage_message__29Qhd",body:"AlternativeMessage_body__c4PI4",name:"AlternativeMessage_name__2sYrl",avatar:"AlternativeMessage_avatar__2ZNb_",text:"AlternativeMessage_text__1lXdz",time:"AlternativeMessage_time__2sRGq"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__jE-Aa",green:"HW4_green__3-SUA",column:"HW4_column__2Dmxz",testSpanError:"HW4_testSpanError__2RQah"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2NCY_",error:"Greeting_error__32fFd",errorText:"Greeting_errorText__2kGn2"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__164C6",errorInput:"SuperInputText_errorInput__1fV0r",error:"SuperInputText_error__3U1W1"}},function(e,a,t){e.exports={default:"SuperButton_default__oucav",red:"SuperButton_red__1x86h"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3SclI",spanClassName:"SuperCheckbox_spanClassName__3KNhv"}},,,function(e,a,t){e.exports={App:"App_App__2DoSx"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=(t(21),t(14)),o=t.n(s),i=t(2),m=t.n(i);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:m.a.body},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:m.a.time},e.time)))},d=t(3),p=t.n(d);var E=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.avatar},r.a.createElement("img",{src:e.avatar,alt:" Avatar"})),r.a.createElement("div",{className:p.a.body},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.text},e.message,r.a.createElement("span",null)),r.a.createElement("div",{className:p.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",v="some text",g="22:00",f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Gacha Life",C="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quod consectetur dolors. Last symbol! ->",N="21:30",k="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Gacha Life",S="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Test text!",y="21:31",O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",j="Gacha Life",A="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Goodbye!",w="21:33";var T=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:_,name:h,message:v,time:g}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(E,{avatar:f,name:b,message:C,time:N}),r.a.createElement(E,{avatar:k,name:x,message:S,time:y}),r.a.createElement(E,{avatar:O,name:j,message:A,time:w})),r.a.createElement("hr",null))},W=t(1);var M=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback()}},"X"))};var G=function(e){var a=e.data.map((function(a){return r.a.createElement(M,{key:a._id,affair:a,deleteAffairCallback:function(){return e.deleteAffairCallback(a._id)}})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(H),a=Object(W.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(W.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(G,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(15),U=t(8),B=t.n(U),L=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyHandler,o=!a.length,i=!l?"":B.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onKeyDown:s,onChange:t,className:i,onBlur:t}),r.a.createElement("button",{onClick:n,disabled:o},"add"),r.a.createElement("span",null,c),r.a.createElement("div",{className:B.a.errorText},l))},P=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(W.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(W.a)(i,2),u=m[0],d=m[1],p=function(){t(s),alert("Hello ".concat(s,"!")),o("")},E=a.length;return r.a.createElement(L,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(o(a),u&&d("")):(a&&o(""),d("error"))},addUser:p,error:u,totalUsers:E,onKeyHandler:function(e){s&&"Enter"===e.key&&p()}})},q=t(24);var K=function(){var e=Object(n.useState)([]),a=Object(W.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e){var a={_id:Object(q.a)(),name:e};l([].concat(Object(F.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(4),X=t(9),Y=t.n(X),Z=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],R=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(J.a)(e,Z),m="".concat(Y.a.error," ").concat(o||""),u=c?"".concat(Y.a.errorInput," ").concat(s):"".concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},D=t(7),z=t.n(D),Q=t(10),V=t.n(Q),$=["red","className"],ee=function(e){var a=e.red,t=e.className,n=Object(J.a)(e,$),l="".concat(a?V.a.red:V.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},ae=t(11),te=t.n(ae),ne=["type","onChange","onChangeChecked","className","spanClassName","children"],re=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(J.a)(e,ne),s="".concat(te.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:te.a.spanClassName},l))};var le=function(){var e=Object(n.useState)(""),a=Object(W.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(W.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(R,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(R,{value:t,onChangeText:l,onEnter:s,error:c,className:"".concat(z.a.blue," ").concat(z.a.green)}),r.a.createElement(ee,null,"default"),r.a.createElement(ee,{red:!0,onClick:s},"delete "),r.a.createElement(ee,{disabled:!0},"disabled"),r.a.createElement(re,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(re,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ce=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(T,null),r.a.createElement(I,null),r.a.createElement(K,null),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.a5d3dff5.chunk.js.map