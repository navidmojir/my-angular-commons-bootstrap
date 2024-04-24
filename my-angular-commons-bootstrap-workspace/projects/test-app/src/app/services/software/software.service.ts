import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../my-angular-commons-bootstrap/src/lib/services/base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends BaseService {

  // private baseService: BaseService = new BaseService(this.httpClient);

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl(environment.apiUrl);
    this.setResourceName('softwares')
   }

  
  // public create(software: any) {
  //   return this.baseService.post(environment.apiUrl + "/softwares", software);
  // } 

  

  
}
