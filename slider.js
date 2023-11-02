// $(document).ready(function(){
//     $('.slider').slick({
//       dots: false,
//       infinite: true,
//       slidesToShow: 5,
//       autoplay: true,
//       autoplaySpeed: 1500
//     });
//   });





  $(document).ready(function(){
    $('.slider-2').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1500
    });
  });





  $(document).ready(function(){
    $('.slider').slick({
      dots: false,  // Show dot indicators
      infinite: true, // Loop through slides
      speed: 300,
      slidesToShow: 5,  // Show 4 slides at a time by default
      slidesToScroll: 5,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,  // At 1024px and below
          settings: {
            slidesToShow: 3,  // Show 3 slides at a time
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,  // At 768px and below
          settings: {
            slidesToShow: 2,  // Show 2 slides at a time
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,  // At 480px and below
          settings: {
            slidesToShow: 2,  // Show 1 slide at a time
            slidesToScroll: 2
          }
        }
      ]
    });
  });
  