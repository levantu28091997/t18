// Default JavaScript Functions and Initiations  

function listab(classname) { 
	$(classname + " .tab-title:not(:first)").addClass("tab-off");
	$(".tab-content:not(:first)").hide();
	    
	$(classname + " .tab-title").on('click', function() {
	    var t = $(this).data("tab-index");

	    if ($(this).hasClass("tab-off")) { 
        	//this is the start of our condition 
	        $(classname + " .tab-title").addClass("tab-off");           
	        $(this).removeClass("tab-off");
	    }

	    $(".tab-content").hide();    
	    $("#tab-content-"+ t).fadeIn('slow');
	});
};  

function scrollhide(classname) {
    // Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 1;
	var navbarHeight = $(classname).outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
		// If current position > last position AND scrolled past navbar...
		if (st >= lastScrollTop) {
		  // Scroll Down
		  $(classname).hide();
		} else {
			// Scroll Up
			// If did not scroll past the document (possible on mac)...
			if(st + $(window).height() < $(document).height()) { 
				$(classname).show();
			}
		}

	    lastScrollTop = st;  
	}
};

function scrollmenuside(classname) {
    // Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 1;
	var navbarHeight = $(classname).outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
		// If current position > last position AND scrolled past navbar...
		if (st >= lastScrollTop) {
		  // Scroll Down
		  $(classname).hide();
          $("#mainpart").removeClass("menuside");
        
		} else {
			// Scroll Up
			// If did not scroll past the document (possible on mac)...
			if(st + $(window).height() < $(document).height()) { 
				$(classname).show();
                $("#mainpart").addClass("menuside");
			}
		}

	    lastScrollTop = st;  
	}
}; 

function rdtoggle(classicon){
    $(classicon).click(function(){
        classaffect = $(this).data("affect");
        classold = $(".isMoved").data("affect");
        if($(this).hasClass("isMoved")){
            $(classaffect).hide();
        } else {
            $(classold).hide();
            $(".rd_sd-button_item").removeClass("isMoved");
            $(classaffect).show();
        }      
        $(this).toggleClass("isMoved");
    });       
};

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// Too lazy
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}