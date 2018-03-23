//
// function checkRequest(){
//   // if(document.querySelector('input[name="username"]').value || document.querySelector('input[name="username"]').value){
//     // let username = document.querySelector('input[name="username"]').value;
//     // let pass = document.querySelector('input[name="password"]').value;
//     // let url = '/login/'+username;
//     //
//     // fetch(url)
//     //     .then((data) => {
//     //       console.log('success');
//     //       // printMessage("success");
//     //     })
//     //       .catch(function(error) {
//     //         console.log(error);
//     //
//     //       });
//     // console.log('check');
//   // }
//
// }

  function registerUser(){
    let fname = document.querySelector('input[name="fname"]').value;
    let username = document.querySelector('input[name="username"]').value;
    let pass = document.querySelector('input[name="password"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let url = '/login/register';

    fetch(url, {
      headers: {
       "Content-Type": "application/json",
       "Accept": "application/json, text-plain, */*",
       "X-Requested-With": "XMLHttpRequest"
     },
       method: 'post',
       body: JSON.stringify({
        fname: fname,
        username : username,
        pass : pass,
        email : email
      })
     })
        .then((data) => {
          console.log('success');
          // printMessage("success");
        })
          .catch(function(error) {
            console.log(error);

          });
  }

  // function printMessage(message){
  //   let messageContainer = document.querySelector('.message');
  //   if(message == "success"){
  //     let message = `<h3>User created with success!!</h3>`;
  //     messageContainer.innerHTML += message;
  //   }
  //   else {
  //     let message = `<h3>There was an error. Try again!</h3>`;
  //     messageContainer.innerHTML += message;
  //   }
  // }

module.exports = {
  // checkRequest : checkRequest,
  registerUser : registerUser
}
