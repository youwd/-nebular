/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, QueryList, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Specific tab container.
 */
export declare class NbTabComponent {
    tabTitle: string;
    route: string;
    activeValue: boolean;
    active: boolean;
    init: boolean;
}
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
export declare class NbTabsetComponent implements AfterContentInit {
    private route;
    tabs: QueryList<NbTabComponent>;
    private fullWidthValue;
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    fullWidth: boolean;
    /**
     * If specified - tabset listens to this parameter and selects corresponding tab.
     * @type {string}
     */
    routeParam: string;
    /**
     * Emits when tab is selected
     * @type EventEmitter<any>
     */
    changeTab: EventEmitter<any>;
    constructor(route: ActivatedRoute);
    ngAfterContentInit(): void;
    selectTab(selectedTab: NbTabComponent): void;
}
