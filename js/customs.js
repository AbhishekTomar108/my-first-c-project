function google_rank_form_validation_v2(e) {
    var t = $("form#" + e + " input[name=name]").val(),
        o = $("form#" + e + " input[name=lname]").val(),
        a = $("form#" + e + " input[name=phone]").val(),
        n = $("form#" + e + " input[name=email]").val(),
        s = $("form#" + e + " input[name=website]").val(),
        i = $("form#" + e + " textarea[name=message]").val(),
        r = $("form#" + e + " select[name=service] option:selected").val(),
        l = $("form#" + e + " select[name=experience] option:selected").val();
    if (void 0 === o) o = "";
    if (void 0 === s) s = "";
    if (void 0 === i) i = "";
    if (void 0 === r) r = "";
    if (void 0 === $("form#" + e + " input[name=company]").val());
    if (void 0 === $("form#" + e + " input[name=monthly_budget]").val());
    if (void 0 === l) l = "";
    else;
    return "" == (t = t + " " + o).trim() ? ($("form#" + e + "  .message").text("Please Enter Name"), $("form#" + e + "  input[name=name]").focus(), !1) : "" == a.trim() ? ($("form#" + e + "  .message").text("Please Enter Phone Number"), $("form#" + e + "  input[name=phone]").focus(), !1) : "" == n.trim() ? ($("form#" + e + "  .message").text("Please Enter Your Email"), $("form#" + e + "  input[name=email]").focus(), !1) : "" == n.trim() || /^[a-zA-Z0-9.!#$%&â€™*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n) ? !(!webvalidURL(s) && "" != s) || ($("form#" + e + "  .message").text("Please Enter Valid Website URL"), $("form#" + e + "  input[name=website]").focus(), !1) : ($("form#" + e + "  .message").text("Please Enter Your Valid Email"), $("form#" + e + "  input[name=email]").focus(), !1)
}

function google_rank_form_validation_v3(e) {
    var t = $("form#" + e + " input[name=name]").val(),
        o = $("form#" + e + " input[name=lname]").val(),
        a = $("form#" + e + " input[name=phone]").val(),
        n = $("form#" + e + " input[name=email]").val(),
        s = $("form#" + e + " input[name=website]").val(),
        i = $("form#" + e + " textarea[name=message]").val(),
        r = $("form#" + e + " select[name=service] option:selected").val(),
        l = $("form#" + e + " select[name=experience] option:selected").val(),
        m = $("form#" + e + " input[name=company]").val(),
        p = $("form#" + e + " input[name=monthly_budget]").val();
    void 0 === o && (o = ""), t = t + " " + o, void 0 === s && (s = ""), void 0 === i && (i = ""), void 0 === r && (r = ""), void 0 === m && (m = ""), void 0 === p && (p = ""), void 0 === l ? l = "" : p = l, void 0 === $("form#" + e + " #recaptchaResponse").val() && $("form#" + e + " #recaptchaResponse1").val();
    var c = $("form#" + e + " input[name=form_title]").val(),
        u = $("form#" + e + " input[name=current_page_url]").val();
    return "" == t.trim() ? ($("form#" + e + "  .message").text("Please Enter Name"), $("form#" + e + "  input[name=name]").focus(), !1) : "" == a.trim() ? ($("form#" + e + "  .message").text("Please Enter Phone Number"), $("form#" + e + "  input[name=phone]").focus(), !1) : "" == n.trim() ? ($("form#" + e + "  .message").text("Please Enter Your Email"), $("form#" + e + "  input[name=email]").focus(), !1) : "" == n.trim() || /^[a-zA-Z0-9.!#$%&â€™*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n) ? webvalidURL(s) || "" == s ? ($("form#" + e + "  .message").html("Please Wait..."), $("form#" + e + ' :input[type="submit"]').prop("disabled", !0), grecaptcha.ready(function() {
        grecaptcha.execute("6LdpZ8cUAAAAANoJxUDJm_rEJ93c4A--4vu4XLv3", {
            action: "contact_form_v3_action"
        }).then(function(o) {
            $("form#" + e).prepend('<input type="hidden" name="g-recaptcha-response" value="' + o + '">'), $.post("includes/form-process.php", {
                name: t,
                phone: a,
                email: n,
                website: s,
                monthly_budget: p,
                company: m,
                service: r,
                message: i,
                form_title: c,
                current_page_url: u,
                token: o,
                form_type: "v3_contact_form"
            }, function(t) {
                "success" == t ? ($("form#" + e).each(function() {
                    this.reset()
                }), gtag("event", "conversion", {
                    send_to: "AW-973940760/H2QICLKt8o8BEJjQtNAD"
                }), ga("send", "event", c, "Inquiry", u)) : ($("form#" + e + "  .message").text(t), $("form#" + e + ' :input[type="submit"]').prop("disabled", !1))
            })
        })
    }), !1) : ($("form#" + e + "  .message").text("Please Enter Valid Website URL"), $("form#" + e + "  input[name=website]").focus(), !1) : ($("form#" + e + "  .message").text("Please Enter Your Valid Email"), $("form#" + e + "  input[name=email]").focus(), !1)
}

