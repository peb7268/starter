// tslint:disable-next-line:no-string-literal
window["site_settings"] = {
  animation_timing: 250,
  timeout_speed: 150,
  home_slide_delay: 2000,
  slide_show_factor: 3,
};

$("document").ready(() => {
  init();
});

function init() {
  bindEvents();
  initTestimonials();
  // bindPopups();
  initGrid();
  initFlip();

  // initHomePage();
  initPage(window.location.href);
  // initBlog();
}

function initFlip() {
  const classList = Array.from(document.querySelector("body").classList);

  if (classList.includes("home")) {
    $(".card").flip({
      autoSize: true,
    });

    $(".see-more").on("click", (evt) => {
      evt.preventDefault();
      evt.target.parentElement.parentElement
        .querySelector(".panel")
        .classList.toggle("active");
    });
  }
}

function bindEvents() {
  // bindFunnelButtons();
  bindAccordionEvents();
  // bindWindowGridToggle();
  // bindGalleryEvents();
  // bindContactEvents();

  // bindNavMenuEvents();

  $(".login-register").on("click", (evt) => {
    evt.preventDefault();
    evt.target.parentElement?.classList.toggle("active");
  });
  $("#mobile-nav").on("click", toggleNavMenu);

  $('.footer-toggle').on('click', (evt) => { 
    evt.preventDefault();
    window['toggleFooter']('footer');
  });

  $('.header-top .fa-envelope').on('click', (evt) => {
    evt.preventDefault();
    $.scrollTo('footer', 250);

    window.setTimeout(() => {
      window['toggleFooter']('footer');
    }, 1000);
  });

  $('.videos video').on('click', (evt) => {
    evt.preventDefault();
    console.log('video clicked');
    const src = evt.target.querySelector('source').getAttribute('src');
    const $video = $('.player video');
    
    $video.find('source').attr('src', src);
    $video[0].load();
    $video[0].play();
  });

  $('.icon').on('click', (evt) => { toggleToolTip(evt) });
  $('.rate-title, a.close').on('click', (evt) => { togglePanel(evt) });
}

function calculateBlobContext(currentElem) {
  const childPos = currentElem.offset();
  const parentPos = currentElem.parent().offset();

  return {
    childPos,
    parentPos,
    childOffset: {
      top: childPos.top - parentPos.top,
      left: childPos.left - parentPos.left,
    },
    currentWidth: currentElem[0].offsetWidth,
    currentHeight: currentElem[0].offsetHeight,
  };
}

function bindNavMenuEvents() {
  $("header .menu").append($("<div />", { id: "nav-blob" }));

  const blobRef = document.querySelector("#nav-blob");
  const currentElem = $(".menu li.current_page_item");
  const blobCtx = calculateBlobContext(currentElem);

  const currentWidth = blobCtx.offsetWidth;
  const currentHeight = blobCtx.offsetHeight;

  var childPos = blobCtx.childPos;
  var parentPos = blobCtx.parentPos;

  blobRef.style.width = currentWidth + "px";
  blobRef.style.height = currentHeight + "px";

  $("header .menu li.menu-item a").on("click", (evt) => {
    evt.preventDefault();

    const blobCtx = calculateBlobContext($(evt.target));
    blobRef.style.width = currentWidth + "px";
    blobRef.style.height = currentHeight + "px";

    const rootMenu = evt.target.parentElement.parentElement;
    const parentLi = evt.target.parentElement;
    const dest = evt.target.getAttribute("href");

    currentElem.classList.remove("current_page_item");

    parentLi.classList.add("current_page_item");
  });
}

function toggleNavMenu(evt) {
  if (typeof evt !== "undefined") evt.preventDefault();

  $("header .right .menu").toggleClass('active');
  // $(".header-bottom .nav ul li:last-child").toggle();
}

/**
 * Parses the URL and determines if anything needs to be toggled on or off
 * TODO: make this more flexible and DRY
 * TODO: decouple this from any specific implementation
 */
