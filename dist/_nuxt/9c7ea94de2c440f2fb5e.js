(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,r){var content=r(166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("cc0a38e8",content,!0,{sourceMap:!1})},157:function(e,t,r){var content=r(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("062935ca",content,!0,{sourceMap:!1})},159:function(e,t,r){"use strict";var n=r(192).createClient({space:"etz3oyvgwm6t",accessToken:"1rPv_CoBNcln7Ny6YFllsEOcry1Wc7HND_2Ec-ZV_0Y"});t.a=n},165:function(e,t,r){"use strict";var n=r(156);r.n(n).a},166:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".hamburger-menu[data-v-d6ac3b9a]{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background:#fff;box-shadow:4px 3px 10px rgba(0,0,0,.25);overflow-x:hidden;padding-top:80px;transition:.5s;font-size:18px}.hamburger-menu-bottom[data-v-d6ac3b9a]{bottom:100px;position:absolute}.hamburger-menu a[data-v-d6ac3b9a]{text-decoration:none;color:#000}.hamburger-menu a[data-v-d6ac3b9a]:hover{color:#eb3323}.hamburger-menu-link[data-v-d6ac3b9a]{padding:8px 8px 8px 32px;display:block;transition:.3s}.hamburger-menu-close[data-v-d6ac3b9a]{position:absolute;top:8px;right:21px;font-size:36px;margin-left:50px}.hamburger-menu-button[data-v-d6ac3b9a]{display:none}@media screen and (max-width:1100px){.hamburger-menu-button[data-v-d6ac3b9a]{display:block;background:none;border:none;cursor:pointer}.hamburger-menu-button[data-v-d6ac3b9a]:focus{outline:none}.hamburger-menu-button span[data-v-d6ac3b9a]{display:block;width:24px;height:2px;margin-bottom:4px;position:relative;background:#000;border-radius:3px}.hamburger-menu-button span[data-v-d6ac3b9a]:last-child{margin-bottom:0}}@media screen and (max-width:768px){.hamburger-menu-button span[data-v-d6ac3b9a]{width:18px}}.at-home.hamburger-menu-button span[data-v-d6ac3b9a]{background:#fff}",""])},167:function(e,t,r){"use strict";var n=r(157);r.n(n).a},168:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".header[data-v-c4b7a8ae]{display:flex;align-items:flex-end;justify-content:space-between;margin:26px 80px 0;font-size:12px}@media screen and (max-width:768px){.header[data-v-c4b7a8ae]{margin:18px 18px 0}}.header-left[data-v-c4b7a8ae]{display:flex;align-items:baseline;margin:0 auto 0 0}@media screen and (max-width:1100px){.header-left[data-v-c4b7a8ae]{margin:0}.header-left img[data-v-c4b7a8ae]{display:none}}.header-center[data-v-c4b7a8ae]{margin:auto}.header-center img[data-v-c4b7a8ae]{display:none}.header-center-link[data-v-c4b7a8ae]{margin-right:18px;text-decoration:none;font-style:normal;font-weight:400;line-height:16px;text-transform:uppercase;color:#000}.header-center-link[data-v-c4b7a8ae]:last-child{margin-right:0}@media screen and (max-width:1100px){.header-center img[data-v-c4b7a8ae]{display:block;transform:translateX(-24px)}.header-center-link[data-v-c4b7a8ae]{display:none}}@media screen and (max-width:768px){.header-center img[data-v-c4b7a8ae]{width:130px}}.header-right[data-v-c4b7a8ae]{margin:auto 0 auto auto;display:flex;align-items:center;font-style:normal;font-weight:400;line-height:13px;text-transform:uppercase}.header-right-link[data-v-c4b7a8ae]{align-items:center;margin:0 18px 0 0}.header-right-link a[data-v-c4b7a8ae]{text-decoration:none;color:#000;display:flex;align-items:center}.header-right-link a img[data-v-c4b7a8ae]{width:22px;margin-right:6px;-webkit-filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%);filter:invert(26%) sepia(89%) saturate(2647%) hue-rotate(348deg) brightness(93%) contrast(97%)}.header-right-link:last-child a img[data-v-c4b7a8ae]{margin-right:2px}@media screen and (max-width:1100px){.header-right[data-v-c4b7a8ae]{display:none}}.at-home.header-right-link a[data-v-c4b7a8ae],a.at-home[data-v-c4b7a8ae]{color:#fff}.at-home.header-right-link a img[data-v-c4b7a8ae]{-webkit-filter:invert(1);filter:invert(1)}",""])},169:function(e,t,r){"use strict";r(37);var n,o=r(5),d=(r(175),r(54),r(159)),l={props:["header","currentRoute"],methods:{open:function(){document.querySelector(".hamburger-menu").style.width="250px"},close:function(){document.querySelector(".hamburger-menu").style.width="0"}}},c=(r(165),r(17)),f={components:{HamburgerMenu:Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"hamburger-menu"},[r("a",{staticClass:"hamburger-menu-close",attrs:{href:"javascript:void(0)"},on:{click:e.close}},[e._v("×")]),e._v(" "),r("NuxtLink",{staticClass:"hamburger-menu-link",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e._l(e.header.links.filter(function(e){return"awards"===e.fields.id||"location"===e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,staticClass:"hamburger-menu-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label))]),e._v(" "),r("div",{staticClass:"hamburger-menu-bottom"},[r("a",{staticClass:"hamburger-menu-link",attrs:{href:"mailto:"+e.header.email.fields.url}},[e._v(e._s(e.header.email.fields.label))]),e._v(" "),r("a",{staticClass:"hamburger-menu-link",attrs:{href:"tel:"+e.header.phone.fields.url}},[e._v(e._s(e.header.phone.fields.url))])])],2),e._v(" "),r("button",{class:this.currentRoute+" hamburger-menu-button",on:{click:e.open}},[r("span"),e._v(" "),r("span"),e._v(" "),r("span")])])},[],!1,null,"d6ac3b9a",null).exports},methods:{getClass:function(){return"index"===this.$route.name?"at-home":""},getLogo:function(){return"index"===this.$route.name?this.header.logos.find(function(e){return"dra-logo-white"===e.fields.title}).fields.file.url:this.header.logos.find(function(e){return"dra-logo"===e.fields.title}).fields.file.url}},data:function(){return{header:null,currentRoute:""}},created:(n=Object(o.a)(regeneratorRuntime.mark(function e(){var header;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getEntries({content_type:"header",include:3});case 2:header=e.sent,this.header=header.items[0].fields;case 4:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),mounted:function(){this.currentRoute=this.$route.name}},m=(r(167),Object(c.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.header?r("header",{staticClass:"header"},[r("div",{staticClass:"header-left"},[r("HamburgerMenu",{attrs:{header:e.header,currentRoute:e.getClass()}}),e._v(" "),r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:e.getLogo()}})])],1),e._v(" "),r("div",{staticClass:"header-center"},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:e.getLogo()}})]),e._v(" "),e._l(e.header.links.filter(function(e){return"awards"===e.fields.id||"location"===e.fields.id}),function(link){return r("NuxtLink",{key:link.fields.id,class:e.getClass()+" header-center-link",attrs:{to:link.fields.url}},[e._v(e._s(link.fields.label))])}),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tours"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tours"===e.fields.id}).fields.label))]),e._v(" "),r("a",{class:e.getClass()+" header-center-link",attrs:{href:e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.url}},[e._v(e._s(e.header.links.find(function(e){return"tripadvisor"===e.fields.id}).fields.label))])],2),e._v(" "),r("div",{staticClass:"header-right"},[r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"mailto:"+e.header.email.fields.url}},[r("img",{attrs:{src:e.header.email.fields.icon.fields.file.url}}),e._v("\n          "+e._s(e.header.email.fields.label)+"\n        ")])]),e._v(" "),r("div",{class:e.getClass()+" header-right-link"},[r("a",{attrs:{href:"tel:"+e.header.phone.fields.url}},[r("img",{attrs:{src:e.header.phone.fields.icon.fields.file.url}}),e._v("\n          "+e._s(e.header.phone.fields.label)+"\n        ")])])])]):e._e()])},[],!1,null,"c4b7a8ae",null));t.a=m.exports},187:function(e,t){},190:function(e,t,r){var content=r(323);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("e6130f9c",content,!0,{sourceMap:!1})},191:function(e,t,r){var content=r(325);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2e107364",content,!0,{sourceMap:!1})},322:function(e,t,r){"use strict";var n=r(190);r.n(n).a},323:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".footer{display:flex;position:absolute;bottom:0;width:100%;height:100px;background:#fff;transition:.5s;box-shadow:0 -10px 40px rgba(0,0,0,.7)}@media screen and (max-width:1000px){.footer{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:32px 0}}.footer-form{display:flex;align-items:flex-end;margin:auto}@media screen and (max-width:1000px){.footer-form{width:100%;max-width:100%;display:block}}@media screen and (max-width:1000px){.footer-form>div{margin-bottom:18px}}.footer-form label{font-style:normal;font-weight:600;font-size:14px;line-height:15px;text-transform:uppercase}.footer-form-dates{text-align:center;margin:0 21px 0 0}@media screen and (max-width:1000px){.footer-form-dates{margin:0}}.footer-form-dates label{margin-right:12px}.footer-form-dates-wrapper{display:flex}@media screen and (max-width:1000px){.footer-form-dates-wrapper{margin:0 50px}}.footer-form-dates-wrapper a{width:0}.footer-form-dates-wrapper input{width:210px;height:36px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.25);border-radius:6px;border:none;font-weight:400;font-size:12px;line-height:15px;font-family:Montserrat,sans-serif;padding:0 0 0 12px;-webkit-appearance:none}@media screen and (max-width:1000px){.footer-form-dates-wrapper input{width:100%;max-width:100%}}.footer-form-dates-wrapper input::-webkit-input-placeholder{color:#000}.footer-form-dates-wrapper input::-moz-placeholder{color:#000}.footer-form-dates-wrapper input:-ms-input-placeholder{color:#000}.footer-form-dates-wrapper input::-ms-input-placeholder{color:#000}.footer-form-dates-wrapper input::placeholder{color:#000}.footer-form-guests{display:block;margin:0 21px 0 0;text-align:center}@media screen and (max-width:1000px){.footer-form-guests{margin:0}}.footer-form-guests-wrapper{display:flex}@media screen and (max-width:1000px){.footer-form-guests-wrapper{margin:0 50px}}.footer-form-guests-wrapper a{width:0}.footer-form-guests-wrapper select{width:110px;height:36px;background:transparent;box-shadow:0 2px 4px rgba(0,0,0,.25);border-radius:6px;border:none;font-family:Montserrat,sans-serif;text-indent:12px;font-size:12px;-webkit-appearance:none}@media screen and (max-width:1000px){.footer-form-guests-wrapper select{width:100%;max-width:100%}}.footer-form-guests-wrapper select:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}@media screen and (max-width:1000px){.footer-form-submit{margin:0 50px}}.footer-form-submit button{width:100px;height:36px;background:#eb3323;box-shadow:0 2px 4px rgba(0,0,0,.25);border-radius:6px;font-style:normal;font-weight:500;font-size:12px;line-height:15px;text-transform:uppercase;color:#fff;font-family:Montserrat,sans-serif;border:none}@media screen and (max-width:1000px){.footer-form-submit button{width:100%;max-width:100%}}.footer-form-submit button:disabled{background:#ef5e52;cursor:not-allowed}.footer-form .ion-ios-calendar:before{transform:translate(-24px,16px);cursor:pointer}.footer-form .ion-ios-code:before{transform:translate(-24px,16px) rotate(90deg)}.footer button:focus,.footer input:focus,.footer select:focus,.footer textarea:focus{outline:none}.footer button,.footer input,.footer select{margin-top:8px;cursor:pointer}.footer label{font-weight:500}.flatpickr-current-month .flatpickr-monthDropdown-months{-webkit-appearance:none!important}",""])},324:function(e,t,r){"use strict";var n=r(191);r.n(n).a},325:function(e,t,r){t=e.exports=r(35)(!1);var n=r(326)(r(327));t.push([e.i,".home-container{position:relative;min-height:100vh;padding:.05px;background-image:url("+n+");background-size:cover;background-repeat:no-repeat;background-position:top;width:100vw}.home{color:#fff;margin:70px 80px 0}@media screen and (max-width:768px){.home{margin:50px 18px 0}}.home-title{font-style:normal;font-weight:700;font-size:40px;line-height:46px;letter-spacing:.06em;text-transform:capitalize;width:550px;max-width:100%}@media screen and (max-width:768px){.home-title{margin:auto;font-size:22.6784px;line-height:28px;text-align:center}}.home-description{margin:18px 0 0;font-style:normal;font-weight:300;font-size:16px;line-height:26px;letter-spacing:.1em;width:280px;max-width:100%}@media screen and (max-width:768px){.home-description{margin:12px auto 0;font-size:12px;line-height:16px;text-align:center}}",""])},326:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},327:function(e,t,r){e.exports=r.p+"img/eb6569e.svg"},329:function(e,t,r){"use strict";r.r(t);r(37);var n,o=r(5),header=r(169),d=r(159),l=r(67),c=r(66),f=r.n(c),m={data:function(){return{selectedDates:"",rangeValid:!0,config:{dateFormat:"d.m.Y",minDate:"today",wrap:!0,maxDate:f()().add(1,"years").toDate(),mode:"range"}}},methods:{}},h=(r(322),r(17)),x=Object(h.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("form",{staticClass:"footer-form",attrs:{target:"_blank",action:"https://property.godo.is/booking.php"}},[r("div",{staticClass:"footer-form-dates"},[r("label",[e._v("Dates")]),e._v(" "),r("div",{staticClass:"footer-form-dates-wrapper"},[r("flat-pickr",{attrs:{config:e.config,placeholder:"Check-in - Check-out",name:"dates"},model:{value:e.selectedDates,callback:function(t){e.selectedDates=t},expression:"selectedDates"}}),e._v(" "),e._m(0)],1)]),e._v(" "),r("div",{staticClass:"footer-form-guests"},[r("label",[e._v("Guests")]),e._v(" "),r("div",{staticClass:"footer-form-guests-wrapper"},[r("select",{attrs:{name:"numadult","data-min-value":"1","data-max-value":"10","data-default-value":"2","data-translate-min":"guestSelect","data-translate-other":"guestsSelect"}},e._l(10,function(t){return r("option",{key:t},[e._v(e._s(1===t?t+" Guest":t+" Guests"))])}),0),e._v(" "),e._m(1)])]),e._v(" "),r("div",{staticClass:"footer-form-submit"},[r("button",{attrs:{disabled:""===e.selectedDates,type:"submit"}},[e._v("Book Now")])]),e._v(" "),r("input",{attrs:{type:"hidden",name:"checkin",id:"alt-checkin-0"},domProps:{value:e.selectedDates.split(" to ")[0]}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"checkout",id:"alt-checkout-1"},domProps:{value:e.selectedDates.split(" to ")[1]}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"propid",value:"38385"}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"lang",value:"en"}})])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{title:"toggle","data-toggle":""}},[t("i",{staticClass:"icon ion-ios-calendar"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",[t("i",{staticClass:"icon ion-ios-code"})])}],!1,null,null,null).exports,v={components:{Header:header.a,BookingWidget:x,flatPickr:l.a},mounted:function(){this.loading=!1},data:function(){return{loading:!0}},asyncData:(n=Object(o.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getEntries(Object.assign({content_type:"page",include:3},{"fields.id":"home"}));case 2:return t=e.sent,e.abrupt("return",{home:t.items[0].fields});case 4:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)})},w=(r(324),Object(h.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-container"},[r("Header"),e._v(" "),r("main",{staticClass:"home"},[r("div",{staticClass:"home-title"},[e._v(e._s(e.home.title))]),e._v(" "),r("div",{staticClass:"home-description"},[e._v(e._s(e.home.description))])]),e._v(" "),e.loading?e._e():r("BookingWidget")],1)},[],!1,null,null,null));t.default=w.exports}}]);