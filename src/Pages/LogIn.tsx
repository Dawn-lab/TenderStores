import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <form
                    action=""
                    className="bg-gradient-to-r  from-green-500 to-green-950 rounded-2xl flex flex-col w-1/4 p-5"
                >
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
                        <label htmlFor="Password" className="text-xs after:content-['*'] after:ml-0.5 after:text-red-500">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border rounded-lg p-1 text-sm disabled  focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-900"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <div className="p-3 flex justify-center">
                        <button className=" w-full border border-transparent rounded-lg bg-slate-100 hover:bg-slate-300:shadow-inner p-2">
                            Login
                        </button>
                    </div>
                    <div className="p-3 flex justify-center">
                        <button className=" w-full border border-transparent rounded-lg bg-slate-100 hover:bg-slate-300:shadow-inner p-2">
                            Login with Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
