
import React from 'react';
import './imageEditor.css';

const menuItems = [
  // Sencillos
  { id: 1, name: 'Bizcocho de vainilla', price: '1 libra - RD$1,900' },
  { id: 2, name: 'Bizcocho de chocolate', price: '1 libra - RD$1,900' },
  { id: 3, name: 'Bizcocho de fresa', price: '1 libra - RD$1,900' },
  { id: 4, name: 'Bizcocho de zanahoria', price: '1 libra - RD$1,900' },
  { id: 5, name: 'Bizcocho de coco', price: '1 libra - RD$1,900' },
  { id: 6, name: 'Bizcocho de Pistacho', price: '1 libra - RD$1,900' },
  //  bizcochos

  // Especiales
  { id: 7, name: 'Coco con piña pa´ la niña', price: '1 libra - RD$2150' },
  { id: 8, name: 'Dulce de leche y crema', price: '1 libra - RD$2150' },
  { id: 9, name: 'Choco-leche', price: '1 libra - RD$2150' },
  { id: 10, name: 'Choco-Nutella', price: '1 libra - RD$2150' },
  { id: 11, name: 'Mestizo', price: '1 libra - RD$2150' },
  { id: 12, name: 'Triple dulce', price: '1 libra - RD$2150' },
  { id: 13, name: 'Crema de pistacho', price: '1 libra - RD$2150' },
  { id: 14, name: 'Zanahoria Doble', price: '1 libra - RD$2150' },
  //  bizcochos
];

const Bizcochos = () => {
  return (
    <div className="imageGrid">
      {menuItems.map((item) => (
        <div key={item.id} className="imageItem">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Bizcochos;