function initPage(loc) {
  const toggleablePages = [];

  const scrollablePages = ["services", "about", "", "jobs"];

  toggleablePages.forEach((page) => {
    if (loc.indexOf(`/${page}/`) < 0) return;
    const param = window.location.search.split("?toggle=")[1];
    if (typeof param !== "undefined")
      triggerToggleableSection(undefined, `#${param}`);
  });

  scrollablePages.forEach((page) => {
    if (loc.indexOf(`/${page}/`) < 0) return;

    const param = window.location.search.split("?scrollTo=")[1];
    if (typeof param !== "undefined") {
      triggerScrollAction(param);
      return false;
    }
  });
}

function bindWindowLandingPageEvents() {
  $("#new_construction, #replacement")
    .find(".window-series-grid li > img")
    .on("click", (evt) => {
      navigateToSeries(evt);
    });
}

function navigateToSeries(evt) {
  evt.preventDefault();

  const dest = evt.currentTarget.parentElement
    .querySelector("a")
    .getAttribute("href");
  window.location.href = dest;
}

function bindContactEvents() {
  $(".btn.quote").on("click", showContactForm);
  $('.global-contact form input[type="submit"]').on("click", submitForm);
  $(".shade").on("click", retractForm);
}

function bindFunnelButtons() {
  const $funnel_nav = $(".funnel-nav");
  if ($funnel_nav.length < 1) {
    return;
  }
  $funnel_nav
    .find(".btn, .toggle-btn")
    .on("click", (evt) =>
      triggerToggleableSection(evt, evt.target.getAttribute("href"))
    );
}

function bindWindowGridToggle() {
  $(".window-grid-toggle").on("click", toggleWindowGrid);
}

function bindAccordionEvents() {
  $(".accordion li.dropdown .accordion_title").on(
    "click",
    toggleAccordionElem
  );
}

function bindPopups() {
  //Ajaxes only the section of the page in .interior-content - excludes javascript from page
  $(".ajax-popup").fancybox({
    type: "ajax",
    iframe: {
      preload: false,
    },
    image: {
      preload: false,
    },
    ajax: {
      preload: false,
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true,
        },
      },
      dataFilter: function (data) {
        return $(data).filter(".interior-content")[0];
      },
    },
  });

  //Shows the whole page but the css hides the header and .interior-hero via css. Allows Javascrip to be used
  $(".full-screen-popup").fancybox({
    type: "ajax",
    iframe: {
      preload: false,
    },
    image: {
      preload: false,
    },
    ajax: {
      preload: false,
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true,
        },
      },
    },
    afterShow: function (instance, current) {
      if (!window["site_settings"].tooltips_enabled)
        $(".window-style > img").tooltipster({
          theme: "tooltipster-shadow",
          side: "right",
          distance: -35,
          maxWidth: 375,
        });
      window["site_settings"].tooltips_enabled = true;
    },
  });

  $(".fancybox").fancybox({
    preventCaptionOverlap: false,
  });
}

//Contact Dialog
function showContactForm(evt) {
  evt.preventDefault();

  $(".shade").addClass("active");
  window.setTimeout(() => {
    $(".global-contact").addClass("active");
    toggleNavMenu();
  }, 500);
}

function retractForm(evt?) {
  if (typeof evt !== "undefined") evt.preventDefault();

  $(".global-contact").removeClass("active");
  window.setTimeout(() => {
    $(".shade").removeClass("active");
  }, 500);
}

function submitForm(evt) {
  evt.preventDefault();

  retractForm();
}

//Toggle the window glossary grid
function toggleWindowGrid(evt) {
  evt.preventDefault();
  debugger;
  if (!window["site_settings"].tooltips_enabled)
    $(".window-style > img").tooltipster({
      theme: "tooltipster-shadow",
      side: "right",
      distance: -35,
      maxWidth: 375,
    });
  window["site_settings"].tooltips_enabled = true;

  const $windowStyles = $(".window-styles");

  $windowStyles.toggleClass("open");
}

/**
 * looks for a container called funnel nav and then anchor tags with a class of .btn or .toggle-btn whose href is the selector
 * then it toggles on or off .block
 * - set the first block to .active so show it by default
 * - if you use the .toggle-btn as the button class it will toggle on/off active styles for that as well
 * - toggleAbleSection needs to be marked via an id
 *
 * TODOS:
 * - change the signature to accept a selector
 * - change the name to be more indicative of its actual responsibilities
 * - test implementation on windows page and glass
 *
 * @param evt
 */
