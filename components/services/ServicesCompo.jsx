import Link from "next/link";
import LearnMoreBtn from "./LearnMoreBtn";
import services from "@/public/services.json";

export default async function ServicesCompo() {
  // const response = await data;
  // const services = await response.json();

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-lg">
          Our Career Services
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Explore personalized career sessions designed to help you grow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-gray-700"
          >
            <figure>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </figure>
            <div className="card-body bg-gray-900 rounded-b-xl">
              <h2 className="card-title text-cyan-400">{service.name}</h2>
              <p className="text-gray-300 text-sm">
                {service.description.length > 80
                  ? service.description.slice(0, 80) + "..."
                  : service.description}
              </p>

              <div className="mt-3 text-sm text-gray-400 space-y-1">
                <p>
                  <strong>Category:</strong> {service.category}
                </p>
                <p>
                  <strong>Counselor:</strong> {service.counselor}
                </p>
                <p>
                  <strong>Duration:</strong> {service.duration}
                </p>
                <p>
                  <strong>Price:</strong> {service.price}
                </p>
                <p>
                  <strong>Rating:</strong> ⭐ {service.rating}
                </p>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link href={`/services/${service.id}`}>
                  <LearnMoreBtn></LearnMoreBtn>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
