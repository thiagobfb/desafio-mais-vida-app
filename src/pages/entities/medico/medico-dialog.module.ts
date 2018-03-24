import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoDialogPage } from './medico-dialog';
import { MedicoService } from './medico.provider';

@NgModule({
    declarations: [
        MedicoDialogPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoDialogPage
    ],
    providers: [
        MedicoService
    ]
})
export class MedicoDialogPageModule {
}
