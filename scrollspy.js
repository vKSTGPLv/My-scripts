$(function(){
    function scrollspy() {
        var sections, n_sections, el, attr, offset, bottom, scroll, href, nav_element;

        sections = $('.scrollspy'); n_sections = sections.length;
        for(var i=0; i<n_sections; i++) {
            el = sections[i]; attr = $(el).attr('id');

            offset = $(el).offset().top - 400;
            bottom = $(el).offset().top + $(el).innerHeight() -400;
            scroll = $(document).scrollTop();
            
            href = 'li > a[href="#' + attr + '"]';
            nav_element = $(href).parent();

            if(scroll >= offset && scroll < bottom) {
                nav_element.addClass('nav-active');
            } else {
                nav_element.removeClass('nav-active');
            }
        }
        
    }

    scrollspy();

    $(document).on('scroll', function (){
        scrollspy();
    })
    $(window).on('resize', function(){
        scrollspy();
    })
})