<template>
  <header
    class="px-4 w-[300px] h-screen bg-gray-900 fixed top-0 left-0 z-30 hidden lg:block"
  >
    <div class="flex flex-col">
      <div>
        <img
          src="@/assets/img/profile/profile-oscar-calle.jpg"
          alt="Oscar Calle"
          class="mx-auto my-4 block w-[120px] border-8 border-gray-800 rounded-full"
        />
        <h1 class="text-2xl font-poppins font-semibold text-center text-white">
          <NuxtLink to="/#home">Oscar Calle</NuxtLink>
        </h1>
        <div class="mt-4 text-center">
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
        <nav class="mt-8 relative flex flex-wrap items-center">
          <ul class="flex-1">
            <NavLink to="#home" name="home">
              <span class="w-6 h-6 mr-2"><HomeIcon /></span>
              <span class="">Inicio</span>
            </NavLink>
            <NavLink to="#about" name="about">
              <span class="w-6 h-6 mr-2"><UserIcon /></span>
              <span class="">Sobre mí</span>
            </NavLink>
            <NavLink to="#portfolio" name="portfolio">
              <span class="w-6 h-6 mr-2"><TableIcon /></span>
              <span class="">Portfolio</span>
            </NavLink>
            <!-- <NavLink to="#contact" name="contact">
              <span class="w-6 h-6 mr-2"><MailIcon /></span>
              <span class="">Contacto</span>
            </NavLink> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
