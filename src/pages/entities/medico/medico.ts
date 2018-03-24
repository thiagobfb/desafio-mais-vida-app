import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Medico } from './medico.model';
import { MedicoService } from './medico.provider';

@IonicPage()
@Component({
    selector: 'page-medico',
    templateUrl: 'medico.html'
})
export class MedicoPage {
    medicos: Medico[];

    // todo: add pagination

    constructor(private navCtrl: NavController, private medicoService: MedicoService,
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

    trackId(index: number, item: Medico) {
        return item.id;
    }

    open(slidingItem: any, item: Medico) {
        let modal = this.modalCtrl.create('MedicoDialogPage', {item: item});
        modal.onDidDismiss(medico => {
            if (medico) {
                if (medico.id) {
                    this.medicoService.update(medico).subscribe(data => {
                        this.loadAll();
                        let toast = this.toastCtrl.create(
                            {message: 'Medico updated successfully.', duration: 3000, position: 'middle'});
                        toast.present();
                        slidingItem.close();
                    }, (error) => console.error(error));
                } else {
                    this.medicoService.create(medico).subscribe(data => {
                        this.medicos.push(data);
                        let toast = this.toastCtrl.create(
                            {message: 'Medico added successfully.', duration: 3000, position: 'middle'});
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
                {message: 'Medico deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    detail(medico: Medico) {
        this.navCtrl.push('MedicoDetailPage', {id: medico.id});
    }
}
