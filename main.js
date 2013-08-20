/**
 * Created with JetBrains WebStorm.
 * User: badx
 * Date: 13-8-19
 * Time: 下午2:16
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths:{
        jquery: 'jquery-1.7.2'
    }
});


require(['jquery'],function($){
    alert($().jquery);
})