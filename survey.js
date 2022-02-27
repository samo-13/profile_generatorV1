const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer1) => {
  console.log(`Thank you for your answer: ${answer1}`);

  rl.question('What\'s an activity you like doing?: ', (answer2) => {
    console.log(`Thank you for your answer: ${answer2}`);

    rl.question('What do you listen to while doing that?: ', (answer3) => {
      console.log(`Thank you for your answer: ${answer3}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (answer4) => {
        console.log(`Thank you for your answer: ${answer4}`);

        rl.question('What\'s your favourite thing to eat for that meal?: ', (answer5) => {
          console.log(`Thank you for your answer: ${answer5}`);

          rl.question('Which sport is your absolute favourite?: ', (answer6) => {
            console.log(`Thank you for your answer: ${answer6}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (answer7) => {
              console.log(`Thank you for your answer: ${answer7}`);

              console.log(`Your name is ${answer1}`);
              console.log(`You like ${answer2}`);
              console.log(`You listen to ${answer3} during ${answer2}`);
              console.log(`You favourite meal is ${answer4}`);
              console.log(`You like to eat ${answer5} during ${answer4}`);
              console.log(`Your favorite sport is ${answer6}`);
              console.log(`Your superpower is ${answer7}`);
      
  rl.close();
  
            })
          })
        })
      })
    })
  })
});


//   rl.close();

// });



//   rl.close();

// });

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

// rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
//   console.log(`Thank you for your answer: ${answer}`);

//   rl.close();

// });

// // 
// // 
// // 




// // https://github.com/nodejs/node/blob/master/doc/api/readline.md