function triggerToggleableSection(evt?, selector?) {
  if (typeof evt !== "undefined") evt.preventDefault();
  const _selector = selector || evt.currentTarget.getAttribute("href");

  if (selector === "#replacement" || selector === "#new_construction") {
    const $funel_nav = $(".funnel-nav");
    $funel_nav.find(".active").removeClass("active");
    $funel_nav.find(`a[href="${selector}"]`).parent().addClass("active");
  }

  const gallery_selectors = ["#400", "#700", "#900", "#990", "#all"];
  if (gallery_selectors.includes(selector)) {
    let sel = `ws-${selector.split("#")[1]}`;
    $(`.gallery-filter ul li a[href="${sel}"]`).click();
  } else {
    //Toggles standard page elems
    $(".toggle-btn").removeClass("active");
    $(this).toggleClass("active");

    $(".block.active").fadeOut(
      window["site_settings"].animation_timing,
      function () {
        $(this).removeClass("active");
        window.setTimeout(() => {
          $(this).removeAttr("style");
          console.log("selector: ", selector);
          $(selector).fadeIn(
            window["site_settings"].animation_timing,
            function () {
              window.setTimeout(() => {
                $(this).addClass("active").removeAttr("style");
              }, window["site_settings"].timeout_speed);
            }
          );
        }, window["site_settings"].timeout_speed);
      }
    );
  }
}

function triggerScrollAction(param) {
  const _id = `#${param}`;
  window.setTimeout(() => {
    $(window).scrollTo(_id, window["site_settings"].animation_timing * 2);
  }, 500);
}

//On the product detail page
// function initTestimonials() {
//   // console.log('init testimonials');
//   // const $gallery = $(".testimonials");
//   // if ($gallery.length < 1 || $(".slick-slide").length > 0) {
//   //   return;
//   // }

//   // $(".testimonials-list").slick({
//   //   arrows: true,
//   //   dots: true,
//   //   fade: false,
//   //   asNavFor: ".product-gallery-nav",
//   //   centerMode: true,
//   //   variableWidth: true,
//   //   infinite: true,
//   //   adaptiveHeight: true,
//   //   rows: 4
//   // });

  
// }

//Accordion
function toggleAccordionElem(evt) {
  evt.preventDefault();
  console.log("toggleAccordionElem");

  const selector = evt.currentTarget.getAttribute("href");
  const $activeElem = $(".active");

  //If there is an open accordion tile
  if ($activeElem.length > 0) {
    toggleIcon($(evt.currentTarget).find("h4 > i"));
    collapseAndOpen(evt, $activeElem, selector);
  } else {
    //If nothing is open
    $(selector).addClass("active").slideDown();
    toggleIcon($(evt.currentTarget).find("h4 > i"));
  }
}

function toggleIcon($currentIcon) {
  if($currentIcon.hasClass('fa-plus')) { $currentIcon.toggleClass('fa-plus').addClass('fa-minus'); return; }
  if($currentIcon.hasClass('fa-minus')) $currentIcon.toggleClass('fa-minus').addClass('fa-plus'); return;
}

function collapseAndOpen(evt, $activeElem, current_selector) {
  evt.preventDefault();
  collapseCurrentPanel(
    evt,
    $activeElem,
    current_selector,
    200,
    openAccordionItem
  );
}

function collapseCurrentPanel(
  evt,
  $activeElem,
  current_selector,
  speed,
  callback
) {
  const active_section_selector = $activeElem
    .parent()
    .find(".accordion_title")
    .attr("href");

  $(".dropdown .active").removeClass("active");

  //TODO: toggle icon to closed here
  //TODO: remove active class from item
  if (
    activePanelExists(active_section_selector) &&
    clickedSectionIsAlreadyOpen(active_section_selector, current_selector)
  ) {
    $activeElem.slideUp(speed, () => {
      toggleIcon(
        $(current_selector).closest(".dropdown").find("> .accordion_title > i")
      );
    });
    return;
  } else {
    toggleIcon($(evt.target).find("> i"));
    $activeElem.slideUp(speed, callback.call(this, evt, current_selector));
  }
}

