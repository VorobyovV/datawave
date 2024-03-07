$(document).ready(function () {
  const slidesCount = $('.example__blocks').find('.example__block').length;
  const $nav = $('.nav');
  const $navInner = $nav.find('.nav-inner');

  const updateNav = slide => $navInner.width(`${((slide + 1) / slidesCount) * 100}%`);

  $nav.on('click', function (e) {
    $slick.slick('slickGoTo', ((e.offsetX / $nav.width()) * slidesCount) | 0);
  });

  const $slick = $('.example__blocks')
    .on({
      init: (e, slick) => updateNav(slick.currentSlide),
      beforeChange: (e, slick, currSlide, nextSlide) => updateNav(nextSlide),
    })
    .slick({
      slidesToShow: 3,
      infinite: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),

      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });

  $('.strategics__blocks').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),

    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.blog__slider').each(function () {
    let slidesCount2 = $(this).find('.blog__block').length;
    let $nav2 = $(this).find('.nav');
    let $navInner2 = $nav2.find('.nav-inner');

    let updateNav2 = slide => $navInner2.width(`${((slide + 1) / slidesCount2) * 100}%`);
    $nav2.on('click', function (e) {
      $slick2.slick('slickGoTo', ((e.offsetX / $nav2.width()) * slidesCount2) | 0);
    });

    let $slick2 = $(this)
      .find('.blog__blocks')
      .on({
        init: (e, slick) => updateNav2(slick.currentSlide),
        beforeChange: (e, slick, currSlide, nextSlide) => updateNav2(nextSlide),
      })
      .slick({
        slidesToShow: 4,
        infinite: false,
        loop: false,

        responsive: [
          {
            breakpoint: 1340,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
              infinite: false,
              loop: false,
            },
          },
        ],
      });
  });

  const slidesCount3 = $('.tools__values').find('.tools__value').length;
  const $nav3 = $('.nav');
  const $navInner3 = $nav3.find('.nav-inner');

  const updateNav3 = slide => $navInner3.width(`${((slide + 1) / slidesCount3) * 100}%`);

  $nav3.on('click', function (e) {
    $slick3.slick('slickGoTo', ((e.offsetX / $nav3.width()) * slidesCount) | 0);
  });

  const $slick3 = $('.tools__values').on({
    init: (e, slick) => updateNav3(slick.currentSlide),
    beforeChange: (e, slick, currSlide, nextSlide) => updateNav3(nextSlide),
  });

  function responsive_slider(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options);
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy');
      }
    }
  }

  responsive_slider('.tools__values', 767, {
    slidesToShow: 1,
    arrows: false,
    infinite: false,
  });

  $(window).resize(function () {
    responsive_slider('.tools__values', 767, {
      slidesToShow: 1,
      arrows: false,
      infinite: false,
    });
  });

  const slidesCount4 = $('.tools__bottom').find('.tools__slide').length;
  const $nav4 = $('.nav2');
  const $navInner4 = $nav4.find('.nav2-inner');

  const updateNav4 = slide => $navInner4.width(`${((slide + 1) / slidesCount4) * 100}%`);

  $nav4.on('click', function (e) {
    $slick4.slick('slickGoTo', ((e.offsetX / $nav4.width()) * slidesCount) | 0);
  });

  const $slick4 = $('.tools__bottom').on({
    init: (e, slick) => updateNav4(slick.currentSlide),
    beforeChange: (e, slick, currSlide, nextSlide) => updateNav4(nextSlide),
  });

  function responsive_slider2(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options);
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy');
      }
    }
  }

  responsive_slider2('.tools__bottom', 767, {
    slidesToShow: 1,
    arrows: false,
    infinite: false,
  });

  $(window).resize(function () {
    responsive_slider2('.tools__bottom', 767, {
      slidesToShow: 1,
      arrows: false,
      infinite: false,
    });
  });

  function responsive_slider3(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options);
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy');
      }
    }
  }

  responsive_slider3('.team__blocks', 1340, {
    breakpoint: 1340,
    slidesToShow: 3,
    infinite: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $(window).resize(function () {
    responsive_slider3('.team__blocks', 1340, {
      slidesToShow: 3,
      infinite: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  });

  var Defaults = $.fn.select2.amd.require('select2/defaults');

  $.extend(Defaults.defaults, {
    searchInputPlaceholder: '',
  });

  var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

  var _renderSearchDropdown = SearchDropdown.prototype.render;

  SearchDropdown.prototype.render = function (decorated) {
    // invoke parent method
    var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

    this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

    return $rendered;
  };


  $('.demo__select').select2({
    placeholder: 'Выбрать',
    allowClear: false,
    width: '100%',
    minimumResultsForSearch: Infinity,
    searchInputPlaceholder: 'Поиск...',
/*     dropdownParent: $('.demo'), */
  });

  /*   $('.demo__select-white').select2({
    placeholder: "Выбрать",
    allowClear: false,
    width: '100%',
    minimumResultsForSearch: Infinity,
    searchInputPlaceholder: 'Поиск...',
  }); */

  $('.example__open').on('click', function () {
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
    /* 
    if ($(this).hasClass('active')) {
      text.html('Свернуть')
    } else (
      text.html('Читать полностью')
    ) */
  });

  $('[data-tabs-type]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('[data-tabs-typecontent]').hide().eq(index).fadeIn();
    }
    $('.blog__blocks').slick('setPosition');
  });

  $('.burger').click(function () {
    $('.header__mobile').toggleClass('active');
    $('.burger').toggleClass('active');
    $('body').toggleClass('fixed');
    return false;
  });

  $('.header__nav-child span').click(function (e) {
    e.preventDefault();
    if ($(window).width() <= 991) {
      $(this).parent().parent().toggleClass('active');
      $(this).toggleClass('active');
    }
  });

  $('.footer__name svg').click(function (e) {
    e.preventDefault();
    if ($(window).width() <= 767) {
      $(this).parent().parent().toggleClass('active');
      $(this).toggleClass('active');
    }
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  var oldScrollY = 0;
  var div = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;

    if (dY < 0) {
      div.classList.add('fixed');
    } else {
      div.classList.remove('fixed');
    }

    oldScrollY = scrolled;
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 350) {
      $('.header').addClass('dop');
      setTimeout(() => {
        $('.header').css('transition', '500ms');
      }, 1);
    } else {
      if (sc == 0) {
        $('.header').removeClass('dop');
        $('.header').css('transition', '0ms');
        $('#top').fadeOut();
      }
    }
  });

  window.onload = function () {
    document.body.classList.add('loaded');
  };

  setTimeout(function () {
    $('body').addClass('loaded');
  }, 3500);

  $('.steps__header').click(function () {
    if ($(window).width() <= 767) {
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active');
        $(this).removeClass('active');
        $(this).next().slideUp(300);
      } else {
        $('.steps__header').removeClass('active');
        $('.steps__body').slideUp(300);
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
      }
    } else {
      return false;
    }
  });

  $('.faq__header').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active');
      $(this).removeClass('active');
      $(this).next().slideUp(300);
    } else {
      $('.faq__header').removeClass('active');
      $('.faq__body').slideUp(300);
      $(this).toggleClass('active');
      $(this).next().slideToggle(300);
    }
  });

  var ticker = document.querySelector('.ticker'),
    list = document.querySelector('.ticker__list'),
    clone = list.cloneNode(true);

  ticker.append(clone);

  $('.about-us__nav li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href');
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 100,
      },
      500
    );
    return false;
  });

  

  
  $('.about__btn-scroll').on('click', function () {
    var $el = $(this),
      id = $el.attr('href');
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 75,
      },
      500
    );
    return false;
  });

 
});



$('.home-scroll').on('click', function () {
  var $el = $(this),
    id = $el.attr('href');
  $('html, body').animate(
    {
      scrollTop: $(id).offset().top - 0,
    },
    500
  );
  return false;
});


$('.header__nav .sub-menu li a').click(function () {
  let hash = $(this).attr('href').split('#').pop();
  let item = $(document).find(`#${hash}`).length;
  if (item > 0) {
    var $el = $(this),
      id = $el.attr('href').split('#').pop();
    $('html, body').animate(
      {
        scrollTop: $(`#${id}`).offset().top - 75,
      },
      1000
    );
    return false;
  }
});