!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('react'),
        require('classnames/bind'),
        require('prop-types'),
        require('axios'),
        require('classnames'),
        require('lodash')
      ))
    : 'function' == typeof define && define.amd
      ? define(['react', 'classnames/bind', 'prop-types', 'axios', 'classnames', 'lodash'], t)
      : 'object' == typeof exports
        ? (exports.Auth0WebHeader = t(
            require('react'),
            require('classnames/bind'),
            require('prop-types'),
            require('axios'),
            require('classnames'),
            require('lodash')
          ))
        : (e.Auth0WebHeader = t(
            e.react,
            e['classnames/bind'],
            e['prop-types'],
            e.axios,
            e.classnames,
            e.lodash
          ));
})(this, function(e, t, n, a, r, o) {
  return (function(e) {
    function t(a) {
      if (n[a]) return n[a].exports;
      var r = (n[a] = { i: a, l: !1, exports: {} });
      return e[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.i = function(e) {
      return e;
    }), (t.d = function(e, n, a) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: a });
    }), (t.n = function(e) {
      var n = e && e.__esModule
        ? function() {
            return e.default;
          }
        : function() {
            return e;
          };
      return t.d(n, 'a', n), n;
    }), (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }), (t.p = ''), t((t.s = 63));
  })([
    function(e, t) {
      e.exports = require('react');
    },
    function(e, t) {
      e.exports = require('classnames/bind');
    },
    function(e, t) {
      e.exports = require('prop-types');
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(17),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        var n = t || u.default,
          a = o(n, e);
        return new c.default(a).select();
      }
      function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l();
        return e.filter(function(e) {
          return !e.include || new RegExp(e.include).test(t);
        });
      }
      function l() {
        return 'undefined' != typeof window && window.location && window.location.pathname
          ? window.location.pathname
          : null;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
      var i = n(57),
        u = a(i),
        s = n(26),
        c = a(s);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '16px', width: '16px', version: '1.1', viewBox: '0 0 16 16' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-573.000000, -612.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(0.000000, 363.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(259.000000, 18.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(158.000000, 0.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M14.4288892,24.7873118 L9.98923099,24.7873118 C9.37628068,24.7873118 8.87931643,24.2903182 8.87931643,23.6770541 L8.87931643,19.2371334 C8.87931643,18.6244244 9.37628068,18.1271532 9.98923099,18.1271532 L14.4288892,18.1271532 C15.042117,18.1271532 15.5388038,18.6244244 15.5388038,19.2371334 L15.5388038,23.6770541 C15.5388038,24.2903182 15.042117,24.7873118 14.4288892,24.7873118 L14.4288892,24.7873118 Z M14.4288892,19.7921235 C14.4288892,19.485769 14.1802683,19.2371334 13.8742094,19.2371334 L10.5444657,19.2371334 C10.2378518,19.2371334 9.98923099,19.485769 9.98923099,19.7921235 L9.98923099,23.122619 C9.98923099,23.4289735 10.2378518,23.6770541 10.5444657,23.6770541 L13.8742094,23.6770541 C14.1805458,23.6770541 14.4288892,23.4289735 14.4288892,23.122619 L14.4288892,19.7921235 L14.4288892,19.7921235 Z M14.4288892,15.9074704 L9.98923099,15.9074704 C9.37628068,15.9074704 8.87931643,15.4104768 8.87931643,14.7980452 L8.87931643,10.3581245 C8.87931643,9.74458295 9.37628068,9.24731183 9.98923099,9.24731183 L14.4288892,9.24731183 C15.042117,9.24731183 15.5388038,9.74458295 15.5388038,10.3581245 L15.5388038,14.7980452 C15.5388038,15.4104768 15.042117,15.9074704 14.4288892,15.9074704 L14.4288892,15.9074704 Z M14.4288892,10.9120046 C14.4288892,10.6056501 14.1802683,10.3581245 13.8742094,10.3581245 L10.5444657,10.3581245 C10.2378518,10.3581245 9.98923099,10.6059276 9.98923099,10.9120046 L9.98923099,14.2427776 C9.98923099,14.5488546 10.2378518,14.7980452 10.5444657,14.7980452 L13.8742094,14.7980452 C14.1805458,14.7980452 14.4288892,14.5488546 14.4288892,14.2427776 L14.4288892,10.9120046 L14.4288892,10.9120046 Z M5.54985025,24.7873118 L1.10991455,24.7873118 C0.496964242,24.7873118 0,24.2903182 0,23.6770541 L0,19.2371334 C0,18.6244244 0.496964242,18.1271532 1.10991455,18.1271532 L5.54985025,18.1271532 C6.16280056,18.1271532 6.65948733,18.6244244 6.65948733,19.2371334 L6.65948733,23.6770541 C6.65948733,24.2903182 6.16280056,24.7873118 5.54985025,24.7873118 L5.54985025,24.7873118 Z M5.54985025,19.7921235 C5.54985025,19.485769 5.30122939,19.2371334 4.99489297,19.2371334 L1.66487183,19.2371334 C1.35853541,19.2371334 1.10991455,19.485769 1.10991455,19.7921235 L1.10991455,23.122619 C1.10991455,23.4289735 1.35853541,23.6770541 1.66487183,23.6770541 L4.99489297,23.6770541 C5.30122939,23.6770541 5.54985025,23.4289735 5.54985025,23.122619 L5.54985025,19.7921235 L5.54985025,19.7921235 Z M5.54985025,15.9074704 L1.10991455,15.9074704 C0.496964242,15.9074704 0,15.4104768 0,14.7980452 L0,10.3581245 C0,9.74458295 0.496964242,9.24731183 1.10991455,9.24731183 L5.54985025,9.24731183 C6.16280056,9.24731183 6.65948733,9.74458295 6.65948733,10.3581245 L6.65948733,14.7980452 C6.65948733,15.4104768 6.16280056,15.9074704 5.54985025,15.9074704 L5.54985025,15.9074704 Z M5.54985025,10.9120046 C5.54985025,10.6056501 5.30122939,10.3581245 4.99489297,10.3581245 L1.66487183,10.3581245 C1.35853541,10.3581245 1.10991455,10.6059276 1.10991455,10.9120046 L1.10991455,14.2427776 C1.10991455,14.5488546 1.35853541,14.7980452 1.66487183,14.7980452 L4.99489297,14.7980452 C5.30122939,14.7980452 5.54985025,14.5488546 5.54985025,14.2427776 L5.54985025,10.9120046 L5.54985025,10.9120046 Z'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getFeaturedVariant = void 0);
      var r = n(25),
        o = a(r),
        l = n(4),
        i = a(l);
      (t.default = o.default), (t.getFeaturedVariant = i.default);
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(12),
        h = a(p),
        C = n(10),
        g = a(C),
        L = n(3),
        b = a(L),
        E = n(47),
        y = a(E),
        v = m.default.bind(y.default),
        _ = (function(e) {
          function t() {
            var e, n, a, l;
            r(this, t);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return (n = a = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
            )), (a.state = { highlight: {} }), (a.setDefaultHighlight = function() {
              var e = a.props.data,
                t = e.childrens.filter(function(e) {
                  return !!e.default;
                });
              t.length && a.setState({ highlight: t[0].default });
            }), (a.highlightHandler = function(e) {
              e && a.setState({ highlight: e });
            }), (l = n), o(a, l);
          }
          return l(t, e), i(t, [
            {
              key: 'componentWillMount',
              value: function() {
                this.setDefaultHighlight();
              }
            },
            {
              key: 'componentWillReceiveProps',
              value: function() {
                this.setDefaultHighlight();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.data,
                  a = t.closeDropdowns,
                  r = t.open;
                return s.default.createElement(
                  'div',
                  {
                    className: v('dropdown', n.dropdownClass, {
                      'is-open': r,
                      twoBlock: n.twoBlockLayout
                    }),
                    'aria-hidden': r ? 'false' : 'true'
                  },
                  n.childrens.map(function(t) {
                    switch (t.componentType) {
                      case 'list':
                        return s.default.createElement(h.default, {
                          key: t.key,
                          data: t,
                          parentClass: n.dropdownClass,
                          highlightHandler: e.highlightHandler,
                          closeDropdowns: a
                        });
                      case 'highlight':
                        return s.default.createElement(g.default, {
                          key: t.key,
                          data: e.state.highlight,
                          parentClass: n.dropdownClass,
                          closeDropdowns: a
                        });
                      default:
                        return null;
                    }
                  }),
                  n.footerLinks
                    ? s.default.createElement(
                        'footer',
                        { className: v('footer-list', { 'footer-highlight': n.footerHighlight }) },
                        n.footerLinks.map(function(e) {
                          return s.default.createElement(b.default, {
                            key: e.id,
                            footer: e,
                            closeDropdowns: a
                          });
                        })
                      )
                    : null
                );
              }
            }
          ]), t;
        })(u.Component);
      (_.propTypes = {
        data: d.default.object,
        closeDropdowns: d.default.func,
        open: d.default.bool
      }), (_.defaultProps = { data: {} }), (t.default = _);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(7),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(0),
        o = a(r),
        l = n(2),
        i = a(l),
        u = n(1),
        s = a(u),
        c = n(48),
        d = a(c),
        f = s.default.bind(d.default),
        m = function(e) {
          var t = e.data,
            n = e.parentClass,
            a = e.closeDropdowns;
          return o.default.createElement(
            'div',
            {
              className: f({ highlight: 'moreDropdown' !== n, moreHighlight: 'moreDropdown' === n })
            },
            t.componentTitle
              ? o.default.createElement('h4', {
                  className: f('section-title'),
                  dangerouslySetInnerHTML: { __html: t.componentTitle }
                })
              : null,
            o.default.createElement(
              'a',
              {
                href: t.link,
                onClick: a,
                className: f('content'),
                rel: t.external ? 'external' : null
              },
              o.default.createElement('img', { src: t.thumbnail, alt: t.title }),
              o.default.createElement('h5', { className: f('title') }, t.title),
              t.excerpt ? o.default.createElement('p', { className: f('text') }, t.excerpt) : null,
              t.date ? o.default.createElement('span', { className: f('time') }, t.date) : null
            ),
            o.default.createElement(
              'div',
              { className: f('content') },
              (t.morelinks || []).map(function(e, t) {
                var n = e.href,
                  r = e.text,
                  l = e.external;
                return o.default.createElement(
                  'a',
                  { href: n, className: f('link'), onClick: a, key: t, rel: l ? 'external' : null },
                  r
                );
              })
            )
          );
        };
      (m.propTypes = {
        data: i.default.object,
        parentClass: i.default.string,
        closeDropdowns: i.default.func
      }), (t.default = m);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(9),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(0),
        o = a(r),
        l = n(2),
        i = a(l),
        u = n(1),
        s = a(u),
        c = n(14),
        d = a(c),
        f = n(3),
        m = a(f),
        p = n(49),
        h = a(p),
        C = s.default.bind(h.default),
        g = function(e) {
          var t = e.data,
            n = e.highlightHandler,
            a = e.parentClass,
            r = e.closeDropdowns;
          return o.default.createElement(
            'div',
            {
              className: C('dropdownList', {
                moreDropdownList: 'moreDropdown' === a,
                stackedList: t.stackedList,
                twoColList: t.twoColLayout,
                twoColListBig: t.twoColLayoutBig,
                highlight: t.highlight
              })
            },
            t.title
              ? o.default.createElement(
                  'header',
                  { className: C('header-title') },
                  t.titleHref
                    ? o.default.createElement(
                        'a',
                        {
                          className: C('section-title', { hasArrow: t.titleHref }),
                          href: t.titleHref
                        },
                        t.title
                      )
                    : o.default.createElement('h4', { className: C('section-title') }, t.title),
                  t.description
                    ? o.default.createElement('span', {
                        className: C('section-description'),
                        dangerouslySetInnerHTML: { __html: t.description }
                      })
                    : null
                )
              : null,
            t.subItems
              ? o.default.createElement(
                  'div',
                  { className: C('multi-list') },
                  t.subItems.map(function(e) {
                    return o.default.createElement(
                      'ul',
                      { role: 'menubar', key: e.titleList },
                      e.titleList
                        ? o.default.createElement(
                            'span',
                            { className: C('title-list') },
                            e.titleList
                          )
                        : null,
                      (e.items || []).map(function(t) {
                        return o.default.createElement(d.default, {
                          key: t.id,
                          item: t,
                          highlightHandler: n,
                          hasArrow: e.hasArrows,
                          parentClass: a,
                          closeDropdowns: r
                        });
                      })
                    );
                  })
                )
              : null,
            t.items
              ? o.default.createElement(
                  'ul',
                  { role: 'menubar' },
                  (t.items || []).map(function(e) {
                    return o.default.createElement(d.default, {
                      key: e.id,
                      item: e,
                      highlightHandler: n,
                      hasArrow: t.hasArrows,
                      parentClass: a,
                      closeDropdowns: r
                    });
                  })
                )
              : null,
            t.footerLinks
              ? o.default.createElement(
                  'footer',
                  { className: C('footer-list') },
                  t.footerLinks.map(function(e) {
                    return o.default.createElement(m.default, {
                      key: e.id,
                      footer: e,
                      closeDropdowns: r
                    });
                  })
                )
              : null
          );
        };
      (g.propTypes = {
        data: i.default.object,
        highlightHandler: i.default.func,
        parentClass: i.default.string,
        closeDropdowns: i.default.func
      }), (t.default = g);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(11),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(50),
        h = a(p),
        C = n(5),
        g = a(C),
        L = n(35),
        b = a(L),
        E = n(29),
        y = a(E),
        v = n(45),
        _ = a(v),
        w = n(32),
        k = a(w),
        M = n(43),
        x = a(M),
        O = n(42),
        j = a(O),
        B = n(44),
        F = a(B),
        P = n(34),
        D = a(P),
        T = n(41),
        N = a(T),
        S = n(31),
        I = a(S),
        H = n(36),
        A = a(H),
        W = n(46),
        Z = a(W),
        q = n(37),
        R = a(q),
        z = n(38),
        U = a(z),
        V = n(40),
        G = a(V),
        Q = m.default.bind(h.default),
        K = (function(e) {
          function t() {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            );
          }
          return l(t, e), i(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this.props.item;
                if (e.highlight && e.highlight.thumbnail) {
                  new Image().src = e.highlight.thumbnail;
                }
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.hasArrow,
                  n = e.parentClass,
                  a = e.highlightHandler,
                  r = e.item,
                  o = e.closeDropdowns,
                  l = {
                    webtask: s.default.createElement(N.default, null),
                    guardian: s.default.createElement(D.default, null),
                    ciam: s.default.createElement(F.default, null),
                    b2b: s.default.createElement(j.default, null),
                    b2e: s.default.createElement(x.default, null),
                    logoDefault: s.default.createElement(k.default, null),
                    javascript: s.default.createElement(b.default, null),
                    ios: s.default.createElement(_.default, null),
                    android: s.default.createElement(y.default, null),
                    quickstarts: s.default.createElement(g.default, null),
                    breached: s.default.createElement(I.default, null),
                    lock: s.default.createElement(A.default, null),
                    mtm: s.default.createElement(Z.default, null),
                    multifactor: s.default.createElement(R.default, null),
                    passwordless: s.default.createElement(U.default, null),
                    userManagement: s.default.createElement(G.default, null)
                  },
                  i = r.external ? 'external' : null;
                return s.default.createElement(
                  'li',
                  {
                    className: Q({ item: !t, arrowItem: t, moreItem: 'moreDropdown' === n }),
                    onMouseEnter: function() {
                      a(r.highlight);
                    },
                    onFocus: function() {
                      a(r.highlight);
                    },
                    role: 'menuitem'
                  },
                  s.default.createElement(
                    'a',
                    { className: Q(r.customClass || ''), href: r.href, onClick: o, rel: i },
                    r.icon
                      ? s.default.createElement('figure', { className: Q('icon') }, l[r.icon])
                      : null,
                    s.default.createElement(
                      'span',
                      { className: Q('text') },
                      r.name,
                      r.prefix
                        ? s.default.createElement('span', { className: Q('itemPrefix') }, r.prefix)
                        : null
                    ),
                    r.description
                      ? s.default.createElement(
                          'p',
                          { className: Q('item-description') },
                          r.description
                        )
                      : null
                  )
                );
              }
            }
          ]), t;
        })(u.Component);
      (K.propTypes = {
        item: d.default.object,
        highlightHandler: d.default.func,
        hasArrow: d.default.bool,
        parentClass: d.default.string,
        closeDropdowns: d.default.func
      }), (t.default = K);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(13),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(51),
        h = a(p),
        C = n(4),
        g = a(C),
        L = m.default.bind(h.default),
        b = (0, g.default)(),
        E = (function(e) {
          function t() {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            );
          }
          return l(t, e), i(t, [
            {
              key: 'componentWillMount',
              value: function() {
                b = (0, g.default)();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.iconColor,
                  n = e.link,
                  a = e.title,
                  r = e.description,
                  o = e.cta,
                  l = e.theme,
                  i = e.dropdownOpen,
                  u = e.notificationOpen,
                  c = e.closeNotificationHandler;
                return s.default.createElement(
                  'div',
                  {
                    className: L(
                      'featured',
                      ['theme-' + l],
                      { dropdownOpen: i },
                      { notificationOpen: u }
                    )
                  },
                  s.default.createElement(
                    'div',
                    { className: L('featured-content') },
                    s.default.createElement(
                      'a',
                      { href: n || b.link, rel: 'external' },
                      s.default.createElement('span', {
                        className: L('featured-icon'),
                        style: { backgroundColor: t || b.iconColor }
                      }),
                      s.default.createElement(
                        'span',
                        { className: L('featured-title'), style: { color: t || b.iconColor } },
                        a || b.title
                      ),
                      s.default.createElement(
                        'span',
                        { className: L('featured-description') },
                        r || b.description
                      ),
                      s.default.createElement('span', { className: L('featured-more') }, o || b.cta)
                    ),
                    s.default.createElement(
                      'button',
                      { type: 'button', className: L('close-notification'), onClick: c },
                      s.default.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Close featured banner'
                      )
                    )
                  )
                );
              }
            }
          ]), t;
        })(u.Component);
      (E.propTypes = {
        iconColor: d.default.string,
        link: d.default.string,
        title: d.default.string,
        description: d.default.string,
        cta: d.default.string,
        theme: d.default.string,
        dropdownOpen: d.default.bool,
        notificationOpen: d.default.bool,
        closeNotificationHandler: d.default.func
      }), (E.defaultProps = {
        iconColor: null,
        link: null,
        title: null,
        description: null,
        cta: null
      }), (t.default = E);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(15),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(52),
        h = a(p),
        C = n(39),
        g = a(C),
        L = n(5),
        b = a(L),
        E = n(30),
        y = a(E),
        v = n(33),
        _ = a(v),
        w = m.default.bind(h.default),
        k = (function(e) {
          function t() {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            );
          }
          return l(t, e), i(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.footer,
                  n = e.closeDropdowns,
                  a = {
                    pricing: s.default.createElement(g.default, null),
                    products: s.default.createElement(b.default, null),
                    blog: s.default.createElement(y.default, null),
                    extend: s.default.createElement(_.default, null)
                  },
                  r = t.external ? 'external' : null;
                return s.default.createElement(
                  'a',
                  { className: w('footer-link'), href: t.href, onClick: n, rel: r },
                  t.icon
                    ? s.default.createElement('span', { className: w('icon') }, a[t.icon])
                    : null,
                  s.default.createElement('span', {
                    className: w('text'),
                    dangerouslySetInnerHTML: { __html: t.name }
                  })
                );
              }
            }
          ]), t;
        })(u.Component);
      (k.propTypes = { footer: d.default.object, closeDropdowns: d.default.func }), (t.default = k);
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(53),
        h = a(p),
        C = m.default.bind(h.default),
        g = (function(e) {
          function t() {
            var e, n, a, l;
            r(this, t);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return (n = a = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
            )), (a.clickHandler = function() {
              return a.props.onClick(), !0;
            }), (l = n), o(a, l);
          }
          return l(t, e), i(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.mobileLinks,
                  t = e.external ? 'external' : null;
                return s.default.createElement(
                  'li',
                  null,
                  s.default.createElement(
                    'a',
                    {
                      className: C('mobile-link'),
                      onClick: this.clickHandler,
                      href: e.href,
                      rel: t
                    },
                    e.name
                  )
                );
              }
            }
          ]), t;
        })(u.Component);
      (g.propTypes = {
        mobileLinks: d.default.object,
        onClick: d.default.func.isRequired
      }), (t.default = g);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(18),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(0),
        o = a(r),
        l = n(2),
        i = a(l),
        u = n(1),
        s = a(u),
        c = n(54),
        d = a(c),
        f = s.default.bind(d.default),
        m = function(e) {
          var t = e.toggleDropdownHandler,
            n = e.dropdownOpen,
            a = e.theme,
            r = e.closeHeaderDropdown;
          return o.default.createElement(
            'div',
            { className: f('head', ['theme-' + a], { dropdownOpen: n }) },
            o.default.createElement(
              'button',
              {
                type: 'button',
                className: f('toggleButton', 'collapsed', { closeButton: n }),
                onClick: t
              },
              o.default.createElement('span', { className: 'sr-only' }, 'Toggle navigation'),
              o.default.createElement('span', { className: f('iconBar') }),
              o.default.createElement('span', { className: f('iconBar') }),
              o.default.createElement('span', { className: f('iconBar') }),
              o.default.createElement('span', { className: f('iconBar') })
            ),
            o.default.createElement(
              'h1',
              { className: f('brand') },
              o.default.createElement(
                'a',
                { href: '/', rel: 'home', className: f('logo'), onClick: r },
                o.default.createElement('span', null, 'Auth0')
              )
            )
          );
        };
      (m.propTypes = {
        toggleDropdownHandler: i.default.func,
        dropdownOpen: i.default.bool,
        theme: i.default.string,
        closeHeaderDropdown: i.default.func
      }), (t.default = m);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(20),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(8),
        h = a(p),
        C = n(55),
        g = a(C),
        L = m.default.bind(g.default),
        b = (function(e) {
          function t() {
            var e, n, a, l;
            r(this, t);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return (n = a = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
            )), (a.state = { openDropdown: !1 }), (a.handleDropdown = function(e) {
              var t = a.state.openDropdown,
                n = a.props.mobile,
                r = n,
                o = ['mouseenter', 'focus'].indexOf(e.type) > -1;
              o === t || r || a.setState({ openDropdown: o });
            }), (a.closeItemDropdown = function() {
              var e = !a.props.mobile,
                t = a.state.openDropdown;
              e && t && a.setState({ openDropdown: !1 });
            }), (a.closeDropdowns = function() {
              a.closeItemDropdown(), a.props.closeHeaderDropdown();
            }), (l = n), o(a, l);
          }
          return l(t, e), i(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.item,
                  n = e.theme,
                  a = e.simpleList,
                  r = e.mobile,
                  o = s.default.createElement(E, {
                    name: t.name,
                    childrens: t.childrens,
                    theme: n
                  }),
                  l = (r ? t.mobileHref : null) || t.href,
                  i = t.external ? 'external' : null;
                return s.default.createElement(
                  'li',
                  {
                    className: L('item', ['item-' + t.id], ['theme-' + n], {
                      'simple-list': a,
                      'is-dropdown-open': this.state.openDropdown
                    }),
                    onMouseEnter: this.handleDropdown,
                    onFocus: this.handleDropdown,
                    onMouseLeave: this.handleDropdown,
                    onBlur: this.handleDropdown,
                    role: 'menuitem',
                    'aria-haspopup': 'true'
                  },
                  l
                    ? s.default.createElement(
                        'a',
                        { href: l, onClick: this.closeDropdowns, className: L('link'), rel: i },
                        o
                      )
                    : s.default.createElement('span', { tabIndex: '0', className: L('link') }, o),
                  t.childrens
                    ? s.default.createElement(h.default, {
                        data: t,
                        closeDropdowns: this.closeDropdowns,
                        open: this.state.openDropdown
                      })
                    : null
                );
              }
            }
          ]), t;
        })(u.Component);
      (b.propTypes = {
        item: d.default.shape({
          id: d.default.string,
          name: d.default.string,
          mobileHref: d.default.string,
          dropdownClass: d.default.string,
          simpleList: d.default.bool,
          children: d.default.arrayOf(d.default.object)
        }),
        theme: d.default.string,
        simpleList: d.default.bool,
        closeHeaderDropdown: d.default.func,
        mobile: d.default.bool
      }), (t.default = b);
      var E = function(e) {
        var t = e.name,
          n = e.childrens,
          a = e.theme;
        return s.default.createElement(
          'span',
          null,
          s.default.createElement('span', { className: L('text') }, t),
          n
            ? s.default.createElement(
                'svg',
                { width: '8', height: '4', viewBox: '62 7 10 6', className: L('item-caret') },
                s.default.createElement('path', {
                  d:
                    'M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z',
                  fill: 'dark' === a ? '#fff' : '#000'
                })
              )
            : null,
          n ? s.default.createElement('span', { className: L('dropdown-caret') }) : null
        );
      };
      E.propTypes = { name: d.default.string, childrens: d.default.array, theme: d.default.string };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(22),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a &&
              (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }
        return function(t, n, a) {
          return n && e(t.prototype, n), a && e(t, a), t;
        };
      })(),
        u = n(0),
        s = a(u),
        c = n(2),
        d = a(c),
        f = n(1),
        m = a(f),
        p = n(61),
        h = a(p),
        C = n(60),
        g = a(C),
        L = n(21),
        b = a(L),
        E = n(16),
        y = a(E),
        v = n(23),
        _ = a(v),
        w = n(19),
        k = a(w),
        M = n(58),
        x = a(M),
        O = n(59),
        j = a(O),
        B = n(56),
        F = a(B),
        P = n(28),
        D = a(P),
        T = m.default.bind(F.default),
        N = 'https://auth0-marketing.run.webtask.io/last-blog-post',
        S = (function(e) {
          function t() {
            var e, n, a, l;
            r(this, t);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return (n = a = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
            )), (a.state = {
              navbarDropdownIsOpen: !1,
              notificationIsOpen: !0,
              mobileState: !0,
              menuItems: x.default,
              menuItemsMobile: j.default
            }), (a.setHeightDropdown = function() {
              var e = a.state.mobileState ? window.innerHeight - 70 + 'px' : '';
              a.dropdownContent.style.height = e;
            }), (a.updateBlogPost = function() {
              g.default
                .get(N)
                .then(function(e) {
                  return [a.state.menuItems, e.data];
                })
                .then(D.default)
                .then(function(e) {
                  a.setState({ menuItems: e });
                })
                .catch(function(e) {
                  return console.info('Auth0WebHeader', e);
                });
            }), (a.handleResize = function() {
              var e = window.innerWidth < a.props.breakpoint;
              a.setState({ mobileState: e }, function() {
                a.addOverflowBody(), a.setHeightDropdown();
              });
            }), (a.navbarDropdownHandler = function() {
              a.setState(
                { navbarDropdownIsOpen: !a.state.navbarDropdownIsOpen },
                a.addOverflowBody
              );
            }), (a.closeDropdownOnButtonClick = function(e) {
              return function(t) {
                var n = a.state.mobileState,
                  r = a.state.navbarDropdownIsOpen;
                e && e(t), n && r && a.navbarDropdownHandler();
              };
            }), (a.handleKeyDown = function(e) {
              9 !== e.keyCode || a.state.focusable || a.setState({ focusable: !0 });
            }), (a.notificationHandler = function() {
              a.setState({ notificationIsOpen: !a.state.notificationIsOpen });
            }), (l = n), o(a, l);
          }
          return l(t, e), i(
            t,
            [
              {
                key: 'componentDidMount',
                value: function() {
                  this.handleResize(), window.addEventListener(
                    'resize',
                    this.handleResize
                  ), this.updateBlogPost();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('resize', this.handleResize);
                }
              },
              {
                key: 'addOverflowBody',
                value: function() {
                  var e = this.state,
                    t = e.navbarDropdownIsOpen,
                    n = e.mobileState;
                  t && n
                    ? document.body.classList.add(T('overflow'))
                    : document.body.classList.remove(T('overflow'));
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    n = this.props,
                    a = n.className,
                    r = n.children,
                    o = n.theme,
                    l = n.featuredEnable,
                    i = n.featuredIconColor,
                    u = n.featuredLink,
                    c = n.featuredTitle,
                    d = n.featuredDescription,
                    f = n.featuredCTA,
                    m = n.signupButtonEnable,
                    p = n.signupButtonLink,
                    C = n.signupButtonOnClick,
                    g = n.signupButtonText,
                    L = n.talkToSalesButtonEnable,
                    E = n.talkToSalesButtonLink,
                    v = n.talkToSalesButtonOnClick,
                    w = n.talkToSalesButtonText,
                    M = n.loginButtonEnable,
                    x = n.loginButtonLink,
                    O = n.loginButtonOnClick,
                    j = n.loginButtonText,
                    B = n.authElementEnable,
                    F = n.authElement,
                    P = this.state,
                    D = P.navbarDropdownIsOpen,
                    N = P.mobileState,
                    S = P.focusable,
                    I = P.menuItems,
                    H = P.menuItemsMobile,
                    A = P.notificationIsOpen,
                    W = t.renderButton(
                      p,
                      this.closeDropdownOnButtonClick(C),
                      g,
                      'btn btn-success btn-sm ' + T('signup-button')
                    ),
                    Z = t.renderButton(
                      E,
                      this.closeDropdownOnButtonClick(v),
                      w,
                      'btn btn-transparent btn-sm talk-button'
                    ),
                    q = t.renderButton(
                      x,
                      this.closeDropdownOnButtonClick(O),
                      j,
                      T('login-button', { 'login-button--dark': 'dark' === o })
                    ),
                    R = H.map(function(t, n) {
                      return s.default.createElement(k.default, {
                        onClick: e.navbarDropdownHandler,
                        key: t.id,
                        mobileLinks: t
                      });
                    }),
                    z = I.map(function(t, n) {
                      return s.default.createElement(_.default, {
                        key: n + t.id,
                        item: t,
                        theme: o,
                        simpleList: t.simpleList,
                        closeHeaderDropdown: e.closeDropdownOnButtonClick(),
                        mobile: N
                      });
                    });
                  return s.default.createElement(
                    'header',
                    { className: T('header-main', { 'is-notification-open': A }) },
                    l &&
                      s.default.createElement(y.default, {
                        iconColor: i,
                        link: u,
                        title: c,
                        description: d,
                        cta: f,
                        dropdownOpen: D,
                        notificationOpen: A,
                        theme: o,
                        closeNotificationHandler: this.notificationHandler
                      }),
                    s.default.createElement(
                      'div',
                      {
                        className: T('header', ['theme-' + o], a, {
                          'is-dropdown-open': D,
                          focusable: S
                        }),
                        onKeyDown: this.handleKeyDown
                      },
                      s.default.createElement(
                        'div',
                        { className: T('menu', { 'is-dropdown-open': D }) },
                        s.default.createElement(
                          'div',
                          { className: 'container' },
                          s.default.createElement(b.default, {
                            toggleDropdownHandler: this.navbarDropdownHandler,
                            dropdownOpen: D,
                            theme: o,
                            closeHeaderDropdown: this.closeDropdownOnButtonClick()
                          }),
                          s.default.createElement(
                            'div',
                            {
                              className: T('collapse', { 'is-dropdown-open': D }),
                              ref: function(t) {
                                e.dropdownContent = t;
                              }
                            },
                            s.default.createElement(
                              'nav',
                              {
                                className: T('main-navigation'),
                                role: 'navigation',
                                'aria-label': 'Main menu'
                              },
                              s.default.createElement(
                                'ul',
                                { className: T('navigation'), role: 'menubar' },
                                r || z,
                                s.default.createElement(
                                  'li',
                                  { className: (0, h.default)({ 'theme-dark': 'dark' === o }) },
                                  L && Z
                                )
                              ),
                              s.default.createElement(
                                'div',
                                { className: T('menu-mobile') },
                                L && Z,
                                s.default.createElement('ul', null, R)
                              )
                            ),
                            s.default.createElement(
                              'div',
                              {
                                className: (0, h.default)(T('buttons-group'), {
                                  'theme-dark': 'dark' === o
                                })
                              },
                              M && q,
                              m && W,
                              B && F
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ],
            [
              {
                key: 'renderButton',
                value: function(e, t, n, a) {
                  return e
                    ? s.default.createElement('a', { href: e, className: a, onClick: t }, n)
                    : s.default.createElement('button', { className: a, onClick: t }, n);
                }
              }
            ]
          ), t;
        })(u.Component);
      (S.propTypes = {
        className: d.default.string,
        children: d.default.node,
        theme: d.default.oneOf(['light', 'gray', 'dark']),
        featuredEnable: d.default.bool,
        featuredIconColor: d.default.string,
        featuredLink: d.default.string,
        featuredTitle: d.default.string,
        featuredDescription: d.default.string,
        featuredCTA: d.default.string,
        loginButtonEnable: d.default.bool,
        loginButtonLink: d.default.string,
        loginButtonOnClick: d.default.func,
        loginButtonText: d.default.string,
        signupButtonEnable: d.default.bool,
        signupButtonLink: d.default.string,
        signupButtonOnClick: d.default.func,
        signupButtonText: d.default.string,
        talkToSalesButtonEnable: d.default.bool,
        talkToSalesButtonLink: d.default.string,
        talkToSalesButtonOnClick: d.default.func,
        talkToSalesButtonText: d.default.string,
        authElementEnable: d.default.bool,
        authElement: d.default.node,
        breakpoint: d.default.number
      }), (S.defaultProps = {
        className: '',
        children: null,
        theme: 'light',
        featuredEnable: !0,
        featuredIconColor: null,
        featuredLink: null,
        featuredTitle: null,
        featuredDescription: null,
        featuredCTA: null,
        loginButtonEnable: !0,
        loginButtonLink: '',
        loginButtonOnClick: function() {},
        loginButtonText: 'Log In',
        signupButtonEnable: !0,
        signupButtonLink: '',
        signupButtonOnClick: function() {},
        signupButtonText: 'Sign up',
        talkToSalesButtonEnable: !0,
        talkToSalesButtonLink: '?contact=true',
        talkToSalesButtonOnClick: function() {},
        talkToSalesButtonText: 'Talk to Sales',
        authElementEnable: !1,
        authElement: null,
        breakpoint: 992
      }), (t.default = S);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(24),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = r.default;
    },
    function(e, t, n) {
      'use strict';
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), n(27);
      var r = function e(t) {
        var n = this;
        a(this, e), (this.select = function() {
          var e = n.getRandom(),
            t = n.getIntervals(),
            a = t.find(function(t) {
              return e >= t.from && e < t.to;
            });
          return a ? a.variant : null;
        }), (this.getRandom = function() {
          return Math.random();
        }), (this.getTotal = function() {
          return n.variants.reduce(function(e, t) {
            return e + t.probability;
          }, 0);
        }), (this.getIntervals = function() {
          var e = 0,
            t = n.getTotal(),
            a = n.variants.find(function(e) {
              return 1 === e.probability;
            });
          return n.variants.map(function(n) {
            var r = n.probability,
              o = e,
              l = r / t + o;
            return (e = l), a && 1 === r && ((o = 0), (l = 1)), a && 1 !== r && ((o = 0), (l = 0)), { variant: n, from: o, to: l };
          });
        }), (this.variants = t);
      };
      t.default = r;
    },
    function(e, t, n) {
      'use strict';
      Array.prototype.find ||
        (Array.prototype.find = function(e) {
          if (null == this) throw new TypeError('Array.prototype.find called on null or undefined');
          if ('function' != typeof e) throw new TypeError('predicate must be a function');
          for (var t, n = Object(this), a = n.length >>> 0, r = arguments[1], o = 0; o < a; o++)
            if (((t = n[o]), e.call(r, t, o, n))) return t;
        });
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        var t = u(e, 2),
          n = t[0],
          a = t[1],
          l = [{ id: 'latest-blog', value: r(a) }];
        return i(
          l
            .map(function(e) {
              return e.id;
            })
            .map(function(e) {
              return o(e, n);
            }),
          l
        ), n;
      }
      function r(e) {
        return e || (0, s.isObject)(e) ? e : null;
      }
      function o(e, t) {
        var n = [];
        return t.forEach(function(t) {
          t.childrens &&
            (
              n.push(l(t, 'childrens', e)),
              t.childrens.forEach(function(t) {
                t.items && n.push(l(t, 'items', e));
              }),
              t.footerLinks &&
                t.footerLinks.forEach(function(t) {
                  t.id === e && n.push(t);
                })
            );
        }), n.filter(function(e) {
          return !1 !== e;
        })[0];
      }
      function l(e, t, n) {
        var a = e[t];
        if (!a) return !1;
        var r = a.filter(function(e) {
          return e.id === n;
        });
        return !!r.length && r[0];
      }
      function i(e, t) {
        e.forEach(function(e, n) {
          var a = t[n];
          e && ((e.name += a.value.title), (e.href = a.value.link));
        });
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = (function() {
        function e(e, t) {
          var n = [],
            a = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var l, i = e[Symbol.iterator]();
              !(a = (l = i.next()).done) && (n.push(l.value), !t || n.length !== t);
              a = !0
            );
          } catch (e) {
            (r = !0), (o = e);
          } finally {
            try {
              !a && i.return && i.return();
            } finally {
              if (r) throw o;
            }
          }
          return n;
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError('Invalid attempt to destructure non-iterable instance');
        };
      })();
      t.default = a;
      var s = n(62);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '18px', width: '16px', version: '1.1', viewBox: '0 0 16 18' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-2332.000000, -312.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(2297.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-2.000000, 0.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(35.000000, 0.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(1.000000, 25.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 92.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M2.11077173,84.8220732 C1.49734241,84.8217705 1.00015135,85.3201724 1,85.9331477 L1.00075676,90.5851003 C1.00090811,91.2001945 1.49840187,91.6966288 2.11198255,91.6964774 C2.72586593,91.6964774 3.22320834,91.2000431 3.22260293,90.5852516 L3.22260293,85.9325423 C3.22230023,85.3197183 2.72450377,84.8217705 2.11077173,84.8220732 L2.11077173,84.8220732 Z M11.0697459,80.6444576 L11.8451218,79.2285604 C11.8864408,79.1545493 11.8593488,79.0604084 11.7844296,79.0184839 C11.7087537,78.9783756 11.6153696,79.005619 11.5752613,79.0800841 L10.7920151,80.5108138 C10.1330289,80.2174938 9.39549095,80.0531256 8.61512046,80.0538824 C7.83686889,80.0531256 7.09963369,80.2170397 6.44337177,80.5086949 L5.65921748,79.0815976 C5.61850381,79.0063757 5.52466562,78.9791324 5.45065453,79.0201488 C5.37528128,79.0608624 5.34758388,79.1551547 5.38950836,79.2290144 L6.16518694,80.6440035 C4.64107312,81.429974 3.61127466,82.9268445 3.61218277,84.6454455 L13.619269,84.6442347 C13.6195717,82.9262391 12.5915894,81.4323957 11.0697459,80.6444576 L11.0697459,80.6444576 Z M6.3390903,82.8325523 C6.10888403,82.8320982 5.92090495,82.6447245 5.92090495,82.4131561 C5.92090495,82.1826471 6.10827862,81.9931545 6.33954436,81.9933059 C6.57156685,81.9931545 6.75924323,82.1826471 6.75954593,82.4131561 C6.75954593,82.6444218 6.5714155,82.8324009 6.3390903,82.8325523 L6.3390903,82.8325523 Z M10.8956912,82.8317955 C10.6644254,82.8320982 10.4761437,82.6445732 10.4761437,82.4123993 C10.4770518,82.1823444 10.6641227,81.9928518 10.8958425,81.9919437 C11.1260488,81.9927005 11.3147846,82.1823444 11.3146333,82.4125507 C11.3150873,82.6441191 11.1269569,82.8319468 10.8956912,82.8317955 L10.8956912,82.8317955 Z M3.65304779,85.0319983 L3.65471266,92.241647 C3.65425861,92.8974549 4.18474708,93.4268839 4.84010089,93.4268839 L5.64726068,93.4271866 L5.64816879,95.8887742 C5.64801744,96.5017495 6.14626795,97 6.75833512,97 C7.3722185,97 7.86956091,96.5012954 7.86971226,95.8880175 L7.86910685,93.4270352 L9.36885302,93.4265812 L9.36945842,95.8880175 C9.36945842,96.5005387 9.86786029,96.9998486 10.4800788,96.9986378 C11.0939622,96.9990919 11.5916073,96.5003873 11.5914559,95.8871093 L11.5906992,93.4262785 L12.4007347,93.4256731 C13.054575,93.4259758 13.5864256,92.8959414 13.5867283,92.2399821 L13.5853661,85.0303335 L3.65304779,85.0319983 L3.65304779,85.0319983 Z M16.2355382,85.9314828 C16.2353869,85.3177508 15.7381958,84.8204084 15.1244638,84.8207111 C14.5110345,84.8201057 14.0139948,85.3182048 14.0139948,85.9319369 L14.0149029,90.5841921 C14.0147515,91.1983782 14.5117912,91.6948125 15.1256746,91.6949639 C15.7392553,91.6948125 16.2361436,91.1983782 16.236295,90.5835867 L16.2355382,85.9314828 Z'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '16px', width: '16px', version: '1.1', viewBox: '0 0 16 16' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-2329.000000, -421.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(2297.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-2.000000, 0.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(34.000000, 297.000000)' },
                      r.default.createElement('path', {
                        d:
                          'M14.500049,24 L1.50000507,24 C0.671752271,24 0,23.327458 0,22.4984062 L0,13.4890931 C0,12.6597912 0.671752271,11.9882493 1.50000507,11.9882493 L3.00001014,11.9882493 L3.00001014,9.54784674 C3.00001014,8.69304332 3.67151241,8 4.50001521,8 L14.500049,8 C15.3283018,8 16.0000541,8.69304332 16.0000541,9.54784674 L16.0000541,22.4519032 C16.0000541,23.3067067 15.3283018,24 14.500049,24 L14.500049,24 Z M15.0000507,9.51734483 C15.0000507,9.23107694 14.7760499,8.99981249 14.500049,8.99981249 L4.50001521,8.99981249 C4.22401428,8.99981249 4.00001352,9.23107694 4.00001352,9.51734483 L4.00001352,12.6212888 L4.00001352,12.9663104 L4.00001352,21.9006188 L3.00001014,21.9006188 L3.00001014,12.9663104 L1.50000507,12.9663104 C1.22400414,12.9663104 1.00000338,13.1905744 1.00000338,13.4673417 L1.00000338,22.4971561 C1.00000338,22.7744234 1.22400414,22.9989374 1.50000507,22.9989374 L14.500049,22.9671854 C14.7760499,22.9671854 15.0000507,22.735921 15.0000507,22.4504032 L15.0000507,9.51734483 L15.0000507,9.51734483 Z M4.9997669,19.9957497 L14.0000473,19.9957497 L14.0000473,20.9975623 L4.9997669,20.9975623 L4.9997669,19.9957497 L4.9997669,19.9957497 Z M4.9997669,16.9928121 L14.0000473,16.9928121 L14.0000473,17.9936246 L4.9997669,17.9936246 L4.9997669,16.9928121 L4.9997669,16.9928121 Z M13.0000439,14.9904369 L6.00002028,14.9904369 C5.44776842,14.9904369 5.0000169,14.5421589 5.0000169,13.9898744 L5.0000169,11.9879992 C5.0000169,11.4349647 5.44776842,10.9861866 6.00002028,10.9861866 L13.0000439,10.9861866 C13.5522958,10.9861866 14.0000473,11.4349647 14.0000473,11.9879992 L14.0000473,13.9898744 C14.0000473,14.5421589 13.5520458,14.9904369 13.0000439,14.9904369 L13.0000439,14.9904369 Z M13.0000439,12.4877805 C13.0000439,12.2120133 12.7760432,11.9877492 12.5000423,11.9877492 L6.50002197,11.9877492 C6.22402104,11.9877492 6.00002028,12.2117632 6.00002028,12.4877805 L6.00002028,13.488343 C6.00002028,13.7656104 6.22402104,13.9896244 6.50002197,13.9896244 L12.5000423,13.9896244 C12.7760432,13.9896244 13.0000439,13.7656104 13.0000439,13.488343 L13.0000439,12.4877805 L13.0000439,12.4877805 Z'
                      })
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '53px', width: '53px', version: '1.1', viewBox: '0 0 53 53' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeLinecap: 'square', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-566.000000, -258.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 29.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(371.000000, 0.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 7.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M52.5093,26.2547 C52.5093,11.7547 40.7543,-0.0003 26.2543,-0.0003 C11.7543,-0.0003 0.0003,11.7547 0.0003,26.2547 C0.0003,40.7547 11.7543,52.5087 26.2543,52.5087 C40.7543,52.5087 52.5093,40.7547 52.5093,26.2547',
                            fill: '#ECECEC'
                          }),
                          r.default.createElement(
                            'g',
                            { transform: 'translate(13.000000, 17.000000)' },
                            r.default.createElement('path', {
                              d:
                                'M13.2544,0.8172 C7.6294,0.8172 2.8254,4.3162 0.8794,9.2552 C2.8254,14.1932 7.6294,17.6922 13.2544,17.6922 C18.8794,17.6922 23.6834,14.1932 25.6294,9.2552 C23.6834,4.3162 18.8794,0.8172 13.2544,0.8172',
                              fill: '#FFFFFF'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M13.2544,0.8172 C7.6294,0.8172 2.8254,4.3162 0.8794,9.2552 C2.8254,14.1932 7.6294,17.6922 13.2544,17.6922 C18.8794,17.6922 23.6834,14.1932 25.6294,9.2552 C23.6834,4.3162 18.8794,0.8172 13.2544,0.8172 Z',
                              stroke: '#222228',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M13.2544,14.1454 C10.5544,14.1454 8.3634,11.9544 8.3634,9.2544 C8.3634,6.5544 10.5544,4.3634 13.2544,4.3634 C15.9544,4.3634 18.1454,6.5544 18.1454,9.2544 C18.1454,11.9544 15.9544,14.1454 13.2544,14.1454 Z',
                              stroke: '#EC5424',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M13.2544,7.1302 C12.0794,7.1302 11.1304,8.0792 11.1304,9.2552 C11.1304,10.4302 12.0794,11.3792 13.2544,11.3792 C14.4304,11.3792 15.3794,10.4302 15.3794,9.2552 C15.3794,8.0792 14.4304,7.1302 13.2544,7.1302',
                              fill: '#222228'
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '54px', width: '53px', version: '1.1', viewBox: '0 0 53 54' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-195.000000, -257.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 33.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(0.000000, 2.000000)' },
                        r.default.createElement('rect', {
                          height: '53.7479069',
                          width: '52.1574875',
                          fill: '#ECECEC',
                          rx: '26.0787437',
                          x: '0',
                          y: '0'
                        }),
                        r.default.createElement('polygon', {
                          points: '12.8445073 14 38.8445073 14 38.8445073 40 12.8445073 40'
                        }),
                        r.default.createElement(
                          'g',
                          { transform: 'translate(14.000000, 15.000000)' },
                          r.default.createElement('rect', {
                            height: '23.0911239',
                            width: '23.7058594',
                            fill: '#FFFFFF',
                            rx: '3',
                            transform:
                              'translate(11.906452, 11.979060) rotate(90.000000) translate(-11.906452, -11.979060) ',
                            x: '0.0535219254',
                            y: '0.433498242'
                          }),
                          r.default.createElement('path', {
                            d:
                              'M23.7058594,14.7805139 L23.7058594,21.5009299 C23.7058594,23.1333423 22.177815,24.4566741 20.2967733,24.4566741 L3.40908608,24.4566741 C1.52629983,24.4566741 2.48689958e-14,23.1315341 2.48689958e-14,21.5009299 L2.48689958e-14,14.7805139 L23.7058594,14.7805139',
                            fill: '#EB5424'
                          }),
                          r.default.createElement('rect', {
                            height: '1.95687491',
                            width: '12.8562212',
                            fill: '#000000',
                            rx: '0.978437454',
                            x: '5.4',
                            y: '4.45281347'
                          }),
                          r.default.createElement('rect', {
                            height: '1.95687491',
                            width: '12.8562212',
                            fill: '#000000',
                            rx: '0.978437454',
                            x: '5.4',
                            y: '8.56225078'
                          }),
                          r.default.createElement('rect', {
                            height: '1.95687491',
                            width: '7.81455825',
                            fill: '#FFFFFF',
                            rx: '0.978437454',
                            x: '7.94565056',
                            y: '18.7380003'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '24px', width: '16px', version: '1.1', viewBox: '0 0 16 24' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-304.000000, -501.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-9.000000, 25.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(0.000000, 339.884018)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(157.000000, 17.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 4.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M13.5162632,6.53763667 L13.5162632,13.8240367 C13.5162632,15.7422367 12.0219474,17.2970367 10.1783684,17.2970367 L8.50942105,17.2970367 L8.50942105,21.8119367 L5.17152632,21.8119367 L5.17152632,17.2970367 L3.50257895,17.2970367 C1.65973684,17.2970367 0.164684211,15.7422367 0.164684211,13.8240367 L0.164684211,6.53073667 L1.49984211,6.53073667 L4.17015789,6.53073667 L9.51078947,6.53073667 L12.1811053,6.53073667 L13.5162632,6.53763667 Z',
                            fill: '#FFFFFF'
                          }),
                          r.default.createElement('path', {
                            d:
                              'M13.5162632,6.53763667 L13.5162632,13.8240367 C13.5162632,15.7422367 12.0219474,17.2970367 10.1783684,17.2970367 L8.50942105,17.2970367 L8.50942105,21.8119367 L5.17152632,21.8119367 L5.17152632,17.2970367 L3.50257895,17.2970367 C1.65973684,17.2970367 0.164684211,15.7422367 0.164684211,13.8240367 L0.164684211,6.53073667 L1.49984211,6.53073667 L4.17015789,6.53073667 L9.51078947,6.53073667 L12.1811053,6.53073667 L13.5162632,6.53763667 Z',
                            stroke: '#222228',
                            strokeWidth: '1.155'
                          }),
                          r.default.createElement('path', {
                            d: 'M3.65915789,6.53089 L3.65915789,0.0939566667',
                            fill: '#FFFFFF'
                          }),
                          r.default.createElement('path', {
                            d: 'M3.65915789,6.53089 L3.65915789,0.0939566667',
                            stroke: '#222228',
                            strokeLinecap: 'round',
                            strokeWidth: '1.155'
                          }),
                          r.default.createElement('path', {
                            d: 'M10.0220105,6.53089 L10.0220105,0.0939566667',
                            fill: '#FFFFFF'
                          }),
                          r.default.createElement('path', {
                            d: 'M10.0220105,6.53089 L10.0220105,0.0939566667',
                            stroke: '#222228',
                            strokeLinecap: 'round',
                            strokeWidth: '1.155'
                          }),
                          r.default.createElement('path', {
                            d: 'M3.65775789,10.03816 L10.0218632,10.03816',
                            stroke: '#3445DC',
                            strokeWidth: '1.155'
                          }),
                          r.default.createElement('path', {
                            d: 'M4.91304211,12.3879167 L8.76672632,12.3879167',
                            stroke: '#3445DC',
                            strokeWidth: '1.155'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '70px', width: '71px', version: '1.1', viewBox: '0 0 71 70' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-249.000000, -367.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(96.000000, 367.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(153.000000, 0.000000)' },
                    r.default.createElement('path', {
                      d:
                        'M18.6794258,70 L51.3684211,70 C61.6847177,70 70.0478469,61.6425833 70.0478469,51.3333333 L70.0478469,18.6666667 C70.0478469,8.35741667 61.6847177,0 51.3684211,0 L18.6794258,0 C8.36312919,0 0,8.35741667 0,18.6666667 L0,51.3333333 C0,61.6425833 8.36312919,70 18.6794258,70',
                      fill: '#EC5424'
                    }),
                    r.default.createElement('path', {
                      d:
                        'M49.3806967,15.3375833 L35.0255579,15.3375833 L20.6692517,15.3372917 L16.2334718,29.0535 C13.5345866,37.4759583 16.6820699,46.3411667 23.4098737,51.2499167 L35.023223,59.7280833 L46.6403665,51.2484583 C53.7321273,46.0725417 56.3878163,37.044 53.8334048,29.0957917 C53.8228976,29.05875 49.3806967,15.3375833 49.3806967,15.3375833 Z',
                      fill: '#222228'
                    }),
                    r.default.createElement('polygon', {
                      fill: '#FFFFFF',
                      points:
                        '35.0237775 15.3372333 39.4770694 29.0336083 53.8879545 29.0336083 42.229366 37.4983583 46.6826579 51.1947333 35.0237775 42.7299833 23.3648971 51.1947333 27.818189 37.4983583 16.1596005 29.0336083 30.5704856 29.0336083'
                    })
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '18px', width: '18px', version: '1.1', viewBox: '0 0 18 18' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-2331.000000, -241.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(2297.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-2.000000, 0.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(35.000000, 0.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(1.000000, 25.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 92.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M0,8 L0,26 L18,26 L18,8 L0,8 Z M9.521136,23.337872 C9.255456,23.877728 8.748288,24.2324 8.160624,24.403616 C7.2576,24.610976 6.393888,24.492752 5.75136,24.10712 C5.321376,23.843312 4.985568,23.437232 4.757616,22.969376 L6.128496,22.129856 C6.140448,22.134896 6.176448,22.199984 6.224544,22.28408 C6.39936,22.576976 6.550128,22.784336 6.84648,22.92992 C7.137648,23.02928 7.776864,23.092784 8.02368,22.580432 C8.174448,22.319792 8.126496,21.482 8.126496,20.555072 C8.126352,19.098512 8.13312,17.648 8.13312,16.208 L9.819216,16.208 C9.819216,17.792 9.827856,19.292192 9.819216,20.837888 C9.822816,21.785408 9.90504,22.630112 9.521136,23.337872 Z M16.515792,22.86152 C15.929712,24.866288 12.662064,24.931376 11.356272,23.606864 C11.080368,23.295104 10.907424,23.13224 10.742832,22.772384 C11.436768,22.373216 11.436768,22.373216 12.111984,21.982544 C12.478752,22.546304 12.817872,22.856336 13.428,22.9832 C14.255712,23.084288 15.088464,22.799888 14.901696,21.920768 C14.709744,21.202784 13.206816,21.028112 12.183984,20.260304 C11.1456,19.562912 10.90224,17.86832 11.755584,16.900064 C12.039984,16.541936 12.524976,16.274672 13.033872,16.146224 L13.564944,16.077536 C14.584608,16.056944 15.221952,16.326224 15.689808,16.848656 C15.819984,16.98056 15.926256,17.122832 16.124976,17.431136 C15.581808,17.777312 15.583536,17.774 14.805504,18.277712 C14.639328,17.919728 14.363568,17.695088 14.072112,17.597456 C13.619664,17.460368 13.049136,17.609408 12.930768,18.087488 C12.889728,18.2348 12.898224,18.371888 12.963456,18.615248 C13.146768,19.03328 13.761936,19.215008 14.313744,19.468592 C15.902208,20.112848 16.438608,20.803616 16.570512,21.625856 C16.69752,22.33376 16.53984,22.792976 16.515792,22.86152 L16.515792,22.86152 Z'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '53px', width: '53px', version: '1.1', viewBox: '0 0 53 53' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeLinecap: 'square', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-195.000000, -258.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 29.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(0.000000, 7.000000)' },
                        r.default.createElement('path', {
                          d:
                            'M52.5091,26.2545 C52.5091,11.7545 40.7551,0.0005 26.2551,0.0005 C11.7551,0.0005 0.0001,11.7545 0.0001,26.2545 C0.0001,40.7545 11.7551,52.5085 26.2551,52.5085 C40.7551,52.5085 52.5091,40.7545 52.5091,26.2545',
                          fill: '#ECECEC'
                        }),
                        r.default.createElement(
                          'g',
                          { transform: 'translate(16.000000, 11.000000)' },
                          r.default.createElement('polygon', {
                            fill: '#FFFFFF',
                            points: '0.144 26.2871 20.366 26.2871 20.366 8.9541 0.144 8.9541'
                          }),
                          r.default.createElement('polygon', {
                            points: '0.144 26.2871 20.366 26.2871 20.366 8.9541 0.144 8.9541',
                            stroke: '#222228',
                            strokeWidth: '1.5'
                          }),
                          r.default.createElement('path', {
                            d:
                              'M16.0325,8.9533 L16.0325,6.0643 C16.0325,2.8733 13.4455,0.2863 10.2545,0.2863 C7.0635,0.2863 4.4765,2.8733 4.4765,6.0643 L4.4765,8.2313',
                            stroke: '#222228',
                            strokeWidth: '1.5'
                          }),
                          r.default.createElement('path', {
                            d:
                              'M13.1434,16.1759 C13.1434,14.5799 11.8504,13.2869 10.2544,13.2869 C8.6594,13.2869 7.3654,14.5799 7.3654,16.1759 C7.3654,17.2419 7.9504,18.1629 8.8104,18.6639 L8.8104,21.9529 L11.6994,21.9529 L11.6994,18.6639 C12.5594,18.1629 13.1434,17.2419 13.1434,16.1759 Z',
                            stroke: '#EC5424',
                            strokeWidth: '1.5'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '54px', width: '53px', version: '1.1', viewBox: '0 0 53 54' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeLinecap: 'square', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-195.000000, -478.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 29.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(0.000000, 218.853047)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 9.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M52.5091,26.2545 C52.5091,11.7545 40.7551,0.0005 26.2551,0.0005 C11.7551,0.0005 0.0001,11.7545 0.0001,26.2545 C0.0001,40.7545 11.7551,52.5095 26.2551,52.5095 C40.7551,52.5095 52.5091,40.7545 52.5091,26.2545',
                            fill: '#ECECEC'
                          }),
                          r.default.createElement(
                            'g',
                            { transform: 'translate(17.000000, 12.000000)' },
                            r.default.createElement('path', {
                              d:
                                'M15.7972,28.2545 L2.7122,28.2545 C1.6612,28.2545 0.8012,27.3955 0.8012,26.3445 L0.8012,2.1645 C0.8012,1.1135 1.6612,0.2545 2.7122,0.2545 L15.7972,0.2545 C16.8482,0.2545 17.7072,1.1135 17.7072,2.1645 L17.7072,26.3445 C17.7072,27.3955 16.8482,28.2545 15.7972,28.2545',
                              fill: '#FFFFFF'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M15.7972,28.2545 L2.7122,28.2545 C1.6612,28.2545 0.8012,27.3955 0.8012,26.3445 L0.8012,2.1645 C0.8012,1.1135 1.6612,0.2545 2.7122,0.2545 L15.7972,0.2545 C16.8482,0.2545 17.7072,1.1135 17.7072,2.1645 L17.7072,26.3445 C17.7072,27.3955 16.8482,28.2545 15.7972,28.2545 Z',
                              stroke: '#222228',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d: 'M17.7074,20.6343 L0.8014,20.6343',
                              stroke: '#222228',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d: 'M0.8016,4.6754 L17.7076,4.6754',
                              stroke: '#222228',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M10.828,24.4674 C10.828,25.3364 10.123,26.0404 9.255,26.0404 C8.386,26.0404 7.682,25.3364 7.682,24.4674 C7.682,23.5984 8.386,22.8944 9.255,22.8944 C10.123,22.8944 10.828,23.5984 10.828,24.4674',
                              fill: '#231F1F'
                            }),
                            r.default.createElement('polyline', {
                              points: '13.4881 9.2833 8.0741 14.6963 5.9671 12.5893',
                              stroke: '#EC5424',
                              strokeWidth: '1.5'
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '54px', width: '53px', version: '1.1', viewBox: '0 0 53 54' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-195.000000, -366.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-9.000000, 25.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(47.000000, 225.000000)' },
                      r.default.createElement('path', {
                        d:
                          'M52.509,27.1536416 C52.509,12.6536416 40.755,0.899641577 26.255,0.899641577 C11.755,0.899641577 0,12.6536416 0,27.1536416 C0,41.6536416 11.755,53.4086416 26.255,53.4086416 C40.755,53.4086416 52.509,41.6536416 52.509,27.1536416',
                        fill: '#ECECEC'
                      }),
                      r.default.createElement('path', {
                        d:
                          'M26.0930648,35.8676416 C25.7640648,35.8676416 25.4990648,36.1326416 25.4990648,36.4616416 L25.4990648,39.4306416 C25.4990648,39.7586416 25.7640648,40.0236416 26.0930648,40.0236416 C26.4220648,40.0236416 26.6870648,39.7586416 26.6870648,39.4306416 L26.6870648,36.4616416 C26.6870648,36.1326416 26.4220648,35.8676416 26.0930648,35.8676416 M29.2940648,30.8116416 C29.0020648,30.8436416 28.7590648,31.1206416 28.7650648,31.4146416 L28.7650648,38.8366416 C28.7600648,39.1496416 29.0450648,39.4396416 29.3590648,39.4396416 C29.6720648,39.4396416 29.9570648,39.1496416 29.9520648,38.8366416 L29.9520648,31.4146416 C29.9600648,31.0776416 29.6290648,30.7746416 29.2940648,30.8116416 M19.4970648,28.1396416 C19.2050648,28.1716416 18.9620648,28.4496416 18.9680648,28.7426416 L18.9680648,36.4616416 C18.9640648,36.7746416 19.2480648,37.0646416 19.5620648,37.0646416 C19.8760648,37.0646416 20.1600648,36.7746416 20.1560648,36.4616416 L20.1560648,28.7426416 C20.1630648,28.4056416 19.8320648,28.1026416 19.4970648,28.1396416 M26.0930648,17.4616416 C22.2840648,17.4616416 18.9680648,20.3526416 18.9680648,23.9926416 L18.9680648,25.7736416 C18.9640648,26.0876416 19.2480648,26.3766416 19.5620648,26.3766416 C19.8760648,26.3766416 20.1600648,26.0876416 20.1560648,25.7736416 L20.1560648,23.9926416 C20.1560648,21.0836416 22.8850648,18.6496416 26.0930648,18.6496416 C29.3010648,18.6496416 32.0300648,21.0836416 32.0300648,23.9926416 L32.0300648,36.4616416 C32.0260648,36.7746416 32.3100648,37.0646416 32.6240648,37.0646416 C32.9380648,37.0646416 33.2220648,36.7746416 33.2180648,36.4616416 L33.2180648,23.9926416 C33.2180648,20.3526416 29.9020648,17.4616416 26.0930648,17.4616416 M18.3000648,17.4526416 C18.5380648,17.4166416 18.7870648,17.5386416 18.9030648,17.7496416 C19.0190648,17.9596416 18.9950648,18.2436416 18.8380648,18.4266416 C17.7210648,19.8006416 17.1870648,21.4906416 17.1870648,23.3986416 L17.1870648,33.4926416 C17.1920648,33.8056416 16.9070648,34.0956416 16.5930648,34.0956416 C16.2800648,34.0956416 15.9950648,33.8056416 16.0000648,33.4926416 L16.0000648,23.3986416 C16.0000648,21.2666416 16.6070648,19.2776416 17.9100648,17.6756416 C18.0050648,17.5546416 18.1480648,17.4726416 18.3000648,17.4526416 Z M35.5930648,27.5546416 C35.9220648,27.5546416 36.1870648,27.8206416 36.1870648,28.1486416 L36.1870648,33.4926416 C36.1870648,33.8216416 35.9220648,34.0866416 35.5930648,34.0866416 C35.2640648,34.0866416 34.9990648,33.8216416 34.9990648,33.4926416 L34.9990648,28.1486416 C34.9990648,27.8206416 35.2640648,27.5546416 35.5930648,27.5546416 Z M26.0930648,13.8996416 C24.0420648,13.8996416 22.0320648,14.4856416 20.4340648,15.4676416 C20.1690648,15.6326416 20.0740648,16.0276416 20.2390648,16.2926416 C20.4050648,16.5576416 20.8000648,16.6436416 21.0650648,16.4786416 C22.4630648,15.6186416 24.2730648,15.0866416 26.0930648,15.0866416 C31.0550648,15.0866416 34.9990648,18.8286416 34.9990648,23.3986416 L34.9990648,25.1796416 C34.9990648,25.5096416 35.2640648,25.7736416 35.5930648,25.7736416 C35.9220648,25.7736416 36.1870648,25.5096416 36.1870648,25.1796416 L36.1870648,23.3986416 C36.1870648,18.1456416 31.6560648,13.8996416 26.0930648,13.8996416',
                        fill: '#000000'
                      }),
                      r.default.createElement('path', {
                        d:
                          'M26.0280648,24.2806416 C25.7370648,24.3126416 25.4930648,24.5896416 25.4990648,24.8836416 L25.4990648,33.1956416 C25.4950648,33.5096416 25.7800648,33.7986416 26.0930648,33.7986416 C26.4070648,33.7986416 26.6910648,33.5096416 26.6870648,33.1956416 L26.6870648,24.8836416 C26.6940648,24.5466416 26.3630648,24.2436416 26.0280648,24.2806416',
                        fill: '#EB5424'
                      }),
                      r.default.createElement('path', {
                        d:
                          'M26.0930648,21.0246416 C24.0380648,21.0246416 22.2340648,22.5836416 22.2340648,24.5866416 L22.2340648,38.8366416 C22.2290648,39.1496416 22.5140648,39.4396416 22.8270648,39.4396416 C23.1410648,39.4396416 23.4260648,39.1496416 23.4210648,38.8366416 L23.4210648,24.5866416 C23.4210648,23.3146416 24.6390648,22.2116416 26.0930648,22.2116416 C27.5470648,22.2116416 28.7650648,23.3146416 28.7650648,24.5866416 L28.7650648,28.4456416 C28.7600648,28.7596416 29.0450648,29.0486416 29.3590648,29.0486416 C29.6720648,29.0486416 29.9570648,28.7596416 29.9520648,28.4456416 L29.9520648,24.5866416 C29.9520648,22.5836416 28.1480648,21.0246416 26.0930648,21.0246416',
                        fill: '#EB5424'
                      })
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '14px', width: '19px', version: '1.1', viewBox: '0 0 19 14' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-415.000000, -613.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(0.000000, 363.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(259.000000, 18.000000)' },
                        r.default.createElement('path', {
                          d:
                            'M17.4988925,24 L4.6665852,24 C4.02234505,24 3.49972017,23.4773442 3.49972017,22.833066 L3.49972017,21.6667153 L4.6665852,21.6667153 L4.6665852,22.2497448 C4.6665852,22.5720297 4.927606,22.833066 5.24958025,22.833066 L16.9153142,22.833066 C17.2372884,22.833066 17.4988925,22.5720297 17.4988925,22.2497448 L17.4988925,15.2504739 C17.4988925,14.9278973 17.2375801,14.6665694 16.9153142,14.6665694 L16.3320275,14.6665694 L16.3320275,13.5002187 L17.4988925,13.5002187 C18.1431326,13.5002187 18.6651742,14.0225829 18.6651742,14.6665694 L18.6651742,22.833066 C18.6651742,23.4773442 18.1431326,24 17.4988925,24 L17.4988925,24 Z M13.9991723,20.4997813 L1.16657339,20.4997813 C0.522333235,20.4997813 0,19.9771255 0,19.3337222 L0,11.1666424 C0,10.5226558 0.522333235,10 1.16657339,10 L13.9991723,10 C14.6434125,10 15.1657457,10.5226558 15.1657457,11.1666424 L15.1657457,19.3337222 C15.1657457,19.9771255 14.6434125,20.4997813 13.9991723,20.4997813 L13.9991723,20.4997813 Z M13.9991723,11.7505469 C13.9991723,11.4276786 13.7378599,11.1666424 13.415594,11.1666424 L1.74986008,11.1666424 C1.42788583,11.1666424 1.16657339,11.4276786 1.16657339,11.7505469 L1.16657339,18.7498177 C1.16657339,19.072686 1.42788583,19.3337222 1.74986008,19.3337222 L13.415594,19.3337222 C13.7375682,19.3337222 13.9991723,19.072686 13.9991723,18.7498177 L13.9991723,11.7505469 L13.9991723,11.7505469 Z M7.58272703,18.1664965 C5.97227247,18.1664965 4.6665852,16.8601487 4.6665852,15.2504739 C4.6665852,13.6393408 5.97227247,12.3332847 7.58272703,12.3332847 C9.19347324,12.3332847 10.4991605,13.6393408 10.4991605,15.2504739 C10.4991605,16.8604404 9.19347324,18.1664965 7.58272703,18.1664965 L7.58272703,18.1664965 Z M7.58272703,13.5002187 C6.61651262,13.5002187 5.83286695,14.2836191 5.83286695,15.2504739 C5.83286695,16.2164538 6.61651262,16.9998542 7.58272703,16.9998542 C8.54894144,16.9998542 9.33258712,16.2161622 9.33258712,15.2504739 C9.33258712,14.2836191 8.54923309,13.5002187 7.58272703,13.5002187 L7.58272703,13.5002187 Z'
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '53px', width: '53px', version: '1.1', viewBox: '0 0 53 53' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeLinecap: 'square', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-195.000000, -258.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 29.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(0.000000, 6.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 0.509100)' },
                          r.default.createElement(
                            'mask',
                            { fill: 'white' },
                            r.default.createElement('polygon', {
                              points:
                                '0 26.7456 0 53 52.509 53 52.509 26.7456 52.509 0.4912 0 0.4912'
                            })
                          ),
                          r.default.createElement('path', {
                            d:
                              'M52.509,26.7452 C52.509,12.2452 40.755,0.4912 26.255,0.4912 C11.755,0.4912 0,12.2452 0,26.7452 C0,41.2452 11.755,53.0002 26.255,53.0002 C40.755,53.0002 52.509,41.2452 52.509,26.7452',
                            fill: '#ECECEC'
                          })
                        ),
                        r.default.createElement(
                          'g',
                          {
                            fill: '#FFFFFF',
                            stroke: '#222228',
                            strokeWidth: '1.5',
                            transform: 'translate(18.000000, 12.000000)'
                          },
                          r.default.createElement('path', {
                            d:
                              'M17.9454092,6.41504782 C16.8573821,2.63069983 13.3871372,0.134066368 9.26170135,0.0995258271 C4.20259152,0.0563501512 0.0642029894,4.32750389 0.0231860973,9.38661371 L0.0231860973,27.9618689 L11.3006726,27.9618689 L11.3006726,20.6641003 L15.5729058,20.6641003 C16.3327977,20.8454381 17.0182115,20.2291053 17.2707892,19.468134 L17.2707892,14.6939837 L19.9250139,14.6939837 L17.9454092,6.41504782 Z'
                          })
                        ),
                        r.default.createElement(
                          'g',
                          { stroke: '#EB5424', transform: 'translate(19.000000, 13.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M12.2583,10.7403 L14.1543,11.0243 L14.5463,8.4113 L12.6623,8.1293 C12.6103,7.8243 12.5313,7.5213 12.4083,7.2233 C12.3003,6.9613 12.1663,6.7163 12.0143,6.4883 L13.1863,4.9923 L11.1053,3.3643 L9.9253,4.8703 C9.3753,4.6713 8.7863,4.5923 8.1883,4.6353 L7.4563,2.8633 L5.0143,3.8713 L5.7463,5.6443 C5.2903,6.0363 4.9273,6.5103 4.6773,7.0413 L2.7703,6.8053 L2.4453,9.4283 L4.3433,9.6623 C4.3973,9.9293 4.4733,10.1953 4.5813,10.4553 C4.7033,10.7513 4.8603,11.0203 5.0363,11.2713 L3.8933,12.8103 L6.0153,14.3853 L7.1633,12.8393 C7.6863,13.0143 8.2393,13.0843 8.8013,13.0433 L9.5423,14.8373 L11.9843,13.8283 L11.2443,12.0353 C11.6703,11.6693 12.0103,11.2303 12.2583,10.7403 Z',
                            transform:
                              'translate(8.495800, 8.850300) rotate(23.000000) translate(-8.495800, -8.850300) '
                          }),
                          r.default.createElement('path', {
                            d:
                              'M7.8218,7.2091 C6.9208,7.5811 6.4928,8.6121 6.8638,9.5131 C7.2368,10.4141 8.2678,10.8421 9.1688,10.4701 C10.0688,10.0991 10.4978,9.0671 10.1258,8.1661 C9.7538,7.2661 8.7218,6.8371 7.8218,7.2091 Z'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '150px', width: '150px', version: '1.1', viewBox: '0 0 150 150' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement('path', {
                d: 'M150,150 L0,150 L0,0 L150,0 L150,150 Z',
                fill: '#5F3237'
              }),
              r.default.createElement('path', {
                d: 'M150,150 L30,150 L30,30 L150,30 L150,150 Z',
                fill: '#E56E62'
              }),
              r.default.createElement('path', {
                d: 'M120,120 L30,120 L30,30 L120,30 L120,120 Z',
                fill: '#ED955B'
              }),
              r.default.createElement('path', {
                d: 'M120,120 L60,120 L60,60 L120,60 L120,120 Z',
                fill: '#F9E862'
              }),
              r.default.createElement('path', {
                d: 'M90,90 L60,90 L60,60 L90,60 L90,90 Z',
                fill: '#FFFFFF'
              })
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = {
          backgroundColor: '#01B48F',
          width: 46,
          height: 30,
          display: 'inline-block',
          color: '#F5F7F9',
          borderRadius: 3,
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 500,
          textTransform: 'uppercase',
          padding: 7
        },
        l = function() {
          return r.default.createElement('span', { style: o }, 'b2b');
        };
      t.default = l;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = {
          backgroundColor: '#4571D0',
          width: 46,
          height: 30,
          display: 'inline-block',
          color: '#F5F7F9',
          borderRadius: 3,
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 500,
          textTransform: 'uppercase',
          padding: 7
        },
        l = function() {
          return r.default.createElement('span', { style: o }, 'b2e');
        };
      t.default = l;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = {
          backgroundColor: '#C879B2',
          width: 46,
          height: 30,
          display: 'inline-block',
          color: '#F5F7F9',
          borderRadius: 3,
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 500,
          textTransform: 'uppercase',
          padding: 7
        },
        l = function() {
          return r.default.createElement('span', { style: o }, 'ciam');
        };
      t.default = l;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '18px', width: '15px', version: '1.1', viewBox: '0 0 15 18' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { fill: '#EB5424', transform: 'translate(-2333.000000, -275.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(2297.000000, 116.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-2.000000, 0.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(35.000000, 0.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(1.000000, 25.000000)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 92.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M14.4263996,51.5628709 C14.4516101,54.2867577 16.8161756,55.1933194 16.8422554,55.2049104 C16.8222609,55.2686609 16.4645334,56.4967281 15.5966567,57.7649293 C14.8464288,58.8614386 14.0676579,59.953891 12.8411845,59.9767833 C11.6360095,59.9988062 11.2484351,59.2619079 9.87040925,59.2619079 C8.49281801,59.2619079 8.06235697,59.953891 6.92136718,59.9988062 C5.73734576,60.0437213 4.83571027,58.8129012 4.07925214,57.7205936 C2.5335913,55.4858474 1.35232275,51.4056679 2.93840724,48.6514996 C3.72630597,47.2837608 5.13461337,46.4177676 6.6630326,46.3954549 C7.82561064,46.3732871 8.92298928,47.1775581 9.63366292,47.1775581 C10.3439019,47.1775581 11.6774473,46.2102886 13.0793797,46.3522784 C13.6663193,46.3767644 15.3136912,46.5893145 16.3715156,48.1378731 C16.2864665,48.1907571 14.4059705,49.2855277 14.4263996,51.5628709 M12.1613719,44.8739903 C12.7898943,44.1131855 13.212966,43.0537675 13.0976355,42 C12.1915085,42.0363668 11.0958685,42.6037466 10.4460477,43.3642616 C9.86359953,44.0375542 9.3535952,45.1155179 9.49109353,46.1484216 C10.5011049,46.2266609 11.5327046,45.6352297 12.1613719,44.8739903'
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(0),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        o = function() {
          return r.default.createElement(
            'svg',
            { height: '54px', width: '53px', version: '1.1', viewBox: '0 0 53 54' },
            r.default.createElement(
              'g',
              { fill: 'none', stroke: 'none', strokeLinecap: 'square', strokeWidth: '1' },
              r.default.createElement(
                'g',
                { transform: 'translate(-566.000000, -479.000000)' },
                r.default.createElement(
                  'g',
                  { transform: 'translate(157.000000, 115.000000)' },
                  r.default.createElement(
                    'g',
                    { transform: 'translate(-1.000000, 107.000000)' },
                    r.default.createElement(
                      'g',
                      { transform: 'translate(39.000000, 29.000000)' },
                      r.default.createElement(
                        'g',
                        { transform: 'translate(371.000000, 218.853047)' },
                        r.default.createElement(
                          'g',
                          { transform: 'translate(0.000000, 10.000000)' },
                          r.default.createElement('path', {
                            d:
                              'M52.5093,26.2545 C52.5093,11.7545 40.7543,0.0005 26.2543,0.0005 C11.7543,0.0005 0.0003,11.7545 0.0003,26.2545 C0.0003,40.7545 11.7543,52.5095 26.2543,52.5095 C40.7543,52.5095 52.5093,40.7545 52.5093,26.2545',
                            fill: '#ECECEC'
                          }),
                          r.default.createElement(
                            'g',
                            { transform: 'translate(9.000000, 12.000000)' },
                            r.default.createElement('path', {
                              d:
                                'M22.0679,13.2032 L22.0679,9.2462 L19.1709,9.2462 C18.9839,8.5222 18.6989,7.8392 18.3279,7.2102 L20.3769,5.1622 L17.5779,2.3642 L15.5289,4.4122 C14.9009,4.0412 14.2179,3.7562 13.4939,3.5692 L13.4939,0.6722 L9.5369,0.6722 L9.5369,3.5692 C8.8129,3.7562 8.1299,4.0412 7.5009,4.4122 L5.4529,2.3642 L2.6539,5.1622 L4.7029,7.2102 C4.3319,7.8392 4.0469,8.5222 3.8599,9.2462 L0.9629,9.2462 L0.9629,13.2032 L3.8599,13.2032 C4.0469,13.9282 4.3319,14.6102 4.7029,15.2392 L2.6539,17.2872 L5.4529,20.0852 L7.5009,18.0372 C8.1299,18.4082 8.8129,18.6932 9.5369,18.8802 L9.5369,21.7772 L13.4939,21.7772 L13.4939,18.8802 C14.2179,18.6932 14.9009,18.4082 15.5289,18.0372 L17.5779,20.0852 L20.3769,17.2872 L18.3279,15.2392 C18.6989,14.6102 18.9839,13.9282 19.1709,13.2032 L22.0679,13.2032 Z',
                              fill: '#FFFFFF'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M22.0679,13.2032 L22.0679,9.2462 L19.1709,9.2462 C18.9839,8.5222 18.6989,7.8392 18.3279,7.2102 L20.3769,5.1622 L17.5779,2.3642 L15.5289,4.4122 C14.9009,4.0412 14.2179,3.7562 13.4939,3.5692 L13.4939,0.6722 L9.5369,0.6722 L9.5369,3.5692 C8.8129,3.7562 8.1299,4.0412 7.5009,4.4122 L5.4529,2.3642 L2.6539,5.1622 L4.7029,7.2102 C4.3319,7.8392 4.0469,8.5222 3.8599,9.2462 L0.9629,9.2462 L0.9629,13.2032 L3.8599,13.2032 C4.0469,13.9282 4.3319,14.6102 4.7029,15.2392 L2.6539,17.2872 L5.4529,20.0852 L7.5009,18.0372 C8.1299,18.4082 8.8129,18.6932 9.5369,18.8802 L9.5369,21.7772 L13.4939,21.7772 L13.4939,18.8802 C14.2179,18.6932 14.9009,18.4082 15.5289,18.0372 L17.5779,20.0852 L20.3769,17.2872 L18.3279,15.2392 C18.6989,14.6102 18.9839,13.9282 19.1709,13.2032 L22.0679,13.2032 Z',
                              stroke: '#222228',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M14.813,11.2247 C14.813,13.0457 13.336,14.5227 11.515,14.5227 C9.694,14.5227 8.218,13.0457 8.218,11.2247 C8.218,9.4037 9.694,7.9267 11.515,7.9267 C13.336,7.9267 14.813,9.4037 14.813,11.2247 Z',
                              stroke: '#EC5424',
                              strokeWidth: '1.5'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M31.2583,23.7403 L33.1543,24.0243 L33.5463,21.4113 L31.6623,21.1293 C31.6103,20.8243 31.5313,20.5213 31.4083,20.2233 C31.3003,19.9613 31.1663,19.7163 31.0143,19.4883 L32.1863,17.9923 L30.1053,16.3643 L28.9253,17.8703 C28.3753,17.6713 27.7863,17.5923 27.1883,17.6353 L26.4563,15.8633 L24.0143,16.8713 L24.7463,18.6443 C24.2903,19.0363 23.9273,19.5103 23.6773,20.0413 L21.7703,19.8053 L21.4453,22.4283 L23.3433,22.6623 C23.3973,22.9293 23.4733,23.1953 23.5813,23.4553 C23.7033,23.7513 23.8603,24.0203 24.0363,24.2713 L22.8933,25.8103 L25.0153,27.3853 L26.1633,25.8393 C26.6863,26.0143 27.2393,26.0843 27.8013,26.0433 L28.5423,27.8373 L30.9843,26.8283 L30.2443,25.0353 C30.6703,24.6693 31.0103,24.2303 31.2583,23.7403',
                              fill: '#FFFFFF'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M31.2583,23.7403 L33.1543,24.0243 L33.5463,21.4113 L31.6623,21.1293 C31.6103,20.8243 31.5313,20.5213 31.4083,20.2233 C31.3003,19.9613 31.1663,19.7163 31.0143,19.4883 L32.1863,17.9923 L30.1053,16.3643 L28.9253,17.8703 C28.3753,17.6713 27.7863,17.5923 27.1883,17.6353 L26.4563,15.8633 L24.0143,16.8713 L24.7463,18.6443 C24.2903,19.0363 23.9273,19.5103 23.6773,20.0413 L21.7703,19.8053 L21.4453,22.4283 L23.3433,22.6623 C23.3973,22.9293 23.4733,23.1953 23.5813,23.4553 C23.7033,23.7513 23.8603,24.0203 24.0363,24.2713 L22.8933,25.8103 L25.0153,27.3853 L26.1633,25.8393 C26.6863,26.0143 27.2393,26.0843 27.8013,26.0433 L28.5423,27.8373 L30.9843,26.8283 L30.2443,25.0353 C30.6703,24.6693 31.0103,24.2303 31.2583,23.7403 Z',
                              stroke: '#222228'
                            }),
                            r.default.createElement('path', {
                              d:
                                'M26.8218,20.2091 C25.9208,20.5811 25.4928,21.6121 25.8638,22.5131 C26.2368,23.4141 27.2678,23.8421 28.1688,23.4701 C29.0688,23.0991 29.4978,22.0671 29.1258,21.1661 C28.7538,20.2661 27.7218,19.8371 26.8218,20.2091 Z',
                              stroke: '#EC5424'
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      t.default = o;
    },
    function(e, t) {
      e.exports = {
        dropdown: '_1bIk',
        'is-open': '_2Ism',
        twoBlock: '_3j1_',
        platformDropdown: '_126L',
        solutionsDropdown: '_1gCd',
        whyDropdown: '_10Eu',
        developersDropdown: '_1xI2',
        'footer-list': '_14MM',
        'footer-highlight': '_1CvT'
      };
    },
    function(e, t) {
      e.exports = {
        baseHighlight: '_2Lw9',
        content: '_3gp2',
        title: '_3LEU',
        text: '_1FRt',
        link: '_1WsL',
        highlight: 'UAL6 _2Lw9',
        moreHighlight: '_2rad _2Lw9',
        'section-title': '_3vyR',
        time: '_1zTu'
      };
    },
    function(e, t) {
      e.exports = {
        dropdownList: '_3qAr',
        stackedList: '_2d8P',
        highlight: '_1ds1',
        twoColList: '__I0',
        twoColListBig: 'mPj3',
        moreDropdownList: 's_3k',
        'header-title': '_17RU',
        'section-title': '_1jg-',
        hasArrow: '_3a__',
        'section-description': 'fSWW',
        'multi-list': '_3VwG',
        'title-list': 'wkWT'
      };
    },
    function(e, t) {
      e.exports = {
        item: '_3v_7',
        singleItem: '_1ci6',
        icon: '_3bSm',
        text: '-gCQ',
        itemPrefix: '_1Ac8',
        arrowItem: '_1Z4r _3v_7',
        moreItem: '_3F2P'
      };
    },
    function(e, t) {
      e.exports = {
        featured: 'P2u8',
        'featured-content': 'pUyl',
        'featured-more': '_1SDn',
        'featured-title': 'tE1s',
        'featured-description': '_1Z0o',
        'close-notification': '_2DjR',
        notificationOpen: '_3YWg',
        dropdownOpen: 'y6Uj',
        'theme-light': '_1ymv',
        'featured-icon': 'm6uH'
      };
    },
    function(e, t) {
      e.exports = { 'footer-link': 'AjX7', icon: '_1l50', text: 'fFLa' };
    },
    function(e, t) {},
    function(e, t) {
      e.exports = {
        head: 'hCiq',
        'theme-dark': '_1gg_',
        logo: '_3yAY',
        dropdownOpen: '-S2z',
        brand: '_2uQu',
        toggleButton: '_1fl7',
        closeButton: '_1yKj',
        iconBar: '_1p6r',
        bounce: '_12jj'
      };
    },
    function(e, t) {
      e.exports = {
        item: '_2kF_',
        'simple-list': '_22dz',
        link: '_3BoP',
        text: '_23zg',
        'item-more': '_3C8p',
        'is-dropdown-open': '_31jh',
        'theme-dark': 'g13I',
        'item-caret': '_37hu',
        'dropdown-caret': '_2Oii',
        'item-why-auth0': '_2VGR',
        'item-developers': '_1r7x',
        'item-platform': '_1qTi',
        'item-solutions': 'hIvN'
      };
    },
    function(e, t) {
      e.exports = {
        'header-main': '_2qoY',
        'is-notification-open': '_2KWL',
        header: '_3TAQ',
        'theme-dark': '_3uJX',
        'theme-gray': '_2__8',
        'is-dropdown-open': '_3sHQ',
        menu: '_2IVQ',
        collapse: '_3scO',
        'main-navigation': '_3TmG',
        navigation: 'wixE',
        'buttons-group': '_2fCs',
        focusable: 'VXau',
        overflow: '_1AGc',
        'login-button': '_2Vg9',
        'login-button--dark': 'QN_e',
        'signup-button': '_3POG',
        'menu-mobile': '_1yjk'
      };
    },
    function(e, t) {
      e.exports = [
        {
          link: 'https://resources.auth0.com/forrester-tei-research-case-study/',
          title: 'Total Economic Impact of Auth0',
          description:
            'Using our platform can yield a 548% ROI and $3.7M in identity-related savings.',
          cta: 'Read the Forrester report',
          iconColor: '#eb5424',
          probability: 0.85
        },
        {
          link: 'http://auth0.com/jobs#job-openings',
          title: 'We are hiring!',
          description:
            'If you care deeply about quality, teamwork, and want to build software that people love.',
          cta: 'Join Us!',
          iconColor: '#eb5424',
          probability: 0.15
        },
        {
          link: 'https://auth0.com/ambassador-program',
          title: 'Auth0 Ambassador Program.',
          description: 'Make the internet safer by empowering developers in your community.',
          cta: 'Join the Mission!',
          iconColor: '#eb5424',
          probability: 0
        }
      ];
    },
    function(e, t) {
      e.exports = [
        {
          name: 'Platform',
          id: 'platform',
          dropdownClass: 'platformDropdown',
          childrens: [
            {
              componentType: 'list',
              title: 'Modern Identity Platform',
              description: 'The enterprise-grade platform for modern identity.',
              key: 'platform-list',
              twoColLayoutBig: !0,
              items: [
                {
                  name: 'User Management',
                  description:
                    'The simplest and easiest to use tools to help administrators manage users.',
                  id: 'user-management',
                  href: 'https://auth0.com/user-management',
                  icon: 'userManagement'
                },
                {
                  name: 'Passwordless',
                  description: 'Allow users to login without the need to remember a password.',
                  id: 'passwordless',
                  href: 'https://auth0.com/passwordless',
                  icon: 'passwordless'
                },
                {
                  name: 'Lock',
                  description: 'The Auth0 Login Box. Secure your websites and mobile apps.',
                  id: 'lock',
                  href: 'https://auth0.com/lock',
                  icon: 'lock'
                },
                {
                  name: 'Breached Passwords Detection',
                  description: 'Protect your users and services from password leaks.',
                  id: 'breached-passwords',
                  href: 'https://auth0.com/breached-passwords',
                  icon: 'breached'
                },
                {
                  name: 'Multifactor Authentication',
                  description:
                    'The most usable and friction-free multifactor authentication experience.',
                  id: 'guardian',
                  href: 'https://auth0.com/multifactor-authentication',
                  icon: 'multifactor'
                }
              ]
            }
          ],
          footerHighlight: !0,
          footerLinks: [
            {
              id: 'read-case-studies',
              name:
                '<span>Introducing Auth0 Extend:</span> Better platform extensibility for your SaaS.',
              href: 'https://auth0.com/extend',
              icon: 'extend',
              external: !0
            }
          ]
        },
        {
          name: 'Solutions',
          id: 'solutions',
          dropdownClass: 'solutionsDropdown',
          twoBlockLayout: !0,
          childrens: [
            {
              componentType: 'list',
              title: 'Use Cases',
              key: 'use-cases-list',
              stackedList: !0,
              items: [
                {
                  name: 'For your Customers',
                  customClass: 'solutionsItem-b2c',
                  icon: 'ciam',
                  id: 'ciam',
                  href: 'https://auth0.com/b2c-customer-identity-management',
                  alt: 'CIAM icon'
                },
                {
                  name: 'For your Business Partners',
                  customClass: 'solutionsItem-b2b',
                  icon: 'b2b',
                  id: 'b2b',
                  href: 'https://auth0.com/b2b-enterprise-identity-management',
                  alt: 'B2B icon'
                },
                {
                  name: 'For your Employees',
                  customClass: 'solutionsItem-b2e',
                  icon: 'b2e',
                  id: 'b2e',
                  href: 'https://auth0.com/b2e-identity-management-for-employees',
                  alt: 'B2E icon'
                }
              ]
            },
            {
              componentType: 'list',
              title: 'Use Auth0 in',
              key: 'solutions-list',
              highlight: !0,
              subItems: [
                {
                  titleList: 'INDUSTRIES',
                  items: [
                    {
                      name: 'B2B SaaS',
                      id: 'b2b-saas',
                      href: 'https://auth0.com/b2b-saas',
                      external: !0
                    },
                    {
                      name: 'Financial Services',
                      id: 'financial-services',
                      href: 'https://auth0.com/learn/finserv',
                      external: !0
                    },
                    {
                      name: 'Healthcare',
                      id: 'healthcare',
                      href: 'https://auth0.com/learn/healthcare/',
                      external: !0
                    },
                    {
                      name: 'Media',
                      id: 'media',
                      href: 'https://auth0.com/learn/media',
                      external: !0
                    },
                    {
                      name: 'Retail',
                      id: 'retail',
                      href: 'https://auth0.com/retail',
                      external: !0
                    },
                    {
                      name: 'Telecommunications',
                      id: 'telecommunications',
                      href: 'https://auth0.com/learn/telecommunications-industry',
                      external: !0
                    }
                  ]
                },
                {
                  titleList: 'INITIATIVES',
                  items: [
                    {
                      name: 'App Modernization',
                      id: 'app-modernization',
                      href: 'https://auth0.com/app-modernization',
                      external: !0
                    },
                    {
                      name: 'GDPR',
                      id: 'gdpr-blog',
                      href: 'https://auth0.com/blog/get-ready-for-gdpr/',
                      external: !0
                    }
                  ]
                }
              ]
            }
          ],
          footerLinks: [
            {
              id: 'read-case-studies',
              name: 'Read our Case Studies',
              href: 'https://auth0.com/learn/#case-studies',
              icon: 'blog',
              external: !0
            }
          ]
        },
        {
          name: 'Why Auth0',
          id: 'why-auth0',
          dropdownClass: 'whyDropdown',
          twoBlockLayout: !0,
          childrens: [
            {
              componentType: 'list',
              title: 'Company',
              key: 'company-list',
              items: [
                { name: 'About Us', id: 'about-us', href: 'https://auth0.com/about' },
                { name: 'Customers', id: 'customers', href: 'https://auth0.com/customers' },
                {
                  name: 'Security, Privacy & Compliance',
                  id: 'security',
                  href: 'https://auth0.com/security'
                },
                {
                  name: 'High Availability',
                  id: 'availability',
                  href: 'https://auth0.com/availability-trust'
                },
                { name: 'Careers', id: 'careers', href: 'https://auth0.com/jobs' },
                { name: 'Press', id: 'press', href: 'https://auth0.com/press' }
              ]
            },
            {
              componentType: 'list',
              title: 'Resources',
              key: 'resources-list',
              highlight: !0,
              titleHref: 'https://auth0.com/resources',
              external: !0,
              items: [
                {
                  name: 'Whitepapers',
                  id: 'whitepapers',
                  href: 'https://auth0.com/resources/whitepapers',
                  external: !0
                },
                {
                  name: 'Videos',
                  id: 'videos',
                  href: 'https://auth0.com/resources/videos',
                  external: !0
                },
                {
                  name: 'Ebooks',
                  id: 'ebooks',
                  href: 'https://auth0.com/resources/ebooks',
                  external: !0
                },
                { name: 'Blog', id: 'blog', href: 'https://auth0.com/blog/business', external: !0 },
                { name: 'Webinars', id: 'webinar', href: 'https://auth0.com/resources/webinars' },
                {
                  name: 'Case Studies',
                  id: 'case-studies',
                  href: 'https://auth0.com/learn/#case-studies',
                  external: !0
                }
              ]
            }
          ]
        },
        {
          name: 'Developers',
          id: 'developers',
          dropdownClass: 'developersDropdown',
          twoBlockLayout: !0,
          childrens: [
            {
              componentType: 'list',
              title: 'Documentation',
              key: 'documentation-list',
              titleHref: 'https://auth0.com/docs',
              external: !0,
              subItems: [
                {
                  titleList: 'GET STARTED',
                  items: [
                    {
                      name: 'Javascript',
                      id: 'javascript',
                      href: 'https://auth0.com/docs/quickstart/spa/vanillajs',
                      icon: 'javascript',
                      external: !0
                    },
                    {
                      name: 'iOS',
                      id: 'ios',
                      href: 'https://auth0.com/docs/quickstart/native/ios-swift',
                      icon: 'ios',
                      external: !0
                    },
                    {
                      name: 'Android',
                      id: 'android',
                      href: 'https://auth0.com/docs/quickstart/native/android',
                      icon: 'android',
                      external: !0
                    },
                    {
                      name: 'All Quickstarts',
                      id: 'all-quickstarts',
                      href: 'https://auth0.com/docs/quickstart',
                      icon: 'quickstarts',
                      external: !0
                    }
                  ]
                },
                {
                  titleList: 'SECTIONS',
                  items: [
                    { name: 'APIs', id: 'apis', href: 'https://auth0.com/docs/api', external: !0 },
                    {
                      name: 'Protocols',
                      id: 'protocols',
                      href: 'https://auth0.com/docs/protocols',
                      external: !0
                    },
                    {
                      name: 'Libraries',
                      id: 'libraries',
                      href: 'https://auth0.com/docs/libraries',
                      external: !0
                    },
                    {
                      name: 'Identity Providers',
                      id: 'identity-providers',
                      href: 'https://auth0.com/docs/identityproviders',
                      external: !0
                    }
                  ]
                }
              ]
            },
            {
              componentType: 'list',
              title: 'Resources',
              key: 'resources-list',
              highlight: !0,
              items: [
                { name: 'Open Source', id: 'open-source', href: 'https://auth0.com/opensource' },
                { name: 'Community', id: 'community', href: 'https://community.auth0.com/' },
                {
                  name: 'Auth0 Blog',
                  id: 'blog-tech',
                  href: 'https://auth0.com/blog/tech/',
                  external: !0
                },
                { name: 'Knowledge Base', id: 'knowledge-base', href: 'https://auth0.com/learn' },
                {
                  name: 'Identity Glossary',
                  id: 'indentity-glossaryt',
                  href: 'https://auth0.com/identity-glossary'
                }
              ]
            }
          ],
          footerLinks: [
            {
              id: 'latest-blog',
              name: '<b>Latest from Auth0 Blog:</b> ',
              icon: 'blog',
              external: !0
            }
          ]
        },
        { name: 'Pricing', id: 'pricing', href: 'https://auth0.com/pricing' }
      ];
    },
    function(e, t) {
      e.exports = [
        { name: 'About Us', id: 'about-us', href: 'https://auth0.com/about' },
        { name: 'Customers', id: 'customers', href: 'https://auth0.com/customers' },
        { name: 'Blog', id: 'blog', href: 'https://auth0.com/blog' },
        { name: 'Case Studies', id: 'case-studies', href: 'https://auth0.com/learn/#case-studies' },
        { name: 'Press Releases', id: 'press-releases', href: 'https://auth0.com/press' },
        { name: 'Documentation', id: 'documentation', href: 'https://auth0.com/docs' },
        { name: 'Resources', id: 'resources', href: 'https://auth0.com/resources' },
        { name: 'Support', id: 'support', href: 'https://support.auth0.com/' },
        { name: 'Security', id: 'security', href: 'https://auth0.com/security' },
        { name: 'Careers', id: 'careers', href: 'https://auth0.com/jobs' }
      ];
    },
    function(e, t) {
      e.exports = require('axios');
    },
    function(e, t) {
      e.exports = require('classnames');
    },
    function(e, t) {
      e.exports = require('lodash');
    },
    function(e, t, n) {
      e.exports = n(6);
    }
  ]);
});
//# sourceMappingURL=web-header.js.map
