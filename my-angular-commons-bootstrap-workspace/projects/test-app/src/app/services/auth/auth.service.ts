import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../my-angular-commons-bootstrap/src/lib/services/base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';
import { of } from 'rxjs';
import { Role } from '../../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private principal: any = undefined;

  constructor(private userService: UserService){
    
  }

  public hasRole(role: Role): boolean {
    this.checkIfPrincipalIsInitialized();
    for(let authority of this.principal.authorities) {
      if(authority.authority == "ROLE_" + role)
        return true;
    }
    return false;
  }

  public getCurrentUsername() {
    this.checkIfPrincipalIsInitialized()
    return this.principal.name;
  }

  private checkIfPrincipalIsInitialized() {
    if(this.principal == undefined)
      throw "Auth service not initialized yet. Subscribe on init function first.";
  }

  public init() {
    if(this.principal == undefined)
      return this.userService.me();
    else
      return of(this.principal)
  }

  
}
