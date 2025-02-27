const members = [
    {
        "Name": "Anirban Biswas",
        "Section": "D",
        "Roll": 422
    },
    {
        "Name": "Srishti Bhattacharjee Ichchha",
        "Section": "D",
        "Roll": 10503
    },
    {
        "Name": "Aritri Biswas",
        "Section": "B",
        "Roll": 1202425010163
    },
    {
        "Name": "Sauda Hasin Chowdhury",
        "Section": "G",
        "Roll": 1202425010257
    },
    {
        "Name": "Walina Islam",
        "Section": "C",
        "Roll": 10316
    },
    {
        "Name": "Syeda Jawhara Jabin",
        "Section": "A",
        "Roll": 1202425010011
    },
    {
        "Name": "Jannatul Fardaus Alif Fa",
        "Section": "A",
        "Roll": 1202425010038
    },
    {
        "Name": "Mohitosh Chowdhury",
        "Section": "C",
        "Roll": 10277
    },
    {
        "Name": "MD. Mehadi Hasan Reyan",
        "Section": "E",
        "Roll": 1202425010619
    },
    {
        "Name": "Halima Tuz Sadia Adiba",
        "Section": "A",
        "Roll": 10020
    },
    {
        "Name": "Sadia Binte Seraj",
        "Section": "D",
        "Roll": 10436
    },
    {
        "Name": "Sejuti Karmakar",
        "Section": "D",
        "Roll": 421
    },
    {
        "Name": "Sumaiya Akter",
        "Section": "C",
        "Roll": 10305
    },
    {
        "Name": "Shibom Saha",
        "Section": "C",
        "Roll": 1202425010302
    },
    {
        "Name": "Sunjana Alam",
        "Section": "D",
        "Roll": 10460
    },
    {
        "Name": "Mo Tanvir Mahtab",
        "Section": "Ng",
        "Roll": 1202425010510
    },
    {
        "Name": "Arpita Biswas",
        "Section": "A",
        "Roll": 10087
    }
];
const membersGrid = document.getElementById('membersGrid');

members.forEach(member => {
    const memberCard = `
        <div class="member-card animate-on-scroll">
            <div class="card-gradient"></div>
            <div class="card-content">
                <h2 class="member-name">${member.Name}</h2>
                <div class="member-divider"></div>
                <p class="member-info"><strong>Section:</strong> ${member.Section}</p>
                <p class="member-info"><strong>Roll:</strong> ${member.Roll}</p>
            </div>
        </div>
    `;
    membersGrid.innerHTML += memberCard;
});


// Flashy Scroll Animation for Mobile
const animateOnScroll = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.2
});

animateOnScroll.forEach(card => {
    observer.observe(card);
});

