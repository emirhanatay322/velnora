// Menü linklerine yumuşak kaydırma
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Sayfa yüklendiğinde animasyon
window.addEventListener('load', () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s";

        document.body.style.opacity = "1";

    },100);

});

// Buton animasyonu
const button = document.querySelector('.hero a');

if(button){

    button.addEventListener('mouseenter',()=>{

        button.style.transform="scale(1.08)";

    });

    button.addEventListener('mouseleave',()=>{

        button.style.transform="scale(1)";

    });

}
