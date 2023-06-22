<template>
    <button id="bPub" class="" type="button" :class="{ 'btn-custom': true }" @click="pubBtn">
        Publicar evento
    </button>

    <div class="chMenu menu-section fs-8 px-3">
        <div class="d-flex justify-content-between align-items-center">
            <span id="evento" class="card-title mb-0">Evento</span>
            <div class="form-check mb-2">
                <input id="imp1" class="form-check-input mt-2" type="checkbox" v-model="isChecked1"
                    v-on:change="updateCheckboxes(1)" />
            </div>
        </div>
        <div class="block d-flex justify-content-between align-items-center">
            <span id="simulacro" class="card-title mb-0">Simulacro</span>
            <div class="form-check mb-2">
                <input id="imp2" class="form-check-input mt-2" type="checkbox" v-model="isChecked2"
                    v-on:change="updateCheckboxes(2)" />
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <span id="simulacion" class="card-title mb-0">Simulación</span>
            <div class="form-check mb-2">
                <input id="imp3" class="form-check-input mt-2" type="checkbox" v-model="isChecked3"
                    v-on:change="updateCheckboxes(3)" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TypePost",
    data() {
        return {
            isChecked1: true,
            isChecked2: false,
            isChecked3: false,
            evnt1: "#005AD9",
            nigg1: "500",
            evnt2: "#192024",
            nigg2: "400",
            evnt3: "#192024",
            nigg3: "400",
            btncol: "#005AD9",
            btnhov: "rgba(0, 90, 217, 0.8)",
        };
    },
    methods: {
        updateCheckboxes(checkedBoxNumber) {
            switch (checkedBoxNumber) {
                case 1:
                    this.isChecked2 = false;
                    this.isChecked3 = false;
                    this.evnt1 = "#005AD9";
                    this.evnt2 = "#192024";
                    this.evnt3 = "#192024";
                    this.btncol = "#005AD9";
                    this.nigg1 = "500";
                    this.nigg2 = "400";
                    this.nigg3 = "400";
                    this.btnhov = "rgba(0, 90, 217, 0.8)";
                    break;
                case 2:
                    this.isChecked1 = false;
                    this.isChecked3 = false;
                    this.evnt1 = "#192024";
                    this.evnt2 = "#FF0000";
                    this.evnt3 = "#192024";
                    this.btncol = "#FF0000";
                    this.nigg1 = "400";
                    this.nigg2 = "500";
                    this.nigg3 = "400";
                    this.btnhov = "rgba(255, 0, 0, 0.8)";
                    break;
                case 3:
                    this.isChecked1 = false;
                    this.isChecked2 = false;
                    this.evnt1 = "#192024";
                    this.evnt2 = "#192024";
                    this.evnt3 = "#FF7A00";
                    this.btncol = "#FF7A00";
                    this.nigg1 = "400";
                    this.nigg2 = "400";
                    this.nigg3 = "500";
                    this.btnhov = "rgba(255, 122, 0, 0.8)";
                    break;
                default:
                    console.log("vacio");
                    break;
            }
        },

    }
}
</script>

<style>
#bPub {
    width: 195.62px;
    height: 40px;
    border-radius: 6px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #e5eaee;
}

.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active,
.btn-custom.active {
    background-color: v-bind(btnhov);
    border-color: v-bind(btnhov);
}

.btn-custom {
    background-color: v-bind(btncol);
    border-color: v-bind(btncol);
}

#imp1,
#imp2,
#imp3 {
    width: 16.13px;
    height: 14px;
    mix-blend-mode: normal;
    border-radius: 2px;
}

#imp1:checked {
    background-color: #0075ff;
    border-color: #0075ff;
}

#imp2:checked {
    background-color: #ff0000;
    border-color: #ff0000;
}

#imp3:checked {
    background-color: #ff7a00;
    border-color: #ff7a00;
}

#evento {
    color: v-bind(evnt1);
    font-weight: v-bind(nigg1);
}

#simulacro {
    color: v-bind(evnt2);
    font-weight: v-bind(nigg2);
}

#simulacion {
    color: v-bind(evnt3);
    font-weight: v-bind(nigg3);
}
</style>