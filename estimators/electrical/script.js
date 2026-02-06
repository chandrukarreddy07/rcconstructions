
function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let LP=v("LP"), FP=v("FP"), PP=v("PP");
  let WL=v("WL"), WR=v("WR");

  let totalPoints = LP + FP + PP;
  let wireLength = totalPoints * WL;
  let wireCost = wireLength * WR;

  document.getElementById("summary").innerHTML = `
  <h3>Inputs Summary</h3>
  <table>
    <tr><th>Item</th><th>Value</th></tr>
    <tr><td>Total Points</td><td>${totalPoints}</td></tr>
    <tr><td>Wire Length per Point</td><td>${WL} m</td></tr>
    <tr><td>Wire Rate</td><td>₹ ${WR} / m</td></tr>
  </table>`;

  document.getElementById("results").innerHTML = `
  <h3>Results</h3>
  <table>
    <tr><th>Item</th><th>Value</th><th>Unit</th></tr>
    <tr><td>Total Wire Length</td><td>${wireLength.toFixed(2)}</td><td>m</td></tr>
    <tr><td>Total Wire Cost</td><td>${wireCost.toFixed(2)}</td><td>₹</td></tr>
  </table>`;
}
