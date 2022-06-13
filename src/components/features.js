function Features() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-40 lg:gap-8 lg:mt-20">
                <div className="flex lg:flex-col items-start lg:items-center lg:bg-slate-100 rounded-xl p-10">
                    <div className="text-white flex items-center justify-center w-14 h-14 p-3 xl:w-16 xl:h-16 flex-shrink-0 mr-4 xl:mr-0 xl:mb-4 rounded-lg xl:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-500 to-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="3" d="M17 2L2 9.5 17 17l15-7.5z"></path><path stroke-width="2.5" opacity="0.5" d="M2 24.5L17 32l15-7.5M2 17l15 7.5L32 17"></path></g></svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1 text-left lg:text-center">Seamless workflow</h3>
                        <p className="text-gray-600 text-sm tracking-wide text-left lg:text-center">
                            Create a changelog, upload your new App archive and push it live without leaving the GitHub UI. It's perfect for teams building and releasing together.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-col items-start lg:items-center lg:bg-slate-100 rounded-xl p-10">
                    <div className="text-white flex items-center justify-center w-14 h-14 p-3 xl:w-16 xl:h-16 flex-shrink-0 mr-4 xl:mr-0 xl:mb-4 rounded-lg xl:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-500 to-pink-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="38"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="10.5" cy="10.5" r="10.5" stroke-width="3"></circle><path stroke-width="2.5" opacity="0.5" d="M4.057 24.331L2 34l8.5-3.184L19 34l-2.057-9.68"></path></g></svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1 text-left lg:text-center">Automatic certificate management</h3>
                        <p className="text-gray-600 text-sm tracking-wide text-left lg:text-center">
                            Supply Bump with a Sparkle private key and it will take care of creating signatures for updates. Your private key never leaves GitHub’s encrypted secrets store.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-col items-start lg:items-center lg:bg-slate-100 rounded-xl p-10">
                    <div class="text-white flex items-center justify-center w-14 h-14 p-3 xl:w-16 xl:h-16 flex-shrink-0 mr-4 xl:mr-0 xl:mb-4 rounded-lg xl:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-yellow-400 to-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="38"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="10.5" cy="10.5" r="10.5" stroke-width="3"></circle><path stroke-width="2.5" opacity="0.5" d="M4.057 24.331L2 34l8.5-3.184L19 34l-2.057-9.68"></path></g></svg>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1 text-left lg:text-center">Built for Sparkle</h3>
                        <p className="text-gray-600 text-sm tracking-wide text-left lg:text-center">
                            <a href="https://sparkle-project.org/" className="text-blue-500 hover:text-blue-600">
                            Sparkle </a> has become the standard release mechanism for indie Mac developers. Bump has been built from the ground up to be the perfect companion toolchain.
                        </p>
                    </div>
                </div>
                <div className="flex lg:flex-col items-start lg:items-center lg:bg-slate-100 rounded-xl p-10">
                <div className="text-white flex items-center justify-center w-14 h-14 p-3 xl:w-16 xl:h-16 flex-shrink-0 mr-4 xl:mr-0 xl:mb-4 rounded-lg xl:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-lime-500 to-lime-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="38"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="10.5" cy="10.5" r="10.5" stroke-width="3"></circle><path stroke-width="2.5" opacity="0.5" d="M4.057 24.331L2 34l8.5-3.184L19 34l-2.057-9.68"></path></g></svg>
                </div>
                    <div>
                        <h3 className="font-bold mb-1 text-left lg:text-center">DevOps included</h3>
                        <p className="text-gray-600 text-sm tracking-wide text-left lg:text-center">
                            Bump uses <a href="https://www.terraform.io/" className="text-blue-500 hover:text-blue-600">Terraform</a> under the hood to take care of provisioning infrastructure. All you need to bring is your own AWS account.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <button className="flex bg-transparent rounded-md border border-slate-200 text-blue-500 hover:text-blue-600 hover:bg-slate-100 p-3 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 32" fill="currentColor" height="20" width="36" className="mr-3"><path d="M31.782 16c0 8.837-7.115 16-15.89 16C7.114 32 0 24.835 0 16S7.115 0 15.891 0c8.777 0 15.89 7.164 15.89 16m17.433 0c0 8.318-3.557 15.063-7.945 15.063S33.323 24.318 33.323 16c0-8.317 3.557-15.063 7.945-15.063 4.389 0 7.946 6.744 7.946 15.063m7.13 0c0 7.45-1.25 13.494-2.794 13.494-1.543 0-2.794-6.042-2.794-13.494S52.007 2.506 53.55 2.506c1.543 0 2.795 6.042 2.795 13.494"></path></svg>
                Read the Medium post about why we built Bump
                </button>
            </div>
        </>
    )
}

export default Features;