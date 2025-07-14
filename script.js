const pages = [
    {
      title: "Clue #1",
      unlock: new Date("2025-07-14T15:30:00+02:00"),
      text: "From fright to flight, now time to sip,\nIn a tavern where sailors once let stories slip.\nMonkeys once paid for a drink or two,\nNow find this bar, its name’s your clue."
    },
    {
      title: "Clue #2",
      unlock: new Date("2025-07-14T17:00:00+02:00"),
      text: "Over the water, high in the sky,\nWhere swings dare you to nearly fly.\nCatch the ferry, no coins to pay,\nYour next thrill is just across the way."
    },
    {
      title: "Clue #3",
      unlock: new Date("2025-07-14T19:00:00+02:00"),
      text: "Among marble halls and velvet red,\nWhere trains arrive and stories are said.\nInside a station, but quiet and grand,\nA meal awaits—not far from land.\nGo where the first class once came to unwind,\nBehind closed doors… your table you'll find."
    },
    {
      title: "Clue #4",
      unlock: new Date("2025-07-14T21:30:00+02:00"),
      text: "A final door, discreet and low,\nWhere only those in-the-know may go.\nKnock three times, speak your name—\nA secret bar, the perfect endgame."
    }
  ];
  
  let currentClue = 0;
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const clueTitle = document.getElementById("clue-title");
  const clueText = document.getElementById("clue-text");
  const countdownEl = document.getElementById("countdown");
  const clueBox = document.getElementById("clue-box");
  
  const showPage = (id) => {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };
  
  const startHunt = () => {
    document.getElementById("bg-music").play();
    showCluePage();
  };
  
  const showCluePage = () => {
    if (currentClue >= pages.length) {
      showPage("end-page");
      return;
    }
  
    const page = pages[currentClue];
    clueTitle.textContent = page.title;
    showPage("page-clue");
    clueBox.classList.add("hidden");
    updateCountdown(page.unlock);
  };
  
  const updateCountdown = (unlockTime) => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = unlockTime - now;
  
      if (diff <= 0) {
        clearInterval(interval);
        countdownEl.textContent = "Clue unlocked!";
        clueBox.classList.remove("hidden");
        clueText.textContent = pages[currentClue].text;
      } else {
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        countdownEl.textContent = `Unlocks in ${mins}m ${secs}s`;
      }
    }, 1000);
  };
  
  startBtn.addEventListener("click", startHunt);
  nextBtn.addEventListener("click", () => {
    currentClue++;
    showCluePage();
  });
  