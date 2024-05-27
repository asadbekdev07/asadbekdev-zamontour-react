import { LocalizationProvider } from './localization';
import Cta from "./Cta"
import Destination from "./Destination"
import Forms from "./Forms"
import Location from "./Location"
import Map from "./Map"
import Offers from "./Offers"
import Reservation from "./Reservation"
import SiteFooter from "./Site-footer"
import SiteHeader from "./Site-header"
import SliderHero from "./Slider-hero"
import Visa from "./Visa"
import Visit from "./Visit"

function App() {

  return (
    <LocalizationProvider>
      <SiteHeader />
      <SliderHero />
      <Offers />
      <Visa />
      <Destination />
      <Visit />
      <Location />
      <Reservation />
      <Map />
      <Forms />
      <Cta />
      <SiteFooter />
    </LocalizationProvider>
  )
}

export default App
