// function updateCountdown() {
//   const examDate = new Date("June 29, 2026 09:00:00").getTime();
//   const now = new Date().getTime();
//   const distance = examDate - now;

//   const countdownElement = document.getElementById("exam-countdown");
//   if (!countdownElement) return;

//   if (distance < 0) {
//     countdownElement.textContent = "ដល់ម៉ោងប្រឡងហើយ!";
//     return;
//   }

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   countdownElement.textContent = `${hours} ម៉ោង ${minutes} នាទី ${seconds} វិនាទី`;
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();

function updateClock() {
  const now = new Date();

  // Format Time (24-hour format: HH:MM:SS)
  const timeOptions = {
    timeZone: "Asia/Phnom_Penh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const timeString = new Intl.DateTimeFormat("en-US", timeOptions).format(now);
  document.getElementById("clock").textContent = timeString;

  // Format Date in Khmer script
  const dateOptions = {
    timeZone: "Asia/Phnom_Penh",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = new Intl.DateTimeFormat("km-KH", dateOptions).format(now);
  document.getElementById("date").textContent = dateString;
}

// Run the clock immediately, then update every 1 second
updateClock();
setInterval(updateClock, 1000);
