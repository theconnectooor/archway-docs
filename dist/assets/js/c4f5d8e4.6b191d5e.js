"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[4195,9514],{1632:function(e,t,a){a.d(t,{Z:function(){return R}});var n=a(7294),c=a(6010),l=a(941),r=a(3783),i=a(7898),s=a(8030),m=a(4096),o=a(4973),d=a(7462),u=a(3366),E=a(6742),v=a(3919),p=a(8617),h="menuLinkText_1J2g",b=["items"],f=["item"],k=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],_=function e(t,a){return"link"===t.type?(0,l.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},Z=(0,n.memo)((function(e){var t=e.items,a=(0,u.Z)(e,b);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(g,(0,d.Z)({key:t,item:e},a))})))}));function g(e){var t=e.item,a=(0,u.Z)(e,f);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(C,(0,d.Z)({item:t},a));case"link":default:return n.createElement(y,(0,d.Z)({item:t},a))}}function C(e){var t,a=e.item,r=e.onItemClick,i=e.activePath,s=(0,u.Z)(e,k),m=a.items,o=a.label,E=a.collapsible,v=_(a,i),p=(0,l.uR)({initialState:function(){return!!E&&(!v&&a.collapsed)}}),b=p.collapsed,f=p.setCollapsed,N=p.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,c=e.setCollapsed,r=(0,l.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&c(!1)}),[t,r,a])}({isActive:v,collapsed:b,setCollapsed:f}),n.createElement("li",{className:(0,c.Z)(l.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":E,"menu__link--active":E&&v},t[h]=!E,t)),onClick:E?function(e){e.preventDefault(),N()}:void 0,href:E?"#":void 0},s),o),n.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(Z,{items:m,tabIndex:b?-1:0,onItemClick:r,activePath:i})))}function y(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=(0,u.Z)(e,N),s=t.href,m=t.label,o=_(t,r);return n.createElement("li",{className:(0,c.Z)(l.kM.docs.docSidebarItemLink,"menu__list-item"),key:m},n.createElement(E.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":o}),"aria-current":o?"page":void 0,to:s},(0,v.Z)(s)&&{onClick:a},i),(0,v.Z)(s)?m:n.createElement("span",null,m,n.createElement(p.Z,null))))}var I="sidebar_15mo",S="sidebarWithHideableNavbar_267A",x="sidebarHidden_2kNb",A="sidebarLogo_3h0W",M="menu_Bmed",L="menuWithAnnouncementBar_2WvA",P="collapseSidebarButton_1CGd",B="collapseSidebarButtonIcon_3E-R";function w(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},n.createElement(m.Z,{className:B}))}function T(e){var t,a,r=e.path,m=e.sidebar,o=e.onCollapse,d=e.isHidden,u=function(){var e=(0,l.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],c=t[1];return(0,i.Z)((function(t){var a=t.scrollY;e||c(0===a)})),a}(),E=(0,l.LU)(),v=E.navbar.hideOnScroll,p=E.hideableSidebar,h=(0,l.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(I,(t={},t[S]=v,t[x]=d,t))},v&&n.createElement(s.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",M,(a={},a[L]=!h&&u,a))},n.createElement("ul",{className:(0,c.Z)(l.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:m,activePath:r}))),p&&n.createElement(w,{onClick:o}))}var H=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,c.Z)(l.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:r,onItemClick:function(){return t()}}))};function W(e){return n.createElement(l.Cv,{component:H,props:e})}var z=n.memo(T),F=n.memo(W);function R(e){var t=(0,r.Z)(),a="desktop"===t||"ssr"===t,c="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),c&&n.createElement(F,e))}},4096:function(e,t,a){var n=a(7462),c=a(7294);t.Z=function(e){return c.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),c.createElement("g",{fill:"#7a7a7a"},c.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},2841:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(7294),c=a(5078),l=(a(1632),a(2263));function r(){var e=(0,l.Z)().siteConfig.customFields.pageCategories,t=e[0].children,a=e[1].children[0],r=e[1].children[1],i=e[2].children,s=t.length?t.map((function(e,t){return n.createElement("a",{href:e.value,key:t},n.createElement("div",{className:"card",key:"card-"+t},n.createElement("div",{className:"card-block"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-title"},n.createElement("span",{className:e.icon+" icon"}),"\xa0",e.name),n.createElement("p",{className:"card-text"},e.description)))))})):null,m=a.length?a.map((function(e,t){return n.createElement("a",{href:e.value,key:t},n.createElement("div",{className:"card",key:"card-"+t},n.createElement("div",{className:"card-block"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-title"},n.createElement("span",{className:e.icon+" icon"}),"\xa0",e.name),n.createElement("p",{className:"card-text"},e.description)))))})):null,o=r.length?r.map((function(e,t){return n.createElement("a",{href:e.value,key:t},n.createElement("div",{className:"card",key:"card-"+t},n.createElement("div",{className:"card-block"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-title"},n.createElement("span",{className:e.icon+" icon"}),"\xa0",e.name),n.createElement("p",{className:"card-text"},e.description)))))})):null,d=i.length?i.map((function(e,t){return n.createElement("a",{href:e.value,key:t},n.createElement("div",{className:"card",key:"card-"+t},n.createElement("div",{className:"card-block"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"card-title"},n.createElement("span",{className:e.icon+" icon"}),"\xa0",e.name),n.createElement("p",{className:"card-text"},e.description)))))})):null;return n.createElement(c.Z,{title:"Home",description:"Arch into Cosmos"},n.createElement("main",null,n.createElement("div",{className:"container"},n.createElement("h1",null,"Welcome"),n.createElement("p",null,"Explore our guides and examples to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),n.createElement("div",{className:"container create-cats"},n.createElement("h1",null,"Creating dApps"),n.createElement("div",{className:"card-deck"},s)),n.createElement("div",{className:"container create-cats"},n.createElement("h1",null,"Running a Node"),n.createElement("div",{className:"card-deck"},m)),n.createElement("div",{className:"container create-cats"},n.createElement("h1",null,"Become a Validator"),n.createElement("div",{className:"card-deck"},o)),n.createElement("div",{className:"container create-cats"},n.createElement("h1",null,"Participate"),n.createElement("div",{className:"card-deck"},d))))}},6463:function(e,t){t.Z=function(){return null}}}]);