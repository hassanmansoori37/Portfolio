function scrollToProjects(){

  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });

}

function toggleMenu(){

    document.getElementById('navLinks').classList.toggle('show');

}

var typed = new Typed('#element', {

   strings: [

      'Frontend Developer',

      'Frontend Developer | React Learner',

      'Frontend Developer | React Learner | Learning MERN Stack',

      'Frontend Developer | React Learner | Learning MERN Stack | Passionate About Web Development'

   ],

   typeSpeed: 40,

   backSpeed: 10,

   backDelay: 1000,

   loop: true

});



