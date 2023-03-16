/// <reference types ="Cypress" />

import UserMgt from "../PageObjects/UserMgtPage.js";

const userMgt = new UserMgt();

describe('User Management Tests', ()=>{

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
  }
  
    //const uuid = () => Cypress._.random(0, 100)
        //const id = uuid()
        //const testname = `Automation User${id}`
        var name2 = ["people","history","way","art","world","information","map","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature","investment","area","society","activity","story","industry","media","thing","oven","community","definition","safety","quality","development","language","management","player","variety","video","week","security","country","exam","movie","organization","equipment","physics","analysis","policy","series","thought","basis","boyfriend","direction","strategy","technology","army","camera","freedom","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe"];
        var name = name2[getRandomInt(0, name2.length + 1)]
        const testname = "Automation " + name
        const emailAddress =testname+'@yopmail.com'
        const number = String(Math.random()).substring(2,10)
        const phoneNumber ='081'+number
       
       
    beforeEach('call login test', ()=>{
        cy.stagingUrl(); 
        cy.successfulLogin('timilehin.oyeniran@vendease.com', 'P@ssword01');
        userMgt.clickUserMenu();
    })

    after('Logout of the application',()=>{
      cy.logout();
    })

    /*Bug identified. When the Full name contains a number, it returns error 422 on the API 
    and something went wrong on the UI. Right Error message should be returned or separate First name and Last Name fields
    */
    it.skip('create a new user', ()=>{
        userMgt.clickAddUser();
        userMgt.enterFullName(testname);
        userMgt.enterEmail(emailAddress);
        userMgt.enterPhoneNum(phoneNumber);
        userMgt.clickSelectRole();
        userMgt.selectRole(5);
        userMgt.clickConfirmButton();
        //Validate that newly created user exists on the table
        cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)').eq(0).contains(`${testname}`, { matchCase:false })
    })

    it('edit user', ()=>{
        userMgt.clickUserOptions(0);
        userMgt.clickEdit();
        userMgt.enterFullName(testname);
        userMgt.enterPhoneNum(phoneNumber);
        userMgt.clickSelectRole();
        userMgt.selectRole(6);
        userMgt.clickConfirmButton();
        //userMgt.verifyUserRow().contains(`${testname}`, { matchCase:false })
        cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)').eq(0).contains(`${testname}`, { matchCase:false })
    })

    it('suspend/activate user',()=>{
        userMgt.clickUserOptions(0);
        userMgt.clickSuspend();
        userMgt.suspendUser();
    })
    
    it('search for created/edited user',()=>{
        userMgt.searchUserName('automation')
        userMgt.clickSearchButton();
        cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)').eq(0).contains('automation', { matchCase:false })

    })
   
    /* On a user audit trail, the Search field is redundant. The audit trail is already viewed by the user why search by the userName again
    Rather, user shold be able to export audit trail, filter by date and action performed.
    */
    it('view audit trail', ()=>{
        userMgt.searchUserName('timilehin')
        userMgt.clickUserOptions(0)
        cy.get(':nth-child(1) > .button-column > .mat-menu-trigger').click();
        userMgt.clickAuditTrail();
        //validate audit trail list
        cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)').eq(0).contains('timilehin', { matchCase:false })
    })

    //Clean Up Test data
    //Delete user not a complete process. Clicking on the delete user is not reponsive
    it('delete user',()=>{
        userMgt.clickDeleteOption();

    })
})