import"./assets/styles-eb57ccec.js";import{i as s}from"./assets/vendor-77e16229.js";const l={form:document.querySelector(".js-form"),btnSubmit:document.querySelector("button")};l.form.addEventListener("submit",c);function c(o){o.preventDefault();const{delay:i,state:r}=o.currentTarget.elements,t=i.value,n=r.value;new Promise((e,m)=>{setTimeout(()=>{n==="fulfilled"?e(`${t}`):m(`${t}`)},`${t}`)}).then(e=>s.show({title:"Hey",message:`✅ Fulfilled promise in ${e}ms`,color:"green",position:"topCenter"})).catch(e=>s.show({title:"Hey",message:`❌ Rejected promise in ${e}ms`,color:"red",position:"topCenter"}))}
//# sourceMappingURL=commonHelpers2.js.map
