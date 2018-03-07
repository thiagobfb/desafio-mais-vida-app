import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { MedicoMySuffix } from './medico-my-suffix.model';
import { MedicoMySuffixService } from './medico-my-suffix.provider';

@IonicPage()
@Component({
    selector: 'page-medico-my-suffix',
    templateUrl: 'medico-my-suffix.html'
})
export class MedicoMySuffixPage {
    medicos: MedicoMySuffix[];

    // todo: add pagination

    constructor(private navCtrl: NavController, private medicoService: MedicoMySuffixService,
                private modalCtrl: ModalController, private toastCtrl: ToastController) {
        this.medicos = [];
    }

    ionViewDidLoad() {
        this.loadAll();
    }

    loadAll(refresher?) {
        this.medicoService.query().subscribe(
            (response) => {
                this.medicos = response;
                if (typeof(refresher) !== 'undefined') {
                    refresher.complete();
                }
            },
            (error) => {
                console.error(error);
                let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                toast.present();
            });
    }

    trackId(index: number, item: MedicoMySuffix) {
        return item.id;
    }

    open(slidingItem: any, item: MedicoMySuffix) {
        let modal = this.modalCtrl.create('MedicoMySuffixDialogPage', {item: item});
        modal.onDidDismiss(medico => {
            if (medico) {
                if (medico.id) {
                    this.medicoService.update(medico).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'MedicoMySuffix updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.medicoService.create(medico).subscribe(data => {
                        this.medicos.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'MedicoMySuffix added successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                    }, (error) => console.error(error));
                }
            }
        });
        modal.present();
    }

    delete(medico) {
        this.medicoService.delete(medico.id).subscribe(() => {
            let toast = this.toastCtrl.create(
                {message: 'MedicoMySuffix deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(medico: MedicoMySuffix) {
        this.navCtrl.push('MedicoMySuffixDetailPage', {id: medico.id});
    }
}
