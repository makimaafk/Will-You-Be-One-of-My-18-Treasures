document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    const invitation = document.getElementById("invitation");
    const envelope = document.getElementById("envelope");

    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const backButton = document.getElementById("backButton");

    const starBackground = document.getElementById("starBackground");

    // Create animated stars
    function createStars() {
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("span");

            star.classList.add("star");
            star.textContent = Math.random() > 0.5 ? "✦" : "✧";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.fontSize = (Math.random() * 12 + 6) + "px";
            star.style.animationDelay = Math.random() * 3 + "s";
            star.style.animationDuration = (Math.random() * 3 + 2) + "s";

            starBackground.appendChild(star);
        }
    }

    createStars();

    // Open invitation
    function openInvitation() {
        envelope.classList.add("open");

        openButton.disabled = true;
        openButton.textContent = "Opening...";

        setTimeout(function () {
            intro.classList.add("hidden");
            invitation.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            openButton.disabled = false;
            openButton.textContent = "Open Invitation ✨";
        }, 800);
    }

    // Close invitation and return to envelope
    function closeInvitation() {
        invitation.classList.add("hidden");
        intro.classList.remove("hidden");
        envelope.classList.remove("open");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    openButton.addEventListener("click", openInvitation);
    closeButton.addEventListener("click", closeInvitation);
    backButton.addEventListener("click", closeInvitation);

    // Countdown to November 13, 2026, at 6:00 PM Philippine time
    const birthdayDate = new Date("2026-11-21T15:00:00+08:00").getTime();

    function updateCountdown() {
        const now = Date.now();
        const difference = birthdayDate - now;

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        const countdownElement = document.getElementById("countdown");

        if (difference <= 0) {
            countdownElement.innerHTML =
                "<p>The celebration day is here! ✨</p>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );
        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );
        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});