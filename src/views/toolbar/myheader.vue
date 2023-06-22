<template>
    <div id="contToolHeader">
        <tittleLogo></tittleLogo>
        <div class="d-flex ">
            <notify></notify>
            <userMenu></userMenu>
        </div>
    </div>
</template>

<script>
import tittleLogo from '../../layout/m-header/tittleLogo.vue';
import notify from '../../layout/m-header/notify.vue';
import userMenu from '../../layout/m-header/userMenu.vue';

export default {
    name: "myHeader",
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
    justify-content: space-between;
}
</style>