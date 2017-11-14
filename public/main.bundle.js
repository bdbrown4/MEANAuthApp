webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_15__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200,300,400);", ""]);

// module
exports.push([module.i, "/* Font Family\r\n================================================== */\r\n\r\n\r\n/* Desktop\r\n================================================== */\r\n\r\n.container { position:relative; margin:0 auto; width:700px; }\r\n.column { width:inherit; }\r\n\r\n\r\n/* Tablet (Portrait)\r\n================================================== */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 959px) {\r\n.container { width:556px; }\r\n}\r\n\r\n\r\n/* Mobile (Portrait)\r\n================================================== */\r\n\r\n@media only screen and (max-width: 767px) {\r\n.container { width:300px; }\r\n}\r\n\r\n\r\n/* Mobile (Landscape)\r\n================================================== */\r\n\r\n@media only screen and (min-width: 480px) and (max-width: 767px) {\r\n.container { width:420px; }\r\n}\r\n\r\n\r\n/* CSS Reset\r\n================================================== */\r\n\r\nhtml,body,div,span,h1,h6,p,a,ul,li,audio {\r\nborder:0;\r\nfont:inherit;\r\nfont-size:100%;\r\nmargin:0;\r\npadding:0;\r\nvertical-align:baseline;\r\n}\r\n\r\nbody { line-height:1; }\r\nul { list-style:none; }\r\n\r\n/*Custom Styles for Chat window*/\r\n.message-bubble \r\n{\r\n    padding: 10px 0px 10px 0px;\r\n    background-color:black;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.text-muted {\r\n    color: lawngreen;\r\n    display: inline-block;\r\n}\r\n\r\n.relative-time {\r\n    color: lawngreen;\r\n    display: inline-block;\r\n    float: right;\r\n    padding-right: 12px;\r\n}\r\n\r\n.chat-text {\r\n    color: lawngreen;\r\n}\r\n\r\n.message-bubble > *\r\n{\r\n    padding-left: 10px;   \r\n}\r\n\r\n.row {\r\n    margin-bottom: 10px; \r\n}\r\n\r\n.panel-body { padding: 0px;  }\r\n\r\n.panel-heading { padding: 5px; background-color: #3d6da7 !important; color: white !important; text-align: center; }\r\n\r\n::-webkit-scrollbar\r\n{\r\n  width: 12px;  /* for vertical scrollbars */\r\n  height: 12px; /* for horizontal scrollbars */\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n  background: black;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n  background: lawngreen;\r\n}\r\n\r\n\r\n/* Basic Styles\r\n================================================== */\r\n\r\n\r\nhtml,body {\r\n-webkit-font-smoothing:antialiased;\r\n-webkit-text-size-adjust:100%;\r\nbackground-color:#111;\r\ncolor:#C8C7C8;\r\nfont:20px/24px \"Yanone Kaffeesatz\", HelveticaNeue, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\nfont-weight:300;\r\npadding:5px 0;\r\n}\r\n\r\n* {\r\n-webkit-tap-highlight-color:rgba(0,0,0,0);\r\n-webkit-tap-highlight-color:transparent;\r\n}\r\n\r\n\r\n/* Typography\r\n================================================== */\r\n\r\nh1,h6,p { color:#808080; font-weight:200; }\r\nh1 { font-size:42px; line-height:44px; margin:20px 0 0; }\r\nh6 { font-size:18px; line-height:20px; margin:4px 0 20px; }\r\np { font-size:18px; line-height:20px; margin:0 0 2px; }\r\n\r\n\r\n/* Links\r\n================================================== */\r\n\r\na,a:visited { color:#ddd; outline:0; text-decoration:underline; }\r\na:hover,a:focus { color:#bbb; }\r\np a,p a:visited { line-height:inherit; }\r\n\r\n\r\n/* Misc.\r\n================================================== */\r\n\r\n.add-bottom { margin-bottom:20px !important; }\r\n.left { float:left; }\r\n.right { float:right; }\r\n.center { text-align:center; }\r\n\r\n\r\n/* Custom Styles\r\n================================================== */\r\n\r\n/* Highlight Styles */\r\n::-moz-selection { background-color:#262223; color:#444; }\r\n::selection { background-color:#262223; color:#444; }\r\n\r\n\r\n/* Audio Player Styles\r\n================================================== */\r\n\r\n/* Default / Desktop / Firefox */\r\naudio { margin:0 15px 0 14px; width:670px; }\r\n#mainwrap { box-shadow:0 0 6px 1px rgba(0,0,0,.25); }\r\n#audiowrap { background-color:#231F20; margin:0 auto; }\r\n#plwrap { margin:0 auto; }\r\n#tracks { position:relative; text-align:center; }\r\n#nowPlay { display:inline; }\r\n#npTitle { margin:0; padding:21px; text-align:right; }\r\n#npAction { padding:21px; position:absolute; }\r\n#plList { margin:0; }\r\n#plList li { background-color:#231F20; cursor:pointer; display:block; margin:0; padding:21px 0; }\r\n#plList li:hover { background-color:#262223; }\r\n.plItem { position:relative; }\r\n.plTitle { left:50px; overflow:hidden; position:absolute; right:65px; text-overflow:ellipsis; top:0; white-space:nowrap; }\r\n.plNum { padding-left:21px; width:25px; }\r\n.plLength { padding-left:21px; position:absolute; right:21px; top:0; }\r\n.plSel,.plSel:hover { background-color:#262223!important; cursor:default!important; }\r\na[id^=\"btn\"] { background-color:#231F20; color:#C8C7C8; cursor:pointer; display:inline-block; font-size:50px; margin:0; padding:21px 27px; text-decoration:none; }\r\na[id^=\"btn\"]:last-child { margin-left:-4px; }\r\na[id^=\"btn\"]:hover,a[id^=\"btn\"]:active { background-color:#262223; }\r\na[id^=\"btn\"]::-moz-focus-inner { border:0; padding:0; }\r\n\r\n/* IE 9 */\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { margin-left:9px; outline:none; width:680px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] .plSel,\r\nhtml[data-useragent*=\"MSIE 9.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IE 10 */\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { margin-left:6px; width:687px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] .plSel,\r\nhtml[data-useragent*=\"MSIE 10.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IE 11 */\r\nhtml[data-useragent*=\"rv:11.0\"] audio { margin-left:2px; width:695px; }\r\nhtml[data-useragent*=\"rv:11.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"rv:11.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"rv:11.0\"] .plSel,\r\nhtml[data-useragent*=\"rv:11.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* All Apple Products */\r\nhtml[data-useragent*=\"Apple\"] audio { margin:0; width:100%; }\r\nhtml[data-useragent*=\"Apple\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"Apple\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"Apple\"] .plSel,\r\nhtml[data-useragent*=\"Apple\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IOS 7 */\r\nhtml[data-useragent*=\"OS 7\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 7\"] audio { margin-left:3px; width:690px; }\r\nhtml[data-useragent*=\"OS 7\"] #audiowrap { background-color:#e6e6e6; }\r\nhtml[data-useragent*=\"OS 7\"] a[id^=\"btn\"] { background-color:#e6e6e6; color:#373837; }\r\nhtml[data-useragent*=\"OS 7\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 7\"] #plList li { background-color:#e6e6e6; }\r\nhtml[data-useragent*=\"OS 7\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 7\"] .plSel,\r\nhtml[data-useragent*=\"OS 7\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* IOS 8 */\r\nhtml[data-useragent*=\"OS 8\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 8\"] audio { margin-left:6px; width:694px; }\r\nhtml[data-useragent*=\"OS 8\"] #audiowrap { background-color:#e4e4e4; }\r\nhtml[data-useragent*=\"OS 8\"] a[id^=\"btn\"] { background-color:#e4e4e4; color:#373837; }\r\nhtml[data-useragent*=\"OS 8\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 8\"] #plList li { background-color:#e4e4e4; }\r\nhtml[data-useragent*=\"OS 8\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 8\"] .plSel,\r\nhtml[data-useragent*=\"OS 8\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* IOS 9 */\r\nhtml[data-useragent*=\"OS 9\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 9\"] audio { margin-left:6px; width:694px; }\r\nhtml[data-useragent*=\"OS 9\"] #audiowrap { background-color:#d5d5d5; }\r\nhtml[data-useragent*=\"OS 9\"] a[id^=\"btn\"] { background-color:#d5d5d5; color:#373837; }\r\nhtml[data-useragent*=\"OS 9\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 9\"] #plList li { background-color:#d5d5d5; }\r\nhtml[data-useragent*=\"OS 9\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 9\"] .plSel,\r\nhtml[data-useragent*=\"OS 9\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* Chrome */\r\nhtml[data-useragent*=\"Chrome\"] body { color:#5a5a5a; }\r\nhtml[data-useragent*=\"Chrome\"] audio { margin-left:9px; width:677px; }\r\nhtml[data-useragent*=\"Chrome\"] #audiowrap { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"] a[id^=\"btn\"] { background-color:#fafafa; color:#5a5a5a; }\r\nhtml[data-useragent*=\"Chrome\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"] #plList li { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"] .plSel,\r\nhtml[data-useragent*=\"Chrome\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* Chrome / Android / Tablet */\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] body { color:#373837; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] audio { margin-left:4px; width:689px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #audiowrap { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] a[id^=\"btn\"] { background-color:#fafafa; color:#373837; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #plList li { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] .plSel,\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n\r\n/* Audio Player Media Queries\r\n================================================== */\r\n\r\n/* Tablet Portrait */\r\n@media only screen and (min-width: 768px) and (max-width: 959px) {\r\naudio { width:526px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:536px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:543px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:551px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:546px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:550px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:550px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:533px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] audio { margin-left:4px; width:545px; }\r\n}\r\n\r\n/* Mobile Landscape */\r\n@media only screen and (min-width: 480px) and (max-width: 767px) {\r\naudio { width:390px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:400px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:407px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:415px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:410px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:414px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:414px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:397px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Mobile\"] audio { margin-left:4px; width:410px; }\r\n#npTitle { width:245px; }\r\n}\r\n\r\n/* Mobile Portrait */\r\n@media only screen and (max-width: 479px) {\r\naudio { width:270px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:280px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:287px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:295px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:290px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:294px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:294px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:277px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Mobile\"] audio { margin-left:4px; width:290px; }\r\n#npTitle { width:167px; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 class=\"page-header\">Chat Dashboard</h2>\n<p>Welcome to your dashboard! Feel free to chat it up!</p>\n</div>\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Chat Window</div>\n          <div class=\"panel-body\">\n            <div class=\"message-container\" #scrollMe style=\"overflow: auto; height: 350px;\">\n                <div class=\"row message-bubble\" *ngFor=\"let chat of chats\">\n                    <p class=\"text-muted\">{{chat.name}}</p><p class=\"relative-time\">{{chat.timeZone}}</p>\n                    <p class=\"chat-text\">{{chat.message}}</p>\n                </div>\n                <div *ngFor=\"let typing of userTypingList\">\n                    <div class=\"row message-bubble\" *ngIf=\"userTyping!=''\">\n                        <p class=\"chat-text\">{{typing}}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                 <div class=\"input-group\">\n                     <br>\n                  <input type=\"text\" #messageBox class=\"form-control\" [(ngModel)]=\"textInput\" (keyup.enter)=\"sendMessage(messageBox)\" (keyup)=\"killBroadcast($event.keyCode)\" (keypress)=\"userTypingMessage()\" placeholder=\"Send a message...\">\n                  <span class=\"input-group-btn\"><br>\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"sendMessage()\">Send</button>\n                  </span>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = (function () {
    function DashboardComponent(authService, chatService, router, socketService) {
        this.authService = authService;
        this.chatService = chatService;
        this.router = router;
        this.socketService = socketService;
        this.localUser = JSON.parse(localStorage.getItem('user'));
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.subs = [];
        this.textInput = '';
        this.userTyping = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].interval(45000).subscribe(function (x) {
            _this.populateChats();
        }));
        this.chats = new Array();
        if (this.chats.length !== 0) {
            this.chats.forEach(function (chat) {
                _this.chatMomentConversion(chat);
            });
        }
        this.socketService.on('message-received', function (chat) {
            var tempTypingIndex = chat.name + ' is typing a message...';
            _this.chatMomentConversion(chat);
            _this.userTypingList.splice(_this.userTypingList.indexOf(tempTypingIndex), 1);
            _this.chats.push(chat);
            // getting chats
            _this.populateChats();
            _this.scrollToBottom();
        });
        this.userTypingList = new Array();
        this.userTyping = '';
        this.socketService.on('typing-complete', function (name) {
            _this.userTyping = name + ' is typing a message...';
            if (_this.userTypingList.indexOf(_this.userTyping) === -1) {
                _this.userTypingList.push(_this.userTyping);
            }
        });
        this.socketService.on('typing-killed', function () {
            _this.userTyping = '';
        });
        // getting chats
        this.populateChats();
        // getting user info
        this.subs.push(this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            // console.log(err);
            return false;
        }));
    };
    DashboardComponent.prototype.ngDoCheck = function () {
        this.scrollToBottom();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    DashboardComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    DashboardComponent.prototype.sendMessage = function (messageBox) {
        var name = this.user.name;
        var username = this.user.username;
        var message = this.textInput;
        var timeZone = this.timeZone;
        var utc = new Date().toUTCString();
        var utcString = __WEBPACK_IMPORTED_MODULE_6_moment__(utc).format();
        var chat = {
            name: name,
            username: username,
            message: message,
            timeZone: timeZone,
            utcString: utcString
        };
        if (this.isEmptyOrSpaces(this.textInput)) {
            this.subs.push(this.chatService.sendChatMessage(name, username, message, timeZone, utcString).subscribe());
            this.socketService.emit('send-message', chat);
            this.textInput = '';
        }
        this.scrollToBottom();
        messageBox.focus();
    };
    DashboardComponent.prototype.userTypingMessage = function () {
        if (this.isEmptyOrSpaces(this.textInput)) {
            this.socketService.emit('typing', (this.localUser.name));
        }
    };
    DashboardComponent.prototype.killBroadcast = function (keyCode) {
        if (keyCode === 8) {
            this.socketService.emit('kill-typing', {});
        }
        else {
            return null;
        }
    };
    DashboardComponent.prototype.isEmptyOrSpaces = function (str) {
        return str !== null &&
            str.match(/^(?!\s*$)[-a-zA-Z0-9_:*@#$+?/;\=%^&!`}{<>\[\]'"\\)(~,.\s]{1,1000}$/) &&
            str !== '' ||
            // tslint:disable-next-line:max-line-length
            str.match(/(?:[\u00A9\u00AE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9-\u21AA\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2618\u261D\u2620\u2622-\u2623\u2626\u262A\u262E-\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665-\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B-\u269C\u26A0-\u26A1\u26AA-\u26AB\u26B0-\u26B1\u26BD-\u26BE\u26C4-\u26C5\u26C8\u26CE-\u26CF\u26D1\u26D3-\u26D4\u26E9-\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934-\u2935\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|(?:\uD83C[\uDC04\uDCCF\uDD70-\uDD71\uDD7E-\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01-\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50-\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96-\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F-\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95-\uDD96\uDDA4-\uDDA5\uDDA8\uDDB1-\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB-\uDEEC\uDEF0\uDEF3-\uDEF6]|\uD83E[\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]))/);
    };
    DashboardComponent.prototype.populateChats = function () {
        var _this = this;
        this.subs.push(this.chatService.getChatInfo().subscribe(function (_chats) {
            _chats.forEach(function (chat) {
                if (chat.utcString === null || chat.timeZone == null) {
                    chat.timeZone = '';
                }
                else {
                    var chatMoment = __WEBPACK_IMPORTED_MODULE_6_moment__["tz"](chat.utcString, chat.timeZone);
                    chat.timeZone = chatMoment.fromNow();
                }
            });
            _this.chats = _chats.reverse();
        }, function (err) {
            console.log(err);
            return false;
        }));
    };
    DashboardComponent.prototype.chatMomentConversion = function (chat) {
        var chatMoment = __WEBPACK_IMPORTED_MODULE_6_moment__["tz"](chat.utcString, chat.timeZone);
        chat.timeZone = chatMoment.fromNow();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "myScrollContainer", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN Authentication Application built from scratch!</p>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local development server and easy compilation.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in!', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n          <a [routerLink]=\"['/']\" href=\"#\"class=\"navbar-brand\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\">MEAN Authentication App</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar navbar-right\" style=\"text-align:right;\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" href=\"#\" class=\"dropdown-toggle\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/profile']\" href=\"#\" class=\"dropdown-toggle\">Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\" href=\"#\" class=\"dropdown-toggle\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/register']\" href=\"#\" class=\"dropdown-toggle\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\" class=\"dropdown-toggle\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Not a valid email!', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are registered! Please log in!', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('chats/getInfo', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChatService.prototype.sendChatMessage = function (nameObj, usernameObj, messageObj, timeZoneObj, utcStringObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var chat = {
            name: nameObj,
            username: usernameObj,
            message: messageObj,
            timeZone: timeZoneObj,
            utcString: utcStringObj
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post('chats/postChat', chat, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ChatService);
    return ChatService;
    var _a;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.username === undefined || user.email === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map