<script setup>
const text = ref("");
const txt_arr = [
    "Front-End developer",
    "Back-End developer",
    "Full-Stack developer",
];
const index = ref(0);
const char = ref(0);
const sec = 100;
var timeout;
const autoText = () => {
    if (index.value < 3) {
        let txt = txt_arr[index.value];
        text.value = text.value + txt[char.value];
        char.value++;
        if (char.value >= txt.length) {
            index.value++;
            timeout = setTimeout(eraseText, 3000);
        } else {
            timeout = setTimeout(autoText, sec);
        }
    } else {
        index.value = 0;
        timeout = setTimeout(autoText, sec);
    }
};

const eraseText = () => {
    if (char.value >= 0) {
        text.value = text.value.substring(text.value, char.value);
        char.value--;
        timeout = setTimeout(eraseText, sec);
    } else {
        char.value = 0;
        timeout = setTimeout(autoText, sec);
    }
};
onMounted(() => {
    autoText();
});
onBeforeMount(() => {
    clearTimeout(timeout);
});
</script>

<template>
    <div id="home" class="main">
        <div class="h-dvh md:bg-gradient-to-r md:from-black md:from-45% md:via-black/30 md:to-black bg-gradient-to-t
         from-black via-black/20 to-black">

            <div class="w-full h-full flex flex-col md:flex-row  justify-center 
            items-center lg:px-20 gap-x-20 gap-y-7">

                <div class=" !order-2 md:!order-1">
                    <p
                        class="text-secondary !text-center md:!text-start text-sm font-bold  animate__animated animate__slideInRight">
                        {{ text }} <span class="fa-solid fa-beat">|</span>
                    </p>
                    <h2 class="text-primary animate__animated animate__slideInLeft capiptalize">
                        Hello, I'm EBUBE IRENEAUS.
                    </h2>

                    <p class="mt-5 hidden md:block">
                        <a href="/ireneaus-resume.pdf" class="px-14 py-3 text-secondary bg-slate-900 rounded hover:bg-slate-950">
                            download cv
                        </a>
                    </p>
                </div>

                <div class="order-2 md:!order-1">
                    <img src="~/assets/img/001.png" alt="" class="size-56 rounded-full shadow-lg shadow-slate-200">
                </div>

                <p class="mt-5 block md:hidden !order-3">
                    <a href="#" class="px-14 py-3 text-secondary bg-slate-900 rounded hover:bg-slate-950">
                        download cv
                    </a>
                </p>
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
        width: 100vw !important
        height: 100vh !important
        position: relative
        display: flex
        justify-content: center
        align-items: center

        img
            width: 100vw !important
            height: 100vh !important

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
                        width: 250px !important
                        height: 250px !important
                        border: 1px solid transparentize($secondary,.7 )
                        box-shadow: 4px 4px 2px transparentize($primary,.7 )
</style>
