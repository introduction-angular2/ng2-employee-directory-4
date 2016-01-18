import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from './home.component';

@Component({
    template : `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]   
})

@RouteConfig([
  {path: '/',  name: 'Welcome', component: HomeComponent, useAsDefault: true}
])

export class HomeRouter{}

