<template>
  <div class="container mt-4 mb-4">
    <nav class="">
      <div class="flex align-items-center">
        <navBarText href="https://www.youtube.com/" class="text-igp-dark-500">
          <svg
            class="mt-0.5 mr-1 hover:text-igp-blue"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8L8 2L2 8"
              stroke="#737B80"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6662 6.66675V13.5334C12.6543 13.6685 12.5895 13.7934 12.4858 13.8809C12.3821 13.9683 12.2481 14.0112 12.1129 14.0001H9.53289V9.40008H6.46622V14.0001H3.88622C3.75105 14.0112 3.61698 13.9683 3.5133 13.8809C3.40962 13.7934 3.34476 13.6685 3.33289 13.5334V6.66675"
              stroke="#737B80"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Portal IGP</navBarText
        >

        <div class="mx-4 border-s border-igp-dark-300 h-5" />
        <navBarText href="https://www.youtube.com/" class="text-igp-dark-500">
          Convocatorias de trabajo</navBarText
        >
        <div class="mx-4 border-s border-igp-dark-300 h-5" />
        <!-- Divider -->
        <label class="text-igp-blue">Destacados</label>
      </div>
    </nav>
    <!-- TODO: Se agrego min-h-[600px]: Define altura mínima -->
    <div class="grid grid-cols-12 gap-4 mt-6 min-h-[605px]">
      <div
        class="mx-auto col-span-6 w-full"
        v-for="(convocatoria, index) in displayedConvocatorias"
        :key="index"
      >
        <div
          class="inline-flex flex-col w-full border border-gray-400 space-y-2 items-center justify-end flex-1 p-3 bg-igp-white rounded-xl hover:ring-1 hover:ring-igp-blue"
        >
          <!--Nombre y estado-->
          <div class="flex justify-between items-center w-full">
            <small class="w-full text-xs font-normal text-igp-dark-500">{{
              convocatoria.nombre
            }}</small>
            <span
              class="flex text-center whitespace-nowrap rounded-full px-4 py-1 text-xs font-normal text-white"
              :class="{
                ' bg-igp-semaforo-100':
                  convocatoria.estadoConvocatoria === 'Vigente',
                ' bg-igp-semaforo-200':
                  convocatoria.estadoConvocatoria === 'En proceso',
                ' bg-igp-semaforo-50':
                  convocatoria.estadoConvocatoria === 'Finalizado',
                ' bg-igp-semaforo-500':
                  convocatoria.estadoConvocatoria === 'Cancelado',
              }"
            >
              {{ convocatoria.estadoConvocatoria }}
            </span>
          </div>
          <!--Titulo-->
          <p class="w-full mt-3 text-sm font-normal text-igp-blue">
            {{ convocatoria.descripcion }}
          </p>
          <!-- Cuerpo -->
          <div
            class="container mt-3 flex flex-col items-start text-xs space-y-1"
          >
            <p class="mb-1 text-igp-blue flex items-center justify-center">
              <svg
                class="mr-1.5"
                width="14"
                height="14"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_101_13246)">
                  <path
                    d="M6.89005 5.85005C6.63005 5.78505 6.37005 5.65505 6.17505 5.46005C5.98005 5.39505 5.91505 5.20005 5.91505 5.07005C5.91505 4.94005 5.98005 4.74505 6.11005 4.68005C6.30505 4.55005 6.50005 4.42005 6.69505 4.48505C7.08505 4.48505 7.41005 4.68005 7.60505 4.94005L8.19005 4.16005C7.99505 3.96505 7.80005 3.83505 7.60505 3.70505C7.41005 3.57505 7.15005 3.51005 6.89005 3.51005V2.60005H6.11005V3.51005C5.78505 3.57505 5.46005 3.77005 5.20005 4.03005C4.94005 4.35505 4.74505 4.74505 4.81005 5.13505C4.81005 5.52505 4.94005 5.91505 5.20005 6.17505C5.52505 6.50005 5.98005 6.69505 6.37005 6.89005C6.56505 6.95505 6.82505 7.08505 7.02005 7.21505C7.15005 7.34505 7.21505 7.54005 7.21505 7.73505C7.21505 7.93005 7.15005 8.12505 7.02005 8.32005C6.82505 8.51505 6.56505 8.58005 6.37005 8.58005C6.11005 8.58005 5.78505 8.51505 5.59005 8.32005C5.39505 8.19005 5.20005 7.99505 5.07005 7.80005L4.42005 8.51505C4.61505 8.77505 4.81005 8.97005 5.07005 9.16505C5.39505 9.36005 5.78505 9.55505 6.17505 9.55505V10.4H6.89005V9.42505C7.28005 9.36005 7.60505 9.16505 7.86505 8.90505C8.19005 8.58005 8.38505 8.06005 8.38505 7.60505C8.38505 7.21505 8.25505 6.76005 7.93005 6.50005C7.60505 6.17505 7.28005 5.98005 6.89005 5.85005ZM6.50005 1.30005C3.64005 1.30005 1.30005 3.64005 1.30005 6.50005C1.30005 9.36005 3.64005 11.7 6.50005 11.7C9.36005 11.7 11.7 9.36005 11.7 6.50005C11.7 3.64005 9.36005 1.30005 6.50005 1.30005ZM6.50005 10.985C4.03005 10.985 2.01505 8.97005 2.01505 6.50005C2.01505 4.03005 4.03005 2.01505 6.50005 2.01505C8.97005 2.01505 10.985 4.03005 10.985 6.50005C10.985 8.97005 8.97005 10.985 6.50005 10.985Z"
                    fill="#0032FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_101_13246">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              Remuneración:<small class="text-igp-dark-500 ml-1"
                >S/.{{ convocatoria.subvencion }}</small
              >
            </p>
            <p class="mb-1 text-igp-blue flex items-center justify-center">
              <svg
                class="mr-2"
                width="13"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08337 8.37806L5.25004 9.49513L7.58337 7.26099"
                  stroke="#0032FF"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.75012 5.02675V11.1706C1.75012 11.3188 1.81158 11.4608 1.92098 11.5656C2.03037 11.6703 2.17875 11.7292 2.33346 11.7292H11.6668C11.8215 11.7292 11.9699 11.6703 12.0793 11.5656C12.1887 11.4608 12.2501 11.3188 12.2501 11.1706V5.02675M1.75012 5.02675H12.2501M1.75012 5.02675V2.79261C1.75012 2.64447 1.81158 2.50241 1.92098 2.39766C2.03037 2.29292 2.17875 2.23407 2.33346 2.23407H11.6668C11.8215 2.23407 11.9699 2.29292 12.0793 2.39766C12.1887 2.50241 12.2501 2.64447 12.2501 2.79261V5.02675M9.33346 1.67554V3.35114M4.66679 1.67554V3.35114M7.58346 9.49503L9.91679 7.26089"
                  stroke="#0032FF"
                  stroke-width="0.666667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Fecha de postulación:<small class="text-igp-dark-500 ml-1">{{
                convocatoria.fechaInicioConvocatoria
              }}</small>
            </p>
            <p class="mb-1 text-igp-blue flex items-center justify-center">
              <svg
                class="mr-2.5"
                width="11"
                height="13"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5104 0L4.07993 0.0381986L3.65613 0.113181L3.24234 0.223532L2.84523 0.366424L2.46815 0.544684L2.11276 0.754068L1.78406 0.994578L1.4854 1.26055L1.22178 1.54917L0.991523 1.86041L0.801314 2.19005L0.651148 2.53525L0.542695 2.88895L0.477623 3.25254L0.455933 3.61896L0.477623 4.21175L0.542695 4.80312L0.652816 5.38883L0.806319 5.96747L1.00153 6.53762L1.24013 7.09645L1.51877 7.63972L1.83746 8.16742L2.19452 8.67815L2.58995 9.16908L3.02043 9.63736L3.48427 10.0816H3.48594L3.69117 10.2386L3.92643 10.3646L4.18004 10.4579L4.45034 10.5159L4.72731 10.54L5.00428 10.5159L5.27291 10.4579L5.52819 10.3646L5.76345 10.2386L5.97035 10.0816L6.43419 9.63736L6.863 9.16908L7.2601 8.67815L7.6155 8.16742L7.93418 7.63972L8.21282 7.09645L8.45142 6.53762L8.6483 5.96747L8.80014 5.38883L8.91026 4.80312L8.97533 4.21175L8.99869 3.61896L8.97533 3.25254L8.91026 2.88895L8.80347 2.53525L8.65164 2.19005L8.46143 1.86041L8.23451 1.54917L7.96922 1.26055L7.66889 0.994578L7.34019 0.754068L6.98647 0.544684L6.60939 0.366424L6.21061 0.223532L5.79682 0.113181L5.37302 0.0381986L4.94255 0H4.5104ZM4.72731 0.721529L5.1094 0.739921L5.48815 0.793682L5.85689 0.884227L6.20894 1.00873L6.54598 1.16576L6.85799 1.35393L7.14331 1.57039L7.39859 1.81231L7.6205 2.07687L7.8057 2.36124L7.95253 2.66258L8.05932 2.97383L8.12439 3.29357L8.14441 3.61755L8.12439 4.16648L8.06266 4.71116L7.96088 5.2516L7.82072 5.78779L7.63885 6.31267L7.42028 6.82764L7.16166 7.3313L6.868 7.81798L6.53764 8.28909L6.17557 8.74182L5.7768 9.17332L5.34966 9.5836L5.21618 9.68122L5.06602 9.75196L4.90084 9.7944L4.72731 9.81421L4.55379 9.7944L4.3886 9.75196L4.23844 9.68122L4.10496 9.5836L3.67782 9.17332L3.27905 8.74182L2.91698 8.28909L2.58662 7.81798L2.29296 7.3313L2.03434 6.82764L1.81577 6.31267L1.6339 5.78779L1.49374 5.2516L1.39196 4.71116L1.33023 4.16648L1.31021 3.61755L1.3319 3.29357L1.3953 2.97383L1.50042 2.66258L1.64725 2.36124L1.83412 2.07687L2.05603 1.81231L2.31131 1.57039L2.59663 1.35393L2.90864 1.16576L3.24401 1.00873L3.5994 0.884227L3.96647 0.793682L4.34355 0.739921L4.72731 0.721529ZM4.65723 2.16883L4.38527 2.19713L4.12164 2.26362L3.87303 2.36124L3.64612 2.49423L3.44923 2.65551L3.28405 2.84226L3.15558 3.05023L3.06715 3.27093L3.02376 3.50012V3.73497L3.06715 3.96416L3.15558 4.18487L3.28405 4.39142L3.44923 4.57817L3.64612 4.73804L3.87303 4.87103L4.12164 4.97148L4.38527 5.03655L4.65723 5.06485L4.93254 5.06061L5.20284 5.0125L5.45978 4.92903L5.69838 4.81302L5.91195 4.66589L6.09382 4.49187L6.24065 4.2938L6.34743 4.08018L6.41417 3.85381L6.43586 3.62038V3.61896L6.41417 3.38694L6.34743 3.16058L6.24065 2.94554L6.09382 2.74888L5.91195 2.57487L5.69838 2.4249L5.45978 2.30889L5.20284 2.22684L4.93254 2.17873L4.65723 2.16883ZM4.72731 2.89319L4.91585 2.913L5.09772 2.96676L5.25956 3.05306L5.39638 3.16765L5.49816 3.30347L5.5599 3.45768L5.58159 3.61896L5.5599 3.77883L5.49816 3.93304L5.39638 4.07027L5.25956 4.18628L5.09772 4.27258L4.91585 4.32634L4.72731 4.34474L4.5371 4.32634L4.35523 4.27258L4.19506 4.18628L4.05991 4.07027L3.95813 3.93304L3.89473 3.77883L3.87303 3.61896L3.89473 3.45768L3.95813 3.30347L4.05991 3.16765L4.19506 3.05306L4.35523 2.96676L4.5371 2.913L4.72731 2.89319Z"
                  fill="#0032FF"
                />
              </svg>

              Lugar:<small class="text-igp-dark-500 ml-1"
                >Mayorazgo, Ate - Lima</small
              >
            </p>
          </div>
          <!-- Botones -->
          <div class="container inline-flex">
            <btnDefault
              class="text-xs px-3"
              :disabled="
                convocatoria.estadoConvocatoria === 'Cancelado' ||
                convocatoria.estadoConvocatoria === 'En proceso' ||
                convocatoria.estadoConvocatoria === 'Finalizado'
              "
              :class="{
                'bg-igp-dark-300 hover:bg-igp-dark-300 cursor-not-allowed':
                  convocatoria.estadoConvocatoria === 'En proceso' ||
                  convocatoria.estadoConvocatoria === 'Finalizado' ||
                  convocatoria.estadoConvocatoria === 'Cancelado',
              }"
              @click="btnPostulacion(convocatoria)"
            >
              Postula ahora</btnDefault
            >
            <btnwh>
              <span class="">Ver Bases de Convocatoria</span>
            </btnwh>
            <btnwh
              v-if="
                convocatoria.estadoConvocatoria === 'En proceso' ||
                convocatoria.estadoConvocatoria === 'Finalizado'
              "
              :disabled="
                convocatoria.estadoConvocatoria === 'Cancelado' ||
                convocatoria.estadoConvocatoria === 'Vigente'
              "
            >
              <span class="">Ver procesos de selección</span>
            </btnwh>
            <button
              v-else
              class="text-xs px-4 hover:text-igp-dark-300 bg-igp-white-50 hover:bg-igp-white-50 cursor-not-allowed border-igp-dark-300 text-igp-dark-300 font-medium rounded-lg mb-2.5 text-center mr-2 border-1"
              disabled
            >
              Ver procesos de selección
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <label>
          {{ useConv.convocatorias }}
        </label> -->
    <div class="container flex justify-center mt-6">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              class="no-underline block py-2 px-3 leading-tight text-igp-blue bg-igp-dark-50 hover:bg-igp-blue-600 rounded-l-lg border border-gray-300 hover:text-white"
              @click.prevent="previousPage"
              :disabled="currentPage === 0"
            >
              &lt
              <!-- Contenido del botón "Anterior" -->
            </a>
          </li>
          <li v-for="pageNumber in pageCount" :key="pageNumber">
            <a
              href="#"
              :class="{
                'no-underline z-10 py-1.5 px-3 leading-tight text-white bg-igp-blue border border-blue-300 hover:bg-igp-blue hover:text-white ':
                  currentPage === pageNumber - 1,
                'no-underline py-1.5 px-3 leading-tight text-blue-igp bg-igp-dark-50 border border-gray-300 hover:bg-igp-blue-600 hover:text-white ':
                  currentPage !== pageNumber - 1,
              }"
              @click.prevent="changePage(pageNumber - 1)"
            >
              {{ pageNumber }}
            </a>
          </li>
          <li>
            <a
              href="#"
              class="no-underline block py-2 px-3 leading-tight text-igp-blue bg-igp-dark-50 rounded-r-lg border border-gray-300 hover:bg-igp-blue-600 hover:text-white"
              @click.prevent="nextPage"
              :disabled="currentPage === pageCount - 1"
            >
              >
              <!-- Contenido del botón "Siguiente" -->
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="absolute">
    <blurmodel :modalOpen="modalOpen" @close-modal="closeModal">
      <descripcionPanel :nanoLink="valorNanoLink"></descripcionPanel>
    </blurmodel>
  </div>
  <!-- API http://localhost:5000/api/v1/convocatorias/ -->
