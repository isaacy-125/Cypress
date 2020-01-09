describe('My First Test', function() {
    it('Does not do much!', function() {
        // 期待true等于true
        expect(true).to.equal(true)
    })
})
describe("A Truly Test", function() {
    it('Visits the Kitchen Sink', function() {
        // 访问一个网站
        cy.visit('https://example.cypress.io')
        // cy.pause和cy.debug可用来暂停调试
        cy.pause();
        // 在页面上找到type相关的字段内容
        // 并点击
        cy.contains('type').click();
        // url断言应该包换/commands/actions
        cy.url().should('include', '/commands/actions');
        // get通过css选择器来找到元素
        cy.get('.action-email')
            // type用来输入
            .type('fake@email.com')
            // 断言 值为fake@email.com
            .should('have.value', 'fake@email.com')
    })
})
