/**
 * Velora Theme - Main JavaScript
 * ثيم فيلورا - الجافاسكريبت الرئيسي
 */

document.addEventListener('DOMContentLoaded', function() {
    // تهيئة جميع المكونات
    initializeStickyNavbar();
    initializeMobileMenu();
    initializeSearchOverlay();
    initializeBackToTop();
    initializeScrollAnimations();
    initializeProductCards();
    initializeQuantitySelector();
    initializeTabs();
    initializeWishlist();
    initializeNewsletterForm();
    initializeAccordion();
    initializeLazyLoading();
});

// ========== شريط التنقل اللاصق - Sticky Navbar ==========
function initializeStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========== قائمة الجوال - Mobile Menu ==========
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    if (!hamburger) return;

    // فتح القائمة
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        hamburger.classList.add('active');
    });

    // إغلاق القائمة
    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        hamburger.classList.remove('active');
    }

    mobileMenuClose.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', closeMenu);

    // إغلاق عند الضغط على الروابط
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // إغلاق عند الضغط على Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ========== شريط البحث - Search Overlay ==========
function initializeSearchOverlay() {
    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchOverlayClose = document.querySelector('.search-overlay-close');

    if (!searchBtn) return;

    searchBtn.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        document.body.classList.add('search-open');
        searchInput.focus();
    });

    function closeSearch() {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('search-open');
    }

    searchOverlayClose.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });

    // إغلاق عند الضغط على Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearch();
        }
    });
}

// ========== زر العودة للأعلى - Back to Top ==========
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== رسوم الحركة عند التمرير - Scroll Animations ==========
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ========== كروت المنتجات - Product Cards ==========
function initializeProductCards() {
    // معرض الصور
    document.querySelectorAll('.product-gallery-item').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const mainImage = document.querySelector('.product-main-image');
            if (mainImage) {
                mainImage.src = this.src;
            }
            document.querySelectorAll('.product-gallery-item').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // إضافة للسلة
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            const quantity = parseInt(document.querySelector('.quantity-input')?.value || 1);
            
            if (window.salla && window.salla.cart) {
                window.salla.cart.addItem(productId, quantity);
                showNotification('تمت إضافة المنتج للسلة', 'success');
            }
        });
    });
}

// ========== محدد الكمية - Quantity Selector ==========
function initializeQuantitySelector() {
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const minusBtn = selector.querySelector('.qty-minus');
        const plusBtn = selector.querySelector('.qty-plus');
        const input = selector.querySelector('.quantity-input');

        if (!minusBtn || !plusBtn || !input) return;

        minusBtn.addEventListener('click', function() {
            let value = parseInt(input.value) || 1;
            if (value > 1) {
                input.value = value - 1;
            }
        });

        plusBtn.addEventListener('click', function() {
            let value = parseInt(input.value) || 1;
            if (value < 99) {
                input.value = value + 1;
            }
        });

        input.addEventListener('change', function() {
            let value = parseInt(this.value) || 1;
            if (value < 1) this.value = 1;
            if (value > 99) this.value = 99;
        });
    });
}

// ========== التبويبات - Product Tabs ==========
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabGroup = this.closest('.tabs-container');
            if (!tabGroup) return;

            // إزالة التفعيل من جميع الأزرار والمحتوى
            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // تفعيل الزر والمحتوى الحالي
            this.classList.add('active');
            const tabId = this.dataset.tabId;
            const content = tabGroup.querySelector(`[data-tab="${tabId}"]`);
            if (content) {
                content.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
}

// ========== قائمة الرغبات - Wishlist ==========
function initializeWishlist() {
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            
            this.classList.toggle('active');
            
            if (window.salla && window.salla.wishlist) {
                window.salla.wishlist.toggle(productId);
            }
        });
    });
}

// ========== نموذج النشرة البريدية - Newsletter Form ==========
function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('.newsletter-input').value;
        
        // التحقق من البريد الإلكتروني
        if (!isValidEmail(email)) {
            showNotification('الرجاء إدخال بريد إلكتروني صحيح', 'error');
            return;
        }

        // إرسال البيانات
        fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            showNotification('تم الاشتراك بنجاح', 'success');
            this.querySelector('.newsletter-input').value = '';
        })
        .catch(error => {
            showNotification('حدث خطأ، حاول مرة أخرى', 'error');
        });
    });
}

// ========== الأكورديون - Accordion ==========
function initializeAccordion() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        if (!header || !content) return;

        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // إغلاق جميع العناصر الأخرى
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    if (otherContent) {
                        otherContent.style.display = 'none';
                    }
                }
            });

            // فتح/إغلاق العنصر الحالي
            if (isActive) {
                item.classList.remove('active');
                content.style.display = 'none';
            } else {
                item.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
}

// ========== التحميل البطيء - Lazy Loading ==========
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ========== وظائف مساعدة - Helper Functions ==========

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// إظهار الإشعارات
function showNotification(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeInUp 0.3s ease-out';
    }, 10);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOutDown 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// تحديث السلة الصغيرة
function updateMiniCart() {
    if (window.salla && window.salla.cart) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            window.salla.cart.getCart().then(cart => {
                cartCount.textContent = cart.items.length;
            });
        }
    }
}

// الحصول على معاملات URL
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// مشاركة المنتج
function shareProduct(url, title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        });
    } else {
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(url);
        showNotification('تم نسخ الرابط', 'success');
    }
}

// تطبيق فلاتر الأسعار
function applyPriceFilter() {
    const minPrice = document.querySelector('.price-min')?.value || 0;
    const maxPrice = document.querySelector('.price-max')?.value || 10000;
    
    window.location.href = `?min_price=${minPrice}&max_price=${maxPrice}`;
}

// تبديل عرض القائمة/الشبكة
function toggleProductsView(viewType) {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    if (viewType === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
}

// Smooth scroll لروابط الربط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

