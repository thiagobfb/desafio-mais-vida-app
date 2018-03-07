import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { MedicoMySuffix } from './medico-my-suffix.model';
import { MedicoMySuffixService } from './medico-my-suffix.provider';

@IonicPage({
    segment: 'medico-my-suffix-detail/:id'
})
@Component({
    selector: 'page-medico-my-suffix-detail',
    templateUrl: 'medico-my-suffix-detail.html'
})
export class MedicoMySuffixDetailPage {
    medico: MedicoMySuffix;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private medicoService: MedicoMySuffixService, private toastCtrl: ToastController) {
        this.medico = new MedicoMySuffix();
        this.medico.id = params.get('id');
    }

    ionViewDidLoad() {
        this.medicoService.find(this.medico.id).subscribe(data => this.medico = data);
    }

    open(item: MedicoMySuffix) {
        let modal = this.modalCtrl.create('MedicoMySuffixDialogPage', {item: item});
        modal.onDidDismiss(medico => {
            if (medico) {
                this.medicoService.update(medico).subscribe(data => {
                    this.medico = data;
                    let toast = this.toastCtrl.create(
                        {message: 'MedicoMySuffix updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
}
