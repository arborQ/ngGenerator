import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LocalizeInit from '../localize/localize.provider';
import LocalizeModule from '../localize/localize.module';
import <%= displayName %>Component from './<%= name %>.component';
import <%= displayName %>Service from './<%= name %>.service';
import <%= displayName %>Routing from './<%= name %>.routing';
import en from './translations/en';

import { UiModule } from 'bx-ui';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocalizeModule,
        UiModule,
        <%= displayName %>Routing
    ],
    declarations: [
        <%= displayName %>Component,
    ],
    providers: [
        <%= displayName %>Service,
        LocalizeInit({ en }),
    ],
    exports: [

    ]
})
export default class <%= displayName %>Module { }
