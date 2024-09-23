/// [Title, Date Text, Descirption]
var timeline_elems = [
    [
        "Coding: Presense's OpenRadar",
        "",
        "The first open source mmwave radar processing toolbox."
    ],

    [
        "Coding: Deep Fake Farms",
        "",
        "Robust CV data augmentation for aggricultural datasets using GANs."
    ],

    [
        "Coding: EIE.IO",
        "",
        "Automated injury detection system for livestock."
    ],

    [
        "Coding: CU Unite",
        "",
        "Analytics dashboard for visualizing statistics of all UIUC organizations."
    ],

    [
        "Exploring: Japanese & WaniKani",
        "",
        "Consistently learning Japanese kanji via a spaced repition system."
    ],

    [
        "Living: Starting My Bouldering Journey",
        "",
        "Beginning a membership and learning how to boulder from scratch."
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
        title.textContent = elem[0];

        const paragraph = document.createElement('p');
        paragraph.textContent = elem[2];

        // Append title and paragraph to content_div
        content_div.appendChild(title);
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

    console.log(container.innerHTML);

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
