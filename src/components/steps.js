import alasdair from '../assets/images/Alasdair.jpg';
import githubIcon from '../assets/images/github.svg';
import ghActionsIcon from '../assets/images/gh-actions.svg';
import terraformIcon from '../assets/images/terraform.svg';
import awsIcon from '../assets/images/aws.svg';

function Steps() {
    return (
        <div className="bg-slate-100 py-16 flex flex-col items-center mt-20">
            <div className="lg:w-1/2 mx-8 lg:mx-0 flex flex-col items-center">
                <h1 className="text-3xl font-bold">Release a new version in three steps</h1>
                <div className="p-2 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full w-10 mt-12">
                    <p className="text-white">1</p>
                </div>
                <div className="mt-3 px-16">
                    <h2 className="text-md font-medium">Write your changelog</h2>
                    <p className="text-gray-600">
                    Bump lets you write YAML and Markdown in the same file to streamline the authoring process.
                    </p>
                </div>
                <div className="bg-white w-full rounded-lg border text-left p-5 font-mono mt-10">
                    <p className="text-green-500">version: "1.2.0"</p>
                    ---
                    <p className="font-bold">## New in this new version</p>
                    <p class="Typist">We've added  some amazing new features and fixes</p>
                </div>
                <div className="w-1 py-8 mt-5 rounded bg-gray-200"></div>
                <div className="p-2 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full w-10 mt-6">
                    <p className="text-white">2</p>
                </div>
                <div className="mt-3 px-16">
                    <h2 className="text-md font-medium">Open a pull request</h2>
                    <p className="text-gray-600">
                    Commit your new version metadata alongside the new version of your app and open your pull request for review.
                    </p>
                </div>
                <div className="bg-white rounded-lg border text-left p-8 w-full mt-10">
                    <p className="text-2xl">Release 1.2.0 <span className="text-2xl text-gray-400">#8</span></p>
                    <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-green-600 rounded-full px-2 py-1 text-sm flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
                        <span className="text-white transform translate-y-[-1px]">
                        Open
                        </span>
                    </span>
                    <img src={alasdair} alt="github" className="h-6 w-6 rounded-full" />
                    <p className="text-gray-600">almonk wants to merge 1 commit into <span className="text-sm text-blue-500 bg-blue-100 p-0.5 rounded-md">main</span></p>
                    </div>
                </div>
                <div className="w-1 py-8 mt-5 rounded bg-gray-200"></div>
                <div className="p-2 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full w-10 mt-6">
                    <p className="text-white">3</p>
                </div>
                <div className="mt-3 px-16">
                    <h2 className="text-md font-medium">Bump takes care of the rest</h2>
                    <p className="text-gray-600">
                    As soon as your pull request is merged, Bump gets to work; processing your update, signing your app 
                    binary and releasing the update on your AWS S3 infrastructure. All automatically.
                    </p>
                </div>
                <div className="bg-white rounded-lg border text-left p-8 w-full mt-10 flex flex-col sm:flex-row space-y-4 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-purple-600 rounded-full text-white w-14 px-4 py-4 flex justify-center items-center">
                            <img src={githubIcon} alt="github-merge" className="w-12" />
                        </div>
                        <p className="text-gray-600 text-sm text-center mt-2">Merge PR on Github</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="bg-blue-400 rounded-full text-white w-14 p-4 flex justify-center">
                        <img src={ghActionsIcon} alt="github-merge" className="w-10" />
                    </div>
                    <p className="text-gray-600 text-sm text-center mt-2">Run GitHub Actions</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="bg-purple-600 rounded-full text-white w-14 p-4 flex justify-center">
                        <img src={terraformIcon} alt="github-merge" className="w-10" />
                    </div>
                    <p className="text-gray-600 text-sm text-center mt-2">Apply Terraform Plan</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                        <div className="bg-gray-400 rounded-full p-0.5"></div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="bg-orange-400 rounded-full text-white w-14 p-4 flex justify-center">
                        <img src={awsIcon} alt="github-merge" className="w-10" />
                    </div>
                    <p className="text-gray-600 text-sm text-center mt-2">Deploy S3 bucket</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;