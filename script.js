const pages = [
    {
      title: "Clue #1",
      unlock: new Date("2025-07-16T10:00:00Z"),
      text: `A little darkness, a little fear,
  But laughter will echo while you’re here.
  Face the ghosts, the jokes, the scream—
  The day begins, like a haunted dream.`,
      hint: "It's spooky and theatrical… and underground.",
      answer: "<a href='https://maps.app.goo.gl/NSQknoit72wkvHDS7' target='_blank'>The Amsterdam Dungeon</a>"
    },
    {
      title: "Clue #2",
      unlock: new Date("2025-07-16T13:00:00Z"),
      text: `From fright to flight, now time to sip,
  In a tavern where sailors once let stories slip.
  Monkeys once paid for a drink or two,
  Now find this bar, its name’s your clue.`,
      hint: "Look near Zeedijk. Think: monkeys. 🍌",
      answer: "<a href='https://maps.app.goo.gl/MtErQ7iyqEaumwY69' target='_blank'>In 't Aepjen</a>"
    },
    {
      title: "Clue #3",
      unlock: new Date("2025-07-16T14:30:00Z"),
      text: `Over the water, high in the sky,
  Where swings dare you to nearly fly.
  Catch the ferry, no coins to pay,
  Your next thrill is just across the way.`,
      hint: "You'll need to ride a free ferry behind Centraal.",
      answer: "<a href='https://maps.app.goo.gl/AHnFHKHHE5R8Aan9A' target='_blank'>A'DAM Lookout</a>"
    },
    {
      title: "Clue #4",
      unlock: new Date("2025-07-16T16:30:00Z""),
      text: `Among marble halls and velvet red,
  Where trains arrive and stories are said.
  Inside a station, but quiet and grand,
  A meal awaits—not far from land.
  Go where the first class once came to unwind,
  Behind closed doors… your table you'll find.`,
      hint: "Go to Centraal, near Track 2B.",
      answer: "<a href='https://maps.app.goo.gl/96Di62zneCpDL2M98' target='_blank'>Grand Café Restaurant 1e Klas</a>"
    },
    {
      title: "Clue #5",
      unlock: new Date("2025-07-16T19:00:00Z"),
      text: `A final door, discreet and low,
  Where only those in-the-know may go.
  Knock three times, speak your name—
  A secret bar, the perfect endgame.`,
      hint: "Look for a speakeasy near Rembrandtplein.",
      answer: "<a href='https://maps.app.goo.gl/2UCK8cBRnbW45Ren6' target='_blank'>Door74</a>"
    }
  ];
  
  let currentClue = 0;
  
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const clueTitle = document.getElementById("clue-title");
  const clueText = document.getElementById("clue-text");
  const clueHint = document.getElementById("clue-hint");
  const clueAnswer = document.getElementById("clue-answer");
  const hintBtn = document.getElementById("hint-btn");
  const revealAnswerBtn = document.getElementById("reveal-answer-btn");
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
    clueText.textContent = "";
    clueHint.textContent = page.hint;
    clueHint.classList.add("hidden");
    clueAnswer.innerHTML = page.answer;
    clueAnswer.classList.add("hidden");
  
    // Show or hide previous button
    prevBtn.style.display = currentClue > 0 ? "inline-block" : "none";
  
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
        const hours = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        countdownEl.textContent = `Unlocks in ${hours}h ${mins}m ${secs}s`;
      }
    }, 1000);
  };
  
  // Event listeners
  startBtn.addEventListener("click", startHunt);
  
  hintBtn.addEventListener("click", () => {
    clueHint.classList.remove("hidden");
  });
  
  revealAnswerBtn.addEventListener("click", () => {
    clueAnswer.classList.remove("hidden");
  });
  
  nextBtn.addEventListener("click", () => {
    currentClue++;
    showCluePage();
  });
  
  prevBtn.addEventListener("click", () => {
    if (currentClue > 0) {
      currentClue--;
      showCluePage();
    }
  });
  
