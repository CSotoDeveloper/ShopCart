import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [

  {
    id: 'p3',
    price: 15.99,
    title: 'The Art of Coding',
    description: 'A comprehensive guide to modern programming languages and techniques.',
    author: 'Carlos Gómez',
    publicationYear: 2023,
    genre: 'Technology',
    coverType: 'Ebook',
    pages: 400,
  },
  {
    id: 'p4',
    price: 24.95,
    title: 'Cooking Made Easy',
    description: 'A cookbook for beginners with easy-to-follow recipes and tips from top chefs.',
    author: 'Sofia Martínez',
    publicationYear: 2021,
    genre: 'Cooking',
    coverType: 'Softcover',
    pages: 250,
  },
  {
    id: 'p5',
    price: 10.50,
    title: 'The Science of Sleep',
    description: 'An in-depth exploration of how sleep affects the brain and body, with tips for better rest.',
    author: 'Luz Rodríguez',
    publicationYear: 2022,
    genre: 'Health & Wellness',
    coverType: 'Paperback',
    pages: 180,
  },
  {
    id: 'p6',
    price: 7.99,
    title: 'Space Exploration: The New Frontier',
    description: 'A fascinating journey through the history of space exploration and what lies ahead.',
    author: 'Ricardo López',
    publicationYear: 2024,
    genre: 'Science',
    coverType: 'Hardcover',
    pages: 350,
  },
  {
    id: 'p7',
    price: 11.99,
    title: 'The Ultimate Travel Guide',
    description: 'A guide to the world\'s most exotic destinations, with tips for budget travelers and luxury seekers alike.',
    author: 'Ana García',
    publicationYear: 2021,
    genre: 'Travel',
    coverType: 'Hardcover',
    pages: 300,
  },
  {
    id: 'p8',
    price: 18.00,
    title: 'Mastering Photography',
    description: 'Learn the art of photography with tips from professional photographers and detailed step-by-step guides.',
    author: 'Luis Hernández',
    publicationYear: 2023,
    genre: 'Art & Photography',
    coverType: 'Ebook',
    pages: 250,
  },
  {
    id: 'p9',
    price: 9.99,
    title: 'Mindfulness for Beginners',
    description: 'A beginner\'s guide to mindfulness and meditation, with exercises to improve mental clarity.',
    author: 'Elena Fernández',
    publicationYear: 2020,
    genre: 'Self-Help',
    coverType: 'Paperback',
    pages: 150,
  },
  {
    id: 'p10',
    price: 13.50,
    title: 'The Music of Life',
    description: 'An exploration of how music shapes our lives and the science behind sound and emotion.',
    author: 'Miguel Torres',
    publicationYear: 2022,
    genre: 'Music',
    coverType: 'Softcover',
    pages: 230,
  }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;