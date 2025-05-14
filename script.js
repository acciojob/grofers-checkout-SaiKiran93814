const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const priceCells = document.querySelectorAll('.prices');

  // Calculate the total price
  let total = 0;
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Create a new row to display total
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Span across 2 columns and set content
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);

  // Append total row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);

  // Disable the button to avoid duplicate total rows
  getSumBtn.disabled = true;

  
};

getSumBtn.addEventListener("click", getSum);

