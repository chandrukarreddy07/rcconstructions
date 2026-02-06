
function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let B=v("B"), WC=v("WC"), WB=v("WB"), SH=v("SH");
  let PL=v("PL"), PR=v("PR");
  let WCR=v("WCR"), WBR=v("WBR"), SHR=v("SHR");

  let totalWC=B*WC, totalWB=B*WB, totalSH=B*SH;
  let pipeLength=B*PL;
  let pipeCost=pipeLength*PR;

  let fixtureCost = (totalWC*WCR) + (totalWB*WBR) + (totalSH*SHR);
  let totalCost = pipeCost + fixtureCost;

  document.getElementById("summary").innerHTML = `
  <h3>Inputs Summary</h3>
  <table>
    <tr><th>Item</th><th>Value</th></tr>
    <tr><td>No. of Bathrooms</td><td>${B}</td></tr>
    <tr><td>Total WC</td><td>${totalWC}</td></tr>
    <tr><td>Total Wash Basins</td><td>${totalWB}</td></tr>
    <tr><td>Total Showers</td><td>${totalSH}</td></tr>
  </table>`;

  document.getElementById("results").innerHTML = `
  <h3>Results</h3>
  <table>
    <tr><th>Item</th><th>Value</th><th>Unit</th></tr>
    <tr><td>Total Pipe Length</td><td>${pipeLength.toFixed(2)}</td><td>m</td></tr>
    <tr><td>Pipe Cost</td><td>${pipeCost.toFixed(2)}</td><td>₹</td></tr>
    <tr><td>Fixture Cost</td><td>${fixtureCost.toFixed(2)}</td><td>₹</td></tr>
    <tr><td><b>Total Plumbing Cost</b></td><td><b>${totalCost.toFixed(2)}</b></td><td>₹</td></tr>
  </table>`;
}
