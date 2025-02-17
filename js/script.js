// slider
$(document).ready(function() {
  $('.slid_projects').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1
  });
});

// $('.projects_slider').slick({
//   slidesToShow: 3,
//   dots: true,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         adaptiveHeight: true,
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         adaptiveHeight: true,
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// $('.slide_tabs .js_slide_tabs_2').slick({
//   centerMode: true,
//   centerPadding: '160px',
//   slidesToShow: 1,
//   prevArrow: $('.prev_tabs_2'),
//   nextArrow: $('.next_tabs_2'),
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// $('.tolerances_slider .tolerances_slider_wrap').slick({
//   slidesToShow: 5,
//   prevArrow: $('.tolerances_prev'),
//   nextArrow: $('.tolerances_next'),
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         slidesToShow: 2
//       }
//     }
//   ]
// });
// $('.other_services_slider .other_services_slider_wrap').slick({
//   slidesToShow: 4,
//   prevArrow: $('.other_services_prev'),
//   nextArrow: $('.other_services_next'),
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// $('.reviews_slider .reviews_slider_wrap').slick({
//   slidesToShow: 2,
//   prevArrow: $('.reviews_prev'),
//   nextArrow: $('.reviews_next'),
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// $('.lightbox').slickLightbox({
//   src: 'src',
//   itemSelector: '.item img'
// });
// $('.proj-lightbox').slickLightbox({
//     images: ['<p>С помощью Tekla Structures были реализованы важные этапы работ на проекте «Строительство газоочистки печей обжига керамзита №1 и №2», которые позволили ускорить согласование проектных и конструкторских решений, размещения оборудования и металлокаркаса установки, организацию площадок обслуживания оборудования. Разработка проекта осуществлена в соответствие с действующими НТД и нормами безопасной эксплуатации промышленных объектов.</p>', 'http://placekitten.com/1010/606', 'http://placekitten.com/1060/636']
//   });

  // $('.ssss').click(function() {
  //     $('.slid_projectsss').slick({
  //       dots: false,
  //       slidesToShow: 1
  //     });
  // });
 $('.slid_clients').slick({
   slidesToShow: 6,
   dots: true,
   arrows: false,
   // prevArrow: $('.tolerances_prev'),
   // nextArrow: $('.tolerances_next'),
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         slidesToScroll: 3,
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         slidesToScroll: 2,
         slidesToShow: 2
       }
     }
   ]
 });
 $(window).on('load', function () {
   $('.preloader').fadeOut().end().delay(200).fadeOut('slow');
 });
