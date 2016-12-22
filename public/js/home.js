//test if mobile device
isMobile = function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
       .test(navigator.userAgent) ) {
        return true;
    }

    return false;
}


/*
Focus on the position of marker accordily scroll direction
*/
function focusMarkerPosition(direction , elName){

    var value = (direction === 'horizontal') ? 
        $(window).width() : $(window).height();

    if(direction === 'horizontal'){
        $('.scrollable-menu')
                .css('cssText', 'overflow-x: scroll !important');
        $('.scrollable-menu')
                .css('cssText', 'overflow-y: hidden !important');
    } else {
        $('.scrollable-menu')
                .css('cssText', 'overflow-x: hidden !important');
        $('.scrollable-menu')
                .css('cssText', 'overflow-y: scroll !important');
    }

    var axis = (direction === 'horizontal') ? 'x' : 'y';

    //.start, .telephone, .wifi, .oiplay, .recharge, .help
    if(elName.indexOf('start') !== -1 || elName.indexOf('help') !== -1){
        $('.scrollable-menu').scrollTo('.' + elName , 300 , {axis : axis});
    }
    else if(elName.indexOf('telephone') !== -1){
        $('.scrollable-menu').scrollTo(value/7, 300 , {axis : axis});
    }
    else if(elName.indexOf('wifi') !== -1){
        $('.scrollable-menu').scrollTo(value/4, 300 , {axis : axis});
    }
    else if(elName.indexOf('oiplay') !== -1){
        $('.scrollable-menu').scrollTo(value/3, 300 , {axis : axis});
    }
    else if(elName.indexOf('recharge') !== -1){
        $('.scrollable-menu').scrollTo(value, 300 , {axis : axis});
    }

}

//get a index of element based on your classList
function getIndex(el){
    if(el.hasClass('start')){
        return 0
    }
    else if(el.hasClass('telephone')){
        return 1
    }
    else if(el.hasClass('wifi')){
        return 2
    }
    else if(el.hasClass('oiplay')){
        return 3
    }
    else if(el.hasClass('recharge')){
        return 4
    }
    else if(el.hasClass('help')){
        return 5
    }
}

//get string to query on selected item to swipe
//'.start' , '.telephone' , '.wifi' , '.oiplay' , '.recharge', '.help'
function getStringQueryToSwipe(){
    return '#fullpage > .start,' +
            '#fullpage > .telephone,' +
            '#fullpage > .wifi,' +
            '#fullpage > .oiplay,' +
            '#fullpage > .recharge,' +
            '#fullpage > .help';
}

/* change the position of marker */
var changeMarkerPosition = function(direction , elName){
    var el = $('li.' + elName)
    var position = $(el).position()

    if(position){

        //unselect all li
        $('.section-menu')
            .children('li')
            .removeClass('active');

        //set this el as active
        $('.section-menu')
            .children('li.' + elName)
            .addClass('active');

        $('#fullpage >.section').removeClass('active');
        setActive($('ul > .section > li.' +  elName ));
        setActive($('#fullpage >.section.' + elName));


        //horizontal scroll
        if(direction === 'horizontal'){
            $('.selected')
                .stop()
                .animate({
                    left: position.left
                } 
            , 100)  
        } 
        else { //vertical scroll
            $('.selected')
                .stop()
                .animate({
                    top: position.top
                } 
            , 100)
        }
    }
}

//search inside path per the correct target
//path is a array of node elements
findInsidePath = function(path){
    return $(path).find('.section.active');
}

removeActive = function(path){
    $(path).find('.section.active').removeClass('active');
}

setActive = function(el){
    $(el).addClass('active');
}

