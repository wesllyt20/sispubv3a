<template>
    <div id="contHeaderTittle">
        <div class="heLogo">
            <img id="minamlog" src="/public/media/logo/logo_minAmbiente.png" alt="">
            <img id="igplog" src="/public/media/logo/logo_igp.png" alt="">
        </div>
        <div id="dividermenutop" class="vr"></div>
        <h3 class="titulo">Sistema de Publicación de Parámetros Sísmicos</h3>
    </div>
</template>

<script>
export default {
    name: "TittleLogo",
}
</script>

<style>
#contHeaderTittle {
    display: flex;
    align-items: center;
    height: 80px;
    background: #ffffff;
    padding: 0px 0px 0px 15px;
    left: 0px;
    top: 0px;
}

.heLogos {
    display: flex;
    align-items: center;

}

#dividermenutop {
    color: #464646;
    margin: 20px 0px 0px 35px;
    height: 40px;
    Width: 1.5px;
}

#minamlog {
    width: 180px;
    height: 50px;
    margin-right: 10px;
}

#igplog {
    width: 155px;
    height: 46px;
}

.titulo {
    color: #0000AF;
    padding-left: 30px;
    font-weight: 300;
}

@media screen and (max-width: 1472px) {
    .titulo {
        display: none;
    }

}
</style>