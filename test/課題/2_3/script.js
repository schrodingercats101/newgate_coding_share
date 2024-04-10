// ヒント
//  「2-A_JavaScript基礎知識.pdf」p28以降（条件式）
// キーワード
//  「jQuery　if文」

$(function(){
    // ここに処理を記述
    let n = $('.count').text();

    $('.btn-good').on('click', function(){
        n++;
        $('.count').text(n);
    });
    $('.btn-bad').on('click', function(){
        n--;
        $('.count').text(n);
    });

    $('.btn-good, .btn-bad').on('click', function(){
        if (n%10 == 0 && n != 0) {
            $('.count').css('color', 'red');
        } else if (n%5 == 0 && n != 0){
            $('.count').css('color', 'blue');
        } else {
            $('.count').css('color', 'black');
        }
    })
});