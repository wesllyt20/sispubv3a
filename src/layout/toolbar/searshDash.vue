<template>
  <!-- Search -->
  <div
    class="sticky container top-0 mt-[-40px] text-igp-blue text-sm bg-white h-20 w-60 flex text-center rounded shadow-lg bottom-4"
  >
    <div class="container grid grid-cols-12 gap-4 bg-white items-center">
      <label class="col-span-2 gap-2 flex justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33331 7.58252H21.6666"
            stroke="#0032FF"
            stroke-width="2.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.58331 13H18.4166"
            stroke="#0032FF"
            stroke-width="2.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9167 18.4175H14.0834"
            stroke="#0032FF"
            stroke-width="2.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Filtrar por:
      </label>

      <input
        type="text"
        id="first_name"
        class="col-span-4 ml-[-15px] bg-igp-white border border-gray-300 placeholder-igp-blue text-igp-blue text-sm rounded-lg block w-full p-2.5 focus:ring-igp-blue focus:ring-1 hover:ring-1 hover:ring-igp-blue focus:border-igp-blue focus:outline-none focus:placeholder:text-igp-white"
        placeholder="Nombre o código de convocatoria"
      />
      <searshDash class="col-span-2">
        <option selected>Tipo de convocatoria</option>
      </searshDash>
      <searshDash class="col-span-2">
        <option selected>Estados</option>
      </searshDash>
      <searshDash class="col-span-1">
        <option selected>Año</option>
        <option>2023</option>
        <option>2022</option>
      </searshDash>
      <div class="col-span-1">
        <button
          type="button"
          class="text-white bg-igp-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-4"
        >
          <svg
            height="20px"
            width="20px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-46.08 -46.08 604.16 604.16"
            xml:space="preserve"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path
                  class="st0"
                  d="M172.625,102.4c-42.674,0-77.392,34.739-77.392,77.438c0,5.932,4.806,10.74,10.733,10.74 c5.928,0,10.733-4.808,10.733-10.74c0-30.856,25.088-55.959,55.926-55.959c5.928,0,10.733-4.808,10.733-10.74 C183.358,107.208,178.553,102.4,172.625,102.4z"
                ></path>
                <path
                  class="st0"
                  d="M361.657,301.511c19.402-30.436,30.645-66.546,30.645-105.244C392.302,88.036,304.318,0,196.151,0 c-38.676,0-74.765,11.25-105.182,30.663C66.734,46.123,46.11,66.759,30.659,91.008C11.257,121.444,0,157.568,0,196.267 c0,108.217,87.998,196.266,196.151,196.266c38.676,0,74.779-11.264,105.197-30.677C325.582,346.396,346.206,325.76,361.657,301.511 z M259.758,320.242c-19.075,9.842-40.708,15.403-63.607,15.403c-76.797,0-139.296-62.535-139.296-139.378 c0-22.912,5.558-44.558,15.394-63.644c13.318-25.856,34.483-47.019,60.323-60.331c19.075-9.842,40.694-15.403,63.578-15.403 c76.812,0,139.296,62.521,139.296,139.378c0,22.898-5.558,44.53-15.394,63.616C306.749,285.739,285.598,306.916,259.758,320.242z"
                ></path>
                <path
                  class="st0"
                  d="M499.516,439.154L386.275,326.13c-16.119,23.552-36.771,44.202-60.309,60.345l113.241,113.024 c8.329,8.334,19.246,12.501,30.148,12.501c10.916,0,21.833-4.167,30.162-12.501C516.161,482.83,516.161,455.822,499.516,439.154z"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import searshDash from "../../components/modals/imputs/basicSelect.vue";
export default {
  name: "headerDash",
  components: {
    searshDash,
  },
};
</script>
<style></style>
