import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeContactService {

  constructor(private _http: Http) {}

  getEmployeeContacts() {
    return this._http.get('/app/employee/employee-contactlist.json')
    .map((res:Response) => res.json());
  }

}