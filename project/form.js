const products = [
  { id: 'romira-hook', name: 'Romira Hook Set' },
  { id: 'romira-yarn', name: 'Romira Yarn Bundle' },
  { id: 'romira-kit', name: 'Romira Starter Kit' }
];

const selectElement = document.getElementById('product');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
