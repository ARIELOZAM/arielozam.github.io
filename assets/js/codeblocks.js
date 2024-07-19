

//global scope
const myJobs = [
    {
        "company": "Timbal",
        "web": "www.timbal.com.mx",
        "description": "´This text is about the company´",
        
        

    },
    {
        "company": "IT Nora",
        "web": "www.itnora.com",
        "description": "´This text is about the company´",
    },
    {
        "company": "Applab",
        "web": "www.applab.mx",
        "description": "´This text is about the company´",
    }
];

function jobs() {

    const jobsBlock = document.querySelector("#jobs");
    const divItem = document.createElement("div");// Card div
    const cardBodyElement = document.createElement("div"); //card body
    const cardTitleElement = document.createElement("h5"); //card title Div
    const cardSubtitleElement = document.createElement("h6");
    const cardTitle = document.createTextNode("Company"); //Card Title
    const cardSubtitle = document.createTextNode("2010 - 2020"); //Card Subtitle
    const headingFive = document.createElement("h5");

    

    


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
    cardItem.card.setAttribute("class", "card");
    cardItem.card.appendChild(cardItem.body);
    cardItem.body.setAttribute("class", "card-body");
    cardItem.body.appendChild(cardItem.title);
    cardItem.title.setAttribute("class", "card-title");
    cardItem.title.appendChild(document.createTextNode(newJobs.company));
    cardItem.body.appendChild(cardItem.subtitle);
    cardItem.subtitle.setAttribute("class", "card-subtitle text-body-secondary");
    cardItem.body.appendChild(cardItem.text);
    cardItem.text.document.createTextNode(newJobs.description);
    cardItem.text.setAttribute("class", "card-text")
    cardItem.body.appendChild(cardItem.link);
    cardItem.link.setAttribute("class", "btn btn-primary");
    }
    };

    jobs();

