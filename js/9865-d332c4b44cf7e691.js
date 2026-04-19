(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9865],
  {
    1054: function () {},
    2516: function (e, a, t) {
      "use strict";
      var n = t(4393);
      (t(4664),
        (a.Z = (e) =>
          (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "lucide lucide-send-horizontal ".concat(e.className),
            children: [
              (0, n.jsx)("path", { d: "m3 3 3 9-3 9 19-9Z" }),
              (0, n.jsx)("path", { d: "M6 12h16" }),
            ],
          })));
    },
    8857: function (e, a, t) {
      "use strict";
      t.d(a, {
        mk: function () {
          return c;
        },
        jM: function () {
          return d;
        },
      });
      var n = t(4393),
        i = t(4664),
        r = t(1806),
        s = t(6999);
      let l = i.forwardRef((e, a) => {
        let { className: t, ...i } = e;
        return (0, n.jsx)("div", {
          ref: a,
          className: (0, s.cn)(
            "bg-card text-card-foreground rounded-xl border shadow",
            t,
          ),
          ...i,
        });
      });
      ((l.displayName = "Card"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)("div", {
            ref: a,
            className: (0, s.cn)("flex flex-col space-y-1.5 p-6", t),
            ...i,
          });
        }).displayName = "CardHeader"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)("h3", {
            ref: a,
            className: (0, s.cn)(
              "font-semibold leading-none tracking-tight",
              t,
            ),
            ...i,
          });
        }).displayName = "CardTitle"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)("p", {
            ref: a,
            className: (0, s.cn)("text-muted-foreground text-sm", t),
            ...i,
          });
        }).displayName = "CardDescription"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)("div", {
            ref: a,
            className: (0, s.cn)("p-6 pt-0", t),
            ...i,
          });
        }).displayName = "CardContent"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)("div", {
            ref: a,
            className: (0, s.cn)("flex items-center p-6 pt-0", t),
            ...i,
          });
        }).displayName = "CardFooter"));
      let o = (e) => {
        let { children: a } = e;
        return (0, n.jsx)(i.Suspense, {
          children: (0, n.jsx)(r.default, { children: a }),
        });
      };
      function c(e) {
        let { className: a, format: t = "auto" } = e;
        return (0, n.jsx)("div", {
          className: a,
          children: (0, n.jsx)(o, {
            children: (0, n.jsx)("ins", {
              className: "adsbygoogle",
              style: { display: "block" },
              "data-ad-client": "",
              "data-ad-slot": "",
              "data-ad-format": t,
              "data-full-width-responsive": "true",
            }),
          }),
        });
      }
      function d(e) {
        let { className: a } = e;
        return (0, n.jsx)(l, {
          className: a,
          children: (0, n.jsx)(o, {
            children: (0, n.jsx)("ins", {
              className: "adsbygoogle",
              style: { display: "block" },
              "data-ad-format": "fluid",
              "data-ad-layout-key": "-gm-1v+3g-k+1d",
              "data-ad-client": "",
              "data-ad-slot": "",
            }),
          }),
        });
      }
    },
    1806: function (e, a, t) {
      "use strict";
      t.d(a, {
        default: function () {
          return s;
        },
      });
      var n = t(4393),
        i = t(4664),
        r = t(9442);
      function s(e) {
        let { children: a } = e,
          t = (0, r.usePathname)(),
          s = (0, r.useSearchParams)();
        return (
          (0, i.useEffect)(() => {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
              console.error(e);
            }
          }, [t, s]),
          (0, n.jsx)(n.Fragment, { children: a })
        );
      }
    },
    9023: function (e, a, t) {
      "use strict";
      var n = t(4393),
        i = t(2706),
        r = t(5201),
        s = t(8857);
      a.Z = function (e) {
        let { firstDiv: a, hoverDiv: t } = e;
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center gap-10 overflow-hidden",
          children: [
            (0, n.jsx)("div", {
              className:
                "flex max-w-7xl flex-col items-center justify-around gap-5 rounded border-8 bg-darkBeige p-5 ".concat(
                  a,
                  " ",
                ),
              children: (0, n.jsx)("div", {
                className: "flex flex-wrap items-start justify-center gap-6",
                children: [
                  {
                    name: "JUJUTSU KAISEN",
                    image: "/images/manga-icons/jjk.webp",
                    link: "https://jujutsudle.com/",
                  },
                  {
                    name: "HUNTERxHUNTER",
                    image: "/images/manga-icons/hxh.webp",
                    link: "https://animedle.org/hunterdle",
                  },
                  {
                    name: "NARUTO",
                    image: "/images/manga-icons/naruto.webp",
                    link: "https://narutodle.org/",
                  },
                  {
                    name: "ONE PIECE",
                    image: "/images/manga-icons/onepiece.webp",
                    link: "https://animedle.org/onepiecedle/",
                  },
                  {
                    name: "DRAGON BALL",
                    image: "/images/manga-icons/dragonball.webp",
                    link: "https://animedle.org/dragonballdle/",
                  },
                  {
                    name: "BLEACH",
                    image: "/images/manga-icons/bleach.webp",
                    link: "https://bleachdle.org/",
                  },
                  {
                    name: "DEMON SLAYER",
                    image: "/images/manga-icons/demonslayer.webp",
                    link: "https://kimetsudle.com/",
                  },
                  {
                    name: "JOJO",
                    image: "/images/manga-icons/jojo.webp",
                    link: "https://jojodle.com/",
                  },
                  {
                    name: "CHAINSAW MAN",
                    image: "/images/manga-icons/chainsawman.webp",
                    link: "https://animedle.org/chainsawdle/",
                  },
                  {
                    name: "MY HERO ACADEMIA",
                    image: "/images/manga-icons/myheroacademia.webp",
                    link: "https://animedle.org/myheroacademia/",
                  },
                  {
                    name: "KINGDOM",
                    image: "/images/manga-icons/kingdom.webp",
                    link: "https://animedle.org/kingdomle/",
                  },
                  {
                    name: "ONE PUNCH MAN",
                    image: "/images/manga-icons/onepunchman.webp",
                    link: "https://opmdle.com/",
                  },
                  {
                    name: "HAIKYUU",
                    image: "/images/manga-icons/haikyuu.webp",
                    link: "https://animedle.org/haikyuudle/",
                  },
                  {
                    name: "BLUE LOCK",
                    image: "/images/manga-icons/bluelock.webp",
                    link: "https://bluelockdle.com/",
                  },
                  {
                    name: "ATTACK ON TITAN",
                    image: "/images/manga-icons/attackontitan.webp",
                    link: "https://animedle.org/attackontitan/",
                  },
                  {
                    name: "FAIRY TAIL",
                    image: "/images/manga-icons/fairytail.webp",
                    link: "https://animedle.org/fairytail/",
                  },
                  {
                    name: "SOLO LEVELING",
                    image: "/images/manga-icons/sololeveling.webp",
                    link: "https://animedle.org/sololevelingdle/",
                  },
                  {
                    name: "FULLMETAL ALCHEMIST",
                    image: "/images/manga-icons/fullmetalalchemist.webp",
                    link: "https://animedle.org/fullmetalalchemistdle/",
                  },
                  {
                    name: "BLACK CLOVER",
                    image: "/images/manga-icons/blackclover.webp",
                    link: "https://cloverdle.com/",
                  },
                  {
                    name: "SAKAMOTO DAYS",
                    image: "/images/manga-icons/sakamotodays.webp",
                    link: "https://animedle.org/sakamotodle/",
                  },
                  {
                    name: "SPY X FAMILY",
                    image: "/images/manga-icons/spyxfamily.webp",
                    link: "https://animedle.org/spydle/",
                  },
                  {
                    name: "VINLAND SAGA",
                    image: "/images/manga-icons/vinlandsaga.webp",
                    link: "https://animedle.org/vinlandle/",
                  },
                  {
                    name: "FRIEREN",
                    image: "/images/manga-icons/frieren.webp",
                    link: "https://animedle.org/frierendle/",
                  },
                  {
                    name: "HAJIME NO IPPO",
                    image: "/images/manga-icons/hajimenoippo.webp",
                    link: "https://animedle.org/ippodle/",
                  },
                ].map((e, a) =>
                  (0, n.jsxs)(
                    "a",
                    {
                      href: e.link,
                      target: "_blank",
                      className: "".concat(
                        t,
                        " group flex h-full w-32 flex-col items-center justify-start gap-2 text-center font-medium text-black",
                      ),
                      title: e.name,
                      children: [
                        (0, n.jsx)(i.default, {
                          src: e.image,
                          alt: "icon of ".concat(e.name),
                          width: 64,
                          height: 64,
                          className:
                            "h-16 w-16 rounded-full object-cover transition-all duration-[2500ms] ease-in-out group-hover:-rotate-[360deg]",
                        }),
                        (0, n.jsx)("p", {
                          className: "font-bold",
                          children: e.name,
                        }),
                      ],
                    },
                    a,
                  ),
                ),
              }),
            }),
          ],
        });
      };
    },
    8440: function (e, a, t) {
      "use strict";
      var n = t(4393),
        i = t(2706),
        r = t(5201);
      a.Z = function (e) {
        let { streak: a, total: t, borderColor: s } = e;
        return (0, n.jsxs)("div", {
          className:
            "z-30 flex max-w-sm flex-row items-center justify-around gap-5 rounded border-8 bg-darkBeige p-5 text-lightBeige sm:min-w-[24rem] ".concat(
              s,
            ),
          children: [
            (0, n.jsxs)("div", {
              title: "Streak",
              className:
                "group relative flex flex-col items-center justify-center gap-1 hover:cursor-default",
              children: [
                (0, n.jsx)(i.default, {
                  src: a > 0 ? "/icons/streak.webp" : "/icons/streak-none.webp",
                  alt: "streak",
                  unoptimized: !0,
                  width: 44,
                  height: 44,
                  className: "h-full max-h-10 w-10",
                }),
                (0, n.jsx)("p", {
                  className: "text-xl font-bold text-black",
                  children: a,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              title: "Total Score",
              className:
                "group relative flex flex-col items-center justify-center gap-1 hover:cursor-default",
              children: [
                (0, n.jsx)(i.default, {
                  src: "/icons/total.webp",
                  alt: "total",
                  width: 44,
                  height: 44,
                  className: "h-full w-10",
                }),
                (0, n.jsx)("p", {
                  className: "left-0 top-4 z-10 text-xl font-bold text-black",
                  children: t,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              children: (0, n.jsx)(r.default, {
                href: "#info-card",
                children: (0, n.jsx)(i.default, {
                  src: "/icons/info.webp",
                  alt: "info",
                  width: 36,
                  height: 36,
                  className: "brightness-0 hover:cursor-pointer",
                  title: "How To Play ?",
                }),
              }),
            }),
          ],
        });
      };
    },
    1908: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return s;
        },
      });
      var n = t(4393),
        i = t(4523),
        r = t(5018);
      function s(e) {
        let { children: a, loading: t, ...s } = e;
        return (0, n.jsx)(r.z, {
          ...s,
          disabled: s.disabled || t,
          className: "p-0",
          children: (0, n.jsxs)("span", {
            className: "flex items-center justify-center gap-1",
            children: [
              t && (0, n.jsx)(i.Z, { size: 16, className: "animate-spin" }),
              a,
            ],
          }),
        });
      }
    },
    6786: function (e, a, t) {
      "use strict";
      var n = t(4393),
        i = t(8988),
        r = t(2599),
        s = t(4664),
        l = t(8387);
      a.Z = function () {
        let [e, a] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          a(!0);
        }, []);
        let t = (0, i.o)(),
          o = t.toString().split(" ")[5],
          c = (0, r.p6)(new Date((0, i.o)()), "yyyy-MM-dd");
        return (0, n.jsx)("div", {
          className: "flex flex-col gap-3",
          children:
            e &&
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className: "text-center text-4xl font-extrabold",
                  children: (0, n.jsx)(l.ZP, {
                    autoStart: !0,
                    date: t,
                    intervalDelay: 1e3,
                    daysInHours: !0,
                  }),
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsxs)("div", {
                    className: "text-left text-base italic",
                    children: ["Midnight at ", o, " ", c],
                  }),
                }),
              ],
            }),
        });
      };
    },
    5018: function (e, a, t) {
      "use strict";
      t.d(a, {
        z: function () {
          return c;
        },
      });
      var n = t(4393),
        i = t(4664),
        r = t(2451),
        s = t(184),
        l = t(6999);
      let o = (0, s.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        c = i.forwardRef((e, a) => {
          let { className: t, variant: i, size: s, asChild: c = !1, ...d } = e,
            m = c ? r.g7 : "button";
          return (0, n.jsx)(m, {
            className: (0, l.cn)(o({ variant: i, size: s, className: t })),
            ref: a,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    354: function (e, a, t) {
      "use strict";
      t.d(a, {
        l0: function () {
          return m;
        },
        NI: function () {
          return h;
        },
        Wi: function () {
          return f;
        },
        xJ: function () {
          return x;
        },
      });
      var n = t(4393),
        i = t(4664),
        r = t(2451),
        s = t(7846),
        l = t(6999),
        o = t(9277);
      let c = (0, t(184).j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        ),
        d = i.forwardRef((e, a) => {
          let { className: t, ...i } = e;
          return (0, n.jsx)(o.f, {
            ref: a,
            className: (0, l.cn)(c(), t),
            ...i,
          });
        });
      d.displayName = o.f.displayName;
      let m = s.RV,
        u = i.createContext({}),
        f = (e) => {
          let { ...a } = e;
          return (0, n.jsx)(u.Provider, {
            value: { name: a.name },
            children: (0, n.jsx)(s.Qr, { ...a }),
          });
        },
        g = () => {
          let e = i.useContext(u),
            a = i.useContext(p),
            { getFieldState: t, formState: n } = (0, s.Gc)(),
            r = t(e.name, n);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: l } = a;
          return {
            id: l,
            name: e.name,
            formItemId: "".concat(l, "-form-item"),
            formDescriptionId: "".concat(l, "-form-item-description"),
            formMessageId: "".concat(l, "-form-item-message"),
            ...r,
          };
        },
        p = i.createContext({}),
        x = i.forwardRef((e, a) => {
          let { className: t, ...r } = e,
            s = i.useId();
          return (0, n.jsx)(p.Provider, {
            value: { id: s },
            children: (0, n.jsx)("div", {
              ref: a,
              className: (0, l.cn)("space-y-2", t),
              ...r,
            }),
          });
        });
      ((x.displayName = "FormItem"),
        (i.forwardRef((e, a) => {
          let { formItemId: t } = g();
          return (0, n.jsx)(d, { ref: a, htmlFor: t, ...e });
        }).displayName = "FormLabel"));
      let h = i.forwardRef((e, a) => {
        let { ...t } = e,
          {
            error: i,
            formItemId: s,
            formDescriptionId: l,
            formMessageId: o,
          } = g();
        return (0, n.jsx)(r.g7, {
          ref: a,
          id: s,
          "aria-describedby": i ? "".concat(l, " ").concat(o) : "".concat(l),
          "aria-invalid": !!i,
          ...t,
        });
      });
      ((h.displayName = "FormControl"),
        (i.forwardRef((e, a) => {
          let { className: t, ...i } = e,
            { formDescriptionId: r } = g();
          return (0, n.jsx)("p", {
            ref: a,
            id: r,
            className: (0, l.cn)("text-muted-foreground text-sm", t),
            ...i,
          });
        }).displayName = "FormDescription"),
        (i.forwardRef((e, a) => {
          let { className: t, children: i, ...r } = e,
            { error: s, formMessageId: o } = g(),
            c = s ? String(null == s ? void 0 : s.message) : i;
          return c
            ? (0, n.jsx)("p", {
                ref: a,
                id: o,
                className: (0, l.cn)("text-destructive text-sm font-medium", t),
                ...r,
                children: c,
              })
            : null;
        }).displayName = "FormMessage"));
    },
    7527: function (e, a, t) {
      "use strict";
      t.d(a, {
        I: function () {
          return s;
        },
      });
      var n = t(4393),
        i = t(4664),
        r = t(6999);
      let s = i.forwardRef((e, a) => {
        let { className: t, type: i, ...s } = e;
        return (0, n.jsx)("input", {
          type: i,
          className: (0, r.cn)(
            "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            t,
          ),
          ref: a,
          ...s,
        });
      });
      s.displayName = "Input";
    },
    3788: function (e, a, t) {
      "use strict";
      t.d(a, {
        K: function () {
          return r;
        },
      });
      var n = t(3684),
        i = t.n(n);
      let r = (e, a) => {
        let t = document.getElementById(a);
        if (!t) return;
        let n = document.createElement("div");
        ((n.style.position = "absolute"),
          (n.style.top = "-1000px"),
          (n.style.zIndex = "-1"),
          (n.style.display = "flex"),
          (n.style.flexDirection = "column"),
          (n.style.background = "rgb(74 222 128 / 0.9)"),
          (n.style.gap = "5px"),
          (n.style.alignItems = "center"),
          (n.style.justifyContent = "center"));
        let r = t.cloneNode(!0);
        (n.appendChild(r),
          document.body.appendChild(n),
          i()(n)
            .then((a) => {
              a.toBlob((a) => {
                if (a) {
                  let t = new ClipboardItem({ "image/png": a });
                  navigator.clipboard
                    .write([t])
                    .then(() => {
                      e(!0);
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                }
              }, "image/png");
            })
            .catch((e) => {
              console.error(e);
            })
            .finally(() => {
              document.body.removeChild(n);
            }));
      };
    },
    6999: function (e, a, t) {
      "use strict";
      t.d(a, {
        U: function () {
          return s;
        },
        cn: function () {
          return r;
        },
        r: function () {
          return l;
        },
      });
      var n = t(5210),
        i = t(6208);
      function r() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, i.m6)((0, n.W)(a));
      }
      let s = (e) =>
        e
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      function l(e) {
        return "Unknown" === e || "None" === e
          ? -1
          : parseInt((e = e.replace(/,/g, "")), 10);
      }
    },
  },
]);
