var editFunction = require('../testAssets/employeeTestFunction')
let testEmployees = require('../testAssets/employeeTestArray')
let manager = {}
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Can we add an employee': browser => {
        // manager
            // .addEmployee({name: '', phone: '', title: 'CEO'})
            manager.addEmployee(testEmployees[0])
            //assert employee name changed
            manager.useXpath()
            manager.expect.elements(`//li[text()="${testEmployees[0].name}"]`).count.to.equal(1)
            manager.useCss()
            manager.expect.element('@cardTitle').text.to.contain(testEmployees[0].name)
    },
      'Can we edit an employee?': browser => {
        editFunction(
            manager, 
            testEmployees[0].name,
            testEmployees[1],
            'Billian')
    },
    'Can we delete an employee?': browser => {
        manager.deleteEmployee(testEmployees[1].name)
        manager.expect.elements(`//li[text()="${testEmployees[1].name}"]`).count.to.equal(0)
    }
}