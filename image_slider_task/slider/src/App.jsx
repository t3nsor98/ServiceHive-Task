import "./App.css";
import ImageComparisonSlider from "./components/ImageComparisonSlider";

function App() {
  return (
    <>
      <div className="container text-center w-1/2 mx-auto">
        <h1 className="text-3xl text-orange-500 ">
          Service Hike Image Slider Task
        </h1>
        <p className="text-2xl">Date 26-04-2025</p>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Image Comparison Slider
        </h1>
        <ImageComparisonSlider
          beforeImage="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          afterImage="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </>
  );
}

export default App;
