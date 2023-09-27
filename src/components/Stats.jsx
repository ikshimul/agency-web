import getStatList from "@/utils/getStatList";
import {
  faUsers,
  faThumbsUp,
  faSmile,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Stats = async () => {
  const stats_data = await getStatList();
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div class="grid gap-4 grid-cols-4">
          <div>
            <div className="mb-8 text-center p-8 bg-white rounded shadow">
              <span className="mb-6 inline-block p-4 rounded my-background-color">
                <FontAwesomeIcon
                  className="w-6 h-6 text-green-600"
                  icon={faUsers}
                ></FontAwesomeIcon>
              </span>
              <h3 className="text-2xl font-bold">
                {stats_data.followers.replace(/,/g, "")}
              </h3>
              <p className="text-black text-sm font-semibold">Followers</p>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center p-8 bg-white rounded shadow">
              <span className="mb-6 inline-block p-4 rounded my-background-color">
                <FontAwesomeIcon
                  className="w-6 h-6 text-green-600"
                  icon={faThumbsUp}
                ></FontAwesomeIcon>
              </span>
              <h3 className="text-2xl font-bold">
                {stats_data.solved.replace(/,/g, "")}
              </h3>
              <p className="text-black text-sm font-semibold">
                Solved Problems
              </p>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center p-8 bg-white rounded shadow">
              <span className="mb-6 inline-block p-4 rounded my-background-color">
                <FontAwesomeIcon
                  className="w-6 h-6 text-green-600"
                  icon={faSmile}
                ></FontAwesomeIcon>
              </span>
              <h3 className="text-2xl font-bold">
                {stats_data.customers.replace(/,/g, "")}
              </h3>
              <p className="text-black text-sm font-semibold">
                Happy Customers
              </p>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center p-8 bg-white rounded shadow">
              <span className="mb-6 inline-block p-4 rounded my-background-color">
                <FontAwesomeIcon
                  className="w-6 h-6 text-green-600"
                  icon={faProjectDiagram}
                ></FontAwesomeIcon>
              </span>
              <h3 className="text-2xl font-bold">
                {stats_data.projects.replace(/,/g, "")}
              </h3>
              <p className="text-black text-sm font-semibold">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
