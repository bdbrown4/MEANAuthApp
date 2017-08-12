webpackJsonp([1,4],{

/***/ 1046:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(460);


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
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
        return this.http.get('http://localhost:3000/chats/getInfo', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChatService.prototype.sendChatMessage = function (nameObj, usernameObj, messageObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var chat = {
            name: nameObj,
            username: usernameObj,
            message: messageObj
        };
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/chats/postChat', chat, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ChatService);
    return ChatService;
    var _a;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/chat.service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/socket.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 459;


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(578);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(768),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chat_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_socket_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
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

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
        this.textInput = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollToBottom();
        this.chats = new Array();
        this.socketService.on('message-received', function (chat) {
            _this.chats.push(chat);
        });
        //getting chats
        this.chatService.getChatInfo().subscribe(function (_chats) {
            _this.chats = _chats.reverse();
        }, function (err) {
            console.log(err);
            return false;
        });
        //getting user info
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    DashboardComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    DashboardComponent.prototype.sendMessage = function () {
        var name = this.user.name;
        var username = this.user.username;
        var message = this.textInput;
        var chat = {
            name: name,
            username: username,
            message: message
        };
        this.chatService.sendChatMessage(name, username, message).subscribe();
        this.socketService.emit('send-message', chat);
        this.textInput = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "myScrollContainer", void 0);
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(769),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(770),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(771),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(772),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(773),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(774),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 586:
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

/***/ 761:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "/* Font Family\r\n================================================== */\r\n\r\n@import url(\"//fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200,300,400\");\r\n\r\n\r\n/* Desktop\r\n================================================== */\r\n\r\n.container { position:relative; margin:0 auto; width:700px; }\r\n.column { width:inherit; }\r\n\r\n\r\n/* Tablet (Portrait)\r\n================================================== */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 959px) {\r\n.container { width:556px; }\r\n}\r\n\r\n\r\n/* Mobile (Portrait)\r\n================================================== */\r\n\r\n@media only screen and (max-width: 767px) {\r\n.container { width:300px; }\r\n}\r\n\r\n\r\n/* Mobile (Landscape)\r\n================================================== */\r\n\r\n@media only screen and (min-width: 480px) and (max-width: 767px) {\r\n.container { width:420px; }\r\n}\r\n\r\n\r\n/* CSS Reset\r\n================================================== */\r\n\r\nhtml,body,div,span,h1,h6,p,a,ul,li,audio {\r\nborder:0;\r\nfont:inherit;\r\nfont-size:100%;\r\nmargin:0;\r\npadding:0;\r\nvertical-align:baseline;\r\n}\r\n\r\nbody { line-height:1; }\r\nul { list-style:none; }\r\n\r\n/*Custom Styles for Chat window*/\r\n.message-bubble \r\n{\r\n    padding: 10px 0px 10px 0px;\r\n    background-color:black;\r\n}\r\n\r\n.text-muted {\r\n    color: lawngreen;\r\n}\r\n\r\n.chat-text {\r\n    color: lawngreen;\r\n}\r\n\r\n.message-bubble > *\r\n{\r\n    padding-left: 10px;   \r\n}\r\n\r\n.row {\r\n    margin-bottom: 10px; \r\n}\r\n\r\n.panel-body { padding: 0px;  }\r\n\r\n.panel-heading { padding: 5px; background-color: #3d6da7 !important; color: white !important; text-align: center; }\r\n\r\n\r\n/* Basic Styles\r\n================================================== */\r\n\r\n\r\nhtml,body {\r\n-webkit-font-smoothing:antialiased;\r\n-webkit-text-size-adjust:100%;\r\nbackground-color:#111;\r\ncolor:#C8C7C8;\r\nfont:20px/24px \"Yanone Kaffeesatz\", HelveticaNeue, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\nfont-weight:300;\r\npadding:5px 0;\r\n}\r\n\r\n* {\r\n-webkit-tap-highlight-color:rgba(0,0,0,0);\r\n-webkit-tap-highlight-color:transparent;\r\n}\r\n\r\n\r\n/* Typography\r\n================================================== */\r\n\r\nh1,h6,p { color:#808080; font-weight:200; }\r\nh1 { font-size:42px; line-height:44px; margin:20px 0 0; }\r\nh6 { font-size:18px; line-height:20px; margin:4px 0 20px; }\r\np { font-size:18px; line-height:20px; margin:0 0 2px; }\r\n\r\n\r\n/* Links\r\n================================================== */\r\n\r\na,a:visited { color:#ddd; outline:0; text-decoration:underline; }\r\na:hover,a:focus { color:#bbb; }\r\np a,p a:visited { line-height:inherit; }\r\n\r\n\r\n/* Misc.\r\n================================================== */\r\n\r\n.add-bottom { margin-bottom:20px !important; }\r\n.left { float:left; }\r\n.right { float:right; }\r\n.center { text-align:center; }\r\n\r\n\r\n/* Custom Styles\r\n================================================== */\r\n\r\n/* Highlight Styles */\r\n::-moz-selection { background-color:#262223; color:#444; }\r\n::selection { background-color:#262223; color:#444; }\r\n\r\n\r\n/* Audio Player Styles\r\n================================================== */\r\n\r\n/* Default / Desktop / Firefox */\r\naudio { margin:0 15px 0 14px; width:670px; }\r\n#mainwrap { box-shadow:0 0 6px 1px rgba(0,0,0,.25); }\r\n#audiowrap { background-color:#231F20; margin:0 auto; }\r\n#plwrap { margin:0 auto; }\r\n#tracks { position:relative; text-align:center; }\r\n#nowPlay { display:inline; }\r\n#npTitle { margin:0; padding:21px; text-align:right; }\r\n#npAction { padding:21px; position:absolute; }\r\n#plList { margin:0; }\r\n#plList li { background-color:#231F20; cursor:pointer; display:block; margin:0; padding:21px 0; }\r\n#plList li:hover { background-color:#262223; }\r\n.plItem { position:relative; }\r\n.plTitle { left:50px; overflow:hidden; position:absolute; right:65px; text-overflow:ellipsis; top:0; white-space:nowrap; }\r\n.plNum { padding-left:21px; width:25px; }\r\n.plLength { padding-left:21px; position:absolute; right:21px; top:0; }\r\n.plSel,.plSel:hover { background-color:#262223!important; cursor:default!important; }\r\na[id^=\"btn\"] { background-color:#231F20; color:#C8C7C8; cursor:pointer; display:inline-block; font-size:50px; margin:0; padding:21px 27px; text-decoration:none; }\r\na[id^=\"btn\"]:last-child { margin-left:-4px; }\r\na[id^=\"btn\"]:hover,a[id^=\"btn\"]:active { background-color:#262223; }\r\na[id^=\"btn\"]::-moz-focus-inner { border:0; padding:0; }\r\n\r\n/* IE 9 */\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { margin-left:9px; outline:none; width:680px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] .plSel,\r\nhtml[data-useragent*=\"MSIE 9.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IE 10 */\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { margin-left:6px; width:687px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] .plSel,\r\nhtml[data-useragent*=\"MSIE 10.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IE 11 */\r\nhtml[data-useragent*=\"rv:11.0\"] audio { margin-left:2px; width:695px; }\r\nhtml[data-useragent*=\"rv:11.0\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"rv:11.0\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"rv:11.0\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"rv:11.0\"] .plSel,\r\nhtml[data-useragent*=\"rv:11.0\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* All Apple Products */\r\nhtml[data-useragent*=\"Apple\"] audio { margin:0; width:100%; }\r\nhtml[data-useragent*=\"Apple\"] #audiowrap { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] a[id^=\"btn\"] { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] a[id^=\"btn\"]:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"Apple\"] #plList li { background-color:#000; }\r\nhtml[data-useragent*=\"Apple\"] #plList li:hover { background-color:#080808; }\r\nhtml[data-useragent*=\"Apple\"] .plSel,\r\nhtml[data-useragent*=\"Apple\"] .plSel:hover { background-color:#080808!important; }\r\n\r\n/* IOS 7 */\r\nhtml[data-useragent*=\"OS 7\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 7\"] audio { margin-left:3px; width:690px; }\r\nhtml[data-useragent*=\"OS 7\"] #audiowrap { background-color:#e6e6e6; }\r\nhtml[data-useragent*=\"OS 7\"] a[id^=\"btn\"] { background-color:#e6e6e6; color:#373837; }\r\nhtml[data-useragent*=\"OS 7\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 7\"] #plList li { background-color:#e6e6e6; }\r\nhtml[data-useragent*=\"OS 7\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 7\"] .plSel,\r\nhtml[data-useragent*=\"OS 7\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* IOS 8 */\r\nhtml[data-useragent*=\"OS 8\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 8\"] audio { margin-left:6px; width:694px; }\r\nhtml[data-useragent*=\"OS 8\"] #audiowrap { background-color:#e4e4e4; }\r\nhtml[data-useragent*=\"OS 8\"] a[id^=\"btn\"] { background-color:#e4e4e4; color:#373837; }\r\nhtml[data-useragent*=\"OS 8\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 8\"] #plList li { background-color:#e4e4e4; }\r\nhtml[data-useragent*=\"OS 8\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 8\"] .plSel,\r\nhtml[data-useragent*=\"OS 8\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* IOS 9 */\r\nhtml[data-useragent*=\"OS 9\"] body { color:#373837; }\r\nhtml[data-useragent*=\"OS 9\"] audio { margin-left:6px; width:694px; }\r\nhtml[data-useragent*=\"OS 9\"] #audiowrap { background-color:#d5d5d5; }\r\nhtml[data-useragent*=\"OS 9\"] a[id^=\"btn\"] { background-color:#d5d5d5; color:#373837; }\r\nhtml[data-useragent*=\"OS 9\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 9\"] #plList li { background-color:#d5d5d5; }\r\nhtml[data-useragent*=\"OS 9\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"OS 9\"] .plSel,\r\nhtml[data-useragent*=\"OS 9\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* Chrome */\r\nhtml[data-useragent*=\"Chrome\"] body { color:#5a5a5a; }\r\nhtml[data-useragent*=\"Chrome\"] audio { margin-left:9px; width:677px; }\r\nhtml[data-useragent*=\"Chrome\"] #audiowrap { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"] a[id^=\"btn\"] { background-color:#fafafa; color:#5a5a5a; }\r\nhtml[data-useragent*=\"Chrome\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"] #plList li { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"] .plSel,\r\nhtml[data-useragent*=\"Chrome\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n/* Chrome / Android / Tablet */\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] body { color:#373837; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] audio { margin-left:4px; width:689px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #audiowrap { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] a[id^=\"btn\"] { background-color:#fafafa; color:#373837; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] a[id^=\"btn\"]:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #plList li { background-color:#fafafa; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] #plList li:hover { background-color:#eee; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] .plSel,\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] .plSel:hover { background-color:#eee!important; }\r\n\r\n\r\n/* Audio Player Media Queries\r\n================================================== */\r\n\r\n/* Tablet Portrait */\r\n@media only screen and (min-width: 768px) and (max-width: 959px) {\r\naudio { width:526px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:536px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:543px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:551px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:546px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:550px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:550px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:533px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Android\"] audio { margin-left:4px; width:545px; }\r\n}\r\n\r\n/* Mobile Landscape */\r\n@media only screen and (min-width: 480px) and (max-width: 767px) {\r\naudio { width:390px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:400px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:407px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:415px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:410px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:414px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:414px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:397px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Mobile\"] audio { margin-left:4px; width:410px; }\r\n#npTitle { width:245px; }\r\n}\r\n\r\n/* Mobile Portrait */\r\n@media only screen and (max-width: 479px) {\r\naudio { width:270px; }\r\nhtml[data-useragent*=\"MSIE 9.0\"] audio { width:280px; }\r\nhtml[data-useragent*=\"MSIE 10.0\"] audio { width:287px; }\r\nhtml[data-useragent*=\"rv:11.0\"] audio { width:295px; }\r\nhtml[data-useragent*=\"OS 7\"] audio { width:290px; }\r\nhtml[data-useragent*=\"OS 8\"] audio { width:294px; }\r\nhtml[data-useragent*=\"OS 9\"] audio { width:294px; }\r\nhtml[data-useragent*=\"Chrome\"] audio { width:277px; }\r\nhtml[data-useragent*=\"Chrome\"][data-useragent*=\"Mobile\"] audio { margin-left:4px; width:290px; }\r\n#npTitle { width:167px; }\r\n}"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 class=\"page-header\">Chat Dashboard</h2>\n<p>Welcome to your dashboard! Feel free to chat it up!</p>\n</div>\n<br>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Chat Window</div>\n          <div class=\"panel-body\">\n            <div class=\"message-container\" #scrollMe style=\"overflow: auto; height: 350px;\">\n                <div class=\"row message-bubble\" *ngFor=\"let chat of chats\">\n                <p class=\"text-muted\">{{chat.name}}</p>\n                    <p class=\" chat-text\">{{chat.message}}</p>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                 <div class=\"input-group\">\n                     <br>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textInput\" (keyup.enter)=\"sendMessage()\" placeholder=\"Send a message...\">\n                  <span class=\"input-group-btn\"><br>\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"sendMessage()\">Send</button>\n                  </span>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN Authentication Application built from scratch!</p>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local development server and easy compilation.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data.</p>\n  </div>\n</div>"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN Authentication App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/']\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Home</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/profile']\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Profile</a></li>\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/register']\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/dev/meanauthapp/angular-src/src/auth.service.js.map

/***/ })

},[1047]);
//# sourceMappingURL=main.bundle.map