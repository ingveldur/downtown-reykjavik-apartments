(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(e,t,r){var content=r(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("4725c292",content,!0,{sourceMap:!1})},228:function(e,t,r){var content=r(234);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("71dc2ae9",content,!0,{sourceMap:!1})},229:function(e,t,r){"use strict";var n=r(243).createClient({space:"etz3oyvgwm6t",accessToken:"1rPv_CoBNcln7Ny6YFllsEOcry1Wc7HND_2Ec-ZV_0Y"});t.a=n},231:function(e,t,r){"use strict";var n=r(227);r.n(n).a},232:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".hamburger-menu[data-v-1bb0edbd]{height:100%;width:0;position:fixed;z-index:3;top:0;left:0;background:#fff;box-shadow:4px 3px 10px rgba(0,0,0,.25);overflow-x:hidden;padding-top:80px;transition:.5s;font-size:18px}.hamburger-menu-bottom[data-v-1bb0edbd]{bottom:100px;position:absolute}.hamburger-menu a[data-v-1bb0edbd]{text-decoration:none;color:#000}.hamburger-menu a[data-v-1bb0edbd]:hover{color:#eb3323}.hamburger-menu-link[data-v-1bb0edbd]{padding:8px 8px 8px 32px;display:block;transition:.3s}.hamburger-menu-close[data-v-1bb0edbd]{position:absolute;top:8px;right:21px;font-size:36px;margin-left:50px}.hamburger-menu-button[data-v-1bb0edbd]{display:none}@media screen and (max-width:1100px){.hamburger-menu-button[data-v-1bb0edbd]{display:block;background:none;border:none;cursor:pointer}.hamburger-menu-button[data-v-1bb0edbd]:focus{outline:none}.hamburger-menu-button span[data-v-1bb0edbd]{display:block;width:24px;height:2px;margin-bottom:4px;position:relative;background:#000;border-radius:3px}.hamburger-menu-button span[data-v-1bb0edbd]:last-child{margin-bottom:0}}@media screen and (max-width:768px){.hamburger-menu-button span[data-v-1bb0edbd]{width:18px}}.at-home.hamburger-menu-button span[data-v-1bb0edbd]{background:#fff}",""])},233:function(e,t,r){"use strict";var n=r(228);r.n(n).a},234:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".header[data-v-ba76b1a6]{display:flex;align-items:flex-end;justify-content:space-between;margin:26px 80px 0;font-size:12px}@media screen and (max-width:768px){.header[data-v-ba76b1a6]{margin:18px 18px 0}}.header-left[data-v-ba76b1a6]{display:flex;align-items:baseline;margin:0 auto 0 0}@media screen and (max-width:1100px){.header-left[data-v-ba76b1a6]{margin:0}.header-left img[data-v-ba76b1a6]{display:none}}.header-center[data-v-ba76b1a6]{margin:auto}.header-center img[data-v-ba76b1a6]{display:none}.header-center-link[data-v-ba76b1a6]{margin-right:18px;text-decoration:none;font-style:normal;font-weight:400;line-height:16px;text-transform:uppercase;color:#000}.header-center-link[data-v-ba76b1a6]:last-child{margin-right:0}@media screen and (max-width:1100px){.header-center img[data-v-ba76b1a6]{display:block;transform:translateX(-24px)}.header-center-link[data-v-ba76b1a6]{display:none}}@media screen and (max-width:768px){.header-center img[data-v-ba76b1a6]{width:130px}}.header-right[data-v-ba76b1a6]{margin:auto 0 auto auto;display:flex;align-items:center;font-style:normal;font-weight:400;line-height:13px;text-transform:uppercase}.header-right-link[data-v-ba76b1a6]{align-items:center;margin:0 18px 0 0}.header-right-link a[data-v-ba76b1a6]{text-decoration:none;color:#000;display:flex;align-items:center}.header-right-link a img[data-v-ba76b1a6]{width:22px;margin-right:6px;-webkit-filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%);filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%)}.header-right-link:last-child a img[data-v-ba76b1a6]{margin-right:2px}@media screen and (max-width:1100px){.header-right[data-v-ba76b1a6]{display:none}}.at-home.header-right-link a[data-v-ba76b1a6],a.at-home[data-v-ba76b1a6]{color:#fff}.at-home.header-right-link a img[data-v-ba76b1a6]{-webkit-filter:invert(1);filter:invert(1)}.selected-route[data-v-ba76b1a6]{font-weight:600;color:#eb3323}",""])},235:function(e,t,r){"use strict";r(239),r(55),r(229);var n={props:["header","currentRoute"],methods:{open:function(){document.querySelector(".hamburger-menu").style.width="250px"},close:function(){document.querySelector(".hamburger-menu").style.width="0"}}},d=(r(231),r(18)),o={props:["header"],components:{HamburgerMenu:Object(d.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"hamburger-menu"},[r("a",{staticClass:"hamburger-menu-close",attrs:{href:"javascript:void(0)"},on:{click:e.close}},[e._v("×")]),e._v(" "),r("NuxtLink",{staticClass:"hamburger-menu-link",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e._l(e.header.links.filter(function(e){return"tours"!==e.fields.id&&"tripadvisor"!==e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,staticClass:"hamburger-menu-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:"/terms"}},[e._v("Terms")]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v("\n      "+e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label)+"\n    ")]),e._v(" "),r("div",{staticClass:"hamburger-menu-bottom"},[r("a",{staticClass:"hamburger-menu-link",attrs:{href:"mailto:"+e.header.email.fields.url}},[e._v(e._s(e.header.email.fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:"tel:+3544456777"}},[e._v("\n        +354 445 6777\n        ")])])],2),e._v(" "),r("button",{class:this.currentRoute+" hamburger-menu-button",on:{click:e.open}},[r("span"),e._v(" "),r("span"),e._v(" "),r("span")])])},[],!1,null,"1bb0edbd",null).exports},methods:{getClass:function(){return"index"===this.$route.name?"at-home":""},getLogo:function(){return"index"===this.$route.name?this.header.logos.find(function(e){return"dra-logo-white"===e.fields.title}).fields.file.url:this.header.logos.find(function(e){return"dra-logo"===e.fields.title}).fields.file.url}},data:function(){return{currentRoute:""}},mounted:function(){this.currentRoute=this.$route.name}},l=(r(233),Object(d.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.header?r("header",{staticClass:"header"},[r("div",{staticClass:"header-left"},[r("HamburgerMenu",{attrs:{header:e.header,currentRoute:e.getClass()}}),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:e.getLogo()}})])],1),e._v(" "),r("div",{staticClass:"header-center"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:e.getLogo()}})]),e._v(" "),e._l(e.header.links.filter(function(e){return"tours"!==e.fields.id&&"tripadvisor"!==e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,class:e.getClass()+" "+(link.fields.id===e.$route.name?"selected-route":"")+" header-center-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{class:e.getClass()+" "+("terms"===e.$route.name?"selected-route":"")+" header-center-link",attrs:{href:"/terms"}},[e._v("Terms")]),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v("\n        "+e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label)+"\n      ")])],2),e._v(" "),r("div",{staticClass:"header-right"},[r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"mailto:"+e.header.email.fields.url}},[r("img",{attrs:{src:e.header.email.fields.icon.fields.file.url}}),e._v("\n          "+e._s(e.header.email.fields.label)+"\n        ")])]),e._v(" "),r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"tel:+3544456777"}},[r("img",{attrs:{src:e.header.phone.fields.icon.fields.file.url}}),e._v(" "),e._v("\n          +354 445 6777\n        ")])])])]):e._e()])},[],!1,null,"ba76b1a6",null));t.a=l.exports},242:function(e,t){},262:function(e,t,r){var content=r(394);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("87ead5dc",content,!0,{sourceMap:!1})},393:function(e,t,r){"use strict";var n=r(262);r.n(n).a},394:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".giftcard-container{position:relative;min-height:100vh;padding:.05px;width:100vw}.giftcard{margin:70px 0 0;text-align:center}@media screen and (max-width:768px){.giftcard{margin:50px 0 0}}",""])},416:function(e,t,r){"use strict";r.r(t);r(38);var n,d=r(6),o=r(235),l=r(229),c={components:{Header:o.a},mounted:function(){var e=this;window.onNuxtReady(function(t){e.loading=!1})},data:function(){return{loading:!0}},asyncData:(n=Object(d.a)(regeneratorRuntime.mark(function e(){var header;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getEntries({content_type:"header",include:3});case 2:return header=e.sent,e.abrupt("return",{header:header.items[0].fields});case 4:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)})},h=(r(393),r(18)),component=Object(h.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"giftcard-container"},[t("Header",{attrs:{header:this.header}}),this._v(" "),this._m(0)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"giftcard"},[t("iframe",{staticStyle:{"max-width":"100%",border:"none",overflow:"auto"},attrs:{src:"https://property.godo.is/booking2.php?propid=122358&referer=iframe",width:"800",height:"1800"}},[t("p",[t("a",{attrs:{href:"https://property.godo.is/booking2.php?propid=122358&referer=iframe",title:"Book Now"}},[this._v("Book Now")])])])])}],!1,null,null,null);t.default=component.exports}}]);