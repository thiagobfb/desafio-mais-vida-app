import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoMySuffixDialogPage } from './medico-my-suffix-dialog';
import { MedicoMySuffixService } from './medico-my-suffix.provider';

@NgModule({
    declarations: [
        MedicoMySuffixDialogPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoMySuffixDialogPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoMySuffixDialogPage
    ],
    providers: [
        MedicoMySuffixService
    ]
})
export class MedicoMySuffixDialogPageModule {
}
