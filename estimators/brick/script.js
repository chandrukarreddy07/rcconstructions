function g(id){return parseFloat(document.getElementById(id).value)||0;}
function calc(){
let L=g("L"),W=g("W"),H=g("H");
let Lm=L*0.3048, Wm=W*0.3048, Hm=H*0.3048;
let wallVol=Lm*Wm*Hm;

let bl=g("bl")/1000, bw=g("bw")/1000, bh=g("bh")/1000;
let brickVol=bl*bw*bh;

let mt=g("mt")/1000;
let doorVol=(g("dl")*0.3048)*(g("dh")*0.3048)*Wm*g("dq");
let winVol=(g("wl")*0.3048)*(g("wh")*0.3048)*Wm*g("wq");

let netWallVol=wallVol-(doorVol+winVol);
let bricks=Math.ceil(netWallVol/(brickVol+mt*brickVol));

let c=g("c"), s=g("s");
let mortarVol=netWallVol*0.3;
let dryMortar=mortarVol*(1+(g("wd")/100));
let cementVol=dryMortar*(c/(c+s));
let sandVol=dryMortar*(s/(c+s));
let cementWt=cementVol*1440;
let cementBags=cementWt/50;

summary.innerHTML=`<h3>Inputs Summary</h3>
<table>
<tr><th>Item</th><th>Value</th><th>Converted</th></tr>
<tr><td>Wall size</td><td>${L}×${W}×${H} ft</td><td>${Lm.toFixed(3)}×${Wm.toFixed(3)}×${Hm.toFixed(3)} m</td></tr>
<tr><td>Brick size</td><td>${g("bl")}×${g("bw")}×${g("bh")} mm</td><td>${bl.toFixed(3)}×${bw.toFixed(3)}×${bh.toFixed(3)} m</td></tr>
<tr><td>Mortar thickness</td><td>${g("mt")} mm</td><td>${mt.toFixed(3)} m</td></tr>
<tr><td>Openings</td><td>Door & Window</td><td>${(doorVol+winVol).toFixed(3)} m³</td></tr>
<tr><td>Mix ratio</td><td>${c}:${s}</td><td>Total ${c+s}</td></tr>
</table>`;

results.innerHTML=`<h3>Results</h3>
<table>
<tr><th>Item</th><th>Value</th><th>Unit</th></tr>
<tr><td>No. of bricks required</td><td>${bricks}</td><td>No.</td></tr>
<tr><td>Volume of sand required</td><td>${sandVol.toFixed(3)}</td><td>m³</td></tr>
<tr><td>Weight of cement required</td><td>${cementWt.toFixed(1)}</td><td>kg</td></tr>
<tr><td>No. of cement bags</td><td>${cementBags.toFixed(2)}</td><td>50 kg bags</td></tr>
</table>`;
}
