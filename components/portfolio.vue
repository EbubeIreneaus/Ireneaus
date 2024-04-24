<script  setup>

const dModal = ref(false)

const prev_img = ref(null)
const project = ref(null)
const medias = ref([
    {
        name: 'My Portifolio',
        src: '/images/portfolio.png',
        type: 'image',
        link: 'https://ireneaus.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
    },
    {
        name: "Okis Store",
        src: '/images/okisstore.png',
        type: 'image',
        link: 'https://okisstore.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-store'
    },
    {
        name: 'Digital Assets',
        src: '/images/digital assets.png',
        type: 'image',
        link: 'https://digitalassetsgrowth.com', repo: '#'
    },
    {
        name: "School Template Landing Page",
        src: '/images/school_template.png',
        type: 'image',
        link: 'https://okisrepair.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-repair'
    },
    {
        name: 'Isls Url Shortener and QRCode generator',
        src: '/images/isls.png',
        type: 'image',
        link: 'https://isls.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
    },
    {
        name: 'CodXtreme Digital Solutions',
        src: '/images/codxtreme.png',
        type: 'image',
        link: 'https://codxtreme.netlify.app',
        repo: 'https://github.com/EbubeIreneaus/codXtreme'
    },
    {
        name: 'Okis Blog',
        src: '/images/blog.png',
        type: 'image',
        link: 'https://twitter-xx.netlify.app/', repo: 'https://github.com/EbubeIreneaus/'
    },
    {
        name: "Okis Car Repair Service",
        src: '/images/okisrepair.png',
        type: 'image',
        link: 'https://okisrepair.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-repair'
    },

    




])


const openModal = (index) => {
    project.value = medias.value[index]

    prev_img.value = '/images/' + project.value.src[0]
    dModal.value = true
}
const changePrevImg = (e) => {
    prev_img.value = e.target.src
}

</script>
 
<template>
    <div id="portfolio" class="portfolio mt-5">
        <div class="portfolio-content">
            <div class="head-title py-5 px-3" data-aos="fade-up">
                <h2 class="text-primary py-2 ">Portfiolo</h2>
            </div>

            <div class="mt-3 grid  md:grid-cols-2 lg:grid-cols-3 gap-3 !px-5 md:!px-5 lg:!px-10">
                <div class="relative" v-for="(media, index) in medias" :key="index" data-aos="slide-up"
                    :data-aos-delay="index * 50">
                    <div class="w-full min-h-[200px] ">
                        <img v-if="media.type == 'image'" :src="media.src" class="w-full h-full object-cover object-center" />
                        <video :src="media.src" class="w-full h-full object-cover object-center" controls v-else></video>
                    </div>
                    <div class="absolute left-0 bottom-0 py-0.5 bg-green-400/80 w-full flex px-5 gap-5 text-white justify-between">
                        <p class="text-sm line-clamp-1 text-ellipsis flex-grow overflow-hidden">
                            {{media.name}}
                        </p>
                        <p class="flex gap-3">
                            <a :href="media.link"><i class="fa fa-eye"></i></a>
                            <a :href="media.repo"><i class="fa-brands fa-github"></i></a>
                        </p>
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>
 
<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
</style>