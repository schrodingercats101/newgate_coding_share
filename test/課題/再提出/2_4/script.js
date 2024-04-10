// キーワード
//  「jQuery　アニメーション」
//  「jQuery　アニメーション　複合代入」

$(function(){
    // ここに処理を記述
    $('.start').on('click', function(){
        $('.box1').stop().animate({
            width: '+=100' ,
            height: 200,
            'margin-left': '+=100'
        }, 1000);
    });
    
    $('.start').stop().on('click', function(){
        $('.box2').animate({
            width: '+=100' ,
            height: 200,
            'margin-left': '+=100'
        }, 2000);
    });

    $('.reset').on('click', function(){
        $('.box1, .box2').animate({
            width: 150 ,
            height: 150,
            'margin-left': 30
        }, 0);
    });
});