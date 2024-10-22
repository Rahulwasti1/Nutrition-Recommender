/*Copyright 2010-2024 Simplemaps.com
html5countrymapv4.403 - trial version
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty - v1.5.3 - http://jeremyckahn.github.io/shifty, embedded within map logic*/

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
!(function (t) {
  var e, f, p, a, d, g, x, y, m;
  t.eve =
    ((e = "0.4.2"),
    (f = "hasOwnProperty"),
    (p = /[\.\/]/),
    (a = function () {}),
    (d = function (t, e) {
      return t - e;
    }),
    ((m = function (t, e) {
      t = String(t);
      var r,
        i = x,
        n = Array.prototype.slice.call(arguments, 2),
        s = m.listeners(t),
        a = 0,
        o = [],
        l = {},
        h = [],
        u = g;
      g = t;
      for (var c = (x = 0), f = s.length; c < f; c++)
        "zIndex" in s[c] &&
          (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
      for (o.sort(d); o[a] < 0; )
        if (((r = l[o[a++]]), h.push(r.apply(e, n)), x)) return (x = i), h;
      for (c = 0; c < f; c++)
        if ("zIndex" in (r = s[c]))
          if (r.zIndex == o[a]) {
            if ((h.push(r.apply(e, n)), x)) break;
            do {
              if (((r = l[o[++a]]) && h.push(r.apply(e, n)), x)) break;
            } while (r);
          } else l[r.zIndex] = r;
        else if ((h.push(r.apply(e, n)), x)) break;
      return (x = i), (g = u), h.length ? h : null;
    })._events = y =
      { n: {} }),
    (m.listeners = function (t) {
      for (
        var e,
          r,
          i,
          n,
          s,
          a,
          o = t.split(p),
          l = y,
          h = [l],
          u = [],
          c = 0,
          f = o.length;
        c < f;
        c++
      ) {
        for (a = [], n = 0, s = h.length; n < s; n++)
          for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--; )
            (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
        h = a;
      }
      return u;
    }),
    (m.on = function (t, e) {
      if (((t = String(t)), "function" != typeof e)) return function () {};
      for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++)
        i =
          ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) || (i[r[n]] = { n: {} });
      for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
        if (i.f[n] == e) return a;
      return (
        i.f.push(e),
        function (t) {
          +t == +t && (e.zIndex = +t);
        }
      );
    }),
    (m.f = function (t) {
      var e = [].slice.call(arguments, 1);
      return function () {
        m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
      };
    }),
    (m.stop = function () {
      x = 1;
    }),
    (m.nt = function (t) {
      return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g;
    }),
    (m.nts = function () {
      return g.split(p);
    }),
    (m.off = m.unbind =
      function (t, e) {
        if (t) {
          for (
            var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length;
            o < l;
            o++
          )
            for (u = 0; u < a.length; u += n.length - 2) {
              if (((n = [u, 1]), (r = a[u].n), "*" != s[o]))
                r[s[o]] && n.push(r[s[o]]);
              else for (i in r) r[f](i) && n.push(r[i]);
              a.splice.apply(a, n);
            }
          for (o = 0, l = a.length; o < l; o++)
            for (r = a[o]; r.n; ) {
              if (e) {
                if (r.f) {
                  for (u = 0, c = r.f.length; u < c; u++)
                    if (r.f[u] == e) {
                      r.f.splice(u, 1);
                      break;
                    }
                  r.f.length || delete r.f;
                }
                for (i in r.n)
                  if (r.n[f](i) && r.n[i].f) {
                    for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++)
                      if (h[u] == e) {
                        h.splice(u, 1);
                        break;
                      }
                    h.length || delete r.n[i].f;
                  }
              } else
                for (i in (delete r.f, r.n))
                  r.n[f](i) && r.n[i].f && delete r.n[i].f;
              r = r.n;
            }
        } else m._events = y = { n: {} };
      }),
    (m.once = function (t, e) {
      var r = function () {
        return m.unbind(t, r), e.apply(this, arguments);
      };
      return m.on(t, r);
    }),
    (m.version = e),
    (m.toString = function () {
      return "You are running Eve " + e;
    }),
    m);
})(this),
  (function (t) {
    !(function (t, N) {
      function j(t) {
        if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
        if (j.is(t, v))
          return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (j.is(e[e.length - 1], "function")) {
          var r = e.pop();
          return i
            ? r.call(j._engine.create[x](j, e))
            : N.on("raphael.DOMload", function () {
                r.call(j._engine.create[x](j, e));
              });
        }
        return j._engine.create[x](j, arguments);
      }
      (j.version = "2.1.0"), (j.eve = N);
      function s(t, e) {
        return I(t) - I(e);
      }
      function e(t, e, r, i) {
        return (
          null == i && (i = r),
          [
            ["M", t, e],
            ["m", 0, -i],
            ["a", r, i, 0, 1, 1, 0, 2 * i],
            ["a", r, i, 0, 1, 1, 0, -2 * i],
            ["z"],
          ]
        );
      }
      var i,
        E = /[, ]+/,
        a = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        n = /\{(\d+)\}/g,
        L = "hasOwnProperty",
        d = { doc: document, win: t },
        r = {
          was: Object.prototype[L].call(d.win, "Raphael"),
          is: d.win.Raphael,
        },
        o = function () {
          this.ca = this.customAttributes = {};
        },
        x = "apply",
        M = "concat",
        g =
          "ontouchstart" in d.win ||
          (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
        w = " ",
        P = String,
        z = "split",
        l =
          "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
            z
          ](w),
        h = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend",
        },
        y = P.prototype.toLowerCase,
        B = Math,
        _ = B.max,
        k = B.min,
        S = B.abs,
        m = B.pow,
        T = B.PI,
        F = "number",
        u = "string",
        v = "array",
        c = Object.prototype.toString,
        f =
          ((j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i),
          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        p = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        C = B.round,
        I = parseFloat,
        b = parseInt,
        A = P.prototype.toUpperCase,
        q = (j._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0,
        }),
        D = (j._availableAnimAttrs = {
          blur: F,
          "clip-rect": "csv",
          cx: F,
          cy: F,
          fill: "colour",
          "fill-opacity": F,
          "font-size": F,
          height: F,
          opacity: F,
          path: "path",
          r: F,
          rx: F,
          ry: F,
          stroke: "colour",
          "stroke-opacity": F,
          "stroke-width": F,
          transform: "transform",
          width: F,
          x: F,
          y: F,
        }),
        V =
          /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        O = { hs: 1, rg: 1 },
        Y = /,?([achlmqrstvxz]),?/gi,
        G =
          /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        W =
          /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        X =
          /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        H =
          ((j._radial_gradient =
            /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
          {}),
        U = function (t) {
          return t;
        },
        $ = (j._rectPath = function (t, e, r, i, n) {
          return n
            ? [
                ["M", t + n, e],
                ["l", r - 2 * n, 0],
                ["a", n, n, 0, 0, 1, n, n],
                ["l", 0, i - 2 * n],
                ["a", n, n, 0, 0, 1, -n, n],
                ["l", 2 * n - r, 0],
                ["a", n, n, 0, 0, 1, -n, -n],
                ["l", 0, 2 * n - i],
                ["a", n, n, 0, 0, 1, n, -n],
                ["z"],
              ]
            : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
        }),
        Z = (j._getPath = {
          path: function (t) {
            return t.attr("path");
          },
          circle: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.r);
          },
          ellipse: function (t) {
            t = t.attrs;
            return e(t.cx, t.cy, t.rx, t.ry);
          },
          rect: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height, t.r);
          },
          image: function (t) {
            t = t.attrs;
            return $(t.x, t.y, t.width, t.height);
          },
          text: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
          set: function (t) {
            t = t._getBBox();
            return $(t.x, t.y, t.width, t.height);
          },
        }),
        Q = (j.mapPath = function (t, e) {
          if (!e) return t;
          for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++)
            for (n = 1, s = (a = t[o]).length; n < s; n += 2)
              (r = e.x(a[n], a[n + 1])),
                (i = e.y(a[n], a[n + 1])),
                (a[n] = r),
                (a[n + 1] = i);
          return t;
        });
      if (
        ((j._g = d),
        (j.type =
          d.win.SVGAngle ||
          d.doc.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"
          )
            ? "SVG"
            : "VML"),
        "VML" == j.type)
      ) {
        var J,
          K = d.doc.createElement("div");
        if (
          ((K.innerHTML = '<v:shape adj="1"/>'),
          ((J = K.firstChild).style.behavior = "url(#default#VML)"),
          !J || "object" != typeof J.adj)
        )
          return (j.type = "");
        K = null;
      }
      function tt(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e,
          r = new t.constructor();
        for (e in t) t[L](e) && (r[e] = tt(t[e]));
        return r;
      }
      (j.svg = !(j.vml = "VML" == j.type)),
        (j._Paper = o),
        (j.fn = K = o.prototype = j.prototype),
        (j._id = 0),
        (j._oid = 0),
        (j.is = function (t, e) {
          return "finite" == (e = y.call(e))
            ? !p[L](+t)
            : "array" == e
            ? t instanceof Array
            : ("null" == e && null === t) ||
              (e == typeof t && null !== t) ||
              ("object" == e && t === Object(t)) ||
              ("array" == e && Array.isArray && Array.isArray(t)) ||
              c.call(t).slice(8, -1).toLowerCase() == e;
        }),
        (j.angle = function (t, e, r, i, n, s) {
          if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
          (r = t - r), (i = e - i);
          return r || i ? (180 + (180 * B.atan2(-i, -r)) / T + 360) % 360 : 0;
        }),
        (j.rad = function (t) {
          return ((t % 360) * T) / 180;
        }),
        (j.deg = function (t) {
          return ((180 * t) / T) % 360;
        }),
        (j.snapTo = function (t, e, r) {
          if (((r = j.is(r, "finite") ? r : 10), j.is(t, v))) {
            for (var i = t.length; i--; ) if (S(t[i] - e) <= r) return t[i];
          } else {
            var n = e % (t = +t);
            if (n < r) return e - n;
            if (t - r < n) return e - n + t;
          }
          return e;
        });
      j.createUUID = (function (t, e) {
        return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
            .replace(t, e)
            .toUpperCase();
        };
      })(/[xy]/g, function (t) {
        var e = (16 * B.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
      j.setWindow = function (t) {
        N("raphael.setWindow", j, d.win, t),
          (d.win = t),
          (d.doc = d.win.document),
          j._engine.initWin && j._engine.initWin(d.win);
      };
      function et() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      }
      function rt() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      }
      function it() {
        return this.hex;
      }
      function nt(t, e, r) {
        var i;
        return (
          null == e &&
            j.is(t, "object") &&
            "r" in t &&
            "g" in t &&
            "b" in t &&
            ((r = t.b), (e = t.g), (t = t.r)),
          null == e &&
            j.is(t, u) &&
            ((t = (i = j.getRGB(t)).r), (e = i.g), (r = i.b)),
          (1 < t || 1 < e || 1 < r) && ((t /= 255), (e /= 255), (r /= 255)),
          [t, e, r]
        );
      }
      function st(t, e, r, i) {
        return (
          (r = {
            r: (t *= 255),
            g: (e *= 255),
            b: (r *= 255),
            hex: j.rgb(t, e, r),
            toString: it,
          }),
          j.is(i, "finite") && (r.opacity = i),
          r
        );
      }
      var at = function (t) {
        if (j.vml) {
          var r,
            i = /^\s+|\s+$/g;
          try {
            var e = new ActiveXObject("htmlfile");
            e.write("<body>"), e.close(), (r = e.body);
          } catch (t) {
            r = createPopup().document.body;
          }
          var n = r.createTextRange();
          at = ot(function (t) {
            try {
              r.style.color = P(t).replace(i, "");
              var e = n.queryCommandValue("ForeColor");
              return (
                "#" +
                (
                  "000000" +
                  (e =
                    ((255 & e) << 16) |
                    (65280 & e) |
                    ((16711680 & e) >>> 16)).toString(16)
                ).slice(-6)
              );
            } catch (t) {
              return "none";
            }
          });
        } else {
          var s = d.doc.createElement("i");
          (s.title = "Raphaël Colour Picker"),
            (s.style.display = "none"),
            d.doc.body.appendChild(s),
            (at = ot(function (t) {
              return (
                (s.style.color = t),
                d.doc.defaultView
                  .getComputedStyle(s, "")
                  .getPropertyValue("color")
              );
            }));
        }
        return at(t);
      };
      function ot(n, s, a) {
        function o() {
          var t = Array.prototype.slice.call(arguments, 0),
            e = t.join("␀"),
            r = (o.cache = o.cache || {}),
            i = (o.count = o.count || []);
          return (
            r[L](e)
              ? (function (t, e) {
                  for (var r = 0, i = t.length; r < i; r++)
                    if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                })(i, e)
              : (1e3 <= i.length && delete r[i.shift()],
                i.push(e),
                (r[e] = n[x](s, t))),
            a ? a(r[e]) : r[e]
          );
        }
        return o;
      }
      (j.color = function (t) {
        var e;
        return (
          j.is(t, "object") && "h" in t && "s" in t && "b" in t
            ? ((e = j.hsb2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : j.is(t, "object") && "h" in t && "s" in t && "l" in t
            ? ((e = j.hsl2rgb(t)),
              (t.r = e.r),
              (t.g = e.g),
              (t.b = e.b),
              (t.hex = e.hex))
            : (j.is(t, "string") && (t = j.getRGB(t)),
              j.is(t, "object") && "r" in t && "g" in t && "b" in t
                ? ((e = j.rgb2hsl(t)),
                  (t.h = e.h),
                  (t.s = e.s),
                  (t.l = e.l),
                  (e = j.rgb2hsb(t)),
                  (t.v = e.b))
                : ((t = { hex: "none" }).r =
                    t.g =
                    t.b =
                    t.h =
                    t.s =
                    t.v =
                    t.l =
                      -1)),
          (t.toString = it),
          t
        );
      }),
        (j.hsb2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "b" in t &&
              ((r = t.b), (e = t.s), (i = (t = t.h).o)),
            (s =
              (a = r * e) * (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.hsl2rgb = function (t, e, r, i) {
          var n, s, a;
          return (
            this.is(t, "object") &&
              "h" in t &&
              "s" in t &&
              "l" in t &&
              ((r = t.l), (e = t.s), (t = t.h)),
            (1 < t || 1 < e || 1 < r) && ((t /= 360), (e /= 100), (r /= 100)),
            (s =
              (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
              (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
            (r = e = n = r - a / 2),
            st(
              (r += [a, s, 0, 0, s, a][(t = ~~t)]),
              (e += [s, a, a, s, 0, 0][t]),
              (n += [0, 0, s, a, a, s][t]),
              i
            )
          );
        }),
        (j.rgb2hsb = function (t, e, r) {
          var i, n;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            {
              h:
                ((((0 == (n = (i = _(t, e, r)) - k(t, e, r))
                  ? null
                  : i == t
                  ? (e - r) / n
                  : i == e
                  ? (r - t) / n + 2
                  : (t - e) / n + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == n ? 0 : n / i,
              b: i,
              toString: et,
            }
          );
        }),
        (j.rgb2hsl = function (t, e, r) {
          var i, n, s;
          return (
            (t = (r = nt(t, e, r))[0]),
            (e = r[1]),
            (r = r[2]),
            (i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2),
            {
              h:
                ((((0 == (s = n - s)
                  ? null
                  : n == t
                  ? (e - r) / s
                  : n == e
                  ? (r - t) / s + 2
                  : (t - e) / s + 4) +
                  360) %
                  6) *
                  60) /
                360,
              s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
              l: i,
              toString: rt,
            }
          );
        }),
        (j._path2string = function () {
          return this.join(",").replace(Y, "$1");
        });
      j._preload = function (t, e) {
        var r = d.doc.createElement("img");
        (r.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
          (r.onload = function () {
            e.call(this), (this.onload = null), d.doc.body.removeChild(this);
          }),
          (r.onerror = function () {
            d.doc.body.removeChild(this);
          }),
          d.doc.body.appendChild(r),
          (r.src = t);
      };
      function lt() {
        return this.hex;
      }
      function ht(t, e) {
        for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
          var s = [
            { x: +t[i - 2], y: +t[i - 1] },
            { x: +t[i], y: +t[i + 1] },
            { x: +t[i + 2], y: +t[i + 3] },
            { x: +t[i + 4], y: +t[i + 5] },
          ];
          e
            ? i
              ? n - 4 == i
                ? (s[3] = { x: +t[0], y: +t[1] })
                : n - 2 == i &&
                  ((s[2] = { x: +t[0], y: +t[1] }),
                  (s[3] = { x: +t[2], y: +t[3] }))
              : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
            : n - 4 == i
            ? (s[3] = s[2])
            : i || (s[0] = { x: +t[i], y: +t[i + 1] }),
            r.push([
              "C",
              (-s[0].x + 6 * s[1].x + s[2].x) / 6,
              (-s[0].y + 6 * s[1].y + s[2].y) / 6,
              (s[1].x + 6 * s[2].x - s[3].x) / 6,
              (s[1].y + 6 * s[2].y - s[3].y) / 6,
              s[2].x,
              s[2].y,
            ]);
        }
        return r;
      }
      (j.getRGB = ot(function (t) {
        if (!t || (t = P(t)).indexOf("-") + 1)
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
        if ("none" == t)
          return { r: -1, g: -1, b: -1, hex: "none", toString: lt };
        O[L](t.toLowerCase().substring(0, 2)) ||
          "#" == t.charAt() ||
          (t = at(t));
        var e,
          r,
          i,
          n,
          s,
          a = t.match(f);
        return a
          ? (a[2] &&
              ((i = b(a[2].substring(5), 16)),
              (r = b(a[2].substring(3, 5), 16)),
              (e = b(a[2].substring(1, 3), 16))),
            a[3] &&
              ((i = b((t = a[3].charAt(3)) + t, 16)),
              (r = b((t = a[3].charAt(2)) + t, 16)),
              (e = b((t = a[3].charAt(1)) + t, 16))),
            a[4] &&
              ((s = a[4][z](V)),
              (e = I(s[0])),
              "%" == s[0].slice(-1) && (e *= 2.55),
              (r = I(s[1])),
              "%" == s[1].slice(-1) && (r *= 2.55),
              (i = I(s[2])),
              "%" == s[2].slice(-1) && (i *= 2.55),
              "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
              s[3] && "%" == s[3].slice(-1) && (n /= 100)),
            a[5]
              ? ((s = a[5][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsb2rgb(e, r, i, n))
              : a[6]
              ? ((s = a[6][z](V)),
                (e = I(s[0])),
                "%" == s[0].slice(-1) && (e *= 2.55),
                (r = I(s[1])),
                "%" == s[1].slice(-1) && (r *= 2.55),
                (i = I(s[2])),
                "%" == s[2].slice(-1) && (i *= 2.55),
                ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                  (e /= 360),
                "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                s[3] && "%" == s[3].slice(-1) && (n /= 100),
                j.hsl2rgb(e, r, i, n))
              : (((a = { r: e, g: r, b: i, toString: lt }).hex =
                  "#" +
                  (16777216 | i | (r << 8) | (e << 16)).toString(16).slice(1)),
                j.is(n, "finite") && (a.opacity = n),
                a))
          : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt };
      }, j)),
        (j.hsb = ot(function (t, e, r) {
          return j.hsb2rgb(t, e, r).hex;
        })),
        (j.hsl = ot(function (t, e, r) {
          return j.hsl2rgb(t, e, r).hex;
        })),
        (j.rgb = ot(function (t, e, r) {
          return (
            "#" + (16777216 | r | (e << 8) | (t << 16)).toString(16).slice(1)
          );
        })),
        (j.getColor = function (t) {
          var e = (this.getColor.start = this.getColor.start || {
              h: 0,
              s: 1,
              b: t || 0.75,
            }),
            t = this.hsb2rgb(e.h, e.s, e.b);
          return (
            (e.h += 0.075),
            1 < e.h &&
              ((e.h = 0),
              (e.s -= 0.2),
              e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
            t.hex
          );
        }),
        (j.getColor.reset = function () {
          delete this.start;
        }),
        (j.parsePathString = function (t) {
          if (!t) return null;
          var e = ut(t);
          if (e.arr) return bt(e.arr);
          var s = {
              a: 7,
              c: 6,
              h: 1,
              l: 2,
              m: 2,
              r: 4,
              q: 4,
              s: 4,
              t: 2,
              v: 1,
              z: 0,
            },
            a = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (a = bt(t)),
            a.length ||
              P(t).replace(G, function (t, e, r) {
                var i = [],
                  n = e.toLowerCase();
                if (
                  (r.replace(X, function (t, e) {
                    e && i.push(+e);
                  }),
                  "m" == n &&
                    2 < i.length &&
                    (a.push([e][M](i.splice(0, 2))),
                    (n = "l"),
                    (e = "m" == e ? "l" : "L")),
                  "r" == n)
                )
                  a.push([e][M](i));
                else
                  for (
                    ;
                    i.length >= s[n] &&
                    (a.push([e][M](i.splice(0, s[n]))), s[n]);

                  );
              }),
            (a.toString = j._path2string),
            (e.arr = bt(a)),
            a
          );
        }),
        (j.parseTransformString = ot(function (t) {
          if (!t) return null;
          var n = [];
          return (
            j.is(t, v) && j.is(t[0], v) && (n = bt(t)),
            n.length ||
              P(t).replace(W, function (t, e, r) {
                var i = [];
                y.call(e);
                r.replace(X, function (t, e) {
                  e && i.push(+e);
                }),
                  n.push([e][M](i));
              }),
            (n.toString = j._path2string),
            n
          );
        }));
      var ut = function (e) {
        var r = (ut.ps = ut.ps || {});
        return (
          r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
          setTimeout(function () {
            for (var t in r)
              r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t]);
          }),
          r[e]
        );
      };
      function ct(t, e, r, i, n) {
        return (
          t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) -
          3 * e +
          3 * r
        );
      }
      function ft(t, e, r, i, n, s, a, o, l) {
        null == l && (l = 1);
        for (
          var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
            u = [
              -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
              0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
            ],
            c = [
              0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
              0.1069, 0.1069, 0.0472, 0.0472,
            ],
            f = 0,
            p = 0;
          p < 12;
          p++
        ) {
          var d = h * u[p] + h,
            g = ct(d, t, r, n, a),
            d = ct(d, e, i, s, o),
            d = g * g + d * d;
          f += c[p] * B.sqrt(d);
        }
        return h * f;
      }
      function pt(t, e, r) {
        var i = j.bezierBBox(t),
          n = j.bezierBBox(e);
        if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
        for (
          var i = ft.apply(0, t),
            n = ft.apply(0, e),
            s = _(~~(i / 5), 1),
            a = _(~~(n / 5), 1),
            o = [],
            l = [],
            h = {},
            u = r ? 0 : [],
            c = 0;
          c < s + 1;
          c++
        ) {
          var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
          o.push({ x: f.x, y: f.y, t: c / s });
        }
        for (c = 0; c < a + 1; c++)
          (f = j.findDotsAtSegment.apply(j, e.concat(c / a))),
            l.push({ x: f.x, y: f.y, t: c / a });
        for (c = 0; c < s; c++)
          for (var p = 0; p < a; p++) {
            var d = o[c],
              g = o[c + 1],
              x = l[p],
              y = l[p + 1],
              m = S(g.x - d.x) < 0.001 ? "y" : "x",
              v = S(y.x - x.x) < 0.001 ? "y" : "x",
              b = (function (t, e, r, i, n, s, a, o) {
                if (
                  !(
                    _(t, r) < k(n, a) ||
                    k(t, r) > _(n, a) ||
                    _(e, i) < k(s, o) ||
                    k(e, i) > _(s, o)
                  )
                ) {
                  var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                    h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                    u = (t - r) * (s - o) - (e - i) * (n - a);
                  if (u) {
                    var c = l / u,
                      l = h / u,
                      h = +c.toFixed(2),
                      u = +l.toFixed(2);
                    if (
                      !(
                        h < +k(t, r).toFixed(2) ||
                        h > +_(t, r).toFixed(2) ||
                        h < +k(n, a).toFixed(2) ||
                        h > +_(n, a).toFixed(2) ||
                        u < +k(e, i).toFixed(2) ||
                        u > +_(e, i).toFixed(2) ||
                        u < +k(s, o).toFixed(2) ||
                        u > +_(s, o).toFixed(2)
                      )
                    )
                      return { x: c, y: l };
                  }
                }
              })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
            b &&
              h[b.x.toFixed(4)] != b.y.toFixed(4) &&
              ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
              (d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
              (x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
              0 <= d &&
                d <= 1.001 &&
                0 <= x &&
                x <= 1.001 &&
                (r
                  ? u++
                  : u.push({ x: b.x, y: b.y, t1: k(d, 1), t2: k(x, 1) })));
          }
        return u;
      }
      function dt(t, e, r) {
        (t = j._path2curve(t)), (e = j._path2curve(e));
        for (
          var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length;
          d < g;
          d++
        ) {
          var x = t[d];
          if ("M" == x[0]) (i = o = x[1]), (n = l = x[2]);
          else {
            n =
              "C" == x[0]
                ? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
                : ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
            for (var y = 0, m = e.length; y < m; y++) {
              var v = e[y];
              if ("M" == v[0]) (s = h = v[1]), (a = u = v[2]);
              else {
                a =
                  "C" == v[0]
                    ? ((s = (f = [s, a].concat(v.slice(1)))[6]), f[7])
                    : ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                var b = pt(c, f, r);
                if (r) p += b;
                else {
                  for (var _ = 0, w = b.length; _ < w; _++)
                    (b[_].segment1 = d),
                      (b[_].segment2 = y),
                      (b[_].bez1 = c),
                      (b[_].bez2 = f);
                  p = p.concat(b);
                }
              }
            }
          }
        }
        return p;
      }
      (j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
        var h = 1 - l,
          u = m(h, 3),
          c = m(h, 2),
          f = l * l,
          p = f * l,
          d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
          g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
          u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
          c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
          p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
          f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
          r = h * t + l * r,
          i = h * e + l * i,
          a = h * n + l * a,
          l = h * s + l * o,
          o = 90 - (180 * B.atan2(u - p, c - f)) / T;
        return (
          (p < u || c < f) && (o += 180),
          {
            x: d,
            y: g,
            m: { x: u, y: c },
            n: { x: p, y: f },
            start: { x: r, y: i },
            end: { x: a, y: l },
            alpha: o,
          }
        );
      }),
        (j.bezierBBox = function (t, e, r, i, n, s, a, o) {
          j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
          t = kt.apply(null, t);
          return {
            x: t.min.x,
            y: t.min.y,
            x2: t.max.x,
            y2: t.max.y,
            width: t.max.x - t.min.x,
            height: t.max.y - t.min.y,
          };
        }),
        (j.isPointInsideBBox = function (t, e, r) {
          return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
        }),
        (j.isBBoxIntersect = function (t, e) {
          var r = j.isPointInsideBBox;
          return (
            r(e, t.x, t.y) ||
            r(e, t.x2, t.y) ||
            r(e, t.x, t.y2) ||
            r(e, t.x2, t.y2) ||
            r(t, e.x, e.y) ||
            r(t, e.x2, e.y) ||
            r(t, e.x, e.y2) ||
            r(t, e.x2, e.y2) ||
            (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
              ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
          );
        }),
        (j.pathIntersection = function (t, e) {
          return dt(t, e);
        }),
        (j.pathIntersectionNumber = function (t, e) {
          return dt(t, e, 1);
        }),
        (j.isPointInsidePath = function (t, e, r) {
          var i = j.pathBBox(t);
          return (
            j.isPointInsideBBox(i, e, r) &&
            dt(
              t,
              [
                ["M", e, r],
                ["H", i.x2 + 10],
              ],
              1
            ) %
              2 ==
              1
          );
        }),
        (j._removedFactory = function (t) {
          return function () {
            N(
              "raphael.log",
              null,
              "Raphaël: you are calling to method “" +
                t +
                "” of removed object",
              t
            );
          };
        });
      function gt(t, e, r, i) {
        return [t, e, r, i, r, i];
      }
      function xt(t, e, r, i, n, s) {
        return [
          (1 / 3) * t + (2 / 3) * r,
          (1 / 3) * e + (2 / 3) * i,
          (1 / 3) * n + (2 / 3) * r,
          (1 / 3) * s + (2 / 3) * i,
          n,
          s,
        ];
      }
      function yt(t, e, r, i, n, s, a, o, l) {
        var h = 1 - l;
        return {
          x:
            m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
          y:
            m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o,
        };
      }
      function mt(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];
          case "m":
            return [e, 1, 0, 0, 1, 0, 0];
          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
          case "s":
            return 5 == t.length
              ? [e, 1, 1, t[3], t[4]]
              : 3 == t.length
              ? [e, 1, 1]
              : [e, 1];
        }
      }
      var vt = (j.pathBBox = function (t) {
          var e = ut(t);
          if (e.bbox) return tt(e.bbox);
          if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
          for (
            var r,
              i,
              n = 0,
              s = 0,
              a = [],
              o = [],
              l = 0,
              h = (t = Ct(t)).length;
            l < h;
            l++
          )
            "M" == (i = t[l])[0]
              ? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
              : ((r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                (a = a[M](r.min.x, r.max.x)),
                (o = o[M](r.min.y, r.max.y)),
                (n = i[5]),
                (s = i[6]));
          var u = k[x](0, a),
            c = k[x](0, o),
            f = _[x](0, a),
            p = _[x](0, o),
            d = f - u,
            g = p - c,
            g = {
              x: u,
              y: c,
              x2: f,
              y2: p,
              width: d,
              height: g,
              cx: u + d / 2,
              cy: c + g / 2,
            };
          return (e.bbox = tt(g)), g;
        }),
        bt = function (t) {
          t = tt(t);
          return (t.toString = j._path2string), t;
        },
        o = (j._pathToRelative = function (t) {
          var e = ut(t);
          if (e.rel) return bt(e.rel);
          (j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t));
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = t[0][1]), (a = n = t[0][2]), o++, r.push(["M", i, n]));
          for (var l = o, h = t.length; l < h; l++) {
            var u = (r[l] = []),
              c = t[l];
            if (c[0] != y.call(c[0]))
              switch (((u[0] = y.call(c[0])), u[0])) {
                case "a":
                  (u[1] = c[1]),
                    (u[2] = c[2]),
                    (u[3] = c[3]),
                    (u[4] = c[4]),
                    (u[5] = c[5]),
                    (u[6] = +(c[6] - i).toFixed(3)),
                    (u[7] = +(c[7] - n).toFixed(3));
                  break;
                case "v":
                  u[1] = +(c[1] - n).toFixed(3);
                  break;
                case "m":
                  (s = c[1]), (a = c[2]);
                default:
                  for (var f = 1, p = c.length; f < p; f++)
                    u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
              }
            else {
              (u = r[l] = []), "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
              for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
            }
            var x = r[l].length;
            switch (r[l][0]) {
              case "z":
                (i = s), (n = a);
                break;
              case "h":
                i += +r[l][x - 1];
                break;
              case "v":
                n += +r[l][x - 1];
                break;
              default:
                (i += +r[l][x - 2]), (n += +r[l][x - 1]);
            }
          }
          return (r.toString = j._path2string), (e.rel = bt(r)), r;
        }),
        _t = (j._pathToAbsolute = function (t) {
          var e = ut(t);
          if (e.abs) return bt(e.abs);
          if (
            ((j.is(t, v) && j.is(t && t[0], v)) || (t = j.parsePathString(t)),
            !t || !t.length)
          )
            return [["M", 0, 0]];
          var r = [],
            i = 0,
            n = 0,
            s = 0,
            a = 0,
            o = 0;
          "M" == t[0][0] &&
            ((s = i = +t[0][1]), (a = n = +t[0][2]), o++, (r[0] = ["M", i, n]));
          for (
            var l,
              h,
              u =
                3 == t.length &&
                "M" == t[0][0] &&
                "R" == t[1][0].toUpperCase() &&
                "Z" == t[2][0].toUpperCase(),
              c = o,
              f = t.length;
            c < f;
            c++
          ) {
            if ((r.push((l = [])), (h = t[c])[0] != A.call(h[0])))
              switch (((l[0] = A.call(h[0])), l[0])) {
                case "A":
                  (l[1] = h[1]),
                    (l[2] = h[2]),
                    (l[3] = h[3]),
                    (l[4] = h[4]),
                    (l[5] = h[5]),
                    (l[6] = +(h[6] + i)),
                    (l[7] = +(h[7] + n));
                  break;
                case "V":
                  l[1] = +h[1] + n;
                  break;
                case "H":
                  l[1] = +h[1] + i;
                  break;
                case "R":
                  for (
                    var p = [i, n][M](h.slice(1)), d = 2, g = p.length;
                    d < g;
                    d++
                  )
                    (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                  r.pop(), (r = r[M](ht(p, u)));
                  break;
                case "M":
                  (s = +h[1] + i), (a = +h[2] + n);
                default:
                  for (d = 1, g = h.length; d < g; d++)
                    l[d] = +h[d] + (d % 2 ? i : n);
              }
            else if ("R" == h[0])
              (p = [i, n][M](h.slice(1))),
                r.pop(),
                (r = r[M](ht(p, u))),
                (l = ["R"][M](h.slice(-2)));
            else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
            switch (l[0]) {
              case "Z":
                (i = s), (n = a);
                break;
              case "H":
                i = l[1];
                break;
              case "V":
                n = l[1];
                break;
              case "M":
                (s = l[l.length - 2]), (a = l[l.length - 1]);
              default:
                (i = l[l.length - 2]), (n = l[l.length - 1]);
            }
          }
          return (r.toString = j._path2string), (e.abs = bt(r)), r;
        }),
        wt = function (t, e, r, i, n, s, a, o, l, h) {
          var u = (120 * T) / 180,
            c = (T / 180) * (+n || 0),
            f = [],
            p = ot(function (t, e, r) {
              return {
                x: t * B.cos(r) - e * B.sin(r),
                y: t * B.sin(r) + e * B.cos(r),
              };
            });
          h
            ? ((b = h[0]), (_ = h[1]), (m = h[2]), (v = h[3]))
            : ((t = (g = p(t, e, -c)).x),
              (e = g.y),
              (o = (g = p(o, l, -c)).x),
              (l = g.y),
              B.cos((T / 180) * n),
              B.sin((T / 180) * n),
              1 <
                (y =
                  ((x = (t - o) / 2) * x) / (r * r) +
                  ((d = (e - l) / 2) * d) / (i * i)) &&
                ((r *= y = B.sqrt(y)), (i *= y)),
              (g = r * r),
              (y = i * i),
              (m =
                ((g =
                  (s == a ? -1 : 1) *
                  B.sqrt(
                    S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x))
                  )) *
                  r *
                  d) /
                  i +
                (t + o) / 2),
              (v = (g * -i * x) / r + (e + l) / 2),
              (b = B.asin(((e - v) / i).toFixed(9))),
              (_ = B.asin(((l - v) / i).toFixed(9))),
              (b = t < m ? T - b : b) < 0 && (b = 2 * T + b),
              (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _),
              a && _ < b && (b -= 2 * T),
              !a && b < _ && (_ -= 2 * T));
          var d,
            g,
            x,
            y = _ - b;
          S(y) > u &&
            ((d = _),
            (g = o),
            (x = l),
            (_ = b + u * (a && b < _ ? 1 : -1)),
            (o = m + r * B.cos(_)),
            (l = v + i * B.sin(_)),
            (f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v]))),
            (y = _ - b);
          var m = B.cos(b),
            v = B.sin(b),
            b = B.cos(_),
            _ = B.sin(_),
            y = B.tan(y / 4),
            r = (4 / 3) * r * y,
            i = (4 / 3) * i * y,
            y = [t, e],
            m = [t + r * v, e - i * m],
            b = [o + r * _, l - i * b],
            l = [o, l];
          if (((m[0] = 2 * y[0] - m[0]), (m[1] = 2 * y[1] - m[1]), h))
            return [m, b, l][M](f);
          for (
            var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length;
            k < C;
            k++
          )
            w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
          return w;
        },
        kt = ot(function (t, e, r, i, n, s, a, o) {
          var l,
            h = n - 2 * r + t - (a - 2 * n + r),
            u = 2 * (r - t) - 2 * (n - r),
            c = t - r,
            f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h,
            p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h,
            d = [e, o],
            g = [t, a];
          return (
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            (h = s - 2 * i + e - (o - 2 * s + i)),
            (c = e - i),
            (f =
              (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) /
              2 /
              h),
            (p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h),
            "1e12" < S(f) && (f = 0.5),
            "1e12" < S(p) && (p = 0.5),
            0 < f &&
              f < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, f)), g.push(l.x), d.push(l.y)),
            0 < p &&
              p < 1 &&
              ((l = yt(t, e, r, i, n, s, a, o, p)), g.push(l.x), d.push(l.y)),
            {
              min: { x: k[x](0, g), y: k[x](0, d) },
              max: { x: _[x](0, g), y: _[x](0, d) },
            }
          );
        }),
        Ct = (j._path2curve = ot(
          function (t, e) {
            var r = !e && ut(t);
            if (!e && r.curve) return bt(r.curve);
            function i(t, e, r) {
              var i, n;
              if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
              switch ((t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])) {
                case "M":
                  (e.X = t[1]), (e.Y = t[2]);
                  break;
                case "A":
                  t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                  break;
                case "S":
                  (n =
                    "C" == r || "S" == r
                      ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                      : ((i = e.x), e.y)),
                    (t = ["C", i, n][M](t.slice(1)));
                  break;
                case "T":
                  "Q" == r || "T" == r
                    ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                    : ((e.qx = e.x), (e.qy = e.y)),
                    (t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                  break;
                case "Q":
                  (e.qx = t[1]),
                    (e.qy = t[2]),
                    (t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4])));
                  break;
                case "L":
                  t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                  break;
                case "H":
                  t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                  break;
                case "V":
                  t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                  break;
                case "Z":
                  t = ["C"][M](gt(e.x, e.y, e.X, e.Y));
              }
              return t;
            }
            function n(t, e) {
              if (7 < t[e].length) {
                t[e].shift();
                for (var r = t[e]; r.length; )
                  t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                t.splice(e, 1), (c = _(a.length, (o && o.length) || 0));
              }
            }
            function s(t, e, r, i, n) {
              t &&
                e &&
                "M" == t[n][0] &&
                "M" != e[n][0] &&
                (e.splice(n, 0, ["M", i.x, i.y]),
                (r.bx = 0),
                (r.by = 0),
                (r.x = t[n][1]),
                (r.y = t[n][2]),
                (c = _(a.length, (o && o.length) || 0)));
            }
            for (
              var a = _t(t),
                o = e && _t(e),
                l = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                h = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                u = 0,
                c = _(a.length, (o && o.length) || 0);
              u < c;
              u++
            ) {
              (a[u] = i(a[u], l)),
                n(a, u),
                o && (o[u] = i(o[u], h)),
                o && n(o, u),
                s(a, o, l, h, u),
                s(o, a, h, l, u);
              var f = a[u],
                p = o && o[u],
                d = f.length,
                g = o && p.length;
              (l.x = f[d - 2]),
                (l.y = f[d - 1]),
                (l.bx = I(f[d - 4]) || l.x),
                (l.by = I(f[d - 3]) || l.y),
                (h.bx = o && (I(p[g - 4]) || h.x)),
                (h.by = o && (I(p[g - 3]) || h.y)),
                (h.x = o && p[g - 2]),
                (h.y = o && p[g - 1]);
            }
            return o || (r.curve = bt(a)), o ? [a, o] : a;
          },
          null,
          bt
        )),
        Bt =
          ((j._parseDots = ot(function (t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
              var n = {},
                s = t[r].match(/^([^:]*):?([\d\.]*)/);
              if (((n.color = j.getRGB(s[1])), n.color.error)) return null;
              (n.color = n.color.hex),
                s[2] && (n.offset = s[2] + "%"),
                e.push(n);
            }
            for (r = 1, i = e.length - 1; r < i; r++)
              if (!e[r].offset) {
                for (
                  var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
                  l < i;
                  l++
                )
                  if (e[l].offset) {
                    o = e[l].offset;
                    break;
                  }
                o || ((o = 100), (l = i));
                for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                  (a += h), (e[r].offset = a + "%");
              }
            return e;
          })),
          (j._tear = function (t, e) {
            t == e.top && (e.top = t.prev),
              t == e.bottom && (e.bottom = t.next),
              t.next && (t.next.prev = t.prev),
              t.prev && (t.prev.next = t.next);
          })),
        St =
          ((j._tofront = function (t, e) {
            e.top !== t &&
              (Bt(t, e),
              (t.next = null),
              (t.prev = e.top),
              (e.top.next = t),
              (e.top = t));
          }),
          (j._toback = function (t, e) {
            e.bottom !== t &&
              (Bt(t, e),
              (t.next = e.bottom),
              (t.prev = null),
              (e.bottom.prev = t),
              (e.bottom = t));
          }),
          (j._insertafter = function (t, e, r) {
            Bt(t, r),
              e == r.top && (r.top = t),
              e.next && (e.next.prev = t),
              (t.next = e.next),
              ((t.prev = e).next = t);
          }),
          (j._insertbefore = function (t, e, r) {
            Bt(t, r),
              e == r.bottom && (r.bottom = t),
              e.prev && (e.prev.next = t),
              (t.prev = e.prev),
              ((e.prev = t).next = e);
          }),
          (j.toMatrix = function (t, e) {
            var r = vt(t),
              t = {
                _: { transform: "" },
                getBBox: function () {
                  return r;
                },
              };
            return Tt(t, e), t.matrix;
          })),
        Tt =
          ((j.transformPath = function (t, e) {
            return Q(t, St(t, e));
          }),
          (j._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var r,
              i = j.parseTransformString(e),
              n = 0,
              e = 0,
              s = 1,
              a = 1,
              o = t._,
              l = new Nt();
            if (((o.transform = i || []), i))
              for (var h = 0, u = i.length; h < u; h++) {
                var c,
                  f,
                  p,
                  d,
                  g,
                  x = i[h],
                  y = x.length,
                  m = P(x[0]).toLowerCase(),
                  v = x[0] != m,
                  b = v ? l.invert() : 0;
                "t" == m && 3 == y
                  ? v
                    ? ((c = b.x(0, 0)),
                      (f = b.y(0, 0)),
                      (p = b.x(x[1], x[2])),
                      (d = b.y(x[1], x[2])),
                      l.translate(p - c, d - f))
                    : l.translate(x[1], x[2])
                  : "r" == m
                  ? 2 == y
                    ? ((g = g || t.getBBox(1)),
                      l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2),
                      (n += x[1]))
                    : 4 == y &&
                      (v
                        ? ((p = b.x(x[2], x[3])),
                          (d = b.y(x[2], x[3])),
                          l.rotate(x[1], p, d))
                        : l.rotate(x[1], x[2], x[3]),
                      (n += x[1]))
                  : "s" == m
                  ? 2 == y || 3 == y
                    ? ((g = g || t.getBBox(1)),
                      l.scale(
                        x[1],
                        x[y - 1],
                        g.x + g.width / 2,
                        g.y + g.height / 2
                      ),
                      (s *= x[1]),
                      (a *= x[y - 1]))
                    : 5 == y &&
                      (v
                        ? ((p = b.x(x[3], x[4])),
                          (d = b.y(x[3], x[4])),
                          l.scale(x[1], x[2], p, d))
                        : l.scale(x[1], x[2], x[3], x[4]),
                      (s *= x[1]),
                      (a *= x[2]))
                  : "m" == m &&
                    7 == y &&
                    l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                  (o.dirtyT = 1),
                  (t.matrix = l);
              }
            (t.matrix = l),
              (o.sx = s),
              (o.sy = a),
              (o.deg = n),
              (o.dx = r = l.e),
              (o.dy = e = l.f),
              1 == s && 1 == a && !n && o.bbox
                ? ((o.bbox.x += +r), (o.bbox.y += +e))
                : (o.dirtyT = 1);
          })),
        At = (j._equaliseTransform = function (t, e) {
          (e = P(e).replace(/\.{3}|\u2026/g, t)),
            (t = j.parseTransformString(t) || []),
            (e = j.parseTransformString(e) || []);
          for (
            var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0;
            h < a;
            h++
          ) {
            if (
              ((n = t[h] || mt(e[h])),
              (s = e[h] || mt(n)),
              n[0] != s[0] ||
                ("r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3])) ||
                ("s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])))
            )
              return;
            for (
              o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length);
              r < i;
              r++
            )
              r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
          }
          return { from: o, to: l };
        });
      function Nt(t, e, r, i, n, s) {
        null != t
          ? ((this.a = +t),
            (this.b = +e),
            (this.c = +r),
            (this.d = +i),
            (this.e = +n),
            (this.f = +s))
          : ((this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.e = 0),
            (this.f = 0));
      }
      (j._getContainer = function (t, e, r, i) {
        var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
        if (null != n)
          return n.tagName
            ? null == e
              ? {
                  container: n,
                  width: n.style.pixelWidth || n.offsetWidth,
                  height: n.style.pixelHeight || n.offsetHeight,
                }
              : { container: n, width: e, height: r }
            : { container: 1, x: t, y: e, width: r, height: i };
      }),
        (j.pathToRelative = o),
        (j._engine = {}),
        (j.path2curve = Ct),
        (j.matrix = function (t, e, r, i, n, s) {
          return new Nt(t, e, r, i, n, s);
        }),
        (function (t) {
          function i(t) {
            return t[0] * t[0] + t[1] * t[1];
          }
          function n(t) {
            var e = B.sqrt(i(t));
            t[0] && (t[0] /= e), t[1] && (t[1] /= e);
          }
          (t.add = function (t, e, r, i, n, s) {
            var a,
              o,
              l,
              h,
              u = [[], [], []],
              c = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1],
              ],
              f = [
                [t, r, n],
                [e, i, s],
                [0, 0, 1],
              ];
            for (
              t &&
                t instanceof Nt &&
                (f = [
                  [t.a, t.c, t.e],
                  [t.b, t.d, t.f],
                  [0, 0, 1],
                ]),
                a = 0;
              a < 3;
              a++
            )
              for (o = 0; o < 3; o++) {
                for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                u[a][o] = h;
              }
            (this.a = u[0][0]),
              (this.b = u[1][0]),
              (this.c = u[0][1]),
              (this.d = u[1][1]),
              (this.e = u[0][2]),
              (this.f = u[1][2]);
          }),
            (t.invert = function () {
              var t = this,
                e = t.a * t.d - t.b * t.c;
              return new Nt(
                t.d / e,
                -t.b / e,
                -t.c / e,
                t.a / e,
                (t.c * t.f - t.d * t.e) / e,
                (t.b * t.e - t.a * t.f) / e
              );
            }),
            (t.clone = function () {
              return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.translate = function (t, e) {
              this.add(1, 0, 0, 1, t, e);
            }),
            (t.scale = function (t, e, r, i) {
              null == e && (e = t),
                (r || i) && this.add(1, 0, 0, 1, r, i),
                this.add(t, 0, 0, e, 0, 0),
                (r || i) && this.add(1, 0, 0, 1, -r, -i);
            }),
            (t.rotate = function (t, e, r) {
              (t = j.rad(t)), (e = e || 0), (r = r || 0);
              var i = +B.cos(t).toFixed(9),
                t = +B.sin(t).toFixed(9);
              this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
            }),
            (t.x = function (t, e) {
              return t * this.a + e * this.c + this.e;
            }),
            (t.y = function (t, e) {
              return t * this.b + e * this.d + this.f;
            }),
            (t.get = function (t) {
              return +this[P.fromCharCode(97 + t)].toFixed(4);
            }),
            (t.toString = function () {
              return j.svg
                ? "matrix(" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ].join() +
                    ")"
                : [
                    this.get(0),
                    this.get(2),
                    this.get(1),
                    this.get(3),
                    0,
                    0,
                  ].join();
            }),
            (t.toFilter = function () {
              return (
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                this.get(0) +
                ", M12=" +
                this.get(2) +
                ", M21=" +
                this.get(1) +
                ", M22=" +
                this.get(3) +
                ", Dx=" +
                this.get(4) +
                ", Dy=" +
                this.get(5) +
                ", sizingmethod='auto expand')"
              );
            }),
            (t.offset = function () {
              return [this.e.toFixed(4), this.f.toFixed(4)];
            }),
            (t.split = function () {
              var t = {};
              (t.dx = this.e), (t.dy = this.f);
              var e = [
                [this.a, this.c],
                [this.b, this.d],
              ];
              (t.scalex = B.sqrt(i(e[0]))),
                n(e[0]),
                (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                (e[1] = [
                  e[1][0] - e[0][0] * t.shear,
                  e[1][1] - e[0][1] * t.shear,
                ]),
                (t.scaley = B.sqrt(i(e[1]))),
                n(e[1]),
                (t.shear /= t.scaley);
              var r = -e[0][1],
                e = e[1][1];
              return (
                e < 0
                  ? ((t.rotate = j.deg(B.acos(e))),
                    r < 0 && (t.rotate = 360 - t.rotate))
                  : (t.rotate = j.deg(B.asin(r))),
                (t.isSimple = !(
                  +t.shear.toFixed(9) ||
                  (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                )),
                (t.isSuperSimple =
                  !+t.shear.toFixed(9) &&
                  t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                  !t.rotate),
                (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                t
              );
            }),
            (t.toTransformString = function (t) {
              t = t || this[z]();
              return t.isSimple
                ? ((t.scalex = +t.scalex.toFixed(4)),
                  (t.scaley = +t.scaley.toFixed(4)),
                  (t.rotate = +t.rotate.toFixed(4)),
                  (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") +
                    (1 != t.scalex || 1 != t.scaley
                      ? "s" + [t.scalex, t.scaley, 0, 0]
                      : "") +
                    (t.rotate ? "r" + [t.rotate, 0, 0] : ""))
                : "m" +
                    [
                      this.get(0),
                      this.get(1),
                      this.get(2),
                      this.get(3),
                      this.get(4),
                      this.get(5),
                    ];
            });
        })(Nt.prototype);
      o =
        navigator.userAgent.match(/Version\/(.*?)\s/) ||
        navigator.userAgent.match(/Chrome\/(\d+)/);
      ("Apple Computer, Inc." == navigator.vendor &&
        ((o && o[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
      ("Google Inc." == navigator.vendor && o && o[1] < 8)
        ? (K.safari = function () {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
              { stroke: "none" }
            );
            setTimeout(function () {
              t.remove();
            });
          })
        : (K.safari = function () {});
      function Et() {
        this.returnValue = !1;
      }
      function Lt() {
        return this.originalEvent.preventDefault();
      }
      function Mt() {
        this.cancelBubble = !0;
      }
      function Pt() {
        return this.originalEvent.stopPropagation();
      }
      function zt(t) {
        var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
          r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
        return { x: t.clientX + r, y: t.clientY + e };
      }
      function Ft(t) {
        for (
          var e,
            r = t.clientX,
            i = t.clientY,
            n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
            a = It.length;
          a--;

        ) {
          if (((e = It[a]), g && t.touches)) {
            for (var o, l = t.touches.length; l--; )
              if ((o = t.touches[l]).identifier == e.el._drag.id) {
                (r = o.clientX),
                  (i = o.clientY),
                  (t.originalEvent || t).preventDefault();
                break;
              }
          } else t.preventDefault();
          var h,
            u = e.el.node,
            c = u.nextSibling,
            f = u.parentNode,
            p = u.style.display;
          d.win.opera && f.removeChild(u),
            (u.style.display = "none"),
            (h = e.el.paper.getElementByPoint(r, i)),
            (u.style.display = p),
            d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)),
            h && N("raphael.drag.over." + e.el.id, e.el, h),
            (r += s),
            (i += n),
            N(
              "raphael.drag.move." + e.el.id,
              e.move_scope || e.el,
              r - e.el._drag.x,
              i - e.el._drag.y,
              r,
              i,
              t
            );
        }
      }
      for (
        var Rt = d.doc.addEventListener
            ? function (s, t, a, o) {
                function e(t) {
                  var e = zt(t);
                  return a.call(o, t, e.x, e.y);
                }
                return (
                  s.addEventListener(t, e, !1),
                  g &&
                    h[t] &&
                    s.addEventListener(
                      h[t],
                      function (t) {
                        for (
                          var e = zt(t),
                            r = t,
                            i = 0,
                            n = t.targetTouches && t.targetTouches.length;
                          i < n;
                          i++
                        )
                          if (t.targetTouches[i].target == s) {
                            ((t = t.targetTouches[i]).originalEvent = r),
                              (t.preventDefault = Lt),
                              (t.stopPropagation = Pt);
                            break;
                          }
                        return a.call(o, t, e.x, e.y);
                      },
                      !1
                    ),
                  function () {
                    return (
                      s.removeEventListener(t, e, !1),
                      g && h[t] && s.removeEventListener(h[t], e, !1),
                      !0
                    );
                  }
                );
              }
            : d.doc.attachEvent
            ? function (t, e, i, n) {
                function r(t) {
                  t = t || d.win.event;
                  var e =
                      d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    r =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    r = t.clientX + r,
                    e = t.clientY + e;
                  return (
                    (t.preventDefault = t.preventDefault || Et),
                    (t.stopPropagation = t.stopPropagation || Mt),
                    i.call(n, t, r, e)
                  );
                }
                t.attachEvent("on" + e, r);
                return function () {
                  return t.detachEvent("on" + e, r), !0;
                };
              }
            : void 0,
          It = [],
          jt = function (t) {
            j.unmousemove(Ft).unmouseup(jt);
            for (var e, r = It.length; r--; )
              ((e = It[r]).el._drag = {}),
                N(
                  "raphael.drag.end." + e.el.id,
                  e.end_scope || e.start_scope || e.move_scope || e.el,
                  t
                );
            It = [];
          },
          qt = (j.el = {}),
          Dt = l.length;
        Dt--;

      )
        !(function (i) {
          (j[i] = qt[i] =
            function (t, e) {
              return (
                j.is(t, "function") &&
                  ((this.events = this.events || []),
                  this.events.push({
                    name: i,
                    f: t,
                    unbind: Rt(
                      this.shape || this.node || d.doc,
                      i,
                      t,
                      e || this
                    ),
                  })),
                this
              );
            }),
            (j["un" + i] = qt["un" + i] =
              function (t) {
                for (var e = this.events || [], r = e.length; r--; )
                  e[r].name != i ||
                    (!j.is(t, "undefined") && e[r].f != t) ||
                    (e[r].unbind(),
                    e.splice(r, 1),
                    e.length || delete this.events);
                return this;
              });
        })(l[Dt]);
      (qt.data = function (t, e) {
        var r = (H[this.id] = H[this.id] || {});
        if (0 == arguments.length) return r;
        if (1 != arguments.length)
          return (r[t] = e), N("raphael.data.set." + this.id, this, e, t), this;
        if (j.is(t, "object")) {
          for (var i in t) t[L](i) && this.data(i, t[i]);
          return this;
        }
        return N("raphael.data.get." + this.id, this, r[t], t), r[t];
      }),
        (qt.removeData = function (t) {
          return (
            null == t ? (H[this.id] = {}) : H[this.id] && delete H[this.id][t],
            this
          );
        }),
        (qt.getData = function () {
          return tt(H[this.id] || {});
        }),
        (qt.hover = function (t, e, r, i) {
          return this.mouseover(t, r).mouseout(e, i || r);
        }),
        (qt.unhover = function (t, e) {
          return this.unmouseover(t).unmouseout(e);
        });
      var Vt = [];
      (qt.drag = function (o, l, h, u, c, f) {
        function t(t) {
          (t.originalEvent || t).preventDefault();
          var e = t.clientX,
            r = t.clientY,
            i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
            n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
          if (((this._drag.id = t.identifier), g && t.touches))
            for (var s, a = t.touches.length; a--; )
              if (
                ((s = t.touches[a]),
                (this._drag.id = s.identifier),
                s.identifier == this._drag.id)
              ) {
                (e = s.clientX), (r = s.clientY);
                break;
              }
          (this._drag.x = e + n),
            (this._drag.y = r + i),
            It.length || j.mousemove(Ft).mouseup(jt),
            It.push({ el: this, move_scope: u, start_scope: c, end_scope: f }),
            l && N.on("raphael.drag.start." + this.id, l),
            o && N.on("raphael.drag.move." + this.id, o),
            h && N.on("raphael.drag.end." + this.id, h),
            N(
              "raphael.drag.start." + this.id,
              c || u || this,
              t.clientX + n,
              t.clientY + i,
              t
            );
        }
        return (
          (this._drag = {}),
          Vt.push({ el: this, start: t }),
          this.mousedown(t),
          this
        );
      }),
        (qt.onDragOver = function (t) {
          t
            ? N.on("raphael.drag.over." + this.id, t)
            : N.unbind("raphael.drag.over." + this.id);
        }),
        (qt.undrag = function () {
          for (var t = Vt.length; t--; )
            Vt[t].el == this &&
              (this.unmousedown(Vt[t].start),
              Vt.splice(t, 1),
              N.unbind("raphael.drag.*." + this.id));
          Vt.length || j.unmousemove(Ft).unmouseup(jt), (It = []);
        }),
        (K.circle = function (t, e, r) {
          r = j._engine.circle(this, t || 0, e || 0, r || 0);
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.rect = function (t, e, r, i, n) {
          n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.ellipse = function (t, e, r, i) {
          i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
          return this.__set__ && this.__set__.push(i), i;
        }),
        (K.path = function (t) {
          !t || j.is(t, u) || j.is(t[0], v) || (t += "");
          var e = j._engine.path(j.format[x](j, arguments), this);
          return this.__set__ && this.__set__.push(e), e;
        }),
        (K.image = function (t, e, r, i, n) {
          n = j._engine.image(
            this,
            t || "about:blank",
            e || 0,
            r || 0,
            i || 0,
            n || 0
          );
          return this.__set__ && this.__set__.push(n), n;
        }),
        (K.text = function (t, e, r) {
          r = j._engine.text(this, t || 0, e || 0, P(r));
          return this.__set__ && this.__set__.push(r), r;
        }),
        (K.set = function (t) {
          j.is(t, "array") ||
            (t = Array.prototype.splice.call(arguments, 0, arguments.length));
          var e = new re(t);
          return (
            this.__set__ && this.__set__.push(e),
            (e.paper = this),
            (e.type = "set"),
            e
          );
        }),
        (K.setStart = function (t) {
          this.__set__ = t || this.set();
        }),
        (K.setFinish = function (t) {
          var e = this.__set__;
          return delete this.__set__, e;
        }),
        (K.setSize = function (t, e) {
          return j._engine.setSize.call(this, t, e);
        }),
        (K.setViewBox = function (t, e, r, i, n) {
          return j._engine.setViewBox.call(this, t, e, r, i, n);
        }),
        (K.top = K.bottom = null),
        (K.raphael = j);
      function Ot() {
        return this.x + w + this.y + w + this.width + " × " + this.height;
      }
      (K.getElementByPoint = function (t, e) {
        var r,
          i,
          n,
          s,
          a,
          o = this.canvas,
          l = d.doc.elementFromPoint(t, e);
        if (
          (d.win.opera &&
            "svg" == l.tagName &&
            ((i = (r = o).getBoundingClientRect()),
            (n = r.ownerDocument),
            (s = n.body),
            (a = n.documentElement),
            (r = a.clientTop || s.clientTop || 0),
            (n = a.clientLeft || s.clientLeft || 0),
            (s = {
              y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
              x:
                i.left +
                (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                n,
            }),
            ((n = o.createSVGRect()).x = t - s.x),
            (n.y = e - s.y),
            (n.width = n.height = 1),
            (n = o.getIntersectionList(n, null)).length &&
              (l = n[n.length - 1])),
          !l)
        )
          return null;
        for (; l.parentNode && l != o.parentNode && !l.raphael; )
          l = l.parentNode;
        return (
          l == this.canvas.parentNode && (l = o),
          (l = l && l.raphael ? this.getById(l.raphaelid) : null)
        );
      }),
        (K.getElementsByBBox = function (e) {
          var r = this.set();
          return (
            this.forEach(function (t) {
              j.isBBoxIntersect(t.getBBox(), e) && r.push(t);
            }),
            r
          );
        }),
        (K.getById = function (t) {
          for (var e = this.bottom; e; ) {
            if (e.id == t) return e;
            e = e.next;
          }
          return null;
        }),
        (K.forEach = function (t, e) {
          for (var r = this.bottom; r; ) {
            if (!1 === t.call(e, r)) return this;
            r = r.next;
          }
          return this;
        }),
        (K.getElementsByPoint = function (e, r) {
          var i = this.set();
          return (
            this.forEach(function (t) {
              t.isPointInside(e, r) && i.push(t);
            }),
            i
          );
        }),
        (qt.isPointInside = function (t, e) {
          var r = (this.realPath = Z[this.type](this));
          return (
            this.attr("transform") &&
              this.attr("transform").length &&
              (r = j.transformPath(r, this.attr("transform"))),
            j.isPointInsidePath(r, t, e)
          );
        }),
        (qt.getBBox = function (t) {
          if (this.removed) return {};
          var e = this._;
          return t
            ? ((!e.dirty && e.bboxwt) ||
                ((this.realPath = Z[this.type](this)),
                (e.bboxwt = vt(this.realPath)),
                (e.bboxwt.toString = Ot),
                (e.dirty = 0)),
              e.bboxwt)
            : ((!e.dirty && !e.dirtyT && e.bbox) ||
                ((!e.dirty && this.realPath) ||
                  ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                (e.bbox = vt(Q(this.realPath, this.matrix))),
                (e.bbox.toString = Ot),
                (e.dirty = e.dirtyT = 0)),
              e.bbox);
        }),
        (qt.clone = function () {
          if (this.removed) return null;
          var t = this.paper[this.type]().attr(this.attr());
          return this.__set__ && this.__set__.push(t), t;
        }),
        (qt.glow = function (t) {
          if ("text" == this.type) return null;
          for (
            var e = {
                width:
                  ((t = t || {}).width || 10) +
                  (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || 0.5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000",
              },
              r = e.width / 2,
              i = this.paper,
              n = i.set(),
              s = this.realPath || Z[this.type](this),
              s = this.matrix ? Q(s, this.matrix) : s,
              a = 1;
            a < 1 + r;
            a++
          )
            n.push(
              i
                .path(s)
                .attr({
                  stroke: e.color,
                  fill: e.fill ? e.color : "none",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "stroke-width": +((e.width / r) * a).toFixed(3),
                  opacity: +(e.opacity / r).toFixed(3),
                })
            );
          return n.insertBefore(this).translate(e.offsetx, e.offsety);
        });
      function Yt(t, e, r, i, n, s, a, o, l) {
        return null == l
          ? ft(t, e, r, i, n, s, a, o)
          : j.findDotsAtSegment(
              t,
              e,
              r,
              i,
              n,
              s,
              a,
              o,
              (function (t, e, r, i, n, s, a, o, l) {
                if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                  for (
                    var h = 0.5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u);
                    0.01 < S(c - l);

                  )
                    c = ft(
                      t,
                      e,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      (u += (c < l ? 1 : -1) * (h /= 2))
                    );
                  return u;
                }
              })(t, e, r, i, n, s, a, o, l)
            );
      }
      var o = function (p, d) {
          return function (t, e, r) {
            for (
              var i,
                n,
                s,
                a,
                o,
                l = "",
                h = {},
                u = 0,
                c = 0,
                f = (t = Ct(t)).length;
              c < f;
              c++
            ) {
              if ("M" == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
              else {
                if (
                  e <
                  u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                ) {
                  if (d && !h.start) {
                    if (
                      ((l += [
                        "C" +
                          (o = Yt(
                            i,
                            n,
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                            s[6],
                            e - u
                          )).start.x,
                        o.start.y,
                        o.m.x,
                        o.m.y,
                        o.x,
                        o.y,
                      ]),
                      r)
                    )
                      return l;
                    (h.start = l),
                      (l = [
                        "M" + o.x,
                        o.y + "C" + o.n.x,
                        o.n.y,
                        o.end.x,
                        o.end.y,
                        s[5],
                        s[6],
                      ].join()),
                      (u += a),
                      (i = +s[5]),
                      (n = +s[6]);
                    continue;
                  }
                  if (!p && !d)
                    return {
                      x: (o = Yt(
                        i,
                        n,
                        s[1],
                        s[2],
                        s[3],
                        s[4],
                        s[5],
                        s[6],
                        e - u
                      )).x,
                      y: o.y,
                      alpha: o.alpha,
                    };
                }
                (u += a), (i = +s[5]), (n = +s[6]);
              }
              l += s.shift() + s;
            }
            return (
              (h.end = l),
              (o = p
                ? u
                : d
                ? h
                : j.findDotsAtSegment(
                    i,
                    n,
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    1
                  )).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }),
              o
            );
          };
        },
        Gt = o(1),
        Wt = o(),
        Xt = o(0, 1);
      (j.getTotalLength = Gt),
        (j.getPointAtLength = Wt),
        (j.getSubpath = function (t, e, r) {
          if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
          r = Xt(t, r, 1);
          return e ? Xt(r, e).end : r;
        }),
        (qt.getTotalLength = function () {
          var t = this.getPath();
          if (t)
            return this.node.getTotalLength
              ? this.node.getTotalLength()
              : Gt(t);
        }),
        (qt.getPointAtLength = function (t) {
          var e = this.getPath();
          if (e) return Wt(e, t);
        }),
        (qt.getPath = function () {
          var t,
            e = j._getPath[this.type];
          if ("text" != this.type && "set" != this.type)
            return e && (t = e(this)), t;
        }),
        (qt.getSubpath = function (t, e) {
          var r = this.getPath();
          if (r) return j.getSubpath(r, t, e);
        });
      o = j.easing_formulas = {
        linear: function (t) {
          return t;
        },
        "<": function (t) {
          return m(t, 1.7);
        },
        ">": function (t) {
          return m(t, 0.48);
        },
        "<>": function (t) {
          var e = 0.48 - t / 1.04,
            r = B.sqrt(0.1734 + e * e),
            t = r - e,
            e = -r - e,
            e =
              m(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
              m(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
              0.5;
          return 3 * (1 - e) * e * e + e * e * e;
        },
        backIn: function (t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        backOut: function (t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        elastic: function (t) {
          return t == !!t
            ? t
            : m(2, -10 * t) * B.sin((2 * T * (t - 0.075)) / 0.3) + 1;
        },
        bounce: function (t) {
          var e = 7.5625,
            r = 2.75,
            t =
              t < 1 / r
                ? e * t * t
                : t < 2 / r
                ? e * (t -= 1.5 / r) * t + 0.75
                : t < 2.5 / r
                ? e * (t -= 2.25 / r) * t + 0.9375
                : e * (t -= 2.625 / r) * t + 0.984375;
          return t;
        },
      };
      (o.easeIn = o["ease-in"] = o["<"]),
        (o.easeOut = o["ease-out"] = o[">"]),
        (o.easeInOut = o["ease-in-out"] = o["<>"]),
        (o["back-in"] = o.backIn),
        (o["back-out"] = o.backOut);
      var Ht = [],
        Ut =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function (t) {
            setTimeout(t, 16);
          },
        $t = function () {
          for (var t = +new Date(), e = 0; e < Ht.length; e++) {
            var r = Ht[e];
            if (!r.el.removed && !r.paused) {
              var i,
                n = t - r.start,
                s = r.ms,
                a = r.easing,
                o = r.from,
                l = r.diff,
                h = r.to,
                u = (r.t, r.el),
                c = {},
                f = {};
              if (
                (r.initstatus
                  ? ((n =
                      ((r.initstatus * r.anim.top - r.prev) /
                        (r.percent - r.prev)) *
                      s),
                    (r.status = r.initstatus),
                    delete r.initstatus,
                    r.stop && Ht.splice(e--, 1))
                  : (r.status =
                      (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top),
                !(n < 0))
              )
                if (n < s) {
                  var p,
                    d = a(n / s);
                  for (p in o)
                    if (o[L](p)) {
                      switch (D[p]) {
                        case F:
                          b = +o[p] + d * s * l[p];
                          break;
                        case "colour":
                          b =
                            "rgb(" +
                            [
                              Zt(C(o[p].r + d * s * l[p].r)),
                              Zt(C(o[p].g + d * s * l[p].g)),
                              Zt(C(o[p].b + d * s * l[p].b)),
                            ].join(",") +
                            ")";
                          break;
                        case "path":
                          b = [];
                          for (var g = 0, x = o[p].length; g < x; g++) {
                            b[g] = [o[p][g][0]];
                            for (var y = 1, m = o[p][g].length; y < m; y++)
                              b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                            b[g] = b[g].join(w);
                          }
                          b = b.join(w);
                          break;
                        case "transform":
                          if (l[p].real)
                            for (b = [], g = 0, x = o[p].length; g < x; g++)
                              for (
                                b[g] = [o[p][g][0]], y = 1, m = o[p][g].length;
                                y < m;
                                y++
                              )
                                b[g][y] = o[p][g][y] + d * s * l[p][g][y];
                          else {
                            function v(t) {
                              return +o[p][t] + d * s * l[p][t];
                            }
                            var b = [["m", v(0), v(1), v(2), v(3), v(4), v(5)]];
                          }
                          break;
                        case "csv":
                          if ("clip-rect" == p)
                            for (b = [], g = 4; g--; )
                              b[g] = +o[p][g] + d * s * l[p][g];
                          break;
                        default:
                          var _ = [][M](o[p]);
                          for (
                            b = [], g = u.paper.customAttributes[p].length;
                            g--;

                          )
                            b[g] = +_[g] + d * s * l[p][g];
                      }
                      c[p] = b;
                    }
                  u.attr(c),
                    (function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + t, e, r);
                      });
                    })(u.id, u, r.anim);
                } else {
                  if (
                    (!(function (t, e, r) {
                      setTimeout(function () {
                        N("raphael.anim.frame." + e.id, e, r),
                          N("raphael.anim.finish." + e.id, e, r),
                          j.is(t, "function") && t.call(e);
                      });
                    })(r.callback, u, r.anim),
                    u.attr(h),
                    Ht.splice(e--, 1),
                    1 < r.repeat && !r.next)
                  ) {
                    for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                    r.el.attr(f),
                      Kt(
                        r.anim,
                        r.el,
                        r.anim.percents[0],
                        null,
                        r.totalOrigin,
                        r.repeat - 1
                      );
                  }
                  r.next &&
                    !r.stop &&
                    Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                }
            }
          }
          j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t);
        },
        Zt = function (t) {
          return 255 < t ? 255 : t < 0 ? 0 : t;
        };
      function Qt(t, e, r, i, n, s) {
        var a,
          l = 3 * e,
          h = 3 * (i - e) - l,
          u = 1 - l - h,
          o = 3 * r,
          c = 3 * (n - r) - o,
          f = 1 - o - c;
        function p(t) {
          return ((u * t + h) * t + l) * t;
        }
        return (
          (a = (function (t, e) {
            var r, i, n, s, a, o;
            for (n = t, o = 0; o < 8; o++) {
              if (((s = p(n) - t), S(s) < e)) return n;
              if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
              n -= s / a;
            }
            if (((i = 1), (n = t) < (r = 0))) return r;
            if (i < n) return i;
            for (; r < i; ) {
              if (((s = p(n)), S(s - t) < e)) return n;
              s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
            }
            return n;
          })(t, (a = 1 / (200 * s)))),
          ((f * a + c) * a + o) * a
        );
      }
      function Jt(t, e) {
        var r = [],
          i = {};
        if (((this.ms = e), (this.times = 1), t)) {
          for (var n in t) t[L](n) && ((i[I(n)] = t[n]), r.push(I(n)));
          r.sort(s);
        }
        (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
      }
      function Kt(t, e, r, i, n, s) {
        r = I(r);
        var a,
          o,
          l,
          h,
          u,
          c = t.ms,
          f = {},
          p = {},
          d = {};
        if (i)
          for (x = 0, y = Ht.length; x < y; x++) {
            var g = Ht[x];
            if (g.el.id == e.id && g.anim == t) {
              g.percent != r ? (Ht.splice(x, 1), (l = 1)) : (o = g),
                e.attr(g.totalOrigin);
              break;
            }
          }
        else i = +p;
        for (var x = 0, y = t.percents.length; x < y; x++) {
          if (t.percents[x] == r || t.percents[x] > i * t.top) {
            (r = t.percents[x]),
              (u = t.percents[x - 1] || 0),
              (c = (c / t.top) * (r - u)),
              (h = t.percents[x + 1]),
              (a = t.anim[r]);
            break;
          }
          i && e.attr(t.anim[t.percents[x]]);
        }
        if (a) {
          if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
          else {
            for (var m in a)
              if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m)))
                switch (
                  ((f[m] = e.attr(m)),
                  null == f[m] && (f[m] = q[m]),
                  (p[m] = a[m]),
                  D[m])
                ) {
                  case F:
                    d[m] = (p[m] - f[m]) / c;
                    break;
                  case "colour":
                    f[m] = j.getRGB(f[m]);
                    var v = j.getRGB(p[m]);
                    d[m] = {
                      r: (v.r - f[m].r) / c,
                      g: (v.g - f[m].g) / c,
                      b: (v.b - f[m].b) / c,
                    };
                    break;
                  case "path":
                    var b = Ct(f[m], p[m]),
                      _ = b[1];
                    for (
                      f[m] = b[0], d[m] = [], x = 0, y = f[m].length;
                      x < y;
                      x++
                    ) {
                      d[m][x] = [0];
                      for (var w = 1, k = f[m][x].length; w < k; w++)
                        d[m][x][w] = (_[x][w] - f[m][x][w]) / c;
                    }
                    break;
                  case "transform":
                    (v = e._), (b = At(v[m], p[m]));
                    if (b)
                      for (
                        f[m] = b.from,
                          p[m] = b.to,
                          d[m] = [],
                          d[m].real = !0,
                          x = 0,
                          y = f[m].length;
                        x < y;
                        x++
                      )
                        for (
                          d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length;
                          w < k;
                          w++
                        )
                          d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c;
                    else {
                      (b = e.matrix || new Nt()),
                        (v = {
                          _: { transform: v.transform },
                          getBBox: function () {
                            return e.getBBox(1);
                          },
                        });
                      (f[m] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                        Tt(v, p[m]),
                        (p[m] = v._.transform),
                        (d[m] = [
                          (v.matrix.a - b.a) / c,
                          (v.matrix.b - b.b) / c,
                          (v.matrix.c - b.c) / c,
                          (v.matrix.d - b.d) / c,
                          (v.matrix.e - b.e) / c,
                          (v.matrix.f - b.f) / c,
                        ]);
                    }
                    break;
                  case "csv":
                    var C = P(a[m])[z](E),
                      B = P(f[m])[z](E);
                    if ("clip-rect" == m)
                      for (f[m] = B, d[m] = [], x = B.length; x--; )
                        d[m][x] = (C[x] - f[m][x]) / c;
                    p[m] = C;
                    break;
                  default:
                    for (
                      C = [][M](a[m]),
                        B = [][M](f[m]),
                        d[m] = [],
                        x = e.paper.customAttributes[m].length;
                      x--;

                    )
                      d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c;
                }
            var S,
              T = a.easing,
              A = j.easing_formulas[T];
            if (
              ((A =
                A ||
                ((A = P(T).match(R)) && 5 == A.length
                  ? ((S = A),
                    function (t) {
                      return Qt(t, +S[1], +S[2], +S[3], +S[4], c);
                    })
                  : U)),
              (T = a.start || t.start || +new Date()),
              (g = {
                anim: t,
                percent: r,
                timestamp: T,
                start: T + (t.del || 0),
                status: 0,
                initstatus: i || 0,
                stop: !1,
                ms: c,
                easing: A,
                from: f,
                diff: d,
                to: p,
                el: e,
                callback: a.callback,
                prev: u,
                next: h,
                repeat: s || t.times,
                origin: e.attr(),
                totalOrigin: n,
              }),
              Ht.push(g),
              i &&
                !o &&
                !l &&
                ((g.stop = !0), (g.start = new Date() - c * i), 1 == Ht.length))
            )
              return $t();
            l && (g.start = new Date() - g.ms * i), 1 == Ht.length && Ut($t);
          }
          N("raphael.anim.start." + e.id, e, t);
        }
      }
      function te(t) {
        for (var e = 0; e < Ht.length; e++)
          Ht[e].el.paper == t && Ht.splice(e--, 1);
      }
      (qt.animateWith = function (t, e, r, i, n, s) {
        var a = this;
        if (a.removed) return s && s.call(a), a;
        s = r instanceof Jt ? r : j.animation(r, i, n, s);
        Kt(s, a, s.percents[0], null, a.attr());
        for (var o = 0, l = Ht.length; o < l; o++)
          if (Ht[o].anim == e && Ht[o].el == t) {
            Ht[l - 1].start = Ht[o].start;
            break;
          }
        return a;
      }),
        (qt.onAnimation = function (t) {
          return (
            t
              ? N.on("raphael.anim.frame." + this.id, t)
              : N.unbind("raphael.anim.frame." + this.id),
            this
          );
        }),
        (Jt.prototype.delay = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.times = this.times), (e.del = +t || 0), e;
        }),
        (Jt.prototype.repeat = function (t) {
          var e = new Jt(this.anim, this.ms);
          return (e.del = this.del), (e.times = B.floor(_(t, 0)) || 1), e;
        }),
        (j.animation = function (t, e, r, i) {
          if (t instanceof Jt) return t;
          (!j.is(r, "function") && r) || ((i = i || r || null), (r = null)),
            (e = +e || 0);
          var n,
            s,
            a = {};
          for (s in (t = Object(t)))
            t[L](s) &&
              I(s) != s &&
              I(s) + "%" != s &&
              ((n = !0), (a[s] = t[s]));
          return n
            ? (r && (a.easing = r),
              i && (a.callback = i),
              new Jt({ 100: a }, e))
            : new Jt(t, e);
        }),
        (qt.animate = function (t, e, r, i) {
          var n = this;
          if (n.removed) return i && i.call(n), n;
          i = t instanceof Jt ? t : j.animation(t, e, r, i);
          return Kt(i, n, i.percents[0], null, n.attr()), n;
        }),
        (qt.setTime = function (t, e) {
          return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
        }),
        (qt.status = function (t, e) {
          var r,
            i,
            n = [],
            s = 0;
          if (null != e) return Kt(t, this, -1, k(e, 1)), this;
          for (r = Ht.length; s < r; s++)
            if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
              if (t) return i.status;
              n.push({ anim: i.anim, status: i.status });
            }
          return t ? 0 : n;
        }),
        (qt.pause = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) &&
                (Ht[e].paused = !0));
          return this;
        }),
        (qt.resume = function (t) {
          for (var e, r = 0; r < Ht.length; r++)
            Ht[r].el.id != this.id ||
              (t && Ht[r].anim != t) ||
              ((e = Ht[r]),
              !1 !== N("raphael.anim.resume." + this.id, this, e.anim) &&
                (delete e.paused, this.status(e.anim, e.status)));
          return this;
        }),
        (qt.stop = function (t) {
          for (var e = 0; e < Ht.length; e++)
            Ht[e].el.id != this.id ||
              (t && Ht[e].anim != t) ||
              (!1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) &&
                Ht.splice(e--, 1));
          return this;
        }),
        N.on("raphael.remove", te),
        N.on("raphael.clear", te),
        (qt.toString = function () {
          return "Raphaël’s object";
        });
      var ee,
        re = function (t) {
          if (((this.items = []), (this.length = 0), (this.type = "set"), t))
            for (var e = 0, r = t.length; e < r; e++)
              !t[e] ||
                (t[e].constructor != qt.constructor &&
                  t[e].constructor != re) ||
                ((this[this.items.length] = this.items[this.items.length] =
                  t[e]),
                this.length++);
        },
        ie = re.prototype;
      for (ee in ((ie.push = function () {
        for (var t, e, r = 0, i = arguments.length; r < i; r++)
          !(t = arguments[r]) ||
            (t.constructor != qt.constructor && t.constructor != re) ||
            ((this[(e = this.items.length)] = this.items[e] = t),
            this.length++);
        return this;
      }),
      (ie.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }),
      (ie.forEach = function (t, e) {
        for (var r = 0, i = this.items.length; r < i; r++)
          if (!1 === t.call(e, this.items[r], r)) return this;
        return this;
      }),
      qt))
        qt[L](ee) &&
          (ie[ee] = (function (r) {
            return function () {
              var e = arguments;
              return this.forEach(function (t) {
                t[r][x](t, e);
              });
            };
          })(ee));
      (ie.attr = function (t, e) {
        if (t && j.is(t, v) && j.is(t[0], "object"))
          for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
        else
          for (var n = 0, s = this.items.length; n < s; n++)
            this.items[n].attr(t, e);
        return this;
      }),
        (ie.clear = function () {
          for (; this.length; ) this.pop();
        }),
        (ie.splice = function (t, e, r) {
          (t = t < 0 ? _(this.length + t, 0) : t),
            (e = _(0, k(this.length - t, e)));
          for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++)
            s.push(arguments[a]);
          for (a = 0; a < e; a++) n.push(this[t + a]);
          for (; a < this.length - t; a++) i.push(this[t + a]);
          var o = s.length;
          for (a = 0; a < o + i.length; a++)
            this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
          for (a = this.items.length = this.length -= e - o; this[a]; )
            delete this[a++];
          return new re(n);
        }),
        (ie.exclude = function (t) {
          for (var e = 0, r = this.length; e < r; e++)
            if (this[e] == t) return this.splice(e, 1), !0;
        }),
        (ie.animate = function (t, e, r, i) {
          (!j.is(r, "function") && r) || (i = r || null);
          var n,
            s = this.items.length,
            a = s,
            o = this;
          if (!s) return this;
          i &&
            (n = function () {
              --s || i.call(o);
            }),
            (r = j.is(r, u) ? r : n);
          for (
            var l = j.animation(t, e, r, n), h = this.items[--a].animate(l);
            a--;

          )
            this.items[a] &&
              !this.items[a].removed &&
              this.items[a].animateWith(h, l, l),
              (this.items[a] && !this.items[a].removed) || s--;
          return this;
        }),
        (ie.insertAfter = function (t) {
          for (var e = this.items.length; e--; ) this.items[e].insertAfter(t);
          return this;
        }),
        (ie.getBBox = function () {
          for (
            var t, e = [], r = [], i = [], n = [], s = this.items.length;
            s--;

          )
            this.items[s].removed ||
              ((t = this.items[s].getBBox()),
              e.push(t.x),
              r.push(t.y),
              i.push(t.x + t.width),
              n.push(t.y + t.height));
          return {
            x: (e = k[x](0, e)),
            y: (r = k[x](0, r)),
            x2: (i = _[x](0, i)),
            y2: (n = _[x](0, n)),
            width: i - e,
            height: n - r,
          };
        }),
        (ie.clone = function (t) {
          t = this.paper.set();
          for (var e = 0, r = this.items.length; e < r; e++)
            t.push(this.items[e].clone());
          return t;
        }),
        (ie.toString = function () {
          return "Raphaël‘s set";
        }),
        (ie.glow = function (r) {
          var i = this.paper.set();
          return (
            this.forEach(function (t, e) {
              t = t.glow(r);
              null != t &&
                t.forEach(function (t, e) {
                  i.push(t);
                });
            }),
            i
          );
        }),
        (ie.isPointInside = function (e, r) {
          var i = !1;
          return (
            this.forEach(function (t) {
              if (t.isPointInside(e, r))
                return console.log("runned"), !(i = !0);
            }),
            i
          );
        }),
        (j.registerFont = function (t) {
          if (!t.face) return t;
          this.fonts = this.fonts || {};
          var e,
            r = { w: t.w, face: {}, glyphs: {} },
            i = t.face["font-family"];
          for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
          if (
            (this.fonts[i] ? this.fonts[i].push(r) : (this.fonts[i] = [r]),
            !t.svg)
          )
            for (var n in ((r.face["units-per-em"] = b(
              t.face["units-per-em"],
              10
            )),
            t.glyphs))
              if (t.glyphs[L](n)) {
                var s = t.glyphs[n];
                if (
                  ((r.glyphs[n] = {
                    w: s.w,
                    k: {},
                    d:
                      s.d &&
                      "M" +
                        s.d.replace(/[mlcxtrv]/g, function (t) {
                          return (
                            { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                              t
                            ] || "M"
                          );
                        }) +
                        "z",
                  }),
                  s.k)
                )
                  for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a]);
              }
          return t;
        }),
        (K.getFont = function (t, e, r, i) {
          if (
            ((i = i || "normal"),
            (r = r || "normal"),
            (e =
              +e ||
              { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
              400),
            j.fonts)
          ) {
            var n,
              s = j.fonts[t];
            if (!s) {
              var a,
                o = new RegExp(
                  "(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)",
                  "i"
                );
              for (a in j.fonts)
                if (j.fonts[L](a) && o.test(a)) {
                  s = j.fonts[a];
                  break;
                }
            }
            if (s)
              for (
                var l = 0, h = s.length;
                l < h &&
                ((n = s[l]).face["font-weight"] != e ||
                  (n.face["font-style"] != r && n.face["font-style"]) ||
                  n.face["font-stretch"] != i);
                l++
              );
            return n;
          }
        }),
        (K.print = function (t, e, r, i, n, s, a, o) {
          (s = s || "middle"),
            (a = _(k(a || 0, 1), -1)),
            (o = _(k(o || 1, 3), 1));
          var l,
            h = P(r)[z](""),
            u = 0,
            c = 0,
            f = "";
          if ((j.is(i, "string") && (i = this.getFont(i)), i)) {
            l = (n || 16) / i.face["units-per-em"];
            for (
              var p,
                d,
                n = i.face.bbox[z](E),
                g = +n[0],
                x = n[3] - n[1],
                y = 0,
                m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2),
                v = 0,
                b = h.length;
              v < b;
              v++
            )
              "\n" == h[v]
                ? ((c = d = u = 0), (y += x * o))
                : ((p = (c && i.glyphs[h[v - 1]]) || {}),
                  (d = i.glyphs[h[v]]),
                  (u += c
                    ? (p.w || i.w) + ((p.k && p.k[h[v]]) || 0) + i.w * a
                    : 0),
                  (c = 1)),
                d &&
                  d.d &&
                  (f += j.transformPath(d.d, [
                    "t",
                    u * l,
                    y * l,
                    "s",
                    l,
                    l,
                    g,
                    m,
                    "t",
                    (t - g) / l,
                    (e - m) / l,
                  ]));
          }
          return this.path(f).attr({ fill: "#000", stroke: "none" });
        }),
        (K.add = function (t) {
          if (j.is(t, "array"))
            for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
              (e = t[i] || {}), a[L](e.type) && r.push(this[e.type]().attr(e));
          return r;
        }),
        (j.format = function (t, e) {
          var r = j.is(e, v) ? [0][M](e) : arguments;
          return (
            t &&
              j.is(t, u) &&
              r.length - 1 &&
              (t = t.replace(n, function (t, e) {
                return null == r[++e] ? "" : r[e];
              })),
            t || ""
          );
        }),
        (j.fullfill = (function () {
          var e = /\{([^\}]+)\}/g,
            n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
          return function (t, i) {
            return String(t).replace(e, function (t, e) {
              return (
                (r = t),
                (s = t = i),
                e.replace(n, function (t, e, r, i, n) {
                  (e = e || i),
                    s &&
                      (e in s && (s = s[e]),
                      "function" == typeof s && n && (s = s()));
                }),
                (s = (null == s || s == t ? r : s) + "")
              );
              var r, s;
            });
          };
        })()),
        (j.ninja = function () {
          return r.was ? (d.win.Raphael = r.is) : delete t.Raphael, j;
        }),
        (j.st = ie),
        (function (e, t, r) {
          null == e.readyState &&
            e.addEventListener &&
            (e.addEventListener(
              t,
              (r = function () {
                e.removeEventListener(t, r, !1), (e.readyState = "complete");
              }),
              !1
            ),
            (e.readyState = "loading")),
            (function t() {
              /in/.test(e.readyState)
                ? setTimeout(t, 9)
                : j.eve("raphael.DOMload");
            })();
        })(document, "DOMContentLoaded"),
        N.on("raphael.DOMload", function () {
          i = !0;
        }),
        (function () {
          if (j.svg) {
            var k = "hasOwnProperty",
              C = String,
              g = parseFloat,
              x = parseInt,
              y = Math,
              m = y.max,
              v = y.abs,
              b = y.pow,
              _ = /[, ]+/,
              f = j.eve,
              w = "http://www.w3.org/1999/xlink",
              B = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
              },
              S = {};
            j.toString = function () {
              return (
                "Your browser supports SVG.\nYou are running Raphaël " +
                this.version
              );
            };
            function T(t, e) {
              var i = "linear",
                r = t.id + e,
                n = 0.5,
                s = 0.5,
                a = t.node,
                o = t.paper,
                l = a.style,
                h = j._g.doc.getElementById(r);
              if (!h) {
                if (
                  ((e = (e = C(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (i = "radial"),
                        e &&
                          r &&
                          ((n = g(e)),
                          (r = 2 * (0.5 < (s = g(r))) - 1),
                          0.25 < b(n - 0.5, 2) + b(s - 0.5, 2) &&
                            (s = y.sqrt(0.25 - b(n - 0.5, 2)) * r + 0.5) &&
                            0.5 != s &&
                            (s = s.toFixed(5) - 1e-5 * r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == i)
                ) {
                  var u = e.shift(),
                    u = -g(u);
                  if (isNaN(u)) return null;
                  var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))],
                    u = 1 / (m(v(c[2]), v(c[3])) || 1);
                  (c[2] *= u),
                    (c[3] *= u),
                    c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                    c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                }
                var f = j._parseDots(e);
                if (!f) return null;
                if (
                  ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                  t.gradient &&
                    r != t.gradient.id &&
                    (o.defs.removeChild(t.gradient), delete t.gradient),
                  !t.gradient)
                ) {
                  (h = L(i + "Gradient", { id: r })),
                    (t.gradient = h),
                    L(
                      h,
                      "radial" == i
                        ? { fx: n, fy: s }
                        : {
                            x1: c[0],
                            y1: c[1],
                            x2: c[2],
                            y2: c[3],
                            gradientTransform: t.matrix.invert(),
                          }
                    ),
                    o.defs.appendChild(h);
                  for (var p = 0, d = f.length; p < d; p++)
                    h.appendChild(
                      L("stop", {
                        offset: f[p].offset || (p ? "100%" : "0%"),
                        "stop-color": f[p].color || "#fff",
                      })
                    );
                }
              }
              return (
                L(a, {
                  fill: "url(#" + r + ")",
                  opacity: 1,
                  "fill-opacity": 1,
                }),
                (l.fill = ""),
                (l.opacity = 1),
                (l.fillOpacity = 1)
              );
            }
            function A(t) {
              var e = t.getBBox(1);
              L(t.pattern, {
                patternTransform:
                  t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
              });
            }
            function N(t, e, r) {
              if ("path" == t.type) {
                for (
                  var i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    c,
                    f = C(e).toLowerCase().split("-"),
                    p = t.paper,
                    d = r ? "end" : "start",
                    g = t.node,
                    x = t.attrs,
                    y = x["stroke-width"],
                    m = f.length,
                    v = "classic",
                    b = 3,
                    _ = 3,
                    w = 5;
                  m--;

                )
                  switch (f[m]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      v = f[m];
                      break;
                    case "wide":
                      _ = 5;
                      break;
                    case "narrow":
                      _ = 2;
                      break;
                    case "long":
                      b = 5;
                      break;
                    case "short":
                      b = 2;
                  }
                for (u in ((u =
                  "open" == v
                    ? ((b += 2),
                      (_ += 2),
                      (w += 2),
                      (l = 1),
                      (n = r ? 4 : 1),
                      { fill: "none", stroke: x.stroke })
                    : ((n = l = b / 2), { fill: x.stroke, stroke: "none" })),
                t._.arrows
                  ? r
                    ? (t._.arrows.endPath && S[t._.arrows.endPath]--,
                      t._.arrows.endMarker && S[t._.arrows.endMarker]--)
                    : (t._.arrows.startPath && S[t._.arrows.startPath]--,
                      t._.arrows.startMarker && S[t._.arrows.startMarker]--)
                  : (t._.arrows = {}),
                "none" != v
                  ? ((s = "raphael-marker-" + v),
                    (a = "raphael-marker-" + d + v + b + _),
                    j._g.doc.getElementById(s)
                      ? S[s]++
                      : (p.defs.appendChild(
                          L(L("path"), {
                            "stroke-linecap": "round",
                            d: B[v],
                            id: s,
                          })
                        ),
                        (S[s] = 1)),
                    (o = j._g.doc.getElementById(a))
                      ? (S[a]++, (h = o.getElementsByTagName("use")[0]))
                      : ((o = L(L("marker"), {
                          id: a,
                          markerHeight: _,
                          markerWidth: b,
                          orient: "auto",
                          refX: n,
                          refY: _ / 2,
                        })),
                        (h = L(L("use"), {
                          "xlink:href": "#" + s,
                          transform:
                            (r
                              ? "rotate(180 " + b / 2 + " " + _ / 2 + ") "
                              : "") +
                            "scale(" +
                            b / w +
                            "," +
                            _ / w +
                            ")",
                          "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(
                            4
                          ),
                        })),
                        o.appendChild(h),
                        p.defs.appendChild(o),
                        (S[a] = 1)),
                    L(h, u),
                    (l = l * ("diamond" != v && "oval" != v)),
                    (h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - l * y)
                      : ((i = l * y),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    ((u = {})["marker-" + d] = "url(#" + a + ")"),
                    (h || i) && (u.d = j.getSubpath(x.path, i, h)),
                    L(g, u),
                    (t._.arrows[d + "Path"] = s),
                    (t._.arrows[d + "Marker"] = a),
                    (t._.arrows[d + "dx"] = l),
                    (t._.arrows[d + "Type"] = v),
                    (t._.arrows[d + "String"] = e))
                  : ((h = r
                      ? ((i = t._.arrows.startdx * y || 0),
                        j.getTotalLength(x.path) - i)
                      : ((i = 0),
                        j.getTotalLength(x.path) -
                          (t._.arrows.enddx * y || 0))),
                    t._.arrows[d + "Path"] &&
                      L(g, { d: j.getSubpath(x.path, i, h) }),
                    delete t._.arrows[d + "Path"],
                    delete t._.arrows[d + "Marker"],
                    delete t._.arrows[d + "dx"],
                    delete t._.arrows[d + "Type"],
                    delete t._.arrows[d + "String"]),
                S))
                  !S[k](u) ||
                    S[u] ||
                    ((c = j._g.doc.getElementById(u)) &&
                      c.parentNode.removeChild(c));
              }
            }
            function E(t, e, r) {
              if ((e = l[C(e).toLowerCase()])) {
                for (
                  var i = t.attrs["stroke-width"] || "1",
                    n =
                      { round: i, square: i, butt: 0 }[
                        t.attrs["stroke-linecap"] || r["stroke-linecap"]
                      ] || 0,
                    s = [],
                    a = e.length;
                  a--;

                )
                  s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                L(t.node, { "stroke-dasharray": s.join(",") });
              }
            }
            function p(t, e) {
              var r,
                i = t.node,
                n = t.attrs,
                s = i.style.visibility;
              for (r in ((i.style.visibility = "hidden"), e))
                if (e[k](r) && j._availableAttrs[k](r)) {
                  var a = e[r];
                  switch (((n[r] = a), r)) {
                    case "blur":
                      t.blur(a);
                      break;
                    case "href":
                    case "title":
                      var o = L("title"),
                        l = j._g.doc.createTextNode(a);
                      o.appendChild(l), i.appendChild(o);
                      break;
                    case "target":
                      var h = i.parentNode;
                      "a" != h.tagName.toLowerCase() &&
                        ((o = L("a")),
                        h.insertBefore(o, i),
                        o.appendChild(i),
                        (h = o)),
                        "target" == r
                          ? h.setAttributeNS(
                              w,
                              "show",
                              "blank" == a ? "new" : a
                            )
                          : h.setAttributeNS(w, r, a);
                      break;
                    case "cursor":
                      i.style.cursor = a;
                      break;
                    case "transform":
                      t.transform(a);
                      break;
                    case "arrow-start":
                      N(t, a);
                      break;
                    case "arrow-end":
                      N(t, a, 1);
                      break;
                    case "clip-rect":
                      var u,
                        l = C(a).split(_);
                      4 == l.length &&
                        (t.clip &&
                          t.clip.parentNode.parentNode.removeChild(
                            t.clip.parentNode
                          ),
                        (h = L("clipPath")),
                        (u = L("rect")),
                        (h.id = j.createUUID()),
                        L(u, { x: l[0], y: l[1], width: l[2], height: l[3] }),
                        h.appendChild(u),
                        t.paper.defs.appendChild(h),
                        L(i, { "clip-path": "url(#" + h.id + ")" }),
                        (t.clip = u)),
                        a ||
                          ((u = i.getAttribute("clip-path")) &&
                            ((d = j._g.doc.getElementById(
                              u.replace(/(^url\(#|\)$)/g, "")
                            )) && d.parentNode.removeChild(d),
                            L(i, { "clip-path": "" }),
                            delete t.clip));
                      break;
                    case "path":
                      "path" == t.type &&
                        (L(i, {
                          d: a ? (n.path = j._pathToAbsolute(a)) : "M0,0",
                        }),
                        (t._.dirty = 1),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1)));
                      break;
                    case "width":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx)) break;
                      (r = "x"), (a = n.x);
                    case "x":
                      n.fx && (a = -n.x - (n.width || 0));
                    case "rx":
                      if ("rx" == r && "rect" == t.type) break;
                    case "cx":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "height":
                      if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy)) break;
                      (r = "y"), (a = n.y);
                    case "y":
                      n.fy && (a = -n.y - (n.height || 0));
                    case "ry":
                      if ("ry" == r && "rect" == t.type) break;
                    case "cy":
                      i.setAttribute(r, a), t.pattern && A(t), (t._.dirty = 1);
                      break;
                    case "r":
                      "rect" == t.type
                        ? L(i, { rx: a, ry: a })
                        : i.setAttribute(r, a),
                        (t._.dirty = 1);
                      break;
                    case "src":
                      "image" == t.type && i.setAttributeNS(w, "href", a);
                      break;
                    case "stroke-width":
                      (1 == t._.sx && 1 == t._.sy) ||
                        (a /= m(v(t._.sx), v(t._.sy)) || 1),
                        t.paper._vbSize && (a *= t.paper._vbSize),
                        i.setAttribute(r, a),
                        n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e),
                        t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "stroke-dasharray":
                      E(t, a, e);
                      break;
                    case "fill":
                      if (C(a).match(j._ISURL)) {
                        L(i, { fill: a });
                        break;
                      }
                      var c,
                        f,
                        p = j.getRGB(a);
                      if (p.error) {
                        if (
                          ("circle" == t.type ||
                            "ellipse" == t.type ||
                            "r" != C(a).charAt()) &&
                          T(t, a)
                        ) {
                          !("opacity" in n || "fill-opacity" in n) ||
                            ((c = j._g.doc.getElementById(
                              i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                            )) &&
                              ((f = c.getElementsByTagName("stop")),
                              L(f[f.length - 1], {
                                "stop-opacity":
                                  ("opacity" in n ? n.opacity : 1) *
                                  ("fill-opacity" in n ? n["fill-opacity"] : 1),
                              }))),
                            (n.gradient = a),
                            (n.fill = "none");
                          break;
                        }
                      } else
                        delete e.gradient,
                          delete n.gradient,
                          !j.is(n.opacity, "undefined") &&
                            j.is(e.opacity, "undefined") &&
                            L(i, { opacity: n.opacity }),
                          !j.is(n["fill-opacity"], "undefined") &&
                            j.is(e["fill-opacity"], "undefined") &&
                            L(i, { "fill-opacity": n["fill-opacity"] });
                      p[k]("opacity") &&
                        L(i, {
                          "fill-opacity":
                            1 < p.opacity ? p.opacity / 100 : p.opacity,
                        });
                    case "stroke":
                      (p = j.getRGB(a)),
                        i.setAttribute(r, p.hex),
                        "stroke" == r &&
                          p[k]("opacity") &&
                          L(i, {
                            "stroke-opacity":
                              1 < p.opacity ? p.opacity / 100 : p.opacity,
                          }),
                        "stroke" == r &&
                          t._.arrows &&
                          ("startString" in t._.arrows &&
                            N(t, t._.arrows.startString),
                          "endString" in t._.arrows &&
                            N(t, t._.arrows.endString, 1));
                      break;
                    case "gradient":
                      ("circle" != t.type &&
                        "ellipse" != t.type &&
                        "r" == C(a).charAt()) ||
                        T(t, a);
                      break;
                    case "opacity":
                      n.gradient &&
                        !n[k]("stroke-opacity") &&
                        L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                    case "fill-opacity":
                      if (n.gradient) {
                        (c = j._g.doc.getElementById(
                          i.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                        )) &&
                          ((f = c.getElementsByTagName("stop")),
                          L(f[f.length - 1], { "stop-opacity": a }));
                        break;
                      }
                    default:
                      "font-size" == r && (a = x(a, 10) + "px");
                      var d = r.replace(/(\-.)/g, function (t) {
                        return t.substring(1).toUpperCase();
                      });
                      (i.style[d] = a), (t._.dirty = 1), i.setAttribute(r, a);
                  }
                }
              M(t, e), (i.style.visibility = s);
            }
            function o(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.matrix = j.matrix()),
                (this.realPath = null),
                (this.paper = e),
                (this.attrs = this.attrs || {}),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var L = function (t, e) {
                if (e)
                  for (var r in ("string" == typeof t && (t = L(t)), e))
                    e[k](r) &&
                      ("xlink:" == r.substring(0, 6)
                        ? t.setAttributeNS(w, r.substring(6), C(e[r]))
                        : t.setAttribute(r, C(e[r])));
                else
                  (t = j._g.doc.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  )).style &&
                    (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return t;
              },
              l = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3],
              },
              M = function (t, e) {
                if (
                  "text" == t.type &&
                  (e[k]("text") ||
                    e[k]("font") ||
                    e[k]("font-size") ||
                    e[k]("x") ||
                    e[k]("y"))
                ) {
                  var r = t.attrs,
                    i = t.node,
                    n = i.firstChild
                      ? x(
                          j._g.doc.defaultView
                            .getComputedStyle(i.firstChild, "")
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (e[k]("text")) {
                    for (r.text = e.text; i.firstChild; )
                      i.removeChild(i.firstChild);
                    for (
                      var s,
                        a = C(e.text).split("\n"),
                        o = [],
                        l = 0,
                        h = a.length;
                      l < h;
                      l++
                    )
                      (s = L("tspan")),
                        l && L(s, { dy: 1.2 * n, x: r.x }),
                        s.appendChild(j._g.doc.createTextNode(a[l])),
                        i.appendChild(s),
                        (o[l] = s);
                  } else
                    for (
                      l = 0, h = (o = i.getElementsByTagName("tspan")).length;
                      l < h;
                      l++
                    )
                      l ? L(o[l], { dy: 1.2 * n, x: r.x }) : L(o[0], { dy: 0 });
                  L(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                  (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                  t && j.is(t, "finite") && L(o[0], { dy: t });
                }
              },
              t = j.el;
            ((o.prototype = t).constructor = o),
              (j._engine.path = function (t, e) {
                var r = L("path");
                e.canvas && e.canvas.appendChild(r);
                e = new o(r, e);
                return (
                  (e.type = "path"),
                  p(e, { fill: "none", stroke: "#000", path: t }),
                  e
                );
              }),
              (t.rotate = function (t, e, r) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2]))),
                    (t = g(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    this.transform(this._.transform.concat([["r", t, e, r]]))),
                  this
                );
                var i;
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 &&
                      ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                    (t = g(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    )),
                  this
                );
                var n;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                    (t = g(t[0]) || 0),
                    (e = +e || 0),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.transform = function (t) {
                var e = this._;
                return null == t
                  ? e.transform
                  : (j._extractTransform(this, t),
                    this.clip &&
                      L(this.clip, { transform: this.matrix.invert() }),
                    this.pattern && A(this),
                    this.node && L(this.node, { transform: this.matrix }),
                    (1 == e.sx && 1 == e.sy) ||
                      ((e = this.attrs[k]("stroke-width")
                        ? this.attrs["stroke-width"]
                        : 1),
                      this.attr({ "stroke-width": e })),
                    this);
              }),
              (t.hide = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "none")),
                  this
                );
              }),
              (t.show = function () {
                return (
                  this.removed ||
                    this.paper.safari((this.node.style.display = "")),
                  this
                );
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  var t,
                    e = this.paper;
                  for (t in (e.__set__ && e.__set__.exclude(this),
                  f.unbind("raphael.*.*." + this.id),
                  this.gradient && e.defs.removeChild(this.gradient),
                  j._tear(this, e),
                  "a" == this.node.parentNode.tagName.toLowerCase()
                    ? this.node.parentNode.parentNode.removeChild(
                        this.node.parentNode
                      )
                    : this.node.parentNode.removeChild(this.node),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t._getBBox = function () {
                var t;
                "none" == this.node.style.display && (this.show(), (t = !0));
                var e = {};
                try {
                  e = this.node.getBBox();
                } catch (t) {
                } finally {
                  e = e || {};
                }
                return t && this.hide(), e;
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[k](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    "fill" == t &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  if ("transform" == t) return this._.transform;
                  for (
                    var n = t.split(_), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e
                  ? ((l = {})[t] = e)
                  : null != t && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                for (h in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes[k](h) &&
                    l[k](h) &&
                    j.is(this.paper.customAttributes[h], "function")
                  ) {
                    var u,
                      c = this.paper.customAttributes[h].apply(
                        this,
                        [].concat(l[h])
                      );
                    for (u in ((this.attrs[h] = l[h]), c))
                      c[k](u) && (l[u] = c[u]);
                  }
                return p(this, l), this;
              }),
              (t.toFront = function () {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase()
                  ? this.node.parentNode.parentNode.appendChild(
                      this.node.parentNode
                    )
                  : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && j._tofront(this, t), this;
              }),
              (t.toBack = function () {
                if (this.removed) return this;
                var t = this.node.parentNode;
                "a" == t.tagName.toLowerCase()
                  ? t.parentNode.insertBefore(
                      this.node.parentNode,
                      this.node.parentNode.parentNode.firstChild
                    )
                  : t.firstChild != this.node &&
                    t.insertBefore(this.node, this.node.parentNode.firstChild),
                  j._toback(this, this.paper);
                this.paper;
                return this;
              }),
              (t.insertAfter = function (t) {
                if (this.removed) return this;
                var e = t.node || t[t.length - 1].node;
                return (
                  e.nextSibling
                    ? e.parentNode.insertBefore(this.node, e.nextSibling)
                    : e.parentNode.appendChild(this.node),
                  j._insertafter(this, t, this.paper),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                if (this.removed) return this;
                var e = t.node || t[0].node;
                return (
                  e.parentNode.insertBefore(this.node, e),
                  j._insertbefore(this, t, this.paper),
                  this
                );
              }),
              (t.blur = function (t) {
                var e,
                  r,
                  i = this;
                return (
                  0 != +t
                    ? ((e = L("filter")),
                      (r = L("feGaussianBlur")),
                      (i.attrs.blur = t),
                      (e.id = j.createUUID()),
                      L(r, { stdDeviation: +t || 1.5 }),
                      e.appendChild(r),
                      i.paper.defs.appendChild(e),
                      (i._blur = e),
                      L(i.node, { filter: "url(#" + e.id + ")" }))
                    : (i._blur &&
                        (i._blur.parentNode.removeChild(i._blur),
                        delete i._blur,
                        delete i.attrs.blur),
                      i.node.removeAttribute("filter")),
                  i
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                var n = L("circle");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "circle"),
                  L(n, t.attrs),
                  t
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = L("rect");
                t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    r: s || 0,
                    rx: s || 0,
                    ry: s || 0,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "rect"),
                  L(a, t.attrs),
                  t
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                var s = L("ellipse");
                t.canvas && t.canvas.appendChild(s);
                t = new o(s, t);
                return (
                  (t.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000",
                  }),
                  (t.type = "ellipse"),
                  L(s, t.attrs),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = L("image");
                L(a, {
                  x: r,
                  y: i,
                  width: n,
                  height: s,
                  preserveAspectRatio: "none",
                }),
                  a.setAttributeNS(w, "href", e),
                  t.canvas && t.canvas.appendChild(a);
                t = new o(a, t);
                return (
                  (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                  (t.type = "image"),
                  t
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = L("text");
                t.canvas && t.canvas.appendChild(n);
                t = new o(n, t);
                return (
                  (t.attrs = {
                    x: e,
                    y: r,
                    "text-anchor": "middle",
                    text: i,
                    font: j._availableAttrs.font,
                    stroke: "none",
                    fill: "#000",
                  }),
                  (t.type = "text"),
                  p(t, t.attrs),
                  t
                );
              }),
              (j._engine.setSize = function (t, e) {
                return (
                  (this.width = t || this.width),
                  (this.height = e || this.height),
                  this.canvas.setAttribute("width", this.width),
                  this.canvas.setAttribute("height", this.height),
                  this._viewBox && this.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t && t.container,
                  r = t.x,
                  i = t.y,
                  n = t.width,
                  s = t.height;
                if (!e) throw new Error("SVG container not found.");
                var a,
                  o = L("svg"),
                  t = "overflow:hidden;",
                  r = r || 0,
                  i = i || 0;
                return (
                  L(o, {
                    height: (s = s || 342),
                    version: 1.1,
                    width: (n = n || 512),
                    xmlns: "http://www.w3.org/2000/svg",
                  }),
                  1 == e
                    ? ((o.style.cssText =
                        t +
                        "position:absolute;left:" +
                        r +
                        "px;top:" +
                        i +
                        "px"),
                      j._g.doc.body.appendChild(o),
                      (a = 1))
                    : ((o.style.cssText = t + "position:relative"),
                      e.firstChild
                        ? e.insertBefore(o, e.firstChild)
                        : e.appendChild(o)),
                  ((e = new j._Paper()).width = n),
                  (e.height = s),
                  (e.canvas = o),
                  e.clear(),
                  (e._left = e._top = 0),
                  a && (e.renderfix = function () {}),
                  e.renderfix(),
                  e
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                var s,
                  a = m(r / this.width, i / this.height),
                  o = this.top,
                  l = n ? "meet" : "xMinYMin",
                  h =
                    null == t
                      ? (this._vbSize && (a = 1),
                        delete this._vbSize,
                        "0 0 " + this.width + " " + this.height)
                      : ((this._vbSize = a), t + " " + e + " " + r + " " + i);
                for (
                  L(this.canvas, { viewBox: h, preserveAspectRatio: l });
                  a && o;

                )
                  (s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1),
                    o.attr({ "stroke-width": s }),
                    (o._.dirty = 1),
                    (o._.dirtyT = 1),
                    (o = o.prev);
                return (this._viewBox = [t, e, r, i, !!n]), this;
              }),
              (j.prototype.renderfix = function () {
                var e,
                  r = this.canvas,
                  t = r.style;
                try {
                  e = r.getScreenCTM() || r.createSVGMatrix();
                } catch (t) {
                  e = r.createSVGMatrix();
                }
                var i = -e.e % 1,
                  n = -e.f % 1;
                (i || n) &&
                  (i &&
                    ((this._left = (this._left + i) % 1),
                    (t.left = this._left + "px")),
                  n &&
                    ((this._top = (this._top + n) % 1),
                    (t.top = this._top + "px")));
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this);
                for (var t = this.canvas; t.firstChild; )
                  t.removeChild(t.firstChild);
                (this.bottom = this.top = null),
                  (this.desc = L("desc")).appendChild(
                    j._g.doc.createTextNode("Created with Raphaël " + j.version)
                  ),
                  t.appendChild(this.desc),
                  t.appendChild((this.defs = L("defs")));
              }),
              (j.prototype.remove = function () {
                for (var t in (f("raphael.remove", this),
                this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
              });
            var e,
              r = j.st;
            for (e in t)
              t[k](e) &&
                !r[k](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        (function () {
          if (j.vml) {
            function g(t, e, r) {
              var i = j.matrix();
              return i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) };
            }
            function v(t, e, r, i, n, s) {
              var a,
                o = t._,
                l = t.matrix,
                h = o.fillpos,
                u = t.node,
                c = u.style,
                f = 1,
                p = "",
                d = M / e,
                t = M / r;
              (c.visibility = "hidden"),
                e &&
                  r &&
                  ((u.coordsize = x(d) + A + x(t)),
                  (c.rotation = s * (e * r < 0 ? -1 : 1)),
                  s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                  e < 0 && (p += "x"),
                  r < 0 && (p += " y") && (f = -1),
                  (c.flip = p),
                  (u.coordorigin = i * -d + A + n * -t),
                  (h || o.fillsize) &&
                    ((t = (t = u.getElementsByTagName(S)) && t[0]),
                    u.removeChild(t),
                    h &&
                      ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                      (t.position = a.dx * f + A + a.dy * f)),
                    o.fillsize &&
                      (t.size =
                        o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)),
                    u.appendChild(t)),
                  (c.visibility = "visible"));
            }
            var b = "hasOwnProperty",
              _ = String,
              w = parseFloat,
              c = Math,
              k = c.round,
              C = c.max,
              B = c.min,
              x = c.abs,
              S = "fill",
              T = /[, ]+/,
              f = j.eve,
              A = " ",
              N = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x",
              },
              E = /([clmz]),?([^clmz]*)/gi,
              i = / progid:\S+Blur\([^\)]+\)/g,
              L = /-?[^,\s-]+/g,
              h = "position:absolute;left:0;top:0;width:1px;height:1px",
              M = 21600,
              P = { path: 1, rect: 1, image: 1 },
              z = { circle: 1, ellipse: 1 };
            j.toString = function () {
              return (
                "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                this.version
              );
            };
            function F(t, e, r) {
              for (
                var i = _(e).toLowerCase().split("-"),
                  r = r ? "end" : "start",
                  n = i.length,
                  s = "classic",
                  a = "medium",
                  o = "medium";
                n--;

              )
                switch (i[n]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    s = i[n];
                    break;
                  case "wide":
                  case "narrow":
                    o = i[n];
                    break;
                  case "long":
                  case "short":
                    a = i[n];
                }
              t = t.node.getElementsByTagName("stroke")[0];
              (t[r + "arrow"] = s),
                (t[r + "arrowlength"] = a),
                (t[r + "arrowwidth"] = o);
            }
            function p(t, e) {
              t.attrs = t.attrs || {};
              var r,
                i,
                n,
                s,
                a,
                o,
                l,
                h = t.node,
                u = t.attrs,
                c = h.style,
                f =
                  P[t.type] &&
                  (e.x != u.x ||
                    e.y != u.y ||
                    e.width != u.width ||
                    e.height != u.height ||
                    e.cx != u.cx ||
                    e.cy != u.cy ||
                    e.rx != u.rx ||
                    e.ry != u.ry ||
                    e.r != u.r),
                p =
                  z[t.type] &&
                  (u.cx != e.cx ||
                    u.cy != e.cy ||
                    u.r != e.r ||
                    u.rx != e.rx ||
                    u.ry != e.ry),
                d = t;
              for (r in e) e[b](r) && (u[r] = e[r]);
              if (
                (f && ((u.path = j._getPath[t.type](t)), (t._.dirty = 1)),
                e.href && (h.href = e.href),
                e.title && (h.title = e.title),
                e.target && (h.target = e.target),
                e.cursor && (c.cursor = e.cursor),
                "blur" in e && t.blur(e.blur),
                ((e.path && "path" == t.type) || f) &&
                  ((h.path = (function (t) {
                    var e = /[ahqstv]/gi,
                      r = j._pathToAbsolute;
                    if (
                      (_(t).match(e) && (r = j._path2curve),
                      (e = /[clmz]/g),
                      r == j._pathToAbsolute && !_(t).match(e))
                    ) {
                      var i = _(t).replace(E, function (t, e, r) {
                        var i = [],
                          n = "m" == e.toLowerCase(),
                          s = N[e];
                        return (
                          r.replace(L, function (t) {
                            n &&
                              2 == i.length &&
                              ((s += i + N["m" == e ? "l" : "L"]), (i = [])),
                              i.push(k(t * M));
                          }),
                          s + i
                        );
                      });
                      return i;
                    }
                    for (
                      var n, s, a = r(t), i = [], o = 0, l = a.length;
                      o < l;
                      o++
                    ) {
                      (n = a[o]),
                        "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                      for (var h = 1, u = n.length; h < u; h++)
                        s += k(n[h] * M) + (h != u - 1 ? "," : "");
                      i.push(s);
                    }
                    return i.join(A);
                  })(
                    ~_(u.path).toLowerCase().indexOf("r")
                      ? j._pathToAbsolute(u.path)
                      : u.path
                  )),
                  "image" == t.type &&
                    ((t._.fillpos = [u.x, u.y]),
                    (t._.fillsize = [u.width, u.height]),
                    v(t, 1, 1, 0, 0, 0))),
                "transform" in e && t.transform(e.transform),
                p &&
                  ((s = +u.cx),
                  (i = +u.cy),
                  (p = +u.rx || +u.r || 0),
                  (n = +u.ry || +u.r || 0),
                  (h.path = j.format(
                    "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                    k((s - p) * M),
                    k((i - n) * M),
                    k((s + p) * M),
                    k((i + n) * M),
                    k(s * M)
                  )),
                  (t._.dirty = 1)),
                "clip-rect" in e &&
                  (4 == (i = _(e["clip-rect"]).split(T)).length &&
                    ((i[2] = +i[2] + +i[0]),
                    (i[3] = +i[3] + +i[1]),
                    ((s = (n = h.clipRect || j._g.doc.createElement("div"))
                      .style).clip = j.format(
                      "rect({1}px {2}px {3}px {0}px)",
                      i
                    )),
                    h.clipRect ||
                      ((s.position = "absolute"),
                      (s.top = 0),
                      (s.left = 0),
                      (s.width = t.paper.width + "px"),
                      (s.height = t.paper.height + "px"),
                      h.parentNode.insertBefore(n, h),
                      n.appendChild(h),
                      (h.clipRect = n))),
                  e["clip-rect"] ||
                    (h.clipRect && (h.clipRect.style.clip = "auto"))),
                t.textpath &&
                  ((o = t.textpath.style),
                  e.font && (o.font = e.font),
                  e["font-family"] &&
                    (o.fontFamily =
                      '"' +
                      e["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, "") +
                      '"'),
                  e["font-size"] && (o.fontSize = e["font-size"]),
                  e["font-weight"] && (o.fontWeight = e["font-weight"]),
                  e["font-style"] && (o.fontStyle = e["font-style"])),
                "arrow-start" in e && F(d, e["arrow-start"]),
                "arrow-end" in e && F(d, e["arrow-end"], 1),
                (null == e.opacity &&
                  null == e["stroke-width"] &&
                  null == e.fill &&
                  null == e.src &&
                  null == e.stroke &&
                  null == e["stroke-width"] &&
                  null == e["stroke-opacity"] &&
                  null == e["fill-opacity"] &&
                  null == e["stroke-dasharray"] &&
                  null == e["stroke-miterlimit"] &&
                  null == e["stroke-linejoin"] &&
                  null == e["stroke-linecap"]) ||
                  ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)),
                  "image" == t.type && e.src && (o.src = e.src),
                  e.fill && (o.on = !0),
                  (null != o.on && "none" != e.fill && null !== e.fill) ||
                    (o.on = !1),
                  o.on &&
                    e.fill &&
                    ((g = _(e.fill).match(j._ISURL))
                      ? (o.parentNode == h && h.removeChild(o),
                        (o.rotate = !0),
                        (o.src = g[1]),
                        (o.type = "tile"),
                        (a = t.getBBox(1)),
                        (o.position = a.x + A + a.y),
                        (t._.fillpos = [a.x, a.y]),
                        j._preload(g[1], function () {
                          t._.fillsize = [this.offsetWidth, this.offsetHeight];
                        }))
                      : ((o.color = j.getRGB(e.fill).hex),
                        (o.src = ""),
                        (o.type = "solid"),
                        j.getRGB(e.fill).error &&
                          (d.type in { circle: 1, ellipse: 1 } ||
                            "r" != _(e.fill).charAt()) &&
                          I(d, e.fill, o) &&
                          ((u.fill = "none"),
                          (u.gradient = e.fill),
                          (o.rotate = !1)))),
                  ("fill-opacity" in e || "opacity" in e) &&
                    ((l =
                      ((+u["fill-opacity"] + 1 || 2) - 1) *
                      ((+u.opacity + 1 || 2) - 1) *
                      ((+j.getRGB(e.fill).o + 1 || 2) - 1)),
                    (l = B(C(l, 0), 1)),
                    (o.opacity = l),
                    o.src && (o.color = "none")),
                  h.appendChild(o),
                  (a = !1),
                  (g =
                    h.getElementsByTagName("stroke") &&
                    h.getElementsByTagName("stroke")[0]) ||
                    (a = g = R("stroke")),
                  ((e.stroke && "none" != e.stroke) ||
                    e["stroke-width"] ||
                    null != e["stroke-opacity"] ||
                    e["stroke-dasharray"] ||
                    e["stroke-miterlimit"] ||
                    e["stroke-linejoin"] ||
                    e["stroke-linecap"]) &&
                    (g.on = !0),
                  ("none" != e.stroke &&
                    null !== e.stroke &&
                    null != g.on &&
                    0 != e.stroke &&
                    0 != e["stroke-width"]) ||
                    (g.on = !1),
                  (o = j.getRGB(e.stroke)),
                  g.on && e.stroke && (g.color = o.hex),
                  (l =
                    ((+u["stroke-opacity"] + 1 || 2) - 1) *
                    ((+u.opacity + 1 || 2) - 1) *
                    ((+o.o + 1 || 2) - 1)),
                  (o = 0.75 * (w(e["stroke-width"]) || 1)),
                  (l = B(C(l, 0), 1)),
                  null == e["stroke-width"] && (o = u["stroke-width"]),
                  e["stroke-width"] && (g.weight = o),
                  o && o < 1 && (l *= o) && (g.weight = 1),
                  (g.opacity = l),
                  e["stroke-linejoin"] &&
                    (g.joinstyle = e["stroke-linejoin"] || "miter"),
                  (g.miterlimit = e["stroke-miterlimit"] || 8),
                  e["stroke-linecap"] &&
                    (g.endcap =
                      "butt" == e["stroke-linecap"]
                        ? "flat"
                        : "square" == e["stroke-linecap"]
                        ? "square"
                        : "round"),
                  e["stroke-dasharray"] &&
                    ((l = {
                      "-": "shortdash",
                      ".": "shortdot",
                      "-.": "shortdashdot",
                      "-..": "shortdashdotdot",
                      ". ": "dot",
                      "- ": "dash",
                      "--": "longdash",
                      "- .": "dashdot",
                      "--.": "longdashdot",
                      "--..": "longdashdotdot",
                    }),
                    (g.dashstyle = l[b](e["stroke-dasharray"])
                      ? l[e["stroke-dasharray"]]
                      : "")),
                  a && h.appendChild(g)),
                "text" == d.type)
              ) {
                d.paper.canvas.style.display = "";
                var h = d.paper.span,
                  g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                  c = h.style;
                u.font && (c.font = u.font),
                  u["font-family"] && (c.fontFamily = u["font-family"]),
                  u["font-weight"] && (c.fontWeight = u["font-weight"]),
                  u["font-style"] && (c.fontStyle = u["font-style"]),
                  (g = w(u["font-size"] || (g && g[0])) || 10),
                  (c.fontSize = 100 * g + "px"),
                  d.textpath.string &&
                    (h.innerHTML = _(d.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"));
                h = h.getBoundingClientRect();
                (d.W = u.w = (h.right - h.left) / 100),
                  (d.H = u.h = (h.bottom - h.top) / 100),
                  (d.X = u.x),
                  (d.Y = u.y + d.H / 2),
                  ("x" in e || "y" in e) &&
                    (d.path.v = j.format(
                      "m{0},{1}l{2},{1}",
                      k(u.x * M),
                      k(u.y * M),
                      k(u.x * M) + 1
                    ));
                for (
                  var x = [
                      "x",
                      "y",
                      "text",
                      "font",
                      "font-family",
                      "font-weight",
                      "font-style",
                      "font-size",
                    ],
                    y = 0,
                    m = x.length;
                  y < m;
                  y++
                )
                  if (x[y] in e) {
                    d._.dirty = 1;
                    break;
                  }
                switch (u["text-anchor"]) {
                  case "start":
                    (d.textpath.style["v-text-align"] = "left"),
                      (d.bbx = d.W / 2);
                    break;
                  case "end":
                    (d.textpath.style["v-text-align"] = "right"),
                      (d.bbx = -d.W / 2);
                    break;
                  default:
                    (d.textpath.style["v-text-align"] = "center"), (d.bbx = 0);
                }
                d.textpath.style["v-text-kern"] = !0;
              }
            }
            function u(t, e) {
              ((this[0] = this.node = t).raphael = !0),
                (this.id = j._oid++),
                (t.raphaelid = this.id),
                (this.X = 0),
                (this.Y = 0),
                (this.attrs = {}),
                (this.paper = e),
                (this.matrix = j.matrix()),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1,
                }),
                e.bottom || (e.bottom = this),
                (this.prev = e.top),
                e.top && (e.top.next = this),
                ((e.top = this).next = null);
            }
            var R,
              I = function (t, e, r) {
                t.attrs = t.attrs || {};
                t.attrs;
                var i = Math.pow,
                  n = "linear",
                  s = ".5 .5";
                if (
                  ((t.attrs.gradient = e),
                  (e = (e = _(e).replace(
                    j._radial_gradient,
                    function (t, e, r) {
                      return (
                        (n = "radial"),
                        e &&
                          r &&
                          ((e = w(e)),
                          (r = w(r)),
                          0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                            (r =
                              c.sqrt(0.25 - i(e - 0.5, 2)) *
                                (2 * (0.5 < r) - 1) +
                              0.5),
                          (s = e + A + r)),
                        ""
                      );
                    }
                  )).split(/\s*\-\s*/)),
                  "linear" == n)
                ) {
                  var a = e.shift(),
                    a = -w(a);
                  if (isNaN(a)) return null;
                }
                var o = j._parseDots(e);
                if (!o) return null;
                if (((t = t.shape || t.node), o.length)) {
                  t.removeChild(r),
                    (r.on = !0),
                    (r.method = "none"),
                    (r.color = o[0].color),
                    (r.color2 = o[o.length - 1].color);
                  for (var l = [], h = 0, u = o.length; h < u; h++)
                    o[h].offset && l.push(o[h].offset + A + o[h].color);
                  (r.colors = l.length ? l.join() : "0% " + r.color),
                    "radial" == n
                      ? ((r.type = "gradientTitle"),
                        (r.focus = "100%"),
                        (r.focussize = "0 0"),
                        (r.focusposition = s),
                        (r.angle = 0))
                      : ((r.type = "gradient"), (r.angle = (270 - a) % 360)),
                    t.appendChild(r);
                }
                return 1;
              },
              t = j.el;
            ((u.prototype = t).constructor = u),
              (t.transform = function (t) {
                if (null == t) return this._.transform;
                var e,
                  r = this.paper._viewBoxShift,
                  i = r
                    ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                    : "";
                r &&
                  (e = t =
                    _(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                  j._extractTransform(this, i + t);
                var n = this.matrix.clone(),
                  s = this.skew,
                  a = this.node,
                  o = ~_(this.attrs.fill).indexOf("-"),
                  r = !_(this.attrs.fill).indexOf("url(");
                return (
                  n.translate(1, 1),
                  r || o || "image" == this.type
                    ? ((s.matrix = "1 0 0 1"),
                      (s.offset = "0 0"),
                      (i = n.split()),
                      (o && i.noRotation) || !i.isSimple
                        ? ((a.style.filter = n.toFilter()),
                          (t = this.getBBox()),
                          (r = this.getBBox(1)),
                          (o = t.x - r.x),
                          (r = t.y - r.y),
                          (a.coordorigin = o * -M + A + r * -M),
                          v(this, 1, 1, o, r, 0))
                        : ((a.style.filter = ""),
                          v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate)))
                    : ((a.style.filter = ""),
                      (s.matrix = _(n)),
                      (s.offset = n.offset())),
                  e && (this._.transform = e),
                  this
                );
              }),
              (t.rotate = function (t, e, r) {
                return this.removed
                  ? this
                  : null != t
                  ? ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])), (r = w(t[2]))),
                    (t = w(t[0])),
                    null == r && (e = r),
                    (null != e && null != r) ||
                      ((e = (i = this.getBBox(1)).x + i.width / 2),
                      (r = i.y + i.height / 2)),
                    (this._.dirtyT = 1),
                    this.transform(this._.transform.concat([["r", t, e, r]])),
                    this)
                  : void 0;
                var i;
              }),
              (t.translate = function (t, e) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 && (e = w(t[1])),
                    (t = w(t[0]) || 0),
                    (e = +e || 0),
                    this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                  this
                );
              }),
              (t.scale = function (t, e, r, i) {
                return (
                  this.removed ||
                    ((t = _(t).split(T)).length - 1 &&
                      ((e = w(t[1])),
                      (r = w(t[2])),
                      (i = w(t[3])),
                      isNaN(r) && (r = null),
                      isNaN(i) && (i = null)),
                    (t = w(t[0])),
                    null == e && (e = t),
                    null == i && (r = i),
                    (null != r && null != i) || (n = this.getBBox(1)),
                    (r = null == r ? n.x + n.width / 2 : r),
                    (i = null == i ? n.y + n.height / 2 : i),
                    this.transform(
                      this._.transform.concat([["s", t, e, r, i]])
                    ),
                    (this._.dirtyT = 1)),
                  this
                );
                var n;
              }),
              (t.hide = function () {
                return this.removed || (this.node.style.display = "none"), this;
              }),
              (t.show = function () {
                return this.removed || (this.node.style.display = ""), this;
              }),
              (t._getBBox = function () {
                return this.removed
                  ? {}
                  : {
                      x: this.X + (this.bbx || 0) - this.W / 2,
                      y: this.Y - this.H,
                      width: this.W,
                      height: this.H,
                    };
              }),
              (t.remove = function () {
                if (!this.removed && this.node.parentNode) {
                  for (var t in (this.paper.__set__ &&
                    this.paper.__set__.exclude(this),
                  j.eve.unbind("raphael.*.*." + this.id),
                  j._tear(this, this.paper),
                  this.node.parentNode.removeChild(this.node),
                  this.shape && this.shape.parentNode.removeChild(this.shape),
                  this))
                    this[t] =
                      "function" == typeof this[t]
                        ? j._removedFactory(t)
                        : null;
                  this.removed = !0;
                }
              }),
              (t.attr = function (t, e) {
                if (this.removed) return this;
                if (null == t) {
                  var r,
                    i = {};
                  for (r in this.attrs)
                    this.attrs[b](r) && (i[r] = this.attrs[r]);
                  return (
                    i.gradient &&
                      "none" == i.fill &&
                      (i.fill = i.gradient) &&
                      delete i.gradient,
                    (i.transform = this._.transform),
                    i
                  );
                }
                if (null == e && j.is(t, "string")) {
                  if (
                    t == S &&
                    "none" == this.attrs.fill &&
                    this.attrs.gradient
                  )
                    return this.attrs.gradient;
                  for (
                    var n = t.split(T), s = {}, a = 0, o = n.length;
                    a < o;
                    a++
                  )
                    (t = n[a]) in this.attrs
                      ? (s[t] = this.attrs[t])
                      : j.is(this.paper.customAttributes[t], "function")
                      ? (s[t] = this.paper.customAttributes[t].def)
                      : (s[t] = j._availableAttrs[t]);
                  return o - 1 ? s : s[n[0]];
                }
                if (this.attrs && null == e && j.is(t, "array")) {
                  for (s = {}, a = 0, o = t.length; a < o; a++)
                    s[t[a]] = this.attr(t[a]);
                  return s;
                }
                var l, h;
                for (h in (null != e && ((l = {})[t] = e),
                null == e && j.is(t, "object") && (l = t),
                l))
                  f("raphael.attr." + h + "." + this.id, this, l[h]);
                if (l) {
                  for (h in this.paper.customAttributes)
                    if (
                      this.paper.customAttributes[b](h) &&
                      l[b](h) &&
                      j.is(this.paper.customAttributes[h], "function")
                    ) {
                      var u,
                        c = this.paper.customAttributes[h].apply(
                          this,
                          [].concat(l[h])
                        );
                      for (u in ((this.attrs[h] = l[h]), c))
                        c[b](u) && (l[u] = c[u]);
                    }
                  l.text &&
                    "text" == this.type &&
                    (this.textpath.string = l.text),
                    p(this, l);
                }
                return this;
              }),
              (t.toFront = function () {
                return (
                  this.removed || this.node.parentNode.appendChild(this.node),
                  this.paper &&
                    this.paper.top != this &&
                    j._tofront(this, this.paper),
                  this
                );
              }),
              (t.toBack = function () {
                return (
                  this.removed ||
                    (this.node.parentNode.firstChild != this.node &&
                      (this.node.parentNode.insertBefore(
                        this.node,
                        this.node.parentNode.firstChild
                      ),
                      j._toback(this, this.paper))),
                  this
                );
              }),
              (t.insertAfter = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[t.length - 1]),
                    t.node.nextSibling
                      ? t.node.parentNode.insertBefore(
                          this.node,
                          t.node.nextSibling
                        )
                      : t.node.parentNode.appendChild(this.node),
                    j._insertafter(this, t, this.paper)),
                  this
                );
              }),
              (t.insertBefore = function (t) {
                return (
                  this.removed ||
                    (t.constructor == j.st.constructor && (t = t[0]),
                    t.node.parentNode.insertBefore(this.node, t.node),
                    j._insertbefore(this, t, this.paper)),
                  this
                );
              }),
              (t.blur = function (t) {
                var e = this.node.runtimeStyle,
                  r = (r = e.filter).replace(i, "");
                return (
                  0 != +t
                    ? ((this.attrs.blur = t),
                      (e.filter =
                        r +
                        A +
                        " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                        (+t || 1.5) +
                        ")"),
                      (e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5))))
                    : ((e.filter = r), (e.margin = 0), delete this.attrs.blur),
                  this
                );
              }),
              (j._engine.path = function (t, e) {
                var r = R("shape");
                (r.style.cssText = h),
                  (r.coordsize = M + A + M),
                  (r.coordorigin = e.coordorigin);
                var i = new u(r, e),
                  n = { fill: "none", stroke: "#000" };
                t && (n.path = t),
                  (i.type = "path"),
                  (i.path = []),
                  (i.Path = ""),
                  p(i, n),
                  e.canvas.appendChild(r);
                e = R("skew");
                return (
                  (e.on = !0),
                  r.appendChild(e),
                  (i.skew = e),
                  i.transform(""),
                  i
                );
              }),
              (j._engine.rect = function (t, e, r, i, n, s) {
                var a = j._rectPath(e, r, i, n, s),
                  o = t.path(a),
                  t = o.attrs;
                return (
                  (o.X = t.x = e),
                  (o.Y = t.y = r),
                  (o.W = t.width = i),
                  (o.H = t.height = n),
                  (t.r = s),
                  (t.path = a),
                  (o.type = "rect"),
                  o
                );
              }),
              (j._engine.ellipse = function (t, e, r, i, n) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - n),
                  (t.W = 2 * i),
                  (t.H = 2 * n),
                  (t.type = "ellipse"),
                  p(t, { cx: e, cy: r, rx: i, ry: n }),
                  t
                );
              }),
              (j._engine.circle = function (t, e, r, i) {
                (t = t.path()), t.attrs;
                return (
                  (t.X = e - i),
                  (t.Y = r - i),
                  (t.W = t.H = 2 * i),
                  (t.type = "circle"),
                  p(t, { cx: e, cy: r, r: i }),
                  t
                );
              }),
              (j._engine.image = function (t, e, r, i, n, s) {
                var a = j._rectPath(r, i, n, s),
                  o = t.path(a).attr({ stroke: "none" }),
                  l = o.attrs,
                  h = o.node,
                  t = h.getElementsByTagName(S)[0];
                return (
                  (l.src = e),
                  (o.X = l.x = r),
                  (o.Y = l.y = i),
                  (o.W = l.width = n),
                  (o.H = l.height = s),
                  (l.path = a),
                  (o.type = "image"),
                  t.parentNode == h && h.removeChild(t),
                  (t.rotate = !0),
                  (t.src = e),
                  (t.type = "tile"),
                  (o._.fillpos = [r, i]),
                  (o._.fillsize = [n, s]),
                  h.appendChild(t),
                  v(o, 1, 1, 0, 0, 0),
                  o
                );
              }),
              (j._engine.text = function (t, e, r, i) {
                var n = R("shape"),
                  s = R("path"),
                  a = R("textpath");
                (e = e || 0),
                  (r = r || 0),
                  (i = i || ""),
                  (s.v = j.format(
                    "m{0},{1}l{2},{1}",
                    k(e * M),
                    k(r * M),
                    k(e * M) + 1
                  )),
                  (s.textpathok = !0),
                  (a.string = _(i)),
                  (a.on = !0),
                  (n.style.cssText = h),
                  (n.coordsize = M + A + M),
                  (n.coordorigin = "0 0");
                var o = new u(n, t),
                  l = {
                    fill: "#000",
                    stroke: "none",
                    font: j._availableAttrs.font,
                    text: i,
                  };
                (o.shape = n),
                  (o.path = s),
                  (o.textpath = a),
                  (o.type = "text"),
                  (o.attrs.text = _(i)),
                  (o.attrs.x = e),
                  (o.attrs.y = r),
                  (o.attrs.w = 1),
                  (o.attrs.h = 1),
                  p(o, l),
                  n.appendChild(a),
                  n.appendChild(s),
                  t.canvas.appendChild(n);
                t = R("skew");
                return (
                  (t.on = !0),
                  n.appendChild(t),
                  (o.skew = t),
                  o.transform(""),
                  o
                );
              }),
              (j._engine.setSize = function (t, e) {
                var r = this.canvas.style;
                return (
                  (this.width = t) == +t && (t += "px"),
                  (this.height = e) == +e && (e += "px"),
                  (r.width = t),
                  (r.height = e),
                  (r.clip = "rect(0 " + t + " " + e + " 0)"),
                  this._viewBox &&
                    j._engine.setViewBox.apply(this, this._viewBox),
                  this
                );
              }),
              (j._engine.setViewBox = function (t, e, r, i, n) {
                j.eve("raphael.setViewBox", this, this._viewBox, [
                  t,
                  e,
                  r,
                  i,
                  n,
                ]);
                var s,
                  a = this.width,
                  o = this.height,
                  l = 1 / C(r / a, i / o);
                return (
                  n &&
                    (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s),
                    i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)),
                  (this._viewBox = [t, e, r, i, !!n]),
                  (this._viewBoxShift = { dx: -t, dy: -e, scale: l }),
                  this.forEach(function (t) {
                    t.transform("...");
                  }),
                  this
                );
              }),
              (j._engine.initWin = function (t) {
                var e = t.document;
                e.createStyleSheet().addRule(
                  ".rvml",
                  "behavior:url(#default#VML)"
                );
                try {
                  e.namespaces.rvml ||
                    e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    (R = function (t) {
                      return e.createElement("<rvml:" + t + ' class="rvml">');
                    });
                } catch (t) {
                  R = function (t) {
                    return e.createElement(
                      "<" +
                        t +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                    );
                  };
                }
              }),
              j._engine.initWin(j._g.win),
              (j._engine.create = function () {
                var t = j._getContainer.apply(0, arguments),
                  e = t.container,
                  r = t.height,
                  i = t.width,
                  n = t.x,
                  s = t.y;
                if (!e) throw new Error("VML container not found.");
                var a = new j._Paper(),
                  o = (a.canvas = j._g.doc.createElement("div")),
                  t = o.style,
                  n = n || 0,
                  s = s || 0,
                  i = i || 512,
                  r = r || 342;
                return (
                  (a.width = i) == +i && (i += "px"),
                  (a.height = r) == +r && (r += "px"),
                  (a.coordsize = 216e5 + A + 216e5),
                  (a.coordorigin = "0 0"),
                  (a.span = j._g.doc.createElement("span")),
                  (a.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                  o.appendChild(a.span),
                  (t.cssText = j.format(
                    "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                    i,
                    r
                  )),
                  1 == e
                    ? (j._g.doc.body.appendChild(o),
                      (t.left = n + "px"),
                      (t.top = s + "px"),
                      (t.position = "absolute"))
                    : e.firstChild
                    ? e.insertBefore(o, e.firstChild)
                    : e.appendChild(o),
                  (a.renderfix = function () {}),
                  a
                );
              }),
              (j.prototype.clear = function () {
                j.eve("raphael.clear", this),
                  (this.canvas.innerHTML = ""),
                  (this.span = j._g.doc.createElement("span")),
                  (this.span.style.cssText =
                    "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                  this.canvas.appendChild(this.span),
                  (this.bottom = this.top = null);
              }),
              (j.prototype.remove = function () {
                for (var t in (j.eve("raphael.remove", this),
                this.canvas.parentNode.removeChild(this.canvas),
                this))
                  this[t] =
                    "function" == typeof this[t] ? j._removedFactory(t) : null;
                return !0;
              });
            var e,
              r = j.st;
            for (e in t)
              t[b](e) &&
                !r[b](e) &&
                (r[e] = (function (r) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[r].apply(t, e);
                    });
                  };
                })(e));
          }
        })(),
        r.was ? (d.win.Raphael = j) : (t.Raphael = j);
    })(t, t.eve);
  })(this);

/* Map path and default settings - you can edit this */
var simplemaps_countrymap_mapinfo = {
  map_name: "country",
  initial_view: { x: 0, y: 0, x2: 1000, y2: 569 },
  state_bbox_array: {
    NPBA: { x2: 718, cy: "350.5", cx: "655.4", y: 293, x: 561, y2: 416 },
    NPKO: { x2: 907, cy: "436.8", cx: "851.4", y: 341, x: 814, y2: 543 },
    NPNA: { x2: 658, cy: "418.9", cx: "596.8", y: 350, x: 480, y2: 494 },
    NPRA: { x2: 394, cy: "303.8", cx: "324.8", y: 210, x: 261, y2: 377 },
    NPBH: { x2: 329, cy: "279.3", cx: "222.8", y: 192, x: 153, y2: 354 },
    NPJA: { x2: 778, cy: "446.8", cx: "701.3", y: 316, x: 640, y2: 515 },
    NPKA: { x2: 451, cy: "145", cx: "312.1", y: 26, x: 185, y2: 244 },
    NPMA: { x2: 163, cy: "158.5", cx: "99.3", y: 53, x: 45, y2: 264 },
    NPDH: { x2: 515, cy: "270.6", cx: "429.6", y: 171, x: 365, y2: 335 },
    NPME: { x2: 954, cy: "467.4", cx: "913.9", y: 347, x: 874, y2: 540 },
    NPSA: { x2: 844, cy: "439.9", cx: "785.1", y: 322, x: 729, y2: 534 },
    NPSE: { x2: 242, cy: "174.3", cx: "172.6", y: 71, x: 97, y2: 286 },
    NPLU: { x2: 536, cy: "369.7", cx: "402.7", y: 303, x: 341, y2: 420 },
    NPGA: { x2: 619, cy: "295.2", cx: "524.9", y: 219, x: 426, y2: 366 },
  },
  paths: {
    NPBH: "M215.1 192l2.8 3.5 0.2 3.2-0.2 1.2 0 0.9 0.7 0.6 2.1 0.7 3.9 0.7 9.2 3.2 6 1.1 1.9 0.5 1.7 1 2.5 1.2 2.2 0.7 9 0.8 10-4.6 2.3 0.7 0.4 0.4 0.4 0.2 0 0.1 0.7 1.4 0.7 0.8 1 0.6 1.4-0.1 1.4-0.6 1.7-1.9 0.6-1.3 0.7-1 0.9-0.8 1.1-0.8 0.8-0.9 1.3-2.2 0.8-0.8 1-0.8 11.1-5 1.8-0.4 8.4 0.2 5.1 2.4 0.5 1.5 0.1 1.1 0 1.2-0.3 1.3-0.2 0.9-0.3 0.9-0.3 1.3 0 0.8 0.2 0.7 0.5 0.7 0.7 0.5 2.3 1 0.9 0.2 1 0 1.3-0.4 0.9-0.5 0.1-0.1 0.4-0.3 1.2-0.8 2.5 0.2 6.7 2.9-5.1 4.7-1.4 3.3-0.5 1.8-1 2.3-1.3 1.7-12.2 9.7-6.5 4-1.2 1.2-4.1 6.1-2.3 2.3-1.4 1.2-2 1.2-0.7 0.8-0.7 1-2.3 4.6-2.8 1.6-4.9 0.1-1.6-0.2-1.5-0.3-5-2.1-4 4.9-0.8 1.9-0.5 1.9 0.2 1.1 1.7 3.9 0.5 1.9 0.1 2.7-0.4 1.7-0.7 1.4-0.7 0.7-0.6 0.4-2.7 1.1-1.1 0.6-0.7 1-0.2 0.9 0.4 1.1 0.7 0.8 0.6 1.1 0.4 1.5 0 4.7 0.7 1.1 6.8 2.9 2.3 2.6 1.2 2.8 2.5 4-5.9 3.2-1.6 4.5-1.5 2.4-0.2 1.2 0.5 1.3 0.9 1.1 3.4 2.8 1 0.9 1.9 2.5 0.7 0.7 1 0.2 0.9 0.1 1 0.2 0.9 0.6 5.1 4.6 0.9 1.6 0.5 1.6 0.1 2.1-0.2 2.7-0.1 0.7-0.3 0.6-0.4 0.6-0.7 0.6-0.6 0.5-1.2 0.5-2.3 0.4-1 0.1-2.1-0.3-0.5 0-0.7 0.3-0.5 0.3-3.4 3.4-0.6 1.4-2.6-0.8-5.7-0.6-3.3 1.5-4.5 5.3-2.6 1.8-3.1-0.3-3.1-1.8-3.1-2.4-5.5-3.2-4.5-4.8-2.4-2-2.6-0.9-5.6-1.3-2.2-1.7-0.1-0.1-1.4-2.3-2.3-1.6-9.8-5.1-1.7-1.4-0.5-1.2-0.1-1.3-0.6-1.8-1.4-2.3-2-2.2-2.4-1.7-2.5-1-1.8 0.3-0.7 1.1-0.4 1.6-1.1 1.5-1.6 0.8-1.8 0.3-1.2-0.5 0.3-1.8-1.8-0.5-0.7-1 0.4-1 1.7-0.7-1.5-3.1-6.5-7.5-1.5-3.5-2.3-7.5-2.3-3-2.6-1.4-11.1-2.1 0.1-2.1 1.3-4.9 1.2-1.7 3.8-2.3 1.3-1.1 15.6-17.1 0.8-1.1 1-1.1 0.7-2.9 0.3-2.5-0.4-2.4-3.6-8.2-1.2-4-0.7-4.3-1.1-1.9-1.5-1.4-1.6-0.9 0.5 1.6 1.4 2.9 0.4 1.6-4.5-2.6-1 0.3-1.5-3.4-1.4-1.3-1.5 0.3-1.5 0.9-1.5 0.4-1.9-1.1-4.1-3.4-5.5-5.8 0.6-1.6 1.8-1.7 2.4-1.4 2.1-0.6 2.3 0.4 2.3 0.8 4.5 2.3 5.8 4.6 2.3 0.6 7.2-1 2.4 0.2 1.2 0.5 2.6 1.7 1.1 0.4 9.8-1.2 1.9 0.6 1.8 2.3 1.7 3.6 4.8 5.6-0.4 4 1.2 0.8 0.2 0.7-1.4 1.1 0 0.9 1.1 0.1 0.9-0.2 1.9-0.8 2.7-1.6-0.3-1.5-1.5-1.5-0.9-2-0.7-3-1.5-2.6-4-4.4-5.8-8.8-1.5-0.9-1.4-2.3-0.8-2.8 0.3-2.7 5.3-6 1.2-1 1.6-0.5 7.4-5.5z",
    NPBA: "M562 355.2l1.2 0.8 0.3 0.3 0.6 0.7 0.5 0.7 0.7 0.8 0.8 0.5 1 0.3 1.1 0.1 1 0 0.9-0.1 0.9-0.3 0.8-0.8 0.6-1.3 0.4-2.5-0.2-1.8-0.5-1.9-2.2-3.7-0.4-1.2-0.3-0.8 0.2-1.4 0.6-1.2 3.5-3.4 1.6-2 5.7-11 0.9-1.1 1.1-1.1 2-1.3 2.2-0.9 3-0.6 1.2-0.7 1.1-1.2 1.4-2.8 1.8-7.1 1.1-2 1.6-1.9 4.4-3.6 1.2-1.2 2.2-4.5 1.6-1.7 2.1-1.1-0.2 1.6 0.8 1.9 2.5 1.5 2.8 0 2.2-1.1 2.2-0.5 3.5 3.3 2.1 0.9 2.2 0.5 1.8 0.1 1.5-0.4 3.1-1.4 1.3-0.2 1.4 0.7 1.1 1.1 1.1 0.9 2 0.2 1.7-0.8 2.6-2.9 1.5-1 1.9 0 1.7 0.6 3.2 1.6 2.4-0.4 2.6 0 2.6 0.3 2.4 0.6 2.3 1.6 1.5 1.5 1.4 0 2.7-4.2 0.3 1 1.1-1.4 0.3-1 1.9-0.7 0.8-0.7 0.1-1.1 0-1.2 0.3-1.1 1.6-0.3 0.5 2.8 0.2 5.6 1.8 3.3 2.1 2.7 2.5 2.4 2.9 1.9 4.9 2.2 2.4 1.5 1.7 1.9 0.4 1.4 0.5 2.8 2 2.6 0.2 1.2-0.1 1.2 0 1.5 0.9 2.9 1.2 1.8 3.9 3.5 1.4 2.3 0 2.4-0.5 2.6-0.1 2.6 1.3 3.1 2 0.8 5.1-0.6 2.8 0.3 0.4 0-2.1 5.6-0.4 3 0.3 4.5-0.1 2.8-0.4 1.2-0.7 0.7-2.5 0.5-0.7 0.2-1.1 1.1-1.5 2.3-1.8 3.9-1.4 2.3-1.3 1.8-4.4 4.8-5.3 6.6-0.5 1.8-1.3 2.4-0.7 1.2-1.3 1.3-0.5 0.8 0 0.1 0.6 1.8 0.2 0.8 0.5 5.1-2.6 2.9-6.6 1.1-1.3 0.8-0.5 0.8-0.1 1.1-0.3 1.3-1 1.7-1.2 0.6-1.6 0.1-16-1-0.8-0.3-0.7-0.4-2.4-1.9-2.8-2.6-2.8-1.5-3.3-1-3.6-0.6-4.9-0.9-7-4-1.5-1.3-1.1-1.3-0.5-1.2 0-0.2-0.4-2.9-0.2-0.8-0.5-0.7-0.5-0.7-0.5-0.8-0.4-0.8-0.2-1.4-0.9-7.9-1.5-4.7-0.5-1-0.7-0.7-1.2-0.4-5.4-1.2-5.7-2.6-1.9-0.6-1.5-0.2-7.7 0.4-1.2 0.2-3.1 1-2.3 0.2-2.5 0.7-2.4 1.5-1.8 0.6-1.4 0.1-7-0.7-1.4-4-0.5-0.8-0.8-0.8-1.2-0.6-8.2-0.3-1.8-0.4-0.5-0.5-0.1-0.6 0.5-1 0-0.7-0.4-1-1.4-2-0.8-1.3-0.5-1-0.1-0.8 0.1-0.7 0.2-0.7 0.6-1.6 0.3-0.8z",
    NPKO: "M816.7 521.1l0.4-1 2.4-2.2 0.9-1.3 0.2-1.1 0-1.4-0.2-1.4-0.4-0.9-0.3-1.2 0.6-1.6 1.6-2.7 2.5-10.5 1.8-1.6 2.5-1.1 7.8-8.3 3.1-1.9 1.6-1.3 0.6-1.5 0.1-0.8 0.7-2.6 0.4-0.9 0.6-2.5-0.5-2.3-1.9-0.7-3.9 0.1-13.3 3.1-3.7-0.6-1-19.1-0.5-1.5-1.1-1.5-2.2-2.3-0.6-1.6-0.3-1.8 0.9-7.7 0.1-2.2-0.6-5.6 0.3-2 0.6-0.7 0.9-0.5 1-0.4 0.8-0.5 0.6-0.8 0.3-0.8 0.1-1.7-0.4-2.1-4.4-7.6-1.3-4.6 0.4-1.9 0.4-0.7 2-2.3 1.3-1.5 0.4-1.3 1.1-5.1 0.5-1.7 2.1-12.7 2.1-7.4 0.2-1.2 0-1.8-0.9-5.2 0.2-2.9 0.6-2.5 0-0.7-0.2-1.2-0.8-2.6-1.2-5.6 0.3-8 0-0.2 0.6-0.2 0.7 0 1.3 0.1 2.8 1.7 3.5 3.8 6.1 8 4.4 2.4 2.9 0.2 5.7-0.7 6.4 1.7 2.6-1.5 1.8-1.6 2.6 1.8 0.2 0 0.8-0.1 1.3-1.4 0-0.1 0.8-0.6 0.4-0.2-0.4 1.2-1.3 2.2 0 1.9 2-0.1 9.9-2.8 4.3-1.1 1.9-0.2 2.2 0.6 0.6 0.7 0.4 1 0.6 1 0.9 0.7 1.9 0.1 3.4-1.9 1.7-0.5 2.7 0.5 2.1 0.8-2.7 7.6-2.4 5.1-1.8 2.7-1.3 1.4-1.1 0.7-0.8 0-0.9-0.4-0.7-0.6-0.7-0.4-0.8-0.2-0.9 0.3-0.5 1-1 4.5-1.2 3.4-1.3 2.3-2.1 2.8-1.2 2.1-0.9 2-1.3 5.1-1.1 7.5-0.9 3.1-0.3 2.3-0.1 1.9 0.4 1.4 0.7 1.2 6.7 7.3 0.8 0.7 1.2 0.5 5 1 10.9 4.5 4.7 1.8 1.7 1.3 0.5 0.8 0.2 0.8 0 0.8-0.2 0.7-0.7 0.8-1.7 1.6-0.5 0.9-0.3 1.3-0.3 1-0.5 1-0.9 0.7-1 0.6-5 1.7-1.3 0.7-2.9 2.2-6.2 6.5-5.3 6.6-2.2 2.1 2.5 3.5 2.5 7.3 0.9 1.5 1 1 1.9 1.1 4.4 1.8 0.2 0.1 5.5 7.6 1.7 3.3 0.2 0.9 0 2-2.4 10.5-0.3 27.2 0.2 1.9 0.5 1.7-2.7 2.1-4.2 1.9-3.9-1.1-8-4.6-3.4-0.6-3.7 0.2-3.6 1-3.1 1.9-1.3 1.8-2.1 4.5-1.4 1.2-1.5-0.3-4.7-2.1-1.4-0.9-1-1.7-0.8-1.9-1.2-1.2-3.4 1.1-6 0.7-3.2-1.4-2.5-3.4-1.9-4.1-1.1-3.7-1.3-6.2-0.1-2.1-0.3-2.3-1.3 0-1.6 1.4-3.4 3.5-1.4 1.1-4.2 1.4z",
    NPNA: "M535 365.7l1.6-0.5 3.8 0.4 0.5-0.3-0.2-0.8-0.5-0.5-0.4-0.4-0.6-0.9-0.4-1.2 0.3-2 0.8-1 5.1-2.1 6-4.2 2.3-1.9 0.7-0.3 1-0.2 1.2 0.2 1.1 0.3 1 0.5 1.1 0.8 1.3 1.5 1.3 2.1-0.3 0.8-0.6 1.6-0.2 0.7-0.1 0.7 0.1 0.8 0.5 1 0.8 1.3 1.4 2 0.4 1 0 0.7-0.5 1 0.1 0.6 0.5 0.5 1.8 0.4 8.2 0.3 1.2 0.6 0.8 0.8 0.5 0.8 1.4 4 7 0.7 1.4-0.1 1.8-0.6 2.4-1.5 2.5-0.7 2.3-0.2 3.1-1 1.2-0.2 7.7-0.4 1.5 0.2 1.9 0.6 5.7 2.6 5.4 1.2 1.2 0.4 0.7 0.7 0.5 1 1.5 4.7 0.9 7.9 0.2 1.4 0.4 0.8 0.5 0.8 0.5 0.7 0.5 0.7 0.2 0.8 0.4 2.9 0 0.2 0.5 1.2 1.1 1.3 1.5 1.3 7 4 4.9 0.9 3.6 0.6 3.3 1 2.8 1.5 2.8 2.6-5.2 3.8-1.8 2.1-0.2 0.9 0 1.1 0.4 1.1 0.5 0.8 1 0.8 2.7 1.4 0.9 0.7 0.7 0.6 0.5 0.6 0.7 1.2 0.6 1.7 0.6 2.9 0.1 1.4-0.2 1.1-0.3 0.5-0.2 0.7-0.2 0.9-0.3 3.2-0.8 2.9-7.1 9.9-1.6 2.9-0.5 1.5-0.2 1.4 0.1 1 0.2 1.1 0.2 0.7 0.2 1.2 0.2 1.6-0.2 2.2-0.4 1.4-0.6 1.4-3.7 5.4-1.7 4.6-1 4-0.2 2.5 0.2 5.1 0 0.1-0.3 0.3-1.8 1.3-3.9 1.2-1.6 0.1-10.4-2.8-3.2-3.4 0-4.3-0.4-3.8-4.4-1.9-2.5 0.3-6.3 2.5-2.9-0.3-0.2-1.6 0.2-1.9-1.9-1-1.5-0.2-1.3-0.4-2.6-1.4-1-2.2-0.6-2.6-1.6-2.4-2.5-1.5-5.6-1.8-2.6-1.6-1.2-2-1.8-0.4-1.8 0.7-1.5 1.1-1.3 0-13.4-3.6-1.5-1.1-0.6-2.6 1-2.9 1.6-2.9 1.1-2.7 0.6-5-0.3-4.8-1-4.7-1.8-4.6-2.9-4.2-3.3-2.3-32.1-5.9-2.4-1.6-2.1-3-1.1-2.3-1.5-1.2-3.4 0.6-1.1-0.4-1.2-3-1-1.2-2.7-1.1-1.2-0.7-1.1-1.1-0.4-2.3-2-0.4-2.2 0.9-5.7 7-2.4 1.7-3.5 0.1-4.5-0.8-1.4-0.5-0.1 0 0.1 0 1.7-1.5 0.4-1.3-0.1-1.5 0-1.4 0.8-1.4 1.3-1.6-0.4-0.6-2.4 0-1-0.4-0.1-1 0.7-1.1 0.8-0.9 1-0.2 1.3 0 7.5 1 2.5-0.2 2.3-1.5 3.8 2.7 1.4-1.6 4.5-7.6 2.6-3 1.8 0.8 1.4-1.1 2.1-3 1.4-0.6 1.2 0.1 1.4 0.3 1.8 0.2 3-1.1 2.9-2.2 2.8-1.4 3.1 1.1 3.1-1.9 1.1-1.4 0.4-1.8-0.4-1.5-1-2.3z",
    NPME: "M896.4 534.9l-0.5-1.7-0.2-1.9 0.3-27.2 2.4-10.5 0-2-0.2-0.9-1.7-3.3-5.5-7.6-0.2-0.1-4.4-1.8-1.9-1.1-1-1-0.9-1.5-2.5-7.3-2.5-3.5 2.2-2.1 5.3-6.6 6.2-6.5 2.9-2.2 1.3-0.7 5-1.7 1-0.6 0.9-0.7 0.5-1 0.3-1 0.3-1.3 0.5-0.9 1.7-1.6 0.7-0.8 0.2-0.7 0-0.8-0.2-0.8-0.5-0.8-1.7-1.3-4.7-1.8-10.9-4.5-5-1-1.2-0.5-0.8-0.7-6.7-7.3-0.7-1.2-0.4-1.4 0.1-1.9 0.3-2.3 0.9-3.1 1.1-7.5 1.3-5.1 0.9-2 1.2-2.1 2.1-2.8 1.3-2.3 1.2-3.4 1-4.5 0.5-1 0.9-0.3 0.8 0.2 0.7 0.4 0.7 0.6 0.9 0.4 0.8 0 1.1-0.7 1.3-1.4 1.8-2.7 2.4-5.1 2.7-7.6 2.4 1 2.1-0.2 0.2 0 0.5 0 0.2-0.1 3.2-1.6 2.7-2.4 2.1-3 1.7-3.5 1.3-2 1.2-0.2 2.2 1.2 8.8 0.4 1.1 0.4 2.4 1.2 1.4 0.3 1.4-0.3 3-1.2 1.3-0.1 2.6 0.8 4.8 2.7 2.5 0.6 2.7 0.6 1.5 0.6 0.9 0.7 0.3 1.5-1.4 2.4 0.6 5.1-1.2 3.2-1.6 3.3-2.7 10.5-6.9 11.9-2.8 6.3-0.2 1.4 0.2 1.2 0.5 2.5 0.3 0.5 1 1.1 0.2 0.5-0.2 1.1-0.6 0.7-0.5 0.6-0.5 0.9-0.9 2.8-0.3 1.4 0.1 1.8 0.5 1.4 1.4 2.4 0.3 1.4-0.7 3.1-2.7 6.2-1.7 3.8-0.5 8.8-1.6 3.7-0.2 1 0.2 1 0.5 1 1.8 1.7 2 4.5 2 1.3 1.7 0.8 1.5 1.4 2.3 3.3 2.3 4 1.6 4.4 1 1.9 2.5 3.9 1 1.9 0.4 2.2 0.4 5.4 1 4.9 0.1 2.4-0.1 2.4-0.5 2.4-1.9 5.5-5 9.9-1.6 5.4-0.8 2.7-0.1 1.2 0.3 1.6-0.9 5.1-3.3 6-4.2 4.5-3.5 0.4-1.6-1.5-3.6-2.2-1.6-1.5-0.7-1.2-0.7-2.2-0.5-1-0.3 0.1-2.7-2.2-0.1-0.5-2 0.5-3.4 2.9-1.9 0-2-1.1-1.9-0.7-1.5 0.6-0.7 2.6-0.8 1.9-1.7 0.9-1.8-0.3-1.5-1.3-1.8-1-2.5 0.9-1.2 0.9z",
    NPJA: "M656.9 412.8l2.4 1.9 0.7 0.4 0.8 0.3 16 1 1.6-0.1 1.2-0.6 1-1.7 0.3-1.3 0.1-1.1 0.5-0.8 1.3-0.8 6.6-1.1 2.6-2.9-0.5-5.1-0.2-0.8-0.6-1.8 0-0.1 0.5-0.8 1.3-1.3 0.7-1.2 1.3-2.4 0.5-1.8 5.3-6.6 4.4-4.8 1.3-1.8 1.4-2.3 1.8-3.9 1.5-2.3 1.1-1.1 0.7-0.2 2.5-0.5 0.7-0.7 0.4-1.2 0.1-2.8-0.3-4.5 0.4-3 2.1-5.6 0.8-0.2 1.5-0.7 3.5-3.5 0.7-0.5-0.1-0.8 1.4-0.6-0.1-0.2-0.5-0.7-0.2-0.1-0.6-0.7-0.4-0.4-0.1-1.3-0.2-0.7-0.1-0.6-0.3-0.8-0.1-0.8-0.2-0.7-0.7-0.9-0.8-0.8-0.2-0.2-0.4-0.8 0-1 0.2-1.3 0.1-0.8 0.1-0.6 0.1-0.9 0.2-1.2-0.6-1.9-0.2-1.1 0-0.4 0.8-0.8 1.8 0.1 1.1 0.2 0.1 0-0.4-1.5 3.5-2.6 0.2-0.2 0.8-0.9 0.6-0.5 0.4-0.3 1.4-0.9 0.2-1 0.2 0 0.1 0.3 0 0.4 0.1 0.1 0.1-0.1 0.8 1.8 0.2 3.1-0.7 2.6-1 2.1 0.3 1.2 0.8 0.9 0.8 1.5 0.8 3.6 0.7 1.6 1.7 0.9 0.1 0.1 2.2 0.6 2.3 0.3 2.1 0.5 1.9 1.4 2.6 3.3 1.1 0.8 1.1 0.2 0.9-0.3 0.9-0.5 1-0.2 1 0.5 3.8 3.2 2.2 0.9 1.5-0.1 1.4-0.8 0.2 0.2 0.3-0.5 2.2-1.1 2.4-1.3 1.5-1.8 0.2-0.8 0.3-0.5 0.1-0.2 0.2-0.8 1.9 2 3.3 5.2 0.8 3.3 0 3.4 0.6 6.4 1 3.6 0.1 2.6 0.3 2-0.4 1.4-0.5 0.9-0.8 1.3-0.9 1.8-1.1 3.7-1.2 2.6-1.2 1.7-1.4 1-2.7 0.9-2.3 0.4-1.1 0.4-0.8 0.4-3.6 3.7-1.7 1.2-5.5 6.3-10 9.3-1.7 2.5-1.9 4.3-1 2.8-0.2 1.1-0.1 1.1 0.2 0.9 1.1 2.7 0.1 1.1-0.3 1.6-0.5 2-2.9 5 0 0.8 1.8 0.5 6.3-0.1 3.6 0.8 1.6 0.5 1 0.7 0.7 1.1 0.8 0.9 0.5 0.5 3.5 2.1 0.5 0.5 0.3 0.4-0.6 1.2-3.4 4.1-3.1 2.7 0 0.7 0.3 0.6 0.6 0.5 0.5 0.5 0.6 0.7 0.9 3.1 0.8 3.7 0.1 3.7-0.4 1.8-0.7 1.1-4.7 1.4-2.9 2-3.3 4.7-2.6 1-1.1-0.1-1.5-0.4-2.9-1.3-1 0-1 0.5-1.5 1.8-0.5 0.9-0.3 0.8 0 0.9 0.1 0.7 0.9 2.6 0.3 1.6 0 6.3 0.1 1.3 0.3 1.3 0.5 1.4 0.7 1.4 2 3.1 0.6 1.1 0.4 1.5-0.1 1.2-0.4 1.1-5.2 11.2-0.2 0.4-0.2 0-2.5 0.1-0.7-0.2-0.6-0.6-7.7-4.8-3.4-1.1-3.9 1.2-2.7 0.3-1.9 1.2-7.7 6.6-2.4 1.4-1.8 0.3-0.8-0.7-0.2-1 0-1.1-0.2-1-0.9-0.8-1.1 0.3-1.1 0.4-1-0.2-6-4.8-1.6-2-1.2-4.4 0.8-9.2-0.8-4.3-1.6-1.9-8.8-4.9-1.2-0.4-8.8 3.5-4.9 2.6-4 2.2-2.1 0.6-2-0.6-1.9-0.1-1.9 1.7-1.5 1.9 0-0.1-0.2-5.1 0.2-2.5 1-4 1.7-4.6 3.7-5.4 0.6-1.4 0.4-1.4 0.2-2.2-0.2-1.6-0.2-1.2-0.2-0.7-0.2-1.1-0.1-1 0.2-1.4 0.5-1.5 1.6-2.9 7.1-9.9 0.8-2.9 0.3-3.2 0.2-0.9 0.2-0.7 0.3-0.5 0.2-1.1-0.1-1.4-0.6-2.9-0.6-1.7-0.7-1.2-0.5-0.6-0.7-0.6-0.9-0.7-2.7-1.4-1-0.8-0.5-0.8-0.4-1.1 0-1.1 0.2-0.9 1.8-2.1 5.2-3.8z",
    NPKA: "M450.3 187.6l0.7 4.4-0.4 1-1.1 1.4-1.1 1.1-1.2 1.5-0.5 1.5-0.9 9.8-0.5 1.9-0.7 1.3-1 0.9-6.2 8-2 3.5-3.8 10.6-1.5 2.1-10 3.7-2.5 1.5-2.4 0.9-5.3 1.1-2.1 0-3.6-0.5-2.6 0-1.8-0.2-2.9-1-3.2-0.5-4.4-1-16.6-8.4-2.3-0.9-1.6-0.3-6.8 0.5-5.8-0.5-1.4 0.1-1.2 0.5-1.9 0.3-1.6-0.6-5.3-3.6-0.7-1.1-0.1-1.3 0-1.7 0-1.9-0.3-1.7-0.6-1-4.3-4.5-1.9-1.7-1.5-0.8-6.5-2-6.7-2.9-2.5-0.2-1.2 0.8-0.4 0.3-0.1 0.1-0.9 0.5-1.3 0.4-1 0-0.9-0.2-2.3-1-0.7-0.5-0.5-0.7-0.2-0.7 0-0.8 0.3-1.3 0.3-0.9 0.2-0.9 0.3-1.3 0-1.2-0.1-1.1-0.5-1.5-5.1-2.4-8.4-0.2-1.8 0.4-11.1 5-1 0.8-0.8 0.8-1.3 2.2-0.8 0.9-1.1 0.8-0.9 0.8-0.7 1-0.6 1.3-1.7 1.9-1.4 0.6-1.4 0.1-1-0.6-0.7-0.8-0.7-1.4 0-0.1-0.4-0.2-0.4-0.4-2.3-0.7-10 4.6-9-0.8-2.2-0.7-2.5-1.2-1.7-1-1.9-0.5-6-1.1-9.2-3.2-3.9-0.7-2.1-0.7-0.7-0.6 0-0.9 0.2-1.2-0.2-3.2-2.8-3.5-1.5-1.5-1.5-1.2-3.3-2.1-0.8-0.7-0.5-1.6-0.3-2.1 0.9-7.8-0.9-2.1-0.4-1.3-0.1-1.3 0.5-1.2 1-1.4 3.5-3.5 1.7-1.3 4.6-1.5 1.6-0.2 2.1-0.1 0.9 0.2 0.8 0.5 2.8 2.6 1.2 0.5 1.4 0.1 1.9-0.3 3.9-1.2 0.7-2.3-1.2-2.1-1.1-2.4-0.5-3 0.1-3 0.3-2.5 0.7-2.1 1.2-1.7 4.4-3 1.8-1.8 0.7-2.7 0.1-2-0.1-2.7-0.4-1.2-0.6-0.8-2.2-0.6-0.6-0.1-1.8-0.9-1.4-1-1.3-1.2-1.1-1.5-0.7-2.3-0.1-1.5 0.1-1.1 3.1-10 0.5-3.2 0.2-4.1 0.3-1.6 0.4-1 0.6-0.7 1.5-1.2 0.9-0.8 0.6-0.8 0.5-1 0.2-1-0.1-1.5-0.5-1.2-1.1-0.9-1.5-0.5-4.3-0.9-1.9-0.8-1.4-1.1-1.4-0.5-2-0.4-8.3 0.2-1.3 0.2-1.3 0.3-2.3 1.4-2.8 4.2-0.7 0.5-0.6 0-0.8-0.2-1.1-0.6-2.3-1.8-0.5-1-0.1-1.1 0.3-2.5 0.1-1.4-0.2-1.2-0.5-1.2-0.4-0.8-0.6-0.8-1.1-2.4-0.7-2.1-0.3-0.2-0.7-0.2-2.5 0-3.6 0.4-1.1-0.3-0.8-0.5-1.4-1.2-1-0.6-2.4-1-2.1-1.5 0.3-1.1 0.5-1.3 0.3-1.9 0-1-0.1-1.4-0.4-1.1-0.8-0.8-0.1-0.1 1.7-0.1 1.8 0.1 1.5-0.2 1.8-1.3 1.3-1.7 0.8-2.2 0.1-1.2 0.6-0.4 0.7-0.5 0.1 0 1.1-0.5 1.1-1.1 0.5-0.9 0.2-0.5-0.3-2.4 0-1.5 1-1.7 0.9-1.1 0.6-1 0-0.9-0.5-0.6-0.6-0.4-0.4-0.2-0.2-0.4 0.2-0.3 0.8-0.4 1.1-0.9 0.6-0.5-0.1-0.5-0.5-0.4-1.3-0.4-0.6-0.2-0.6-0.3-0.1-0.6 0.6-0.9 0.2-0.3 0.2-0.4 0-0.6-0.5-1.2-0.1-1.3 0.2-0.7 0.2-0.4 0.7-0.1 1.4 0.1 0.1-0.2 0.3 0.1 4.1 4 2.2 1.3 3 0.4 1.2-0.4 1.3-5 0.5-1 1.9 0.7 0.2-0.3 0.2-0.4 0-0.9 0.7-0.1 1.5-0.7 0.6-1.1 0.3-1.1 0.7-0.8 2.4-0.3 0.1 0 0.1 0 2.4 0.7 13.6 6.3 2.4 0.6 2.5-0.4 2.4-0.9 2.4-0.4 4.8 2.1 3.8-0.3 1.9 0.3 0.5 0.3 0.8 0.5 1.3 1.9 0.8 0.7 1.1 0.2 0.8-0.3 0.5 0.4 1.4 0.1 0.8-0.5 0.6-1 1.9-0.2 0.2 0.1 0.1-0.1 1.6-0.1 1.1 0.1 0.1 0.1 0-0.1 1.4 0.2 1.8 0.9 0.5 2-1.3 7.4 0.4 3.4 1.2 2.3 2 1.4 3 1.1 1.7 1.6-0.6 2.5-2.6 4.9 0.1 1.8 0.8 2.7 1 2.6 1.1 1.4 2.2 0.4 2-0.8 2.1-0.4 5 3.2 2.3 0.4 2.3 0 2.5 0.6 0.9 0.8 1.3 2.2 1 0.7 1.8 0.3 1.7-0.3 1.7 0 1.7 1.1 1.5 2 1.8 1.8 2 1.5 2.1 1.1 5.4 1.7 2 1.1 8.6 10.8 1.9 1.4 1.2-0.1 2.3-0.7 1.1 0.1 1.3 0.8 0.1 1.1-0.6 1.3-0.3 1.5 1 2.2 6.8 5.3 2.1 3.3 1.2 1.1 1.4 0.7 1.3 0.5 1.2 0.8 0.7 1.5 1.6 2.4 2.3-0.9 2.6-1.9 2.2-0.9 1 0.5 1.6 1.9 1 0.7 1.1 0.1 2.5-0.3 1.3 0.2 6.3 5.6 0.9 1.3 1.6 3.1 1.1 1 1.7-0.1 0.6-1.4 0.3-1.8 0.6-1.4 0.8-0.3 0.9-0.3 0.1 0.2 0.4-0.3 1.5-0.4 1-0.1 1.1 0.2 0.1 0 0.6-0.3 2.6 1.3 1.2 1.9 0.2-0.1 0.1-0.1 0.3-0.4 0.4 1.5 0.3 0.5 0.9 0.6 1.9 0.6 0.8 0.5 2.6 2.7 0.9 1.7 0.3 1.9-0.4 1.1-0.7 0.7-0.5 0.8-0.2 1.6 1.8 2.7 7.2-1.5 3 3.1 0.3 2.3-0.3 1.9 0.2 1.6 3.4 2.8 0.3 1.5-0.2 1.5 0.6 1.8 1.3 1.3 1.4 0.7 1.2 0.9 1 3.6 1.2 1.1 3.1 1.3 2 1.4 1.1 1.9 1 4.8 0.2 2.8 0.3 1.3 0.8 1 1.3 0.6 2.9 0.4 1.2 1 1.3 0.8 4.5 0.8 1.7 0.1 1.7-0.7z",
    NPMA: "M163.2 76.2l-2.4 1.7-1.7 1.7-3.3 4.8-1.5 2.9-0.5 1.6 0.1 0.9 0.5 0.4 0.8 0.6 0.9 0.8 0.7 1 0.5 1.2 0.3 1.3 0.4 3.2 1.9 7.2 0.1 4.3-0.7 2.1-1.3 1.4-1.4 0.5-2.5 0.2-0.7 0.2-3.5 2-1.1 0.3-0.9 0.1-1 0-1.1 0-4.2 1-3.3 1.4-2.2 1.8-1.6 0.6-1.3 0.2-1.9-0.3-1.5 0.4-2.8 2.3-0.4 0.7-0.3 1.1 0.2 0.8 0.6 1.2 0.5 1.5 0.3 2 0 2.9-0.4 1.6-0.8 1.2-1.1 1.1-0.9 2 0.2 1.2 1.2 0.9 3.2 0.8 2.4 0.3 0.7 0.2 0.4 0.4 0.3 0.2 2.4 3.4 5.5 5.5-3.5 4.6-3.6 2-4.8 1.6-1.6 1.6-1.6 4.1-1.5 2.6-0.8 1.9-0.4 1.8-0.2 1.7-0.8 2.5-1.2 2.1-2.2 2.9-1.4 1.4-1.6 1-5.4 1.7-2 1.1-3 2.9-1.1 1.6-0.6 1.7-0.2 1-0.8 0.9-0.4 0.8-0.4 3.4-1.6 1.8-0.7 1.8-0.7 2.7-1.8 3.6 1.1 7.1-0.7 9.5 0.1 1.6 0.3 1.4 0.2 0.8 0.6 1.1 1.6 2.6 0.6 1.4 0.8 2.5 0.2 1.6-0.1 9.3 0 0.2 0 0.1-1.9-0.1-2.3 1.2-1.1 1.8-0.3 2.2 1 8.1-0.6 1.7-2.2-1.2-4.7-5.8-2-1.2-2.3-0.1-2.1 0.6-2.2 0.3-2.2-0.9-1.3-1.6-3-6.3-0.9-0.8-2-0.5-0.9-0.4-0.9-1-1.1-2-0.7-0.8-1.9-1.2-3.9-0.7-2.1-0.7-1.6-1.3-3.8-5-3.6-2.2-1-0.2-2-0.4-2.1-1.6-0.6-5.2 0-2.6 0.4-2.3 0.7-2.1 1.4-2.1 1.7-1.4 1.9-1 1.6-1.2 0.9-2.2-0.3-4.2 0.9-5.7 2.2-4.9 3.4-1.7 1.9 0.3 2.4 0 2.1-0.6 1.4-1.7-0.3-2-1.9-5.3 0.6-1.9 1.9-0.3 1.4 1.2 1.1 0.2 2.3-8.4 0.5-3-0.3-2.4-0.9-0.7-1 0.1-0.9-0.2-0.7-1.3-0.8-5.2-2.3-4.2-0.9-2.2 0.5-2.2 1.2-0.9 3.2-1.1 0.7-1.2 0.3-1.6 0.8-0.9 1-0.7 1-1.3 2.3-1.8 0.9-1 0.8-1.1 0.1-0.7-0.3-0.7-0.2-0.8 0.4-0.9 0.6-0.5 1.4-0.7 0.7-0.5 2.5-2.8 1.3-2.7 0.2-2.8-1.1-3.4-1.5-3.4-1-3.2-0.1-3.3 1.7-3.6 2.9-2.4 6.7-1.8 2.4-2 5.7-7.2 2.5-4 1.4-4.7 1-2.2 1.7-0.9 4-0.6 2.1-0.6 1.4-1 2.9-2.7 4-2.8 1.1-1.2 3.4-5.4 1.5-1.6 6.8-5.2 2.2-3.4-1.5-3.4 1.6-1.5 1.9-2.4 1.8-1.3 1.1 1.6 1.1 2.3 1.9 0.4 7.5-2.5 0.9-0.1 1.2 1.1 1.4 2.1 1.3 2.5 1.4 4.2 2.6 4.3 0.9 2 1.1 5.7z",
    NPSA: "M728.6 511l0.2-0.4 5.2-11.2 0.4-1.1 0.1-1.2-0.4-1.5-0.6-1.1-2-3.1-0.7-1.4-0.5-1.4-0.3-1.3-0.1-1.3 0-6.3-0.3-1.6-0.9-2.6-0.1-0.7 0-0.9 0.3-0.8 0.5-0.9 1.5-1.8 1-0.5 1 0 2.9 1.3 1.5 0.4 1.1 0.1 2.6-1 3.3-4.7 2.9-2 4.7-1.4 0.7-1.1 0.4-1.8-0.1-3.7-0.8-3.7-0.9-3.1-0.6-0.7-0.5-0.5-0.6-0.5-0.3-0.6 0-0.7 3.1-2.7 3.4-4.1 0.6-1.2-0.3-0.4-0.5-0.5-3.5-2.1-0.5-0.5-0.8-0.9-0.7-1.1-1-0.7-1.6-0.5-3.6-0.8-6.3 0.1-1.8-0.5 0-0.8 2.9-5 0.5-2 0.3-1.6-0.1-1.1-1.1-2.7-0.2-0.9 0.1-1.1 0.2-1.1 1-2.8 1.9-4.3 1.7-2.5 10-9.3 5.5-6.3 1.7-1.2 3.6-3.7 0.8-0.4 1.1-0.4 2.3-0.4 2.7-0.9 1.4-1 1.2-1.7 1.2-2.6 1.1-3.7 0.9-1.8 0.8-1.3 0.5-0.9 0.4-1.4-0.3-2-0.1-2.6-1-3.6-0.6-6.4 0-3.4-0.8-3.3-3.3-5.2-1.9-2 0-0.2-0.1-0.7 0-0.1 0-2-0.1-1.3 0.2-0.3 1.2-1.8 0.3-0.8 0-0.8 0.8-1.7 0-0.2 0.8 0 1.2-0.3 0.4-0.9 0.4-1.7 0-1.2 0-0.7 0-1.6 0.4-0.8 0.3-0.1 1.5 1.1 1.5 1.4 1.8 0.8 1.5-0.3 1.4 0.3 1.9-0.4 0.2-0.3 0.1-0.1 0.1-0.8 0.2-0.3 0.8-0.3 2.1-0.7 1.4 0.6 2 1.3 1.6 1.5 0.5 1.5-0.5 3.8 0.9 1.7 3.4 1.2 7.8-0.4 3.1 2.5 0 0.1 1 3 1.8 2.1 2.4 1.1 2.9 0.3 3.3-0.6 1.4-0.4 0 0.2-0.3 8 1.2 5.6 0.8 2.6 0.2 1.2 0 0.7-0.6 2.5-0.2 2.9 0.9 5.2 0 1.8-0.2 1.2-2.1 7.4-2.1 12.7-0.5 1.7-1.1 5.1-0.4 1.3-1.3 1.5-2 2.3-0.4 0.7-0.4 1.9 1.3 4.6 4.4 7.6 0.4 2.1-0.1 1.7-0.3 0.8-0.6 0.8-0.8 0.5-1 0.4-0.9 0.5-0.6 0.7-0.3 2 0.6 5.6-0.1 2.2-0.9 7.7 0.3 1.8 0.6 1.6 2.2 2.3 1.1 1.5 0.5 1.5 1 19.1 3.7 0.6 13.3-3.1 3.9-0.1 1.9 0.7 0.5 2.3-0.6 2.5-0.4 0.9-0.7 2.6-0.1 0.8-0.6 1.5-1.6 1.3-3.1 1.9-7.8 8.3-2.5 1.1-1.8 1.6-2.5 10.5-1.6 2.7-0.6 1.6 0.3 1.2 0.4 0.9 0.2 1.4 0 1.4-0.2 1.1-0.9 1.3-2.4 2.2-0.4 1-3.1 1.1-3.5 2.1-1.1 2.8-2.2 2.5-2.7 1.8-2.9 0.8-1-0.2-4-1.5-1.5 0.2-0.8 1.2-0.8 1.5-1.1 0.9-2.1-0.4-7.8-4.8-7.5-3.4-2.2-1.4-0.1 0-1.5-1.8-1.5-1.3-1.8-1-2.1-0.5-3.4-1.4-6.9-3.7-3.3-1.2-1 0-2.4 0.3-0.8-0.1-0.8-0.9-0.1-1.8-0.8-0.8-1.9-0.4-2.4 0.3-4.2 1.5-2.5 1.6-0.8 0.2-1.1-0.2-0.7-0.5-0.5-0.6-0.8-0.4-1.7-0.5-0.7-0.1z",
    NPRA: "M328.9 210l6.5 2 1.5 0.8 1.9 1.7 4.3 4.5 0.6 1 0.3 1.7 0 1.9 0 1.7 0.1 1.3 0.7 1.1 5.3 3.6 1.6 0.6 1.9-0.3 1.2-0.5 1.4-0.1 5.8 0.5 6.8-0.5 1.6 0.3 2.3 0.9 16.6 8.4 4.4 1-0.5 3.6-1.3 2.6-3.6 5.2-6 2.6-5.9 1.7-2.7 1.2-1.2 1 0.3 0.9 1.2 1.6 0.4 0.9 0 1-0.5 1.3-0.9 0.4-1.2 0-1.4 0.1-1.7 0.7-2 1.9-0.6 1.3 0 1 1.4 1.2-2.7 4.1 0.7 1.3 1.1 0.9 1.3 3.1 0.9 1.2 1.5 1.3 0.8 1 1.2 3.5 10.3 8 2.5 2.4 1.5 2.1 0.5 3.4-1.4 1.7-5 2.4-1.5 1.3-0.8 1.3-0.1 1.2 0.4 1.3 2.1 2.8 0.5 1.2 0.2 1.5-0.6 1.1-0.8 0.9-3 2.6-1.4 4.4-0.6 3.4-1 4 0.3 2 0.8 1.2 0.9 0.7 0.8 0.8 0.3 0.7 0.3 1.4-0.4 0.8-0.7 0.5-3.6 1.3-3.3 2-1.4 0.5-1.4 0.2-1.4-0.1-2.6-0.5-2.7 0.8-5 4.4-3.9 4.2-0.2 0.5-0.3 0.8 1.4 1 5.2 2.4 2.5 2.7-4.8 1.6-5.6-0.5-1.7 0.2-2.1 0.7-1.2 0.6-0.8 0.6-0.6 0.7-0.4 0.7-0.7 1.5-0.8 2.8-0.3 1.1-2.4-0.9-14.1 3.6-9.5 1.1-4.3-1.3-6.1-6.2-8.6-4.3-13.4-11.1-4.8-2-1.9-1.1-2.1-2.2-2.3-1.9-0.1-0.1 0.6-1.4 3.4-3.4 0.5-0.3 0.7-0.3 0.5 0 2.1 0.3 1-0.1 2.3-0.4 1.2-0.5 0.6-0.5 0.7-0.6 0.4-0.6 0.3-0.6 0.1-0.7 0.2-2.7-0.1-2.1-0.5-1.6-0.9-1.6-5.1-4.6-0.9-0.6-1-0.2-0.9-0.1-1-0.2-0.7-0.7-1.9-2.5-1-0.9-3.4-2.8-0.9-1.1-0.5-1.3 0.2-1.2 1.5-2.4 1.6-4.5 5.9-3.2-2.5-4-1.2-2.8-2.3-2.6-6.8-2.9-0.7-1.1 0-4.7-0.4-1.5-0.6-1.1-0.7-0.8-0.4-1.1 0.2-0.9 0.7-1 1.1-0.6 2.7-1.1 0.6-0.4 0.7-0.7 0.7-1.4 0.4-1.7-0.1-2.7-0.5-1.9-1.7-3.9-0.2-1.1 0.5-1.9 0.8-1.9 4-4.9 5 2.1 1.5 0.3 1.6 0.2 4.9-0.1 2.8-1.6 2.3-4.6 0.7-1 0.7-0.8 2-1.2 1.4-1.2 2.3-2.3 4.1-6.1 1.2-1.2 6.5-4 12.2-9.7 1.3-1.7 1-2.3 0.5-1.8 1.4-3.3 5.1-4.7z",
    NPDH: "M393.7 241.6l3.2 0.5 2.9 1 1.8 0.2 2.6 0 3.6 0.5 2.1 0 5.3-1.1 2.4-0.9 2.5-1.5 10-3.7 1.5-2.1 3.8-10.6 2-3.5 6.2-8 1-0.9 0.7-1.3 0.5-1.9 0.9-9.8 0.5-1.5 1.2-1.5 1.1-1.1 1.1-1.4 0.4-1-0.7-4.4 0.1-0.1 0.9-1.8 0.5-2.2 0.8-2.1 0.3-0.2 0.7-0.6 0.4-0.5 0.2-0.1 0.2-0.4 0.5-0.4 2.7-1 2.8-0.1 2.8 0.3 2.6-0.3 5-2.5 2.6-0.8 0.8-0.4 1-1.7 0.6-0.7 3.5-0.9 2.1-0.3 1.4 0 1.4 0.3 1 0.6 0.7 1 0.3 1.7 1.4-0.8 1.4-0.4 1.3 0.3 1 1.4 1.5 1.5 2-0.3 2.1-0.9 2 0.1 1 1.2 0.7 3.5 0.8 1.4 1.5 0.3 1.8-0.2 1.5 0.2 0.7 1.8-0.7 2.1-1.5 2-1.1 2.1 0.7 2.5 2.5 2.4 0.6 0.9 0.4 1.2 0.7 4.1 2.5 1.5 2.5 0.8 1.2 1.7-2.7 10.9 2 3.4-0.9 0.4-3.5 0.8-3 2-1.5 0.5-4.7 0.6-1.6 0.7-1.3 0.9-0.9 0.9-2.8 2.3-2.9 2-1.8 0.6-1.8 0.2-2.2-0.3-2.2 0-1.4 0.6-1 1-1.4 2.4-1.1 1.3-7.1 6.2-2.8 1.4-1.5 1-0.8 0.8-0.3 0.6 0.5 1.3 4.7 5.6 0.4 1 0.4 1.8-4.7 4.2-0.5 1.2-0.6 1.9 0.4 3.1-0.3 1.8-0.8 1.6-1.7 2-0.2 0.2-2.2 3-0.9 1.8-1.6 5.3-1 1.3-0.9 0.8-1.9 1.2 2.6 4.3 1 4.3 0.8 1.3 1.2 1.6 1 2.3 0.8 1.2 1.9 1.9 0.4 1.1 0.1 3.2-1.7 3.9-1.3 1.1-1.4 1.7-1.4 2.3-2.3 2.9-0.5 1-0.8 2.9-2.9 7.3-1.3 2.1-1.4 1.3-6.3 1.9-1.6-3.3-1-0.4-0.8 0.1-0.8-0.2-0.5-1.3-0.2-1.5 0.4-0.7-0.2-0.9-0.7-0.8-5.2-4.5-1.2-0.7-1.5-0.6-2.2-0.4-3.2-0.2-1.5-0.5-1.8-1.3-1-1.2-0.8-1.3-1-1-1.4-0.9-2.4-1.3-1.5-0.5-3-0.1-1.6-0.5-2.2-1.3-6.1-5.5-2.3-0.9-1.9-0.5-8.8 1.6-0.5-3.4-1.5-2.1-2.5-2.4-10.3-8-1.2-3.5-0.8-1-1.5-1.3-0.9-1.2-1.3-3.1-1.1-0.9-0.7-1.3 2.7-4.1-1.4-1.2 0-1 0.6-1.3 2-1.9 1.7-0.7 1.4-0.1 1.2 0 0.9-0.4 0.5-1.3 0-1-0.4-0.9-1.2-1.6-0.3-0.9 1.2-1 2.7-1.2 5.9-1.7 6-2.6 3.6-5.2 1.3-2.6 0.5-3.6z",
    NPSE: "M185.1 71.4l2.1 1.5 2.4 1 1 0.6 1.4 1.2 0.8 0.5 1.1 0.3 3.6-0.4 2.5 0 0.7 0.2 0.3 0.2 0.7 2.1 1.1 2.4 0.6 0.8 0.4 0.8 0.5 1.2 0.2 1.2-0.1 1.4-0.3 2.5 0.1 1.1 0.5 1 2.3 1.8 1.1 0.6 0.8 0.2 0.6 0 0.7-0.5 2.8-4.2 2.3-1.4 1.3-0.3 1.3-0.2 8.3-0.2 2 0.4 1.4 0.5 1.4 1.1 1.9 0.8 4.3 0.9 1.5 0.5 1.1 0.9 0.5 1.2 0.1 1.5-0.2 1-0.5 1-0.6 0.8-0.9 0.8-1.5 1.2-0.6 0.7-0.4 1-0.3 1.6-0.2 4.1-0.5 3.2-3.1 10-0.1 1.1 0.1 1.5 0.7 2.3 1.1 1.5 1.3 1.2 1.4 1 1.8 0.9 0.6 0.1 2.2 0.6 0.6 0.8 0.4 1.2 0.1 2.7-0.1 2-0.7 2.7-1.8 1.8-4.4 3-1.2 1.7-0.7 2.1-0.3 2.5-0.1 3 0.5 3 1.1 2.4 1.2 2.1-0.7 2.3-3.9 1.2-1.9 0.3-1.4-0.1-1.2-0.5-2.8-2.6-0.8-0.5-0.9-0.2-2.1 0.1-1.6 0.2-4.6 1.5-1.7 1.3-3.5 3.5-1 1.4-0.5 1.2 0.1 1.3 0.4 1.3 0.9 2.1-0.9 7.8 0.3 2.1 0.5 1.6 0.8 0.7 3.3 2.1 1.5 1.2 1.5 1.5-7.4 5.5-1.6 0.5-1.2 1-5.3 6-0.3 2.7 0.8 2.8 1.4 2.3 1.5 0.9 5.8 8.8 4 4.4 1.5 2.6 0.7 3 0.9 2 1.5 1.5 0.3 1.5-2.7 1.6-1.9 0.8-0.9 0.2-1.1-0.1 0-0.9 1.4-1.1-0.2-0.7-1.2-0.8 0.4-4-4.8-5.6-1.7-3.6-1.8-2.3-1.9-0.6-9.8 1.2-1.1-0.4-2.6-1.7-1.2-0.5-2.4-0.2-7.2 1-2.3-0.6-5.8-4.6-4.5-2.3-2.3-0.8-2.3-0.4-2.1 0.6-2.4 1.4-1.8 1.7-0.6 1.6 5.5 5.8 4.1 3.4 1.9 1.1 1.5-0.4 1.5-0.9 1.5-0.3 1.4 1.3 1.5 3.4 1-0.3 4.5 2.6-0.4-1.6-1.4-2.9-0.5-1.6 1.6 0.9 1.5 1.4 1.1 1.9 0.7 4.3 1.2 4 3.6 8.2 0.4 2.4-0.3 2.5-0.7 2.9-1 1.1-0.8 1.1-15.6 17.1-1.3 1.1-3.8 2.3-1.2 1.7-1.3 4.9-0.1 2.1-5.2-1-0.8-1.4-0.2-1.6-0.4-1.3-1.3-0.8-1.7 0.6-2.2-0.1-2.2-0.4-1.8-0.6-2.1-1.5-0.5-1.8-0.2-1.9-0.9-1.9-1.6-0.7-4.6 0-2-0.4-1.9-1.2-4.3-4.5-1.8-1.2-3.5-1-1.9-0.9-1.2-1.5-2.2-4.2-1.4-1.1-4.2-0.7-1.9-0.7-2-1-0.7-1 0-1.2 0.2-1.1-0.3-0.8-2.4 0 0-0.1 0-0.2 0.1-9.3-0.2-1.6-0.8-2.5-0.6-1.4-1.6-2.6-0.6-1.1-0.2-0.8-0.3-1.4-0.1-1.6 0.7-9.5-1.1-7.1 1.8-3.6 0.7-2.7 0.7-1.8 1.6-1.8 0.4-3.4 0.4-0.8 0.8-0.9 0.2-1 0.6-1.7 1.1-1.6 3-2.9 2-1.1 5.4-1.7 1.6-1 1.4-1.4 2.2-2.9 1.2-2.1 0.8-2.5 0.2-1.7 0.4-1.8 0.8-1.9 1.5-2.6 1.6-4.1 1.6-1.6 4.8-1.6 3.6-2 3.5-4.6-5.5-5.5-2.4-3.4-0.3-0.2-0.4-0.4-0.7-0.2-2.4-0.3-3.2-0.8-1.2-0.9-0.2-1.2 0.9-2 1.1-1.1 0.8-1.2 0.4-1.6 0-2.9-0.3-2-0.5-1.5-0.6-1.2-0.2-0.8 0.3-1.1 0.4-0.7 2.8-2.3 1.5-0.4 1.9 0.3 1.3-0.2 1.6-0.6 2.2-1.8 3.3-1.4 4.2-1 1.1 0 1 0 0.9-0.1 1.1-0.3 3.5-2 0.7-0.2 2.5-0.2 1.4-0.5 1.3-1.4 0.7-2.1-0.1-4.3-1.9-7.2-0.4-3.2-0.3-1.3-0.5-1.2-0.7-1-0.9-0.8-0.8-0.6-0.5-0.4-0.1-0.9 0.5-1.6 1.5-2.9 3.3-4.8 1.7-1.7 2.4-1.7 0 0.2 1.5 1.2 3-0.8 2.6 0 5.2 2.4 2.5-0.5 1.2-1.8-0.1-1.4 5.1-2.5 0.3-0.4 0.6-1.1 0-0.1z",
    NPLU: "M387.1 304.1l8.8-1.6 1.9 0.5 2.3 0.9 6.1 5.5 2.2 1.3 1.6 0.5 3 0.1 1.5 0.5 2.4 1.3 1.4 0.9 1 1 0.8 1.3 1 1.2 1.8 1.3 1.5 0.5 3.2 0.2 2.2 0.4 1.5 0.6 1.2 0.7 5.2 4.5 0.7 0.8 0.2 0.9-0.4 0.7 0.2 1.5 0.5 1.3 0.8 0.2 0.8-0.1 1 0.4 1.6 3.3-1.7 2.8-3.5 1.9-4.1 0.7-3.3-0.9-1.9-0.1-1.7 1-0.7 1.7 1.1 1.1 1.8 1 1.6 1.4 1.3-1.4 1.3-0.2 3.2 0.6 3.2-0.1 1.8 0.3 1.5 0.8 1.3-0.1 4 1.5 0.8-0.2 2-1.1 9-0.1 2.7 0.3 1.9 1.1 3.1 3.2 1.6 0.9 1.1 0 2.6-1 1.2-0.3 1.5 0.2 3 0.7 1.6 0.2 2.6-0.7 5-2.8 2.8-0.3 2.2 0.9 4 3.5 2.2 1.3 4.8 1.1 10 0.1 4.8 1 2 1.1 0.6 1.3 0.1 1.6 0.3 2.1 0.6 1 1.5 1 0.3 1 0.1 1.2 0.4 0.6 0.8 0.3 1 0.1 1.3-0.7 1.3-1.4 1.5-1.2 2-0.2 1.1 1.1 1.3 2.1 1 2.3 0.4 1.5-0.4 1.8-1.1 1.4-3.1 1.9-3.1-1.1-2.8 1.4-2.9 2.2-3 1.1-1.8-0.2-1.4-0.3-1.2-0.1-1.4 0.6-2.1 3-1.4 1.1-1.8-0.8-2.6 3-4.5 7.6-1.4 1.6-3.8-2.7-2.3 1.5-2.5 0.2-7.5-1-1.3 0-1 0.2-0.8 0.9-0.7 1.1 0.1 1 1 0.4 2.4 0 0.4 0.6-1.3 1.6-0.8 1.4 0 1.4 0.1 1.5-0.4 1.3-1.7 1.5-0.1 0-2.5 0.8-5.2 0.3-2.2 0.9 1 2 3.2 3.6 0.3 1.2 0.4 1.3 0 1-1.1 0.4-0.7 0.5-0.8 1.2-0.1-0.1-0.6-0.7-5.2-1.8-15.4-8.4-8.2-3-12.2-1.7-10.5-0.1-2.9 1.1-0.6 1.2-0.2 1.5 0.2 1.5 1.7 2.3-0.2 1.5-0.7 1.6-2.4 3.6-1.9 1.9-2.2 1.2-2.5 0.2-2.5-0.9-1.2-1.3-0.7-1.8-1.3-2.4-1.3-1.5-5.6-4.7-4.1-1.7-13.7 0.1-7-1.7-5.2-2.9-2.8-0.9-13.8-1-2.5-2.9-1.2-4.8-1.1-9.4-1.4-4.8-1.9-3.2-0.7-0.3 0.3-1.1 0.8-2.8 0.7-1.5 0.4-0.7 0.6-0.7 0.8-0.6 1.2-0.6 2.1-0.7 1.7-0.2 5.6 0.5 4.8-1.6-2.5-2.7-5.2-2.4-1.4-1 0.3-0.8 0.2-0.5 3.9-4.2 5-4.4 2.7-0.8 2.6 0.5 1.4 0.1 1.4-0.2 1.4-0.5 3.3-2 3.6-1.3 0.7-0.5 0.4-0.8-0.3-1.4-0.3-0.7-0.8-0.8-0.9-0.7-0.8-1.2-0.3-2 1-4 0.6-3.4 1.4-4.4 3-2.6 0.8-0.9 0.6-1.1-0.2-1.5-0.5-1.2-2.1-2.8-0.4-1.3 0.1-1.2 0.8-1.3 1.5-1.3 5-2.4 1.4-1.7z",
    NPGA: "M443.1 334.7l6.3-1.9 1.4-1.3 1.3-2.1 2.9-7.3 0.8-2.9 0.5-1 2.3-2.9 1.4-2.3 1.4-1.7 1.3-1.1 1.7-3.9-0.1-3.2-0.4-1.1-1.9-1.9-0.8-1.2-1-2.3-1.2-1.6-0.8-1.3-1-4.3-2.6-4.3 1.9-1.2 0.9-0.8 1-1.3 1.6-5.3 0.9-1.8 2.2-3 0.2-0.2 1.7-2 0.8-1.6 0.3-1.8-0.4-3.1 0.6-1.9 0.5-1.2 4.7-4.2-0.4-1.8-0.4-1-4.7-5.6-0.5-1.3 0.3-0.6 0.8-0.8 1.5-1 2.8-1.4 7.1-6.2 1.1-1.3 1.4-2.4 1-1 1.4-0.6 2.2 0 2.2 0.3 1.8-0.2 1.8-0.6 2.9-2 2.8-2.3 0.9-0.9 1.3-0.9 1.6-0.7 4.7-0.6 1.5-0.5 3-2 3.5-0.8 0.9-0.4 1.1 1.8 5.7 3.3 7.6 1.6 1.4 0.6 1.1 1 1.9 3.1 2.3 2.1 1 1.1 1.7 5.9 1.4 2.4 2.8 0.9 2.6-0.1 1.9 0.8 1.8 1.1 2.2 0.8 6.2 1.1 1 0.6 1.1 2.2 0.7 0.9 2.2 0.8 2.1 0.5 1.4 1-0.6 5.9 1.4 1.1 5.1 0.2 2.2 1.1 2.9 3.4 1.9 1.6 1.5 0.6 1.3 0.1 6.2-0.4 1.3 0.3 1.9 0.6 1.2 0.2 1.1-0.4 0.9-0.8 1.4-3 0.6-0.8 3.4-1.8 1-0.3 0.9-0.4 0.8-1 1.1-2.3 0.7-1 0.8-0.8 2.5-0.5 2.2 0.8 4.2 3 5.4 1.7 0.8 1.5-1.2 6.4-0.4 1-0.6 1.2-0.9 0.6-1.9 0.8-0.6 0.9-0.2 0.8 0 1.5 0 0.1 0 0.8-0.7 1.7-2.9 1.7-0.7 1.3 0.9 6.9 0 2.5-0.4 3.8-2.1 1.1-1.6 1.7-2.2 4.5-1.2 1.2-4.4 3.6-1.6 1.9-1.1 2-1.8 7.1-1.4 2.8-1.1 1.2-1.2 0.7-3 0.6-2.2 0.9-2 1.3-1.1 1.1-0.9 1.1-5.7 11-1.6 2-3.5 3.4-0.6 1.2-0.2 1.4 0.3 0.8 0.4 1.2 2.2 3.7 0.5 1.9 0.2 1.8-0.4 2.5-0.6 1.3-0.8 0.8-0.9 0.3-0.9 0.1-1 0-1.1-0.1-1-0.3-0.8-0.5-0.7-0.8-0.5-0.7-0.6-0.7-0.3-0.3-1.2-0.8-1.3-2.1-1.3-1.5-1.1-0.8-1-0.5-1.1-0.3-1.2-0.2-1 0.2-0.7 0.3-2.3 1.9-6 4.2-5.1 2.1-0.8 1-0.3 2 0.4 1.2 0.6 0.9 0.4 0.4 0.5 0.5 0.2 0.8-0.5 0.3-3.8-0.4-1.6 0.5-1.3-2.1-1.1-1.1-2 0.2-1.5 1.2-1.3 1.4-1.3 0.7-1-0.1-0.8-0.3-0.4-0.6-0.1-1.2-0.3-1-1.5-1-0.6-1-0.3-2.1-0.1-1.6-0.6-1.3-2-1.1-4.8-1-10-0.1-4.8-1.1-2.2-1.3-4-3.5-2.2-0.9-2.8 0.3-5 2.8-2.6 0.7-1.6-0.2-3-0.7-1.5-0.2-1.2 0.3-2.6 1-1.1 0-1.6-0.9-3.1-3.2-1.9-1.1-2.7-0.3-9 0.1-2 1.1-0.8 0.2-4-1.5-1.3 0.1-1.5-0.8-1.8-0.3-3.2 0.1-3.2-0.6-1.3 0.2-1.3 1.4-1.6-1.4-1.8-1-1.1-1.1 0.7-1.7 1.7-1 1.9 0.1 3.3 0.9 4.1-0.7 3.5-1.9 1.7-2.8z",
  },
  names: {
    NPBH: "Bheri",
    NPBA: "Bagmati",
    NPKO: "Bhojpur",
    NPNA: "Narayani",
    NPME: "Mechi",
    NPJA: "Janakpur",
    NPKA: "Karnali",
    NPMA: "Mahakali",
    NPSA: "Sagarmatha",
    NPRA: "Rapti",
    NPDH: "Dhawalagiri",
    NPSE: "Seti",
    NPLU: "Lumbini",
    NPGA: "Gandaki",
  },
  default_regions: {},
  proj: "mercator",
  default_labels: {},
  proj_coordinates: [
    { x: 90.9, y: 517.7, lat: 26.547425, lng: 80.437227 },
    { x: 545.5, y: 312.8, lat: 28.176679, lng: 84.506617 },
    { x: 909.1, y: 52.2, lat: 30.213247, lng: 87.762128 },
  ],
};

/* Map logic - do not edit */
!(function (e) {
  var t,
    o,
    i,
    r = {};
  (function () {
    var e,
      t,
      o,
      i,
      r,
      n,
      s,
      a,
      l,
      c,
      m,
      p = this || Function("return this")(),
      u = (function () {
        "use strict";
        var e,
          t,
          o,
          i,
          r,
          n = "linear",
          s =
            Date.now ||
            function () {
              return +new Date();
            },
          a = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : s;
        function l() {}
        function c(e, t) {
          for (var o in e) Object.hasOwnProperty.call(e, o) && t(o);
        }
        function m(e, t) {
          return (
            c(t, function (o) {
              e[o] = t[o];
            }),
            e
          );
        }
        function u(e, t) {
          c(t, function (o) {
            void 0 === e[o] && (e[o] = t[o]);
          });
        }
        function d(t, o, i, r, n, s, a) {
          var l,
            c,
            m,
            p,
            u,
            d,
            f = t < s ? 0 : (t - s) / n;
          for (u in o) {
            o.hasOwnProperty(u) &&
              ((d = "function" == typeof (d = a[u]) ? d : e[d]),
              (o[u] =
                ((l = i[u]),
                (c = r[u]),
                (m = d),
                (p = f),
                l + (c - l) * m(p))));
          }
          return o;
        }
        function f(e, t, o, i) {
          return e + (t - e) * o(i);
        }
        function h(e, t) {
          var o = v.prototype.filter,
            i = e._filterArgs;
          c(o, function (r) {
            void 0 !== o[r][t] && o[r][t].apply(e, i);
          });
        }
        function $(e, t, n, s, l, c, m, p, u, f, $) {
          (r = t + n + s),
            (o = Math.min($ || a(), r)),
            (i = r <= o),
            (r = s - (r - o)),
            e.isPlaying() &&
              (i
                ? (u(m, e._attachment, r), e.stop(!0))
                : ((e._scheduleId = f(e._timeoutHandler, 1e3 / 60)),
                  h(e, "beforeTween"),
                  o < t + n
                    ? d(1, l, c, m, 1, 1, p)
                    : d(o, l, c, m, s, t + n, p),
                  h(e, "afterTween"),
                  u(l, e._attachment, r)));
        }
        function y(e, t) {
          var o = {},
            i = typeof t;
          return (
            c(
              e,
              "string" == i || "function" == i
                ? function (e) {
                    o[e] = t;
                  }
                : function (e) {
                    o[e] || (o[e] = t[e] || n);
                  }
            ),
            o
          );
        }
        function v(e, o) {
          (this._currentState = e || {}),
            (this._configured = !1),
            (this._scheduleFunction = t),
            void 0 !== o && this.setConfig(o);
        }
        return (
          (t =
            ("undefined" != typeof window &&
              (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                (window.mozCancelRequestAnimationFrame &&
                  window.mozRequestAnimationFrame))) ||
            setTimeout),
          (v.prototype.tween = function (e) {
            return this._isTweening
              ? this
              : ((void 0 === e && this._configured) || this.setConfig(e),
                (this._timestamp = a()),
                this._start(this.get(), this._attachment),
                this.resume());
          }),
          (v.prototype.setConfig = function (e) {
            (e = e || {}),
              (this._configured = !0),
              (this._attachment = e.attachment),
              (this._pausedAtTime = null),
              (this._scheduleId = null),
              (this._delay = e.delay || 0),
              (this._start = e.start || l),
              (this._step = e.step || l),
              (this._finish = e.finish || l),
              (this._duration = e.duration || 500),
              (this._currentState = m({}, e.from || this.get())),
              (this._originalState = this.get()),
              (this._targetState = m({}, e.to || this.get()));
            var t = this;
            this._timeoutHandler = function () {
              $(
                t,
                t._timestamp,
                t._delay,
                t._duration,
                t._currentState,
                t._originalState,
                t._targetState,
                t._easing,
                t._step,
                t._scheduleFunction
              );
            };
            var o = this._currentState,
              i = this._targetState;
            return (
              u(i, o),
              (this._easing = y(o, e.easing || n)),
              (this._filterArgs = [o, this._originalState, i, this._easing]),
              h(this, "tweenCreated"),
              this
            );
          }),
          (v.prototype.get = function () {
            return m({}, this._currentState);
          }),
          (v.prototype.set = function (e) {
            this._currentState = e;
          }),
          (v.prototype.pause = function () {
            return (this._pausedAtTime = a()), (this._isPaused = !0), this;
          }),
          (v.prototype.resume = function () {
            return (
              this._isPaused && (this._timestamp += a() - this._pausedAtTime),
              (this._isPaused = !1),
              (this._isTweening = !0),
              this._timeoutHandler(),
              this
            );
          }),
          (v.prototype.seek = function (e) {
            e = Math.max(e, 0);
            var t = a();
            return (
              this._timestamp + e === 0 ||
                ((this._timestamp = t - e),
                this.isPlaying() ||
                  ((this._isTweening = !0),
                  (this._isPaused = !1),
                  $(
                    this,
                    this._timestamp,
                    this._delay,
                    this._duration,
                    this._currentState,
                    this._originalState,
                    this._targetState,
                    this._easing,
                    this._step,
                    this._scheduleFunction,
                    t
                  ),
                  this.pause())),
              this
            );
          }),
          (v.prototype.stop = function (e) {
            return (
              (this._isTweening = !1),
              (this._isPaused = !1),
              (this._timeoutHandler = l),
              (
                p.cancelAnimationFrame ||
                p.webkitCancelAnimationFrame ||
                p.oCancelAnimationFrame ||
                p.msCancelAnimationFrame ||
                p.mozCancelRequestAnimationFrame ||
                p.clearTimeout
              )(this._scheduleId),
              e &&
                (h(this, "beforeTween"),
                d(
                  1,
                  this._currentState,
                  this._originalState,
                  this._targetState,
                  1,
                  0,
                  this._easing
                ),
                h(this, "afterTween"),
                h(this, "afterTweenEnd"),
                this._finish.call(this, this._currentState, this._attachment)),
              this
            );
          }),
          (v.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          }),
          (v.prototype.setScheduleFunction = function (e) {
            this._scheduleFunction = e;
          }),
          (v.prototype.dispose = function () {
            for (var e in this) this.hasOwnProperty(e) && delete this[e];
          }),
          (v.prototype.filter = {}),
          (e = v.prototype.formula =
            {
              linear: function (e) {
                return e;
              },
            }),
          m(v, {
            now: a,
            each: c,
            tweenProps: d,
            tweenProp: f,
            applyFilter: h,
            shallowCopy: m,
            defaults: u,
            composeEasingObject: y,
          }),
          "function" == typeof SHIFTY_DEBUG_NOW && (p.timeoutHandler = $),
          (p.Tweenable = v)
        );
      })();
    function d(e) {
      t.each(e, function (t) {
        var o = e[t];
        "string" == typeof o && o.match(a) && (e[t] = $(a, o, f));
      });
    }
    function f(e) {
      var t;
      return (
        "rgb(" +
        (e =
          (3 === (t = (t = e).replace(/#/, "")).length &&
            (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
          (c[0] = h(t.substr(0, 2))),
          (c[1] = h(t.substr(2, 2))),
          (c[2] = h(t.substr(4, 2))),
          c))[0] +
        "," +
        e[1] +
        "," +
        e[2] +
        ")"
      );
    }
    function h(e) {
      return parseInt(e, 16);
    }
    function $(e, t, o) {
      var i = t.match(e),
        r = t.replace(e, l);
      if (i)
        for (var n, s = i.length, a = 0; a < s; a++)
          (n = i.shift()), (r = r.replace(l, o(n)));
      return r;
    }
    function y(e) {
      for (
        var t = e.match(r), o = t.length, i = e.match(s)[0], n = 0;
        n < o;
        n++
      )
        i += parseInt(t[n], 10) + ",";
      return i.slice(0, -1) + ")";
    }
    function v(e, o) {
      t.each(o, function (t) {
        for (var i = g(e[t]), r = i.length, n = 0; n < r; n++)
          e[o[t].chunkNames[n]] = +i[n];
        delete e[t];
      });
    }
    function _(e, o) {
      t.each(o, function (t) {
        var i = e[t],
          r = (function (e, t) {
            m.length = 0;
            for (var o = t.length, i = 0; i < o; i++) m.push(e[t[i]]);
            return m;
          })(
            (function (e, t) {
              for (var o, i = {}, r = t.length, n = 0; n < r; n++)
                (i[(o = t[n])] = e[o]), delete e[o];
              return i;
            })(e, o[t].chunkNames),
            o[t].chunkNames
          ),
          i = (function (e, t) {
            for (var o = e, i = t.length, r = 0; r < i; r++)
              o = o.replace(l, +t[r].toFixed(4));
            return o;
          })(o[t].formatString, r);
        e[t] = $(n, i, y);
      });
    }
    function g(e) {
      return e.match(r);
    }
    u.shallowCopy(u.prototype.formula, {
      easeInQuad: function (e) {
        return Math.pow(e, 2);
      },
      easeOutQuad: function (e) {
        return -(Math.pow(e - 1, 2) - 1);
      },
      easeInOutQuad: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      },
      easeInCubic: function (e) {
        return Math.pow(e, 3);
      },
      easeOutCubic: function (e) {
        return Math.pow(e - 1, 3) + 1;
      },
      easeInOutCubic: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      },
      easeInQuart: function (e) {
        return Math.pow(e, 4);
      },
      easeOutQuart: function (e) {
        return -(Math.pow(e - 1, 4) - 1);
      },
      easeInOutQuart: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeInQuint: function (e) {
        return Math.pow(e, 5);
      },
      easeOutQuint: function (e) {
        return Math.pow(e - 1, 5) + 1;
      },
      easeInOutQuint: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      },
      easeInSine: function (e) {
        return 1 - Math.cos(e * (Math.PI / 2));
      },
      easeOutSine: function (e) {
        return Math.sin(e * (Math.PI / 2));
      },
      easeInOutSine: function (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      },
      easeInExpo: function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      },
      easeOutExpo: function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
      },
      easeInOutExpo: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --e));
      },
      easeInCirc: function (e) {
        return -(Math.sqrt(1 - e * e) - 1);
      },
      easeOutCirc: function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      },
      easeInOutCirc: function (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      },
      easeOutBounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      easeInBack: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      easeOutBack: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      easeInOutBack: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      elastic: function (e) {
        return (
          -1 *
            Math.pow(4, -8 * e) *
            Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) +
          1
        );
      },
      swingFromTo: function (e) {
        var t = 1.70158;
        return (e /= 0.5) < 1
          ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
          : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
      },
      swingFrom: function (e) {
        return e * e * (2.70158 * e - 1.70158);
      },
      swingTo: function (e) {
        return --e * e * (2.70158 * e + 1.70158) + 1;
      },
      bounce: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      bouncePast: function (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      },
      easeFromTo: function (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      },
      easeFrom: function (e) {
        return Math.pow(e, 4);
      },
      easeTo: function (e) {
        return Math.pow(e, 0.25);
      },
    }),
      (u.setBezierFunction = function (e, t, o, i, r) {
        var n,
          s,
          a,
          l,
          c =
            ((n = t),
            (s = o),
            (a = i),
            (l = r),
            function (e) {
              return (function e(t, o, i, r, n, s) {
                var a,
                  l = 0,
                  c = 0,
                  m = 0,
                  p = 0,
                  u = 0,
                  d = 0;
                function f(e) {
                  return ((l * e + c) * e + m) * e;
                }
                function h(e) {
                  return 0 <= e ? e : 0 - e;
                }
                return (
                  (l = 1 - (m = 3 * o) - (c = 3 * (r - o) - m)),
                  (((p = 1 - (d = 3 * i) - (u = 3 * (n - i) - d)) *
                    (a = (function (e, t) {
                      var o, i, r, n, s, a, p;
                      for (r = e, a = 0; a < 8; a++) {
                        if (h((n = f(r) - e)) < t) return r;
                        if (1e-6 > h((s = (3 * l * (p = r) + 2 * c) * p + m)))
                          break;
                        r -= n / s;
                      }
                      if (((i = 1), (r = e) < (o = 0))) return o;
                      if (i < r) return i;
                      for (; o < i && !(h((n = f(r)) - e) < t); )
                        n < e ? (o = r) : (i = r), (r = 0.5 * (i - o) + o);
                      return r;
                    })(t, (a = 0.005))) +
                    u) *
                    a +
                    d) *
                    a
                );
              })(e, n, s, a, l, 1);
            });
        return (
          (c.displayName = e),
          (c.x1 = t),
          (c.y1 = o),
          (c.x2 = i),
          (c.y2 = r),
          (u.prototype.formula[e] = c)
        );
      }),
      (u.unsetBezierFunction = function (e) {
        delete u.prototype.formula[e];
      }),
      ((e = new u())._filterArgs = []),
      (u.interpolate = function (t, o, i, r, n) {
        var s = u.shallowCopy({}, t),
          a = n || 0,
          n = u.composeEasingObject(t, r || "linear");
        return (
          e.set({}),
          ((r = e._filterArgs).length = 0),
          (r[0] = s),
          (r[1] = t),
          (r[2] = o),
          (r[3] = n),
          u.applyFilter(e, "tweenCreated"),
          u.applyFilter(e, "beforeTween"),
          (n = u.tweenProps(i, s, t, o, 1, a, n)),
          u.applyFilter(e, "afterTween"),
          n
        );
      }),
      (t = u),
      (o = /(\d|\-|\.)/),
      (i = /([^\-0-9\.]+)/g),
      (n = RegExp(
        "rgb\\(" +
          (r = /[0-9.\-]+/g).source +
          /,\s*/.source +
          r.source +
          /,\s*/.source +
          r.source +
          "\\)",
        "g"
      )),
      (s = /^.*\(/),
      (a = /#([0-9]|[a-f]){3,6}/gi),
      (l = "VAL"),
      (c = []),
      (m = []),
      (t.prototype.filter.token = {
        tweenCreated: function (e, r, n, s) {
          var a, c;
          d(e),
            d(r),
            d(n),
            (this._tokenData =
              ((a = e),
              (c = {}),
              t.each(a, function (e) {
                var t,
                  r,
                  n = a[e];
                "string" == typeof n &&
                  ((t = g(n)),
                  (c[e] = {
                    formatString:
                      ((n = (r = n).match(i))
                        ? (1 === n.length || r.charAt(0).match(o)) &&
                          n.unshift("")
                        : (n = ["", ""]),
                      n.join(l)),
                    chunkNames: (function (e, t) {
                      for (var o = [], i = e.length, r = 0; r < i; r++)
                        o.push("_" + t + "_" + r);
                      return o;
                    })(t, e),
                  }));
              }),
              c));
        },
        beforeTween: function (e, o, i, r) {
          var n, s;
          (n = r),
            (s = this._tokenData),
            t.each(s, function (e) {
              var t = s[e].chunkNames,
                o = t.length,
                i = n[e];
              if ("string" == typeof i)
                for (
                  var r = i.split(" "), a = r[r.length - 1], l = 0;
                  l < o;
                  l++
                )
                  n[t[l]] = r[l] || a;
              else for (l = 0; l < o; l++) n[t[l]] = i;
              delete n[e];
            }),
            v(e, this._tokenData),
            v(o, this._tokenData),
            v(i, this._tokenData);
        },
        afterTween: function (e, o, i, r) {
          var n, s;
          _(e, this._tokenData),
            _(o, this._tokenData),
            _(i, this._tokenData),
            (n = r),
            (s = this._tokenData),
            t.each(s, function (e) {
              var t = s[e].chunkNames,
                o = t.length,
                i = n[t[0]];
              if ("string" == typeof i) {
                for (var r = "", a = 0; a < o; a++)
                  (r += " " + n[t[a]]), delete n[t[a]];
                n[e] = r.substr(1);
              } else n[e] = i;
            });
        },
      });
  }).call(null),
    (function (e, t) {
      (e = e || "docReady"), (t = t || window);
      var o = [],
        i = !1,
        r = !1;
      function n() {
        if (!i) {
          i = !0;
          for (var e = 0; e < o.length; e++) o[e].fn.call(window, o[e].ctx);
          o = [];
        }
      }
      function s() {
        "complete" === document.readyState && n();
      }
      t[e] = function (e, t) {
        if (i) {
          setTimeout(function () {
            e(t);
          }, 1);
          return;
        }
        o.push({ fn: e, ctx: t }),
          "complete" !== document.readyState &&
          (document.attachEvent || "interactive" !== document.readyState)
            ? r ||
              (document.addEventListener
                ? (document.addEventListener("DOMContentLoaded", n, !1),
                  window.addEventListener("load", n, !1))
                : (document.attachEvent("onreadystatechange", s),
                  window.attachEvent("onload", n)),
              (r = !0))
            : setTimeout(n, 1);
      };
    })("docReady", r),
    (t = window.console),
    (o = window.Object),
    (i = window.Array),
    (void 0 === t || void 0 === t.log) && ((t = {}).log = function () {}),
    "function" != typeof o.create &&
      (o.create = function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    i.prototype.forEach ||
      (i.prototype.forEach = function (e, t) {
        for (var o = 0, i = this.length; o < i; ++o)
          e.call(t, this[o], o, this);
      }),
    (Object.size = function (e) {
      var t,
        o = 0;
      for (t in e) e.hasOwnProperty(t) && o++;
      return o;
    });
  var n = (function () {
      var e = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera\sMini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        iPad: function () {
          return (
            null !== navigator.userAgent.match(/Macintosh/i) &&
            !!navigator.maxTouchPoints &&
            !!(navigator.maxTouchPoints > 0)
          );
        },
        any: function () {
          return (
            e.Android() ||
            e.BlackBerry() ||
            e.iOS() ||
            e.Opera() ||
            e.Windows() ||
            e.iPad()
          );
        },
      };
      function t(e, t) {
        var o = e[0],
          i = e[1],
          r = Raphael.transformPath("M" + o + "," + i, t).toString(),
          n = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(r);
        return [n[1], n[2]];
      }
      function o(e) {
        return Math.min.apply(Math, e);
      }
      function i(e) {
        return Math.max.apply(Math, e);
      }
      return {
        min: o,
        max: i,
        addEvent: function e(t, o, i) {
          t.attachEvent
            ? ((t["e" + o + i] = i),
              (t[o + i] = function () {
                t["e" + o + i](window.event);
              }),
              t.attachEvent("on" + o, t[o + i]))
            : t.addEventListener(o, i, !1);
        },
        isMobile: e,
        linePath: function e(t, o, i, r) {
          var n = { x: t, y: o },
            s = { x: i, y: r };
          return "M" + n.x + " " + n.y + " L" + s.x + " " + s.y;
        },
        clone: function e(t) {
          if ("object" != typeof t || null === t) return t;
          var o = t.constructor();
          for (var i in t) o[i] = e(t[i]);
          return o;
        },
        isFunction: function e(t) {
          return t && "[object Function]" === {}.toString.call(t);
        },
        findPos: function e(t) {
          function o(e, t) {
            if (e.currentStyle) var o = e.currentStyle[t];
            else if (window.getComputedStyle)
              var o = window.getComputedStyle(e, null)[t];
            return o;
          }
          var i,
            r = o(document.body, "position");
          "relative" == r &&
            document.body.style.setProperty("position", "static"),
            o(document.body, "position");
          for (
            var n = (i = 0), s = t, a = !1;
            (s = s.parentNode) && s != document.body;

          )
            (n -= s.scrollLeft || 0),
              (i -= s.scrollTop || 0),
              "fixed" == o(s, "position") && (a = !0);
          if (a && !window.opera) {
            var l,
              c =
                ((l = document.getElementsByTagName("html")[0]),
                l.scrollTop && document.documentElement.scrollTop
                  ? [l.scrollLeft, l.scrollTop]
                  : l.scrollTop || document.documentElement.scrollTop
                  ? [
                      l.scrollLeft + document.documentElement.scrollLeft,
                      l.scrollTop + document.documentElement.scrollTop,
                    ]
                  : document.body.scrollTop
                  ? [document.body.scrollLeft, document.body.scrollTop]
                  : [0, 0]);
            (n += c[0]), (i += c[1]);
          }
          do (n += t.offsetLeft), (i += t.offsetTop);
          while ((t = t.offsetParent));
          return document.body.style.setProperty("position", r), [n, i];
        },
        replaceAll: function e(t, o, i) {
          return t.replace(RegExp(o, "g"), i);
        },
        rotate_bbox: function e(r, n) {
          var s = [r.x, r.y],
            a = [r.x2, r.y],
            l = [r.x, r.y2],
            c = [r.x2, r.y2],
            m = t(s, n),
            p = t(a, n),
            u = t(l, n),
            d = t(c, n),
            f = [m[0], p[0], u[0], d[0]],
            h = [m[1], p[1], u[1], d[1]],
            $ = o(f),
            y = i(f),
            v = o(h),
            _ = i(h);
          return { x: $, y: v, x2: y, y2: _, width: y - $, height: _ - v };
        },
        rotate: t,
        bbox_union: function e(t) {
          for (var o = [], i = [], r = [], s = [], a = 0; a < t.length; a++) {
            var l = t[a];
            o.push(l.x), i.push(l.x2), s.push(l.y), r.push(l.y2);
          }
          var c = n.min(o),
            m = n.max(i),
            p = n.min(s),
            u = n.max(r);
          return { x: c, x2: m, y: p, y2: u, width: m - c, height: u - p };
        },
        distance: function e(t, o) {
          var i = t.x,
            r = t.y,
            n = o.x,
            s = o.y,
            a = n - i,
            l = s - r;
          return Math.sqrt(l * l + a * a);
        },
        x_in_array: function e(t, o) {
          for (var i = o.length; i--; ) if (o[i] === t) return !0;
          return !1;
        },
        clear_sets: function e(t) {
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.forEach(function (e) {
              e.remove();
            }),
              i.splice(0, i.length);
          }
        },
        delete_element: function e(t) {
          t.parentNode && t.parentNode.removeChild(t);
        },
        to_float: function e(t) {
          var o = parseFloat(t);
          return !isNaN(o) && o;
        },
        callback_closure: function e(t, o) {
          return function () {
            return o(t);
          };
        },
        new_style: function e(t) {
          var o = document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          return (
            (i.type = "text/css"),
            (i.media = "screen"),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t)),
            o.appendChild(i),
            i
          );
        },
      };
    })(),
    s = !!window[e + "_mapdata"] && window[e + "_mapdata"],
    a = !!window[e + "_mapinfo"] && window[e + "_mapinfo"],
    l = e.substring(0, e.length - 3).replace("simplemaps_", ""),
    c = !0,
    m = !1,
    p = [],
    u = {
      rounded_box:
        "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
      plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
      minus:
        "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
      arrow:
        "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z",
    },
    d = {
      mapdata: s,
      mapinfo: a,
      load: f,
      hooks: n.clone({
        over_state: !1,
        over_region: !1,
        over_location: !1,
        out_state: !1,
        out_region: !1,
        out_location: !1,
        click_state: !1,
        click_region: !1,
        click_location: !1,
        close_popup: !1,
        zoomable_click_state: !1,
        zoomable_click_region: !1,
        complete: !1,
        refresh_complete: !1,
        zooming_complete: !1,
        back: !1,
        ready: !1,
        click_xy: !1,
      }),
      plugin_hooks: n.clone({
        over_state: [],
        over_region: [],
        over_location: [],
        out_state: [],
        out_region: [],
        out_location: [],
        click_state: [],
        click_region: [],
        click_location: [],
        preclick_state: [],
        preclick_region: [],
        preclick_location: [],
        close_popup: [],
        zoomable_click_state: [],
        zoomable_click_region: [],
        complete: [],
        refresh_complete: [],
        zooming_complete: [],
        back: [],
        ready: [],
        click_xy: [],
      }),
      copy: function () {
        var e = {
          mapdata: n.clone(this.mapdata),
          mapinfo: n.clone(this.mapinfo),
          hooks: n.clone(this.hooks),
          plugin_hooks: n.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return p.push(e), e;
      },
      create: function () {
        var t = {
          mapdata: !!window[e + "_mapdata"] && n.clone(window[e + "_mapdata"]),
          mapinfo: !!window[e + "_mapinfo"] && n.clone(window[e + "_mapinfo"]),
          hooks: n.clone(this.hooks),
          plugin_hooks: n.clone(this.plugin_hooks),
          copy: this.copy,
          load: f,
        };
        return p.push(t), t;
      },
      mobile_device: !!n.isMobile.any(),
      loaded: !1,
    };
  function f() {
    var e,
      t,
      o,
      i,
      s,
      a,
      p,
      d,
      f,
      h,
      $,
      y,
      v,
      _,
      g,
      b,
      x,
      w,
      k,
      z,
      P,
      A,
      E,
      C,
      S,
      j,
      B,
      T,
      F,
      O,
      I,
      L,
      M,
      N,
      D,
      R,
      q,
      H,
      V,
      W,
      X,
      Y,
      Q,
      Z,
      U,
      G,
      J,
      K,
      ee,
      et,
      eo,
      ei,
      er,
      en,
      es,
      ea,
      el,
      ec,
      em,
      ep,
      eu,
      e8,
      ed,
      ef,
      eh,
      e$,
      ey,
      ev,
      e_,
      eg,
      e0,
      eb,
      e3,
      ex,
      ew,
      ek,
      e1,
      ez,
      e5,
      eP,
      e6,
      e4,
      e7,
      e2,
      eA,
      eE,
      eC,
      eS,
      ej,
      eB,
      eT,
      eF,
      eO,
      eI,
      eL,
      eM,
      eN,
      eD,
      eR,
      eq,
      eH,
      eV,
      eW,
      eX,
      eY,
      eQ,
      eZ,
      eU,
      eG,
      eJ,
      eK,
      e9,
      te,
      tt,
      to,
      ti,
      tr,
      tn,
      ts,
      ta,
      tl,
      tc,
      tm,
      tp,
      tu,
      t8,
      td,
      tf,
      th,
      t$,
      ty,
      tv,
      t_,
      tg,
      t0,
      tb,
      t3,
      tx,
      tw,
      tk,
      t1,
      tz = this,
      t5 = tz.mapdata,
      tP = tz.mapinfo;
    if (!t5 || !tP) {
      console.log("The mapdata or mapinfo object is missing or corrupted.");
      return;
    }
    var t6 = tz.hooks,
      t4 = tz.plugin_hooks;
    function t7(e, t) {
      var o = t6[e];
      o && o.apply(null, t);
      for (var i = tz.plugin_hooks[e], r = 0; r < i.length; r++) {
        var o = i[r];
        o && o.apply(null, t);
      }
    }
    var _ = void 0 === t5.main_settings.div ? "map" : t5.main_settings.div;
    if (!document.getElementById(_))
      return (
        console.log(
          "Can't find target for map #" +
            _ +
            ".  Check mapdata.main_settings.div"
        ),
        !1
      );
    function t2() {
      (A =
        !!s.background_image_url &&
        "no" != s.background_image_url &&
        s.background_image_url),
        (E = !!s.background_image_bbox && s.background_image_bbox),
        (V = "yes" == s.background_transparent ? 0 : 1),
        (X = s.label_size ? s.label_size : 22),
        (Y = s.label_color ? s.label_color : "#ffffff"),
        (Q = "yes" == s.url_new_tab),
        (Z = s.location_opacity ? s.location_opacity : 1),
        (U = "yes" == s.js_hooks),
        (G = s.border_size ? s.border_size : 1.5),
        (J = s.popup_color ? s.popup_color : "#ffffff"),
        (F = s.popup_orientation ? s.popup_orientation : "auto"),
        (T = s.popup_centered ? s.popup_centered : "auto"),
        (ee = s.popup_opacity ? s.popup_opacity : 0.9),
        (et = s.popup_shadow > -1 ? s.popup_shadow : 1),
        (eo = s.popup_corners ? s.popup_corners : 5),
        (ei = "yes" == s.popup_nocss),
        (K = !!s.popup_maxwidth && s.popup_maxwidth),
        (er = s.popup_font
          ? s.popup_font
          : "12px/1.5 Verdana, Arial, Helvetica, sans-serif"),
        (W = "no" != s.zoom_out_incrementally),
        (H = s.adjacent_opacity ? s.adjacent_opacity : 0.3),
        (C = s.zoom_time ? s.zoom_time : 0.5),
        (j = s.zoom_increment ? s.zoom_increment : 2),
        (S = "no" != s.zoom_mobile),
        (D = s.fade_time ? 1e3 * s.fade_time : 200),
        (q = t5.labels),
        (B = s.custom_shapes ? s.custom_shapes : {}),
        (L = !!s.initial_back && "no" != s.initial_back && s.initial_back),
        (R = "yes" == s.hide_eastern_labels),
        (M = s.link_text ? s.link_text : "View Website"),
        (O = !!s.order_number && s.order_number),
        (I = s.zoom_percentage ? s.zoom_percentage : 0.99);
    }
    function tA(e) {
      return "on_click" == e || ("detect" == e && !!ec);
    }
    function tE(e) {
      return "off" == e;
    }
    var tC = !1;
    function tS(e) {
      if (
        (tP.calibrate
          ? (((ex = {}).x = -1 * tP.calibrate.x_adjust),
            (ex.y = -1 * tP.calibrate.y_adjust),
            (ex.x2 = ex.x + tP.calibrate.width),
            (ex.y2 = (ex.x2 - ex.x) / tP.calibrate.ratio))
          : (ex = tP.initial_view),
        (ek = (eb = ex.x2 - ex.x) / (e3 = ex.y2 - ex.y)),
        ed.style.setProperty("width", ""),
        ef.style.setProperty("width", ""),
        v
          ? ((e_ = ed.offsetWidth) < 1 && (e_ = ed.parentNode.offsetWidth),
            ef.style.setProperty("width", e_ + "px"))
          : ((e_ =
              void 0 !== s.width && s.width && "auto" != s.width
                ? s.width
                : s.height && "auto" != s.height
                ? s.height * ek
                : 800),
            ed.style.setProperty("width", e_ + "px")),
        (e_ *= 1),
        (eg = e_ / ek),
        (a = eb / 1e3),
        e8.style.setProperty("height", eg + "px"),
        s.height &&
          v &&
          "auto" != s.height &&
          ((e_ = (eg = s.height) * ek),
          map.style.setProperty("text-align", "center"),
          ef.style.setProperty("text-align", "left"),
          ef.style.setProperty("width", e_ + "px"),
          ef.style.setProperty("display", "inline-block"),
          e8.style.setProperty("height", eg + "px")),
        !e)
      ) {
        if (((e0 = e_ / eb), (ew = 1), $)) {
          var t = [];
          for (var o in tP.state_bbox_array) {
            var i = tP.state_bbox_array[o];
            t.push(i);
          }
          var r,
            l = n.bbox_union(t);
          ev =
            "r" +
            $ +
            "," +
            0.5 * (l.x2 + l.x) * e0 +
            "," +
            0.5 * (l.y2 + l.y) * e0;
          var c = n.rotate_bbox(ex, ev);
          (eb = c.width), (e3 = c.height);
        }
        (eA = "s" + e0 + "," + e0 + ",0,0"), (e2 = $ ? eA + ev : eA);
      }
    }
    function tj(e) {
      if (
        t5.legend &&
        t5.legend.entries &&
        !(t5.legend.entries.length < 1) &&
        (!es || !en)
      ) {
        e && ey && (ey.innerHTML = "");
        var t = {};
        ey.style.setProperty("left", "0em"),
          ey.style.setProperty("bottom", "0em"),
          ey.style.setProperty("padding", ".8em"),
          ey.style.setProperty("lineHeight", "1em"),
          ey.style.setProperty(
            "background-color",
            es ? "#ffffff" : "rgba(186, 186, 186, 0.2)"
          );
        var o = document.createElement("ul");
        o.style.setProperty("display", "inline-block"),
          o.style.setProperty("list-style-type", "none"),
          o.style.setProperty("margin", "0"),
          o.style.setProperty("padding", "0"),
          ey.appendChild(o);
        var i =
          "#" +
          _ +
          "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #" +
          _ +
          "_holder{font: " +
          er +
          ";}";
        n.new_style(i);
        for (var r = t5.legend.entries, s = 0; s < r.length; s++) m(s, r[s]);
        var a = t5.legend.html;
        a && "no" != a
          ? (ey.innerHTML = a)
          : (function e() {
              for (var t = 0; t < r.length; t++) {
                var i = r[t];
                (i.shape = i.shape ? i.shape : "circle"),
                  (i.color = i.color ? i.color : "#cecece"),
                  (i.type = i.type ? i.type : "location");
                var n = document.createElement("li");
                n.setAttribute("class", "sm_legend_item"),
                  n.setAttribute("data-id", t);
                var s = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                if (
                  (s.setAttributeNS(
                    "http://www.w3.org/2000/xmlns/",
                    "xmlns:xlink",
                    "http://www.w3.org/1999/xlink"
                  ),
                  s.style.setProperty("display", "inline-block"),
                  s.style.setProperty("margin-right", ".2em"),
                  s.style.setProperty("width", "1em"),
                  s.style.setProperty("height", "1em"),
                  s.style.setProperty("stroke", "#ffffff"),
                  s.style.setProperty("stroke-width", "3"),
                  s.style.setProperty("fill", "#ff0067"),
                  s.style.setProperty("vertical-align", "-0.15em"),
                  "circle" == i.shape)
                ) {
                  var a = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                  );
                  a.setAttribute("cx", "50"),
                    a.setAttribute("cy", "50"),
                    a.setAttribute("r", "40");
                } else if ("square" == i.shape) {
                  var a = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect"
                  );
                  a.setAttribute("x", "10"),
                    a.setAttribute("y", "10"),
                    a.setAttribute("width", "80"),
                    a.setAttribute("height", "80");
                } else {
                  var l = of[i.shape],
                    a = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "path"
                    );
                  a.setAttribute("d", l),
                    s.setAttribute("width", "1.5"),
                    s.setAttribute("height", "1.5"),
                    a.setAttribute("stroke-width", ".1");
                }
                ["square", "circle"].indexOf(i.shape) > -1
                  ? (a.setAttribute("stroke-width", "10"),
                    s.setAttribute("viewBox", "0 0 100 100"),
                    s.setAttribute("width", "100"),
                    s.setAttribute("height", "100"))
                  : ["diamond", "star"].indexOf(i.shape) > -1
                  ? (s.setAttribute("viewBox", "-.5 -.6 1 1.2"),
                    s.setAttribute("height", "1.8"))
                  : ["triangle"].indexOf(i.shape) > -1
                  ? (s.setAttribute("viewBox", "-.6 -.7 1.2 1.1"),
                    s.setAttribute("width", "1.8"),
                    s.setAttribute("height", "1.8"))
                  : ["heart"].indexOf(i.shape) > -1
                  ? (s.setAttribute("viewBox", "-.7 -.5 1.3 1"),
                    s.setAttribute("width", "2"))
                  : ["marker"].indexOf(i.shape) > -1 &&
                    (s.setAttribute("viewBox", "-.6 -.9 1.1 .8"),
                    s.setAttribute("width", "1.7"),
                    s.setAttribute("height", "1.7")),
                  a.setAttribute("fill", i.color),
                  a.setAttribute("stroke", "white"),
                  s.appendChild(a),
                  n.appendChild(s);
                var c = document.createTextNode(i.name);
                n.appendChild(c), o.appendChild(n);
              }
            })();
        for (
          var l = ef.getElementsByClassName("sm_legend_item"), s = 0;
          s < l.length;
          s++
        )
          n.addEvent(l[s], "mouseover", c), n.addEvent(l[s], "mousedown", c);
      }
      function c() {
        for (var e = t[this.dataset.id], o = 0; o < e.length; o++) {
          var i = e[o].sm;
          ("state" == i.type ? ty : oD)(i.id);
        }
      }
      function m(e, o) {
        t[e] = [];
        var i = "state" == o.type ? ta : tf;
        for (var r in i) {
          var n = i[r];
          o.ids
            ? o.ids.split(",").indexOf(n.sm.id) > -1 && t[e].push(n)
            : n.sm.attributes.fill != o.color || n.sm.hide || t[e].push(n);
        }
      }
    }
    function tB(e, t, o) {
      if ((void 0 === o && (o = "location" == e ? 4 : 1), "location" == e))
        var i = tf[t];
      else if ("state" == e) var i = ta[t];
      else if ("region" != e) return !1;
      else var i = tl[t];
      var r = function () {
        var e = i.sm.on_click;
        (i.sm.on_click = !0),
          (i.sm.content = oi(i)),
          oN(i.sm.type, i.sm.id, function t() {
            (i.sm.on_click = e), (i.sm.content = oi(i));
          });
      };
      if ("state" == e) {
        function n() {
          i.sm.zoomable || i.sm.region ? oI(i.sm.id, r) : r();
        }
        ob(w, n);
      } else if ("location" == e) {
        function n() {
          oL(i.sm.id, o, r);
        }
        ob(w, n);
      } else if ("region" == e) {
        function n() {
          var e,
            t,
            o = 1;
          (e = i.sm.bbox),
            (t = r),
            void 0 === o && (o = 4),
            void 0 === t && (t = function () {}),
            ot({ sm: { type: "manual", zp: o, bbox: e } }, !1, function () {
              t(), tL();
            });
        }
        ob(w, n);
      }
    }
    var tT = !1,
      tF = !1;
    function tO() {
      if (c) {
        if (location.hostname.match("simplemaps.com")) {
          c = !1;
          return;
        }
        if (tT) {
          if (Math.random() > 0.05) return;
          n.delete_element(tT);
        }
        tT = document.createElement("div");
        var e = m ? "20px" : "5px";
        (tT.style.cssText =
          "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom:" +
          e +
          " !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;"),
          e8.appendChild(tT),
          (tT.innerHTML =
            '<a style="overflow: visible !important; clip-path: none !important; opacity: 1 !important;  filter: opacity(1) !important; transform: none !important; display: block !important; visibility: visible !important; font: 18px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; font-weight: bold !important; float: right !important; color: #000000 !important; text-decoration: none !important;" href="https://simplemaps.com" title="For evaluation use only.">Simplemaps.com Trial</a>'),
          !es && 503 != tT.innerHTML.length && (e8.innerHTML = "");
      }
    }
    function tI() {
      eN.hide(), eu.style.setProperty("display", "none");
    }
    function tL() {
      eN.show(), eu.style.setProperty("display", "block");
    }
    function tM() {
      (eJ = t5.locations),
        (eX = []),
        (eY = []),
        (eU = []),
        (eG = []),
        (eQ = []),
        (te = []),
        !(function () {
          var e = {};
          if (
            ((e.color = !1),
            (e.hover_color = !1),
            (e.opacity = s.region_opacity ? s.region_opacity : 1),
            (e.hover_opacity = s.region_hover_opacity
              ? s.region_hover_opacity
              : 0.6),
            (e.url = !1),
            (e.description = !1),
            (e.description_mobile = !1),
            (e.inactive = !1),
            (e.zoomable = !0),
            (e.hide_name = "yes" == s.region_hide_name),
            (e.popup = s.region_popups ? s.region_popups : em),
            (e.cascade = "yes" == s.region_cascade_all),
            (e.zoom_percentage = I),
            (e.x = !1),
            (e.y = !1),
            (e.x2 = !1),
            (e.y2 = !1),
            z)
          )
            for (var t in z)
              for (var o = 0; o < z[t].states.length; o++)
                eU[z[t].states[o]] = t;
          for (var i in z)
            for (var r in ((eQ[i] = Object.create(e)),
            z[i].url && (eQ[i].zoomable = !1),
            z[i]))
              "default" != z[i][r] && (eQ[i][r] = z[i][r]),
                "yes" == z[i][r] && (eQ[i][r] = !0),
                "no" == z[i][r] && (eQ[i][r] = !1);
        })(),
        (function () {
          for (var e in ((eK = function (e) {
            var t = {};
            (t.color = s.state_color),
              (t.geojson_url = !!s.state_geojson_url && s.state_geojson_url),
              (t.geojson_field = s.state_geojson_field
                ? s.state_geojson_field
                : "id"),
              (t.geojson_value =
                !!s.state_geojson_value && s.state_geojson_value),
              (t.type = s.state_type ? s.state_type : "default"),
              (t.image_url = !!s.state_image_url && s.state_image_url),
              (t.image_size = s.state_image_size ? s.state_image_size : "auto"),
              (t.image_position = s.state_image_position
                ? s.state_image_position
                : "center"),
              (t.image_x = s.state_image_x ? s.state_image_x : "0"),
              (t.image_y = s.state_image_y ? s.state_image_y : "0"),
              (t.image_color = !!s.state_image_color && s.state_image_color),
              (t.image_background_opacity = s.image_background_opacity
                ? s.image_background_opacity
                : "1"),
              (t.image_hover_url =
                !!s.state_image_hover_url && s.state_image_hover_url),
              (t.image_hover_size = s.state_image_hover_size
                ? s.state_image_hover_size
                : "auto"),
              (t.image_hover_position = s.state_image_hover_position
                ? s.state_image_hover_position
                : "center"),
              (t.image_hover_x = s.state_image_hover_x
                ? s.state_image_hover_x
                : "0"),
              (t.image_hover_y = s.state_image_hover_y
                ? s.state_image_hover_y
                : "0"),
              (t.image_hover_color =
                !!s.state_image_hover_color && s.state_image_hover_color),
              (t.pulse_size = s.state_pulse_size ? s.state_pulse_size : 1.1),
              (t.pulse_speed = s.state_pulse_speed ? s.state_pulse_speed : 1);
            var o = s.state_pulse_color;
            (t.pulse_color = !!o && "auto" != o && o),
              (t.hover_color = s.state_hover_color),
              (t.image_source = !1),
              (t.description = s.state_description),
              (t.url = s.state_url),
              (t.inactive = "yes" == s.all_states_inactive),
              (t.hide = "yes" == s.all_states_hidden),
              (t.hide_label = !1),
              (t.hide_name = "yes" == s.state_hide_name),
              (t.border_color = s.border_color ? s.border_color : "#ffffff"),
              (t.border_hover_color =
                !!s.border_hover_color && s.border_hover_color),
              (t.border_hover_size =
                !!s.border_hover_size && s.border_hover_size),
              (t.emphasize = "yes"),
              (t.zoom_percentage = I),
              (t.zoomable = "yes" == s.all_states_zoomable),
              (t.popup = s.state_popups ? s.state_popups : em),
              (t.opacity = s.state_opacity ? s.state_opacity : 1),
              (t.hover_opacity = s.state_hover_opacity
                ? s.state_hover_opacity
                : 1),
              (t.description_mobile =
                !!s.state_description_mobile && state_description_mobile),
              (t.path = !1),
              (t.level = 0),
              (t.link_text = M);
            var r = !!eU[e] && eU[e];
            for (var n in (r && eQ[r].hide && (t.hide = !0),
            r &&
              eQ[r].cascade &&
              (eQ[r].color && (t.color = eQ[r].color),
              eQ[r].hover_color && (t.hover_color = eQ[r].hover_color),
              eQ[r].description && (t.description = eQ[r].description),
              eQ[r].url && (t.url = eQ[r].url),
              eQ[r].inactive && (t.inactive = eQ[r].inactive),
              eQ[r].hide && (t.hide = eQ[r].hide)),
            (eX[e] = Object.create(t)),
            "us" == l &&
              ("GU" == e || "PR" == e || "VI" == e || "MP" == e || "AS" == e) &&
              (eX[e].hide = "yes"),
            "us" == l &&
              R &&
              ("VT" == e ||
                "NJ" == e ||
                "DE" == e ||
                "DC" == e ||
                "NH" == e ||
                "MA" == e ||
                "CT" == e ||
                "RI" == e ||
                "MD" == e) &&
              (eX[e].hide_label = "yes"),
            i[e]))
              "default" != i[e][n] && (eX[e][n] = i[e][n]),
                "yes" == i[e][n] && (eX[e][n] = !0),
                "no" == i[e][n] && (eX[e][n] = !1);
            "off" == s.state_hover_color && (eX[e].hover_color = eX[e].color);
          }),
          (eZ = {}),
          tP.paths))
            eZ[e] = !0;
          for (var e in t5.state_specific)
            t5.state_specific[e] &&
              (t5.state_specific[e].path ||
                t5.state_specific[e].feature ||
                t5.main_settings.state_geojson_url ||
                t5.state_specific[e].geojson_url) &&
              (eZ[e] = !0);
          for (var e in eZ) eK(e);
        })(),
        (function () {
          var e = {};
          (e.font_family = s.label_font ? s.label_font : "arial,sans-serif"),
            (e.color = s.label_color ? s.label_color : "white"),
            (e.hover_color = s.label_hover_color
              ? s.label_hover_color
              : e.color),
            (e.opacity =
              s.label_opacity || "0" == s.label_opacity ? s.label_opacity : 1),
            (e.hover_opacity = s.label_hover_opacity
              ? s.label_hover_opacity
              : e.opacity),
            (e.size = X),
            (e.hide = "yes" == s.hide_labels),
            (e.line = !1),
            (e.scale = !!s.label_scale && s.label_scale),
            (e.scale_limit = s.scale_limit ? s.scale_limit : 0.0625),
            (e.rotate = s.label_rotate ? s.label_rotate : 0),
            (e.line_color = s.label_line_color
              ? s.label_line_color
              : "#000000"),
            (e.line_size = s.label_line_size ? s.label_line_size : "1"),
            (e.line_x = !1),
            (e.line_y = !1),
            (e.parent_type = "state"),
            (e.parent_id = !1),
            (e.anchor = s.label_anchor ? s.label_anchor : "middle"),
            (e.pill = !1),
            (e.width = !!s.pill_width && s.pill_width),
            (e.x = !1),
            (e.y = !1),
            (e.name = "Not Named"),
            (e.pill_radius = s.pill_radius ? s.pill_radius : "auto"),
            (e.display = !!s.label_display && s.label_display),
            (e.display_ids = !1),
            (e.id = !1),
            (e.level = 3);
          var t = "no" == s.import_labels ? {} : tP.default_labels,
            o = function (o) {
              for (var i in ((eG[o] = Object.create(e)), t[o]))
                "default" != t[o][i] && (eG[o][i] = t[o][i]),
                  "yes" == t[o][i] && (eG[o][i] = !0),
                  "no" == t[o][i] && (eG[o][i] = !1);
            },
            i = function (t) {
              for (var o in (eG[t] || (eG[t] = Object.create(e)), q[t]))
                "default" != q[t][o] && (eG[t][o] = q[t][o]),
                  "yes" == q[t][o] && (eG[t][o] = !0),
                  "no" == q[t][o] && (eG[t][o] = !1);
            };
          for (var r in t) o(r);
          for (var r in q) i(r);
          e9 = function (e) {
            o(e), i(e);
          };
        })(),
        (function () {
          var e = {},
            t = ec
              ? s.scale_limit_mobile
                ? s.scale_limit_mobile
                : 0.4
              : 0.0625;
          (e.scale_limit = s.scale_limit ? s.scale_limit : t),
            (e.geojson_url =
              !!s.location_geojson_url && s.location_geojson_url),
            (e.geojson_field = s.location_geojson_field
              ? s.location_geojson_field
              : "id"),
            (e.geojson_value =
              !!s.location_geojson_value && s.location_geojson_value),
            (e.color = s.location_color ? s.location_color : "#FF0067"),
            (e.hover_color =
              !!s.location_hover_color && s.location_hover_color),
            (e.border = s.location_border ? s.location_border : 1.5),
            (e.border_color = s.location_border_color
              ? s.location_border_color
              : "#FFFFFF"),
            (e.hover_border = s.location_hover_border
              ? s.location_hover_border
              : 2),
            (e.size = s.location_size),
            (e.description = s.location_description),
            (e.description_mobile =
              !!s.location_description_mobile && location_description_mobile),
            (e.url = s.location_url),
            (e.inactive = "yes" == s.all_locations_inactive),
            (e.type = s.location_type),
            (e.position = "top"),
            (e.level = 5),
            (e.pulse = "yes" == s.location_pulse),
            (e.pulse_size = s.location_pulse_size ? s.location_pulse_size : 4),
            (e.pulse_speed = s.location_pulse_speed
              ? s.location_pulse_speed
              : 0.5);
          var o = s.location_pulse_color;
          for (var i in ((e.pulse_color = !!o && "auto" != o && o),
          (e.image_source = s.location_image_source
            ? s.location_image_source
            : ""),
          (e.hide = s.all_locations_hide ? s.all_locations_hide : "no"),
          (e.opacity = Z),
          (e.scale = !s.location_scale || s.location_scale),
          (e.hover_opacity =
            !!s.location_hover_opacity && s.location_hover_opacity),
          (e.image_source = s.location_image_source
            ? s.location_image_source
            : ""),
          (e.image_url = !!s.location_image_url && s.location_image_url),
          (e.image_position = s.location_image_position
            ? s.location_image_position
            : "center"),
          (e.image_hover_source = s.location_image_hover_source
            ? s.location_image_hover_source
            : ""),
          (e.image_hover_url =
            !!s.location_image_hover_url && s.location_image_hover_url),
          (e.image_hover_position = s.location_image_hover_position
            ? s.location_image_hover_position
            : "center"),
          (e.popup = s.location_popups ? s.location_popups : em),
          (e.x = !1),
          (e.y = !1),
          (e.link_text = M),
          (e.display = s.location_display ? s.location_display : "all"),
          (e.display_ids = !1),
          (e.hide = "yes" == s.all_locations_hidden),
          (e.hide_name = "yes" == s.location_hide_name),
          void 0 == e.type && (e.type = "square"),
          eJ)) {
            for (var r in ((eY[i] = Object.create(e)), eJ[i])) {
              if ("overwrite_image_location" == r) {
                eY[i].image_url = eJ[i][r];
                continue;
              }
              "region" == r && (eY[i].display = "region"),
                "default" != eJ[i][r] && (eY[i][r] = eJ[i][r]),
                "yes" == eJ[i][r] && (eY[i][r] = !0),
                "no" == eJ[i][r] && (eY[i][r] = !1);
            }
            eY[i].hover_opacity || (eY[i].hover_opacity = eY[i].opacity),
              eY[i].hover_color || (eY[i].hover_color = eY[i].color);
          }
        })(),
        (function () {
          var e = {};
          (e.color = s.line_color ? s.line_color : "#000000"),
            (e.size = s.line_size ? s.line_size : 1.5),
            (e.dash = s.line_dash ? s.line_dash : ""),
            (e.origin_location = !1),
            (e.destination_location = !1),
            (e.angle = !1),
            (e.level = 2);
          var t = t5.lines ? t5.lines : t5.borders;
          for (var o in t)
            for (var i in ((te[o] = Object.create(e)), t[o]))
              "default" != t[o][i] && (te[o][i] = t[o][i]),
                "yes" == t[o][i] && (te[o][i] = !0),
                "no" == t[o][i] && (te[o][i] = !1);
        })();
    }
    var tN = !1,
      tD = !1,
      tR = !1;
    function tq(e, t, o, i, r) {
      function n(e) {
        var t = [];
        if (!e) return null;
        var o = e.geometry.type,
          i = e.geometry.coordinates;
        if ("Polygon" === o) for (var r = 0; r < i.length; r++) t.push(l(i[r]));
        else if ("MultiPolygon" === o)
          for (var n = 0; n < i.length; n++)
            for (var s = 0; s < i[n].length; s++) t.push(l(i[n][s]));
        else if ("LineString" === o) t.push(l(i));
        else if ("MultiLineString" === o)
          for (var a = 0; a < i.length; a++) t.push(l(i[a]));
        function l(e) {
          for (var t = [], o = 0; o < e.length; o++) {
            var i = tH(e[o][1], e[o][0]),
              r = [parseFloat(i.x.toFixed(4)), parseFloat(i.y.toFixed(4))];
            t.push(r);
          }
          return (
            "M " +
            t
              .map(function (e) {
                return e.join(",");
              })
              .join(" L ") +
            " Z"
          );
        }
        return t.join(" ");
      }
      function s(e, t, o) {
        if (!e || !e.features || !Array.isArray(e.features)) return !1;
        for (let i of e.features)
          if (i.properties && i.properties[t] === o) return i;
        return !1;
      }
      var a = (function e(t, o) {
        var i = {},
          r = 0;
        for (var n in t) "geojson" === o[n].type && ((i[n] = r), r++);
        return i;
      })(t, o);
      if (e.feature) var l = n(e.feature);
      else {
        var c = (function e(t) {
          if (!t) return !1;
          var o = new XMLHttpRequest();
          o.open("GET", t, !1);
          try {
            if ((o.send(), 200 !== o.status))
              return (
                console.error("Error loading GeoJSON:", o.statusText), null
              );
            return JSON.parse(o.responseText);
          } catch (i) {
            return console.error("Request failed:", i), null;
          }
        })(e.geojson_url);
        if (e.geojson_value) p = s(c, e.geojson_field, e.geojson_value);
        else if ("geojson" == e.type && e.geojson_field && "state" == r)
          p = s(c, e.geojson_field, i);
        else
          var m = a[i],
            p = c.features[m];
        var l = n(p);
      }
      return l;
    }
    function tH(e, t) {
      if ("lambert" == tP.proj)
        var o = function e(t) {
          var o = Math.PI,
            i = 0.017453293 * t.lat,
            r = 0.017453293 * t.lng,
            n =
              Math.log(0.8386705593173225 * (1 / 0.7071067659112366)) /
              Math.log(
                Math.tan(0.25 * o + 0.3926990925) *
                  (1 / Math.tan(0.25 * o + 0.2879793345))
              ),
            s =
              (0.8386705593173225 *
                Math.pow(Math.tan(0.25 * o + 0.2879793345), n)) /
              n,
            a = s * Math.pow(1 / Math.tan(0.25 * o + 0.5 * i), n);
          return {
            x: a * Math.sin(n * (r - 1.57079637)),
            y:
              s * Math.pow(1 / Math.tan(0.25 * o + 0.3926990925), n) -
              a * Math.cos(n * (r - 1.57079637)),
          };
        };
      else if ("xy" == tP.proj)
        var o = function e(t) {
          return { x: t.lng, y: t.lat };
        };
      else if ("robinson_pacific" == tP.proj)
        var o = function e(t) {
          var o = t.lng - 150;
          return o < -180 && (o += 360), r({ lat: t.lat, lng: o });
        };
      else if ("mercator" == tP.proj)
        var o = function e(t) {
          var o =
            Math.log(Math.tan((t.lat / 90 + 1) * (Math.PI / 4))) *
            (180 / Math.PI);
          return { x: t.lng, y: o };
        };
      else var o = r;
      var i = { lat: e, lng: t };
      function r(e) {
        var t,
          o,
          i = 5,
          r = function (e) {
            return e < 0 ? -1 : 1;
          },
          n = r(e.lng),
          s = r(e.lat),
          a = Math.abs(e.lng),
          l = Math.abs(e.lat),
          c = ((t = l - 1e-10), Math.floor(t / i) * i),
          m = (c = 0 == l ? 0 : c) + 5,
          p = c / 5,
          u = m / 5,
          d = (l - c) / 5,
          f = [
            0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851,
            0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645,
            0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731,
            0.48562614, 0.45167814,
          ],
          h = [
            0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
            0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187,
            0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062,
            1.31998003, 1.3523,
          ];
        return {
          x: ((f[u] - f[p]) * d + f[p]) * a * 0.017453293 * n * 1,
          y: ((h[u] - h[p]) * d + h[p]) * s * 1,
        };
      }
      var s = tP.proj_coordinates;
      function a(e, t, i, r) {
        var s,
          a,
          l,
          c,
          m,
          p,
          u,
          d,
          f,
          h,
          $,
          y,
          v,
          _,
          g,
          b,
          x,
          w = o(e),
          k = o(t),
          z = o(i),
          P = o(r),
          A = n.distance(w, k),
          E = n.distance(w, z),
          C = n.distance(k, z),
          S = n.distance(t, i),
          j = C / S,
          B =
            ((s = t.x),
            (a = t.y),
            (l = A / j),
            (c = i.x),
            (m = i.y),
            (p = E / j),
            (d = c - s),
            (h = Math.sqrt((f = m - a) * f + d * d)),
            (_ = s + (d * (u = (l * l - p * p + h * h) / (2 * h))) / h),
            (g = a + (f * u) / h),
            (y = -f * (($ = Math.sqrt(l * l - u * u)) / h)),
            (v = d * ($ / h)),
            (b = _ + y),
            { opt1: { x: b, y: (x = g + v) }, opt2: { x: _ - y, y: g - v } }),
          T = n.distance(w, P) / j,
          F = Math.abs(n.distance(B.opt1, r) - T),
          O = Math.abs(n.distance(B.opt2, r) - T);
        return F < O
          ? { x: B.opt1.x, y: B.opt1.y }
          : { x: B.opt2.x, y: B.opt2.y };
      }
      function l(e, t, o) {
        var i = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(u);
        if (i && e > n.to_float(i[1])) return !1;
        var r = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(u);
        if (r && e < n.to_float(r[1])) return !1;
        var s = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(u);
        if (s && t > n.to_float(s[1])) return !1;
        var a = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(u);
        return !(a && t < n.to_float(a[1]));
      }
      var c = tP.proj_rules;
      if (c)
        for (var m = 0; m < c.length; m++) {
          var p = c[m],
            u = p.condition;
          if (l(e, t, p.condition)) {
            var d = p.points;
            return a(i, s[d[0]], s[d[1]], s[d[2]]);
          }
        }
      return a(i, s[0], s[1], s[2]);
    }
    var tV = !1;
    function tW(e) {
      if (e.sm.zooming_dimensions) return e.sm.zooming_dimensions;
      var t,
        o = n.rotate_bbox(e.sm.bbox, e2),
        i = o.x,
        r = o.y,
        s = o.width,
        a = o.height,
        l = e.sm.zp,
        c = eb * e0,
        m = e3 * e0;
      return (
        (i -= (s / l - s) * 0.5),
        (r -= (a / l - a) * 0.5),
        (s /= l) / (a /= l) > ek
          ? ((r -= (m * (t = s / c) - a) / 2), (a = s / ek))
          : ((i -= (c * (t = a / m) - s) / 2), (s = a * ek)),
        { x: i, y: r, w: s, h: a, r: t }
      );
    }
    function tX(e) {
      if (e) {
        eB.stop();
        for (var t = 0; t < e.sm.states.length; ++t) {
          var o = ta[e.sm.states[t]];
          o.attr(o.sm.attributes), og(o, "reset", !1, "state");
        }
      }
    }
    function tY() {
      tc &&
        "state" == tc.sm.type &&
        tc.sm.attributes &&
        (tc.sm.ignore_hover || tc.attr(tc.sm.attributes), og(tc, "out"));
    }
    function tQ(e) {
      if (e) {
        e.stop(), e.attr(e.sm.attributes);
        for (var t = 0; t < e.sm.states.length; ++t)
          og(ta[e.sm.states[t]], "reset", !1, "region");
      }
    }
    function tZ() {
      eT.forEach(function (e) {
        -1 != e.sm.id && tQ(e);
      });
    }
    function tU(e, t) {
      var o,
        i,
        r,
        s = e.sm.display,
        a = t.sm.type;
      if ("all" == s || ("out" == s && "out" == a)) return !0;
      if ("region" == s && "region" == a) {
        return (
          (o = e),
          (i = t),
          (r = o.sm.point0),
          o.sm.display_ids
            ? o.sm.display_ids.indexOf(i.sm.id) > -1
            : !!Raphael.isPointInsideBBox(i.sm.bbox, r.x, r.y)
        );
      }
      if ("state" == s && "state" == a)
        return (function e(t, o) {
          var i = t.sm.point0;
          if (t.sm.display_ids) return t.sm.display_ids.indexOf(o.sm.id) > -1;
          if (Raphael.isPointInsideBBox(o.sm.bbox, i.x, i.y)) {
            var r = tP.paths[o.sm.id];
            if (Raphael.isPointInsidePath(r, i.x, i.y)) return !0;
          }
          return !1;
        })(e, t);
      var l = n.to_float(s);
      if (l && ew < l) return !0;
      return !1;
    }
    function tG(e, t, o) {
      var i = { transform: t };
      en || ec || o ? e.attr(i) : e.animate(i, 1e3 * C);
    }
    function tJ(e, t) {
      var o,
        i,
        r = e.sm.type;
      tI(),
        (o = e),
        (i = t),
        eF.hide(),
        eF.forEach(function (e) {
          if (!e.sm.hide && (tU(e, o) && e.show(), e.sm.scale)) {
            var t = ew > e.sm.scale_limit ? ew : e.sm.scale_limit,
              r = od(e, t * e0);
            tG(e, r, i);
          }
        }),
        (function e(t, o) {
          for (var i in (eL.hide(), tp)) {
            var r = tp[i];
            if (!r.sm.hide) {
              if ((tU(r, t) && tu[r.sm.id].show(), r.sm.line)) {
                var n = o8(r);
                r.sm.line.attr({ path: n, transform: e2 });
              }
              if (r.sm.scale) {
                var s = ew > r.sm.scale_limit ? ew : r.sm.scale_limit,
                  a = od(r, s * e0);
                tG(r, a, o), r.sm.pill && tG(td[r.sm.id], a, o);
              }
            }
          }
        })(e, t),
        n.x_in_array(r, ["state", "region", "out"]) && tZ(),
        "region" == r
          ? tX(e)
          : "state" == r
          ? tX(tl[e.sm.region])
          : "manual" == r &&
            eT.forEach(function (e) {
              -1 != e.sm.id &&
                (e.sm.zooming_dimensions.r > ew && e.sm.zoomable
                  ? tX(e)
                  : tQ(e));
            }),
        "out" != r && "manual" != r
          ? (eB.stop(),
            ej.stop(),
            eB.attr({ "fill-opacity": H }),
            ej.attr({ "fill-opacity": H }),
            e.stop(),
            e.attr({ "fill-opacity": 1 }),
            e.sm.labels.forEach(function (e) {
              e.sm &&
                e.sm.pill &&
                (e.sm.pill.stop(), e.sm.pill.attr({ "fill-opacity": 1 }));
            }),
            e.animate(
              { "stroke-width": e.sm.border_hover_size * (e_ / eb) * a * 1.25 },
              1e3 * C
            ))
          : (eB.attr({ "fill-opacity": 1 }), ej.attr({ "fill-opacity": 1 })),
        eB.animate({ "stroke-width": G * (e_ / eb) * a * 1.25 }, 1e3 * C);
    }
    function tK(e) {
      b && "-1" != g && "region" == e.sm.type
        ? !!L && tL()
        : "state" == e.sm.type || "region" == e.sm.type || L
        ? tL()
        : y && "out" != e.sm.type && tL();
    }
    function t9(e) {
      return { x: e.x, y: e.y, w: e.w, h: e.h };
    }
    function oe() {
      w.sm && k && (t1.hide(), (k = !1), w.sm && t0.call(w), (el = !1));
    }
    function ot(e, t, o) {
      if (!tN) {
        oe(),
          ox && (ox.stop(), (ox = !1)),
          o3 && e != o3 && t0.call(o3),
          (w = !1),
          (to = e),
          t1.hide(),
          (k = !1),
          (tN = !0),
          (e.sm.zooming_dimensions = tW(e));
        var i = t9(e.sm.zooming_dimensions),
          s = t9(tc.sm.zooming_dimensions);
        (ew = e.sm.zooming_dimensions.r),
          tJ(e, t),
          en || (ec && !S) || t
            ? ((tr = i), e1.setViewBox(i.x, i.y, i.w, i.h, !1), a())
            : (ti = (r.Tweenable ? new r.Tweenable() : new Tweenable()).tween({
                from: s,
                to: i,
                duration: 1e3 * C,
                easing: "easeOutQuad",
                step: function (e) {
                  var t;
                  (tr = t = e), e1.setViewBox(t.x, t.y, t.w, t.h, !1);
                },
                finish: function () {
                  a(i);
                },
              }));
      }
      function a() {
        tK(e, t),
          (tc = e),
          (tN = !1),
          (el = !1),
          (tz.zoom_level = tc.sm.type),
          (tz.zoom_level_id = !!tc.sm.id && tc.sm.id),
          (tz.zoom_ratio = ew),
          t7("zooming_complete", []),
          n.isFunction(o) && o();
      }
    }
    function oo(e) {
      var t = "",
        o = {};
      for (var i in tP.paths) {
        var r,
          n = tP.paths[i];
        n = Raphael._pathToAbsolute(n);
        var s = Raphael.pathBBox(n);
        r = s.x2 - s.x < 10 ? 10 : 1;
        var a = Math.round(s.x * r) / r,
          l = Math.round(s.y * r) / r,
          c = Math.round(s.y2 * r) / r;
        (t +=
          "'" +
          i +
          "':{x: " +
          a +
          ",y:" +
          l +
          ",x2:" +
          Math.round(s.x2 * r) / r +
          ",y2:" +
          c +
          "},"),
          (o[i] = s);
      }
      return (
        (t = t.substring(0, t.length - 1)),
        (t += "}"),
        e || console.log("The new state_bbox_array is: \n\n{" + t),
        o
      );
    }
    function oi(e) {
      var t = e.sm.description,
        o =
          '<a id="xpic_sm_' +
          _ +
          '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>',
        i = '<a style="line-height: 1.5" id="xpic_sm_' + _ + '">X</a>',
        r = en ? i : o;
      r = '<div class="xmark_sm">' + r + "</div>";
      var s = e.sm.url ? e.sm.url : "",
        a = s,
        l = "javascript:" == a.substring(0, 11),
        c = n.replaceAll(a, "'", '"'),
        m = Q
          ? 'return (function(e){window.open("' +
            s +
            '","_blank"); return false})()'
          : l
          ? 'return (function(){window.location.href="' +
            s +
            '"; return false;})()'
          : 'return (function(){window.top.location.href="' +
            s +
            '"; return false;})()';
      l && (m = "(function(){" + c + "})()");
      var p = e.sm.description_mobile
        ? e.sm.description_mobile
        : '<div class="tt_mobile_sm"><a tabindex="0" onkeydown="if (event.keyCode == 13) this.click()" class="btn_simplemaps" onClick=\'' +
          m +
          "'>" +
          e.sm.link_text +
          "</a></div>";
      e.sm.on_click || ((r = ""), (p = "")),
        "" != e.sm.url || e.sm.description_mobile || (p = "");
      var u =
        "" == t ? (u = "") : '<div class="tt_custom_sm"; />' + t + "</div>";
      return (
        '<div class="tt_sm"><div>' +
        (e.sm.hide_name
          ? ""
          : '<div class="tt_name_sm">' + e.sm.name + "</div>") +
        r +
        '<div style="clear: both;"></div></div>' +
        u +
        p +
        "</div></div>"
      );
    }
    function or(e, t) {
      var o = e.sm.zooming_dimensions;
      if (o.w > t.sm.zooming_dimensions.w) return !1;
      var i = t.sm.bbox,
        r = { x: i.x * e0, y: i.y * e0, x2: i.x2 * e0, y2: i.y2 * e0 },
        n = o.x + o.w / 2,
        s = o.y + o.h / 2;
      return !!(n > r.x) && !!(s > r.y) && !!(n < r.x2) && !!(s < r.y2);
    }
    function on(e, t) {
      var o = t.hover ? "_hover" : "",
        i = _ + "_pattern_" + e.sm.id + o,
        r = document.getElementById(i);
      r && n.delete_element(r);
      var s = e8.firstChild,
        l = s.namespaceURI,
        c = s.querySelector("defs"),
        m = document.createElementNS(l, "pattern"),
        p = e.sm.id;
      (m.id = i), m.setAttribute("patternUnits", "objectBoundingBox");
      var u = document.createElementNS(l, "image"),
        d = document.createElementNS(l, "rect"),
        f = t.image_color ? t.image_color : t.color;
      d.setAttribute("fill", "#ffffff"),
        d.setAttribute("opacity", t.bg_opacity),
        u.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t.image_url
        ),
        m.appendChild(d),
        m.appendChild(u),
        c.appendChild(m),
        s.appendChild(c);
      var h = t.image_position,
        y = "auto" == t.image_size,
        v = "repeat" == h,
        g = "manual" == h,
        b = "center" == h,
        x = Raphael.pathBBox(tP.paths[p]),
        w = x.x2 - x.x,
        k = x.y2 - x.y,
        z = w / k;
      return (
        Raphael._preload(t.image_url, function () {
          var e,
            o,
            i,
            r = this.offsetWidth,
            n = this.offsetHeight,
            s = r / n,
            l =
              ((i = t.image_size),
              y
                ? v || g
                  ? (i =
                      s > 1 ? (r > w ? 1 : r / w) : n > k ? 1 / z : n / k / z)
                  : b && ((i = s / z), s > z || (i = 1 / i))
                : i > 1 && (i = (t.image_size * a) / w),
              i),
            c = w * l,
            p = c / s,
            h = 0,
            _ = 0;
          if (
            (v
              ? ((e = l), (o = (l * z) / s))
              : g
              ? ((e = 1), (o = 1), (h = t.image_x * w), (_ = t.image_y * k))
              : b &&
                ((e = 1), (o = 1), (h = 0.5 * (w - c)), (_ = 0.5 * (k - p))),
            d.setAttribute("x", 0),
            d.setAttribute("y", 0),
            d.setAttribute("width", w),
            d.setAttribute("height", k),
            d.setAttribute("fill", f),
            d.setAttribute("opacity", "1"),
            m.setAttribute("y", 0),
            m.setAttribute("x", 0),
            m.setAttribute("y", 0),
            m.setAttribute("width", e),
            m.setAttribute("height", o),
            u.setAttribute("x", h),
            u.setAttribute("y", _),
            u.setAttribute("width", c),
            $)
          ) {
            var x = h + 0.5 * c,
              P = _ + 0.5 * p;
            u.setAttribute(
              "transform",
              "rotate(-" + $ + "," + x + "," + P + ")"
            );
          }
          u.setAttribute("height", p);
        }),
        'url("#' + m.id + '")'
      );
    }
    var os = !1;
    function oa(e) {
      e || ((ts = {}), (ta = {})), (os = tP.state_bbox_array);
      var t = G * e0 * a * 1.25;
      for (var i in ((tn = function (e) {
        var i = !ta[e],
          r = eX[e];
        !r.path &&
          (r.geojson_value || r.feature || "geojson" == r.type) &&
          (r.path = tq(r, os, eX, e, "state"));
        var n = r.path ? r.path : tP.paths[e],
          l = i ? e1.path(n) : ta[e];
        i && (l.sm = { id: e }),
          en || l.node.setAttribute("class", "sm_state sm_state_" + e);
        var c = {
            fill: r.color,
            opacity: r.opacity,
            stroke: r.border_color,
            cursor: "pointer",
            "stroke-opacity": 1,
            "stroke-width": t,
            "stroke-linejoin": "round",
          },
          m = r.border_hover_color ? r.border_hover_color : s.border_color,
          p = r.border_hover_size ? r.border_hover_size : G,
          u = p * e0 * a * 1.25,
          d = {
            opacity: r.hover_opacity,
            fill: r.hover_color,
            stroke: m,
            "stroke-width": u,
          };
        if (((l.sm.image = !1), r.image_url && !en)) {
          var f = {
              hover: !1,
              image_url: r.image_url,
              image_size: r.image_size,
              image_position: r.image_position,
              image_x: r.image_x,
              image_y: r.image_y,
              image_color: r.image_color,
              bg_opacity: r.image_background_opacity,
            },
            h = on(l, f);
          if (((l.sm.image = !0), (c.fill = h), r.image_hover_url)) {
            var f = {
                hover: !0,
                image_url: r.image_hover_url,
                image_size: r.image_hover_size,
                image_position: r.image_hover_position,
                image_x: r.image_hover_x,
                image_y: r.image_hover_y,
                image_color: r.image_hover_color,
                bg_opacity: r.image_background_opacity,
              },
              h = on(l, f);
            d.fill = h;
          } else d.fill = h;
        }
        r.inactive && (c.cursor = "default"),
          r.image_source &&
            ((l.sm.ignore_hover = !0),
            (c.fill = "url(" + o + r.image_source + ")")),
          (r.border_hover_color || r.border_hover_size) && r.emphasize
            ? (l.sm.emphasizable = !0)
            : (l.sm.emphasizable = !1),
          (l.sm.border_hover_size = p),
          l.attr(c),
          l.transform(e2),
          (l.sm.attributes = c),
          (l.sm.over_attributes = d),
          (l.sm.description = r.description),
          (l.sm.adjacent_attributes = { "fill-opacity": H }),
          (l.sm.hide = r.hide),
          (l.sm.link_text = r.link_text),
          (l.sm.hide_label = r.hide_label),
          (l.sm.hide_name = r.hide_name),
          i && (l.sm.region = !1),
          (l.sm.name = r.name ? r.name : tP.names[e]),
          l.sm.name || (l.sm.name = e),
          (l.sm.url = r.url),
          (l.sm.inactive = r.inactive),
          (l.sm.on_click = tA(r.popup)),
          (l.sm.popup_off = tE(r.popup)),
          (l.sm.labels = []),
          (l.sm.zp = r.zoom_percentage),
          (l.sm.zoomable = r.zoomable),
          (l.sm.level = r.level),
          (l.sm.description_mobile = r.description_mobile),
          (l.sm.type = "state"),
          (l.sm.hide_labels = r.hide_label),
          (l.sm.content = oi(l));
        var $ = os[e];
        $ || ($ = Raphael.pathBBox(n));
        var y = { x: $.x, x2: $.x2, y: $.y, y2: $.y2 };
        (l.sm.bbox = y),
          (l.sm.bbox.width = y.x2 - y.x),
          (l.sm.bbox.height = y.y2 - y.y),
          (l.sm.pulse_speed = r.pulse_speed),
          (l.sm.pulse_size = r.pulse_size),
          (l.sm.pulse_color = r.pulse_color ? r.pulse_color : r.border_color),
          l.sm.hide ? l.hide() : i && eP.push(l),
          i && ((ta[e] = l), eB.push(l));
      }),
      eZ))
        tn(i);
      tn[-1], eB.hide();
    }
    function ol() {
      eC.attr({ fill: s.background_color, "fill-opacity": V, stroke: "none" });
    }
    var oc = !1;
    function om(e) {
      if ((e || (tl = {}), z))
        for (var t in z) {
          var o = eQ[t],
            i = z[t],
            r = e ? tl[t] : e1.set();
          if (!e) {
            if (((r.sm = {}), (r.sm.states = []), tl[t])) {
              console.log("Duplicate Regions");
              continue;
            }
            for (var s = [], a = 0; a < i.states.length; a++) {
              var l = i.states[a],
                c = ta[l];
              if (!c) {
                console.log(l + " does not exist");
                continue;
              }
              if (c.sm.region) {
                console.log(c.sm.name + " already assigned to a region");
                continue;
              }
              (c.sm.region = t),
                r.sm.states.push(l),
                (en && c.sm.ignore_hover && (o.color || o.hover_color)) ||
                  r.push(c),
                s.push(c.sm.bbox);
            }
            o.x &&
              o.y &&
              o.x2 &&
              o.y2 &&
              (s = [{ x: o.x, y: o.y, x2: o.x2, y2: o.y2 }]),
              (r.sm.bbox = n.bbox_union(s));
          }
          var m = { "fill-opacity": o.opacity, cursor: "pointer" },
            p = { "fill-opacity": o.hover_opacity };
          o.color && (m.fill = o.color),
            o.hover_color && (p.fill = o.hover_color),
            o.inactive && (m.cursor = "default"),
            (r.sm.attributes = m),
            (r.sm.name = i.name),
            (r.sm.description = o.description),
            (r.sm.description_mobile = o.description_mobile),
            (r.sm.url = o.url),
            (r.sm.labels = e1.set()),
            (r.sm.on_click = tA(o.popup)),
            (r.sm.over_attributes = p),
            (r.sm.hide_name = o.hide_name),
            (r.sm.adjacent_attributes = { "fill-opacity": H }),
            (r.sm.zoomable = o.zoomable),
            (r.sm.popup_off = tE(o.popup)),
            (r.sm.zp = o.zoom_percentage),
            (r.sm.inactive = o.inactive),
            (r.sm.type = "region"),
            (r.sm.id = t),
            (r.sm.content = oi(r)),
            e || (eT.push(r), (tl[t] = r)),
            (r.sm.zooming_dimensions = tW(r));
        }
      if (!e) {
        tl[-1] = {};
        var u = tl[-1];
        (u.sm = {}), (u.sm.type = "out"), (u.sm.zp = 1);
        var d = n.clone(ex);
        if (
          ((d.width = d.x2 - d.x),
          (d.height = d.y2 - d.y),
          (u.sm.bbox = d),
          (u.sm.zooming_dimensions = tW(u)),
          (tc = u),
          "object" == typeof g
            ? (((tm = {}).sm = { type: "manual", zp: 1, bbox: g }),
              (tm.sm.zooming_dimensions = tW(tm)),
              (g = -1),
              (b = !1))
            : -1 == g ||
              g in tl ||
              (g in ta
                ? ((oc = ta[g]), (b = !1))
                : console.log(
                    "The initial_zoom is not the id of a region or state"
                  ),
              (g = -1)),
          h)
        ) {
          tl[-2] = {};
          var f = tl[-2];
          f.sm = { type: "manual", zp: 1 };
          var $ = tW(tl[g]),
            y = $.w,
            v = $.h,
            _ = $.w * (h - 1) * 0.5,
            x = $.h * (h - 1) * 0.5;
          f.sm.zooming_dimensions = {
            x: $.x - _,
            y: $.y - x,
            w: y * h,
            h: v * h,
            r: h,
          };
        }
      }
    }
    function op(e) {
      var t = e.getBBox(!0);
      if (en) {
        var o = e._getBBox(!0);
        t.height = o.height;
      }
      var i = 0.5 * t.width,
        r = 0.5 * t.height,
        n = e.sm.point0;
      return {
        x: n.x - i,
        y: n.y - r,
        x2: n.x + i,
        y2: n.y + r,
        width: t.width,
        height: t.height,
      };
    }
    function ou() {
      for (var e in (n.clear_sets([eL, e5, ej]),
      (tp = {}),
      (td = {}),
      (tu = {}),
      (eG = eG.reverse()),
      (t8 = function (e) {
        var t = eG[e],
          o = !1,
          i = !1;
        if (eG.hasOwnProperty(e)) {
          var r = !tp[e],
            l = e1.set(),
            c = { x: 1 * t.x, y: 1 * t.y },
            m = {},
            p = !1,
            u = !1;
          if (
            ("state" == t.parent_type
              ? (p = ta[t.parent_id])
              : "region" == t.parent_type
              ? (p = tl[t.parent_id])
              : "location" == t.parent_type && (p = tf[t.parent_id]),
            !t.x && !t.y && p)
          ) {
            if ("location" == p.sm.type)
              (i = !0),
                (m.x = p.sm.x),
                (m.y = p.sm.y),
                (c = p.sm.point0),
                (o = !0),
                p.sm.auto_size && (u = !0);
            else if ("state" == p.sm.type) {
              var d = p.sm.bbox;
              if (d.cx && d.cy)
                var f = C,
                  h = S;
              else
                var f = (d.x + d.x2) / 2,
                  h = (d.y + d.y2) / 2;
              (t.x = f), (t.y = h), (m.x = f), (m.y = h), (c = { x: f, y: h });
            }
          }
          if ((t.parent_type, !p)) {
            console.log("The following object does not exist: " + e);
            return;
          }
          if (("Not Named" == t.name && p && (t.name = p.sm.id), r)) {
            if (!i) {
              var $ = n.rotate([t.x, t.y], e2);
              m = { x: $[0], y: $[1] };
            }
            var y = e1.text(m.x, m.y, t.name);
            tp[e] = y;
          } else var y = tp[e];
          (y.sm = {}),
            (y.sm.hide = t.hide),
            p && (p.sm.hide_label || p.sm.hide) && (y.sm.hide = !0),
            (y.sm.parent = p),
            p.sm.labels.push(y),
            p.sm.region && tl[p.sm.region].sm.labels.push(y);
          var v = {
              "stroke-width": 0,
              fill: t.color,
              "font-size": t.size,
              "font-weight": "bold",
              cursor: "pointer",
              "font-family": t.font_family,
              "text-anchor": t.anchor,
              opacity: t.opacity,
            },
            _ = { fill: t.hover_color, opacity: t.hover_opacity },
            g = { fill: t.color, opacity: t.opacity };
          if (
            (p.sm.inactive && (v.cursor = "default"),
            y.attr(v),
            (y.sm.attributes = v),
            (y.sm.over_attributes = _),
            (y.sm.out_attributes = g),
            (y.sm.type = "label"),
            (y.sm.id = e),
            (y.sm.scale = o || t.scale),
            (y.sm.scale_limit = t.scale_limit),
            (y.sm.x = m.x),
            (y.sm.y = m.y),
            (y.sm.level = n.to_float(p.sm.level) + 0.1),
            (y.sm.point0 = c),
            (y.sm.line_x = t.line_x),
            (y.sm.line_y = t.line_y),
            (y.sm.line = !1),
            (y.sm.rotate = t.rotate),
            y.transform(od(y, e0)),
            t.display
              ? (y.sm.display = t.display)
              : "region" == t.parent_type
              ? (y.sm.display = "out")
              : "location" == t.parent_type
              ? (y.sm.display = p.sm.display)
              : (y.sm.display = s.labels_display ? s.labels_display : "all"),
            (y.sm.display_ids = !!t.display_ids && t.display_ids),
            (t.line || t.pill || u) && (y.sm.bbox = op(y)),
            "auto" == t.display && "state" == t.parent_type)
          ) {
            (y.sm.display = 1e-4), y.sm.bbox || (y.sm.bbox = op(y));
            var b = [1.01, 0.501, 0.251, 0.1251, 0.06251, 0.031251],
              x = tP.paths[p.sm.id],
              w = p.sm.bbox;
            for (var k in b) {
              var z = b[k],
                P = op(y),
                A = P.width * z * 0.5,
                E = P.height * z * 0.5,
                C = 0.5 * (P.x2 + P.x),
                S = 0.5 * (P.y2 + P.y),
                f = C - A,
                j = C + A,
                h = S - E,
                B = S + E,
                T = f > w.x && j < w.x2,
                F = h > w.y && B < w.y2;
              if (T && F) {
                var O = Raphael.isPointInsidePath(x, f, h),
                  I = Raphael.isPointInsidePath(x, j, h),
                  L = Raphael.isPointInsidePath(x, f, B),
                  M = Raphael.isPointInsidePath(x, j, B),
                  N = O && I && L && M,
                  D = P.width / z < eb;
                if (N && D) {
                  y.sm.display = z;
                  break;
                }
              }
              if (!y.sm.scale) break;
            }
          }
          if (t.line) {
            var R = o8(y),
              q = e1.path(R),
              H = t.line_size * a * e0 * 1.25,
              V = {
                stroke: t.line_color,
                cursor: "pointer",
                "stroke-width": H,
              };
            q.attr(V),
              (q.sm = {}),
              (q.sm.type = "label"),
              (y.sm.pill = !1),
              (q.sm.size = t.line_size),
              (q.sm.id = e),
              (q.sm.level = t.level),
              (y.sm.line = q),
              e5.push(q),
              l.push(q);
          }
          if ("state" == p.sm.type && t.pill) {
            var W = y.sm.bbox,
              X = 1.45 * W.width,
              Y = t.width ? t.width : X,
              Q = 1.15 * W.height,
              f = y.sm.x - 0.5 * Y,
              h = y.sm.y - 0.5 * Q,
              Z = "auto" != t.pill_radius ? t.pill_radius : Q / 5;
            if (td[e]) var U = td[e];
            else {
              var U = e1.rect(f, h, Y, Q, Z);
              td[e] = U;
            }
            if (
              (U.transform(od(y, e0)),
              (U.sm = {}),
              (U.sm.parent = p),
              (U.sm.level = p.sm.level),
              (U.sm.attributes = n.clone(p.sm.attributes)),
              p.sm.image && (U.sm.attributes.fill = eX[p.sm.id].color),
              (U.sm.over_attributes = n.clone(p.sm.over_attributes)),
              p.sm.image &&
                (U.sm.over_attributes.fill = eX[p.sm.id].hover_color),
              (U.sm.adjacent_attributes = n.clone(p.sm.adjacent_attributes)),
              U.attr(U.sm.attributes),
              n.x_in_array(y.sm.display, ["state", "all"]) &&
                (p.sm.bbox = n.bbox_union([p.sm.bbox, y.sm.bbox])),
              n.x_in_array(y.sm.display, ["region", "all"]) && p.sm.region)
            ) {
              var G = tl[p.sm.region];
              (G.sm.bbox = n.bbox_union([G.sm.bbox, y.sm.bbox])),
                (G.sm.zooming_dimensions = !1),
                (G.sm.zooming_dimensions = tW(G));
            }
            (y.sm.pill = U), ej.push(U), l.push(U), l.push(y);
          } else l.push(y);
          if (
            (("out" != y.sm.display && "all" != y.sm.display) || y.sm.hide
              ? l.hide()
              : e7.push(l),
            "location" != y.sm.parent.sm.type || y.sm.line || e6.push(l),
            eL.push(l),
            (tu[e] = l),
            en || y.node.setAttribute("class", "sm_label sm_label_" + e),
            u)
          ) {
            var J =
                ((s.location_auto_padding
                  ? 1 + 2 * s.location_auto_padding
                  : 1.3) *
                  y.sm.bbox.width) /
                a,
              K = y.sm.parent,
              ee = K.sm.labels,
              et = K.sm.shape_type;
            "triangle" == et ? (J *= 1.3) : "star" == et && (J *= 2);
            var eo = K.sm.id;
            (eY[eo].size = J), th(eo);
            var K = tf[eo];
            (y.sm.parent = K),
              (K.sm.labels = ee),
              K.sm.labels.push(y),
              (K.sm.auto_size = !0);
          }
        }
      }),
      eG))
        t8(e);
      eL.hide();
    }
    function o8(e) {
      var t = e.sm.bbox,
        o = t.x2 - t.x,
        i = t.y2 - t.y,
        r = e.sm.scale ? ew : 1,
        s = 0.5 * (1 - r) * o,
        a = 0.5 * (1 - r) * i,
        l = e.sm.line_x,
        c = e.sm.line_y,
        m = !l || !c,
        p = e.sm.parent.sm.type;
      if ("location" == p && m)
        (l = e.sm.parent.sm.point0.x), (c = e.sm.parent.sm.point0.y);
      else if ("state" == p && m) {
        var u = e.sm.parent.sm.bbox;
        (l = 0.5 * (u.x2 + u.x)), (c = 0.5 * (u.y2 + u.y));
      }
      var d = { x: l, y: c },
        f = [];
      f.push({ x: t.x2 - s, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: t.x + s, y: 0.5 * (t.y + t.y2) }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y + a }),
        f.push({ x: 0.5 * (t.x + t.x2), y: t.y2 - a });
      var h = {};
      for (var $ in f) {
        var y = f[$],
          v = n.distance(y, d);
        (0 == $ || v < h.distance) &&
          ((h.label = y), (h.location = d), (h.distance = v));
      }
      return n.linePath(h.label.x, h.label.y, h.location.x, h.location.y);
    }
    function od(e, t, o, i, r, n) {
      var s = void 0 === i ? e.sm.x : i,
        a = void 0 === r ? e.sm.y : r;
      return (
        void 0 === o && (o = "0,0"),
        void 0 === n && (n = e.sm.rotate),
        "t " + o + " s" + t + "," + t + "," + s + "," + a + "r" + n
      );
    }
    var of = {
      triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
      diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
      marker:
        "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
      heart:
        "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
      star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377",
    };
    function oh(e) {
      for (var t in B) of[t] = B[t];
      var i = [];
      for (var t in of) i.push(t);
      for (var t in (n.clear_sets([eF]),
      (tf = {}),
      (th = function (e) {
        var t = "center",
          r = eY[e];
        if ("image" != r.type)
          var s = {
              "stroke-width": r.border * e0 * a,
              stroke: r.border_color,
              fill: r.color,
              opacity: r.opacity,
              cursor: "pointer",
            },
            l = {
              "stroke-width": r.hover_border * e0 * a,
              stroke: r.border_color,
              fill: r.hover_color,
              opacity: r.hover_opacity,
              cursor: "pointer",
            };
        else {
          t = r.image_position;
          var s = { cursor: "pointer" },
            l = { cursor: "pointer" };
        }
        r.inactive && (s.cursor = "default");
        var c = eY[e].type,
          m = r.size * a;
        if (r.x && r.y) {
          var p = {};
          (p.x = r.x), (p.y = r.y);
        } else var p = tH(r.lat, r.lng);
        var u = n.rotate([p.x, p.y], e2),
          d = { x: u[0], y: u[1] };
        if ("auto" == r.size) {
          var f = { sm: {} };
          (f.sm.display = r.display),
            (f.sm.auto_size = !0),
            (f.sm.type = "location"),
            (f.sm.hide_label = !1),
            (f.sm.labels = []),
            (f.sm.point0 = p),
            (f.sm.x = d.x),
            (f.sm.y = d.y),
            (f.sm.shape_type = c),
            (f.sm.id = e),
            (tf[e] = f);
          return;
        }
        if ("circle" == c)
          var h = e1.circle(d.x, d.y, 0.5 * m),
            $ = {
              x: d.x - 0.5 * m * ew,
              y: d.y - 0.5 * m * ew,
              x2: d.x + 0.5 * m * ew,
              y2: d.y + 0.5 * m * ew,
            };
        else if (n.x_in_array(c, i)) {
          var y = m,
            v = "S" + y + "," + y + ",0,0 T" + d.x + "," + d.y,
            _ = Raphael.transformPath(of[c], v).toString() + "Z";
          "marker" == c && (t = "bottom-center");
          var $ = Raphael.pathBBox(_),
            h = e1.path(_);
        } else if ("path" == c && eY[e].path) {
          var $ = Raphael.pathBBox(_),
            h = e1.path(eY[e].path);
          r.scale = !1;
        } else if ("geojson" == c) {
          var _ = tq(eY[e], eJ, eY, e, "location"),
            $ = Raphael.pathBBox(_);
          r.scale = !1;
          var h = e1.path(_);
        } else if ("image" == c) {
          var g = r.image_url ? r.image_url : o + r.image_source,
            h = e1.image(g, 0, 0);
          (s.src = g), (h.sm = {});
          var $ = !1;
          if (
            (Raphael._preload(g, function () {
              var e = this.width / this.height,
                o = m,
                i = o * e,
                r = d.x - i / 2,
                n = "bottom-center" == t ? d.y - o : d.y - o / 2;
              h.attr({ height: o, width: i, x: r, y: n }),
                (h.sm.bbox = { x: r, y: n, x2: r + i, y2: n + o });
            }),
            r.image_hover_url || r.image_hover_source)
          ) {
            var b = r.image_hover_url
              ? r.image_hover_url
              : o + r.image_hover_source;
            l.src = b;
          }
        } else
          var x = m,
            w = x,
            k = d.x - w / 2,
            z = d.y - x / 2,
            h = e1.rect(k, z, w, x),
            $ = { x: k, y: z, x2: k + w, y2: z + eg };
        (h.sm = {}),
          (h.sm.image = "image" == c),
          (h.sm.attributes = s),
          h.attr(s),
          (h.sm.link_text = r.link_text),
          (h.sm.original_transform = e2),
          (h.sm.over_attributes = l),
          (h.sm.id = e),
          (h.sm.name = r.name),
          (h.sm.scale = r.scale),
          (h.sm.scale_limit = r.scale_limit),
          (h.sm.position = t),
          (h.sm.url = r.url),
          (h.sm.type = "location"),
          (h.sm.shape_type = c),
          (h.sm.description = r.description),
          (h.sm.description_mobile = r.description_mobile),
          (h.sm.inactive = r.inactive),
          (h.sm.on_click = tA(r.popup)),
          (h.sm.popup_off = tE(r.popup)),
          (h.sm.pulse = r.pulse),
          (h.sm.level = r.level),
          "bottom" == r.position && (h.sm.level = -1),
          (h.sm.pulse_speed = r.pulse_speed),
          (h.sm.pulse_size = r.pulse_size),
          (h.sm.pulse_color = r.pulse_color ? r.pulse_color : r.color),
          (h.sm.x = d.x),
          (h.sm.y = d.y),
          (h.sm.point0 = p),
          (h.sm.bbox = $),
          (h.sm.labels = []),
          (h.sm.size = m),
          (h.sm.hide = r.hide),
          (h.sm.hide_name = r.hide_name),
          (h.sm.display = r.display),
          (h.sm.display_ids = !!r.display_ids && r.display_ids),
          h.transform(od(h, ew * e0)),
          ("region" == h.sm.display || "state" == h.sm.display || r.hide) &&
            h.hide(),
          (h.sm.content = oi(h)),
          eF.push(h),
          (tf[e] = h),
          en || h.node.setAttribute("class", "sm_location sm_location_" + e);
      }),
      eJ))
        th(t);
    }
    function o$(e) {
      if (!e.sm) return e;
      var t = tz.zoom_level,
        o = tz.zoom_level_id,
        i = !!e.sm.region && tl[e.sm.region];
      if (!i) return e;
      if ("out" == t) return i;
      if ("region" == t) return o == i.sm.id ? e : i;
      if ("state" == t) return ta[o].sm.region === i.sm.id ? e : i;
      if ("manual" == t)
        return ew > i.sm.zooming_dimensions.r || !i.sm.zoomable ? i : e;
    }
    function oy(e) {
      var t = tz.zoom_level,
        o = tz.zoom_level_id;
      if ("state" == t) return o != e.sm.id;
      if ("region" != t) return !1;
      var i = !!e.sm.region && tl[e.sm.region];
      return !i || (o != i.sm.id && void 0);
    }
    var ov = function (e, t, o, i) {
        void 0 == o && (o = !1),
          void 0 == i && (i = !1),
          i ||
            (i =
              "over" == t
                ? e.sm.over_attributes
                : "adjacent" == t
                ? e.sm.adjacent_attributes
                : e.sm.attributes),
          !o || e.sm.image ? e.attr(i) : e.animate(i, D);
      },
      o_ = function (e, t, o) {
        if ((void 0 == o && (o = !1), "state" == o))
          var i,
            r = e.sm.parent;
        else if ("region" == o) var r = tl[e.sm.parent.sm.region];
        else var r = o$(e.sm.parent);
        if (
          ((i =
            "over" == t
              ? n.clone(r.sm.over_attributes)
              : "adjacent" == t
              ? n.clone(r.sm.adjacent_attributes)
              : n.clone(r.sm.attributes)),
          r.sm.image && "state" == r.sm.type)
        ) {
          var s = eX[r.sm.id];
          "over" == t ? (i.fill = s.hover_color) : (i.fill = s.color);
        }
        ov(e, t, !1, i);
      };
    function og(e, t, o, i) {
      if (e.sm.labels) {
        var r;
        e.sm.labels.forEach(function (e) {
          if (e.sm) {
            var r = e.sm.pill;
            "over" == t
              ? (e.stop(), ov(e, "over"), r && o_(r, "over"))
              : ("reset" == t || "out" == t) &&
                (ov(e, "out"),
                r && (o_(r, "out", i), o && o_(r, "adjacent", i)));
          }
        });
      }
    }
    var o0 = !1,
      ob = function (e, t) {
        if (!e.sm || !e) {
          n.isFunction(t) && t();
          return;
        }
        var o = !!e.sm.image || (!!ec && !!y);
        if ((t1.hide(), oy(e)))
          e.sm.ignore_hover || e.animate(e.sm.attributes, D, i),
            e.animate(e.sm.adjacent_attributes, D, i),
            og(e, "out", !0);
        else {
          if (
            (en && "location" == e.sm.type && "image" == e.sm.shape_type) ||
            !e ||
            !e.sm
          )
            return;
          e.sm.ignore_hover ||
            (o
              ? (e.attr(e.sm.attributes), i())
              : e.animate(e.sm.attributes, D, i)),
            og(e, "out");
        }
        function i() {
          n.isFunction(t) && t();
        }
      },
      o3 = !1,
      ox = !1;
    function ow(e) {
      if (e.touches) {
        var t = e.changedTouches ? e.changedTouches[0] : e.touches[0];
        return { x: t.clientX, y: t.clientY };
      }
      var o = es ? e.clientY + document.documentElement.scrollTop : e.pageY;
      return {
        x: es ? e.clientX + document.documentElement.scrollLeft : e.pageX,
        y: o,
      };
    }
    var ok = function () {
        oe();
      },
      o1 = {};
    function oz() {
      var e = [eB, eF, eL, e5, ej];
      all = [];
      for (var t = 0; t < e.length; t++)
        for (var o = 0; o < e[t].length; o++)
          if (e[t][o].length > 0)
            for (var i = 0; i < e[t][o].length; i++) all.push(e[t][o][i]);
          else all.push(e[t][o]);
      var r = (function e(t) {
          for (var o = {}, i = 0; i < t.length; i++) {
            var r = t[i],
              s = r.sm.level.toString();
            o[s] || (o[s] = []), o[s].push(r);
          }
          var a = [];
          for (var s in o) o.hasOwnProperty(s) && a.push(n.to_float(s));
          a.sort(function (e, t) {
            return t - e;
          });
          for (var l = [], c = {}, m = 0; m < a.length; m++) {
            for (var p = o[a[m]], u = e1.set(), d = 0; d < p.length; d++)
              u.push(p[d]);
            var f = a[m].toString();
            u.items.reverse(), (c[f] = u), l.push(u);
          }
          return [l, c];
        })(all),
        s = r[0];
      o1 = r[1];
      for (var t = 0; t < s.length; t++) s[t].toBack();
      eE.toBack();
    }
    function o5(e) {
      !e &&
        (ea
          ? (eB.mouseup(t_), eE.mouseup(ok), eN.mouseup(tw), eE.mouseup(oM))
          : (eB.hover(tg, t0),
            eB.click(t_),
            eE.click(ok),
            eN.click(tw),
            eE.hover(oM, oM)),
        v &&
          (function e() {
            var t;
            function o() {
              oP();
            }
            (tk = function () {
              clearTimeout(t), (t = setTimeout(o, 200));
            }),
              window.addEventListener
                ? (window.addEventListener("resize", tk, !1),
                  window.addEventListener("orientationchange", tk, !1))
                : (window.attachEvent("resize", tk, !1),
                  window.attachEvent("orientationchange", tk, !1)),
              en &&
                (document.body.onresize = function () {
                  o();
                });
          })(),
        y &&
          (eB.touchstart(t_),
          eB.touchend(t_),
          eN.touchend(tx),
          (function e() {
            function t(e) {
              var t = ow(e),
                n = t.x,
                s = t.y,
                a = (i - n) * o.r,
                l = (r - s) * o.r,
                c = 5 * o.r;
              return (
                (Math.abs(a) > c || Math.abs(l) > c) && (tD = !0),
                { x: o.x + a, y: o.y + l, w: o.w, h: o.h, r: o.r }
              );
            }
            var o,
              i,
              r,
              s = !1;
            function a(e) {
              if (k) return !1;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                (o = { x: tr.x, y: tr.y, w: tr.w, h: tr.h, r: tr.w / eb / e0 }),
                (s = !0);
              var t = ow(e);
              (i = t.x), (r = t.y), t1.hide(), t1.pos(e);
            }
            function l(e) {
              if (s && (!e.touches || !(e.touches.length > 1))) {
                var o = t(e);
                e1.setViewBox(o.x, o.y, o.w, o.h);
              }
            }
            function c(e) {
              if (!s || !tD) {
                (tD = !1), (s = !1);
                return;
              }
              var o = t(e);
              e1.setViewBox(o.x, o.y, o.w, o.h),
                (tr = o),
                ((tc = { sm: {} }).sm.zooming_dimensions = tr),
                (tc.sm.type = "manual"),
                (s = !1),
                setTimeout(function () {
                  tD = !1;
                }, 1),
                tL();
            }
            n.addEvent(e8, "mousedown", a),
              n.addEvent(e8, "mousemove", l),
              n.addEvent(e8, "mouseup", c),
              n.addEvent(e8, "mouseleave", c),
              n.addEvent(e8, "touchstart", a),
              n.addEvent(e8, "touchmove", l),
              n.addEvent(e8, "touchend", c);
          })(),
          (function e() {
            var t = !1;
            function o(e) {
              if (!tN && e.touches && e.touches.length > 1) {
                tR = !0;
                var o,
                  i,
                  r,
                  s =
                    ((i = {
                      x: (o = e).touches[0].pageX,
                      y: o.touches[0].pageY,
                    }),
                    (r = { x: o.touches[1].pageX, y: o.touches[1].pageY }),
                    n.distance(i, r));
                if (t) {
                  var a = s - t;
                  Math.abs(a) > 10 && (a > 0 ? eH() : eV(), (t = s));
                } else t = s;
              }
            }
            n.addEvent(ef, "touchstart", o),
              n.addEvent(ef, "touchmove", o),
              n.addEvent(ef, "touchend", function e(o) {
                (t = !1),
                  setTimeout(function () {
                    tR = !1;
                  }, 100);
              });
          })()),
        (ed.mouseIsOver = !1),
        (ed.onmouseover = function () {
          this.mouseIsOver = !0;
        }),
        (ed.onmouseout = function () {
          this.mouseIsOver = !1;
        }),
        (ed.onwheel = function (e) {
          ed.mouseIsOver &&
            y &&
            P &&
            (e.preventDefault(), e.deltaY < 0 ? eH() : eV());
        }),
        n.addEvent(document, "keyup", function e(t) {
          "auto" == d &&
            (ef.contains(document.activeElement)
              ? e$.style.setProperty("display", "block")
              : e$.style.setProperty("display", "none"));
        })),
        eF.hover(tg, t0),
        eF.click(t_),
        eL.hover(tb, t3),
        eL.click(tv),
        y && (eF.touchend(t_), eF.touchstart(t_), eL.touchend(tv));
    }
    function oP() {
      if (!(ed.offsetWidth < 1)) {
        tS(!0), e1.setSize(e_, eg);
        var e = G * (e_ / eb) * a * 1.25;
        eB &&
          eF &&
          (eB.forEach(function (t) {
            t.attr({ "stroke-width": e }),
              (t.sm.attributes["stroke-width"] = e),
              (t.sm.over_attributes["stroke-width"] =
                t.sm.border_hover_size * (e_ / eb) * a * 1.25);
          }),
          eF.forEach(function (e) {
            "image" != eY[e.sm.id].type &&
              ((e.sm.attributes["stroke-width"] =
                eY[e.sm.id].border * (e_ / eb) * a * 1.25),
              (e.sm.over_attributes["stroke-width"] =
                eY[e.sm.id].hover_border * (e_ / eb) * a * 1.25),
              e.attr({ "stroke-width": e.sm.attributes["stroke-width"] }));
          }),
          e5.forEach(function (e) {
            var t = e.sm.size * (e_ / eb) * a * 1.25;
            e.attr({ "stroke-width": t });
          }),
          e4.forEach(function (e) {
            var t = e.sm.size * (e_ / eb) * a * 1.25;
            e.attr({ "stroke-width": t });
          })),
          tO();
        var t = e_ / 2 > 250 ? e_ / 2 : 250;
        tt = K || t;
      }
    }
    function o6(e) {
      var t = h ? tl[-2] : tl[g],
        o = tl[g];
      if ((L || tI(), !e)) {
        if (oc) var i = oc;
        else if (tm) var i = tm;
        else var i = t;
        ot(i, (!oc && !tm) || !h);
      }
      if (b && -1 != g) {
        eE.show(), L || tI();
        for (var r = 0; r < o.sm.states.length; r++) {
          var n = ta[o.sm.states[r]];
          n.sm.hide || n.show();
        }
        for (var r in tp) {
          var s = tp[r],
            a = tu[r];
          s.sm.parent &&
            "state" == s.sm.parent.sm.type &&
            (s.sm.parent.sm.region != o.sm.id || !s.sm.parent.sm.region) &&
            ((s.sm.hide = !0), a.hide());
        }
        e4.forEach(function (e) {
          Raphael.isPointInsideBBox(o.sm.bbox, e.sm.bbox.x, e.sm.bbox.y) &&
            e.show();
        }),
          !e && h && ot(tl[g]);
        return;
      }
      eE.show(),
        eP.show(),
        e7.show(),
        e4.show(),
        e || !h || oc || tm || ot(tl[g]);
    }
    function o4(e) {
      t2(),
        tM(),
        oa(!0),
        om(!0),
        oh(!0),
        ou(),
        ol(),
        tJ(tc, !0),
        oz(),
        o5(!0),
        oP(),
        o6(!0),
        tK(tc),
        oJ(),
        oC(!0),
        t7("refresh_complete", []),
        tj(!0),
        n.isFunction(e) && e();
    }
    function o7(r) {
      var c,
        C,
        S,
        B,
        O,
        I,
        M,
        D,
        R,
        H,
        V,
        X,
        Y,
        Z,
        U,
        G,
        ev,
        ek,
        eX,
        eY,
        eQ,
        eZ,
        eU,
        eG,
        eJ,
        eK,
        e9,
        to;
      if (
        ((t5 = tz.mapdata),
        (tP = tz.mapinfo),
        e8 && delete window.paper,
        oG(),
        (i = t5.state_specific),
        (s = t5.main_settings),
        (C = (c = document.getElementsByTagName("script"))[c.length - 1].src),
        (S = "no" != s.back_image && s.back_image),
        (e = "no" != s.back_image_url && s.back_image_url),
        (o =
          (t = "default" != s.images_directory && s.images_directory) ||
          C.substring(0, C.lastIndexOf("/countrymap.js") + 1) + "map_images/"),
        !e && S && (e = o + S),
        (en = "VML" == Raphael.type),
        (es = !!window.document.documentMode),
        (ea = !!n.isMobile.iOS()),
        (ec = !!n.isMobile.any()),
        (em = s.pop_ups ? s.pop_ups : s.popups),
        (ep =
          void 0 === s.mobile_scaling && "no" != s.mobile_scaling
            ? 1
            : s.mobile_scaling),
        (el = !1),
        (tC = tE(em)),
        (_ = void 0 === s.div ? "map" : s.div),
        (g = void 0 === s.initial_zoom ? -1 : s.initial_zoom),
        (b = "yes" == s.initial_zoom_solo && -1 != g),
        (h =
          void 0 !== s.fly_in_from && "no" != s.fly_in_from && s.fly_in_from),
        (v = "responsive" == s.width),
        "0" == ($ = !!s.rotate && s.rotate) && ($ = !1),
        (N = "no" != s.zoom),
        (y = "yes" == s.manual_zoom),
        (d = void 0 === s.keyboard_navigation ? "auto" : s.keyboard_navigation),
        (f = void 0 === s.legend_position ? "inside" : s.legend_position),
        (P = "no" != s.allow_scrolling),
        (z = !!tP.default_regions && !!N && tP.default_regions),
        t5.regions && (z = t5.regions),
        t5.labels && (q = t5.labels),
        (x = !1),
        (w = !1),
        (k = !1),
        (p = !1),
        (function e() {
          if ("continent" != l) return !1;
          var t = 0;
          for (var o in tP.paths) t++;
          return t > 8;
        })())
      ) {
        alert("The continent map can't be used with other data.");
        return;
      }
      t2(),
        (function e() {
          if (
            ((ed = document.getElementById(_)),
            (ef =
              !!document.getElementById(_ + "_holder") &&
              document.getElementById(_ + "_holder")))
          ) {
            ed.removeChild(ef);
            var t = document.getElementById("tt_sm_" + _);
            t && t.parentNode.removeChild(t);
          }
          (ef = document.createElement("div")),
            (eu = document.createElement("div")),
            (e$ = document.createElement("div")),
            (eh = document.createElement("div")),
            (e8 = document.createElement("div")),
            (ey = document.createElement("div")),
            (eu.id = _ + "_outer"),
            (eh.id = _ + "_zoom"),
            (e$.id = _ + "_access"),
            (ey.id = _ + "_legend"),
            (e8.id = _ + "_inner"),
            (ef.id = _ + "_holder"),
            ef.style.setProperty("position", "relative"),
            ef.setAttribute("tabIndex", 0),
            ef.style.setProperty("outline", "none"),
            e8.style.setProperty("position", "relative"),
            eu.style.setProperty("position", "absolute"),
            eh.style.setProperty("position", "absolute"),
            e$.style.setProperty("position", "absolute"),
            e$.style.setProperty("max-width", "75%"),
            ey.style.setProperty(
              "position",
              "inside" == f ? "absolute" : "relative"
            ),
            eh.style.setProperty("z-index", "1"),
            eu.style.setProperty("z-index", "1"),
            e$.style.setProperty("z-index", "1"),
            e$.style.setProperty("display", "yes" == d ? "block" : "none"),
            ey.style.setProperty("z-index", "1"),
            ed.appendChild(ef),
            ef.appendChild(eh),
            ef.appendChild(eu),
            ef.appendChild(e$),
            ef.appendChild(e8),
            ef.appendChild(ey);
        })(),
        tS(),
        (function e() {
          if (
            ((eE = (e1 = Raphael(e8, e_, eg)).set()),
            (eC = e1.rect(ex.x - 2 * eb, ex.y - 2 * e3, 5 * eb, 5 * e3)),
            A)
          ) {
            A.indexOf("/osm/noattr/") > -1 && (m = !0);
            var t = E || ex;
            (eS = e1.image(A, t.x, t.y, t.x2 - t.x, t.y2 - t.y)), eE.push(eS);
          }
          eE.push(eC),
            eE.transform(eA),
            eE.hide(),
            (eB = e1.set()),
            (eP = e1.set()),
            (eT = e1.set()),
            (eF = e1.set()),
            (eO = e1.set()),
            (eI = e1.set()),
            (eL = e1.set()),
            (e6 = e1.set()),
            (e7 = e1.set()),
            (e4 = e1.set()),
            (ej = e1.set()),
            (e5 = e1.set()),
            (ez = e1.set()).push(eB, eF, eE, eL, e4);
        })(),
        tO(),
        (function e() {
          if (
            ((tF = document.createElement("div")).style.setProperty(
              "overflow",
              "visible",
              "important"
            ),
            tF.style.setProperty("clip-path", "none", "important"),
            tF.style.setProperty("display", "inline", "important"),
            tF.style.setProperty("opacity", "1", "important"),
            tF.style.setProperty("transform", "none", "important"),
            tF.style.setProperty("visibility", "visibible", "important"),
            tF.style.setProperty("z-index", "1", "important"),
            tF.style.setProperty("position", "absolute", "important"),
            tF.style.setProperty("filter", "opacity(1)", "important"),
            tF.style.setProperty("right", "5px", "important"),
            tF.style.setProperty("bottom", "5px", "important"),
            e8.appendChild(tF),
            m)
          ) {
            var t = document.createElement("a");
            (t.href = "https://www.openstreetmap.org/copyright"),
              (t.title = "Background \xa9 OpenStreetMap contributors"),
              (t.innerHTML = "&copy; OSM"),
              t.style.setProperty(
                "font",
                "12px Verdana, Arial, Helvetica, sans-serif",
                "important"
              ),
              t.style.setProperty("cursor", "pointer", "important"),
              t.style.setProperty("float", "right", "important"),
              t.style.setProperty("color", "#000000", "important"),
              t.style.setProperty("text-decoration", "none", "important"),
              t.style.setProperty("marginLeft", ".5em"),
              tF.appendChild(t);
          }
        })(),
        ei ||
          (function e() {
            if (!tV) {
              var t = c([
                  "borderRadius",
                  "MozBorderRadius",
                  "WebkitBorderRadius",
                ]),
                o = ec ? 2 * eo : eo,
                i = e_ / 2 > 250 ? e_ / 2 : 250;
              tt = K || i;
              var r = c(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                s = r
                  ? r +
                    ": " +
                    3 * et +
                    "px " +
                    3 * et +
                    "px " +
                    4 * et +
                    "px rgba(0,0,0,.5);"
                  : "";
              if ((et < 0.01 && (s = ""), ec)) {
                var a = /(\d+)(px|em|rem)(.*)/g.exec(er);
                er = parseFloat(a[1]) * ep + a[2] + a[3];
              }
              var l =
                ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" +
                (t ? t + ": " + o + "px;" : "") +
                s +
                "z-index: 1000000; background-color: " +
                J +
                "; padding: .6em; opacity:" +
                ee +
                "; font: " +
                er +
                "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
              (l +=
                ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}"),
                (l +=
                  ".xmark_sm{float: " +
                  (en ? "left" : "right") +
                  "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}"),
                n.new_style(l),
                (tV = !0);
            }
            function c(e) {
              for (var t = document.documentElement, o = 0; o < e.length; o++)
                if (e[o] in t.style) {
                  var i = e[o];
                  return (i = (i = (i = (i = (i = i.replace(
                    "borderRadius",
                    "border-radius"
                  )).replace("MozBorderRadius", "-moz-border-radius")).replace(
                    "WebkitBorderRadius",
                    "-webkit-border-radius"
                  )).replace("boxShadow", "box-shadow")).replace(
                    "MozBoxShadow",
                    "-moz-box-shadow"
                  )).replace("WebkitBoxShadow", "-webkit-box-shadow");
                }
            }
          })(),
        (t1 =
          ((V = (H = n.findPos(e8))[0]),
          (X = H[1]),
          (R = 0),
          (Y = 0),
          {
            create: function () {
              (D = document.createElement("div")).setAttribute(
                "id",
                "tt_sm_" + _
              ),
                D.style.setProperty("position", "absolute"),
                D.style.setProperty("display", "none"),
                e8.appendChild(D),
                (e8.onmousemove = this.pos),
                (D.onmousemove = this.pos);
            },
            show: function (e) {
              !tC &&
                ((p = !1),
                null == D && t1.create(),
                D.style.setProperty("display", "block"),
                D.style.setProperty("z-index", 2),
                D.style.setProperty("max-width", tt + "px"),
                (D.innerHTML = e.sm.content),
                t1.update_pos(e));
            },
            reset_pos: function (e, t, o) {
              void 0 == D && t1.create(), t1.set_pos(0 + t, 0 + e, o);
            },
            update_pos: function (e) {
              t1.set_pos(B, O, e);
            },
            pos: function (e, t) {
              t && ((B = t.u), (O = t.l), (B -= X), (O -= V));
              var o = e8.getBoundingClientRect();
              o &&
                e &&
                (e.clientX &&
                  ((B = e.clientY - o.top), (O = e.clientX - o.left)),
                e.touches &&
                  e.touches[0] &&
                  ((B = e.touches[0].clientY - o.top),
                  (O = e.touches[0].clientX - o.left))),
                !tC && !x && !p && (!k || !el) && t1.set_pos(B, O);
            },
            set_pos: function (e, t, o) {
              if (D) {
                if (
                  !(
                    o &&
                    o.sm.on_click &&
                    ("yes" == T || ("auto" == T && e_ < 401))
                  ) &&
                  e &&
                  t
                ) {
                  if (((I = 0 + 0.5 * e_), (M = 0 + 0.5 * eg), t > I && e > M))
                    i = 4;
                  else if (t < I && e > M) i = 3;
                  else if (t > I && e < M) i = 2;
                  else var i = 1;
                  "below" == F
                    ? (3 == i && (i = 1), 4 == i && (i = 2))
                    : "above" == F && (1 == i && (i = 3), 2 == i && (i = 4)),
                    1 == i
                      ? (D.style.setProperty("bottom", "auto"),
                        D.style.setProperty("top", e + 5 + "px"),
                        D.style.setProperty("left", t + 5 + 5 + "px"),
                        D.style.setProperty("right", "auto"))
                      : 2 == i
                      ? (D.style.setProperty("bottom", "auto"),
                        D.style.setProperty("top", e + 5 + "px"),
                        D.style.setProperty("right", e_ - t + 5 + "px"),
                        D.style.setProperty("left", "auto"))
                      : 3 == i
                      ? (D.style.setProperty("bottom", eg - e + 5 + "px"),
                        D.style.setProperty("top", "auto"),
                        D.style.setProperty("left", t + 5 + 3 + "px"),
                        D.style.setProperty("right", "auto"))
                      : (D.style.setProperty("bottom", eg - e + 5 + "px"),
                        D.style.setProperty("top", "auto"),
                        D.style.setProperty("right", e_ - t + 5 + "px"),
                        D.style.setProperty("left", "auto"));
                } else {
                  D.style.setProperty("top", "-100px"),
                    D.style.setProperty("left", "-100px"),
                    D.style.setProperty("bottom", "auto"),
                    D.style.setProperty("right", "auto"),
                    (R = parseInt(D.offsetHeight, 10));
                  var r =
                      e_ - (Y = parseInt(D.offsetWidth, 10)) > 0
                        ? 0.5 * (e_ - Y)
                        : 0,
                    n = eg - R > 0 ? 0.5 * (eg - R) : 0;
                  D.style.setProperty("top", n + "px"),
                    D.style.setProperty("left", r + "px"),
                    D.style.setProperty("right", "auto"),
                    D.style.setProperty("bottom", "auto");
                }
              }
            },
            hide: function () {
              void 0 != D && D.style.setProperty("display", "none"),
                (H = n.findPos(e8)) && ((V = H[0]), (X = H[1]));
            },
          })),
        (G = s.navigation_color ? s.navigation_color : "#f7f7f7"),
        (ev = s.navigation_border_color
          ? s.navigation_border_color
          : "#636363"),
        (ek = s.navigation_opacity ? s.navigation_opacity : 0.8),
        (eX = s.arrow_color ? s.arrow_color : G),
        (eY = s.arrow_color_border ? s.arrow_color_border : ev),
        (eQ = s.arrow_border_color ? s.arrow_border_color : eY),
        (eZ = void 0 === s.navigation_size ? 40 : s.navigation_size),
        (eU =
          void 0 === s.navigation_size_mobile
            ? ep * eZ
            : s.navigation_size_mobile),
        (eG = ec ? eU : eZ),
        (eJ = "yes" == s.arrow_box ? 1 : 0),
        (eK = eG *= 1),
        (e9 = 0.1 * eG),
        (to = eG / 10),
        (function t() {
          eN = e1.set();
          var o = eG,
            i = eG;
          if (e) {
            var r = new Image();
            (r.onload = function () {
              (Z = r.width), (U = r.height), n();
            }),
              (r.src = e);
          } else n();
          function n() {
            if (e) {
              var t = (eM = Raphael(eu, Z, U)).image(e, 0, 0, Z, U);
              (eK = U), t.attr({ cursor: "pointer" }), eN.push(t), eN.click(tw);
            } else {
              var r = (eM = Raphael(eu, o, i))
                  .path(u.rounded_box)
                  .attr({
                    fill: eX,
                    "stroke-width": 1,
                    stroke: eQ,
                    "stroke-opacity": eJ,
                    "fill-opacity": 0,
                    cursor: "pointer",
                  }),
                n = eM
                  .path(u.arrow)
                  .attr({
                    stroke: eQ,
                    "stroke-width": 1.5,
                    "stroke-opacity": 1,
                    fill: eX,
                    "fill-opacity": 1,
                    cursor: "pointer",
                  });
              (eN = e1.set()).push(r, n),
                eN.transform("S" + to + "," + to + ",0,0 T0,0");
            }
            L || tI(),
              eu.style.setProperty("left", e9 + "px"),
              eu.style.setProperty("top", e9 + "px"),
              y &&
                (function e() {
                  eq = Raphael(eh, eG, 2 * eG + e9);
                  var t = u.plus,
                    o = u.minus,
                    i = u.rounded_box,
                    r = eq
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    n = eq
                      .path(t)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eD = e1.set()).push(r, n);
                  var s = "S" + to + "," + to + ",0,0 T0,0";
                  eD.transform(s);
                  var a = eq
                      .path(i)
                      .attr({
                        fill: G,
                        "stroke-width": 1,
                        stroke: ev,
                        "stroke-opacity": 1,
                        "fill-opacity": ek,
                        cursor: "pointer",
                      }),
                    l = eq
                      .path(o)
                      .attr({
                        "stroke-width": 0,
                        "stroke-opacity": 0,
                        fill: ev,
                        "fill-opacity": 1,
                        opacity: 1,
                        cursor: "pointer",
                      });
                  (eR = e1.set()).push(a, l);
                  var s = "S" + to + "," + to + ",0,0 T0," + (eG + e9);
                  function c(e, t) {
                    if ((void 0 === t && (t = "z"), w && "region" != w.sm.type))
                      t0.call(w, !0, function () {
                        (w = !1), c(e);
                      });
                    else {
                      if (
                        "z" == t &&
                        !(function e(t) {
                          var o = tc.sm.zooming_dimensions.w / t,
                            i = t < 1;
                          if (-1 != g && ("manual" == tc.sm.type || b)) {
                            var r = tl[g].sm.zooming_dimensions.w;
                            if (i && o > r - 1 && (or(tc, tl[g]) || b))
                              return ot(tl[g]), !1;
                          }
                          return (
                            !i ||
                            !(o > tl[-1].sm.zooming_dimensions.w - 1) ||
                            (b || ot(tl[-1]), !1)
                          );
                        })(e)
                      )
                        return;
                      var o = { sm: { type: "manual", zp: 1 } };
                      ti &&
                        (((tc = {
                          sm: { type: "manual", zp: 1 },
                        }).sm.zooming_dimensions = tr),
                        (tc.sm.bbox = {
                          x: tr.x / e0,
                          y: tr.y / e0,
                          width: tr.w / e0,
                          height: tr.h / e0,
                        }));
                      var i = (function e(t, o) {
                        var i = tc.sm.zooming_dimensions.w,
                          r = tc.sm.zooming_dimensions.h,
                          n = tc.sm.zooming_dimensions.x,
                          s = tc.sm.zooming_dimensions.y;
                        if ("x" == o)
                          var n =
                            tc.sm.zooming_dimensions.x +
                            tc.sm.zooming_dimensions.w * t;
                        else if ("y" == o)
                          var s =
                            tc.sm.zooming_dimensions.y +
                            tc.sm.zooming_dimensions.h * t;
                        else
                          var i = tc.sm.zooming_dimensions.w / t,
                            r = tc.sm.zooming_dimensions.h / t,
                            n =
                              tc.sm.zooming_dimensions.x +
                              (tc.sm.zooming_dimensions.w - i) / 2,
                            s =
                              tc.sm.zooming_dimensions.y +
                              (tc.sm.zooming_dimensions.h - r) / 2;
                        var a = i / (eb * e0);
                        return { x: n, y: s, w: i, h: r, r: a };
                      })(e, t);
                      if (!i) return;
                      (o.sm.zooming_dimensions = i), ot(o);
                    }
                  }
                  eR.transform(s),
                    eh.style.setProperty("top", eK + 2 * e9 + "px"),
                    eh.style.setProperty("left", e9 + "px"),
                    (eR = e1.set()).push(a, l),
                    (eH = function () {
                      c(j);
                    }),
                    (eW = function (e, t) {
                      c(e, t);
                    }),
                    (eV = function () {
                      c(1 / j);
                    }),
                    (tz.zoom_in = eH),
                    (tz.zoom_out = eV),
                    eD.click(eH),
                    eR.click(eV),
                    eD.touchend(eH),
                    eR.touchend(eV);
                })();
          }
        })(),
        tM(),
        ol(),
        oa(),
        om(),
        setTimeout(function () {
          var e;
          oh(),
            ou(),
            (function e() {
              var t = t5.lines ? t5.lines : t5.borders;
              if (t) {
                for (var o in t) {
                  var i = t[o],
                    r = te[o],
                    n = r.size * (e_ / eb) * a * 1.25,
                    s = !1;
                  if (r.origin_location && r.destination_location) {
                    var l = tf[r.origin_location].sm.point0,
                      c = tf[r.destination_location].sm.point0;
                    if (
                      ((s =
                        "M " + l.x + "," + l.y + " " + c.x + "," + c.y + " Z"),
                      r.angle)
                    ) {
                      var m = parseFloat(r.angle);
                      if (m > -61 && m < 61) {
                        l.x <= c.x && (m *= -1);
                        var p = Raphael.transformPath(
                            s,
                            "R" + m + "," + l.x + "," + l.y + "S2"
                          ).toString(),
                          u = Raphael.transformPath(s, "R-90S2").toString(),
                          d = Raphael.pathIntersection(p, u)[0];
                        s =
                          "M " +
                          l.x +
                          "," +
                          l.y +
                          " C" +
                          l.x +
                          "," +
                          l.y +
                          "," +
                          d.x +
                          "," +
                          d.y +
                          "," +
                          c.x +
                          "," +
                          c.y;
                      }
                    }
                  }
                  var f = s || i.path,
                    h = e1.path(f);
                  h.transform(e2),
                    h.attr({
                      stroke: r.color,
                      fill: "none",
                      cursor: "pointer",
                      "stroke-dasharray": [r.dash],
                      "stroke-width": n,
                      "stroke-linejoin": "round",
                      "stroke-miterlimit": 4,
                    }),
                    (h.sm = {}),
                    (h.sm.size = r.size),
                    (h.sm.level = r.level),
                    (h.sm.bbox = h.getBBox(!0)),
                    en || h.node.setAttribute("class", "sm_line sm_line_" + o),
                    e4.push(h);
                }
                e4.hide();
              }
            })(),
            (function e() {
              e$.style.setProperty("right", "0em"),
                e$.style.setProperty("top", "0em");
              var t =
                  void 0 === s.navigate_title ? "Navigate" : s.navigate_title,
                o = void 0 === s.keyboard_omit ? "" : s.keyboard_omit;
              if (!(o.indexOf("navigat") > -1)) {
                var i = document.createElement("select");
                i.options.add(new Option(t, "-1")),
                  i.options.add(new Option("Back", "back")),
                  y &&
                    (i.options.add(new Option("Zoom in", "in")),
                    i.options.add(new Option("Zoom out", "out")),
                    i.options.add(new Option("Left", "left")),
                    i.options.add(new Option("Right", "right")),
                    i.options.add(new Option("Up", "up")),
                    i.options.add(new Option("Down", "down"))),
                  i.style.setProperty("margin-right", ".5em"),
                  i.style.setProperty("margin-top", ".5em"),
                  i.style.setProperty("float", "left"),
                  e$.appendChild(i),
                  (i.onchange = function (e) {
                    if ("-1" == this.value) return !1;
                    "back" == this.value && tx(),
                      "out" == this.value && eV(),
                      "in" == this.value && eH(),
                      "left" == this.value && eW("-.25", "x"),
                      "right" == this.value && eW(".25", "x"),
                      "up" == this.value && eW("-.25", "y"),
                      "down" == this.value && eW(".25", "y"),
                      setTimeout(function () {
                        i.value = "-1";
                      }, 1e3);
                  });
              }
              var r = void 0 === s.states_title ? "States" : s.states_title,
                a = void 0 === s.regions_title ? "Regions" : s.regions_title,
                l = {
                  state: { title: r, array: ta },
                  location: {
                    title:
                      void 0 === s.locations_title
                        ? "Locations"
                        : s.locations_title,
                    array: tf,
                  },
                  region: { title: a, array: tl },
                };
              for (var c in l) {
                var m = l[c],
                  p = o.indexOf(c) > -1,
                  u = Object.size(m.array);
                if (!(u < 1) && (!(u < 2) || "region" != c) && !p) {
                  var d = document.createElement("select");
                  d.options.add(new Option(m.title, "-1")),
                    d.style.setProperty("margin-right", ".5em"),
                    d.style.setProperty("margin-top", ".5em"),
                    d.style.setProperty("float", "left");
                  var f = [];
                  for (var h in m.array) f.push(m.array[h]);
                  for (
                    var $ = f.sort(function (e, t) {
                        return e.sm.name > t.sm.name ? 1 : -1;
                      }),
                      h = 0;
                    h < $.length;
                    h++
                  ) {
                    var v = $[h];
                    "out" != v.sm.type &&
                      !v.sm.inactive &&
                      !v.sm.hide &&
                      d.options.add(new Option(v.sm.name, v.sm.id));
                  }
                  (d.onchange = n.callback_closure(
                    { entry: m, dropdown: d },
                    function (e) {
                      var t = e.dropdown,
                        o = e.entry;
                      if ("-1" == t.value) return !1;
                      var i,
                        r = o.array[t.value];
                      tB(r.sm.type, r.sm.id);
                    }
                  )),
                    e$.appendChild(d);
                }
              }
            })(),
            tj(),
            tZ(),
            oz(),
            t1.create(),
            (tb = function () {
              this.sm.parent && tg.call(this.sm.parent);
            }),
            (t3 = function () {
              this.sm.parent && t0.call(this.sm.parent);
            }),
            (tv = function (e) {
              this.sm.parent && t_.call(this.sm.parent, e);
            }),
            (t$ = function (e, t) {
              if (e.sm.pulse || t) {
                var o = e.sm.shape_type;
                if ("location" == e.sm.type && "image" != o && !(ew < 0.05)) {
                  var i = e.clone();
                  i.toFront();
                  var r = 1 * e.sm.pulse_size,
                    n = {
                      "stroke-width": 4 * e.attrs["stroke-width"],
                      "stroke-opacity": 0,
                    };
                  i.attr({ "fill-opacity": 0, stroke: e.sm.pulse_color });
                  var s = function () {
                      i.remove();
                    },
                    a = e.sm.scale ? ew : 1,
                    l = (r - 1) * 0.5 * e.sm.size * a * e0,
                    c =
                      "bottom-center" == e.sm.position
                        ? od(e, a * e0 * r, "0," + l)
                        : od(e, a * e0 * r);
                  (n.transform = c),
                    i.animate(n, 1e3 * e.sm.pulse_speed, "ease-out", s);
                }
              }
            }),
            (ty = function (e) {
              if (!en || !es)
                for (
                  var t = Array.isArray(e) ? e : [e], o = 0;
                  o < t.length;
                  o++
                ) {
                  var i = ta[t[o]];
                  if (!i || !i.sm || ew < 0.05) return;
                  var r = i.clone(),
                    n = 1 * i.sm.pulse_size,
                    s = {
                      "stroke-width":
                        4 *
                        (i.attrs["stroke-width"] ? i.attrs["stroke-width"] : 1),
                      "stroke-opacity": 0,
                      "fill-opacity": 0,
                    };
                  r.attr({ "fill-opacity": 0, stroke: i.sm.pulse_color });
                  var a = function () {
                      r.remove();
                    },
                    l = i.sm.bbox;
                  (i.sm.x = (l.x2 + l.x) / 2),
                    (i.sm.y = (l.y2 + l.y) / 2),
                    (i.sm.rotate = 0);
                  var c = od(i, n, "0,0");
                  (s.transform = e2 + c),
                    i.sm.bbox,
                    r.animate(s, 1e3 * i.sm.pulse_speed, "ease-out", a);
                }
            }),
            (tg = function () {
              if (
                (tO(),
                oC(),
                oM(),
                (this.id || "set" != !this.type) && !o0 && !oH)
              ) {
                var e = o$(this);
                if (e.sm.on_click) var t = !0;
                if (((tC = e.sm.popup_off), !tD && !tR && !tN && (!k || !el))) {
                  if (o3 && !x) return !1;
                  if (((o3 = this), e)) {
                    if (
                      ((function e(t) {
                        if (t.sm.labels) {
                          var o;
                          t.sm.labels.forEach(function (e) {
                            t.sm.inactive
                              ? e.attr({ cursor: "default" })
                              : e.attr({ cursor: "pointer" });
                          });
                        }
                      })(e),
                      !e.sm.inactive)
                    ) {
                      if (
                        ((function e(t) {
                          if ("state" == t.sm.type && t.sm.emphasizable) {
                            var o = o1[t.sm.level.toString()];
                            o &&
                              ((o0 = !0),
                              t.insertBefore(o[0]),
                              setTimeout(function () {
                                o0 = !1;
                              }, 1));
                          }
                        })(e),
                        oS(e),
                        t)
                      ) {
                        if (!k) {
                          if (
                            (e.stop(),
                            en &&
                              "location" == e.sm.type &&
                              "image" == e.sm.shape_type)
                          )
                            return;
                          e.sm.ignore_hover || (ov(e, "over"), t$(e)),
                            og(e, "over");
                        }
                      } else {
                        if (
                          (t1.show(e),
                          e.stop(),
                          en &&
                            "location" == e.sm.type &&
                            "image" == e.sm.shape_type)
                        )
                          return;
                        e.sm.ignore_hover ||
                          (ov(e, "over"), og(e, "over"), t$(e), ty(e));
                      }
                    }
                  }
                }
              }
            }),
            (t0 = function (e, t) {
              if (
                ((t && "function" == typeof t) || (t = !1),
                !tN && !oH && ((o3 = !1), this.id || "set" != !this.type))
              ) {
                var o = o$(this);
                if (o && o.sm && !o.sm.inactive) {
                  if ((oj(o), el)) (k && !0 !== e) || (ob(o, t), (ox = o));
                  else {
                    if ((t1.hide(), oy(o))) {
                      if (tN) return !1;
                      o.sm.ignore_hover || ov(o, "out", !0),
                        ov(o, "adjacent", !0),
                        og(o, "out", !0);
                    } else {
                      if (
                        en &&
                        "location" == o.sm.type &&
                        "image" == o.sm.shape_type
                      )
                        return;
                      o.sm.ignore_hover || ov(o, "out", !0), og(o, "out");
                    }
                    ob(o, t);
                  }
                }
              }
            }),
            (e = !1),
            (t_ = function (t) {
              if (!tN && !tD && !tR) {
                var o = o$(this);
                if (
                  o &&
                  o.sm &&
                  !o.sm.inactive &&
                  ((o.sm.on_click && !o.sm.popup_off) || !e)
                ) {
                  tO();
                  var i = !!t && "touchstart" == t.type;
                  if (
                    (ec &&
                      !i &&
                      ((e = !0),
                      setTimeout(function () {
                        e = !1;
                      }, 500)),
                    e || oe(),
                    oT(o, t),
                    !tz.ignore_clicks)
                  ) {
                    if (
                      ((el = o.sm.on_click),
                      !t ||
                        ((!k || "touchend" != t.type) &&
                          (k || "touchstart" != t.type)))
                    ) {
                      if (
                        (el && t1.update_pos(),
                        (tC = o.sm.popup_off),
                        o.sm.zoomable &&
                          ("region" == o.sm.type ||
                            tc != o ||
                            "out" == o.sm.type))
                      )
                        oF(o, t),
                          oM(),
                          w && w.sm
                            ? t0.call(w, !0, function () {
                                ot(o), (w = o);
                              })
                            : (ot(o), (w = o));
                      else if (el) {
                        w != o &&
                          w &&
                          ((r = o),
                          (n = w),
                          "state" != r.sm.type ||
                            "region" != n.sm.type ||
                            n.sm.id != r.sm.region) &&
                          ob(w),
                          t && t1.pos(t),
                          t1.show(o),
                          (k = !0),
                          og(o, "over"),
                          t$(o),
                          (en &&
                            "location" == o.sm.type &&
                            "image" == o.sm.shape_type) ||
                            o.sm.ignore_hover ||
                            o.attr(o.sm.over_attributes),
                          (w = o);
                        var r,
                          n,
                          s = document.getElementById("xpic_sm_" + _);
                        s &&
                          (s.onclick = function () {
                            return (
                              t1.hide(),
                              (k = !1),
                              w.sm && t0.call(w),
                              (el = !1),
                              t7("close_popup", []),
                              !1
                            );
                          }),
                          oB(o, t);
                      } else {
                        var a = o.sm.url;
                        if ("" != a && !oX) {
                          var l = "javascript" == a.substring(0, 10);
                          !Q || l
                            ? l
                              ? (window.location.href = a)
                              : (window.top.location.href = a)
                            : (window.open(a, "_blank"), t1.hide());
                        }
                        oB(o, t), ob(o);
                      }
                    }
                  }
                }
              }
            }),
            (tx = function (e) {
              if (
                (void 0 === e && (e = !1),
                t7("back", []),
                ("out" == tc.sm.type || ("region" == tc.sm.type && b)) && L)
              )
                window.location.href = "javascript:" + L;
              else if (W && "state" == tc.sm.type && tc.sm.region)
                w
                  ? t0.call(w, !0, function () {
                      ot(tl[tc.sm.region]);
                    })
                  : ot(tl[tc.sm.region], !1, e);
              else {
                var t = or(tc, tl[g]),
                  o = "manual" == tc.sm.type && t ? tl[g] : tl[-1];
                w && w.sm && "region" != w.sm.type
                  ? t0.call(w, !0, function () {
                      ot(o);
                    })
                  : ot(o, !1, e);
              }
            }),
            (tw = function () {
              tx();
            }),
            o5(),
            o6(),
            oJ(),
            t7("complete", []),
            n.isFunction(r) && r(),
            oC();
        }, 1);
    }
    var o2 = !1,
      oA = function (e, t) {
        if (!o2 || e || t) {
          o2 = !0;
          var o = function (t) {
            var o = es
                ? event.clientX + document.documentElement.scrollLeft
                : t.pageX,
              i = es
                ? event.clientY + document.documentElement.scrollTop
                : t.pageY,
              r = n.findPos(e8),
              s = r[0],
              a = r[1],
              l = tc.sm.zooming_dimensions,
              c = (l.r * e_) / e0,
              m = (l.r * eg) / e0,
              p = l.x / e0 + (c * (o - s)) / e_,
              u = l.y / e0 + (m * (i - a)) / eg,
              d =
                "You clicked on\nx: " +
                (p = Math.round(1e5 * p) / 1e5) +
                ",\ny: " +
                (u = Math.round(1e5 * u) / 1e5) +
                ",";
            e && console.log(d), t7("click_xy", [{ x: p, y: u }]);
          };
          t || eB.click(o), eL.click(o);
        }
      },
      oE = function () {
        oA(!0);
      },
      oC = function (e) {
        (t6.click_xy || t4.click_xy.length > 0) && oA(!1, e);
      },
      oS = function (e) {
        var t = e.sm.type;
        "state" == t && t7("over_state", [e.sm.id]),
          "location" == t && t7("over_location", [e.sm.id]),
          "region" == t && t7("over_region", [e.sm.id]);
      },
      oj = function (e) {
        var t = e.sm.type;
        "state" == t && t7("out_state", [e.sm.id]),
          "location" == t && t7("out_location", [e.sm.id]),
          "region" == t && t7("out_region", [e.sm.id]);
      },
      oB = function (e, t) {
        var o = e.sm.type;
        "state" == o && t7("click_state", [e.sm.id, t]),
          "region" == o && t7("click_region", [e.sm.id, t]),
          "location" == o && t7("click_location", [e.sm.id, t]);
      },
      oT = function (e, t) {
        var o = e.sm.type;
        "state" == o && t7("preclick_state", [e.sm.id, t]),
          "region" == o && t7("preclick_region", [e.sm.id, t]),
          "location" == o && t7("preclick_location", [e.sm.id, t]);
      },
      oF = function (e, t) {
        var o = e.sm.type;
        "state" == o && t7("zoomable_click_state", [e.sm.id, t]),
          "region" == o && t7("zoomable_click_region", [e.sm.id, t]);
      };
    function oO(e, t) {
      ot(tl[e], !1, t);
    }
    function oI(e, t) {
      ot(ta[e], !1, t);
    }
    function oL(e, t, o) {
      void 0 === t && (t = 4), void 0 === o && (o = function () {});
      var i = { sm: { type: "manual", zp: t } },
        r = tf[e],
        n = r.sm.size * e0 * t,
        s = (n * e3) / eb,
        a = r.sm.x - 0.5 * n,
        l = r.sm.y - 0.5 * s,
        c = n / (eb * e0);
      (i.sm.zooming_dimensions = { x: a, y: l, w: n, h: s, r: c }),
        ot(i, !1, function () {
          o(), tL();
        });
    }
    function oM() {
      if ((o3 && t0.call(o3), x)) (x = !1), !el && (t1.hide(), (k = !1));
    }
    function oN(e, t, o) {
      if ((void 0 === o && (o = function () {}), "state" == e)) var i = ta[t];
      else if ("region" == e) var i = tl[t];
      else var i = tf[t];
      var r = i.sm.on_click,
        n = tc.sm.zooming_dimensions;
      if ("location" != e) {
        var s = i.sm.bbox,
          a = (s.x + s.x2) * 0.5,
          l = (s.y + s.y2) * 0.5;
        (a *= e0), (l *= e0);
      } else
        var a = i.sm.x,
          l = i.sm.y;
      var c = (a - n.x) / ew,
        m = (l - n.y) / ew,
        u = c > 1.1 * e_ || m > 1.1 * eg,
        d = !i.sm.region && "region" == tz.zoom_level;
      return u || d
        ? oO("-1", function () {
            oN(e, t, o);
          })
        : i.sm.region && "out" == tz.zoom_level
        ? oO(i.sm.region, function () {
            oN(e, t, o);
          })
        : ((x = !0),
          r ? t_.call(i) : tg.call(i),
          t1.reset_pos(c, m, i),
          (p = !0),
          (x = !1),
          o(),
          !0);
    }
    function oD(e) {
      var t = tf[e];
      t && t$(t, !0);
    }
    function oR() {
      t1.hide(), (k = !1), el ? t0.call(w) : o3 && t0.call(o3);
    }
    function oq(e, t) {
      eK(e);
      var o = ta[e].sm.labels;
      tn(e);
      for (var i = 0; i < o.length; i++) {
        var r = o[i].sm.id;
        e9(r), t8(r);
      }
      n.isFunction(t) && t();
    }
    var oH = !1;
    function oV() {
      (oH = !0), t1.hide();
    }
    var oH = !1;
    function oW() {
      oH = !1;
    }
    var oX = !1;
    function oY() {
      oX = !0;
    }
    var oX = !1;
    function oQ() {
      oX = !1;
    }
    function oZ(e) {
      tx(e);
    }
    function oU(e) {
      ty(e);
    }
    function oG() {
      (tz.calibrate = oo),
        (tz.get_xy = oE),
        (tz.proj = tH),
        (tz.load = o7),
        (tz.region_zoom = oO),
        (tz.state_zoom = oI),
        (tz.zoom_in = !1),
        (tz.zoom_out = !1),
        (tz.location_zoom = oL),
        (tz.zoom_to_popup = tB),
        (tz.back = oZ),
        (tz.popup = oN),
        (tz.pulse = oD),
        (tz.pulse_state = oU),
        (tz.popup_hide = oR),
        (tz.zoom_level = "out"),
        (tz.ignore_clicks = !1),
        (tz.zoom_level_id = !1),
        (tz.disable_urls = oY),
        (tz.enable_urls = oQ),
        (tz.disable_popups = oV),
        (tz.enable_popups = oW),
        (tz.refresh = o4),
        (tz.refresh_state = oq),
        (tz.loaded = !0),
        (tz.resize = oP),
        (tz.trial = c),
        (tz.zoom_ratio = 1);
    }
    function oJ() {
      (tz.states = ta),
        (tz.regions = tl),
        (tz.locations = tf),
        (tz.labels = tp),
        (tz.tooltip = t1);
    }
    oG(), o7();
  }
  (window[e] = d),
    r.docReady(function () {
      if (
        ((function e(t, o) {
          var i = d.hooks[t];
          i && i.apply(null, o);
          for (var r = d.plugin_hooks[t], n = 0; n < r.length; n++) {
            var i = r[n];
            i && i.apply(null, o);
          }
        })("ready"),
        !window[e].loaded)
      )
        for (var t = 0; t < p.length; t++) {
          var o = p[t];
          o &&
            o.mapdata &&
            "no" != o.mapdata.main_settings.auto_load &&
            (function (e) {
              setTimeout(function () {
                e.load();
              }, 1);
            })(o);
        }
    }),
    p.push(d);
})("simplemaps_countrymap");
