(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/ReplaySubject'), require('rxjs/Subject'), require('rxjs/BehaviorSubject'), require('rxjs/operators/map'), require('rxjs/operators/filter'), require('rxjs/operators/pairwise'), require('rxjs/operators/distinctUntilChanged'), require('rxjs/operators/startWith'), require('rxjs/operators/share'), require('@angular/forms'), require('@angular/router'), require('rxjs/operators/takeWhile'), require('rxjs/observable/of'), require('rxjs/operators/delay')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/ReplaySubject', 'rxjs/Subject', 'rxjs/BehaviorSubject', 'rxjs/operators/map', 'rxjs/operators/filter', 'rxjs/operators/pairwise', 'rxjs/operators/distinctUntilChanged', 'rxjs/operators/startWith', 'rxjs/operators/share', '@angular/forms', '@angular/router', 'rxjs/operators/takeWhile', 'rxjs/observable/of', 'rxjs/operators/delay'], factory) :
	(factory((global.nb = global.nb || {}, global.nb.theme = global.nb.theme || {}),global.ng.core,global.ng.common,global.Rx,global.Rx,global.Rx,global.Rx.operators,global.Rx.operators,global.Rx.operators,global.Rx.operators,global.Rx.operators,global.Rx.operators,global.ng.forms,global.ng.router,global.Rx.operators,global.Rx.Observable,global.Rx.operators));
}(this, (function (exports,_angular_core,_angular_common,rxjs_ReplaySubject,rxjs_Subject,rxjs_BehaviorSubject,rxjs_operators_map,rxjs_operators_filter,rxjs_operators_pairwise,rxjs_operators_distinctUntilChanged,rxjs_operators_startWith,rxjs_operators_share,_angular_forms,_angular_router,rxjs_operators_takeWhile,rxjs_observable_of,rxjs_operators_delay) { 'use strict';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var nbThemeOptionsToken = new _angular_core.InjectionToken('NB_THEME_OPTIONS');
var nbMediaBreakpointsToken = new _angular_core.InjectionToken('NB_MEDIA_BREAKPOINTS');
var nbBuiltInJSThemesToken = new _angular_core.InjectionToken('NB_BUILT_IN_THEMES');
var nbJSThemesToken = new _angular_core.InjectionToken('NB_THEMES');

var NbColorHelper = /** @class */ (function () {
    function NbColorHelper() {
    }
    NbColorHelper.shade = function (color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    };
    NbColorHelper.tint = function (color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    };
    NbColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var firstPart = h2d(color1.substr(i, 2));
            var secondPart = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    NbColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    return NbColorHelper;
}());

var palette = {
    primary: '#8a7fff',
    success: '#40dc7e',
    info: '#4ca6ff',
    warning: '#ffa100',
    danger: '#ff4c6a',
};
var DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSecondary: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        bg: '#ffffff',
        fg: '#a4abb3',
        fgHeading: '#2a2a2a',
        fgText: '#3b3b3b',
        fgHighlight: '#41d974',
        layoutBg: '#ebeff5',
        separator: '#ebeef2',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: NbColorHelper.tint(palette.primary, 15),
        successLight: NbColorHelper.tint(palette.success, 15),
        infoLight: NbColorHelper.tint(palette.info, 15),
        warningLight: NbColorHelper.tint(palette.warning, 15),
        dangerLight: NbColorHelper.tint(palette.danger, 15),
    },
};

var palette$1 = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a',
};
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        bg: '#3d3780',
        fg: '#a1a1e5',
        fgHeading: '#ffffff',
        fgText: '#d1d1ff',
        fgHighlight: '#00f9a6',
        layoutBg: '#2f296b',
        separator: '#342e73',
        primary: palette$1.primary,
        success: palette$1.success,
        info: palette$1.info,
        warning: palette$1.warning,
        danger: palette$1.danger,
        primaryLight: NbColorHelper.tint(palette$1.primary, 20),
        successLight: NbColorHelper.tint(palette$1.success, 20),
        infoLight: NbColorHelper.tint(palette$1.info, 20),
        warningLight: NbColorHelper.tint(palette$1.warning, 20),
        dangerLight: NbColorHelper.tint(palette$1.danger, 20),
    },
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = /** @class */ (function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        if (newThemes === void 0) { newThemes = []; }
        var _this = this;
        this.builtInThemes = builtInThemes;
        this.newThemes = newThemes;
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    NbJSThemesRegistry.prototype.register = /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    NbJSThemesRegistry.prototype.has = /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    NbJSThemesRegistry.prototype.get = /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) { return tm.name === theme.name; })
                    || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) { return tm.name === theme.name; })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = 
    // TODO: move to helpers
    function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
        var _a, _b;
    };
    NbJSThemesRegistry.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbJSThemesRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core.Inject, args: [nbBuiltInJSThemesToken,] },] },
        { type: Array, decorators: [{ type: _angular_core.Inject, args: [nbJSThemesToken,] },] },
    ]; };
    return NbJSThemesRegistry;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
var NbMediaBreakpointsService = /** @class */ (function () {
    function NbMediaBreakpointsService(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce(function (res, b) {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    NbMediaBreakpointsService.prototype.getByWidth = /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    function (width) {
        var unknown = { name: 'unknown', width: width };
        var breakpoints = this.getBreakpoints();
        return breakpoints
            .find(function (point, index) {
            var next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    };
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    NbMediaBreakpointsService.prototype.getByName = /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    function (name) {
        var unknown = { name: 'unknown', width: NaN };
        var breakpoints = this.getBreakpoints();
        return breakpoints.find(function (point) { return name === point.name; }) || unknown;
    };
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    NbMediaBreakpointsService.prototype.getBreakpoints = /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    function () {
        return this.breakpoints;
    };
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    NbMediaBreakpointsService.prototype.getBreakpointsMap = /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    function () {
        return this.breakpointsMap;
    };
    NbMediaBreakpointsService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbMediaBreakpointsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [nbMediaBreakpointsToken,] },] },
    ]; };
    return NbMediaBreakpointsService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = /** @class */ (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new rxjs_ReplaySubject.ReplaySubject(1);
        this.appendToLayoutTop$ = new rxjs_ReplaySubject.ReplaySubject();
        this.createLayoutTop$ = new rxjs_Subject.Subject();
        this.appendLayoutClass$ = new rxjs_Subject.Subject();
        this.removeLayoutClass$ = new rxjs_Subject.Subject();
        this.changeWindowWidth$ = new rxjs_ReplaySubject.ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    NbThemeService.prototype.appendToLayoutTop = function (component) {
        var subject = new rxjs_ReplaySubject.ReplaySubject(1);
        this.appendToLayoutTop$.next({ component: component, listener: subject });
        return subject.asObservable();
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    NbThemeService.prototype.getJsTheme = /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    function () {
        var _this = this;
        return this.onThemeChange().pipe(rxjs_operators_map.map(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        }));
    };
    NbThemeService.prototype.clearLayoutTop = function () {
        var observable = new rxjs_BehaviorSubject.BehaviorSubject(null);
        this.createLayoutTop$.next({ listener: observable });
        this.appendToLayoutTop$ = new rxjs_ReplaySubject.ReplaySubject();
        return observable.asObservable();
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    NbThemeService.prototype.onMediaQueryChange = /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    function () {
        var _this = this;
        return this.changeWindowWidth$
            .pipe(rxjs_operators_startWith.startWith(undefined), rxjs_operators_pairwise.pairwise(), rxjs_operators_map.map(function (_a) {
            var prevWidth = _a[0], width = _a[1];
            return [
                _this.breakpointService.getByWidth(prevWidth),
                _this.breakpointService.getByWidth(width),
            ];
        }), rxjs_operators_filter.filter(function (_a) {
            var prevPoint = _a[0], point = _a[1];
            return prevPoint.name !== point.name;
        }), rxjs_operators_distinctUntilChanged.distinctUntilChanged(null, function (params) { return params[0].name + params[1].name; }), rxjs_operators_share.share());
    };
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.pipe(rxjs_operators_share.share());
    };
    NbThemeService.prototype.onAppendToTop = function () {
        return this.appendToLayoutTop$.pipe(rxjs_operators_share.share());
    };
    NbThemeService.prototype.onClearLayoutTop = function () {
        return this.createLayoutTop$.pipe(rxjs_operators_share.share());
    };
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.pipe(rxjs_operators_share.share());
    };
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.pipe(rxjs_operators_share.share());
    };
    NbThemeService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [nbThemeOptionsToken,] },] },
        { type: NbMediaBreakpointsService, },
        { type: NbJSThemesRegistry, },
    ]; };
    return NbThemeService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Service to control the global page spinner.
 */
