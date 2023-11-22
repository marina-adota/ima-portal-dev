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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _portal_add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal/add/add.component */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





const routes = [{
  path: '',
  component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'dashboard',
  component: _portal_add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/login/login.component */ 7353);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _portal_portal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal/portal.module */ 6455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _portal_portal_module__WEBPACK_IMPORTED_MODULE_3__.PortalModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _portal_portal_module__WEBPACK_IMPORTED_MODULE_3__.PortalModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class LoginComponent {}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 19,
  vars: 0,
  consts: [[1, "row", 2, "height", "98vh"], [1, "my-auto", "col-8"], [1, "col-9", "mx-auto"], ["src", "assets/Instituto Marina Adota - Logotipo_logotipo_ima_super horizontal.svg"], [1, "card", "h-100", "col-4", 2, "background-color", "#f8f8f8"], [1, "col-10", "mx-auto", "my-auto"], [1, "mb-3", "text-center", "mx-auto"], [1, "card-body"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Digite o seu usu\u00E1rio", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Digite a sua senha", 1, "form-control"], ["routerLink", "/dashboard", "type", "submit", 1, "col-12", "btn", "btn-primary"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Acessar Portal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7)(9, "div", 8)(10, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Usu\u00E1rio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Senha");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Entrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/animal.service */ 6861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);




function AddComponent_div_85_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_div_85_li_2_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const name_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.searchAnimals(name_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r2, " ");
  }
}
function AddComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddComponent_div_85_li_2_Template, 2, 1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.animalNames);
  }
}
class AddComponent {
  constructor(animalService) {
    this.animalService = animalService;
    this.animalNames = [];
    this.animals = [];
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
    this.animalService.getAnimals(name).subscribe({
      next: data => {
        console.log(data);
        this.animals = data;
        this.animalNames = [];
      },
      error: error => console.log(error)
    });
  }
}
AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_animal_service__WEBPACK_IMPORTED_MODULE_0__.AnimalService));
};
AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["app-add"]],
  decls: 228,
  vars: 2,
  consts: [[1, "card", "p-3", "col-8", "mx-auto", "mt-5"], [1, "card-body", "col-12"], ["action", "#", 1, "row"], [1, "d-flex", "justify-content-between", "col-12"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "id", "name", "placeholder", "Digite o nome do animal", 1, "form-control"], ["type", "text", "id", "age", "placeholder", "Digite a idade", 1, "form-control"], ["type", "text", "id", "breed", "placeholder", "Digite a ra\u00E7a do animal", 1, "form-control"], [1, "d-flex", "justify-content-between", "col-12", "my-3"], ["for", "disabledSelect"], ["id", "disabledSelect", 1, "form-control"], ["disabled", "", "selected", ""], [1, "gender-inputs"], [1, "gender-title"], [1, "gender-group"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], [1, "row"], ["for", "description"], ["name", "description", "id", "description", "cols", "70", "placeholder", "Digite uma descri\u00E7\u00E3o do animal", "rows", "4"], [1, "d-flex", "my-3"], ["for", "exampleFormControlFile1"], ["type", "file", "id", "exampleFormControlFile1", "accept", ".jpg", 1, "form-control-file"], [1, "ms-auto", "form-check", "form-check-inline"], [1, ""], ["type", "button", 1, "btn", "btn-primary", "mt-4"], [1, "input", "rounded", "col-8", "mx-auto", "my-5"], [1, "input-group", "border", "rounded"], [1, "form-outline"], ["type", "search", "id", "form1", 1, "form-control", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], ["for", "form1", 1, "form-label"], ["id", "search-addon", 1, "input-text", "border-0", "my-auto", "me-2", "pointer", 3, "click"], [1, "fas", "fa-search"], [4, "ngIf"], [1, "mx-auto", "px-auto", "col-12", "row", "justify-content-center"], [1, "mt-4", "col-2", "mx-3", "text-center", "card"], ["src", "assets/20230218-Molly5.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "mx-auto", "card-title"], [1, "card-text"], ["disabled", "", "type", "checkbox", "id", "inlineCheckbox3", "value", "option3", 1, "form-check-input"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "button", 1, "mx-2"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-pencil", "text-primary"], [1, "mx-2"], ["type", "button", 1, "btn", "btn-outline-danger"], [1, "fas", "fa-trash", "text-danger"], [1, "list-group", "border", "rounded"], ["class", "list-group-item list-group-item-action user-select-none pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "user-select-none", "pointer", 3, "click"]],
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Registro de Animal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5)(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nome");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "label", 5)(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Idade");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "label", 5)(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ra\u00E7a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9)(22, "div", 4)(23, "label", 10)(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Porte");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 11)(27, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Selecionar porte ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Pequeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "M\u00E9dio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Grande");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "h5")(38, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sa\u00FAde");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15)(41, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 18)(44, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Vacinas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 20)(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Verm\u00EDfugos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 22)(54, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Desparasita\u00E7\u00E3o");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23)(57, "label", 24)(58, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Descri\u00E7\u00E3o:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br")(61, "textarea", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 26)(63, "div", 4)(64, "label", 27)(65, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Fotos(Limite de 5, apenas jpg)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 22)(71, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 30)(74, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "REGISTRAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 32)(77, "div", 33)(78, "div", 34)(79, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.searchInput = $event;
      })("input", function AddComponent_Template_input_input_79_listener() {
        return ctx.searchNames();
      })("keyup.enter", function AddComponent_Template_input_keyup_enter_79_listener() {
        return ctx.searchAnimals(ctx.searchInput);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 36)(81, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Pesquisar por nome");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_Template_span_click_83_listener() {
        return ctx.searchAnimals(ctx.searchInput);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AddComponent_div_85_Template, 3, 1, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 40)(87, "div", 40)(88, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 43)(91, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 22)(99, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 47)(102, "div", 48)(103, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 51)(106, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 43)(111, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 22)(119, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 47)(122, "div", 48)(123, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 51)(126, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 43)(131, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 22)(139, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 47)(142, "div", 48)(143, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 51)(146, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 43)(151, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 22)(159, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 47)(162, "div", 48)(163, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 51)(166, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 43)(171, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "label", 22)(179, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 47)(182, "div", 48)(183, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 51)(186, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 43)(191, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "label", 22)(199, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 47)(202, "div", 48)(203, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 51)(206, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 43)(211, "h5", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "AMORA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "1 ano e 6 meses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "label", 22)(219, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Dispon\u00EDvel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 47)(222, "div", 48)(223, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 51)(226, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.animalNames.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class EditComponent {}
EditComponent.ɵfac = function EditComponent_Factory(t) {
  return new (t || EditComponent)();
};
EditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditComponent,
  selectors: [["app-edit"]],
  decls: 2,
  vars: 0,
  template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/edit.component */ 6520);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ 2545);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 2843);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






class PortalModule {}
PortalModule.ɵfac = function PortalModule_Factory(t) {
  return new (t || PortalModule)();
};
PortalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PortalModule
});
PortalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PortalModule, {
    declarations: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__.EditComponent, _add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 6743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);




class AnimalService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getAnimalNames(text) {
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/show/names/${text}`);
  }
  getAnimals(name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (name) {
      params = params.set("name", name);
    }
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}portal/short`, {
      params
    });
  }
}
AnimalService.ɵfac = function AnimalService_Factory(t) {
  return new (t || AnimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AnimalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AnimalService,
  factory: AnimalService.ɵfac,
  providedIn: 'root'
});


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