// Carousel Js for the moments cards
(() => {
    const track = document.getElementById("track");
    const wrap = track.parentElement;
    const cards = Array.from(track.children);
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const dotsBox = document.getElementById("dots");

    const isMobile = () => matchMedia("(max-width:767px)").matches;

    cards.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => activate(i, true);
        dotsBox.appendChild(dot);
    });
    const dots = Array.from(dotsBox.children);

    let current = 0;

    function center(i) {
        const card = cards[i];
        const axis = isMobile() ? "top" : "left";
        const size = isMobile() ? "clientHeight" : "clientWidth";
        const start = isMobile() ? card.offsetTop : card.offsetLeft;
        wrap.scrollTo({
            [axis]: start - (wrap[size] / 2 - card[size] / 2),
            behavior: "smooth"
        });
    }

    function toggleUI(i) {
        cards.forEach((c, k) => c.toggleAttribute("active", k === i));
        dots.forEach((d, k) => d.classList.toggle("active", k === i));
        prev.disabled = i === 0;
        next.disabled = i === cards.length - 1;
    }

    function activate(i, scroll) {
        if (i === current) return;
        current = i;
        toggleUI(i);
        if (scroll) center(i);
    }

    function go(step) {
        activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
    }

    prev.onclick = () => go(-1);
    next.onclick = () => go(1);

    addEventListener(
        "keydown",
        (e) => {
            if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
            if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
        },
        { passive: true }
    );

    cards.forEach((card, i) => {
        card.addEventListener(
            "mouseenter",
            () => matchMedia("(hover:hover)").matches && activate(i, true)
        );
        card.addEventListener("click", () => activate(i, true));
    });

    let sx = 0,
        sy = 0;
    track.addEventListener(
        "touchstart",
        (e) => {
            sx = e.touches[0].clientX;
            sy = e.touches[0].clientY;
        },
        { passive: true }
    );

    track.addEventListener(
        "touchend",
        (e) => {
            const dx = e.changedTouches[0].clientX - sx;
            const dy = e.changedTouches[0].clientY - sy;
            if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
                go((isMobile() ? dy : dx) > 0 ? -1 : 1);
        },
        { passive: true }
    );
    if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

    addEventListener("resize", () => center(current));

    toggleUI(0);
    center(0);
})();







//Image Js for displaying in the modal

const projectGalleries = {
        'assets/img/Events/VidyaSphereDemons/': [
    '2 WhatsApp Image 2025-10-07 at 10.34.18 AM.jpeg',
    'WhatsApp Image 2025-10-07 at 10.34.17 AM.jpeg',
    '1 WhatsApp Image 2025-10-01 at 3.10.26 PM.jpeg',
    'WhatsApp Image 2025-10-01 at 3.10.22 PM (1).jpeg',
    'WhatsApp Image 2025-10-01 at 3.10.22 PM (2).jpeg',
    'WhatsApp Image 2025-10-01 at 3.10.22 PM.jpeg',
    /*'WhatsApp Image 2025-10-07 at 10.34.15 AM.jpeg',*/
    'WhatsApp Image 2025-10-01 at 3.10.24 PM.jpeg',
    'WhatsApp Image 2025-10-01 at 3.10.23 PM.jpeg',
    ],
    'assets/img/Events/ArtsOfReading/': [
    'WhatsApp Image 2025-10-06 at 1.29.12 PM (1).jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.10 PM (1).jpeg',
    /*'WhatsApp Image 2025-10-06 at 1.29.11 PM (1).jpeg',*/
    'WhatsApp Image 2025-10-06 at 1.29.11 PM.jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.12 PM.jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.13 PM (1).jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.13 PM.jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.14 PM (1).jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.14 PM.jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.15 PM.jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.10 PM (2).jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.11 PM (2).jpeg',
    'WhatsApp Image 2025-10-06 at 1.29.12 PM (2).jpeg',
    ],
    'assets/img/Events/AppToProcess(IPG)/': [
    'WhatsApp Image 2025-10-14 at 2.57.07 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.56.59 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.00 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.00 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.01 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.03 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.03 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.04 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.05 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.05 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.07 PM (1) (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.07 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.07 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.08 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.08 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.09 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.10 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.13 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.13 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.14 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.15 PM.jpeg',
    /*'WhatsApp Image 2025-10-14 at 2.57.17 PM (1).jpeg',*/
    'WhatsApp Image 2025-10-14 at 2.57.17 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.18 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.18 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.19 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.20 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.21 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.21 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.22 PM (1).jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.22 PM.jpeg',
    'WhatsApp Image 2025-10-14 at 2.57.23 PM.jpeg',
    ]
        };

        document.addEventListener('DOMContentLoaded', () => {
            const mainGalleryModal = document.getElementById('imageGalleryModal');
    const carouselInner = document.getElementById('carouselInner');
    const carouselElement = document.getElementById('projectCarousel');
    const magnifyModal = new bootstrap.Modal(document.getElementById('magnifyModal'));
    const magnifiedImageElement = document.getElementById('magnifiedImage');

    let carouselInstance = null;

    mainGalleryModal.addEventListener('show.bs.modal', function (event) {
        carouselInner.innerHTML = '';

    const button = event.relatedTarget;
    const folderPath = button.getAttribute('data-folder');
    const imageFilenames = projectGalleries[folderPath];

                if (imageFilenames && imageFilenames.length > 0) {
        imageFilenames.forEach((filename, index) => {
            const fullSrc = folderPath + filename;

            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.className = 'd-block w-100 gallery-image-clickable';
            img.src = fullSrc;
            img.alt = `Project Image ${index + 1}`;
            img.setAttribute('data-magnify-src', fullSrc);

            img.style.height = '850px';

            img.style.objectFit = 'contain';


            img.style.backgroundColor = '#f8f9fa';

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });

    if (carouselInstance) {
        carouselInstance.dispose();
                    }
    carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: false 
                    });

                } else {
        carouselInner.innerHTML = `
                <div class="carousel-item active">
                    <div class="text-center p-5">
                        <p class="text-muted">No images found for this project in the data structure.</p>
                    </div>
                </div>`;
                }
            });

    mainGalleryModal.addEventListener('hidden.bs.modal', function () {
        carouselInner.innerHTML = '';
    if (carouselInstance) {
        carouselInstance.dispose();
    carouselInstance = null;
                }
            });

            //carouselInner.addEventListener('click', (event) => {
        //    if (event.target.classList.contains('gallery-image-clickable')) {
        //        const imageSrc = event.target.getAttribute('data-magnify-src');

        //        magnifiedImageElement.src = imageSrc;

        //        bootstrap.Modal.getInstance(mainGalleryModal).hide();

        //        magnifyModal.show();
        //    }
        //});

        magnifyModal._element.addEventListener('hidden.bs.modal', function () {
            if (document.body.classList.contains('modal-open')) {
                bootstrap.Modal.getInstance(mainGalleryModal).show();
            }
        });
        });