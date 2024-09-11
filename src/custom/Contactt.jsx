import React from "react";

const Contactt = () => {
    return (
        <div className="bg-black text-white">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                            Let's talk!
                        </h2>
                        <div className="dark:text-gray-600">
                            Feel free to Contact
                        </div>
                    </div>
                    <img
                        src="https://mambaui.com/assets/svg/doodle.svg
"
                        alt=""
                        className="p-6 h-52 md:h-64"
                    />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder=""
                            className="w-full p-3 rounded bg-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 rounded bg-gray-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="3"
                            className="w-full p-3 rounded  bg-gray-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contactt;
