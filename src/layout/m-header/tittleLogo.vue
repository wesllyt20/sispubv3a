<template>
    <div id="contHeaderTittle">
        <div class="heLogo">
            <img id="minamlog" src="/media/logo/logo_minAmbiente.png" alt="">
            <img id="igplog" src="/media/logo/logo_igp.png" alt="">
        </div>
        <div id="dividermenutop" class="vr"></div>
        <h3 id="titulo1" class="titulo">Sistema de Publicación de Parámetros Sísmicos</h3>
        <h3 id="titulo2" class="titulo">SisPub v3</h3>
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
    margin: 20px 0px 0px 30px;
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
    margin-top: 10px;
    padding-left: 30px;
    font-weight: 300;
}

#titulo2 {
    display: none;
}

@media screen and (max-width: 1472px) {

    #titulo1 {
        display: none;
    }

    #titulo2 {
        display: block;
    }

}

@media screen and (max-width: 926px) {



    #titulo2,
    #dividermenutop {
        display: none;
    }

}
</style>