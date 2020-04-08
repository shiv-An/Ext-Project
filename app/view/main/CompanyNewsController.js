Ext.define('MyBiz.view.main.CompanyNewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.companynewscontroller',

    clickOn: function() {
        this.getViewModel().set('title', 'Collapse');
        this.getViewModel().set('content', '<h1>Heading</h1><p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'); 
    },
});