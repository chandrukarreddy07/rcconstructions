function g(id){return parseFloat(document.getElementById(id).value)||0;}
function calc(){
let L=g("L"), H=g("H"), T=g("T")/1000;
let Lm=L*0.3048, Hm=H*0.3048;
let wallArea=Lm*Hm;

let doorArea=(g("dl")*0.3048)*(g("dh")*0.3048)*g("dq");
let winArea=(g("wl")*0.3048)*(g("wh")*0.3048)*g("wq");

let netArea=wallArea-(doorArea+winArea);
let wetVol=netArea*T;
let dryVol=wetVol*g("df");

let c=g("c"), s=g("s");
let cementVol=dryVol*(c/(c+s));
let sandVol=dryVol*(s/(c+s));
let cementWt=cementVol*1440;
let cementBags=cementWt/50;

summary.innerHTML=`<h3>Inputs Summary</h3>
<table>
<tr><th>Item</th><th>Value</th><th>Converted</th></tr>
<tr><td>Wall size</td><td>${L}×${H} ft</td><td>${Lm.toFixed(2)}×${Hm.toFixed(2)} m</td></tr>
<tr><td>Plaster thickness</td><td>${g("T")} mm</td><td>${T.toFixed(3)} m</td></tr>
<tr><td>Openings area</td><td>Door + Window</td><td>${(doorArea+winArea).toFixed(3)} m²</td></tr>
<tr><td>Mix ratio</td><td>${c}:${s}</td><td>Total ${c+s}</td></tr>
<tr><td>Dry factor</td><td>${g("df")}</td><td>Wet → Dry</td></tr>
</table>`;

results.innerHTML=`<h3>Results</h3>
<table>
<tr><th>Item</th><th>Value</th><th>Unit</th></tr>
<tr><td>Net plaster area</td><td>${netArea.toFixed(3)}</td><td>m²</td></tr>
<tr><td>Wet volume of mortar</td><td>${wetVol.toFixed(3)}</td><td>m³</td></tr>
<tr><td>Dry volume of mortar</td><td>${dryVol.toFixed(3)}</td><td>m³</td></tr>
<tr><td>Volume of cement</td><td>${cementVol.toFixed(3)}</td><td>m³</td></tr>
<tr><td>Weight of cement</td><td>${cementWt.toFixed(1)}</td><td>kg</td></tr>
<tr><td>No. of cement bags</td><td>${cementBags.toFixed(2)}</td><td>50 kg bags</td></tr>
<tr><td>Volume of sand</td><td>${sandVol.toFixed(3)}</td><td>m³</td></tr>
</table>`;
}
