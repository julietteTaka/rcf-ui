webpackJsonp([2],{1001:function(e,t,r){"use strict";var n=r(409),o=r(1003),a=r(412);n.inject();var i={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:a};e.exports=i},1002:function(e,t,r){"use strict";var n={isBatchingUpdates:!1,batchedUpdates:function(e){}};e.exports=n},1003:function(e,t,r){"use strict";function n(e,t){var r;try{return m.injection.injectBatchingStrategy(d),r=f.getPooled(t),b++,r.perform(function(){var n=y(e,!0),o=p.mountComponent(n,r,null,c(),h,0);return t||(o=u.addChecksumToMarkup(o)),o},null)}finally{b--,f.release(r),b||m.injection.injectBatchingStrategy(s)}}function o(e){return l.isValidElement(e)||i("46"),n(e,!1)}function a(e){return l.isValidElement(e)||i("47"),n(e,!0)}var i=r(11),l=r(83),c=r(407),s=r(408),u=(r(35),r(410)),p=r(82),d=r(1002),f=r(411),m=r(41),h=r(40),y=r(254),b=(r(2),0);e.exports={renderToString:o,renderToStaticMarkup:a}},1004:function(e,t,r){"use strict";e.exports=r(1001)},1005:function(e,t,r){!function(t){if(t=t(),void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof window&&window.React)for(var r in t)t.hasOwnProperty(r)&&(window[r]||(window[r]=t[r]))}(function(){"use strict";function e(){p&&0===u.length&&window.removeEventListener&&(window.removeEventListener("resize",d,!1),window.removeEventListener("scroll",d,!1),window.removeEventListener("touchend",d,!1),p=!1)}function t(e){if(c.inViewport(e.element,e.cushion))return void e.callback();!p&&0===u.length&&window.addEventListener&&(window.addEventListener("resize",d,!1),window.addEventListener("scroll",d,!1),window.addEventListener("touchend",d,!1),p=!0),u.push(e)}function n(e){for(var t=0;t<u.length;t++){u[t].cushion=e}}function o(t){var r=u.indexOf(t);r>=0&&u.splice(r,1),e()}var a=r(1),i=r(22),l=r(1004),c=r(1006),s=["a","abbr","address","article","aside","b","bdi","bdo","big","blockquote","body","button","caption","cite","code","data","dd","del","dfn","dialog","div","dt","em","fieldset","figcaption","footer","form","h1","h2","h3","h4","h5","h6","header","i","ins","kbd","label","legend","li","main","mark","menuitem","nav","ol","output","p","pre","q","s","samp","section","small","span","strong","summary","td","th","time","u","ul","var"],u=[],p=!1,d=function(e,t){var r;return function(){var n=!r;clearTimeout(r),r=setTimeout(function(t){r=null,e.apply(this,t)}.bind(this,arguments),t),n&&e.apply(this,arguments)}}(function(){for(var t=u.length-1;t>=0;t--)c.inViewport(u[t].element,u[t].cushion)&&(u[t].callback(),u.splice(t,1),e())},50),f=a.createClass({displayName:"Lazy",propTypes:{children:a.PropTypes.oneOfType([a.PropTypes.arrayOf(a.PropTypes.node),a.PropTypes.node]),cushion:a.PropTypes.number,nodeName:a.PropTypes.oneOf(s),onLoad:a.PropTypes.func},getDefaultProps:function(){return{cushion:0,nodeName:"div"}},getInitialState:function(){return{}},componentDidMount:function(){this.options={callback:this.handleLoad,cushion:this.props.cushion,element:i.findDOMNode(this)},t(this.options)},componentDidUpdate:function(){n(this.props.cushion)},componentWillUnmount:function(){o(this.options)},handleLoad:function(){this.props.onLoad&&this.props.onLoad(),this.setState({loadedAt:Date.now()})},render:function(){var e={};for(var t in this.props)this.props.hasOwnProperty(t)&&!f.propTypes.hasOwnProperty(t)&&(e[t]=this.props[t]);return this.state.loadedAt?a.createElement(this.props.nodeName,e,this.props.children):(e.dangerouslySetInnerHTML={__html:l.renderToStaticMarkup(a.DOM.noscript({},this.props.children)).replace("<noscript>","\x3c!--[if IE 9]>\x3c!--\x3e<noscript>\x3c!--<![endif]--\x3e").replace("</noscript>","\x3c!--[if IE 9]>\x3c!--\x3e</noscript>\x3c!--<![endif]--\x3e")},a.createElement(this.props.nodeName,e))}});return{checkElementsInViewport:d,Lazy:f,verge:c}})},1006:function(e,t){/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function(t,r,n){void 0!==e&&e.exports?e.exports=n():t.verge=n()}(this,0,function(){function e(){return{width:u(),height:p()}}function t(e,t){var r={};return t=+t||0,r.width=(r.right=e.right+t)-(r.left=e.left-t),r.height=(r.bottom=e.bottom+t)-(r.top=e.top-t),r}function r(e,r){return!(!(e=e&&!e.nodeType?e[0]:e)||1!==e.nodeType)&&t(e.getBoundingClientRect(),r)}function n(t){t=null==t?e():1===t.nodeType?r(t):t;var n=t.height,o=t.width;return n="function"==typeof n?n.call(t):n,(o="function"==typeof o?o.call(t):o)/n}var o={},a="undefined"!=typeof window&&window,i="undefined"!=typeof document&&document,l=i&&i.documentElement,c=a.matchMedia||a.msMatchMedia,s=c?function(e){return!!c.call(a,e).matches}:function(){return!1},u=o.viewportW=function(){var e=l.clientWidth,t=a.innerWidth;return e<t?t:e},p=o.viewportH=function(){var e=l.clientHeight,t=a.innerHeight;return e<t?t:e};return o.mq=s,o.matchMedia=c?function(){return c.apply(a,arguments)}:function(){return{}},o.viewport=e,o.scrollX=function(){return a.pageXOffset||l.scrollLeft},o.scrollY=function(){return a.pageYOffset||l.scrollTop},o.rectangle=r,o.aspect=n,o.inX=function(e,t){var n=r(e,t);return!!n&&n.right>=0&&n.left<=u()},o.inY=function(e,t){var n=r(e,t);return!!n&&n.bottom>=0&&n.top<=p()},o.inViewport=function(e,t){var n=r(e,t);return!!n&&n.bottom>=0&&n.right>=0&&n.top<=p()&&n.left<=u()},o})},405:function(e,t,r){"use strict";function n(e){return{authors:e.authors}}function o(e){return{mainentity:e.mainentity,loading:e.loading}}Object.defineProperty(t,"__esModule",{value:!0}),t.AuthorPrimaryView=t.AuthorList=void 0;var a=r(120),i=r(403),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=r(119),s=r(992);t.AuthorList=(0,a.connect)(n)((0,l.default)(s.AuthorList,{fetcher:"fetchAuthors",success:c.actionTypes.AUTHORS_FETCHED})),t.AuthorPrimaryView=(0,a.connect)(o)((0,l.default)(s.AuthorPrimaryView,{fetcher:"fetchAuthor",success:c.actionTypes.AUTHOR_FETCHED}))},990:function(e,t,r){"use strict";function n(e){return o[e]||"#ccc"}Object.defineProperty(t,"__esModule",{value:!0}),t.genreColor=n;var o=(t.STYLES={titleChart:{backgroundColor:"#009687",color:"white",fontVariant:"small-caps",fontSize:"35px",fontWeight:"bold",justifyContent:"center"}},t.GENRE_COLORS={"comédie":"#ff7f0e","tragédie":"#1f77b4","comedie-ballet":"#ffbb78",drame:"#17becf",autre:"#e377c2",null:"#f7b6d2"})},992:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){function t(e,t){return(0,f.createElement)(T.Link,{to:"/play/"+t.play_id},e)}var r=e.authorData;return(0,f.createElement)(b.Card,{className:(0,_.mdlclass)({col:9,tablet:12})},(0,f.createElement)(b.CardTitle,{style:E.STYLES.titleChart},"pièces"),(0,f.createElement)(b.CardText,{style:{margin:"0 auto",fontSize:"1em"}},(0,f.createElement)(g.BootstrapTable,{data:r.playsOverview,hover:!0},(0,f.createElement)(g.TableHeaderColumn,{dataField:"title",isKey:!0,dataSort:!0,dataFormat:t,width:"15%"},"Titre"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"receipts",dataSort:!0,dataFormat:_.numberWithSpaces,width:"13%"},"Recettes (livres)"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"nb_perf",dataSort:!0,width:"12%"},"Représentations"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"date_de_premiere",dataSort:!0,dataFormat:w.dateFormatter,width:"14%"},"Date de la Première"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"total_1",dataSort:!0,width:"8%"},"Jouée en 1"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"total_2",dataSort:!0,width:"8%"},"Jouée en 2"),(0,f.createElement)(g.TableHeaderColumn,{dataField:"genre",dataSort:!0,width:"10%"},"Genre"))))}function c(e){var t=e.authorData,r=t.genres.map(function(e){return{label:e.genre,count:e.nbplayed,object:e}});return(0,f.createElement)(b.Card,{className:(0,_.mdlclass)({col:3,tablet:12})},(0,f.createElement)(b.CardTitle,{style:E.STYLES.titleChart},"statistiques"),(0,f.createElement)(b.CardText,null,(0,f.createElement)(C.Pie,{stats:r,id:"piegenre",title:"Répartition des pièces jouées par genre",seriename:"Nombre de représentations",colorfunc:E.genreColor,urlformatter:function(e){return m.browserHistory.push((0,T.buildURL)("/genre/"+e.point.object.genre))}})),p({authorData:t}))}function s(e){var t=e.authorData,r=0,n=0;t.receipts.map(function(e){return r+=e.receipts}),t.playsOverview.map(function(e){return n+=e.nb_perf});var o=[{valueClass:"scopenote",value:t.bnf_notes},{label:"Pièces",value:t.playsOverview.length},{label:"Représentations",value:n},{label:"Recettes",value:(0,_.numberWithSpaces)(r)+" livres"}];return t.ext_uris&&t.ext_uris[0]&&o.push({value:(0,f.createElement)("a",{href:t.ext_uris[0],style:{color:"#757575"}},"Voir cet auteur sur data.bnf.fr")}),(0,f.createElement)("section",{className:"section--center mdl-grid",style:{justifyContent:"center"}},(0,f.createElement)(b.Card,{className:(0,_.mdlclass)({col:3,tablet:6})},(0,f.createElement)("img",{src:t.depict_urls[0]||(0,T.buildURL)("/images/default-picto-author.png"),style:{maxHeight:"200px",margin:"auto"}}),(0,f.createElement)("p",{style:{textAlign:"center"}},(t.birthdate||"?")+" - "+(t.deathdate||"?"))),(0,f.createElement)(b.Card,{className:(0,_.mdlclass)({col:3,tablet:6,phone:4})},(0,f.createElement)(b.CardTitle,null,t.name),(0,w.infoprops)(o)))}function u(e){var t=e.authorData;if(!(t.depict_urls.length&&t.depict_urls[0]||t.lagrangeImages.length))return(0,f.createElement)("div");var r=t.lagrangeImages.map(function(e){return{imgurl:e.imgurl,targeturl:e.url,imgtitle:e.title+" ("+e.subtitle+")",imgsrc:"Illustration provenant de La Grange"}});return t.depict_urls.forEach(function(e){var t=e,n=void 0,o=void 0;-1!==t.indexOf("wiki")?(n="Illustration provenant de wikimedia",o=t):-1!==t.indexOf("ark:/")&&(n="Illustration provenant de Gallica",o=t.slice(0,-10)),r.push({imgurl:t,imgsrc:n,targeturl:o})}),(0,f.createElement)(b.Card,{className:(0,y.default)("mdl-shadow--2dp",(0,_.mdlclass)(12))},(0,f.createElement)(b.CardTitle,{style:E.STYLES.titleChart},"Images"),f.createElement.apply(void 0,[b.CardText,{className:"mdl-grid",style:{margin:"auto"}}].concat(n(r.map(function(e){return(0,f.createElement)("div",{className:(0,y.default)("mdl-shadow--2dp author-image-wrapper",(0,_.mdlclass)({col:2,tablet:4,phone:2})),style:{justifyContent:"center",padding:"5px"}},(0,f.createElement)(v.Lazy,{nodeName:"a",href:e.targeturl,title:e.imgtitle,className:"image-link image-link--200px",style:{textDecoration:"none"}},(0,f.createElement)("img",{alt:e.imgtitle,src:e.imgurl,style:{maxHeight:"200px",maxWidth:"100%",display:"block",margin:"auto"}}),(0,f.createElement)("p",{className:"author-img-caption"},(0,f.createElement)("span",{className:"author-image-title"},""+e.imgtitle!="undefined"?""+e.imgtitle:""),(0,f.createElement)("span",{className:"author-image-src"},""+e.imgsrc))))})))))}function p(e){var t=e.authorData,r=t.coplayed.map(function(e){return{label:e.author_name,count:e.count,object:e}}).sort(function(e,t){return t.count-e.count}).slice(0,10);return(0,f.createElement)(C.Pie,{stats:r,id:"coplayedpie",title:"Les 10 auteurs les plus joués la même soirée",seriename:"auteurs",urlformatter:function(e){return m.browserHistory.push((0,T.buildURL)("/author/"+e.point.object.author_id))}})}Object.defineProperty(t,"__esModule",{value:!0}),t.AuthorPrimaryView=t.AuthorList=void 0;var d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),m=r(251),h=r(3),y=function(e){return e&&e.__esModule?e:{default:e}}(h),b=r(81),g=r(250),v=r(1005),w=r(403),E=r(990),T=r(101),_=r(249),x=r(995),C=r(997);(t.AuthorList=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props.authors||[];return(0,f.createElement)("div",{className:"mdl-grid"},e.map(function(e){return(0,f.createElement)("div",{className:(0,_.mdlclass)(3),key:e.id,style:{marginTop:"15px"}},(0,f.createElement)(T.Link,{to:"/author/"+e.id,style:{textDecoration:"none",display:"inline-block"}},(0,f.createElement)(b.Card,{shadow:2,style:{background:"#fff"}},(0,f.createElement)(b.CardTitle,{expand:!0,style:{background:e.depict_urls[0]?'url("'+e.depict_urls[0]+'") no-repeat center top':"url("+(0,T.buildURL)("/images/default-picto-author.png")+") no-repeat center top",minHeight:"250px",borderTop:"3px solid #009688"}}),(0,f.createElement)(b.CardText,{style:{background:"#009688",width:"100%",padding:0}},(0,f.createElement)("h2",{style:{padding:"5px 10px 5px 10px",margin:"5px",lineHeight:"35px",fontSize:"20px",textAlign:"center",color:"#fff"}},e.name)))))}))}}]),t}(f.Component)).propTypes={authors:f.PropTypes.array};var O=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this;return(0,f.createElement)(x.HighchartsComparator,{urlformatter:function(t){return(0,T.buildURL)("/aseason/"+e.props.authorData.id+"/"+t.point.name)},seriedef:{name:this.props.authorData.name,data:this.props.authorData.receipts},plotTitle:"saisons théâtrales"})}}]),t}(f.Component);O.propTypes={authorData:f.PropTypes.object},(t.AuthorPrimaryView=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){return this.props.loading?(0,f.createElement)(b.Spinner,{style:{margin:"auto",display:"block"}}):(0,f.createElement)("div",{id:"overview"},(0,f.createElement)(s,{authorData:this.props.mainentity}),(0,f.createElement)("section",{className:"section--center mdl-grid"},(0,f.createElement)(c,{authorData:this.props.mainentity}),(0,f.createElement)(l,{authorData:this.props.mainentity})),(0,f.createElement)("section",{className:"section--center"},(0,f.createElement)(O,{authorData:this.props.mainentity})),(0,f.createElement)(u,{authorData:this.props.mainentity}))}}]),t}(f.Component)).propTypes={loading:f.PropTypes.bool,mainentity:f.PropTypes.object}},995:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.HighchartsComparator=void 0;var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),s=r(251),u=r(81),p=r(991),d=n(p),f=r(249),m=r(990),h=r(101),y=r(404),b=n(y);(t.HighchartsComparator=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.chart=null,r.addSerie=r.addSerie.bind(r),r}return i(t,e),l(t,[{key:"addSerie",value:function(e){var t=this;fetch((0,h.buildURL)("/author/seriedef-"+e.id+".json")).then(function(e){return e.json()}).then(function(e){return t.chart.addSeries(e)})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.urlformatter,r=e.seriedef;this.chart=new d.default.Chart({chart:{renderTo:"seasonchart",type:"column",zoomType:"x"},title:{text:" "},xAxis:{type:"category",labels:{rotation:-45}},yAxis:{title:{text:"Recettes (livres)"}},plotOptions:{series:{cursor:"pointer",point:{events:{click:function(e){s.browserHistory.push(t(e))}}}}},series:[{name:r.name,data:r.data.map(function(e){return[e.season,e.receipts]})}]})}},{key:"render",value:function(){return(0,c.createElement)(u.Card,{className:(0,f.mdlclass)(12)},(0,c.createElement)(u.CardTitle,{style:m.STYLES.titleChart},this.props.plotTitle),(0,c.createElement)("div",{id:"comparator-autocomplete",className:"mdl-cell mdl-cell--4-col mdl-cell--8-offset"},(0,c.createElement)(b.default,{title:"Entrez un auteur pour comparer les recettes",onItemClick:this.addSerie,onItemSelect:this.addSerie,itemfetcher:y.authorsearch})),(0,c.createElement)(u.CardText,{style:{margin:"auto"}},(0,c.createElement)("div",{id:"seasonchart"})))}}]),t}(c.Component)).propTypes={urlformatter:c.PropTypes.func,seriedef:c.PropTypes.object,plotTitle:c.PropTypes.string}},997:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Pie=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),c=r(991),s=function(e){return e&&e.__esModule?e:{default:e}}(c);(t.Pie=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.stats,r=e.id,n=e.colorfunc,o=e.title,a=e.seriename,i=e.urlformatter,l=t.map(function(e){return{y:Number(e.count),color:n?n(e.label):null,object:e.object,name:e.label}});new s.default.Chart({chart:{renderTo:r,type:"pie"},title:{text:o},yAxis:{title:{text:" "}},series:[{name:a,data:l}],plotOptions:{series:{cursor:"pointer",point:{events:{click:function(e){i&&i(e)}}}}}})}},{key:"render",value:function(){return(0,l.createElement)("div",{id:this.props.id})}}]),t}(l.Component)).propTypes={id:l.PropTypes.string,stats:l.PropTypes.array,title:l.PropTypes.string,seriename:l.PropTypes.string,colorfunc:l.PropTypes.func,urlformatter:l.PropTypes.func}}});