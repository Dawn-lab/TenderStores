function SignUp() {
    return (
        <>
            <div className="">
                <form action="" className="bg-slate-300 h-full flex flex-row">
                    <div>
                        <label htmlFor="Name">Full Name</label>
                        <input type="text" className="border " placeholder="name" />
                    </div>
                    <div>
                        <label htmlFor="Email">Email Address</label>
                        <input type="email" className="border " placeholder="email" />
                    </div>
                    <div>
                        <label htmlFor="Phone Number">Phone Number</label>
                        <input type="tel" className="border " name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="border " placeholder="password" />
                    </div>
                    <div>
                        <label htmlFor="Confirm Password">Confirm Password</label>
                    </div>
                    <input type="password" className="border " placeholder="Confirm Password" />
                    <button className="border ">Register</button>
                </form>
            </div>
        </>
    )
}

export default SignUp