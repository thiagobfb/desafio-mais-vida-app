webpackJsonp([2],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicoMySuffixDialogPageModule", function() { return MedicoMySuffixDialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_dialog__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MedicoMySuffixDialogPageModule = (function () {
    function MedicoMySuffixDialogPageModule() {
    }
    MedicoMySuffixDialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_dialog__["a" /* MedicoMySuffixDialogPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_dialog__["a" /* MedicoMySuffixDialogPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_dialog__["a" /* MedicoMySuffixDialogPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__["a" /* MedicoMySuffixService */]
            ]
        })
    ], MedicoMySuffixDialogPageModule);
    return MedicoMySuffixDialogPageModule;
}());

//# sourceMappingURL=medico-my-suffix-dialog.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoMySuffixService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicoMySuffixService = (function () {
    function MedicoMySuffixService(http) {
        this.http = http;
        this.resourceUrl = __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */].API_URL + '/medicos';
    }
    MedicoMySuffixService.prototype.create = function (medico) {
        return this.http.post(this.resourceUrl, medico);
    };
    MedicoMySuffixService.prototype.update = function (medico) {
        return this.http.put(this.resourceUrl, medico);
    };
    MedicoMySuffixService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id);
    };
    MedicoMySuffixService.prototype.query = function (req) {
        return this.http.get(this.resourceUrl);
    };
    MedicoMySuffixService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response', responseType: 'text' });
    };
    MedicoMySuffixService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MedicoMySuffixService);
    return MedicoMySuffixService;
}());

//# sourceMappingURL=medico-my-suffix.provider.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoMySuffixDialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_provider__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicoMySuffixDialogPage = (function () {
    function MedicoMySuffixDialogPage(navCtrl, viewCtrl, toastCtrl, formBuilder, params, medicoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.medicoService = medicoService;
        this.medico = params.get('item');
        if (this.medico && this.medico.id) {
            this.medicoService.find(this.medico.id).subscribe(function (data) {
                _this.medico = data;
            });
        }
        this.form = formBuilder.group({
            id: [params.get('item') ? this.medico.id : ''],
            primeiroNome: [params.get('item') ? this.medico.primeiroNome : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            ultimoNome: [params.get('item') ? this.medico.ultimoNome : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            especialidade: [params.get('item') ? this.medico.especialidade : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: [params.get('item') ? this.medico.email : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            ativo: [params.get('item') ? this.medico.ativo : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            status: [params.get('item') ? this.medico.status : '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            cidade: [params.get('item') ? this.medico.cidade : '',],
            estado: [params.get('item') ? this.medico.estado : '',],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    MedicoMySuffixDialogPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, dismiss without sending data back.
     */
    MedicoMySuffixDialogPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the medico-my-suffix, so return it
     * back to the presenter.
     */
    MedicoMySuffixDialogPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    MedicoMySuffixDialogPage.prototype.onError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
        toast.present();
    };
    MedicoMySuffixDialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medico-my-suffix-dialog',template:/*ion-inline-start:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix-dialog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Medico</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span color="primary" showWhen="ios">\n                  {{ \'CANCEL_BUTTON\' | translate }}\n                </span>\n                <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n            <span color="primary" showWhen="ios">\n              {{ \'DONE_BUTTON\' | translate }}\n            </span>\n            <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="save()">\n        <ion-list>\n            <ion-item [hidden]="!form.id">\n                <ion-label>ID</ion-label>\n                <ion-input type="hidden" id="id" formControlName="id" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Primeiro Nome" formControlName="primeiroNome"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Ultimo Nome" formControlName="ultimoNome"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Especialidade" formControlName="especialidade"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="checkbox" placeholder="Ativo" formControlName="ativo"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Status</ion-label>\n                <ion-select formControlName="status" id="field_status"  required>\n                        <ion-option value="OCUPADO">OCUPADO</ion-option>\n                        <ion-option value="DISPONIVEL">DISPONIVEL</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Cidade" formControlName="cidade"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Estado" formControlName="estado"></ion-input>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix-dialog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_provider__["a" /* MedicoMySuffixService */]])
    ], MedicoMySuffixDialogPage);
    return MedicoMySuffixDialogPage;
}());

//# sourceMappingURL=medico-my-suffix-dialog.js.map

/***/ })

});
//# sourceMappingURL=2.js.map