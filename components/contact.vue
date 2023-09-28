<script setup>
import Axios from 'axios'
const closeBtn = ref(null)
const fm = ref(null)
const errorMsg = ref(null)
const modal =ref(false)
const form = reactive({
    fullName: "",
    email: '',
    subject: '',
    message: ''
})
const sendMail = async (e) => {
    closeBtn.value.innerHTML = '<i class="spinner spinner-grow"></i>'

    const data = form
    const headers = {
        "Content-Type": 'applicaton/json'
    }
    const response = await Axios.post('https://formspree.io/f/xpzgqnjk', data, { headers });
    if (response.data.ok) {
        closeBtn.value.innerHTML = 'Thank You!'
        modal.value = true
        fm.value.reset()
    } else {
        errorMsg.value.innerHTML = 'Error could not submit form, try sending manually!'
        closeBtn.value.innerHTML = 'send message'
    }
     
}

const contactScroll = () =>{
    let contact = document.getElementById('contact').getBoundingClientRect()
    let contact_content = document.getElementsByClassName('contact-content')[0]
    let top, bottom, winheight
    top = contact.top
    bottom = contact.bottom
    winheight = window.innerHeight

    if (top + 100 < winheight && bottom > 0) {
        contact_content.style.display = 'block'
            window.removeEventListener('scroll'. contactScroll)
      
    }
}

onMounted(() => {
    window.addEventListener('scroll', contactScroll)
})
onBeforeUnmount(()=>{
    window.addEventListener('scroll', contactScroll)
})
</script>

<template>
    <section id="contact" class="contact section-show mb-5">
        <div class="contact-content">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2">Contact</h2>
            </div>
            <div class="cont">

                <div class="row stcw mt-2">
    
                    <div class="col-md-6 d-flex align-items-stretch ">
                        <div class="info-box ">
                            <i class="fa-solid fa-map"></i>
                            <h3>My Address</h3>
                            <p>Kubwa, FCT Abuja</p>
                        </div>
                    </div>
    
                    <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch ">
                        <div class="info-box ">
                            <i class="fa-brands fashare-alt"></i>
                            <h3>Social Profiles</h3>
                            <div class="social-links">
                                <social-icons />
    
                            </div>
                        </div>
                    </div>
    
                    <div class="col-md-6 mt-4 d-flex align-items-stretch">
                        <div class="info-box">
                            <i class="fa-solid fa-envelope"></i>
                            <h3>Email Me</h3>
                            <p>alfredebube7@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 d-flex align-items-stretch">
                        <div class="info-box">
                            <i class="fa fa-phone"></i>
                            <h3>Call Me</h3>
                            <p>+234 806 198 252 0</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-lg-row flex-column gap-3 mt-3 form-sec">
                    <div class="w-100">
                        <iframe class="w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126051.79072541997!2d7.270728904779625!3d9.143772644817815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf3367a61f05%3A0xc111bee746fb6245!2sKubwa%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1695727834787!5m2!1sen!2sng"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
    
    
                    <form @submit.prevent="sendMail($event)" ref="fm" class="w-100">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input type="text" v-model="form.fullName" class="form-control" id="name"
                                    placeholder="Your Name" required="">
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" v-model="form.email" id="email"
                                    placeholder="Your Email" required="">
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input type="text" class="form-control" v-model="form.subject" id="subject" placeholder="Subject"
                                required="">
                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" v-model="form.message" rows="5" placeholder="Message"
                                required=""></textarea>
                        </div>
                        <div class="my-3">
                            <!-- error msg -->
                            <small ref="errorMsg"></small>
                        </div>
                        <div class=""><button type="submit" class="btn pe-2 ps-2 text-secondary" ref="closeBtn">Send
                                Message</button></div>
                    </form>
    
                </div>
            </div>

            <div class="modal" :class="{ 'd-block': modal }" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
                role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                    <div class="modal-content bg-secondary">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-primary">
                            <div class="mt-4 mb-4 d-flex justify-content-center align-items-center">
                                <div>
                                    <div class=" text-center">
                                        <img src="~/assets/img/thanks.jpg" alt="" style="width:100px; height:100px">
                                    </div>
                                    <div class="text-center">
                                        <h1>Thank You !</h1>
                                        <small class="text-light">I appreciate Your interest on me, I will be happy to deliver my best to you!!
                                        </small><br>
                                        <button class="btn text-primary  mt-2" @click="modal = false">close</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"   
    button
        outline: 1px solid $primary  

    .contact-content
        display: none

    .cont
     
        width: 100%
        bottom: 100%
        transition: ease-in-out 0.4s
        z-index: 2
        padding: 0 70px
        color: $primary

        .stcw 
            .align-items-stretch
                &:nth-child(odd)
                    animation: slideInLeft .5s ease
                &:nth-child(even)
                    animation: slideInRight .5s ease

        .section-show 
            top: 100px
            bottom: auto
            opacity: 1
            padding-bottom: 45px

        .section-title
            h2 
                font-size: 14px
                font-weight: 500
                padding: 0
                line-height: 1px
                margin: 0 0 20px 0
                letter-spacing: 2px
                text-transform: uppercase
                color: #aaaaaa
                font-family: "Poppins", sans-serif


            .section-title 
                h2::after 
                    content: ""
                    width: 120px
                    height: 1px
                    display: inline-block
                    background: #4ceb95
                    margin: 4px 10px


        .section-title 
            // p 
            margin: 0
            margin: -15px 0 15px 0
            font-size: 36px
            font-weight: 700
            text-transform: uppercase
            font-family: "Poppins", sans-serif
            color: $secondary !important
        .info-box 
            p
                color: $secondary !important

@media screen and (max-width:768px)
    .cont
        padding: 0 20px
    
</style>
