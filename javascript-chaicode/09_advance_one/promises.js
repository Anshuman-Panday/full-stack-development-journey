const promiseOne = new Promise(function (resolve, reject) {
  // Do and async task
  // DB calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 2000)
});

  promiseOne.then( function () {
    console.log("Promise is consumed");
  });

  new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('Async task 2')
      resolve()
    }, 2000);
  })
  .then( () => {
    console.log("Promise two resolved");
  })

  const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve({username: 'chaiaurcode', email: 'chai@example.com'})
  },1000)
  });

  promiseThree.then( (user) => {
    console.log(user)
  });

  const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
      let error = false;
      if(!error){
        resolve({username: 'Ansh', password: '123'})
      } else {
      reject('Some error occurred')
      }
  },1000)
})

promiseFour
.then( (user) => {
  console.log(user)
  return user.username;
}).then( (username) => {
  console.log(username)
}).catch( (error) => {
  console.log(error)
}).finally( () => {
  console.log("Finally the promise is either resolved or rejected")
});

const promiseFive = new Promise( (resolve, reject) => {
  setTimeout( () => {
      let error = true;
      if(!error){
        resolve({username: 'Javascript', password: '123'})
      } else {
      reject('ERROR: JS went wrong')
      }
  },1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();

async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}

getAllUsers();