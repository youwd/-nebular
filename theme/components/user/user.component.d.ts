/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, ElementRef } from '@angular/core';
/**
 * Action dropdown menu
 */
export declare class NbUserMenuItem {
    /**
     * Menu title
     * @type string
     */
    title: string;
    /**
     * Menu link for [routerLink] directive
     * @type string
     */
    link?: string;
    /**
     * URL for absolute urls, used directly in href
     * @type string
     */
    url?: string;
    /**
     * Link target (_blank, _self, etc)
     * @type string
     */
    target?: string;
    /**
     * Icon class
     * @type string
     */
    icon?: string;
}
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
export declare class NbUserComponent {
    private el;
    static readonly SIZE_SMALL: string;
    static readonly SIZE_MEDIUM: string;
    static readonly SIZE_LARGE: string;
    static readonly SIZE_XLARGE: string;
    private sizeValue;
    inverseValue: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly xlarge: boolean;
    /**
     * Specifies a name to be shown on the right of a user picture
     * @type string
     */
    name: string;
    /**
     * Specifies a title (written in a smaller font) to be shown under the **name**
     * @type string
     */
    title: string;
    /**
     * Absolute path to a user picture
     * User name initials (JD for John Doe) will be shown if no picture specified
     * @type string
     */
    picture: string;
    /**
     * Color of the area shown when no picture specified
     * @type string
     */
    color: string;
    /**
     * List of menu items for a user context menu (shown when clicked)
     * @type NbUserMenuItem[]
     */
    menu: NbUserMenuItem[];
    /**
     * Size of the component, small|medium|large
     * @type string
     */
    size: string;
    /**
     * Whether to show a user name or not
     * @type boolean
     */
    showName: boolean;
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    showTitle: boolean;
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    showInitials: boolean;
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    onlyPicture: boolean;
    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    inverse: boolean;
    /**
     * Outputs when a context menu item is clicked
     * @type EventEmitter<NbUserMenuItem>
     */
    menuClick: EventEmitter<NbUserMenuItem>;
    showNameValue: boolean;
    showTitleValue: boolean;
    showInitialsValue: boolean;
    isMenuShown: boolean;
    constructor(el: ElementRef);
    itemClick(event: any, item: NbUserMenuItem): boolean;
    /**
     * Toggles a context menu
     */
    toggleMenu(): void;
    hideMenu(event: any): void;
    getInitials(): string;
    hasMenu(): boolean;
}
