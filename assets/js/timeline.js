class Entry {
    constructor(title, date, desc, path) {
        this.title = title;
        this.date = date;
        this.desc = desc;
        this.path = path;
    }
}

/// [Title, Date Text, Descirption]
var timeline_elems = [

    new Entry(
        "Working: Senior System Engineering at Uhnder",
        "Dec 2022",
        "Promotion to Senior System Engineer, aiding in interference detection and mitigation.",
        "blog/2022_dec_uhnder.html"
    ),

    new Entry(
        "Working: System Engineering at Uhnder",
        "June 2020",
        "Starting a new chapter in my life working full time on radar algorithm development.",
        "blog/2020_june_uhnder.html"
    ),

    new Entry(
        "Coding: Presense's OpenRadar",
        "Oct 2019",
        "The first open source toolbox for mmWave radar processing and applications.",
        "blog/2019_oct_openradar.html"
    ),

    new Entry(
        "Working: Remote Sensing & ML/CV at NCSA",
        "Oct 2019",
        "Fixing large scale problems in an agricultural setting by researching solutions utilizing machine learning and computer vision.",
        "blog/2019_oct_ncsa.html"
    ),

    new Entry(
        "Coding: CU Unite",
        "Sept 2019",
        "Modern dashboard for monitoring contributions and student involvement of UIUC organizations.",
        "blog/2019_sept_cu_unite.html"
    ),

    new Entry(
        "Working: Embedded Systems & Front-End Development at Cohesive Manufacturing",
        "Sept 2019",
        "Providing sensor monitoring solutions for critical infrastructure through the cloud.",
        "blog/2019_sept_cohesive.html"
    ),

    new Entry(
        "Coding: AlphaSmash",
        "Feb 2019",
        "Reinforcement agent for playing Super Smash Bros. using deep learning.",
        "blog/2019_feb_alphasmash.html"
    ),

    new Entry(
        "Coding: Deep Fake Farms",
        "Feb 2019",
        "Robust data augmentation for agricultural image datasets using deep fake technology.",
        "blog/2019_feb_deep_fake_farms.html"
    ),

    new Entry(
        "Coding: EIE.io",
        "Feb 2019",
        "Smart injury detection system for livestock.",
        "blog/2019_feb_eieio.html"
    ),

    new Entry(
        "Coding: TyperML",
        "Dec 2018",
        "AI based tool for improving typing skills.",
        "blog/2018_dec_typerml.html"
    ),

    new Entry(
        "Coding: The RISC-V Architecture",
        "Dec 2018",
        "Creating a processor from scratch which supports the RISC-V architecture.",
        "blog/2018_dec_riscv.html"
    ),

    new Entry(
        "Coding: PyggyBack",
        "Sept 2018",
        "Creating a data platform for planning your trip around campus.",
        "blog/2018_sept_pyggyback.html"
    ),

    new Entry(
        "Coding: The SrirachOS Operating System",
        "May 2018",
        "A simple CLI operating system with custom functionality.",
        "blog/2018_may_srirachos.html"
    ),

    new Entry(
        "Coding: Colada",
        "Feb 2018",
        "A personal bartender and drink creation system using a neural network.",
        "blog/2018_feb_colada.html"
    )

]

function generateTimeline() {
    // Get the container where the timeline will be appended
    const container = document.getElementById('timeline-container');


    // Iterate through timeline_elems to build the timeline HTML
    for (let timeline_idx = 0; timeline_idx < timeline_elems.length; timeline_idx++) {
        const entry = timeline_elems[timeline_idx];

        // Create the first timeline-empty div
        const empty_div = document.createElement('div');
        empty_div.className = 'timeline-empty';

        // Create the timeline-middle div with a timeline-circle
        const middle_div = document.createElement('div');
        middle_div.className = 'timeline-middle';

        const circle_div = document.createElement('div');
        circle_div.className = 'timeline-circle';

        // Append the circle to the middle div
        middle_div.appendChild(circle_div);


        // Create the timeline-component div with content
        const content_div = document.createElement('div');
        content_div.className = 'timeline-component timeline-content ';
        if (entry.title.toLowerCase().includes("working")) {
            content_div.className += 'category-working';
        } else if (entry.title.toLowerCase().includes("coding")) {
            content_div.className += 'category-coding';
        } else if (entry.title.toLowerCase().includes("living")) {
            content_div.className += 'category-living';
        } else if (entry.title.toLowerCase().includes("learning")) {
            content_div.className += 'category-learning';
        } else {
            content_div.className += 'category-default';
        }

        const title = document.createElement('h3');

        const blog_link = document.createElement('a');
        blog_link.href = entry.path;
        blog_link.textContent = entry.title

        title.appendChild(blog_link)

        const date = document.createElement('h4');
        date.textContent = entry.date;

        const paragraph = document.createElement('p');
        paragraph.textContent = entry.desc;

        // Append title and paragraph to content_div
        content_div.appendChild(title);
        content_div.appendChild(date);
        content_div.appendChild(paragraph);


        if (timeline_idx % 2 === 0) {
            // Right side
            container.appendChild(empty_div);
            container.appendChild(middle_div);
            container.appendChild(content_div);

        } else {
            // Left side
            container.appendChild(content_div);
            container.appendChild(middle_div);
            container.appendChild(empty_div);
        }
    }

    // Create the first timeline-empty div
    const empty_div_final = document.createElement('div');
    empty_div_final.className = 'timeline-empty';

    // Create the timeline-middle div with a timeline-circle
    const middle_div_final = document.createElement('div');
    middle_div_final.className = 'timeline-middle';

    const circle_div_final = document.createElement('div');
    circle_div_final.className = 'timeline-circle';

    // Append the circle to the middle div
    middle_div_final.appendChild(circle_div_final);

    container.appendChild(empty_div_final);
    container.appendChild(middle_div_final);

    // Timeline Contents - Add fade-up effect
    $('.timeline-content')
        .scrollex({
            mode: 'middle',
            top: '-40vh',
            bottom: '-40vh',
            initialize: function () {
                $(this).removeClass('show');
            },
            enter: function () {
                $(this).addClass('show');
            }
        });
}

// Set up the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', generateTimeline);
