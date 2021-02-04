
(function($){

    var gnbContent = [
        {'title':{'titleN':'이디야 메뉴', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'음료', 'link':'#'},
             {'subN':'베이커리', 'link':'#'},
             {'subN':'이디야 스낵', 'link':'#'},
             {'subN':'MD', 'link':'#'},
             {'subN':'비니스트', 'link':'#'},
             {'subN':'원두', 'link':'#'}
            ] 
        },  

        {'title':{'titleN':'이디야멤버스', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'멤버스 소개', 'link':'#'},
             {'subN':'이디야카드', 'link':'#'},
             {'subN':'선물하기', 'link':'#'},
             {'subN':'이디야오더', 'link':'#'},
             {'subN':'FAQ', 'link':'#'}
            ] 
        },  

        {'title':{'titleN':'기프트카드', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'기프트카드 소개', 'link':'#'},
             {'subN':'잔액 조회', 'link':'#'},
             {'subN':'분실신고/환불신청', 'link':'#'},
             {'subN':'자주하는 질문', 'link':'#'}
            ] 
        },  

        {'title':{'titleN':'이디야커피랩', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'이디야커피랩', 'link':'#'},
             {'subN':'이디야커피랩 메뉴', 'link':'#'}
            ] 
        },  

        {'title':{'titleN':'이디야컬처랩', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'뮤직페스타', 'link':'#'},
             {'subN':'프로그램 및 시설 안내', 'link':'#'}
            ] 
        },
        
        {'title':{'titleN':'이디야 소식', 'link':'#', 'target':'_blank'},
         'sub':
            [
             {'subN':'공지사항', 'link':'#'},
             {'subN':'이벤트', 'link':'#'},
             {'subN':'이디야 유튜브', 'link':'#'},
             {'subN':'이디야 블로그', 'link':'#'},
             {'subN':'이디야 인스타그램', 'link':'#'},
             {'subN':'이디야 페이스북', 'link':'#'}
            ] 
        }
    ];
    var gnbList= '<li><dl><dt></dt><dd></dd></dl></li>';

    var headBoxWrap = $('.headBox_wrap');
    var headBox = headBoxWrap.children('#headBox');
    var gnbWrap = headBox.find('.gnbWrap');
    var gnbUl = gnbWrap.children('ul');
    var gnbLiLen = gnbContent.length;
    // console.log(gnbLiLen);
    var gnbDt, gnbDd, gnbTitle, gnbSub, gnbSubLen;

    gnbUl.empty();

    for(var i=0; i<gnbLiLen ; i+=1){
        gnbUl.append(gnbList);

        gnbDt = gnbUl.children('li').eq(i).find('dt');
        gnbDd = gnbUl.children('li').eq(i).find('dd');

        gnbTitle = gnbContent[i].title;

        gnbDt.append('<a href="'+gnbTitle.link+'" target="'+gnbTitle.target+'">'+gnbTitle.titleN+'</a>');

        gnbSubLen = gnbContent[i].sub.length;
        for(var j=0; j<gnbSubLen ; j+=1){
            gnbSub = gnbContent[i].sub[j];
            gnbDd.append('<a href="'+gnbSub.link+'">'+gnbSub.subN+'</a>');

        };
    };//for

    var gnbDt = gnbWrap.find('dt');
    var gnbDtLink = gnbDt.children('a');

    var gnbDd = gnbWrap.find('dd');
    var gnbDdLink = gnbDd.children('a');

    gnbDd.hide();

    // 함수
    var SlideDown = function(){
        gnbDd.stop().slideDown();
    };

    var SlideUp = function(){
        gnbDd.stop().slideUp();
    };

    gnbUl.on({
        'mouseenter':SlideDown,
        'mouseleave':SlideUp
    });

    gnbDtLink.on('focus',SlideDown);
    gnbDdLink.eq(-1).on('blur',SlideUp);


    // language
    var language = headBox.find('.language');
    var lanDt = language.find('dt');
    var lanDtBtn = lanDt.children('button');

    var lanDd = language.find('dd');
    var lanDdLink = lanDd.children('a');

    language.on('click',function(){
        lanDd.show();
        lanDt.hide();
    });

    language.on('mouseleave',function(){
        lanDd.hide();
        lanDt.show();
    });

    lanDtBtn.on('focus',function(){
        lanDd.show();
        lanDt.hide();

    });

    lanDdLink.eq(-1).on('blur',function(){
        lanDd.hide();
        lanDt.show();
    });

    


    

    

    





















})(jQuery);