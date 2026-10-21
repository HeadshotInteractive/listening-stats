"use strict";var ListeningStatsApp=(()=>{var Kf=Object.create;var Mn=Object.defineProperty;var Gf=Object.getOwnPropertyDescriptor;var Vf=Object.getOwnPropertyNames;var jf=Object.getPrototypeOf,qf=Object.prototype.hasOwnProperty;var $t=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}};var te=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},Mo=(e,t)=>{for(var r in t)Mn(e,r,{get:t[r],enumerable:!0})},$o=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Vf(t))!qf.call(e,s)&&s!==r&&Mn(e,s,{get:()=>t[s],enumerable:!(n=Gf(t,s))||n.enumerable});return e};var Uo=(e,t,r)=>(r=e!=null?Kf(jf(e)):{},$o(t||!e||!e.__esModule?Mn(r,"default",{value:e,enumerable:!0}):r,e)),Yf=e=>$o(Mn({},"__esModule",{value:!0}),e);var H,je=$t(()=>{"use strict";H={PLAY_RECORDED:"listening-stats:play-recorded",SKIP_RECORDED:"listening-stats:skip-recorded",HEALTH_CHANGED:"listening-stats:health-changed",TRACKING_PAUSED:"listening-stats:tracking-paused",TRACKING_RESUMED:"listening-stats:tracking-resumed",PROVIDER_CHANGED:"listening-stats:provider-changed",STATSFM_CONNECTED:"listening-stats:statsfm-connected",STATSFM_DISCONNECTED:"listening-stats:statsfm-disconnected",STATSFM_HEALTH_CHANGED:"listening-stats:statsfm-health-changed",STATSFM_PROFILE_REFRESHED:"listening-stats:statsfm-profile-refreshed",PREFS_CHANGED:"listening-stats:prefs-changed",RANK_MODE_CHANGED:"listening-stats:rank-mode-changed",DASHBOARD_PERIOD_CHANGED:"listening-stats:dashboard-period-changed",OPEN_RECAP:"listening-stats:open-recap"}});var M,be=$t(()=>{"use strict";M={PLAY_THRESHOLD:"listening-stats:playThreshold",PLAY_THRESHOLD_MODE:"listening-stats:playThresholdMode",PLAY_THRESHOLD_PERCENT:"listening-stats:playThresholdPercent",TRACKING_PAUSED:"listening-stats:tracking-paused",SKIP_REPEATS:"listening-stats:skip-repeats",LAST_UPDATE:"listening-stats:lastUpdate",LOGGING:"listening-stats:logging",TRACKING_HEALTH:"listening-stats:tracking-health",LAST_WRITE:"listening-stats:lastWrite",ACTIVE_PROVIDER:"listening-stats:active-provider",PREFERENCES:"listening-stats:preferences",MIGRATION_PENDING:"listening-stats:migration-pending",STATSFM_CONFIG:"listening-stats:statsfm",PROVIDER_WIZARD_SEEN:"listening-stats:provider-wizard-seen",PROVIDER_PERIODS:"listening-stats:provider-periods",STATSFM_HEALTH:"listening-stats:statsfm-health",DISMISSED_BANNER_VERSION:"listening-stats:dismissed-banner-version",LASTFM_API_KEY:"listening-stats:lastfm-api-key",LASTFM_CONFIG:"listening-stats:lastfm-provider",WORLD_CHARTS_SCOPE:"listening-stats:world-charts-scope",WORLD_CHARTS_WINDOW:"listening-stats:world-charts-window",TOUR_SEEN_VERSION:"listening-stats:tour-seen-version",DISMISSED_REMOTE_ANNOUNCEMENT_ID:"listening-stats:dismissed-remote-announcement-id",UPDATE_PROMPT_SNOOZE_UNTIL:"listening-stats:update-prompt-snooze-until",RECAP_DISMISSED_MONTH:"listening-stats:recap-dismissed-month",RANK_MODE:"listening-stats:rank-mode",PLAYLIST_CONFIG:"listening-stats:playlist-config",PLAYLIST_STATE:"listening-stats:playlist-state"}});function Bl(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0),r=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function _g(){let e=new Date,r=(e.getDay()+6)%7,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()-r,0,0,0,0),s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+7,0,0,0,0);return{start:n.getTime(),end:s.getTime()}}function Dg(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1,0,0,0,0),r=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function Og(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth()-6,1,0,0,0,0),r=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:t.getTime(),end:r.getTime()}}function Lg(){let e=Date.now();return{start:e-28*864e5,end:e}}function Mg(){let e=Date.now();return{start:e-180*864e5,end:e}}function ys(){return{start:0,end:Number.MAX_SAFE_INTEGER}}function Wl(e){let t=pt.findIndex(r=>r.id===e);return t===-1||t===pt.length-1?null:pt[t+1]}function pn(e){if(e.id==="all-time"||e.id==="sfm-all-time"||e.id==="overall")return null;let{start:t,end:r}=e.getBoundaries(),n=r-t,s=t-n;return s<0?null:{start:s,end:t}}var pt,ht,bs,fn,oa,la,Gt=$t(()=>{"use strict";pt=[{id:"today",label:"Today",getBoundaries:Bl},{id:"this-week",label:"This Week",getBoundaries:_g},{id:"this-month",label:"This Month",getBoundaries:Dg},{id:"last-6-months",label:"Last 6 Months",getBoundaries:Og},{id:"all-time",label:"All Time",getBoundaries:ys}],ht=[{id:"sfm-weeks",label:"Last 4 Weeks",getBoundaries:Lg},{id:"sfm-months",label:"Last 6 Months",getBoundaries:Mg},{id:"sfm-all-time",label:"All Time",getBoundaries:ys}],bs=[{id:"sfm-today",label:"Today",getBoundaries:Bl},...ht];fn=[{id:"7day",label:"7 Days",getBoundaries:()=>({start:Date.now()-7*864e5,end:Date.now()})},{id:"1month",label:"1 Month",getBoundaries:()=>({start:Date.now()-30*864e5,end:Date.now()})},{id:"3month",label:"3 Months",getBoundaries:()=>({start:Date.now()-90*864e5,end:Date.now()})},{id:"6month",label:"6 Months",getBoundaries:()=>({start:Date.now()-180*864e5,end:Date.now()})},{id:"12month",label:"12 Months",getBoundaries:()=>({start:Date.now()-365*864e5,end:Date.now()})},{id:"overall",label:"Overall",getBoundaries:ys}],oa="world-charts",la={id:oa,label:"World",getBoundaries:ys}});var $g,ca,oe,yt=$t(()=>{"use strict";je();$g=120*1e3,ca=class{constructor(){this.store=new Map;this.invalidationListenerAttached=!1}get(t){let r=this.store.get(t);return r?Date.now()>=r.expiry?(this.store.delete(t),null):r.data:null}set(t,r){this.store.set(t,{data:r,expiry:Date.now()+$g})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}setupInvalidationListeners(){this.invalidationListenerAttached||(this.invalidationListenerAttached=!0,window.addEventListener(H.PLAY_RECORDED,()=>{this.invalidate()}))}},oe=new ca});var gn,Vt,ws=$t(()=>{"use strict";gn=class{constructor(){this.state="closed";this.failureCount=0;this.openedAt=null;this.extraCooldownMs=0}isOpen(){if(this.state==="open"){let t=Date.now()-(this.openedAt??0),r=3e4+this.extraCooldownMs;return t>=r?(this.state="half-open",!1):!0}return!1}recordSuccess(){this.failureCount=0,this.state="closed",this.openedAt=null,this.extraCooldownMs=0}recordFailure(t){if(this.state==="half-open"){this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0;return}this.failureCount+=1,this.failureCount>=3&&(this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=t?t*1e3:0)}reset(){this.recordSuccess()}getResetAt(){return this.state!=="open"||this.openedAt===null?null:this.openedAt+3e4+this.extraCooldownMs}getState(){return this.state}},Vt=new gn});function ba(){try{let e=localStorage.getItem(M.STATSFM_HEALTH);if(e)return JSON.parse(e).lastSuccessAt}catch{}return null}function xs(e){try{localStorage.setItem(M.STATSFM_HEALTH,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent(H.STATSFM_HEALTH_CHANGED,{detail:e}))}async function Ie(e,t){if(qt.isOpen())return xs({lastFetchAt:Date.now(),lastSuccessAt:ba(),lastError:"Circuit open  -  stats.fm temporarily unavailable",circuitOpen:!0}),{ok:!1,status:0,message:"Circuit open  -  stats.fm temporarily unavailable"};let r=new URL(`${eh}${e}`);if(t)for(let[i,a]of Object.entries(t))r.searchParams.set(i,a);localStorage.getItem(M.LOGGING)==="true"&&console.debug("[statsfm]",r.toString());let n=new AbortController,s=setTimeout(()=>n.abort(),1e4);try{let i=await fetch(r.toString(),{headers:{Accept:"application/json"},signal:n.signal});if(clearTimeout(s),!i.ok)return qt.recordFailure(),xs({lastFetchAt:Date.now(),lastSuccessAt:ba(),lastError:`HTTP ${i.status}`,circuitOpen:qt.isOpen()}),{ok:!1,status:i.status,message:`HTTP ${i.status}`};let a=await i.json();return qt.recordSuccess(),xs({lastFetchAt:Date.now(),lastSuccessAt:Date.now(),lastError:null,circuitOpen:!1}),{ok:!0,data:a.item??a.items}}catch(i){clearTimeout(s),qt.recordFailure();let a=(i instanceof Error||i instanceof DOMException)&&i.name==="AbortError"?"Request timed out after 10s":String(i);return xs({lastFetchAt:Date.now(),lastSuccessAt:ba(),lastError:a,circuitOpen:qt.isOpen()}),(i instanceof Error||i instanceof DOMException)&&i.name==="AbortError"?{ok:!1,status:0,message:"Request timed out after 10s"}:{ok:!1,status:0,message:String(i)}}}async function pr(e){let t=await Ie(`/users/${encodeURIComponent(e)}`);return t.ok?{valid:!0,isPlus:t.data.isPlus,displayName:t.data.displayName}:t.status===404?{valid:!1,reason:"not_found"}:t.status===403?{valid:!1,reason:"private"}:t.status===0&&t.message.includes("Circuit open")?{valid:!1,reason:"circuit_open"}:{valid:!1,reason:"network"}}var eh,qt,ks=$t(()=>{"use strict";je();be();ws();eh="https://api.stats.fm/api/v1",qt=new gn});function fr(e,t,r){return e===404?{variant:"UserNotFound",message:t,retryable:!1}:e===429||e===0&&t.includes("Circuit open")?{variant:"RateLimited",message:t,retryable:!1,resetAt:r}:e>=500&&e<=599?{variant:"ServiceDown",message:t,retryable:!0}:e===0?{variant:"NetworkError",message:t,retryable:!0}:{variant:"Unknown",message:t,retryable:!0}}var Nr,Es=$t(()=>{"use strict";Nr=class extends Error{constructor(t){super(t.message),this.name="ClassifiedError",this.appError=t}}});var Xl={};Mo(Xl,{StatsFmProvider:()=>Ps,statsfmProvider:()=>ft});function _r(e){let t=new Date(e);return Number.isFinite(t.getTime())?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`:e.slice(0,10)}function Vl(e){let t=new Set(Object.entries(e).filter(([,a])=>a.count>0).map(([a])=>_r(a)).filter(a=>a.length===10));if(t.size===0)return 0;let r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=_r(n.toISOString());if(!t.has(s)&&(n.setDate(n.getDate()-1),!t.has(_r(n.toISOString()))))return 0;let i=0;for(;t.has(_r(n.toISOString()));)i++,n.setDate(n.getDate()-1);return i}function rt(e,t){if(e)return e.startsWith("spotify:")?e:`spotify:${t}:${e}`}function jl(e){return`${th}:${e}`}function at(e){return e.status==="fulfilled"&&e.value.ok?e.value.data:null}function Ts(e){return e.status==="fulfilled"&&!e.value.ok?{status:e.value.status,message:e.value.message}:e.status==="rejected"?{status:0,message:String(e.reason)}:null}function nh(e){let t=new Map;for(let s of e)for(let i of s.artist.genres)t.set(i,(t.get(i)??0)+ +(s.streams??0));if([...t.values()].some(s=>s>0))return Array.from(t.entries()).sort((s,i)=>i[1]-s[1]).map(([s,i],a)=>({rank:a+1,genre:s,count:i}));let n=new Map;for(let s of e)for(let i of s.artist.genres)n.set(i,(n.get(i)??0)+1);return Array.from(n.entries()).sort((s,i)=>i[1]-s[1]).map(([s,i],a)=>({rank:a+1,genre:s,count:i}))}function ql(e,t){let r=e??[];if(r.length>0){let n=[...r].sort((i,a)=>a.streams-i.streams).map((i,a)=>({rank:a+1,genre:i.genre.tag,count:+(i.streams??0)}));if(n.reduce((i,a)=>i+a.count,0)>0)return n}return nh(t)}function Yl(e){let t=new Map;for(let r of e){let n=r.track.albums[0];if(!n)continue;let s=n.name,i=t.get(s),a=r.track.artists[0]?.name??"",o=rt(n.externalIds?.spotify?.[0],"album")??"",l=r.streams??0;i?i.streams+=l:t.set(s,{albumName:n.name,artistName:a,albumArt:n.image,albumUri:o,streams:l})}return Array.from(t.values()).sort((r,n)=>n.streams-r.streams).map((r,n)=>({rank:n+1,albumUri:r.albumUri||`listening-stats:album:${r.albumName}${r.artistName}`,albumName:r.albumName,artistName:r.artistName,albumArt:r.albumArt,count:r.streams,durationMs:0}))}var th,rh,Ps,ft,Dr=$t(()=>{"use strict";ks();be();Es();Gt();yt();th="statsfm",rh=1440*60*1e3;Ps=class{constructor(){this.config=null}getProviderInfo(){return{id:"statsfm",name:"stats.fm",description:"Stats from stats.fm",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!1,hasSkipRate:!1,tier:this.config?.isPlus??!1?"plus":"free"}}}getSupportedPeriods(){return this.config?.isPlus?bs:ht}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let r=jl(t.id),n=oe.get(r);if(n)return n;let i={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!i)throw new Error(`Unknown stats.fm period: ${t.id}`);let a={range:i},o=encodeURIComponent(this.config.username),l=this.config.isPlus,c=Intl.DateTimeFormat().resolvedOptions().timeZone,d=pn(t),u=d?Ie(`/users/${o}/top/artists`,{after:String(d.start),before:String(d.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),[p,f,m,g,h,b,x,T,y]=await Promise.allSettled([Ie(`/users/${o}/top/tracks`,a),Ie(`/users/${o}/top/artists`,a),Ie(`/users/${o}/top/genres`,a),Ie(`/users/${o}/streams/stats`,a),Ie(`/users/${o}/streams/recent`,{limit:"12"}),l?Ie(`/users/${o}/top/albums`,a):Promise.resolve({ok:!1,status:0,message:"skipped"}),Ie(`/users/${o}/streams/stats/per-day`,{range:"lifetime",timeZone:c}),Ie(`/users/${o}/streams/stats/dates`,{range:i,timeZone:c}),u]),v=Ts(p),k=Ts(f),S=Ts(g);if(v&&k&&S){let $=qt.getResetAt()??void 0;throw new Nr(fr(v.status,v.message,$))}let w=at(p)??[],A=at(f)??[],P=at(m)??[],_=at(y)??[],N=0;if(d){let $=new Set(A.map(me=>me.artist.externalIds?.spotify?.[0]).filter(me=>!!me));if(_.length>0){let me=new Set(_.map(R=>R.artist.externalIds?.spotify?.[0]).filter(R=>!!R)),j=0;for(let R of $)me.has(R)||j++;N=j}else N=$.size}let C=at(g),I=at(h)??[],O=at(b)??[],W=at(x),G=W?.days?Object.values(W.days).filter($=>$.count>0).length:void 0,D=W?.days?Vl(W.days):0,F=W?.days?Object.entries(W.days).map(([$,me])=>({date:_r($),count:me.count})).sort(($,me)=>$.date.localeCompare(me.date)):void 0,E;if(d&&W?.days){let $=0;for(let[me,j]of Object.entries(W.days)){let R=new Date(me).getTime();Number.isFinite(R)&&R>=d.start&&R<d.end&&($+=j.durationMs)}$>0&&(E=$)}let U=at(T),X=new Array(24).fill(0);if(U?.hours)for(let[$,me]of Object.entries(U.hours)){let j=Number($);j>=0&&j<24&&(X[j]=me.count)}let se=X.reduce(($,me,j,R)=>me>R[$]?j:$,0),ae,de;if(U!=null&&(Object.keys(U.hours??{}).length>0||Object.keys(U.weekDays??{}).length>0)&&U?.weekDays){ae=new Array(7).fill(0);for(let[$,me]of Object.entries(U.weekDays)){let j=Number($)-1;j>=0&&j<7&&(ae[j]=me.count)}de=ae.reduce(($,me,j,R)=>me>R[$]?j:$,0)}let ke=w.map($=>{let me=$.streams??0;return{rank:$.position,trackUri:rt($.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${$.track.name}${$.track.artists[0]?.name??""}`,trackName:$.track.name,artistName:$.track.artists[0]?.name??"",artistUri:rt($.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${$.track.artists[0]?.name??""}`,albumName:$.track.albums[0]?.name??"",albumUri:rt($.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:$.track.albums[0]?.image,count:me,durationMs:$.playedMs??($.track.durationMs??0)*me}}),L=A.map($=>({rank:$.position,artistUri:rt($.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${$.artist.name}`,artistName:$.artist.name,count:$.streams??0,durationMs:$.playedMs??0,genres:$.artist.genres,imageUrl:$.artist.image??null})),q=l?O.map($=>({rank:$.position,albumUri:rt($.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${$.album.name}${$.album.artists[0]?.name??""}`,albumName:$.album.name,artistName:$.album.artists[0]?.name??"",albumArt:$.album.image,count:$.streams??0,durationMs:0})):Yl(w),pe=ql(P,A),fe=I.map($=>({trackUri:rt($.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${$.track.name}${$.track.artists[0]?.name??""}`,trackName:$.track.name,artistName:$.track.artists[0]?.name??"",albumArt:$.track.albums[0]?.image,playedAt:new Date($.endTime).getTime()||Date.now()})),Ee={topTracks:ke,topArtists:L,topAlbums:q,topGenres:pe,totalPlays:C?.count??0,totalDuration:C?.durationMs??0,recentPlays:fe,hourlyDistribution:X,peakHour:se,skipRate:0,uniqueTrackCount:C?.cardinality.tracks??0,uniqueArtistCount:C?.cardinality.artists??0,streak:D,listeningDays:G,weekdayDistribution:ae,peakWeekday:de,dailyPlayCounts:F,newArtistCount:N,priorPeriodTotalDuration:E,isFreeTier:!l&&ke.every($=>$.count===0)};return oe.set(r,Ee),Ee}async calculateStatsProgressive(t,r){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let n=jl(t.id),s=oe.get(n);if(s)return r(s,1),r(s,2),r(s,3),s;let a={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[t.id];if(!a)throw new Error(`Unknown stats.fm period: ${t.id}`);let o={range:a},l=encodeURIComponent(this.config.username),c=this.config.isPlus,d=Intl.DateTimeFormat().resolvedOptions().timeZone,u=pn(t),p=u?Ie(`/users/${l}/top/artists`,{after:String(u.start),before:String(u.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),f=Ie(`/users/${l}/streams/stats`,o),m=Ie(`/users/${l}/streams/recent`,{limit:"12"}),g=Ie(`/users/${l}/top/tracks`,o),h=Ie(`/users/${l}/top/artists`,o),b=Ie(`/users/${l}/top/genres`,o),x=c?Ie(`/users/${l}/top/albums`,o):Promise.resolve({ok:!1,status:0,message:"skipped"}),T=Ie(`/users/${l}/streams/stats/per-day`,{range:"lifetime",timeZone:d}),y=Ie(`/users/${l}/streams/stats/dates`,{range:a,timeZone:d}),[v,k]=await Promise.allSettled([f,m]),S=at(v),A=(at(k)??[]).map(j=>({trackUri:rt(j.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${j.track.name}${j.track.artists[0]?.name??""}`,trackName:j.track.name,artistName:j.track.artists[0]?.name??"",albumArt:j.track.albums[0]?.image,playedAt:new Date(j.endTime).getTime()||Date.now()}));r({totalPlays:S?.count??0,totalDuration:S?.durationMs??0,uniqueTrackCount:S?.cardinality.tracks??0,uniqueArtistCount:S?.cardinality.artists??0,skipRate:0,recentPlays:A},1);let P=[],_=[],N=[],C=null,I=[],O=[],W=[],G=[],D=[],F,E,U,X,se,ae=!u,de=()=>{if(!u){X=0,r({newArtistCount:X},2);return}if(!ae)return;if(_.length===0){X=0,r({newArtistCount:X},2);return}let j=new Set(_.map(R=>R.artist.externalIds?.spotify?.[0]).filter(R=>!!R));if(I.length>0){let R=new Set(I.map(ne=>ne.artist.externalIds?.spotify?.[0]).filter(ne=>!!ne)),ee=0;for(let ne of j)R.has(ne)||ee++;X=ee}else X=j.size;r({newArtistCount:X},2)},Ce=[g.then(j=>{P=j.ok?j.data:[],O=P.map(R=>{let ee=R.streams??0;return{rank:R.position,trackUri:rt(R.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${R.track.name}${R.track.artists[0]?.name??""}`,trackName:R.track.name,artistName:R.track.artists[0]?.name??"",artistUri:rt(R.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${R.track.artists[0]?.name??""}`,albumName:R.track.albums[0]?.name??"",albumUri:rt(R.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:R.track.albums[0]?.image,count:ee,durationMs:R.playedMs??(R.track.durationMs??0)*ee}}),r({topTracks:O},2),c||(G=Yl(P),r({topAlbums:G},2))}),Promise.all([h,b]).then(([j,R])=>{_=j.ok?j.data:[],W=_.map(ne=>({rank:ne.position,artistUri:rt(ne.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${ne.artist.name}`,artistName:ne.artist.name,count:ne.streams??0,durationMs:ne.playedMs??0,genres:ne.artist.genres,imageUrl:ne.artist.image??null})),r({topArtists:W},2);let ee=R.ok?R.data:null;D=ql(ee,_),r({topGenres:D},2),de()}),x.then(j=>{c&&(N=j.ok?j.data:[],G=N.map(R=>({rank:R.position,albumUri:rt(R.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${R.album.name}${R.album.artists[0]?.name??""}`,albumName:R.album.name,artistName:R.album.artists[0]?.name??"",albumArt:R.album.image,count:R.streams??0,durationMs:0})),r({topAlbums:G},2))}),T.then(j=>{if(C=j.ok?j.data:null,E=C?.days?Object.values(C.days).filter(R=>R.count>0).length:void 0,F=C?.days?Vl(C.days):0,U=C?.days?Object.entries(C.days).map(([R,ee])=>({date:_r(R),count:ee.count})).sort((R,ee)=>R.date.localeCompare(ee.date)):void 0,u&&C?.days){let R=0;for(let[ee,ne]of Object.entries(C.days)){let De=new Date(ee).getTime();Number.isFinite(De)&&De>=u.start&&De<u.end&&(R+=ne.durationMs)}R>0&&(se=R)}r({streak:F,listeningDays:E,dailyPlayCounts:U,priorPeriodTotalDuration:se},2)}),p.then(j=>{I=j.ok?j.data:[],ae=!0,de()})];await Promise.allSettled(Ce);let[ke]=await Promise.allSettled([y]),L=Ts(ke),q=at(ke),pe=new Array(24).fill(0);if(q?.hours)for(let[j,R]of Object.entries(q.hours)){let ee=Number(j);ee>=0&&ee<24&&(pe[ee]=R.count)}let fe=pe.reduce((j,R,ee,ne)=>R>ne[j]?ee:j,0),Ee,$;if(q!=null&&(Object.keys(q.hours??{}).length>0||Object.keys(q.weekDays??{}).length>0)&&q?.weekDays){Ee=new Array(7).fill(0);for(let[j,R]of Object.entries(q.weekDays)){let ee=Number(j)-1;ee>=0&&ee<7&&(Ee[ee]=R.count)}$=Ee.reduce((j,R,ee,ne)=>R>ne[j]?ee:j,0)}return L?r({hourlyDistribution:new Array(24).fill(0),peakHour:0},3,fr(L.status,L.message)):r({hourlyDistribution:pe,peakHour:fe,weekdayDistribution:Ee,peakWeekday:$},3),{topTracks:O,topArtists:W,topAlbums:G,topGenres:D,totalPlays:S?.count??0,totalDuration:S?.durationMs??0,recentPlays:A,hourlyDistribution:pe,peakHour:fe,skipRate:0,uniqueTrackCount:S?.cardinality.tracks??0,uniqueArtistCount:S?.cardinality.artists??0,streak:F,listeningDays:E,weekdayDistribution:Ee,peakWeekday:$,dailyPlayCounts:U,newArtistCount:X,priorPeriodTotalDuration:se,isFreeTier:!c&&O.every(j=>j.count===0)}}async init(){let t=localStorage.getItem(M.STATSFM_CONFIG);if(!t)return;try{let n=JSON.parse(t);if(typeof n?.username!="string"||!n.username)throw new Error("invalid stats.fm config shape");typeof n.lastValidated!="number"&&(n.lastValidated=0),this.config=n}catch(n){console.warn("[listening-stats] Discarding invalid stats.fm config:",n),localStorage.removeItem(M.STATSFM_CONFIG),this.config=null;return}if(Date.now()-this.config.lastValidated>rh){let n=await pr(this.config.username);n.valid&&(this.config.isPlus=n.isPlus,this.config.lastValidated=Date.now(),localStorage.setItem(M.STATSFM_CONFIG,JSON.stringify(this.config)))}}destroy(){oe.invalidate()}},ft=new Ps});var Or=te((nk,tc)=>{"use strict";var ah="2.0.0",oh=Number.MAX_SAFE_INTEGER||9007199254740991,lh=16,ch=250,uh=["major","premajor","minor","preminor","patch","prepatch","prerelease"];tc.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:lh,MAX_SAFE_BUILD_LENGTH:ch,MAX_SAFE_INTEGER:oh,RELEASE_TYPES:uh,SEMVER_SPEC_VERSION:ah,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var vn=te((sk,rc)=>{"use strict";var dh=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};rc.exports=dh});var Lr=te((vt,nc)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:wa,MAX_SAFE_BUILD_LENGTH:ph,MAX_LENGTH:fh}=Or(),mh=vn();vt=nc.exports={};var gh=vt.re=[],hh=vt.safeRe=[],z=vt.src=[],yh=vt.safeSrc=[],K=vt.t={},bh=0,Sa="[a-zA-Z0-9-]",vh=[["\\s",1],["\\d",fh],[Sa,ph]],wh=e=>{for(let[t,r]of vh)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},re=(e,t,r)=>{let n=wh(t),s=bh++;mh(e,s,t),K[e]=s,z[s]=t,yh[s]=n,gh[s]=new RegExp(t,r?"g":void 0),hh[s]=new RegExp(n,r?"g":void 0)};re("NUMERICIDENTIFIER","0|[1-9]\\d*");re("NUMERICIDENTIFIERLOOSE","\\d+");re("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Sa}*`);re("MAINVERSION",`(${z[K.NUMERICIDENTIFIER]})\\.(${z[K.NUMERICIDENTIFIER]})\\.(${z[K.NUMERICIDENTIFIER]})`);re("MAINVERSIONLOOSE",`(${z[K.NUMERICIDENTIFIERLOOSE]})\\.(${z[K.NUMERICIDENTIFIERLOOSE]})\\.(${z[K.NUMERICIDENTIFIERLOOSE]})`);re("PRERELEASEIDENTIFIER",`(?:${z[K.NONNUMERICIDENTIFIER]}|${z[K.NUMERICIDENTIFIER]})`);re("PRERELEASEIDENTIFIERLOOSE",`(?:${z[K.NONNUMERICIDENTIFIER]}|${z[K.NUMERICIDENTIFIERLOOSE]})`);re("PRERELEASE",`(?:-(${z[K.PRERELEASEIDENTIFIER]}(?:\\.${z[K.PRERELEASEIDENTIFIER]})*))`);re("PRERELEASELOOSE",`(?:-?(${z[K.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${z[K.PRERELEASEIDENTIFIERLOOSE]})*))`);re("BUILDIDENTIFIER",`${Sa}+`);re("BUILD",`(?:\\+(${z[K.BUILDIDENTIFIER]}(?:\\.${z[K.BUILDIDENTIFIER]})*))`);re("FULLPLAIN",`v?${z[K.MAINVERSION]}${z[K.PRERELEASE]}?${z[K.BUILD]}?`);re("FULL",`^${z[K.FULLPLAIN]}$`);re("LOOSEPLAIN",`[v=\\s]*${z[K.MAINVERSIONLOOSE]}${z[K.PRERELEASELOOSE]}?${z[K.BUILD]}?`);re("LOOSE",`^${z[K.LOOSEPLAIN]}$`);re("GTLT","((?:<|>)?=?)");re("XRANGEIDENTIFIERLOOSE",`${z[K.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);re("XRANGEIDENTIFIER",`${z[K.NUMERICIDENTIFIER]}|x|X|\\*`);re("XRANGEPLAIN",`[v=\\s]*(${z[K.XRANGEIDENTIFIER]})(?:\\.(${z[K.XRANGEIDENTIFIER]})(?:\\.(${z[K.XRANGEIDENTIFIER]})(?:${z[K.PRERELEASE]})?${z[K.BUILD]}?)?)?`);re("XRANGEPLAINLOOSE",`[v=\\s]*(${z[K.XRANGEIDENTIFIERLOOSE]})(?:\\.(${z[K.XRANGEIDENTIFIERLOOSE]})(?:\\.(${z[K.XRANGEIDENTIFIERLOOSE]})(?:${z[K.PRERELEASELOOSE]})?${z[K.BUILD]}?)?)?`);re("XRANGE",`^${z[K.GTLT]}\\s*${z[K.XRANGEPLAIN]}$`);re("XRANGELOOSE",`^${z[K.GTLT]}\\s*${z[K.XRANGEPLAINLOOSE]}$`);re("COERCEPLAIN",`(^|[^\\d])(\\d{1,${wa}})(?:\\.(\\d{1,${wa}}))?(?:\\.(\\d{1,${wa}}))?`);re("COERCE",`${z[K.COERCEPLAIN]}(?:$|[^\\d])`);re("COERCEFULL",z[K.COERCEPLAIN]+`(?:${z[K.PRERELEASE]})?(?:${z[K.BUILD]})?(?:$|[^\\d])`);re("COERCERTL",z[K.COERCE],!0);re("COERCERTLFULL",z[K.COERCEFULL],!0);re("LONETILDE","(?:~>?)");re("TILDETRIM",`(\\s*)${z[K.LONETILDE]}\\s+`,!0);vt.tildeTrimReplace="$1~";re("TILDE",`^${z[K.LONETILDE]}${z[K.XRANGEPLAIN]}$`);re("TILDELOOSE",`^${z[K.LONETILDE]}${z[K.XRANGEPLAINLOOSE]}$`);re("LONECARET","(?:\\^)");re("CARETTRIM",`(\\s*)${z[K.LONECARET]}\\s+`,!0);vt.caretTrimReplace="$1^";re("CARET",`^${z[K.LONECARET]}${z[K.XRANGEPLAIN]}$`);re("CARETLOOSE",`^${z[K.LONECARET]}${z[K.XRANGEPLAINLOOSE]}$`);re("COMPARATORLOOSE",`^${z[K.GTLT]}\\s*(${z[K.LOOSEPLAIN]})$|^$`);re("COMPARATOR",`^${z[K.GTLT]}\\s*(${z[K.FULLPLAIN]})$|^$`);re("COMPARATORTRIM",`(\\s*)${z[K.GTLT]}\\s*(${z[K.LOOSEPLAIN]}|${z[K.XRANGEPLAIN]})`,!0);vt.comparatorTrimReplace="$1$2$3";re("HYPHENRANGE",`^\\s*(${z[K.XRANGEPLAIN]})\\s+-\\s+(${z[K.XRANGEPLAIN]})\\s*$`);re("HYPHENRANGELOOSE",`^\\s*(${z[K.XRANGEPLAINLOOSE]})\\s+-\\s+(${z[K.XRANGEPLAINLOOSE]})\\s*$`);re("STAR","(<|>)?=?\\s*\\*");re("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");re("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var As=te((ik,sc)=>{"use strict";var Sh=Object.freeze({loose:!0}),xh=Object.freeze({}),kh=e=>e?typeof e!="object"?Sh:e:xh;sc.exports=kh});var xa=te((ak,oc)=>{"use strict";var ic=/^[0-9]+$/,ac=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let r=ic.test(e),n=ic.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1},Eh=(e,t)=>ac(t,e);oc.exports={compareIdentifiers:ac,rcompareIdentifiers:Eh}});var Be=te((ok,cc)=>{"use strict";var Rs=vn(),{MAX_LENGTH:lc,MAX_SAFE_INTEGER:Cs}=Or(),{safeRe:Is,t:Ns}=Lr(),Th=As(),{compareIdentifiers:ka}=xa(),Ph=(e,t)=>{let r=t.split(".");if(r.length>e.length)return!1;for(let n=0;n<r.length;n++)if(ka(e[n],r[n])!==0)return!1;return!0},Ea=class e{constructor(t,r){if(r=Th(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>lc)throw new TypeError(`version is longer than ${lc} characters`);Rs("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=t.trim().match(r.loose?Is[Ns.LOOSE]:Is[Ns.FULL]);if(!n)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Cs||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Cs||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Cs||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(s=>{if(/^[0-9]+$/.test(s)){let i=+s;if(i>=0&&i<Cs)return i}return s}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Rs("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],s=t.prerelease[r];if(Rs("prerelease compare",r,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return ka(n,s)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let n=this.build[r],s=t.build[r];if(Rs("build compare",r,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return ka(n,s)}while(++r)}inc(t,r,n){if(t.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let s=`-${r}`.match(this.options.loose?Is[Ns.PRERELEASELOOSE]:Is[Ns.PRERELEASE]);if(!s||s[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let s=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[s];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(s)}}if(r){let i=[r,s];if(n===!1&&(i=[r]),Ph(this.prerelease,r)){let a=this.prerelease[r.split(".").length];isNaN(a)&&(this.prerelease=i)}else this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};cc.exports=Ea});var Yt=te((lk,dc)=>{"use strict";var uc=Be(),Ah=(e,t,r=!1)=>{if(e instanceof uc)return e;try{return new uc(e,t)}catch(n){if(!r)return null;throw n}};dc.exports=Ah});var fc=te((ck,pc)=>{"use strict";var Rh=Yt(),Ch=(e,t)=>{let r=Rh(e,t);return r?r.version:null};pc.exports=Ch});var gc=te((uk,mc)=>{"use strict";var Ih=Yt(),Nh=(e,t)=>{let r=Ih(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};mc.exports=Nh});var bc=te((dk,yc)=>{"use strict";var hc=Be(),_h=(e,t,r,n,s)=>{typeof r=="string"&&(s=n,n=r,r=void 0);try{return new hc(e instanceof hc?e.version:e,r).inc(t,n,s).version}catch{return null}};yc.exports=_h});var Sc=te((pk,wc)=>{"use strict";var vc=Yt(),Dh=(e,t)=>{let r=vc(e,null,!0),n=vc(t,null,!0),s=r.compare(n);if(s===0)return null;let i=s>0,a=i?r:n,o=i?n:r,l=!!a.prerelease.length;if(!!o.prerelease.length&&!l){if(!o.patch&&!o.minor)return"major";if(o.compareMain(a)===0)return o.minor&&!o.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};wc.exports=Dh});var kc=te((fk,xc)=>{"use strict";var Oh=Be(),Lh=(e,t)=>new Oh(e,t).major;xc.exports=Lh});var Tc=te((mk,Ec)=>{"use strict";var Mh=Be(),$h=(e,t)=>new Mh(e,t).minor;Ec.exports=$h});var Ac=te((gk,Pc)=>{"use strict";var Uh=Be(),Fh=(e,t)=>new Uh(e,t).patch;Pc.exports=Fh});var Cc=te((hk,Rc)=>{"use strict";var Bh=Yt(),Wh=(e,t)=>{let r=Bh(e,t);return r&&r.prerelease.length?r.prerelease:null};Rc.exports=Wh});var ot=te((yk,Nc)=>{"use strict";var Ic=Be(),Hh=(e,t,r)=>new Ic(e,r).compare(new Ic(t,r));Nc.exports=Hh});var Dc=te((bk,_c)=>{"use strict";var zh=ot(),Kh=(e,t,r)=>zh(t,e,r);_c.exports=Kh});var Lc=te((vk,Oc)=>{"use strict";var Gh=ot(),Vh=(e,t)=>Gh(e,t,!0);Oc.exports=Vh});var _s=te((wk,$c)=>{"use strict";var Mc=Be(),jh=(e,t,r)=>{let n=new Mc(e,r),s=new Mc(t,r);return n.compare(s)||n.compareBuild(s)};$c.exports=jh});var Fc=te((Sk,Uc)=>{"use strict";var qh=_s(),Yh=(e,t)=>e.sort((r,n)=>qh(r,n,t));Uc.exports=Yh});var Wc=te((xk,Bc)=>{"use strict";var Xh=_s(),Zh=(e,t)=>e.sort((r,n)=>Xh(n,r,t));Bc.exports=Zh});var wn=te((kk,Hc)=>{"use strict";var Jh=ot(),Qh=(e,t,r)=>Jh(e,t,r)>0;Hc.exports=Qh});var Ds=te((Ek,zc)=>{"use strict";var ey=ot(),ty=(e,t,r)=>ey(e,t,r)<0;zc.exports=ty});var Ta=te((Tk,Kc)=>{"use strict";var ry=ot(),ny=(e,t,r)=>ry(e,t,r)===0;Kc.exports=ny});var Pa=te((Pk,Gc)=>{"use strict";var sy=ot(),iy=(e,t,r)=>sy(e,t,r)!==0;Gc.exports=iy});var Os=te((Ak,Vc)=>{"use strict";var ay=ot(),oy=(e,t,r)=>ay(e,t,r)>=0;Vc.exports=oy});var Ls=te((Rk,jc)=>{"use strict";var ly=ot(),cy=(e,t,r)=>ly(e,t,r)<=0;jc.exports=cy});var Aa=te((Ck,qc)=>{"use strict";var uy=Ta(),dy=Pa(),py=wn(),fy=Os(),my=Ds(),gy=Ls(),hy=(e,t,r,n)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return uy(e,r,n);case"!=":return dy(e,r,n);case">":return py(e,r,n);case">=":return fy(e,r,n);case"<":return my(e,r,n);case"<=":return gy(e,r,n);default:throw new TypeError(`Invalid operator: ${t}`)}};qc.exports=hy});var Xc=te((Ik,Yc)=>{"use strict";var yy=Be(),by=Yt(),{safeRe:Ms,t:$s}=Lr(),vy=(e,t)=>{if(e instanceof yy)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let r=null;if(!t.rtl)r=e.match(t.includePrerelease?Ms[$s.COERCEFULL]:Ms[$s.COERCE]);else{let l=t.includePrerelease?Ms[$s.COERCERTLFULL]:Ms[$s.COERCERTL],c;for(;(c=l.exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],s=r[3]||"0",i=r[4]||"0",a=t.includePrerelease&&r[5]?`-${r[5]}`:"",o=t.includePrerelease&&r[6]?`+${r[6]}`:"";return by(`${n}.${s}.${i}${a}${o}`,t)};Yc.exports=vy});var Jc=te((Nk,Zc)=>{"use strict";var wy=Yt(),Sy=Or(),xy=Be(),ky=(e,t,r)=>{if(!Sy.RELEASE_TYPES.includes(t))return null;let n=Ey(e,r);return n&&Ty(n,t)},Ey=(e,t)=>{let r=e instanceof xy?e.version:e;return wy(r,t)},Ty=(e,t)=>{if(Py(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},Py=e=>e.startsWith("pre");Zc.exports=ky});var eu=te((_k,Qc)=>{"use strict";var Ra=class{constructor(){this.max=1e3,this.map=new Map}get(t){let r=this.map.get(t);if(r!==void 0)return this.map.delete(t),this.map.set(t,r),r}delete(t){return this.map.delete(t)}set(t,r){if(!this.delete(t)&&r!==void 0){if(this.map.size>=this.max){let s=this.map.keys().next().value;this.delete(s)}this.map.set(t,r)}return this}};Qc.exports=Ra});var lt=te((Dk,su)=>{"use strict";var Ay=/\s+/g,Ca=class e{constructor(t,r){if(r=Cy(r),t instanceof e)return t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease?t:new e(t.raw,r);if(t instanceof Ia)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=t.trim().replace(Ay," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(s=>!ru(s[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let s of this.set)if(s.length===1&&Uy(s[0])){this.set=[s];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let r=this.set[t];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace($y,"");let n=((this.options.includePrerelease&&Ly)|(this.options.loose&&My))+":"+t,s=tu.get(n);if(s)return s;let i=this.options.loose,a=i?Ye[We.HYPHENRANGELOOSE]:Ye[We.HYPHENRANGE];t=t.replace(a,Yy(this.options.includePrerelease)),we("hyphen replace",t),t=t.replace(Ye[We.COMPARATORTRIM],_y),we("comparator trim",t),t=t.replace(Ye[We.TILDETRIM],Dy),we("tilde trim",t),t=t.replace(Ye[We.CARETTRIM],Oy),we("caret trim",t);let o=t.split(" ").map(u=>Fy(u,this.options)).join(" ").split(/\s+/).map(u=>qy(u,this.options));i&&(o=o.filter(u=>(we("loose invalid filter",u,this.options),!!u.match(Ye[We.COMPARATORLOOSE])))),we("range list",o);let l=new Map,c=o.map(u=>new Ia(u,this.options));for(let u of c){if(ru(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return tu.set(n,d),d}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(n=>nu(n,r)&&t.set.some(s=>nu(s,r)&&n.every(i=>s.every(a=>i.intersects(a,r)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new Iy(t,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(Xy(this.set[r],t,this.options))return!0;return!1}};su.exports=Ca;var Ry=eu(),tu=new Ry,Cy=As(),Ia=Sn(),we=vn(),Iy=Be(),{safeRe:Ye,src:Ny,t:We,comparatorTrimReplace:_y,tildeTrimReplace:Dy,caretTrimReplace:Oy}=Lr(),{FLAG_INCLUDE_PRERELEASE:Ly,FLAG_LOOSE:My}=Or(),$y=new RegExp(Ny[We.BUILD],"g"),ru=e=>e.value==="<0.0.0-0",Uy=e=>e.value==="",nu=(e,t)=>{let r=!0,n=e.slice(),s=n.pop();for(;r&&n.length;)r=n.every(i=>s.intersects(i,t)),s=n.pop();return r},Fy=(e,t)=>(e=e.replace(Ye[We.BUILD],""),we("comp",e,t),e=zy(e,t),we("caret",e),e=Wy(e,t),we("tildes",e),e=Gy(e,t),we("xrange",e),e=jy(e,t),we("stars",e),e),_e=e=>!e||e.toLowerCase()==="x"||e==="*",By=(e,t,r)=>_e(e)&&!_e(t)||_e(t)&&r&&!_e(r),Wy=(e,t)=>e.trim().split(/\s+/).map(r=>Hy(r,t)).join(" "),Hy=(e,t)=>{let r=t.loose?Ye[We.TILDELOOSE]:Ye[We.TILDE],n=t.includePrerelease?"-0":"";return e.replace(r,(s,i,a,o,l)=>{we("tilde",e,s,i,a,o,l);let c;return _e(i)?c="":_e(a)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:_e(o)?c=`>=${i}.${a}.0${n} <${i}.${+a+1}.0-0`:l?(we("replaceTilde pr",l),c=`>=${i}.${a}.${o}-${l} <${i}.${+a+1}.0-0`):c=`>=${i}.${a}.${o} <${i}.${+a+1}.0-0`,we("tilde return",c),c})},zy=(e,t)=>e.trim().split(/\s+/).map(r=>Ky(r,t)).join(" "),Ky=(e,t)=>{we("caret",e,t);let r=t.loose?Ye[We.CARETLOOSE]:Ye[We.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(s,i,a,o,l)=>{we("caret",e,s,i,a,o,l);let c;return _e(i)?c="":_e(a)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:_e(o)?i==="0"?c=`>=${i}.${a}.0${n} <${i}.${+a+1}.0-0`:c=`>=${i}.${a}.0${n} <${+i+1}.0.0-0`:l?(we("replaceCaret pr",l),i==="0"?a==="0"?c=`>=${i}.${a}.${o}-${l} <${i}.${a}.${+o+1}-0`:c=`>=${i}.${a}.${o}-${l} <${i}.${+a+1}.0-0`:c=`>=${i}.${a}.${o}-${l} <${+i+1}.0.0-0`):(we("no pr"),i==="0"?a==="0"?c=`>=${i}.${a}.${o} <${i}.${a}.${+o+1}-0`:c=`>=${i}.${a}.${o} <${i}.${+a+1}.0-0`:c=`>=${i}.${a}.${o} <${+i+1}.0.0-0`),we("caret return",c),c})},Gy=(e,t)=>(we("replaceXRanges",e,t),e.split(/\s+/).map(r=>Vy(r,t)).join(" ")),Vy=(e,t)=>{e=e.trim();let r=t.loose?Ye[We.XRANGELOOSE]:Ye[We.XRANGE];return e.replace(r,(n,s,i,a,o,l)=>{if(we("xRange",e,n,s,i,a,o,l),By(i,a,o))return e;let c=_e(i),d=c||_e(a),u=d||_e(o),p=u;return s==="="&&p&&(s=""),l=t.includePrerelease?"-0":"",c?s===">"||s==="<"?n="<0.0.0-0":n="*":s&&p?(d&&(a=0),o=0,s===">"?(s=">=",d?(i=+i+1,a=0,o=0):(a=+a+1,o=0)):s==="<="&&(s="<",d?i=+i+1:a=+a+1),s==="<"&&(l="-0"),n=`${s+i}.${a}.${o}${l}`):d?n=`>=${i}.0.0${l} <${+i+1}.0.0-0`:u&&(n=`>=${i}.${a}.0${l} <${i}.${+a+1}.0-0`),we("xRange return",n),n})},jy=(e,t)=>(we("replaceStars",e,t),e.trim().replace(Ye[We.STAR],"")),qy=(e,t)=>(we("replaceGTE0",e,t),e.trim().replace(Ye[t.includePrerelease?We.GTE0PRE:We.GTE0],"")),Yy=e=>(t,r,n,s,i,a,o,l,c,d,u,p)=>(_e(n)?r="":_e(s)?r=`>=${n}.0.0${e?"-0":""}`:_e(i)?r=`>=${n}.${s}.0${e?"-0":""}`:a?r=`>=${r}`:r=`>=${r}${e?"-0":""}`,_e(c)?l="":_e(d)?l=`<${+c+1}.0.0-0`:_e(u)?l=`<${c}.${+d+1}.0-0`:p?l=`<=${c}.${d}.${u}-${p}`:e?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),Xy=(e,t,r)=>{for(let n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let n=0;n<e.length;n++)if(we(e[n].semver),e[n].semver!==Ia.ANY&&e[n].semver.prerelease.length>0){let s=e[n].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}});var Sn=te((Ok,uu)=>{"use strict";var xn=Symbol("SemVer ANY"),Da=class e{static get ANY(){return xn}constructor(t,r){if(r=iu(r),t instanceof e){if(t.loose===!!r.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),_a("comparator",t,r),this.options=r,this.loose=!!r.loose,this.parse(t),this.semver===xn?this.value="":this.value=this.operator+this.semver.version,_a("comp",this)}parse(t){let r=this.options.loose?au[ou.COMPARATORLOOSE]:au[ou.COMPARATOR],n=t.match(r);if(!n)throw new TypeError(`Invalid comparator: ${t}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new lu(n[2],this.options.loose):this.semver=xn}toString(){return this.value}test(t){if(_a("Comparator.test",t,this.options.loose),this.semver===xn||t===xn)return!0;if(typeof t=="string")try{t=new lu(t,this.options)}catch{return!1}return Na(t,this.operator,this.semver,this.options)}intersects(t,r){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new cu(t.value,r).test(this.value):t.operator===""?t.value===""?!0:new cu(this.value,r).test(t.semver):(r=iu(r),r.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||Na(this.semver,"<",t.semver,r)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||Na(this.semver,">",t.semver,r)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};uu.exports=Da;var iu=As(),{safeRe:au,t:ou}=Lr(),Na=Aa(),_a=vn(),lu=Be(),cu=lt()});var kn=te((Lk,du)=>{"use strict";var Zy=lt(),Jy=(e,t,r)=>{try{t=new Zy(t,r)}catch{return!1}return t.test(e)};du.exports=Jy});var fu=te((Mk,pu)=>{"use strict";var Qy=lt(),eb=(e,t)=>new Qy(e,t).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));pu.exports=eb});var gu=te(($k,mu)=>{"use strict";var tb=Be(),rb=lt(),nb=(e,t,r)=>{let n=null,s=null,i=null;try{i=new rb(t,r)}catch{return null}return e.forEach(a=>{i.test(a)&&(!n||s.compare(a)===-1)&&(n=a,s=new tb(n,r))}),n};mu.exports=nb});var yu=te((Uk,hu)=>{"use strict";var sb=Be(),ib=lt(),ab=(e,t,r)=>{let n=null,s=null,i=null;try{i=new ib(t,r)}catch{return null}return e.forEach(a=>{i.test(a)&&(!n||s.compare(a)===1)&&(n=a,s=new sb(n,r))}),n};hu.exports=ab});var wu=te((Fk,vu)=>{"use strict";var Oa=Be(),ob=lt(),bu=wn(),lb=(e,t)=>{e=new ob(e,t);let r=new Oa("0.0.0");if(e.test(r)||(r=new Oa("0.0.0-0"),e.test(r)))return r;r=null;for(let n=0;n<e.set.length;++n){let s=e.set[n],i=null;s.forEach(a=>{let o=new Oa(a.semver.version);switch(a.operator){case">":o.prerelease.length===0?o.patch++:o.prerelease.push(0),o.raw=o.format();case"":case">=":(!i||bu(o,i))&&(i=o);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${a.operator}`)}}),i&&(!r||bu(r,i))&&(r=i)}return r&&e.test(r)?r:null};vu.exports=lb});var xu=te((Bk,Su)=>{"use strict";var cb=lt(),ub=(e,t)=>{try{return new cb(e,t).range||"*"}catch{return null}};Su.exports=ub});var Us=te((Wk,Pu)=>{"use strict";var db=Be(),Tu=Sn(),{ANY:pb}=Tu,fb=lt(),mb=kn(),ku=wn(),Eu=Ds(),gb=Ls(),hb=Os(),yb=(e,t,r,n)=>{e=new db(e,n),t=new fb(t,n);let s,i,a,o,l;switch(r){case">":s=ku,i=gb,a=Eu,o=">",l=">=";break;case"<":s=Eu,i=hb,a=ku,o="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(mb(e,t,n))return!1;for(let c=0;c<t.set.length;++c){let d=t.set[c],u=null,p=null;if(d.forEach(f=>{f.semver===pb&&(f=new Tu(">=0.0.0")),u=u||f,p=p||f,s(f.semver,u.semver,n)?u=f:a(f.semver,p.semver,n)&&(p=f)}),u.operator===o||u.operator===l||(!p.operator||p.operator===o)&&i(e,p.semver))return!1;if(p.operator===l&&a(e,p.semver))return!1}return!0};Pu.exports=yb});var Ru=te((Hk,Au)=>{"use strict";var bb=Us(),vb=(e,t,r)=>bb(e,t,">",r);Au.exports=vb});var Iu=te((zk,Cu)=>{"use strict";var wb=Us(),Sb=(e,t,r)=>wb(e,t,"<",r);Cu.exports=Sb});var Du=te((Kk,_u)=>{"use strict";var Nu=lt(),xb=(e,t,r)=>(e=new Nu(e,r),t=new Nu(t,r),e.intersects(t,r));_u.exports=xb});var Lu=te((Gk,Ou)=>{"use strict";var kb=kn(),Eb=ot();Ou.exports=(e,t,r)=>{let n=[],s=null,i=null,a=e.sort((d,u)=>Eb(d,u,r));for(let d of a)kb(d,t,r)?(i=d,s||(s=d)):(i&&n.push([s,i]),i=null,s=null);s&&n.push([s,null]);let o=[];for(let[d,u]of n)d===u?o.push(d):!u&&d===a[0]?o.push("*"):u?d===a[0]?o.push(`<=${u}`):o.push(`${d} - ${u}`):o.push(`>=${d}`);let l=o.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var Wu=te((Vk,Bu)=>{"use strict";var Mu=lt(),$a=Sn(),{ANY:La}=$a,Ma=kn(),Ua=ot(),Tb=(e,t,r={})=>{if(e===t)return!0;e=new Mu(e,r),t=new Mu(t,r);let n=!1;e:for(let s of e.set){for(let i of t.set){let a=Ab(s,i,r);if(n=n||a!==null,a)continue e}if(n)return!1}return!0},Pb=[new $a(">=0.0.0-0")],$u=[new $a(">=0.0.0")],Ab=(e,t,r)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===La){if(t.length===1&&t[0].semver===La)return!0;r.includePrerelease?e=Pb:e=$u}if(t.length===1&&t[0].semver===La){if(r.includePrerelease)return!0;t=$u}let n=new Set,s,i;for(let f of e)f.operator===">"||f.operator===">="?s=Uu(s,f,r):f.operator==="<"||f.operator==="<="?i=Fu(i,f,r):n.add(f.semver);if(n.size>1)return null;let a;if(s&&i){if(a=Ua(s.semver,i.semver,r),a>0)return null;if(a===0&&(s.operator!==">="||i.operator!=="<="))return null}for(let f of n){if(s&&!Ma(f,String(s),r)||i&&!Ma(f,String(i),r))return null;for(let m of t)if(!Ma(f,String(m),r))return!1;return!0}let o,l,c,d,u=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,p=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1;u&&u.prerelease.length===1&&i.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let f of t){if(d=d||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",s){if(p&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===p.major&&f.semver.minor===p.minor&&f.semver.patch===p.patch&&(p=!1),f.operator===">"||f.operator===">="){if(o=Uu(s,f,r),o===f&&o!==s)return!1}else if(s.operator===">="&&!f.test(s.semver))return!1}if(i){if(u&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===u.major&&f.semver.minor===u.minor&&f.semver.patch===u.patch&&(u=!1),f.operator==="<"||f.operator==="<="){if(l=Fu(i,f,r),l===f&&l!==i)return!1}else if(i.operator==="<="&&!f.test(i.semver))return!1}if(!f.operator&&(i||s)&&a!==0)return!1}return!(s&&c&&!i&&a!==0||i&&d&&!s&&a!==0||p||u)},Uu=(e,t,r)=>{if(!e)return t;let n=Ua(e.semver,t.semver,r);return n>0?e:n<0||t.operator===">"&&e.operator===">="?t:e},Fu=(e,t,r)=>{if(!e)return t;let n=Ua(e.semver,t.semver,r);return n<0?e:n>0||t.operator==="<"&&e.operator==="<="?t:e};Bu.exports=Tb});var Ba=te((jk,Ku)=>{"use strict";var Fa=Lr(),Hu=Or(),Rb=Be(),zu=xa(),Cb=Yt(),Ib=fc(),Nb=gc(),_b=bc(),Db=Sc(),Ob=kc(),Lb=Tc(),Mb=Ac(),$b=Cc(),Ub=ot(),Fb=Dc(),Bb=Lc(),Wb=_s(),Hb=Fc(),zb=Wc(),Kb=wn(),Gb=Ds(),Vb=Ta(),jb=Pa(),qb=Os(),Yb=Ls(),Xb=Aa(),Zb=Xc(),Jb=Jc(),Qb=Sn(),ev=lt(),tv=kn(),rv=fu(),nv=gu(),sv=yu(),iv=wu(),av=xu(),ov=Us(),lv=Ru(),cv=Iu(),uv=Du(),dv=Lu(),pv=Wu();Ku.exports={parse:Cb,valid:Ib,clean:Nb,inc:_b,diff:Db,major:Ob,minor:Lb,patch:Mb,prerelease:$b,compare:Ub,rcompare:Fb,compareLoose:Bb,compareBuild:Wb,sort:Hb,rsort:zb,gt:Kb,lt:Gb,eq:Vb,neq:jb,gte:qb,lte:Yb,cmp:Xb,coerce:Zb,truncate:Jb,Comparator:Qb,Range:ev,satisfies:tv,toComparators:rv,maxSatisfying:nv,minSatisfying:sv,minVersion:iv,validRange:av,outside:ov,gtr:lv,ltr:cv,intersects:uv,simplifyRange:dv,subset:pv,SemVer:Rb,re:Fa.re,src:Fa.src,tokens:Fa.t,SEMVER_SPEC_VERSION:Hu.SEMVER_SPEC_VERSION,RELEASE_TYPES:Hu.RELEASE_TYPES,compareIdentifiers:zu.compareIdentifiers,rcompareIdentifiers:zu.rcompareIdentifiers}});var YS={};Mo(YS,{render:()=>jS,unmount:()=>qS});je();be();var Fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$e=Object.keys,xe=Array.isArray;typeof Promise<"u"&&!Fe.Promise&&(Fe.Promise=Promise);function et(e,t){return typeof t!="object"||$e(t).forEach(function(r){e[r]=t[r]}),e}var xr=Object.getPrototypeOf,Xf={}.hasOwnProperty;function tt(e,t){return Xf.call(e,t)}function kr(e,t){typeof t=="function"&&(t=t(xr(e))),(typeof Reflect>"u"?$e:Reflect.ownKeys)(t).forEach(r=>{Bt(e,r,t[r])})}var rl=Object.defineProperty;function Bt(e,t,r,n){rl(e,t,et(r&&tt(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},n))}function Er(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Bt(e.prototype,"constructor",e),{extend:kr.bind(null,e.prototype)}}}}var Zf=Object.getOwnPropertyDescriptor;function nl(e,t){let r=Zf(e,t),n;return r||(n=xr(e))&&nl(n,t)}var Jf=[].slice;function us(e,t,r){return Jf.call(e,t,r)}function sl(e,t){return t(e)}function Zr(e){if(!e)throw new Error("Assertion Failed")}function il(e){Fe.setImmediate?setImmediate(e):setTimeout(e,0)}function Qf(e,t){return e.reduce((r,n,s)=>{var i=t(n,s);return i&&(r[i[0]]=i[1]),r},{})}function Rt(e,t){if(typeof t=="string"&&tt(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var r=[],n=0,s=t.length;n<s;++n){var i=Rt(e,t[n]);r.push(i)}return r}var a=t.indexOf(".");if(a!==-1){var o=e[t.substr(0,a)];return o==null?void 0:Rt(o,t.substr(a+1))}}function Xe(e,t,r){if(!(!e||t===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Zr(typeof r!="string"&&"length"in r);for(var n=0,s=t.length;n<s;++n)Xe(e,t[n],r[n])}else{var i=t.indexOf(".");if(i!==-1){var a=t.substr(0,i),o=t.substr(i+1);if(o==="")r===void 0?xe(e)&&!isNaN(parseInt(a))?e.splice(a,1):delete e[a]:e[a]=r;else{var l=e[a];if(!l||!tt(e,a)){if(r===void 0)return;l=e[a]={}}Xe(l,o,r)}}else r===void 0?xe(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=r}}function em(e,t){typeof t=="string"?Xe(e,t,void 0):"length"in t&&[].map.call(t,function(r){Xe(e,r,void 0)})}function al(e){var t={};for(var r in e)tt(e,r)&&(t[r]=e[r]);return t}var tm=[].concat;function ol(e){return tm.apply([],e)}var rm="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ol([8,16,32,64].map(e=>["Int","Uint","Float"].map(t=>t+e+"Array")))).filter(e=>Fe[e]),ll=new Set(rm.map(e=>Fe[e]));function cl(e){let t={};for(let r in e)if(tt(e,r)){let n=e[r];t[r]=!n||typeof n!="object"||ll.has(n.constructor)?n:cl(n)}return t}var Qr=null;function lr(e){Qr=new WeakMap;let t=Si(e);return Qr=null,t}function Si(e){if(!e||typeof e!="object")return e;let t=Qr.get(e);if(t)return t;if(xe(e)){t=[],Qr.set(e,t);for(var r=0,n=e.length;r<n;++r)t.push(Si(e[r]))}else if(ll.has(e.constructor))t=e;else{let i=xr(e);t=i===Object.prototype?{}:Object.create(i),Qr.set(e,t);for(var s in e)tt(e,s)&&(t[s]=Si(e[s]))}return t}var{toString:nm}={};function xi(e){return nm.call(e).slice(8,-1)}var ki=typeof Symbol<"u"?Symbol.iterator:"@@iterator",sm=typeof ki=="symbol"?function(e){var t;return e!=null&&(t=e[ki])&&t.apply(e)}:function(){return null};function tr(e,t){let r=e.indexOf(t);return r>=0&&e.splice(r,1),r>=0}var vr={};function At(e){var t,r,n,s;if(arguments.length===1){if(xe(e))return e.slice();if(this===vr&&typeof e=="string")return[e];if(s=sm(e)){for(r=[];n=s.next(),!n.done;)r.push(n.value);return r}if(e==null)return[e];if(t=e.length,typeof t=="number"){for(r=new Array(t);t--;)r[t]=e[t];return r}return[e]}for(t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return r}var Hi=typeof Symbol<"u"?e=>e[Symbol.toStringTag]==="AsyncFunction":()=>!1,im=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],ul=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],zi=im.concat(ul),am={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Tr(e,t){this.name=e,this.message=t}Er(Tr).from(Error).extend({toString:function(){return this.name+": "+this.message}});function dl(e,t){return e+". Errors: "+Object.keys(t).map(r=>t[r].toString()).filter((r,n,s)=>s.indexOf(r)===n).join(`
`)}function Zn(e,t,r,n){this.failures=t,this.failedKeys=n,this.successCount=r,this.message=dl(e,t)}Er(Zn).from(Tr);function Sr(e,t){this.name="BulkError",this.failures=Object.keys(t).map(r=>t[r]),this.failuresByPos=t,this.message=dl(e,this.failures)}Er(Sr).from(Tr);var Ki=zi.reduce((e,t)=>(e[t]=t+"Error",e),{}),om=Tr,J=zi.reduce((e,t)=>{var r=t+"Error";function n(s,i){this.name=r,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=am[t]||r,this.inner=null)}return Er(n).from(om),e[t]=n,e},{});J.Syntax=SyntaxError;J.Type=TypeError;J.Range=RangeError;var Fo=ul.reduce((e,t)=>(e[t+"Error"]=J[t],e),{});function lm(e,t){if(!e||e instanceof Tr||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Fo[e.name])return e;var r=new Fo[e.name](t||e.message,e);return"stack"in e&&Bt(r,"stack",{get:function(){return this.inner.stack}}),r}var ds=zi.reduce((e,t)=>(["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=J[t]),e),{});ds.ModifyError=Zn;ds.DexieError=Tr;ds.BulkError=Sr;function he(){}function ln(e){return e}function cm(e,t){return e==null||e===ln?t:function(r){return t(e(r))}}function cr(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function um(e,t){return e===he?t:function(){var r=e.apply(this,arguments);r!==void 0&&(arguments[0]=r);var n=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=t.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?cr(n,this.onsuccess):n),s&&(this.onerror=this.onerror?cr(s,this.onerror):s),i!==void 0?i:r}}function dm(e,t){return e===he?t:function(){e.apply(this,arguments);var r=this.onsuccess,n=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?cr(r,this.onsuccess):r),n&&(this.onerror=this.onerror?cr(n,this.onerror):n)}}function pm(e,t){return e===he?t:function(r){var n=e.apply(this,arguments);et(r,n);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?cr(s,this.onsuccess):s),i&&(this.onerror=this.onerror?cr(i,this.onerror):i),n===void 0?a===void 0?void 0:a:et(n,a)}}function fm(e,t){return e===he?t:function(){return t.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function Gi(e,t){return e===he?t:function(){var r=e.apply(this,arguments);if(r&&typeof r.then=="function"){for(var n=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return r.then(function(){return t.apply(n,i)})}return t.apply(this,arguments)}}var gt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function pl(e,t){gt=e}var tn={},fl=100,[Bo,Wo,mm]=typeof Promise>"u"?[]:(()=>{let e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,xr(e),e];let t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,xr(t),e]})(),gm=Wo&&Wo.then,rr=Bo&&Bo.constructor,Vi=!!mm;function hm(){queueMicrotask(bm)}var rn=function(e,t){Jr.push([e,t]),Jn&&(hm(),Jn=!1)},Ei=!0,Jn=!0,ir=[],zn=[],Ti=ln,Ct={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:he,pgp:!1,env:{},finalize:he},Y=Ct,Jr=[],ar=0,Kn=[];function B(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=Y;if(typeof e!="function"){if(e!==tn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Ai(this,this._value);return}this._state=null,this._value=null,++t.ref,gl(this,e)}var Pi={get:function(){var e=Y,t=Qn;function r(n,s){var i=!e.global&&(e!==Y||t!==Qn);let a=i&&!Ht();var o=new B((l,c)=>{ji(this,new ml(Ho(n,e,i,a),Ho(s,e,i,a),l,c,e))});return this._consoleTask&&(o._consoleTask=this._consoleTask),o}return r.prototype=tn,r},set:function(e){Bt(this,"then",e&&e.prototype===tn?Pi:{get:function(){return e},set:Pi.set})}};kr(B.prototype,{then:Pi,_then:function(e,t){ji(this,new ml(null,null,e,t,Y))},catch:function(e){if(arguments.length===1)return this.then(null,e);var t=arguments[0],r=arguments[1];return typeof t=="function"?this.then(null,n=>n instanceof t?r(n):Gn(n)):this.then(null,n=>n&&n.name===t?r(n):Gn(n))},finally:function(e){return this.then(t=>B.resolve(e()).then(()=>t),t=>B.resolve(e()).then(()=>Gn(t)))},timeout:function(e,t){return e<1/0?new B((r,n)=>{var s=setTimeout(()=>n(new J.Timeout(t)),e);this.then(r,n).finally(clearTimeout.bind(null,s))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&Bt(B.prototype,Symbol.toStringTag,"Dexie.Promise");Ct.env=yl();function ml(e,t,r,n,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=r,this.reject=n,this.psd=s}kr(B,{all:function(){var e=At.apply(null,arguments).map(es);return new B(function(t,r){e.length===0&&t([]);var n=e.length;e.forEach((s,i)=>B.resolve(s).then(a=>{e[i]=a,--n||t(e)},r))})},resolve:e=>{if(e instanceof B)return e;if(e&&typeof e.then=="function")return new B((r,n)=>{e.then(r,n)});var t=new B(tn,!0,e);return t},reject:Gn,race:function(){var e=At.apply(null,arguments).map(es);return new B((t,r)=>{e.map(n=>B.resolve(n).then(t,r))})},PSD:{get:()=>Y,set:e=>Y=e},totalEchoes:{get:()=>Qn},newPSD:Wt,usePSD:ur,scheduler:{get:()=>rn,set:e=>{rn=e}},rejectionMapper:{get:()=>Ti,set:e=>{Ti=e}},follow:(e,t)=>new B((r,n)=>Wt((s,i)=>{var a=Y;a.unhandleds=[],a.onunhandled=i,a.finalize=cr(function(){vm(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},a.finalize),e()},t,r,n))});rr&&(rr.allSettled&&Bt(B,"allSettled",function(){let e=At.apply(null,arguments).map(es);return new B(t=>{e.length===0&&t([]);let r=e.length,n=new Array(r);e.forEach((s,i)=>B.resolve(s).then(a=>n[i]={status:"fulfilled",value:a},a=>n[i]={status:"rejected",reason:a}).then(()=>--r||t(n)))})}),rr.any&&typeof AggregateError<"u"&&Bt(B,"any",function(){let e=At.apply(null,arguments).map(es);return new B((t,r)=>{e.length===0&&r(new AggregateError([]));let n=e.length,s=new Array(n);e.forEach((i,a)=>B.resolve(i).then(o=>t(o),o=>{s[a]=o,--n||r(new AggregateError(s))}))})}),rr.withResolvers&&(B.withResolvers=rr.withResolvers));function gl(e,t){try{t(r=>{if(e._state===null){if(r===e)throw new TypeError("A promise cannot be resolved with itself.");var n=e._lib&&Pr();r&&typeof r.then=="function"?gl(e,(s,i)=>{r instanceof B?r._then(s,i):r.then(s,i)}):(e._state=!0,e._value=r,hl(e)),n&&Ar()}},Ai.bind(null,e))}catch(r){Ai(e,r)}}function Ai(e,t){if(zn.push(t),e._state===null){var r=e._lib&&Pr();t=Ti(t),e._state=!1,e._value=t,wm(e),hl(e),r&&Ar()}}function hl(e){var t=e._listeners;e._listeners=[];for(var r=0,n=t.length;r<n;++r)ji(e,t[r]);var s=e._PSD;--s.ref||s.finalize(),ar===0&&(++ar,rn(()=>{--ar===0&&qi()},[]))}function ji(e,t){if(e._state===null){e._listeners.push(t);return}var r=e._state?t.onFulfilled:t.onRejected;if(r===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++ar,rn(ym,[r,e,t])}function ym(e,t,r){try{var n,s=t._value;!t._state&&zn.length&&(zn=[]),n=gt&&t._consoleTask?t._consoleTask.run(()=>e(s)):e(s),!t._state&&zn.indexOf(s)===-1&&Sm(t),r.resolve(n)}catch(i){r.reject(i)}finally{--ar===0&&qi(),--r.psd.ref||r.psd.finalize()}}function bm(){ur(Ct,()=>{Pr()&&Ar()})}function Pr(){var e=Ei;return Ei=!1,Jn=!1,e}function Ar(){var e,t,r;do for(;Jr.length>0;)for(e=Jr,Jr=[],r=e.length,t=0;t<r;++t){var n=e[t];n[0].apply(null,n[1])}while(Jr.length>0);Ei=!0,Jn=!0}function qi(){var e=ir;ir=[],e.forEach(n=>{n._PSD.onunhandled.call(null,n._value,n)});for(var t=Kn.slice(0),r=t.length;r;)t[--r]()}function vm(e){function t(){e(),Kn.splice(Kn.indexOf(t),1)}Kn.push(t),++ar,rn(()=>{--ar===0&&qi()},[])}function wm(e){ir.some(t=>t._value===e._value)||ir.push(e)}function Sm(e){for(var t=ir.length;t;)if(ir[--t]._value===e._value){ir.splice(t,1);return}}function Gn(e){return new B(tn,!1,e)}function Se(e,t){var r=Y;return function(){var n=Pr(),s=Y;try{return zt(r,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{zt(s,!1),n&&Ar()}}}var Me={awaits:0,echoes:0,id:0},xm=0,Vn=[],jn=0,Qn=0,km=0;function Wt(e,t,r,n){var s=Y,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++km,Ct.env,i.env=Vi?{Promise:B,PromiseProp:{value:B,configurable:!0,writable:!0},all:B.all,race:B.race,allSettled:B.allSettled,any:B.any,resolve:B.resolve,reject:B.reject}:{},t&&et(i,t),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=ur(i,e,r,n);return i.ref===0&&i.finalize(),a}function Rr(){return Me.id||(Me.id=++xm),++Me.awaits,Me.echoes+=fl,Me.id}function Ht(){return Me.awaits?(--Me.awaits===0&&(Me.id=0),Me.echoes=Me.awaits*fl,!0):!1}(""+gm).indexOf("[native code]")===-1&&(Rr=Ht=he);function es(e){return Me.echoes&&e&&e.constructor===rr?(Rr(),e.then(t=>(Ht(),t),t=>(Ht(),Pe(t)))):e}function Em(e){++Qn,(!Me.echoes||--Me.echoes===0)&&(Me.echoes=Me.awaits=Me.id=0),Vn.push(Y),zt(e,!0)}function Tm(){var e=Vn[Vn.length-1];Vn.pop(),zt(e,!1)}function zt(e,t){var r=Y;if((t?Me.echoes&&(!jn++||e!==Y):jn&&(!--jn||e!==Y))&&queueMicrotask(t?Em.bind(null,e):Tm),e!==Y&&(Y=e,r===Ct&&(Ct.env=yl()),Vi)){var n=Ct.env.Promise,s=e.env;(r.global||e.global)&&(Object.defineProperty(Fe,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any&&(n.any=s.any))}}function yl(){var e=Fe.Promise;return Vi?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(Fe,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function ur(e,t,r,n,s){var i=Y;try{return zt(e,!0),t(r,n,s)}finally{zt(i,!1)}}function Ho(e,t,r,n){return typeof e!="function"?e:function(){var s=Y;r&&Rr(),zt(t,!0);try{return e.apply(this,arguments)}finally{zt(s,!1),n&&queueMicrotask(Ht)}}}function fi(e){Promise===rr&&Me.echoes===0?jn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var Pe=B.reject;function Ri(e,t,r,n){if(!e.idbdb||!e._state.openComplete&&!Y.letThrough&&!e._vip){if(e._state.openComplete)return Pe(new J.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return Pe(new J.DatabaseClosed);e.open().catch(he)}return e._state.dbReadyPromise.then(()=>Ri(e,t,r,n))}else{var s=e._createTransaction(t,r,e._dbSchema);try{s.create(),e._state.PR1398_maxLoop=3}catch(i){return i.name===Ki.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(()=>Ri(e,t,r,n))):Pe(i)}return s._promise(t,(i,a)=>Wt(()=>(Y.trans=s,n(i,a,s)))).then(i=>{if(t==="readwrite")try{s.idbtrans.commit()}catch{}return t==="readonly"?i:s._completion.then(()=>i)})}}var zo="4.4.4",sr="\uFFFF",Ci=-1/0,Pt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",bl="String expected.",Pm=1e3,ps="__dbnames",mi="readonly",gi="readwrite";function dr(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var vl={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function $n(e){return typeof e=="string"&&!/\./.test(e)?t=>(t[e]===void 0&&e in t&&(t=lr(t),delete t[e]),t):t=>t}function Am(){throw J.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ce(e,t){try{let r=Ko(e),n=Ko(t);if(r!==n)return r==="Array"?1:n==="Array"?-1:r==="binary"?1:n==="binary"?-1:r==="string"?1:n==="string"?-1:r==="Date"?1:n!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return Cm(Go(e),Go(t));case"Array":return Rm(e,t)}}catch{}return NaN}function Rm(e,t){let r=e.length,n=t.length,s=r<n?r:n;for(let i=0;i<s;++i){let a=ce(e[i],t[i]);if(a!==0)return a}return r===n?0:r<n?-1:1}function Cm(e,t){let r=e.length,n=t.length,s=r<n?r:n;for(let i=0;i<s;++i)if(e[i]!==t[i])return e[i]<t[i]?-1:1;return r===n?0:r<n?-1:1}function Ko(e){let t=typeof e;if(t!=="object")return t;if(ArrayBuffer.isView(e))return"binary";let r=xi(e);return r==="ArrayBuffer"?"binary":r}function Go(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function qn(e,t,r){let{yProps:n}=e.schema;return n?(t&&r.numFailures>0&&(t=t.filter((s,i)=>!r.failures[i])),Promise.all(n.map(({updatesTable:s})=>t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear())).then(()=>r)):r}var Ii=class{execute(t){let r=this["@@propmod"];if(r.add!==void 0){let s=r.add;if(xe(s))return[...xe(t)?t:[],...s].sort();if(typeof s=="number")return(Number(t)||0)+s;if(typeof s=="bigint")try{return BigInt(t)+s}catch{return BigInt(0)+s}throw new TypeError(`Invalid term ${s}`)}if(r.remove!==void 0){let s=r.remove;if(xe(s))return xe(t)?t.filter(i=>!s.includes(i)).sort():[];if(typeof s=="number")return Number(t)-s;if(typeof s=="bigint")try{return BigInt(t)-s}catch{return BigInt(0)-s}throw new TypeError(`Invalid subtrahend ${s}`)}let n=r.replacePrefix?.[0];return n&&typeof t=="string"&&t.startsWith(n)?r.replacePrefix[1]+t.substring(n.length):t}constructor(t){this["@@propmod"]=t}};function wl(e,t){let r=$e(t),n=r.length,s=!1;for(let i=0;i<n;++i){let a=r[i],o=t[a],l=Rt(e,a);o instanceof Ii?(Xe(e,a,o.execute(l)),s=!0):l!==o&&(Xe(e,a,o),s=!0)}return s}var ts=class{_trans(t,r,n){let s=this._tx||Y.trans,i=this.name,a=gt&&typeof console<"u"&&console.createTask&&console.createTask(`Dexie: ${t==="readonly"?"read":"write"} ${this.name}`);function o(c,d,u){if(!u.schema[i])throw new J.NotFound("Table "+i+" not part of transaction");return r(u.idbtrans,u)}let l=Pr();try{let c=s&&s.db._novip===this.db._novip?s===Y.trans?s._promise(t,o,n):Wt(()=>s._promise(t,o,n),{trans:s,transless:Y.transless||Y}):Ri(this.db,t,[this.name],o);return a&&(c._consoleTask=a,c=c.catch(d=>(console.trace(d),Pe(d)))),c}finally{l&&Ar()}}get(t,r){return t&&t.constructor===Object?this.where(t).first(r):t==null?Pe(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",n=>this.core.get({trans:n,key:t}).then(s=>this.hook.reading.fire(s))).then(r)}where(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(xe(t))return new this.db.WhereClause(this,`[${t.join("+")}]`);let r=$e(t);if(r.length===1)return this.where(r[0]).equals(t[r[0]]);let n=this.schema.indexes.concat(this.schema.primKey).filter(l=>{if(l.compound&&r.every(c=>l.keyPath.indexOf(c)>=0)){for(let c=0;c<r.length;++c)if(r.indexOf(l.keyPath[c])===-1)return!1;return!0}return!1}).sort((l,c)=>l.keyPath.length-c.keyPath.length)[0];if(n&&this.db._maxKey!==sr){let l=n.keyPath.slice(0,r.length);return this.where(l).equals(l.map(c=>t[c]))}!n&&gt&&console.warn(`The query ${JSON.stringify(t)} on ${this.name} would benefit from a compound index [${r.join("+")}]`);let{idxByName:s}=this.schema;function i(l,c){return ce(l,c)===0}let[a,o]=r.reduce(([l,c],d)=>{let u=s[d],p=t[d];return[l||u,l||!u?dr(c,u&&u.multi?f=>{let m=Rt(f,d);return xe(m)&&m.some(g=>i(p,g))}:f=>i(p,Rt(f,d))):c]},[null,null]);return a?this.where(a.name).equals(t[a.keyPath]).filter(o):n?this.filter(o):this.where(r).equals("")}filter(t){return this.toCollection().and(t)}count(t){return this.toCollection().count(t)}offset(t){return this.toCollection().offset(t)}limit(t){return this.toCollection().limit(t)}each(t){return this.toCollection().each(t)}toArray(t){return this.toCollection().toArray(t)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(t){return new this.db.Collection(new this.db.WhereClause(this,xe(t)?`[${t.join("+")}]`:t))}reverse(){return this.toCollection().reverse()}mapToClass(t){let{db:r,name:n}=this;this.schema.mappedClass=t,t.prototype instanceof Am&&(t=class extends t{get db(){return r}table(){return n}});let s=new Set;for(let a=t.prototype;a;a=xr(a))Object.getOwnPropertyNames(a).forEach(o=>s.add(o));let i=a=>{if(!a)return a;let o=Object.create(t.prototype);for(let l in a)if(!s.has(l))try{o[l]=a[l]}catch{}return o};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),t}defineClass(){function t(r){et(this,r)}return this.mapToClass(t)}add(t,r){let{auto:n,keyPath:s}=this.schema.primKey,i=t;return s&&n&&(i=$n(s)(t)),this._trans("readwrite",a=>this.core.mutate({trans:a,type:"add",keys:r!=null?[r]:null,values:[i]})).then(a=>a.numFailures?B.reject(a.failures[0]):a.lastResult).then(a=>{if(s)try{Xe(t,s,a)}catch{}return a})}upsert(t,r){let{keyPath:n}=this.schema.primKey;return this._trans("readwrite",s=>this.core.get({trans:s,key:t}).then(i=>{let a=i??{};return wl(a,r),n&&Xe(a,n,t),this.core.mutate({trans:s,type:"put",values:[a],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[r]}}).then(o=>o.numFailures?B.reject(o.failures[0]):!!i)}))}update(t,r){if(typeof t=="object"&&!xe(t)){let n=Rt(t,this.schema.primKey.keyPath);return n===void 0?Pe(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(n).modify(r)}else return this.where(":id").equals(t).modify(r)}put(t,r){let{auto:n,keyPath:s}=this.schema.primKey,i=t;return s&&n&&(i=$n(s)(t)),this._trans("readwrite",a=>this.core.mutate({trans:a,type:"put",values:[i],keys:r!=null?[r]:null})).then(a=>a.numFailures?B.reject(a.failures[0]):a.lastResult).then(a=>{if(s)try{Xe(t,s,a)}catch{}return a})}delete(t){return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:[t]}).then(n=>qn(this,[t],n)).then(n=>n.numFailures?B.reject(n.failures[0]):void 0))}clear(){return this._trans("readwrite",t=>this.core.mutate({trans:t,type:"deleteRange",range:vl}).then(r=>qn(this,null,r))).then(t=>t.numFailures?B.reject(t.failures[0]):void 0)}bulkGet(t){return this._trans("readonly",r=>this.core.getMany({keys:t,trans:r}).then(n=>n.map(s=>this.hook.reading.fire(s))))}bulkAdd(t,r,n){let s=Array.isArray(r)?r:void 0;n=n||(s?void 0:r);let i=n?n.allKeys:void 0;return this._trans("readwrite",a=>{let{auto:o,keyPath:l}=this.schema.primKey;if(l&&s)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");let c=t.length,d=l&&o?t.map($n(l)):t;return this.core.mutate({trans:a,type:"add",keys:s,values:d,wantResults:i}).then(({numFailures:u,results:p,lastResult:f,failures:m})=>{let g=i?p:f;if(u===0)return g;throw new Sr(`${this.name}.bulkAdd(): ${u} of ${c} operations failed`,m)})})}bulkPut(t,r,n){let s=Array.isArray(r)?r:void 0;n=n||(s?void 0:r);let i=n?n.allKeys:void 0;return this._trans("readwrite",a=>{let{auto:o,keyPath:l}=this.schema.primKey;if(l&&s)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==t.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");let c=t.length,d=l&&o?t.map($n(l)):t;return this.core.mutate({trans:a,type:"put",keys:s,values:d,wantResults:i}).then(({numFailures:u,results:p,lastResult:f,failures:m})=>{let g=i?p:f;if(u===0)return g;throw new Sr(`${this.name}.bulkPut(): ${u} of ${c} operations failed`,m)})})}bulkUpdate(t){let r=this.core,n=t.map(a=>a.key),s=t.map(a=>a.changes),i=[];return this._trans("readwrite",a=>r.getMany({trans:a,keys:n,cache:"clone"}).then(o=>{let l=[],c=[];t.forEach(({key:u,changes:p},f)=>{let m=o[f];if(m){for(let g of Object.keys(p)){let h=p[g];if(g===this.schema.primKey.keyPath){if(ce(h,u)!==0)throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else Xe(m,g,h)}i.push(f),l.push(u),c.push(m)}});let d=l.length;return r.mutate({trans:a,type:"put",keys:l,values:c,updates:{keys:n,changeSpecs:s}}).then(({numFailures:u,failures:p})=>{if(u===0)return d;for(let f of Object.keys(p)){let m=i[Number(f)];if(m!=null){let g=p[f];delete p[f],p[m]=g}}throw new Sr(`${this.name}.bulkUpdate(): ${u} of ${d} operations failed`,p)})}))}bulkDelete(t){let r=t.length;return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:t}).then(s=>qn(this,t,s))).then(({numFailures:n,lastResult:s,failures:i})=>{if(n===0)return s;throw new Sr(`${this.name}.bulkDelete(): ${n} of ${r} operations failed`,i)})}};function cn(e){var t={},r=function(o,l){if(l){for(var c=arguments.length,d=new Array(c-1);--c;)d[c-1]=arguments[c];return t[o].subscribe.apply(null,d),e}else if(typeof o=="string")return t[o]};r.addEventType=i;for(var n=1,s=arguments.length;n<s;++n)i(arguments[n]);return r;function i(o,l,c){if(typeof o=="object")return a(o);l||(l=fm),c||(c=he);var d={subscribers:[],fire:c,subscribe:function(u){d.subscribers.indexOf(u)===-1&&(d.subscribers.push(u),d.fire=l(d.fire,u))},unsubscribe:function(u){d.subscribers=d.subscribers.filter(function(p){return p!==u}),d.fire=d.subscribers.reduce(l,c)}};return t[o]=r[o]=d,d}function a(o){$e(o).forEach(function(l){var c=o[l];if(xe(c))i(l,o[l][0],o[l][1]);else if(c==="asap")var d=i(l,ln,function(){for(var p=arguments.length,f=new Array(p);p--;)f[p]=arguments[p];d.subscribers.forEach(function(m){il(function(){m.apply(null,f)})})});else throw new J.InvalidArgument("Invalid event config")})}}function un(e,t){return Er(t).from({prototype:e}),t}function Im(e){return un(ts.prototype,function(r,n,s){this.db=e,this._tx=s,this.name=r,this.schema=n,this.hook=e._allTables[r]?e._allTables[r].hook:cn(null,{creating:[um,he],reading:[cm,ln],updating:[pm,he],deleting:[dm,he]})})}function yr(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function hi(e,t){e.filter=dr(e.filter,t)}function yi(e,t,r){var n=e.replayFilter;e.replayFilter=n?()=>dr(n(),t()):t,e.justLimit=r&&!n}function Nm(e,t){e.isMatch=dr(e.isMatch,t)}function Yn(e,t){if(e.isPrimKey)return t.primaryKey;let r=t.getIndexByKeyPath(e.index);if(!r)throw new J.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return r}function Vo(e,t,r){let n=Yn(e,t.schema);return t.openCursor({trans:r,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:n,range:e.range}})}function Un(e,t,r,n){let s=e.replayFilter?dr(e.filter,e.replayFilter()):e.filter;if(e.or){let i={},a=(o,l,c)=>{if(!s||s(l,c,p=>l.stop(p),p=>l.fail(p))){var d=l.primaryKey,u=""+d;u==="[object ArrayBuffer]"&&(u=""+new Uint8Array(d)),tt(i,u)||(i[u]=!0,t(o,l,c))}};return Promise.all([e.or._iterate(a,r),jo(Vo(e,n,r),e.algorithm,a,!e.keysOnly&&e.valueMapper)])}else return jo(Vo(e,n,r),dr(e.algorithm,s),t,!e.keysOnly&&e.valueMapper)}function jo(e,t,r,n){var s=n?(a,o,l)=>r(n(a),o,l):r,i=Se(s);return e.then(a=>{if(a)return a.start(()=>{var o=()=>a.continue();(!t||t(a,l=>o=l,l=>{a.stop(l),o=he},l=>{a.fail(l),o=he}))&&i(a.value,a,l=>o=l),o()})})}var Ni=class{_read(t,r){var n=this._ctx;return n.error?n.table._trans(null,Pe.bind(null,n.error)):n.table._trans("readonly",t).then(r)}_write(t){var r=this._ctx;return r.error?r.table._trans(null,Pe.bind(null,r.error)):r.table._trans("readwrite",t,"locked")}_addAlgorithm(t){var r=this._ctx;r.algorithm=dr(r.algorithm,t)}_iterate(t,r){return Un(this._ctx,t,r,this._ctx.table.core)}clone(t){var r=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return t&&et(n,t),r._ctx=n,r}raw(){return this._ctx.valueMapper=null,this}each(t){var r=this._ctx;return this._read(n=>Un(r,t,n,r.table.core))}count(t){return this._read(r=>{let n=this._ctx,s=n.table.core;if(yr(n,!0))return s.count({trans:r,query:{index:Yn(n,s.schema),range:n.range}}).then(a=>Math.min(a,n.limit));var i=0;return Un(n,()=>(++i,!1),r,s).then(()=>i)}).then(t)}sortBy(t,r){let n=t.split(".").reverse(),s=n[0],i=n.length-1;function a(c,d){return d?a(c[n[d]],d-1):c[s]}var o=this._ctx.dir==="next"?1:-1;function l(c,d){var u=a(c,i),p=a(d,i);return ce(u,p)*o}return this.toArray(function(c){return c.slice().sort(l)}).then(r)}toArray(t){return this._read(r=>{var n=this._ctx;if(yr(n,!0)&&n.limit>0){let{valueMapper:s}=n,i=Yn(n,n.table.core.schema);return n.table.core.query({trans:r,limit:n.limit,values:!0,direction:n.dir==="prev"?"prev":void 0,query:{index:i,range:n.range}}).then(({result:a})=>s?a.map(s):a)}else{let s=[];return Un(n,i=>s.push(i),r,n.table.core).then(()=>s)}},t)}offset(t){var r=this._ctx;return t<=0?this:(r.offset+=t,yr(r)?yi(r,()=>{var n=t;return(s,i)=>n===0?!0:n===1?(--n,!1):(i(()=>{s.advance(n),n=0}),!1)}):yi(r,()=>{var n=t;return()=>--n<0}),this)}limit(t){return this._ctx.limit=Math.min(this._ctx.limit,t),yi(this._ctx,()=>{var r=t;return function(n,s,i){return--r<=0&&s(i),r>=0}},!0),this}until(t,r){return hi(this._ctx,function(n,s,i){return t(n.value)?(s(i),r):!0}),this}first(t){return this.limit(1).toArray(function(r){return r[0]}).then(t)}last(t){return this.reverse().first(t)}filter(t){return hi(this._ctx,function(r){return t(r.value)}),Nm(this._ctx,t),this}and(t){return this.filter(t)}or(t){return new this.db.WhereClause(this._ctx.table,t,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(n,s){t(s.key,s)})}eachUniqueKey(t){return this._ctx.unique="unique",this.eachKey(t)}eachPrimaryKey(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(n,s){t(s.primaryKey,s)})}keys(t){var r=this._ctx;r.keysOnly=!r.isMatch;var n=[];return this.each(function(s,i){n.push(i.key)}).then(function(){return n}).then(t)}primaryKeys(t){var r=this._ctx;if(yr(r,!0)&&r.limit>0)return this._read(s=>{var i=Yn(r,r.table.core.schema);return r.table.core.query({trans:s,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:i,range:r.range}})}).then(({result:s})=>s).then(t);r.keysOnly=!r.isMatch;var n=[];return this.each(function(s,i){n.push(i.primaryKey)}).then(function(){return n}).then(t)}uniqueKeys(t){return this._ctx.unique="unique",this.keys(t)}firstKey(t){return this.limit(1).keys(function(r){return r[0]}).then(t)}lastKey(t){return this.reverse().firstKey(t)}distinct(){var t=this._ctx,r=t.index&&t.table.schema.idxByName[t.index];if(!r||!r.multi)return this;var n={};return hi(this._ctx,function(s){var i=s.primaryKey.toString(),a=tt(n,i);return n[i]=!0,!a}),this}modify(t){var r=this._ctx;return this._write(n=>{var s;typeof t=="function"?s=t:s=g=>wl(g,t);let i=r.table.core,{outbound:a,extractKey:o}=i.schema.primaryKey,l=200,c=this.db._options.modifyChunkSize;c&&(typeof c=="object"?l=c[i.name]||c["*"]||200:l=c);let d=[],u=0,p=[],f=(g,h)=>{let{failures:b,numFailures:x}=h;u+=g-x;for(let T of $e(b))d.push(b[T])},m=t===qo;return this.clone().primaryKeys().then(g=>{let h=yr(r)&&r.limit===1/0&&(typeof t!="function"||m)&&{index:r.index,range:r.range},b=x=>{let T=Math.min(l,g.length-x),y=g.slice(x,x+T);return(m?Promise.resolve([]):i.getMany({trans:n,keys:y,cache:"immutable"})).then(v=>{let k=[],S=[],w=a?[]:null,A=m?y:[];if(!m)for(let P=0;P<T;++P){let _=v[P],N={value:lr(_),primKey:g[x+P]};s.call(N,N.value,N)!==!1&&(N.value==null?A.push(g[x+P]):!a&&ce(o(_),o(N.value))!==0?(A.push(g[x+P]),k.push(N.value)):(S.push(N.value),a&&w.push(g[x+P])))}return Promise.resolve(k.length>0&&i.mutate({trans:n,type:"add",values:k}).then(P=>{for(let _ in P.failures)A.splice(parseInt(_),1);f(k.length,P)})).then(()=>(S.length>0||h&&typeof t=="object")&&i.mutate({trans:n,type:"put",keys:w,values:S,criteria:h,changeSpec:typeof t!="function"&&t,isAdditionalChunk:x>0}).then(P=>f(S.length,P))).then(()=>(A.length>0||h&&m)&&i.mutate({trans:n,type:"delete",keys:A,criteria:h,isAdditionalChunk:x>0}).then(P=>qn(r.table,A,P)).then(P=>f(A.length,P))).then(()=>g.length>x+T&&b(x+l))})};return b(0).then(()=>{if(d.length>0)throw new Zn("Error modifying one or more objects",d,u,p);return g.length})})})}delete(){var t=this._ctx,r=t.range;return yr(t)&&!t.table.schema.yProps&&(t.isPrimKey||r.type===3)?this._write(n=>{let{primaryKey:s}=t.table.core.schema,i=r;return t.table.core.count({trans:n,query:{index:s,range:i}}).then(a=>t.table.core.mutate({trans:n,type:"deleteRange",range:i}).then(({failures:o,numFailures:l})=>{if(l)throw new Zn("Could not delete some values",Object.keys(o).map(c=>o[c]),a-l);return a-l}))}):this.modify(qo)}},qo=(e,t)=>t.value=null;function _m(e){return un(Ni.prototype,function(r,n){this.db=e;let s=vl,i=null;if(n)try{s=n()}catch(c){i=c}let a=r._ctx,o=a.table,l=o.hook.reading.fire;this._ctx={table:o,index:a.index,isPrimKey:!a.index||o.schema.primKey.keyPath&&a.index===o.schema.primKey.name,range:s,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:i,or:a.or,valueMapper:l!==ln?l:null}})}function Dm(e,t){return e<t?-1:e===t?0:1}function Om(e,t){return e>t?-1:e===t?0:1}function Qe(e,t,r){var n=e instanceof rs?new e.Collection(e):e;return n._ctx.error=r?new r(t):new TypeError(t),n}function br(e){return new e.Collection(e,()=>Sl("")).limit(0)}function Lm(e){return e==="next"?t=>t.toUpperCase():t=>t.toLowerCase()}function Mm(e){return e==="next"?t=>t.toLowerCase():t=>t.toUpperCase()}function $m(e,t,r,n,s,i){for(var a=Math.min(e.length,n.length),o=-1,l=0;l<a;++l){var c=t[l];if(c!==n[l])return s(e[l],r[l])<0?e.substr(0,l)+r[l]+r.substr(l+1):s(e[l],n[l])<0?e.substr(0,l)+n[l]+r.substr(l+1):o>=0?e.substr(0,o)+t[o]+r.substr(o+1):null;s(e[l],c)<0&&(o=l)}return a<n.length&&i==="next"?e+r.substr(e.length):a<e.length&&i==="prev"?e.substr(0,r.length):o<0?null:e.substr(0,o)+n[o]+r.substr(o+1)}function Fn(e,t,r,n){var s,i,a,o,l,c,d,u=r.length;if(!r.every(g=>typeof g=="string"))return Qe(e,bl);function p(g){s=Lm(g),i=Mm(g),a=g==="next"?Dm:Om;var h=r.map(function(b){return{lower:i(b),upper:s(b)}}).sort(function(b,x){return a(b.lower,x.lower)});o=h.map(function(b){return b.upper}),l=h.map(function(b){return b.lower}),c=g,d=g==="next"?"":n}p("next");var f=new e.Collection(e,()=>Ut(o[0],l[u-1]+n));f._ondirectionchange=function(g){p(g)};var m=0;return f._addAlgorithm(function(g,h,b){var x=g.key;if(typeof x!="string")return!1;var T=i(x);if(t(T,l,m))return!0;for(var y=null,v=m;v<u;++v){var k=$m(x,T,o[v],l[v],a,c);k===null&&y===null?m=v+1:(y===null||a(y,k)>0)&&(y=k)}return h(y!==null?function(){g.continue(y+d)}:b),!1}),f}function Ut(e,t,r,n){return{type:2,lower:e,upper:t,lowerOpen:r,upperOpen:n}}function Sl(e){return{type:1,lower:e,upper:e}}var rs=class{get Collection(){return this._ctx.table.db.Collection}between(t,r,n,s){n=n!==!1,s=s===!0;try{return this._cmp(t,r)>0||this._cmp(t,r)===0&&(n||s)&&!(n&&s)?br(this):new this.Collection(this,()=>Ut(t,r,!n,!s))}catch{return Qe(this,Pt)}}equals(t){return t==null?Qe(this,Pt):new this.Collection(this,()=>Sl(t))}above(t){return t==null?Qe(this,Pt):new this.Collection(this,()=>Ut(t,void 0,!0))}aboveOrEqual(t){return t==null?Qe(this,Pt):new this.Collection(this,()=>Ut(t,void 0,!1))}below(t){return t==null?Qe(this,Pt):new this.Collection(this,()=>Ut(void 0,t,!1,!0))}belowOrEqual(t){return t==null?Qe(this,Pt):new this.Collection(this,()=>Ut(void 0,t))}startsWith(t){return typeof t!="string"?Qe(this,bl):this.between(t,t+sr,!0,!0)}startsWithIgnoreCase(t){return t===""?this.startsWith(t):Fn(this,(r,n)=>r.indexOf(n[0])===0,[t],sr)}equalsIgnoreCase(t){return Fn(this,(r,n)=>r===n[0],[t],"")}anyOfIgnoreCase(){var t=At.apply(vr,arguments);return t.length===0?br(this):Fn(this,(r,n)=>n.indexOf(r)!==-1,t,"")}startsWithAnyOfIgnoreCase(){var t=At.apply(vr,arguments);return t.length===0?br(this):Fn(this,(r,n)=>n.some(s=>r.indexOf(s)===0),t,sr)}anyOf(){let t=At.apply(vr,arguments),r=this._cmp;try{t.sort(r)}catch{return Qe(this,Pt)}if(t.length===0)return br(this);let n=new this.Collection(this,()=>Ut(t[0],t[t.length-1]));n._ondirectionchange=i=>{r=i==="next"?this._ascending:this._descending,t.sort(r)};let s=0;return n._addAlgorithm((i,a,o)=>{let l=i.key;for(;r(l,t[s])>0;)if(++s,s===t.length)return a(o),!1;return r(l,t[s])===0?!0:(a(()=>{i.continue(t[s])}),!1)}),n}notEqual(t){return this.inAnyRange([[Ci,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){let t=At.apply(vr,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return Qe(this,Pt)}let r=t.reduce((n,s)=>n?n.concat([[n[n.length-1][1],s]]):[[Ci,s]],null);return r.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})}inAnyRange(t,r){let n=this._cmp,s=this._ascending,i=this._descending,a=this._min,o=this._max;if(t.length===0)return br(this);if(!t.every(y=>y[0]!==void 0&&y[1]!==void 0&&s(y[0],y[1])<=0))return Qe(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);let l=!r||r.includeLowers!==!1,c=r&&r.includeUppers===!0;function d(y,v){let k=0,S=y.length;for(;k<S;++k){let w=y[k];if(n(v[0],w[1])<0&&n(v[1],w[0])>0){w[0]=a(w[0],v[0]),w[1]=o(w[1],v[1]);break}}return k===S&&y.push(v),y}let u=s;function p(y,v){return u(y[0],v[0])}let f;try{f=t.reduce(d,[]),f.sort(p)}catch{return Qe(this,Pt)}let m=0,g=c?y=>s(y,f[m][1])>0:y=>s(y,f[m][1])>=0,h=l?y=>i(y,f[m][0])>0:y=>i(y,f[m][0])>=0;function b(y){return!g(y)&&!h(y)}let x=g,T=new this.Collection(this,()=>Ut(f[0][0],f[f.length-1][1],!l,!c));return T._ondirectionchange=y=>{y==="next"?(x=g,u=s):(x=h,u=i),f.sort(p)},T._addAlgorithm((y,v,k)=>{for(var S=y.key;x(S);)if(++m,m===f.length)return v(k),!1;return b(S)?!0:(this._cmp(S,f[m][1])===0||this._cmp(S,f[m][0])===0||v(()=>{u===s?y.continue(f[m][0]):y.continue(f[m][1])}),!1)}),T}startsWithAnyOf(){let t=At.apply(vr,arguments);return t.every(r=>typeof r=="string")?t.length===0?br(this):this.inAnyRange(t.map(r=>[r,r+sr])):Qe(this,"startsWithAnyOf() only works with strings")}};function Um(e){return un(rs.prototype,function(r,n,s){if(this.db=e,this._ctx={table:r,index:n===":id"?null:n,or:s},this._cmp=this._ascending=ce,this._descending=(i,a)=>ce(a,i),this._max=(i,a)=>ce(i,a)>0?i:a,this._min=(i,a)=>ce(i,a)<0?i:a,this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI})}function dt(e){return Se(function(t){return nn(t),e(t.target.error),!1})}function nn(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var fs="storagemutated",_i="x-storagemutated-1",Kt=cn(null,fs),Di=class{_lock(){return Zr(!Y.global),++this._reculock,this._reculock===1&&!Y.global&&(Y.lockOwnerFor=this),this}_unlock(){if(Zr(!Y.global),--this._reculock===0)for(Y.global||(Y.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var t=this._blockedFuncs.shift();try{ur(t[1],t[0])}catch{}}return this}_locked(){return this._reculock&&Y.lockOwnerFor!==this}create(t){if(!this.mode)return this;let r=this.db.idbdb,n=this.db._state.dbOpenError;if(Zr(!this.idbtrans),!t&&!r)switch(n&&n.name){case"DatabaseClosedError":throw new J.DatabaseClosed(n);case"MissingAPIError":throw new J.MissingAPI(n.message,n);default:throw new J.OpenFailed(n)}if(!this.active)throw new J.TransactionInactive;return Zr(this._completion._state===null),t=this.idbtrans=t||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):r.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),t.onerror=Se(s=>{nn(s),this._reject(t.error)}),t.onabort=Se(s=>{nn(s),this.active&&this._reject(new J.Abort(t.error)),this.active=!1,this.on("abort").fire(s)}),t.oncomplete=Se(()=>{this.active=!1,this._resolve(),"mutatedParts"in t&&Kt.storagemutated.fire(t.mutatedParts)}),this}_promise(t,r,n){if(t==="readwrite"&&this.mode!=="readwrite")return Pe(new J.ReadOnly("Transaction is readonly"));if(!this.active)return Pe(new J.TransactionInactive);if(this._locked())return new B((i,a)=>{this._blockedFuncs.push([()=>{this._promise(t,r,n).then(i,a)},Y])});if(n)return Wt(()=>{var i=new B((a,o)=>{this._lock();let l=r(a,o,this);l&&l.then&&l.then(a,o)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new B((i,a)=>{var o=r(i,a,this);o&&o.then&&o.then(i,a)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(t){var r=this._root();let n=B.resolve(t);if(r._waitingFor)r._waitingFor=r._waitingFor.then(()=>n);else{r._waitingFor=n,r._waitingQueue=[];var s=r.idbtrans.objectStore(r.storeNames[0]);(function a(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(s.get(-1/0).onsuccess=a)})()}var i=r._waitingFor;return new B((a,o)=>{n.then(l=>r._waitingQueue.push(Se(a.bind(null,l))),l=>r._waitingQueue.push(Se(o.bind(null,l)))).finally(()=>{r._waitingFor===i&&(r._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))}table(t){let r=this._memoizedTables||(this._memoizedTables={});if(tt(r,t))return r[t];let n=this.schema[t];if(!n)throw new J.NotFound("Table "+t+" not part of transaction");let s=new this.db.Table(t,n,this);return s.core=this.db.core.table(t),r[t]=s,s}};function Fm(e){return un(Di.prototype,function(r,n,s,i,a){r!=="readonly"&&n.forEach(o=>{let l=s[o]?.yProps;l&&(n=n.concat(l.map(c=>c.updatesTable)))}),this.db=e,this.mode=r,this.storeNames=n,this.schema=s,this.chromeTransactionDurability=i,this.idbtrans=null,this.on=cn(this,"complete","error","abort"),this.parent=a||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new B((o,l)=>{this._resolve=o,this._reject=l}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},o=>{var l=this.active;return this.active=!1,this.on.error.fire(o),this.parent?this.parent._reject(o):l&&this.idbtrans&&this.idbtrans.abort(),Pe(o)})})}function Oi(e,t,r,n,s,i,a,o){return{name:e,keyPath:t,unique:r,multi:n,auto:s,compound:i,src:(r&&!a?"&":"")+(n?"*":"")+(s?"++":"")+xl(t),type:o}}function xl(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Yi(e,t,r){return{name:e,primKey:t,indexes:r,mappedClass:null,idxByName:Qf(r,n=>[n.name,n])}}function Bm(e){return e.length===1?e[0]:e}var sn=e=>{try{return e.only([[]]),sn=()=>[[]],[[]]}catch{return sn=()=>sr,sr}};function Li(e){return e==null?()=>{}:typeof e=="string"?Wm(e):t=>Rt(t,e)}function Wm(e){return e.split(".").length===1?r=>r[e]:r=>Rt(r,e)}function Yo(e){return[].slice.call(e)}var Hm=0;function en(e){return e==null?":id":typeof e=="string"?e:`[${e.join("+")}]`}function zm(e,t,r){function n(u,p){let f=Yo(u.objectStoreNames),m=f.length>0?p.objectStore(f[0]):{};return{schema:{name:u.name,tables:f.map(g=>p.objectStore(g)).map(g=>{let{keyPath:h,autoIncrement:b}=g,x=xe(h),T=h==null,y={},v={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T,compound:x,keyPath:h,autoIncrement:b,unique:!0,extractKey:Li(h)},indexes:Yo(g.indexNames).map(k=>g.index(k)).map(k=>{let{name:S,unique:w,multiEntry:A,keyPath:P}=k,_=xe(P),N={name:S,compound:_,keyPath:P,unique:w,multiEntry:A,extractKey:Li(P)};return y[en(P)]=N,N}),getIndexByKeyPath:k=>y[en(k)]};return y[":id"]=v.primaryKey,h!=null&&(y[en(h)]=v.primaryKey),v})},hasGetAll:f.length>0&&"getAll"in m&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in m}}function s(u){if(u.type===3)return null;if(u.type===4)throw new Error("Cannot convert never type to IDBKeyRange");let{lower:p,upper:f,lowerOpen:m,upperOpen:g}=u;return p===void 0?f===void 0?null:t.upperBound(f,!!g):f===void 0?t.lowerBound(p,!!m):t.bound(p,f,!!m,!!g)}function i(u){let p=u.name;function f({trans:h,type:b,keys:x,values:T,range:y}){return new Promise((v,k)=>{v=Se(v);let S=h.objectStore(p),w=S.keyPath==null,A=b==="put"||b==="add";if(!A&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);let{length:P}=x||T||{length:1};if(x&&T&&x.length!==T.length)throw new Error("Given keys array must have same length as given values array.");if(P===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let _,N=[],C=[],I=0,O=G=>{++I,nn(G)};if(b==="deleteRange"){if(y.type===4)return v({numFailures:I,failures:C,results:[],lastResult:void 0});y.type===3?N.push(_=S.clear()):N.push(_=S.delete(s(y)))}else{let[G,D]=A?w?[T,x]:[T,null]:[x,null];if(A)for(let F=0;F<P;++F)N.push(_=D&&D[F]!==void 0?S[b](G[F],D[F]):S[b](G[F])),_.onerror=O;else for(let F=0;F<P;++F)N.push(_=S[b](G[F])),_.onerror=O}let W=G=>{let D=G.target.result;N.forEach((F,E)=>F.error!=null&&(C[E]=F.error)),v({numFailures:I,failures:C,results:b==="delete"?x:N.map(F=>F.result),lastResult:D})};_.onerror=G=>{O(G),W(G)},_.onsuccess=W})}function m({trans:h,values:b,query:x,reverse:T,unique:y}){return new Promise((v,k)=>{v=Se(v);let{index:S,range:w}=x,A=h.objectStore(p),P=S.isPrimaryKey?A:A.index(S.name),_=T?y?"prevunique":"prev":y?"nextunique":"next",N=b||!("openKeyCursor"in P)?P.openCursor(s(w),_):P.openKeyCursor(s(w),_);N.onerror=dt(k),N.onsuccess=Se(C=>{let I=N.result;if(!I){v(null);return}I.___id=++Hm,I.done=!1;let O=I.continue.bind(I),W=I.continuePrimaryKey;W&&(W=W.bind(I));let G=I.advance.bind(I),D=()=>{throw new Error("Cursor not started")},F=()=>{throw new Error("Cursor not stopped")};I.trans=h,I.stop=I.continue=I.continuePrimaryKey=I.advance=D,I.fail=Se(k),I.next=function(){let E=1;return this.start(()=>E--?this.continue():this.stop()).then(()=>this)},I.start=E=>{let U=new Promise((se,ae)=>{se=Se(se),N.onerror=dt(ae),I.fail=ae,I.stop=de=>{I.stop=I.continue=I.continuePrimaryKey=I.advance=F,se(de)}}),X=()=>{if(N.result)try{E()}catch(se){I.fail(se)}else I.done=!0,I.start=()=>{throw new Error("Cursor behind last entry")},I.stop()};return N.onsuccess=Se(se=>{N.onsuccess=X,X()}),I.continue=O,I.continuePrimaryKey=W,I.advance=G,X(),U},v(I)},k)})}function g(h,b){return x=>new Promise((T,y)=>{T=Se(T);let{trans:v,values:k,limit:S,query:w}=x,A=x.direction??"next",P=S===1/0?void 0:S,{index:_,range:N}=w,C=v.objectStore(p),I=_.isPrimaryKey?C:C.index(_.name),O=s(N);if(S===0)return T({result:[]});if(b){let W={query:O,count:P,direction:A},G=k?I.getAll(W):I.getAllKeys(W);G.onsuccess=D=>T({result:D.target.result}),G.onerror=dt(y)}else if(h&&A==="next"){let W=k?I.getAll(O,P):I.getAllKeys(O,P);W.onsuccess=G=>T({result:G.target.result}),W.onerror=dt(y)}else{let W=0,G=k||!("openKeyCursor"in I)?I.openCursor(O,A):I.openKeyCursor(O,A),D=[];G.onsuccess=()=>{let F=G.result;if(!F)return T({result:D});if(D.push(k?F.value:F.primaryKey),++W===S)return T({result:D});F.continue()},G.onerror=dt(y)}})}return{name:p,schema:u,mutate:f,getMany({trans:h,keys:b}){return new Promise((x,T)=>{x=Se(x);let y=h.objectStore(p),v=b.length,k=new Array(v),S=0,w=0,A,P=N=>{let C=N.target;(k[C._pos]=C.result)!=null,++w===S&&x(k)},_=dt(T);for(let N=0;N<v;++N)b[N]!=null&&(A=y.get(b[N]),A._pos=N,A.onsuccess=P,A.onerror=_,++S);S===0&&x(k)})},get({trans:h,key:b}){return new Promise((x,T)=>{x=Se(x);let v=h.objectStore(p).get(b);v.onsuccess=k=>x(k.target.result),v.onerror=dt(T)})},query:g(o,l),openCursor:m,count({query:h,trans:b}){let{index:x,range:T}=h;return new Promise((y,v)=>{let k=b.objectStore(p),S=x.isPrimaryKey?k:k.index(x.name),w=s(T),A=w?S.count(w):S.count();A.onsuccess=Se(P=>y(P.target.result)),A.onerror=dt(v)})}}}let{schema:a,hasGetAll:o,hasIdb3Features:l}=n(e,r),c=a.tables.map(u=>i(u)),d={};return c.forEach(u=>d[u.name]=u),{stack:"dbcore",transaction:e.transaction.bind(e),table(u){if(!d[u])throw new Error(`Table '${u}' not found`);return d[u]},MIN_KEY:-1/0,MAX_KEY:sn(t),schema:a}}function Km(e,t){return t.reduce((r,{create:n})=>({...r,...n(r)}),e)}function Gm(e,t,{IDBKeyRange:r,indexedDB:n},s){return{dbcore:Km(zm(t,r,s),e.dbcore)}}function ns(e,t){let r=t.db,n=Gm(e._middlewares,r,e._deps,t);e.core=n.dbcore,e.tables.forEach(s=>{let i=s.name;e.core.schema.tables.some(a=>a.name===i)&&(s.core=e.core.table(i),e[i]instanceof e.Table&&(e[i].core=s.core))})}function ss(e,t,r,n){r.forEach(s=>{let i=n[s];t.forEach(a=>{let o=nl(a,s);(!o||"value"in o&&o.value===void 0)&&(a===e.Transaction.prototype||a instanceof e.Transaction?Bt(a,s,{get(){return this.table(s)},set(l){rl(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):a[s]=new e.Table(s,i))})})}function Mi(e,t){t.forEach(r=>{for(let n in r)r[n]instanceof e.Table&&delete r[n]})}function Vm(e,t){return e._cfg.version-t._cfg.version}function jm(e,t,r,n){let s=e._dbSchema;r.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Yi("$meta",El("")[0],[]),e._storeNames.push("$meta"));let i=e._createTransaction("readwrite",e._storeNames,s);i.create(r),i._completion.catch(n);let a=i._reject.bind(i),o=Y.transless||Y;Wt(()=>{if(Y.trans=i,Y.transless=o,t===0)$e(s).forEach(l=>{Zi(r,l,s[l].primKey,s[l].indexes)}),ns(e,r),B.follow(()=>e.on.populate.fire(i)).catch(a);else return ns(e,r),Ym(e,i,t).then(l=>Xm(e,l,i,r)).catch(a)})}function qm(e,t){kl(e._dbSchema,t),t.db.version%10===0&&!t.objectStoreNames.contains("$meta")&&t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");let r=ms(e,e.idbdb,t);as(e,e._dbSchema,t);let n=Xi(r,e._dbSchema);for(let s of n.change){if(s.change.length||s.recreate){console.warn(`Unable to patch indexes of table ${s.name} because it has changes on the type of index or primary key.`);return}let i=t.objectStore(s.name);s.add.forEach(a=>{gt&&console.debug(`Dexie upgrade patch: Creating missing index ${s.name}.${a.src}`),is(i,a)})}}function Ym(e,t,r){return t.storeNames.includes("$meta")?t.table("$meta").get("version").then(n=>n??r):B.resolve(r)}function Xm(e,t,r,n){let s=[],i=e._versions,a=e._dbSchema=ms(e,e.idbdb,n),o=i.filter(c=>c._cfg.version>=t);if(o.length===0)return B.resolve();o.forEach(c=>{s.push(()=>{let d=a,u=c._cfg.dbschema;as(e,d,n),as(e,u,n),a=e._dbSchema=u;let p=Xi(d,u);p.add.forEach(m=>{Zi(n,m[0],m[1].primKey,m[1].indexes)}),p.change.forEach(m=>{if(m.recreate)throw new J.Upgrade("Not yet support for changing primary key");{let g=n.objectStore(m.name);m.add.forEach(h=>is(g,h)),m.change.forEach(h=>{g.deleteIndex(h.name),is(g,h)}),m.del.forEach(h=>g.deleteIndex(h))}});let f=c._cfg.contentUpgrade;if(f&&c._cfg.version>t){ns(e,n),r._memoizedTables={};let m=al(u);p.del.forEach(x=>{m[x]=d[x]}),Mi(e,[e.Transaction.prototype]),ss(e,[e.Transaction.prototype],$e(m),m),r.schema=m;let g=Hi(f);g&&Rr();let h,b=B.follow(()=>{if(h=f(r),h&&g){var x=Ht.bind(null,null);h.then(x,x)}});return h&&typeof h.then=="function"?B.resolve(h):b.then(()=>h)}}),s.push(d=>{let u=c._cfg.dbschema;Zm(u,d),Mi(e,[e.Transaction.prototype]),ss(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}),s.push(d=>{e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===c._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(u=>u!=="$meta")):d.objectStore("$meta").put(c._cfg.version,"version"))})});function l(){return s.length?B.resolve(s.shift()(r.idbtrans)).then(l):B.resolve()}return l().then(()=>{kl(a,n)})}function Xi(e,t){let r={del:[],add:[],change:[]},n;for(n in e)t[n]||r.del.push(n);for(n in t){let s=e[n],i=t[n];if(!s)r.add.push([n,i]);else{let a={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)a.recreate=!0,r.change.push(a);else{let o=s.idxByName,l=i.idxByName,c;for(c in o)l[c]||a.del.push(c);for(c in l){let d=o[c],u=l[c];d?d.src!==u.src&&a.change.push(u):a.add.push(u)}(a.del.length>0||a.add.length>0||a.change.length>0)&&r.change.push(a)}}}return r}function Zi(e,t,r,n){let s=e.db.createObjectStore(t,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return n.forEach(i=>is(s,i)),s}function kl(e,t){$e(e).forEach(r=>{t.db.objectStoreNames.contains(r)||(gt&&console.debug("Dexie: Creating missing table",r),Zi(t,r,e[r].primKey,e[r].indexes))})}function Zm(e,t){[].slice.call(t.db.objectStoreNames).forEach(r=>e[r]==null&&t.db.deleteObjectStore(r))}function is(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function ms(e,t,r){let n={};return us(t.objectStoreNames,0).forEach(i=>{let a=r.objectStore(i),o=a.keyPath,l=Oi(xl(o),o||"",!0,!1,!!a.autoIncrement,o&&typeof o!="string",!0),c=[];for(let u=0;u<a.indexNames.length;++u){let p=a.index(a.indexNames[u]);o=p.keyPath;var d=Oi(p.name,o,!!p.unique,!!p.multiEntry,!1,o&&typeof o!="string",!1);c.push(d)}n[i]=Yi(i,l,c)}),n}function Jm(e,t,r){e.verno=t.version/10;let n=e._dbSchema=ms(e,t,r);e._storeNames=us(t.objectStoreNames,0),ss(e,[e._allTables],$e(n),n)}function Qm(e,t){let r=ms(e,e.idbdb,t),n=Xi(r,e._dbSchema);return!(n.add.length||n.change.some(s=>s.add.length||s.change.length))}function as(e,t,r){let n=r.db.objectStoreNames;for(let s=0;s<n.length;++s){let i=n[s],a=r.objectStore(i);e._hasGetAll="getAll"in a;for(let o=0;o<a.indexNames.length;++o){let l=a.indexNames[o],c=a.index(l).keyPath,d=typeof c=="string"?c:"["+us(c).join("+")+"]";if(t[i]){let u=t[i].idxByName[d];u&&(u.name=l,delete t[i].idxByName[d],t[i].idxByName[l]=u)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&Fe.WorkerGlobalScope&&Fe instanceof Fe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function El(e){return e.split(",").map((t,r)=>{let n=t.split(":"),s=n[1]?.trim();t=n[0].trim();let i=t.replace(/([&*]|\+\+)/g,""),a=/^\[/.test(i)?i.match(/^\[(.*)\]$/)[1].split("+"):i;return Oi(i,a||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),xe(a),r===0,s)})}var $i=class{_createTableSchema(t,r,n){return Yi(t,r,n)}_parseIndexSyntax(t){return El(t)}_parseStoresSpec(t,r){$e(t).forEach(n=>{if(t[n]!==null){let s=this._parseIndexSyntax(t[n]),i=s.shift();if(!i)throw new J.Schema("Invalid schema for table "+n+": "+t[n]);if(i.unique=!0,i.multi)throw new J.Schema("Primary key cannot be multiEntry*");s.forEach(o=>{if(o.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")});let a=this._createTableSchema(n,i,s);r[n]=a}})}stores(t){let r=this.db;this._cfg.storesSource=this._cfg.storesSource?et(this._cfg.storesSource,t):t;let n=r._versions,s={},i={};return n.forEach(a=>{et(s,a._cfg.storesSource),i=a._cfg.dbschema={},a._parseStoresSpec(s,i)}),r._dbSchema=i,Mi(r,[r._allTables,r,r.Transaction.prototype]),ss(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],$e(i),i),r._storeNames=$e(i),this}upgrade(t){return this._cfg.contentUpgrade=Gi(this._cfg.contentUpgrade||he,t),this}};function eg(e){return un($i.prototype,function(r){this.db=e,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var an=tg();function tg(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){let e=new Set,t=new FinalizationRegistry(i=>{e.delete(i)});return{toArray:()=>Array.from(e).map(i=>i.deref()).filter(i=>i!==void 0),add:i=>{let a=new WeakRef(i._novip);if(e.add(a),t.register(i._novip,a,a),e.size>i._options.maxConnections){let o=e.values().next().value;e.delete(o),t.unregister(o)}},remove:i=>{if(!i)return;let a=e.values(),o=a.next();for(;!o.done;){let l=o.value;if(l.deref()===i._novip){e.delete(l),t.unregister(l);return}o=a.next()}}}}else{let e=[];return{toArray:()=>e,add:s=>{e.push(s._novip)},remove:s=>{if(!s)return;let i=e.indexOf(s._novip);i!==-1&&e.splice(i,1)}}}}function Ji(e,t){let r=e._dbNamesDB;return r||(r=e._dbNamesDB=new It(ps,{addons:[],indexedDB:e,IDBKeyRange:t}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function Qi(e){return e&&typeof e.databases=="function"}function rg({indexedDB:e,IDBKeyRange:t}){return Qi(e)?Promise.resolve(e.databases()).then(r=>r.map(n=>n.name).filter(n=>n!==ps)):Ji(e,t).toCollection().primaryKeys()}function ng({indexedDB:e,IDBKeyRange:t},r){!Qi(e)&&r!==ps&&Ji(e,t).put({name:r}).catch(he)}function sg({indexedDB:e,IDBKeyRange:t},r){!Qi(e)&&r!==ps&&Ji(e,t).delete(r).catch(he)}function Ui(e){return Wt(function(){return Y.letThrough=!0,e()})}function ig(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(r){var n=function(){return indexedDB.databases().finally(r)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)})}function ea(e){return!("from"in e)}var qe=function(e,t){if(this)et(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0});else{let r=new qe;return e&&"d"in e&&et(r,e),r}};kr(qe.prototype,{add(e){return os(this,e),this},addKey(e){return on(this,e,e),this},addKeys(e){return e.forEach(t=>on(this,t,t)),this},hasKey(e){let t=ls(this).next(e).value;return t&&ce(t.from,e)<=0&&ce(t.to,e)>=0},[ki](){return ls(this)}});function on(e,t,r){let n=ce(t,r);if(isNaN(n))return;if(n>0)throw RangeError();if(ea(e))return et(e,{from:t,to:r,d:1});let s=e.l,i=e.r;if(ce(r,e.from)<0)return s?on(s,t,r):e.l={from:t,to:r,d:1,l:null,r:null},Xo(e);if(ce(t,e.to)>0)return i?on(i,t,r):e.r={from:t,to:r,d:1,l:null,r:null},Xo(e);ce(t,e.from)<0&&(e.from=t,e.l=null,e.d=i?i.d+1:1),ce(r,e.to)>0&&(e.to=r,e.r=null,e.d=e.l?e.l.d+1:1);let a=!e.r;s&&!e.l&&os(e,s),i&&a&&os(e,i)}function os(e,t){function r(n,{from:s,to:i,l:a,r:o}){on(n,s,i),a&&r(n,a),o&&r(n,o)}ea(t)||r(e,t)}function ag(e,t){let r=ls(t),n=r.next();if(n.done)return!1;let s=n.value,i=ls(e),a=i.next(s.from),o=a.value;for(;!n.done&&!a.done;){if(ce(o.from,s.to)<=0&&ce(o.to,s.from)>=0)return!0;ce(s.from,o.from)<0?s=(n=r.next(o.from)).value:o=(a=i.next(s.from)).value}return!1}function ls(e){let t=ea(e)?null:{s:0,n:e};return{next(r){let n=arguments.length>0;for(;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&ce(r,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||ce(r,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Xo(e){let t=(e.r?.d||0)-(e.l?.d||0),r=t>1?"r":t<-1?"l":"";if(r){let n=r==="r"?"l":"r",s={...e},i=e[r];e.from=i.from,e.to=i.to,e[r]=i[r],s[r]=i[n],e[n]=s,s.d=Zo(s)}e.d=Zo(e)}function Zo({r:e,l:t}){return(e?t?Math.max(e.d,t.d):e.d:t?t.d:0)+1}function gs(e,t){return $e(t).forEach(r=>{e[r]?os(e[r],t[r]):e[r]=cl(t[r])}),e}function ta(e,t){return e.all||t.all||Object.keys(e).some(r=>t[r]&&ag(t[r],e[r]))}var or={},bi={},vi=!1;function Bn(e,t=!1){gs(bi,e),vi||(vi=!0,setTimeout(()=>{vi=!1;let r=bi;bi={},ra(r,!1)},0))}function ra(e,t=!1){let r=new Set;if(e.all)for(let n of Object.values(or))Jo(n,e,r,t);else for(let n in e){let s=/^idb\:\/\/(.*)\/(.*)\//.exec(n);if(s){let[,i,a]=s,o=or[`idb://${i}/${a}`];o&&Jo(o,e,r,t)}}r.forEach(n=>n())}function Jo(e,t,r,n){let s=[];for(let[i,a]of Object.entries(e.queries.query)){let o=[];for(let l of a)ta(t,l.obsSet)?l.subscribers.forEach(c=>r.add(c)):n&&o.push(l);n&&s.push([i,o])}if(n)for(let[i,a]of s)e.queries.query[i]=a}function og(e){let t=e._state,{indexedDB:r}=e._deps;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(()=>t.dbOpenError?Pe(t.dbOpenError):e);t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;let n=t.openCanceller,s=Math.round(e.verno*10),i=!1;function a(){if(t.openCanceller!==n)throw new J.DatabaseClosed("db.open() was cancelled")}let o=t.dbReadyResolve,l=null,c=!1,d=()=>new B((u,p)=>{if(a(),!r)throw new J.MissingAPI;let f=e.name,m=t.autoSchema||!s?r.open(f):r.open(f,s);if(!m)throw new J.MissingAPI;m.onerror=dt(p),m.onblocked=Se(e._fireOnBlocked),m.onupgradeneeded=Se(g=>{if(l=m.transaction,t.autoSchema&&!e._options.allowEmptyDB){m.onerror=nn,l.abort(),m.result.close();let h=r.deleteDatabase(f);h.onsuccess=h.onerror=Se(()=>{p(new J.NoSuchDatabase(`Database ${f} doesnt exist`))})}else{l.onerror=dt(p);let h=g.oldVersion>Math.pow(2,62)?0:g.oldVersion;c=h<1,e.idbdb=m.result,i&&qm(e,l),jm(e,h/10,l,p)}},p),m.onsuccess=Se(()=>{l=null;let g=e.idbdb=m.result,h=us(g.objectStoreNames);if(h.length>0)try{let b=g.transaction(Bm(h),"readonly");if(t.autoSchema)Jm(e,g,b);else if(as(e,e._dbSchema,b),!Qm(e,b)&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),g.close(),s=g.version+1,i=!0,u(d());ns(e,b)}catch{}an.add(e),g.onversionchange=Se(b=>{t.vcFired=!0,e.on("versionchange").fire(b)}),g.onclose=Se(()=>{e.close({disableAutoOpen:!1})}),c&&ng(e._deps,f),u()},p)}).catch(u=>{switch(u?.name){case"UnknownError":if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(s>0)return s=0,d();break}return B.reject(u)});return B.race([n,(typeof navigator>"u"?B.resolve():ig()).then(d)]).then(()=>(a(),t.onReadyBeingFired=[],B.resolve(Ui(()=>e.on.ready.fire(e.vip))).then(function u(){if(t.onReadyBeingFired.length>0){let p=t.onReadyBeingFired.reduce(Gi,he);return t.onReadyBeingFired=[],B.resolve(Ui(()=>p(e.vip))).then(u)}}))).finally(()=>{t.openCanceller===n&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(u=>{t.dbOpenError=u;try{l&&l.abort()}catch{}return n===t.openCanceller&&e._close(),Pe(u)}).finally(()=>{t.openComplete=!0,o()}).then(()=>{if(c){let u={};e.tables.forEach(p=>{p.schema.indexes.forEach(f=>{f.name&&(u[`idb://${e.name}/${p.name}/${f.name}`]=new qe(-1/0,[[[]]]))}),u[`idb://${e.name}/${p.name}/`]=u[`idb://${e.name}/${p.name}/:dels`]=new qe(-1/0,[[[]]])}),Kt(fs).fire(u),ra(u,!0)}return e})}function Fi(e){var t=a=>e.next(a),r=a=>e.throw(a),n=i(t),s=i(r);function i(a){return o=>{var l=a(o),c=l.value;return l.done?c:!c||typeof c.then!="function"?xe(c)?Promise.all(c).then(n,s):n(c):c.then(n,s)}}return i(t)()}function lg(e,t,r){var n=arguments.length;if(n<2)throw new J.InvalidArgument("Too few arguments");for(var s=new Array(n-1);--n;)s[n-1]=arguments[n];r=s.pop();var i=ol(s);return[e,i,r]}function Tl(e,t,r,n,s){return B.resolve().then(()=>{let i=Y.transless||Y,a=e._createTransaction(t,r,e._dbSchema,n);a.explicit=!0;let o={trans:a,transless:i};if(n)a.idbtrans=n.idbtrans;else try{a.create(),a.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(u){return u.name===Ki.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(()=>Tl(e,t,r,null,s))):Pe(u)}let l=Hi(s);l&&Rr();let c,d=B.follow(()=>{if(c=s.call(a,a),c)if(l){var u=Ht.bind(null,null);c.then(u,u)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=Fi(c))},o);return(c&&typeof c.then=="function"?B.resolve(c).then(u=>a.active?u:Pe(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):d.then(()=>c)).then(u=>(n&&a._resolve(),a._completion.then(()=>u))).catch(u=>(a._reject(u),Pe(u)))})}function Wn(e,t,r){let n=xe(e)?e.slice():[e];for(let s=0;s<r;++s)n.push(t);return n}function cg(e){return{...e,table(t){let r=e.table(t),{schema:n}=r,s={},i=[];function a(p,f,m){let g=en(p),h=s[g]=s[g]||[],b=p==null?0:typeof p=="string"?1:p.length,x=f>0,T={...m,name:x?`${g}(virtual-from:${m.name})`:m.name,lowLevelIndex:m,isVirtual:x,keyTail:f,keyLength:b,extractKey:Li(p),unique:!x&&m.unique};if(h.push(T),T.isPrimaryKey||i.push(T),b>1){let y=b===2?p[0]:p.slice(0,b-1);a(y,f+1,m)}return h.sort((y,v)=>y.keyTail-v.keyTail),T}let o=a(n.primaryKey.keyPath,0,n.primaryKey);s[":id"]=[o];for(let p of n.indexes)a(p.keyPath,0,p);function l(p){let f=s[en(p)];return f&&f[0]}function c(p,f){return{type:p.type===1?2:p.type,lower:Wn(p.lower,p.lowerOpen?e.MAX_KEY:e.MIN_KEY,f),lowerOpen:!0,upper:Wn(p.upper,p.upperOpen?e.MIN_KEY:e.MAX_KEY,f),upperOpen:!0}}function d(p){let f=p.query.index;return f.isVirtual?{...p,query:{index:f.lowLevelIndex,range:c(p.query.range,f.keyTail)}}:p}return{...r,schema:{...n,primaryKey:o,indexes:i,getIndexByKeyPath:l},count(p){return r.count(d(p))},query(p){return r.query(d(p))},openCursor(p){let{keyTail:f,isVirtual:m,keyLength:g}=p.query.index;if(!m)return r.openCursor(p);function h(b){function x(y){y!=null?b.continue(Wn(y,p.reverse?e.MAX_KEY:e.MIN_KEY,f)):p.unique?b.continue(b.key.slice(0,g).concat(p.reverse?e.MIN_KEY:e.MAX_KEY,f)):b.continue()}return Object.create(b,{continue:{value:x},continuePrimaryKey:{value(y,v){b.continuePrimaryKey(Wn(y,e.MAX_KEY,f),v)}},primaryKey:{get(){return b.primaryKey}},key:{get(){let y=b.key;return g===1?y[0]:y.slice(0,g)}},value:{get(){return b.value}}})}return r.openCursor(d(p)).then(b=>b&&h(b))}}}}}var ug={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:cg};function na(e,t,r,n){return r=r||{},n=n||"",$e(e).forEach(s=>{if(!tt(t,s))r[n+s]=void 0;else{var i=e[s],a=t[s];if(typeof i=="object"&&typeof a=="object"&&i&&a){let o=xi(i),l=xi(a);o!==l?r[n+s]=t[s]:o==="Object"?na(i,a,r,n+s+"."):i!==a&&(r[n+s]=t[s])}else i!==a&&(r[n+s]=t[s])}}),$e(t).forEach(s=>{tt(e,s)||(r[n+s]=t[s])}),r}function sa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var dg={stack:"dbcore",name:"HooksMiddleware",level:2,create:e=>({...e,table(t){let r=e.table(t),{primaryKey:n}=r.schema;return{...r,mutate(i){let a=Y.trans,{deleting:o,creating:l,updating:c}=a.table(t).hook;switch(i.type){case"add":if(l.fire===he)break;return a._promise("readwrite",()=>d(i),!0);case"put":if(l.fire===he&&c.fire===he)break;return a._promise("readwrite",()=>d(i),!0);case"delete":if(o.fire===he)break;return a._promise("readwrite",()=>d(i),!0);case"deleteRange":if(o.fire===he)break;return a._promise("readwrite",()=>u(i),!0)}return r.mutate(i);function d(f){let m=Y.trans,g=f.keys||sa(n,f);if(!g)throw new Error("Keys missing");return f=f.type==="add"||f.type==="put"?{...f,keys:g}:{...f},f.type!=="delete"&&(f.values=[...f.values]),f.keys&&(f.keys=[...f.keys]),pg(r,f,g).then(h=>{let b=g.map((x,T)=>{let y=h[T],v={onerror:null,onsuccess:null};if(f.type==="delete")o.fire.call(v,x,y,m);else if(f.type==="add"||y===void 0){let k=l.fire.call(v,x,f.values[T],m);x==null&&k!=null&&(x=k,f.keys[T]=x,n.outbound||Xe(f.values[T],n.keyPath,x))}else{let k=na(y,f.values[T]),S=c.fire.call(v,k,x,y,m);if(S){let w=f.values[T];Object.keys(S).forEach(A=>{tt(w,A)?w[A]=S[A]:Xe(w,A,S[A])})}}return v});return r.mutate(f).then(({failures:x,results:T,numFailures:y,lastResult:v})=>{for(let k=0;k<g.length;++k){let S=T?T[k]:g[k],w=b[k];S==null?w.onerror&&w.onerror(x[k]):w.onsuccess&&w.onsuccess(f.type==="put"&&h[k]?f.values[k]:S)}return{failures:x,results:T,numFailures:y,lastResult:v}}).catch(x=>(b.forEach(T=>T.onerror&&T.onerror(x)),Promise.reject(x)))})}function u(f){return p(f.trans,f.range,1e4)}function p(f,m,g){return r.query({trans:f,values:!1,query:{index:n,range:m},limit:g}).then(({result:h})=>d({type:"delete",keys:h,trans:f}).then(b=>b.numFailures>0?Promise.reject(b.failures[0]):h.length<g?{failures:[],numFailures:0,lastResult:void 0}:p(f,{...m,lower:h[h.length-1],lowerOpen:!0},g)))}}}}})};function pg(e,t,r){return t.type==="add"?Promise.resolve([]):e.getMany({trans:t.trans,keys:r,cache:"immutable"})}function Pl(e,t,r){try{if(!t||t.keys.length<e.length)return null;let n=[];for(let s=0,i=0;s<t.keys.length&&i<e.length;++s)ce(t.keys[s],e[i])===0&&(n.push(r?lr(t.values[s]):t.values[s]),++i);return n.length===e.length?n:null}catch{return null}}var fg={stack:"dbcore",level:-1,create:e=>({table:t=>{let r=e.table(t);return{...r,getMany:n=>{if(!n.cache)return r.getMany(n);let s=Pl(n.keys,n.trans._cache,n.cache==="clone");return s?B.resolve(s):r.getMany(n).then(i=>(n.trans._cache={keys:n.keys,values:n.cache==="clone"?lr(i):i},i))},mutate:n=>(n.type!=="add"&&(n.trans._cache=null),r.mutate(n))}}})};function Al(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Rl(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var mg={stack:"dbcore",level:0,name:"Observability",create:e=>{let t=e.schema.name,r=new qe(e.MIN_KEY,e.MAX_KEY);return{...e,transaction:(n,s,i)=>{if(Y.subscr&&s!=="readonly")throw new J.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${Y.querier}`);return e.transaction(n,s,i)},table:n=>{let s=e.table(n),{schema:i}=s,{primaryKey:a,indexes:o}=i,{extractKey:l,outbound:c}=a,d=a.autoIncrement&&o.filter(m=>m.compound&&m.keyPath.includes(a.keyPath)),u={...s,mutate:m=>{let g=m.trans,h=m.mutatedParts||(m.mutatedParts={}),b=w=>{let A=`idb://${t}/${n}/${w}`;return h[A]||(h[A]=new qe)},x=b(""),T=b(":dels"),{type:y}=m,[v,k]=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[sa(a,m).filter(w=>w),m.values]:[],S=m.trans._cache;if(xe(v)){x.addKeys(v);let w=y==="delete"||v.length===k.length?Pl(v,S):null;w||T.addKeys(v),(w||k)&&gg(b,i,w,k)}else if(v){let w={from:v.lower??e.MIN_KEY,to:v.upper??e.MAX_KEY};T.add(w),x.add(w)}else x.add(r),T.add(r),i.indexes.forEach(w=>b(w.name).add(r));return s.mutate(m).then(w=>(v&&(m.type==="add"||m.type==="put")&&(x.addKeys(w.results),d&&d.forEach(A=>{let P=m.values.map(N=>A.extractKey(N)),_=A.keyPath.findIndex(N=>N===a.keyPath);for(let N=0,C=w.results.length;N<C;++N)P[N][_]=w.results[N];b(A.name).addKeys(P)})),g.mutatedParts=gs(g.mutatedParts||{},h),w))}},p=({query:{index:m,range:g}})=>[m,new qe(g.lower??e.MIN_KEY,g.upper??e.MAX_KEY)],f={get:m=>[a,new qe(m.key)],getMany:m=>[a,new qe().addKeys(m.keys)],count:p,query:p,openCursor:p};return $e(f).forEach(m=>{u[m]=function(g){let{subscr:h}=Y,b=!!h,T=Al(Y,s)&&Rl(m,g)?g.obsSet={}:h;if(b){let y=A=>{let P=`idb://${t}/${n}/${A}`;return T[P]||(T[P]=new qe)},v=y(""),k=y(":dels"),[S,w]=f[m](g);if(m==="query"&&S.isPrimaryKey&&!g.values?k.add(w):y(S.name||"").add(w),!S.isPrimaryKey)if(m==="count")k.add(r);else{let A=m==="query"&&c&&g.values&&s.query({...g,values:!1});return s[m].apply(this,arguments).then(P=>{if(m==="query"){if(c&&g.values)return A.then(({result:N})=>(v.addKeys(N),P));let _=g.values?P.result.map(l):P.result;g.values?v.addKeys(_):k.addKeys(_)}else if(m==="openCursor"){let _=P,N=g.values;return _&&Object.create(_,{key:{get(){return k.addKey(_.primaryKey),_.key}},primaryKey:{get(){let C=_.primaryKey;return k.addKey(C),C}},value:{get(){return N&&v.addKey(_.primaryKey),_.value}}})}return P})}}return s[m].apply(this,arguments)}}),u}}}};function gg(e,t,r,n){function s(i){let a=e(i.name||"");function o(c){return c!=null?i.extractKey(c):null}let l=c=>i.multiEntry&&xe(c)?c.forEach(d=>a.addKey(d)):a.addKey(c);(r||n).forEach((c,d)=>{let u=r&&o(r[d]),p=n&&o(n[d]);ce(u,p)!==0&&(u!=null&&l(u),p!=null&&l(p))})}t.indexes.forEach(s)}function Qo(e,t,r){if(r.numFailures===0)return t;if(t.type==="deleteRange")return null;let n=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1;if(r.numFailures===n)return null;let s={...t};return xe(s.keys)&&(s.keys=s.keys.filter((i,a)=>!(a in r.failures))),"values"in s&&xe(s.values)&&(s.values=s.values.filter((i,a)=>!(a in r.failures))),s}function hg(e,t){return t.lower===void 0?!0:t.lowerOpen?ce(e,t.lower)>0:ce(e,t.lower)>=0}function yg(e,t){return t.upper===void 0?!0:t.upperOpen?ce(e,t.upper)<0:ce(e,t.upper)<=0}function wi(e,t){return hg(e,t)&&yg(e,t)}function el(e,t,r,n,s,i){if(!r||r.length===0)return e;let a=t.query.index,{multiEntry:o}=a,l=t.query.range,d=n.schema.primaryKey.extractKey,u=a.extractKey,p=(a.lowLevelIndex||a).extractKey,f=r.reduce((g,h)=>{let b=g,x=[];if(h.type==="add"||h.type==="put"){let T=new qe;for(let y=h.values.length-1;y>=0;--y){let v=h.values[y],k=d(v);if(T.hasKey(k))continue;let S=u(v);(o&&xe(S)?S.some(w=>wi(w,l)):wi(S,l))&&(T.addKey(k),x.push(v))}}switch(h.type){case"add":{let v=new qe().addKeys(t.values?g.map(k=>d(k)):g);b=g.concat(t.values?x.filter(k=>{let S=d(k);return v.hasKey(S)?!1:(v.addKey(S),!0)}):x.map(k=>d(k)).filter(k=>v.hasKey(k)?!1:(v.addKey(k),!0)));break}case"put":{let v=new qe().addKeys(h.values.map(k=>d(k)));b=g.filter(k=>!v.hasKey(t.values?d(k):k)).concat(t.values?x:x.map(k=>d(k)));break}case"delete":let T=new qe().addKeys(h.keys);b=g.filter(v=>!T.hasKey(t.values?d(v):v));break;case"deleteRange":let y=h.range;b=g.filter(v=>!wi(d(v),y));break}return b},e);if(f===e)return e;let m=(g,h)=>ce(p(g),p(h))||ce(d(g),d(h));return f.sort(t.direction==="prev"||t.direction==="prevunique"?(g,h)=>m(h,g):m),t.limit&&t.limit<1/0&&(f.length>t.limit?f.length=t.limit:e.length===t.limit&&f.length<t.limit&&(s.dirty=!0)),i?Object.freeze(f):f}function tl(e,t){return ce(e.lower,t.lower)===0&&ce(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function bg(e,t,r,n){if(e===void 0)return t!==void 0?-1:0;if(t===void 0)return 1;let s=ce(e,t);if(s===0){if(r&&n)return 0;if(r)return 1;if(n)return-1}return s}function vg(e,t,r,n){if(e===void 0)return t!==void 0?1:0;if(t===void 0)return-1;let s=ce(e,t);if(s===0){if(r&&n)return 0;if(r)return-1;if(n)return 1}return s}function wg(e,t){return bg(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&vg(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function Sg(e,t,r,n){let s=or[`idb://${e}/${t}`];if(!s)return[];let i=s.queries[r];if(!i)return[null,!1,s,null];let a=n.query?n.query.index.name:null,o=i[a||""];if(!o)return[null,!1,s,null];switch(r){case"query":let l=n.direction??"next",c=o.find(p=>p.req.limit===n.limit&&p.req.values===n.values&&(p.req.direction??"next")===l&&tl(p.req.query.range,n.query.range));return c?[c,!0,s,o]:[o.find(p=>("limit"in p.req?p.req.limit:1/0)>=n.limit&&(p.req.direction??"next")===l&&(n.values?p.req.values:!0)&&wg(p.req.query.range,n.query.range)),!1,s,o];case"count":let u=o.find(p=>tl(p.req.query.range,n.query.range));return[u,!!u,s,o]}}function xg(e,t,r,n){e.subscribers.add(r),n.addEventListener("abort",()=>{e.subscribers.delete(r),e.subscribers.size===0&&kg(e,t)})}function kg(e,t){setTimeout(()=>{e.subscribers.size===0&&tr(t,e)},3e3)}var Eg={stack:"dbcore",level:0,name:"Cache",create:e=>{let t=e.schema.name;return{...e,transaction:(n,s,i)=>{let a=e.transaction(n,s,i);if(s==="readwrite"){let o=new AbortController,{signal:l}=o,c=d=>()=>{if(o.abort(),s==="readwrite"){let u=new Set;for(let p of n){let f=or[`idb://${t}/${p}`];if(f){let m=e.table(p),g=f.optimisticOps.filter(h=>h.trans===a);if(a._explicit&&d&&a.mutatedParts)for(let h of Object.values(f.queries.query))for(let b of h.slice())ta(b.obsSet,a.mutatedParts)&&(tr(h,b),b.subscribers.forEach(x=>u.add(x)));else if(g.length>0){f.optimisticOps=f.optimisticOps.filter(h=>h.trans!==a);for(let h of Object.values(f.queries.query))for(let b of h.slice())if(b.res!=null&&a.mutatedParts)if(d&&!b.dirty){let x=Object.isFrozen(b.res),T=el(b.res,b.req,g,m,b,x);b.dirty?(tr(h,b),b.subscribers.forEach(y=>u.add(y))):T!==b.res&&(b.res=T,b.promise=B.resolve({result:T}))}else b.dirty&&tr(h,b),b.subscribers.forEach(x=>u.add(x))}}}u.forEach(p=>p())}};a.addEventListener("abort",c(!1),{signal:l}),a.addEventListener("error",c(!1),{signal:l}),a.addEventListener("complete",c(!0),{signal:l})}return a},table(n){let s=e.table(n),i=s.schema.primaryKey;return{...s,mutate(o){let l=Y.trans;if(i.outbound||l.db._options.cache==="disabled"||l.explicit||l.idbtrans.mode!=="readwrite")return s.mutate(o);let c=or[`idb://${t}/${n}`];if(!c)return s.mutate(o);let d=s.mutate(o);return(o.type==="add"||o.type==="put")&&(o.values.length>=50||sa(i,o).some(u=>u==null))?d.then(u=>{let p={...o,values:o.values.map((m,g)=>{if(u.failures[g])return m;let h=i.keyPath?.includes(".")?lr(m):{...m};return Xe(h,i.keyPath,u.results[g]),h})},f=Qo(c,p,u);c.optimisticOps.push(f),queueMicrotask(()=>o.mutatedParts&&Bn(o.mutatedParts))}):(c.optimisticOps.push(o),o.mutatedParts&&Bn(o.mutatedParts),d.then(u=>{if(u.numFailures>0){tr(c.optimisticOps,o);let p=Qo(c,o,u);p&&c.optimisticOps.push(p),o.mutatedParts&&Bn(o.mutatedParts)}}),d.catch(()=>{tr(c.optimisticOps,o),o.mutatedParts&&Bn(o.mutatedParts)})),d},query(o){if(!Al(Y,s)||!Rl("query",o))return s.query(o);let l=Y.trans?.db._options.cache==="immutable",{requery:c,signal:d}=Y,[u,p,f,m]=Sg(t,n,"query",o);if(u&&p)u.obsSet=o.obsSet;else{let g=s.query(o).then(h=>{let b=h.result;if(u&&(u.res=b),l){for(let x=0,T=b.length;x<T;++x)Object.freeze(b[x]);Object.freeze(b)}return h}).catch(h=>(m&&u&&tr(m,u),Promise.reject(h)));u={obsSet:o.obsSet,promise:g,subscribers:new Set,type:"query",req:o,dirty:!1},m?m.push(u):(m=[u],f||(f=or[`idb://${t}/${n}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),f.queries.query[o.query.index.name||""]=m)}return xg(u,m,c,d),u.promise.then(g=>{let h=el(g.result,o,f?.optimisticOps,s,u,l);return{result:l?h:lr(h)}})}}}}}};function Hn(e,t){return new Proxy(e,{get(r,n,s){return n==="db"?t:Reflect.get(r,n,s)}})}var It=class Xn{constructor(t,r){this._middlewares={},this.verno=0;let n=Xn.dependencies;this._options=r={addons:Xn.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange,cache:"cloned",maxConnections:Pm,...r},this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};let{addons:s}=r;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;let i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:he,dbReadyPromise:null,cancelOpen:he,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};i.dbReadyPromise=new B(o=>{i.dbReadyResolve=o}),i.openCanceller=new B((o,l)=>{i.cancelOpen=l}),this._state=i,this.name=t,this.on=cn(this,"populate","blocked","versionchange","close",{ready:[Gi,he]}),this.once=(o,l)=>{let c=(...d)=>{this.on(o).unsubscribe(c),l.apply(this,d)};return this.on(o,c)},this.on.ready.subscribe=sl(this.on.ready.subscribe,o=>(l,c)=>{Xn.vip(()=>{let d=this._state;if(d.openComplete)d.dbOpenError||B.resolve().then(l),c&&o(l);else if(d.onReadyBeingFired)d.onReadyBeingFired.push(l),c&&o(l);else{o(l);let u=this;c||o(function p(){u.on.ready.unsubscribe(l),u.on.ready.unsubscribe(p)})}})}),this.Collection=_m(this),this.Table=Im(this),this.Transaction=Fm(this),this.Version=eg(this),this.WhereClause=Um(this),this.on("versionchange",o=>{o.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close({disableAutoOpen:!1})}),this.on("blocked",o=>{!o.newVersion||o.newVersion<o.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${o.oldVersion/10}`)}),this._maxKey=sn(r.IDBKeyRange),this._createTransaction=(o,l,c,d)=>new this.Transaction(o,l,c,this._options.chromeTransactionDurability,d),this._fireOnBlocked=o=>{this.on("blocked").fire(o),an.toArray().filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(o))},this.use(fg),this.use(Eg),this.use(mg),this.use(ug),this.use(dg);let a=new Proxy(this,{get:(o,l,c)=>{if(l==="_vip")return!0;if(l==="table")return u=>Hn(this.table(u),a);let d=Reflect.get(o,l,c);return d instanceof ts?Hn(d,a):l==="tables"?d.map(u=>Hn(u,a)):l==="_createTransaction"?function(){let u=d.apply(this,arguments);return Hn(u,a)}:d}});this.vip=a,s.forEach(o=>o(this))}version(t){if(isNaN(t)||t<.1)throw new J.Type("Given version is not a positive number");if(t=Math.round(t*10)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);let r=this._versions;var n=r.filter(s=>s._cfg.version===t)[0];return n||(n=new this.Version(t),r.push(n),r.sort(Vm),n.stores({}),this._state.autoSchema=!1,n)}_whenReady(t){return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?t():new B((r,n)=>{if(this._state.openComplete)return n(new J.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._state.autoOpen){n(new J.DatabaseClosed);return}this.open().catch(he)}this._state.dbReadyPromise.then(r,n)}).then(t)}use({stack:t,create:r,level:n,name:s}){s&&this.unuse({stack:t,name:s});let i=this._middlewares[t]||(this._middlewares[t]=[]);return i.push({stack:t,create:r,level:n??10,name:s}),i.sort((a,o)=>a.level-o.level),this}unuse({stack:t,name:r,create:n}){return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(s=>n?s.create!==n:r?s.name!==r:!1)),this}open(){return ur(Ct,()=>og(this))}_close(){this.on.close.fire(new CustomEvent("close"));let t=this._state;if(an.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new B(r=>{t.dbReadyResolve=r}),t.openCanceller=new B((r,n)=>{t.cancelOpen=n}))}close({disableAutoOpen:t}={disableAutoOpen:!0}){let r=this._state;t?(r.isBeingOpened&&r.cancelOpen(new J.DatabaseClosed),this._close(),r.autoOpen=!1,r.dbOpenError=new J.DatabaseClosed):(this._close(),r.autoOpen=this._options.autoOpen||r.isBeingOpened,r.openComplete=!1,r.dbOpenError=null)}delete(t={disableAutoOpen:!0}){let r=arguments.length>0&&typeof arguments[0]!="object",n=this._state;return new B((s,i)=>{let a=()=>{this.close(t);var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=Se(()=>{sg(this._deps,this.name),s()}),o.onerror=dt(i),o.onblocked=this._fireOnBlocked};if(r)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");n.isBeingOpened?n.dbReadyPromise.then(a):a()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){let t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return $e(this._allTables).map(t=>this._allTables[t])}transaction(){let t=lg.apply(this,arguments);return this._transaction.apply(this,t)}_transaction(t,r,n){let s=Y.trans;(!s||s.db!==this||t.indexOf("!")!==-1)&&(s=null);let i=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");let a,o;try{if(o=r.map(c=>{var d=c instanceof this.Table?c.name:c;if(typeof d!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return d}),t=="r"||t===mi)a=mi;else if(t=="rw"||t==gi)a=gi;else throw new J.InvalidArgument("Invalid transaction mode: "+t);if(s){if(s.mode===mi&&a===gi)if(i)s=null;else throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s&&o.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1)if(i)s=null;else throw new J.SubTransaction("Table "+c+" not included in parent transaction.")}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(d,u)=>{u(c)}):Pe(c)}let l=Tl.bind(null,this,a,o,s,n);return s?s._promise(a,l,"lock"):Y.trans?ur(Y.transless,()=>this._whenReady(l)):this._whenReady(l)}table(t){if(!tt(this._allTables,t))throw new J.InvalidTable(`Table ${t} does not exist`);return this._allTables[t]}},Tg=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Bi=class{constructor(t){this._subscribe=t}subscribe(t,r,n){return this._subscribe(!t||typeof t=="function"?{next:t,error:r,complete:n}:t)}[Tg](){return this}},cs;try{cs={indexedDB:Fe.indexedDB||Fe.mozIndexedDB||Fe.webkitIndexedDB||Fe.msIndexedDB,IDBKeyRange:Fe.IDBKeyRange||Fe.webkitIDBKeyRange}}catch{cs={indexedDB:null,IDBKeyRange:null}}function Pg(e){let t=!1,r,n=new Bi(s=>{let i=Hi(e);function a(b){let x=Pr();try{i&&Rr();let T=Wt(e,b);return i&&(T=T.finally(Ht)),T}finally{x&&Ar()}}let o=!1,l,c={},d={},u={get closed(){return o},unsubscribe:()=>{o||(o=!0,l&&l.abort(),p&&Kt.storagemutated.unsubscribe(g))}};s.start&&s.start(u);let p=!1,f=()=>fi(h);function m(){return ta(d,c)}let g=b=>{gs(c,b),m()&&f()},h=()=>{if(o||!cs.indexedDB)return;c={};let b={};l&&l.abort(),l=new AbortController;let x={subscr:b,signal:l.signal,requery:f,querier:e,trans:null},T=a(x);p||(Kt.storagemutated.subscribe(g),p=!0),Promise.resolve(T).then(y=>{t=!0,r=y,!(o||x.signal.aborted)&&(m()?f():(d=b,m()?f():(c={},fi(()=>!o&&s.next&&s.next(y)))))},y=>{t=!1,["DatabaseClosedError","AbortError"].includes(y?.name)||o||fi(()=>{o||s.error&&s.error(y)})})};return setTimeout(f,0),u});return n.hasValue=()=>t,n.getValue=()=>r,n}var nr=It;kr(nr,{...ds,delete(e){return new nr(e,{addons:[]}).delete()},exists(e){return new nr(e,{addons:[]}).open().then(t=>(t.close(),!0)).catch("NoSuchDatabaseError",()=>!1)},getDatabaseNames(e){try{return rg(nr.dependencies).then(e)}catch{return Pe(new J.MissingAPI)}},defineClass(){function e(t){et(this,t)}return e},ignoreTransaction(e){return Y.trans?ur(Y.transless||Ct,e):e()},vip:Ui,async:function(e){return function(){try{var t=Fi(e.apply(this,arguments));return!t||typeof t.then!="function"?B.resolve(t):t}catch(r){return Pe(r)}}},spawn:function(e,t,r){try{var n=Fi(e.apply(r,t||[]));return!n||typeof n.then!="function"?B.resolve(n):n}catch(s){return Pe(s)}},currentTransaction:{get:()=>Y.trans||null},waitFor:function(e,t){let r=B.resolve(typeof e=="function"?nr.ignoreTransaction(e):e).timeout(t||6e4);return Y.trans?Y.trans.waitFor(r):r},Promise:B,debug:{get:()=>gt,set:e=>{pl(e)}},derive:Er,extend:et,props:kr,override:sl,Events:cn,on:Kt,liveQuery:Pg,extendObservabilitySet:gs,getByKeyPath:Rt,setByKeyPath:Xe,delByKeyPath:em,shallowClone:al,deepClone:lr,getObjectDiff:na,cmp:ce,asap:il,minKey:Ci,addons:[],connections:{get:an.toArray},errnames:Ki,dependencies:cs,cache:or,semVer:zo,version:zo.split(".").map(e=>parseInt(e)).reduce((e,t,r)=>e+t/Math.pow(10,r*2))});nr.maxKey=sn(nr.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Kt(fs,e=>{if(!Ft){let t;t=new CustomEvent(_i,{detail:e}),Ft=!0,dispatchEvent(t),Ft=!1}}),addEventListener(_i,({detail:e})=>{Ft||ia(e)}));function ia(e){let t=Ft;try{Ft=!0,Kt.storagemutated.fire(e),ra(e,!0)}finally{Ft=t}}var Ft=!1,wr,Wi=()=>{};typeof BroadcastChannel<"u"&&(Wi=()=>{wr=new BroadcastChannel(_i),wr.onmessage=e=>e.data&&ia(e.data)},Wi(),typeof wr.unref=="function"&&wr.unref(),Kt(fs,e=>{Ft||wr.postMessage(e)}));typeof addEventListener<"u"&&(addEventListener("pagehide",e=>{if(!It.disableBfCache&&e.persisted){gt&&console.debug("Dexie: handling persisted pagehide"),wr?.close();for(let t of an.toArray())t.close({disableAutoOpen:!1})}}),addEventListener("pageshow",e=>{!It.disableBfCache&&e.persisted&&(gt&&console.debug("Dexie: handling persisted pageshow"),Wi(),ia({all:new qe(-1/0,[[]])}))}));B.rejectionMapper=lm;pl(gt);je();be();var Il=[M.STATSFM_CONFIG,M.LASTFM_CONFIG,M.LASTFM_API_KEY,M.ACTIVE_PROVIDER],Nl="listening-stats-credentials";function _l(){let e=new It(Nl);return e.version(1).stores({kv:""}),e}async function Ag(){let e=_l();try{let t=e.table("kv");await e.transaction("rw",t,async()=>{for(let r of Il){let n=localStorage.getItem(r);n===null?await t.delete(r):await t.put(n,r)}})}finally{e.close()}}async function Rg(){let e=_l(),t=!1;try{let r=e.table("kv");await e.transaction("rw",r,async()=>{for(let n of Il){let s=localStorage.getItem(n);if(s!==null){await r.put(s,n);continue}let i=await r.get(n);typeof i=="string"&&(localStorage.setItem(n,i),t=!0)}})}finally{e.close()}return t}var Cl=!1;async function Dl(){Cl||(Cl=!0,window.addEventListener(H.PROVIDER_CHANGED,()=>{Ag().catch(e=>console.warn("[listening-stats] credential mirror failed:",e))}));try{return await Rg()}catch(e){return console.warn("[listening-stats] credential restore failed:",e),!1}}async function Ol(){await It.delete(Nl)}var Cg="https://ws.audioscrobbler.com/2.0/",Ig=["2a96cbd8b46e442fc41c2b86b821562f","c6f59c1e5e7240a4c0d427abd71f3dbb"];function hs(e){return Array.isArray(e)?e:e==null?[]:[e]}function Ng(e){return Ig.some(t=>e.includes(t))}function dn(e){let t=e?.find(r=>r.size==="large")?.["#text"]?.trim();return t&&!Ng(t)?t:void 0}async function Cr(e,t,r){let n=new URL(Cg);n.searchParams.set("api_key",e),n.searchParams.set("format","json"),n.searchParams.set("method",t);for(let[a,o]of Object.entries(r))n.searchParams.set(a,o);let s=await fetch(n.toString());if(!s.ok)throw s.status===403?new Error("Invalid Last.fm API key"):s.status===429?new Error("Last.fm rate limited"):new Error(`Last.fm API error: ${s.status}`);let i=await s.json();if(i.error)throw new Error(i.message||`Last.fm error ${i.error}`);return i}async function Ll(e,t){let n=(await Cr(e,"user.getinfo",{user:t})).user;return{username:n.name,totalScrobbles:parseInt(n.playcount,10)||0,registered:n.registered?.["#text"]||"",imageUrl:dn(n.image)}}async function aa(e,t,r=50,n=1,s,i){let a={user:t,limit:String(r),page:String(n)};s!==void 0&&(a.from=String(Math.floor(s/1e3))),i!==void 0&&(a.to=String(Math.floor(i/1e3)));let o=await Cr(e,"user.getrecenttracks",a);return hs(o.recenttracks?.track).filter(c=>c.date||c["@attr"]?.nowplaying).map(c=>{let d="#text"in c.artist?c.artist["#text"]:c.artist.name;return{name:c.name,artist:d,album:c.album?.["#text"]||"",albumArt:dn(c.image),playedAt:c.date?.uts?parseInt(c.date.uts,10)*1e3:Date.now()}})}async function Ml(e,t,r,n=200){let s=await Cr(e,"user.gettoptracks",{user:t,period:r,limit:String(n)});return hs(s.toptracks?.track).map(a=>({name:a.name,artist:a.artist?.name||"",playCount:parseInt(a.playcount,10)||0,albumArt:dn(a.image)}))}async function $l(e,t,r,n=100){let s=await Cr(e,"user.gettopartists",{user:t,period:r,limit:String(n)});return hs(s.topartists?.artist).map(a=>({name:a.name,playCount:parseInt(a.playcount,10)||0,imageUrl:dn(a.image)}))}async function Ul(e,t,r,n=100){let s=await Cr(e,"user.gettopalbums",{user:t,period:r,limit:String(n)});return hs(s.topalbums?.album).map(a=>({name:a.name,artist:a.artist?.name||"",playCount:parseInt(a.playcount,10)||0,imageUrl:dn(a.image)}))}async function Fl(e,t,r,n){try{let i=(await Cr(e,"track.getInfo",{artist:r,track:n,username:t,autocorrect:"1"})).track?.userplaycount;return i!==void 0?parseInt(i,10)||0:null}catch{return null}}be();Gt();yt();var Ug="lastfm",Fg=20,Hl=200,Bg=12;function Wg(e){return`${Ug}:${e}`}function Ir(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Hg(e){let t=new Set(e.map(a=>Ir(a.playedAt)));if(t.size===0)return 0;let r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=Ir(n.getTime());if(!t.has(s)&&(n.setDate(n.getDate()-1),!t.has(Ir(n.getTime()))))return 0;let i=0;for(;t.has(Ir(n.getTime()));)i++,n.setDate(n.getDate()-1);return i}var ua=class{constructor(){this.config=null}getProviderInfo(){return{id:"lastfm",name:"Last.fm",description:"Stats from Last.fm scrobbles",capabilities:{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return fn}async calculateStats(t){if(!this.config&&(await this.init(),!this.config))throw new Error("LastfmProvider not configured  -  call init() first");let r=Wg(t.id),n=oe.get(r);if(n)return n;let{apiKey:s,username:i}=this.config,a=t.id,[o,l,c,d]=await Promise.allSettled([Ml(s,i,a,200),$l(s,i,a,100),Ul(s,i,a,100),aa(s,i,Hl,1)]),u=o.status==="fulfilled"?o.value:[],p=l.status==="fulfilled"?l.value:[],f=c.status==="fulfilled"?c.value:[],m=d.status==="fulfilled"?d.value:[],g=m.filter(E=>!Number.isNaN(E.playedAt)),h=u.reduce((E,U)=>E+U.playCount,0)||g.length,x=h*21e4,T=u.map((E,U)=>({rank:U+1,trackUri:`lfm:track:${E.artist}:${E.name}`,trackName:E.name,artistName:E.artist,artistUri:`lfm:artist:${E.artist}`,albumName:E.album??"",albumUri:"",albumArt:E.albumArt,count:E.playCount,durationMs:0})),y=p.map((E,U)=>({rank:U+1,artistUri:`lfm:artist:${E.name}`,artistName:E.name,count:E.playCount,durationMs:0,imageUrl:E.imageUrl??null})),v=f.map((E,U)=>({rank:U+1,albumUri:`lfm:album:${E.artist}:${E.name}`,albumName:E.name,artistName:E.artist,count:E.playCount,durationMs:0,albumArt:E.imageUrl})),k=[],S=g.slice(0,Bg).map(E=>({trackUri:`lfm:track:${E.artist}:${E.name}`,trackName:E.name,artistName:E.artist,albumArt:E.albumArt,playedAt:E.playedAt})),w=new Array(24).fill(0);for(let E of g){let U=new Date(E.playedAt).getHours();w[U]++}let A=g.length>0?w.indexOf(Math.max(...w)):0,P=new Array(7).fill(0);for(let E of g){let U=new Date(E.playedAt).getDay(),X=U===0?6:U-1;P[X]++}let _=g.length>0?P.indexOf(Math.max(...P)):0,N=[...m];try{for(let E=2;E<=Fg;E++){let U=await aa(s,i,Hl,E);if(U.length===0)break;N.push(...U)}}catch(E){console.warn("[listening-stats] Last.fm streak pagination stopped early:",E)}let C=Hg(N),I=new Set(N.map(E=>Ir(E.playedAt))).size,O=new Map;for(let E of N){let U=Ir(E.playedAt);O.set(U,(O.get(U)??0)+1)}let W=Array.from(O.entries()).map(([E,U])=>({date:E,count:U})).sort((E,U)=>E.date.localeCompare(U.date)),G=u.length,D=p.length,F={topTracks:T,topArtists:y,topAlbums:v,topGenres:k,totalPlays:h,totalDuration:x,listeningDays:I,recentPlays:S,hourlyDistribution:w,peakHour:A,skipRate:0,uniqueTrackCount:G,uniqueArtistCount:D,streak:C,weekdayDistribution:P,peakWeekday:_,dailyPlayCounts:W};return oe.set(r,F),F}async calculateStatsProgressive(t,r){let n=await this.calculateStats(t);return r(n,1),r(n,2),r(n,3),n}async init(){let t=localStorage.getItem(M.LASTFM_CONFIG);if(t)try{let r=JSON.parse(t);this.config=typeof r?.apiKey=="string"&&r.apiKey&&typeof r?.username=="string"&&r.username?r:null}catch{this.config=null}else this.config=null}destroy(){oe.invalidate()}},mn=new ua;var zg,da=class extends It{constructor(t){super("listening-stats"),this.version(4).stores({playEvents:"++id, startedAt, trackUri, artistUri, type"}),this.version(5).stores({playEvents:"++id, startedAt, trackUri, artistUri, type",artists:"uri, updatedAt"}),this.on("versionchange",r=>{if(r.newVersion!==null)return this.close({disableAutoOpen:!0}),t?.(),zg?.(),!1})}},ge=new da;function Nt(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function ve(e){if(e==null)return;let t=String(e).trim();if(t){if(/^spotify:image:/i.test(t)){let r=t.replace(/^spotify:image:/i,"").trim();return r?`https://i.scdn.co/image/${r}`:void 0}return t}}var pa=class{constructor(t=300*1e3){this.store=new Map;this.ttlMs=t}get(t){let r=this.store.get(t);return!r||Date.now()>r.expiry?null:r.data}getStale(t){let r=this.store.get(t);return r?r.data:null}set(t,r){this.store.set(t,{data:r,expiry:Date.now()+this.ttlMs})}invalidate(t){t!==void 0?this.store.delete(t):this.store.clear()}},vs=new pa;ws();async function bt(e){let t=vs.get(e);if(t!==null)return{ok:!0,data:t};if(Vt.isOpen()){let r=vs.getStale(e);return r!==null?{ok:!0,data:r,stale:!0}:{ok:!1,error:{type:"circuit_open"}}}try{let r=await Spicetify.CosmosAsync.request("GET",e);if(r.status===429){let s=r.headers?.["retry-after"]??r.headers?.["Retry-After"]??"5",i=Number(s)||5;return Vt.recordFailure(i),{ok:!1,error:{type:"rate_limited",retryAfter:i}}}if(r.status<200||r.status>=300)return Vt.recordFailure(),{ok:!1,error:{type:"http_error",status:r.status}};Vt.recordSuccess();let n=r.body;return vs.set(e,n),{ok:!0,data:n}}catch(r){return Vt.recordFailure(),{ok:!1,error:{type:"network_error",message:String(r)}}}}var zl=50,Kg=1440*60*1e3,Gg=360*60*1e3;function hn(e){return/^spotify:artist:[a-zA-Z0-9]+$/i.test(e.trim())}function Vg(e,t){let r=t-e.updatedAt;return e.imageUrl?.trim()?r<Kg:r<Gg}async function Ss(e){if(e.length===0)return;let t=[...new Set(e.filter(hn))];if(t.length===0)return;let r=Date.now(),n=await ge.artists.where("uri").anyOf(t).toArray(),s=new Set(n.filter(a=>Vg(a,r)).map(a=>a.uri)),i=t.filter(a=>!s.has(a));if(i.length!==0)for(let a=0;a<i.length;a+=zl){let o=i.slice(a,a+zl),l=o.map(p=>p.replace(/^spotify:artist:/i,"")).join(","),c=await bt(`https://api.spotify.com/v1/artists?ids=${l}`);if(!c.ok)continue;let d=[],u=c.data.artists??[];for(let p=0;p<o.length;p++){let f=o[p],m=u[p];if(m){let g=m.images[0]?.url??null;d.push({uri:`spotify:artist:${m.id}`,name:m.name,genres:m.genres??[],imageUrl:ve(g)??g,updatedAt:Date.now()})}else d.push({uri:f,name:"Unknown",genres:[],imageUrl:null,updatedAt:Date.now()})}d.length>0&&await ge.artists.bulkPut(d)}}Gt();be();function jt(){return localStorage.getItem(M.RANK_MODE)==="minutes"?"minutes":"streams"}function Kl(e){localStorage.setItem(M.RANK_MODE,e)}yt();var jg="local",qg=12,Yg=400;async function Xg(e){let t=[...new Set(e.topArtists.map(s=>s.artistUri).filter(hn))];if(t.length===0)return;let r=await ge.artists.where("uri").anyOf(t).toArray(),n=new Map(r.map(s=>[s.uri,s]));for(let s of e.topArtists){let i=n.get(s.artistUri),a=ve(i?.imageUrl??void 0)??i?.imageUrl;a?.trim()&&!s.imageUrl?.trim()&&(s.imageUrl=a)}}function fa(e){if(e.type==="skip")return!1;let t=e.trackUri??"";return!(t.startsWith("spotify:narration:")||t.startsWith("spotify:ad:")||t.startsWith("spotify:interruption:"))}function ma(e){return e.artistUri||`local:artist:${e.artistName.toLowerCase()}`}function Zg(e){return e.albumUri||`local:album:${e.artistName.toLowerCase()}:${e.albumName.toLowerCase()}`}function Jg(e,t){return`${jg}:${e}:${t}`}function ga(e){return(t,r)=>e==="minutes"?r.durationMs-t.durationMs||r.count-t.count:r.count-t.count||r.durationMs-t.durationMs}function Gl(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()-1)}function Qg(e){if(e.length===0)return 0;let t=new Set(e.map(a=>Nt(a.startedAt))),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=Nt(n.getTime());if(!t.has(s)){n=Gl(n);let a=Nt(n.getTime());if(!t.has(a))return 0}let i=0;for(;t.has(Nt(n.getTime()));)i++,n=Gl(n);return i}var ha=class{getProviderInfo(){return{id:"local",name:"Local",description:"Stats from locally tracked plays",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return pt}async calculateStats(t){let r=jt(),n=Jg(t.id,r),s=oe.get(n);if(s)return await Xg(s),s;let{start:i,end:a}=t.getBoundaries(),o=a===Number.MAX_SAFE_INTEGER?await ge.playEvents.toArray():await ge.playEvents.where("startedAt").between(i,a).toArray(),l=o.filter(fa),c=pn(t),d,u;if(c){let q=(await ge.playEvents.where("startedAt").between(c.start,c.end).toArray()).filter(fa),pe=new Set(l.map(ma));if(q.length>0){let fe=new Set(q.map(ma)),Ee=0;for(let $ of pe)fe.has($)||Ee++;d=Ee,u=q.reduce(($,me)=>$+me.playedMs,0)}else d=pe.size}else d=0;let p=Date.now()-Yg*24*60*60*1e3,m=(await ge.playEvents.where("startedAt").above(p).toArray()).filter(fa),g=Qg(m),h=new Map,b=new Map,x=new Map;for(let L of l){let q=h.get(L.trackUri);q?(q.count++,q.durationMs+=L.playedMs):h.set(L.trackUri,{trackUri:L.trackUri,trackName:L.trackName,artistName:L.artistName,artistUri:L.artistUri,albumName:L.albumName,albumUri:L.albumUri,albumArt:ve(L.albumArt),count:1,durationMs:L.playedMs});let pe=ma(L),fe=b.get(pe);fe?(fe.count++,fe.durationMs+=L.playedMs):b.set(pe,{name:L.artistName,uri:L.artistUri,count:1,durationMs:L.playedMs});let Ee=Zg(L),$=x.get(Ee);$?($.count++,$.durationMs+=L.playedMs):x.set(Ee,{name:L.albumName,uri:L.albumUri,artistName:L.artistName,albumArt:ve(L.albumArt),count:1,durationMs:L.playedMs})}let T=Array.from(h.values()).sort(ga(r)).map((L,q)=>({rank:q+1,...L})),y=Array.from(b.values()).sort(ga(r)).map((L,q)=>({rank:q+1,artistUri:L.uri,artistName:L.name,count:L.count,durationMs:L.durationMs})),v=Array.from(x.values()).sort(ga(r)).map((L,q)=>({rank:q+1,albumUri:L.uri,albumName:L.name,artistName:L.artistName,albumArt:L.albumArt,count:L.count,durationMs:L.durationMs})),S=[...l].sort((L,q)=>q.startedAt-L.startedAt).slice(0,qg).map(L=>({trackUri:L.trackUri,trackName:L.trackName,artistName:L.artistName,albumArt:ve(L.albumArt),playedAt:L.startedAt})),w=l.reduce((L,q)=>L+q.playedMs,0),A=l.length>0?new Set(l.map(L=>Nt(L.startedAt))).size:0,P=new Array(24).fill(0);for(let L of l){let q=new Date(L.startedAt).getHours();P[q]++}let _=l.length>0?P.indexOf(Math.max(...P)):0,N=new Array(7).fill(0);for(let L of l){let q=new Date(L.startedAt).getDay(),pe=q===0?6:q-1;N[pe]++}let C=l.length>0?N.indexOf(Math.max(...N)):0,I=new Map;for(let L of m){let q=Nt(L.startedAt);I.set(q,(I.get(q)??0)+1)}let O=Array.from(I.entries()).map(([L,q])=>({date:L,count:q})).sort((L,q)=>L.date.localeCompare(q.date)),W=o.filter(L=>L.type==="skip").length,G=o.length,D=G>0?W/G:0,F=h.size,E=b.size,U=y.map(L=>L.artistUri);await Ss(U);let X=await ge.artists.where("uri").anyOf(U).toArray(),se=new Map(X.map(L=>[L.uri,L]));for(let L of y){let q=se.get(L.artistUri);q&&(L.genres=q.genres,L.imageUrl=ve(q.imageUrl??void 0)??q.imageUrl??void 0)}let ae=new Map;for(let L of X)for(let q of L.genres)ae.set(q,(ae.get(q)??0)+1);let de=Array.from(ae.entries()).sort((L,q)=>q[1]-L[1]).map(([L,q],pe)=>({rank:pe+1,genre:L,count:q})),Ce={topTracks:T,topArtists:y,topAlbums:v,topGenres:de,totalPlays:l.length,totalDuration:w,listeningDays:A,recentPlays:S,hourlyDistribution:P,peakHour:_,skipRate:D,uniqueTrackCount:F,uniqueArtistCount:E,streak:g,weekdayDistribution:N,peakWeekday:C,dailyPlayCounts:O,newArtistCount:d,priorPeriodTotalDuration:u};oe.set(n,Ce);let ke=Wl(t.id);return ke&&this.calculateStats(ke).catch(()=>{}),Ce}async calculateStatsProgressive(t,r){let n=await this.calculateStats(t);return r(n,1),r(n,2),r(n,3),n}async init(){oe.setupInvalidationListeners()}destroy(){oe.invalidate()}},yn=new ha;be();var ya=class{constructor(){this.providers=new Map;this.activeId=null}register(t){let r=t.getProviderInfo();this.providers.set(r.id,t)}getActive(){return this.activeId?this.providers.get(this.activeId)??null:null}getActiveId(){return this.activeId}setActive(t){if(!this.providers.has(t))throw new Error(`Provider "${t}" not registered`);this.activeId=t,localStorage.setItem(M.ACTIVE_PROVIDER,t)}restoreActive(){let t=localStorage.getItem(M.ACTIVE_PROVIDER);t&&this.providers.has(t)&&(this.activeId=t)}_resetForTesting(){this.providers.clear(),this.activeId=null}getAll(){return Array.from(this.providers.values()).map(t=>t.getProviderInfo())}},Q=new ya;Dr();var sh=["listening-stats:card-order","listening-stats:period","listening-stats:sfm-promo-dismissed","listening-stats:tour-seen","listening-stats:tour-version","listening-stats:lastUpdateCheck","listening-stats:searchCache","listening-stats:dedup-v2-done","listening-stats:rateLimitedUntil","listening-stats:lastfm","listening-stats:pollingData"],Zl="listening-stats:prun-v1-done";function ih(){try{if(localStorage.getItem(Zl)==="1")return;for(let e of sh)localStorage.removeItem(e);localStorage.setItem(Zl,"1")}catch{}}var Jl=!1;async function Ql(){if(!Jl){Jl=!0,await Dl(),ih(),Q.register(yn),Q.register(ft),Q.register(mn),Q.restoreActive(),Q.getActive()||Q.setActive("local");for(let e of[yn,ft,mn])try{await e.init()}catch(t){console.warn(`[listening-stats] Provider "${e.getProviderInfo().id}" failed to init:`,t)}}}Gt();be();function va(){try{let e=localStorage.getItem(M.PROVIDER_PERIODS);if(!e)return{};let t=JSON.parse(e);return typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{}}catch{return{}}}function bn(e,t){let r=va()[e];if(r){let n=t.find(s=>s.id===r);if(n)return n}return t[0]}function ec(e,t){let r=va();r[e]=t,localStorage.setItem(M.PROVIDER_PERIODS,JSON.stringify(r))}yt();var Ws=Uo(Ba(),1);be();var Bs=Uo(Ba(),1);var Gu="HeadshotInteractive",Vu="listening-stats",Fs=`${Gu}/${Vu}`,_t=`https://github.com/${Fs}`,qk=`${_t}/releases/latest/download/listening-stats.zip`,Dt=`https://raw.githubusercontent.com/${Fs}/main`,ju=`https://raw.githubusercontent.com/${Fs}/dist/latest-release.json`,qu=`https://cdn.jsdelivr.net/gh/${Gu}/${Vu}@dist/latest-release.json`,Yu=`https://api.github.com/repos/${Fs}`;function Wa(e){return e.replace(/^v/i,"").trim()}async function fv(){let e=[ju,qu];for(let t of e)try{let r=await fetch(`${t}?t=${Date.now()}`,{cache:"no-store"});if(!r.ok)continue;let n=await r.json();if(typeof n.tag!="string"||!n.tag)continue;return{tag:n.tag,prerelease:!!n.prerelease}}catch{}return null}async function Xu(e){try{let t=await fetch(`${Yu}${e}`,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});return t.ok?await t.json():null}catch{return null}}function mv(e){return typeof e.tag_name!="string"||!e.tag_name?!1:(e.assets??[]).some(t=>t.name==="listening-stats.zip")}function gv(e){let t=(e??[]).filter(mv),r=t.find(a=>!a.prerelease),n=t.find(a=>a.prerelease);if(!n)return r;if(!r)return n;let s=Bs.default.coerce(n.tag_name,{includePrerelease:!0}),i=Bs.default.coerce(r.tag_name,{includePrerelease:!0});return s&&i&&Bs.default.gt(s,i)?n:r}async function Zu(e){if(e){let n=await Xu("/releases?per_page=15"),s=gv(n);if(s?.tag_name)return{tag:s.tag_name,version:Wa(s.tag_name),prerelease:!!s.prerelease}}let t=await Xu("/releases/latest");if(t?.tag_name)return{tag:t.tag_name,version:Wa(t.tag_name),prerelease:!!t.prerelease};let r=await fv();return r&&(e||!r.prerelease)?{tag:r.tag,version:Wa(r.tag),prerelease:r.prerelease}:null}function hv(e,t){let r=Ws.default.coerce(e,{includePrerelease:!0}),n=Ws.default.coerce(t,{includePrerelease:!0});return!r||!n?!1:Ws.default.gt(n,r)}async function Ju(e,t){let r=await Zu(t);return r?{updateAvailable:hv(e,r.version),localVersion:e,remoteVersion:r.version,remoteTag:r.tag,prerelease:r.prerelease}:{updateAvailable:!1,localVersion:e,remoteVersion:e,remoteTag:null}}function Qu(e){try{let t=Date.now()+e*60*60*1e3;localStorage.setItem(M.UPDATE_PROMPT_SNOOZE_UNTIL,String(t))}catch{}}function ed(){try{let e=localStorage.getItem(M.UPDATE_PROMPT_SNOOZE_UNTIL);if(!e)return!1;let t=Number.parseInt(e,10);return!Number.isNaN(t)&&Date.now()<t}catch{return!1}}var yv=[{id:"overview",label:"Overview"},{id:"top-genres",label:"Top Genres"},{id:"top-lists",label:"Top Lists"},{id:"activity",label:"Activity"},{id:"consistency",label:"Consistency"},{id:"recently-played",label:"Recently Played"}];function Hs(e){return yv.filter(t=>!(t.id==="top-genres"&&!e.hasGenreData||t.id==="activity"&&!e.hasActivityData||t.id==="consistency"&&!e.hasConsistencyData))}function td(e){return e.hasActivityData?"full":"hidden"}function zs(e){if(e<6e4)return"<1 min";let t=Math.floor(e/6e4);if(t<60)return`${t} min`;let r=Math.floor(t/60),n=t%60;if(r<24)return n>0?`${r}h ${n}m`:`${r}h`;let s=Math.floor(r/24),i=r%24;return i>0?`${s}d ${i}h`:`${s}d`}function rd(e){let t=Date.now()-e,r=Math.floor(t/1e3);if(r<60)return"just now";let n=Math.floor(r/60);if(n<60)return`${n}m ago`;let s=Math.floor(n/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}function Ae(e){try{return Spicetify.Locale.formatNumber(e)}catch{return String(e)}}function wt(e,t){return t?`${e}:00`:e===0?"12am":e<12?`${e}am`:e===12?"12pm":`${e-12}pm`}function nd(e){return`$${(e*.004).toFixed(2)}`}be();var En=["overview","top-genres","top-lists","activity","consistency","recently-played"],Gs=["top-tracks","top-artists","top-albums"],mr={local:["tracks","unique-artists","streak","new-artists","peak-hour","skip-rate","est-payout"],statsfm:["unique-artists","new-artists","top-genre","est-payout"]},Tn={tracks:"Tracks","unique-artists":"Unique Artists","listening-days":"Listening Days",streak:"Streak","skip-rate":"Skip Rate","est-payout":"Est. Payout","top-genre":"Top Genre","new-artists":"New Artists","peak-hour":"Peak Hour"},id={"top-tracks":"Top Tracks","top-artists":"Top Artists","top-albums":"Top Albums"},bv=new Set(["hour","weekday","day"]),vv=new Set(["pill","bubble","minimal","off"]),nt={use24HourTime:!1,itemsPerSection:5,hiddenSections:[],sectionOrder:[...En],columnOrder:[...Gs],overviewOrder:{local:[...mr.local],statsfm:[...mr.statsfm]},activityTab:"hour",activeGenre:null,playCountVariant:"pill",playCountShowPeriodStreams:!0,activePage:"dashboard",receiveBetaUpdates:!1,showAnnouncementBanner:!0,announcementBannerHiddenForDismissKey:"",showShareCaption:!0,heatmapShrink:!0};function sd(){return{...nt,hiddenSections:[...nt.hiddenSections],sectionOrder:[...nt.sectionOrder],columnOrder:[...nt.columnOrder],overviewOrder:{local:[...nt.overviewOrder.local],statsfm:[...nt.overviewOrder.statsfm]}}}function Ks(e,t){let r=new Set(t),n=[],s=new Set;if(Array.isArray(e))for(let i of e)typeof i=="string"&&r.has(i)&&!s.has(i)&&(s.add(i),n.push(i));for(let i of t)s.has(i)||n.push(i);return n}function wv(e){let t=[],r=new Set;if(!Array.isArray(e))return t;for(let n of e)typeof n=="string"&&(r.has(n)||(r.add(n),t.push(n)));return t}function Re(){try{let e=localStorage.getItem(M.PREFERENCES);if(e){let t=JSON.parse(e),r=sd();return{...r,...t,hiddenSections:wv(t.hiddenSections??r.hiddenSections),sectionOrder:Ks(t.sectionOrder,En),columnOrder:Ks(t.columnOrder,Gs),overviewOrder:{local:Ks(t.overviewOrder?.local,mr.local),statsfm:Ks(t.overviewOrder?.statsfm,mr.statsfm)},activityTab:bv.has(t.activityTab)?t.activityTab:nt.activityTab,playCountVariant:vv.has(t.playCountVariant)?t.playCountVariant:nt.playCountVariant,playCountShowPeriodStreams:typeof t.playCountShowPeriodStreams=="boolean"?t.playCountShowPeriodStreams:nt.playCountShowPeriodStreams,receiveBetaUpdates:typeof t.receiveBetaUpdates=="boolean"?t.receiveBetaUpdates:nt.receiveBetaUpdates,showAnnouncementBanner:typeof t.showAnnouncementBanner=="boolean"?t.showAnnouncementBanner:nt.showAnnouncementBanner,announcementBannerHiddenForDismissKey:typeof t.announcementBannerHiddenForDismissKey=="string"?t.announcementBannerHiddenForDismissKey:nt.announcementBannerHiddenForDismissKey,heatmapShrink:typeof t.heatmapShrink=="boolean"?t.heatmapShrink:nt.heatmapShrink}}}catch{}return sd()}function ie(e,t){try{let r=Re();r[e]=t,localStorage.setItem(M.PREFERENCES,JSON.stringify(r))}catch{}}function He({children:e,label:t,placement:r}){let n=globalThis.Spicetify?.ReactComponent?.TooltipWrapper;return n?Spicetify.React.createElement(n,{label:t,placement:r},e):Spicetify.React.createElement(Spicetify.React.Fragment,null,e)}function St({value:e,onSelected:t}){let r=globalThis.Spicetify?.ReactComponent?.Toggle;return r?Spicetify.React.createElement(r,{value:e,onSelected:t}):Spicetify.React.createElement("input",{type:"checkbox",checked:e,onChange:n=>t(n.currentTarget.checked)})}var{useRef:Sv,useEffect:xv,useState:ad}=Spicetify.React,kv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ev(e){let t=new Date;t.setHours(0,0,0,0);let r=new Map;for(let u of e)r.set(u.date,u.count);let n=new Date(t);n.setDate(n.getDate()-364-n.getDay());let s=[],i=new Date(n);for(;i<=t;){let u=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;s.push({date:new Date(i),count:r.get(u)??0}),i.setDate(i.getDate()+1)}let a=s[0]?.date.getDay()??0;for(let u=0;u<a;u++)s.unshift(null);for(;s.length%7!==0;)s.push(null);let o=s.length/7,l=[];for(let u=0;u<o;u++)l.push(s.slice(u*7,u*7+7));let c=[],d=-1;for(let u=0;u<l.length;u++){let p=l[u].find(f=>f!==null);if(p&&p.date.getDate()<=7){let f=p.date.getMonth();f!==d&&(c.push({col:u,label:kv[f]}),d=f)}}return{cells:l,monthLabels:c}}function Tv(e,t){return e<=0?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${(.15+Math.min(1,e/t)*.85).toFixed(2)})`}function od({dailyPlayCounts:e,shrink:t}){let{cells:r,monthLabels:n}=Ev(e),s=r.length,i=Math.max(...r.flat().filter(m=>m!==null).map(m=>m.count),1),a=Sv(null),[o,l]=ad(16),[c,d]=ad(3);xv(()=>{if(!t||!a.current){l(16),d(3);return}let m=3,g=new ResizeObserver(h=>{let b=h[0].contentRect.width;if(b<=0)return;let x=Math.max(1,s),T=Math.max(1,Math.min(3,Math.floor(b/x/5))),y=Math.max(m,Math.min(16,Math.floor((b-x*T)/x)));l(y),d(T)});return g.observe(a.current),()=>g.disconnect()},[t,s]);let u=t?`${o}px`:"16px",p=t?c:3,f=`repeat(${s}, ${u})`;return Spicetify.React.createElement("div",{className:`heatmap-container${t?" heatmap-shrink":""}`},Spicetify.React.createElement("div",{className:"heatmap-scroll-wrap",ref:a},Spicetify.React.createElement("div",{className:"heatmap-scroll-inner"},Spicetify.React.createElement("div",{className:"heatmap-month-labels",style:{gridTemplateColumns:f,gap:`${p}px`}},Array.from({length:s}).map((m,g)=>{let h=n.find(b=>b.col===g);return Spicetify.React.createElement("span",{key:g},h?h.label:"")})),Spicetify.React.createElement("div",{className:"heatmap-grid",style:{gridTemplateColumns:f,gap:`${p}px`}},r.map((m,g)=>Spicetify.React.createElement("div",{key:g,className:"heatmap-week",style:{gridTemplateRows:`repeat(7, ${u})`,gap:`${p}px`}},m.map((h,b)=>Spicetify.React.createElement(He,{key:b,label:h?`${h.date.toDateString()} - ${h.count} plays`:"",placement:"top"},Spicetify.React.createElement("div",{className:"heatmap-cell",style:{width:u,height:u,background:h?Tv(h.count,i):"transparent"}})))))))),Spicetify.React.createElement("div",{className:"heatmap-legend"},Spicetify.React.createElement("span",null,"Less"),[.05,.25,.5,.75,1].map(m=>Spicetify.React.createElement("span",{key:m,className:"heatmap-legend-swatch",style:{background:m===.05?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${m})`}})),Spicetify.React.createElement("span",null,"More")))}function Ue({width:e="100%",height:t="12px",radius:r=4,style:n,className:s,...i}){return Spicetify.React.createElement("div",{...i,className:`skeleton-shimmer${s?` ${s}`:""}`,style:{width:e,height:t,borderRadius:r,...n}})}function ld({size:e=20,style:t}){return Spicetify.React.createElement(Ue,{width:e,height:e,radius:"50%",style:t})}function Ha({width:e="70%"}){return Spicetify.React.createElement(Ue,{width:e,height:"10px",radius:4})}var{useState:Pv}=Spicetify.React,cd=Array.from({length:24},(e,t)=>t),Av=Array.from({length:7},(e,t)=>t),Rv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ud=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Cv=[{value:"hour",label:"By hour"},{value:"weekday",label:"By week"},{value:"day",label:"By month"}];function za({loading:e=!1,hourlyDistribution:t,peakHour:r,weekdayDistribution:n,peakWeekday:s,dailyPlayCounts:i,streak:a,showStreak:o}){let l=Re(),[c,d]=Pv(()=>l.activityTab);if(e)return Spicetify.React.createElement("div",{className:"section-card","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),Spicetify.React.createElement("div",{className:"activity-chart"},cd.map(f=>Spicetify.React.createElement(Ue,{key:f,className:"activity-bar",height:`${20+f%6*10}%`}))));let u=f=>{d(f),ie("activityTab",f)},p=null;return c==="hour"&&t[r]>0?p=wt(r,l.use24HourTime):c==="weekday"&&n[s]>0&&(p=ud[s]),Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("div",{className:"activity-chart-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),p&&Spicetify.React.createElement("div",{className:"activity-chart-peak"},"Peak: ",Spicetify.React.createElement("span",null,p))),Spicetify.React.createElement("div",{className:"activity-tabs"},Cv.map(f=>Spicetify.React.createElement("button",{type:"button",key:f.value,className:`activity-tab${c===f.value?" active":""}`,onClick:()=>u(f.value)},f.label))),c==="hour"&&Iv(t,r,l.use24HourTime),c==="weekday"&&Nv(n,s),c==="day"&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement(od,{dailyPlayCounts:i??[],shrink:l.heatmapShrink}),o&&a!=null&&a>0&&Spicetify.React.createElement("div",{className:"streak-callout"},"You've listened on ",Spicetify.React.createElement("strong",null,a," days")," in a row \xB7 longest stretch this year.")))}function Iv(e,t,r){let n=Math.max(...e,1);return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"activity-chart"},cd.map(s=>{let i=e[s],a=i>0?Math.max(i/n*100,5):0,o=s===t&&i>0;return Spicetify.React.createElement(He,{key:s,label:`${wt(s,r)}: ${i} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${o?" peak":""}`,style:{height:`${a}%`}}))})),Spicetify.React.createElement("div",{className:"activity-chart-labels"},Spicetify.React.createElement("span",null,wt(0,r)),Spicetify.React.createElement("span",null,wt(6,r)),Spicetify.React.createElement("span",null,wt(12,r)),Spicetify.React.createElement("span",null,wt(18,r)),Spicetify.React.createElement("span",null,wt(0,r))))}function Nv(e,t){let r=Math.max(...e,1);return Spicetify.React.createElement("div",{className:"weekday-chart"},Av.map(n=>{let s=e[n],i=s>0?Math.max(s/r*100,5):0,a=n===t&&s>0;return Spicetify.React.createElement("div",{key:n,className:"weekday-column"},Spicetify.React.createElement("div",{className:"weekday-bar-area"},Spicetify.React.createElement(He,{label:`${ud[n]}: ${s} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${a?" peak":""}`,style:{height:`${i}%`}}))),Spicetify.React.createElement("span",{className:"weekday-label"},Rv[n]))}))}function _v(){return Spicetify.React.createElement("svg",{className:"announcement-banner-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false"},Spicetify.React.createElement("path",{d:"M3 10.5V13.5H5V10.5H3ZM7 6.5V17.5H9V6.5H7ZM11 3.5V20.5H13V3.5H11ZM15 6.5V17.5H17V6.5H15ZM19 10.5V13.5H21V10.5H19Z"}))}function Ka({title:e,body:t,titleOnly:r=!1,actionLabel:n,actionUrl:s,onActionClick:i,onDismiss:a}){return Spicetify.React.createElement("div",{className:"announcement-banner"},Spicetify.React.createElement(_v,null),Spicetify.React.createElement("span",{className:"announcement-banner-text"},r?Spicetify.React.createElement("strong",null,e):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("strong",null,e)," \u2013 ",t)),n&&(i?Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-link announcement-banner-link-btn",onClick:i},n):Spicetify.React.createElement("a",{className:"announcement-banner-link",href:s??"#",target:s&&s!=="#"?"_blank":void 0,rel:s&&s!=="#"?"noopener noreferrer":void 0},n)),Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-dismiss",onClick:a,"aria-label":"Dismiss"},"\xD7"))}var dd="https://discord.gg/XtqbFAHk6a",pd="https://buymeacoffee.com/xndr_";var{memo:Dv}=Spicetify.React;function Ov({version:e,onCheckForUpdates:t}){return Spicetify.React.createElement("footer",{className:"stats-app-footer"},Spicetify.React.createElement("span",{className:"stats-app-footer-credit"},"Made with love by Xndr"),Spicetify.React.createElement("span",{className:"stats-app-footer-links","aria-label":"Community links"},Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:dd,target:"_blank",rel:"noopener noreferrer"},"Discord"),Spicetify.React.createElement("a",{className:"stats-app-footer-link",href:pd,target:"_blank",rel:"noopener noreferrer"},"Buy me a coffee")),Spicetify.React.createElement("span",{className:"stats-app-footer-meta"},Spicetify.React.createElement("span",{className:"stats-app-footer-version"},"v",e),Spicetify.React.createElement("button",{type:"button",className:"stats-app-footer-install-link",onClick:t},"Check for updates")))}var fd=Dv(Ov);function md(e){return new Date(e).toISOString().slice(0,10)}function Lv(e,t){let{start:r,end:n}=t.getBoundaries();if(n===Number.MAX_SAFE_INTEGER)return e.slice(-30);let s=n-1,i=md(r),a=md(s);return e.filter(o=>o.date>=i&&o.date<=a)}function Mv(e){let t=new Date(e);if(!Number.isFinite(t.getTime())){let r=e.slice(0,10);t=new Date(`${r}T00:00:00`)}return Number.isFinite(t.getTime())?t.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}):e.slice(0,10)}function Ga({loading:e=!1,totalPlays:t,totalDuration:r,listeningDays:n,dailyPlayCounts:s,streak:i,activePeriod:a,activeProviderId:o="statsfm"}){if(e)return Spicetify.React.createElement("div",{className:"section-card consistency-section","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Array.from({length:4}).map((T,y)=>Spicetify.React.createElement("div",{key:y,className:"consistency-metric"},Spicetify.React.createElement(Ha,{width:"55%"}),Spicetify.React.createElement(Ue,{width:"45%",height:24,style:{marginTop:8}}),Spicetify.React.createElement(Ha,{width:"70%"})))));let l=Lv(s??[],a),c=l.length,d=l.length>0?l.filter(T=>T.count>0).length:n??0,u=d>0?t/d:0,p=d>0?r/6e4/d:0,f=c>0?Math.round(d/c*100):0,m=l.slice(-14),g=Math.max(...m.map(T=>T.count),1),h=a.id==="today"||a.id==="sfm-today",b=o==="local",x=({label:T,value:y,sub:v,tooltip:k,accent:S})=>Spicetify.React.createElement(He,{label:k},Spicetify.React.createElement("div",{className:`consistency-metric${S?" consistency-metric--accent":""}`},Spicetify.React.createElement("div",{className:"consistency-metric-label"},T),Spicetify.React.createElement("div",{className:"consistency-metric-value"},y),Spicetify.React.createElement("div",{className:"consistency-metric-sub"},v)));return Spicetify.React.createElement("div",{className:"section-card consistency-section"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Spicetify.React.createElement(x,{label:"Listening days",value:d,sub:`out of ${c||d} days`,tooltip:"Number of days in this period with at least one stream."}),Spicetify.React.createElement(x,{label:"Avg plays / active day",value:Math.round(u),sub:"streams when active",tooltip:"Average stream count only across days where you listened."}),Spicetify.React.createElement(x,{label:"Avg minutes / active day",value:Math.round(p),sub:"listening time",tooltip:"Average listening duration in minutes across active days."}),Spicetify.React.createElement(x,{label:"Current streak",value:i!=null&&i>0?`${i}d`:"-",sub:"consecutive days",tooltip:"Consecutive calendar days with at least one play (local timezone)."})),!h&&Spicetify.React.createElement("div",{className:"consistency-footer"},Spicetify.React.createElement(He,{label:`You listened on ${d} of ${c||d} days in this period.`},Spicetify.React.createElement("div",{className:"consistency-coverage"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Active-day coverage"),Spicetify.React.createElement("div",{className:"consistency-coverage-row"},Spicetify.React.createElement("div",{className:"consistency-coverage-track"},Spicetify.React.createElement("div",{className:"consistency-coverage-fill",style:{width:`${f}%`}})),Spicetify.React.createElement("span",null,f,"%")))),b?Spicetify.React.createElement("div",{className:"consistency-week-split"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Weekday vs weekend"),(()=>{let T=l.filter(A=>A.count>0),y=T.filter(A=>{let P=new Date(`${A.date}T00:00:00`).getDay();return P>=1&&P<=5}).length,v=T.length-y,k=Math.max(y+v,1),S=Math.round(y/k*100),w=100-S;return Spicetify.React.createElement("div",{className:"consistency-week-split-row"},Spicetify.React.createElement(He,{label:`${y} active weekdays (${S}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekdays"),Spicetify.React.createElement("strong",null,S,"%"))),Spicetify.React.createElement(He,{label:`${v} active weekend days (${w}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekend"),Spicetify.React.createElement("strong",null,w,"%"))))})()):m.length>0&&Spicetify.React.createElement("div",{className:"consistency-sparkline"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Last 14 days"),Spicetify.React.createElement("div",{className:"consistency-sparkline-bars"},m.map(T=>{let y=T.count>0&&T.count===g;return Spicetify.React.createElement(He,{key:T.date,label:`${Mv(T.date)}: ${T.count} plays`,placement:"top"},Spicetify.React.createElement("div",{className:"consistency-sparkline-bar-wrap"},Spicetify.React.createElement("div",{className:`consistency-sparkline-bar${y?" peak":""}`,style:{height:`${Math.max(T.count/g*100,T.count>0?8:2)}%`}})))})))))}function Va({onOpenSettings:e}){return Spicetify.React.createElement("div",{className:"empty-state",role:"status"},Spicetify.React.createElement("h2",{style:{fontSize:"var(--font-size-md, 14px)",fontWeight:700,color:"var(--spice-text)",marginBottom:"var(--space-sm, 8px)"}},"No listening data yet"),Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-md, 14px)",color:"var(--spice-subtext)",marginBottom:"var(--space-md, 16px)"}},"Play some tracks and check back. Make sure tracking is enabled in Settings."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:e},"Open Settings"))}je();var gd='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.37-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.68 7.68 0 0 0-1.68.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.57 11a8.3 8.3 0 0 0-.07.97 8.3 8.3 0 0 0 .07 1l-2.1 1.63a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01a7.35 7.35 0 0 0 1.68.99l.38 2.65c.05.24.25.42.49.42h4c.25 0 .44-.18.49-.42l.37-2.65a7.58 7.58 0 0 0 1.69-.99l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.66Z"/></svg>',Mr='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z"/></svg>',hd='<svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor" aria-hidden="true"><circle cx="3" cy="3" r="1.1"/><circle cx="9" cy="3" r="1.1"/><circle cx="15" cy="3" r="1.1"/><circle cx="3" cy="7" r="1.1"/><circle cx="9" cy="7" r="1.1"/><circle cx="15" cy="7" r="1.1"/></svg>',yd='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',bd='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',vd='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';function Vs(e){ie("activeGenre",e),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED))}function ja(){Vs(null)}function wd({activeGenre:e,onClear:t}){return e?Spicetify.React.createElement("div",{className:"filter-pill"},Spicetify.React.createElement("span",{className:"filter-pill-icon","aria-hidden":"true",dangerouslySetInnerHTML:{__html:bd}}),Spicetify.React.createElement("span",null,"Filtering by"),Spicetify.React.createElement("strong",{className:"filter-pill-genre"},e),Spicetify.React.createElement("button",{className:"filter-pill-close",type:"button",onClick:t,"aria-label":"Clear genre filter"},"\xD7")):null}be();var js=[{id:"health",label:"Health Indicator",text:"This dot shows your tracking status. Green means data is flowing, yellow means it\u2019s been a while, and red means something needs attention. Works for both local and stats.fm tracking.",selector:'[data-tour-target="health"], .header-provider-pill'},{id:"period",label:"Time Window & World",text:"Pick a time range and every section on the dashboard updates to match. Use the World tab at the end for global charts from stats.fm. Available periods depend on your tracking provider.",selector:'[data-tour-target="period"], .period-tabs'}],qs={overview:{id:"overview",label:"Overview Cards",text:"Your headline stats for the selected period include total plays, unique artists, listening streak, and more. The cards shown depend on your provider and tier.",selector:'[data-section-id="overview"]'},lists:{id:"lists",label:"Top Lists",text:"Your most-played tracks, artists, and albums ranked side by side. Click any item to jump straight to it in Spotify.",selector:'[data-section-id="top-lists"]'},activity:{id:"activity",label:"Activity Charts",text:"Hourly and daily listening patterns visualized as charts. Discover your peak hours and most active days of the week.",selector:'[data-section-id="activity"]'},consistency:{id:"consistency",label:"Consistency",text:"See how regularly you listened in this period, including active days, average intensity, and your longest silent gap.",selector:'[data-section-id="consistency"]'}},Ys=[{id:"share",label:"Share Card",text:"Generate a shareable image of your stats. Download it as a PNG or copy it straight to your clipboard.",selector:'[data-tour-target="share"], [aria-label="Share card"]'},{id:"gear",label:"Settings",text:"Customize everything by reordering or hiding sections, switching tracking providers, managing your data, and connecting Last.fm for world charts.",selector:'[data-tour-target="settings"], [aria-label="Open settings"]'}];function qa(e){if(!e)return[...js,qs.overview,qs.lists,qs.activity,...Ys];if(e.activePage==="world")return[js[0],js[1],Ys[1]];let t=e.sectionIds.map(n=>qs[n]).filter(n=>!!n),r=e.hasShare?Ys:Ys.filter(n=>n.id!=="share");return[...js,...t,...r]}var Xs=qa();function Sd(e){let t=e.match(/^(\d+)/);return t?t[1]:"0"}function xd(e){let t=localStorage.getItem(M.TOUR_SEEN_VERSION);return t?t!==Sd(e):!0}function kd(e){localStorage.setItem(M.TOUR_SEEN_VERSION,Sd(e))}var{useRef:$v,useLayoutEffect:Uv,useState:Fv}=Spicetify.React,Ed=280,Td=12,$r=8,Bv=210;function Wv(e,t){let r=window.innerHeight,n=window.innerWidth,s=e.top+e.height+Td,i=e.top-t-Td,a;s+t<=r-$r?a=s:i>=$r?a=i:a=$r;let o=e.left+e.width/2-Ed/2;return o=Math.max($r,Math.min(o,n-Ed-$r)),{position:"fixed",top:a,left:o,zIndex:10001,maxHeight:`calc(100vh - ${$r*2}px)`,overflowY:"auto"}}function Pd({step:e,steps:t=Xs,onNext:r,onBack:n,onSkip:s,targetRect:i}){let a=$v(null),[o,l]=Fv(void 0),c=t[e],d=e===t.length-1,u=i!=null;return Uv(()=>{if(!u){l(void 0);return}let f=a.current?.offsetHeight||Bv;l(Wv(i,f))},[u,i,e]),Spicetify.React.createElement("div",{ref:a,className:`tour-popover${u?" tour-popover--positioned":""}`,style:o},Spicetify.React.createElement("div",{className:"tour-step-counter"},"Step ",e+1," of ",t.length),Spicetify.React.createElement("div",{className:"tour-label"},c.label),Spicetify.React.createElement("div",{className:"tour-text"},c.text),Spicetify.React.createElement("div",{className:"tour-footer"},n?Spicetify.React.createElement("button",{type:"button",className:"tour-btn-back",onClick:n},"Back"):Spicetify.React.createElement("button",{type:"button",className:"tour-btn-skip",onClick:s},"Skip"),Spicetify.React.createElement("div",{className:"tour-dots"},t.map((f,m)=>Spicetify.React.createElement("span",{key:m,className:`tour-dot${m===e?" active":""}`}))),Spicetify.React.createElement("button",{type:"button",className:"tour-btn-next",onClick:r},d?"Finish":"Next")))}var{useState:Ad,useLayoutEffect:Rd,useCallback:Zs,useRef:Cd,useEffect:Id}=Spicetify.React,Js=6;function Hv(e){let t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function Nd(e){let t=document.querySelector(e);if(!t)return null;let r=t.getBoundingClientRect();return r.width===0&&r.height===0?null:{top:r.top,left:r.left,width:r.width,height:r.height}}function _d({active:e,version:t,steps:r=Xs,onComplete:n}){let[s,i]=Ad(0),a=Cd(0),[o,l]=Ad(null),c=Cd([]);Id(()=>()=>{c.current.forEach(clearTimeout)},[]);let d=Zs(()=>{kd(t),n()},[t,n]),u=Zs(b=>{let x=r[b];if(!x)return;c.current.forEach(clearTimeout),c.current=[],Hv(x.selector);let T=()=>l(Nd(x.selector));T(),c.current.push(window.setTimeout(T,160),window.setTimeout(T,320))},[r]),p=Zs(()=>{if(a.current>=r.length-1)d();else{let b=a.current+1;a.current=b,i(b),u(b)}},[d,u,r.length]),f=Zs(()=>{let b=Math.max(0,a.current-1);a.current=b,i(b),u(b)},[u]);if(Rd(()=>{if(e){if(r.length===0){d();return}a.current=0,i(0),u(0)}},[e,u,r.length,d]),Id(()=>{if(!e)return;let b=()=>{let x=r[a.current];x&&l(Nd(x.selector))};return window.addEventListener("resize",b),window.addEventListener("scroll",b,!0),()=>{window.removeEventListener("resize",b),window.removeEventListener("scroll",b,!0)}},[e,r]),Rd(()=>{if(!e)return;let b=x=>{x.key==="ArrowRight"?p():x.key==="ArrowLeft"?f():x.key==="Escape"&&d()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[e,p,f,d]),!e)return null;let m=o!==null,g=m?{position:"fixed",top:o.top-Js,left:o.left-Js,width:o.width+Js*2,height:o.height+Js*2,borderRadius:8,boxShadow:"0 0 0 9999px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:1e4}:void 0,h=Spicetify.React.createElement("div",{className:`tour-overlay${m?" tour-overlay--targeted":""}`},m&&Spicetify.React.createElement("div",{className:"tour-spotlight",style:g}),Spicetify.React.createElement(Pd,{step:s,steps:r,onNext:p,onBack:s>0?f:void 0,onSkip:d,targetRect:o}));return Spicetify.ReactDOM.createPortal(h,document.body)}je();be();function Ya({periods:e,activePeriod:t,onPeriodChange:r}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist"},e.map(n=>Spicetify.React.createElement("button",{type:"button",key:n.id,className:`period-tab ${n.id===t.id?"active":""}`,role:"tab","aria-selected":n.id===t.id,onClick:()=>r(n)},n.label)))}var{useState:Xa,useEffect:Za}=Spicetify.React,zv=2*6e4;function Kv(e){let t=Math.max(0,Math.ceil(e/1e3)),r=Math.floor(t/60),n=t%60;return r<=0?`${n}s`:n===0?`${r}m`:`${r}m ${n}s`}function Gv(e){if(!e||e.lastWriteAt===null)return"red";let t=(Date.now()-e.lastWriteAt)/6e4;return t<5?"green":t<60?"yellow":"red"}function Vv(e){if(!e||e.lastSuccessAt===null||e.circuitOpen||e.lastError!==null)return"red";let t=(Date.now()-e.lastSuccessAt)/6e4;return t<30?"green":t<120?"yellow":"red"}function jv(e,t,r){return e==="statsfm"?Vv(r):Gv(t)}function qv(e){if(!e||e.lastWriteAt===null)return"No plays recorded yet";if(!e.healthy&&e.lastError)return`Tracking error: ${e.lastError}`;let t=(Date.now()-e.lastWriteAt)/6e4,r=e.lastTrackName?` - ${e.lastTrackName.length>40?`${e.lastTrackName.slice(0,40)}...`:e.lastTrackName}`:"";return t<1?`Last play just now${r}`:t<60?`Last play ${Math.floor(t)}m ago${r}`:`Last play ${Math.floor(t/60)}h ago${r}`}function Yv(e){if(!e||e.lastFetchAt===null)return"No data fetched yet";if(e.circuitOpen)return"stats.fm unavailable: circuit open";if(e.lastError!==null)return`API error: ${e.lastError.length>60?`${e.lastError.slice(0,60)}\u2026`:e.lastError}`;if(e.lastSuccessAt===null)return"No data fetched yet";let t=Math.max(0,zv-(Date.now()-e.lastSuccessAt)),r=t>0?` \xB7 refresh in ${Kv(t)}`:" \xB7 refresh due now",n=(Date.now()-e.lastSuccessAt)/6e4;return n<1?`API healthy, just refreshed${r}`:n<60?`API healthy, refreshed ${Math.floor(n)}m ago${r}`:`Data stale, last refresh ${Math.floor(n/60)}h ago${r}`}function Ja({providerName:e,activeProviderId:t,onSettingsClick:r,onShareClick:n,periods:s,activePeriod:i,onPeriodChange:a}){let[o,l]=Xa(()=>{try{let g=localStorage.getItem(M.TRACKING_HEALTH);if(g)return JSON.parse(g)}catch{}return null});Za(()=>{let g=()=>{try{let h=localStorage.getItem(M.TRACKING_HEALTH);h&&l(JSON.parse(h))}catch{}};return window.addEventListener(H.HEALTH_CHANGED,g),()=>{window.removeEventListener(H.HEALTH_CHANGED,g)}},[]);let[c,d]=Xa(()=>{try{let g=localStorage.getItem(M.STATSFM_HEALTH);if(g)return JSON.parse(g)}catch{}return null});Za(()=>{let g=()=>{try{let h=localStorage.getItem(M.STATSFM_HEALTH);h&&d(JSON.parse(h))}catch{}};return window.addEventListener(H.STATSFM_HEALTH_CHANGED,g),()=>{window.removeEventListener(H.STATSFM_HEALTH_CHANGED,g)}},[]);let[u,p]=Xa(()=>Q.getActive()?.getProviderInfo().capabilities??null);Za(()=>{let g=()=>{p(Q.getActive()?.getProviderInfo().capabilities??null)};return g(),window.addEventListener(H.PROVIDER_CHANGED,g),window.addEventListener(H.STATSFM_PROFILE_REFRESHED,g),()=>{window.removeEventListener(H.PROVIDER_CHANGED,g),window.removeEventListener(H.STATSFM_PROFILE_REFRESHED,g)}},[t]);let f=jv(t,o,c),m=t==="statsfm"?Yv(c):qv(o);return Spicetify.React.createElement("header",{className:"stats-header"},Spicetify.React.createElement("div",{className:"stats-header-left"},Spicetify.React.createElement("h1",{className:"stats-header-title"},"Listening Stats"),Spicetify.React.createElement("div",{"data-tour-target":"health"},Spicetify.React.createElement(He,{label:m,placement:"bottom"},Spicetify.React.createElement("div",{className:"header-provider-pill"},Spicetify.React.createElement("span",{className:`health-dot health-${f}`,"aria-label":`Health: ${f} - ${m}`}),Spicetify.React.createElement("span",{className:"header-provider-name"},e),u?.tier==="plus"&&Spicetify.React.createElement("span",{className:"tier-badge tier-badge--plus"},"Plus"))))),Spicetify.React.createElement("div",{className:"stats-header-right"},s&&i&&a&&Spicetify.React.createElement("div",{"data-tour-target":"period"},Spicetify.React.createElement(Ya,{periods:s,activePeriod:i,onPeriodChange:a})),n&&Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:n,"aria-label":"Share card","data-tour-target":"share",dangerouslySetInnerHTML:{__html:vd}}),Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:r,"aria-label":"Open settings","data-tour-target":"settings",dangerouslySetInnerHTML:{__html:gd}})))}var{useState:Xv,useEffect:Zv}=Spicetify.React,Jv={UserNotFound:{title:"We couldn't find that stats.fm user",body:"Double-check the username in Settings.",cta:"settings"},NetworkError:{title:"Couldn't reach stats.fm",body:"Your connection might be flaky.",cta:"retry"},ServiceDown:{title:"stats.fm is having a moment",body:"Their side, not yours.",cta:"retry"},RateLimited:{title:"Too many requests",body:"We'll back off automatically.",cta:null},InvalidApiKey:{title:"Invalid Last.fm API key",body:"Check your key in Settings.",cta:"settings"},Unknown:{title:"Something went sideways",body:"It happens. Try once more?",cta:"retry"}};function Qv(e){let[t,r]=Xv(()=>e?Math.max(0,Math.ceil((e-Date.now())/1e3)):0);return Zv(()=>{if(!e)return;let n=setInterval(()=>{let s=Math.max(0,Math.ceil((e-Date.now())/1e3));r(s),s<=0&&clearInterval(n)},1e3);return()=>clearInterval(n)},[e]),t}function Ur({error:e,onRetry:t,onOpenSettings:r}){let n=Jv[e.variant],s=Qv(e.resetAt),i=n.cta==="settings"?r:t,a=n.cta==="settings"?"Open Settings":"Retry";return Spicetify.React.createElement("div",{className:"inline-error-card",role:"status"},Spicetify.React.createElement("div",{className:"inline-error-content"},Spicetify.React.createElement("div",{className:"inline-error-title"},n.title),Spicetify.React.createElement("div",{className:"inline-error-body"},n.body),e.resetAt!==void 0&&s>0&&Spicetify.React.createElement("div",{className:"inline-error-countdown"},"retry in 0:",s.toString().padStart(2,"0"))),n.cta&&Spicetify.React.createElement("button",{type:"button",className:"inline-error-cta",onClick:i},a))}var{useState:e0,useEffect:t0,useMemo:r0}=Spicetify.React;function n0({totalDuration:e,priorPeriodTotalDuration:t,totalPlays:r,uniqueArtistCount:n,periodLabel:s,periodKey:i}){let a=r0(()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[o,l]=e0(a?e:0);t0(()=>{if(a){l(e);return}let m=0,g=0,h=b=>{g||(g=b);let x=Math.min(1,(b-g)/900),T=1-(1-x)**3;l(Math.round(e*T)),x<1&&(m=requestAnimationFrame(h))};return l(0),m=requestAnimationFrame(h),()=>cancelAnimationFrame(m)},[i,e,a]);let c=Math.floor(o/36e5),d=Math.floor(o%36e5/6e4),u=t,p=u!=null&&u>0,f=p?Math.round((e-u)/u*100):null;return Spicetify.React.createElement("div",{className:"overview-hero-cell",style:{background:"radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button),.16), transparent 52%), var(--spice-card)",border:"1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12)",borderRadius:8,padding:20,minHeight:184,position:"relative",overflow:"hidden",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-between"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--spice-text)",fontSize:12,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}},Spicetify.React.createElement("span",{dangerouslySetInnerHTML:{__html:yd}}),Spicetify.React.createElement("span",null,"Total time - ",s)),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:14,marginTop:"auto"}},Spicetify.React.createElement("span",{"data-testid":"hero-hours",style:{fontSize:80,fontWeight:800,letterSpacing:"-0.04em",lineHeight:1,fontVariantNumeric:"tabular-nums"}},c),Spicetify.React.createElement("span",{style:{fontSize:28,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"h"),Spicetify.React.createElement("span",{"data-testid":"hero-minutes",style:{fontSize:48,fontWeight:700,letterSpacing:"-0.03em",fontVariantNumeric:"tabular-nums"}},d.toString().padStart(2,"0")),Spicetify.React.createElement("span",{style:{fontSize:22,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"m"),p&&f!=null&&Spicetify.React.createElement("span",{"data-testid":"hero-delta",style:{marginLeft:"auto",fontSize:12,color:"var(--spice-button)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:4}},f>=0?"\u2191":"\u2193"," ",Math.abs(f),"% vs prev")),Spicetify.React.createElement("div",{"data-testid":"hero-sublabel",style:{marginTop:14,display:"flex",alignItems:"center",gap:6,fontSize:12,color:"rgba(var(--spice-rgb-text), 0.55)"}},Spicetify.React.createElement("span",null,Ae(r)," plays \xB7 "),Spicetify.React.createElement("span",null,Ae(n)," artists")))}function s0(){return Spicetify.React.createElement("div",{className:"overview-section","aria-hidden":"true"},Spicetify.React.createElement(Ue,{className:"overview-hero-cell",height:184}),Spicetify.React.createElement("div",{className:"overview-right-block"},Array.from({length:4}).map((e,t)=>Spicetify.React.createElement(Ue,{key:t,className:"overview-card",height:60}))),Spicetify.React.createElement("div",{className:"overview-bottom-row"},Array.from({length:3}).map((e,t)=>Spicetify.React.createElement(Ue,{key:t,className:"overview-card",height:60}))))}function Qs({stats:e,activePeriod:t,loading:r=!1}){if(r||!e)return Spicetify.React.createElement(s0,null);let n=Re(),i=(Q.getActive()?.getProviderInfo().id??"local")==="statsfm"?"statsfm":"local",a=i==="statsfm",o={tracks:{value:Ae(e.totalPlays),tooltip:"Total number of tracks played in the selected period",sub:"plays"},"unique-artists":{value:Ae(e.uniqueArtistCount),tooltip:"Number of distinct artists played in the selected period"},streak:void 0,"new-artists":{value:Ae(e.newArtistCount??0),tooltip:"Artists you played in this period that you didn't play in the previous period (or no plays in the prior window)",sub:"discovered"},"peak-hour":{value:wt(e.peakHour,n.use24HourTime),tooltip:"Your most active listening hour in this period",sub:"most active"},"skip-rate":a?void 0:{value:`${Math.round(e.skipRate*100)}%`,tooltip:"Percentage of tracks skipped before the play threshold"},"est-payout":{value:nd(e.totalPlays),tooltip:"Estimated streaming payout at $0.004 per play (approximate only)",sub:"indie scale"},"top-genre":{value:e.topGenres[0]?.genre??"-",tooltip:"Your most-played genre in this period"},"listening-days":{value:e.listeningDays!=null&&e.listeningDays>0?Ae(e.listeningDays):"-",tooltip:"Number of days with at least one play in the selected period"}},c=n.overviewOrder[i].filter(h=>o[h]!==void 0&&!n.hiddenSections.includes(h)),d=c.slice(0,4),u=c.slice(4,7),p=Math.max(1,Math.min(2,d.length)),f=Math.max(1,Math.min(3,u.length)),m=h=>{let b=o[h];if(!b)return null;let x=Tn[h]??h;return Spicetify.React.createElement(He,{key:h,label:b.tooltip},Spicetify.React.createElement("div",{className:"overview-card","data-card-id":h},Spicetify.React.createElement("div",{className:"overview-card-label"},x),Spicetify.React.createElement("div",{className:"overview-card-row"},Spicetify.React.createElement("span",{className:"overview-card-value",style:b.accent?{color:b.accent}:void 0},b.value),b.sub&&Spicetify.React.createElement("span",{className:"overview-card-sub"},b.sub))))},g=u.length>0;return Spicetify.React.createElement("div",{className:`overview-section${g?"":" overview-section--compact"}`},Spicetify.React.createElement(n0,{totalDuration:e.totalDuration,priorPeriodTotalDuration:e.priorPeriodTotalDuration,totalPlays:e.totalPlays,uniqueArtistCount:e.uniqueArtistCount,periodLabel:t.label,periodKey:t.id}),d.length>0&&Spicetify.React.createElement("div",{className:"overview-right-block",style:{gridTemplateColumns:`repeat(${p}, minmax(0, 1fr))`}},d.map(m)),g&&Spicetify.React.createElement("div",{className:"overview-bottom-row",style:{gridTemplateColumns:`repeat(${f}, minmax(0, 1fr))`}},u.map(m)))}var i0=new Set(["track","artist","album","playlist","show","episode","user"]);function Ze(e){let t=e.split(":");t.length>=3&&t[0]==="spotify"&&i0.has(t[1])&&t[2]&&Spicetify.Platform.History.push(`/${t[1]}/${t[2]}`)}function Qa(e,t,r){let n=new Blob([e],{type:r}),s=URL.createObjectURL(n),i=document.createElement("a");i.href=s,i.download=t,i.click(),URL.revokeObjectURL(s)}function eo({recentPlays:e=[],loading:t=!1}){return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Last 24h"),Spicetify.React.createElement("h2",{className:"section-title"},"Recently Played")),Spicetify.React.createElement("div",{className:"recently-played"},t?Array.from({length:6}).map((r,n)=>Spicetify.React.createElement("div",{key:n,className:"recently-played-item","aria-hidden":"true"},Spicetify.React.createElement(Ue,{className:"recently-played-skeleton-art",width:132,height:132,radius:6}),Spicetify.React.createElement(Ue,{className:"recently-played-skeleton-text",width:100,height:10,radius:2,style:{marginTop:8}}),Spicetify.React.createElement(Ue,{className:"recently-played-skeleton-subtext",width:70,height:10,radius:2,style:{marginTop:6}}))):e.map(r=>{let n=ve(r.albumArt);return Spicetify.React.createElement("div",{key:`${r.trackUri}-${r.playedAt}`,className:"recently-played-item",onClick:()=>Ze(r.trackUri)},n?Spicetify.React.createElement("img",{src:n,alt:"",className:"recently-played-art"}):Spicetify.React.createElement("div",{className:"recently-played-art"}),Spicetify.React.createElement("div",{className:"recently-played-name"},r.trackName),Spicetify.React.createElement("div",{className:"recently-played-artist"},r.artistName),Spicetify.React.createElement("div",{className:"recently-played-time"},rd(r.playedAt)))})))}ks();je();be();yt();Dr();var{useState:ei}=Spicetify.React,a0={not_found:"Username not found. Check your stats.fm customId.",private:"Your profile is private. Make it public in stats.fm settings.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function Dd({onComplete:e}){let[t,r]=ei("provider"),[n,s]=ei(""),[i,a]=ei(!1),[o,l]=ei(null),c=()=>{Q.setActive("local"),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),e()},d=async()=>{if(!n.trim())return;a(!0),l(null);let u=await pr(n.trim());if(!u.valid){l(a0[u.reason]??"Connection failed. Try again."),a(!1);return}let p={username:n.trim(),isPlus:u.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(M.STATSFM_CONFIG,JSON.stringify(p)),await ft.init(),oe.invalidate(),Q.setActive("statsfm"),window.dispatchEvent(new CustomEvent(H.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),a(!1),e()};return Spicetify.React.createElement("div",{className:"wizard-page"},Spicetify.React.createElement("div",{className:"wizard-modal wizard-modal--page","aria-label":"Choose your provider"},t==="provider"?Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Welcome to Listening Stats"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Choose how you want to track your listening history."),Spicetify.React.createElement("div",{className:"wizard-provider-cards"},Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:c},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"Local Tracking"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Stats tracked on this device. No account required."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Start with Local")),Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:()=>r("statsfm")},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"stats.fm"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Import your listening history from your stats.fm profile."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Use stats.fm")))):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Connect stats.fm"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Use your stats.fm customId. Your profile must be public for this to work."),Spicetify.React.createElement("div",{className:"provider-status-card wizard-statsfm-help"},Spicetify.React.createElement("div",{className:"settings-label"},"How to find your customId"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Open stats.fm, visit your profile, and copy the customId from the profile URL."),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Example: stats.fm/user/",Spicetify.React.createElement("strong",null,"your-custom-id"))),Spicetify.React.createElement("div",{className:"wizard-statsfm-form"},Spicetify.React.createElement("input",{type:"text",value:n,onChange:u=>s(u.target.value),onKeyDown:u=>{u.key==="Enter"&&!i&&d()},placeholder:"Enter your stats.fm customId",disabled:i,"aria-label":"stats.fm customId",className:"wizard-statsfm-input"}),Spicetify.React.createElement("div",{className:"wizard-statsfm-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>r("provider"),disabled:i},"Back"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>{d()},disabled:i||!n.trim()},i?"Connecting...":"Connect stats.fm")),o&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},o)))))}be();function o0(e){let t=/^spotify:album:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function Od(e){let t=/^spotify:track:([a-zA-Z0-9]+)$/.exec(e.trim());return t?t[1]:null}function l0(e){for(let t of e.topTracks){let r=ve(t.albumArt);r&&(t.albumArt=r)}for(let t of e.topArtists){let r=ve(t.imageUrl??void 0);r&&(t.imageUrl=r)}for(let t of e.topAlbums??[]){let r=ve(t.albumArt);r&&(t.albumArt=r)}for(let t of e.recentPlays??[]){let r=ve(t.albumArt);r&&(t.albumArt=r)}}function c0(e,t){let r=[],n=new Set;for(let s of e)if(!n.has(s.trackUri)&&(n.add(s.trackUri),r.push(s),r.length>=t))break;return r}function u0(e){let t=new Map;for(let r of e.recentPlays??[]){let n=r.albumArt?.trim();n&&t.set(r.trackUri,n)}for(let r of e.topTracks)if(!r.albumArt?.trim()){let n=t.get(r.trackUri);n&&(r.albumArt=n)}}function d0(e){for(let t of e.topAlbums??[]){let r=t.albumArt?.trim();if(r)for(let n of e.topTracks)!n.albumArt?.trim()&&n.albumUri===t.albumUri&&(n.albumArt=r)}}async function p0(e){let t=e.filter(s=>(!s.albumArt||!String(s.albumArt).trim())&&s.albumUri?.startsWith("spotify:album:"));if(t.length===0)return;let r=new Map;for(let s of t){let i=o0(s.albumUri);if(!i)continue;let a=r.get(i)??[];a.push(s),r.set(i,a)}let n=[...r.keys()];for(let s=0;s<n.length;s+=20){let i=n.slice(s,s+20),a=i.join(","),o=await bt(`https://api.spotify.com/v1/albums?ids=${encodeURIComponent(a)}`);if(!o.ok)continue;let l=new Map;for(let c of o.data.albums??[]){if(!c?.id)continue;let d=c.images?.[0]?.url;d&&l.set(c.id,d)}for(let c of i){let d=l.get(c);if(d)for(let u of r.get(c)??[])u.albumArt=d}}}async function f0(e){let t=e.filter(s=>(!s.albumArt||!String(s.albumArt).trim())&&Od(s.trackUri));if(t.length===0)return;let r=new Map;for(let s of t){let i=Od(s.trackUri);if(!i)continue;let a=r.get(i)??[];a.push(s),r.set(i,a)}let n=[...r.keys()];for(let s=0;s<n.length;s+=50){let i=n.slice(s,s+50),a=i.join(","),o=await bt(`https://api.spotify.com/v1/tracks?ids=${encodeURIComponent(a)}`);if(o.ok)for(let l=0;l<i.length;l++){let c=i[l],u=o.data.tracks?.[l]?.album?.images?.[0]?.url;if(!(!u||!c))for(let p of r.get(c)??[])p.albumArt=u}}}async function m0(e){let t=e.topArtists.filter(r=>(!r.imageUrl||!String(r.imageUrl).trim())&&hn(r.artistUri??""));if(t.length!==0)for(let r=0;r<t.length;r+=50){let n=t.slice(r,r+50),s=n.map(o=>o.artistUri.replace(/^spotify:artist:/i,"")).join(","),i=await bt(`https://api.spotify.com/v1/artists?ids=${encodeURIComponent(s)}`);if(!i.ok)continue;let a=i.data.artists??[];for(let o=0;o<n.length;o++){let l=n[o],d=a[o]?.images?.[0]?.url;if(!d?.trim())continue;let u=ve(d)??d;u.trim()&&(l.imageUrl=u)}}}function g0(e){let t=new Map;for(let r of e.topTracks){let n=r.albumArt?.trim(),s=r.artistUri?.trim();!n||!s||t.has(s)||t.set(s,n)}for(let r of e.topArtists){if(r.imageUrl?.trim())continue;let n=r.artistUri?.trim()??"",s=n?t.get(n):void 0;if(s){let i=ve(s)??s;i.trim()&&(r.imageUrl=i)}}}function h0(e){let t=new Map;for(let r of e.topTracks){let n=r.albumArt?.trim(),s=r.artistName?.trim().toLowerCase();!n||!s||t.has(s)||t.set(s,n)}for(let r of e.topArtists){if(r.imageUrl?.trim())continue;let n=r.artistName?.trim().toLowerCase();if(!n)continue;let s=t.get(n);if(s){let i=ve(s)??s;i.trim()&&(r.imageUrl=i)}}}async function Ld(e){try{l0(e);let t=c0(e.topTracks,50);u0(e),d0(e),await p0(t),await f0(t);let r=[...new Set(e.topArtists.map(n=>n.artistUri).filter(Boolean))];if(r.length>0){await Ss(r);let n=await ge.artists.where("uri").anyOf(r).toArray(),s=new Map(n.map(i=>[i.uri,i]));for(let i of e.topArtists){let a=s.get(i.artistUri),o=ve(a?.imageUrl??void 0)??a?.imageUrl;o?.trim()&&(!i.imageUrl||!String(i.imageUrl).trim())&&(i.imageUrl=o)}}await m0(e),g0(e),h0(e)}catch{}}var y0={square:{width:1080,height:1080},story:{width:1080,height:1920}},Md=[{id:"top5",label:"Top 5"},{id:"time",label:"Total time"},{id:"genre",label:"Genre"},{id:"streak",label:"Streak"},{id:"throwback",label:"Throwback"},{id:"wrapped",label:"Wrapped"},{id:"recap",label:"Recap"}];function no(e,t,r){let n=e.topTracks.length>0,s=Md.filter(i=>{if(r&&!r.includes(i.id)||i.id==="recap"&&!r)return!1;switch(i.id){case"top5":case"throwback":return n;case"time":return e.totalDuration>0;case"genre":return(t?.hasGenreData??!0)&&e.topGenres.some(a=>a.count>0);case"streak":return(t?.hasStreakData??!1)&&(e.streak??0)>0;default:return!0}});return s.length===0?Md.filter(i=>i.id===(r?.[0]??"wrapped")):s}var Z='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',$d=[30,215,96];function ye(e,t=1){return t===1?`rgb(${e[0]},${e[1]},${e[2]})`:`rgba(${e[0]},${e[1]},${e[2]},${t})`}function ti(e){if(!e)return null;let t=e.trim(),r=t.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(r)return[Number(r[1]),Number(r[2]),Number(r[3])];let n=t.replace("#","");return/^[\da-f]{6}$/i.test(n)?[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]:null}function b0(e){if(!e)return{accent:$d,bgA:"#0c160e",bgB:"#122318",bgC:"#0a1d12",text:"#ffffff",muted:"rgba(255,255,255,0.72)",dim:"rgba(255,255,255,0.55)",faint:"rgba(255,255,255,0.45)",chunkBg:"rgba(255,255,255,0.05)",chunkBorder:"rgba(255,255,255,0.09)",barTrack:"rgba(255,255,255,0.10)"};let t=getComputedStyle(document.documentElement),r=ti(t.getPropertyValue("--spice-button"))??ti(t.getPropertyValue("--spice-text"))??$d,n=ti(t.getPropertyValue("--spice-main"))??[12,22,14],s=ti(t.getPropertyValue("--spice-text"))??[255,255,255];return{accent:r,bgA:ye([Math.max(0,n[0]-10),Math.max(0,n[1]-10),Math.max(0,n[2]-10)]),bgB:ye(n),bgC:ye([Math.max(0,n[0]-6),Math.max(0,n[1]-6),Math.max(0,n[2]-6)]),text:ye(s),muted:ye(s,.72),dim:ye(s,.55),faint:ye(s,.45),chunkBg:ye(s,.06),chunkBorder:ye(s,.14),barTrack:ye(s,.12)}}var Br=72,Ud=170,v0=128;function xt(e){return Math.round(e*1.25)}function so(e,t,r,n,s,i){e.beginPath(),e.moveTo(t+i,r),e.arcTo(t+n,r,t+n,r+s,i),e.arcTo(t+n,r+s,t,r+s,i),e.arcTo(t,r+s,t,r,i),e.arcTo(t,r,t+n,r,i),e.closePath()}function Xt(e,t,r,n,s,i){so(e,t,r,n,s,i),e.fill()}function ze(e,t,r){if(r<=8)return"\u2026";if(e.measureText(t).width<=r)return t;let n=t;for(;n.length>0&&e.measureText(`${n}\u2026`).width>r;)n=n.slice(0,-1);return`${n}\u2026`}function Wd(e){let t=ve(e);return t?new Promise(r=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>r(n),n.onerror=()=>r(null),setTimeout(()=>r(null),5e3),n.src=t}):Promise.resolve(null)}var Fd=[["#1d4ed8","#22d3ee"],["#7c3aed","#ec4899"],["#059669","#a3e635"],["#dc2626","#f97316"],["#0e7490","#2dd4bf"],["#b45309","#fbbf24"],["#4338ca","#a78bfa"]];function w0(e){let t=0;for(let r=0;r<e.length;r++)t=t*31+e.charCodeAt(r)|0;return Math.abs(t)}function S0(e,t,r,n,s,i){let a=Fd[w0(i||"\u266B")%Fd.length],o=e.createLinearGradient(t,r,t+n,r+n);o.addColorStop(0,a[0]),o.addColorStop(1,a[1]),e.fillStyle=o,Xt(e,t,r,n,n,s);let l=e.createLinearGradient(t,r,t,r+n);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.28)"),e.fillStyle=l,Xt(e,t,r,n,n,s);let c=(i.match(/[\p{L}\p{N}]/u)?.[0]??"\u266A").toUpperCase();e.fillStyle="rgba(255,255,255,0.92)",e.font=`800 ${Math.round(n*.44)}px ${Z}`,e.textAlign="center",e.textBaseline="middle",e.fillText(c,t+n/2,r+n/2+Math.round(n*.03)),e.textAlign="left",e.textBaseline="alphabetic"}async function ri(e,t,r,n,s,i,a){let o=t?await Wd(t):null;if(!o){S0(e,r,n,s,i,a);return}e.save(),so(e,r,n,s,s,i),e.clip(),e.drawImage(o,r,n,s,s),e.restore()}var to=34,Zt=to+28;function Wr(e,t,r,n,s,i=!1){let a=e.letterSpacing;return e.fillStyle=s.dim,e.font=`700 ${to}px ${Z}`,e.letterSpacing="0.1em",e.fillText(i?t:t.toUpperCase(),r,n+to),e.letterSpacing=a,n+Zt}function kt(e,t,r,n,s,i){let a=e.letterSpacing;e.fillStyle=i,e.font=`700 ${s}px ${Z}`,e.letterSpacing="0.08em",e.fillText(t.toUpperCase(),r,n),e.letterSpacing=a}function Et(e,t,r,n,s,i){e.fillStyle=i.chunkBg,Xt(e,t,r,n,s,20),e.strokeStyle=i.chunkBorder,e.lineWidth=2,so(e,t,r,n,s,20),e.stroke()}function x0(e){let t=(Math.floor(e)%24+24)%24;return`${t%12||12} ${t<12?"AM":"PM"}`}function Hd(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);if(!t)return e;let r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=Number(t[2]);return n<1||n>12?e:`${r[n-1]} ${Number(t[3])}`}function k0(e,t,r,n){let s=160*(Math.PI/180),i=Math.sin(s),a=-Math.cos(s),o=Math.hypot(t,r)/2,l=e.createLinearGradient(t/2-i*o,r/2-a*o,t/2+i*o,r/2+a*o);l.addColorStop(0,n.bgA),l.addColorStop(.5,n.bgB),l.addColorStop(1,n.bgC),e.fillStyle=l,e.fillRect(0,0,t,r);let c=e.createRadialGradient(t,0,0,t,0,t*.8);c.addColorStop(0,ye(n.accent,.35)),c.addColorStop(1,ye(n.accent,0)),e.fillStyle=c,e.fillRect(0,0,t,r);let d=e.createRadialGradient(0,r,0,0,r,r*.7);d.addColorStop(0,ye(n.accent,.15)),d.addColorStop(1,ye(n.accent,0)),e.fillStyle=d,e.fillRect(0,0,t,r)}function E0(e,t,r,n){let s=Br,i=52;e.fillStyle=ye(n.accent),e.beginPath(),e.arc(s+18,i+18,18,0,Math.PI*2),e.fill();let a=e.letterSpacing;if(e.fillStyle=n.dim,e.font=`600 28px ${Z}`,e.letterSpacing="0.04em",e.textBaseline="middle",e.fillText("LISTENING STATS \xB7 SPICETIFY",s+48,i+18),e.letterSpacing=a,r){e.fillStyle=n.dim,e.font=`500 26px ${Z}`;let o=s+48+e.measureText("LISTENING STATS \xB7 SPICETIFY").width,l=Math.max(60,t-Br-o-28);e.textAlign="right",e.fillText(ze(e,r,l),t-Br,i+18),e.textAlign="left"}e.textBaseline="alphabetic"}function T0(e,t,r,n){e.fillStyle=n.faint,e.font=`28px ${Z}`,e.fillText(r,Br,t-52)}function Fr(e){return e.tile+e.gap}async function ro(e,t,r,n,s,i,a){let{palette:o}=t,l=24,c=0;a.rightValue&&(e.font=`700 ${r.countPx}px ${Z}`,c=Math.max(c,e.measureText(a.rightValue).width)),a.rightCaps&&(e.font=`700 ${r.capsPx}px ${Z}`,c=Math.max(c,e.measureText(a.rightCaps).width*1.08));let d=c>0?c+28:0;e.fillStyle=ye(o.accent),e.font=`800 ${Math.round(r.tile*.52)}px ${Z}`,e.textAlign="right",e.fillText(`${a.rank}`,n+r.rank,s+r.tile/2+Math.round(r.tile*.19)),e.textAlign="left";let u=n+r.rank+l;await ri(e,a.art??void 0,u,s,r.tile,r.radius,a.seed);let p=u+r.tile+l,f=Math.max(64,n+i-d-20-p),m=s+Math.round(r.tile*.42),g=s+Math.round(r.tile*.82);if(e.fillStyle=o.text,e.font=`600 ${r.titlePx}px ${Z}`,e.fillText(ze(e,a.title,f),p,m),e.fillStyle=o.dim,e.font=`${r.subPx}px ${Z}`,e.fillText(ze(e,a.subtitle,f),p,g),a.rightValue&&(e.fillStyle=o.text,e.font=`700 ${r.countPx}px ${Z}`,e.textAlign="right",e.fillText(a.rightValue,n+i,m),e.textAlign="left"),a.rightCaps){e.textAlign="right";let h=e.letterSpacing;e.fillStyle=o.dim,e.font=`700 ${r.capsPx}px ${Z}`,e.letterSpacing="0.08em",e.fillText(a.rightCaps.toUpperCase(),n+i,g),e.letterSpacing=h,e.textAlign="left"}}var P0=(e,t,r,n)=>{let{stats:s,size:i,palette:a}=t,o=i==="story",l=s.topTracks.slice(0,5),c=o?{tile:124,gap:34,rank:56,titlePx:42,subPx:30,countPx:34,capsPx:20,radius:12}:{tile:96,gap:26,rank:48,titlePx:36,subPx:26,countPx:30,capsPx:18,radius:10},d=l.length*Fr(c)-c.gap,u=200,p=56,f=o&&s.totalPlays>0,m=Zt+16+d;f&&(m+=p+u);let g=f&&m<=n;return!g&&f&&(m-=p+u),{height:m,draw:async(h,b,x,T)=>{x=Wr(h,"My top 5",b,x,a)+16;for(let S=0;S<l.length;S++){let w=l[S];await ro(h,t,c,b,x,T,{rank:S+1,art:w.albumArt,seed:w.trackName,title:w.trackName,subtitle:w.artistName,rightValue:w.count>0?`${w.count}`:void 0,rightCaps:w.count>0?"plays":void 0}),x+=Fr(c)}if(x-=c.gap,!g)return;x+=p;let y=l.reduce((S,w)=>S+w.count,0),v=Math.round(y/s.totalPlays*100);Et(h,b,x,T,u,a);let k=b+32;kt(h,"Top 5 share",k,x+52,24,a.dim),h.fillStyle=a.text,h.font=`800 52px ${Z}`,h.fillText(`${v}% of all plays`,k,x+124),h.fillStyle=a.muted,h.font=`28px ${Z}`,h.textAlign="right",h.fillText(`${Ae(y)} of ${Ae(s.totalPlays)} plays`,b+T-32,x+124),h.textAlign="left"}}},A0=(e,t,r,n)=>{let{stats:s,size:i,palette:a,periodLabel:o,periodDayCount:l}=t,c=i==="story",d=Math.floor(s.totalDuration/36e5),u=c?330:250,p=c?84:64,f=c?40:36,m=s.topArtists[0]?.artistName??"",g=210,h=56,b=88,x=Math.min(3,s.topArtists.length),T=x>0?96+x*b:0,y=Math.floor(u*.78),v=Zt+20+y+28+xt(p);m&&(v+=24+xt(f));let k=!1,S=!1;return c&&(v+h+g<=n&&(k=!0,v+=h+g),T>0&&v+40+T<=n&&(S=!0,v+=40+T)),{height:v,draw:async(w,A,P,_)=>{let N=o.trim()?`${o} \xB7 I listened`:"Listening time";if(P=Wr(w,N,A,P,a,!0)+20,w.font=`900 ${u}px ${Z}`,w.fillStyle=ye(a.accent),w.fillText(`${d}`,A,P+y),P+=y+28,w.fillStyle=a.text,w.font=`700 ${p}px ${Z}`,w.fillText("hours",A,P+p),P+=xt(p),m){P+=24,w.fillStyle=a.muted,w.font=`${f}px ${Z}`;let C="Mostly to ";w.fillText(C,A,P+f);let I=w.measureText(C).width;w.fillStyle=ye(a.accent),w.font=`700 ${f}px ${Z}`,w.fillText(ze(w,`${m}.`,_-I),A+I,P+f),P+=xt(f)}if(k){P+=h;let C=24,I=(_-C)/2,O=Math.round(d/24),W=Math.round(d*60/Math.max(1,l));Et(w,A,P,I,g,a),Et(w,A+I+C,P,I,g,a),kt(w,"Equivalent to",A+32,P+52,24,a.dim),w.fillStyle=a.text,w.font=`800 56px ${Z}`,w.fillText(`${O} days`,A+32,P+124),w.fillStyle=a.muted,w.font=`26px ${Z}`,w.fillText("of nonstop play",A+32,P+168);let G=A+I+C+32;kt(w,"Daily average",G,P+52,24,a.dim),w.fillStyle=a.text,w.font=`800 56px ${Z}`,w.fillText(`${W} min`,G,P+124),w.fillStyle=a.muted,w.font=`26px ${Z}`,s.totalPlays>0&&w.fillText(ze(w,`across ${Ae(s.totalPlays)} plays`,I-64),G,P+168),P+=g}if(S){P+=40,Et(w,A,P,_,T,a),kt(w,"Top artists",A+32,P+52,26,a.dim);let C=P+80;for(let I=0;I<x;I++){let O=t.stats.topArtists[I],W=64;w.fillStyle=ye(a.accent),w.font=`800 38px ${Z}`,w.textAlign="right",w.fillText(`${I+1}`,A+32+30,C+W/2+13),w.textAlign="left",await ri(w,O.imageUrl??void 0,A+32+52,C,W,W/2,O.artistName);let G=A+32+52+W+22,D=O.count>0?`${Ae(O.count)} ${O.count===1?"play":"plays"}`:"";w.font=`28px ${Z}`;let F=w.measureText(D).width+24;w.fillStyle=a.text,w.font=`600 36px ${Z}`,w.fillText(ze(w,O.artistName,A+_-32-F-G),G,C+W/2+12),w.fillStyle=a.dim,w.font=`28px ${Z}`,w.textAlign="right",w.fillText(D,A+_-32,C+W/2+11),w.textAlign="left",C+=b}}}}},R0=(e,t,r,n)=>{let{stats:s,size:i,palette:a}=t,o=i==="story",l=o?6:5,c=s.topGenres.slice(0,l),d=c.reduce((v,k)=>v+k.count,0),u=c[0]?.count||1,p=d>0?Math.round(u/d*100):0,f=o?36:32,m=o?40:32,g=c.length*(f+m)-m,h=c.slice(0,3).filter((v,k)=>s.topTracks[k]),b=96,x=h.length>0?88+h.length*b:0,T=Zt+24+g,y=!1;return o&&x>0&&T+56+x<=n&&(y=!0,T+=56+x),{height:T,draw:async(v,k,S,w)=>{if(c.length===0||d===0)return;S=Wr(v,`I was ${p}% ${c[0].genre}`,k,S,a)+24;let A=o?40:36,P=o?34:32;v.font=`600 ${A}px ${Z}`;let _=0;for(let O of c)_=Math.max(_,v.measureText(O.genre).width);_=Math.min(_+8,Math.floor(w*.36));let N=110;for(let O=0;O<c.length;O++){let W=c[O],G=S+O*(f+m),D=W.count/d,F=G+f/2;v.fillStyle=a.text,v.font=`600 ${A}px ${Z}`,v.textBaseline="middle",v.fillText(ze(v,W.genre,_),k,F);let E=k+_+24,U=Math.max(64,w-N-(E-k)-20);v.fillStyle=a.barTrack,Xt(v,E,G,U,f,f/2),v.fillStyle=ye(a.accent,1-O*.13),Xt(v,E,G,Math.max(f,U*(W.count/u)),f,f/2),v.fillStyle=a.muted,v.font=`600 ${P}px ${Z}`,v.textAlign="right",v.fillText(`${Math.round(D*100)}%`,k+w,F),v.textAlign="left",v.textBaseline="alphabetic"}if(S+=g,!y)return;S+=56,Et(v,k,S,w,x,a),kt(v,"Genre leaders",k+32,S+52,26,a.dim);let C=S+80,I=64;for(let O=0;O<h.length;O++){let W=h[O],G=s.topTracks[O];await ri(v,G.albumArt,k+32,C,I,8,G.trackName);let D=k+32+I+24;v.font=`700 24px ${Z}`;let F=v.measureText(W.genre.toUpperCase()).width+28,E=Math.max(100,k+w-32-F-D);v.fillStyle=a.text,v.font=`600 32px ${Z}`,v.fillText(ze(v,G.trackName,E),D,C+28),v.fillStyle=a.dim,v.font=`24px ${Z}`,v.fillText(ze(v,G.artistName,E),D,C+60),v.fillStyle=ye(a.accent),v.textAlign="right",kt(v,W.genre,0,0,0,"transparent");let U=v.letterSpacing;v.font=`700 24px ${Z}`,v.letterSpacing="0.08em",v.fillText(W.genre.toUpperCase(),k+w-32,C+44),v.letterSpacing=U,v.textAlign="left",C+=b}}}},C0=(e,t,r,n)=>{let{stats:s,size:i,palette:a}=t,o=i==="story",l=s.streak??0,c=o?12:10,d=7,u=12,p=o?38:32,f=200,m=48,g=(s.dailyPlayCounts??[]).slice(-(c*d)),h=40+xt(p),b=Zt+24,x=o&&g.length>0,T=h+(x?m+f*2+28:0),y=Math.max(160,n-b-T),v=Math.floor((r-u*(c-1))/c),k=Math.floor((y-u*(d-1))/d),S=Math.max(16,Math.min(v,k)),w=c*(S+u)-u,A=d*(S+u)-u,P=b+A+h,_=!1;x&&P+m+f<=n&&(_=!0,P+=m+f);let N=!1;return _&&P+28+176<=n&&(N=!0,P+=204),{height:P,draw:async(C,I,O,W)=>{if(l===0)return;O=Wr(C,`${l}-day streak`,I,O,a)+24;let G=I+Math.floor((W-w)/2),D=Math.max(1,...g.map(pe=>pe.count));for(let pe=0;pe<c;pe++)for(let fe=0;fe<d;fe++){let Ee=pe*d+fe,$=g[Ee]?.count??0,me=Math.min(1,$/D);C.fillStyle=ye(a.accent,.08+me*.92),Xt(C,G+pe*(S+u),O+fe*(S+u),S,S,Math.min(6,S/4))}O+=A+40,C.fillStyle=a.muted,C.font=`${p}px ${Z}`;let F="Listened every day for ";C.fillText(F,I,O+p);let E=C.measureText(F).width;if(C.fillStyle=a.text,C.font=`700 ${p}px ${Z}`,C.fillText(ze(C,`${l} days.`,W-E),I+E,O+p),O+=xt(p),!_)return;O+=m;let U=g.reduce((pe,fe)=>pe+fe.count*3,0),X=g.length?Math.round(U/g.length):0,se=24,ae=(W-se)/2;Et(C,I,O,ae,f,a),Et(C,I+ae+se,O,ae,f,a),kt(C,"Daily average",I+32,O+52,24,a.dim),C.fillStyle=a.text,C.font=`800 56px ${Z}`,C.fillText(`${X} min`,I+32,O+122),C.fillStyle=a.muted,C.font=`26px ${Z}`,C.fillText(ze(C,`over the last ${g.length} days`,ae-64),I+32,O+164);let de=I+ae+se+32;if(kt(C,"Longest streak",de,O+52,24,a.dim),C.fillStyle=ye(a.accent),C.font=`800 56px ${Z}`,C.fillText(`${l} days`,de,O+122),C.fillStyle=a.muted,C.font=`26px ${Z}`,C.fillText("your best run this year",de,O+164),O+=f,!N)return;O+=28;let Ce=g[0];if(!Ce)return;let ke=g.reduce((pe,fe)=>fe.count>pe.count?fe:pe,Ce);Et(C,I,O,W,176,a),kt(C,"Best day",I+32,O+52,24,a.dim);let L=`${ke.count} ${ke.count===1?"play":"plays"}`;C.font=`800 36px ${Z}`;let q=C.measureText(L).width+24;C.fillStyle=a.text,C.font=`700 36px ${Z}`,C.fillText(ze(C,Hd(ke.date),W-64-q),I+32,O+118),C.fillStyle=ye(a.accent),C.font=`800 36px ${Z}`,C.textAlign="right",C.fillText(L,I+W-32,O+118),C.textAlign="left"}}},I0=(e,t,r,n)=>{let{stats:s,size:i,palette:a}=t,o=i==="story",l=s.topTracks[0],c=o?84:60,d=o?40:32,u=200,p=64,f=64+xt(c)+12+xt(d),m=o&&s.totalPlays>0,g=Zt+28+f+(m?p+u:0),b=Math.min(o?880:480,r,Math.max(280,n-g)),x=Zt+28+b+f,T=!1;return m&&x+p+u<=n&&(T=!0,x+=p+u),{height:x,draw:async(y,v,k,S)=>{if(!l)return;k=Wr(y,"Most-played",v,k,a)+28;let w=v+Math.floor((S-b)/2);await ri(y,l.albumArt,w,k,b,20,l.trackName),k+=b+64,y.fillStyle=a.text,y.font=`800 ${c}px ${Z}`,y.fillText(ze(y,l.trackName,S),v,k+c),k+=xt(c)+12,y.fillStyle=a.muted,y.font=`${d}px ${Z}`;let A=l.count>0?l.count===1?"1 play":`${l.count} plays`:"";if(y.fillText(ze(y,A?`${l.artistName} \xB7 ${A}`:l.artistName,S),v,k+d),k+=xt(d),!T)return;k+=p,Et(y,v,k,S,u,a);let P=S/3,_=k+56,N=Math.round(l.count/s.totalPlays*100);y.textAlign="center";let C=y.letterSpacing;y.fillStyle=a.dim,y.font=`700 22px ${Z}`,y.letterSpacing="0.08em",y.fillText("PLAYS",v+P*.5,_),y.fillText("SHARE",v+P*1.5,_),y.fillText("RANK",v+P*2.5,_),y.letterSpacing=C,y.fillStyle=ye(a.accent),y.font=`800 52px ${Z}`,y.fillText(`${l.count}`,v+P*.5,_+84),y.fillStyle=a.text,y.fillText(`${N}%`,v+P*1.5,_+84),y.fillText("#1",v+P*2.5,_+84),y.textAlign="left",y.strokeStyle=a.chunkBorder,y.lineWidth=2,y.beginPath(),y.moveTo(v+P,k+28),y.lineTo(v+P,k+u-28),y.moveTo(v+2*P,k+28),y.lineTo(v+2*P,k+u-28),y.stroke()}}},Bd=(e,t,r,n)=>{let{stats:s,size:i,palette:a,periodLabel:o,allowStreak:l,recapDayCount:c,periodDayCount:d}=t,u=i==="story",p=c!=null,f=Math.floor(s.totalDuration/36e5),m=Math.floor(s.totalDuration/6e4),g=f>=1?`${f}`:`${m}`,h=f>=1?"hours":"minutes",b=s.totalDuration>0,x=s.topGenres.filter(R=>R.count>0),T=(s.hourlyDistribution??[]).some(R=>R>0),y=p||l?s.streak??0:0,v=s.dailyPlayCounts??[],k=v.length>0?v.reduce((R,ee)=>ee.count>R.count?ee:R,v[0]):null,S=[];s.totalPlays>0&&S.push({label:"Plays",value:Ae(s.totalPlays)}),s.uniqueArtistCount>0&&S.push({label:"Artists",value:Ae(s.uniqueArtistCount)}),s.uniqueTrackCount>0&&S.push({label:"Tracks",value:Ae(s.uniqueTrackCount)}),m>0&&S.push({label:"Daily avg",value:`${Math.round(m/Math.max(1,d))} min`}),T&&S.push({label:"Peak hour",value:x0(s.peakHour)}),y>0&&S.push({label:p&&y>=(c??Number.POSITIVE_INFINITY)?"Every day":"Streak",value:`${y} days`}),k&&k.count>0&&S.push({label:"Best day",value:Hd(k.date),sub:`${Ae(k.count)} plays`});let w=3,A=u?6:3,P=S.slice(0,A),_=u?168:136,N=20,C=u?24:20,I=C+20,O=u?40:26,W=u?{tile:84,gap:18,rank:34,titlePx:30,subPx:22,countPx:24,capsPx:15,radius:9}:{tile:56,gap:13,rank:26,titlePx:21,subPx:16,countPx:18,capsPx:12,radius:7},G=u?44:30,D=u?24:18,F=u?20:14,E=u?170:100,U=u?50:34,X=Math.floor(E*.78),se=b?X+12:0,ae=u?5:3,de=Math.min(u?4:2,x.length),Ce=P.length,ke=()=>Math.min(ae,s.topTracks.length),L=()=>Math.min(ae,s.topArtists.length),q=()=>Math.ceil(Ce/w),pe=()=>Ce>0?q()*(_+N)-N:0,fe=()=>{let R=Math.max(ke(),L());return R>0?I+R*Fr(W)-W.gap:0},Ee=()=>de>0?I+de*(D+F)-F:0,$=()=>{let R=Zt+8+se;return Ce>0&&(R+=O+pe()),fe()>0&&(R+=O+fe()),Ee()>0&&(R+=O+Ee()),R};for(;$()>n&&de>0;)de--;for(;$()>n&&ae>2;)ae--;for(;$()>n&&Ce>w;)Ce-=w;let me=$(),j=(R,ee,ne,De)=>{let Xr=R.letterSpacing;R.fillStyle=a.dim,R.font=`700 ${C}px ${Z}`,R.letterSpacing="0.1em",R.fillText(ee,ne,De+C),R.letterSpacing=Xr};return{height:me,draw:async(R,ee,ne,De)=>{let Xr=p?o.trim()?`${o} \xB7 Recap`:"Monthly Recap":o.trim()?`${o} \xB7 Wrapped`:"Wrapped";if(ne=Wr(R,Xr,ee,ne,a,!0)+8,b){R.font=`900 ${E}px ${Z}`,R.fillStyle=ye(a.accent);let Oe=ne+X;R.fillText(g,ee,Oe);let Te=R.measureText(g).width;R.fillStyle=a.text,R.font=`700 ${U}px ${Z}`,R.fillText(h,ee+Te+20,Oe),ne+=se}if(Ce>0){ne+=O;let Oe=Math.floor((De-N*(w-1))/w);for(let Te=0;Te<Ce;Te++){let ut=P[Te],V=ee+Te%w*(Oe+N),le=ne+Math.floor(Te/w)*(_+N);Et(R,V,le,Oe,_,a),kt(R,ut.label,V+28,le+46,u?22:20,a.dim),R.fillStyle=a.text,R.font=`800 ${u?46:38}px ${Z}`,R.fillText(ze(R,ut.value,Oe-56),V+28,le+(u?108:96)),ut.sub&&u&&(R.fillStyle=a.muted,R.font=`24px ${Z}`,R.fillText(ze(R,ut.sub,Oe-56),V+28,le+144))}ne+=pe()}let ct=ke(),er=L();if(ct>0||er>0){ne+=O;let Oe=ct>0&&er>0,Te=Oe?Math.floor((De-G)/2):De,ut=ee+Te+G;ct>0&&j(R,"TOP TRACKS",ee,ne),er>0&&j(R,"TOP ARTISTS",Oe?ut:ee,ne);let V=ne+I,le=V;for(let Ge=0;Ge<ct;Ge++){let Le=s.topTracks[Ge];await ro(R,t,W,ee,le,Te,{rank:Ge+1,art:Le.albumArt,seed:Le.trackName,title:Le.trackName,subtitle:Le.artistName,rightValue:Le.count>0?`${Le.count}`:void 0}),le+=Fr(W)}let Je=V;for(let Ge=0;Ge<er;Ge++){let Le=s.topArtists[Ge];await ro(R,t,W,Oe?ut:ee,Je,Te,{rank:Ge+1,art:Le.imageUrl,seed:Le.artistName,title:Le.artistName,subtitle:Le.count>0?`${Ae(Le.count)} ${Le.count===1?"play":"plays"}`:""}),Je+=Fr(W)}ne=V+Math.max(ct,er)*Fr(W)-W.gap}if(de>0){ne+=O,j(R,"TOP GENRES",ee,ne),ne+=I;let Oe=x.slice(0,de),Te=x.reduce((le,Je)=>le+Je.count,0),ut=Oe[0]?.count||1;R.font=`600 ${D+2}px ${Z}`;let V=0;for(let le of Oe)V=Math.max(V,R.measureText(le.genre).width);V=Math.min(V+6,Math.floor(De*.32));for(let le=0;le<Oe.length;le++){let Je=Oe[le],Ge=ne+le*(D+F),Le=Ge+D/2;R.textBaseline="middle",R.fillStyle=a.text,R.font=`600 ${D+2}px ${Z}`,R.fillText(ze(R,Je.genre,V),ee,Le);let hr=ee+V+20,Ve=Math.max(48,De-76-(hr-ee)-16);R.fillStyle=a.barTrack,Xt(R,hr,Ge,Ve,D,D/2),R.fillStyle=ye(a.accent,1-le*.15),Xt(R,hr,Ge,Math.max(D,Ve*(Je.count/ut)),D,D/2),R.fillStyle=a.dim,R.font=`600 ${D}px ${Z}`,R.textAlign="right",R.fillText(`${Math.round(Je.count/Te*100)}%`,ee+De,Le),R.textAlign="left",R.textBaseline="alphabetic"}ne+=de*(D+F)-F}}}},N0={top5:P0,time:A0,genre:R0,streak:C0,throwback:I0,wrapped:Bd,recap:Bd};async function zd(e,t,r,n,s,i){let a=y0[r],o=document.createElement("canvas");o.width=a.width,o.height=a.height;let l=o.getContext("2d");if(!l)throw new Error("Canvas 2D context unavailable");await Ld(e);let c=b0(!!i?.followTheme),d=i?.activeProviderId??"local",u=i?.hasStreakData??d==="local",p=!u&&t==="streak"?"top5":t,f=[];i?.showUsername!==!1&&s&&f.push(`@${s}`),i?.showPeriodLabel!==!1&&f.push(n);let m=f.join(" \xB7 ");k0(l,a.width,a.height,c),E0(l,a.width,m,c);let g={stats:e,size:r,palette:c,periodLabel:n,periodDayCount:Math.max(1,i?.periodDayCount??e.listeningDays??28),allowStreak:u,recapDayCount:p==="recap"?Math.max(1,i?.periodDayCount??e.listeningDays??28):void 0},h=a.width-Br*2,b=a.height-Ud-v0,x=N0[p](l,g,h,b),T=Math.max(0,b-x.height),v=Ud+Math.floor(T*(p==="wrapped"||p==="recap"?.08:.3));return await x.draw(l,Br,v,h),T0(l,a.height,m,c),o}async function Pn(e,t,r,n,s,i){let a=await zd(e,t,r,n,s,i);return new Promise((o,l)=>{a.toBlob(c=>{if(!c){l(new Error("PNG blob creation failed"));return}o(c)},"image/png")})}async function io(e,t,r,n,s,i){let a=await Pn(e,t,r,n,s,i),o=URL.createObjectURL(a),l=document.createElement("a");l.href=o,l.download="listening-stats-share.png",l.click(),URL.revokeObjectURL(o)}async function ao(e,t,r,n,s,i){let a=await Pn(e,t,r,n,s,i);if(!navigator.clipboard?.write)throw new Error("Clipboard API not available");await navigator.clipboard.write([new ClipboardItem({"image/png":a})])}var{useState:Tt,useCallback:oo,useEffect:lo,useMemo:_0}=Spicetify.React,D0=[{id:"square",label:"Square"},{id:"story",label:"Story"}];function O0(){try{let e=localStorage.getItem(M.STATSFM_CONFIG);if(e){let r=JSON.parse(e)?.username;if(r&&String(r).trim())return String(r).trim()}}catch{}return""}function co({stats:e,activePeriod:t,onClose:r,initialVariant:n,variantIds:s,title:i}){let[a,o]=Tt(n??"top5"),[l,c]=Tt("square"),[d,u]=Tt(!1),[p,f]=Tt(!0),[m,g]=Tt(!0),[h,b]=Tt(!1),[x,T]=Tt(""),[y,v]=Tt(!1),[k,S]=Tt(null),[w,A]=Tt(O0);lo(()=>{if(w)return;let E=!1;return Spicetify.Platform.UserAPI?.getUser?.().then(U=>{let X=(U?.displayName??U?.username??"").trim();!E&&X&&A(X)}).catch(()=>{}),()=>{E=!0}},[w]);let P=t.label,_=t.getBoundaries(),N=Math.max(1,Math.round((_.end-_.start)/864e5)),C=Q.getActiveId()??"local",I=Q.getActive()?.getProviderInfo().capabilities,O=_0(()=>no(e,I,s),[I,e,s]);lo(()=>{O.some(E=>E.id===a)||o(O[0]?.id??"top5")},[O,a]),lo(()=>{let E=!1,U="";return(async()=>{v(!0),S(null);try{let se=await Pn(e,a,l,P,w,{followTheme:d,showUsername:p,showPeriodLabel:m,activeProviderId:C,periodDayCount:N,hasStreakData:I?.hasStreakData??!1});if(E)return;U=URL.createObjectURL(se),T(U)}catch{E||S("Could not render preview")}finally{E||v(!1)}})(),()=>{E=!0,U&&URL.revokeObjectURL(U)}},[e,a,l,P,w,d,p,m,C,N]);let W=E=>o(E),G=oo(E=>{E.target.classList.contains("share-overlay")&&r()},[r]),D=oo(async()=>{if(!h){b(!0);try{await io(e,a,l,P,w,{followTheme:d,showUsername:p,showPeriodLabel:m,activeProviderId:C,periodDayCount:N,hasStreakData:I?.hasStreakData??!1}),Spicetify.showNotification("Share card downloaded!")}catch{Spicetify.showNotification("Could not export share card.",!0)}finally{b(!1)}}},[e,a,l,P,w,d,p,m,C,N,h]),F=oo(async()=>{if(!h){b(!0);try{await ao(e,a,l,P,w,{followTheme:d,showUsername:p,showPeriodLabel:m,activeProviderId:C,periodDayCount:N,hasStreakData:I?.hasStreakData??!1}),Spicetify.showNotification("Copied to clipboard!")}catch{Spicetify.showNotification("Could not copy share card.",!0)}finally{b(!1)}}},[e,a,l,P,w,d,p,m,C,N,h]);return Spicetify.ReactDOM.createPortal(Spicetify.React.createElement("div",{className:"share-overlay",onClick:G},Spicetify.React.createElement("div",{className:"share-modal"},Spicetify.React.createElement("div",{className:"share-modal-header"},Spicetify.React.createElement("h2",{className:"share-modal-title"},i??"Share Cards"),Spicetify.React.createElement("button",{type:"button",className:"share-modal-close stats-header-icon-btn",onClick:r,"aria-label":"Close share modal",dangerouslySetInnerHTML:{__html:Mr}})),O.length>1&&Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Card type"),Spicetify.React.createElement("div",{className:"share-tabs-row"},O.map(E=>Spicetify.React.createElement("button",{type:"button",key:E.id,className:`share-variant-tab${a===E.id?" active":""}`,onClick:()=>W(E.id)},E.label)))),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Layout"),Spicetify.React.createElement("div",{className:"share-tabs-row"},D0.map(E=>Spicetify.React.createElement("button",{type:"button",key:E.id,className:`share-size-tab${l===E.id?" active":""}`,onClick:()=>c(E.id)},E.label)))),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Follow theme"),Spicetify.React.createElement(St,{value:d,onSelected:u})),Spicetify.React.createElement("div",{className:"share-preview-container"},y&&Spicetify.React.createElement("div",{className:"share-preview-status"},"Rendering preview\u2026"),k&&Spicetify.React.createElement("div",{className:"share-preview-status"},k),!!x&&!y&&Spicetify.React.createElement("img",{src:x,alt:"Share card preview",className:"share-preview-image","data-testid":"share-card-preview-image"})),Spicetify.React.createElement("div",{className:"share-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-copy-btn",onClick:F,disabled:h},h?"Working\u2026":"Copy image"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-download-btn",onClick:D,disabled:h},h?"Working\u2026":"Save PNG")),Spicetify.React.createElement("div",{className:"share-control-row",style:{marginTop:8}},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show @username"),Spicetify.React.createElement(St,{value:p,onSelected:f})),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("span",{style:{fontSize:12,color:"var(--spice-text)"}},"Show period label"),Spicetify.React.createElement(St,{value:m,onSelected:g})))),document.body)}je();function Ne({title:e,children:t}){return Spicetify.React.createElement("section",{className:"settings-group"},Spicetify.React.createElement("h3",{className:"section-header"},e),t)}function ue({label:e,sublabel:t,stacked:r,testId:n,children:s}){return Spicetify.React.createElement("div",{className:"settings-row","data-testid":n,style:r?{flexDirection:"column",alignItems:"stretch",gap:"8px"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},e),t&&Spicetify.React.createElement("div",{className:"settings-sublabel"},t)),s)}function Ke({value:e,onChange:t}){return St?Spicetify.React.createElement(St,{value:e,onSelected:t}):Spicetify.React.createElement("input",{type:"checkbox",checked:e,onChange:r=>t(r.currentTarget.checked)})}function Ot({options:e,value:t,onChange:r,testId:n}){return Spicetify.React.createElement("div",{className:"option-group",role:"group","data-testid":n},e.map(s=>Spicetify.React.createElement("button",{key:String(s.value),type:"button",className:`option-group-btn${s.value===t?" active":""}`,"aria-pressed":s.value===t,onClick:()=>r(s.value)},s.label)))}var{useCallback:L0}=Spicetify.React;function Kd({version:e,onOpenUpdates:t,onPrefsChanged:r,onReceiveBetaUpdatesChanged:n,onRestartTour:s}){let i=Re(),a=L0(o=>{ie("receiveBetaUpdates",o),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED)),r(),n?.()},[r,n]);return Spicetify.React.createElement("div",{className:"settings-about"},Spicetify.React.createElement(Ne,{title:"Updates"},Spicetify.React.createElement(ue,{label:"Listening Stats",sublabel:`Version ${e}`},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:t},"Check for updates\u2026")),Spicetify.React.createElement(ue,{label:"Prereleases",sublabel:"Include beta versions in update checks"},Spicetify.React.createElement(Ke,{value:i.receiveBetaUpdates,onChange:a}))),Spicetify.React.createElement(Ne,{title:"Help"},s&&Spicetify.React.createElement(ue,{label:"Guided tour"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"restart-tour",onClick:s},"Restart")),Spicetify.React.createElement(ue,{label:"Source"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:_t,target:"_blank",rel:"noopener noreferrer"},_t.replace("https://","")))))}je();yt();async function uo(e){let r=new TextEncoder().encode(e.toLowerCase()),n=await globalThis.crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("").slice(0,12)}async function An(e,t,r){let[n,s,i]=await Promise.all([uo(e+t+r),uo(t),uo(t+r)]);return{trackUri:`listening-stats:track:${n}`,artistUri:`listening-stats:artist:${s}`,albumUri:`listening-stats:album:${i}`}}ws();var M0=2e3,$0=1e3;function U0(e){return new Promise(t=>setTimeout(t,e))}async function Gd(e){let r=(await ge.playEvents.where("trackUri").startsWith("listening-stats:").toArray()).filter(i=>i.resolvedAt===null||i.resolvedAt===void 0);if(r.length===0)return;let n=[...new Set(r.map(i=>i.trackUri))],s=new Map;for(let i of r)s.has(i.trackUri)||s.set(i.trackUri,{trackName:i.trackName,artistName:i.artistName});for(let i of n){if(Vt.isOpen())break;let a=s.get(i);if(!a)continue;let{trackName:o,artistName:l}=a,d=`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${o} artist:${l}`)}&type=track&limit=5`,u=await bt(d);if(u.ok){let f=u.data.tracks.items.find(m=>m.name.toLowerCase()===o.toLowerCase()&&m.artists[0]?.name.toLowerCase()===l.toLowerCase());f?await ge.playEvents.where("trackUri").equals(i).modify({trackUri:`spotify:track:${f.id}`,artistUri:`spotify:artist:${f.artists[0].id}`,albumUri:`spotify:album:${f.album.id}`,albumArt:f.album.images[0]?.url??null,resolvedAt:Date.now()}):await ge.playEvents.where("trackUri").equals(i).modify({resolvedAt:0})}else{if(u.error.type==="rate_limited"||u.error.type==="circuit_open")break;await ge.playEvents.where("trackUri").equals(i).modify({resolvedAt:0})}await U0(e?.delayMs??M0+Math.random()*$0)}}var Vd="Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At",F0=`${Vd},Type,Track URI,Artist URI,Album URI,Album Art`,gr=10,B0=new Set(["lastfm.freetls.fastly.net","cdn.stats.fm"]);function jd(e){if(e.startsWith("spotify:image:"))return!0;try{let t=new URL(e);return t.protocol!=="https:"?!1:t.hostname.endsWith(".scdn.co")||B0.has(t.hostname)}catch{return!1}}function W0(e){let t=[],r="",n=!1;for(let s=0;s<e.length;s++){let i=e[s];i==='"'?n&&e[s+1]==='"'?(r+='"',s++):n=!n:i===","&&!n?(t.push(r),r=""):r+=i}return t.push(r),t}async function qd(e){let t=e.split(`
`).map(l=>l.trim()).filter(l=>l.length>0);if(t.length===0)return{events:[],errors:0,errorDetails:[]};let r=t[0],n=r===F0;if(!n&&r!==Vd)throw r.startsWith("Period,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Export play history as CSV" to create an importable backup.'):r.startsWith("Rank,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Export play history as CSV" to create an importable backup.'):new Error(`Import failed: unrecognized CSV format (expected v1 export). Got: "${r.slice(0,60)}"`);let s=[],i=0,a=[],o=t.slice(1);for(let l=0;l<o.length;l++){let c=l+2,d=o[l],u=W0(d);if(u.length<7){i++,a.length<gr&&a.push(`Row ${c}: expected 7 fields, got ${u.length}`);continue}let[p,f,m,g,h,b,x]=u,T=parseInt(g,10),y=parseInt(h,10),v=new Date(b).getTime(),k=new Date(x).getTime();if(Number.isNaN(T)||Number.isNaN(y)){i++,a.length<gr&&a.push(`Row ${c}: invalid numeric field (duration or played ms)`);continue}if(!Number.isFinite(v)||Number.isNaN(v)||v<=0){i++,a.length<gr&&a.push(`Row ${c}: invalid timestamp (Started At: "${b}")`);continue}if(!Number.isFinite(k)||Number.isNaN(k)||k<=0){i++,a.length<gr&&a.push(`Row ${c}: invalid timestamp (Ended At: "${x}")`);continue}let S=n?u[8]:"",w=S?{trackUri:S,artistUri:u[9]??"",albumUri:u[10]??""}:await An(p,f,m),A={trackName:p,artistName:f,albumName:m,durationMs:T,playedMs:y,startedAt:v,endedAt:k,type:n&&u[7]==="skip"?"skip":"play",...w},P=n?u[11]:"";P&&jd(P)&&(A.albumArt=P),s.push(A)}return{events:s,errors:i,errorDetails:a}}async function Yd(e){let t;try{t=JSON.parse(e)}catch{throw new Error("Import failed: file is not valid JSON")}if(!Array.isArray(t))throw typeof t=="object"&&t!==null&&"topTracks"in t?new Error("Import failed: JSON must be a raw play events array, not a stats export"):new Error("Import failed: JSON must be a raw play events array, not a stats export");let r=[],n=0,s=[];for(let i=0;i<t.length;i++){let a=t[i],o=i+1;if(typeof a.trackName!="string"||typeof a.artistName!="string"||typeof a.startedAt!="number"||typeof a.endedAt!="number"||typeof a.durationMs!="number"||typeof a.playedMs!="number"){n++,s.length<gr&&s.push(`Row ${o}: missing required field(s)`);continue}if(!Number.isFinite(a.startedAt)||a.startedAt<=0||!Number.isFinite(a.endedAt)||a.endedAt<=0||!Number.isFinite(a.durationMs)||a.durationMs<0||!Number.isFinite(a.playedMs)||a.playedMs<0){n++,s.length<gr&&s.push(`Row ${o}: invalid numeric field (timestamp or duration)`);continue}let l=a.trackName,c=a.artistName,d=typeof a.albumName=="string"?a.albumName:"",u=a.durationMs,p=a.playedMs,f=a.startedAt,m=a.endedAt,g,h,b;if(typeof a.trackUri=="string"&&a.trackUri)g=a.trackUri,h=typeof a.artistUri=="string"?a.artistUri:"",b=typeof a.albumUri=="string"?a.albumUri:"";else{let T=await An(l,c,d);g=T.trackUri,h=T.artistUri,b=T.albumUri}let x={trackName:l,artistName:c,albumName:d,durationMs:u,playedMs:p,startedAt:f,endedAt:m,trackUri:g,artistUri:h,albumUri:b,type:a.type==="skip"?"skip":"play"};typeof a.albumArt=="string"&&jd(a.albumArt)&&(x.albumArt=a.albumArt),r.push(x)}return{events:r,errors:n,errorDetails:s}}async function Xd(e){if(e.length===0)return{imported:0,skipped:0,errors:0,errorDetails:[]};let t=e.map(l=>l.startedAt),r=await ge.playEvents.where("startedAt").anyOf(t).toArray(),n=new Set(r.map(l=>`${l.startedAt}:${l.trackName}`)),s=[],i=0;for(let l of e){let c=`${l.startedAt}:${l.trackName}`;n.has(c)?i++:(s.push(l),n.add(c))}let a=0,o=[];if(s.length>0)try{await ge.playEvents.bulkAdd(s)}catch(l){if(l!==null&&typeof l=="object"&&"failures"in l&&l.failures!==null&&typeof l.failures=="object"){let c=l.failures;a=Object.keys(c).length,o.length<gr&&o.push(`bulkAdd: ${a} item(s) failed to insert`)}else throw l}return s.length-a>0&&Gd().catch(l=>{console.warn("[listening-stats] URI resolution error:",l)}),{imported:s.length-a,skipped:i,errors:a,errorDetails:o}}var H0=101010256,z0=33639248,K0=67324752;function G0(e){let t=Math.max(0,e.byteLength-22-65535);for(let r=e.byteLength-22;r>=t;r--)if(e.getUint32(r,!0)===H0)return r;throw new Error("Import failed: not a valid zip file")}function V0(e){let t=new DataView(e),r=G0(t),n=t.getUint16(r+10,!0),s=t.getUint32(r+16,!0),i=new TextDecoder,a=[],o=s;for(let l=0;l<n;l++){if(t.getUint32(o,!0)!==z0)throw new Error("Import failed: corrupt zip central directory");let c=t.getUint16(o+10,!0),d=t.getUint32(o+20,!0),u=t.getUint32(o+24,!0),p=t.getUint16(o+28,!0),f=t.getUint16(o+30,!0),m=t.getUint16(o+32,!0),g=t.getUint32(o+42,!0);if(d===4294967295||u===4294967295||g===4294967295)throw new Error("Import failed: zip64 archives are not supported (entry over 4 GB)");a.push({name:i.decode(new Uint8Array(e,o+46,p)),compressionMethod:c,compressedSize:d,uncompressedSize:u,localHeaderOffset:g}),o+=46+p+f+m}return a}async function j0(e){let t=new ReadableStream({start(s){s.enqueue(e),s.close()}}),r=new DecompressionStream("deflate-raw"),n=t.pipeThrough(r);return new Uint8Array(await new Response(n).arrayBuffer())}async function q0(e,t){let r=new DataView(e),n=t.localHeaderOffset;if(r.getUint32(n,!0)!==K0)throw new Error("Import failed: corrupt zip local header");let s=r.getUint16(n+26,!0),i=r.getUint16(n+28,!0),a=n+30+s+i,o=new Uint8Array(e,a,t.compressedSize),l;if(t.compressionMethod===0)l=o;else if(t.compressionMethod===8)l=await j0(o);else throw new Error(`Import failed: unsupported zip compression method ${t.compressionMethod}`);return new TextDecoder("utf-8").decode(l)}var Y0=/(^|\/)(Streaming_History_Audio[^/]*|endsong(_\d+)?)\.json$/i,X0=/(^|\/)StreamingHistory(_music)?_?\d*\.json$/i,Z0=3e4,ni=10;async function J0(e,t,r){for(let n of e){if(typeof n!="object"||n===null){r.errors++,r.errorDetails.length<ni&&r.errorDetails.push(`${t}: non-object record`);continue}let s=n,i=s.master_metadata_track_name;if(typeof i!="string"||i.length===0||s.spotify_episode_uri||s.episode_name){r.ignored++;continue}let a=typeof s.ms_played=="number"&&Number.isFinite(s.ms_played)?s.ms_played:-1;if(a<=0){r.ignored++;continue}let o=typeof s.ts=="string"?Date.parse(s.ts):Number.NaN;if(!Number.isFinite(o)||o<=0){r.errors++,r.errorDetails.length<ni&&r.errorDetails.push(`${t}: invalid "ts" value ${JSON.stringify(s.ts).slice(0,40)}`);continue}let l=o-a,c=typeof s.master_metadata_album_artist_name=="string"?s.master_metadata_album_artist_name:"",d=typeof s.master_metadata_album_album_name=="string"?s.master_metadata_album_album_name:"",u=await An(i,c,d),p=typeof s.spotify_track_uri=="string"&&s.spotify_track_uri.startsWith("spotify:track:")?s.spotify_track_uri:u.trackUri;r.events.push({trackName:i,artistName:c,albumName:d,durationMs:a,playedMs:a,startedAt:l,endedAt:l+a,trackUri:p,artistUri:u.artistUri,albumUri:u.albumUri,type:a>=Z0?"play":"skip"})}}async function Zd(e){let t=V0(e),r=t.filter(a=>Y0.test(a.name));if(r.length===0)throw t.some(a=>X0.test(a.name))?new Error('Import failed: this is the "Account data" export, which only covers the last year. Request "Extended streaming history" instead at spotify.com/account/privacy/'):new Error("Import failed: no streaming history files found in this zip");let n={events:[],errors:0,errorDetails:[],filesRead:0,ignored:0};for(let a of r){let o=await q0(e,a),l;try{l=JSON.parse(o)}catch{n.errors++,n.errorDetails.length<ni&&n.errorDetails.push(`${a.name}: not valid JSON`);continue}if(!Array.isArray(l)){n.errors++,n.errorDetails.length<ni&&n.errorDetails.push(`${a.name}: expected a JSON array`);continue}n.filesRead++,await J0(l,a.name,n)}let s=new Set,i=[];for(let a of n.events){let o=`${a.startedAt}:${a.trackName}`;s.has(o)||(s.add(o),i.push(a))}return n.events=i,n}var{useState:Rn,useRef:Q0}=Spicetify.React;function Jd({onRefresh:e}){let[t,r]=Rn(!1),[n,s]=Rn("idle"),[i,a]=Rn({current:0,total:0}),[o,l]=Rn(null),[c,d]=Rn(null),u=Q0(null),p=()=>{oe.invalidate(),e(),Spicetify.showNotification("Stats refreshed")},f=async k=>{s("importing"),a({current:0,total:k.events.length});let S=500,w=0,A=0,P=k.errors,_=[...k.errorDetails];for(let N=0;N<k.events.length;N+=S){let C=k.events.slice(N,N+S),I=await Xd(C);w+=I.imported,A+=I.skipped,P+=I.errors,_=_.concat(I.errorDetails),a({current:Math.min(N+S,k.events.length),total:k.events.length}),await new Promise(O=>setTimeout(O,0))}oe.invalidate(),window.dispatchEvent(new CustomEvent(H.PLAY_RECORDED)),l({imported:w,skipped:A,errors:P,errorDetails:_.slice(0,10)}),s("complete")},m=async k=>{let S=k.target.files?.[0];if(!S)return;u.current&&(u.current.value="");let w=S.name.endsWith(".csv"),A=S.name.endsWith(".json"),P=S.name.endsWith(".zip");if(!w&&!A&&!P){Spicetify.showNotification("Unsupported file type. Use .csv, .json or .zip.",!0);return}let _=100*1024*1024;if(S.size>_){Spicetify.showNotification("Import failed: file larger than 100 MB",!0);return}try{if(P){s("parsing");let I=await Zd(await S.arrayBuffer());if(I.events.length===0){Spicetify.showNotification("Import failed: no music plays found in this zip",!0),s("idle");return}d(I),s("confirm-zip");return}s("parsing");let N=await S.text(),C=w?await qd(N):await Yd(N);if(C.events.length===0&&C.errors===0){Spicetify.showNotification("Import failed: file contains no events",!0),s("idle");return}await f(C)}catch(N){let C=N instanceof Error?N.message:"Unknown import error";Spicetify.showNotification(C,!0),s("idle"),console.error("[DataTab] Import error:",N)}},g=async k=>{if(!c)return;let S=c;d(null);try{k&&await ge.playEvents.clear(),await f(S)}catch(w){let A=w instanceof Error?w.message:"Unknown import error";Spicetify.showNotification(A,!0),s("idle"),console.error("[DataTab] Zip import error:",w)}},h=()=>{s("idle"),l(null)},b=async()=>{try{let k=await ge.playEvents.toArray();if(k.length===0){Spicetify.showNotification("No local play history to export",!0);return}let S=k.map(({id:w,...A})=>A);Qa(JSON.stringify(S),"listening-stats-backup.json","application/json")}catch(k){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export JSON error:",k)}},x=async()=>{try{let k=await ge.playEvents.toArray();if(k.length===0){Spicetify.showNotification("No local play history to export",!0);return}let S=P=>`"${P.replace(/"/g,'""').replace(/[\r\n]+/g," ")}"`,w=`Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At,Type,Track URI,Artist URI,Album URI,Album Art
`,A=k.map(P=>[S(P.trackName),S(P.artistName),S(P.albumName),P.durationMs,P.playedMs,new Date(P.startedAt).toISOString(),new Date(P.endedAt).toISOString(),P.type,S(P.trackUri),S(P.artistUri),S(P.albumUri),S(P.albumArt??"")].join(",")).join(`
`);Qa(w+A,"listening-stats-backup.csv","text/csv")}catch(k){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export CSV error:",k)}},T=async()=>{try{let k={trackUri:"spotify:track:test",trackName:"Test Track",artistName:"Test Artist",artistUri:"spotify:artist:test",albumName:"Test Album",albumUri:"spotify:album:test",durationMs:3e4,playedMs:3e4,startedAt:Date.now(),endedAt:Date.now(),type:"play"},S=await ge.playEvents.add(k);await ge.playEvents.delete(S),Spicetify.showNotification("Write test passed")}catch(k){Spicetify.showNotification("Write test failed. Check console.",!0),console.error("[DataTab] Test write error:",k)}},y=k=>{for(let S=k.length-1;S>=0;S--){let w=k.key(S);w?.startsWith("listening-stats:")&&k.removeItem(w)}},v=async()=>{try{await ge.delete(),oe.invalidate(),indexedDB.deleteDatabase("listening-stats-lastfm-cache"),await Ol(),y(localStorage),y(sessionStorage),Spicetify.showNotification("All data wiped"),r(!1),window.location.reload()}catch(k){Spicetify.showNotification("Wipe failed. Check console.",!0),console.error("[DataTab] Wipe error:",k)}};return Spicetify.React.createElement("div",null,Spicetify.React.createElement(Ne,{title:"Library"},Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("input",{ref:u,type:"file",accept:".csv,.json,.zip",style:{display:"none"},onChange:m,"aria-label":"Import play history file"}),n==="idle"&&Spicetify.React.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Import play history"),Spicetify.React.createElement("div",{className:"settings-sublabel"},'A .json backup from this app, .csv / .json from a v1 export, or the Spotify "Extended streaming history" .zip from spotify.com/account/privacy')),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>u.current?.click()},"Import")),n==="parsing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Reading file..."),Spicetify.React.createElement("progress",{className:"import-progress-bar"})),n==="confirm-zip"&&c&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("p",{style:{margin:0,fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)"}},"Found ",Spicetify.React.createElement("strong",null,c.events.length.toLocaleString())," music plays in ",c.filesRead," ","history file",c.filesRead===1?"":"s",c.ignored>0?` (${c.ignored.toLocaleString()} podcast/zero-length rows ignored)`:"",". This export contains everything Spotify ever recorded for your account - including plays this app already tracked."),Spicetify.React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}},Spicetify.React.createElement("div",{className:"settings-sublabel",style:{flex:1}},Spicetify.React.createElement("strong",null,"Replace (recommended):")," deletes your existing local play history first, then imports the export. Guarantees no duplicate plays."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>g(!0)},"Replace")),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}},Spicetify.React.createElement("div",{className:"settings-sublabel",style:{flex:1}},Spicetify.React.createElement("strong",null,"Merge:")," keeps your current history and skips exact duplicates (same start time + track). Plays tracked live by this app have slightly different timestamps, so some may appear twice. Use this for the 2nd+ zip of a multi-zip export."),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>g(!1)},"Merge")),Spicetify.React.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>{d(null),s("idle")}},"Cancel")))),n==="importing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Importing... ",i.current," / ",i.total),Spicetify.React.createElement("progress",{className:"import-progress-bar",value:i.current,max:i.total})),n==="complete"&&o&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--success"},o.imported),Spicetify.React.createElement("span",{className:"import-result-label"},"imported")),Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--neutral"},o.skipped),Spicetify.React.createElement("span",{className:"import-result-label"},"skipped as duplicates")),o.errors>0&&Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--error"},o.errors),Spicetify.React.createElement("span",{className:"import-result-label"},"errors")),o.errors>0&&o.errorDetails.length>0&&Spicetify.React.createElement("div",{className:"import-result-errors"},o.errorDetails.slice(0,3).map((k,S)=>Spicetify.React.createElement("div",{key:S,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}},k.length>80?`${k.slice(0,80)}\u2026`:k))),Spicetify.React.createElement("div",{className:"import-result-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:h},"Dismiss Results")))),Spicetify.React.createElement(ue,{label:"Export play history as JSON"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:b},"Export")),Spicetify.React.createElement(ue,{label:"Export play history as CSV"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:x},"Export"))),Spicetify.React.createElement(Ne,{title:"Maintenance"},Spicetify.React.createElement(ue,{label:"Refresh statistics cache"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:p},"Refresh")),Spicetify.React.createElement(ue,{label:"Test database write"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:T},"Test"))),Spicetify.React.createElement(Ne,{title:"Danger zone"},t?Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)",margin:0}},"This permanently deletes all play history and cannot be undone. Are you sure?"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:v},"Delete Everything"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>r(!1)},"Keep My Data"))):Spicetify.React.createElement(ue,{label:"Wipe all data",sublabel:"Deletes all play history permanently"},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:()=>r(!0)},"Wipe"))))}je();var{useState:ew,useRef:Cn,useEffect:Qd,useCallback:Lt}=Spicetify.React,tw=8;function In(e){let{order:t,onReorder:r}=e,n=e.orientation??"vertical",[s,i]=ew({isDragging:!1,activeId:null,dropSlotIndex:null}),a=Cn(null),o=Cn(0),l=Cn(0),c=Cn(new Map),d=Cn(t);Qd(()=>{d.current=t},[t]);let u=Lt((y,v)=>{v?c.current.set(y,v):c.current.delete(y)},[]),p=Lt((y,v)=>{let k=d.current;if(n==="grid"){for(let S=0;S<k.length;S++){let w=c.current.get(k[S]);if(!w)continue;let A=w.getBoundingClientRect();if(y>=A.left&&y<=A.right&&v>=A.top&&v<=A.bottom){let P=(A.left+A.right)/2;return y<P?S:S+1}}return k.length-1}for(let S=0;S<k.length;S++){let w=c.current.get(k[S]);if(!w)continue;let A=w.getBoundingClientRect();if(n==="horizontal"){let P=(A.left+A.right)/2;if(y<P)return S}else{let P=(A.top+A.bottom)/2;if(v<P)return S}}return k.length-1},[n]),f=Lt(()=>{a.current=null,o.current=0,l.current=0,i({isDragging:!1,activeId:null,dropSlotIndex:null})},[]),m=Lt(y=>{if(!a.current)return;let v=y.clientX-a.current.x,k=y.clientY-a.current.y;o.current=v,l.current=k,i(S=>{let w=Math.hypot(v,k);return S.isDragging?{...S,dropSlotIndex:p(y.clientX,y.clientY)}:w<tw?S:{isDragging:!0,activeId:S.activeId,dropSlotIndex:p(y.clientX,y.clientY)}})},[p]),g=Lt(()=>{i(y=>{if(y.isDragging&&y.activeId&&y.dropSlotIndex!=null){let v=d.current,k=v.indexOf(y.activeId);if(k>=0&&k!==y.dropSlotIndex){let S=[...v],[w]=S.splice(k,1);S.splice(y.dropSlotIndex,0,w),r(S)}}return{isDragging:!1,activeId:null,dropSlotIndex:null}}),a.current=null,o.current=0,l.current=0},[r]),h=Lt(()=>f(),[f]),b=Lt(y=>{y.key==="Escape"&&f()},[f]);Qd(()=>(window.addEventListener("pointermove",m),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",h),window.addEventListener("keydown",b),()=>{window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",h),window.removeEventListener("keydown",b)}),[m,g,h,b]);let x=Lt(y=>v=>{d.current.includes(y)&&(a.current={x:v.clientX,y:v.clientY},o.current=0,l.current=0,i({isDragging:!1,activeId:y,dropSlotIndex:null}))},[]),T=Lt(y=>{if(!s.isDragging||s.activeId!==y)return;let v;return n==="horizontal"?v=`translate3d(${o.current}px, 0, 0)`:n==="grid"?v=`translate3d(${o.current}px, ${l.current}px, 0)`:v=`translate3d(0, ${l.current}px, 0)`,{transform:v,opacity:.4}},[s.isDragging,s.activeId,n]);return{dragState:s,onItemPointerDown:x,registerItem:u,getItemStyle:T}}var{React:rP}=Spicetify;function ep({id:e,label:t,dragHandleProps:r,style:n,children:s}){return Spicetify.React.createElement("div",{className:"sortable-row","data-row-id":e,style:n},Spicetify.React.createElement("button",{type:"button",className:"settings-drag-handle","aria-label":`Drag ${t}`,onPointerDown:i=>r.onPointerDown(i.nativeEvent),dangerouslySetInnerHTML:{__html:hd}}),Spicetify.React.createElement("div",{className:"sortable-row-label"},t),Spicetify.React.createElement("div",{className:"sortable-row-toggle"},s))}var{React:sP}=Spicetify;function tp({id:e,label:t,tileDragProps:r,style:n,children:s}){return Spicetify.React.createElement("div",{className:"sortable-tile","data-tile-id":e,style:n,onPointerDown:a=>r.onPointerDown(a.nativeEvent)},Spicetify.React.createElement("div",{className:"sortable-tile-label"},t),Spicetify.React.createElement("div",{className:"sortable-tile-toggle",onPointerDown:a=>a.stopPropagation()},s))}var{useState:po,useRef:rw,useCallback:Nn,useEffect:nw}=Spicetify.React,sw={overview:"Overview","top-genres":"Top Genres","top-lists":"Top Lists",activity:"Activity",consistency:"Consistency","recently-played":"Recently Played"},iw=[{value:3,label:"3"},{value:5,label:"5"},{value:10,label:"10"}],aw=[{value:"pill",label:"Pill"},{value:"bubble",label:"Bubble"},{value:"minimal",label:"Minimal"},{value:"off",label:"Off"}];function rp({onPrefsChanged:e,announcementDismissKey:t=null}){let[r,n]=po(()=>Re()),[s,i]=po(null),a=rw(new Map),o=Nn(()=>{e(),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED))},[e]),l=E=>{ie("itemsPerSection",E),n({...r,itemsPerSection:E}),o()},c=E=>{ie("playCountVariant",E),E==="off"&&ie("playCountShowPeriodStreams",!1),n({...r,playCountVariant:E,...E==="off"?{playCountShowPeriodStreams:!1}:{}}),o()},d=E=>{ie("playCountShowPeriodStreams",E),n({...r,playCountShowPeriodStreams:E}),o()},u=E=>{ie("use24HourTime",E),n({...r,use24HourTime:E}),o()},p=E=>{ie("heatmapShrink",E),n({...r,heatmapShrink:E}),o()},f=E=>{E?(ie("showAnnouncementBanner",!0),ie("announcementBannerHiddenForDismissKey","")):(ie("showAnnouncementBanner",!1),ie("announcementBannerHiddenForDismissKey",t??"")),n(Re()),o()},m=()=>{i({hiddenSections:[...r.hiddenSections],sectionOrder:[...r.sectionOrder],columnOrder:[...r.columnOrder],overviewOrder:{local:[...r.overviewOrder.local],statsfm:[...r.overviewOrder.statsfm]}});let E=[...En],U=[...Gs],X={local:[...mr.local],statsfm:[...mr.statsfm]};ie("hiddenSections",[]),ie("sectionOrder",E),ie("columnOrder",U),ie("overviewOrder",X),n(se=>({...se,hiddenSections:[],sectionOrder:E,columnOrder:U,overviewOrder:X})),o()},g=()=>{s&&(ie("hiddenSections",s.hiddenSections),ie("sectionOrder",s.sectionOrder),ie("columnOrder",s.columnOrder),ie("overviewOrder",s.overviewOrder),n(E=>({...E,hiddenSections:s.hiddenSections,sectionOrder:s.sectionOrder,columnOrder:s.columnOrder,overviewOrder:s.overviewOrder})),i(null),o())},h=(E,U)=>{let X=U?r.hiddenSections.filter(se=>se!==E):[...r.hiddenSections,E];ie("hiddenSections",X),n({...r,hiddenSections:X}),o()},b=Nn(E=>{let U=r.sectionOrder.filter(se=>!E.includes(se)),X=[...E,...U];ie("sectionOrder",X),n(se=>({...se,sectionOrder:X})),o()},[r.sectionOrder,o]),[x,T]=po(()=>Q.getActiveId()==="statsfm"?"statsfm":"local"),y=Q.getActive()?.getProviderInfo().capabilities??{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"},v=new Set(En),k=new Set(Hs(y).map(E=>E.id)),S=r.sectionOrder.filter(E=>v.has(E)&&k.has(E)),w=In({order:S,onReorder:b});nw(()=>{let E=()=>{let U=Q.getActiveId();T(U==="statsfm"?"statsfm":"local")};return window.addEventListener(H.PROVIDER_CHANGED,E),()=>window.removeEventListener(H.PROVIDER_CHANGED,E)},[]);let A=r.overviewOrder[x],P=A.slice(0,4),_=A.slice(4),N=Nn(E=>{let U=[...E,...r.overviewOrder[x].slice(4)],X={...r.overviewOrder,[x]:U};ie("overviewOrder",X),n(se=>({...se,overviewOrder:X})),o()},[r.overviewOrder,x,o]),C=In({order:P,orientation:"grid",onReorder:N}),I=Nn(E=>{let U=[...r.overviewOrder[x].slice(0,4),...E],X={...r.overviewOrder,[x]:U};ie("overviewOrder",X),n(se=>({...se,overviewOrder:X})),o()},[r.overviewOrder,x,o]),O=In({order:_,orientation:"horizontal",onReorder:I}),W=Nn(E=>{ie("columnOrder",E),n(U=>({...U,columnOrder:E})),o()},[o]),G=In({order:r.columnOrder,orientation:"horizontal",onReorder:W}),D=r.hiddenSections.includes("top-lists"),F=(E,U,X,se)=>{let ae=!r.hiddenSections.includes(E),de=U[E]??E,Ce=X.dragState.isDragging&&X.dragState.dropSlotIndex!=null&&se[X.dragState.dropSlotIndex]===E&&X.dragState.activeId!==E;return Spicetify.React.createElement("div",{key:E,ref:ke=>X.registerItem(E,ke),style:Ce?{outline:"2px solid var(--spice-button-active)",outlineOffset:"-2px",borderRadius:"6px"}:void 0},Spicetify.React.createElement(tp,{id:E,label:de,tileDragProps:{onPointerDown:X.onItemPointerDown(E)},style:X.getItemStyle(E)},Spicetify.React.createElement(Ke,{value:ae,onChange:ke=>h(E,ke)})))};return Spicetify.React.createElement("div",{className:"display-tab"},Spicetify.React.createElement(Ne,{title:"Dashboard"},Spicetify.React.createElement(ue,{label:"Items per section"},Spicetify.React.createElement(Ot,{options:iw,value:r.itemsPerSection,onChange:l})),Spicetify.React.createElement(ue,{label:"24-hour time"},Spicetify.React.createElement(Ke,{value:r.use24HourTime,onChange:u})),Spicetify.React.createElement(ue,{label:"Compact heatmap",sublabel:"Fit the calendar to the card instead of scrolling"},Spicetify.React.createElement(Ke,{value:r.heatmapShrink,onChange:p})),Spicetify.React.createElement(ue,{label:"Announcement banner"},Spicetify.React.createElement(Ke,{value:r.showAnnouncementBanner,onChange:f}))),Spicetify.React.createElement(Ne,{title:"Playbar"},Spicetify.React.createElement(ue,{label:"Play count style"},Spicetify.React.createElement(Ot,{options:aw,value:r.playCountVariant,onChange:c,testId:"play-count-variant"})),r.playCountVariant!=="off"&&Spicetify.React.createElement(ue,{label:"Show new streams",sublabel:x==="statsfm"?void 0:'"New play" hint for tracks with no plays yet',testId:"play-count-extra-context"},Spicetify.React.createElement(Ke,{value:r.playCountShowPeriodStreams,onChange:d}))),Spicetify.React.createElement(Ne,{title:"Layout"},Spicetify.React.createElement(ue,{label:"Section and card arrangement"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"reset-layout",onClick:m,style:{padding:"4px 12px"}},"Reset")),s&&Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-sublabel"},"Layout reset to defaults"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"undo-reset-layout",onClick:g,style:{padding:"4px 12px"}},"Undo")),Spicetify.React.createElement("div",{style:{marginTop:"4px"},"data-drag-active":w.dragState.isDragging?"true":"false"},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Visible sections"),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":w.dragState.isDragging&&w.dragState.dropSlotIndex===0?"true":"false"}),S.map((E,U)=>{let X=!r.hiddenSections.includes(E),se=sw[E]??E;return Spicetify.React.createElement(Spicetify.React.Fragment,{key:E},Spicetify.React.createElement("div",{ref:ae=>{ae?a.current.set(E,ae):a.current.delete(E),w.registerItem(E,ae)}},Spicetify.React.createElement(ep,{id:E,label:se,dragHandleProps:{onPointerDown:w.onItemPointerDown(E)},style:w.getItemStyle(E)},Spicetify.React.createElement(Ke,{value:X,onChange:ae=>h(E,ae)}))),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":w.dragState.isDragging&&w.dragState.dropSlotIndex===U+1?"true":"false"}))})),Spicetify.React.createElement("div",{style:{marginTop:"16px"},key:x},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Overview cards"),Spicetify.React.createElement("div",{className:"overview-settings-top"},Spicetify.React.createElement("div",{className:"overview-settings-hero","data-testid":"overview-settings-hero"},Spicetify.React.createElement("div",{className:"sortable-tile-label"},"Total Time"),Spicetify.React.createElement("div",{className:"overview-settings-hero-sub"},"Fixed")),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--2x2"},P.map(E=>F(E,Tn,C,P)))),_.length>0&&Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3","data-testid":"overview-bottom-row"},_.map(E=>F(E,Tn,O,_)))),Spicetify.React.createElement("div",{"data-testid":"top-lists-columns-subsection",style:{marginTop:"16px",opacity:D?.4:1,pointerEvents:D?"none":"auto"}},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Top Lists columns"),D&&Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"4px"}},"Top Lists is hidden. Re-enable it above to manage individual columns."),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3"},r.columnOrder.map(E=>F(E,id,G,r.columnOrder))))))}Dr();be();Gt();var np=[5,10,20,30],Hr={enabled:!1,trackCount:10,providerId:"local",periodId:"this-week",isPublic:!1},ow=new Set(["today","sfm-today"]);function si(e){return(e==="statsfm"?ht:pt).filter(r=>!ow.has(r.id))}function sp(e){let t=si(e.providerId);return t.find(r=>r.id===e.periodId)??t[0]}function zr(){try{let e=localStorage.getItem(M.PLAYLIST_CONFIG);if(!e)return{...Hr};let t=JSON.parse(e);return{enabled:typeof t.enabled=="boolean"?t.enabled:Hr.enabled,trackCount:typeof t.trackCount=="number"&&t.trackCount>0?t.trackCount:Hr.trackCount,providerId:t.providerId==="statsfm"?"statsfm":"local",periodId:typeof t.periodId=="string"?t.periodId:Hr.periodId,isPublic:typeof t.isPublic=="boolean"?t.isPublic:Hr.isPublic}}catch{return{...Hr}}}function Kr(e){let t={...zr(),...e};try{localStorage.setItem(M.PLAYLIST_CONFIG,JSON.stringify(t))}catch{}return t}function Gr(){try{let e=localStorage.getItem(M.PLAYLIST_STATE);if(!e)return{playlistUri:null,lastBuiltDay:null};let t=JSON.parse(e);return{playlistUri:typeof t.playlistUri=="string"?t.playlistUri:null,lastBuiltDay:typeof t.lastBuiltDay=="string"?t.lastBuiltDay:null}}catch{return{playlistUri:null,lastBuiltDay:null}}}function ip(e){let t={...Gr(),...e};try{localStorage.setItem(M.PLAYLIST_STATE,JSON.stringify(t))}catch{}}function lw(e){return new Promise((t,r)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>r(new Error(`cover art failed to load: ${e}`)),n.src=e})}async function ap(e,t){let r=document.createElement("canvas");r.width=640,r.height=640;let n=r.getContext("2d");if(!n)throw new Error("canvas 2d context unavailable");let s=null;if(e&&(s=await lw(e).catch(()=>null)),s)n.drawImage(s,0,0,640,640);else{let o=n.createLinearGradient(0,0,640,640);o.addColorStop(0,"#1e3264"),o.addColorStop(1,"#121212"),n.fillStyle=o,n.fillRect(0,0,640,640)}let i=n.createLinearGradient(0,640*.55,0,640);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,0.85)"),n.fillStyle=i,n.fillRect(0,0,640,640),n.fillStyle="#ffffff",n.textBaseline="alphabetic",n.font="600 36px CircularSp, 'Helvetica Neue', Arial, sans-serif",n.fillText("Listening Stats",40,544);let a=64;for(n.font=`700 ${a}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;a>24&&n.measureText(t).width>560;)a-=4,n.font=`700 ${a}px CircularSp, 'Helvetica Neue', Arial, sans-serif`;return n.fillText(t,40,604),r.toDataURL("image/jpeg",.9)}var op=100;function cw(){let e=globalThis.Spicetify?.Platform;return!e?.RootlistAPI?.createPlaylist||!e?.PlaylistAPI?.add?null:{rootlist:e.RootlistAPI,playlist:e.PlaylistAPI}}async function uw(e,t){let r=Gr().playlistUri;if(r)try{return await Spicetify.Platform.PlaylistAPI.getMetadata(r),r}catch{}let n=await e.createPlaylist(t,{before:"start"}),s=typeof n=="string"?n:n?.uri;if(!s)throw new Error("createPlaylist returned no URI");return s}async function dw(e,t,r){if(typeof e.clear=="function")await e.clear(t);else for(;;){let n=await e.getContents(t,{limit:op,offset:0});if(!n.items.length||(await e.remove(t,n.items.map(({uri:s,uid:i})=>({uri:s,uid:i}))),n.items.length<op))break}await e.add(t,r,{after:"end"})}async function pw(e,t,r){if(typeof e.uploadImage!="function")return;let n=Spicetify.Platform.Session?.accessToken;if(!n)return;let s=await(await fetch(r)).blob(),i=new File([s],"cover.jpg",{type:"image/jpeg"}),a=await e.uploadImage(i),o=t.split(":").pop(),l=await fetch(`https://spclient.wg.spotify.com/playlist/v2/playlist/${o}/register-image`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({uploadToken:a})});if(!l.ok)throw new Error(`register-image failed: ${l.status}`);let c=await l.arrayBuffer(),d=[...new Uint8Array(c)].map(p=>p.toString(16).padStart(2,"0")).join(""),u=d.startsWith("0a14")?d.slice(4):d;await e.setAttributes(t,{picture:u}),typeof e.resync=="function"&&await e.resync(t)}async function lp(e,t){let r=Spicetify.Platform.PlaylistPermissionsAPI;if(typeof r?.setBasePermission=="function")try{await r.setBasePermission(e,t?"VIEWER":"BLOCKED")}catch(n){console.warn("[listening-stats] playlist visibility update failed:",n)}}async function cp(e){let t=Gr().playlistUri;t&&await lp(t,e)}var ii=null;function up(){return ii||(ii=fw().finally(()=>{ii=null})),ii}async function fw(){let e=zr();if(!e.enabled)return{status:"skipped",reason:"disabled"};let t=cw();if(!t)return{status:"error",message:"Spotify playlist APIs unavailable in this client version"};try{let r=sp(e),i=(await(e.providerId==="statsfm"?ft:yn).calculateStats(r)).topTracks.filter(l=>l.trackUri.startsWith("spotify:track:")).slice(0,e.trackCount);if(i.length===0)return{status:"skipped",reason:"no-tracks"};let a=`Listening Stats \xB7 ${r.label}`,o=await uw(t.rootlist,a);await dw(t.playlist,o,i.map(l=>l.trackUri)),await t.playlist.setAttributes(o,{name:a,description:`Your top ${i.length} tracks (${r.label.toLowerCase()}) - auto-updated daily by Listening Stats`}),await lp(o,e.isPublic);try{let l=await ap(i[0].albumArt,r.label);await pw(t.playlist,o,l)}catch(l){console.warn("[listening-stats] playlist cover update failed:",l)}return ip({playlistUri:o,lastBuiltDay:Nt(Date.now())}),{status:"built",playlistUri:o,trackCount:i.length}}catch(r){let n=r instanceof Error?r.message:String(r);return console.error("[listening-stats] playlist build failed:",r),{status:"error",message:n}}}var{useState:dp}=Spicetify.React,mw=[{value:"local",label:"Local"},{value:"statsfm",label:"stats.fm"}],gw=np.map(e=>({value:e,label:String(e)}));function hw(e){e.status==="built"?Spicetify.showNotification(`Playlist updated with your top ${e.trackCount} tracks`):e.status==="skipped"&&e.reason==="no-tracks"?Spicetify.showNotification("No tracks with Spotify links found for this period yet",!0):e.status==="error"&&Spicetify.showNotification(`Playlist update failed: ${e.message}`,!0)}function pp(){let[e,t]=dp(()=>zr()),[r,n]=dp(!1),s=async()=>{if(!r){n(!0);try{hw(await up())}finally{n(!1)}}},i=p=>{t(Kr({enabled:p})),p&&s()},a=p=>{t(Kr({trackCount:p}))},o=p=>{let f=si(p),m=zr().periodId,g=f.some(h=>h.id===m)?m:f[0].id;t(Kr({providerId:p,periodId:g}))},l=p=>{t(Kr({periodId:p}))},c=p=>{t(Kr({isPublic:p})),cp(p)},d=si(e.providerId).map(p=>({value:p.id,label:p.label})),u=Gr().playlistUri;return Spicetify.React.createElement("div",null,Spicetify.React.createElement(Ne,{title:"Auto playlist"},Spicetify.React.createElement(ue,{label:"Daily top songs playlist",sublabel:"Creates a playlist from your top tracks and refreshes it once per day",testId:"playlist-enabled"},Spicetify.React.createElement(Ke,{value:e.enabled,onChange:i})),Spicetify.React.createElement(ue,{label:"Public playlist",sublabel:"Private by default; turn on to make it visible on your profile",testId:"playlist-public"},Spicetify.React.createElement(Ke,{value:e.isPublic,onChange:c}))),Spicetify.React.createElement(Ne,{title:"Contents"},Spicetify.React.createElement(ue,{label:"Songs"},Spicetify.React.createElement(Ot,{options:gw,value:e.trackCount,onChange:a})),Spicetify.React.createElement(ue,{label:"Source",sublabel:"Last.fm can't be used: it doesn't expose Spotify track links"},Spicetify.React.createElement(Ot,{options:mw,value:e.providerId,onChange:o,testId:"playlist-provider"})),Spicetify.React.createElement(ue,{label:"Period",sublabel:'"Today" is not offered - too little history to fill a playlist',stacked:!0},Spicetify.React.createElement(Ot,{options:d,value:e.periodId,onChange:l,testId:"playlist-period"}))),Spicetify.React.createElement(Ne,{title:"Actions"},Spicetify.React.createElement(ue,{label:"Update now",sublabel:e.enabled?"Setting changes apply on the next daily refresh, or immediately with this button":"Enable the playlist above first"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",disabled:!e.enabled||r,onClick:()=>{s()},style:{padding:"4px 12px"},"data-testid":"playlist-update-now"},r?"Updating\u2026":"Update")),u&&Spicetify.React.createElement(ue,{label:"Open playlist"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>Spicetify.Platform.History.push(`/playlist/${u.split(":").pop()}`),style:{padding:"4px 12px"}},"Open"))))}ks();je();be();yt();Dr();var{useState:mt}=Spicetify.React,fp={not_found:"Username not found. Check your stats.fm customId.",private:"Profile is private. Visit stats.fm settings and set your profile to public.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function mp(){let e=localStorage.getItem(M.STATSFM_CONFIG);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function yw(){let e=localStorage.getItem(M.LASTFM_CONFIG);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function bw(e){let r=e.getAll().find(i=>i.id==="statsfm")?.capabilities.tier==="plus"?"plus":"free";return{tier:r,tierClass:r==="plus"?"tier-badge--plus":"tier-badge--free",tierLabel:r==="plus"?"Plus":"Free"}}function gp(){let[e,t]=mt(""),[r,n]=mt(()=>mp()?"connected":"idle"),[s,i]=mt(()=>mp()),[a,o]=mt(null),[l,c]=mt(!1),[d,u]=mt(null),[p,f]=mt(()=>yw()),[m,g]=mt(!1),[h,b]=mt(""),[x,T]=mt(""),[y,v]=mt(null),k=async()=>{if(!e.trim())return;n("connecting"),o(null);let D=await pr(e.trim());if(!D.valid){o(fp[D.reason]??"Connection failed. Check the console for details."),n("error");return}let F={username:e.trim(),isPlus:D.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(M.STATSFM_CONFIG,JSON.stringify(F)),await ft.init(),oe.invalidate(),Q.setActive("statsfm"),window.dispatchEvent(new CustomEvent(H.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),i(F),n("connected")},S=()=>{localStorage.removeItem(M.STATSFM_CONFIG),oe.invalidate(),Q.setActive("local"),window.dispatchEvent(new CustomEvent(H.STATSFM_DISCONNECTED)),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),n("idle"),t(""),i(null),o(null)},w=async()=>{if(!s)return;let D=s.isPlus;c(!0),u(null);let F=await pr(s.username);if(!F.valid){u(fp[F.reason]??"Validation failed. Check the console for details."),c(!1);return}let E={...s,isPlus:F.isPlus,lastValidated:Date.now()};localStorage.setItem(M.STATSFM_CONFIG,JSON.stringify(E)),await ft.init(),i(E),c(!1),window.dispatchEvent(new CustomEvent(H.STATSFM_PROFILE_REFRESHED)),D!==F.isPlus&&(oe.invalidate(),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)))},A=async()=>{let D=x.trim()||localStorage.getItem(M.LASTFM_API_KEY)||"";if(!(!D||!h.trim())){g(!0),v(null);try{let F=await Ll(D,h.trim()),E={apiKey:D,username:F.username};localStorage.setItem(M.LASTFM_CONFIG,JSON.stringify(E)),localStorage.setItem(M.LASTFM_API_KEY,D),await mn.init(),oe.invalidate(),Q.setActive("lastfm"),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),f(E),g(!1)}catch(F){v(String(F)),g(!1)}}},P=()=>{localStorage.removeItem(M.LASTFM_CONFIG),oe.invalidate(),Q.setActive("local"),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED)),f(null),b(""),T(""),v(null)},_=D=>{oe.invalidate(),Q.setActive(D),window.dispatchEvent(new CustomEvent(H.PROVIDER_CHANGED))},N=Q.getAll(),C=Q.getActiveId(),I=s!==null,O=p!==null,{tierClass:W,tierLabel:G}=bw(Q);return Spicetify.React.createElement("div",null,Spicetify.React.createElement("h3",{className:"section-header"},"Active provider"),Spicetify.React.createElement("div",{role:"radiogroup","aria-label":"Active provider"},N.map(D=>{let F=D.id==="statsfm"&&!I||D.id==="lastfm"&&!O;return Spicetify.React.createElement("div",{key:D.id,className:`provider-radio-row ${C===D.id?"active":""}`,role:"radio","aria-checked":C===D.id,"aria-label":D.name,onClick:()=>{F||C!==D.id&&_(D.id)},style:F?{opacity:.5,pointerEvents:"none"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},D.name),Spicetify.React.createElement("div",{className:"settings-sublabel"},D.description)))})),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"20px"}},"stats.fm account"),(r==="idle"||r==="connecting"||r==="error")&&Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Use your stats.fm customId, not your display name"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:e,onChange:D=>t(D.target.value),onKeyDown:D=>{D.key==="Enter"&&r!=="connecting"&&k()},placeholder:"Enter your stats.fm username",disabled:r==="connecting","aria-label":"stats.fm username",className:"settings-input"}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:k,disabled:r==="connecting","aria-busy":r==="connecting",style:r==="connecting"?{opacity:.6}:void 0},r==="connecting"?"Connecting...":"Connect Account")),r==="error"&&a&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},a)),r==="connected"&&s&&Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},s.username),Spicetify.React.createElement("span",{className:`tier-badge ${W}`},G)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Connected since ",new Date(s.connectedAt).toLocaleDateString()),Spicetify.React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"12px",alignItems:"center"}},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:w,disabled:l,"aria-busy":l,"aria-label":"Re-validate stats.fm tier status",style:l?{opacity:.6}:void 0},l?"Re-validating...":"Re-validate"),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:S,"aria-label":"Disconnect stats.fm account"},"Disconnect")),d&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},d)),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"20px"}},"Last.fm account"),p?Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},p.username)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Last.fm API key is configured and active."),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:P,style:{marginTop:"8px",alignSelf:"flex-start"}},"Disconnect")):Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Connect your Last.fm account to use it as a stats provider (also enables World Charts data)."),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:h,onChange:D=>b(D.target.value),onKeyDown:D=>{D.key==="Enter"&&!m&&A()},placeholder:"Enter your Last.fm username",disabled:m,"aria-label":"Last.fm username",className:"settings-input"}),Spicetify.React.createElement("input",{type:"text",value:x,onChange:D=>T(D.target.value),onKeyDown:D=>{D.key==="Enter"&&!m&&A()},placeholder:"Enter your Last.fm API key",disabled:m,"aria-label":"Last.fm provider API key",className:"settings-input"}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:A,disabled:m||!h.trim()||!(x.trim()||localStorage.getItem(M.LASTFM_API_KEY)),"aria-busy":m,style:m?{opacity:.6}:void 0},m?"Connecting...":"Connect Account")),y&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},y)))}be();var vw=3e4,ww=25;function hp(){try{let e=localStorage.getItem(M.PLAY_THRESHOLD);if(e!==null){let t=parseInt(e,10);if(!Number.isNaN(t)&&t>=0&&t<=6e4)return t}}catch{}return vw}function yp(e){try{let t=Math.max(0,Math.min(6e4,Math.round(e/1e3)*1e3));localStorage.setItem(M.PLAY_THRESHOLD,String(t))}catch{}}function bp(){try{let e=localStorage.getItem(M.PLAY_THRESHOLD_PERCENT);if(e!==null){let t=parseInt(e,10);if(!Number.isNaN(t)&&t>=0&&t<=100)return t}}catch{}return ww}function vp(e){try{let t=Math.max(0,Math.min(100,Math.round(e)));localStorage.setItem(M.PLAY_THRESHOLD_PERCENT,String(t))}catch{}}function wp(){try{return localStorage.getItem(M.PLAY_THRESHOLD_MODE)==="percent"?"percent":"seconds"}catch{return"seconds"}}function Sp(e){try{e==="percent"?localStorage.setItem(M.PLAY_THRESHOLD_MODE,"percent"):localStorage.removeItem(M.PLAY_THRESHOLD_MODE)}catch{}}function xp(){try{return localStorage.getItem(M.TRACKING_PAUSED)==="1"}catch{return!1}}function kp(e){try{e?localStorage.setItem(M.TRACKING_PAUSED,"1"):localStorage.removeItem(M.TRACKING_PAUSED)}catch{}}function Ep(){try{return localStorage.getItem(M.SKIP_REPEATS)==="1"}catch{return!1}}function Tp(e){try{e?localStorage.setItem(M.SKIP_REPEATS,"1"):localStorage.removeItem(M.SKIP_REPEATS)}catch{}}je();be();yt();function Pp({max:e,value:t,presets:r,onChange:n,formatValue:s}){let a=Spicetify.React.useRef(null),o=p=>{let f=a.current;if(!f)return t;let m=f.getBoundingClientRect();if(m.width<=0)return t;let g=(p-m.left)/m.width;return Math.max(0,Math.min(e,Math.round(g*e)))},l=p=>{p.currentTarget.setPointerCapture?.(p.pointerId),n(o(p.clientX))},c=p=>{p.currentTarget.hasPointerCapture?.(p.pointerId)&&n(o(p.clientX))},d=p=>{p.key==="ArrowLeft"||p.key==="ArrowDown"?(p.preventDefault(),n(Math.max(0,t-1))):(p.key==="ArrowRight"||p.key==="ArrowUp")&&(p.preventDefault(),n(Math.min(e,t+1)))},u=e>0?t/e*100:0;return Spicetify.React.createElement("div",{className:"threshold-slider"},Spicetify.React.createElement("div",{className:"threshold-slider-rail",ref:a,onPointerDown:l,onPointerMove:c},Spicetify.React.createElement("div",{className:"threshold-slider-track"}),Spicetify.React.createElement("div",{className:"threshold-slider-fill",style:{width:`${u}%`}}),Spicetify.React.createElement("div",{className:"threshold-slider-handle",style:{left:`${u}%`},role:"slider",tabIndex:0,"aria-valuemin":0,"aria-valuemax":e,"aria-valuenow":t,"aria-valuetext":s(t),onKeyDown:d},s(t))),Spicetify.React.createElement("div",{className:"threshold-slider-presets"},r.map(p=>Spicetify.React.createElement("button",{key:p,type:"button",className:`threshold-slider-preset${p===t?" active":""}`,style:{left:`${e>0?p/e*100:0}%`},onClick:()=>n(p)},s(p)))))}var Sw=[0,15,30,45,60],xw=[0,25,50,75,100],kw=[{value:"streams",label:"Streams"},{value:"minutes",label:"Minutes"}],{useState:Jt,useEffect:Ew}=Spicetify.React;function Tw(){return localStorage.getItem(M.LOGGING)==="true"}function Pw(e){localStorage.setItem(M.LOGGING,String(e))}function Ap({onPrefsChanged:e}){let[t,r]=Jt(()=>xp()),[n,s]=Jt(()=>Ep()),[i,a]=Jt(()=>wp()==="percent"),[o,l]=Jt(()=>hp()/1e3),[c,d]=Jt(()=>bp()),[u,p]=Jt(()=>Tw()),[f,m]=Jt(()=>jt()),[g,h]=Jt(()=>Q.getActiveId()??"local");return Ew(()=>{let S=()=>h(Q.getActiveId()??"local");return window.addEventListener(H.PROVIDER_CHANGED,S),()=>window.removeEventListener(H.PROVIDER_CHANGED,S)},[]),Spicetify.React.createElement("div",null,Spicetify.React.createElement(Ne,{title:"Recording"},Spicetify.React.createElement(ue,{label:"Pause tracking"},Spicetify.React.createElement(Ke,{value:t,onChange:S=>{r(S),kp(S),window.dispatchEvent(new CustomEvent(S?H.TRACKING_PAUSED:H.TRACKING_RESUMED)),e()}})),Spicetify.React.createElement(ue,{label:"Skip repeats",sublabel:"Don't count back-to-back plays of the same track"},Spicetify.React.createElement(Ke,{value:n,onChange:S=>{s(S),Tp(S),e()}}))),Spicetify.React.createElement(Ne,{title:"Play threshold"},Spicetify.React.createElement(ue,{label:"Use percentage of track length"},Spicetify.React.createElement(Ke,{value:i,onChange:S=>{a(S),Sp(S?"percent":"seconds"),e()}})),Spicetify.React.createElement(ue,{label:"Count a play after",sublabel:"Local tracking only; stats.fm and Last.fm use their own rules",stacked:!0},Spicetify.React.createElement(Pp,{max:i?100:60,value:i?c:o,presets:i?xw:Sw,onChange:S=>{i?(d(S),vp(S)):(l(S),yp(S*1e3)),e()},formatValue:S=>i?`${S}%`:`${S}s`}))),g==="local"&&Spicetify.React.createElement(Ne,{title:"Ranking"},Spicetify.React.createElement(ue,{label:"Rank top lists by",sublabel:"Orders top tracks, artists, and albums by play count or time listened"},Spicetify.React.createElement(Ot,{options:kw,value:f,onChange:S=>{m(S),Kl(S),oe.invalidate(),window.dispatchEvent(new CustomEvent(H.RANK_MODE_CHANGED)),e()},testId:"rank-mode"}))),Spicetify.React.createElement(Ne,{title:"Diagnostics"},Spicetify.React.createElement(ue,{label:"Console logging"},Spicetify.React.createElement(Ke,{value:u,onChange:S=>{p(S),Pw(S),e()}}))))}var{useState:Aw,useEffect:Rw}=Spicetify.React,Cw={tracking:"Tracking",display:"Display",playlist:"Playlist",data:"Data",providers:"Providers",about:"About"};function Rp({onClose:e,onRefresh:t,onPrefsChanged:r,onRestartTour:n,onOpenUpdates:s,onReceiveBetaUpdatesChanged:i,initialTab:a="tracking",appVersion:o,announcementDismissKey:l=null}){let[c,d]=Aw(a);Rw(()=>{let p=f=>{f.key==="Escape"&&e()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[e]);let{createPortal:u}=Spicetify.ReactDOM;return u(Spicetify.React.createElement("div",{className:"settings-overlay",onClick:p=>{p.target.classList.contains("settings-overlay")&&e()}},Spicetify.React.createElement("div",{className:"settings-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Settings"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:e,"aria-label":"Close settings",dangerouslySetInnerHTML:{__html:Mr}})),Spicetify.React.createElement("div",{className:"settings-tabs",role:"tablist"},["tracking","display","playlist","data","providers","about"].map(p=>Spicetify.React.createElement("button",{type:"button",key:p,className:`settings-tab ${c===p?"active":""}`,role:"tab","aria-selected":c===p,onClick:()=>d(p)},Cw[p]))),c==="tracking"&&Spicetify.React.createElement(Ap,{onPrefsChanged:r}),c==="display"&&Spicetify.React.createElement(rp,{onPrefsChanged:r,announcementDismissKey:l}),c==="playlist"&&Spicetify.React.createElement(pp,null),c==="data"&&Spicetify.React.createElement(Jd,{onRefresh:t}),c==="providers"&&Spicetify.React.createElement(gp,null),c==="about"&&Spicetify.React.createElement(Kd,{version:o,onOpenUpdates:s,onPrefsChanged:r,onReceiveBetaUpdatesChanged:i,onRestartTour:n}))),document.body)}function Cp({topGenres:e,onGenreClick:t,activeGenre:r}){if(!e||e.length===0)return null;let n=e.slice(0,6),s=e.reduce((i,a)=>i+a.count,0)||1;return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Composition"),Spicetify.React.createElement("h2",{className:"section-title"},"Top Genres")),Spicetify.React.createElement("div",{className:"top-genres-list"},n.map((i,a)=>{let o=s>0?i.count/s*100:0;return Spicetify.React.createElement("div",{key:i.genre,className:"top-genres-row"},Spicetify.React.createElement("button",{className:`top-genres-name${r===i.genre?" top-genres-name--active":""}`,onClick:()=>t?.(i.genre),type:"button"},i.genre),Spicetify.React.createElement("div",{className:"top-genres-bar-track"},Spicetify.React.createElement("div",{className:`top-genres-bar${a===0?" peak":""}`,style:{width:`${o}%`}})),Spicetify.React.createElement("span",{className:"top-genres-pct"},Math.round(i.count/s*100),"%"))})))}var{React:pA}=Spicetify;function Vr(e){return e===1?"rank-gold":e===2?"rank-silver":e===3?"rank-bronze":""}function fo(){return Spicetify.React.createElement("div",null,Array.from({length:5}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"top-list-row",style:{marginBottom:6}},Spicetify.React.createElement(ld,{size:20}),Spicetify.React.createElement(Ue,{width:44,height:44}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement(Ue,{width:"80%",height:11,style:{marginBottom:6}}),Spicetify.React.createElement(Ue,{width:"55%",height:9})))))}function Ip({stats:e,loading:t,loadingByColumn:r,hiddenSections:n,onGenreClick:s,activeGenre:i}){let a=Re(),o=Q.getActiveId()==="local"?jt():null,l=a.columnOrder.filter(d=>!n.includes(d));if(l.length===0)return null;let c={"top-tracks":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-tracks",key:"top-tracks"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Most played"),Spicetify.React.createElement("h2",{className:"section-title"},"Tracks")),t||r?.tracks?Spicetify.React.createElement(fo,null):e?.topTracks.slice(0,a.itemsPerSection).map(d=>{let u=ve(d.albumArt);return Spicetify.React.createElement("div",{key:d.trackUri||`unknown-track-${d.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Ze(d.trackUri),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&Ze(d.trackUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Vr(d.rank)}`},d.rank),u?Spicetify.React.createElement("img",{src:u,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},d.trackName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},d.artistName)),!e?.isFreeTier||d.durationMs>0?Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",color:"rgba(var(--spice-rgb-text), 0.55)",flexShrink:0}},Spicetify.React.createElement("span",{style:{fontSize:11,fontVariantNumeric:"tabular-nums"}},o==="streams"?`${Ae(d.count)} plays`:zs(d.durationMs))):null)})),"top-artists":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-artists",key:"top-artists"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Artists")),t||r?.artists?Spicetify.React.createElement(fo,null):e?.topArtists.slice(0,a.itemsPerSection).map(d=>{let u=d.genres?.[0],p=ve(d.imageUrl??void 0);return Spicetify.React.createElement("div",{key:d.artistUri||`unknown-artist-${d.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Ze(d.artistUri),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&Ze(d.artistUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Vr(d.rank)}`},d.rank),p?Spicetify.React.createElement("img",{src:p,alt:"",className:"track-art track-art--round"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},d.artistName),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},(!e?.isFreeTier||d.count>0)&&Spicetify.React.createElement("span",{style:{fontVariantNumeric:"tabular-nums"}},o==="minutes"?zs(d.durationMs):`${Ae(d.count)} plays`),u&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("span",{style:{opacity:.4}},"\xB7"),Spicetify.React.createElement("span",{role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),s?.(u)},onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.stopPropagation(),s?.(u))},style:{color:i===u?"var(--spice-button)":"rgba(var(--spice-rgb-text), 0.7)",cursor:"pointer"}},u)))))})),"top-albums":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-albums",key:"top-albums"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Albums")),t||r?.albums?Spicetify.React.createElement(fo,null):e?.topAlbums.slice(0,a.itemsPerSection).map(d=>{let u=ve(d.albumArt);return Spicetify.React.createElement("div",{key:d.albumUri||`unknown-album-${d.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Ze(d.albumUri),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&Ze(d.albumUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Vr(d.rank)}`},d.rank),u?Spicetify.React.createElement("img",{src:u,alt:"",className:"track-art"}):null,Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},d.albumName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontVariantNumeric:"tabular-nums"}},d.artistName,(!e?.isFreeTier||d.count>0)&&Spicetify.React.createElement(Spicetify.React.Fragment,null," \xB7"," ",o==="minutes"?zs(d.durationMs):`${Ae(d.count)} plays`))))}))};return Spicetify.React.createElement("div",{className:"top-lists-grid"},l.map(d=>c[d]?.()??null))}var Np=`curl -fsSL ${Dt}/install.sh | bash`,_p=`irm ${Dt}/install.ps1 | iex`,Dp=`LISTENING_STATS_PRERELEASE=1 curl -fsSL ${Dt}/install.sh | bash`,Op=`$env:LISTENING_STATS_PRERELEASE = "1"; irm ${Dt}/install.ps1 | iex`;async function Lp(){try{let e=await fetch(`${Dt}/CHANGELOG.md?t=${Date.now()}`,{cache:"no-store"});return e.ok?await e.text():null}catch{return null}}function Mp(e){let t=e.replace(/\r\n/g,`
`).split(`
`),r=[],n=!1;function s(){n&&(r.push("</p>"),n=!1)}function i(a){let o=Iw(a);return o=o.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=o.replace(/`([^`]+)`/g,"<code>$1</code>"),o=o.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),o}for(let a of t){let l=a.trimEnd().trim();if(l===""){s();continue}let c=l.match(/^##+\s+(.*)$/);if(c){s(),r.push(`<h3>${i(c[1]??"")}</h3>`);continue}n?r.push("<br />"):(r.push("<p>"),n=!0),r.push(i(l))}return s(),r.join("")}function Iw(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var{useState:mo,useEffect:go,useCallback:$p,useRef:Nw}=Spicetify.React;async function _w(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select();let r=document.execCommand("copy");return document.body.removeChild(t),r}catch{return!1}}function Up({open:e,onClose:t,updateInfo:r,appVersion:n,receiveBetaUpdates:s,onReceiveBetaUpdatesChange:i}){let[a,o]=mo(null),[l,c]=mo(null),[d,u]=mo(null),p=Nw(null),f=s?Dp:Np,m=s?Op:_p;go(()=>{if(!e)return;let v=!1;return o(null),c(null),u(null),Lp().then(k=>{v||(k===null?c("Could not load changelog."):o(k))}).catch(()=>{v||c("Could not load changelog.")}),()=>{v=!0}},[e]),go(()=>()=>{p.current!==null&&window.clearTimeout(p.current)},[]),go(()=>{u(null),p.current!==null&&(window.clearTimeout(p.current),p.current=null)},[s]);let g=$p(()=>{Qu(24),t()},[t]),h=$p(async v=>{await _w(v==="bash"?f:m)?(p.current!==null&&window.clearTimeout(p.current),u(v),p.current=window.setTimeout(()=>{u(null),p.current=null},2500),Spicetify.showNotification(v==="bash"?"Copied (macOS / Linux).":"Copied (Windows).")):Spicetify.showNotification("Could not copy.",!0)},[f,m]),{createPortal:b}=Spicetify.ReactDOM;if(!e)return null;let x=a!==null?Mp(a.slice(0,12e4)):"",T=r!=null&&r.remoteTag===null,y=r==null?"Could not compare versions.":T?`No release metadata (this build is v${n}).`:r.updateAvailable?`Update available: ${r.remoteVersion} (you have ${r.localVersion}).`:`Up to date (${r.localVersion}).`;return b(Spicetify.React.createElement("div",{className:"settings-overlay update-overlay",onClick:v=>{v.target.classList.contains("settings-overlay")&&t()}},Spicetify.React.createElement("div",{className:"settings-modal update-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Updates"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:t,"aria-label":"Close",dangerouslySetInnerHTML:{__html:Mr}})),Spicetify.React.createElement("p",{className:"update-modal-status"},y),r?.updateAvailable&&r.prerelease?Spicetify.React.createElement("p",{className:"update-modal-note"},"That release is a GitHub pre-release."):null,Spicetify.React.createElement("div",{className:"update-modal-actions update-modal-actions-top"},r?.updateAvailable?Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:g},"Remind me later"):null,Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:t},"Close")),Spicetify.React.createElement("div",{className:"settings-row update-modal-pref-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Include prereleases when checking for updates.")),St?Spicetify.React.createElement(St,{value:s,onSelected:i}):Spicetify.React.createElement("input",{type:"checkbox",checked:s,onChange:v=>i(v.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"update-modal-note update-modal-install-short"},s?"Commands install the newest GitHub release that includes the zip (may be a pre-release). Bash needs jq or python3.":"Quit Spotify, paste one command, then restart Spotify."),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"macOS / Linux"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{h("bash")}},d==="bash"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},f)),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"Windows"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{h("powershell")}},d==="powershell"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},m)),Spicetify.React.createElement("p",{className:"settings-about-hint update-modal-repo-hint"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:_t,target:"_blank",rel:"noopener noreferrer"},"GitHub")," \xB7 ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:`${_t}/releases`,target:"_blank",rel:"noopener noreferrer"},"Releases")),Spicetify.React.createElement("h3",{className:"update-modal-changelog-title"},"Changelog"),l?Spicetify.React.createElement("p",{className:"update-modal-changelog-error"},l):null,Spicetify.React.createElement("div",{className:"update-modal-changelog markdown-lite",dangerouslySetInnerHTML:{__html:x}}))),document.body)}be();Es();var Fp="https://mytopspotify.io/spotify-top-songs.json",Dw="https://mytopspotify.io/spotify-top-artists.json",ho={Accept:"application/json","User-Agent":"Mozilla/5.0 (compatible; ListeningStats/2.x; +https://github.com/HeadshotInteractive/listening-stats)"};function Ow(e){if(!e?.trim())return"-";let t=e.replace(/[^\d]/g,"");if(!t)return e.trim();let r=Number(t);return Number.isFinite(r)?r>=1e6?`${(r/1e6).toFixed(1)}M listeners`:r>=1e3?`${Math.round(r/1e3)}K listeners`:`${r} listeners`:e.trim()}function Bp(e,t){return`${e.trim().toLowerCase()}|${t.trim().toLowerCase()}`}async function Wp(){let e=new Map,t=new Map;try{let r=await fetch(Fp,{headers:ho});if(!r.ok)return{bySpotifyId:e,byTitleArtist:t};let s=(await r.json()).data??[];for(let i of s)i.image&&(i.spotifyId&&e.set(i.spotifyId,i.image),t.set(Bp(i.name,i.artist),i.image))}catch{}return{bySpotifyId:e,byTitleArtist:t}}function Hp(e,t){return e.map(r=>{if(r.artUrl)return r;if(r.spotifyTrackId){let s=t.bySpotifyId.get(r.spotifyTrackId);if(s)return{...r,artUrl:s}}let n=t.byTitleArtist.get(Bp(r.title,r.artist));return n?{...r,artUrl:n}:r})}async function zp(){let e=await fetch(Fp,{headers:ho});if(!e.ok)throw new Error(`mytop songs HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((n,s)=>{let i=s+1;return{id:`mytop-t-${n.spotifyId??`mytop-t-${i}-${n.name}`}`,title:n.name,artist:n.artist,country:"GL",plays:"",delta:null,...n.spotifyId?{spotifyTrackId:n.spotifyId}:{},...n.image?{artUrl:n.image}:{}}})}async function Kp(){let e=await fetch(Dw,{headers:ho});if(!e.ok)throw new Error(`mytop artists HTTP ${e.status}`);return((await e.json()).data??[]).slice(0,8).map((n,s)=>({id:`mytop-a-${n.position??s+1}-${n.name}`,title:n.name,artist:"",country:"GL",plays:Ow(n.listeners),delta:null,...n.image?{artUrl:n.image}:{}}))}var Lw="https://api.stats.fm/api/v1",yo=10;function _n(e){return e.toLowerCase().normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").replace(/[^a-z0-9]+/g," ").trim()}function Gp(e){return e.split(",")[0]?.trim()??""}function Vp(e){return e?.trim()?`spotify:track:${e.trim()}`:null}function Mw(e){return e?.trim()?`spotify:artist:${e.trim()}`:null}function $w(e){return e?.trim()?`spotify:album:${e.trim()}`:null}function Uw(e){let t=Vp(e.spotifyTrackId);if(!t)return!1;let r=Spicetify.Player;return typeof r.playUri=="function"?(r.playUri(t),!0):(Ze(t),!0)}function jp(e){e.spotifyTrackId&&Uw(e)||Dn(e,"track")}function Dn(e,t){if(t==="track"){let n=Vp(e.spotifyTrackId);if(n){Ze(n);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`);return}if(t==="artist"){let n=Mw(e.spotifyArtistId);if(n){Ze(n);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(e.title)}`);return}let r=$w(e.spotifyAlbumId);if(r){Ze(r);return}Spicetify.Platform.History.push(`/search/${encodeURIComponent(`${e.title} ${e.artist}`.trim())}`)}function qp(e){return e.spotifyTrackId?"Play in Spotify":"Open in Spotify search"}async function Fw(e){let t=await fetch(`${Lw}/tracks/${e}`,{headers:{Accept:"application/json"}});if(!t.ok)return null;let r=await t.json();return((r.item??r).externalIds?.spotify??[])[0]??null}function Bw(e,t,r){if(!e.length)return null;let n=_n(t),s=_n(Gp(r)),i=e.find(o=>_n(o.name)===n&&o.artists.some(l=>{let c=_n(l.name);return c===s||c.includes(s)||s.includes(c)}));if(i)return i.id;let a=e.find(o=>_n(o.name)===n);return a?a.id:e[0]?.id??null}async function Ww(e,t){let r=Gp(t),n=r?[`track:${e} artist:${r}`,`${e} ${r}`]:[e];for(let s of n){let i=await bt(`https://api.spotify.com/v1/search?q=${encodeURIComponent(s)}&type=track&limit=8`);if(!i.ok)continue;let a=Bw(i.data.tracks?.items??[],e,t);if(a)return a}return null}async function Hw(e){if(e.spotifyTrackId)return e.spotifyTrackId;if(e.statsFmTrackId!=null){let t=await Fw(e.statsFmTrackId);if(t)return t}return e.artist?.trim()?Ww(e.title,e.artist):null}async function Yp(e,t){let r=Math.min(t?.max??yo,e.length),n=e.map(s=>({...s}));for(let s=0;s<r;s++){let i=n[s];if(i.spotifyTrackId)continue;let a=await Hw(i);a&&(n[s]={...i,spotifyTrackId:a})}return n}var zw="https://api.stats.fm/api/v1",Kw=50,bo={today:"today",week:"weeks"},Gw=["today","week"];function On(e){return Gw.includes(e)}function vo(e){return{ok:!1,status:503,message:`${e==="month"?"This month":e==="lifetime"?"All-time":e} charts are not available from stats.fm (only Today and This Week are supported).`}}function wo(e){if(e==null)return null;let t=String(e).toUpperCase();return t==="UP"||t.includes("UP")?"UP":t==="DOWN"||t.includes("DOWN")?"DOWN":t==="NEW"||t.includes("NEW")?"NEW":null}function So(e){return e==="UP"?1:e==="DOWN"?-1:e==="NEW"?3:null}function xo(e){return e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(e)}function Vw(e){if(e==null)return;let t=e>1e12?e:e*1e3,r=new Date(t).getFullYear(),n=new Date().getFullYear();if(!(!Number.isFinite(r)||r<1900||r>n+1))return r}function jw(e){let t=e.track.albums??[],r=s=>{if(s?.startsWith("http"))return s.includes("i.scdn.co"),s};for(let s of t){let i=r(s.image);if(i)return i}let n=e.track.artists[0];return r(n?.image)}function ko(e,t){let r=new URL(`${zw}/charts/top/${e}`);return r.searchParams.set("range",t),r.searchParams.set("limit",String(Kw)),r.toString()}function qw(e){let t=e.track.artists.map(i=>i.name).join(", "),r=jw(e),n=e.track.externalIds?.spotify?.[0],s=wo(e.indicator);return{id:`sfm-t-${e.position}-${e.track.name}`,title:e.track.name,artist:t,country:"GL",plays:xo(e.streams),delta:So(s),indicator:s,statsFmTrackId:e.track.id,...n?{spotifyTrackId:n}:{},...r?{artUrl:r}:{},...e.track.durationMs!=null?{durationMs:e.track.durationMs}:{},...e.track.explicit?{explicit:!0}:{}}}function Yw(e){let t=e.artist.image,r=wo(e.indicator),n=e.artist.genres?.slice(0,2),s=e.artist.externalIds?.spotify?.[0];return{id:`sfm-a-${e.position}-${e.artist.name}`,title:e.artist.name,artist:"",country:"GL",plays:xo(e.streams),delta:So(r),indicator:r,...t?{artUrl:t}:{},...n?.length?{genres:n}:{},...s?{spotifyArtistId:s}:{}}}function Xw(e){let t=e.album.image,r=wo(e.indicator),n=e.album.artists?.[0]?.name??"",s=Vw(e.album.releaseDate),i=e.album.externalIds?.spotify?.[0];return{id:`sfm-al-${e.position}-${e.album.name}`,title:e.album.name,artist:n,country:"GL",plays:xo(e.streams),delta:So(r),indicator:r,...t?{artUrl:t}:{},...s?{albumYear:s}:{},...i?{spotifyAlbumId:i}:{}}}async function Zw(e){let t=await fetch(ko("tracks",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(n=>qw(n))}async function Jw(e){let t=await fetch(ko("artists",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(n=>Yw(n))}async function Qw(e){let t=await fetch(ko("albums",e),{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return((await t.json()).items??[]).map(n=>Xw(n))}var ai={ok:!1,status:0,message:"Could not load world charts. Check your connection and retry."};async function Xp(e,t){if(!On(t))return vo(t);let r=bo[t]??"today";try{let n=await Zw(r);if(n.length===0)throw new Error("empty");let s={bySpotifyId:new Map,byTitleArtist:new Map};try{s=await Wp()}catch{}let i=Hp(n,s),a=await Yp(i,{max:yo});return a.length===0?ai:{ok:!0,data:a,source:"statsfm"}}catch{try{let n=await zp();if(n.length)return{ok:!0,data:n,source:"mytopspotify"}}catch{}return ai}}async function Zp(e,t){if(!On(t))return vo(t);let r=bo[t]??"today";try{let n=await Jw(r);if(n.length===0)throw new Error("empty");return{ok:!0,data:n,source:"statsfm"}}catch{try{let n=await Kp();if(n.length)return{ok:!0,data:n,source:"mytopspotify"}}catch{}return ai}}async function Jp(e,t){if(!On(t))return vo(t);let r=bo[t]??"today";try{let n=await Qw(r);if(n.length===0)throw new Error("empty");return{ok:!0,data:n,source:"statsfm"}}catch{return ai}}var{useMemo:eS}=Spicetify.React,oi=[{value:"today",label:"Today"},{value:"week",label:"This Week"}],li=[{value:"track",label:"Tracks"},{value:"artist",label:"Artists"},{value:"album",label:"Albums"}];function tS(e,t){let r=0;for(let n=0;n<e.length;n++)r=r*31+e.charCodeAt(n)>>>0;return{a:`oklch(0.70 0.14 ${r%360})`,b:`oklch(0.40 0.10 ${(r+60)%360})`,init:t.replace(/[^A-Za-z0-9]/g,"").slice(0,2).toUpperCase()}}function Qp({value:e}){return e?Spicetify.React.createElement("span",{className:"world-chart-indicator","data-dir":e==="UP"?"up":e==="DOWN"?"down":"new","aria-label":e==="NEW"?"New entry":e==="UP"?"Up":"Down"},Spicetify.React.createElement("span",{className:"world-chart-indicator-glyph"},e==="NEW"?"\u25CF":e==="UP"?"\u25B2":"\u25BC"),e==="NEW"?Spicetify.React.createElement("span",null,"NEW"):null):null}function ef({src:e,alt:t,size:r=44,round:n,fallbackSeed:s,fallbackLabel:i}){let a=eS(()=>e?null:tS(s,i),[e,s,i]);return e?Spicetify.React.createElement("img",{src:e,alt:t,className:"track-art",loading:"lazy",style:{width:r,height:r,borderRadius:n?"50%":Math.max(4,Math.round(r/18)),flexShrink:0}}):Spicetify.React.createElement("div",{className:"track-art track-art--fallback",style:{width:r,height:r,borderRadius:n?"50%":Math.max(4,Math.round(r/18)),flexShrink:0,background:a?`linear-gradient(135deg, ${a.a}, ${a.b})`:void 0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:Math.max(11,r*.28),color:"rgba(255,255,255,0.92)"},"aria-hidden":!0},a?.init)}function tf({value:e,onChange:t}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist","aria-label":"Time range","data-testid":"world-window-tabs"},oi.map(r=>Spicetify.React.createElement("button",{type:"button",key:r.value,className:`period-tab ${e===r.value?"active":""}`,role:"tab","aria-selected":e===r.value,onClick:()=>t(r.value)},r.label)))}function rf({value:e,onChange:t}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist","aria-label":"Chart type","data-testid":"world-kind-tabs"},li.map(r=>Spicetify.React.createElement("button",{type:"button",key:r.value,className:`period-tab ${e===r.value?"active":""}`,role:"tab","aria-selected":e===r.value,onClick:()=>t(r.value)},r.label)))}function nf({item:e,size:t=28}){let r=qp(e);return Spicetify.React.createElement(He,{label:r,placement:"top"},Spicetify.React.createElement("button",{type:"button",className:"world-chart-playbtn",style:{width:t,height:t},"aria-label":r,onClick:s=>{s.stopPropagation(),jp(e)}},Spicetify.React.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor","aria-hidden":"true",role:"presentation"},Spicetify.React.createElement("path",{d:"M2.5 1.5L8 5L2.5 8.5Z"}))))}function sf(e,t){if(t==="track")return{title:e.title,sub:e.artist,art:e.artUrl};if(t==="artist")return{title:e.title,sub:e.genres?.length?e.genres.slice(0,2).join(" \xB7 "):"Artist",art:e.artUrl};let r=e.albumYear?` \xB7 ${e.albumYear}`:"";return{title:e.title,sub:`${e.artist}${r}`,art:e.artUrl}}function rS({item:e,rank:t,kind:r}){let n=sf(e,r),s=t===1?152:112;return Spicetify.React.createElement("div",{className:"world-podium-cell","data-rank":t},Spicetify.React.createElement("div",{className:"world-podium-artwrap"},Spicetify.React.createElement("button",{type:"button",className:"world-podium-art-btn",onClick:()=>Dn(e,r),"aria-label":`Open ${n.title}`},Spicetify.React.createElement(ef,{src:n.art,alt:n.title,size:s,round:r==="artist",fallbackSeed:n.title+n.sub,fallbackLabel:n.title})),r==="track"?Spicetify.React.createElement("span",{className:"world-podium-play"},Spicetify.React.createElement(nf,{item:e,size:30})):null),Spicetify.React.createElement("div",{className:`world-podium-rank rank-number ${Vr(t)}`},t),Spicetify.React.createElement("div",{className:"world-podium-title","data-testid":t===1?"world-podium-title":void 0},n.title),Spicetify.React.createElement("div",{className:"world-podium-sub"},n.sub),Spicetify.React.createElement("div",{className:"world-podium-stat"},Spicetify.React.createElement("span",null,e.plays),Spicetify.React.createElement(Qp,{value:e.indicator})))}function af({items:e,kind:t}){if(e.length===0)return null;let r=[e[1]?{item:e[1],rank:2}:null,{item:e[0],rank:1},e[2]?{item:e[2],rank:3}:null];return Spicetify.React.createElement("div",{className:"world-podium","data-testid":"world-podium"},r.map((n,s)=>n?Spicetify.React.createElement(rS,{key:n.item.id,item:n.item,rank:n.rank,kind:t}):Spicetify.React.createElement("div",{key:`empty-${s}`})))}function nS({item:e,rank:t,kind:r}){let n=sf(e,r);return Spicetify.React.createElement("div",{className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Dn(e,r),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&Dn(e,r)}},Spicetify.React.createElement("span",{className:`rank-number ${Vr(t)}`},t),Spicetify.React.createElement(ef,{src:n.art,alt:n.title,size:44,round:r==="artist",fallbackSeed:n.title+n.sub,fallbackLabel:n.title}),Spicetify.React.createElement("div",{className:"world-chart-text"},Spicetify.React.createElement("div",{className:"world-chart-title"},n.title),Spicetify.React.createElement("div",{className:"world-chart-sub"},n.sub)),r==="track"?Spicetify.React.createElement(nf,{item:e,size:24}):null,Spicetify.React.createElement("div",{className:"world-chart-stats"},Spicetify.React.createElement("span",null,e.plays),Spicetify.React.createElement(Qp,{value:e.indicator})))}function of({items:e,kind:t,startRank:r}){return e.length===0?null:Spicetify.React.createElement("div",{className:"world-ladder","data-testid":"world-ladder"},e.map((n,s)=>Spicetify.React.createElement(nS,{key:n.id,item:n,rank:r+s,kind:t})))}function lf(){return Spicetify.React.createElement("div",{className:"world-stage-skeleton stats-page-content","aria-hidden":!0},Spicetify.React.createElement("section",{className:"section-card world-podium-card"},Spicetify.React.createElement("div",{className:"world-podium"},[112,152,112].map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"world-podium-cell"},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:e,height:e,borderRadius:8}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:e*.8,height:12,borderRadius:4,marginTop:10}}))))),Spicetify.React.createElement("section",{className:"section-card"},Spicetify.React.createElement("div",{className:"world-ladder"},Array.from({length:6}).map((e,t)=>Spicetify.React.createElement("div",{key:t,className:"top-list-row",style:{pointerEvents:"none"}},Spicetify.React.createElement("span",{className:"rank-number",style:{color:"transparent"}},"0"),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:44,height:44,borderRadius:4,flexShrink:0}}),Spicetify.React.createElement("div",{className:"world-chart-text"},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"60%",height:11,borderRadius:4}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"40%",height:9,borderRadius:4,marginTop:6}})))))))}var{useState:Qt,useEffect:sS,useCallback:iS}=Spicetify.React,aS=new Set(oi.map(e=>e.value)),oS=new Set(li.map(e=>e.value)),cf="listening-stats:world-charts-kind",ci=3,lS=12,cS=ci+lS;function uS(){let e=localStorage.getItem(M.WORLD_CHARTS_WINDOW);return e&&aS.has(e)&&On(e)?e:"today"}function dS(){let e=localStorage.getItem(cf);return e&&oS.has(e)?e:"track"}function pS(e,t,r){if(e==="statsfm"&&t==="statsfm"&&r==="statsfm")return"Global charts \xB7 stats.fm";let n=(s,i)=>s==="mytopspotify"?`${i} \xB7 mytopspotify.io (daily)`:`${i} \xB7 stats.fm`;return[n(e,"Tracks"),n(t,"Artists"),n(r,"Albums")].join(" \xB7 ")}function uf(){let[e,t]=Qt(uS),[r,n]=Qt(dS),[s,i]=Qt([]),[a,o]=Qt([]),[l,c]=Qt([]),[d,u]=Qt(!0),[p,f]=Qt(null),[m,g]=Qt("Global charts \xB7 stats.fm"),h=oi.find(A=>A.value===e)?.label??"Today",b=iS(async A=>{u(!0),f(null);let[P,_,N]=await Promise.all([Xp("world",A),Zp("world",A),Jp("world",A)]),C="statsfm",I="statsfm",O="statsfm";P.ok?(i(P.data),C=P.source??"statsfm"):(f(fr(P.status,P.message)),i([])),_.ok?(o(_.data),I=_.source??"statsfm"):o([]),N.ok?(c(N.data),O=N.source??"statsfm"):c([]),g(pS(C,I,O)),u(!1)},[]);sS(()=>{b(e)},[e,b]);let x=A=>{t(A),localStorage.setItem(M.WORLD_CHARTS_WINDOW,A)},T=()=>{b(e)},y=A=>{n(A),localStorage.setItem(cf,A)},v=(r==="track"?s:r==="artist"?a:l).slice(0,cS),k=v.slice(0,ci),S=v.slice(ci),w=li.find(A=>A.value===r)?.label??"Tracks";return Spicetify.React.createElement("div",{className:"world-charts-page stats-page-content"},Spicetify.React.createElement("header",{className:"section-heading world-page-header"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("span",{className:"section-kicker","data-testid":"world-page-kicker"},"What the planet is playing"),Spicetify.React.createElement("h1",{className:"section-title"},"World")),Spicetify.React.createElement(tf,{value:e,onChange:x})),d&&Spicetify.React.createElement(lf,null),!d&&p&&Spicetify.React.createElement(Ur,{error:p,onRetry:T,onOpenSettings:()=>{}}),!d&&!p&&Spicetify.React.createElement(Spicetify.React.Fragment,null,v.length===0?Spicetify.React.createElement("div",{className:"world-charts-empty"},Spicetify.React.createElement("div",{className:"world-charts-empty-title"},"Nothing charted here yet"),Spicetify.React.createElement("div",{className:"world-charts-empty-body"},h," ",w.toLowerCase()," charts came back empty. Try another chart type or time range.")):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("section",{className:"section-card world-podium-card","data-testid":"world-podium-card"},Spicetify.React.createElement("div",{className:"world-stage-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Global podium \xB7 ",h),Spicetify.React.createElement("h2",{className:"section-title"},w)),Spicetify.React.createElement(rf,{value:r,onChange:y})),Spicetify.React.createElement(af,{items:k,kind:r})),S.length>0?Spicetify.React.createElement("section",{className:"section-card","data-testid":"world-ladder-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Global top 15"),Spicetify.React.createElement("h2",{className:"section-title"},"Ranks 4\u201315")),Spicetify.React.createElement(of,{items:S,kind:r,startRank:ci+1})):null),Spicetify.React.createElement("div",{className:"world-charts-source"},m)))}var df="listening-stats:remote-announcement-cache",fS=1800*1e3;function ui(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function mS(e){let t=e.trim(),r=t.match(/^UPDATE\s*(.*)$/i);if(!r)return null;let n=r[1].trim(),s=n.indexOf("|");if(s>=0){let i=n.slice(0,s).trim(),a=n.slice(s+1).trim();return{dismissId:i||ui(t),headline:a||"Notice from the Listening Stats maintainers."}}return{dismissId:ui(t),headline:n||"Notice from the Listening Stats maintainers."}}function gS(e){let t=e.replace(/^\uFEFF/,"").trim();if(!t)return null;let r=t.indexOf(`
`),n=(r===-1?t:t.slice(0,r)).trim(),s=r===-1?"":t.slice(r+1).trim(),i=mS(n);if(i)return{dismissId:i.dismissId,title:i.headline,body:s.trim()||"Open the changelog in the app, or run the install script from Settings \u2192 About to update.",actionLabel:"Changelog",actionUrl:`${_t}/releases`,actionOpensChangelog:!0};if(n.startsWith("# ")){let a=n.slice(2).trim();return{dismissId:ui(t),title:a,body:s}}return{dismissId:ui(t),title:"Announcement",body:t}}async function pf(){let e=null;try{let t=sessionStorage.getItem(df);if(t){let r=JSON.parse(t);r&&typeof r.t=="number"&&typeof r.text=="string"&&Date.now()-r.t<fS&&(e=r.text)}}catch{}if(e===null)try{let t=await fetch(`${Dt}/ANNOUNCEMENT.md?t=${Date.now()}`,{cache:"no-store"});if(t.status===404)e="";else if(t.ok)e=await t.text();else return null;try{sessionStorage.setItem(df,JSON.stringify({t:Date.now(),text:e??""}))}catch{}}catch{return null}return e===null||e===""?null:gS(e)}je();be();var hS={"2.6":{title:"v2.6 is here",body:"section streaming, share cards, world charts.",actionLabel:"What's new \u2192"}};function yS(e){return hS[e]??null}function bS(e){try{return localStorage.getItem(M.DISMISSED_BANNER_VERSION)===e}catch{return!1}}function vS(e){try{return localStorage.getItem(M.DISMISSED_REMOTE_ANNOUNCEMENT_ID)===e}catch{return!1}}function ff(e,t){if(t&&!vS(t.dismissId))return{source:"remote",dismissKey:t.dismissId,title:t.title,body:t.body,actionLabel:t.actionLabel,actionUrl:t.actionUrl,actionOpensChangelog:t.actionOpensChangelog};let r=yS(e);return r&&!bS(e)?{source:"local",dismissKey:e,title:r.title,body:r.body,actionLabel:r.actionLabel,actionUrl:r.actionUrl}:null}var{useState:wS,useEffect:mf,useCallback:SS,useMemo:xS}=Spicetify.React;function gf(e,t){let[r,n]=wS(null);mf(()=>{pf().then(n).catch(()=>{})},[]);let s=xS(()=>ff(e,r),[e,r]);mf(()=>{if(!s)return;let a=Re();if(a.showAnnouncementBanner)return;let o=s.dismissKey,l=a.announcementBannerHiddenForDismissKey;o!==l&&(ie("showAnnouncementBanner",!0),ie("announcementBannerHiddenForDismissKey",""),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED)),t())},[s,t]);let i=SS(()=>{s&&(ie("showAnnouncementBanner",!1),ie("announcementBannerHiddenForDismissKey",s.dismissKey),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED)),t())},[s,t]);return{resolvedBanner:s,dismissBanner:i}}je();be();Gt();var kS=["January","February","March","April","May","June","July","August","September","October","November","December"];function To(e){return new Date(e.getFullYear(),e.getMonth()-1,1,0,0,0,0)}function ES(e=new Date){let t=To(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function TS(e=new Date){let t=To(e);return`${kS[t.getMonth()]} ${t.getFullYear()}`}function Po(e,t=new Date){let r=ES(t),n=TS(t);if(e==="statsfm")return{period:ht.find(o=>o.id==="sfm-weeks")??ht[0],monthKey:r,monthLabel:"Last 4 Weeks",exactMonth:!1};if(e==="lastfm")return{period:fn.find(o=>o.id==="1month")??fn[0],monthKey:r,monthLabel:"Last Month",exactMonth:!1};let s=To(t).getTime(),i=new Date(t.getFullYear(),t.getMonth(),1,0,0,0,0).getTime();return{period:{id:`recap-${r}`,label:n,getBoundaries:()=>({start:s,end:i})},monthKey:r,monthLabel:n,exactMonth:!0}}function hf(e){try{return localStorage.getItem(M.RECAP_DISMISSED_MONTH)===e}catch{return!1}}function yf(e){try{localStorage.setItem(M.RECAP_DISMISSED_MONTH,e)}catch{}}function Eo(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function PS(e,t,r){let n=Math.max(1,Math.round((r-t)/864e5));if(!e?.length)return{longestRun:0,daysInPeriod:n};let s=new Set(e.filter(l=>l.count>0&&l.date>=Eo(t)&&l.date<=Eo(r-1)).map(l=>l.date)),i=0,a=0,o=new Date(t);for(let l=0;l<n;l++)a=s.has(Eo(o.getTime()))?a+1:0,a>i&&(i=a),o.setDate(o.getDate()+1);return{longestRun:i,daysInPeriod:n}}async function Ao(e,t){let r=await e.calculateStats(t.period);if(r.totalPlays===0)return null;let{start:n,end:s}=t.period.getBoundaries(),{longestRun:i}=PS(r.dailyPlayCounts,n,s);return{...r,streak:i}}function bf(e){let t=Math.floor(e.totalDuration/36e5),r=[];t>0&&r.push(t===1?"1 hour":`${t} hours`),r.push(e.totalPlays===1?"1 play":`${e.totalPlays.toLocaleString()} plays`);let n=e.topArtists[0]?.artistName;return n&&r.push(`mostly ${n}`),r.join(" \xB7 ")}var{useState:vf,useEffect:wf,useCallback:AS,useRef:RS}=Spicetify.React;function Sf(e,t){let[r,n]=vf(null),[s,i]=vf(!1),a=RS(!1);wf(()=>{if(!e||!t||a.current)return;a.current=!0;let l=Po(Q.getActiveId()??"local");if(hf(l.monthKey))return;let c=Q.getActive();c&&Ao(c,l).then(d=>{d&&n({source:l,stats:d})}).catch(()=>{})},[e,t]),wf(()=>{let l=()=>{let c=Po(Q.getActiveId()??"local"),d=Q.getActive();d&&Ao(d,c).then(u=>{u?(n({source:c,stats:u}),i(!0)):Spicetify.showNotification("No plays recorded for last month yet.")}).catch(()=>Spicetify.showNotification("Could not load recap stats.",!0))};return window.addEventListener(H.OPEN_RECAP,l),()=>window.removeEventListener(H.OPEN_RECAP,l)},[]);let o=AS(()=>{r&&yf(r.source.monthKey),n(null)},[r]);return{recapOffer:r,showRecap:s,setShowRecap:i,dismissOffer:o}}Es();function Ro(){return{overview:"loading",lists:"loading",activity:"loading",consistency:"loading"}}function Co(){return{overview:"resolved",lists:"resolved",activity:"resolved",consistency:"resolved"}}var Io={topTracks:[],topArtists:[],topAlbums:[],topGenres:[],totalPlays:0,totalDuration:0,recentPlays:[],hourlyDistribution:new Array(24).fill(0),peakHour:0,skipRate:0,uniqueTrackCount:0,uniqueArtistCount:0};function xf(e){switch(e){case 1:return"overview";case 2:return"lists";case 3:return"activity"}}yt();var{useState:Ln,useCallback:CS,useRef:IS}=Spicetify.React;function kf(e,t){return e==="local"?`local:${t}:${jt()}`:`${e}:${t}`}function Ef(){let[e,t]=Ln(null),[r,n]=Ln(Ro()),[s,i]=Ln({tracks:!0,artists:!0,albums:!0}),[a,o]=Ln({}),[l,c]=Ln(""),d=IS(0),u=CS(async(p,f=!1)=>{let m=++d.current,g=Q.getActiveId()??"local",h=kf(g,p.id);c(`${g}:${p.id}`),f||(n(Ro()),i({tracks:!0,artists:!0,albums:!0}),t(null)),o({});try{if(!f){let x=oe.get(h);if(x){t(x),n(Co()),i({tracks:!1,artists:!1,albums:!1});return}}let b=Q.getActive();if(!b)throw new Error("No active provider");if(b.calculateStatsProgressive){let x=!1,T=await b.calculateStatsProgressive(p,(y,v,k)=>{if(m!==d.current)return;let S=xf(v);"topTracks"in y&&i(w=>({...w,tracks:!1})),"topArtists"in y&&i(w=>({...w,artists:!1})),"topAlbums"in y&&i(w=>({...w,albums:!1})),("dailyPlayCounts"in y||"listeningDays"in y)&&n(w=>({...w,consistency:"resolved"})),k?(x=!0,o(w=>({...w,[S]:k})),n(w=>({...w,[S]:"error"}))):(t(w=>w?{...w,...y}:{...Io,...y}),n(w=>({...w,[S]:"resolved"})))});if(m!==d.current)return;t(y=>({...y??Io,...T})),i({tracks:!1,artists:!1,albums:!1}),n(y=>({overview:y.overview==="error"?"error":"resolved",lists:y.lists==="error"?"error":"resolved",activity:y.activity==="error"?"error":"resolved",consistency:y.consistency==="error"?"error":"resolved"})),x||oe.set(h,T)}else{let x=await b.calculateStats(p);if(m!==d.current)return;oe.set(h,x),t(x),n(Co()),i({tracks:!1,artists:!1,albums:!1})}}catch(b){if(m!==d.current)return;let x=b instanceof Nr?b.appError:fr(0,b instanceof Error?b.message:"Failed to load stats");o({overview:x,lists:x,activity:x}),n({overview:"error",lists:"error",activity:"error",consistency:"error"})}},[]);return{stats:e,sectionSlots:r,listColumnLoading:s,sectionErrors:a,activeRequestLabel:l,loadStats:u}}function NS(){return!localStorage.getItem(M.PROVIDER_WIZARD_SEEN)}function _S(){localStorage.setItem(M.PROVIDER_WIZARD_SEEN,"1")}function Tf(){return Q.getActive()?.getSupportedPeriods()??pt}var{useState:st,useEffect:jr,useCallback:Mt,useMemo:Pf}=Spicetify.React;function DS(){let[e,t]=st(pt),[r,n]=st(pt[0]),{stats:s,sectionSlots:i,listColumnLoading:a,sectionErrors:o,activeRequestLabel:l,loadStats:c}=Ef(),[d,u]=st(!1),[p,f]=st(!1),[m,g]=st(0),[h,b]=st(()=>localStorage.getItem(M.ACTIVE_PROVIDER)??"local"),[x,T]=st(NS),[y,v]=st("tracking"),[k,S]=st(()=>xd("2.1.5")),[w,A]=st(()=>Re().activePage),[P,_]=st(!1),[N,C]=st(null),[I,O]=st(!1),W=Pf(()=>[...e,la],[e]),G=Pf(()=>w==="world"?la:r,[w,r]);jr(()=>{Ql().catch(V=>{console.error("[listening-stats] Provider Init failed: ",V)}).then(()=>{let V=Tf();t(V);let le=bn(Q.getActiveId()??"local",V);n(le),f(!0)})},[]),jr(()=>{!p||w==="world"||c(r)},[r,p,c,w]),jr(()=>{let V=()=>{let le=Q.getActiveId()??"local",Je=Tf();t(Je);let Ge=bn(le,Je);n(Ge),b(le),oe.invalidate(),ja()};return window.addEventListener(H.PROVIDER_CHANGED,V),()=>window.removeEventListener(H.PROVIDER_CHANGED,V)},[]),jr(()=>{let V=()=>{w!=="world"&&(oe.invalidate(),c(r,!0))};return window.addEventListener(H.PLAY_RECORDED,V),window.addEventListener(H.RANK_MODE_CHANGED,V),()=>{window.removeEventListener(H.PLAY_RECORDED,V),window.removeEventListener(H.RANK_MODE_CHANGED,V)}},[r,c,w]),jr(()=>{let V=()=>g(le=>le+1);return window.addEventListener(H.PREFS_CHANGED,V),()=>window.removeEventListener(H.PREFS_CHANGED,V)},[]);let D=Mt(async()=>{let V=Re(),le=await Ju("2.1.5",V.receiveBetaUpdates);return C(le),le},[]);jr(()=>{if(!p)return;let V=!1;return(async()=>{let le=await D();V||le.updateAvailable&&!ed()&&O(!0)})(),()=>{V=!0}},[p,D]);let F=Mt(async()=>{u(!1),await D(),O(!0)},[D]),E=Q.getActive()?.getProviderInfo().name??"Local",U=Q.getActive()?.getProviderInfo().capabilities??null,se=U??{hasActivityData:!1,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!1,hasSkipRate:!1,tier:"n/a"},ae=new Set(Hs(se).map(V=>V.id)),de=Re(),Ce=U?.hasStreakData||h==="statsfm",ke=V=>de.hiddenSections.includes(V),L=Mt(()=>{g(V=>V+1)},[]),{resolvedBanner:q,dismissBanner:pe}=gf("2.1.5",L),{recapOffer:fe,showRecap:Ee,setShowRecap:$,dismissOffer:me}=Sf(p,s),j=Mt(V=>{ie("receiveBetaUpdates",V),window.dispatchEvent(new CustomEvent(H.PREFS_CHANGED)),L(),D()},[L,D]),R=Mt(V=>{if(V.id===oa){_(!1),A("world"),ie("activePage","world");return}A("dashboard"),ie("activePage","dashboard"),n(V),ec(Q.getActiveId()??"local",V.id),window.dispatchEvent(new CustomEvent(H.DASHBOARD_PERIOD_CHANGED,{detail:{periodId:V.id}}))},[]),ee=Mt(async()=>{if(Q.getActiveId()==="statsfm"){let{statsfmProvider:V}=await Promise.resolve().then(()=>(Dr(),Xl));await V.init(),window.dispatchEvent(new CustomEvent(H.STATSFM_PROFILE_REFRESHED))}await c(r)},[r,c]),ne=Mt(()=>{_S(),T(!1)},[]),De=Mt((V="tracking")=>{v(V),u(!0)},[]),Xr=Mt(()=>{u(!1),S(!0)},[]),ct=V=>i[V]==="loading"||i[V]==="pending",er=V=>{switch(V){case"overview":return ct("overview")?Spicetify.React.createElement(Qs,{loading:!0,activePeriod:r}):o.overview?Spicetify.React.createElement(Ur,{error:o.overview,onRetry:()=>c(r),onOpenSettings:()=>De("providers")}):s?Spicetify.React.createElement(Qs,{stats:s,activePeriod:r}):null;case"top-genres":return ct("lists")||!s||!U?.hasGenreData||s.topGenres.length===0?null:Spicetify.React.createElement(Cp,{topGenres:s.topGenres,onGenreClick:Vs,activeGenre:de.activeGenre});case"top-lists":{let le=ct("lists");return o.lists?Spicetify.React.createElement(Ur,{error:o.lists,onRetry:()=>c(r),onOpenSettings:()=>De("providers")}):!le&&!s?null:Spicetify.React.createElement(Ip,{stats:s??null,loading:le,loadingByColumn:a,hiddenSections:de.hiddenSections,onGenreClick:Vs,activeGenre:de.activeGenre})}case"activity":return!U||td(U)==="hidden"?null:o.activity?Spicetify.React.createElement(Ur,{error:o.activity,onRetry:()=>c(r),onOpenSettings:()=>De("providers")}):ct("activity")?Spicetify.React.createElement(za,{loading:!0,hourlyDistribution:[],peakHour:0,weekdayDistribution:[],peakWeekday:0,showStreak:!1}):s?Spicetify.React.createElement(za,{hourlyDistribution:s.hourlyDistribution,peakHour:s.peakHour,weekdayDistribution:s.weekdayDistribution??Array(7).fill(0),peakWeekday:s.peakWeekday??0,dailyPlayCounts:s.dailyPlayCounts,streak:s.streak,showStreak:Ce}):null;case"consistency":return i.consistency==="loading"||i.consistency==="pending"?Spicetify.React.createElement(Ga,{loading:!0,activePeriod:r,activeProviderId:h,totalPlays:0,totalDuration:0}):s?Spicetify.React.createElement(Ga,{totalPlays:s.totalPlays,totalDuration:s.totalDuration,listeningDays:s.listeningDays,dailyPlayCounts:s.dailyPlayCounts,streak:s.streak,activePeriod:r,activeProviderId:h}):null;case"recently-played":return ct("overview")?Spicetify.React.createElement(eo,{loading:!0}):s?Spicetify.React.createElement(eo,{recentPlays:s.recentPlays}):null;default:return null}},Oe=()=>{let V=i.overview==="resolved"||i.overview==="error",le=i.lists==="resolved"||i.lists==="error",Je=Object.values(o).every(Ve=>Ve==null);if(V&&le&&Je&&s&&s.totalPlays===0&&s.topTracks.length===0)return Spicetify.React.createElement(Va,{onOpenSettings:()=>De()});let Le=de.sectionOrder.filter(Ve=>ae.has(Ve)&&!ke(Ve)),hr=Object.entries(i).filter(([,Ve])=>Ve==="loading"||Ve==="pending").map(([Ve])=>Ve),Oo=hr.length>0;return Spicetify.React.createElement("div",{className:"stats-page-content"},Oo&&Spicetify.React.createElement("div",{className:"loading-status-banner",role:"status","aria-live":"polite"},Spicetify.React.createElement("span",{className:"loading-status-dot"}),Spicetify.React.createElement("span",null,"Loading ",l," - waiting on ",hr.join(", "))),Le.map(Ve=>{let Lo=er(Ve);return Lo?Spicetify.React.createElement("div",{key:Ve,"data-section-id":Ve},Lo):null}))},Te=de.showAnnouncementBanner?q:null,ut=()=>w==="world"?Spicetify.React.createElement(uf,null):Oe();return Spicetify.React.createElement("div",{className:"stats-page","data-version":"2.1.5"},x?Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement(Dd,{onComplete:ne})):Spicetify.React.createElement("div",{className:"stats-page-scroll"},Spicetify.React.createElement("div",{className:"stats-page-sticky"},Spicetify.React.createElement(wd,{activeGenre:de.activeGenre,onClear:ja}),Spicetify.React.createElement(Ja,{providerName:E,activeProviderId:h,onSettingsClick:()=>De(),onShareClick:s&&w!=="world"?()=>_(!0):void 0,periods:W,activePeriod:G,onPeriodChange:R})),Te&&Spicetify.React.createElement(Ka,{title:Te.title,body:Te.body,titleOnly:Te.actionOpensChangelog===!0,actionLabel:Te.actionLabel,actionUrl:Te.actionUrl,onActionClick:Te.actionOpensChangelog?()=>{F()}:void 0,onDismiss:pe}),fe&&w!=="world"&&Spicetify.React.createElement(Ka,{title:fe.source.exactMonth?`Your ${fe.source.monthLabel} recap is ready`:"Your monthly recap is ready",body:bf(fe.stats),actionLabel:"View recap \u2192",onActionClick:()=>$(!0),onDismiss:me}),ut(),Spicetify.React.createElement(fd,{version:"2.1.5",onCheckForUpdates:()=>{F()}})),d&&Spicetify.React.createElement(Rp,{onClose:()=>u(!1),onRefresh:ee,onPrefsChanged:L,onRestartTour:Xr,onOpenUpdates:()=>{F()},onReceiveBetaUpdatesChanged:()=>{D()},initialTab:y,appVersion:"2.1.5",announcementDismissKey:q?.dismissKey??null}),Spicetify.React.createElement(_d,{active:k&&!x,version:"2.1.5",steps:qa({activePage:w,hasShare:!!s,sectionIds:de.sectionOrder.filter(V=>ae.has(V)&&!ke(V))}),onComplete:()=>S(!1)}),P&&s&&Spicetify.React.createElement(co,{stats:s,activePeriod:r,onClose:()=>_(!1)}),Ee&&fe&&Spicetify.React.createElement(co,{stats:fe.stats,activePeriod:fe.source.period,onClose:()=>$(!1),initialVariant:"recap",variantIds:["recap"],title:fe.source.exactMonth?`${fe.source.monthLabel} Recap`:"Monthly Recap"}),Spicetify.React.createElement(Up,{open:I,onClose:()=>O(!1),updateInfo:N,appVersion:"2.1.5",receiveBetaUpdates:de.receiveBetaUpdates,onReceiveBetaUpdatesChange:j}))}var Af=DS;var{Component:OS}=Spicetify.React,qr=class extends OS{constructor(){super(...arguments);this.state={error:null,componentStack:"",copied:!1};this.handleCopy=async()=>{let r=this.buildReport();try{await navigator.clipboard.writeText(r),this.setState({copied:!0})}catch{try{let n=document.createElement("textarea");n.value=r,n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.setState({copied:!0})}catch{}}};this.handleRetry=()=>{this.setState({error:null,componentStack:"",copied:!1})}}static getDerivedStateFromError(r){return{error:r,copied:!1}}componentDidCatch(r,n){this.setState({componentStack:n?.componentStack??""}),console.error("[listening-stats] Render error:",r,n?.componentStack??"")}buildReport(){let{error:r,componentStack:n}=this.state;return["Listening Stats error report",`Version: ${this.props.appVersion??"unknown"}`,`Spotify UA: ${typeof navigator<"u"?navigator.userAgent:"unknown"}`,`Error: ${r?.message??"unknown"}`,r?.stack?`Stack:
${r.stack}`:"",n?`Component stack:
${n}`:""].filter(Boolean).join(`
`)}render(){let{error:r,copied:n}=this.state;return r?this.props.silent?null:Spicetify.React.createElement("div",{role:"alert",style:{margin:24,padding:20,borderRadius:8,background:"var(--spice-card, rgba(255,255,255,0.06))",color:"var(--spice-text, #fff)",maxWidth:640}},Spicetify.React.createElement("h2",{style:{marginTop:0,fontSize:18}},"Listening Stats hit an error"),Spicetify.React.createElement("p",{style:{fontSize:14,opacity:.85}},"The rest of Spotify is unaffected. Copy the details below and attach them to a GitHub issue so this can be fixed."),Spicetify.React.createElement("pre",{style:{fontSize:12,whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:180,overflow:"auto",padding:10,borderRadius:6,background:"rgba(0,0,0,0.35)"}},r.message),Spicetify.React.createElement("div",{style:{display:"flex",gap:8}},Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:this.handleCopy},n?"Copied":"Copy error details"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:this.handleRetry},"Try again"))):this.props.children??null}};var Rf=`:root {
	--font-size-sm: 12px;
	--font-size-md: 14px;
	--font-size-lg: 20px;
	--font-size-2xl: 28px;

	--line-height-display: 1.2;
	--line-height-heading: 1.2;
	--line-height-label: 1.4;
	--line-height-body: 1.5;

	--space-xs: 4px;
	--space-sm: 8px;
	--space-md: 16px;
	--space-lg: 24px;
	--space-xl: 32px;
	--space-2xl: 48px;

	--rank-gold: #ffd700;
	--rank-silver: #c0c0c0;
	--rank-bronze: #cd7f32;
}

/* Hide Spicetify topbar only when our page is active */
body:has(.stats-page) .main-topBar-container {
	display: none;
}

/* Page shell: flex column fills custom-app height; scroll is on inner so sticky works. */
.stats-page {
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	height: 100%;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.stats-page-scroll {
	flex: 1 1 auto;
	min-height: 0;
	overflow-x: clip;
	overflow-y: auto;
	/* No top padding: sticky header must sit flush with scrollport top */
	padding: 0 var(--space-xl, 32px) var(--space-lg, 24px);
	box-sizing: border-box;
}

.stats-page-sticky {
	position: sticky;
	top: 0;
	z-index: 100;
	margin: 0 calc(-1 * var(--space-xl, 32px)) var(--space-md, 16px);
	padding: var(--space-lg, 24px) var(--space-xl, 32px) var(--space-md, 16px);
	/* Frosted glass: translucent theme color + blur keeps scrolled content
	   readable underneath while transparency themes keep their background
	   visible instead of getting an opaque slab. */
	background: rgba(var(--spice-rgb-main, 18, 18, 18), 0.72);
	-webkit-backdrop-filter: blur(16px) saturate(1.4);
	backdrop-filter: blur(16px) saturate(1.4);
	border-bottom: 1px solid rgba(var(--spice-rgb-text, 255 255 255), 0.06);
	box-sizing: border-box;
}

/* Without backdrop-filter a translucent bar would let text scroll straight
   through the header - fall back to the old solid bar. */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
	.stats-page-sticky {
		background: var(--spice-main);
		background-color: rgb(var(--spice-rgb-main));
	}
}

/* Filter Pill */
.filter-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 14px;
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	border-radius: 999px;
	font-size: 13px;
	margin-bottom: var(--space-sm, 8px);
}

.filter-pill-icon {
	display: inline-flex;
	width: 13px;
	height: 13px;
	color: var(--spice-button);
}

.filter-pill-genre {
	color: var(--spice-button);
}

.filter-pill-close {
	appearance: none;
	border: 0;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: rgba(var(--spice-rgb-text), 0.7);
	width: 18px;
	height: 18px;
	border-radius: 50%;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	line-height: 1;
	padding: 0;
}

.filter-pill-close:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.18);
	color: var(--spice-text);
}

/* Announcement Banner */
.announcement-banner {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 16px;
	margin-bottom: var(--space-md, 16px);
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.25);
	border-radius: 8px;
}

.announcement-banner-icon {
	color: var(--spice-button);
	width: 20px;
	height: 20px;
	flex-shrink: 0;
}

.announcement-banner-text {
	font-size: 13px;
	color: var(--spice-text);
	flex: 1;
}

.announcement-banner-link {
	color: var(--spice-button);
	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
	white-space: nowrap;
}

button.announcement-banner-link-btn {
	appearance: none;
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	font: inherit;
	font-size: 12px;
	font-weight: 600;
	color: var(--spice-button);
	cursor: pointer;
	text-decoration: underline;
	text-underline-offset: 2px;
	white-space: nowrap;
}

button.announcement-banner-link-btn:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.announcement-banner-dismiss {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.5);
	cursor: pointer;
	padding: 4px;
	font-size: 16px;
	line-height: 1;
}

/* Header */
.stats-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-lg, 24px);
	padding: 8px 0 12px;
	flex-wrap: wrap;
}

.stats-header-title {
	margin: 0;
	font-size: 32px;
	font-weight: 800;
	letter-spacing: -0.02em;
	line-height: 1;
	display: flex;
	align-items: center;
	color: var(--spice-text);
}

.stats-header-left {
	display: flex;
	align-items: center;
	gap: 14px;
	min-width: 0;
	flex-wrap: wrap;
	flex: 1 1 420px;
	row-gap: 6px;
}

.header-provider-pill {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.header-provider-name {
	font-size: 12px;
	font-weight: 400;
	color: rgba(var(--spice-rgb-text), 0.7);
	line-height: 1.2;
}

.stats-header-right {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
	flex: 1 1 340px;
	justify-content: flex-end;
	flex-wrap: wrap;
	row-gap: 8px;
}

.stats-header-icon-btn {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: var(--spice-text);
	width: 36px;
	height: 36px;
	border-radius: 999px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition:
		background 0.15s,
		border-color 0.15s;
	padding: 0;
}

.stats-header-icon-btn:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.stats-header-icon-btn svg {
	width: 20px;
	height: 20px;
}

.loading-status-banner {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 12px;
	padding: 8px 12px;
	border-radius: 10px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.78);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.loading-status-dot {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: var(--spice-button);
	box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.8);
	animation: loading-status-pulse 1.4s ease-out infinite;
}

@keyframes loading-status-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.6);
	}
	100% {
		box-shadow: 0 0 0 8px rgba(var(--spice-rgb-button), 0);
	}
}

/* Period tabs */
.period-tabs {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs, 4px);
	min-height: 36px;
	align-items: center;
	flex-wrap: wrap;
}

.period-tab {
	cursor: pointer;
	padding: 5px 12px;
	color: rgba(var(--spice-rgb-text), 0.6);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 500;
	transition:
		background 0.15s,
		color 0.15s;
}

.period-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.period-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	font-weight: 600;
}

.overview-card {
	background: var(--spice-card);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	border-radius: 8px;
	padding: 12px 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 6px;
	transition:
		background 0.15s,
		border-color 0.15s;
	cursor: default;
}

.overview-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.overview-card-row {
	display: flex;
	align-items: baseline;
	gap: 5px;
}

.overview-card-sub {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.overview-section {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto auto;
	gap: var(--space-md, 16px);
	align-items: stretch;
}

.overview-section--compact {
	grid-template-rows: auto;
}
.overview-hero-cell {
	grid-column: 1 / span 3;
	grid-row: 1;
}
.overview-right-block {
	grid-column: 4 / span 2;
	grid-row: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-md, 16px);
}
.overview-bottom-row {
	grid-column: 1 / span 5;
	grid-row: 2;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-md, 16px);
}

/* Top Genres */
.top-genres-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.top-genres-row {
	display: grid;
	grid-template-columns: 140px 1fr 44px;
	gap: 12px;
	align-items: center;
}

.top-genres-name {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.85);
	text-align: left;
	cursor: pointer;
	font-size: 13px;
	padding: 0;
	font-weight: 500;
	font-family: inherit;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.top-genres-name:hover {
	color: var(--spice-text);
}

.top-genres-name--active {
	color: var(--spice-button);
}

.top-genres-bar-track {
	height: 8px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 4px;
	overflow: hidden;
}

.top-genres-bar {
	height: 8px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-button), 0.4);
	transition: width 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.top-genres-bar.peak {
	background: var(--spice-button);
}

.top-genres-pct {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-variant-numeric: tabular-nums;
	text-align: right;
}

.overview-card-label {
	font-size: 10.5px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.overview-card-value {
	font-size: 22px;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1;
	color: var(--spice-text);
	font-variant-numeric: tabular-nums;
}

/* Section card wrapper */
.section-card {
	background: var(--spice-card);
	border-radius: 8px;
	padding: 20px;
	overflow: hidden;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	box-sizing: border-box;
}

.stats-page-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* Top lists grid - 3 columns side by side, responsive */
.top-lists-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: var(--space-md, 16px);
}

@media (max-width: 1200px) {
	.top-lists-grid {
		grid-template-columns: 1fr;
	}

	.overview-card {
		min-width: 80px;
	}
}

@media (max-width: 780px) {
	.overview-section {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.overview-hero-cell {
		grid-column: 1;
		grid-row: 1;
	}
	.overview-right-block {
		grid-column: 1;
		grid-row: 2;
		grid-template-columns: 1fr 1fr;
	}
	.overview-bottom-row {
		grid-column: 1;
		grid-row: 3;
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media (max-width: 600px) {
	.stats-page-scroll {
		padding: 0 var(--space-md, 16px) var(--space-lg, 24px);
	}

	.stats-page-sticky {
		margin: 0 calc(-1 * var(--space-md, 16px)) var(--space-md, 16px);
		padding: var(--space-lg, 24px) var(--space-md, 16px) var(--space-md, 16px);
	}

	.stats-header-title {
		font-size: 22px;
	}

	.stats-header {
		flex-wrap: wrap;
	}

	.overview-card {
		min-width: 70px;
		padding: 12px;
	}

	.period-tabs {
		flex-wrap: wrap;
		height: auto;
		gap: var(--space-xs, 4px);
	}

	.settings-modal {
		width: calc(100vw - 32px);
		max-width: 620px;
	}

	.recently-played-item {
		flex: 0 0 100px;
	}

	.recently-played-art {
		width: 100px;
		height: 100px;
	}

	.overview-right-block,
	.overview-bottom-row {
		grid-template-columns: 1fr 1fr;
	}

	.top-genres-row {
		grid-template-columns: 100px 1fr 36px;
		gap: 8px;
	}
}

/* Section headings */
.section-heading {
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin-bottom: var(--space-md, 16px);
}

.section-kicker {
	font-size: 11px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.section-title {
	margin: 0;
	font-size: var(--font-size-lg, 20px);
	line-height: var(--line-height-heading, 1.2);
	font-weight: 700;
	letter-spacing: -0.01em;
}

.section-header {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	line-height: var(--line-height-heading, 1.2);
	margin: 0 0 var(--space-sm, 8px);
	color: var(--spice-subtext);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Top list rows */
.top-list-row {
	display: flex;
	align-items: center;
	height: 64px;
	box-sizing: border-box;
	padding: 8px 6px;
	cursor: pointer;
	gap: 12px;
	border-radius: 6px;
	transition: background 0.15s;
	overflow: hidden;
}

.top-list-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

/* Rank badges */
.rank-number {
	width: 28px;
	text-align: center;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-subtext);
	flex-shrink: 0;
}

.rank-gold,
.rank-silver,
.rank-bronze {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: #1a1a1a;
	flex-shrink: 0;
}

.rank-gold {
	background: var(--rank-gold, #ffd700);
}
.rank-silver {
	background: var(--rank-silver, #c0c0c0);
}
.rank-bronze {
	background: var(--rank-bronze, #cd7f32);
}

.activity-chart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
}

.activity-chart-peak {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.activity-chart-peak span {
	color: var(--spice-button);
	font-weight: 700;
}

.activity-chart {
	display: flex;
	align-items: flex-end;
	gap: 2px;
	height: 160px;
	padding: 8px 0;
}

.activity-bar {
	flex: 1;
	background: rgba(var(--spice-rgb-button), 0.4);
	border-radius: 6px 6px 0 0;
	min-width: 4px;
	transition: height 0.2s ease;
	cursor: pointer;
}

.activity-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.7);
}

.activity-bar.peak {
	background: var(--spice-button);
}

.activity-chart-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.consistency-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 10px;
}

.consistency-metric {
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
}

.consistency-metric-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
}

.consistency-metric-value {
	margin-top: 6px;
	font-size: 24px;
	font-weight: 700;
	line-height: 1;
}

.consistency-metric-sub {
	margin-top: 6px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.62);
}

.consistency-metric--accent {
	border-color: rgba(var(--spice-rgb-button), 0.3);
	background: rgba(var(--spice-rgb-button), 0.06);
}

.consistency-metric--accent .consistency-metric-value {
	color: #1ed760;
}

.consistency-footer {
	margin-top: 12px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
}

.consistency-coverage-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
	margin-bottom: 6px;
}

.consistency-coverage-row {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
}

.consistency-coverage-track {
	flex: 1;
	height: 8px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
	overflow: hidden;
}

.consistency-coverage-fill {
	height: 100%;
	background: var(--spice-button);
}

.consistency-sparkline-bars {
	height: 44px;
	display: flex;
	align-items: flex-end;
	gap: 3px;
}

.consistency-sparkline-bar-wrap {
	flex: 1;
	display: flex;
	align-items: flex-end;
	height: 100%;
	min-height: 44px;
}

.consistency-sparkline-bar {
	width: 100%;
	border-radius: 3px 3px 0 0;
	background: rgba(var(--spice-rgb-button), 0.65);
	transition: background 0.15s ease;
}

.consistency-sparkline-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.85);
}

.consistency-sparkline-bar.peak {
	background: var(--spice-button);
}

.consistency-week-split-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.consistency-week-chip {
	padding: 10px 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.consistency-week-chip strong {
	font-size: 15px;
	color: var(--spice-text);
}

/* Recently played */
.recently-played {
	display: flex;
	gap: 14px;
	overflow-x: auto;
	padding-bottom: 4px;
	margin-right: -24px;
	padding-right: 24px;
}

.recently-played::-webkit-scrollbar {
	display: none;
}

.recently-played-item {
	flex: 0 0 132px;
	width: 132px;
	min-width: 132px;
	max-width: 132px;
	cursor: pointer;
}

.recently-played-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
	object-fit: cover;
	background: var(--spice-main);
}

.recently-played-name {
	margin-top: 8px;
	display: block;
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-artist {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-time {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.4);
	margin-top: 2px;
}

/* Loading skeletons */
.skeleton-shimmer {
	background: var(--spice-card);
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

@keyframes shimmer {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}

.skeleton-text {
	height: 14px;
	margin: 4px 0;
}

/* Recently played skeleton */
.recently-played-skeleton-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
}

.recently-played-skeleton-text {
	width: 100px;
	height: 10px;
	border-radius: 2px;
	margin-top: 8px;
}

.recently-played-skeleton-subtext {
	width: 70px;
	height: 8px;
	border-radius: 2px;
	margin-top: 4px;
}

/* Empty state */
.empty-state {
	text-align: center;
	padding: 48px 16px;
	color: var(--spice-subtext);
}

/* Inline error card */
.inline-error-card {
	display: flex;
	align-items: flex-start;
	gap: 14px;
	padding: 18px 20px;
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.18);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.02);
}

.inline-error-content {
	flex: 1;
	min-width: 0;
}

.inline-error-title {
	font-size: 13px;
	font-weight: 600;
}

.inline-error-body {
	font-size: var(--font-size-sm);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-top: 2px;
}

.inline-error-countdown {
	margin-top: 8px;
	font-size: var(--font-size-sm);
	color: var(--spice-button);
	font-variant-numeric: tabular-nums;
	font-weight: 600;
}

.inline-error-cta {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc), 0.16);
	background: transparent;
	color: var(--spice-text);
	padding: 7px 14px;
	font-size: var(--font-size-sm);
	font-weight: 600;
	border-radius: 999px;
	cursor: pointer;
	flex-shrink: 0;
	align-self: center;
}

/* Settings overlay/modal */
.settings-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.settings-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 620px;
	max-width: calc(100vw - 32px);
	max-height: 80vh;
	overflow-y: auto;
	padding: 24px;
}

.settings-modal.update-modal {
	width: 560px;
	max-height: 85vh;
}

.update-modal-status {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
	margin: 0 0 12px;
	line-height: 1.45;
}

.update-modal-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin: 0 0 8px;
	line-height: 1.45;
}

.update-modal-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.update-modal-actions-top {
	margin-bottom: 16px;
}

.update-modal-pref-row {
	margin-bottom: 4px;
}

.update-modal-install-short {
	margin: 8px 0 12px;
}

.update-modal-changelog-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
	padding-top: 8px;
	border-top: 1px solid var(--spice-misc);
}

.update-modal-changelog-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error, #e83b3b);
	margin: 0 0 8px;
}

.update-modal-changelog {
	max-height: min(40vh, 320px);
	overflow: auto;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
}

.markdown-lite h3 {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 16px 0 8px;
}

.markdown-lite h3:first-child {
	margin-top: 0;
}

.markdown-lite p {
	margin: 0 0 8px;
}

.markdown-lite code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	padding: 1px 4px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-text), 0.08);
}

.markdown-lite a {
	color: var(--spice-button);
}

.settings-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.settings-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
}

/* Settings tabs */
.settings-tabs {
	display: flex;
	gap: 8px;
	border-bottom: 1px solid var(--spice-misc);
	margin-bottom: 16px;
}

.settings-tab {
	cursor: pointer;
	padding: 8px 12px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	white-space: nowrap;
}

.settings-tab:hover {
	color: var(--spice-text);
}

.settings-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Settings rows */
.settings-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 0;
	border-bottom: 1px solid var(--spice-misc);
}

.settings-row:last-child {
	border-bottom: none;
}

.settings-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.settings-sublabel {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 2px;
}

/* Settings groups: kicker header + rows, mirrors the dashboard section anatomy */
.settings-group {
	margin-top: 20px;
}

.settings-group:first-child {
	margin-top: 0;
}

.settings-group > .section-header {
	margin-bottom: 0;
	padding-bottom: 6px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
}

.settings-group .settings-row:last-child {
	border-bottom: none;
}

/* Option group: joined segmented pills for small option sets */
.option-group {
	display: inline-flex;
	flex-wrap: wrap;
	/* Hug the buttons even inside stacked rows (align-items: stretch) */
	width: fit-content;
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	overflow: hidden;
}

.option-group-btn {
	flex: 0 0 auto;
	background: none;
	border: none;
	border-left: 1px solid var(--spice-misc);
	padding: 4px 12px;
	min-width: 36px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
}

.option-group-btn:first-child {
	border-left: none;
}

.option-group-btn:hover {
	color: var(--spice-text);
}

.option-group-btn.active {
	background: rgba(var(--spice-rgb-button, 30, 215, 96), 0.2);
	color: var(--spice-text);
	font-weight: 700;
}

/* Text inputs in settings */
.settings-input {
	flex: 1;
	min-width: 0;
	padding: 8px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-sm, 14px);
}

.health-dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	display: inline-block;
	flex-shrink: 0;
	cursor: default;
}

.health-green {
	background: #1ed760;
}

.health-yellow {
	background: #f59b23;
}

.health-red {
	background: #e83b3b;
}

/* Legacy settings-btn kept for backwards compatibility */
.settings-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: var(--spice-subtext);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition:
		color 0.15s,
		background 0.15s;
	width: 32px;
	height: 32px;
}

.settings-btn:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-btn svg {
	width: 20px;
	height: 20px;
}

/* Primary/destructive buttons */
.btn-primary {
	background: var(--spice-button);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-primary:hover {
	opacity: 0.85;
}

.btn-destructive {
	background: var(--spice-notification-error);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-destructive:hover {
	opacity: 0.85;
}

.btn-secondary {
	background: none;
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
}

.btn-secondary:hover {
	color: var(--spice-text);
	border-color: var(--spice-text);
}

/* Compact action buttons inside settings rows */
.settings-row .btn-primary,
.settings-row .btn-secondary,
.settings-row .btn-destructive {
	padding: 4px 12px;
	font-size: var(--font-size-sm, 12px);
	white-space: nowrap;
}

/* Album art thumbnail */
.track-art {
	width: 44px;
	height: 44px;
	border-radius: 4px;
	object-fit: cover;
	background: var(--spice-card);
	flex-shrink: 0;
}

.track-art--round {
	border-radius: 50%;
}

/* Import progress */
.import-progress {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-progress-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-subtext);
}

.import-progress-bar {
	width: 100%;
	height: 4px;
	-webkit-appearance: none;
	appearance: none;
	border-radius: 2px;
	background: var(--spice-misc);
}

.import-progress-bar::-webkit-progress-bar {
	background: var(--spice-misc);
	border-radius: 2px;
}

.import-progress-bar::-webkit-progress-value {
	background: var(--spice-button);
	border-radius: 2px;
}

/* Import result card */
.import-result-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-result-row {
	display: flex;
	align-items: baseline;
	gap: 4px;
	font-size: var(--font-size-md, 14px);
}

.import-result-count {
	font-weight: 700;
}

.import-result-count--success {
	color: var(--spice-button);
}

.import-result-count--neutral {
	color: var(--spice-subtext);
}

.import-result-count--error {
	color: var(--spice-notification-error);
}

.import-result-label {
	color: var(--spice-subtext);
}

.import-result-errors {
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.import-result-actions {
	margin-top: 8px;
	display: flex;
	justify-content: flex-end;
}

/* Provider tab */

.provider-status-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.tier-badge {
	display: inline-block;
	border-radius: 4px;
	padding: 2px 8px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	line-height: 1.4;
}

.tier-badge--free {
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
}

.tier-badge--plus {
	color: var(--spice-button);
	background: rgba(var(--spice-rgb-button), 0.15);
}

.provider-radio-row {
	display: flex;
	align-items: center;
	min-height: 44px;
	padding: 8px 12px;
	cursor: pointer;
	gap: 12px;
	border-radius: 4px;
	border-left: 2px solid transparent;
	transition: background 0.1s;
}

.provider-radio-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.provider-radio-row.active {
	border-left: 2px solid var(--spice-button);
}

.provider-radio-row.active .settings-label {
	color: var(--spice-text);
}

.provider-connect-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error);
	margin-top: 4px;
}

/* Activity tabs */
.activity-tabs {
	display: flex;
	gap: 0;
	margin-bottom: 12px;
}

.activity-tab {
	cursor: pointer;
	padding: 4px 8px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	transition: color 0.15s;
}

.activity-tab:hover {
	color: var(--spice-text);
}

.activity-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Weekday chart */
.weekday-chart {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	height: 160px;
	padding: 8px 0;
}

.weekday-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}

.weekday-bar-area {
	flex: 1;
	display: flex;
	align-items: flex-end;
	width: 100%;
	min-height: 0;
}

.weekday-bar-area .activity-bar {
	width: 100%;
}

.weekday-label {
	margin-top: 6px;
	font-size: 11px;
	color: var(--spice-subtext);
	text-align: center;
}

/* Calendar heatmap */
.heatmap-container {
	padding-top: 18px;
}

.heatmap-scroll-wrap {
	overflow-x: auto;
}

.heatmap-scroll-inner {
	min-width: min-content;
	width: fit-content;
	margin: 0 auto;
}

.heatmap-shrink .heatmap-scroll-wrap {
	overflow: hidden;
}

.heatmap-shrink .heatmap-scroll-inner {
	min-width: 0;
	width: fit-content;
	margin: 0 auto;
}

.heatmap-month-labels {
	display: grid;
	gap: 3px;
	font-size: 10px;
	color: rgba(var(--spice-rgb-text), 0.5);
	height: 16px;
	margin-bottom: 4px;
}

.heatmap-grid {
	display: grid;
	gap: 3px;
}

.heatmap-week {
	display: grid;
	grid-template-rows: repeat(7, 16px);
	gap: 3px;
}

.heatmap-cell {
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

.heatmap-legend {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	margin-top: 10px;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.heatmap-legend-swatch {
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 3px;
}

/* Streak callout */
.streak-callout {
	margin-top: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

/* Setup wizard */
.wizard-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 520px;
	max-width: calc(100vw - 48px);
	padding: 24px;
	text-align: center;
}

.wizard-page {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: var(--space-md, 16px) 0 var(--space-xl, 32px);
}

.wizard-modal--page {
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.wizard-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0 0 8px 0;
	line-height: 1.2;
}

.wizard-subtitle {
	font-size: var(--font-size-md, 14px);
	font-weight: 400;
	color: var(--spice-subtext);
	margin: 0 0 24px 0;
	line-height: 1.5;
}

.wizard-provider-cards {
	display: flex;
	flex-direction: row;
	gap: 16px;
}

.wizard-provider-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 24px;
	background: transparent;
	border: 1px solid var(--spice-misc);
	border-radius: 8px;
	cursor: pointer;
	min-height: 44px;
	transition: background 0.1s;
	text-align: center;
	color: inherit;
	font-family: inherit;
}

.wizard-provider-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.wizard-provider-name {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	line-height: 1.2;
}

.wizard-provider-desc {
	font-size: var(--font-size-sm, 12px);
	font-weight: 400;
	color: var(--spice-subtext);
	line-height: 1.4;
}

.wizard-provider-cta {
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: var(--spice-button);
	margin-top: auto;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.wizard-statsfm-help {
	text-align: left;
	gap: 6px;
	margin-bottom: 14px;
}

.wizard-statsfm-form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.wizard-statsfm-input {
	width: 100%;
	padding: 10px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-md, 14px);
}

.wizard-statsfm-actions {
	display: flex;
	justify-content: space-between;
	gap: 8px;
}

/* Threshold slider */
.threshold-slider {
	padding: 10px 24px 26px;
}

.threshold-slider-rail {
	position: relative;
	height: 28px;
	cursor: pointer;
	touch-action: none;
}

.threshold-slider-track {
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	height: 4px;
	transform: translateY(-50%);
	border-radius: 2px;
	background: var(--spice-card);
	border: 1px solid var(--spice-misc);
}

.threshold-slider-fill {
	position: absolute;
	left: 0;
	top: 50%;
	height: 4px;
	transform: translateY(-50%);
	border-radius: 2px;
	background: var(--spice-button);
	opacity: 0.5;
	pointer-events: none;
}

.threshold-slider-handle {
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	min-width: 40px;
	padding: 3px 6px;
	border-radius: 4px;
	background: var(--spice-button);
	color: var(--spice-main);
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	text-align: center;
	user-select: none;
	cursor: grab;
	z-index: 1;
}

.threshold-slider-handle:active {
	cursor: grabbing;
}

.threshold-slider-presets {
	position: relative;
	height: 16px;
	margin-top: 6px;
}

.threshold-slider-preset {
	position: absolute;
	transform: translateX(-50%);
	background: none;
	border: none;
	padding: 0;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	cursor: pointer;
	user-select: none;
}

.threshold-slider-preset:hover {
	color: var(--spice-text);
}

.threshold-slider-preset.active {
	color: var(--spice-text);
	font-weight: 700;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Settings sortable rows + tiles
   Scoped under .display-tab (DisplayTab root). NEW system does NOT
   restore any torn-down dashboard drag CSS. No portal, no ancestor
   transforms, no edge-scroll. Drop line for rows, outline for tiles.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.display-tab .sortable-row {
	display: flex;
	align-items: center;
	min-height: 40px;
	padding: 0;
	gap: 8px;
	position: relative;
	user-select: none;
	touch-action: none;
}

.display-tab .sortable-row-label {
	flex: 1 1 auto;
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.display-tab .sortable-row-toggle {
	flex: 0 0 auto;
}

.display-tab .settings-drag-handle {
	flex: 0 0 auto;
	width: 24px;
	height: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
	border: none;
	cursor: grab;
	color: var(--spice-subtext);
	border-radius: 4px;
}
.display-tab .settings-drag-handle:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 128, 128, 128), 0.12);
}
.display-tab .settings-drag-handle:active {
	cursor: grabbing;
}

/* Drop-slot indicator line between rows (Decision 5).
   At rest (no active drag in this list): invisible.
   During an active drag in the list (parent has data-drag-active="true"):
   ALL drop-lines show subtle (opacity 0.25) so user can see every drop slot.
   The targeted slot's line glows full opacity + box-shadow. */
.display-tab .settings-drop-line {
	height: 2px;
	margin: 0;
	background: var(--spice-button-active);
	opacity: 0;
	transition:
		opacity 100ms ease,
		box-shadow 100ms ease;
	pointer-events: none;
}
.display-tab [data-drag-active="true"] .settings-drop-line {
	opacity: 0.25;
}
.display-tab [data-drag-active="true"] .settings-drop-line[data-active="true"] {
	opacity: 1;
	box-shadow: 0 0 6px var(--spice-button-active);
}

/* Mini-grid tiles (Overview 2x2, Top Lists 1x3).
   overflow: hidden clips the dragged tile's translate3d so it can't escape
   the modal; drop logic uses live pointer position so reorder still works
   when the visible tile is clipped at the container edge. */
.display-tab .sortable-grid {
	display: grid;
	gap: 8px;
	margin-top: 8px;
	overflow: hidden;
}
.display-tab .sortable-grid--2x2 {
	grid-template-columns: 1fr 1fr;
}
.display-tab .sortable-grid--1x3 {
	grid-template-columns: 1fr 1fr 1fr;
}

/* Overview settings: mirrors actual overview layout (hero + 2x2 right block + 1x3 bottom row) */
.display-tab .overview-settings-top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 8px;
	margin-top: 8px;
}
.display-tab .overview-settings-top .sortable-grid {
	margin-top: 0;
}
.display-tab .overview-settings-hero {
	border: 1px dashed var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	opacity: 0.6;
}
.display-tab .overview-settings-hero-sub {
	font-size: 10px;
	opacity: 0.5;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.display-tab .sortable-tile {
	min-height: 80px;
	padding: 12px;
	border: 1px solid var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	cursor: grab;
	user-select: none;
	touch-action: none;
	position: relative;
}
.display-tab .sortable-tile:active {
	cursor: grabbing;
}

.display-tab .sortable-tile-label {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-text);
	text-align: center;
}

.display-tab .sortable-tile-toggle {
	/* Stops drag activation; cursor reverts to default for this hit zone. */
	cursor: default;
}

/* Tile drop target outline (Decision 5, inset so grid does not shift) */
.display-tab .sortable-tile[data-drop-target="true"] {
	outline: 2px solid var(--spice-button-active);
	outline-offset: -2px;
}

.play-count-widget-anchor {
	display: flex;
	align-items: center;
	pointer-events: auto;
	margin-left: 8px;
	flex-shrink: 0;
}

.play-count-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-button), 0.14);
	color: var(--spice-button);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	font-size: 11px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-pill:hover {
	background: rgba(var(--spice-rgb-button), 0.22);
}

.play-count-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--spice-button);
}

.play-count-bubble {
	position: relative;
	cursor: pointer;
}
.play-count-bubble-icon {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: rgba(var(--spice-rgb-button), 0.28);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--spice-button);
	font-size: 12px;
	box-shadow:
		0 0 0 1px rgba(var(--spice-rgb-button), 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.12);
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.45);
}
.play-count-badge {
	position: absolute;
	top: -3px;
	right: -4px;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	background: var(--spice-button);
	color: #000;
	border-radius: 999px;
	font-size: 10px;
	font-weight: 800;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	font-variant-numeric: tabular-nums;
}

.play-count-minimal {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 11px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	padding: 3px 7px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.06);
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-minimal:hover {
	background: rgba(255, 255, 255, 0.1);
}

.play-count-badge--new {
	font-size: 8px;
	letter-spacing: 0.04em;
	padding: 0 3px;
	min-width: 22px;
}

.play-count-pill--first {
	color: rgba(var(--spice-rgb-text), 0.92);
	border-color: rgba(var(--spice-rgb-button), 0.35);
}

.world-chart-text {
	flex: 1;
	min-width: 0;
}

.world-chart-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-sub {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-stats {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	flex-shrink: 0;
	min-width: 52px;
}

.world-stage-skeleton {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* World: podium card (hero-accented) + Top-15 ladder card */
.world-podium-card {
	background:
		radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button), 0.14), transparent 52%), var(--spice-card);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
}

.world-stage-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-md, 16px);
	flex-wrap: wrap;
}

.world-stage-skeleton {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

.world-podium {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: end;
	justify-items: center;
	gap: var(--space-md, 16px);
	padding: var(--space-md, 16px) 0 var(--space-sm, 8px);
}

.world-podium-cell {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	min-width: 0;
	max-width: 220px;
	gap: 4px;
}

.world-podium-artwrap {
	position: relative;
	transition: transform 0.15s ease-out;
}

.world-podium-artwrap:hover {
	transform: translateY(-2px);
}

.world-podium-art-btn {
	appearance: none;
	border: 0;
	padding: 0;
	background: transparent;
	cursor: pointer;
	border-radius: 10px;
	display: block;
}

.world-podium-art-btn:focus-visible {
	outline: 2px solid rgba(var(--spice-rgb-button), 0.7);
	outline-offset: 2px;
}

.world-podium-play {
	position: absolute;
	right: 6px;
	bottom: 6px;
	opacity: 0;
	transition: opacity 0.15s;
}

.world-podium-artwrap:hover .world-podium-play,
.world-podium-artwrap:focus-within .world-podium-play {
	opacity: 1;
}

.world-podium-rank {
	font-size: 18px;
	font-weight: 800;
	line-height: 1;
	margin-top: 6px;
	font-variant-numeric: tabular-nums;
}

.world-podium-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-podium-cell[data-rank="1"] .world-podium-title {
	font-size: 16px;
}

.world-podium-sub {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-podium-stat {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.72);
}

.world-ladder {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(6, auto);
	grid-auto-flow: column;
	column-gap: var(--space-xl, 32px);
	row-gap: 0;
}

@media (max-width: 1100px) {
	.world-ladder {
		grid-template-columns: 1fr;
		grid-template-rows: none;
		grid-auto-flow: row;
	}
}

@media (max-width: 780px) {
	.world-podium {
		gap: var(--space-sm, 8px);
	}

	.world-podium-cell {
		max-width: 160px;
	}
}

.world-page-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: var(--space-md, 16px);
	flex-wrap: wrap;
	margin-bottom: 0;
}

.world-page-header .section-title {
	font-size: var(--font-size-2xl, 28px);
}

.world-chart-indicator {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 600;
}

.world-chart-indicator-glyph {
	font-size: 9px;
}

.world-chart-indicator[data-dir="up"] {
	color: #1ed760;
}

.world-chart-indicator[data-dir="down"] {
	color: #e83b3b;
}

.world-chart-indicator[data-dir="new"] {
	color: #f59b23;
}

.world-chart-playbtn {
	appearance: none;
	border: 0;
	cursor: pointer;
	font: inherit;
	background: var(--spice-button);
	color: var(--spice-button-text, #000);
	border-radius: 999px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition:
		transform 0.1s,
		background 0.15s;
}

.world-chart-playbtn:hover {
	background: var(--spice-button-active, var(--spice-button));
	transform: scale(1.06);
}

@media (max-width: 780px) {
	.world-page-header {
		flex-direction: column;
		align-items: flex-start;
	}
}

.world-charts-source {
	margin-top: var(--space-md, 16px);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.45);
}

.world-charts-empty {
	text-align: center;
	padding: var(--space-2xl, 48px) var(--space-lg, 24px);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.03);
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-empty-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: var(--space-sm, 8px);
}

.world-charts-empty-body {
	font-size: var(--font-size-md, 14px);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-bottom: var(--space-md, 16px);
	max-width: 320px;
	margin-inline: auto;
}

.tour-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.55);
}

.tour-overlay--targeted {
	background: transparent;
	pointer-events: none;
}

.tour-spotlight {
	pointer-events: none;
	border: 2px solid var(--spice-button);
	animation: tour-pulse 1.8s ease-in-out infinite;
}

@keyframes tour-pulse {
	0%,
	100% {
		border-color: var(--spice-button);
	}
	50% {
		border-color: rgba(255, 255, 255, 0.4);
	}
}

.tour-popover {
	width: 280px;
	max-width: calc(100vw - 16px);
	padding: 14px;
	background: #1f1f1f;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
	text-align: left;
	pointer-events: auto;
}

.tour-popover--positioned {
	position: fixed;
}

.tour-step-counter {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--spice-button);
	margin-bottom: 4px;
}

.tour-label {
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	margin-bottom: 4px;
}

.tour-text {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.5;
}

.tour-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 14px;
}

.tour-btn-skip,
.tour-btn-back {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(255, 255, 255, 0.5);
	font-size: 12px;
	cursor: pointer;
	padding: 0;
}

.tour-btn-next {
	appearance: none;
	border: 0;
	background: var(--spice-button);
	color: #000;
	font-size: 12px;
	font-weight: 700;
	padding: 5px 12px;
	border-radius: 999px;
	cursor: pointer;
}

.tour-dots {
	display: flex;
	gap: 4px;
}

.tour-dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.2);
}

.tour-dot.active {
	background: var(--spice-button);
}

.share-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.share-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: min(720px, calc(100vw - 48px));
	max-width: calc(100vw - 48px);
	max-height: 90vh;
	overflow-y: auto;
	padding: 24px;
}

.share-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.share-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0;
}

.share-tabs-row {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}

.share-control-group {
	margin-bottom: 12px;
}

.share-control-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.55);
	margin-bottom: 6px;
}

.share-control-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin: 6px 0 12px;
}

.share-variant-tab,
.share-size-tab {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s,
		border-color 0.15s;
}

.share-variant-tab:hover,
.share-size-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.share-variant-tab.active,
.share-size-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.2);
}

.share-size-tab:disabled {
	opacity: 0.35;
	cursor: not-allowed;
	pointer-events: none;
}

.share-preview-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: min(58vh, 640px);
	min-height: 320px;
	overflow: auto;
	padding: 16px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-main), 0.3);
}

.share-preview-image {
	max-width: 100%;
	max-height: min(54vh, 600px);
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 10px;
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.share-preview-status {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

.share-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	margin-top: 12px;
}

.share-action-btn {
	min-width: 140px;
}

/* App footer */
.stats-app-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-sm, 8px);
	margin-top: var(--space-xl, 32px);
	padding-top: var(--space-md, 16px);
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
}

.stats-app-footer-links {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--space-sm, 8px);
}

.stats-app-footer-link {
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: none;
}

.stats-app-footer-link:hover {
	color: var(--spice-button-active, var(--spice-button));
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-credit {
	font-style: italic;
}

.stats-app-footer-meta {
	display: inline-flex;
	align-items: center;
	gap: 12px;
}

.stats-app-footer-version {
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.45);
}

.stats-app-footer-install-link {
	appearance: none;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
	font: inherit;
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-install-link:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.update-modal-repo-hint {
	margin-bottom: 0;
}

.settings-about-command-block {
	margin-bottom: 14px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: rgba(var(--spice-rgb-main), 0.35);
	overflow: hidden;
}

.settings-about-command-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px 10px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.settings-about-command-label {
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	color: var(--spice-subtext);
}

.settings-about-copy-btn {
	flex-shrink: 0;
	padding: 4px 12px;
	font-size: 12px;
}

.settings-about-command-pre {
	margin: 0;
	padding: 12px;
	font-family: ui-monospace, monospace;
	font-size: 11px;
	line-height: 1.45;
	color: rgba(var(--spice-rgb-text), 0.92);
	white-space: pre-wrap;
	word-break: break-all;
	max-height: 120px;
	overflow: auto;
}

.settings-about-hint {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 16px;
	line-height: 1.5;
}

.settings-inline-link {
	color: var(--spice-button);
}
`;function di(){let e=document.getElementById("listening-stats-styles");e&&e.remove();let t=document.createElement("style");t.id="listening-stats-styles",t.textContent=Rf,document.head.appendChild(t)}be();function Cf(){try{let e=localStorage.getItem(M.LASTFM_CONFIG);if(!e)return null;let t=JSON.parse(e);return typeof t.apiKey=="string"&&typeof t.username=="string"?{apiKey:t.apiKey,username:t.username}:null}catch{return null}}function If(){return Cf()?.username??null}async function Nf(e,t){let r=Cf();return r?Fl(r.apiKey,r.username,e,t):null}be();var Df="https://api.stats.fm/api/v1",MS=50;function $S(e){let t=e.match(/^spotify:track:(.+)$/i);return t?t[1]:null}function US(e){return{"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[e]??null}async function Of(e){try{let t=await fetch(e.toString(),{headers:{Accept:"application/json"}});return t.ok?await t.json():null}catch{return null}}var pi=e=>e.trim().toLowerCase(),_f=new Map;async function FS(e){let t=_f.get(e.uri);if(t)return t;let r=$S(e.uri);if(!r||!e.name.trim())return null;let n=new URL(`${Df}/search/elastic`);n.searchParams.set("query",e.name.trim()),n.searchParams.set("type","track"),n.searchParams.set("limit",String(MS));let i=(await Of(n))?.items?.tracks;if(!Array.isArray(i))return null;let a=pi(e.name),o=pi(e.artistName),l=new Set;for(let d of i){let u=d.externalIds?.spotify?.includes(r)??!1,p=pi(d.name)===a&&!!o&&(d.artists??[]).some(f=>pi(f.name)===o);(u||p)&&Number.isInteger(d.id)&&l.add(d.id)}let c=[...l];return _f.set(e.uri,c),c}async function Lf(e,t,r){let n=e.trim();if(!n)return null;let s=await FS(t);if(!s||s.length===0)return null;let i=new URL(`${Df}/users/${encodeURIComponent(n)}/streams/tracks/list/stats`);i.searchParams.set("ids",s.join(",")),i.searchParams.set("range",r);let a=await Of(i);return!a?.items||typeof a.items!="object"?null:Object.values(a.items).reduce((o,l)=>o+(Number(l?.count)||0),0)}async function Mf(e,t){return Lf(e,t,"lifetime")}async function $f(e,t,r){let n=US(r);return n?Lf(e,t,n):null}function Uf(){try{let e=localStorage.getItem(M.STATSFM_CONFIG);if(!e)return null;let t=JSON.parse(e);return typeof t.username=="string"?{username:t.username,isPlus:t.isPlus===!0}:null}catch{return null}}je();be();Gt();var{React:it}=Spicetify;function BS(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function Ff({count:e,variant:t,firstPlayedAt:r,periodStreams:n,periodLabel:s,showFirstListen:i=!1}){if(t==="off"||e<1&&!i)return null;let a="No plays in your tracked history for this track yet (skips excluded). Count updates after a qualifying listen.";if(i&&e<1){let u=(p,f,m)=>it.createElement("div",{className:p,title:m},f);return t==="bubble"?u("play-count-bubble",[it.createElement("div",{key:"i",className:"play-count-bubble-icon"},"\u25B6"),it.createElement("span",{key:"b",className:"play-count-badge play-count-badge--new"},"NEW")],a):t==="minimal"?u("play-count-minimal","New",a):u("play-count-pill play-count-pill--first",[it.createElement("span",{key:"d",className:"play-count-dot"}),it.createElement("span",{key:"t"},"New play")],a)}let l=`Played ${e} ${e===1?"time":"times"}`;r!=null&&(l+=` \xB7 first on ${BS(r)}`),n!=null&&s&&(l+=` \xB7 ${n} in ${s}`);let c=e===1?"1 play":`${e} plays`,d=n!=null&&s?it.createElement("span",{style:{marginLeft:6,fontSize:"0.85em",fontWeight:500,color:"rgba(var(--spice-rgb-text), 0.55)"}},`\xB7 ${n} ${s}`):null;if(t==="bubble")return it.createElement("div",{className:"play-count-bubble",title:l},it.createElement("div",{className:"play-count-bubble-icon"},"\u25B6"),it.createElement("span",{className:"play-count-badge"},e),n!=null&&s?it.createElement("span",{style:{marginLeft:4,fontSize:10,color:"rgba(var(--spice-rgb-text), 0.55)"}},`${n}`):null);if(t==="minimal"){let u=n!=null&&s?` (${n} ${s})`:"";return it.createElement("div",{className:"play-count-minimal",title:l},`\xD7${e}${u}`)}return it.createElement("div",{className:"play-count-pill",title:l},it.createElement("span",{className:"play-count-dot"}),c,d)}var{React:_o}=Spicetify,{useState:No,useEffect:Yr,useCallback:WS,useRef:HS}=_o;function zS(){let[e,t]=No(null),[r,n]=No(()=>Spicetify.Player.data?.item?.uri??null),[s,i]=No(0),a=HS(0),o=WS(async l=>{let c=++a.current,d=u=>{a.current===c&&t(u)};try{let u=Re(),p=await ge.playEvents.where("trackUri").equals(l).filter(y=>y.type!=="skip").sortBy("startedAt"),f=p.length,m=p[0]?.startedAt??null,g=localStorage.getItem(M.ACTIVE_PROVIDER)??"local",h=Spicetify.Player.data?.item,b=h?.name,T=h?.metadata?.artist_name;if(g==="statsfm"){let y=Uf();if(y&&b&&T){let v={uri:l,name:b,artistName:T},k=await Mf(y.username,v),S=null,w=null;if(u.playCountShowPeriodStreams){let _=y.isPlus?bs:ht,N=bn("statsfm",_);w=N.label,S=await $f(y.username,v,N.id)}let A=k??f,P=k!=null?null:m;d({count:A,firstPlayedAt:P,periodStreams:S,periodLabel:w});return}}if(g==="lastfm"&&If()&&b&&T){let y=await Nf(T,b),v=y??f,k=y!=null?null:m;d({count:v,firstPlayedAt:k,periodStreams:null,periodLabel:null});return}d({count:f,firstPlayedAt:m,periodStreams:void 0,periodLabel:void 0})}catch{d(null)}},[]);return Yr(()=>{r?o(r):(a.current++,t(null))},[r,o,s]),Yr(()=>{let l=()=>{let c=Spicetify.Player.data?.item?.uri??null;n(c)};return Spicetify.Player.addEventListener("songchange",l),()=>Spicetify.Player.removeEventListener("songchange",l)},[]),Yr(()=>{let l=()=>{r&&o(r)};return window.addEventListener(H.PLAY_RECORDED,l),()=>window.removeEventListener(H.PLAY_RECORDED,l)},[r,o]),Yr(()=>{let l=()=>i(c=>c+1);return window.addEventListener(H.PROVIDER_CHANGED,l),()=>window.removeEventListener(H.PROVIDER_CHANGED,l)},[]),Yr(()=>{let l=()=>i(c=>c+1);return window.addEventListener(H.DASHBOARD_PERIOD_CHANGED,l),()=>window.removeEventListener(H.DASHBOARD_PERIOD_CHANGED,l)},[]),Yr(()=>{let l=()=>i(c=>c+1);return window.addEventListener(H.PREFS_CHANGED,l),()=>window.removeEventListener(H.PREFS_CHANGED,l)},[]),e}function Bf(){let e=zS(),t=Re();if(t.playCountVariant==="off"||!e)return null;let r=t.playCountShowPeriodStreams&&e.count<1;return e.count<1&&!r?null:_o.createElement("div",{className:"play-count-widget-anchor"},_o.createElement(Ff,{count:e.count,variant:t.playCountVariant,firstPlayedAt:e.firstPlayedAt,periodStreams:e.periodStreams??void 0,periodLabel:e.periodLabel??void 0,showFirstListen:r}))}var Do="listening-stats-widget-root",Wf=[".main-nowPlayingWidget-nowPlaying",'[data-testid="now-playing-widget"]',".main-nowPlayingBar-left"],KS=Wf.slice(0,2).join(", ");function GS(){for(let e of Wf){let t=document.querySelector(e);if(t)return t}return null}function VS(e){let t=null,r=null,n=()=>{let s=document.getElementById(Do);if(s&&s!==e){t?.disconnect(),r!==null&&clearInterval(r),e.remove();return}let i=e.parentElement;if(e.isConnected&&i?.matches(KS)){e.nextElementSibling&&i.appendChild(e);return}let a=GS();a&&(i===a&&!e.nextElementSibling||a.appendChild(e))};n(),t=new MutationObserver(n),t.observe(document.body,{childList:!0,subtree:!0}),r=setInterval(n,2e3)}function Hf(){if(document.getElementById(Do))return;di();let e=document.createElement("div");e.id=Do,e.style.display="contents",document.body.appendChild(e),VS(e);let t=Spicetify.React.createElement(qr,{silent:!0},Spicetify.React.createElement(Bf)),r=Spicetify.ReactDOM;typeof r.createRoot=="function"?r.createRoot(e).render(t):r.render?.(t,e)}var{React:zf}=Spicetify;function jS(){return di(),Hf(),zf.createElement(qr,{appVersion:"2.1.5"},zf.createElement(Af))}function qS(){}return Yf(YS);})();
var { render, unmount } = ListeningStatsApp;