/* drag and move events, uses a polyfill */
function moveAndDragPage(){
    if(isMobile()){
        console.log(`is mobile, so append event`);
    }

    var xDown = null;                                                        
    var yDown = null;

    //get the screensize
    var containerWidth = $(window).width();


    //the element class list
    var elementList = ['.start' , '.telephone' , '.wifi' , '.oiplay' , '.recharge', '.help' ]


    /* test swipe event in android and other mobile devices */
    $(getStringQueryToSwipe()).on('touchstart', function(evt){
        xDown = evt.originalEvent.touches[0].pageX;                                    
        yDown = evt.originalEvent.touches[0].pageY;
    })  


    document.addEventListener('touchmove', function(evt){
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                /* left swipe */

                if(containerWidth < 768){
                    //get target index
                    var index = getIndex(findInsidePath($(evt.path)))

                    //scroll to next target
                    if(index < 5){
                        var nextEl = elementList[index + 1];
                        $("#fullpage").stop().scrollTo(nextEl , 300)

                        focusMarkerPosition('horizontal' , nextEl.substring(1))
                        changeMarkerPosition('horizontal' , nextEl.substring(1))
                        removeActive($(evt.path));
                        setActive($('.section.' +  nextEl.substring(1)));
                        setActive($('ul > .section > li.' +  nextEl.substring(1)));
                    }
                }
            } else {
                /* right swipe */

                if(containerWidth < 768){
                    //get target index
                    var index = getIndex(findInsidePath($(evt.path)))

                    //scroll to next target
                    if(index > 0){
                        var nextEl = elementList[index - 1];
                        $("#fullpage").stop().scrollTo(nextEl , 300)

                        focusMarkerPosition('horizontal' , nextEl.substring(1))
                        changeMarkerPosition('horizontal' , nextEl.substring(1))
                        removeActive($(evt.path));
                        setActive($('.section.' +  nextEl.substring(1)));
                        setActive($('ul > .section > li.' +  nextEl.substring(1)));
                    }
                }
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null; 
    }, false);                                   
    /* end test */

}

//move to current path after redraw or reload page
moveToCurrentPath = function(){
     //get the current location
    var path = $(location).attr('href') , orientation = '';

    //remove active class
    removeActive(document);

    //get the direction
    var containerWidth = $(window).width();

    //On mobile there is no path, return
    if(containerWidth < 768) {
        console.log('skip');
        setActive($('#fullpage > .start'));
        return;
    }

    if(containerWidth > 768){
        orientation = 'vertical'
    }
    else {
        orientation = 'horizontal'
    }

    var moveTo = function(name , orientation ){
        setActive($('#fullpage > .' + name));
        focusMarkerPosition(orientation , name)
        changeMarkerPosition(orientation , name)
        if(orientation == 'horizontal') {
            setTimeout(function(){
                $('#fullpage').stop().scrollTo('.' + name, 100 , {axis : 'x'} )
            } , 100)
        }
    }

    //.start, .telephone, .wifi, .oiplay, .recharge, .help
    if(path.indexOf('#start') !== -1){
        moveTo ('start' , orientation );
    }
    else if(path.indexOf('#telephone') !== -1){
        moveTo(orientation , 'telephone');
    }
    else if(path.indexOf('#wifi') !== -1){
         moveTo('wifi',orientation);
    }
    else if(path.indexOf('#oiplay') !== -1){
       moveTo('oiplay' ,orientation);
    }
    else if(path.indexOf('#recharge') !== -1){
        moveTo('recharge' ,orientation);
    }
    else if(path.indexOf('#help') !== -1 ){
        moveTo('help' ,orientation);
    }
    else { //the path is default page
        moveTo('start' ,orientation);
    }
}


//NOTE: bind mobile event in page load
$(document).on('pageinit', function(event){

    console.log('bind event on mobile device');

    //bind swipe event
    moveAndDragPage()
});


//initial animation on enter this page
var animationOnStart = function(){
    setTimeout(function(){

        $('.section-menu').css('opacity', 0)
        $('.section-menu').removeClass('hide')

        $('.section-menu').stop().animate(
            {
                opacity: 1
            },
            700,
            '',
            function(){
                //after complete, here load the pre-home content
                $('.content-home').removeClass('hide')
                $('.content-home').css('opacity' , 0)
                $('.content-home').stop().animate({
                    opacity: 1
                } , 800 , '', function(){

                })

            }
        )
    } , 100)
}

