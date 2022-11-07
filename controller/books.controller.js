
const fs = require("fs");
// const Book = require("../assets/books.json");
// const Team = require("../assets/team.json");

// Get All Books
exports.getAllBooks = async (req, res) => {

  try {
    fs.readFile("../assets/books.json", function(err, data) {
      
        // Check for errors
       if(err){
        console.log("Error")
       }
       
        // Converting to JSON
        let books = JSON.parse(data);
          
        console.log(books); // Print users 
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.getTeamInfo = async (req, res) => {

    try {
      Team.readFile("../assets/team.json", function(err, data) {
        
          // Check for errors
          if (err) throw err;
         
          // Converting to JSON
          const team = JSON.parse(data);
            
          console.log(team); // Print users 
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  };
  