var NbSpinnerService = /** @class */ (function () {
    function NbSpinnerService() {
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    NbSpinnerService.prototype.registerLoader = /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    /**
       * Clears the list of loader
       */
    NbSpinnerService.prototype.clear = /**
       * Clears the list of loader
       */
    function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    /**
       * Start the loader process, show spinnder and execute loaders
       */
    NbSpinnerService.prototype.load = /**
       * Start the loader process, show spinnder and execute loaders
       */
    function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) { done = function () { }; }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        })
            .catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = 
    // TODO is there any better way of doing this?
    function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return document.getElementById(this.selector);
    };
    NbSpinnerService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbSpinnerService.ctorParameters = function () { return []; };
    return NbSpinnerService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbThemeModule = /** @class */ (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    NbThemeModule.forRoot = 
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: nbThemeOptionsToken, useValue: nbThemeOptions || {} },
                { provide: nbBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
                { provide: nbJSThemesToken, useValue: nbJSThemes || [] },
                { provide: nbMediaBreakpointsToken, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
            ],
        };
    };
    NbThemeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                    ],
                    exports: [],
                },] },
    ];
    /** @nocollapse */
    NbThemeModule.ctorParameters = function () { return []; };
    return NbThemeModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbSharedModule = /** @class */ (function () {
    function NbSharedModule() {
    }
    NbSharedModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_router.RouterModule,
                    ],
                },] },
    ];
    /** @nocollapse */
    NbSharedModule.ctorParameters = function () { return []; };
    return NbSharedModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Component intended to be used within  the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