//create any animation on start page
function animatePage(path){
    var positive = path.indexOf('#positive') !== -1 ? true : false,
        barAnimation = path.indexOf('#baranimation') !== -1 ? true : false;

    var width = $(window).width();


    //animation from cpf page
    if(positive){
        $('.sidebar').removeClass('sidebar_animation')
        $('.scrollable-menu').removeClass('sidebar-menu-animation');

        //has animation if screen is below 768
        if(width > 767){
            console.log('positive animation');
            animationOnStart();
        } else {
             $('.section-menu').removeClass('hide')
             $('.content-home').removeClass('hide')
        }
    }
    //animation from confirmation page
    else if(barAnimation){

        console.log('barAnimation animation');
        $('.section-menu').removeClass('hide')
        $('.content-home').removeClass('hide')

        if(width > 767){ //desktop and mobile tablet load
            $('#fullpage').css('width','85vw');
            //$('.sidebar-home').addClass('animate_bar')
            setTimeout(function(){
                $('#fullpage')
                    .animate(
                        {
                            left: '16.666vw',
                            width: '70vw'
                        } 
                        , 700 , '' , function(){
                            //$('.scrollable-menu').css('z-index','4000');
                            $('.scrollable-menu').addClass('scrollbar_z_index');
                        }
                )
            } , 700)
        } else { //mobile small device
            $('.sidebar').removeClass('sidebar_animation')
            $('.scrollable-menu').removeClass('sidebar-menu-animation');

            //disabling scrolling
            console.log('disable scrolling and others');
            $('#fullpage >.section').removeClass('active');
            setActive($('ul > .section > li.start'));
            setActive($('#fullpage >.section.start'));
            if($.fn.fullpage) $.fn.fullpage.setAllowScrolling(false);
            $('#fullpage').stop().scrollTo('.start' , 300 , {axis : 'x'} );

            $('#fullpage').css('height','calc(100vh - 70px)');
            $('#fullpage').css('position','absolute');
            $('#fullpage').css('top','-70px');

            setTimeout(function(){
                $('#fullpage')
                    .animate(
                        {
                            top: '0px',
                            height: 'calc(100vh - 142px)'
                        } 
                        , 700 , '' , function(){
                            //$('.scrollable-menu').css('z-index','1000');
                        }
                )
            } , 700)
        }

    }

    //common load page
    else {
        $('.sidebar').removeClass('sidebar_animation')
        $('.scrollable-menu').removeClass('sidebar-menu-animation');
        $('.section-menu').removeClass('hide')
        $('.content-home').removeClass('hide')

        //setup the fullpage height
        $('#fullpage').css('height','calc(100vh - 70px)');
    }
}


