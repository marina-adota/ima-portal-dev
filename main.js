"use strict";
(self["webpackChunkima_portal"] = self["webpackChunkima_portal"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _portal_add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal/add/add.component */ 2545);
/* harmony import */ var _portal_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal/edit/edit.component */ 6520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'dashboard',
  component: _portal_add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent
}, {
  path: 'edit/:id',
  component: _portal_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__.EditComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _portal_portal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal/portal.module */ 6455);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/authentication.module */ 1082);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _portal_portal_module__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__.AuthenticationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _portal_portal_module__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__.AuthenticationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule]
  });
})();

/***/ }),

/***/ 1082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 7353);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class AuthenticationModule {}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) {
  return new (t || AuthenticationModule)();
};
AuthenticationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AuthenticationModule
});
AuthenticationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ }),

/***/ 7353:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 3617);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);









function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(userService, authenticationService, router, snackBar) {
    this.userService = userService;
    this.authenticationService = authenticationService;
    this.router = router;
    this.snackBar = snackBar;
    this.username = "";
    this.password = "";
    this.isLoading = false;
  }
  ngOnInit() {}
  login() {
    console.log(this.isLoading);
    this.isLoading = true;
    this.userService.login(this.username, this.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.isLoading = false)).subscribe({
      next: response => {
        this.authenticationService.saveToken(response);
        this.router.navigate(["/dashboard"]);
      },
      error: () => this.snackBar.open("Credenciais inválidas", "", {
        duration: 4000
      })
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 20,
  vars: 3,
  consts: [[1, "row", 2, "height", "98vh"], [1, "my-auto", "col-8"], [1, "col-9", "mx-auto"], ["src", "assets/Instituto Marina Adota - Logotipo_logotipo_ima_super horizontal.svg"], [1, "card", "h-100", "col-4", 2, "background-color", "#f8f8f8"], [1, "col-10", "mx-auto", "my-auto"], [1, "mb-3", "text-center", "mx-auto"], [1, "card-body"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "name", "username", "placeholder", "Digite o seu usu\u00E1rio", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label"], ["type", "password", "name", "password", "placeholder", "Digite a sua senha", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "col-12", "btn", "btn-primary", 3, "click"], [4, "ngIf"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Acessar Portal");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 7)(9, "div", 8)(10, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Usu\u00E1rio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Senha");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Entrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
  styles: [".top-margin[_ngcontent-%COMP%] {\n    margin-top: 5%;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 23px\n}\n\nbutton[_ngcontent-%COMP%]{\n    text-transform: lowercase;\n    font-size:medium;\n    background-color: #3579F6;\n    color: white;\n    height: 40px;\n\n}\nbutton[_ngcontent-%COMP%]::first-letter{\n    text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDIzcHhcbn1cblxuYnV0dG9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OUY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG5cbn1cbmJ1dHRvbjo6Zmlyc3QtbGV0dGVye1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6743:
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  API_URL: "https://dev-services.marinaadota.com.br/api/"
};

/***/ }),

/***/ 2545:
/*!*********************************************!*\
  !*** ./src/app/portal/add/add.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/healthInformation.enum */ 5543);
/* harmony import */ var src_app_shared_model_register_animal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/register-animal */ 2952);
/* harmony import */ var src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/sex.enum */ 4202);
/* harmony import */ var src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/size.enum */ 1967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var src_app_shared_remove_animal_dialog_remove_animal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/remove-animal-dialog/remove-animal-dialog.component */ 2625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/animal.service */ 6861);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loading/loading.component */ 3617);














