// 



$(".menu ul li").click(function() {
    $(".menu ul li").removeClass("isactive")
    $(this).addClass("isactive")
})
$(".select").click(function() {
    $(".select ul").toggle("fast")
        // if ($(".select ul").css("opacity") == "0") {
        //     $(".select ul").css("opacity", "1")
        // } else {
        //     $(".select ul").css("opacity", "0")
        // }
})
$(".page .list").click(function() {
    $(".page .list").removeClass("isactive")
    $(this).addClass("isactive")
})
$(".phonemuen").click(function() {
    $(".menu ul").toggle("fast")
})
P.initMathod({
    params: {
        elemId: '#Page',
        total: '200',
        pageSize: '10'
    },
    requestFunction: function() {
        // P.config.total = parseInt(Math.random() * 10 + 85);//此处模拟总记录变化
        //TODO ajax异步请求过程,异步获取到的数据总条数赋值给 P.config.total
        //列表渲染自行处理
    }
});

let data = [{
        src: "http://img1.ph.126.net/w6SDxrMo_xKUW62ehhZG8Q==/6619238120095951543.jpg",
        tit: "fermentum, nulla luctus pharetra vulputate, felis tellusfermentum, nulla luctus pharetra vulputate, felis tellus",
        main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor. Cum , nascetur ridiculus mus. pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor. Cum , nascetur ridiculus mus. pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor. Cum , nascetur ridiculus mus. pulvinar temporpulvinar tempor"
    },
    {
        src: "http://img1.ph.126.net/w6SDxrMo_xKUW62ehhZG8Q==/6619238120095951543.jpg",
        tit: "fermentum, nulla luctus pharetra vulputate, felis tellusfermentum, nulla luctus pharetra vulputate, felis tellus",
        main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendumlaoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,     nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor "
    },
    {
        src: "http://img1.ph.126.net/w6SDxrMo_xKUW62ehhZG8Q==/6619238120095951543.jpg",
        tit: "fermentum, nulla luctus pharetra vulputate, felis tellusfermentum, nulla luctus pharetra vulputate, felis tellus",
        main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendumlaoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,     nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor "
    },
    {
        src: "http://img1.ph.126.net/w6SDxrMo_xKUW62ehhZG8Q==/6619238120095951543.jpg",
        tit: "fermentum, nulla luctus pharetra vulputate, felis tellusfermentum, nulla luctus pharetra vulputate, felis tellus",
        main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendumlaoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,     nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor "
    },
    {
        src: "http://img1.ph.126.net/w6SDxrMo_xKUW62ehhZG8Q==/6619238120095951543.jpg",
        tit: "fermentum, nulla luctus pharetra vulputate, felis tellusfermentum, nulla luctus pharetra vulputate, felis tellus",
        main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendumlaoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,     nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor Lorem ipsum dolor sit amet,            consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor.Cum,            nascetur ridiculus mus.pulvinar temporpulvinar tempor "
    },

]


// 渲染数据
getInfo(data);

function getInfo(val) {
    let info = ""
    val.forEach(function(i) {
        info += `<div class="con_main_left"><div class="img"><img src="${i.src}" alt="img"></div><div class="text_main" ><span class="time">2019.7.12</span></span><span class="text_main_tit">${i.tit}</span> <br> <span class="text_main_con">${i.main}</span> </div></div>`
    })
    $("#data").html(info)
}

// function openlist(that) {

//     $(".list dd").css("display", "none")
//     $(".list dt").removeClass("down")
//     console.log($(that).find("dd").css("display"))
//     if ($(that).find("dd").css("display") == "block") {

//         $(that).find("dd").css("display", "none")
//         $(that).find("dt").addClass("up")

//     } else if ($(that).find("dd").css("display") == "none") {

//         $(that).find("dd").css("display", "block")
//         $(that).find("dt").addClass("down")
//     }
// }
$(".guidang .list").click(function() {
    $(this).find("dd").toggle("fast")
    if ($(this).find("dt").attr("class") == 'up') {
        $(this).find("dt").removeClass("up")
        $(this).find("dt").addClass("down")
    } else {
        $(this).find("dt").removeClass("down")
        $(this).find("dt").addClass("up")
    }

})