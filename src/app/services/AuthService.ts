import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable()
export class AuthService {
    
    constructor(private KeycloakService: KeycloakService) {}

    getLoggedUser () {
        try {
            let userDetails = this.KeycloakService.getKeycloakInstance().idTokenParsed;
            console.log('UserDetails', userDetails);
            console.log('UserRoles', this.KeycloakService.getUserRoles());
            return userDetails;
        } catch (e) {
            console.log('getLoggedUser Exception', e);
            return undefined;
        }

    } 

    logout () {
      this.KeycloakService.logout();
    }

    redirectToProfile() {
      this.KeycloakService.getKeycloakInstance().accountManagement()
    }

    getRoles() : string [] {
        return this.KeycloakService.getUserRoles();
    }
}