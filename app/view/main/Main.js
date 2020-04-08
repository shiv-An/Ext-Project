/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyBiz.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyBiz.view.main.MainController',
        'MyBiz.view.main.MainModel',
        'MyBiz.view.main.List',
        'MyBiz.view.main.ProfitLoss',
        'MyBiz.view.main.ProfitLossController',
        'MyBiz.store.ProfitLossStore',
        'MyBiz.view.main.Performance',
        'MyBiz.view.main.PerformanceController',
        'MyBiz.view.main.Overview',
        'MyBiz.store.OverviewStore',


    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fas fa-chart-bar'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'KPI Overview',
        iconCls: 'fas fa-desktop',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'overview'
        }]
    }, {
        title: 'Performance',
        iconCls: 'fas fa-download',
        items:[
            {  xtype:'performance'}
        ]
    }, {
        title: 'Profit & Loss',
        iconCls: 'fas fa-search-dollar',
        items:[
            {  xtype:'profitloss'}
        ]
    }, {
        title: 'Company News',
        iconCls: 'fas fa-newspaper',
        items:[
            {  xtype:'companynews'}
        ]
    }]
});
