import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'nav': '896px',
        'buttonNav': '372px',
        'bannerWidth': '880px',
        'imgBanner': '300px',
        'heroWidth': '800px',
        'hero3Width': '1280px',
        'articleHero3': '369.33px',
        'paragraphWaitingList': '400px',
        'paragraphWaitingMobile': '305px',
        'inputContainerWaiting': '832px',
        'buttonFormWidth': '396px',
        'buttonMobileMain': '290px',
        'titleWaitingMobile': '353px',
        'popup': '440px',
      },
      padding: {
        'bannerSpecial': '280px',
        'faqsp': '120px',
      },
      backgroundColor: {
        'textHero': "#EDFD36",
        'imgFaqs': '#101828',
        'footerBg': '#EFFD4C',
        'error': '#F23209',
      },
      borderRadius: {
        'textHero': "40px",
        'buttonForm': '14px',
        'state': '40px',
      },
      height: {
        'articleHero3': '180px',
        'paragraphForm': '100px',
      },
      fontSize: {
        'benefitsh2': '20px',
        'waitingListh3': '30px',
        'mobileSize': '36px',
      },
      lineHeight: {
        'benefitsh2': '28px',
        'waitingListh3': '38px',
        'mobileLine': '44px',
        'mobileHigh': '60px',
      },
      colors: {
        'submitForm': 'rgb(152, 162, 179)',
        'pForm': '#475467',
        'greyText': '#475467',
      },
      minHeight: {
        'form': '740px',
      },
      
      screens: {
        'mobile': {'min': '290px','max': '480px'},
        'tablet': {'min': '481px', 'max': '1024px'},
        'pc': {'min': '1025px', 'max': '1440px'},
      }
    },
  },
  plugins: [],
};
export default config;