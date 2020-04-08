Ext.define('MyBiz.store.PerformanceStore', {
    extend: 'Ext.data.Store',
    alias: 'store.performancestore',

    fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],

    data = [
        { month: 'May 2010', data1: 20, data2: 37, data3: 35, data4: 4, other: 4 },
        { month: 'September 2010', data1: 20, data2: 37, data3: 36, data4: 5, other: 2 },
        { month: 'Febrauary 2011', data1: 19, data2: 36, data3: 37, data4: 4, other: 4 },
        { month: 'June 2011', data1: 18, data2: 36, data3: 38, data4: 5, other: 3 },
        { month: 'October 2011', data1: 18, data2: 35, data3: 39, data4: 4, other: 4 },
        { month: 'March 2012', data1: 17, data2: 34, data3: 42, data4: 4, other: 3 },
        { month: 'July 2012', data1: 16, data2: 34, data3: 43, data4: 4, other: 3 },
        { month: 'November 2012', data1: 16, data2: 33, data3: 44, data4: 4, other: 3 },
        { month: 'March 2013', data1: 16, data2: 32, data3: 44, data4: 4, other: 4 },
        { month: 'July 2013', data1: 16, data2: 32, data3: 45, data4: 4, other: 3 },
        { month: 'November 2013', data1: 15, data2: 31, data3: 46, data4: 4, other: 4 },
        { month: 'March 2014', data1: 15, data2: 31, data3: 47, data4: 4, other: 3 }
    ],
    proxy:{
        type:'memory',
        reader:{
            type:'json',
            rootProperty: 'data'
        }
    }

});