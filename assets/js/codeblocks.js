

//global scope
const myJobs = [
    {
        "company": "Timbal",
        "web": "www.timbal.com.mx",
        "description": "This text is about the company",
        "buttonText": "Ver Más",
        "buttonLink": "https://google.com"
    },
    {
        "company": "IT Nora",
        "web": "www.itnora.com",
        "description": "This text is about the company",
        "buttonText": "Ver Más",
        "buttonLink": "https://google.com"
    },
    {
        "company": "Applab",
        "web": "www.applab.mx",
        "description": "This text is about the company",
        "buttonText": "Ver Más",
        "buttonLink": "https://google.com"
    }
];

//Blockcodes
const componentBlock = {
    "container": document.createElement("div"),
    "row": document.createElement("div"),
    "col": document.createElement("div")
}
function jobs() {

    const jobsBlock = document.querySelector("#jobs");
    

    

    


    //build the jobsView
    
    
    for (let item = 0; item < myJobs.length; item++) {
        const cardItem = {
            "card": document.createElement("div"),
            "body": document.createElement("div"),
            "title": document.createElement("h5"),//card title Div,
            "titleText": document.createTextNode("text"),
            "subtitle": document.createElement("h6"),
            "text": document.createElement("p"),
            "link": document.createElement("a"),
        }
        const newJobs = myJobs[item];
        console.log(newJobs)
        jobsBlock.appendChild(cardItem.card);
    cardItem.card.setAttribute("class", "card m-3");
    cardItem.card.appendChild(cardItem.body);
    cardItem.body.setAttribute("class", "card-body");
    cardItem.body.appendChild(cardItem.title);
    cardItem.title.setAttribute("class", "card-title");
    cardItem.title.appendChild(document.createTextNode(newJobs.company));
    cardItem.body.appendChild(cardItem.subtitle);
    cardItem.subtitle.setAttribute("class", "card-subtitle text-body-secondary");
    cardItem.body.appendChild(cardItem.text);
    cardItem.text.appendChild(document.createTextNode(newJobs.description));
    cardItem.text.setAttribute("class", "card-text")
    cardItem.body.appendChild(cardItem.link);
    cardItem.link.setAttribute("class", "btn btn-primary");
    cardItem.link.setAttribute("href", newJobs.buttonLink);
    cardItem.link.appendChild(document.createTextNode(newJobs.buttonText))
    }
    };

    jobs();

