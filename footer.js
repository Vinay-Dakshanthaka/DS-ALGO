// footer.js

document.addEventListener("DOMContentLoaded", function () {
    // Create the footer container
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("container-fluid", "my-5");
  
    // Create the footer element
    const footer = document.createElement("footer");
    footer.classList.add("text-center", "text-white");
    footer.style.backgroundColor = "#3f51b5";
  
    // Create the grid container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("container", "rounded-5");
  
    // Append the Sections (Links, Text, Social)
    gridContainer.innerHTML = `
      <section class="mt-5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Home</a>
            </h6>
          </div>
          <!-- Grid column -->
  
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">About</a>
            </h6>
          </div>
        </div>
        <!-- Grid row-->
      </section>
  
      <hr class="my-5" />
  
      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->
  
      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <!-- ... Repeat for other social icons ... -->
      </section>
      <!-- Section: Social -->
    `;
  
    // Append the grid container to the footer
    footer.appendChild(gridContainer);
  
    // Create the Copyright section
    const copyrightSection = document.createElement("div");
    copyrightSection.classList.add(
      "text-center",
      "p-3",
      "mb-0",
      "mt-4",
      "pt-4"
    );
    copyrightSection.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    copyrightSection.innerHTML = `
      © 2024 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    `;
  
    // Append the copyright section to the footer
    footer.appendChild(copyrightSection);
  
    // Append the footer to the container
    footerContainer.appendChild(footer);
  
    // Get the div with id "footerContainer" and append the footer container
    const mainContainer = document.getElementById("footerContainer");
    mainContainer.appendChild(footerContainer);
  });
  