function webvalidURL(e) {
    return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
}

function package_signup(e, t) {
    $("#signupletscon").show(), $("#packMessage").html(""), $("#show-form").fadeIn("slow"), $("form#signupletscon input[name=packagetitle]").val(e), $("form#signupletscon input[name=packagetype]").val(t), jQuery('html, body').animate({
        scrollTop: jQuery("#show-form").offset().top
    }, 2000);
}

function package_insta_mojo_buy(e, t) {
    $("form#instamojo-signupletscon select option").hide(), $("form#instamojo-signupletscon select option").attr("disabled", "disabled"), $("form#instamojo-signupletscon select").val(""), $("#instamojo-signupletscon").show(), $("#instamojo-packMessage").html(""), $("#show-instamojo-form").fadeIn("slow"), $("form#instamojo-signupletscon input[name=packagetitle]").val(e), $("form#instamojo-signupletscon input[name=product_name]").val(t), $("form#instamojo-signupletscon select option.op-" + t.toLowerCase()).show(), $("form#instamojo-signupletscon select option.op-" + t.toLowerCase()).removeAttr("disabled")
}

function validatePhone(e) {
    return !!/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(e)
}

function package_signuplets_form_validation(e) {
    var t = document.createElement("script"),
        o = document.createTextNode("gtag('event', 'conversion', {'send_to': 'AW-973940760/H2QICLKt8o8BEJjQtNAD'})");
    t.appendChild(o);
    var a = "form#" + e,
        n = $(a + " input[name=name]").val(),
        s = $(a + " input[name=email]").val(),
        i = $(a + " input[name=phone]").val(),
        r = $(a + " input[name=website]").val(),
        y = $(a + " input[name=service_intersted]").val(),
        z = $(a + " input[name=budgets]").val(),
        l = $(a + " textarea[name=message]").val(),
        m = $(a + " input[name=packagetype]").val(),
        p = $(a + " input[name=packagetitle]").val(),
        c = $(a + " input[name=current_page_url]").val();
    return $("#packMessage").removeClass("success").addClass("error"), "" == n.trim() ? ($("#packMessage").text("Please Enter Your Name"), $(a + " input[name=name]").focus(), !1) : "" == s.trim() ? ($("#packMessage").text("Please Enter Your Email"), $(a + " input[name=email]").focus(), !1) : /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(s) ? "" == i.trim() ? ($("#packMessage").text("Please Enter Your Phone Number"), $(a + " input[name=phone]").focus(), !1) : validatePhone(i) ? "" == r.trim() ? ($("#packMessage").text("Please Enter Your Website"), $(a + " input[name=website]").focus(), !1) : ($("#packMessage").html("Please Wait..."), $(a + ' :input[type="submit"]').prop("disabled", !0), $.ajax({
        type: "POST",
        url: "includes/form-process.php",
        data: "name=" + n + "&form_type=package&phone=" + i + "&website=" + r + "&budgets=" + z + "&service_intersted=" + y + "&packagetype=" + m + "&packagetitle=" + p + "&current_page_url=" + c + "&email=" + s + "&message=" + l,
        success: function(e) {
            "success" == e ? ($("#packMessage").text("Thank you for contacting us we will get back to you soon."), gtag("event", "conversion", {
                send_to: "AW-973940760/H2QICLKt8o8BEJjQtNAD"
            }), document.getElementsByTagName("head")[0].appendChild(t), ga("send", "event", "package-form", "Request", "package.html"), window.location.href = "https://www.ezrankings.com/thank-you.html", $(a + ' :input[type="submit"]').prop("disabled", !1), $("#packMessage").removeClass("error").addClass("success")) : $("#packMessage").text("Sorry there was an error sending your form."), $(a + " input[name=name]").val(""), $(a + " input[name=phone]").val(""), $(a + " input[name=website]").val(""), $(a + " input[name=email]").val(""), $(a + " textarea[name=message]").val(""), $(a).hide()
        }
    }), !1) : ($("#packMessage").text("Please Enter Valid Phone Number"), $(a + " input[name=phone]").focus(), !1) : ($("#packMessage").text("Please Enter Valid Email Address"), $(a + " input[name=email]").focus(), !1)
}
$(document).ready(function() {
        $(window).scroll(function() {
            $(this).scrollTop() > 300 ? $(".ftr_cta_blk, .google-rating-1, #alert-box, .sidebar-contact .toggle, #return-to-top").fadeIn() : $(".ftr_cta_blk, .google-rating-1, #alert-box, .sidebar-contact .toggle, #return-to-top").fadeOut()
        })
    }), $(window).scroll(function() {
        $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(30) : $("#return-to-top").fadeOut(30)
    }), $("#return-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    }), $(window).width() < 768 && ($(".navbar-nav > li .plus-tab").click(function() {
            $(this).next(".submenu").slideToggle(), $(this).next(".submenu").css("display", 'block'), $(this).toggleClass("rotate"), $(".navbar-nav > li .plus-tab ").removeClass("rotate"), $(this).find(".submenu .plus-tab").removeClass("rotate")
        })), $(".top-nav li, .footer-colom li").click(function() {
            $(this).find(".dropdown, .footer-dropdown").slideToggle(), $(this).siblings().find(".dropdown, .footer-dropdown").hide()
        }), $(".video-testimonial").remove(), jQuery(document).ready(function() {
            jQuery(".toggle").click(function() {
                jQuery(".sidebar-contact").toggleClass("active"), jQuery(".toggle").toggleClass("active")
            })
        }), $(".seo-result-slide").owlCarousel({
            dots: !1,
            nav: !1,
            loop: !0,
            autoplayTimeout: 3500,
            autoplayHoverPause: !0,
            responsiveClass: !0,
            margin: 0,
            autoplay: !0,
            items: 1
        }), $(".service-slider").owlCarousel({
            dots: !1,
            nav: !0,
            loop: !0,
            margin: 0,
            autoplay: !0,
            autoplayTimeout: 3500,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1,
                    loop: !0
                },
                767: {
                    items: 2,
                    loop: !0
                },
                1024: {
                    items: 3,
                    loop: !0
                }
            }
        }), $(".testimonials-slide").owlCarousel({
            dots: !1,
            nav: !0,
            loop: !0,
            margin: 10,
            items: 4,
            autoplay: !0,
            autoplayTimeout: 3500,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1,
                    loop: !0
                },
                767: {
                    items: 2,
                    loop: !0
                },
                1024: {
                    items: 4,
                    loop: !0
                }
            }
        }), $(".single-project").owlCarousel({
            dots: !1,
            nav: !0,
            loop: !0,
            margin: 0,
            autoplay: !0,
            autoplayTimeout: 3500,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1,
                    loop: !0
                },
                767: {
                    items: 1,
                    loop: !0
                }
            }
        }), $("#portfolio-slider").owlCarousel({
            dots: !1,
            nav: !0,
            loop: !0,
            margin: 0,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 2500,
            autoplayHoverPause: !0
        }), $("#clients").owlCarousel({
            loop: !1,
            margin: 10,
            autoplay: !0,
            nav: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        }), $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus")
        }), $(window).scroll(function() {
            $(this).scrollTop() > 120 ? $("#sticky-header").addClass("sticky") : $("#sticky-header").removeClass("sticky")
        }), $(document).ready(function() {
            $("#send-perposal").click(function() {
                var e = $("form#ready_to_grow_form input[name=website]").val();
                if ("" == e) $("form#ready_to_grow_form .message").html("Please Enter Your Website"), $("form#ready_to_grow_form input[name=website]").focus();
                else {
                    if (!webvalidURL(e) && "" != e) return $("form#ready_to_grow_form .message").text("Please Enter Valid Website URL"), $("form#ready_to_grow_form input[name=website]").focus(), !1;
                    $(".website-area").hide(), $(".hidden-form").show(), $("form#ready_to_grow_form .message").html(""), $(".hidden-form").css("opacity", "1"), $(".hidden-form").css("transform", "scale(1)"), $(this).addClass("z-index")
                }
            })
        }), function(e) {
            e(document).ready(function() {
                e(".ac-label").click(function(t) {
                    t.preventDefault(), $check = e(this).prev(), $check.prop("checked") ? $check.prop("checked", !1) : $check.prop("checked", !0)
                })
            })
        }(jQuery), $(".close-frm, .close-package-form").click(function() {
            $("#show-form, #show-instamojo-form").fadeOut("slow")
        }), $(".insta-mojo-5555").click(function() {
            $(" #show-instamojo-form").fadeIn("slow")
        }), document.getElementById("checbox").onclick = function() {
            if (this.checked) {
                var e = document.getElementsByClassName("monthly-view"),
                    t = document.getElementsByClassName("yearly-view");
                for (o = 0; o < e.length; o++) e[o].style.display = "none";
                for (a = 0; a < t.length; a++) t[a].style.display = "block"
            } else {
                var o, a;
                for (e = document.getElementsByClassName("yearly-view"), t = document.getElementsByClassName("monthly-view"), o = 0; o < e.length; o++) e[o].style.display = "none";
                for (a = 0; a < t.length; a++) t[a].style.display = "block"
            }
        }


  $('.click-div a').click(function(){
       $('.click-div ').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
         $('.uix-tabs__content').removeClass('active').addClass('hide');
         $('#'+tagid).addClass('active').removeClass('hide');

 $('.click-div').click(function(){
        $('.click-div').removeClass('active');
        $(this).addClass('active');
    });
        });

