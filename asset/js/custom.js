$(function(){
    
    // 메뉴
    $('.header .btn-gnb-mb').click(function(e){
        e.preventDefault();
        if ($('.header .gnb-area-mb').hasClass('active')) {
            $('.header .gnb-area-mb').removeClass('active')
        } else {
            $('.header .gnb-area-mb').addClass('active')
        }
        
        $('body').toggleClass('hidden');
    })

    $('.gnb-area-mb nav a').click(function(e){
        e.preventDefault();
        if($('.gnb-area-mb').hasClass('active')){
            $('.gnb-area-mb').removeClass('active');
            $('body').removeClass('hidden');
        }
    })

    $('.scrollY').each(function (index, element) {

        //   hearthealth =gsap.timeline({
    
        // })
        // fromVal = $(this).data('from')
        // toVal = $(this).data('to')
        // console.log(fromVal + '///' + toVal );
    
    
    
        gsap.fromTo(element, {
          y: 200,
          opacity:0,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "0% 70%", //트리거기준 0%위치, 윈도우기준0%
            end: "70% 70%",
            // markers:true,
            scrub: 1,
          },
          y: 0,
          opacity:1,
        })
      })



    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1025px)": function() {
           
        
             
            gsap.to('.sc-about .desc-area',{
                scrollTrigger:{
                    trigger:'.sc-about',
                    start:"30% 50%",//트리거기준 0%위치, 윈도우기준0%
                    end:"40% 50%",
                    scrub:1,
                    markers:true,
                },
                y:-50,
                opacity:1,
            })
            
        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function() {
        
        },
        // small
        "(max-width: 767px)": function() {
              
        },
        // all
        "all": function() {

            

            
        }
      });
})