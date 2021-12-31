import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    // disable: window.innerWidth < 640,
    duration: 1000,
    once: true,
  })
}
