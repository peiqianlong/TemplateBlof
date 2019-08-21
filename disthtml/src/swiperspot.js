'use strict';

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            stopOnLastSlider: true,
            delay: 3000
        },
        effect: 'coverflow',
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        }

    });
});