<script  setup>

const dModal = ref(false)

const prev_img = ref(null)
const project = ref(null)
const medias = ref([
    {
        name: 'Twitter-like App',
        desc: 'The Interactive Twitter-like Web App is a user-friendly social media app \
                    designed to help users with communication, Entertainment, News. The app\
                     provides an intuitive and visually appealing interface to Tweet, Like, and Comment \
                     on Tweets efficiently.',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'Django'],
        src: ['OkisRepair/home.png'], link: '', repo: ''
    },

    {
        name: 'Twitter-like App',
        desc: 'The Interactive Twitter-like Web App is a user-friendly social media app \
                    designed to help users with communication, Entertainment, News. The app\
                     provides an intuitive and visually appealing interface to Tweet, Like, and Comment \
                     on Tweets efficiently.',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'Django'],
        src: ['Todo App/home default.jpg'], link: '', repo: ''
    },
    {
        name: 'Twitter-like App',
        desc: 'The Interactive Twitter-like Web App is a user-friendly social media app \
                    designed to help users with communication, Entertainment, News. The app\
                     provides an intuitive and visually appealing interface to Tweet, Like, and Comment \
                     on Tweets efficiently.',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'Django'],
        src: ['twitter app/home.png', 'twitter app/register.png', 'twitter app/singleTweet.png', 'twitter app/profile.png'], link: '', repo: ''
    },

    {
        name: 'Twitter-like App',
        desc: 'The Interactive Twitter-like Web App is a user-friendly social media app \
                    designed to help users with communication, Entertainment, News. The app\
                     provides an intuitive and visually appealing interface to Tweet, Like, and Comment \
                     on Tweets efficiently.',
        features: ['Tweet', 'Likes', 'Comment', 'view nexted comment', 'Authentication'],
        technologies: ['HTML', 'CSS', "Bootstrap 5", "JS", "VueJs", 'Django'],
        src: ['Todo App/home default.jpg'], link: '', repo: ''
    }

])


const openModal = (index) => {
    project.value = medias.value[index]

    prev_img.value = '/images/' + project.value.src[0]
    dModal.value = true
}
const changePrevImg = (e) => {
    prev_img.value = e.target.src
}

const portfolioScroll = () =>{
    let service = document.getElementById('portfolio').getBoundingClientRect()
    let portfolio_content = document.getElementsByClassName('portfolio-content')[0]
    let top, bottom, winheight
    top = service.top
    bottom = service.bottom
    winheight = window.innerHeight

    if (top + 50 < winheight && bottom > 0) {
        portfolio_content.style.display = 'block'
            window.removeEventListener('scroll'. portfolioScroll)
      
    }
}

onMounted(() => {
    window.addEventListener('scroll', portfolioScroll)
})
onBeforeUnmount(()=>{
    window.addEventListener('scroll', portfolioScroll)
})
</script>
 
<template>
    <div id="portfolio" class="portfolio mt-5">
        <div class="portfolio-content">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">Portfiolo</h2>
            </div>

            <div class="port-container  mt-3 ">
                <div class=" media-sec position-relative mb-3" v-for="(media, index) in medias" :key="index">
                    <div class=" position-absolute w-100 h-100 action-bar d-flex justify-content-center align-items-center">
                        <button class=" fa-2xl text-dark btn" @click="openModal(index)">
                            <i class="fa fa-eye text-secondary"></i>
                        </button>
                    </div>
                    <img :src="`/images/${media.src[0]}`" class="" />
                </div>
            </div>

        </div>
        <div class="modal d-block " tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
            v-if="dModal">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                <div class="modal-content animate__animated animate__zoomIn">
                    <div class="modal-header">
                        <h5 class="modal-title text-primiary text-hover-secondary" id="modalTitleId">{{ project.name
                        }}</h5>
                        <button type="button" class="btn-close text-light" @click="dModal = false"></button>
                    </div>
                    <div class="modal-body d-flex flex-lg-row flex-column gap-3">
                    
                            <div class="d-flex flex-lg-column flex-row gap-3 img-grid ">

                                <img :src="`/images/${media}`" @click="changePrevImg($event)" class="py-3 shadow-lg" alt=""
                                    v-for="(media, index) in project.src" :key="index">

                            </div>
                            <div class=" desc p-lg-3 ">
                                <p class="text-secondarys">

                                    <img :src="prev_img" id="img-prev"
                                        class="float-start p-lg-2 py-1 px-2 shadow-lg animate__animated animate__zoomIn" alt="">

                                    {{
                                        medias[2].desc }}
                                </p>
                            </div>
                     
                    </div>
                    <div class="modal-footer">
                        <a href="" class="btn  text-hover-secondary"><i class="fa fa-eye"></i> view</a>
                        <a href="" class="btn  text-hover-secondary"><i class="fa-brands fa-github"></i>
                            git repo</a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
 
<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
    ::-webkit-scrollbar 
        width: 7px
    

    ::-webkit-scrollbar-track 
        background-color: white
    

    ::-webkit-scrollbar-thumb 
        background-color: whitesmoke
        border-radius: 40px
    

    .portfolio-content
        display: none
        

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
            img

            &:hover
                .action-bar
                    scale: 1

    .modal
        background-color: transparentize($bg, .1)
        .modal-dialog
            .modal-content
                // background-color:$bg
                .modal-body

                        .img-grid
                            padding: 15px
                            overflow: scroll

                        .desc
                            p
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
    
    .desc
        p
            img
                width: 100%

            

           
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