// Create variables for entries (array) and total


// Create a variable called temp that's an empty string

// Add an event listener on the button elements(they ues jQuery)
// This will trigger a function that assigns the the text of the button as the value of a variable called val (again, using jQuery and text())


// if val is a number or is '.', then add to temp temp += val

  // Select the #answer input $("#answer") and assign it the value of temp using substring(0,10) -this will limit our answer to 10 places


  // else if val is AC, set entries as an empty array, temp back to empty string, total = 0, set the val of #answer input field to an empty string


  // else if val is CE, set temp to an empty string, #answer input field to an empty string

  // else if val === X, push temp into entries, push * into entries, temp set to empty string

  // else if val === the division symbol, push temp into entries, push / into entries, temp to empty string

  // else if val === '=', entries push temp

    // Perform calculations
    // set var nt using Number method with entries array index 0 as parameter

    // set a for loop for less than the length of entries
      // set nextNum as Number() with entries[i+1]
      // set symbol as entries[i]

      // if the symbol === '+', then nt += nextNum
      // else if the symbol === '-', then nt -= nextNum
      // else if the symbol === '*', then nt *= nextNum
      // else if the symbol === '/', then nt /= nextNum

    // Increment the loop
  
  // Swap the '-' symbol so text input handles it correctly. Return absolute value
  // if nt < 0, then nt=Math.abs(nt) + '-'

    // #answer set val to nt
    // entries to empty array, temp to empty string
  
    // else entries push temp, entries push val, temp to empty string

  // End Function

    