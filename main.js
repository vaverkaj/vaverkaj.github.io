(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appear.directive */ "qVDF");



class AboutComponent {
    constructor() {
        this.isLoaded = false;
    }
    ngOnInit() { }
    appear() {
        this.isLoaded = true;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 44, vars: 1, consts: [[3, "appear"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "row"], [1, "col-sm-6"], [1, "mb-0"], [1, "col-md-6", "col-8", "mt-5", "mt-md-0"], [1, "px-3", "d-flex", "justify-content-center"], [1, "img-container"], ["src", "assets/profile.jpg", 1, "img-fluid"], [1, "img-border"], ["xmlns", "http://www.w3.org/2000/svg"], ["id", "svgSharpen"], ["order", "3 3", "preserveAlpha", "true", "divisor", "1", "bias", "0.85", "kernelMatrix", "-1,-1,-1 -1,9,-1 -1,-1,-1"], ["id", "svgThreshold"], ["type", "discrete", "tableValues", " 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function AboutComponent_Template_div_appear_0_listener() { return ctx.appear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Hello! My name is Jakub and i enjoy creating meaningful things. I am a full-stack engineer, which means that i can do a little bit of everything. I know how to develop, test, deploy and maintain all kinds of application solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Even though i spend most of my time developing frontend for the web, i have some experience with almost every level of sotware engineering, all the way down to some projects in low level assemly language. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "filter", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "feConvolveMatrix", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "filter", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "feComponentTransfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "feFuncR", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "feFuncG", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "feFuncB", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadAnimation", ctx.isLoaded ? "loaded" : "unloaded");
    } }, directives: [_appear_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"]], styles: [".img-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1rem;\n  top: -0.5rem;\n  left: -0.5rem;\n}\n.img-container[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border: 2px solid black;\n  top: 1rem;\n  left: 1rem;\n  z-index: -1;\n  border-radius: 0.2rem;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  \n  filter: grayscale(0%);\n  border-radius: 0.2rem;\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  \n  filter: grayscale(100%);\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover    ~ .img-border[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUFFO0VBQ0EsZ0JBQUE7RUFDaUMscUJBQUE7RUFDL0IscUJBQUE7RUFDQSxxQkFBQTtBQUdKO0FBREk7RUFDRSxnQkFBQTtFQUNpQyxxQkFBQTtFQUNqQyx1QkFBQTtBQUlOO0FBREk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR04iLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICB0b3A6IC0wLjVyZW07XHJcbiAgbGVmdDogLTAuNXJlbTtcclxuICAuaW1nLWJvcmRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHRvcDogMXJlbTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICB9XHJcbiAgaW1nIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIH4gLmltZy1ib3JkZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\vaverkaj.github.io\pages\src\main.ts */"zUnb");


/***/ }),

/***/ "43Zi":
/*!*********************************************************************!*\
  !*** ./src/app/components/block-comment/block-comment.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlockCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCommentComponent", function() { return BlockCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

const _c0 = ["bar"];
const _c1 = ["content"];
const _c2 = ["*"];
class BlockCommentComponent {
    constructor(renderer, window) {
        this.renderer = renderer;
        this.window = window;
    }
    ngAfterViewInit() {
        const contentHeight = this.verticalBar.nativeElement.offsetHeight;
        const style = window.getComputedStyle(this.verticalBar.nativeElement, null);
        const elementHeight = parseFloat(style.lineHeight);
        for (let index = 0; index < Math.round(contentHeight / elementHeight); index++) {
            this.renderer.appendChild(this.verticalBar.nativeElement, this.renderer.createText('\u00A0*\u00A0\n'));
        }
    }
    onResize(event) {
        const contentHeight = this.contentDiv.nativeElement.offsetHeight;
        const style = window.getComputedStyle(this.contentDiv.nativeElement, null);
        const elementHeight = parseFloat(style.lineHeight);
        this.renderer.setProperty(this.verticalBar.nativeElement, 'innerText', '');
        for (let index = 0; index < Math.ceil(contentHeight / elementHeight); index++) {
            this.renderer.appendChild(this.verticalBar.nativeElement, this.renderer.createText('\u00A0*\u00A0\n'));
        }
    }
}
BlockCommentComponent.ɵfac = function BlockCommentComponent_Factory(t) { return new (t || BlockCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Window)); };
BlockCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockCommentComponent, selectors: [["app-block-comment"]], viewQuery: function BlockCommentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.verticalBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentDiv = _t.first);
    } }, hostBindings: function BlockCommentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BlockCommentComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, ngContentSelectors: _c2, decls: 13, vars: 0, consts: [[1, "noselect"], [1, "d-flex", "justify-content-start"], [2, "flex-basis", "0"], ["bar", ""], [1, "align-self-start", "c-mono-2"], ["content", ""]], template: function BlockCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/**");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0*/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "6bE9":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project/project.component */ "S2eG");



