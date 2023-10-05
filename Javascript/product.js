const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Home/Product1.jpeg",
      name: "Flame Fur Cardigan",
      price: "Rp 270.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Home/Product2.jpeg",
      name: "Black Tartan Shirt",
      price: "Rp 200.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Home/Product3.jpeg",
      name: "Milky Leather Jacket",
      price: "Rp 400.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Home/Product4.jpeg",
      name: "Milky sport set",
      price: "Rp 300.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Home/Product5.jpeg",
      name: "A-line black skirt",
      price: "Rp 175.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Home/Product6.jpeg",
      name: "BlueSky Graphic SwetShirt",
      price: "Rp 150.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Home/Product7.jpeg",
      name: "Lime Green Oversized Shirt",
      price: "Rp 180.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Home/product8.jpeg",
      name: "A-Line White Midi Skirt",
      price: "Rp 150.000"
    }
];

const parentProduct = document.getElementById('parent-product');

productData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('row');
    productCard.id = product.id;

    productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">
        <div class="product-text">
            <h5>New</h5>
        </div>
        <div class="heart-icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="ratting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button class="btn-co" onclick="redirectToCheckout('${product.id}')">Buy</button>
        </div>
    `;

    parentProduct.appendChild(productCard);
});

function redirectToCheckout(productId) {
  console.log("redirect to checkout");
  console.log(productId);
  const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Home/Product1.jpeg",
      name: "Flame Fur Cardigan",
      price: "Rp 270.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Home/Product2.jpeg",
      name: "Black Tartan Shirt",
      price: "Rp 200.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Home/Product3.jpeg",
      name: "Milky Leather Jacket",
      price: "Rp 400.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Home/Product4.jpeg",
      name: "Milky sport set",
      price: "Rp 300.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Home/Product5.jpeg",
      name: "A-line black skirt",
      price: "Rp 175.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Home/Product6.jpeg",
      name: "BlueSky Graphic SwetShirt",
      price: "Rp 150.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Home/Product7.jpeg",
      name: "Lime Green Oversized Shirt",
      price: "Rp 180.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Home/product8.jpeg",
      name: "A-Line White Midi Skirt",
      price: "Rp 150.000"
    }
];
  const product =productData.filter(product => product.id === productId);
  console.log("redirect to checkout");
  localStorage.setItem('productData', JSON.stringify(product[0]));
  window.location.href = 'Layout%20Checkout.HTML';
}
