
(function($){

    var nowW = deviceSize();
  
    var deviceType = ['mobile','tablet','pc','pcfull'];
    var pcUrl = './pc/';
  
    // 변수
    var headBox = $('.headBox');
    var viewBox = $('.viewBox');
    var beanist = $('.beanist_card');

  
    // import 
    var headPcImport = function(){
      headBox.append('<script src="../js/src/headBox_pc.js"></script>');
    };
    var headImport = function(){
      headBox.append('<script src="../js/src/headBox.js"></script>');
    };

    var viewImport = function(){
      viewBox.append('<script src="../js/src/viewBox.js"></script>');
    };
    var beanistImport = function(){
      beanist.append('<script src="../js/src/beanist.js"></script>');
    };
 
  
  // ======================================================
  if(nowW === deviceType[0]){
    headImport();
    viewImport();
    beanistImport();
  
    // viewBox.load( url + '' );
  }else if(nowW === deviceType[1]){
    headImport();
    viewImport();
    beanistImport();


  
  }
  else{
    headBox.load(pcUrl + 'pc_headBox.html', headPcImport);
    viewImport();
    beanistImport();
    
  }
    
  
  })(jQuery);
  