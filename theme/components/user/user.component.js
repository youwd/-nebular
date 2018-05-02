/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Action dropdown menu
 */
var /**
 * Action dropdown menu
 */
NbUserMenuItem = /** @class */ (function () {
    function NbUserMenuItem() {
    }
    return NbUserMenuItem;
}());
/**
 * Action dropdown menu
 */
export { NbUserMenuItem };
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
        this.menuClick = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'nb-user',
                    styles: [":host{display:flex}.user-container{position:relative;display:flex;align-items:center}.user-container.with-menu{cursor:pointer}.user-picture{border-radius:50%;flex-shrink:0}.user-picture.image{background-size:cover;background-repeat:no-repeat}.user-picture.background{display:flex;align-items:center;justify-content:center}.user-title{font-size:0.75rem}.info-container{margin-left:0.5rem}.user-context-menu{position:absolute;transform:translate(-50%, 0);left:50%;z-index:1000;top:calc(100% + 10px);background-clip:padding-box;border-radius:5px;font-size:0.875rem;line-height:1.5rem}.user-context-menu ul{margin:0;padding:0.5rem 0;list-style:none}.user-context-menu ul li{display:block;white-space:nowrap}.user-context-menu ul li>a{padding:0.375rem 3rem;display:flex}.user-context-menu ul li.with-icon>a{padding-left:1rem}.user-context-menu ul li.with-icon>a .item-icon{font-size:1.5rem;padding-right:0.5rem}.user-context-menu ul li.arrow{position:absolute;transform:translate(-50%, 0);left:50%;top:-22px;width:0;height:0;border:11px solid transparent}.user-context-menu ul li.arrow::after{position:absolute;content:' ';width:0;height:0;top:-9px;left:0;margin-left:-12px;display:block;border:12px solid transparent} "],
                    template: "<div class=\"user-container\" (click)=\"toggleMenu()\" [ngClass]=\"{'with-menu' : hasMenu()}\"> <div *ngIf=\"picture\" class=\"user-picture image\" style.background-image=\"url({{picture}})\"></div> <div *ngIf=\"!picture\" class=\"user-picture background\" [style.background-color]=\"color\"> <ng-container *ngIf=\"showInitialsValue\"> {{ getInitials() }} </ng-container> </div> <div class=\"info-container\"> <div *ngIf=\"showNameValue && name\" class=\"user-name\">{{ name }}</div> <div *ngIf=\"showTitleValue && title\" class=\"user-title\">{{ title }}</div> </div> <div *ngIf=\"hasMenu()\" [ngStyle]=\"{display: isMenuShown ? 'block' : 'none'}\" class=\"user-context-menu\"> <ul> <li class=\"arrow\"></li> <li *ngFor=\"let item of menu\" [class.with-icon]=\"item.icon\"> <a *ngIf=\"item.link && !item.url\" [routerLink]=\"item.link\" [attr.target]=\"item.target\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> <a *ngIf=\"item.url && !item.link\" [attr.href]=\"item.url\" [attr.target]=\"item.target\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> <a *ngIf=\"!item.link && !item.url\" href=\"#\" [attr.target]=\"item.target\" (click)=\"itemClick($event, item)\"> <span *ngIf=\"item.icon\" class=\"item-icon {{ item.icon  }}\"></span> {{ item.title }} </a> </li> </ul> </div> </div> ",
                },] },
    ];
    /** @nocollapse */
    NbUserComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    NbUserComponent.propDecorators = {
        "inverseValue": [{ type: HostBinding, args: ['class.inverse',] },],
        "small": [{ type: HostBinding, args: ['class.small',] },],
        "medium": [{ type: HostBinding, args: ['class.medium',] },],
        "large": [{ type: HostBinding, args: ['class.large',] },],
        "xlarge": [{ type: HostBinding, args: ['class.xlarge',] },],
        "name": [{ type: Input },],
        "title": [{ type: Input },],
        "picture": [{ type: Input },],
        "color": [{ type: Input },],
        "menu": [{ type: Input },],
        "size": [{ type: Input },],
        "showName": [{ type: Input },],
        "showTitle": [{ type: Input },],
        "showInitials": [{ type: Input },],
        "onlyPicture": [{ type: Input },],
        "inverse": [{ type: Input },],
        "menuClick": [{ type: Output },],
        "hideMenu": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    };
    return NbUserComponent;
}());
export { NbUserComponent };
//# sourceMappingURL=user.component.js.map