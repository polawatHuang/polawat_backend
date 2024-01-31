"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[9780],{39780:(J,A,s)=>{s.r(A),s.d(A,{ProfilePage:()=>ts});var e=s(74081),d=s(27279),U=s(51926),L=s(73354),h=s(27875),N=s(74758),Y=s(48102),O=s(93415),p=s(10701),I=s(32370),C=s(23298),m=s(74577),H=s(12881),X=s(28040),D=s(63738),i=s(15530),b=s(59082),j=s(98264),B=s(92191),k=s(71563),q=s(51943),z=s(364),x=s(61020),V=s(19003),W=s(47853),l=s(43639),ss=s(13067),es=s(91224),ps=s(15816),Ds=s(97442),us=s(13576),vs=s(87830),As=s(47184),Ls=s(59461),Is=s(49204),Cs=s(74919),xs=s(29206),Ts=s(40464),Rs=s(98934),Us=s(43433),js=s(75719),Bs=s(8175),Ws=s(6078),Ks=s(55783),ys=s(92249),ws=s(41942),Ss=s(22919),Zs=s(53915),Fs=s(75041),Ns=s(30200),Hs=s(91379),zs=s(33299),Vs=s(33409),Gs=s(63645),$s=s(7988),Qs=s(7055),Js=s(26757),Ys=s(58311),Xs=s(24840),bs=s(29510),ks=s(16946),qs=s(10124),se=s(69530),ee=s(86961),ae=s(51527),te=s(19764),re=s(42982),oe=s(26126),ne=s(64797),ie=s(85811);const as=W.Ry().shape({...es.C,currentPassword:W.Z_().when(["password","confirmPassword"],(t,r,n)=>t||r?n.required(i.I0.required):n),preferedLanguage:W.Z_().nullable()}),ts=()=>{const t=(0,l.j)(_=>_.admin_app.language.localeNames),{formatMessage:r}=(0,x.Z)(),{trackUsage:n}=(0,i.rS)(),a=(0,i.lm)(),{lockApp:M,unlockApp:o}=(0,i.o1)(),{notifyStatus:c}=(0,U.G)(),y=(0,l.j)(_=>_.admin_app.theme.currentTheme),u=(0,l.s)(),{_unstableFormatValidationErrors:w,_unstableFormatAPIError:g}=(0,i.So)();(0,i.go)();const P=(0,l.a)("ProfilePage",_=>_.user);d.useEffect(()=>{P?c(r({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"})):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[r,c,a,P]);const[is,{isLoading:ds}]=(0,l.t)(),{isLoading:ls,data:_s,error:$}=(0,l.v)(void 0,{skip:!(window.strapi.isEE&&window.strapi.features.isEnabled("sso"))});d.useEffect(()=>{$&&a({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})},[$,a]);const Es=async(_,{setErrors:S})=>{M();const{confirmPassword:Z,currentTheme:v,...T}=_;let f=T;if(f.password===""){const{password:Q,currentPassword:R,...F}=f;f=F}const E=await is(f);"data"in E&&(u((0,l.w)(v)),n("didChangeMode",{newMode:v}),a({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})),"error"in E&&((0,l.x)(E.error)&&(E.error.name==="ValidationError"||E.error.message==="ValidationError")?S(w(E.error)):(0,l.x)(E.error)?a({type:"warning",message:g(E.error)}):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})),o?.()};if(ls)return(0,e.jsxs)(L.o,{"aria-busy":"true",children:[(0,e.jsx)(z.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(h.T,{title:r({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,e.jsx)(N.D,{children:(0,e.jsx)(i.dO,{})})]});const ms=_s?.isSSOLocked??!1,{email:Ps,firstname:cs,lastname:Ms,username:gs,preferedLanguage:fs}=P??{},hs={email:Ps,firstname:cs,lastname:Ms,username:gs,preferedLanguage:fs,currentTheme:y,confirmPassword:"",password:""};return(0,e.jsxs)(L.o,{"aria-busy":ds,children:[(0,e.jsx)(z.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(k.J9,{onSubmit:Es,initialValues:hs,validateOnChange:!1,validationSchema:as,enableReinitialize:!0,children:({errors:_,values:{email:S,firstname:Z,lastname:v,username:T,preferedLanguage:f,currentTheme:E,...Q},handleChange:R,isSubmitting:F,dirty:Os})=>(0,e.jsxs)(i.l0,{children:[(0,e.jsx)(h.T,{title:T||(0,ss.g)(Z??"",v),primaryAction:(0,e.jsx)(Y.z,{startIcon:(0,e.jsx)(b.Z,{}),loading:F,type:"submit",disabled:!Os,children:r({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(O.x,{paddingBottom:10,children:(0,e.jsx)(N.D,{children:(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(ns,{errors:_,onChange:R,values:{firstname:Z,lastname:v,username:T,email:S}}),!ms&&(0,e.jsx)(rs,{errors:_,onChange:R,values:Q}),(0,e.jsx)(os,{onChange:R,values:{preferedLanguage:f,currentTheme:E},localeNames:t})]})})})]})})]})},rs=({errors:t,onChange:r,values:n})=>{const{formatMessage:a}=(0,x.Z)(),[M,o]=d.useState(!1),[c,y]=d.useState(!1),[u,w]=d.useState(!1);return(0,e.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(I.Z,{variant:"delta",as:"h2",children:a({id:"global.change-password",defaultMessage:"Change password"})}),(0,e.jsx)(C.r,{gap:5,children:(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(H.o,{error:t.currentPassword?a({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:r,value:n.currentPassword,label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:M?"text":"password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),o(P=>!P)},label:a(M?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:M?(0,e.jsx)(j.Z,{}):(0,e.jsx)(B.Z,{})})})})}),(0,e.jsxs)(C.r,{gap:5,children:[(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(G,{error:t.password?a({id:t.password,defaultMessage:t.password}):"",onChange:r,value:n.password,label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:c?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),y(P=>!P)},label:a(c?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:c?(0,e.jsx)(j.Z,{}):(0,e.jsx)(B.Z,{})})})}),(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(G,{error:t.confirmPassword?a({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:r,value:n.confirmPassword,label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",type:u?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(K,{onClick:g=>{g.stopPropagation(),w(P=>!P)},label:a(u?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:u?(0,e.jsx)(j.Z,{}):(0,e.jsx)(B.Z,{})})})})]})]})})},G=(0,V.ZP)(H.o)`
  ::-ms-reveal {
    display: none;
  }
`,K=(0,V.ZP)(X.E)`
  svg {
    height: ${(0,i.Q1)(16)};
    width: ${(0,i.Q1)(16)};
    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,os=({onChange:t,values:r,localeNames:n})=>{const{formatMessage:a}=(0,x.Z)(),M=(0,l.j)(o=>o.admin_app.theme.availableThemes);return(0,e.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.Z,{variant:"delta",as:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,e.jsx)(I.Z,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,e.jsx)(O.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,e.jsxs)(C.r,{gap:5,children:[(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(D.q4,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{t({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:r.preferedLanguage,onChange:o=>{t({target:{name:"preferedLanguage",value:o}})},children:Object.entries(n).map(([o,c])=>(0,e.jsx)(D.ag,{value:o,children:c},o))})}),(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsxs)(D.q4,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:r.currentTheme,onChange:o=>{t({target:{name:"currentTheme",value:o}})},children:[(0,e.jsx)(D.ag,{value:"system",children:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),M.map(o=>(0,e.jsx)(D.ag,{value:o,children:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:o,defaultMessage:q(o)})})},o))]})})]})]})})},ns=({errors:t,onChange:r,values:n})=>{const{formatMessage:a}=(0,x.Z)();return(0,e.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(I.Z,{variant:"delta",as:"h2",children:a({id:"global.profile",defaultMessage:"Profile"})}),(0,e.jsxs)(C.r,{gap:5,children:[(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:r,value:n.firstname,type:"text",name:"firstname",required:!0})}),(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:r,value:n.lastname,type:"text",name:"lastname"})}),(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:r,value:n.email,type:"email",name:"email",required:!0})}),(0,e.jsx)(m.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:r,value:n.username,type:"text",name:"username"})})]})]})})}},91224:(J,A,s)=>{s.d(A,{C:()=>U});var e=s(15530),d=s(47853);const U={firstname:d.Z_().trim().required(e.I0.required),lastname:d.Z_(),email:d.Z_().email(e.I0.email).lowercase().required(e.I0.required),username:d.Z_().nullable(),password:d.Z_().min(8,e.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:d.Z_().min(8,e.I0.minLength).oneOf([d.iH("password"),null],"components.Input.error.password.noMatch").when("password",(L,h)=>L?h.required(e.I0.required):h)}}}]);
