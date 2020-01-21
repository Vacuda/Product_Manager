(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\n    <h1>PPM - Project Product Management</h1>\n\n    <div class=\"division\"></div>\n\n    <table>\n        <tr>\n            <td class=\"small\"></td>\n            <td><button [routerLink]=\"['/home']\" class=\"btn btn-success\">Home</button></td>\n            <td><button [routerLink]=\"['/products']\" class=\"btn btn-success\">Product List</button></td>\n            <td><button [routerLink]=\"['/products/new']\" class=\"btn btn-success\">Product Creation</button></td>\n            <td class=\"small\"></td>\n        </tr>\n    </table>\n\n\n    <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n    <app-show *ngIf=\"onetask\" [taskToShow]=\"onetask\"></app-show>\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner\">\n    <h4>{{prod_name}}</h4>\n    <img src=\"{{prod_url}}\" alt=\"{{prod_name}}\">\n    <h4>${{prod_price}}</h4>\n    <div class=\"row\">\n        <div class=\"col col-6\">\n            <button class=\"btn btn-success\" [routerLink]=\"['/products/edit/', prod_id]\">Edit</button>\n        </div>\n        <div class=\"col col-6\">\n            <button class=\"btn btn-danger btn-delete\" (click)=\"deleteProduct(prod_id)\">Del</button>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer\">\n\n    <div *ngIf=\"errors\">\n        <h4 class=\"left\">Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n    </div>\n\n    <form (submit)=\"updateProduct(updateproduct._id)\">\n        <div class=\"form-group\">\n            <label for=\"name\">Product Name:</label>\n            <input name=\"updateproduct.name\" [(ngModel)]=\"updateproduct.name\" class=\"form-control\" id=\"name\" placeholder=\"---\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"price\">Price:</label>\n            <input name=\"updateproduct.price\" [(ngModel)]=\"updateproduct.price\" class=\"form-control\" id=\"price\" placeholder=\"---\" type=\"number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"url\">Image Url:</label>\n            <input name=\"updateproduct.url\" [(ngModel)]=\"updateproduct.url\" class=\"form-control\" id=\"url\" placeholder=\"---\">\n        </div>\n\n        <button class=\"btn btn-warning\" type=\"submit\">Submit Changes</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <p>Welcome to Project Product Management! Here we can manage a set of products. You are able to create products, remove old products, and edit products.</p>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer\">\n\n<h2>Products List</h2>\n\n<div class=\"division\"></div>\n\n<div class=\"reset\" *ngFor=\"let product of allproducts\">\n    <div class=\"card\">\n        <app-detail [prod_id]=\"product._id\" [prod_name]=\"product.name\" [prod_price]=\"product.price\" [prod_url]=\"product.url\" class=\"noblock\"></app-detail>\n    </div>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer\">\n\n    <div *ngIf=\"errors\">\n        <h4 class=\"left\">Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n    </div>\n\n    <form (submit)=\"createProduct()\">\n        <div class=\"form-group\">\n            <label for=\"name\">Product Name:</label>\n            <input \n                name=\"createproduct.name\"\n                [(ngModel)]=\"createproduct.name\"\n                class=\"form-control\" id=\"name\" \n                placeholder=\"---\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"price\">Price:</label>\n            <input name=\"createproduct.price\" [(ngModel)]=\"createproduct.price\" class=\"form-control\" id=\"price\" placeholder=\"---\" type=\"number\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"url\">Image Url:</label>\n            <input name=\"createproduct.url\" [(ngModel)]=\"createproduct.url\" class=\"form-control\" id=\"url\" placeholder=\"---\">\n        </div>\n\n        <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'products', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], children: [
            // { path: 'details/:id', component: DetailComponent },
            { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
            { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"] },
        ] },
    // { path: 'products/new',component: NewComponent },
    // { path: 'products/edit/:id', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], AppRoutingModule);

// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: #28a745;\r\n    height: 4px;\r\n    width: 90%;\r\n    margin: 20px auto 20px auto;\r\n    /* box-shadow: 0px 0px 15px rgb(255, 255, 255); */\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    width: 170px;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\ntable {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\ntd {\r\n    width: 30%;\r\n}\r\n\r\n.small {\r\n    width: 5%;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin-left: 15px;\r\n    line-height: 19px;\r\n    display: block;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixpREFBaUQ7SUFDakQsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBUUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxtQkFBbUI7O0FBR25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQStCQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogb3V0bGluZTogMXB4IGRvdHRlZCByZWQ7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYzLCAxNTQpO1xyXG59XHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuI2NsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuXHJcbi5zbWFsbCB7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDE2MSwgMCwgMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5oZWFkZXIgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnRoLWJpZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtbWVkaXVtIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi50aC1zbWFsbCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ciB0aC5ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kZWxldGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tZWRpdCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY29tcGxldGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggYmxhY2s7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG59XHJcblxyXG4uYnRuLWFkZDpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlLWJhY2twbGF0ZSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ubGVuZ3RoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbi8qIEVYQU0gU1BFQ0lGSUMgICovXHJcblxyXG5cclxuLnNxdWVlemUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcblxyXG59XHJcblxyXG4ubWlkYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

// getTasks(){
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.getTasks()
//     observable.subscribe(data => {
//         this.tasks = data['results'];
//         this.onetask = null;
//     });
// }
// getOneTask(id:number){
//     this.errors = null;
//     let observable = this._httpService.getOneTask(id)
//     observable.subscribe(data => {
//         this.tasks = null;
//         this.onetask = data['results'];
//     });
// }
// createTask(){
//     this.errors = null;
//     let observable = this._httpService.createTask(this.createtask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.getTasks();
//             this.createtask = {
//                 title: "",
//                 description: ""
//             }
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });       
// }
// deleteTask(id:number){
//     //resets
//     this.errors = null;
//     this.updatetask = null;
//     this.createtask = {
//         title: "",
//         description: ""
//     }
//     let observable = this._httpService.deleteTask(id)
//     observable.subscribe(data => {
//         this.getTasks();
//         this.onetask = null;
//     });
// }
// markComplete(id:number){
//     //resets
//     this.errors = null;
//     let observable = this._httpService.markComplete(id)
//     observable.subscribe(data => {
//         this.getOneTask(id);
//     });
// }
// editTask(){
//     console.log("hereh;rake;jrakj;er")
//     //resets
//     this.createtask = null;
//     this.errors = null;
//     this.updatetask = {
//         title: this.onetask.title,
//         description: this.onetask.description
//     }
// }
// updateTask(id:number){
//     console.log(id)
//     let observable = this._httpService.updateTask(id, this.updatetask)
//     observable.subscribe(data => {
//         if(data["results"]){
//             this.createtask = {
//             title: "",
//             description: ""
//             }
//             this.getOneTask(id);
//             this.updatetask = null;
//         }
//         else if(data["errors"]){
//             this.errors = [];
//             for(let item in data["errors"]){
//                 this.errors.push(data["errors"][item]);
//             }
//         }
//     });
// }


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
            _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nimg {\r\n    width: 100px;\r\n    height: auto;\r\n    border: 1px solid black ;\r\n    box-shadow: 0px 0px 5px black;\r\n    margin: 5px;\r\n}\r\n\r\n/* .btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin-left: 15px;\r\n    line-height: 19px;\r\n    display: block;\r\n} */\r\n\r\n* {\r\n    /* outline: 1px dotted red; */\r\n\r\n}\r\n\r\nbutton {\r\n    width: 60px;\r\n    height: 30px;\r\n    line-height: 5px;\r\n}\r\n\r\n.row {\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBOzs7Ozs7Ozs7R0FTRzs7QUFFSDtJQUNJLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrIDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi8qIC5idG4tZGVsZXRlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG4qIHtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DetailComponent = class DetailComponent {
    constructor(_httpService, _route, _router, _listcomponent) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._listcomponent = _listcomponent;
    }
    ngOnInit() {
    }
    deleteProduct(id) {
        let observable = this._httpService.deleteProduct(id);
        observable.subscribe(data => {
            this._listcomponent.getProducts();
        });
    }
};
DetailComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailComponent.prototype, "prod_price", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailComponent.prototype, "prod_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailComponent.prototype, "prod_url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailComponent.prototype, "prod_id", void 0);
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.outer {\r\n    border: 4px solid #28a745;\r\n    box-shadow: 0px 0px 5px black;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    text-align: center;\r\n    min-height: 200px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\ninput {\r\n    width: 400px;\r\n    margin: 0px auto;\r\n}\r\n\r\n\r\n.errors {\r\n    text-align: left;\r\n    color: red;\r\n}\r\n\r\n\r\n.left {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5vdXRlciB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMjhhNzQ1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditComponent = class EditComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.getOneProduct(params.id);
        });
    }
    getOneProduct(id) {
        this.errors = null;
        let observable = this._httpService.getOneProduct(id);
        observable.subscribe(data => {
            this.updateproduct = data['results'];
        });
    }
    updateProduct(id) {
        let observable = this._httpService.updateProduct(id, this.updateproduct);
        observable.subscribe(data => {
            if (data["results"]) {
                this._router.navigate(['products']);
            }
            else if (data["errors"]) {
                this.errors = [];
                for (let item in data["errors"]) {
                    this.errors.push(data["errors"][item]);
                }
            }
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    })
], EditComponent);

