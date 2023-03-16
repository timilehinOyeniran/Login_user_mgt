// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import Login from "../../PageObjects/LoginPage.js";
const login = new Login();

Cypress.Commands.add('successfulLogin', (email, password) => {
    login.setEmailAddress(email);
    login.clickContinue();
    login.selectABusiness();
    login.clickContinueButton();
    login.enterPassword(password);
    login.clickContinue();
    login.verifyLoginAlert();
    login.verifySuccessfulLogin(); 

 })

Cypress.Commands.add('logout',()=>{
    login.clickProfile();
    login.clickLogout();
})

 Cypress.Commands.add('stagingUrl', ()=>{
    let url = Cypress.config().stagingUrl;
    cy.visit(url);
 })

 Cypress.Commands.add('qaUrl', ()=>{
   let url = Cypress.config().qaUrl;
   cy.visit(url);
})

Cypress.Commands.add('prodUrl', ()=>{
   let url = Cypress.config().prodUrl;
   cy.visit(url);
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

/// <reference types="Cypress" />