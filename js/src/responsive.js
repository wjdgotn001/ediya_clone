//반응형 파일 연결
var deviceSize = function(){
    var winSize; //**최종변수
  
    (function($){
    // jQuery start
    
    var deviceType = [
        {type:'mobile', size:480},
        {type:'tablet', size:1024},
        {type:'pc', size:1440},
        {type:'pcfull'}
    ];
    
    //최초 가로값 파악
    var win = $(window);
    var beforeWinW = win.outerWidth(true);
    
    var deviceCheck = function(winW){
    
        //type체크
        var myType;
    
        for( var i =0; i<deviceType.length ; i+=1 ){
            if(winW <= deviceType[i].size){
                myType = deviceType[i].type;
                break;
            }else{
                myType = deviceType[3].type;
            }
        } //for
        return myType;
        
    } //deviceCheck
    // =================================================
    
    winSize = deviceCheck(beforeWinW);
    
    win.on('resize', function(){
        
        //바뀐 가로값 파악
        var reWinW = win.outerWidth(true);
        var afterWinSize = deviceCheck(reWinW);
        
        // 기존 디바이스타입과 변경된 디바이스타입이 다른 경우에 새로고침
        if(winSize !== afterWinSize){
            location.reload();
        }
    });
    return winSize;
    })(jQuery);
    return winSize;
  }//winSize
  