<script  setup>
const resumeScroll = () =>{
    let service = document.getElementById('resume').getBoundingClientRect()
    let resume_content = document.getElementsByClassName('resume-content')[0]
    let top, bottom, winheight
    top = service.top
    bottom = service.bottom
    winheight = window.innerHeight

    if (top + 100 < winheight && bottom > 0) {
        resume_content.style.display = 'block'
            window.removeEventListener('scroll'. resumeScroll)
      
    }
}

onMounted(() => {
    window.addEventListener('scroll', resumeScroll)
})
onBeforeUnmount(()=>{
    window.addEventListener('scroll', resumeScroll)
})
</script>

<template>
    <div id="resume" class="resume">
        <div class="resume-content">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">Resume</h2>
            </div>

            <div class="mt-3 mb-3 text-secondary px-lg-5 px-3">
                <span>I am an active participant in the open-source community,
                    contributing to projects that align with my interests and values. Giving back to the developer
                    community is one of the ways I stay connected and grow as a developer.</span>
            </div>
            <div class="row mb-3">
                <div class="col-lg-6 col-12 position-relative animate__animated animate__slideInLeft">
                    <h3 class="text-primary ms-3">Sumary</h3>
                    <div class="anm h-100">
                        <div class="s-c border "></div>
                        <div class="v-l border "></div>
                    </div>
                    <div class="ms-4 mb-3">
                        <h5 class="text-primary ms-2">Ebube Ireneaus</h5>
                        <small class="text-secondary">As a Front End <i class="fas fa-expand-alt    "></i> Developer, I possess a comprehensive understanding of both front-end and
                           the basics of back-end technologies. My proficiency includes working with HTML, CSS, and JavaScript
                            frameworks such as Vue.js, Nuxt.js an JQuery for building captivating user interfaces.
                            On the server-side, I'm well-versed in PHP and Django,
                            aenabling me to create robust and efficient back-end functionalities.</small>
                    </div>
                    <h3 class="ms-3 text-primary">Education</h3>
                    <div class="anm h-100">
                        <div class="s-c border"></div>

                    </div>
                    <div class="ms-4">
                        <h5 class="text-info ms-2 text-primary">B.Sc Nautical Secience</h5>
                        <div class="badge border p-1 m-2 text-secondary">2020 - 2024</div>
                        <address class="text-secondary">
                            Nigeria Maritime Uniersity, Okerenkoko warri-south LGA, Delta State.
                        </address>
                    </div>
                </div>

                <div class="col-lg-6 col-12 position-relative animate__animated animate__slideInRight">
                    <h3 class="ms-3 text-primary">Experience</h3>
                    <div class="anm h-100">
                        <div class="s-c border"></div>
                        <div class="v-l border "></div>
                    </div>
                    <div class="ms-4">
                        <h5 class="text-info ms-2 text-primary">Web Development</h5>
                        <ul>
                            <li>
                                <details class="text-secondary " open>
                                    <summary>Project - GoldenWealths.com (2020)</summary>
                                    <small>In 2020, I had the privilege of collaborating
                                        with a valued
                                        client,
                                        www.goldenwealths.com, to create an innovative and user-centric web
                                        platform. As the sole Full Stack Developer for this project, I undertook
                                        the responsibility of designing, developing, and delivering a dynamic
                                        website that catered to the unique needs of the financial services
                                        industry.</small>
                                </details>


                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
.resume-content
    display: none
.anm 
    position: absolute
/* overflow: hidden; */



.s-c 
    width: 15px
    height: 15px
    border: 1px solid $secondary !important
    border-radius: 50%


.v-l 
    height: inherit
    width: 0
    margin: auto
    border: 1px solid $secondary !important


li 
    list-style-type: circle

</style>
