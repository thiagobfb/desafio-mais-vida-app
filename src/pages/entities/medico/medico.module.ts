import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoPage } from './medico';
import { MedicoService } from './medico.provider';

@NgModule({
    declarations: [
        MedicoPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoPage
    ],
    providers: [MedicoService]
})
export class MedicoPageModule {
}
