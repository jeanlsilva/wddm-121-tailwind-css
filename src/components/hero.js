import heroImg from '../assets/images/Hero.png';

function Hero() {
    return (
        <div class="flex flex-col items-center lg:flex-row bg-gradient-to-b xl:h-90v from-blue-100">
            <div className="w-2/5">
                <img src={heroImg} alt="hero" width="496" height="576" />
            </div>
            <div className="h-screen w-3/5 flex flex-col justify-center xl:px-20 flex-auto min-w-[592px]">
                <h1 className="text-4xl xl:text-6xl font-bold text-center lg:text-left">
                    Bump is the easy way to <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">release</span> & <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">update</span> indie Mac apps.
                </h1>
                <h3 className="pt-8 text-center lg:text-left font-medium text-xl">
                    An automated pipeline designed to make distributing apps with <a href="https://sparkle-project.org/" className="text-blue-500 mr-1 hover:text-blue-600">Sparkle</a> 
                    easier to maintain and collaborate on
                </h3>
                <div class="flex mt-8 justify-center lg:justify-start">
                    <button className="flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-md text-white font-medium p-3 transform transition-all hover:translate-y-[-2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="22" height="22" class="transform translate-x-[0px] translate-y-[0px] opacity-75"><path fill="currentColor" fill-rule="evenodd" d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 013.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618C22.279 23.61 26 18.736 26 13c0-7.183-5.817-13-13-13z"></path></svg>
                        <span className="ml-3">View the repo</span>
                    </button>
                    <div className="flex items-center ml-3 px-4 rounded-md border border-gray-300">
                        Used bump before? 
                        <a 
                            href="https://github.com/replay-software/bump/generate" 
                            className="ml-1 text-blue-500 hover:text-blue-600 font-medium"
                        > Create your repo now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;