webpackJsonp([0],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicoMySuffixDetailPageModule", function() { return MedicoMySuffixDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_detail__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MedicoMySuffixDetailPageModule = (function () {
    function MedicoMySuffixDetailPageModule() {
    }
    MedicoMySuffixDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_detail__["a" /* MedicoMySuffixDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_detail__["a" /* MedicoMySuffixDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_detail__["a" /* MedicoMySuffixDetailPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__medico_my_suffix_provider__["a" /* MedicoMySuffixService */]]
        })
    ], MedicoMySuffixDetailPageModule);
    return MedicoMySuffixDetailPageModule;
}());

//# sourceMappingURL=medico-my-suffix-detail.module.js.map

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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoMySuffixDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medico_my_suffix_model__ = __webpack_require__(731);
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




var MedicoMySuffixDetailPage = (function () {
    function MedicoMySuffixDetailPage(modalCtrl, params, medicoService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.medicoService = medicoService;
        this.toastCtrl = toastCtrl;
        this.medico = new __WEBPACK_IMPORTED_MODULE_2__medico_my_suffix_model__["a" /* MedicoMySuffix */]();
        this.medico.id = params.get('id');
    }
    MedicoMySuffixDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.medicoService.find(this.medico.id).subscribe(function (data) { return _this.medico = data; });
    };
    MedicoMySuffixDetailPage.prototype.open = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('MedicoMySuffixDialogPage', { item: item });
        modal.onDidDismiss(function (medico) {
            if (medico) {
                _this.medicoService.update(medico).subscribe(function (data) {
                    _this.medico = data;
                    var toast = _this.toastCtrl.create({ message: 'MedicoMySuffix updated successfully.', duration: 3000, position: 'middle' });
                    toast.present();
                }, function (error) { return console.error(error); });
            }
        });
        modal.present();
    };
    MedicoMySuffixDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medico-my-suffix-detail',template:/*ion-inline-start:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Medico</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label>Primeiro Nome</ion-label>\n            <div item-content>\n                <span>{{medico.primeiroNome}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Ultimo Nome</ion-label>\n            <div item-content>\n                <span>{{medico.ultimoNome}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Especialidade</ion-label>\n            <div item-content>\n                <span>{{medico.especialidade}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Email</ion-label>\n            <div item-content>\n                <span>{{medico.email}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Ativo</ion-label>\n            <div item-content>\n                <span>{{medico.ativo}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Status</ion-label>\n            <div item-content>\n                <span{{medico.status}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Cidade</ion-label>\n            <div item-content>\n                <span>{{medico.cidade}}</span>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label>Estado</ion-label>\n            <div item-content>\n                <span>{{medico.estado}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button block (click)="open(medico)">{{ \'EDIT_BUTTON\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"/home/thiago/dev/desafio-mais-vida-app/maisvidadesafio/src/pages/entities/medico-my-suffix/medico-my-suffix-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__medico_my_suffix_provider__["a" /* MedicoMySuffixService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MedicoMySuffixDetailPage);
    return MedicoMySuffixDetailPage;
}());

//# sourceMappingURL=medico-my-suffix-detail.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoMySuffix; });
var MedicoMySuffix = (function () {
    function MedicoMySuffix(id, primeiroNome, ultimoNome, especialidade, email, ativo, status, cidade, estado) {
        this.id = id;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.especialidade = especialidade;
        this.email = email;
        this.ativo = ativo;
        this.status = status;
        this.cidade = cidade;
        this.estado = estado;
        this.ativo = false;
    }
    return MedicoMySuffix;
}());

//# sourceMappingURL=medico-my-suffix.model.js.map

/***/ })

});
//# sourceMappingURL=0.js.map