"use strict";(self["webpackChunkvue3_cml_example"]=self["webpackChunkvue3_cml_example"]||[]).push([[319],{4243:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var l=o(3396),a=o(9242);const n=(0,l._)("label",{for:"userId"},"UserID:",-1),s=(0,l._)("label",{for:"title"},"Title: ",-1),r=(0,l._)("label",{for:"body"},"Body: ",-1),u=(0,l._)("button",null,"Create Post",-1);function d(t,e,o,d,p,i){return(0,l.wg)(),(0,l.iD)("section",null,[(0,l._)("form",{onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>i.createPost&&i.createPost(...t)),["prevent"]))},[(0,l._)("div",null,[n,(0,l.wy)((0,l._)("input",{type:"text",id:"userId","onUpdate:modelValue":e[0]||(e[0]=t=>p.postData.userId=t)},null,512),[[a.nr,p.postData.userId]])]),(0,l._)("div",null,[s,(0,l.wy)((0,l._)("input",{type:"text",id:"title","onUpdate:modelValue":e[1]||(e[1]=t=>p.postData.title=t)},null,512),[[a.nr,p.postData.title]])]),(0,l._)("div",null,[r,(0,l.wy)((0,l._)("textarea",{id:"body",rows:"6",cols:"22","onUpdate:modelValue":e[2]||(e[2]=t=>p.postData.body=t)},null,512),[[a.nr,p.postData.body]])]),u],32)])}var p=o(4161),i={data(){return{postData:{userId:"",title:"",body:""}}},methods:{createPost(){p.Z.post("https://jsonplaceholder.typicode.com/posts",this.postData).then((t=>console.log(t)))}}},c=o(89);const _=(0,c.Z)(i,[["render",d]]);var b=_}}]);
//# sourceMappingURL=databing24.d09704fb.js.map