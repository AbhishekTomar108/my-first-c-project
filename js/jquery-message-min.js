!function(o) {
    var e = {};
    o.cookieMessage = function(n) {
        "true" != function(o) {
            var e, n, t, a = document.cookie.split(";");
            for (e = 0; e < a.length; e++)
                if (n = a[e].substr(0, a[e].indexOf("=")),
                t = a[e].substr(a[e].indexOf("=") + 1),
                (n = n.replace(/^\s+|\s+$/g, "")) == o)
                    return unescape(t)
        }((e = o.extend({}, {
            mainMessage: "",
            acceptButton: "Aceptar",
            expirationDays: 20,
            backgroundColor: "#f99d32",
            fontSize: "14px",
            fontColor: "white",
            btnBackgroundColor: "#f2a920",
            btnFontSize: "11px",
            btnFontColor: "white",
            linkFontColor: "#ffff00",
            cookieName: "cookieMessage"
        }, n)).cookieName) && o(document).ready(function() {
            var n;
            n = '<div id="cookie-msg"><span class="msg">' + e.mainMessage + '<a href="" class="btn-aceptar">' + e.acceptButton + "</a></span></div>",
            o("body").append(n),
            o("#cookie-msg").css({
                position: "fixed",
                zIndex: "99999",
                bottom: "0",
                width: "100%",
                "text-align": "center",
                padding: "14px 50px",
                "background-color": e.backgroundColor,
                color: e.fontColor,
                "font-size": e.fontSize
            }),
            o("#cookie-msg a").css({
                color: e.linkFontColor,
                "text-decoration": "underline"
            }),
            o("#cookie-msg a.btn-aceptar").css({
                padding: "5px 10px",
                "border-radius": "5px",
                "background-color": e.btnBackgroundColor,
                color: e.btnFontColor,
                "font-size": e.btnFontSize,
                "text-decoration": "none"
            }),
            o("#cookie-msg a.btn-aceptar").on("click", function() {
                return function(o, e, n) {
                    var t = new Date;
                    t.setDate(t.getDate() + n);
                    var a = escape(e) + (null == n ? "" : "; expires=" + t.toUTCString());
                    document.cookie = o + "=" + a
                }(e.cookieName, !0, e.expirationDays),
                o("#cookie-msg").remove(),
                !1
            })
        })
    }
}(jQuery);