function AddComponent_div_97_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddComponent_div_97_li_2_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const name_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.searchAnimals(name_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", name_r4, " ");
  }
}
function AddComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddComponent_div_97_li_2_Template, 2, 1, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.animalNames);
  }
}
function AddComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 52)(3, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 28)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Dispon\u00EDvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 56)(14, "div", 57)(15, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddComponent_div_99_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const animal_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.goToEdit(animal_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 60)(18, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddComponent_div_99_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const animal_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.openDialog(animal_r7.id, animal_r7.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const animal_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "https://dev-services.marinaadota.com.br/files/", animal_r7.googleDriveFileId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](animal_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](animal_r7.age);
  }
}
function AddComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class AddComponent {
  constructor(animalService, snackBar, router, dialog) {
    this.animalService = animalService;
    this.snackBar = snackBar;
    this.router = router;
    this.dialog = dialog;
    this.animalNames = [];
    this.animals = [];
    this.form = new src_app_shared_model_register_animal__WEBPACK_IMPORTED_MODULE_1__.RegistertAnimal("", 0, "", src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_2__.Sex.DEFAULT, 0, "", src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_3__.Size.DEFAULT, [], "", null, false);
    this.vaccinated = false;
    this.wormed = false;
    this.dewormed = false;
    this.isLoading = false;
  }
  ngOnInit() {
    this.searchAnimals();
  }
  searchNames() {
    if (this.searchInput && this.searchInput.trim().length > 0) {
      this.animalService.getAnimalNames(this.searchInput).subscribe({
        next: data => {
          console.log(data);
          this.animalNames = data;
        },
        error: error => console.error(error)
      });
    } else {
      this.animalNames = [];
    }
  }
  searchAnimals(name) {
    this.searchInput = name;
    this.isLoading = true;
    this.animalService.getAnimals(name).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoading = false)).subscribe({
      next: data => {
        console.log(data);
        this.animals = data;
        this.animalNames = [];
      },
      error: error => console.log(error)
    });
  }
  onFileSelected(event) {
    this.form.files = Array.from(event.target.files);
  }
  validation() {
    this.form.healthInformation = [];
    if (this.vaccinated) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.VACCINATED);
    }
    if (this.wormed) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.WORMED);
    }
    if (this.dewormed) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.DEWORMED);
    }
    this.isLoading = true;
    this.animalService.registerAnimals(this.form).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.isLoading = false)).subscribe({
      next: data => {
        this.snackBar.open("Registrado com sucesso !", "", {
          duration: 4000
        });
        this.searchAnimals();
      },
      error: error => this.snackBar.open("Erro inesperado", "", {
        duration: 4000
      })
    });
  }
  goToEdit(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  removeAnimal(id) {
    console.log(id);
    this.animalService.deleteAnimal(id).subscribe({
      next: id => {
        this.snackBar.open("Animal removido !", "", {
          duration: 4000
        });
        this.searchAnimals();
      },
      error: error => this.snackBar.open("Erro inesperado", "", {
        duration: 4000
      })
    });
  }
  openDialog(id, name) {
    const dialogRef = this.dialog.open(src_app_shared_remove_animal_dialog_remove_animal_dialog_component__WEBPACK_IMPORTED_MODULE_4__.RemoveAnimalDialogComponent, {
      data: {
        name
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.removeAnimal(id);
      }
    });
  }
}
AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_5__.AnimalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["app-add"]],
  decls: 101,
  vars: 14,
  consts: [[1, "card", "p-3", "col-8", "mx-auto", "mt-5"], [1, "card-body", "col-12"], [1, "row"], [1, "d-flex", "justify-content-between", "col-12"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "placeholder", "Digite o nome do animal", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "formGroupExampleInput"], ["type", "number", "name", "age", "id", "age", "placeholder", "Digite a idade", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "breed", "id", "breed", "placeholder", "Digite a ra\u00E7a do animal", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "col-12", "my-3"], ["for", "disabledSelect"], ["name", "disabledSelect", "id", "disabledSelect", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", "", "value", ""], ["value", "SMALL"], ["value", "MEDIUM"], ["value", "BIG"], ["value", "MALE"], ["value", "FEMALE"], [1, "gender-inputs"], [1, "gender-title"], [1, "gender-group"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "name", "inlineCheckbox1", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "name", "inlineCheckbox2", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "name", "inlineCheckbox3", "id", "inlineCheckbox3", "value", "option3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["for", "description"], ["name", "description", "id", "description", "cols", "70", "placeholder", "Digite uma descri\u00E7\u00E3o do animal", "rows", "4", 3, "ngModel", "ngModelChange"], [1, "d-flex", "my-3"], ["for", "exampleFormControlFile1"], ["type", "file", "id", "exampleFormControlFile1", "accept", "image/jpeg, image/png, image/gif", "multiple", "multiple", 1, "form-control-file", 3, "change"], [1, "ms-auto", "form-check", "form-check-inline"], [1, ""], ["type", "submit", 1, "btn", "btn-primary", "mt-4", 3, "click"], [1, "input", "rounded", "col-8", "mx-auto", "my-5"], [1, "input-group", "border", "rounded"], [1, "form-outline"], ["type", "search", "id", "form1", 1, "form-control", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], ["for", "form1", 1, "form-label"], ["id", "search-addon", 1, "input-text", "border-0", "my-auto", "me-2", "pointer", 3, "click"], [1, "fas", "fa-search"], [4, "ngIf"], [1, "mx-auto", "px-auto", "col-12", "row", "justify-content-center"], ["class", "mt-4 col-2 mx-3 text-center card", 4, "ngFor", "ngForOf"], [1, "list-group", "border", "rounded"], ["class", "list-group-item list-group-item-action user-select-none pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "user-select-none", "pointer", 3, "click"], [1, "mt-4", "col-2", "mx-3", "text-center", "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "mx-auto", "card-title"], [1, "card-text"], ["disabled", "", "type", "checkbox", "id", "inlineCheckbox3", "value", "option3", 1, "form-check-input"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "button", 1, "mx-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-pencil", "text-primary"], [1, "mx-2"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash", "text-danger"]],
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Registro de Animal");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5)(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Nome");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.form.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4)(12, "label", 7)(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Idade");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.form.age = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 4)(17, "label", 7)(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Ra\u00E7a");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.form.breed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 10)(22, "div", 4)(23, "label", 11)(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Porte");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_select_ngModelChange_26_listener($event) {
        return ctx.form.size = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Selecionar porte ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Pequeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "M\u00E9dio");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Grande");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 4)(36, "label", 11)(37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Sexo");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_select_ngModelChange_39_listener($event) {
        return ctx.form.sex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Selecionar sexo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Macho");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "F\u00EAmea");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 2)(47, "div", 19)(48, "div", 20)(49, "h5")(50, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Sa\u00FAde");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 21)(53, "div", 22)(54, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_54_listener($event) {
        return ctx.vaccinated = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "label", 24)(56, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Vacinas");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 22)(59, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.wormed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "label", 26)(61, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Verm\u00EDfugos");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 22)(64, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.dewormed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "label", 28)(66, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Desparasita\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 2)(69, "label", 29)(70, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Descri\u00E7\u00E3o:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "textarea", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_textarea_ngModelChange_73_listener($event) {
        return ctx.form.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 31)(75, "div", 4)(76, "label", 32)(77, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Fotos(Limite de 5, apenas jpg)");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddComponent_Template_input_change_79_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 34)(81, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_81_listener($event) {
        return ctx.form.available = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "label", 28)(83, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 35)(86, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddComponent_Template_button_click_86_listener() {
        return ctx.validation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "REGISTRAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 37)(89, "div", 38)(90, "div", 39)(91, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_91_listener($event) {
        return ctx.searchInput = $event;
      })("input", function AddComponent_Template_input_input_91_listener() {
        return ctx.searchNames();
      })("keyup.enter", function AddComponent_Template_input_keyup_enter_91_listener() {
        return ctx.searchAnimals(ctx.searchInput);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "label", 41)(93, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Pesquisar por nome");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddComponent_Template_span_click_95_listener() {
        return ctx.searchAnimals(ctx.searchInput);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, AddComponent_div_97_Template, 3, 1, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, AddComponent_div_99_Template, 20, 3, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, AddComponent_div_100_Template, 2, 0, "div", 44);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.age);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.breed);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.sex);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.vaccinated);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.wormed);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.dewormed);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.form.available);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.animalNames.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.animals);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent],
  styles: [".pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGFsL2FkZC9hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6520:
/*!***********************************************!*\
  !*** ./src/app/portal/edit/edit.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/healthInformation.enum */ 5543);
