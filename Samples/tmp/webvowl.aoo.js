webvowl.app = function (t) {
    function e(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            exports: {},
            id     : r,
            loaded : !1
        };
        return t[r].call(i.exports, i, i.exports, e),
        i.loaded = !0,
        i.exports
    }
    var n = {};
    return e.m = t,
           e.c = n,
           e.p = "",
           e(0)
}
({
    0 : function (t, e, n) {
        n(70),
        n(72),
        t.exports = n(73)
        },
    6 : function (t, e) {
        t.exports = d3
        },
    70: function (t, e) {},
    72: function (t, e) {
          function n() {
              var t,
                  e,
                  n = -1;
              return "Microsoft Internet Explorer" === navigator.appName
                  ? (t = navigator.userAgent, e = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== e.exec(t) && (n = parseFloat(RegExp.$1)))
                  : "Netscape" === navigator.appName && (t = navigator.userAgent, e = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== e.exec(t) && (n = parseFloat(RegExp.$1))),
              n
          }
          function r() {
              var t = n();
              if (t > 0 && 11 >= t) {
                  document.write('<div id="browserCheck">The WebVOWL demo does not work in Internet Explorer. Plea' +
                          'se use another browser, such as <a href="http://www.mozilla.org/firefox/">Mozill' +
                          'a Firefox</a> or <a href="https://www.google.com/chrome/">Google Chrome</a>, to ' +
                          'run the WebVOWL demo.</div>');
                  var e = document.getElementById("canvasArea"),
                      r = document.getElementById("detailsArea"),
                      i = document.getElementById("optionsArea");
                  e.className = "hidden",
                  r.className = "hidden",
                  i.className = "hidden"
              }
          }
          t.exports = r
        },
    73: function (t, e, n) {
        (function (e) {
            t.exports = function () {
                function t(t, e, n) {
                    u.reset();
                    var r;
                    if (t && (r = JSON.parse(t), !e)) {
                        var i = r.header ? r.header.title : void 0,
                            o = v.textInLanguage(i);
                            e = o ? o : n
                          }
                    a.setJsonText(t),
                    h.data(r),
                    f.reload(),
                    y.updateOntologyInformation(r, m),
                    a.setFilename(e)
                }
                function r() {
                    var t = e.select(g),
                        n = t.select("svg"),
                        r = window.innerHeight - 40,
                        i = window.innerWidth - .22 * window.innerWidth;
                    t.style("height", r + "px"),
                    n.attr("width", i)
                      .attr("height", r),
                    h.width(i)
                     .height(r),
                    f.updateStyle()
                }
                var i,a,o,s,c,l,u,d,
                    p = {},
                    f = webvowl.graph(),
                    h = f.graphOptions(),
                    v = webvowl.util
                        .languageTools(),
                    g = "#graph",
                    y = n(74)(f),
                    m = webvowl.modules
                               .statistics(),
                    b = webvowl.modules
                               .focuser(),
                    x = webvowl.modules
                               .selectionDetailsDisplayer(y.updateSelectionInformation),
                    w = webvowl.modules
                               .datatypeFilter(),
                    C = webvowl.modules
                               .subclassFilter(),
                    k = webvowl.modules
                               .disjointFilter(),
                    E = webvowl.modules
                               .nodeDegreeFilter(),
                    A = webvowl.modules
                              .setOperatorFilter(),
                    O = webvowl.modules
                              .nodeScalingSwitch(f),
                    N = webvowl.modules
                              .compactNotationSwitch(f),
                    j = webvowl.modules
                              .pickAndPin();
                return p.initialize = function () {
                    h.graphContainerSelector(g),
                    h.selectionModules().push(b),
                    h.selectionModules().push(x),
                    h.selectionModules().push(j),
                    h.filterModules().push(m),
                    h.filterModules().push(w),
                    h.filterModules().push(C),
                    h.filterModules().push(k),
                    h.filterModules().push(A),
                    h.filterModules().push(O),
                    h.filterModules().push(E),
                    h.filterModules().push(N),
                    a = n(75)(h.graphContainerSelector()),
                    o = n(76)(f),
                    s = n(77)(f, w, C, k, A, E),
                    c = n(78)(f, j, O, N),
                    u = n(79)(f),
                    l = n(80)(f, [o, s, c, b, x, u]),
                    i = n(81)(t),
                    e.select(window)
                     .on("resize", r),
                    d = [ a, o, s, c, l, u, y, i ],
                    d.forEach(function (t) {
                        t.setup()
                    }),
                    f.start(),
                    r()
                },
                p
            }
        }).call(e, n(6))
    },
    74: function (t, e, n) {
        (function (e) {
            t.exports = function (t) {
                function n() {
                    function t(t) {
                        t.classed("hidden", !0)
                    }
                    function n(t) {
                        t.classed("hidden", !1)
                    }
                    var r = e.selectAll(".accordion-trigger");
                    t(e.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div")),
                    r.on("click", function () {
                        var r = e.select(this),
                            i = e.selectAll(".accordion-trigger-active");
                        r.classed("accordion-trigger-active")
                            ? (t(e.select(r.node().nextElementSibling)), r.classed("accordion-trigger-active", !1))
                            : (t(e.selectAll(".accordion-trigger-active + div")), i.classed("accordion-trigger-active", !1), n(e.select(r.node().nextElementSibling)), r.classed("accordion-trigger-active", !0))
                    })
                }
                function r(n) {
                    n = n || [],
                    n.sort(function (t, e) {
                        return t === webvowl
                            .util
                            .constants()
                            .LANG_IRIBASED ? -1 : e === webvowl
                              .util
                              .constants()
                              .LANG_IRIBASED ? 1 : t === webvowl
                                .util
                                .constants()
                                .LANG_UNDEFINED ? -1 : e === webvowl
                                  .util
                                  .constants()
                                  .LANG_UNDEFINED ? 1 : t.localeCompare(e)
                    });
                    var r = e.select("#language")
                             .on("change", function () {
                               t.language(e.event.target.value),
                               a(),
                               k.updateSelectionInformation(C)
                             });
                    r.selectAll("option")
                     .remove(),
                    r.selectAll("option")
                     .data(n)
                     .enter()
                     .append("option")
                     .attr("value", function (t) {
                        return t
                     })
                    .text(function (t) {
                        return t
                     }),
                    i(r, n, "en") || i(r, n, webvowl.util.constants().LANG_UNDEFINED) || i(r, n, webvowl.util.constants().LANG_IRIBASED)
                }
                function i(e, n, r) {
                    var i = n.indexOf(r);
                    return i >= 0 ? (e.property("selectedIndex", i), t.language(r), !0): !1
                }
                function a() {
                    var n = E.textInLanguage(w.title, t.language());
                    e.select("#title")
                     .text(n || "No title available"),
                    e.select("#about")
                     .attr("href", w.iri)
                     .attr("target", "_blank")
                     .text(w.iri),
                    e.select("#version")
                     .text(w.version || "--");
                    var r = w.author;
                    "string" == typeof r ? e.select("#authors").text(r)
                                        : r instanceof Array ? e.select("#authors").text(r.join(", "))
                                                             : e.select("#authors").text("--");
                    var i = E.textInLanguage(w.description, t.language());
                    e.select("#description")
                     .text(i || "No description available.")
                }
                function o(t, n) {
                    t = t || {},
                    e.select("#classCount")
                     .text(t.classCount || n.classCount()),
                    e.select("#objectPropertyCount")
                     .text(t.objectPropertyCount || n.objectPropertyCount()),
                    e.select("#datatypePropertyCount")
                     .text(t.datatypePropertyCount || n.datatypePropertyCount()),
                    e.select("#individualCount")
                     .text(t.totalIndividualCount || n.totalIndividualCount()),
                     e.select("#nodeCount")
                      .text(n.nodeCount()),
                     e.select("#edgeCount")
                      .text(n.edgeCount())
                }
                function s(t) {
                    var n = e.select("#ontology-metadata");
                    n.selectAll("*")
                    　.remove(),
                    c(n, t),
                    n.selectAll(".annotation")
                     .size() <= 0 && n
                     .append("p")
                     .text("No annotations available.")
                }
                function c(t, n) {
                    n = n || {};
                    var r = [];
                    for (var i in n)
                      n.hasOwnProperty(i) && r.push(n[i][0]);
                      t.selectAll(".annotation")
                       .remove(),
                      t.selectAll(".annotation")
                       .data(r)
                       .enter()
                       .append("p")
                       .classed("annotation", !0)
                       .classed("statisticDetails", !0)
                       .text(function (t) { return t.identifier + ":" })
                       .append("span")
                       .each(function (t) {
                          h(e.select(this), t.value, "iri" === t.type ? t.value : void 0)
                            })
                }
                function l() {
                    u(!1, !1, !0)
                }
                function u(t, n, r) {
                    e.select("#classSelectionInformation")
                     .classed("hidden", !t),
                    e.select("#propertySelectionInformation")
                     .classed("hidden", !n),
                    e.select("#noSelectionInformation")
                     .classed("hidden", !r)
                }
                function d(t) {
                    p(),
                    f(e.select("#propname"), t.labelForCurrentLanguage(), t.iri()),
                    e.select("#typeProp")
                     .text(t.type()),
                    void 0 !== t.inverse()
                        ? (e.select("#inverse").classed("hidden", !1), f(e.select("#inverse span"), t.inverse().labelForCurrentLanguage(), t.inverse().iri()))
                        : e
                            .select("#inverse")
                            .classed("hidden", !0);
                    var n = e.select("#propEquivUri");
                    b(n, t.equivalents()),
                    b(e.select("#subproperties"), t.subproperties()),
                    b(e.select("#superproperties"), t.superproperties()),
                    void 0 !== t.minCardinality()
                        ? (e.select("#infoCardinality").classed("hidden", !0), e.select("#minCardinality").classed("hidden", !1), e.select("#minCardinality span").text(t.minCardinality()), e.select("#maxCardinality").classed("hidden", !1), void 0 !== t.maxCardinality()
                            ? e.select("#maxCardinality span").text(t.maxCardinality())
                            : e.select("#maxCardinality span").text("*"))
                        : void 0 !== t.cardinality()
                            ? (e.select("#minCardinality").classed("hidden", !0), e.select("#maxCardinality").classed("hidden", !0), e.select("#infoCardinality").classed("hidden", !1), e.select("#infoCardinality span").text(t.cardinality()))
                            : (e.select("#infoCardinality").classed("hidden", !0), e.select("#minCardinality").classed("hidden", !0), e.select("#maxCardinality").classed("hidden", !0)),
                    f(e.select("#domain"), t.domain().labelForCurrentLanguage(), t.domain().iri()),
                    f(e.select("#range"), t.range().labelForCurrentLanguage(), t.range().iri()),
                    v(t.attributes(), e.select("#propAttributes")),
                    x(e.select("#propDescription"), t.descriptionForCurrentLanguage()),
                    x(e.select("#propComment"), t.commentForCurrentLanguage()),
                    c(e.select("#propertySelectionInformation"), t.annotations())
                }
                function p() {
                    u(!1, !0, !1)
                }
                function f(t, e, n) {
                    t
                        .selectAll("*")
                        .remove(),
                    h(t, e, n)
                }
                function h(t, e, n) {
                    var r;
                    r = n
                        ? t
                            .append("a")
                            .attr("href", n)
                            .attr("title", n)
                            .attr("target", "_blank")
                        : t.append("span"),
                    r.text(e)
                }
                function v(t, n) {
                    var r = e.select(n.node().parentNode);
                    t && t.length > 0 && (g("object", t), g("datatype", t), g("rdf", t)),
                    t && t.length > 0
                        ? (n.text(t.join(", ")), r.classed("hidden", !1))
                        : r.classed("hidden", !0)
                }
                function g(t, e) {
                    var n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                }
                function y(t) {
                    m(),
                    f(e.select("#name"), t.labelForCurrentLanguage(), t.iri());
                    var n = e.select("#classEquivUri");
                    b(n, t.equivalents()),
                    e
                        .select("#typeNode")
                        .text(t.type()),
                    b(e.select("#individuals"), t.individuals());
                    var r = e.select("#disjointNodes"),
                        i = e.select(r.node().parentNode);
                    void 0 !== t.disjointWith()
                        ? (r.selectAll("*").remove(), t.disjointWith().forEach(function (t, e) {
                            e > 0 && r
                                .append("span")
                                .text(", "),
                            h(r, t.labelForCurrentLanguage(), t.iri())
                        }), i.classed("hidden", !1))
                        : i.classed("hidden", !0),
                    v(t.attributes(), e.select("#classAttributes")),
                    x(e.select("#nodeDescription"), t.descriptionForCurrentLanguage()),
                    x(e.select("#nodeComment"), t.commentForCurrentLanguage()),
                    c(e.select("#classSelectionInformation"), t.annotations())
                }
                function m() {
                    u(!0, !1, !1)
                }
                function b(t, n) {
                    var r = e.select(t.node().parentNode);
                    n && n.length
                        ? (t.selectAll("*").remove(), n.forEach(function (e, n) {
                            n > 0 && t
                                .append("span")
                                .text(", "),
                            h(t, e.labelForCurrentLanguage(), e.iri())
                        }), r.classed("hidden", !1))
                        : r.classed("hidden", !0)
                }
                function x(t, n) {
                    var r = e.select(t.node().parentNode),
                        i = !!n;
                    n && t.text(n),
                    r.classed("hidden", !i)
                }
                var w,
                    C,
                    k = {},
                    E = webvowl
                        .util
                        .languageTools(),
                    A = webvowl
                        .util
                        .elementTools();
                return k.setup               = function () {
                    n()
                },
                k.updateOntologyInformation  = function (t, e) {
                    t = t || {},
                    w = t.header || {},
                    a(),
                    o(t.metrics, e),
                    s(w.other),
                    k.updateSelectionInformation(void 0),
                    r(w.languages)
                },
                k.updateSelectionInformation = function (t) {
                    if (C = t, !e.event || !e.event.defaultPrevented) {
                        var n = e
                            .select("#selection-details-trigger")
                            .classed("accordion-trigger-active");
                        if (t && !n)
                            e
                                .select("#selection-details-trigger")
                                .node()
                                .click();
                        else if (!t && n)
                            return void l();
                        A.isProperty(t)
                            ? d(t)
                            : A.isNode(t) && y(t)
                    }
                },
                k
            }
        }).call(e, n(6))
    },
    75: function (t, e, n) {
        (function (e) {
            t.exports = function (t) {
                function n() {
                    var n,
                        c,
                        d,
                        p = e
                            .select(t)
                            .select("svg");
                    i(),
                    a(),
                    n = p
                        .attr("version", 1.1)
                        .attr("xmlns", "http://www.w3.org/2000/svg")
                        .node()
                        .parentNode
                        .innerHTML,
                    n = "<!-- Created with WebVOWL (version " + webvowl.version + "), http://vowl.visualdataweb.org -->\n" + n,
                    c = r(n),
                    d = "data:image/svg+xml;base64," + btoa(c),
                    l
                        .attr("href", d)
                        .attr("download", u + ".svg"),
                    o(),
                    s()
                }
                function r(t) {
                    var e,
                        n,
                        r,
                        i = [],
                        a = t.length;
                    for (e = 0; a > e; e++)
                        n = t.charAt(e),
                        r = n.charCodeAt(0),
                        128 > r
                            ? i.push(n)
                            : i.push("&#" + r + ";");
                    return i.join("")
                }
                function i() {
                    e
                        .selectAll(".text")
                        .style("font-family", "Helvetica, Arial, sans-serif")
                        .style("font-size", "12px"),
                    e
                        .selectAll(".subtext")
                        .style("font-size", "9px"),
                    e
                        .selectAll(".text.instance-count")
                        .style("fill", "#666"),
                    e
                        .selectAll(".external + text .instance-count")
                        .style("fill", "#aaa"),
                    e
                        .selectAll(".cardinality")
                        .style("font-size", "10px"),
                    e
                        .selectAll(".text, .embedded")
                        .style("pointer-events", "none"),
                    e
                        .selectAll(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty," +
                                " .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetri" +
                                "cproperty")
                        .style("fill", "#acf"),
                    e
                        .selectAll(".label .datatype, .datatypeproperty")
                        .style("fill", "#9c6"),
                    e
                        .selectAll(".rdf, .rdfproperty")
                        .style("fill", "#c9c"),
                    e
                        .selectAll(".literal, .node .datatype")
                        .style("fill", "#fc3"),
                    e
                        .selectAll(".deprecated, .deprecatedproperty")
                        .style("fill", "#ccc"),
                    e
                        .selectAll(".external, .externalproperty")
                        .style("fill", "#36c"),
                    e
                        .selectAll("path, .nofill")
                        .style("fill", "none"),
                    e
                        .selectAll(".symbol")
                        .style("fill", "#69c"),
                    e
                        .selectAll(".arrowhead, marker path")
                        .style("fill", "#000"),
                    e
                        .selectAll(".class, path, line, .fineline")
                        .style("stroke", "#000"),
                    e
                        .selectAll(".white, .subclass, .dottedMarker path, .subclassproperty, .external + text")
                        .style("fill", "#fff"),
                    e
                        .selectAll(".class.hovered, .property.hovered, path.arrowhead.hovered, .cardinality.hovered," +
                                " .normalMarker path.hovered, .cardinality.focused, .normalMarker path.focused, c" +
                                "ircle.pin")
                        .style("fill", "#f00")
                        .style("cursor", "pointer"),
                    e
                        .selectAll(".focused, path.hovered")
                        .style("stroke", "#f00"),
                    e
                        .selectAll(".label .indirectHighlighting, .feature:hover")
                        .style("fill", "#f90"),
                    e
                        .selectAll(".class, path, line")
                        .style("stroke-width", "2"),
                    e
                        .selectAll(".fineline")
                        .style("stroke-width", "1"),
                    e
                        .selectAll(".special")
                        .style("stroke-dasharray", "8"),
                    e
                        .selectAll(".dotted")
                        .style("stroke-dasharray", "3"),
                    e
                        .selectAll("rect.focused, circle.focused")
                        .style("stroke-width", "4px"),
                    e
                        .selectAll(".nostroke")
                        .style("stroke", "none"),
                    e
                        .selectAll("#width-test")
                        .style("position", "absolute")
                        .style("float", "left")
                        .style("white-space", "nowrap")
                        .style("visibility", "hidden"),
                    e
                        .selectAll("marker path")
                        .style("stroke-dasharray", "50")
                }
                function a() {
                    e
                        .selectAll(".hidden-in-export")
                        .style("display", "none")
                }
                function o() {
                    e
                        .selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardin" +
                                "ality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointw" +
                                "ith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunc" +
                                "tionalproperty, .symmetricproperty, .label .datatype, .datatypeproperty, .rdf, ." +
                                "rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .exter" +
                                "nal, .externalproperty, path, .nofill, .symbol, .arrowhead, marker path, .class," +
                                " path, line, .fineline, .white, .subclass, .dottedMarker path, .subclassproperty" +
                                ", .external + text, .class.hovered, .property.hovered, path.arrowhead.hovered, ." +
                                "cardinality.hovered, .normalMarker path.hovered, .cardinality.focused, .normalMa" +
                                "rker path.focused, circle.pin, .focused, path.hovered, .label .indirectHighlight" +
                                "ing, .feature:hover, .class, path, line, .fineline, .special, .dotted, rect.focu" +
                                "sed, circle.focused, .nostroke, #width-test, marker path")
                        .attr("style", null)
                }
                function s() {
                    e
                        .selectAll(".hidden-in-export")
                        .style("display", null)
                }
                function c() {
                    if (!p)
                        return alert("No graph data available."),
                        void e
                            .event
                            .preventDefault();
                    var t = "data:text/json;charset=utf-8," + encodeURIComponent(p);
                    d
                        .attr("href", t)
                        .attr("download", u + ".json")
                }
                var l,
                    u,
                    d,
                    p,
                    f = {};
                return f.setup = function () {
                    l = e
                        .select("#exportSvg")
                        .on("click", n),
                    d = e
                        .select("#exportJson")
                        .on("click", c)
                },
                f.setFilename  = function (t) {
                    u = t || "export"
                },
                f.setJsonText  = function (t) {
                    p = t
                },
                f
            }
        }).call(e, n(6))
    },
    76: function (t, e, n) {
        (function (e) {
            t.exports = function (t) {
                function n(n, i, o, s) {
                    var c,
                        l,
                        u = s();
                    c = e
                        .select(n)
                        .append("div")
                        .datum({distanceFunction: s})
                        .classed("distanceSliderContainer", !0);
                    var d = c
                        .append("input")
                        .attr("id", i + "DistanceSlider")
                        .attr("type", "range")
                        .attr("min", 10)
                        .attr("max", 600)
                        .attr("value", s())
                        .attr("step", 10);
                    c
                        .append("label")
                        .classed("description", !0)
                        .attr("for", i + "DistanceSlider")
                        .text(o),
                    l = c
                        .append("label")
                        .classed("value", !0)
                        .attr("for", i + "DistanceSlider")
                        .text(s()),
                    a.push(d),
                    d.on("input", function () {
                        var e = d.property("value");
                        s(e),
                        r(u),
                        l.text(e),
                        t.updateStyle()
                    })
                }
                function r(t) {
                    var e = Math.max(o.classDistance(), o.datatypeDistance()),
                        n = e / t,
                        r = s * n;
                    o.charge(r)
                }
                var i = {},
                    a = [],
                    o = t.graphOptions(),
                    s = o.charge();
                return i.setup = function () {
                    n("#classSliderOption", "class", "Class distance", o.classDistance),
                    n("#datatypeSliderOption", "datatype", "Datatype distance", o.datatypeDistance)
                },
                i.reset        = function () {
                    a.forEach(function (t) {
                        t.property("value", function (t) {
                            return t.distanceFunction()
                        }),
                        t.on("input")()
                    })
                },
                i
            }
        }).call(e, n(6))
    },
    77: function (t, e, n) {
        (function (e) {
            t.exports = function (t, n, r, i, a, o) {
                function s(n, r, i, a) {
                    var o,
                        s;
                    o = e
                        .select(a)
                        .append("div")
                        .classed("checkboxContainer", !0),
                    s = o
                        .append("input")
                        .classed("filterCheckbox", !0)
                        .attr("id", r + "FilterCheckbox")
                        .attr("type", "checkbox")
                        .property("checked", n.enabled()),
                    d.push({checkbox: s, defaultState: n.enabled()}),
                    s.on("click", function () {
                        var e = s.property("checked");
                        n.enabled(e),
                        t.update()
                    }),
                    o
                        .append("label")
                        .attr("for", r + "FilterCheckbox")
                        .text(i)
                }
                function c(n) {
                    o.setMaxDegreeSetter(function (t) {
                        l.attr("max", t),
                        l.property("value", Math.min(t, l.property("value")))
                    }),
                    o.setDegreeQueryFunction(function () {
                        return l.property("value")
                    });
                    var r,
                        i;
                    r = e
                        .select(n)
                        .append("div")
                        .classed("distanceSliderContainer", !0),
                    l = r
                        .append("input")
                        .attr("id", "nodeDegreeDistanceSlider")
                        .attr("type", "range")
                        .attr("min", 0)
                        .attr("step", 1),
                    r
                        .append("label")
                        .classed("description", !0)
                        .attr("for", "nodeDegreeDistanceSlider")
                        .text("Degree of collapsing"),
                    i = r
                        .append("label")
                        .classed("value", !0)
                        .attr("for", "nodeDegreeDistanceSlider")
                        .text(0),
                    l.on("change", function () {
                        t.update()
                    }),
                    l.on("input", function () {
                        var t = l.property("value");
                        i.text(t)
                    })
                }
                var l,
                    u = {},
                    d = [];
                return u.setup = function () {
                    s(n, "datatype", "Datatype prop.", "#datatypeFilteringOption"),
                    s(r, "subclass", "Solitary subclass.", "#subclassFilteringOption"),
                    s(i, "disjoint", "Disjointness info", "#disjointFilteringOption"),
                    s(a, "setoperator", "Set operators", "#setOperatorFilteringOption"),
                    c("#nodeDegreeFilteringOption")
                },
                u.reset        = function () {
                    d.forEach(function (t) {
                        var e = t.checkbox,
                            n = t.defaultState,
                            r = e.property("checked");
                        r !== n && (e.property("checked", n), e.on("click")())
                    }),
                    l.property("value", 0),
                    l.on("change")(),
                    l.on("input")()
                },
                u
            }
        }).call(e, n(6))
    },
    78: function (t, e, n) {
        (function (e) {
            t.exports = function (t, n, r, i) {
                function a(n, r, i, a, o) {
                    var c,
                        l;
                    c = e
                        .select(a)
                        .append("div")
                        .classed("checkboxContainer", !0)
                        .datum({defaultState: n.enabled(), module: n}),
                    l = c
                        .append("input")
                        .classed("moduleCheckbox", !0)
                        .attr("id", r + "ModuleCheckbox")
                        .attr("type", "checkbox")
                        .property("checked", n.enabled()),
                    s.push(l),
                    l.on("click", function (e) {
                        var n = l.property("checked");
                        e
                            .module
                            .enabled(n),
                        o && t.update()
                    }),
                    c
                        .append("label")
                        .attr("for", r + "ModuleCheckbox")
                        .text(i)
                }
                var o = {},
                    s = [];
                return o.setup = function () {
                    a(n, "pickandpin", "Pick & Pin", "#pickAndPinOption", !1),
                    a(r, "nodescaling", "Node Scaling", "#nodeScalingOption", !0),
                    a(i, "compactnotation", "Compact Notation", "#compactNotationOption", !0)
                },
                o.reset        = function () {
                    s.forEach(function (t) {
                        var e = t
                                .datum()
                                .defaultState,
                            n = t.property("checked");
                        n !== e && (t.property("checked", e), t.on("click")(t.datum())),
                        t
                            .datum()
                            .module
                            .reset()
                    })
                },
                o
            }
        }).call(e, n(6))
    },
    79: function (t, e, n) {
        (function (e) {
            t.exports = function (t) {
                function n() {
                    r(),
                    i()
                }
                function r() {
                    a.classed("paused", function (t) {
                        return t.paused
                    })
                }
                function i() {
                    a
                        .datum()
                        .paused
                            ? a.text("Resume")
                            : a.text("Pause")
                }
                var a,
                    o = {};
                return o.setup = function () {
                    a = e
                        .select("#pause-button")
                        .datum({
                            paused: !1
                        })
                        .on("click", function (e) {
                            e.paused
                                ? t.unfreeze()
                                : t.freeze(),
                            e.paused = !e.paused,
                            n()
                        }),
                    n()
                },
                o.reset        = function () {
                    a
                        .datum()
                        .paused = !1,
                    t.unfreeze(),
                    n()
                },
                o
            }
        }).call(e, n(6))
    },
    80: function (t, e, n) {
        (function (e) {
            t.exports = function (t, n) {
                function r() {
                    a.classDistance(o.classDistance()),
                    a.datatypeDistance(o.datatypeDistance()),
                    a.charge(o.charge()),
                    a.gravity(o.gravity()),
                    a.linkStrength(o.linkStrength()),
                    t.reset(),
                    n.forEach(function (t) {
                        t.reset()
                    }),
                    t.updateStyle()
                }
                var i = {},
                    a = t.graphOptions(),
                    o = webvowl.options();
                return i.setup = function () {
                    e
                        .select("#reset-button")
                        .on("click", r)
                },
                i
            }
        }).call(e, n(6))
    },
    81: function (t, e, n) {
        (function (e) {
            t.exports = function (t) {
                function r() {
                    a(),
                    e
                        .select(window)
                        .on("hashchange", function () {
                            var t = e.event.oldURL,
                                n = e.event.newURL;
                            if (t !== n) {
                                if (n === t + "#")
                                    return;
                                i(),
                                a()
                            }
                        }),
                    i()
                }
                function i() {
                    e
                        .selectAll("#optionsMenu > li > a")
                        .attr("href", location.hash || "#")
                }
                function a() {
                    var t = location
                        .hash
                        .slice(1);
                    t || (t = b);
                    var r = e
                            .selectAll(".select li")
                            .classed("selected-ontology", !1),
                        i = "iri=",
                        a = "file=";
                    if (t.substr(0, a.length) === a) {
                        var s = decodeURIComponent(t.slice(a.length));
                        l(s)
                    } else if (t.substr(0, i.length) === i) {
                        var c = decodeURIComponent(t.slice(i.length));
                        o("converter.php?iri=" + encodeURIComponent(c), c),
                        e
                            .select("#converter-option")
                            .classed("selected-ontology", !0)
                    } else
                        o(n(82)("./" + t + ".json"), t),
                        r.each(function () {
                            var n = e.select(this);
                            n
                                .select("a")
                                .size() > 0 && n
                                .select("a")
                                .attr("href") === "#" + t && n.classed("selected-ontology", !0)
                        })
                }
                function o(n, r) {
                    var i = C[n],
                        a = r.replace(/\/$/g, ""),
                        o = a.slice(a.lastIndexOf("/") + 1);
                    i
                        ? (t(i, void 0, o), v(!0))
                        : (h(), e.xhr(n, "application/json", function (e, r) {
                            var i,
                                a,
                                s = !e;
                            s
                                ? (a = r.responseText, C[n] = a)
                                : 404 === e.status && (i = "Connection to the OWL2VOWL interface could not be established."),
                            t(a, void 0, o),
                            v(s, e
                                ? e.response
                                : void 0,
                            i),
                            g()
                        }))
                }
                function s() {
                    var t = e.select("#iri-converter-button"),
                        n = e.select("#iri-converter-input");
                    n
                        .on("input", function () {
                            f();
                            var e = "" === n.property("value");
                            t.attr("disabled", e || void 0)
                        })
                        .on("click", function () {
                            f()
                        }),
                    e
                        .select("#iri-converter-form")
                        .on("submit", function () {
                            return location.hash = "iri=" + n.property("value"),
                            n.property("value", ""),
                            n.on("input")(),
                            e
                                .event
                                .preventDefault(),
                            !1
                        })
                }
                function c() {
                    var t = e.select("#file-converter-input"),
                        n = e.select("#file-converter-label"),
                        r = e.select("#file-converter-button");
                    t.on("change", function () {
                        var e = t.property("files");
                        e.length <= 0
                            ? (n.text("Please select a file"), r.property("disabled", !0))
                            : (n.text(e[0].name), r.property("disabled", !1), f())
                    }),
                    r.on("click", function () {
                        var e = t.property("files")[0];
                        if (!e)
                            return !1;
                        var n = "file=" + e.name;
                        location.hash === "#" + n
                            ? l()
                            : location.hash = n
                    })
                }
                function l(n) {
                    var r = C[n];
                    if (r)
                        return t(r, n),
                        void v(!0);
                    var i = e
                        .select("#file-converter-input")
                        .property("files")[0];
                    return !i || n && n !== i.name
                        ? (t(void 0, void 0), void v(!1, void 0, 'No cached version of "' + n + '" was found. Please reupload the file.'))
                        : (n = i.name, void(n.match(/\.json$/)
                            ? u(i, n)
                            : d(i, n)))
                }
                function u(t, e) {
                    var n = new FileReader;
                    n.readAsText(t),
                    n.onload = function () {
                        p(n.result, e),
                        v(!0)
                    }
                }
                function d(n, r) {
                    var i = e.select("#file-converter-button");
                    h(),
                    i.property("disabled", !0);
                    var a = new FormData;
                    a.append("ontology", n);
                    var o = new XMLHttpRequest;
                    o.open("POST", "converter.php", !0),
                    o.onload = function () {
                        i.property("disabled", !1),
                        200 === o.status
                            ? (p(o.responseText, r), C[r] = o.responseText)
                            : (t(void 0, void 0), v(!1, o.responseText)),
                        g()
                    },
                    o.send(a)
                }
                function p(e, n) {
                    var r = n.split(".")[0];
                    t(e, r)
                }
                function f() {
                    function t() {
                        n.style("display", void 0),
                        clearTimeout(y),
                        e
                            .select(window)
                            .on("click", void 0)
                            .on("keydown", void 0),
                        n.on("mouseover", void 0)
                    }
                    var n = e.select("#select .toolTipMenu");
                    n
                        .on("click", function () {
                            e
                                .event
                                .stopPropagation()
                        })
                        .on("keydown", function () {
                            e
                                .event
                                .stopPropagation()
                        }),
                    n.style("display", "block"),
                    clearTimeout(y),
                    y = setTimeout(function () {
                        t()
                    }, 3e3),
                    e
                        .select(window)
                        .on("click", function () {
                            t()
                        })
                        .on("keydown", function () {
                            t()
                        }),
                    n.on("mouseover", function () {
                        t()
                    })
                }
                function h() {
                    x.classed("hidden", !0),
                    w.classed("hidden", !1)
                }
                function v(t, n, r) {
                    x.classed("hidden", t);
                    var i = e.select("#error-info");
                    r
                        ? i.text(r)
                        : i.html('Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <' +
                                'a target="_blank"href="http://mowl-power.cs.man.ac.uk:8080/validator/">OWL Valid' +
                                'ator</a>.');
                    var a = !n,
                        o = e
                            .select("#error-description-button")
                            .classed("hidden", a)
                            .datum()
                            .open;
                    e
                        .select("#error-description-container")
                        .classed("hidden", a || !o),
                    e
                        .select("#error-description")
                        .text(n || "")
                }
                function g() {
                    w.classed("hidden", !0)
                }
                var y,
                    m = {},
                    b = "foaf",
                    x = e.select("#loading-error"),
                    w = e.select("#loading-progress"),
                    C = {};
                return m.setup = function () {
                    s(),
                    c();
                    var t = e
                        .select("#error-description-button")
                        .datum({
                            open: !1
                        });
                    t.on("click", function (t) {
                        var n = e.select("#error-description-container"),
                            r = e.select(this);
                        t.open = !t.open;
                        var i = t.open;
                        i
                            ? r.text("Hide error details")
                            : r.text("Show error details"),
                        n.classed("hidden", !i)
                    }),
                    r()
                },
                m
            }
        }).call(e, n(6))
    },
    82: function (t, e, n) {
        function r(t) {
            return n(i(t))
        }
        function i(t) {
            return a[t] || function () {
                throw new Error("Cannot find module '" + t + "'.")
            }()
        }
        var a = {
            "./benchmark.json"    : 83,
            "./foaf.json"         : 84,
            "./goodrelations.json": 85,
            "./muto.json"         : 86,
            "./ontovibe.json"     : 87,
            "./personasonto.json" : 88,
            "./sioc.json"         : 89,
            "./template.json"     : 90
        };
        r.keys    = function () {
            return Object.keys(a)
        },
        r.resolve = i,
        t.exports = r,
        r.id      = 82
    },
    83: function (t, e, n) {
        t.exports = n.p + "data/benchmark.json?d5d07972ddf0459c397916c8001e761c"
    },
    84: function (t, e, n) {
        t.exports = n.p + "data/foaf.json?c42b65921e9390d684730607e060b3d6"
    },
    85: function (t, e, n) {
        t.exports = n.p + "data/goodrelations.json?f0cab2e1d6df87859caf716c78c16942"
    },
    86: function (t, e, n) {
        t.exports = n.p + "data/muto.json?eaabaf251b184714f8894573a4d028ba"
    },
    87: function (t, e, n) {
        t.exports = n.p + "data/ontovibe.json?568253d576cc982dc7880565580c11c2"
    },
    88: function (t, e, n) {
        t.exports = n.p + "data/personasonto.json?304ff6fcbf3a12ef8adb85825d980849"
    },
    89: function (t, e, n) {
        t.exports = n.p + "data/sioc.json?4ffe419f2608709084060f6e35c29558"
    },
    90: function (t, e, n) {
        t.exports = n.p + "data/template.json?fcb0957581dd99fe6e67635fae53f180"
    }
});
