"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[3213,5517],{13213:(V,U,s)=>{s.d(U,{ProtectedCreateView:()=>z});var t=s(74081),M=s(15530),m=s(59461),v=s(13067),L=s(75517),g=s(27279),c=s(64797),D=s(85811),_=s(43639),O=s(15816),e=s(97442),a=s(13576),N=s(87830),Z=s(47184),y=s(364),j=s(71563),C=s(49204),f=s(47853),x=s(74919),A=s(29206),l=s(40464),H=s(98934),Y=s(43433),X=s(75719),w=s(8175),b=s(6078),q=s(51943),ss=s(55783),ts=s(92249),_s=s(41942),ns=s(22919),as=s(53915),Es=s(75041),os=s(30200),rs=s(91379),es=s(33299),ds=s(33409),is=s(63645),Ps=s(7988),Ms=s(7055),Ds=s(26757),Os=s(58311),ls=s(24840),Ts=s(29510),ms=s(16946),vs=s(10124),Ls=s(69530),Cs=s(86961),As=s(51527),Rs=s(19764),Is=s(42982),Bs=s(26126),Us=s(10271),fs=s(24722);const z=()=>{const G=(0,m.v9)(v.s);return(0,t.jsx)(M.O4,{permissions:G.settings?.["transfer-tokens"].create,children:(0,t.jsx)(L.N,{})})}},75517:(V,U,s)=>{s.d(U,{N:()=>k,ProtectedEditView:()=>Ws});var t=s(74081),M=s(27279),m=s(73354),v=s(74758),L=s(10701),g=s(93415),c=s(32370),D=s(23298),_=s(74577),O=s(27875),e=s(48102),a=s(15530),N=s(59082),Z=s(71563),y=s(61020),j=s(51447),C=s(47853),f=s(43639),x=s(10271),A=s(93118),l=s(24722),H=s(15816),Y=s(97442),X=s(13576),w=s(87830),b=s(47184),q=s(364),ss=s(59461),ts=s(49204),_s=s(74919),ns=s(29206),as=s(40464),Es=s(98934),os=s(43433),rs=s(75719),es=s(8175),ds=s(6078),is=s(51943),Ps=s(55783),Ms=s(92249),Ds=s(41942),Os=s(22919),ls=s(53915),Ts=s(75041),ms=s(30200),vs=s(91379),Ls=s(33299),Cs=s(33409),As=s(63645),Rs=s(7988),Is=s(7055),Bs=s(26757),Us=s(58311),fs=s(24840),z=s(29510),G=s(16946),Vs=s(10124),Ns=s(69530),Zs=s(86961),zs=s(51527),Gs=s(19764),ks=s(42982),$s=s(26126);const Ks=C.Ry().shape({name:C.Z_().max(100).required(a.I0.required),description:C.Z_().nullable(),lifespan:C.Rx().integer().min(0).nullable().defined(a.I0.required),permissions:C.Z_().required(a.I0.required)}),k=()=>{(0,a.go)();const{formatMessage:o}=(0,y.Z)(),{lockApp:r,unlockApp:K}=(0,a.o1)(),i=(0,a.lm)(),R=(0,j.k6)(),{state:W}=(0,j.TH)(),[E,I]=M.useState(W&&"accessKey"in W.transferToken?{...W.transferToken}:null),{trackUsage:T}=(0,a.rS)(),{setCurrentStep:cs}=(0,a.c1)(),ys=(0,f.j)(d=>d.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:js,canUpdate:xs,canRegenerate:ps}}=(0,a.ss)(ys),p=(0,j.$B)("/settings/transfer-tokens/:id")?.params?.id,P=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:$}=(0,a.So)();M.useEffect(()=>{T(P?"didAddTokenFromList":"didEditTokenFromList",{tokenType:A.T})},[P,T]);const{data:S,error:F}=(0,x.u)(p,{skip:P||E!==null||!p});M.useEffect(()=>{F&&i({type:"warning",message:u(F)})},[F,u,i]),M.useEffect(()=>{S&&I(S)},[S]);const[us]=(0,x.a)(),[Ss]=(0,x.b)(),Fs=async(d,B)=>{T(P?"willCreateToken":"willEditToken",{tokenType:A.T}),r();const h=d.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(P){const n=await us({...d,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors($(n.error)):i({type:"warning",message:u(n.error)});return}I(n.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:A.T}),R.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),cs("transferTokens.success")}else{const n=await Ss({id:p,name:d.name,description:d.description,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors($(n.error)):i({type:"warning",message:u(n.error)});return}I(n.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:A.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{K()}},Q=xs&&!P||js&&P;return!P&&!E?(0,t.jsx)(gs,{}):(0,t.jsxs)(m.o,{children:[(0,t.jsx)(a.SL,{name:"Transfer Tokens"}),(0,t.jsx)(Z.J9,{validationSchema:Ks,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(d,B)=>Fs(d,B),children:({errors:d,handleChange:B,isSubmitting:h,values:J})=>(0,t.jsxs)(a.l0,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:I,canEditInputs:Q,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.D,{children:(0,t.jsxs)(L.k,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:A.T}),(0,t.jsx)(hs,{errors:d,onChange:B,canEditInputs:Q,isCreating:P,values:J,transferToken:E})]})})]})})]})},Ws=()=>{const o=(0,f.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.O4,{permissions:o,children:(0,t.jsx)(k,{})})},hs=({errors:o={},onChange:r,canEditInputs:K,isCreating:i,values:R,transferToken:W={}})=>{const{formatMessage:E}=(0,y.Z)(),I=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(L.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.Z,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.r,{gap:5,children:[(0,t.jsx)(_.P,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:R.name,canEditInputs:K,onChange:r})},"name"),(0,t.jsx)(_.P,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:R.description,canEditInputs:K,onChange:r})},"description"),(0,t.jsx)(_.P,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:i,error:o.lifespan,value:R.lifespan,onChange:r,token:W})},"lifespan"),(0,t.jsx)(_.P,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:R.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:I,canEditInputs:K})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.Z)();return(0,a.go)(),(0,t.jsxs)(m.o,{"aria-busy":"true",children:[(0,t.jsx)(a.SL,{name:"Transfer Tokens"}),(0,t.jsx)(O.T,{primaryAction:(0,t.jsx)(e.z,{disabled:!0,startIcon:(0,t.jsx)(N.Z,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.D,{children:(0,t.jsx)(a.dO,{})})]})}},10271:(V,U,s)=>{s.d(U,{a:()=>L,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(43639);const M=t.m.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:L,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=M}}]);
