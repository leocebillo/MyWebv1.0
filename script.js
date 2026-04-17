const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// Fetch projects data and create cards
fetch("content/projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");

    data.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${project.image}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <small>${project.category}</small><br><br>
        <a href="${project.link}" target="_blank">Open</a>
      `;

      container.appendChild(card);
    });
  });