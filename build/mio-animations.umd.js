!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).MiOAnimations=i()}(this,(function(){"use strict";class t{#t;#i;#e;constructor(t){switch(!0){case t.includes("#"):this.#t=document.getElementById(t.substring(1));break;case t.includes("."):this.#t=document.getElementsByClassName(t.substring(1))[0];break;default:this.#t=null}this.#t||console.error("MiO Animations | Canvas - failed to get the parent node: ",t),this.#i=document.createElement("canvas"),this.#i.setAttribute("id","MiO-Animations-Canvas"),this.#e=null,this.#n(),this.#s()}#n(){this.#t&&this.#i&&(this.#t.appendChild(this.#i),this.#t&&"style"in this.#t&&(this.#t.style.position="relative",this.#t.style.overflow="hidden"),this.#i.width=this.#t.clientWidth,this.#i.height=this.#t.clientHeight)}#s(){this.#e=()=>{this.#t&&this.#i&&(this.#i.width=this.#t.clientWidth,this.#i.height=this.#t.clientHeight)},window.addEventListener("resize",this.#e.bind(this))}getNode(){return this.#i}getContext(t){if(!this.#i)return!1;switch(t.toUpperCase()){case"2D":return this.#i.getContext("2d");case"WEBGL":return this.#i.getContext("webgl");case"WEBGL2":return this.#i.getContext("webgl2");default:return!1}}initialize(){this.#s()}dispose(){window.removeEventListener("resize",this.#e)}}class i{static Canvas=t;static GenerateUUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const i=16*Math.random()|0;return("x"==t?i:3&i|8).toString(16)}))}static GenerateRandom(t,i){return Math.floor(Math.random()*(i-t))+t}static GetType(t,i){if(!i)return Object.prototype.toString.call(t);switch(i.toUpperCase()){case"FULL":default:return Object.prototype.toString.call(t);case"SHORT":return Object.prototype.toString.call(t).slice(8,-1)}}}class e{#o;#a;#r;#h;#c;#l;#d;#v;#u;#p;get positionX(){return this.#u}set positionX(t){this.#u=t}get positionY(){return this.#p}set positionY(t){this.#p=t}get velocityX(){return this.#d}set velocityX(t){this.#d=t}get velocityY(){return this.#v}set velocityY(t){this.#v=t}constructor(t){this.#o=t,this.#a=document.getElementById("MiO-Animations-Canvas"),this.#a||console.error("MiO Animations | Star - failed to create stars"),this.#r="255, 255, 255",this.#h=.5,this.#c=Math.random()+i.GenerateRandom(1,3),this.#l=.1,this.#d=this.#l-.5*Math.random(),this.#v=this.#l-.5*Math.random(),this.#u=Math.random()*this.#a.width,this.#p=Math.random()*this.#a.height,this.draw()}draw(){const t=this.#a.getContext("2d");t&&(t.beginPath(),t.fillStyle="rgba("+this.#r+", "+this.#h+")",t.arc(this.#u,this.#p,this.#c,0,2*Math.PI,!1),t.fill())}}class n{static Canvas;static Context;static Color;static Opacity;static Width;static Distance;static Radius;static PositionX;static PositionY;static Draw(t,i,e,s){n.Context&&(n.Context.beginPath(),n.Context.strokeStyle="rgba("+n.Color+", "+n.Opacity+")",n.Context.lineWidth=n.Width,n.Context.moveTo(t,i),n.Context.lineTo(e,s),n.Context.stroke(),n.Context.closePath())}}class s{#a;#m;#C;#g;#x;#e;constructor(t){this.#a=new i.Canvas(t),this.#m=this.#a.getContext("2d"),this.#a.getNode().style.background="rgba(46, 46, 46, 1)",this.#C=null,this.#x=null,this.#e=null,this.#g=new Map,this.#y(),this.#w(),this.#s(),this.#f(this.#X.bind(this))}#y(t){let n=t;n||(n=200);let s=0;for(;s<n;){const t=i.GenerateUUID();this.#g.set(t,new e(t)),s+=1}}#w(){n.Canvas=this.#a.getNode(),n.Context=this.#m,n.Color="255, 255, 255",n.Opacity=.5,n.Width=.2,n.Distance=100,n.Radius=100,n.PositionX=.5*this.#a.getNode().width,n.PositionY=.5*this.#a.getNode().height}#s(){this.#x=t=>{n.Canvas&&(n.PositionX=t.pageX-n.Canvas.offsetLeft,n.PositionY=t.pageY-n.Canvas.offsetTop)},this.#e=()=>{this.dispose(),this.initialize()},window.addEventListener("mousemove",this.#x.bind(this)),window.addEventListener("resize",this.#e.bind(this))}#X(){this.#g.forEach((t=>{t.positionX<0||t.positionX>this.#a.getNode().width?(t.velocityX=-t.velocityX,t.velocityY=t.velocityY):(t.positionY<0||t.positionY>this.#a.getNode().height)&&(t.velocityX=t.velocityX,t.velocityY=-t.positionY),t.positionX+=t.velocityX,t.positionY+=t.velocityY,t.draw(),this.#g.forEach((i=>{t.positionX-i.positionX<n.Distance&&t.positionY-i.positionY<n.Distance&&t.positionX-i.positionX>-n.Distance&&t.positionY-i.positionY>-n.Distance&&t.positionX-n.PositionX<n.Radius&&t.positionY-n.PositionY<n.Radius&&t.positionX-n.PositionX>-n.Radius&&t.positionY-n.PositionY>-n.Radius&&n.Draw(t.positionX,t.positionY,i.positionX,i.positionY)}))}))}#f(t){t(),this.#C=window.requestAnimationFrame((()=>{this.#m.clearRect(0,0,this.#a.getNode().width,this.#a.getNode().height),this.#f(this.#X.bind(this))}))}setRange(t,e){try{const s=t;s&&"[object Number]"===i.GetType(s)&&s>=0&&(n.Radius=s);const o=e;return o&&"[object Number]"===i.GetType(o)&&o>=0&&(n.Distance=o),!0}catch(t){return console.warn("MiO Animations | Constellation - failed to set range"),!1}}initialize(){try{return this.#a.initialize(),this.#y(),this.#w(),this.#s(),this.#f(this.#X.bind(this)),!0}catch(t){return console.warn("MiO Animations | Constellation - failed to initialize"),!1}}dispose(){try{return this.#m.clearRect(0,0,this.#a.getNode().width,this.#a.getNode().height),window.cancelAnimationFrame(this.#C),window.removeEventListener("mousemove",this.#x),window.removeEventListener("resize",this.#e),this.#a.dispose(),this.#C=null,this.#x=null,this.#e=null,this.#g.clear(),!0}catch(t){return console.warn("MiO Animations | Constellation - failed to dispose"),!1}}}const o={MiOConstellation:s};return window.MiOAnimations={MiOConstellation:s},o}));
//# sourceMappingURL=mio-animations.umd.js.map
