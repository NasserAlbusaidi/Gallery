import Nav from './components/Nav.js';
import GridGallery from './components/Gallery.js';
import { images } from '../data/photos';

export default function Home() {
  return (
    <div className="container ml-36 ">
      <Nav />
      <GridGallery images={images} />
    </div>
  );
}
