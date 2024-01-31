"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[8624],{92800:(G,U,t)=>{t.d(U,{F:()=>g});var s=t(74081),p=t(27279),I=t(93415),v=t(48102),m=t(15530),R=t(57121),L=t(61020);const g=({displayedFilters:A})=>{const[C,B]=p.useState(!1),{formatMessage:y}=(0,L.Z)(),u=p.useRef(null),f=()=>{B(K=>!K)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(I.x,{paddingTop:1,paddingBottom:1,children:[(0,s.jsx)(v.z,{variant:"tertiary",ref:u,startIcon:(0,s.jsx)(R.Z,{}),onClick:f,size:"S",children:y({id:"app.utils.filters",defaultMessage:"Filters"})}),C&&(0,s.jsx)(m.J5,{displayedFilters:A,isVisible:C,onToggle:f,source:u})]}),(0,s.jsx)(m.W$,{filtersSchema:A})]})}},68624:(G,U,t)=>{t.d(U,{ProtectedListPage:()=>Et});var s=t(74081),p=t(5938),I=t(6918),v=t(15244),m=t(10701),R=t(77970),L=t(93415),g=t(32370),A=t(23298),C=t(28502),B=t(86967),y=t(93153),u=t(50086),f=t(4987),K=t(8295),J=t(61121),X=t(27997),Z=t(74758),Y=t(73354),H=t(27875),b=t(37472),_=t(15530),c=t(61020),T=t(43639),k=t(92800),W=t(27279),w=t(89486),q=t(82298),tt=t(33866),st=t(98264),x=t(70627),mt=t(15816),gt=t(97442),Mt=t(13576),Dt=t(87830),Pt=t(47184),Ot=t(364),Lt=t(59461),ut=t(71563),ct=t(49204),pt=t(47853),At=t(74919),Ct=t(29206),ft=t(40464),Tt=t(98934),ht=t(43433),Ut=t(75719),It=t(8175),vt=t(6078),Rt=t(51943),Bt=t(55783),yt=t(92249),Kt=t(41942),Wt=t(22919),xt=t(53915),jt=t(75041),St=t(30200),Ft=t(91379),Zt=t(33299),$t=t(33409),Nt=t(63645),Vt=t(7988),zt=t(7055),Qt=t(26757),Gt=t(58311),Jt=t(24840),Xt=t(29510),Yt=t(16946),Ht=t(10124),bt=t(69530),kt=t(86961),wt=t(51527),qt=t(19764),ts=t(42982),ss=t(26126);const et=T.m.injectEndpoints({endpoints:e=>({getAuditLogs:e.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:e.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:at,useGetAuditLogQuery:nt}=et,$=()=>{const{formatDate:e}=(0,c.Z)();return r=>{const a=(0,tt.Z)(r),d=e(a,{dateStyle:"long"}),n=e(a,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${n}`}},N={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},j=e=>N[e]||e,it=({handleClose:e,logId:i})=>{const r=(0,_.lm)(),{_unstableFormatAPIError:a}=(0,_.So)(),{data:d,error:n,isLoading:o}=nt(i);W.useEffect(()=>{n&&(r({type:"warning",message:a(n)}),e())},[n,a,e,r]);const l=$(),E=d&&"date"in d?l(d.date):"";return(0,s.jsxs)(p.P,{onClose:e,labelledBy:"title",children:[(0,s.jsx)(I.x,{children:(0,s.jsx)(w.O,{label:E,id:"title",children:(0,s.jsx)(q.$,{isCurrent:!0,children:E})})}),(0,s.jsx)(v.f,{children:(0,s.jsx)(ot,{isLoading:o,data:d,formattedDate:E})})]})},ot=({isLoading:e,data:i,formattedDate:r})=>{const{formatMessage:a}=(0,c.Z)();if(e)return(0,s.jsx)(m.k,{padding:7,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(R.a,{children:"Loading content..."})});const{action:d,user:n,payload:o}=i;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.x,{marginBottom:3,children:(0,s.jsx)(g.Z,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,s.jsxs)(A.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:j(d)},{model:o?.model})}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:r}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:n?.displayName||"-"}),(0,s.jsx)(h,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:n?.id.toString()||"-"})]}),(0,s.jsx)(C.V,{value:JSON.stringify(o,null,2),disabled:!0,label:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},h=({actionLabel:e,actionName:i})=>(0,s.jsxs)(m.k,{direction:"column",alignItems:"baseline",gap:1,children:[(0,s.jsx)(g.Z,{textColor:"neutral600",variant:"sigma",children:e}),(0,s.jsx)(g.Z,{textColor:"neutral600",children:i})]}),dt=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,s.jsx)(L.x,{paddingTop:4,children:(0,s.jsxs)(m.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,s.jsx)(_.v4,{}),(0,s.jsx)(_.tU,{pagination:e})]})}),S=({headers:e,rows:i,onOpenModal:r})=>{const{formatMessage:a}=(0,c.Z)(),d=$(),n=({type:o,value:l,model:E})=>o==="date"?d(l):o==="action"?a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:j(l)},{model:E}):l||"-";return(0,s.jsx)(B.p,{children:i.map(o=>(0,s.jsxs)(y.Tr,{...(0,_.X7)({fn:()=>r(o.id)}),children:[e?.map(({key:l,name:E,cellFormatter:M})=>{const D=o[E];return(0,s.jsx)(u.Td,{children:(0,s.jsx)(g.Z,{textColor:"neutral800",children:n({type:l,value:M?M(D):D,model:o.payload?.model})})},l)}),(0,s.jsx)(u.Td,{..._.UW,children:(0,s.jsx)(m.k,{justifyContent:"end",children:(0,s.jsx)(f.h,{onClick:()=>r(o.id),"aria-label":a({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${o.action} action`}),noBorder:!0,icon:(0,s.jsx)(st.Z,{})})})})]},o.id))})};S.defaultProps={rows:[]},S.propTypes={headers:x.array.isRequired,rows:x.array,onOpenModal:x.func.isRequired};const rt=({canReadAuditLogs:e,canReadUsers:i})=>{const r=(0,_.lm)(),{_unstableFormatAPIError:a}=(0,_.So)(),[{query:d}]=(0,_.Kx)(),{data:n,error:o,isError:l,isLoading:E}=(0,T.k)({},{skip:!i,refetchOnMountOrArgChange:!0});W.useEffect(()=>{o&&r({type:"warning",message:a(o)})},[o,r,a]);const{data:M,isLoading:D,isError:F,error:P}=at(d,{refetchOnMountOrArgChange:!0,skip:!e});return W.useEffect(()=>{P&&r({type:"warning",message:a(P)})},[P,r,a]),{auditLogs:M,users:n?.users??[],isLoading:E||D,hasError:F||l}},V=({value:e,options:i,onChange:r}={value:void 0})=>{const{formatMessage:a}=(0,c.Z)(),d=a({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,s.jsx)(K.hQ,{"aria-label":d,value:e,onChange:r,children:i?.map(({label:n,customValue:o})=>(0,s.jsx)(J.O,{value:o,children:n},o))})},z=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],_t=({formatMessage:e,users:i,canReadUsers:r})=>{const a=[{name:"action",metadatas:{customOperators:z,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:V,options:Object.keys(N).map(d=>({label:e({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:j(d)},{model:void 0}),customValue:d}))},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(r&&i){const d=n=>n.username?n.username:n.firstname&&n.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:n.firstname,lastname:n.lastname}):n.email;return[...a,{name:"user",metadatas:{customOperators:z,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i.map(n=>({label:d(n),customValue:n.id.toString()})),customInput:V},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return a},lt=()=>{const{formatMessage:e}=(0,c.Z)(),i=(0,T.j)(O=>O.admin_app.permissions.settings),{allowedActions:{canRead:r,canReadUsers:a},isLoading:d}=(0,_.ss)({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:n},o]=(0,_.Kx)(),{auditLogs:l,users:E,isLoading:M,hasError:D}=rt({canReadAuditLogs:r,canReadUsers:a});(0,_.go)();const F=_t({formatMessage:e,users:E,canReadUsers:a}),P=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:O=>O?O.displayName:""}];if(D)return(0,s.jsx)(X.A,{children:(0,s.jsx)(Z.D,{children:(0,s.jsx)(L.x,{paddingTop:8,children:(0,s.jsx)(_.Hn,{})})})});const Q=M||d;return(0,s.jsxs)(Y.o,{"aria-busy":Q,children:[(0,s.jsx)(_.SL,{name:e({id:"global.auditLogs",defaultMessage:"Audit Logs"})}),(0,s.jsx)(H.T,{title:e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,s.jsx)(b.Z,{startActions:(0,s.jsx)(k.F,{displayedFilters:F})}),(0,s.jsxs)(Z.D,{children:[(0,s.jsx)(_.tM,{contentType:"Audit logs",headers:P,rows:l?.results||[],withBulkActions:!0,isLoading:Q,children:(0,s.jsx)(S,{headers:P,rows:l?.results||[],onOpenModal:O=>o({id:`${O}`})})}),l?.pagination&&(0,s.jsx)(dt,{pagination:l.pagination})]}),n?.id&&(0,s.jsx)(it,{handleClose:()=>o({id:null},"remove"),logId:n.id})]})},Et=()=>{const e=(0,T.j)(i=>i.admin_app.permissions.settings?.auditLogs?.main);return(0,s.jsx)(_.O4,{permissions:e,children:(0,s.jsx)(lt,{})})}}}]);
