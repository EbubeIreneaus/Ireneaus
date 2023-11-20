<script setup>
const stickNav = () => {
    if (window.scrollY > 500) {
        document.getElementById('nav').classList.add('sticky')
    } else {
        document.getElementById('nav').classList.remove('sticky')
    }
}
onMounted(() => {
    window.addEventListener('scroll', stickNav)
})
</script>


<template >
    <main>
        <div class="layout-bar">
            <header>
                <div class="head-1 py-2 px-3 d-md-flex d-none justify-content-between align-items-center">
                    <button class="btn bg-primary bg-hover-secondary ms-lg-3">
                    <nuxt-link to="#contact" class="text-large text-light ">Contact</nuxt-link></button>
                    <social-icons />
                </div>

                <nav class="p-3 animate__animated" id="nav">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo text-primary text-hover-secondary ps-lg-5">
                            <h2>Ireneaus</h2>
                        </div>

                        <div class="nav-bar-flex d-flex h-100 align-items-center ">
                            <button class="btn bg-primary text-light text-hover-secondary d-lg-none"
                                data-bs-toggle="offcanvas" data-bs-target="#demo">
                                <i class="fa fa-bars"></i></button>
                            <ul class="d-lg-flex d-none mt-2 ">
                                <li class=""><nuxt-link to="#home">Home</nuxt-link></li>
                                <li class=""><nuxt-link to="#about">About</nuxt-link></li>
                                <li class=""><nuxt-link to="#services">Service</nuxt-link></li>
                                <li class=""><nuxt-link to="#resume">Resume</nuxt-link></li>
                                <li class=""><nuxt-link to="#portfolio">my Work</nuxt-link></li>
                                <li class=""><nuxt-link to="#contact">Contact</nuxt-link></li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <div class="offcanvas offcanvas-end" id="demo">
                <div class="offcanvas-header">
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="fa-solid fa-close fa-xl text-primary text-hover-secondary"></i>
                    </button>
                    <h5 class="offcanvas-title text-secondary px-3" id="staticBackdropLabel">Ireneaus</h5>
                </div>
                <div class="offcanvas-body">
                    <ul class="d-lg-flex flex-column mt-2">
                        <nuxt-link to="#home" ><li Contact class="" data-bs-dismiss="offcanvas">Home </li></nuxt-link>
                        <nuxt-link to="#about" ><li Contact class="" data-bs-dismiss="offcanvas">About </li></nuxt-link>
                        <nuxt-link to="#services"><li Contact class=""  data-bs-dismiss="offcanvas">Service </li></nuxt-link>
                        <nuxt-link to="#resume"><li Contact class=""  data-bs-dismiss="offcanvas" >Resume </li></nuxt-link>
                        <nuxt-link to="#portfolio"><li Contact class=""  data-bs-dismiss="offcanvas">My work </li></nuxt-link>
                        <nuxt-link to="#contact" ><li Contact class="" data-bs-dismiss="offcanvas">Contact </li></nuxt-link>

                    </ul>
                    <div class="ms-2">
                        <social-icons />
                    </div>
                </div>
            </div>
        </div>

        <div class="slot">
            <div class="preloader">
                <div class="loader">
                    <img src="/preloader.gif" alt="">
                    <p class="text-primary">IRENEAUS</p>
                </div>
            </div>
            <slot></slot>
        </div>

        <footer>
            <div class="w-100 footer text-primary shadow-lg ">
                &copy;2023 Ebube Ireneaus
            </div>
        </footer>
    </main>
</template>

<style lang="sass" scoped>
@import "~/assets/css/_color.sass"
header
    position: absolute
    width: 100vw
    z-index: 999
    .head-1
        background-color: transparentize($primary, .9)
    nav
        padding: 5px 20px
        background-color: transparentize($bg, .5)
        transition: all .7s ease !important
        .nav-bar-flex
            .logo
                font-family: 'hallowen'
                letter-spacing: 3px
                
            ul
                li
                    padding: 5px 20px
                    a
                        color: $primary
                        &:hover
                            color: $secondary
.sticky
    position: fixed !important
    width: 100%
    height: 70px
    top: 0
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2)
    background-color: transparentize($bg, .1)

.offcanvas
    background-color: transparentize($bg, .2)
    .offcanvas-body
        ul
            padding: 0
            a
                padding: 15px 20px
                color: $primary
                &:hover
                    color: $secondary
// .router-link-active
//     color: $secondary !important
            
.footer
    display: grid
    place-items: center
    padding: 30px 0 


.slot
    overflow: hidden
    width: 100vw
    .preloader
        width: 100vw
        height: 100vh
        z-index: 99999
        position: fixed
        top: 0
        display: block
        background-color: $bg

        .loader
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center

            img
                width: 150px
                height: 150px
                border: none

</style>