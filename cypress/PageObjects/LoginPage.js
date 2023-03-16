/// <reference types="Cypress" />


class Login{

    emailField= 'input[data-ims-testid="email"]' ;
    continueButton1 = 'button[data-ims-testid="login-button"]';
    businessList ='div[class ="list-of-business px-6 py-4 mb-3"]';
    businessName = 'VI Vendease Inc';
    continueButton2 = 'button[class ="btn-primary mt-20"]';
    passwordField = 'input[data-ims-testid="password"]';
    loginAlert = "div[class='ng-tns-c46-0 toast-message ng-star-inserted']";
    dashboardMenuButton ='div[ng-reflect-router-link="dashboard"]';

    profileIcon ='div[class="mat-menu-trigger initials-container ng-star-inserted"]';
    logoutPopUp ='div[class="mat-menu-content ng-tns-c181-1"]';

    
    setEmailAddress(emailAddress){
        cy.get(this.emailField).type(emailAddress)
    }

    clickContinue(){
        cy.get(this.continueButton1).click()
    }

    
    selectABusiness(){
        
        if(this.businessList.length < 1){
            cy.get(this.businessList).eq(1).click()
            .should('contain.text', this.businessName)
        }

        else if(this.businessList.length > 1){
        cy.get(this.businessList).eq(0).click()
        .should('contain.text', this.businessName)
        }
        
        else{
            print('No business attached')
        }

    }

    clickContinueButton(){
        cy.get(this.continueButton2).click()
    }

    enterPassword(password){
        cy.get(this.passwordField).type(password)
    }

    verifyLoginAlert(){
        cy.get(this.loginAlert).contains('Login successful')
    }
    verifySuccessfulLogin(){
        cy.get(this.dashboardMenuButton).should('have.text', ' Dashboard ')
    }

    clickProfile(){
        cy.get(this.profileIcon).click();
    
    }

    clickLogout(){
        cy.get(this.logoutPopUp).click();
    }

}

export default Login;