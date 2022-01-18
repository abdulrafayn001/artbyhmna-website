import React from 'react'
import Logo from '../../utility/svg/logo.svg'

import easypaisa from '../../utility/svg/easypaisa-seeklogo.com.svg'
import jazzcash from '../../utility/svg/jazz-cash-seeklogo.com.svg'
export default function Footer() {
    return (
        <footer class="text-gray-600 body-font bg-green-dark">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col items-center sm:justify-between">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a href="" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src={Logo} alt="ArtByHmna Logo" title="ArtByHmna" />
                    </a>
                    <p class="mt-2 text-sm text-gray-500 text-green">COLOR & THREADS</p>
                </div>
                <div className="md:ml-8 flex flex-col justify-center items-center mt-4 md:mt-0">
                    <div>
                        <h1 className="text-green-light text-2xl font-extrabold">Payment Methods</h1>
                    </div>
                    <div className="flex ">
                        <img className="w-24 bg-green-light p-1" src={easypaisa} alt="EasyPaisa Logo" />
                        <img className="w-24 bg-green-light p-1 sm:ml-5" src={jazzcash} alt="EasyPaisa Logo" />
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <div>
                    <h1 className="text-xl font-semibold text-green-light">ABOUT US</h1>
                    <ul>
                        <li className="text-green-lightest">Contact Us</li>
                        <li className="text-green-lightest">Blogs</li>
                        <li className="text-green-lightest">Terms and Conditions</li>
                    </ul>
                </div>

                <div className="mt-4 sm:mt-8">
                    <h1 className="text-xl font-semibold text-green-light">POPULAR CATEGORIES</h1>
                    <ul>
                        <li className="text-green-lightest">Canvas Painting</li>
                        <li className="text-green-lightest">Canvas Embroidary</li>
                        <li className="text-green-lightest">Embroidary hoops</li>
                    </ul>
                </div>
                </div>
            </div>
            <div class=" bg-green-light">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 Copyright:
                    <a href="https://www.instagram.com/artbyhmna" class="text-gray-600 ml-1" target="_blank">Art By Hmna</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a href="" class="text-gray-500">
                        <i class="fab fa-facebook-f hover:text-green-dark"></i>
                    </a>
                    <a href="" class="ml-3 text-gray-500">
                        <i class="fab fa-twitter hover:text-green-dark"></i>
                    </a>
                    <a href="" class="ml-3 text-gray-500">
                        <i class="fab fa-linkedin-in hover:text-green-dark"></i>
                    </a>
                    <a href="" class="ml-3 text-gray-500">
                        <i class="fab fa-youtube hover:text-green-dark"></i>
                    </a>
                    <a href="" class="ml-3 text-gray-500">
                        <i class="fab fa-instagram hover:text-green-dark"></i>
                    </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

