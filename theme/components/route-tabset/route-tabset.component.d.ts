/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
export declare class NbRouteTabsetComponent {
    private router;
    fullWidthValue: boolean;
    /**
     * Tabs configuration
     * @param Object{route: string, title: string, tag?: string}
     */
    tabs: any[];
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    fullWidth: boolean;
    /**
     * Emits when tab is selected
     * @type {EventEmitter<any>}
     */
    changeTab: EventEmitter<any>;
    constructor(router: Router);
    selectTab(tab: any): void;
}