//this._router.navigate(['authors/all'])
// private _route: ActivatedRoute,
// private _router: Router
//import { ActivatedRoute, Params, Router } from '@angular/router';
//ngOnInit
// this._route.params.subscribe(params => {
//             console.log(params);
//             this.id=params.id;
//         })


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    border: 4px solid #28a745;\r\n    box-shadow: 0px 0px 5px black;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    text-align: center;\r\n    min-height: 200px;\r\n}\r\n\r\np {\r\n    font-size: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMjhhNzQ1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.outer {\r\n    border: 4px solid #28a745;\r\n    box-shadow: 0px 0px 5px black;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    text-align: center;\r\n    min-height: 200px;\r\n    font-size: 20px;\r\n}\r\n\r\n.card {\r\n    border: 4px solid #28a745;\r\n    box-shadow: 0px 0px 5px black;\r\n    /* margin: 20px; */\r\n    padding: 30px;\r\n    height: 400px;\r\n    width: 200px;\r\n    font-size: 20px;\r\n    vertical-align: center;\r\n}\r\n\r\n.division {\r\n    background-color: #28a745;\r\n    height: 4px;\r\n    width: 90%;\r\n    margin: 20px auto 20px auto;\r\n    /* box-shadow: 0px 0px 15px rgb(255, 255, 255); */\r\n    display: block;\r\n}\r\n\r\n.reset {\r\n    height: 400px;\r\n    width: 200px;\r\n    display: inline-block;\r\n    margin: 20px;\r\n}\r\n\r\n* {\r\n    /* outline: 1px dotted red; */\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixpREFBaUQ7SUFDakQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7O0FBRWpDIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYub3V0ZXIge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzI4YTc0NTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcclxuICAgIC8qIG1hcmdpbjogMjBweDsgKi9cclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4qIHtcclxuICAgIC8qIG91dGxpbmU6IDFweCBkb3R0ZWQgcmVkOyAqL1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");



