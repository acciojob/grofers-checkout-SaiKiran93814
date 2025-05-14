const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll('.price');
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    total += isNaN(value) ? 0 : value;
  });

  // Check if ans already exists
  let ans = document.getElementById('ans');
  if (!ans) {
    ans = document.createElement('div');
    ans.id = 'ans';
    document.body.appendChild(ans);
  }

  ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);

