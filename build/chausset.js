(function(n,r,p){function w(e){j.logging&&(n.console&&n.console.log)&&n.console.log(e)}function ba(e,c,a,f,b,g){c=j.Util.getCSS(c,e,b);var h;1===c.length&&(b=c[0],c=[],c[0]=b,c[1]=b);-1!==c[0].toString().indexOf("%")?(h=parseFloat(c[0])/100,b=a.width*h,"backgroundSize"!==e&&(b-=(g||f).width*h)):b="backgroundSize"===e?"auto"===c[0]?f.width:c[0].match(/contain|cover/)?j.Util.resizeBounds(f.width,f.height,a.width,a.height,c[0]).width:parseInt(c[0],10):parseInt(c[0],10);"auto"===c[1]?a=b/f.width*f.height:
-1!==c[1].toString().indexOf("%")?(h=parseFloat(c[1])/100,a=a.height*h,"backgroundSize"!==e&&(a-=(g||f).height*h)):a=parseInt(c[1],10);return[b,a]}var j={},M;j.Util={};var ea=String.prototype.trim;j.Util.trimText=function(e){return ea?ea.apply(e):((e||"")+"").replace(/^\s+|\s+$/g,"")};j.Util.parseBackgroundImage=function(e){var c,a,f,b,g,h=[],m,d=0,j=0,t,n,s=function(){if(c){'"'===a.substr(0,1)&&(a=a.substr(1,a.length-2));a&&n.push(a);if("-"===c.substr(0,1)&&0<(b=c.indexOf("-",1)+1))f=c.substr(0,
b),c=c.substr(b);h.push({prefix:f,method:c.toLowerCase(),value:g,args:n})}n=[];c=f=a=g=""};s();for(var D=0,w=e.length;D<w;D++)if(m=e[D],!(0===d&&-1<" \r\n\t".indexOf(m))){switch(m){case '"':t?t===m&&(t=null):t=m;break;case "(":if(t)break;else if(0===d){d=1;g+=m;continue}else j++;break;case ")":if(t)break;else if(1===d)if(0===j){d=0;g+=m;s();continue}else j--;break;case ",":if(!t)if(0===d){s();continue}else if(1===d&&0===j&&!c.match(/^url$/i)){n.push(a);a="";g+=m;continue}}g+=m;0===d?c+=m:a+=m}s();
return h};j.Util.Bounds=function(e){var c={};if(e.getBoundingClientRect)return e=e.getBoundingClientRect(),c.top=e.top,c.bottom=e.bottom||e.top+e.height,c.left=e.left,c.width=e.width||e.right-e.left,c.height=e.height||e.bottom-e.top,c};j.Util.getCSS=function(e,c,a){function f(b,a){var c=e.runtimeStyle&&e.runtimeStyle[b],f,g=e.style;!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(a)&&/^-?\d/.test(a)&&(f=g.left,c&&(e.runtimeStyle.left=e.currentStyle.left),g.left="fontSize"===b?"1em":a||0,a=g.pixelLeft+"px",g.left=
f,c&&(e.runtimeStyle.left=c));return!/^(thin|medium|thick)$/i.test(a)?Math.round(parseFloat(a))+"px":a}var b,g=c.match(/^background(Size|Position)$/);void 0!==e&&(M=r.defaultView.getComputedStyle(e,null));b=M[c];if(g){if(b=(b||"").split(","),b=b[a||0]||b[0]||"auto",b=j.Util.trimText(b).split(" "),!("backgroundSize"===c&&(!b[0]||b[0].match(/cover|contain|auto/)))){b[0]=-1===b[0].indexOf("%")?f(c+"X",b[0]):b[0];if(b[1]===p){if("backgroundSize"===c)return b[1]="auto",b;b[1]=b[0]}b[1]=-1===b[1].indexOf("%")?
f(c+"Y",b[1]):b[1]}}else/border(Top|Bottom)(Left|Right)Radius/.test(c)&&(c=b.split(" "),1>=c.length&&(c[1]=c[0]),c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10),b=c);return b};j.Util.resizeBounds=function(e,c,a,f,b){e/=c;!b||"auto"===b?(b=a,a=f):a/f<e^"contain"===b?(a=f,b=f*e):(b=a,a/=e);return{width:b,height:a}};j.Util.BackgroundPosition=function(e,c,a,f,b){e=ba("backgroundPosition",e,c,a,f,b);return{left:e[0],top:e[1]}};j.Util.BackgroundSize=function(e,c,a,f){e=ba("backgroundSize",e,c,a,f);return{width:e[0],
height:e[1]}};j.Util.Extend=function(e,c){for(var a in e)e.hasOwnProperty(a)&&(c[a]=e[a]);return c};j.Util.Children=function(e){var c;try{var a;if(e.nodeName&&"IFRAME"===e.nodeName.toUpperCase())a=e.contentDocument||e.contentWindow.document;else{var f=e.childNodes;e=[];if(null!==f){var b=e.length,g=0;if("number"===typeof f.length)for(var h=f.length;g<h;g++)e[b++]=f[g];else for(;f[g]!==p;)e[b++]=f[g++];e.length=b}a=e}c=a}catch(m){w("html2canvas.Util.Children failed with exception: "+m.message),c=[]}return c};
var K={};j.Util.Font=function(e,c,a){if(K[e+"-"+c]!==p)return K[e+"-"+c];var f=a.createElement("div"),b=a.createElement("img"),g=a.createElement("span"),h;f.style.visibility="hidden";f.style.fontFamily=e;f.style.fontSize=c;f.style.margin=0;f.style.padding=0;a.body.appendChild(f);b.src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";b.width=1;b.height=1;b.style.margin=0;b.style.padding=0;b.style.verticalAlign="baseline";g.style.fontFamily=e;g.style.fontSize=c;g.style.margin=
0;g.style.padding=0;g.appendChild(a.createTextNode("Hidden Text"));f.appendChild(g);f.appendChild(b);h=b.offsetTop-g.offsetTop+1;f.removeChild(g);f.appendChild(a.createTextNode("Hidden Text"));f.style.lineHeight="normal";b.style.verticalAlign="super";b={baseline:h,lineWidth:1,middle:b.offsetTop-f.offsetTop+1};K[e+"-"+c]=b;a.body.removeChild(f);return b};j.Generate={};var N=[/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
/^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];j.Generate.parseGradient=function(e,c){var a,f,b=N.length,g,h,m,d;for(f=0;f<b&&!(g=e.match(N[f]));f+=1);if(g)switch(g[1]){case "-webkit-linear-gradient":case "-o-linear-gradient":a=
{type:"linear",x0:null,y0:null,x1:null,y1:null,colorStops:[]};if(b=g[2].match(/\w+/g)){h=b.length;for(f=0;f<h;f+=1)switch(b[f]){case "top":a.y0=0;a.y1=c.height;break;case "right":a.x0=c.width;a.x1=0;break;case "bottom":a.y0=c.height;a.y1=0;break;case "left":a.x0=0,a.x1=c.width}}null===a.x0&&null===a.x1&&(a.x0=a.x1=c.width/2);null===a.y0&&null===a.y1&&(a.y0=a.y1=c.height/2);if(b=g[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)){h=b.length;m=1/Math.max(h-
1,1);for(f=0;f<h;f+=1)d=b[f].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),d[2]?(g=parseFloat(d[2]),g="%"===d[3]?g/100:g/c.width):g=f*m,a.colorStops.push({color:d[1],stop:g})}break;case "-webkit-gradient":a={type:"radial"===g[2]?"circle":g[2],x0:0,y0:0,x1:0,y1:0,colorStops:[]};if(b=g[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/))a.x0=b[1]*c.width/100,a.y0=b[2]*c.height/100,a.x1=b[3]*c.width/100,a.y1=b[4]*c.height/100;if(b=g[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)){h=
b.length;for(f=0;f<h;f+=1)d=b[f].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/),g=parseFloat(d[2]),"from"===d[1]&&(g=0),"to"===d[1]&&(g=1),a.colorStops.push({color:d[3],stop:g})}break;case "-moz-linear-gradient":a={type:"linear",x0:0,y0:0,x1:0,y1:0,colorStops:[]};if(b=g[2].match(/(\d{1,3})%?\s(\d{1,3})%?/))a.x0=b[1]*c.width/100,a.y0=b[2]*c.height/100,a.x1=c.width-a.x0,a.y1=c.height-a.y0;if(b=g[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)){h=
b.length;m=1/Math.max(h-1,1);for(f=0;f<h;f+=1)d=b[f].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/),d[2]?(g=parseFloat(d[2]),d[3]&&(g/=100)):g=f*m,a.colorStops.push({color:d[1],stop:g})}break;case "-webkit-radial-gradient":case "-moz-radial-gradient":case "-o-radial-gradient":a={type:"circle",x0:0,y0:0,x1:c.width,y1:c.height,cx:0,cy:0,rx:0,ry:0,colorStops:[]};if(b=g[2].match(/(\d{1,3})%?\s(\d{1,3})%?/))a.cx=b[1]*c.width/100,a.cy=b[2]*c.height/100;b=g[3].match(/\w+/);
d=g[4].match(/[a-z\-]*/);if(b&&d)switch(d[0]){case "farthest-corner":case "cover":case "":f=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.cy,2));b=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.y1-a.cy,2));h=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.y1-a.cy,2));d=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.cy,2));a.rx=a.ry=Math.max(f,b,h,d);break;case "closest-corner":f=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.cy,2));b=Math.sqrt(Math.pow(a.cx,2)+Math.pow(a.y1-a.cy,2));h=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.y1-
a.cy,2));d=Math.sqrt(Math.pow(a.x1-a.cx,2)+Math.pow(a.cy,2));a.rx=a.ry=Math.min(f,b,h,d);break;case "farthest-side":"circle"===b[0]?a.rx=a.ry=Math.max(a.cx,a.cy,a.x1-a.cx,a.y1-a.cy):(a.type=b[0],a.rx=Math.max(a.cx,a.x1-a.cx),a.ry=Math.max(a.cy,a.y1-a.cy));break;case "closest-side":case "contain":"circle"===b[0]?a.rx=a.ry=Math.min(a.cx,a.cy,a.x1-a.cx,a.y1-a.cy):(a.type=b[0],a.rx=Math.min(a.cx,a.x1-a.cx),a.ry=Math.min(a.cy,a.y1-a.cy))}if(b=g[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)){h=
b.length;m=1/Math.max(h-1,1);for(f=0;f<h;f+=1)d=b[f].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),d[2]?(g=parseFloat(d[2]),g="%"===d[3]?g/100:g/c.width):g=f*m,a.colorStops.push({color:d[1],stop:g})}}return a};j.Generate.Gradient=function(e,c){if(!(0===c.width||0===c.height)){var a=r.createElement("canvas"),f=a.getContext("2d"),b,g,h,m;a.width=c.width;a.height=c.height;if(b=j.Generate.parseGradient(e,c))if("linear"===b.type){g=f.createLinearGradient(b.x0,
b.y0,b.x1,b.y1);h=0;for(m=b.colorStops.length;h<m;h+=1)try{g.addColorStop(b.colorStops[h].stop,b.colorStops[h].color)}catch(d){w(["failed to add color stop: ",d,"; tried to add: ",b.colorStops[h],"; stop: ",h,"; in: ",e])}f.fillStyle=g;f.fillRect(0,0,c.width,c.height)}else if("circle"===b.type){g=f.createRadialGradient(b.cx,b.cy,0,b.cx,b.cy,b.rx);h=0;for(m=b.colorStops.length;h<m;h+=1)try{g.addColorStop(b.colorStops[h].stop,b.colorStops[h].color)}catch(n){w(["failed to add color stop: ",n,"; tried to add: ",
b.colorStops[h],"; stop: ",h,"; in: ",e])}f.fillStyle=g;f.fillRect(0,0,c.width,c.height)}else if("ellipse"===b.type){var t=r.createElement("canvas"),p=t.getContext("2d");g=Math.max(b.rx,b.ry);var s=2*g;t.width=t.height=s;g=p.createRadialGradient(b.rx,b.ry,0,b.rx,b.ry,g);h=0;for(m=b.colorStops.length;h<m;h+=1)try{g.addColorStop(b.colorStops[h].stop,b.colorStops[h].color)}catch(D){w(["failed to add color stop: ",D,"; tried to add: ",b.colorStops[h],"; stop: ",h,"; in: ",e])}p.fillStyle=g;p.fillRect(0,
0,s,s);f.fillStyle=b.colorStops[h-1].color;f.fillRect(0,0,a.width,a.height);f.drawImage(t,b.cx-b.rx,b.cy-b.ry,2*b.rx,2*b.ry)}return a}};j.Generate.ListAlpha=function(e){var c="",a;do a=e%26,c=String.fromCharCode(a+64)+c,e/=26;while(26<26*e);return c};j.Generate.ListRoman=function(e){var c="M CM D CD C XC L XL X IX V IV I".split(" "),a=[1E3,900,500,400,100,90,50,40,10,9,5,4,1],f="",b,g=c.length;if(0>=e||4E3<=e)return e;for(b=0;b<g;b+=1)for(;e>=a[b];)e-=a[b],f+=c[b];return f};j.Parse=function(e,c){function a(){return Math.max(Math.max(x.body.scrollWidth,
x.documentElement.scrollWidth),Math.max(x.body.offsetWidth,x.documentElement.offsetWidth),Math.max(x.body.clientWidth,x.documentElement.clientWidth))}function f(){return Math.max(Math.max(x.body.scrollHeight,x.documentElement.scrollHeight),Math.max(x.body.offsetHeight,x.documentElement.offsetHeight),Math.max(x.body.clientHeight,x.documentElement.clientHeight))}function b(a,b){var c=parseInt(u(a,b),10);return isNaN(c)?0:c}function g(a,b,c,qa,e,d){"transparent"!==d&&(a.setVariable("fillStyle",d),a.fillRect(b,
c,qa,e))}function h(a,b){switch(b){case "lowercase":return a.toLowerCase();case "capitalize":return a.replace(/(^|\s|:|-|\(|\))([a-z])/g,function(a,b,A){if(0<a.length)return b+A.toUpperCase()});case "uppercase":return a.toUpperCase();default:return a}}function m(a,b,c,e){var d=u(b,"fontWeight"),f=u(b,"fontFamily"),g=u(b,"fontSize");switch(parseInt(d,10)){case 401:d="bold";break;case 400:d="normal"}a.setVariable("fillStyle",e);a.setVariable("font",[u(b,"fontStyle"),u(b,"fontVariant"),d,g,f].join(" "));
a.setVariable("textAlign","left");if("none"!==c)return j.Util.Font(f,g,x)}function d(a,b,d){var e=d.ctx,f=u(a,"color"),ia=u(a,"textDecoration");d=u(a,"textAlign");var v,E,t=b,s=0;if(0<j.Util.trimText(b.nodeValue).length){b.nodeValue=h(b.nodeValue,u(a,"textTransform"));d=d.replace(["-webkit-auto"],["auto"]);var F;if(F=!c.letterRendering){if(d=/^(left|right|justify|auto)$/.test(d))d=u(a,"letterSpacing"),d=/^(normal|none|0px)$/.test(d);F=d}E=F?b.nodeValue.split(/(\b| )/):b.nodeValue.split("");v=m(e,
a,ia,f);c.chinese&&E.forEach(function(a,b){/.*[\u4E00-\u9FA5].*$/.test(a)&&(a=a.split(""),a.unshift(b,1),E.splice.apply(E,a))});E.forEach(function(a,b){var A;A=b<E.length-1;var c;if(K.rangeBounds){if("none"!==ia||0!==j.Util.trimText(a).length){A=t;c=s;var d=x.createRange();d.setStart(A,c);d.setEnd(A,c+a.length);c=d.getBoundingClientRect()}s+=a.length}else if(t&&"string"===typeof t.nodeValue){A=A?t.splitText(a.length):null;var $=t;c=$.parentNode;var d=x.createElement("wrapper"),pa=$.cloneNode(!0);
d.appendChild($.cloneNode(!0));c.replaceChild(d,$);$=j.Util.Bounds(d);c.replaceChild(pa,d);c=$;t=A}if(A=c)switch(c=A.left,d=A.bottom,null!==a&&0<j.Util.trimText(a).length&&e.fillText(a,c,d),ia){case "underline":g(e,A.left,Math.round(A.top+v.baseline+v.lineWidth),A.width,1,f);break;case "overline":g(e,A.left,Math.round(A.top),A.width,1,f);break;case "line-through":g(e,A.left,Math.ceil(A.top+v.middle+v.lineWidth),A.width,1,f)}})}}function ca(a){return(a=e[a])&&!0===a.succeeded?a.img:!1}function t(a,
b){var c=Math.max(a.left,b.left),d=Math.max(a.top,b.top),e=Math.min(a.left+a.width,b.left+b.width),f=Math.min(a.top+a.height,b.top+b.height);return{left:c,top:d,width:e-c,height:f-d}}function R(a,c,d,e,f){var g=b(c,"paddingLeft"),h=b(c,"paddingTop"),m=b(c,"paddingRight");c=b(c,"paddingBottom");da(a,d,0,0,d.width,d.height,e.left+g+f[3].width,e.top+h+f[0].width,e.width-(f[1].width+f[3].width+g+m),e.height-(f[0].width+f[2].width+h+c))}function s(a,b,c,d){var e=function(a,b,c){return{x:a.x+(b.x-a.x)*
c,y:a.y+(b.y-a.y)*c}};return{start:a,startControl:b,endControl:c,end:d,subdivide:function(f){var g=e(a,b,f),h=e(b,c,f),m=e(c,d,f),j=e(g,h,f),h=e(h,m,f);f=e(j,h,f);return[s(a,g,j,f),s(f,h,m,d)]},curveTo:function(a){a.push(["bezierCurve",b.x,b.y,c.x,c.y,d.x,d.y])},curveToReversed:function(d){d.push(["bezierCurve",c.x,c.y,b.x,b.y,a.x,a.y])}}}function D(a,b,c,d,e,f,g){0<b[0]||0<b[1]?(a.push(["line",d[0].start.x,d[0].start.y]),d[0].curveTo(a),d[1].curveTo(a)):a.push(["line",f,g]);(0<c[0]||0<c[1])&&a.push(["line",
e[0].start.x,e[0].start.y])}function Z(a,b,c,d,e,f,g){var h=[];0<b[0]||0<b[1]?(h.push(["line",d[1].start.x,d[1].start.y]),d[1].curveTo(h)):h.push(["line",a.c1[0],a.c1[1]]);0<c[0]||0<c[1]?(h.push(["line",f[0].start.x,f[0].start.y]),f[0].curveTo(h),h.push(["line",g[0].end.x,g[0].end.y]),g[0].curveToReversed(h)):(h.push(["line",a.c2[0],a.c2[1]]),h.push(["line",a.c3[0],a.c3[1]]));0<b[0]||0<b[1]?(h.push(["line",e[1].end.x,e[1].end.y]),e[1].curveToReversed(h)):h.push(["line",a.c4[0],a.c4[1]]);return h}
function ja(a,b){var c=a.drawShape();b.forEach(function(a,b){c[0===b?"moveTo":a[0]+"To"].apply(null,a.slice(1))});return c}function J(a,b,c){var e=x.createElement("valuewrap");"lineHeight textAlign fontFamily color fontSize paddingLeft paddingTop width height border borderLeftWidth borderTopWidth".split(" ").forEach(function(b){try{e.style[b]=u(a,b)}catch(c){w("html2canvas: Parse: Exception caught in renderFormValue: "+c.message)}});e.style.borderColor="black";e.style.borderStyle="solid";e.style.display=
"block";e.style.position="absolute";if(/^(submit|reset|button|text|password)$/.test(a.type)||"SELECT"===a.nodeName)e.style.lineHeight=u(a,"height");e.style.top=b.top+"px";e.style.left=b.left+"px";b="SELECT"===a.nodeName?(a.options[a.selectedIndex]||0).text:a.value;b||(b=a.placeholder);b=x.createTextNode(b);e.appendChild(b);fa.appendChild(e);d(a,b,c);fa.removeChild(e)}function da(a){a.drawImage.apply(a,Array.prototype.slice.call(arguments,1))}function ma(a,b){var c=n.getComputedStyle(a,b);if(c&&c.content&&
!("none"===c.content||"-moz-alt-content"===c.content)){var d=c.content+"",e=d.substr(0,1);e===d.substr(d.length-1)&&e.match(/'|"/)&&(d=d.substr(1,d.length-2));var e="url"===d.substr(0,3),f=r.createElement(e?"img":"span");f.className=Y+"-before "+Y+"-after";Object.keys(c).filter(v).forEach(function(a){f.style[a]=c[a]});e?f.src=j.Util.parseBackgroundImage(d)[0].args[0]:f.innerHTML=d;return f}}function v(a){return isNaN(n.parseInt(a,10))}function E(a,b,c,d){var e=Math.round(d.left+c.left);c=Math.round(d.top+
c.top);a.createPattern(b);a.translate(e,c);a.fill();a.translate(-e,-c)}function F(a,b,c,d,e,f,g,h){var m=[];m.push(["line",Math.round(e),Math.round(f)]);m.push(["line",Math.round(e+g),Math.round(f)]);m.push(["line",Math.round(e+g),Math.round(h+f)]);m.push(["line",Math.round(e),Math.round(h+f)]);ja(a,m);a.save();a.clip();E(a,b,c,d);a.restore()}function ra(a,b,c,d,e){var f=j.Util.BackgroundSize(a,b,d,e),g=j.Util.BackgroundPosition(a,b,d,e,f);a=u(a,"backgroundRepeat").split(",").map(function(a){return a.trim()});
if(!(d.width===f.width&&d.height===f.height)){var h,m=x.createElement("canvas");m.width=f.width;m.height=f.height;h=m.getContext("2d");da(h,d,0,0,d.width,d.height,0,0,f.width,f.height);d=m}a=a[e]||a[0];switch(a){case "repeat-x":F(c,d,g,b,b.left,b.top+g.top,99999,d.height);break;case "repeat-y":F(c,d,g,b,b.left+g.left,b.top,d.width,99999);break;case "no-repeat":F(c,d,g,b,b.left+g.left,b.top+g.top,d.width,d.height);break;default:E(c,d,g,{top:b.top,left:b.left,width:d.width,height:d.height})}}function G(d,
e,h){var v,E,s,F,n,p,r,G,l=j.Util.Bounds(d),C,B=ba.test(d.nodeName)?"#efefef":u(d,"backgroundColor"),L;L=!e?a():l.width;var k=!e?f():l.height,O=[];L={storage:O,width:L,height:k,clip:function(){O.push({type:"function",name:"clip",arguments:arguments})},translate:function(){O.push({type:"function",name:"translate",arguments:arguments})},fill:function(){O.push({type:"function",name:"fill",arguments:arguments})},save:function(){O.push({type:"function",name:"save",arguments:arguments})},restore:function(){O.push({type:"function",
name:"restore",arguments:arguments})},fillRect:function(){O.push({type:"function",name:"fillRect",arguments:arguments})},createPattern:function(){O.push({type:"function",name:"createPattern",arguments:arguments})},drawShape:function(){var a=[];O.push({type:"function",name:"drawShape",arguments:a});return{moveTo:function(){a.push({name:"moveTo",arguments:arguments})},lineTo:function(){a.push({name:"lineTo",arguments:arguments})},arcTo:function(){a.push({name:"arcTo",arguments:arguments})},bezierCurveTo:function(){a.push({name:"bezierCurveTo",
arguments:arguments})},quadraticCurveTo:function(){a.push({name:"quadraticCurveTo",arguments:arguments})}}},drawImage:function(){O.push({type:"function",name:"drawImage",arguments:arguments})},fillText:function(){O.push({type:"function",name:"fillText",arguments:arguments})},setVariable:function(a,b){O.push({type:"variable",name:a,arguments:b})}};v=u(d,"zIndex");(k=e?e.zIndex:null)?"auto"!==v&&(v={zindex:v,children:[]},k.children.push(v),k=v):k=v={zindex:0,children:[]};v=u(d,"opacity")*(e?e.opacity:
1);L.setVariable("globalAlpha",v);var X=u(d,"position"),K;K=["Top","Right","Bottom","Left"].map(function(a){return{width:b(d,"border"+a+"Width"),color:u(d,"border"+a+"Color")}});e={ctx:L,zIndex:k,opacity:v,cssPosition:X,borders:K,clip:e&&e.clip?j.Util.Extend({},e.clip):null};!0===c.useOverflow&&(!0===/(hidden|scroll|auto)/.test(u(d,"overflow"))&&!1===/(BODY)/i.test(d.nodeName))&&(e.clip=e.clip?t(e.clip,l):l);e.zIndex.children.push(e);var k=e.borders,S=e.ctx;L=e.clip;v={left:l.left+k[3].width,top:l.top+
k[0].width,width:l.width-(k[1].width+k[3].width),height:l.height-(k[0].width+k[2].width)};L&&(v=t(v,L));L=v;X=l.left;K=l.top;var aa=l.width,M=l.height,V,y,z,H,I,T,q;q=["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(a){return u(d,"border"+a+"Radius")});var U=l.left;G=l.top;p=l.width;r=l.height;E=q[0][0];s=q[0][1];F=q[1][0];n=q[1][1];H=q[2][0];I=q[2][1];V=q[3][0];y=q[3][1];var N=p-F,P=r-H,da=p-I;z=r-y;v=W(U,G,E,s).topLeft.subdivide(0.5);E=W(U+k[3].width,G+k[0].width,Math.max(0,E-k[3].width),
Math.max(0,s-k[0].width)).topLeft.subdivide(0.5);s=W(U+N,G,F,n).topRight.subdivide(0.5);F=W(U+Math.min(N,p+k[3].width),G+k[0].width,N>p+k[3].width?0:F-k[3].width,n-k[0].width).topRight.subdivide(0.5);n=W(U+da,G+P,I,H).bottomRight.subdivide(0.5);p=W(U+Math.min(da,p+k[3].width),G+Math.min(P,r+k[0].width),Math.max(0,I-k[1].width),Math.max(0,H-k[2].width)).bottomRight.subdivide(0.5);r=W(U,G+z,V,y).bottomLeft.subdivide(0.5);G=W(U+k[3].width,G+z,Math.max(0,V-k[3].width),Math.max(0,y-k[2].width)).bottomLeft.subdivide(0.5);
P=[];switch(u(d,"backgroundClip")){case "content-box":case "padding-box":D(P,q[0],q[1],E,F,l.left+k[3].width,l.top+k[0].width);D(P,q[1],q[2],F,p,l.left+l.width-k[1].width,l.top+k[0].width);D(P,q[2],q[3],p,G,l.left+l.width-k[1].width,l.top+l.height-k[2].width);D(P,q[3],q[0],G,E,l.left+k[3].width,l.top+l.height-k[2].width);break;default:D(P,q[0],q[1],v,s,l.left,l.top),D(P,q[1],q[2],s,n,l.left+l.width,l.top),D(P,q[2],q[3],n,r,l.left+l.width,l.top+l.height),D(P,q[3],q[0],r,v,l.left,l.top+l.height)}U=
[];for(V=0;4>V;V++)if(0<k[V].width){y=X;z=K;H=aa;I=M-k[2].width;switch(V){case 0:I=k[0].width;T=Z({c1:[y,z],c2:[y+H,z],c3:[y+H-k[1].width,z+I],c4:[y+k[3].width,z+I]},q[0],q[1],v,E,s,F);break;case 1:y=X+aa-k[1].width;H=k[1].width;T=Z({c1:[y+H,z],c2:[y+H,z+I+k[2].width],c3:[y,z+I],c4:[y,z+k[0].width]},q[1],q[2],s,F,n,p);break;case 2:z=z+M-k[2].width;I=k[2].width;T=Z({c1:[y+H,z+I],c2:[y,z+I],c3:[y+k[3].width,z],c4:[y+H-k[2].width,z]},q[2],q[3],n,p,r,G);break;case 3:H=k[3].width,T=Z({c1:[y,z+I+k[2].width],
c2:[y,z],c3:[y+H,z+k[0].width],c4:[y+H,z+I]},q[3],q[0],r,G,v,E)}U.push({args:T,color:k[V].color})}ja(S,P);S.save();S.clip();if(0<L.height&&0<L.width){g(S,l.left,l.top,l.width,l.height,B);B=u(d,"backgroundImage");T=j.Util.parseBackgroundImage(B);for(X=T.length;X--;)B=T[X],B.args&&0!==B.args.length&&((v=ca("url"===B.method?B.args[0]:B.value))?ra(d,L,S,v,X):w("html2canvas: Error loading background:",B))}S.restore();U.forEach(function(a){var b=a.args;a=a.color;"transparent"!==a&&(S.setVariable("fillStyle",
a),ja(S,b),S.fill())});if(!h&&(h=ma(d,":before"),B=ma(d,":after"),h||B))h&&(d.className+=" "+Y+"-before",d.parentNode.insertBefore(h,d),ga(h,e,!0),d.parentNode.removeChild(h),d.className=d.className.replace(Y+"-before","").trim()),B&&(d.className+=" "+Y+"-after",d.appendChild(B),ga(B,e,!0),d.removeChild(B),d.className=d.className.replace(Y+"-after","").trim());switch(d.nodeName){case "IMG":(C=ca(d.getAttribute("src")))?R(S,d,C,l,k):w("html2canvas: Error loading <img>:"+d.getAttribute("src"));break;
case "INPUT":/^(text|url|email|submit|button|reset)$/.test(d.type)&&0<(d.value||d.placeholder).length&&J(d,l,e);break;case "TEXTAREA":0<(d.value||d.placeholder||"").length&&J(d,l,e);break;case "SELECT":0<(d.options||d.placeholder||"").length&&J(d,l,e);break;case "LI":var Q,l=e.ctx;C=u(d,"listStyleType");if(/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(C)){h=-1;B=1;T=d.parentNode.childNodes;if(d.parentNode){for(;T[++h]!==
d;)1===T[h].nodeType&&B++;h=B}else h=-1;switch(C){case "decimal":Q=h;break;case "decimal-leading-zero":Q=1===h.toString().length?"0"+h.toString():h.toString();break;case "upper-roman":Q=j.Generate.ListRoman(h);break;case "lower-roman":Q=j.Generate.ListRoman(h).toLowerCase();break;case "lower-alpha":Q=j.Generate.ListAlpha(h).toLowerCase();break;case "upper-alpha":Q=j.Generate.ListAlpha(h)}Q+=". ";h=x.createElement("boundelement");h.style.display="inline";B=d.style.listStyleType;d.style.listStyleType=
"none";h.appendChild(x.createTextNode(Q));d.insertBefore(h,d.firstChild);C=j.Util.Bounds(h);d.removeChild(h);d.style.listStyleType=B;m(l,d,"none",u(d,"color"));"inside"===u(d,"listStylePosition")&&(l.setVariable("textAlign","left"),h=L.left,C=C.bottom,null!==Q&&0<j.Util.trimText(Q).length&&l.fillText(Q,h,C))}break;case "CANVAS":R(S,d,d,l,k)}return e}function ga(a,b,c){"none"!==u(a,"display")&&("hidden"!==u(a,"visibility")&&!a.hasAttribute("data-html2canvas-ignore"))&&(b=G(a,b,c)||b,ba.test(a.nodeName)||
j.Util.Children(a).forEach(function(e){1===e.nodeType?ga(e,b,c):3===e.nodeType&&d(a,e,b)}))}n.scroll(0,0);var aa=c.elements===p?r.body:c.elements[0],x=aa.ownerDocument,K=j.Util.Support(c,x),ba=RegExp("("+c.ignoreElements+")"),fa=x.body,u=j.Util.getCSS,Y="___html2canvas___pseudoelement",ka=x.createElement("style");ka.innerHTML="."+Y+'-before:before { content: "" !important; display: none !important; }.'+Y+'-after:after { content: "" !important; display: none !important; }';fa.appendChild(ka);e=e||
{};var W,M=4*((Math.sqrt(2)-1)/3);W=function(a,b,d,c){var e=d*M,f=c*M;d=a+d;c=b+c;return{topLeft:s({x:a,y:c},{x:a,y:c-f},{x:d-e,y:b},{x:d,y:b}),topRight:s({x:a,y:b},{x:a+e,y:b},{x:d,y:c-f},{x:d,y:c}),bottomRight:s({x:d,y:b},{x:d,y:b+f},{x:a+e,y:c},{x:a,y:c}),bottomLeft:s({x:d,y:c},{x:d-e,y:c},{x:a,y:b+f},{x:a,y:b})}};var ha=G(aa,null);if(K.svgRendering){var ea=r.documentElement,N=function(a){a=j.Util.Children(a);var b=a.length,d,c,e,f,g;for(g=0;g<b;g+=1)if(f=a[g],3===f.nodeType)C+=f.nodeValue.replace(/</g,
"&lt;").replace(/>/g,"&gt;");else if(1===f.nodeType&&!/^(script|meta|title)$/.test(f.nodeName.toLowerCase())){C+="<"+f.nodeName.toLowerCase();if(f.hasAttributes()){d=f.attributes;e=d.length;for(c=0;c<e;c+=1)C+=" "+d[c].name+'="'+d[c].value+'"'}C+=">";N(f);C+="</"+f.nodeName.toLowerCase()+">"}},la=new Image,na=a(),oa=f(),C="";N(ea);la.src=["data:image/svg+xml,","<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='"+na+"' height='"+oa+"'>","<foreignObject width='"+na+"' height='"+oa+"'>","<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>",
C.replace(/\#/g,"%23"),"</html></foreignObject></svg>"].join("");la.onload=function(){ha.svgRender=la}}Array.prototype.slice.call(aa.children,0).forEach(function(a){ga(a,ha)});ha.backgroundColor=u(r.documentElement,"backgroundColor");fa.removeChild(ka);return ha};j.Preload=function(e){function c(){w("html2canvas: start: images: "+d.numLoaded+" / "+d.numTotal+" (failed: "+d.numFailed+")");!d.firstRun&&d.numLoaded>=d.numTotal&&(w("Finished loading images: # "+d.numTotal+" (failed: "+d.numFailed+")"),
"function"===typeof e.complete&&e.complete(d))}function a(a,b,f){var g,h=e.proxy,j;J.href=a;a=J.href;g="html2canvas_"+s++;f.callbackname=g;h=-1<h.indexOf("?")?h+"&":h+"?";h+="url="+encodeURIComponent(a)+"&callback="+g;j=D.createElement("script");n[g]=function(a){null===a.query.results?(f.succeeded=!1,d.numLoaded++,d.numFailed++,c()):(m(b,f),b.src=a.query.results.url);n[g]=p;try{delete n[g]}catch(e){}j.parentNode.removeChild(j);j=null;delete f.script;delete f.callbackname};j.setAttribute("type","text/javascript");
j.setAttribute("src",h);f.script=j;n.document.body.appendChild(j)}function f(a,b){var d=n.getComputedStyle(a,b),c=d.content;"url"===c.substr(0,3)&&t.loadImage(j.Util.parseBackgroundImage(c)[0].args[0]);g(d.backgroundImage,a)}function b(a){return a&&a.method&&a.args&&0<a.args.length}function g(a,e){var f;j.Util.parseBackgroundImage(a).filter(b).forEach(function(a){if("url"===a.method)t.loadImage(a.args[0]);else if(a.method.match(/\-?gradient$/)){f===p&&(f=j.Util.Bounds(e));a=a.value;var b=j.Generate.Gradient(a,
f);b!==p&&(d[a]={img:b,succeeded:!0},d.numTotal++,d.numLoaded++,c())}})}function h(a){var b=!1;try{j.Util.Children(a).forEach(function(a){h(a)})}catch(d){}try{b=a.nodeType}catch(c){b=!1,w("html2canvas: failed to access some element's nodeType - Exception: "+c.message)}if(1===b||b===p){f(a,":before");f(a,":after");try{g(j.Util.getCSS(a,"backgroundImage"),a)}catch(e){w("html2canvas: failed to get background-image - Exception: "+e.message)}g(a)}}function m(b,f){b.onload=function(){f.timer!==p&&n.clearTimeout(f.timer);
d.numLoaded++;f.succeeded=!0;b.onerror=b.onload=null;c()};b.onerror=function(){if("anonymous"===b.crossOrigin&&(n.clearTimeout(f.timer),e.proxy)){var g=b.src;b=new Image;f.img=b;b.src=g;a(b.src,b,f);return}d.numLoaded++;d.numFailed++;f.succeeded=!1;b.onerror=b.onload=null;c()}}var d={numLoaded:0,numFailed:0,numTotal:0,cleanupDone:!1},ca,t,R,s=0;R=e.elements[0]||r.body;var D=R.ownerDocument,Z=D.images,K=Z.length,J=D.createElement("a"),N;N=(new Image).crossOrigin!==p;var M;J.href=n.location.href;ca=
J.protocol+J.host;t={loadImage:function(b){var c,f;b&&d[b]===p&&(c=new Image,b.match(/data:image\/.*;base64,/i)?(c.src=b.replace(/url\(['"]{0,}|['"]{0,}\)$/ig,""),f=d[b]={img:c},d.numTotal++,m(c,f)):(J.href=b,J.href=J.href,J.protocol+J.host===ca||!0===e.allowTaint?(f=d[b]={img:c},d.numTotal++,m(c,f),c.src=b):N&&!e.allowTaint&&e.useCORS?(c.crossOrigin="anonymous",f=d[b]={img:c},d.numTotal++,m(c,f),c.src=b,c.customComplete=function(){if(this.img.complete)this.img.onerror();else this.timer=n.setTimeout(this.img.customComplete,
100)}.bind(f),c.customComplete()):e.proxy&&(f=d[b]={img:c},d.numTotal++,a(b,c,f))))},cleanupDOM:function(a){var b,f;if(!d.cleanupDone){a&&"string"===typeof a?w("html2canvas: Cleanup because: "+a):w("html2canvas: Cleanup after timeout: "+e.timeout+" ms.");for(f in d)if(d.hasOwnProperty(f)&&(b=d[f],"object"===typeof b&&b.callbackname&&b.succeeded===p)){n[b.callbackname]=p;try{delete n[b.callbackname]}catch(g){}b.script&&b.script.parentNode&&(b.script.setAttribute("src","about:blank"),b.script.parentNode.removeChild(b.script));
d.numLoaded++;d.numFailed++;w("html2canvas: Cleaned up failed img: '"+f+"' Steps: "+d.numLoaded+" / "+d.numTotal)}n.stop!==p?n.stop():r.execCommand!==p&&r.execCommand("Stop",!1);r.close!==p&&r.close();d.cleanupDone=!0;a&&"string"===typeof a||c()}},renderingDone:function(){M&&n.clearTimeout(M)}};0<e.timeout&&(M=n.setTimeout(t.cleanupDOM,e.timeout));w("html2canvas: Preload starts: finding background-images");d.firstRun=!0;h(R);w("html2canvas: Preload: Finding images");for(R=0;R<K;R+=1)t.loadImage(Z[R].getAttribute("src"));
d.firstRun=!1;w("html2canvas: Preload: Done.");d.numTotal===d.numLoaded&&c();return t};j.Renderer=function(e,c){var a=c.renderer;if("string"===typeof c.renderer&&j.Renderer[a]!==p)a=j.Renderer[a](c);else if("function"===typeof a)a=a(c);else throw Error("Unknown renderer");if("function"!==typeof a)throw Error("Invalid renderer defined");var f=r,b=[],g=function(a){var c=[],d=[];a.children.forEach(function(a){a.children&&0<a.children.length?(c.push(a),d.push(a.zindex)):b.push(a)});d.sort(function(a,
b){return a-b});d.forEach(function(a){var b;c.some(function(d,c){b=c;return d.zindex===a});g(c.splice(b,1)[0])})};g(e.zIndex);return a(e,c,f,b,j)};j.Util.Support=function(e,c){function a(){var a=new Image,b=c.createElement("canvas"),d=b.getContext===p?!1:b.getContext("2d");if(!1===d)return!1;b.width=b.height=10;a.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><foreignObject width='10' height='10'><div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>sup</div></foreignObject></svg>";
try{d.drawImage(a,0,0),b.toDataURL()}catch(e){return!1}w("html2canvas: Parse: SVG powered rendering available");return!0}var f,b,g=!1;c.createRange&&(f=c.createRange(),f.getBoundingClientRect&&(b=c.createElement("boundtest"),b.style.height="123px",b.style.display="block",c.body.appendChild(b),f.selectNode(b),f=f.getBoundingClientRect(),f=f.height,123===f&&(g=!0),c.body.removeChild(b)));return{rangeBounds:g,svgRendering:e.svgRendering&&a()}};n.html2canvas=function(e,c){e=e.length?e:[e];var a,f,b={logging:!1,
elements:e,background:"#fff",proxy:null,timeout:0,useCORS:!1,allowTaint:!1,svgRendering:!1,ignoreElements:"IFRAME|OBJECT|PARAM",useOverflow:!0,letterRendering:!1,chinese:!1,width:null,height:null,taintTest:!0,renderer:"Canvas"},b=j.Util.Extend(c,b);j.logging=b.logging;b.complete=function(c){if(!("function"===typeof b.onpreloaded&&!1===b.onpreloaded(c))&&(a=j.Parse(c,b),!("function"===typeof b.onparsed&&!1===b.onparsed(a))&&(f=j.Renderer(a,b),"function"===typeof b.onrendered)))b.onrendered(f)};n.setTimeout(function(){j.Preload(b)},
0);return{render:function(a,c){return j.Renderer(a,j.Util.Extend(c,b))},parse:function(a,c){return j.Parse(a,j.Util.Extend(c,b))},preload:function(a){return j.Preload(j.Util.Extend(a,b))},log:w}};n.html2canvas.log=w;n.html2canvas.Renderer={Canvas:p};j.Renderer.Canvas=function(e){function c(c,d){switch(d.type){case "variable":c[d.name]=d.arguments;break;case "function":if("createPattern"===d.name){if(0<d.arguments[0].width&&0<d.arguments[0].height)try{c.fillStyle=c.createPattern(d.arguments[0],"repeat")}catch(h){w("html2canvas: Renderer: Error creating pattern",
h.message)}}else if("drawShape"===d.name){var j=d.arguments;c.beginPath();j.forEach(function(a){c[a.name].apply(c,a.arguments)});c.closePath()}else if("drawImage"===d.name){if(0<d.arguments[8]&&0<d.arguments[7]){if(!(j=!e.taintTest))if(j=e.taintTest)a:{if(-1===f.indexOf(d.arguments[0].src)){g.drawImage(d.arguments[0],0,0);try{g.getImageData(0,0,1,1)}catch(n){b=a.createElement("canvas");g=b.getContext("2d");j=!1;break a}f.push(d.arguments[0].src)}j=!0}j&&c.drawImage.apply(c,d.arguments)}}else c[d.name].apply(c,
d.arguments)}}e=e||{};var a=r,f=[],b=r.createElement("canvas"),g=b.getContext("2d"),h=e.canvas||a.createElement("canvas");return function(a,b,e,f,g){var j=h.getContext("2d"),n,r;h.width=h.style.width=b.width||a.ctx.width;h.height=h.style.height=b.height||a.ctx.height;n=j.fillStyle;j.fillStyle=("transparent"===a.backgroundColor||"rgba(0, 0, 0, 0)"===a.backgroundColor)&&b.background!==p?b.background:a.backgroundColor;j.fillRect(0,0,h.width,h.height);j.fillStyle=n;if(b.svgRendering&&a.svgRender!==p)j.drawImage(a.svgRender,
0,0);else{n=0;for(r=f.length;n<r;n+=1)a=f.splice(0,1)[0],a.canvasPosition=a.canvasPosition||{},j.textBaseline="bottom",a.clip&&(j.save(),j.beginPath(),j.rect(a.clip.left,a.clip.top,a.clip.width,a.clip.height),j.clip()),a.ctx.storage&&a.ctx.storage.forEach(c.bind(null,j)),a.clip&&j.restore()}w("html2canvas: Renderer: Canvas renderer done - returning canvas obj");r=b.elements.length;return 1===r&&"object"===typeof b.elements[0]&&"BODY"!==b.elements[0].nodeName?(b=g.Util.Bounds(b.elements[0]),e=e.createElement("canvas"),
e.width=b.width,e.height=b.height,j=e.getContext("2d"),j.drawImage(h,b.left,b.top,b.width,b.height,0,0,b.width,b.height),h=null,e):h}}})(window,document);

