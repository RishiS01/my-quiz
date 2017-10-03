webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

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

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid\">\n\n<flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_loaders_css__ = __webpack_require__("../../../../angular2-loaders-css/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_loaders_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_loaders_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__ = __webpack_require__("../../../../ngx-dropzone-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/components/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_quiz_add_quiz_component__ = __webpack_require__("../../../../../src/app/components/add-quiz/add-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_result_result_component__ = __webpack_require__("../../../../../src/app/components/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_quiz_questions_quiz_questions_component__ = __webpack_require__("../../../../../src/app/components/quiz-questions/quiz-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_edit_question_edit_question_component__ = __webpack_require__("../../../../../src/app/components/edit-question/edit-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_start_quiz_start_quiz_component__ = __webpack_require__("../../../../../src/app/components/start-quiz/start-quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Firebase services import



// Loader Css import

//Dropzone import

// Components import











// Services import



// import Facebookmodule

//RoutesConfigration
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__["a" /* UserComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'quiz/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_quiz_quiz_component__["a" /* QuizComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'quiz-questions/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_quiz_questions_quiz_questions_component__["a" /* QuizQuestionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'result/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_result_result_component__["a" /* ResultComponent */] },
    { path: 'edit-question/:id/:qid', component: __WEBPACK_IMPORTED_MODULE_19__components_edit_question_edit_question_component__["a" /* EditQuestionComponent */] },
    { path: 'start-quiz/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_start_quiz_start_quiz_component__["a" /* StartQuizComponent */] },
    { path: 'add-quiz', component: __WEBPACK_IMPORTED_MODULE_16__components_add_quiz_add_quiz_component__["a" /* AddQuizComponent */] }
];
// dropzone configration
var dropzone_config = {
    url: 'https://httpbin.org/post',
    // url: "/file/post",
    maxFilesize: 5,
    maxFiles: 1,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    uploadMultiple: false,
};
var firebaseConfig = {
    apiKey: "AIzaSyBRqMetE-hOgEnlzvJwPf4FY334mXWEaEk",
    authDomain: "quizapp-22d9f.firebaseapp.com",
    databaseURL: "https://quizapp-22d9f.firebaseio.com",
    projectId: "quizapp-22d9f",
    storageBucket: "quizapp-22d9f.appspot.com",
    messagingSenderId: "830872795834"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_quiz_questions_quiz_questions_component__["a" /* QuizQuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_quiz_questions_quiz_questions_component__["a" /* QuizQuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_edit_question_edit_question_component__["a" /* EditQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_start_quiz_start_quiz_component__["a" /* StartQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_add_quiz_add_quiz_component__["a" /* AddQuizComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__["DropzoneModule"].forRoot(dropzone_config),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_loaders_css__["LoadersCssModule"],
            __WEBPACK_IMPORTED_MODULE_24_ngx_facebook__["a" /* FacebookModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_quiz_service__["a" /* QuizService */],
            __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-quiz/add-quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container{\n\theight: 250px;\n\twidth: 250px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin:0px 100px 0px 100px;\n\tposition: relative;\n}\n.remove{\n\tcolor: red;\n\tposition: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 25px;\n   \n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 100px;\n    width: 250px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\nimg{\n    max-width: 100%;\n    /*margin: 0 auto;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-quiz/add-quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"panel panel-primary\" >\n\t\t<div class=\"panel-heading\">New Quiz</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<form #f = \"ngForm\" (ngSubmit) = \"addQuiz(f)\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for = \"text\">Enter Name Of Quiz</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\"  [(ngModel)]='quiz.quizName' name=\"quizName\" required=\"quizName\" #quizName = \"ngModel\" placeholder=\"Quiz Name\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"quizName?.errors?.required && quizName?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\tName Required\n\t\t\t\t</div>\n\n\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\t\t\t\t<div class=\"container image-container \" *ngIf = \"quiz.image\">\n\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"onDeleteImage()\"></a>\n\t\t\t\t\t<img src=\"{{quiz.image}}\" >\n\t\t\t\t</div>\n\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (success)=\"onUploadSuccess($event)\" *ngIf = \"!quiz.image\">\n\t\t\t\t\t<div class=\"dz-message\" data-dz-message>\n\t\t\t\t\t\t<div class=\"dropzone-div\"><span class=\"dropzone-text\">Add title image</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<button type=\"submit\" class=\"btn btn-success pull-right\" (click) = \"addQuiz(f)\">Save</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-quiz/add-quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var AddQuizComponent = (function () {
    function AddQuizComponent(quizService, router, route, flashMessagesService) {
        this.quizService = quizService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.quizData = [];
        this.quiz = {
            quizName: '',
            image: ''
        };
    }
    AddQuizComponent.prototype.ngOnInit = function () {
    };
    AddQuizComponent.prototype.addQuiz = function (f) {
        var $this = this;
        if (typeof this.quiz.image === typeof undefined) {
            delete this.quiz.image;
        }
        this.quiz.quizName = f.value.quizName;
        this.quizService.newQuiz(this.quiz).then(function (ref) {
            $this.key = ref.key;
            $this.router.navigate(['/quiz/' + ref.key]);
        });
        this.flashMessagesService.show('New Quiz Added', { cssClass: 'alert-success', timeout: 2000 });
    };
    AddQuizComponent.prototype.onDeleteImage = function (image) {
        if (confirm("Are you sure?")) {
            var image_1 = this.quiz.image;
            delete this.quiz.image;
        }
    };
    AddQuizComponent.prototype.onUploadSuccess = function ($event) {
        console.log($event);
        this.quiz.image = $event[0].dataURL;
        console.log(this.quiz.image);
    };
    return AddQuizComponent;
}());
AddQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-quiz',
        template: __webpack_require__("../../../../../src/app/components/add-quiz/add-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-quiz/add-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddQuizComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\n.remove{\n\tcolor:red;\n}\nimg{\n\tmax-width: 100%;\n\tmargin: 0 auto;\n}\n.image-container{\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n}\n\n.loader{\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 10px solid white;\n  border-radius: 50%;\n  border-top: 10px solid black;\n  \n  width: 100px;\n  height: 100px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2 pull-right\">\n\t\t\t<div>\n\t\t\t\t<a href=\"#\" routerLink =\"/add-quiz\" class=\"btn btn-success pull-right\"> <span class=\"glyphicon glyphicon-plus\"></span> Add Quiz</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<br>\n\t\t<div>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor = \"let q of quizzes\" class=\"col-md-4\">\n\t\t\t\t\t<div class=\"panel panel-default \">\n\t\t\t\t\t\t<div class=\"panel-heading\"><b> {{q.quizName}}</b><span class=\"glyphicon glyphicon-remove pull-right remove\" (click) = \"onDelete(q)\"></span>\n\t\t\t\t\t\t<!-- <a [routerLink] =\"['/quiz/'+q.$key]\" href=\"\" class=\"glyphicon glyphicon-pencil pull-right edit\"></a> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"container image-container\">\n\t\t\t\t\t\t\t<img src=\"{{q.image}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button [routerLink] =\"['/quiz/'+q.$key]\" class=\"btn btn-primary pull-right \">Edit Quiz</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"loader\" *ngIf= \"loader\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
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




var DashboardComponent = (function () {
    function DashboardComponent(router, route, quizService, flashMessagesService) {
        this.router = router;
        this.route = route;
        this.quizService = quizService;
        this.flashMessagesService = flashMessagesService;
        this.quiz = {
            quizName: '',
            image: ''
        };
        this.quizData = [];
        this.loader = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.loader = true;
        this.quizService.getQuiz().subscribe(function (data) {
            _this.loader = false;
            _this.quizzes = data;
        });
    };
    DashboardComponent.prototype.onDelete = function (q) {
        if (confirm("Are you sure?")) {
            this.quizService.deleteQuiz(q);
            this.flashMessagesService.show("Quiz Deleted Successfully", { cssClass: 'alert-success', timeout: 2000 });
            this.router.navigate(['/dashboard']);
            console.log(q);
        }
    };
    DashboardComponent.prototype.onUploadSuccess = function ($event) {
        console.log($event);
        this.quiz.image = $event[0].dataURL;
        console.log(this.quiz.image);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-question/edit-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check{\n\tmargin-top: 30px;\n\t\n}\n.add{\n\tmargin-top: 30px;\n}\n.cut{\n\tmargin-left: 60px;\n}\nimg{\n\tmax-width: 100%;\n  margin: 0 auto;\n\tpadding: 10px;\n}\n.image-container{\n  height: 300px;\n  width: 300px;\n  display: -ms-grid;\n  display: grid;\n  margin: 0 auto;\n}\n\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 80px;\n  width: 180px;\n  position: relative;\n  border: 1px dotted black;\n  margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n\n}\n.image-container{\n  height: 250px;\n  width: 250px;\n  display: -ms-grid;\n  display: grid;\n  margin:0px 100px 0px 100px;\n  position: relative;\n}\n.remove{\n  color: red;\n  position: absolute;\n  right: 0;\n  text-decoration: none;\n  padding-top: 25px;\n   \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-question/edit-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a href=\"#\" [routerLink] =\"['/quiz/'+pid]\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to quiz </a>\n</div>\n\n<div  class=\"container\">\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">Edit Question and Answers</div>\n\t\t<div class=\"panel-body\" >\n\t\t\t<form (submit) = \"onUpdate()\" >\n\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t<label for=\"text\" >Question:</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)] = \"question\" name=\"question\" class=\"form-control\" placeholder=\"Question\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\" *ngFor = \"let answer of answers; let i = index \">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<label for=\"text\" >Answer:</label>\n\t\t\t\t\t\t<input type=\"text\" [value] = \"answer.name\" (input) = \"answer.name = $event.target.value\" class=\"form-control\" name=\"name\"  placeholder=\"Answer\" *ngIf =\"!answer.image\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"container image-container\" *ngIf = \"answer.image \">\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"onDeleteImage(i)\"></a>\n\t\t\t\t\t\t\t<img src=\"{{answer.image}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (addedfile)=\"onImageAdded($event,i)\" *ngIf = \"!answer.image\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message>\n\t\t\t\t\t\t\t\t<div class=\"dropzone-div\" ><span class=\"dropzone-text\">Add image as an answer</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class = \"col-sm-2 check\">\n\t\t\t\t\t\t<input type=\"checkbox\"  [checked] = \"answer.isCorrectAnswer\" (change) = \"answer.isCorrectAnswer = !answer.isCorrectAnswer\" name=\"isCorrectAnswer\" >\n\t\t\t\t\t\t<span>Mark As Correct</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 add\">\n\t\t\t\t\t\t<a  class=\"btn btn-danger\"  (click)=\"removeAnswer(answer,i)\" >Delete</a>\n\t\t\t\t\t\t<a *ngIf=\"showAdd(answer)\" class=\"btn btn-primary\" (click) = \"addNewAnswer()\">Add More Options</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<button  class=\"btn btn-primary pull-right\" type=\"submit\">Submit </button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-question/edit-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditQuestionComponent = (function () {
    function EditQuestionComponent(router, flashMessagesService, quizService, route) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.quizService = quizService;
        this.route = route;
        this.quizData = [];
        this.answers = [{ id: new Date().valueOf(),
                name: '',
                isCorrectAnswer: false
            }];
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pid = this.route.snapshot.params['id'];
        this.cid = this.route.snapshot.params['qid'];
        this.quizService.getQuiz().subscribe(function (data) {
            _this.quizzes = data;
        });
        this.quizService.getQuizQuestion(this.pid, this.cid).subscribe(function (data) {
            _this.question = data.question;
            _this.answers = data.answers;
        });
        console.log(this.quizData);
    };
    EditQuestionComponent.prototype.showAdd = function (answer) {
        return answer.id === this.answers[this.answers.length - 1].id;
    };
    EditQuestionComponent.prototype.addNewAnswer = function () {
        this.answers.push({
            id: new Date().valueOf(),
            name: '',
            isCorrectAnswer: false
        });
    };
    EditQuestionComponent.prototype.removeAnswer = function (answer, i) {
        var len = this.answers.length - 1;
        if (confirm("Are you sure?")) {
            if (len !== 0) {
                this.answers.splice(i, 1);
            }
        }
    };
    ;
    EditQuestionComponent.prototype.onUpdate = function () {
        var key = this.cid;
        var qu = {
            question: this.question,
            answers: this.answers
        };
        this.quizService.updateQuiz(this.pid, this.cid, qu);
        this.flashMessagesService.show("Question updated", { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/quiz/' + this.pid]);
    };
    EditQuestionComponent.prototype.onDeleteImage = function (i) {
        if (confirm("Are you sure?")) {
            delete this.answers[i].image;
        }
    };
    EditQuestionComponent.prototype.onImageAdded = function (file, i) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.answers[i].image = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return EditQuestionComponent;
}());
EditQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-question',
        template: __webpack_require__("../../../../../src/app/components/edit-question/edit-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-question/edit-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], EditQuestionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-question.component.js.map

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

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3 \">\n\t\t<div class=\"panel panel-group\">\n\t\t\t<div class=\"panel-heading text-center\">\n\t\t\t\t\n\t\t\t\t<h2 class=\"text-center\">Admin Login</h2>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form (submit) = \"onLoginSubmit()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\" >Email:</label>\n\t\t\t\t\t\t<input type=\"email\" [(ngModel)] = \"email\" name=\"email\" class=\"form-control\" required placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\" >Password:</label>\n\t\t\t\t\t\t<input type=\"password\" [(ngModel)] = \"password\" name=\"password\" required class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\">Submit </button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function LoginComponent(router, flashMessagesService, authService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show("You have successfully Login", { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            _this.router.navigate(['/login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

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

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Test Your Skills</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <!-- <li *ngIf = 'isLoggedIn'><a href=\"#\" routerLink =\"/\">Dashboard</a></li> -->\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf = '!isLoggedIn'><a href=\"#\" routerLink =\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\n      </li>\n      \n      <li *ngIf = 'isLoggedIn'><a href=\"#\" routerLink = '/dashboard' >{{isloggedInUser}}</a></li>\n      <li *ngIf = 'isLoggedIn'><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function NavbarComponent(router, flashMessagesService, authService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.isloggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.flashMessagesService.show('You have LoggedOut Successfully', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/quiz-questions/quiz-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".remove{\n\tcolor: red;\n}\n.check{\n\tmargin-top: 30px;\n\t\n}\n.add{\n\tmargin-top: 30px;\n}\n.cut{\n\tmargin-left: 60px;\n}\nh5{\n\tcolor: red;\n}\n\nimg{\n\tmax-width: 30%;\n\tmargin-left: 50px;\n\t\n}\n.image-container{\n\theight: 50px;\n\twidth: 80px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin:0px 100px 0px 100px;\n\tposition: relative;\n}\n.remove{\n\tcolor: red;\n\tposition: absolute;\n    right: 100px;\n    text-decoration: none;\n    padding-top: 25px;\n   \n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 80px;\n    width: 180px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-questions/quiz-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div >\n\t\t<a href=\"#\" [routerLink] =\"['/quiz/'+key]\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to quiz data</a>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"row\" >\n\t\t<div class=\"container\" >\n\t\t\t<h4><strong>Note:</strong></h4><h5>*Please fill all the fields</h5>\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">Quiz Name: {{quiz.quizName}}</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form  #addQuestionForm = \"ngForm\" (submit) = \"onAddQuestionSubmit(qu)\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Question:</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)] =\"question\"\n\t\t\t\t\t\t\tname=\"question\" placeholder=\"Question\" required >\n\t\t\t\t\t\t\t<div *ngIf = \"question?.errors?.required && question?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\tQuestion Required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group row\" *ngFor = \"let answer of answers ; let i = index \">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\" >\n\t\t\t\t\t\t\t\t<label for=\"text\" >Answer:</label>\n\t\t\t\t\t\t\t\t<input *ngIf=\"answer.image === '' \"  type=\"text\" [value] = \"answer.name\" (input) = \"answer.name = $event.target.value\"\n\t\t\t\t\t\t\t\tname=\"name\"  class=\"form-control\"\n\t\t\t\t\t\t\t\tplaceholder=\"Answer\" required=\"name\" >\n\t\t\t\t\t\t\t\t<!-- {{answer.name}} -->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div *ngIf= \"answer.image || answer.name\">\n\t\t\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"onDeleteImage(image,i)\" *ngIf = answer.image></a>\n\t\t\t\t\t\t\t\t\t<img src=\"{{answer.image}}\" *ngIf = \" !answer.name \">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div *ngIf = \"name?.errors.required && name?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\tAnswer Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onAnswerUploadError($event)\" (addedfile)=\"onAddFile($event)\" (success)=\"onAnswerUploadSuccess($event,i)\" name = \"image\" *ngIf = \"!answer.image \">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message >\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div\" *ngIf= !answer.name><span class=\"dropzone-text\" >Add image as an answer</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class = \"col-sm-2 check\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [checked] = \"answer.isCorrectAnswer\" (change) = \"answer.isCorrectAnswer = !answer.isCorrectAnswer\" name=\"isCorrectAnswer\" >\n\t\t\t\t\t\t\t\t<span>Mark As Correct</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 add\">\n\t\t\t\t\t\t\t\t<a  class=\"btn btn-danger\"  (click)=\"removeAnswer(answer,i)\" >Delete</a>\n\t\t\t\t\t\t\t\t<a *ngIf=\"showAdd(answer)\" class=\"btn btn-primary\" (click) = \"addNewAnswer()\">Add More Options</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button  class=\"btn btn-primary pull-right\" type=\"submit\" [disabled] = \"addQuestionForm.invalid\" >Submit </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n"

/***/ }),

/***/ "../../../../../src/app/components/quiz-questions/quiz-questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizQuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizQuestionsComponent = (function () {
    function QuizQuestionsComponent(router, flashMessagesService, quizService, route) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.quizService = quizService;
        this.route = route;
        this.answers = [{
                id: new Date().valueOf(),
                name: '',
                isCorrectAnswer: false,
                image: ''
            }];
        this.quiz = {
            quizName: '',
            image: ''
        };
        this.loader = false;
    }
    QuizQuestionsComponent.prototype.ngOnInit = function () {
        this.key = this.route.snapshot.params['id'];
        console.log(this.key);
    };
    QuizQuestionsComponent.prototype.showAdd = function (answer) {
        return answer.id === this.answers[this.answers.length - 1].id;
    };
    QuizQuestionsComponent.prototype.addNewAnswer = function () {
        this.answers.push({
            id: new Date().valueOf(),
            name: '',
            image: '',
            isCorrectAnswer: false
        });
    };
    QuizQuestionsComponent.prototype.removeAnswer = function (answer, i) {
        answer = this.answers.length - 1;
        if (confirm("Are you sure?")) {
            if (answer !== 0) {
                this.answers.splice(i, 1);
            }
        }
    };
    ;
    QuizQuestionsComponent.prototype.onAddQuestionSubmit = function () {
        var key = this.key;
        var qu = {
            question: this.question,
            answers: this.answers
        };
        console.log(qu);
        this.quizService.addQuestion(qu, this.key);
        this.flashMessagesService.show('New Question added', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/quiz/' + this.key]);
    };
    QuizQuestionsComponent.prototype.onDeleteImage = function (image, i) {
        if (confirm("Are you sure?")) {
            var image_1 = this.answers[i].image;
            delete this.answers[i].image;
        }
    };
    QuizQuestionsComponent.prototype.onAddFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.quiz.image = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    QuizQuestionsComponent.prototype.onAnswerUploadSuccess = function ($event, i) {
        this.answers[i].image = $event[0].dataURL;
        console.log(this.answers[i].image);
    };
    return QuizQuestionsComponent;
}());
QuizQuestionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quiz-questions',
        template: __webpack_require__("../../../../../src/app/components/quiz-questions/quiz-questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/quiz-questions/quiz-questions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], QuizQuestionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=quiz-questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thead-inverse{\n\tbackground-color:grey;\n\tcolor: white;\n}\n.condition{\n\tcolor:red;\n\ttext-align: center;\n}\nimg{\n\tmax-width: 100%;\n\t/*margin: 0 auto;*/\n}\n.image-container{\n\theight: 250px;\n\twidth: 250px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin:25px 100px 0px 100px;\n\tposition: relative;\n}\n.remove{\n\tcolor: red;\n\tposition: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 5px;\n   \n}\n.deleteQuestion{\n\t/*padding-right: 10px;*/\n\tmargin-right: 20px;\n\n}\ninput{\n\tmargin-top: \n}\n.submitAddQuiz{\n\t/*margin-right: 20px;*/\n}\n.questionEdit{\n\tmargin-left: 10px;\n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 100px;\n    width: 250px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n\n}\n\n\n/*.dz-preview {\n\tdisplay: none;\n}\n*/\n\t\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a href=\"#\" routerLink = '/dashboard' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to dashboard</a>\n</div>\n<div class=\"container\">\n\t<div>\n\t\t<a href=\"#\" [routerLink] =\"['/quiz-questions/'+pid ]\" class=\"btn btn-success pull-right\"> <span class=\"glyphicon glyphicon-plus\"></span> Add Questions</a>\n\t</div>\n</div>\n<br>\n<br>\n<div>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\"><h5><b>Quiz Name:</b> {{quiz.quizName}}</h5></div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form #f = 'ngForm' (ngSubmit) = \"onEditQuiz(f)\">\n\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t<label for = \"text\">Edit Name Of Quiz:</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  [(ngModel)]='quiz.quizName' name=\"quizName\" >\n\t\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\t\t\t\t\t\t\t<div [dropzone]=\"config\"  (addedfile)=\"onImageAdded($event)\" name = \"image\"  *ngIf = \"!quiz.image\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div\" ><span class=\"dropzone-text\">Add title image</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\" col-md-4 image-container \" *ngIf = \"quiz.image\">\n\t\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"onDeleteImage()\"></a>\n\t\t\t\t\t\t\t\t<img src=\"{{quiz.image}}\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"  btn btn-primary pull-right submitAddQuiz\" (click) = \"onEditQuiz(f)\">Update</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<br>\n<br>\n<div class=\"container\">\n\t<table *ngIf = \"quizData.length >0 ; else noQuestions\" class =\"table table-stripped\">\n\t\t<thead  class=\"thead-inverse\">\n\t\t\t<tr>\n\t\t\t\t<th>Q.No</th>\n\t\t\t\t<th>Question</th>\n\t\t\t\t<th width=\"15%\">Options</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let q of quizData ; let i = index \">\n\t\t\t\t<td>{{i + 1}}</td>\n\t\t\t\t<td>{{q?.question}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span [routerLink] = \"['/edit-question/'+pid,q.id]\" class=\"btn btn-default btn-sm glyphicon glyphicon-pencil questionEdit\">Edit</span>\n\t\t\t\t\t\t<span class=\"btn btn-danger btn-sm glyphicon glyphicon-trash pull-right deleteQuestion\" (click) = \"onDeleteQuestion(q,i)\">Delete</span>\n\t\t\t\t\t</div></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t\n\t\t</table>\n\t\t<ng-template #noQuestions>\n\t\t<h4 class=\"condition\">No Questions to show</h4>\n\t\t</ng-template>\n\t</div>\n\t"

/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    function QuizComponent(quizService, router, route, flashMessagesService) {
        this.quizService = quizService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.quizData = [];
        this.quiz = {
            quizName: '',
            image: '',
            quizData: [],
        };
        this.loader = false;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pid = this.route.snapshot.params['id'];
        console.log(this.pid);
        this.quizService.onEditQuizData(this.pid).subscribe(function (data) {
            _this.quiz.quizName = data.quizName;
            _this.quiz.image = data.image;
            _this.quiz.quizData = data.quizData;
            _this.quizData = [];
            if (typeof data.$value === typeof undefined) {
                for (var id in data.quizData) {
                    _this.quizData.push(__assign({}, data.quizData[id], { id: id }));
                    console.log(_this.quizData);
                }
            }
        });
    };
    QuizComponent.prototype.onDeleteQuestion = function (q) {
        if (confirm("Are you sure?")) {
            this.quizService.delete_question(q, this.pid);
            console.log(this.pid);
            this.flashMessagesService.show('Question deleted successfully', { cssClass: 'alert-success', timeout: 2000 });
            this.router.navigate(['/quiz/' + this.pid]);
        }
    };
    QuizComponent.prototype.onEditQuiz = function (f) {
        var key = this.pid;
        if (typeof this.quiz.image === typeof undefined) {
            delete this.quiz.image;
        }
        if (typeof this.quiz.quizData === typeof undefined) {
            delete this.quiz.quizData;
        }
        this.quiz.quizName = f.value.quizName,
            console.log(f.value.quizName);
        console.log(this.quiz.image);
        this.quizService.onEditUpdate(this.pid, this.quiz);
        this.flashMessagesService.show('Quiz Name updated', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/dashboard']);
    };
    QuizComponent.prototype.onDeleteImage = function (image) {
        if (confirm("Are you sure?")) {
            var image_1 = this.quiz.image;
            delete this.quiz.image;
        }
    };
    QuizComponent.prototype.onImageAdded = function (file) {
        var _this = this;
        console.log("added");
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.quiz.image = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__("../../../../../src/app/components/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/quiz/quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], QuizComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right{\n\tcolor: green;\n}\n.wrong{\n\tcolor: red;\n}\nh3{\n\ttext-align: center;\n}\nli{\n\tlist-style: none;\n}\nimg{\n\tmax-width: 30%;\n\tmargin: 10px;\n\tpadding: 10px;\n}\nh2{\n\ttext-align: center;\n\tcolor: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"row\">\n\t\t<div>\n\t\t\t<a href=\"#\" routerLink =\"/\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Home Page</a>\n\t\t</div>\n\t\t<div>\n\t\t\t<h2>Congratulations</h2>\n\t\t\t<h3>Result:{{a | number: '1.2-2'}}%</h3>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<a href=\"https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://my-quiz-app-in.herokuapp.com/&p[images][0]=&p[title]=QuizApp&p[summary]=TEST\" target=\"_blank\" onclick=\"window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAUCAMAAAAA9GVfAAACnVBMVEU0TI01TIw1TY01TY41TY81To82TY42TY85UZU6U5k7VJs7VZ07VaE8VZs8Vp08VqE8VqI8V6I9Vp49V6A9V6M+WJ8+WKA+WKQ+WaQ+WaU/WaM/WaQ/WaY/WqY/WqdAW6ZAW6dAW6hBW6dBXKhBXKlCXapCXatCXqpCXqxDXqtDXqxDX6xEX65EYK5EYK9FX65FYK9FYa9FYbBGYbBGYrFGYrJHYrFHY7JHY7NIZLNIZLRIZbRJZbVJZrZKZrZKZ7dLZ7hLaLhLaLlMablSaKpSaaxTaq1ZcbVbc7hfdLJfdbNfdbRfdrZgdrdhd7dhe8Fiebtie8Fofr9qgcFsgb5shMVthcZugrhugrtvgrxwhL1whL5xhb9xhcBzh8JziL9ziMJziMN1isV1isZ2iL12ir52isF5jMWAjreAk8eEk7+ElMOFlseFmMiIl7yKmsqOnL+RnsGSnsGVpdCXp9SeqsmfrNKfrNOfrdSgrdOgrdSgrtOgrtWhrtShrtWhr9Sir9WisNaisNejsNimstWoss+qtM+suNesudyuudmwvNyyvNazvNizvdqzvtqzvtu0vtu0vty0v9y0v961v921v962v9i3v9a3wd24wt65wtu5w+G8xeG8xuG9xNq+xtzAyeHAyePByuHCyd7Dy+DEzOPFzOHGz+fGz+nJ0OLL0uXN1OjP1urQ1+vS1+bS2OfT2evU2uzV2+vW2+jY3evZ3uzZ3u3b4O7c4vHd4ezd4/Le4/Df4+3f4+/g5PHg5fHh5vHk5/Dk6PLn6vXo6/Xo7Pbp7PTq7fbr7vTr7vbt8Pbx8vfx8vjx8/j09fr09vn19vr19/v29/r3+Pv5+vz6+/z6+/37+/37/P78/P38/P78/f79/f7+/v////+ZYdejAAACCUlEQVR4AWNYEebkTAYMXMHg7+BIFgxlsLMnEzLY2tja7LqHBHYARYiBDFbWVtb3UABQhBjIYGlhaQHTszw5uOTePZCIpakoEwOvmQarMpCNHTKYmJuYQzUeBbKT7t0DiZj4rbtzd09K49UpQDZ2yGBibGIM1dlsEnQESIFETFquL+i4sbzhajcbs5SxkRATA6e+PCMHs5IYMxOfAVgFg56hniFUZ5NeIogCiehNvjuPS12v/uqxazcXa3uvv3P3YOqke6duzVx5687mcLAKBl0dXR2wviNNcboeTbPv3QOJ6KYfv7szT6L26u6EQ6czu85ktd6cOOnepoBZF4oKLy0Dq2DQ0tbSButcC2JpFd+7B6a1QxZevD2t+uoMrVXnc13a9l65N2HCvQnaW0Aq94FVMGiqaaqBdR6uidV0r1lz7x5IRJObRTr+xLEZV/s1V53PWXJ9afvVfqBOta3ns6XZhcEqGFRUVVSh/qxTiQFRIBGV1ddKM84e6LzapwLUue1ywfy7Pb33elXn3J5eemUuWAWDiqKKIlRnlUo0WKciEKbtv3P3ZH7ttSkqqy/mVJy7e/zyhqn3pir6brh1Z6MPWAWDnIKcAlRnpVwUiAKKEAMZZGVkZaA6y2UjQRRQhBjIIC4pLrkdorNMPAJIbgeKEAMZxEXIhAxuggJkQS+GRZ78PGRA10UAUdSA0BPiLlkAAAAASUVORK5CYII=\" width=\"100\" height=\"80\" /></a>\n\t\t\t<!-- <div>\n          \t\t<button class=\"btn btn-medium\"\n                  socialshare\n                  socialshare-provider=\"facebook\"\n                  socialshare-type=\"share\"\n                  socialshare-via=\"273601576467343\"\n                  socialshare-media=\"http://720kb.net/assets/img/720kb-fb.png\"\n                  socialshare-quote=\"TEST\"\n                  socialshare-title=\"QuizApp\"\n                  \n                  \n                  socialshare-url='https://my-quiz-app-in.herokuapp.com/'\n                  socialshare-trigger=\"click\">\n               Share on Facebook (share dialog)\n         \t\t </button>\n        </div>\n -->\n\n\t\t</div>\n\t</div>\n\t<div class=\"container\">\n\t\t<div class=\"panel panel-default\" *ngFor = \"let q of userAnswers ; let i = index \">\n\t\t\t<div class=\"panel-heading\">Question {{i + 1}}: {{q?.question}}</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor = \"let answer of  q.answers; let i = index \">\n\t\t\t\t\t\t{{answer.name}}\n\t\t\t\t\t\t<span *ngIf = \"(answer.userAnswer  && answer.isCorrectAnswer === answer.userAnswer) || answer.isCorrectAnswer\" class=\"glyphicon glyphicon-ok right\"></span>\n\t\t\t\t\t\t<span *ngIf = \"(answer.userAnswer && answer.isCorrectAnswer !== answer.userAnswer)\"  class=\"glyphicon glyphicon-remove wrong\"></span>\n\t\t\t\t\t\t<img src=\"{{answer.image}}\" *ngIf = \"!answer.name \">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"alert {{ isCorrect(q) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(q)}}.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<button routerLink = \"/\" class=\"btn btn-success btn-block\" >Thank You</button>\n\t</div>\n<!-- \t<div id=\"fb-root\"></div>\n\t<script>\n\twindow.fbAsyncInit = function() {\n\tFB.init({\n\tappId            : '273601576467343',\n\tautoLogAppEvents : true,\n\txfbml            : true,\n\tversion          : 'v2.10'\n\t});\n\tFB.AppEvents.logPageView();\n\t};\n\t(function(d, s, id) {\n\tvar js, fjs = d.getElementsByTagName(s)[0];\n\tif (d.getElementById(id)) return;\n\tjs = d.createElement(s); js.id = id;\n\tjs.src = \"//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=273601576467343\";\n\tfjs.parentNode.insertBefore(js, fjs);\n\t}(document, 'script', 'facebook-jssdk'));</script> -->\n\n\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(router, quizService, route, facebookService) {
        this.router = router;
        this.quizService = quizService;
        this.route = route;
        this.facebookService = facebookService;
        this.quizData = [];
        this.userAnswers = [{
                answers: []
            }];
        this.isCorrectAnswer = true;
        this.correctAnswers = 0;
        this.answers = [{
                id: new Date().valueOf(),
                name: '',
                isCorrectAnswer: false,
                image: ''
            }];
        var initParams = {
            appId: '273601576467343',
            xfbml: true,
            version: 'v2.10'
        };
        facebookService.init(initParams);
    }
    ResultComponent.prototype.ngOnInit = function () {
        var qArray = [];
        var answers = [];
        var $this = this;
        this.id = this.route.snapshot.params['id'];
        this.userAnswers = this.quizService.getUserAnswers();
        this.userAnswers.forEach(function (qArray) {
            qArray.answers.forEach(function (i) {
                if (i.userAnswer == undefined) {
                    i.userAnswer = false;
                }
            });
            var answerCount = 0;
            var y = qArray.answers.length;
            qArray.answers.map(function (x) {
                if (x.isCorrectAnswer === x.userAnswer) {
                    answerCount++;
                }
            });
            if (y === answerCount) {
                $this.correctAnswers++;
                console.log($this.correctAnswers);
            }
        });
        this.score();
    };
    ResultComponent.prototype.isCorrect = function (question) {
        return question.answers.every(function (x) { return x.isCorrectAnswer === x.userAnswer; }) ? 'correct' : 'wrong';
    };
    ResultComponent.prototype.score = function () {
        this.a = this.correctAnswers / this.userAnswers.length * 100;
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/components/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/result/result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */]) === "function" && _d || Object])
], ResultComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/start-quiz/start-quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nh5{\n\tcolor:blue; \n}\nimg{\n\t\n\tmax-width: 30%;\n\tmargin: 10px;\n\tpadding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start-quiz/start-quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a href=\"#\" routerLink = '/' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Main Page</a>\n</div>\n<div class=\"container\">\n\t<div>\n\t\t<h4><b>Note:</b></h4><h5>*You can select Multiple Answers also</h5>\n\t</div>\n\t<div class=\"panel panel-default\" *ngFor = \"let q of quizData ; let i = index \">\n\t\t<div class=\"panel-heading\"><strong>Question {{i + 1}}:</strong> {{q?.question}}</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<ul *ngFor = \"let answer of  q.answers; let i = index \">\n\t\t\t\t<li>\n\t\t\t\t\t<input type=\"checkbox\" [checked] = \"answer.userAnswer\" (change) = \"answer.userAnswer = answer.userAnswer ? undefined : true\" name=\"userAnswer\">\n\t\t\t\t\t{{answer.name}}\n\t\t\t\t\t<div *ngIf = \"answer.image || answer.name; else noimage \">\n\t\t\t\t\t\t<img src=\"{{answer.image}}\" *ngIf = \" !answer.name \">\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<button class=\"btn btn-success btn-block\" (click) = \"result()\">Finish</button>\n\t<ng-template #noimage>\n\t\t<h5 class=\"condition\">No Image to Display</h5>\n\t</ng-template>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/start-quiz/start-quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartQuizComponent = (function () {
    function StartQuizComponent(quizService, router, route) {
        this.quizService = quizService;
        this.router = router;
        this.route = route;
        this.quizData = [];
        this.selected = null;
    }
    StartQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.quizService.getQuizData(this.id).subscribe(function (data) {
            for (var id in data) {
                _this.quizData.push(__assign({}, data[id]));
            }
        });
        console.log(this.quizData);
    };
    StartQuizComponent.prototype.result = function () {
        this.quizService.userAnswers(this.quizData);
        this.router.navigate(['/result/' + this.id]);
    };
    return StartQuizComponent;
}());
StartQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-start-quiz',
        template: __webpack_require__("../../../../../src/app/components/start-quiz/start-quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/start-quiz/start-quiz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], StartQuizComponent);

var _a, _b, _c;
//# sourceMappingURL=start-quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nh2{\n\ttext-align: center;\n}\nimg{\n  max-width: 100%;\n  margin: 0 auto;\n}\n.image-container{\n  height: 300px;\n  width: 300px;\n  display: -ms-grid;\n  display: grid;\n  margin: 0 auto;\n}\n\n.loader{\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 10px solid white;\n  border-radius: 50%;\n  border-top: 10px solid black;\n  \n  width: 100px;\n  height: 100px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n\t<h2>Welcome to the Quizz</h2>\n</div>\n<div class=\"container\">\n\t<div>\n\t\t<ul>\n\t\t\t<li *ngFor = \"let q of quizzes\" class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\"><b> {{q.quizName}}</b></div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"container image-container\" *ngIf = \"q.image\">\n\t\t\t\t\t\t\t<img src=\"{{q.image}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button [routerLink] =\"['/start-quiz/'+q.$key]\" class=\"btn btn-primary pull-right\" [value] = \"quiz.id\" ([ngModel]) = \"quizName\" (click) = \"startQuiz(id)\" >Start Quiz</button> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"loader\" *ngIf= \"loader\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.loader = false;
        this.quiz = {
            name: ''
        };
        this.quizData = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.quizService.getQuiz().subscribe(function (data) {
            _this.loader = false;
            _this.quizzes = data;
        });
    };
    UserComponent.prototype.startQuiz = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AuthGuard(router, angularFireAuth) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFireAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function AuthService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.angularFireAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizService = (function () {
    function QuizService(angularFire) {
        this.angularFire = angularFire;
        this.userData = [];
        this.quizzes = this.angularFire.list('/quizzes');
    }
    QuizService.prototype.newQuiz = function (quiz) {
        return this.quizzes.push(quiz);
    };
    QuizService.prototype.getQuiz = function () {
        this.quizzes = this.angularFire.list('/quizzes');
        return this.quizzes;
    };
    QuizService.prototype.getQuizData = function (id) {
        this.quizData = this.angularFire.object("/quizzes/" + id + "/quizData");
        return this.quizData;
    };
    QuizService.prototype.addQuestion = function (qu, key) {
        var quiz = this.angularFire.list("/quizzes/" + key + "/quizData");
        quiz.push(qu);
    };
    QuizService.prototype.deleteQuiz = function (q) {
        return this.quizzes.remove(q.$key);
    };
    QuizService.prototype.getQuizQuestion = function (pid, cid) {
        return this.angularFire.object("/quizzes/" + pid + "/quizData/" + cid);
    };
    QuizService.prototype.delete_question = function (question, id) {
        return this.angularFire.object("/quizzes/" + id + "/quizData/" + question.id).remove();
    };
    QuizService.prototype.updateQuiz = function (pid, cid, qu) {
        return this.angularFire.object("/quizzes/" + pid + "/quizData/" + cid).update(qu);
    };
    QuizService.prototype.userAnswers = function (data) {
        this.userData = data;
        console.log(this.userData);
    };
    QuizService.prototype.getUserAnswers = function () {
        return this.userData;
    };
    QuizService.prototype.onEditQuizData = function (id) {
        this.quizData = this.angularFire.object("/quizzes/" + id);
        return this.quizData;
    };
    QuizService.prototype.onEditUpdate = function (id, x) {
        return this.angularFire.object("/quizzes/" + id).set(x);
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], QuizService);

var _a;
//# sourceMappingURL=quiz.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map