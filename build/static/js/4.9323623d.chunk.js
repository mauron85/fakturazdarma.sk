(this["webpackJsonpfakturazdarma.sk"]=this["webpackJsonpfakturazdarma.sk"]||[]).push([[4],{825:function(t,n,e){"use strict";e.r(n),e.d(n,"PdfMaker",(function(){return V}));var i=e(30),r=e(11),a=e(12),o=e(18),u=e.n(o),l=e(861),d=e.n(l),c=e(862),g=e.n(c),s=e(863),f=e.n(s);function h(t){var n=document.createElement("canvas");return f()(n,t,{format:"CODE128",width:3,height:80,displayValue:!1}),n.toDataURL("image/png")}var m=function(t){return t},b=function(){function t(){Object(r.a)(this,t),this.invoice=void 0,this.bySquareSvg=void 0}return Object(a.a)(t,[{key:"buildItemTable",value:function(t){var n;return 2===t.type?(n=[[{text:"Ozna\u010denie dod\xe1vky",bold:!0},{text:"Po\u010det m. j.",bold:!0,alignment:"right"},{text:"Cena za m.j.",bold:!0,alignment:"right"},{text:"DPH %",bold:!0,alignment:"right"},{text:"bez DPH",bold:!0,alignment:"right"},{text:"DPH",bold:!0,alignment:"right"},{text:"s DPH",bold:!0,alignment:"right"}]],t.items.forEach((function(t){n.push([{text:t.name},{text:t.amount+" "+t.unit,alignment:"right"},{text:t.pricePerUnit,alignment:"right"},{text:t.taxRate,alignment:"right"},{text:t.netPrice,alignment:"right"},{text:t.taxPrice,alignment:"right"},{text:t.grossPrice,alignment:"right"}])})),{layout:"lightHorizontalLines",margin:[0,10,0,0],fontSize:9,table:{headerRows:1,widths:["*",45,60,30,60,60,60],body:n}}):(n=[[{text:"Ozna\u010denie dod\xe1vky",bold:!0},{text:"Po\u010det m. j.",bold:!0,alignment:"right"},{text:"Cena za m.j.",bold:!0,alignment:"right"},{text:"Spolu",bold:!0,alignment:"right"}]],t.items.forEach((function(t){n.push([{text:t.name},{text:t.amount+" "+t.unit,alignment:"right"},{text:t.pricePerUnit,alignment:"right"},{text:t.grossPrice,alignment:"right"}])})),{layout:"lightHorizontalLines",margin:[0,10,0,0],fontSize:9,table:{headerRows:1,widths:["*",50,60,80],body:n}})}},{key:"buildPriceTable",value:function(t){var n=[[{text:"Spolu pred z\u013eavou:",fontSize:10,bold:!0},{text:t.grossPrice,fontSize:10,bold:!0}],[{text:"Z\u013eava   "+t.discount+" %:",fontSize:10,marginTop:3},{text:t.discountPrice,fontSize:10,alignment:"right",marginTop:5}],[{text:"Spolu na \xfahradu:",fontSize:11,bold:!0},{text:t.netPrice,fontSize:11,bold:!0}]];return t.discount||n.splice(0,2),{table:{headerRows:0,widths:[250,"*"],heights:[10,20,10],body:n},layout:{defaultBorder:!1,paddingLeft:function(){return 0},paddingRight:function(){return 0},fillColor:function(t){return 1===t?"#aaa":null}}}}},{key:"buildTaxSummary",value:function(t){if(1===t.length)return{alignment:"right",table:{headerRows:0,widths:[80,"auto"],body:t.flatMap((function(t){return[[{text:"Z\xe1klad DPH "+t.taxRate,bold:!0},{text:t.netPrice}],[{text:"DPH "+t.taxRate,bold:!0},{text:t.taxPrice}],[{text:"Celkom",bold:!0},{text:t.grossPrice,bold:!0}]]}))},fontSize:9,layout:{paddingLeft:function(){return 0},paddingRight:function(t){return 0===t?100:0},hLineWidth:function(t){return 2==t?.5:0},vLineWidth:function(){return 0}}};if(t.length>1){var n=[[{text:"Sadzba DPH",bold:!0},{text:"Z\xe1klad DPH",bold:!0},{text:"DPH",bold:!0},{text:"Spolu",bold:!0}]];return t.forEach((function(e,i){var r=i===t.length-1;n.push([{text:e.taxRate,alignment:"right",bold:r},{text:e.netPrice,alignment:"right",bold:r},{text:e.taxPrice,alignment:"right",bold:r},{text:e.grossPrice,alignment:"right",bold:r}])})),{fontSize:9,table:{headerRows:1,widths:["*","*","*","*"],body:n},layout:{hLineWidth:function(t,n){return 0===t||t===n.table.body.length?0:t===n.table.headerRows?2:1},vLineWidth:function(t){return 0},hLineColor:function(t,n){return 1===t||t===n.table.body.length-1?"black":"#aaa"},paddingTop:function(t,n){return t===n.table.body.length-1?2:1},paddingBottom:function(t,n){return t===n.table.body.length-1?2:1},paddingLeft:function(t){return 0===t?0:8},paddingRight:function(t,n){return t===n.table.widths.length-1?0:8}}}}}},{key:"buildSignature",value:function(t){return t?{columns:[{width:"*",text:""},{stack:[{image:t,fit:[100,50],alignment:"center"},{text:"Pe\u010diatka a podpis",alignment:"center"},{canvas:[{type:"line",x1:0,y1:5,x2:110,y2:5,lineWidth:.5,dash:{length:1,space:1}}]}],width:180,fontSize:8,margin:[0,70,70,0]}]}:null}},{key:"getEmail",value:function(t){return t.email?"email: "+t.email:" "}},{key:"reset",value:function(){return this.invoice=void 0,this.bySquareSvg=void 0,this}},{key:"setInvoice",value:function(t){return this.invoice=t,this}},{key:"setBySquareSvg",value:function(t){return this.bySquareSvg=t,this}},{key:"getDefinition",value:function(){var t=this.invoice,n=this.bySquareSvg;if(!t)throw new Error("Builder is missing invoice. Did you call setInvoice?");var e=t.emitent,i=t.recipient;return{pageSize:"A4",pageOrientation:"portrait",pageMargins:[50,20,25,30],defaultStyle:{font:"Roboto"},info:{title:"Fakt\xfara "+t.id,author:e.entity},content:[{columns:[{margin:[0,0,0,0],text:"Dod\xe1vate\u013e",bold:!0,width:"*"},{image:h(t.id),width:100,margin:[7,0,0,-15]}]},{margin:[0,0,0,0],text:e.entity,fontSize:11,bold:!0},{columns:[{stack:[{text:e.street},{text:e.zipCode+" "+e.city},{text:e.country}],width:180,margin:[0,5,0,0]},{margin:[0,5,0,0],width:100,stack:[{layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}},table:{headerRows:0,widths:["auto","auto"],body:[[{text:"I\u010cO:",alignment:"right"},{text:e.legalId,alignment:"right"}],[{text:"DI\u010c:",alignment:"right"},{text:e.taxId,alignment:"right"}],e.taxLegalId&&[{text:"I\u010c DPH:",alignment:"right"},{text:e.taxLegalId,alignment:"right"}]].filter(m)}},!e.taxLegalId&&{text:"Nie sme platite\u013emi DPH"}].filter(m)},{width:"*",text:""},{stack:[{text:" "},e.registeredIn?{text:this.getEmail(e)}:{text:" "},e.registeredIn?{text:e.registeredIn}:{text:this.getEmail(e)}],margin:[0,5,0,0],width:200,alignment:"left"}],fontSize:8,margin:[0,0,0,0]},{canvas:[{type:"line",x1:0,y1:5,x2:524,y2:5,lineWidth:.5}]},{columns:[{text:"Fakt\xfara",bold:!0,width:"*",margin:[0,5,0,0]},{columns:[{width:"*",text:""},{width:"auto",table:{widths:["auto"],body:[[{text:t.id,margin:[20,0,20,0]}]]},layout:{hLineWidth:function(){return.5},vLineWidth:function(){return.5}}}],margin:[0,0,-4,0]}],margin:[0,0,0,0],fontSize:14},{columns:[n?{width:"*",stack:[{width:125,margin:[10,10,0,0],svg:n}]}:{text:"",width:"*"},{stack:[{text:"Odberate\u013e",bold:!0},{canvas:[{type:"line",x1:-2,y1:5,x2:250,y2:5,lineWidth:.5}]},{text:i.entity,bold:!0,margin:[0,3,0,0]},{text:i.street},{text:i.zipCode+" "+i.city},{text:i.country},{canvas:[{type:"line",x1:-2,y1:5,x2:250,y2:5,lineWidth:.5}]},{width:"*",margin:[10,5,0,0],alignment:"justify",fontSize:10,columns:[{width:"*",text:""},{width:"auto",layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}},table:{headerRows:0,widths:["auto","auto"],body:[[{text:"I\u010cO:",alignment:"right"},{text:i.legalId,alignment:"right"}],[{text:"DI\u010c:",alignment:"right"},{text:i.taxId,alignment:"right"}],i.taxLegalId&&[{text:"I\u010c DPH:",alignment:"right"},{text:i.taxLegalId,alignment:"right"}]].filter(m)}}]}],width:250,margin:[0,20,0,0]}]},{columns:[{width:150,margin:[0,20,0,0],stack:[{text:"D\xe1tum",bold:!0},{canvas:[{type:"line",x1:-2,y1:5,x2:122,y2:5,lineWidth:.5}]}]},{width:150,margin:[0,20,0,0],stack:[{text:"Symbol",bold:!0},{canvas:[{type:"line",x1:-2,y1:5,x2:130,y2:5,lineWidth:.5}]}]}],fontSize:10},{columns:[{margin:[10,0,25,0],width:150,table:{headerRows:0,widths:[50,"*"],body:[[{text:"vystavenia:"},{text:t.issueDate,alignment:"right"}],[{text:"splatnosti:",bold:!0},{text:t.dueDate,bold:!0,alignment:"right"}],t.deliveryDate&&[{text:"dodania:"},{text:t.deliveryDate,alignment:"right"}]].filter(m)},layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}}},{margin:[10,0,25,0],width:158,table:{headerRows:0,widths:[60,"*"],body:[[{text:"kon\u0161tantn\xfd:"},{text:t.constantSymbol,alignment:"right"}],[{text:"variabiln\xfd:",bold:!0},{text:t.variableSymbol,bold:!0,alignment:"right"}]]},layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}}},{margin:[0,0,0,0],table:{headerRows:0,widths:[80,"*"],body:[[{text:"Platba:",bold:!0},t.paymentType||""],t.orderNr&&[{text:"\u010c\xedslo objedn\xe1vky:",bold:!0},{text:t.orderNr||"",bold:!0}]].filter(m)},layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}}}],fontSize:9,margin:[0,10,0,0]},{columns:[{stack:[{text:"IBAN:",bold:!0},{table:{body:[[{text:e.iban,bold:!0,margin:[20,1,20,1]}]]},layout:{hLineWidth:function(){return.5},vLineWidth:function(){return.5}},margin:[0,0,0,0],width:"100",alignment:"right"},{margin:[0,5,0,0],table:{headerRows:0,widths:[70,"*"],body:[[{text:"Bankov\xfd \xfa\u010det:",bold:!0},{text:e.bankAccount,bold:!1}]]},layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}}}]},{stack:[{text:"SWIFT:",bold:!0},{table:{body:[[{text:e.swift,bold:!0,margin:[20,0,20,0],fontSize:11}]]},layout:{hLineWidth:function(){return.5},vLineWidth:function(){return.5}},margin:[0,0,0,0],width:"100",alignment:"right"},{margin:[0,5,0,0],table:{headerRows:0,widths:[60,"*"],body:[[{text:"K\xf3d banky:",bold:!0},{text:e.bankCode,bold:!1}]]},layout:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t,n){return 0},paddingRight:function(t,n){return 3},paddingTop:function(t,n){return 0},paddingBottom:function(t,n){return 0}}}]}],margin:[0,20,0,0],fontSize:10},{text:t.description||"",margin:[0,10,0,0],fontSize:10},this.buildItemTable(t),{text:t.finalText,headlineLevel:1,margin:[0,10,0,0],fontSize:10},{columns:[{text:"",width:"*"},{width:"auto",fontSize:10,stack:[2===t.type&&{margin:[0,20,0,0],stack:[{text:"Rekapitul\xe1cia DPH",bold:!0,margin:[0,0,0,10],alignment:"left"},{columns:[{text:"",width:"*"},{width:"auto",stack:[this.buildTaxSummary(t.taxSummary)]}]}]},{margin:[0,1===t.type?40:20,0,0],stack:[this.buildPriceTable(t)]}].filter(m)}]},this.buildSignature(t.signature)],footer:function(t,n){return{stack:[{canvas:[{type:"line",x1:50,y1:5,x2:560,y2:5,lineWidth:.5}]},{columns:[{text:"",width:"25%"},{text:"vygenerovala fakturazdarma.netlify.app",width:"*",alignment:"center",link:"https://fakturazdarma.netlify.app"},{text:"Strana ".concat(t,"/").concat(n),width:"25%",alignment:"right"}],margin:[50,5,50,50],color:"#A9A9A9",italics:!0}],fontSize:8}},styles:{}}}}]),t}(),x=e(7),p=e(2),y=e(898),C={init:4294967295,xorOut:4294967295,refOut:!0,refIn:!0,table:new Uint32Array([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117])};var v=e(921);function L(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("undefined"!==typeof t)for(var r=t.length;n>r;)t=i?t+e:e+t,r++;return t}function w(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=[],e=t.length,i=0,r=e;i<r;i++){var a=void 0,o=t[i],u=encodeURIComponent(o).replaceAll("%","");a="\t"!==o&&u!==o?u:Number(t.charCodeAt(i)).toString(16),n.push(L(a,2,0))}return n.join("")}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Number(parseInt(t,2).toString(10))}function P(t){var n=t.toString(16);return n.length%2>0&&(n="0"+n),n}function k(t){return parseInt(t,16)}function z(t){return function(){return parseInt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",16).toString(2)}(P(t))}function j(t){var n,e,i=null!==(n=null===(e=t.match(/.{1,2}/g))||void 0===e?void 0:e.map((function(t){return parseInt(t,16)})))&&void 0!==n?n:[];return new Uint8Array(i)}function O(t,n){var e=t.trim();return n-3<=0?"":e.length>=n?"".concat(e.slice(0,n-3),"..."):e}function R(t){return["","1","1",t.amount,t.currency,t.dueDate,t.variableSymbol,t.constantSymbol,t.specificSymbol,"",t.note,"1",t.iban,t.swiftCode,"0","0"].join("\t")}var D=function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,[{key:"create",value:function(t){var n=t.note,e=R(Object(p.a)(Object(p.a)({},t),{},{note:""})),i=Math.min(124,Math.max(0,550-e.length)),r=P(function(t){var n=C.xorOut,e=C.table,i=C.init;if(C.refOut){var r,a=Object(y.a)(t);try{for(a.s();!(r=a.n()).done;)i=e[255&(r.value^i)]^i>>8&16777215}catch(l){a.e(l)}finally{a.f()}}else{var o,u=Object(y.a)(t);try{for(u.s();!(o=u.n()).done;)i=e[255&(i>>24^o.value)]^i<<8}catch(l){u.e(l)}finally{u.f()}}return(i^n)>>>0}(j(w(e=R(Object(p.a)(Object(p.a)({},t),{},{note:O(n,i)}))))));e=function(t){for(var n=[],e=t.length-2;e>=0;)n.push(t.substr(e,2)),e-=2;return n.join("")}(r)+w(e);var a,o,u=(a=Object(v.a)(j(e)),Array.from(new Uint8Array(a)).map((function(t){return t.toString(16).padStart(2,"0")})).join("")).slice(26),l=j(u),d=[0,0].concat(Object(x.a)(function(t,n){var e,i,r=L(P(t),n,0,!0);return null!==(e=null===(i=String(r).match(/[\dA-F]{2}/gi))||void 0===i?void 0:i.map(k))&&void 0!==e?e:[]}(e.length/2,4)),Object(x.a)(Array.from(new Uint8Array(l)))).map((function(t){return L(z(t),8,0)})).join(""),c=d.length,g=c%5;g>0&&(d+=L("",o=5-g,0),c+=o),c/=5;for(var s=new Array(c),f=0;f<c;f+=1){var h=d.substr(5*f,5);s[f]="0123456789ABCDEFGHIJKLMNOPQRSTUV"[S(h)]}return s.join("")}}]),t}(),M=e(904),I=e(905),W=function(t){return'\n<svg width="100%" height="100%" viewBox="0 0 33 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-3.71936,-3.88956)">\n        <g transform="matrix(1,0,0,1,2.1803,0.389917)">\n            <g transform="matrix(2.5,0,0,2.5,8.52781,38.3885)">\n                <path d="M0.073,-0L0.073,-0.716L0.305,-0.716C0.393,-0.716 0.45,-0.712 0.477,-0.705C0.518,-0.694 0.552,-0.671 0.58,-0.635C0.607,-0.599 0.621,-0.553 0.621,-0.496C0.621,-0.452 0.613,-0.415 0.597,-0.385C0.581,-0.355 0.561,-0.331 0.536,-0.314C0.512,-0.297 0.487,-0.286 0.461,-0.28C0.427,-0.273 0.377,-0.27 0.312,-0.27L0.217,-0.27L0.217,-0L0.073,-0ZM0.217,-0.595L0.217,-0.392L0.296,-0.392C0.353,-0.392 0.391,-0.395 0.411,-0.403C0.43,-0.41 0.445,-0.422 0.456,-0.438C0.467,-0.454 0.472,-0.472 0.472,-0.494C0.472,-0.52 0.465,-0.541 0.449,-0.558C0.434,-0.575 0.415,-0.586 0.391,-0.59C0.374,-0.593 0.339,-0.595 0.287,-0.595L0.217,-0.595Z" style="fill:rgb(111,164,215);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,10.0097,38.3885)">\n                <path d="M0.718,-0L0.561,-0L0.499,-0.163L0.212,-0.163L0.153,-0L0,-0L0.279,-0.716L0.432,-0.716L0.718,-0ZM0.452,-0.283L0.354,-0.549L0.257,-0.283L0.452,-0.283Z" style="fill:rgb(111,164,215);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,11.5857,38.3885)">\n                <path d="M0.261,-0L0.261,-0.301L-0.001,-0.716L0.168,-0.716L0.336,-0.433L0.501,-0.716L0.668,-0.716L0.405,-0.3L0.405,-0L0.261,-0Z" style="fill:rgb(111,164,215);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,13.9026,38.3885)">\n                <path d="M0.066,-0L0.066,-0.716L0.203,-0.716L0.203,-0.458C0.245,-0.506 0.296,-0.53 0.354,-0.53C0.417,-0.53 0.469,-0.507 0.51,-0.462C0.552,-0.416 0.572,-0.35 0.572,-0.265C0.572,-0.176 0.551,-0.108 0.509,-0.06C0.467,-0.012 0.416,0.012 0.355,0.012C0.326,0.012 0.297,0.004 0.268,-0.01C0.239,-0.025 0.214,-0.047 0.193,-0.076L0.193,-0L0.066,-0ZM0.202,-0.271C0.202,-0.217 0.211,-0.177 0.228,-0.151C0.251,-0.115 0.283,-0.097 0.322,-0.097C0.353,-0.097 0.378,-0.11 0.4,-0.135C0.421,-0.161 0.432,-0.202 0.432,-0.258C0.432,-0.317 0.421,-0.36 0.399,-0.386C0.378,-0.412 0.35,-0.425 0.317,-0.425C0.284,-0.425 0.257,-0.413 0.235,-0.387C0.213,-0.361 0.202,-0.323 0.202,-0.271Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,15.4297,38.3885)">\n                <path d="M0.007,-0.519L0.153,-0.519L0.277,-0.15L0.398,-0.519L0.54,-0.519L0.357,-0.02L0.324,0.071C0.312,0.101 0.301,0.124 0.29,0.14C0.279,0.156 0.266,0.169 0.252,0.179C0.238,0.189 0.221,0.197 0.2,0.202C0.179,0.208 0.156,0.21 0.13,0.21C0.104,0.21 0.078,0.208 0.052,0.202L0.04,0.095C0.062,0.099 0.081,0.101 0.098,0.101C0.13,0.101 0.154,0.092 0.169,0.073C0.184,0.054 0.196,0.03 0.204,0.001L0.007,-0.519Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,17.5146,38.3885)">\n                <path d="M0.023,-0.148L0.161,-0.169C0.167,-0.142 0.179,-0.122 0.197,-0.108C0.215,-0.094 0.24,-0.087 0.272,-0.087C0.307,-0.087 0.334,-0.094 0.352,-0.107C0.364,-0.116 0.37,-0.128 0.37,-0.144C0.37,-0.154 0.367,-0.163 0.36,-0.169C0.354,-0.176 0.338,-0.182 0.314,-0.188C0.204,-0.212 0.134,-0.234 0.104,-0.254C0.063,-0.282 0.042,-0.321 0.042,-0.371C0.042,-0.416 0.06,-0.454 0.096,-0.484C0.131,-0.515 0.186,-0.53 0.261,-0.53C0.332,-0.53 0.384,-0.519 0.419,-0.496C0.453,-0.472 0.477,-0.438 0.49,-0.393L0.361,-0.369C0.355,-0.389 0.345,-0.405 0.329,-0.416C0.314,-0.426 0.292,-0.432 0.263,-0.432C0.227,-0.432 0.201,-0.427 0.186,-0.417C0.175,-0.409 0.17,-0.4 0.17,-0.389C0.17,-0.379 0.174,-0.371 0.184,-0.364C0.196,-0.355 0.239,-0.342 0.312,-0.325C0.385,-0.309 0.436,-0.288 0.465,-0.264C0.493,-0.24 0.508,-0.206 0.508,-0.162C0.508,-0.115 0.488,-0.074 0.448,-0.04C0.409,-0.005 0.35,0.012 0.272,0.012C0.201,0.012 0.145,-0.003 0.104,-0.031C0.063,-0.06 0.036,-0.099 0.023,-0.148Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,18.905,38.3885)">\n                <path d="M0.411,0.197L0.411,-0.063C0.393,-0.04 0.37,-0.022 0.344,-0.009C0.317,0.005 0.288,0.012 0.257,0.012C0.198,0.012 0.15,-0.01 0.112,-0.055C0.067,-0.106 0.044,-0.177 0.044,-0.265C0.044,-0.348 0.066,-0.413 0.108,-0.46C0.15,-0.507 0.202,-0.53 0.265,-0.53C0.299,-0.53 0.329,-0.523 0.354,-0.508C0.379,-0.494 0.402,-0.472 0.421,-0.442L0.421,-0.519L0.548,-0.519L0.548,0.197L0.411,0.197ZM0.415,-0.266C0.415,-0.319 0.404,-0.358 0.383,-0.384C0.361,-0.41 0.334,-0.423 0.301,-0.423C0.268,-0.423 0.24,-0.41 0.218,-0.383C0.196,-0.357 0.185,-0.315 0.185,-0.258C0.185,-0.201 0.195,-0.16 0.217,-0.135C0.238,-0.109 0.265,-0.097 0.296,-0.097C0.328,-0.097 0.356,-0.111 0.379,-0.139C0.403,-0.167 0.415,-0.21 0.415,-0.266Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,20.4321,38.3885)">\n                <path d="M0.413,-0L0.413,-0.078C0.394,-0.05 0.369,-0.028 0.339,-0.012C0.308,0.004 0.275,0.012 0.241,0.012C0.206,0.012 0.175,0.004 0.147,-0.011C0.12,-0.027 0.1,-0.048 0.087,-0.076C0.075,-0.103 0.069,-0.142 0.069,-0.19L0.069,-0.519L0.206,-0.519L0.206,-0.28C0.206,-0.207 0.209,-0.163 0.214,-0.146C0.219,-0.13 0.228,-0.117 0.241,-0.107C0.255,-0.098 0.271,-0.093 0.292,-0.093C0.315,-0.093 0.336,-0.099 0.355,-0.112C0.374,-0.125 0.386,-0.141 0.393,-0.16C0.4,-0.179 0.403,-0.226 0.403,-0.3L0.403,-0.519L0.541,-0.519L0.541,-0L0.413,-0Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,21.9592,38.3885)">\n                <path d="M0.174,-0.36L0.05,-0.383C0.064,-0.433 0.088,-0.47 0.122,-0.494C0.156,-0.518 0.207,-0.53 0.274,-0.53C0.336,-0.53 0.381,-0.523 0.411,-0.509C0.441,-0.494 0.462,-0.476 0.474,-0.453C0.487,-0.431 0.493,-0.39 0.493,-0.331L0.491,-0.17C0.491,-0.125 0.493,-0.091 0.498,-0.07C0.502,-0.048 0.51,-0.025 0.522,-0L0.387,-0C0.383,-0.009 0.379,-0.023 0.374,-0.041C0.371,-0.049 0.37,-0.054 0.369,-0.057C0.345,-0.034 0.32,-0.017 0.293,-0.005C0.267,0.006 0.238,0.012 0.208,0.012C0.155,0.012 0.113,-0.003 0.082,-0.032C0.051,-0.061 0.036,-0.097 0.036,-0.142C0.036,-0.171 0.043,-0.197 0.057,-0.22C0.071,-0.243 0.09,-0.26 0.115,-0.273C0.141,-0.285 0.177,-0.296 0.225,-0.305C0.289,-0.317 0.333,-0.328 0.358,-0.338L0.358,-0.352C0.358,-0.378 0.351,-0.397 0.338,-0.408C0.325,-0.42 0.301,-0.425 0.265,-0.425C0.24,-0.425 0.221,-0.42 0.208,-0.411C0.194,-0.401 0.183,-0.384 0.174,-0.36ZM0.358,-0.249C0.34,-0.243 0.313,-0.236 0.274,-0.228C0.236,-0.22 0.211,-0.212 0.2,-0.204C0.182,-0.191 0.173,-0.175 0.173,-0.156C0.173,-0.137 0.18,-0.12 0.194,-0.106C0.209,-0.092 0.227,-0.085 0.249,-0.085C0.274,-0.085 0.297,-0.093 0.32,-0.109C0.336,-0.122 0.347,-0.137 0.353,-0.155C0.356,-0.167 0.358,-0.189 0.358,-0.222L0.358,-0.249Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,23.3496,38.3885)">\n                <path d="M0.203,-0L0.066,-0L0.066,-0.519L0.193,-0.519L0.193,-0.445C0.215,-0.48 0.235,-0.503 0.252,-0.514C0.27,-0.525 0.289,-0.53 0.312,-0.53C0.343,-0.53 0.373,-0.522 0.402,-0.504L0.359,-0.385C0.336,-0.4 0.315,-0.407 0.295,-0.407C0.276,-0.407 0.259,-0.402 0.246,-0.391C0.233,-0.381 0.222,-0.362 0.215,-0.334C0.207,-0.306 0.203,-0.248 0.203,-0.16L0.203,-0Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n            <g transform="matrix(2.5,0,0,2.5,24.3225,38.3885)">\n                <path d="M0.372,-0.165L0.509,-0.142C0.491,-0.092 0.463,-0.054 0.426,-0.028C0.388,-0.001 0.34,0.012 0.283,0.012C0.193,0.012 0.126,-0.018 0.083,-0.077C0.049,-0.124 0.032,-0.183 0.032,-0.255C0.032,-0.341 0.054,-0.409 0.099,-0.457C0.144,-0.506 0.201,-0.53 0.27,-0.53C0.347,-0.53 0.408,-0.505 0.452,-0.454C0.497,-0.403 0.518,-0.325 0.516,-0.22L0.172,-0.22C0.173,-0.179 0.184,-0.147 0.206,-0.125C0.227,-0.102 0.253,-0.091 0.285,-0.091C0.306,-0.091 0.324,-0.097 0.339,-0.108C0.354,-0.12 0.365,-0.139 0.372,-0.165ZM0.38,-0.304C0.379,-0.343 0.369,-0.374 0.349,-0.394C0.33,-0.415 0.306,-0.425 0.278,-0.425C0.248,-0.425 0.223,-0.414 0.204,-0.393C0.184,-0.371 0.174,-0.341 0.175,-0.304L0.38,-0.304Z" style="fill:rgb(173,174,179);fill-rule:nonzero;"/>\n            </g>\n        </g>\n        <g transform="matrix(0.0687681,0,0,0.0687681,9.16666,9.40286)">\n            <g transform="matrix(1.01632,0,0,0.968849,-8.55376,14.2918)">\n                <path d="M385.855,392.153C385.855,381.595 377.683,373.023 367.618,373.023L326.748,373.023C316.683,373.023 308.511,381.595 308.511,392.153L308.511,430.414C308.511,440.972 316.683,449.544 326.748,449.544L367.618,449.544C377.683,449.544 385.855,440.972 385.855,430.414L385.855,392.153Z" style="fill:rgb(111,164,215);"/>\n            </g>\n            <g transform="matrix(0.957412,-0.118686,0.156775,1.26466,-10.3325,32.2935)">\n                <g transform="matrix(1,0,0,1,1.71205,-2.7779)">\n                    <path d="M346.109,322.625C346.109,321.201 344.584,320.046 342.702,320.046C331.993,320.046 299.084,320.046 288.375,320.046C286.493,320.046 284.968,321.201 284.968,322.625C284.968,327.934 284.968,340.033 284.968,345.342C284.968,346.767 286.493,347.921 288.375,347.921C299.084,347.921 331.993,347.921 342.702,347.921C344.584,347.921 346.109,346.767 346.109,345.342C346.109,340.033 346.109,327.934 346.109,322.625ZM342.655,332.95L288.81,332.95L288.761,344.262L342.606,344.262L342.655,332.95ZM342.666,323.421L288.821,323.421L288.891,327.116L342.736,327.116L342.666,323.421Z" style="fill:white;"/>\n                </g>\n                <g transform="matrix(1.02386,1.25237e-17,0,1,-7.57338,-0.797991)">\n                    <rect x="294.36" y="333.433" width="25.759" height="2.288" style="fill:white;"/>\n                </g>\n                <g transform="matrix(1.02386,1.25237e-17,0,1,-7.57338,3.20201)">\n                    <rect x="294.36" y="333.433" width="25.759" height="2.288" style="fill:white;"/>\n                </g>\n            </g>\n        </g>\n        <g transform="matrix(1.29161,0,0,1.29161,-1.45399,-1.42586)">\n            <path d="M28.441,27.002L28.441,5.077C28.441,5.028 28.421,4.98 28.386,4.945C28.351,4.909 28.303,4.89 28.253,4.89C26.151,4.89 7.07,4.89 4.967,4.89C4.918,4.89 4.87,4.909 4.835,4.945C4.799,4.98 4.78,5.028 4.78,5.077L4.78,28.363C4.78,28.467 4.863,28.551 4.967,28.551C6.854,28.555 22.352,28.585 22.352,28.585" style="fill:none;stroke:rgb(111,164,215);stroke-width:0.39px;"/>\n        </g>\n    </g>\n    '.concat(t,"\n</svg>")},T=function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,[{key:"createSvg",value:function(t){var n=(new D).create(t),e=new M.QRCodeSVG(n);return new I.a({width:26}).process(e.toString()).then((function(t){var n=new DOMParser,e=new XMLSerializer,i=n.parseFromString(t,"image/svg+xml"),r=i.documentElement;r.setAttribute("x","3.2"),r.setAttribute("y","3");var a=e.serializeToString(i);return W(a)}))}}]),t}(),Z=e(5),A=e(93),B=e(122),H=e(140),U=e(397),E=e(108),q=function(t){var n=Number((100*Math.abs(t)).toPrecision(15));return Math.round(n)/100*Math.sign(t)},N=function(t){if(t)return H.b.format(t).toUpperCase().replace(/[^A-Z0-9\\.]/g,"")},F=function(t){if(t){var n=t.getFullYear(),e=Object(U.a)(String(t.getMonth()+1),2,"0"),i=Object(U.a)(String(t.getDate()),2,"0");return"".concat(n).concat(e).concat(i)}},J=function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,[{key:"mapTaxSummary",value:function(t){if(!Array.isArray(t))return[];var n=H.a.format,e=t.reduce((function(t,n){var e,i=n.taxRate,r=n.netPrice,a=null!==(e=t.get(i))&&void 0!==e?e:0;return t.set(i,a+r),t}),new Map),i=Array.from(e.entries()).map((function(t){var n=Object(Z.a)(t,2),e=n[0],i=n[1],r=i/100*e;return{taxRate:e,netPrice:i,taxPrice:r,grossPrice:i+r}})).sort((function(t,n){var e=t.taxRate,i=n.taxRate;return e<i?-1:e>i?1:0}));if(i.length>1){var r=i.reduce((function(t,n){return t.netPrice+=n.netPrice,t.taxPrice+=n.taxPrice,t.grossPrice+=n.grossPrice,t}),{taxRate:-1,netPrice:0,taxPrice:0,grossPrice:0});i.push(r)}return i.map((function(t){var e=t.taxRate,i=t.netPrice,r=t.taxPrice,a=t.grossPrice;return{taxRate:-1===e?"Celkom":"".concat(e," %"),netPrice:n(i),taxPrice:n(r),grossPrice:n(a)}}))}},{key:"formatBySquare",value:function(t){var n=t.emitent,e=void 0===n?new A.a:n;return{amount:q(t.netPrice),currency:E.b,dueDate:F(t.dueDate),variableSymbol:t.variableSymbol,constantSymbol:t.constantSymbol,specificSymbol:"",note:"\xdahrada fakt\xfary ".concat(t.variableSymbol),iban:e.iban,swiftCode:e.swift}}},{key:"format",value:function(t){var n=H.e.format,e=H.a.format,i=t.emitent,r=void 0===i?new A.a:i,a=t.recipient,o=void 0===a?new A.a:a;return{id:t.id,type:t.type,paymentType:E.f[t.paymentType]||"",currency:E.b,dueDate:N(t.dueDate),issueDate:N(t.issueDate),deliveryDate:N(t.deliveryDate),paymentDate:N(t.paymentDate),variableSymbol:t.variableSymbol,constantSymbol:t.constantSymbol,orderNr:t.orderNr,description:t.description,finalText:t.finalText,discount:t.discount,items:t.items.map((function(i){var r=new B.a(i);return t.isTaxable||(r.taxRate=0),Object(p.a)(Object(p.a)({},i),{},{pricePerUnit:"".concat(n(r.pricePerUnit)," ").concat(E.c),grossPrice:e(r.grossPrice),netPrice:e(r.netPrice),taxPrice:e(r.taxPrice)})})),emitent:Object(p.a)(Object(p.a)({},r),{},{iban:Object(H.c)(r.iban),zipCode:Object(H.d)(r.zipCode)}),recipient:Object(p.a)(Object(p.a)({},o),{},{zipCode:Object(H.d)(o.zipCode)}),grossPrice:e(t.grossPrice),netPrice:e(t.netPrice),discountPrice:e(t.discountPrice),taxSummary:this.mapTaxSummary(t.items),bySquare:this.formatBySquare(t),signature:r.signature}}}]),t}();d.a.vfs=g.a.pdfMake.vfs;var V=function(){function t(){Object(r.a)(this,t)}return Object(a.a)(t,[{key:"createPdf",value:function(){var t=Object(i.a)(u.a.mark((function t(n){var e,i,r,a,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new J,i=new T,r=new b,a=e.format(n),t.next=6,i.createSvg(a.bySquare);case 6:return o=t.sent,l=r.setInvoice(a).setBySquareSvg(o).getDefinition(),t.abrupt("return",d.a.createPdf(l));case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},{key:"downloadPdf",value:function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.createPdf(n);case 2:t.sent.download("Fakt\xfara_"+n.id+".pdf");case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"openPdf",value:function(){var t=Object(i.a)(u.a.mark((function t(n){var e,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.createPdf(n);case 2:e=t.sent,i=window.open("","_blank"),e.open({},i);case 5:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()}]),t}()},912:function(t,n){},914:function(t,n){}}]);
//# sourceMappingURL=4.9323623d.chunk.js.map