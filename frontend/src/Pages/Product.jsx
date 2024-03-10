import Navbar from '../components/molecules/navbar/Navbar';
import Footer from '../components/molecules/footer/Footer';
import GreenOriental from "../assets/img/Green-oriental.jpg";
import React from 'react'

const Product = () => {
  return (
    <>
      <Navbar></Navbar>

      <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img src={GreenOriental} class="w-full relative z-10" alt="Product image" />
                <div class="border-4 border-blue-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>

            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">Green Oriental</h1>
                <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis</p>
              </div>

              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">Alérgenos:</h1>
                <div class="bg-gray-100">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <ul class="divide-y divide-gray-200">
                      <li class="p-3 flex justify-between items-center user-card">
                        <div class="flex items-center">
                          <img class="w-10 h-10 rounded-full" src={GreenOriental} alt="Alérgeno" />
                          <span class="ml-3 font-medium">Alérgeno</span>
                        </div>
                      </li>

                      <li class="p-3 flex justify-between items-center user-card">
                        <div class="flex items-center">
                          <img class="w-10 h-10 rounded-full" src={GreenOriental} alt="Alérgeno" />
                          <span class="ml-3 font-medium">Alérgeno</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div class="inline-block align-bottom mr-5">
                  <span class="font-bold text-5xl leading-none align-baseline">7</span>
                  <span class="text-2xl leading-none align-baseline">.20</span>
                  <span class="text-2xl leading-none align-baseline">€</span>
                </div>
                <div class="inline-block align-bottom">
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="mdi mdi-cart -ml-2 mr-2"></i> COMPRAR
                    <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Product