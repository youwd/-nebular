/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { filter } from 'rxjs/operators/filter';
import { NbMenuInternalService } from './menu.service';
import { convertToBoolProperty } from '../helpers';
var NbMenuItemComponent = /** @class */ (function () {
    function NbMenuItemComponent(router) {
        this.router = router;
        this.menuItem = null;
        this.hoverItem = new EventEmitter();
        this.toggleSubMenu = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemClick = new EventEmitter();
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nbMenuItem]',
                    template: "<span *ngIf=\"menuItem.group && !menuItem.hidden\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group && !menuItem.hidden\" [routerLink]=\"menuItem.link\" [fragment]=\"menuItem.fragment\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group && !menuItem.hidden\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group && !menuItem.hidden\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children && !menuItem.hidden\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <i class=\"menu-icon {{ menuItem.icon }}\" *ngIf=\"menuItem.icon\"></i> <span class=\"menu-title\">{{ menuItem.title }}</span> <i class=\"ion chevron\" [class.ion-chevron-left]=\"!menuItem.expanded\" [class.ion-chevron-down]=\"menuItem.expanded\"></i> </a> <ul *ngIf=\"menuItem.children && !menuItem.hidden\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" class=\"menu-items\"> <li nbMenuItem *ngFor=\"let item of menuItem.children\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"></li> </ul> ",
                },] },
    ];
    /** @nocollapse */
    NbMenuItemComponent.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    NbMenuItemComponent.propDecorators = {
        "menuItem": [{ type: Input },],
        "hoverItem": [{ type: Output },],
        "toggleSubMenu": [{ type: Output },],
        "selectItem": [{ type: Output },],
        "itemClick": [{ type: Output },],
    };
    return NbMenuItemComponent;
}());
export { NbMenuItemComponent };
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
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                (_a = _this.items).push.apply(_a, data.items);
                _this.menuInternalService.prepareItems(_this.items);
            }
            var _a;
        });
        this.menuInternalService.onNavigateHome()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (_this.compareTag(data.tag)) {
                _this.navigateHome();
            }
        });
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (data) { return !data.tag || data.tag === _this.tag; }))
            .subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
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
        { type: Component, args: [{
                    selector: 'nb-menu',
                    styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-items.collapsed,:host /deep/ .menu-item>.menu-items.collapsed{max-height:0;transition:max-height 0.15s ease-out}:host /deep/ .menu-items.expanded,:host /deep/ .menu-item>.menu-items.expanded{max-height:300px;transition:max-height 0.3s ease-in}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1} "],
                    template: "\n    <ul class=\"menu-items\">\n      <li nbMenuItem *ngFor=\"let item of items\"\n                      [menuItem]=\"item\"\n                      [class.menu-group]=\"item.group\"\n                      (hoverItem)=\"onHoverItem($event)\"\n                      (toggleSubMenu)=\"onToggleSubMenu($event)\"\n                      (selectItem)=\"onSelectItem($event)\"\n                      (itemClick)=\"onItemClick($event)\"\n                      class=\"menu-item\"></li>\n    </ul>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbMenuComponent.ctorParameters = function () { return [
        { type: NbMenuInternalService, },
        { type: Router, },
    ]; };
    NbMenuComponent.propDecorators = {
        "inverseValue": [{ type: HostBinding, args: ['class.inverse',] },],
        "tag": [{ type: Input },],
        "items": [{ type: Input },],
        "inverse": [{ type: Input },],
        "autoCollapse": [{ type: Input },],
    };
    return NbMenuComponent;
}());
export { NbMenuComponent };
//# sourceMappingURL=menu.component.js.map