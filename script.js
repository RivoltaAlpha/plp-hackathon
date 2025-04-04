document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form Submission
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
        this.reset();
    });

    emailjs.init("otPYqnlaikdWHDuX_"); // your public key

  const form = document.getElementById("emailForm");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_fqokqqs", "template_cbmiske", form)
      .then(() => {
        messageBox.textContent = "Message sent successfully!";
        messageBox.style.color = "#22c55e"; // green
        form.reset();
      })
      .catch(() => {
        messageBox.textContent = "Failed to send message. Please try again later.";
        messageBox.style.color = "#f87171"; // red
      });
  });
});

const projectsList = document.getElementById("projects-list"); // Ensure this matches the new ID

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const projects = data.projects;
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      projectCard.innerHTML = `
        <img src="${project.imageSrc}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <a href="${project.liveLink}" target="_blank">Live Link</a>
        <a href="${project.githubLink}" target="_blank">GitHub</a>
      `;

      projectsList.appendChild(projectCard);
    });
  })
  .catch(error => console.error("Error fetching projects:", error));
  