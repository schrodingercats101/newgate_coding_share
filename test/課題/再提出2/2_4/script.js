// キーワード
//  「jQuery　アニメーション」
//  「jQuery　アニメーション　複合代入」

$(function(){
    // ここに処理を記述
    $('.start').on('click', function(){
        $('.box1').animate({
            width: '+=100' ,
            height: 200,
            'margin-left': '+=100'
        }, 1000);
    });
    
    $('.start').on('click', function(){
        $('.box2').animate({
            width: '+=100' ,
            height: 200,
            'margin-left': '+=100'
        }, 2000);
    });

    $('.reset').on('click', function(){
        $('.box1, .box2').animate().stop();
        $('.box1, .box2').css({
            width: 150 ,
            height: 150,
            'margin-left': 30
        });
    });
});