function openAccordionItem(evt, selector) {
  //toggle icon to open here
  // toggleIcon($('.active').parent().find('i'), $(evt.target).find('i'), false);
  $(selector).slideDown().addClass("active");
}

function activePanelExists(active_section_selector) {
  return (
    typeof active_section_selector !== "undefined" &&
    active_section_selector.length > 0
  );
}

function clickedSectionIsAlreadyOpen(
  active_section_selector,
  current_selector
) {
  return active_section_selector === current_selector;
}

window.toggleFooter = (selector) => {
  const $elem = $(selector);
  $elem.toggleClass('active');
}

//Gallery
/**
 * https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
 */

let lazyloadContent;
let imageObserver;
let lazyloadThrottleTimeout;

function initGrid() {
  // bindGalleryLazyLoading('.masonry-block');
  $("#flooring-types").isotope({
    // percentPosition: true,
    itemSelector: ".masonry-block",
    layoutMode: "masonry",
    // percentPosition: true,
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });
}

function bindGalleryLazyLoading(selector) {
  document.addEventListener("DOMContentLoaded", function () {
    if ("IntersectionObserver" in window) {
      lazyloadContent = document.querySelectorAll(selector);
      imageObserver = new IntersectionObserver(observeLazyContent);
      lazyloadContent.forEach((image) => imageObserver.observe(image));
    } else {
      lazyloadContent = document.querySelectorAll(".lazy");

      function lazyload() {
        if (lazyloadThrottleTimeout) clearTimeout(lazyloadThrottleTimeout);

        lazyloadThrottleTimeout = setTimeout(() => {
          var scrollTop = window.pageYOffset;
          lazyloadContent.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
            }
          });

          if (lazyloadContent.length === 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });
}

function bindGalleryEvents() {
  const $galleryFilter = $(".gallery-filter");
  if ($galleryFilter.length < 1) return;
  $galleryFilter.find("ul li a").on("click", filterGalleryItems);
}

function observeLazyContent(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      image.classList.remove("lazy");
      imageObserver.unobserve(image);
    }
  });
}

function filterGalleryItems(evt) {
  evt.preventDefault();
  const active_item = evt.currentTarget.getAttribute("href");

  $(".gallery-grid").isotope({
    filter: function () {
      if (active_item === "all") return true;
      if ($(this).hasClass(active_item)) return true;
    },
  });
}

//Blog
function initBlog() {
  if (!isMobile()) initBlogGrid();

  if (!isMobile()) {
    $(".post").on("click", function (evt) {
      evt.preventDefault();
      window.location.href = $(this).find(".permalink").attr("href");
    });
  } else {
    $(".post-excerpt").on("click", function (evt) {
      evt.preventDefault();
      window.location.href = $(this).parent().find(".permalink").attr("href");
    });
  }
}

function initBlogGrid() {
  $(".posts").isotope({
    // percentPosition: true,
    itemSelector: ".post",
    layoutMode: "masonry",
    masonry: {
      columnWidth: 10,
      gutter: 10,
    },
  });
}

/**
 * Home Page
 */
function initHomePage() {
  // window.setTimeout(() => window['transitionSlide'](), (window['site_settings'].home_slide_delay * window['site_settings'].slide_show_factor))
  // initTestimonials();
}

window["transitionSlide"] = function () {
  console.log("transitionSlide");
  window["transitionHomeSlide"]("out");

  // if (typeof window['site_settings'].is_last_slide !== 'undefined' && window['site_settings'].is_last_slide) {
  //     window.setTimeout(() => {
  //         window['transitionHomeSlide']('in');
  //         window.setTimeout(() => { window['transitionSlide']() }, (window['site_settings'].home_slide_delay)); //The async loop that triggers the next slide to come in
  //     }, window['site_settings'].home_slide_delay);
  //     return;
  // }

  window.setTimeout(() => {
    window["transitionHomeSlide"]("in");
    window.setTimeout(() => {
      window["transitionSlide"]();
    }, window["site_settings"].home_slide_delay * window["site_settings"].slide_show_factor); //The async loop that triggers the next slide to come in
  }, window["site_settings"].home_slide_delay);
};

