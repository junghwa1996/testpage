$(function(){
    tapMenu();
    Menuopen();
    MSearchopen();
    scrollTopbtn();
    quickFixed();
});


// 모바일 시작

function tapMenu(){
    $('.tapwrap>ul>li').click(function(){
        $('.tapwrap>ul>li').removeClass('tabOn');
        $(this).addClass('tabOn');
    });
}
// 좌측 메뉴 탭기능

function Menuopen(){
    $('.asideMenuIco').click(function(){
        $('.sidebar').toggleClass('open');
    });
}
// 좌측 메뉴 오픈
function MSearchopen(){
    $('.search_Btn').click(function(){
        $('.search form').toggleClass('searchOn');
    });
}

function scrollTopbtn(){
    $('.Topico').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
}

function quickFixed(){
    var nav = $('.slider_main').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.Topbtn').addClass('block');
        }else{
            $('.Topbtn').removeClass('block');
        }
    });
}
