import React from 'react';
import Navbar from '../components/molecules/navbar/Navbar';
import Footer from '../components/molecules/footer/Footer';

const CreateProduct = () => {
    return (
        <>
            <Navbar />
            <h1>Crear un producto</h1>

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del producto</label>
                        <input type="text" id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                        <input type="text" id="productDescription" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Imagen del producto</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="precio">Precio</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                            </div>
                            <input type="number" id="productPrice" className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Introduce una cantidad" required />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="stock">Stock</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                            </div>
                            <input type="number" id="productStock" className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Introduce una cantidad" required />
                        </div>
                    </div>
                    <div>
                        <label for="categorias" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona una categoría</label>
                        <select id="productCategory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Categorías</option>
                            <option value="Tés">Tés</option>
                            <option value="Infusiones">Infusiones</option>
                            <option value="Accesorios">Accesorios</option>
                            <option value="Regalos">Regalos</option>
                        </select>
                    </div>
                    <div>
                        <label for="categorias" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona los alérgenos</label>
                        <div class="grid grid-cols-3 gap-3">
                        <div class="flex items-center me-4">
                            <input id="huevos" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="huevos" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Huevos</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="gluten" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="gluten" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="crustaceos" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="crustaceos" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Crustáceos</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="pescado" type="checkbox" value="" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="pescado" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pescado</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="cacahuete" type="checkbox" value="" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="cacahuete" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cacahuete</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="soja" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="soja" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Soja</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="lacteos" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="lacteos" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lácteos</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="frutosConCascara" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="frutosConCascara" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frutos con cáscara</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="apio" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="apio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apio</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="mostaza" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="mostaza" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mostaza</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="sesamo" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="sesamo" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sésamo</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="sulfitos" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="sulfitos" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sulfitos</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="altramuces" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="altramuces" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Altramuces</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="moluscos" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="moluscos" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Moluscos</label>
                        </div>
                        </div>
                    </div>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear producto</button>
            </form>
            <Footer />
        </>
    )
}

export default CreateProduct;