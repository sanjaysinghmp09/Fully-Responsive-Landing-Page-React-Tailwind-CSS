


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
                <a href="" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
            </div>
        </div>
    )
}

export default HeroSection