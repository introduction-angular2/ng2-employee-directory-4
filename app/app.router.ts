import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavbarComponent} from './layout/navbar.component';
import {HomeRouter} from './home/home.router';
import {EmployeeRouter} from './employee/employee.router';

@Component({
    selector : 'my-app',
    template : `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]   
})

@RouteConfig([
  {path: '/home/...',  name: 'Home', component: HomeRouter, useAsDefault: true},
  {path: '/employee/...',  name: 'Employee', component: EmployeeRouter},
])

export class AppRouter{}

