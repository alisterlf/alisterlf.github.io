webpackJsonp([2],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".mat-body {\n  max-width: 720px;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto; }\n  .mat-body hr {\n    display: block;\n    border-color: #000;\n    border-width: 2px;\n    margin: 10px 0; }\n  .mat-body ul {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .mat-body dl {\n    margin: 0; }\n    .mat-body dl dt {\n      font-size: 16px;\n      padding-top: 10px;\n      padding-bottom: 5px; }\n    .mat-body dl dd {\n      margin: 0;\n      padding-left: 0;\n      padding-bottom: 10px; }\n      .mat-body dl dd dt {\n        padding-top: 0;\n        padding-bottom: 0; }\n      .mat-body dl dd dd {\n        padding-left: 10px; }\n  .mat-body h1 {\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1em;\n    color: inherit;\n    font-size: 48px; }\n  .mat-body dt,\n  .mat-body strong {\n    font-weight: 500; }\n  .mat-body .material-icons {\n    vertical-align: middle; }\n  .mat-body .category-list > dt {\n    font-size: 20px;\n    border-bottom: 2px solid #444;\n    margin: 0 0 10px 0; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z0 {\r\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, .2), 0 0 0 0 rgba(0, 0, 0, .14), 0 0 0 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z1 {\r\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z2 {\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z3 {\r\n  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z4 {\r\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z6 {\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z7 {\r\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .2), 0 7px 10px 1px rgba(0, 0, 0, .14), 0 2px 16px 1px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z8 {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z9 {\r\n  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, .2), 0 9px 12px 1px rgba(0, 0, 0, .14), 0 3px 16px 2px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z10 {\r\n  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, .2), 0 10px 14px 1px rgba(0, 0, 0, .14), 0 4px 18px 3px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z11 {\r\n  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, .2), 0 11px 15px 1px rgba(0, 0, 0, .14), 0 4px 20px 3px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z12 {\r\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z13 {\r\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 13px 19px 2px rgba(0, 0, 0, .14), 0 5px 24px 4px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z14 {\r\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, .2), 0 14px 21px 2px rgba(0, 0, 0, .14), 0 5px 26px 4px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z15 {\r\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, .2), 0 15px 22px 2px rgba(0, 0, 0, .14), 0 6px 28px 5px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z17 {\r\n  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, .2), 0 17px 26px 2px rgba(0, 0, 0, .14), 0 6px 32px 5px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z18 {\r\n  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, .2), 0 18px 28px 2px rgba(0, 0, 0, .14), 0 7px 34px 6px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z19 {\r\n  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, .2), 0 19px 29px 2px rgba(0, 0, 0, .14), 0 7px 36px 6px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z20 {\r\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, .2), 0 20px 31px 3px rgba(0, 0, 0, .14), 0 8px 38px 7px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z21 {\r\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, .2), 0 21px 33px 3px rgba(0, 0, 0, .14), 0 8px 40px 7px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z22 {\r\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z23 {\r\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, .2), 0 23px 36px 3px rgba(0, 0, 0, .14), 0 9px 44px 8px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-elevation-z24 {\r\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-h1,\r\n.mat-headline,\r\n.mat-typography h1 {\r\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 16px\r\n}\r\n\r\n.mat-h2,\r\n.mat-title,\r\n.mat-typography h2 {\r\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 16px\r\n}\r\n\r\n.mat-h3,\r\n.mat-subheading-2,\r\n.mat-typography h3 {\r\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 16px\r\n}\r\n\r\n.mat-h4,\r\n.mat-subheading-1,\r\n.mat-typography h4 {\r\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 16px\r\n}\r\n\r\n.mat-h5,\r\n.mat-typography h5 {\r\n  font-size: 11.62px;\r\n  font-weight: 400;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  line-height: 20px;\r\n  margin: 0 0 12px\r\n}\r\n\r\n.mat-h6,\r\n.mat-typography h6 {\r\n  font-size: 9.38px;\r\n  font-weight: 400;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  line-height: 20px;\r\n  margin: 0 0 12px\r\n}\r\n\r\n.mat-body-2,\r\n.mat-body-strong {\r\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-body,\r\n.mat-body-1,\r\n.mat-typography {\r\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-body p,\r\n.mat-body-1 p,\r\n.mat-typography p {\r\n  margin: 0 0 12px\r\n}\r\n\r\n.mat-caption,\r\n.mat-small {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-display-4,\r\n.mat-typography .mat-display-4 {\r\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 56px;\r\n  letter-spacing: -.05em\r\n}\r\n\r\n.mat-display-3,\r\n.mat-typography .mat-display-3 {\r\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 64px;\r\n  letter-spacing: -.02em\r\n}\r\n\r\n.mat-display-2,\r\n.mat-typography .mat-display-2 {\r\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 64px;\r\n  letter-spacing: -.005em\r\n}\r\n\r\n.mat-display-1,\r\n.mat-typography .mat-display-1 {\r\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0 0 64px\r\n}\r\n\r\n.mat-button,\r\n.mat-icon-button,\r\n.mat-raised-button {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-button-toggle {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-card {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-card-title {\r\n  font-size: 24px;\r\n  font-weight: 400\r\n}\r\n\r\n.mat-card-content,\r\n.mat-card-header .mat-card-title,\r\n.mat-card-subtitle {\r\n  font-size: 14px\r\n}\r\n\r\n.mat-checkbox {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-checkbox-layout .mat-checkbox-label {\r\n  line-height: 24px\r\n}\r\n\r\n.mat-chip:not(.mat-basic-chip) {\r\n  font-size: 13px;\r\n  line-height: 16px\r\n}\r\n\r\n.mat-header-cell {\r\n  font-size: 12px;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-cell {\r\n  font-size: 14px\r\n}\r\n\r\n.mat-calendar {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-calendar-body {\r\n  font-size: 13px\r\n}\r\n\r\n.mat-calendar-body-label,\r\n.mat-calendar-period-button {\r\n  font-size: 14px;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-calendar-table-header th {\r\n  font-size: 11px;\r\n  font-weight: 400\r\n}\r\n\r\n.mat-dialog-title {\r\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-grid-tile-footer,\r\n.mat-grid-tile-header {\r\n  font-size: 14px\r\n}\r\n\r\n.mat-grid-tile-footer .mat-line,\r\n.mat-grid-tile-header .mat-line {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  box-sizing: border-box\r\n}\r\n\r\n.mat-grid-tile-footer .mat-line:nth-child(n+2),\r\n.mat-grid-tile-header .mat-line:nth-child(n+2) {\r\n  font-size: 12px\r\n}\r\n\r\n.mat-input-container {\r\n  font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-input-wrapper {\r\n  padding-bottom: 1.29688em\r\n}\r\n\r\n.mat-input-prefix .mat-datepicker-toggle,\r\n.mat-input-prefix .mat-icon,\r\n.mat-input-suffix .mat-datepicker-toggle,\r\n.mat-input-suffix .mat-icon {\r\n  font-size: 150%\r\n}\r\n\r\n.mat-input-prefix .mat-icon-button,\r\n.mat-input-suffix .mat-icon-button {\r\n  height: 1.5em;\r\n  width: 1.5em\r\n}\r\n\r\n.mat-input-prefix .mat-icon-button .mat-icon,\r\n.mat-input-suffix .mat-icon-button .mat-icon {\r\n  line-height: 1.5\r\n}\r\n\r\n.mat-input-infix {\r\n  padding: .4375em 0;\r\n  border-top: .84375em solid transparent\r\n}\r\n\r\n.mat-input-element:-webkit-autofill+.mat-input-placeholder-wrapper .mat-float {\r\n  -webkit-transform: translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);\r\n          transform: translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);\r\n  -ms-transform: translateY(-1.28125em) scale(.75);\r\n  width: 133.33333%\r\n}\r\n\r\n.mat-input-placeholder-wrapper {\r\n  top: -.84375em;\r\n  padding-top: .84375em\r\n}\r\n\r\n.mat-input-placeholder {\r\n  top: 1.28125em\r\n}\r\n\r\n.mat-focused .mat-input-placeholder.mat-float,\r\n.mat-input-placeholder.mat-float:not(.mat-empty) {\r\n  -webkit-transform: translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);\r\n          transform: translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);\r\n  -ms-transform: translateY(-1.28125em) scale(.75);\r\n  width: 133.33333%\r\n}\r\n\r\n.mat-input-underline {\r\n  bottom: 1.29688em\r\n}\r\n\r\n.mat-input-subscript-wrapper {\r\n  font-size: 75%;\r\n  margin-top: .60417em;\r\n  top: calc(100% - 1.72917em)\r\n}\r\n\r\n.mat-menu-item {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 16px\r\n}\r\n\r\n.mat-paginator {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 12px\r\n}\r\n\r\n.mat-paginator-page-size .mat-select-trigger {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 12px\r\n}\r\n\r\n.mat-radio-button {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-select {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-select-trigger {\r\n  font-size: 16px\r\n}\r\n\r\n.mat-slide-toggle-content {\r\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-slider-thumb-label-text {\r\n  font-size: 12px;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-tab-group {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-tab-label,\r\n.mat-tab-link {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-toolbar,\r\n.mat-toolbar h1,\r\n.mat-toolbar h2,\r\n.mat-toolbar h3,\r\n.mat-toolbar h4,\r\n.mat-toolbar h5,\r\n.mat-toolbar h6 {\r\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 0\r\n}\r\n\r\n.mat-tooltip {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 10px;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px\r\n}\r\n\r\n.mat-list-item {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-list .mat-list-item,\r\n.mat-nav-list .mat-list-item {\r\n  font-size: 16px\r\n}\r\n\r\n.mat-list .mat-list-item .mat-line,\r\n.mat-nav-list .mat-list-item .mat-line {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  box-sizing: border-box\r\n}\r\n\r\n.mat-list .mat-list-item .mat-line:nth-child(n+2),\r\n.mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\r\n  font-size: 14px\r\n}\r\n\r\n.mat-list .mat-subheader,\r\n.mat-nav-list .mat-subheader {\r\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-list[dense] .mat-list-item,\r\n.mat-nav-list[dense] .mat-list-item {\r\n  font-size: 12px\r\n}\r\n\r\n.mat-list[dense] .mat-list-item .mat-line,\r\n.mat-nav-list[dense] .mat-list-item .mat-line {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  box-sizing: border-box\r\n}\r\n\r\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),\r\n.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\r\n  font-size: 12px\r\n}\r\n\r\n.mat-list[dense] .mat-subheader,\r\n.mat-nav-list[dense] .mat-subheader {\r\n  font: 500 12px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-option {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 16px\r\n}\r\n\r\n.mat-optgroup-label {\r\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif\r\n}\r\n\r\n.mat-simple-snackbar {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  font-size: 14px\r\n}\r\n\r\n.mat-simple-snackbar-action {\r\n  line-height: 1;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: 500\r\n}\r\n\r\n.mat-ripple {\r\n  overflow: hidden\r\n}\r\n\r\n.mat-ripple.mat-ripple-unbounded {\r\n  overflow: visible\r\n}\r\n\r\n.mat-ripple-element {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  pointer-events: none;\r\n  transition: opacity, -webkit-transform 0s cubic-bezier(0, 0, .2, 1);\r\n  transition: opacity, transform 0s cubic-bezier(0, 0, .2, 1);\r\n  transition: opacity, transform 0s cubic-bezier(0, 0, .2, 1), -webkit-transform 0s cubic-bezier(0, 0, .2, 1);\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0)\r\n}\r\n\r\n.mat-option {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  line-height: 48px;\r\n  height: 48px;\r\n  padding: 0 16px;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: 0\r\n}\r\n\r\n.mat-option[disabled] {\r\n  cursor: default\r\n}\r\n\r\n[dir=rtl] .mat-option {\r\n  text-align: right\r\n}\r\n\r\n.mat-option .mat-icon {\r\n  margin-right: 16px\r\n}\r\n\r\n[dir=rtl] .mat-option .mat-icon {\r\n  margin-left: 16px;\r\n  margin-right: 0\r\n}\r\n\r\n.mat-option[aria-disabled=true] {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: default\r\n}\r\n\r\n.mat-optgroup .mat-option:not(.mat-option-multiple) {\r\n  padding-left: 32px\r\n}\r\n\r\n[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple) {\r\n  padding-left: 16px;\r\n  padding-right: 32px\r\n}\r\n\r\n.mat-option-ripple {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  pointer-events: none\r\n}\r\n\r\n@media screen and (-ms-high-contrast:active) {\r\n  .mat-option-ripple {\r\n    opacity: .5\r\n  }\r\n}\r\n\r\n.mat-option-pseudo-checkbox {\r\n  margin-right: 8px\r\n}\r\n\r\n[dir=rtl] .mat-option-pseudo-checkbox {\r\n  margin-left: 8px;\r\n  margin-right: 0\r\n}\r\n\r\n.mat-optgroup-label {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: block;\r\n  line-height: 48px;\r\n  height: 48px;\r\n  padding: 0 16px;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: default\r\n}\r\n\r\n.mat-optgroup-label[disabled] {\r\n  cursor: default\r\n}\r\n\r\n[dir=rtl] .mat-optgroup-label {\r\n  text-align: right\r\n}\r\n\r\n.mat-optgroup-label .mat-icon {\r\n  margin-right: 16px\r\n}\r\n\r\n[dir=rtl] .mat-optgroup-label .mat-icon {\r\n  margin-left: 16px;\r\n  margin-right: 0\r\n}\r\n\r\n.cdk-visually-hidden {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  text-transform: none;\r\n  width: 1px\r\n}\r\n\r\n.cdk-global-overlay-wrapper,\r\n.cdk-overlay-container {\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%\r\n}\r\n\r\n.cdk-overlay-container {\r\n  position: fixed;\r\n  z-index: 1000\r\n}\r\n\r\n.cdk-global-overlay-wrapper {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: absolute;\r\n  z-index: 1000\r\n}\r\n\r\n.cdk-overlay-pane {\r\n  position: absolute;\r\n  pointer-events: auto;\r\n  box-sizing: border-box;\r\n  z-index: 1000\r\n}\r\n\r\n.cdk-overlay-backdrop {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  pointer-events: auto;\r\n  -webkit-tap-highlight-color: transparent;\r\n  transition: opacity .4s cubic-bezier(.25, .8, .25, 1);\r\n  opacity: 0\r\n}\r\n\r\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\r\n  opacity: .48\r\n}\r\n\r\n.cdk-overlay-dark-backdrop {\r\n  background: rgba(0, 0, 0, .6)\r\n}\r\n\r\n.cdk-overlay-transparent-backdrop {\r\n  background: 0 0\r\n}\r\n\r\n.cdk-global-scrollblock {\r\n  position: fixed;\r\n  width: 100%;\r\n  overflow-y: scroll\r\n}\r\n\r\n.mat-ripple-element {\r\n  background-color: rgba(0, 0, 0, .1)\r\n}\r\n\r\n.mat-option {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-option:focus:not(.mat-option-disabled),\r\n.mat-option:hover:not(.mat-option-disabled) {\r\n  background: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-option.mat-selected.mat-primary,\r\n.mat-primary .mat-option.mat-selected {\r\n  color: #3f51b5\r\n}\r\n\r\n.mat-accent .mat-option.mat-selected,\r\n.mat-option.mat-selected.mat-accent {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-option.mat-selected.mat-warn,\r\n.mat-warn .mat-option.mat-selected {\r\n  color: #f44336\r\n}\r\n\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n  background: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-option.mat-active {\r\n  background: rgba(0, 0, 0, .04);\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-option.mat-option-disabled {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-optgroup-label {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-optgroup-disabled .mat-optgroup-label {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-pseudo-checkbox {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-pseudo-checkbox::after {\r\n  color: #fafafa\r\n}\r\n\r\n.mat-primary .mat-pseudo-checkbox-checked,\r\n.mat-primary .mat-pseudo-checkbox-indeterminate,\r\n.mat-pseudo-checkbox-checked.mat-primary,\r\n.mat-pseudo-checkbox-indeterminate.mat-primary {\r\n  background: #3f51b5\r\n}\r\n\r\n.mat-accent .mat-pseudo-checkbox-checked,\r\n.mat-accent .mat-pseudo-checkbox-indeterminate,\r\n.mat-pseudo-checkbox-checked.mat-accent,\r\n.mat-pseudo-checkbox-indeterminate.mat-accent {\r\n  background: #ff4081\r\n}\r\n\r\n.mat-pseudo-checkbox-checked.mat-warn,\r\n.mat-pseudo-checkbox-indeterminate.mat-warn,\r\n.mat-warn .mat-pseudo-checkbox-checked,\r\n.mat-warn .mat-pseudo-checkbox-indeterminate {\r\n  background: #f44336\r\n}\r\n\r\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\r\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\r\n  background: #b0b0b0\r\n}\r\n\r\n.mat-app-background {\r\n  background-color: #fafafa\r\n}\r\n\r\n.mat-theme-loaded-marker {\r\n  display: none\r\n}\r\n\r\n.mat-autocomplete-panel {\r\n  background: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\r\n  background: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-button,\r\n.mat-icon-button {\r\n  background: 0 0\r\n}\r\n\r\n.mat-button.mat-primary .mat-button-focus-overlay,\r\n.mat-icon-button.mat-primary .mat-button-focus-overlay {\r\n  background-color: rgba(63, 81, 181, .12)\r\n}\r\n\r\n.mat-button.mat-accent .mat-button-focus-overlay,\r\n.mat-icon-button.mat-accent .mat-button-focus-overlay {\r\n  background-color: rgba(255, 64, 129, .12)\r\n}\r\n\r\n.mat-button.mat-warn .mat-button-focus-overlay,\r\n.mat-icon-button.mat-warn .mat-button-focus-overlay {\r\n  background-color: rgba(244, 67, 54, .12)\r\n}\r\n\r\n.mat-button[disabled] .mat-button-focus-overlay,\r\n.mat-icon-button[disabled] .mat-button-focus-overlay {\r\n  background-color: transparent\r\n}\r\n\r\n.mat-button.mat-primary,\r\n.mat-icon-button.mat-primary {\r\n  color: #3f51b5\r\n}\r\n\r\n.mat-button.mat-accent,\r\n.mat-icon-button.mat-accent {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-button.mat-warn,\r\n.mat-icon-button.mat-warn {\r\n  color: #f44336\r\n}\r\n\r\n.mat-button.mat-accent[disabled],\r\n.mat-button.mat-primary[disabled],\r\n.mat-button.mat-warn[disabled],\r\n.mat-button[disabled][disabled],\r\n.mat-icon-button.mat-accent[disabled],\r\n.mat-icon-button.mat-primary[disabled],\r\n.mat-icon-button.mat-warn[disabled],\r\n.mat-icon-button[disabled][disabled] {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-fab,\r\n.mat-mini-fab,\r\n.mat-raised-button {\r\n  color: rgba(0, 0, 0, .87);\r\n  background-color: #fff\r\n}\r\n\r\n.mat-fab.mat-primary,\r\n.mat-mini-fab.mat-primary,\r\n.mat-raised-button.mat-primary {\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-fab.mat-accent,\r\n.mat-mini-fab.mat-accent,\r\n.mat-raised-button.mat-accent {\r\n  color: #fff\r\n}\r\n\r\n.mat-fab.mat-warn,\r\n.mat-mini-fab.mat-warn,\r\n.mat-raised-button.mat-warn {\r\n  color: #fff\r\n}\r\n\r\n.mat-fab.mat-accent[disabled],\r\n.mat-fab.mat-primary[disabled],\r\n.mat-fab.mat-warn[disabled],\r\n.mat-fab[disabled][disabled],\r\n.mat-mini-fab.mat-accent[disabled],\r\n.mat-mini-fab.mat-primary[disabled],\r\n.mat-mini-fab.mat-warn[disabled],\r\n.mat-mini-fab[disabled][disabled],\r\n.mat-raised-button.mat-accent[disabled],\r\n.mat-raised-button.mat-primary[disabled],\r\n.mat-raised-button.mat-warn[disabled],\r\n.mat-raised-button[disabled][disabled] {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-fab.mat-primary,\r\n.mat-mini-fab.mat-primary,\r\n.mat-raised-button.mat-primary {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-fab.mat-accent,\r\n.mat-mini-fab.mat-accent,\r\n.mat-raised-button.mat-accent {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-fab.mat-warn,\r\n.mat-mini-fab.mat-warn,\r\n.mat-raised-button.mat-warn {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-fab.mat-accent[disabled],\r\n.mat-fab.mat-primary[disabled],\r\n.mat-fab.mat-warn[disabled],\r\n.mat-fab[disabled][disabled],\r\n.mat-mini-fab.mat-accent[disabled],\r\n.mat-mini-fab.mat-primary[disabled],\r\n.mat-mini-fab.mat-warn[disabled],\r\n.mat-mini-fab[disabled][disabled],\r\n.mat-raised-button.mat-accent[disabled],\r\n.mat-raised-button.mat-primary[disabled],\r\n.mat-raised-button.mat-warn[disabled],\r\n.mat-raised-button[disabled][disabled] {\r\n  background-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-fab.mat-primary .mat-ripple-element,\r\n.mat-mini-fab.mat-primary .mat-ripple-element,\r\n.mat-raised-button.mat-primary .mat-ripple-element {\r\n  background-color: rgba(255, 255, 255, .2)\r\n}\r\n\r\n.mat-fab.mat-accent .mat-ripple-element,\r\n.mat-mini-fab.mat-accent .mat-ripple-element,\r\n.mat-raised-button.mat-accent .mat-ripple-element {\r\n  background-color: rgba(255, 255, 255, .2)\r\n}\r\n\r\n.mat-fab.mat-warn .mat-ripple-element,\r\n.mat-mini-fab.mat-warn .mat-ripple-element,\r\n.mat-raised-button.mat-warn .mat-ripple-element {\r\n  background-color: rgba(255, 255, 255, .2)\r\n}\r\n\r\n.mat-button.mat-primary .mat-ripple-element {\r\n  background-color: rgba(63, 81, 181, .1)\r\n}\r\n\r\n.mat-button.mat-accent .mat-ripple-element {\r\n  background-color: rgba(255, 64, 129, .1)\r\n}\r\n\r\n.mat-button.mat-warn .mat-ripple-element {\r\n  background-color: rgba(244, 67, 54, .1)\r\n}\r\n\r\n.mat-icon-button.mat-primary .mat-ripple-element {\r\n  background-color: rgba(63, 81, 181, .2)\r\n}\r\n\r\n.mat-icon-button.mat-accent .mat-ripple-element {\r\n  background-color: rgba(255, 64, 129, .2)\r\n}\r\n\r\n.mat-icon-button.mat-warn .mat-ripple-element {\r\n  background-color: rgba(244, 67, 54, .2)\r\n}\r\n\r\n.mat-button-toggle {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\r\n  background-color: rgba(0, 0, 0, .06)\r\n}\r\n\r\n.mat-button-toggle-checked {\r\n  background-color: #e0e0e0;\r\n  color: #000\r\n}\r\n\r\n.mat-button-toggle-disabled {\r\n  background-color: #eee;\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-button-toggle-disabled.mat-button-toggle-checked {\r\n  background-color: #bdbdbd\r\n}\r\n\r\n.mat-card {\r\n  background: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-card-subtitle {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-checkbox-frame {\r\n  border-color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-checkbox-checkmark {\r\n  fill: #fafafa\r\n}\r\n\r\n.mat-checkbox-checkmark-path {\r\n  stroke: #fafafa!important\r\n}\r\n\r\n.mat-checkbox-mixedmark {\r\n  background-color: #fafafa\r\n}\r\n\r\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,\r\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,\r\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,\r\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,\r\n.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\r\n  background-color: #b0b0b0\r\n}\r\n\r\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\r\n  border-color: #b0b0b0\r\n}\r\n\r\n.mat-checkbox-disabled .mat-checkbox-label {\r\n  color: #b0b0b0\r\n}\r\n\r\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\r\n  background-color: rgba(63, 81, 181, .26)\r\n}\r\n\r\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\r\n  background-color: rgba(255, 64, 129, .26)\r\n}\r\n\r\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\r\n  background-color: rgba(244, 67, 54, .26)\r\n}\r\n\r\n.mat-chip:not(.mat-basic-chip) {\r\n  background-color: #e0e0e0;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-chip.mat-chip-selected:not(.mat-basic-chip) {\r\n  background-color: grey;\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary {\r\n  background-color: #3f51b5;\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent {\r\n  background-color: #ff4081;\r\n  color: #fff\r\n}\r\n\r\n.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn {\r\n  background-color: #f44336;\r\n  color: #fff\r\n}\r\n\r\n.mat-table {\r\n  background: #fff\r\n}\r\n\r\n.mat-header-row,\r\n.mat-row {\r\n  border-bottom-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-header-cell {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-cell {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-datepicker-content {\r\n  background-color: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-calendar-arrow {\r\n  border-top-color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-calendar-next-button,\r\n.mat-calendar-previous-button {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-calendar-table-header {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-calendar-table-header-divider::after {\r\n  background: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-calendar-body-label {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-calendar-body-cell-content {\r\n  color: rgba(0, 0, 0, .87);\r\n  border-color: transparent\r\n}\r\n\r\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\r\n:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\r\n  background-color: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-calendar-body-selected {\r\n  background-color: #3f51b5;\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-calendar-body-disabled>.mat-calendar-body-selected {\r\n  background-color: rgba(63, 81, 181, .4)\r\n}\r\n\r\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\r\n  border-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-calendar-body-today.mat-calendar-body-selected {\r\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected) {\r\n  border-color: rgba(0, 0, 0, .18)\r\n}\r\n\r\n.mat-dialog-container {\r\n  background: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-expansion-panel {\r\n  background: #fff;\r\n  color: #000\r\n}\r\n\r\n.mat-action-row {\r\n  border-top-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-expansion-panel-header:focus,\r\n.mat-expansion-panel-header:hover {\r\n  background: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-expansion-panel-header-description {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-expansion-indicator::after {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-icon.mat-primary {\r\n  color: #3f51b5\r\n}\r\n\r\n.mat-icon.mat-accent {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-icon.mat-warn {\r\n  color: #f44336\r\n}\r\n\r\n.mat-input-placeholder {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-focused .mat-input-placeholder {\r\n  color: #3f51b5\r\n}\r\n\r\n.mat-focused .mat-input-placeholder.mat-accent {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-focused .mat-input-placeholder.mat-warn {\r\n  color: #f44336\r\n}\r\n\r\n.mat-input-element:disabled {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-focused .mat-input-placeholder.mat-float .mat-placeholder-required,\r\ninput.mat-input-element:-webkit-autofill+.mat-input-placeholder .mat-placeholder-required {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-input-underline {\r\n  background-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-input-ripple {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-input-ripple.mat-accent {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-input-ripple.mat-warn {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-input-invalid .mat-input-placeholder {\r\n  color: #f44336\r\n}\r\n\r\n.mat-input-invalid .mat-input-placeholder.mat-accent,\r\n.mat-input-invalid .mat-input-placeholder.mat-float .mat-placeholder-required {\r\n  color: #f44336\r\n}\r\n\r\n.mat-input-invalid .mat-input-ripple {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-input-error {\r\n  color: #f44336\r\n}\r\n\r\n.mat-list .mat-list-item,\r\n.mat-nav-list .mat-list-item {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-list .mat-subheader,\r\n.mat-nav-list .mat-subheader {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-divider {\r\n  border-top-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-nav-list .mat-list-item {\r\n  outline: 0\r\n}\r\n\r\n.mat-nav-list .mat-list-item.mat-list-item-focus,\r\n.mat-nav-list .mat-list-item:hover {\r\n  background: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-menu-content {\r\n  background: #fff\r\n}\r\n\r\n.mat-menu-item {\r\n  background: 0 0;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-menu-item[disabled] {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-menu-item .mat-icon {\r\n  color: rgba(0, 0, 0, .54);\r\n  vertical-align: middle\r\n}\r\n\r\n.mat-menu-item:focus:not([disabled]),\r\n.mat-menu-item:hover:not([disabled]) {\r\n  background: rgba(0, 0, 0, .04)\r\n}\r\n\r\n.mat-paginator {\r\n  background: #fff\r\n}\r\n\r\n.mat-paginator,\r\n.mat-paginator-page-size .mat-select-trigger {\r\n  color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-paginator-decrement,\r\n.mat-paginator-increment {\r\n  border-top: 2px solid rgba(0, 0, 0, .54);\r\n  border-right: 2px solid rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-icon-button[disabled] .mat-paginator-decrement,\r\n.mat-icon-button[disabled] .mat-paginator-increment {\r\n  border-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-progress-bar-background {\r\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23c5cae9%27%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n\r\n.mat-progress-bar-buffer {\r\n  background-color: #c5cae9\r\n}\r\n\r\n.mat-progress-bar-fill::after {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\r\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff80ab%27%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n\r\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\r\n  background-color: #ff80ab\r\n}\r\n\r\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\r\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\")\r\n}\r\n\r\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\r\n  background-color: #ffcdd2\r\n}\r\n\r\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-progress-spinner path,\r\n.mat-spinner path {\r\n  stroke: #3f51b5\r\n}\r\n\r\n.mat-progress-spinner.mat-accent path,\r\n.mat-spinner.mat-accent path {\r\n  stroke: #ff4081\r\n}\r\n\r\n.mat-progress-spinner.mat-warn path,\r\n.mat-spinner.mat-warn path {\r\n  stroke: #f44336\r\n}\r\n\r\n.mat-radio-outer-circle {\r\n  border-color: rgba(0, 0, 0, .54)\r\n}\r\n\r\n.mat-radio-disabled .mat-radio-outer-circle {\r\n  border-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-radio-disabled .mat-radio-inner-circle,\r\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element {\r\n  background-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-radio-disabled .mat-radio-label-content {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\r\n  border-color: #3f51b5\r\n}\r\n\r\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\r\n  background-color: rgba(63, 81, 181, .26)\r\n}\r\n\r\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\r\n  border-color: #ff4081\r\n}\r\n\r\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\r\n  background-color: rgba(255, 64, 129, .26)\r\n}\r\n\r\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\r\n  border-color: #f44336\r\n}\r\n\r\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\r\n  background-color: rgba(244, 67, 54, .26)\r\n}\r\n\r\n.mat-select-arrow,\r\n.mat-select-trigger {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-select-underline {\r\n  background-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-select-arrow,\r\n.mat-select-disabled .mat-select-value,\r\n.mat-select-trigger {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-select-content,\r\n.mat-select-panel-done-animating {\r\n  background: #fff\r\n}\r\n\r\n.mat-select-value {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow,\r\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-trigger {\r\n  color: #3f51b5\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-underline {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-arrow,\r\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-trigger {\r\n  color: #ff4081\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-underline {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-arrow,\r\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-trigger,\r\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow,\r\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger {\r\n  color: #f44336\r\n}\r\n\r\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-underline,\r\n.mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-sidenav-container {\r\n  background-color: #fafafa;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-sidenav {\r\n  background-color: #fff;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-sidenav.mat-sidenav-push {\r\n  background-color: #fff\r\n}\r\n\r\n.mat-sidenav-backdrop.mat-sidenav-shown {\r\n  background-color: rgba(0, 0, 0, .6)\r\n}\r\n\r\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: #e91e63\r\n}\r\n\r\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\n  background-color: rgba(233, 30, 99, .5)\r\n}\r\n\r\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\r\n  background-color: rgba(0, 0, 0, .06)\r\n}\r\n\r\n.mat-slide-toggle .mat-ripple-element {\r\n  background-color: rgba(233, 30, 99, .12)\r\n}\r\n\r\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\n  background-color: rgba(63, 81, 181, .5)\r\n}\r\n\r\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\r\n  background-color: rgba(0, 0, 0, .06)\r\n}\r\n\r\n.mat-slide-toggle.mat-primary .mat-ripple-element {\r\n  background-color: rgba(63, 81, 181, .12)\r\n}\r\n\r\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\n  background-color: rgba(244, 67, 54, .5)\r\n}\r\n\r\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\r\n  background-color: rgba(0, 0, 0, .06)\r\n}\r\n\r\n.mat-slide-toggle.mat-warn .mat-ripple-element {\r\n  background-color: rgba(244, 67, 54, .12)\r\n}\r\n\r\n.mat-disabled .mat-slide-toggle-thumb {\r\n  background-color: #bdbdbd\r\n}\r\n\r\n.mat-disabled .mat-slide-toggle-bar {\r\n  background-color: rgba(0, 0, 0, .1)\r\n}\r\n\r\n.mat-slide-toggle-thumb {\r\n  background-color: #fafafa\r\n}\r\n\r\n.mat-slide-toggle-bar {\r\n  background-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-slider-track-background {\r\n  background-color: rgba(0, 0, 0, .26)\r\n}\r\n\r\n.mat-primary .mat-slider-thumb,\r\n.mat-primary .mat-slider-thumb-label,\r\n.mat-primary .mat-slider-track-fill {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-primary .mat-slider-thumb-label-text {\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-accent .mat-slider-thumb,\r\n.mat-accent .mat-slider-thumb-label,\r\n.mat-accent .mat-slider-track-fill {\r\n  background-color: #ff4081\r\n}\r\n\r\n.mat-accent .mat-slider-thumb-label-text {\r\n  color: #fff\r\n}\r\n\r\n.mat-warn .mat-slider-thumb,\r\n.mat-warn .mat-slider-thumb-label,\r\n.mat-warn .mat-slider-track-fill {\r\n  background-color: #f44336\r\n}\r\n\r\n.mat-warn .mat-slider-thumb-label-text {\r\n  color: #fff\r\n}\r\n\r\n.mat-slider-focus-ring {\r\n  background-color: rgba(255, 64, 129, .2)\r\n}\r\n\r\n.cdk-focused .mat-slider-track-background,\r\n.mat-slider:hover .mat-slider-track-background {\r\n  background-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-slider-disabled .mat-slider-thumb,\r\n.mat-slider-disabled .mat-slider-track-background,\r\n.mat-slider-disabled .mat-slider-track-fill {\r\n  background-color: rgba(0, 0, 0, .26)\r\n}\r\n\r\n.mat-slider-disabled:hover .mat-slider-track-background {\r\n  background-color: rgba(0, 0, 0, .26)\r\n}\r\n\r\n.mat-slider-min-value .mat-slider-focus-ring {\r\n  background-color: rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\r\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n  background-color: #000\r\n}\r\n\r\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\r\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\r\n  background-color: rgba(0, 0, 0, .26)\r\n}\r\n\r\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\r\n  border-color: rgba(0, 0, 0, .26);\r\n  background-color: transparent\r\n}\r\n\r\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,\r\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb {\r\n  border-color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,\r\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb {\r\n  border-color: rgba(0, 0, 0, .26)\r\n}\r\n\r\n.mat-slider-has-ticks .mat-slider-wrapper::after {\r\n  border-color: rgba(0, 0, 0, .7)\r\n}\r\n\r\n.mat-slider-horizontal .mat-slider-ticks {\r\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) 2px, transparent 0, transparent);\r\n  background-image: -moz-repeating-linear-gradient(.0001deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) 2px, transparent 0, transparent)\r\n}\r\n\r\n.mat-slider-vertical .mat-slider-ticks {\r\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) 2px, transparent 0, transparent)\r\n}\r\n\r\n.mat-tab-header,\r\n.mat-tab-nav-bar {\r\n  border-bottom: 1px solid rgba(0, 0, 0, .12)\r\n}\r\n\r\n.mat-tab-group-inverted-header .mat-tab-header,\r\n.mat-tab-group-inverted-header .mat-tab-nav-bar {\r\n  border-top: 1px solid rgba(0, 0, 0, .12);\r\n  border-bottom: none\r\n}\r\n\r\n.mat-tab-label:focus {\r\n  background-color: rgba(197, 202, 233, .3)\r\n}\r\n\r\n.mat-ink-bar {\r\n  background-color: #3f51b5\r\n}\r\n\r\n.mat-tab-label,\r\n.mat-tab-link {\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-tab-label.mat-tab-disabled,\r\n.mat-tab-link.mat-tab-disabled {\r\n  color: rgba(0, 0, 0, .38)\r\n}\r\n\r\n.mat-toolbar {\r\n  background: #f5f5f5;\r\n  color: rgba(0, 0, 0, .87)\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  background: #3f51b5;\r\n  color: rgba(255, 255, 255, .87)\r\n}\r\n\r\n.mat-toolbar.mat-accent {\r\n  background: #ff4081;\r\n  color: #fff\r\n}\r\n\r\n.mat-toolbar.mat-warn {\r\n  background: #f44336;\r\n  color: #fff\r\n}\r\n\r\n.mat-tooltip {\r\n  background: rgba(97, 97, 97, .9)\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map