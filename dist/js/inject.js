(()=>{var e,t,s,n;XMLHttpRequest,e=XMLHttpRequest.prototype,t=e.open,s=e.send,n=e.setRequestHeader,e.open=function(e,s){return this._method=e,this._url=s,this._requestHeaders={},this._startTime=(new Date).toISOString(),t.apply(this,arguments)},e.setRequestHeader=function(e,t){return this._requestHeaders[e]=t,n.apply(this,arguments)},e.send=function(e){return this.addEventListener("load",(function(){(new Date).toISOString();var e=this._url?this._url.toLowerCase():this._url;if(console.log("url",e),e&&-1!==e.indexOf("/api/interface/get")){var t=this.response;document.dispatchEvent(new CustomEvent("senResponse",{url:e,detail:t}))}})),s.apply(this,arguments)}})();