 <script  setup>
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
                    src: ['twitter app/home.png'], link: '', repo: ''
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
 </script>
 
 <template>
    <div id="portfiolo" class="portfolio mt-5">
        <div>
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">Portfiolo</h2>
            </div>

            <div class="port-container  mt-3 ">
                <div class=" media-sec position-relative mb-3" v-for="(media, index) in medias"
                    :key="index">
                    <div class=" position-absolute w-100 h-100 action-bar d-flex justify-content-center align-items-center">
                        <button class=" fa-2xl text-dark btn" @click="null">
                            <i class="fa fa-eye text-secondary"></i>
                        </button>
                    </div>
                    <img :src="`/images/${media.src}`" class=""/>
                </div>
            </div>

        </div>
    </div>
 </template>
 
 <style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     

    .port-container
        display: grid
        grid-template-columns: repeat(3, 33.33%)
        gap: 20px
        padding: 0 7em

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
@media screen and (max-width:992px)
    .port-container
            grid-template-columns: 50% 50%
            padding: 0 1.5em

           
@media screen and (max-width:462px)
    .port-container
            grid-template-columns: 100%
            padding: 0 1em



 </style>
 