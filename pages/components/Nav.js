import Link from 'next/link';

export default function Nav() {
  return (
    <header id="top">
      <nav className="flex sm:py-16 sm:mx-4 py-6 mx-2  font-bold">
        <div className="flex-1">
          <Link href="/">
            <h1 className="sm:text-2xl text-l uppercase ">[Your Name here]</h1>
            <h2 className=" text-sm font-thin italic ">Photographer</h2>
          </Link>
        </div>
        <ul className="flex justify-end font-extralight py-2 ">
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl  ">
            <a href="/portraits">Portraits</a>
          </li>
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl ">
            <a href="/landscape">landscape</a>
          </li>
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl ">
            <a href="/places">Places</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
