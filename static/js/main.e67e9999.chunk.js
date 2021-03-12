(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var a,i,r,c,s,d,o,l,b,p,m,h,u,j=n(0),g=n.n(j),x=n(23),f=n.n(x),y=n(2),v=n(7),O=n(3),w=Object(O.a)(a||(a=Object(y.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n}\n"]))),k=(n.p,n.p,n.p+"static/media/cliffs.5def8fd9.svg"),D=n(8),T=n.n(D),I=n(56),N=n(13),W=n.n(N),S=n(27),z=n.p+"static/media/magnifier.f38bc1fe.svg",C=n(1),E=O.b.form(i||(i=Object(y.a)(["\n  display: flex;\n  height: 3rem;\n  margin: 1.5rem;\n  #city {\n    width: 60vw;\n    padding: 0.8rem;\n    border-bottom-left-radius: 0.6rem;\n    border-top-left-radius: 0.6rem;\n    font-size: 1rem;\n  }\n"]))),L=O.b.button(r||(r=Object(y.a)(["\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  border-bottom-right-radius: 0.6rem;\n  border-top-right-radius: 0.6rem;\n  outline: none;\n  cursor: pointer;\n  img {\n    height: 60%;\n    width: 60%;\n    filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)\n      brightness(101%) contrast(116%);\n  }\n"]))),J=function(e){var t=e.setWeatherToday,n=e.setNextDays,a=e.setIsError,i=Object(j.useState)(""),r=Object(v.a)(i,2),c=r[0],s=r[1],d=function(){var e=Object(S.a)(W.a.mark((function e(i){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.preventDefault(),c&&T.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(c,"&units=metric&appid=").concat("15828b26d493494c0caefd77c45a9d79")).then((function(e){return s(""),t(e.data),e.data})).then((function(e){var t=e.city.coord.lat,n=e.city.coord.lon;return T.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&units=metric&exclude=minutely,hourly,alerts&appid=").concat("15828b26d493494c0caefd77c45a9d79","\n          "))})).then((function(e){n(e.data)})).catch((function(e){e.response&&404===e.response.status&&(console.clear(),t(void 0),n(void 0),s(""),a(!0))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(E,{onSubmit:d,children:[Object(C.jsx)("input",{onChange:function(e){return function(e){s(e.target.value)}(e)},type:"text",id:"city",name:"city",placeholder:"Search...",value:c}),Object(C.jsx)(L,{type:"submit",children:Object(C.jsx)("img",{src:z})})]})},U=n.p+"static/media/clear-sky-d.c60f4c02.svg",q=n.p+"static/media/clear-sky-n.d0c86a82.svg",A=n.p+"static/media/few-clouds-d.e6073a14.svg",B=n.p+"static/media/few-clouds-n.6f36f036.svg",H=n.p+"static/media/clouds-d.fe569a7c.svg",M=n.p+"static/media/clouds-n.fe569a7c.svg",P=n.p+"static/media/broken-clouds-d.d134e40e.svg",_=n.p+"static/media/broken-clouds-n.d134e40e.svg",F=n.p+"static/media/shower-rain-d.14c99246.svg",G=n.p+"static/media/shower-rain-n.51ab1571.svg",K=n.p+"static/media/rain-d.98a1c694.svg",Q=n.p+"static/media/rain-n.98a1c694.svg",R=n.p+"static/media/thunder-d.50bc26e9.svg",V=n.p+"static/media/thunder-n.aa0fcaa2.svg",X=n.p+"static/media/snow-d.5d006e00.svg",Y=n.p+"static/media/snow-n.5d006e00.svg",Z=n.p+"static/media/mist-d.b5620fd2.svg",$=n.p+"static/media/mist-n.b5620fd2.svg",ee=function(e){return"01d"===e?U:"01n"===e?q:"02d"===e?A:"02n"===e?B:"03d"===e?H:"03n"===e?M:"04d"===e?P:"04n"===e?_:"09d"===e?F:"09n"===e?G:"10d"===e?K:"10n"===e?Q:"11d"===e?R:"11n"===e?V:"13d"===e?X:"13n"===e?Y:"50d"===e?Z:$},te=function(e){var t=Date.now(),n=new Date(t+1e3*e).toUTCString().split(" ");return"".concat(n[0]," ").concat(n[1]," ").concat(n[2]," ").concat(n[3])},ne=n.p+"static/media/hot-day.b45d784c.svg",ae=n.p+"static/media/winter.d21f9f66.svg",ie=n.p+"static/media/mountain-day.1819b54a.svg",re=function(e){return e<1?ae:e<20?ie:ne},ce={hidden:{opacity:0,x:"-30vw"},visible:{opacity:1,x:0,transition:{duration:2.5,type:"spring"}}},se={hidden:{opacity:0,x:"30vw"},visible:{opacity:1,x:0,transition:{duration:2.5,type:"spring"}}},de={hidden:{opacity:0},visible:{opacity:1,transition:{duration:2,delay:.5}}},oe=O.b.div.attrs((function(e){return{bg:e.bg||k}}))(c||(c=Object(y.a)(["\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\n    url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: 3;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 2rem;\n"])),(function(e){return e.bg})),le=O.b.div(s||(s=Object(y.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.2rem;\n  @media (max-width: 375px) {\n    width: 90%;\n  }\n  @media (min-width: 376) and (max-width: 414px) {\n    width: 75%;\n  }\n"]))),be=Object(O.b)(I.a.div)(d||(d=Object(y.a)(["\n  margin: 1rem auto;\n  padding: 1rem;\n  border-radius: 2rem;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  .temperature {\n    text-align: center;\n    font-size: calc(4rem + 5vw);\n    line-height: calc(6rem + 4vw);\n  }\n"]))),pe=O.b.div(o||(o=Object(y.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n\n  .description-box {\n  }\n  img {\n    height: 5rem;\n    filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)\n      brightness(101%) contrast(116%);\n  }\n"]))),me=Object(O.b)(I.a.h1)(l||(l=Object(y.a)(["\n  font-size: calc(2rem + 1.3vw);\n  line-height: calc(3rem + 1vw);\n"]))),he=Object(O.b)(I.a.h2)(b||(b=Object(y.a)(["\n  font-family: sans-serif;\n  font-weight: lighter;\n  margin-top: 0.3rem;\n"]))),ue=function(e){var t=e.weatherToday,n=e.setIsLoading,a=e.setWeatherToday,i=e.setNextDays,r=Object(j.useState)(!1),c=Object(v.a)(r,2),s=c[0],d=c[1];return void 0!=t?Object(C.jsxs)(oe,{bg:re(parseInt(t.list[0].main.temp)),children:[Object(C.jsx)(J,{setIsLoading:n,setWeatherToday:a,setNextDays:i,setIsError:d}),Object(C.jsxs)(le,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(me,{variants:ce,initial:"hidden",animate:"visible",children:[t.city.name,", ",t.city.country]},"location ".concat(t.city.name)),Object(C.jsx)(he,{variants:se,initial:"hidden",animate:"visible",children:te(t.city.timezone)},"currentDate ".concat(t.city.name))]}),Object(C.jsxs)(be,{variants:de,initial:"hidden",animate:"visible",children:[Object(C.jsx)("div",{className:"temperature",children:Object(C.jsxs)("p",{children:[parseInt(t.list[0].main.temp),"\xb0C"]})}),Object(C.jsxs)(pe,{children:[Object(C.jsx)("img",{src:ee(t.list[0].weather[0].icon),alt:t.list[0].weather[0].description}),Object(C.jsxs)("div",{className:"description-box",children:[Object(C.jsx)("h3",{children:t.list[0].weather[0].description}),Object(C.jsxs)("p",{children:["Humidity: ",t.list[0].main.humidity,"%"]}),Object(C.jsxs)("p",{children:["Wind: ",t.list[0].wind.speed," km/h"]})]})]})]},"content ".concat(t.city.name))]})]}):Object(C.jsxs)(oe,{children:[Object(C.jsx)(J,{setIsLoading:n,setWeatherToday:a,setNextDays:i,setIsError:d}),s?Object(C.jsx)("h1",{children:"Wrong city"}):""]})},je=function(e,t){var n=new Date(1e3*(e+t)).toUTCString().split(" ")[0].split(",")[0];return"".concat(n)},ge=O.b.div(p||(p=Object(y.a)(["\n  .temp-box {\n    display: flex;\n    justify-content: space-between;\n    .minimum {\n      color: grey;\n      padding-left: 0.5rem;\n    }\n  }\n"]))),xe=function(e){var t=e.nextDays,n=e.day;return Object(C.jsxs)(ge,{children:[Object(C.jsx)("p",{children:je(t.daily[n].dt,t.timezone_offset)}),Object(C.jsx)("img",{src:ee(t.daily[n].weather[0].icon),alt:""}),Object(C.jsxs)("div",{className:"temp-box",children:[Object(C.jsxs)("p",{children:[parseInt(t.daily[n].temp.max),"\xb0C"]}),Object(C.jsxs)("p",{className:"minimum",children:[parseInt(t.daily[n].temp.min),"\xb0C"]})]})]})},fe=O.b.div(m||(m=Object(y.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgba(255, 255, 255, 1);\n  color: black;\n"]))),ye=function(e){var t=e.nextDays;return Object(C.jsxs)(fe,{children:[Object(C.jsx)(xe,{nextDays:t,day:1}),Object(C.jsx)(xe,{nextDays:t,day:2}),Object(C.jsx)(xe,{nextDays:t,day:3})]})},ve=O.b.div(h||(h=Object(y.a)(["\n  overflow: hidden;\n  color: white;\n  min-height: 95vh;\n  min-width: 90%;\n  border-radius: 2rem;\n  text-align: center;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    min-height: 100vh;\n    width: 100%;\n    border-radius: 0rem;\n  }\n"]))),Oe=function(e){var t=e.weatherToday,n=e.setWeatherToday,a=Object(j.useState)(),i=Object(v.a)(a,2),r=i[0],c=i[1];return void 0!=r?Object(C.jsxs)(ve,{type:"space-around",children:[Object(C.jsx)(ue,{weatherToday:t,setWeatherToday:n,setNextDays:c}),Object(C.jsx)(ye,{nextDays:r})]}):Object(C.jsx)(ve,{type:"space-around",children:Object(C.jsx)(ue,{weatherToday:t,setWeatherToday:n,setNextDays:c})})};var we=O.b.div.attrs((function(e){return{bg:e.bg||k}}))(u||(u=Object(y.a)(["\n  @media (min-width: 769px) {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    background: linear-gradient(\n        rgba(255, 255, 255, 0.35),\n        rgba(255, 255, 255, 0.35)\n      ),\n      url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n"])),(function(e){return e.bg})),ke=function(){var e=Object(j.useState)(void 0),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(w,{}),Object(C.jsx)(we,{bg:n?re(parseInt(n.list[0].main.temp)):k,children:Object(C.jsx)(Oe,{weatherToday:n,setWeatherToday:a})})]})};f.a.render(Object(C.jsx)(g.a.StrictMode,{children:Object(C.jsx)(ke,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e67e9999.chunk.js.map