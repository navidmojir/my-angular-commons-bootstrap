import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../my-angular-commons-bootstrap/src/lib/services/base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl(environment.apiUrl);
    this.setResourceName('users');
   }

  
}
