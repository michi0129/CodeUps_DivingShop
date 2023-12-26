
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
$(".js-gallery").modaal({
	type: 'image',
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});