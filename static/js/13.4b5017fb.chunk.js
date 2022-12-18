(this["webpackJsonpquantria-frontend"]=this["webpackJsonpquantria-frontend"]||[]).push([[13],{286:function(e,t,n){"use strict";var r=n(15),a=n(0),i=n.n(a),o=n(534),s=n(249),c=n(1),l=i.a.forwardRef((function(e,t){var n,a,i=e.children,l=e.type,d=e.direction,u=e.offset,b=e.scale;switch(d){case"up":case"left":n=u,a=0;break;default:n=0,a=u}var j=Object(o.a)(n,a),m=Object(r.a)(j,2),p=m[0],h=m[1],x=Object(o.a)(n,a),O=Object(r.a)(x,2),f=O[0],g=O[1];switch(l){case"rotate":return Object(c.jsx)(s.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:i});case"slide":return"up"===d||"down"===d?Object(c.jsx)(s.a.div,{ref:t,animate:{y:f},onHoverEnd:function(){return g()},onHoverStart:function(){return g()},children:i}):Object(c.jsx)(s.a.div,{ref:t,animate:{x:p},onHoverEnd:function(){return h()},onHoverStart:function(){return h()},children:i});default:return"number"===typeof b&&(b={hover:b,tap:b}),Object(c.jsx)(s.a.div,{ref:t,whileHover:{scale:b.hover},whileTap:{scale:b.tap},children:i})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=l},315:function(e,t,n){"use strict";var r=n(2),a=n(4),i=n(0),o=n(8),s=n(101),c=n(7),l=n(12),d=n(570),u=n(571),b=n(567),j=n(566),m=n(569),p=n(301),h=n(562),x=n(85),O=n(102);function f(e){return Object(x.a)("MuiTextField",e)}Object(O.a)("MuiTextField",["root"]);var g=n(1),v=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],w={standard:d.a,filled:u.a,outlined:b.a},y=Object(c.a)(m.a,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),C=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiTextField"}),c=n.autoComplete,d=n.autoFocus,u=void 0!==d&&d,b=n.children,m=n.className,x=n.color,O=void 0===x?"primary":x,C=n.defaultValue,S=n.disabled,k=void 0!==S&&S,R=n.error,P=void 0!==R&&R,F=n.FormHelperTextProps,I=n.fullWidth,E=void 0!==I&&I,W=n.helperText,q=n.id,B=n.InputLabelProps,T=n.inputProps,H=n.InputProps,M=n.inputRef,N=n.label,D=n.maxRows,V=n.minRows,z=n.multiline,A=void 0!==z&&z,U=n.name,G=n.onBlur,J=n.onChange,L=n.onFocus,_=n.placeholder,Z=n.required,$=void 0!==Z&&Z,K=n.rows,Q=n.select,X=void 0!==Q&&Q,Y=n.SelectProps,ee=n.type,te=n.value,ne=n.variant,re=void 0===ne?"outlined":ne,ae=Object(a.a)(n,v),ie=Object(r.a)({},n,{autoFocus:u,color:O,disabled:k,error:P,fullWidth:E,multiline:A,required:$,select:X,variant:re}),oe=function(e){var t=e.classes;return Object(s.a)({root:["root"]},f,t)}(ie);var se={};if("outlined"===re&&(B&&"undefined"!==typeof B.shrink&&(se.notched=B.shrink),N)){var ce,le=null!=(ce=null==B?void 0:B.required)?ce:$;se.label=Object(g.jsxs)(i.Fragment,{children:[N,le&&"\xa0*"]})}X&&(Y&&Y.native||(se.id=void 0),se["aria-describedby"]=void 0);var de=W&&q?"".concat(q,"-helper-text"):void 0,ue=N&&q?"".concat(q,"-label"):void 0,be=w[re],je=Object(g.jsx)(be,Object(r.a)({"aria-describedby":de,autoComplete:c,autoFocus:u,defaultValue:C,fullWidth:E,multiline:A,name:U,rows:K,maxRows:D,minRows:V,type:ee,value:te,id:q,inputRef:M,onBlur:G,onChange:J,onFocus:L,placeholder:_,inputProps:T},se,H));return Object(g.jsxs)(y,Object(r.a)({className:Object(o.default)(oe.root,m),disabled:k,error:P,fullWidth:E,ref:t,required:$,color:O,variant:re,ownerState:ie},ae,{children:[N&&Object(g.jsx)(j.a,Object(r.a)({htmlFor:q,id:ue},B,{children:N})),X?Object(g.jsx)(h.a,Object(r.a)({"aria-describedby":de,id:q,labelId:ue,value:te,input:je},Y,{children:b})):je,W&&Object(g.jsx)(p.a,Object(r.a)({id:de},F,{children:W}))]}))}));t.a=C},329:function(e,t,n){"use strict";var r=n(417),a=Object(r.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=a},330:function(e,t,n){"use strict";var r=n(9),a=n(57),i=n(5),o=(n(0),n(251)),s=n(103),c=n(1),l=["children"],d=Object(o.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(i.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(i.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(i.a)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}}));t.a=function(e){var t=e.children,n=Object(a.a)(e,l),i=d();return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({className:i.card,contentClass:i.content},n),{},{children:t}))}},341:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},568:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(29),o=n(30),s=n(245),c=n(255),l=n(560),d=n(71),u=n(199),b=n(329),j=n(330),m=n(114),p=n(15),h=n(351),x=n(9),O=n(5),f=n(21),g=n(25),v=n(251),w=n(315),y=n(301),C=n(569),S=n(566),k=n(567),R=n(574),P=n(532),F=n(533),I=n(564),E=n(259),W=n(300),q=n(379),B=n(378),T=n(106),H=n.n(T),M=n(341),N=n(286),D=n(129),V=n.n(D),z=function(e){var t=0;return e.length>5&&t++,e.length>7&&t++,function(e){return new RegExp(/[0-9]/).test(e)}(e)&&t++,function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&t++,function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&t++,t},A=n(376),U=n.n(A),G=n(377),J=n.n(G),L=n(1),_=Object(v.a)((function(e){return{redButton:Object(O.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(O.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(x.a)({},e.typography.customInput)}})),Z=function(e){var t=Object.assign({},(Object(h.a)(e),e)),n=_(),o=Object(f.g)(),l=Object(M.a)(),u=Object(s.a)((function(e){return e.breakpoints.down("sm")})),b=a.a.useState(!1),j=Object(p.a)(b,2),m=j[0],O=j[1],v=a.a.useState(!0),T=Object(p.a)(v,2),D=T[0],A=T[1],G=a.a.useState(0),Z=Object(p.a)(G,2),$=(Z[0],Z[1]),K=a.a.useState(""),Q=Object(p.a)(K,2),X=(Q[0],Q[1]),Y=function(){O(!m)},ee=function(e){e.preventDefault()},te=function(e){var t,n=z(e);$(n),X((t=n)<2?{label:"Poor",color:V.a.errorMain}:t<3?{label:"Weak",color:V.a.warningDark}:t<4?{label:"Normal",color:V.a.orangeMain}:t<5?{label:"Good",color:V.a.successMain}:t<6?{label:"Strong",color:V.a.successDark}:void 0)};return Object(r.useEffect)((function(){te("123456")}),[]),Object(L.jsx)(a.a.Fragment,{children:Object(L.jsx)(B.a,{initialValues:{username:"",email:"",password:"",submit:null},validationSchema:q.a().shape({email:q.b().email("Must be a valid email").max(255).required("Email is required"),username:q.b().required("Username is required"),password:q.b().max(255).required("Password is required")}),onSubmit:function(e,t){var n=t.setErrors,r=t.setStatus,a=t.setSubmitting;try{H.a.post(g.a.API_SERVER+"users/register",{username:e.username,password:e.password,email:e.email}).then((function(e){e.data.success?o.push("/login"):(r({success:!1}),n({submit:e.data.msg}),a(!1))})).catch((function(e){r({success:!1}),n({submit:e.response.data.msg}),a(!1)}))}catch(i){console.error(i),l.current&&(r({success:!1}),n({submit:i.message}),a(!1))}},children:function(e){var r=e.errors,a=e.handleBlur,o=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,b=e.touched,j=e.values;return Object(L.jsxs)("form",Object(x.a)(Object(x.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(L.jsx)(c.a,{container:!0,spacing:u?0:2,children:Object(L.jsxs)(c.a,{item:!0,xs:12,children:[Object(L.jsx)(w.a,{fullWidth:!0,label:"Username",margin:"normal",name:"username",id:"username",type:"text",value:j.username,onBlur:a,onChange:o,className:n.loginInput,error:b.username&&Boolean(r.username)}),b.username&&r.username&&Object(L.jsx)(y.a,{error:!0,id:"standard-weight-helper-text--register",children:r.username})]})}),Object(L.jsxs)(C.a,{fullWidth:!0,error:Boolean(b.email&&r.email),className:n.loginInput,children:[Object(L.jsx)(S.a,{htmlFor:"outlined-adornment-email-register",children:"Email"}),Object(L.jsx)(k.a,{id:"outlined-adornment-email-register",type:"email",value:j.email,name:"email",onBlur:a,onChange:o,inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.email&&r.email&&Object(L.jsxs)(y.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",r.email," "]})]}),Object(L.jsxs)(C.a,{fullWidth:!0,error:Boolean(b.password&&r.password),className:n.loginInput,children:[Object(L.jsx)(S.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(L.jsx)(k.a,{id:"outlined-adornment-password-register",type:m?"text":"password",value:j.password,name:"password",label:"Password",onBlur:a,onChange:function(e){o(e),te(e.target.value)},endAdornment:Object(L.jsx)(R.a,{position:"end",children:Object(L.jsx)(P.a,{"aria-label":"toggle password visibility",onClick:Y,onMouseDown:ee,edge:"end",children:m?Object(L.jsx)(U.a,{}):Object(L.jsx)(J.a,{})})}),inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.password&&r.password&&Object(L.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-register",children:r.password})]}),Object(L.jsx)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(L.jsx)(c.a,{item:!0,children:Object(L.jsx)(F.a,{control:Object(L.jsx)(I.a,{checked:D,onChange:function(e){return A(e.target.checked)},name:"checked",color:"primary"}),label:Object(L.jsxs)(d.a,{variant:"subtitle1",children:["Agree with \xa0",Object(L.jsx)(d.a,{variant:"subtitle1",component:i.b,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&Object(L.jsx)(E.a,{sx:{mt:3},children:Object(L.jsx)(y.a,{error:!0,children:r.submit})}),Object(L.jsx)(E.a,{sx:{mt:2},children:Object(L.jsx)(N.a,{children:Object(L.jsx)(W.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign Up"})})})]}))}})})};t.default=function(){var e=Object(o.a)(),t=Object(s.a)(e.breakpoints.down("sm"));return Object(L.jsx)(b.a,{children:Object(L.jsx)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:Object(L.jsx)(c.a,{item:!0,xs:12,children:Object(L.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(L.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(L.jsx)(j.a,{children:Object(L.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(L.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(L.jsx)(i.b,{to:"#",children:Object(L.jsx)(m.a,{})})}),Object(L.jsx)(c.a,{item:!0,xs:12,children:Object(L.jsx)(c.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(c.a,{item:!0,children:Object(L.jsxs)(l.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(L.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign Up"}),Object(L.jsx)(d.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"",children:"Enter your credentials to continue"})]})})})}),Object(L.jsx)(c.a,{item:!0,xs:12,children:Object(L.jsx)(Z,{})}),Object(L.jsx)(c.a,{item:!0,xs:12,children:Object(L.jsx)(u.a,{})}),Object(L.jsx)(c.a,{item:!0,xs:12,children:Object(L.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(L.jsx)(d.a,{component:i.b,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Have an account?"})})})]})})})})})})})}}}]);
//# sourceMappingURL=13.4b5017fb.chunk.js.map