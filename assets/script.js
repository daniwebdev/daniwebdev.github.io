document.querySelector("#y").innerHTML = '&copy;' + new Date().getFullYear();

$(function () {
  site_info();

  $.getJSON("/experiance.json", (experiance) => {
    experiance.forEach((item, index) => {
      let links = "";

      if (item.links != undefined)
        item.links.forEach((link) => {
          links += link;
        });

      let renderLinks = (links) => {
        if (links != "") {
          return `
          <h6>Links</h6>
          ${links}
          `;
        }

        return ''
      };

      $("#work-experiance .container #we-content").append(`
      <div class="project-item d-flex align-items-start col-md-6">
        <div class="number d-flex align-items-center text-center">
          <span class="w-100">${(index + 1).toString().padStart(2, "0")}</span>
        </div>
        <div class="project-description">
          <h3>${item.company}</h3>
          <h6>${item.periode}</h6>
          <p>${item.description}</p>
          <div>
            <h6>Tech Stack</h6>
            <b>${item.stacks}</b>
          </div>
          <div>
          ${renderLinks(links)}
          </div>
        </div>
      </div>
    `);
    });
  });


  $.getJSON("/portfolio.json", (experiance) => {
    experiance.forEach((item, index) => {
      let links = "";

      if (item.links != undefined)
        item.links.forEach((link) => {
          links += link;
        });

      let renderLinks = (links) => {
        if (links != "") {
          return `
          <h6>Links</h6>
          ${links}
          `;
        }

        return ''
      };

      $("#portfolio .container #we-content").append(`
      <div class="project-item d-flex align-items-start col-md-6">
        <div class="number d-flex align-items-center text-center">
          <span class="w-100">${(index + 1).toString().padStart(2, "0")}</span>
        </div>
        <div class="project-description">
          <h3>${item.company}</h3>
          <h6>${item.periode}</h6>
          <p>${item.description}</p>
          <div>
          ${renderLinks(links)}
          </div>
        </div>
      </div>
    `);
    });
  });

  $.getJSON('/skills.json', (skills) => {

    for(let skill of skills) {

      let html = `
      <div class="skill-wrap col-md-2 col-4">
          <div class="skill-item">
              <img width="65px" src="${skill.logo}" alt="${skill.name}">
              <span class="d-block mt-2">${skill.name}</span>
          </div>
      </div>
      `;
      $('.skill-container .row').append(html)
    }
  })


});

const own_project = [
  {
    title: "Berita Saham Indonesia",
    description:
      "News gateway, information about investation, stock market, gold and trading tools.",
    website: "https://beritasaham.id",
    tech_stack: ["PHP", "Python", "JS", "Postgresql", "Laravel"],
  },
  {
    title: "JSON.WEB.ID",
    description:
      "JSON.WEB.ID is a website that provides REST API for simulate Create, Read, Update, and Delete. It is a free service for everyone.",
    website: "https://json.web.id",
    tech_stack: ["PHP"],
  },
];

own_project.forEach((item, index) => {
  var tech_stack = "";

  item.tech_stack.forEach((tech) => {
    tech_stack += `<span class="badge bg-primary" style="margin-right: 5px">${tech}</span>`;
  });

  $("#own-project .container").append(`
    <div class="project-item d-flex align-items-start">
      <div class="number d-flex align-items-center text-center">
        <span class="w-100">${(index + 1).toString().padStart(2, "0")}</span>
      </div>
      <div class="project-description">
        <h3>${item.title}</h3>
        <h6><a target="_blank" href="${item.website}">${item.website}</a></h6>
        <p>${item.description}</p>
        <div class="d-block">
          <h6>Tech Stack</h6>
          ${tech_stack}
        </div>
      </div>
    </div>
  `);

  fetch("https://insideofcode.com/blog/wp-json/wp/v2/posts?per_page=5")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((post, index) => {
        $("#recent-posts .container .row").append(`
        <div class="project-item d-flex align-items-start mb-2 col-md-6">
          <div class="project-description">
            <h3>
              <a href="${post.link}" target="_blank">${post.title.rendered}</a>
            </h3>
            <p>Last modified at <date>${post.modified}</date></p>
            <p>${post.yoast_head_json.description}</p>
          </div>
        </div>
      `);
      });
    });
});

function site_info() {
  // $.get("https://insideofcode.com/blog/wp-json", (res) => {
  //   console.log(res);
  //   $("#page-title").html(res.name);
  // });
}
