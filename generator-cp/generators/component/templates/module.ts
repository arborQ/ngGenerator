import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LocalizeModule from '../localize/localize.module';
import <%= displayName %>Component from './<%= name %>.component';
import <%= displayName %>Service from './<%= name %>.service';

import { UiModule } from 'bx-ui';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocalizeModule,
        UiModule,
    ],
    declarations: [
        <%= displayName %>Component,
    ],
    providers: [
        <%= displayName %>Service,
    ],
    exports: [

    ]
})
export class <%= displayName %>Module { }
