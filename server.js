// Importing the express module
const express = require("express");


// Creating an express application
const app = express();

// Function to add two numbers
const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}

// Function to subtracting two numbers
const subtraction = (num1,num2) =>{
    return num1 - num2;
}

// Function to multiplication two numbers
const multiplication = (num1,num2) =>{
    return num1 * num2;
}

// Function to division two numbers
const division = (num1,num2) =>{
    return num1 / num2;
}

// Function to exponentiation two numbers
const exponentiation = (num1,num2) =>{
    return num1**num2
}

// Function to sqaureroot a number
const sqaureroot = (num1) =>{
    return Math.sqrt(num1)
}

// Function to modulo operation two numbers
const modulo = (num1,num2) =>{
    return num1%num2
}

// Route to handle GET requests to "/addTwoNumber"
app.get("/addTwoNumber", (req, res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = addTwoNumber(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});


// Route to handle GET requests to "/subtraction"
app.get("/subtraction", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = subtraction(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/multiplication"
app.get("/multiplication", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = multiplication(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/division"
app.get("/division", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // This if function is to catch an error to see if the user trying to divide by 0.
        if(num2==0){
            throw new Error("Error! You can not divide by zero ")
        }
        // Calculating the result
        const result = division(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})


// Route to handle GET requests to "/exponentiation"
app.get("/exponentiation", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = exponentiation(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/sqaureroot"
app.get("/sqaureroot", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);

        // Handling errors using if to see the number is not a number or null for num1
        if(isNaN(num1)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = sqaureroot(num1);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/modulo"
app.get("/modulo", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = modulo(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})


// Defining the port for the server to listen on
const port = 3000;

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("listening on port " + port);
});
