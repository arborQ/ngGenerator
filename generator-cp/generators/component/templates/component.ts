import { Component } from '@angular/core';

@Component({
    selector: 'bx-<%= name %>'
    template: require('./<%= name %>.component.pug'),
    styles: [ require('./<%= name %>.component.scss') ]
})
export default class <%= displayName %>Component {

}