var NbCardHeaderComponent = /** @class */ (function () {
    function NbCardHeaderComponent() {
    }
    NbCardHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-card-header',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardHeaderComponent.ctorParameters = function () { return []; };
    return NbCardHeaderComponent;
}());
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = /** @class */ (function () {
    function NbCardBodyComponent() {
    }
    NbCardBodyComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-card-body',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardBodyComponent.ctorParameters = function () { return []; };
    return NbCardBodyComponent;
}());
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = /** @class */ (function () {
    function NbCardFooterComponent() {
    }
    NbCardFooterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-card-footer',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardFooterComponent.ctorParameters = function () { return []; };
    return NbCardFooterComponent;
}());
/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common card sections:
 * ```
 * <nb-card-header></nb-card-header>
 * <nb-card-body></nb-card-body>
 * <nb-card-footer></nb-card-footer>
 * ```
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
var NbCardComponent = /** @class */ (function () {
    function NbCardComponent() {
    }
    Object.defineProperty(NbCardComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function () {
            return this.size === NbCardComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCardComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function () {
            return this.size === NbCardComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "active", {
        get: function () {
            return this.status === NbCardComponent.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function () {
            return this.status === NbCardComponent.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function () {
            return this.status === NbCardComponent.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function () {
            return this.status === NbCardComponent.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function () {
            return this.status === NbCardComponent.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setSize", {
        set: /**
           * Card size, available sizes:
           * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
           * @param {string} val
           */
        function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setStatus", {
        set: /**
           * Card status (adds specific styles):
           * active, disabled, primary, info, success, warning, danger
           * @param {string} val
           */
        function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    NbCardComponent.SIZE_XXSMALL = 'xxsmall';
    NbCardComponent.SIZE_XSMALL = 'xsmall';
    NbCardComponent.SIZE_SMALL = 'small';
    NbCardComponent.SIZE_MEDIUM = 'medium';
    NbCardComponent.SIZE_LARGE = 'large';
    NbCardComponent.SIZE_XLARGE = 'xlarge';
    NbCardComponent.SIZE_XXLARGE = 'xxlarge';
    NbCardComponent.STATUS_ACTIVE = 'active';
    NbCardComponent.STATUS_DISABLED = 'disabled';
    NbCardComponent.STATUS_PRIMARY = 'primary';
    NbCardComponent.STATUS_INFO = 'info';
    NbCardComponent.STATUS_SUCCESS = 'success';
    NbCardComponent.STATUS_WARNING = 'warning';
    NbCardComponent.STATUS_DANGER = 'danger';
    NbCardComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-card',
                    styles: [":host{display:flex;flex-direction:column} "],
                    template: "\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbCardComponent.ctorParameters = function () { return []; };
    NbCardComponent.propDecorators = {
        "xxsmall": [{ type: _angular_core.HostBinding, args: ['class.xxsmall-card',] },],
        "xsmall": [{ type: _angular_core.HostBinding, args: ['class.xsmall-card',] },],
        "small": [{ type: _angular_core.HostBinding, args: ['class.small-card',] },],
        "medium": [{ type: _angular_core.HostBinding, args: ['class.medium-card',] },],
        "large": [{ type: _angular_core.HostBinding, args: ['class.large-card',] },],
        "xlarge": [{ type: _angular_core.HostBinding, args: ['class.xlarge-card',] },],
        "xxlarge": [{ type: _angular_core.HostBinding, args: ['class.xxlarge-card',] },],
        "active": [{ type: _angular_core.HostBinding, args: ['class.active-card',] },],
        "disabled": [{ type: _angular_core.HostBinding, args: ['class.disabled-card',] },],
        "primary": [{ type: _angular_core.HostBinding, args: ['class.primary-card',] },],
        "info": [{ type: _angular_core.HostBinding, args: ['class.info-card',] },],
        "success": [{ type: _angular_core.HostBinding, args: ['class.success-card',] },],
        "warning": [{ type: _angular_core.HostBinding, args: ['class.warning-card',] },],
        "danger": [{ type: _angular_core.HostBinding, args: ['class.danger-card',] },],
        "setSize": [{ type: _angular_core.Input, args: ['size',] },],
        "setStatus": [{ type: _angular_core.Input, args: ['status',] },],
    };
    return NbCardComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
];
var NbCardModule = /** @class */ (function () {
    function NbCardModule() {
    }
    NbCardModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_CARD_COMPONENTS.slice(),
                    exports: NB_CARD_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbCardModule.ctorParameters = function () { return []; };
    return NbCardModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * @example By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 * ```
 * <nb-layout>
 *   <nb-layout-column>Second</nb-layout-column>
 *   <nb-layout-column>Third</nb-layout-column>
 *   <nb-layout-column left>First</nb-layout-column>
 * </nb-layout>
 * ```
 */
var NbLayoutColumnComponent = /** @class */ (function () {
    function NbLayoutColumnComponent() {
    }
    Object.defineProperty(NbLayoutColumnComponent.prototype, "left", {
        set: /**
           * Move the column to the very left position in the layout.
           * @param {boolean} val
           */
        function (val) {
            this.leftValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutColumnComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-layout-column',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutColumnComponent.ctorParameters = function () { return []; };
    NbLayoutColumnComponent.propDecorators = {
        "leftValue": [{ type: _angular_core.HostBinding, args: ['class.left',] },],
        "left": [{ type: _angular_core.Input },],
    };
    return NbLayoutColumnComponent;
}());
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page).
 *
 * @styles
 *
 * header-font-family
 * header-line-height
 * header-fg
 * header-bg
 * header-height
 * header-padding
 * header-shadow
 */
var NbLayoutHeaderComponent = /** @class */ (function () {
    function NbLayoutHeaderComponent() {
    }
    Object.defineProperty(NbLayoutHeaderComponent.prototype, "fixed", {
        set: /**
           * Makes the header sticky to the top of the nb-layout.
           * @param {boolean} val
           */
        function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-layout-header',
                    template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutHeaderComponent.ctorParameters = function () { return []; };
    NbLayoutHeaderComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core.HostBinding, args: ['class.fixed',] },],
        "fixed": [{ type: _angular_core.Input },],
    };
    return NbLayoutHeaderComponent;
}());
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-height
 * footer-padding
 * footer-fg
 * footer-bg
 * footer-separator
 * footer-shadow
 */
var NbLayoutFooterComponent = /** @class */ (function () {
    function NbLayoutFooterComponent() {
    }
    Object.defineProperty(NbLayoutFooterComponent.prototype, "fixed", {
        set: /**
           * Makes the footer sticky to the bottom of the window.
           * @param {boolean} val
           */
        function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutFooterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-layout-footer',
                    template: "\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutFooterComponent.ctorParameters = function () { return []; };
    NbLayoutFooterComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core.HostBinding, args: ['class.fixed',] },],
        "fixed": [{ type: _angular_core.Input },],
    };
    return NbLayoutFooterComponent;
}());
/**
 * The general Nebular component-container.
 * It is required that all children component of the framework are located inside of the nb-layout.
 *
 * Can contain the following components inside:
 *
 * ```
 * nb-layout-header
 * nb-layout-column
 * nb-sidebar
 * nb-layout-footer
 * ```
 *
 * By default the layout fills up the full view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The children components are projected into the flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are below under the `ThemeService` section.
 *
 * The layout component is also responsible for changing of the application themes.
 * It listens to the `themeChange` event and change the theme CSS class appended to body.
 * Based on the class appended a specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * @example A simple layout example:
 *
 * ```
 * <nb-layout>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @example For example, it is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```
 * <nb-layout center>
 *   <nb-layout-header>Great Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-font-family
 * layout-font-size
 * layout-line-height
 * layout-fg
 * layout-bg
 * layout-min-height
 * layout-content-width
 * layout-window-mode-min-width
 * layout-window-mode-max-width: window mode only, after this value layout turns into floating window
 * layout-window-mode-bg: window mode only, background
 * layout-window-mode-padding-top: window mode only, max padding from top
 * layout-window-shadow: window mode shadow
 * layout-padding
 * layout-medium-padding
 * layout-small-padding
 */
var NbLayoutComponent = /** @class */ (function () {
    function NbLayoutComponent(themeService, spinnerService, componentFactoryResolver, elementRef, renderer, router) {
        var _this = this;
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.centerValue = false;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.afterViewInit$ = new rxjs_BehaviorSubject.BehaviorSubject(null);
        this.alive = true;
        this.themeService.onThemeChange()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            var body = document.getElementsByTagName('body')[0];
            if (theme.previous) {
                _this.renderer.removeClass(body, "nb-theme-" + theme.previous);
            }
            _this.renderer.addClass(body, "nb-theme-" + theme.name);
        });
        this.themeService.onAppendLayoutClass()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.addClass(_this.elementRef.nativeElement, className);
        });
        this.themeService.onRemoveLayoutClass()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (className) {
            _this.renderer.removeClass(_this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise(function (resolve, reject) {
            _this.afterViewInit$
                .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
                .subscribe(function (_) { return resolve(); });
        }));
        this.spinnerService.load();
        // trigger first time so that after the change we have the initial value
        this.themeService.changeWindowWidth(window.innerWidth);
    }
    Object.defineProperty(NbLayoutComponent.prototype, "center", {
        set: /**
           * Defines whether the layout columns will be centered after some width
           * @param {boolean} val
           */
        function (val) {
            this.centerValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "windowMode", {
        set: /**
           * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
           * becomes centered by width with a margin from the top of the screen, like a floating window.
           * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
           * window. (TODO: check this)
           * @param {boolean} val
           */
        function (val) {
            this.windowModeValue = convertToBoolProperty(val);
            this.withScroll = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbLayoutComponent.prototype, "withScroll", {
        set: /**
           * Defines whether to move the scrollbars to layout or leave it at the body level.
           * Automatically set to true when `windowMode` is enabled.
           * @param {boolean} val
           */
        function (val) {
            this.withScrollValue = convertToBoolProperty(val);
            // TODO: is this the best way of doing it? as we don't have access to body from theme styles
            // TODO: add e2e test
            var body = document.getElementsByTagName('body')[0];
            if (this.withScrollValue) {
                this.renderer.setStyle(body, 'overflow', 'hidden');
            }
            else {
                this.renderer.setStyle(body, 'overflow', 'initial');
            }
        },
        enumerable: true,
        configurable: true
    });
    NbLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeService.onAppendToTop()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(data.component);
            var componentRef = _this.veryTopRef.createComponent(componentFactory);
            data.listener.next(componentRef);
            data.listener.complete();
        });
        this.themeService.onClearLayoutTop()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.veryTopRef.clear();
            data.listener.next(true);
        });
        this.afterViewInit$.next(true);
    };
    NbLayoutComponent.prototype.ngOnInit = function () {
        this.initScrollTop();
    };
    NbLayoutComponent.prototype.ngOnDestroy = function () {
        this.themeService.clearLayoutTop();
        this.alive = false;
    };
    NbLayoutComponent.prototype.onResize = function (event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    };
    NbLayoutComponent.prototype.initScrollTop = function () {
        var _this = this;
        this.router.events
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }), rxjs_operators_filter.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }))
            .subscribe(function () {
            _this.scrollableContainerRef.nativeElement.scrollTo && _this.scrollableContainerRef.nativeElement.scrollTo(0, 0);
        });
    };
    NbLayoutComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-layout',
                    styles: [":host{-webkit-font-smoothing:antialiased}:host .layout{display:flex;flex-direction:column}:host /deep/ nb-layout-header{display:block}:host /deep/ nb-layout-header nav{align-items:center;display:flex}:host /deep/ nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}:host .layout-container /deep/ nb-sidebar{order:0}:host .layout-container /deep/ nb-sidebar.right{order:2}:host .layout-container /deep/ nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns /deep/ nb-layout-column{order:2;flex:1 0;width:0}:host .layout-container .content .columns /deep/ nb-layout-column.left{order:1}:host .layout-container .content /deep/ nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content /deep/ nb-layout-footer nav{justify-content:center;display:flex} "],
                    template: "\n    <ng-template #layoutTopDynamicArea></ng-template>\n    <div class=\"scrollable-container\" #scrollableContainer>\n      <div class=\"layout\">\n        <ng-content select=\"nb-layout-header\"></ng-content>\n        <div class=\"layout-container\">\n          <ng-content select=\"nb-sidebar\"></ng-content>\n          <div class=\"content\" [class.center]=\"centerValue\">\n            <div class=\"columns\">\n              <ng-content select=\"nb-layout-column\"></ng-content>\n            </div>\n            <ng-content select=\"nb-layout-footer\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLayoutComponent.ctorParameters = function () { return [
        { type: NbThemeService, },
        { type: NbSpinnerService, },
        { type: _angular_core.ComponentFactoryResolver, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer2, },
        { type: _angular_router.Router, },
    ]; };
    NbLayoutComponent.propDecorators = {
        "windowModeValue": [{ type: _angular_core.HostBinding, args: ['class.window-mode',] },],
        "withScrollValue": [{ type: _angular_core.HostBinding, args: ['class.with-scroll',] },],
        "center": [{ type: _angular_core.Input },],
        "windowMode": [{ type: _angular_core.Input },],
        "withScroll": [{ type: _angular_core.Input },],
        "veryTopRef": [{ type: _angular_core.ViewChild, args: ['layoutTopDynamicArea', { read: _angular_core.ViewContainerRef },] },],
        "scrollableContainerRef": [{ type: _angular_core.ViewChild, args: ['scrollableContainer', { read: _angular_core.ElementRef },] },],
        "onResize": [{ type: _angular_core.HostListener, args: ['window:resize', ['$event'],] },],
    };
    return NbLayoutComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
var NbLayoutModule = /** @class */ (function () {
    function NbLayoutModule() {
    }
    NbLayoutModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_LAYOUT_COMPONENTS.slice(),
                    exports: NB_LAYOUT_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbLayoutModule.ctorParameters = function () { return []; };
    return NbLayoutModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var itemClick$ = new rxjs_ReplaySubject.ReplaySubject(1);
var addItems$ = new rxjs_ReplaySubject.ReplaySubject(1);
var navigateHome$ = new rxjs_ReplaySubject.ReplaySubject(1);
var getSelectedItem$ = new rxjs_ReplaySubject.ReplaySubject(1);
var itemSelect$ = new rxjs_ReplaySubject.ReplaySubject(1);
var itemHover$ = new rxjs_ReplaySubject.ReplaySubject(1);
var submenuToggle$ = new rxjs_ReplaySubject.ReplaySubject(1);
/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
var NbMenuItem = /** @class */ (function () {
    function NbMenuItem() {
        /**
           * Item is selected when partly or fully equal to the current url
           * @type {string}
           */
        this.pathMatch = 'full';
    }
    return NbMenuItem;
}());
// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
var NbMenuService = /** @class */ (function () {
    function NbMenuService() {
    }
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    NbMenuService.prototype.addItems = /**
       * Add items to the end of the menu items list
       * @param {List<NbMenuItem>} items
       * @param {string} tag
       */
    function (items, tag) {
        addItems$.next({ tag: tag, items: items });
    };
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    NbMenuService.prototype.navigateHome = /**
       * Navigate to the home menu item
       * @param {string} tag
       */
    function (tag) {
        navigateHome$.next({ tag: tag });
    };
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    NbMenuService.prototype.getSelectedItem = /**
       * Returns currently selected item. Won't subscribe to the future events.
       * @param {string} tag
       * @returns {Observable<{tag: string; item: NbMenuItem}>}
       */
    function (tag) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        getSelectedItem$.next({ tag: tag, listener: listener });
        return listener.asObservable();
    };
    NbMenuService.prototype.onItemClick = function () {
        return itemClick$.pipe(rxjs_operators_share.share());
    };
    NbMenuService.prototype.onItemSelect = function () {
        return itemSelect$.pipe(rxjs_operators_share.share());
    };
    NbMenuService.prototype.onItemHover = function () {
        return itemHover$.pipe(rxjs_operators_share.share());
    };
    NbMenuService.prototype.onSubmenuToggle = function () {
        return submenuToggle$.pipe(rxjs_operators_share.share());
    };
    NbMenuService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbMenuService.ctorParameters = function () { return []; };
    return NbMenuService;
}());
var NbMenuInternalService = /** @class */ (function () {
    function NbMenuInternalService(router, location) {
        this.router = router;
        this.location = location;
        this.items = [];
        this.items = [];
    }
    NbMenuInternalService.prototype.getItems = function () {
        return this.items;
    };
    NbMenuInternalService.prototype.prepareItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.setParent(i); });
        items.forEach(function (i) { return _this.prepareItem(i); });
    };
    NbMenuInternalService.prototype.resetItems = function (items) {
        var _this = this;
        items.forEach(function (i) { return _this.resetItem(i); });
    };
    NbMenuInternalService.prototype.collapseAll = function (items, except) {
        var _this = this;
        items.forEach(function (i) { return _this.collapseItem(i, except); });
    };
    NbMenuInternalService.prototype.onAddItem = function () {
        return addItems$.pipe(rxjs_operators_share.share());
    };
    NbMenuInternalService.prototype.onNavigateHome = function () {
        return navigateHome$.pipe(rxjs_operators_share.share());
    };
    NbMenuInternalService.prototype.onGetSelectedItem = function () {
        return getSelectedItem$.pipe(rxjs_operators_share.share());
    };
    NbMenuInternalService.prototype.itemHover = function (item, tag) {
        itemHover$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.submenuToggle = function (item, tag) {
        submenuToggle$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemSelect = function (item, tag) {
        itemSelect$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.itemClick = function (item, tag) {
        itemClick$.next({ tag: tag, item: item });
    };
    NbMenuInternalService.prototype.resetItem = function (item) {
        var _this = this;
        item.selected = false;
        item.children && item.children.forEach(function (child) {
            _this.resetItem(child);
        });
    };
    NbMenuInternalService.prototype.collapseItem = function (item, except) {
        var _this = this;
        if (except && item === except) {
            return;
        }
        item.expanded = false;
        item.children && item.children.forEach(function (child) {
            _this.collapseItem(child);
        });
    };
    NbMenuInternalService.prototype.setParent = function (item) {
        var _this = this;
        item.children && item.children.forEach(function (child) {
            child.parent = item;
            _this.setParent(child);
        });
    };
    NbMenuInternalService.prototype.prepareItem = function (item) {
        var _this = this;
        item.selected = false;
        var exact = item.pathMatch === 'full';
        var location = this.location.path();
        if ((exact && location === item.link) || (!exact && location.includes(item.link))
            || (exact && item.fragment && location.substr(location.indexOf('#') + 1).includes(item.fragment))) {
            item.selected = true;
            this.selectParent(item);
        }
        item.children && item.children.forEach(function (child) {
            _this.prepareItem(child);
        });
    };
    NbMenuInternalService.prototype.selectParent = function (item) {
        var parent = item.parent;
        if (parent) {
            parent.selected = true;
            parent.expanded = true;
            this.selectParent(parent);
        }
    };
    NbMenuInternalService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbMenuInternalService.ctorParameters = function () { return [
        { type: _angular_router.Router, },
        { type: _angular_common.Location, },
    ]; };
    return NbMenuInternalService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbMenuItemComponent = /** @class */ (function () {
    function NbMenuItemComponent(router) {
        this.router = router;
        this.menuItem = null;
        this.hoverItem = new _angular_core.EventEmitter();
        this.toggleSubMenu = new _angular_core.EventEmitter();
        this.selectItem = new _angular_core.EventEmitter();
        this.itemClick = new _angular_core.EventEmitter();
    }
    NbMenuItemComponent.prototype.onToggleSubMenu = function (item) {
        this.toggleSubMenu.emit(item);
    };
    NbMenuItemComponent.prototype.onHoverItem = function (item) {
        this.hoverItem.emit(item);
    };
    NbMenuItemComponent.prototype.onSelectItem = function (item) {
        this.selectItem.emit(item);
    };
    NbMenuItemComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    NbMenuItemComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nbMenuItem]',
                    template: "<span *ngIf=\"menuItem.group && !menuItem.hidden\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group && !menuItem.hidden\" [routerLink]=\"menuItem.link\" [fragment]=\"menuItem.fragment\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group && !menuItem.hidden\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group && !menuItem.hidden\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children && !menuItem.hidden\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children && !menuItem.hidden\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" class=\"menu-items\"> <li nbMenuItem *ngFor=\"let item of menuItem.children\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"></li> </ul> ",
                },] },
    ];
    /** @nocollapse */
    NbMenuItemComponent.ctorParameters = function () { return [
        { type: _angular_router.Router, },
    ]; };
    NbMenuItemComponent.propDecorators = {
        "menuItem": [{ type: _angular_core.Input },],
        "hoverItem": [{ type: _angular_core.Output },],
        "toggleSubMenu": [{ type: _angular_core.Output },],
        "selectItem": [{ type: _angular_core.Output },],
        "itemClick": [{ type: _angular_core.Output },],
    };
    return NbMenuItemComponent;
}());
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * @styles
 *
 * menu-font-family:
 * menu-font-size:
 * menu-font-weight:
 * menu-fg:
 * menu-bg:
 * menu-active-fg:
 * menu-active-bg:
 * menu-active-font-weight:
 * menu-submenu-bg:
 * menu-submenu-fg:
 * menu-submenu-active-fg:
 * menu-submenu-active-bg:
 * menu-submenu-active-border-color:
 * menu-submenu-active-shadow:
 * menu-submenu-hover-fg:
 * menu-submenu-hover-bg:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-container-padding:
 * menu-submenu-padding:
 * menu-group-font-weight:
 * menu-group-font-size:
 * menu-group-fg:
 * menu-group-padding
 * menu-item-padding:
 * menu-item-separator:
 * menu-icon-font-size:
 * menu-icon-margin:
 * menu-icon-color:
 * menu-icon-active-color:
 */
var NbMenuComponent = /** @class */ (function () {
    function NbMenuComponent(menuInternalService, router) {
        this.menuInternalService = menuInternalService;
        this.router = router;
        this.alive = true;
        this.autoCollapseValue = false;
    }
    Object.defineProperty(NbMenuComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbMenuComponent.prototype, "autoCollapse", {
        set: /**
           * Collapse all opened submenus on the toggle event
           * Default value is "false"
           * @type boolean
           */
        function (val) {
            this.autoCollapseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuInternalService
            .onAddItem()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                (_a = _this.items).push.apply(_a, data.items);
                _this.menuInternalService.prepareItems(_this.items);
            }
            var _a;
        });
        this.menuInternalService.onNavigateHome()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                _this.navigateHome();
            }
        });
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(rxjs_operators_takeWhile.takeWhile(function () { return _this.alive; }), rxjs_operators_filter.filter(function (data) { return !data.tag || data.tag === _this.tag; }))
            .subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router.NavigationEnd) {
                _this.menuInternalService.prepareItems(_this.items);
            }
        });
        (_a = this.items).push.apply(_a, this.menuInternalService.getItems());
        this.menuInternalService.prepareItems(this.items);
        var _a;
    };
    NbMenuComponent.prototype.onHoverItem = function (item) {
        this.menuInternalService.itemHover(item, this.tag);
    };
    NbMenuComponent.prototype.onToggleSubMenu = function (item) {
        if (this.autoCollapseValue) {
            this.menuInternalService.collapseAll(this.items, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    };
    // TODO: is not fired on page reload
    // TODO: is not fired on page reload
    NbMenuComponent.prototype.onSelectItem = 
    // TODO: is not fired on page reload
    function (item) {
        this.menuInternalService.resetItems(this.items);
        item.selected = true;
        this.menuInternalService.itemSelect(item, this.tag);
    };
    NbMenuComponent.prototype.onItemClick = function (item) {
        this.menuInternalService.itemClick(item, this.tag);
    };
    NbMenuComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuComponent.prototype.navigateHome = function () {
        var homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            this.menuInternalService.resetItems(this.items);
            homeItem.selected = true;
            if (homeItem.link) {
                this.router.navigate([homeItem.link]);
            }
            if (homeItem.url) {
                window.location.href = homeItem.url;
            }
        }
    };
    NbMenuComponent.prototype.getHomeItem = function (items) {
        var _this = this;
        var home = null;
        items.forEach(function (item) {
            if (item.home) {
                home = item;
            }
            if (item.home && item.children && item.children.length > 0) {
                home = _this.getHomeItem(item.children);
            }
        });
        return home;
    };
    NbMenuComponent.prototype.compareTag = function (tag) {
        return !tag || tag === this.tag;
    };
    NbMenuComponent.prototype.getSelectedItem = function (items) {
        var _this = this;
        var selected = null;
        items.forEach(function (item) {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = _this.getSelectedItem(item.children);
            }
        });
        return selected;
    };
    NbMenuComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-menu',
                    styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-items.collapsed,:host /deep/ .menu-item>.menu-items.collapsed{max-height:0;transition:max-height 0.15s ease-out}:host /deep/ .menu-items.expanded,:host /deep/ .menu-item>.menu-items.expanded{max-height:300px;transition:max-height 0.3s ease-in}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1} "],
                    template: "\n    <ul class=\"menu-items\">\n      <li nbMenuItem *ngFor=\"let item of items\"\n                      [menuItem]=\"item\"\n                      [class.menu-group]=\"item.group\"\n                      (hoverItem)=\"onHoverItem($event)\"\n                      (toggleSubMenu)=\"onToggleSubMenu($event)\"\n                      (selectItem)=\"onSelectItem($event)\"\n                      (itemClick)=\"onItemClick($event)\"\n                      class=\"menu-item\"></li>\n    </ul>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbMenuComponent.ctorParameters = function () { return [
        { type: NbMenuInternalService, },
        { type: _angular_router.Router, },
    ]; };
    NbMenuComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core.HostBinding, args: ['class.inverse',] },],
        "tag": [{ type: _angular_core.Input },],
        "items": [{ type: _angular_core.Input },],
        "inverse": [{ type: _angular_core.Input },],
        "autoCollapse": [{ type: _angular_core.Input },],
    };
    return NbMenuComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
var NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
var NbMenuModule = /** @class */ (function () {
    function NbMenuModule() {
    }
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule,
            providers: NB_MENU_PROVIDERS.slice(),
        };
    };
    NbMenuModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [NbSharedModule],
                    declarations: nbMenuComponents.slice(),
                    exports: nbMenuComponents.slice(),
                },] },
    ];
    /** @nocollapse */
    NbMenuModule.ctorParameters = function () { return []; };
    return NbMenuModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * @example basic usage example
 *
 * ```
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 */
var NbRouteTabsetComponent = /** @class */ (function () {
    function NbRouteTabsetComponent(router) {
        this.router = router;
        this.fullWidthValue = false;
        /**
           * Emits when tab is selected
           * @type {EventEmitter<any>}
           */
        this.changeTab = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbRouteTabsetComponent.prototype, "fullWidth", {
        set: /**
           * Take full width of a parent
           * @param {boolean} val
           */
        function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbRouteTabsetComponent.prototype.selectTab = function (tab) {
        this.changeTab.emit(tab);
        this.router.navigate([tab.route]);
    };
    NbRouteTabsetComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-route-tabset',
                    styles: ["ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host.full-width ul{justify-content:space-around} "],
                    template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"$event.preventDefault(); selectTab(tab)\"\n          routerLink=\"{{tab.route}}\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a href>{{tab.title}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRouteTabsetComponent.ctorParameters = function () { return [
        { type: _angular_router.Router, },
    ]; };
    NbRouteTabsetComponent.propDecorators = {
        "fullWidthValue": [{ type: _angular_core.HostBinding, args: ['class.full-width',] },],
        "tabs": [{ type: _angular_core.Input },],
        "fullWidth": [{ type: _angular_core.Input },],
        "changeTab": [{ type: _angular_core.Output },],
    };
    return NbRouteTabsetComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbRouteTabsetModule = /** @class */ (function () {
    function NbRouteTabsetModule() {
    }
    NbRouteTabsetModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [
                        NbRouteTabsetComponent,
                    ],
                    exports: [
                        NbRouteTabsetComponent,
                    ],
                },] },
    ];
    /** @nocollapse */
    NbRouteTabsetModule.ctorParameters = function () { return []; };
    return NbRouteTabsetModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
var NbSidebarService = /** @class */ (function () {
    function NbSidebarService() {
        this.toggle$ = new rxjs_Subject.Subject();
        this.expand$ = new rxjs_Subject.Subject();
        this.collapse$ = new rxjs_Subject.Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    NbSidebarService.prototype.onToggle = /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    function () {
        return this.toggle$.pipe(rxjs_operators_share.share());
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onExpand = /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.expand$.pipe(rxjs_operators_share.share());
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onCollapse = /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.collapse$.pipe(rxjs_operators_share.share());
    };
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.toggle = /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (compact, tag) {
        if (compact === void 0) { compact = false; }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.expand = /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.collapse = /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.collapse$.next({ tag: tag });
    };
    NbSidebarService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbSidebarService.ctorParameters = function () { return []; };
    return NbSidebarService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
var NbSidebarHeaderComponent = /** @class */ (function () {
    function NbSidebarHeaderComponent() {
    }
    NbSidebarHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-sidebar-header',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSidebarHeaderComponent.ctorParameters = function () { return []; };
    return NbSidebarHeaderComponent;
}());
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
var NbSidebarFooterComponent = /** @class */ (function () {
    function NbSidebarFooterComponent() {
    }
    NbSidebarFooterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-sidebar-footer',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSidebarFooterComponent.ctorParameters = function () { return []; };
    return NbSidebarFooterComponent;
}());
/**
 * Layout sidebar component.
 *
 * Sidebar can be place on the left or the right side of the layout, can be fixed (shown above the content)
 * or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * @example Minimal sidebar example
 * ```
 * <nb-sidebar>
 *   Sidebar content.
 * </nb-sidebar>
 * ```
 *
 * @example Example of fixed sidebar located on the left side, initially collapsed.
 *
 * ```
 * <nb-sidebar left fixed state="collapsed">
 *  <nb-sidebar-header>Header</nb-sidebar-header>
 *  <nb-sidebar-content>
 *    Menu or another component here
 *  </nb-sidebar-content>
 *  <nb-sidebar-footer>
 *    Footer components here
 *  </nb-sidebar-footer>
 * </nb-sidebar>
 * ```
 *
 * @styles
 *
 * sidebar-font-size: Sidebar content font size
 * sidebar-line-height: Sidebar content line height
 * sidebar-fg: Foreground color
 * sidebar-bg: Background color
 * sidebar-height: Content height
 * sidebar-width: Expanded width
 * sidebar-width-compact: Compacted width
 * sidebar-padding: Sidebar content padding
 * sidebar-header-height: Sidebar header height
 * sidebar-footer-height: Sidebar footer height
 * sidebar-shadow: Sidebar container shadow
 *
 */
var NbSidebarComponent = /** @class */ (function () {
    function NbSidebarComponent(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
    }
    Object.defineProperty(NbSidebarComponent.prototype, "expanded", {
        get: 
        // TODO: rename stateValue to state (take a look to the card component)
        function () {
            return this.stateValue === NbSidebarComponent.STATE_EXPANDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.stateValue === NbSidebarComponent.STATE_COLLAPSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "compacted", {
        get: function () {
            return this.stateValue === NbSidebarComponent.STATE_COMPACTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "right", {
        set: /**
           * Places sidebar on the left side
           * @type {boolean}
           */
        function (val) {
            this.rightValue = convertToBoolProperty(val);
            this.leftValue = !this.rightValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "left", {
        set: /**
           * Places sidebar on the right side
           * @type {boolean}
           */
        function (val) {
            this.leftValue = convertToBoolProperty(val);
            this.rightValue = !this.leftValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "fixed", {
        set: /**
           * Makes sidebar fixed (shown above the layout content)
           * @type {boolean}
           */
        function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "state", {
        set: /**
           * Initial sidebar state, `expanded`|`collapsed`|`compacted`
           * @type {string}
           */
        function (val) {
            this.stateValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "responsive", {
        set: /**
           * Makes sidebar listen to media query events and change its behaviour
           * @type {boolean}
           */
        function (val) {
            this.responsiveValue = convertToBoolProperty(val);
            this.toggleResponsive(this.responsiveValue);
        },
        enumerable: true,
        configurable: true
    });
    NbSidebarComponent.prototype.toggleResponsive = function (enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleSubscription = this.sidebarService.onToggle()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.toggle(data.compact);
            }
        });
        this.expandSubscription = this.sidebarService.onExpand()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.expand();
            }
        });
        this.collapseSubscription = this.sidebarService.onCollapse()
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.collapse();
            }
        });
    };
    NbSidebarComponent.prototype.ngOnDestroy = function () {
        this.toggleSubscription.unsubscribe();
        this.expandSubscription.unsubscribe();
        this.collapseSubscription.unsubscribe();
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.onClick = function (event) {
        var menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            this.expand();
        }
    };
    /**
     * Collapses the sidebar
     */
    /**
       * Collapses the sidebar
       */
    NbSidebarComponent.prototype.collapse = /**
       * Collapses the sidebar
       */
    function () {
        this.state = NbSidebarComponent.STATE_COLLAPSED;
    };
    /**
     * Expands the sidebar
     */
    /**
       * Expands the sidebar
       */
    NbSidebarComponent.prototype.expand = /**
       * Expands the sidebar
       */
    function () {
        this.state = NbSidebarComponent.STATE_EXPANDED;
    };
    /**
     * Compacts the sidebar (minimizes)
     */
    /**
       * Compacts the sidebar (minimizes)
       */
    NbSidebarComponent.prototype.compact = /**
       * Compacts the sidebar (minimizes)
       */
    function () {
        this.state = NbSidebarComponent.STATE_COMPACTED;
    };
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * @example Toggle sidebar state
     *
     * ```
     * this.sidebar.toggle(true);
     * ```
     */
    /**
       * Toggles sidebar state (expanded|collapsed|compacted)
       * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
       * otherwise - between expanded & collapsed. False by default.
       *
       * @example Toggle sidebar state
       *
       * ```
       * this.sidebar.toggle(true);
       * ```
       */
    NbSidebarComponent.prototype.toggle = /**
       * Toggles sidebar state (expanded|collapsed|compacted)
       * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
       * otherwise - between expanded & collapsed. False by default.
       *
       * @example Toggle sidebar state
       *
       * ```
       * this.sidebar.toggle(true);
       * ```
       */
    function (compact) {
        if (compact === void 0) { compact = false; }
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        var closedStates = [NbSidebarComponent.STATE_COMPACTED, NbSidebarComponent.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.indexOf(this.stateValue) >= 0 ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COLLAPSED;
        }
    };
    NbSidebarComponent.prototype.onMediaQueryChanges = function () {
        var _this = this;
        return this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var prev = _a[0], current = _a[1];
            // TODO: get width by the key and define only max width for the tablets and mobiles
            var tablet = ['xs', 'is', 'sm', 'md', 'lg'];
            var mobile = ['xs', 'is'];
            if (tablet.indexOf(current.name) !== -1) {
                _this.fixed = true;
                _this.compact();
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_TABLET;
            }
            if (mobile.indexOf(current.name) !== -1) {
                _this.collapse();
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_MOBILE;
            }
            if (tablet.indexOf(current.name) === -1 && prev.width < current.width) {
                _this.expand();
                _this.fixed = false;
                _this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
            }
        });
    };
    NbSidebarComponent.prototype.responsiveEnabled = function () {
        return this.responsiveValue;
    };
    NbSidebarComponent.STATE_EXPANDED = 'expanded';
    NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
    NbSidebarComponent.STATE_COMPACTED = 'compacted';
    NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
    NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
    NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
    NbSidebarComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-sidebar',
                    styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{position:fixed;transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host.right{order:4;margin-right:0;margin-left:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
                    template: "\n    <div class=\"main-container\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSidebarComponent.ctorParameters = function () { return [
        { type: NbSidebarService, },
        { type: NbThemeService, },
        { type: _angular_core.ElementRef, },
    ]; };
    NbSidebarComponent.propDecorators = {
        "fixedValue": [{ type: _angular_core.HostBinding, args: ['class.fixed',] },],
        "rightValue": [{ type: _angular_core.HostBinding, args: ['class.right',] },],
        "leftValue": [{ type: _angular_core.HostBinding, args: ['class.left',] },],
        "expanded": [{ type: _angular_core.HostBinding, args: ['class.expanded',] },],
        "collapsed": [{ type: _angular_core.HostBinding, args: ['class.collapsed',] },],
        "compacted": [{ type: _angular_core.HostBinding, args: ['class.compacted',] },],
        "right": [{ type: _angular_core.Input },],
        "left": [{ type: _angular_core.Input },],
        "fixed": [{ type: _angular_core.Input },],
        "state": [{ type: _angular_core.Input },],
        "responsive": [{ type: _angular_core.Input },],
        "tag": [{ type: _angular_core.Input },],
    };
    return NbSidebarComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
var NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
var NbSidebarModule = /** @class */ (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    NbSidebarModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_SIDEBAR_COMPONENTS.slice(),
                    exports: NB_SIDEBAR_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbSidebarModule.ctorParameters = function () { return []; };
    return NbSidebarModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Specific tab container.
 */
var NbTabComponent = /** @class */ (function () {
    function NbTabComponent() {
        this.activeValue = false;
        // TODO: it makes sense to add 'lazyLoad' input to 'nb-tabset' component and make this functionality configurable
        this.init = false;
    }
    Object.defineProperty(NbTabComponent.prototype, "active", {
        get: function () {
            return this.activeValue;
        },
        set: function (val) {
            this.activeValue = convertToBoolProperty(val);
            if (this.activeValue) {
                this.init = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbTabComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-tab',
                    template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbTabComponent.ctorParameters = function () { return []; };
    NbTabComponent.propDecorators = {
        "tabTitle": [{ type: _angular_core.Input },],
        "route": [{ type: _angular_core.Input },],
        "activeValue": [{ type: _angular_core.HostBinding, args: ['class.content-active',] },],
        "active": [{ type: _angular_core.Input },],
    };
    return NbTabComponent;
}());
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
/**
 *
 * Dynamic tabset component.
 * Renders `<nb-tab></ng-tab> containers inside.
 *
 * @example Basic tabset example
 *
 * ```
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 *
 * @styles
 *
 * tabs-font-family:
 * tabs-font-size:
 * tabs-content-font-family:
 * tabs-content-font-size:
 * tabs-active-bg:
 * tabs-active-font-weight:
 * tabs-padding:
 * tabs-content-padding:
 * tabs-header-bg:
 * tabs-separator:
 * tabs-fg:
 * tabs-fg-text:
 * tabs-fg-heading:
 * tabs-bg:
 * tabs-selected:
 *
 ```
 */
