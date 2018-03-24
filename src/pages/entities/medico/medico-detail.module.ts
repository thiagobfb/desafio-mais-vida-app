import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoDetailPage } from './medico-detail';
import { MedicoService } from './medico.provider';

@NgModule({
    declarations: [
        MedicoDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoDetailPage
    ],
    providers: [MedicoService]
})
export class MedicoDetailPageModule {
}
