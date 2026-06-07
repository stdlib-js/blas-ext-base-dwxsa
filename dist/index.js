"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var y=c(function(J,j){
var g=require('@stdlib/blas-base-dcopy/dist').ndarray,o=5;function k(i,r,a,t,s,e,q,m){var u,n,f,v;if(i<=0)return e;if(r===0)return g(i,a,t,s,e,q,m);if(u=s,n=m,t===1&&q===1){if(f=i%o,f>0)for(v=0;v<f;v++)e[n]=a[u]-r,u+=t,n+=q;if(i<o)return e;for(v=f;v<i;v+=o)e[n]=a[u]-r,e[n+1]=a[u+1]-r,e[n+2]=a[u+2]-r,e[n+3]=a[u+3]-r,e[n+4]=a[u+4]-r,u+=o,n+=o;return e}for(v=0;v<i;v++)e[n]=a[u]-r,u+=t,n+=q;return e}j.exports=k
});var _=c(function(K,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(i,r,a,t,s,e){return z(i,r,a,t,x(i,t),s,e,x(i,e))}R.exports=A
});var O=c(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=y();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),d,b=F(D(__dirname,"./native.js"));G(b)?d=H:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
