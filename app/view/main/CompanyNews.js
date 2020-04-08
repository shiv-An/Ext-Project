Ext.define('MyBiz.view.main.CompanyNews', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.companynews',
    
    tbar:[{
        text:'All Posts',
        menu: [{
            text: 'News',
            xtype: 'menucheckitem',
        }, {
            text: 'FORUM',
            xtype: 'menucheckitem',
        }],
    }],
    bbar: ['->',
    {
        bind:{text: '{title}'},
        handler: 'clickOn',
    }
],
controller: 'companynewscontroller',

    layout: 'card',
    width: '90%',
    height: 150,

    items: [
        {
            id: 'card-0',
            bind:{
                html: '{content}'
            },
            scrollable:true            
        }
    ],
    viewModel: {
        data: {
            content: 'Click the below button to get the whole story.',
            title:'Expand'
        }
    },


});