window["transitionHomeSlide"] = function (dir) {
  if (dir === "out") {
    $(".slide-track .transition-in").addClass("transition-out");
    let $oldSlide = $(".slide.transition-in");

    window.setTimeout(() => {
      $oldSlide.hide().removeClass("transition-in transition-out");

      window.setTimeout(() => {
        $oldSlide.removeAttr("style");
      }, window["site_settings"].home_slide_delay);
    }, window["site_settings"].home_slide_delay * window["site_settings"].slide_show_factor);
    return;
  }

  if (dir === "in") {
    let currentSlideIdx = $(".slide-track .transition-in").index();
    let $nextSlide = $(".slide-track .slide").eq(currentSlideIdx + 1);

    $nextSlide.addClass("transition-in");
    window["site_settings"].is_last_slide = $(".slide").length - 1;
  }
};

function initTestimonials() {
  console.log('init testimonials firing');

  $(".testimonials-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    fade: false,
    dots: true,
    appendDots: ".pager",
    arrows: false,
    // rows: 3,
    // slidesPerRow: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

}

function isMobile() {
  return document.querySelector("html").classList.contains("touchevents");
}


// Rates Page
const ID_LMSR = {
  tooltips: {
      packages: "*Buddy Pack includes 60-Min Sessions shared by 2 people.  The primary package owner must always be 1 of the 2 clients scheduled. Non transferable ownership. The \"buddy\" can change each visit.",
      enhancements: "**Aromatherapy & Hot Stones can only be added to Massage; Cupping included with SRS."
  }
}

function toggleToolTip(evt) {
  evt.preventDefault();
  if(evt.currentTarget.nodeName === "BODY") { 
      removeToolTip();
      return false;
  } else {
      const sel       = evt.currentTarget.getAttribute('href').split('#')[1];
      const tooltip   = ID_LMSR.tooltips[sel];

      const activeTooltips = document.querySelectorAll('.tooltip.active');
      
      if(activeTooltips.length === 0) {
          createToolTip(sel, tooltip, 'body'); 
      } else {
          removeToolTip();
      }
  }
}

function createToolTip(sel, tooltipText, appendTo) {
  //Create Elems
  const toolTipWrapper    = document.createElement("div");
  const tooltip           = document.createElement("p");
  const shade             = document.createElement("div");
  
  //Set elem attributes
  toolTipWrapper.setAttribute('id', 'tooltip-wrapper');
  tooltip.innerText = tooltipText;
  shade.setAttribute('id', 'shade')
  
  //Append
  toolTipWrapper.append(tooltip);
  document.querySelector('body').append(shade);
  document.querySelector(appendTo).append(toolTipWrapper);

  window.setTimeout(() => { 
      shade.classList.add('active');
      window.setTimeout(() => { toolTipWrapper.classList.add('active') }, 350);
      $('#shade').on('click', (evt)  => { removeToolTip() });
  }, 150);
}

function removeToolTip() {
  const tooltip = document.querySelectorAll('#tooltip-wrapper');
  if(tooltip.length === 0) { return false; }
}

function togglePanel(evt) {
  evt.preventDefault();
  const $priceList = $('.service-price-list');

  if(evt.currentTarget.classList.contains('close')) {
    $(`.service-info-wrapper, #${evt.target.dataset.target}`).fadeOut(250, () => {
      $('.active').removeClass('active').removeAttr('style');
      $('.rate-wrapper').removeClass('full-width');
      $priceList.removeClass('active');
      $('.col').fadeIn(250);  
    });

    return;
  }

  const target = evt.target.dataset.target;
  
  $('.col').fadeOut(250, ($elem) => {
    $('.rate-wrapper').addClass('full-width');
    $(`.service-info-wrapper, #${evt.target.dataset.target}`).fadeIn(250, () => {
       $(`#${evt.target.dataset.target}`).addClass('active');
       $priceList.addClass('active');
    });
  });

  // elem.classList.toggle('active');
}

