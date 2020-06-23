$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.modal').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 650) {
            $('.nav-item').css('color','black');
        }else{
            $('.nav-item').css('color','white');
        }  
    });

    $('#topbtn').hide();
    //画面をスクロールしたとき
    $(window).scroll(function() {
        //80pxより多くスクロールした場合
        if($(this).scrollTop() > 700) {
            //ボタンをフェードインさせる
            $('#topbtn').fadeIn(300);
        //それ以外の場合
        } else {
            //ボタンをフェードアウトさせる
            $('#topbtn').fadeOut(300);
        }
    });
    //id属性がtopBtnの要素をクリックすると
    $('#topbtn').click(function(){
    //画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
    $('html, body').animate({scrollTop: 0}, 500);
    });

    $('a[href^="#"]').click(function() {
        let speed = 400;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        let position = jQuery(target).offset().top;
        if ("fixed" !== jQuery(".header").css("position")) {
            position = jQuery(target).offset().top;
        }
        if (0 > position) {
            position = 0;
        }
        jQuery("html, body").animate({
                scrollTop: position
            },
            speed
        );
        return false;
    });

    
    $('.nav-item').click(function() {
      $('.nav-item').removeClass('is-active');
      $(this).addClass('is-active');
       return false;
              
          });
     
      
  });
  

  