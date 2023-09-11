<template>
  <div
    class="w-[38.5rem] bg-white m-auto px-[0.75rem] py-[1rem] rounded-[20px] grid gap-[1rem] text-center text-dark-blue-500"
    v-if="convocatorias.length > 0"
  >
    <div class="flex justify-between items-center w-full">
      <small class="text-xs font-normal text-igp-dark-500">{{
        convocatorias[0].nombre
      }}</small>
      <span
        class="text-center whitespace-nowrap rounded-full px-4 py-1 text-xs font-normal text-white"
        :class="{
          ' bg-igp-semaforo-100':
            convocatorias[0].estadoConvocatoria === 'Vigente',
          ' bg-igp-semaforo-200':
            convocatorias[0].estadoConvocatoria === 'En proceso',
          ' bg-igp-semaforo-50':
            convocatorias[0].estadoConvocatoria === 'Finalizado',
          ' bg-igp-semaforo-500':
            convocatorias[0].estadoConvocatoria === 'Cancelado',
        }"
      >
        {{ convocatorias[0].estadoConvocatoria }}
      </span>
    </div>
    <div class="text-igp-blue text-sm text-start">
      <p>{{ convocatorias[0].descripcion }}</p>
      <div class="text-igp-blue text-sm text-start h-0.5 bg-igp-blue"></div>
    </div>
    <div class="bg-[#FFF3CD] w-full h-full text-start">
      <p class="text-[#856404] text-xs px-6 py-1 mt-2.5 leading-loose">
        <b>Importante: </b>

        Los interesados deben considerar previamente a la postulación, si
        cumplen con los requisitos establecidos para cada vacante y revisar que
        documentación (anexos, formatos, etc) debe adjuntar para su correcta
        inscripción.
      </p>
    </div>
    <label class="text-igp-blue text-start text-sm mb-[-5px]">
      Resumen de convocatoria</label
    >
    <ul class="list-none text-start text-igp-blue space-y-2">
      <li class="flex space-x-2">
        <svg
          class="mt-0.5"
          width="20px"
          height="20px"
          viewBox="-0.8 -0.8 21.60 21.60"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0032FF"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect x="0" fill="none" width="20" height="20"></rect>
            <g>
              <path
                d="M10.6 9c-.4-.1-.8-.3-1.1-.6-.3-.1-.4-.4-.4-.6 0-.2.1-.5.3-.6.3-.2.6-.4.9-.3.6 0 1.1.3 1.4.7l.9-1.2c-.3-.3-.6-.5-.9-.7-.3-.2-.7-.3-1.1-.3V4H9.4v1.4c-.5.1-1 .4-1.4.8-.4.5-.7 1.1-.6 1.7 0 .6.2 1.2.6 1.6.5.5 1.2.8 1.8 1.1.3.1.7.3 1 .5.2.2.3.5.3.8 0 .3-.1.6-.3.9-.3.3-.7.4-1 .4-.4 0-.9-.1-1.2-.4-.3-.2-.6-.5-.8-.8l-1 1.1c.3.4.6.7 1 1 .5.3 1.1.6 1.7.6V16h1.1v-1.5c.6-.1 1.1-.4 1.5-.8.5-.5.8-1.3.8-2 0-.6-.2-1.3-.7-1.7-.5-.5-1-.8-1.6-1zM10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.1 10 3.1s6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"
              ></path>
            </g>
          </g>
        </svg>
        <p>
          Remuneración:
          <span class="text-igp-dark-500 ml-1">{{
            convocatorias[0].subvencion
          }}</span>
        </p>
      </li>

      <li class="flex space-x-2">
        <svg
          fill="#0032FF"
          height="28px"
          width="28px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 379.80 379.80"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M379.327,337.307l-25.658-68.74V161.591h-0.001c-0.031-2.378-1.189-4.6-3.119-5.988L181.353,33.878 c-0.01-0.006-0.239-0.165-0.289-0.196c-2.532-1.731-5.977-1.798-8.61,0.097L3.12,155.602c-1.931,1.389-3.088,3.61-3.119,5.988 c-0.032,2.378,1.065,4.63,2.959,6.069l85.921,65.353v25.539c0,26.419,45.277,40.674,87.878,40.674 c42.674,0,88.028-14.255,88.028-40.674v-25.539l73.882-56.195v91.749l-25.66,68.741c-1.448,3.881,0.522,8.201,4.403,9.649 c0.864,0.323,1.75,0.476,2.622,0.476c3.04,0,5.901-1.863,7.027-4.879l11.607-31.096v28.473c0,4.142,3.357,7.5,7.5,7.5 c4.143,0,7.5-3.358,7.5-7.5v-28.469l11.605,31.092c1.126,3.017,3.986,4.879,7.027,4.879c0.871,0,1.758-0.153,2.622-0.476 C378.803,345.509,380.775,341.188,379.327,337.307z M249.787,258.551c0,10.468-28.449,25.674-73.028,25.674 c-45.152,0-72.878-14.953-72.878-25.674v-12.52c7.912-18.672,38.931-32.615,73.028-32.615c34.044,0,65,13.942,72.878,32.611 V258.551z M249.787,221.968c-16.553-14.347-43.563-23.552-72.878-23.552c-29.375,0-56.446,9.218-73.028,23.581v-17.485 c0-22.895,33.443-42.238,73.028-42.238c39.504,0,72.878,19.343,72.878,42.238V221.968z M264.787,214.167v-9.654 c0-15.979-9.623-30.735-27.096-41.548c-16.352-10.118-37.938-15.69-60.782-15.69c-22.852,0-44.463,5.571-60.851,15.687 c-17.526,10.817-27.178,25.574-27.178,41.552v9.654l-68.771-52.309L176.835,49.104l156.725,112.754L264.787,214.167z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <p>
          Formación Académica:
          <span class="text-igp-dark-500 ml-1">{{
            convocatorias[0].formacionAcademica
          }}</span>
        </p>
      </li>

      <li class="flex space-x-2">
        <svg
          class="mt-[1px]"
          width="20px"
          height="20px"
          viewBox="-1.92 -1.92 27.84 27.84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#0032FF"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#0032FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <p>
          Fecha y Lugar de Postulación:
          <span class="text-igp-dark-500 ml-1">
            Se debe postular hasta el
            <b>{{ fechaFormateada }}</b> mediante la plataforma de convocatorias
            del IGP.
          </span>
        </p>
      </li>
      <li class="flex space-x-2">
        <p>Lugar:<span>texto</span></p>
      </li>
      <li class="flex space-x-2">
        <p>Dependecia:<span>texto</span></p>
      </li>
      <li class="flex space-x-2">
        <p>Bases y cronograma:<span>texto</span></p>
      </li>
    </ul>
    <hr />
    <label class="text-igp-blue text-start text-sm mb-[-5px]">
      Documentación complementaria</label
    >
    <ul class="list-none text-start">
      <li>
        Anexos: <a class="">Anexo2A</a>, <a href="">Anexo2B</a>,
        <a href="">Anexo3</a>,
        <a href="">Anexo4</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
import { useConvocatoriaStore } from "../../stores/convocatorias";
import { DateTime } from "luxon";

const convocatoriaStore = useConvocatoriaStore();
let convocatorias = ref([]);

const { nanoLink } = defineProps(["nanoLink"]);
onMounted(async () => {
  await convocatoriaStore.listConvocatoriaById(nanoLink);
  convocatorias.value = convocatoriaStore.convocatorias;
});
</script>
