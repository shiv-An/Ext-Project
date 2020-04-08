Ext.define('MyBiz.view.main.Overview', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.overview',
    //controller: 'overviewcontroller',

    tbar: [
        '->',
        {
            text: 'CLICKS',
            handler: 'onPreview'
        },{
            text:'WON',
        },{
            text:'SALES'
        },{
            text:'GOALS MET'
        }
    ],

    items: [ 
         {
             width:500,
             height:500,
             store: {
                 type: 'overviewstore'
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
             type: 'area',
             xField: 'month',
             yField: [ 'data1', 'data2', 'data3', 'data4','other' ],
             style: { opacity: 0.80 },
     }],

 }],
   
});