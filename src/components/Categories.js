import React from 'react';

const categories = [
  { id: 1, title: 'Men', img: 'https://i.pinimg.com/736x/f0/a3/03/f0a303dadacb992b9e574f537ae0d6b5.jpg' },
  { id: 2, title: 'Women', img: 'https://i.pinimg.com/736x/f0/a3/03/f0a303dadacb992b9e574f537ae0d6b5.jpg' },
  { id: 3, title: 'Kids', img: 'https://i.pinimg.com/736x/f0/a3/03/f0a303dadacb992b9e574f537ae0d6b5.jpg' },
];

const Categories = () => {
  return (
    <section className="flex flex-wrap justify-center my-10">
      {categories.map((category) => (
        <div key={category.id} className="w-1/3 p-2">
          <div className="relative">
            <img src={category.img} alt={category.title} className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">{category.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
