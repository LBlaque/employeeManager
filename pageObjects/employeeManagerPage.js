var employeeManagerCommands = {
    clickEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    },
    deleteEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.click('@deleteButton')
        this.api.acceptAlert()
        return this
    },
    editEmployee: function(employeeInfo){
        if(employeeInfo.name){
            this
                .clearValue('@nameField')
                .setValue('@nameField', employeeInfo.name)
        }
        if(employeeInfo.phone){
            this
                .clearValue('@phoneField')
                .setValue('@phoneField', employeeInfo.phone)
        }
        if(employeeInfo.title){
            this
                .clearValue('@titleField')
                .setValue('@titleField', employeeInfo.title)
        }
        return this
    },
    addEmployee: function(addEmp){
        this
            .maximizeWindow()
        if(addEmp.name){
        this
            .click('@addButton')
            .click('@newEmployee')
            .clearValue('@nameField')
            .setValue('@nameField', addEmp.name)
        }
        if(addEmp.phone){
            this
                .clearValue('@phoneField')
                .setValue('@phoneField', addEmp.phone)
        }
        if(addEmp.title){
            this
                .clearValue('@titleField')
                .setValue('@titleField', addEmp.title)
        }
        this.click('@saveButton')
            return this
    },
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        addButton: '[name="addEmployee"]',
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        cancelButton: 'button[name="cancel"]',
        deleteButton: '[name="delete"]',
    }
}