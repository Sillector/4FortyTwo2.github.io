$(document).ready(function(){
var ck = false;
$("li.shop").click(function(){
if(ck==false)
{
$(this).addClass('active');
$(".topmenu_wrap").slideDown();;
ck = true;
}
else
{
$(this).removeClass('active');
$(".topmenu_wrap").slideUp();
ck = false;
}
});
 $(".page_s").show();
 $(".page_s a:first").addClass("active");
var imageW = $(".slides").width();
var imageS = $(".slides_reel img").size();
var imageRW = imageW * imageS;
$(".slides_reel").css({'width':imageRW});
rotate = function(){
	var triggerID = $active.attr("rel") - 1;
	var image_reelP = triggerID * imageW;
	
	$(".page_s a").removeClass('active'); 
	$active.addClass("active"); 
	
	$(".slides_reel").animate({
		left: -image_reelP
		}, 500);
};
rotateSwitch = function(){
    play = setInterval(function(){ 
        $active = $('.page_s a.active').next(); 
        if ( $active.length === 0) {
            $active = $('.page_s a:first'); 
        }
        rotate(); 
    }, 7000); 
};


rotateSwitch();



var a = $(".slides_reel").width()/$(".slides_reel a").size();
$(".slides img").width(a);
$(".main_slides").height($(".slides_reel").height());

});