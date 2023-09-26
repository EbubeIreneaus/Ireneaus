<script setup>
const stickNav = () => {
    if (window.scrollY > 500) {
       document.getElementById('nav').classList.add('sticky')
    }else{
        document.getElementById('nav').classList.remove('sticky')
    }
}
onMounted(() => {
    window.addEventListener('scroll', stickNav)
})
</script>

<template>
    <main>
        <div class="layout-bar">
            <header>
                <div class="head-1 p-2 d-md-flex d-none justify-content-between align-items-center">
                    <button class="btn bg-primary text-large text-light bg-hover-secondary ms-lg-3">contact</button>
                    <social-icons />
                </div>

                <nav class="p-3 animate__animated" id="nav">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo text-primary ps-lg-5">
                            <h2>Ireneaus</h2>
                        </div>

                        <div class="nav-bar-flex d-flex h-100 align-items-center ">
                            <button class="btn bg-primary text-light text-hover-secondary d-lg-none">
                                <i class="fa fa-bars"></i></button>
                            <ul class="d-lg-flex d-none mt-2">
                                <li class=""><router-link to="#home">Home</router-link></li>
                                <li class=""><router-link to="#about">About</router-link></li>
                                <li class=""><router-link to="#services">Service</router-link></li>
                                <li class=""><router-link to="#resume">Resume</router-link></li>
                                <li class=""><router-link to="#portfolio">my Work</router-link></li>
                                <li class=""><router-link to="#contact">Contact</router-link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

        <div class="slot">
            <slot></slot>
        </div>

        <footer>
            <div class="w-100 footer text-primary shadow-lg py-3">
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


            
// .router-link-active
//     color: $secondary !important
            
.footer
    display: grid
    place-items: center     

           
</style>