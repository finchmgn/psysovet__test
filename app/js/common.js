$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:1,
        loop:true,
        responsive:{
            992:{
                items:2,
                stagePadding: 15,
                margin:10
            },
            1366:{
                items:3,
                stagePadding: 50,
                margin:10
            }
        }
    });
});

const psyOnline = [
    {"id":"1", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"2", "name": "Оксана Переладова", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"3", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"4", "name": "Александр Стемковский", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"5", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"6", "name": "Оксана Переладова", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"7", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"8", "name": "Александр Стемковский", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"9", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"10", "name": "Оксана Переладова", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    /*{"id":"11", "name": "Ольга Дорошенко", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"12", "name": "Александр Стемковский", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"13", "name": "Оксана Переладова", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"14", "name": "Ольга Дорошенко", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"15", "name": "Александр Стемковский", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"16", "name": "Ольга Дорошенко", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"17", "name": "Оксана Переладова", "position": "Психолог", "img": "img/reviews/doroshenko.jpg", "status": "online"},
    {"id":"18", "name": "Александр Стемковский", "position": "Психоаналитический психотерапевт", "img": "img/reviews/doroshenko.jpg", "status": "online"}*/
]

document.getElementById('psyOnline').innerHTML = `

    ${psyOnline.map(function (psy) {
        return `
        <div class="col-xl-6 col-lg-6 col-12">
            <div class="row psy-online__online-row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-2 col-3 psy-online__online-col">
                    <a href="#"><img class="psy-online__psy-img" src="${psy.img}" /></a>
                    <span class="icon-dot-single psy-online__online-status"></span>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-10 col-9 psy-online__online-descrip">
                    <p class="psy-online__online-name-p"><a href="#" class="psy-online__online-name">${psy.name}</a></p><p class="psy-online__online-position">${psy.position}</p>
                </div>
            </div>
        </div>    
        `
    }).join('')}

`

