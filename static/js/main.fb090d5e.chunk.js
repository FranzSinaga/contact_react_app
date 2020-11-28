(this.webpackJsonpcode_id=this.webpackJsonpcode_id||[]).push([[0],{158:function(t,e,a){},159:function(t,e,a){},218:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a(0),o=a.n(c),s=a(25),i=a.n(s),l=(a(158),a(149)),r=a(7),d=(a(159),a(63)),h=a(30),j=a(142),u=a(143),m=a(26),b=a(152),O=a(151),p=a(45),x=a.n(p),f=a(222),g=a(223),v=a(146),C=a(224),N=a(221),y=a(150),k=a(34),w=Object(k.b)({name:"counter",initialState:{contactList:[]},reducers:{addContact:function(t,e){t.contactList=e.payload}}}),S=w.actions.addContact,F=w.reducer,L=a(64),A=a(46),B=a(47);var D=function(t){Object(b.a)(a,t);var e=Object(O.a)(a);function a(t){var n;return Object(j.a)(this,a),(n=e.call(this,t)).state={isLoading:!0,list:[],show:!1,modalForm:null,isFormValid:!1,contact:{firstName:null,lastName:null,age:null,photo:""},editId:null},n.handleClose=n.handleClose.bind(Object(m.a)(n)),n.handleOpen=n.handleOpen.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.addContact=n.addContact.bind(Object(m.a)(n)),n.deleteContact=n.deleteContact.bind(Object(m.a)(n)),n.editContact=n.editContact.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleClose",value:function(){this.setState((function(t){return{contact:Object(h.a)(Object(h.a)({},t.contact),{},{age:null,firstName:null,lastName:null,photo:""}),editId:null,show:!1,modalForm:null}}))}},{key:"handleOpen",value:function(t,e){if(e=e||null,this.setState({show:!0}),"create"===t)this.setState({modalForm:"create"});else if("edit"===t){this.setState({modalForm:"edit"});var a=function(t,e){for(var a=0;a<e.length;a++)if(e[a].id===t)return e[a]}(e,this.state.list),n=a.photo;"N/A"===a.photo&&(n=""),this.setState((function(t){return{contact:Object(h.a)(Object(h.a)({},t.contact),{},{age:a.age,firstName:a.firstName,lastName:a.lastName,photo:n}),editId:e}}))}else console.log("Something Wrong")}},{key:"handleChange",value:function(t){var e=t.target.value,a=t.target.name;this.setState((function(t){return{contact:Object(h.a)(Object(h.a)({},t.contact),{},Object(d.a)({},a,e))}}))}},{key:"validateForm",value:function(){var t=this.state.contact;return null==t.firstName||t.firstName.length<=3||null==t.lastName||t.lastName.length<=3||null==t.age||t.age<0?(this.setState({isFormValid:!1}),!1):(this.setState({isFormValid:!0}),!0)}},{key:"addContact",value:function(t){var e=this.state.contact;""===this.state.contact.photo&&(e={firstName:this.state.contact.firstName,lastName:this.state.contact.lastName,age:this.state.contact.age}),console.log(this.validateForm()),this.validateForm()?x.a.post("https://simple-contact-crud.herokuapp.com/contact",e).then((function(t){console.log(t)})).catch((function(e){t.preventDefault(),console.log(e)})):(t.preventDefault(),console.log("Something Wrong"))}},{key:"editContact",value:function(t){var e=this.state.contact;""===this.state.contact.photo&&(e={firstName:this.state.contact.firstName,lastName:this.state.contact.lastName,age:this.state.contact.age}),this.validateForm()?x.a.put("https://simple-contact-crud.herokuapp.com/contact/".concat(this.state.editId),e).then((function(t){console.log(t)})).catch((function(e){console.log(e),t.preventDefault()})):(t.preventDefault(),console.log("Something Wrong"))}},{key:"deleteContact",value:function(t){x.a.delete("https://simple-contact-crud.herokuapp.com/contact/".concat(t)).then((function(t){window.location.reload()}))}},{key:"componentDidMount",value:function(){var t=this;console.log(this.state.isLoading),x.a.get("https://simple-contact-crud.herokuapp.com/contact").then((function(e){t.setState({isLoading:!1,list:e.data.data,show:!1}),t.props.addContact(e.data.data)}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("h4",{children:"Contact List"}),Object(n.jsx)("p",{children:"Save your contact for free"}),Object(n.jsxs)(f.a,{show:this.state.show,onHide:this.handleClose,keyboard:!1,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(n.jsx)(f.a.Header,{closeButton:!0,children:Object(n.jsxs)(f.a.Title,{children:["create"===this.state.modalForm?"Add new ":"Update"," ","contact"]})}),Object(n.jsx)(f.a.Body,{children:Object(n.jsxs)(g.a,{onSubmit:"create"===this.state.modalForm?this.addContact:this.editContact,children:[Object(n.jsxs)(g.a.Row,{children:[Object(n.jsxs)(g.a.Group,{as:v.a,md:"5",children:[Object(n.jsx)(g.a.Label,{children:"First name"}),Object(n.jsx)(g.a.Control,{value:this.state.contact.firstName,type:"text",name:"firstName",placeholder:"Enter first name",onChange:this.handleChange}),Object(n.jsx)(g.a.Text,{id:"passwordHelpBlock",muted:!0,children:"Minimum 3 character"})]}),Object(n.jsxs)(g.a.Group,{as:v.a,md:"5",children:[Object(n.jsx)(g.a.Label,{children:"Last name"}),Object(n.jsx)(g.a.Control,{value:this.state.contact.lastName,onChange:this.handleChange,name:"lastName",type:"text",placeholder:"Enter last name"}),Object(n.jsx)(g.a.Text,{id:"passwordHelpBlock",muted:!0,children:"Minimum 3 character"})]}),Object(n.jsxs)(g.a.Group,{as:v.a,md:"2",children:[Object(n.jsx)(g.a.Label,{children:"Age"}),Object(n.jsx)(g.a.Control,{value:this.state.contact.age,onChange:this.handleChange,name:"age",type:"number",placeholder:"Age",min:1})]})]}),Object(n.jsxs)(g.a.Group,{children:[Object(n.jsx)(g.a.Label,{children:"Photo url (Optional)"}),Object(n.jsx)(g.a.Control,{value:this.state.contact.photo,onChange:this.handleChange,name:"photo",type:"text",placeholder:"Enter photo url"})]}),Object(n.jsx)(C.a,{variant:"light",type:"submit",className:"float-right save-color",disabled:this.state.isFormValid?"true":"false",children:"create"===this.state.modalForm?"Save ":"Edit"})]})})]}),Object(n.jsxs)(C.a,{variant:"outline-primary",className:"btn-add-contact",onClick:function(){return t.handleOpen("create")},children:[Object(n.jsx)(A.a,{icon:B.b})," Add Contact"]}),Object(n.jsxs)(N.a,{borderless:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Age"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:this.state.isLoading?Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)("center",{children:Object(n.jsx)(A.a,{icon:B.c,spin:!0,size:"3x"})})})}):this.state.list.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"photo-td",children:Object(n.jsx)(y.a,{size:"35",name:e.firstName,src:e.photo,round:!0})}),Object(n.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(n.jsx)("td",{children:e.age}),Object(n.jsxs)("td",{children:[Object(n.jsx)(C.a,{variant:"light",className:"btn-add-contact",onClick:function(){return t.handleOpen("edit",e.id)},children:Object(n.jsx)(A.a,{icon:B.a})}),Object(n.jsx)(C.a,{style:{marginLeft:"10px"},onClick:function(){return t.deleteContact(e.id)},variant:"light",className:"btn-add-contact",children:Object(n.jsx)(A.a,{icon:B.d})})]})]},e.id)}))})]})]})}}]),a}(c.Component),E={addContact:S},I=Object(L.b)((function(t){return{contactList:t.contactList}}),E)(D);function W(){return Object(n.jsx)("h2",{children:"About"})}function G(){return Object(n.jsx)("h2",{children:"Users"})}var H=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(r.c,{children:[Object(n.jsx)(r.a,{path:"/create-contact",children:Object(n.jsx)(W,{})}),Object(n.jsx)(r.a,{path:"/users",children:Object(n.jsx)(G,{})}),Object(n.jsx)(r.a,{path:"/",children:Object(n.jsx)(I,{})})]})})})},M=Object(k.b)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),V=M.actions,z=(V.increment,V.decrement,V.incrementByAmount,M.reducer),T=Object(k.a)({reducer:{counter:z,contact:F}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(217);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(L.a,{store:T,children:Object(n.jsx)(H,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.fb090d5e.chunk.js.map