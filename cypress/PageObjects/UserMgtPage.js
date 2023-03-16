/// <reference types="Cypress" />



class UserMgt{
    userMenu ='[ng-reflect-router-link="users"]'
    addUserButton ='button[class="btn-primary mt-4 mb-5 ng-star-inserted"]'
    fullNameFiled='input[data-ims-testid="name"]'
    emailField ='input[data-ims-testid="email"]'
    phoneField='input[data-ims-testid="phone"]'
    rolesDropdown='mat-select[data-ims-testid="roles"]'
    listOfRoles ='span[class="mat-option-text"]'
    confirmButton='button[data-ims-testid="confirm-button"]'
    roleName='Super Admin 2'
    //Edit Objects
    kebabIcon='table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(7)'
    userRow='table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)'
    editOption ='.mat-menu-content > :nth-child(1)'
    suspendOption='.mat-menu-content > :nth-child(2)'
    suspendButton='.mat-button-wrapper > .ng-star-inserted'
    auditTrailOption='.mat-menu-content > :nth-child(3)'
    deleteOption='.mat-menu-content > :nth-child(4)'
    //searchUserObject
    searchField='input[class="input ng-untouched ng-pristine ng-valid"][placeholder="Search name of user"]'
    searchButton='button[data-ims-testid="search-button"]'

    //Create User Objects
    clickUserMenu(){
        cy.get(this.userMenu).click();
    }
    clickAddUser(){
        cy.get(this.addUserButton).click();
    }
    enterFullName(name){
        cy.get(this.fullNameFiled).clear().type(name)
    }
    enterEmail(email){
        cy.get(this.emailField).type(email)
    }
    enterPhoneNum(number){
        cy.get(this.phoneField).clear().type(number)
    }
    clickSelectRole(){
        cy.get(this.rolesDropdown).click();
    }
    selectRole(roleIndex){
        cy.get(this.listOfRoles).eq(roleIndex).click();
    }
    clickConfirmButton(){
        cy.get(this.confirmButton).click()
    }

    //Edit Functions

    clickUserOptions(editIndex){
        cy.get(this.kebabIcon).eq(editIndex).click();
    }
    clickEdit(){
        cy.get(this.editOption).click();
    }
    //Suspend/Activate functions
    clickSuspend(){
        cy.get(this.suspendOption).click();
    }
    suspendUser(){
        cy.get(this.suspendButton).click();
    }

    //Search user functions
    searchUserName(name){
        cy.get(this.searchField).clear().type(name)
    }
    clickSearchButton(){
        cy.get(this.searchButton).click();
    }
    clickAuditTrail(){
        cy.get(this.auditTrailOption).click();
    }
    clickDeleteOption(){
        cy.get(this.clickDeleteOption).click();
    }

    verifyUserRow(rowIndex){
        cy.get(this.userRow).eq(rowIndex);
    }

}
export default UserMgt;