import { Component } from '@angular/core';

@Component({
    template: require('./<%= name %>.component.pug'),
    styles: [ require('./<%= name %>.component.scss') ]
})
export default class <%= displayName %>Component {

}