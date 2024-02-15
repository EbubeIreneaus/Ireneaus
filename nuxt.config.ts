// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      title:'Ireneaus',
      script:[
            {
              src:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
            }, 
             {
              src:'https://unpkg.com/aos@2.3.1/dist/aos.js',
              tagPosition: 'bodyClose'
            },
            {
              src:'/main.js',
              tagPosition:'bodyClose'
            }
        ],
        link:[
          // {
          //   rel:'stylesheet',
          //   href:'https://unpkg.com/aos@next/dist/aos.css'
          // }
        ]
      
    }
  },

  css:[
      'aos/dist/aos.css',
      'bootstrap/dist/css/bootstrap.css',
      '@fortawesome/fontawesome-free/css/all.css',
      'animate.css/animate.min.css',
      '~/assets/css/main.sass',
      '~/assets/main.css',
  ]
})