let ListComponent = class ListComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        let observable = this._httpService.getProducts();
        observable.subscribe(data => {
            this.allproducts = data['results'];
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.outer {\r\n    border: 4px solid #28a745;\r\n    box-shadow: 0px 0px 5px black;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    text-align: center;\r\n    min-height: 200px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\ninput {\r\n    width: 400px;\r\n    margin: 0px auto;\r\n}\r\n\r\n\r\n.errors {\r\n    text-align: left;\r\n    color: red;\r\n}\r\n\r\n\r\n.left {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm91dGVyIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewComponent = class NewComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        console.log("init on new");
        this.createproduct = {
            name: "",
            price: "",
            url: ""
        };
        this.errors = null;
    }
    createProduct() {
        this.errors = null;
        let observable = this._httpService.createProduct(this.createproduct);
        observable.subscribe(data => {
            if (data["results"]) {
                this.createproduct = {
                    name: "",
                    price: "",
                    url: ""
                };
                this._router.navigate(['/products']);
            }
            else if (data["errors"]) {
                this.errors = [];
                for (let item in data["errors"]) {
                    this.errors.push(data["errors"][item]);
                }
            }
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")).default]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TaskService = class TaskService {
    constructor(_http) {
        this._http = _http;
    }
    getProducts() {
        return this._http.get('/api/products');
    }
    getOneProduct(id) {
        return this._http.get(`/api/product/${id}`);
    }
    createProduct(data) {
        return this._http.post('/api/product/create', data);
    }
    deleteProduct(id) {
        return this._http.delete(`/api/product/destroy/${id}`);
    }
    updateProduct(id, data) {
        return this._http.put(`/api/product/update/${id}`, data);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\X-Chill-X\Github\Product_Manager\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map