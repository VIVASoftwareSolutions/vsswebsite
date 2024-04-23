  var testiomnialData = [
    {
        avatar: "assets/img/team/BrijeshSir.jpg",
        name: "Dr. Brijesh Joshi",
        desg: "Project Manager",
        review: "Beyond their technical prowess, Dr. Brijesh Joshi is a mentor and leader. They inspire their peers with their passion and expertise, contributing to the professional growth of those around them; Their dedication to understanding client needs and delivering solutions that exceed expectations has earned us numerous accolades and long-term partnerships."
    },
    {
        avatar: "assets/img/team/girl.jpg",
        name: "Vidula Patil",
        desg: "Project Manager",
        review: "Vidula Patil is our go-to expert when it comes to all things full-stack development. Their versatility across front-end and back-end technologies is truly impressive. From crafting elegant user interfaces to architecting robust server-side solutions, they are a pillar of strength in our organization"
    },
    {
        avatar: "assets/img/team/BhupeshSir.jpg",
        name: "Bhupesh Patil",
        desg: "Data Entry Head",
        review: "Bhupesh Patil isn't just a data entry expert; they're strategic thinker that help our organisation to grow. "
    },
    {
        avatar: "assets/img/team/shu.jpg",
        name: "Shubham Sinha",
        desg: "Software Developer",
        review: "At VIVA Software Solutions, we are fortunate to have an exceptional team of professionals, One of our team player Shubham Sinha. Whether it's tackling complex coding challenges or architecting innovative solutions, Shubham Sinha consistently delivers with precision and expertise."
    },
    {
        avatar: "assets/img/team/abhinay1.png",
        name: "Abhinay Gurav",
        desg: "Software Developer",
        review: "Abhinay Gurav exemplifies teamwork. Their seamlessly collaborate with our diverse team of Desktop Developers, Web Developers and Frontend Developers. Their positive attitude and willingness to share knowledge foster an environment of innovation and growth. Abhinay consistently deliver high-quality code on time and within scope."
    },
    {
        avatar: "assets/img/team/man_236832.png",
        name: "Harsh Kadam",
        desg: "Software Developer",
        review: "What sets Harsh Kadam apart is their solutions are not just functional; their elegantly designed and meticulously coded. Their attention to detail ensures that our software is not only reliable but also visually stunning."
    }, 
    {
        avatar: "assets/img/team/chaitanya.jpeg",
        name: "Chaitanya Kolwankar",
        desg: "Software Developer",
        review: "Chaitanya Kolwankar is not just a software developer; Their commitment to technical excellence, innovation. He work seamlessly with colleagues, share knowledge generously, and foster a collaborative environment where innovation thrives."
    },
    {
        avatar: "assets/img/team/raju.jpg",
        name: "Raju Patel",
        desg: "Software Developer",
        review: "In the ever-evolving tech landscape, Raju Patel stands out as an agile learner. They're quick to adapt to new technologies and methodologies, Their positive attitude and willingness in environment of innovation and growth."
    },
    {
        avatar: "assets/img/team/sakshi1.jpg",
        name: "Sakshi Jadhav",
        desg: "Software Developer",
        review: " At VIVA Software Solutions, we're immensely proud to have Sakshi Jadhav as part of our team. Their contributions have been pivotal in our ability to deliver outstanding software solutions to our clients."
    },
    {
        avatar: "assets/img/team/samiya.jpg",
        name: "Samiya Shaikh",
        desg: "Software Developer",
        review: "In today's multi-device world, Samiya Shaikh is our responsive web designer. They ensure that our applications adapt seamlessly to various screen sizes and devices, guaranteeing a consistent and delightful user experience."
    },
    {
        avatar: "assets/img/team/vaidehi.jpg",
        name: "Vaidehi Sawant",
        desg: "Software Developer",
        review: "Vaidehi Sawant is an invaluable asset to VIVA Software Solutions. Their contributions have played a pivotal role in our ability to create user-centric software that exceeds client expectations."
    }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide swiper-slide1"> <div class="ImgHolder"><p class="gradient-border mx-auto"><img  src="${i.avatar}" class="img-fluid" id="timg"></p></div><div class="ContentHolder"><h2 align="center" style="margin-bottom:0px">${i.name}</h2><b style="font-size:20px;">${i.desg}</b><p> ${i.review}</p>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 2300 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}



 