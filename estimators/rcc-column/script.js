function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let L=v("L"), B=v("B"), H=v("H"), N=v("N");
  let wet = L*B*H*N;
  let dry = wet*v("df");

  let mix = document.getElementById("grade").value.split(":").map(Number);
  let sum = mix[0]+mix[1]+mix[2];

  let cementVol = dry*(mix[0]/sum);
  let sandVol   = dry*(mix[1]/sum);
  let aggVol    = dry*(mix[2]/sum);

  let cementKg = cementVol*1440;
  let bags = cementKg/50;

  let mainSteel = (v("mbd")**2/162)*H*v("mbq")*N;

  let spacing = v("ss")/1000;
  let stirCount = Math.floor(H/spacing)+1;
  let stirLen = 2*(L+B)+0.2;
  let stirSteel = (v("sd")**2/162)*stirLen*stirCount*N;

  document.getElementById("output").innerHTML = `
  <div class="result">
    <h3>Results</h3>
    <table>
      <tr><th>Item</th><th>Value</th><th>Unit</th></tr>
      <tr><td>Wet Concrete</td><td>${wet.toFixed(3)}</td><td>m³</td></tr>
      <tr><td>Dry Concrete</td><td>${dry.toFixed(3)}</td><td>m³</td></tr>
      <tr><td>Cement</td><td>${bags.toFixed(2)}</td><td>Bags</td></tr>
      <tr><td>Sand</td><td>${sandVol.toFixed(3)}</td><td>m³</td></tr>
      <tr><td>Aggregate</td><td>${aggVol.toFixed(3)}</td><td>m³</td></tr>
      <tr><td>Main Steel</td><td>${mainSteel.toFixed(2)}</td><td>kg</td></tr>
      <tr><td>Stirrups Steel</td><td>${stirSteel.toFixed(2)}</td><td>kg</td></tr>
      <tr><td><b>Total Steel</b></td><td><b>${(mainSteel+stirSteel).toFixed(2)}</b></td><td>kg</td></tr>
    </table>
  </div>`;
}