$(document).ready(function(){

    //get the current path
    var path = $(location).attr('href')


    //window.getSelection().removeAllRanges(); 

    //$.event.special.swipe.durationThreshold = 100;

    //change arrow
    $('.collapse').on('shown.bs.collapse', 
        function(){
            $(this).parent()
                .find(".img_container_help")
                .removeClass("img_container_help")
                .addClass("img_container_help_down");
        })
        .on('hidden.bs.collapse', function(){
            $(this).parent()
                .find(".img_container_help_down")
                .removeClass("img_container_help_down")
                .addClass("img_container_help");
        });

    curDown = false,
    curYPos = 0,
    curXPos = 0;

    //start swipe events
    //moveAndDragPage()

    //move to current path after reload page
    moveToCurrentPath()


    //starts fullpage plugin
    $('#fullpage').fullpage({
        anchors:
            ['start', 
             'telephone', 
             'wifi',
             'oiplay', 
             'recharge', 
             'help'],
        verticalCentered : true,
        normalScrollElements: '.menu-item, .help, .help > .fp-tableCell' , //exclude itens
        bigSectionsDestination : '#fullpage',
        onLeave: function(index, nextIndex, direction){

            var anchorLink = "";

            var items = ['start', 'telephone', 'wifi', 'oiplay', 'recharge', 'help'];

            anchorLink = items[parseInt(nextIndex) - 1];

            var containerWidth = $(window).width();


            //small screens
            //changed to 768, before 1200
            if(containerWidth < 768){
                //FIX: the main error is change the mark down on start any path to the end path
                //Ex: initial page is #start, but the markdown move to #help
                //changeMarkerPosition('horizontal' , anchorLink)
                //focusMarkerPosition('horizontal' , anchorLink);


            } else {
                changeMarkerPosition('vertical' , anchorLink);
                focusMarkerPosition('vertical' , anchorLink);

            }
        },
        //add after load event
        //using anchorLink to scroll to new position
        afterLoad: function(anchorLink, index){

            /*var containerWidth = $(window).width();


            //small screens
            //changed to 768, before 1200
            if(containerWidth < 768){
                //FIX: the main error is change the mark down on start any path to the end path
                //Ex: initial page is #start, but the markdown move to #help
                //changeMarkerPosition('horizontal' , anchorLink)
                //focusMarkerPosition('horizontal' , anchorLink);


            } else {
                changeMarkerPosition('vertical' , anchorLink);
                focusMarkerPosition('vertical' , anchorLink);

            }*/

        }
    });


    /*var hasAnimation = false;
    if(hasAnimation){
         animationOnStart();
    }
    else {
        $('.section-menu').removeClass('hide')
        $('.content-home').removeClass('hide')
    }*/

   animatePage(path);


    containerWidth = $(window).width();

    if(containerWidth < 768){
        //disable auto scroll on mobile device
        $.fn.fullpage.setAutoScrolling(false);
        $('#fullpage').css('height','calc(100vh - 70px)');
    } else {
        //enable auto scroll on desktop device
        $.fn.fullpage.setAutoScrolling(true);
        $('#fullpage').css('height','100%');
    }

    $(window).resize(function(){

        //try clear any animation;
        $(window).clearQueue().finish();

        //


        //current size of window
        var containerWidth = $(window).width();


        //move to current path after resizea or reload page stop
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            //console.log('Resized finished.');

            location.reload();

            moveToCurrentPath()
        }, 250);



        //change the position of the element "selected"
        $('.selected')
            .css({position : 'absolute'})

        //changed to 768, before is 1200
        if(containerWidth < 768){

            //disable auto scroll on mobile device
            $.fn.fullpage.setAutoScrolling(false);

            $('#fullpage').css('height','calc(100vh - 70px)');

            $('.active').ready(function(){
                var el = $('.active')

                if(el && $(el).position()){
                    var left = $(el).position().left


                    $('.selected').css({
                        left: left
                    });
                }
            })
        } else {

            //enable auto scroll on desktop device
            $.fn.fullpage.setAutoScrolling(true);

            $('#fullpage').css('height','100%');

            $('.active').ready(function(){
                var el = $('.active')

                if(el && $(el).position()){
                    var top = $(el).position().top


                    $('.selected')
                        .css('cssText', 'left: calc(100% - 6px) !important');

                    $('.selected').css({
                        top: top,
                        left: '100%'
                    });
                }
            })
        }

    });

    $('.section-menu').children('li').each(function(index, el){

        //bind click
        $(el).click(function(event){

            event.preventDefault();

            var name = this.className;
            var self = this , containerWidth;

            containerWidth = $(window).width();



            //windows size
            var el = $('#fullpage >.section.' + name);

            //if containerWidth > 1200 scroll is vertical, otherwise, is horizontal
            //changed to 768, before is 1200
            if(containerWidth >= 768){

                //move to selected page
                $.fn.fullpage.moveTo(name);

                /* change position of marker */
                changeMarkerPosition('vertical' , name);

                /* change position scroll  */
                focusMarkerPosition('vertical' , name);

                event.preventDefault();
            } else { 

                //change position of selected
                $('.selected').css({position : 'absolute'})


                //NOTE: The fullpage.js dont work in horizontal navigation drag and move
                //scroll to element on page 
                $('#fullpage').stop().scrollTo('.' + name , 300 , {axis : 'x'} );


                /* change position of marker */
                changeMarkerPosition('horizontal' , name);

                /* change position scroll  */
                focusMarkerPosition('horizontal' , name);


                event.preventDefault();
            }

            return false; //prevent default
        })
    })

    //NOTE: stop scroll propagation
    $('#fullpage').scroll(function(event){
        //try fix scroll on menu
        event.stopPropagation();
        event.preventDefault();
    })

    $('.scrollable-menu').scroll(function(event){
        event.stopPropagation();
        event.preventDefault();


    })

})  //end jquery ready method