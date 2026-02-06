
function v(id){return parseFloat(document.getElementById(id).value)||0;}

function calculate(){
  let total =
    v("RCC")+v("BRICK")+v("PLASTER")+
    v("FLOOR")+v("PAINT")+v("DW")+
    v("ELEC")+v("PLUMB");

  let area=v("AREA");
  let rate = area>0 ? total/area : 0;

  document.getElementById("results").innerHTML = `
  <h3>Final Cost Summary</h3>
  <table>
    <tr><th>Item</th><th>Amount (₹)</th></tr>
    <tr><td>RCC Works</td><td>${v("RCC").toFixed(2)}</td></tr>
    <tr><td>Brick Masonry</td><td>${v("BRICK").toFixed(2)}</td></tr>
    <tr><td>Plaster</td><td>${v("PLASTER").toFixed(2)}</td></tr>
    <tr><td>Flooring</td><td>${v("FLOOR").toFixed(2)}</td></tr>
    <tr><td>Painting</td><td>${v("PAINT").toFixed(2)}</td></tr>
    <tr><td>Doors & Windows</td><td>${v("DW").toFixed(2)}</td></tr>
    <tr><td>Electrical</td><td>${v("ELEC").toFixed(2)}</td></tr>
    <tr><td>Plumbing</td><td>${v("PLUMB").toFixed(2)}</td></tr>
    <tr><th>Total Cost</th><th>${total.toFixed(2)}</th></tr>
    <tr><th>Cost per sq.ft</th><th>${rate.toFixed(2)}</th></tr>
  </table>`;
}
