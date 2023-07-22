(()=>{"use strict";var e={3184:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ve});var n=r(9526),o=r(4942),i=r(5911),l=r(6305),a=r(5926),s=r(3292),d=r(885),c=r(4637),u=r(9233),f=r(1133),g=r(7077),b=r(7132),p=r(4333);const h=p.default.create({surface:{marginTop:100,padding:8,elevation:0,height:600,width:408,alignItems:"center",alignSelf:"center",backgroundColor:"#fff"},main:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},headerContainer:{margin:0,padding:0,flexDirection:"row",alignItems:"center",width:"100%"},header:{fontSize:36,fontWeight:"bold",fontFamily:"Georgia",color:"#069",margin:0,flex:8,textAlign:"center"},settings:{flex:1,alignItems:"right",justifyContent:"top",margin:0,padding:0,paddingRight:12},lightText:{color:"#fff",fontWeight:"bold"},darkText:{color:"#000",fontWeight:"bold"},container:{flex:1,justifyContent:"center",backgroundColor:"white",width:"100%",marginTop:20},gameBoard:{marginTop:8,paddingTop:10,paddingBottom:10,width:480,height:500},rows:{height:"10%",width:"100%",justifyContent:"center"},cells:{flex:1,flexDirection:"column",justifyContent:"center",textAlign:"center",margin:0,width:"10%",height:40,borderWidth:1,borderStyle:"solid"},die:{padding:0,margin:0,fontSize:20,fontWeight:"bold",textAlign:"center",color:"black"},button:{margin:4,padding:8,borderRadius:20,backgroundColor:"#090",width:220,textAlign:"center",alignItems:"center"},darkButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#c30",width:180,textAlign:"center",alignItems:"center"},smallButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#090",width:80,textAlign:"center",alignItems:"center"},smallDarkButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#c30",width:80,textAlign:"center",alignItems:"center"},buttonText:{color:"#fff",fontWeight:"bold"},darkButtonText:{color:"#000",fontWeight:"bold"},quitText:{color:"#000",fontWeight:"bold",fontSize:16},settingsText:{color:"#000",fontWeight:"bold",fontSize:18},modal:{flex:1,alignItems:"center",paddingTop:280},placementModal:{flex:1,alignItems:"center",textAlign:"center",paddingTop:68},modalPlacement:{alignItems:"center",textAlign:"center",paddingTop:4,paddingBottom:4,width:400,backgroundColor:"#eee",borderColor:"#ccc",borderWidth:2,fontSize:14,fontFamily:"Helvetica"},modalContent:{alignItems:"center",justifyContent:"center",textAlign:"center",width:300,height:160,backgroundColor:"#eee",borderColor:"#999",borderWidth:2,fontWeight:"bold"},modalDice:{alignItems:"center",justifyContent:"center",textAlign:"center"},modalSettingsContainer:{flex:1,alignItems:"center",paddingTop:120},settingsModal:{textAlign:"center",margin:0,padding:0,width:360,height:600,backgroundColor:"#eee",borderColor:"#999",borderWidth:2,fontWeight:"bold"},settingsHeader:{flexDirection:"row",textAlign:"center",alignItems:"flex-start",width:"100%"},settingsHeaderText:{margin:0,paddingTop:12,flex:2},settingsClose:{flex:1,alignItems:"right",margin:0,padding:0,paddingRight:8,border:0,borderRadius:0},settingsButton:{border:0,borderRadius:0,padding:0,margin:0},inlineWrapper:{flexWrap:"wrap",alignItems:"center",textAlign:"center",flexDirection:"row",margin:0,padding:0},divider:{height:8},dieButton:{marginTop:2,marginRight:8,marginBottom:2,padding:6,borderRadius:10,borderColor:"#000",borderWidth:2,backgroundColor:"#ffe",width:44,textAlign:"center",alignItems:"center"},blockerButton:{marginTop:8,marginRight:12,marginBottom:2,padding:6,borderRadius:10,borderColor:"#000",backgroundColor:"#600",width:36,textAlign:"center",alignItems:"center"},dieButtonText:{color:"#000",fontSize:22,fontWeight:"bold"},blockerButtonText:{color:"#fff",fontSize:16,fontWeight:"bold"}});const y=p.default.create({surface:{margin:0,padding:8,elevation:4,height:648,width:600,alignItems:"center",alignSelf:"center",backgroundColor:"#fff"},main:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},headerContainer:{margin:0,padding:0,flexDirection:"row",alignItems:"flex-start",width:"100%"},header:{fontSize:36,fontWeight:"bold",fontFamily:"serif",color:"#069",margin:0,flex:9,textAlign:"center"},settings:{flex:1,alignItems:"right",margin:0,marginTop:-8,padding:0,borderRadius:0,borderWidth:0},lightText:{color:"#fff",fontWeight:"bold"},darkText:{color:"#000",fontWeight:"bold"},container:{flex:1,justifyContent:"center",backgroundColor:"white",width:"100%"},gameBoard:{marginTop:8,paddingTop:10,paddingBottom:10,width:500,height:500},rows:{height:"10%",width:"100%",justifyContent:"center"},cells:{flex:1,flexDirection:"column",justifyContent:"center",textAlign:"center",margin:0,width:"10%",height:54,borderWidth:1,borderStyle:"solid"},die:{padding:0,margin:0,fontSize:32,fontWeight:"bold",textAlign:"center",color:"black"},button:{margin:4,padding:8,borderRadius:20,backgroundColor:"#090",width:180,textAlign:"center"},darkButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#c30",width:180,textAlign:"center"},smallButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#090",width:80,textAlign:"center"},smallDarkButton:{margin:4,padding:8,borderRadius:20,backgroundColor:"#c30",width:80,textAlign:"center"},buttonText:{color:"#fff",fontWeight:"bold"},darkButtonText:{color:"#000",fontWeight:"bold"},quitText:{color:"#000",fontWeight:"bold",fontSize:16},settingsText:{color:"#000",fontWeight:"bold",fontSize:18},modal:{flex:1,alignItems:"center",paddingTop:52},placementModal:{flex:1,alignItems:"center",textAlign:"center"},modalPlacement:{alignItems:"center",textAlign:"center",paddingTop:4,paddingBottom:4,width:400,backgroundColor:"#eee",borderColor:"#ccc",borderWidth:2,fontSize:14,fontFamily:"sans-serif"},modalContent:{alignItems:"center",justifyContent:"center",textAlign:"center",width:250,height:120,backgroundColor:"#eee",borderColor:"#999",borderWidth:2,fontWeight:"bold"},modalDice:{alignItems:"center",justifyContent:"center",textAlign:"center"},modalSettingsContainer:{flex:1,alignItems:"center",paddingTop:60},settingsModal:{textAlign:"center",margin:0,padding:0,width:360,height:600,backgroundColor:"#eee",borderColor:"#999",borderWidth:2,fontWeight:"bold"},settingsHeader:{flexDirection:"row",textAlign:"center",alignItems:"flex-start"},settingsHeaderText:{margin:0,paddingTop:12,flex:8,textAlign:"center"},settingsClose:{flex:1,alignItems:"right",margin:0,padding:0,paddingRight:8,border:0,borderRadius:0},settingsButton:{border:0,borderRadius:0,padding:0,margin:0},inlineWrapper:{flexWrap:"wrap",alignItems:"center",textAlign:"center",flexDirection:"row",margin:0,padding:0},divider:{height:8},dieButton:{marginTop:2,marginRight:8,marginBottom:2,padding:6,borderRadius:10,borderColor:"#000",borderWidth:2,backgroundColor:"#ffe",width:44,textAlign:"center"},blockerButton:{marginTop:8,marginRight:12,marginBottom:2,padding:6,borderRadius:10,borderColor:"#000",backgroundColor:"#600",width:36,textAlign:"center"},dieButtonText:{color:"#000",fontSize:22,fontWeight:"bold"},blockerButtonText:{color:"#fff",fontSize:16,fontWeight:"bold"}});const j=b.default.select({ios:h,default:y});const m=(0,n.createContext)(void 0,void 0);for(var x=r(2652),v=r.n(x),O=r(196),w={settings:{inProgress:!1,boardSet:!1,difficultyLevel:"easy",testMode:!1,showTotals:"off",scoring:!1,confirmMoves:!0,allowUndo:!0},dice:{blocker:null,blockersAllowed:6,options:[],base:6},cells:{},score:{total:0,items:[]},status:{blockersLeft:6,spacesUsed:0,lastMove:""}},P=0;P<100;P+=1){w.cells[P]=P<10||P%10===0||P%10===9||P>90?{type:"sum",value:-1}:P<20||P%10===1||P%10===8||P>80?{type:"target",value:null}:{type:"board",value:null};[1,8,10,19,80,89,91,98].forEach((function(e){w.cells[e]={type:"empty",value:null}}))}for(var C=1;C<=w.dice.base;C+=1)w.dice.options.push(C);w.dice.blocker=w.dice.base+1;const k=w;var T=r(7557);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.modalVisible,r=e.setModalVisible,o=(0,n.useContext)(m),i=o.settings,l=o.dispatch;return(0,T.jsx)(O.default,{onRequestClose:function(){return r(null)},visible:t,transparent:!0,testID:"quitModal",children:(0,T.jsx)(f.default,{style:j.modal,children:(0,T.jsxs)(a.default,{style:j.modalContent,elevation:5,children:[(0,T.jsx)(u.default,{style:j.quitText,testID:"quitDialog",children:"QUIT GAME?"}),(0,T.jsx)(f.default,{style:j.divider}),(0,T.jsxs)(f.default,{style:j.inlineWrapper,children:[(0,T.jsx)(c.default,{onPress:function(){l({type:"reset",payload:S(S({},k),{},{settings:i})}),r(null)},style:j.smallButton,testId:"resetButton",children:(0,T.jsx)(u.default,{style:j.buttonText,children:"YES"})}),(0,T.jsx)(c.default,{onPress:function(){r(null)},style:j.smallDarkButton,testId:"continueButton",children:(0,T.jsx)(u.default,{style:j.buttonText,children:"NO"})})]})]})})})};I.propTypes={modalVisible:v().bool,setModalVisible:v().func},I.defaultProps={modalVisible:!1,setModalVisible:{}};const M=I;var A=r(3690),E=r(5701);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.modalVisible,r=e.setModalVisible,o=(0,n.useContext)(m),i=o.dice,l=o.settings,s=o.dispatch;return(0,T.jsx)(O.default,{onRequestClose:function(){return r(null)},visible:t,transparent:!0,testID:"settingsModal",children:(0,T.jsx)(f.default,{style:j.modalSettingsContainer,children:(0,T.jsxs)(a.default,{style:j.settingsModal,elevation:5,children:[(0,T.jsxs)(f.default,{style:j.settingsHeader,children:[(0,T.jsx)(f.default,{style:j.settingsClose}),(0,T.jsx)(f.default,{style:j.settingsHeaderText,children:(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"GAME SETTINGS"})}),(0,T.jsx)(f.default,{style:j.settingsClose,children:(0,T.jsx)(g.default,{icon:"close-box-outline",iconColor:"#069",size:28,onPress:function(){r(null)},style:j.settingsButton,testId:"settingsClose"})})]}),(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"Confirm Moves"}),(0,T.jsx)(A.default,{value:l.confirmMoves,onValueChange:function(){s({type:"settings",payload:B(B({},l),{},{confirmMoves:!l.confirmMoves})})}}),(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"Allow Undo"}),(0,T.jsx)(A.default,{value:l.allowUndo,onValueChange:function(){s({type:"settings",payload:B(B({},l),{},{allowUndo:!l.allowUndo})})}}),(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"Show Totals"}),(0,T.jsxs)(E.default.Group,{onValueChange:function(e){var t;t=e,s({type:"settings",payload:B(B({},l),{},{showTotals:t})})},value:l.showTotals,children:[(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Off"}),(0,T.jsx)(E.default,{value:"off"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Sums"}),(0,T.jsx)(E.default,{value:"totals"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Remainders"}),(0,T.jsx)(E.default,{value:"remainders"})]})]}),(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"Difficulty Level"}),!l.inProgress&&(0,T.jsxs)(E.default.Group,{onValueChange:function(e){var t;t=e,s({type:"settings",payload:B(B({},l),{},{difficultyLevel:t})})},value:l.difficultyLevel,children:[(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Easy"}),(0,T.jsx)(E.default,{value:"easy"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Medium"}),(0,T.jsx)(E.default,{value:"centered"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"Hard"}),(0,T.jsx)(E.default,{value:"random"})]})]}),l.inProgress&&(0,T.jsx)(f.default,{children:(0,T.jsxs)(u.default,{children:["Difficulty is set to",function(e){var t="";switch(e){case"easy":t="Easy";break;case"centered":t="Medium";break;case"random":t="Hard"}return` ${t} `}(l.difficultyLevel),"and cannot be changed until a new game is started."]})}),(0,T.jsx)(u.default,{style:j.settingsText,testID:"settingsHeader",children:"Base Value"}),!l.inProgress&&(0,T.jsxs)(E.default.Group,{onValueChange:function(e){!function(e){for(var t=parseInt(e,10),r=[],n=1;n<=t;n+=1)r.push(n);s({type:"dice",payload:B(B({},i),{},{base:t,options:r,blocker:t+1})})}(e)},value:i.base.toString(),children:[(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"6"}),(0,T.jsx)(E.default,{value:"6"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"8"}),(0,T.jsx)(E.default,{value:"8"})]}),(0,T.jsxs)(f.default,{children:[(0,T.jsx)(u.default,{children:"10"}),(0,T.jsx)(E.default,{value:"10"})]})]}),l.inProgress&&(0,T.jsx)(f.default,{children:(0,T.jsxs)(u.default,{children:["Base value is set to",` ${i.base} `,"and cannot be changed until a new game is started."]})})]})})})};R.propTypes={modalVisible:v().bool,setModalVisible:v().func},R.defaultProps={modalVisible:!1,setModalVisible:{}};const V=R;function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const U=function(){var e=(0,n.useState)(null),t=(0,d.default)(e,2),r=t[0],o=t[1],i=(0,n.useState)(!0),l=(0,d.default)(i,2),a=l[0],s=l[1],b=(0,n.useContext)(m),p=b.settings,h=b.dispatch;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(f.default,{style:j.headerContainer,children:[(0,T.jsx)(f.default,{style:j.settings}),(0,T.jsx)(u.default,{style:j.header,testID:"header",children:"S I X T O"}),(0,T.jsx)(f.default,{style:j.settings,children:(0,T.jsx)(g.default,{icon:"cog-outline",iconColor:"#069",size:28,onPress:function(){o("settings"),s(!0)}})})]}),(0,T.jsxs)(f.default,{children:[a&&"quit"===r&&(0,T.jsx)(M,{modalVisible:a,setModalVisible:s}),a&&"settings"===r&&(0,T.jsx)(V,{modalVisible:a,setModalVisible:s}),!1===p.inProgress&&(0,T.jsx)(c.default,{onPress:function(){var e,t;e=p.inProgress,t=p.boardSet,h({type:"settings",payload:H(H({},p),{},{inProgress:!e,boardSet:!t})})},style:j.button,testID:"startButton",children:(0,T.jsx)(u.default,{style:j.buttonText,children:"START NEW GAME"})}),!0===p.inProgress&&(0,T.jsx)(c.default,{onPress:function(){o("quit"),s(!0)},style:j.darkButton,testID:"quitButton",children:(0,T.jsx)(u.default,{style:j.buttonText,children:"QUIT GAME"})})]})]})};var L=r(477),q=r(9566),$=r(2703),G=r(5899);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){for(var t=e.id,r=e.modalVisible,i=e.setModalVisible,l=e.setActive,s=(0,n.useContext)(m),d=s.cells,g=s.status,b=s.dice,p=s.dispatch,h=[],y=1;y<=g.blockersLeft;y++)h.push(y);var x=function(e){var r=g.blockersLeft;e===b.blocker&&(r=g.blockersLeft-1),p({type:"status",payload:N(N({},g),{},{lastMove:t,spacesUsed:g.spacesUsed+1,blockersLeft:r})}),p({type:"cells",payload:N(N({},d),{},(0,o.default)({},t,{type:"board",value:parseInt(e,10)}))}),i(!1)};return(0,T.jsx)(O.default,{onRequestClose:function(){return i(!1)},visible:r,transparent:!0,testID:"placeDieModal",children:(0,T.jsx)(f.default,{style:j.placementModal,children:(0,T.jsxs)(a.default,{style:j.modalPlacement,elevation:5,children:[(0,T.jsxs)(f.default,{style:j.modalDice,children:[(0,T.jsx)(f.default,{style:j.inlineWrapper,children:b.options.map((function(e){return(0,T.jsx)(f.default,{children:(0,T.jsx)(c.default,{testID:`select-${t}`,onPress:function(){l(null),x(e)},style:j.dieButton,children:(0,T.jsx)(u.default,{testID:`placeDie-${e}`,style:j.dieButtonText,children:e})})},`die-${e}`)}))}),(0,T.jsx)(f.default,{style:j.inlineWrapper,children:h.map((function(e){return(0,T.jsx)(f.default,{children:(0,T.jsx)(c.default,{testID:`select-blocker-${t}`,onPress:function(){l(null),x(b.blocker)},style:j.blockerButton,children:(0,T.jsx)(u.default,{style:j.blockerButtonText,children:"X"})})},`blocker-${e}`)}))})]}),(0,T.jsx)(f.default,{style:j.inlineWrapper,children:(0,T.jsx)(c.default,{onPress:function(){l(null),i(!1)},testId:"cancelButton",style:j.darkButton,children:(0,T.jsx)(u.default,{style:j.buttonText,children:"CANCEL"})},"button")})]})})})};X.propTypes={id:v().number,modalVisible:v().bool,setModalVisible:v().func,setActive:v().func},X.defaultProps={id:null,modalVisible:!0,setModalVisible:{},setActive:{}};const _=X;function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){var t=e.id,r=e.value,o=e.type,i=e.setActive,l=(0,n.useContext)(m),a=l.dice,s=l.settings,c=(0,n.useState)(!1),u=(0,d.default)(c,2),g=u[0],b=u[1],p=(null==a?void 0:a.blocker)||7,h="board"===o&&r===p?"X":r;"sum"===o&&(-1===r||"off"===s.showTotals?h="":"remainders"===s.showTotals&&(h%=s.baseValue));var y="#900",x="#ddd";"board"===o?(y="#000",x="#cec"):"target"===o&&(y="#383",x="#eee"),"board"===o&&r===p&&(y="#900",x="#ca8"),"sum"===o&&"off"!==s.showTotals&&(x="#ccc",r>=0&&(x="#acd")),"empty"===o&&"off"!==s.showTotals&&(x="#666");var v={backgroundColor:x,height:"100%",width:"100%",justifyContent:"center"},O=Y(Y({},j.die),{},{color:y}),w=s.boardSet&&s.inProgress&&null===r&&"board"===o;return(0,T.jsx)(T.Fragment,{children:w?(0,T.jsx)(T.Fragment,{children:g?(0,T.jsx)(_,{id:t,modalVisible:g,setModalVisible:b,setActive:i}):(0,T.jsx)($.default,{onPress:function(){i(t),b(!0)},testId:`place-${t}`,title:"X"})}):(0,T.jsx)(f.default,{style:v,children:(0,T.jsx)(G.default,{style:O,testID:`die${t}-${r}`,children:h})})})};J.propTypes={id:v().number,value:v().number,type:v().string,setActive:v().func},J.defaultProps={id:null,value:0,type:"",setActive:{}};const K=J;function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const te=function(){var e=(0,n.useContext)(m),t=e.cells,r=e.settings,o=(0,n.useState)([]),i=(0,d.default)(o,2),l=i[0],a=i[1],s=(0,n.useState)(null),c=(0,d.default)(s,2),u=c[0],g=c[1];(0,n.useEffect)((function(){var e=Array.apply(null,Array(100)).map((function(e,t){return{id:t}}));a(e)}),[]);var b=function(e,t){var n="#fff",o="#000";return"sum"!==t&&"empty"!==t||"off"!==r.showTotals||(o="#ddd"),e===u&&(n="#fc6",o="#fff"),ee(ee({},j.cells),{},{borderWidth:1,backgroundColor:n,borderColor:o})};return(0,T.jsx)(L.default,{style:j.container,children:(0,T.jsx)(q.default,{data:l,renderItem:function(e){var r=e.item;return(0,T.jsx)(f.default,{style:b(r.id,t[r.id].type),children:(0,T.jsx)(K,{id:r.id,value:t[r.id].value,type:t[r.id].type,setActive:g})})},numColumns:10,keyExtractor:function(e,t){return t}})})};function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const oe=function(e,t){var r=t.type,n=t.payload,o=e;switch(r){case"settings":o=ne(ne({},e),{},{settings:n});break;case"dice":o=ne(ne({},e),{},{dice:n});break;case"cells":o=ne(ne({},e),{},{cells:n});break;case"scoring":o=ne(ne({},e),{},{score:n});break;case"status":o=ne(ne({},e),{},{status:n});break;case"reset":o=ne(ne({},n),{},{settings:ne(ne({},n.settings),{},{inProgress:!1,boardSet:!1})})}return o};const ie=[[12,82],[13,83],[14,84],[15,85],[16,86],[17,87],[21,28],[31,38],[41,48],[51,58],[61,68],[71,78]];const le=function(e,t,r){return r.indexOf(e)===t};const ae=function(e,t,r){var n={};if(Object.values(t).forEach((function(e,t){if("target"===e.type){var o=Math.floor(Math.random()*r.base)+1;n[t]={type:"target",value:o}}else n[t]={type:e.type,value:e.value}})),ie.forEach((function(e){var t=(0,d.default)(e,2),o=t[0],i=t[1];n[o].value===n[i].value&&(n[i].value=r.blocker-n[o].value)})),n[88].value=n[11].value,n[81].value=n[18].value,null!==e){var o=[44,45,54,55];if("random"===e){for(var i=[],l=0;l<100;l+=1){var a=Math.ceil(6*Math.random())+1,s=10*(Math.ceil(6*Math.random())+1);i.push(a+s)}o=i.filter(le).slice(0,4)}o.forEach((function(e){n[e].value=Math.floor(Math.random()*r.base)+1}))}return n};var se=r(2982);const de=function(e,t){var r={},n={},o={};Object.values(e).forEach((function(e,t){"board"===e.type&&(o[t]=e)}));var i=[{id:0,board:[22,33,44,55,66,77]},{id:1,board:[]},{id:8,board:[]},{id:2,board:[22,32,42,52,62,72]},{id:3,board:[23,33,43,53,63,73]},{id:4,board:[24,34,44,54,64,74]},{id:5,board:[25,35,45,55,65,75]},{id:6,board:[26,36,46,56,66,76]},{id:7,board:[27,37,47,57,67,77]},{id:9,board:[27,36,45,54,63,72]},{id:10,board:[]},{id:19,board:[]},{id:20,board:[22,23,24,25,26,27]},{id:30,board:[32,33,34,35,36,37]},{id:40,board:[42,43,44,45,46,47]},{id:50,board:[52,53,54,55,56,57]},{id:60,board:[62,63,64,65,66,67]},{id:70,board:[72,73,74,75,76,77]},{id:80,board:[]},{id:89,board:[]},{id:91,board:[]},{id:98,board:[]}];[29,39,49,59,69,79].forEach((function(e){i.forEach((function(t){if(t.id===e-9){var r={id:e,board:(0,se.default)(t.board).reverse()};i.push(r)}}))}));[92,93,94,95,96,97].forEach((function(e){i.forEach((function(t){if(t.id===e-90){var r={id:e,board:(0,se.default)(t.board).reverse()};i.push(r)}}))}));return[90,99].forEach((function(e){i.forEach((function(t){if(90===e&&9===t.id){var r={id:e,board:(0,se.default)(t.board).reverse()};i.push(r)}else if(0===t.id){var n={id:e,board:(0,se.default)(t.board).reverse()};i.push(n)}}))})),i.forEach((function(e){var n=0,i=0;e.board.length>0&&(e.board.every((function(e){return i+=o[e].value,o[e].value!==t.blocker&&(n+=o[e].value,!0)})),r[e.id]=i>0?n:-1)})),Object.values(e).forEach((function(e,t){"sum"===e.type?n[t]={type:"sum",value:r[t]}:n[t]={type:e.type,value:e.value}})),n};const ce=function(e,t){var r={},n=0;return Object.values(e).forEach((function(e,o){if("board"===e.type){var i=Math.floor(Math.random()*t.blocker)+1;i>t.base&&(n+=1)>6&&(i-=Math.floor(Math.random()*t.base)+1);var l={type:e.type,value:i};r[o]=l}else r[o]=e})),r};const ue=function(e){var t=!0;return Object.values(e).every((function(e){return"board"===e.type&&null===e.value&&(t=!1),t})),t};const fe=function(e,t){var r={total:0,items:[]},n={},o={};Object.values(e).forEach((function(e,t){"target"===e.type?n[t]=e.value:"sum"===e.type&&e.value>-1&&(o[t]=e.value)}));var i=[0,9,90,99];return Object.keys(o).forEach((function(e){var l=parseInt(e,10),a=o[l]%t.base;0===a&&(a=6);var s=l+1;0===l?s=11:l<10?s=l+10:90===l?s=81:99===l?s=88:l>90&&(s=l-10),n[s]===a&&(r.total+=-1!==i.indexOf(l)?3:1,r.items.push(s))})),r};function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){var t=e.children,r=(0,n.useReducer)(oe,k),o=(0,d.default)(r,2),i=o[0],l=o[1];(0,n.useEffect)((function(){if(i.settings.inProgress&&i.settings.boardSet&&!ue(i.cells)){var e=ae(i.settings.difficultyLevel,i.cells,i.dice);l({type:"cells",payload:e}),"off"!==i.settings.difficultyLevel&&l({type:"status",payload:be(be({},i.status),{},{spacesUsed:4})}),i.settings.testMode&&(l({type:"cells",payload:ce(e,i.dice)}),l({type:"status",payload:{lastMove:77,spacesUsed:36}}))}}),[i.settings.inProgress]),(0,n.useEffect)((function(){if(i.settings.inProgress&&i.settings.boardSet){var e=de(i.cells,i.dice);l({type:"cells",payload:e}),36===i.status.spacesUsed&&(l({type:"settings",payload:be(be({},i.settings),{},{scoring:!0})}),l({type:"scoring",payload:fe(e,i.dice)}))}}),[i.status.spacesUsed]);var a=(0,n.useMemo)((function(){return{settings:i.settings,cells:i.cells,score:i.score,status:i.status,dice:i.dice,dispatch:l}}),[i]);return(0,T.jsx)(m.Provider,{value:a,children:t})};pe.propTypes={children:v().node.isRequired};const he=pe;function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me=je(je({},i.DefaultTheme),{},{colors:je(je({},i.DefaultTheme.colors),{},{primary:"tomato",secondary:"yellow",background:"green"})});const xe=function(){return(0,T.jsx)(he,{children:(0,T.jsx)(l.default,{theme:me,children:(0,T.jsxs)(a.default,{style:j.surface,elevation:4,testID:"surface",children:[(0,T.jsx)(U,{}),(0,T.jsx)(s.default,{}),(0,T.jsx)(te,{})]})})})};const ve=function(){return(0,T.jsx)(xe,{})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],a=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/sixto/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,a,s]=n,d=0;if(l.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var c=s(r)}for(t&&t(n);d<l.length;d++)i=l[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[991],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.83842929.js.map