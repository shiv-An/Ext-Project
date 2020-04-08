Ext.define('MyBiz.view.main.PerformanceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.performancecontroller',

    download:function(){
        window.open("Q42013Report.pdf", "_blank")
    }
});