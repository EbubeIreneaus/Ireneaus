<script setup>

</script>

<template>
    <div id="services" class="services">
        <div class="service-content">
            <div class="head-title py-5 px-3">
                <h2 class="text-primary py-2 ">Services</h2>
            </div>
            <div class="section-services  mt-2 ms-3" id="servicecomp">
                <div class="animate__animated animate__slideInUp ">
                    <div class="container">
                        <div class="row">

                            <!-- Start Single Service -->
                            <div class="col-md-6 col-lg-4">
                                <div class="single-service" data-aos="slide-right">
                                    <div class="part-1">
                                        <i class="fab fa-500px"></i>
                                        <h3 class="title">Front End Development</h3>
                                    </div>
                                    <div class="part-2">
                                        <small class="description">
                                            I specialize in building responsive and user-friendly designs that captivate
                                            audiences
                                            and
                                            deliver seamless user experiences. my
                                            expertise in front-end development ensures your digital presence stands out and
                                            leaves a
                                            lasting impression on your users.</small>
                                    </div>
                                </div>
                            </div>
                                   <!-- Start Single Service -->
                                   <div class="col-md-6 col-lg-4">
                                <div class="single-service " data-aos="slide-up">
                                    <div class="part-1">
                                        <i class="fab fa-angellist"></i>
                                        <h3 class="title">Back End Development</h3>
                                    </div>
                                    <div class="part-2">
                                        <small class="description">As a backend developer, I specialize in building the
                                            foundation
                                            that
                                            drives web applications, ensuring they run efficiently and securely behind the
                                            scenes.
                                            I design and implement robust APIs, manage databases, and handle server
                                            operations.

                                        </small>
                                    </div>
                                </div>
                            </div>
                         
                         
                         
                               <!-- Start Single Service -->
                               <div class="col-md-6 col-lg-4">
                                <div class="single-service" data-aos="slide-left">
                                    <div class="part-1">
                                        <i class="fas fa-award"></i>
                                        <h3 class="title">Full Stack Development</h3>
                                    </div>
                                    <div class="part-2">
                                        <p class="description"> As a full-stack developer, I possess a versatile skill set
                                            that
                                            covers both
                                            front-end and back-end development. From conceptualization to deployment, I am
                                            proficient in
                                            crafting end-to-end web solutions that cater to diverse user needs.</p>
                                    </div>
                                </div>
                            </div>
          
                               <!-- Start Single Service -->
                               <div class="col-md-6 col-lg-4">
                                <div class="single-service " data-aos="slide-up">
                                    <div class="part-1">
                                        <i class="fab fa-asymmetrik"></i>
                                        <h3 class="title">SEO Optimization</h3>
                                    </div>
                                    <div class="part-2">
                                        <p class="description"> this enhance the online visibility and attract organic
                                            traffic from
                                            search engines. As part of my services,
                                            I specialize in implementing effective SEO strategies to boost your website's
                                            ranking,
                                            increase organic
                                            traffic, and drive targeted leads to your business.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- <div class="col-md-6 col-lg-4">
                                <div class="single-service animate__animated animate__slideInDown animate__delay-1s">
                                    <div class="part-1">
                                        <i class="fab fa-angellist"></i>
                                        <h3 class="title">WordPress Development</h3>
                                    </div>
                                    <div class="part-2">
                                        <small class="description">As a backend developer, I specialize in building the
                                            foundation
                                            that
                                            drives web applications, ensuring they run efficiently and securely behind the
                                            scenes.
                                            I design and implement robust APIs, manage databases, and handle server
                                            operations.

                                        </small>
                                    </div>
                                </div>
                            </div> -->
                     
         
                            <!-- Start Single Service -->
                            <div class="col-md-6 col-lg-4">
                                <div class="single-service " data-aos="slide-right">
                                    <div class="part-1">
                                        <i class="fab fa-canadian-maple-leaf"></i>
                                        <h3 class="title">Freelancing</h3>
                                    </div>
                                    <div class="part-2">
                                        <p class="description">As part of my service offerings, I provide freelancing
                                            services that cater to the unique needs of clients and businesses seeking
                                            specialized expertise and project-based assistance.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- / End Single Service -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import "~/assets/css/_color.sass"     
.services

    .single-service
        margin-top: 40px
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1)
        .part-1
            padding: 40px 40px 25px
            i
                margin-bottom: 25px
                font-size: 50px
                color: $secondary
            .title
                font-size: 17px
                font-weight: 700
                letter-spacing: 0.02em
                line-height: 1.8em
                color: $primary
        .part-2
            padding: 30px 40px 40px
            .description
                margin-bottom: 22px
                font-size: 14px
                line-height: 1.8em
                color: $secondary
@media  screen and (max-width : 992px)

    .section-services 
        .single-service
             .part-1 
                padding: 10px 5px

</style>