$('#clients-new-silder').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('#recent-silder').owlCarousel({
           loop:false,
           margin:20,
           nav:true,
           responsive:{
               0:{
                   items:1
               },
               600:{
                   items:1
               },
               1000:{
                   items:1
               }
           }
         });
 $('#case-study-silder').owlCarousel({
 loop:true,
 margin:10,
 nav:true,
 responsive:{
 0:{
	items:1
 },
 600:{
	items:1
 },
 1000:{
	items:1
 }
 }
 });
 $('#get-app').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.count').each(function() {
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function(now) {
			$(this).text(Math.ceil(now));
		}
	});
});
	
//read more read less
function showhide() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  }
}
$(".webslider").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 3,
			nav: false
		},
		1000: {
			items: 5,
			nav: true,
			loop: false
		}
	}
});
$(document).ready(function() {
	$("#knowmore").click(function() {
		$("#AllCOn").slideToggle("slow");
	});
});
$(document).ready(function () {
    $("#send-perposal-two").click(function () {
        var e = $("form#ready_to_grow_form_two input[name=website]").val();
        if ("" == e) $("form#ready_to_grow_form_two .message").html("Please Enter Your Website"), $("form#ready_to_grow_form_two input[name=website]").focus();
        else {
            if (!webvalidURL(e) && "" != e) return $("form#ready_to_grow_form_two .message").text("Please Enter Valid Website URL"), $("form#ready_to_grow_form_two input[name=website]").focus(), !1;
            $("#ready_to_grow_form_two .website-area").hide(), $("#ready_to_grow_form_two .hidden-form").show(), $("form#ready_to_grow_form_two .message").html(""), $("#ready_to_grow_form_two .hidden-form").css("opacity", "1"), $("#ready_to_grow_form_two .hidden-form").css("transform", "scale(1)"), $(this).addClass("z-index");
        }
    });
});
$(".circle_percent").each(function() {
	var $this = $(this),
	$dataV = $this.data("percent"),
	$dataDeg = $dataV * 3.6,
	$round = $this.find(".round_per");
	//alert($dataV);
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({
		Counter: $dataV
	}, {
	duration: 2000,
	easing: 'swing',
	step: function(now) {
		$this.find(".percent_text").text(Math.ceil(now) + "%");
	}
	});
	if ($dataV >= 51) {
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function() {
			$this.addClass("percent_more");
		}, 1000);
		setTimeout(function() {
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		}, 1000);
	}
});
$(".SEOTool").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 3,
			nav: false
		},
		1000: {
			items: 4,
			nav: true,
			loop: false
		}
	}
});
$(document).ready(function() {
	// set up hover panels
	// although this can be done without JavaScript, we've attached these events
	// because it causes the hover to be triggered when the element is tapped on a touch device
	$('.hoverp').hover(function() {
		$(this).addClass('flip');
	}, function() {
		$(this).removeClass('flip');
	});
});
$(".case-study-silder-new").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	smartSpeed: 1000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: false
		}
	}
});

