<template>
    <div id="contToolHeader">


        <typePost></typePost>

        <channels></channels>
        <div class="d-flex ">
        </div>
    </div>
</template>

<script>
import channels from '../../layout/m-aside/channels.vue'
import typePost from '../../layout/m-aside/typePost.vue'


export default {
    name: "myAside",

    components: {
        channels,
        typePost
    },
}
</script>

<style>
#contToolHeader {
    display: flex;
    flex-direction: column  ;

}



</style>