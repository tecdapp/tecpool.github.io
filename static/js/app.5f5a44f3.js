(function(e) {
    function t(t) {
        for (var a, s, o = t[0], u = t[1], l = t[2], d = 0, p = []; d < o.length; d++)
            s = o[d],
            Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
            i[s] = 0;
        for (a in u)
            Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        c && c(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
                var u = n[o];
                0 !== i[u] && (a = !1)
            }
            a && (r.splice(t--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var a = {}
      , i = {
        app: 0
    }
      , r = [];
    function s(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.m = e,
    s.c = a,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                s.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var l = 0; l < o.length; l++)
        t(o[l]);
    var c = u;
    r.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "01e7": function(e, t, n) {
        "use strict";
        n("498a");
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.inviter = o,
        t.getInv = u,
        t.getBalance = l,
        t.getPoolAllLocked = c,
        t.getPoolMyLocked = p,
        t.getPoolMyEarned = y,
        t.getDeaTime = v,
        t.pledge = b,
        t.reward = h,
        t.exit = A,
        t.withdraw = w,
        t.default = void 0,
        n("96cf");
        var i = a(n("c973"))
          , r = a(n("4360"))
          , s = n("8e02");
        function o(e) {
            var t = function() {
                var t = (0,
                i.default)(regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return e = tronWeb.address.toHex(e),
                                t.next = 3,
                                invContract.setInviter(e).send({
                                    shouldPollResponse: !1
                                });
                            case 3:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return t()
        }
        function u(e) {
            var t = function() {
                var t = (0,
                i.default)(regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                invContract.userMap(e).call();
                            case 2:
                                return n = t.sent,
                                t.abrupt("return", tronWeb.address.fromHex(n));
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return t()
        }
        function l(e, t) {
            var n = function() {
                var n = (0,
                i.default)(regeneratorRuntime.mark((function n() {
                    var a, o, u, l, c;
                    return regeneratorRuntime.wrap((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return a = e,
                                o = "balanceOf(address)",
                                u = [{
                                    type: "address",
                                    value: r.default.state.wallet.address
                                }],
                                l = {},
                                c = function() {
                                    var e = (0,
                                    i.default)(regeneratorRuntime.mark((function e() {
                                        var n;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    tronWeb.transactionBuilder.triggerConstantContract(a, o, l, u);
                                                case 2:
                                                    return n = e.sent,
                                                    e.abrupt("return", (0,
                                                    s.trim)(parseInt(n.constant_result[0], 16), t));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                n.abrupt("return", c());
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function() {
                    return n.apply(this, arguments)
                }
            }();
            return n()
        }
        function c(e, t) {
            return d.apply(this, arguments)
        }
        function d() {
            return d = (0,
            i.default)(regeneratorRuntime.mark((function e(t, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.totalSupply().call();
                        case 2:
                            return a = e.sent,
                            e.abrupt("return", (0,
                            s.trim)(a._hex, n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            d.apply(this, arguments)
        }
        function p(e, t) {
            return f.apply(this, arguments)
        }
        function f() {
            return f = (0,
            i.default)(regeneratorRuntime.mark((function e(t, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.balanceOf(r.default.state.wallet.address).call();
                        case 2:
                            return a = e.sent,
                            e.abrupt("return", (0,
                            s.trim)(a._hex, n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            f.apply(this, arguments)
        }
        function y(e, t) {
            return m.apply(this, arguments)
        }
        function m() {
            return m = (0,
            i.default)(regeneratorRuntime.mark((function e(t, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.earned(r.default.state.wallet.address).call();
                        case 2:
                            return a = e.sent,
                            e.abrupt("return", (0,
                            s.trim)(a._value._hex, n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            m.apply(this, arguments)
        }
        function v(e) {
            return g.apply(this, arguments)
        }
        function g() {
            return g = (0,
            i.default)(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.getDeaTime(r.default.state.wallet.address).call();
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", 1e3 * parseInt(n._time._hex, 16));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            g.apply(this, arguments)
        }
        function b(e, t, n) {
            var a = function() {
                var a = (0,
                i.default)(regeneratorRuntime.mark((function a() {
                    var i, r;
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                return i = "",
                                    6 == n ? i = tronWeb.toSun(e) : 18 == n && (i = tronWeb.toBigNumber(e * Math.pow(10, 12)),
                                i = tronWeb.toSun(i)),
                                i = tronWeb.toHex(i),
                                a.next = 5,
                                t.stake(i).send({
                                    shouldPollResponse: !1
                                });
                            case 5:
                                return r = a.sent,
                                a.abrupt("return", r);
                            case 7:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )));
                return function() {
                    return a.apply(this, arguments)
                }
            }();
            return a()
        }
        function h(e) {
            var t = function() {
                var t = (0,
                i.default)(regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.getReward().send({
                                    shouldPollResponse: !1
                                });
                            case 2:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return t()
        }
        function A(e) {
            var t = function() {
                var t = (0,
                i.default)(regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.exit().send({
                                    shouldPollResponse: !1
                                });
                            case 2:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return t()
        }
        function w(e, t, n) {
            var a = function() {
                var a = (0,
                i.default)(regeneratorRuntime.mark((function a() {
                    var i, r;
                    return regeneratorRuntime.wrap((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                return i = "",
                                    6 == n ? i = tronWeb.toSun(t) : 18 == n && (i = tronWeb.toBigNumber(t * Math.pow(10, 12)),
                                i = tronWeb.toSun(i)),
                                i = tronWeb.toHex(i),
                                a.next = 5,
                                e.withdraw(i).send({
                                    shouldPollResponse: !1
                                });
                            case 5:
                                return r = a.sent,
                                a.abrupt("return", r);
                            case 7:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )));
                return function() {
                    return a.apply(this, arguments)
                }
            }();
            return a()
        }
        var T = {
            getBalance: l,
            getPoolAllLocked: c,
            getPoolMyLocked: p,
            getPoolMyEarned: y,
            reward: h,
            exit: A,
            withdraw: w,
            pledge: b,
            inviter: o,
            getInv: u,
            getDeaTime: v
        };
        t.default = T
    },
    "0418": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("48e3")
          , i = n("ad21");
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(r);
        n("a3df");
        var s = n("2877")
          , o = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "be3de8c6", null);
        t["default"] = o.exports
    },
    "0b28": function(e, t, n) {},
    "0edf": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAkCAMAAAD1hTl/AAACSVBMVEUAAADfAADZAwPcAwPaAADaAwPcAADYAwHbAADbAwPcAADYAADaAADaBATbAADbBATcAADaAADaAgHbAgLdAADZAAHaAwTbAwPdAADYAwLYEgPZAAHZAQLZBAXZBQHZFAbZGAPZIgXZMgnaAADaAAHaAQDaAQLaAgHaAwHaAwLaAwPaAwTaBAPaBATaBAXaBQTaDAXaEATaEQbaEgLaEwfaGQfaGwjaKgfbAADbAAHbAALbAAPbAATbAQDbAQHbAgPbAwLbBALbBAPbBATbBQLbBQPbBQTbBQXbBwPbCgPbCwPbDgTbFgbbGwbbHgTbIATbIgbbLAfcAADcAAHcAALcAAPcAQDcAQHcAQLcAgDcAgHcAgLcAwHcBALcBAPcBATcBQTcCALcCwTcEALcEQLcEQPcFQbcFwfcHQfcJgncNw/cQw/dAADdAAHdAALdAATdAQHdAgHdAwLdCATdEQLdFgTdFgndLQvdOQzdPATdTQ3eAADeAAHeAALeBwXeDAbeEAXeEQLeGQPeMwjeOgbeOgzfAAHfBwPfNgzgQAfgQgXgTwjgWQngaQzhXBHhYQvhYgzhagziQQ7iVQriWQ/iWwriXRDiYBHifAnjXxLkYwjleQ/mghHnfw7ngAzojRHpiQrqiQvqkRHrlxDrmAvrmA7toQ3uoQrvsAnvuQvwtQjwtw7xsQXxsQbxsgfysAXyvgbzygv0yAr1ygT10AP2ygz2zgn20Qj30QT31gT33AP42QP42gH43AL53AD53AT53QD63QD63gBmgjbaAAAAGXRSTlMAEF9fYGBgv7+/v8DAwMDAwO/v7+/w8PDw18FOAwAAAi9JREFUOMtjYGBgYGIX0kQCWpLRDpoacJ6DA4wJZDloCnMyM4AAI4dFUA4CBNkaWVkEBcGEgsAAws6FcrgYgdq4qqtB0iEhELnM/imxQTnVWAHMaC4GBrYgsEiwrwtIbU5u88bF6Tk4tMEBC4MAxAm2s/3agKYF5Zb3VNkBhYLwauNhEAkKCga6T2FrF5CRB3R6pFewobxnOF5tggw5QTntjSUps/YvSElOTQoJqs4JKe5e1heFV5sKUFuQ2fwVazbv27F2/bKKUKC2IM+pq2cWEtSWnxuwZOeBQwf2rOsssgCHS6liAxG2WQR5z9h78MAq/6jg4CBQKIfZ5+YQ1JZTnWO3cNeW3RuackERlhNsEVkfhDckc6QZQEGdI7VpeeW8bS3BYCfmJJhPNI0hQlvQpLnG1nKTp+WBkktOqMGc7dNjidGWlgiMc8cydWC6s8kNbsuekBVMjLZaYAjmBBdEVOdY1HlnqLrVaucQoy2oGhRfoMDJ7Vja6xGaE0SMNiSBXKWVi3xCCCVlS3RtISaBrbmEtOWooGsDBk1YECHLMBxJHKCzNhWytGGEJG21WTAEEQxuLH5TZrDIIUObGkMQOdpUyNMmzZBDjt9kGCTI0SbKwEeOI7kZ2MjRxsLAIACpfCD1EGqFhEubAKhaFMjBCoJA5UsOkgk1IAAyVIARXJ+y8os76+roOMfHOzk5xQGBk6urk7OuU5yTro4uCOi568rKyurq6wOZYrysQC0Awj5Lp90AKqYAAAAASUVORK5CYII="
    },
    "199c": function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = a(n("0418"))
          , r = a(n("25d9"))
          , s = a(n("01e7"))
          , o = n("8e02")
          , u = {
            name: "App",
            components: {
                Header: i.default
            },
            data: function() {
                return {
                    invLoading: !1,
                    invpopAddress: "",
                    invAddress: "",
                    myInvAddress: ""
                }
            },
            created: function() {
                this.$message.config({
                    top: "56px",
                    duration: 4
                }),
                setTimeout((function() {
                    document.getElementById("spinnerBox") && document.body.removeChild(document.getElementById("spinnerBox"))
                }
                ), 100);
                var e = this;
                e.$message.loading({
                    content: e.$t("连接钱包"),
                    key: "连接"
                }),
                setTimeout((function() {
                    r.default.connectTron().then((function(t) {
                        e.$message.success({
                            content: e.$t(t),
                            key: "连接"
                        }),
                        e.invAddress = window.location.host + "/?inv=" + e.$store.state.wallet.address,
                        e.getInv(e.$store.state.wallet.address)
                    }
                    )).catch((function(t) {
                        e.$message.error({
                            content: e.$t(t),
                            key: "连接",
                            duration: 10
                        })
                    }
                    ))
                }
                ), 1e3)
            },
            mounted: function() {},
            methods: {
                getInv: function(e) {
                    var t = this;
                    s.default.getInv(e).then((function(e) {
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" == e ? (t.$store.state.isInv = !1,
                        tronWeb.isAddress(t.$route.query.inv) && t.$route.query.inv != t.$store.state.wallet.address && (t.invpopAddress = t.$route.query.inv),
                        t.$store.state.invModel = !0) : (t.myInvAddress = (0,
                        o.addressSub)(e, 8),
                        t.$store.state.isInv = !0)
                    }
                    ), (function(e) {}
                    ))
                },
                setInviter: function() {
                    var e = this;
                    tronWeb.isAddress(this.invpopAddress) && this.invpopAddress != this.$store.state.wallet.address ? (this.invLoading = !0,
                    s.default.inviter(this.invpopAddress).then((function(t) {
                        setTimeout((function() {
                            e.$store.state.invModel = !1,
                            e.getInv(e.$store.state.wallet.address),
                            e.invLoading = !1
                        }
                        ), 3e3)
                    }
                    ), (function(t) {
                        e.invLoading = !1
                    }
                    ))) : e.$message.warning(e.$t("账户不合法"))
                },
                doCopy: function() {
                    var e = this;
                    this.$copyText(this.invAddress).then((function(t) {
                        e.$message.success(e.$t("进行分享"))
                    }
                    ), (function(e) {}
                    ))
                }
            }
        };
        t.default = u
    },
    "1f76": function(e, t, n) {},
    "23be": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("199c")
          , i = n.n(a);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        t["default"] = i.a
    },
    "25d9": function(e, t, n) {
        "use strict";
        var a = n("dbce").default
          , i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.connectTron = u,
        t.allowance = c,
        t.approve = d,
        t.Instance = f,
        t.default = void 0,
        n("96cf"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        n("a9e3");
        var r = i(n("c973"))
          , s = i(n("4360"))
          , o = i(n("5442"));
        a(n("8e02"));
        function u() {
            var e = function() {
                var e = (0,
                r.default)(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if ("undefined" == typeof tronWeb) {
                                    e.next = 17;
                                    break
                                }
                                if (tronWeb.defaultAddress.hex) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("未登录"));
                                case 5:

                                    e.next = 9;
                                    break;
                                //if ("https://api.shasta.trongrid.io" != tronWeb.fullNode.host) {
                                //    e.next = 9;
                                //    break
                                //}
                                //    return e.abrupt("return", Promise.reject("切换节点"));

                            case 9:
                                return e.next = 11,
                                Promise.all([f("inviter", "TRftGzUq58FQZr5s1A1euB9quj2gfYgUFt")]);
                            case 11:
                                return t = e.sent,
                                window.invContract = t[0],
                                l(),
                                e.abrupt("return", Promise.resolve("连接成功"));
                            case 15:
                                e.next = 18;
                                break;
                            case 17:
                                return e.abrupt("return", Promise.reject("未检测到"));
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return e()
        }
        function l() {

            console.log('s.default.state.wallet.host---' + s.default.state.wallet.host);
            console.log('tronWeb.fullNode.host---' + tronWeb.fullNode.host);

            s.default.state.wallet.login = !1,
            s.default.state.wallet = {
                login: tronWeb && !!tronWeb.defaultAddress.hex,
                address: tronWeb.defaultAddress.base58,
                host: tronWeb.fullNode.host
                },
                tronWeb.on("addressChanged", (function (e) {

                   

                    (e.base58 && e.base58 !== s.default.state.wallet.address || s.default.state.wallet.host != tronWeb.fullNode.host) && location.reload()
                }
                ))
        }
        function c(e, t) {
            var n = function() {
                var n = (0,
                r.default)(regeneratorRuntime.mark((function n() {
                    var a, i, o, u, l;
                    return regeneratorRuntime.wrap((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return a = t,
                                i = "allowance(address,address)",
                                o = [{
                                    type: "address",
                                    value: s.default.state.wallet.address
                                }, {
                                    type: "address",
                                    value: e
                                }],
                                u = {},
                                l = function() {
                                    var e = (0,
                                    r.default)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    tronWeb.transactionBuilder.triggerConstantContract(a, i, u, o);
                                                case 2:
                                                    return t = e.sent,
                                                    e.abrupt("return", parseInt(t.constant_result[0], 16));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                n.abrupt("return", l());
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function() {
                    return n.apply(this, arguments)
                }
            }();
            return n()
        }
        function d(e, t) {
            return p.apply(this, arguments)
        }
        function p() {
            return p = (0,
            r.default)(regeneratorRuntime.mark((function e(t, n) {
                var a, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            f("token", t);
                        case 2:
                            return a = e.sent,
                            i = function() {
                                var e = (0,
                                r.default)(regeneratorRuntime.mark((function e() {
                                    var t;
                                    return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                a.approve(n, tronWeb.toHex(Math.pow(2, 255))).send({
                                                    shouldPollResponse: !1
                                                });
                                            case 2:
                                                return t = e.sent,
                                                e.abrupt("return", t);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            e.abrupt("return", i());
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            p.apply(this, arguments)
        }
        function f(e, t) {
            return y.apply(this, arguments)
        }
        function y() {
            return y = (0,
            r.default)(regeneratorRuntime.mark((function e(t, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = null,
                            !t) {
                                e.next = 7;
                                break
                            }
                            return e.next = 4,
                            tronWeb.contract(o.default[t], n);
                        case 4:
                            a = e.sent,
                            e.next = 10;
                            break;
                        case 7:
                            return e.next = 9,
                            tronWeb.contract().at(n);
                        case 9:
                            a = e.sent;
                        case 10:
                            return e.abrupt("return", a);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            y.apply(this, arguments)
        }
        var m = {
            connectTron: u,
            allowance: c,
            approve: d,
            Instance: f
        };
        t.default = m
    },
    "27f3": function(e, t, n) {
        e.exports = n.p + "static/img/lp.a1fb3261.png"
    },
    "31b2": function(e, t, n) {
        "use strict";
        n("6d42")
    },
    "31eb": function(e) {
        e.exports = JSON.parse('[{"open":true,"harvestToken":"TEC","depositToken":"TEC/TRX-LP","img":"lp","contractAbi":"abi1","address":"TKxWAbuQVPLq5CyhfvRUcWseDnfYrrgdm2","tokenAddress":"TWxKTghYBHxXMLTfuaPbKpkpJKVnMor4q7","approve":false,"maxLimit":0,"TotalPledge":"0.000000","minePledge":"0.000000","Pending":"0.000000","precision":6,"harvestPrecision":18,"startTime":1631837880000,"getTime":0,"leftTime":0,"leftTimetime":null},{"open":true,"harvestToken":"TEC","depositToken":"TEC","img":"logo","contractAbi":"abi1","address":"TWdNNadHJWJLjZG4TcTwJVtauBiuTeZBKJ","tokenAddress":"TWhE5FtP7KEUKyjZEvCNi1VNtkSwJUVoqK","approve":false,"maxLimit":0,"TotalPledge":"0.000000","minePledge":"0.000000","Pending":"0.000000","precision":18,"harvestPrecision":18,"startTime":1631837880000,"getTime":0,"leftTime":0,"leftTimetime":null}]')
    },
    "31fe": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("fecc")
          , i = n.n(a);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        t["default"] = i.a
    },
    3726: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "about"
            }, [n("div", {
                staticClass: "con"
            }, [e._m(0), n("div", {
                staticClass: "text2"
            }, [e._v("TEC 旅游生态链")]), n("div", {
                staticClass: "info"
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t("关于介绍")) + " ")])])])])
        }
          , i = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "title"
            }, [a("img", {
                attrs: {
                    src: n("7fa6"),
                    alt: ""
                }
            })])
        }
        ]
    },
    "3dfd": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("acff")
          , i = n("23be");
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(r);
        n("495c");
        var s = n("2877")
          , o = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "7236ec9c", null);
        t["default"] = o.exports
    },
    "3fab": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = {
            "未登录": "Not logged in TronLink",
            "未检测到": "TRONLink not detected",
            "连接钱包": "Connect wallet",
            "连接成功": "The connection is successful",
            "连接失败": "The connection fails",
            "切换节点": "Please switch the wallet official node",
            "成功": "Success",
            "失败": "Fails",
            "操作成功": "Operation is successful",
            "待区块确认": "Waiting for block confirmation",
            "未变化": "If the value has not changed for a long time, please refresh and retry, or go to the block browser to check the block confirmation status",
            "操作失败": "Operation failed, please try again",
            "合约执行拒绝": "Contract execution rejection",
            "批准": "Approve",
            "授权": "Authorization",
            "收获": "Harvest",
            "质押": "Pledge",
            "产出": "output",
            "提交": "Submit",
            "取消": "Cancel",
            "确认": "Confirm",
            "输入数量": "Enter the number of",
            "买币不如挖矿": "TEC is a complete set of ecological applications that empower the real industrial economy",
            "首页": "Home",
            "关于": "About",
            "总锁仓": "Total lock",
            "我的锁仓": "My lock",
            "待分配": "Pending",
            "已锁定": "Has been locked",
            "锁定": "Lock",
            "最多可锁定": "Maximum",
            "待收获": "To harvest",
            "可解锁": "Unlocking ",
            "收获并退出": "Exit",
            "退出": "Exit",
            "未到解押时间": "The unlock time has not arrived",
            "点击": "Click on the",
            "邀请": "Invite",
            "邀请1": "You can invite your friends by copying the invitation link below.",
            "邀请2": "When your friend links through your invitation and mines successfully, you can get a certain percentage of the token.",
            "邀请3": "The superior inviter will get an additional level 1 recommendation award (6% mining award).",
            "邀请4": "You must set up referees before you can pledge to mine.",
            "邀请5": "You have set the inviter's address.",
            "邀请6": "Go to Settings",
            "抢购": "Exchange",
            "剩余": "Remaining",
            "立即兑换": "Exchange",
            "兑换数量": "Convert into",
            "复制链接": "Copy the link",
            "进行分享": "Share",
            "选择": "Select",
            "矿池": "Pool",
            "我的推荐人": "My references",
            "填写邀请": "Fill in the invitation address to bring more good luck!",
            "请输入邀请地址": "Please enter the invitation address",
            "账户不合法": "The inviter account is illegal",
            "钱包余额不足": "Insufficient balance in wallet",
            "去justswap购买": "Go to JustSwap and buy the ",
            "关于介绍": "The tourism ecological chain is a global tourism value transmission ecology based on the function of the blockchain, which connects the entire ecological value application through a digital token based on a value consensus."
        };
        t.default = a
    },
    "403e": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4672")
          , i = n.n(a);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        t["default"] = i.a
    },
    4360: function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = a(n("2b0e"))
          , r = a(n("2f62"))
          , s = a(n("a78e"))
          , o = n("9923");
        i.default.use(r.default);
        var u = new r.default.Store({
            state: {
                wallet: {
                    login: !1,
                    address: null,
                    host: null
                },
                invModel: !1,
                isInv: !1,
                language: (0,
                o.getLanguage)()
            },
            mutations: {
                SET_LANGUAGE: function(e, t) {
                    e.language = t,
                    s.default.set("bplLanguage", t)
                }
            },
            actions: {
                setLanguage: function(e, t) {
                    var n = e.commit;
                    n("SET_LANGUAGE", t)
                }
            },
            modules: {}
        });
        t.default = u
    },
    4672: function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("96cf");
        var i = a(n("c973"));
        n("ac1f"),
        n("5319"),
        n("159b"),
        n("a9e3"),
        n("d3b7"),
        n("25f0"),
        n("3ca3"),
        n("ddb0");
        var r = a(n("25d9"))
          , s = a(n("01e7"))
          , o = (n("01e7"),
        {
            name: "mining",
            data: function() {
                return {
                    operating: !1,
                    exitLoading: !1,
                    rewardLoading: !1,
                    lockedLoading: !1,
                    approveLoading: !1,
                    lockedNum: "",
                    pools: n("31eb"),
                    temp: {}
                }
            },
            mounted: function() {
                this.timeDown(),
                this.$store.state.wallet.login && this.Initialize()
            },
            methods: {
                clearNoNum: function() {
                    this.lockedNum - 0 > this.temp.balance - 0 ? this.lockedNum = this.temp.balance - 0 : (this.lockedNum = this.lockedNum.replace(/[^\d.]/g, ""),
                    this.lockedNum = this.lockedNum.replace(/\.{2,}/g, "."),
                    this.lockedNum = this.lockedNum.replace(/^\./g, ""),
                    this.lockedNum = this.lockedNum.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."),
                    this.lockedNum = this.lockedNum.replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/, "$1$2.$3"))
                },
                timeDown: function() {
                    var e = this;
                    this.pools.forEach((function(t, n) {
                        var a = t.startTime - Number(new Date);
                        a > 0 && (t.leftTime = a,
                        e.$set(e.pools[n], "leftTimetime", e.countdown(t)),
                        clearInterval(t.$timer),
                        t.$timer = setInterval((function() {
                            t.leftTime -= 1e3,
                            e.$set(e.pools[n], "leftTimetime", e.countdown(t))
                        }
                        ), 1e3))
                    }
                    ))
                },
                countdown: function(e) {
                    var t = e.leftTime;
                    if (t >= 0) {
                        var n = Math.floor(t / 1e3 / 60 / 60 / 24)
                          , a = Math.floor(t / 1e3 / 60 / 60 % 24)
                          , i = Math.floor(t / 1e3 / 60 % 60)
                          , r = Math.floor(t / 1e3 % 60);
                        return this.formatNumber(n) + ":" + this.formatNumber(a) + ":" + this.formatNumber(i) + ":" + this.formatNumber(r)
                    }
                    clearInterval(e.$timer),
                    this.timeDown()
                },
                formatNumber: function(e) {
                    return e = e.toString(),
                    e[1] ? e : "0" + e
                },
                Initialize: function() {
                    var e = this;
                    return (0,
                    i.default)(regeneratorRuntime.mark((function t() {
                        var n, a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    for (n = [],
                                    a = 0; a < e.pools.length; a++)
                                        n.push(r.default.Instance(e.pools[a].contractAbi, e.pools[a].address));
                                    return t.next = 5,
                                    Promise.all(n);
                                case 5:
                                    i = t.sent,
                                    i.forEach((function(t, n) {
                                        e.pools[n].pool = t,
                                        e.getBalance(n, e, e.pools[n].tokenAddress, e.pools[n].precision),
                                        e.getAllowance(n, e, e.pools[n].address, e.pools[n].tokenAddress)
                                    }
                                    )),
                                    e.getPoolInfo();
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                invCom: function() {
                    this.$route.query.inv && tronWeb.isAddress(this.$route.query.inv)
                },
                pledge: function() {
                    var e = this;
                    e.lockedNum - 0 <= 0 ? e.$message.warning(e.$t("输入数量")) : e.lockedNum - 0 > e.temp.balance - 0 ? e.$message.warning(e.$t("钱包余额不足")) : (e.lockedLoading = !0,
                    s.default.pledge(e.lockedNum, e.temp.pool, e.temp.precision).then((function(t) {
                        setTimeout((function() {
                            e.getPoolInfoOne(),
                            e.getBalance(e.temp.index, e, e.temp.tokenAddress, e.temp.precision),
                            e.$notification["info"]({
                                message: e.$t("操作成功") + "，" + e.$t("待区块确认"),
                                description: e.$t("未变化")
                            }),
                            e.operating = !1,
                            e.lockedLoading = !1
                        }
                        ), 5e3)
                    }
                    ), (function(t) {
                        e.lockedLoading = !1
                    }
                    )))
                },
                approve: function() {
                    var e = this;
                    e.approveLoading = !0,
                    r.default.approve(this.temp.tokenAddress, this.temp.address).then((function(t) {
                        setTimeout((function() {
                            e.approveLoading = !1,
                            e.$message.success(e.$t("操作成功")),
                            e.getAllowance(e.temp.index, e, e.temp.address, e.temp.tokenAddress)
                        }
                        ), 5e3)
                    }
                    ), (function(t) {
                        e.approveLoading = !1
                    }
                    ))
                },
                reward: function() {
                    if (this.temp.getTime > Number(new Date)) {

                        this.$message.warning(this.$t("未到解押时间"));
                        console.log(this.temp.getTime);
                        console.log(Number(new Date));
                    }
                    else {
                        var e = this;
                        e.rewardLoading = !0,
                        s.default.reward(e.temp.pool).then((function(t) {
                            setTimeout((function() {
                                e.getPoolInfoOne(),
                                e.$notification["info"]({
                                    message: e.$t("操作成功") + "，" + e.$t("待区块确认"),
                                    description: e.$t("未变化")
                                }),
                                e.operating = !1,
                                e.rewardLoading = !1
                            }
                            ), 5e3)
                        }
                        ), (function(t) {
                            e.rewardLoading = !1
                        }
                        ))
                    }
                },
                unlock: function() {
                    var e = this;
                    e.exitLoading = !0,
                    s.default.withdraw(e.temp.pool, e.temp.minePledge, e.temp.precision).then((function(t) {
                        setTimeout((function() {
                            e.getPoolInfoOne(),
                            e.getBalance(e.temp.index, e, e.temp.tokenAddress, e.temp.precision),
                            e.$notification["info"]({
                                message: e.$t("操作成功") + "，" + e.$t("待区块确认"),
                                description: e.$t("未变化")
                            }),
                            e.operating = !1,
                            e.exitLoading = !1
                        }
                        ), 5e3)
                    }
                    ), (function(t) {
                        e.exitLoading = !1
                    }
                    ))
                },
                getBalance: function(e, t, n, a) {
                    (function(e) {
                        s.default.getBalance(n, a).then((function(n) {
                            t.pools[e].balance = n
                        }
                        ), (function(e) {}
                        ))
                    }
                    )(e)
                },
                getAllowance: function(e, t, n, a) {
                    (function(e) {
                        r.default.allowance(n, a).then((function(n) {
                            n >= 1e7 && (t.pools[e].approve = n)
                        }
                        ), (function(e) {}
                        ))
                    }
                    )(e)
                },
                getPoolInfoOne: function() {
                    var e = this;
                    e.pools.forEach((function(t, n) {
                        n == e.temp.index && function(n) {
                            e.getPoolAllLocked(n, t.pool, t.precision),
                            e.getPoolMyLocked(n, t.pool, t.precision),
                            e.getPoolMyEarned(n, t.pool, t.harvestPrecision),
                            e.getDeaTime(n, t.pool)
                        }(n)
                    }
                    ))
                },
                getPoolInfo: function() {
                    var e = this
                      , t = 0;
                    e.pools.forEach((function(n, a) {
                        (function(i) {
                            t += 300,
                            setTimeout((function() {
                                e.getPoolAllLocked(a, n.pool, n.precision),
                                e.getPoolMyLocked(a, n.pool, n.precision),
                                e.getPoolMyEarned(a, n.pool, n.harvestPrecision),
                                e.getDeaTime(i, n.pool)
                            }
                            ), t)
                        }
                        )(a)
                    }
                    )),
                    setTimeout((function() {
                        e.getPoolInfo()
                    }
                    ), 3e4)
                },
                getPoolAllLocked: function(e, t, n) {
                    var a = this;
                    s.default.getPoolAllLocked(t, n).then((function(t) {
                        a.pools[e].TotalPledge = t
                    }
                    ), (function(e) {}
                    ))
                },
                getPoolMyLocked: function(e, t, n) {
                    var a = this;
                    s.default.getPoolMyLocked(t, n).then((function(t) {
                        a.pools[e].minePledge = t
                    }
                    ), (function(e) {}
                    ))
                },
                getPoolMyEarned: function(e, t, n) {
                    var a = this;
                    s.default.getPoolMyEarned(t, n).then((function(t) {
                        a.pools[e].Pending = t
                    }
                    ), (function(e) {}
                    ))
                },
                getDeaTime: function(e, t) {
                    var n = this;
                    s.default.getDeaTime(t).then((function(t) {
                        n.pools[e].getTime = t
                    }
                    ), (function(e) {}
                    ))
                },
                selectOperating: function(e, t) {
                    this.exitLoading || this.rewardLoading || this.lockedLoading || this.approveLoading || (this.temp = e,
                    this.temp.index = t,
                    this.lockedNum = ""),
                    this.operating = !0
                },
                reqimg: function(e) {
                    return n("de3c")("./" + e + ".png")
                }
            },
            watch: {
                "$store.state.wallet.login": function(e) {
                    e && this.Initialize()
                }
            }
        });
        t.default = o
    },
    4680: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("b58b")
          , i = n("403e");
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(r);
        n("a789");
        var s = n("2877")
          , o = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "0ff669f7", null);
        t["default"] = o.exports
    },
    "48e3": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "header",
                style: e.style
            }, [a("div", {
                staticClass: "headerCon"
            }, [a("div", {
                staticClass: "h_left"
            }, [a("div", {
                staticClass: "logo",
                on: {
                    click: function(t) {
                        return e.$router.push({
                            path: "/"
                        })
                    }
                }
            }, [a("img", {
                attrs: {
                    src: n("a1d8"),
                    alt: ""
                }
            })]), a("ul", {
                staticClass: "menu"
            }, [a("li", {
                class: "/mining" == e.$route.path ? "active" : "",
                on: {
                    click: function(t) {
                        return e.$router.push({
                            path: "/mining"
                        })
                    }
                }
            }, [e._v(e._s(e.$t("矿池")) + " ")]), a("li", {
                class: "/about" == e.$route.path ? "active" : "",
                on: {
                    click: function(t) {
                        return e.$router.push({
                            path: "/about"
                        })
                    }
                }
            }, [e._v(e._s(e.$t("关于")) + " ")]), a("li", {
                staticClass: "inv",
                on: {
                    click: function(t) {
                        e.$store.state.invModel = !0
                    }
                }
            }, [e._v(e._s(e.$t("邀请")))])])]), a("div", {
                staticClass: "h_right"
            }, [a("a-select", {
                attrs: {
                    "default-value": e.$store.state.language
                },
                on: {
                    change: e.handleChange
                }
            }, e._l(e.options, (function(e, t) {
                return a("a-select-option", {
                    key: t,
                    attrs: {
                        value: e.key
                    }
                }, [a("img", {
                    attrs: {
                        src: e.value,
                        alt: ""
                    }
                })])
            }
            )), 1)], 1)])])
        }
          , i = []
    },
    "495c": function(e, t, n) {
        "use strict";
        n("a489")
    },
    5442: function(e) {
        e.exports = JSON.parse('{"token":[{"outputs":[{"type":"string"}],"constant":true,"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"getBalance","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalSupply","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint8"}],"constant":true,"name":"decimals","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"name":"balance","type":"uint256"}],"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"constant":true,"name":"symbol","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","stateMutability":"View","type":"Function"},{"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"Event"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"Transfer","type":"Event"}],"inviter":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getInviter","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"inviter","type":"address"}],"name":"setInviter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_inviter","type":"address"}],"name":"updateCreator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userMap","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"abi1":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_lp","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"DEA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addDay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_type","type":"bool"}],"name":"adminConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current3Day","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentHours","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentWeek","outputs":[{"internalType":"uint256","name":"week","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deaTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"_ea","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"extraTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getDeaTime","outputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"giveTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"inviteContract","outputs":[{"internalType":"contract InviteContract","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastWeek","outputs":[{"internalType":"uint256","name":"week","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"level","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract InviteContract","name":"_inviteContract","type":"address"}],"name":"setInviteContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_inviterRate","type":"uint256"}],"name":"updateInviterRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}')
    },
    5679: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = {
            name: "About"
        };
        t.default = a
    },
    "56d7": function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        n("8b35");
        var i = a(n("218c"));
        n("c346");
        var r = a(n("e63d"));
        n("95d1");
        var s = a(n("c4c6"));
        n("1325");
        var o = a(n("57df"));
        n("cf0b");
        var u = a(n("8f58"));
        n("cd09");
        var l = a(n("7531"));
        n("f27b");
        var c = a(n("e3db"));
        n("96ef");
        var d = a(n("50f6"));
        n("0602");
        var p = a(n("f0d4"));
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var f = a(n("2b0e"))
          , y = a(n("3dfd"))
          , m = a(n("a18c"))
          , v = a(n("8c4f"))
          , g = a(n("4360"))
          , b = a(n("9923"))
          , h = a(n("4eb5"))
          , A = a(n("7f6c"))
          , w = a(n("0418"));
        n("f27b3"),
        f.default.use(s.default).use(o.default).use(u.default).use(l.default).use(c.default).use(d.default).use(p.default),
        f.default.prototype.$message = r.default,
        f.default.prototype.$notification = i.default,
        f.default.config.productionTip = !1,
        f.default.use(A.default),
        f.default.use(h.default),
        f.default.component("Header", w.default);
        var T = v.default.prototype.push;
        v.default.prototype.push = function(e) {
            return T.call(this, e).catch((function(e) {
                return e
            }
            ))
        }
        ,
        new f.default({
            router: m.default,
            store: g.default,
            i18n: b.default,
            render: function(e) {
                return e(y.default)
            }
        }).$mount("#app")
    },
    6109: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5679")
          , i = n.n(a);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        t["default"] = i.a
    },
    "62b1": function(e, t, n) {
        "use strict";
        n("8602")
    },
    "6d42": function(e, t, n) {},
    "7f6c": function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = a(n("2b0e"))
          , r = function() {
            i.default.directive("Int", {
                inserted: function(e) {
                    e.addEventListener("keypress", (function(e) {
                        e = e || window.event;
                        var t = "number" == typeof e.charCode ? e.charCode : e.keyCode
                          , n = /\d/;
                        !n.test(String.fromCharCode(t)) && t > 9 && !e.ctrlKey && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    }
                    ))
                }
            })
        };
        t.default = r
    },
    "7fa6": function(e, t, n) {
        e.exports = n.p + "static/img/HME1.076558fb.png"
    },
    8602: function(e, t, n) {},
    "8e02": function(e, t, n) {
        "use strict";
        n("498a");
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.addressSub = s,
        t.trim = o,
        t.countdown = u,
        t.default = void 0,
        n("d3b7"),
        n("25f0");
        var i = a(n("2b0e"))
          , r = new i.default;
        function s(e, t) {
            return e.substring(0, t) + "..." + e.substring(e.length - t, e.length)
        }
        function o(e, t, n) {
            if (6 == t ? e = tronWeb.fromSun(e) : 18 == t ? (e = tronWeb.fromSun(e),
            e = tronWeb.fromSun(e),
            e = tronWeb.fromSun(e)) : e /= Math.pow(10, t),
            void 0 == n && (n = 6),
            n > 0) {
                var a = e.toString()
                  , i = e;
                if (a.indexOf(".") > 0 && a.length - a.indexOf(".") > n + 1)
                    i = a.substr(0, a.indexOf(".") + (n + 1));
                else {
                    var r = null;
                    -1 === a.indexOf(".") ? (r = n,
                    i += ".") : r = n + 1 - (a.length - a.indexOf("."));
                    for (var s = 0; s < r; s++)
                        i += "0"
                }
                return i
            }
            return e
        }
        function u(e) {
            if (e >= 0) {
                Math.floor(e / 1e3 / 60 / 60 / 24);
                var t = Math.floor(e / 1e3 / 60 / 60 % 24)
                  , n = Math.floor(e / 1e3 / 60 % 60)
                  , a = Math.floor(e / 1e3 % 60);
                return l(t) + ":" + l(n) + ":" + l(a)
            }
            return !1
        }
        function l(e) {
            return e = e.toString(),
            e[1] ? e : "0" + e
        }
        t.default = r
    },
    "90b5": function(e, t) {
        e.exports = "/static/img/tec-main.png"
    },
    9923: function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getLanguage = d,
        t.default = void 0,
        n("b64b");
        var i = a(n("ded3"))
          , r = a(n("2b0e"))
          , s = a(n("a925"))
          , o = a(n("a78e"))
          , u = a(n("3fab"))
          , l = a(n("9df6"));
        r.default.use(s.default);
        var c = {
            en: (0,
            i.default)({}, u.default),
            zh: (0,
            i.default)({}, l.default)
        };
        function d() {
            var e = o.default.get("bplLanguage");
            if (e)
                return e;
            for (var t = (navigator.language || navigator.browserLanguage).toLowerCase(), n = Object.keys(c), a = 0, i = n; a < i.length; a++) {
                var r = i[a];
                if (t.indexOf(r) > -1)
                    return r
            }
            return "zh"
        }
        var p = new s.default({
            locale: d(),
            messages: c,
            silentTranslationWarn: !0
        })
          , f = p;
        t.default = f
    },
    "9d33": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAA2CAYAAAC/fnXUAAAABHNCSVQICAgIfAhkiAAABwlJREFUeF7tnG1QVFUYx/9nl8VFNgTkPR1JNAwLVF60REALqpmccazG7ENoYEkzRjkKpCNgjQ4oNk5+QCVH8QuYMtRUo8KYoljyJi0WDiEMTsprmMoK8nqbc3HXhd1ld+89e6GZPV9g997znLO/+7vn3ufcs0tgpJT/eXuhnJPHERkXznGI6H7Q65OaW/pv0917Q8b2F/Pep+8uc1kb9cJ0GkPW0UXIsSMKc/G4TZsHRzw9OLpfUVl976EzFQ/N1bF2e8Cz7g7ZSbFuM2dMbyc366tlxcVVZAjnw08d/mN8LKL/BsdxSgCZALYBkOtv0/QNIvXbcuT+pAbHd59N+frjKHz+9hI+WN+tZtSvTzAbeGHhcSgD/Pn9DpypwbajV8zWsXQHQoCkt0KQnRgJp6F+tOblo7PgDF+dA4YJx+0DNBlhNTWD2pg6iNcXrwxxWbX8lH9GaqD8GZXJNi+p72BDTglud7A5+FMJ4hxvF5zYFoeYkFnoqfkdLbuzMdDWPoaF3NkZ/pmpta4xKxIIIbV0Iw9RHRznPKgYUIMgQK5SwT8jFa4xkSZBsrRyKkCcyD59CK5Ry+GfmYYnkjUBCCKEDPAQq0NjDoIgeUyF6Egepq2tnGyIltuXZkysbEJIGim91rhsqYPmaktmlmygvWOsuhJYOVkQBdo3/uwcOVd5K5IcKLyct3XdisThHg1aj55AZ2GRwWnsaqGVG3NK0GLlWDkZEP29XXDcorHPqH1j+OwvvJpLnGJ2FUe/snjNsa2x8JupGh1QM7MglZVSQmRkHw+xtVuDhK9L8cuv6u8pxMo+hXu4q2oaDiZFIz42CCystPQKLhVEkWPfGPvyS+vxWW4Z7mv64Tj0oI44rUy/2efgtkC71xvhcyCllbaGaAv7zlXd1kGdNvSgxQAi3SqllbaEaCv79LU0CVFKK20BkaV9Le0PkXToAvTtswqiFFayhsjKPpra0hQ3Ja8cjx7rMjyDOxezJurXoGNl7pZX4e/jwvQKzgoia/vohbGs7o7ZlNsqiDSas1KBfZsi+QR9RCP+vpJ2NHnNItETEId+UFuY805832epfVafzsYORXTwLL7TLKysbGjHqkWz+WaEzOJcqP0bSxf4GMy4TJDzGrWLjn2W2scEImsrtZ0SApHWnXjGhb19zCBqA7GyUqiJ3T+eQ8uX2Yap6tgZF6b2MYfI0kohJtJ8vy0vX/e5Ruf7bGufAcTSqsae18LmmZ6FNXt9YreDEIjsWhcW6WxFYy+xQxQGT1vLDlEcP742D7F8Z1a/R1ebI4N4okOM9D1G780Gs3GmBwVCpqTP1Ca/dHj4DZLfNiYPKm6oHSa/O//PHvS/FDxshyjy2NkhigRIq9sh2iEyIMAghN1EO0QGBBiEsJvICqL9ZlscSf5m2547i4Noz53F8XuaO9tNFEeSN3H8CgihIT9ZPbq6VOVkerVwZ0ERv2hqWKPRNeO7KR5+H23gX7OYT7RkCUwPUfDLQOhyELHF6qd9xhr0dXfml528GTG6/NdYGWht56fw6bOQ8SVg/1e6dX8sIGrjW7Iw62xlC78oqe3eI8EsRUOki5/oIii67MRUMWYf3ddpfgCey0iDU+A8XVWWEGlQKawUDFGsfdpTeHBoBNV/deDlIF/Bp3NVQztCn/eGjD69N1FsaaUgiKzsUzd14YP957EhNkj0w/vvyhpxMiUOgbPdTYK0lZVWQRRjH30C5/X+O/wFhNq3t6ASewoq+f9ZLSNROjogbV0YdqyPgMJBJpmVFkMUY59qSQg/9jn6+UBrX13zP7oPyQqiNmDwXA+c3P46QgI8JbHSLESx9lHzqIHj7dP/dKwh0tjUxJ3rIySxckKItrTP1hCltNIoRCnskwqiFFZqIV7pc3Djvz4llX1SQrS1lY6D96uIMmZXnpv37EShWQe98loy9pka5W0xJppqyxZjZXfn3ZPkw72ndxzYsnqPkKxjzJW3uQvx+0qgbu6yKoWSEqK2YyFzPZGfEgf611Sx9L4y+Zuf00lJbdP82EVzbwAwyN1M5bxi7ZuM03k8LCZWpqcOVCh9F/K5Esdx9DvOGfoNmcp5zd33WaUhwOxm29p2mYyVHL4Iq7mUpYVILVQDCJTCvqlgon4fhFjJgasNq/YKJzg9rMvaOY6L6Swoujh+vo82xtq+qQZRgJXDHYWnw8OrLz/90rg2SHVoqAJQ7eYISSGAXH/sezwwhPT8azhYfJ3PQFiVybiwTNR3M1YOA8gBsIsQYvjzBfqBq9YlvEicZ8SNxMeHcl4eYQ8f9XunHrnYWtfc1c8KnjbO9veWeqyNDHTlX3d2yLgjh01PTj6pRDYn9cPTiz+SRVca7uecqniajDPqYMQCP6e9iVG+TkoF/f2CKo7jqqGQlyyb72swHf4fWgSIIg6+MckAAAAASUVORK5CYII="
    },
    "9df6": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = {
            "未登录": "未登录 TronLink",
            "未检测到": "未检测到 TRONLink",
            "连接钱包": "连接钱包",
            "连接成功": "连接成功",
            "连接失败": "连接失败",
            "切换节点": "请切换钱包正式节点",
            "成功": "成功",
            "失败": "失败",
            "操作成功": "操作成功",
            "待区块确认": "待区块确认",
            "未变化": "若长时间数值未变化，请刷新重试，或到区块浏览器中查看区块确认状态",
            "操作失败": "操作失败",
            "合约执行拒绝": "合约执行拒绝",
            "批准": "批准",
            "授权": "授权",
            "收获": "收获",
            "质押": "质押",
            "产出": "产出",
            "提交": "提交",
            "取消": "取消",
            "确认": "确认",
            "输入数量": "输入数量",
            "买币不如挖矿": "TEC 是一套完整的生态应用，赋能于实体产业经济",
            "首页": "首页",
            "关于": "关于",
            "总锁仓": "总锁仓",
            "我的锁仓": "我的锁仓",
            "待分配": "待分配",
            "已锁定": "已锁定",
            "锁定": "锁定",
            "最多可锁定": "最多可锁定",
            "待收获": "待收获",
            "可解锁": "可解锁",
            "收获并退出": "收获并退出",
            "退出": "退出",
            "未到解押时间": "未到解锁时间",
            "点击": "点击",
            "邀请": "邀请",
            "邀请1": "邀您可以通过复制下方邀请链接邀请好友请；",
            "邀请2": "当您的好友通过您的邀请链接并挖矿成功，您可以获得一定比例的代币。",
            "邀请3": "上级邀请人额外获得一级推荐奖励(6%挖矿奖励)",
            "邀请4": "必须设置推荐人后才能质押挖矿",
            "邀请5": "您已设置邀请人地址",
            "邀请6": "点击去设置",
            "抢购": "抢购",
            "剩余": "剩余",
            "立即兑换": "立即兑换",
            "兑换数量": "兑换数量",
            "复制链接": "复制链接",
            "进行分享": "进行分享",
            "选择": "选择",
            "矿池": "矿池",
            "我的推荐人": "我的推荐人",
            "填写邀请": "填写邀请地址，会带来更多好运！",
            "请输入邀请地址": "请输入邀请地址",
            "账户不合法": "邀请人账户不合法",
            "钱包余额不足": "钱包余额不足",
            "去justswap购买": "去justswap购买",
            "关于介绍": "Trip Ecology Chain(TEC)是基于区块链功能所打造的全球旅游价值传输生态，通过以价值共识为基石的数字通证来连接整个生态价值应用"
        };
        t.default = a
    },
    a18c: function(e, t, n) {
        "use strict";
        var a = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = a(n("2b0e"))
          , r = a(n("8c4f"))
          , s = a(n("d504"))
          , o = a(n("f820"))
          , u = a(n("4680"));
        i.default.use(r.default);
        var l = [{
            path: "/",
            name: "Index",
            component: s.default
        }, {
            path: "/about",
            name: "About",
            component: o.default
        }, {
            path: "/mining",
            name: "Mining",
            component: u.default
        }]
          , c = new r.default({
            mode: "history",
            base: "",
            routes: l
        })
          , d = c;
        t.default = d
    },
    a1d8: function(e, t) {
        e.exports = "/static/img/tec-logo.png"
    },
    a3df: function(e, t, n) {
        "use strict";
        n("0b28")
    },
    a489: function(e, t, n) {},
    a789: function(e, t, n) {
        "use strict";
        n("1f76")
    },
    acff: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("Header"), n("keep-alive", [n("router-view")], 1), n("a-modal", {
                staticClass: "inv",
                attrs: {
                    centered: "",
                    footer: null
                },
                model: {
                    value: e.$store.state.invModel,
                    callback: function(t) {
                        e.$set(e.$store.state, "invModel", t)
                    },
                    expression: "$store.state.invModel"
                }
            }, [n("a-tabs", {
                attrs: {
                    "default-active-key": "1"
                }
            }, [n("a-tab-pane", {
                key: "1",
                attrs: {
                    tab: e.$t("我的推荐人")
                }
            }, [e.$store.state.isInv ? n("div", [n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("邀请3")))]), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("邀请4")))]), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("邀请5")))]), n("div", {
                staticClass: "hint myInv"
            }, [e._v(e._s(e.$t("我的推荐人")) + ": "), n("span", [e._v(e._s(e.myInvAddress))])]), n("div", {
                staticClass: "btnBox"
            }, [n("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        e.$store.state.invModel = !1
                    }
                }
            }, [e._v(e._s(e.$t("关闭")))])], 1)]) : n("div", [n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("填写邀请")))]), n("a-input", {
                attrs: {
                    placeholder: e.$t("请输入邀请地址")
                },
                model: {
                    value: e.invpopAddress,
                    callback: function(t) {
                        e.invpopAddress = t
                    },
                    expression: "invpopAddress"
                }
            }), n("div", {
                staticClass: "btnBox"
            }, [n("a-button", {
                on: {
                    click: function(t) {
                        e.$store.state.invModel = !1
                    }
                }
            }, [e._v(e._s(e.$t("取消")))]), n("a-button", {
                attrs: {
                    type: "primary",
                    loading: e.invLoading
                },
                on: {
                    click: e.setInviter
                }
            }, [e._v(e._s(e.$t("确认")))])], 1)], 1)]), n("a-tab-pane", {
                key: "2",
                attrs: {
                    tab: e.$t("邀请")
                }
            }, [n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("邀请1")))]), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("邀请2")))]), n("div", {
                staticClass: "address"
            }, [e._v(e._s(e.invAddress))]), n("div", {
                staticClass: "btn"
            }, [e._v(e._s(e.$t("点击"))), n("span", {
                staticClass: "doCopy",
                on: {
                    click: e.doCopy
                }
            }, [e._v(e._s(e.$t("复制链接")))]), e._v(e._s(e.$t("进行分享")))])])], 1)], 1)], 1)
        }
          , i = []
    },
    ad21: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e504")
          , i = n.n(a);
        for (var r in a)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(r);
        t["default"] = i.a
    },
    b58b: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "mining"
            }, [n("div", {
                staticClass: "banner"
            }, [n("div", {
                staticClass: "title"
            }, [n("div", {
                staticClass: "text1"
            }, [e._v(e._s(e.$t("矿池")))]), n("div", {
                staticClass: "text2"
            }, [e._v(e._s(e.$t("买币不如挖矿")))])])]), n("ul", {
                staticClass: "poolList",
                class: e.pools.length <= 3 ? "small" : ""
            }, e._l(e.pools, (function(t, a) {
                return n("li", {
                    key: a
                }, [t.leftTime > 0 ? n("div", {
                    staticClass: "timeout"
                }, [e._v(e._s(t.leftTimetime))]) : e._e(), n("div", {
                    staticClass: "curr"
                }, [n("div", {
                    staticClass: "left"
                }, [n("img", {
                    attrs: {
                        src: e.reqimg(t.img),
                        alt: ""
                    }
                })]), n("span", [e._v(e._s(t.depositToken))])]), n("div", {
                    staticClass: "time"
                }, [n("a-icon", {
                    attrs: {
                        type: "star"
                    }
                }), n("span", [e._v(e._s(e.$t("锁定")) + " " + e._s(t.depositToken) + " " + e._s(e.$t("产出")) + " " + e._s(t.harvestToken))]), n("a-icon", {
                    attrs: {
                        type: "star"
                    }
                })], 1), n("div", {
                    staticClass: "info"
                }, [n("div", {
                    staticClass: "infoItem"
                }, [n("div", {
                    staticClass: "label"
                }, [e._v(e._s(e.$t("总锁仓")) + "：")]), n("div", {
                    staticClass: "num"
                }, [e._v(e._s(t.TotalPledge))]), n("div", {
                    staticClass: "unit"
                }, [e._v(e._s(t.depositToken))])]), n("div", {
                    staticClass: "infoItem"
                }, [n("div", {
                    staticClass: "label"
                }, [e._v(e._s(e.$t("我的锁仓")) + "：")]), n("div", {
                    staticClass: "num"
                }, [e._v(e._s(t.minePledge))]), n("div", {
                    staticClass: "unit"
                }, [e._v(e._s(t.depositToken))])]), n("div", {
                    staticClass: "infoItem"
                }, [n("div", {
                    staticClass: "label"
                }, [e._v(e._s(e.$t("待分配")) + "：")]), n("div", {
                    staticClass: "num"
                }, [e._v(e._s(t.Pending))]), n("div", {
                    staticClass: "unit"
                }, [e._v(e._s(t.harvestToken))])])]), e.$store.state.isInv ? n("div", {
                    staticClass: "btnBox"
                }, [n("a-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function(n) {
                            return e.selectOperating(t, a)
                        }
                    }
                }, [e._v(e._s(e.$t("选择")))])], 1) : n("div", {
                    staticClass: "hint"
                }, [n("div", [e._v(e._s(e.$t("邀请4")))]), n("span", {
                    on: {
                        click: function(t) {
                            e.$store.state.invModel = !0
                        }
                    }
                }, [e._v(e._s(e.$t("邀请6")))])])])
            }
            )), 0), n("a-modal", {
                staticClass: "operat",
                attrs: {
                    centered: "",
                    footer: null
                },
                model: {
                    value: e.operating,
                    callback: function(t) {
                        e.operating = t
                    },
                    expression: "operating"
                }
            }, [n("a-tabs", {
                attrs: {
                    "default-active-key": "1"
                }
            }, [n("a-tab-pane", {
                key: "1",
                attrs: {
                    tab: e.$t("锁定")
                }
            }, [n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("已锁定")))]), n("div", {
                staticClass: "inputBox"
            }, [n("a-input", {
                attrs: {
                    suffix: e.temp.depositToken,
                    placeholder: e.temp.minePledge,
                    disabled: ""
                }
            })], 1), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("锁定")) + " " + e._s(e.temp.depositToken))]), n("div", {
                staticClass: "inputBox"
            }, [n("a-input", {
                attrs: {
                    type: "number",
                    suffix: e.temp.depositToken,
                    placeholder: e.$t("输入数量")
                },
                on: {
                    input: e.clearNoNum
                },
                model: {
                    value: e.lockedNum,
                    callback: function(t) {
                        e.lockedNum = t
                    },
                    expression: "lockedNum"
                }
            })], 1), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("最多可锁定")) + ":"), n("span", {
                on: {
                    click: function(t) {
                        e.lockedNum = Number(e.temp.balance)
                    }
                }
            }, [e._v(" " + e._s(e.temp.balance) + " ")]), e._v(e._s(e.temp.depositToken) + " ")]), n("div", {
                staticClass: "btnBox"
            }, [e.temp.approve ? n("a-button", {
                attrs: {
                    type: "primary",
                    loading: e.lockedLoading
                },
                on: {
                    click: e.pledge
                }
            }, [e._v(e._s(e.$t("锁定")) + " " + e._s(e.temp.depositToken) + " ")]) : n("a-button", {
                attrs: {
                    type: "primary",
                    loading: e.approveLoading
                },
                on: {
                    click: e.approve
                }
            }, [e._v(e._s(e.$t("授权")) + " " + e._s(e.temp.depositToken) + " ")])], 1)]), n("a-tab-pane", {
                key: "2",
                attrs: {
                    tab: e.$t("收获"),
                    "force-render": ""
                }
            }, [n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("待收获")))]), n("div", {
                staticClass: "inputBox"
            }, [n("a-input", {
                attrs: {
                    suffix: e.temp.harvestToken,
                    disabled: "",
                    placeholder: e.temp.Pending
                }
            }), n("a-button", {
                attrs: {
                    type: "primary",
                    loading: e.rewardLoading,
                    disabled: e.temp.Pending <= 0
                },
                on: {
                    click: e.reward
                }
            }, [e._v(e._s(e.$t("收获")) + " ")])], 1), n("div", {
                staticClass: "hint"
            }, [e._v(e._s(e.$t("可解锁")))]), n("div", {
                staticClass: "inputBox"
            }, [n("a-input", {
                attrs: {
                    suffix: e.temp.depositToken,
                    disabled: "",
                    placeholder: e.temp.minePledge
                }
            }), n("a-button", {
                attrs: {
                    type: "primary",
                    loading: e.exitLoading,
                    disabled: e.temp.minePledge <= 0
                },
                on: {
                    click: e.unlock
                }
            }, [e._v(e._s(e.$t("退出")) + " ")])], 1)])], 1)], 1)], 1)
        }
          , i = []
    },
    c0e6: function(e, t, n) {
        e.exports = n.p + "static/img/phonehomebg.6bb0aaa3.png"
    },
    d504: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ead7")
          , i = n("31fe");
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(r);
        n("62b1");
        var s = n("2877")
          , o = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "4d25c266", null);
        t["default"] = o.exports
    },
    de3c: function(e, t, n) {
        var a = {
            "./HME1.png": "7fa6",
            "./HME2.png": "90b5",
            "./china.png": "0edf",
            "./en.png": "9d33",
            "./homeBanner.png": "e6dd",
            "./logo.png": "a1d8",
            "./lp.png": "27f3",
            "./phonehomebg.png": "c0e6"
        };
        function i(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        i.keys = function() {
            return Object.keys(a)
        }
        ,
        i.resolve = r,
        e.exports = i,
        i.id = "de3c"
    },
    e504: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = {
            name: "Header",
            props: {
                menuAc: 0
            },
            data: function() {
                return {
                    options: [{
                        key: "zh",
                        value: n("0edf")
                    }, {
                        key: "en",
                        value: n("9d33")
                    }],
                    style: {
                        backgroundColor: ""
                    }
                }
            },
            mounted: function() {
                this.handleScroll(),
                window.addEventListener("scroll", this.handleScroll)
            },
            methods: {
                handleScroll: function() {
                    var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    this.style.backgroundColor = "rgba(0, 0, 0,".concat(e / (e + 100), ")")
                },
                handleChange: function(e) {
                    this.$i18n.locale = e,
                    this.$store.dispatch("setLanguage", e)
                }
            }
        };
        t.default = a
    },
    e6dd: function(e, t, n) {
        e.exports = n.p + "static/img/homeBanner.7f9a6183.png"
    },
    ead7: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "index"
            }, [e._m(0), n("div", {
                staticClass: "btnBox"
            }, [n("a-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.tourl("https://justswap.io/#/scan/detail/trx/TDLzGujYbTnL5RE155mW74XFrqhNEeQ2DY")
                    }
                }
            }, [e._v(" " + e._s(e.$t("去justswap购买")) + "TEC ")])], 1)])
        }
          , i = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "banner"
            }, [a("div", {
                staticClass: "con"
            }, [a("div", {
                staticClass: "title"
            }, [a("img", {
                attrs: {
                    src: n("90b5"),
                    alt: ""
                }
            })]), a("div", {
                staticClass: "introduce"
            }, [e._v("旅游生态链，英文全称：TripEcology Chain，是基于区块链功能所打造的全球旅游价值传输生态，通过以价值共识为基石的数字通证来连接整个生态价值应用。旅游生态链将原生数字货币TE和TEC作为价值通证，赋能旅游资产数字化、信息化，提升整个行业内资产、资源的流通效率以及降低流通成本…… ")]), a("div", {
                staticClass: "introduceE"
            }, [e._v("The tourism ecological chain is a global tourism value transmission ecology based on the function of the blockchain, which connects the entire ecological value application through a digital token based on a value consensus. The tourism ecological chain uses the native digital currencies TE and TEC as value tokens to empower the digitization and informatization of tourism assets, improve the circulation efficiency of assets and resources in the entire industry, and reduce circulation costs... ")])])])
        }
        ]
    },
    f27b3: function(e, t, n) {},
    f820: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("3726")
          , i = n("6109");
        for (var r in i)
            ["default"].indexOf(r) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(r);
        n("31b2");
        var s = n("2877")
          , o = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "19a9d7bc", null);
        t["default"] = o.exports
    },
    fecc: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = {
            name: "Index",
            components: {},
            data: function() {
                return {}
            },
            methods: {
                tourl: function(e) {
                    window.open(e)
                }
            }
        };
        t.default = a
    }
});
