(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{27:function(e,t,n){e.exports=n(58)},32:function(e,t,n){},33:function(e,t,n){},51:function(e,t,n){},52:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAADpklEQVRIS7WWX0xbVRzHv4fSjV6wnEY6N5hZ7wTn6JA2PGC2bALqskT3x/i0+GALL3tx6yZ72Mt2wUcXKSYmvgDDxPBktk5NjGS2iEs0WS3+aa3CuHcx/NnW2dsOSqGUa3qhUspt7zXD83T//H7nc37/D4HK4vkoDQtTJ8cnZ09NPxBpNJ6wLS+naWmpTjQZmbHqnVSos+z0vWCp8bCsSSy2HSn0M8Dz9MdR4UpwYto1n1hUOxPKme2w1la7mw9buuwsqwhVhH3+ld9x2z/eI8YTVJWSJ0CNjHioqe78W683XcvX3QTr7Rvmfv79ryv/FZIvb7fu4d51vtKV+30DbKtAWUDj/me7znW8xmXf/4X1DX3nuO2fGHhSi/L1DzXVOjtOH5FdKsO83gD9YvQPXjVGTAV27TLhmdI5zMxEcT+ufrRMDI8f3se2ttpFGXb1k6/doYnpc8VVd+Bgiw0nXq2BuTSJez8FcPNWGGOP1IH1tdW9nWeOuch1b4B+6w1FFdPbWIUG+/NoO1AFM1OGigrg7+9nEVkuw+4jT6MsmcTjxAJm+En47ggIzy4pkjNl0dZabyIff+p1+H/hFWNlfcmGE0ftqH0qZw9p7Tk3tRbj8A8H4BmZxFQBQ5teZJ2ku+fmDWEqclJJxnZwFbanXMVVqccIDo/B453A3QKibI15kFzoHvKJ8YWX/28YNRpGyJlLg9JSKq14nqKW5bpTg2V6vU4k7Z39WbVNwIKwlRTu/xnCD7NpmOvq0bwjhbCKG+U60wQzpBCbSwMlelQyKzLIc2scEVqHN47Ww0qTWmCxjBt9S6l0kZg1gkZC8HzDI2Jk0WxJInhHWAeZ9dBpcOM2vW6EvPf+0LVobOGdogliSOJeYK2IH27Dc7YDqxZlQBlFDTBTpWEwk/oOYSqiWGcbYraSAYYQfKTDbnsOSCPMUlPlJD0DXvprkI9qSn2lgtYIa7CyJrkPnL38mXsusbipN25VUVcw23s/6n7bJcPWrBMAVOZayFhYtLU0om2vEUxJgdYgpRGb5vGl9zeMhhXHQKzBylrOO1tXu35mXegecojxhS2fZ9RocH54+fT6PMsC2zv7OIA88ZVg3QdSV//Vjs2TeuuBG0FyB1GKRPvFPgck4s6PofqYlCViIJKr/4MO9dtVdkMXd53G5qMckaAywXOcRtBbWW7i3Nyb2u+NuRa4uAEan185JUmkhQAWALY1i2MAxiRAIETyGctLbrg5Z9Eb8T9dP6h0bHvVRgAAAABJRU5ErkJggg=="},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(24),r=n.n(c),u=n(11),m=(n(32),n(1)),o=n(26);n(33);var b=function(){return l.a.createElement("div",{className:"spinner"})},s=n(9),d=n.n(s),i=(n(51),n(52));d.a.defaults.baseURL="http://66.175.217.67:3020/",d.a.defaults.headers.common={Authorization:"Bearer ".concat("5afe34f322478bc5352a3d988ed4ccb18f7a409160339038c83c772c8a6a7387eb3caf90d064861965eec7eb210286ba")};var A=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){d.a.post("/argames/getQuery").then((function(e){return e.data.result})).then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]),n?l.a.createElement("div",{id:"table"},l.a.createElement("table",{className:"dataTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"S No."),l.a.createElement("th",null,"Email Address"),l.a.createElement("th",null,"Query"),l.a.createElement("th",null,"Query Date"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.query),l.a.createElement("td",null,e.createdAt),l.a.createElement("td",null,l.a.createElement("img",{src:i,alt:"tick"})))}))))):l.a.createElement("div",null,l.a.createElement(b,null))};var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:A})))};r.a.render(l.a.createElement(u.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e2a63419.chunk.js.map