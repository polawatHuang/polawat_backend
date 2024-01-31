"use strict";(self.webpackChunkpolawat_backend=self.webpackChunkpolawat_backend||[]).push([[196],{64462:($,T,t)=>{t.d(T,{B:()=>j,D:()=>W,H:()=>C,R:()=>Z});var r=t(74081),M=t(10701),s=t(32370),y=t(27997),m=t(73354),E=t(74758),v=t(27875),u=t(15530),p=t(10411),D=t(76827),P=t(61020),I=t(43639),A=t(47289),x=t(19003);const k=(0,x.ZP)(M.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`,K=({name:w})=>(0,r.jsxs)(M.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.Q1)(300),children:[(0,r.jsx)(k,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,r.jsx)(p.Z,{width:`${8/16}rem`})}),(0,r.jsx)(s.Z,{fontWeight:"bold",children:w})]}),W=()=>(0,r.jsx)(I.P,{renderItem:w=>{if(w.type===A.D.STAGE)return(0,r.jsx)(K,{name:typeof w.item=="string"?w.item:null})}}),Z=({children:w})=>(0,r.jsx)(y.A,{children:(0,r.jsx)(m.o,{tabIndex:-1,children:(0,r.jsx)(E.D,{children:w})})}),j=({href:w})=>{const{formatMessage:N}=(0,P.Z)();return(0,r.jsx)(u.rU,{startIcon:(0,r.jsx)(D.Z,{}),to:w,children:N({id:"global.back",defaultMessage:"Back"})})},C=({title:w,subtitle:N,navigationAction:J,primaryAction:q})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.SL,{name:w}),(0,r.jsx)(v.T,{navigationAction:J,primaryAction:q,title:w,subtitle:N})]})},8217:($,T,t)=>{t.d(T,{a:()=>y,g:()=>s});var r=t(97003),M=t(47289);function s(m){if(!m)return null;const v=Object.entries(r.W.colors).filter(([,u])=>u.toUpperCase()===m.toUpperCase()).reduce((u,[p])=>(M.S?.[p]&&(u=p),u),null);return v?{themeColorName:v,name:M.S[v]}:null}function y(){return Object.entries(M.S).map(([m,E])=>({hex:r.W.colors[m].toUpperCase(),name:E}))}},51950:($,T,t)=>{t.d(T,{u:()=>m});var r=t(27279),M=t(15530),s=t(61020),y=t(43639);const m=(E={},v)=>{const{locale:u}=(0,s.Z)(),p=(0,M.Xe)(u,{sensitivity:"base"}),{data:D,error:P,isError:I,isLoading:A,refetch:x}=(0,y.z)(E,v);return{roles:r.useMemo(()=>[...D??[]].sort((K,W)=>p.compare(K.name,W.name)),[D,p]),error:P,isError:I,isLoading:A,refetch:x}}},5769:($,T,t)=>{t.d(T,{u:()=>v});var r=t(27279),M=t(15530),s=t(43639);const y=s.m.injectEndpoints({endpoints:u=>({getComponents:u.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:p=>p.data}),getContentTypes:u.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:p=>p.data})}),overrideExisting:!1}),{useGetComponentsQuery:m,useGetContentTypesQuery:E}=y;function v(){const{_unstableFormatAPIError:u}=(0,M.So)(),p=(0,M.lm)(),D=m(),P=E();r.useEffect(()=>{P.error&&p({type:"warning",message:u(P.error)})},[P.error,u,p]),r.useEffect(()=>{D.error&&p({type:"warning",message:u(D.error)})},[D.error,u,p]);const I=D.isLoading||P.isLoading,A=r.useMemo(()=>(P?.data??[]).filter(k=>k.kind==="collectionType"&&k.isDisplayed),[P?.data]),x=r.useMemo(()=>(P?.data??[]).filter(k=>k.kind!=="collectionType"&&k.isDisplayed),[P?.data]);return{isLoading:I,components:r.useMemo(()=>D?.data??[],[D?.data]),collectionTypes:A,singleTypes:x}}},58661:($,T,t)=>{t.d(T,{u:()=>M});var r=t(46413);function M(s={}){const{id:y="",...m}=s,{data:E,isLoading:v}=(0,r.c)({id:y,populate:"stages",...m}),[u]=(0,r.d)(),[p]=(0,r.e)(),[D]=(0,r.f)(),{workflows:P,meta:I}=E??{};return{meta:I,workflows:P,isLoading:v,createWorkflow:u,updateWorkflow:p,deleteWorkflow:D}}},23441:($,T,t)=>{t.d(T,{S:()=>et,W:()=>ot,a:()=>$e,b:()=>he,c:()=>fe,d:()=>xe,e:()=>je,f:()=>Ae,g:()=>Le,h:()=>ge,i:()=>Be,j:()=>ze,k:()=>Ze,l:()=>Te,r:()=>Ie,s:()=>Ne,u:()=>Se,v:()=>at});var r=t(27279),M=t(43639),s=t(74081),y=t(93415),m=t(32370),E=t(10701),v=t(97232),u=t(4987),p=t(10989),D=t(45322),P=t(24920),I=t(34642),A=t(23298),x=t(74577),k=t(12881),K=t(63738),W=t(15530),Z=t(61020),j=t(59461),C=t(19003),w=t(77225),N=t(75438),J=t(33039),q=t(78031),Pe=t(70627),ce=t(69933),H=t(81740),z=t(71563),we=t(50755),i=t(47289),ee=t(8217),L=t(45648),De=t(6078),_e=t(61815),Oe=t(43433),S=t(47853);function Se(e,o){const n=(0,M.Q)();(0,r.useEffect)(()=>{n.injectReducer(e,o)},[n,e,o])}function Ce(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function xe({workflows:e}){return{type:i.c,payload:e}}function ke(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,o){return{type:i.l,payload:{stageId:e,...o}}}function We(e){return{type:i.m,payload:e}}function Re(e,o){return{type:i.n,payload:{newIndex:o,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function Ie(){return{type:i.e}}function je(e){return{type:i.f,payload:e}}function Ae(e){return{type:i.g,payload:e}}function Le(e){return{type:i.h,payload:e}}const se=(0,C.ZP)(w.Z)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,be=(0,C.ZP)(y.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${m.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...o})=>(0,s.jsx)(be,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...o,children:(0,s.jsxs)(E.k,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(m.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:Pe.node.isRequired};const F={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=F,o){return(0,_e.Uy)(e,n=>{const{payload:c}=o;switch(o.type){case i.f:{n.serverState.contentTypes=c;break}case i.h:{n.clientState.isLoading=c;break}case i.g:{n.serverState.roles=c;break}case i.A:{const a=c;a&&(n.serverState.workflow=a,n.clientState.currentWorkflow.data={...a,stages:a.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{n.serverState.workflows=c;break}case i.e:{n.clientState=F.clientState,n.serverState=(0,_e.P2)(F.serverState);break}case i.k:{const{stageId:a}=c,{currentWorkflow:d}=e.clientState;n.clientState.currentWorkflow.data.stages=d.data.stages?.filter(f=>(f?.id??f.__temp_key__)!==a);break}case i.d:{const{currentWorkflow:a}=e.clientState;a.data||(n.clientState.currentWorkflow.data={stages:[]});const d=me(n.clientState.currentWorkflow.data.stages);n.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:a}=e.clientState,{id:d}=c,f=a.data.stages?.findIndex(h=>(h?.id??h?.__temp_key__)===d);if(f!==void 0&&f!==-1){const h=a.data.stages?.[f];n.clientState.currentWorkflow.data.stages?.splice(f+1,0,{...h,id:void 0,__temp_key__:me(n.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:a}=e.clientState,{stageId:d,...f}=c;n.clientState.currentWorkflow.data.stages=a.data.stages?.map(h=>(h.id??h.__temp_key__)===d?{...h,...f}:h);break}case i.m:{const{currentWorkflow:a}=e.clientState;n.clientState.currentWorkflow.data.stages=a.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:a}}}=e.clientState,{newIndex:d,oldIndex:f}=c;if(a&&d>=0&&d<a.length){const h=a[f],R=[...a];R.splice(f,1),R.splice(d,0,h),n.clientState.currentWorkflow.data.stages=R}break}case i.i:{n.clientState.currentWorkflow.data={...n.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const o=e.map(n=>Number(n.id??n.__temp_key__));return Math.max(...o,-1)+1},b=e=>e[i.R]??F,Ue=(0,L.P1)(b,({serverState:{contentTypes:e}})=>e),fe=(0,L.P1)(b,({serverState:{roles:e}})=>e),he=(0,L.P1)(b,({clientState:{currentWorkflow:e}})=>e.data),Ke=(0,L.P1)(b,({serverState:{workflows:e}})=>e),$e=(0,L.P1)(b,({serverState:e,clientState:{currentWorkflow:o}})=>!De(e.workflow,o.data)),Ze=(0,L.P1)(b,({serverState:e,clientState:{currentWorkflow:o}})=>!(e.workflow?.stages??[]).every(n=>!!o.data.stages?.find(({id:c})=>c===n.id))),Ne=(0,L.P1)(b,({clientState:{isLoading:e}})=>e),ze=(0,L.P1)(b,({serverState:e})=>e),Ge=(0,C.ZP)(v.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,He=(0,C.ZP)(E.k)`
  > * {
    flex-grow: 1;
  }
`,Fe=(0,C.ZP)(ce.sN)`
  color: ${({theme:e})=>e.colors.danger600};
`,Ve=(0,C.ZP)(H.xz)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Xe=(0,C.ZP)(u.h)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Qe=(0,ee.a)(),Ye=()=>(0,s.jsx)(y.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Je=({id:e,index:o,canDelete:n,canReorder:c,canUpdate:a,isOpen:d=!1,stagesCount:f})=>{const h=l=>`${l+1} of ${f}`,R=l=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:h(l)}))},oe=l=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:h(l)}))},V=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},ae=(l,U)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:h(l)})),O(Re(U,l))},ne=()=>{ie(!0)},[X,_]=r.useState(null),{formatMessage:g}=(0,Z.Z)(),{trackUsage:re}=(0,W.rS)(),O=(0,j.I0)(),nt=(0,W.lm)(),[le,rt]=r.useState(d),[lt,ie]=r.useState(!1),[B,Ee,it]=(0,z.U$)(`stages.${o}.name`),[Q,ve,dt]=(0,z.U$)(`stages.${o}.color`),[G,Me,ct]=(0,z.U$)(`stages.${o}.permissions`),_t=(0,j.v9)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,ht,ye]=(0,M.T)(c,{index:o,item:{index:o,name:B.value},onGrabItem:R,onDropItem:oe,onMoveItem:ae,onCancel:V,type:i.D.STAGE}),Et=(0,M.V)(mt,ft),vt=Qe.map(({hex:l,name:U})=>({value:l,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:U}),color:l})),{themeColorName:Mt}=(0,ee.g)(Q.value)??{},de=_t?.filter(l=>l.code!=="strapi-super-admin");return r.useEffect(()=>{ye((0,we.r)(),{captureDraggingState:!1})},[ye,o]),(0,s.jsxs)(y.x,{ref:l=>Et(l),children:[X&&(0,s.jsx)(p.T,{"aria-live":"assertive",children:X}),ut?(0,s.jsx)(Ye,{}):(0,s.jsxs)(D.U,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:Ee.error??ve?.error??Me?.error,hasErrorMessage:!1,children:[(0,s.jsx)(P.B,{title:B.value,togglePosition:"left",action:(n||a)&&(0,s.jsxs)(E.k,{children:[(0,s.jsxs)(H.fC,{children:[(0,s.jsxs)(Ve,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(N.Z,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(p.T,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(H.VY,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(H.rl,{children:[a&&(0,s.jsx)(ce.sN,{onClick:()=>O(Ce(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),n&&(0,s.jsx)(Fe,{onClick:()=>O(ke(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),a&&(0,s.jsx)(Xe,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:ht,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(J.Z,{})})]})}),(0,s.jsx)(I.v,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(A.r,{gap:4,children:[(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(k.o,{...B,id:B.name,disabled:!a,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:Ee.error??!1,onChange:l=>{it.setValue(l.target.value),O(te(e,{name:l.target.value}))},required:!0})}),(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(K.q4,{disabled:!a,error:ve?.error??!1,id:Q.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:l=>{dt.setValue(l),O(te(e,{color:String(l)}))},value:Q.value.toUpperCase(),startIcon:(0,s.jsx)(E.k,{as:"span",height:2,background:Q.value,borderColor:Mt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:vt.map(({value:l,label:U,color:Y})=>{const{themeColorName:yt}=(0,ee.g)(Y)||{};return(0,s.jsx)(K.ag,{value:l,startIcon:(0,s.jsx)(E.k,{as:"span",height:2,background:Y,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:U},l)})})}),(0,s.jsx)(x.P,{col:6,children:de?.length===0?(0,s.jsx)(W.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:G.name}):(0,s.jsxs)(E.k,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(He,{grow:1,children:(0,s.jsx)(v.NU,{...G,disabled:!a,error:Me.error??!1,id:G.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:l=>{const U=l.map(Y=>({role:parseInt(Y,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(U),O(te(e,{permissions:U}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(G.value??[]).map(l=>`${l.role}`),withTags:!0,children:(0,s.jsx)(v.Ab,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(l=>`${l.id}`),children:de?.map(l=>(0,s.jsx)(Ge,{value:`${l.id}`,children:l.name},l.id))})})}),(0,s.jsx)(u.h,{disabled:!a,icon:(0,s.jsx)(q.Z,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>ne()})]})})]})})]}),(0,s.jsx)(W.QH.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{O(We({permissions:G.value})),ie(!1),nt({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(W.QH.Body,{children:(0,s.jsx)(m.Z,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,C.ZP)(y.x)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:o=!0,stages:n=[]})=>{const{formatMessage:c}=(0,Z.Z)(),a=(0,j.I0)(),{trackUsage:d}=(0,W.rS)();return(0,s.jsxs)(E.k,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(y.x,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(E.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:n.map((f,h)=>{const R=Number(f?.id??f.__temp_key__);return(0,s.jsx)(y.x,{as:"li",children:(0,s.jsx)(Je,{id:R,index:h,isOpen:!f.id,canDelete:n.length>1&&e,canReorder:n.length>1,canUpdate:o,stagesCount:n.length})},`stage-${R}`)})})]}),o&&(0,s.jsx)(pe,{type:"button",onClick:()=>{a(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,C.ZP)(v.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,C.ZP)(m.Z)`
  font-style: italic;
`,ot=({canUpdate:e=!0})=>{const{formatMessage:o,locale:n}=(0,Z.Z)(),c=(0,j.I0)(),a=(0,j.v9)(Ue),d=(0,j.v9)(he),f=(0,j.v9)(Ke),[h,R,oe]=(0,z.U$)("name"),[V,ae,ne]=(0,z.U$)("contentTypes"),X=(0,W.Xe)(n,{sensitivity:"base"});return(0,s.jsxs)(A.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(k.o,{...h,id:h.name,disabled:!e,label:o({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:R.error??!1,onChange:_=>{c(ue({name:_.target.value})),oe.setValue(_.target.value)},required:!0})}),a&&(0,s.jsx)(x.P,{col:6,children:(0,s.jsx)(v.NU,{...V,customizeContent:_=>o({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ae.error??!1,id:V.name,label:o({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),ne.setValue(_)},placeholder:o({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...a.collectionTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...a.collectionTypes].sort((_,g)=>X.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...a.singleTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...a.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(v.Ab,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=f?.find(O=>(d&&O.id!==d.id||!d)&&O.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(m.Z,{children:o({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...O)=>(0,s.jsx)(m.Z,{as:"em",fontWeight:"bold",children:O}),i:(...O)=>(0,s.jsx)(st,{children:O})})})},g.value)})},_.label)})})})]})};async function at({values:e,formatMessage:o}){const n=S.Ry({contentTypes:S.IX().of(S.Z_()),name:S.Z_().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:S.IX().of(S.Ry().shape({name:S.Z_().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:a}}=this;return a?.stages.filter(d=>d.name===c).length===1}),color:S.Z_().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:S.IX(S.Ry({role:S.Rx().strict().typeError(o({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:S.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await n.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const a={};return c instanceof S.p8&&c.inner.forEach(d=>{d.path&&Oe(a,d.path,d.message)}),a}}}}]);
