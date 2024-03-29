$(document).ready(function () {
    var shipped = [
        srspf = {
            link: "https://sound-recording.org/",
            imgSrc: "assets/images/SRSPF770x514.png",
            imgSrcSm: "assets/images/SRSPF385x257.png",
            caption: "Sound Recording Special Payments Fund",
            captionSm: "Sound Recording SPF",
            githubLink: "https://sound-recording.org/",
            githubPrivate: true,
            synopsis: "Designed, Developed and Launched a new website application for the Sound Recording Special Payments Fund. The website features public pages that communicate essential information about the Fund. The site also features a private member section that allows the Fund's participants to register for access to maintain their personal information, view documents related to their payments received from the Fund (e.g., statements and tax documents) and also submit electronic forms. The Fund has a private administration section where they can administer their website users, and a Forms Processing system which allows their employees to review and process electronic forms submitted by their users. Participant information is automatically synchronized between the website database and the Fund's backend database, which relieves the Fund of manual intervention for data updates."
        },
    ];    
var portfolio = [
    myshowspace = {
        link: "https://www.myshowspace.com/",
        imgSrc: "assets/images/myshowspace385x257.png",
        caption: "My Showspace",
        githubLink: "https://github.com/VinnyV88/virtual-designer#vivid",
        githubPrivate: true,
        technology: ["HTML5 (Canvas)","Fabric.js (Canvas Management Library)","jQuery","AJAX","JSON","Node.js","Express.js","MySQL db"],
        synopsis: "A web app that allows users to design virtual rooms for multiple purposes. As an artist, to display your artwork in a virtual showroom. As a home-owner, to design a new interior project with artwork, furniture/decors, paint color. As a furniture company, to allow users to try your furniture in their virtual room prior to purchase. As a realtor, to virtual furnish and decorate images of vacant rooms."
    },
    // roadTrip = {
    //     link: "road_trip_planner/index.html",
    //     imgSrc: "assets/images/urtp385x257.png",
    //     caption: "Ultimate Road Trip Planner",
    //     githubLink: "https://github.com/VinnyV88/Road-Trip-Planner#the-ultimate-road-trip-planner",
    //     githubPrivate: false,
    //     technology: ["jQuery","AJAX", "Google Maps API (Direction Services, Places, Autocomplete for Addresses)", "GeoNames API (City/Town Names)", "DarkSkies API (Weather Forecast)", "Bitly API (Directions URL Shortner)"],
    //     synopsis: "The Ultimate Road Trip Planner is an app where the user enters in a starting location and ending location to plan a road trip. The app makes suggestions for points of interest like Hotels/Motels and restaurants. It will also provide weather forecasts for key cities along the route to enhance the road trip plan. The app uses Geonames, Google maps, Dark Skies to plan the route and provide the key information."
    // },
    starWars = {
        link: "star_wars/index.html",
        imgSrc: "assets/images/Star_Wars385x257.png",
        caption: "Star Wars RPG Game",
        githubLink: "https://github.com/VinnyV88/week-4-game#star-wars-rpg",
        githubPrivate: false,
        technology: ["Game Flow Logic","jQuery","Adobe Shoebox (Extract sprites from sprite sheets)","Photoshop (modify/create individual sprites)","Audacity (Record and cut up sound effects)","sprite-animate.js (Character Animation)"],
        synopsis: "Multi-level RPG game where you can play as or fight against your favorite characters from the original Star Wars trilogy. Each level has their own set of characters, environments, battlefield action animations and sound effects. Defeat all opponents with each character to advance to the next level. Be sure to check out the Help section of the app for instructions on how to play and for tips on how to win."
    },
    hangman = {
        link: "hangman/index.html",
        imgSrc: "assets/images/hangman385x257.png",
        caption: "Hangman",
        githubLink: "https://github.com/VinnyV88/week-3-game#hangman-breaking-bad-edition",
        githubPrivate: false,
        technology: ["Game Flow Logic","jQuery","Photoshop","Audacity (Record and cut up sound effects)"],
        synopsis: "A hangman game that randomly chooses a word or phrase related to AMC's TV series Breaking Bad. You play by guessing letters by pressing letter keys on the keyboard. Letter hits and misses are accompanied by CSS generated animations and sound effects from the show. A GIF and a sound byte related to the word/phrase are played when a word is solved. If you are unable to solve the word/phrase within the alloted guesses, the animated \"hangman\" (Heisenberg) gets hung out to dry."
    },
    // mongoNews = {
    //     link: "https://mong-oh-cheerio.herokuapp.com/",
    //     imgSrc: "assets/images/mongo-news385x257.png",
    //     caption: "Mong-Oh-Cheerio News",
    //     githubLink: "https://github.com/VinnyV88/mongo-cheerio-news-scraper#mongo-cheerio-news-scraper",
    //     githubPrivate: false,
    //     technology: ["Node.js","Express.js","express-handlebars", "mongo db", "mongoose","cheerio (web scraping)"],
    //     synopsis: "An app that lets users leave comments on the latest (web scraped) news using Mongoose, Cheerio, and Express"
    // },
    // sqlzdBurger = {
    //     link: "https://sqlzd-burger-app.herokuapp.com/burgers",
    //     imgSrc: "assets/images/sqlzd-burger-eating385x257.png",
    //     caption: "King Burger Eating",
    //     githubLink: "https://github.com/VinnyV88/sequelizedBurger",
    //     githubPrivate: false,
    //     technology: ["Node.js","Express.js","express-handlebars","MySQL db","sequelize" ],
    //     synopsis: "An app that demonstrates the use of a Sequelized MySQL database, using table associations and model validations along with Node, Express, and Handlebars"
    // },
    // friendFinder = {
    //     link: "https://vivi-friend-finder.herokuapp.com/",
    //     imgSrc: "assets/images/FriendFinder385x257.png",
    //     caption: "Friend Finder",
    //     githubLink: "https://github.com/VinnyV88/FriendFinder#friendfinder",
    //     githubPrivate: false,
    //     technology: ["jQuery","AJAX","Node.js","Express.js","JSON", "Krita (graphics editor)", "validator.js"],
    //     synopsis: "A compatibility-based 'FriendFinder' application. This full-stack site takes in results of a user survey, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match."
    // },
    trainTracker = {
        link: "https://traintracker-d4450.firebaseapp.com/",
        imgSrc: "assets/images/trainTracker385x257.png",
        caption: "Firebase Train Tracker",
        githubLink: "https://github.com/VinnyV88/fbTrainTracker#train-tracker",
        githubPrivate: false,
        technology: ["Firebase","OAuth","jQuery","timepicker.js","moment.js"],
        synopsis: "The Train Tracker app allows visitors to view train schedule information of trains that were entered by users. Registered and login users have the ability to enter new train information, edit or delete existing trains. Next arriving train information is updated every minute, as indicated by the flip clock. Users have the option to register and login with either their Google or Github accounts."
    },
    trivia = {
        link: "trivia_game/index.html",
        imgSrc: "assets/images/wweTrivia385x257.png",
        caption: "Trivia Game",
        githubLink: "https://github.com/VinnyV88/TriviaGame#trivia-game-wwewwf-edition",
        githubPrivate: false,
        technology: ["jQuery","AJAX","GIPHY API","Photoshop","Audacity (Record and cut up sound effects)"],
        synopsis: "A trivia game that randomly chooses a question related to WWE/WWF \"Attitude\" era. The game will ask you 15 questions and display a summary at the end of how you did. You will have 20 seconds to answer each question. After a question is completed, a GIF retrieved via the GIPHY API will be displayed related to correct answer."
    }
];

var screenSize;
if (window.innerWidth > 768) {
    screenSize = "lg"
} else {
    screenSize = "sm"
};


for (var i = 0; i < shipped.length; i++) {
    var flexContainer;
    var flexImg;
    var shippedImg;
    var flexBody;
    var cardHeader;
    
    if (screenSize === "lg") {
        flexContainer = "shipped-flex-container";
        flexImg = "flex-item-shipped-img";
        flexBody = "flex-item-caption-body-shipped";
        shippedImg = shipped[i].imgSrc;
        cardHeader = shipped[i].caption;
    } else {
        flexContainer = "shipped-flex-container-sm";
        flexImg = "flex-item-shipped-img-sm";
        flexBody = "flex-item-caption-body-shipped-sm";
        shippedImg = shipped[i].imgSrcSm;
        cardHeader = shipped[i].captionSm;
    }

    var $shippedLi = $('<li>');
    var $div = $('<div>').addClass(flexContainer).attr("data-emergence", "hidden");
    var $ul = $('<ul>').attr("style", "text-align: left;");
    if (shipped[i].technology) {
    shipped[i].technology.forEach(function(tech) {
        var $li = $('<li>').text(tech);
        $ul.append($li);
    });
    }
    var $overlay = $('<div>').addClass("shipped-overlay").append($ul);
    var $img = $('<img>').addClass('img-responsive link-ani').addClass(flexImg).attr('src', shippedImg).attr('alt', cardHeader);
    var $a = $('<a>').attr('href', shipped[i].link).attr('target', '_blank');
    var $demoLink = $('<a>').addClass('demo-link').attr('href', shipped[i].link).attr('target', '_blank').text(cardHeader);
    var $caption = $('<div>').addClass('flex-item-caption-hdr').html($demoLink);
    var $captionBody = $('<div>').addClass(flexBody).text(shipped[i].synopsis);
    var $captionLink = $('<div>').addClass('flex-item-caption-button');
    if (shipped[i].githubPrivate) var $aButton = $('<a>').attr('href', shipped[i].githubLink).attr('target', '_blank').addClass('caption-button').text("View the Website");
    else var $aButton = $('<a>').attr('href', shipped[i].githubLink).attr('target', '_blank').addClass('caption-button').text("Read More on GitHub");
    
    $captionLink.append($aButton);

    $a.html($img);
    $div.append($a);
    $div.append($overlay);    

    $div.append($caption);
    $div.append($captionBody);
    $div.append($captionLink);

    $shippedLi.append($div);
    $('.shipped-well').append($shippedLi);
};

for (var i = 0; i < portfolio.length; i++) {

    var $portLi = $('<li>');

    var $div = $('<div>').addClass("portfolio-flex-container").attr("data-emergence", "hidden");
    var $ul = $('<ul>').attr("style", "text-align: left;");
    if (portfolio[i].technology) {
    portfolio[i].technology.forEach(function(tech) {
        var $li = $('<li>').text(tech);
        $ul.append($li);
    });
    }
    var $overlay = $('<div>').addClass("portfolio-overlay").append($ul);
    var $img = $('<img>').addClass('img-responsive link-ani flex-item-port-img').attr('src', portfolio[i].imgSrc).attr('alt', portfolio[i].caption);
    var $a = $('<a>').attr('href', portfolio[i].link).attr('target', '_blank');
    var $demoLink = $('<a>').addClass('demo-link').attr('href', portfolio[i].link).attr('target', '_blank').text(portfolio[i].caption);
    var $caption = $('<div>').addClass('flex-item-caption-hdr').html($demoLink);
    var $captionBody = $('<div>').addClass('flex-item-caption-body').text(portfolio[i].synopsis);
    var $captionLink = $('<div>').addClass('flex-item-caption-button');
    if (portfolio[i].githubPrivate) var $aButton = $('<a>').attr('href', portfolio[i].githubLink).attr('target', '_blank').addClass('caption-button').text("GitHub is Private");
    else var $aButton = $('<a>').attr('href', portfolio[i].githubLink).attr('target', '_blank').addClass('caption-button').text("Read More on GitHub");
    
    $captionLink.append($aButton);

    $a.html($img);
    $div.append($a);
    $div.append($overlay);    

    $div.append($caption);
    $div.append($captionBody);
    $div.append($captionLink);

    $portLi.append($div);

    $('.port-well').append($portLi);
};


});