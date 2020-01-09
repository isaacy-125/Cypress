describe('The Home Page', function() {
    it('successfully loads', function() {
        // 这里访问相对地址 是在项目根目录的cypress.json中配置了默认的baseUrl
        cy.visit('/')
    })
})