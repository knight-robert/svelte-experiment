var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(t,e){t.appendChild(e)}function o(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.value=null==e?"":e}let g;function v(t){g=t}const b=[],$=[],y=[],x=[],M=Promise.resolve();let w=!1;function k(t){y.push(t)}let T=!1;const _=new Set;function L(){if(!T){T=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];v(e),H(e.$$)}for(v(null),b.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];_.has(e)||(_.add(e),e())}y.length=0}while(b.length);for(;x.length;)x.pop()();w=!1,T=!1,_.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const S=new Set;let A;function P(t,e){t&&t.i&&(S.delete(t),t.i(e))}function z(t,e,n,s){if(t&&t.o){if(S.has(t))return;S.add(t),A.c.push((()=>{S.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function E(t){t&&t.c()}function N(t,n,l){const{fragment:a,on_mount:c,on_destroy:o,after_update:r}=t.$$;a&&a.m(n,l),k((()=>{const n=c.map(e).filter(i);o?o.push(...n):s(n),t.$$.on_mount=[]})),r.forEach(k)}function q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,M.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,i,l,a,c,o,u=[-1]){const d=g;v(e);const f=i.props||{},h=e.$$={fragment:null,ctx:null,props:o,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(h.ctx=l?l(e,f,((t,n,...s)=>{const i=s.length?s[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),m&&I(e,t)),n})):[],h.update(),m=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(r)}else h.fragment&&h.fragment.c();i.intro&&P(e.$$.fragment),N(e,i.target,i.anchor),L()}v(d)}class C{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O=[];function B(e,n=t){let s;const i=[];function a(t){if(l(e,t)&&(e=t,s)){const t=!O.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),O.push(n,e)}if(t){for(let t=0;t<O.length;t+=2)O[t][0](O[t+1]);O.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(l,c=t){const o=[l,c];return i.push(o),1===i.length&&(s=n(a)||t),l(e),()=>{const t=i.indexOf(o);-1!==t&&i.splice(t,1),0===i.length&&(s(),s=null)}}}}const F=B(!1),W=()=>F.update((()=>!0)),R=()=>F.update((()=>!1)),Y=B(!1);function K(t){let e;return{c(){e=u("span"),e.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>',m(e,"class","icon is-small is-right")},m(t,n){o(t,e,n)},d(t){t&&r(e)}}}function U(t){let e;return{c(){e=u("span"),e.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>',m(e,"class","icon is-small is-right")},m(t,n){o(t,e,n)},d(t){t&&r(e)}}}function D(t){let e;return{c(){e=u("span"),e.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>',m(e,"class","icon is-small is-right")},m(t,n){o(t,e,n)},d(t){t&&r(e)}}}function G(e){let n,s,i;return{c(){n=u("button"),n.textContent="Submit",m(n,"class","button is-link is-outlined is-small")},m(t,l){o(t,n,l),s||(i=h(n,"click",e[9]),s=!0)},p:t,d(t){t&&r(n),s=!1,i()}}}function J(e){let n;return{c(){n=u("button"),n.textContent="Submit",m(n,"class","button is-link is-outlined is-small is-loading")},m(t,e){o(t,n,e)},p:t,d(t){t&&r(n)}}}function Q(e){let n,i,l,a,d,g,v,b,$,y,x,M,w,k,T,_,L,H,S,A,P,z,E,N,q,I,j,C,O,B,F,W,R,Y,Q,V,X,Z,tt,et,nt,st,it,lt=e[5]&&K(),at=e[6]&&U(),ct=e[7]&&D();function ot(t,e){return t[4]?J:G}let rt=ot(e),ut=rt(e);return{c(){n=u("div"),i=u("label"),i.innerHTML='Name <span class="reqIn svelte-1p32e1i">*</span>',l=f(),a=u("div"),d=u("input"),v=f(),b=u("span"),b.innerHTML='<i class="fa fa-user" aria-hidden="true"></i>',$=f(),lt&&lt.c(),y=f(),x=u("div"),M=u("label"),M.innerHTML='Email <span class="reqIn svelte-1p32e1i">*</span>',w=f(),k=u("div"),T=u("input"),L=f(),H=u("span"),H.innerHTML='<i class="fa fa-envelope" aria-hidden="true"></i>',S=f(),at&&at.c(),A=f(),P=u("div"),z=u("label"),z.innerHTML='Subject <span class="reqIn svelte-1p32e1i">*</span>',E=f(),N=u("div"),q=u("input"),j=f(),C=u("span"),C.innerHTML='<i class="fa fa-tag" aria-hidden="true"></i>',O=f(),ct&&ct.c(),B=f(),F=u("div"),W=u("label"),W.innerHTML='Message <span class="reqIn svelte-1p32e1i">*</span>',R=f(),Y=u("div"),Q=u("textarea"),X=f(),Z=u("div"),Z.innerHTML='<span class="reqIn svelte-1p32e1i">*</span> Indicates required field',tt=f(),et=u("div"),nt=u("div"),ut.c(),m(i,"for","name"),m(i,"class","label is-small"),m(d,"id","name"),m(d,"class",g="input is-small "+(e[5]?"is-success":"")),m(d,"type","text"),m(d,"placeholder","Name"),d.disabled=e[4],m(b,"class","icon is-small is-left"),m(a,"class","control has-icons-left has-icons-right"),m(n,"class","field"),m(M,"for","email"),m(M,"class","label is-small"),m(T,"id","email"),m(T,"class",_="input is-small "+(e[6]?"is-success":"")),m(T,"type","email"),m(T,"placeholder","Email"),T.disabled=e[4],m(H,"class","icon is-small is-left"),m(k,"class","control has-icons-left has-icons-right"),m(x,"class","field"),m(z,"for","subject"),m(z,"class","label is-small"),m(q,"id","subject"),m(q,"class",I="input is-small "+(e[7]?"is-success":"")),m(q,"type","text"),m(q,"placeholder","Subject"),q.disabled=e[4],m(C,"class","icon is-small is-left"),m(N,"class","control has-icons-left has-icons-right"),m(P,"class","field"),m(W,"for","message"),m(W,"class","label is-small"),m(Q,"id","message"),m(Q,"class",V="textarea is-small "+(e[8]?"is-success":"")),m(Q,"placeholder","Message"),Q.disabled=e[4],m(Y,"class","control"),m(F,"class","field"),m(Z,"class","is-size-7 my-4"),m(nt,"class","control"),m(et,"class","field")},m(t,s){o(t,n,s),c(n,i),c(n,l),c(n,a),c(a,d),p(d,e[0]),c(a,v),c(a,b),c(a,$),lt&&lt.m(a,null),o(t,y,s),o(t,x,s),c(x,M),c(x,w),c(x,k),c(k,T),p(T,e[1]),c(k,L),c(k,H),c(k,S),at&&at.m(k,null),o(t,A,s),o(t,P,s),c(P,z),c(P,E),c(P,N),c(N,q),p(q,e[2]),c(N,j),c(N,C),c(N,O),ct&&ct.m(N,null),o(t,B,s),o(t,F,s),c(F,W),c(F,R),c(F,Y),c(Y,Q),p(Q,e[3]),o(t,X,s),o(t,Z,s),o(t,tt,s),o(t,et,s),c(et,nt),ut.m(nt,null),st||(it=[h(d,"input",e[10]),h(T,"input",e[11]),h(q,"input",e[12]),h(Q,"input",e[13])],st=!0)},p(t,[e]){32&e&&g!==(g="input is-small "+(t[5]?"is-success":""))&&m(d,"class",g),16&e&&(d.disabled=t[4]),1&e&&d.value!==t[0]&&p(d,t[0]),t[5]?lt||(lt=K(),lt.c(),lt.m(a,null)):lt&&(lt.d(1),lt=null),64&e&&_!==(_="input is-small "+(t[6]?"is-success":""))&&m(T,"class",_),16&e&&(T.disabled=t[4]),2&e&&T.value!==t[1]&&p(T,t[1]),t[6]?at||(at=U(),at.c(),at.m(k,null)):at&&(at.d(1),at=null),128&e&&I!==(I="input is-small "+(t[7]?"is-success":""))&&m(q,"class",I),16&e&&(q.disabled=t[4]),4&e&&q.value!==t[2]&&p(q,t[2]),t[7]?ct||(ct=D(),ct.c(),ct.m(N,null)):ct&&(ct.d(1),ct=null),256&e&&V!==(V="textarea is-small "+(t[8]?"is-success":""))&&m(Q,"class",V),16&e&&(Q.disabled=t[4]),8&e&&p(Q,t[3]),rt===(rt=ot(t))&&ut?ut.p(t,e):(ut.d(1),ut=rt(t),ut&&(ut.c(),ut.m(nt,null)))},i:t,o:t,d(t){t&&r(n),lt&&lt.d(),t&&r(y),t&&r(x),at&&at.d(),t&&r(A),t&&r(P),ct&&ct.d(),t&&r(B),t&&r(F),t&&r(X),t&&r(Z),t&&r(tt),t&&r(et),ut.d(),st=!1,s(it)}}}function V(t,e,n){let s,i,l,a;var c=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(i,l){function a(t){try{o(s.next(t))}catch(t){l(t)}}function c(t){try{o(s.throw(t))}catch(t){l(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}o((s=s.apply(t,e||[])).next())}))};let o="",r="",u="",d="",f=!1;return t.$$.update=()=>{1&t.$$.dirty&&n(5,s=o.length>0),2&t.$$.dirty&&n(6,i=/.+\@.+\..+/g.test(r)),4&t.$$.dirty&&n(7,l=u.length>0),8&t.$$.dirty&&n(8,a=d.length>0)},[o,r,u,d,f,s,i,l,a,()=>c(void 0,void 0,void 0,(function*(){s&&i&&l&&a&&(n(4,f=!0),yield new Promise((t=>setTimeout(t,2500))),R(),Y.update((()=>!0)),yield new Promise((t=>setTimeout(t,2500))),Y.update((()=>!1)))})),function(){o=this.value,n(0,o)},function(){r=this.value,n(1,r)},function(){u=this.value,n(2,u)},function(){d=this.value,n(3,d)}]}class X extends C{constructor(t){super(),j(this,t,V,Q,l,{})}}function Z(t){let e,n;return e=new X({}),{c(){E(e.$$.fragment)},m(t,s){N(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function tt(t){let e;return{c(){e=u("div"),e.innerHTML='<div class="control"><button class="button is-link is-outlined is-small" disabled="">Message sent</button></div>',m(e,"class","field")},m(t,n){o(t,e,n)},d(t){t&&r(e)}}}function et(t){let e,n,i,l,a,p,g,v,b,$,y,x,M,w,k,T,_,L,H,S=t[0]&&Z(),E=t[1]&&tt();return{c(){e=u("div"),e.innerHTML='<h3 class="is-size-4 has-text-weight-bold">Email</h3> \n  <div class="is-size-7"><a href="mailto:inquiry@fictitiousMex.com">inquiry@fictitiousfood.com</a></div>',n=f(),i=u("div"),l=u("div"),l.textContent="Want to use our mailing form?",a=f(),p=u("div"),g=u("button"),v=d("Yes"),$=f(),y=u("button"),x=d("No"),w=f(),S&&S.c(),k=f(),E&&E.c(),T=d(""),m(e,"class","field"),m(l,"class","field is-size-7"),m(g,"class",b="button "+(t[0]?"is-link":"")),m(y,"class",M="button "+(t[0]?"":"is-link")),m(p,"class","buttons has-addons are-small"),m(i,"class","field")},m(t,s){o(t,e,s),o(t,n,s),o(t,i,s),c(i,l),c(i,a),c(i,p),c(p,g),c(g,v),c(p,$),c(p,y),c(y,x),o(t,w,s),S&&S.m(t,s),o(t,k,s),E&&E.m(t,s),o(t,T,s),_=!0,L||(H=[h(g,"click",W),h(y,"click",R)],L=!0)},p(t,[e]){(!_||1&e&&b!==(b="button "+(t[0]?"is-link":"")))&&m(g,"class",b),(!_||1&e&&M!==(M="button "+(t[0]?"":"is-link")))&&m(y,"class",M),t[0]?S?1&e&&P(S,1):(S=Z(),S.c(),P(S,1),S.m(k.parentNode,k)):S&&(A={r:0,c:[],p:A},z(S,1,1,(()=>{S=null})),A.r||s(A.c),A=A.p),t[1]?E||(E=tt(),E.c(),E.m(T.parentNode,T)):E&&(E.d(1),E=null)},i(t){_||(P(S),_=!0)},o(t){z(S),_=!1},d(t){t&&r(e),t&&r(n),t&&r(i),t&&r(w),S&&S.d(t),t&&r(k),E&&E.d(t),t&&r(T),L=!1,s(H)}}}function nt(t,e,n){let s,i;return a(t,F,(t=>n(0,s=t))),a(t,Y,(t=>n(1,i=t))),[s,i]}class st extends C{constructor(t){super(),j(this,t,nt,et,l,{})}}function it(t,e,n){const s=t.slice();return s[1]=e[n].day,s[2]=e[n].hours,s}function lt(e){let n,s,i,l,a,h,p,g=e[1]+"",v=e[2]+"";return{c(){n=u("div"),s=u("div"),i=d(g),l=d(" :"),a=u("div"),h=d(v),p=f(),m(s,"class","is-inline-block pr-4 day svelte-1h3or9w"),m(a,"class","is-inline-block"),m(n,"class","is-size-7")},m(t,e){o(t,n,e),c(n,s),c(s,i),c(s,l),c(n,a),c(a,h),c(n,p)},p:t,d(t){t&&r(n)}}}function at(e){let n,s,i,l=e[0],a=[];for(let t=0;t<l.length;t+=1)a[t]=lt(it(e,l,t));return{c(){n=u("div"),s=u("h2"),s.textContent="Opening Hours",i=f();for(let t=0;t<a.length;t+=1)a[t].c();m(s,"class","is-size-4 has-text-weight-bold"),m(n,"class","mt-5")},m(t,e){o(t,n,e),c(n,s),c(n,i);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,[e]){if(1&e){let s;for(l=t[0],s=0;s<l.length;s+=1){const i=it(t,l,s);a[s]?a[s].p(i,e):(a[s]=lt(i),a[s].c(),a[s].m(n,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=l.length}},i:t,o:t,d(t){t&&r(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(a,t)}}}function ct(t){return[[{day:"Monday",hours:"10:00 AM – 8:00 PM"},{day:"Tuesday",hours:"10:00 AM – 8:00 PM"},{day:"Wednesday",hours:"10:00 AM – 8:00 PM"},{day:"Thursday",hours:"10:00 AM – 8:00 PM"},{day:"Friday",hours:"10:00 AM – 10:00 PM"},{day:"Saturday",hours:"10:00 AM – 10:00 PM"},{day:"Sunday",hours:"closed"}]]}class ot extends C{constructor(t){super(),j(this,t,ct,at,l,{})}}function rt(e){let n,s,i,l,a,d,h,p,g,v,b,$,y,x;return d=new ot({}),b=new st({}),{c(){n=u("section"),n.innerHTML='<div class="hero-body container"><div class="container"><h1 class="title">My Svelte-ty Fictitious Restaurant</h1> \n      <h2 class="subtitle">Come and have a taste of our divine and angelic food made with a touch of Svelte</h2></div></div>',s=f(),i=u("div"),l=u("div"),a=u("div"),E(d.$$.fragment),h=f(),p=u("div"),p.innerHTML='<div class="mt-5"><h2 class="is-size-4 has-text-weight-bold">Location</h2> \n        <div class="is-size-7">123 Street Name</div> \n        <div class="is-size-7">Brooklyn, NY 11201</div></div> \n      <div class="mt-5"><h3 class="is-size-4 has-text-weight-bold">Phone</h3> \n        <div class="is-size-7">1.123.456.7890</div></div>',g=f(),v=u("div"),E(b.$$.fragment),$=f(),y=u("footer"),y.innerHTML='<div class="content has-text-centered"><p><strong>A Svelte Experiment</strong> by Robert Knight</p> \n    <p>This website is designed for me to test-drive Svelte and its features and workflow. While doing so, I got to play around with a new-to-me UI library called Bulma and its Font Awesome integration.</p></div>',m(n,"class","hero is-medium is-primary is-bold"),m(a,"class","column is-half"),m(p,"class","column is-half pl-6"),m(v,"class","column is-full"),m(l,"class","columns is-multiline is-mobile"),m(i,"class","container p-5 svelte-b37ouv"),m(i,"id","myPage"),m(y,"class","footer")},m(t,e){o(t,n,e),o(t,s,e),o(t,i,e),c(i,l),c(l,a),N(d,a,null),c(l,h),c(l,p),c(l,g),c(l,v),N(b,v,null),o(t,$,e),o(t,y,e),x=!0},p:t,i(t){x||(P(d.$$.fragment,t),P(b.$$.fragment,t),x=!0)},o(t){z(d.$$.fragment,t),z(b.$$.fragment,t),x=!1},d(t){t&&r(n),t&&r(s),t&&r(i),q(d),q(b),t&&r($),t&&r(y)}}}return new class extends C{constructor(t){super(),j(this,t,null,rt,l,{})}}({target:document.body})}();
//# sourceMappingURL=index.js.map