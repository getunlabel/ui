(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6,9],{4572:function(t,e,r){var content=r(4578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("7b2c6914",content,!0,{sourceMap:!1})},4573:function(t,e,r){var content=r(4580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("65b9c8dd",content,!0,{sourceMap:!1})},4574:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},4575:function(t,e,r){"use strict";var n=r(2),l=r(4576),c=r(36),o=r(26),d=r(64),f=r(130);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=o(e.length),n=f(e,0);return n.length=l(n,e,e,r,0,void 0===t?1:d(t)),n}})},4576:function(t,e,r){"use strict";var n=r(96),l=r(26),c=r(77),o=function(t,e,source,r,d,f,h,_){for(var element,m=d,v=0,x=!!h&&c(h,_,3);v<r;){if(v in source){if(element=x?x(source[v],v,e):source[v],f>0&&n(element))m=o(t,e,element,l(element.length),m,f-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=element}m++}v++}return m};t.exports=o},4577:function(t,e,r){"use strict";r(4572)},4578:function(t,e,r){var n=r(34)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\ndl.authors dd[data-v-efa964a6]:first-of-type:before{\n  content:"by "\n}\ndl.authors dd[data-v-efa964a6]:not(:last-child):after{\n  content:", "\n}\ndl.authors dd[data-v-efa964a6]:nth-last-child(2):after{\n  content:" and "\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},4579:function(t,e,r){"use strict";r(4573)},4580:function(t,e,r){var n=r(34)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\naside[data-v-375bcee1]{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},4581:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("header",[r("h2",[article.link?r("a",{attrs:{href:article.link,target:"_blank"}},[t._v(t._s(article.title))]):r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),article.date?r("time",{staticClass:"block text-sm text-gray-500",attrs:{pubdate:"",datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))]):t._e()]),article.description&&!article.excerpt?r("div",{staticClass:"prose"},[t._v(t._s(article.description))]):article.excerpt?r("NuxtContent",{staticClass:"prose",attrs:{document:{body:article.excerpt}}}):r("NuxtContent",{staticClass:"prose",attrs:{document:article}})],1)})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-gray-500"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4582:function(t,e,r){"use strict";r.r(e);r(13),r(4575);var n=r(67),l={props:["article"],computed:{categories:function(){return(this.article.categories||[this.article.category]).flat().filter(Boolean)},series:function(){return[this.article.series].flat().filter(Boolean)},tags:function(){return[this.article.tags].flat().filter(Boolean)},authors:function(){return(this.article.authors||[this.article.author]).flat().filter(Boolean)}},methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},c=(r(4577),r(6)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[t.categories.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.categories,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/categories/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/categories/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.series.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.series,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/series/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/series/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.authors.length?r("address",[r("dl",{staticClass:"authors"},[r("dt",{staticClass:"sr-only"},[t._v("Authors")]),t._l(t.authors,(function(e){return r("dd",{staticClass:"inline"},[t.$router.match("/authors/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/authors/"+t.parameterize(e),rel:"author"}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2)]):t._e(),t.article.date?r("time",{staticClass:"block text-sm text-gray-500",attrs:{pubdate:"",datetime:t.article.date}},[t._v(t._s(t._f("toLocaleString")(t.article.date)))]):t._e(),t.tags.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/tags/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/tags/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.article.image?r("NuxtImg",{attrs:{src:t.article.image,sizes:"xs:320px sm:640px md:768px"}}):t._e()],1)}),[],!1,null,"efa964a6",null);e.default=component.exports},4583:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=(r(4579),r(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("h2",[t._v("Table of Contents")]),r("TntUITableOfContents",{attrs:{toc:t.article.toc}})],1)}),[],!1,null,"375bcee1",null);e.default=component.exports;installComponents(component,{TntUITableOfContents:r(4574).default})},4584:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NuxtContent",{staticClass:"prose",attrs:{document:t.article}})}),[],!1,null,null,null);e.default=component.exports},4585:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("TntContentHeader",{attrs:{article:t.article}}),0!=t.article.showToC&&t.article.toc&&t.article.toc.length?[r("TntContentToC",{attrs:{article:t.article}}),r("hr")]:t._e(),r("TntContentBody",{attrs:{article:t.article}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContentHeader:r(4582).default,TntContentToC:r(4583).default,TntContentBody:r(4584).default})},4600:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(37),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,l,c,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.$taxonomies,c=t.params,o=c.page,e.next=4,r(o).where({draft:{$ne:!0}}).sortBy("date","desc").fetch().catch(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(o,"",{deep:!0}).all();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))));case 4:return d=e.sent,e.abrupt("return",{slug:o,page:d});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[Array.isArray(t.page)?r("article",[r("header",[r("h1",[t._v(t._s(t._f("titleize")(t.slug)))])]),r("TntBlogList",{attrs:{articles:t.page}})],1):r("TntContent",{attrs:{article:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContent:r(4585).default,TntBlogList:r(4581).default})}}]);