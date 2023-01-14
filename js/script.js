$(function(){
    // NAV
    $(".nav").mouseenter(function(){
        $(".subnav").stop().slideDown(150);
    });
    $(".nav").mouseleave(function(){
        $(".subnav").stop().slideUp(150);
    });

    // SLIDE
    setInterval(function(){
        $(".slide-group").animate({"top":"-100%"}, function(){
            $(".slide:first").appendTo(".slide-group");
            $(".slide-group").css({"top":"0%"});
        })
    }, 3000);

    // TABS
    $(".gallery").click(function(){
        $(this).addClass("active");
        $(".notice").removeClass("active");
        $(".notice>ul").fadeOut(200);
        $(".gallery>ul").fadeIn(200);
    });
    $(".notice").click(function(){
        $(this).addClass("active");
        $(".gallery").removeClass("active");
        $(".gallery>ul").fadeOut(200);
        $(".notice>ul").fadeIn(200);
    })

    // ICONS
    $(".icon").mouseenter(function(){
        $(this).children("a:first").stop().fadeIn(100);
        $(this).children("a:last").stop().fadeOut(100);
    });
    $(".icon").mouseleave(function(){
        $(this).children("a:last").stop().fadeIn(100);
        $(this).children("a:first").stop().fadeOut(100);
    });

    // POPUP
    $(".notice>ul>li:first").click(function(){
        $("#popup").stop().fadeIn(200);
    })
    $(".btn").click(function(){
        $("#popup").stop().fadeOut(200);        
    })
});