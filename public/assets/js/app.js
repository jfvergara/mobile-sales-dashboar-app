import { fetchSalesData } from './sheets.js';

const totalSalesEl = document.getElementById('total-sales');
const tableBody = document.querySelector('#sales-table tbody');
const chartEl = document.getElementById('sales-chart');

function formatCurrency(num) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function renderTable(rows) {
  tableBody.innerHTML = '';
  rows.forEach(([date, amount]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${date}</td><td>${amount}</td>`;
    tableBody.appendChild(tr);
  });
}

function renderChart(rows) {
  const labels = rows.map(r => r[0]);
  const data = rows.map(r => Number(r[1].replace(/[^\d.-]+/g, '')));
  new window.Chart(chartEl, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Ventas',
        data,
        backgroundColor: '#4285f4',
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

async function main() {
  try {
    const rows = await fetchSalesData();
    renderTable(rows);
    const total = rows.reduce((sum, r) => sum + Number(r[1].replace(/[^\d.-]+/g, '')), 0);
    totalSalesEl.textContent = `Total de ventas mensuales: ${formatCurrency(total)}`;
    renderChart(rows);
  } catch (e) {
    totalSalesEl.textContent = 'Error cargando datos';
  }
}

main(); 