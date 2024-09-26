const Hero = () => {
    return (
        <>
            <div className="container mx-auto bg-[url('https://i.ibb.co/7j1hwW0/Rectangle-1.png')] rounded-xl h-screen flex items-center bg-no-repeat bg-cover bg-center">
                <div className="text-center px-2 text-white lg:w-[933px] mx-auto">
                    <h1 className="text-3xl leading-10 md:text-4xl lg:text-5xl font-bold">
                        Discover an exceptional cooking class tailored for you!
                    </h1>
                    <p className="text-lg mt-6 mb-10">
                        Learn and Master Basic Programming, Data Structures,
                        Algorithm, OOP, Database and solve 500+ coding problems
                        to become an exceptionally well world-class Programmer.
                    </p>
                    <div>
                        <button className="bg-transparent lg:text-xl font-semibold py-5 px-7 rounded-full outline-none border border-gray-50 hover:bg-[#0BE58A] mr-5">
                            Explore Now
                        </button>
                        <button className="bg-transparent lg:text-xl font-semibold py-5 px-7 rounded-full outline-none border border-gray-50 hover:bg-[#0BE58A]">
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
