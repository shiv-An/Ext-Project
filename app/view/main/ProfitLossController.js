Ext.define('MyBiz.view.main.ProfitLossController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.profitlosscontroller',

    onClearFilters: function(record){
        if(Ext.getCmp('A')===false){{
                record.drop();
            }
        }
    }

});
