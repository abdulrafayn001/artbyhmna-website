import React, { useState } from "react";
import Footer from "../footer/Footer";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <main className="h-auto">
        <div className="relative flex items-top justify-center min-h-screen bg-green-lightest dark:bg-gray-900 sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-green-dark dark:text-white font-extrabold tracking-tight">
                    Subscribe
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to get notification about new products and
                    discounts.
                  </p>

                  <div className="flex items-center mt-4 text-green-dark dark:text-gray-400">
                    <i
                      className="fa fa-whatsapp text-green-dark hover:text-green fa-2x cursor-pointer"
                      aria-hidden="true"
                    ></i>

                    <div className="ml-4 text-md tracking-wide font-semibold w-40 text">
                      <a href="https://api.whatsapp.com/send?phone=923211392284&text=Hello this is the starting message">Whatsapp Chat</a>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-green-dark dark:text-green">
                    <i class="far fa-envelope text-green-dark hover:text-green fa-2x cursor-pointer"></i>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      artbyhumna@gmail.com
                    </div>
                  </div>
                </div>

                <form
                  className="p-6 flex flex-col justify-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(name, email, phone);
                  }}
                >
                  <div className="flex flex-col">
                    <label for="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      id="name"
                      placeholder="Full Name*"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-green-light border border-green dark:border-green-dark text-green-dark font-semibold focus:border-green-dark focus:outline-none focus:bg-green-lightest"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email*"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-green-light border border-green dark:border-green-dark text-green-dark font-semibold focus:border-green-dark focus:outline-none focus:bg-green-lightest"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label for="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone #"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-green-light border border-green dark:border-green-dark text-green-dark font-semibold focus:border-green-dark focus:outline-none focus:bg-green-lightest"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 bg-green hover:text-green-lightest hover:bg-green-dark text-green-dark font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
