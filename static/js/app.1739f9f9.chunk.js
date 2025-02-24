"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3524],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var l=n(2176),a=n(8123),r=n(1635),i=n(1861),c=n(717),o=n(4599),s=n(6471),m=n(2038),p=n(623),d=n(7179),u=n(2886),f=n(8612),y=n(1561),E=n(5272),g=n(6799),x=n(2342),h=n(7578),b=n(9405),A=n(2298),k=n(2210),v={sidebar:"App_sidebar__EbNVl","ant-menu-item":"App_ant-menu-item__XNXWL",container:"App_container__KkHQY",heading:"App_heading__21opY"};var w=()=>l.createElement("div",{className:v.container,style:{textAlign:"center",marginTop:"50px"}},l.createElement("img",{src:"https://res.cloudinary.com/diaxcqxfp/image/upload/v1731924506/Analyze_Data_1_xaleqz.png",alt:"Logo",style:{width:"200px",height:"auto",marginBottom:"20px"}}),l.createElement("p",{style:{fontSize:"20px",color:"#555"}},"Interactive Dashboards"),l.createElement("a",{href:"https://metabase-corelitics-759953921558.us-central1.run.app/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:"16px",fontWeight:"bold",color:"#fff",backgroundColor:"#4CAF50",textDecoration:"none",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s ease"},onMouseOver:e=>e.target.style.backgroundColor="#45a049",onMouseOut:e=>e.target.style.backgroundColor="#4CAF50"},"Visualize Here"));const{Sider:S,Content:_}=g.A,D={me:{resource:"me",params:{fields:["firstName","surname","email"]}}};var C=()=>{const[e,t]=(0,l.useState)(!1),[n,C]=(0,l.useState)(["3"]),{loading:z,error:I,data:N}=(0,E.iO)(D);if(z)return null;if(I)return null;const{firstName:O,surname:M,email:H}=N.me,$=`${H}`,L=`${O} ${M}`,U=`${(null===O||void 0===O?void 0:O[0])||""}${(null===M||void 0===M?void 0:M[0])||""}`,V=l.createElement(x.A,null,l.createElement(x.A.Item,{key:"profile-settings",icon:l.createElement(a.A,null)},l.createElement("a",{href:"/corelytics-web-user-profile/#/profile"},"Settings")),l.createElement(x.A.Item,{key:"account",icon:l.createElement(r.A,null)},l.createElement("a",{href:"/corelytics-web-user-profile/#/account"},"Account")),l.createElement(x.A.Item,{key:"logout",icon:l.createElement(i.A,null)},l.createElement("a",{href:"/dhis-web-commons-security/logout.action"},"Logout"))),W=[{key:"2.1",icon:l.createElement(c.A,null),label:l.createElement("a",{href:"/corelytics-web-maintenance/#/list/organisationUnitSection/organisationUnit"},"Organisation Units")},{key:"2.2",icon:l.createElement(c.A,null),label:l.createElement("a",{href:"/corelytics-web-maintenance/#/list/programSection/program"},"Programs")},{key:"2.3",icon:l.createElement(c.A,null),label:l.createElement("a",{href:"/corelytics-web-maintenance/#/list/dataElementSection/dataElement"},"Data Elements")},{key:"2.4",icon:l.createElement(c.A,null),label:l.createElement("a",{href:"/corelytics-web-maintenance/#/list/dataSetSection/dataSet"},"Data Sets")}],F=[{key:"5.1",label:l.createElement("a",{href:"/corelytics-web-user/"},"User Management"),icon:l.createElement(o.A,null)},{key:"5.2",label:l.createElement("a",{href:"/corelytics-web-settings/"},"System Settings"),icon:l.createElement(a.A,null)}],K=[{key:"3.1",label:l.createElement("a",{href:"/corelytics-web-capture/"},"Forms"),icon:l.createElement(s.A,null)},{key:"3.2",label:l.createElement("a",{href:"/corelytics-web-aggregate-data-entry/"},"Spreadsheets"),icon:l.createElement(m.A,null)},{key:"3.3",label:l.createElement("a",{href:"/corelytics-web-import-export/"},"Data Import & Export"),icon:l.createElement(p.A,null)}];return l.createElement(g.A,{style:{minHeight:"100vh"}},l.createElement(S,{trigger:null,collapsible:!0,collapsed:e,className:v.sidebar,style:{position:"fixed",height:"98vh",overflow:"hidden",width:e?"80px":"200px",transition:"width 0.2s",backgroundColor:"#ffffff",borderRight:"2px solid #d9d9d9"}},l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}},l.createElement(h.Ay,{type:"text",icon:l.createElement(k.A,{fontSize:"medium"}),onClick:()=>t(!e),style:{fontSize:"50px",width:"64px",height:"64px"}}),l.createElement("div",null,e?null:l.createElement("p",{style:{fontSize:"20px",fontWeight:"bold",color:"#1e3c72"}},"Corelytics"))),l.createElement(x.A,{mode:"inline",selectedKeys:"4",openKeys:n,onOpenChange:e=>{const t=e.find((e=>-1===n.indexOf(e)));C(t?[t]:[])},style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px 0"}},l.createElement(x.A.Item,{key:"1",icon:l.createElement(d.A,null)},l.createElement("a",{href:"/corelytics-web-usage-analytics/"},"Overview")),l.createElement(x.A.Divider,null),l.createElement(x.A.SubMenu,{key:"2",icon:l.createElement(u.A,null),title:"Metadata Activation"},W.map((e=>l.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label)))),l.createElement(x.A.Divider,null),l.createElement(x.A.SubMenu,{key:"3",icon:l.createElement(f.A,null),title:"Data Collection"},K.map((e=>l.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label)))),l.createElement(x.A.Divider,null),l.createElement(x.A.Item,{key:"4",icon:l.createElement(y.A,null)},l.createElement("a",{href:"/corelytics-web-dashboard/"},"Visualization")),l.createElement(x.A.Divider,null),l.createElement(x.A.SubMenu,{key:"5",icon:l.createElement(r.A,null),title:"Admin Centre"},F.map((e=>l.createElement(x.A.Item,{key:e.key,icon:e.icon},e.label))))),l.createElement("div",{style:{padding:e?"8px":"16px",margin:e?"4px":"12px",transition:"all 0.2s",flexShrink:0,position:"fixed",bottom:"20px",left:"20px",zIndex:1e3}},l.createElement("div",{style:{display:"flex",alignItems:e?"center":"flex-start",gap:"12px",flexDirection:"column"}},l.createElement(b.A,{overlay:V,trigger:["click"],placement:"right",arrow:!0},l.createElement(A.A,{size:e?40:48,style:{backgroundColor:"#1e3c72",cursor:"pointer",transition:"transform 0.2s"}},U)),!e&&l.createElement("div",{style:{lineHeight:1.2,display:"flex",flexDirection:"column",alignItems:"flex-start"}},l.createElement("div",{style:{fontWeight:600,fontSize:"14px",color:"#1a3353"}},L),l.createElement("div",{style:{fontSize:"12px",color:"#666",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},$))))),l.createElement(g.A,{style:{marginLeft:e?"85px":"205px",transition:"margin-left 0.2s"}},l.createElement("div",{className:v.titBar,style:{height:"50px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"}},l.createElement("h2",{className:v.heading,style:{fontSize:"30px"}},"Visualization")),l.createElement(_,{style:{margin:"15px",padding:15,minHeight:280,background:"#fff",borderRadius:"8px",border:"1px solid #D7D7D7"}},l.createElement(w,null))))}}}]);
//# sourceMappingURL=app.1739f9f9.chunk.js.map