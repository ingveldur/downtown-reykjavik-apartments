(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{227:function(e,t,r){var content=r(233);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("11db73d8",content,!0,{sourceMap:!1})},228:function(e,t,r){var content=r(235);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("60592aee",content,!0,{sourceMap:!1})},229:function(e,t,r){"use strict";var n=r(245).createClient({space:"etz3oyvgwm6t",accessToken:"1rPv_CoBNcln7Ny6YFllsEOcry1Wc7HND_2Ec-ZV_0Y"});t.a=n},232:function(e,t,r){"use strict";var n=r(227);r.n(n).a},233:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".hamburger-menu[data-v-54de88ad]{height:100%;width:0;position:fixed;z-index:3;top:0;left:0;background:#fff;box-shadow:4px 3px 10px rgba(0,0,0,.25);overflow-x:hidden;padding-top:80px;transition:.5s;font-size:18px}.hamburger-menu-bottom[data-v-54de88ad]{bottom:100px;position:absolute}.hamburger-menu a[data-v-54de88ad]{text-decoration:none;color:#000}.hamburger-menu a[data-v-54de88ad]:hover{color:#eb3323}.hamburger-menu-link[data-v-54de88ad]{padding:8px 8px 8px 32px;display:block;transition:.3s}.hamburger-menu-close[data-v-54de88ad]{position:absolute;top:8px;right:21px;font-size:36px;margin-left:50px}.hamburger-menu-button[data-v-54de88ad]{display:none}@media screen and (max-width:1100px){.hamburger-menu-button[data-v-54de88ad]{display:block;background:none;border:none;cursor:pointer}.hamburger-menu-button[data-v-54de88ad]:focus{outline:none}.hamburger-menu-button span[data-v-54de88ad]{display:block;width:24px;height:2px;margin-bottom:4px;position:relative;background:#000;border-radius:3px}.hamburger-menu-button span[data-v-54de88ad]:last-child{margin-bottom:0}}@media screen and (max-width:768px){.hamburger-menu-button span[data-v-54de88ad]{width:18px}}.at-home.hamburger-menu-button span[data-v-54de88ad]{background:#fff}",""])},234:function(e,t,r){"use strict";var n=r(228);r.n(n).a},235:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".header[data-v-df306c0a]{display:flex;align-items:flex-end;justify-content:space-between;margin:26px 80px 0;font-size:12px}@media screen and (max-width:768px){.header[data-v-df306c0a]{margin:18px 18px 0}}.header-left[data-v-df306c0a]{display:flex;align-items:baseline;margin:0 auto 0 0}@media screen and (max-width:1100px){.header-left[data-v-df306c0a]{margin:0}.header-left img[data-v-df306c0a]{display:none}}.header-center[data-v-df306c0a]{margin:auto}.header-center img[data-v-df306c0a]{display:none}.header-center-link[data-v-df306c0a]{margin-right:18px;text-decoration:none;font-style:normal;font-weight:400;line-height:16px;text-transform:uppercase;color:#000}.header-center-link[data-v-df306c0a]:last-child{margin-right:0}@media screen and (max-width:1100px){.header-center img[data-v-df306c0a]{display:block;transform:translateX(-24px)}.header-center-link[data-v-df306c0a]{display:none}}@media screen and (max-width:768px){.header-center img[data-v-df306c0a]{width:130px}}.header-right[data-v-df306c0a]{margin:auto 0 auto auto;display:flex;align-items:center;font-style:normal;font-weight:400;line-height:13px;text-transform:uppercase}.header-right-link[data-v-df306c0a]{align-items:center;margin:0 18px 0 0}.header-right-link a[data-v-df306c0a]{text-decoration:none;color:#000;display:flex;align-items:center}.header-right-link a img[data-v-df306c0a]{width:22px;margin-right:6px;-webkit-filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%);filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%)}.header-right-link:last-child a img[data-v-df306c0a]{margin-right:2px}@media screen and (max-width:1100px){.header-right[data-v-df306c0a]{display:none}}.at-home.header-right-link a[data-v-df306c0a],a.at-home[data-v-df306c0a]{color:#fff}.at-home.header-right-link a img[data-v-df306c0a]{-webkit-filter:invert(1);filter:invert(1)}.selected-route[data-v-df306c0a]{font-weight:600;color:#eb3323}",""])},236:function(e,t,r){"use strict";r(241),r(55),r(229);var n={props:["header","currentRoute"],methods:{open:function(){document.querySelector(".hamburger-menu").style.width="250px"},close:function(){document.querySelector(".hamburger-menu").style.width="0"}}},d=(r(232),r(18)),l={props:["header"],components:{HamburgerMenu:Object(d.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"hamburger-menu"},[r("a",{staticClass:"hamburger-menu-close",attrs:{href:"javascript:void(0)"},on:{click:e.close}},[e._v("×")]),e._v(" "),r("NuxtLink",{staticClass:"hamburger-menu-link",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e._l(e.header.links.filter(function(e){return"tours"!==e.fields.id&&"tripadvisor"!==e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,staticClass:"hamburger-menu-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:"/terms"}},[e._v("Terms")]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v("\n      "+e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label)+"\n    ")]),e._v(" "),r("div",{staticClass:"hamburger-menu-bottom"},[r("a",{staticClass:"hamburger-menu-link",attrs:{href:"mailto:"+e.header.email.fields.url}},[e._v(e._s(e.header.email.fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:"tel:"+e.header.phone.fields.url}},[e._v(e._s(e.header.phone.fields.url))])])],2),e._v(" "),r("button",{class:this.currentRoute+" hamburger-menu-button",on:{click:e.open}},[r("span"),e._v(" "),r("span"),e._v(" "),r("span")])])},[],!1,null,"54de88ad",null).exports},methods:{getClass:function(){return"index"===this.$route.name?"at-home":""},getLogo:function(){return"index"===this.$route.name?this.header.logos.find(function(e){return"dra-logo-white"===e.fields.title}).fields.file.url:this.header.logos.find(function(e){return"dra-logo"===e.fields.title}).fields.file.url}},data:function(){return{currentRoute:""}},mounted:function(){this.currentRoute=this.$route.name}},o=(r(234),Object(d.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.header?r("header",{staticClass:"header"},[r("div",{staticClass:"header-left"},[r("HamburgerMenu",{attrs:{header:e.header,currentRoute:e.getClass()}}),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:e.getLogo()}})])],1),e._v(" "),r("div",{staticClass:"header-center"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:e.getLogo()}})]),e._v(" "),e._l(e.header.links.filter(function(e){return"tours"!==e.fields.id&&"tripadvisor"!==e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,class:e.getClass()+" "+(link.fields.id===e.$route.name?"selected-route":"")+" header-center-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{class:e.getClass()+" "+("terms"===e.$route.name?"selected-route":"")+" header-center-link",attrs:{href:"/terms"}},[e._v("Terms")]),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v("\n        "+e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label)+"\n      ")])],2),e._v(" "),r("div",{staticClass:"header-right"},[r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"mailto:"+e.header.email.fields.url}},[r("img",{attrs:{src:e.header.email.fields.icon.fields.file.url}}),e._v("\n          "+e._s(e.header.email.fields.label)+"\n        ")])]),e._v(" "),r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"tel:"+e.header.phone.fields.url}},[r("img",{attrs:{src:e.header.phone.fields.icon.fields.file.url}}),e._v("\n          "+e._s(e.header.phone.fields.label)+"\n        ")])])])]):e._e()])},[],!1,null,"df306c0a",null));t.a=o.exports},244:function(e,t){},266:function(e,t,r){var content=r(401);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("1e40db72",content,!0,{sourceMap:!1})},400:function(e,t,r){"use strict";var n=r(266);r.n(n).a},401:function(e,t,r){(e.exports=r(27)(!1)).push([e.i,".location-container{position:relative;height:100vh;padding:.05px;width:100vw}.location{color:#000;height:100%}.location-title{font-style:normal;font-weight:700;font-size:40px;line-height:46px;letter-spacing:.06em;text-transform:capitalize;width:550px;max-width:100%;margin:70px 80px 0}@media screen and (max-width:768px){.location-title{margin:50px auto 0;font-size:22.6784px;line-height:28px;text-align:center}}.location-description{font-style:normal;font-weight:300;font-size:16px;line-height:26px;letter-spacing:.1em;width:355px;max-width:100%;margin:18px 80px 0}@media screen and (max-width:768px){.location-description{margin:12px auto 0;font-size:12px;line-height:16px;text-align:center;width:212px}}.location-map{margin:30px 0 0;height:100%}",""])},414:function(e,t,r){"use strict";r.r(t);r(38);var n,d=r(6),l=r(236),o=r(229),c={components:{Header:l.a},mounted:function(){var e=this;window.onNuxtReady(function(t){e.loading=!1})},data:function(){return{loading:!0}},asyncData:(n=Object(d.a)(regeneratorRuntime.mark(function e(){var t,header;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getEntries(Object.assign({content_type:"page",include:3},{"fields.id":"location"}));case 2:return t=e.sent,e.next=5,o.a.getEntries({content_type:"header",include:3});case 5:return header=e.sent,e.abrupt("return",{location:t.items[0].fields,header:header.items[0].fields});case 7:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)})},h=(r(400),r(18)),component=Object(h.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"location-container"},[r("Header",{attrs:{header:e.header}}),e._v(" "),r("main",{staticClass:"location"},[r("div",{staticClass:"location-title"},[e._v(e._s(e.location.title))]),e._v(" "),r("div",{staticClass:"location-description"},[e._v(e._s(e.location.description))]),e._v(" "),r("iframe",{staticClass:"location-map",staticStyle:{border:"0"},attrs:{id:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1846548795115!2d-21.916759783731887!3d64.14110198359275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674c96faa2e29%3A0x2c7641f7181d7cac!2sDowntown+Reykjav%C3%ADk+Apartments!5e0!3m2!1sen!2sid!4v1565951928087!5m2!1sen!2sid",width:"100%",frameborder:"0",allowfullscreen:""}})])],1)},[],!1,null,null,null);t.default=component.exports}}]);