var NbTabsetComponent = /** @class */ (function () {
    function NbTabsetComponent(route) {
        this.route = route;
        this.fullWidthValue = false;
        /**
           * Emits when tab is selected
           * @type EventEmitter<any>
           */
        this.changeTab = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbTabsetComponent.prototype, "fullWidth", {
        set: /**
           * Take full width of a parent
           * @param {boolean} val
           */
        function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var activeTab = _this.tabs.find(function (tab) { return _this.routeParam ? tab.route === params[_this.routeParam] : tab.active; });
            _this.selectTab(activeTab || _this.tabs.first);
        });
    };
    // TODO: navigate to routeParam
    // TODO: navigate to routeParam
    NbTabsetComponent.prototype.selectTab = 
    // TODO: navigate to routeParam
    function (selectedTab) {
        this.tabs.forEach(function (tab) { return tab.active = tab === selectedTab; });
        this.changeTab.emit(selectedTab);
    };
    NbTabsetComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-tabset',
                    styles: [":host{display:block}:host.full-width ul{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}ul{display:flex;flex-direction:row;list-style-type:none;margin:0}ul li{cursor:pointer;margin-bottom:-1px;text-align:center}ul li.active a::before{display:block}ul li a{position:relative;text-decoration:none;display:inline-block}ul li a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0} "],
                    template: "\n    <ul>\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.active]=\"tab.active\">\n        <a href (click)=\"$event.preventDefault()\">{{ tab.tabTitle }}</a>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbTabsetComponent.ctorParameters = function () { return [
        { type: _angular_router.ActivatedRoute, },
    ]; };
    NbTabsetComponent.propDecorators = {
        "tabs": [{ type: _angular_core.ContentChildren, args: [NbTabComponent,] },],
        "fullWidthValue": [{ type: _angular_core.HostBinding, args: ['class.full-width',] },],
        "fullWidth": [{ type: _angular_core.Input },],
        "routeParam": [{ type: _angular_core.Input },],
        "changeTab": [{ type: _angular_core.Output },],
    };
    return NbTabsetComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
