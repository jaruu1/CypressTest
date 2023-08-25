// const navbarText = Cypress.env("navbarText");

context("My First Test", () => {
  beforeEach(()=>{
    cy.visit('/commands/actions')
  })

  // it('triggers a popover on a click',()=>{
  //   cy.get('.action-btn').click()
  //   cy.findByText('This popover shows up on click').should('be.visible')
  // })

  // it('can click on diffrent sections of a canvas',()=>{
  //   cy.get('#action-canvas').click('top')
  //   cy.get('#action-canvas').click('bottomRight')
  //   cy.get('#action-canvas').click(72,86)

  // })

  // it('can double click to edit',()=>{
  //   cy.get('.action-div').dblclick().should('not.be.visible')
  //   cy.get('.action-input-hidden').should('be.visible')

  // })

  // it('can right click to edit',()=>{
  //   cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
  //   cy.get('.rightclick-action-input-hidden').should('be.visible')
  // })

  it('shows the nav links on hover',()=> {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
  // before(() => {
  //   cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
  // });
  // beforeEach(() => {
  //   cy.fixture("example").then(function (data) {
  //     this.data = data;
  //     cy.log("This: ", this.data);
  //   });
  // });

  // it("sets and gets a token from local storage", () => {
  //   cy.setLocalStorage("token", "abcd1234");
  //   cy.getLocalStorage("token").should("eq", "abcd1234");
  // });

  // it("overwrites the type command by using sensitive characters", () => {
  //   cy.visit("/commands/actions");
  //   cy.findByPlaceholderText("Email").type("test@mail.com");
  //   cy.findByPlaceholderText("Email").type("test@mail.com", {
  //     sensitive: true,
  //   });
  // });
  // it('uses fixture data in a netork request', function(){
  //   cy.visit('/commands/network-requests')
  //   cy.intercept('GET', '**/comments/*',this.data).as('getComment')
  //   cy.get('.network-btn').click()
  //   cy.wait('@getComment').then((res)=>{
  //     cy.log('Response: ',res)
  //   })

  // })
  // it('visits the home page',()=>{
  //   cy.visit('./')
  // })
  // it("has an h1 on the page", () => {
  //   cy.visit('/')
  //   cy.get("h1").should("exist");
  // });
  // // it('renders the correct h1 text',()=>{
  // //   cy.get('h1').should('contain.text', 'Actions')
  // // })

  // // it('renders a paragraph under the h1',()=>{
  // //   cy.get('.container').eq(1).find('p').should('exist')
  // // })
  // // it('renders a section with the correct elements', ()=>{
  // //   cy.get('.container').eq(2).within(()=>{
  // //     cy.get('h4').should('exist');
  // //     cy.get('p').should('exist')
  // //   })
  // // })
  // it('correctly renders the website link',()=>{
  //   cy.findByText(navbarText).should('exist')
  // })
  // it("types Into an email field", () => {
  //   cy.visit("/commands/actions");
  //   cy.findByPlaceholderText("Email").type("test@email.com");
  //   cy.wait(20).then(() => {
  //     console.log("test is finished");
  //     fetch("https://api.spacexdata.com/v3/missions")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   });
  // });

  // it("shows an active class for the current page", () => {
  //   cy.visit("/commands/actions");
  //   cy.get(".dropdown-menu").find("li").eq(2).should("have.class", "active");
  // });

  // it("should not have anactive class on inacvtive pages", () => {
  //   cy.visit("/commands/actions");
  //   cy.get(".dropdown-menu")
  //     .find("li")
  //     .first()
  //     .should("have.not.class", "active").find('a').should('have.attr', 'href','/commands/querying');
  // });
  // it('links to the actions page correctly', ()=>{
  //   cy.visit('/')
  //   cy.findAllByText('Actions').first().click({force:true})
  //   cy.url().should('include','commands/actions')
  // })

  // it('lets you type in an input field',()=>{
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('Test').should('have.value','Test')
  // })

  // it('lets you clear an input field',()=>{
  //   cy.visit('/commands/actions')
  //   cy.findByLabelText('Describe:').type('Test descriptions').should('have.value','Test descriptions').clear().should('have.value','')
  // })
  // it('lets you check a checbox',()=>{
  //   cy.visit('/commands/actions')
  //   cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force:true}).should('be.checked')
  // })

  // it('pulls data from fixture',()=>{
  //   cy.fixture('example').then((data)=>{
  //     cy.log("DATA: ",data)
  //   })
  // })
  // it('updates fixture data inline',()=>{
  //   cy.fixture('example').then((data)=>{
  //     data.email='updated@mail.com'
  //     cy.log('Updated:',data )
  //   })
  // })
});
