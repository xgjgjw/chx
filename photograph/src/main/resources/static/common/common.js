/**
 * 引用JS和CSS头文件
 */
var rootPath = getRootPath(); // 项目路径

/**
 * 动态加载CSS和JS文件
 */
var dynamicLoading = {
    meta : function(){
        document.write('<meta charset="utf-8" />');
        document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
        document.write('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
    },
    css: function(path){
        if(!path || path.length === 0){
            throw new Error('argument "path" is required!');
        }
        document.write('<link rel="stylesheet" type="text/css" href="' + path + '">');
        
    },
    js: function(path, charset){
        if(!path || path.length === 0){
            throw new Error('argument "path" is required!');
        }
        document.write('<script charset="' + (charset ? charset : "utf-8") + '" src="' + path + '"></script>');
    }
};

/**
 * 取得项目路径
 * 
 * @author wul
 */
function getRootPath() {
    // 取得当前URL
    var path = window.document.location.href;
    // 取得主机地址后的目录
    var pathName = window.document.location.pathname;
    var post = path.indexOf(pathName);
    // 取得主机地址
    var hostPath = path.substring(0, post);
    // 取得项目名
    var name = pathName.substring(0, pathName.substr(1).indexOf("/") + 1);
    return hostPath + name + "/";
}

// 动态生成meta
dynamicLoading.meta();

// 动态加载项目 JS文件
dynamicLoading.js("Bootstrap/jquery-1.9.1.min.js", "utf-8");
dynamicLoading.js("Bootstrap/bootstrap/js/bootstrap.min.js", "utf-8");
dynamicLoading.js("Bootstrap/sidebar-menu/sidebar-menu.js", "utf-8");
dynamicLoading.js("Bootstrap/bootstrap/js/bootstrap-tab.js", "utf-8");
dynamicLoading.js("angular/angular.min.js", "utf-8");
dynamicLoading.js("layui/layui.all.js", "utf-8");
dynamicLoading.js("common/jquery.cookie.js", "utf-8");
dynamicLoading.js("common/angular-route.js", "utf-8");
dynamicLoading.js("common/jquery.lazyload.js", "utf-8");
// 动态加载项目 CSS文件
//Bootstrap
dynamicLoading.css("Bootstrap/bootstrap/css/bootstrap.min.css");
//Font Awesome
dynamicLoading.css("Bootstrap/font-awesome/css/font-awesome.min.css");
dynamicLoading.css("Bootstrap/sidebar-menu/sidebar-menu.css");
dynamicLoading.css("Bootstrap/ace/css/ace-rtl.min.css");
dynamicLoading.css("Bootstrap/ace/css/ace-skins.min.css");
dynamicLoading.css("Bootstrap/toastr/toastr.min.css");
dynamicLoading.css("layui/css/layui.css");
/*$(function(){
    $(".container").append('<div id="header"></div>');
    $("#header").load(getRootPath() + "header.html");
});*/