Ext.define('MyBiz.view.main.ProfitLoss', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.profitloss',
    store: {
        type: 'profitlossstore'
    },
    requires: [
        'Ext.grid.feature.Grouping'
    ],
    controller:'profitlosscontroller',

    tbar: [{
        text: 'QUARTER',
        scale: 'medium',
        handler: 'onClearFilters',
        menu: [{
            text: 'Q1 2010',
            checked   : true,
        }, {
            text: 'Q2 2010',
            checked   : true,
        }, {
            text: 'Q3 2010',
            checked   : true,
        },{
            text: 'Q4 2010',
            checked   : true,
        }],
        textAlign: 'left',
        width: 150,
    }, {
        text: 'REGION',
        scale:'medium',
        handler: 'onClearFilters',  
        menu: [{
            text: 'America',
            xtype: 'menucheckitem',
            id:'A',
            checked   : true,
        }, {
            text: 'Asia',
            xtype: 'menucheckitem',
            id:'B',
            checked   : true,
        }, {
            text: 'Africa',
            xtype: 'menucheckitem',
            id:'C',
            checked   : true,
        }],
        textAlign: 'left',
        width: 150,
        style:'margin-bottom: 30px'
    }],

    features: [{ftype:'grouping' ,groupHeaderTpl:'Accounting Changes'}],


    columns: [
        { text: '<b>Region<b>',  dataIndex: 'region' ,locked: true, width:400},
        { text: 'Q1 2010', dataIndex: 'q12010',width:150},
        { text: 'Q2 2010', dataIndex: 'q22010',width:150},
        { text: 'Q3 2010', dataIndex: 'q32010',width:150},
        { text: 'Q4 2010', dataIndex: 'q42010',width:150},
        { text: 'Q1 2011', dataIndex: 'q12011',width:150},
        { text: 'Q2 2011', dataIndex: 'q22011',width:150},
        { text: 'Q3 2011', dataIndex: 'q32011',width:150},
        { text: 'Q4 2011', dataIndex: 'q42011',width:150},
    ],
    

});