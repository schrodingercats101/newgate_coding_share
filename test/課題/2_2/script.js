// ヒント
//  「2-B_jQuery基礎知識.pdf」p20以降
//  「2-A_JavaScript基礎知識.pdf」p27（演算子）
// キーワード
//  「jQuery　文字列　取得」
//  「jQuery　文字列　上書き」

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
});