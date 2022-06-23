(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f784"],{b484:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("a4d3"),a("e01a");var c=a("7a23"),o={class:"page-wrap"},r={class:"header-section has-header-main bg-pattern-3"},n={class:"create-section section-space-b pt-4 pt-md-5 mt-md-4"},l={class:"container"},s={class:"row justify-content-center"},i={class:"col-lg-8"},m={class:"section-head-sm"},d=Object(c["createElementVNode"])("em",{class:"ni ni-arrow-left"},null,-1),b=Object(c["createElementVNode"])("h1",{class:"mt-2"},"Create a Collection",-1),p={class:"col-lg-8"},u={action:"#",class:"form-create mb-5 mb-lg-0"},j={class:"form-item mb-4 row"},O={class:"col-md-6"},f=Object(c["createElementVNode"])("h5",{class:"mb-3"},"Upload Logo Image",-1),g={class:"file-upload-wrap"},h=Object(c["createElementVNode"])("p",{class:"file-name mb-4",id:"logo-file-name"},"PNG, GIF, JPG. Max 100mb.",-1),V=Object(c["createElementVNode"])("label",{for:"logo-file-upload",class:"input-label btn btn-primary"},"Choose File",-1),v={class:"px-3 text-red"},E={key:0},N={class:"col-md-6"},y=Object(c["createElementVNode"])("h5",{class:"mb-3"},"Upload Coveer Image",-1),x={class:"file-upload-wrap"},w=Object(c["createElementVNode"])("p",{class:"file-name mb-4",id:"cover-file-name"},"PNG, GIF, JPG. Max 100mb.",-1),D=Object(c["createElementVNode"])("label",{for:"cover-file-upload",class:"input-label btn btn-primary"},"Choose File",-1),k={class:"px-3 text-red"},C={key:0},I={class:"form-item mb-4"},S={class:"mb-4"},B=Object(c["createElementVNode"])("label",{class:"mb-2 form-label"},[Object(c["createTextVNode"])("Display name "),Object(c["createElementVNode"])("small",null,"(required)")],-1),T={class:"px-3 text-red"},U={key:0},L={class:"mb-4"},M=Object(c["createElementVNode"])("label",{class:"mb-2 form-label"},[Object(c["createTextVNode"])("Symbol "),Object(c["createElementVNode"])("small",null,"(required)")],-1),F={class:"px-3 text-red"},G={key:0},P={class:"mb-4"},q=Object(c["createElementVNode"])("label",{class:"mb-2 form-label"},[Object(c["createTextVNode"])("Description "),Object(c["createElementVNode"])("small",null,"(optional)")],-1),J={class:"px-3 text-red"},R={key:0},H={class:"mb-4"},$=Object(c["createElementVNode"])("label",{class:"mb-2 form-label"},[Object(c["createTextVNode"])("Short url "),Object(c["createElementVNode"])("small",null,"(will be used as public url)")],-1),A={class:"d-flex align-items-center"},_=Object(c["createElementVNode"])("p",null,"https://prelabtech.com/collection/",-1),z={class:"px-3 text-red"},K={key:0};function Q(e,t,a,Q,W,X){var Y=Object(c["resolveComponent"])("HeaderMain"),Z=Object(c["resolveComponent"])("router-link"),ee=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("header",r,[Object(c["createVNode"])(Y)]),Object(c["createElementVNode"])("section",n,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(Z,{to:W.SectionData.createSingleData.path,class:"btn-link fw-semibold"},{default:Object(c["withCtx"])((function(){return[d,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(W.SectionData.createSingleData.btnText),1)]})),_:1},8,["to"]),b])]),Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("form",u,[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",O,[f,Object(c["createElementVNode"])("div",g,[h,Object(c["createElementVNode"])("input",{id:"logo-file-upload",class:"file-upload-input","data-target":"logo-file-name",type:"file",onChange:t[0]||(t[0]=function(){return X.uploadLogoImage&&X.uploadLogoImage.apply(X,arguments)}),hidden:"",ref:"logoImage"},null,544),V,Object(c["createElementVNode"])("p",v,[W.errors.logoImage?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",E,Object(c["toDisplayString"])(W.errors.logoImage),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createElementVNode"])("div",N,[y,Object(c["createElementVNode"])("div",x,[w,Object(c["createElementVNode"])("input",{id:"cover-file-upload",class:"file-upload-input","data-target":"cover-file-name",type:"file",onChange:t[1]||(t[1]=function(){return X.uploadCoverImage&&X.uploadCoverImage.apply(X,arguments)}),hidden:"",ref:"coverImage"},null,544),D,Object(c["createElementVNode"])("p",k,[W.errors.coverImage?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",C,Object(c["toDisplayString"])(W.errors.coverImage),1)):Object(c["createCommentVNode"])("",!0)])])])]),Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("div",S,[B,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter collection name","onUpdate:modelValue":t[2]||(t[2]=function(e){return W.contractData.name=e})},null,512),[[c["vModelText"],W.contractData.name]]),Object(c["createElementVNode"])("p",T,[W.errors.name?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",U,Object(c["toDisplayString"])(W.errors.name),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",L,[M,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter collection name","onUpdate:modelValue":t[3]||(t[3]=function(e){return W.contractData.symbol=e})},null,512),[[c["vModelText"],W.contractData.symbol]]),Object(c["createElementVNode"])("p",F,[W.errors.name?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",G,Object(c["toDisplayString"])(W.errors.symbol),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",P,[q,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{name:"message",class:"form-control form-control-s1",placeholder:"Spread some words about your token collection","onUpdate:modelValue":t[4]||(t[4]=function(e){return W.contractData.description=e})},null,512),[[c["vModelText"],W.contractData.description]]),Object(c["createElementVNode"])("p",J,[W.errors.description?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",R,Object(c["toDisplayString"])(W.errors.description),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",H,[$,Object(c["createElementVNode"])("div",A,[_,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control form-control-s1",placeholder:"Enter short url","onUpdate:modelValue":t[5]||(t[5]=function(e){return W.contractData.shortUrl=e})},null,512),[[c["vModelText"],W.contractData.shortUrl]])]),Object(c["createElementVNode"])("p",z,[W.errors.shortUrl?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",K,Object(c["toDisplayString"])(W.errors.shortUrl),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[6]||(t[6]=function(){return X.createCollection&&X.createCollection.apply(X,arguments)})},"Create")])])])])]),Object(c["createVNode"])(ee)])}var W=a("1da1"),X=a("5530"),Y=(a("96cf"),a("d3b7"),a("159b"),a("ac1f"),a("1276"),a("caad"),a("5502")),Z=a("99e5"),ee=a.n(Z),te=a("07a4"),ae=a("ae8b"),ce=a("9c74"),oe=a("2720"),re={name:"CreateSingleCollection",data:function(){return{SectionData:te["a"],contractData:{name:null,symbol:null,description:null,shortUrl:null,logoImage:null,coverImage:null},errors:{}}},mounted:function(){function e(e){var t=document.querySelectorAll(e);t.length>0&&t.forEach((function(e){e.addEventListener("change",(function(){var t=document.getElementById(e.dataset.target),a=["jpg","png","gif","jpeg"],c=this.value.split(".").pop(),o=this.value.lastIndexOf("."),r=this.value.substring(o+1),n=t.value=r;a.includes(c)?t.innerHTML=e.files[0].name:(alert(n+" file type not allowed, Please upload jpg, png, gif."),t.innerHTML="Please upload jpg, png, gif, webp, mp4 or mp3 file")}))}))}function t(e){var t=document.querySelectorAll(e);t.length>0&&t.forEach((function(e){e.addEventListener("change",(function(){var t=document.getElementById(e.dataset.target);this.checked?t.classList.add("is-shown"):t.classList.remove("is-shown")}))}))}e(".file-upload-input"),t(".checkbox-switcher")},computed:Object(X["a"])(Object(X["a"])({},Object(Y["d"])(["auth"])),Object(Y["c"])({currentChain:["auth/currentChain"]})),methods:{uploadLogoImage:function(){this.contractData.logoImage=this.$refs.logoImage.files[0]},uploadCoverImage:function(){this.contractData.coverImage=this.$refs.coverImage.files[0]},createCollection:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){var a,c,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("logoImage",e.contractData.logoImage),a.append("coverImage",e.contractData.coverImage),a.append("name",e.contractData.name),a.append("symbol",e.contractData.symbol),a.append("description",e.contractData.description),a.append("shortUrl",e.contractData.shortUrl),t.next=9,e.currentChain();case 9:if(t.t0=t.sent,"ethereum"!=t.t0){t.next=25;break}return a.append("owner",e.auth.user.address),a.append("chain",e.auth.user.chain),t.next=15,ae["a"].createCollection(a);case 15:if(c=t.sent,!c.errors){t.next=22;break}return console.log(c.errors),e.errors=c.errors,t.abrupt("return");case 22:o=new ee.a(window.ethereum),r=new o.eth.Contract(oe.abi,ce.Token),r.methods.createToken(e.contractData.name,e.contractData.symbol).send({from:e.auth.user.address}).once("error",(function(e){console.log(e,"Error")})).then(function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(a){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ae["a"].verifyCollection(c.newCollection._id,a.events[0].address);case 2:o=t.sent,console.log(o),alert("contract created successfully!"),e.$router.push({name:"my-collections"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 25:case"end":return t.stop()}}),t)})))()}}},ne=a("6b0d"),le=a.n(ne);const se=le()(re,[["render",Q]]);t["default"]=se}}]);