class ProjectsComponent {
    constructor() { }
    ngOnInit() { }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 65, vars: 0, consts: [[1, "row", "d-flex", "justify-content-center"], [1, "col-md-12"], [1, "row"], ["imageUrl", "../../../assets/img/project03.PNG", 1, "col-xl-10", "offset-xl-2", "col-12", "mb-5"], ["type", ""], ["label", ""], ["href", "https://cs.wikipedia.org/wiki/Scrum"], ["hraf", "https://en.wikipedia.org/wiki/Mock_object"], ["languages", "", 1, "d-flex", "flex-wrap"], [1, "m-2"], ["switched", "true", "imageUrl", "../../../assets/img/project02.PNG", 1, "col-xl-10", "col-12", "mb-5"], ["imageUrl", "../../../assets/img/project01.PNG", 1, "col-xl-10", "offset-xl-2", "col-12", "mb-5"], ["href", "https://catvusa.com/"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Some Things I\u2019ve Built");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-project", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Comercial Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "PriceX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " This is a most recent project, I am working on. It's an application that allows employees of \u010Cesk\u00E1 spo\u0159itelna arrange special price offers for customers. I work with a team of 10 people, and we practice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "scrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ". This project taught me the importance of good communication and value of well done analysis. During development, the systems we relied on, were often unavailable. Thanks to the finished analysis, I was able to create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "mocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", and continue with development even without working backend systems. This is also the first project that we decided to fully cover with automated frontend tests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Angular 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cypress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Openshift");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Elasticsearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-project", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Comercial Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Pension Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " The first project I worked on at \u010Cesk\u00E1 spo\u0159itelna. It is currently deployed in George, and if any one of the 4,5 million clients wants to arrange pension saving account, he will be redirected to this application. During this project, I learned to efficiently work in an agile team and use a lot of new tools like Figma, Enterprise Architect, TeamCity, and Swagger. I was able to set up CI builds that run tests and check static code analysis before every merge, which improves the quality of the code as well as save large amounts of time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Angular 14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Jest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "OpenApi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "TeamCity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Google Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "app-project", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Feature Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Wordpress Plugin for video playback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " As a part of my master's thesis, I developed a plugin that allows users to create, publish, and watch videos on a website called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "www.catvusa.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, ". I collaborated closely with the website's owner to ensure a smooth deployment and migration. This project taught me the challenges of working remotely and handling clients' expectations. It also allowed me to flex a lot of my abilities, from developing the video editor and player in JavaScript and PHP, all the way to deployment and migration that required me to create generators for migration scripts in SQL. I worked on this project alone and was able to manage my own timeline and project scope. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ "AVN8":
/*!***********************************!*\
  !*** ./src/app/load.animation.ts ***!
  \***********************************/
/*! exports provided: loadAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAnimation", function() { return loadAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const loadAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('loadAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('unloaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('unloaded => loaded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')]),
]);


/***/ }),

/***/ "AytR":
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

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appear.directive */ "qVDF");