var NbTabsetModule = /** @class */ (function () {
    function NbTabsetModule() {
    }
    NbTabsetModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_TABSET_COMPONENTS.slice(),
                    exports: NB_TABSET_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbTabsetModule.ctorParameters = function () { return []; };
    return NbTabsetModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 *
 * Can be used as a user profile link or can bring a user context menu.
 *
 * @styles
 *
 * user-font-size:
 * user-line-height:
 * user-bg:
 * user-fg:
 * user-fg-highlight:
 * user-font-family-secondary:
 * user-size-small:
 * user-size-medium:
 * user-size-large:
 * user-size-xlarge:
 * user-menu-fg:
 * user-menu-bg:
 * user-menu-active-fg:
 * user-menu-active-bg:
 * user-menu-border:
 */
var NbUserComponent = /** @class */ (function () {
    function NbUserComponent(el) {
        this.el = el;
        /**
           * Specifies a name to be shown on the right of a user picture
           * @type string
           */
        this.name = 'Anonymous';
        /**
           * List of menu items for a user context menu (shown when clicked)
           * @type NbUserMenuItem[]
           */
        this.menu = [];
        /**
           * Outputs when a context menu item is clicked
           * @type EventEmitter<NbUserMenuItem>
           */
        this.menuClick = new _angular_core.EventEmitter();
        this.showNameValue = true;
        this.showTitleValue = true;
        this.showInitialsValue = true;
        this.isMenuShown = false;
    }
    Object.defineProperty(NbUserComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "xlarge", {
        get: function () {
            return this.sizeValue === NbUserComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showName", {
        set: /**
           * Whether to show a user name or not
           * @type boolean
           */
        function (val) {
            this.showNameValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showTitle", {
        set: /**
           * Whether to show a user title or not
           * @type boolean
           */
        function (val) {
            this.showTitleValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "showInitials", {
        set: /**
           * Whether to show a user initials (if no picture specified) or not
           * @type boolean
           */
        function (val) {
            this.showInitialsValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "onlyPicture", {
        set: /**
           * Whether to show only a picture or also show the name and title
           * @type boolean
           */
        function (val) {
            this.showNameValue = this.showTitleValue = !convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbUserComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbUserComponent.prototype.itemClick = function (event, item) {
        this.menuClick.emit(item);
        return false;
    };
    /**
     * Toggles a context menu
     */
    /**
       * Toggles a context menu
       */
    NbUserComponent.prototype.toggleMenu = /**
       * Toggles a context menu
       */
    function () {
        this.isMenuShown = !this.isMenuShown;
    };
    NbUserComponent.prototype.hideMenu = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.isMenuShown = false;
        }
    };
    NbUserComponent.prototype.getInitials = function () {
        if (this.name) {
            var names = this.name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    NbUserComponent.prototype.hasMenu = function () {
        return this.menu && this.menu.length > 0;
    };
    // TODO: it makes sense use object instead of list of variables (or even enum)
    /*
        static readonly SIZE = {
         SMALL: 'small',
         MEDIUM: 'medium',
         LARGE: 'large',
        };
       */
    NbUserComponent.SIZE_SMALL = 'small';
    NbUserComponent.SIZE_MEDIUM = 'medium';
    NbUserComponent.SIZE_LARGE = 'large';
    NbUserComponent.SIZE_XLARGE = 'xlarge';
    NbUserComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-user',
                    styles: [":host{display:flex}.user-container{position:relative;display:flex;align-items:center}.user-container.with-menu{cursor:pointer}.user-picture{border-radius:50%;flex-shrink:0}.user-picture.image{background-size:cover;background-repeat:no-repeat}.user-picture.background{display:flex;align-items:center;justify-content:center}.user-title{font-size:0.75rem}.info-container{margin-left:0.5rem}.user-context-menu{position:absolute;transform:translate(-50%, 0);left:50%;z-index:1000;top:calc(100% + 10px);background-clip:padding-box;border-radius:5px;font-size:0.875rem;line-height:1.5rem}.user-context-menu ul{margin:0;padding:0.5rem 0;list-style:none}.user-context-menu ul li{display:block;white-space:nowrap}.user-context-menu ul li>a{padding:0.375rem 3rem;display:flex}.user-context-menu ul li.with-icon>a{padding-left:1rem}.user-context-menu ul li.with-icon>a .item-icon{font-size:1.5rem;padding-right:0.5rem}.user-context-menu ul li.arrow{position:absolute;transform:translate(-50%, 0);left:50%;top:-22px;width:0;height:0;border:11px solid transparent}.user-context-menu ul li.arrow::after{position:absolute;content:' ';width:0;height:0;top:-9px;left:0;margin-left:-12px;display:block;border:12px solid transparent} "],
                    template: "<div class=\"user-container\" (click)=\"toggleMenu()\" [ngClass]=\"{'with-menu' : hasMenu()}\"> <div *ngIf=\"picture\" class=\"user-picture image\" style.background-image=\"url({{picture}})\"></div> <div *ngIf=\"!picture\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> <div *ngIf=\"hasMenu()\" [ngStyle]=\"{display: isMenuShown ? 'block' : 'none'}\" class=\"user-context-menu\"> <ul> <li class=\"arrow\"></li> <li *ngFor=\"let item of menu\" [class.with-icon]=\"item.icon\"> <a *ngIf=\"item.link && !item.url\" [routerLink]=\"item.link\" [attr.target]=\"item.target\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> <a *ngIf=\"item.url && !item.link\" [attr.href]=\"item.url\" [attr.target]=\"item.target\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> <a *ngIf=\"!item.link && !item.url\" href=\"#\" [attr.target]=\"item.target\" (click)=\"itemClick($event, item)\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> </li> </ul> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    NbUserComponent.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    NbUserComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core.HostBinding, args: ['class.inverse',] },],
        "small": [{ type: _angular_core.HostBinding, args: ['class.small',] },],
        "medium": [{ type: _angular_core.HostBinding, args: ['class.medium',] },],
        "large": [{ type: _angular_core.HostBinding, args: ['class.large',] },],
        "xlarge": [{ type: _angular_core.HostBinding, args: ['class.xlarge',] },],
        "name": [{ type: _angular_core.Input },],
        "title": [{ type: _angular_core.Input },],
        "picture": [{ type: _angular_core.Input },],
        "color": [{ type: _angular_core.Input },],
        "menu": [{ type: _angular_core.Input },],
        "size": [{ type: _angular_core.Input },],
        "showName": [{ type: _angular_core.Input },],
        "showTitle": [{ type: _angular_core.Input },],
        "showInitials": [{ type: _angular_core.Input },],
        "onlyPicture": [{ type: _angular_core.Input },],
        "inverse": [{ type: _angular_core.Input },],
        "menuClick": [{ type: _angular_core.Output },],
        "hideMenu": [{ type: _angular_core.HostListener, args: ['document:click', ['$event'],] },],
    };
    return NbUserComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_USER_COMPONENTS = [
    NbUserComponent,
];
var NbUserModule = /** @class */ (function () {
    function NbUserModule() {
    }
    NbUserModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_USER_COMPONENTS.slice(),
                    exports: NB_USER_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbUserModule.ctorParameters = function () { return []; };
    return NbUserModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = /** @class */ (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        set: /**
           * Disables the item (changes item opacity and mouse cursor)
           * @type boolean
           */
        function (val) {
            this.disabledValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-action',
                    template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionComponent.ctorParameters = function () { return []; };
    NbActionComponent.propDecorators = {
        "disabledValue": [{ type: _angular_core.HostBinding, args: ['class.disabled',] },],
        "icon": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
    };
    return NbActionComponent;
}());
/**
 * Shows a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = /** @class */ (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        set: /**
           * Component will fill full width of the container
           * @type boolean
           */
        function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionsComponent.SIZE_SMALL = 'small';
    NbActionsComponent.SIZE_MEDIUM = 'medium';
    NbActionsComponent.SIZE_LARGE = 'large';
    NbActionsComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-actions',
                    styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center}:host /deep/ nb-action:first-child{border-left:none !important}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
                    template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionsComponent.ctorParameters = function () { return []; };
    NbActionsComponent.propDecorators = {
        "inverseValue": [{ type: _angular_core.HostBinding, args: ['class.inverse',] },],
        "small": [{ type: _angular_core.HostBinding, args: ['class.small',] },],
        "medium": [{ type: _angular_core.HostBinding, args: ['class.medium',] },],
        "large": [{ type: _angular_core.HostBinding, args: ['class.large',] },],
        "fullWidthValue": [{ type: _angular_core.HostBinding, args: ['class.full-width',] },],
        "size": [{ type: _angular_core.Input },],
        "inverse": [{ type: _angular_core.Input },],
        "fullWidth": [{ type: _angular_core.Input },],
    };
    return NbActionsComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
var NbActionsModule = /** @class */ (function () {
    function NbActionsModule() {
    }
    NbActionsModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_ACTIONS_COMPONENTS.slice(),
                    exports: NB_ACTIONS_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbActionsModule.ctorParameters = function () { return []; };
    return NbActionsModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Search component service, connects you code to a page-level search component.
 */
var NbSearchService = /** @class */ (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new rxjs_Subject.Subject();
        this.searchActivations$ = new rxjs_Subject.Subject();
        this.searchDeactivations$ = new rxjs_Subject.Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.activateSearch = /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.deactivateSearch = /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    NbSearchService.prototype.submitSearch = /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchActivate = /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchActivations$.pipe(rxjs_operators_share.share());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchDeactivate = /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchDeactivations$.pipe(rxjs_operators_share.share());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchSubmit = /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    function () {
        return this.searchSubmittings$.pipe(rxjs_operators_share.share());
    };
    NbSearchService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NbSearchService.ctorParameters = function () { return []; };
    return NbSearchService;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
var NbSearchFieldComponent = /** @class */ (function () {
    function NbSearchFieldComponent() {
        this.searchClose = new _angular_core.EventEmitter();
        this.search = new _angular_core.EventEmitter();
        this.tabOut = new _angular_core.EventEmitter();
        this.showSearch = false;
    }
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalZoomin", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_ZOOMIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "rotateLayout", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_ROTATE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalMove", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "curtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "columnCurtain", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_COLUMN_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalDrop", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_DROP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalHalf", {
        get: function () {
            return this.searchType === NbSearchFieldComponent.TYPE_MODAL_HALF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "type", {
        set: function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchFieldComponent.prototype.closeSearch = function () {
        this.searchClose.emit(true);
    };
    NbSearchFieldComponent.prototype.submitSearch = function (term) {
        if (term) {
            this.search.emit(term);
        }
    };
    NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
    NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
    NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
    NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
    NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
    NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
    NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
    NbSearchFieldComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-search-field',
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}} ",
"/deep/ nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}/deep/ nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100%;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)} ",
"/deep/ nb-layout.modal-move .layout{transition:transform 0.5s}/deep/ nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;right:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}} ",
":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;transition:opacity 0.1s;transition-delay:0.3s}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}} ",
"/deep/ nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;right:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}} ",
"/deep/ nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}/deep/ nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;display:block;opacity:0;transition:opacity 0.4s}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}} ",
"/deep/ nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;right:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)} "],
                    template: "\n    <div class=\"search\" (keyup.esc)=\"closeSearch()\" >\n      <button (click)=\"closeSearch()\">\n        <i class=\"nb-close-circled\"></i>\n      </button>\n      <div class=\"form-wrapper\">\n        <form class=\"form\" (keyup.enter)=\"submitSearch(searchInput.value)\">\n          <div class=\"form-content\">\n            <input class=\"search-input\"\n              #searchInput\n              autocomplete=\"off\"\n              [attr.placeholder]=\"placeholder\"\n              tabindex=\"-1\"\n              (blur)=\"tabOut.next($event)\"/>\n          </div>\n          <span class=\"info\">Hit enter to search</span>\n        </form>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSearchFieldComponent.ctorParameters = function () { return []; };
    NbSearchFieldComponent.propDecorators = {
        "searchType": [{ type: _angular_core.Input },],
        "placeholder": [{ type: _angular_core.Input },],
        "searchClose": [{ type: _angular_core.Output },],
        "search": [{ type: _angular_core.Output },],
        "tabOut": [{ type: _angular_core.Output },],
        "inputElement": [{ type: _angular_core.ViewChild, args: ['searchInput',] },],
        "showSearch": [{ type: _angular_core.Input }, { type: _angular_core.HostBinding, args: ['class.show',] },],
        "modalZoomin": [{ type: _angular_core.HostBinding, args: ['class.modal-zoomin',] },],
        "rotateLayout": [{ type: _angular_core.HostBinding, args: ['class.rotate-layout',] },],
        "modalMove": [{ type: _angular_core.HostBinding, args: ['class.modal-move',] },],
        "curtain": [{ type: _angular_core.HostBinding, args: ['class.curtain',] },],
        "columnCurtain": [{ type: _angular_core.HostBinding, args: ['class.column-curtain',] },],
        "modalDrop": [{ type: _angular_core.HostBinding, args: ['class.modal-drop',] },],
        "modalHalf": [{ type: _angular_core.HostBinding, args: ['class.modal-half',] },],
        "type": [{ type: _angular_core.Input },],
    };
    return NbSearchFieldComponent;
}());
/**
 * Beautiful full-page search control.
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
var NbSearchComponent = /** @class */ (function () {
    function NbSearchComponent(searchService, themeService, componentFactoryResolver, router) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        /**
           * Search input placeholder
           * @type {string}
           */
        this.placeholder = 'Search...';
        this.showSearch = false;
        this.searchFieldComponentRef = null;
        this.searchType = 'rotate-layout';
    }
    Object.defineProperty(NbSearchComponent.prototype, "type", {
        set: /**
           * Search design type, available types are
           * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
           * @type {string}
           */
        function (val) {
            this.searchType = val;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchComponent.prototype.openSearch = function () {
        this.searchService.activateSearch(this.searchType, this.tag);
    };
    NbSearchComponent.prototype.connectToSearchField = function (componentRef) {
        var _this = this;
        this.searchFieldComponentRef = componentRef;
        componentRef.instance.searchType = this.searchType;
        componentRef.instance.placeholder = this.placeholder;
        componentRef.instance.searchClose.subscribe(function () {
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.search.subscribe(function (term) {
            _this.searchService.submitSearch(term, _this.tag);
            _this.searchService.deactivateSearch(_this.searchType, _this.tag);
        });
        componentRef.instance.tabOut
            .subscribe(function () { return _this.showSearch && _this.searchFieldComponentRef.instance.inputElement.nativeElement.focus(); });
        componentRef.changeDetectorRef.detectChanges();
    };
    NbSearchComponent.prototype.createAttachedSearch = function (component) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = this.attachedSearchContainer.createComponent(componentFactory);
        return rxjs_observable_of.of(componentRef);
    };
    NbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.router.events
            .pipe(rxjs_operators_filter.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }))
            .subscribe(function (event) { return _this.searchService.deactivateSearch(_this.searchType, _this.tag); });
        this.activateSearchSubscription = this.searchService.onSearchActivate().subscribe(function (data) {
            if (!_this.tag || data.tag === _this.tag) {
                _this.showSearch = true;
                _this.themeService.appendLayoutClass(_this.searchType);
                rxjs_observable_of.of(null).pipe(rxjs_operators_delay.delay(0)).subscribe(function () {
                    _this.themeService.appendLayoutClass('with-search');
                });
                _this.searchFieldComponentRef.instance.showSearch = true;
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
                _this.searchFieldComponentRef.changeDetectorRef.detectChanges();
            }
        });
        this.deactivateSearchSubscription = this.searchService.onSearchDeactivate().subscribe(function (data) {
            if (!_this.tag || data.tag === _this.tag) {
                _this.showSearch = false;
                _this.searchFieldComponentRef.instance.showSearch = false;
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
                _this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
                _this.searchFieldComponentRef.changeDetectorRef.detectChanges();
                _this.themeService.removeLayoutClass('with-search');
                rxjs_observable_of.of(null).pipe(rxjs_operators_delay.delay(500)).subscribe(function () {
                    _this.themeService.removeLayoutClass(_this.searchType);
                });
            }
        });
    };
    NbSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeService.appendToLayoutTop(NbSearchFieldComponent)
            .subscribe(function (componentRef) {
            _this.connectToSearchField(componentRef);
        });
    };
    NbSearchComponent.prototype.ngOnDestroy = function () {
        this.activateSearchSubscription.unsubscribe();
        this.deactivateSearchSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
        if (this.searchFieldComponentRef) {
            this.searchFieldComponentRef.destroy();
        }
    };
    NbSearchComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-search',
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none} "],
                    template: "\n    <button class=\"start-search\" (click)=\"openSearch()\">\n      <i class=\"nb-search\"></i>\n    </button>\n    <ng-template #attachedSearchContainer></ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbSearchComponent.ctorParameters = function () { return [
        { type: NbSearchService, },
        { type: NbThemeService, },
        { type: _angular_core.ComponentFactoryResolver, },
        { type: _angular_router.Router, },
    ]; };
    NbSearchComponent.propDecorators = {
        "tag": [{ type: _angular_core.Input },],
        "placeholder": [{ type: _angular_core.Input },],
        "showSearch": [{ type: _angular_core.HostBinding, args: ['class.show',] },],
        "attachedSearchContainer": [{ type: _angular_core.ViewChild, args: ['attachedSearchContainer', { read: _angular_core.ViewContainerRef },] },],
        "type": [{ type: _angular_core.Input },],
    };
    return NbSearchComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbSearchModule = /** @class */ (function () {
    function NbSearchModule() {
    }
    NbSearchModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [
                        NbSearchComponent,
                        NbSearchFieldComponent,
                    ],
                    exports: [
                        NbSearchComponent,
                        NbSearchFieldComponent,
                    ],
                    providers: [
                        NbSearchService,
                    ],
                    entryComponents: [
                        NbSearchFieldComponent,
                    ],
                },] },
    ];
    /** @nocollapse */
    NbSearchModule.ctorParameters = function () { return []; };
    return NbSearchModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Styled checkbox component
 *
 * @example Basic example
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled">Enabled?</nb-checkbox>
 * ```
 *
 * @example Example with status
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled" status="danger">Enabled?</nb-checkbox>
 * ```
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-selected-border-color:
 * checkbox-fg:
 * radio-fg:
 */
var NbCheckboxComponent = /** @class */ (function () {
    function NbCheckboxComponent() {
        /**
           * Checkbox value
           * @type {boolean}
           * @private
           */
        this._value = false;
        this.disabled = false;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NbCheckboxComponent.prototype, "setDisabled", {
        set: function (val) {
            this.disabled = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "setStatus", {
        set: /**
           * Checkbox status (success, warning, danger)
           * @param {string} val
           */
        function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    NbCheckboxComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'nb-checkbox',
                    template: "\n    <label class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"value = !value\">\n      <span class=\"custom-control-indicator\"></span>\n      <span class=\"custom-control-description\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
                    providers: [{
                            provide: _angular_forms.NG_VALUE_ACCESSOR,
                            useExisting: _angular_core.forwardRef(function () { return NbCheckboxComponent; }),
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    NbCheckboxComponent.ctorParameters = function () { return []; };
    NbCheckboxComponent.propDecorators = {
        "_value": [{ type: _angular_core.Input, args: ['value',] },],
        "setDisabled": [{ type: _angular_core.Input, args: ['disabled',] },],
        "setStatus": [{ type: _angular_core.Input, args: ['status',] },],
        "success": [{ type: _angular_core.HostBinding, args: ['class.success',] },],
        "warning": [{ type: _angular_core.HostBinding, args: ['class.warning',] },],
        "danger": [{ type: _angular_core.HostBinding, args: ['class.danger',] },],
    };
    return NbCheckboxComponent;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbCheckboxModule = /** @class */ (function () {
    function NbCheckboxModule() {
    }
    NbCheckboxModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [NbCheckboxComponent],
                    exports: [NbCheckboxComponent],
                },] },
    ];
    /** @nocollapse */
    NbCheckboxModule.ctorParameters = function () { return []; };
    return NbCheckboxModule;
}());

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

exports.NbMenuService = NbMenuService;
exports.NbMenuItem = NbMenuItem;
exports.nbThemeOptionsToken = nbThemeOptionsToken;
exports.nbMediaBreakpointsToken = nbMediaBreakpointsToken;
exports.nbBuiltInJSThemesToken = nbBuiltInJSThemesToken;
exports.nbJSThemesToken = nbJSThemesToken;
exports.NbThemeModule = NbThemeModule;
exports.NbThemeService = NbThemeService;
exports.NbSpinnerService = NbSpinnerService;
exports.DEFAULT_MEDIA_BREAKPOINTS = DEFAULT_MEDIA_BREAKPOINTS;
exports.NbMediaBreakpointsService = NbMediaBreakpointsService;
exports.NbColorHelper = NbColorHelper;
exports.NbCardModule = NbCardModule;
exports.NbLayoutModule = NbLayoutModule;
exports.NbMenuModule = NbMenuModule;
exports.NbRouteTabsetModule = NbRouteTabsetModule;
exports.NbSidebarModule = NbSidebarModule;
exports.NbSidebarService = NbSidebarService;
exports.NbTabsetModule = NbTabsetModule;
exports.NbUserModule = NbUserModule;
exports.NbActionsModule = NbActionsModule;
exports.NbSearchModule = NbSearchModule;
exports.NbSearchService = NbSearchService;
exports.NbCheckboxComponent = NbCheckboxComponent;
exports.NbCheckboxModule = NbCheckboxModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
