const url = 'https://api.hnpwa.com/v0/news/1.json'; //api url
const appendTo = document.getElementById("display"); //helps to append to div element in the html tag

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) //takes data from api and changes to json object
.then(function(data) {
    for(let i=0; i<data.length; i++) //loops through api data
    {
        let title = data[i].title,
        domain = data[i].domain,
        points = data[i].points,
        timeAgo = data[i].time_ago,
        link = data[i].url,
        commentsCounts = data[i].comments_count,
        user = data[i].user; 

        let h3 = createNode('h3'); //create h3 tag
        appendTo.appendChild(h3); //append created h3 tag to html's body
        h3.innerHTML= `<span id="id">${i+1}.</span>&nbsp<span id="black"><a href="${link}">${title}</a></span> <span id="domain">Source: ${domain}</span>`

        let p = createNode('p'); //creates p tag
        p.innerHTML = `<span id="point">${points} </span>&nbsp, &nbsp;&nbsp;By <span id="user">${user}</span>, 
        &nbsp;&nbsp;<span id="time">${timeAgo}</span>, &nbsp;&nbsp; <span id="comment"> ${commentsCounts}</span>comments <hr>`
        let button = createNode('button')
        
        append(h3, p);  //appends p tag to h3 tag
    }
   
})
.catch(function(error) {
    console.log(error); //displays error in the console
}); 

function createNode(element) {
    return document.createElement(element); // Create the html element passed in as parameter
  }

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one(parent)
  }