(function (html2canvas) {
	var cropCanvas = function (sourceCanvas, x1, x2, y1, y2) {
	    var width = x2 - x1, height = y2 - y1;

		var canvas = document.createElement("canvas");
	    canvas.width = width;
	    canvas.height = height;
	    var context = canvas.getContext('2d');
	    context.drawImage(sourceCanvas, x1, y1, width, height, 0, 0, width, height);
	    return canvas;
	};

	var _canvas = null, _overlay = null, _isCropping = false, _selectionRectangle = null, _cropData = null;

	var createOverlay = function (canvas) {
		var overlay = document.createElement("div");
		overlay.style.cssText = [
			"position:fixed",
			"height:100%","width:100%",
			"top:0", "left:0",
			"z-index:100000"
		].join(";");
		overlay.onmousedown = startCropping;
		overlay.onmouseup = stopCropping;
		overlay.onmousemove = onOverlayMouseMove
		overlay.appendChild(canvas);
		document.body.appendChild(overlay);
		return overlay;
	};

	var createSelectionRectangle = function () {
		var selectionRectangle = document.createElement("div");
		selectionRectangle.style.cssText = [
			"position:fixed",
			"border : 2px dotted red",
			"z-index:100005"
		].join(";");
		selectionRectangle.onmousemove = onOverlayMouseMove;
		selectionRectangle.onmouseup = stopCropping;
		document.body.appendChild(selectionRectangle);
		return selectionRectangle;
	};

	var initializeCropData = function (event) {
		var x = event.clientX, y = event.clientY;
		_cropData = {};
		_cropData.x1 = _cropData.x2 = x, _cropData.y1 = _cropData.y2 = y;
	}

	var updateCropData = function (event) {
		var x = event.clientX, y = event.clientY;
		_cropData.x2 = x, _cropData.y2 = y;
	};

	var updateSelectionFromCropData = function (selection, cropData) {
		var fixedData = fixRectData(cropData);
		_selectionRectangle.style.top = fixedData.y1 + "px";
		_selectionRectangle.style.left = fixedData.x1 + "px";
		_selectionRectangle.style.height = fixedData.y2 - fixedData.y1 + "px";
		_selectionRectangle.style.width = fixedData.x2 - fixedData.x1 + "px";
	};

	var fixRectData = function (rectData) {
		var fixedData = {
			x1 : Math.min(rectData.x1, rectData.x2),
			x2 : Math.max(rectData.x1, rectData.x2),
			y1 : Math.min(rectData.y1, rectData.y2),
			y2 : Math.max(rectData.y1, rectData.y2),
		};
		return fixedData;
	};

	var startCropping = function (event) {
		_isCropping = true;
		_selectionRectangle = createSelectionRectangle();
		initializeCropData(event);
		updateSelectionFromCropData(_selectionRectangle, _cropData);
		console.log("startCropping");
	};

	var onOverlayMouseMove = function (event) {
		if(_isCropping) {
			updateCropData(event);
			updateSelectionFromCropData (_selectionRectangle, _cropData);
		}
	};

	var stopCropping = function (event) {
		if(_isCropping) {
			_isCropping = false;
			var fixedData = fixRectData(_cropData);
			canvas = cropCanvas(_canvas, fixedData.x1, fixedData.x2 ,fixedData.y1, fixedData.y2);
			renderedImage = canvas.toDataURL("image/png");
			saveImage(renderedImage);
		}
	};
	var SERVICE_URL = "http://screenletstore.appspot.com/";

	var saveImage = function (renderedImage) {
		var imageData = renderedImage.replace("data:image/png;base64,", "");
		var xhr = new XMLHttpRequest();
		var formData = new FormData();

		formData.append('data', imageData);
		xhr.open('POST', SERVICE_URL + "__/upload", true);
		xhr.onload = function(e) {
			window.open(SERVICE_URL + "img/" + this.responseText);
			_overlay.parentNode.removeChild(_overlay);
			_selectionRectangle.parentNode.removeChild(_selectionRectangle);
		};

		xhr.send(formData);
	};

	var onload = function () {
		// remove loader
		var loader = document.getElementById("chausset-loader");
		loader.style.opacity = 0;	

		var proxyURL = "query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.uri%20where%20url%3D%40url&format=json",
			protocol = "http://";
		if (window.location.href.indexOf("https") == 0) {
			protocol = "https://";
		}
		// take screenshot
		html2canvas(
			document.body, 
			{	
				proxy : protocol + proxyURL,
				onrendered : function (canvas) {
					_canvas = canvas;
					_overlay = createOverlay(canvas);	
					loader.style.opacity = 1;
					loader.innerHTML = "Screenshot ready, select the area to crop";
					window.setTimeout(function () {
						loader.style.opacity = 0;	
					} ,2000);
					window.setTimeout(function () {
						loader.parentNode.removeChild(loader);		
					} ,2500);

				}
			}
		);
	};

	onload();
})(html2canvas)




