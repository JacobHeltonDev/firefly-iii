import{d as l,g as i,l as r}from"./load-translations-23553922.js";import{I as s}from"./vendor-e194ad60.js";let t,d=function(){return{entries:[],init(){Promise.all([i("language","en_US")]).then(e=>{t=new s;const o=e[0].replace("-","_");t.locale=o,r(t,o).then(()=>{})})}}},a={transactions:d,dates:l};function n(){Object.keys(a).forEach(e=>{console.log(`Loading page component "${e}"`);let o=a[e]();Alpine.data(e,()=>o)}),Alpine.start()}document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),n()});window.bootstrapped&&(console.log("Loaded through window variable."),n());
