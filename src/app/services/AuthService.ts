import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable()
export class AuthService {
    
    constructor(private KeycloakService: KeycloakService) {}

    getLoggedUser () {
        try {
            let userDetails = this.KeycloakService.getKeycloakInstance().idTokenParsed;
            return userDetails;
        } catch (e) {
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