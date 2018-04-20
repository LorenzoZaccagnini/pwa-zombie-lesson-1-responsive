/**
 * Load the page and hope to survive until the end
 */

const stock_items = [
  {name: 'Antibiotics', img_src: 'img/antibiotics.png', quantity: 'empty'},
  {name: 'Painkillers', img_src: 'img/painkillers.png', quantity: 'low'},
  {name: 'Bandages', img_src: 'img/bandages.png', quantity: 'low'},
  {name: 'Fuel', img_src: 'img/fuel.png', quantity: 'low'},
  {name: 'Tires', img_src: 'img/tires.png', quantity: 'low'},
  {name: 'Smartphones', img_src: 'img/phones.png', quantity: 'medium'},
  {name: 'Melee weapons', img_src: 'img/melee.png', quantity: 'medium'},
  {name: 'Rifles', img_src: 'img/rifles.png', quantity: 'medium'},
  {name: 'Food', img_src: 'img/food.png', quantity: 'full'},
  {name: 'Water', img_src: 'img/water.png', quantity: 'low'},
  {name: 'Ammo', img_src: 'img/ammo.png', quantity: 'empty'},
  {name: 'Construction material', img_src: 'img/build_material.png', quantity: 'full'},
]
document.addEventListener('DOMContentLoaded', (event) => {
  fillItemsHTML();
});


fillItemsHTML = () => {
  const ul = document.getElementById('items-list');
  stock_items.forEach(item => {
    ul.append(createItemsHTML(item));
  });
}

/**
 * Spawn the items
 */
createItemsHTML = (item) => {
  const li = document.createElement('li');

  const image = document.createElement('img');
  image.className = 'item-img';
  image.src = item.img_src;
  li.append(image);

  const name = document.createElement('div');
  name.innerHTML =  item.name;
  name.className = 'item-name';
  li.append(name);

  const quantity = document.createElement('div');
  quantity.innerHTML = item.quantity;
  quantity.className = 'item-quantity';
  li.append(quantity);


  return li
}
