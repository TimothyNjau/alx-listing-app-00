import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import {
  faBed,
  faBuildingColumns,
  faTree,
  faHouse,
  faUmbrellaBeach,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import ALXLogo from "../common/ALXLogo";
import { useState } from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="grid grid-rows-[20%_30%_50%] h-[30vh] gap-2">
        <section className="bg-emerald-500 text-white text-md flex gap-10 w-full justify-center p-5 items-center">
          <p className="font-semibold text-center">
            <FontAwesomeIcon icon={faBriefcase} className="fa-lg pr-3" />
            Overseas trip? Get the latest information on travel guides
          </p>
          <Link href={"#"} className="bg-black p-2 rounded-full">
            More Info
          </Link>
        </section>
        <section className="flex justify-between">
          <Link href={"/"} className="hidden md:block ">
            <svg
              fill="none"
              height={"2rem"}
              width={56}
              viewBox="0 0 56 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ALXLogo />
              <defs>
                <clipPath id="clip0_6404_9311">
                  <rect fill="black" height="28" width="55.0667"></rect>
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/*
          <div className="searchBar flex py-2 border border-gray-400 w-full rounded-full">
            <div className="flex-1 border rounded-md px-2">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                placeholder="Search for destination"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="flex-1 px-2 border rounded-md">
              <label htmlFor="check-in">Check In</label>
              <input
                type="date"
                name="check-in"
                id="checkin"
                placeholder="Add date"
              />
            </div>
            <div className="flex-1 px-2 border rounded-md">
              <label htmlFor="check-out">Check Out</label>
              <input
                type="date"
                name="check-out"
                id="check-out"
                placeholder="Add date"
              />
            </div>
            <div className="flex-1 px-2 border rounded-md">
              <h2>People</h2>
              <h4>Add guest</h4>
            </div>
            <div className="flex items-center px-2">
              <FontAwesomeIcon icon={faSearch} className="fa-md" />
            </div>
          </div>
          */}
          <SearchBar />
          <div>
            <FontAwesomeIcon icon={faCircleUser} className="fa-xl" />
          </div>
        </section>
        {/*
        <section className="flex justify-evenly">
          <div className="flex flex-col items-center ">
            <h3>Rooms</h3>
            <FontAwesomeIcon icon={faBed}/>
          </div>
          <div className="flex flex-col items-center ">
            <h3>Mansion</h3>
            <FontAwesomeIcon icon={faBuildingColumns}/>
          </div>
          <div className="flex flex-col items-center ">
            <h3>Countryside</h3>
            <FontAwesomeIcon icon={faTree}/>
          </div>
          <div className="flex flex-col items-center ">
            <h3>Villa</h3>
            <FontAwesomeIcon icon={faHouse}/>
          </div>
          <div className="flex flex-col items-center ">
            <h3>Tropical</h3>
            <FontAwesomeIcon icon={faUmbrellaBeach}/>
          </div>
          <div className="flex flex-col items-center ">
            <h3>Amazing Pool</h3>
            <FontAwesomeIcon icon={faWater} className="h-20"/>
          </div>
        </section>
        */}
        <CategorySection />
      </header>
    </>
  );
};

export default Header;

function SearchBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full px-4">
      {/* Small screen: collapsed search */}
      <div className="md:hidden">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full border rounded-full flex items-center justify-between px-4 py-2 bg-white shadow"
        >
          <span className="text-sm text-gray-600">Where to?</span>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white text-2xl rounded-full p-4 hover:cursor-pointer bg-orange-400"
          />
        </button>

        {/* Dropdown content for small screens */}
        {showDropdown && (
          <div className="mt-2 border rounded-lg p-4 bg-white shadow space-y-4">
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                placeholder="Search destination"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Check In</label>
              <input type="date" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Check Out</label>
              <input type="date" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Guests</label>
              <input
                type="number"
                placeholder="Number of guests"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>
        )}
      </div>

      {/* Medium and above: full horizontal search bar */}
      <div className="hidden md:flex border rounded-full bg-white p-2 gap-2 shadow-md">
        <div className="flex-1 px-3">
          <label className="block text-xs font-semibold">Location</label>
          <input
            type="text"
            placeholder="Search destination"
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="flex-1 px-3">
          <label className="block text-xs font-semibold">Check In</label>
          <input type="date" className="w-full outline-none text-sm" />
        </div>
        <div className="flex-1 px-3">
          <label className="block text-xs font-semibold">Check Out</label>
          <input type="date" className="w-full outline-none text-sm" />
        </div>
        <div className="flex-1 px-3">
          <label className="block text-xs font-semibold">Guests</label>
          <input
            type="number"
            placeholder="Add guests"
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="flex items-center px-3">
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:cursor-pointer text-3xl bg-orange-400">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

const categories = [
  { label: "Rooms", icon: faBed },
  { label: "Mansion", icon: faBuildingColumns },
  { label: "Countryside", icon: faTree },
  { label: "Villa", icon: faHouse },
  { label: "Tropical", icon: faUmbrellaBeach },
  { label: "Amazing Pool", icon: faWater },
];

function CategorySection() {
  const [selected, setSelected] = useState("Rooms");

  return (
    <section className="w-full overflow-y-scroll overflow-x-clip">
      <div
          className={`
          flex gap-4 md:gap-8 px-4 py-4 
          overflow-x-auto md:overflow-x-visible 
          overflow-y-auto
          whitespace-nowrap
          scrollbar-thin scrollbar-thumb-gray-300
        `}
      >
        {categories.map((item) => (
          <div
            key={item.label}
            onClick={() => setSelected(item.label)}
            className={`
              flex flex-col items-center justify-center
              min-w-[100px] sm:min-w-[120px] md:min-w-0
              cursor-pointer rounded-xl p-4 
              transition-all duration-300 ease-in-out
              flex-shrink-0
              ${
                selected === item.label
                  ? "bg-gray-200 shadow-md"
                  : "hover:bg-gray-100"
              }
            `}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-3xl md:text-4xl text-gray-700 mb-2"
            />
            <h3 className="text-sm font-medium text-center text-gray-800">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
