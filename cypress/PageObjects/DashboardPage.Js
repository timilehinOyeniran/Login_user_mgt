/// <reference types ="Cypress" />

class Dashboard{
    profileIcon =' div[class="mat-menu-trigger initials-container ng-star-inserted"]';
    logoutPopUp ='button[class="mat-focus-indicator mat-menu-item ng-tns-c181-1"]';

    clickProfile(){
        cy.get(this.profileIcon).click();
    
    }

    clickLogout(){
        cy.get(this.logoutPopUp).click();
    }

}

export default Dashboard();