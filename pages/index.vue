<template>
  <div>
    <section
      id="home"
      class="w-full h-screen bg-fixed bg-cover bg-right py-16 relative overflow-hidden flex items-center justify-center flex-col before:content-[''] before:absolute before:bg-black/30 before:top-0 before:left-0 before:right-0 before:bottom-0 z-10"
      style="
        background-image: url('https://firebasestorage.googleapis.com/v0/b/oscarrcs-portfolio-temp.appspot.com/o/hero-oscar.jpg?alt=media&token=0c1f017d-dce7-4dc7-a95a-a70a272b9b47');
      "
    >
      <div
        class="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 text-white block lg:hidden"
      >
        <ChevronDownIcon class="animate-bounce" />
      </div>
      <div class="text-white relative min-w-[300px] lg:ml-60 z-20">
        <h1
          data-aos="fade-left"
          class="font-raleway font-bold text-3xl md:text-5xl mb-3"
        >
          Hola, soy Oscar Calle
        </h1>
        <h2
          data-aos="fade-right"
          class="font-medium text-lg md:text-xl mb-3 font-poppins"
        >
          Me puedes decir
          <span
            class="underline underline-offset-[5px] decoration-rose-600 decoration-2"
            >GuasaPlay</span
          >
        </h2>
        <p data-aos="fade-left" class="font-normal text-base md:text-lg ml-px">
          <span>Soy</span>
          <span
            class="underline underline-offset-[5px] decoration-rose-600 decoration-2"
            >Ingeniero de Sistemas</span
          >
        </p>
      </div>
    </section>
    <div class="lg:ml-[300px]">
      <section id="about" class="mt-6 pt-12 px-3">
        <h3 class="font-bold text-2xl text-slate-700">Sobre mi</h3>
        <span class="mt-2 block w-14 h-[3px] bg-rose-500"></span>
        <div class="font-openSans mt-8 text-slate-700">
          <p data-aos="fade-up">
            Mi nombre es Oscar Calle, tengo 23 años y soy de Ecuador. Soy una
            persona apasionada con la programación y el desarrollo Full stack.
          </p>
          <p class="mt-3" data-aos="fade-up">
            Tengo mas de 2 años de experiencia con el framework Vue.js y
            Nuxt.js, así también manejo TailwindCSS como framework de diseño de
            interfaces Web, por otro lado he trabajado con Node.js para
            desarrollar proyectos junto con la base de datos MongoDB.
          </p>
          <p class="mt-3" data-aos="fade-up">
            Si hay algo que me caracteriza es que me involucro al 100% en todo
            lo que hago. Soy trabajador, perfeccionista e inconformista. Tengo
            un estilo de trabajo directo y creativo. Y pongo toda la energía que
            me aporta trabajar de aquello que tanto me entusiasma.
          </p>
        </div>
        <div class="block lg:hidden mt-6 text-center" data-aos="fade-down">
          <SocialMediaLink to="https://www.linkedin.com/in/oscarrcs/">
            <LinkedinIcon />
          </SocialMediaLink>
          <SocialMediaLink to="https://www.linkedin.com/in/oscarrcs/">
            <GitHubIcon />
          </SocialMediaLink>
          <SocialMediaLink to="https://www.linkedin.com/in/oscarrcs/">
            <TwitterIcon />
          </SocialMediaLink>
        </div>
      </section>
      <section
        id="facts"
        data-aos="fade-up"
        class="mt-6 py-12 px-3 bg-slate-200"
      >
        <h3 class="font-bold text-2xl text-slate-700">Logros</h3>
        <span class="mt-2 block w-14 h-[3px] bg-rose-500"></span>
        <div class="font-openSans mt-8">
          <p>
            He desarrollado y
            <a
              class="font-medium underline underline-offset-1 decoration-rose-500 transition-colors hover:text-rose-500"
              href="https://drive.google.com/file/d/1QNstP3xos_5furmaoRHY6c1a1TYhd8TR/view?usp=sharing"
              target="__blank"
              >patentado</a
            >
            el Sistema Informático de Seguimiento a las Medidas Administrativas
            de Protección Inmediata -
            <a
              class="font-medium underline underline-offset-1 decoration-rose-500 transition-colors hover:text-rose-500"
              href="https://www.sismapi.com"
              target="__blank"
              >SISMAPI</a
            >
            el cual ayuda a combatir la Violencia contra la Mujer, Niñez y
            Adolescencia y Adulto Mayor en la zona 6 en Ecuador.
          </p>
        </div>
      </section>
      <section id="skills" class="mt-6 py-12 px-3">
        <h3 class="font-bold text-2xl text-slate-700">
          Habilidades y Herramientas
        </h3>
        <span class="mt-2 block w-14 h-[3px] bg-rose-500"> </span>
        <div class="font-openSans text-slate-700 mt-8">
          <div class="flex flex-row flex-wrap justify-center">
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/html-5.png"
                alt="HTML"
                title="HTML"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/css-3.png"
                alt="CSS"
                title="CSS"
              />
            </div>
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/js.png"
                alt="JavaScript"
                title="JavaScript"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/vuejs.png"
                alt="Vue.js"
                title="Vue.js"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/nuxt.png"
                alt="Nuxt.js"
                title="Nuxt.js"
              />
            </div>
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/nodejs.png"
                alt="Node.js"
                title="Node.js"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/tailwind.png"
                alt="TailwindCSS"
                title="TailwindCSS"
              />
            </div>
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/mongodb.png"
                alt="MongoDB"
                title="MongoDB"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/graphql.png"
                alt="GraphQL"
                title="GraphQL"
              />
            </div>
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/apollo.png"
                alt="Apollo Server"
                title="Apollo Server"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/firebase.png"
                alt="Firebase"
                title="Firebase"
              />
            </div>
            <div data-aos="flip-up" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/flutter.png"
                alt="Flutter"
                title="Flutter"
              />
            </div>
            <div data-aos="flip-down" class="w-12 h-12 m-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/logos/aws.png"
                alt="Amazon Web Services"
                title="Amazon Web Services"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" class="mt-6 pt-12 pb-12 px-3 bg-slate-200">
        <h3 class="font-bold text-2xl text-slate-700">Portfolio</h3>
        <span class="mt-2 block w-14 h-[3px] bg-rose-500"></span>
        <div class="font-openSans text-slate-700 mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            <a
              data-aos="fade-up"
              href="https://www.sismapi.com/"
              target="__blank"
            >
              <div class="w-full h-[250px] shadow-md rounded-xl">
                <img
                  class="object-left-top object-cover w-full h-[250px] rounded-xl transition-all transform hover:scale-105"
                  src="@/assets/img/portfolio/sismapi.png"
                  alt="SISMAPI"
                />
              </div>
              <h3 class="text-center mt-2 font-medium text-lg font-poppins">
                SISMAPI
              </h3>
            </a>
            <a
              data-aos="fade-up"
              href="https://repuestoagil.com/"
              target="__blank"
            >
              <div class="w-full h-[250px] shadow-md rounded-xl">
                <img
                  class="object-cover object-left w-full h-[250px] rounded-xl transition-all transform hover:scale-105"
                  src="@/assets/img/portfolio/repuesto-agil.png"
                  alt="SISMAPI"
                />
              </div>
              <h3 class="text-center mt-2 font-medium text-lg font-poppins">
                Repuesto Agil
              </h3>
            </a>
            <a
              data-aos="fade-up"
              href="https://cuestionario-burnout.web.app/"
              target="__blank"
            >
              <div class="w-full h-[250px] shadow-md rounded-xl">
                <img
                  class="object-cover w-full h-[250px] rounded-xl transition-all transform hover:scale-105"
                  src="@/assets/img/portfolio/cuestionario.png"
                  alt="SISMAPI"
                />
              </div>
              <h3 class="text-center mt-2 font-medium text-lg font-poppins">
                Cuestionario de Burnout
              </h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
