(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{9667:function(n,r,t){"use strict";t.d(r,{n:function(){return e}});var e={username:"Whil",coins:100}},7057:function(n,r,t){"use strict";t.d(r,{m:function(){return p}});var e=t(5893),i=t(2465),o=t(7294),c=t(1647),u=t(4352);function s(){var n=(0,i.Z)(["\n          padding: 10px;\n"]);return s=function(){return n},n}function a(){var n=(0,i.Z)(["\n      font-size: larger;\n      font-family: Rock Salt;\n      margin-left: 30px;\n      padding: 10px;\n"]);return a=function(){return n},n}function d(){var n=(0,i.Z)(["\n    top: 0;\n    position: absolute;\n    width: 100%;\n    font-family: Roboto;\n    height: auto;\n    background: #E9E9E9;\n    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.25);\n    display: flex;\n    justify-content:flex-start;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n"]);return d=function(){return n},n}var l=u.Z.div(d()),f=u.Z.h1(a()),x=u.Z.div(s()),p=function(n){var r=n.userCoin,t=(0,o.useContext)(c.S).username;return(0,e.jsxs)(l,{children:[(0,e.jsx)(f,{children:"Rick and Morty"}),(0,e.jsxs)(x,{children:[(0,e.jsx)("h2",{children:t}),(0,e.jsxs)("p",{children:["Stackly Coins:",r]})]})]})}},1647:function(n,r,t){"use strict";t.d(r,{S:function(){return e}});var e=(0,t(7294).createContext)(null)},2322:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return J}});var e=t(5893),i=t(7757),o=t.n(i),c=t(2137),u=t(1163),s=t(3391),a=t(2465),d=t(7294),l=t(7057),f=t(1647),x=t(4352);function p(){var n=(0,a.Z)(["\n      color: red;\n      font-size: larger;\n"]);return p=function(){return n},n}function h(){var n=(0,a.Z)(["\n      padding: 20px;\n      margin-left: 20px;\n      margin-right: 20px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n      width: 577px;\n      height: 332px;\n      background: #FFFFFF;\n      border-radius: 10px;\n      h2{\n        font-family: Rock Salt;\n      }\n      font-family: Roboto;\n      p{\n        font-size: larger;\n      }\n      div{\n        display: flex;\n        justify-content: space-around;\n        width: 40%;\n      }\n"]);return h=function(){return n},n}function g(){var n=(0,a.Z)(["\n      font-size: large;\n      border: none;\n      padding: 10px;\n      border-radius: 18px;\n      color: white;\n      background-color: ","\n"]);return g=function(){return n},n}function j(){var n=(0,a.Z)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0;\n      padding: 0;\n      display: flex;\n      background-color:rgba(0,0,0,0.5);\n      height: 100vh;\n      width: 100%;\n      top: 0;\n      position: absolute;\n"]);return j=function(){return n},n}var v=x.Z.div(j()),y=x.Z.button(g(),(function(n){return n.primary?"#49B240":"#C12121"})),m=x.Z.div(h()),b=x.Z.h4(p()),Z=function(n){var r=n.cardId,t=n.setValidBuy,i=n.setPrice,o=n.setUserCoin,c=(0,d.useContext)(f.S),u=(0,d.useState)(!1),s=u[0],a=u[1];return(0,e.jsx)(v,{children:(0,e.jsxs)(m,{children:[(0,e.jsx)("h2",{children:"Rick and Morty"}),(0,e.jsx)("p",{children:"\xbfDo your want buy this card?"}),s&&(0,e.jsx)(b,{children:"No tienes suficientes coins"}),(0,e.jsxs)("div",{children:[(0,e.jsx)(y,{onClick:function(){return t(!1)},children:"No"}),(0,e.jsx)(y,{onClick:function(){return c.coins=c.coins-r,c.coins>=0?(t(!1),i(!0),o(c.coins)):(a(!0),c.coins=0)},primary:!0,children:"Yes"})]})]})})};function k(){var n=(0,a.Z)(["\n      color:","\n"]);return k=function(){return n},n}function w(){var n=(0,a.Z)(["\n      border: none;\n      color: white;\n      border-radius: 15px;\n      font-size: larger;\n      padding: 5px 10px;\n      background-color: ","\n"]);return w=function(){return n},n}function S(){var n=(0,a.Z)(["\n      display:flex;\n      align-items: center;\n      justify-content: space-around;\n"]);return S=function(){return n},n}function C(){var n=(0,a.Z)(["\n      /* padding: 30px; */\n      padding-top:10px;\n      padding-bottom: 20px;\n      padding-left: 30px;\n      padding-right: 12px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 190px;\n  \n"]);return C=function(){return n},n}function F(){var n=(0,a.Z)(["\n      margin: 10px;\n      margin-top: 50px;\n      width:300px;\n      display: flex;\n      flex-direction: column;\n      background: #F5F5F5;\n      box-shadow: 5px 5px 20px 5px rgba(100, 100, 100, 0.25);\n      border-radius: 10px;\n      img {\n        border-radius: 10px 10px 0 0;\n        width: 100%;\n        height: 280px;\n      }\n"]);return F=function(){return n},n}function _(){var n=(0,a.Z)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: Roboto;\n      text-decoration: none;\n      color:black;\n      height: 100vh;\n      width: 100%;\n      background-color: #F5F5F5;\n"]);return _=function(){return n},n}var E=x.Z.div(_()),N=x.Z.div(F()),R=x.Z.div(C()),B=x.Z.div(S()),P=x.Z.button(w(),(function(n){return n.primary?"#49B240":"#242424"})),z=x.Z.h3(k(),(function(n){return n.primary?"red":"#242424"})),O=function(n){var r=n.data,t=n.router,i=r.id,o=r.image,c=r.name,u=r.status,a=r.species,f=r.gender,x=r.created,p=r.origin,h=(0,d.useState)(null),g=h[0],j=h[1],v=(0,d.useState)(!1),y=v[0],m=v[1],b=function(n,r){var t=(0,d.useState)((function(){try{var t=window.localStorage.getItem(n);return t?JSON.parse(t):r}catch(e){return r}})),e=t[0],i=t[1];return[e,function(r){try{i(r),window.localStorage.setItem(n,JSON.stringify(r))}catch(t){console.error(t)}}]}("coin",""),k=(0,s.Z)(b,2),w=k[0],S=k[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.m,{userCoin:w}),(0,e.jsx)(E,{children:(0,e.jsxs)(N,{children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{src:o,alt:c})}),(0,e.jsxs)(R,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:c}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("b",{children:"Status:"}),u]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("b",{children:"Species:"}),a]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("b",{children:"Gender:"}),f]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("b",{children:"Origin:"}),null===p||void 0===p?void 0:p.name]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("b",{children:"Created:"}),x]})]})]}),(0,e.jsxs)(B,{children:[(0,e.jsx)(P,{onClick:function(){return t.back()},children:"Back"}),!y&&(0,e.jsx)(P,{primary:!0,onClick:function(){return j(!0)},children:"Buy"}),y&&(0,e.jsx)(z,{primary:!0,children:"Sold out"}),!y&&(0,e.jsxs)(z,{children:["Price:$",i]})]})]})]})}),g&&(0,e.jsx)(Z,{setUserCoin:S,cardId:i,setValidBuy:j,setPrice:m})]})},I=t(9667),J=function(){var n=(0,d.useState)({}),r=n[0],t=n[1],i=(0,u.useRouter)(),s=i.query.pid;return(0,d.useEffect)((function(){return s?function(){var n=(0,c.Z)(o().mark((function n(r){var e,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://rickandmortyapi.com/api/character/".concat(r),n.next=3,fetch(e);case 3:return i=n.sent,n.next=6,i.json();case 6:c=n.sent,t(c);case 8:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()(s):null}),[s]),(0,e.jsx)(f.S.Provider,{value:I.n,children:(0,e.jsx)(O,{data:r,router:i})})}},4972:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/character/[pid]",function(){return t(2322)}])},1163:function(n,r,t){n.exports=t(2441)}},function(n){n.O(0,[173,774,888,179],(function(){return r=4972,n(n.s=r);var r}));var r=n.O();_N_E=r}]);