$(document).ready(function () {
	var owl = $('.backend');
	owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		autoplay: true,
		slideTransition: 'linear',
		autoplaySpeed: 3000,
		autoplayTimeout:3000,
		fluidSpeed:true,
		autoplayHoverPause: false

	});

	var owl = $('.frontend');
	owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		autoplay: true,
		slideTransition: 'linear',
		autoplaySpeed: 3000,
		autoplayTimeout:3000,
		fluidSpeed:true,
		autoplayHoverPause: false

	});

	var owl = $('.Database');
	owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		autoplay: true,
		slideTransition: 'linear',
		autoplaySpeed: 3000,
		autoplayTimeout:3000,
		fluidSpeed:true,
		autoplayHoverPause: false

	});

	var owl = $('.Design');
	owl.owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		autoplay: true,
		slideTransition: 'linear',
		autoplaySpeed: 3000,
		autoplayTimeout:3000,
		fluidSpeed:true,
		autoplayHoverPause: false

	});

});
$('.moreless-button2').click(function() {
	$('.moretext2').slideToggle();
	if ($('.moreless-button2').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });

  $('.moreless-button').click(function() {
	$('.moretext').slideToggle();
	if ($('.moreless-button').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });


  $('.moreless-button3').click(function() {
	$('.moretext3').slideToggle();
	if ($('.moreless-button3').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });
  $('.moreless-button4').click(function() {
	$('.moretext4').slideToggle();
	if ($('.moreless-button4').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });

  $('.moreless-button5').click(function() {
	$('.moretext5').slideToggle();
	if ($('.moreless-button5').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });
  $('.moreless-button6').click(function() {
	$('.moretext6').slideToggle();
	if ($('.moreless-button6').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });
  $('.moreless-button7').click(function() {
	$('.moretext7').slideToggle();
	if ($('.moreless-button7').text() == "Read more") {
	  $(this).text("Read less")
	} else {
	  $(this).text("Read more")
	}
  });

function show_industry(str){
	if(str !=''){
		$('#industry').html('');
		$.ajax({
        type: "POST",
        url: "includes/get_industry.php",
        data: "action=industry&country=" + str,
        success: function(data) {
			$('#industry').html(data);
			$('#category').html('<option value="-1">Select Type</option>');
		}
		});
	}
}
function show_category_type(str){
	var country = $('#country option:selected').val();
    var industry = str;
	if(str !=''){
		$('#category').html('');
		$.ajax({
        type: "POST",
        url: "includes/get_industry.php",
        data: "action=category&country=" + country+"&industry=" + industry,
        success: function(data) {
			console.log(data);
			$('#category').html(data);
		}
		});
	}
}
$(".SMOTools").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 3,
            nav: false,
        },
        1000: {
            items: 2,
            nav: true,
            loop: false,
        },
    },
});
function sussubmenu(ele){
    $(ele).next(".subdropdown-menuu").slideToggle()
    return false;
}

 function showhide(str,str1) {
         var moreText = document.getElementById(str);
         var btnText = document.getElementById(str1);
         
         if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more"; 
         moreText.style.display = "none";
         } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less"; 
         moreText.style.display = "inline";
         }
}
         
         
     
         function showtooltip(str){
            var moveLeft = '';
			var moveDown = '';
            $('div.pop-up'+str).show();
         }
       $(function() {
         var moveLeft = 20;
         var moveDown = 10;
         
         $('a.trigger').hover(function(e) {
           //$('div.pop-up').show();
         
         }, function() {
           $('div.pop-up').hide();
         });
         
         $('a.trigger').mousemove(function(e) {
           $("div.pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
         });
         
         });
         
         
         $("#awarD").owlCarousel({
         
          items: 9,
              loop: true,
              margin: 10,
              autoplay: true,
              slideTransition: 'linear',
              autoplayTimeout: 0,
              autoplaySpeed: 13000,
              autoplayHoverPause: false,
         
         responsiveClass: true,
         responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 9,
            nav: false,
            loop: false
          }
         }
         });
        
