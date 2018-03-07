webpackJsonp([1],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicoMySuffixPageModule", function() { return MedicoMySuffixPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MedicoMySuffixPageModule = (function () {
    function MedicoMySuffixPageModule() {
    }
    MedicoMySuffixPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix__["a" /* MedicoMySuffixPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__medico_my_suffix__["a" /* MedicoMySuffixPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix__["a" /* MedicoMySuffixPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__["a" /* MedicoMySuffixService */]]
        })
    ], MedicoMySuffixPageModule);
    return MedicoMySuffixPageModule;
}());

//# sourceMappingURL=medico-my-suffix.module.js.map

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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoMySuffixPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medico_my_suffix_provider__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicoMySuffixPage = (function () {
    // todo: add pagination
    function MedicoMySuffixPage(navCtrl, medicoService, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.medicoService = medicoService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.medicos = [];
    }
    MedicoMySuffixPage.prototype.ionViewDidLoad = function () {
        this.loadAll();
    };
    MedicoMySuffixPage.prototype.loadAll = function (refresher) {
        var _this = this;
        this.medicoService.query().subscribe(function (response) {
            _this.medicos = response;
            if (typeof (refresher) !== 'undefined') {
                refresher.complete();
            }
        }, function (error) {
            console.error(error);
            var toast = _this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            toast.present();
        });
    };
    MedicoMySuffixPage.prototype.trackId = function (index, item) {
        return item.id;
    };
    MedicoMySuffixPage.prototype.open = function (slidingItem, item) {
        var _this = this;
        var modal = this.modalCtrl.create('MedicoMySuffixDialogPage', { item: item });
        modal.onDidDismiss(function (medico) {
            if (medico) {
                if (medico.id) {
                    _this.medicoService.update(medico).subscribe(function (data) {
                        _this.loadAll();
                        var toast = _this.toastCtrl.create({ message: 'MedicoMySuffix updated successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                        slidingItem.close();
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.medicoService.create(medico).subscribe(function (data) {
                        _this.medicos.push(data);
                        var toast = _this.toastCtrl.create({ message: 'MedicoMySuffix added successfully.', duration: 3000, position: 'middle' });
                        toast.present();
                    }, function (error) { return console.error(error); });
                }
            }
        });
        modal.present();
    };
    MedicoMySuffixPage.prototype.delete = function (medico) {
        var _this = this;
        this.medicoService.delete(medico.id).subscribe(function () {
            var toast = _this.toastCtrl.create({ message: 'MedicoMySuffix deleted successfully.', duration: 3000, position: 'middle' });
            toast.present();
            _this.loadAll();
        }, function (error) { return console.error(error); });
    };
    MedicoMySuffixPage.prototype.detail = function (medico) {
        this.navCtrl.push('MedicoMySuffixDetailPage', { id: medico.id });
    };
    MedicoMySuffixPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medico-my-suffix',template:/*ion-inline-start:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Medicos</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="open()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<!-- todo: add elasticsearch support -->\n<ion-content padding>\n    <ion-refresher (ionRefresh)="loadAll($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let medico of medicos; trackBy: trackId" #slidingItem>\n            <button ion-item (click)="detail(medico)">\n                <p>{{medico.primeiroNome}}</p>\n                <p>{{medico.ultimoNome}}</p>\n                <p>{{medico.especialidade}}</p>\n                <p>{{medico.email}}</p>\n                <p>{{medico.ativo}}</p>\n                <!-- todo: special handling for translating enum - {{\'StatusMedicoEnum.\' + medico.status}}" -->\n                <p>{{medico.status}}</p>\n                <p>{{medico.cidade}}</p>\n                <p>{{medico.estado}}</p>\n            </button>\n            <ion-item-options>\n                <button ion-button color="primary" (click)="open(slidingItem, blog)">\n                    {{ \'EDIT_BUTTON\' | translate }}\n                </button>\n                <button ion-button color="danger" (click)="delete(medico)">\n                    {{ \'DELETE_BUTTON\' | translate }}\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <ion-item *ngIf="!medicos?.length">\n        No Medicos found.\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__medico_my_suffix_provider__["a" /* MedicoMySuffixService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MedicoMySuffixPage);
    return MedicoMySuffixPage;
}());

//# sourceMappingURL=medico-my-suffix.js.map

/***/ })

});
//# sourceMappingURL=1.js.map