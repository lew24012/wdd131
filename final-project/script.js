const pastLitters = [
    {
        mother: 'Zinnie',
        father: 'Romeo',
        img: './images/zinnieandromeo2.jpg',
        birthdate: '07/21/2023',
        breed: 'Goldendoodles',
        theme: 'Colors'
    },
    {
        mother: 'Zinnie',
        father: 'Romeo',
        img: './images/zinnieandromeo.jpg',
        birthdate: '07/05/2024',
        breed: 'Goldendoodle',
        theme: 'Mountains'
    },
    {
        mother: 'Natasha',
        father: 'Romeo',
        img: './images/natashaandromeo.jpg',
        birthdate: '12/18/2024',
        breed: 'Aussiedoodle',
        theme: 'Christmas'
    },
    {
        mother: 'Tansy',
        father: 'Romeo',
        img: './images/tansyandromeo.jpg',
        birthdate: '12/12/2024',
        breed: 'Aussiedoodle',
        theme: 'Christmas'
    }
]

const currentLitter = [
    './images/litter1.jpg',
    './images/litter2.jpg',
]

const currentMales = [
    {
        name: 'Currant',
        img: './images/currant.jpg'
    },
    {
        name: 'Fig (sold)',
        img: './images/fig.jpg'
    },
    {
        name: 'Guava',
        img: './images/guava.jpg'
    },
    {
        name: 'Crispin (sold)',
        img: './images/crispin.jpg'
    },
    {
        name: 'Honeyberry',
        img: './images/honeyberry.jpg'
    },

]

const currentFemales = [
    {
        name: 'Cherry (sold)',
        img: './images/cherry.jpg'
    },
    {
        name: 'Lilly Pilly Berry',
        img: './images/lillypillyberry.jpg'
    },
    {
        name: 'Peach',
        img: './images/peach.jpg'
    },
    {
        name: 'Coconut',
        img: './images/coconut.jpg'
    },
    {
        name: 'Goji Berry',
        img: './images/gojiberry.jpg'
    },

]



/*DO NOT EDIT ANYTHING AFTER THIS POINT*/


//menu button
const menuBtn = document.querySelector('.menu')
const menu = document.querySelector('#menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hide')
})

//load the individual puppy pictures into the webpage
function currentMalesTemplate(currentMales) {
    return `<img src="${currentMales.img}" alt="${currentMales.name}">
            <p>${currentMales.name}</p>`
}

function currentFemalesTemplate(currentFemales) {
    return `<img src="${currentFemales.img}" alt="${currentFemales.name}">
            <p>${currentFemales.name}</p>`
}

function renderPuppies(puppyList, puppyElement, templateFunction) {
    let puppiesListHTML = '';

    if (puppyList.length === 0) {
        puppiesListHTML = '<p>None in this litter. :(</p>';
    } else {
        for (let i = 0; i < puppyList.length; i++) {
            puppiesListHTML += templateFunction(puppyList[i]);
        }
    }
    if (puppyElement) {
        puppyElement.innerHTML = puppiesListHTML;
    } else {
        console.error("Error: Could not find element.");
    }
}

//load litters into past litters page
function litterTemplate(pastLitters) {
    return `<img src="${pastLitters.img}" alt="">
            <p>Parents: ${pastLitters.mother}, ${pastLitters.father}</p>
            <p>Birthdate: ${pastLitters.birthdate}</p>
            <p>Breed: ${pastLitters.breed}</p>
            <p>Naming Theme: ${pastLitters.theme}</p>
            <hr>`
}

function renderLitters(litterList, litterElement) {
    let littersListHTML = '';

    if (litterList.length === 0) {
        littersListHTML = '<p>No results.</p>';
    } else {
        for (let i = 0; i < litterList.length; i++) {
            littersListHTML += litterTemplate(litterList[i]);
        }
    }
    if (litterElement) {
        litterElement.innerHTML = littersListHTML;
    } else {
        console.error("Error: Could not find element.");
    }
}

