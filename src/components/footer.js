import alasdair from '../assets/images/Alasdair.jpg'
import hector from '../assets/images/Hector.jpg';
import replay from '../assets/images/replay.svg';

function Footer() {
    return (
        <div className="mx-24 sm:mx-0">
            <div className="flex flex-col items-center py-12">
                <h2 className="text-gray-600">Ready to try Bump?</h2>
                <div className="flex w-1/2 justify-center flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-6">
                    <button 
                        className="flex w-full sm:w-max bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg text-white font-medium p-3 px-5 transform transition-all hover:translate-y-[-2px] hover:shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="22" height="22" class="transform translate-x-[0px] translate-y-[0px] opacity-75"><path fill="currentColor" fill-rule="evenodd" d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 013.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618C22.279 23.61 26 18.736 26 13c0-7.183-5.817-13-13-13z"></path></svg>
                        <span className="ml-3">View the repo</span>
                    </button>
                    <button className="bg-blue-100 w-full sm:w-max rounded-lg p-3 px-5 transform transition-all hover:translate-y-[-2px] hover:shadow-lg">
                        <p className="text-blue-500 font-medium text-md">Create your repo now</p>
                    </button>
                </div>
                <hr />
                <div className="flex sm:w-4/5 pt-10 mt-10 border-t border-gray-300 flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2 text-center sm:text-left">
                        <p className="inline break-normal text-lg">
                        Made by <b> Replay</b>,a tiny studio making simple apps for your Mac, brought to you by 
                        <img src={alasdair} alt="alasdair" className="h-6 w-6 rounded-full mx-1 inline" />
                        <b>Alasdair Monk</b> <span className="ml-1"> &</span>
                        <img src={hector} alt="hector" className="h-6 w-6 rounded-full mx-1 inline" />
                        <b>Hector Simpson</b>.
                        </p>
                    </div>
                    <div className="flex flex-1 text-right justify-center sm:justify-end mt-8 sm:mt-0">
                        <div>
                            <img src={replay} alt="replay" className="cursor-pointer opacity-50 hover:opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="sm:ml-16 sm:mb-16 md:ml-20 lg:ml-24 xl:ml-32 text-left text-sm text-gray-400 mt-10">© 2022 Replay Software.</p>
        </div>
    )
}

export default Footer;