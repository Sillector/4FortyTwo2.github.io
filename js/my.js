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




});