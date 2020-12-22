"use strict";class Carousel{CarouselSlick(){var e=this;jQuery(".owl-carousel[data-carousel=owl]:visible").each(function(){let s=jQuery(this);s.hasClass("slick-initialized")||(jQuery.browser.mobile?s.data("unslick")||s.slick(e._getSlickConfigOption(this)):s.slick(e._getSlickConfigOption(this))),s.hasClass("instagram-feed")&&s.hasClass("slick-initialized")&&(s.slick("unslick"),s.slick(e._getSlickConfigOption(this)))})}_getSlickConfigOption(e){var s=jQuery(e).data("items"),i=jQuery(e).data("rows")?parseInt(jQuery(e).data("rows")):1,t=jQuery(e).data("desktopslick")?jQuery(e).data("desktopslick"):s,l=jQuery(e).data("desktopsmallslick")?jQuery(e).data("desktopsmallslick"):s,r=jQuery(e).data("tabletslick")?jQuery(e).data("tabletslick"):s,a=jQuery(e).data("landscapeslick")?jQuery(e).data("landscapeslick"):2,o=jQuery(e).data("mobileslick")?jQuery(e).data("mobileslick"):2;let n=s<jQuery(e).children().length,c=2<jQuery(e).children().length,u=!!n&&Boolean(jQuery(e).data("pagination")),d=!!n&&Boolean(jQuery(e).data("nav")),y=!!n&&Boolean(jQuery(e).data("loop")),k=!!n&&Boolean(jQuery(e).data("auto"));var b={};if(b.dots=u,b.arrows=d,b.infinite=y,b.speed=1e3,b.autoplay=k,b.autoplaySpeed=jQuery(e).data("autospeed")?jQuery(e).data("autospeed"):2e3,b.cssEase="ease",b.slidesToShow=s,b.slidesToScroll=s,b.mobileFirst=!0,b.vertical=!1,b.prevArrow='<button type="button" class="slick-prev"><i class="icon-arrow-left icons"></i></button>',b.nextArrow='<button type="button" class="slick-next"><i class="icon-arrow-right icons"></i></button>',b.rtl="rtl"==jQuery("html").attr("dir"),i>1){b.slidesToShow=1,b.slidesToScroll=1,b.rows=i,b.slidesPerRow=s;var h={slidesPerRow:s},j={slidesPerRow:t},Q={slidesPerRow:l},p={slidesPerRow:r},w=jQuery(e).data("unslick")?"unslick":{slidesPerRow:a},g=jQuery(e).data("unslick")?"unslick":{slidesPerRow:o}}else var h={slidesToShow:s,slidesToScroll:s},j={slidesToShow:t,slidesToScroll:t},Q={slidesToShow:l,slidesToScroll:l},p={slidesToShow:r,slidesToScroll:r},w=jQuery(e).data("unslick")?"unslick":{slidesToShow:a,slidesToScroll:a},g=jQuery(e).data("unslick")?"unslick":{slidesToShow:o,slidesToScroll:o};var f=jQuery(e).data("nav")?{arrows:!1,dots:c}:"";return w=jQuery(e).data("unslick")?w:jQuery.extend(!0,w,f),g=jQuery(e).data("unslick")?g:jQuery.extend(!0,g,f),b.responsive=[{breakpoint:1600,settings:h},{breakpoint:1199,settings:j},{breakpoint:991,settings:Q},{breakpoint:767,settings:p},{breakpoint:575,settings:w},{breakpoint:0,settings:g}],b}getSlickTabs(){var e=this;jQuery("ul.nav-tabs li a").on("shown.bs.tab",s=>{let i=jQuery(jQuery(s.target).attr("href")).find(".owl-carousel[data-carousel=owl]:visible");let t=jQuery(jQuery(s.relatedTarget).attr("href")).find(".owl-carousel[data-carousel=owl]");t.hasClass("slick-initialized")&&t.slick("unslick");i.hasClass("slick-initialized")||i.slick(e._getSlickConfigOption(i))})}sellerProductTabs(){}}class Slider{tbaySlickSlider(){jQuery(".style-horizontal, .style-vertical").find(".flex-control-thumbs").each(function(){if(0!=jQuery(this).children().length){var e={};e.vertical=jQuery(this).parents(".style-horizontal").length<1,e.slidesToShow=jQuery(this).parent(".woocommerce-product-gallery").data("columns"),e.infinite=!1,e.focusOnSelect=!0,e.settings="unslick",e.prevArrow='<span class="owl-prev"></span>',e.nextArrow='<span class="owl-next"></span>',e.rtl=jQuery("body").hasClass("rtl"),e.responsive=[{breakpoint:1200,settings:{vertical:!1,slidesToShow:4}}],jQuery(this).slick(e)}})}}class Layout{tbaySlickLayoutSlide(){if(jQuery(".tbay-slider-for").length>0){var e={},s={};e.rtl=s.rtl=jQuery("body").hasClass("rtl"),e.slidesToShow=1;var i=1;jQuery(".tbay-slider-for").data("number")>0&&(e.slidesToShow=jQuery(".tbay-slider-for").data("number"),i=jQuery(".tbay-slider-for").data("number")-1),e.arrows=!0,e.infinite=!0,e.slidesToScroll=1,e.prevArrow='<span class="slick-prev"><i class="icon-arrow-left icons"></i></span>',e.nextArrow='<span class="slick-next"><i class="icon-arrow-right icons"></i></span>',e.responsive=[{breakpoint:1025,settings:{vertical:!1,slidesToShow:i}},{breakpoint:480,settings:{vertical:!1,slidesToShow:1}}],jQuery(".tbay-slider-for").slick(e),jQuery(".single-product .tbay-slider-for .slick-slide").length&&jQuery(".single-product .tbay-slider-for .slick-track").addClass("woocommerce-product-gallery__image single-product-main-image")}}}class Slider_gallery{tbay_slider_gallery(){var e={};e.slidesToShow=1,e.slidesToScroll=1,e.prevArrow='<button type="button" class="slick-prev"><i class="tb-icon tb-icon-chevron-left"></i></button>',e.nextArrow='<button type="button" class="slick-next"><i class="tb-icon tb-icon-chevron-right"></i></button>',this.tbay_slider_gallery_hover(e),jQuery(document.body).on("tbay_gallery_resize",()=>{jQuery(".tbay-product-slider-gallery").each(function(e,s){jQuery(this).hasClass("slick-initialized")&&(jQuery(this).slick("unslick"),jQuery(this).removeAttr("style"))})})}tbay_slider_gallery_hover(e){jQuery(".has-slider-gallery").find(".product-image").hover(function(s){let i=jQuery(s.currentTarget);i.next(".tbay-product-slider-gallery").hasClass("slick-initialized")||(i.next(".tbay-product-slider-gallery").css("height",i.parent().outerHeight()),i.next(".tbay-product-slider-gallery").slick(e))})}}jQuery(document).ready(function(){var e=new Carousel,s=new Slider,i=new Layout,t=new Slider_gallery;e.CarouselSlick(),e.getSlickTabs(),s.tbaySlickSlider(),i.tbaySlickLayoutSlide(),t.tbay_slider_gallery()}),jQuery(document.body).on("tbay_display_mode",()=>{var e=new Slider_gallery;e.tbay_slider_gallery()}),jQuery(window).on("load",function(){jQuery(document.body).on("tbay_instagramfeed_slick",()=>{var e=new Carousel;e.CarouselSlick()})}),jQuery(document.body).on("tbay_quick_view",()=>{var e=new Carousel;e.CarouselSlick()});var CustomSlickHandler=function(e,s){(new Carousel).CarouselSlick()};jQuery(window).on("elementor/frontend/init",function(){jQuery.isArray(besa_settings.elements_ready.slick)&&jQuery.each(besa_settings.elements_ready.slick,function(e,s){elementorFrontend.hooks.addAction("frontend/element_ready/besa-"+s+".default",CustomSlickHandler)})});
