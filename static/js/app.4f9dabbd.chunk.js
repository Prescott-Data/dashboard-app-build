"use strict";(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[3524],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(5272),l=n(8014),r=n(2176),c=n(8123),i=n(1635),s=n(1861),m=n(4727),o=n(5176),d=n(6471),u=n(2558),E=n(623),h=n(750),p=n(80),g=n(3472),A=n(3338),f=n(1144),y=n(6799),b=n(975),k=n(424),x=n(7578),v=n(9405),w={container:"App_container__KkHQY",heading:"App_heading__21opY",sidebar:"App_sidebar__EbNVl"};var _=()=>r.createElement("div",{className:w.container},r.createElement("img",{src:"https://res.cloudinary.com/diaxcqxfp/image/upload/v1731924506/Analyze_Data_1_xaleqz.png",alt:"Logo"}),r.createElement("p",null,"Create dashboards to visualize"),r.createElement("a",{href:"https://metabase-corelitics-759953921558.us-central1.run.app/",target:"_blank"},"Click here to visualize"));function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(null,arguments)}const{Sider:C,Content:S}=y.A,z={me:{resource:"me"}};function D(e){let t,n=0;for(t=0;t<e.length;t+=1)n=e.charCodeAt(t)+((n<<5)-n);let a="#";for(t=0;t<3;t+=1){a+=`00${(n>>8*t&255).toString(16)}`.slice(-2)}return a}var N=()=>{const[e,t]=(0,r.useState)(!1),{token:{colorBgContainer:n,borderRadiusLG:N}}=b.A.useToken(),{error:O,loading:R,data:L}=(0,a.iO)(z);if(O)return r.createElement("span",null,l.A.t("ERROR"));if(R)return r.createElement("span",null,l.A.t("Loading..."));const T=[{icon:r.createElement(g.A,I({},(j=L.me.name,{sx:{bgcolor:D(j)},children:`${j.split(" ")[0][0]}${j.split(" ")[1][0]}`}),{sx:{width:30,height:30}})),label:"Profile",children:[{key:"profile-settings",label:r.createElement("a",{href:"/dhis-web-user-profile/#/settings"},"Settings"),icon:r.createElement(c.A,null)},{key:"account",label:r.createElement("a",{href:"/dhis-web-user-profile/#/account"},"Account"),icon:r.createElement(i.A,null)},{key:"logout",label:r.createElement("a",{href:"/dhis-web-commons-security/logout.action"},"Logout"),icon:r.createElement(s.A,null)}]}];var j;const q=r.createElement(k.A,null,r.createElement(k.A.Item,{key:"event"},r.createElement("a",{href:"/dhis-web-capture/"},"Event")),r.createElement(k.A.Item,{key:"tracker"},r.createElement("a",{href:"/dhis-web-aggregate-data-entry/"},"Tracker")));return r.createElement(y.A,{style:{minHeight:"100vh"}},r.createElement(C,{trigger:null,collapsible:!0,collapsed:e,className:w.sidebar},r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}},r.createElement("img",{src:"https://res.cloudinary.com/diaxcqxfp/image/upload/v1730971091/prescott-logo.png",alt:"Cloudinary Icon",style:{width:"50px",height:"55px"}}),r.createElement(x.Ay,{type:"text",icon:e?r.createElement(A.A,{fontSize:"medium"}):r.createElement(f.A,{fontSize:"medium"}),onClick:()=>t(!e),style:{fontSize:"50px",width:"64px",height:"64px"}})),r.createElement(k.A,{mode:"inline",defaultSelectedKeys:["1"]},r.createElement(k.A.Item,{key:"1",icon:r.createElement(m.A,null)},r.createElement("a",{href:"/dhis-web-dashboard/"},"Dashboard")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(o.A,null)},r.createElement("a",{href:"/dhis-web-maintenance/"},"Maintenance")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(d.A,null)},r.createElement("a",{href:"/dhis-web-capture/"},"Event")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(u.A,null)},r.createElement("a",{href:"/dhis-web-aggregate-data-entry/"},"Tracker")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(E.A,null)},r.createElement("a",{href:"/dhis-web-import-export/"},"Import-Export")),r.createElement(k.A.Item,{key:"3",icon:r.createElement(i.A,null)},r.createElement("a",{href:"/dhis-web-user/"},"User Management")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(h.A,null)},r.createElement("a",{href:"/dhis-web-usage-analytics/"},"Usage Analytics")),r.createElement(k.A.Item,{key:"4",icon:r.createElement(c.A,null)},r.createElement("a",{href:"/dhis-web-settings/"},"System Settings"))),r.createElement(k.A,{mode:"vertical",style:{paddingTop:"400px"},items:T})),r.createElement(y.A,null,r.createElement("div",{className:w.titBar,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"}},r.createElement("h2",{className:w.heading},"Dashboard"),r.createElement(v.A,{overlay:q,trigger:["click"]},r.createElement(x.Ay,{size:"large",icon:r.createElement(p.A,null)},"Enter Data"))),r.createElement(S,{style:{margin:"15px",padding:15,minHeight:280,background:n,borderRadius:N,border:"1px solid #D7D7D7"}},r.createElement(_,null))))}}}]);
//# sourceMappingURL=app.4f9dabbd.chunk.js.map