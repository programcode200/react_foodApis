const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className=" p-2 m-2 rounded-md bg-slate-600 text-white">Submit</button>
            </form>
        </div>
    )
};


export default Contact