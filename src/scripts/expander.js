/*
    EXPANDER - Last updated: 30.04.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Expander
//-----------------------------------------------------------------

$("[data-expander]").each(function(e){
    var $this = $(this);
    var hash = window.location.hash;
    var contentLabel = $this.attr('data-expander');
    var $content = $this.find("[data-expander-content='"+contentLabel+"']");

    // If the expanderContent isn't inside the element, check beside it
    if (!$content.length) {
        $content = $this.siblings("[data-expander-content='"+contentLabel+"']");
    }

    // If data matches hash link, open expander content
    if (contentLabel == hash.slice(1)) {
        expander($this, $content, contentLabel);
    }

    // Activate on click too
    $this.click(function(e){
        e.preventDefault();
        expander($this, $content, contentLabel);
    });
});

//==================================================
// Expander
//==================================================

function expander($expander, $content, contentLabel) {
    var arrow = $("i", $expander); // up down arrow

    // Prevent hash jumping
    // http://lea.verou.me/2011/05/change-url-hash-without-page-jump/

    if (history.replaceState) {
        history.replaceState(null, null, '#' + contentLabel);
    } else {
        window.location.hash = '#' + contentLabel;
    }

    $content.toggleClass('hide animated fadeIn');

    if (!arrow.length) arrow = $expander.siblings("i").first();

    arrow.toggleClass('fa-angle-down');
}

//==================================================
//
//==================================================