/*
    MAIN SCRIPTS - Last updated: 00-00-00
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

// window.onload = function(){
//     // NProgress.done();
// }

//-----------------------------------------------------------------
// Offcanvas Menu
//-----------------------------------------------------------------

$("#off-canvas-menu").mmenu({ "offCanvas": { "position": "right" }});

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

// var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    $('#off-canvas-menu').trigger('open.mm');
});

if (TOUCH_ENABLED) {
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    /*$(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });*/
}
//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

$(".js-expander").click(function(e){
    var $this = $(this);
    var $content = $this.siblings('.lv-expander-content');

    e.preventDefault();

    $content.toggleClass('hide animated fadeIn');
    $("i", $this).toggleClass('fa-angle-down');
});

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// Screen Data Tool
//-----------------------------------------------------------------

function screenData() {
    if ($('.lv-screen-data').length != 1) {
        $('.lv-super').append('<div class="lv-screen-data"></div>');
    }
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var device;

    if (screenWidth <= 640) device = "Small";
    if (screenWidth > 640 && screenWidth <= 1024) device = "Medium";
    if (screenWidth > 1024 && screenWidth <= 1280) device = "Large";
    if (screenWidth > 1280) device = "xLarge";

    $('.lv-screen-data').html(screenWidth+" x "+screenHeight+"<br>"+device)
        .css({
            'position': 'fixed',
            'top': 0,
            'padding': '10px 20px',
            'background': 'rgba(0,0,0,0.5)',
            'font-family': 'Helvetica Neue',
            'font-size': '14px',
            'color': 'white',
            'z-index': 9000
        });
}

screenData();

$(window).resize(function(){
    screenData();
});

//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================