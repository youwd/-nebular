/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS_TOKEN } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { NbAuthService } from '../../services/auth.service';
var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {email:'System',password:'123456'};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        return _this.router.navigateByUrl('business');
        // this.service.authenticate(this.provider, this.user).subscribe(function (result) {
        //     _this.submitted = false;
        //     if (result.isSuccess()) {
        //         _this.messages = result.getMessages();
        //     }
        //     else {
        //         _this.errors = result.getErrors();
        //     }
        //     var redirect = result.getRedirect();
        //     if (redirect) {
        //         return _this.router.navigateByUrl('business');
        //     }
        // });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.config, key, null);
    };
    NbLoginComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'nb-login',
                template: "\n    <nb-auth-block>\n      <h2 class=\"title\">登  录</h2>\n      <small class=\"form-text sub-title\"></small>\n\n      <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" \n                 class=\"form-control\" placeholder=\"用户名\" #email=\"ngModel\"\n     >\n                     </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"密码\" #password=\"ngModel\"\n                         [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n       </div>\n\n        <div class=\"form-group accept-group col-sm-12\">\n          <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">记住我</nb-checkbox>\n     </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          登录\n        </button>\n   <div style=\"color:white;margin-top:150px;text-align: center;\">&copy;2018江苏新亚勘测设计有限公司                </div>   </form>\n\n      <div class=\"links\">\n        <small class=\"form-text\"></small>\n\n        <div class=\"socials\">\n          <a href=\"https://github.com/akveo\" target=\"_blank\" class=\"socicon-github\"></a>\n          <a href=\"https://www.facebook.com/akveo/\" target=\"_blank\" class=\"socicon-facebook\"></a>\n          <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\" class=\"socicon-twitter\"></a>\n        </div>\n\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong></strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
            },]
        },
    ];
    /** @nocollapse */
    NbLoginComponent.ctorParameters = function () {
        return [
            { type: NbAuthService, },
            { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS_TOKEN,] },] },
            { type: Router, },
        ];
    };
    return NbLoginComponent;
}());
export { NbLoginComponent };
//# sourceMappingURL=login.component.js.map