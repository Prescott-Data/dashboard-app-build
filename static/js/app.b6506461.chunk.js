"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3524],{76:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var n=l(2176),a=l(8123),r=l(1635),i=l(1861),o=l(717),c=l(4599),s=l(6471),m=l(2038),p=l(623),d=l(7179),u=l(2886),y=l(8612),f=l(1561),g=l(5272),E=l(6799),x=l(2342),h=l(7578),b=l(9405),A=l(2298),k=l(2210),v={sidebar:"App_sidebar__EbNVl","ant-menu-item":"App_ant-menu-item__XNXWL",container:"App_container__KkHQY",heading:"App_heading__21opY"};var w=()=>n.createElement("div",{className:v.container,style:{textAlign:"center",marginTop:"50px"}},n.createElement("img",{src:"https://res.cloudinary.com/diaxcqxfp/image/upload/v1731924506/Analyze_Data_1_xaleqz.png",alt:"Logo",style:{width:"200px",height:"auto",marginBottom:"20px"}}),n.createElement("p",{style:{fontSize:"20px",color:"#555"}},"Interactive Dashboards"),n.createElement("a",{href:"https://metabase-corelitics-759953921558.us-central1.run.app/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:"16px",fontWeight:"bold",color:"#fff",backgroundColor:"#4CAF50",textDecoration:"none",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s ease"},onMouseOver:e=>e.target.style.backgroundColor="#45a049",onMouseOut:e=>e.target.style.backgroundColor="#4CAF50"},"Visualize Here"));const{Sider:S,Content:_}=E.A,D={me:{resource:"me",params:{fields:["firstName","surname","email"]}}};var C=()=>{const[e,t]=(0,n.useState)(!1),[l,C]=(0,n.useState)(["3"]),{loading:z,error:I,data:N}=(0,g.iO)(D);if(z)return null;if(I)return null;const{firstName:O,surname:M,email:H}=N.me,L=`${H}`,$=`${O} ${M}`,F=`${(null===O||void 0===O?void 0:O[0])||""}${(null===M||void 0===M?void 0:M[0])||""}`,R=n.createElement(x.A,null,n.createElement(x.A.Item,{key:"profile-settings",icon:n.createElement(a.A,null)},n.createElement("a",{href:"/corelytics-web-user-profile/#/profile"},"Settings")),n.createElement(x.A.Item,{key:"account",icon:n.createElement(r.A,null)},n.createElement("a",{href:"/corelytics-web-user-profile/#/account"},"Account")),n.createElement(x.A.Item,{key:"logout",icon:n.createElement(i.A,null)},n.createElement("a",{href:"/dhis-web-commons-security/logout.action"},"Logout"))),U=[{key:"2.1",icon:n.createElement(o.A,null),label:n.createElement("a",{href:"/corelytics-web-maintenance/#/list/organisationUnitSection/organisationUnit"},"Organisation Units")},{key:"2.2",icon:n.createElement(o.A,null),label:n.createElement("a",{href:"/corelytics-web-maintenance/#/list/programSection/program"},"Programs")},{key:"2.3",icon:n.createElement(o.A,null),label:n.createElement("a",{href:"/corelytics-web-maintenance/#/list/dataElementSection/dataElement"},"Data Elements")},{key:"2.4",icon:n.createElement(o.A,null),label:n.createElement("a",{href:"/corelytics-web-maintenance/#/list/dataSetSection/dataSet"},"Data Sets")}],V=[{key:"5.1",label:n.createElement("a",{href:"/corelytics-web-user/"},"User Management"),icon:n.createElement(c.A,null)},{key:"5.2",label:n.createElement("a",{href:"/corelytics-web-settings/"},"System Settings"),icon:n.createElement(a.A,null)}],W=[{key:"3.1",label:n.createElement("a",{href:"/corelytics-web-capture/"},"Forms"),icon:n.createElement(s.A,null)},{key:"3.2",label:n.createElement("a",{href:"/corelytics-web-aggregate-data-entry/"},"Spreadsheets"),icon:n.createElement(m.A,null)},{key:"3.3",label:n.createElement("a",{href:"/corelytics-web-import-export/"},"Data Import & Export"),icon:n.createElement(p.A,null)}];return n.createElement(E.A,{style:{minHeight:"100vh"}},n.createElement(S,{trigger:null,collapsible:!0,collapsed:e,className:v.sidebar,style:{position:"fixed",height:"98vh",overflow:"hidden",width:e?"80px":"200px",transition:"width 0.2s",backgroundColor:"#ffffff",borderRight:"2px solid #d9d9d9"}},n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}},n.createElement(h.Ay,{type:"text",icon:n.createElement(k.A,{fontSize:"medium"}),onClick:()=>t(!e),style:{fontSize:"50px",width:"64px",height:"64px"}}),n.createElement("div",null,n.createElement("img",{src:"https://res.cloudinary.com/diaxcqxfp/image/upload/v1742796613/logo_3_kzd454.jpg",alt:"Corelytics Logo",style:{width:e?"60px":"80px",height:e?"60px":"80px",borderRadius:"50%",objectFit:"cover",transition:"all 0.2s"}}),e?null:n.createElement("p",{style:{fontSize:"20px",fontWeight:"bold",color:"#1e3c72"}},"Corelytics"))),n.createElement(x.A,{mode:"inline",selectedKeys:"4",openKeys:l,onOpenChange:e=>{const t=e.find((e=>-1===l.indexOf(e)));C(t?[t]:[])},style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px 0"}},n.createElement(x.A.Item,{key:"1",icon:n.createElement(d.A,null)},n.createElement("a",{href:"/corelytics-web-usage-analytics/"},"Overview")),n.createElement(x.A.Divider,null),n.createElement(x.A.SubMenu,{key:"2",icon:n.createElement(u.A,null),title:"Activation"},U.map((e=>n.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label)))),n.createElement(x.A.Divider,null),n.createElement(x.A.SubMenu,{key:"3",icon:n.createElement(y.A,null),title:"Data Collection"},W.map((e=>n.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label)))),n.createElement(x.A.Divider,null),n.createElement(x.A.Item,{key:"4",icon:n.createElement(f.A,null)},n.createElement("a",{href:"/corelytics-web-dashboard/"},"Visualization")),n.createElement(x.A.Divider,null),n.createElement(x.A.SubMenu,{key:"5",icon:n.createElement(r.A,null),title:"Admin Centre"},V.map((e=>n.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label))))),n.createElement("div",{style:{padding:e?"8px":"16px",margin:e?"4px":"12px",transition:"all 0.2s",flexShrink:0,position:"fixed",bottom:"20px",left:"20px",zIndex:1e3}},n.createElement("div",{style:{display:"flex",alignItems:e?"center":"flex-start",gap:"12px",flexDirection:"column"}},n.createElement(b.A,{overlay:R,trigger:["click"],placement:"right",arrow:!0},n.createElement(A.A,{size:e?40:48,style:{backgroundColor:"#1e3c72",cursor:"pointer",transition:"transform 0.2s"}},F)),!e&&n.createElement("div",{style:{lineHeight:1.2,display:"flex",flexDirection:"column",alignItems:"flex-start"}},n.createElement("div",{style:{fontWeight:600,fontSize:"14px",color:"#1a3353"}},$),n.createElement("div",{style:{fontSize:"12px",color:"#666",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},L))))),n.createElement(E.A,{style:{marginLeft:e?"85px":"205px",transition:"margin-left 0.2s"}},n.createElement("div",{className:v.titBar,style:{height:"50px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"}},n.createElement("h2",{className:v.heading,style:{fontSize:"25px"}},"Visualization")),n.createElement(_,{style:{margin:"15px",padding:15,minHeight:280,background:"#fff",borderRadius:"8px",border:"1px solid #D7D7D7"}},n.createElement(w,null))))}}}]);
//# sourceMappingURL=app.b6506461.chunk.js.map