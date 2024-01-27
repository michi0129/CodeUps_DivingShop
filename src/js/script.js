
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ハンバーガーメニュー
    //クリックするとクラスを付与
    $(".js-hamburger").click(function () {
        if ($('.js-hamburger').hasClass('is-active')) {
            $('.js-hamburger').removeClass('is-active');
            $(".sp-nav").removeClass('is-active');
            $("body").removeClass("is-active");
            $(".header").removeClass("is-active");
        } else {
            $('.js-hamburger').addClass('is-active');
            $(".sp-nav").addClass('is-active');
            $("body").addClass("is-active");
            $(".header").addClass("is-active");
        }
    });

    // Initialize Swiper
    var swiper = new Swiper(".js-mv-swiper", {
        //pagination: {
        //    el: ".swiper-pagination",
        //},
        clickable: false,
        loop: true,
        effect: 'fade',
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // Swiper
    var swiper = new Swiper(".js-campaign-swiper", {
        //pagination: {
        //    el: ".swiper-pagination",
        //},
        clickable: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // 次のスライドを少し見せる
        slidesPerView: 'auto', // 自動調整
        // スライド間の余白
        spaceBetween: '6.4%',
        // 前後のスライドで止まらずにスライド
        freeMode: true,
        centeredSlides: false,
        // 前後の矢印
        navigation: {
            nextEl: ".campaign__swiper-button-next",
            prevEl: ".campaign__swiper-button-prev",
        },

        //　ブレイクポイント     
        breakpoints: {
            768: {
                // スライド間の余白
                spaceBetween: '3.2%',
            },
        },
    });
});


//informationの画像エフェクト
//要素の取得とスピードの設定
var box = $('.info__image'),
    speed = 700;

//.info__imageの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
            })
            counter = 1;
        }
    });
});

//Voiceの画像エフェクト
//要素の取得とスピードの設定
var box = $('.voice-card__image'),
    speed = 700;

//.voice__imageの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
            })
            counter = 1;
        }
    });
});

//Priceの画像エフェクト
//要素の取得とスピードの設定
var box = $('.price__image'),
    speed = 700;

//.price__imageの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
            })
            counter = 1;
        }
    });
});

var topBtn = $('.to-top');
topBtn.hide();

// ボタンの表示設定
$(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
    } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
    }
});

// Aboutページ
// モーダル
$(document).ready(function() {
    if ($(".js-gallery").length) {
        $(".js-gallery").modaal({
            type: 'image',
            overlay_close: true, // モーダル背景クリック時に閉じるか
            before_open: function() { // モーダルが開く前に行う動作
                $('html').css('overflow-y', 'hidden'); // 縦スクロールバーを出さない
            },
            after_close: function() { // モーダルが閉じた後に行う動作
                $('html').css('overflow-y', 'scroll'); // 縦スクロールバーを出す
            }
        });
    }
});

// Blogページ
// アコーディオン
$(function () {
    // タイトルをクリックすると
    $(".js-archive-accordion").on("click", function () {
        // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
        // $(".js-accordion").not(this).removeClass("is-open");
        // クリックしたタイトル以外のコンテンツを閉じる
        // $(".js-accordion").not(this).next().slideUp(300);
        // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
        $(this).toggleClass("is-open");
        // クリックしたタイトルの次の要素(コンテンツ)を開閉
        $(this).next().slideToggle(300);
    });
});

// FAQページ
// アコーディオン
$(function () {
    // タイトルをクリックすると
    $(".js-accordion").on("click", function () {
        // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
        // $(".js-accordion").not(this).removeClass("is-open");
        // クリックしたタイトル以外のコンテンツを閉じる
        // $(".js-accordion").not(this).next().slideUp(300);
        // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
        $(this).toggleClass("is-open");
        // クリックしたタイトルの次の要素(コンテンツ)を開閉
        $(this).next().slideToggle(300);
    });
});

//Contactページ
$(document).ready(function () {
    $('.js-form :input:not(:checkbox)').click(function (event) { 

        event.preventDefault(); // フォームのチェックボックス以外の要素に対するデフォルトの送信動作を無効化

        // 必須項目の入力をチェック
        var name = $('.js-name').val();
        var email = $('.js-email').val();
        var tel = $('.js-tel').val();
        var textarea = $('.js-textarea').val();

        // チェックボックスの選択状態を取得
        var checkboxSelected = $('[name="hoge"]:checked').length > 0;

        // 本番環境では非表示
        // console.log("名前:", name); // 名前をコンソールに出力
        // console.log("メールアドレス:", email); // メールアドレスをコンソールに出力
        // console.log("電話番号:", tel); // 電話番号をコンソールに出力
        // console.log("お問い合わせ内容:", textarea); // お問い合わせ内容をコンソールに出力

        // エラーメッセージの表示とフォーカスの設定
        var hasError = false;
        $('.js-form :input[required]').each(function() {
            if ($(this).val() === '') {
                $(this).addClass('is-active');
                hasError = true; // エラーがある場合はフラグを立てる
            } else {
                $(this).removeClass('is-active');
            }
        });

        if (!checkboxSelected) {
                        // チェックボックスが一つも選択されていない場合のエラー処理
                        $('[type="checkbox"]').addClass('is-active'); // チェックボックスエラーメッセージを表示
                        hasError = true;
                    } else {
                        $('[type="checkbox"]').removeClass('is-active'); // チェックボックスエラーメッセージを非表示
                    }

        if (hasError) {
            // エラーがある場合、最初のエラー項目にフォーカスを設定する
            $('.js-form :input[required].is-active').first().focus();
            $('.sub-form__error').addClass('is-active'); // エラーメッセージを表示
            return false; // エラーがあるためフォームの送信をキャンセル
        } else {
            $('.sub-form__error').removeClass('is-active'); // エラーメッセージを非表示
        }

        // エラーがない場合はフォームの送信を行う（ここに送信処理を記述）
    });



    // フォームのsubmit以外のイベント（クリックなど）でフォーカスされた場合、is-activeを削除する
    $('.js-form :input[required]').focus(function() {
        $(this).removeClass('is-active');
    });
});