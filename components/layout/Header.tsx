import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";


const Header: React.FC = () => {
  return (
    <>
      <div className="grid grid-rows-3">
        <section className="bg-emerald-500 text-white text-md flex gap-10 w-full justify-center h-max p-5 items-center">
          <p className="font-semibold text-center">
            <FontAwesomeIcon icon={faBriefcase} className="fa-lg pr-3" />
            Overseas trip? Get the latest information on travel guides
          </p>
          <Link href={"#"} className="bg-black p-2 rounded-full">More Info</Link>
        </section>
        <section>
            <h3>
                alX
            </h3>
          <div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Search for destination" />
            </div>
            <div>
              <label htmlFor="check-in">Check In</label>
              <input
                type="date"
                name="check-in"
                id="checkin"
                placeholder="Add date"
              />
            </div>
            <div>
              <label htmlFor="check-out">Check Out</label>
              <input
                type="date"
                name="check-out"
                id="check-out"
                placeholder="Add date"
              />
            </div>
            <div>
              <h2>People</h2>
              <h4>Add guest</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faSearch} className="fa-md" />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleUser} className="fa-xl"/>
          </div>
        </section>
        <section>
            <div>
                <h3>Rooms</h3>
            </div>
            <div>
                <h3>
                    Mansion
                </h3>
            </div>
            <div>
                <h3>
                    Countryside
                </h3>
            </div>
            <div>
                <h3>
                    Villa
                </h3>
            </div>
            <div>
                <h3>
                    Tropical
                </h3>
            </div>
            <div>
                <h3>
                    Amazing Pool
                </h3>
            </div>
        </section>
      </div>
    </>
  );
};

export default Header;
