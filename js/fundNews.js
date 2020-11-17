// fundNews.js

function fundNews(){
    var _this = $(document).find('#newsArea');
    var btnArea = _this.find('.newsBtn');
    _this.find('section').css('overflow','hidden');
    var wrap = _this.find('ul');
    var con = wrap.children('li').css('margin-top','10px');
    var conSize = con.outerHeight(true);
    var auto;
    wrap.css({overflow:'visible',marginTop:-((con.length)*conSize),float:'left',background:'white'});
    var arr=[];
    con.each(function(idx){arr[idx] = $(this);});
    wrap.children().remove();
    for(var i=0;i<arr.length;i++){arr[i].prependTo(wrap);}
    con.last().clone().appendTo(wrap)
    con.first().clone().prependTo(wrap)
    var conLength = wrap.children('li').length;
  
  
    _this.find('.newsBtn > button').on('click',function(e){
        if(wrap.is(':animated')){return false;}
        var margin = parseInt(wrap.css('margin-top'));
        clearInterval(auto);
        auto = setInterval(function(){
            _this.find('button.next').click();
        },5000);
        if($(e.target).hasClass('next')){
            if(margin >= -conSize){
                wrap.css('margin-top',-conSize*(conLength-1))
                margin = -conSize*(conLength-1);
            }
            wrap.stop().animate({marginTop:margin+conSize});
        }else{
            if(margin <= -conSize*(conLength-1)){
                wrap.css('margin-top',-conSize)
                margin = -conSize;
            }
            wrap.stop().animate({marginTop:margin-conSize});
        }
    });
    auto = setInterval(function(){
        _this.find('button.next').click();
    },2000);
  }
  
  
  fundNews()