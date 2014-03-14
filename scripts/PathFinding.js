!function (t) {
	if ("function" == typeof bootstrap)
		bootstrap("pf", t);
	else if ("object" == typeof exports)
		module.exports = t();
	else if ("function" == typeof define && define.amd)
		define(t);
	else if ("undefined" != typeof ses) {
		if (!ses.ok())
			return;
		ses.makePF = t
	} else
		"undefined" != typeof window ? window.PF = t() : global.PF = t()
}
(function () {
	return function (t, e, r) {
		function n(r, o) {
			if (!e[r]) {
				if (!t[r]) {
					var s = "function" == typeof require && require;
					if (!o && s)
						return s(r, !0);
					if (i)
						return i(r, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
				var a = e[r] = {
					exports : {}

				};
				t[r][0].call(a.exports, function (e) {
					var i = t[r][1][e];
					return n(i ? i : e)
				}, a, a.exports)
			}
			return e[r].exports
		}
		for (var i = "function" == typeof require && require, o = 0; o < r.length; o++)
			n(r[o]);
		return n
	}
	({
		1 : [function (t, e) {
				e.exports = t("./lib/heap")
			}, {
				"./lib/heap" : 2
			}
		],
		2 : [function (t, e) {
				!function () {
					var t,
					r,
					n,
					i,
					o,
					s,
					a,
					u,
					h,
					p,
					l,
					c,
					f,
					d,
					g;
					n = Math.floor,
					p = Math.min,
					r = function (t, e) {
						return e > t ? -1 : t > e ? 1 : 0
					},
					h = function (t, e, i, o, s) {
						var a;
						if (null == i && (i = 0), null == s && (s = r), 0 > i)
							throw new Error("lo must be non-negative");
						for (null == o && (o = t.length); o > i; )
							a = n((i + o) / 2), s(e, t[a]) < 0 ? o = a : i = a + 1;
						return [].splice.apply(t, [i, i - i].concat(e)),
						e
					},
					s = function (t, e, n) {
						return null == n && (n = r),
						t.push(e),
						d(t, 0, t.length - 1, n)
					},
					o = function (t, e) {
						var n,
						i;
						return null == e && (e = r),
						n = t.pop(),
						t.length ? (i = t[0], t[0] = n, g(t, 0, e)) : i = n,
						i
					},
					u = function (t, e, n) {
						var i;
						return null == n && (n = r),
						i = t[0],
						t[0] = e,
						g(t, 0, n),
						i
					},
					a = function (t, e, n) {
						var i;
						return null == n && (n = r),
						t.length && n(t[0], e) < 0 && (i = [t[0], e], e = i[0], t[0] = i[1], g(t, 0, n)),
						e
					},
					i = function (t, e) {
						var i,
						o,
						s,
						a,
						u,
						h;
						for (null == e && (e = r), a = function () {
							h = [];
							for (var e = 0, r = n(t.length / 2); r >= 0 ? r > e : e > r; r >= 0 ? e++ : e--)
								h.push(e);
								return h
							}
								.apply(this).reverse(), u = [], o = 0, s = a.length; s > o; o++)i = a[o], u.push(g(t, i, e));
						return u
					},
					f = function (t, e, n) {
						var i;
						return null == n && (n = r),
						i = t.indexOf(e),
						-1 !== i ? (d(t, 0, i, n), g(t, i, n)) : void 0
					},
					l = function (t, e, n) {
						var o,
						s,
						u,
						h,
						p;
						if (null == n && (n = r), s = t.slice(0, e), !s.length)
							return s;
						for (i(s, n), p = t.slice(e), u = 0, h = p.length; h > u; u++)
							o = p[u], a(s, o, n);
						return s.sort(n).reverse()
					},
					c = function (t, e, n) {
						var s,
						a,
						u,
						l,
						c,
						f,
						d,
						g,
						y,
						b;
						if (null == n && (n = r), 10 * e <= t.length) {
							if (l = t.slice(0, e).sort(n), !l.length)
								return l;
							for (u = l[l.length - 1], g = t.slice(e), c = 0, d = g.length; d > c; c++)
								s = g[c], n(s, u) < 0 && (h(l, s, 0, null, n), l.pop(), u = l[l.length - 1]);
							return l
						}
						for (i(t, n), b = [], a = f = 0, y = p(e, t.length); y >= 0 ? y > f : f > y; a = y >= 0 ? ++f : --f)
							b.push(o(t, n));
						return b
					},
					d = function (t, e, n, i) {
						var o,
						s,
						a;
						for (null == i && (i = r), o = t[n]; n > e && (a = n - 1 >> 1, s = t[a], i(o, s) < 0); )
							t[n] = s, n = a;
						return t[n] = o
					},
					g = function (t, e, n) {
						var i,
						o,
						s,
						a,
						u;
						for (null == n && (n = r), o = t.length, u = e, s = t[e], i = 2 * e + 1; o > i; )
							a = i + 1, o > a && !(n(t[i], t[a]) < 0) && (i = a), t[e] = t[i], e = i, i = 2 * e + 1;
						return t[e] = s,
						d(t, u, e, n)
					},
					t = function () {
						function t(t) {
							this.cmp = null != t ? t : r,
							this.nodes = []
						}
						return t.push = s,
						t.pop = o,
						t.replace = u,
						t.pushpop = a,
						t.heapify = i,
						t.nlargest = l,
						t.nsmallest = c,
						t.prototype.push = function (t) {
							return s(this.nodes, t, this.cmp)
						},
						t.prototype.pop = function () {
							return o(this.nodes, this.cmp)
						},
						t.prototype.peek = function () {
							return this.nodes[0]
						},
						t.prototype.contains = function (t) {
							return -1 !== this.nodes.indexOf(t)
						},
						t.prototype.replace = function (t) {
							return u(this.nodes, t, this.cmp)
						},
						t.prototype.pushpop = function (t) {
							return a(this.nodes, t, this.cmp)
						},
						t.prototype.heapify = function () {
							return i(this.nodes, this.cmp)
						},
						t.prototype.updateItem = function (t) {
							return f(this.nodes, t, this.cmp)
						},
						t.prototype.clear = function () {
							return this.nodes = []
						},
						t.prototype.empty = function () {
							return 0 === this.nodes.length
						},
						t.prototype.size = function () {
							return this.nodes.length
						},
						t.prototype.clone = function () {
							var e;
							return e = new t,
							e.nodes = this.nodes.slice(0),
							e
						},
						t.prototype.toArray = function () {
							return this.nodes.slice(0)
						},
						t.prototype.insert = t.prototype.push,
						t.prototype.remove = t.prototype.pop,
						t.prototype.top = t.prototype.peek,
						t.prototype.front = t.prototype.peek,
						t.prototype.has = t.prototype.contains,
						t.prototype.copy = t.prototype.clone,
						t
					}
					(),
					("undefined" != typeof e && null !== e ? e.exports : void 0) ? e.exports = t : window.Heap = t
				}
				.call(this)
			}, {}

		],
		3 : [function (t, e) {
				e.exports = {
					Heap : t("heap"),
					Node : t("./core/Node"),
					Grid : t("./core/Grid"),
					Util : t("./core/Util"),
					Heuristic : t("./core/Heuristic"),
					AStarFinder : t("./finders/AStarFinder"),
					BestFirstFinder : t("./finders/BestFirstFinder"),
					BreadthFirstFinder : t("./finders/BreadthFirstFinder"),
					DijkstraFinder : t("./finders/DijkstraFinder"),
					BiAStarFinder : t("./finders/BiAStarFinder"),
					BiBestFirstFinder : t("./finders/BiBestFirstFinder"),
					BiBreadthFirstFinder : t("./finders/BiBreadthFirstFinder"),
					BiDijkstraFinder : t("./finders/BiDijkstraFinder"),
					JumpPointFinder : t("./finders/JumpPointFinder"),
					IDAStarFinder : t("./finders/IDAStarFinder")
				}
			}, {
				"./core/Grid" : 4,
				"./core/Heuristic" : 5,
				"./core/Node" : 6,
				"./core/Util" : 7,
				"./finders/AStarFinder" : 8,
				"./finders/BestFirstFinder" : 9,
				"./finders/BiAStarFinder" : 10,
				"./finders/BiBestFirstFinder" : 11,
				"./finders/BiBreadthFirstFinder" : 12,
				"./finders/BiDijkstraFinder" : 13,
				"./finders/BreadthFirstFinder" : 14,
				"./finders/DijkstraFinder" : 15,
				"./finders/IDAStarFinder" : 16,
				"./finders/JumpPointFinder" : 17,
				heap : 1
			}
		],
		4 : [function (t, e) {
				function r(t, e, r) {
					this.width = t,
					this.height = e,
					this.nodes = this._buildNodes(t, e, r)
				}
				var n = t("./Node");
				r.prototype._buildNodes = function (t, e, r) {
					var i,
					o,
					s = new Array(e);
					for (i = 0; e > i; ++i)
						for (s[i] = new Array(t), o = 0; t > o; ++o)
							s[i][o] = new n(o, i);
					if (void 0 === r)
						return s;
					if (r.length !== e || r[0].length !== t)
						throw new Error("Matrix size does not fit");
					for (i = 0; e > i; ++i)
						for (o = 0; t > o; ++o)
							r[i][o] && (s[i][o].walkable = !1);
					return s
				},
				r.prototype.getNodeAt = function (t, e) {
					return this.nodes[e][t]
				},
				r.prototype.isWalkableAt = function (t, e) {
					return this.isInside(t, e) && this.nodes[e][t].walkable
				},
				r.prototype.isInside = function (t, e) {
					return t >= 0 && t < this.width && e >= 0 && e < this.height
				},
				r.prototype.setWalkableAt = function (t, e, r) {
					this.nodes[e][t].walkable = r
				},
				r.prototype.getNeighbors = function (t, e, r) {
					var n = t.x,
					i = t.y,
					o = [],
					s = !1,
					a = !1,
					u = !1,
					h = !1,
					p = !1,
					l = !1,
					c = !1,
					f = !1,
					d = this.nodes;
					return this.isWalkableAt(n, i - 1) && (o.push(d[i - 1][n]), s = !0),
					this.isWalkableAt(n + 1, i) && (o.push(d[i][n + 1]), u = !0),
					this.isWalkableAt(n, i + 1) && (o.push(d[i + 1][n]), p = !0),
					this.isWalkableAt(n - 1, i) && (o.push(d[i][n - 1]), c = !0),
					e ? (r ? (a = c && s, h = s && u, l = u && p, f = p && c) : (a = c || s, h = s || u, l = u || p, f = p || c), a && this.isWalkableAt(n - 1, i - 1) && o.push(d[i - 1][n - 1]), h && this.isWalkableAt(n + 1, i - 1) && o.push(d[i - 1][n + 1]), l && this.isWalkableAt(n + 1, i + 1) && o.push(d[i + 1][n + 1]), f && this.isWalkableAt(n - 1, i + 1) && o.push(d[i + 1][n - 1]), o) : o
				},
				r.prototype.clone = function () {
					var t,
					e,
					i = this.width,
					o = this.height,
					s = this.nodes,
					a = new r(i, o),
					u = new Array(o);
					for (t = 0; o > t; ++t)
						for (u[t] = new Array(i), e = 0; i > e; ++e)
							u[t][e] = new n(e, t, s[t][e].walkable);
					return a.nodes = u,
					a
				},
				e.exports = r
			}, {
				"./Node" : 6
			}
		],
		5 : [function (t, e) {
				e.exports = {
					manhattan : function (t, e) {
						return t + e
					},
					euclidean : function (t, e) {
						return Math.sqrt(t * t + e * e)
					},
					chebyshev : function (t, e) {
						return Math.max(t, e)
					}
				}
			}, {}

		],
		6 : [function (t, e) {
				function r(t, e, r) {
					this.x = t,
					this.y = e,
					this.walkable = void 0 === r ? !0 : r
				}
				e.exports = r
			}, {}

		],
		7 : [function (t, e, r) {
				function n(t) {
					for (var e = [[t.x, t.y]]; t.parent; )
						t = t.parent, e.push([t.x, t.y]);
					return e.reverse()
				}
				function i(t, e) {
					var r = n(t),
					i = n(e);
					return r.concat(i.reverse())
				}
				function o(t) {
					var e,
					r,
					n,
					i,
					o,
					s = 0;
					for (e = 1; e < t.length; ++e)
						r = t[e - 1], n = t[e], i = r[0] - n[0], o = r[1] - n[1], s += Math.sqrt(i * i + o * o);
					return s
				}
				function s(t, e, r, n) {
					var i,
					o,
					s,
					a,
					u,
					h,
					p = Math.abs,
					l = [];
					for (s = p(r - t), a = p(n - e), i = r > t ? 1 : -1, o = n > e ? 1 : -1, u = s - a; ; ) {
						if (l.push([t, e]), t === r && e === n)
							break;
						h = 2 * u,
						h > -a && (u -= a, t += i),
						s > h && (u += s, e += o)
					}
					return l
				}
				function a(t) {
					var e,
					r,
					n,
					i,
					o,
					a,
					u = [],
					h = t.length;
					if (2 > h)
						return u;
					for (o = 0; h - 1 > o; ++o)
						for (e = t[o], r = t[o + 1], n = s(e[0], e[1], r[0], r[1]), i = n.length, a = 0; i - 1 > a; ++a)
							u.push(n[a]);
					return u.push(t[h - 1]),
					u
				}
				function u(t, e) {
					var r,
					n,
					i,
					o,
					a,
					u,
					h,
					p,
					l,
					c,
					f,
					d,
					g,
					y = e.length,
					b = e[0][0],
					A = e[0][1],
					k = e[y - 1][0],
					w = e[y - 1][1];
					for (r = b, n = A, a = e[1][0], u = e[1][1], h = [[r, n]], p = 2; y > p; ++p) {
						for (c = e[p], i = c[0], o = c[1], f = s(r, n, i, o), g = !1, l = 1; l < f.length; ++l)
							if (d = f[l], !t.isWalkableAt(d[0], d[1])) {
								g = !0,
								h.push([a, u]),
								r = a,
								n = u;
								break
							}
						g || (a = i, u = o)
					}
					return h.push([k, w]),
					h
				}
				r.backtrace = n,
				r.biBacktrace = i,
				r.pathLength = o,
				r.interpolate = s,
				r.expandPath = a,
				r.smoothenPath = u
			}, {}

		],
		8 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.allowDiagonal = t.allowDiagonal,
					this.dontCrossCorners = t.dontCrossCorners,
					this.heuristic = t.heuristic || o.manhattan,
					this.weight = t.weight || 1
				}
				var n = t("heap"),
				i = t("../core/Util"),
				o = t("../core/Heuristic");
				r.prototype.findPath = function (t, e, r, o, s) {
					var a,
					u,
					h,
					p,
					l,
					c,
					f,
					d,
					g = new n(function (t, e) {
							return t.f - e.f
						}),
					y = s.getNodeAt(t, e),
					b = s.getNodeAt(r, o),
					A = this.heuristic,
					k = this.allowDiagonal,
					w = this.dontCrossCorners,
					v = this.weight,
					m = Math.abs,
					x = Math.SQRT2;
					for (y.g = 0, y.f = 0, g.push(y), y.opened = !0; !g.empty(); ) {
						if (a = g.pop(), a.closed = !0, a === b)
							return i.backtrace(b);
						for (u = s.getNeighbors(a, k, w), p = 0, l = u.length; l > p; ++p)
							h = u[p], h.closed || (c = h.x, f = h.y, d = a.g + (0 === c - a.x || 0 === f - a.y ? 1 : x), (!h.opened || d < h.g) && (h.g = d, h.h = h.h || v * A(m(c - r), m(f - o)), h.f = h.g + h.h, h.parent = a, h.opened ? g.updateItem(h) : (g.push(h), h.opened = !0)))
					}
					return []
				},
				e.exports = r
			}, {
				"../core/Heuristic" : 5,
				"../core/Util" : 7,
				heap : 1
			}
		],
		9 : [function (t, e) {
				function r(t) {
					n.call(this, t);
					var e = this.heuristic;
					this.heuristic = function (t, r) {
						return 1e6 * e(t, r)
					}
				}
				var n = t("./AStarFinder");
				r.prototype = new n,
				r.prototype.constructor = r,
				e.exports = r
			}, {
				"./AStarFinder" : 8
			}
		],
		10 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.allowDiagonal = t.allowDiagonal,
					this.dontCrossCorners = t.dontCrossCorners,
					this.heuristic = t.heuristic || o.manhattan,
					this.weight = t.weight || 1
				}
				var n = t("heap"),
				i = t("../core/Util"),
				o = t("../core/Heuristic");
				r.prototype.findPath = function (t, e, r, o, s) {
					var a,
					u,
					h,
					p,
					l,
					c,
					f,
					d,
					g = function (t, e) {
						return t.f - e.f
					},
					y = new n(g),
					b = new n(g),
					A = s.getNodeAt(t, e),
					k = s.getNodeAt(r, o),
					w = this.heuristic,
					v = this.allowDiagonal,
					m = this.dontCrossCorners,
					x = this.weight,
					F = Math.abs,
					W = Math.SQRT2,
					N = 1,
					C = 2;
					for (A.g = 0, A.f = 0, y.push(A), A.opened = N, k.g = 0, k.f = 0, b.push(k), k.opened = C; !y.empty() && !b.empty(); ) {
						for (a = y.pop(), a.closed = !0, u = s.getNeighbors(a, v, m), p = 0, l = u.length; l > p; ++p)
							if (h = u[p], !h.closed) {
								if (h.opened === C)
									return i.biBacktrace(a, h);
								c = h.x,
								f = h.y,
								d = a.g + (0 === c - a.x || 0 === f - a.y ? 1 : W),
								(!h.opened || d < h.g) && (h.g = d, h.h = h.h || x * w(F(c - r), F(f - o)), h.f = h.g + h.h, h.parent = a, h.opened ? y.updateItem(h) : (y.push(h), h.opened = N))
							}
						for (a = b.pop(), a.closed = !0, u = s.getNeighbors(a, v, m), p = 0, l = u.length; l > p; ++p)
							if (h = u[p], !h.closed) {
								if (h.opened === N)
									return i.biBacktrace(h, a);
								c = h.x,
								f = h.y,
								d = a.g + (0 === c - a.x || 0 === f - a.y ? 1 : W),
								(!h.opened || d < h.g) && (h.g = d, h.h = h.h || x * w(F(c - t), F(f - e)), h.f = h.g + h.h, h.parent = a, h.opened ? b.updateItem(h) : (b.push(h), h.opened = C))
							}
					}
					return []
				},
				e.exports = r
			}, {
				"../core/Heuristic" : 5,
				"../core/Util" : 7,
				heap : 1
			}
		],
		11 : [function (t, e) {
				function r(t) {
					n.call(this, t);
					var e = this.heuristic;
					this.heuristic = function (t, r) {
						return 1e6 * e(t, r)
					}
				}
				var n = t("./BiAStarFinder");
				r.prototype = new n,
				r.prototype.constructor = r,
				e.exports = r
			}, {
				"./BiAStarFinder" : 10
			}
		],
		12 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.allowDiagonal = t.allowDiagonal,
					this.dontCrossCorners = t.dontCrossCorners
				}
				var n = t("../core/Util");
				r.prototype.findPath = function (t, e, r, i, o) {
					var s,
					a,
					u,
					h,
					p,
					l = o.getNodeAt(t, e),
					c = o.getNodeAt(r, i),
					f = [],
					d = [],
					g = this.allowDiagonal,
					y = this.dontCrossCorners,
					b = 0,
					A = 1;
					for (f.push(l), l.opened = !0, l.by = b, d.push(c), c.opened = !0, c.by = A; f.length && d.length; ) {
						for (u = f.shift(), u.closed = !0, s = o.getNeighbors(u, g, y), h = 0, p = s.length; p > h; ++h)
							if (a = s[h], !a.closed)
								if (a.opened) {
									if (a.by === A)
										return n.biBacktrace(u, a)
								} else
									f.push(a), a.parent = u, a.opened = !0, a.by = b;
						for (u = d.shift(), u.closed = !0, s = o.getNeighbors(u, g, y), h = 0, p = s.length; p > h; ++h)
							if (a = s[h], !a.closed)
								if (a.opened) {
									if (a.by === b)
										return n.biBacktrace(a, u)
								} else
									d.push(a), a.parent = u, a.opened = !0, a.by = A
					}
					return []
				},
				e.exports = r
			}, {
				"../core/Util" : 7
			}
		],
		13 : [function (t, e) {
				function r(t) {
					n.call(this, t),
					this.heuristic = function () {
						return 0
					}
				}
				var n = t("./BiAStarFinder");
				r.prototype = new n,
				r.prototype.constructor = r,
				e.exports = r
			}, {
				"./BiAStarFinder" : 10
			}
		],
		14 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.allowDiagonal = t.allowDiagonal,
					this.dontCrossCorners = t.dontCrossCorners
				}
				var n = t("../core/Util");
				r.prototype.findPath = function (t, e, r, i, o) {
					var s,
					a,
					u,
					h,
					p,
					l = [],
					c = this.allowDiagonal,
					f = this.dontCrossCorners,
					d = o.getNodeAt(t, e),
					g = o.getNodeAt(r, i);
					for (l.push(d), d.opened = !0; l.length; ) {
						if (u = l.shift(), u.closed = !0, u === g)
							return n.backtrace(g);
						for (s = o.getNeighbors(u, c, f), h = 0, p = s.length; p > h; ++h)
							a = s[h], a.closed || a.opened || (l.push(a), a.opened = !0, a.parent = u)
					}
					return []
				},
				e.exports = r
			}, {
				"../core/Util" : 7
			}
		],
		15 : [function (t, e) {
				function r(t) {
					n.call(this, t),
					this.heuristic = function () {
						return 0
					}
				}
				var n = t("./AStarFinder");
				r.prototype = new n,
				r.prototype.constructor = r,
				e.exports = r
			}, {
				"./AStarFinder" : 8
			}
		],
		16 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.allowDiagonal = t.allowDiagonal,
					this.dontCrossCorners = t.dontCrossCorners,
					this.heuristic = t.heuristic || n.manhattan,
					this.weight = t.weight || 1,
					this.trackRecursion = t.trackRecursion || !1,
					this.timeLimit = t.timeLimit || 1 / 0
				}
				t("../core/Util");
				var n = t("../core/Heuristic"),
				i = t("../core/Node");
				r.prototype.findPath = function (t, e, r, n, o) {
					var s,
					a,
					u,
					h = 0,
					p = (new Date).getTime(),
					l = function (t, e) {
						return this.heuristic(Math.abs(e.x - t.x), Math.abs(e.y - t.y))
					}
					.bind(this),
					c = function (t, e) {
						return t.x === e.x || t.y === e.y ? 1 : Math.SQRT2
					},
					f = function (t, e, r, n, s) {
						if (h++, this.timeLimit > 0 && (new Date).getTime() - p > 1e3 * this.timeLimit)
							return 1 / 0;
						var a = e + l(t, g) * this.weight;
						if (a > r)
							return a;
						if (t == g)
							return n[s] = [t.x, t.y], t;
						var u,
						d,
						y,
						b,
						A = o.getNeighbors(t, this.allowDiagonal, this.dontCrossCorners);
						for (y = 0, u = 1 / 0; b = A[y]; ++y) {
							if (this.trackRecursion && (b.retainCount = b.retainCount + 1 || 1, b.tested !== !0 && (b.tested = !0)), d = f(b, e + c(t, b), r, n, s + 1), d instanceof i)
								return n[s] = [t.x, t.y], d;
							this.trackRecursion && 0 === --b.retainCount && (b.tested = !1),
							u > d && (u = d)
						}
						return u
					}
					.bind(this),
					d = o.getNodeAt(t, e),
					g = o.getNodeAt(r, n),
					y = l(d, g);
					for (s = 0; !0; ++s) {
						if (a = [], u = f(d, 0, y, a, 0), 1 / 0 === u)
							return [];
						if (u instanceof i)
							return a;
						y = u
					}
					return []
				},
				e.exports = r
			}, {
				"../core/Heuristic" : 5,
				"../core/Node" : 6,
				"../core/Util" : 7
			}
		],
		17 : [function (t, e) {
				function r(t) {
					t = t || {},
					this.heuristic = t.heuristic || o.manhattan,
					this.trackJumpRecursion = t.trackJumpRecursion || !1
				}
				var n = t("heap"),
				i = t("../core/Util"),
				o = t("../core/Heuristic");
				r.prototype.findPath = function (t, e, r, o, s) {
					var a,
					u = this.openList = new n(function (t, e) {
							return t.f - e.f
						}),
					h = this.startNode = s.getNodeAt(t, e),
					p = this.endNode = s.getNodeAt(r, o);
					for (this.grid = s, h.g = 0, h.f = 0, u.push(h), h.opened = !0; !u.empty(); ) {
						if (a = u.pop(), a.closed = !0, a === p)
							return i.expandPath(i.backtrace(p));
						this._identifySuccessors(a)
					}
					return []
				},
				r.prototype._identifySuccessors = function (t) {
					var e,
					r,
					n,
					i,
					s,
					a,
					u,
					h,
					p,
					l,
					c = this.grid,
					f = this.heuristic,
					d = this.openList,
					g = this.endNode.x,
					y = this.endNode.y,
					b = t.x,
					A = t.y,
					k = Math.abs;
					for (Math.max, e = this._findNeighbors(t), i = 0, s = e.length; s > i; ++i)
						if (r = e[i], n = this._jump(r[0], r[1], b, A)) {
							if (a = n[0], u = n[1], l = c.getNodeAt(a, u), l.closed)
								continue;
							h = o.euclidean(k(a - b), k(u - A)),
							p = t.g + h,
							(!l.opened || p < l.g) && (l.g = p, l.h = l.h || f(k(a - g), k(u - y)), l.f = l.g + l.h, l.parent = t, l.opened ? d.updateItem(l) : (d.push(l), l.opened = !0))
						}
				},
				r.prototype._jump = function (t, e, r, n) {
					var i,
					o,
					s = this.grid,
					a = t - r,
					u = e - n;
					if (!s.isWalkableAt(t, e))
						return null;
					if (this.trackJumpRecursion === !0 && (s.getNodeAt(t, e).tested = !0), s.getNodeAt(t, e) === this.endNode)
						return [t, e];
					if (0 !== a && 0 !== u) {
						if (s.isWalkableAt(t - a, e + u) && !s.isWalkableAt(t - a, e) || s.isWalkableAt(t + a, e - u) && !s.isWalkableAt(t, e - u))
							return [t, e]
					} else if (0 !== a) {
						if (s.isWalkableAt(t + a, e + 1) && !s.isWalkableAt(t, e + 1) || s.isWalkableAt(t + a, e - 1) && !s.isWalkableAt(t, e - 1))
							return [t, e]
					} else if (s.isWalkableAt(t + 1, e + u) && !s.isWalkableAt(t + 1, e) || s.isWalkableAt(t - 1, e + u) && !s.isWalkableAt(t - 1, e))
						return [t, e];
					return 0 !== a && 0 !== u && (i = this._jump(t + a, e, t, e), o = this._jump(t, e + u, t, e), i || o) ? [t, e] : s.isWalkableAt(t + a, e) || s.isWalkableAt(t, e + u) ? this._jump(t + a, e + u, t, e) : null
				},
				r.prototype._findNeighbors = function (t) {
					var e,
					r,
					n,
					i,
					o,
					s,
					a,
					u,
					h = t.parent,
					p = t.x,
					l = t.y,
					c = this.grid,
					f = [];
					if (h)
						e = h.x, r = h.y, n = (p - e) / Math.max(Math.abs(p - e), 1), i = (l - r) / Math.max(Math.abs(l - r), 1), 0 !== n && 0 !== i ? (c.isWalkableAt(p, l + i) && f.push([p, l + i]), c.isWalkableAt(p + n, l) && f.push([p + n, l]), (c.isWalkableAt(p, l + i) || c.isWalkableAt(p + n, l)) && f.push([p + n, l + i]), !c.isWalkableAt(p - n, l) && c.isWalkableAt(p, l + i) && f.push([p - n, l + i]), !c.isWalkableAt(p, l - i) && c.isWalkableAt(p + n, l) && f.push([p + n, l - i])) : 0 === n ? c.isWalkableAt(p, l + i) && (c.isWalkableAt(p, l + i) && f.push([p, l + i]), c.isWalkableAt(p + 1, l) || f.push([p + 1, l + i]), c.isWalkableAt(p - 1, l) || f.push([p - 1, l + i])) : c.isWalkableAt(p + n, l) && (c.isWalkableAt(p + n, l) && f.push([p + n, l]), c.isWalkableAt(p, l + 1) || f.push([p + n, l + 1]), c.isWalkableAt(p, l - 1) || f.push([p + n, l - 1]));
					else
						for (o = c.getNeighbors(t, !0), a = 0, u = o.length; u > a; ++a)
							s = o[a], f.push([s.x, s.y]);
					return f
				},
				e.exports = r
			}, {
				"../core/Heuristic" : 5,
				"../core/Util" : 7,
				heap : 1
			}
		]
	}, {}, [3])(3)
});
