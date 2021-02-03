
(function($){

    var nowW = deviceSize();
  
    var deviceType = ['mobile','tablet','pc','pcfull'];
  
    // 변수
    var headBox = $('#headBox');
  
    // import 
    var headPcImport = function(){
      headBox.append('<script src="../js/src/headBox.js"></script>');
    };
    
  
  // ======================================================
  if(nowW === deviceType[0]){
  
    // viewBox.load( url + '' );
  }else if(nowW === deviceType[1]){
  
  }
  else{
    
  }
    
  
  })(jQuery);
  