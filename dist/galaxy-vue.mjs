import { reactive as Me, readonly as mt, openBlock as i, createElementBlock as p, normalizeClass as m, unref as r, renderSlot as k, ref as G, inject as H, watch as We, createElementVNode as _, createCommentVNode as C, createTextVNode as z, toDisplayString as T, createVNode as V, Transition as _e, withCtx as I, withDirectives as je, vShow as He, pushScopeId as rt, popScopeId as lt, provide as W, useSlots as q, computed as D, createBlock as M, resolveDynamicComponent as Fe, mergeProps as at, Fragment as E, onMounted as It, renderList as Q, withModifiers as ie, nextTick as Dt, defineComponent as Ge, normalizeProps as Nt, guardReactiveProps as Rt, withScopeId as so, resolveComponent as Je, normalizeStyle as te, withKeys as ro, onBeforeUnmount as it, createSlots as Qe, Comment as lo } from "vue";
const ao = {
  Expandable: {
    default: {
      group: "",
      groupTheme: "shadow",
      panelWrapperNotGrouped: "shadow",
      panelWrapperGrouped: "",
      panel: "p-4 border cursor-pointer select-none",
      panelTheme: "border-gray-200 hover:bg-gray-50",
      panelDisabled: "!cursor-not-allowed !text-gray-300 hover:!bg-gray-50",
      panelActive: "!bg-gray-100",
      panelTitle: "text-md",
      panelTitleDisabled: "",
      panelArrowWrapper: "text-gray-600",
      panelArrowWrapperDisabled: "!text-gray-300",
      panelArrowSize: "w-4 h-4",
      panelContent: "p-4 border border-gray-200 border-t-0"
    }
  },
  Avatar: {
    default: {
      wrapper: "relative inline-flex",
      content: "inline-flex items-center justify-center overflow-hidden cursor-default",
      contentSize: "w-10 h-10 text-md font-medium",
      contentTheme: "bg-primary-700 rounded-full text-white",
      contentHover: "hover:z-10 cursor-pointer",
      contentGrouped: "border-2 border-white",
      defaultPlaceholderWrapper: "relative h-full w-full inline-flex justify-center items-center overflow-hidden",
      defaultPlaceholderIcon: "absolute w-auto h-auto -bottom-1",
      statusDotSizePosition: "bottom-0 left-7 absolute w-3 h-3",
      statusDotTheme: "border-2 border-white rounded-full",
      statusDotOnline: "bg-green-400",
      statusDotOffline: "bg-gray-400",
      statusDotBusy: "bg-red-500",
      statusDotAway: "bg-yellow-500"
    }
  },
  AvatarGroup: {
    default: {
      content: "flex -space-x-2"
    }
  },
  Badge: {
    default: {
      base: "inline-flex items-center px-2 py-1 gap-x-0.5 cursor-default",
      theme: "rounded text-sm font-normal",
      themeColor: "bg-primary-100 text-primary-800",
      removeButton: "flex items-center justify-center relative -mr-1 h-4 w-4",
      removeButtonTheme: "rounded-full hover:bg-gray-600/20 text-gray-800",
      removeIcon: "h-3 w-3"
    }
  },
  Button: {
    default: {
      base: "whitespace-nowrap font-medium rounded border cursor-pointer",
      baseSize: "text-sm px-4 py-2",
      baseSizeIconOnly: "!p-2",
      iconSize: "w-4 h-4",
      normal: "text-white bg-primary-700 hover:bg-primary-800 border-transparent",
      normalDisabled: "text-white bg-gray-300 hover:bg-gray-300 border-transparent",
      outlined: "text-primary-600 border-primary-400 hover:border-primary-800 hover:bg-gray-100 hover:border-primary-700",
      outlinedDisabled: "text-gray-400 border-gray-300 hover:!border-gray-300",
      ghost: "text-primary-600 hover:bg-gray-200 !border-transparent",
      ghostDisabled: "text-gray-400 bg-gray-50 !border-transparent",
      shadow: "shadow",
      disabled: "!cursor-not-allowed"
    }
  },
  ButtonGroup: {
    default: {
      content: "btn-group inline-flex shadow"
    }
  },
  LoaderSpinner: {
    default: {
      base: "animate-spin",
      size: "w-5 h-5",
      color: "text-gray-200 fill-primary-600",
      disabled: "!fill-gray-400"
    }
  },
  LoaderLinear: {
    default: {
      base: "relative block w-full overflow-hidden",
      size: "h-1",
      emptyColor: "bg-primary-200",
      fillColor: "bg-primary-700",
      disabledEmptyColor: "bg-gray-200",
      disabledFillColor: "bg-gray-400"
    }
  },
  LoaderProgress: {
    default: {
      wrapper: "relative block w-full overflow-hidden",
      size: "h-4",
      bar: "w-full rounded-full",
      barColor: "bg-primary-200",
      progressBar: "rounded-full p-0.5",
      progressBarColor: "bg-primary-600 dark:bg-primary-600 text-primary-100",
      insideLabelText: "font-medium text-center text-xs leading-none",
      outsideLabelWrapper: "flex justify-between mb-1",
      outsideLabelText: "text-base font-medium",
      outsideLabelProgress: "text-sm font-medium"
    }
  },
  Card: {
    default: {
      wrapper: "flex flex-col w-full relative",
      detachedHeaderWrapper: "flex items-center p-2",
      headerWrapper: "flex items-center",
      headerTheme: "border-b border-gray-200",
      headerTitleWrapper: "grow",
      headerTitle: "font-medium text-lg",
      headerSubtitle: "font-normal text-md text-gray-500",
      headerActions: "flex items-center",
      contentWrapper: "flex flex-col w-full",
      contentTheme: "rounded shadow border border-gray-200 bg-white",
      contentDisabled: "absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60",
      body: "grow",
      footerTheme: "border-t border-gray-300",
      padding: "p-4"
    }
  },
  Dropdown: {
    default: {
      wrapper: "inline",
      theme: "bg-white rounded shadow-md",
      size: "w-64"
    }
  },
  Tooltip: {
    default: {
      wrapper: "inline",
      theme: "bg-white border rounded shadow-md"
    }
  },
  Pagination: {
    default: {
      baseText: "text-sm text-gray-500",
      currentPageText: "text-black"
    }
  },
  List: {
    default: {
      listGroup: "overflow-hidden border rounded",
      listGroupColor: "text-gray-900 bg-white border-gray-200",
      listGroupText: "text-md font-normal",
      listItem: "inline-flex block items-center w-full border-b",
      listItemSize: "px-4 py-2 ",
      listItemTheme: "border-gray-200",
      listItemHover: "cursor-pointer hover:bg-gray-100",
      listItemDivider: "bg-gray-200",
      listItemDisabled: "cursor-not-allowed bg-gray-50 text-gray-400",
      listItemBefore: "w-5 h-5 text-gray-400 mr-2 flex items-center",
      listItemAfter: "w-5 h-5 text-gray-400 flex items-center"
    },
    menu: {
      listGroup: "overflow-hidden rounded border space-y-1 py-1",
      listGroupColor: "text-gray-600 bg-white border-gray-200",
      listGroupText: "text-sm font-normal",
      listItem: "inline-flex block items-center w-full",
      listItemSize: "px-4 py-2 ",
      listItemTheme: "",
      listItemHover: "cursor-pointer hover:bg-gray-100",
      listItemDisabled: "cursor-not-allowed bg-gray-50 text-gray-400",
      listItemDivider: "bg-gray-200",
      listItemBefore: "w-5 h-5 text-gray-400 mr-2 flex items-center",
      listItemAfter: "w-4 h-4 text-gray-400 flex items-center"
    }
  },
  Tabs: {
    default: {
      wrapper: "",
      tabListWrapper: "",
      tabList: "flex space-x-4 items-center",
      tabItem: "text-gray-500 rounded px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-200",
      tabItemSelected: "bg-primary-800 text-white rounded px-3 py-2 text-sm font-medium",
      tabItemDisabled: "!text-gray-400 !cursor-not-allowed",
      tabItemTitle: "flex items-center",
      tabContentWrapper: "",
      tabContent: "p-4"
    },
    underline: {
      wrapper: "",
      tabListWrapper: "border-b border-gray-200",
      tabList: "-mb-px flex space-x-6 items-center",
      tabItem: "cursor-pointer border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2.5 px-1 text-sm font-medium border-primary-600 transition-all duration-200",
      tabItemSelected: "!border-primary-600 text-primary-600",
      tabItemDisabled: "!text-gray-400 !cursor-not-allowed",
      tabItemTitle: "flex items-center justify-center text-center",
      tabContentWrapper: "",
      tabContent: "p-4"
    }
  },
  Label: {
    default: {
      base: "flex items-center select-none cursor-pointer",
      theme: "text-sm font-medium text-gray-800",
      disabled: "!cursor-not-allowed !text-gray-400",
      errors: "!text-red-600",
      iconSize: "w-4 h-4",
      icon: "text-primary-600"
    }
  },
  Checkbox: {
    default: {
      wrapper: "relative flex items-center text-gray-200",
      inputWrapper: "elative cursor-pointer flex items-center",
      inputCheck: "check-animation rounded focus:ring-0 h-4 w-4 cursor-pointer text-primary-600",
      inputRadio: "radio rounded-full focus:ring-0 h-4 w-4 cursor-pointer text-primary-600",
      inputDisabled: "!cursor-not-allowed text-gray-300 border-gray-300",
      labelWrapper: "pl-3 text-sm"
    }
  },
  Toggle: {
    default: {
      wrapper: "relative flex items-center text-gray-200",
      inputWrapper: "relative cursor-pointer flex items-center",
      labelFalseWrapper: "pr-3 text-sm",
      labelWrapper: "pl-3 text-sm",
      switchColor: "bg-gray-400",
      switchColorChecked: "bg-primary-600",
      switchColorBorderChecked: "border-primary-600",
      switchColorBorder: "border-gray-400",
      switchDisabledColor: "bg-gray-100",
      switchDisabledColorChecked: "bg-primary-200",
      switchDisabledColorBorderChecked: "border-primary-200",
      switchFalseLabelColorChecked: "!text-gray-400",
      switchTrueLabelColorChecked: "!text-primary-600",
      switchTrueLabelColor: "!text-gray-400"
    }
  },
  InputText: {
    default: {
      root: "relative w-full",
      inputWrapper: "grow relative",
      inputTheme: "text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900",
      input: "block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2",
      inputPrepend: "rounded-l-none",
      prepend: "inline-flex items-center px-3 text-sm text-gray-800 bg-gray-100 border border-r-0 border-gray-200 rounded-l-md",
      icon: "pointer-events-none absolute inset-y-0 left-0 p-2 flex items-center text-gray-500",
      clearable: "cursor-pointer absolute inset-y-0 right-0 p-2 flex items-center",
      counter: "absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]",
      disabled: "cursor-default bg-gray-100 border-gray-200 focus:border-gray-200",
      readonly: "cursor-default",
      errors: "border-red-500 focus:border-red-500 text-red-500 hover:text-red-800"
    }
  },
  InputArea: {
    default: {
      root: "relative w-full",
      inputWrapper: "grow relative",
      inputTheme: "text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900",
      input: "block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2",
      clearable: "cursor-pointer absolute right-0 p-2 top-0",
      counter: "absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]",
      disabled: "cursor-default bg-gray-100 border-gray-200 focus:border-gray-200",
      readonly: "cursor-default",
      errors: "border-red-500 focus:border-red-500 text-red-500 hover:text-red-800"
    }
  },
  Table: {
    default: {
      wrapper: "relative",
      table: "min-w-full h-full text-sm text-left text-gray-500 divide-y divide-gray-300",
      thead: "bg-gray-100",
      theadRow: "divide-x divide-gray-200",
      theadColumn: "my-auto px-4 py-2 font-normal whitespace-nowrap uppercase text-gray-700 text-xs align-middle",
      theadColumnLabel: "font-bold",
      theadColumnSortIcon: "w-3 h-3",
      theadColumnSortIconSorted: "text-primary-600",
      theadColumnSorting: "sortable cursor-pointer hover:bg-gray-200",
      theadColumnSorted: "sorted bg-primary-100 hover:bg-primary-100 text-primary-700",
      theadColumnSelectAll: "w-4 px-4 py-2",
      tbodyColumnSelectBorder: "bg-primary-600",
      tbody: "divide-y divide-gray-200",
      tbodyRow: "hover:bg-gray-100 text-gray-800",
      tbodyRowSelected: "!bg-primary-50",
      tbodyColumn: "px-4 py-3",
      tbodyColumnSelect: "w-4 px-4 py-3",
      noData: "text-center p-3",
      emptyCellText: "text-gray-400"
    }
  },
  Backdrop: {
    default: {
      base: "top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-60 z-40",
      theme: "bg-gray-400 bg-opacity-60"
    }
  },
  Modal: {
    default: {
      base: "fixed inset-0 w-full h-screen z-[100]",
      wrapper: "flex items-center justify-center",
      content: "z-[999] transition-all duration-300 ease-in-out overflow-hidden",
      contentTheme: "bg-white shadow-lg rounded"
    }
  },
  Drawer: {
    default: {
      base: "",
      content: "z-[777] fixed",
      contentTheme: "bg-white shadow-lg"
    }
  },
  Carousel: {
    default: {}
  },
  Container: {
    default: {
      base: "flex h-full flex-col mx-auto",
      width: "max-w-7xl"
    }
  }
}, et = Me(ao);
function O(t, o, e = {}) {
  const n = et[t];
  if (n)
    return o && n[o] ? mt({ ...n.default, ...n[o], ...e }) : mt({ ...n.default, ...e });
  console.warn(`[Galaxy Vue warn] No component "${t}" not found in variant list`);
}
function hr(t) {
  Object.assign(et, Et(JSON.parse(JSON.stringify(et)), t));
}
function Et(t, o) {
  for (const e in o) {
    const n = t[e], s = o[e];
    gt(n) && gt(s) ? t[e] = Et({ ...n }, s) : s !== void 0 && (t[e] = s);
  }
  return t;
}
function gt(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
const mr = {
  __name: "Container",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t, n = O("Container", e.variant, e.classes);
    return (s, l) => (i(), p("div", {
      class: m([r(n).base, r(n).width])
    }, [
      k(s.$slots, "default")
    ], 2));
  }
}, ge = () => Math.random().toString(36).substr(2, 9);
const ye = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, zt = (t) => (rt("data-v-e3242f54"), t = t(), lt(), t), io = /* @__PURE__ */ zt(() => /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M8.25 4.5l7.5 7.5-7.5 7.5"
}, null, -1)), uo = [
  io
], co = /* @__PURE__ */ zt(() => /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), po = [
  co
], fo = {
  __name: "Expandable",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    arrowHide: {
      type: Boolean,
      default: !1
    },
    arrowPosition: {
      type: String,
      default: "end",
      validator: function(t) {
        return ["start", "end"].includes(t);
      }
    }
  },
  setup(t) {
    const o = t, e = ge(), n = G(null), s = G(!1), l = O("Expandable", o.variant, o.classes), a = H("IS_EXPANDABLE_GROUP", 0), u = H("IS_ALWAYS_OPEN", 0), c = H("EXPAND_ACTIVE", null);
    a && We(c, (y, $) => {
      !u && y !== e && (s.value = !1);
    });
    const g = () => {
      o.disabled || (s.value = !s.value, a && s.value === !0 && (c.value = e));
    }, w = (y) => {
      y.style.height = "0";
    }, h = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, f = (y) => {
      y.style.height = y.scrollHeight + "px";
    }, v = (y) => {
      y.style.height = "0";
    };
    return (y, $) => (i(), p("div", {
      class: m(["expandable-wrapper relative", {
        [r(l).panelWrapperNotGrouped]: !r(a),
        [r(l).panelWrapperGrouped]: r(a)
      }])
    }, [
      _("div", {
        class: m({
          "expandable flex items-center justify-start": !0,
          [r(l).panel]: !0,
          [r(l).panelTheme]: !0,
          [r(l).panelActive]: s.value,
          [r(l).panelDisabled]: o.disabled
        }),
        onClick: g
      }, [
        t.arrowPosition === "start" && !o.arrowHide ? (i(), p("div", {
          key: 0,
          class: m({
            "mr-2": !0,
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          k(y.$slots, "arrow-start", {}, () => [
            (i(), p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-90": s.value }])
            }, uo, 2))
          ], !0)
        ], 2)) : C("", !0),
        _("div", {
          class: m(["grow", {
            [r(l).panelTitle]: !0,
            [r(l).panelTitleDisabled]: o.disabled
          }])
        }, [
          k(y.$slots, "title", {}, () => [
            z(T(o.title), 1)
          ], !0)
        ], 2),
        t.arrowPosition === "end" && !o.arrowHide ? (i(), p("div", {
          key: 1,
          class: m({
            [r(l).panelArrowWrapper]: !0,
            [r(l).panelArrowWrapperDisabled]: o.disabled
          })
        }, [
          k(y.$slots, "arrow-end", {}, () => [
            (i(), p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: m([r(l).panelArrowSize, { "rotate-0": !s.value, "rotate-180": s.value }])
            }, po, 2))
          ], !0)
        ], 2)) : C("", !0)
      ], 2),
      V(_e, {
        name: "slide",
        onBeforeEnter: w,
        onEnter: h,
        onBeforeLeave: f,
        onLeave: v
      }, {
        default: I(() => [
          je(_("div", {
            ref_key: "content",
            ref: n,
            class: m(["overflow-hidden", r(l).panelContent])
          }, [
            k(y.$slots, "default", {}, void 0, !0)
          ], 2), [
            [He, s.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}, gr = /* @__PURE__ */ ye(fo, [["__scopeId", "data-v-e3242f54"]]);
const yr = {
  __name: "ExpandableGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    alwaysOpen: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = G(!1), n = O("Expandable", o.variant, o.classes);
    return W("IS_EXPANDABLE_GROUP", 1), W("IS_ALWAYS_OPEN", o.alwaysOpen), W("EXPAND_ACTIVE", e), (s, l) => (i(), p("div", {
      class: m(["expandable-group", [r(n).group, r(n).groupTheme]])
    }, [
      k(s.$slots, "default")
    ], 2));
  }
}, ho = { key: 1 }, mo = ["src"], go = /* @__PURE__ */ _("path", {
  "fill-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "clip-rule": "evenodd"
}, null, -1), yo = [
  go
], vr = {
  __name: "Avatar",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    text: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    },
    hover: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = q(), n = O("Avatar", o.variant, o.classes), s = H("IS_AVATAR_GROUPED", 0);
    return (l, a) => {
      var u;
      return i(), p("div", {
        class: m(r(n).wrapper)
      }, [
        _("div", {
          class: m([
            r(n).content,
            r(n).contentSize,
            r(n).contentTheme,
            {
              [r(n).contentGrouped]: r(s),
              [r(n).contentHover]: o.hover
            }
          ])
        }, [
          o.text || ((u = r(e)) == null ? void 0 : u.default) ? k(l.$slots, "default", { key: 0 }, () => [
            z(T(o.text), 1)
          ]) : o.img ? (i(), p("div", ho, [
            _("img", {
              src: o.img,
              alt: ""
            }, null, 8, mo)
          ])) : (i(), p("div", {
            key: 2,
            class: m(r(n).defaultPlaceholderWrapper)
          }, [
            (i(), p("svg", {
              class: m(r(n).defaultPlaceholderIcon),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            }, yo, 2))
          ], 2)),
          o.status !== null ? (i(), p("span", {
            key: 3,
            class: m([
              r(n).statusDotSizePosition,
              r(n).statusDotTheme,
              {
                [r(n).statusDotOnline]: o.status === "online",
                [r(n).statusDotBusy]: o.status === "busy",
                [r(n).statusDotAway]: o.status === "away",
                [r(n).statusDotOffline]: o.status !== "online" || o.status !== "busy" || o.status === "away"
              }
            ])
          }, null, 2)) : C("", !0)
        ], 2)
      ], 2);
    };
  }
}, br = {
  __name: "AvatarGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t) {
    const o = t, e = O("AvatarGroup", o.variant, o.classes);
    return W("IS_AVATAR_GROUPED", 1), (n, s) => (i(), p("div", {
      class: m(r(e).content)
    }, [
      k(n.$slots, "default")
    ], 2));
  }
}, vo = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), bo = [
  vo
], wr = {
  __name: "Badge",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    text: {
      type: String,
      default: null
    },
    removable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove"],
  setup(t, { emit: o }) {
    const e = t, n = O("Badge", e.variant, e.classes), s = (l) => {
      o("remove", l);
    };
    return (l, a) => (i(), p("div", {
      class: m([r(n).base, r(n).theme, r(n).themeColor])
    }, [
      _("div", null, [
        k(l.$slots, "default", {}, () => [
          z(T(e.text), 1)
        ])
      ]),
      e.removable ? (i(), p("button", {
        key: 0,
        type: "button",
        class: m([r(n).removeButton, r(n).removeButtonTheme]),
        onClick: a[0] || (a[0] = (u) => s(u))
      }, [
        k(l.$slots, "remove-icon", {}, () => [
          (i(), p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: m(r(n).removeIcon)
          }, bo, 2))
        ])
      ], 2)) : C("", !0)
    ], 2));
  }
}, wo = /* @__PURE__ */ _("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), _o = /* @__PURE__ */ _("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), xo = [
  wo,
  _o
], $o = {
  __name: "LoaderSpinner",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = O("LoaderSpinner", o.variant, o.classes);
    return (n, s) => (i(), p("svg", {
      "aria-hidden": "true",
      class: m([
        r(e).base,
        r(e).size,
        r(e).color,
        {
          [r(e).disabled]: o.disabled
        }
      ]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, xo, 2));
  }
};
const So = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Co = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1), ko = [
  Co
], To = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Bo = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Ao = [
  Bo
], $e = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoader: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: "button"
    },
    circle: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    ghost: {
      type: Boolean,
      default: !1
    },
    responsive: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = q(), n = H("IS_BUTTON_GROUP", 0), s = H("IS_BUTTON_GROUP_RESPONSIVE", 0), l = H("IS_DROPDOWN", 0), a = H("IS_DROPDOWN_OPEN", 0), u = H("IS_DROPDOWN_ARROW", 0), c = H("IS_BUTTON_GROUP_VARIANT", null), g = G(o.variant);
    n && c && !o.variant && (g.value = c);
    const w = O("Button", g.value, o.classes), h = D(() => ({
      "btn relative inline-flex items-center justify-center": !0,
      "w-full h-full": o.responsive || s,
      [w.base]: !0,
      [w.baseSize]: !0,
      [w.baseSizeIconOnly]: !n && (o.circle && v.value || v.value),
      [w.normal]: !o.outlined && !o.ghost && !o.disabled,
      [w.outlined]: o.outlined && !o.disabled,
      [w.ghost]: o.ghost && !o.outlined && !o.disabled,
      [w.normalDisabled]: !o.outlined && !o.ghost && o.disabled,
      [w.outlinedDisabled]: o.outlined && !o.ghost && o.disabled,
      [w.ghostDisabled]: o.ghost && !o.outlined && o.disabled,
      [w.shadow]: !n && !o.outlined && !o.ghost,
      [w.disabled]: o.disabled,
      "rounded-full": o.circle,
      btn__loading: o.loading
    })), f = D(() => {
      let y = "";
      const $ = {
        disabled: !1,
        target: null,
        href: null,
        to: null
      };
      return o.disabled ? y = "button" : (o.to ? (y = "RouterLink", $.to = o.to) : (y = o.href && "a" || o.tag || "div", y === "a" && o.href && ($.href = o.href)), o.target && ($.target = o.target)), y === "button" && o.disabled && ($.disabled = !0), { tag: y, data: $ };
    }), v = D(() => !!(!e.default && e.icon));
    return (y, $) => (i(), M(Fe(f.value.tag), at(f.value.data, { class: h.value }), {
      default: I(() => {
        var x, b, d, S, L, A, P, N, F, X;
        return [
          o.loading || ((x = r(e)) == null ? void 0 : x.icon) ? (i(), p("span", {
            key: 0,
            class: m({
              "flex items-center justify-center": !0,
              "mr-2": (b = r(e)) == null ? void 0 : b.default
            })
          }, [
            o.loading ? (i(), p("span", {
              key: 0,
              class: m({
                btn__loader: o.loading && !((d = r(e)) != null && d.default),
                "opacity-0": !o.loading
              })
            }, [
              k(y.$slots, "loader", {}, () => [
                V($o, {
                  disabled: o.disabled,
                  variant: o.variantLoader
                }, null, 8, ["disabled", "variant"])
              ])
            ], 2)) : C("", !0),
            ((S = r(e)) == null ? void 0 : S.icon) && !((L = r(e)) != null && L.default) || !o.loading && ((A = r(e)) == null ? void 0 : A.icon) && ((P = r(e)) == null ? void 0 : P.default) ? (i(), p("span", {
              key: 1,
              class: m({
                "opacity-0": o.loading,
                [r(w).iconSize]: !0
              })
            }, [
              k(y.$slots, "icon")
            ], 2)) : C("", !0)
          ], 2)) : C("", !0),
          (N = r(e)) != null && N.default ? (i(), p("span", {
            key: 1,
            class: m({
              "opacity-0": o.loading && !((F = r(e)) != null && F.default)
            })
          }, [
            k(y.$slots, "default")
          ], 2)) : C("", !0),
          ((X = r(e)) == null ? void 0 : X.default) && (r(e)["icon-after"] || r(l) && r(u)) ? (i(), p("span", {
            key: 2,
            class: m(["ml-2", r(w).iconSize])
          }, [
            k(y.$slots, "icon-after", {}, () => [
              r(l) && r(u) && r(a) ? (i(), p("svg", So, ko)) : r(l) && r(u) ? (i(), p("svg", To, Ao)) : C("", !0)
            ])
          ], 2)) : C("", !0)
        ];
      }),
      _: 3
    }, 16, ["class"]));
  }
};
const _r = {
  __name: "ButtonGroup",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    responsive: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = O("ButtonGroup", o.variant, o.classes);
    return W("IS_BUTTON_GROUP", 1), W("IS_BUTTON_GROUP_RESPONSIVE", o.responsive), W("IS_BUTTON_GROUP_VARIANT", o.variant), (n, s) => (i(), p("div", {
      class: m({
        relative: !0,
        "w-full h-full": o.responsive,
        [r(e).content]: !0
      })
    }, [
      k(n.$slots, "default")
    ], 2));
  }
};
const Po = {
  __name: "LoaderLinear",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = O("LoaderLinear", o.variant, o.classes);
    return (n, s) => (i(), p("div", {
      class: m([
        r(e).base,
        r(e).size,
        {
          [r(e).emptyColor]: !o.disabled,
          [r(e).disabledEmptyColor]: o.disabled
        }
      ])
    }, [
      _("div", {
        class: m(["loader-linear", {
          [r(e).fillColor]: !o.disabled,
          [r(e).disabledFillColor]: o.disabled
        }])
      }, null, 2)
    ], 2));
  }
}, Vt = /* @__PURE__ */ ye(Po, [["__scopeId", "data-v-ab2ac7d3"]]), xr = {
  __name: "Card",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoader: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    detachedHeader: {
      type: Boolean,
      default: !1
    },
    removePadding: {
      type: Boolean,
      default: !1
    },
    removeHeaderPadding: {
      type: Boolean,
      default: !1
    },
    removeBodyPadding: {
      type: Boolean,
      default: !1
    },
    removeFooterPadding: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = q(), n = O("Card", o.variant, o.classes);
    return (s, l) => (i(), p("div", {
      class: m(r(n).wrapper)
    }, [
      o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (i(), p("div", {
        key: 0,
        class: m(r(n).detachedHeaderWrapper)
      }, [
        _("div", {
          class: m(r(n).headerTitleWrapper)
        }, [
          r(e).header ? k(s.$slots, "header", { key: 1 }) : (i(), p(E, { key: 0 }, [
            _("h1", {
              class: m(r(n).headerTitle)
            }, T(o.title), 3),
            _("div", {
              class: m(r(n).headerSubtitle)
            }, T(o.subtitle), 3)
          ], 64))
        ], 2),
        r(e).actions ? (i(), p("div", {
          key: 0,
          class: m(r(n).headerActions)
        }, [
          k(s.$slots, "actions")
        ], 2)) : C("", !0)
      ], 2)) : C("", !0),
      _("div", {
        class: m([r(n).contentWrapper, r(n).contentTheme])
      }, [
        o.disabled ? (i(), p("div", {
          key: 0,
          class: m(r(n).contentDisabled)
        }, null, 2)) : C("", !0),
        !o.detachedHeader && (o.title || r(e).header || r(e).actions) ? (i(), p("div", {
          key: 1,
          class: m([r(n).headerWrapper, r(n).headerTheme, { [r(n).padding]: !o.removeHeaderPadding && !o.removePadding }])
        }, [
          _("div", {
            class: m(r(n).headerTitleWrapper)
          }, [
            r(e).header ? k(s.$slots, "header", { key: 1 }) : (i(), p(E, { key: 0 }, [
              _("h1", {
                class: m(r(n).headerTitle)
              }, T(o.title), 3),
              _("div", {
                class: m(r(n).headerSubtitle)
              }, T(o.subtitle), 3)
            ], 64))
          ], 2),
          r(e).actions ? (i(), p("div", {
            key: 0,
            class: m(r(n).headerActions)
          }, [
            k(s.$slots, "actions")
          ], 2)) : C("", !0)
        ], 2)) : C("", !0),
        o.loading ? (i(), M(Vt, {
          key: 2,
          classes: { base: "inline-block w-full overflow-hidden relative -mt-1 z-10" },
          variant: t.variantLoader
        }, null, 8, ["variant"])) : C("", !0),
        _("div", {
          class: m([r(n).body, { [r(n).padding]: !o.removeBodyPadding && !o.removePadding }])
        }, [
          k(s.$slots, "default")
        ], 2),
        r(e).footer ? (i(), p("div", {
          key: 3,
          class: m([r(n).footerTheme, { [r(n).padding]: !o.removeFooterPadding && !o.removePadding }])
        }, [
          k(s.$slots, "footer")
        ], 2)) : C("", !0)
      ], 2)
    ], 2));
  }
};
const dt = (t) => (rt("data-v-37ddb19f"), t = t(), lt(), t), Oo = { class: "flex w-full" }, Lo = {
  key: 0,
  class: "p-4 space-y-2"
}, Io = ["onClick"], Do = ["src", "alt"], No = { class: "grow relative" }, Ro = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, Eo = ["src", "alt"], zo = {
  key: 0,
  class: "bg-gray-100 block absolute bottom-0 text-center w-full text-xs py-2"
}, Vo = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, Mo = ["aria-label", "onClick"], Wo = ["onClick"], jo = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ _("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 19l-7-7 7-7"
    })
  ]),
  /* @__PURE__ */ _("span", { class: "hidden" }, "Previous")
], -1)), Ho = [
  jo
], Fo = ["onClick"], Go = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ _("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 5l7 7-7 7"
    })
  ]),
  /* @__PURE__ */ _("span", { class: "hidden" }, "Next")
], -1)), qo = [
  Go
], Uo = {
  key: 0,
  class: "mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none"
}, Xo = {
  class: "grid grid-cols-6 gap-4",
  "aria-orientation": "horizontal",
  role: "tablist"
}, Yo = ["onClick"], Ko = /* @__PURE__ */ dt(() => /* @__PURE__ */ _("span", { class: "sr-only" }, "Angled view", -1)), Zo = { class: "absolute inset-0 overflow-hidden rounded-md" }, Jo = ["src", "alt"], Qo = {
  __name: "Carousel",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantButton: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    images: {
      type: Array,
      default: () => []
    },
    indicators: {
      type: Boolean,
      default: !1
    },
    controls: {
      type: Boolean,
      default: !1
    },
    slide: {
      type: Boolean,
      default: !1
    },
    slideInterval: {
      type: Number,
      default: 3e3
    },
    thumbnails: {
      type: Boolean,
      default: !1
    },
    thumbnailPosition: {
      type: String,
      default: "left"
    },
    imageAlt: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t;
    O("Carousel", o.variant, o.classes);
    const e = G(0), n = G(""), s = G(), l = () => {
      e.value !== o.images.length - 1 ? e.value++ : e.value = 0, n.value = "right", c();
    }, a = () => {
      e.value !== 0 ? e.value-- : e.value = o.images.length - 1, n.value = "left", c();
    }, u = (w) => {
      Dt(() => {
        e.value = w;
      }), c();
    }, c = () => {
      clearInterval(s.value), o.slide && g();
    }, g = () => {
      s.value = setInterval(function() {
        l();
      }, o.slideInterval);
    };
    return It(() => {
      o.slide && g();
    }), (w, h) => (i(), p("div", null, [
      _("div", Oo, [
        o.thumbnails && o.thumbnailPosition === "left" ? (i(), p("div", Lo, [
          (i(!0), p(E, null, Q(t.images, (f, v) => (i(), p("div", {
            class: m([v === e.value ? "opacity-100 ring-primary-500" : "ring-transparent opacity-60 border-2 border-transparent", "w-[60px] hover:opacity-100 cursor-pointer overflow-hidden rounded ring-2 ring-offset-2"]),
            key: v,
            onClick: ie((y) => u(v), ["prevent"])
          }, [
            _("img", {
              src: f != null && f.thumbnail ? f.thumbnail : f.src,
              class: "block w-full h-full",
              alt: f.alt
            }, null, 8, Do)
          ], 10, Io))), 128))
        ])) : C("", !0),
        _("div", No, [
          _("div", Ro, [
            (i(!0), p(E, null, Q(t.images, (f, v) => (i(), p("div", {
              class: m([v === e.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"]),
              key: v
            }, [
              V(_e, {
                name: "fade",
                mode: "out-in",
                appear: ""
              }, {
                default: I(() => [
                  v === e.value ? (i(), p("img", {
                    key: 0,
                    src: f.src,
                    class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                    alt: f.alt
                  }, null, 8, Eo)) : C("", !0)
                ]),
                _: 2
              }, 1024),
              o.imageAlt && f.alt ? (i(), p("div", zo, T(f.alt), 1)) : C("", !0)
            ], 2))), 128))
          ]),
          o.indicators ? (i(), p("div", Vo, [
            (i(!0), p(E, null, Q(t.images, (f, v) => (i(), p("button", {
              key: v,
              type: "button",
              class: m([v === e.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
              "aria-current": "false",
              "aria-label": "Slide " + v,
              onClick: ie((y) => u(v), ["prevent"])
            }, null, 10, Mo))), 128))
          ])) : C("", !0),
          t.controls ? (i(), p("button", {
            key: 1,
            onClick: ie(a, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, Ho, 8, Wo)) : C("", !0),
          t.controls ? (i(), p("button", {
            key: 2,
            onClick: ie(l, ["prevent"]),
            type: "button",
            class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          }, qo, 8, Fo)) : C("", !0)
        ])
      ]),
      o.thumbnails && o.thumbnailPosition === "bottom" ? (i(), p("div", Uo, [
        _("div", Xo, [
          (i(!0), p(E, null, Q(t.images, (f, v) => (i(), p("button", {
            key: v,
            class: "relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none",
            "aria-controls": "tabs-1-panel-1",
            role: "tab",
            type: "button",
            onClick: ie((y) => u(v), ["prevent"])
          }, [
            Ko,
            _("span", Zo, [
              _("img", {
                src: f != null && f.thumbnail ? f.thumbnail : f.src,
                alt: f.alt,
                class: m([v === e.value ? "opacity-100" : "opacity-70", "h-full w-full object-cover object-center hover:opacity-100"])
              }, null, 10, Jo)
            ]),
            _("span", {
              class: m([v === e.value ? "ring-primary-500" : "ring-transparent", "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"]),
              "aria-hidden": "true"
            }, null, 2)
          ], 8, Yo))), 128))
        ])
      ])) : C("", !0)
    ]));
  }
}, $r = /* @__PURE__ */ ye(Qo, [["__scopeId", "data-v-37ddb19f"]]);
function ee(t) {
  return t.split("-")[1];
}
function ut(t) {
  return t === "y" ? "height" : "width";
}
function oe(t) {
  return t.split("-")[0];
}
function xe(t) {
  return ["top", "bottom"].includes(oe(t)) ? "x" : "y";
}
function yt(t, o, e) {
  let {
    reference: n,
    floating: s
  } = t;
  const l = n.x + n.width / 2 - s.width / 2, a = n.y + n.height / 2 - s.height / 2, u = xe(o), c = ut(u), g = n[c] / 2 - s[c] / 2, w = oe(o), h = u === "x";
  let f;
  switch (w) {
    case "top":
      f = {
        x: l,
        y: n.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: a
      };
      break;
    case "left":
      f = {
        x: n.x - s.width,
        y: a
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (ee(o)) {
    case "start":
      f[u] -= g * (e && h ? -1 : 1);
      break;
    case "end":
      f[u] += g * (e && h ? -1 : 1);
      break;
  }
  return f;
}
const en = async (t, o, e) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: l = [],
    platform: a
  } = e, u = l.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(o));
  let g = await a.getElementRects({
    reference: t,
    floating: o,
    strategy: s
  }), {
    x: w,
    y: h
  } = yt(g, n, c), f = n, v = {}, y = 0;
  for (let $ = 0; $ < u.length; $++) {
    const {
      name: x,
      fn: b
    } = u[$], {
      x: d,
      y: S,
      data: L,
      reset: A
    } = await b({
      x: w,
      y: h,
      initialPlacement: n,
      placement: f,
      strategy: s,
      middlewareData: v,
      rects: g,
      platform: a,
      elements: {
        reference: t,
        floating: o
      }
    });
    if (w = d != null ? d : w, h = S != null ? S : h, v = {
      ...v,
      [x]: {
        ...v[x],
        ...L
      }
    }, A && y <= 50) {
      y++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (g = A.rects === !0 ? await a.getElementRects({
        reference: t,
        floating: o,
        strategy: s
      }) : A.rects), {
        x: w,
        y: h
      } = yt(g, f, c)), $ = -1;
      continue;
    }
  }
  return {
    x: w,
    y: h,
    placement: f,
    strategy: s,
    middlewareData: v
  };
};
function ve(t, o) {
  return typeof t == "function" ? t(o) : t;
}
function tn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mt(t) {
  return typeof t != "number" ? tn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Se(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function qe(t, o) {
  var e;
  o === void 0 && (o = {});
  const {
    x: n,
    y: s,
    platform: l,
    rects: a,
    elements: u,
    strategy: c
  } = t, {
    boundary: g = "clippingAncestors",
    rootBoundary: w = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = ve(o, t), y = Mt(v), x = u[f ? h === "floating" ? "reference" : "floating" : h], b = Se(await l.getClippingRect({
    element: (e = await (l.isElement == null ? void 0 : l.isElement(x))) == null || e ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(u.floating)),
    boundary: g,
    rootBoundary: w,
    strategy: c
  })), d = h === "floating" ? {
    ...a.floating,
    x: n,
    y: s
  } : a.reference, S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u.floating)), L = await (l.isElement == null ? void 0 : l.isElement(S)) ? await (l.getScale == null ? void 0 : l.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Se(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: d,
    offsetParent: S,
    strategy: c
  }) : d);
  return {
    top: (b.top - A.top + y.top) / L.y,
    bottom: (A.bottom - b.bottom + y.bottom) / L.y,
    left: (b.left - A.left + y.left) / L.x,
    right: (A.right - b.right + y.right) / L.x
  };
}
const Ae = Math.min, he = Math.max;
function tt(t, o, e) {
  return he(t, Ae(o, e));
}
const on = (t) => ({
  name: "arrow",
  options: t,
  async fn(o) {
    const {
      x: e,
      y: n,
      placement: s,
      rects: l,
      platform: a,
      elements: u
    } = o, {
      element: c,
      padding: g = 0
    } = ve(t, o) || {};
    if (c == null)
      return {};
    const w = Mt(g), h = {
      x: e,
      y: n
    }, f = xe(s), v = ut(f), y = await a.getDimensions(c), $ = f === "y", x = $ ? "top" : "left", b = $ ? "bottom" : "right", d = $ ? "clientHeight" : "clientWidth", S = l.reference[v] + l.reference[f] - h[f] - l.floating[v], L = h[f] - l.reference[f], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let P = A ? A[d] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(A))) && (P = u.floating[d] || l.floating[v]);
    const N = S / 2 - L / 2, F = P / 2 - y[v] / 2 - 1, X = Ae(w[x], F), Z = Ae(w[b], F), R = X, U = P - y[v] - Z, j = P / 2 - y[v] / 2 + N, Y = tt(R, j, U), re = ee(s) != null && j != Y && l.reference[v] / 2 - (j < R ? X : Z) - y[v] / 2 < 0 ? j < R ? R - j : U - j : 0;
    return {
      [f]: h[f] - re,
      data: {
        [f]: Y,
        centerOffset: j - Y + re
      }
    };
  }
}), nn = ["top", "right", "bottom", "left"], vt = /* @__PURE__ */ nn.reduce((t, o) => t.concat(o, o + "-start", o + "-end"), []), sn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Re(t) {
  return t.replace(/left|right|bottom|top/g, (o) => sn[o]);
}
function Wt(t, o, e) {
  e === void 0 && (e = !1);
  const n = ee(t), s = xe(t), l = ut(s);
  let a = s === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return o.reference[l] > o.floating[l] && (a = Re(a)), {
    main: a,
    cross: Re(a)
  };
}
const rn = {
  start: "end",
  end: "start"
};
function Ee(t) {
  return t.replace(/start|end/g, (o) => rn[o]);
}
function ln(t, o, e) {
  return (t ? [...e.filter((s) => ee(s) === t), ...e.filter((s) => ee(s) !== t)] : e.filter((s) => oe(s) === s)).filter((s) => t ? ee(s) === t || (o ? Ee(s) !== s : !1) : !0);
}
const an = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(o) {
      var e, n, s;
      const {
        rects: l,
        middlewareData: a,
        placement: u,
        platform: c,
        elements: g
      } = o, {
        crossAxis: w = !1,
        alignment: h,
        allowedPlacements: f = vt,
        autoAlignment: v = !0,
        ...y
      } = ve(t, o), $ = h !== void 0 || f === vt ? ln(h || null, v, f) : f, x = await qe(o, y), b = ((e = a.autoPlacement) == null ? void 0 : e.index) || 0, d = $[b];
      if (d == null)
        return {};
      const {
        main: S,
        cross: L
      } = Wt(d, l, await (c.isRTL == null ? void 0 : c.isRTL(g.floating)));
      if (u !== d)
        return {
          reset: {
            placement: $[0]
          }
        };
      const A = [x[oe(d)], x[S], x[L]], P = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: d,
        overflows: A
      }], N = $[b + 1];
      if (N)
        return {
          data: {
            index: b + 1,
            overflows: P
          },
          reset: {
            placement: N
          }
        };
      const F = P.map((R) => {
        const U = ee(R.placement);
        return [R.placement, U && w ? R.overflows.slice(0, 2).reduce((j, Y) => j + Y, 0) : R.overflows[0], R.overflows];
      }).sort((R, U) => R[1] - U[1]), Z = ((s = F.filter((R) => R[2].slice(
        0,
        ee(R[0]) ? 2 : 3
      ).every((U) => U <= 0))[0]) == null ? void 0 : s[0]) || F[0][0];
      return Z !== u ? {
        data: {
          index: b + 1,
          overflows: P
        },
        reset: {
          placement: Z
        }
      } : {};
    }
  };
};
function dn(t) {
  const o = Re(t);
  return [Ee(t), o, Ee(o)];
}
function un(t, o, e) {
  const n = ["left", "right"], s = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? o ? s : n : o ? n : s;
    case "left":
    case "right":
      return o ? l : a;
    default:
      return [];
  }
}
function cn(t, o, e, n) {
  const s = ee(t);
  let l = un(oe(t), e === "start", n);
  return s && (l = l.map((a) => a + "-" + s), o && (l = l.concat(l.map(Ee)))), l;
}
const pn = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(o) {
      var e;
      const {
        placement: n,
        middlewareData: s,
        rects: l,
        initialPlacement: a,
        platform: u,
        elements: c
      } = o, {
        mainAxis: g = !0,
        crossAxis: w = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...$
      } = ve(t, o), x = oe(n), b = oe(a) === a, d = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), S = h || (b || !y ? [Re(a)] : dn(a));
      !h && v !== "none" && S.push(...cn(a, y, v, d));
      const L = [a, ...S], A = await qe(o, $), P = [];
      let N = ((e = s.flip) == null ? void 0 : e.overflows) || [];
      if (g && P.push(A[x]), w) {
        const {
          main: R,
          cross: U
        } = Wt(n, l, d);
        P.push(A[R], A[U]);
      }
      if (N = [...N, {
        placement: n,
        overflows: P
      }], !P.every((R) => R <= 0)) {
        var F, X;
        const R = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, U = L[R];
        if (U)
          return {
            data: {
              index: R,
              overflows: N
            },
            reset: {
              placement: U
            }
          };
        let j = (X = N.filter((Y) => Y.overflows[0] <= 0).sort((Y, pe) => Y.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!j)
          switch (f) {
            case "bestFit": {
              var Z;
              const Y = (Z = N.map((pe) => [pe.placement, pe.overflows.filter((re) => re > 0).reduce((re, no) => re + no, 0)]).sort((pe, re) => pe[1] - re[1])[0]) == null ? void 0 : Z[0];
              Y && (j = Y);
              break;
            }
            case "initialPlacement":
              j = a;
              break;
          }
        if (n !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function fn(t, o) {
  const {
    placement: e,
    platform: n,
    elements: s
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), a = oe(e), u = ee(e), c = xe(e) === "x", g = ["left", "top"].includes(a) ? -1 : 1, w = l && c ? -1 : 1, h = ve(o, t);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return u && typeof y == "number" && (v = u === "end" ? y * -1 : y), c ? {
    x: v * w,
    y: f * g
  } : {
    x: f * g,
    y: v * w
  };
}
const hn = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: n
      } = o, s = await fn(o, t);
      return {
        x: e + s.x,
        y: n + s.y,
        data: s
      };
    }
  };
};
function mn(t) {
  return t === "x" ? "y" : "x";
}
const gn = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(o) {
      const {
        x: e,
        y: n,
        placement: s
      } = o, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: u = {
          fn: (x) => {
            let {
              x: b,
              y: d
            } = x;
            return {
              x: b,
              y: d
            };
          }
        },
        ...c
      } = ve(t, o), g = {
        x: e,
        y: n
      }, w = await qe(o, c), h = xe(oe(s)), f = mn(h);
      let v = g[h], y = g[f];
      if (l) {
        const x = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", d = v + w[x], S = v - w[b];
        v = tt(d, v, S);
      }
      if (a) {
        const x = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", d = y + w[x], S = y - w[b];
        y = tt(d, y, S);
      }
      const $ = u.fn({
        ...o,
        [h]: v,
        [f]: y
      });
      return {
        ...$,
        data: {
          x: $.x - e,
          y: $.y - n
        }
      };
    }
  };
}, yn = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(o) {
      const {
        placement: e,
        rects: n,
        platform: s,
        elements: l
      } = o, {
        apply: a = () => {
        },
        ...u
      } = ve(t, o), c = await qe(o, u), g = oe(e), w = ee(e), f = xe(e) === "x", {
        width: v,
        height: y
      } = n.floating;
      let $, x;
      g === "top" || g === "bottom" ? ($ = g, x = w === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = g, $ = w === "end" ? "top" : "bottom");
      const b = y - c[$], d = v - c[x], S = !o.middlewareData.shift;
      let L = b, A = d;
      if (f) {
        const N = v - c.left - c.right;
        A = w || S ? Ae(d, N) : N;
      } else {
        const N = y - c.top - c.bottom;
        L = w || S ? Ae(b, N) : N;
      }
      if (S && !w) {
        const N = he(c.left, 0), F = he(c.right, 0), X = he(c.top, 0), Z = he(c.bottom, 0);
        f ? A = v - 2 * (N !== 0 || F !== 0 ? N + F : he(c.left, c.right)) : L = y - 2 * (X !== 0 || Z !== 0 ? X + Z : he(c.top, c.bottom));
      }
      await a({
        ...o,
        availableWidth: A,
        availableHeight: L
      });
      const P = await s.getDimensions(l.floating);
      return v !== P.width || y !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function K(t) {
  var o;
  return ((o = t.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function ne(t) {
  return K(t).getComputedStyle(t);
}
const bt = Math.min, Ce = Math.max, ze = Math.round;
function jt(t) {
  const o = ne(t);
  let e = parseFloat(o.width), n = parseFloat(o.height);
  const s = t.offsetWidth, l = t.offsetHeight, a = ze(e) !== s || ze(n) !== l;
  return a && (e = s, n = l), {
    width: e,
    height: n,
    fallback: a
  };
}
function de(t) {
  return Ft(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ie;
function Ht() {
  if (Ie)
    return Ie;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ie = t.brands.map((o) => o.brand + "/" + o.version).join(" "), Ie) : navigator.userAgent;
}
function se(t) {
  return t instanceof K(t).HTMLElement;
}
function ue(t) {
  return t instanceof K(t).Element;
}
function Ft(t) {
  return t instanceof K(t).Node;
}
function wt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const o = K(t).ShadowRoot;
  return t instanceof o || t instanceof ShadowRoot;
}
function Ue(t) {
  const {
    overflow: o,
    overflowX: e,
    overflowY: n,
    display: s
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(o + n + e) && !["inline", "contents"].includes(s);
}
function vn(t) {
  return ["table", "td", "th"].includes(de(t));
}
function ct(t) {
  const o = /firefox/i.test(Ht()), e = ne(t), n = e.backdropFilter || e.WebkitBackdropFilter;
  return e.transform !== "none" || e.perspective !== "none" || (n ? n !== "none" : !1) || o && e.willChange === "filter" || o && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective"].some((s) => e.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const l = e.contain;
    return l != null ? l.includes(s) : !1;
  });
}
function Gt() {
  return !/^((?!chrome|android).)*safari/i.test(Ht());
}
function pt(t) {
  return ["html", "body", "#document"].includes(de(t));
}
function qt(t) {
  return ue(t) ? t : t.contextElement;
}
const Ut = {
  x: 1,
  y: 1
};
function be(t) {
  const o = qt(t);
  if (!se(o))
    return Ut;
  const e = o.getBoundingClientRect(), {
    width: n,
    height: s,
    fallback: l
  } = jt(o);
  let a = (l ? ze(e.width) : e.width) / n, u = (l ? ze(e.height) : e.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
function Pe(t, o, e, n) {
  var s, l;
  o === void 0 && (o = !1), e === void 0 && (e = !1);
  const a = t.getBoundingClientRect(), u = qt(t);
  let c = Ut;
  o && (n ? ue(n) && (c = be(n)) : c = be(t));
  const g = u ? K(u) : window, w = !Gt() && e;
  let h = (a.left + (w && ((s = g.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / c.x, f = (a.top + (w && ((l = g.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, v = a.width / c.x, y = a.height / c.y;
  if (u) {
    const $ = K(u), x = n && ue(n) ? K(n) : n;
    let b = $.frameElement;
    for (; b && n && x !== $; ) {
      const d = be(b), S = b.getBoundingClientRect(), L = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(L.paddingLeft)) * d.x, S.y += (b.clientTop + parseFloat(L.paddingTop)) * d.y, h *= d.x, f *= d.y, v *= d.x, y *= d.y, h += S.x, f += S.y, b = K(b).frameElement;
    }
  }
  return {
    width: v,
    height: y,
    top: f,
    right: h + v,
    bottom: f + y,
    left: h,
    x: h,
    y: f
  };
}
function ce(t) {
  return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Xe(t) {
  return ue(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function bn(t) {
  let {
    rect: o,
    offsetParent: e,
    strategy: n
  } = t;
  const s = se(e), l = ce(e);
  if (e === l)
    return o;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 1,
    y: 1
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((s || !s && n !== "fixed") && ((de(e) !== "body" || Ue(l)) && (a = Xe(e)), se(e))) {
    const g = Pe(e);
    u = be(e), c.x = g.x + e.clientLeft, c.y = g.y + e.clientTop;
  }
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - a.scrollLeft * u.x + c.x,
    y: o.y * u.y - a.scrollTop * u.y + c.y
  };
}
function Xt(t) {
  return Pe(ce(t)).left + Xe(t).scrollLeft;
}
function wn(t) {
  const o = ce(t), e = Xe(t), n = t.ownerDocument.body, s = Ce(o.scrollWidth, o.clientWidth, n.scrollWidth, n.clientWidth), l = Ce(o.scrollHeight, o.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -e.scrollLeft + Xt(t);
  const u = -e.scrollTop;
  return ne(n).direction === "rtl" && (a += Ce(o.clientWidth, n.clientWidth) - s), {
    width: s,
    height: l,
    x: a,
    y: u
  };
}
function Oe(t) {
  if (de(t) === "html")
    return t;
  const o = t.assignedSlot || t.parentNode || wt(t) && t.host || ce(t);
  return wt(o) ? o.host : o;
}
function Yt(t) {
  const o = Oe(t);
  return pt(o) ? o.ownerDocument.body : se(o) && Ue(o) ? o : Yt(o);
}
function Ve(t, o) {
  var e;
  o === void 0 && (o = []);
  const n = Yt(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), l = K(n);
  return s ? o.concat(l, l.visualViewport || [], Ue(n) ? n : []) : o.concat(n, Ve(n));
}
function _n(t, o) {
  const e = K(t), n = ce(t), s = e.visualViewport;
  let l = n.clientWidth, a = n.clientHeight, u = 0, c = 0;
  if (s) {
    l = s.width, a = s.height;
    const g = Gt();
    (g || !g && o === "fixed") && (u = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: u,
    y: c
  };
}
function xn(t, o) {
  const e = Pe(t, !0, o === "fixed"), n = e.top + t.clientTop, s = e.left + t.clientLeft, l = se(t) ? be(t) : {
    x: 1,
    y: 1
  }, a = t.clientWidth * l.x, u = t.clientHeight * l.y, c = s * l.x, g = n * l.y;
  return {
    width: a,
    height: u,
    x: c,
    y: g
  };
}
function _t(t, o, e) {
  return o === "viewport" ? Se(_n(t, e)) : ue(o) ? Se(xn(o, e)) : Se(wn(ce(t)));
}
function $n(t, o) {
  const e = o.get(t);
  if (e)
    return e;
  let n = Ve(t).filter((u) => ue(u) && de(u) !== "body"), s = null;
  const l = ne(t).position === "fixed";
  let a = l ? Oe(t) : t;
  for (; ue(a) && !pt(a); ) {
    const u = ne(a), c = ct(a);
    (l ? !c && !s : !c && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? n = n.filter((w) => w !== a) : s = u, a = Oe(a);
  }
  return o.set(t, n), n;
}
function Sn(t) {
  let {
    element: o,
    boundary: e,
    rootBoundary: n,
    strategy: s
  } = t;
  const a = [...e === "clippingAncestors" ? $n(o, this._c) : [].concat(e), n], u = a[0], c = a.reduce((g, w) => {
    const h = _t(o, w, s);
    return g.top = Ce(h.top, g.top), g.right = bt(h.right, g.right), g.bottom = bt(h.bottom, g.bottom), g.left = Ce(h.left, g.left), g;
  }, _t(o, u, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Cn(t) {
  return se(t) ? jt(t) : t.getBoundingClientRect();
}
function xt(t) {
  return !se(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function kn(t) {
  let o = Oe(t);
  for (; se(o) && !pt(o); ) {
    if (ct(o))
      return o;
    o = Oe(o);
  }
  return null;
}
function $t(t) {
  const o = K(t);
  let e = xt(t);
  for (; e && vn(e) && ne(e).position === "static"; )
    e = xt(e);
  return e && (de(e) === "html" || de(e) === "body" && ne(e).position === "static" && !ct(e)) ? o : e || kn(t) || o;
}
function Tn(t, o, e) {
  const n = se(o), s = ce(o), l = Pe(t, !0, e === "fixed", o);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = {
    x: 0,
    y: 0
  };
  if (n || !n && e !== "fixed")
    if ((de(o) !== "body" || Ue(s)) && (a = Xe(o)), se(o)) {
      const c = Pe(o, !0);
      u.x = c.x + o.clientLeft, u.y = c.y + o.clientTop;
    } else
      s && (u.x = Xt(s));
  return {
    x: l.left + a.scrollLeft - u.x,
    y: l.top + a.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
const Bn = {
  getClippingRect: Sn,
  convertOffsetParentRelativeRectToViewportRelativeRect: bn,
  isElement: ue,
  getDimensions: Cn,
  getOffsetParent: $t,
  getDocumentElement: ce,
  getScale: be,
  async getElementRects(t) {
    let {
      reference: o,
      floating: e,
      strategy: n
    } = t;
    const s = this.getOffsetParent || $t, l = this.getDimensions;
    return {
      reference: Tn(o, await s(e), n),
      floating: {
        x: 0,
        y: 0,
        ...await l(e)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
}, An = (t, o, e) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Bn,
    ...e
  }, l = {
    ...s.platform,
    _c: n
  };
  return en(t, o, {
    ...s,
    platform: l
  });
}, me = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (t) => [...t, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: !1,
      html: !1,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function ot(t, o) {
  let e = me.themes[t] || {}, n;
  do
    n = e[o], typeof n > "u" ? e.$extend ? e = me.themes[e.$extend] || {} : (e = null, n = me[o]) : e = null;
  while (e);
  return n;
}
function Pn(t) {
  const o = [t];
  let e = me.themes[t] || {};
  do
    e.$extend && !e.$resetCss ? (o.push(e.$extend), e = me.themes[e.$extend] || {}) : e = null;
  while (e);
  return o.map((n) => `v-popper--theme-${n}`);
}
function St(t) {
  const o = [t];
  let e = me.themes[t] || {};
  do
    e.$extend ? (o.push(e.$extend), e = me.themes[e.$extend] || {}) : e = null;
  while (e);
  return o;
}
let we = !1;
if (typeof window < "u") {
  we = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get() {
        we = !0;
      }
    });
    window.addEventListener("test", null, t);
  } catch {
  }
}
let Kt = !1;
typeof window < "u" && typeof navigator < "u" && (Kt = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const On = ["auto", "top", "bottom", "left", "right"].reduce((t, o) => t.concat([
  o,
  `${o}-start`,
  `${o}-end`
]), []), Ct = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, kt = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Tt(t, o) {
  const e = t.indexOf(o);
  e !== -1 && t.splice(e, 1);
}
function Ke() {
  return new Promise((t) => requestAnimationFrame(() => {
    requestAnimationFrame(t);
  }));
}
const J = [];
let fe = null;
const Bt = {};
function At(t) {
  let o = Bt[t];
  return o || (o = Bt[t] = []), o;
}
let nt = function() {
};
typeof window < "u" && (nt = window.Element);
function B(t) {
  return function(o) {
    return ot(o.theme, t);
  };
}
const Ze = "__floating-vue__popper", Zt = () => Ge({
  name: "VPopper",
  provide() {
    return {
      [Ze]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ze]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: B("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: B("positioningDisabled")
    },
    placement: {
      type: String,
      default: B("placement"),
      validator: (t) => On.includes(t)
    },
    delay: {
      type: [String, Number, Object],
      default: B("delay")
    },
    distance: {
      type: [Number, String],
      default: B("distance")
    },
    skidding: {
      type: [Number, String],
      default: B("skidding")
    },
    triggers: {
      type: Array,
      default: B("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: B("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: B("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: B("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: B("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: B("popperHideTriggers")
    },
    container: {
      type: [String, Object, nt, Boolean],
      default: B("container")
    },
    boundary: {
      type: [String, nt],
      default: B("boundary")
    },
    strategy: {
      type: String,
      validator: (t) => ["absolute", "fixed"].includes(t),
      default: B("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: B("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: B("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: B("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: B("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: B("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: B("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: B("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: B("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: B("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: B("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: B("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: B("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: B("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: B("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: B("flip")
    },
    shift: {
      type: Boolean,
      default: B("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: B("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: B("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: B("disposeTimeout")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var t;
      return (t = this[Ze]) == null ? void 0 : t.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var t, o;
      return ((t = this.popperTriggers) == null ? void 0 : t.includes("hover")) || ((o = this.popperShowTriggers) == null ? void 0 : o.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(t) {
      t ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    ...[
      "triggers",
      "positioningDisabled"
    ].reduce((t, o) => (t[o] = "$_refreshListeners", t), {}),
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((t, o) => (t[o] = "$_computePosition", t), {})
  },
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((t) => t.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: t = null, skipDelay: o = !1, force: e = !1 } = {}) {
      var n, s;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (e || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(t, o), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: t = null, skipDelay: o = !1 } = {}) {
      var e;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: o }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((e = this.parentPopper) == null ? void 0 : e.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(t, o), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var o;
      var t;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (o = (t = this.referenceNode) == null ? void 0 : t.call(this)) != null ? o : this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var n;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const t = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && t.middleware.push(hn({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const o = this.placement.startsWith("auto");
      if (o ? t.middleware.push(an({
        alignment: (n = this.placement.split("-")[1]) != null ? n : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(gn({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !o && this.flip && t.middleware.push(pn({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(on({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: s, rects: l, middlewareData: a }) => {
          let u;
          const { centerOffset: c } = a.arrow;
          return s.startsWith("top") || s.startsWith("bottom") ? u = Math.abs(c) > l.reference.width / 2 : u = Math.abs(c) > l.reference.height / 2, {
            data: {
              overflow: u
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const s = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: l, placement: a, middlewareData: u }) => {
            var c;
            if ((c = u.autoSize) != null && c.skip)
              return {};
            let g, w;
            return a.startsWith("top") || a.startsWith("bottom") ? g = l.reference.width : w = l.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = g != null ? `${g}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = w != null ? `${w}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(yn({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: l }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = l != null ? `${l}px` : null;
        }
      })));
      const e = await An(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: e.x,
        y: e.y,
        placement: e.placement,
        strategy: e.strategy,
        arrow: {
          ...e.middlewareData.arrow,
          ...e.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(t = null, o = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), fe && this.instantMove && fe.instantMove && fe !== this.parentPopper) {
        fe.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      o ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(t = null, o = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (fe = this), o ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(t) {
      const o = this.delay;
      return parseInt(o && o[t] || o || 0);
    },
    async $_applyShow(t = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = t, !this.isShown && (this.$_ensureTeleport(), await Ke(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ve(this.$_referenceNode),
        ...Ve(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const o = this.$_referenceNode.getBoundingClientRect(), e = this.$_popperNode.querySelector(".v-popper__wrapper"), n = e.parentNode.getBoundingClientRect(), s = o.x + o.width / 2 - (n.left + e.offsetLeft), l = o.y + o.height / 2 - (n.top + e.offsetTop);
        this.result.transformOrigin = `${s}px ${l}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const t = this.showGroup;
      if (t) {
        let o;
        for (let e = 0; e < J.length; e++)
          o = J[e], o.showGroup !== t && (o.hide(), o.$emit("close-group"));
      }
      J.push(this), document.body.classList.add("v-popper--some-open");
      for (const o of St(this.theme))
        At(o).push(this), document.body.classList.add(`v-popper--some-open--${o}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ke(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = t, Tt(J, this), J.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const e of St(this.theme)) {
        const n = At(e);
        Tt(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
      }
      fe === this && (fe = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const o = this.disposeTimeout;
      o !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, o)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ke(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let t = this.container;
      if (typeof t == "string" ? t = window.document.querySelector(t) : t === !1 && (t = this.$_targetNodes[0].parentNode), !t)
        throw new Error("No container for popover: " + this.container);
      t.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const t = (e) => {
        this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ct, this.triggers, this.showTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ct, this.popperTriggers, this.popperShowTriggers, t);
      const o = (e) => {
        e.usedByTooltip || this.hide({ event: e });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, kt, this.triggers, this.hideTriggers, o), this.$_registerTriggerListeners([this.$_popperNode], kt, this.popperTriggers, this.popperHideTriggers, o);
    },
    $_registerEventListeners(t, o, e) {
      this.$_events.push({ targetNodes: t, eventType: o, handler: e }), t.forEach((n) => n.addEventListener(o, e, we ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(t, o, e, n, s) {
      let l = e;
      n != null && (l = typeof n == "function" ? n(l) : n), l.forEach((a) => {
        const u = o[a];
        u && this.$_registerEventListeners(t, u, s);
      });
    },
    $_removeEventListeners(t) {
      const o = [];
      this.$_events.forEach((e) => {
        const { targetNodes: n, eventType: s, handler: l } = e;
        !t || t === s ? n.forEach((a) => a.removeEventListener(s, l)) : o.push(e);
      }), this.$_events = o;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(t, o = !1) {
      this.$_showFrameLocked || (this.hide({ event: t }), t.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), o && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(t, o) {
      for (const e of this.$_targetNodes) {
        const n = e.getAttribute(t);
        n && (e.removeAttribute(t), e.setAttribute(o, n));
      }
    },
    $_applyAttrsToTarget(t) {
      for (const o of this.$_targetNodes)
        for (const e in t) {
          const n = t[e];
          n == null ? o.removeAttribute(e) : o.setAttribute(e, n);
        }
    },
    $_updateParentShownChildren(t) {
      let o = this.parentPopper;
      for (; o; )
        t ? o.shownChildren.add(this.randomId) : (o.shownChildren.delete(this.randomId), o.$_pendingHide && o.hide()), o = o.parentPopper;
    },
    $_isAimingPopper() {
      const t = this.$_referenceNode.getBoundingClientRect();
      if (ke >= t.left && ke <= t.right && Te >= t.top && Te <= t.bottom) {
        const o = this.$_popperNode.getBoundingClientRect(), e = ke - le, n = Te - ae, s = o.left + o.width / 2 - le + (o.top + o.height / 2) - ae + o.width + o.height, l = le + e * s, a = ae + n * s;
        return De(le, ae, l, a, o.left, o.top, o.left, o.bottom) || De(le, ae, l, a, o.left, o.top, o.right, o.top) || De(le, ae, l, a, o.right, o.top, o.right, o.bottom) || De(le, ae, l, a, o.left, o.bottom, o.right, o.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Kt ? (document.addEventListener("touchstart", Pt, we ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", In, we ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", Pt, !0), window.addEventListener("click", Ln, !0)), window.addEventListener("resize", Rn));
function Pt(t) {
  for (let o = 0; o < J.length; o++) {
    const e = J[o];
    try {
      const n = e.popperNode();
      e.$_mouseDownContains = n.contains(t.target);
    } catch {
    }
  }
}
function Ln(t) {
  Jt(t);
}
function In(t) {
  Jt(t, !0);
}
function Jt(t, o = !1) {
  const e = {};
  for (let n = J.length - 1; n >= 0; n--) {
    const s = J[n];
    try {
      const l = s.$_containsGlobalTarget = Dn(s, t);
      s.$_pendingHide = !1, requestAnimationFrame(() => {
        if (s.$_pendingHide = !1, !e[s.randomId] && Ot(s, l, t)) {
          if (s.$_handleGlobalClose(t, o), !t.closeAllPopover && t.closePopover && l) {
            let u = s.parentPopper;
            for (; u; )
              e[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Ot(a, a.$_containsGlobalTarget, t); )
            a.$_handleGlobalClose(t, o), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Dn(t, o) {
  const e = t.popperNode();
  return t.$_mouseDownContains || e.contains(o.target);
}
function Ot(t, o, e) {
  return e.closeAllPopover || e.closePopover && o || Nn(t, e) && !o;
}
function Nn(t, o) {
  if (typeof t.autoHide == "function") {
    const e = t.autoHide(o);
    return t.lastAutoHide = e, e;
  }
  return t.autoHide;
}
function Rn(t) {
  for (let o = 0; o < J.length; o++)
    J[o].$_computePosition(t);
}
let le = 0, ae = 0, ke = 0, Te = 0;
typeof window < "u" && window.addEventListener("mousemove", (t) => {
  le = ke, ae = Te, ke = t.clientX, Te = t.clientY;
}, we ? {
  passive: !0
} : void 0);
function De(t, o, e, n, s, l, a, u) {
  const c = ((a - s) * (o - l) - (u - l) * (t - s)) / ((u - l) * (e - t) - (a - s) * (n - o)), g = ((e - t) * (o - l) - (n - o) * (t - s)) / ((u - l) * (e - t) - (a - s) * (n - o));
  return c >= 0 && c <= 1 && g >= 0 && g <= 1;
}
const En = {
  extends: Zt()
}, ft = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
};
function zn(t, o, e, n, s, l) {
  return i(), p("div", {
    ref: "reference",
    class: m(["v-popper", {
      "v-popper--shown": t.slotData.isShown
    }])
  }, [
    k(t.$slots, "default", Nt(Rt(t.slotData)))
  ], 2);
}
const Vn = /* @__PURE__ */ ft(En, [["render", zn]]);
function Mn() {
  var t = window.navigator.userAgent, o = t.indexOf("MSIE ");
  if (o > 0)
    return parseInt(t.substring(o + 5, t.indexOf(".", o)), 10);
  var e = t.indexOf("Trident/");
  if (e > 0) {
    var n = t.indexOf("rv:");
    return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10);
  }
  var s = t.indexOf("Edge/");
  return s > 0 ? parseInt(t.substring(s + 5, t.indexOf(".", s)), 10) : -1;
}
let Ne;
function st() {
  st.init || (st.init = !0, Ne = Mn() !== -1);
}
var Ye = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    st(), Dt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const t = document.createElement("object");
    this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", Ne && this.$el.appendChild(t), t.data = "about:blank", Ne || this.$el.appendChild(t);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Ne && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Wn = /* @__PURE__ */ so("data-v-b329ee4c");
rt("data-v-b329ee4c");
const jn = {
  class: "resize-observer",
  tabindex: "-1"
};
lt();
const Hn = /* @__PURE__ */ Wn((t, o, e, n, s, l) => (i(), M("div", jn)));
Ye.render = Hn;
Ye.__scopeId = "data-v-b329ee4c";
Ye.__file = "src/components/ResizeObserver.vue";
const Qt = (t = "theme") => ({
  computed: {
    themeClass() {
      return Pn(this[t]);
    }
  }
}), Fn = Ge({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ye
  },
  mixins: [
    Qt()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(t) {
      return t != null && !isNaN(t) ? `${t}px` : null;
    }
  }
}), Gn = ["id", "aria-hidden", "tabindex", "data-popper-placement"], qn = {
  ref: "inner",
  class: "v-popper__inner"
}, Un = /* @__PURE__ */ _("div", { class: "v-popper__arrow-outer" }, null, -1), Xn = /* @__PURE__ */ _("div", { class: "v-popper__arrow-inner" }, null, -1), Yn = [
  Un,
  Xn
];
function Kn(t, o, e, n, s, l) {
  const a = Je("ResizeObserver");
  return i(), p("div", {
    id: t.popperId,
    ref: "popover",
    class: m(["v-popper__popper", [
      t.themeClass,
      t.classes.popperClass,
      {
        "v-popper__popper--shown": t.shown,
        "v-popper__popper--hidden": !t.shown,
        "v-popper__popper--show-from": t.classes.showFrom,
        "v-popper__popper--show-to": t.classes.showTo,
        "v-popper__popper--hide-from": t.classes.hideFrom,
        "v-popper__popper--hide-to": t.classes.hideTo,
        "v-popper__popper--skip-transition": t.skipTransition,
        "v-popper__popper--arrow-overflow": t.result && t.result.arrow.overflow,
        "v-popper__popper--no-positioning": !t.result
      }
    ]]),
    style: te(t.result ? {
      position: t.result.strategy,
      transform: `translate3d(${Math.round(t.result.x)}px,${Math.round(t.result.y)}px,0)`
    } : void 0),
    "aria-hidden": t.shown ? "false" : "true",
    tabindex: t.autoHide ? 0 : void 0,
    "data-popper-placement": t.result ? t.result.placement : void 0,
    onKeyup: o[2] || (o[2] = ro((u) => t.autoHide && t.$emit("hide"), ["esc"]))
  }, [
    _("div", {
      class: "v-popper__backdrop",
      onClick: o[0] || (o[0] = (u) => t.autoHide && t.$emit("hide"))
    }),
    _("div", {
      class: "v-popper__wrapper",
      style: te(t.result ? {
        transformOrigin: t.result.transformOrigin
      } : void 0)
    }, [
      _("div", qn, [
        t.mounted ? (i(), p(E, { key: 0 }, [
          _("div", null, [
            k(t.$slots, "default")
          ]),
          t.handleResize ? (i(), M(a, {
            key: 0,
            onNotify: o[1] || (o[1] = (u) => t.$emit("resize", u))
          })) : C("", !0)
        ], 64)) : C("", !0)
      ], 512),
      _("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: te(t.result ? {
          left: t.toPx(t.result.arrow.x),
          top: t.toPx(t.result.arrow.y)
        } : void 0)
      }, Yn, 4)
    ], 4)
  ], 46, Gn);
}
const eo = /* @__PURE__ */ ft(Fn, [["render", Kn]]), to = {
  methods: {
    show(...t) {
      return this.$refs.popper.show(...t);
    },
    hide(...t) {
      return this.$refs.popper.hide(...t);
    },
    dispose(...t) {
      return this.$refs.popper.dispose(...t);
    },
    onResize(...t) {
      return this.$refs.popper.onResize(...t);
    }
  }
}, Zn = Ge({
  name: "VPopperWrapper",
  components: {
    Popper: Vn,
    PopperContent: eo
  },
  mixins: [
    to,
    Qt("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      var t;
      return (t = this.theme) != null ? t : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((t) => t !== this.$refs.popperContent.$el);
    }
  }
});
function Jn(t, o, e, n, s, l) {
  const a = Je("PopperContent"), u = Je("Popper");
  return i(), M(u, {
    ref: "popper",
    theme: t.finalTheme,
    "target-nodes": t.getTargetNodes,
    "popper-node": () => t.$refs.popperContent.$el,
    class: m([
      t.themeClass
    ])
  }, {
    default: I(({
      popperId: c,
      isShown: g,
      shouldMountContent: w,
      skipTransition: h,
      autoHide: f,
      show: v,
      hide: y,
      handleResize: $,
      onResize: x,
      classes: b,
      result: d
    }) => [
      k(t.$slots, "default", {
        shown: g,
        show: v,
        hide: y
      }),
      V(a, {
        ref: "popperContent",
        "popper-id": c,
        theme: t.finalTheme,
        shown: g,
        mounted: w,
        "skip-transition": h,
        "auto-hide": f,
        "handle-resize": $,
        classes: b,
        result: d,
        onHide: y,
        onResize: x
      }, {
        default: I(() => [
          k(t.$slots, "popper", {
            shown: g,
            hide: y
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const ht = /* @__PURE__ */ ft(Zn, [["render", Jn]]), Qn = {
  ...ht,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ht
});
const es = {
  ...ht,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
Ge({
  name: "VTooltipDirective",
  components: {
    Popper: Zt(),
    PopperContent: eo
  },
  mixins: [
    to
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (t) => ot(t.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (t) => ot(t.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(t) {
      if (typeof this.content == "function" && this.$_isShown && (t || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const o = ++this.$_fetchId, e = this.content(this);
        e.then ? e.then((n) => this.onResult(o, n)) : this.onResult(o, e);
      }
    },
    onResult(t, o) {
      t === this.$_fetchId && (this.$_loading = !1, this.asyncContent = o);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const ts = Qn, os = es;
const ns = ["data-slot"], Sr = {
  __name: "Dropdown",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    distance: {
      type: Number,
      default: 14
    },
    skidding: {
      type: Number,
      default: 0
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    itemSelector: {
      type: String,
      default: ".list--item:not(.disabled)"
    },
    skidding: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const o = t;
    q();
    const e = G(null), n = G(!1), s = O("Dropdown", o.variant, o.classes), l = (g) => {
      var h;
      const w = e.value;
      if (!!w) {
        if (["ArrowUp", "ArrowDown"].includes(g.key)) {
          g.preventDefault();
          const f = [...w.$refs.popperContent.$el.querySelectorAll(o.itemSelector)];
          if (!f.length)
            return;
          let v = f.indexOf(g.target);
          v = g.key === "ArrowDown" ? v + 1 : v - 1, (h = f[v]) == null || h.focus();
        }
        (g.key === "Enter" || g.key === " ") && g.target === w.$refs.popperContent.$el && (g.preventDefault(), w.hide());
      }
    }, a = (g) => {
      const w = e.value;
      if (!w || g.target.classList.contains("v-popper") || g.target.classList.contains("disabled"))
        return;
      let h = g.target, f = !0;
      for (; h; ) {
        if (h.getAttribute("data-slot") === "default")
          return;
        if (h.classList.contains("list--item")) {
          f = !1;
          break;
        }
        if (h = h.parentElement, h === null)
          break;
      }
      f || ![...w.$refs.popperContent.$el.querySelectorAll(o.itemSelector)].length || g.target.classList.contains("dropdown-stay") || (g.preventDefault(), w.hide());
    }, u = () => {
      document.addEventListener("keydown", l), document.addEventListener("click", a);
    }, c = () => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
      const g = e.value;
      g == null || g.$refs.popper.$_targetNodes[0].focus();
    };
    return it(() => {
      document.removeEventListener("keydown", l), document.removeEventListener("click", a);
    }), W("IS_DROPDOWN", 1), W("IS_DROPDOWN_OPEN", n), W("IS_DROPDOWN_ARROW", o.arrow), (g, w) => (i(), M(r(ts), {
      ref_key: "popoverRef",
      ref: e,
      distance: o.distance,
      triggers: ["click"],
      theme: "dropdown-menu",
      placement: o.placement,
      "auto-hide": "",
      onShow: u,
      onHide: c,
      skidding: o.skidding,
      shown: n.value,
      "onUpdate:shown": w[1] || (w[1] = (h) => n.value = h),
      class: m(r(s).wrapper),
      "popper-class": [r(s).size, r(s).theme]
    }, Qe({ _: 2 }, [
      Q(g.$slots, (h, f) => ({
        name: f,
        fn: I((v) => [
          f === "default" ? (i(), p("div", at({
            class: "inline-block relative",
            "data-slot": f,
            key: f
          }, v || {}, {
            onClick: w[0] || (w[0] = ie(() => {
            }, ["prevent", "stop"]))
          }), [
            k(g.$slots, f)
          ], 16, ns)) : (i(), M(_e, {
            name: "dropdown",
            appear: "",
            key: f
          }, {
            default: I(() => [
              je(_("div", null, [
                k(g.$slots, f, Nt(Rt(v || {})))
              ], 512), [
                [He, n.value]
              ])
            ]),
            _: 2
          }, 1024))
        ])
      }))
    ]), 1032, ["distance", "placement", "skidding", "shown", "class", "popper-class"]));
  }
};
const ss = {
  __name: "Tooltip",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    placement: {
      type: String,
      default: "top"
    },
    distance: {
      type: Number,
      default: 6
    }
  },
  setup(t) {
    const o = t, e = O("Tooltip", o.variant, o.classes);
    return (n, s) => (i(), M(r(os), {
      triggers: ["hover"],
      theme: "tooltip",
      placement: o.placement,
      "auto-hide": "",
      class: m(r(e).wrapper),
      "popper-class": [r(e).theme]
    }, {
      popper: I(() => [
        k(n.$slots, "content")
      ]),
      default: I(() => [
        k(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["placement", "class", "popper-class"]));
  }
}, rs = {
  key: 0,
  class: "flex flex-row items-center"
}, ls = ["value"], as = ["value"], is = {
  for: "perPage",
  class: "mt-0 ml-4 text-left"
}, ds = {
  key: 1,
  class: "relative flex flex-col justify-center items-center w-full text-center"
}, us = {
  key: 0,
  class: "text-center mb-2"
}, cs = {
  key: 1,
  class: "flex justify-center space-x-2"
}, ps = {
  key: 2,
  class: "relative flex order-1 space-x-2"
}, fs = /* @__PURE__ */ _("span", null, "Previous", -1), hs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ _("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 19l-7-7 7-7"
  })
], -1), ms = { class: "relative flex items-center space-x-2" }, gs = ["value", "disabled", "max"], ys = {
  key: 2,
  class: "text-gray-500"
}, vs = /* @__PURE__ */ _("span", null, "Next", -1), bs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-auto h-auto",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ _("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 5l7 7-7 7"
  })
], -1), Cr = {
  __name: "Pagination",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantButton: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    page: {
      type: Number,
      default: 1,
      required: !0
    },
    perPage: {
      type: Number,
      default: 15
    },
    perPageOptions: {
      type: Array,
      default: () => [15, 30, 50, 100]
    },
    itemsShown: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    nextPrevButtons: {
      type: Boolean,
      default: !1
    },
    hideStats: {
      type: Boolean,
      default: !1
    },
    pageInput: {
      type: Boolean,
      default: !1
    },
    itemName: {
      type: String,
      default: "results"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadMore: {
      type: Boolean,
      default: !1
    },
    loadMoreButton: {
      type: String,
      default: "Load More"
    }
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const e = t, n = O("Pagination", e.variant, e.classes), s = D(() => e.totalItems === void 0 ? -1 : Math.ceil(e.totalItems / e.perPage)), l = D(() => e.page === 1), a = D(() => e.page === 1 ? 1 : e.perPage * (e.page - 1) + 1), u = D(() => {
      if (e.page === s.value)
        return e.totalItems;
      {
        let f = e.page * e.perPage;
        return e.currentCount && f > e.currentCount ? e.currentCount : f;
      }
    }), c = D(() => s.value === -1 ? !1 : s.value < 1 && !e.loading || s.value === 1 ? !0 : s.value > 1 ? e.page === s.value : !1), g = (f) => {
      h(f.target.value), f.target === document.activeElement && f.target.blur();
    }, w = (f) => {
      o("change", {
        page: 1,
        perPage: Number(f.target.value)
      });
    }, h = (f) => {
      f < 1 || f === 1 ? f = 1 : s.value > 0 && Number(f) > s.value && (f = s.value), o("change", {
        page: Number(f),
        perPage: e.perPage
      });
    };
    return (f, v) => (i(), p("div", {
      class: m(["flex", {
        [r(n).baseText]: !0,
        "justify-between": !e.hideStats,
        "justify-center": e.hideStats
      }])
    }, [
      !e.hideStats && !e.loadMore ? (i(), p("div", rs, [
        _("select", {
          name: "currentPerPage",
          class: "flex w-16 py-2 pl-2 pr-2 text-sm font-medium text-gray-500 bg-white border-gray-200 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900 focus:outline-none focus:border-blue-900 focus:ring-0",
          value: e.perPage,
          onInput: v[0] || (v[0] = (y) => w(y))
        }, [
          (i(!0), p(E, null, Q(e.perPageOptions, (y) => (i(), p("option", {
            key: y,
            value: y
          }, T(y), 9, as))), 128))
        ], 40, ls),
        _("label", is, [
          t.totalItems ? (i(), p(E, { key: 0 }, [
            z("Showing " + T(a.value) + " to " + T(u.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : e.loading ? (i(), p(E, { key: 1 }, [
            z("Loading...")
          ], 64)) : C("", !0)
        ])
      ])) : C("", !0),
      e.loadMore ? (i(), p("div", ds, [
        e.hideStats ? C("", !0) : (i(), p("div", us, [
          t.totalItems ? (i(), p(E, { key: 0 }, [
            z("Showing " + T(u.value) + " of " + T(t.totalItems) + " " + T(t.itemName), 1)
          ], 64)) : C("", !0)
        ])),
        t.nextPrevButtons ? (i(), p("div", cs, [
          V($e, {
            outlined: "",
            onClick: v[1] || (v[1] = (y) => l.value ? "" : h(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, {
            default: I(() => [
              z("Previous")
            ]),
            _: 1
          }, 8, ["disabled", "variant"]),
          V($e, {
            outlined: "",
            onClick: v[2] || (v[2] = (y) => c.value ? "" : h(e.page + 1)),
            disabled: c.value,
            variant: t.variantButton
          }, {
            default: I(() => [
              z("Next")
            ]),
            _: 1
          }, 8, ["disabled", "variant"])
        ])) : (i(), M($e, {
          key: 2,
          outlined: "",
          onClick: v[3] || (v[3] = (y) => c.value ? "" : h(e.page + 1)),
          disabled: e.loading || c.value,
          loading: e.loading,
          variant: t.variantButton
        }, {
          default: I(() => [
            z(T(t.loadMoreButton), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading", "variant"]))
      ])) : (i(), p("div", ps, [
        _("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: v[4] || (v[4] = (y) => l.value ? "" : h(e.page - 1)),
            disabled: l.value,
            variant: t.variantButton
          }, Qe({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: I(() => [
                fs
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: I(() => [
                hs
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ]),
        _("div", ms, [
          t.pageInput ? (i(), p("input", {
            key: 0,
            type: "number",
            value: e.page,
            disabled: !e.totalItems && e.loading || s.value < 1 && !e.loading,
            onFocusin: v[5] || (v[5] = (y) => y.target.select()),
            onChange: g,
            max: s.value,
            classes: "text-center",
            style: { width: "55px" }
          }, null, 40, gs)) : (i(), p("span", {
            key: 1,
            class: m(r(n).currentPageText)
          }, T(e.page), 3)),
          e.totalItems ? (i(), p("span", ys, "of " + T(s.value), 1)) : C("", !0)
        ]),
        _("div", null, [
          V($e, {
            ghost: "",
            circle: !t.nextPrevButtons,
            onClick: v[6] || (v[6] = (y) => c.value ? "" : h(e.page + 1)),
            disabled: c.value,
            variant: t.variantButton
          }, Qe({ _: 2 }, [
            t.nextPrevButtons ? {
              name: "default",
              fn: I(() => [
                vs
              ]),
              key: "0"
            } : void 0,
            t.nextPrevButtons ? void 0 : {
              name: "icon",
              fn: I(() => [
                bs
              ]),
              key: "1"
            }
          ]), 1032, ["circle", "disabled", "variant"])
        ])
      ]))
    ], 2));
  }
}, kr = {
  __name: "List",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(t) {
    const o = t, e = O("List", o.variant, o.classes);
    return W("IS_LIST_GROUP", 1), W("IS_LIST_VARIANT", o.variant), (n, s) => (i(), p("div", {
      class: m({
        [r(e).listGroup]: !0,
        [r(e).listGroupColor]: !0,
        [r(e).listGroupText]: !0
      })
    }, [
      k(n.$slots, "default")
    ], 2));
  }
}, ws = { class: "grow w-full" }, Tr = {
  __name: "ListItem",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !0
    },
    divider: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = q(), n = H("IS_LIST_GROUP", 0), s = H("IS_LIST_VARIANT", null), l = G(o.variant);
    n && s && !o.variant && (l.value = s);
    const a = O("List", l.value, o.classes);
    return (u, c) => {
      var g;
      return i(), p("div", {
        class: m({
          "flex items-center": !0,
          "list--item": o.hover && !o.disabled && !o.divider,
          "h-[1px]": o.divider,
          [r(a).listItem]: !o.divider,
          [r(a).listItemSize]: !o.divider,
          [r(a).listItemTheme]: !o.disabled || !o.divider,
          [r(a).listItemHover]: o.hover && !o.disabled && !o.divider,
          [r(a).listItemDisabled]: o.disabled && !o.divider,
          [r(a).listItemDivider]: o.divider
        })
      }, [
        (g = r(e)) != null && g.before ? (i(), p("div", {
          key: 0,
          class: m([r(a).listItemBefore])
        }, [
          k(u.$slots, "before")
        ], 2)) : C("", !0),
        _("div", ws, [
          k(u.$slots, "default")
        ]),
        r(e).after ? (i(), p("div", {
          key: 1,
          class: m([r(a).listItemAfter])
        }, [
          k(u.$slots, "after")
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, Br = {
  __name: "LoaderProgress",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    progress: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: "inside"
    }
  },
  setup(t) {
    const o = t, e = O("LoaderProgress", o.variant, o.classes);
    return (n, s) => (i(), p("div", {
      class: m(r(e).wrapper)
    }, [
      o.label ? (i(), p("div", {
        key: 0,
        class: m(r(e).outsideLabelWrapper)
      }, [
        _("span", {
          class: m(r(e).outsideLabelText)
        }, T(t.label), 3),
        _("span", {
          class: m(r(e).outsideLabelProgress)
        }, T(o.progress) + "%", 3)
      ], 2)) : C("", !0),
      _("div", {
        class: m([r(e).bar, r(e).size, r(e).barColor])
      }, [
        _("div", {
          class: m([r(e).progressBar, r(e).size, r(e).progressBarColor, r(e).insideLabelText]),
          style: te({ width: o.progress + "%" })
        }, [
          o.progress > 0 && o.showProgress && !o.label ? (i(), p(E, { key: 0 }, [
            z(T(o.progress) + "% ", 1)
          ], 64)) : C("", !0)
        ], 6)
      ], 2)
    ], 2));
  }
}, _s = ["onClick"], Ar = {
  __name: "Tabs",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "click:tab"],
  setup(t, { emit: o }) {
    const e = t, s = q().default, l = O("Tabs", e.variant, e.classes), a = (h, f = !0, v = []) => (h.forEach((y) => {
      if (y !== null) {
        if (typeof y != "object") {
          (typeof y == "string" || typeof y == "number") && v.push(z(String(y)));
          return;
        }
        if (Array.isArray(y)) {
          a(y, f, v);
          return;
        }
        if (y.type === E) {
          if (y.children === null)
            return;
          Array.isArray(y.children) && a(y.children, f, v);
        } else
          y.type !== lo && (y.children && y.children.title && (y.slotContent = y.children.title()), v.push(y));
      }
    }), v), u = D(() => s ? a(s()).filter((h) => h.type.__GALAXY_TAB__) : []), c = D({
      get: () => e.modelValue,
      set: (h) => o("update:modelValue", h)
    }), g = (h) => {
      c.value = h;
    };
    function w(h, f) {
      var v, y;
      ((v = f.props) == null ? void 0 : v.disabled) === "" || ((y = f.props) == null ? void 0 : y.disabled) === !0 || g(h);
    }
    return W("IS_TABS", 1), W("IS_TABS_VARIANT", e.variant), W("TAB_ACTIVE", c), W("TAB_CHANGE", g), (h, f) => (i(), p("div", {
      class: m(r(l).wrapper)
    }, [
      _("div", {
        class: m(r(l).tabListWrapper)
      }, [
        _("ul", {
          class: m(r(l).tabList)
        }, [
          (i(!0), p(E, null, Q(u.value, (v, y) => {
            var $, x, b;
            return i(), p("li", {
              key: y,
              onClick: ie((d) => {
                var S;
                return w((S = v.props) == null ? void 0 : S.name, v);
              }, ["prevent"]),
              class: m({
                [r(l).tabItem]: !0,
                [r(l).tabItemDisabled]: (($ = v.props) == null ? void 0 : $.disabled) === "" || ((x = v.props) == null ? void 0 : x.disabled) === !0,
                [r(l).tabItemSelected]: c.value === ((b = v.props) == null ? void 0 : b.name)
              })
            }, [
              _("div", {
                class: m(r(l).tabItemTitle)
              }, [
                v.slotContent ? (i(!0), p(E, { key: 0 }, Q(v.slotContent, (d, S) => (i(), M(Fe(d), { key: S }))), 128)) : (i(), p(E, { key: 1 }, [
                  z(T(v.props.title), 1)
                ], 64))
              ], 2)
            ], 10, _s);
          }), 128))
        ], 2)
      ], 2),
      _("div", at(h.$attrs, {
        class: r(l).tabContentWrapper
      }), [
        k(h.$slots, "default")
      ], 16)
    ], 2));
  }
}, xs = { class: "relative" }, $s = {
  __GALAXY_TAB__: !0
}, Pr = Object.assign($s, {
  __name: "Tab",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    preload: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const o = t;
    q();
    const e = H("IS_TABS_VARIANT", null), n = H("IS_TABS", 0);
    n || console.warn("[Galaxy Vue] <Tab> should only be used within <Tabs>");
    const s = G(o.variant);
    n && e && !o.variant && (s.value = e);
    const l = O("Tabs", s.value, o.classes), a = H("TAB_ACTIVE", null);
    return (u, c) => (i(), p("div", xs, [
      o.preload === !0 ? je((i(), p("div", {
        key: 0,
        class: m(r(l).tabContent)
      }, [
        k(u.$slots, "default")
      ], 2)), [
        [He, r(a) === o.name]
      ]) : o.preload === !1 ? (i(), p(E, { key: 1 }, [
        r(a) === o.name ? (i(), p("div", {
          key: 0,
          class: m(r(l).tabContent)
        }, [
          k(u.$slots, "default")
        ], 2)) : C("", !0)
      ], 64)) : C("", !0)
    ]));
  }
}), Ss = ["for"], Cs = {
  key: 0,
  class: "mr-1"
}, ks = { key: 0 }, Ts = {
  key: 1,
  class: "text-red-500"
}, Bs = /* @__PURE__ */ _("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), As = [
  Bs
], Le = {
  __name: "Label",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    tooltipPosition: {
      type: String,
      default: "top"
    },
    tooltipIconSize: {
      type: Number,
      default: 4
    },
    tooltipHideArrow: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = t, e = q(), n = O("Label", o.variant, o.classes);
    return (s, l) => {
      var a;
      return i(), p("label", {
        for: o.id,
        class: m({
          [r(n).base]: !0,
          [r(n).theme]: !0,
          [r(n).disabled]: o.disabled,
          [r(n).errors]: o.errors,
          ...o.classes
        })
      }, [
        (a = r(e)) != null && a.icon ? (i(), p("span", Cs, [
          k(s.$slots, "icon")
        ])) : C("", !0),
        _("span", null, [
          k(s.$slots, "default", {}, () => [
            o.title ? (i(), p("span", ks, T(o.title), 1)) : C("", !0)
          ])
        ]),
        o.required ? (i(), p("span", Ts, "*")) : C("", !0),
        o.tooltip || r(e)["tooltip-content"] ? (i(), M(ss, {
          key: 2,
          placement: o.tooltipPosition
        }, {
          content: I(() => [
            _("span", null, [
              k(s.$slots, "tooltip-content", {}, () => [
                z(T(t.tooltip), 1)
              ])
            ])
          ]),
          default: I(() => [
            _("span", {
              class: m([r(n).icon, "ml-1 cursor-pointer flex items-center"])
            }, [
              k(s.$slots, "tooltip-icon", {}, () => [
                (i(), p("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: m(r(n).iconSize)
                }, As, 2))
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])) : C("", !0)
      ], 10, Ss);
    };
  }
}, Be = (t, o) => t === o, Ps = (t, o, e = void 0) => {
  if (o == null)
    return e;
  const n = (l) => String.prototype.split.call(o, l).filter(Boolean).reduce((a, u) => a != null ? a[u] : a, t), s = n(/[,[\]]+?/) || n(/[,[\].]+?/);
  return s === void 0 || s === t ? e : s;
};
const Os = ["id", "type", "checked", "value", "disabled"], Ls = {
  __name: "Checkbox",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Boolean],
      default: null
    },
    value: {
      type: [String, Boolean],
      default: null
    },
    trueValue: {
      type: [String, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Boolean],
      default: !1
    },
    radio: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t, n = q(), s = ge(), l = O("Checkbox", e.variant, e.classes), a = (g) => {
      const w = e.modelValue;
      let h = u;
      h = Be(w, e.trueValue) ? e.falseValue : e.trueValue, u.value = h, o("change", g);
    }, u = D({
      get: () => e.modelValue,
      set: (g) => {
        o("update:modelValue", g);
      }
    }), c = D(() => !!Be(e.modelValue || e.value, e.trueValue));
    return (g, w) => {
      var h;
      return i(), p("div", {
        class: m(r(l).wrapper)
      }, [
        _("div", {
          class: m(r(l).inputWrapper)
        }, [
          _("input", {
            id: r(s),
            type: e.radio ? "radio" : "checkbox",
            class: m({
              [r(l).inputCheck]: !e.radio,
              [r(l).inputRadio]: e.radio,
              [r(l).inputDisabled]: e.disabled
            }),
            checked: c.value,
            value: e.modelValue,
            disabled: e.disabled,
            onChange: w[0] || (w[0] = (f) => a(f))
          }, null, 42, Os)
        ], 2),
        e.label || ((h = r(n)) == null ? void 0 : h.default) ? (i(), p("div", {
          key: 0,
          class: m(r(l).labelWrapper)
        }, [
          k(g.$slots, "default", {
            isChecked: c.value,
            props: e
          }, () => [
            V(Le, {
              id: r(s),
              required: e.required,
              disabled: e.disabled,
              tooltip: e.tooltip,
              variant: e.variantLabel,
              variantTooltip: e.variantTooltip
            }, {
              default: I(() => [
                z(T(e.label), 1)
              ]),
              _: 1
            }, 8, ["id", "required", "disabled", "tooltip", "variant", "variantTooltip"])
          ], !0)
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, Lt = /* @__PURE__ */ ye(Ls, [["__scopeId", "data-v-64fca8fb"]]), Is = ["id", "checked", "value", "disabled"], Ds = {
  key: 2,
  class: "relative cursor-not-allowed"
}, Or = {
  __name: "Toggle",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errors: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Boolean],
      default: null
    },
    value: {
      type: [String, Boolean],
      default: null
    },
    trueValue: {
      type: [String, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Boolean],
      default: !1
    },
    falseLabel: {
      type: [String, Boolean],
      default: !1
    },
    inset: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: o }) {
    const e = t;
    q();
    const n = ge(), s = O("Toggle", e.variant, e.classes), l = (w) => {
      const h = e.modelValue;
      let f = c;
      f = Be(h, e.trueValue) ? e.falseValue : e.trueValue, c.value = f, o("change", w);
    }, a = (w) => {
      w.preventDefault(), u("toggle");
    }, u = (w) => {
      e.disabled || (w === "after" && e.falseLabel ? c.value = e.trueValue : w === "before" && e.falseLabel ? c.value = e.falseValue : c.value = Be(e.modelValue, e.trueValue) ? e.falseValue : e.trueValue);
    }, c = D({
      get: () => e.modelValue,
      set: (w) => {
        o("update:modelValue", w);
      }
    }), g = D(() => !!Be(e.modelValue, e.trueValue));
    return (w, h) => (i(), p("div", {
      class: m(r(s).wrapper)
    }, [
      e.falseLabel ? (i(), p("div", {
        key: 0,
        class: m(r(s).labelFalseWrapper)
      }, [
        V(Le, {
          onClick: h[0] || (h[0] = (f) => u("before")),
          disabled: e.disabled,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchFalseLabelColorChecked]: g.value
          }
        }, {
          default: I(() => [
            z(T(e.falseLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "classes"])
      ], 2)) : C("", !0),
      e.disabled ? (i(), p("div", Ds, [
        _("div", {
          class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchDisabledColorChecked : r(s).switchDisabledColor} rounded-full shadow-inner`)
        }, null, 2),
        _("div", {
          class: m(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchDisabledColorBorderChecked} translate-x-full` : "translate-x-0"} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
        }, null, 2)
      ])) : (i(), p("div", {
        key: 1,
        class: m(r(s).inputWrapper),
        onClick: a
      }, [
        _("input", {
          id: r(n),
          class: "sr-only",
          checked: g.value,
          value: e.modelValue,
          disabled: e.disabled,
          onChange: h[1] || (h[1] = (f) => l(f))
        }, null, 40, Is),
        _("div", null, [
          _("div", {
            class: m(`${e.inset ? "w-12" : "w-10"} ${e.inset ? "h-6" : "h-4"} ${g.value ? r(s).switchColorChecked : r(s).switchColor} rounded-full shadow-inner`),
            id: "switch-background"
          }, null, 2),
          _("div", {
            class: m(`absolute w-6 h-6 bg-white border-2 ${g.value ? `${r(s).switchColorBorderChecked} translate-x-full` : `${r(s).switchColorBorder} translate-x-0`} rounded-full ${e.inset ? "left-0 top-0" : "-left-1 -top-1"} transition`)
          }, null, 2)
        ])
      ], 2)),
      e.label ? (i(), p("div", {
        key: 3,
        class: m(r(s).labelWrapper),
        onClick: h[2] || (h[2] = (f) => u("after"))
      }, [
        V(Le, {
          id: null,
          required: e.required,
          disabled: e.disabled,
          tooltip: e.tooltip,
          variant: e.variantLabel,
          variantTooltip: e.variantTooltip,
          classes: {
            "cursor-pointer": !0,
            [r(s).switchTrueLabelColorChecked]: g.value && e.falseLabel,
            [r(s).switchTrueLabelColor]: !g.value && e.falseLabel
          }
        }, {
          default: I(() => [
            z(T(e.label), 1)
          ]),
          _: 1
        }, 8, ["required", "disabled", "tooltip", "variant", "variantTooltip", "classes"])
      ], 2)) : C("", !0)
    ], 2));
  }
}, Ns = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ _("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Rs = { key: 0 }, Es = "input", Lr = {
  __name: "InputText",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    decimals: {
      type: Number,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: null
    },
    modelValue: {
      type: [Number, String],
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    errors: {
      type: Boolean,
      default: !1
    },
    pattern: {
      type: String,
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    },
    characterCounter: {
      type: Boolean,
      default: !1
    },
    step: {
      type: [String, Number],
      default: null
    },
    customClasses: {
      type: String,
      default: null
    },
    customStyle: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      default: null
    }
  },
  emits: ["keyup", "keydown", "enter", "focusin", "focusout", "blur", "cleared", "update:modelValue", "input"],
  setup(t, { emit: o }) {
    const e = t, n = q(), s = O("InputText", e.variant, e.classes), l = e.type === "number" ? "text" : e.type, a = ge(), u = G(null), c = (d) => {
      if (d == null || d === "")
        return null;
      if (e.type === "number" && !e.decimals)
        d = d.toString().replace(/\D/g, ""), d = Number(d);
      else if (e.type === "number" && e.decimals) {
        d = d.toString().replace(/[^0-9.-]/g, "");
        var S = d.split(".");
        if (S.length > 2)
          d = S[0] + "." + S.slice(1).join("");
        else if (S.length === 2 && d.endsWith("."))
          d = d;
        else {
          d = Number(d);
          var L = Math.pow(10, e.decimals);
          d = Math.round(d * L) / L;
        }
      }
      return typeof e.formatter == "function" && (d = e.formatter(d)), e.type === "number" && (e.max && d > e.max && (d = e.max), e.min && d < e.min && (d = e.min)), d;
    }, g = (d) => {
    }, w = (d) => {
      d.target.value = c(d.target.value), b.value = d.target.value, o("keyup", d), d.key === "Enter" && o("enter", d);
    }, h = (d) => {
      o("keydown", d);
    }, f = (d) => {
      e.selectAll && (u == null ? void 0 : u.value) && u.value.select(), o("focusin", d);
    }, v = (d) => {
      o("focusout", d);
    }, y = () => {
      b.value = null, o("cleared");
    }, $ = (d) => {
      b.value = c(d.target.value), d.target.value = b.value, o("blur", d);
    }, x = D(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let d = [s.input];
        return n != null && n.prepend && (d = d.concat([s.inputPrepend])), n != null && n.icon && (d = d.concat(["pl-9"])), e.clearable && (d = d.concat(["pr-8"])), e.readonly && (d = d.concat([s.readonly])), e.disabled && (d = d.concat([s.disabled])), e.errors && (d = d.concat([s.errors])), !e.errors && !e.disabled && (d = d.concat([s.inputTheme])), d;
      }
    }), b = D({
      get: () => c(e.modelValue !== null ? e.modelValue : e.value),
      set: (d) => {
        o("update:modelValue", d);
      }
    });
    return (d, S) => {
      var L, A;
      return i(), p("div", {
        class: m(r(s).root)
      }, [
        e.label ? (i(), M(Le, {
          key: 0,
          id: r(a),
          title: e.label,
          required: e.required,
          error: e.errors,
          tooltip: e.tooltip,
          disabled: e.disabled,
          variant: e.variantLabel
        }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : C("", !0),
        _("div", {
          class: m(["flex", { "mt-1": e.label }])
        }, [
          (L = r(n)) != null && L.prepend ? (i(), p("div", {
            key: 0,
            class: m(r(s).prepend)
          }, [
            k(d.$slots, "prepend")
          ], 2)) : C("", !0),
          _("div", {
            class: m(r(s).inputWrapper)
          }, [
            (A = r(n)) != null && A.icon ? (i(), p("div", {
              key: 0,
              class: m(r(s).icon)
            }, [
              k(d.$slots, "icon")
            ], 2)) : C("", !0),
            (i(), M(Fe(Es), {
              ref_key: "inputTag",
              ref: u,
              id: r(a),
              type: r(l),
              name: `${e.name}-${r(a)}`,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled,
              required: e.required,
              maxlength: e.maxlength,
              autocomplete: `new-${r(a)}`,
              autofill: `new-${r(a)}`,
              pattern: e.pattern,
              value: b.value,
              onInput: S[0] || (S[0] = (P) => g()),
              onKeyup: S[1] || (S[1] = (P) => w(P)),
              onKeydown: S[2] || (S[2] = (P) => h(P)),
              onFocusout: S[3] || (S[3] = (P) => v(P)),
              onFocus: S[4] || (S[4] = (P) => f(P)),
              onBlur: S[5] || (S[5] = (P) => $(P)),
              min: e.min,
              max: e.max,
              step: e.step,
              class: m(x.value),
              style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
            }, null, 40, ["id", "type", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
            e.clearable && b.value && !e.readonly && !e.disabled ? (i(), p("div", {
              key: 1,
              class: m(r(s).clearable),
              onClick: y
            }, [
              k(d.$slots, "clearable", {}, () => [
                Ns
              ])
            ], 2)) : C("", !0)
          ], 2)
        ], 2),
        e.characterCounter ? (i(), p("div", {
          key: 1,
          class: m(r(s).counter)
        }, [
          k(d.$slots, "counter", {
            valueLength: b.value && b.value.length ? b.value.length : 0,
            maxlength: e.maxlength
          }, () => [
            z(T(b.value && b.value.length || 0), 1),
            e.maxlength ? (i(), p("span", Rs, "/" + T(e.maxlength), 1)) : C("", !0)
          ])
        ], 2)) : C("", !0)
      ], 2);
    };
  }
}, zs = /* @__PURE__ */ _("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ _("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Vs = { key: 0 }, Ms = "textarea", Ir = {
  __name: "InputArea",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLabel: {
      type: String,
      default: null
    },
    variantTooltip: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    decimals: {
      type: Number,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: null
    },
    modelValue: {
      type: [Number, String],
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    errors: {
      type: Boolean,
      default: !1
    },
    pattern: {
      type: String,
      default: null
    },
    width: {
      type: [String, Number],
      default: null
    },
    characterCounter: {
      type: Boolean,
      default: !1
    },
    step: {
      type: [String, Number],
      default: null
    },
    customClasses: {
      type: String,
      default: null
    },
    customStyle: {
      type: String,
      default: null
    },
    noresize: {
      type: Boolean,
      default: !1
    },
    formatter: {
      type: Function,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      default: null
    }
  },
  emits: ["keyup", "keydown", "enter", "focusin", "focusout", "blur", "cleared", "update:modelValue", "input"],
  setup(t, { emit: o }) {
    const e = t;
    q();
    const n = O("InputArea", e.variant, e.classes), s = ge(), l = G(null), a = (x) => x == null || x === "" ? null : x, u = (x) => {
    }, c = (x) => {
      x.target.value = a(x.target.value), $.value = x.target.value, o("keyup", x), x.key === "Enter" && o("enter", x);
    }, g = (x) => {
      o("keydown", x);
    }, w = (x) => {
      e.selectAll && (l == null ? void 0 : l.value) && l.value.select(), o("focusin", x);
    }, h = (x) => {
      o("focusout", x);
    }, f = () => {
      $.value = null, o("cleared");
    }, v = (x) => {
      $.value = a(x.target.value), x.target.value = $.value, o("blur", x);
    }, y = D(() => {
      if (e.customClasses)
        return e.customClasses;
      {
        let x = [n.input];
        return e.noresize && (x = x.concat(["resize-none"])), e.clearable && (x = x.concat(["pr-8"])), e.readonly && (x = x.concat([n.readonly])), e.disabled && (x = x.concat([n.disabled])), e.errors && (x = x.concat([n.errors])), !e.errors && !e.disabled && (x = x.concat([n.inputTheme])), x;
      }
    }), $ = D({
      get: () => a(e.modelValue !== null ? e.modelValue : e.value),
      set: (x) => {
        o("update:modelValue", x);
      }
    });
    return (x, b) => (i(), p("div", {
      class: m(r(n).root)
    }, [
      e.label ? (i(), M(Le, {
        key: 0,
        id: r(s),
        title: e.label,
        required: e.required,
        error: e.errors,
        tooltip: e.tooltip,
        disabled: e.disabled,
        variant: e.variantLabel
      }, null, 8, ["id", "title", "required", "error", "tooltip", "disabled", "variant"])) : C("", !0),
      _("div", {
        class: m(["flex", { "mt-1": e.label }])
      }, [
        _("div", {
          class: m(r(n).inputWrapper)
        }, [
          (i(), M(Fe(Ms), {
            ref_key: "inputTag",
            ref: l,
            id: r(s),
            name: `${e.name}-${r(s)}`,
            placeholder: e.placeholder,
            readonly: e.readonly,
            disabled: e.disabled,
            required: e.required,
            maxlength: e.maxlength,
            autocomplete: `new-${r(s)}`,
            autofill: `new-${r(s)}`,
            pattern: e.pattern,
            value: $.value,
            onInput: b[0] || (b[0] = (d) => u()),
            onKeyup: b[1] || (b[1] = (d) => c(d)),
            onKeydown: b[2] || (b[2] = (d) => g(d)),
            onFocusout: b[3] || (b[3] = (d) => h(d)),
            onFocus: b[4] || (b[4] = (d) => w(d)),
            onBlur: b[5] || (b[5] = (d) => v(d)),
            min: e.min,
            max: e.max,
            step: e.step,
            class: m(y.value),
            style: te((e.width ? `width: ${e.width}px;` : "") + e.customStyle)
          }, null, 40, ["id", "name", "placeholder", "readonly", "disabled", "required", "maxlength", "autocomplete", "autofill", "pattern", "value", "min", "max", "step", "class", "style"])),
          e.clearable && $.value && !e.readonly && !e.disabled ? (i(), p("div", {
            key: 0,
            class: m(r(n).clearable),
            onClick: f
          }, [
            k(x.$slots, "clearable", {}, () => [
              zs
            ])
          ], 2)) : C("", !0)
        ], 2)
      ], 2),
      e.characterCounter ? (i(), p("div", {
        key: 1,
        class: m(r(n).counter)
      }, [
        k(x.$slots, "counter", {
          valueLength: $.value && $.value.length ? $.value.length : 0,
          maxlength: e.maxlength
        }, () => [
          z(T($.value && $.value.length || 0), 1),
          e.maxlength ? (i(), p("span", Vs, "/" + T(e.maxlength), 1)) : C("", !0)
        ])
      ], 2)) : C("", !0)
    ], 2));
  }
};
const Ws = { class: "flex justify-center items-center" }, js = ["onClick"], Hs = { class: "my-auto truncate flex items-center justify-center align-middle" }, Fs = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Gs = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
}, null, -1), qs = [
  Gs
], Us = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Xs = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
}, null, -1), Ys = [
  Xs
], Ks = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-auto h-auto"
}, Zs = /* @__PURE__ */ _("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
}, null, -1), Js = [
  Zs
], Qs = {
  key: 1,
  style: { position: "relative", top: "0" }
}, er = { class: "table-row-loading" }, tr = {
  colspan: "100%",
  class: "border-none p-0 relative"
}, or = ["onClick"], nr = { class: "flex items-center justify-center" }, sr = { key: 0 }, rr = { key: 0 }, lr = { key: 1 }, Dr = {
  __name: "Table",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantLoaderLinear: {
      type: String,
      default: null
    },
    variantCheckbox: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: !1
    },
    noDataText: {
      type: String,
      default: "No results found"
    },
    loadingText: {
      type: String,
      default: "Loading... Please wait"
    },
    emptyCellText: {
      type: String,
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    select: {
      type: Boolean,
      default: !1
    },
    selectRow: {
      type: Boolean,
      default: !1
    },
    selectOne: {
      type: Boolean,
      default: !1
    },
    selectBorder: {
      type: Boolean,
      default: !1
    },
    rowCursor: {
      type: Boolean,
      default: !1
    },
    selectionField: {
      type: String,
      default: null
    }
  },
  emits: ["sort", "click-row", "selection"],
  setup(t, { emit: o }) {
    const e = t, n = O("Table", e.variant, e.classes), s = G(null), l = Me({
      selection: [],
      selectAllOption: null,
      selectedAll: !1
    }), a = D(() => e.headers.filter(($) => !($ != null && $.hide))), u = D(() => e.loading ? e.loadingText : e.noDataText), c = ($, x, b = void 0) => Ps($, x, b), g = () => {
      l.selectedAll ? w() : h();
    }, w = () => {
      l.selection = [...Array(e.rows.length).keys()];
    }, h = () => {
      l.selection = [];
    }, f = ($, x, b) => {
      if (!e.selectRow || x === "selectRow") {
        let d = [...l.selection];
        if (l.selectAllOption = null, !d.includes($))
          e.selectOne === !0 ? d = [$] : d.push($);
        else {
          const S = d.indexOf($);
          S !== -1 && d.splice(S, 1);
        }
        l.selection = d;
      }
    }, v = ($, x, b) => {
      if (e.selectRow && f($, "selectRow"), e.select) {
        if (b.target.nodeName === "INPUT" || b.target.nodeName === "TD" && b.target.cellIndex === 0)
          return;
        o("click-row", x);
      } else
        o("click-row", x);
    }, y = ($, x) => {
      if ($.sorting === !0) {
        let b = null;
        $.sorted === "ASC" ? b = "DESC" : $.sorted === "DESC" ? b = "ASC" : $.sorted ? b = null : $.sortDefault ? b = $.sortDefault : b = "ASC";
        let d = [];
        e.headers.forEach((S) => {
          S.value === $.value ? d.push({
            ...S,
            sorted: b
          }) : d.push({
            ...S,
            sorted: null
          });
        }), o("sort", $, b, [...d]);
      }
    };
    return We(() => l.selection, ($) => {
      let x = [];
      l.selection.length ? ($.forEach((b) => {
        const d = e.rows[b];
        d && (e.selectionField && d[e.selectionField] ? x.push(d[e.selectionField]) : x.push(e.rows[b]));
      }), l.selection.length === e.rows.length ? l.selectedAll = !0 : l.selectedAll = !1) : l.selectedAll = !1, o("selection", x, [...$]);
    }), ($, x) => (i(), p("div", {
      class: m(r(n).wrapper)
    }, [
      _("table", {
        class: m(r(n).table)
      }, [
        !e.hideHeader && a.value.length ? (i(), p("thead", {
          key: 0,
          class: m(r(n).thead)
        }, [
          _("tr", {
            class: m(r(n).theadRow)
          }, [
            t.select ? (i(), p("th", {
              key: 0,
              scope: "col",
              class: m(r(n).theadColumnSelectAll)
            }, [
              k($.$slots, "select-all", {}, () => [
                _("div", Ws, [
                  e.selectOne ? C("", !0) : (i(), M(Lt, {
                    key: 0,
                    modelValue: l.selectedAll,
                    "onUpdate:modelValue": x[0] || (x[0] = (b) => l.selectedAll = b),
                    onChange: g,
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["modelValue", "disabled", "variantCheckbox"]))
                ])
              ])
            ], 2)) : C("", !0),
            (i(!0), p(E, null, Q(a.value, (b, d) => (i(), p("th", {
              scope: "col",
              key: d,
              class: m({
                [r(n).theadColumn]: !0,
                [r(n).theadColumnSorting]: b.sorting,
                [r(n).theadColumnSorted]: b.sorted,
                "!text-left": !b.align,
                "!text-right": b.align === "right",
                "!text-center": b.align === "center"
              }),
              style: te(`${b.minWidth ? `min-width: ${b.minWidth}` : ""} ${b.width ? `width: ${b.width};` : ""}`),
              onClick: (S) => y(b)
            }, [
              k($.$slots, `header.${b.value}`, { header: b }, () => [
                _("div", Hs, [
                  _("div", {
                    class: m(["grow", r(n).theadColumnLabel])
                  }, T(b.label), 3),
                  b.sorting ? (i(), p("div", {
                    key: 0,
                    class: m(["sort-icon", {
                      [r(n).theadColumnSortIcon]: !0,
                      [r(n).theadColumnSortIconSorted]: b.sorted
                    }])
                  }, [
                    b.sorted === "ASC" ? (i(), p("svg", Fs, qs)) : b.sorted === "DESC" ? (i(), p("svg", Us, Ys)) : (i(), p("svg", Ks, Js))
                  ], 2)) : C("", !0)
                ])
              ])
            ], 14, js))), 128))
          ], 2)
        ], 2)) : C("", !0),
        e.loading ? (i(), p("thead", Qs, [
          _("tr", er, [
            _("th", tr, [
              V(Vt, {
                variantLoaderLinear: e.variantLoaderLinear
              }, null, 8, ["variantLoaderLinear"])
            ])
          ])
        ])) : C("", !0),
        e.rows && e.rows.length ? (i(), p("tbody", {
          key: 2,
          ref_key: "tablebody",
          ref: s,
          class: m(r(n).tbody)
        }, [
          (i(!0), p(E, null, Q(e.rows, (b, d) => (i(), p("tr", {
            key: d,
            class: m([
              r(n).tbodyRow,
              b.class ? b.class : "",
              l.selection.includes(d) ? r(n).tbodyRowSelected : "",
              e.selectRow || e.rowCursor ? "cursor-pointer" : ""
            ]),
            onClick: (S) => v(d, $.item, S)
          }, [
            t.select ? (i(), p("td", {
              key: 0,
              class: m(["relative", r(n).tbodyColumnSelect])
            }, [
              k($.$slots, "column.select", {}, () => [
                e.selectBorder && l.selection.includes(d) ? (i(), p("div", {
                  key: 0,
                  class: m(["absolute inset-y-0 left-0 w-0.5", r(n).tbodyColumnSelectBorder])
                }, null, 2)) : C("", !0),
                _("div", nr, [
                  V(Lt, {
                    value: l.selection.includes(d),
                    onChange: (S) => f(d, "selectRow"),
                    onClick: x[1] || (x[1] = ie(() => {
                    }, ["stop"])),
                    disabled: e.loading,
                    variantCheckbox: e.variantCheckbox
                  }, null, 8, ["value", "onChange", "disabled", "variantCheckbox"])
                ])
              ])
            ], 2)) : C("", !0),
            (i(!0), p(E, null, Q(a.value, (S) => (i(), p("td", {
              key: S.value,
              class: m([
                r(n).tbodyColumn,
                S.align ? "" : "text-left",
                S.align === "right" ? "text-right" : "",
                S.align === "center" ? "text-center" : "",
                b.class ? b.class : "",
                S.class ? S.class : ""
              ]),
              style: te(`${S.minWidth ? `min-width: ${S.minWidth};` : ""} ${S.width ? `width: ${S.width};` : ""}`)
            }, [
              k($.$slots, `column.${S.value}`, {
                column: b,
                index: d
              }, () => [
                c(b, S.value) !== null && c(b, S.value) !== "" && c(b, S.value) ? (i(), p("span", sr, [
                  typeof S.formatValue == "function" ? (i(), p("span", rr, T(S.formatValue(c(b, S.value))), 1)) : (i(), p("span", lr, T(c(b, S.value)), 1))
                ])) : S.hasOwnProperty("empty") ? (i(), p("span", {
                  key: 1,
                  class: m(r(n).emptyCellText)
                }, T(S.empty), 3)) : e.emptyCellText ? (i(), p("span", {
                  key: 2,
                  class: m(r(n).emptyCellText)
                }, T(e.emptyCellText), 3)) : C("", !0)
              ])
            ], 6))), 128))
          ], 10, or))), 128))
        ], 2)) : (i(), p("tbody", {
          key: 3,
          ref_key: "tablebody",
          ref: s
        }, [
          _("tr", null, [
            _("td", {
              colspan: "100%",
              class: m(r(n).noData)
            }, [
              k($.$slots, "nodata", {}, () => [
                z(T(u.value), 1)
              ])
            ], 2)
          ])
        ], 512))
      ], 2)
    ], 2));
  }
};
const ar = ["data-backdrop-id"], ir = {
  __name: "Backdrop",
  props: {
    variant: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    id: {
      type: String,
      default: null
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    },
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t, n = O("Backdrop", e.variant, e.classes), s = () => {
      e.persist === !1 && o("close");
    };
    return (l, a) => (i(), M(_e, {
      name: "fade",
      appear: ""
    }, {
      default: I(() => [
        e.show ? (i(), p("div", {
          key: 0,
          onClick: s,
          "data-backdrop-id": e.id,
          class: m({
            backdrop: !0,
            [r(n).base]: !0,
            [r(n).theme]: !0,
            "cursor-pointer": !e.persist,
            fixed: !e.relative,
            absolute: e.relative
          })
        }, null, 10, ar)) : C("", !0)
      ]),
      _: 1
    }));
  }
}, oo = /* @__PURE__ */ ye(ir, [["__scopeId", "data-v-06f6fb7a"]]);
const dr = ["data-modal-id"], ur = { class: "h-full w-full" }, cr = {
  __name: "Modal",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantBackdrop: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    type: {
      type: String,
      default: "center"
    },
    show: {
      type: Boolean,
      default: !1
    },
    scroll: {
      type: Boolean,
      default: !1
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: null
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    },
    offsetDirection: {
      type: String,
      default: void 0
    },
    offset: {
      type: Number,
      default: 0
    },
    offsetDiv: {
      type: String,
      default: null
    }
  },
  emits: ["close", "end"],
  setup(t, { emit: o }) {
    const e = t;
    q();
    const n = O("Modal", e.variant, e.classes), s = Me({
      relativeOffsetPx: null,
      localShowing: !1,
      id: ge()
    }), l = () => {
      o("close");
    }, a = () => {
      if (s.relativeOffsetPx = null, e.offsetDiv) {
        let h = 0, f = document.getElementById(e.offsetDiv);
        f && (h = f.offsetWidth);
        let v = document.getElementById("app");
        if (v) {
          let y = +(v.offsetWidth - h);
          y && (s.relativeOffsetPx = y);
        }
      }
    }, u = D(() => e.offset || s.relativeOffsetPx ? `width: calc(100% - 2em ${e.offset || s.relativeOffsetPx ? `- ${e.offset || s.relativeOffsetPx}px` : ""});` : e.centerOverflow || e.type === "full" ? "width: calc(100%);" : "width: auto;"), c = D(() => {
      if (s.relativeOffsetPx)
        return e.type === "center" ? `left: calc(${s.relativeOffsetPx}px + 1em); right: 1em;` : "right: 1em;";
      if (e.offsetDirection && e.offset > 0)
        return `${e.offsetDirection}: ${e.offset}px; ${g(e.offsetDirection)}: 0;`;
    }), g = (h) => h === "right" ? "left" : "right";
    D(() => {
      let h = [];
      switch (e.type) {
        case "center":
          h = h.concat([
            "inset-0",
            "max-w-xl",
            "mx-auto",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
        case "full":
          h = h.concat([
            "inset-0",
            "h-screen",
            "flex",
            "items-center",
            "justify-center"
          ]);
          break;
      }
      return e.relative ? h = h.concat(["absolute"]) : !e.relative && e.scroll ? h = h.concat(["relative"]) : h = h.concat(["fixed"]), e.scrolling || (h = h.concat(["overflow-hidden"])), h;
    });
    const w = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return We(() => e.show, (h) => {
      h === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (w(), setTimeout(() => {
        s.localShowing = !1, o("end");
      }, 300));
    }), It(() => {
      a();
    }), it(() => {
      w();
    }), (h, f) => je((i(), p("div", {
      class: m({
        [r(n).base]: !0,
        "overflow-y-scroll": e.scroll,
        "p-4": e.type === "full"
      })
    }, [
      _("div", {
        class: m({
          [r(n).wrapper]: !0,
          "min-h-full": e.type !== "full",
          "h-full": e.type === "full"
        })
      }, [
        V(_e, {
          name: "pop",
          appear: ""
        }, {
          default: I(() => [
            e.show ? (i(), p("div", {
              key: 0,
              "data-modal-id": s.id,
              class: m({
                [r(n).content]: !0,
                [r(n).contentTheme]: !0,
                containerClasses: !0,
                "h-screen": e.type === "full"
              }),
              style: te(`${e.maxWidth ? `max-width:${e.maxWidth}px;` : ""} min-width: 300px; ${e.scroll ? "margin-top: 1em; margin-bottom: 1em;" : `max-height: calc(100vh - ${e.type === "full" ? "2em" : "0em"});`} ${u.value} ${c.value};`)
            }, [
              _("div", ur, [
                k(h.$slots, "default", {}, void 0, !0)
              ])
            ], 14, dr)) : C("", !0)
          ]),
          _: 3
        })
      ], 2),
      V(oo, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2)), [
      [He, s.localShowing]
    ]);
  }
}, Nr = /* @__PURE__ */ ye(cr, [["__scopeId", "data-v-ff680da5"]]);
const pr = {
  __name: "Drawer",
  props: {
    variant: {
      type: String,
      default: null
    },
    variantBackdrop: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    position: {
      type: String,
      default: "right"
    },
    show: {
      type: Boolean,
      default: !1
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    persist: {
      type: Boolean,
      default: !1
    },
    relative: {
      type: Boolean,
      default: !1
    },
    edges: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(t, { emit: o }) {
    const e = t;
    q();
    const n = O("Drawer", e.variant, e.classes), s = Me({
      localShowing: !1,
      id: ge()
    }), l = () => {
      o("close");
    }, a = D(() => {
      let c = [
        "block",
        "inset-y-0",
        "w-full",
        "sm:max-w-xl"
      ];
      switch (e.position) {
        case "right":
          c = c.concat(["right-0"]);
          break;
        case "left":
          c = c.concat(["left-0"]);
          break;
      }
      return e.scrolling ? c = c.concat(["overflow-y-auto"]) : c = c.concat(["overflow-y-hidden"]), c;
    }), u = () => {
      document.querySelectorAll(".backdrop").length === 1 && (document.body.style.overflow = "auto");
    };
    return We(() => e.show, (c) => {
      c === !0 ? (s.localShowing = !0, document.body.style.overflow = "hidden") : (u(), s.localShowing = !1);
    }), it(() => {
      u();
    }), (c, g) => (i(), p("div", {
      class: m([r(n).base])
    }, [
      V(_e, {
        name: `slide-${t.position}`,
        appear: ""
      }, {
        default: I(() => [
          s.localShowing ? (i(), p("div", {
            key: 0,
            class: m([a.value, r(n).content, r(n).contentTheme, "p-4"]),
            style: te(`${e.maxWidth ? `max-width: ${e.maxWidth}px;` : ""} min-width: 300px; height: 100%;`)
          }, [
            k(c.$slots, "default", {}, void 0, !0)
          ], 6)) : C("", !0)
        ]),
        _: 3
      }, 8, ["name"]),
      V(oo, {
        show: e.show,
        persist: e.persist,
        relative: e.relative,
        variant: e.variantBackdrop,
        id: s.id,
        onClose: l
      }, null, 8, ["show", "persist", "relative", "variant", "id"])
    ], 2));
  }
}, Rr = /* @__PURE__ */ ye(pr, [["__scopeId", "data-v-89b4dcdc"]]);
export {
  vr as Avatar,
  br as AvatarGroup,
  oo as Backdrop,
  wr as Badge,
  $e as Button,
  _r as ButtonGroup,
  xr as Card,
  $r as Carousel,
  Lt as Checkbox,
  mr as Container,
  Rr as Drawer,
  Sr as Dropdown,
  gr as Expandable,
  yr as ExpandableGroup,
  Ir as InputArea,
  Lr as InputText,
  Le as Label,
  kr as List,
  Tr as ListItem,
  Vt as LoaderLinear,
  Br as LoaderProgress,
  $o as LoaderSpinner,
  Nr as Modal,
  Cr as Pagination,
  Pr as Tab,
  Dr as Table,
  Ar as Tabs,
  Or as Toggle,
  ss as Tooltip,
  hr as setVariantClasses,
  O as useVariantClasses
};