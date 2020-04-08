Ext.define('MyBiz.view.main.Performance', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.performance',
    controller: 'performancecontroller',

    layout: 'card',

    bbar: ['->',
    {
        text: 'Download',
        scale: 'medium',
        handler:'download',
        iconCls: 'fas fa-file-download'
    }
],

    items: [
       {
            id: 'card',
           html:'Simple Download demo'            
        }, 
        {
            width:500,
            height:500,
            store: {
                type: 'performancestore'
            },
    axes: [{
            type: 'numeric',
            fields: 'data1',
            position: 'right',
            grid: true,
            minimum: 0,
        }, {
            type: 'category',
            fields: 'month',
            position: 'bottom',
            grid: true,
        }],
        series: [{
            type: 'candlestick',
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4','other' ],
            style: {
                opacity: 0.80
            },
    }],
    }],
   


});


