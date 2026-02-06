
function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let doorArea = v("DW") * v("DH") * v("DN");
  let windowArea = v("WW") * v("WH") * v("WN");
  let totalArea = doorArea + windowArea;

  document.getElementById("summary").innerHTML = `
  <h3>Inputs Summary</h3>
  <table>
    <tr><th>Item</th><th>Value</th></tr>
    <tr><td>Door Area</td><td>${doorArea.toFixed(2)} m²</td></tr>
    <tr><td>Window Area</td><td>${windowArea.toFixed(2)} m²</td></tr>
  </table>`;

  document.getElementById("results").innerHTML = `
  <h3>Results</h3>
  <table>
    <tr><th>Item</th><th>Value</th><th>Unit</th></tr>
    <tr><td>Total Door Area</td><td>${doorArea.toFixed(2)}</td><td>m²</td></tr>
    <tr><td>Total Window Area</td><td>${windowArea.toFixed(2)}</td><td>m²</td></tr>
    <tr><td><b>Total Openings Area</b></td><td><b>${totalArea.toFixed(2)}</b></td><td>m²</td></tr>
  </table>`;
}
