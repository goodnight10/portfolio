$(function(){
    
   

    



    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1025px)": function() {
           
        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function() {
        
        },
        // small
        "(max-width: 767px)": function() {
              
        },
        // all
        "all": function() {
          

          $('.scrollY').each(function (index, element) {
            gsap.fromTo(element, {
              y: 200,
              opacity:0,
            }, {
              scrollTrigger: {
                trigger: element,
                start: "0% 70%", //트리거기준 0%위치, 윈도우기준0%
                end: "70% 70%",
                scrub: 1,
              },
              y: 0,
              opacity:1,
            })
          })

            
        }
      });
})