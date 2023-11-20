<script  setup>
const text = ref('')
const txt_arr = ['I\'m a Front-End developer',
    'I have a grasp Knowledge of Back-End', 'I\'m a Full-Stack Developer', 'I can design wordpress website for you!']
const index = ref(0)
const char = ref(0)
const sec = 100
var timeout;
const autoText = () => {
    if (index.value < 4) {
        let txt = txt_arr[index.value]
        text.value = text.value + txt[char.value]
        char.value++
        if (char.value >= txt.length) {
            index.value++
            timeout = setTimeout(eraseText, 3000)
        } else {
            timeout = setTimeout(autoText, sec)
        }
    } else {
        index.value = 0
        timeout = setTimeout(autoText, sec)
    }
}

const eraseText = () => {
    if (char.value >= 0) {
        text.value = text.value.substring(text.value, char.value)
        char.value--
        timeout = setTimeout(eraseText, sec)
    } else {
        char.value = 0
        timeout = setTimeout(autoText, sec)

    }
}
onMounted(() => {
    autoText()
})
onBeforeMount(() => {
    clearTimeout(timeout)
})
</script>

<template>
    <div id="home" class="main">
        <div class="section-one">
            <img src="~/assets/img/bg.jpg" alt="">
            <div class="b-content">

                <div class="w-100 d-flex justify-content-between align-items-center content px-lg-5 px-md-3 px-2">

                    <div class="text-content">
                        <h2 class="text-primary animate__animated animate__slideInLeft">Okigwe Ebube Ireneaus</h2>
                        <h3 class="text-secondary ps-lg-4 animate__animated animate__slideInRight">
                            {{ text }} <span class="fa-solid fa-beat">|</span></h3>
                        <p class="mt-5">
                            <router-link to="#contact" class="btn text-secondary  px-4 py-2"> contact me</router-link>
                        </p>
                    </div>

                    <div class="code-img d-lg-block d-none">
                        <img src="~/assets/img/code.jpg" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
        <about />
        <services />
        <resume />
        <portfolio />
        <contact />
    </div>
</template>

<style lang="sass" scoped>
@import "~/assets/css/_color.sass"
.main
    .section-one
        width: 100vw
        height: 100vh
        position: relative
        display: grid
        place-items: center
        img
            width: 100vw !important
            height: 100vh !important
            object-position: center
        
        &::before
            content: ''
            position: absolute
            width: 100%
            height: 100%
            top: 0
            background-color: rgba(0,0, 0, .5)
        .b-content
            position: absolute
            width: 100%
            z-index: 99
            .content
                position: relative
                z-index: 99
                .text-content
                    h3
                        text-shadow: 20px 30px 1px transparentize($secondary, .9)
                    a
                        border: 1px solid $primary
                
                .code-img
                  
                    img
                        width: 250px
                        height: 250px !important
                        border: 1px solid transparentize($secondary,.7 )
                        box-shadow: 4px 4px 2px transparentize($primary,.7 )



                   

</style>
