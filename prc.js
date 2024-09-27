// Define 16 product objects
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 50.99,
        quantity: 2,
        description: "Bluetooth over-ear headphones with noise cancellation.",
        category: "Electronics",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH4EUzPKMCfgcMGth4-qcoBXMwn_NeJuwEg&s",
    },
    {
        id: 2,
        name: "Smartphone",
        price: 399.99,
        quantity: 1,
        description: "Latest model smartphone with 128GB storage.",
        category: "Electronics",
        imageUrl: "https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg",
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 79.95,
        quantity: 1,
        description: "Lightweight running shoes for everyday use.",
        category: "Footwear",
        imageUrl: "https://storage.apex4u.com/a0bb8d35-def9-47aa-94d7-b74f46ce4a14.jpg",
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 199.99,
        quantity: 1,
        description: "Fitness tracker with heart rate monitor.",
        category: "Electronics",
        imageUrl: "https://www.startech.com.bd/image/cache/catalog/smart-watch/xpert/star/star-02-500x500.webp",
    },
    {
        id: 5,
        name: "Gaming Laptop",
        price: 999.99,
        quantity: 1,
        description: "High-performance laptop for gaming.",
        category: "Computers",
        imageUrl: "https://computermania-bd.b-cdn.net/wp-content/uploads/10.-Lenovo-Legion.jpg",
    },
    {
        id: 6,
        name: "Backpack",
        price: 49.99,
        quantity: 1,
        description: "Water-resistant backpack with multiple compartments.",
        category: "Accessories",
        imageUrl: "https://www.batabd.com/cdn/shop/files/1_0b3b4a01-0b39-49e5-b71d-d33cfffaff39_1024x1024.jpg?v=1712047594",
    },
    {
        id: 7,
        name: "Electric Toothbrush",
        price: 29.99,
        quantity: 2,
        description: "Rechargeable toothbrush with soft bristles.",
        category: "Health & Personal Care",
        imageUrl: "https://static-01.daraz.com.bd/p/88338b46762787732e1cddfadb9933db.jpgg",
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        price: 89.99,
        quantity: 1,
        description: "Portable speaker with excellent sound quality.",
        category: "Electronics",
        imageUrl: "https://media.e-valy.com/cms/products/images/64233a39-e41b-4715-96f4-660c4525b580",
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: 25.99,
        quantity: 1,
        description: "Eco-friendly, non-slip yoga mat.",
        category: "Sports",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE3IQnfYLnCAiFG0ELoUvoODYWZBc02VliQ&s",
    },
    {
        id: 10,
        name: "Coffee Maker",
        price: 99.99,
        quantity: 1,
        description: "Programmable coffee maker with 12-cup capacity.",
        category: "Kitchen Appliances",
        imageUrl: "https://www.bdshop.com/pub/media/catalog/product/cache/0a9842a5e3033a11158d10717601d786/p/h/philips_hd7432-20_daily_collection_coffee_maker_in_bdsop.jpg",
    },
    {
        id: 11,
        name: "Office Chair",
        price: 159.99,
        quantity: 1,
        description: "Ergonomic office chair with lumbar support.",
        category: "Furniture",
        imageUrl: "https://i5.walmartimages.com/seo/Lacoo-Faux-Leather-High-Back-Executive-Office-Chair-with-Lumbar-Support-Black_bf489981-70b3-42c2-972e-93ea9995756c.160b1f502b31db454018d773aed8b003.jpeg",
    },
    {
        id: 12,
        name: "Sunglasses",
        price: 29.99,
        quantity: 1,
        description: "Polarized sunglasses with UV protection.",
        category: "Accessories",
        imageUrl: "https://media.e-valy.com/cms/products/images/d6f3370b-978b-4c4c-8d98-5e829c897321",
    },
    {
        id: 13,
        name: "Action Camera",
        price: 249.99,
        quantity: 1,
        description: "4K waterproof action camera with stabilization.",
        category: "Electronics",
        imageUrl: "https://i0.wp.com/camerabazar.net/wp-content/uploads/2023/09/GoPro-HERO12-Black-Action-Camera-1.webp?fit=1080%2C1080&ssl=1",
    },
    {
        id: 14,
        name: "Blender",
        price: 49.99,
        quantity: 1,
        description: "High-speed blender with multiple speed settings.",
        category: "Kitchen Appliances",
        imageUrl: "https://www.ariete.net/media/images/product/main/ariete-585-nero-part-tazza-piedini-a4703113be01a382a2a2ad472c55cf80.jpg",
    },
    {
        id: 15,
        name: "Smart Thermostat",
        price: 199.99,
        quantity: 1,
        description: "Energy-saving thermostat with Wi-Fi control.",
        category: "Home Improvement",
        imageUrl: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFHcVF5amhxNkwuX0FDX1NMMTUwMF8uanBn.jpg",
    },
    {
        id: 16,
        name: "Wireless Charger",
        price: 19.99,
        quantity: 3,
        description: "Fast wireless charging pad for smartphones.",
        category: "Accessories",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18j-uDXHhFI8-MUnU8kKYCgsScR6NDtYHFw&sg",
    }
];

let cartcount=0;
let totalamount=0;
function showProduct(){

    for(let item of products){
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card bg-base-100   shadow-xl">
            <figure>
              <img class="h-60"
                src="${item.imageUrl}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h1 class="text-xl font-medium">${item.price} $</h1>
              <h2 class="card-title">
                ${item.name}
                <div class="badge badge-secondary">off 28%</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end ">
                
                <div onclick="addToCard('${item.name}', ${item.price}, '${item.imageUrl}')" class="badge badge-outline py-5 px-5 font-bold hover:bg-fuchsia-400 hover:text-white" id="add-cart-btn">Add to Card</div>
              </div>
            </div>
        </div>
        `
        document.getElementById('product-conteinar').append(div)
        
    }


}
showProduct()

function addToCard(name,price,image){
 cartcount++;
 console.log(price);
 
 document.getElementById('cart-count').innerText=cartcount;
 const tr=document.createElement('tr');
 tr.innerHTML=`
                 <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                          <img
                            src="${image}"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                    
                    <span class="">${name}</span>
                  </td>
                  <td>${price}</td>
                  <th>
                    <div class="badge badge-secondary">pending</div>
                  </th>
 `
 document.getElementById('t-body').append(tr)
 totalamount+=parseFloat(price.toFixed(2));
 const amountcart=totalamount.toFixed(2)
 document.getElementById('total-amount').innerText=amountcart;
 
 
}

document.getElementById('see-cart').addEventListener('click',function(){
    onclick=my_modal_1.showModal()
})