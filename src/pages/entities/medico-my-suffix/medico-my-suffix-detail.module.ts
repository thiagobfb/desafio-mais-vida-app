import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoMySuffixDetailPage } from './medico-my-suffix-detail';
import { MedicoMySuffixService } from './medico-my-suffix.provider';

@NgModule({
    declarations: [
        MedicoMySuffixDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoMySuffixDetailPage),
        TranslateModule.forChild()
    ],
    exports: [
        MedicoMySuffixDetailPage
    ],
    providers: [MedicoMySuffixService]
})
export class MedicoMySuffixDetailPageModule {
}
