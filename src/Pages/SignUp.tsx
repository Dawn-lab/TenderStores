import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <form
                    action=""
                    className="bg-gradient-to-r  from-green-500 to-green-950 rounded-2xl flex flex-col w-1/4 p-5"
                >
                    <div className="p-3 flex flex-col m-1">
                        <label htmlFor="Name" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Full Name 
                        </label>
                        <input
                            type="text"
                            className="border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            placeholder="Enter Your Full Name"
                            required
                        />
                    </div>
                    <div className="p-3 flex flex-col m-1">
                        <label htmlFor="Email" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="peer border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            placeholder="Enter Your Email Address"
                        />
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                            Please provide a valid email address!</p>
                    </div>
                    <div className="p-3 flex flex-col m-1">
                        <label htmlFor="Phone Number" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            name="phoneNumber"
                            id=""
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="p-3 flex flex-col m-1">
                        <label htmlFor="Password" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <div className="p-3 flex flex-col m-1">
                        <label htmlFor="Confirm Password" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            placeholder="Confirm Your Password"
                        />
                    </div>
                    <div className="p-3 flex justify-center">
                        <button className=" w-full border border-transparent rounded-lg bg-slate-100 hover:bg-slate-300:shadow-inner p-2">
                            Register
                        </button>
                    </div>
                    <div className="p-3 flex justify-center">
                        <button className=" w-full border border-transparent rounded-lg bg-slate-100 hover:bg-slate-300:shadow-inner p-2">
                            Sign Up with Google
                        </button>
                    </div>
                    <div className="p-4 flex justify-center">
                        <p>Already have an account? <Link className="text-slate-100" to="/login">Log In</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUp;
