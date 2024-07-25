const questions = {
    easy: [
        [
            { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correct: "Hyper Text Markup Language" },
            { question: "What is the correct HTML element for inserting a line break?", answers: ["break", "br", "lb"], correct: "br" },
            { question: "Choose the correct HTML element for the largest heading:", answers: ["h1", "heading", "h6"], correct: "h1" },
            { question: "What is the correct HTML element for inserting a background color?", answers: ["background", "color", "style"], correct: "style" },
            { question: "Which character is used to indicate an end tag?", answers: [" / ", " < ", " ^ "], correct: " / " }
        ],
        // Add more sets for easy level
    ],
    medium: [
        [
            { question: "What is the correct CSS syntax?", answers: ["body {color: black;}", "{body;color:black;}", "body:color=black;"], correct: "body {color: black;}" },
            { question: "Which property is used to change the background color?", answers: ["background-color", "bgcolor", "color"], correct: "background-color" },
            { question: "How do you add a background color for all h1 elements?", answers: ["h1 {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}"], correct: "h1 {background-color:#FFFFFF;}" },
            { question: "Which CSS property is used to change the text color of an element?", answers: ["fgcolor", "color", "text-color"], correct: "color" },
            { question: "Which CSS property controls the text size?", answers: ["font-size", "text-size", "font-style"], correct: "font-size" }
        ],
        // Add more sets for medium level
    ],
    hard: [
        [
            { question: "Inside which HTML element do we put the JavaScript?", answers: ["js", "script", "scripting"], correct: "script" },
            { question: "Where is the correct place to insert a JavaScript?", answers: ["Both the head section and the body section are correct", "The head section", "The body section"], correct: "Both the head section and the body section are correct" },
            { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", answers: ["script name='xxx.js'", "script src='xxx.js'", "script href='xxx.js'"], correct: "script src='xxx.js'" },
            { question: "The external JavaScript file must contain the script tag.", answers: ["False", "True"], correct: "False" },
            { question: "How do you write 'Hello World' in an alert box?", answers: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');"], correct: "alert('Hello World');" }
        ],
        // Add more sets for hard level
    ]
};
