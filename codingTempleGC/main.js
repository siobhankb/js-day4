

// Create a scope
{
    // Set the navbar to dark
    let body = document.body;
    let children = body.children;
    let navBar = children[0];
    navBar.className = navBar.className.replaceAll('light', 'dark');


    // Set the buttons to be bootstrap style with colors
    let myButtonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    myButtons = document.querySelectorAll('.col-2 > button');

    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].className = `btn btn-${myButtonColors[i]} w-100`;
    }

    // Add a header under the buttons in the container

    // First create the element
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader'
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian and JavaScript';

    // Get the row with the buttons element
    let container = document.getElementsByClassName('row')[0]
    container.append(newHeader);
}


// Event Listeners
{
    // Create a function to change our element
    function changeElementColor(event){
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.style);
        let elementToChange = event.target
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'purple'
        }else{
            elementToChange.style.color = 'black'
        }
    }
    const myHeader = document.getElementById('myHeader')
    
    myHeader.addEventListener('mouseenter', changeElementColor)
}


// Event Listeners for the buttons
{
    let ourColorButtons = document.querySelectorAll('.col-2 > button');
    
    let myButtonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    for (let i=0; i < ourColorButtons.length; i++){
        button = ourColorButtons[i];
        button.addEventListener('click', (e) => {
            let body = document.body;
            body.className = `bg-${myButtonColors[i]}`
        })
    }
}

// Get Country Info from form and displaying the info on our page
{
    async function getCountryInfo(countryName){
        let res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        let data = await res.json()
        return data[0]
    }

    async function buildCountryCard(country){
        // Create card div
        const card = document.createElement('div')
        card.className = 'card'
        // Create top image
        const image = document.createElement('img')
        image.className = 'card-img-top'
        image.src = country.flags.png
        // Add image to card div
        card.append(image)

        // Create a card body div
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        // Add country and population
        const countryTitle = document.createElement('h5');
        countryTitle.className = 'card-title'
        countryTitle.innerHTML = country.name.official
        const population = document.createElement('p');
        population.className = 'card-text'
        population.innerHTML = `Population: ${country.population.toLocaleString('en-US')}`
        
        // Append to card body
        cardBody.append(countryTitle)
        cardBody.append(population)
        
        // Add card body to card
        card.append(cardBody);

        // Create column div
        const col = document.createElement('div')
        col.className = 'col-12 col-md-6 col-lg-3'

        // Add card to column
        col.append(card)

        // Get the div for display country cards
        const display = document.getElementById('countryDisplay');
        // Add new column to the display
        display.append(col)
    }


    async function handleSubmit(e){
        e.preventDefault();
        let countryName = e.target.countryName.value;
        let country = await getCountryInfo(countryName);
        await buildCountryCard(country)
        e.target.countryName.value = ''
    }


    const myForm = document.getElementsByTagName('form')[0];
    myForm.addEventListener('submit', handleSubmit);
}


