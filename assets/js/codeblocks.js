function showView() {
    //console.log("Let's Hide!")
    const getHomeView = document.querySelector("#homeView");
    const getAboutView = document.querySelector("#aboutView");
    //const isHiddenView = getAboutView.hasAttribute(".hidden-view")

    console.log(getHomeView.getAttribute("class"))
    if(getHomeView.getAttribute("class") == "hidden-view") {
        console.log("Hidden")
    }
    else {
        console.log("not hidden")
    }
        
}


showView();