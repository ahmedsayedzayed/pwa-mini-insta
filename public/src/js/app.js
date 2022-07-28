var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
      console.log("Service worker registered!");
    })
    .catch(function (err) {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("This Is Excuted after once tomer is done !");
//     // reject({
//     //   code: 200,
//     //   message: "This Is Excuted after once tomer is done !",
//     // });

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://httpbin.org/get");
//     xhr.responseType = "json";
//     xhr.onload = function () {
//       console.log(xhr.response);
//     };
//     xhr.send();
//     fetch("http://httpbin.org/get")
//       .then((res) => {
//         console.log(res);
//         return res.json();
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     ///
//     fetch("http://httpbin.org/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ message: "POST REQ WORKS" }),
//       mode: "cors",
//     })
//       .then((res) => {
//         console.log(res);
//         return res.json();
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, 3000);
// });

// promise
//   .then(
//     (result) => {
//       console.log(result);
//       return result;
//     },
//     (err) => {
//       console.log(err);
//       throw err;
//     }
//   )
//   .then(
//     (newText) => {
//       console.log(newText + "2");
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// // .catch(err => {
// //   console.log(err);
// // });

// console.log("This Excuted Aftert Timeout");
