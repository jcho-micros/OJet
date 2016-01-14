/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","knockout","ojs/ojpagingcontrol","ojs/ojknockout-model"],function(a,f,d){a.Mb=function(a){this.data=a;this.current=0;this.Init();this.mI(10)};o_("ArrayPagingDataSource",a.Mb,a);a.b.ga(a.Mb,a.Og,"oj.ArrayPagingDataSource");a.Mb.prototype.Init=function(){a.Mb.q.Init.call(this)};a.b.i("ArrayPagingDataSource.prototype.Init",{Init:a.Mb.prototype.Init});a.Mb.prototype.kG=function(){return this.Hu()?this.kl:this.totalSize()-this.current};a.Mb.prototype.Xo=function(a){a=a||{};
this.mf=Array(this.kG());for(var c=0;c<this.mf.length;c++)this.mf[c]=this.data[this.current+c];this.tv();this.Ei=this.aa+this.mf.length-1;a.silent||this.handleEvent("sync",{data:this.mf,startIndex:this.current})};a.Mb.prototype.tv=function(){if(void 0!==this.ej){this.ej.removeAll();for(var a=0;a<this.mf.length;a++)this.ej.push(this.mf[a])}};a.Mb.prototype.handleEvent=function(b,c){return a.Mb.q.handleEvent.call(this,b,c)};a.Mb.prototype.tl=function(){return this.mf};a.b.i("ArrayPagingDataSource.prototype.getWindow",
{tl:a.Mb.prototype.tl});a.Mb.prototype.qw=function(){void 0===this.ej&&(this.ej=d.observableArray(),this.tv());return this.ej};a.b.i("ArrayPagingDataSource.prototype.getWindowObservable",{qw:a.Mb.prototype.qw});a.Mb.prototype.getPage=function(){return this.Jc};a.b.i("ArrayPagingDataSource.prototype.getPage",{getPage:a.Mb.prototype.getPage});a.Mb.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.Mb.q.handleEvent.call(this,a.gc.F.BEFOREPAGE,{page:b,previousPage:this.Jc})}catch(d){return Promise.reject(null)}this.pageSize=
null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.Jc;this.Jc=b;this.aa=c.startIndex;var h=this;return new Promise(function(b,d){h.ee(c).then(function(){a.Mb.q.handleEvent.call(h,a.gc.F.PAGE,{page:h.Jc,previousPage:f});b(null)},function(){h.Jc=f;h.aa=h.Jc*h.pageSize;d(null)})})};a.b.i("ArrayPagingDataSource.prototype.setPage",{setPage:a.Mb.prototype.setPage});a.Mb.prototype.getStartItemIndex=function(){return this.aa};a.b.i("ArrayPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.Mb.prototype.getStartItemIndex});a.Mb.prototype.getEndItemIndex=function(){return this.Ei};a.b.i("ArrayPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Mb.prototype.getEndItemIndex});a.Mb.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.b.i("ArrayPagingDataSource.prototype.getPageCount",{getPageCount:a.Mb.prototype.getPageCount});a.Mb.prototype.fetch=function(a){a=a||{};if(void 0!==a.pageSize&&void 0!==a.startIndex){if(!this.Hu())return Promise.resolve();
this.kl=a.startIndex+a.pageSize}this.Xo(null);return Promise.resolve()};a.b.i("ArrayPagingDataSource.prototype.fetch",{fetch:a.Mb.prototype.fetch});a.Mb.prototype.ee=function(a){var c=a||{};void 0!==c.startIndex&&(this.current=c.startIndex);void 0!==c.pageSize&&(this.kl=this.pageSize=c.pageSize);this.Xo(a);return Promise.resolve({data:this.mf,startIndex:this.current})};a.Mb.prototype.Hu=function(){return this.current+this.kl<this.totalSize()};a.Mb.prototype.mI=function(a){this.kl=this.pageSize=a;
this.Xo(null)};a.Mb.prototype.totalSize=function(){return this.data.length};a.ub=function(a){this.Ea=a;this.current=0;this.Init();this.mf=[];this.mI(10)};o_("CollectionPagingDataSource",a.ub,a);a.b.ga(a.ub,a.Og,"oj.CollectionPagingDataSource");a.ub.prototype.Init=function(){a.ub.q.Init.call(this)};a.b.i("CollectionPagingDataSource.prototype.Init",{Init:a.ub.prototype.Init});a.ub.prototype.kG=function(){return this.Hu()?this.kl:this.totalSize()-this.current};a.ub.prototype.Xo=function(){this.mf=Array(this.kG());
var a=this;return this.Ea.Qp(this.current,this.current+this.mf.length).then(function(c){for(var d=0;d<c.length;d++)a.mf[d]=c[d];a.tv();a.Ei=a.aa+a.mf.length-1})};a.ub.prototype.tv=function(){if(void 0!==this.ej){this.ej.removeAll();for(var b=0;b<this.mf.length;b++)this.ej.push(a.Ha.map(this.mf[b]))}};a.ub.prototype.tl=function(){return this.mf};a.b.i("CollectionPagingDataSource.prototype.getWindow",{tl:a.ub.prototype.tl});a.ub.prototype.qw=function(){void 0===this.ej&&(this.ej=d.observableArray(),
this.tv());return this.ej};a.b.i("CollectionPagingDataSource.prototype.getWindowObservable",{qw:a.ub.prototype.qw});a.ub.prototype.getPage=function(){return this.Jc};a.b.i("CollectionPagingDataSource.prototype.getPage",{getPage:a.ub.prototype.getPage});a.ub.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.ub.q.handleEvent.call(this,a.gc.F.BEFOREPAGE,{page:b,previousPage:this.Jc})}catch(d){return Promise.reject(null)}this.pageSize=null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=
b*this.pageSize;var f=this.Jc;this.Jc=b;this.aa=c.startIndex;var h=this;return new Promise(function(b,d){h.ee(c).then(function(){a.ub.q.handleEvent.call(h,a.gc.F.PAGE,{page:h.Jc,previousPage:f});b(null)},function(){h.Jc=f;h.aa=h.Jc*h.pageSize;d(null)})})};a.b.i("CollectionPagingDataSource.prototype.setPage",{setPage:a.ub.prototype.setPage});a.ub.prototype.getStartItemIndex=function(){return this.aa};a.b.i("CollectionPagingDataSource.prototype.getStartItemIndex",{getStartItemIndex:a.ub.prototype.getStartItemIndex});
a.ub.prototype.getEndItemIndex=function(){return this.Ei};a.b.i("CollectionPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.ub.prototype.getEndItemIndex});a.ub.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.b.i("CollectionPagingDataSource.prototype.getPageCount",{getPageCount:a.ub.prototype.getPageCount});a.ub.prototype.fetch=function(a){var c=a||{};if(void 0!==c.pageSize&&void 0!==c.startIndex){if(!this.Hu())return this.iA(null),
Promise.resolve();this.kl=c.startIndex+c.pageSize;var d=this;return this.Xo().then(function(){d.iA(null)})}return this.ee(a)};a.b.i("CollectionPagingDataSource.prototype.fetch",{fetch:a.ub.prototype.fetch});a.ub.prototype.ee=function(a){var c=a||{};void 0!==c.startIndex&&(this.current=c.startIndex);void 0!==c.pageSize&&(this.kl=this.pageSize=c.pageSize);var d=this;return new Promise(function(a){try{d.Ea.fetch({success:function(){d.Xo().then(function(){d.iA(c);a({data:d.tl(),startIndex:d.current})})}})}catch(b){d.Xo().then(function(){d.iA(c);
a({data:d.tl(),startIndex:d.current})})}})};a.ub.prototype.iA=function(a){a=a||{};a.silent||this.handleEvent("sync",{data:this.tl(),startIndex:this.current});a.success&&a.success()};a.ub.prototype.handleEvent=function(b,c){return a.ub.q.handleEvent.call(this,b,c)};a.ub.prototype.Hu=function(){return this.current+this.kl<this.totalSize()};a.ub.prototype.mI=function(a){this.kl=this.pageSize=a};a.ub.prototype.size=function(){var a=this.tl();return a?a.length:0};a.b.i("CollectionPagingDataSource.prototype.size",
{size:a.ub.prototype.size});a.ub.prototype.totalSize=function(){return this.Ea.length};a.b.i("CollectionPagingDataSource.prototype.totalSize",{totalSize:a.ub.prototype.totalSize})});