(function($){

// gnbBox
var gnbBoxWrap = $('.gnbBox_wrap');
var gnbOpenBtn = gnbBoxWrap.children('.gnbBox_open_btn');
var gnbArea =  gnbBoxWrap.children('.gnbBox_area');
var gnbCloseBtn = gnbArea.children('.gnbBox_close_btn');

gnbArea.hide();

gnbOpenBtn.on('click',function(e){
    e.preventDefault();

    var gnbDisplay = gnbArea.css('display');

    if(gnbDisplay){
        gnbArea.stop().show();

    }else if(gnbDisplay === 'none'){
        gnbArea.stop().hide();
    }
});

gnbCloseBtn.on('click',function(e){
    e.preventDefault();

    gnbArea.hide();
});

var gnbContent = [
        {   'titleN':{'title':'메뉴','link':'#','target':"_blank" },
            'subN':[
                {'title':'음료','link':'#','target':"_blank"},
                {'title':'베이커리','link':'#','target':"_blank"},
                {'title':'이디야 스낵','link':'#','target':"_blank"},
                {'title':'MD','link':'#','target':"_blank"},
                {'title':'비니스트','link':'#','target':"_blank"},
                {'title':'원두','link':'#','target':"_blank"}
                  ]
        },
        {   'titleN':{'title':'이디야멤버스','link':'#','target':"_blank" },
            'subN':[
                {'title':'멤버스 소개','link':'#','target':"_blank"},
                {'title':'이디야카드','link':'#','target':"_blank"},
                {'title':'선물하기','link':'#','target':"_blank"},
                {'title':'이디야오더','link':'#','target':"_blank"},
                {'title':'FAQ','link':'#','target':"_blank"}
                  ]
        },
        {   'titleN':{'title':'기프트카드','link':'#','target':"_blank" },
            'subN':[
                {'title':'기프트카드 소개','link':'#','target':"_blank"},
                {'title':'잔액 조회','link':'#','target':"_blank"},
                {'title':'분실신고/환불신청','link':'#','target':"_blank"},
                {'title':'자주하는 질문','link':'#','target':"_blank"}
                  ]
        },
        {   'titleN':{'title':'이디야커피랩','link':'#','target':"_blank" },
            'subN':[
                {'title':'이디야커피랩','link':'#','target':"_blank"},
                {'title':'이디야커피랩 메뉴','link':'#','target':"_blank"}
                  ]
        },
        {   'titleN':{'title':'이디야컬처랩','link':'#','target':"_blank" },
            'subN':[
                {'title':'뮤직페스타','link':'#','target':"_blank"},
                {'title':'프로그램 및 시설 안내','link':'#','target':"_blank"}
                  ]
        },
        {   'titleN':{'title':'이디야 소식','link':'#','target':"_blank" },
            'subN':[
                {'title':'공지사항','link':'#','target':"_blank"},
                {'title':'이벤트','link':'#','target':"_blank"},
                {'title':'이디야 유튜브','link':'#','target':"_blank"},
                {'title':'이디야 블로그','link':'#','target':"_blank"},
                {'title':'이디야 인스타그램','link':'#','target':"_blank"},
                {'title':'이디야 페이스북','link':'#','target':"_blank"}
                  ]
        }
    ];
var gnbList = '<li><dl><dt><span></span></dt><dd></dd></dl></li>';

var gnbBox = $('.gnbBox');
var gnbMenu = gnbBox.children('.gnbMenu');
var gnbMenuUl = gnbMenu.children('ul');

gnbMenuUl.empty();

// 코드삽입
var gnbLen = gnbContent.length;
var i,j, gnbDt, gnbDd, conTitle, conSubLen, conSub;

for(i=0; i<gnbLen ; i+=1){
    //title생성
    gnbMenuUl.append(gnbList);
    gnbDt = gnbMenuUl.children('li').eq(i).find('dt');
    gnbDd = gnbMenuUl.children('li').eq(i).find('dd');

    conTitle = gnbContent[i].titleN;
    gnbDt.append('<a href="'+conTitle.link+'">'+conTitle.title+'</a>');

// sub메뉴생성
    conSubLen = gnbContent[i].subN.length;
    for(j=0; j<conSubLen ;j+=1){
        
    conSub = gnbContent[i].subN[j];
    gnbDd.append('<a href="'+conSub.link+'" blank="'+conSub.target+'">'+conSub.title+'</a>');
    }
};//for

// 아코디언
var gnbMenuLi = gnbMenuUl.children('li');
var gnbDl = gnbMenuLi.children('dl');
var gnbDt = gnbDl.children('dt');
var gnbDd = gnbDl.children('dd');

gnbDt.on('click',['a'],function(e){
    e.preventDefault();

    var it = $(this);
    var itI = it.parents('li').index();
    console.log(itI);

    it.siblings('dd').stop().slideToggle(function(){
      var display = it.siblings('dd').css('display') === 'none';

    if(display){
        //none
        it.removeClass('on');
        it.children('span').text('열기');
        it.children('span').addClass('hidden_context');

    }else{
        //block
        it.addClass('on');
        it.children('span').text('닫기');
        it.children('span').addClass('hidden_context');
        it.parents('li').siblings().find('dt').removeClass('on');
    }
    });//slideToggle

    it.parents('li').siblings().find('dd').stop().slideUp();
});//gnbDtLink















})(jQuery);