
//let date1 = new Date(" 8 December, 11:23:00 PM ").getTime();
//let date = document.getElementById("getdate").innerHTML = getTime();

let date1 = new Date("December 8 2023 11:26:00 PM").toLocaleString();
// document.getElementById("getdate").innerHTML = date1.toDateString;  
 let customdate = new Date("January 1,2024 11:23:00").getTime();
  let timer = setInterval(timing, 1000);

  function timing(){

    let now = new Date().getTime();
    let x = customdate - now;

    if(x>0){

        let days = Math.floor(x / (1000*60*60*24));
     
        let hours = Math.floor((x % (1000*60*60*24)) / (1000*60*60));

        let mins = Math.floor((x % (1000*60*60))/ (1000*60));
        
        let secs = Math.floor((x % (1000*60)) / 1000);

        let time = `${days}Days : ${hours}Hours : ${mins}Minutes : ${secs}Seconds`;


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("secs").innerHTML = secs;

        


        // document.querySelector(".countdown").innerHTML = time;
        document.getElementById("getdate").innerHTML = date1; 
    }

  }


















// document.addEventListener('DOMContentLoaded', function () {
//     // Set the date we're counting down to (adjust the date as needed)
//     const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();

//     // Update the countdown every 1 second
//     const x = setInterval(function () {
//         const now = new Date().getTime();
//         const distance = countDownDate - now;

//         // Calculate days, hours, minutes, and seconds
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         // Display the countdown
//         document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//         // If the countdown is over, display a message
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById('countdown').innerHTML = 'EXPIRED';
//         }
//     }, 1000);
// });
