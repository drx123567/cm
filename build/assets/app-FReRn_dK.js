function _mergeNamespaces(ze, Qr) {
    for (var Kr = 0; Kr < Qr.length; Kr++) {
        const Wr = Qr[Kr];
        if (typeof Wr != "string" && !Array.isArray(Wr)) {
            for (const Jr in Wr)
                if (Jr !== "default" && !(Jr in ze)) {
                    const Yr = Object.getOwnPropertyDescriptor(Wr, Jr);
                    Yr && Object.defineProperty(ze, Jr, Yr.get ? Yr : {
                        enumerable: !0,
                        get: () => Wr[Jr]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(ze, Symbol.toStringTag, {
        value: "Module"
    }))
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(ze) {
    return ze && ze.__esModule && Object.prototype.hasOwnProperty.call(ze, "default") ? ze.default : ze
}
var htmx_min$1 = {
    exports: {}
};
(function(module) {
    (function(ze, Qr) {
        module.exports ? module.exports = Qr() : ze.htmx = ze.htmx || Qr()
    }
    )(typeof self < "u" ? self : commonjsGlobal, function() {
        return function() {
            var Q = {
                onLoad: F,
                process: zt,
                on: de,
                off: ge,
                trigger: ce,
                ajax: Nr,
                find: C,
                findAll: f,
                closest: v,
                values: function(ze, Qr) {
                    var Kr = dr(ze, Qr || "post");
                    return Kr.values
                },
                remove: _,
                addClass: z,
                removeClass: n,
                toggleClass: $,
                takeClass: W,
                defineExtension: Ur,
                removeExtension: Br,
                logAll: V,
                logNone: j,
                logger: null,
                config: {
                    historyEnabled: !0,
                    historyCacheSize: 10,
                    refreshOnHistoryMiss: !1,
                    defaultSwapStyle: "innerHTML",
                    defaultSwapDelay: 0,
                    defaultSettleDelay: 20,
                    includeIndicatorStyles: !0,
                    indicatorClass: "htmx-indicator",
                    requestClass: "htmx-request",
                    addedClass: "htmx-added",
                    settlingClass: "htmx-settling",
                    swappingClass: "htmx-swapping",
                    allowEval: !0,
                    allowScriptTags: !0,
                    inlineScriptNonce: "",
                    attributesToSettle: ["class", "style", "width", "height"],
                    withCredentials: !1,
                    timeout: 0,
                    wsReconnectDelay: "full-jitter",
                    wsBinaryType: "blob",
                    disableSelector: "[hx-disable], [data-hx-disable]",
                    useTemplateFragments: !1,
                    scrollBehavior: "smooth",
                    defaultFocusScroll: !1,
                    getCacheBusterParam: !1,
                    globalViewTransitions: !1,
                    methodsThatUseUrlParams: ["get"],
                    selfRequestsOnly: !1,
                    ignoreTitle: !1,
                    scrollIntoViewOnBoost: !0,
                    triggerSpecsCache: null
                },
                parseInterval: d,
                _: t,
                createEventSource: function(ze) {
                    return new EventSource(ze,{
                        withCredentials: !0
                    })
                },
                createWebSocket: function(ze) {
                    var Qr = new WebSocket(ze,[]);
                    return Qr.binaryType = Q.config.wsBinaryType,
                    Qr
                },
                version: "1.9.12"
            }
              , r = {
                addTriggerHandler: Lt,
                bodyContains: se,
                canAccessLocalStorage: U,
                findThisElement: xe,
                filterValues: yr,
                hasAttribute: o,
                getAttributeValue: te,
                getClosestAttributeValue: ne,
                getClosestMatch: c,
                getExpressionVars: Hr,
                getHeaders: xr,
                getInputValues: dr,
                getInternalData: ae,
                getSwapSpecification: wr,
                getTriggerSpecs: it,
                getTarget: ye,
                makeFragment: l,
                mergeObjects: le,
                makeSettleInfo: T,
                oobSwap: Ee,
                querySelectorExt: ue,
                selectAndSwap: je,
                settleImmediately: nr,
                shouldCancel: ut,
                triggerEvent: ce,
                triggerErrorEvent: fe,
                withExtensions: R
            }
              , w = ["get", "post", "put", "delete", "patch"]
              , i = w.map(function(ze) {
                return "[hx-" + ze + "], [data-hx-" + ze + "]"
            }).join(", ")
              , S = e("head")
              , q = e("title")
              , H = e("svg", !0);
            function e(ze, Qr) {
                return new RegExp("<" + ze + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + ze + ">",Qr ? "gim" : "im")
            }
            function d(ze) {
                if (ze == null)
                    return;
                let Qr = NaN;
                return ze.slice(-2) == "ms" ? Qr = parseFloat(ze.slice(0, -2)) : ze.slice(-1) == "s" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 : ze.slice(-1) == "m" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 * 60 : Qr = parseFloat(ze),
                isNaN(Qr) ? void 0 : Qr
            }
            function ee(ze, Qr) {
                return ze.getAttribute && ze.getAttribute(Qr)
            }
            function o(ze, Qr) {
                return ze.hasAttribute && (ze.hasAttribute(Qr) || ze.hasAttribute("data-" + Qr))
            }
            function te(ze, Qr) {
                return ee(ze, Qr) || ee(ze, "data-" + Qr)
            }
            function u(ze) {
                return ze.parentElement
            }
            function re() {
                return document
            }
            function c(ze, Qr) {
                for (; ze && !Qr(ze); )
                    ze = u(ze);
                return ze || null
            }
            function L(ze, Qr, Kr) {
                var Wr = te(Qr, Kr)
                  , Jr = te(Qr, "hx-disinherit");
                return ze !== Qr && Jr && (Jr === "*" || Jr.split(" ").indexOf(Kr) >= 0) ? "unset" : Wr
            }
            function ne(ze, Qr) {
                var Kr = null;
                if (c(ze, function(Wr) {
                    return Kr = L(ze, Wr, Qr)
                }),
                Kr !== "unset")
                    return Kr
            }
            function h(ze, Qr) {
                var Kr = ze.matches || ze.matchesSelector || ze.msMatchesSelector || ze.mozMatchesSelector || ze.webkitMatchesSelector || ze.oMatchesSelector;
                return Kr && Kr.call(ze, Qr)
            }
            function A(ze) {
                var Qr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
                  , Kr = Qr.exec(ze);
                return Kr ? Kr[1].toLowerCase() : ""
            }
            function s(ze, Qr) {
                for (var Kr = new DOMParser, Wr = Kr.parseFromString(ze, "text/html"), Jr = Wr.body; Qr > 0; )
                    Qr--,
                    Jr = Jr.firstChild;
                return Jr == null && (Jr = re().createDocumentFragment()),
                Jr
            }
            function N(ze) {
                return /<body/.test(ze)
            }
            function l(ze) {
                var Qr = !N(ze)
                  , Kr = A(ze)
                  , Wr = ze;
                if (Kr === "head" && (Wr = Wr.replace(S, "")),
                Q.config.useTemplateFragments && Qr) {
                    var Jr = s("<body><template>" + Wr + "</template></body>", 0)
                      , Yr = Jr.querySelector("template").content;
                    return Q.config.allowScriptTags ? oe(Yr.querySelectorAll("script"), function(Gr) {
                        Q.config.inlineScriptNonce && (Gr.nonce = Q.config.inlineScriptNonce),
                        Gr.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1
                    }) : oe(Yr.querySelectorAll("script"), function(Gr) {
                        _(Gr)
                    }),
                    Yr
                }
                switch (Kr) {
                case "thead":
                case "tbody":
                case "tfoot":
                case "colgroup":
                case "caption":
                    return s("<table>" + Wr + "</table>", 1);
                case "col":
                    return s("<table><colgroup>" + Wr + "</colgroup></table>", 2);
                case "tr":
                    return s("<table><tbody>" + Wr + "</tbody></table>", 2);
                case "td":
                case "th":
                    return s("<table><tbody><tr>" + Wr + "</tr></tbody></table>", 3);
                case "script":
                case "style":
                    return s("<div>" + Wr + "</div>", 1);
                default:
                    return s(Wr, 0)
                }
            }
            function ie(ze) {
                ze && ze()
            }
            function I(ze, Qr) {
                return Object.prototype.toString.call(ze) === "[object " + Qr + "]"
            }
            function k(ze) {
                return I(ze, "Function")
            }
            function P(ze) {
                return I(ze, "Object")
            }
            function ae(ze) {
                var Qr = "htmx-internal-data"
                  , Kr = ze[Qr];
                return Kr || (Kr = ze[Qr] = {}),
                Kr
            }
            function M(ze) {
                var Qr = [];
                if (ze)
                    for (var Kr = 0; Kr < ze.length; Kr++)
                        Qr.push(ze[Kr]);
                return Qr
            }
            function oe(ze, Qr) {
                if (ze)
                    for (var Kr = 0; Kr < ze.length; Kr++)
                        Qr(ze[Kr])
            }
            function X(ze) {
                var Qr = ze.getBoundingClientRect()
                  , Kr = Qr.top
                  , Wr = Qr.bottom;
                return Kr < window.innerHeight && Wr >= 0
            }
            function se(ze) {
                return ze.getRootNode && ze.getRootNode()instanceof window.ShadowRoot ? re().body.contains(ze.getRootNode().host) : re().body.contains(ze)
            }
            function D(ze) {
                return ze.trim().split(/\s+/)
            }
            function le(ze, Qr) {
                for (var Kr in Qr)
                    Qr.hasOwnProperty(Kr) && (ze[Kr] = Qr[Kr]);
                return ze
            }
            function E(ze) {
                try {
                    return JSON.parse(ze)
                } catch (Qr) {
                    return b(Qr),
                    null
                }
            }
            function U() {
                var ze = "htmx:localStorageTest";
                try {
                    return localStorage.setItem(ze, ze),
                    localStorage.removeItem(ze),
                    !0
                } catch {
                    return !1
                }
            }
            function B(ze) {
                try {
                    var Qr = new URL(ze);
                    return Qr && (ze = Qr.pathname + Qr.search),
                    /^\/$/.test(ze) || (ze = ze.replace(/\/+$/, "")),
                    ze
                } catch {
                    return ze
                }
            }
            function t(e) {
                return Tr(re().body, function() {
                    return eval(e)
                })
            }
            function F(ze) {
                var Qr = Q.on("htmx:load", function(Kr) {
                    ze(Kr.detail.elt)
                });
                return Qr
            }
            function V() {
                Q.logger = function(ze, Qr, Kr) {
                    console && console.log(Qr, ze, Kr)
                }
            }
            function j() {
                Q.logger = null
            }
            function C(ze, Qr) {
                return Qr ? ze.querySelector(Qr) : C(re(), ze)
            }
            function f(ze, Qr) {
                return Qr ? ze.querySelectorAll(Qr) : f(re(), ze)
            }
            function _(ze, Qr) {
                ze = p(ze),
                Qr ? setTimeout(function() {
                    _(ze),
                    ze = null
                }, Qr) : ze.parentElement.removeChild(ze)
            }
            function z(ze, Qr, Kr) {
                ze = p(ze),
                Kr ? setTimeout(function() {
                    z(ze, Qr),
                    ze = null
                }, Kr) : ze.classList && ze.classList.add(Qr)
            }
            function n(ze, Qr, Kr) {
                ze = p(ze),
                Kr ? setTimeout(function() {
                    n(ze, Qr),
                    ze = null
                }, Kr) : ze.classList && (ze.classList.remove(Qr),
                ze.classList.length === 0 && ze.removeAttribute("class"))
            }
            function $(ze, Qr) {
                ze = p(ze),
                ze.classList.toggle(Qr)
            }
            function W(ze, Qr) {
                ze = p(ze),
                oe(ze.parentElement.children, function(Kr) {
                    n(Kr, Qr)
                }),
                z(ze, Qr)
            }
            function v(ze, Qr) {
                if (ze = p(ze),
                ze.closest)
                    return ze.closest(Qr);
                do
                    if (ze == null || h(ze, Qr))
                        return ze;
                while (ze = ze && u(ze));
                return null
            }
            function g(ze, Qr) {
                return ze.substring(0, Qr.length) === Qr
            }
            function G(ze, Qr) {
                return ze.substring(ze.length - Qr.length) === Qr
            }
            function J(ze) {
                var Qr = ze.trim();
                return g(Qr, "<") && G(Qr, "/>") ? Qr.substring(1, Qr.length - 2) : Qr
            }
            function Z(ze, Qr) {
                return Qr.indexOf("closest ") === 0 ? [v(ze, J(Qr.substr(8)))] : Qr.indexOf("find ") === 0 ? [C(ze, J(Qr.substr(5)))] : Qr === "next" ? [ze.nextElementSibling] : Qr.indexOf("next ") === 0 ? [K(ze, J(Qr.substr(5)))] : Qr === "previous" ? [ze.previousElementSibling] : Qr.indexOf("previous ") === 0 ? [Y(ze, J(Qr.substr(9)))] : Qr === "document" ? [document] : Qr === "window" ? [window] : Qr === "body" ? [document.body] : re().querySelectorAll(J(Qr))
            }
            var K = function(ze, Qr) {
                for (var Kr = re().querySelectorAll(Qr), Wr = 0; Wr < Kr.length; Wr++) {
                    var Jr = Kr[Wr];
                    if (Jr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_PRECEDING)
                        return Jr
                }
            }
              , Y = function(ze, Qr) {
                for (var Kr = re().querySelectorAll(Qr), Wr = Kr.length - 1; Wr >= 0; Wr--) {
                    var Jr = Kr[Wr];
                    if (Jr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_FOLLOWING)
                        return Jr
                }
            };
            function ue(ze, Qr) {
                return Qr ? Z(ze, Qr)[0] : Z(re().body, ze)[0]
            }
            function p(ze) {
                return I(ze, "String") ? C(ze) : ze
            }
            function ve(ze, Qr, Kr) {
                return k(Qr) ? {
                    target: re().body,
                    event: ze,
                    listener: Qr
                } : {
                    target: p(ze),
                    event: Qr,
                    listener: Kr
                }
            }
            function de(ze, Qr, Kr) {
                jr(function() {
                    var Jr = ve(ze, Qr, Kr);
                    Jr.target.addEventListener(Jr.event, Jr.listener)
                });
                var Wr = k(Qr);
                return Wr ? Qr : Kr
            }
            function ge(ze, Qr, Kr) {
                return jr(function() {
                    var Wr = ve(ze, Qr, Kr);
                    Wr.target.removeEventListener(Wr.event, Wr.listener)
                }),
                k(Qr) ? Qr : Kr
            }
            var pe = re().createElement("output");
            function me(ze, Qr) {
                var Kr = ne(ze, Qr);
                if (Kr) {
                    if (Kr === "this")
                        return [xe(ze, Qr)];
                    var Wr = Z(ze, Kr);
                    return Wr.length === 0 ? (b('The selector "' + Kr + '" on ' + Qr + " returned no matches!"),
                    [pe]) : Wr
                }
            }
            function xe(ze, Qr) {
                return c(ze, function(Kr) {
                    return te(Kr, Qr) != null
                })
            }
            function ye(ze) {
                var Qr = ne(ze, "hx-target");
                if (Qr)
                    return Qr === "this" ? xe(ze, "hx-target") : ue(ze, Qr);
                var Kr = ae(ze);
                return Kr.boosted ? re().body : ze
            }
            function be(ze) {
                for (var Qr = Q.config.attributesToSettle, Kr = 0; Kr < Qr.length; Kr++)
                    if (ze === Qr[Kr])
                        return !0;
                return !1
            }
            function we(ze, Qr) {
                oe(ze.attributes, function(Kr) {
                    !Qr.hasAttribute(Kr.name) && be(Kr.name) && ze.removeAttribute(Kr.name)
                }),
                oe(Qr.attributes, function(Kr) {
                    be(Kr.name) && ze.setAttribute(Kr.name, Kr.value)
                })
            }
            function Se(ze, Qr) {
                for (var Kr = Fr(Qr), Wr = 0; Wr < Kr.length; Wr++) {
                    var Jr = Kr[Wr];
                    try {
                        if (Jr.isInlineSwap(ze))
                            return !0
                    } catch (Yr) {
                        b(Yr)
                    }
                }
                return ze === "outerHTML"
            }
            function Ee(ze, Qr, Kr) {
                var Wr = "#" + ee(Qr, "id")
                  , Jr = "outerHTML";
                ze === "true" || (ze.indexOf(":") > 0 ? (Jr = ze.substr(0, ze.indexOf(":")),
                Wr = ze.substr(ze.indexOf(":") + 1, ze.length)) : Jr = ze);
                var Yr = re().querySelectorAll(Wr);
                return Yr ? (oe(Yr, function(Gr) {
                    var Zr, en = Qr.cloneNode(!0);
                    Zr = re().createDocumentFragment(),
                    Zr.appendChild(en),
                    Se(Jr, Gr) || (Zr = en);
                    var tn = {
                        shouldSwap: !0,
                        target: Gr,
                        fragment: Zr
                    };
                    ce(Gr, "htmx:oobBeforeSwap", tn) && (Gr = tn.target,
                    tn.shouldSwap && Fe(Jr, Gr, Gr, Zr, Kr),
                    oe(Kr.elts, function(rn) {
                        ce(rn, "htmx:oobAfterSwap", tn)
                    }))
                }),
                Qr.parentNode.removeChild(Qr)) : (Qr.parentNode.removeChild(Qr),
                fe(re().body, "htmx:oobErrorNoTarget", {
                    content: Qr
                })),
                ze
            }
            function Ce(ze, Qr, Kr) {
                var Wr = ne(ze, "hx-select-oob");
                if (Wr)
                    for (var Jr = Wr.split(","), Yr = 0; Yr < Jr.length; Yr++) {
                        var Gr = Jr[Yr].split(":", 2)
                          , Zr = Gr[0].trim();
                        Zr.indexOf("#") === 0 && (Zr = Zr.substring(1));
                        var en = Gr[1] || "true"
                          , tn = Qr.querySelector("#" + Zr);
                        tn && Ee(en, tn, Kr)
                    }
                oe(f(Qr, "[hx-swap-oob], [data-hx-swap-oob]"), function(rn) {
                    var nn = te(rn, "hx-swap-oob");
                    nn != null && Ee(nn, rn, Kr)
                })
            }
            function Re(ze) {
                oe(f(ze, "[hx-preserve], [data-hx-preserve]"), function(Qr) {
                    var Kr = te(Qr, "id")
                      , Wr = re().getElementById(Kr);
                    Wr != null && Qr.parentNode.replaceChild(Wr, Qr)
                })
            }
            function Te(ze, Qr, Kr) {
                oe(Qr.querySelectorAll("[id]"), function(Wr) {
                    var Jr = ee(Wr, "id");
                    if (Jr && Jr.length > 0) {
                        var Yr = Jr.replace("'", "\\'")
                          , Gr = Wr.tagName.replace(":", "\\:")
                          , Zr = ze.querySelector(Gr + "[id='" + Yr + "']");
                        if (Zr && Zr !== ze) {
                            var en = Wr.cloneNode();
                            we(Wr, Zr),
                            Kr.tasks.push(function() {
                                we(Wr, en)
                            })
                        }
                    }
                })
            }
            function Oe(ze) {
                return function() {
                    n(ze, Q.config.addedClass),
                    zt(ze),
                    Nt(ze),
                    qe(ze),
                    ce(ze, "htmx:load")
                }
            }
            function qe(ze) {
                var Qr = "[autofocus]"
                  , Kr = h(ze, Qr) ? ze : ze.querySelector(Qr);
                Kr != null && Kr.focus()
            }
            function a(ze, Qr, Kr, Wr) {
                for (Te(ze, Kr, Wr); Kr.childNodes.length > 0; ) {
                    var Jr = Kr.firstChild;
                    z(Jr, Q.config.addedClass),
                    ze.insertBefore(Jr, Qr),
                    Jr.nodeType !== Node.TEXT_NODE && Jr.nodeType !== Node.COMMENT_NODE && Wr.tasks.push(Oe(Jr))
                }
            }
            function He(ze, Qr) {
                for (var Kr = 0; Kr < ze.length; )
                    Qr = (Qr << 5) - Qr + ze.charCodeAt(Kr++) | 0;
                return Qr
            }
            function Le(ze) {
                var Qr = 0;
                if (ze.attributes)
                    for (var Kr = 0; Kr < ze.attributes.length; Kr++) {
                        var Wr = ze.attributes[Kr];
                        Wr.value && (Qr = He(Wr.name, Qr),
                        Qr = He(Wr.value, Qr))
                    }
                return Qr
            }
            function Ae(ze) {
                var Qr = ae(ze);
                if (Qr.onHandlers) {
                    for (var Kr = 0; Kr < Qr.onHandlers.length; Kr++) {
                        const Wr = Qr.onHandlers[Kr];
                        ze.removeEventListener(Wr.event, Wr.listener)
                    }
                    delete Qr.onHandlers
                }
            }
            function Ne(ze) {
                var Qr = ae(ze);
                Qr.timeout && clearTimeout(Qr.timeout),
                Qr.webSocket && Qr.webSocket.close(),
                Qr.sseEventSource && Qr.sseEventSource.close(),
                Qr.listenerInfos && oe(Qr.listenerInfos, function(Kr) {
                    Kr.on && Kr.on.removeEventListener(Kr.trigger, Kr.listener)
                }),
                Ae(ze),
                oe(Object.keys(Qr), function(Kr) {
                    delete Qr[Kr]
                })
            }
            function m(ze) {
                ce(ze, "htmx:beforeCleanupElement"),
                Ne(ze),
                ze.children && oe(ze.children, function(Qr) {
                    m(Qr)
                })
            }
            function Ie(ze, Qr, Kr) {
                if (ze.tagName === "BODY")
                    return Ue(ze, Qr, Kr);
                var Wr, Jr = ze.previousSibling;
                for (a(u(ze), ze, Qr, Kr),
                Jr == null ? Wr = u(ze).firstChild : Wr = Jr.nextSibling,
                Kr.elts = Kr.elts.filter(function(Yr) {
                    return Yr != ze
                }); Wr && Wr !== ze; )
                    Wr.nodeType === Node.ELEMENT_NODE && Kr.elts.push(Wr),
                    Wr = Wr.nextElementSibling;
                m(ze),
                u(ze).removeChild(ze)
            }
            function ke(ze, Qr, Kr) {
                return a(ze, ze.firstChild, Qr, Kr)
            }
            function Pe(ze, Qr, Kr) {
                return a(u(ze), ze, Qr, Kr)
            }
            function Me(ze, Qr, Kr) {
                return a(ze, null, Qr, Kr)
            }
            function Xe(ze, Qr, Kr) {
                return a(u(ze), ze.nextSibling, Qr, Kr)
            }
            function De(ze, Qr, Kr) {
                return m(ze),
                u(ze).removeChild(ze)
            }
            function Ue(ze, Qr, Kr) {
                var Wr = ze.firstChild;
                if (a(ze, Wr, Qr, Kr),
                Wr) {
                    for (; Wr.nextSibling; )
                        m(Wr.nextSibling),
                        ze.removeChild(Wr.nextSibling);
                    m(Wr),
                    ze.removeChild(Wr)
                }
            }
            function Be(ze, Qr, Kr) {
                var Wr = Kr || ne(ze, "hx-select");
                if (Wr) {
                    var Jr = re().createDocumentFragment();
                    oe(Qr.querySelectorAll(Wr), function(Yr) {
                        Jr.appendChild(Yr)
                    }),
                    Qr = Jr
                }
                return Qr
            }
            function Fe(ze, Qr, Kr, Wr, Jr) {
                switch (ze) {
                case "none":
                    return;
                case "outerHTML":
                    Ie(Kr, Wr, Jr);
                    return;
                case "afterbegin":
                    ke(Kr, Wr, Jr);
                    return;
                case "beforebegin":
                    Pe(Kr, Wr, Jr);
                    return;
                case "beforeend":
                    Me(Kr, Wr, Jr);
                    return;
                case "afterend":
                    Xe(Kr, Wr, Jr);
                    return;
                case "delete":
                    De(Kr);
                    return;
                default:
                    for (var Yr = Fr(Qr), Gr = 0; Gr < Yr.length; Gr++) {
                        var Zr = Yr[Gr];
                        try {
                            var en = Zr.handleSwap(ze, Kr, Wr, Jr);
                            if (en) {
                                if (typeof en.length < "u")
                                    for (var tn = 0; tn < en.length; tn++) {
                                        var rn = en[tn];
                                        rn.nodeType !== Node.TEXT_NODE && rn.nodeType !== Node.COMMENT_NODE && Jr.tasks.push(Oe(rn))
                                    }
                                return
                            }
                        } catch (nn) {
                            b(nn)
                        }
                    }
                    ze === "innerHTML" ? Ue(Kr, Wr, Jr) : Fe(Q.config.defaultSwapStyle, Qr, Kr, Wr, Jr)
                }
            }
            function Ve(ze) {
                if (ze.indexOf("<title") > -1) {
                    var Qr = ze.replace(H, "")
                      , Kr = Qr.match(q);
                    if (Kr)
                        return Kr[2]
                }
            }
            function je(ze, Qr, Kr, Wr, Jr, Yr) {
                Jr.title = Ve(Wr);
                var Gr = l(Wr);
                if (Gr)
                    return Ce(Kr, Gr, Jr),
                    Gr = Be(Kr, Gr, Yr),
                    Re(Gr),
                    Fe(ze, Kr, Qr, Gr, Jr)
            }
            function _e(ze, Qr, Kr) {
                var Wr = ze.getResponseHeader(Qr);
                if (Wr.indexOf("{") === 0) {
                    var Jr = E(Wr);
                    for (var Yr in Jr)
                        if (Jr.hasOwnProperty(Yr)) {
                            var Gr = Jr[Yr];
                            P(Gr) || (Gr = {
                                value: Gr
                            }),
                            ce(Kr, Yr, Gr)
                        }
                } else
                    for (var Zr = Wr.split(","), en = 0; en < Zr.length; en++)
                        ce(Kr, Zr[en].trim(), [])
            }
            var x = /[\s,]/
              , $e = /[_$a-zA-Z]/
              , We = /[_$a-zA-Z0-9]/
              , Ge = ['"', "'", "/"]
              , Je = /[^\s]/
              , Ze = /[{(]/
              , Ke = /[})]/;
            function Ye(ze) {
                for (var Qr = [], Kr = 0; Kr < ze.length; ) {
                    if ($e.exec(ze.charAt(Kr))) {
                        for (var Wr = Kr; We.exec(ze.charAt(Kr + 1)); )
                            Kr++;
                        Qr.push(ze.substr(Wr, Kr - Wr + 1))
                    } else if (Ge.indexOf(ze.charAt(Kr)) !== -1) {
                        var Jr = ze.charAt(Kr)
                          , Wr = Kr;
                        for (Kr++; Kr < ze.length && ze.charAt(Kr) !== Jr; )
                            ze.charAt(Kr) === "\\" && Kr++,
                            Kr++;
                        Qr.push(ze.substr(Wr, Kr - Wr + 1))
                    } else {
                        var Yr = ze.charAt(Kr);
                        Qr.push(Yr)
                    }
                    Kr++
                }
                return Qr
            }
            function Qe(ze, Qr, Kr) {
                return $e.exec(ze.charAt(0)) && ze !== "true" && ze !== "false" && ze !== "this" && ze !== Kr && Qr !== "."
            }
            function et(ze, Qr, Kr) {
                if (Qr[0] === "[") {
                    Qr.shift();
                    for (var Wr = 1, Jr = " return (function(" + Kr + "){ return (", Yr = null; Qr.length > 0; ) {
                        var Gr = Qr[0];
                        if (Gr === "]") {
                            if (Wr--,
                            Wr === 0) {
                                Yr === null && (Jr = Jr + "true"),
                                Qr.shift(),
                                Jr += ")})";
                                try {
                                    var Zr = Tr(ze, function() {
                                        return Function(Jr)()
                                    }, function() {
                                        return !0
                                    });
                                    return Zr.source = Jr,
                                    Zr
                                } catch (en) {
                                    return fe(re().body, "htmx:syntax:error", {
                                        error: en,
                                        source: Jr
                                    }),
                                    null
                                }
                            }
                        } else
                            Gr === "[" && Wr++;
                        Qe(Gr, Yr, Kr) ? Jr += "((" + Kr + "." + Gr + ") ? (" + Kr + "." + Gr + ") : (window." + Gr + "))" : Jr = Jr + Gr,
                        Yr = Qr.shift()
                    }
                }
            }
            function y(ze, Qr) {
                for (var Kr = ""; ze.length > 0 && !Qr.test(ze[0]); )
                    Kr += ze.shift();
                return Kr
            }
            function tt(ze) {
                var Qr;
                return ze.length > 0 && Ze.test(ze[0]) ? (ze.shift(),
                Qr = y(ze, Ke).trim(),
                ze.shift()) : Qr = y(ze, x),
                Qr
            }
            var rt = "input, textarea, select";
            function nt(ze, Qr, Kr) {
                var Wr = []
                  , Jr = Ye(Qr);
                do {
                    y(Jr, Je);
                    var Yr = Jr.length
                      , Gr = y(Jr, /[,\[\s]/);
                    if (Gr !== "")
                        if (Gr === "every") {
                            var Zr = {
                                trigger: "every"
                            };
                            y(Jr, Je),
                            Zr.pollInterval = d(y(Jr, /[,\[\s]/)),
                            y(Jr, Je);
                            var en = et(ze, Jr, "event");
                            en && (Zr.eventFilter = en),
                            Wr.push(Zr)
                        } else if (Gr.indexOf("sse:") === 0)
                            Wr.push({
                                trigger: "sse",
                                sseEvent: Gr.substr(4)
                            });
                        else {
                            var tn = {
                                trigger: Gr
                            }
                              , en = et(ze, Jr, "event");
                            for (en && (tn.eventFilter = en); Jr.length > 0 && Jr[0] !== ","; ) {
                                y(Jr, Je);
                                var rn = Jr.shift();
                                if (rn === "changed")
                                    tn.changed = !0;
                                else if (rn === "once")
                                    tn.once = !0;
                                else if (rn === "consume")
                                    tn.consume = !0;
                                else if (rn === "delay" && Jr[0] === ":")
                                    Jr.shift(),
                                    tn.delay = d(y(Jr, x));
                                else if (rn === "from" && Jr[0] === ":") {
                                    if (Jr.shift(),
                                    Ze.test(Jr[0]))
                                        var nn = tt(Jr);
                                    else {
                                        var nn = y(Jr, x);
                                        if (nn === "closest" || nn === "find" || nn === "next" || nn === "previous") {
                                            Jr.shift();
                                            var an = tt(Jr);
                                            an.length > 0 && (nn += " " + an)
                                        }
                                    }
                                    tn.from = nn
                                } else
                                    rn === "target" && Jr[0] === ":" ? (Jr.shift(),
                                    tn.target = tt(Jr)) : rn === "throttle" && Jr[0] === ":" ? (Jr.shift(),
                                    tn.throttle = d(y(Jr, x))) : rn === "queue" && Jr[0] === ":" ? (Jr.shift(),
                                    tn.queue = y(Jr, x)) : rn === "root" && Jr[0] === ":" ? (Jr.shift(),
                                    tn[rn] = tt(Jr)) : rn === "threshold" && Jr[0] === ":" ? (Jr.shift(),
                                    tn[rn] = y(Jr, x)) : fe(ze, "htmx:syntax:error", {
                                        token: Jr.shift()
                                    })
                            }
                            Wr.push(tn)
                        }
                    Jr.length === Yr && fe(ze, "htmx:syntax:error", {
                        token: Jr.shift()
                    }),
                    y(Jr, Je)
                } while (Jr[0] === "," && Jr.shift());
                return Kr && (Kr[Qr] = Wr),
                Wr
            }
            function it(ze) {
                var Qr = te(ze, "hx-trigger")
                  , Kr = [];
                if (Qr) {
                    var Wr = Q.config.triggerSpecsCache;
                    Kr = Wr && Wr[Qr] || nt(ze, Qr, Wr)
                }
                return Kr.length > 0 ? Kr : h(ze, "form") ? [{
                    trigger: "submit"
                }] : h(ze, 'input[type="button"], input[type="submit"]') ? [{
                    trigger: "click"
                }] : h(ze, rt) ? [{
                    trigger: "change"
                }] : [{
                    trigger: "click"
                }]
            }
            function at(ze) {
                ae(ze).cancelled = !0
            }
            function ot(ze, Qr, Kr) {
                var Wr = ae(ze);
                Wr.timeout = setTimeout(function() {
                    se(ze) && Wr.cancelled !== !0 && (ct(Kr, ze, Wt("hx:poll:trigger", {
                        triggerSpec: Kr,
                        target: ze
                    })) || Qr(ze),
                    ot(ze, Qr, Kr))
                }, Kr.pollInterval)
            }
            function st(ze) {
                return location.hostname === ze.hostname && ee(ze, "href") && ee(ze, "href").indexOf("#") !== 0
            }
            function lt(ze, Qr, Kr) {
                if (ze.tagName === "A" && st(ze) && (ze.target === "" || ze.target === "_self") || ze.tagName === "FORM") {
                    Qr.boosted = !0;
                    var Wr, Jr;
                    if (ze.tagName === "A")
                        Wr = "get",
                        Jr = ee(ze, "href");
                    else {
                        var Yr = ee(ze, "method");
                        Wr = Yr ? Yr.toLowerCase() : "get",
                        Jr = ee(ze, "action")
                    }
                    Kr.forEach(function(Gr) {
                        ht(ze, function(Zr, en) {
                            if (v(Zr, Q.config.disableSelector)) {
                                m(Zr);
                                return
                            }
                            he(Wr, Jr, Zr, en)
                        }, Qr, Gr, !0)
                    })
                }
            }
            function ut(ze, Qr) {
                return !!((ze.type === "submit" || ze.type === "click") && (Qr.tagName === "FORM" || h(Qr, 'input[type="submit"], button') && v(Qr, "form") !== null || Qr.tagName === "A" && Qr.href && (Qr.getAttribute("href") === "#" || Qr.getAttribute("href").indexOf("#") !== 0)))
            }
            function ft(ze, Qr) {
                return ae(ze).boosted && ze.tagName === "A" && Qr.type === "click" && (Qr.ctrlKey || Qr.metaKey)
            }
            function ct(ze, Qr, Kr) {
                var Wr = ze.eventFilter;
                if (Wr)
                    try {
                        return Wr.call(Qr, Kr) !== !0
                    } catch (Jr) {
                        return fe(re().body, "htmx:eventFilter:error", {
                            error: Jr,
                            source: Wr.source
                        }),
                        !0
                    }
                return !1
            }
            function ht(ze, Qr, Kr, Wr, Jr) {
                var Yr = ae(ze), Gr;
                Wr.from ? Gr = Z(ze, Wr.from) : Gr = [ze],
                Wr.changed && Gr.forEach(function(Zr) {
                    var en = ae(Zr);
                    en.lastValue = Zr.value
                }),
                oe(Gr, function(Zr) {
                    var en = function(tn) {
                        if (!se(ze)) {
                            Zr.removeEventListener(Wr.trigger, en);
                            return
                        }
                        if (!ft(ze, tn) && ((Jr || ut(tn, ze)) && tn.preventDefault(),
                        !ct(Wr, ze, tn))) {
                            var rn = ae(tn);
                            if (rn.triggerSpec = Wr,
                            rn.handledFor == null && (rn.handledFor = []),
                            rn.handledFor.indexOf(ze) < 0) {
                                if (rn.handledFor.push(ze),
                                Wr.consume && tn.stopPropagation(),
                                Wr.target && tn.target && !h(tn.target, Wr.target))
                                    return;
                                if (Wr.once) {
                                    if (Yr.triggeredOnce)
                                        return;
                                    Yr.triggeredOnce = !0
                                }
                                if (Wr.changed) {
                                    var nn = ae(Zr);
                                    if (nn.lastValue === Zr.value)
                                        return;
                                    nn.lastValue = Zr.value
                                }
                                if (Yr.delayed && clearTimeout(Yr.delayed),
                                Yr.throttle)
                                    return;
                                Wr.throttle > 0 ? Yr.throttle || (Qr(ze, tn),
                                Yr.throttle = setTimeout(function() {
                                    Yr.throttle = null
                                }, Wr.throttle)) : Wr.delay > 0 ? Yr.delayed = setTimeout(function() {
                                    Qr(ze, tn)
                                }, Wr.delay) : (ce(ze, "htmx:trigger"),
                                Qr(ze, tn))
                            }
                        }
                    };
                    Kr.listenerInfos == null && (Kr.listenerInfos = []),
                    Kr.listenerInfos.push({
                        trigger: Wr.trigger,
                        listener: en,
                        on: Zr
                    }),
                    Zr.addEventListener(Wr.trigger, en)
                })
            }
            var vt = !1
              , dt = null;
            function gt() {
                dt || (dt = function() {
                    vt = !0
                }
                ,
                window.addEventListener("scroll", dt),
                setInterval(function() {
                    vt && (vt = !1,
                    oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(ze) {
                        pt(ze)
                    }))
                }, 200))
            }
            function pt(ze) {
                if (!o(ze, "data-hx-revealed") && X(ze)) {
                    ze.setAttribute("data-hx-revealed", "true");
                    var Qr = ae(ze);
                    Qr.initHash ? ce(ze, "revealed") : ze.addEventListener("htmx:afterProcessNode", function(Kr) {
                        ce(ze, "revealed")
                    }, {
                        once: !0
                    })
                }
            }
            function mt(ze, Qr, Kr) {
                for (var Wr = D(Kr), Jr = 0; Jr < Wr.length; Jr++) {
                    var Yr = Wr[Jr].split(/:(.+)/);
                    Yr[0] === "connect" && xt(ze, Yr[1], 0),
                    Yr[0] === "send" && bt(ze)
                }
            }
            function xt(ze, Qr, Kr) {
                if (se(ze)) {
                    if (Qr.indexOf("/") == 0) {
                        var Wr = location.hostname + (location.port ? ":" + location.port : "");
                        location.protocol == "https:" ? Qr = "wss://" + Wr + Qr : location.protocol == "http:" && (Qr = "ws://" + Wr + Qr)
                    }
                    var Jr = Q.createWebSocket(Qr);
                    Jr.onerror = function(Yr) {
                        fe(ze, "htmx:wsError", {
                            error: Yr,
                            socket: Jr
                        }),
                        yt(ze)
                    }
                    ,
                    Jr.onclose = function(Yr) {
                        if ([1006, 1012, 1013].indexOf(Yr.code) >= 0) {
                            var Gr = wt(Kr);
                            setTimeout(function() {
                                xt(ze, Qr, Kr + 1)
                            }, Gr)
                        }
                    }
                    ,
                    Jr.onopen = function(Yr) {
                        Kr = 0
                    }
                    ,
                    ae(ze).webSocket = Jr,
                    Jr.addEventListener("message", function(Yr) {
                        if (!yt(ze)) {
                            var Gr = Yr.data;
                            R(ze, function(an) {
                                Gr = an.transformResponse(Gr, null, ze)
                            });
                            for (var Zr = T(ze), en = l(Gr), tn = M(en.children), rn = 0; rn < tn.length; rn++) {
                                var nn = tn[rn];
                                Ee(te(nn, "hx-swap-oob") || "true", nn, Zr)
                            }
                            nr(Zr.tasks)
                        }
                    })
                }
            }
            function yt(ze) {
                if (!se(ze))
                    return ae(ze).webSocket.close(),
                    !0
            }
            function bt(ze) {
                var Qr = c(ze, function(Kr) {
                    return ae(Kr).webSocket != null
                });
                Qr ? ze.addEventListener(it(ze)[0].trigger, function(Kr) {
                    var Wr = ae(Qr).webSocket
                      , Jr = xr(ze, Qr)
                      , Yr = dr(ze, "post")
                      , Gr = Yr.errors
                      , Zr = Yr.values
                      , en = Hr(ze)
                      , tn = le(Zr, en)
                      , rn = yr(tn, ze);
                    if (rn.HEADERS = Jr,
                    Gr && Gr.length > 0) {
                        ce(ze, "htmx:validation:halted", Gr);
                        return
                    }
                    Wr.send(JSON.stringify(rn)),
                    ut(Kr, ze) && Kr.preventDefault()
                }) : fe(ze, "htmx:noWebSocketSourceError")
            }
            function wt(ze) {
                var Qr = Q.config.wsReconnectDelay;
                if (typeof Qr == "function")
                    return Qr(ze);
                if (Qr === "full-jitter") {
                    var Kr = Math.min(ze, 6)
                      , Wr = 1e3 * Math.pow(2, Kr);
                    return Wr * Math.random()
                }
                b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')
            }
            function St(ze, Qr, Kr) {
                for (var Wr = D(Kr), Jr = 0; Jr < Wr.length; Jr++) {
                    var Yr = Wr[Jr].split(/:(.+)/);
                    Yr[0] === "connect" && Et(ze, Yr[1]),
                    Yr[0] === "swap" && Ct(ze, Yr[1])
                }
            }
            function Et(ze, Qr) {
                var Kr = Q.createEventSource(Qr);
                Kr.onerror = function(Wr) {
                    fe(ze, "htmx:sseError", {
                        error: Wr,
                        source: Kr
                    }),
                    Tt(ze)
                }
                ,
                ae(ze).sseEventSource = Kr
            }
            function Ct(ze, Qr) {
                var Kr = c(ze, Ot);
                if (Kr) {
                    var Wr = ae(Kr).sseEventSource
                      , Jr = function(Yr) {
                        if (!Tt(Kr)) {
                            if (!se(ze)) {
                                Wr.removeEventListener(Qr, Jr);
                                return
                            }
                            var Gr = Yr.data;
                            R(ze, function(rn) {
                                Gr = rn.transformResponse(Gr, null, ze)
                            });
                            var Zr = wr(ze)
                              , en = ye(ze)
                              , tn = T(ze);
                            je(Zr.swapStyle, en, ze, Gr, tn),
                            nr(tn.tasks),
                            ce(ze, "htmx:sseMessage", Yr)
                        }
                    };
                    ae(ze).sseListener = Jr,
                    Wr.addEventListener(Qr, Jr)
                } else
                    fe(ze, "htmx:noSSESourceError")
            }
            function Rt(ze, Qr, Kr) {
                var Wr = c(ze, Ot);
                if (Wr) {
                    var Jr = ae(Wr).sseEventSource
                      , Yr = function() {
                        Tt(Wr) || (se(ze) ? Qr(ze) : Jr.removeEventListener(Kr, Yr))
                    };
                    ae(ze).sseListener = Yr,
                    Jr.addEventListener(Kr, Yr)
                } else
                    fe(ze, "htmx:noSSESourceError")
            }
            function Tt(ze) {
                if (!se(ze))
                    return ae(ze).sseEventSource.close(),
                    !0
            }
            function Ot(ze) {
                return ae(ze).sseEventSource != null
            }
            function qt(ze, Qr, Kr, Wr) {
                var Jr = function() {
                    Kr.loaded || (Kr.loaded = !0,
                    Qr(ze))
                };
                Wr > 0 ? setTimeout(Jr, Wr) : Jr()
            }
            function Ht(ze, Qr, Kr) {
                var Wr = !1;
                return oe(w, function(Jr) {
                    if (o(ze, "hx-" + Jr)) {
                        var Yr = te(ze, "hx-" + Jr);
                        Wr = !0,
                        Qr.path = Yr,
                        Qr.verb = Jr,
                        Kr.forEach(function(Gr) {
                            Lt(ze, Gr, Qr, function(Zr, en) {
                                if (v(Zr, Q.config.disableSelector)) {
                                    m(Zr);
                                    return
                                }
                                he(Jr, Yr, Zr, en)
                            })
                        })
                    }
                }),
                Wr
            }
            function Lt(ze, Qr, Kr, Wr) {
                if (Qr.sseEvent)
                    Rt(ze, Wr, Qr.sseEvent);
                else if (Qr.trigger === "revealed")
                    gt(),
                    ht(ze, Wr, Kr, Qr),
                    pt(ze);
                else if (Qr.trigger === "intersect") {
                    var Jr = {};
                    Qr.root && (Jr.root = ue(ze, Qr.root)),
                    Qr.threshold && (Jr.threshold = parseFloat(Qr.threshold));
                    var Yr = new IntersectionObserver(function(Gr) {
                        for (var Zr = 0; Zr < Gr.length; Zr++) {
                            var en = Gr[Zr];
                            if (en.isIntersecting) {
                                ce(ze, "intersect");
                                break
                            }
                        }
                    }
                    ,Jr);
                    Yr.observe(ze),
                    ht(ze, Wr, Kr, Qr)
                } else
                    Qr.trigger === "load" ? ct(Qr, ze, Wt("load", {
                        elt: ze
                    })) || qt(ze, Wr, Kr, Qr.delay) : Qr.pollInterval > 0 ? (Kr.polling = !0,
                    ot(ze, Wr, Qr)) : ht(ze, Wr, Kr, Qr)
            }
            function At(ze) {
                if (!ze.htmxExecuted && Q.config.allowScriptTags && (ze.type === "text/javascript" || ze.type === "module" || ze.type === "")) {
                    var Qr = re().createElement("script");
                    oe(ze.attributes, function(Wr) {
                        Qr.setAttribute(Wr.name, Wr.value)
                    }),
                    Qr.textContent = ze.textContent,
                    Qr.async = !1,
                    Q.config.inlineScriptNonce && (Qr.nonce = Q.config.inlineScriptNonce);
                    var Kr = ze.parentElement;
                    try {
                        Kr.insertBefore(Qr, ze)
                    } catch (Wr) {
                        b(Wr)
                    } finally {
                        ze.parentElement && ze.parentElement.removeChild(ze)
                    }
                }
            }
            function Nt(ze) {
                h(ze, "script") && At(ze),
                oe(f(ze, "script"), function(Qr) {
                    At(Qr)
                })
            }
            function It(ze) {
                var Qr = ze.attributes;
                if (!Qr)
                    return !1;
                for (var Kr = 0; Kr < Qr.length; Kr++) {
                    var Wr = Qr[Kr].name;
                    if (g(Wr, "hx-on:") || g(Wr, "data-hx-on:") || g(Wr, "hx-on-") || g(Wr, "data-hx-on-"))
                        return !0
                }
                return !1
            }
            function kt(ze) {
                var Qr = null
                  , Kr = [];
                if (It(ze) && Kr.push(ze),
                document.evaluate)
                    for (var Wr = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', ze); Qr = Wr.iterateNext(); )
                        Kr.push(Qr);
                else if (typeof ze.getElementsByTagName == "function")
                    for (var Jr = ze.getElementsByTagName("*"), Yr = 0; Yr < Jr.length; Yr++)
                        It(Jr[Yr]) && Kr.push(Jr[Yr]);
                return Kr
            }
            function Pt(ze) {
                if (ze.querySelectorAll) {
                    var Qr = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]"
                      , Kr = ze.querySelectorAll(i + Qr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
                    return Kr
                } else
                    return []
            }
            function Mt(ze) {
                var Qr = v(ze.target, "button, input[type='submit']")
                  , Kr = Dt(ze);
                Kr && (Kr.lastButtonClicked = Qr)
            }
            function Xt(ze) {
                var Qr = Dt(ze);
                Qr && (Qr.lastButtonClicked = null)
            }
            function Dt(ze) {
                var Qr = v(ze.target, "button, input[type='submit']");
                if (Qr) {
                    var Kr = p("#" + ee(Qr, "form")) || v(Qr, "form");
                    if (Kr)
                        return ae(Kr)
                }
            }
            function Ut(ze) {
                ze.addEventListener("click", Mt),
                ze.addEventListener("focusin", Mt),
                ze.addEventListener("focusout", Xt)
            }
            function Bt(ze) {
                for (var Qr = Ye(ze), Kr = 0, Wr = 0; Wr < Qr.length; Wr++) {
                    const Jr = Qr[Wr];
                    Jr === "{" ? Kr++ : Jr === "}" && Kr--
                }
                return Kr
            }
            function Ft(ze, Qr, Kr) {
                var Wr = ae(ze);
                Array.isArray(Wr.onHandlers) || (Wr.onHandlers = []);
                var Jr, Yr = function(Gr) {
                    return Tr(ze, function() {
                        Jr || (Jr = new Function("event",Kr)),
                        Jr.call(ze, Gr)
                    })
                };
                ze.addEventListener(Qr, Yr),
                Wr.onHandlers.push({
                    event: Qr,
                    listener: Yr
                })
            }
            function Vt(ze) {
                var Qr = te(ze, "hx-on");
                if (Qr) {
                    for (var Kr = {}, Wr = Qr.split(`
`), Jr = null, Yr = 0; Wr.length > 0; ) {
                        var Gr = Wr.shift()
                          , Zr = Gr.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                        Yr === 0 && Zr ? (Gr.split(":"),
                        Jr = Zr[1].slice(0, -1),
                        Kr[Jr] = Zr[2]) : Kr[Jr] += Gr,
                        Yr += Bt(Gr)
                    }
                    for (var en in Kr)
                        Ft(ze, en, Kr[en])
                }
            }
            function jt(ze) {
                Ae(ze);
                for (var Qr = 0; Qr < ze.attributes.length; Qr++) {
                    var Kr = ze.attributes[Qr].name
                      , Wr = ze.attributes[Qr].value;
                    if (g(Kr, "hx-on") || g(Kr, "data-hx-on")) {
                        var Jr = Kr.indexOf("-on") + 3
                          , Yr = Kr.slice(Jr, Jr + 1);
                        if (Yr === "-" || Yr === ":") {
                            var Gr = Kr.slice(Jr + 1);
                            g(Gr, ":") ? Gr = "htmx" + Gr : g(Gr, "-") ? Gr = "htmx:" + Gr.slice(1) : g(Gr, "htmx-") && (Gr = "htmx:" + Gr.slice(5)),
                            Ft(ze, Gr, Wr)
                        }
                    }
                }
            }
            function _t(ze) {
                if (v(ze, Q.config.disableSelector)) {
                    m(ze);
                    return
                }
                var Qr = ae(ze);
                if (Qr.initHash !== Le(ze)) {
                    Ne(ze),
                    Qr.initHash = Le(ze),
                    Vt(ze),
                    ce(ze, "htmx:beforeProcessNode"),
                    ze.value && (Qr.lastValue = ze.value);
                    var Kr = it(ze)
                      , Wr = Ht(ze, Qr, Kr);
                    Wr || (ne(ze, "hx-boost") === "true" ? lt(ze, Qr, Kr) : o(ze, "hx-trigger") && Kr.forEach(function(Gr) {
                        Lt(ze, Gr, Qr, function() {})
                    })),
                    (ze.tagName === "FORM" || ee(ze, "type") === "submit" && o(ze, "form")) && Ut(ze);
                    var Jr = te(ze, "hx-sse");
                    Jr && St(ze, Qr, Jr);
                    var Yr = te(ze, "hx-ws");
                    Yr && mt(ze, Qr, Yr),
                    ce(ze, "htmx:afterProcessNode")
                }
            }
            function zt(ze) {
                if (ze = p(ze),
                v(ze, Q.config.disableSelector)) {
                    m(ze);
                    return
                }
                _t(ze),
                oe(Pt(ze), function(Qr) {
                    _t(Qr)
                }),
                oe(kt(ze), jt)
            }
            function $t(ze) {
                return ze.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            }
            function Wt(ze, Qr) {
                var Kr;
                return window.CustomEvent && typeof window.CustomEvent == "function" ? Kr = new CustomEvent(ze,{
                    bubbles: !0,
                    cancelable: !0,
                    detail: Qr
                }) : (Kr = re().createEvent("CustomEvent"),
                Kr.initCustomEvent(ze, !0, !0, Qr)),
                Kr
            }
            function fe(ze, Qr, Kr) {
                ce(ze, Qr, le({
                    error: Qr
                }, Kr))
            }
            function Gt(ze) {
                return ze === "htmx:afterProcessNode"
            }
            function R(ze, Qr) {
                oe(Fr(ze), function(Kr) {
                    try {
                        Qr(Kr)
                    } catch (Wr) {
                        b(Wr)
                    }
                })
            }
            function b(ze) {
                console.error ? console.error(ze) : console.log && console.log("ERROR: ", ze)
            }
            function ce(ze, Qr, Kr) {
                ze = p(ze),
                Kr == null && (Kr = {}),
                Kr.elt = ze;
                var Wr = Wt(Qr, Kr);
                Q.logger && !Gt(Qr) && Q.logger(ze, Qr, Kr),
                Kr.error && (b(Kr.error),
                ce(ze, "htmx:error", {
                    errorInfo: Kr
                }));
                var Jr = ze.dispatchEvent(Wr)
                  , Yr = $t(Qr);
                if (Jr && Yr !== Qr) {
                    var Gr = Wt(Yr, Wr.detail);
                    Jr = Jr && ze.dispatchEvent(Gr)
                }
                return R(ze, function(Zr) {
                    Jr = Jr && Zr.onEvent(Qr, Wr) !== !1 && !Wr.defaultPrevented
                }),
                Jr
            }
            var Jt = location.pathname + location.search;
            function Zt() {
                var ze = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
                return ze || re().body
            }
            function Kt(ze, Qr, Kr, Wr) {
                if (U()) {
                    if (Q.config.historyCacheSize <= 0) {
                        localStorage.removeItem("htmx-history-cache");
                        return
                    }
                    ze = B(ze);
                    for (var Jr = E(localStorage.getItem("htmx-history-cache")) || [], Yr = 0; Yr < Jr.length; Yr++)
                        if (Jr[Yr].url === ze) {
                            Jr.splice(Yr, 1);
                            break
                        }
                    var Gr = {
                        url: ze,
                        content: Qr,
                        title: Kr,
                        scroll: Wr
                    };
                    for (ce(re().body, "htmx:historyItemCreated", {
                        item: Gr,
                        cache: Jr
                    }),
                    Jr.push(Gr); Jr.length > Q.config.historyCacheSize; )
                        Jr.shift();
                    for (; Jr.length > 0; )
                        try {
                            localStorage.setItem("htmx-history-cache", JSON.stringify(Jr));
                            break
                        } catch (Zr) {
                            fe(re().body, "htmx:historyCacheError", {
                                cause: Zr,
                                cache: Jr
                            }),
                            Jr.shift()
                        }
                }
            }
            function Yt(ze) {
                if (!U())
                    return null;
                ze = B(ze);
                for (var Qr = E(localStorage.getItem("htmx-history-cache")) || [], Kr = 0; Kr < Qr.length; Kr++)
                    if (Qr[Kr].url === ze)
                        return Qr[Kr];
                return null
            }
            function Qt(ze) {
                var Qr = Q.config.requestClass
                  , Kr = ze.cloneNode(!0);
                return oe(f(Kr, "." + Qr), function(Wr) {
                    n(Wr, Qr)
                }),
                Kr.innerHTML
            }
            function er() {
                var ze = Zt(), Qr = Jt || location.pathname + location.search, Kr;
                try {
                    Kr = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]')
                } catch {
                    Kr = re().querySelector('[hx-history="false"],[data-hx-history="false"]')
                }
                Kr || (ce(re().body, "htmx:beforeHistorySave", {
                    path: Qr,
                    historyElt: ze
                }),
                Kt(Qr, Qt(ze), re().title, window.scrollY)),
                Q.config.historyEnabled && history.replaceState({
                    htmx: !0
                }, re().title, window.location.href)
            }
            function tr(ze) {
                Q.config.getCacheBusterParam && (ze = ze.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""),
                (G(ze, "&") || G(ze, "?")) && (ze = ze.slice(0, -1))),
                Q.config.historyEnabled && history.pushState({
                    htmx: !0
                }, "", ze),
                Jt = ze
            }
            function rr(ze) {
                Q.config.historyEnabled && history.replaceState({
                    htmx: !0
                }, "", ze),
                Jt = ze
            }
            function nr(ze) {
                oe(ze, function(Qr) {
                    Qr.call()
                })
            }
            function ir(ze) {
                var Qr = new XMLHttpRequest
                  , Kr = {
                    path: ze,
                    xhr: Qr
                };
                ce(re().body, "htmx:historyCacheMiss", Kr),
                Qr.open("GET", ze, !0),
                Qr.setRequestHeader("HX-Request", "true"),
                Qr.setRequestHeader("HX-History-Restore-Request", "true"),
                Qr.setRequestHeader("HX-Current-URL", re().location.href),
                Qr.onload = function() {
                    if (this.status >= 200 && this.status < 400) {
                        ce(re().body, "htmx:historyCacheMissLoad", Kr);
                        var Wr = l(this.response);
                        Wr = Wr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Wr;
                        var Jr = Zt()
                          , Yr = T(Jr)
                          , Gr = Ve(this.response);
                        if (Gr) {
                            var Zr = C("title");
                            Zr ? Zr.innerHTML = Gr : window.document.title = Gr
                        }
                        Ue(Jr, Wr, Yr),
                        nr(Yr.tasks),
                        Jt = ze,
                        ce(re().body, "htmx:historyRestore", {
                            path: ze,
                            cacheMiss: !0,
                            serverResponse: this.response
                        })
                    } else
                        fe(re().body, "htmx:historyCacheMissLoadError", Kr)
                }
                ,
                Qr.send()
            }
            function ar(ze) {
                er(),
                ze = ze || location.pathname + location.search;
                var Qr = Yt(ze);
                if (Qr) {
                    var Kr = l(Qr.content)
                      , Wr = Zt()
                      , Jr = T(Wr);
                    Ue(Wr, Kr, Jr),
                    nr(Jr.tasks),
                    document.title = Qr.title,
                    setTimeout(function() {
                        window.scrollTo(0, Qr.scroll)
                    }, 0),
                    Jt = ze,
                    ce(re().body, "htmx:historyRestore", {
                        path: ze,
                        item: Qr
                    })
                } else
                    Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(ze)
            }
            function or(ze) {
                var Qr = me(ze, "hx-indicator");
                return Qr == null && (Qr = [ze]),
                oe(Qr, function(Kr) {
                    var Wr = ae(Kr);
                    Wr.requestCount = (Wr.requestCount || 0) + 1,
                    Kr.classList.add.call(Kr.classList, Q.config.requestClass)
                }),
                Qr
            }
            function sr(ze) {
                var Qr = me(ze, "hx-disabled-elt");
                return Qr == null && (Qr = []),
                oe(Qr, function(Kr) {
                    var Wr = ae(Kr);
                    Wr.requestCount = (Wr.requestCount || 0) + 1,
                    Kr.setAttribute("disabled", "")
                }),
                Qr
            }
            function lr(ze, Qr) {
                oe(ze, function(Kr) {
                    var Wr = ae(Kr);
                    Wr.requestCount = (Wr.requestCount || 0) - 1,
                    Wr.requestCount === 0 && Kr.classList.remove.call(Kr.classList, Q.config.requestClass)
                }),
                oe(Qr, function(Kr) {
                    var Wr = ae(Kr);
                    Wr.requestCount = (Wr.requestCount || 0) - 1,
                    Wr.requestCount === 0 && Kr.removeAttribute("disabled")
                })
            }
            function ur(ze, Qr) {
                for (var Kr = 0; Kr < ze.length; Kr++) {
                    var Wr = ze[Kr];
                    if (Wr.isSameNode(Qr))
                        return !0
                }
                return !1
            }
            function fr(ze) {
                return ze.name === "" || ze.name == null || ze.disabled || v(ze, "fieldset[disabled]") || ze.type === "button" || ze.type === "submit" || ze.tagName === "image" || ze.tagName === "reset" || ze.tagName === "file" ? !1 : ze.type === "checkbox" || ze.type === "radio" ? ze.checked : !0
            }
            function cr(ze, Qr, Kr) {
                if (ze != null && Qr != null) {
                    var Wr = Kr[ze];
                    Wr === void 0 ? Kr[ze] = Qr : Array.isArray(Wr) ? Array.isArray(Qr) ? Kr[ze] = Wr.concat(Qr) : Wr.push(Qr) : Array.isArray(Qr) ? Kr[ze] = [Wr].concat(Qr) : Kr[ze] = [Wr, Qr]
                }
            }
            function hr(ze, Qr, Kr, Wr, Jr) {
                if (!(Wr == null || ur(ze, Wr))) {
                    if (ze.push(Wr),
                    fr(Wr)) {
                        var Yr = ee(Wr, "name")
                          , Gr = Wr.value;
                        Wr.multiple && Wr.tagName === "SELECT" && (Gr = M(Wr.querySelectorAll("option:checked")).map(function(en) {
                            return en.value
                        })),
                        Wr.files && (Gr = M(Wr.files)),
                        cr(Yr, Gr, Qr),
                        Jr && vr(Wr, Kr)
                    }
                    if (h(Wr, "form")) {
                        var Zr = Wr.elements;
                        oe(Zr, function(en) {
                            hr(ze, Qr, Kr, en, Jr)
                        })
                    }
                }
            }
            function vr(ze, Qr) {
                ze.willValidate && (ce(ze, "htmx:validation:validate"),
                ze.checkValidity() || (Qr.push({
                    elt: ze,
                    message: ze.validationMessage,
                    validity: ze.validity
                }),
                ce(ze, "htmx:validation:failed", {
                    message: ze.validationMessage,
                    validity: ze.validity
                })))
            }
            function dr(ze, Qr) {
                var Kr = []
                  , Wr = {}
                  , Jr = {}
                  , Yr = []
                  , Gr = ae(ze);
                Gr.lastButtonClicked && !se(Gr.lastButtonClicked) && (Gr.lastButtonClicked = null);
                var Zr = h(ze, "form") && ze.noValidate !== !0 || te(ze, "hx-validate") === "true";
                if (Gr.lastButtonClicked && (Zr = Zr && Gr.lastButtonClicked.formNoValidate !== !0),
                Qr !== "get" && hr(Kr, Jr, Yr, v(ze, "form"), Zr),
                hr(Kr, Wr, Yr, ze, Zr),
                Gr.lastButtonClicked || ze.tagName === "BUTTON" || ze.tagName === "INPUT" && ee(ze, "type") === "submit") {
                    var en = Gr.lastButtonClicked || ze
                      , tn = ee(en, "name");
                    cr(tn, en.value, Jr)
                }
                var rn = me(ze, "hx-include");
                return oe(rn, function(nn) {
                    hr(Kr, Wr, Yr, nn, Zr),
                    h(nn, "form") || oe(nn.querySelectorAll(rt), function(an) {
                        hr(Kr, Wr, Yr, an, Zr)
                    })
                }),
                Wr = le(Wr, Jr),
                {
                    errors: Yr,
                    values: Wr
                }
            }
            function gr(ze, Qr, Kr) {
                ze !== "" && (ze += "&"),
                String(Kr) === "[object Object]" && (Kr = JSON.stringify(Kr));
                var Wr = encodeURIComponent(Kr);
                return ze += encodeURIComponent(Qr) + "=" + Wr,
                ze
            }
            function pr(ze) {
                var Qr = "";
                for (var Kr in ze)
                    if (ze.hasOwnProperty(Kr)) {
                        var Wr = ze[Kr];
                        Array.isArray(Wr) ? oe(Wr, function(Jr) {
                            Qr = gr(Qr, Kr, Jr)
                        }) : Qr = gr(Qr, Kr, Wr)
                    }
                return Qr
            }
            function mr(ze) {
                var Qr = new FormData;
                for (var Kr in ze)
                    if (ze.hasOwnProperty(Kr)) {
                        var Wr = ze[Kr];
                        Array.isArray(Wr) ? oe(Wr, function(Jr) {
                            Qr.append(Kr, Jr)
                        }) : Qr.append(Kr, Wr)
                    }
                return Qr
            }
            function xr(ze, Qr, Kr) {
                var Wr = {
                    "HX-Request": "true",
                    "HX-Trigger": ee(ze, "id"),
                    "HX-Trigger-Name": ee(ze, "name"),
                    "HX-Target": te(Qr, "id"),
                    "HX-Current-URL": re().location.href
                };
                return Rr(ze, "hx-headers", !1, Wr),
                Kr !== void 0 && (Wr["HX-Prompt"] = Kr),
                ae(ze).boosted && (Wr["HX-Boosted"] = "true"),
                Wr
            }
            function yr(ze, Qr) {
                var Kr = ne(Qr, "hx-params");
                if (Kr) {
                    if (Kr === "none")
                        return {};
                    if (Kr === "*")
                        return ze;
                    if (Kr.indexOf("not ") === 0)
                        return oe(Kr.substr(4).split(","), function(Jr) {
                            Jr = Jr.trim(),
                            delete ze[Jr]
                        }),
                        ze;
                    var Wr = {};
                    return oe(Kr.split(","), function(Jr) {
                        Jr = Jr.trim(),
                        Wr[Jr] = ze[Jr]
                    }),
                    Wr
                } else
                    return ze
            }
            function br(ze) {
                return ee(ze, "href") && ee(ze, "href").indexOf("#") >= 0
            }
            function wr(ze, Qr) {
                var Kr = Qr || ne(ze, "hx-swap")
                  , Wr = {
                    swapStyle: ae(ze).boosted ? "innerHTML" : Q.config.defaultSwapStyle,
                    swapDelay: Q.config.defaultSwapDelay,
                    settleDelay: Q.config.defaultSettleDelay
                };
                if (Q.config.scrollIntoViewOnBoost && ae(ze).boosted && !br(ze) && (Wr.show = "top"),
                Kr) {
                    var Jr = D(Kr);
                    if (Jr.length > 0)
                        for (var Yr = 0; Yr < Jr.length; Yr++) {
                            var Gr = Jr[Yr];
                            if (Gr.indexOf("swap:") === 0)
                                Wr.swapDelay = d(Gr.substr(5));
                            else if (Gr.indexOf("settle:") === 0)
                                Wr.settleDelay = d(Gr.substr(7));
                            else if (Gr.indexOf("transition:") === 0)
                                Wr.transition = Gr.substr(11) === "true";
                            else if (Gr.indexOf("ignoreTitle:") === 0)
                                Wr.ignoreTitle = Gr.substr(12) === "true";
                            else if (Gr.indexOf("scroll:") === 0) {
                                var Zr = Gr.substr(7)
                                  , en = Zr.split(":")
                                  , tn = en.pop()
                                  , rn = en.length > 0 ? en.join(":") : null;
                                Wr.scroll = tn,
                                Wr.scrollTarget = rn
                            } else if (Gr.indexOf("show:") === 0) {
                                var nn = Gr.substr(5)
                                  , en = nn.split(":")
                                  , an = en.pop()
                                  , rn = en.length > 0 ? en.join(":") : null;
                                Wr.show = an,
                                Wr.showTarget = rn
                            } else if (Gr.indexOf("focus-scroll:") === 0) {
                                var cn = Gr.substr(13);
                                Wr.focusScroll = cn == "true"
                            } else
                                Yr == 0 ? Wr.swapStyle = Gr : b("Unknown modifier in hx-swap: " + Gr)
                        }
                }
                return Wr
            }
            function Sr(ze) {
                return ne(ze, "hx-encoding") === "multipart/form-data" || h(ze, "form") && ee(ze, "enctype") === "multipart/form-data"
            }
            function Er(ze, Qr, Kr) {
                var Wr = null;
                return R(Qr, function(Jr) {
                    Wr == null && (Wr = Jr.encodeParameters(ze, Kr, Qr))
                }),
                Wr ?? (Sr(Qr) ? mr(Kr) : pr(Kr))
            }
            function T(ze) {
                return {
                    tasks: [],
                    elts: [ze]
                }
            }
            function Cr(ze, Qr) {
                var Kr = ze[0]
                  , Wr = ze[ze.length - 1];
                if (Qr.scroll) {
                    var Jr = null;
                    Qr.scrollTarget && (Jr = ue(Kr, Qr.scrollTarget)),
                    Qr.scroll === "top" && (Kr || Jr) && (Jr = Jr || Kr,
                    Jr.scrollTop = 0),
                    Qr.scroll === "bottom" && (Wr || Jr) && (Jr = Jr || Wr,
                    Jr.scrollTop = Jr.scrollHeight)
                }
                if (Qr.show) {
                    var Jr = null;
                    if (Qr.showTarget) {
                        var Yr = Qr.showTarget;
                        Qr.showTarget === "window" && (Yr = "body"),
                        Jr = ue(Kr, Yr)
                    }
                    Qr.show === "top" && (Kr || Jr) && (Jr = Jr || Kr,
                    Jr.scrollIntoView({
                        block: "start",
                        behavior: Q.config.scrollBehavior
                    })),
                    Qr.show === "bottom" && (Wr || Jr) && (Jr = Jr || Wr,
                    Jr.scrollIntoView({
                        block: "end",
                        behavior: Q.config.scrollBehavior
                    }))
                }
            }
            function Rr(ze, Qr, Kr, Wr) {
                if (Wr == null && (Wr = {}),
                ze == null)
                    return Wr;
                var Jr = te(ze, Qr);
                if (Jr) {
                    var Yr = Jr.trim()
                      , Gr = Kr;
                    if (Yr === "unset")
                        return null;
                    Yr.indexOf("javascript:") === 0 ? (Yr = Yr.substr(11),
                    Gr = !0) : Yr.indexOf("js:") === 0 && (Yr = Yr.substr(3),
                    Gr = !0),
                    Yr.indexOf("{") !== 0 && (Yr = "{" + Yr + "}");
                    var Zr;
                    Gr ? Zr = Tr(ze, function() {
                        return Function("return (" + Yr + ")")()
                    }, {}) : Zr = E(Yr);
                    for (var en in Zr)
                        Zr.hasOwnProperty(en) && Wr[en] == null && (Wr[en] = Zr[en])
                }
                return Rr(u(ze), Qr, Kr, Wr)
            }
            function Tr(ze, Qr, Kr) {
                return Q.config.allowEval ? Qr() : (fe(ze, "htmx:evalDisallowedError"),
                Kr)
            }
            function Or(ze, Qr) {
                return Rr(ze, "hx-vars", !0, Qr)
            }
            function qr(ze, Qr) {
                return Rr(ze, "hx-vals", !1, Qr)
            }
            function Hr(ze) {
                return le(Or(ze), qr(ze))
            }
            function Lr(ze, Qr, Kr) {
                if (Kr !== null)
                    try {
                        ze.setRequestHeader(Qr, Kr)
                    } catch {
                        ze.setRequestHeader(Qr, encodeURIComponent(Kr)),
                        ze.setRequestHeader(Qr + "-URI-AutoEncoded", "true")
                    }
            }
            function Ar(ze) {
                if (ze.responseURL && typeof URL < "u")
                    try {
                        var Qr = new URL(ze.responseURL);
                        return Qr.pathname + Qr.search
                    } catch {
                        fe(re().body, "htmx:badResponseUrl", {
                            url: ze.responseURL
                        })
                    }
            }
            function O(ze, Qr) {
                return Qr.test(ze.getAllResponseHeaders())
            }
            function Nr(ze, Qr, Kr) {
                return ze = ze.toLowerCase(),
                Kr ? Kr instanceof Element || I(Kr, "String") ? he(ze, Qr, null, null, {
                    targetOverride: p(Kr),
                    returnPromise: !0
                }) : he(ze, Qr, p(Kr.source), Kr.event, {
                    handler: Kr.handler,
                    headers: Kr.headers,
                    values: Kr.values,
                    targetOverride: p(Kr.target),
                    swapOverride: Kr.swap,
                    select: Kr.select,
                    returnPromise: !0
                }) : he(ze, Qr, null, null, {
                    returnPromise: !0
                })
            }
            function Ir(ze) {
                for (var Qr = []; ze; )
                    Qr.push(ze),
                    ze = ze.parentElement;
                return Qr
            }
            function kr(ze, Qr, Kr) {
                var Wr, Jr;
                if (typeof URL == "function") {
                    Jr = new URL(Qr,document.location.href);
                    var Yr = document.location.origin;
                    Wr = Yr === Jr.origin
                } else
                    Jr = Qr,
                    Wr = g(Qr, document.location.origin);
                return Q.config.selfRequestsOnly && !Wr ? !1 : ce(ze, "htmx:validateUrl", le({
                    url: Jr,
                    sameHost: Wr
                }, Kr))
            }
            function he(ze, Qr, Kr, Wr, Jr, Yr) {
                var Gr = null
                  , Zr = null;
                if (Jr = Jr ?? {},
                Jr.returnPromise && typeof Promise < "u")
                    var en = new Promise(function(Hn, Xn) {
                        Gr = Hn,
                        Zr = Xn
                    }
                    );
                Kr == null && (Kr = re().body);
                var tn = Jr.handler || Mr
                  , rn = Jr.select || null;
                if (!se(Kr))
                    return ie(Gr),
                    en;
                var nn = Jr.targetOverride || ye(Kr);
                if (nn == null || nn == pe)
                    return fe(Kr, "htmx:targetError", {
                        target: te(Kr, "hx-target")
                    }),
                    ie(Zr),
                    en;
                var an = ae(Kr)
                  , cn = an.lastButtonClicked;
                if (cn) {
                    var dn = ee(cn, "formaction");
                    dn != null && (Qr = dn);
                    var wn = ee(cn, "formmethod");
                    wn != null && wn.toLowerCase() !== "dialog" && (ze = wn)
                }
                var un = ne(Kr, "hx-confirm");
                if (Yr === void 0) {
                    var vn = function(Hn) {
                        return he(ze, Qr, Kr, Wr, Jr, !!Hn)
                    }
                      , yn = {
                        target: nn,
                        elt: Kr,
                        path: Qr,
                        verb: ze,
                        triggeringEvent: Wr,
                        etc: Jr,
                        issueRequest: vn,
                        question: un
                    };
                    if (ce(Kr, "htmx:confirm", yn) === !1)
                        return ie(Gr),
                        en
                }
                var xn = Kr
                  , _n = ne(Kr, "hx-sync")
                  , Sn = null
                  , Cn = !1;
                if (_n) {
                    var Rn = _n.split(":")
                      , hn = Rn[0].trim();
                    if (hn === "this" ? xn = xe(Kr, "hx-sync") : xn = ue(Kr, hn),
                    _n = (Rn[1] || "drop").trim(),
                    an = ae(xn),
                    _n === "drop" && an.xhr && an.abortable !== !0)
                        return ie(Gr),
                        en;
                    if (_n === "abort") {
                        if (an.xhr)
                            return ie(Gr),
                            en;
                        Cn = !0
                    } else if (_n === "replace")
                        ce(xn, "htmx:abort");
                    else if (_n.indexOf("queue") === 0) {
                        var kn = _n.split(" ");
                        Sn = (kn[1] || "last").trim()
                    }
                }
                if (an.xhr)
                    if (an.abortable)
                        ce(xn, "htmx:abort");
                    else {
                        if (Sn == null) {
                            if (Wr) {
                                var En = ae(Wr);
                                En && En.triggerSpec && En.triggerSpec.queue && (Sn = En.triggerSpec.queue)
                            }
                            Sn == null && (Sn = "last")
                        }
                        return an.queuedRequests == null && (an.queuedRequests = []),
                        Sn === "first" && an.queuedRequests.length === 0 ? an.queuedRequests.push(function() {
                            he(ze, Qr, Kr, Wr, Jr)
                        }) : Sn === "all" ? an.queuedRequests.push(function() {
                            he(ze, Qr, Kr, Wr, Jr)
                        }) : Sn === "last" && (an.queuedRequests = [],
                        an.queuedRequests.push(function() {
                            he(ze, Qr, Kr, Wr, Jr)
                        })),
                        ie(Gr),
                        en
                    }
                var ln = new XMLHttpRequest;
                an.xhr = ln,
                an.abortable = Cn;
                var sn = function() {
                    if (an.xhr = null,
                    an.abortable = !1,
                    an.queuedRequests != null && an.queuedRequests.length > 0) {
                        var Hn = an.queuedRequests.shift();
                        Hn()
                    }
                }
                  , gn = ne(Kr, "hx-prompt");
                if (gn) {
                    var fn = prompt(gn);
                    if (fn === null || !ce(Kr, "htmx:prompt", {
                        prompt: fn,
                        target: nn
                    }))
                        return ie(Gr),
                        sn(),
                        en
                }
                if (un && !Yr && !confirm(un))
                    return ie(Gr),
                    sn(),
                    en;
                var mn = xr(Kr, nn, fn);
                ze !== "get" && !Sr(Kr) && (mn["Content-Type"] = "application/x-www-form-urlencoded"),
                Jr.headers && (mn = le(mn, Jr.headers));
                var Pn = dr(Kr, ze)
                  , jn = Pn.errors
                  , Ln = Pn.values;
                Jr.values && (Ln = le(Ln, Jr.values));
                var Kn = Hr(Kr)
                  , Vn = le(Ln, Kn)
                  , Bn = yr(Vn, Kr);
                Q.config.getCacheBusterParam && ze === "get" && (Bn["org.htmx.cache-buster"] = ee(nn, "id") || "true"),
                (Qr == null || Qr === "") && (Qr = re().location.href);
                var Un = Rr(Kr, "hx-request")
                  , qn = ae(Kr).boosted
                  , Nn = Q.config.methodsThatUseUrlParams.indexOf(ze) >= 0
                  , On = {
                    boosted: qn,
                    useUrlParams: Nn,
                    parameters: Bn,
                    unfilteredParameters: Vn,
                    headers: mn,
                    target: nn,
                    verb: ze,
                    errors: jn,
                    withCredentials: Jr.credentials || Un.credentials || Q.config.withCredentials,
                    timeout: Jr.timeout || Un.timeout || Q.config.timeout,
                    path: Qr,
                    triggeringEvent: Wr
                };
                if (!ce(Kr, "htmx:configRequest", On))
                    return ie(Gr),
                    sn(),
                    en;
                if (Qr = On.path,
                ze = On.verb,
                mn = On.headers,
                Bn = On.parameters,
                jn = On.errors,
                Nn = On.useUrlParams,
                jn && jn.length > 0)
                    return ce(Kr, "htmx:validation:halted", On),
                    ie(Gr),
                    sn(),
                    en;
                var Dn = Qr.split("#")
                  , Mn = Dn[0]
                  , An = Dn[1]
                  , Tn = Qr;
                if (Nn) {
                    Tn = Mn;
                    var Qn = Object.keys(Bn).length !== 0;
                    Qn && (Tn.indexOf("?") < 0 ? Tn += "?" : Tn += "&",
                    Tn += pr(Bn),
                    An && (Tn += "#" + An))
                }
                if (!kr(Kr, Tn, On))
                    return fe(Kr, "htmx:invalidPath", On),
                    ie(Zr),
                    en;
                if (ln.open(ze.toUpperCase(), Tn, !0),
                ln.overrideMimeType("text/html"),
                ln.withCredentials = On.withCredentials,
                ln.timeout = On.timeout,
                !Un.noHeaders) {
                    for (var Fn in mn)
                        if (mn.hasOwnProperty(Fn)) {
                            var $n = mn[Fn];
                            Lr(ln, Fn, $n)
                        }
                }
                var pn = {
                    xhr: ln,
                    target: nn,
                    requestConfig: On,
                    etc: Jr,
                    boosted: qn,
                    select: rn,
                    pathInfo: {
                        requestPath: Qr,
                        finalRequestPath: Tn,
                        anchor: An
                    }
                };
                if (ln.onload = function() {
                    try {
                        var Hn = Ir(Kr);
                        if (pn.pathInfo.responsePath = Ar(ln),
                        tn(Kr, pn),
                        lr(bn, In),
                        ce(Kr, "htmx:afterRequest", pn),
                        ce(Kr, "htmx:afterOnLoad", pn),
                        !se(Kr)) {
                            for (var Xn = null; Hn.length > 0 && Xn == null; ) {
                                var Wn = Hn.shift();
                                se(Wn) && (Xn = Wn)
                            }
                            Xn && (ce(Xn, "htmx:afterRequest", pn),
                            ce(Xn, "htmx:afterOnLoad", pn))
                        }
                        ie(Gr),
                        sn()
                    } catch (Jn) {
                        throw fe(Kr, "htmx:onLoadError", le({
                            error: Jn
                        }, pn)),
                        Jn
                    }
                }
                ,
                ln.onerror = function() {
                    lr(bn, In),
                    fe(Kr, "htmx:afterRequest", pn),
                    fe(Kr, "htmx:sendError", pn),
                    ie(Zr),
                    sn()
                }
                ,
                ln.onabort = function() {
                    lr(bn, In),
                    fe(Kr, "htmx:afterRequest", pn),
                    fe(Kr, "htmx:sendAbort", pn),
                    ie(Zr),
                    sn()
                }
                ,
                ln.ontimeout = function() {
                    lr(bn, In),
                    fe(Kr, "htmx:afterRequest", pn),
                    fe(Kr, "htmx:timeout", pn),
                    ie(Zr),
                    sn()
                }
                ,
                !ce(Kr, "htmx:beforeRequest", pn))
                    return ie(Gr),
                    sn(),
                    en;
                var bn = or(Kr)
                  , In = sr(Kr);
                oe(["loadstart", "loadend", "progress", "abort"], function(Hn) {
                    oe([ln, ln.upload], function(Xn) {
                        Xn.addEventListener(Hn, function(Wn) {
                            ce(Kr, "htmx:xhr:" + Hn, {
                                lengthComputable: Wn.lengthComputable,
                                loaded: Wn.loaded,
                                total: Wn.total
                            })
                        })
                    })
                }),
                ce(Kr, "htmx:beforeSend", pn);
                var zn = Nn ? null : Er(ln, Kr, Bn);
                return ln.send(zn),
                en
            }
            function Pr(ze, Qr) {
                var Kr = Qr.xhr
                  , Wr = null
                  , Jr = null;
                if (O(Kr, /HX-Push:/i) ? (Wr = Kr.getResponseHeader("HX-Push"),
                Jr = "push") : O(Kr, /HX-Push-Url:/i) ? (Wr = Kr.getResponseHeader("HX-Push-Url"),
                Jr = "push") : O(Kr, /HX-Replace-Url:/i) && (Wr = Kr.getResponseHeader("HX-Replace-Url"),
                Jr = "replace"),
                Wr)
                    return Wr === "false" ? {} : {
                        type: Jr,
                        path: Wr
                    };
                var Yr = Qr.pathInfo.finalRequestPath
                  , Gr = Qr.pathInfo.responsePath
                  , Zr = ne(ze, "hx-push-url")
                  , en = ne(ze, "hx-replace-url")
                  , tn = ae(ze).boosted
                  , rn = null
                  , nn = null;
                return Zr ? (rn = "push",
                nn = Zr) : en ? (rn = "replace",
                nn = en) : tn && (rn = "push",
                nn = Gr || Yr),
                nn ? nn === "false" ? {} : (nn === "true" && (nn = Gr || Yr),
                Qr.pathInfo.anchor && nn.indexOf("#") === -1 && (nn = nn + "#" + Qr.pathInfo.anchor),
                {
                    type: rn,
                    path: nn
                }) : {}
            }
            function Mr(ze, Qr) {
                var Kr = Qr.xhr
                  , Wr = Qr.target
                  , Jr = Qr.etc;
                Qr.requestConfig;
                var Yr = Qr.select;
                if (ce(ze, "htmx:beforeOnLoad", Qr)) {
                    if (O(Kr, /HX-Trigger:/i) && _e(Kr, "HX-Trigger", ze),
                    O(Kr, /HX-Location:/i)) {
                        er();
                        var Gr = Kr.getResponseHeader("HX-Location"), Zr;
                        Gr.indexOf("{") === 0 && (Zr = E(Gr),
                        Gr = Zr.path,
                        delete Zr.path),
                        Nr("GET", Gr, Zr).then(function() {
                            tr(Gr)
                        });
                        return
                    }
                    var en = O(Kr, /HX-Refresh:/i) && Kr.getResponseHeader("HX-Refresh") === "true";
                    if (O(Kr, /HX-Redirect:/i)) {
                        location.href = Kr.getResponseHeader("HX-Redirect"),
                        en && location.reload();
                        return
                    }
                    if (en) {
                        location.reload();
                        return
                    }
                    O(Kr, /HX-Retarget:/i) && (Kr.getResponseHeader("HX-Retarget") === "this" ? Qr.target = ze : Qr.target = ue(ze, Kr.getResponseHeader("HX-Retarget")));
                    var tn = Pr(ze, Qr)
                      , rn = Kr.status >= 200 && Kr.status < 400 && Kr.status !== 204
                      , nn = Kr.response
                      , an = Kr.status >= 400
                      , cn = Q.config.ignoreTitle
                      , dn = le({
                        shouldSwap: rn,
                        serverResponse: nn,
                        isError: an,
                        ignoreTitle: cn
                    }, Qr);
                    if (ce(Wr, "htmx:beforeSwap", dn)) {
                        if (Wr = dn.target,
                        nn = dn.serverResponse,
                        an = dn.isError,
                        cn = dn.ignoreTitle,
                        Qr.target = Wr,
                        Qr.failed = an,
                        Qr.successful = !an,
                        dn.shouldSwap) {
                            Kr.status === 286 && at(ze),
                            R(ze, function(Rn) {
                                nn = Rn.transformResponse(nn, Kr, ze)
                            }),
                            tn.type && er();
                            var wn = Jr.swapOverride;
                            O(Kr, /HX-Reswap:/i) && (wn = Kr.getResponseHeader("HX-Reswap"));
                            var Zr = wr(ze, wn);
                            Zr.hasOwnProperty("ignoreTitle") && (cn = Zr.ignoreTitle),
                            Wr.classList.add(Q.config.swappingClass);
                            var un = null
                              , vn = null
                              , yn = function() {
                                try {
                                    var Rn = document.activeElement
                                      , hn = {};
                                    try {
                                        hn = {
                                            elt: Rn,
                                            start: Rn ? Rn.selectionStart : null,
                                            end: Rn ? Rn.selectionEnd : null
                                        }
                                    } catch {}
                                    var kn;
                                    Yr && (kn = Yr),
                                    O(Kr, /HX-Reselect:/i) && (kn = Kr.getResponseHeader("HX-Reselect")),
                                    tn.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({
                                        history: tn
                                    }, Qr)),
                                    tn.type === "push" ? (tr(tn.path),
                                    ce(re().body, "htmx:pushedIntoHistory", {
                                        path: tn.path
                                    })) : (rr(tn.path),
                                    ce(re().body, "htmx:replacedInHistory", {
                                        path: tn.path
                                    })));
                                    var En = T(Wr);
                                    if (je(Zr.swapStyle, Wr, ze, nn, En, kn),
                                    hn.elt && !se(hn.elt) && ee(hn.elt, "id")) {
                                        var ln = document.getElementById(ee(hn.elt, "id"))
                                          , sn = {
                                            preventScroll: Zr.focusScroll !== void 0 ? !Zr.focusScroll : !Q.config.defaultFocusScroll
                                        };
                                        if (ln) {
                                            if (hn.start && ln.setSelectionRange)
                                                try {
                                                    ln.setSelectionRange(hn.start, hn.end)
                                                } catch {}
                                            ln.focus(sn)
                                        }
                                    }
                                    if (Wr.classList.remove(Q.config.swappingClass),
                                    oe(En.elts, function(mn) {
                                        mn.classList && mn.classList.add(Q.config.settlingClass),
                                        ce(mn, "htmx:afterSwap", Qr)
                                    }),
                                    O(Kr, /HX-Trigger-After-Swap:/i)) {
                                        var gn = ze;
                                        se(ze) || (gn = re().body),
                                        _e(Kr, "HX-Trigger-After-Swap", gn)
                                    }
                                    var fn = function() {
                                        if (oe(En.tasks, function(Ln) {
                                            Ln.call()
                                        }),
                                        oe(En.elts, function(Ln) {
                                            Ln.classList && Ln.classList.remove(Q.config.settlingClass),
                                            ce(Ln, "htmx:afterSettle", Qr)
                                        }),
                                        Qr.pathInfo.anchor) {
                                            var mn = re().getElementById(Qr.pathInfo.anchor);
                                            mn && mn.scrollIntoView({
                                                block: "start",
                                                behavior: "auto"
                                            })
                                        }
                                        if (En.title && !cn) {
                                            var Pn = C("title");
                                            Pn ? Pn.innerHTML = En.title : window.document.title = En.title
                                        }
                                        if (Cr(En.elts, Zr),
                                        O(Kr, /HX-Trigger-After-Settle:/i)) {
                                            var jn = ze;
                                            se(ze) || (jn = re().body),
                                            _e(Kr, "HX-Trigger-After-Settle", jn)
                                        }
                                        ie(un)
                                    };
                                    Zr.settleDelay > 0 ? setTimeout(fn, Zr.settleDelay) : fn()
                                } catch (mn) {
                                    throw fe(ze, "htmx:swapError", Qr),
                                    ie(vn),
                                    mn
                                }
                            }
                              , xn = Q.config.globalViewTransitions;
                            if (Zr.hasOwnProperty("transition") && (xn = Zr.transition),
                            xn && ce(ze, "htmx:beforeTransition", Qr) && typeof Promise < "u" && document.startViewTransition) {
                                var _n = new Promise(function(Rn, hn) {
                                    un = Rn,
                                    vn = hn
                                }
                                )
                                  , Sn = yn;
                                yn = function() {
                                    document.startViewTransition(function() {
                                        return Sn(),
                                        _n
                                    })
                                }
                            }
                            Zr.swapDelay > 0 ? setTimeout(yn, Zr.swapDelay) : yn()
                        }
                        an && fe(ze, "htmx:responseError", le({
                            error: "Response Status Error Code " + Kr.status + " from " + Qr.pathInfo.requestPath
                        }, Qr))
                    }
                }
            }
            var Xr = {};
            function Dr() {
                return {
                    init: function(ze) {
                        return null
                    },
                    onEvent: function(ze, Qr) {
                        return !0
                    },
                    transformResponse: function(ze, Qr, Kr) {
                        return ze
                    },
                    isInlineSwap: function(ze) {
                        return !1
                    },
                    handleSwap: function(ze, Qr, Kr, Wr) {
                        return !1
                    },
                    encodeParameters: function(ze, Qr, Kr) {
                        return null
                    }
                }
            }
            function Ur(ze, Qr) {
                Qr.init && Qr.init(r),
                Xr[ze] = le(Dr(), Qr)
            }
            function Br(ze) {
                delete Xr[ze]
            }
            function Fr(ze, Qr, Kr) {
                if (ze == null)
                    return Qr;
                Qr == null && (Qr = []),
                Kr == null && (Kr = []);
                var Wr = te(ze, "hx-ext");
                return Wr && oe(Wr.split(","), function(Jr) {
                    if (Jr = Jr.replace(/ /g, ""),
                    Jr.slice(0, 7) == "ignore:") {
                        Kr.push(Jr.slice(7));
                        return
                    }
                    if (Kr.indexOf(Jr) < 0) {
                        var Yr = Xr[Jr];
                        Yr && Qr.indexOf(Yr) < 0 && Qr.push(Yr)
                    }
                }),
                Fr(u(ze), Qr, Kr)
            }
            var Vr = !1;
            re().addEventListener("DOMContentLoaded", function() {
                Vr = !0
            });
            function jr(ze) {
                Vr || re().readyState === "complete" ? ze() : re().addEventListener("DOMContentLoaded", ze)
            }
            function _r() {
                Q.config.includeIndicatorStyles !== !1 && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>")
            }
            function zr() {
                var ze = re().querySelector('meta[name="htmx-config"]');
                return ze ? E(ze.content) : null
            }
            function $r() {
                var ze = zr();
                ze && (Q.config = le(Q.config, ze))
            }
            return jr(function() {
                $r(),
                _r();
                var ze = re().body;
                zt(ze);
                var Qr = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
                ze.addEventListener("htmx:abort", function(Wr) {
                    var Jr = Wr.target
                      , Yr = ae(Jr);
                    Yr && Yr.xhr && Yr.xhr.abort()
                });
                const Kr = window.onpopstate ? window.onpopstate.bind(window) : null;
                window.onpopstate = function(Wr) {
                    Wr.state && Wr.state.htmx ? (ar(),
                    oe(Qr, function(Jr) {
                        ce(Jr, "htmx:restored", {
                            document: re(),
                            triggerEvent: ce
                        })
                    })) : Kr && Kr(Wr)
                }
                ,
                setTimeout(function() {
                    ce(ze, "htmx:load", {}),
                    ze = null
                }, 0)
            }),
            Q
        }()
    })
}
)(htmx_min$1);
var htmx_minExports = htmx_min$1.exports;
const htmx_min = getDefaultExportFromCjs(htmx_minExports)
  , htmx$1 = _mergeNamespaces({
    __proto__: null,
    default: htmx_min
}, [htmx_minExports]);
var flushPending = !1
  , flushing = !1
  , queue = []
  , lastFlushedIndex = -1;
function scheduler(ze) {
    queueJob(ze)
}
function queueJob(ze) {
    queue.includes(ze) || queue.push(ze),
    queueFlush()
}
function dequeueJob(ze) {
    let Qr = queue.indexOf(ze);
    Qr !== -1 && Qr > lastFlushedIndex && queue.splice(Qr, 1)
}
function queueFlush() {
    !flushing && !flushPending && (flushPending = !0,
    queueMicrotask(flushJobs))
}
function flushJobs() {
    flushPending = !1,
    flushing = !0;
    for (let ze = 0; ze < queue.length; ze++)
        queue[ze](),
        lastFlushedIndex = ze;
    queue.length = 0,
    lastFlushedIndex = -1,
    flushing = !1
}
var reactive, effect, release, raw, shouldSchedule = !0;
function disableEffectScheduling(ze) {
    shouldSchedule = !1,
    ze(),
    shouldSchedule = !0
}
function setReactivityEngine(ze) {
    reactive = ze.reactive,
    release = ze.release,
    effect = Qr => ze.effect(Qr, {
        scheduler: Kr => {
            shouldSchedule ? scheduler(Kr) : Kr()
        }
    }),
    raw = ze.raw
}
function overrideEffect(ze) {
    effect = ze
}
function elementBoundEffect(ze) {
    let Qr = () => {}
    ;
    return [Wr => {
        let Jr = effect(Wr);
        return ze._x_effects || (ze._x_effects = new Set,
        ze._x_runEffects = () => {
            ze._x_effects.forEach(Yr => Yr())
        }
        ),
        ze._x_effects.add(Jr),
        Qr = () => {
            Jr !== void 0 && (ze._x_effects.delete(Jr),
            release(Jr))
        }
        ,
        Jr
    }
    , () => {
        Qr()
    }
    ]
}
function dispatch(ze, Qr, Kr={}) {
    ze.dispatchEvent(new CustomEvent(Qr,{
        detail: Kr,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function walk(ze, Qr) {
    if (typeof ShadowRoot == "function" && ze instanceof ShadowRoot) {
        Array.from(ze.children).forEach(Jr => walk(Jr, Qr));
        return
    }
    let Kr = !1;
    if (Qr(ze, () => Kr = !0),
    Kr)
        return;
    let Wr = ze.firstElementChild;
    for (; Wr; )
        walk(Wr, Qr),
        Wr = Wr.nextElementSibling
}
function warn(ze, ...Qr) {
    console.warn(`Alpine Warning: ${ze}`, ...Qr)
}
var started = !1;
function start() {
    started && warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
    started = !0,
    document.body || warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    dispatch(document, "alpine:init"),
    dispatch(document, "alpine:initializing"),
    startObservingMutations(),
    onElAdded(Qr => initTree(Qr, walk)),
    onElRemoved(Qr => destroyTree(Qr)),
    onAttributesAdded( (Qr, Kr) => {
        directives(Qr, Kr).forEach(Wr => Wr())
    }
    );
    let ze = Qr => !closestRoot(Qr.parentElement, !0);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(ze).forEach(Qr => {
        initTree(Qr)
    }
    ),
    dispatch(document, "alpine:initialized")
}
var rootSelectorCallbacks = []
  , initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map(ze => ze())
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map(ze => ze())
}
function addRootSelector(ze) {
    rootSelectorCallbacks.push(ze)
}
function addInitSelector(ze) {
    initSelectorCallbacks.push(ze)
}
function closestRoot(ze, Qr=!1) {
    return findClosest(ze, Kr => {
        if ((Qr ? allSelectors() : rootSelectors()).some(Jr => Kr.matches(Jr)))
            return !0
    }
    )
}
function findClosest(ze, Qr) {
    if (ze) {
        if (Qr(ze))
            return ze;
        if (ze._x_teleportBack && (ze = ze._x_teleportBack),
        !!ze.parentElement)
            return findClosest(ze.parentElement, Qr)
    }
}
function isRoot(ze) {
    return rootSelectors().some(Qr => ze.matches(Qr))
}
var initInterceptors = [];
function interceptInit(ze) {
    initInterceptors.push(ze)
}
function initTree(ze, Qr=walk, Kr= () => {}
) {
    deferHandlingDirectives( () => {
        Qr(ze, (Wr, Jr) => {
            Kr(Wr, Jr),
            initInterceptors.forEach(Yr => Yr(Wr, Jr)),
            directives(Wr, Wr.attributes).forEach(Yr => Yr()),
            Wr._x_ignore && Jr()
        }
        )
    }
    )
}
function destroyTree(ze) {
    walk(ze, Qr => {
        cleanupAttributes(Qr),
        cleanupElement(Qr)
    }
    )
}
var onAttributeAddeds = []
  , onElRemoveds = []
  , onElAddeds = [];
function onElAdded(ze) {
    onElAddeds.push(ze)
}
function onElRemoved(ze, Qr) {
    typeof Qr == "function" ? (ze._x_cleanups || (ze._x_cleanups = []),
    ze._x_cleanups.push(Qr)) : (Qr = ze,
    onElRemoveds.push(Qr))
}
function onAttributesAdded(ze) {
    onAttributeAddeds.push(ze)
}
function onAttributeRemoved(ze, Qr, Kr) {
    ze._x_attributeCleanups || (ze._x_attributeCleanups = {}),
    ze._x_attributeCleanups[Qr] || (ze._x_attributeCleanups[Qr] = []),
    ze._x_attributeCleanups[Qr].push(Kr)
}
function cleanupAttributes(ze, Qr) {
    ze._x_attributeCleanups && Object.entries(ze._x_attributeCleanups).forEach( ([Kr,Wr]) => {
        (Qr === void 0 || Qr.includes(Kr)) && (Wr.forEach(Jr => Jr()),
        delete ze._x_attributeCleanups[Kr])
    }
    )
}
function cleanupElement(ze) {
    if (ze._x_cleanups)
        for (; ze._x_cleanups.length; )
            ze._x_cleanups.pop()()
}
var observer = new MutationObserver(onMutate)
  , currentlyObserving = !1;
function startObservingMutations() {
    observer.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    currentlyObserving = !0
}
function stopObservingMutations() {
    flushObserver(),
    observer.disconnect(),
    currentlyObserving = !1
}
var recordQueue = []
  , willProcessRecordQueue = !1;
function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords()),
    recordQueue.length && !willProcessRecordQueue && (willProcessRecordQueue = !0,
    queueMicrotask( () => {
        processRecordQueue(),
        willProcessRecordQueue = !1
    }
    ))
}
function processRecordQueue() {
    onMutate(recordQueue),
    recordQueue.length = 0
}
function mutateDom(ze) {
    if (!currentlyObserving)
        return ze();
    stopObservingMutations();
    let Qr = ze();
    return startObservingMutations(),
    Qr
}
var isCollecting = !1
  , deferredMutations = [];
function deferMutations() {
    isCollecting = !0
}
function flushAndStopDeferringMutations() {
    isCollecting = !1,
    onMutate(deferredMutations),
    deferredMutations = []
}
function onMutate(ze) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(ze);
        return
    }
    let Qr = []
      , Kr = []
      , Wr = new Map
      , Jr = new Map;
    for (let Yr = 0; Yr < ze.length; Yr++)
        if (!ze[Yr].target._x_ignoreMutationObserver && (ze[Yr].type === "childList" && (ze[Yr].addedNodes.forEach(Gr => Gr.nodeType === 1 && Qr.push(Gr)),
        ze[Yr].removedNodes.forEach(Gr => Gr.nodeType === 1 && Kr.push(Gr))),
        ze[Yr].type === "attributes")) {
            let Gr = ze[Yr].target
              , Zr = ze[Yr].attributeName
              , en = ze[Yr].oldValue
              , tn = () => {
                Wr.has(Gr) || Wr.set(Gr, []),
                Wr.get(Gr).push({
                    name: Zr,
                    value: Gr.getAttribute(Zr)
                })
            }
              , rn = () => {
                Jr.has(Gr) || Jr.set(Gr, []),
                Jr.get(Gr).push(Zr)
            }
            ;
            Gr.hasAttribute(Zr) && en === null ? tn() : Gr.hasAttribute(Zr) ? (rn(),
            tn()) : rn()
        }
    Jr.forEach( (Yr, Gr) => {
        cleanupAttributes(Gr, Yr)
    }
    ),
    Wr.forEach( (Yr, Gr) => {
        onAttributeAddeds.forEach(Zr => Zr(Gr, Yr))
    }
    );
    for (let Yr of Kr)
        Qr.includes(Yr) || (onElRemoveds.forEach(Gr => Gr(Yr)),
        destroyTree(Yr));
    Qr.forEach(Yr => {
        Yr._x_ignoreSelf = !0,
        Yr._x_ignore = !0
    }
    );
    for (let Yr of Qr)
        Kr.includes(Yr) || Yr.isConnected && (delete Yr._x_ignoreSelf,
        delete Yr._x_ignore,
        onElAddeds.forEach(Gr => Gr(Yr)),
        Yr._x_ignore = !0,
        Yr._x_ignoreSelf = !0);
    Qr.forEach(Yr => {
        delete Yr._x_ignoreSelf,
        delete Yr._x_ignore
    }
    ),
    Qr = null,
    Kr = null,
    Wr = null,
    Jr = null
}
function scope(ze) {
    return mergeProxies(closestDataStack(ze))
}
function addScopeToNode(ze, Qr, Kr) {
    return ze._x_dataStack = [Qr, ...closestDataStack(Kr || ze)],
    () => {
        ze._x_dataStack = ze._x_dataStack.filter(Wr => Wr !== Qr)
    }
}
function closestDataStack(ze) {
    return ze._x_dataStack ? ze._x_dataStack : typeof ShadowRoot == "function" && ze instanceof ShadowRoot ? closestDataStack(ze.host) : ze.parentNode ? closestDataStack(ze.parentNode) : []
}
function mergeProxies(ze) {
    return new Proxy({
        objects: ze
    },mergeProxyTrap)
}
var mergeProxyTrap = {
    ownKeys({objects: ze}) {
        return Array.from(new Set(ze.flatMap(Qr => Object.keys(Qr))))
    },
    has({objects: ze}, Qr) {
        return Qr == Symbol.unscopables ? !1 : ze.some(Kr => Object.prototype.hasOwnProperty.call(Kr, Qr))
    },
    get({objects: ze}, Qr, Kr) {
        return Qr == "toJSON" ? collapseProxies : Reflect.get(ze.find(Wr => Object.prototype.hasOwnProperty.call(Wr, Qr)) || {}, Qr, Kr)
    },
    set({objects: ze}, Qr, Kr, Wr) {
        const Jr = ze.find(Gr => Object.prototype.hasOwnProperty.call(Gr, Qr)) || ze[ze.length - 1]
          , Yr = Object.getOwnPropertyDescriptor(Jr, Qr);
        return Yr != null && Yr.set && (Yr != null && Yr.get) ? Reflect.set(Jr, Qr, Kr, Wr) : Reflect.set(Jr, Qr, Kr)
    }
};
function collapseProxies() {
    return Reflect.ownKeys(this).reduce( (Qr, Kr) => (Qr[Kr] = Reflect.get(this, Kr),
    Qr), {})
}
function initInterceptors2(ze) {
    let Qr = Wr => typeof Wr == "object" && !Array.isArray(Wr) && Wr !== null
      , Kr = (Wr, Jr="") => {
        Object.entries(Object.getOwnPropertyDescriptors(Wr)).forEach( ([Yr,{value: Gr, enumerable: Zr}]) => {
            if (Zr === !1 || Gr === void 0)
                return;
            let en = Jr === "" ? Yr : `${Jr}.${Yr}`;
            typeof Gr == "object" && Gr !== null && Gr._x_interceptor ? Wr[Yr] = Gr.initialize(ze, en, Yr) : Qr(Gr) && Gr !== Wr && !(Gr instanceof Element) && Kr(Gr, en)
        }
        )
    }
    ;
    return Kr(ze)
}
function interceptor(ze, Qr= () => {}
) {
    let Kr = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(Wr, Jr, Yr) {
            return ze(this.initialValue, () => get(Wr, Jr), Gr => set(Wr, Jr, Gr), Jr, Yr)
        }
    };
    return Qr(Kr),
    Wr => {
        if (typeof Wr == "object" && Wr !== null && Wr._x_interceptor) {
            let Jr = Kr.initialize.bind(Kr);
            Kr.initialize = (Yr, Gr, Zr) => {
                let en = Wr.initialize(Yr, Gr, Zr);
                return Kr.initialValue = en,
                Jr(Yr, Gr, Zr)
            }
        } else
            Kr.initialValue = Wr;
        return Kr
    }
}
function get(ze, Qr) {
    return Qr.split(".").reduce( (Kr, Wr) => Kr[Wr], ze)
}
function set(ze, Qr, Kr) {
    if (typeof Qr == "string" && (Qr = Qr.split(".")),
    Qr.length === 1)
        ze[Qr[0]] = Kr;
    else {
        if (Qr.length === 0)
            throw error;
        return ze[Qr[0]] || (ze[Qr[0]] = {}),
        set(ze[Qr[0]], Qr.slice(1), Kr)
    }
}
var magics = {};
function magic(ze, Qr) {
    magics[ze] = Qr
}
function injectMagics(ze, Qr) {
    return Object.entries(magics).forEach( ([Kr,Wr]) => {
        let Jr = null;
        function Yr() {
            if (Jr)
                return Jr;
            {
                let[Gr,Zr] = getElementBoundUtilities(Qr);
                return Jr = {
                    interceptor,
                    ...Gr
                },
                onElRemoved(Qr, Zr),
                Jr
            }
        }
        Object.defineProperty(ze, `$${Kr}`, {
            get() {
                return Wr(Qr, Yr())
            },
            enumerable: !1
        })
    }
    ),
    ze
}
function tryCatch(ze, Qr, Kr, ...Wr) {
    try {
        return Kr(...Wr)
    } catch (Jr) {
        handleError(Jr, ze, Qr)
    }
}
function handleError(ze, Qr, Kr=void 0) {
    Object.assign(ze, {
        el: Qr,
        expression: Kr
    }),
    console.warn(`Alpine Expression Error: ${ze.message}

${Kr ? 'Expression: "' + Kr + `"

` : ""}`, Qr),
    setTimeout( () => {
        throw ze
    }
    , 0)
}
var shouldAutoEvaluateFunctions = !0;
function dontAutoEvaluateFunctions(ze) {
    let Qr = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = !1;
    let Kr = ze();
    return shouldAutoEvaluateFunctions = Qr,
    Kr
}
function evaluate(ze, Qr, Kr={}) {
    let Wr;
    return evaluateLater(ze, Qr)(Jr => Wr = Jr, Kr),
    Wr
}
function evaluateLater(...ze) {
    return theEvaluatorFunction(...ze)
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(ze) {
    theEvaluatorFunction = ze
}
function normalEvaluator(ze, Qr) {
    let Kr = {};
    injectMagics(Kr, ze);
    let Wr = [Kr, ...closestDataStack(ze)]
      , Jr = typeof Qr == "function" ? generateEvaluatorFromFunction(Wr, Qr) : generateEvaluatorFromString(Wr, Qr, ze);
    return tryCatch.bind(null, ze, Qr, Jr)
}
function generateEvaluatorFromFunction(ze, Qr) {
    return (Kr= () => {}
    , {scope: Wr={}, params: Jr=[]}={}) => {
        let Yr = Qr.apply(mergeProxies([Wr, ...ze]), Jr);
        runIfTypeOfFunction(Kr, Yr)
    }
}
var evaluatorMemo = {};
function generateFunctionFromString(ze, Qr) {
    if (evaluatorMemo[ze])
        return evaluatorMemo[ze];
    let Kr = Object.getPrototypeOf(async function() {}).constructor
      , Wr = /^[\n\s]*if.*\(.*\)/.test(ze.trim()) || /^(let|const)\s/.test(ze.trim()) ? `(async()=>{ ${ze} })()` : ze
      , Yr = ( () => {
        try {
            let Gr = new Kr(["__self", "scope"],`with (scope) { __self.result = ${Wr} }; __self.finished = true; return __self.result;`);
            return Object.defineProperty(Gr, "name", {
                value: `[Alpine] ${ze}`
            }),
            Gr
        } catch (Gr) {
            return handleError(Gr, Qr, ze),
            Promise.resolve()
        }
    }
    )();
    return evaluatorMemo[ze] = Yr,
    Yr
}
function generateEvaluatorFromString(ze, Qr, Kr) {
    let Wr = generateFunctionFromString(Qr, Kr);
    return (Jr= () => {}
    , {scope: Yr={}, params: Gr=[]}={}) => {
        Wr.result = void 0,
        Wr.finished = !1;
        let Zr = mergeProxies([Yr, ...ze]);
        if (typeof Wr == "function") {
            let en = Wr(Wr, Zr).catch(tn => handleError(tn, Kr, Qr));
            Wr.finished ? (runIfTypeOfFunction(Jr, Wr.result, Zr, Gr, Kr),
            Wr.result = void 0) : en.then(tn => {
                runIfTypeOfFunction(Jr, tn, Zr, Gr, Kr)
            }
            ).catch(tn => handleError(tn, Kr, Qr)).finally( () => Wr.result = void 0)
        }
    }
}
function runIfTypeOfFunction(ze, Qr, Kr, Wr, Jr) {
    if (shouldAutoEvaluateFunctions && typeof Qr == "function") {
        let Yr = Qr.apply(Kr, Wr);
        Yr instanceof Promise ? Yr.then(Gr => runIfTypeOfFunction(ze, Gr, Kr, Wr)).catch(Gr => handleError(Gr, Jr, Qr)) : ze(Yr)
    } else
        typeof Qr == "object" && Qr instanceof Promise ? Qr.then(Yr => ze(Yr)) : ze(Qr)
}
var prefixAsString = "x-";
function prefix(ze="") {
    return prefixAsString + ze
}
function setPrefix(ze) {
    prefixAsString = ze
}
var directiveHandlers = {};
function directive(ze, Qr) {
    return directiveHandlers[ze] = Qr,
    {
        before(Kr) {
            if (!directiveHandlers[Kr]) {
                console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                return
            }
            const Wr = directiveOrder.indexOf(Kr);
            directiveOrder.splice(Wr >= 0 ? Wr : directiveOrder.indexOf("DEFAULT"), 0, ze)
        }
    }
}
function directives(ze, Qr, Kr) {
    if (Qr = Array.from(Qr),
    ze._x_virtualDirectives) {
        let Yr = Object.entries(ze._x_virtualDirectives).map( ([Zr,en]) => ({
            name: Zr,
            value: en
        }))
          , Gr = attributesOnly(Yr);
        Yr = Yr.map(Zr => Gr.find(en => en.name === Zr.name) ? {
            name: `x-bind:${Zr.name}`,
            value: `"${Zr.value}"`
        } : Zr),
        Qr = Qr.concat(Yr)
    }
    let Wr = {};
    return Qr.map(toTransformedAttributes( (Yr, Gr) => Wr[Yr] = Gr)).filter(outNonAlpineAttributes).map(toParsedDirectives(Wr, Kr)).sort(byPriority).map(Yr => getDirectiveHandler(ze, Yr))
}
function attributesOnly(ze) {
    return Array.from(ze).map(toTransformedAttributes()).filter(Qr => !outNonAlpineAttributes(Qr))
}
var isDeferringHandlers = !1
  , directiveHandlerStacks = new Map
  , currentHandlerStackKey = Symbol();
function deferHandlingDirectives(ze) {
    isDeferringHandlers = !0;
    let Qr = Symbol();
    currentHandlerStackKey = Qr,
    directiveHandlerStacks.set(Qr, []);
    let Kr = () => {
        for (; directiveHandlerStacks.get(Qr).length; )
            directiveHandlerStacks.get(Qr).shift()();
        directiveHandlerStacks.delete(Qr)
    }
      , Wr = () => {
        isDeferringHandlers = !1,
        Kr()
    }
    ;
    ze(Kr),
    Wr()
}
function getElementBoundUtilities(ze) {
    let Qr = []
      , Kr = Zr => Qr.push(Zr)
      , [Wr,Jr] = elementBoundEffect(ze);
    return Qr.push(Jr),
    [{
        Alpine: alpine_default,
        effect: Wr,
        cleanup: Kr,
        evaluateLater: evaluateLater.bind(evaluateLater, ze),
        evaluate: evaluate.bind(evaluate, ze)
    }, () => Qr.forEach(Zr => Zr())]
}
function getDirectiveHandler(ze, Qr) {
    let Kr = () => {}
      , Wr = directiveHandlers[Qr.type] || Kr
      , [Jr,Yr] = getElementBoundUtilities(ze);
    onAttributeRemoved(ze, Qr.original, Yr);
    let Gr = () => {
        ze._x_ignore || ze._x_ignoreSelf || (Wr.inline && Wr.inline(ze, Qr, Jr),
        Wr = Wr.bind(Wr, ze, Qr, Jr),
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(Wr) : Wr())
    }
    ;
    return Gr.runCleanups = Yr,
    Gr
}
var startingWith = (ze, Qr) => ({name: Kr, value: Wr}) => (Kr.startsWith(ze) && (Kr = Kr.replace(ze, Qr)),
{
    name: Kr,
    value: Wr
})
  , into = ze => ze;
function toTransformedAttributes(ze= () => {}
) {
    return ({name: Qr, value: Kr}) => {
        let {name: Wr, value: Jr} = attributeTransformers.reduce( (Yr, Gr) => Gr(Yr), {
            name: Qr,
            value: Kr
        });
        return Wr !== Qr && ze(Wr, Qr),
        {
            name: Wr,
            value: Jr
        }
    }
}
var attributeTransformers = [];
function mapAttributes(ze) {
    attributeTransformers.push(ze)
}
function outNonAlpineAttributes({name: ze}) {
    return alpineAttributeRegex().test(ze)
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(ze, Qr) {
    return ({name: Kr, value: Wr}) => {
        let Jr = Kr.match(alpineAttributeRegex())
          , Yr = Kr.match(/:([a-zA-Z0-9\-_:]+)/)
          , Gr = Kr.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , Zr = Qr || ze[Kr] || Kr;
        return {
            type: Jr ? Jr[1] : null,
            value: Yr ? Yr[1] : null,
            modifiers: Gr.map(en => en.replace(".", "")),
            expression: Wr,
            original: Zr
        }
    }
}
var DEFAULT = "DEFAULT"
  , directiveOrder = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", DEFAULT, "teleport"];
function byPriority(ze, Qr) {
    let Kr = directiveOrder.indexOf(ze.type) === -1 ? DEFAULT : ze.type
      , Wr = directiveOrder.indexOf(Qr.type) === -1 ? DEFAULT : Qr.type;
    return directiveOrder.indexOf(Kr) - directiveOrder.indexOf(Wr)
}
var tickStack = []
  , isHolding = !1;
function nextTick(ze= () => {}
) {
    return queueMicrotask( () => {
        isHolding || setTimeout( () => {
            releaseNextTicks()
        }
        )
    }
    ),
    new Promise(Qr => {
        tickStack.push( () => {
            ze(),
            Qr()
        }
        )
    }
    )
}
function releaseNextTicks() {
    for (isHolding = !1; tickStack.length; )
        tickStack.shift()()
}
function holdNextTicks() {
    isHolding = !0
}
function setClasses(ze, Qr) {
    return Array.isArray(Qr) ? setClassesFromString(ze, Qr.join(" ")) : typeof Qr == "object" && Qr !== null ? setClassesFromObject(ze, Qr) : typeof Qr == "function" ? setClasses(ze, Qr()) : setClassesFromString(ze, Qr)
}
function setClassesFromString(ze, Qr) {
    let Kr = Jr => Jr.split(" ").filter(Yr => !ze.classList.contains(Yr)).filter(Boolean)
      , Wr = Jr => (ze.classList.add(...Jr),
    () => {
        ze.classList.remove(...Jr)
    }
    );
    return Qr = Qr === !0 ? Qr = "" : Qr || "",
    Wr(Kr(Qr))
}
function setClassesFromObject(ze, Qr) {
    let Kr = Zr => Zr.split(" ").filter(Boolean)
      , Wr = Object.entries(Qr).flatMap( ([Zr,en]) => en ? Kr(Zr) : !1).filter(Boolean)
      , Jr = Object.entries(Qr).flatMap( ([Zr,en]) => en ? !1 : Kr(Zr)).filter(Boolean)
      , Yr = []
      , Gr = [];
    return Jr.forEach(Zr => {
        ze.classList.contains(Zr) && (ze.classList.remove(Zr),
        Gr.push(Zr))
    }
    ),
    Wr.forEach(Zr => {
        ze.classList.contains(Zr) || (ze.classList.add(Zr),
        Yr.push(Zr))
    }
    ),
    () => {
        Gr.forEach(Zr => ze.classList.add(Zr)),
        Yr.forEach(Zr => ze.classList.remove(Zr))
    }
}
function setStyles(ze, Qr) {
    return typeof Qr == "object" && Qr !== null ? setStylesFromObject(ze, Qr) : setStylesFromString(ze, Qr)
}
function setStylesFromObject(ze, Qr) {
    let Kr = {};
    return Object.entries(Qr).forEach( ([Wr,Jr]) => {
        Kr[Wr] = ze.style[Wr],
        Wr.startsWith("--") || (Wr = kebabCase(Wr)),
        ze.style.setProperty(Wr, Jr)
    }
    ),
    setTimeout( () => {
        ze.style.length === 0 && ze.removeAttribute("style")
    }
    ),
    () => {
        setStyles(ze, Kr)
    }
}
function setStylesFromString(ze, Qr) {
    let Kr = ze.getAttribute("style", Qr);
    return ze.setAttribute("style", Qr),
    () => {
        ze.setAttribute("style", Kr || "")
    }
}
function kebabCase(ze) {
    return ze.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function once(ze, Qr= () => {}
) {
    let Kr = !1;
    return function() {
        Kr ? Qr.apply(this, arguments) : (Kr = !0,
        ze.apply(this, arguments))
    }
}
directive("transition", (ze, {value: Qr, modifiers: Kr, expression: Wr}, {evaluate: Jr}) => {
    typeof Wr == "function" && (Wr = Jr(Wr)),
    Wr !== !1 && (!Wr || typeof Wr == "boolean" ? registerTransitionsFromHelper(ze, Kr, Qr) : registerTransitionsFromClassString(ze, Wr, Qr))
}
);
function registerTransitionsFromClassString(ze, Qr, Kr) {
    registerTransitionObject(ze, setClasses, ""),
    {
        enter: Jr => {
            ze._x_transition.enter.during = Jr
        }
        ,
        "enter-start": Jr => {
            ze._x_transition.enter.start = Jr
        }
        ,
        "enter-end": Jr => {
            ze._x_transition.enter.end = Jr
        }
        ,
        leave: Jr => {
            ze._x_transition.leave.during = Jr
        }
        ,
        "leave-start": Jr => {
            ze._x_transition.leave.start = Jr
        }
        ,
        "leave-end": Jr => {
            ze._x_transition.leave.end = Jr
        }
    }[Kr](Qr)
}
function registerTransitionsFromHelper(ze, Qr, Kr) {
    registerTransitionObject(ze, setStyles);
    let Wr = !Qr.includes("in") && !Qr.includes("out") && !Kr
      , Jr = Wr || Qr.includes("in") || ["enter"].includes(Kr)
      , Yr = Wr || Qr.includes("out") || ["leave"].includes(Kr);
    Qr.includes("in") && !Wr && (Qr = Qr.filter( (vn, yn) => yn < Qr.indexOf("out"))),
    Qr.includes("out") && !Wr && (Qr = Qr.filter( (vn, yn) => yn > Qr.indexOf("out")));
    let Gr = !Qr.includes("opacity") && !Qr.includes("scale")
      , Zr = Gr || Qr.includes("opacity")
      , en = Gr || Qr.includes("scale")
      , tn = Zr ? 0 : 1
      , rn = en ? modifierValue(Qr, "scale", 95) / 100 : 1
      , nn = modifierValue(Qr, "delay", 0) / 1e3
      , an = modifierValue(Qr, "origin", "center")
      , cn = "opacity, transform"
      , dn = modifierValue(Qr, "duration", 150) / 1e3
      , wn = modifierValue(Qr, "duration", 75) / 1e3
      , un = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    Jr && (ze._x_transition.enter.during = {
        transformOrigin: an,
        transitionDelay: `${nn}s`,
        transitionProperty: cn,
        transitionDuration: `${dn}s`,
        transitionTimingFunction: un
    },
    ze._x_transition.enter.start = {
        opacity: tn,
        transform: `scale(${rn})`
    },
    ze._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    Yr && (ze._x_transition.leave.during = {
        transformOrigin: an,
        transitionDelay: `${nn}s`,
        transitionProperty: cn,
        transitionDuration: `${wn}s`,
        transitionTimingFunction: un
    },
    ze._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    ze._x_transition.leave.end = {
        opacity: tn,
        transform: `scale(${rn})`
    })
}
function registerTransitionObject(ze, Qr, Kr={}) {
    ze._x_transition || (ze._x_transition = {
        enter: {
            during: Kr,
            start: Kr,
            end: Kr
        },
        leave: {
            during: Kr,
            start: Kr,
            end: Kr
        },
        in(Wr= () => {}
        , Jr= () => {}
        ) {
            transition(ze, Qr, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, Wr, Jr)
        },
        out(Wr= () => {}
        , Jr= () => {}
        ) {
            transition(ze, Qr, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, Wr, Jr)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(ze, Qr, Kr, Wr) {
    const Jr = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let Yr = () => Jr(Kr);
    if (Qr) {
        ze._x_transition && (ze._x_transition.enter || ze._x_transition.leave) ? ze._x_transition.enter && (Object.entries(ze._x_transition.enter.during).length || Object.entries(ze._x_transition.enter.start).length || Object.entries(ze._x_transition.enter.end).length) ? ze._x_transition.in(Kr) : Yr() : ze._x_transition ? ze._x_transition.in(Kr) : Yr();
        return
    }
    ze._x_hidePromise = ze._x_transition ? new Promise( (Gr, Zr) => {
        ze._x_transition.out( () => {}
        , () => Gr(Wr)),
        ze._x_transitioning && ze._x_transitioning.beforeCancel( () => Zr({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(Wr),
    queueMicrotask( () => {
        let Gr = closestHide(ze);
        Gr ? (Gr._x_hideChildren || (Gr._x_hideChildren = []),
        Gr._x_hideChildren.push(ze)) : Jr( () => {
            let Zr = en => {
                let tn = Promise.all([en._x_hidePromise, ...(en._x_hideChildren || []).map(Zr)]).then( ([rn]) => rn());
                return delete en._x_hidePromise,
                delete en._x_hideChildren,
                tn
            }
            ;
            Zr(ze).catch(en => {
                if (!en.isFromCancelledTransition)
                    throw en
            }
            )
        }
        )
    }
    )
}
;
function closestHide(ze) {
    let Qr = ze.parentNode;
    if (Qr)
        return Qr._x_hidePromise ? Qr : closestHide(Qr)
}
function transition(ze, Qr, {during: Kr, start: Wr, end: Jr}={}, Yr= () => {}
, Gr= () => {}
) {
    if (ze._x_transitioning && ze._x_transitioning.cancel(),
    Object.keys(Kr).length === 0 && Object.keys(Wr).length === 0 && Object.keys(Jr).length === 0) {
        Yr(),
        Gr();
        return
    }
    let Zr, en, tn;
    performTransition(ze, {
        start() {
            Zr = Qr(ze, Wr)
        },
        during() {
            en = Qr(ze, Kr)
        },
        before: Yr,
        end() {
            Zr(),
            tn = Qr(ze, Jr)
        },
        after: Gr,
        cleanup() {
            en(),
            tn()
        }
    })
}
function performTransition(ze, Qr) {
    let Kr, Wr, Jr, Yr = once( () => {
        mutateDom( () => {
            Kr = !0,
            Wr || Qr.before(),
            Jr || (Qr.end(),
            releaseNextTicks()),
            Qr.after(),
            ze.isConnected && Qr.cleanup(),
            delete ze._x_transitioning
        }
        )
    }
    );
    ze._x_transitioning = {
        beforeCancels: [],
        beforeCancel(Gr) {
            this.beforeCancels.push(Gr)
        },
        cancel: once(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            Yr()
        }),
        finish: Yr
    },
    mutateDom( () => {
        Qr.start(),
        Qr.during()
    }
    ),
    holdNextTicks(),
    requestAnimationFrame( () => {
        if (Kr)
            return;
        let Gr = Number(getComputedStyle(ze).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , Zr = Number(getComputedStyle(ze).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        Gr === 0 && (Gr = Number(getComputedStyle(ze).animationDuration.replace("s", "")) * 1e3),
        mutateDom( () => {
            Qr.before()
        }
        ),
        Wr = !0,
        requestAnimationFrame( () => {
            Kr || (mutateDom( () => {
                Qr.end()
            }
            ),
            releaseNextTicks(),
            setTimeout(ze._x_transitioning.finish, Gr + Zr),
            Jr = !0)
        }
        )
    }
    )
}
function modifierValue(ze, Qr, Kr) {
    if (ze.indexOf(Qr) === -1)
        return Kr;
    const Wr = ze[ze.indexOf(Qr) + 1];
    if (!Wr || Qr === "scale" && isNaN(Wr))
        return Kr;
    if (Qr === "duration" || Qr === "delay") {
        let Jr = Wr.match(/([0-9]+)ms/);
        if (Jr)
            return Jr[1]
    }
    return Qr === "origin" && ["top", "right", "left", "center", "bottom"].includes(ze[ze.indexOf(Qr) + 2]) ? [Wr, ze[ze.indexOf(Qr) + 2]].join(" ") : Wr
}
var isCloning = !1;
function skipDuringClone(ze, Qr= () => {}
) {
    return (...Kr) => isCloning ? Qr(...Kr) : ze(...Kr)
}
function onlyDuringClone(ze) {
    return (...Qr) => isCloning && ze(...Qr)
}
var interceptors = [];
function interceptClone(ze) {
    interceptors.push(ze)
}
function cloneNode(ze, Qr) {
    interceptors.forEach(Kr => Kr(ze, Qr)),
    isCloning = !0,
    dontRegisterReactiveSideEffects( () => {
        initTree(Qr, (Kr, Wr) => {
            Wr(Kr, () => {}
            )
        }
        )
    }
    ),
    isCloning = !1
}
var isCloningLegacy = !1;
function clone(ze, Qr) {
    Qr._x_dataStack || (Qr._x_dataStack = ze._x_dataStack),
    isCloning = !0,
    isCloningLegacy = !0,
    dontRegisterReactiveSideEffects( () => {
        cloneTree(Qr)
    }
    ),
    isCloning = !1,
    isCloningLegacy = !1
}
function cloneTree(ze) {
    let Qr = !1;
    initTree(ze, (Wr, Jr) => {
        walk(Wr, (Yr, Gr) => {
            if (Qr && isRoot(Yr))
                return Gr();
            Qr = !0,
            Jr(Yr, Gr)
        }
        )
    }
    )
}
function dontRegisterReactiveSideEffects(ze) {
    let Qr = effect;
    overrideEffect( (Kr, Wr) => {
        let Jr = Qr(Kr);
        return release(Jr),
        () => {}
    }
    ),
    ze(),
    overrideEffect(Qr)
}
function bind(ze, Qr, Kr, Wr=[]) {
    switch (ze._x_bindings || (ze._x_bindings = reactive({})),
    ze._x_bindings[Qr] = Kr,
    Qr = Wr.includes("camel") ? camelCase(Qr) : Qr,
    Qr) {
    case "value":
        bindInputValue(ze, Kr);
        break;
    case "style":
        bindStyles(ze, Kr);
        break;
    case "class":
        bindClasses(ze, Kr);
        break;
    case "selected":
    case "checked":
        bindAttributeAndProperty(ze, Qr, Kr);
        break;
    default:
        bindAttribute(ze, Qr, Kr);
        break
    }
}
function bindInputValue(ze, Qr) {
    if (ze.type === "radio")
        ze.attributes.value === void 0 && (ze.value = Qr),
        window.fromModel && (typeof Qr == "boolean" ? ze.checked = safeParseBoolean(ze.value) === Qr : ze.checked = checkedAttrLooseCompare(ze.value, Qr));
    else if (ze.type === "checkbox")
        Number.isInteger(Qr) ? ze.value = Qr : !Array.isArray(Qr) && typeof Qr != "boolean" && ![null, void 0].includes(Qr) ? ze.value = String(Qr) : Array.isArray(Qr) ? ze.checked = Qr.some(Kr => checkedAttrLooseCompare(Kr, ze.value)) : ze.checked = !!Qr;
    else if (ze.tagName === "SELECT")
        updateSelect(ze, Qr);
    else {
        if (ze.value === Qr)
            return;
        ze.value = Qr === void 0 ? "" : Qr
    }
}
function bindClasses(ze, Qr) {
    ze._x_undoAddedClasses && ze._x_undoAddedClasses(),
    ze._x_undoAddedClasses = setClasses(ze, Qr)
}
function bindStyles(ze, Qr) {
    ze._x_undoAddedStyles && ze._x_undoAddedStyles(),
    ze._x_undoAddedStyles = setStyles(ze, Qr)
}
function bindAttributeAndProperty(ze, Qr, Kr) {
    bindAttribute(ze, Qr, Kr),
    setPropertyIfChanged(ze, Qr, Kr)
}
function bindAttribute(ze, Qr, Kr) {
    [null, void 0, !1].includes(Kr) && attributeShouldntBePreservedIfFalsy(Qr) ? ze.removeAttribute(Qr) : (isBooleanAttr(Qr) && (Kr = Qr),
    setIfChanged(ze, Qr, Kr))
}
function setIfChanged(ze, Qr, Kr) {
    ze.getAttribute(Qr) != Kr && ze.setAttribute(Qr, Kr)
}
function setPropertyIfChanged(ze, Qr, Kr) {
    ze[Qr] !== Kr && (ze[Qr] = Kr)
}
function updateSelect(ze, Qr) {
    const Kr = [].concat(Qr).map(Wr => Wr + "");
    Array.from(ze.options).forEach(Wr => {
        Wr.selected = Kr.includes(Wr.value)
    }
    )
}
function camelCase(ze) {
    return ze.toLowerCase().replace(/-(\w)/g, (Qr, Kr) => Kr.toUpperCase())
}
function checkedAttrLooseCompare(ze, Qr) {
    return ze == Qr
}
function safeParseBoolean(ze) {
    return [1, "1", "true", "on", "yes", !0].includes(ze) ? !0 : [0, "0", "false", "off", "no", !1].includes(ze) ? !1 : ze ? !!ze : null
}
function isBooleanAttr(ze) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(ze)
}
function attributeShouldntBePreservedIfFalsy(ze) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(ze)
}
function getBinding(ze, Qr, Kr) {
    return ze._x_bindings && ze._x_bindings[Qr] !== void 0 ? ze._x_bindings[Qr] : getAttributeBinding(ze, Qr, Kr)
}
function extractProp(ze, Qr, Kr, Wr=!0) {
    if (ze._x_bindings && ze._x_bindings[Qr] !== void 0)
        return ze._x_bindings[Qr];
    if (ze._x_inlineBindings && ze._x_inlineBindings[Qr] !== void 0) {
        let Jr = ze._x_inlineBindings[Qr];
        return Jr.extract = Wr,
        dontAutoEvaluateFunctions( () => evaluate(ze, Jr.expression))
    }
    return getAttributeBinding(ze, Qr, Kr)
}
function getAttributeBinding(ze, Qr, Kr) {
    let Wr = ze.getAttribute(Qr);
    return Wr === null ? typeof Kr == "function" ? Kr() : Kr : Wr === "" ? !0 : isBooleanAttr(Qr) ? !![Qr, "true"].includes(Wr) : Wr
}
function debounce(ze, Qr) {
    var Kr;
    return function() {
        var Wr = this
          , Jr = arguments
          , Yr = function() {
            Kr = null,
            ze.apply(Wr, Jr)
        };
        clearTimeout(Kr),
        Kr = setTimeout(Yr, Qr)
    }
}
function throttle(ze, Qr) {
    let Kr;
    return function() {
        let Wr = this
          , Jr = arguments;
        Kr || (ze.apply(Wr, Jr),
        Kr = !0,
        setTimeout( () => Kr = !1, Qr))
    }
}
function entangle({get: ze, set: Qr}, {get: Kr, set: Wr}) {
    let Jr = !0, Yr, Gr = effect( () => {
        const Zr = ze()
          , en = Kr();
        if (Jr)
            Wr(cloneIfObject(Zr)),
            Jr = !1,
            Yr = JSON.stringify(Zr);
        else {
            const tn = JSON.stringify(Zr);
            tn !== Yr ? (Wr(cloneIfObject(Zr)),
            Yr = tn) : (Qr(cloneIfObject(en)),
            Yr = JSON.stringify(en))
        }
        JSON.stringify(Kr()),
        JSON.stringify(ze())
    }
    );
    return () => {
        release(Gr)
    }
}
function cloneIfObject(ze) {
    return typeof ze == "object" ? JSON.parse(JSON.stringify(ze)) : ze
}
function plugin(ze) {
    (Array.isArray(ze) ? ze : [ze]).forEach(Kr => Kr(alpine_default))
}
var stores = {}
  , isReactive = !1;
function store(ze, Qr) {
    if (isReactive || (stores = reactive(stores),
    isReactive = !0),
    Qr === void 0)
        return stores[ze];
    stores[ze] = Qr,
    typeof Qr == "object" && Qr !== null && Qr.hasOwnProperty("init") && typeof Qr.init == "function" && stores[ze].init(),
    initInterceptors2(stores[ze])
}
function getStores() {
    return stores
}
var binds = {};
function bind2(ze, Qr) {
    let Kr = typeof Qr != "function" ? () => Qr : Qr;
    return ze instanceof Element ? applyBindingsObject(ze, Kr()) : (binds[ze] = Kr,
    () => {}
    )
}
function injectBindingProviders(ze) {
    return Object.entries(binds).forEach( ([Qr,Kr]) => {
        Object.defineProperty(ze, Qr, {
            get() {
                return (...Wr) => Kr(...Wr)
            }
        })
    }
    ),
    ze
}
function applyBindingsObject(ze, Qr, Kr) {
    let Wr = [];
    for (; Wr.length; )
        Wr.pop()();
    let Jr = Object.entries(Qr).map( ([Gr,Zr]) => ({
        name: Gr,
        value: Zr
    }))
      , Yr = attributesOnly(Jr);
    return Jr = Jr.map(Gr => Yr.find(Zr => Zr.name === Gr.name) ? {
        name: `x-bind:${Gr.name}`,
        value: `"${Gr.value}"`
    } : Gr),
    directives(ze, Jr, Kr).map(Gr => {
        Wr.push(Gr.runCleanups),
        Gr()
    }
    ),
    () => {
        for (; Wr.length; )
            Wr.pop()()
    }
}
var datas = {};
function data(ze, Qr) {
    datas[ze] = Qr
}
function injectDataProviders(ze, Qr) {
    return Object.entries(datas).forEach( ([Kr,Wr]) => {
        Object.defineProperty(ze, Kr, {
            get() {
                return (...Jr) => Wr.bind(Qr)(...Jr)
            },
            enumerable: !1
        })
    }
    ),
    ze
}
var Alpine$1 = {
    get reactive() {
        return reactive
    },
    get release() {
        return release
    },
    get effect() {
        return effect
    },
    get raw() {
        return raw
    },
    version: "3.13.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    cloneNode,
    bound: getBinding,
    $data: scope,
    walk,
    data,
    bind: bind2
}
  , alpine_default = Alpine$1;
function makeMap(ze, Qr) {
    const Kr = Object.create(null)
      , Wr = ze.split(",");
    for (let Jr = 0; Jr < Wr.length; Jr++)
        Kr[Wr[Jr]] = !0;
    return Qr ? Jr => !!Kr[Jr.toLowerCase()] : Jr => !!Kr[Jr]
}
var EMPTY_OBJ = Object.freeze({}), hasOwnProperty = Object.prototype.hasOwnProperty, hasOwn = (ze, Qr) => hasOwnProperty.call(ze, Qr), isArray = Array.isArray, isMap = ze => toTypeString(ze) === "[object Map]", isString = ze => typeof ze == "string", isSymbol = ze => typeof ze == "symbol", isObject = ze => ze !== null && typeof ze == "object", objectToString = Object.prototype.toString, toTypeString = ze => objectToString.call(ze), toRawType = ze => toTypeString(ze).slice(8, -1), isIntegerKey = ze => isString(ze) && ze !== "NaN" && ze[0] !== "-" && "" + parseInt(ze, 10) === ze, cacheStringFunction = ze => {
    const Qr = Object.create(null);
    return Kr => Qr[Kr] || (Qr[Kr] = ze(Kr))
}
, capitalize = cacheStringFunction(ze => ze.charAt(0).toUpperCase() + ze.slice(1)), hasChanged = (ze, Qr) => ze !== Qr && (ze === ze || Qr === Qr), targetMap = new WeakMap, effectStack = [], activeEffect, ITERATE_KEY = Symbol("iterate"), MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(ze) {
    return ze && ze._isEffect === !0
}
function effect2(ze, Qr=EMPTY_OBJ) {
    isEffect(ze) && (ze = ze.raw);
    const Kr = createReactiveEffect(ze, Qr);
    return Qr.lazy || Kr(),
    Kr
}
function stop(ze) {
    ze.active && (cleanup(ze),
    ze.options.onStop && ze.options.onStop(),
    ze.active = !1)
}
var uid = 0;
function createReactiveEffect(ze, Qr) {
    const Kr = function() {
        if (!Kr.active)
            return ze();
        if (!effectStack.includes(Kr)) {
            cleanup(Kr);
            try {
                return enableTracking(),
                effectStack.push(Kr),
                activeEffect = Kr,
                ze()
            } finally {
                effectStack.pop(),
                resetTracking(),
                activeEffect = effectStack[effectStack.length - 1]
            }
        }
    };
    return Kr.id = uid++,
    Kr.allowRecurse = !!Qr.allowRecurse,
    Kr._isEffect = !0,
    Kr.active = !0,
    Kr.raw = ze,
    Kr.deps = [],
    Kr.options = Qr,
    Kr
}
function cleanup(ze) {
    const {deps: Qr} = ze;
    if (Qr.length) {
        for (let Kr = 0; Kr < Qr.length; Kr++)
            Qr[Kr].delete(ze);
        Qr.length = 0
    }
}
var shouldTrack = !0
  , trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack),
    shouldTrack = !1
}
function enableTracking() {
    trackStack.push(shouldTrack),
    shouldTrack = !0
}
function resetTracking() {
    const ze = trackStack.pop();
    shouldTrack = ze === void 0 ? !0 : ze
}
function track(ze, Qr, Kr) {
    if (!shouldTrack || activeEffect === void 0)
        return;
    let Wr = targetMap.get(ze);
    Wr || targetMap.set(ze, Wr = new Map);
    let Jr = Wr.get(Kr);
    Jr || Wr.set(Kr, Jr = new Set),
    Jr.has(activeEffect) || (Jr.add(activeEffect),
    activeEffect.deps.push(Jr),
    activeEffect.options.onTrack && activeEffect.options.onTrack({
        effect: activeEffect,
        target: ze,
        type: Qr,
        key: Kr
    }))
}
function trigger(ze, Qr, Kr, Wr, Jr, Yr) {
    const Gr = targetMap.get(ze);
    if (!Gr)
        return;
    const Zr = new Set
      , en = rn => {
        rn && rn.forEach(nn => {
            (nn !== activeEffect || nn.allowRecurse) && Zr.add(nn)
        }
        )
    }
    ;
    if (Qr === "clear")
        Gr.forEach(en);
    else if (Kr === "length" && isArray(ze))
        Gr.forEach( (rn, nn) => {
            (nn === "length" || nn >= Wr) && en(rn)
        }
        );
    else
        switch (Kr !== void 0 && en(Gr.get(Kr)),
        Qr) {
        case "add":
            isArray(ze) ? isIntegerKey(Kr) && en(Gr.get("length")) : (en(Gr.get(ITERATE_KEY)),
            isMap(ze) && en(Gr.get(MAP_KEY_ITERATE_KEY)));
            break;
        case "delete":
            isArray(ze) || (en(Gr.get(ITERATE_KEY)),
            isMap(ze) && en(Gr.get(MAP_KEY_ITERATE_KEY)));
            break;
        case "set":
            isMap(ze) && en(Gr.get(ITERATE_KEY));
            break
        }
    const tn = rn => {
        rn.options.onTrigger && rn.options.onTrigger({
            effect: rn,
            target: ze,
            key: Kr,
            type: Qr,
            newValue: Wr,
            oldValue: Jr,
            oldTarget: Yr
        }),
        rn.options.scheduler ? rn.options.scheduler(rn) : rn()
    }
    ;
    Zr.forEach(tn)
}
var isNonTrackableKeys = makeMap("__proto__,__v_isRef,__isVue")
  , builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(ze => Symbol[ze]).filter(isSymbol))
  , get2 = createGetter()
  , readonlyGet = createGetter(!0)
  , arrayInstrumentations = createArrayInstrumentations();
function createArrayInstrumentations() {
    const ze = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(Qr => {
        ze[Qr] = function(...Kr) {
            const Wr = toRaw(this);
            for (let Yr = 0, Gr = this.length; Yr < Gr; Yr++)
                track(Wr, "get", Yr + "");
            const Jr = Wr[Qr](...Kr);
            return Jr === -1 || Jr === !1 ? Wr[Qr](...Kr.map(toRaw)) : Jr
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(Qr => {
        ze[Qr] = function(...Kr) {
            pauseTracking();
            const Wr = toRaw(this)[Qr].apply(this, Kr);
            return resetTracking(),
            Wr
        }
    }
    ),
    ze
}
function createGetter(ze=!1, Qr=!1) {
    return function(Wr, Jr, Yr) {
        if (Jr === "__v_isReactive")
            return !ze;
        if (Jr === "__v_isReadonly")
            return ze;
        if (Jr === "__v_raw" && Yr === (ze ? Qr ? shallowReadonlyMap : readonlyMap : Qr ? shallowReactiveMap : reactiveMap).get(Wr))
            return Wr;
        const Gr = isArray(Wr);
        if (!ze && Gr && hasOwn(arrayInstrumentations, Jr))
            return Reflect.get(arrayInstrumentations, Jr, Yr);
        const Zr = Reflect.get(Wr, Jr, Yr);
        return (isSymbol(Jr) ? builtInSymbols.has(Jr) : isNonTrackableKeys(Jr)) || (ze || track(Wr, "get", Jr),
        Qr) ? Zr : isRef(Zr) ? !Gr || !isIntegerKey(Jr) ? Zr.value : Zr : isObject(Zr) ? ze ? readonly(Zr) : reactive2(Zr) : Zr
    }
}
var set2 = createSetter();
function createSetter(ze=!1) {
    return function(Kr, Wr, Jr, Yr) {
        let Gr = Kr[Wr];
        if (!ze && (Jr = toRaw(Jr),
        Gr = toRaw(Gr),
        !isArray(Kr) && isRef(Gr) && !isRef(Jr)))
            return Gr.value = Jr,
            !0;
        const Zr = isArray(Kr) && isIntegerKey(Wr) ? Number(Wr) < Kr.length : hasOwn(Kr, Wr)
          , en = Reflect.set(Kr, Wr, Jr, Yr);
        return Kr === toRaw(Yr) && (Zr ? hasChanged(Jr, Gr) && trigger(Kr, "set", Wr, Jr, Gr) : trigger(Kr, "add", Wr, Jr)),
        en
    }
}
function deleteProperty(ze, Qr) {
    const Kr = hasOwn(ze, Qr)
      , Wr = ze[Qr]
      , Jr = Reflect.deleteProperty(ze, Qr);
    return Jr && Kr && trigger(ze, "delete", Qr, void 0, Wr),
    Jr
}
function has(ze, Qr) {
    const Kr = Reflect.has(ze, Qr);
    return (!isSymbol(Qr) || !builtInSymbols.has(Qr)) && track(ze, "has", Qr),
    Kr
}
function ownKeys(ze) {
    return track(ze, "iterate", isArray(ze) ? "length" : ITERATE_KEY),
    Reflect.ownKeys(ze)
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
}
  , readonlyHandlers = {
    get: readonlyGet,
    set(ze, Qr) {
        return console.warn(`Set operation on key "${String(Qr)}" failed: target is readonly.`, ze),
        !0
    },
    deleteProperty(ze, Qr) {
        return console.warn(`Delete operation on key "${String(Qr)}" failed: target is readonly.`, ze),
        !0
    }
}
  , toReactive = ze => isObject(ze) ? reactive2(ze) : ze
  , toReadonly = ze => isObject(ze) ? readonly(ze) : ze
  , toShallow = ze => ze
  , getProto = ze => Reflect.getPrototypeOf(ze);
function get$1(ze, Qr, Kr=!1, Wr=!1) {
    ze = ze.__v_raw;
    const Jr = toRaw(ze)
      , Yr = toRaw(Qr);
    Qr !== Yr && !Kr && track(Jr, "get", Qr),
    !Kr && track(Jr, "get", Yr);
    const {has: Gr} = getProto(Jr)
      , Zr = Wr ? toShallow : Kr ? toReadonly : toReactive;
    if (Gr.call(Jr, Qr))
        return Zr(ze.get(Qr));
    if (Gr.call(Jr, Yr))
        return Zr(ze.get(Yr));
    ze !== Jr && ze.get(Qr)
}
function has$1(ze, Qr=!1) {
    const Kr = this.__v_raw
      , Wr = toRaw(Kr)
      , Jr = toRaw(ze);
    return ze !== Jr && !Qr && track(Wr, "has", ze),
    !Qr && track(Wr, "has", Jr),
    ze === Jr ? Kr.has(ze) : Kr.has(ze) || Kr.has(Jr)
}
function size(ze, Qr=!1) {
    return ze = ze.__v_raw,
    !Qr && track(toRaw(ze), "iterate", ITERATE_KEY),
    Reflect.get(ze, "size", ze)
}
function add(ze) {
    ze = toRaw(ze);
    const Qr = toRaw(this);
    return getProto(Qr).has.call(Qr, ze) || (Qr.add(ze),
    trigger(Qr, "add", ze, ze)),
    this
}
function set$1(ze, Qr) {
    Qr = toRaw(Qr);
    const Kr = toRaw(this)
      , {has: Wr, get: Jr} = getProto(Kr);
    let Yr = Wr.call(Kr, ze);
    Yr ? checkIdentityKeys(Kr, Wr, ze) : (ze = toRaw(ze),
    Yr = Wr.call(Kr, ze));
    const Gr = Jr.call(Kr, ze);
    return Kr.set(ze, Qr),
    Yr ? hasChanged(Qr, Gr) && trigger(Kr, "set", ze, Qr, Gr) : trigger(Kr, "add", ze, Qr),
    this
}
function deleteEntry(ze) {
    const Qr = toRaw(this)
      , {has: Kr, get: Wr} = getProto(Qr);
    let Jr = Kr.call(Qr, ze);
    Jr ? checkIdentityKeys(Qr, Kr, ze) : (ze = toRaw(ze),
    Jr = Kr.call(Qr, ze));
    const Yr = Wr ? Wr.call(Qr, ze) : void 0
      , Gr = Qr.delete(ze);
    return Jr && trigger(Qr, "delete", ze, void 0, Yr),
    Gr
}
function clear() {
    const ze = toRaw(this)
      , Qr = ze.size !== 0
      , Kr = isMap(ze) ? new Map(ze) : new Set(ze)
      , Wr = ze.clear();
    return Qr && trigger(ze, "clear", void 0, void 0, Kr),
    Wr
}
function createForEach(ze, Qr) {
    return function(Wr, Jr) {
        const Yr = this
          , Gr = Yr.__v_raw
          , Zr = toRaw(Gr)
          , en = Qr ? toShallow : ze ? toReadonly : toReactive;
        return !ze && track(Zr, "iterate", ITERATE_KEY),
        Gr.forEach( (tn, rn) => Wr.call(Jr, en(tn), en(rn), Yr))
    }
}
function createIterableMethod(ze, Qr, Kr) {
    return function(...Wr) {
        const Jr = this.__v_raw
          , Yr = toRaw(Jr)
          , Gr = isMap(Yr)
          , Zr = ze === "entries" || ze === Symbol.iterator && Gr
          , en = ze === "keys" && Gr
          , tn = Jr[ze](...Wr)
          , rn = Kr ? toShallow : Qr ? toReadonly : toReactive;
        return !Qr && track(Yr, "iterate", en ? MAP_KEY_ITERATE_KEY : ITERATE_KEY),
        {
            next() {
                const {value: nn, done: an} = tn.next();
                return an ? {
                    value: nn,
                    done: an
                } : {
                    value: Zr ? [rn(nn[0]), rn(nn[1])] : rn(nn),
                    done: an
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function createReadonlyMethod(ze) {
    return function(...Qr) {
        {
            const Kr = Qr[0] ? `on key "${Qr[0]}" ` : "";
            console.warn(`${capitalize(ze)} operation ${Kr}failed: target is readonly.`, toRaw(this))
        }
        return ze === "delete" ? !1 : this
    }
}
function createInstrumentations() {
    const ze = {
        get(Yr) {
            return get$1(this, Yr)
        },
        get size() {
            return size(this)
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(!1, !1)
    }
      , Qr = {
        get(Yr) {
            return get$1(this, Yr, !1, !0)
        },
        get size() {
            return size(this)
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(!1, !0)
    }
      , Kr = {
        get(Yr) {
            return get$1(this, Yr, !0)
        },
        get size() {
            return size(this, !0)
        },
        has(Yr) {
            return has$1.call(this, Yr, !0)
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(!0, !1)
    }
      , Wr = {
        get(Yr) {
            return get$1(this, Yr, !0, !0)
        },
        get size() {
            return size(this, !0)
        },
        has(Yr) {
            return has$1.call(this, Yr, !0)
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(Yr => {
        ze[Yr] = createIterableMethod(Yr, !1, !1),
        Kr[Yr] = createIterableMethod(Yr, !0, !1),
        Qr[Yr] = createIterableMethod(Yr, !1, !0),
        Wr[Yr] = createIterableMethod(Yr, !0, !0)
    }
    ),
    [ze, Kr, Qr, Wr]
}
var [mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations] = createInstrumentations();
function createInstrumentationGetter(ze, Qr) {
    const Kr = Qr ? ze ? shallowReadonlyInstrumentations : shallowInstrumentations : ze ? readonlyInstrumentations : mutableInstrumentations;
    return (Wr, Jr, Yr) => Jr === "__v_isReactive" ? !ze : Jr === "__v_isReadonly" ? ze : Jr === "__v_raw" ? Wr : Reflect.get(hasOwn(Kr, Jr) && Jr in Wr ? Kr : Wr, Jr, Yr)
}
var mutableCollectionHandlers = {
    get: createInstrumentationGetter(!1, !1)
}
  , readonlyCollectionHandlers = {
    get: createInstrumentationGetter(!0, !1)
};
function checkIdentityKeys(ze, Qr, Kr) {
    const Wr = toRaw(Kr);
    if (Wr !== Kr && Qr.call(ze, Wr)) {
        const Jr = toRawType(ze);
        console.warn(`Reactive ${Jr} contains both the raw and reactive versions of the same object${Jr === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var reactiveMap = new WeakMap
  , shallowReactiveMap = new WeakMap
  , readonlyMap = new WeakMap
  , shallowReadonlyMap = new WeakMap;
function targetTypeMap(ze) {
    switch (ze) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function getTargetType(ze) {
    return ze.__v_skip || !Object.isExtensible(ze) ? 0 : targetTypeMap(toRawType(ze))
}
function reactive2(ze) {
    return ze && ze.__v_isReadonly ? ze : createReactiveObject(ze, !1, mutableHandlers, mutableCollectionHandlers, reactiveMap)
}
function readonly(ze) {
    return createReactiveObject(ze, !0, readonlyHandlers, readonlyCollectionHandlers, readonlyMap)
}
function createReactiveObject(ze, Qr, Kr, Wr, Jr) {
    if (!isObject(ze))
        return console.warn(`value cannot be made reactive: ${String(ze)}`),
        ze;
    if (ze.__v_raw && !(Qr && ze.__v_isReactive))
        return ze;
    const Yr = Jr.get(ze);
    if (Yr)
        return Yr;
    const Gr = getTargetType(ze);
    if (Gr === 0)
        return ze;
    const Zr = new Proxy(ze,Gr === 2 ? Wr : Kr);
    return Jr.set(ze, Zr),
    Zr
}
function toRaw(ze) {
    return ze && toRaw(ze.__v_raw) || ze
}
function isRef(ze) {
    return !!(ze && ze.__v_isRef === !0)
}
magic("nextTick", () => nextTick);
magic("dispatch", ze => dispatch.bind(dispatch, ze));
magic("watch", (ze, {evaluateLater: Qr, effect: Kr}) => (Wr, Jr) => {
    let Yr = Qr(Wr), Gr = !0, Zr, en = Kr( () => Yr(tn => {
        JSON.stringify(tn),
        Gr ? Zr = tn : queueMicrotask( () => {
            Jr(tn, Zr),
            Zr = tn
        }
        ),
        Gr = !1
    }
    ));
    ze._x_effects.delete(en)
}
);
magic("store", getStores);
magic("data", ze => scope(ze));
magic("root", ze => closestRoot(ze));
magic("refs", ze => (ze._x_refs_proxy || (ze._x_refs_proxy = mergeProxies(getArrayOfRefObject(ze))),
ze._x_refs_proxy));
function getArrayOfRefObject(ze) {
    let Qr = []
      , Kr = ze;
    for (; Kr; )
        Kr._x_refs && Qr.push(Kr._x_refs),
        Kr = Kr.parentNode;
    return Qr
}
var globalIdMemo = {};
function findAndIncrementId(ze) {
    return globalIdMemo[ze] || (globalIdMemo[ze] = 0),
    ++globalIdMemo[ze]
}
function closestIdRoot(ze, Qr) {
    return findClosest(ze, Kr => {
        if (Kr._x_ids && Kr._x_ids[Qr])
            return !0
    }
    )
}
function setIdRoot(ze, Qr) {
    ze._x_ids || (ze._x_ids = {}),
    ze._x_ids[Qr] || (ze._x_ids[Qr] = findAndIncrementId(Qr))
}
magic("id", ze => (Qr, Kr=null) => {
    let Wr = closestIdRoot(ze, Qr)
      , Jr = Wr ? Wr._x_ids[Qr] : findAndIncrementId(Qr);
    return Kr ? `${Qr}-${Jr}-${Kr}` : `${Qr}-${Jr}`
}
);
magic("el", ze => ze);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(ze, Qr, Kr) {
    magic(Qr, Wr => warn(`You can't use [$${Qr}] without first installing the "${ze}" plugin here: https://alpinejs.dev/plugins/${Kr}`, Wr))
}
directive("modelable", (ze, {expression: Qr}, {effect: Kr, evaluateLater: Wr, cleanup: Jr}) => {
    let Yr = Wr(Qr)
      , Gr = () => {
        let rn;
        return Yr(nn => rn = nn),
        rn
    }
      , Zr = Wr(`${Qr} = __placeholder`)
      , en = rn => Zr( () => {}
    , {
        scope: {
            __placeholder: rn
        }
    })
      , tn = Gr();
    en(tn),
    queueMicrotask( () => {
        if (!ze._x_model)
            return;
        ze._x_removeModelListeners.default();
        let rn = ze._x_model.get
          , nn = ze._x_model.set
          , an = entangle({
            get() {
                return rn()
            },
            set(cn) {
                nn(cn)
            }
        }, {
            get() {
                return Gr()
            },
            set(cn) {
                en(cn)
            }
        });
        Jr(an)
    }
    )
}
);
directive("teleport", (ze, {modifiers: Qr, expression: Kr}, {cleanup: Wr}) => {
    ze.tagName.toLowerCase() !== "template" && warn("x-teleport can only be used on a <template> tag", ze);
    let Jr = getTarget(Kr)
      , Yr = ze.content.cloneNode(!0).firstElementChild;
    ze._x_teleport = Yr,
    Yr._x_teleportBack = ze,
    ze.setAttribute("data-teleport-template", !0),
    Yr.setAttribute("data-teleport-target", !0),
    ze._x_forwardEvents && ze._x_forwardEvents.forEach(Zr => {
        Yr.addEventListener(Zr, en => {
            en.stopPropagation(),
            ze.dispatchEvent(new en.constructor(en.type,en))
        }
        )
    }
    ),
    addScopeToNode(Yr, {}, ze);
    let Gr = (Zr, en, tn) => {
        tn.includes("prepend") ? en.parentNode.insertBefore(Zr, en) : tn.includes("append") ? en.parentNode.insertBefore(Zr, en.nextSibling) : en.appendChild(Zr)
    }
    ;
    mutateDom( () => {
        Gr(Yr, Jr, Qr),
        initTree(Yr),
        Yr._x_ignore = !0
    }
    ),
    ze._x_teleportPutBack = () => {
        let Zr = getTarget(Kr);
        mutateDom( () => {
            Gr(ze._x_teleport, Zr, Qr)
        }
        )
    }
    ,
    Wr( () => Yr.remove())
}
);
var teleportContainerDuringClone = document.createElement("div");
function getTarget(ze) {
    let Qr = skipDuringClone( () => document.querySelector(ze), () => teleportContainerDuringClone)();
    return Qr || warn(`Cannot find x-teleport element for selector: "${ze}"`),
    Qr
}
var handler = () => {}
;
handler.inline = (ze, {modifiers: Qr}, {cleanup: Kr}) => {
    Qr.includes("self") ? ze._x_ignoreSelf = !0 : ze._x_ignore = !0,
    Kr( () => {
        Qr.includes("self") ? delete ze._x_ignoreSelf : delete ze._x_ignore
    }
    )
}
;
directive("ignore", handler);
directive("effect", skipDuringClone( (ze, {expression: Qr}, {effect: Kr}) => {
    Kr(evaluateLater(ze, Qr))
}
));
function on(ze, Qr, Kr, Wr) {
    let Jr = ze
      , Yr = en => Wr(en)
      , Gr = {}
      , Zr = (en, tn) => rn => tn(en, rn);
    if (Kr.includes("dot") && (Qr = dotSyntax(Qr)),
    Kr.includes("camel") && (Qr = camelCase2(Qr)),
    Kr.includes("passive") && (Gr.passive = !0),
    Kr.includes("capture") && (Gr.capture = !0),
    Kr.includes("window") && (Jr = window),
    Kr.includes("document") && (Jr = document),
    Kr.includes("debounce")) {
        let en = Kr[Kr.indexOf("debounce") + 1] || "invalid-wait"
          , tn = isNumeric(en.split("ms")[0]) ? Number(en.split("ms")[0]) : 250;
        Yr = debounce(Yr, tn)
    }
    if (Kr.includes("throttle")) {
        let en = Kr[Kr.indexOf("throttle") + 1] || "invalid-wait"
          , tn = isNumeric(en.split("ms")[0]) ? Number(en.split("ms")[0]) : 250;
        Yr = throttle(Yr, tn)
    }
    return Kr.includes("prevent") && (Yr = Zr(Yr, (en, tn) => {
        tn.preventDefault(),
        en(tn)
    }
    )),
    Kr.includes("stop") && (Yr = Zr(Yr, (en, tn) => {
        tn.stopPropagation(),
        en(tn)
    }
    )),
    Kr.includes("self") && (Yr = Zr(Yr, (en, tn) => {
        tn.target === ze && en(tn)
    }
    )),
    (Kr.includes("away") || Kr.includes("outside")) && (Jr = document,
    Yr = Zr(Yr, (en, tn) => {
        ze.contains(tn.target) || tn.target.isConnected !== !1 && (ze.offsetWidth < 1 && ze.offsetHeight < 1 || ze._x_isShown !== !1 && en(tn))
    }
    )),
    Kr.includes("once") && (Yr = Zr(Yr, (en, tn) => {
        en(tn),
        Jr.removeEventListener(Qr, Yr, Gr)
    }
    )),
    Yr = Zr(Yr, (en, tn) => {
        isKeyEvent(Qr) && isListeningForASpecificKeyThatHasntBeenPressed(tn, Kr) || en(tn)
    }
    ),
    Jr.addEventListener(Qr, Yr, Gr),
    () => {
        Jr.removeEventListener(Qr, Yr, Gr)
    }
}
function dotSyntax(ze) {
    return ze.replace(/-/g, ".")
}
function camelCase2(ze) {
    return ze.toLowerCase().replace(/-(\w)/g, (Qr, Kr) => Kr.toUpperCase())
}
function isNumeric(ze) {
    return !Array.isArray(ze) && !isNaN(ze)
}
function kebabCase2(ze) {
    return [" ", "_"].includes(ze) ? ze : ze.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function isKeyEvent(ze) {
    return ["keydown", "keyup"].includes(ze)
}
function isListeningForASpecificKeyThatHasntBeenPressed(ze, Qr) {
    let Kr = Qr.filter(Yr => !["window", "document", "prevent", "stop", "once", "capture"].includes(Yr));
    if (Kr.includes("debounce")) {
        let Yr = Kr.indexOf("debounce");
        Kr.splice(Yr, isNumeric((Kr[Yr + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (Kr.includes("throttle")) {
        let Yr = Kr.indexOf("throttle");
        Kr.splice(Yr, isNumeric((Kr[Yr + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (Kr.length === 0 || Kr.length === 1 && keyToModifiers(ze.key).includes(Kr[0]))
        return !1;
    const Jr = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(Yr => Kr.includes(Yr));
    return Kr = Kr.filter(Yr => !Jr.includes(Yr)),
    !(Jr.length > 0 && Jr.filter(Gr => ((Gr === "cmd" || Gr === "super") && (Gr = "meta"),
    ze[`${Gr}Key`])).length === Jr.length && keyToModifiers(ze.key).includes(Kr[0]))
}
function keyToModifiers(ze) {
    if (!ze)
        return [];
    ze = kebabCase2(ze);
    let Qr = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return Qr[ze] = ze,
    Object.keys(Qr).map(Kr => {
        if (Qr[Kr] === ze)
            return Kr
    }
    ).filter(Kr => Kr)
}
directive("model", (ze, {modifiers: Qr, expression: Kr}, {effect: Wr, cleanup: Jr}) => {
    let Yr = ze;
    Qr.includes("parent") && (Yr = ze.parentNode);
    let Gr = evaluateLater(Yr, Kr), Zr;
    typeof Kr == "string" ? Zr = evaluateLater(Yr, `${Kr} = __placeholder`) : typeof Kr == "function" && typeof Kr() == "string" ? Zr = evaluateLater(Yr, `${Kr()} = __placeholder`) : Zr = () => {}
    ;
    let en = () => {
        let an;
        return Gr(cn => an = cn),
        isGetterSetter(an) ? an.get() : an
    }
      , tn = an => {
        let cn;
        Gr(dn => cn = dn),
        isGetterSetter(cn) ? cn.set(an) : Zr( () => {}
        , {
            scope: {
                __placeholder: an
            }
        })
    }
    ;
    typeof Kr == "string" && ze.type === "radio" && mutateDom( () => {
        ze.hasAttribute("name") || ze.setAttribute("name", Kr)
    }
    );
    var rn = ze.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(ze.type) || Qr.includes("lazy") ? "change" : "input";
    let nn = isCloning ? () => {}
    : on(ze, rn, Qr, an => {
        tn(getInputValue(ze, Qr, an, en()))
    }
    );
    if (Qr.includes("fill") && ([null, ""].includes(en()) || ze.type === "checkbox" && Array.isArray(en())) && ze.dispatchEvent(new Event(rn,{})),
    ze._x_removeModelListeners || (ze._x_removeModelListeners = {}),
    ze._x_removeModelListeners.default = nn,
    Jr( () => ze._x_removeModelListeners.default()),
    ze.form) {
        let an = on(ze.form, "reset", [], cn => {
            nextTick( () => ze._x_model && ze._x_model.set(ze.value))
        }
        );
        Jr( () => an())
    }
    ze._x_model = {
        get() {
            return en()
        },
        set(an) {
            tn(an)
        }
    },
    ze._x_forceModelUpdate = an => {
        an === void 0 && typeof Kr == "string" && Kr.match(/\./) && (an = ""),
        window.fromModel = !0,
        mutateDom( () => bind(ze, "value", an)),
        delete window.fromModel
    }
    ,
    Wr( () => {
        let an = en();
        Qr.includes("unintrusive") && document.activeElement.isSameNode(ze) || ze._x_forceModelUpdate(an)
    }
    )
}
);
function getInputValue(ze, Qr, Kr, Wr) {
    return mutateDom( () => {
        if (Kr instanceof CustomEvent && Kr.detail !== void 0)
            return Kr.detail !== null && Kr.detail !== void 0 ? Kr.detail : Kr.target.value;
        if (ze.type === "checkbox")
            if (Array.isArray(Wr)) {
                let Jr = null;
                return Qr.includes("number") ? Jr = safeParseNumber(Kr.target.value) : Qr.includes("boolean") ? Jr = safeParseBoolean(Kr.target.value) : Jr = Kr.target.value,
                Kr.target.checked ? Wr.concat([Jr]) : Wr.filter(Yr => !checkedAttrLooseCompare2(Yr, Jr))
            } else
                return Kr.target.checked;
        else
            return ze.tagName.toLowerCase() === "select" && ze.multiple ? Qr.includes("number") ? Array.from(Kr.target.selectedOptions).map(Jr => {
                let Yr = Jr.value || Jr.text;
                return safeParseNumber(Yr)
            }
            ) : Qr.includes("boolean") ? Array.from(Kr.target.selectedOptions).map(Jr => {
                let Yr = Jr.value || Jr.text;
                return safeParseBoolean(Yr)
            }
            ) : Array.from(Kr.target.selectedOptions).map(Jr => Jr.value || Jr.text) : Qr.includes("number") ? safeParseNumber(Kr.target.value) : Qr.includes("boolean") ? safeParseBoolean(Kr.target.value) : Qr.includes("trim") ? Kr.target.value.trim() : Kr.target.value
    }
    )
}
function safeParseNumber(ze) {
    let Qr = ze ? parseFloat(ze) : null;
    return isNumeric2(Qr) ? Qr : ze
}
function checkedAttrLooseCompare2(ze, Qr) {
    return ze == Qr
}
function isNumeric2(ze) {
    return !Array.isArray(ze) && !isNaN(ze)
}
function isGetterSetter(ze) {
    return ze !== null && typeof ze == "object" && typeof ze.get == "function" && typeof ze.set == "function"
}
directive("cloak", ze => queueMicrotask( () => mutateDom( () => ze.removeAttribute(prefix("cloak")))));
addInitSelector( () => `[${prefix("init")}]`);
directive("init", skipDuringClone( (ze, {expression: Qr}, {evaluate: Kr}) => typeof Qr == "string" ? !!Qr.trim() && Kr(Qr, {}, !1) : Kr(Qr, {}, !1)));
directive("text", (ze, {expression: Qr}, {effect: Kr, evaluateLater: Wr}) => {
    let Jr = Wr(Qr);
    Kr( () => {
        Jr(Yr => {
            mutateDom( () => {
                ze.textContent = Yr
            }
            )
        }
        )
    }
    )
}
);
directive("html", (ze, {expression: Qr}, {effect: Kr, evaluateLater: Wr}) => {
    let Jr = Wr(Qr);
    Kr( () => {
        Jr(Yr => {
            mutateDom( () => {
                ze.innerHTML = Yr,
                ze._x_ignoreSelf = !0,
                initTree(ze),
                delete ze._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (ze, {value: Qr, modifiers: Kr, expression: Wr, original: Jr}, {effect: Yr}) => {
    if (!Qr) {
        let Zr = {};
        injectBindingProviders(Zr),
        evaluateLater(ze, Wr)(tn => {
            applyBindingsObject(ze, tn, Jr)
        }
        , {
            scope: Zr
        });
        return
    }
    if (Qr === "key")
        return storeKeyForXFor(ze, Wr);
    if (ze._x_inlineBindings && ze._x_inlineBindings[Qr] && ze._x_inlineBindings[Qr].extract)
        return;
    let Gr = evaluateLater(ze, Wr);
    Yr( () => Gr(Zr => {
        Zr === void 0 && typeof Wr == "string" && Wr.match(/\./) && (Zr = ""),
        mutateDom( () => bind(ze, Qr, Zr, Kr))
    }
    ))
}
;
handler2.inline = (ze, {value: Qr, modifiers: Kr, expression: Wr}) => {
    Qr && (ze._x_inlineBindings || (ze._x_inlineBindings = {}),
    ze._x_inlineBindings[Qr] = {
        expression: Wr,
        extract: !1
    })
}
;
directive("bind", handler2);
function storeKeyForXFor(ze, Qr) {
    ze._x_keyExpression = Qr
}
addRootSelector( () => `[${prefix("data")}]`);
directive("data", (ze, {expression: Qr}, {cleanup: Kr}) => {
    if (shouldSkipRegisteringDataDuringClone(ze))
        return;
    Qr = Qr === "" ? "{}" : Qr;
    let Wr = {};
    injectMagics(Wr, ze);
    let Jr = {};
    injectDataProviders(Jr, Wr);
    let Yr = evaluate(ze, Qr, {
        scope: Jr
    });
    (Yr === void 0 || Yr === !0) && (Yr = {}),
    injectMagics(Yr, ze);
    let Gr = reactive(Yr);
    initInterceptors2(Gr);
    let Zr = addScopeToNode(ze, Gr);
    Gr.init && evaluate(ze, Gr.init),
    Kr( () => {
        Gr.destroy && evaluate(ze, Gr.destroy),
        Zr()
    }
    )
}
);
interceptClone( (ze, Qr) => {
    ze._x_dataStack && (Qr._x_dataStack = ze._x_dataStack,
    Qr.setAttribute("data-has-alpine-state", !0))
}
);
function shouldSkipRegisteringDataDuringClone(ze) {
    return isCloning ? isCloningLegacy ? !0 : ze.hasAttribute("data-has-alpine-state") : !1
}
directive("show", (ze, {modifiers: Qr, expression: Kr}, {effect: Wr}) => {
    let Jr = evaluateLater(ze, Kr);
    ze._x_doHide || (ze._x_doHide = () => {
        mutateDom( () => {
            ze.style.setProperty("display", "none", Qr.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
    ze._x_doShow || (ze._x_doShow = () => {
        mutateDom( () => {
            ze.style.length === 1 && ze.style.display === "none" ? ze.removeAttribute("style") : ze.style.removeProperty("display")
        }
        )
    }
    );
    let Yr = () => {
        ze._x_doHide(),
        ze._x_isShown = !1
    }
    , Gr = () => {
        ze._x_doShow(),
        ze._x_isShown = !0
    }
    , Zr = () => setTimeout(Gr), en = once(nn => nn ? Gr() : Yr(), nn => {
        typeof ze._x_toggleAndCascadeWithTransitions == "function" ? ze._x_toggleAndCascadeWithTransitions(ze, nn, Gr, Yr) : nn ? Zr() : Yr()
    }
    ), tn, rn = !0;
    Wr( () => Jr(nn => {
        !rn && nn === tn || (Qr.includes("immediate") && (nn ? Zr() : Yr()),
        en(nn),
        tn = nn,
        rn = !1)
    }
    ))
}
);
directive("for", (ze, {expression: Qr}, {effect: Kr, cleanup: Wr}) => {
    let Jr = parseForExpression(Qr)
      , Yr = evaluateLater(ze, Jr.items)
      , Gr = evaluateLater(ze, ze._x_keyExpression || "index");
    ze._x_prevKeys = [],
    ze._x_lookup = {},
    Kr( () => loop(ze, Jr, Yr, Gr)),
    Wr( () => {
        Object.values(ze._x_lookup).forEach(Zr => Zr.remove()),
        delete ze._x_prevKeys,
        delete ze._x_lookup
    }
    )
}
);
function loop(ze, Qr, Kr, Wr) {
    let Jr = Gr => typeof Gr == "object" && !Array.isArray(Gr)
      , Yr = ze;
    Kr(Gr => {
        isNumeric3(Gr) && Gr >= 0 && (Gr = Array.from(Array(Gr).keys(), un => un + 1)),
        Gr === void 0 && (Gr = []);
        let Zr = ze._x_lookup
          , en = ze._x_prevKeys
          , tn = []
          , rn = [];
        if (Jr(Gr))
            Gr = Object.entries(Gr).map( ([un,vn]) => {
                let yn = getIterationScopeVariables(Qr, vn, un, Gr);
                Wr(xn => rn.push(xn), {
                    scope: {
                        index: un,
                        ...yn
                    }
                }),
                tn.push(yn)
            }
            );
        else
            for (let un = 0; un < Gr.length; un++) {
                let vn = getIterationScopeVariables(Qr, Gr[un], un, Gr);
                Wr(yn => rn.push(yn), {
                    scope: {
                        index: un,
                        ...vn
                    }
                }),
                tn.push(vn)
            }
        let nn = []
          , an = []
          , cn = []
          , dn = [];
        for (let un = 0; un < en.length; un++) {
            let vn = en[un];
            rn.indexOf(vn) === -1 && cn.push(vn)
        }
        en = en.filter(un => !cn.includes(un));
        let wn = "template";
        for (let un = 0; un < rn.length; un++) {
            let vn = rn[un]
              , yn = en.indexOf(vn);
            if (yn === -1)
                en.splice(un, 0, vn),
                nn.push([wn, un]);
            else if (yn !== un) {
                let xn = en.splice(un, 1)[0]
                  , _n = en.splice(yn - 1, 1)[0];
                en.splice(un, 0, _n),
                en.splice(yn, 0, xn),
                an.push([xn, _n])
            } else
                dn.push(vn);
            wn = vn
        }
        for (let un = 0; un < cn.length; un++) {
            let vn = cn[un];
            Zr[vn]._x_effects && Zr[vn]._x_effects.forEach(dequeueJob),
            Zr[vn].remove(),
            Zr[vn] = null,
            delete Zr[vn]
        }
        for (let un = 0; un < an.length; un++) {
            let[vn,yn] = an[un]
              , xn = Zr[vn]
              , _n = Zr[yn]
              , Sn = document.createElement("div");
            mutateDom( () => {
                _n || warn('x-for ":key" is undefined or invalid', Yr),
                _n.after(Sn),
                xn.after(_n),
                _n._x_currentIfEl && _n.after(_n._x_currentIfEl),
                Sn.before(xn),
                xn._x_currentIfEl && xn.after(xn._x_currentIfEl),
                Sn.remove()
            }
            ),
            _n._x_refreshXForScope(tn[rn.indexOf(yn)])
        }
        for (let un = 0; un < nn.length; un++) {
            let[vn,yn] = nn[un]
              , xn = vn === "template" ? Yr : Zr[vn];
            xn._x_currentIfEl && (xn = xn._x_currentIfEl);
            let _n = tn[yn]
              , Sn = rn[yn]
              , Cn = document.importNode(Yr.content, !0).firstElementChild
              , Rn = reactive(_n);
            addScopeToNode(Cn, Rn, Yr),
            Cn._x_refreshXForScope = hn => {
                Object.entries(hn).forEach( ([kn,En]) => {
                    Rn[kn] = En
                }
                )
            }
            ,
            mutateDom( () => {
                xn.after(Cn),
                initTree(Cn)
            }
            ),
            typeof Sn == "object" && warn("x-for key cannot be an object, it must be a string or an integer", Yr),
            Zr[Sn] = Cn
        }
        for (let un = 0; un < dn.length; un++)
            Zr[dn[un]]._x_refreshXForScope(tn[rn.indexOf(dn[un])]);
        Yr._x_prevKeys = rn
    }
    )
}
function parseForExpression(ze) {
    let Qr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , Kr = /^\s*\(|\)\s*$/g
      , Wr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , Jr = ze.match(Wr);
    if (!Jr)
        return;
    let Yr = {};
    Yr.items = Jr[2].trim();
    let Gr = Jr[1].replace(Kr, "").trim()
      , Zr = Gr.match(Qr);
    return Zr ? (Yr.item = Gr.replace(Qr, "").trim(),
    Yr.index = Zr[1].trim(),
    Zr[2] && (Yr.collection = Zr[2].trim())) : Yr.item = Gr,
    Yr
}
function getIterationScopeVariables(ze, Qr, Kr, Wr) {
    let Jr = {};
    return /^\[.*\]$/.test(ze.item) && Array.isArray(Qr) ? ze.item.replace("[", "").replace("]", "").split(",").map(Gr => Gr.trim()).forEach( (Gr, Zr) => {
        Jr[Gr] = Qr[Zr]
    }
    ) : /^\{.*\}$/.test(ze.item) && !Array.isArray(Qr) && typeof Qr == "object" ? ze.item.replace("{", "").replace("}", "").split(",").map(Gr => Gr.trim()).forEach(Gr => {
        Jr[Gr] = Qr[Gr]
    }
    ) : Jr[ze.item] = Qr,
    ze.index && (Jr[ze.index] = Kr),
    ze.collection && (Jr[ze.collection] = Wr),
    Jr
}
function isNumeric3(ze) {
    return !Array.isArray(ze) && !isNaN(ze)
}
function handler3() {}
handler3.inline = (ze, {expression: Qr}, {cleanup: Kr}) => {
    let Wr = closestRoot(ze);
    Wr._x_refs || (Wr._x_refs = {}),
    Wr._x_refs[Qr] = ze,
    Kr( () => delete Wr._x_refs[Qr])
}
;
directive("ref", handler3);
directive("if", (ze, {expression: Qr}, {effect: Kr, cleanup: Wr}) => {
    ze.tagName.toLowerCase() !== "template" && warn("x-if can only be used on a <template> tag", ze);
    let Jr = evaluateLater(ze, Qr)
      , Yr = () => {
        if (ze._x_currentIfEl)
            return ze._x_currentIfEl;
        let Zr = ze.content.cloneNode(!0).firstElementChild;
        return addScopeToNode(Zr, {}, ze),
        mutateDom( () => {
            ze.after(Zr),
            initTree(Zr)
        }
        ),
        ze._x_currentIfEl = Zr,
        ze._x_undoIf = () => {
            walk(Zr, en => {
                en._x_effects && en._x_effects.forEach(dequeueJob)
            }
            ),
            Zr.remove(),
            delete ze._x_currentIfEl
        }
        ,
        Zr
    }
      , Gr = () => {
        ze._x_undoIf && (ze._x_undoIf(),
        delete ze._x_undoIf)
    }
    ;
    Kr( () => Jr(Zr => {
        Zr ? Yr() : Gr()
    }
    )),
    Wr( () => ze._x_undoIf && ze._x_undoIf())
}
);
directive("id", (ze, {expression: Qr}, {evaluate: Kr}) => {
    Kr(Qr).forEach(Jr => setIdRoot(ze, Jr))
}
);
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone( (ze, {value: Qr, modifiers: Kr, expression: Wr}, {cleanup: Jr}) => {
    let Yr = Wr ? evaluateLater(ze, Wr) : () => {}
    ;
    ze.tagName.toLowerCase() === "template" && (ze._x_forwardEvents || (ze._x_forwardEvents = []),
    ze._x_forwardEvents.includes(Qr) || ze._x_forwardEvents.push(Qr));
    let Gr = on(ze, Qr, Kr, Zr => {
        Yr( () => {}
        , {
            scope: {
                $event: Zr
            },
            params: [Zr]
        })
    }
    );
    Jr( () => Gr())
}
));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(ze, Qr, Kr) {
    directive(Qr, Wr => warn(`You can't use [x-${Qr}] without first installing the "${ze}" plugin here: https://alpinejs.dev/plugins/${Kr}`, Wr))
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default
  , module_default = src_default
  , aos = {
    exports: {}
};
(function(ze, Qr) {
    (function(Kr, Wr) {
        ze.exports = Wr()
    }
    )(commonjsGlobal, function() {
        return function(Kr) {
            function Wr(Yr) {
                if (Jr[Yr])
                    return Jr[Yr].exports;
                var Gr = Jr[Yr] = {
                    exports: {},
                    id: Yr,
                    loaded: !1
                };
                return Kr[Yr].call(Gr.exports, Gr, Gr.exports, Wr),
                Gr.loaded = !0,
                Gr.exports
            }
            var Jr = {};
            return Wr.m = Kr,
            Wr.c = Jr,
            Wr.p = "dist/",
            Wr(0)
        }([function(Kr, Wr, Jr) {
            function Yr(fn) {
                return fn && fn.__esModule ? fn : {
                    default: fn
                }
            }
            var Gr = Object.assign || function(fn) {
                for (var mn = 1; mn < arguments.length; mn++) {
                    var Pn = arguments[mn];
                    for (var jn in Pn)
                        Object.prototype.hasOwnProperty.call(Pn, jn) && (fn[jn] = Pn[jn])
                }
                return fn
            }
              , Zr = Jr(1)
              , en = (Yr(Zr),
            Jr(6))
              , tn = Yr(en)
              , rn = Jr(7)
              , nn = Yr(rn)
              , an = Jr(8)
              , cn = Yr(an)
              , dn = Jr(9)
              , wn = Yr(dn)
              , un = Jr(10)
              , vn = Yr(un)
              , yn = Jr(11)
              , xn = Yr(yn)
              , _n = Jr(14)
              , Sn = Yr(_n)
              , Cn = []
              , Rn = !1
              , hn = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }
              , kn = function() {
                var fn = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                if (fn && (Rn = !0),
                Rn)
                    return Cn = (0,
                    xn.default)(Cn, hn),
                    (0,
                    vn.default)(Cn, hn.once),
                    Cn
            }
              , En = function() {
                Cn = (0,
                Sn.default)(),
                kn()
            }
              , ln = function() {
                Cn.forEach(function(fn, mn) {
                    fn.node.removeAttribute("data-aos"),
                    fn.node.removeAttribute("data-aos-easing"),
                    fn.node.removeAttribute("data-aos-duration"),
                    fn.node.removeAttribute("data-aos-delay")
                })
            }
              , sn = function(fn) {
                return fn === !0 || fn === "mobile" && wn.default.mobile() || fn === "phone" && wn.default.phone() || fn === "tablet" && wn.default.tablet() || typeof fn == "function" && fn() === !0
            }
              , gn = function(fn) {
                hn = Gr(hn, fn),
                Cn = (0,
                Sn.default)();
                var mn = document.all && !window.atob;
                return sn(hn.disable) || mn ? ln() : (hn.disableMutationObserver || cn.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                hn.disableMutationObserver = !0),
                document.querySelector("body").setAttribute("data-aos-easing", hn.easing),
                document.querySelector("body").setAttribute("data-aos-duration", hn.duration),
                document.querySelector("body").setAttribute("data-aos-delay", hn.delay),
                hn.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? kn(!0) : hn.startEvent === "load" ? window.addEventListener(hn.startEvent, function() {
                    kn(!0)
                }) : document.addEventListener(hn.startEvent, function() {
                    kn(!0)
                }),
                window.addEventListener("resize", (0,
                nn.default)(kn, hn.debounceDelay, !0)),
                window.addEventListener("orientationchange", (0,
                nn.default)(kn, hn.debounceDelay, !0)),
                window.addEventListener("scroll", (0,
                tn.default)(function() {
                    (0,
                    vn.default)(Cn, hn.once)
                }, hn.throttleDelay)),
                hn.disableMutationObserver || cn.default.ready("[data-aos]", En),
                Cn)
            };
            Kr.exports = {
                init: gn,
                refresh: kn,
                refreshHard: En
            }
        }
        , function(Kr, Wr) {}
        , , , , , function(Kr, Wr) {
            (function(Jr) {
                function Yr(sn, gn, fn) {
                    function mn(bn) {
                        var In = Nn
                          , zn = On;
                        return Nn = On = void 0,
                        Qn = bn,
                        Mn = sn.apply(zn, In)
                    }
                    function Pn(bn) {
                        return Qn = bn,
                        An = setTimeout(Kn, gn),
                        Fn ? mn(bn) : Mn
                    }
                    function jn(bn) {
                        var In = bn - Tn
                          , zn = bn - Qn
                          , Hn = gn - In;
                        return $n ? En(Hn, Dn - zn) : Hn
                    }
                    function Ln(bn) {
                        var In = bn - Tn
                          , zn = bn - Qn;
                        return Tn === void 0 || In >= gn || In < 0 || $n && zn >= Dn
                    }
                    function Kn() {
                        var bn = ln();
                        return Ln(bn) ? Vn(bn) : void (An = setTimeout(Kn, jn(bn)))
                    }
                    function Vn(bn) {
                        return An = void 0,
                        pn && Nn ? mn(bn) : (Nn = On = void 0,
                        Mn)
                    }
                    function Bn() {
                        An !== void 0 && clearTimeout(An),
                        Qn = 0,
                        Nn = Tn = On = An = void 0
                    }
                    function Un() {
                        return An === void 0 ? Mn : Vn(ln())
                    }
                    function qn() {
                        var bn = ln()
                          , In = Ln(bn);
                        if (Nn = arguments,
                        On = this,
                        Tn = bn,
                        In) {
                            if (An === void 0)
                                return Pn(Tn);
                            if ($n)
                                return An = setTimeout(Kn, gn),
                                mn(Tn)
                        }
                        return An === void 0 && (An = setTimeout(Kn, gn)),
                        Mn
                    }
                    var Nn, On, Dn, Mn, An, Tn, Qn = 0, Fn = !1, $n = !1, pn = !0;
                    if (typeof sn != "function")
                        throw new TypeError(an);
                    return gn = rn(gn) || 0,
                    Zr(fn) && (Fn = !!fn.leading,
                    $n = "maxWait"in fn,
                    Dn = $n ? kn(rn(fn.maxWait) || 0, gn) : Dn,
                    pn = "trailing"in fn ? !!fn.trailing : pn),
                    qn.cancel = Bn,
                    qn.flush = Un,
                    qn
                }
                function Gr(sn, gn, fn) {
                    var mn = !0
                      , Pn = !0;
                    if (typeof sn != "function")
                        throw new TypeError(an);
                    return Zr(fn) && (mn = "leading"in fn ? !!fn.leading : mn,
                    Pn = "trailing"in fn ? !!fn.trailing : Pn),
                    Yr(sn, gn, {
                        leading: mn,
                        maxWait: gn,
                        trailing: Pn
                    })
                }
                function Zr(sn) {
                    var gn = typeof sn > "u" ? "undefined" : nn(sn);
                    return !!sn && (gn == "object" || gn == "function")
                }
                function en(sn) {
                    return !!sn && (typeof sn > "u" ? "undefined" : nn(sn)) == "object"
                }
                function tn(sn) {
                    return (typeof sn > "u" ? "undefined" : nn(sn)) == "symbol" || en(sn) && hn.call(sn) == dn
                }
                function rn(sn) {
                    if (typeof sn == "number")
                        return sn;
                    if (tn(sn))
                        return cn;
                    if (Zr(sn)) {
                        var gn = typeof sn.valueOf == "function" ? sn.valueOf() : sn;
                        sn = Zr(gn) ? gn + "" : gn
                    }
                    if (typeof sn != "string")
                        return sn === 0 ? sn : +sn;
                    sn = sn.replace(wn, "");
                    var fn = vn.test(sn);
                    return fn || yn.test(sn) ? xn(sn.slice(2), fn ? 2 : 8) : un.test(sn) ? cn : +sn
                }
                var nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(sn) {
                    return typeof sn
                }
                : function(sn) {
                    return sn && typeof Symbol == "function" && sn.constructor === Symbol && sn !== Symbol.prototype ? "symbol" : typeof sn
                }
                  , an = "Expected a function"
                  , cn = NaN
                  , dn = "[object Symbol]"
                  , wn = /^\s+|\s+$/g
                  , un = /^[-+]0x[0-9a-f]+$/i
                  , vn = /^0b[01]+$/i
                  , yn = /^0o[0-7]+$/i
                  , xn = parseInt
                  , _n = (typeof Jr > "u" ? "undefined" : nn(Jr)) == "object" && Jr && Jr.Object === Object && Jr
                  , Sn = (typeof self > "u" ? "undefined" : nn(self)) == "object" && self && self.Object === Object && self
                  , Cn = _n || Sn || Function("return this")()
                  , Rn = Object.prototype
                  , hn = Rn.toString
                  , kn = Math.max
                  , En = Math.min
                  , ln = function() {
                    return Cn.Date.now()
                };
                Kr.exports = Gr
            }
            ).call(Wr, function() {
                return this
            }())
        }
        , function(Kr, Wr) {
            (function(Jr) {
                function Yr(ln, sn, gn) {
                    function fn(pn) {
                        var bn = qn
                          , In = Nn;
                        return qn = Nn = void 0,
                        Tn = pn,
                        Dn = ln.apply(In, bn)
                    }
                    function mn(pn) {
                        return Tn = pn,
                        Mn = setTimeout(Ln, sn),
                        Qn ? fn(pn) : Dn
                    }
                    function Pn(pn) {
                        var bn = pn - An
                          , In = pn - Tn
                          , zn = sn - bn;
                        return Fn ? kn(zn, On - In) : zn
                    }
                    function jn(pn) {
                        var bn = pn - An
                          , In = pn - Tn;
                        return An === void 0 || bn >= sn || bn < 0 || Fn && In >= On
                    }
                    function Ln() {
                        var pn = En();
                        return jn(pn) ? Kn(pn) : void (Mn = setTimeout(Ln, Pn(pn)))
                    }
                    function Kn(pn) {
                        return Mn = void 0,
                        $n && qn ? fn(pn) : (qn = Nn = void 0,
                        Dn)
                    }
                    function Vn() {
                        Mn !== void 0 && clearTimeout(Mn),
                        Tn = 0,
                        qn = An = Nn = Mn = void 0
                    }
                    function Bn() {
                        return Mn === void 0 ? Dn : Kn(En())
                    }
                    function Un() {
                        var pn = En()
                          , bn = jn(pn);
                        if (qn = arguments,
                        Nn = this,
                        An = pn,
                        bn) {
                            if (Mn === void 0)
                                return mn(An);
                            if (Fn)
                                return Mn = setTimeout(Ln, sn),
                                fn(An)
                        }
                        return Mn === void 0 && (Mn = setTimeout(Ln, sn)),
                        Dn
                    }
                    var qn, Nn, On, Dn, Mn, An, Tn = 0, Qn = !1, Fn = !1, $n = !0;
                    if (typeof ln != "function")
                        throw new TypeError(nn);
                    return sn = tn(sn) || 0,
                    Gr(gn) && (Qn = !!gn.leading,
                    Fn = "maxWait"in gn,
                    On = Fn ? hn(tn(gn.maxWait) || 0, sn) : On,
                    $n = "trailing"in gn ? !!gn.trailing : $n),
                    Un.cancel = Vn,
                    Un.flush = Bn,
                    Un
                }
                function Gr(ln) {
                    var sn = typeof ln > "u" ? "undefined" : rn(ln);
                    return !!ln && (sn == "object" || sn == "function")
                }
                function Zr(ln) {
                    return !!ln && (typeof ln > "u" ? "undefined" : rn(ln)) == "object"
                }
                function en(ln) {
                    return (typeof ln > "u" ? "undefined" : rn(ln)) == "symbol" || Zr(ln) && Rn.call(ln) == cn
                }
                function tn(ln) {
                    if (typeof ln == "number")
                        return ln;
                    if (en(ln))
                        return an;
                    if (Gr(ln)) {
                        var sn = typeof ln.valueOf == "function" ? ln.valueOf() : ln;
                        ln = Gr(sn) ? sn + "" : sn
                    }
                    if (typeof ln != "string")
                        return ln === 0 ? ln : +ln;
                    ln = ln.replace(dn, "");
                    var gn = un.test(ln);
                    return gn || vn.test(ln) ? yn(ln.slice(2), gn ? 2 : 8) : wn.test(ln) ? an : +ln
                }
                var rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ln) {
                    return typeof ln
                }
                : function(ln) {
                    return ln && typeof Symbol == "function" && ln.constructor === Symbol && ln !== Symbol.prototype ? "symbol" : typeof ln
                }
                  , nn = "Expected a function"
                  , an = NaN
                  , cn = "[object Symbol]"
                  , dn = /^\s+|\s+$/g
                  , wn = /^[-+]0x[0-9a-f]+$/i
                  , un = /^0b[01]+$/i
                  , vn = /^0o[0-7]+$/i
                  , yn = parseInt
                  , xn = (typeof Jr > "u" ? "undefined" : rn(Jr)) == "object" && Jr && Jr.Object === Object && Jr
                  , _n = (typeof self > "u" ? "undefined" : rn(self)) == "object" && self && self.Object === Object && self
                  , Sn = xn || _n || Function("return this")()
                  , Cn = Object.prototype
                  , Rn = Cn.toString
                  , hn = Math.max
                  , kn = Math.min
                  , En = function() {
                    return Sn.Date.now()
                };
                Kr.exports = Yr
            }
            ).call(Wr, function() {
                return this
            }())
        }
        , function(Kr, Wr) {
            function Jr(rn) {
                var nn = void 0
                  , an = void 0;
                for (nn = 0; nn < rn.length; nn += 1)
                    if (an = rn[nn],
                    an.dataset && an.dataset.aos || an.children && Jr(an.children))
                        return !0;
                return !1
            }
            function Yr() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }
            function Gr() {
                return !!Yr()
            }
            function Zr(rn, nn) {
                var an = window.document
                  , cn = Yr()
                  , dn = new cn(en);
                tn = nn,
                dn.observe(an.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
            function en(rn) {
                rn && rn.forEach(function(nn) {
                    var an = Array.prototype.slice.call(nn.addedNodes)
                      , cn = Array.prototype.slice.call(nn.removedNodes)
                      , dn = an.concat(cn);
                    if (Jr(dn))
                        return tn()
                })
            }
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var tn = function() {};
            Wr.default = {
                isSupported: Gr,
                ready: Zr
            }
        }
        , function(Kr, Wr) {
            function Jr(an, cn) {
                if (!(an instanceof cn))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Yr() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Gr = function() {
                function an(cn, dn) {
                    for (var wn = 0; wn < dn.length; wn++) {
                        var un = dn[wn];
                        un.enumerable = un.enumerable || !1,
                        un.configurable = !0,
                        "value"in un && (un.writable = !0),
                        Object.defineProperty(cn, un.key, un)
                    }
                }
                return function(cn, dn, wn) {
                    return dn && an(cn.prototype, dn),
                    wn && an(cn, wn),
                    cn
                }
            }()
              , Zr = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
              , en = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
              , tn = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
              , rn = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
              , nn = function() {
                function an() {
                    Jr(this, an)
                }
                return Gr(an, [{
                    key: "phone",
                    value: function() {
                        var cn = Yr();
                        return !(!Zr.test(cn) && !en.test(cn.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var cn = Yr();
                        return !(!tn.test(cn) && !rn.test(cn.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]),
                an
            }();
            Wr.default = new nn
        }
        , function(Kr, Wr) {
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Jr = function(Gr, Zr, en) {
                var tn = Gr.node.getAttribute("data-aos-once");
                Zr > Gr.position ? Gr.node.classList.add("aos-animate") : typeof tn < "u" && (tn === "false" || !en && tn !== "true") && Gr.node.classList.remove("aos-animate")
            }
              , Yr = function(Gr, Zr) {
                var en = window.pageYOffset
                  , tn = window.innerHeight;
                Gr.forEach(function(rn, nn) {
                    Jr(rn, tn + en, Zr)
                })
            };
            Wr.default = Yr
        }
        , function(Kr, Wr, Jr) {
            function Yr(tn) {
                return tn && tn.__esModule ? tn : {
                    default: tn
                }
            }
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Gr = Jr(12)
              , Zr = Yr(Gr)
              , en = function(tn, rn) {
                return tn.forEach(function(nn, an) {
                    nn.node.classList.add("aos-init"),
                    nn.position = (0,
                    Zr.default)(nn.node, rn.offset)
                }),
                tn
            };
            Wr.default = en
        }
        , function(Kr, Wr, Jr) {
            function Yr(tn) {
                return tn && tn.__esModule ? tn : {
                    default: tn
                }
            }
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Gr = Jr(13)
              , Zr = Yr(Gr)
              , en = function(tn, rn) {
                var nn = 0
                  , an = 0
                  , cn = window.innerHeight
                  , dn = {
                    offset: tn.getAttribute("data-aos-offset"),
                    anchor: tn.getAttribute("data-aos-anchor"),
                    anchorPlacement: tn.getAttribute("data-aos-anchor-placement")
                };
                switch (dn.offset && !isNaN(dn.offset) && (an = parseInt(dn.offset)),
                dn.anchor && document.querySelectorAll(dn.anchor) && (tn = document.querySelectorAll(dn.anchor)[0]),
                nn = (0,
                Zr.default)(tn).top,
                dn.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    nn += tn.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    nn += tn.offsetHeight;
                    break;
                case "top-center":
                    nn += cn / 2;
                    break;
                case "bottom-center":
                    nn += cn / 2 + tn.offsetHeight;
                    break;
                case "center-center":
                    nn += cn / 2 + tn.offsetHeight / 2;
                    break;
                case "top-top":
                    nn += cn;
                    break;
                case "bottom-top":
                    nn += tn.offsetHeight + cn;
                    break;
                case "center-top":
                    nn += tn.offsetHeight / 2 + cn
                }
                return dn.anchorPlacement || dn.offset || isNaN(rn) || (an = rn),
                nn + an
            };
            Wr.default = en
        }
        , function(Kr, Wr) {
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Jr = function(Yr) {
                for (var Gr = 0, Zr = 0; Yr && !isNaN(Yr.offsetLeft) && !isNaN(Yr.offsetTop); )
                    Gr += Yr.offsetLeft - (Yr.tagName != "BODY" ? Yr.scrollLeft : 0),
                    Zr += Yr.offsetTop - (Yr.tagName != "BODY" ? Yr.scrollTop : 0),
                    Yr = Yr.offsetParent;
                return {
                    top: Zr,
                    left: Gr
                }
            };
            Wr.default = Jr
        }
        , function(Kr, Wr) {
            Object.defineProperty(Wr, "__esModule", {
                value: !0
            });
            var Jr = function(Yr) {
                return Yr = Yr || document.querySelectorAll("[data-aos]"),
                Array.prototype.map.call(Yr, function(Gr) {
                    return {
                        node: Gr
                    }
                })
            };
            Wr.default = Jr
        }
        ])
    })
}
)(aos);
var aosExports = aos.exports;
const AOS$1 = getDefaultExportFromCjs(aosExports);
window.htmx = htmx$1;
window.Alpine = module_default;
window.AOS = AOS$1;
Alpine.start();
AOS.init({
    once: !0
});
function animateTypingWords() {
    document.querySelectorAll(".typing-words").forEach(ze => {
        const Qr = ze.dataset.words.split(",");
        let Kr = 0
          , Wr = Qr[Kr].length
          , Jr = 1
          , Yr = 100
          , Gr = 2e3;
        const Zr = () => {
            Wr < Qr[Kr].length ? (ze.innerHTML = Qr[Kr].slice(0, Wr + 1),
            Wr += Jr,
            setTimeout(Zr, Yr)) : setTimeout(en, Gr)
        }
          , en = () => {
            Wr > 0 ? (ze.innerHTML = Qr[Kr].slice(0, Wr - 1),
            Wr -= Jr,
            setTimeout(en, Yr)) : (Kr = (Kr + 1) % Qr.length,
            setTimeout(Zr, 500))
        }
        ;
        setTimeout(en, 500)
    }
    )
}
htmx.on("htmx:load", animateTypingWords);
