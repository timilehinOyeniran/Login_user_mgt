///<reference types ="Cypress" />

//import { data } from "cypress/types/jquery/index.js";
import Login from "../PageObjects/LoginPage.js";

const login = new Login();

describe('Login Tests', ()=>{

    let loginData;
    before('login credentails',()=>{
       cy.stagingUrl();
       //cy.fixture('loginUsers.json').as('users');
       cy.fixture('loginUsers.json').then((data)=>{
            loginData = data;
        }) 
    })

    after('Logout of the application',()=>{
        cy.logout();
    })

    it('Test successful login', ()=>{
        let email= loginData.admin_user1.email;
        let password = loginData.admin_user1.password;
        cy.successfulLogin(email, password);
    })


    //Invalid email. The error message has not been implemented for the new Login flow

    //Test invalid password for a valid user

    //Test e-procurement sign-up

    //Test new user registration

      

})