</template>

<script setup>
import { ref, computed } from "vue";
import navBarText from "../../components/modals/text/navBarText.vue";
import { useConvocatoriaStore } from "../../stores/convocatorias";
import btnDefault from "../../components/modals/buttons/btnDefault.vue";
import btnwh from "../../components/modals/buttons/btnwh.vue";
import descripcionPanel from "../panels/descripcionPanel.vue";
import blurmodel from "../../components/modals/blurmodel.vue";
const useConv = useConvocatoriaStore();

const itemsPerPage = 4;
const currentPage = ref(0);
let modalOpen = false;
const valorNanoLink = ref("");

const displayedConvocatorias = computed(() => {
  const startIndex = currentPage.value * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return useConv.convocatorias.slice(startIndex, endIndex);
});

const btnPostulacion = (convocatoria) => {
  console.log(convocatoria.nanoLink);
  modalOpen = !modalOpen;
  valorNanoLink.value = convocatoria.nanoLink;
};
const pageCount = computed(() =>
  Math.ceil(useConv.convocatorias.length / itemsPerPage)
);
const closeModal = () => {
  modalOpen = false;
};
function nextPage() {
  if (currentPage.value < pageCount.value - 1) {
    currentPage.value++;
  }
}

function previousPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}
function changePage(newPage) {
  currentPage.value = newPage;
}
function actualizarConvocatorias() {
  useConv.listConvocatorias();
}
setInterval(actualizarConvocatorias, 500);
</script>

<style></style>
