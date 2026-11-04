"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(J,j){
var g=require('@stdlib/blas-base-dcopy/dist').ndarray,o=5;function k(i,r,u,t,s,e,q,m){var n,a,f,v;if(i<=0)return e;if(r===0)return g(i,u,t,s,e,q,m);if(n=s,a=m,t===1&&q===1){if(f=i%o,f>0)for(v=0;v<f;v++)e[a]=u[n]-r,n+=t,a+=q;if(i<o)return e;for(v=f;v<i;v+=o)e[a]=u[n]-r,e[a+1]=u[n+1]-r,e[a+2]=u[n+2]-r,e[a+3]=u[n+3]-r,e[a+4]=u[n+4]-r,n+=o,a+=o;return e}for(v=0;v<i;v++)e[a]=u[n]-r,n+=t,a+=q;return e}j.exports=k
});var _=c(function(K,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(i,r,u,t,s,e){return z(i,r,u,t,x(i,t),s,e,x(i,e))}R.exports=A
});var O=c(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=y();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),d,b=F(D(__dirname,"./native.js"));G(b)?d=H:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
