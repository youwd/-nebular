/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCardComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardHeaderComponent, } from './card.component';
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
        { type: NgModule, args: [{
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
export { NbCardModule };
//# sourceMappingURL=card.module.js.map