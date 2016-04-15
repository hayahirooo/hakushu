$(function(){
	var setImg = '#in';
	var fadeSpeed = 2500;
	var switchDelay = 5000;

	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
});


$(function(){
    var target = $(".siderelative");
    var footer = $("footer")
    var targetHeight = target.outerHeight(true);
    var targetTop = target.offset().top 50;
 
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > targetTop){
            
            var footerTop = footer.offset().top 300;
             
            if(scrollTop + targetHeight > footerTop){
                customTopPosition = footerTop - (scrollTop + targetHeight)
                target.css({position: "fixed", top:  customTopPosition + "px"});
            }else{
                target.css({position: "fixed", top: "10px"});
            }
        }else{
            target.css({position: "static", top: "auto"});
        }
    });
});
