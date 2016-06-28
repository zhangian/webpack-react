'use strict';

var path=require('path');
var webpack=require('webpack');

module.exports={
    entry:path.resolve(__dirname__, './app/app.js'),
    output:{
        path:path.resolve(__dirname__, './build'),
        filename:'build.js'
    },

    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel',
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
}
