<script  setup>

const dModal = ref(false)

const prev_img = ref(null)
const project = ref(null)
const medias = ref([
    {
        name: 'My Portifolio',
        desc: "Welcome to my digital portfolio, a space where creativity knows no bounds. I'm \
        Ebube Ireneaus, and I specialize in bringing ideas to life through web development, design, and more. \
        design with sass, tailwindcss, vuejs and nuxtjs",
        features: ['Gallery', 'About me', 'What I offer', 'my resume', 'my skills'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'nuxt.js'],
        src: '/images/about.png',
        type: 'image',
        link: 'https://ireneaus.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
    },
    {
        name: "Oki's Store",
        desc: "Oki's Store, is an interactive user frendly Ecommerce website. this project has level up my skills,\
         my first time using pinia state management \
        to persist the state of cart items across all pages. this app was design with Tailwindcss, vue.js, nuxt.js \
        and fake store API for products,",
        features: ['Home', 'Shop', 'cart', 'checkout', 'wishlist', 'product'],
        technologies: ['HTML', 'CSS', "Tailwindcss", "JS", "VueJs", 'nuxt.js', 'pinia'],
        src: '/video/okisstore.mp4',
        type: 'video',
        link: 'https://okisstore.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-store'
    },
    {
        name: 'Digital Assets',
        desc: "this is one of numerious website  built for my potential client. Digital Assets is a crypto and forex trading \
        investment plartform, I was opportuned to carry out this project of building this full stack web application.\
          https://digitalassetsgrowth.com",
        features: ['Home', 'About Company', 'Pricing', 'Service', 'Registeration/Authentication', 'user dashboard'],
        technologies: ['HTML', 'CSS', "Tailwind CSS", "JS", "VueJs/Nuxt.js", 'python/Django Rest Famework'],
        src: '/video/dgassets.mp4',
        type: 'video',
        link: 'https://digitalassetsgrowth.com', repo: 'https://github.com/EbubeIreneaus/DigitalAssets'
    },
    {
        name: 'Isls Url Shortener',
        desc: "just completed another project, URL shortener coupled QRCode generator, powered by python(Django Rest Framework), \
        on the client side  javascript (vue.js, nuxt.js) and cloudinary storage system, it was an awesome experience",
        features: ['Link Shortener', 'QRCode Generator'],
        technologies: ['HTML', 'CSS', "Tailwindcss", "JS", "VueJs", 'nuxt.js', 'python', 'django'],
        src: '/video/isls.mp4',
        type: 'video',
        link: 'https://isls.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
    },
    {
        name: 'Todo App',
        desc: 'The Interactive To-Do List Web App is a user-friendly task management\
                     tool designed to help users keep timing of their daily tasks and improve productivity. \
                      The app provides an intuitive and visually appealing interface to create, edit, Delete, \
                       and multi-delete tasks efficiently.',
        features: ['Alarm', 'Time Calculation', 'Dark and Light Themes', 'animations'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs"],
        src: 'https://ireneaus.netlify.app/images/todo.png',
        type: 'image',
        link: 'https://ireneaus-todo-app-project.netlify.app',
        repo: 'https://github.com/EbubeIreneaus/TodoApp'
    },
    {
        name: 'Twitter-like App',
        desc: 'This a copy of twitter(x) social media plartform, This project was develop my me to level up my knowledge\
     on vue.js, and django. this code seems complicated but this is my first experience. planning to match this up with another social \
     media plartform right now.',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication', 'Profile...'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'python', 'Django'],
        src: 'https://ireneaus.netlify.app/images/twitter.png',
        type: 'image',
        link: 'https://twitter-xx.netlify.app/', repo: 'https://github.com/EbubeIreneaus/X'
    },

    {
        name: "Oki's Repair",
        desc: 'Okis Reepair is a static website, I designed it to boost my front end experiece, it has no \
        functionality, only design. feel free to check it out',
        features: [],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'nuxtJs'],
        src: 'https://ireneaus.netlify.app/images/okrepair.png',
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

            <div class="mt-3 grid  md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-10">
                <div class="" v-for="(media, index) in medias" :key="index" data-aos="slide-up"
                    :data-aos-delay="index * 50">
                    <div class="w-full aspect-video">
                        <img v-if="media.type == 'image'" :src="media.src" class="w-full h-full" />
                        <video :src="media.src" class="w-full h-full" controls v-else></video>
                    </div>
                    <div class=" text-white">
                        <p class="text-balance text-sm text-orange-300 capitalize">{{ media.desc }}</p>
                        <div class="flex gap-4">
                            <a :href="media.link" class="flex items-center gap-1">
                                <span class="py-1">View</span>
                                <i class="fa fa-arrow-right"></i>
                            </a>
                            <a :href="media.repo" class="flex items-center gap-1">
                                <span class="py-1">Git</span>
                                <i class="fa fa-arrow-right "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>
 
<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
</style>