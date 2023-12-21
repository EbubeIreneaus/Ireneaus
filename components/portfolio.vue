<script  setup>

const dModal = ref(false)

const prev_img = ref(null)
const project = ref(null)
const medias = ref([
    {
        name: 'My Portifolio',
        desc: "Welcome to my digital portfolio, a space where creativity knows no bounds. I'm \
        Ebube Ireneaus, and I specialize in bringing ideas to life through web development, design, and more.\
        \n My portfolio is more than just a collection of projects; it's a testament to my dedication to \
         innovation and the art of storytelling through technology,",
        features: ['Gallery', 'About me', 'What I offer', 'my resume', 'my skills'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'nuxt.js'],
        src: ['portfolio/home.png', 'portfolio/about.png',
            'portfolio/service.png', 'portfolio/resume.png', 'portfolio/contact.png'],
        link: 'https://ireneaus.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
    },
    {
        name: "Oki's Store",
        desc: "",
        features: ['Home', 'Shop', 'cart', 'checkout', 'wishlist', 'product'],
        technologies: ['HTML', 'CSS', "Tailwindcss", "JS", "VueJs", 'nuxt.js', 'pinia'],
        src: ['okisstore/home.png', 'okisstore/home.png','okisstore/home002.png','okisstore/home003.png',
            'okisstore/shop.png', 'okisstore/product001.png', 'okisstore/cart.png','okisstore/wishlist.png',
            'okisstore/checkout.png'],
        link: 'https://okisstore.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-store'
    },
    {
        name: 'Digital Assets',
        desc: "thisis one of numerious website I built for my client. Digital Assets is a crypto and forex trading \
        investment plartform, I was opportuned to carry out this project of building thier full stack web application.\
         it was a great experience for me during the process of developing https://digitalassetsgrowth.com",
        features: ['Home', 'About Company', 'Pricing', 'Service', 'Registeration/Authentication', 'user dashboard'],
        technologies: ['HTML', 'CSS', "Tailwind CSS", "JS", "VueJs/Nuxt.js", 'python/Django Rest Famework'],
        src: ['digital Assets/home.jpg', 'digital Assets/yoe.png',
            'digital Assets/003.png', 'digital Assets/company.png', 'digital Assets/contact.png',
            'digital Assets/pricing.png','digital Assets/service.png'],
        link: 'https://digitalassetsgrowth.com', repo: '#'
    },

    {
        name: 'Todo App',
        desc: 'The Interactive To-Do List Web App is a user-friendly task management\
                     tool designed to help users keep timing of their daily tasks and improve productivity. \
                      The app provides an intuitive and visually appealing interface to create, edit, Delete, \
                       and multi-delete tasks efficiently.',
        features: ['Alarm', 'Time Calculation', 'Dark and Light Themes', 'animations'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs"],
        src: ['Todo App/home dk.png', 'Todo App/home lt.png', 'Todo App/alarm.jpg', 'Todo App/new task dk.png',
            'Todo App/edit lt.jpg'],
        link: 'https://ireneaus-todo-app-project.netlify.app',
        repo: 'https://github.com/EbubeIreneaus/TodoApp'
    },
    {
        name: 'Twitter-like App',
        desc: 'The Interactive Twitter-like Web App is a user-friendly social media app \
                    designed to help users with communication, Entertainment, News. The app\
                     provides an intuitive and visually appealing interface to Tweet, Like, and Comment \
                     on Tweets efficiently. ',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication', 'Profile...'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'Django'],
        src: ['twitter app/home.png', 'twitter app/register.png', 'twitter app/singleTweet.png', 'twitter app/profile.png'],
        link: 'https://twitter-xx.netlify.app/', repo: 'https://github.com/EbubeIreneaus/X'
    },

    {
        name: "Oki's Repair",
        desc: 'Okis Repair is a static website, I designed it to boost my front end experiece, it has no \
        functionality, only design. feel free to check it out',
        features: [],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'nuxtJs'],
        src: ['OkisRepair/home.png','OkisRepair/home2.png','OkisRepair/bk-service.png',
        'OkisRepair/contact-us.png','OkisRepair/footer.png',
    ],
     link: 'https://okisrepair.netlify.app', repo: 'https://github.com/EbubeIreneaus/okis-repair'
    },

    {
        name: 'Isls Url Shortener',
        desc: "just completed another project, URL shortener with QRCode generator, with python (django) \
        and javascript (vue.js, nuxt.js), it was an awesome experience developing this project.\
The more I go, the more I see more reason to love python due to it numerous library that has made \
 tough task easy.Feel free to review this project 🙏 💪",
        features: ['Link Shortener', 'QRCode Generator'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'nuxt.js', 'python', 'django'],
        src: ['url shortener/Url-Shortener.png', 'url shortener/Url-Shortener home2.png','url shortener/qr_img.png',
            'url shortener/qr_generator page.png', 'url shortener/qr-code modal.png'],
        link: 'https://isls.netlify.app', repo: 'https://github.com/EbubeIreneaus/Ireneaus'
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
        <div class="portfolio-content" data-aos="fade-up">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">Portfiolo</h2>
            </div>

            <div class="port-container  mt-3 ">
                <div class=" media-sec position-relative mb-3" v-for="(media, index) in medias" :key="index" data-aos="slide-up"
                :data-aos-delay="index *50">
                    <div class=" position-absolute w-100 h-100 action-bar d-flex justify-content-center align-items-center">
                        <button class=" fa-2xl text-dark btn" @click="openModal(index)">
                            <i class="fa fa-eye text-secondary"></i>
                        </button>
                    </div>
                    <img :src="`/images/${media.src[0]}`" class="" style="object-fit: cover; object-position: center; "/>
                </div>
            </div>

        </div>
        <div class="cmodal " v-if="dModal">


            <div class="modal-body ">
                <div class="modal-header">
                    <h5 class="modal-title text-primary text-hover-secondary px-3" id="modalTitleId">{{ project.name
                    }}</h5>
                    <button type="button" class="btn-close text-light" @click="dModal = false"></button>
                </div>

                <div class="cont d-flex flex-lg-row flex-column gap-3 ">
                    <div class="d-flex flex-lg-column flex-row gap-2 img-grid ">

                        <img :src="`/images/${media}`" @click="changePrevImg($event)" class="py-lg-3 py-1 shadow-lg" alt=""
                            v-for="(media, index) in project.src" :key="index">

                    </div>

                    <div class=" desc p-lg-3 ">
                        <p class="text-secondarys">

                            <img :src="prev_img" id="img-prev" style="object-fit:cover"
                                class="float-start p-lg-2 py-1 px-2 shadow-lg animate__animated animate__zoomIn" alt="">

                            {{
                                project.desc }}
                        </p>
                        <ul class="d-flex  mt-2 flex-wrap"><b class="text-primary py-2">Features:</b>
                            <li v-for="(ft, index) in project.features" :key="index" class="px-3 py-2 text-secondary">{{
                                ft }}</li>

                        </ul>

                        <ul class="d-flex  mt-2 flex-wrap"><b class="text-primary py-2">Tech:</b>
                            <li v-for="(ft, index) in project.technologies" :key="index" class="px-3 py-2 text-secondary">{{
                                ft }}</li>

                        </ul>
                    </div>
                </div>

                <div class="modal-footer ">
                    <a :href="project.link" target="_blank" class="btn text-primary  text-hover-secondary"><i
                            class="fa fa-eye"></i>
                        view</a>
                    <a :href="project.repo" target="_blank" class="btn text-primary text-hover-secondary"><i
                            class="fa-brands fa-github"></i>
                        git repo</a>
                </div>
            </div>

        </div>


    </div>
</template>
 
<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
    ::-webkit-scrollbar 
        width: 7px !important
        height: 2px
    

    ::-webkit-scrollbar-track 
        background-color: white
    

    ::-webkit-scrollbar-thumb 
        background-color: black
        border-radius: 40px
    

   
        

    .port-container
        display: grid
        grid-template-columns: repeat(3, 33.33%)
        gap: 20px
        padding: 0 7em
        animation: zoomIn 1s ease 
        .media-sec
            box-shadow: 0 0 10px 0 black

            .action-bar
                background-color: transparentize($primary, .7)
                scale: 0
                transition: all .5s ease
            // img

            &:hover
                .action-bar
                    scale: 1

    .cmodal
        height: 100vh
        width: 100vw
        position: fixed
        left: 0
        top: 0
        z-index: 9999
        background-color: transparentize($bg, .5)
        
        .modal-body
                background-color: $bg
                position: abosolute
                z-index: 9999
                width: 90%
                height: 90%
                margin: 2.5% auto
                padding: 10px
                box-shadow: 0 0 2px 0 black
              
                .modal-header, .modal-footer
                    height: 10%
                .cont
                    height: 80%

                    .img-grid
                        width: 20%
                        height: 100%
                        padding: 15px
                        overflow-y: scroll

                        img
                            object-fit: 'cover'
                    .desc
                        width:80%
                        overflow-y: scroll
                        p
                            color: $primary
                            img
                                width: 100%
                                padding: 4px
                                margin-bottom:10px
                    

// .v-enter-active
//     animation-name: 'zoomIn'
//     animation-duration: 5s

@media screen and (max-width:992px)
    .port-container
            grid-template-columns: 50% 50%
            padding: 0 1.5em
    
    .modal-body
        width: 90% !important
        margin-top: 7% !important
        .modal-header, .modal-footer
            height: 10%
        .cont
            height: 80%

            .img-grid
                width: 100% !important
                max-height: 10% !important
                overflow-x: scroll !important
                overflow-y: hidden !important
                padding: 0 !important
                margin: 0 !important


            .desc
                width:100% !important
                overflow-x: hidden !important

                ul
                    padding: 0
                
              

            

           
@media screen and (max-width:462px)
    .port-container
            grid-template-columns: 100%
            padding: 0 1em

    .img-grid
        min-height: 100px !important  
        img
            height: 100px  
    .desc
        p
            img
                width: 100%      
</style>