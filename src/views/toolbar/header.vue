<template>
    <div id="contToolHeader">
        <tittleLogo></tittleLogo>
        <notify></notify>
        <userMenu></userMenu>
    </div>
</template>

<script>
import tittleLogo from '../../layout/header/tittleLogo.vue';
import notify from '../../layout/header/notify.vue';
import userMenu from '../../layout/header/userMenu.vue';

export default {
    name: "header",
    mounted() {
        console.log("->", import.meta.env.VITE_PUBLIC_PATH)

    },
    components: {
        tittleLogo,
        notify,
        userMenu
    },
}
</script>

<style>
#contToolHeader {
    display: flex;
}
</style>