(this["webpackJsonpi-clinic"]=this["webpackJsonpi-clinic"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(3),i=c.n(s),d=(c(28),c(29),c(9),c.p+"static/media/logo.723eec8f.png"),r=c(8),l=(c(30),c(0));function o(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"succes-message",children:Object(l.jsx)("p",{children:"Cadastro realizado com sucesso"})}),Object(l.jsx)("div",{className:"input-box button-box",children:Object(l.jsx)("button",{children:"Concluir"})})]})}var j=c(4),m=c.n(j),u=(c(10),c(5)),b=c.n(u);c(13);function p(e){function t(){i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("form")),function(){var t=new Date,n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear(),i=n+"/"+a+"/"+s,d=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),l=d+":"+r,o=c(43),j=JSON.stringify({createdAt:i+" - "+l,name:e.firstData.name,cpf:e.firstData.cpf,capital:e.firstData.capital,cep:document.getElementById("cep").value,street:document.getElementById("street").value,district:document.getElementById("district").value,number:document.getElementById("number").value,city:document.getElementById("city").value,uf:document.getElementById("uf").value});o({method:"post",url:"https://6132a37cab7b1e001799b58a.mockapi.io/api/v1/clinics/",headers:{"Content-Type":"application/json"},data:j}).then((function(e){})).catch((function(e){console.log(e)}))}()}return Object(n.useEffect)((function(){void 0!==e.secondData&&(document.getElementById("cep").value=e.secondData.cep,document.getElementById("street").value=e.secondData.street,document.getElementById("district").value=e.secondData.district,document.getElementById("number").value=e.secondData.number,document.getElementById("city").value=e.secondData.city,document.getElementById("uf").value=e.secondData.uf)})),m()(document).ready((function(){m()("#cep").mask("00000-000",{reverse:!1})})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{name:"cep",type:"cep",id:"cep",size:"10",maxLength:"9",placeholder:"CEP",onBlur:function(){var e=document.getElementById("cep").value;fetch("https://viacep.com.br/ws/"+e+"/json/",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){!function(e){document.getElementById("street").value=e.logradouro,document.getElementById("district").value=e.bairro,document.getElementById("city").value=e.localidade,document.getElementById("uf").value=e.uf}(e)})).catch(console.error)}}),Object(l.jsx)("input",{name:"street",type:"street",id:"street",placeholder:"Rua"})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{name:"district",type:"district",id:"district",placeholder:"Bairro"}),Object(l.jsx)("input",{name:"number",type:"text",id:"number",placeholder:"Numero"})]}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{name:"city",type:"city",id:"city",placeholder:"Cidade"}),Object(l.jsx)("input",{name:"uf",type:"uf",id:"uf",placeholder:"UF"})]}),Object(l.jsxs)("div",{className:"input-box button-box",children:[Object(l.jsx)("button",{className:"cancel",children:"Cancelar"}),Object(l.jsx)("button",{onClick:function(){var t={cep:document.getElementById("cep").value,street:document.getElementById("street").value,district:document.getElementById("district").value,number:document.getElementById("number").value,city:document.getElementById("city").value,uf:document.getElementById("uf").value};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{firstData:e.firstData,secondData:t})}),document.getElementById("form"))},children:"Retornar"}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var c=document.getElementById("cep").value,n=document.getElementById("street").value,a=document.getElementById("district").value,s=document.getElementById("number").value,i=document.getElementById("city").value,d=document.getElementById("uf").value,r=!1;""===c||c<8||""===n||""===a||""===s||""===i||""===d?(r=!0,b.a.fire({title:"Erro!",text:"Preencha todos os dados corretamente para continuar",icon:"error",confirmButtonText:"OK"})):!0!==r&&t()},className:"save",children:"Salvar"})]})]})}function x(e){return Object(n.useEffect)((function(){void 0!==e.firstData&&(document.getElementById("name").value=e.firstData.name,document.getElementById("cpf").value=e.firstData.cpf,document.getElementById("capital").value=e.firstData.capital)})),m()(document).ready((function(){m()("#cpf").mask("000.000.000-40",{reverse:!1})})),m()(document).ready((function(){m()("#capital").mask("000.000.000.000.000,00",{reverse:!0})})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"input-box",children:Object(l.jsx)("input",{name:"name",type:"text",id:"name",placeholder:"Nome da cl\xednica"})}),Object(l.jsx)("div",{className:"input-box",children:Object(l.jsx)("input",{name:"cpf",type:"text",id:"cpf",placeholder:"CPF do respons\xe1vel"})}),Object(l.jsx)("div",{className:"input-box",children:Object(l.jsx)("input",{name:"capital",type:"text",id:"capital",placeholder:"Capital social da cl\xednica"})}),Object(l.jsxs)("div",{className:"input-box button-box",children:[Object(l.jsx)("button",{className:"cancel",children:"Cancelar"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault();var c=document.getElementById("name").value,n=document.getElementById("cpf").value,s=document.getElementById("cpf").value,d=!1;""===c||""===n||n<11||""===s?(d=!0,b.a.fire({title:"Erro!",text:"Preencha todos os dados corretamente para continuar",icon:"error",confirmButtonText:"OK"})):!0!==d&&function(){var t={name:document.getElementById("name").value,cpf:document.getElementById("cpf").value,capital:document.getElementById("capital").value};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{firstData:t,secondData:e.secondData})}),document.getElementById("form"))}()},children:"Avan\xe7ar"})]})]})}function h(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{className:"form",id:"form",method:"get",action:".",children:Object(l.jsx)(x,{})})})}c(62);function O(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"footer",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("p",{children:"@iClinic 2021. Todos os direitos reservados"})})})})}c(63);function f(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)([]),j=Object(r.a)(o,2),m=j[0],u=j[1];return Object(n.useEffect)((function(){fetch("https://6132a37cab7b1e001799b58a.mockapi.io/api/v1/clinics/",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){u(e)})).catch(console.error)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"listing",children:[Object(l.jsx)("section",{className:"header",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"logo",src:d,alt:"logo iclinic"}),Object(l.jsxs)("div",{className:"button",children:[Object(l.jsx)("button",{className:"button",onClick:function(){return s(!0)},children:"CADASTRE SUA CL\xcdNICA"}),Object(l.jsx)("button",{className:"home",onClick:function(){i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))},children:"HOME"})]})]})}),Object(l.jsxs)("section",{className:"main",children:[Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("p",{children:"Clinicas J\xe1 cadastradas"})}),m.slice(0).reverse().map((function(e,t){return Object(l.jsxs)("div",{className:"clinic",children:[Object(l.jsx)("p",{children:Object(l.jsx)("span",{children:"Dados"})}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Nome:"})," ",e.name]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Cpf:"})," ",e.cpf]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Capital Social:"})," R$",e.capital]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:Object(l.jsx)("span",{children:"Endere\xe7o"})}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Rua:"})," ",e.street]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"N\xfamero:"})," ",e.number]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Bairro:"})," ",e.district]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Cidade:"})," ",e.city]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Estado:"})," ",e.uf]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"CEP:"})," ",e.cep]}),Object(l.jsxs)("p",{className:"position",children:["Cadastrado em:\xa0 ",e.createdAt]})]})}))]}),Object(l.jsx)("div",{className:"backdrop",style:{display:c?"block":"none"},onClick:function(){return s(!1)}}),Object(l.jsx)("div",{className:"modal-container",style:{display:c?"block":"none"},children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("div",{className:"header-modal",children:Object(l.jsx)("p",{children:"Insira os dados da cl\xednica"})}),Object(l.jsx)("div",{className:"main-modal",children:Object(l.jsx)(h,{})})]})})]})]}),Object(l.jsx)(O,{})]})}function v(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"header",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"logo",src:d,alt:"logo iclinic"}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("button",{onClick:function(){i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},children:"CADASTRE SUA CL\xcdNICA"})})]})})})}var g=c(22),y=c.n(g),E=c.p+"static/media/dentist.f91c732c.jpg",N=c.p+"static/media/lines.89ded477.jpg",B=c.p+"static/media/doctor.c16efdd3.jpg",I=c.p+"static/media/register.5da227f1.png",C=c.p+"static/media/security.1e04bde9.png",D=c(23);function S(){function e(){i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}var t="\n";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v,{}),Object(l.jsxs)("section",{className:"hero",children:[Object(l.jsx)(y.a,{images:[E,N,B],duration:5,transition:1.5}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"content-text",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Cadastre j\xe1 a sua cl\xednica em nossa rede!"})}),Object(l.jsx)("div",{className:"text",children:Object(l.jsx)("p",{children:"Obtenha as melhores vantagens."})}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)("button",{onClick:e,children:"CADASTRAR"})}),Object(l.jsx)("div",{className:"arrow",children:Object(l.jsx)(D.a,{})})]})})]}),Object(l.jsx)("section",{className:"about",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"text1",children:Object(l.jsxs)("p",{className:"white-space",children:[Object(l.jsx)("span",{onClick:e,children:"Cadastre a sua cl\xednica"})," para que",t,"possamos cada vez mais ampliar a",t,"nossa rede e sempre mantermos",t,"um constante aprimoramento de",t,"nossa ger\xeancia!"]})}),Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{src:I,alt:"imagem cadastre-se"})}),Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{src:C,alt:"imagem dados seguros"})}),Object(l.jsx)("div",{className:"text2",children:Object(l.jsxs)("p",{className:"white-space",children:["Garantimos sempre a total",t,Object(l.jsx)("span",{onClick:e,children:"integridade e seguran\xe7a"})," de todos os seus",t,"dados cadastrados conosco"]})})]})}),Object(l.jsx)(O,{})]})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[64,1,2]]]);
//# sourceMappingURL=main.f50075e4.chunk.js.map