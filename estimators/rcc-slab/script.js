
function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let L=v("L"), B=v("B"), T=v("T");
  let mix=v("mix"), df=v("df"), steel=v("steel");

  let wet=L*B*T;
  let dry=wet*df;

  let cementVol=dry/mix;
  let sandVol=cementVol*1.5;
  let aggVol=cementVol*3;

  let cementKg=cementVol*1440;
  let bags=cementKg/50;

  let steelKg=wet*7850*(steel/100);

  document.getElementById("summary").innerHTML=`
  <h3>Inputs Summary</h3>
  <table>
    <tr><th>Item</th><th>Value</th></tr>
    <tr><td>Slab Size</td><td>${L} × ${B} × ${T} m</td></tr>
    <tr><td>Mix Ratio Total</td><td>${mix}</td></tr>
    <tr><td>Dry Factor</td><td>${df}</td></tr>
    <tr><td>Steel %</td><td>${steel}</td></tr>
  </table>`;

  document.getElementById("results").innerHTML=`
  <h3>Results</h3>
  <table>
    <tr><th>Item</th><th>Value</th><th>Unit</th></tr>
    <tr><td>Wet Concrete Volume</td><td>${wet.toFixed(3)}</td><td>m³</td></tr>
    <tr><td>Dry Concrete Volume</td><td>${dry.toFixed(3)}</td><td>m³</td></tr>
    <tr><td>Cement</td><td>${bags.toFixed(2)}</td><td>Bags</td></tr>
    <tr><td>Sand</td><td>${sandVol.toFixed(3)}</td><td>m³</td></tr>
    <tr><td>Aggregate</td><td>${aggVol.toFixed(3)}</td><td>m³</td></tr>
    <tr><td>Steel</td><td>${steelKg.toFixed(1)}</td><td>kg</td></tr>
  </table>`;
}
