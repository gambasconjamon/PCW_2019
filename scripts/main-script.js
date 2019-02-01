// inspired from: http://www.cognitev.com/

$(document).ready(function(){
    
    
    function pointerFn(){

    var pointer = $('.pointer');
    var $centerArea
    var centerBoxPosition;
    var centerBoxTop;
    var centerBoxBottom;
    var centerBoxLeft;
    var centerBoxRight;
    var thisPosition;
    var $this;
    var delay;
    var xDistance;
    var yDistance;
    var color;
    function mouseenterCallback(){
        $centerArea = $('.member-info');
        centerBoxPosition = $centerArea.offset();
        centerBoxTop = centerBoxPosition.top;
        centerBoxBottom = centerBoxPosition.top + $centerArea.height();
        centerBoxLeft = centerBoxPosition.left;
        centerBoxRight = centerBoxPosition.left + $centerArea.width();

        pointer.find('.point-1, .point-2, .line').css('background-color', color)

        pointer.addClass('active');
        
        

        // get angle  deg
        var angleDeg = Math.atan2( ( centerBoxTop + ($centerArea.height() / 2) ) - ( thisPosition.top + ($this.height() /2) ), (centerBoxPosition.left + ($centerArea.width() /2)) - (thisPosition.left + ($this.width() /2))) * 180 / Math.PI;
        pointer.css('transform', 'rotate('+angleDeg+'deg)');
        
        
        
        if(Math.abs(angleDeg) > 135 && Math.abs(angleDeg) < 180 ){ // center box on left

            // pointer top position
            pointer.css('top', thisPosition.top + ($this.height()/2));
            // pointer left position
            pointer.css('left', thisPosition.left - 15 );
            
            xDistance = (centerBoxLeft + $centerArea.width() + 15 ) - (thisPosition.left - 15 );
            yDistance = (centerBoxTop + ($centerArea.height() / 2) ) - (thisPosition.top + ($this.height()/2) );

        }else if(angleDeg >= -45 && angleDeg <= 45 ){ // center box on right

            // pointer top position
            pointer.css('top', thisPosition.top + ($this.height()/2));
            // pointer left position
            pointer.css('left', thisPosition.left + $this.width() + 15 );
            
            xDistance = (centerBoxLeft -  15 ) - (thisPosition.left + $this.width() + 15 );
            yDistance = (centerBoxTop + ($centerArea.height() / 2) ) - (thisPosition.top + ($this.height()/2) );

        }else if(angleDeg < -45 && angleDeg >  -135){  // center box on top

            // pointer top position
            pointer.css('top', thisPosition.top - 15);
            // pointer left position
            pointer.css('left', thisPosition.left + ($this.width()/2));
            
            xDistance = (centerBoxLeft +  ($centerArea.width() / 2) ) - (thisPosition.left + ($this.width()/2));
            yDistance = (centerBoxTop + ($centerArea.height() + 15) ) - (thisPosition.top - 15 );

        }else if(angleDeg > 45 && angleDeg <  135 ){ // center box on bottom

            // pointer top position
            pointer.css('top', thisPosition.top + $this.height() + 15);
            // pointer left position
            pointer.css('left', thisPosition.left + ($this.width()/2));
            
            xDistance = (centerBoxLeft +  ($centerArea.width() / 2) ) - (thisPosition.left + ($this.width()/2));
            yDistance = (centerBoxTop - 15 ) - (thisPosition.top + $this.height() + 15 );

        }
        // get line distance
        pointer.width(Math.sqrt( (xDistance * xDistance) + (yDistance * yDistance) ) );
    }
    $('.team-member').mouseenter(function(){



        $this = $(this);
        thisPosition = $this.offset();
        color = $this.find('.hover-effect').css('background-color');
        color = color.split('');
        color[color.length - 4] = 1;
        color[color.length -2] = 0;
        color = color.join('');

        $('.center-area').find('.name').text($this.data('name'));
        $('.center-area').find('.job-title').text($this.data('job-title'));
        $('.center-area').addClass('active');

        delay = setTimeout(mouseenterCallback, 500);

    });
    $('.team-member').mouseleave(function(){

        pointer.removeClass('active');
        
        $('.center-area').removeClass('active');
        clearTimeout(delay);

    });
}pointerFn();
    
    function scrollEvent(){

            var teamList = $('.team-list');
            var centerBoxAreaLeft = $('.center-area .our-team').offset().left;
            var centerBoxAreaRight = centerBoxAreaLeft + $('.center-area .our-team').width();
            var translateX = $('.team-section').width();
            var membersPositionX = [];
            var circlesTopPosition = $('body').height()/2;
            var memberCircleHeight = teamList.find('.team-member').height();
            $('.team-member').each(function(){
                    membersPositionX.push($(this).position().left);
            });
            function teamTranslateX(value){

                    teamList.css({
                            'transform': 'translateX('+value+'px)',
                            '-webkit-transform': 'translateX('+value+'px)'
                    })
            }
            function memberTranslateY(selector, value){
                    var unit = value == 100 || value == -100? '%' : 'px' ;
                    selector.css({
                            'transform': 'translateY('+value+unit+')',
                            '-webkit-transform': 'translateY('+value+unit+')'
                    })
            }
            teamTranslateX(translateX);
            $('.team-section').on('mousewheel', function(event) {
                    // check mouse wheel direction
                    if(event.deltaY > 0){ // up (wheel up)

                            translateX = translateX > $('.team-section').width() ? $('.team-section').width() : translateX + 50;
                            // check positions
                            circlesMove();

                    }else{ // down (wheel down)
                            translateX = translateX < -($('.team-section').width()) ? -($('.team-section').width()) : translateX - 50;
                            // check positions
                            circlesMove();
                    }

                    teamTranslateX(translateX);
            });





            function circlesMove(){ // up (wheel down)
                    var beforeEnter = $('body').width() - translateX;
                    var afterLeave = translateX - centerBoxAreaLeft;
                    var spaceBeforeCenter = $('body').width() - centerBoxAreaRight;
                    var move;
                    $.each(membersPositionX, function(index, item){
                            if(beforeEnter >= item){
                                    move = ((beforeEnter-item) / spaceBeforeCenter) <= 1? ((beforeEnter-item) / spaceBeforeCenter) : 1;
                                    move = (move * circlesTopPosition) - memberCircleHeight;
                                    memberTranslateY(teamList.find('.team-member').eq(index), index%2 == 0?  -( move >= memberCircleHeight? move : memberCircleHeight ) : ( move >= memberCircleHeight? move : memberCircleHeight) );
                            }
                            if(afterLeave < 0 && Math.abs(afterLeave) >= item){
                                    move = ((Math.abs(afterLeave)-item) / spaceBeforeCenter) <= 1? ((Math.abs(afterLeave)-item) / spaceBeforeCenter) : 1;
                                    move = ((1- move) * circlesTopPosition) - memberCircleHeight;
                                    memberTranslateY(teamList.find('.team-member').eq(index), index%2 == 0?  -( move >= memberCircleHeight? move : memberCircleHeight ) : ( move >= memberCircleHeight? move : memberCircleHeight) );

                            }
                    });

            }
        
        // prevent body scroll when scroll on this section && continue scroll after finish the section scroll
        $('.team-section').on('mousewheel DOMMouseScroll', function(e) {
        var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
        dir = d > 0 ? 'up' : 'down',
        stop = (dir == 'up' && translateX <= $('.team-section').width()) || (dir == 'down' && translateX >= -($('.team-section').width()));
        stop && e.preventDefault();
    });

    }scrollEvent();
});