import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';


function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualX build tools<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-800"> for developers</span>
            </h1>
            <p className="mt-6 text-lg text-center text-gray-500 max-w-3xl">
                VirtualX helps developers build, test, and launch amazing digital products faster with powerful tools and seamless collaboration.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Start For Free</a>
                <a href="" className="py-3 px-4 mx-3 rounded-md border text-center">Documentation</a>
            </div>
            <div className="flex mt-10 justify-center ">

                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">

                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>



                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">

                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}

export default HeroSection