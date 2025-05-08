import React from "react";

const products = [
  {
    id: 1,
    name: "Áo thun Basic",
    price: "$20",
    img: "https://i.pinimg.com/736x/f3/a7/af/f3a7af1fec5e88e67ef16ce1de224475.jpg",
  },
  {
    id: 2,
    name: "Quần Jeans Slim Fit",
    price: "$40",
    img: "https://i.pinimg.com/736x/de/cf/18/decf18641c0bede4c63ae63dc0dc7537.jpg",
  },
  {
    id: 3,
    name: "Áo khoác Jacket",
    price: "$60",
    img: "https://i.pinimg.com/736x/11/06/9d/11069d52ed5f4e8e76cbe7d472e9a108.jpg",
  },
  {
    id: 4,
    name: "Giày Sneakers",
    price: "$80",
    img: "https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg",
  },
  {
    id: 5,
    name: "Mũ lưỡi trai",
    price: "$25",
    img: "https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg",
  },
  {
    id: 6,
    name: "Túi đeo chéo",
    price: "$35",
    img: "https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg",
  },
  {
    id: 7,
    name: "Kính mát thời trang",
    price: "$18",
    img: "https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg",
  },
  {
    id: 8,
    name: "Áo hoodie nam nữ",
    price: "$55",
    img: "https://i.pinimg.com/736x/f7/75/fe/f775feff96a18da349424c7892026c63.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section
      className="my-12 px-6 max-w-7xl mx-auto"
      aria-labelledby="featured-products-title"
    >
      <header className="text-center mb-8">
        <h1
          id="featured-products-title"
          className="text-3xl font-bold uppercase tracking-wide text-gray-800"
        >
          Sản phẩm nổi bật
        </h1>
        <p className="text-gray-600 mt-2">
          Những sản phẩm bán chạy và được yêu thích nhất trên cửa hàng của chúng
          tôi
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <article
            key={product.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 transform hover:scale-110"
            itemScope
            itemType="https://schema.org/Product"
          >
            <figure>
              <img
                src={product.img}
                alt={`Mua ${product.name} chất lượng cao giá tốt`}
                className="w-full h-[320px] object-cover rounded mb-4 "
                loading="lazy"
                itemProp="image"
              />
              <figcaption className="sr-only">{product.name}</figcaption>
            </figure>
            <h2 className="text-lg font-semibold text-gray-900" itemProp="name">
              {product.name}
            </h2>
            <p
              className="text-red-600 font-medium"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span itemProp="priceCurrency" content="USD">
                $
              </span>
              <span itemProp="price">{product.price.replace("$", "")}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
