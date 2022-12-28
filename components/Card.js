export default function Card() {
  return (
    <>
      <div class="flex flex-col justify-center h-screen">
        <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              class="rounded-xl"
            />
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div class="flex justify-between item-center">
              <p class="text-gray-500 font-medium hidden md:block uppercase">Perfume</p>
            </div>
            <h3 class="font-black text-gray-800 md:text-3xl text-xl">
              The Majestic and Wonderful Bahamas
            </h3>
            <p class="md:text-lg text-gray-500 text-base">
              The best kept secret of The Bahamas is the country’s sheer size
              and diversity. With 16 major islands, The Bahamas is an unmatched
              destination
            </p>
            <p class="text-xl font-black text-gray-800">
              $110
              <span class="font-normal text-gray-600 text-base">/night</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
