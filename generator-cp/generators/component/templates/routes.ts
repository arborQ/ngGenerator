import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseGuard } from 'bx-shared';
import <%= displayName %>Component from './<%= name %>.component';

const routes: Routes = [
  {
    path: '<%= name %>',
    component: <%= displayName %>Component,
    canActivate: [ BaseGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class <%= displayName %>RoutingModule { }
