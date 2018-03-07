import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoMySuffixPage } from './medico-my-suffix';
import { MedicoMySuffixService } from './medico-my-suffix.provider';

@NgModule({
    declarations: [
        MedicoMySuffixPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoMySuffixPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoMySuffixPage
    ],
    providers: [MedicoMySuffixService]
})
export class MedicoMySuffixPageModule {
}
