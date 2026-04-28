function addItem() {
  let table = document.getElementById("items");

  let row = table.insertRow();

  row.innerHTML = `
    <td><input type="text"></td>
    <td><input type="number" onchange="calculate()"></td>
    <td><input type="number" onchange="calculate()"></td>
    <td class="total">0</td>
  `;
}

function calculate() {
  let rows = document.querySelectorAll("#items tr");
  let grandTotal = 0;

  rows.forEach((row, index) => {
    if (index === 0) return;

    let price = row.cells[1].children[0].value || 0;
    let qty = row.cells[2].children[0].value || 0;

    let total = price * qty;
    row.cells[3].innerText = total;

    grandTotal += total;
  });

  document.getElementById("grandTotal").innerText = grandTotal;
}