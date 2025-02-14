const BASE_URL ="https://67af2d929e85da2f020fca24.mockapi.io";
// ข้อมูลสินค้า
const products = [
    { id: 1, name: "ตัวหนัง 1", price: 100 },
    { id: 2, name: "ตัวหนัง 2", price: 200 },
    { id: 3, name: "ตัวหนัง 3", price: 300 },
  ];
  
  // ฟังก์ชันแสดงสินค้า
  function displayProducts() {
    const productHTML = products.map((product) => {
      return `
        <div>
          <h2>${product.name}</h2>
          <p>ราคา: ${product.price} บาท</p>
          <button>ซื้อ</button>
        </div>
      `;
    }).join("");
    document.getElementById("product-list").innerHTML = productHTML;
  }
  
  // ฟังก์ชันซื้อสินค้า
  function buyProduct(productId) {
    const product = products.find((product) => product.id === productId);
    if (product) {
      alert(`คุณซื้อ ${product.name} แล้ว`);
    } else {
      alert("สินค้าไม่มีอยู่");
    }
  }
  
  // เรียกฟังก์ชันแสดงสินค้า
  displayProducts();
  
  // เพิ่มเหตุการณ์คลิกบนปุ่มซื้อ
  document.querySelectorAll("#product-list button").forEach((button, index) => {
    button.addEventListener("click", () => {
      buyProduct(products[index].id);
    });
  });
  