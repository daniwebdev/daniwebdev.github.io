document.querySelector('#y').innerHTML = new Date().getFullYear();

$(function() {
  
const experiance = [
  {
    company: "Bonet Utama, PT",
    periode: "2016 - 2018 (fulltime)",
    description: "Create small app project, cashier, registration form, management student app. work with php, MySQL"
  },
  {
    company: "Prioritas Group",
    periode: "2018 - Current (fulltime)",
    description: "Develop ERP system. work with php, MS. SQL Server"
  },
  {
    company: "BSS - ATIOS Project",
    periode: "2020 (freelance)",
    description: "Develop trading tools, membership, maintenance data feed. work with python, php, nodeJS, postgresql, firebase, etc."
  },
]

experiance.forEach((item, index) => {
  $('#work-experiance .container').append(`
    <div class="project-item d-flex align-items-start">
      <div class="number d-flex align-items-center text-center">
        <span class="w-100">${(index+1).toString().padStart(2, '0')}</span>
      </div>
      <div class="project-description">
        <h3>${item.company}</h3>
        <h6>${item.periode}</h6>
        <p>${item.description}</p>
      </div>
    </div>
  `)
})
});


const own_project = [
  {
    title: "Berita Saham Indonesia",
    description: "News gateway, information about investation, stock market, gold and trading tools.",
    website: "https://beritasaham.id"
  }
]

own_project.forEach((item, index) => {
  $('#own-project .container').append(`
      <div class="project-item d-flex align-items-start">
      <div class="number d-flex align-items-center text-center">
        <span class="w-100">${(index+1).toString().padStart(2, '0')}</span>
      </div>
      <div class="project-description">
        <h3>${item.title}</h3>
        <h6><a target="_blank" href="${item.website}">${item.website}</a></h6>
        <p>${item.description}</p>
      </div>
    </div>
  
  `)
})