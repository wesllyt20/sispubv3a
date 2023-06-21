<template>
    <div id="notify-container">
        <img src="media/icons/campana.png" />
        <div id="divmen" class="border border-vertical"></div>
        <span id="numb">0</span>
    </div>
</template>

<script>
export default {
    name: "Notify",

}
</script>

<style>
#notify-container {
    box-sizing: border-box;

    width: 88.01px;
    height: 40px;

    background: #ffffff;
    border: 1px solid rgba(25, 32, 36, 0.6);
    border-radius: 6px;
    display: flex;
    /* Establece el contenedor como flexbox */
    justify-content: center;
    /* Centra horizontalmente el contenido */
    align-items: center;
}

#divmen {
    height: 22.82px;
    margin-left: 12px;
    margin-right: 12px;
    border-width: 1px !important;
    border-style: solid !important;
    border-color: #D9D9D9 !important;
    line-height: 36px;
}

#numb {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: right;

    color: #464e5f;
    display: flex;
    /* Establece el contenedor como flexbox */
    justify-content: center;
    /* Centra horizontalmente el contenido */
    align-items: center;
}
</style>