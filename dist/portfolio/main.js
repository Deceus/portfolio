(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-timeline></app-timeline>\n<app-project></app-project>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "./src/app/components/timeline/timeline.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  background: var(--secondary-color);\r\n  color: #fff;\r\n  overflow: auto;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n}\r\n\r\n#navbar a {\r\n  color: #fff;\r\n}\r\n\r\n#navbar .container {\r\n  display: grid;\r\n  grid-template-columns: 3fr 4fr 3fr;\r\n  padding: 1rem;\r\n  align-items: center;\r\n  height: 90px;\r\n}\r\n\r\n#navbar .logo {\r\n  padding-left: 2rem;\r\n}\r\n\r\n#navbar .logo i {\r\n  color: var(--primary-color);\r\n}\r\n\r\n#navbar .social {\r\n  justify-self: center;\r\n}\r\n\r\n#navbar .social i {\r\n  color: var(--primary-color);\r\n  margin-right: .5rem;\r\n}\r\n\r\n#navbar ul {\r\n  display: flex;\r\n  justify-self: end;\r\n  list-style: none;\r\n}\r\n\r\n#navbar ul li {\r\n  font-weight: bold;\r\n}\r\n\r\n#navbar ul li a {\r\n  display: block;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n#navbar ul li a:hover,\r\n#navbar ul li a.current {\r\n  background: var(--primary-color);\r\n  color: #444;\r\n}\r\n\r\n#showcase {\r\n  color: #fff;\r\n  background: var(--dark-color);\r\n  padding: 2rem;\r\n  position: relative;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  padding-top: 90px;\r\n  margin-top: -90px;\r\n}\r\n\r\n#showcase .showcase-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  padding: 0 2rem;\r\n}\r\n\r\n#showcase:before {\r\n  content: '';\r\n  background: url(\"http://gogotraining.com/blog/wp-content/uploads/2016/10/Become-a-Computer-Programmer.jpg\") no-repeat center center/cover;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0.4;\r\n  z-index: -1;\r\n}\r\n\r\n#showcase .lead{\r\n  margin-top: 2rem;\r\n}\r\n\r\n#showcase .btn{\r\n  margin-top: 2rem;\r\n  line-height: 1;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGNBQWM7RUFDZCx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlJQUF5STtFQUN6SSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4jbmF2YmFyIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbmF2YmFyIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyIDNmcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4jbmF2YmFyIC5sb2dvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbiNuYXZiYXIgLmxvZ28gaSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4jbmF2YmFyIC5zb2NpYWwge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4jbmF2YmFyIC5zb2NpYWwgaSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn1cclxuXHJcbiNuYXZiYXIgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI25hdmJhciB1bCBsaSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNuYXZiYXIgdWwgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuYXZiYXIgdWwgbGkgYTpob3ZlcixcclxuI25hdmJhciB1bCBsaSBhLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4jc2hvd2Nhc2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAtOTBweDtcclxufVxyXG5cclxuI3Nob3djYXNlIC5zaG93Y2FzZS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG5cclxuI3Nob3djYXNlOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cDovL2dvZ290cmFpbmluZy5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9CZWNvbWUtYS1Db21wdXRlci1Qcm9ncmFtbWVyLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuI3Nob3djYXNlIC5sZWFke1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNzaG93Y2FzZSAuYnRue1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\">\n  <div class=\"container\">\n    <h1 class=\"logo\"><i class=\"fab fa-angular\"></i><a href=\"index.html\"> Castor Portfolio</a></h1>\n    <div class=\"social\">\n      <a href=\"https://www.linkedin.com/in/christopher-castor-7a242782/\" target=\"_blank\"><i class=\"fab fa-linkedin fa-3x\"></i></a>\n      <a href=\"http://github.com/deceus\" target=\"_blank\"><i class=\"fab fa-github fa-3x\"></i></a>\n    </div>\n    <ul>\n      <li><a href=\"index.html\">Home</a></li>\n      <li><a href=\"/\">Timeline</a></li>\n      <li><a href=\"/\">Projects</a></li>\n    </ul>\n  </div>\n</nav>\n<header id=\"showcase\">\n  <div class=\"showcase-content container\">\n    <h1 class=\"l-heading\">\n      Welcome, I'm Chris Castor and welcome to my web development portfolio.\n    </h1>\n    <p class=\"lead\">\n      This page was built to highlight and showcase my skills as a developer. Take a look!\n    </p>\n    <button (click)=\"scrollToTimeline(timeline)\" class=\"btn\">Learn More <i class=\"fas fa-arrow-circle-down\"></i></button>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.scrollToTimeline = function () {
        var element = document.querySelector('#timeline');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/project/project.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projects {\r\n  height: 91vh;\r\n  background: #222;\r\n  color: #f4f4f4;\r\n}\r\n\r\n#projects-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  max-width: 100%;\r\n}\r\n\r\n.project {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  width: 400px;\r\n  height: 300px;\r\n  /* background: var(--primary-color);   */\r\n  margin: 0 auto;\r\n}\r\n\r\n#projects .project img {\r\n  width: 100%;\r\n  height: 95%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#projects .project img:hover {\r\n  width: 110%;\r\n  height: 110%;\r\n  padding-bottom: 1.2rem;\r\n}\r\n\r\n#btn-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  background: #222;\r\n}\r\n\r\n@media(max-width: 1440px) {\r\n  #projects-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n\r\n  }\r\n}\r\n\r\n@media(max-width: 900px) {\r\n  #projects-container {\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n\r\n  #projects .project img:hover {\r\n    width: 115%;\r\n    height: 110%;\r\n    padding-bottom: 2.5rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQzs7RUFFdkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvamVjdHMge1xyXG4gIGhlaWdodDogOTF2aDtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4jcHJvamVjdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgICAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jcHJvamVjdHMgLnByb2plY3QgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI3Byb2plY3RzIC5wcm9qZWN0IGltZzpob3ZlciB7XHJcbiAgd2lkdGg6IDExMCU7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjJyZW07XHJcbn1cclxuXHJcbiNidG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICNwcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICNwcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICB9XHJcblxyXG4gICNwcm9qZWN0cyAucHJvamVjdCBpbWc6aG92ZXIge1xyXG4gICAgd2lkdGg6IDExNSU7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"projects\">\n  <div id=\"projects-container\" class=\"container\">\n    <div id=\"project1\" class=\"project\">\n      <img src=\"https://i.imgur.com/Bw4YIIb.png\" alt=\"\">\n      <p>Personal Portfolio Website</p>\n      <p>This is a short description</p>\n      <p>Angular, HTML5, CSS3, </p>\n    </div>\n    <div id=\"project2\" class=\"project\">\n      <img src=\"https://i.imgur.com/Bw4YIIb.png\" alt=\"\">\n      <p>Personal Portfolio Website</p>\n    </div>\n    <div id=\"project3\" class=\"project\">\n      <img src=\"https://i.imgur.com/Bw4YIIb.png\" alt=\"\">\n      <p>Personal Portfolio Website</p>\n    </div>\n  </div>\n  <div id=\"btn-container\">\n    <a (click)=\"scrollToTimeline()\" class=\"btn\">\n      Prev Page <i class=\"fas fa-arrow-circle-up\"></i>\n    </a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.scrollToTimeline = function () {
        var element = document.querySelector('#timeline');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/components/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/timeline/timeline.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " #timeline ul {\r\n   background: #444;\r\n   padding: 50px 0;\r\n }\r\n\r\n #timeline h3{\r\n   padding-bottom: .5rem;\r\n }\r\n\r\n /* Create Line */\r\n\r\n #timeline ul li {\r\n   list-style: none;\r\n   position: relative;\r\n   width: 6px;\r\n   margin: 0 auto;\r\n   padding-top: 50px;\r\n   background: #fff;\r\n }\r\n\r\n /* Boxes */\r\n\r\n #timeline ul li div {\r\n   position: relative;\r\n   bottom: 0;\r\n   width: 400px;\r\n   padding: 1rem;\r\n   background: var(--primary-color);\r\n   transition: all 0.5s ease-in-out;\r\n   visibility: hidden;\r\n   opacity: 0;\r\n }\r\n\r\n /* Right Side */\r\n\r\n #timeline ul li:nth-child(odd) div {\r\n   left: 40px;\r\n   -webkit-transform: translate(200px, 0);\r\n           transform: translate(200px, 0);\r\n }\r\n\r\n /* Left Side */\r\n\r\n #timeline ul li:nth-child(even) div {\r\n   left: -434px;\r\n   -webkit-transform: translate(-200px, 0);\r\n           transform: translate(-200px, 0);\r\n }\r\n\r\n /* Dots */\r\n\r\n #timeline ul li:after {\r\n   content: '';\r\n   position: absolute;\r\n   left: 50%;\r\n   bottom: 0;\r\n   width: 25px;\r\n   height: 25px;\r\n   background: var(--primary-color);\r\n   -webkit-transform: translateX(-50%);\r\n           transform: translateX(-50%);\r\n   border-radius: 50%;\r\n   transition: background 0.5s ease-in-out;\r\n }\r\n\r\n /* Arrows Base */\r\n\r\n #timeline div:before {\r\n   content: '';\r\n   position: absolute;\r\n   bottom: 5px;\r\n   width: 0;\r\n   height: 0;\r\n   border-style: solid;\r\n }\r\n\r\n /* Right Side Arrows */\r\n\r\n #timeline ul li:nth-child(odd) div:before {\r\n   left: -15px;\r\n   border-width: 8px 16px 8px 0;\r\n   border-color: transparent var(--primary-color) transparent transparent;\r\n }\r\n\r\n /* Left Side Arrows */\r\n\r\n #timeline ul li:nth-child(even) div:before {\r\n   right: -15px;\r\n   border-width: 8px 0 8px 16px;\r\n   border-color: transparent transparent transparent var(--primary-color);\r\n }\r\n\r\n /* Show Boxes */\r\n\r\n #timeline ul li.show div {\r\n   -webkit-transform: none;\r\n           transform: none;\r\n   visibility: visible;\r\n   opacity: 1;\r\n }\r\n\r\n #timeline ul li.show:after {\r\n   background: var(--secondary-color);\r\n }\r\n\r\n /* Buttons */\r\n\r\n #btn-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  background: #444;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n @media(max-width: 900px) {\r\n   #timeline ul li div {\r\n     width: 250px;\r\n   }\r\n\r\n   #timeline ul li:nth-child(even) div {\r\n     left: -284px;\r\n   }\r\n }\r\n\r\n @media(max-width: 900px) {\r\n   #timeline ul li {\r\n     margin-left: 20px;\r\n   }\r\n\r\n   #timeline ul li div {\r\n     width: calc(100vw - 90px);\r\n   }\r\n\r\n   #timeline ul li:nth-child(even) div {\r\n     left: 40px;\r\n   }\r\n\r\n   #timeline ul li:nth-child(even) div:before {\r\n     left: -15px;\r\n     border-width: 8px 16px 8px 0;\r\n     border-color: transparent var(--primary-color) transparent transparent;\r\n   }\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0dBQ0UsZ0JBQWdCO0dBQ2hCLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxxQkFBcUI7Q0FDdkI7O0NBRUEsZ0JBQWdCOztDQUNoQjtHQUNFLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLGNBQWM7R0FDZCxpQkFBaUI7R0FDakIsZ0JBQWdCO0NBQ2xCOztDQUVBLFVBQVU7O0NBQ1Y7R0FDRSxrQkFBa0I7R0FDbEIsU0FBUztHQUNULFlBQVk7R0FDWixhQUFhO0dBQ2IsZ0NBQWdDO0dBQ2hDLGdDQUFnQztHQUNoQyxrQkFBa0I7R0FDbEIsVUFBVTtDQUNaOztDQUVBLGVBQWU7O0NBQ2Y7R0FDRSxVQUFVO0dBQ1Ysc0NBQThCO1dBQTlCLDhCQUE4QjtDQUNoQzs7Q0FFQSxjQUFjOztDQUNkO0dBQ0UsWUFBWTtHQUNaLHVDQUErQjtXQUEvQiwrQkFBK0I7Q0FDakM7O0NBRUEsU0FBUzs7Q0FDVDtHQUNFLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsU0FBUztHQUNULFNBQVM7R0FDVCxXQUFXO0dBQ1gsWUFBWTtHQUNaLGdDQUFnQztHQUNoQyxtQ0FBMkI7V0FBM0IsMkJBQTJCO0dBQzNCLGtCQUFrQjtHQUNsQix1Q0FBdUM7Q0FDekM7O0NBRUEsZ0JBQWdCOztDQUNoQjtHQUNFLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLFFBQVE7R0FDUixTQUFTO0dBQ1QsbUJBQW1CO0NBQ3JCOztDQUVBLHNCQUFzQjs7Q0FDdEI7R0FDRSxXQUFXO0dBQ1gsNEJBQTRCO0dBQzVCLHNFQUFzRTtDQUN4RTs7Q0FFQSxxQkFBcUI7O0NBQ3JCO0dBQ0UsWUFBWTtHQUNaLDRCQUE0QjtHQUM1QixzRUFBc0U7Q0FDeEU7O0NBRUEsZUFBZTs7Q0FDZjtHQUNFLHVCQUFlO1dBQWYsZUFBZTtHQUNmLG1CQUFtQjtHQUNuQixVQUFVO0NBQ1o7O0NBRUE7R0FDRSxrQ0FBa0M7Q0FDcEM7O0NBRUEsWUFBWTs7Q0FDWjtFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7Q0FFQztHQUNFO0tBQ0UsWUFBWTtHQUNkOztHQUVBO0tBQ0UsWUFBWTtHQUNkO0NBQ0Y7O0NBRUE7R0FDRTtLQUNFLGlCQUFpQjtHQUNuQjs7R0FFQTtLQUNFLHlCQUF5QjtHQUMzQjs7R0FFQTtLQUNFLFVBQVU7R0FDWjs7R0FFQTtLQUNFLFdBQVc7S0FDWCw0QkFBNEI7S0FDNUIsc0VBQXNFO0dBQ3hFO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI3RpbWVsaW5lIHVsIHtcclxuICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgcGFkZGluZzogNTBweCAwO1xyXG4gfVxyXG5cclxuICN0aW1lbGluZSBoM3tcclxuICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gfVxyXG5cclxuIC8qIENyZWF0ZSBMaW5lICovXHJcbiAjdGltZWxpbmUgdWwgbGkge1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHdpZHRoOiA2cHg7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgYmFja2dyb3VuZDogI2ZmZjtcclxuIH1cclxuXHJcbiAvKiBCb3hlcyAqL1xyXG4gI3RpbWVsaW5lIHVsIGxpIGRpdiB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgYm90dG9tOiAwO1xyXG4gICB3aWR0aDogNDAwcHg7XHJcbiAgIHBhZGRpbmc6IDFyZW07XHJcbiAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICBvcGFjaXR5OiAwO1xyXG4gfVxyXG5cclxuIC8qIFJpZ2h0IFNpZGUgKi9cclxuICN0aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSBkaXYge1xyXG4gICBsZWZ0OiA0MHB4O1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCwgMCk7XHJcbiB9XHJcblxyXG4gLyogTGVmdCBTaWRlICovXHJcbiAjdGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XHJcbiAgIGxlZnQ6IC00MzRweDtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMHB4LCAwKTtcclxuIH1cclxuXHJcbiAvKiBEb3RzICovXHJcbiAjdGltZWxpbmUgdWwgbGk6YWZ0ZXIge1xyXG4gICBjb250ZW50OiAnJztcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBsZWZ0OiA1MCU7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgd2lkdGg6IDI1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiB9XHJcblxyXG4gLyogQXJyb3dzIEJhc2UgKi9cclxuICN0aW1lbGluZSBkaXY6YmVmb3JlIHtcclxuICAgY29udGVudDogJyc7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiA1cHg7XHJcbiAgIHdpZHRoOiAwO1xyXG4gICBoZWlnaHQ6IDA7XHJcbiAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiB9XHJcblxyXG4gLyogUmlnaHQgU2lkZSBBcnJvd3MgKi9cclxuICN0aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSBkaXY6YmVmb3JlIHtcclxuICAgbGVmdDogLTE1cHg7XHJcbiAgIGJvcmRlci13aWR0aDogOHB4IDE2cHggOHB4IDA7XHJcbiAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdmFyKC0tcHJpbWFyeS1jb2xvcikgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gLyogTGVmdCBTaWRlIEFycm93cyAqL1xyXG4gI3RpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXY6YmVmb3JlIHtcclxuICAgcmlnaHQ6IC0xNXB4O1xyXG4gICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNnB4O1xyXG4gICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gfVxyXG5cclxuIC8qIFNob3cgQm94ZXMgKi9cclxuICN0aW1lbGluZSB1bCBsaS5zaG93IGRpdiB7XHJcbiAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgb3BhY2l0eTogMTtcclxuIH1cclxuXHJcbiAjdGltZWxpbmUgdWwgbGkuc2hvdzphZnRlciB7XHJcbiAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiB9XHJcblxyXG4gLyogQnV0dG9ucyAqL1xyXG4gI2J0bi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4gQG1lZGlhKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgI3RpbWVsaW5lIHVsIGxpIGRpdiB7XHJcbiAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICB9XHJcblxyXG4gICAjdGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XHJcbiAgICAgbGVmdDogLTI4NHB4O1xyXG4gICB9XHJcbiB9XHJcblxyXG4gQG1lZGlhKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgI3RpbWVsaW5lIHVsIGxpIHtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgfVxyXG5cclxuICAgI3RpbWVsaW5lIHVsIGxpIGRpdiB7XHJcbiAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA5MHB4KTtcclxuICAgfVxyXG5cclxuICAgI3RpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gICAgIGxlZnQ6IDQwcHg7XHJcbiAgIH1cclxuXHJcbiAgICN0aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2OmJlZm9yZSB7XHJcbiAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiA4cHggMTZweCA4cHggMDtcclxuICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHZhcigtLXByaW1hcnktY29sb3IpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICB9XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"timeline\">\n  <ul>\n    <li>\n      <div>\n        <h3><i class=\"fas fa-chevron-right\"></i> 2011: Graduation</h3>\n        <p>Graduated from Christopher Newport University with a Bachelor of Science(B.S.), Computer Science</p>\n      </div>\n    </li>\n    <li>\n      <div>\n        <h3>\n          <i class=\"fas fa-chevron-right\"></i> 2011: Zantech IT Services, Inc.\n        </h3>\n        <p>\n          Provided maintenance support for the US Army’s Training Development Capability (TDC). Implemented several\n          major UI redesigns along with code maintenance.\n        </p>\n        <p>(JSF, Spring, Hibernate, XHTML)</p>\n      </div>\n    </li>\n    <li>\n      <div>\n        <h3><i class=\"fas fa-chevron-right\"></i> 2013: Ironclad Technologies, LLC</h3>\n        <p>\n          Provided production support for Command Financial Management System (CFMS). Developed secure and reliable\n          software updates to suit the Navy’s needs.\n        </p>\n        <p>(JavaScript, JSP, Hibernate, AJAX, Fortify)</p>\n      </div>\n    </li>\n    <li>\n      <div>\n        <h3><i class=\"fas fa-chevron-right\"></i> 2015: Android Development</h3>\n        <p>Completed the Google sponsored Udacity course on Android development. Went on to develope a number of\n          small Android applications for personal use with one successful release that gained\n          over 1000 downloads, 37 reviews and a 5.0 rating after only 2 months on the market.</p>\n        <p>(Java, XML, JSON)</p>\n      </div>\n    </li>\n    <li>\n      <div>\n        <h3>\n          <i class=\"fas fa-chevron-right\"></i> 2015: Turner Consulting Group (TCG)\n        </h3>\n        <p>\n          Developed Apache POI based budget reports in the Budget Formulation and Performance Management (BFEM)\n          application. These reports were used by Fiscal Services to provide a budget report to Congress on a yearly\n          basis. Provided support in every part of the development cycle from level of effort estimates to\n          critical production bug fixes.\n        </p>\n        <p>(Java, Apache POI, PL/SQL)</p>\n      </div>\n    </li>\n    <li>\n      <div>\n        <h3><i class=\"fas fa-chevron-right\"></i> Current: Web Development</h3>\n        <p>\n          After 4 years of budget reports and government work, I have reignited my passion for web developement this\n          time with a more modern touch. I started with modern Javascript (ES6+) along with babel and webpack. From\n          there I took a dive into HTML5/CSS3 web design to start with a great foundation for learning the modern\n          Javascript frameworks. I started with Angular 7 and have been tranisitioning into React to round out my\n          front-end toolkit before moving on to become a Full-Stack developer.\n        </p>\n        <p>(ES6+ JavaScript, HTML5, CSS3, Angular, React)</p>\n      </div>\n    </li>\n  </ul>\n  <div id=\"btn-container\">\n  <a (click)=\"scrollToShowcase()\" class=\"btn\">\n    Prev Page <i class=\"fas fa-arrow-circle-up\"></i>\n  </a>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.isInViewport = function (el) {
            var rect = el.getBoundingClientRect();
            return (rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var items = document.querySelectorAll('#timeline li');
        var run = function () {
            return items.forEach(function (item) {
                if (_this.isInViewport(item)) {
                    item.classList.add('show');
                }
            });
        };
        // Events
        window.addEventListener('load', run);
        window.addEventListener('resize', run);
        window.addEventListener('scroll', run);
    };
    TimelineComponent.prototype.scrollToShowcase = function () {
        var element = document.querySelector('#showcase');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/components/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspaces\Portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map