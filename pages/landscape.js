import Nav from './components/Nav.js';
import GridGallery from './components/Gallery.js';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ images }) {
  return (
    <div className="container  mx-auto ">
      <Nav />
      <GridGallery images={images} />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const images = await db
    .collection('gallery')
    .find({ tag: 'landscape' })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      images: JSON.parse(JSON.stringify(images)),
    },
  };
}
