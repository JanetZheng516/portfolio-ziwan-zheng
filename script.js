const cards = document.querySelectorAll(".card-inner")
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const textElement = document.getElementById('text')
const text = "I am Ziwan Zheng"

let index = 1


writeText()

function writeText() {
    if (!textElement) {
        return
    }

    textElement.innerText = text.slice(0, index)

    index++

    if (index > text.length) {
        return
    }

    setTimeout(writeText, 500)


}

let currentActive = 0

let cardsinner = [
    {
        title: 'about me',
        image: 'selfie.jpeg',
        text: `My name is Ziwan. I grew up in China, I have lived in England for three years. I am in
        Stockholm now! I speak English, Chinese and Swedish. I like drawing pixel art and
        hand crafting. My favourite food is Chinese hotpot.`
    },
    {
        title: 'education',
        image: 'education.jpg',
        text: ` <h3>Lancaster University</h3>
        BA Media and Cultural Studies<br> Relative modules: Digital marketing, Film, Sociology
        <h3>Stockholm University</h3>
        MA Global Media Studies<br> Relative modules: Design Thinking, Business Ideation, Philosophy`
    },
    {
        title: 'programming trip',
        image: 'program.jpg',
        text: ` <h3>HTML & CSS, JavaScript, React and Redux</h3><br>Built a mordern responsive website
        with React, HTML, CSS and Sass <br> Built and designed a website with HTML, CSS, vanilla
        JavaScript for a local business`
    },
    {
        title: 'internship',
        image: 'internship.jpg',
        text: `<strong>Gledus</strong><br>Worked as a content creator and videographer.<br>
        <strong>Kangchi New Bus</strong><br>Worked as a makerting associate, upgraded a website to improve
        the user experience.<br>
        <strong>Dao-Brand</strong><br>Worked as a designer, design a children's picture book.`
    },
    {
        title: 'student leadership',
        image: 'student.jpg',
        text: `<h3>Manager of Lancaster Chinese Football Club</h3>Found sponsors, scheduled trainings, organized competitions, and managed social media accounts.
        <h3>Secretary of Lancaster International Sports Society</h3>Recorded minutes of meetings.`

    },
    {
        title: "job",
        image: "job.jpg",
        text: `<h3>Roji Monster Ice Cream in Mall of Scandinavia</h3>Barista
        <h3>Machi Machi in Hötorgshallen</h3>Cashier`
    }
]

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (loadText && bg) {
        loadText.style.opacity = scale(load, 100, 0, 1, 0)
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }

    if (load === 100) {
        clearInterval(int)
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (currentActive === 3) {
            window.location.href = "http://127.0.0.1:5500/contact.html"
            return
        }


        if (card.classList.contains('is-flipped')) {
            alert('pick other cards')
            return
        }

        card.classList.add('is-flipped')

        const randomCard = getRandomCard()
        cardsinner = cardsinner.filter(eachCard => {
            return eachCard !== randomCard
        })

        card.querySelector('img').setAttribute('src', `./${randomCard.image}`);
        card.querySelector('.card-header h2').innerHTML = randomCard.title;
        card.querySelector('.card-body p').innerHTML = randomCard.text

        currentActive++

        if (currentActive > circles.length) {
            currentActive = circles.length
        }

        update()

    })
})

const getRandomCard = () => (
    cardsinner[Math.floor(Math.random() * cardsinner.length)]

)

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

}









