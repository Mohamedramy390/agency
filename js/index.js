function scroll(){
    if (document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparrent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}
window.onscroll= function(){
    scroll();
}
window.onload = function(){
    let web = new CountUp('web' , 0, 250, 0 ,2.5);
    web.start();
    let mobile = new CountUp('mobile' , 0, 100, 0 ,2.5);
    mobile.start();
    let user = new CountUp('user' , 0, 10000, 0 ,2.5);
    user.start();
    let video = new CountUp('video' , 0, 30, 0 ,2.5);
    video.start();
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  var year = new Date().getFullYear();
  document.getElementById("year").innerHTML = year;
