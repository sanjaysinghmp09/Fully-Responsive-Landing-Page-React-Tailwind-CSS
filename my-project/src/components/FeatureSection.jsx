import { features } from "../constants"

function FeatureSection() {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[800px]">
      
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Explore the features.</span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily buid <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800">your code</span> 
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        { features.map ((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-neutral-900 p-6 rounded-lg h-full hover:shadow-lg hover:shadow-orange-400/20 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 ">{feature.icon}{feature.text}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  )}

export default FeatureSection