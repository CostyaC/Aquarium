swimFish("#fish1Id");
swimFish("#fish2Id");
newBubble("#bubble1Id");
newBubble("#bubble2Id");
newBubble("#bubble3Id");

//Random movement of blue fish
$("#fish2Id").mouseenter(function(){
    $("#fish2Id").stop();
    
    var l = Math.floor(Math.random()*($(window).width() - $("#fish2Id").width()));
    var t = Math.floor(Math.random()*($(window).height() - $("#fish2Id").height()));
    
    $("#fish2Id").animate({left: l, top: t}, function(){
       swimFish("#fish2Id"); 
    });
});

//Double click increase the size of the orange fhish

$("#fish1Id").dblclick(function(){
     $("#fish1Id").stop();
   
    var itsWidth = $("#fish1Id").width();
    var itsHeight = $("#fish1Id").height();
    
    $("#fish1Id").animate({height: itsHeight*1.5, width: itsWidth*1.5}).delay(500).animate({height: itsHeight, width: itsWidth}, function(){ swimFish("#fish1Id");});
});

//Movement of orange fish on the click
$("*").click(function(event){
    var offset = $("#fish1Id").offset();
    
    if(event.pageX < offset.left || event.pageY < offset.top || event.pageX > offset.left + $("#fish1Id").width() ||
       event.pageY > offset.top +  $("#fish1Id").width())
        {
            // somewhere in the middle of the window
             if(event.pageX + $("#fish1Id").width() < $(window).width() && event.pageY + $("#fish1Id").height() < $(window).height()){
                        $("#fish1Id").stop();
                        $("#fish1Id").animate({left: event.pageX, top: event.pageY}, function(){
                            swimFish("#fish1Id");   
                        });
                    } 
                //on the right marghin 
            else if(event.pageX + $("#fish1Id").width() > $(window).width() && event.pageY + $("#fish1Id").height() < $(window).height())
                {
                    $("#fish1Id").stop();
                    $("#fish1Id").animate({left: $(window).width() - $("#fish1Id").width(), top: event.pageY}, function(){
                    swimFish("#fish1Id");
                });
                }
            // on the bottom margin
            else if(event.pageX + $("#fish1Id").width() < $(window).width() && event.pageY + $("#fish1Id").height() > $(window).height())
                    {
                        $("#fish1Id").stop();
                        $("#fish1Id").animate({left: event.pageX, top: $(window).height() - $("#fish1Id").height()}, function(){
                            swimFish("#fish1Id");
                        }); 
                    }
            // on the right bottom corner
            else if(event.pageX + $("#fish1Id").width() > $(window).width() && event.pageY + $("#fish1Id").height() > $(window).height())
                    {
                        $("#fish1Id").stop();
                        $("#fish1Id").animate({left: $(window).width() - $("#fish1Id").width(), top: $(window).height() - $("#fish1Id").height()}, function(){
                            swimFish("#fish1Id");
                        }); 
                    }
        }
});

// random movement of orange fish since there is no active action on it
function swimFish(idRef)
{
    var min = -20;
    var max = 20;
    
    var l = Math.floor(Math.random()*(max - min + 1) + min);
    var t = Math.floor(Math.random()*(max - min + 1) + min);

            $(idRef).animate({left: $(idRef).offset().left + l , top: $(idRef).offset().top + t}, function(){
                swimFish(idRef);
        });
}

//Bubbles part

// create a new bubble from the bottom
function newBubble(idRef)
{

    var point = Math.floor(Math.random()*($(window).width() - $(idRef).width())); // generate a random start horizontal point
    var delayRand = Math.floor(Math.random()*2000); // create a random delay between bubbles
    var speedRand = Math.floor(Math.random()*(300 - 100 + 1) + 100); // create a random speed
    
    $(idRef).css("top", $(window).height()); // set css selectors 
    $(idRef).css("left", point);
    
    $(idRef).delay(delayRand); // delay
    $(idRef).fadeIn();
    bubbleUp(idRef,speedRand); // start mobing up
}

// make the bubbles move up
function bubbleUp(idRef, speedRand)
{    
    var flag = 0;
    if($(idRef).offset().top < (-1)* $(idRef).height())
        {
            deleteBubble(idRef);
            flag = 1;
        }

        if(flag === 1)
            return;
    
    $(idRef).animate({top: "-=20"}, speedRand, 'linear', function(){
        bubbleUp(idRef, speedRand);
    });
}

function deleteBubble(idRef)
{
    $(idRef).stop().fadeOut('fast', function(){
          newBubble(idRef);
    });
}

// click on the bubble 1
$("#bubble1Id").click(function(){
    deleteBubble("#bubble1Id");
});
    

// click on the bubble 2
$("#bubble2Id").click(function(){
    deleteBubble("#bubble2Id");
});


// click on the bubble 3
$("#bubble3Id").click(function(){
    deleteBubble("#bubble3Id");
});


