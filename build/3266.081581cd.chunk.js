"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[3266],{53266:($,m,e)=>{e.r(m),e.d(m,{default:()=>B});var s=e(74081),k=e(27279),D=e(51926),_=e(73354),u=e(27875),E=e(74758),y=e(48102),A=e(93415),L=e(10701),x=e(32370),T=e(23298),p=e(74577),R=e(5627),S=e(78955),a=e(15530),C=e(59082),I=e(71563),j=e(61020),r=e(40464),t=e(89202),q=e(10124),o=e(47853);const U=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],f=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=o.Ry().shape({email_confirmation_redirection:o.nK().when("email_confirmation",{is:!0,then:o.Z_().matches(f).required(),otherwise:o.Z_().nullable()}),email_reset_password:o.Z_(a.I0.string).matches(f,a.I0.regex).nullable()}),B=()=>(0,s.jsx)(a.O4,{permissions:t.P.readAdvancedSettings,children:(0,s.jsx)(K,{})}),K=()=>{const{formatMessage:d}=(0,j.Z)(),l=(0,a.lm)(),{lockApp:b,unlockApp:M}=(0,a.o1)(),{notifyStatus:F}=(0,D.G)(),z=(0,r.useQueryClient)(),{get:w,put:N}=(0,a.kY)(),{formatAPIError:Z}=(0,a.So)();(0,a.go)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,a.ss)({update:t.P.updateAdvancedSettings}),{isLoading:Q,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await w("/users-permissions/advanced");return n},{onSuccess(){F(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),G=H||Q,P=(0,r.useMutation)(n=>N("/users-permissions/advanced",n),{async onSuccess(){await z.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),M()},onError(n){l({type:"warning",message:Z(n)}),M()},refetchActive:!0}),{isLoading:X}=P,J=async n=>{b(),P.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return G?(0,s.jsxs)(_.o,{"aria-busy":"true",children:[(0,s.jsx)(a.SL,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(E.D,{children:(0,s.jsx)(a.dO,{})})]}):(0,s.jsxs)(_.o,{"aria-busy":X,children:[(0,s.jsx)(a.SL,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(I.J9,{onSubmit:J,initialValues:v.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0,children:({errors:n,values:g,handleChange:O,isSubmitting:V,dirty:Y})=>(0,s.jsxs)(a.l0,{children:[(0,s.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,s.jsx)(y.z,{loading:V,type:"submit",disabled:h?!Y:!h,startIcon:(0,s.jsx)(C.Z,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(E.D,{children:(0,s.jsx)(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(L.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(x.Z,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(T.r,{gap:6,children:[(0,s.jsx)(p.P,{col:6,s:12,children:(0,s.jsx)(R.P,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:g.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:i=>O({target:{name:"default_role",value:i}}),children:v.roles.map(i=>(0,s.jsx)(S.W,{value:i.type,children:i.name},i.type))})}),U.map(i=>{let c=g[i.name];return c||(c=i.type==="bool"?!1:""),(0,s.jsx)(p.P,{...i.size,children:(0,s.jsx)(a.jm,{...i,value:c,error:n[i.name],disabled:i.name==="email_confirmation_redirection"&&g.email_confirmation===!1,onChange:O})},i.name)})]})]})})})]})})]})}}}]);
