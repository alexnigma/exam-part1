export function findProduct (productName)  {

        cy.get(`body`).then( body => {

            if (body.find(`[alt*="${productName}"]`).length) {

                cy.contains(`.mat-grid-tile-content`, `${productName}`).within( () => {
                    cy.get(`[aria-label="Add to Basket"]`).click()
                })

            } else {
                cy.get(`[aria-label="Next page"]`).should(`not.be.disabled`).click({force:true});
                findProduct(productName)
            }
        })
}