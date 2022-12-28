import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Card() {
  return (
    <>
      <div class="flex flex-col justify-center h-screen">
        <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src="/images/image-product-desktop.jpg"
              alt="tailwind logo"
              class="rounded-xl"
            />
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div class="flex justify-between item-center">
              <p class="text-gray-500 font-medium hidden md:block uppercase">
                Perfume
              </p>
            </div>
            <h3 class="font-black text-gray-800 md:text-3xl text-xl">
              Gabrielle Essence Eau De Parfum
            </h3>
            <p class="md:text-lg text-gray-500 text-base">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <p class="text-xl font-black text-gray-800">
              $149.99
              <span class="font-normal text-gray-600 ml-3 text-base line-through">
                $169.99
              </span>
            </p>
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white dark-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ShoppingCartIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Button text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
