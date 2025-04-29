import type { Config } from "tailwindcss";

import fff from "./public/images/AdvertisingImages/MobileAdvertsingBack.png"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
     
        'home': "url('../public/images/NavBarImages/S-Home.svg')",
        'phoneHome': "url('../public/images/HomeImages/PhoneHomeBack.svg')",
        'aboutBack': "url('../public/images/AboutPageImages/AboutUsBackground.png')",
        'whoWeAre': "url('../public/images/AboutPageImages/WhoWeARe.png')",
        'button': "url('../public/images/JourneySection/Button.png')",
        'employee':  "url('../public/images/HomeImages/Employee.svg')",
        'partners': "url('../public/images/PartnersImages/PartnersBack.png')",
        'map': "url('../public/images/HomeImages/Map.png')",
        'service1Back': "url('../public/images/ServicesImages/Service1Back.png')",
        'paymentBack': "url('../public/images/PaymentImages/PaymentBack.png')",
        'advertisingBack': "url('../public/images/AdvertisingImages/MobileAdvertsingBack.png')",
      },
      colors: {
        blue: '#283891',
        lightBlue: '#C3DCFC',
        lighterBlue: '#4797FF',
        orange: '#F04A01',
        gray: '#F0F0F2',
        lightGray: '#F8F8FB',
        redShade: '#F7DCD3',
      }
    },
  },
  plugins: [],
};
export default config;