// menu
(function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    !function (b, c) {
        var d, e, f, g;
        return e = function () {
            function c(c) {
                this.element = c, this._clickEvent = a(this._clickEvent, this), this.element = b(this.element), this.dropdown = this.element.parent().find(".dropdown-menu"), this.element.on("click", this._clickEvent)
            }

            return c.prototype._clickEvent = function (a) {
                return this.dropdown.hasClass("shown") || a.preventDefault(), this.dropdown.toggleClass("shown"), this.element.parent().toggleClass("active")
            }, c
        }(), f = function () {
            function d(c, d, e, f) {
                this.button = c, this.element = d, this.location = e, this.offcanvas = f, this._getFade = a(this._getFade, this), this._getCss = a(this._getCss, this), this._touchEnd = a(this._touchEnd, this), this._touchMove = a(this._touchMove, this), this._touchStart = a(this._touchStart, this), this.endThreshold = 130, this.startThreshold = this.element.hasClass("navbar-offcanvas-right") ? b("body").outerWidth() - 60 : 20, this.maxStartThreshold = this.element.hasClass("navbar-offcanvas-right") ? b("body").outerWidth() - 20 : 60, this.currentX = 0, this.fade = this.element.hasClass("navbar-offcanvas-fade") ? !0 : !1, b(document).on("touchstart", this._touchStart), b(document).on("touchmove", this._touchMove), b(document).on("touchend", this._touchEnd)
            }

            return d.prototype._touchStart = function (a) {
                return this.startX = a.originalEvent.touches[0].pageX, this.element.height(b(c).outerHeight())
            }, d.prototype._touchMove = function (a) {
                var c;
                if (b(a.target).parents(".navbar-offcanvas").length > 0) return !0;
                if (this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                    if (a.preventDefault(), c = a.originalEvent.touches[0].pageX - this.startX, c = this.element.hasClass("navbar-offcanvas-right") ? -c : c, Math.abs(c) < this.element.outerWidth()) return this.element.css(this._getCss(c)), this.element.css(this._getFade(c))
                } else if (this.element.hasClass("in") && (a.preventDefault(), c = a.originalEvent.touches[0].pageX + (this.currentX - this.startX), c = this.element.hasClass("navbar-offcanvas-right") ? -c : c, Math.abs(c) < this.element.outerWidth())) return this.element.css(this._getCss(c)), this.element.css(this._getFade(c))
            }, d.prototype._touchEnd = function (a) {
                var c, d;
                return b(a.target).parents(".navbar-offcanvas").length > 0 ? !0 : (d = a.originalEvent.changedTouches[0].pageX, c = this.element.hasClass("navbar-offcanvas-right") ? Math.abs(d) > this.endThreshold + 50 : d < this.endThreshold + 50, this.element.hasClass("in") && c ? (this.currentX = 0, this.element.removeClass("in").css(this._clearCss()), this.button.removeClass("is-open")) : Math.abs(d - this.startX) > this.endThreshold && this.startX > this.startThreshold && this.startX < this.maxStartThreshold ? (this.currentX = this.element.hasClass("navbar-offcanvas-right") ? -this.element.outerWidth() : this.element.outerWidth(), this.element.toggleClass("in").css(this._clearCss()), this.button.toggleClass("is-open")) : this.element.css(this._clearCss()), this.offcanvas.bodyOverflow())
            }, d.prototype._getCss = function (a) {
                return a = this.element.hasClass("navbar-offcanvas-right") ? -a : a, {
                    "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-webkit-transition-duration": "0s",
                    "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-moz-transition": "0s",
                    "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-o-transition": "0s",
                    transform: "translate3d(" + a + "px, 0px, 0px)",
                    transition: "0s"
                }
            }, d.prototype._getFade = function (a) {
                return this.fade ? {opacity: a / this.element.outerWidth()} : {}
            }, d.prototype._clearCss = function () {
                return {
                    "-webkit-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transform": "",
                    "-moz-transition": "",
                    "-o-transform": "",
                    "-o-transition": "",
                    transform: "",
                    transition: "",
                    opacity: ""
                }
            }, d
        }(), c.Offcanvas = d = function () {
            function d(c) {
                var d, g;
                this.element = c, this.bodyOverflow = a(this.bodyOverflow, this), this._sendEventsAfter = a(this._sendEventsAfter, this), this._sendEventsBefore = a(this._sendEventsBefore, this), this._documentClicked = a(this._documentClicked, this), this._clicked = a(this._clicked, this), this._navbarHeight = a(this._navbarHeight, this), g = this.element.attr("data-target") ? this.element.attr("data-target") : !1, g ? (this.target = b(g), this.target.length && !this.target.hasClass("js-offcanvas-done") && (this.element.addClass("js-offcanvas-has-events"), this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left", this.target.addClass(transform ? "offcanvas-transform js-offcanvas-done" : "offcanvas-position js-offcanvas-done"), this.target.data("offcanvas", this), this.element.on("click", this._clicked), this.target.on("transitionend", function (a) {
                    return function () {
                        return a.target.is(":not(.in)") ? a.target.height("") : void 0
                    }
                }(this)), b(document).on("click", this._documentClicked), this.target.hasClass("navbar-offcanvas-touch") && (d = new f(this.element, this.target, this.location, this)), this.target.find(".dropdown-toggle").each(function () {
                    var a;
                    return a = new e(this)
                }), this.target.on("offcanvas.toggle", function (a) {
                    return function (b) {
                        return a._clicked(b)
                    }
                }(this)))) : console.warn("Offcanvas: `data-target` attribute must be present.")
            }

            return d.prototype._navbarHeight = function () {
                return this.target.is(".in") ? this.target.height(b(c).outerHeight()) : void 0
            }, d.prototype._clicked = function (a) {
                return a.preventDefault(), this._sendEventsBefore(), b(".navbar-offcanvas").not(this.target).removeClass("in"), this.target.toggleClass("in"), this.element.toggleClass("is-open"), this._navbarHeight(), this.bodyOverflow()
            }, d.prototype._documentClicked = function (a) {
                var c;
                return c = b(a.target), c.hasClass("offcanvas-toggle") || 0 !== c.parents(".offcanvas-toggle").length || 0 !== c.parents(".navbar-offcanvas").length || c.hasClass("navbar-offcanvas") || !this.target.hasClass("in") ? void 0 : (a.preventDefault(), this._sendEventsBefore(), this.target.removeClass("in"), this.element.removeClass("is-open"), this._navbarHeight(), this.bodyOverflow())
            }, d.prototype._sendEventsBefore = function () {
                return this.target.hasClass("in") ? this.target.trigger("show.bs.offcanvas") : this.target.trigger("hide.bs.offcanvas")
            }, d.prototype._sendEventsAfter = function () {
                return this.target.hasClass("in") ? this.target.trigger("shown.bs.offcanvas") : this.target.trigger("hidden.bs.offcanvas")
            }, d.prototype.bodyOverflow = function () {
                return this.target.is(".in") ? b("body").addClass("offcanvas-stop-scrolling") : b("body").removeClass("offcanvas-stop-scrolling"), this._sendEventsAfter()
            }, d
        }(), g = function (a) {
            return function () {
                var b, c, d, e;
                return c = document.createElement("div"), e = "translate3d(0px, 0px, 0px)", d = /translate3d\(0px, 0px, 0px\)/g, c.style.cssText = "-webkit-transform: " + e + "; -moz-transform: " + e + "; -o-transform: " + e + "; transform: " + e, b = c.style.cssText.match(d), a.transform = null != b.length
            }
        }(this), b(function () {
            return g(), b('[data-toggle="offcanvas"]').each(function () {
                var a;
                return a = new d(b(this))
            }), b(c).on("resize", function () {
                return b(".navbar-offcanvas.in").each(function () {
                    return b(this).height("").removeClass("in")
                })
            }), b(".offcanvas-toggle").each(function () {
                return b(this).on("click", function (a) {
                    var c, d;
                    return !b(this).hasClass("js-offcanvas-has-events") && (d = b(this).attr("data-target"), c = b(d)) ? (c.height(""), c.removeClass("in"), b("body").css({
                        overflow: "",
                        position: ""
                    })) : void 0
                })
            })
        })
    }(window.jQuery, window)
}).call(this);

// $(document).ready(function(){
//   $("#menu").on("click", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 900);
//   });
// });
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top}, 1500);
  });
});
$(document).ready(function(){
  $(".accordion1").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top}, 1500);
  });
});
// $(function(){ 
//   if ($(window).width() < 768){
//     var navMain = $("#menu"); 
//     navMain.on("click", "a:not([data-toggle])",  null, function () {
//         navMain.collapse('toggle');
//         $(".navigation").toggleClass('is-open');
//         $("body").toggleClass('offcanvas-stop-scrolling');
//         $('body,html').animate({scrollTop: top}, 900);
//     })
//   }
//  });
$(function(){ 
  if ($(window).width() < 768){
    var navMain = $("#menu"); 
    navMain.on("click", "a",  null, function () {
        // navMain.collapse('toggle');
        $(".navbar-offcanvas").toggleClass('in');
        $(".navbar-toggle").toggleClass('is-open');
        $("body").toggleClass('offcanvas-stop-scrolling');
        // $('body,html').animate({scrollTop: top}, 900);
    })
  }
 });
$(document).ready(function () {
    $(".up").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: $(id).offset().top}, 1500);
    });
});
if ($(window).width() > 1200) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
}