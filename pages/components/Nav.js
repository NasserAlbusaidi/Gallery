import Link from 'next/link';

export default function Nav() {
  return (
    <header id="top">
      <nav className="flex sm:py-16 sm:mx-4 py-6 mx-2  font-bold">
        <div className="flex-1">
          <h1 className="sm:text-2xl text-l uppercase ">
            <Link href="/">[Your Name here]</Link>
          </h1>
          <h2 className=" text-sm font-thin italic ">
            <Link href="/">Photographer</Link>
          </h2>
        </div>
        <ul className="flex justify-end font-extralight py-2 ">
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl  ">
            <Link href="/portraits">Portraits</Link>
          </li>
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl ">
            <Link href="/landscape">landscape</Link>
          </li>
          <li className="sm:mr-6 mr-2 text-xs sm:text-xl ">
            <Link href="/places">Places</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
