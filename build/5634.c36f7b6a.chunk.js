"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[5634],{35634:(p,P,s)=>{s.d(P,{ProtectedListPage:()=>ts});var _=s(74081),D=s(27279),e=s(93153),a=s(50086),d=s(32370),C=s(10701),T=s(93415),h=s(4987),r=s(73354),E=s(27875),R=s(48102),L=s(37472),W=s(74758),I=s(70774),Z=s(38566),U=s(38101),K=s(10989),Q=s(86967),n=s(15530),N=s(36938),V=s(78031),X=s(26784),H=s(78665),J=s(53532),Y=s(61815),S=s(61020),b=s(51447),$=s(43639),k=s(51950),F=s(13067),rs=s(15816),Ms=s(97442),Os=s(13576),Ps=s(87830),Cs=s(47184),Ts=s(364),hs=s(59461),Rs=s(71563),Ls=s(49204),ms=s(47853),gs=s(74919),As=s(29206),vs=s(40464),Bs=s(98934),cs=s(43433),Ws=s(75719),Is=s(8175),Us=s(6078),Ks=s(51943),xs=s(55783),js=s(92249),fs=s(41942),ys=s(22919),us=s(53915),ps=s(75041),Zs=s(30200),Ns=s(91379),Ss=s(33299),$s=s(33409),Fs=s(63645),zs=s(7988),Gs=s(7055),Qs=s(26757),Vs=s(58311),Xs=s(24840),Hs=s(29510),Js=s(16946),Ys=s(10124),bs=s(69530),ks=s(86961),ws=s(51527),qs=s(19764),s_=s(42982),__=s(26126),t_=s(64797),o_=s(85811);const w=({id:t,name:O,description:l,usersCount:g,icons:A,rowIndex:x,canUpdate:v})=>{const{formatMessage:B}=(0,S.Z)(),[,m]=A,j=B({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:g});return(0,_.jsxs)(e.Tr,{"aria-rowindex":x,...v?(0,n.X7)({fn:m.onClick}):{},children:[(0,_.jsx)(a.Td,{maxWidth:(0,n.Q1)(130),children:(0,_.jsx)(d.Z,{ellipsis:!0,textColor:"neutral800",children:O})}),(0,_.jsx)(a.Td,{maxWidth:(0,n.Q1)(250),children:(0,_.jsx)(d.Z,{ellipsis:!0,textColor:"neutral800",children:l})}),(0,_.jsx)(a.Td,{children:(0,_.jsx)(d.Z,{textColor:"neutral800",children:j})}),(0,_.jsx)(a.Td,{children:(0,_.jsx)(C.k,{justifyContent:"flex-end",...n.UW,children:A.map((i,c)=>i?(0,_.jsx)(T.x,{paddingLeft:c===0?0:1,children:(0,_.jsx)(h.h,{onClick:i.onClick,label:i.label,borderWidth:0,icon:i.icon})},i.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,S.Z)();(0,n.go)();const O=(0,$.j)(F.s),{formatAPIError:l}=(0,n.So)(),g=(0,n.lm)(),[A,x]=D.useState(!1),[{query:v}]=(0,n.Kx)(),{isLoading:B,allowedActions:{canCreate:m,canDelete:j,canRead:i,canUpdate:c}}=(0,n.ss)(O.settings?.roles),{roles:z,refetch:os}=(0,k.u)({filters:v?._q?{name:{$containsi:v._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:B||!i}),{push:f}=(0,b.k6)(),[{showModalConfirmButtonLoading:ns,roleToDelete:as},y]=D.useReducer(_s,ss),{post:Es}=(0,n.tg)(),ls=async()=>{try{y({type:"ON_REMOVE_ROLES"}),await Es("/admin/roles/batch-delete",{ids:[as]}),await os(),y({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof J.d7&&g({type:"warning",message:l(o)})}u()},G=()=>f("/settings/roles/new"),u=()=>x(o=>!o),ds=o=>M=>{M.preventDefault(),M.stopPropagation(),o.usersCount?g({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(y({type:"SET_ROLE_TO_DELETE",id:o.id}),u())},is=o=>M=>{M.preventDefault(),M.stopPropagation(),f(`/settings/roles/duplicate/${o.id}`)},es=z.length+1,Ds=6;return B?(0,_.jsx)(r.o,{children:(0,_.jsx)(n.dO,{})}):(0,_.jsxs)(r.o,{children:[(0,_.jsx)(n.SL,{name:"Roles"}),(0,_.jsx)(E.T,{primaryAction:m?(0,_.jsx)(R.z,{onClick:G,startIcon:(0,_.jsx)(N.Z,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),i&&(0,_.jsx)(L.Z,{startActions:(0,_.jsx)(n.m,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),i&&(0,_.jsx)(W.D,{children:(0,_.jsxs)(I.i,{colCount:Ds,rowCount:es,footer:m?(0,_.jsx)(Z.c,{onClick:G,icon:(0,_.jsx)(N.Z,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(U.h,{children:(0,_.jsxs)(e.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(a.Th,{children:(0,_.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(K.T,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(Q.p,{children:z?.map((o,M)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[m&&{onClick:is(o),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(V.Z,{})},c&&{onClick:()=>f(`/settings/roles/${o.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(X.Z,{})},j&&{onClick:ds(o),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(H.Z,{})}].filter(Boolean),rowIndex:M+2,canUpdate:c},o.id))})]})}),(0,_.jsx)(n.QH,{isOpen:A,onConfirm:ls,isConfirmButtonLoading:ns,onToggleDialog:u})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,O)=>(0,Y.ZP)(t,l=>{switch(O.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=O.id;break}default:return l}}),ts=()=>{const t=(0,$.j)(F.s);return(0,_.jsx)(n.O4,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},51950:(p,P,s)=>{s.d(P,{u:()=>d});var _=s(27279),D=s(15530),e=s(61020),a=s(43639);const d=(C={},T)=>{const{locale:h}=(0,e.Z)(),r=(0,D.Xe)(h,{sensitivity:"base"}),{data:E,error:R,isError:L,isLoading:W,refetch:I}=(0,a.z)(C,T);return{roles:_.useMemo(()=>[...E??[]].sort((U,K)=>r.compare(U.name,K.name)),[E,r]),error:R,isError:L,isLoading:W,refetch:I}}},38566:(p,P,s)=>{s.d(P,{c:()=>r});var _=s(74081),D=s(19003),e=s(93415),a=s(84366),d=s(10701),C=s(32370);const T=(0,D.ZP)(e.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:E})=>E.colors.primary600};
  }
`,h=(0,D.ZP)(e.x)`
  border-radius: 0 0 ${({theme:E})=>E.borderRadius} ${({theme:E})=>E.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:E,icon:R,...L})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(a.i,{}),(0,_.jsx)(h,{as:"button",background:"primary100",padding:5,...L,children:(0,_.jsxs)(d.k,{children:[(0,_.jsx)(T,{"aria-hidden":!0,background:"primary200",children:R}),(0,_.jsx)(e.x,{paddingLeft:3,children:(0,_.jsx)(C.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E})})]})})]})}}]);
