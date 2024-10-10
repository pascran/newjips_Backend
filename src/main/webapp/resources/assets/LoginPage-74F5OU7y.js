import{u,a as h,b as f,r as _,c as g,d as b,e as s,w as v,f as n,v as l,g as i,h as w,i as x,j as y,o as k}from"./index-CC5LDJ6w.js";const V="/assets/Loginimg-DmLY2fA7.png",j={class:"bg-light"},B={class:"page-wrapper d-flex flex-column",style:{"min-height":"100vh"}},I={class:"container-fluid d-flex h-100 align-item-center justify-content-center py-4"},L={class:"card card-body",style:{"max-width":"70%","max-height":"600px"}},N=s("a",{class:"position-absolute top-1 end-0 nav-link fs-sm py-1 px-2 me-3",href:"#",onclick:"window.history.go(-1); return false;"},[s("i",{class:"fa-solid fa-arrow-left fs-base me-2"}),i("Go back")],-1),q={class:"row mx-0 align-item-center"},A=s("div",{class:"col-md-6 border-end-md p-sm-1",style:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"3%"}},[s("div",null,[s("h3",{class:"mt-2"},"안녕하세요!"),s("h3",null,"다시 만나서 반가워요 :)")]),s("img",{src:V,style:{height:"100%","max-height":"60%"}})],-1),C={class:"col-md-6 mb-5 px-2 pt-2 pb-4 px-sm-2 pb-sm-5 pt-md-5"},D={class:"mb-4"},M=s("label",{class:"form-label mb-2 mt-5",for:"signin-email"},"이메일",-1),R={class:"mb-4"},S=s("div",{class:"d-flex align-items-center justify-content-between mb-2"},[s("label",{class:"form-label mb-0",for:"signin-password"},"비밀번호"),s("a",{class:"fs-ms",href:"#",style:{color:"#ff8f17"}},"잊으셨나요?")],-1),T={class:"change"},U=s("button",{class:"btn-orange btn-lg w-100 mt-4 mb-4",type:"submit"},"로그인",-1),E={class:"mt-4 mt-sm-5"},Y={__name:"LoginPage",setup(G){u();const r=h(),c=f(),e=_({userId:"",password:""}),d=g(""),m=async()=>{try{await c.login(e),r.push("/")}catch(t){console.log("에러=======",t),t.response&&t.response.status===401?(d.value="아이디 또는 비밀번호가 틀렸습니다.",alert("아이디 또는 비밀번호가 틀렸습니다.")):alert("아이디 또는 비밀번호가 비어 있습니다.")}};return(t,o)=>{const p=y("router-link");return k(),b("body",j,[s("main",B,[s("div",I,[s("div",L,[N,s("div",q,[A,s("div",C,[s("form",{class:"needs-validation mt-5",onSubmit:v(m,["prevent"]),novalidate:""},[s("div",D,[M,n(s("input",{class:"form-control",type:"email",id:"signin-email","onUpdate:modelValue":o[0]||(o[0]=a=>e.userId=a),placeholder:"이메일을 입력하세요.",required:""},null,512),[[l,e.userId]])]),s("div",R,[S,s("div",T,[n(s("input",{class:"form-control",type:"password",id:"signin-password","onUpdate:modelValue":o[1]||(o[1]=a=>e.password=a),placeholder:"비밀번호를 입력하세요",required:""},null,512),[[l,e.password]])])]),U],32),s("div",E,[i(" 계정이 없으신가요?? "),w(p,{to:"/auth/join",style:{color:"#ff8f17"}},{default:x(()=>[i("회원가입")]),_:1})])])])])])])])}}};export{Y as default};