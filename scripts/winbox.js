/**
 * WinBox.js v0.2.82
 * Author and Copyright: Thomas Wilkerling
 * Licence: Apache-2.0
 * Hosted by Nextapps GmbH
 * https://github.com/nextapps-de/winbox
 */
(function(){'use strict';var e,aa=document.createElement("div");aa.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function h(a,b,c,f){a&&a.addEventListener(b,c,f||!1)}function k(a,b){var c=window,f=l;c&&c.removeEventListener(a,b,f||!1)}function m(a,b){a.stopPropagation();b&&a.preventDefault()}function t(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)};/*
 self.max &&*/
var u=[],x=[],ba={capture:!0,passive:!1},l={capture:!0,passive:!0},A,ea=0,B=10,E,F,fa,J,K,ha;
function P(a,b){if(!(this instanceof P))return new P(a);A||ia();if(a){if(b){var c=a;a=b}if("string"===typeof a)c=a;else{var f=a.id;var d=a.index;var n=a.root;var p=a.template;c=c||a.title;var v=a.icon;var L=a.mount;var Q=a.html;var g=a.url;var q=a.width;var r=a.height;var w=a.minwidth;var C=a.minheight;var y=a.maxwidth;var z=a.maxheight;var ca=a.autosize;var D=a.overflow;var G=a.min;var H=a.max;var I=a.hidden;var da=a.modal;var W=a.x||(da?"center":0);var X=a.y||(da?"center":0);var M=a.top;var N=a.left;
var R=a.bottom;var S=a.right;var ja=a.background;var O=a.border;var T=a.header;var Y=a["class"];var ka=a.oncreate;var pa=a.onclose;var qa=a.onfocus;var ra=a.onblur;var sa=a.onmove;var ta=a.onresize;var ua=a.onfullscreen;var va=a.onmaximize;var wa=a.onminimize;var xa=a.onrestore;var ya=a.onhide;var za=a.onshow;var Aa=a.onload}}this.g=(p||aa).cloneNode(!0);this.g.id=this.id=f||"winbox-"+ ++ea;this.g.className="winbox"+(Y?" "+("string"===typeof Y?Y:Y.join(" ")):"")+(da?" modal":"");this.g.winbox=this;
this.window=this.g;this.body=this.g.getElementsByClassName("wb-body")[0];this.h=T||35;x.push(this);ja&&this.setBackground(ja);O?t(this.body,"margin",O+(isNaN(O)?"":"px")):O=0;T&&(b=this.g.getElementsByClassName("wb-header")[0],t(b,"height",T+"px"),t(b,"line-height",T+"px"),t(this.body,"top",T+"px"));c&&this.setTitle(c);v&&this.setIcon(v);L?this.mount(L):Q?this.body.innerHTML=Q:g&&this.setUrl(g,Aa);M=M?U(M,K):0;R=R?U(R,K):0;N=N?U(N,J):0;S=S?U(S,J):0;c=J-N-S;v=K-M-R;y=y?U(y,c):c;z=z?U(z,v):v;w=w?U(w,
y):150;C=C?U(C,z):this.h;ca?((n||A).appendChild(this.body),q=Math.max(Math.min(this.body.clientWidth+2*O+1,y),w),r=Math.max(Math.min(this.body.clientHeight+this.h+O+1,z),C),this.g.appendChild(this.body)):(q=q?U(q,y):Math.max(y/2,w)|0,r=r?U(r,z):Math.max(z/2,C)|0);W=W?U(W,c,q):N;X=X?U(X,v,r):M;this.x=W;this.y=X;this.width=q;this.height=r;this.s=w;this.o=C;this.m=y;this.l=z;this.top=M;this.right=S;this.bottom=R;this.left=N;this.index=d;this.j=D;this.focused=this.hidden=this.full=this.max=this.min=!1;
this.onclose=pa;this.onfocus=qa;this.onblur=ra;this.onmove=sa;this.onresize=ta;this.onfullscreen=ua;this.onmaximize=va;this.onminimize=wa;this.onrestore=xa;this.onhide=ya;this.onshow=za;I?this.hide():this.focus();if(d||0===d)this.index=d,t(this.g,"z-index",d),d>B&&(B=d);H?this.maximize():G?this.minimize():this.resize().move();la(this);(n||A).appendChild(this.g);ka&&ka.call(this,a)}P["new"]=function(a){return new P(a)};P.stack=function(){return x};
function U(a,b,c){"string"===typeof a&&("center"===a?a=(b-c)/2+.5|0:"right"===a||"bottom"===a?a=b-c:(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c+.5|0:c));return a}
function ia(){A=document.body;A[F="requestFullscreen"]||A[F="msRequestFullscreen"]||A[F="webkitRequestFullscreen"]||A[F="mozRequestFullscreen"]||(F="");fa=F&&F.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");h(window,"resize",function(){ma();na()});h(A,"mousedown",function(){ha=!1},!0);h(A,"mousedown",function(){if(!ha){var a=x.length;if(a)for(--a;0<=a;a--){var b=x[a];if(b.focused){b.blur();break}}}});ma()}
function la(a){V(a,"drag");V(a,"n");V(a,"s");V(a,"w");V(a,"e");V(a,"nw");V(a,"ne");V(a,"se");V(a,"sw");h(a.g.getElementsByClassName("wb-min")[0],"click",function(b){m(b);a.min?a.restore().focus():a.minimize()});h(a.g.getElementsByClassName("wb-max")[0],"click",function(b){m(b);a.max?a.restore().focus():a.maximize().focus()});F?h(a.g.getElementsByClassName("wb-full")[0],"click",function(b){m(b);a.fullscreen().focus()}):a.addClass("no-full");h(a.g.getElementsByClassName("wb-close")[0],"click",function(b){m(b);
a.close()||(a=null)});h(a.g,"mousedown",function(){ha=!0},!0);h(a.body,"mousedown",function(){a.focus()},!0)}function Z(a){u.splice(u.indexOf(a),1);na();a.removeClass("min");a.min=!1;a.g.title=""}function na(){for(var a=u.length,b={},c={},f=0,d;f<a;f++)d=u[f],d=d.left+":"+d.top,c[d]?c[d]++:(b[d]=0,c[d]=1);f=0;for(var n,p;f<a;f++)d=u[f],n=d.left+":"+d.top,p=Math.min((J-d.left-d.right)/c[n],250),d.resize(p+1|0,d.h,!0).move(d.left+b[n]*p|0,K-d.bottom-d.h,!0),b[n]++}
function V(a,b){function c(g){m(g,!0);a.focus();if("drag"===b){if(a.min){a.restore();return}if(!a.g.classList.contains("no-max")){var q=Date.now(),r=q-Q;Q=q;if(300>r){a.max?a.restore():a.maximize();return}}}a.min||(A.classList.add("wb-lock"),(p=g.touches)&&(p=p[0])?(g=p,h(window,"touchmove",f,l),h(window,"touchend",d,l)):(h(window,"mousemove",f,l),h(window,"mouseup",d,l)),v=g.pageX,L=g.pageY)}function f(g){m(g);p&&(g=g.touches[0]);var q=g.pageX;g=g.pageY;var r=q-v,w=g-L,C=a.width,y=a.height,z=a.x,
ca=a.y,D;if("drag"===b){if(a.g.classList.contains("no-move"))return;a.x+=r;a.y+=w;var G=D=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=r;var H=1}else if("w"===b||"sw"===b||"nw"===b)a.x+=r,a.width-=r,G=H=1;if("s"===b||"se"===b||"sw"===b){a.height+=w;var I=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=w,a.height-=w,D=I=1}H&&(a.width=Math.max(Math.min(a.width,a.m,J-a.x-a.right),a.s),H=a.width!==C);I&&(a.height=Math.max(Math.min(a.height,a.l,K-a.y-a.bottom),a.o),I=a.height!==y);(H||I)&&a.resize();G&&
(a.max&&(a.x=(q<J/3?a.left:q>J/3*2?J-a.width-a.right:J/2-a.width/2)+r),a.x=Math.max(Math.min(a.x,a.j?J-30:J-a.width-a.right),a.j?30-a.width:a.left),G=a.x!==z);D&&(a.max&&(a.y=a.top+w),a.y=Math.max(Math.min(a.y,a.j?K-a.h:K-a.height-a.bottom),a.top),D=a.y!==ca);if(G||D)a.max&&a.restore(),a.move();if(H||G)v=q;if(I||D)L=g}function d(g){m(g);A.classList.remove("wb-lock");p?(k("touchmove",f),k("touchend",d)):(k("mousemove",f),k("mouseup",d))}var n=a.g.getElementsByClassName("wb-"+b)[0];if(n){var p,v,L,
Q=0;h(n,"mousedown",c,ba);h(n,"touchstart",c,ba)}}function ma(){var a=document.documentElement;J=a.clientWidth;K=a.clientHeight}e=P.prototype;e.mount=function(a){this.unmount();a.i||(a.i=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.i;c&&c.appendChild(b);b.i=a}return this};
e.setTitle=function(a){var b=this.g.getElementsByClassName("wb-title")[0];a=this.title=a;var c=b.firstChild;c?c.nodeValue=a:b.textContent=a;return this};e.setIcon=function(a){var b=this.g.getElementsByClassName("wb-icon")[0];t(b,"background-image","url("+a+")");t(b,"display","inline-block");return this};e.setBackground=function(a){t(this.g,"background",a);return this};
e.setUrl=function(a,b){var c=this.body.firstChild;c&&"iframe"===c.tagName.toLowerCase()?c.src=a:(this.body.innerHTML='<iframe src="'+a+'"></iframe>',b&&(this.body.firstChild.onload=b));return this};e.focus=function(a){if(!1===a)return this.blur();if(!this.focused){a=x.length;if(1<a)for(var b=1;b<=a;b++){var c=x[a-b];if(c.focused){c.blur();x.push(x.splice(x.indexOf(this),1)[0]);break}}t(this.g,"z-index",++B);this.index=B;this.addClass("focus");this.focused=!0;this.onfocus&&this.onfocus()}return this};
e.blur=function(a){if(!1===a)return this.focus();this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur());return this};e.hide=function(a){if(!1===a)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")};e.show=function(a){if(!1===a)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")};
e.minimize=function(a){if(!1===a)return this.restore();E&&oa();this.max&&(this.removeClass("max"),this.max=!1);this.min||(u.push(this),na(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Ba()),this.onminimize&&this.onminimize());return this};function Ba(){var a=x.length;if(a)for(--a;0<=a;a--){var b=x[a];if(!b.min){b.focus();break}}}
e.restore=function(){E&&oa();this.min&&(Z(this),this.resize().move(),this.onrestore&&this.onrestore());this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore());return this};e.maximize=function(a){if(!1===a)return this.restore();E&&oa();this.min&&Z(this);this.max||(this.addClass("max").resize(J-this.left-this.right,K-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize());return this};
e.fullscreen=function(a){this.min&&(Z(this),this.resize().move());if(!E||!oa())this.body[F](),E=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(!1===a)return this.restore();return this};function oa(){E.full=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[fa](),!0}
e.close=function(a){if(this.onclose&&this.onclose(a))return!0;this.min&&Z(this);x.splice(x.indexOf(this),1);this.unmount();this.g.remove();this.g.textContent="";this.g=this.body=this.g.winbox=null;this.focused&&Ba()};e.move=function(a,b,c){a||0===a?c||(this.x=a?a=U(a,J-this.left-this.right,this.width):0,this.y=b?b=U(b,K-this.top-this.bottom,this.height):0):(a=this.x,b=this.y);t(this.g,"left",a+"px");t(this.g,"top",b+"px");this.onmove&&this.onmove(a,b);return this};
e.resize=function(a,b,c){a||0===a?c||(this.width=a?a=U(a,this.m):0,this.height=b?b=U(b,this.l):0,a=Math.max(a,this.s),b=Math.max(b,this.o)):(a=this.width,b=this.height);t(this.g,"width",a+"px");t(this.g,"height",b+"px");this.onresize&&this.onresize(a,b);return this};
e.addControl=function(a){var b=a["class"],c=a.image,f=a.click;a=a.index;var d=document.createElement("span"),n=this.g.getElementsByClassName("wb-control")[0],p=this;b&&(d.className=b);c&&t(d,"background-image","url("+c+")");f&&(d.onclick=function(v){f.call(this,v,p)});n.insertBefore(d,n.childNodes[a||0]);return this};e.removeControl=function(a){(a=this.g.getElementsByClassName(a)[0])&&a.remove();return this};e.addClass=function(a){this.g.classList.add(a);return this};
e.removeClass=function(a){this.g.classList.remove(a);return this};e.toggleClass=function(a){return this.g.classList.contains(a)?this.removeClass(a):this.addClass(a)};window.WinBox=P;}).call(this);