/* harmony import */ var src_app_shared_model_register_animal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/register-animal */ 2952);
/* harmony import */ var src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/sex.enum */ 4202);
/* harmony import */ var src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/size.enum */ 1967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/animal.service */ 6861);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);









class EditComponent {
  constructor(animalService, router, activatedRoute, snackBar) {
    this.animalService = animalService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.snackBar = snackBar;
    this.id = 0;
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.form = new src_app_shared_model_register_animal__WEBPACK_IMPORTED_MODULE_1__.RegistertAnimal("", 0, "", src_app_shared_model_sex_enum__WEBPACK_IMPORTED_MODULE_2__.Sex.DEFAULT, 0, "", src_app_shared_model_size_enum__WEBPACK_IMPORTED_MODULE_3__.Size.DEFAULT, [], "", null, false);
    this.vaccinated = false;
    this.wormed = false;
    this.dewormed = false;
  }
  ngOnInit() {
    this.searchAnimalById();
  }
  searchAnimalById() {
    this.animalService.getAnimalById(this.id).subscribe({
      next: data => {
        this.form = data;
        if (this.form.healthInformation.includes(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.VACCINATED)) {
          this.vaccinated = true;
        }
        if (this.form.healthInformation.includes(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.WORMED)) {
          this.wormed = true;
        }
        if (this.form.healthInformation.includes(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.DEWORMED)) {
          this.dewormed = true;
        }
      },
      error: error => this.snackBar.open("Erro inesperado", "", {
        duration: 4000
      })
    });
  }
  edit() {
    this.form.healthInformation = [];
    if (this.vaccinated) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.VACCINATED);
    }
    if (this.wormed) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.WORMED);
    }
    if (this.dewormed) {
      this.form.healthInformation.push(src_app_shared_model_healthInformation_enum__WEBPACK_IMPORTED_MODULE_0__.HealthInformation.DEWORMED);
    }
    this.animalService.edit(this.id, this.form).subscribe({
      next: data => {
        this.snackBar.open("Editado com sucesso !", "", {
          duration: 4000
        });
        this.router.navigate(['/dashboard']);
      },
      error: error => this.snackBar.open("Erro inesperado", "", {
        duration: 4000
      })
    });
  }
}
EditComponent.ɵfac = function EditComponent_Factory(t) {
  return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_4__.AnimalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};
EditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EditComponent,
  selectors: [["app-edit"]],
  decls: 88,
  vars: 10,
  consts: [[1, "card", "p-3", "col-8", "mx-auto", "mt-5"], [1, "d-flex", "justify-content-between"], ["routerLink", "/dashboard", 1, "me-auto"], [1, "fas", "fa-arrow-left", "fa-lg"], [1, "me-auto"], [1, "card-body", "col-12"], [1, "row", 3, "ngSubmit"], [1, "d-flex", "justify-content-between", "col-12"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "placeholder", "Digite o nome do animal", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "formGroupExampleInput"], ["type", "number", "name", "age", "id", "age", "placeholder", "Digite a idade", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "breed", "id", "breed", "placeholder", "Digite a ra\u00E7a do animal", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "col-12", "my-3"], ["for", "size"], ["name", "size", "id", "size", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", "", "value", ""], ["value", "SMALL"], ["value", "MEDIUM"], ["value", "BIG"], ["for", "sex"], ["name", "sex", "id", "sex", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "MALE"], ["value", "FEMALE"], [1, "row"], [1, "gender-inputs"], [1, "gender-title"], [1, "gender-group"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "name", "vaccinated", "id", "vaccinated", "value", "vaccinated", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "vaccinated", 1, "form-check-label"], ["type", "checkbox", "name", "wormed", "id", "wormed", "value", "wormed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "wormed", 1, "form-check-label"], ["type", "checkbox", "name", "dewormed", "id", "dewormed", "value", "dewormed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "dewormed", 1, "form-check-label"], ["for", "description"], ["name", "description", "id", "description", "cols", "70", "placeholder", "Digite uma descri\u00E7\u00E3o do animal", "rows", "4", "required", "", 3, "ngModel", "ngModelChange"], [1, "d-flex", "my-3"], [1, "ms-auto", "form-check", "form-check-inline"], ["type", "checkbox", "name", "available", "id", "available", "value", "available", "required", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "available", 1, "form-check-label"], [1, "btn", "btn-danger", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"]],
  template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edi\u00E7\u00E3o de Animal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_7_listener() {
        return ctx.edit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label", 9)(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nome");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.form.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8)(15, "label", 11)(16, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Idade");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.form.age = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 8)(20, "label", 11)(21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Ra\u00E7a");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.form.breed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14)(25, "div", 8)(26, "label", 15)(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Porte");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_select_ngModelChange_29_listener($event) {
        return ctx.form.size = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Selecionar porte ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Pequeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "M\u00E9dio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Grande");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 8)(39, "label", 21)(40, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Sexo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.form.sex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Selecionar g\u00EAnero ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Masculino");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Feminino");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 25)(50, "div", 26)(51, "div", 27)(52, "h5")(53, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Sa\u00FAde");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 28)(56, "div", 29)(57, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.vaccinated = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 31)(59, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Vacinas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 29)(62, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_62_listener($event) {
        return ctx.wormed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 33)(64, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Verm\u00EDfugos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 29)(67, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_67_listener($event) {
        return ctx.dewormed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "label", 35)(69, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Desparasita\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 25)(72, "label", 36)(73, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Descri\u00E7\u00E3o:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "textarea", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_76_listener($event) {
        return ctx.form.description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 38)(78, "div", 39)(79, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.form.available = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 41)(81, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 1)(84, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Remover");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Editar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.age);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.breed);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.sex);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.vaccinated);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.wormed);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.dewormed);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.form.available);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2843:
/*!***********************************************!*\
  !*** ./src/app/portal/list/list.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class ListComponent {}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)();
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  decls: 2,
  vars: 0,
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6455:
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalModule": () => (/* binding */ PortalModule)
/* harmony export */ });
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/edit.component */ 6520);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ 2545);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 2843);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);







