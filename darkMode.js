const allSections = document.querySelectorAll('section');
const allh1 = document.querySelectorAll('section h1');

const alla =document.querySelectorAll('section li a');

const featuresCards =document.querySelectorAll('[data-features-cards] >div ');

const reviewCards = document.querySelectorAll('[data-review-section] > div');

const faqCards = document.querySelectorAll('[data-faq-card] > div');

const pricingCards = document.querySelectorAll('[data-pricing_cards]');

const subscribeSection = document.querySelector('[data-subscribe-section]');

const footerP = document.querySelector('[data-footer] p');

const form = document.querySelector('form');

const formLabels = document.querySelectorAll('form label');

const mainH1 = document.querySelector('[data-main-heading]');
const mainH2 = document.querySelector('main h2');

const brandName = document.querySelector('[data-brand-name]');

const NavLinks = document.querySelector('main ul');

const HamburgerButton = document.querySelector('[data-menu]');

console.log(NavLinks);


// console.log(form.childNodes);

function darkMode(e){

    // e.classList.toggle('text-black');
    // e.classList.toggle('text-yellow-400');

    e.classList.toggle('md:text-white');
    e.classList.toggle('text-yellow-400');
    
    // Nav Links

    brandName.classList.toggle('text-white');
    brandName.classList.toggle('text-gray-400');

    
    
    // Nav Links color Above md:
    NavLinks.classList.toggle('md:text-white');
    NavLinks.classList.toggle('md:text-gray-950');
    // Nav Links color below md:
    NavLinks.classList.toggle('text-black');
    NavLinks.classList.toggle('text-gray-400');
    // Nav Bg-Color
    NavLinks.classList.toggle('bg-gray-200');
    NavLinks.classList.toggle('bg-gray-900');
    
    // Hamburger-Button

    HamburgerButton.classList.toggle('text-black');
    HamburgerButton.classList.toggle('text-white');

    // Main Heading

    mainH1.classList.toggle('text-white');
    mainH1.classList.toggle('text-gray-950');

    mainH2.classList.toggle('text-white');
    mainH2.classList.toggle('text-gray-950');

    // Form
    form.classList.toggle('bg-gray-100');
    form.classList.toggle('bg-gray-900');

    // Form Heading (Book Appointment)

    form.childNodes.item(1).classList.toggle('text-gray-900');
    form.childNodes.item(1).classList.toggle('text-gray-200');

    // Form Labels
    for(let i=0;i<formLabels.length;i++){

        formLabels[i].classList.toggle('text-gray-900');
        formLabels[i].classList.toggle('text-gray-400');
    
    }
 
    //All Sections 
    for(let i=0;i<allSections.length;i++){
        allSections[i].classList.toggle('bg-white');
        allSections[i].classList.toggle('bg-black');
    }
    // All H1s

    for(let i=0;i<allh1.length;i++){

        allh1[i].classList.toggle('text-gray-900');
        allh1[i].classList.toggle('text-gray-200');
    }
  
    // All Anchor Links Inside Footer
    for(let i=0;i<alla.length;i++){

        alla[i].classList.toggle('text-gray-200');
    
    }
    // All Cards Inside FeatureSecton
    for(let i=0;i<featuresCards.length;i++){

        featuresCards[i].classList.toggle('bg-white');
        featuresCards[i].classList.toggle('text-gray-500');
        featuresCards[i].classList.toggle('text-gray-200');
        featuresCards[i].classList.toggle('bg-gray-800');

        featuresCards[i].classList.toggle('hover:text-gray-700');
    }

    // All Review Cards

    for(let i=0;i<reviewCards.length;i++){
        reviewCards[i].classList.toggle('bg-white');
        reviewCards[i].classList.toggle('bg-gray-900');

        reviewCards[i].classList.toggle('text-gray-500');
        reviewCards[i].classList.toggle('text-gray-200');

        reviewCards[i].classList.toggle('hover:text-gray-700');

        console.log("Cards");
    }

    // FAQ Cards
    for(let i =0;i<faqCards.length;i++){

        faqCards[i].classList.toggle('bg-gray-900');
        
        faqCards[i].childNodes.item(1).childNodes.item(3).classList.toggle('text-gray-200');
        faqCards[i].childNodes.item(3).classList.toggle('[text-gray-400]');

        

    }

    //Pricing Cards 
    
    for(let i=0;i<pricingCards.length;i++){

        pricingCards[i].classList.toggle('bg-white');
        pricingCards[i].classList.toggle('bg-gray-900');

        pricingCards[i].childNodes.item(3).childNodes.item(1).classList.toggle('text-gray-900');

        pricingCards[i].childNodes.item(3).childNodes.item(1).classList.toggle('text-gray-200');
    
        pricingCards[i].classList.toggle('text-gray-900');
        pricingCards[i].classList.toggle('text-gray-400');
    }
    // Subscribe-Section
    subscribeSection.classList.toggle('bg-black');
    subscribeSection.classList.toggle('bg-white');

    subscribeSection.childNodes.item(3).childNodes.item(1).classList.toggle('text-gray-200');
    subscribeSection.childNodes.item(3).childNodes.item(1).classList.toggle('text-gray-900');

    // footer Paragaraph

    footerP.classList.toggle('text-gray-900');
    footerP.classList.toggle('text-gray-200');


}
