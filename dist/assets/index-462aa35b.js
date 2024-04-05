(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ks="153",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Il=0,eo=1,Nl=2,za=1,Ul=2,Rn=3,Gn=0,Je=1,Oe=2,zn=0,Ii=1,Ci=2,no=3,io=4,Dl=5,Ri=100,Fl=101,Bl=102,ro=103,so=104,Ol=200,zl=201,Vl=202,Gl=203,Va=204,Ga=205,Hl=206,Wl=207,kl=208,Xl=209,ql=210,Yl=0,Zl=1,jl=2,Cs=3,Kl=4,Jl=5,$l=6,Ql=7,Ha=0,tc=1,ec=2,Pn=0,nc=1,ic=2,rc=3,sc=4,oc=5,Wa=300,Fi=301,Bi=302,Ps=303,Ls=304,Wr=306,Is=1e3,pn=1001,Ns=1002,Ze=1003,oo=1004,Zr=1005,cn=1006,ac=1007,$i=1008,Vn=1009,lc=1010,cc=1011,Xs=1012,ka=1013,Bn=1014,On=1015,Qi=1016,Xa=1017,qa=1018,$n=1020,hc=1021,mn=1023,uc=1024,dc=1025,Qn=1026,Oi=1027,fc=1028,Ya=1029,pc=1030,Za=1031,ja=1033,jr=33776,Kr=33777,Jr=33778,$r=33779,ao=35840,lo=35841,co=35842,ho=35843,mc=36196,uo=37492,fo=37496,po=37808,mo=37809,vo=37810,go=37811,xo=37812,yo=37813,_o=37814,Mo=37815,So=37816,Eo=37817,wo=37818,bo=37819,To=37820,Ao=37821,Qr=36492,vc=36283,Ro=36284,Co=36285,Po=36286,Ka=3e3,ti=3001,gc=3200,xc=3201,Ja=0,yc=1,ei="",re="srgb",vn="srgb-linear",$a="display-p3",ts=7680,_c=519,Mc=512,Sc=513,Ec=514,wc=515,bc=516,Tc=517,Ac=518,Rc=519,Lo=35044,Io="300 es",Us=1035,Cn=2e3,zr=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],es=Math.PI/180,Ds=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function ns(i,t,e){return(1-e)*i+e*t}function No(i){return(i&i-1)===0&&i!==0}function Fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,s,r,o,a,l,u){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u)}set(t,e,n,s,r,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],_=s[1],x=s[4],y=s[7],M=s[2],T=s[5],B=s[8];return r[0]=o*g+a*_+l*M,r[3]=o*m+a*x+l*T,r[6]=o*p+a*y+l*B,r[1]=u*g+h*_+c*M,r[4]=u*m+h*x+c*T,r[7]=u*p+h*y+c*B,r[2]=d*g+f*_+v*M,r[5]=d*m+f*x+v*T,r[8]=d*p+f*y+v*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=h*o-a*u,d=a*l-h*r,f=u*r-o*l,v=e*c+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(s*u-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-u*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(is.makeScale(t,e)),this}rotate(t){return this.premultiply(is.makeRotation(-t)),this}translate(t,e){return this.premultiply(is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const is=new le;function Qa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Uo={};function ji(i){i in Uo||(Uo[i]=!0,console.warn(i))}function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pc=new le().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Lc=new le().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ic(i){return i.convertSRGBToLinear().applyMatrix3(Lc)}function Nc(i){return i.applyMatrix3(Pc).convertLinearToSRGB()}const Uc={[vn]:i=>i,[re]:i=>i.convertSRGBToLinear(),[$a]:Ic},Dc={[vn]:i=>i,[re]:i=>i.convertLinearToSRGB(),[$a]:Nc},an={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return vn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Uc[t],s=Dc[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let ui;class tl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=tr("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fc=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ss(s[o].image)):r.push(ss(s[o]))}else r=ss(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bc=0;class $e extends ai{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=pn,s=pn,r=cn,o=$i,a=mn,l=Vn,u=$e.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Vi(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?re:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===re?ti:Ka}set encoding(t){ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?re:ei}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Wa;$e.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,s=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],h=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,y=(f+1)/2,M=(p+1)/2,T=(h+d)/4,B=(c+g)/4,L=(v+m)/4;return x>y&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=B/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=L/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=B/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends ai{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?re:ei),this.texture=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new el(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nl extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],u=n[s+1],h=n[s+2],c=n[s+3];const d=r[o+0],f=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||u!==f||h!==v){let m=1-a;const p=l*d+u*f+h*v+c*g,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),T=Math.atan2(M,p*_);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const y=a*_;if(l=l*m+d*y,u=u*m+f*y,h=h*m+v*y,c=c*m+g*y,m===1-a){const M=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=M,u*=M,h*=M,c*=M}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],h=n[s+3],c=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return t[e]=a*v+h*c+l*f-u*d,t[e+1]=l*v+h*d+u*c-a*f,t[e+2]=u*v+h*f+a*d-l*c,t[e+3]=h*v-a*c-l*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(s/2),c=a(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"YXZ":this._x=d*h*c+u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"ZXY":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c-d*f*v;break;case"ZYX":this._x=d*h*c-u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c+d*f*v;break;case"YZX":this._x=d*h*c+u*f*v,this._y=u*f*c+d*h*v,this._z=u*h*v-d*f*c,this._w=u*h*c-d*f*v;break;case"XZY":this._x=d*h*c-u*f*v,this._y=u*f*c-d*h*v,this._z=u*h*v+d*f*c,this._w=u*h*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],c=e[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*l,this._y=s*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-s*a,this._w=o*h-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=s*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=l*e+o*s-a*n,h=l*n+a*e-r*s,c=l*s+r*n-o*e,d=-r*e-o*n-a*s;return this.x=u*l+d*-r+h*-a-c*-o,this.y=h*l+d*-o+c*-r-u*-a,this.z=c*l+d*-a+u*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return os.copy(this).projectOnVector(t),this.sub(os)}reflect(t){return this.sub(os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const os=new et,Do=new ii;class sr{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),di.copy(t.boundingBox),di.applyMatrix4(t.matrixWorld),this.union(di);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Sn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else s.boundingBox===null&&s.computeBoundingBox(),di.copy(s.boundingBox),di.applyMatrix4(t.matrixWorld),this.union(di)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),cr.subVectors(this.max,Wi),fi.subVectors(t.a,Wi),pi.subVectors(t.b,Wi),mi.subVectors(t.c,Wi),Ln.subVectors(pi,fi),In.subVectors(mi,pi),kn.subVectors(fi,mi);let e=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-kn.z,kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,kn.z,0,-kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-kn.y,kn.x,0];return!as(e,fi,pi,mi,cr)||(e=[1,0,0,0,1,0,0,0,1],!as(e,fi,pi,mi,cr))?!1:(hr.crossVectors(Ln,In),e=[hr.x,hr.y,hr.z],as(e,fi,pi,mi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new et,new et,new et,new et,new et,new et,new et,new et],Sn=new et,di=new sr,fi=new et,pi=new et,mi=new et,Ln=new et,In=new et,kn=new et,Wi=new et,cr=new et,hr=new et,Xn=new et;function as(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),u=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const zc=new sr,ki=new et,ls=new et;class or{constructor(t=new et,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ls.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(ls)),this.expandByPoint(ki.copy(t.center).sub(ls))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new et,cs=new et,ur=new et,Nn=new et,hs=new et,dr=new et,us=new et;class kr{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cs.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(cs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=Nn.dot(this.direction),l=-Nn.dot(ur),u=Nn.lengthSq(),h=Math.abs(1-o*o);let c,d,f,v;if(h>0)if(c=o*l-a,d=o*a-l,v=r*h,c>=0)if(d>=-v)if(d<=v){const g=1/h;c*=g,d*=g,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;else d<=-v?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+u):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+u);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(cs).addScaledVector(ur,d),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){hs.subVectors(e,t),dr.subVectors(n,t),us.crossVectors(hs,dr);let o=this.direction.dot(us),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(dr.crossVectors(Nn,dr));if(l<0)return null;const u=a*this.direction.dot(hs.cross(Nn));if(u<0||l+u>o)return null;const h=-a*Nn.dot(us);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,s,r,o,a,l,u,h,c,d,f,v,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u,h,c,d,f,v,g,m)}set(t,e,n,s,r,o,a,l,u,h,c,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*c,v=a*h,g=a*c;e[0]=l*h,e[4]=-l*c,e[8]=u,e[1]=f+v*u,e[5]=d-g*u,e[9]=-a*l,e[2]=g-d*u,e[6]=v+f*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d+g*a,e[4]=v*a-f,e[8]=o*u,e[1]=o*c,e[5]=o*h,e[9]=-a,e[2]=f*a-v,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*c,v=u*h,g=u*c;e[0]=d-g*a,e[4]=-o*c,e[8]=v+f*a,e[1]=f+v*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*c,v=a*h,g=a*c;e[0]=l*h,e[4]=v*u-f,e[8]=d*u+g,e[1]=l*c,e[5]=g*u+d,e[9]=f*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*u,v=a*l,g=a*u;e[0]=l*h,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=o*l,f=o*u,v=a*l,g=a*u;e[0]=l*h,e[4]=-c,e[8]=u*h,e[1]=d*c+g,e[5]=o*h,e[9]=f*c-v,e[2]=v*c-f,e[6]=a*h,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vc,t,Gc)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Un.crossVectors(n,nn),Un.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Un.crossVectors(n,nn)),Un.normalize(),fr.crossVectors(nn,Un),s[0]=Un.x,s[4]=fr.x,s[8]=nn.x,s[1]=Un.y,s[5]=fr.y,s[9]=nn.y,s[2]=Un.z,s[6]=fr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],M=n[15],T=s[0],B=s[4],L=s[8],S=s[12],E=s[1],I=s[5],q=s[9],D=s[13],X=s[2],H=s[6],ot=s[10],O=s[14],F=s[3],tt=s[7],j=s[11],z=s[15];return r[0]=o*T+a*E+l*X+u*F,r[4]=o*B+a*I+l*H+u*tt,r[8]=o*L+a*q+l*ot+u*j,r[12]=o*S+a*D+l*O+u*z,r[1]=h*T+c*E+d*X+f*F,r[5]=h*B+c*I+d*H+f*tt,r[9]=h*L+c*q+d*ot+f*j,r[13]=h*S+c*D+d*O+f*z,r[2]=v*T+g*E+m*X+p*F,r[6]=v*B+g*I+m*H+p*tt,r[10]=v*L+g*q+m*ot+p*j,r[14]=v*S+g*D+m*O+p*z,r[3]=_*T+x*E+y*X+M*F,r[7]=_*B+x*I+y*H+M*tt,r[11]=_*L+x*q+y*ot+M*j,r[15]=_*S+x*D+y*O+M*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*l*c-s*u*c-r*a*d+n*u*d+s*a*f-n*l*f)+g*(+e*l*f-e*u*d+r*o*d-s*o*f+s*u*h-r*l*h)+m*(+e*u*c-e*a*f-r*o*c+n*o*f+r*a*h-n*u*h)+p*(-s*a*h-e*l*c+e*a*d+s*o*c-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=c*m*u-g*d*u+g*l*f-a*m*f-c*l*p+a*d*p,x=v*d*u-h*m*u-v*l*f+o*m*f+h*l*p-o*d*p,y=h*g*u-v*c*u+v*a*f-o*g*f-h*a*p+o*c*p,M=v*c*l-h*g*l-v*a*d+o*g*d+h*a*m-o*c*m,T=e*_+n*x+s*y+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/T;return t[0]=_*B,t[1]=(g*d*r-c*m*r-g*s*f+n*m*f+c*s*p-n*d*p)*B,t[2]=(a*m*r-g*l*r+g*s*u-n*m*u-a*s*p+n*l*p)*B,t[3]=(c*l*r-a*d*r-c*s*u+n*d*u+a*s*f-n*l*f)*B,t[4]=x*B,t[5]=(h*m*r-v*d*r+v*s*f-e*m*f-h*s*p+e*d*p)*B,t[6]=(v*l*r-o*m*r-v*s*u+e*m*u+o*s*p-e*l*p)*B,t[7]=(o*d*r-h*l*r+h*s*u-e*d*u-o*s*f+e*l*f)*B,t[8]=y*B,t[9]=(v*c*r-h*g*r-v*n*f+e*g*f+h*n*p-e*c*p)*B,t[10]=(o*g*r-v*a*r+v*n*u-e*g*u-o*n*p+e*a*p)*B,t[11]=(h*a*r-o*c*r-h*n*u+e*c*u+o*n*f-e*a*f)*B,t[12]=M*B,t[13]=(h*g*s-v*c*s+v*n*d-e*g*d-h*n*m+e*c*m)*B,t[14]=(v*a*s-o*g*s-v*n*l+e*g*l+o*n*m-e*a*m)*B,t[15]=(o*c*s-h*a*s+h*n*l-e*c*l-o*n*d+e*a*d)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+n,h*l-s*o,0,u*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,h=o+o,c=a+a,d=r*u,f=r*h,v=r*c,g=o*h,m=o*c,p=a*c,_=l*u,x=l*h,y=l*c,M=n.x,T=n.y,B=n.z;return s[0]=(1-(g+p))*M,s[1]=(f+y)*M,s[2]=(v-x)*M,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(v+x)*B,s[9]=(m-_)*B,s[10]=(1-(d+g))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const u=1/r,h=1/o,c=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=c,hn.elements[9]*=c,hn.elements[10]*=c,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Cn){const l=this.elements,u=2*r/(e-t),h=2*r/(n-s),c=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(a===Cn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zr)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Cn){const l=this.elements,u=1/(e-t),h=1/(n-s),c=1/(o-r),d=(e+t)*u,f=(n+s)*h;let v,g;if(a===Cn)v=(o+r)*c,g=-2*c;else if(a===zr)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new et,hn=new Ae,Vc=new et(0,0,0),Gc=new et(1,1,1),Un=new et,fr=new et,nn=new et,Fo=new Ae,Bo=new ii;class Xr{constructor(t=0,e=0,n=0,s=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],c=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class qs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hc=0;const Oo=new et,gi=new ii,wn=new Ae,pr=new et,Xi=new et,Wc=new et,kc=new ii,zo=new et(1,0,0),Vo=new et(0,1,0),Go=new et(0,0,1),Xc={type:"added"},Ho={type:"removed"};class ke extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new et,e=new Xr,n=new ii,s=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(Vo,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(Vo,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Xi,pr,this.up):wn.lookAt(pr,Xi,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(wn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ho)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ho)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),c=o(t.shapes),d=o(t.skeletons),f=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new et(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new et,bn=new et,ds=new et,Tn=new et,xi=new et,yi=new et,Wo=new et,fs=new et,ps=new et,ms=new et;let mr=!1;class fn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),bn.subVectors(n,e),ds.subVectors(t,e);const o=un.dot(un),a=un.dot(bn),l=un.dot(ds),u=bn.dot(bn),h=bn.dot(ds),c=o*u-a*a;if(c===0)return r.set(-2,-1,-1);const d=1/c,f=(u*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,s,r,o,a,l){return mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Tn),l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),bn.subVectors(t,e),un.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),un.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mr=!0),fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;xi.subVectors(s,n),yi.subVectors(r,n),fs.subVectors(t,n);const l=xi.dot(fs),u=yi.dot(fs);if(l<=0&&u<=0)return e.copy(n);ps.subVectors(t,s);const h=xi.dot(ps),c=yi.dot(ps);if(h>=0&&c<=h)return e.copy(s);const d=l*c-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(xi,o);ms.subVectors(t,r);const f=xi.dot(ms),v=yi.dot(ms);if(v>=0&&f<=v)return e.copy(r);const g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(n).addScaledVector(yi,a);const m=h*v-f*c;if(m<=0&&c-h>=0&&f-v>=0)return Wo.subVectors(r,s),a=(c-h)/(c-h+(f-v)),e.copy(s).addScaledVector(Wo,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(xi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let qc=0;class li extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ii,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function vs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,an.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=an.workingColorSpace){return this.r=t,this.g=e,this.b=n,an.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=an.workingColorSpace){if(t=Cc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vs(o,r,t+1/3),this.g=vs(o,r,t),this.b=vs(o,r,t-1/3)}return an.toWorkingColorSpace(this,s),this}setStyle(t,e=re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=re){const n=il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=re){return an.fromWorkingColorSpace(We.copy(this),t),Math.round(ze(We.r*255,0,255))*65536+Math.round(ze(We.g*255,0,255))*256+Math.round(ze(We.b*255,0,255))}getHexString(t=re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=an.workingColorSpace){an.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case n:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-n)/c+2;break;case r:l=(n-s)/c+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=an.workingColorSpace){return an.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=re){an.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),dn.h+=t,dn.s+=e,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(vr);const n=ns(dn.h,vr.h,e),s=ns(dn.s,vr.s,e),r=ns(dn.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new de;de.NAMES=il;class Me extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new et,gr=new Vt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this.updateRange={offset:0,count:-1},this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rl extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yc=0;const on=new Ae,gs=new ke,_i=new et,rn=new sr,qi=new sr,Ne=new et;class Qe extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qa(t)?sl:rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return gs.lookAt(t),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(rn.min,qi.min),rn.expandByPoint(Ne),Ne.addVectors(rn.max,qi.max),rn.expandByPoint(Ne)):(rn.expandByPoint(qi.min),rn.expandByPoint(qi.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Ne.fromBufferAttribute(a,u),l&&(_i.fromBufferAttribute(t,u),Ne.add(_i)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let E=0;E<a;E++)u[E]=new et,h[E]=new et;const c=new et,d=new et,f=new et,v=new Vt,g=new Vt,m=new Vt,p=new et,_=new et;function x(E,I,q){c.fromArray(s,E*3),d.fromArray(s,I*3),f.fromArray(s,q*3),v.fromArray(o,E*2),g.fromArray(o,I*2),m.fromArray(o,q*2),d.sub(c),f.sub(c),g.sub(v),m.sub(v);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(D),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(D),u[E].add(p),u[I].add(p),u[q].add(p),h[E].add(_),h[I].add(_),h[q].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,I=y.length;E<I;++E){const q=y[E],D=q.start,X=q.count;for(let H=D,ot=D+X;H<ot;H+=3)x(n[H+0],n[H+1],n[H+2])}const M=new et,T=new et,B=new et,L=new et;function S(E){B.fromArray(r,E*3),L.copy(B);const I=u[E];M.copy(I),M.sub(B.multiplyScalar(B.dot(I))).normalize(),T.crossVectors(L,I);const D=T.dot(h[E])<0?-1:1;l[E*4]=M.x,l[E*4+1]=M.y,l[E*4+2]=M.z,l[E*4+3]=D}for(let E=0,I=y.length;E<I;++E){const q=y[E],D=q.start,X=q.count;for(let H=D,ot=D+X;H<ot;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new et,r=new et,o=new et,a=new et,l=new et,u=new et,h=new et,c=new et;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),c.subVectors(s,r),h.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),c.subVectors(s,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,c=a.normalized,d=new u.constructor(l.length*h);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[v++]=u[f++]}return new Ke(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,c=u.length;h<c;h++){const d=u[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,d=u.length;c<d;c++){const f=u[c];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],c=r[u];for(let d=0,f=c.length;d<f;d++)h.push(c[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new Ae,qn=new kr,xr=new or,Xo=new et,Mi=new et,Si=new et,Ei=new et,xs=new et,yr=new et,_r=new Vt,Mr=new Vt,Sr=new Vt,qo=new et,Yo=new et,Zo=new et,Er=new et,wr=new et;class ce extends ke{constructor(t=new Qe,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],c=r[l];h!==0&&(xs.fromBufferAttribute(c,t),o?yr.addScaledVector(xs,h):yr.addScaledVector(xs.sub(e),h))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(xr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(xr,Xo)===null||qn.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(ko.copy(r).invert(),qn.copy(t.ray).applyMatrix4(ko),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=x;y<M;y+=3){const T=a.getX(y),B=a.getX(y+1),L=a.getX(y+2);s=br(this,p,t,n,u,h,c,T,B,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=br(this,o,t,n,u,h,c,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=x;y<M;y+=3){const T=y,B=y+1,L=y+2;s=br(this,p,t,n,u,h,c,T,B,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,x=m+1,y=m+2;s=br(this,o,t,n,u,h,c,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zc(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(wr);return u<e.near||u>e.far?null:{distance:u,point:wr.clone(),object:i}}function br(i,t,e,n,s,r,o,a,l,u){i.getVertexPosition(a,Mi),i.getVertexPosition(l,Si),i.getVertexPosition(u,Ei);const h=Zc(i,t,e,n,Mi,Si,Ei,Er);if(h){s&&(_r.fromBufferAttribute(s,a),Mr.fromBufferAttribute(s,l),Sr.fromBufferAttribute(s,u),h.uv=fn.getInterpolation(Er,Mi,Si,Ei,_r,Mr,Sr,new Vt)),r&&(_r.fromBufferAttribute(r,a),Mr.fromBufferAttribute(r,l),Sr.fromBufferAttribute(r,u),h.uv1=fn.getInterpolation(Er,Mi,Si,Ei,_r,Mr,Sr,new Vt),h.uv2=h.uv1),o&&(qo.fromBufferAttribute(o,a),Yo.fromBufferAttribute(o,l),Zo.fromBufferAttribute(o,u),h.normal=fn.getInterpolation(Er,Mi,Si,Ei,qo,Yo,Zo,new et),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new et,materialIndex:0};fn.getNormal(Mi,Si,Ei,c.normal),h.face=c}return h}class ri extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(c,2));function v(g,m,p,_,x,y,M,T,B,L,S){const E=y/B,I=M/L,q=y/2,D=M/2,X=T/2,H=B+1,ot=L+1;let O=0,F=0;const tt=new et;for(let j=0;j<ot;j++){const z=j*I-D;for(let P=0;P<H;P++){const C=P*E-q;tt[g]=C*_,tt[m]=z*x,tt[p]=X,u.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),c.push(P/B),c.push(1-j/L),O+=1}}for(let j=0;j<L;j++)for(let z=0;z<B;z++){const P=d+z+H*j,C=d+z+H*(j+1),A=d+(z+1)+H*(j+1),R=d+(z+1)+H*j;l.push(P,C,R),l.push(C,A,R),F+=6}a.addGroup(f,F,S),f+=F,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const s in n)t[s]=n[s]}return t}function jc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){return i.getRenderTarget()===null?i.outputColorSpace:vn}const Kc={clone:zi,merge:qe};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=jc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class al extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends al{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class Qc extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new sn(wi,bi,t,e);s.layers=this.layers,this.add(s);const r=new sn(wi,bi,t,e);r.layers=this.layers,this.add(r);const o=new sn(wi,bi,t,e);o.layers=this.layers,this.add(o);const a=new sn(wi,bi,t,e);a.layers=this.layers,this.add(a);const l=new sn(wi,bi,t,e);l.layers=this.layers,this.add(l);const u=new sn(wi,bi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,u]=this.children,h=t.getRenderTarget(),c=t.toneMapping,d=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,u),t.setRenderTarget(h),t.toneMapping=c,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ys extends $e{constructor(t,e,n,s,r,o,a,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,s,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?re:ei),this.texture=new Ys(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ri(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:zn});r.uniforms.tEquirect.value=e;const o=new ce(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=cn),new Qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ys=new et,eh=new et,nh=new le;class Zn{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ys.subVectors(n,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ys),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nh.getNormalMatrix(t),s=this.coplanarPoint(ys).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new or,Tr=new et;class ll{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],h=s[5],c=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-u,m-f,y-p).normalize(),n[1].setComponents(l+r,d+u,m+f,y+p).normalize(),n[2].setComponents(l+o,d+h,m+v,y+_).normalize(),n[3].setComponents(l-o,d-h,m-v,y-_).normalize(),n[4].setComponents(l-a,d-c,m-g,y-x).normalize(),e===Cn)n[5].setComponents(l+a,d+c,m+g,y+x).normalize();else if(e===zr)n[5].setComponents(a,c,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ih(i,t){const e=t.isWebGL2,n=new WeakMap;function s(u,h){const c=u.array,d=u.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,c,d),u.onUploadCallback();let v;if(c instanceof Float32Array)v=i.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=i.SHORT;else if(c instanceof Uint32Array)v=i.UNSIGNED_INT;else if(c instanceof Int32Array)v=i.INT;else if(c instanceof Int8Array)v=i.BYTE;else if(c instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,c){const d=h.array,f=h.updateRange;i.bindBuffer(c,u),f.count===-1?i.bufferSubData(c,0,d):(e?i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c===void 0?n.set(u,s(u,h)):c.version<u.version&&(r(c.buffer,u,h),c.version=u.version)}return{get:o,remove:a,update:l}}class Ui extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,h=l+1,c=t/a,d=e/l,f=[],v=[],g=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let x=0;x<u;x++){const y=x*c-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+u*p,y=_+u*(p+1),M=_+1+u*(p+1),T=_+1+u*p;f.push(x,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh="vec3 transformed = vec3( position );",uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,au=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ju=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,od=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ud=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_d=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ld=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,se={alphamap_fragment:rh,alphamap_pars_fragment:sh,alphatest_fragment:oh,alphatest_pars_fragment:ah,aomap_fragment:lh,aomap_pars_fragment:ch,begin_vertex:hh,beginnormal_vertex:uh,bsdfs:dh,iridescence_fragment:fh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:xh,color_fragment:yh,color_pars_fragment:_h,color_pars_vertex:Mh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:wh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Th,displacementmap_vertex:Ah,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ch,encodings_fragment:Ph,encodings_pars_fragment:Lh,envmap_fragment:Ih,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Uh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Yh,envmap_vertex:Fh,fog_vertex:Bh,fog_pars_vertex:Oh,fog_fragment:zh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Gh,lightmap_fragment:Hh,lightmap_pars_fragment:Wh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Xh,lights_pars_begin:qh,lights_toon_fragment:Zh,lights_toon_pars_fragment:jh,lights_phong_fragment:Kh,lights_phong_pars_fragment:Jh,lights_physical_fragment:$h,lights_physical_pars_fragment:Qh,lights_fragment_begin:tu,lights_fragment_maps:eu,lights_fragment_end:nu,logdepthbuf_fragment:iu,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:ou,map_fragment:au,map_pars_fragment:lu,map_particle_fragment:cu,map_particle_pars_fragment:hu,metalnessmap_fragment:uu,metalnessmap_pars_fragment:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:vu,normal_fragment_begin:gu,normal_fragment_maps:xu,normal_pars_fragment:yu,normal_pars_vertex:_u,normal_vertex:Mu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:bu,iridescence_pars_fragment:Tu,output_fragment:Au,packing:Ru,premultiplied_alpha_fragment:Cu,project_vertex:Pu,dithering_fragment:Lu,dithering_pars_fragment:Iu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Uu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Fu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Ou,skinbase_vertex:zu,skinning_pars_vertex:Vu,skinning_vertex:Gu,skinnormal_vertex:Hu,specularmap_fragment:Wu,specularmap_pars_fragment:ku,tonemapping_fragment:Xu,tonemapping_pars_fragment:qu,transmission_fragment:Yu,transmission_pars_fragment:Zu,uv_pars_fragment:ju,uv_pars_vertex:Ku,uv_vertex:Ju,worldpos_vertex:$u,background_vert:Qu,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:sd,depth_frag:od,distanceRGBA_vert:ad,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:hd,linedashed_vert:ud,linedashed_frag:dd,meshbasic_vert:fd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:vd,meshmatcap_vert:gd,meshmatcap_frag:xd,meshnormal_vert:yd,meshnormal_frag:_d,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:Ed,meshphysical_frag:wd,meshtoon_vert:bd,meshtoon_frag:Td,points_vert:Ad,points_frag:Rd,shadow_vert:Cd,shadow_frag:Pd,sprite_vert:Ld,sprite_frag:Id},Ht={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},xn={basic:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new de(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:qe([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:qe([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new de(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:qe([Ht.points,Ht.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:qe([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:qe([Ht.common,Ht.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:qe([Ht.sprite,Ht.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:qe([Ht.common,Ht.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:qe([Ht.lights,Ht.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};xn.physical={uniforms:qe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Ar={r:0,b:0,g:0};function Nd(i,t,e,n,s,r,o){const a=new de(0);let l=r===!0?0:1,u,h,c=null,d=0,f=null;function v(m,p){let _=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),_=!0),i.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),_=!0;break}(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Wr)?(h===void 0&&(h=new ce(new ri(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:zi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,B,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==re,(c!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ce(new Ui(2,2),new si({name:"BackgroundMaterial",uniforms:zi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,p){m.getRGB(Ar,ol(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function Ud(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let u=l,h=!1;function c(X,H,ot,O,F){let tt=!1;if(o){const j=g(O,ot,H);u!==j&&(u=j,f(u.object)),tt=p(X,O,ot,F),tt&&_(X,O,ot,F)}else{const j=H.wireframe===!0;(u.geometry!==O.id||u.program!==ot.id||u.wireframe!==j)&&(u.geometry=O.id,u.program=ot.id,u.wireframe=j,tt=!0)}F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,L(X,H,ot,O),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(X){return n.isWebGL2?i.bindVertexArray(X):r.bindVertexArrayOES(X)}function v(X){return n.isWebGL2?i.deleteVertexArray(X):r.deleteVertexArrayOES(X)}function g(X,H,ot){const O=ot.wireframe===!0;let F=a[X.id];F===void 0&&(F={},a[X.id]=F);let tt=F[H.id];tt===void 0&&(tt={},F[H.id]=tt);let j=tt[O];return j===void 0&&(j=m(d()),tt[O]=j),j}function m(X){const H=[],ot=[],O=[];for(let F=0;F<s;F++)H[F]=0,ot[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:O,object:X,attributes:{},index:null}}function p(X,H,ot,O){const F=u.attributes,tt=H.attributes;let j=0;const z=ot.getAttributes();for(const P in z)if(z[P].location>=0){const A=F[P];let R=tt[P];if(R===void 0&&(P==="instanceMatrix"&&X.instanceMatrix&&(R=X.instanceMatrix),P==="instanceColor"&&X.instanceColor&&(R=X.instanceColor)),A===void 0||A.attribute!==R||R&&A.data!==R.data)return!0;j++}return u.attributesNum!==j||u.index!==O}function _(X,H,ot,O){const F={},tt=H.attributes;let j=0;const z=ot.getAttributes();for(const P in z)if(z[P].location>=0){let A=tt[P];A===void 0&&(P==="instanceMatrix"&&X.instanceMatrix&&(A=X.instanceMatrix),P==="instanceColor"&&X.instanceColor&&(A=X.instanceColor));const R={};R.attribute=A,A&&A.data&&(R.data=A.data),F[P]=R,j++}u.attributes=F,u.attributesNum=j,u.index=O}function x(){const X=u.newAttributes;for(let H=0,ot=X.length;H<ot;H++)X[H]=0}function y(X){M(X,0)}function M(X,H){const ot=u.newAttributes,O=u.enabledAttributes,F=u.attributeDivisors;ot[X]=1,O[X]===0&&(i.enableVertexAttribArray(X),O[X]=1),F[X]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,H),F[X]=H)}function T(){const X=u.newAttributes,H=u.enabledAttributes;for(let ot=0,O=H.length;ot<O;ot++)H[ot]!==X[ot]&&(i.disableVertexAttribArray(ot),H[ot]=0)}function B(X,H,ot,O,F,tt,j){j===!0?i.vertexAttribIPointer(X,H,ot,F,tt):i.vertexAttribPointer(X,H,ot,O,F,tt)}function L(X,H,ot,O){if(n.isWebGL2===!1&&(X.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const F=O.attributes,tt=ot.getAttributes(),j=H.defaultAttributeValues;for(const z in tt){const P=tt[z];if(P.location>=0){let C=F[z];if(C===void 0&&(z==="instanceMatrix"&&X.instanceMatrix&&(C=X.instanceMatrix),z==="instanceColor"&&X.instanceColor&&(C=X.instanceColor)),C!==void 0){const A=C.normalized,R=C.itemSize,k=e.get(C);if(k===void 0)continue;const it=k.buffer,st=k.type,Z=k.bytesPerElement,ht=n.isWebGL2===!0&&(st===i.INT||st===i.UNSIGNED_INT||C.gpuType===ka);if(C.isInterleavedBufferAttribute){const pt=C.data,U=pt.stride,lt=C.offset;if(pt.isInstancedInterleavedBuffer){for(let Q=0;Q<P.locationSize;Q++)M(P.location+Q,pt.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Q=0;Q<P.locationSize;Q++)y(P.location+Q);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Q=0;Q<P.locationSize;Q++)B(P.location+Q,R/P.locationSize,st,A,U*Z,(lt+R/P.locationSize*Q)*Z,ht)}else{if(C.isInstancedBufferAttribute){for(let pt=0;pt<P.locationSize;pt++)M(P.location+pt,C.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let pt=0;pt<P.locationSize;pt++)y(P.location+pt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let pt=0;pt<P.locationSize;pt++)B(P.location+pt,R/P.locationSize,st,A,R*Z,R/P.locationSize*pt*Z,ht)}}else if(j!==void 0){const A=j[z];if(A!==void 0)switch(A.length){case 2:i.vertexAttrib2fv(P.location,A);break;case 3:i.vertexAttrib3fv(P.location,A);break;case 4:i.vertexAttrib4fv(P.location,A);break;default:i.vertexAttrib1fv(P.location,A)}}}}T()}function S(){q();for(const X in a){const H=a[X];for(const ot in H){const O=H[ot];for(const F in O)v(O[F].object),delete O[F];delete H[ot]}delete a[X]}}function E(X){if(a[X.id]===void 0)return;const H=a[X.id];for(const ot in H){const O=H[ot];for(const F in O)v(O[F].object),delete O[F];delete H[ot]}delete a[X.id]}function I(X){for(const H in a){const ot=a[H];if(ot[X.id]===void 0)continue;const O=ot[X.id];for(const F in O)v(O[F].object),delete O[F];delete ot[X.id]}}function q(){D(),h=!0,u!==l&&(u=l,f(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:q,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function Dd(i,t,e,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,c){if(c===0)return;let d,f;if(s)d=i,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,u,h,c),e.update(h,r,c)}this.setMode=o,this.render=a,this.renderInstances=l}function Fd(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||t.has("OES_texture_float"),M=x&&y,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function Bd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||s;return s=d,n=c.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=i.get(c);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,x=_*4;let y=p.clippingState||null;l.value=y,y=h(v,d,x,f);for(let M=0;M!==x;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)o.copy(c[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Od(i){let t=new WeakMap;function e(o,a){return a===Ps?o.mapping=Fi:a===Ls&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ps||a===Ls)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new th(l.height/2);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zd extends al{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,jo=[.125,.215,.35,.446,.526,.582],Jn=20,_s=new zd,Ko=new de;let Ms=null;const jn=(1+Math.sqrt(5))/2,Ti=1/jn,Jo=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,jn,Ti),new et(0,jn,-Ti),new et(Ti,0,jn),new et(-Ti,0,jn),new et(jn,Ti,0),new et(-jn,Ti,0)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ms=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ms),t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ms=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Qi,format:mn,colorSpace:vn,depthBuffer:!1},s=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Gd(r,t,e)}return s}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,s){const a=new sn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(Ko),h.toneMapping=Pn,h.autoClear=!1;const f=new Me({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),v=new ce(new ri,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Ko),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;Rr(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=c,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jo[(s-1)%Jo.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new ce(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Jn-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const p=[];let _=0;for(let B=0;B<Jn;++B){const L=B/g,S=Math.exp(-L*L/2);p.push(S),B===0?_+=S:B<m&&(_+=2*S)}for(let B=0;B<p.length;B++)p[B]=p[B]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[s],M=3*y*(s>x-Pi?s-x+Pi:0),T=4*(this._cubeSize-y);Rr(e,M,T,3*y,2*y),l.setRenderTarget(e),l.render(c,_s)}}function Vd(i){const t=[],e=[],n=[];let s=i;const r=i-Pi+1+jo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Pi?l=jo[o-i+Pi-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,c=1+u,d=[h,h,c,h,c,c,h,h,c,c,h,c],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),x=new Float32Array(m*v*f),y=new Float32Array(p*v*f);for(let T=0;T<f;T++){const B=T%3*2/3-1,L=T>2?0:-1,S=[B,L,0,B+2/3,L,0,B+2/3,L+1,0,B,L,0,B+2/3,L+1,0,B,L+1,0];_.set(S,g*v*T),x.set(d,m*v*T);const E=[T,T,T,T,T,T];y.set(E,p*v*T)}const M=new Qe;M.setAttribute("position",new Ke(_,g)),M.setAttribute("uv",new Ke(x,m)),M.setAttribute("faceIndex",new Ke(y,p)),t.push(M),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qo(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gd(i,t,e){const n=new Float32Array(Jn),s=new et(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ta(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ea(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Zs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ps||l===Ls,h=l===Fi||l===Bi;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=t.get(a);return e===null&&(e=new $o(i)),c=u?e.fromEquirectangular(a,c):e.fromCubemap(a,c),t.set(a,c),c.texture}else{if(t.has(a))return t.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||h&&c&&s(c)){e===null&&(e=new $o(i));const d=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kd(i,t,e,n){const s={},r=new WeakMap;function o(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let x=0,y=_.length;x<y;x+=3){const M=_[x+0],T=_[x+1],B=_[x+2];d.push(M,T,T,B,B,M)}}else{const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const M=x+0,T=x+1,B=x+2;d.push(M,T,T,B,B,M)}}const m=new(Qa(d)?sl:rl)(d,1);m.version=g;const p=r.get(c);p&&t.remove(p),r.set(c,m)}function h(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&u(c)}else u(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function Xd(i,t,e,n){const s=n.isWebGL2;let r;function o(d){r=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function h(d,f){i.drawElements(r,f,a,d*l),e.update(f,r,1)}function c(d,f,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,a,d*l,v),e.update(f,r,v)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=c}function qd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yd(i,t){return i[0]-t[0]}function Zd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function jd(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ve,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,c){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let H=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var f=H;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let E=h.attributes.position.count*S,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const q=new Float32Array(E*I*4*g),D=new nl(q,E,I,g);D.type=On,D.needsUpdate=!0;const X=S*4;for(let ot=0;ot<g;ot++){const O=T[ot],F=B[ot],tt=L[ot],j=E*I*4*ot;for(let z=0;z<O.count;z++){const P=z*X;x===!0&&(o.fromBufferAttribute(O,z),q[j+P+0]=o.x,q[j+P+1]=o.y,q[j+P+2]=o.z,q[j+P+3]=0),y===!0&&(o.fromBufferAttribute(F,z),q[j+P+4]=o.x,q[j+P+5]=o.y,q[j+P+6]=o.z,q[j+P+7]=0),M===!0&&(o.fromBufferAttribute(tt,z),q[j+P+8]=o.x,q[j+P+9]=o.y,q[j+P+10]=o.z,q[j+P+11]=tt.itemSize===4?o.w:1)}}m={count:g,texture:D,size:new Vt(E,I)},r.set(h,m),h.addEventListener("dispose",H)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const _=h.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d),c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<v;y++){const M=g[y];M[0]=y,M[1]=d[y]}g.sort(Zd);for(let y=0;y<8;y++)y<v&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Yd);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],B=M[1];T!==Number.MAX_SAFE_INTEGER&&B?(m&&h.getAttribute("morphTarget"+y)!==m[T]&&h.setAttribute("morphTarget"+y,m[T]),p&&h.getAttribute("morphNormal"+y)!==p[T]&&h.setAttribute("morphNormal"+y,p[T]),s[y]=B,_+=B):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const x=h.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Kd(i,t,e,n){let s=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,c=t.get(l,h);return s.get(c)!==u&&(t.update(c),s.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER)),c}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const hl=new $e,ul=new nl,dl=new Oc,fl=new Ys,na=[],ia=[],ra=new Float32Array(16),sa=new Float32Array(9),oa=new Float32Array(4);function Gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=na[s];if(r===void 0&&(r=new Float32Array(s),na[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=ia[t];e===void 0&&(e=new Int32Array(t),ia[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;oa.set(n),i.uniformMatrix2fv(this.addr,!1,oa),Ie(e,n)}}function nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;sa.set(n),i.uniformMatrix3fv(this.addr,!1,sa),Ie(e,n)}}function rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ra.set(n),i.uniformMatrix4fv(this.addr,!1,ra),Ie(e,n)}}function sf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||hl,s)}function pf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dl,s)}function mf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fl,s)}function vf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ul,s)}function gf(i){switch(i){case 5126:return Jd;case 35664:return $d;case 35665:return Qd;case 35666:return tf;case 35674:return ef;case 35675:return nf;case 35676:return rf;case 5124:case 35670:return sf;case 35667:case 35671:return of;case 35668:case 35672:return af;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return hf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return vf}}function xf(i,t){i.uniform1fv(this.addr,t)}function yf(i,t){const e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function _f(i,t){const e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mf(i,t){const e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sf(i,t){const e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ef(i,t){const e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wf(i,t){const e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bf(i,t){i.uniform1iv(this.addr,t)}function Tf(i,t){i.uniform2iv(this.addr,t)}function Af(i,t){i.uniform3iv(this.addr,t)}function Rf(i,t){i.uniform4iv(this.addr,t)}function Cf(i,t){i.uniform1uiv(this.addr,t)}function Pf(i,t){i.uniform2uiv(this.addr,t)}function Lf(i,t){i.uniform3uiv(this.addr,t)}function If(i,t){i.uniform4uiv(this.addr,t)}function Nf(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hl,r[o])}function Uf(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dl,r[o])}function Df(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fl,r[o])}function Ff(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ul,r[o])}function Bf(i){switch(i){case 5126:return xf;case 35664:return yf;case 35665:return _f;case 35666:return Mf;case 35674:return Sf;case 35675:return Ef;case 35676:return wf;case 5124:case 35670:return bf;case 35667:case 35671:return Tf;case 35668:case 35672:return Af;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Ff}}class Of{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gf(e.type)}}class zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Bf(e.type)}}class Vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function aa(i,t){i.seq.push(t),i.map[t.id]=t}function Gf(i,t,e){const n=i.name,s=n.length;for(Ss.lastIndex=0;;){const r=Ss.exec(n),o=Ss.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){aa(e,u===void 0?new Of(a,i,t):new zf(a,i,t));break}else{let c=e.map[a];c===void 0&&(c=new Vf(a),aa(e,c)),e=c}}}class Br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Gf(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function la(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Hf=0;function Wf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kf(i){switch(i){case vn:return["Linear","( value )"];case re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function ca(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wf(i.getShaderSource(t),o)}else return s}function Xf(i,t){const e=kf(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function qf(i,t){let e;switch(t){case nc:e="Linear";break;case ic:e="Reinhard";break;case rc:e="OptimizedCineon";break;case sc:e="ACESFilmic";break;case oc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yi(i){return i!==""}function ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(i){return i.replace(Kf,Jf)}function Jf(i,t){const e=se[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Bs(e)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(i){return i.replace($f,Qf)}function Qf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===za?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function ep(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function np(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function ip(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ha:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function rp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tp(e),u=ep(e),h=np(e),c=ip(e),d=rp(e),f=e.isWebGL2?"":Yf(e),v=Zf(r),g=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Yi).join(`
`),p.length>0&&(p+=`
`)):(m=[fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),p=[f,fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?se.tonemapping_pars_fragment:"",e.toneMapping!==Pn?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.encodings_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),o=Bs(o),o=ha(o,e),o=ua(o,e),a=Bs(a),a=ha(a,e),a=ua(a,e),o=da(o),a=da(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,y=_+p+a,M=la(s,s.VERTEX_SHADER,x),T=la(s,s.FRAGMENT_SHADER,y);if(s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const S=s.getProgramInfoLog(g).trim(),E=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(T).trim();let q=!0,D=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{const X=ca(s,M,"vertex"),H=ca(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+X+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:E,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(M),s.deleteShader(T);let B;this.getUniforms=function(){return B===void 0&&(B=new Br(s,g)),B};let L;return this.getAttributes=function(){return L===void 0&&(L=jf(s,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let op=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lp(t),e.set(t,n)),n}}class lp{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}}function cp(i,t,e,n,s,r,o){const a=new qs,l=new ap,u=[],h=s.isWebGL2,c=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,I,q,D){const X=q.fog,H=D.geometry,ot=S.isMeshStandardMaterial?q.environment:null,O=(S.isMeshStandardMaterial?e:t).get(S.envMap||ot),F=O&&O.mapping===Wr?O.image.height:null,tt=v[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,z=j!==void 0?j.length:0;let P=0;H.morphAttributes.position!==void 0&&(P=1),H.morphAttributes.normal!==void 0&&(P=2),H.morphAttributes.color!==void 0&&(P=3);let C,A,R,k;if(tt){const pe=xn[tt];C=pe.vertexShader,A=pe.fragmentShader}else C=S.vertexShader,A=S.fragmentShader,l.update(S),R=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const it=i.getRenderTarget(),st=D.isInstancedMesh===!0,Z=!!S.map,ht=!!S.matcap,pt=!!O,U=!!S.aoMap,lt=!!S.lightMap,Q=!!S.bumpMap,$=!!S.normalMap,J=!!S.displacementMap,Rt=!!S.emissiveMap,xt=!!S.metalnessMap,Ct=!!S.roughnessMap,Mt=S.anisotropy>0,Wt=S.clearcoat>0,Jt=S.iridescence>0,N=S.sheen>0,b=S.transmission>0,at=Mt&&!!S.anisotropyMap,_t=Wt&&!!S.clearcoatMap,gt=Wt&&!!S.clearcoatNormalMap,G=Wt&&!!S.clearcoatRoughnessMap,yt=Jt&&!!S.iridescenceMap,St=Jt&&!!S.iridescenceThicknessMap,ft=N&&!!S.sheenColorMap,kt=N&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,qt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,Gt=b&&!!S.transmissionMap,Kt=b&&!!S.thicknessMap,Qt=!!S.gradientMap,K=!!S.alphaMap,Dt=S.alphaTest>0,ut=!!S.extensions,At=!!H.attributes.uv1,zt=!!H.attributes.uv2,ie=!!H.attributes.uv3;return{isWebGL2:h,shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:C,fragmentShader:A,defines:S.defines,customVertexShaderID:R,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:st,instancingColor:st&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:vn,map:Z,matcap:ht,envMap:pt,envMapMode:pt&&O.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:lt,bumpMap:Q,normalMap:$,displacementMap:d&&J,emissiveMap:Rt,normalMapObjectSpace:$&&S.normalMapType===yc,normalMapTangentSpace:$&&S.normalMapType===Ja,metalnessMap:xt,roughnessMap:Ct,anisotropy:Mt,anisotropyMap:at,clearcoat:Wt,clearcoatMap:_t,clearcoatNormalMap:gt,clearcoatRoughnessMap:G,iridescence:Jt,iridescenceMap:yt,iridescenceThicknessMap:St,sheen:N,sheenColorMap:ft,sheenRoughnessMap:kt,specularMap:Xt,specularColorMap:qt,specularIntensityMap:Zt,transmission:b,transmissionMap:Gt,thicknessMap:Kt,gradientMap:Qt,opaque:S.transparent===!1&&S.blending===Ii,alphaMap:K,alphaTest:Dt,combine:S.combine,mapUv:Z&&g(S.map.channel),aoMapUv:U&&g(S.aoMap.channel),lightMapUv:lt&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:$&&g(S.normalMap.channel),displacementMapUv:J&&g(S.displacementMap.channel),emissiveMapUv:Rt&&g(S.emissiveMap.channel),metalnessMapUv:xt&&g(S.metalnessMap.channel),roughnessMapUv:Ct&&g(S.roughnessMap.channel),anisotropyMapUv:at&&g(S.anisotropyMap.channel),clearcoatMapUv:_t&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(S.sheenRoughnessMap.channel),specularMapUv:Xt&&g(S.specularMap.channel),specularColorMapUv:qt&&g(S.specularColorMap.channel),specularIntensityMapUv:Zt&&g(S.specularIntensityMap.channel),transmissionMapUv:Gt&&g(S.transmissionMap.channel),thicknessMapUv:Kt&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&($||Mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:zt,vertexUv3s:ie,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Z||K),fog:!!X,useFog:S.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:P,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:Pn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oe,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ut&&S.extensions.derivatives===!0,extensionFragDepth:ut&&S.extensions.fragDepth===!0,extensionDrawBuffers:ut&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),S.push(a.mask)}function y(S){const E=v[S.type];let I;if(E){const q=xn[E];I=Kc.clone(q.uniforms)}else I=S.uniforms;return I}function M(S,E){let I;for(let q=0,D=u.length;q<D;q++){const X=u[q];if(X.cacheKey===E){I=X,++I.usedTimes;break}}return I===void 0&&(I=new sp(i,E,S,r),u.push(I)),I}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function B(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:B,programs:u,dispose:L}}function hp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function up(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ma(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(c,d,f,v,g,m){let p=i[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},i[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),t++,p}function a(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(c,d){e.length>1&&e.sort(c||up),n.length>1&&n.sort(d||pa),s.length>1&&s.sort(d||pa)}function h(){for(let c=t,d=i.length;c<d;c++){const f=i[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:u}}function dp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ma,i.set(n,[o])):s>=r.length?(o=new ma,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new de};break;case"SpotLight":e={position:new et,direction:new et,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function pp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mp=0;function vp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gp(i,t){const e=new fp,n=pp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new et);const r=new et,o=new Ae,a=new Ae;function l(h,c){let d=0,f=0,v=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let g=0,m=0,p=0,_=0,x=0,y=0,M=0,T=0,B=0,L=0;h.sort(vp);const S=c===!0?Math.PI:1;for(let I=0,q=h.length;I<q;I++){const D=h[I],X=D.color,H=D.intensity,ot=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*H*S,f+=X.g*H*S,v+=X.b*H*S;else if(D.isLightProbe)for(let F=0;F<9;F++)s.probe[F].addScaledVector(D.sh.coefficients[F],H);else if(D.isDirectionalLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const tt=D.shadow,j=n.get(D);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,s.directionalShadow[g]=j,s.directionalShadowMap[g]=O,s.directionalShadowMatrix[g]=D.shadow.matrix,y++}s.directional[g]=F,g++}else if(D.isSpotLight){const F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(X).multiplyScalar(H*S),F.distance=ot,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,s.spot[p]=F;const tt=D.shadow;if(D.map&&(s.spotLightMap[B]=D.map,B++,tt.updateMatrices(D),D.castShadow&&L++),s.spotLightMatrix[p]=tt.matrix,D.castShadow){const j=n.get(D);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,s.spotShadow[p]=j,s.spotShadowMap[p]=O,T++}p++}else if(D.isRectAreaLight){const F=e.get(D);F.color.copy(X).multiplyScalar(H),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),s.rectArea[_]=F,_++}else if(D.isPointLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*S),F.distance=D.distance,F.decay=D.decay,D.castShadow){const tt=D.shadow,j=n.get(D);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,j.shadowCameraNear=tt.camera.near,j.shadowCameraFar=tt.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=D.shadow.matrix,M++}s.point[m]=F,m++}else if(D.isHemisphereLight){const F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(H*S),F.groundColor.copy(D.groundColor).multiplyScalar(H*S),s.hemi[x]=F,x++}}_>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==g||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==_||E.hemiLength!==x||E.numDirectionalShadows!==y||E.numPointShadows!==M||E.numSpotShadows!==T||E.numSpotMaps!==B)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=T+B-L,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=L,E.directionalLength=g,E.pointLength=m,E.spotLength=p,E.rectAreaLength=_,E.hemiLength=x,E.numDirectionalShadows=y,E.numPointShadows=M,E.numSpotShadows=T,E.numSpotMaps=B,s.version=mp++)}function u(h,c){let d=0,f=0,v=0,g=0,m=0;const p=c.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=s.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),v++}else if(y.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=s.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:s}}function va(i,t){const e=new gp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(c){n.push(c)}function a(c){s.push(c)}function l(c){e.setup(n,c)}function u(c){e.setupView(n,c)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function xp(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new va(i,t),e.set(r,[l])):o>=a.length?(l=new va(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class yp extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ep(i,t,e){let n=new ll;const s=new Vt,r=new Vt,o=new Ve,a=new yp({depthPacking:xc}),l=new _p,u={},h=e.maxTextureSize,c={[Gn]:Je,[Je]:Gn,[Oe]:Oe},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Mp,fragmentShader:Sp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Qe;v.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ce(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let p=this.type;this.render=function(M,T,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(zn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=p!==Rn&&this.type===Rn,D=p===Rn&&this.type!==Rn;for(let X=0,H=M.length;X<H;X++){const ot=M[X],O=ot.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const F=O.getFrameExtents();if(s.multiply(F),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,O.mapSize.y=r.y)),O.map===null||q===!0||D===!0){const j=this.type!==Rn?{minFilter:Ze,magFilter:Ze}:{};O.map!==null&&O.map.dispose(),O.map=new ni(s.x,s.y,j),O.map.texture.name=ot.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const tt=O.getViewportCount();for(let j=0;j<tt;j++){const z=O.getViewport(j);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),I.viewport(o),O.updateMatrices(ot,j),n=O.getFrustum(),y(T,B,O.camera,ot,this.type)}O.isPointLightShadow!==!0&&this.type===Rn&&_(O,B),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,S,E)};function _(M,T){const B=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,B,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,B,f,g,null)}function x(M,T,B,L){let S=null;const E=B.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)S=E;else if(S=B.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=S.uuid,q=T.uuid;let D=u[I];D===void 0&&(D={},u[I]=D);let X=D[q];X===void 0&&(X=S.clone(),D[q]=X),S=X}if(S.visible=T.visible,S.wireframe=T.wireframe,L===Rn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:c[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=B}return S}function y(M,T,B,L,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Rn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld);const q=t.update(M),D=M.material;if(Array.isArray(D)){const X=q.groups;for(let H=0,ot=X.length;H<ot;H++){const O=X[H],F=D[O.materialIndex];if(F&&F.visible){const tt=x(M,F,L,S);i.renderBufferDirect(B,null,q,tt,M,O)}}}else if(D.visible){const X=x(M,D,L,S);i.renderBufferDirect(B,null,q,X,M,null)}}const I=M.children;for(let q=0,D=I.length;q<D;q++)y(I[q],T,B,L,S)}}function wp(i,t,e){const n=e.isWebGL2;function s(){let K=!1;const Dt=new Ve;let ut=null;const At=new Ve(0,0,0,0);return{setMask:function(zt){ut!==zt&&!K&&(i.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){K=zt},setClear:function(zt,ie,fe,pe,Ge){Ge===!0&&(zt*=pe,ie*=pe,fe*=pe),Dt.set(zt,ie,fe,pe),At.equals(Dt)===!1&&(i.clearColor(zt,ie,fe,pe),At.copy(Dt))},reset:function(){K=!1,ut=null,At.set(-1,0,0,0)}}}function r(){let K=!1,Dt=null,ut=null,At=null;return{setTest:function(zt){zt?it(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(zt){Dt!==zt&&!K&&(i.depthMask(zt),Dt=zt)},setFunc:function(zt){if(ut!==zt){switch(zt){case Yl:i.depthFunc(i.NEVER);break;case Zl:i.depthFunc(i.ALWAYS);break;case jl:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case $l:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=zt}},setLocked:function(zt){K=zt},setClear:function(zt){At!==zt&&(i.clearDepth(zt),At=zt)},reset:function(){K=!1,Dt=null,ut=null,At=null}}}function o(){let K=!1,Dt=null,ut=null,At=null,zt=null,ie=null,fe=null,pe=null,Ge=null;return{setTest:function(ee){K||(ee?it(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(ee){Dt!==ee&&!K&&(i.stencilMask(ee),Dt=ee)},setFunc:function(ee,mt,dt){(ut!==ee||At!==mt||zt!==dt)&&(i.stencilFunc(ee,mt,dt),ut=ee,At=mt,zt=dt)},setOp:function(ee,mt,dt){(ie!==ee||fe!==mt||pe!==dt)&&(i.stencilOp(ee,mt,dt),ie=ee,fe=mt,pe=dt)},setLocked:function(ee){K=ee},setClear:function(ee){Ge!==ee&&(i.clearStencil(ee),Ge=ee)},reset:function(){K=!1,Dt=null,ut=null,At=null,zt=null,ie=null,fe=null,pe=null,Ge=null}}}const a=new s,l=new r,u=new o,h=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,x=null,y=null,M=null,T=null,B=null,L=null,S=!1,E=null,I=null,q=null,D=null,X=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,O=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),ot=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ot=O>=2);let tt=null,j={};const z=i.getParameter(i.SCISSOR_BOX),P=i.getParameter(i.VIEWPORT),C=new Ve().fromArray(z),A=new Ve().fromArray(P);function R(K,Dt,ut,At){const zt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(K,ie),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<ut;fe++)n&&(K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY)?i.texImage3D(Dt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Dt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return ie}const k={};k[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(k[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),it(i.DEPTH_TEST),l.setFunc(Cs),J(!1),Rt(eo),it(i.CULL_FACE),Q(zn);function it(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function st(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function Z(K,Dt){return f[K]!==Dt?(i.bindFramebuffer(K,Dt),f[K]=Dt,n&&(K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Dt),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Dt)),!0):!1}function ht(K,Dt){let ut=g,At=!1;if(K)if(ut=v.get(Dt),ut===void 0&&(ut=[],v.set(Dt,ut)),K.isWebGLMultipleRenderTargets){const zt=K.texture;if(ut.length!==zt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,fe=zt.length;ie<fe;ie++)ut[ie]=i.COLOR_ATTACHMENT0+ie;ut.length=zt.length,At=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,At=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,At=!0);At&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function pt(K){return m!==K?(i.useProgram(K),m=K,!0):!1}const U={[Ri]:i.FUNC_ADD,[Fl]:i.FUNC_SUBTRACT,[Bl]:i.FUNC_REVERSE_SUBTRACT};if(n)U[ro]=i.MIN,U[so]=i.MAX;else{const K=t.get("EXT_blend_minmax");K!==null&&(U[ro]=K.MIN_EXT,U[so]=K.MAX_EXT)}const lt={[Ol]:i.ZERO,[zl]:i.ONE,[Vl]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[ql]:i.SRC_ALPHA_SATURATE,[kl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[Wl]:i.ONE_MINUS_DST_ALPHA};function Q(K,Dt,ut,At,zt,ie,fe,pe){if(K===zn){p===!0&&(st(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),K!==Dl){if(K!==_||pe!==S){if((x!==Ri||T!==Ri)&&(i.blendEquation(i.FUNC_ADD),x=Ri,T=Ri),pe)switch(K){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}y=null,M=null,B=null,L=null,_=K,S=pe}return}zt=zt||Dt,ie=ie||ut,fe=fe||At,(Dt!==x||zt!==T)&&(i.blendEquationSeparate(U[Dt],U[zt]),x=Dt,T=zt),(ut!==y||At!==M||ie!==B||fe!==L)&&(i.blendFuncSeparate(lt[ut],lt[At],lt[ie],lt[fe]),y=ut,M=At,B=ie,L=fe),_=K,S=!1}function $(K,Dt){K.side===Oe?st(i.CULL_FACE):it(i.CULL_FACE);let ut=K.side===Je;Dt&&(ut=!ut),J(ut),K.blending===Ii&&K.transparent===!1?Q(zn):Q(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.premultipliedAlpha),l.setFunc(K.depthFunc),l.setTest(K.depthTest),l.setMask(K.depthWrite),a.setMask(K.colorWrite);const At=K.stencilWrite;u.setTest(At),At&&(u.setMask(K.stencilWriteMask),u.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),u.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ct(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Rt(K){K!==Il?(it(i.CULL_FACE),K!==I&&(K===eo?i.cullFace(i.BACK):K===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),I=K}function xt(K){K!==q&&(ot&&i.lineWidth(K),q=K)}function Ct(K,Dt,ut){K?(it(i.POLYGON_OFFSET_FILL),(D!==Dt||X!==ut)&&(i.polygonOffset(Dt,ut),D=Dt,X=ut)):st(i.POLYGON_OFFSET_FILL)}function Mt(K){K?it(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function Wt(K){K===void 0&&(K=i.TEXTURE0+H-1),tt!==K&&(i.activeTexture(K),tt=K)}function Jt(K,Dt,ut){ut===void 0&&(tt===null?ut=i.TEXTURE0+H-1:ut=tt);let At=j[ut];At===void 0&&(At={type:void 0,texture:void 0},j[ut]=At),(At.type!==K||At.texture!==Dt)&&(tt!==ut&&(i.activeTexture(ut),tt=ut),i.bindTexture(K,Dt||k[K]),At.type=K,At.texture=Dt)}function N(){const K=j[tt];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function b(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function G(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function qt(K){C.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),C.copy(K))}function Zt(K){A.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),A.copy(K))}function Gt(K,Dt){let ut=c.get(Dt);ut===void 0&&(ut=new WeakMap,c.set(Dt,ut));let At=ut.get(K);At===void 0&&(At=i.getUniformBlockIndex(Dt,K.name),ut.set(K,At))}function Kt(K,Dt){const At=c.get(Dt).get(K);h.get(Dt)!==At&&(i.uniformBlockBinding(Dt,At,K.__bindingPointIndex),h.set(Dt,At))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,j={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,x=null,y=null,M=null,T=null,B=null,L=null,S=!1,E=null,I=null,q=null,D=null,X=null,C.set(0,0,i.canvas.width,i.canvas.height),A.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:it,disable:st,bindFramebuffer:Z,drawBuffers:ht,useProgram:pt,setBlending:Q,setMaterial:$,setFlipSided:J,setCullFace:Rt,setLineWidth:xt,setPolygonOffset:Ct,setScissorTest:Mt,activeTexture:Wt,bindTexture:Jt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:at,texImage2D:kt,texImage3D:Xt,updateUBOMapping:Gt,uniformBlockBinding:Kt,texStorage2D:St,texStorage3D:ft,texSubImage2D:_t,texSubImage3D:gt,compressedTexSubImage2D:G,compressedTexSubImage3D:yt,scissor:qt,viewport:Zt,reset:Qt}}function bp(i,t,e,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,c=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,b){return p?new OffscreenCanvas(N,b):tr("canvas")}function x(N,b,at,_t){let gt=1;if((N.width>_t||N.height>_t)&&(gt=_t/Math.max(N.width,N.height)),gt<1||b===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const G=b?Fs:Math.floor,yt=G(gt*N.width),St=G(gt*N.height);g===void 0&&(g=_(yt,St));const ft=at?_(yt,St):g;return ft.width=yt,ft.height=St,ft.getContext("2d").drawImage(N,0,0,yt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+yt+"x"+St+")."),ft}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function y(N){return No(N.width)&&No(N.height)}function M(N){return a?!1:N.wrapS!==pn||N.wrapT!==pn||N.minFilter!==Ze&&N.minFilter!==cn}function T(N,b){return N.generateMipmaps&&b&&N.minFilter!==Ze&&N.minFilter!==cn}function B(N){i.generateMipmap(N)}function L(N,b,at,_t,gt=!1){if(a===!1)return b;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let G=b;return b===i.RED&&(at===i.FLOAT&&(G=i.R32F),at===i.HALF_FLOAT&&(G=i.R16F),at===i.UNSIGNED_BYTE&&(G=i.R8)),b===i.RG&&(at===i.FLOAT&&(G=i.RG32F),at===i.HALF_FLOAT&&(G=i.RG16F),at===i.UNSIGNED_BYTE&&(G=i.RG8)),b===i.RGBA&&(at===i.FLOAT&&(G=i.RGBA32F),at===i.HALF_FLOAT&&(G=i.RGBA16F),at===i.UNSIGNED_BYTE&&(G=_t===re&&gt===!1?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)),(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(N,b,at){return T(N,at)===!0||N.isFramebufferTexture&&N.minFilter!==Ze&&N.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function E(N){return N===Ze||N===oo||N===Zr?i.NEAREST:i.LINEAR}function I(N){const b=N.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&v.delete(b)}function q(N){const b=N.target;b.removeEventListener("dispose",q),H(b)}function D(N){const b=n.get(N);if(b.__webglInit===void 0)return;const at=N.source,_t=m.get(at);if(_t){const gt=_t[b.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&X(N),Object.keys(_t).length===0&&m.delete(at)}n.remove(N)}function X(N){const b=n.get(N);i.deleteTexture(b.__webglTexture);const at=N.source,_t=m.get(at);delete _t[b.__cacheKey],o.memory.textures--}function H(N){const b=N.texture,at=n.get(N),_t=n.get(b);if(_t.__webglTexture!==void 0&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)i.deleteFramebuffer(at.__webglFramebuffer[gt]),at.__webglDepthbuffer&&i.deleteRenderbuffer(at.__webglDepthbuffer[gt]);else{if(i.deleteFramebuffer(at.__webglFramebuffer),at.__webglDepthbuffer&&i.deleteRenderbuffer(at.__webglDepthbuffer),at.__webglMultisampledFramebuffer&&i.deleteFramebuffer(at.__webglMultisampledFramebuffer),at.__webglColorRenderbuffer)for(let gt=0;gt<at.__webglColorRenderbuffer.length;gt++)at.__webglColorRenderbuffer[gt]&&i.deleteRenderbuffer(at.__webglColorRenderbuffer[gt]);at.__webglDepthRenderbuffer&&i.deleteRenderbuffer(at.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let gt=0,G=b.length;gt<G;gt++){const yt=n.get(b[gt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(b[gt])}n.remove(b),n.remove(N)}let ot=0;function O(){ot=0}function F(){const N=ot;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),ot+=1,N}function tt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function j(N,b){const at=n.get(N);if(N.isVideoTexture&&Wt(N),N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){const _t=N.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(at,N,b);return}}e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+b)}function z(N,b){const at=n.get(N);if(N.version>0&&at.__version!==N.version){Z(at,N,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+b)}function P(N,b){const at=n.get(N);if(N.version>0&&at.__version!==N.version){Z(at,N,b);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+b)}function C(N,b){const at=n.get(N);if(N.version>0&&at.__version!==N.version){ht(at,N,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+b)}const A={[Is]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},R={[Ze]:i.NEAREST,[oo]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ac]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},k={[Mc]:i.NEVER,[Rc]:i.ALWAYS,[Sc]:i.LESS,[wc]:i.LEQUAL,[Ec]:i.EQUAL,[Ac]:i.GEQUAL,[bc]:i.GREATER,[Tc]:i.NOTEQUAL};function it(N,b,at){if(at?(i.texParameteri(N,i.TEXTURE_WRAP_S,A[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,A[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,A[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,R[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,R[b.minFilter])):(i.texParameteri(N,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(N,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==pn||b.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,i.TEXTURE_MAG_FILTER,E(b.magFilter)),i.texParameteri(N,i.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==Ze&&b.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const _t=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ze||b.minFilter!==Zr&&b.minFilter!==$i||b.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Qi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(N,_t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function st(N,b){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const _t=b.source;let gt=m.get(_t);gt===void 0&&(gt={},m.set(_t,gt));const G=tt(b);if(G!==N.__cacheKey){gt[G]===void 0&&(gt[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),gt[G].usedTimes++;const yt=gt[N.__cacheKey];yt!==void 0&&(gt[N.__cacheKey].usedTimes--,yt.usedTimes===0&&X(b)),N.__cacheKey=G,N.__webglTexture=gt[G].texture}return at}function Z(N,b,at){let _t=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=i.TEXTURE_3D);const gt=st(N,b),G=b.source;e.bindTexture(_t,N.__webglTexture,i.TEXTURE0+at);const yt=n.get(G);if(G.version!==yt.__version||gt===!0){e.activeTexture(i.TEXTURE0+at),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const St=M(b)&&y(b.image)===!1;let ft=x(b.image,St,!1,h);ft=Jt(b,ft);const kt=y(ft)||a,Xt=r.convert(b.format,b.colorSpace);let qt=r.convert(b.type),Zt=L(b.internalFormat,Xt,qt,b.colorSpace);it(_t,b,kt);let Gt;const Kt=b.mipmaps,Qt=a&&b.isVideoTexture!==!0,K=yt.__version===void 0||gt===!0,Dt=S(b,ft,kt);if(b.isDepthTexture)Zt=i.DEPTH_COMPONENT,a?b.type===On?Zt=i.DEPTH_COMPONENT32F:b.type===Bn?Zt=i.DEPTH_COMPONENT24:b.type===$n?Zt=i.DEPTH24_STENCIL8:Zt=i.DEPTH_COMPONENT16:b.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Qn&&Zt===i.DEPTH_COMPONENT&&b.type!==Xs&&b.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Bn,qt=r.convert(b.type)),b.format===Oi&&Zt===i.DEPTH_COMPONENT&&(Zt=i.DEPTH_STENCIL,b.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$n,qt=r.convert(b.type))),K&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Zt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Zt,ft.width,ft.height,0,Xt,qt,null));else if(b.isDataTexture)if(Kt.length>0&&kt){Qt&&K&&e.texStorage2D(i.TEXTURE_2D,Dt,Zt,Kt[0].width,Kt[0].height);for(let ut=0,At=Kt.length;ut<At;ut++)Gt=Kt[ut],Qt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Xt,qt,Gt.data):e.texImage2D(i.TEXTURE_2D,ut,Zt,Gt.width,Gt.height,0,Xt,qt,Gt.data);b.generateMipmaps=!1}else Qt?(K&&e.texStorage2D(i.TEXTURE_2D,Dt,Zt,ft.width,ft.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Xt,qt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,ft.width,ft.height,0,Xt,qt,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&K&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Zt,Kt[0].width,Kt[0].height,ft.depth);for(let ut=0,At=Kt.length;ut<At;ut++)Gt=Kt[ut],b.format!==mn?Xt!==null?Qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Gt.width,Gt.height,ft.depth,Xt,Gt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Zt,Gt.width,Gt.height,ft.depth,0,Gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Gt.width,Gt.height,ft.depth,Xt,qt,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Zt,Gt.width,Gt.height,ft.depth,0,Xt,qt,Gt.data)}else{Qt&&K&&e.texStorage2D(i.TEXTURE_2D,Dt,Zt,Kt[0].width,Kt[0].height);for(let ut=0,At=Kt.length;ut<At;ut++)Gt=Kt[ut],b.format!==mn?Xt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Xt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Zt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Gt.width,Gt.height,Xt,qt,Gt.data):e.texImage2D(i.TEXTURE_2D,ut,Zt,Gt.width,Gt.height,0,Xt,qt,Gt.data)}else if(b.isDataArrayTexture)Qt?(K&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Zt,ft.width,ft.height,ft.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Xt,qt,ft.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,ft.width,ft.height,ft.depth,0,Xt,qt,ft.data);else if(b.isData3DTexture)Qt?(K&&e.texStorage3D(i.TEXTURE_3D,Dt,Zt,ft.width,ft.height,ft.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Xt,qt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,ft.width,ft.height,ft.depth,0,Xt,qt,ft.data);else if(b.isFramebufferTexture){if(K)if(Qt)e.texStorage2D(i.TEXTURE_2D,Dt,Zt,ft.width,ft.height);else{let ut=ft.width,At=ft.height;for(let zt=0;zt<Dt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Zt,ut,At,0,Xt,qt,null),ut>>=1,At>>=1}}else if(Kt.length>0&&kt){Qt&&K&&e.texStorage2D(i.TEXTURE_2D,Dt,Zt,Kt[0].width,Kt[0].height);for(let ut=0,At=Kt.length;ut<At;ut++)Gt=Kt[ut],Qt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Xt,qt,Gt):e.texImage2D(i.TEXTURE_2D,ut,Zt,Xt,qt,Gt);b.generateMipmaps=!1}else Qt?(K&&e.texStorage2D(i.TEXTURE_2D,Dt,Zt,ft.width,ft.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,qt,ft)):e.texImage2D(i.TEXTURE_2D,0,Zt,Xt,qt,ft);T(b,kt)&&B(_t),yt.__version=G.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ht(N,b,at){if(b.image.length!==6)return;const _t=st(N,b),gt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+at);const G=n.get(gt);if(gt.version!==G.__version||_t===!0){e.activeTexture(i.TEXTURE0+at),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const yt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let ut=0;ut<6;ut++)!yt&&!St?ft[ut]=x(b.image[ut],!1,!0,u):ft[ut]=St?b.image[ut].image:b.image[ut],ft[ut]=Jt(b,ft[ut]);const kt=ft[0],Xt=y(kt)||a,qt=r.convert(b.format,b.colorSpace),Zt=r.convert(b.type),Gt=L(b.internalFormat,qt,Zt,b.colorSpace),Kt=a&&b.isVideoTexture!==!0,Qt=G.__version===void 0||_t===!0;let K=S(b,kt,Xt);it(i.TEXTURE_CUBE_MAP,b,Xt);let Dt;if(yt){Kt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,K,Gt,kt.width,kt.height);for(let ut=0;ut<6;ut++){Dt=ft[ut].mipmaps;for(let At=0;At<Dt.length;At++){const zt=Dt[At];b.format!==mn?qt!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,zt.width,zt.height,qt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,Gt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,zt.width,zt.height,qt,Zt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,Gt,zt.width,zt.height,0,qt,Zt,zt.data)}}}else{Dt=b.mipmaps,Kt&&Qt&&(Dt.length>0&&K++,e.texStorage2D(i.TEXTURE_CUBE_MAP,K,Gt,ft[0].width,ft[0].height));for(let ut=0;ut<6;ut++)if(St){Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ft[ut].width,ft[ut].height,qt,Zt,ft[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Gt,ft[ut].width,ft[ut].height,0,qt,Zt,ft[ut].data);for(let At=0;At<Dt.length;At++){const ie=Dt[At].image[ut].image;Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,ie.width,ie.height,qt,Zt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,Gt,ie.width,ie.height,0,qt,Zt,ie.data)}}else{Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,qt,Zt,ft[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Gt,qt,Zt,ft[ut]);for(let At=0;At<Dt.length;At++){const zt=Dt[At];Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,qt,Zt,zt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,Gt,qt,Zt,zt.image[ut])}}}T(b,Xt)&&B(i.TEXTURE_CUBE_MAP),G.__version=gt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function pt(N,b,at,_t,gt){const G=r.convert(at.format,at.colorSpace),yt=r.convert(at.type),St=L(at.internalFormat,G,yt,at.colorSpace);n.get(b).__hasExternalTextures||(gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,0,St,b.width,b.height,b.depth,0,G,yt,null):e.texImage2D(gt,0,St,b.width,b.height,0,G,yt,null)),e.bindFramebuffer(i.FRAMEBUFFER,N),Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,gt,n.get(at).__webglTexture,0,Ct(b)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,gt,n.get(at).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(N,b,at){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer&&!b.stencilBuffer){let _t=i.DEPTH_COMPONENT16;if(at||Mt(b)){const gt=b.depthTexture;gt&&gt.isDepthTexture&&(gt.type===On?_t=i.DEPTH_COMPONENT32F:gt.type===Bn&&(_t=i.DEPTH_COMPONENT24));const G=Ct(b);Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,_t,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,G,_t,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,_t,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(b.depthBuffer&&b.stencilBuffer){const _t=Ct(b);at&&Mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,b.width,b.height):Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{const _t=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let gt=0;gt<_t.length;gt++){const G=_t[gt],yt=r.convert(G.format,G.colorSpace),St=r.convert(G.type),ft=L(G.internalFormat,yt,St,G.colorSpace),kt=Ct(b);at&&Mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ft,b.width,b.height):Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const _t=n.get(b.depthTexture).__webglTexture,gt=Ct(b);if(b.depthTexture.format===Qn)Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(b.depthTexture.format===Oi)Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Q(N){const b=n.get(N),at=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");lt(b.__webglFramebuffer,N)}else if(at){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]=i.createRenderbuffer(),U(b.__webglDepthbuffer[_t],N,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),U(b.__webglDepthbuffer,N,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(N,b,at){const _t=n.get(N);b!==void 0&&pt(_t.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),at!==void 0&&Q(N)}function J(N){const b=N.texture,at=n.get(N),_t=n.get(b);N.addEventListener("dispose",q),N.isWebGLMultipleRenderTargets!==!0&&(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=b.version,o.memory.textures++);const gt=N.isWebGLCubeRenderTarget===!0,G=N.isWebGLMultipleRenderTargets===!0,yt=y(N)||a;if(gt){at.__webglFramebuffer=[];for(let St=0;St<6;St++)at.__webglFramebuffer[St]=i.createFramebuffer()}else{if(at.__webglFramebuffer=i.createFramebuffer(),G)if(s.drawBuffers){const St=N.texture;for(let ft=0,kt=St.length;ft<kt;ft++){const Xt=n.get(St[ft]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Mt(N)===!1){const St=G?b:[b];at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ft=0;ft<St.length;ft++){const kt=St[ft];at.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);const Xt=r.convert(kt.format,kt.colorSpace),qt=r.convert(kt.type),Zt=L(kt.internalFormat,Xt,qt,kt.colorSpace,N.isXRRenderTarget===!0),Gt=Ct(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Zt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),U(at.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),it(i.TEXTURE_CUBE_MAP,b,yt);for(let St=0;St<6;St++)pt(at.__webglFramebuffer[St],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St);T(b,yt)&&B(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(G){const St=N.texture;for(let ft=0,kt=St.length;ft<kt;ft++){const Xt=St[ft],qt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,qt.__webglTexture),it(i.TEXTURE_2D,Xt,yt),pt(at.__webglFramebuffer,N,Xt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D),T(Xt,yt)&&B(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?St=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,_t.__webglTexture),it(St,b,yt),pt(at.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,St),T(b,yt)&&B(St),e.unbindTexture()}N.depthBuffer&&Q(N)}function Rt(N){const b=y(N)||a,at=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let _t=0,gt=at.length;_t<gt;_t++){const G=at[_t];if(T(G,b)){const yt=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(G).__webglTexture;e.bindTexture(yt,St),B(yt),e.unbindTexture()}}}function xt(N){if(a&&N.samples>0&&Mt(N)===!1){const b=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],at=N.width,_t=N.height;let gt=i.COLOR_BUFFER_BIT;const G=[],yt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(N),ft=N.isWebGLMultipleRenderTargets===!0;if(ft)for(let kt=0;kt<b.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){G.push(i.COLOR_ATTACHMENT0+kt),N.depthBuffer&&G.push(yt);const Xt=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(Xt===!1&&(N.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),ft&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[kt]),Xt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[yt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[yt])),ft){const qt=n.get(b[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,at,_t,0,0,at,_t,gt,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let kt=0;kt<b.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,St.__webglColorRenderbuffer[kt]);const Xt=n.get(b[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function Ct(N){return Math.min(c,N.samples)}function Mt(N){const b=n.get(N);return a&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(N){const b=o.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Jt(N,b){const at=N.colorSpace,_t=N.format,gt=N.type;return N.isCompressedTexture===!0||N.format===Us||at!==vn&&at!==ei&&(at===re?a===!1?t.has("EXT_sRGB")===!0&&_t===mn?(N.format=Us,N.minFilter=cn,N.generateMipmaps=!1):b=tl.sRGBToLinear(b):(_t!==mn||gt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),b}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=P,this.setTextureCube=C,this.rebindTextures=$,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Mt}function Tp(i,t,e){const n=e.isWebGL2;function s(r,o=ei){let a;if(r===Vn)return i.UNSIGNED_BYTE;if(r===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(r===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(r===lc)return i.BYTE;if(r===cc)return i.SHORT;if(r===Xs)return i.UNSIGNED_SHORT;if(r===ka)return i.INT;if(r===Bn)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===Qi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hc)return i.ALPHA;if(r===mn)return i.RGBA;if(r===uc)return i.LUMINANCE;if(r===dc)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Oi)return i.DEPTH_STENCIL;if(r===Us)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===fc)return i.RED;if(r===Ya)return i.RED_INTEGER;if(r===pc)return i.RG;if(r===Za)return i.RG_INTEGER;if(r===ja)return i.RGBA_INTEGER;if(r===jr||r===Kr||r===Jr||r===$r)if(o===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ao||r===lo||r===co||r===ho)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uo||r===fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===uo)return o===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===po||r===mo||r===vo||r===go||r===xo||r===yo||r===_o||r===Mo||r===So||r===Eo||r===wo||r===bo||r===To||r===Ao)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===po)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_o)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===So)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bo)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===To)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ao)return o===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Qr)return o===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===vc||r===Ro||r===Co||r===Po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Qr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ro)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Ap extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cr extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=h.position.distanceTo(c.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cp extends $e{constructor(t,e,n,s,r,o,a,l,u,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Bn),n===void 0&&h===Oi&&(n=$n),super(null,s,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pp extends ai{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,d=null,f=null,v=null;const g=e.getContextAttributes();let m=null,p=null;const _=[],x=[];let y=null;const M=new sn;M.layers.enable(1),M.viewport=new Ve;const T=new sn;T.layers.enable(2),T.viewport=new Ve;const B=[M,T],L=new Ap;L.layers.enable(1),L.layers.enable(2);let S=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(P){y=P},this.getController=function(P){let C=_[P];return C===void 0&&(C=new Es,_[P]=C),C.getTargetRaySpace()},this.getControllerGrip=function(P){let C=_[P];return C===void 0&&(C=new Es,_[P]=C),C.getGripSpace()},this.getHand=function(P){let C=_[P];return C===void 0&&(C=new Es,_[P]=C),C.getHandSpace()};function I(P){const C=x.indexOf(P.inputSource);if(C===-1)return;const A=_[C];A!==void 0&&(A.update(P.inputSource,P.frame,u||o),A.dispatchEvent({type:P.type,data:P.inputSource}))}function q(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",D);for(let P=0;P<_.length;P++){const C=x[P];C!==null&&(x[P]=null,_[P].disconnect(C))}S=null,E=null,t.setRenderTarget(m),f=null,d=null,c=null,s=null,p=null,z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",q),s.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const C={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,C),s.updateRenderState({baseLayer:f}),p=new ni(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let C=null,A=null,R=null;g.depth&&(R=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=g.stencil?Oi:Qn,A=g.stencil?$n:Bn);const k={colorFormat:e.RGBA8,depthFormat:R,scaleFactor:r};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(k),s.updateRenderState({layers:[d]}),p=new ni(d.textureWidth,d.textureHeight,{format:mn,type:Vn,depthTexture:new Cp(d.textureWidth,d.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const it=t.properties.get(p);it.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(P){for(let C=0;C<P.removed.length;C++){const A=P.removed[C],R=x.indexOf(A);R>=0&&(x[R]=null,_[R].disconnect(A))}for(let C=0;C<P.added.length;C++){const A=P.added[C];let R=x.indexOf(A);if(R===-1){for(let it=0;it<_.length;it++)if(it>=x.length){x.push(A),R=it;break}else if(x[it]===null){x[it]=A,R=it;break}if(R===-1)break}const k=_[R];k&&k.connect(A)}}const X=new et,H=new et;function ot(P,C,A){X.setFromMatrixPosition(C.matrixWorld),H.setFromMatrixPosition(A.matrixWorld);const R=X.distanceTo(H),k=C.projectionMatrix.elements,it=A.projectionMatrix.elements,st=k[14]/(k[10]-1),Z=k[14]/(k[10]+1),ht=(k[9]+1)/k[5],pt=(k[9]-1)/k[5],U=(k[8]-1)/k[0],lt=(it[8]+1)/it[0],Q=st*U,$=st*lt,J=R/(-U+lt),Rt=J*-U;C.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Rt),P.translateZ(J),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const xt=st+J,Ct=Z+J,Mt=Q-Rt,Wt=$+(R-Rt),Jt=ht*Z/Ct*xt,N=pt*Z/Ct*xt;P.projectionMatrix.makePerspective(Mt,Wt,Jt,N,xt,Ct),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function O(P,C){C===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(C.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCameraXR=function(P){if(s===null)return P;y&&(P=y),L.near=T.near=M.near=P.near,L.far=T.far=M.far=P.far,(S!==L.near||E!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),S=L.near,E=L.far);const C=P.parent,A=L.cameras;O(L,C);for(let R=0;R<A.length;R++)O(A[R],C);return A.length===2?ot(L,M,T):L.projectionMatrix.copy(M.projectionMatrix),y&&F(L,C),L};function F(P,C){const A=y;C===null?A.matrix.copy(P.matrixWorld):(A.matrix.copy(C.matrixWorld),A.matrix.invert(),A.matrix.multiply(P.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0);const R=A.children;for(let k=0,it=R.length;k<it;k++)R[k].updateMatrixWorld(!0);A.projectionMatrix.copy(P.projectionMatrix),A.projectionMatrixInverse.copy(P.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Ds*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)};let tt=null;function j(P,C){if(h=C.getViewerPose(u||o),v=C,h!==null){const A=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let R=!1;A.length!==L.cameras.length&&(L.cameras.length=0,R=!0);for(let k=0;k<A.length;k++){const it=A[k];let st=null;if(f!==null)st=f.getViewport(it);else{const ht=c.getViewSubImage(d,it);st=ht.viewport,k===0&&(t.setRenderTargetTextures(p,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(p))}let Z=B[k];Z===void 0&&(Z=new sn,Z.layers.enable(k),Z.viewport=new Ve,B[k]=Z),Z.matrix.fromArray(it.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(it.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(st.x,st.y,st.width,st.height),k===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),R===!0&&L.cameras.push(Z)}}for(let A=0;A<_.length;A++){const R=x[A],k=_[A];R!==null&&k!==void 0&&k.update(R,C,u||o)}tt&&tt(P,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const z=new cl;z.setAnimationLoop(j),this.setAnimationLoop=function(P){tt=P},this.dispose=function(){}}}function Lp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ol(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ip(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=s[_.id];y===void 0&&(v(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(_,M);const T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){const x=c();_.__bindingPointIndex=x;const y=i.createBuffer(),M=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=s[_.id],y=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,B=y.length;T<B;T++){const L=y[T];if(f(L,T,M)===!0){const S=L.__offset,E=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let q=0;q<E.length;q++){const D=E[q],X=g(D);typeof D=="number"?(L.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,S+I,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=D.elements[0],L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=D.elements[0],L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=D.elements[0]):(D.toArray(L.__data,I),I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,y){const M=_.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const T=Array.isArray(M)?M:[M],B=[];for(let L=0;L<T.length;L++)B.push(T[L].clone());y[x]=B}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const T=Array.isArray(y[x])?y[x]:[y[x]],B=Array.isArray(M)?M:[M];for(let L=0;L<T.length;L++){const S=T[L];if(S.equals(B[L])===!1)return S.copy(B[L]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const M=16;let T=0;for(let B=0,L=x.length;B<L;B++){const S=x[B],E={boundary:0,storage:0},I=Array.isArray(S.value)?S.value:[S.value];for(let q=0,D=I.length;q<D;q++){const X=I[q],H=g(X);E.boundary+=H.boundary,E.storage+=H.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,B>0){T=y%M;const q=M-T;T!==0&&q-E.boundary<0&&(y+=M-T,S.__offset=y)}y+=E.storage}return T=y%M,T>0&&(y+=M-T),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}function Np(){const i=tr("canvas");return i.style.display="block",i}class pl{constructor(t={}){const{canvas:e=Np(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=re,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let y=!1,M=0,T=0,B=null,L=-1,S=null;const E=new Ve,I=new Ve;let q=null;const D=new de(0);let X=0,H=e.width,ot=e.height,O=1,F=null,tt=null;const j=new Ve(0,0,H,ot),z=new Ve(0,0,H,ot);let P=!1;const C=new ll;let A=!1,R=!1,k=null;const it=new Ae,st=new Vt,Z=new et,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return B===null?O:1}let U=n;function lt(w,V){for(let Y=0;Y<w.length;Y++){const W=w[Y],nt=e.getContext(W,V);if(nt!==null)return nt}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ks}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",At,!1),U===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),U=lt(V,w),U===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,$,J,Rt,xt,Ct,Mt,Wt,Jt,N,b,at,_t,gt,G,yt,St,ft,kt,Xt,qt,Zt,Gt,Kt;function Qt(){Q=new Wd(U),$=new Fd(U,Q,t),Q.init($),Zt=new Tp(U,Q,$),J=new wp(U,Q,$),Rt=new qd(U),xt=new hp,Ct=new bp(U,Q,J,xt,$,Zt,Rt),Mt=new Od(x),Wt=new Hd(x),Jt=new ih(U,$),Gt=new Ud(U,Q,Jt,$),N=new kd(U,Jt,Rt,Gt),b=new Kd(U,N,Jt,Rt),kt=new jd(U,$,Ct),yt=new Bd(xt),at=new cp(x,Mt,Wt,Q,$,Gt,yt),_t=new Lp(x,xt),gt=new dp,G=new xp(Q,$),ft=new Nd(x,Mt,Wt,J,b,d,l),St=new Ep(x,b,$),Kt=new Ip(U,Rt,$,J),Xt=new Dd(U,Q,Rt,$),qt=new Xd(U,Q,Rt,$),Rt.programs=at.programs,x.capabilities=$,x.extensions=Q,x.properties=xt,x.renderLists=gt,x.shadowMap=St,x.state=J,x.info=Rt}Qt();const K=new Pp(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(H,ot,!1))},this.getSize=function(w){return w.set(H,ot)},this.setSize=function(w,V,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,ot=V,e.width=Math.floor(w*O),e.height=Math.floor(V*O),Y===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(H*O,ot*O).floor()},this.setDrawingBufferSize=function(w,V,Y){H=w,ot=V,O=Y,e.width=Math.floor(w*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,V,Y,W){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,V,Y,W),J.viewport(E.copy(j).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(z)},this.setScissor=function(w,V,Y,W){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,V,Y,W),J.scissor(I.copy(z).multiplyScalar(O).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(w){J.setScissorTest(P=w)},this.setOpaqueSort=function(w){F=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(w=!0,V=!0,Y=!0){let W=0;if(w){let nt=!1;if(B!==null){const rt=B.texture.format;nt=rt===ja||rt===Za||rt===Ya}if(nt){const rt=B.texture.type,bt=rt===Vn||rt===Bn||rt===Xs||rt===$n||rt===Xa||rt===qa,Nt=ft.getClearColor(),Yt=ft.getClearAlpha(),Ot=Nt.r,Ut=Nt.g,Lt=Nt.b,oe=xt.get(B).__webglFramebuffer;bt?(f[0]=Ot,f[1]=Ut,f[2]=Lt,f[3]=Yt,U.clearBufferuiv(U.COLOR,oe,f)):(v[0]=Ot,v[1]=Ut,v[2]=Lt,v[3]=Yt,U.clearBufferiv(U.COLOR,oe,v))}else W|=U.COLOR_BUFFER_BIT}V&&(W|=U.DEPTH_BUFFER_BIT),Y&&(W|=U.STENCIL_BUFFER_BIT),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",At,!1),gt.dispose(),G.dispose(),xt.dispose(),Mt.dispose(),Wt.dispose(),b.dispose(),Gt.dispose(),Kt.dispose(),at.dispose(),K.dispose(),K.removeEventListener("sessionstart",ee),K.removeEventListener("sessionend",mt),k&&(k.dispose(),k=null),dt.stop()};function Dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Rt.autoReset,V=St.enabled,Y=St.autoUpdate,W=St.needsUpdate,nt=St.type;Qt(),Rt.autoReset=w,St.enabled=V,St.autoUpdate=Y,St.needsUpdate=W,St.type=nt}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zt(w){const V=w.target;V.removeEventListener("dispose",zt),ie(V)}function ie(w){fe(w),xt.remove(w)}function fe(w){const V=xt.get(w).programs;V!==void 0&&(V.forEach(function(Y){at.releaseProgram(Y)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Y,W,nt,rt){V===null&&(V=ht);const bt=nt.isMesh&&nt.matrixWorld.determinant()<0,Nt=It(w,V,Y,W,nt);J.setMaterial(W,bt);let Yt=Y.index,Ot=1;W.wireframe===!0&&(Yt=N.getWireframeAttribute(Y),Ot=2);const Ut=Y.drawRange,Lt=Y.attributes.position;let oe=Ut.start*Ot,ue=(Ut.start+Ut.count)*Ot;rt!==null&&(oe=Math.max(oe,rt.start*Ot),ue=Math.min(ue,(rt.start+rt.count)*Ot)),Yt!==null?(oe=Math.max(oe,0),ue=Math.min(ue,Yt.count)):Lt!=null&&(oe=Math.max(oe,0),ue=Math.min(ue,Lt.count));const _e=ue-oe;if(_e<0||_e===1/0)return;Gt.setup(nt,W,Nt,Y,Yt);let Pe,he=Xt;if(Yt!==null&&(Pe=Jt.get(Yt),he=qt,he.setIndex(Pe)),nt.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*pt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(nt.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),J.setLineWidth(jt*pt()),nt.isLineSegments?he.setMode(U.LINES):nt.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else nt.isPoints?he.setMode(U.POINTS):nt.isSprite&&he.setMode(U.TRIANGLES);if(nt.isInstancedMesh)he.renderInstances(oe,_e,nt.count);else if(Y.isInstancedBufferGeometry){const jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,tn=Math.min(Y.instanceCount,jt);he.renderInstances(oe,_e,tn)}else he.render(oe,_e)},this.compile=function(w,V){function Y(W,nt,rt){W.transparent===!0&&W.side===Oe&&W.forceSinglePass===!1?(W.side=Je,W.needsUpdate=!0,Ft(W,nt,rt),W.side=Gn,W.needsUpdate=!0,Ft(W,nt,rt),W.side=Oe):Ft(W,nt,rt)}m=G.get(w),m.init(),_.push(m),w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x.useLegacyLights),w.traverse(function(W){const nt=W.material;if(nt)if(Array.isArray(nt))for(let rt=0;rt<nt.length;rt++){const bt=nt[rt];Y(bt,w,W)}else Y(nt,w,W)}),_.pop(),m=null};let pe=null;function Ge(w){pe&&pe(w)}function ee(){dt.stop()}function mt(){dt.start()}const dt=new cl;dt.setAnimationLoop(Ge),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(w){pe=w,K.setAnimationLoop(w),w===null?dt.stop():dt.start()},K.addEventListener("sessionstart",ee),K.addEventListener("sessionend",mt),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(V=K.updateCameraXR(V)),w.isScene===!0&&w.onBeforeRender(x,w,V,B),m=G.get(w,_.length),m.init(),_.push(m),it.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),C.setFromProjectionMatrix(it),R=this.localClippingEnabled,A=yt.init(this.clippingPlanes,R),g=gt.get(w,p.length),g.init(),p.push(g),Et(w,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(F,tt),A===!0&&yt.beginShadows();const Y=m.state.shadowsArray;if(St.render(Y,w,V),A===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ft.render(g,w),m.setupLights(x.useLegacyLights),V.isArrayCamera){const W=V.cameras;for(let nt=0,rt=W.length;nt<rt;nt++){const bt=W[nt];wt(g,w,bt,bt.viewport)}}else wt(g,w,V);B!==null&&(Ct.updateMultisampleRenderTarget(B),Ct.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(x,w,V),Gt.resetDefaultState(),L=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Et(w,V,Y,W){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||C.intersectsSprite(w)){W&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const bt=b.update(w),Nt=w.material;Nt.visible&&g.push(w,bt,Nt,Y,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||C.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Rt.render.frame&&(w.skeleton.update(),w.skeleton.frame=Rt.render.frame);const bt=b.update(w),Nt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Z.copy(bt.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(Nt)){const Yt=bt.groups;for(let Ot=0,Ut=Yt.length;Ot<Ut;Ot++){const Lt=Yt[Ot],oe=Nt[Lt.materialIndex];oe&&oe.visible&&g.push(w,bt,oe,Y,Z.z,Lt)}}else Nt.visible&&g.push(w,bt,Nt,Y,Z.z,null)}}const rt=w.children;for(let bt=0,Nt=rt.length;bt<Nt;bt++)Et(rt[bt],V,Y,W)}function wt(w,V,Y,W){const nt=w.opaque,rt=w.transmissive,bt=w.transparent;m.setupLightsView(Y),A===!0&&yt.setGlobalState(x.clippingPlanes,Y),rt.length>0&&$t(nt,rt,V,Y),W&&J.viewport(E.copy(W)),nt.length>0&&Bt(nt,V,Y),rt.length>0&&Bt(rt,V,Y),bt.length>0&&Bt(bt,V,Y),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function $t(w,V,Y,W){const nt=$.isWebGL2;k===null&&(k=new ni(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Qi:Vn,minFilter:$i,samples:nt&&a===!0?4:0})),x.getDrawingBufferSize(st),nt?k.setSize(st.x,st.y):k.setSize(Fs(st.x),Fs(st.y));const rt=x.getRenderTarget();x.setRenderTarget(k),x.getClearColor(D),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const bt=x.toneMapping;x.toneMapping=Pn,Bt(w,Y,W),Ct.updateMultisampleRenderTarget(k),Ct.updateRenderTargetMipmap(k);let Nt=!1;for(let Yt=0,Ot=V.length;Yt<Ot;Yt++){const Ut=V[Yt],Lt=Ut.object,oe=Ut.geometry,ue=Ut.material,_e=Ut.group;if(ue.side===Oe&&Lt.layers.test(W.layers)){const Pe=ue.side;ue.side=Je,ue.needsUpdate=!0,Pt(Lt,Y,W,oe,ue,_e),ue.side=Pe,ue.needsUpdate=!0,Nt=!0}}Nt===!0&&(Ct.updateMultisampleRenderTarget(k),Ct.updateRenderTargetMipmap(k)),x.setRenderTarget(rt),x.setClearColor(D,X),x.toneMapping=bt}function Bt(w,V,Y){const W=V.isScene===!0?V.overrideMaterial:null;for(let nt=0,rt=w.length;nt<rt;nt++){const bt=w[nt],Nt=bt.object,Yt=bt.geometry,Ot=W===null?bt.material:W,Ut=bt.group;Nt.layers.test(Y.layers)&&Pt(Nt,V,Y,Yt,Ot,Ut)}}function Pt(w,V,Y,W,nt,rt){w.onBeforeRender(x,V,Y,W,nt,rt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),nt.onBeforeRender(x,V,Y,W,w,rt),nt.transparent===!0&&nt.side===Oe&&nt.forceSinglePass===!1?(nt.side=Je,nt.needsUpdate=!0,x.renderBufferDirect(Y,V,W,nt,w,rt),nt.side=Gn,nt.needsUpdate=!0,x.renderBufferDirect(Y,V,W,nt,w,rt),nt.side=Oe):x.renderBufferDirect(Y,V,W,nt,w,rt),w.onAfterRender(x,V,Y,W,nt,rt)}function Ft(w,V,Y){V.isScene!==!0&&(V=ht);const W=xt.get(w),nt=m.state.lights,rt=m.state.shadowsArray,bt=nt.state.version,Nt=at.getParameters(w,nt.state,rt,V,Y),Yt=at.getProgramCacheKey(Nt);let Ot=W.programs;W.environment=w.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(w.isMeshStandardMaterial?Wt:Mt).get(w.envMap||W.environment),Ot===void 0&&(w.addEventListener("dispose",zt),Ot=new Map,W.programs=Ot);let Ut=Ot.get(Yt);if(Ut!==void 0){if(W.currentProgram===Ut&&W.lightsStateVersion===bt)return ct(w,Nt),Ut}else Nt.uniforms=at.getUniforms(w),w.onBuild(Y,Nt,x),w.onBeforeCompile(Nt,x),Ut=at.acquireProgram(Nt,Yt),Ot.set(Yt,Ut),W.uniforms=Nt.uniforms;const Lt=W.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=yt.uniform),ct(w,Nt),W.needsLights=Tt(w),W.lightsStateVersion=bt,W.needsLights&&(Lt.ambientLightColor.value=nt.state.ambient,Lt.lightProbe.value=nt.state.probe,Lt.directionalLights.value=nt.state.directional,Lt.directionalLightShadows.value=nt.state.directionalShadow,Lt.spotLights.value=nt.state.spot,Lt.spotLightShadows.value=nt.state.spotShadow,Lt.rectAreaLights.value=nt.state.rectArea,Lt.ltc_1.value=nt.state.rectAreaLTC1,Lt.ltc_2.value=nt.state.rectAreaLTC2,Lt.pointLights.value=nt.state.point,Lt.pointLightShadows.value=nt.state.pointShadow,Lt.hemisphereLights.value=nt.state.hemi,Lt.directionalShadowMap.value=nt.state.directionalShadowMap,Lt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Lt.spotShadowMap.value=nt.state.spotShadowMap,Lt.spotLightMatrix.value=nt.state.spotLightMatrix,Lt.spotLightMap.value=nt.state.spotLightMap,Lt.pointShadowMap.value=nt.state.pointShadowMap,Lt.pointShadowMatrix.value=nt.state.pointShadowMatrix);const oe=Ut.getUniforms(),ue=Br.seqWithValue(oe.seq,Lt);return W.currentProgram=Ut,W.uniformsList=ue,Ut}function ct(w,V){const Y=xt.get(w);Y.outputColorSpace=V.outputColorSpace,Y.instancing=V.instancing,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function It(w,V,Y,W,nt){V.isScene!==!0&&(V=ht),Ct.resetTextureUnits();const rt=V.fog,bt=W.isMeshStandardMaterial?V.environment:null,Nt=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vn,Yt=(W.isMeshStandardMaterial?Wt:Mt).get(W.envMap||bt),Ot=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ut=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,ue=!!Y.morphAttributes.color,_e=W.toneMapped?x.toneMapping:Pn,Pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=Pe!==void 0?Pe.length:0,jt=xt.get(W),tn=m.state.lights;if(A===!0&&(R===!0||w!==S)){const ye=w===S&&W.id===L;yt.setState(W,w,ye)}let ne=!1;W.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==tn.state.version||jt.outputColorSpace!==Nt||nt.isInstancedMesh&&jt.instancing===!1||!nt.isInstancedMesh&&jt.instancing===!0||nt.isSkinnedMesh&&jt.skinning===!1||!nt.isSkinnedMesh&&jt.skinning===!0||jt.envMap!==Yt||W.fog===!0&&jt.fog!==rt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==yt.numPlanes||jt.numIntersection!==yt.numIntersection)||jt.vertexAlphas!==Ot||jt.vertexTangents!==Ut||jt.morphTargets!==Lt||jt.morphNormals!==oe||jt.morphColors!==ue||jt.toneMapping!==_e||$.isWebGL2===!0&&jt.morphTargetsCount!==he)&&(ne=!0):(ne=!0,jt.__version=W.version);let De=jt.currentProgram;ne===!0&&(De=Ft(W,V,nt));let Fe=!1,we=!1,Re=!1;const ge=De.getUniforms(),Be=jt.uniforms;if(J.useProgram(De.program)&&(Fe=!0,we=!0,Re=!0),W.id!==L&&(L=W.id,we=!0),Fe||S!==w){if(ge.setValue(U,"projectionMatrix",w.projectionMatrix),$.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,we=!0,Re=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ye=ge.map.cameraPosition;ye!==void 0&&ye.setValue(U,Z.setFromMatrixPosition(w.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||nt.isSkinnedMesh)&&ge.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(nt.isSkinnedMesh){ge.setOptional(U,nt,"bindMatrix"),ge.setOptional(U,nt,"bindMatrixInverse");const ye=nt.skeleton;ye&&($.floatVertexTextures?(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(U,"boneTexture",ye.boneTexture,Ct),ge.setValue(U,"boneTextureSize",ye.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const te=Y.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0&&$.isWebGL2===!0)&&kt.update(nt,Y,De),(we||jt.receiveShadow!==nt.receiveShadow)&&(jt.receiveShadow=nt.receiveShadow,ge.setValue(U,"receiveShadow",nt.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Be.envMap.value=Yt,Be.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),we&&(ge.setValue(U,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&vt(Be,Re),rt&&W.fog===!0&&_t.refreshFogUniforms(Be,rt),_t.refreshMaterialUniforms(Be,W,O,ot,k),Br.upload(U,jt.uniformsList,Be,Ct)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Br.upload(U,jt.uniformsList,Be,Ct),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(U,"center",nt.center),ge.setValue(U,"modelViewMatrix",nt.modelViewMatrix),ge.setValue(U,"normalMatrix",nt.normalMatrix),ge.setValue(U,"modelMatrix",nt.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ye=W.uniformsGroups;for(let be=0,_n=ye.length;be<_n;be++)if($.isWebGL2){const gn=ye[be];Kt.update(gn,De),Kt.bind(gn,De)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return De}function vt(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Tt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,V,Y){xt.get(w.texture).__webglTexture=V,xt.get(w.depthTexture).__webglTexture=Y;const W=xt.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){const Y=xt.get(w);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Y=0){B=w,M=V,T=Y;let W=!0,nt=null,rt=!1,bt=!1;if(w){const Yt=xt.get(w);Yt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):Yt.__webglFramebuffer===void 0?Ct.setupRenderTarget(w):Yt.__hasExternalTextures&&Ct.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);const Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Ut=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(nt=Ut[V],rt=!0):$.isWebGL2&&w.samples>0&&Ct.useMultisampledRTT(w)===!1?nt=xt.get(w).__webglMultisampledFramebuffer:nt=Ut,E.copy(w.viewport),I.copy(w.scissor),q=w.scissorTest}else E.copy(j).multiplyScalar(O).floor(),I.copy(z).multiplyScalar(O).floor(),q=P;if(J.bindFramebuffer(U.FRAMEBUFFER,nt)&&$.drawBuffers&&W&&J.drawBuffers(w,nt),J.viewport(E),J.scissor(I),J.setScissorTest(q),rt){const Yt=xt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Yt.__webglTexture,Y)}else if(bt){const Yt=xt.get(w.texture),Ot=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,Y||0,Ot)}L=-1},this.readRenderTargetPixels=function(w,V,Y,W,nt,rt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){J.bindFramebuffer(U.FRAMEBUFFER,Nt);try{const Yt=w.texture,Ot=Yt.format,Ut=Yt.type;if(Ot!==mn&&Zt.convert(Ot)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Ut===Qi&&(Q.has("EXT_color_buffer_half_float")||$.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ut!==Vn&&Zt.convert(Ut)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===On&&($.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-W&&Y>=0&&Y<=w.height-nt&&U.readPixels(V,Y,W,nt,Zt.convert(Ot),Zt.convert(Ut),rt)}finally{const Yt=B!==null?xt.get(B).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,Yt)}}},this.copyFramebufferToTexture=function(w,V,Y=0){const W=Math.pow(2,-Y),nt=Math.floor(V.image.width*W),rt=Math.floor(V.image.height*W);Ct.setTexture2D(V,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,w.x,w.y,nt,rt),J.unbindTexture()},this.copyTextureToTexture=function(w,V,Y,W=0){const nt=V.image.width,rt=V.image.height,bt=Zt.convert(Y.format),Nt=Zt.convert(Y.type);Ct.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,w.x,w.y,nt,rt,bt,Nt,V.image.data):V.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,bt,V.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,W,w.x,w.y,bt,Nt,V.image),W===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,V,Y,W,nt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const rt=w.max.x-w.min.x+1,bt=w.max.y-w.min.y+1,Nt=w.max.z-w.min.z+1,Yt=Zt.convert(W.format),Ot=Zt.convert(W.type);let Ut;if(W.isData3DTexture)Ct.setTexture3D(W,0),Ut=U.TEXTURE_3D;else if(W.isDataArrayTexture)Ct.setTexture2DArray(W,0),Ut=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const Lt=U.getParameter(U.UNPACK_ROW_LENGTH),oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ue=U.getParameter(U.UNPACK_SKIP_PIXELS),_e=U.getParameter(U.UNPACK_SKIP_ROWS),Pe=U.getParameter(U.UNPACK_SKIP_IMAGES),he=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ut,nt,V.x,V.y,V.z,rt,bt,Nt,Yt,Ot,he.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ut,nt,V.x,V.y,V.z,rt,bt,Nt,Yt,he.data)):U.texSubImage3D(Ut,nt,V.x,V.y,V.z,rt,bt,Nt,Yt,Ot,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,_e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe),nt===0&&W.generateMipmaps&&U.generateMipmap(Ut),J.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ct.setTextureCube(w,0):w.isData3DTexture?Ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ct.setTexture2DArray(w,0):Ct.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){M=0,T=0,B=null,J.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===re?ti:Ka}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?re:vn}}class Up extends pl{}Up.prototype.isWebGL1Renderer=!0;class Wn extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ml extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new et,xa=new et,ya=new Ae,ws=new kr,Pr=new or;class Dp extends ke{constructor(t=new Qe,e=new ml){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;ya.copy(s).invert(),ws.copy(t.ray).applyMatrix4(ya);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new et,h=new et,c=new et,d=new et,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let x=p,y=_-1;x<y;x+=f){const M=v.getX(x),T=v.getX(x+1);if(u.fromBufferAttribute(m,M),h.fromBufferAttribute(m,T),ws.distanceSqToSegment(u,h,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||e.push({distance:L,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,y=_-1;x<y;x+=f){if(u.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ws.distanceSqToSegment(u,h,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _a=new et,Ma=new et;class Fp extends Dp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_a.fromBufferAttribute(e,s),Ma.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_a.distanceTo(Ma);t.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Os extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sa=new Ae,zs=new kr,Lr=new or,Ir=new et;class Ea extends ke{constructor(t=new Qe,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Sa.copy(s).invert(),zs.copy(t.ray).applyMatrix4(Sa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,c=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let v=d,g=f;v<g;v++){const m=u.getX(v);Ir.fromBufferAttribute(c,m),wa(Ir,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,g=f;v<g;v++)Ir.fromBufferAttribute(c,v),wa(Ir,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wa(i,t,e,n,s,r,o){const a=zs.distanceSqToPoint(i);if(a<e){const l=new et;zs.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Vt:new et);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new et,s=[],r=[],o=[],a=new et,l=new Ae;for(let f=0;f<=t;f++){const v=f/t;s[f]=this.getTangentAt(v,new et)}r[0]=new et,o[0]=new et;let u=Number.MAX_VALUE;const h=Math.abs(s[0].x),c=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),c<=u&&(u=c,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class js extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new Vt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=u-this.aY;l=d*h-f*c+this.aX,u=d*c+f*h+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bp extends js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ks(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,h,c){let d=(o-r)/u-(a-r)/(u+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+c)+(l-a)/c;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Nr=new et,bs=new Ks,Ts=new Ks,As=new Ks;class Op extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new et){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=s[(a-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),u=Nr);const c=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(c),f),g=Math.pow(c.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),bs.initNonuniformCatmullRom(u.x,c.x,d.x,h.x,v,g,m),Ts.initNonuniformCatmullRom(u.y,c.y,d.y,h.y,v,g,m),As.initNonuniformCatmullRom(u.z,c.z,d.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(bs.initCatmullRom(u.x,c.x,d.x,h.x,this.tension),Ts.initCatmullRom(u.y,c.y,d.y,h.y,this.tension),As.initCatmullRom(u.z,c.z,d.z,h.z,this.tension));return n.set(bs.calc(l),Ts.calc(l),As.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ba(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function zp(i,t){const e=1-i;return e*e*t}function Vp(i,t){return 2*(1-i)*i*t}function Gp(i,t){return i*i*t}function Ki(i,t,e,n){return zp(i,t)+Vp(i,e)+Gp(i,n)}function Hp(i,t){const e=1-i;return e*e*e*t}function Wp(i,t){const e=1-i;return 3*e*e*i*t}function kp(i,t){return 3*(1-i)*i*i*t}function Xp(i,t){return i*i*i*t}function Ji(i,t,e,n,s){return Hp(i,t)+Wp(i,e)+kp(i,n)+Xp(i,s)}class vl extends yn{constructor(t=new Vt,e=new Vt,n=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends yn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y),Ji(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Js extends yn{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends yn{constructor(t=new et,e=new et){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends yn{constructor(t=new Vt,e=new Vt,n=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends yn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y),Ki(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xl extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],c=s[o>s.length-3?s.length-1:o+2];return n.set(ba(a,l.x,u.x,h.x,c.x),ba(a,l.y,u.y,h.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:Bp,CatmullRomCurve3:Op,CubicBezierCurve:vl,CubicBezierCurve3:qp,EllipseCurve:js,LineCurve:Js,LineCurve3:Yp,QuadraticBezierCurve:gl,QuadraticBezierCurve3:Zp,SplineCurve:xl});class jp extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Js(e,t))}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}}class Vs extends jp{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Js(this.currentPoint.clone(),new Vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gl(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new vl(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s),new Vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const u=new js(t,e,n,s,r,o,a,l);if(this.curves.length>0){const c=u.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Or extends Vs{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}}const Kp={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=_l(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u,h,c,d,f;if(n&&(r=em(i,t,r,e)),i.length>80*e){a=u=i[0],l=h=i[1];for(let v=e;v<s;v+=e)c=i[v],d=i[v+1],c<a&&(a=c),d<l&&(l=d),c>u&&(u=c),d>h&&(h=d);f=Math.max(u-a,h-l),f=f!==0?32767/f:0}return er(r,o,e,a,l,f,0),o}};function _l(i,t,e,n,s){let r,o;if(s===dm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ta(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ta(r,i[r],i[r+1],o);return o&&Yr(o,o.next)&&(ir(o),o=o.next),o}function oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||Ee(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&om(i,n,s,r);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,r?$p(i,n,s,r):Jp(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),ir(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Qp(oi(i),t,e),er(i,t,e,n,s,r,2)):o===2&&tm(i,t,e,n,s,r):er(oi(i),t,e,n,s,r,1);break}}}function Jp(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,u=n.y,h=s<r?s<o?s:o:r<o?r:o,c=a<l?a<u?a:u:l<u?l:u,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>u?a:u:l>u?l:u;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=c&&v.y<=f&&Li(s,a,r,l,o,u,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function $p(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,u=o.x,h=s.y,c=r.y,d=o.y,f=a<l?a<u?a:u:l<u?l:u,v=h<c?h<d?h:d:c<d?c:d,g=a>l?a>u?a:u:l>u?l:u,m=h>c?h>d?h:d:c>d?c:d,p=Gs(f,v,t,e,n),_=Gs(g,m,t,e,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=_;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=m&&x!==s&&x!==o&&Li(a,h,l,c,u,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==o&&Li(a,h,l,c,u,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=v&&x.y<=m&&x!==s&&x!==o&&Li(a,h,l,c,u,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==o&&Li(a,h,l,c,u,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qp(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Yr(s,r)&&Ml(s,n,n.next,r)&&nr(s,r)&&nr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ir(n),ir(n.next),n=i=r),n=n.next}while(n!==i);return oi(n)}function tm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let l=Sl(o,a);o=oi(o,o.next),l=oi(l,l.next),er(o,t,e,n,s,r,0),er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function em(i,t,e,n){const s=[];let r,o,a,l,u;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,u=_l(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(lm(u));for(s.sort(nm),r=0;r<s.length;r++)e=im(s[r],e);return e}function nm(i,t){return i.x-t.x}function im(i,t){const e=rm(i,t);if(!e)return t;const n=Sl(e,i);return oi(n,n.next),oi(e,e.next)}function rm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,u=s.y;let h=1/0,c;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Li(o<u?r:n,o,l,u,o<u?n:r,o,e.x,e.y)&&(c=Math.abs(o-e.y)/(r-e.x),nr(e,i)&&(c<h||c===h&&(e.x>s.x||e.x===s.x&&sm(s,e)))&&(s=e,h=c)),e=e.next;while(e!==a);return s}function sm(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function om(i,t,e,n){let s=i;do s.z===0&&(s.z=Gs(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,am(s)}function am(i){let t,e,n,s,r,o,a,l,u=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<u&&(a++,n=n.nextZ,!!n);t++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,u*=2}while(o>1);return i}function Gs(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Li(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function cm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hm(i,t)&&(nr(i,t)&&nr(t,i)&&um(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Yr(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function Ml(i,t,e,n){const s=Dr(Ee(i,t,e)),r=Dr(Ee(i,t,n)),o=Dr(Ee(e,n,i)),a=Dr(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Ur(i,e,t)||r===0&&Ur(i,n,t)||o===0&&Ur(e,i,n)||a===0&&Ur(e,t,n))}function Ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Dr(i){return i>0?1:i<0?-1:0}function hm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ml(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function um(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sl(i,t){const e=new Hs(i.i,i.x,i.y),n=new Hs(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ta(i,t,e,n){const s=new Hs(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hs(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Di{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Di.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Aa(t),Ra(n,t);let o=t.length;e.forEach(Aa);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ra(n,e[l]);const a=Kp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Aa(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ra(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $s extends Qe{constructor(t=new Or([new Vt(.5,.5),new Vt(-.5,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];o(u)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function o(a){const l=[],u=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:fm;let x,y=!1,M,T,B,L;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,M=p.computeFrenetFrames(h,!1),T=new et,B=new et,L=new et),d||(m=0,f=0,v=0,g=0);const S=a.extractPoints(u);let E=S.shape;const I=S.holes;if(!Di.isClockWise(E)){E=E.reverse();for(let U=0,lt=I.length;U<lt;U++){const Q=I[U];Di.isClockWise(Q)&&(I[U]=Q.reverse())}}const D=Di.triangulateShape(E,I),X=E;for(let U=0,lt=I.length;U<lt;U++){const Q=I[U];E=E.concat(Q)}function H(U,lt,Q){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(lt,Q)}const ot=E.length,O=D.length;function F(U,lt,Q){let $,J,Rt;const xt=U.x-lt.x,Ct=U.y-lt.y,Mt=Q.x-U.x,Wt=Q.y-U.y,Jt=xt*xt+Ct*Ct,N=xt*Wt-Ct*Mt;if(Math.abs(N)>Number.EPSILON){const b=Math.sqrt(Jt),at=Math.sqrt(Mt*Mt+Wt*Wt),_t=lt.x-Ct/b,gt=lt.y+xt/b,G=Q.x-Wt/at,yt=Q.y+Mt/at,St=((G-_t)*Wt-(yt-gt)*Mt)/(xt*Wt-Ct*Mt);$=_t+xt*St-U.x,J=gt+Ct*St-U.y;const ft=$*$+J*J;if(ft<=2)return new Vt($,J);Rt=Math.sqrt(ft/2)}else{let b=!1;xt>Number.EPSILON?Mt>Number.EPSILON&&(b=!0):xt<-Number.EPSILON?Mt<-Number.EPSILON&&(b=!0):Math.sign(Ct)===Math.sign(Wt)&&(b=!0),b?($=-Ct,J=xt,Rt=Math.sqrt(Jt)):($=xt,J=Ct,Rt=Math.sqrt(Jt/2))}return new Vt($/Rt,J/Rt)}const tt=[];for(let U=0,lt=X.length,Q=lt-1,$=U+1;U<lt;U++,Q++,$++)Q===lt&&(Q=0),$===lt&&($=0),tt[U]=F(X[U],X[Q],X[$]);const j=[];let z,P=tt.concat();for(let U=0,lt=I.length;U<lt;U++){const Q=I[U];z=[];for(let $=0,J=Q.length,Rt=J-1,xt=$+1;$<J;$++,Rt++,xt++)Rt===J&&(Rt=0),xt===J&&(xt=0),z[$]=F(Q[$],Q[Rt],Q[xt]);j.push(z),P=P.concat(z)}for(let U=0;U<m;U++){const lt=U/m,Q=f*Math.cos(lt*Math.PI/2),$=v*Math.sin(lt*Math.PI/2)+g;for(let J=0,Rt=X.length;J<Rt;J++){const xt=H(X[J],tt[J],$);it(xt.x,xt.y,-Q)}for(let J=0,Rt=I.length;J<Rt;J++){const xt=I[J];z=j[J];for(let Ct=0,Mt=xt.length;Ct<Mt;Ct++){const Wt=H(xt[Ct],z[Ct],$);it(Wt.x,Wt.y,-Q)}}}const C=v+g;for(let U=0;U<ot;U++){const lt=d?H(E[U],P[U],C):E[U];y?(B.copy(M.normals[0]).multiplyScalar(lt.x),T.copy(M.binormals[0]).multiplyScalar(lt.y),L.copy(x[0]).add(B).add(T),it(L.x,L.y,L.z)):it(lt.x,lt.y,0)}for(let U=1;U<=h;U++)for(let lt=0;lt<ot;lt++){const Q=d?H(E[lt],P[lt],C):E[lt];y?(B.copy(M.normals[U]).multiplyScalar(Q.x),T.copy(M.binormals[U]).multiplyScalar(Q.y),L.copy(x[U]).add(B).add(T),it(L.x,L.y,L.z)):it(Q.x,Q.y,c/h*U)}for(let U=m-1;U>=0;U--){const lt=U/m,Q=f*Math.cos(lt*Math.PI/2),$=v*Math.sin(lt*Math.PI/2)+g;for(let J=0,Rt=X.length;J<Rt;J++){const xt=H(X[J],tt[J],$);it(xt.x,xt.y,c+Q)}for(let J=0,Rt=I.length;J<Rt;J++){const xt=I[J];z=j[J];for(let Ct=0,Mt=xt.length;Ct<Mt;Ct++){const Wt=H(xt[Ct],z[Ct],$);y?it(Wt.x,Wt.y+x[h-1].y,x[h-1].x+Q):it(Wt.x,Wt.y,c+Q)}}}A(),R();function A(){const U=s.length/3;if(d){let lt=0,Q=ot*lt;for(let $=0;$<O;$++){const J=D[$];st(J[2]+Q,J[1]+Q,J[0]+Q)}lt=h+m*2,Q=ot*lt;for(let $=0;$<O;$++){const J=D[$];st(J[0]+Q,J[1]+Q,J[2]+Q)}}else{for(let lt=0;lt<O;lt++){const Q=D[lt];st(Q[2],Q[1],Q[0])}for(let lt=0;lt<O;lt++){const Q=D[lt];st(Q[0]+ot*h,Q[1]+ot*h,Q[2]+ot*h)}}n.addGroup(U,s.length/3-U,0)}function R(){const U=s.length/3;let lt=0;k(X,lt),lt+=X.length;for(let Q=0,$=I.length;Q<$;Q++){const J=I[Q];k(J,lt),lt+=J.length}n.addGroup(U,s.length/3-U,1)}function k(U,lt){let Q=U.length;for(;--Q>=0;){const $=Q;let J=Q-1;J<0&&(J=U.length-1);for(let Rt=0,xt=h+m*2;Rt<xt;Rt++){const Ct=ot*Rt,Mt=ot*(Rt+1),Wt=lt+$+Ct,Jt=lt+J+Ct,N=lt+J+Mt,b=lt+$+Mt;Z(Wt,Jt,N,b)}}}function it(U,lt,Q){l.push(U),l.push(lt),l.push(Q)}function st(U,lt,Q){ht(U),ht(lt),ht(Q);const $=s.length/3,J=_.generateTopUV(n,s,$-3,$-2,$-1);pt(J[0]),pt(J[1]),pt(J[2])}function Z(U,lt,Q,$){ht(U),ht(lt),ht($),ht(lt),ht(Q),ht($);const J=s.length/3,Rt=_.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);pt(Rt[0]),pt(Rt[1]),pt(Rt[3]),pt(Rt[1]),pt(Rt[2]),pt(Rt[3])}function ht(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function pt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yl[s.type]().fromJSON(s)),new $s(n,t.options)}}const fm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],u=t[s*3],h=t[s*3+1];return[new Vt(r,o),new Vt(a,l),new Vt(u,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],u=t[n*3],h=t[n*3+1],c=t[n*3+2],d=t[s*3],f=t[s*3+1],v=t[s*3+2],g=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new Vt(o,1-l),new Vt(u,1-c),new Vt(d,1-v),new Vt(g,1-p)]:[new Vt(a,1-l),new Vt(h,1-c),new Vt(f,1-v),new Vt(m,1-p)]}};function pm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vr extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],c=new et,d=new et,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const T=M/e;c.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),c.y=t*Math.cos(o+x*a),c.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(T+y,1-x),_.push(u++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=h[p][_+1],y=h[p][_],M=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&f.push(x,y,T),(p!==n-1||l<Math.PI)&&f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mm extends li{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Gr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,c){return u.push(h,c),this},this.removeHandler=function(h){const c=u.indexOf(h);return c!==-1&&u.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=u.length;c<d;c+=2){const f=u[c],v=u[c+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const gm=new vm;class ar{constructor(t){this.manager=t!==void 0?t:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const An={};class xm extends Error{constructor(t,e){super(t),this.response=e}}class ym extends ar{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Gr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:n,onError:s});return}An[t]=[],An[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=An[t],c=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:x,value:y})=>{if(x)p.close();else{g+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let T=0,B=h.length;T<B;T++){const L=h[T];L.onProgress&&L.onProgress(M)}p.enqueue(y),_()}})}}});return new Response(m)}else throw new xm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{Gr.add(t,u);const h=An[t];delete An[t];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=An[t];if(h===void 0)throw this.manager.itemError(t),u;delete An[t];for(let c=0,d=h.length;c<d;c++){const f=h[c];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class El extends ar{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Gr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=tr("img");function l(){h(),Gr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(c){h(),s&&s(c),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class _m extends ar{constructor(t){super(t)}load(t,e,n,s){const r=new Ys;r.colorSpace=re;const o=new El(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(u){o.load(t[u],function(h){r.images[u]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let u=0;u<t.length;++u)l(u);return r}}class Ca extends ar{constructor(t){super(t)}load(t,e,n,s){const r=new $e,o=new El(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pa(){return(typeof performance>"u"?Date:performance).now()}class Sm{constructor(t,e,n=0,s=1/0){this.ray=new kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ws(t,this,n,e),n.sort(La),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ws(t[s],this,n,e);return n.sort(La),n}}function La(i,t){return i.distance-t.distance}function Ws(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Ws(s[r],t,e,!0)}}class Ia{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Em extends Fp{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Qe;s.setAttribute("position",new Xe(e,3)),s.setAttribute("color",new Xe(n,3));const r=new ml({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new de,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wm{constructor(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Vs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const _=[];for(let x=0,y=p.length;x<y;x++){const M=p[x],T=new Or;T.curves=M.curves,_.push(T)}return _}function n(p,_){const x=_.length;let y=!1;for(let M=x-1,T=0;T<x;M=T++){let B=_[M],L=_[T],S=L.x-B.x,E=L.y-B.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(B=_[T],S=-S,L=_[M],E=-E),p.y<B.y||p.y>L.y)continue;if(p.y===B.y){if(p.x===B.x)return!0}else{const I=E*(p.x-B.x)-S*(p.y-B.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(p.y!==B.y)continue;if(L.x<=p.x&&p.x<=B.x||B.x<=p.x&&p.x<=L.x)return!0}}return y}const s=Di.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const u=[];if(r.length===1)return a=r[0],l=new Or,l.curves=a.curves,u.push(l),u;let h=!s(r[0].getPoints());h=t?!h:h;const c=[],d=[];let f=[],v=0,g;d[v]=void 0,f[v]=[];for(let p=0,_=r.length;p<_;p++)a=r[p],g=a.getPoints(),o=s(g),o=t?!o:o,o?(!h&&d[v]&&v++,d[v]={s:new Or,p:g},d[v].s.curves=a.curves,h&&v++,f[v]=[]):f[v].push({h:a,p:g[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,_=0;for(let x=0,y=d.length;x<y;x++)c[x]=[];for(let x=0,y=d.length;x<y;x++){const M=f[x];for(let T=0;T<M.length;T++){const B=M[T];let L=!0;for(let S=0;S<d.length;S++)n(B.p,d[S].p)&&(x!==S&&_++,L?(L=!1,c[S].push(B)):p=!0);L&&c[x].push(B)}}_>0&&p===!1&&(f=c)}let m;for(let p=0,_=d.length;p<_;p++){l=d[p].s,u.push(l),m=f[p];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ks);const Na={type:"change"},Rs={type:"start"},Ua={type:"end"};class wl extends ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Mt),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Na),n.update(),r=s.NONE},this.update=function(){const G=new et,yt=new ii().setFromUnitVectors(t.up,new et(0,1,0)),St=yt.clone().invert(),ft=new et,kt=new ii,Xt=new et,qt=2*Math.PI;return function(){const Gt=n.object.position;G.copy(Gt).sub(n.target),G.applyQuaternion(yt),a.setFromVector3(G),n.autoRotate&&r===s.NONE&&S(B()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Kt=n.minAzimuthAngle,Qt=n.maxAzimuthAngle;return isFinite(Kt)&&isFinite(Qt)&&(Kt<-Math.PI?Kt+=qt:Kt>Math.PI&&(Kt-=qt),Qt<-Math.PI?Qt+=qt:Qt>Math.PI&&(Qt-=qt),Kt<=Qt?a.theta=Math.max(Kt,Math.min(Qt,a.theta)):a.theta=a.theta>(Kt+Qt)/2?Math.max(Kt,a.theta):Math.min(Qt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),G.setFromSpherical(a),G.applyQuaternion(St),Gt.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),u=1,c||ft.distanceToSquared(n.object.position)>o||8*(1-kt.dot(n.object.quaternion))>o||Xt.distanceToSquared(n.target)>0?(n.dispatchEvent(Na),ft.copy(n.object.position),kt.copy(n.object.quaternion),Xt.copy(n.target),c=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",Q),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",Ct),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Mt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ia,l=new Ia;let u=1;const h=new et;let c=!1;const d=new Vt,f=new Vt,v=new Vt,g=new Vt,m=new Vt,p=new Vt,_=new Vt,x=new Vt,y=new Vt,M=[],T={};function B(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function S(G){l.theta-=G}function E(G){l.phi-=G}const I=function(){const G=new et;return function(St,ft){G.setFromMatrixColumn(ft,0),G.multiplyScalar(-St),h.add(G)}}(),q=function(){const G=new et;return function(St,ft){n.screenSpacePanning===!0?G.setFromMatrixColumn(ft,1):(G.setFromMatrixColumn(ft,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(St),h.add(G)}}(),D=function(){const G=new et;return function(St,ft){const kt=n.domElement;if(n.object.isPerspectiveCamera){const Xt=n.object.position;G.copy(Xt).sub(n.target);let qt=G.length();qt*=Math.tan(n.object.fov/2*Math.PI/180),I(2*St*qt/kt.clientHeight,n.object.matrix),q(2*ft*qt/kt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(St*(n.object.right-n.object.left)/n.object.zoom/kt.clientWidth,n.object.matrix),q(ft*(n.object.top-n.object.bottom)/n.object.zoom/kt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(G){n.object.isPerspectiveCamera?u/=G:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*G)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(G){n.object.isPerspectiveCamera?u*=G:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/G)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ot(G){d.set(G.clientX,G.clientY)}function O(G){_.set(G.clientX,G.clientY)}function F(G){g.set(G.clientX,G.clientY)}function tt(G){f.set(G.clientX,G.clientY),v.subVectors(f,d).multiplyScalar(n.rotateSpeed);const yt=n.domElement;S(2*Math.PI*v.x/yt.clientHeight),E(2*Math.PI*v.y/yt.clientHeight),d.copy(f),n.update()}function j(G){x.set(G.clientX,G.clientY),y.subVectors(x,_),y.y>0?X(L()):y.y<0&&H(L()),_.copy(x),n.update()}function z(G){m.set(G.clientX,G.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(m),n.update()}function P(G){G.deltaY<0?H(L()):G.deltaY>0&&X(L()),n.update()}function C(G){let yt=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),yt=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),yt=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),yt=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),yt=!0;break}yt&&(G.preventDefault(),n.update())}function A(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const G=.5*(M[0].pageX+M[1].pageX),yt=.5*(M[0].pageY+M[1].pageY);d.set(G,yt)}}function R(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const G=.5*(M[0].pageX+M[1].pageX),yt=.5*(M[0].pageY+M[1].pageY);g.set(G,yt)}}function k(){const G=M[0].pageX-M[1].pageX,yt=M[0].pageY-M[1].pageY,St=Math.sqrt(G*G+yt*yt);_.set(0,St)}function it(){n.enableZoom&&k(),n.enablePan&&R()}function st(){n.enableZoom&&k(),n.enableRotate&&A()}function Z(G){if(M.length==1)f.set(G.pageX,G.pageY);else{const St=gt(G),ft=.5*(G.pageX+St.x),kt=.5*(G.pageY+St.y);f.set(ft,kt)}v.subVectors(f,d).multiplyScalar(n.rotateSpeed);const yt=n.domElement;S(2*Math.PI*v.x/yt.clientHeight),E(2*Math.PI*v.y/yt.clientHeight),d.copy(f)}function ht(G){if(M.length===1)m.set(G.pageX,G.pageY);else{const yt=gt(G),St=.5*(G.pageX+yt.x),ft=.5*(G.pageY+yt.y);m.set(St,ft)}p.subVectors(m,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(m)}function pt(G){const yt=gt(G),St=G.pageX-yt.x,ft=G.pageY-yt.y,kt=Math.sqrt(St*St+ft*ft);x.set(0,kt),y.set(0,Math.pow(x.y/_.y,n.zoomSpeed)),X(y.y),_.copy(x)}function U(G){n.enableZoom&&pt(G),n.enablePan&&ht(G)}function lt(G){n.enableZoom&&pt(G),n.enableRotate&&Z(G)}function Q(G){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",$),n.domElement.addEventListener("pointerup",J)),b(G),G.pointerType==="touch"?Wt(G):Rt(G))}function $(G){n.enabled!==!1&&(G.pointerType==="touch"?Jt(G):xt(G))}function J(G){at(G),M.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(Ua),r=s.NONE}function Rt(G){let yt;switch(G.button){case 0:yt=n.mouseButtons.LEFT;break;case 1:yt=n.mouseButtons.MIDDLE;break;case 2:yt=n.mouseButtons.RIGHT;break;default:yt=-1}switch(yt){case ci.DOLLY:if(n.enableZoom===!1)return;O(G),r=s.DOLLY;break;case ci.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;F(G),r=s.PAN}else{if(n.enableRotate===!1)return;ot(G),r=s.ROTATE}break;case ci.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;ot(G),r=s.ROTATE}else{if(n.enablePan===!1)return;F(G),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Rs)}function xt(G){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;tt(G);break;case s.DOLLY:if(n.enableZoom===!1)return;j(G);break;case s.PAN:if(n.enablePan===!1)return;z(G);break}}function Ct(G){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(G.preventDefault(),n.dispatchEvent(Rs),P(G),n.dispatchEvent(Ua))}function Mt(G){n.enabled===!1||n.enablePan===!1||C(G)}function Wt(G){switch(_t(G),M.length){case 1:switch(n.touches.ONE){case hi.ROTATE:if(n.enableRotate===!1)return;A(),r=s.TOUCH_ROTATE;break;case hi.PAN:if(n.enablePan===!1)return;R(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(),r=s.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;st(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Rs)}function Jt(G){switch(_t(G),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Z(G),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ht(G),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(G),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;lt(G),n.update();break;default:r=s.NONE}}function N(G){n.enabled!==!1&&G.preventDefault()}function b(G){M.push(G)}function at(G){delete T[G.pointerId];for(let yt=0;yt<M.length;yt++)if(M[yt].pointerId==G.pointerId){M.splice(yt,1);return}}function _t(G){let yt=T[G.pointerId];yt===void 0&&(yt=new Vt,T[G.pointerId]=yt),yt.set(G.pageX,G.pageY)}function gt(G){const yt=G.pointerId===M[0].pointerId?M[1]:M[0];return T[yt.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",Q),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",Ct,{passive:!1}),this.update()}}class bl extends ar{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new ym(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,s)}parse(t){return new bm(t)}}class bm{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=Tm(t,e,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function Tm(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let u=0;u<n.length;u++){const h=n[u];if(h===`
`)a=0,l-=r;else{const c=Am(h,s,a,l,e);a+=c.offsetX,o.push(c.path)}}return o}function Am(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new wm;let a,l,u,h,c,d,f,v;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*t+e,l=g[m++]*t+n,o.moveTo(a,l);break;case"l":a=g[m++]*t+e,l=g[m++]*t+n,o.lineTo(a,l);break;case"q":u=g[m++]*t+e,h=g[m++]*t+n,c=g[m++]*t+e,d=g[m++]*t+n,o.quadraticCurveTo(c,d,u,h);break;case"b":u=g[m++]*t+e,h=g[m++]*t+n,c=g[m++]*t+e,d=g[m++]*t+n,f=g[m++]*t+e,v=g[m++]*t+n,o.bezierCurveTo(c,d,f,v,u,h);break}}return{offsetX:r.ha*t,path:o}}class Ue extends $s{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}class Rm extends ke{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Vt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Ai=new et,Da=new Ae,Fa=new Ae,Ba=new et,Oa=new et;class Cm{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(f,v){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Da.copy(v.matrixWorldInverse),Fa.multiplyMatrices(v.projectionMatrix,Da),u(f,f,v),d(f)},this.setSize=function(f,v){n=f,s=v,r=n/2,o=s/2,l.style.width=f+"px",l.style.height=v+"px"};function u(f,v,g){if(f.isCSS2DObject){Ai.setFromMatrixPosition(f.matrixWorld),Ai.applyMatrix4(Fa);const m=f.visible===!0&&Ai.z>=-1&&Ai.z<=1&&f.layers.test(g.layers)===!0;if(f.element.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(e,v,g);const _=f.element;_.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(Ai.x*r+r)+"px,"+(-Ai.y*o+o)+"px)",_.parentNode!==l&&l.appendChild(_),f.onAfterRender(e,v,g)}const p={distanceToCameraSquared:h(g,f)};a.objects.set(f,p)}for(let m=0,p=f.children.length;m<p;m++)u(f.children[m],v,g)}function h(f,v){return Ba.setFromMatrixPosition(f.matrixWorld),Oa.setFromMatrixPosition(v.matrixWorld),Ba.distanceToSquared(Oa)}function c(f){const v=[];return f.traverse(function(g){g.isCSS2DObject&&v.push(g)}),v}function d(f){const v=c(f).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;const _=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(p).distanceToCameraSquared;return _-x}),g=v.length;for(let m=0,p=v.length;m<p;m++)v[m].element.style.zIndex=g-m}}}function Fr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Pm={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function o(u,h){if(!s[u]){if(!n[u]){var c=typeof Fr=="function"&&Fr;if(!h&&c)return c(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return o(v||f)},d,d.exports,e,n,s,r)}return s[u].exports}for(var a=typeof Fr=="function"&&Fr,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=o;function o(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var a=new r;o.prototype.setFromPoints=function(u,h,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,a),p=a),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},o.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var c=u.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var c=u.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var c=u.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},o.prototype.overlaps=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=c.x&&c.x<=f.x||h.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||h.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||h.z<=f.z&&f.z<=c.z)},o.prototype.contains=function(u){var h=this.lowerBound,c=this.upperBound,d=u.lowerBound,f=u.upperBound;return h.x<=d.x&&c.x>=f.x&&h.y<=d.y&&c.y>=f.y&&h.z<=d.z&&c.z>=f.z},o.prototype.getCorners=function(u,h,c,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;u.copy(p),h.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];o.prototype.toLocalFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var M=c[y];u.pointToLocal(M,M)}return h.setFromPoints(c)},o.prototype.toWorldFrame=function(u,h){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var M=c[y];u.pointToWorld(M,M)}return h.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(o,a){if(o=o.index,a=a.index,a>o){var l=a;a=o,o=l}return this.matrix[(o*(o+1)>>1)+a-1]},r.prototype.set=function(o,a,l){if(o=o.index,a=a.index,a>o){var u=a;a=o,o=u}this.matrix[(o*(o+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var o=0,a=this.matrix.length;o!==a;o++)this.matrix[o]=0},r.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),o=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var h=new o;new o,new a,new o,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var x=h;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),M=x.norm2();M<y&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=d,x=f,y=g.length,M=0;M!==y;M++)_[M]=g[M],x[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==y;M++){var T=_[M].id,B=x[M].id,L=T<B?T+","+B:B+","+T;p[L]=M,p.keys.push(L)}for(var M=0;M!==p.keys.length;M++){var L=p.keys.pop(),S=p[L];g.push(_[S]),m.push(x[S]),delete p[L]}},l.prototype.setWorld=function(g){};var v=new o;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=l;var r=e("./Broadphase"),o=e("../math/Vec3"),a=e("../shapes/Shape");function l(h,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=h||new o(100,100,100),this.aabbMax=c||new o(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var u=new o;new o,l.prototype.collisionPairs=function(h,c,d){var f=h.numObjects(),v=h.bodies,it=this.aabbMax,k=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,x=p,y=1,M=it.x,T=it.y,B=it.z,L=k.x,S=k.y,E=k.z,I=g/(M-L),q=m/(T-S),D=p/(B-E),X=(M-L)/g,H=(T-S)/m,ot=(B-E)/p,O=Math.sqrt(X*X+H*H+ot*ot)*.5,F=a.types,tt=F.SPHERE,j=F.PLANE;F.BOX,F.COMPOUND,F.CONVEXPOLYHEDRON;for(var z=this.bins,P=this.binLengths,C=this.bins.length,A=0;A!==C;A++)P[A]=0;var R=Math.ceil,k=Math.min,it=Math.max;function st(St,ft,kt,Xt,qt,Zt,Gt){var Kt=(St-L)*I|0,Qt=(ft-S)*q|0,K=(kt-E)*D|0,Dt=R((Xt-L)*I),ut=R((qt-S)*q),At=R((Zt-E)*D);Kt<0?Kt=0:Kt>=g&&(Kt=g-1),Qt<0?Qt=0:Qt>=m&&(Qt=m-1),K<0?K=0:K>=p&&(K=p-1),Dt<0?Dt=0:Dt>=g&&(Dt=g-1),ut<0?ut=0:ut>=m&&(ut=m-1),At<0?At=0:At>=p&&(At=p-1),Kt*=_,Qt*=x,K*=y,Dt*=_,ut*=x,At*=y;for(var zt=Kt;zt<=Dt;zt+=_)for(var ie=Qt;ie<=ut;ie+=x)for(var fe=K;fe<=At;fe+=y){var pe=zt+ie+fe;z[pe][P[pe]++]=Gt}}for(var A=0;A!==f;A++){var Z=v[A],ht=Z.shape;switch(ht.type){case tt:var pt=Z.position.x,U=Z.position.y,lt=Z.position.z,Q=ht.radius;st(pt-Q,U-Q,lt-Q,pt+Q,U+Q,lt+Q,Z);break;case j:ht.worldNormalNeedsUpdate&&ht.computeWorldNormal(Z.quaternion);var $=ht.worldNormal,J=L+X*.5-Z.position.x,Rt=S+H*.5-Z.position.y,xt=E+ot*.5-Z.position.z,Ct=u;Ct.set(J,Rt,xt);for(var Mt=0,Wt=0;Mt!==g;Mt++,Wt+=_,Ct.y=Rt,Ct.x+=X)for(var Jt=0,N=0;Jt!==m;Jt++,N+=x,Ct.z=xt,Ct.y+=H)for(var b=0,at=0;b!==p;b++,at+=y,Ct.z+=ot)if(Ct.dot($)<O){var _t=Wt+N+at;z[_t][P[_t]++]=Z}break;default:Z.aabbNeedsUpdate&&Z.computeAABB(),st(Z.aabb.lowerBound.x,Z.aabb.lowerBound.y,Z.aabb.lowerBound.z,Z.aabb.upperBound.x,Z.aabb.upperBound.y,Z.aabb.upperBound.z,Z);break}}for(var A=0;A!==C;A++){var gt=P[A];if(gt>1)for(var G=z[A],Mt=0;Mt!==gt;Mt++)for(var Z=G[Mt],Jt=0;Jt!==Mt;Jt++){var yt=G[Jt];this.needBroadphaseCollision(Z,yt)&&this.intersectionTest(Z,yt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=a;var r=e("./Broadphase"),o=e("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,u,h){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new o,a.prototype.aabbQuery=function(l,u,h){h=h||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(o,a){if(o=o.id,a=a.id,a>o){var l=a;a=o,o=l}return o+"-"+a in this.matrix},r.prototype.set=function(o,a,l){if(o=o.id,a=a.id,a>o){var u=a;a=o,o=u}l?this.matrix[o+"-"+a]=!0:delete this.matrix[o+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(o){}},{}],9:[function(e,n,s){n.exports=c;var r=e("../math/Vec3"),o=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function c(C,A){this.from=C?C.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new h,f=[];c.prototype.intersectWorld=function(C,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,C.broadphase.aabbQuery(C,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(C,A,R,k){k.vsub(A,j),R.vsub(A,v),C.vsub(A,g);var it=j.dot(j),st=j.dot(v),Z=j.dot(g),ht=v.dot(v),pt=v.dot(g),U,lt;return(U=ht*Z-st*pt)>=0&&(lt=it*pt-st*Z)>=0&&U+lt<it*ht-st*st}var p=new r,_=new o;c.prototype.intersectBody=function(C,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!C.collisionResponse)&&!(!(this.collisionFilterGroup&C.collisionFilterMask)||!(C.collisionFilterGroup&this.collisionFilterMask)))for(var k=p,it=_,st=0,Z=C.shapes.length;st<Z;st++){var ht=C.shapes[st];if(!(R&&!ht.collisionResponse)&&(C.quaternion.mult(C.shapeOrientations[st],it),C.quaternion.vmult(C.shapeOffsets[st],k),k.vadd(C.position,k),this.intersectShape(ht,it,k,C),this.result._shouldStop))break}},c.prototype.intersectBodies=function(C,A){A&&(this.result=A,this._updateDirection());for(var R=0,k=C.length;!this.result._shouldStop&&R<k;R++)this.intersectBody(C[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(C,A,R,k){var it=this.from,st=P(it,this._direction,R);if(!(st>C.boundingSphereRadius)){var Z=this[C.type];Z&&Z.call(this,C,A,R,k)}},new r,new r;var x=new r,y=new r,M=new r,T=new r;new r,new l,c.prototype.intersectBox=function(C,A,R,k){return this.intersectConvex(C.convexPolyhedronRepresentation,A,R,k)},c.prototype[u.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(C,A,R,k){var it=this.from,st=this.to,Z=this._direction,ht=new r(0,0,1);A.vmult(ht,ht);var pt=new r;it.vsub(R,pt);var U=pt.dot(ht);st.vsub(R,pt);var lt=pt.dot(ht);if(!(U*lt>0)&&!(it.distanceTo(st)<U)){var Q=ht.dot(Z);if(!(Math.abs(Q)<this.precision)){var $=new r,J=new r,Rt=new r;it.vsub(R,$);var xt=-ht.dot($)/Q;Z.scale(xt,J),it.vadd(J,Rt),this.reportIntersection(ht,Rt,C,k,-1)}}},c.prototype[u.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(C){var A=this.to,R=this.from;C.lowerBound.x=Math.min(A.x,R.x),C.lowerBound.y=Math.min(A.y,R.y),C.lowerBound.z=Math.min(A.z,R.z),C.upperBound.x=Math.max(A.x,R.x),C.upperBound.y=Math.max(A.y,R.y),C.upperBound.z=Math.max(A.z,R.z)};var B={faceList:[0]};c.prototype.intersectHeightfield=function(C,A,R,k){C.data,C.elementSize;var it=new r,st=new c(this.from,this.to);a.pointToLocalFrame(R,A,st.from,st.from),a.pointToLocalFrame(R,A,st.to,st.to);var Z=[],ht=null,pt=null,U=null,lt=null,Q=C.getIndexOfPosition(st.from.x,st.from.y,Z,!1);if(Q&&(ht=Z[0],pt=Z[1],U=Z[0],lt=Z[1]),Q=C.getIndexOfPosition(st.to.x,st.to.y,Z,!1),Q&&((ht===null||Z[0]<ht)&&(ht=Z[0]),(U===null||Z[0]>U)&&(U=Z[0]),(pt===null||Z[1]<pt)&&(pt=Z[1]),(lt===null||Z[1]>lt)&&(lt=Z[1])),ht!==null){var $=[];C.getRectMinMax(ht,pt,U,lt,$),$[0],$[1];for(var J=ht;J<=U;J++)for(var Rt=pt;Rt<=lt;Rt++){if(this.result._shouldStop||(C.getConvexTrianglePillar(J,Rt,!1),a.pointToWorldFrame(R,A,C.pillarOffset,it),this.intersectConvex(C.pillarConvex,A,it,k,B),this.result._shouldStop))return;C.getConvexTrianglePillar(J,Rt,!0),a.pointToWorldFrame(R,A,C.pillarOffset,it),this.intersectConvex(C.pillarConvex,A,it,k,B)}}},c.prototype[u.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var L=new r,S=new r;c.prototype.intersectSphere=function(C,A,R,k){var it=this.from,st=this.to,Z=C.radius,ht=Math.pow(st.x-it.x,2)+Math.pow(st.y-it.y,2)+Math.pow(st.z-it.z,2),pt=2*((st.x-it.x)*(it.x-R.x)+(st.y-it.y)*(it.y-R.y)+(st.z-it.z)*(it.z-R.z)),U=Math.pow(it.x-R.x,2)+Math.pow(it.y-R.y,2)+Math.pow(it.z-R.z,2)-Math.pow(Z,2),lt=Math.pow(pt,2)-4*ht*U,Q=L,$=S;if(!(lt<0))if(lt===0)it.lerp(st,lt,Q),Q.vsub(R,$),$.normalize(),this.reportIntersection($,Q,C,k,-1);else{var J=(-pt-Math.sqrt(lt))/(2*ht),Rt=(-pt+Math.sqrt(lt))/(2*ht);if(J>=0&&J<=1&&(it.lerp(st,J,Q),Q.vsub(R,$),$.normalize(),this.reportIntersection($,Q,C,k,-1)),this.result._shouldStop)return;Rt>=0&&Rt<=1&&(it.lerp(st,Rt,Q),Q.vsub(R,$),$.normalize(),this.reportIntersection($,Q,C,k,-1))}},c.prototype[u.types.SPHERE]=c.prototype.intersectSphere;var E=new r;new r,new r;var I=new r;c.prototype.intersectConvex=function(A,R,k,it,st){for(var Z=E,ht=I,pt=st&&st.faceList||null,U=A.faces,lt=A.vertices,Q=A.faceNormals,$=this._direction,J=this.from,Rt=this.to,xt=J.distanceTo(Rt),Ct=pt?pt.length:U.length,Mt=this.result,Wt=0;!Mt._shouldStop&&Wt<Ct;Wt++){var Jt=pt?pt[Wt]:Wt,N=U[Jt],b=Q[Jt],at=R,_t=k;ht.copy(lt[N[0]]),at.vmult(ht,ht),ht.vadd(_t,ht),ht.vsub(J,ht),at.vmult(b,Z);var gt=$.dot(Z);if(!(Math.abs(gt)<this.precision)){var G=Z.dot(ht)/gt;if(!(G<0)){$.mult(G,x),x.vadd(J,x),y.copy(lt[N[0]]),at.vmult(y,y),_t.vadd(y,y);for(var yt=1;!Mt._shouldStop&&yt<N.length-1;yt++){M.copy(lt[N[yt]]),T.copy(lt[N[yt+1]]),at.vmult(M,M),at.vmult(T,T),_t.vadd(M,M),_t.vadd(T,T);var St=x.distanceTo(J);!(m(x,y,M,T)||m(x,M,y,T))||St>xt||this.reportIntersection(Z,x,A,it,Jt)}}}}},c.prototype[u.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var q=new r,D=new r,X=new r,H=new r,ot=new r,O=new r;new h;var F=[],tt=new a;c.prototype.intersectTrimesh=function(A,R,k,it,st){var Z=q,ht=F,pt=tt,U=I,lt=D,Q=X,$=H,J=O,Rt=ot;st&&st.faceList;var xt=A.indices;A.vertices,A.faceNormals;var Ct=this.from,Mt=this.to,Wt=this._direction;pt.position.copy(k),pt.quaternion.copy(R),a.vectorToLocalFrame(k,R,Wt,lt),a.pointToLocalFrame(k,R,Ct,Q),a.pointToLocalFrame(k,R,Mt,$);var Jt=Q.distanceSquared($);A.tree.rayQuery(this,pt,ht);for(var N=0,b=ht.length;!this.result._shouldStop&&N!==b;N++){var at=ht[N];A.getNormal(at,Z),A.getVertex(xt[at*3],y),y.vsub(Q,U);var _t=lt.dot(Z),gt=Z.dot(U)/_t;if(!(gt<0)){lt.scale(gt,x),x.vadd(Q,x),A.getVertex(xt[at*3+1],M),A.getVertex(xt[at*3+2],T);var G=x.distanceSquared(Q);!(m(x,M,y,T)||m(x,y,M,T))||G>Jt||(a.vectorToWorldFrame(R,Z,Rt),a.pointToWorldFrame(k,R,x,J),this.reportIntersection(Rt,J,A,it,at))}}ht.length=0},c.prototype[u.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(C,A,R,k,it){var st=this.from,Z=this.to,ht=st.distanceTo(A),pt=this.result;if(!(this.skipBackfaces&&C.dot(this._direction)>0))switch(pt.hitFaceIndex=typeof it<"u"?it:-1,this.mode){case c.ALL:this.hasHit=!0,pt.set(st,Z,C,A,R,k,ht),pt.hasHit=!0,this.callback(pt);break;case c.CLOSEST:(ht<pt.distance||!pt.hasHit)&&(this.hasHit=!0,pt.hasHit=!0,pt.set(st,Z,C,A,R,k,ht));break;case c.ANY:this.hasHit=!0,pt.hasHit=!0,pt.set(st,Z,C,A,R,k,ht),pt._shouldStop=!0;break}};var j=new r,z=new r;function P(C,A,R){R.vsub(C,j);var k=j.dot(A);A.mult(k,z),z.vadd(C,z);var it=R.distanceTo(z);return it}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=o;function o(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(a,l,u,h,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=o;function o(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(u){l.push(u.body)},this._removeBodyHandler=function(u){var h=l.indexOf(u.body);h!==-1&&l.splice(h,1)},a&&this.setWorld(a)}o.prototype=new r,o.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},o.insertionSortX=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=h.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortY=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=h.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=h}return a},o.insertionSortZ=function(a){for(var l=1,u=a.length;l<u;l++){for(var h=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=h.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=h}return a},o.prototype.collisionPairs=function(a,l,u){var h=this.axisList,c=h.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=h[f];for(v=f+1;v<c;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!o.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,u)}}}},o.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,u=a.length,h=0;h!==u;h++){var c=a[h];c.aabbNeedsUpdate&&c.computeAABB()}l===0?o.insertionSortX(a):l===1?o.insertionSortY(a):l===2&&o.insertionSortZ(a)},o.checkBounds=function(a,l,u){var h,c;u===0?(h=a.position.x,c=l.position.x):u===1?(h=a.position.y,c=l.position.y):u===2&&(h=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,v=h+d,g=c-f;return g<v},o.prototype.autoDetectAxis=function(){for(var a=0,l=0,u=0,h=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;a+=_,l+=_*_;var x=p.position.y;u+=x,h+=x*x;var y=p.position.z;c+=y,d+=y*y}var M=l-a*a*g,T=h-u*u*g,B=d-c*c*g;M>T?M>B?this.axisIndex=0:this.axisIndex=2:T>B?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(a,l,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,c="x";h===1&&(c="y"),h===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,h,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new o(h,c,d),p=this.twistEquation=new a(h,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new l,new l,u.prototype.update=function(){var h=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=o;var r=e("../utils/Utils");function o(a,l,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=o.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},o.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=a;var r=e("./Constraint"),o=e("../equations/ContactEquation");function a(l,u,h,c){r.call(this,l,u),typeof h>"u"&&(h=l.position.distanceTo(u.position)),typeof c>"u"&&(c=1e6),this.distance=h;var d=this.distanceEquation=new o(l,u);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,u=this.bodyB,h=this.distanceEquation,c=this.distance*.5,d=h.ni;u.position.vsub(l.position,d),d.normalize(),d.mult(c,h.ri),d.mult(-c,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var y=this.rotationalEquation1=new o(d,f,v),M=this.rotationalEquation2=new o(d,f,v),T=this.motorEquation=new a(d,f,g);T.enabled=!1,this.equations.push(y,M,T)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new l,c=new l;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=h,_=c,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,p),f.quaternion.vmult(y,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(u,h,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,v=new a,g=new a;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),r.call(this,u,f,h,v,d);var m=this.rotationalEquation1=new o(u,h,c),p=this.rotationalEquation2=new o(u,h,c),_=this.rotationalEquation3=new o(u,h,c);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(a.UNIT_X,c.axisA),h.vectorToWorldFrame(a.UNIT_Y,c.axisB),u.vectorToWorldFrame(a.UNIT_Y,d.axisA),h.vectorToWorldFrame(a.UNIT_Z,d.axisB),u.vectorToWorldFrame(a.UNIT_Z,f.axisA),h.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=l;var r=e("./Constraint"),o=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(u,h,c,d,f){r.call(this,u,c),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new o(u,c),g=this.equationY=new o(u,c),m=this.equationZ=new o(u,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var u=this.bodyA,h=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,c.ri),h.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new o,a.prototype.constructor=a;var l=new r,u=new r;a.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(v),y=this.computeGW(),M=this.computeGiMf(),T=-x*c-y*d-h*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=a;var r=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,u=new o,h=new o;a.prototype.computeB=function(m){var p=this.a,_=this.b,x=this.bi,y=this.bj,M=this.ri,T=this.rj,B=l,L=u,S=x.velocity,E=x.angularVelocity;x.force,x.torque;var I=y.velocity,q=y.angularVelocity;y.force,y.torque;var D=h,X=this.jacobianElementA,H=this.jacobianElementB,ot=this.ni;M.cross(ot,B),T.cross(ot,L),ot.negate(X.spatial),B.negate(X.rotational),H.spatial.copy(ot),H.rotational.copy(L),D.copy(y.position),D.vadd(T,D),D.vsub(x.position,D),D.vsub(M,D);var O=ot.dot(D),F=this.restitution+1,tt=F*I.dot(ot)-F*S.dot(ot)+q.dot(L)-E.dot(B),j=this.computeGiMf(),z=-O*p-tt*_-m*j;return z};var c=new o,d=new o,f=new o,v=new o,g=new o;a.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,p),m.vsub(p,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=a;var r=e("../math/JacobianElement"),o=e("../math/Vec3");function a(g,m,p,_){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,m,p){var _=m,x=g,y=p;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},a.prototype.computeB=function(g,m,p){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*p},a.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var l=new o;a.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.velocity,y=_.velocity,M=p.angularVelocity||l,T=_.angularVelocity||l;return g.multiplyVectors(x,M)+m.multiplyVectors(y,T)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.vlambda,y=_.vlambda,M=p.wlambda||l,T=_.wlambda||l;return g.multiplyVectors(x,M)+m.multiplyVectors(y,T)};var u=new o,h=new o,c=new o,d=new o;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.force,y=p.torque,M=_.force,T=_.torque,B=p.invMassSolve,L=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(y,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(T,d):d.set(0,0,0),x.mult(B,u),M.mult(L,h),g.multiplyVectors(u,c)+m.multiplyVectors(h,d)};var f=new o;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.invMassSolve,y=_.invMassSolve,M=p.invInertiaWorldSolve,T=_.invInertiaWorldSolve,B=x+y;return M&&(M.vmult(g.rotational,f),B+=f.dot(g.rotational)),T&&(T.vmult(m.rotational,f),B+=f.dot(m.rotational)),B};var v=new o;new o,new o,new o,new o,new o,a.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),p.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(p.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=a;var r=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(h,c,d){r.call(this,h,c,-d,d),this.ri=new o,this.rj=new o,this.t=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,u=new o;a.prototype.computeB=function(h){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=u,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),M=-x*c-h*y;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(h,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,h,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new o,a.prototype.constructor=a;var l=new r,u=new r;a.prototype.computeB=function(h){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(v),y=this.computeGW(),M=this.computeGiMf(),T=-x*c-y*d-h*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(l,u,h){h=typeof h<"u"?h:1e6,o.call(this,l,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(h),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=o;function o(a,l,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[a,l],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(o){var a="";o=o||{},typeof o=="string"?(a=o,o={}):typeof o=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=o;var r=e("./Vec3");function o(){this.spatial=new r,this.rotational=new r}o.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=o;var r=e("./Vec3");function o(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},o.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},o.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},o.prototype.getTrace=function(l){var l=l||new r,u=this.elements;l.x=u[0],l.y=u[4],l.z=u[8]},o.prototype.vmult=function(a,l){l=l||new r;var u=this.elements,h=a.x,c=a.y,d=a.z;return l.x=u[0]*h+u[1]*c+u[2]*d,l.y=u[3]*h+u[4]*c+u[5]*d,l.z=u[6]*h+u[7]*c+u[8]*d,l},o.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},o.prototype.mmult=function(a,l){for(var u=l||new o,h=0;h<3;h++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[h+f*3]*this.elements[f+c*3];u.elements[h+c*3]=d}return u},o.prototype.scale=function(a,l){l=l||new o;for(var u=this.elements,h=l.elements,c=0;c!==3;c++)h[3*c+0]=a.x*u[3*c+0],h[3*c+1]=a.y*u[3*c+1],h[3*c+2]=a.z*u[3*c+2];return l},o.prototype.solve=function(a,l){l=l||new r;for(var u=3,h=4,c=[],d=0;d<u*h;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+h*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,c[d+h*d]===0){for(f=d+1;f<g;f++)if(c[d+h*f]!==0){m=p;do _=p-m,c[_+h*d]+=c[_+h*f];while(--m);break}}if(c[d+h*d]!==0)for(f=d+1;f<g;f++){var x=c[d+h*f]/c[d+h*d];m=p;do _=p-m,c[_+h*f]=_<=d?0:c[_+h*f]-c[_+h*d]*x;while(--m)}}while(--v);if(l.z=c[2*h+3]/c[2*h+2],l.y=(c[1*h+3]-c[1*h+2]*l.z)/c[1*h+1],l.x=(c[0*h+3]-c[0*h+2]*l.z-c[0*h+1]*l.y)/c[0*h+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},o.prototype.e=function(a,l,u){if(u===void 0)return this.elements[l+3*a];this.elements[l+3*a]=u},o.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},o.prototype.toString=function(){for(var a="",l=",",u=0;u<9;u++)a+=this.elements[u]+l;return a},o.prototype.reverse=function(a){a=a||new o;for(var l=3,u=6,h=[],c=0;c<l*u;c++)h.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)h[c+u*d]=this.elements[c+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,v=f,g,m=u,p;do{if(c=v-f,h[c+u*c]===0){for(d=c+1;d<v;d++)if(h[c+u*d]!==0){g=m;do p=m-g,h[p+u*c]+=h[p+u*d];while(--g);break}}if(h[c+u*c]!==0)for(d=c+1;d<v;d++){var _=h[c+u*d]/h[c+u*c];g=m;do p=m-g,h[p+u*d]=p<=c?0:h[p+u*d]-h[p+u*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=h[c+u*d]/h[c+u*c];g=u;do p=u-g,h[p+u*d]=h[p+u*d]-h[p+u*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/h[c+u*c];g=u;do p=u-g,h[p+u*c]=h[p+u*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=h[l+d+u*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,p)}while(d--)}while(c--);return a},o.prototype.setRotationFromQuaternion=function(a){var l=a.x,u=a.y,h=a.z,c=a.w,d=l+l,f=u+u,v=h+h,g=l*d,m=l*f,p=l*v,_=u*f,x=u*v,y=h*v,M=c*d,T=c*f,B=c*v,L=this.elements;return L[3*0+0]=1-(_+y),L[3*0+1]=m-B,L[3*0+2]=p+T,L[3*1+0]=m+B,L[3*1+1]=1-(g+y),L[3*1+2]=x-M,L[3*2+0]=p-T,L[3*2+1]=x+M,L[3*2+2]=1-(g+_),this},o.prototype.transpose=function(a){a=a||new o;for(var l=a.elements,u=this.elements,h=0;h!==3;h++)for(var c=0;c!==3;c++)l[3*h+c]=u[3*c+h];return a}},{"./Vec3":30}],28:[function(e,n,s){n.exports=o;var r=e("./Vec3");function o(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}o.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},o.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var a=new r,l=new r;o.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new r,h=new r,c=new r;o.prototype.mult=function(d,f){f=f||new o;var v=this.w,g=u,m=h,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},o.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new o,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},o.prototype.conjugate=function(d){return d=d||new o,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},o.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,x=this.z,y=this.w,M=y*v+_*m-x*g,T=y*g+x*v-p*m,B=y*m+p*g-_*v,L=-p*v-_*g-x*m;return f.x=M*y+L*-p+T*-x-B*-_,f.y=T*y+L*-_+B*-p-M*-x,f.z=B*y+L*-x+M*-_-T*-p,f},o.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},o.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,x=this.z,y=this.w;switch(f){case"YZX":var M=p*_+x*y;if(M>.499&&(v=2*Math.atan2(p,y),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(p,y),g=-Math.PI/2,m=0),isNaN(v)){var T=p*p,B=_*_,L=x*x;v=Math.atan2(2*_*y-2*p*x,1-2*B-2*L),g=Math.asin(2*M),m=Math.atan2(2*p*y-2*_*x,1-2*T-2*L)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},o.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(f/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=x*p*_+m*y*M,this.y=m*y*_-x*p*M,this.z=m*p*M+x*y*_,this.w=m*p*_-x*y*M):g==="YXZ"?(this.x=x*p*_+m*y*M,this.y=m*y*_-x*p*M,this.z=m*p*M-x*y*_,this.w=m*p*_+x*y*M):g==="ZXY"?(this.x=x*p*_-m*y*M,this.y=m*y*_+x*p*M,this.z=m*p*M+x*y*_,this.w=m*p*_-x*y*M):g==="ZYX"?(this.x=x*p*_-m*y*M,this.y=m*y*_+x*p*M,this.z=m*p*M-x*y*_,this.w=m*p*_+x*y*M):g==="YZX"?(this.x=x*p*_+m*y*M,this.y=m*y*_+x*p*M,this.z=m*p*M-x*y*_,this.w=m*p*_-x*y*M):g==="XZY"&&(this.x=x*p*_-m*y*M,this.y=m*y*_-x*p*M,this.z=m*p*M+x*y*_,this.w=m*p*_+x*y*M),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),o=e("./Quaternion");n.exports=a;function a(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new o,u.quaternion&&this.quaternion.copy(u.quaternion)}var l=new o;a.pointToLocalFrame=function(u,h,c,f){var f=f||new r;return c.vsub(u,f),h.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(u,h){return a.pointToLocalFrame(this.position,this.quaternion,u,h)},a.pointToWorldFrame=function(u,h,c,f){var f=f||new r;return h.vmult(c,f),f.vadd(u,f),f},a.prototype.pointToWorld=function(u,h){return a.pointToWorldFrame(this.position,this.quaternion,u,h)},a.prototype.vectorToWorldFrame=function(u,c){var c=c||new r;return this.quaternion.vmult(u,c),c},a.vectorToWorldFrame=function(u,h,c){return u.vmult(h,c),c},a.vectorToLocalFrame=function(u,h,c,f){var f=f||new r;return h.w*=-1,h.vmult(c,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=o;var r=e("./Mat3");function o(h,c,d){this.x=h||0,this.y=c||0,this.z=d||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(h,c){var d=h.x,f=h.y,v=h.z,g=this.x,m=this.y,p=this.z;return c=c||new o,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},o.prototype.set=function(h,c,d){return this.x=h,this.y=c,this.z=d,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(h,c){if(c)c.x=h.x+this.x,c.y=h.y+this.y,c.z=h.z+this.z;else return new o(this.x+h.x,this.y+h.y,this.z+h.z)},o.prototype.vsub=function(h,c){if(c)c.x=this.x-h.x,c.y=this.y-h.y,c.z=this.z-h.z;else return new o(this.x-h.x,this.y-h.y,this.z-h.z)},o.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var h=this.x,c=this.y,d=this.z,f=Math.sqrt(h*h+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},o.prototype.unit=function(h){h=h||new o;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,h.x=c*v,h.y=d*v,h.z=f*v):(h.x=1,h.y=0,h.z=0),h},o.prototype.norm=function(){var h=this.x,c=this.y,d=this.z;return Math.sqrt(h*h+c*c+d*d)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},o.prototype.distanceSquared=function(h){var c=this.x,d=this.y,f=this.z,v=h.x,g=h.y,m=h.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},o.prototype.mult=function(h,c){c=c||new o;var d=this.x,f=this.y,v=this.z;return c.x=h*d,c.y=h*f,c.z=h*v,c},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(h){return h=h||new o,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var a=new o,l=new o;o.prototype.tangents=function(h,c){var d=this.norm();if(d>0){var f=a,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,h)):(g.set(0,1,0),f.cross(g,h)),f.cross(h,c)}else h.set(1,0,0),c.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},o.prototype.lerp=function(h,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(h.x-f)*c,d.y=v+(h.y-v)*c,d.z=g+(h.z-g)*c},o.prototype.almostEquals=function(h,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-h.x)>c||Math.abs(this.y-h.y)>c||Math.abs(this.z-h.z)>c)},o.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new o;o.prototype.isAntiparallelTo=function(h,c){return this.negate(u),u.almostEquals(h,c)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=c;var r=e("../utils/EventTarget");e("../shapes/Shape");var o=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function c(I){I=I||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof I.collisionFilterGroup=="number"?I.collisionFilterGroup:1,this.collisionFilterMask=typeof I.collisionFilterMask=="number"?I.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,I.position&&this.position.copy(I.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,I.velocity&&this.velocity.copy(I.velocity),this.initVelocity=new o,this.force=new o;var q=typeof I.mass=="number"?I.mass:0;this.mass=q,this.invMass=q>0?1/q:0,this.material=I.material||null,this.linearDamping=typeof I.linearDamping=="number"?I.linearDamping:.01,this.type=q<=0?c.STATIC:c.DYNAMIC,typeof I.type==typeof c.STATIC&&(this.type=I.type),this.allowSleep=typeof I.allowSleep<"u"?I.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof I.sleepSpeedLimit<"u"?I.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof I.sleepTimeLimit<"u"?I.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new l,I.quaternion&&this.quaternion.copy(I.quaternion),this.initQuaternion=new l,this.angularVelocity=new o,I.angularVelocity&&this.angularVelocity.copy(I.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof I.fixedRotation<"u"?I.fixedRotation:!1,this.angularDamping=typeof I.angularDamping<"u"?I.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new o,I.shape&&this.addShape(I.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var I=this.sleepState;this.sleepState=0,I===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(I){if(this.allowSleep){var q=this.sleepState,D=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);q===c.AWAKE&&D<X?(this.sleepState=c.SLEEPY,this.timeLastSleepy=I,this.dispatchEvent(c.sleepyEvent)):q===c.SLEEPY&&D>X?this.wakeUp():q===c.SLEEPY&&I-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(I,D){var D=D||new o;return I.vsub(this.position,D),this.quaternion.conjugate().vmult(D,D),D},c.prototype.vectorToLocalFrame=function(I,D){var D=D||new o;return this.quaternion.conjugate().vmult(I,D),D},c.prototype.pointToWorldFrame=function(I,D){var D=D||new o;return this.quaternion.vmult(I,D),D.vadd(this.position,D),D},c.prototype.vectorToWorldFrame=function(I,D){var D=D||new o;return this.quaternion.vmult(I,D),D};var d=new o,f=new l;c.prototype.addShape=function(I,q,D){var X=new o,H=new l;return q&&X.copy(q),D&&H.copy(D),this.shapes.push(I),this.shapeOffsets.push(X),this.shapeOrientations.push(H),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var I=this.shapes,q=this.shapeOffsets,D=I.length,X=0,H=0;H!==D;H++){var ot=I[H];ot.updateBoundingSphereRadius();var O=q[H].norm(),F=ot.boundingSphereRadius;O+F>X&&(X=O+F)}this.boundingRadius=X};var v=new u;c.prototype.computeAABB=function(){for(var I=this.shapes,q=this.shapeOffsets,D=this.shapeOrientations,X=I.length,H=d,ot=f,O=this.quaternion,F=this.aabb,tt=v,j=0;j!==X;j++){var z=I[j];D[j].mult(O,ot),ot.vmult(q[j],H),H.vadd(this.position,H),z.calculateWorldAABB(H,ot,tt.lowerBound,tt.upperBound),j===0?F.copy(tt):F.extend(tt)}this.aabbNeedsUpdate=!1};var g=new a,m=new a;new a,c.prototype.updateInertiaWorld=function(I){var q=this.invInertia;if(!(q.x===q.y&&q.y===q.z&&!I)){var D=g,X=m;D.setRotationFromQuaternion(this.quaternion),D.transpose(X),D.scale(q,D),D.mmult(X,this.invInertiaWorld)}};var p=new o,_=new o;c.prototype.applyForce=function(I,q){if(this.type===c.DYNAMIC){var D=p;q.vsub(this.position,D);var X=_;D.cross(I,X),this.force.vadd(I,this.force),this.torque.vadd(X,this.torque)}};var x=new o,y=new o;c.prototype.applyLocalForce=function(I,q){if(this.type===c.DYNAMIC){var D=x,X=y;this.vectorToWorldFrame(I,D),this.pointToWorldFrame(q,X),this.applyForce(D,X)}};var M=new o,T=new o,B=new o;c.prototype.applyImpulse=function(I,q){if(this.type===c.DYNAMIC){var D=M;q.vsub(this.position,D);var X=T;X.copy(I),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var H=B;D.cross(I,H),this.invInertiaWorld.vmult(H,H),this.angularVelocity.vadd(H,this.angularVelocity)}};var L=new o,S=new o;c.prototype.applyLocalImpulse=function(I,q){if(this.type===c.DYNAMIC){var D=L,X=S;this.vectorToWorldFrame(I,D),this.pointToWorldFrame(q,X),this.applyImpulse(D,X)}};var E=new o;c.prototype.updateMassProperties=function(){var I=E;this.invMass=this.mass>0?1/this.mass:0;var q=this.inertia,D=this.fixedRotation;this.computeAABB(),I.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(I,this.mass,q),this.invInertia.set(q.x>0&&!D?1/q.x:0,q.y>0&&!D?1/q.y:0,q.z>0&&!D?1/q.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(I,q){var D=new o;return I.vsub(this.position,D),this.angularVelocity.cross(D,q),this.velocity.vadd(q,q),q}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),o=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=u;function u(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,c=new r,d=new r;new a,u.prototype.addWheel=function(O){O=O||{};var F=new l(O),tt=this.wheelInfos.length;return this.wheelInfos.push(F),tt},u.prototype.setSteeringValue=function(O,F){var tt=this.wheelInfos[F];tt.steering=O},new r,u.prototype.applyEngineForce=function(O,F){this.wheelInfos[F].engineForce=O},u.prototype.setBrake=function(O,F){this.wheelInfos[F].brake=O},u.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var F=this;this.preStepCallback=function(){F.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},u.prototype.getVehicleAxisWorld=function(O,F){F.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(F,F)},u.prototype.updateVehicle=function(O){for(var F=this.wheelInfos,tt=F.length,j=this.chassisBody,z=0;z<tt;z++)this.updateWheelTransform(z);this.currentVehicleSpeedKmHour=3.6*j.velocity.norm();var P=new r;this.getVehicleAxisWorld(this.indexForwardAxis,P),P.dot(j.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var z=0;z<tt;z++)this.castRay(F[z]);this.updateSuspension(O);for(var C=new r,A=new r,z=0;z<tt;z++){var R=F[z],k=R.suspensionForce;k>R.maxSuspensionForce&&(k=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(k*O,C),R.raycastResult.hitPointWorld.vsub(j.position,A),j.applyImpulse(C,R.raycastResult.hitPointWorld)}this.updateFriction(O);var it=new r,st=new r,Z=new r;for(z=0;z<tt;z++){var R=F[z];j.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,Z);var ht=1;switch(this.indexUpAxis){case 1:ht=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,st);var pt=st.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(pt,it),st.vsub(it,st);var U=st.dot(Z);R.deltaRotation=ht*U*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},u.prototype.updateSuspension=function(O){for(var F=this.chassisBody,tt=F.mass,j=this.wheelInfos,z=j.length,P=0;P<z;P++){var C=j[P];if(C.isInContact){var A,R=C.suspensionRestLength,k=C.suspensionLength,it=R-k;A=C.suspensionStiffness*it*C.clippedInvContactDotSuspension;var st=C.suspensionRelativeVelocity,Z;st<0?Z=C.dampingCompression:Z=C.dampingRelaxation,A-=Z*st,C.suspensionForce=A*tt,C.suspensionForce<0&&(C.suspensionForce=0)}else C.suspensionForce=0}},u.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;u.prototype.castRay=function(O){var F=f,tt=v;this.updateWheelTransformWorld(O);var j=this.chassisBody,z=-1,P=O.suspensionRestLength+O.radius;O.directionWorld.scale(P,F);var C=O.chassisConnectionPointWorld;C.vadd(F,tt);var A=O.raycastResult;A.reset();var R=j.collisionResponse;j.collisionResponse=!1,this.world.rayTest(C,tt,A),j.collisionResponse=R;var k=A.body;if(O.raycastResult.groundObject=0,k){z=A.distance,O.raycastResult.hitNormalWorld=A.hitNormalWorld,O.isInContact=!0;var it=A.distance;O.suspensionLength=it-O.radius;var st=O.suspensionRestLength-O.maxSuspensionTravel,Z=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<st&&(O.suspensionLength=st),O.suspensionLength>Z&&(O.suspensionLength=Z,O.raycastResult.reset());var ht=O.raycastResult.hitNormalWorld.dot(O.directionWorld),pt=new r;j.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,pt);var U=O.raycastResult.hitNormalWorld.dot(pt);if(ht>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var lt=-1/ht;O.suspensionRelativeVelocity=U*lt,O.clippedInvContactDotSuspension=lt}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return z},u.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var F=this.chassisBody;F.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),F.vectorToWorldFrame(O.directionLocal,O.directionWorld),F.vectorToWorldFrame(O.axleLocal,O.axleWorld)},u.prototype.updateWheelTransform=function(O){var F=h,tt=c,j=d,z=this.wheelInfos[O];this.updateWheelTransformWorld(z),z.directionLocal.scale(-1,F),tt.copy(z.axleLocal),F.cross(tt,j),j.normalize(),tt.normalize();var P=z.steering,C=new o;C.setFromAxisAngle(F,P);var A=new o;A.setFromAxisAngle(tt,z.rotation);var R=z.worldTransform.quaternion;this.chassisBody.quaternion.mult(C,R),R.mult(A,R),R.normalize();var k=z.worldTransform.position;k.copy(z.directionWorld),k.scale(z.suspensionLength,k),k.vadd(z.chassisConnectionPointWorld,k)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,p=[],_=[],x=1;u.prototype.updateFriction=function(O){for(var F=m,tt=this.wheelInfos,j=tt.length,z=this.chassisBody,P=_,C=p,A=0;A<j;A++){var R=tt[A],k=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,P[A]||(P[A]=new r),C[A]||(C[A]=new r)}for(var A=0;A<j;A++){var R=tt[A],k=R.raycastResult.body;if(k){var it=C[A],st=this.getWheelTransformWorld(A);st.vectorToWorldFrame(g[this.indexRightAxis],it);var Z=R.raycastResult.hitNormalWorld,ht=it.dot(Z);Z.scale(ht,F),it.vsub(F,it),it.normalize(),Z.cross(it,P[A]),P[A].normalize(),R.sideImpulse=ot(z,R.raycastResult.hitPointWorld,k,R.raycastResult.hitPointWorld,it),R.sideImpulse*=x}}var pt=1,U=.5;this.sliding=!1;for(var A=0;A<j;A++){var R=tt[A],k=R.raycastResult.body,lt=0;if(R.slipInfo=1,k){var Q=0,$=R.brake?R.brake:Q;lt=B(z,k,R.raycastResult.hitPointWorld,P[A],$),lt+=R.engineForce*O;var J=$/lt;R.slipInfo*=J}if(R.forwardImpulse=0,R.skidInfo=1,k){R.skidInfo=1;var Rt=R.suspensionForce*O*R.frictionSlip,xt=Rt,Ct=Rt*xt;R.forwardImpulse=lt;var Mt=R.forwardImpulse*U,Wt=R.sideImpulse*pt,Jt=Mt*Mt+Wt*Wt;if(R.sliding=!1,Jt>Ct){this.sliding=!0,R.sliding=!0;var J=Rt/Math.sqrt(Jt);R.skidInfo*=J}}}if(this.sliding)for(var A=0;A<j;A++){var R=tt[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<j;A++){var R=tt[A],N=new r;if(N.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var b=new r;P[A].scale(R.forwardImpulse,b),z.applyImpulse(b,N)}if(R.sideImpulse!==0){var k=R.raycastResult.body,at=new r;at.copy(R.raycastResult.hitPointWorld);var _t=new r;C[A].scale(R.sideImpulse,_t),z.pointToLocalFrame(N,N),N["xyz"[this.indexUpAxis]]*=R.rollInfluence,z.pointToWorldFrame(N,N),z.applyImpulse(_t,N),_t.scale(-1,_t),k.applyImpulse(_t,at)}}};var y=new r,M=new r,T=new r;function B(O,F,tt,j,z){var P=0,C=tt,A=y,R=M,k=T;O.getVelocityAtWorldPoint(C,A),F.getVelocityAtWorldPoint(C,R),A.vsub(R,k);var it=j.dot(k),st=q(O,tt,j),Z=q(F,tt,j),ht=1,pt=ht/(st+Z);return P=-it*pt,z<P&&(P=z),P<-z&&(P=-z),P}var L=new r,S=new r,E=new r,I=new r;function q(O,F,tt){var j=L,z=S,P=E,C=I;return F.vsub(O.position,j),j.cross(tt,z),O.invInertiaWorld.vmult(z,C),C.cross(j,P),O.invMass+tt.dot(P)}var D=new r,X=new r,H=new r;function ot(O,F,tt,j,z,ht){var C=z.norm2();if(C>1.1)return 0;var A=D,R=X,k=H;O.getVelocityAtWorldPoint(F,A),tt.getVelocityAtWorldPoint(j,R),A.vsub(R,k);var it=z.dot(k),st=.2,Z=1/(O.invMass+tt.invMass),ht=-st*it*Z;return ht}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),o=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new o(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-p*x,p*_+m*x,0)},h.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;h.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},h.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},h.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},h.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;h.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=o,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;o.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,x=a,y=0;y!==m;y++){var M=this.particles[y];M.position.vsub(v.position,x),p!==M.id&&x.norm2()<_&&g.push(M)}};var l=new r,u=new r,h=new r,c=new r,d=new r,f=new r;o.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var M=y.length,T=0,B=0;B!==M;B++){x.position.vsub(y[B].position,g);var L=g.norm(),S=this.w(L);T+=y[B].mass*S}this.densities[_]=T,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var E=u,I=h,q=c,D=d,X=f,_=0;_!==v;_++){var H=this.particles[_];E.set(0,0,0),I.set(0,0,0);for(var ot,O,y=this.neighbors[_],M=y.length,B=0;B!==M;B++){var F=y[B];H.position.vsub(F.position,D);var tt=D.norm();ot=-F.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[B]/(this.densities[B]*this.densities[B]+p)),this.gradw(D,q),q.mult(ot,q),E.vadd(q,E),F.velocity.vsub(H.velocity,X),X.mult(1/(1e-4+this.densities[_]*this.densities[B])*this.viscosity*F.mass,X),O=this.nablaw(tt),X.mult(O,X),I.vadd(X,I)}I.mult(H.mass,I),E.mult(H.mass,E),H.force.vadd(I,H.force),H.force.vadd(E,H.force)}},o.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},o.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},o.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=o;function o(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}o.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},o.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},o.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},o.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new r,l=new r,u=new r,h=new r,c=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;o.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,M=this.bodyA,T=this.bodyB,B=a,L=l,S=u,E=h,I=p,q=c,D=d,X=f,H=v,ot=g,O=m;this.getWorldAnchorA(q),this.getWorldAnchorB(D),q.vsub(M.position,X),D.vsub(T.position,H),D.vsub(q,B);var F=B.norm();L.copy(B),L.normalize(),T.velocity.vsub(M.velocity,S),T.angularVelocity.cross(H,I),S.vadd(I,S),M.angularVelocity.cross(X,I),S.vsub(I,S),L.mult(-_*(F-y)-x*S.dot(L),E),M.force.vsub(E,M.force),T.force.vadd(E,T.force),X.cross(E,ot),H.cross(E,O),M.torque.vsub(ot,M.torque),T.torque.vadd(O,T.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),o=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=u;function u(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new o,this.isInContact=!1}var c=new r,h=new r,c=new r;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=o,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new a(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new o,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new o;new o,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),c.vadd(u,u),f(u.x,u.y,u.z)};var h=[new o,new o,new o,new o,new o,new o,new o,new o];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<f.x&&(f.x=_),x<f.y&&(f.y=x),y<f.z&&(f.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(z,P,C){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=z||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=P||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=C?C.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var u=new o;l.prototype.computeEdges=function(){var z=this.faces,P=this.vertices;P.length;var C=this.uniqueEdges;C.length=0;for(var A=u,R=0;R!==z.length;R++)for(var k=z[R],it=k.length,st=0;st!==it;st++){var Z=(st+1)%it;P[k[st]].vsub(P[k[Z]],A),A.normalize();for(var ht=!1,pt=0;pt!==C.length;pt++)if(C[pt].almostEquals(A)||C[pt].almostEquals(A)){ht=!0;break}ht||C.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var z=0;z<this.faces.length;z++){for(var P=0;P<this.faces[z].length;P++)if(!this.vertices[this.faces[z][P]])throw new Error("Vertex "+this.faces[z][P]+" not found!");var C=this.faceNormals[z]||new o;this.getFaceNormal(z,C),C.negate(C),this.faceNormals[z]=C;var A=this.vertices[this.faces[z][0]];if(C.dot(A)<0){console.error(".faceNormals["+z+"] = Vec3("+C.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var P=0;P<this.faces[z].length;P++)console.warn(".vertices["+this.faces[z][P]+"] = Vec3("+this.vertices[this.faces[z][P]].toString()+")")}}};var h=new o,c=new o;l.computeNormal=function(z,P,C,A){P.vsub(z,c),C.vsub(P,h),h.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(z,P){var C=this.faces[z],A=this.vertices[C[0]],R=this.vertices[C[1]],k=this.vertices[C[2]];return l.computeNormal(A,R,k,P)};var d=new o;l.prototype.clipAgainstHull=function(z,P,C,A,R,k,it,st,Z){for(var ht=d,pt=-1,U=-Number.MAX_VALUE,lt=0;lt<C.faces.length;lt++){ht.copy(C.faceNormals[lt]),R.vmult(ht,ht);var Q=ht.dot(k);Q>U&&(U=Q,pt=lt)}for(var $=[],J=C.faces[pt],Rt=J.length,xt=0;xt<Rt;xt++){var Ct=C.vertices[J[xt]],Mt=new o;Mt.copy(Ct),R.vmult(Mt,Mt),A.vadd(Mt,Mt),$.push(Mt)}pt>=0&&this.clipFaceAgainstHull(k,z,P,$,it,st,Z)};var f=new o,v=new o,g=new o,m=new o,p=new o,_=new o;l.prototype.findSeparatingAxis=function(z,P,C,A,R,k,it,st){var Z=f,ht=v,pt=g,U=m,lt=p,Q=_,$=Number.MAX_VALUE,J=this;if(J.uniqueAxes)for(var xt=0;xt!==J.uniqueAxes.length;xt++){C.vmult(J.uniqueAxes[xt],Z);var Mt=J.testSepAxis(Z,z,P,C,A,R);if(Mt===!1)return!1;Mt<$&&($=Mt,k.copy(Z))}else for(var Rt=it?it.length:J.faces.length,xt=0;xt<Rt;xt++){var Ct=it?it[xt]:xt;Z.copy(J.faceNormals[Ct]),C.vmult(Z,Z);var Mt=J.testSepAxis(Z,z,P,C,A,R);if(Mt===!1)return!1;Mt<$&&($=Mt,k.copy(Z))}if(z.uniqueAxes)for(var xt=0;xt!==z.uniqueAxes.length;xt++){R.vmult(z.uniqueAxes[xt],ht);var Mt=J.testSepAxis(ht,z,P,C,A,R);if(Mt===!1)return!1;Mt<$&&($=Mt,k.copy(ht))}else for(var Wt=st?st.length:z.faces.length,xt=0;xt<Wt;xt++){var Ct=st?st[xt]:xt;ht.copy(z.faceNormals[Ct]),R.vmult(ht,ht);var Mt=J.testSepAxis(ht,z,P,C,A,R);if(Mt===!1)return!1;Mt<$&&($=Mt,k.copy(ht))}for(var Jt=0;Jt!==J.uniqueEdges.length;Jt++){C.vmult(J.uniqueEdges[Jt],U);for(var N=0;N!==z.uniqueEdges.length;N++)if(R.vmult(z.uniqueEdges[N],lt),U.cross(lt,Q),!Q.almostZero()){Q.normalize();var b=J.testSepAxis(Q,z,P,C,A,R);if(b===!1)return!1;b<$&&($=b,k.copy(Q))}}return A.vsub(P,pt),pt.dot(k)>0&&k.negate(k),!0};var x=[],y=[];l.prototype.testSepAxis=function(z,P,C,A,R,k){var it=this;l.project(it,z,C,A,x),l.project(P,z,R,k,y);var st=x[0],Z=x[1],ht=y[0],pt=y[1],U=st-pt,lt=ht-Z,Q=U<lt?U:lt;return Q};var M=new o,T=new o;l.prototype.calculateLocalInertia=function(z,P){this.computeLocalAABB(M,T);var C=T.x-M.x,A=T.y-M.y,R=T.z-M.z;P.x=1/12*z*(2*A*2*A+2*R*2*R),P.y=1/12*z*(2*C*2*C+2*R*2*R),P.z=1/12*z*(2*A*2*A+2*C*2*C)},l.prototype.getPlaneConstantOfFace=function(z){var P=this.faces[z],C=this.faceNormals[z],A=this.vertices[P[0]],R=-C.dot(A);return R};var B=new o,L=new o,S=new o,E=new o,I=new o,q=new o,D=new o,X=new o;l.prototype.clipFaceAgainstHull=function(z,P,C,A,R,k,it){for(var st=B,Z=L,ht=S,pt=E,U=I,lt=q,Q=D,$=X,J=this,Rt=[],xt=A,Ct=Rt,Mt=-1,Wt=Number.MAX_VALUE,Jt=0;Jt<J.faces.length;Jt++){st.copy(J.faceNormals[Jt]),C.vmult(st,st);var N=st.dot(z);N<Wt&&(Wt=N,Mt=Jt)}if(!(Mt<0)){var b=J.faces[Mt];b.connectedFaces=[];for(var at=0;at<J.faces.length;at++)for(var _t=0;_t<J.faces[at].length;_t++)b.indexOf(J.faces[at][_t])!==-1&&at!==Mt&&b.connectedFaces.indexOf(at)===-1&&b.connectedFaces.push(at);xt.length;for(var gt=b.length,G=0;G<gt;G++){var yt=J.vertices[b[G]],St=J.vertices[b[(G+1)%gt]];yt.vsub(St,Z),ht.copy(Z),C.vmult(ht,ht),P.vadd(ht,ht),pt.copy(this.faceNormals[Mt]),C.vmult(pt,pt),P.vadd(pt,pt),ht.cross(pt,U),U.negate(U),lt.copy(yt),C.vmult(lt,lt),P.vadd(lt,lt),-lt.dot(U);var Xt;{var ft=b.connectedFaces[G];Q.copy(this.faceNormals[ft]);var kt=this.getPlaneConstantOfFace(ft);$.copy(Q),C.vmult($,$);var Xt=kt-$.dot(P)}for(this.clipFaceAgainstPlane(xt,Ct,$,Xt);xt.length;)xt.shift();for(;Ct.length;)xt.push(Ct.shift())}Q.copy(this.faceNormals[Mt]);var kt=this.getPlaneConstantOfFace(Mt);$.copy(Q),C.vmult($,$);for(var Xt=kt-$.dot(P),at=0;at<xt.length;at++){var qt=$.dot(xt[at])+Xt;if(qt<=R&&(console.log("clamped: depth="+qt+" to minDist="+(R+"")),qt=R),qt<=k){var Zt=xt[at];if(qt<=0){var Gt={point:Zt,normal:$,depth:qt};it.push(Gt)}}}}},l.prototype.clipFaceAgainstPlane=function(z,P,C,A){var R,k,it=z.length;if(it<2)return P;var st=z[z.length-1],Z=z[0];R=C.dot(st)+A;for(var ht=0;ht<it;ht++){if(Z=z[ht],k=C.dot(Z)+A,R<0)if(k<0){var pt=new o;pt.copy(Z),P.push(pt)}else{var pt=new o;st.lerp(Z,R/(R-k),pt),P.push(pt)}else if(k<0){var pt=new o;st.lerp(Z,R/(R-k),pt),P.push(pt),P.push(Z)}st=Z,R=k}return P},l.prototype.computeWorldVertices=function(z,P){for(var C=this.vertices.length;this.worldVertices.length<C;)this.worldVertices.push(new o);for(var A=this.vertices,R=this.worldVertices,k=0;k!==C;k++)P.vmult(A[k],R[k]),z.vadd(R[k],R[k]);this.worldVerticesNeedsUpdate=!1},new o,l.prototype.computeLocalAABB=function(z,P){var C=this.vertices.length,A=this.vertices;z.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),P.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<C;R++){var k=A[R];k.x<z.x?z.x=k.x:k.x>P.x&&(P.x=k.x),k.y<z.y?z.y=k.y:k.y>P.y&&(P.y=k.y),k.z<z.z?z.z=k.z:k.z>P.z&&(P.z=k.z)}},l.prototype.computeWorldFaceNormals=function(z){for(var P=this.faceNormals.length;this.worldFaceNormals.length<P;)this.worldFaceNormals.push(new o);for(var C=this.faceNormals,A=this.worldFaceNormals,R=0;R!==P;R++)z.vmult(C[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var z=0,P=this.vertices,C=0,A=P.length;C!==A;C++){var R=P[C].norm2();R>z&&(z=R)}this.boundingSphereRadius=Math.sqrt(z)};var H=new o;l.prototype.calculateWorldAABB=function(z,P,C,A){for(var R=this.vertices.length,k=this.vertices,it,st,Z,ht,pt,U,lt=0;lt<R;lt++){H.copy(k[lt]),P.vmult(H,H),z.vadd(H,H);var Q=H;Q.x<it||it===void 0?it=Q.x:(Q.x>ht||ht===void 0)&&(ht=Q.x),Q.y<st||st===void 0?st=Q.y:(Q.y>pt||pt===void 0)&&(pt=Q.y),Q.z<Z||Z===void 0?Z=Q.z:(Q.z>U||U===void 0)&&(U=Q.z)}C.set(it,st,Z),A.set(ht,pt,U)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(z){z=z||new o;for(var P=this.vertices.length,C=this.vertices,A=0;A<P;A++)z.vadd(C[A],z);return z.mult(1/P,z),z},l.prototype.transformAllPoints=function(z,P){var C=this.vertices.length,A=this.vertices;if(P){for(var R=0;R<C;R++){var k=A[R];P.vmult(k,k)}for(var R=0;R<this.faceNormals.length;R++){var k=this.faceNormals[R];P.vmult(k,k)}}if(z)for(var R=0;R<C;R++){var k=A[R];k.vadd(z,k)}};var ot=new o,O=new o,F=new o;l.prototype.pointIsInside=function(z){var P=this.vertices.length,C=this.vertices,A=this.faces,R=this.faceNormals,k=null,it=this.faces.length,st=ot;this.getAveragePointLocal(st);for(var Z=0;Z<it;Z++){this.faces[Z].length;var P=R[Z],ht=C[A[Z][0]],pt=O;z.vsub(ht,pt);var U=P.dot(pt),lt=F;st.vsub(ht,lt);var Q=P.dot(lt);if(U<0&&Q>0||U>0&&Q<0)return!1}return k?1:-1},new o;var tt=new o,j=new o;l.project=function(z,P,C,A,R){var k=z.vertices.length,it=tt,st=0,Z=0,ht=j,pt=z.vertices;ht.setZero(),a.vectorToLocalFrame(C,A,P,it),a.pointToLocalFrame(C,A,ht,ht);var U=ht.dot(it);Z=st=pt[0].dot(it);for(var lt=1;lt<k;lt++){var Q=pt[lt].dot(it);Q>st&&(st=Q),Q<Z&&(Z=Q)}if(Z-=U,st-=U,Z>st){var $=Z;Z=st,st=$}R[0]=st,R[1]=Z}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(u,h,c,d){var f=d,v=[],g=[],m=[],p=[],_=[],x=Math.cos,y=Math.sin;v.push(new o(h*x(0),h*y(0),-c*.5)),p.push(0),v.push(new o(u*x(0),u*y(0),c*.5)),_.push(1);for(var M=0;M<f;M++){var T=2*Math.PI/f*(M+1),B=2*Math.PI/f*(M+.5);M<f-1?(v.push(new o(h*x(T),h*y(T),-c*.5)),p.push(2*M+2),v.push(new o(u*x(T),u*y(T),c*.5)),_.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(f%2===1||M<f/2)&&g.push(new o(x(B),y(B),0))}m.push(_),g.push(new o(0,0,1));for(var L=[],M=0;M<p.length;M++)L.push(p[p.length-M-1]);m.push(L),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,v,m,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),o=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=u;function u(h,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new o,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v<c&&(c=v)}this.minValue=c},u.prototype.updateMaxValue=function(){for(var h=this.data,c=h[0][0],d=0;d!==h.length;d++)for(var f=0;f!==h[d].length;f++){var v=h[d][f];v>c&&(c=v)}this.maxValue=c},u.prototype.setHeightValueAtIndex=function(h,c,d){var f=this.data;f[h][c]=d,this.clearCachedConvexTrianglePillar(h,c,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,c,!0),this.clearCachedConvexTrianglePillar(h-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(h,c-1,!0),this.clearCachedConvexTrianglePillar(h,c-1,!1)),c>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,c-1,!0)},u.prototype.getRectMinMax=function(h,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=h;p<=d;p++)for(var _=c;_<=f;_++){var x=g[p][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(h/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(h,c,d){var f=[];this.getIndexOfPosition(h,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,c,d){return h+"_"+c+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,c,d)]},u.prototype.getConvexTrianglePillar=function(h,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new o,v=new a,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new a);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var x=f.vertices,y=(Math.min(g[h][c],g[h+1][c],g[h][c+1],g[h+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(c+.75)*m,y),x[0].set(.25*m,.25*m,g[h+1][c+1]-y),x[1].set(-.75*m,.25*m,g[h][c+1]-y),x[2].set(.25*m,-.75*m,g[h+1][c]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((h+.25)*m,(c+.25)*m,y),x[0].set(-.25*m,-.25*m,g[h][c]-y),x[1].set(.75*m,-.25*m,g[h+1][c]-y),x[2].set(-.25*m,.75*m,g[h][c+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,c,d,f,v)},u.prototype.calculateLocalInertia=function(h,c){return c=c||new a,c.set(0,0,0),c},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,c=this.elementSize;this.boundingSphereRadius=new a(h.length*c,h[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){return u=u||new o,u.set(0,0,0),u},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,u,h,c){h.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(u,h){return h=h||new o,h},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new o;a.prototype.calculateWorldAABB=function(u,h,c,d){l.set(0,0,1),h.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=u.x),l.y===1&&(d.y=u.y),l.z===1&&(d.z=u.z),l.x===-1&&(c.x=u.x),l.y===-1&&(c.y=u.y),l.z===-1&&(c.z=u.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(o,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,u){u=u||new o;var h=2*l*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,u,h,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];h[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),u=e("../utils/Octree");function h(L,S){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(L),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new l,this.edges=null,this.scale=new o(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var c=new o;h.prototype.updateTree=function(){var L=this.tree;L.reset(),L.aabb.copy(this.aabb);var S=this.scale;L.aabb.lowerBound.x*=1/S.x,L.aabb.lowerBound.y*=1/S.y,L.aabb.lowerBound.z*=1/S.z,L.aabb.upperBound.x*=1/S.x,L.aabb.upperBound.y*=1/S.y,L.aabb.upperBound.z*=1/S.z;for(var E=new l,I=new o,q=new o,D=new o,X=[I,q,D],H=0;H<this.indices.length/3;H++){var ot=H*3;this._getUnscaledVertex(this.indices[ot],I),this._getUnscaledVertex(this.indices[ot+1],q),this._getUnscaledVertex(this.indices[ot+2],D),E.setFromPoints(X),L.insert(E,H)}L.removeEmptyNodes()};var d=new l;h.prototype.getTrianglesInAABB=function(L,S){d.copy(L);var E=this.scale,I=E.x,q=E.y,D=E.z,X=d.lowerBound,H=d.upperBound;return X.x/=I,X.y/=q,X.z/=D,H.x/=I,H.y/=q,H.z/=D,this.tree.aabbQuery(d,S)},h.prototype.setScale=function(L){var S=this.scale.x===this.scale.y===this.scale.z,E=L.x===L.y===L.z;S&&E||this.updateNormals(),this.scale.copy(L),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var L=c,S=this.normals,E=0;E<this.indices.length/3;E++){var I=E*3,q=this.indices[I],D=this.indices[I+1],X=this.indices[I+2];this.getVertex(q,p),this.getVertex(D,_),this.getVertex(X,x),h.computeNormal(_,p,x,L),S[I]=L.x,S[I+1]=L.y,S[I+2]=L.z}},h.prototype.updateEdges=function(){for(var L={},S=function(ot,O){var F=q<D?q+"_"+D:D+"_"+q;L[F]=!0},E=0;E<this.indices.length/3;E++){var I=E*3,q=this.indices[I],D=this.indices[I+1];this.indices[I+2],S(),S(),S()}var X=Object.keys(L);this.edges=new Int16Array(X.length*2);for(var E=0;E<X.length;E++){var H=X[E].split("_");this.edges[2*E]=parseInt(H[0],10),this.edges[2*E+1]=parseInt(H[1],10)}},h.prototype.getEdgeVertex=function(L,S,E){var I=this.edges[L*2+(S?1:0)];this.getVertex(I,E)};var f=new o,v=new o;h.prototype.getEdgeVector=function(L,S){var E=f,I=v;this.getEdgeVertex(L,0,E),this.getEdgeVertex(L,1,I),I.vsub(E,S)};var g=new o,m=new o;h.computeNormal=function(L,S,E,I){S.vsub(L,m),E.vsub(S,g),g.cross(m,I),I.isZero()||I.normalize()};var p=new o,_=new o,x=new o;h.prototype.getVertex=function(L,S){var E=this.scale;return this._getUnscaledVertex(L,S),S.x*=E.x,S.y*=E.y,S.z*=E.z,S},h.prototype._getUnscaledVertex=function(L,S){var E=L*3,I=this.vertices;return S.set(I[E],I[E+1],I[E+2])},h.prototype.getWorldVertex=function(L,S,E,I){return this.getVertex(L,I),a.pointToWorldFrame(S,E,I,I),I},h.prototype.getTriangleVertices=function(L,S,E,I){var q=L*3;this.getVertex(this.indices[q],S),this.getVertex(this.indices[q+1],E),this.getVertex(this.indices[q+2],I)},h.prototype.getNormal=function(L,S){var E=L*3;return S.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var y=new l;h.prototype.calculateLocalInertia=function(L,S){this.computeLocalAABB(y);var E=y.upperBound.x-y.lowerBound.x,I=y.upperBound.y-y.lowerBound.y,q=y.upperBound.z-y.lowerBound.z;return S.set(1/12*L*(2*I*2*I+2*q*2*q),1/12*L*(2*E*2*E+2*q*2*q),1/12*L*(2*I*2*I+2*E*2*E))};var M=new o;h.prototype.computeLocalAABB=function(L){var S=L.lowerBound,E=L.upperBound,I=this.vertices.length;this.vertices;var q=M;this.getVertex(0,q),S.copy(q),E.copy(q);for(var D=0;D!==I;D++)this.getVertex(D,q),q.x<S.x?S.x=q.x:q.x>E.x&&(E.x=q.x),q.y<S.y?S.y=q.y:q.y>E.y&&(E.y=q.y),q.z<S.z?S.z=q.z:q.z>E.z&&(E.z=q.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var L=0,S=this.vertices,E=new o,I=0,q=S.length/3;I!==q;I++){this.getVertex(I,E);var D=E.norm2();D>L&&(L=D)}this.boundingSphereRadius=Math.sqrt(L)},new o;var T=new a,B=new l;h.prototype.calculateWorldAABB=function(L,S,E,I){var q=T,D=B;q.position=L,q.quaternion=S,this.aabb.toWorldFrame(q,D),E.copy(D.lowerBound),I.copy(D.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(L,S,E,I,q){L=L||1,S=S||.5,E=E||8,I=I||6,q=q||Math.PI*2;for(var D=[],X=[],H=0;H<=E;H++)for(var ot=0;ot<=I;ot++){var O=ot/I*q,F=H/E*Math.PI*2,tt=(L+S*Math.cos(F))*Math.cos(O),j=(L+S*Math.cos(F))*Math.sin(O),z=S*Math.sin(F);D.push(tt,j,z)}for(var H=1;H<=E;H++)for(var ot=1;ot<=I;ot++){var P=(I+1)*H+ot-1,C=(I+1)*(H-1)+ot-1,A=(I+1)*(H-1)+ot,R=(I+1)*H+ot;X.push(P,C,R),X.push(C,A,R)}return new h(D,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function o(){r.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new r;var a=[],l=[],u=[];o.prototype.solve=function(h,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,x=h,y,M,T,B,L,S;if(m!==0)for(var E=0;E!==_;E++)p[E].updateSolveMassProperties();var I=l,q=u,D=a;I.length=m,q.length=m,D.length=m;for(var E=0;E!==m;E++){var X=g[E];D[E]=0,q[E]=X.computeB(x),I[E]=1/X.computeC()}if(m!==0){for(var E=0;E!==_;E++){var H=p[E],ot=H.vlambda,O=H.wlambda;ot.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){B=0;for(var F=0;F!==m;F++){var X=g[F];y=q[F],M=I[F],S=D[F],L=X.computeGWlambda(),T=M*(y-L-X.eps*S),S+T<X.minForce?T=X.minForce-S:S+T>X.maxForce&&(T=X.maxForce-S),D[F]+=T,B+=T>0?T:-T,X.addToWlambda(T)}if(B*B<v)break}for(var E=0;E!==_;E++){var H=p[E],tt=H.velocity,j=H.angularVelocity;tt.vadd(H.vlambda,tt),j&&j.vadd(H.wlambda,j)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(o,a){return 0},r.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},r.prototype.removeEquation=function(o){var a=this.equations,l=a.indexOf(o);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),o=e("../objects/Body");function a(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],u=[],h={bodies:[]},c=o.STATIC;function d(p){for(var _=p.length,x=0;x!==_;x++){var y=p[x];if(!y.visited&&!(y.body.type&c))return y}return!1}var f=[];function v(p,_,x,y){for(f.push(p),p.visited=!0,_(p,x,y);f.length;)for(var M=f.pop(),T;T=d(M.children);)T.visited=!0,_(T,x,y),f.push(T)}function g(p,_,x){_.push(p.body);for(var y=p.eqs.length,M=0;M!==y;M++){var T=p.eqs[M];x.indexOf(T)===-1&&x.push(T)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,_){for(var x=l,y=this.nodePool,M=_.bodies,T=this.equations,B=T.length,L=M.length,S=this.subsolver;y.length<L;)y.push(this.createNode());x.length=L;for(var E=0;E<L;E++)x[E]=y[E];for(var E=0;E!==L;E++){var I=x[E];I.body=M[E],I.children.length=0,I.eqs.length=0,I.visited=!1}for(var q=0;q!==B;q++){var D=T[q],E=M.indexOf(D.bi),X=M.indexOf(D.bj),H=x[E],ot=x[X];H.children.push(ot),H.eqs.push(D),ot.children.push(H),ot.eqs.push(D)}var O,F=0,tt=u;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var j=h;O=d(x);){tt.length=0,j.bodies.length=0,v(O,g,j.bodies,tt);var z=tt.length;tt=tt.sort(m);for(var E=0;E!==z;E++)S.addEquation(tt[E]);S.solve(p,j),S.removeAllEquations(),F++}return F};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(o,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[o]===void 0&&(l[o]=[]),l[o].indexOf(a)===-1&&l[o].push(a),this},hasEventListener:function(o,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[o]!==void 0&&l[o].indexOf(a)!==-1},removeEventListener:function(o,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[o]===void 0)return this;var u=l[o].indexOf(a);return u!==-1&&l[o].splice(u,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var a=this._listeners,l=a[o.type];if(l!==void 0){o.target=this;for(var u=0,h=l.length;u<h;u++)l[u].call(this,o)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),o=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new o;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new a({aabb:new r({lowerBound:new o(0,0,0)})}),new a({aabb:new r({lowerBound:new o(1,0,0)})}),new a({aabb:new r({lowerBound:new o(1,1,0)})}),new a({aabb:new r({lowerBound:new o(1,1,1)})}),new a({aabb:new r({lowerBound:new o(0,1,1)})}),new a({aabb:new r({lowerBound:new o(0,0,1)})}),new a({aabb:new r({lowerBound:new o(1,0,1)})}),new a({aabb:new r({lowerBound:new o(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,p.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var h=new r;a.prototype.rayQuery=function(c,d,f){return c.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var o=arguments.length,a=0;a!==o;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(o,a){if(o>a){var l=a;a=o,o=l}return this.data[o+"-"+a]},r.prototype.set=function(o,a,l){if(o>a){var u=a;a=o,o=u}var h=o+"-"+a;this.get(o,a)||this.data.keys.push(h),this.data[h]=l},r.prototype.reset=function(){for(var o=this.data,a=o.keys;a.length>0;){var l=a.pop();delete o[l]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(o,a){o=o||{};for(var l in a)l in o||(o[l]=a[l]);return o}},{}],54:[function(e,n,s){n.exports=a;var r=e("../math/Vec3"),o=e("./Pool");function a(){o.call(this),this.type=r}a.prototype=new o,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),o=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(mt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=mt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(mt,dt,Et,wt,$t,Bt){var Pt;this.contactPointPool.length?(Pt=this.contactPointPool.pop(),Pt.bi=mt,Pt.bj=dt):Pt=new d(mt,dt),Pt.enabled=mt.collisionResponse&&dt.collisionResponse&&Et.collisionResponse&&wt.collisionResponse;var Ft=this.currentContactMaterial;Pt.restitution=Ft.restitution,Pt.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var ct=Et.material||mt.material,It=wt.material||dt.material;return ct&&It&&ct.restitution>=0&&It.restitution>=0&&(Pt.restitution=ct.restitution*It.restitution),Pt.si=$t||Et,Pt.sj=Bt||wt,Pt},v.prototype.createFrictionEquationsFromContact=function(mt,dt){var Et=mt.bi,wt=mt.bj,$t=mt.si,Bt=mt.sj,Pt=this.world,Ft=this.currentContactMaterial,ct=Ft.friction,It=$t.material||Et.material,vt=Bt.material||wt.material;if(It&&vt&&It.friction>=0&&vt.friction>=0&&(ct=It.friction*vt.friction),ct>0){var Tt=ct*Pt.gravity.length(),w=Et.invMass+wt.invMass;w>0&&(w=1/w);var V=this.frictionEquationPool,Y=V.length?V.pop():new f(Et,wt,Tt*w),W=V.length?V.pop():new f(Et,wt,Tt*w);return Y.bi=W.bi=Et,Y.bj=W.bj=wt,Y.minForce=W.minForce=-Tt*w,Y.maxForce=W.maxForce=Tt*w,Y.ri.copy(mt.ri),Y.rj.copy(mt.rj),W.ri.copy(mt.ri),W.rj.copy(mt.rj),mt.ni.tangents(Y.t,W.t),Y.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Pt.dt),W.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Pt.dt),Y.enabled=W.enabled=mt.enabled,dt.push(Y,W),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(mt){var dt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(dt,this.frictionResult)||mt===1)){var Et=this.frictionResult[this.frictionResult.length-2],wt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var $t=dt.bi;dt.bj;for(var Bt=0;Bt!==mt;Bt++)dt=this.result[this.result.length-1-Bt],dt.bodyA!==$t?(g.vadd(dt.ni,g),m.vadd(dt.ri,m),p.vadd(dt.rj,p)):(g.vsub(dt.ni,g),m.vadd(dt.rj,m),p.vadd(dt.ri,p));var Pt=1/mt;m.scale(Pt,Et.ri),p.scale(Pt,Et.rj),wt.ri.copy(Et.ri),wt.rj.copy(Et.rj),g.normalize(),g.tangents(Et.t,wt.t)}};var _=new l,x=new l,y=new h,M=new h;v.prototype.getContacts=function(mt,dt,Et,wt,$t,Bt,Pt){this.contactPointPool=$t,this.frictionEquationPool=Pt,this.result=wt,this.frictionResult=Bt;for(var Ft=y,ct=M,It=_,vt=x,Tt=0,w=mt.length;Tt!==w;Tt++){var V=mt[Tt],Y=dt[Tt],W=null;V.material&&Y.material&&(W=Et.getContactMaterial(V.material,Y.material)||null);for(var nt=0;nt<V.shapes.length;nt++){V.quaternion.mult(V.shapeOrientations[nt],Ft),V.quaternion.vmult(V.shapeOffsets[nt],It),It.vadd(V.position,It);for(var rt=V.shapes[nt],bt=0;bt<Y.shapes.length;bt++){Y.quaternion.mult(Y.shapeOrientations[bt],ct),Y.quaternion.vmult(Y.shapeOffsets[bt],vt),vt.vadd(Y.position,vt);var Nt=Y.shapes[bt];if(!(It.distanceTo(vt)>rt.boundingSphereRadius+Nt.boundingSphereRadius)){var Yt=null;rt.material&&Nt.material&&(Yt=Et.getContactMaterial(rt.material,Nt.material)||null),this.currentContactMaterial=Yt||W||Et.defaultContactMaterial;var Ot=this[rt.type|Nt.type];Ot&&(rt.type<Nt.type?Ot.call(this,rt,Nt,It,vt,Ft,ct,V,Y,rt,Nt):Ot.call(this,Nt,rt,vt,It,ct,Ft,Y,V,rt,Nt))}}}}},v.prototype[o.types.BOX|o.types.BOX]=v.prototype.boxBox=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){mt.convexPolyhedronRepresentation.material=mt.material,dt.convexPolyhedronRepresentation.material=dt.material,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.convexConvex(mt.convexPolyhedronRepresentation,dt.convexPolyhedronRepresentation,Et,wt,$t,Bt,Pt,Ft,mt,dt)},v.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){mt.convexPolyhedronRepresentation.material=mt.material,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,this.convexConvex(mt.convexPolyhedronRepresentation,dt,Et,wt,$t,Bt,Pt,Ft,mt,dt)},v.prototype[o.types.BOX|o.types.PARTICLE]=v.prototype.boxParticle=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){mt.convexPolyhedronRepresentation.material=mt.material,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,this.convexParticle(mt.convexPolyhedronRepresentation,dt,Et,wt,$t,Bt,Pt,Ft,mt,dt)},v.prototype[o.types.SPHERE]=v.prototype.sphereSphere=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=this.createContactEquation(Pt,Ft,mt,dt);wt.vsub(Et,ct.ni),ct.ni.normalize(),ct.ri.copy(ct.ni),ct.rj.copy(ct.ni),ct.ri.mult(mt.radius,ct.ri),ct.rj.mult(-dt.radius,ct.rj),ct.ri.vadd(Et,ct.ri),ct.ri.vsub(Pt.position,ct.ri),ct.rj.vadd(wt,ct.rj),ct.rj.vsub(Ft.position,ct.rj),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult)};var T=new l,B=new l,L=new l;v.prototype[o.types.PLANE|o.types.TRIMESH]=v.prototype.planeTrimesh=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=new l,It=T;It.set(0,0,1),$t.vmult(It,It);for(var vt=0;vt<dt.vertices.length/3;vt++){dt.getVertex(vt,ct);var Tt=new l;Tt.copy(ct),u.pointToWorldFrame(wt,Bt,Tt,ct);var w=B;ct.vsub(Et,w);var V=It.dot(w);if(V<=0){var Y=this.createContactEquation(Pt,Ft,mt,dt);Y.ni.copy(It);var W=L;It.scale(w.dot(It),W),ct.vsub(W,W),Y.ri.copy(W),Y.ri.vsub(Pt.position,Y.ri),Y.rj.copy(ct),Y.rj.vsub(Ft.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}};var S=new l,E=new l;new l;var I=new l,q=new l,D=new l,X=new l,H=new l,ot=new l,O=new l,F=new l,tt=new l,j=new l,z=new l,P=new r,C=[];v.prototype[o.types.SPHERE|o.types.TRIMESH]=v.prototype.sphereTrimesh=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=D,It=X,vt=H,Tt=ot,w=O,V=F,Y=P,W=q,nt=E,rt=C;u.pointToLocalFrame(wt,Bt,Et,w);var bt=mt.radius;Y.lowerBound.set(w.x-bt,w.y-bt,w.z-bt),Y.upperBound.set(w.x+bt,w.y+bt,w.z+bt),dt.getTrianglesInAABB(Y,rt);for(var Nt=I,Yt=mt.radius*mt.radius,Ot=0;Ot<rt.length;Ot++)for(var Ut=0;Ut<3;Ut++)if(dt.getVertex(dt.indices[rt[Ot]*3+Ut],Nt),Nt.vsub(w,nt),nt.norm2()<=Yt){W.copy(Nt),u.pointToWorldFrame(wt,Bt,W,Nt),Nt.vsub(Et,nt);var Lt=this.createContactEquation(Pt,Ft,mt,dt);Lt.ni.copy(nt),Lt.ni.normalize(),Lt.ri.copy(Lt.ni),Lt.ri.scale(mt.radius,Lt.ri),Lt.ri.vadd(Et,Lt.ri),Lt.ri.vsub(Pt.position,Lt.ri),Lt.rj.copy(Nt),Lt.rj.vsub(Ft.position,Lt.rj),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}for(var Ot=0;Ot<rt.length;Ot++)for(var Ut=0;Ut<3;Ut++){dt.getVertex(dt.indices[rt[Ot]*3+Ut],ct),dt.getVertex(dt.indices[rt[Ot]*3+(Ut+1)%3],It),It.vsub(ct,vt),w.vsub(It,V);var oe=V.dot(vt);w.vsub(ct,V);var ue=V.dot(vt);if(ue>0&&oe<0){w.vsub(ct,V),Tt.copy(vt),Tt.normalize(),ue=V.dot(Tt),Tt.scale(ue,V),V.vadd(ct,V);var _e=V.distanceTo(w);if(_e<mt.radius){var Lt=this.createContactEquation(Pt,Ft,mt,dt);V.vsub(w,Lt.ni),Lt.ni.normalize(),Lt.ni.scale(mt.radius,Lt.ri),u.pointToWorldFrame(wt,Bt,V,V),V.vsub(Ft.position,Lt.rj),u.vectorToWorldFrame(Bt,Lt.ni,Lt.ni),u.vectorToWorldFrame(Bt,Lt.ri,Lt.ri),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}}}for(var Pe=tt,he=j,jt=z,tn=S,Ot=0,ne=rt.length;Ot!==ne;Ot++){dt.getTriangleVertices(rt[Ot],Pe,he,jt),dt.getNormal(rt[Ot],tn),w.vsub(Pe,V);var _e=V.dot(tn);if(tn.scale(_e,V),w.vsub(V,V),_e=V.distanceTo(w),a.pointInTriangle(V,Pe,he,jt)&&_e<mt.radius){var Lt=this.createContactEquation(Pt,Ft,mt,dt);V.vsub(w,Lt.ni),Lt.ni.normalize(),Lt.ni.scale(mt.radius,Lt.ri),u.pointToWorldFrame(wt,Bt,V,V),V.vsub(Ft.position,Lt.rj),u.vectorToWorldFrame(Bt,Lt.ni,Lt.ni),u.vectorToWorldFrame(Bt,Lt.ri,Lt.ri),this.result.push(Lt),this.createFrictionEquationsFromContact(Lt,this.frictionResult)}}rt.length=0};var A=new l,R=new l;v.prototype[o.types.SPHERE|o.types.PLANE]=v.prototype.spherePlane=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=this.createContactEquation(Pt,Ft,mt,dt);if(ct.ni.set(0,0,1),Bt.vmult(ct.ni,ct.ni),ct.ni.negate(ct.ni),ct.ni.normalize(),ct.ni.mult(mt.radius,ct.ri),Et.vsub(wt,A),ct.ni.mult(ct.ni.dot(A),R),A.vsub(R,ct.rj),-A.dot(ct.ni)<=mt.radius){var It=ct.ri,vt=ct.rj;It.vadd(Et,It),It.vsub(Pt.position,It),vt.vadd(wt,vt),vt.vsub(Ft.position,vt),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult)}};var k=new l,it=new l,st=new l;function Z(mt,dt,Et){for(var wt=null,$t=mt.length,Bt=0;Bt!==$t;Bt++){var Pt=mt[Bt],Ft=k;mt[(Bt+1)%$t].vsub(Pt,Ft);var ct=it;Ft.cross(dt,ct);var It=st;Et.vsub(Pt,It);var vt=ct.dot(It);if(wt===null||vt>0&&wt===!0||vt<=0&&wt===!1){wt===null&&(wt=vt>0);continue}else return!1}return!0}var ht=new l,pt=new l,U=new l,lt=new l,Q=[new l,new l,new l,new l,new l,new l],$=new l,J=new l,Rt=new l,xt=new l;v.prototype[o.types.SPHERE|o.types.BOX]=v.prototype.sphereBox=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=this.v3pool,It=Q;Et.vsub(wt,ht),dt.getSideNormals(It,Bt);for(var vt=mt.radius,Tt=!1,w=J,V=Rt,Y=xt,W=null,nt=0,rt=0,bt=0,Nt=null,Yt=0,Ot=It.length;Yt!==Ot&&Tt===!1;Yt++){var Ut=pt;Ut.copy(It[Yt]);var Lt=Ut.norm();Ut.normalize();var oe=ht.dot(Ut);if(oe<Lt+vt&&oe>0){var ue=U,_e=lt;ue.copy(It[(Yt+1)%3]),_e.copy(It[(Yt+2)%3]);var Pe=ue.norm(),he=_e.norm();ue.normalize(),_e.normalize();var jt=ht.dot(ue),tn=ht.dot(_e);if(jt<Pe&&jt>-Pe&&tn<he&&tn>-he){var be=Math.abs(oe-Lt-vt);(Nt===null||be<Nt)&&(Nt=be,rt=jt,bt=tn,W=Lt,w.copy(Ut),V.copy(ue),Y.copy(_e),nt++)}}}if(nt){Tt=!0;var te=this.createContactEquation(Pt,Ft,mt,dt);w.mult(-vt,te.ri),te.ni.copy(w),te.ni.negate(te.ni),w.mult(W,w),V.mult(rt,V),w.vadd(V,w),Y.mult(bt,Y),w.vadd(Y,te.rj),te.ri.vadd(Et,te.ri),te.ri.vsub(Pt.position,te.ri),te.rj.vadd(wt,te.rj),te.rj.vsub(Ft.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}for(var ne=ct.get(),De=$,Fe=0;Fe!==2&&!Tt;Fe++)for(var we=0;we!==2&&!Tt;we++)for(var Re=0;Re!==2&&!Tt;Re++)if(ne.set(0,0,0),Fe?ne.vadd(It[0],ne):ne.vsub(It[0],ne),we?ne.vadd(It[1],ne):ne.vsub(It[1],ne),Re?ne.vadd(It[2],ne):ne.vsub(It[2],ne),wt.vadd(ne,De),De.vsub(Et,De),De.norm2()<vt*vt){Tt=!0;var te=this.createContactEquation(Pt,Ft,mt,dt);te.ri.copy(De),te.ri.normalize(),te.ni.copy(te.ri),te.ri.mult(vt,te.ri),te.rj.copy(ne),te.ri.vadd(Et,te.ri),te.ri.vsub(Pt.position,te.ri),te.rj.vadd(wt,te.rj),te.rj.vsub(Ft.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}ct.release(ne),ne=null;for(var ge=ct.get(),Be=ct.get(),te=ct.get(),ye=ct.get(),be=ct.get(),_n=It.length,Fe=0;Fe!==_n&&!Tt;Fe++)for(var we=0;we!==_n&&!Tt;we++)if(Fe%3!==we%3){It[we].cross(It[Fe],ge),ge.normalize(),It[Fe].vadd(It[we],Be),te.copy(Et),te.vsub(Be,te),te.vsub(wt,te);var gn=te.dot(ge);ge.mult(gn,ye);for(var Re=0;Re===Fe%3||Re===we%3;)Re++;be.copy(Et),be.vsub(ye,be),be.vsub(Be,be),be.vsub(wt,be);var Pl=Math.abs(gn),Ll=be.norm();if(Pl<It[Re].norm()&&Ll<vt){Tt=!0;var Se=this.createContactEquation(Pt,Ft,mt,dt);Be.vadd(ye,Se.rj),Se.rj.copy(Se.rj),be.negate(Se.ni),Se.ni.normalize(),Se.ri.copy(Se.rj),Se.ri.vadd(wt,Se.ri),Se.ri.vsub(Et,Se.ri),Se.ri.normalize(),Se.ri.mult(vt,Se.ri),Se.ri.vadd(Et,Se.ri),Se.ri.vsub(Pt.position,Se.ri),Se.rj.vadd(wt,Se.rj),Se.rj.vsub(Ft.position,Se.rj),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}}ct.release(ge,Be,te,ye,be)};var Ct=new l,Mt=new l,Wt=new l,Jt=new l,N=new l,b=new l,at=new l,_t=new l,gt=new l,G=new l;v.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=this.v3pool;Et.vsub(wt,Ct);for(var It=dt.faceNormals,vt=dt.faces,Tt=dt.vertices,w=mt.radius,V=0;V!==Tt.length;V++){var Y=Tt[V],W=N;Bt.vmult(Y,W),wt.vadd(W,W);var nt=Jt;if(W.vsub(Et,nt),nt.norm2()<w*w){bt=!0;var rt=this.createContactEquation(Pt,Ft,mt,dt);rt.ri.copy(nt),rt.ri.normalize(),rt.ni.copy(rt.ri),rt.ri.mult(w,rt.ri),W.vsub(wt,rt.rj),rt.ri.vadd(Et,rt.ri),rt.ri.vsub(Pt.position,rt.ri),rt.rj.vadd(wt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);return}}for(var bt=!1,V=0,Nt=vt.length;V!==Nt&&bt===!1;V++){var Yt=It[V],Ot=vt[V],Ut=b;Bt.vmult(Yt,Ut);var Lt=at;Bt.vmult(Tt[Ot[0]],Lt),Lt.vadd(wt,Lt);var oe=_t;Ut.mult(-w,oe),Et.vadd(oe,oe);var ue=gt;oe.vsub(Lt,ue);var _e=ue.dot(Ut),Pe=G;if(Et.vsub(Lt,Pe),_e<0&&Pe.dot(Ut)>0){for(var he=[],jt=0,tn=Ot.length;jt!==tn;jt++){var ne=ct.get();Bt.vmult(Tt[Ot[jt]],ne),wt.vadd(ne,ne),he.push(ne)}if(Z(he,Ut,Et)){bt=!0;var rt=this.createContactEquation(Pt,Ft,mt,dt);Ut.mult(-w,rt.ri),Ut.negate(rt.ni);var De=ct.get();Ut.mult(-_e,De);var Fe=ct.get();Ut.mult(-w,Fe),Et.vsub(wt,rt.rj),rt.rj.vadd(Fe,rt.rj),rt.rj.vadd(De,rt.rj),rt.rj.vadd(wt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),rt.ri.vadd(Et,rt.ri),rt.ri.vsub(Pt.position,rt.ri),ct.release(De),ct.release(Fe),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(var jt=0,we=he.length;jt!==we;jt++)ct.release(he[jt]);return}else for(var jt=0;jt!==Ot.length;jt++){var Re=ct.get(),ge=ct.get();Bt.vmult(Tt[Ot[(jt+1)%Ot.length]],Re),Bt.vmult(Tt[Ot[(jt+2)%Ot.length]],ge),wt.vadd(Re,Re),wt.vadd(ge,ge);var Be=Mt;ge.vsub(Re,Be);var te=Wt;Be.unit(te);var ye=ct.get(),be=ct.get();Et.vsub(Re,be);var _n=be.dot(te);te.mult(_n,ye),ye.vadd(Re,ye);var gn=ct.get();if(ye.vsub(Et,gn),_n>0&&_n*_n<Be.norm2()&&gn.norm2()<w*w){var rt=this.createContactEquation(Pt,Ft,mt,dt);ye.vsub(wt,rt.rj),ye.vsub(Et,rt.ni),rt.ni.normalize(),rt.ni.mult(w,rt.ri),rt.rj.vadd(wt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),rt.ri.vadd(Et,rt.ri),rt.ri.vsub(Pt.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(var jt=0,we=he.length;jt!==we;jt++)ct.release(he[jt]);ct.release(Re),ct.release(ge),ct.release(ye),ct.release(gn),ct.release(be);return}ct.release(Re),ct.release(ge),ct.release(ye),ct.release(gn),ct.release(be)}for(var jt=0,we=he.length;jt!==we;jt++)ct.release(he[jt])}}},new l,new l,v.prototype[o.types.PLANE|o.types.BOX]=v.prototype.planeBox=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){dt.convexPolyhedronRepresentation.material=dt.material,dt.convexPolyhedronRepresentation.collisionResponse=dt.collisionResponse,this.planeConvex(mt,dt.convexPolyhedronRepresentation,Et,wt,$t,Bt,Pt,Ft)};var yt=new l,St=new l,ft=new l,kt=new l;v.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=yt,It=St;It.set(0,0,1),$t.vmult(It,It);for(var vt=0,Tt=ft,w=0;w!==dt.vertices.length;w++){ct.copy(dt.vertices[w]),Bt.vmult(ct,ct),wt.vadd(ct,ct),ct.vsub(Et,Tt);var V=It.dot(Tt);if(V<=0){var Y=this.createContactEquation(Pt,Ft,mt,dt),W=kt;It.mult(It.dot(Tt),W),ct.vsub(W,W),W.vsub(Et,Y.ri),Y.ni.copy(It),ct.vsub(wt,Y.rj),Y.ri.vadd(Et,Y.ri),Y.ri.vsub(Pt.position,Y.ri),Y.rj.vadd(wt,Y.rj),Y.rj.vsub(Ft.position,Y.rj),this.result.push(Y),vt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Y,this.frictionResult)}}this.enableFrictionReduction&&vt&&this.createFrictionFromAverage(vt)};var Xt=new l,qt=new l;v.prototype[o.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(mt,dt,Et,wt,$t,Bt,Pt,Ft,ct,It,vt,Tt){var w=Xt;if(!(Et.distanceTo(wt)>mt.boundingSphereRadius+dt.boundingSphereRadius)&&mt.findSeparatingAxis(dt,Et,$t,wt,Bt,w,vt,Tt)){var V=[],Y=qt;mt.clipAgainstHull(Et,$t,dt,wt,Bt,w,-100,100,V);for(var W=0,nt=0;nt!==V.length;nt++){var rt=this.createContactEquation(Pt,Ft,mt,dt,ct,It),bt=rt.ri,Nt=rt.rj;w.negate(rt.ni),V[nt].normal.negate(Y),Y.mult(V[nt].depth,Y),V[nt].point.vadd(Y,bt),Nt.copy(V[nt].point),bt.vsub(Et,bt),Nt.vsub(wt,Nt),bt.vadd(Et,bt),bt.vsub(Pt.position,bt),Nt.vadd(wt,Nt),Nt.vsub(Ft.position,Nt),this.result.push(rt),W++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(rt,this.frictionResult)}this.enableFrictionReduction&&W&&this.createFrictionFromAverage(W)}};var Zt=new l,Gt=new l,Kt=new l;v.prototype[o.types.PLANE|o.types.PARTICLE]=v.prototype.planeParticle=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=Zt;ct.set(0,0,1),Pt.quaternion.vmult(ct,ct);var It=Gt;wt.vsub(Pt.position,It);var vt=ct.dot(It);if(vt<=0){var Tt=this.createContactEquation(Ft,Pt,dt,mt);Tt.ni.copy(ct),Tt.ni.negate(Tt.ni),Tt.ri.set(0,0,0);var w=Kt;ct.mult(ct.dot(wt),w),wt.vsub(w,w),Tt.rj.copy(w),this.result.push(Tt),this.createFrictionEquationsFromContact(Tt,this.frictionResult)}};var Qt=new l;v.prototype[o.types.PARTICLE|o.types.SPHERE]=v.prototype.sphereParticle=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=Qt;ct.set(0,0,1),wt.vsub(Et,ct);var It=ct.norm2();if(It<=mt.radius*mt.radius){var vt=this.createContactEquation(Ft,Pt,dt,mt);ct.normalize(),vt.rj.copy(ct),vt.rj.mult(mt.radius,vt.rj),vt.ni.copy(ct),vt.ni.negate(vt.ni),vt.ri.set(0,0,0),this.result.push(vt),this.createFrictionEquationsFromContact(vt,this.frictionResult)}};var K=new h,Dt=new l;new l;var ut=new l,At=new l,zt=new l;v.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=-1,It=ut,vt=zt,Tt=null,w=Dt;if(w.copy(wt),w.vsub(Et,w),$t.conjugate(K),K.vmult(w,w),mt.pointIsInside(w)){mt.worldVerticesNeedsUpdate&&mt.computeWorldVertices(Et,$t),mt.worldFaceNormalsNeedsUpdate&&mt.computeWorldFaceNormals($t);for(var V=0,Y=mt.faces.length;V!==Y;V++){var W=[mt.worldVertices[mt.faces[V][0]]],nt=mt.worldFaceNormals[V];wt.vsub(W[0],At);var rt=-nt.dot(At);(Tt===null||Math.abs(rt)<Math.abs(Tt))&&(Tt=rt,ct=V,It.copy(nt))}if(ct!==-1){var bt=this.createContactEquation(Ft,Pt,dt,mt);It.mult(Tt,vt),vt.vadd(wt,vt),vt.vsub(Et,vt),bt.rj.copy(vt),It.negate(bt.ni),bt.ri.set(0,0,0);var Nt=bt.ri,Yt=bt.rj;Nt.vadd(wt,Nt),Nt.vsub(Ft.position,Nt),Yt.vadd(Et,Yt),Yt.vsub(Pt.position,Yt),this.result.push(bt),this.createFrictionEquationsFromContact(bt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[o.types.BOX|o.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){mt.convexPolyhedronRepresentation.material=mt.material,mt.convexPolyhedronRepresentation.collisionResponse=mt.collisionResponse,this.convexHeightfield(mt.convexPolyhedronRepresentation,dt,Et,wt,$t,Bt,Pt,Ft)};var ie=new l,fe=new l,pe=[0];v.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=dt.data,It=dt.elementSize,vt=mt.boundingSphereRadius,Tt=fe,w=pe,V=ie;u.pointToLocalFrame(wt,Bt,Et,V);var Y=Math.floor((V.x-vt)/It)-1,W=Math.ceil((V.x+vt)/It)+1,nt=Math.floor((V.y-vt)/It)-1,rt=Math.ceil((V.y+vt)/It)+1;if(!(W<0||rt<0||Y>ct.length||nt>ct[0].length)){Y<0&&(Y=0),W<0&&(W=0),nt<0&&(nt=0),rt<0&&(rt=0),Y>=ct.length&&(Y=ct.length-1),W>=ct.length&&(W=ct.length-1),rt>=ct[0].length&&(rt=ct[0].length-1),nt>=ct[0].length&&(nt=ct[0].length-1);var bt=[];dt.getRectMinMax(Y,nt,W,rt,bt);var Nt=bt[0],Yt=bt[1];if(!(V.z-vt>Yt||V.z+vt<Nt))for(var Ot=Y;Ot<W;Ot++)for(var Ut=nt;Ut<rt;Ut++)dt.getConvexTrianglePillar(Ot,Ut,!1),u.pointToWorldFrame(wt,Bt,dt.pillarOffset,Tt),Et.distanceTo(Tt)<dt.pillarConvex.boundingSphereRadius+mt.boundingSphereRadius&&this.convexConvex(mt,dt.pillarConvex,Et,Tt,$t,Bt,Pt,Ft,null,null,w,null),dt.getConvexTrianglePillar(Ot,Ut,!0),u.pointToWorldFrame(wt,Bt,dt.pillarOffset,Tt),Et.distanceTo(Tt)<dt.pillarConvex.boundingSphereRadius+mt.boundingSphereRadius&&this.convexConvex(mt,dt.pillarConvex,Et,Tt,$t,Bt,Pt,Ft,null,null,w,null)}};var Ge=new l,ee=new l;v.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(mt,dt,Et,wt,$t,Bt,Pt,Ft){var ct=dt.data,It=mt.radius,vt=dt.elementSize,Tt=ee,w=Ge;u.pointToLocalFrame(wt,Bt,Et,w);var V=Math.floor((w.x-It)/vt)-1,Y=Math.ceil((w.x+It)/vt)+1,W=Math.floor((w.y-It)/vt)-1,nt=Math.ceil((w.y+It)/vt)+1;if(!(Y<0||nt<0||V>ct.length||nt>ct[0].length)){V<0&&(V=0),Y<0&&(Y=0),W<0&&(W=0),nt<0&&(nt=0),V>=ct.length&&(V=ct.length-1),Y>=ct.length&&(Y=ct.length-1),nt>=ct[0].length&&(nt=ct[0].length-1),W>=ct[0].length&&(W=ct[0].length-1);var rt=[];dt.getRectMinMax(V,W,Y,nt,rt);var bt=rt[0],Nt=rt[1];if(!(w.z-It>Nt||w.z+It<bt))for(var Yt=this.result,Ot=V;Ot<Y;Ot++)for(var Ut=W;Ut<nt;Ut++){var Lt=Yt.length;dt.getConvexTrianglePillar(Ot,Ut,!1),u.pointToWorldFrame(wt,Bt,dt.pillarOffset,Tt),Et.distanceTo(Tt)<dt.pillarConvex.boundingSphereRadius+mt.boundingSphereRadius&&this.sphereConvex(mt,dt.pillarConvex,Et,Tt,$t,Bt,Pt,Ft),dt.getConvexTrianglePillar(Ot,Ut,!0),u.pointToWorldFrame(wt,Bt,dt.pillarOffset,Tt),Et.distanceTo(Tt)<dt.pillarConvex.boundingSphereRadius+mt.boundingSphereRadius&&this.sphereConvex(mt,dt.pillarConvex,Et,Tt,$t,Bt,Pt,Ft);var oe=Yt.length-Lt;if(oe>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=y;var r=e("../shapes/Shape"),o=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new p;var M=new _;if(y.prototype.getContactMaterial=function(F,tt){return this.contactMaterialTable.get(F.id,tt.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var F=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=F,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(F){this.bodies.indexOf(F)===-1&&(F.index=this.bodies.length,this.bodies.push(F),F.world=this,F.initPosition.copy(F.position),F.initVelocity.copy(F.velocity),F.timeLastSleepy=this.time,F instanceof v&&(F.initAngularVelocity.copy(F.angularVelocity),F.initQuaternion.copy(F.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=F,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(F){this.constraints.push(F)},y.prototype.removeConstraint=function(F){var tt=this.constraints.indexOf(F);tt!==-1&&this.constraints.splice(tt,1)},y.prototype.rayTest=function(F,tt,j){j instanceof m?this.raycastClosest(F,tt,{skipBackfaces:!0},j):this.raycastAll(F,tt,{skipBackfaces:!0},j)},y.prototype.raycastAll=function(F,tt,j,z){return j.mode=_.ALL,j.from=F,j.to=tt,j.callback=z,M.intersectWorld(this,j)},y.prototype.raycastAny=function(F,tt,j,z){return j.mode=_.ANY,j.from=F,j.to=tt,j.result=z,M.intersectWorld(this,j)},y.prototype.raycastClosest=function(F,tt,j,z){return j.mode=_.CLOSEST,j.from=F,j.to=tt,j.result=z,M.intersectWorld(this,j)},y.prototype.remove=function(F){F.world=null;var tt=this.bodies.length-1,j=this.bodies,z=j.indexOf(F);if(z!==-1){j.splice(z,1);for(var P=0;P!==j.length;P++)j[P].index=P;this.collisionMatrix.setNumObjects(tt),this.removeBodyEvent.body=F,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(F){this.materials.push(F)},y.prototype.addContactMaterial=function(F){this.contactmaterials.push(F),this.contactMaterialTable.set(F.materials[0].id,F.materials[1].id,F)},typeof performance>"u"&&(performance={}),!performance.now){var T=Date.now();performance.timing&&performance.timing.navigationStart&&(T=performance.timing.navigationStart),performance.now=function(){return Date.now()-T}}var B=new o;y.prototype.step=function(F,tt,j){if(j=j||10,tt=tt||0,tt===0)this.internalStep(F),this.time+=F;else{var z=Math.floor((this.time+tt)/F)-Math.floor(this.time/F);z=Math.min(z,j);for(var P=performance.now(),C=0;C!==z&&(this.internalStep(F),!(performance.now()-P>F*1e3));C++);this.time+=tt;for(var A=this.time%F,R=A/F,k=B,it=this.bodies,st=0;st!==it.length;st++){var Z=it[st];Z.type!==v.STATIC&&Z.sleepState!==v.SLEEPING?(Z.position.vsub(Z.previousPosition,k),k.scale(R,k),Z.position.vadd(k,Z.interpolatedPosition)):(Z.interpolatedPosition.copy(Z.position),Z.interpolatedQuaternion.copy(Z.quaternion))}}};var L={type:"postStep"},S={type:"preStep"},E={type:"collide",body:null,contact:null},I=[],q=[],D=[],X=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new a;var H=new a,ot=new a,O=new o;y.prototype.internalStep=function(F){this.dt=F;var tt=this.contacts,j=D,z=X,P=this.numObjects(),C=this.bodies,A=this.solver,R=this.gravity,k=this.doProfiling,it=this.profile,st=v.DYNAMIC,Z,ht=this.constraints,pt=q;R.norm();var U=R.x,lt=R.y,Q=R.z,$=0;for(k&&(Z=performance.now()),$=0;$!==P;$++){var J=C[$];if(J.type&st){var Rt=J.force,xt=J.mass;Rt.x+=xt*U,Rt.y+=xt*lt,Rt.z+=xt*Q}}for(var $=0,Ct=this.subsystems.length;$!==Ct;$++)this.subsystems[$].update();k&&(Z=performance.now()),j.length=0,z.length=0,this.broadphase.collisionPairs(this,j,z),k&&(it.broadphase=performance.now()-Z);var Xt=ht.length;for($=0;$!==Xt;$++){var Mt=ht[$];if(!Mt.collideConnected)for(var Wt=j.length-1;Wt>=0;Wt-=1)(Mt.bodyA===j[Wt]&&Mt.bodyB===z[Wt]||Mt.bodyB===j[Wt]&&Mt.bodyA===z[Wt])&&(j.splice(Wt,1),z.splice(Wt,1))}this.collisionMatrixTick(),k&&(Z=performance.now());var Jt=I,N=tt.length;for($=0;$!==N;$++)Jt.push(tt[$]);tt.length=0;var b=this.frictionEquations.length;for($=0;$!==b;$++)pt.push(this.frictionEquations[$]);this.frictionEquations.length=0,this.narrowphase.getContacts(j,z,this,tt,Jt,this.frictionEquations,pt),k&&(it.narrowphase=performance.now()-Z),k&&(Z=performance.now());for(var $=0;$<this.frictionEquations.length;$++)A.addEquation(this.frictionEquations[$]);for(var at=tt.length,_t=0;_t!==at;_t++){var Mt=tt[_t],J=Mt.bi,gt=Mt.bj;Mt.si,Mt.sj;var G;if(J.material&&gt.material?G=this.getContactMaterial(J.material,gt.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,J.material&&gt.material&&(J.material.friction>=0&&gt.material.friction>=0&&J.material.friction*gt.material.friction,J.material.restitution>=0&&gt.material.restitution>=0&&(Mt.restitution=J.material.restitution*gt.material.restitution)),A.addEquation(Mt),J.allowSleep&&J.type===v.DYNAMIC&&J.sleepState===v.SLEEPING&&gt.sleepState===v.AWAKE&&gt.type!==v.STATIC){var yt=gt.velocity.norm2()+gt.angularVelocity.norm2(),St=Math.pow(gt.sleepSpeedLimit,2);yt>=St*2&&(J._wakeUpAfterNarrowphase=!0)}if(gt.allowSleep&&gt.type===v.DYNAMIC&&gt.sleepState===v.SLEEPING&&J.sleepState===v.AWAKE&&J.type!==v.STATIC){var ft=J.velocity.norm2()+J.angularVelocity.norm2(),kt=Math.pow(J.sleepSpeedLimit,2);ft>=kt*2&&(gt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(J,gt,!0),this.collisionMatrixPrevious.get(J,gt)||(E.body=gt,E.contact=Mt,J.dispatchEvent(E),E.body=J,gt.dispatchEvent(E))}for(k&&(it.makeContactConstraints=performance.now()-Z,Z=performance.now()),$=0;$!==P;$++){var J=C[$];J._wakeUpAfterNarrowphase&&(J.wakeUp(),J._wakeUpAfterNarrowphase=!1)}var Xt=ht.length;for($=0;$!==Xt;$++){var Mt=ht[$];Mt.update();for(var Wt=0,qt=Mt.equations.length;Wt!==qt;Wt++){var Zt=Mt.equations[Wt];A.addEquation(Zt)}}A.solve(F,this),k&&(it.solve=performance.now()-Z),A.removeAllEquations();var Gt=Math.pow;for($=0;$!==P;$++){var J=C[$];if(J.type&st){var Kt=Gt(1-J.linearDamping,F),Qt=J.velocity;Qt.mult(Kt,Qt);var K=J.angularVelocity;if(K){var Dt=Gt(1-J.angularDamping,F);K.mult(Dt,K)}}}for(this.dispatchEvent(S),$=0;$!==P;$++){var J=C[$];J.preStep&&J.preStep.call(J)}k&&(Z=performance.now());var ut=H,At=ot,zt=this.stepnumber,ie=v.DYNAMIC|v.KINEMATIC,fe=zt%(this.quatNormalizeSkip+1)===0,pe=this.quatNormalizeFast,Ge=F*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,$=0;$!==P;$++){var ee=C[$],mt=ee.force,dt=ee.torque;if(ee.type&ie&&ee.sleepState!==v.SLEEPING){var Et=ee.velocity,wt=ee.angularVelocity,$t=ee.position,Bt=ee.quaternion,Pt=ee.invMass,Ft=ee.invInertiaWorld;Et.x+=mt.x*Pt*F,Et.y+=mt.y*Pt*F,Et.z+=mt.z*Pt*F,ee.angularVelocity&&(Ft.vmult(dt,O),O.mult(F,O),O.vadd(wt,wt)),$t.x+=Et.x*F,$t.y+=Et.y*F,$t.z+=Et.z*F,ee.angularVelocity&&(ut.set(wt.x,wt.y,wt.z,0),ut.mult(Bt,At),Bt.x+=Ge*At.x,Bt.y+=Ge*At.y,Bt.z+=Ge*At.z,Bt.w+=Ge*At.w,fe&&(pe?Bt.normalizeFast():Bt.normalize())),ee.aabb&&(ee.aabbNeedsUpdate=!0),ee.updateInertiaWorld&&ee.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,k&&(it.integrate=performance.now()-Z),this.time+=F,this.stepnumber+=1,this.dispatchEvent(L),$=0;$!==P;$++){var J=C[$],ct=J.postStep;ct&&ct.call(J)}if(this.allowSleep)for($=0;$!==P;$++)C[$].sleepTick(this.time)},y.prototype.clearForces=function(){for(var F=this.bodies,tt=F.length,j=0;j!==tt;j++){var z=F[j];z.force,z.torque,z.force.set(0,0,0),z.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Pm);an.enabled=!1;var Ye=0;const Qs=document.querySelector("canvas.webgl"),ln=new Wn,xe=new Wn,Fn=new Wn,Tl=new Wn,Hr=new Wn,Dn=new Wn,Zi=new Wn,rr=new Wn,to=document.createElement("p");to.textContent="Contact me through my email: json10@crimson.ua.edu or phone: 615-651-9709";to.style.color="white";const Kn=new Rm(to);rr.add(Kn);const Te=new Sm,Lm=new bl,me=new Vt;new Em(5);Lm.load("/fonts/helvetiker_regular.typeface.json",i=>{const t=new Ca,e=t.load("/photos/Photo.png"),n=new Ui(10,10,1,1),s=new Me({map:e}),r=new ce(n,s);r.rotation.y=Math.PI,r.position.x=0,r.position.y=12,r.position.z=0,s.side=Oe,Fn.add(r);const o={};o.count=15e3,o.size=.09,o.radius=100,o.branches=3,o.spin=2,o.randomness=.4,o.randomnessPower=3,o.insideColor="#ff6030",o.outsideColor="#1b3984";let a=null,l=null,u=null;(()=>{u!==null&&(a.dispose(),l.dispose(),ln.add(u)),a=new Qe;const vt=new Float32Array(o.count*3),Tt=new Float32Array(o.count*3),w=new de(o.insideColor),V=new de(o.outsideColor);for(let Y=0;Y<o.count;Y++){const W=Y*1,nt=Math.random()*o.radius,rt=nt*o.spin,bt=Y%o.branches/o.branches*Math.PI*2,Nt=Math.pow(Math.random(),o.randomnessPower)*(Math.random()<.5?1:-1)*o.randomness*nt,Yt=Math.pow(Math.random(),o.randomnessPower)*(Math.random()<.5?1:-1)*o.randomness*nt,Ot=Math.pow(Math.random(),o.randomnessPower)*(Math.random()<.5?1:-1)*o.randomness*nt;vt[W]=Math.cos(bt+rt)*nt+Nt,vt[W+1]=Yt,vt[W+2]=Math.sin(bt+rt)*nt+Ot;const Ut=w.clone();Ut.lerp(V,nt/o.radius),Tt[W]=Ut.r,Tt[W+1]=Ut.g,Tt[W+2]=Ut.b}a.setAttribute("position",new Ke(vt,3)),a.setAttribute("color",new Ke(Tt,3)),l=new Os({size:o.size,sizeAttenuation:!0,depthWrite:!1,blending:Ci,vertexColors:!0}),setInterval(()=>{l.size=Math.random()*.08},Math.random()*5e3),u=new Ea(a,l),ln.add(u)})();const c=new Ue("Welcome to my portfolio!",{font:i,size:2,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),d=new Me,f=new ce(c,d);d.color.setHex(9498256),f.rotation.y=Math.PI,f.position.x=14,setInterval(()=>{d.color.setHex(Math.random()*16777215)},2e3),ln.add(f);const v=new Ue("by: Jeongbin Son",{font:i,size:.5,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),g=new Me,m=new ce(v,g);m.rotation.y=Math.PI,m.position.x=1,m.position.y=-2.5,ln.add(m);const p=new Ca().load("/photos/textGeometry3matcapTexture.jpg"),_=new Ue("Click here to explore the website!",{font:i,size:1,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),x=new mm({matcap:p}),y=new ce(_,x);x.color.setHex(9498256),window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([y]).length>0&&(ln.visible=!1,Fn.visible=!1,xe.visible=!0,Ye=1,Kn.element.style.display="none")}),y.rotation.y=Math.PI,y.position.x=8,y.position.y=-5,ln.add(y);const M=new Ue("Links",{font:i,size:1,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),T=new Me,B=new ce(M,T);T.color.setHex(9498256),B.rotation.y=Math.PI,B.position.x=1,B.position.y=8,xe.add(B);const L=new Ue("About me",{font:i,size:3,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),S=new Me,E=new ce(L,S);S.color.setHex(9498256),E.rotation.y=Math.PI,E.position.x=33,E.position.y=10,Fn.add(E);const I=new ri(22,8,.1),q=new Me({color:16777215}),D=new ce(I,q);D.position.set(E.position.x-8.5,E.position.y+2,E.position.z),Fn.add(D);function X(){const vt=[16711680,16744192,16776960,255,4915330,9699539];let Tt=0;setInterval(()=>{q.color.setHex(vt[Tt]),Tt=(Tt+1)%vt.length},2e3)}X();const H={};H.count=8e3,H.size=.1,H.radius=20,H.branches=2,H.spin=2,H.randomness=.12,H.randomnessPower=6,H.insideColor="#ff6030",H.outsideColor="#1b3984";let ot=null,O=null,F=null;(()=>{F!==null&&(ot.dispose(),O.dispose(),xe.remove(F)),ot=new Qe;const vt=new Float32Array(H.count*3),Tt=new Float32Array(H.count*3),w=new de(H.insideColor),V=new de(H.outsideColor);for(let Y=0;Y<H.count;Y++){const W=Y*3,nt=Math.random()*H.radius,rt=nt*H.spin,bt=Y%H.branches/H.branches*Math.PI*2,Nt=Math.pow(Math.random(),H.randomnessPower)*(Math.random()<1?1:-1)*H.randomness*nt,Yt=Math.pow(Math.random(),H.randomnessPower)*(Math.random()<1?1:-1)*H.randomness*nt,Ot=Math.pow(Math.random(),H.randomnessPower)*(Math.random()<1?1:-1)*H.randomness*nt;vt[W]=-(Math.sin(bt+rt)*nt+Ot),vt[W+1]=Math.cos(bt+rt)*nt+Nt,vt[W+2]=Yt;const Ut=w.clone();Ut.lerp(V,nt/H.radius),Tt[W]=Ut.r,Tt[W+1]=Ut.g,Tt[W+2]=Ut.b}ot.setAttribute("position",new Ke(vt,3)),ot.setAttribute("color",new Ke(Tt,3)),O=new Os({size:H.size,sizeAttenuation:!0,depthWrite:!1,blending:Ci,vertexColors:!0}),F=new Ea(ot,O),F.position.z=1,xe.add(F),setInterval(()=>{F.rotation.z+=.003},100)})();const j=t.load("/photos/shootingStar2.png"),z=new Ui(1.5,1.5,1,1),P=new Me({map:j,transparent:!0,blending:Ci}),C=new ce(z,P);C.rotation.y=Math.PI,C.position.x=-10,C.position.y=10,C.position.z=-2,P.side=Oe,xe.add(C);const A=new ce(z,P);A.rotation.y=Math.PI,A.position.x=10,A.position.y=-10,A.position.z=-2,P.side=Oe,xe.add(A);const R=new ce(z,P);R.rotation.y=Math.PI,R.position.x=-15,R.position.y=15,R.position.z=-2,P.side=Oe,xe.add(R);const k=new ce(z,P);k.rotation.y=Math.PI,k.position.x=15,k.position.y=-15,k.position.z=-2,P.side=Oe,xe.add(k);const it=new ce(z,P);it.rotation.y=Math.PI,it.position.x=-10.25,it.position.y=10.25,it.position.z=-2,P.side=Oe,xe.add(it);const st=new ce(z,P);st.rotation.y=Math.PI,st.position.x=10.25,st.position.y=-10.25,st.position.z=-2,P.side=Oe,xe.add(st);var Z=0;ht();function ht(){var vt=10,Tt=0,w=0,V=Tt+vt*Math.cos(Z),Y=w+vt*Math.sin(Z),W=Tt+vt*Math.cos(Z+Math.PI),nt=w+vt*Math.sin(Z+Math.PI),rt=-(Tt+vt*Math.cos(Z)),bt=w+vt*Math.sin(Z),Nt=-(Tt+vt*Math.cos(Z+Math.PI)),Yt=w+vt*Math.sin(Z+Math.PI),Ot=Tt+vt*Math.cos(Z),Ut=w+vt*Math.sin(Z);C.position.set(-V,Y,0),A.position.set(W,nt,0),R.position.set(rt+5,bt+5,0),k.position.set(Nt-5,Yt-5,0),it.position.set(Ot,Ut+2,0),st.position.set(-Ot-8,-Ut+2,0),Z+=.1}setInterval(ht,100);function pt(){C.rotation.z+=.1,A.rotation.z+=.1,R.rotation.z+=.1,k.rotation.z+=.1,it.rotation.z+=.1,st.rotation.z+=.1}setInterval(pt,100);const U=t.load("/photos/shootingStar3.png"),lt=new Ui(40,40,1,1),Q=new Me({map:U,transparent:!0,opacity:.8,blending:Ci}),$=new ce(lt,Q);$.rotation.y=Math.PI,$.position.x=6,$.position.y=4,$.position.z=1,Q.side=Oe;const J=new Ue("Profile",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),Rt=new Me,xt=new ce(J,Rt);Rt.color.setHex(11393254),xt.rotation.y=Math.PI,xt.position.x=11,xt.position.y=-6,xe.add(xt),window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([xt]).length>0&&(xe.visible=!1,Fn.visible=!0,Ye=2,Kn.element.style.display="none")});const Ct=new Ue("LinkedIn",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),Mt=new Me,Wt=new ce(Ct,Mt);Mt.color.setHex(11393254),Wt.rotation.y=Math.PI,Wt.position.x=2,Wt.position.y=-6,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([Wt]).length>0&&(xe.visible=!1,window.open("https://www.linkedin.com/in/jeongbin-son/"),xe.visible=!0,Kn.element.style.display="none")}),xe.add(Wt);const Jt=new Ue("Github",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),N=new Me,b=new ce(Jt,N);N.color.setHex(11393254),b.rotation.y=Math.PI,b.position.x=-7,b.position.y=-6,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([b]).length>0&&(xe.visible=!1,window.open("https://github.com/brian419"),xe.visible=!0,Kn.element.style.display="none")}),xe.add(b);const at=new Ue("Projects",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),_t=new Me,gt=new ce(at,_t);_t.color.setHex(11393254),gt.rotation.y=Math.PI,gt.position.x=11,gt.position.y=-10,xe.add(gt),window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([gt]).length>0&&(xe.visible=!1,Hr.visible=!0,Ye=4,Kn.element.style.display="none")});const G=new Ue("Game 1",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!1,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),yt=new Me,St=new ce(G,yt);yt.color.setHex(11393254),St.rotation.y=Math.PI,St.position.x=2,St.position.y=0,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([St]).length>0&&(xe.visible=!1,Dn.visible=!0,Ye=6)}),Hr.add(St);const ft=new Ue("Game Over!",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),kt=new Me,Xt=new ce(ft,kt);kt.color.setHex(11393254),Xt.rotation.y=Math.PI,Xt.position.x=0,Xt.position.y=0,Zi.add(Xt);const qt=new Ue("Home Page",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),Zt=new Me,Gt=new ce(qt,Zt);Zt.color.setHex(11393254),Gt.rotation.y=Math.PI,Gt.position.x=0,Gt.position.y=-10,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([Gt]).length>0&&(ln.visible=!0,Dn.visible=!1,Zi.visible=!1,Ye=0)}),Zi.add(Gt);const Kt=new Ue("Weebly",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),Qt=new Me,K=new ce(Kt,Qt);Qt.color.setHex(11393254),K.rotation.y=Math.PI,K.position.x=2,K.position.y=-10,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([K]).length>0&&(xe.visible=!1,window.open("https://jeongbinson.weebly.com/"),xe.visible=!0,Kn.element.style.display="none")}),xe.add(K);const Dt=new Ue("Contact",{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),ut=new Me,At=new ce(Dt,ut);ut.color.setHex(11393254),At.rotation.y=Math.PI,At.position.x=-7,At.position.y=-10,window.addEventListener("click",vt=>{me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([At]).length>0&&(xe.visible=!1,rr.visible=!0,Ye=5)}),xe.add(At);function zt(){new bl().load("/fonts/helvetiker_regular.typeface.json",function(Tt){const w=["Welcome! My name is Jeongbin Son. I am currently in my third year studying computer science at the University of Alabama.",`
`,"What Drives Me: My journey in CS began with a simple curiosity and has since evolved into a dedicated pursuit of experience and creative projects.",`
`,"My Skills and Experiences include C, C++, Javascript / Three.js, HTML / CSS, SwiftUI, and Python",`
`,`Projects: As I develop my skills through personal projects, I have branched out and made applications in SwiftUI, artificial intelligence projects in Python,

Coursework projects in C++ / C, This Three.js website in Javascript, and many more.`,`
`,`
`,`
`,"Future goals: I am eager to expand my knowledge by engaging in internships and collaborative projects. I want to pursue learning machine learning and application / web development.",`
`,"Let's connect! Feel free to reach out via email at json10@crimson.ua.edu or phone at 615-651-9709."];let V=0;const Y=1.5;w.forEach(W=>{const nt=new Ue(W,{font:Tt,size:.8,height:.2,curveSegments:12,bevelEnabled:!1,bevelThickness:.03,bevelSize:0,bevelOffset:0,bevelSegments:5}),rt=new Me({color:11393254}),bt=new ce(nt,rt);bt.rotation.y=Math.PI,bt.position.set(40,V,0),Fn.add(bt),V-=Y})})}zt();const ie=new ri(1,1,1),fe=new Me({color:9498256,wireframe:!1});var pe=0;const Ge=new Ue("Score: "+pe,{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelOffset:0,bevelSegments:5}),ee=new Me,mt=new ce(Ge,ee);ee.color.setHex(9498256),mt.rotation.y=Math.PI,mt.position.x=1.8,mt.position.y=10,Dn.add(mt);const dt=new ce(ie,fe);dt.position.x=0,dt.position.y=0,dt.position.z=0,Dn.add(dt),window.addEventListener("keydown",vt=>{switch(vt.code){case"ArrowUp":dt.position.z-=.1;break;case"ArrowDown":dt.position.z+=.1;break;case"ArrowLeft":dt.position.x+=.1;break;case"ArrowRight":dt.position.x-=.1;break}switch(vt.key){case"w":dt.position.z+=.1;break;case"s":dt.position.z-=.1;break;case"a":dt.position.x+=.1;break;case"d":dt.position.x-=.1;break;case"Shift":dt.position.y-=.1;break;case" ":dt.position.y+=.1;break}});const Et=new Vr(1,32,32),wt=new Me({color:16777215,wireframe:!1}),$t=new Ue("Click here to start the game!",{font:i,size:1,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelOffset:0,bevelSegments:5}),Bt=new Me,Pt=new ce($t,Bt);Bt.color.setHex(9498256),Pt.rotation.y=Math.PI,Pt.position.x=8,Pt.position.y=-8,Dn.add(Pt),window.addEventListener("click",vt=>{if(me.x=vt.clientX/ae.width*2-1,me.y=-(vt.clientY/ae.height)*2+1,Te.setFromCamera(me,ve),Te.intersectObjects([Pt]).length>0){for(let w=0;w<3;w++){const V=new ce(Et,wt);V.position.x=(Math.random()-.5)*10,V.position.y=(Math.random()-.5)*10,V.position.z=(Math.random()-.5)*10,Dn.add(V),setInterval(()=>{V.position.x-=.1,V.position.x<-10&&(V.position.x=10),dt.position.distanceTo(V.position)<1&&(console.log("hit"),Dn.visible=!1,Ye=7,Zi.visible=!0)},100)}Pt.visible=!1,setInterval(()=>{pe+=1,mt.geometry=new Ue("Score: "+pe,{font:i,size:.8,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelOffset:0,bevelSegments:5})},1e3)}});const Ft=new Vr(1,32,32),ct=new Me({color:16777215,wireframe:!0}),It=new ce(Ft,ct);It.position.x=0,It.position.y=0,It.position.z=0});const Im=new _m,Al=Im.load(["/environmentMaps/2/px.png","/environmentMaps/2/nx.png","/environmentMaps/2/py.png","/environmentMaps/2/ny.png","/environmentMaps/2/pz.png","/environmentMaps/2/nz.png"]);ln.environment=Al;ln.background=Al;const ae={width:window.innerWidth,height:window.innerHeight},ve=new sn(75,ae.width/ae.height,1,1e3),Hn=new sn(75,ae.width/ae.height,1,1e3);ve.position.x=0;ve.position.y=0;ve.position.z=-20;Hn.position.x=0;Hn.position.y=0;Hn.position.z=-30;ln.add(ve);xe.add(ve);Fn.add(Hn);Tl.add(ve);Hr.add(ve);rr.add(ve);const Rl=new wl(ve,Qs),Nm=new wl(Hn,Qs);Rl.enableDamping=!0;Nm.enableDamping=!0;window.addEventListener("resize",()=>{ae.width=window.innerWidth,ae.height=window.innerHeight,ve.aspect=ae.width/ae.height,ve.updateProjectionMatrix(),Hn.aspect=ae.width/ae.height,Hn.updateProjectionMatrix(),je.setSize(ae.width,ae.height),je.setPixelRatio(Math.min(window.devicePixelRatio,2))});window.addEventListener("mousemove",i=>{i.clientX/ae.width-.5,-(i.clientY/ae.height-.5)});const je=new pl({canvas:Qs});je.setSize(ae.width,ae.height);je.render(ln,ve);je.setPixelRatio(Math.min(window.devicePixelRatio,2));const Hi=new Cm;Hi.setSize(ae.width,ae.height);Hi.domElement.style.position="absolute";Hi.domElement.style.top="0px";Hi.domElement.style.pointerEvents="none";document.body.appendChild(Hi.domElement);je.outputColorSpace=vn;const Um=new Mm,Cl=i=>{Um.getElapsedTime();const t=new et(-3,0,0),e=new et(1,0,0);e.normalize(),Te.set(t,e),Te.setFromCamera(me,ve),Rl.update(),Ye==0?je.render(ln,ve):Ye==1?je.render(xe,ve):Ye==2?je.render(Fn,Hn):Ye==3?je.render(Tl,ve):Ye==4?je.render(Hr,ve):Ye==5?(je.render(rr,ve),Hi.render(rr,ve)):Ye==6?je.render(Dn,ve):Ye==7&&je.render(Zi,ve),window.requestAnimationFrame(Cl)};Cl();
//# sourceMappingURL=index-462aa35b.js.map
