import React from 'react'
import namasteLargeLogo from "../../../assets/img/namasteLargeLogo.png"

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="#" class="flex items-center">
                            <img src={namasteLargeLogo} class="h-30 me-3" alt="Namasté Logo" />
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Categorías</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Tés</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Infusiones</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Regalos</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Accesorios</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Namasté</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Quiénes somos</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Métodos de pago</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Métodos de envío</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Preguntas frequentes</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">C/ El Roble 7A, 29006 Málaga-España</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Tel.: +34 077 1234567</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Email: info@namaste.es</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Información Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Términos y condiciones</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Política de Privacidad</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Política de Cookies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Namaste™. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>

                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2.125 0A2.125 2.125 0 0 0 0 2.125v19.75A2.125 2.125 0 0 0 2.125 24h19.75A2.125 2.125 0 0 0 24 21.875V2.125A2.125 2.125 0 0 0 21.875 0H2.125ZM7.5 19.5H3.75V9.75h3.75v9.75Zm-1.875-11.25a1.875 1.875 0 1 1 1.875-1.875A1.875 1.875 0 0 1 5.625 8.25Zm13.125 11.25h-3.75v-6a1.125 1.125 0 0 0-2.25 0v6h-3.75v-9.75h3.75v1.313c.563-.938 1.875-1.875 3.188-1.875 2.25 0 4.062 1.875 4.062 4.688v5.625Z" />
                            </svg>
                            <span class="sr-only">LinkedIn account</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.1 7.25c-.25-1.05-1.05-1.88-2.1-2.1C19.55 5 12 5 12 5s-7.55 0-8.99.15c-1.05.22-1.85 1.05-2.1 2.1C0 8.69 0 12 0 12s0 3.31.1 4.75c.25 1.05 1.05 1.88 2.1 2.1C4.45 19 12 19 12 19s7.55 0 8.99-.15c1.05-.22 1.85-1.05 2.1-2.1.11-1.44.1-4.75.1-4.75s0-3.31-.1-4.75zM9.5 15.5V8.5l6.5 3-6.5 3z" />
                            </svg>
                            <span class="sr-only">YouTube account</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span class="sr-only">Discord community</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer