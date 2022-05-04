import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const fileSelectHandler = (event) => {
    console.log(event.target.files[0]);
  };
  const [item, setItem] = useState({
    src: '',
    text: '',
    location: '',
    date: '',
    tag: 'landscape',
  });
  const [items, setItems] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(item);
    const result = item;
    setItems([...items, result]);
    axios
      .post('http://localhost:3000/api/hello', item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = items;
      console.log('fetch data: ', result);
      setItems(result);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <form action="" onSubmit={onSubmitHandler}>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Text
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setItem({ ...item, text: e.target.value })}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            location
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            onChange={(e) => setItem({ ...item, location: e.target.value })}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            date
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setItem({ ...item, date: e.target.value })}
          />
        </div>

        <div class="mb-6">
          <input
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="file"
            onChange={(e) => setItem({ ...item, src: e.target.files })}
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