class PortalModule {}
PortalModule.ɵfac = function PortalModule_Factory(t) {
  return new (t || PortalModule)();
};
PortalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PortalModule
});
PortalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PortalModule, {
    declarations: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__.EditComponent, _add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 6861:
/*!********************************************!*\
  !*** ./src/app/services/animal.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalService": () => (/* binding */ AnimalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 6743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 7053);





class AnimalService {
  constructor(httpClient, authenticationService) {
    this.httpClient = httpClient;
    this.authenticationService = authenticationService;
  }
  getAnimalNames(text) {
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/show/names/${text}`);
  }
  getAnimals(name) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set("Authentication", "Bearer " + this.authenticationService.takeToken());
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    if (name) {
      params = params.set("name", name);
    }
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/short`, {
      headers,
      params
    });
  }
  registerAnimals(newAnimal) {
    const formData = new FormData();
    formData.append('name', newAnimal.name.toString());
    formData.append('age', newAnimal.age.toString());
    formData.append('breed', newAnimal.breed.toString());
    formData.append('size', newAnimal.size.toString());
    formData.append('sex', newAnimal.sex.toString());
    formData.append('description', newAnimal.description.toString());
    formData.append('available', newAnimal.available.toString());
    newAnimal.healthInformation.forEach(healthInformation => formData.append('healthInformation', healthInformation.toString()));
    newAnimal.files.forEach(file => formData.append('files', file));
    return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/register`, formData);
  }
  getAnimalById(id) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set("Authentication", "Bearer " + this.authenticationService.takeToken());
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/show/${id}`);
  }
  edit(id, animal) {
    const animalData = {
      id: id,
      name: animal.name,
      age: animal.age,
      breed: animal.breed,
      size: animal.size,
      sex: animal.sex,
      description: animal.description,
      available: animal.available,
      healthInformation: animal.healthInformation.map(info => info.toString())
    };
    const body = JSON.stringify(animalData);
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers = headers.set("Authentication", "Bearer " + this.authenticationService.takeToken());
    headers = headers.set("Content-Type", "application/json");
    return this.httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/animal`, body, {
      headers
    });
  }
  deleteAnimal(id) {
    return this.httpClient.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/${id}`);
  }
}
AnimalService.ɵfac = function AnimalService_Factory(t) {
  return new (t || AnimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
AnimalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AnimalService,
  factory: AnimalService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class AuthenticationService {
  constructor() {}
  saveToken(token) {
    window.sessionStorage.setItem("token", token);
  }
  takeToken() {
    return window.sessionStorage.getItem("token");
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)();
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 6743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class UserService {
  constructor(http) {
    this.http = http;
  }
  login(username, password) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}user/login`, {
      username,
      password
    }, {
      responseType: 'text'
    });
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3617:
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);


class LoadingComponent {
  constructor() {
    this.diameter = 30;
    this.strokeWidth = 4;
  }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
  return new (t || LoadingComponent)();
};
LoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingComponent,
  selectors: [["app-loading"]],
  inputs: {
    diameter: "diameter",
    strokeWidth: "strokeWidth"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "position-fixed", "bottom-0", "end-0", "p-3"], [3, "diameter", "strokeWidth"]],
  template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", ctx.diameter)("strokeWidth", ctx.strokeWidth);
    }
  },
  dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5543:
/*!********************************************************!*\
  !*** ./src/app/shared/model/healthInformation.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthInformation": () => (/* binding */ HealthInformation)
/* harmony export */ });
var HealthInformation;
(function (HealthInformation) {
  HealthInformation["VACCINATED"] = "VACCINATED";
  HealthInformation["WORMED"] = "WORMED";
  HealthInformation["DEWORMED"] = "DEWORMED";
})(HealthInformation || (HealthInformation = {}));

/***/ }),

/***/ 2952:
/*!*************************************************!*\
  !*** ./src/app/shared/model/register-animal.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistertAnimal": () => (/* binding */ RegistertAnimal)
/* harmony export */ });
class RegistertAnimal {
  constructor(name, id, url, sex, age, breed, size, healthInformation, description, files, available) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.breed = breed;
    this.size = size;
    this.healthInformation = healthInformation;
    this.description = description;
    this.files = files;
    this.available = available;
  }
}

/***/ }),

/***/ 4202:
/*!******************************************!*\
  !*** ./src/app/shared/model/sex.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sex": () => (/* binding */ Sex)
/* harmony export */ });
var Sex;
(function (Sex) {
  Sex["DEFAULT"] = "";
  Sex["MALE"] = "MALE";
  Sex["FEMALE"] = "FEMALE";
})(Sex || (Sex = {}));

/***/ }),

/***/ 1967:
/*!*******************************************!*\
  !*** ./src/app/shared/model/size.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Size": () => (/* binding */ Size)
/* harmony export */ });
var Size;
(function (Size) {
  Size["DEFAULT"] = "";
  Size["SMALL"] = "SMALL";
  Size["MEDIUM"] = "MEDIUM";
  Size["BIG"] = "BIG";
})(Size || (Size = {}));

/***/ }),

/***/ 2625:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/remove-animal-dialog/remove-animal-dialog.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveAnimalDialogComponent": () => (/* binding */ RemoveAnimalDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 3677);




class RemoveAnimalDialogComponent {
  constructor(data) {
    this.data = data;
  }
}
RemoveAnimalDialogComponent.ɵfac = function RemoveAnimalDialogComponent_Factory(t) {
  return new (t || RemoveAnimalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
RemoveAnimalDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RemoveAnimalDialogComponent,
  selectors: [["app-remove-animal-dialog"]],
  decls: 8,
  vars: 2,
  consts: [[1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
  template: function RemoveAnimalDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 1)(4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remover");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tem certeza de que deseja remover ", ctx.data.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading/loading.component */ 3617);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _remove_animal_dialog_remove_animal_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-animal-dialog/remove-animal-dialog.component */ 2625);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);






class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent, _remove_animal_dialog_remove_animal_dialog_component__WEBPACK_IMPORTED_MODULE_1__.RemoveAnimalDialogComponent],
    imports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule],
    exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent, _remove_animal_dialog_remove_animal_dialog_component__WEBPACK_IMPORTED_MODULE_1__.RemoveAnimalDialogComponent]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map