//Sort and Filter
let searchInput = document.querySelector('.find_litter');
let sortBySelect = document.querySelector('#sort');
if (searchInput) {
    function getFilteredAndSortedLitters() {
        const litterQuery = searchInput.value.toLowerCase().trim();
        const sortOption = sortBySelect.value;

        const filteredLitters = pastLitters.filter(function(litter) {
            if (litterQuery === '') return true;

            const motherMatch = (litter.mother && litter.mother.toLowerCase().includes(litterQuery));
            const fatherMatch = (litter.father && litter.father.toLowerCase().includes(litterQuery));
            const breedMatch = (litter.breed && litter.breed.toLowerCase().includes(litterQuery));
            const dateMatch = (litter.birthdate && litter.birthdate.toLowerCase().includes(litterQuery));
            const themeMatch = (litter.theme && litter.theme.toLowerCase().includes(litterQuery));

            return motherMatch || fatherMatch || breedMatch || dateMatch || themeMatch;
        });

        const sortedLitters = filteredLitters.sort(function(a, b) {
            let valueA, valueB;

            switch (sortOption) {
                case 'mother':
                    valueA = a.mother.toLowerCase();
                    valueB = b.mother.toLowerCase();
                    break;
                case 'father':
                    valueA = a.father.toLowerCase();
                    valueB = b.father.toLowerCase();
                    break;
                case 'date':
                    valueA = new Date(a.birthdate);
                    valueB = new Date(b.birthdate);
                    return valueB.getTime() - valueA.getTime();
                    break;
                case 'breed':
                    valueA = a.breed.toLowerCase();
                    valueB = b.breed.toLowerCase();
                    break;
                default:
                    valueA = new Date(a.birthdate);
                    valueB = new Date(b.birthdate);
                    break;
            }

            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });

        return sortedLitters;
    }


    searchInput.addEventListener('input', () => {
        const filteredAndSortedLitters = getFilteredAndSortedLitters();
        let litterElement = document.querySelector('#past_litters')
        renderLitters(filteredAndSortedLitters, litterElement);
    });

    sortBySelect.addEventListener('change', () => {
        const filteredAndSortedLitters = getFilteredAndSortedLitters();
        let litterElement = document.querySelector('#past_litters')
        renderLitters(filteredAndSortedLitters, litterElement);
    });
}

//init
function init() {
    if (document.querySelector('.slideshow')) {
        updatePhoto();
    }
    const malePuppies = currentMales
    let male_container = document.querySelector('.male_puppies_container')
    if (male_container) {
        renderPuppies(malePuppies, male_container, currentMalesTemplate)
    }
    const femalePuppies = currentFemales
    let female_container = document.querySelector('.female_puppies_container')
    if (female_container) {
        renderPuppies(femalePuppies, female_container, currentFemalesTemplate)
    }
    let litterElement = document.querySelector('#past_litters')
    const litterList = pastLitters
    if (litterElement) {
        renderLitters(litterList, litterElement)
    }
}

//slideshow on homepage
const slideshowPhoto = document.querySelector('.litter_photo');
const prevBtn = document.querySelector('.back_button');
const nextBtn = document.querySelector('.next_button');

let currentPhotoIndex = 0;

function updatePhoto() {
    if (currentLitter.length === 0) {
        slideshowPhoto.src = '';
        slideshowPhoto.alt = 'No photos available.';
        return;
    }
    slideshowPhoto.src = currentLitter[currentPhotoIndex];
    slideshowPhoto.alt = `Litter Photo ${currentPhotoIndex + 1}`;
}
if (document.querySelector('.slideshow')) {
    nextBtn.addEventListener('click', () => {
        currentPhotoIndex++;
        if (currentPhotoIndex >= currentLitter.length) {
            currentPhotoIndex = 0;
        }
        updatePhoto();
    });

    prevBtn.addEventListener('click', () => {
        currentPhotoIndex--;
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = currentLitter.length - 1;
        }
        updatePhoto();
    });
}


init()

