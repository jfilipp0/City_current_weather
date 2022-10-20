(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i,a,o,c,r=n(5),s=n.n(r),l=n(23),u=n.n(l),d=(n(30),n(0)),h=n(3),m=n(1),j=n(2),b=(n(31),n(25)),v=n(7),f=n(15),p=n.n(f),w=n(16),O=(n(33),n(34),{Rain:{title:"Raining",subtitle:"Grab a cup of coffee",icon:"wi-storm-showers"},Clear:{title:"Super Sunny",subtitle:"Wear sunglasses!",icon:"wi-day-sunny"},Thunderstorm:{title:"A Storm is coming",subtitle:"Better get inside!",icon:"wi-thunderstorm"},Clouds:{title:"Cloudy",subtitle:"With a chance of drizzle or rain",icon:"wi-cloudy"},Snow:{title:"Snow",subtitle:"Get out and build a snowman!",icon:"wi-snow"},Drizzle:{title:"Drizzle",subtitle:"Partially raining...",icon:"wi-sleet"},Haze:{title:"Haze",subtitle:"Another name for Partly Raining",icon:"wi-cloudy-windy"},Mist:{title:"Mist",subtitle:"Microscopic water droplets",icon:"wi-sleet"}}),x=n(6),y=function(e){var t,n,i,a=e.state;return Object(x.jsxs)("div",{className:"weatherContainer",children:[Object(x.jsx)("div",{className:"headerContainer",children:Object(x.jsxs)("h2",{className:"title",children:[a.location,", ",a.countrylocation]})}),Object(x.jsx)("div",{className:"headerContainer",children:Object(x.jsx)("h1",{children:Object(x.jsx)("i",{className:"wi ".concat(null===(t=O[null===a||void 0===a?void 0:a.weatherCondition])||void 0===t?void 0:t.icon," display-1")})})}),Object(x.jsxs)("div",{className:"bodyContainer",children:[Object(x.jsx)("p",{className:"title",children:null===(n=O[null===a||void 0===a?void 0:a.weatherCondition])||void 0===n?void 0:n.title}),Object(x.jsx)("p",{className:"subtitle",children:null===(i=O[null===a||void 0===a?void 0:a.weatherCondition])||void 0===i?void 0:i.subtitle})]}),Object(x.jsx)("div",{className:"headerContainer",children:Object(x.jsxs)("h1",{className:"tempText",children:[null===a||void 0===a?void 0:a.temperature,"\xb0"]})}),Object(x.jsx)("div",{className:"headerContainer",children:Object(x.jsxs)("h2",{className:"title",children:["feels like: ",null===a||void 0===a?void 0:a.feelsLike,"\xb0"]})}),Object(x.jsx)("div",{className:"bodyContainer",children:Object(x.jsxs)("p",{className:"subtitle",children:["[min]: ",null===a||void 0===a?void 0:a.tempmin,"\xb0 [max]: ",null===a||void 0===a?void 0:a.tempmax,"\xb0"]})})]})},g=n(8),C=(n(36),n(13)),N=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).animate=i.animate.bind(Object(g.a)(i)),i}return Object(h.a)(n,[{key:"init",value:function(){(i=new C.f).background=new C.b(2767692),a=new C.e(75,window.innerWidth/window.innerHeight),(o=new C.g).setSize(window.innerWidth,window.innerHeight);var e=new C.a,t=new C.d({color:65280,wireframe:!0});return c=new C.c(e,t),i.add(c),a.position.z=5,o.domElement}},{key:"animate",value:function(){requestAnimationFrame(this.animate),c.rotation.x+=.008,c.rotation.y+=.008,o.render(i,a)}},{key:"componentDidMount",value:function(){document.getElementById("Render").appendChild(this.init()),this.animate()}},{key:"render",value:function(){return Object(x.jsx)("div",{id:"Render",className:"webgl"})}}]),n}(r.Component),k=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,location:null,countrylocation:null,temperature:0,feelsLike:0,tempmin:0,tempmax:0,weatherCondition:null,sunrise:0,sunset:0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.fetchWeather(t.coords.latitude,t.coords.longitude)}),(function(t){e.fetchWeather(51.5072,-.1276),e.setState({error:"Error Retriving Weather Conditions"})}))}},{key:"fetchWeather",value:function(){var e=Object(w.a)(p.a.mark((function e(t,n){var i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!==t&&null!==n||(t=53.344,n=-6.2672),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(t,"&lon=").concat(n,"&APPID=").concat("1e14c9961b01b549746bff384ab999ba","&units=metric"),{method:"GET",cache:"no-cache"}).then((function(e){return e.json()})).then((function(e){console.log(e),i.setState({isLoading:!1,location:e.name,countrylocation:e.sys.country,temperature:i.float2int(e.main.temp),feelsLike:i.float2int(e.main.feels_like),tempmin:i.float2int(e.main.temp_min),tempmax:i.float2int(e.main.temp_max),weatherCondition:e.weather[0].main,sunrise:e.sys.sunrise,sunset:e.sys.sunset})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"float2int",value:function(e){return 0|Math.ceil(e)}},{key:"render",value:function(){var e=this.state.isLoading;return Object(x.jsx)("div",{className:"container",children:e?Object(x.jsx)("div",{className:"loadingContainer",children:Object(x.jsx)("h3",{className:"loadingText",children:"Fetching Your Weather"})}):Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{state:this.state}),Object(x.jsx)(N,{})]})})}}]),n}(r.Component);function z(){return Object(x.jsx)(b.a,{children:Object(x.jsx)(v.c,{children:Object(x.jsx)(v.a,{path:"/",exact:!0,component:k})})})}n(42);var S=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{id:"Render",className:"App",children:Object(x.jsx)(z,{})})}}]),n}(r.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};u.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),W()}},[[43,1,2]]]);
//# sourceMappingURL=main.1b1a70fb.chunk.js.map