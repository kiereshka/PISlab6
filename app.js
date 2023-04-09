
function getStarship()
{
    fetch('https://swapi.dev/api/starships/')

    .then(res => res.json())
    .then(result => 
    {
        console.log(result)

        const StarshipsTable = document.querySelector('.StarshipsTable');
        const starship = result.results;

        for(let j = 0; j < starship.length; j++) // Creating table
        {
            const StarshipsTable1 = createElement('tr', null, null, null, StarshipsTable);

            createElement('th', null, null, starship[j].name, StarshipsTable1);
            createElement('th', null, null, starship[j].model, StarshipsTable1);
            createElement('th', null, null, starship[j].cost_in_credits, StarshipsTable1);
            createElement('th', null, null, starship[j].length, StarshipsTable1);
            createElement('th', null, null, starship[j].max_atmosphering_speed, StarshipsTable1);
            createElement('th', null, null, starship[j].crew, StarshipsTable1);
            createElement('th', null, null, starship[j].passengers, StarshipsTable1);
            createElement('th', null, null, starship[j].cargo_capacity, StarshipsTable1);
            createElement('th', null, null, starship[j].created, StarshipsTable1);
        }
    })
}

getStarship();

function createElement(tagName, attributes, handlers, content, parentElement)
{
    const element = document.createElement(tagName);

    if (attributes) // set attributes
    {
        for(let key in attributes)
        {
            if (key === 'classname') 
            {
                element.setAttribute('class', attributes[key]);

            }
            else
            {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    if (handlers) // same, but with the handlers
    {
        for(let key in handlers) 
        {
            element.addEventListener(key, handlers[key]);
        }
    }

    element.textContent = content;
    parentElement.appendChild(element);
    
    return element;
}