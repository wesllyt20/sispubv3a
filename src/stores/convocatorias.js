import { defineStore } from "pinia";
import { listConv } from '../boot/axios'
import { ref } from "vue";




export const useConvocatoriaStore = defineStore('convocatoria', () => {
    const convocatorias = ref([]);

    const listConvocatorias = async () => {
        try {
            const res = await listConv.get("/convocatorias");
            convocatorias.value = res.data.convocatoria.map((item) => item);
        } catch (error) {
            console.log(error)
        }
    };

    const listConvocatoriaById = async (nanoLink) => {
        try {
            const res = await listConv.get(`/convocatorias/${nanoLink}`);
            convocatorias.value = [res.data];
        } catch (error) {
            console.log(error)
        }
    };

    // Llama a listConvocatorias por defecto cuando se carga el módulo.
    listConvocatorias();


    return {
        convocatorias,
        listConvocatorias,
        listConvocatoriaById, // Agregamos esta función para listar por ID
    }
})
