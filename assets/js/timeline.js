/// [Title, Date Text, Descirption]
var timeline_elems = [
    [
        "Coding: Presense's OpenRadar",
        "Oct 2019",
        "The first open source toolbox for mmWave radar processing and applications.",
        "oct_2019_openradar.html"
    ],

    [
        "Coding: CU Unite",
        "Sept 2019",
        "Modern dashboard for monitoring contributions and student involvement of UIUC organizations.",
        "sept_2019_cu_unite.html"
    ],

    [
        "Coding: Deep Fake Farms",
        "",
        "Robust CV data augmentation for aggricultural datasets using GANs.",
        "coming_soon.html"
    ],

    [
        "Coding: EIE.IO",
        "",
        "Automated injury detection system for livestock.",
        "coming_soon.html"
    ],

    [
        "Exploring: Japanese & WaniKani",
        "",
        "Consistently learning Japanese kanji via a spaced repition system.",
        "coming_soon.html"
    ],

    [
        "Living: Starting My Bouldering Journey",
        "",
        "Beginning a membership and learning how to boulder from scratch.",
        "coming_soon.html"
    ]

]

function generateTimeline() {
    // Get the container where the timeline will be appended
    const container = document.getElementById('timeline-container');


    // Iterate through timeline_elems to build the timeline HTML
    for (let timeline_idx = 0; timeline_idx < timeline_elems.length; timeline_idx++) {
        const elem = timeline_elems[timeline_idx];

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
        content_div.className = 'timeline-component timeline-content';
        
        const title = document.createElement('h3');

        const blog_link = document.createElement('a');
        blog_link.href = elem[3];
        blog_link.textContent = elem[0]

        title.appendChild(blog_link)

        const date = document.createElement('h4');
        date.textContent = elem[1];

        const paragraph = document.createElement('p');
        paragraph.textContent = elem[2];

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
