(this["webpackJsonpcalculator-reactjs"]=this["webpackJsonpcalculator-reactjs"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a(1),c=a.n(n),s=a(4),r=a.n(s),i=a(3),u=a(5),b=a(6),o=a(8),j=a(7),d=function(e){return Object(l.jsx)("div",{className:"calculator-title",children:e.title})},h=function(e){return Object(l.jsx)("input",{className:e.className,type:"button",value:e.label,onClick:e.handleClick})},m=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"screen-row",children:[Object(l.jsxs)("div",{children:[e.value," ",e.value1," ",e.value2]}),Object(l.jsx)("div",{children:e.value3})]})})},C=function(e){return Object(l.jsx)("div",{className:"screen",children:Object(l.jsx)(m,{value:e.number,value1:e.type,value2:e.numberStore,value3:e.answer})})},k=function(e){return Object(l.jsx)("input",{className:e.className,type:"button",value:e.label,onClick:function(){return e.typeHandleClick(e.label)}})},p=function(e){return Object(l.jsx)("input",{className:e.className,type:"button",value:e.label,onClick:function(){return e.equalHandleClick()}})},O=function(e){return console.log("1212"),Object(l.jsx)("input",{className:e.className,type:"button",value:e.label,onClick:function(){return e.handleClearValue()}})},x=function(e){return Object(l.jsx)("input",{className:e.className,type:"button",value:e.label,onClick:function(){return e.handleBackButton()}})},v=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var l;return Object(u.a)(this,a),(l=t.call(this,e)).handleClick=function(e){var t=e.target.value;(!l.state.number.includes(".")||"."!==t)&&l.state.number.length<8&&l.setState({number:"".concat((l.state.number+t).replace(/^0+/,""))}),console.log(t),l.state.number&&l.state.type&&(!l.state.number.includes(".")||"."!==t)&&l.state.number.length<8&&l.setState(Object(i.a)(Object(i.a)({},l.state),{},{numberStore:"".concat((l.state.numberStore+t).replace(/^0+/,""))})),console.log("type",l.state)},l.handleClearValue=function(){l.setState({number:"",numberStore:"",type:"",result:""})},l.handleBackButton=function(){if(""!==l.state.number){var e=l.state.number.slice(0,l.state.number.length-1);l.setState({number:e})}},l.typeHandleClick=function(e){console.log("cong tru nhan chia",e),l.state.number&&l.setState({type:e}),console.log("type",l.state)},l.equalHandleClick=function(){if(l.state.number&&l.state.numberStore&&l.state.type)switch(l.state.type){case"+":var e=100*(parseFloat(l.state.number)+parseFloat(l.state.numberStore))/100;console.log(e),l.setState({result:e});break;case"-":var t=100*(parseFloat(l.state.number)-parseFloat(l.state.numberStore))/100;l.setState({result:t});break;case"/":var a=parseFloat(l.state.number)/parseFloat(l.state.numberStore)*100/100;l.setState({result:a});break;case"*":var n=parseFloat(l.state.number)*parseFloat(l.state.numberStore)*100/100;l.setState({result:n})}},l.state={number:"",numberStore:"",type:"",result:""},l}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.number,a=e.numberStore,n=e.result,c=e.type;return Object(l.jsxs)("div",{className:"frame",children:[Object(l.jsx)(d,{title:"Calculator"}),Object(l.jsxs)("div",{className:"mainCalc",children:[Object(l.jsx)(C,{number:t,numberStore:a,type:c,answer:n}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)(O,{className:"btn-action",label:"Clear",handleClearValue:this.handleClearValue}),Object(l.jsx)(x,{className:"btn-action",label:"Delete",handleBackButton:this.handleBackButton}),Object(l.jsx)(k,{className:"btn-action",label:"*",typeHandleClick:this.typeHandleClick}),Object(l.jsx)(k,{className:"btn-action",label:"/",typeHandleClick:this.typeHandleClick})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)(h,{label:"7",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"8",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"9",handleClick:this.handleClick}),Object(l.jsx)(k,{className:"btn-action",label:"+",typeHandleClick:this.typeHandleClick})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)(h,{label:"4",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"5",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"6",handleClick:this.handleClick}),Object(l.jsx)(k,{className:"btn-action",label:"-",typeHandleClick:this.typeHandleClick})]}),Object(l.jsxs)("div",{className:"button-row",children:[Object(l.jsx)(h,{label:"1",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"2",handleClick:this.handleClick}),Object(l.jsx)(h,{label:"3",handleClick:this.handleClick}),Object(l.jsx)(h,{className:"btn-action",label:".",handleClick:this.handleClick})]}),Object(l.jsxs)("div",{className:"button-row button-bottom",children:[Object(l.jsx)(h,{label:"0",handleClick:this.handleClick}),Object(l.jsx)(p,{className:"btn-action",label:"=",equalHandleClick:this.equalHandleClick})]})]})]})}}]),a}(c.a.Component);a(14);var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),l(e),n(e),c(e),s(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.97581b62.chunk.js.map