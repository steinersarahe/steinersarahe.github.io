$(document).ready(function() {
    console.log("Document is ready");

    // Function to navigate to a page
    function navigateTo(page) {
        console.log("Navigating to:", page);
        $('.site-tab').hide();
        $('#' + page).show();
        window.location.hash = page;
    }

    // Handle navigation link clicks
    $('#projects-link').click(function(event) {
        event.preventDefault();
        navigateTo('projects');
    });

    $('#home-link').click(function(event) {
        event.preventDefault();
        navigateTo('home');
    });

    // Handle project card clicks
    $(document).on('click', '.project-item', function(event) {
        event.preventDefault();
        const projectId = $(this).data('project-id');
        navigateTo('project-' + projectId);
    });

    // Handle back link clicks
    $(document).on('click', '#back-link', function(event) {
        event.preventDefault();
        navigateTo('projects');
    });

    // Handle browser back/forward and page refresh
    window.addEventListener('hashchange', function() {
        const currentPage = window.location.hash.substring(1) || 'home';
        console.log("Hash changed to:", currentPage);
        navigateTo(currentPage);
    });

    // Initialize on page load - check for hash in URL
    const initialPage = window.location.hash.substring(1) || 'home';
    console.log("Initial page:", initialPage);
    navigateTo(initialPage);

    // Custom Carousel Logic
    let carouselState = {};

    // Initialize carousels
    $('.custom-carousel').each(function() {
        const carouselName = $(this).data('carousel');
        const thumbnails = $(this).find('.carousel-thumbnail');
        carouselState[carouselName] = {
            current: 0,
            total: thumbnails.length,
            carousel: this
        };
        updateCarousel(carouselName);
    });

    function updateCarousel(carouselName) {
        const carousel = carouselState[carouselName];
        const $carousel = $(carousel.carousel);
        const $thumbnails = $carousel.find('.carousel-thumbnail');
        const $featured = $carousel.find('.carousel-featured-image');
        
        // Update featured image
        const currentThumb = $thumbnails.eq(carousel.current);
        $featured.attr('src', currentThumb.attr('src'));
        $featured.attr('alt', currentThumb.attr('alt'));
        
        // Update thumbnail styling
        $thumbnails.removeClass('active');
        currentThumb.addClass('active');
    }

    // Handle carousel navigation
    $(document).on('click', '.carousel-nav', function(e) {
        e.preventDefault();
        const direction = $(this).data('direction');
        const $carousel = $(this).closest('.custom-carousel');
        const carouselName = $carousel.data('carousel');
        const state = carouselState[carouselName];
        
        if (direction === 'next') {
            state.current = (state.current + 1) % state.total;
        } else {
            state.current = (state.current - 1 + state.total) % state.total;
        }
        
        updateCarousel(carouselName);
    });

    // Handle thumbnail clicks
    $(document).on('click', '.carousel-thumbnail', function() {
        const $carousel = $(this).closest('.custom-carousel');
        const carouselName = $carousel.data('carousel');
        const index = $(this).data('index');
        
        carouselState[carouselName].current = index;
        updateCarousel(carouselName);
    });

});