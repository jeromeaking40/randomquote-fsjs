
//object array of quotes
var quotes = [{
    quote: "Money and success don't change people; they merely amplify what is already there.",
    source: "Will Smith ",
    citation: "Addicted2Success ",
    year: "2007 ",
    category: "Knowledge"
}, {
    quote: "The first step is you have to say that you can.",
    source: "Will Smith ",
    citation: "Addicted2Success ",
    year: "2007 ",
    category: "Motivation"
}, {
    quote: "Don't count the days, make the days count.",
    source: "Muhammad Ali",
    citation: "News Conference in London, ",
    category: "Insight"
}, {
    quote: "People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.",
    source: "Zig Ziglar, ",
    category: "Humor"
}, {
    quote: "If you must have motivation, think of your paycheck on Friday.",
    source: "Noel Coward, ",
    category: "Motivation"
}, {
    quote: "It's not the load that breaks you down, it's the way you carry it.",
    source: "Lou Holtz, ",
    category: "Perpesctive"
}, {
    quote: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.",
    source: "Jordan Belfort, ",
    category: "Insight"
}, {
    quote: "Motivation is what gets you started. Habit is what keeps you going",
    source: "Jim Ryun, ",
    category: "Motivation"
}, {
    quote: "If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don't back down.",
    source: "Eminem, ",
    category: "Motivation"
}]


//selects a random quote object from the quotes array
//returns the randomly selected quote object
function getRandomQuote() {
    var quoteMotivation = quotes[Math.floor(Math.random() * quotes.length)];
    return quoteMotivation;
}

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
function printQuote() {
    var quoteObject = getRandomQuote();
    //construct an html statement from string text and the quote object, starting with quote and source
    var quoteString = "<p class='quote'>";
    quoteString += quoteObject.quote;
    quoteString += "</p> <p class='source'>";
    quoteString += quoteObject.source;
    //citation is an optional field so the html text will only be added if the citation field is present
    if (typeof quoteObject.citation != "undefined") {
        quoteString += "<span class='citation'>";
        quoteString += quoteObject.citation;
        quoteString += "</span>";
    };
    //year is an optional field so the html text will only be added if the citation field is present
    if (typeof quoteObject.year != "undefined") {
        quoteString += "<span class='year'>";
        quoteString += quoteObject.year;
        quoteString += "</span>";
    };
    //category is an additional optional field so the html text will only be added if the citation field is present
    if (typeof quoteObject.category != "undefined") {
        quoteString += "<span class='category'>";
        quoteString += quoteObject.category;
        quoteString += "</span>";
    };
    quoteString += "</p>"
    //insert the constructed html string into the document
    document.getElementById('quote-box').innerHTML = quoteString;
}

//Call the  printQuote function to run
printQuote();

//Time Interval to change quote every 10 seconds
setInterval('printQuote()', 10000);

//JS Event Listener for the button click to execute printQuote, keeping an onclick statement out of the html
document.getElementById('loadQuote').addEventListener("click", printQuote, false);