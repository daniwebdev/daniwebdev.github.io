document.querySelector("#y").innerHTML = new Date().getFullYear();

$(function () {   

  site_info();


  const experiance = [
    {
      company: "Bonet Utama, PT",
      periode: "2016 - 2018 (fulltime)",
      description: "My first carieer i become operator in the internet cafe (warnet). along with time i also try to create small app project like cashier app, registration form, management student app, event attendance. work with php (CodeIgniter), MySQL",
    },
    {
      company: "Prioritas Group",
      periode: "2018 - Current (fulltime)",
      description: "One of private company in Bogor-Indonesia, and i'm as fullstack developer for building an ERP system and they have one mobile aplication for public and on there i'm work as back-end developer too. work with php (CodeIgniter, Laravel), Firebase, MS. SQL Server",
    },
    {
      company: "Carsold - Car Bidding",
      periode: "2019 (freelance)",
      description: "i'm work as a freelancer for car selling and car bidding. work with php (Laravel), MySQL",
    },
    ,
    {
      company: "Some Project In Government",
      periode: "2019, 2021 (as freelance at vendors)",
      description: "Develop apps for help vendors to complete their project, i'm has been working for make dashboard GIS, collection data from disaster sensor, etc.",
    },
    {
      company: "BSS - ATIOS Project",
      periode: "2020 (freelance)",
      description:
        "Develop trading tools apps including features like membership, data feed, trading plan, charting, detail stock, historical, and more, work with python (Pandas), php (Laravel), nodeJS, postgresql, firebase",
    }
  ];

  experiance.forEach((item, index) => {
    $("#work-experiance .container").append(`
    <div class="project-item d-flex align-items-start">
      <div class="number d-flex align-items-center text-center">
        <span class="w-100">${(index + 1).toString().padStart(2, "0")}</span>
      </div>
      <div class="project-description">
        <h3>${item.company}</h3>
        <h6>${item.periode}</h6>
        <p>${item.description}</p>
      </div>
    </div>
  `);
  });
});

const own_project = [
  {
    title: "Berita Saham Indonesia",
    description:
      "News gateway, information about investation, stock market, gold and trading tools.",
    website: "https://beritasaham.id",
    tech_stack: [
      "PHP",
      "Python",
      "JS",
      "Postgresql",
      "Laravel",
    ]
  },
  {
    title: "JSON.WEB.ID",
    description:"JSON.WEB.ID is a website that provides REST API for simulate Create, Read, Update, and Delete. It is a free service for everyone.",
    website: "https://json.web.id",
    tech_stack: [
      "PHP",
    ]
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

  fetch('https://dani.work/blog/wp-json/wp/v2/posts?per_page=5').then(res => res.json()).then(res => {

    res.forEach((post, index) => {

      $("#recent-posts .container .row").append(`
        <div class="project-item d-flex align-items-start mb-2 col-md-6">
          <div class="project-description">
            <h3>
              <a href="${post.link}" target="_blank">${post.title.rendered}</a>
            </h3>
            <p>${post.yoast_head_json.description}</p>
          </div>
        </div>
      `);
    });

  })
});

function site_info() {
  $.get('https://dani.work/blog/wp-json', res => {
    console.log(res)
    $('#page-title').html(res.name)
  })  
}