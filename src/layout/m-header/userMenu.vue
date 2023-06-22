<template>
    <div id="userMenu" class="d-flex align-items-center">
        <div class="d-flex flex-column">
            <div class="text-muteded ">
                Efraín Fernández
            </div>

            <div class="text-turned text-align-end">Jefe Censis</div>
        </div>
    </div>
    <div id="headerMenu" class="d-flex align-items-center mt-1 ms-lg-3">
        <div class="cursor-pointer symbol symbol-30px symbol-md-40px">
            <span class="svg-icon svg-icon-1">
                <div id="img-container">
                    <img src="media/icons/vector.svg" />
                </div>
            </span>
        </div>
        <!--<KTUserMenu></KTUserMenu>       INGRESAR AQUI EL DESPLIEGUE    -->
    </div>
</template>

<script>
export default {
    name: "UserMenu"

}
</script>

<style scoped>
#userMenu {
    margin: 10px 0px 0px 0px;
}

.text-turned {
    margin-top: -5px;
    text-align: end;
}

#img-container {
    box-sizing: border-box;
    width: 44px;
    height: 43px;
    background: #ffffff;
    border: 1px solid rgba(25, 32, 36, 0.6);
    border-radius: 6px;
    display: flex;
    /* Establece el contenedor como flexbox */
    justify-content: center;
    /* Centra horizontalmente el contenido */
    align-items: center;
}

#headerMenu {
    margin-right: 15px;
}</style>