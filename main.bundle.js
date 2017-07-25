webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'resume',
        component: __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__["a" /* ResumeComponent */]
    },
    {
        path: '',
        redirectTo: 'resume',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Álister Lopes Ferreira';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'cv-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_material_module__ = __webpack_require__("../../../../../src/app/custom-material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/custom-material-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomMaterialModule = (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdToolbarModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdToolbarModule */]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());

//# sourceMappingURL=custom-material-module.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout>\r\n  <div fxFlex>\r\n    <h1>Álister <br>Lopes Ferreira</h1>\r\n  </div>\r\n  <div fxFlex fxLayoutGap=\"20px\">\r\n    <ul>\r\n      <li><i class=\"material-icons\">phone</i> (11) 97983-7935</li>\r\n      <li><i class=\"material-icons\">mail_outline</i> alisterlf@gmail.com</li>\r\n      <li><i class=\"material-icons\">home</i> São Paulo - SP</li>\r\n      <li><i class=\"material-icons\">link</i> http://lnkd.in/3k8m6C</li>\r\n      <li><i class=\"material-icons\">cake</i> 21/02/1987</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div fxLayout fxLayoutGap=\"20px\">\r\n  <div fxFlex>\r\n    <dl class=\"category-list\">\r\n      <dt>\r\n        <i class=\"material-icons\">school</i> Formação\r\n      </dt>\r\n      <dd>\r\n        <ul>\r\n          <li>Cursando o 7º semestre de Ciência da Computação pelo Centro Universitário Nove de Julho.</li>\r\n        </ul>\r\n      </dd>\r\n      <dt>\r\n        <i class=\"material-icons\">star</i> Certiﬁcação\r\n      </dt>\r\n      <dd>\r\n        <ul>\r\n          <li>Microsoft - Programming in HTML5 with Javascript and CSS3 Specialist.</li>\r\n        </ul>\r\n      </dd>\r\n      <dt>\r\n        <i class=\"material-icons\">computer</i> Competências e especialidades\r\n      </dt>\r\n      <dd>\r\n        <dl>\r\n          <dt>\r\n            Linguagens\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>HTML5</li>\r\n              <li>CSS3</li>\r\n              <li>Javascript(ES6)</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Frameworks e bibliotecas\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>Angular (1.x e 2+)</li>\r\n              <li>Bootstrap (2 e 3)</li>\r\n              <li>RequireJS</li>\r\n              <li>jQuery</li>\r\n              <li>Knockout</li>\r\n              <li>Templating Engines (Mustache e Handlebars)</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Trabalho com\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>TypeScript</li>\r\n              <li>SASS e LESS</li>\r\n              <li>REST</li>\r\n              <li>Node.js</li>\r\n              <li>GIT, TFS e SVN</li>\r\n              <li>NPM, Webpack, Bower, Gulp, Grunt</li>\r\n              <li>C#.NET (Web Forms e MVC)</li>\r\n              <li>Adobe Photoshop</li>\r\n              <li>Visual Studio</li>\r\n              <li>Visual Studio Code</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Técnicas\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>Single Page Applications</li>\r\n              <li>Responsive &#x26; Fluid Layout (FlexBox)</li>\r\n              <li>Parallax</li>\r\n              <li>Cross-browser Compatibility</li>\r\n              <li>Web Standards</li>\r\n              <li>Acessibilidade, SEO, WAI-ARIA e Microformats</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Estou aprendendo\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>React</li>\r\n              <li>Webpack</li>\r\n              <li>CSS Grid layout</li>\r\n              <li>Jasmine</li>\r\n              <li>Karma</li>\r\n              <li>Protractor</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            <i class=\"material-icons\">translate</i> Idiomas\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li>Português</li>\r\n              <li>Nativo</li>\r\n              <li>Inglês</li>\r\n              <li>Avançado</li>\r\n            </ul>\r\n          </dd>\r\n        </dl>\r\n    </dl>\r\n  </div>\r\n  <div fxFlex>\r\n    <dl class=\"category-list\">\r\n      <dt>\r\n        <i class=\"material-icons\">history</i> Experiência Proﬁssional\r\n      </dt>\r\n      <dd>\r\n        <dl>\r\n          <dt>\r\n            Infracommerce\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Javascript Sênior.</li>\r\n              <li><strong>Período:</strong> De 07/17 até atual.</li>\r\n              <li><strong>Descrição do cargo:</strong> Desenvolvimento e manutenção de uma plataforma B2C e B2B.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Mercado Eletrônico\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Javascript Sênior.</li>\r\n              <li><strong>Período:</strong> De 06/15 até 04/17.</li>\r\n              <li><strong>Descrição do cargo:</strong> Desenvolvimento de uma plataforma B2B usando Angular 2 e Angular Material\r\n                2.\r\n              </li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            CTIS\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Javascript Sênior.</li>\r\n              <li><strong>Período:</strong> De 12/14 até 04/15.</li>\r\n              <li><strong>Descrição do cargo:</strong> Desenvolvimento de aplicativos para Android utilizando a plataforma Cordova\r\n                (HTML, CSS e Javascript). Com utilização do framework Angular 1.x.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Tesla Tecnologia\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Front-end Sênior.</li>\r\n              <li><strong>Período:</strong> De 05/14 até 10/14.</li>\r\n              <li><strong>Descrição do cargo:</strong> Coordenação da equipe de front-end e desenvolvimentos dos projetos mais\r\n                complexos da empresa, dentre eles o e-commerce da C&#x26;C.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            RDI - Restaurant Application Development International LLC\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Programador Javascript Sênior.</li>\r\n              <li><strong>Período:</strong> De 01/14 até 05/14.</li>\r\n              <li><strong>Descrição do cargo:</strong> Prestação de serviço exclusivo para a empresa McDonald's no desenvolvimento\r\n                e suporte de POS (point-of-sale) e software relacionados.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            TaskRow e MarketUP\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Front-end Sênior.</li>\r\n              <li><strong>Período:</strong> De 06/13 até 11/13.</li>\r\n              <li><strong>Descrição do cargo:</strong> Startups parceiras.<br>TaskRow (http://goo.gl/AjAKQj): Criação da interface\r\n                do sistema de gerenciamento de agências (Single Page Application e layout responsivo).<br>MarketUP (http://goo.gl/3XpfBL):\r\n                Desenvolvimento de módulos de sistema ERP (Single Page Application).</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Ag2 | Publicis Modem\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Coordenador de Front-end.</li>\r\n              <li><strong>Período:</strong> De 07/12 até 06/13.</li>\r\n              <li><strong>Descrição do cargo:</strong> Coordenação da equipe de Interface, responsável pelo treinamento e controle\r\n                de qualidade do código. Resposável pelo desenvolvimento dos projetos mais complexos da agência.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Tesla Tecnologia\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Front-end Sênior.</li>\r\n              <li><strong>Período:</strong> De 07/09 até 07/12.</li>\r\n              <li><strong>Descrição do cargo:</strong> Líder técnico da equipe, responsável pelo treinamento e controle de qualidade\r\n                do código. Desenvolvimento de novos projetos visando a integração das equipes front-end e back-end utilizando\r\n                .NET para a diminuição de erros e retrabalhos.</li>\r\n            </ul>\r\n          </dd>\r\n          <dt>\r\n            Player Comunicação Digital\r\n          </dt>\r\n          <dd>\r\n            <ul>\r\n              <li><strong>Cargo:</strong> Desenvolvedor Front-end Junior.</li>\r\n              <li><strong>Período:</strong> De 04/08 até 07/09.</li>\r\n              <li><strong>Descrição do cargo:</strong> Responsável pelo desenvolvimento de email marketing, hotsites, sites institucionais,\r\n                e e-commerces (Natura e Leroy Merlin).</li>\r\n            </ul>\r\n          </dd>\r\n        </dl>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map