// ヒント
//  条件式
//  文字列の取得と上書き
// キーワード
//  「jQuery　フェードイン　フェードアウト」

$(function(){
  // ここに処理を記述
  $('.btn').on('click', function(){
    $('.img').fadeToggle();

    if($('img').hasClass('invisible')) {
      $('.btn').text('フェードアウトする');
      $('.img').removeClass('invisible');
    } else {
      $('.btn').text('フェードインする');
      $('.img').addClass('invisible');
    }
  });
});