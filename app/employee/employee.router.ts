import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {EmployeeContactListComponent} from './employee-contactlist.component';
import {EmployeeAddContactComponent} from './employee-addcontact.component';

@Component({
    template : `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]   
})

@RouteConfig([
  {path: '/contactlist',  name: 'ContactList', component: EmployeeContactListComponent},
  {path: '/addcontact',  name: 'AddContact', component: EmployeeAddContactComponent}
])

export class EmployeeRouter{}

