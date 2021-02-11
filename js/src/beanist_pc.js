(function($){

    var beanistCard = $('.beanist_card');
    var beanistIndi = beanistCard.children('.indicator');
    var beanistIndiLi = beanistIndi.find('li');
    var beanistIndiLink = beanistIndiLi.children('a');

    var beanistWrap = beanistCard.children('.beanist_list_wrap');
    var beanistUl = beanistWrap.children('.beanist_list');
    var beanistLi = beanistUl.children('div');

    // 복제
    var list_clone = beanistLi.eq(-1).clone(true);
    beanistUl.prepend(list_clone);
    var clone_AfterLi = beanistUl.children('div');

    // ul,li가로값 변경
    beanistUl.css({'width':clone_AfterLi.length*100+'%', 'position':'relative','left':-100+'%'});
    clone_AfterLi.css({'width':100/clone_AfterLi.length+'%'});


    //인디케이터 클릭
    beanistIndiLi.children('a').on('click',function(e){
        e.preventDefault();

        var it = $(this);
        var itI = it.parent().index();

        beanistIndiLi.eq(itI).addClass('action');
        beanistIndiLi.eq(itI).siblings().removeClass('action');

        beanistUl.stop().animate({'margin-left':itI*-100+'%'});

    });



    









})(jQuery);