(function ($) {
    "use strict";

    // Custom Cursor Functionality
    function initCustomCursor() {
        // Check if device supports hover (not touch device)
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            // Remove any existing cursor elements
            const existingCursors = document.querySelectorAll('.custom-cursor, .custom-cursor-dot');
            existingCursors.forEach(el => el.remove());
            
            // Create cursor element (only the orange circle)
            const cursor = document.createElement('div');
            
            cursor.className = 'custom-cursor';
            
            // Ensure proper initial positioning
            cursor.style.position = 'fixed';
            cursor.style.pointerEvents = 'none';
            cursor.style.zIndex = '9999';
            cursor.style.mixBlendMode = 'difference';
            
            document.body.appendChild(cursor);
            
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            
            // Mouse move event with proper coordinates
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Smooth cursor animation for main cursor
            function animateCursor() {
                const speed = 0.25; // Increased speed from 0.15 to 0.25 for faster following
                cursorX += (mouseX - cursorX) * speed;
                cursorY += (mouseY - cursorY) * speed;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            }
            
            // Start animation
            animateCursor();
            
            // Hover effects for interactive elements
            const interactiveElements = 'a, button, .btn, [role="button"], input[type="submit"], input[type="button"], .nav-link, .service-card, .menu-download-btn, .team-item, .testimonial-item';
            
            // Add hover class on mouseover
            document.addEventListener('mouseover', (e) => {
                if (e.target.closest(interactiveElements)) {
                    document.body.classList.add('cursor-hover');
                }
            });
            
            // Remove hover class on mouseout
            document.addEventListener('mouseout', (e) => {
                if (e.target.closest(interactiveElements)) {
                    document.body.classList.remove('cursor-hover');
                }
            });
            
            // Click effects
            document.addEventListener('mousedown', () => {
                document.body.classList.add('cursor-click');
            });
            
            document.addEventListener('mouseup', () => {
                document.body.classList.remove('cursor-click');
            });
            
            // Handle cursor visibility when leaving/entering window
            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
            });
            
            document.addEventListener('mouseenter', () => {
                cursor.style.opacity = '1';
            });
            
            // Initialize cursor position
            cursor.style.left = '0px';
            cursor.style.top = '0px';
        }
    }

    // Initialize cursor when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initCustomCursor();
    });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    // Counter Animation
    function animateCounters() {
        $('.counter').each(function() {
            var $this = $(this);
            var target = parseInt($this.data('target'));
            var current = 0;
            var increment = target / 60; // 60 frames for 1 second animation
            var timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current));
            }, 16); // ~60fps
        });
    }

    // Start counter animation when hero section is visible
    $(window).on('load', function() {
        setTimeout(function() {
            animateCounters();
        }, 1000); // Start after 1 second delay
    });
    
    // About Counter Animation - Smooth and medium speed
    function animateAboutCounters() {
        $('.about-counter').each(function() {
            var $this = $(this);
            var target = parseInt($this.data('target'));
            var current = 0;
            var duration = 2000; // 2 seconds for smooth animation
            var increment = target / (duration / 16); // Calculate increment based on 60fps
            
            var timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current));
            }, 16); // ~60fps for smooth animation
        });
    }

    // Start about counter animation when floating badge becomes visible
    $(window).scroll(function() {
        var aboutOffset = $('.floating-badge').offset();
        if (aboutOffset && $(window).scrollTop() + $(window).height() > aboutOffset.top + 200) {
            if (!$('.about-counter').hasClass('animated')) {
                $('.about-counter').addClass('animated');
                animateAboutCounters();
            }
        }
    });
    
    // Also trigger on page load if the section is already visible
    $(window).on('load', function() {
        setTimeout(function() {
            var aboutOffset = $('.floating-badge').offset();
            if (aboutOffset && $(window).scrollTop() + $(window).height() > aboutOffset.top + 200) {
                if (!$('.about-counter').hasClass('animated')) {
                    $('.about-counter').addClass('animated');
                    animateAboutCounters();
                }
            }
        }, 1500); // Delay to ensure page is fully loaded
    });
    
})(jQuery);

// Modern Scroll Animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
// Check if Intersection Observer is supported
if (!('IntersectionObserver' in window)) {
// Fallback for older browsers - show all elements
document.querySelectorAll('.scroll-reveal, .scroll-slide-up, .scroll-fade-scale, .scroll-slide-left, .scroll-slide-right, .scroll-stagger, .scroll-float, .scroll-blur, .scroll-clip').forEach(function(el) {
el.classList.add('reveal-active');
});
return;
}

// Create intersection observer with optimized settings
const observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
// Add reveal class with slight delay for smoother effect
setTimeout(function() {
entry.target.classList.add('reveal-active');
}, 100);

// Stop observing this element once animated
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.15, // Trigger when 15% visible
rootMargin: '0px 0px -50px 0px' // Start animation 50px before element comes into view
});

// Observe all scroll animation elements
const animationSelectors = [
'.scroll-reveal',
'.scroll-slide-up', 
'.scroll-fade-scale',
'.scroll-slide-left',
'.scroll-slide-right',
'.scroll-stagger',
'.scroll-float',
'.scroll-blur',
'.scroll-clip'
];

animationSelectors.forEach(function(selector) {
document.querySelectorAll(selector).forEach(function(element) {
observer.observe(element);
});
});

// Handle staggered animations with enhanced timing
const staggerObserver = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
const staggerItems = entry.target.querySelectorAll('.scroll-stagger-item');

// Animate each item with progressive delay
staggerItems.forEach(function(item, index) {
setTimeout(function() {
item.style.opacity = '1';
item.style.transform = 'translateY(0)';
}, index * 150); // 150ms delay between each item
});

staggerObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -30px 0px'
});

// Observe stagger containers
document.querySelectorAll('.scroll-stagger').forEach(function(element) {
staggerObserver.observe(element);
});

// Add smooth scroll behavior for better UX
if (CSS.supports('scroll-behavior', 'smooth')) {
document.documentElement.style.scrollBehavior = 'smooth';
}
});

