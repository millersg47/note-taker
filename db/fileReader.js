//pulled from week 11 activity 20. update to match this assignment
fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object
      const parsedReviews = JSON.parse(data);
  
      // Add a new review
      parsedReviews.push(newReview);
  
      // Write updated reviews back to the file
      fs.writeFile(
        './db/reviews.json',
        JSON.stringify(parsedReviews, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated reviews!')
      );
    }
  });
    