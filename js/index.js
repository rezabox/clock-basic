const hour = document.getElementById('hour');
const mints = document.getElementById('mints');
const second = document.getElementById('second');

let set_clock = setInterval(()=>{
   let date = new Date();
   let hr = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds(); 
   let scal_h = (hr * 7.5) + (m / 10);
   let scal_s = s * 6;
   let scal_m = (m * 6) + (s / 10);
   second.style.transform = `rotate(${scal_s}deg)`;
   mints.style.transform = `rotate(${scal_m}deg)`;
   hour.style.transform = `rotate(${scal_h}deg)`;
},1000)

