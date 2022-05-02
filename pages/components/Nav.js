export default function Nav() {
  return (
    <header id="top">
      <nav class="flex py-16 mx-4  font-bold">
        <div class="flex-1">
          <h1 class="text-2xl uppercase">[Your Name here]</h1>
          <h2 class="text-xl font-thin italic ">Photographer</h2>
        </div>
        <ul class="flex justify-end font-extralight ">
          <li class="mr-6 ">
            <a href="/portraits">Portraits</a>
          </li>
          <li class="mr-6">
            <a href="/landscape">landscape</a>
          </li>
          <li class="mr-6">
            <a href="/places">Places</a>
          </li>
        </ul>
      </nav>
      <nav class="flex justify-center py-12 mx-6 uppercase font-bold"></nav>
    </header>
  );
}
