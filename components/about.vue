<script  setup>
const aboutScroll = () =>{
    let about = document.getElementById('about').getBoundingClientRect()
    let p_bar = document.getElementsByClassName('progress-bar')
    let skillTop = document.getElementsByClassName('skillTop')[0].getBoundingClientRect()
    let about_content = document.getElementsByClassName('about-content')[0]
    let top, bottom, winheight
    top = about.top
    bottom = about.bottom
    winheight = window.innerHeight

    if (top < winheight && bottom > 0) {
        about_content.style.display = 'block'
        if (skillTop.top + 100 < winheight && skillTop.bottom > 0  ) {
            for (const progress_bar of p_bar) {
                progress_bar.style.display="block"
            }
            window.removeEventListener('scroll'. aboutScroll)
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', aboutScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll'. aboutScroll)
})
</script>

<template>
    <div id="about" class="about">
        <div class="about-content">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">About Me</h2>
            </div>
            <div>
                <div class="first-sec-about p-lg-1 p-2">
                    <div class="about-me-txt p-lg-5 ">
                        <p class="text-light">
                            <img src="~/assets/img/ebube1.jpg" alt="" class="mx-md-3 mb-lg-0 mb-4 ">
                            <span class="txt">Passionate Full-Stack Developer with a focus on creating seamless web applications. Proficient in
                            <span class="skill-txt">HTML</span>, <span class="skill-txt">CSS</span>,
                            <span class="skill-txt">Bootstrap</span> and <span class="skill-txt">JavaScript</span>, I
                            specialize in crafting visually appealing and responsive
                            front-end interfaces that elevate user experiences. Leveraging <span
                                class="skill-txt">Vue.js</span>
                            and <span class="skill-txt">Nuxt.js</span>, I excel in
                            building dynamic and interactive user interfaces that seamlessly connect with back-end
                            functionalities.
                            <br> <br>
                            Equipped with a foundation in <span class="skill-txt">PHP</span> and <span
                                class="skill-txt">Django</span>, I develop robust and scalable server-side
                            applications. My coding skills are enhanced by a design sensibility, ensuring both technical
                            proficiency and aesthetic excellence.
                            <br><br>
                            Driven by curiosity and a hunger to learn, I am committed to staying up-to-date with the latest
                            technologies. I thrive in dynamic environments, consistently seeking opportunities to contribute
                            my
                            skills while expanding my toolkit.
                            <br><br>
                            Let's collaborate to bring your ideas to life!"</span>
                        </p>
                    </div>
                </div>

                <div class="about-detail d-flex flex-lg-row flex-column gap-lg-5 gap-2 px-lg-5 p-3">
                    <div class="info-sec row ">
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Birthday</b> <span> 12 Oct 2002</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Age</b> <span> 22</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Website</b> <span>https://ireneaus.netlify.app</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Degree</b> <span> B.Sc</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> whatsapp</b> <span> +234 80 619 825 20</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Email</b> <span> okigweebube7@gmail.com</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> City</b> <span>FCT, Abuja</span>
                        </p>
                        <p class="col-lg-6 col-12">
                            <i class="fa-solid fa-angle-right"></i>
                            <b> Freelancing</b> <span> Available</span>
                        </p>
                    </div>
                    <div class="w-100 skillTop">
                        <div class=" row skills ">
                            <div class="col-lg-6 col-12">
                                <b>HTML</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w100">100</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>CSS (sass)</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>Bootstrap</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>JavaScript</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>Vue.Js</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w95">
                                        95%</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>Nuxt.js</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w95">
                                        95%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>PHP</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>Django</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w95">
                                        95%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>MYSQL</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>GIT</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w95">
                                        90%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <b>WordPress</b>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated w90">
                                        90%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import "~/assets/css/_color.sass"     
.about-content
    display: none
.about-me-txt
    p
       
        img
            width: 300px
            float: left
            animation: zoomIn 1s ease 
       
        .skill-txt
            color: $secondary

.about-detail
    .info-sec
        p
            color: $primary
            i, b
                color: $secondary

.skills
    b
        color: $primary
    .progress
        height: 10px
        // border-radius: 0
        margin: 10px 0
        .progress-bar
            background-color: $secondary
            animation: slideInLeft .8s ease 
            display: none
           
        .w100
            width: 100%
        .w95
            width: 95%
        .w90
            width: 90%
        .w70
            width:70%
        .w50
            width: 50%
@media screen and (max-width:465px)
    .about-me-txt
        img
            width: 100vw !important
    
           
</style>
