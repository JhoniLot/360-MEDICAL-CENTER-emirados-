document.addEventListener('DOMContentLoaded', () => {
    // --- SCROLL ACTION FOR HEADER ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- MOBILE MENU TOGGLE ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            // Animate mobile icon burger lines
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenuBtn.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // --- REVEAL ON SCROLL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.5;
        revealElements.forEach(elem => {
            const elemTop = elem.getBoundingClientRect().top;
            if (elemTop < triggerBottom) {
                elem.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger initial check

    // --- TESTIMONIALS SLIDER ---
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const nextBtn = document.querySelector('.control-btn.next');
    const prevBtn = document.querySelector('.control-btn.prev');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;

        const updateSlider = () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            // Under RTL, transform direction can vary. Keeping standard math handles it elegantly if styled correctly.
            const amountToMove = currentIndex * 100;
            track.style.transform = `translateX(${isRTL ? amountToMove : -amountToMove}%)`;
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }
    }

    // --- BOOKING MODALS & CTAS ---
    const modal = document.getElementById('bookingModal');
    const openModalBtns = document.querySelectorAll('.open-booking');
    const closeModalBtn = document.querySelector('.modal-close');

    if (modal && openModalBtns.length > 0) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
            });
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // --- BILINGUAL TRANSLATION DICTIONARY (EN <-> AR) ---
    const translations = {
        en: {
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-about": "About Us",
            "nav-doctors": "Specialists",
            "nav-contact": "Contact Us",
            "cta-book": "Book Appointment",
            "hero-badge": "★ Sharjah's Leading Healthcare & Aesthetic Center",
            "hero-title": "Elite Healthcare & <span>Advanced Aesthetics</span> at 360",
            "hero-desc": "Experience clinical excellence on Al Muntazah St, Sharqan. Offering premier plastic surgery, dermatology, laser treatments, and specialized medical consultations.",
            "hero-btn-services": "Our Treatments",
            "hero-btn-tour": "Virtual Tour",
            "rating-text": "Rated 4.8/5 by thousands of families and VIP clients across Sharjah",
            "booking-title": "Direct Priority Booking",
            "label-name": "Full Name",
            "label-service": "Specialized Service",
            "label-date": "Preferred Date",
            "label-time": "Preferred Time",
            "option-dermatology": "Cosmetic Dermatology",
            "option-surgery": "Plastic Surgery & Body Contouring",
            "option-dental": "Advanced Laser & Skin Care",
            "option-antiaging": "General Medical Consultations",
            "btn-submit": "Schedule VIP Consultation",
            "services-subtitle": "Pinnacle of Clinical & Aesthetic Care",
            "services-title": "360 Specialized Services",
            "services-desc": "Unrivalled clinical procedures designed to elevate your health and aesthetics, using gold-standard medical technology.",
            "srv1-title": "Cosmetic Dermatology",
            "srv1-desc": "Tailored skin solutions, advanced acne therapies, anti-aging rejuvenation, and premium medical-grade facial hydration.",
            "srv2-title": "Plastic & Cosmetic Surgery",
            "srv2-desc": "Artistry meets clinical safety. Personalized face, breast, and body reshaping by elite board-certified surgeons.",
            "srv3-title": "Advanced Laser Treatments",
            "srv3-desc": "State-of-the-art FDA-approved lasers for hair removal, scar revision, pigmentation correction, and skin tightening.",
            "why-subtitle": "Why Elites Choose 360",
            "why-title": "Pioneering Medical Excellence",
            "why-desc": "We represent the highest standard of healthcare in Sharjah, blending cutting-edge technology with bespoke patient comfort.",
            "f1-num": "01",
            "f1-title": "Board-Certified Specialists",
            "f1-desc": "Our team consists of highly experienced, internationally qualified doctors and surgeons committed to your safety.",
            "f2-num": "02",
            "f2-title": "Cutting-edge Laser Technology",
            "f2-desc": "We utilize the latest, safest medical-grade lasers in the region to guarantee optimal outcomes.",
            "f3-num": "03",
            "f3-title": "Bespoke Patient Hospitality",
            "f3-desc": "From our strategic villa location on Al Muntazah St to private clinics, your confidentiality is paramount.",
            "doc-subtitle": "Elite Medical Team",
            "doc-title": "Meet Our Renowned Medical Specialists",
            "doc1-name": "Dr. Sarah Al-Mansoori",
            "doc1-spec": "Lead Plastic Surgeon",
            "doc1-cred": "MD - Board Certified in Reconstructive Surgery",
            "doc2-name": "Dr. Alexander Sterling",
            "doc2-spec": "Dermatologist & Laser Specialist",
            "doc2-cred": "Member of the American Academy of Dermatology",
            "doc3-name": "Dr. Yasmin Farook",
            "doc3-spec": "General Health Consultations",
            "doc3-cred": "MBBS, MSc - Comprehensive Wellness Architect",
            "test-subtitle": "Client Testimonials",
            "test-title": "Stories of Care & Trust",
            "t1-quote": "\"The absolute best dermatology treatment I've had in Sharjah. The medical team is highly professional and the laser technology is top-notch.\"",
            "t1-author": "Mariam Al-Qasimi",
            "t1-loc": "Sharjah, UAE",
            "t2-quote": "\"Clean, professional, and very welcoming environment. The plastic surgery consultations were incredibly detailed and gave me full confidence.\"",
            "t2-author": "Hamad Al-Mazrouei",
            "t2-loc": "Sharjah, UAE",
            "modal-title": "Request Priority Consultation",
            "modal-desc": "Fill in the details below and our VIP concierge will contact you within 15 minutes to confirm your priority slot."
        },
        ar: {
            "nav-home": "الرئيسية",
            "nav-services": "خدماتنا",
            "nav-about": "من نحن",
            "nav-doctors": "أطباؤنا",
            "nav-contact": "اتصل بنا",
            "cta-book": "احجز موعداً",
            "hero-badge": "★ المركز الطبي والتجميلي الرائد في الشارقة",
            "hero-title": "رعاية صحية نخبوية و<span>تجميل متقدم</span> في ٣٦٠",
            "hero-desc": "اختبر التميز الطبي في شارع المنتزه بالشرقان. نقدم جراحة التجميل الراقية، أمراض الجلد، علاجات الليزر، والاستشارات الطبية المتخصصة.",
            "hero-btn-services": "علاجاتنا المتميزة",
            "hero-btn-tour": "جولة افتراضية",
            "rating-text": "مصنف ٤.٨/٥ بواسطة آلاف العائلات والعملاء المميزين في الشارقة",
            "booking-title": "الحجز المباشر ذو الأولوية",
            "label-name": "الاسم الكامل",
            "label-service": "الخدمة الطبية المتخصصة",
            "label-date": "التاريخ المفضل",
            "label-time": "الوقت المفضل",
            "option-dermatology": "تجميل الجلد وعلاج البشرة",
            "option-surgery": "الجراحة التجميلية ونحت الجسم",
            "option-dental": "الليزر المتقدم والعناية بالبشرة",
            "option-antiaging": "الاستشارات الطبية العامة",
            "btn-submit": "جدولة استشارة كبار الشخصيات",
            "services-subtitle": "قمة الرعاية الطبية والتجميلية",
            "services-title": "خدمات مركز ٣٦٠ المتخصصة",
            "services-desc": "إجراءات طبية لا مثيل لها مصممة للارتقاء بصحتك وجمالك باستخدام تكنولوجيا معتمدة عالمياً.",
            "srv1-title": "تجميل الجلد والعناية بالبشرة",
            "srv1-desc": "حلول مخصصة لمشاكل البشرة، علاجات متقدمة لحب الشباب، مكافحة الشيخوخة، وترطيب طبي متطور.",
            "srv2-title": "الجراحة التجميلية والترميمية",
            "srv2-desc": "حيث يلتقي الفن مع الأمان الطبي. عمليات نحت وتجميل الوجه والجسم على أيدي كبار الجراحين المعتمدين.",
            "srv3-title": "علاجات الليزر المتقدمة",
            "srv3-desc": "أحدث أجهزة الليزر المعتمدة لإزالة الشعر، إزالة الندبات، تصحيح التصبغات، وشد الجلد.",
            "why-subtitle": "لماذا يختار عملاؤنا مركز ٣٦٠",
            "why-title": "ريادة في التميز الطبي",
            "why-desc": "نمثل أعلى معايير الرعاية الصحية في الشارقة، حيث نمزج التكنولوجيا المتطورة مع راحة المريض المطلقة.",
            "f1-num": "٠١",
            "f1-title": "أخصائيون معتمدون",
            "f1-desc": "يتكون فريقنا من أطباء وجراحين ذوي خبرة عالية ومؤهلات دولية ملتزمين تمامًا بسلامتك وصحتك.",
            "f2-num": "٠٢",
            "f2-title": "تكنولوجيا ليزر متطورة",
            "f2-desc": "نستخدم أحدث أجهزة الليزر الطبية لضمان نتائج مثالية وآمنة تماماً في المنطقة.",
            "f3-num": "٠٣",
            "f3-title": "ضيافة فائقة للمريض",
            "f3-desc": "موقعنا الاستراتيجي في فيلا على شارع المنتزه يوفر لك أقصى درجات الخصوصية والراحة الطبية.",
            "doc-subtitle": "النخبة الطبية لدينا",
            "doc-title": "تعرف على أطبائنا وأخصائيينا المعتمدين",
            "doc1-name": "د. سارة المنصوري",
            "doc1-spec": "كبير جراحي التجميل",
            "doc1-cred": "دكتوراه في الطب - معتمدة في الجراحة التجميلية والترميمية",
            "doc2-name": "د. ألكسندر ستيرلينغ",
            "doc2-spec": "أخصائي الجلدية والليزر",
            "doc2-cred": "عضو الأكاديمية الأمريكية لأمراض الجلدية",
            "doc3-name": "د. ياسمين فاروق",
            "doc3-spec": "الاستشارات الطبية العامة",
            "doc3-cred": "بكالوريوس الطب والجراحة، ماجستير الصحة العامة والرفاهية",
            "test-subtitle": "آراء مرضانا وعملائنا",
            "test-title": "قصص الرعاية والجمال والأمان",
            "t1-quote": "\"أفضل علاج جلدي حصلت عليه في الشارقة على الإطلاق. الفريق الطبي محترف جداً وأجهزة الليزر متطورة للغاية.\"",
            "t1-author": "مريم القاسمي",
            "t1-loc": "الشارقة، الإمارات",
            "t2-quote": "\"بيئة نظيفة، مهنية وودودة للغاية. استشارات الجراحة التجميلية كانت مفصلة جداً وأعطتني ثقة تامة بالنتائج.\"",
            "t2-author": "حمد المرزوقي",
            "t2-loc": "الشارقة، الإمارات",
            "modal-title": "طلب استشارة ذات أولوية",
            "modal-desc": "املأ بياناتك أدناه وسيتواصل معك منسقنا الطبي خلال ١٥ دقيقة لتأكيد موعدك المفضل."
        }
    };

    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            
            // Toggle Document attributes for language and text direction
            document.documentElement.setAttribute('lang', newLang);
            if (newLang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                langSwitcher.innerHTML = '🌐 EN';
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                langSwitcher.innerHTML = '🌐 AR';
            }

            // Translate all elements with the 'data-i18n' attribute
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[newLang][key]) {
                    // Handle elements with inner HTML tags inside (like <span> in title)
                    if (translations[newLang][key].includes('<span')) {
                        element.innerHTML = translations[newLang][key];
                    } else {
                        element.textContent = translations[newLang][key];
                    }
                }
            });

            // Translate place holders and dropdown values in forms
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (translations[newLang][key]) {
                    element.setAttribute('placeholder', translations[newLang][key]);
                }
            });

            // Adjust layout alignments and specific properties dynamically if needed
            updateSlider();
        });
    }

    // --- VIP BOOKING SUBMITTED (Visual WOW popups) ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const successMsg = currentLang === 'en' 
                ? "Thank you! Our Luxury Concierge will contact you within 15 minutes to finalize your priority appointment." 
                : "شكرًا لك! سيتصل بك منسق كبار الشخصيات لدينا خلال 15 دقيقة لتأكيد موعدك ذي الأولوية.";
            
            alert(successMsg);
            if (modal) modal.classList.remove('active');
            form.reset();
        });
    });
});
