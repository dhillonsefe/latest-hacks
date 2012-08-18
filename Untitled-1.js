// JavaScript Document
$(document).ready(main);

function main() {
    $('iframe').attr('src', getIframeUrl());
    registerEvents();
    resizeIframe()
}
function getIframeUrl() {
    var url = window.location.href;
    var iframe_url = 'data:blog.pageName';
    var param_start = url.indexOf("iframe=");
    if (param_start != -1) iframe_url = url.substr(param_start + 7, url.length - param_start - 7);
    if (iframe_url.indexOf("http://") == -1) iframe_url = "http://" + iframe_url;
    return iframe_url
}
function registerEvents() {
    $(window).resize(function () {
        resizeIframe()
    });
    $("#back").bind("click", function () {
        window.history.back()
    });
    $("#arrow").bind("click", onArrow);
    $("#searchBtn").bind("click", onSearch);
    $("#close").bind("click", function () {
        window.location.href = $("iframe").attr("src")
    });
    $("#twitter").bind("click", function () {
        window.location.href = "http://twitter.com/?status=" + getIframeUrl() + " - "
    });
    $("#search").bind("keypress", function (e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            onSearch()
        }
    })
}
var arrawState = "up";

function onArrow() {
    if (arrawState == "up") onDownArrow();
    else onUpArrow()
}
function onDownArrow() {
    $("#toolbar").animate({
        height: 125
    }, 1000, "swing", function () {
        $("#arrow").css("background-position", "-32px 0");
        resizeIframe();
        arrawState = "down"
    })
}
function onUpArrow() {
    $("#toolbar").animate({
        height: 52
    }, 1000, "swing", function () {
        $("#arrow").css("background-position", "-16px 0");
        resizeIframe();
        arrawState = "up"
    })
}
function onSearch() {
    var qs = $("#qs").val();
    $('iframe').attr('src', 'http://www.google.com/search?q=' + qs)
}
function resizeIframe() {
    $("#iframe").height(WindowHeight() - getObjHeight(document.getElementById("toolbar")))
}
function WindowHeight() {
    var de = document.documentElement;
    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight
}
function getObjHeight(obj) {
    if (obj.offsetWidth) {
        return obj.offsetHeight
    }
    return obj.clientHeight
}