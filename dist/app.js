
$(function () {
    $.getJSON('/skills.json', (skills) => {
        $('#skills').html('');

        for (let skill of skills) {
            let badge = '';

            skill.label.forEach(xx => {
                badge += `<span class="inline-block bg-gray-300/10 text-xs px-2 py-1 rounded-lg">${xx}</span>`;
            })

            let template = $('#template-skills').html()
                .replace(/{img}/g, skill.logo)
                .replace(/{name}/g, skill.name)
                .replace(/{badge}/g, badge)

            $('#skills').append(template)
        }
    });

    $.getJSON("/experiance.json", (experiance) => {
        $('#experiances').html('');

        experiance.reverse().forEach((item, index) => {

            if (item.status != undefined) {
                active = `<span class="px-2 bg-success text-white rounded animate__animated animate__swing animate__delay-2s" style="font-size: 12px">Currently Working</span>`
            }

            let template = $('#template-working-experience').html();

            if (item.status == undefined) {
                template = template.replace(/{curently}/g, 'hidden')
            } else {
                template = template.replace(/{curently}/g, 'inline-block')
            }

            template = template.replace(/{title}/g, item.company)
                .replace(/{description}/g, item.description)
                .replace(/{periode}/g, item.periode)
                .replace(/{stacks}/g, item.stacks);

            $('#experiances').append(template);

        });
    });


    $.getJSON("/portfolio.json", (experiance) => {
        $('#portfolio').html('')

        experiance.forEach((item, index) => {
            let links = "";

            for (let key in item.linksv2) {
                console.log(key)
                if (key == "site") {
                    if (item.linksv2[key] == 'unpublished') {
                        links += `<span class="text-orange-200/80">[Unpublish]</span>`
                    } else {
                        links += `<a class="hover:bg-[#0B1528] inline-block px-2 py-1 border border-[#0B1528] rounded-lg" href="${item.linksv2[key]}"><i class="ri-links-line text-3xl"></i></a>`;
                    }
                }
            }

            // let renderLinks = (links) => {
            //     if (links != "") {
            //         return `
            //             <h6>Links</h6>
            //             ${links}
            //         `;
            //     }

            //     return ''
            // };

            let template = $('#template-portfolios').html();

            template = template.replace(/{links}/g, links)
                .replace(/{title}/g, item.company)
                .replace(/{description}/g, item.description)


            $('#portfolio').append(template)

            // $("#portfolio .container #we-content").append(`
            // <div class="project-item d-flex align-items-start col-md-6">
            //     <div class="number d-flex align-items-center text-center">
            //     <span class="w-100">${(index + 1).toString().padStart(2, "0")}</span>
            //     </div>
            //     <div class="project-description">
            //     <h3>${item.company}</h3>
            //     <h6>${item.periode}</h6>
            //     <p>${item.description}</p>
            //     <div>
            //     ${renderLinks(links)}
            //     </div>
            //     </div>
            // </div>
            // `);
        });
    });

    fetch("https://insideofcode.com/blog/wp-json/wp/v2/posts?per_page=5").then((res) => res.json()).then((res) => {
        res.forEach((post, index) => {

            let template = $('#template-recent-post').html();

            let image = null;

            if (post.yoast_head_json.og_image.length > 0) {
                image = post.yoast_head_json.og_image[0].url
            }

            template = template.replace(/{title}/g, post.title.rendered)
                .replace(/{description}/g, post.yoast_head_json.description)
                .replace(/{link}/g, post.link)

            if (image != null) {
                template = template.replace(/{image}/g, `
                <div class="w-full h-[200px]">
                    <img style="object-fit: cover; object-position: center;" class="w-full h-full" src="${image}" alt="oke">
                </div>
                `)
            } else {
                template = template.replace(/{image}/g, '')
            }

            $('#recent-post-container').append(template)

            // $("#recent-posts .container .row").append(`
            //     <div class="project-item d-flex align-items-start mb-2 col-md-6">
            //     <div class="project-description">
            //         <h3>
            //         <a href="${post.link}" target="_blank">${post.title.rendered}</a>
            //         </h3>
            //         <p>Last modified at <date>${post.modified}</date></p>
            //         <p>${post.yoast_head_json.description}</p>
            //     </div>
            //     </div>
            // `);
        });
    });


})


/* Slider */
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        perPage: 5,
        mediaQuery: 'max',
        autoplay: 'pause',
        interval: 1000,
        type: 'loop',
        breakpoints: {
            430: {
                perPage: 1,
            },
            640: {
                perPage: 2,
            },
            800: {
                perPage: 3,
            },
            1000: {
                perPage: 4,
            },
        },
    })
        .mount();
});