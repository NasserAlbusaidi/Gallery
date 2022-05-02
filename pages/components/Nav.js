export default function Nav() {
  return (
    <header id="top">
      <nav className="flex py-16 mx-4  font-bold">
        <div className="flex-1">
          <h1 className="text-2xl uppercase">[Your Name here]</h1>
          <h2 className="text-xl font-thin italic ">Photographer</h2>
        </div>
        <ul className="flex justify-end font-extralight ">
          <li className="mr-6 ">
            <a href="/portraits">Portraits</a>
          </li>
          <li className="mr-6">
            <a href="/landscape">landscape</a>
          </li>
          <li className="mr-6">
            <a href="/places">Places</a>
          </li>
        </ul>
      </nav>
      <nav className="flex justify-center py-12 mx-6 uppercase font-bold"></nav>
    </header>
  );
}
