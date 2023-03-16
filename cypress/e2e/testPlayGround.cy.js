import Login from "../PageObjects/LoginPage.js"

describe('e-procurmeent Login Tests', () => {
 /* it('Valid login Test', () => {
    //Launch Url
    cy.visit('https://ims-staging.vendease.com/')
    cy.title().should('eq', 'IMS')
    cy.get('input[data-ims-testid="subdomain"]').type('ims-staging-api')
    cy.get(':nth-child(1) > div > .form-control').should('have.value', 'ims-staging-api')
    cy.get("input[data-ims-testid='email']").type('timilehin.oyeniran@vendease.com')
    cy.get('.password-container > .form-control').type('P@ssword01')
    cy.get('.btn-primary').click()
    cy.get("div[class='ng-tns-c46-0 toast-message ng-star-inserted']").contains('Login successful')
  }) */
  const getIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe[role="dialog"]')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
  }
  it('e-procurement Successful login', () => {
    cy.visit('https://staging.vendease.com/auth/login')
    cy.get('#mat-input-0').type("dipo@yopmail.com")
    cy.get('#mat-input-1')
      .type("password", { delay: 100 })
    cy.get('button[type="submit"]').click()
    cy.wait(10000)
    getIframeBody().find('a[aria-label="Close modal"]').click();

  })

  it.only('IMS successful login', ()=>{
    cy.visit('https://ims-staging.vendease.com/#/auth/login')

    const ln = new Login();
    ln.setEmailAddress('desmond.ayodeji@vendease.com');
    ln.clickContinue();
    ln.selectABusiness();
    ln.clickContinueButton();
    ln.enterPassword('password1');
    ln.clickContinue();
    ln.verifyLoginAlert();
    ln.verifySuccessfulLogin(); 
  })

  it('edit user', ()=>{

    userMgt.clickUserMenu();
    //Select the first row/ newly created user
    userMgt.clickUserOptions(0);
    //cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(7)').eq(0).click();
    //Click on the edit option
    userMgt.clickEdit();
    //cy.get('.mat-menu-content > :nth-child(1)').click();
    //Edit User Name
    userMgt.enterFullName(testname);
    //Edit Phone number
    userMgt.enterPhoneNum(phoneNumber);
    //Edit Role
    userMgt.clickSelectRole();
    userMgt.selectRole(6);
    //Click save edit
    userMgt.clickConfirmButton();
    //Validate that newly edited user exists on the table
    //table test.contains('have.text', testname)
    //userMgt.verifyUserRow(0).contains(`${testname}`, { matchCase:false })
    cy.get('table[class="table ng-star-inserted"]>tbody>tr>td:nth-child(1)').eq(0).contains(`${testname}`, { matchCase:false })
})





/* beforeEach(() => {
		cy.visit('https://wat-04.levelten.energy/')
		//cy.loginAsNewUser('timilehin.oyeniran');
		cy.get('.email-input').type('timilehin.oyeniran@leveltenenergy.com')
		cy.get('.round-next-button').click()
		cy.get('button > .buttonLabel').click()
		cy.get('#okta-signin-username').type('timilehin.oyeniran@leveltenenergy.com')
		cy.get('#okta-signin-password').type('Omolol@9e')
		cy.get('#okta-signin-submit').click()

		cy.fixture('users').as('user')
		cy.fixture('pages').as('page')
	})
	*/

	beforeEach(() => {
		cy.loginAsNewUser(buyer.buyer_energy_rfps)
	})
    
	it('Buyer user should be able to login into LTE', function () {
		cy.loginAsNewUser(buyer.buyer_users_login)
		buyerHomePage.verifyCompanyName(buyer.buyer_users_login)
		buyerHomePage.verifyUserAccount('buyer user')
	})
	it('Buyer should be able to create, edit and delete new draft RFPs', function () {
		buyerHomePage.navigateToPage(pages.BUYER.rfps)
		buyerRfpDashboardPage.clickOnCreateRfp()
		buyerCreateRfpsPage.createDraftRfp(rfps.BUYER_RFP_TEST_01)
		buyerRfpDashboardPage.verifyRfpIsDisplayed(rfps.BUYER_RFP_TEST_01)
		buyerRfpDashboardPage.clickOnRfpByName(rfps.BUYER_RFP_TEST_01.name)
		buyerRfpsPage.verifyRfpOverview(rfps.BUYER_RFP_TEST_01)
		buyerRfpsPage.verifyRfpOffer(rfps.BUYER_RFP_TEST_01)
		buyerRfpsPage.clickOnEditRfp()
		buyerCreateRfpsPage.enterRfpName(rfps.BUYER_RFP_UPDATED_01.name)
		buyerCreateRfpsPage.enterTotalVolume(rfps.BUYER_RFP_UPDATED_01.totalVolume)
		buyerCreateRfpsPage.enterDiscountRate(rfps.BUYER_RFP_UPDATED_01.discountRate)
		buyerCreateRfpsPage.enterOfferName(rfps.BUYER_RFP_UPDATED_01.offer.name)
		buyerCreateRfpsPage.clickOnSaveRfp()
		buyerRfpsPage.verifyRfpOverview(rfps.BUYER_RFP_UPDATED_01)
		buyerRfpsPage.verifyRfpOffer(rfps.BUYER_RFP_UPDATED_01)
	})

	after(() => {
		cy.deleteRfp(rfps.BUYER_RFP_UPDATED_01.name)
		cy.deleteRfp(rfps.BUYER_RFP_TEST_01.name)
		cy.deleteRfp(rfps.BUYER_RFP_TEST_02.name)
		cy.deleteRfp(rfps.BUYER_RFP_TEST_03.name)
		cy.deleteSessionUser(buyer.buyer_energy_rfps)
	})

	it('Admin should be able to see list of RFPs when navigating to RFP page', function () {
		adminHomePage.isListOfRfpsDisplayed()
	})

})