describe('The Home Page', function() {
    it('successfully loads', function() {
        // 这里访问相对地址 是在项目根目录的cypress.json中配置了默认的baseUrl
        cy.visit('/')
        cy.get('#main-content')
            .find('.article')
            .children('img')
            .first()
            // css的断言写法
            .should('have.css', 'width', '50px')
    })
    it('interact', function() {
        cy.get('.inputArea')
            .find('input')
            // 聚焦
            .focus()
            // 输入
            .type('this is a testing text')
            // 清空
            .clear()
            // 失焦
            .blur()
        cy.get('.checkBoxArea')
            .children('input')
            // 遍历
            .then(($element) => {
                cy.get($element)
                // 选中
                .check()
                // 不选中
                .uncheck()
            })
        cy.get('.selectArea')
            .find('select')
            // 选择属性为volvo2的option
            .select('volvo2')
    })
})