(this.webpackJsonptugas_5_react_js=this.webpackJsonptugas_5_react_js||[]).push([[0],{13:function(a,e,n){},14:function(a,e,n){},15:function(a,e,n){"use strict";n.r(e);var t=n(0),l=n.n(t),r=n(7),s=n.n(r),i=(n(13),n(14),n(2)),m=n(3),u=n(5),c=n(4),o=[{NamaMakanan:"Nasi Padang",Harga:"20.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"},{NamaMakanan:"Sate",Harga:"20.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"},{NamaMakanan:"Soto",Harga:"10.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"},{NamaMakanan:"Uduk",Harga:"10.000",img:"https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"},{NamaMakanan:"Nasi Kuning",Harga:"15.000",img:"https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"}],h=n(1),g=function(a){Object(u.a)(n,a);var e=Object(c.a)(n);function n(a){var t;return Object(i.a)(this,n),(t=e.call(this,a)).state={pesanan:"",jumlah:""},t.hendleChange=t.hendleChange.bind(Object(h.a)(t)),t.hendleSubmit=t.hendleSubmit.bind(Object(h.a)(t)),t.hendleChangeJumlah=t.hendleChangeJumlah.bind(Object(h.a)(t)),t.pesanan=l.a.createRef(),t}return Object(m.a)(n,[{key:"hendleChange",value:function(a){this.setState({pesanan:a.target.value})}},{key:"hendleChangeJumlah",value:function(a){this.setState({jumlah:a.target.value})}},{key:"hendleSubmit",value:function(a){a.preventDefault(),alert("Pesanan Anda Adalah : "+this.state.pesanan+" | Jumlah Pesanan : "+this.state.jumlah),this.setState({pesanan:"",jumlah:""}),this.pesanan.current.focus()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("form",{onSubmit:this.hendleSubmit},l.a.createElement("input",{onChange:this.hendleChange,type:"text",value:this.state.pesanan,ref:this.pesanan,placeholder:"Masukan Pesanan Anda"}),l.a.createElement("input",{type:"number",value:this.state.jumlah,onChange:this.hendleChangeJumlah,placeholder:"Masukan Jumlah Pesanan"}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"pesan"}))))}}]),n}(t.Component),p=[{NamaMakanan:"Nasi Padang",Harga:"20.000"},{NamaMakanan:"Sate",Harga:"20.000"},{NamaMakanan:"Soto",Harga:"10.000"},{NamaMakanan:"Uduk",Harga:"10.000"},{NamaMakanan:"Nasi Kuning",Harga:"15.000"},{NamaMakanan:"Ayam Geprek",Harga:"15.000"},{NamaMakanan:"Pecel Lele",Harga:"15.000"},{NamaMakanan:"Pecel",Harga:"10.000"},{NamaMakanan:"Mie Ayam",Harga:"10.000"}],d=function(a){Object(u.a)(n,a);var e=Object(c.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Daftar Makanan favourite"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,o.map((function(a,e){return l.a.createElement("td",{key:e},l.a.createElement("img",{src:a.img,alt:"Product Makanan",width:"150",height:"100"}),l.a.createElement("center",null,l.a.createElement("p",null,a.NamaMakanan),l.a.createElement("p",null,"Harga : Rp. ",a.Harga)))}))))),l.a.createElement("h4",null,"List Makanan"),p.map((function(a,e){return l.a.createElement("div",{key:e},l.a.createElement("p",null,a.NamaMakanan," | Harga Rp. ",a.Harga))})),l.a.createElement(g,null))}}]),n}(t.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},8:function(a,e,n){a.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0a8ff542.chunk.js.map