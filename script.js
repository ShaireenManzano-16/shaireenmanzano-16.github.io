     const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });


        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const form = event.target;
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    $('#successModal').modal('show'); 
                    form.reset(); 
                } else {
                    $('#errorModal').modal('show'); 
                }
            })
            .catch(error => {
                console.error("Error:", error); 
                $('#errorModal').modal('show'); 
            });
        });


        function redirectToIndex() {
    $('#successModal').modal('hide');
    window.location.href = 'index.html';
}


// project tab
document.addEventListener("DOMContentLoaded", function () {
  const triggerTabList = document.querySelectorAll('#projects button[data-bs-toggle="tab"]')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })
})

// progress bar
 document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.getElementById("skills");
    let progressBars = document.querySelectorAll(".progress-bar");
    let animated = false;

    function animateBars() {
      if (!animated && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        progressBars.forEach(bar => {
          let target = bar.getAttribute("data-width");
          bar.style.width = target;
          bar.textContent = target;
        });
        animated = true;
      }
    }

    window.addEventListener("scroll", animateBars);
  });

// preloader
   document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => preloader.style.display = 'none', 500);
    }, 3000); 
  });



//for navbar 
//   document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//       if (navbarCollapse.classList.contains("show")) {
//         new bootstrap.Collapse(navbarCollapse).hide();
//       }
//     });
//   });
// });
  


window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";

    document.querySelectorAll(".animated-text, .animated-button, .animated-img")
      .forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-in");
        }, i * 400);
      });
  }, 3000); 
});


document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.display = "none";
      startTypewriter();
    }, 3000); 
  });

  function startTypewriter() {
    const elements = document.querySelectorAll(".typewriter");
    let delay = 0;

    elements.forEach((el) => {
      const text = el.getAttribute("data-text");
      el.textContent = "";

      setTimeout(() => typeWriter(el, text, 0), delay);
      delay += text.length * 100 + 800; 
    });
  }

  function typeWriter(el, text, i) {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      setTimeout(() => typeWriter(el, text, i + 1), 100); 
    } else {
      el.style.borderRight = "2px solid transparent"; 
    }
  }
});