function showhide(str,str1) {
	var moreText = document.getElementById(str);
	var btnText = document.getElementById(str1);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}


(function (window) {

    'use strict';

    window.code = window.code || {};

    window.code.lightweightYoutubePlayer = function () {

        var dataYoutubeVideos = '[data-youtube]';

        var youtubeVideos = [...document.querySelectorAll(dataYoutubeVideos)];

        function init() {
            youtubeVideos.forEach(function(element) {
                bindYoutubeVideoEvent(element);
            });
        }

        function bindYoutubeVideoEvent(element) {
            var button = element.querySelector('[data-youtube-button]');

            button.addEventListener('click', createIframe);
        }

        function createIframe(event) {
            var url = event.target.dataset.youtubeButton;
            var youtubePlaceholder = event.target.parentNode;

            var htmlString = '<div class="video__youtube"> <iframe class="video__iframe" src="' + url + '?autoplay=1" width="100%" height="315" frameborder="0" allowfullscreen></iframe></div>';

            youtubePlaceholder.style.display = 'none';
            youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
            youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
        }

        return {
           init: init
        }
    };

})(window)

ready();

function ready() {
    var lightweightYoutubePlayer = new code.lightweightYoutubePlayer()

    if (document.readyState != 'loading') {
        page.init()
    } else {
        document.addEventListener('DOMContentLoaded', lightweightYoutubePlayer.init);
    }
}