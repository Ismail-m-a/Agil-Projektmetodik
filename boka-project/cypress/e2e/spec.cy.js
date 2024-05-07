describe('Boka Form', () => { //Beskriver en testsvit för bokningsformuläret
  beforeEach(() => { //För varje test, besök bokningssidan
    cy.visit('/boka'); 
  });

  it('submits the form successfully', () => { //Testar att formuläret skickas framgångsrikt
    cy.intercept('POST', 'http://localhost:3000/boka', { //Fångar upp och simulerar en lyckad POST-förfrågan
      statusCode: 200,
      body: {}
    }).as('bokaRequest');

    //Fyller i formulärfälten
    cy.get('input[name="name"]').type('Test Name');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="address"]').type('Test Address');
    cy.get('select[name="service"]').select('hemstadning');
    cy.get('select[name="housingType"]').select('Lägenhet');
    cy.get('input[name="date"]').type('2024-05-05');
    cy.get('input[name="time"]').type('12:00');
    cy.get('textarea[name="message"]').type('Test Message');
    cy.get('button[type="submit"]').click(); //Klickar på skicka-knappen

    //Väntar på att POST-förfrågan ska slutföras och utför sedan assertion
    cy.wait('@bokaRequest').then((interception) => {
      assert.isNotNull(interception.response.body, 'API call has data'); //Kontrollerar att API-anropet har data
      assert.equal(interception.response.statusCode, 200); //Kontrollerar att statuskoden är 200
    });
    cy.wait(5000); //Väntar 5 sekunder

    //Kontrollerar att en bekräftelsemeddelande visas för användaren
    cy.contains('Bokningen bekräftad, tack Test Name! Din meddelande "Test Message"').should('be.visible');
  });
  
  it('handles form submission error', () => { //Testar hantering av fel vid formulärinsändning
    cy.intercept('POST', 'http://localhost:3000/boka', { //Fångar upp och simulerar en serverfel vid POST-förfrågan
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('bokaRequest');

    //Fyller i formulärfälten
    cy.get('input[name="name"]').type('Test Name');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="address"]').type('Test Address');
    cy.get('select[name="service"]').select('hemstadning');
    cy.get('select[name="housingType"]').select('Lägenhet');
    cy.get('input[name="date"]').type('2024-05-05');
    cy.get('input[name="time"]').type('12:00');
    cy.get('textarea[name="message"]').type('Test Message');
    cy.get('button[type="submit"]').click(); //Klickar på skicka-knappen

    //Väntar på att POST-förfrågan ska slutföras och utför sedan assertion
    cy.wait('@bokaRequest').then((interception) => {
      assert.isNotNull(interception.response.body, 'API call has data'); //Kontrollerar att API-anropet har data
      assert.equal(interception.response.statusCode, 500); //Kontrollerar att statuskoden är 500
    });
    cy.wait(5000); //Väntar 5 sekunder

    //Kontrollerar att ett felmeddelande visas för användaren
    cy.contains('Bokningen är misslyckad, vänligen försök igen: Internal Server Error').should('be.visible');
  });

  it('validerar toma obligatorisk input fält errors', () => { //Testar validering av tomma obligatoriska inmatningsfält
    cy.intercept('POST', 'http://localhost:3000/boka', { //Fångar upp och simulerar en serverfel vid POST-förfrågan
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('bokaRequest');

    //Försöker skicka formuläret utan att fylla i obligatoriska fält
    cy.get('button[type="submit"]').click();

    //Testar för visning av felmeddelande
    cy.get('.toast-error-message').should('exist');
  });
  
});