class ContactComponent {
    constructor() {
        this.isLoaded = false;
    }
    appear() {
        this.isLoaded = true;
    }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 9, vars: 1, consts: [[1, "row", 3, "appear"], [1, "col", "d-flex", "flex-column", "justify-content-center", "text-center"], [1, "mt-5", "d-flex", "justify-content-center"], ["href", "mailto:vaverkaja@gmail.com", "rel", "noopener noreferrer", "target", "_blank", 1, "button"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function ContactComponent_Template_div_appear_0_listener() { return ctx.appear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "What next?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Say Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadAnimation", ctx.isLoaded ? "loaded" : "unloaded");
    } }, directives: [_appear_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ "H0qa":
/*!*****************************************************!*\
  !*** ./src/app/components/links/links.component.ts ***!
  \*****************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appear.directive */ "qVDF");



class LinksComponent {
    constructor() {
        this.isLoaded = false;
    }
    appear() {
        this.isLoaded = true;
    }
    ngOnInit() { }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 12, vars: 1, consts: [[1, "row", 3, "appear"], [1, "col", "d-flex", "flex-column", "justify-content-center"], [1, "mt-5", "d-flex", "justify-content-center"], ["href", "https://github.com/vaverkaj", "target", "_blank", 1, "m-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-git"], ["d", "M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"], ["href", "https://www.linkedin.com/in/jakub-v%C3%A1verka-572273145", "target", "_blank", 1, "m-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], ["href", "https://www.instagram.com/jakubvaverka/", "target", "_blank", 1, "m-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-instagram"], ["d", "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function LinksComponent_Template_div_appear_0_listener() { return ctx.appear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadAnimation", ctx.isLoaded ? "loaded" : "unloaded");
    } }, directives: [_appear_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"]], styles: ["a[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJsaW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ "ROHl":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appear.directive */ "qVDF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WorkComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PHP Developer/Tester");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2016");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " My first actually job in the field. I learned how to use Czech framework Nette, which is used for simplifying the process of creating websites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " During my stay there, I developed an internal tool for comparing SQL databases. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Other than that, i spent most of my time creating automated tests for web applications in Selenium. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Junior Java Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Kadel is a company that sells, maintains, and improves software for large scale printing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Their document \u0157eader is made using SWT. I worked on features that allows users to edit the file structure and I also created an editor widgets. One of those widgets was a beautiful color picker, that allowed me to learn a lot about user interfaces and color theory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " This was also the first time I was part of a agile development process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Taiwan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " I was studying abroad at a top technical university Taiwan Tech. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Here I learned a lot about machine learning. We worked on projects that utilized neural networks, image recognition and artificial inteligence. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " With my colleague we worked on a patent that used reinforcement learning for searching optimal game strategies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2019 - 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " I maintained large rich client solution for administration of banking information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " We worked mostly in C++ in combination with C#. There were complex interop interfaces. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " I also developed component for document administration in Angular. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WorkComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Full-stack Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2020 - now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Right now i am developing modules for George that allow clients of \u010Cesk\u00E1 spo\u0159itelna to navigate and purchase different financial products. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Our team focuses on passive financial products, but our applications are used throughout whole bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " I have to maintain a large number of applications and also develop new ones. The technologies we use most are Angular for front-end and .NET for back-end. I am also responsible for some dev-ops. We practice continuous integration with TeamCity. Some of our applications run in containers in Openshift. Unit testing is done in Jest framework and right now we also create automated tests in Cypress. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WorkComponent {
    constructor() {
        this.selectedJob = 0;
        this.isLoaded = false;
    }
    ngOnInit() { }
    selectJob(index) {
        this.selectedJob = index;
    }
    appear() {
        this.isLoaded = true;
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 22, vars: 17, consts: [[1, "row", "d-flex", "justify-content-center", 3, "appear"], [1, "col-md-10"], [1, "row"], [1, "d-flex", "flex-row", "col-12", "col-sm-auto", "flex-sm-column", "menu"], [3, "click"], [1, "col-12", "col-sm", 3, "ngSwitch"], [4, "ngSwitchCase"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function WorkComponent_Template_div_appear_0_listener() { return ctx.appear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Where I\u2019ve Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_6_listener() { return ctx.selectJob(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u010Cesk\u00E1 Spo\u0159itelna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_8_listener() { return ctx.selectJob(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Unicorn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_10_listener() { return ctx.selectJob(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Taiwan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_12_listener() { return ctx.selectJob(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Kadel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_14_listener() { return ctx.selectJob(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " RTSoft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WorkComponent_div_17_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WorkComponent_div_18_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, WorkComponent_div_19_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, WorkComponent_div_20_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WorkComponent_div_21_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadAnimation", ctx.isLoaded ? "loaded" : "unloaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selectedJob === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selectedJob === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selectedJob === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selectedJob === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selectedJob === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.selectedJob);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 0);
    } }, directives: [_appear_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: ["button[_ngcontent-%COMP%] {\n  font-size: 110%;\n  text-decoration: none;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  width: 100%;\n  height: 60px;\n  width: 200px;\n  padding: 0px 20px 2px;\n  border: 0px;\n  background-color: transparent;\n  color: black;\n  text-align: left;\n  white-space: nowrap;\n  cursor: pointer;\n  text-align: center;\n  border-left: none;\n  border-bottom: 1px solid black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n}\n@media (min-width: 576px) {\n  button[_ngcontent-%COMP%] {\n    text-align: left;\n    border-bottom: none;\n    border-left: 1px solid black;\n  }\n}\n.selected[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-left: none;\n  border-bottom: 5px solid black;\n}\n@media (min-width: 576px) {\n  .selected[_ngcontent-%COMP%] {\n    border-bottom: none;\n    border-left: 5px solid black;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0px;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  margin-bottom: 15px;\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n@media (min-width: 576px) {\n  .menu[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    display: block;\n  }\n  .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n  }\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBSUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBRkY7QUFIRTtFQUNFLDRCQUFBO0FBS0o7QUFBRTtFQXBCRjtJQXFCSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFHRjtBQUZFO0VBSkY7SUFLSSxtQkFBQTtJQUNBLDRCQUFBO0VBS0Y7QUFDRjtBQUZBO0VBWUUsYUFBQTtFQUNBLGFBQUE7RUFJQSxnQkFBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFDdkIsbUJBQUE7QUFQRjtBQVpFO0VBQ0UsZ0JBQUE7QUFjSjtBQVpFO0VBSkY7SUFLSSwyQkFBQTtJQUFBLHNCQUFBO0lBQ0EsY0FBQTtFQWVGO0VBZEU7SUFDRSwyQkFBQTtJQUFBLHNCQUFBO0VBZ0JKO0FBQ0Y7QUFYRTtFQUNFLGFBQUE7QUFhSiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4IDJweDtcclxuICBib3JkZXI6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICB9XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBidXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxIDEgMHB4O1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIl19 */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ "S2eG":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/load.animation */ "AVN8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appear.directive */ "qVDF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = [[["", "type", ""]], [["", "label", ""]], "*", [["", "languages", ""]]];
const _c1 = function (a0) { return { "justify-content-sm-end text-sm-right": a0 }; };
const _c2 = function (a0) { return { "justify-content-sm-end text-sm-right offset-sm-8": a0 }; };
const _c3 = function (a0) { return { "justify-content-sm-end": a0 }; };
const _c4 = function (a0) { return { "justify-content-sm-end align-self-end": a0 }; };
const _c5 = function (a0) { return { "align-self-end d-flex": a0 }; };
const _c6 = ["[type]", "[label]", "*", "[languages]"];
class ProjectComponent {
    constructor() {
        this.switched = false;
        this.imageUrl = '';
        this.isLoaded = false;
    }
    ngOnInit() { }
    appear() {
        this.isLoaded = true;
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { switched: "switched", imageUrl: "imageUrl" }, ngContentSelectors: _c6, decls: 13, vars: 17, consts: [[1, "d-flex", "full-block", "flex-column", "position-relative", "overflow-hidden", "p-0", "p-sm-5", 3, "appear"], [1, "d-flex", "justify-content-start", 3, "ngClass"], [1, "mx-3", "m-0"], [1, "d-flex", "justify-content-start", "col-sm-4", "col-12", "px-3", 3, "ngClass"], [1, "col-sm-8", "text-block", "p-3", "float-right", "col-12"], [1, "col-sm-6", "d-flex", "justify-content-start", "flex-wrap", 3, "ngClass"], [1, "project-image", "mw-100", "mh-50", 3, "src", "ngClass"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("appear", function ProjectComponent_Template_div_appear_0_listener() { return ctx.appear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@loadAnimation", ctx.isLoaded ? "loaded" : "unloaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, !ctx.switched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, !ctx.switched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, !ctx.switched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c4, !ctx.switched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, ctx.switched));
    } }, directives: [_appear_directive__WEBPACK_IMPORTED_MODULE_2__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@media (min-width: 576px) {\n  .text-block[_ngcontent-%COMP%] {\n    filter: brightness(95%);\n    background-color: white;\n    font-size: 90%;\n    border-radius: 0.2rem;\n  }\n}\n\n.full-block[_ngcontent-%COMP%] {\n  filter: brightness(95%);\n  background-color: white;\n  border-radius: 0.2rem;\n}\n\n@media (min-width: 576px) {\n  .full-block[_ngcontent-%COMP%] {\n    filter: none;\n    background-color: unset;\n  }\n}\n\n.project-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  opacity: 30%;\n  position: absolute;\n  z-index: -1;\n  max-width: unset;\n}\n\n@media (min-width: 576px) {\n  .project-image[_ngcontent-%COMP%] {\n    opacity: 80%;\n    border-radius: 0.2rem;\n    max-height: 100%;\n    max-width: 40% !important;\n  }\n}\n\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBREY7SUFFSSx1QkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUtFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQUhFO0VBREY7SUFFSSxZQUFBO0lBQ0EsdUJBQUE7RUFNRjtBQUNGOztBQUFBO0VBT0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFQRTtFQURGO0lBRUksWUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQVVGO0FBQ0Y7O0FBRkE7RUFDRSxtQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0pBQUE7QUFLRiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmZ1bGwtYmxvY2sge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgZmlsdGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgfVxyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2Uge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMzAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBtYXgtd2lkdGg6IHVuc2V0O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuZGl2IHtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGUsIDBweCAwcHggNXB4IHdoaXRlLCAwcHggMHB4IDVweCB3aGl0ZSxcclxuICAgIDBweCAwcHggNXB4IHdoaXRlLCAwcHggMHB4IDVweCB3aGl0ZSwgMHB4IDBweCA1cHggd2hpdGUsIDBweCAwcHggNXB4IHdoaXRlO1xyXG59XHJcbiJdfQ== */"], data: { animation: [src_app_load_animation__WEBPACK_IMPORTED_MODULE_0__["loadAnimation"]] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work/work.component */ "ROHl");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/links/links.component */ "H0qa");








class AppComponent {
    constructor() {
        this.title = 'pages';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [[1, "container-fluid", "overflow-hidden"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-12"], [1, "row", "d-flex", "align-items-center", "min-vh-100"], [1, "col"], ["id", "about", 1, "row", "d-flex", "content-block"], ["id", "experience", 1, "row", "d-flex", "content-block"], ["id", "work", 1, "row", "d-flex", "content-block"], ["id", "contact", 1, "row", "d-flex", "content-block"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _components_work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__["LinksComponent"]], styles: [".min-vh-100[_ngcontent-%COMP%] {\n  min-height: 100vh !important;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  padding-top: 50px;\n}\n\n@media (min-width: 576px) {\n  .content-block[_ngcontent-%COMP%] {\n    padding-bottom: 150px;\n    padding-top: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUtFLG9CQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFGRTtFQURGO0lBRUkscUJBQUE7SUFDQSxrQkFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi12aC0xMDAge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2NrIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICB9XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_block_comment_block_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block-comment/block-comment.component */ "43Zi");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/work/work.component */ "ROHl");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/project.component */ "S2eG");
/* harmony import */ var _appear_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appear.directive */ "qVDF");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/links/links.component */ "H0qa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: Window, useValue: window }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_block_comment_block_comment_component__WEBPACK_IMPORTED_MODULE_5__["BlockCommentComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _components_work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _components_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
        _appear_directive__WEBPACK_IMPORTED_MODULE_12__["AppearDirective"],
        _components_links_links_component__WEBPACK_IMPORTED_MODULE_13__["LinksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "bwXy":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TitleComponent {
    constructor() { }
    ngOnInit() { }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 17, vars: 6, consts: [[1, "my-5"], [1, "top_text", "mb-4"], [1, "bottom_text", "col-sm-10", "pl-0", "mt-4"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hi,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Jakub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "V\u00E1verka.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "I code cool things.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " I am a software engineer that builds things for the web. I am passionate about building pleasant digital experiences and occasionally dabble with machine learning and image recognition. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load2", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swipe1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@swipe2", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load3", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load4", undefined);
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n@media screen and (min-width: 160px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: calc(32px + 368 * ((100vw - 160px) / 7840));\n  }\n}\n@media screen and (min-width: 8000px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 400px;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n@media screen and (min-width: 160px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: calc(32px + 368 * ((100vw - 160px) / 7840));\n  }\n}\n@media screen and (min-width: 8000px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 400px;\n  }\n}\n.top_text[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aXRsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbHVpZC10eXBlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQURGO0FDZVE7RUFDSSxlRGR3QztBQUNwRDtBQ2NRO0VBRkE7SUFHSSxzREFBQTtFRFhWO0FBQ0Y7QUNZUTtFQUxBO0lBTUksZ0JEbkI4QztFQVV4RDtBQUNGO0FBUkE7RUFDRSxnQkFBQTtBQVdGO0FDRlE7RUFDSSxlRFR3QztBQWFwRDtBQ0hRO0VBRkE7SUFHSSxzREFBQTtFRE1WO0FBQ0Y7QUNMUTtFQUxBO0lBTUksZ0JEZDhDO0VBc0J4RDtBQUNGO0FBcEJBO0VBQ0UsZUFBQTtBQXVCRiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9mbHVpZC10eXBlLnNjc3NcIjtcclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIEBpbmNsdWRlIGZsdWlkLXR5cGUoJG1pbl93aWR0aCowLjUsICRtYXhfd2lkdGgqMiwgMzJweCwgNDAwcHgpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBAaW5jbHVkZSBmbHVpZC10eXBlKCRtaW5fd2lkdGgqMC41LCAkbWF4X3dpZHRoKjIsIDMycHgsIDQwMHB4KTtcclxufVxyXG5cclxuLnRvcF90ZXh0IHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxuIiwiJGZvbnQtbWFpbjogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xyXG4kbWluX3dpZHRoOiAzMjBweDtcclxuJG1heF93aWR0aDogNDAwMHB4O1xyXG4kbWluX2ZvbnQ6IDE2cHg7XHJcbiRtYXhfZm9udDogMjRweDtcclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkbWluLXZ3LCAkbWF4LXZ3LCAkbWluLWZvbnQtc2l6ZSwgJG1heC1mb250LXNpemUpIHtcclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG4gICAgXHJcbiAgICBAaWYgJHUxID09ICR1MiBhbmQgJHUxID09ICR1MyBhbmQgJHUxID09ICR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('load1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('load2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 1000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('swipe2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(1000%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms 1200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('swipe1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(1000%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms 800ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('load3', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 2000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('load4', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 3000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class NavigationComponent {
    constructor() {
        this.prevScrollpos = window.pageYOffset;
        this.isScrollingDown = false;
        this.isSideMenuOpen = false;
    }
    ngOnInit() { }
    onWindowScroll() {
        let navbar = document.getElementById('navbar');
        let cross = document.getElementById('cross');
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0) {
            navbar.classList.remove('navbar-top');
            let previousScroll = this.isScrollingDown;
            if (this.prevScrollpos > currentScrollPos) {
                this.isScrollingDown = false;
            }
            else {
                this.isScrollingDown = true;
            }
            if (previousScroll != this.isScrollingDown) {
                if (!this.isScrollingDown || this.isSideMenuOpen) {
                    navbar.style.top = '0';
                    cross.style.top = '0';
                }
                else {
                    navbar.style.top = '-' + (navbar.scrollHeight + 5) + 'px';
                    cross.style.top = '-' + (navbar.scrollHeight + 5) + 'px';
                }
            }
            this.prevScrollpos = currentScrollPos;
        }
        else if (currentScrollPos === 0) {
            navbar.classList.add('navbar-top');
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], hostBindings: function NavigationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavigationComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 47, vars: 8, consts: [["id", "navbar", 1, "navbar", "d-flex", "py-0"], ["href", "#", 1, "navbar-brand"], [1, "d-none", "d-md-flex", "float-right", "justify-content-end"], [1, "navbar-nav", "flex-row", "align-items-center"], [1, "nav-item"], ["href", "#about", 1, "nav-link"], ["href", "#experience", 1, "nav-link"], ["href", "#work", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], ["href", "assets/Jakub_Vaverka.pdf", "download", "", 1, "button", "mr-0"], [1, "d-flex", "d-md-none", "float-right", "justify-content-end", "invisible"], ["viewBox", "0 0 100 100", "width", "80", 1, "ham", "hamRotate", "ham8", 3, "click"], ["d", "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20", 1, "line", "top"], ["d", "m 30,50 h 40", 1, "line", "middle"], ["d", "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20", 1, "line", "bottom"], ["id", "cross", 1, "d-flex", "d-md-none"], [1, "nav-sidemenu", "h-100", "w-50", "d-flex", "align-self-center"], [1, "navbar-nav", "flex-column", "align-items-center", "align-self-center", "w-100"], [1, "nav-item", "m-3"], ["href", "assets/Jakub_Vaverka.pdf", "download", "", 1, "button"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\\vaverkaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template__svg_svg_click_21_listener() { return ctx.isSideMenuOpen = !ctx.isSideMenuOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template__svg_svg_click_26_listener() { return ctx.isSideMenuOpen = !ctx.isSideMenuOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isSideMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@load1", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isSideMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isSideMenuOpen);
    } }, styles: ["a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  z-index: 1;\n  box-shadow: 0 10px 30px -10px black;\n  position: fixed;\n  top: 0;\n  transition: top 0.4s;\n}\n\n.navbar-top[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  height: 80px;\n  box-shadow: none;\n}\n\n#cross[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  transition: top 0.4s;\n  right: 0;\n  padding: 0 1rem;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n\n.ham[_ngcontent-%COMP%] {\n  z-index: 2;\n  margin-right: -1rem;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform 400ms;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.hamRotate.active[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n  stroke: #000;\n  stroke-width: 5.5;\n  stroke-linecap: round;\n}\n\n.ham8[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  stroke-dasharray: 40 160;\n}\n\n.ham8[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  stroke-dasharray: 40 142;\n  transform-origin: 50%;\n  transition: transform 400ms;\n}\n\n.ham8[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  stroke-dasharray: 40 85;\n  transform-origin: 50%;\n  transition: transform 400ms, stroke-dashoffset 400ms;\n}\n\n.ham8.active[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  stroke-dashoffset: -64px;\n}\n\n.ham8.active[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.ham8.active[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  stroke-dashoffset: -64px;\n}\n\n.nav-sidemenu[_ngcontent-%COMP%] {\n  right: -50%;\n  position: fixed;\n  z-index: 1;\n  background-color: white;\n  transition: 0.4s;\n}\n\n.nav-sidemenu.active[_ngcontent-%COMP%] {\n  right: 0px;\n  box-shadow: -10px 0px 30px -10px black;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSwyREFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0RBQUE7QUFJRjs7QUFGQTtFQUNFLHdCQUFBO0FBS0Y7O0FBSEE7RUFFRSx3QkFBQTtBQUtGOztBQUhBO0VBQ0Usd0JBQUE7QUFNRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBTUYiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xMHB4IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuNHM7XHJcblxyXG4gICYtdG9wIHtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuI2Nyb3NzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuNHM7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbn1cclxuXHJcbi5oYW0ge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uaGFtUm90YXRlLmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5saW5lIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNDAwbXMsIHN0cm9rZS1kYXNob2Zmc2V0IDQwMG1zO1xyXG4gIHN0cm9rZTogIzAwMDtcclxuICBzdHJva2Utd2lkdGg6IDUuNTtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbn1cclxuXHJcbi5oYW04IC50b3Age1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQwIDE2MDtcclxufVxyXG4uaGFtOCAubWlkZGxlIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiA0MCAxNDI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcclxufVxyXG4uaGFtOCAuYm90dG9tIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiA0MCA4NTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zLCBzdHJva2UtZGFzaG9mZnNldCA0MDBtcztcclxufVxyXG4uaGFtOC5hY3RpdmUgLnRvcCB7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC02NHB4O1xyXG59XHJcbi5oYW04LmFjdGl2ZSAubWlkZGxlIHtcclxuICAvL3N0cm9rZS1kYXNob2Zmc2V0OiAtMjBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLmhhbTguYWN0aXZlIC5ib3R0b20ge1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAtNjRweDtcclxufVxyXG5cclxuLm5hdi1zaWRlbWVudSB7XHJcbiAgcmlnaHQ6IC01MCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm5hdi1zaWRlbWVudS5hY3RpdmUge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm94LXNoYWRvdzogLTEwcHggMHB4IDMwcHggLTEwcHggYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('load1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 4000ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "qVDF":
/*!*************************************!*\
  !*** ./src/app/appear.directive.ts ***!
  \*************************************/
/*! exports provided: AppearDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearDirective", function() { return AppearDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class AppearDirective {
    constructor(element) {
        this.element = element;
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    saveDimensions() {
        this.elementPos = this.getOffsetTop(this.element.nativeElement);
        this.elementHeight = this.element.nativeElement.offsetHeight;
        this.windowHeight = window.innerHeight;
    }
    saveScrollPos() {
        this.scrollPos = window.scrollY;
    }
    getOffsetTop(element) {
        let offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    }
    checkVisibility() {
        if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions();
            if (this.isVisible()) {
                this.unsubscribe();
                this.appear.emit();
            }
        }
    }
    isVisible() {
        return (this.scrollPos >= this.elementPos + this.elementHeight ||
            this.scrollPos + this.windowHeight >= this.elementPos);
    }
    subscribe() {
        this.subscriptionScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null))
            .subscribe(() => {
            this.saveScrollPos();
            this.checkVisibility();
        });
        this.subscriptionResize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null))
            .subscribe(() => {
            this.saveDimensions();
            this.checkVisibility();
        });
    }
    unsubscribe() {
        if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe();
        }
        if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe();
        }
    }
    ngOnInit() {
        this.subscribe();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
AppearDirective.ɵfac = function AppearDirective_Factory(t) { return new (t || AppearDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppearDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppearDirective, selectors: [["", "appear", ""]], outputs: { appear: "appear" } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map