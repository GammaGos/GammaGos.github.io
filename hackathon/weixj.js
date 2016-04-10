$(function(){
    /*swiper*/
    ;(function(){


        var reqAnimationFrame = (function() {
             return window[Hammer.prefixed(window, "requestAnimationFrame")] || function(callback) {
                 setTimeout(callback, 1000 / 60);
             }
         })();

         function dirProp(direction, hProp, vProp) {
             return (direction & Hammer.DIRECTION_HORIZONTAL) ? hProp : vProp
         }


         /**
          * Carousel
          * @param container
          * @param direction
          * @constructor
          */
         function HammerCarousel(container, direction) {
             this.container = container;
             this.direction = direction;

             this.panes = Array.prototype.slice.call(this.container.children, 0);
            //  this.containerSize = this.container[dirProp(direction, 'offsetWidth', 'offsetHeight')];
             this.containerSize = 212;//
             this.currentIndex = 0;

             this.hammer = new Hammer.Manager(this.container);
             this.hammer.add(new Hammer.Pan({ direction: this.direction, threshold: 10 }));
             this.hammer.on("panstart panmove panend pancancel", Hammer.bindFn(this.onPan, this));

             this.show(this.currentIndex);
         }


         HammerCarousel.prototype = {
             /**
              * show a pane
              * @param {Number} showIndex
              * @param {Number} [percent] percentage visible
              * @param {Boolean} [animate]
              */
             show: function(showIndex, percent, animate){
                 showIndex = Math.max(0, Math.min(showIndex, this.panes.length - 1));
                 percent = percent || 0;

                 var className = this.container.className;
                 if(animate) {
                     if(className.indexOf('animate') === -1) {
                         this.container.className += ' animate';
                     }
                 } else {
                     if(className.indexOf('animate') !== -1) {
                         this.container.className = className.replace('animate', '').trim();
                     }
                 }

                 var paneIndex, pos, translate;
                 for (paneIndex = 0; paneIndex < this.panes.length; paneIndex++) {
                     pos = (this.containerSize / 100) * (((paneIndex - showIndex) * 100) + percent);


                     if(this.direction & Hammer.DIRECTION_HORIZONTAL) {
                         translate = 'translate3d(' + pos + 'px, 0, 0)';
                     } else {
                        //  translate = 'translate3d(0, ' + pos + 'px, 0)'

                         translate ='translate3d(0, ' + (pos-200) + 'px, 0) scale('+((paneIndex==(showIndex+1))?1:0.9)+')'
                     }

                      this.panes[paneIndex].style.transform = translate;
                      this.panes[paneIndex].style.mozTransform = translate;
                      this.panes[paneIndex].style.webkitTransform = translate;
                 }

                 this.currentIndex = showIndex;
             },

             /**
              * handle pan
              * @param {Object} ev
              */
             onPan : function (ev) {
                 var delta = dirProp(this.direction, ev.deltaX, ev.deltaY);
                 var percent = (100 / this.containerSize) * delta;
                 var animate = false;

                 if (ev.type == 'panend' || ev.type == 'pancancel') {
                     if (Math.abs(percent) > 20 && ev.type == 'panend') {
                         this.currentIndex += (percent < 0) ? 1 : -1;
                     }
                     percent = 0;
                     animate = true;
                 }

                 this.show(this.currentIndex, percent, animate);
             }
         };

        //  // the horizontal pane scroller
        //  var outer = new HammerCarousel(maskshow, Hammer.DIRECTION_HORIZONTAL);
        window.addmaskshow = function (el){
            var $maskshow = $(el);
            var maskshow = $maskshow[0];
            var ms = new Hammer(maskshow);
            window.ms = ms;
            var outer;
            $(maskshow).click(function(e){

                var target = e.target;
                var iscontains = false;
                if(!$maskshow.hasClass('on')) return true;
                $maskshow.find('.hotels').each(function(){
                    if($.contains($(this)[0],target)||($(this)[0]==target)){
                            iscontains = true;
                        return true;
                    }
                })

                if(!iscontains){

                    outer.hammer.destroy();
                    $maskshow.removeClass('on');
                    $maskshow.removeClass('animate')
                    $maskshow.attr('style','')
                    $maskshow.css("height",$maskshow.parent().find('.token').css("height"))
                    $maskshow.parent().find('.token').hide();

                    $maskshow.find('.hotels').each(function(){

                        $(this).attr("style","");
                    })

                }else{


                }
            })

            ms.on("panleft panright tap press", function(ev) {
                console.log(11111);
                var type = ev.type;
                switch (type) {
                    case "press":

                        if($maskshow.hasClass('on')){

                        }else{
                            $maskshow.addClass('on');
                            $maskshow.parent().find('.token').css("height",$maskshow.css("height")).show();
                            $maskshow.attr('style','')
                            outer = new HammerCarousel(maskshow, Hammer.DIRECTION_VERTICAL);
                        }
                        break;

                    default:

                        break;
                }
                window.__maskshow = $maskshow[0];
            });

            $maskshow.on('click','.tag-fav',function(){
                var $this = $(this);
                var text = $this.text()*1;
                 $this.text(text+1)

            })

            $maskshow.on('click','i',function(){
                var $this = $(this);
                if($this.hasClass("tag-fav"))return;
                //outer.hammer.destroy();
                $maskshow.removeClass('on');
                $maskshow.removeClass('animate')
                $maskshow.attr('style','')
                $maskshow.css("height",$maskshow.parent().find('.token').css("height"))
                $maskshow.parent().find('.token').hide();

                $maskshow.find('.hotels').each(function(){

                    $(this).attr("style","");
                })

                $('#fly-layer').html(
                ['<div class="main-frame" data-reactid=".0.0.0"><div class="main-viewport" data-reactid=".0.0.0.0"><div style="height:40px;" data-reactid=".0.0.0.0.0"><div class="cm-header" data-reactid=".0.0.0.0.0.0"><h1 class="cm-page-title js_title" data-reactid=".0.0.0.0.0.0.0">选择酒店</h1><span class="cm-header-icon icon_share i_close" data-reactid=".0.0.0.0.0.0.1"></span></div></div><div data-reactid=".0.0.0.0.1"><div class="search-tool " data-reactid=".0.0.0.0.1.0"><div class="flight-cell search-dapart" data-reactid=".0.0.0.0.1.0.0:$s0"><span data-reactid=".0.0.0.0.1.0.0:$s0.0">入住</span><input placeholder="yyyy-mm-dd" data-reactid=".0.0.0.0.1.0.0:$s0.1"></div><div class="flight-cell search-dest" data-reactid=".0.0.0.0.1.0.0:$s1"><span data-reactid=".0.0.0.0.1.0.0:$s1.0">离店</span><input placeholder="yyyy-mm-dd" data-reactid=".0.0.0.0.1.0.0:$s1.1"></div><div class="flight-cell search-date" data-reactid=".0.0.0.0.1.0.0:$s2"><span data-reactid=".0.0.0.0.1.0.0:$s2.0">目的地</span><input placeholder="成都" data-reactid=".0.0.0.0.1.0.0:$s2.1"></div><div class="flight-cell search-btn " data-reactid=".0.0.0.0.1.0.1"><span data-reactid=".0.0.0.0.1.0.1.0">&nbsp; </span><span data-reactid=".0.0.0.0.1.0.1.1"> </span><input type="button" class="g-btn" value="搜索" data-reactid=".0.0.0.0.1.0.1.2"></div></div><div class="hotel-g-bd hotel-hot js_hotel_list" data-reactid=".0.0.0.0.1.1"><ul class="hotel-g-list" data-reactid=".0.0.0.0.1.1.0"><li class="js_hotel_detail" title="0" data-reactid=".0.0.0.0.1.1.0.$hotel_0"><div class="hotel-g-proimg" data-reactid=".0.0.0.0.1.1.0.$hotel_0.0"><img class="js_hotelimg" alt="成都九眼桥和颐酒店" width="96" height="96" src="http://dimg11.c-ctrip.com/images/fd/hotel/g2/M00/20/9E/Cghzf1UIF06ACHShAA-TGi5UvTc670_R_130_130.jpg" data-reactid=".0.0.0.0.1.1.0.$hotel_0.0.0"></div><div class="hotel-g-cbd" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1"><h4 class="ellips js_hotelname" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.0">成都九眼桥和颐酒店</h4><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1"><span class="price-num fr" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.0"><b class="num js_translog_price" data-price="848" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.0.0">¥288起',
                '</b></span><span class="rate-num js_hotelpoint" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.1.0">4.5</span><span data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.1.1">分</span></span><span class="cgray" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.1.2">95%用户推荐</span></div><div class="list-c hotel-cell" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2"><span class="cgray js_hotelstar" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2.0">高档型</span><span class="ico-txt ico-tags-ellips" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2.1.0"></span><span data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2.1.1"> </span><span class="t-r" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.2.1.2"></span></span></div><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.3"><span class="c808080 fn12" data-reactid=".0.0.0.0.1.1.0.$hotel_0.1.3.0">最新预订:4小时前</span></div></div></li><li class="js_hotel_detail" title="1" data-reactid=".0.0.0.0.1.1.0.$hotel_1"><div class="hotel-g-proimg" data-reactid=".0.0.0.0.1.1.0.$hotel_1.0"><img class="js_hotelimg" alt="成都康普雷斯国际酒店" width="96" height="96" src="http://dimg13.c-ctrip.com/images/hotel/379000/378421/6d8c7421c41745e6b1fd3e28d02e58c6_R_130_130.jpg" data-reactid=".0.0.0.0.1.1.0.$hotel_1.0.0"></div><div class="hotel-g-cbd" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1"><h4 class="ellips js_hotelname" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.0">成都康普雷斯国际酒店</h4><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1"><span class="price-num fr" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.0"><b class="num js_translog_price" data-price="848" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.0.0">¥367起',
                '</b></span><span class="rate-num js_hotelpoint" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.1.0">4.4</span><span data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.1.1">分</span></span><span class="cgray" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.1.2">97%用户推荐</span></div><div class="list-c hotel-cell" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2"><span class="cgray js_hotelstar" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2.0">高档型</span><span class="ico-txt ico-tags-ellips" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2.1.0"></span><span data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2.1.1"> </span><span class="t-r" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.2.1.2"></span></span></div><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.3"><span class="c808080 fn12" data-reactid=".0.0.0.0.1.1.0.$hotel_1.1.3.0">最新预订:4小时前</span></div></div></li><li class="js_hotel_detail" title="2" data-reactid=".0.0.0.0.1.1.0.$hotel_2"><div class="hotel-g-proimg" data-reactid=".0.0.0.0.1.1.0.$hotel_2.0"><img class="js_hotelimg" alt="成都海洋莱普敦酒店" width="96" height="96" src="http://dimg12.c-ctrip.com/images/fd/hotel/g3/M03/19/B2/CggYG1YCdU2AK9lFAAPRoVvJfWs188_R_130_130.jpg" data-reactid=".0.0.0.0.1.1.0.$hotel_2.0.0"></div><div class="hotel-g-cbd" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1"><h4 class="ellips js_hotelname" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.0">成都海洋莱普敦酒店</h4><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1"><span class="price-num fr" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.0"><b class="num js_translog_price" data-price="848" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.0.0">¥318起',
                '</b></span><span class="rate-num js_hotelpoint" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.1.0">4.6</span><span data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.1.1">分</span></span><span class="cgray" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.1.2">98%用户推荐</span></div><div class="list-c hotel-cell" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2"><span class="cgray js_hotelstar" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2.0">高档型</span><span class="ico-txt ico-tags-ellips" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2.1.0"></span><span data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2.1.1"> </span><span class="t-r" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.2.1.2"></span></span></div><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.3"><span class="c808080 fn12" data-reactid=".0.0.0.0.1.1.0.$hotel_2.1.3.0">最新预订:4小时前</span></div></div></li><li class="js_hotel_detail" title="3" data-reactid=".0.0.0.0.1.1.0.$hotel_3"><div class="hotel-g-proimg" data-reactid=".0.0.0.0.1.1.0.$hotel_3.0"><img class="js_hotelimg" alt="成都新良大酒店" width="96" height="96" src="http://dimg12.c-ctrip.com/images/fd/hotel/g5/M06/BB/91/CggYsVb8oMaAe-ATAAEcIr9pj3A155_R_130_130.jpg" data-reactid=".0.0.0.0.1.1.0.$hotel_3.0.0"></div><div class="hotel-g-cbd" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1"><h4 class="ellips js_hotelname" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.0">成都新良大酒店</h4><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1"><span class="price-num fr" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.0"><b class="num js_translog_price" data-price="848" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.0.0">¥319起',
                '</b></span><span class="rate-num js_hotelpoint" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.1.0">4.4</span><span data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.1.1">分</span></span><span class="cgray" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.1.2">97%用户推荐</span></div><div class="list-c hotel-cell" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2"><span class="cgray js_hotelstar" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2.0">高档型</span><span class="ico-txt ico-tags-ellips" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2.1.0"></span><span data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2.1.1"> </span><span class="t-r" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.2.1.2"></span></span></div><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.3"><span class="c808080 fn12" data-reactid=".0.0.0.0.1.1.0.$hotel_3.1.3.0">最新预订:4小时前</span></div></div></li><li class="js_hotel_detail" title="4" data-reactid=".0.0.0.0.1.1.0.$hotel_4"><div class="hotel-g-proimg" data-reactid=".0.0.0.0.1.1.0.$hotel_4.0"><img class="js_hotelimg" alt="桔子酒店精选（成都顺城店）" width="96" height="96" src="http://dimg11.c-ctrip.com/images/fd/hotel/g4/M0B/5F/3D/CggYHFZvdUSAMzX2ABHSezmpdmI793_R_130_130.jpg" data-reactid=".0.0.0.0.1.1.0.$hotel_4.0.0"></div><div class="hotel-g-cbd" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1"><h4 class="ellips js_hotelname" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.0">桔子酒店精选（成都顺城店）</h4><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1"><span class="price-num fr" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.0"><b class="num js_translog_price" data-price="848" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.0.0">¥276起',
                '</b></span><span class="rate-num js_hotelpoint" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.1.0">4.7</span><span data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.1.1">分</span></span><span class="cgray" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.1.2">99%用户推荐</span></div><div class="list-c hotel-cell" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2"><span class="cgray js_hotelstar" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2.0">高档型</span><span class="ico-txt ico-tags-ellips" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2.1"><span data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2.1.0"></span><span data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2.1.1"> </span><span class="t-r" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.2.1.2"></span></span></div><div class="list-c" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.3"><span class="c808080 fn12" data-reactid=".0.0.0.0.1.1.0.$hotel_4.1.3.0">最新预订:4小时前</span></div></div></li></ul></div></div></div>/div>'].join("")
                )
                $('#fly-layer').removeClass("fadeout").addClass("fadein");
                $('#fly-layer').on('click','.i_close',function(){
                    $('#fly-layer').removeClass("fadein").addClass("fadeout");
                    $('#fly-layer').unbind('click')
                })
                $('#fly-layer').on('click','.js_hotel_list',function(){
                    $('#fly-layer').unbind('click')
                    $('#fly-layer').removeClass("fadein").addClass("fadeout");
                    var title = $maskshow.find('.hotels').length;
                    var h = (212+(length+1)*42)

                    $maskshow.css('height',h+"px");
                    
                    var div = $('<div title="2" class="hotels"></div>');
                    div.html('<i class="tag-fav" data-reactid=".0.2.0.0.2.1:$act_2.1.0.3.0">10</i><h3 data-reactid=".0.2.0.0.2.1:$act_2.1.0.3.1">(中山公园戴斯酒店)</h3><p data-reactid=".0.2.0.0.2.1:$act_2.1.0.3.2"><img src="img/img01.jpg" alt="" data-reactid=".0.2.0.0.2.1:$act_2.1.0.3.2.0"></p>');
                    $maskshow.append(div)

                })

            })
        }

    })();
    // ;(function(){
    //
    // 	var myScroll = new IScroll($('#main')[0]);
    // 	// myScroll.on('scrollEnd', function(){
    // 	// 	alert(1)
    // 	//
    // 	// });
    //
    // })();

})
