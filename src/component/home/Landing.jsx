import AddCards from "./AddCard";
import Cards from "./Cards";
// import Search from "./Search";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="py-24 text-white bg-blue-500">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Amazing Product</h1>
            <p className="mt-4 text-lg">Solve your problem with ease.</p>
            <button className="px-6 py-3 mt-6 text-blue-500 bg-white rounded-full hover:bg-blue-100">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container py-20 mx-auto">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <Cards />
        <AddCards/>
      </div>
    </>
  );
};
export default Landing;
