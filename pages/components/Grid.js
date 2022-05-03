import { IoMdLocate, IoIosCalendar } from 'react-icons/io';

export default function GridGalleryCard({
  imageUrl,
  show,
  text,
  location,
  date,
}) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? '' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-[8px]">
          <span className=" text-center opacity-50 text-[10px] ">{text}</span>
          {location && (
            <div className="flex flex-between pt-2 italic">
              <IoMdLocate size={11} className="mr-1" />
              <span className=" opacity-50 ">{location}</span>
            </div>
          )}
          {date && (
            <div className="flex flex-between pt-1 italic ">
              <IoIosCalendar size={11} className="mr-2" />
              <span className=" opacity-50 ">{date}</span>
            </div>
          )}
        </div>
      </div>
      <img src={imageUrl} alt="hi" />
    </div>
  );
}
