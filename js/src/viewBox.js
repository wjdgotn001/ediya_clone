(function($){

    var viewBox = $('.viewBox');
    // 광고영역
    var viewArea = viewBox.children('.view_area');
    var viewUl = viewArea.children('ul');
    var viewLi = viewArea.find('li');
    var viewLiLen = viewLi.length;
    // 인디케이터
    var indi = viewBox.children('.view_indicator');
    var indiLi = indi.find('li');
    var viewAction = viewArea.find('.action');
    //버튼
    var viewBtnArea = viewBox.children('.view_btn');
    var viewBtn = viewBtnArea.children('button');

    // 마지막li복제후 맨앞에 붙이기
    var viewLi_clone = viewLi.eq(-1).clone(true);
    viewUl.prepend(viewLi_clone);
    var viewAfterLi = viewUl.children('li');
    // console.log(viewAfterLi.length);

    // -100만큼 이동 / ul,li사이즈 변경
    viewUl.css({'width':100*viewAfterLi.length+'%','position':'relative', 'left':-100+'%'});
    viewAfterLi.css({'width':100/viewAfterLi.length+'%'});

    var slideN = 0;
    var permission = true;
    var timed = 500;

    // 인디케이터 a 클릭,포커스시 슬라이드 이동
    indiLi.children('a').on('click focus',function(e){
        e.preventDefault();

        var it = $(this);//링크 a
        slideN = it.parent('li').index(); //li의 ~번째

        indiLi.eq(slideN).addClass('action');
        indiLi.eq(slideN).siblings().removeClass('action');

        viewUl.stop().animate({'margin-left':slideN*-100+'%'});
    });

    //버튼 클릭시 슬라이드 이동
    viewBtn.on('click',function(e){
        e.preventDefault();

        var it =$(this);
        var Attr = it.attr('class');

        if(permission){
            permission = false;

        if(Attr === 'next_btn'){
            //다음버튼
            if(slideN >= viewLi.length-1 ){
                slideN =-1;
                viewUl.stop().css({'margin-left':slideN*-100+'%'});
            }
            slideN += 1;
            
        }else{
            //이전버튼
            // if(slideN <= -1){
            //     slideN = viewLi-1;
            //     viewUl.css({'margin-left':slideN*-100+'%'});
            // }
            slideN -= 1;
        }

        // animate
        viewUl.animate({'margin-left':slideN*-100+'%'},function(){
            if(slideN <= -1){
                slideN = viewLi.length-1;
                viewUl.stop().css({'margin-left':slideN*-100+'%'});
            }
            setTimeout(function(){
                permission=true;
            },timed/5);
        });
        indiLi.eq(slideN).addClass('action');
        indiLi.eq(slideN).siblings().removeClass('action');
    }//permission

    });







})(jQuery);