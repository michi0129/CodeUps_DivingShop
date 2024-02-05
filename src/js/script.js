
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //　ハンバーガーメニュー //
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

    // Swiper //
    // Topページ
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

    // Campaignページ
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

// 画像エフェクト //
//　infoページ
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

//　Voiceページ
//　要素の取得とスピードの設定
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

//　Priceページ
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

// To Topボタン表示設定
$(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
    } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
    }
});


// モーダル //
// Aboutページ
$(document).ready(function () {
    if ($(".js-gallery").length) {
        $(".js-gallery").modaal({
            type: 'image',
            overlay_close: true, // モーダル背景クリック時に閉じるか
            before_open: function () { // モーダルが開く前に行う動作
                $('html').css('overflow-y', 'hidden'); // 縦スクロールバーを出さない
            },
            after_close: function () { // モーダルが閉じた後に行う動作
                $('html').css('overflow-y', 'scroll'); // 縦スクロールバーを出す
            }
        });
    }
});


// アコーディオン //
// Blogページ
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
$(function () {
    // タイトルをクリックすると
    $(".js-accordion").on("click", function () {
        // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
        // $(".js-accordion").not(this).removeClass("is-open");
        // クリックしたタイトル以外のコンテンツを閉じる
        // $(".js-accordion").not(this).next().slideUp(300);
        // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
        $(this).toggleClass("is-close");
        // クリックしたタイトルの次の要素(コンテンツ)を開閉
        $(this).next().slideToggle(300);
    });
});


// タブ切り替え //　
function activateTab() {
    var tabButtons = $(".js-tab-button");
    var tabContents = $(".js-tab-content");
    tabButtons.click(function () {
        var index = tabButtons.index(this);  //ボタンと同じ順番のコンテンツを取得する
        tabButtons.removeClass("is-active");
        tabContents.removeClass("is-active");
        $(this).addClass("is-active");
        tabContents.eq(index).addClass("is-active");
    });
}
activateTab();


// タブダイレクトリンク //
function activateTabFromHash() {
    var hash = location.hash;
    hash = (hash.match(/^#tab\d+$/) || [])[0];
    var tabName = "tab01";
    if ($(hash).length) {
        tabName = hash.slice(1);
    }
    var tabButtons = $(".js-tab-button");
    var tabContents = $(".js-tab-content");
    tabButtons.removeClass("is-active");
    tabContents.removeClass("is-active");
    var tabNumber = tabButtons.filter("#" + tabName).index();
    tabButtons.eq(tabNumber).addClass("is-active");
    tabContents.eq(tabNumber).addClass("is-active");
}
activateTabFromHash();


// フォームチェック //
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.js-form');
    var submitButton = document.querySelector('.sub-form__button input[type="submit"]');

    submitButton.addEventListener('click', function (event) {
        var nameInput = document.querySelector('.js-name');
        var emailInput = document.querySelector('.js-email');
        var telInput = document.querySelector('.js-tel');
        var checkboxInputs = document.querySelectorAll('.sub-form__checkbox input');
        var textareaInput = document.querySelector('.js-textarea');
        var privacyCheckbox = document.querySelector('.sub-form__privacy input');

        var isValid = true;

        // バリデーションルール
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('is-active');
        } else {
            nameInput.classList.remove('is-active');
        }

        if (emailInput.value.trim() === '') {
            isValid = false;
            emailInput.classList.add('is-active');
        } else {
            emailInput.classList.remove('is-active');
        }

        if (telInput.value.trim() === '') {
            isValid = false;
            telInput.classList.add('is-active');
        } else {
            telInput.classList.remove('is-active');
        }

        var checkedCheckboxCount = 0;
        checkboxInputs.forEach(function (checkbox) {
            if (checkbox.checked) {
                checkedCheckboxCount++;
            }
        });

        if (checkedCheckboxCount === 0) {
            isValid = false;
            checkboxInputs.forEach(function (checkbox) {
                checkbox.classList.add('is-active');
            });
        } else {
            checkboxInputs.forEach(function (checkbox) {
                checkbox.classList.remove('is-active');
            });
        }

        if (textareaInput.value.trim() === '') {
            isValid = false;
            textareaInput.classList.add('is-active');
        } else {
            textareaInput.classList.remove('is-active');
        }

        if (!privacyCheckbox.checked) {
            isValid = false;
            privacyCheckbox.classList.add('is-active');
        } else {
            privacyCheckbox.classList.remove('is-active');
        }

        // バリデーション結果
        if (!isValid) {
            event.preventDefault();
            alert('全ての必須項目を入力・選択してください。');
        }
    });
});
