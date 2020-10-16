window.addEventListener('DOMContentLoaded', () => {

    //выезжающее меню
    const btnMenu = document.querySelector('.btn-menu'),
          navMenu = document.querySelector('.nav-link'),
          navLinkItem = document.querySelectorAll('.nav-link-item'),
          navLinkItem0 = document.querySelectorAll('.nav-link-item')[0],
          navLinkItem1 = document.querySelectorAll('.nav-link-item')[1],
          navLinkItem2 = document.querySelectorAll('.nav-link-item')[2],
          navLinkItem3 = document.querySelectorAll('.nav-link-item')[3],
          navLinkItem4 = document.querySelectorAll('.nav-link-item')[4],
          btnUp = document.querySelector('.btn-up');

    btnMenu.addEventListener('click', () => {
        if (!navMenu.classList.contains('show-hide')) {
            navMenu.classList.add('show-hide');
        } else {
            navMenu.classList.remove('show-hide');
        }
    });


    function clearActiveMenu() {
        navLinkItem.forEach(item => {
            item.classList.remove('active-menu');
        });
    }

    navLinkItem0.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveMenu();
        navLinkItem0.classList.add('active-menu');
    });

    navLinkItem1.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveMenu();
        navLinkItem1.classList.add('active-menu');
    });

    navLinkItem2.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveMenu();
        navLinkItem2.classList.add('active-menu');
    });

    navLinkItem3.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveMenu();
        navLinkItem3.classList.add('active-menu');
    });

    navLinkItem4.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveMenu();
        navLinkItem4.classList.add('active-menu');
    });

    btnUp.addEventListener('click', () => {
        clearActiveMenu();
        navLinkItem0.classList.add('active-menu');
    });


    //переключение текстов песен
    $(".songs1").click(function (e) {
        e.preventDefault();
        $(".text-songs1").toggleClass("show", true);
        $(".line-none1").toggleClass("line", true);
        $(".line-none5").toggleClass("line", false);
        $(".line-none4").toggleClass("line", false);
        $(".line-none2").toggleClass("line", false);
        $(".line-none3").toggleClass("line", false);
        $(".text-songs2").removeClass("show");
        $(".text-songs3").removeClass("show");
        $(".text-songs4").removeClass("show");
        $(".text-songs5").removeClass("show");
    });

    $(".songs2").click(function (e) {
        e.preventDefault();
        $(".text-songs2").toggleClass("show", true);
        $(".line-none2").toggleClass("line", true);
        $(".line-none5").toggleClass("line", false);
        $(".line-none4").toggleClass("line", false);
        $(".line-none1").toggleClass("line", false);
        $(".line-none3").toggleClass("line", false);
        $(".text-songs1").removeClass("show");
        $(".text-songs3").removeClass("show");
        $(".text-songs4").removeClass("show");
        $(".text-songs5").removeClass("show");
    });

    $(".songs3").click(function (e) {
        e.preventDefault();
        $(".text-songs3").toggleClass("show", true);
        $(".line-none3").toggleClass("line", true);
        $(".line-none5").toggleClass("line", false);
        $(".line-none4").toggleClass("line", false);
        $(".line-none2").toggleClass("line", false);
        $(".line-none1").toggleClass("line", false);
        $(".text-songs5").removeClass("show");
        $(".text-songs4").removeClass("show");
        $(".text-songs2").removeClass("show");
        $(".text-songs1").removeClass("show");
    });

    $(".songs4").click(function (e) {
        e.preventDefault();
        $(".text-songs4").toggleClass("show", true);
        $(".line-none4").toggleClass("line", true);
        $(".line-none5").toggleClass("line", false);
        $(".line-none3").toggleClass("line", false);
        $(".line-none2").toggleClass("line", false);
        $(".line-none1").toggleClass("line", false);
        $(".text-songs5").removeClass("show");
        $(".text-songs3").removeClass("show");
        $(".text-songs2").removeClass("show");
        $(".text-songs1").removeClass("show");
    });

    $(".songs5").click(function (e) {
        e.preventDefault();
        $(".text-songs5").toggleClass("show", true);
        $(".line-none5").toggleClass("line", true);
        $(".text-songs4").toggleClass("show", false);
        $(".line-none4").toggleClass("line", false);
        $(".line-none3").toggleClass("line", false);
        $(".line-none2").toggleClass("line", false);
        $(".line-none1").toggleClass("line", false);
        $(".text-songs4").removeClass("show");
        $(".text-songs3").removeClass("show");
        $(".text-songs2").removeClass("show");
        $(".text-songs1").removeClass("show");
    });
});