const quizQuestions = [
    {
        question: "Cybercrime primarily refers to:",
        opt1: "Theft of physical property",
        opt2: "Crimes involving the Internet and computers",
        opt3: "Crimes committed offline",
        opt4: "Environmental crimes",
        correct: "opt2",
    },
    {
        question: "Unauthorized access to a computer system without permission is called:",
        opt1: "Snooping",
        opt2: "Hacking",
        opt3: "Phishing",
        opt4: "Spamming",
        correct: "opt2",
    },
    {
        question: "Following a person’s online activities to harass or threaten them is known as:",
        opt1: "Cyberbullying",
        opt2: "Cyberstalking",
        opt3: "Snooping",
        opt4: "Phishing",
        correct: "opt2",
    },
    {
        question: "Which malware spreads automatically across networks consuming resources?",
        opt1: "Virusopt2",
        opt2: "Worm",
        opt3: "Trojan",
        opt4: "Rootkit",
        correct: "opt2",
    },
    {
        question: "Pretending to be someone else online is:",
        opt1: "Safe practice",
        opt2: "A form of cybercrime",
        opt3: "Respectful behavior",
        opt4: "Ethical communication",
        correct: "opt2",
    },
    {
        question: "The largest social media platform in terms of users is:",
        opt1: "Twitter",
        opt2: "LinkedIn",
        opt3: "Facebook",
        opt4: "Instagram",
        correct: "opt3",
    },
    {
        question: "LinkedIn is primarily used for:",
        opt1: "Sharing videos",
        opt2: "Professional networking",
        opt3: "Gaming",
        opt4: "Messaging",
        correct: "opt2",
    },
    {
        question: "Fake accounts sending scam links is an example of:",
        opt1: "Phishing",
        opt2: "Scamming",
        opt3: "Worm attack",
        opt4: "Trojan",
        correct: "opt2",
    },
    {
        question: "Malicious apps on smartphones may lead to:",
        opt1: "Faster Internet",
        opt2: "Network security risks",
        opt3: "Antivirus update",
        opt4: "Stronger firewall",
        correct: "opt2",
    },
    {
        question: "Messages pretending to be from trusted organizations to steal info are: ",
        opt1: "Spoofing",
        opt2: "Phishing",
        opt3: "Worms",
        opt4: "Spamming",
        correct: "opt2",
    },
    {
        question: "Hackers prefer social media because of:",
        opt1: "Entertainment",
        opt2: "Large personal data availability",
        opt3: "Antivirus support",
        opt4: "No risks",
        correct: "opt2",
    },
    {
        question: "A strong password should include:",
        opt1: "Only letters",
        opt2: "Letters, numbers, and special characters",
        opt3: "Only numbers",
        opt4: "Only symbols",
        correct: "opt2",
    },
    {
        question: "To stay safe, social media users should:",
        opt1: "Use one password everywhere",
        opt2: "Use different passwords for accounts",
        opt3: "Share passwords with friends",
        opt4: "Avoid using passwords",
        correct: "opt2",
    },
    {
        question: "Two-factor authentication adds:",
        opt1: "Extra storage",
        opt2: "Extra security",
        opt3: "Faster browsing",
        opt4: "Free services",
        correct: "opt2",
    },
    {
        question: "Which is an example of ransomware?",
        opt1: "Malware demanding payment to unlock files",
        opt2: "Free antivirus",
        opt3: "Rootkit installation",
        opt4: "Phishing email",
        correct: "opt1",
    },
    {
        question: "Spamming refers to:",
        opt1: "Sending unwanted bulk messages",
        opt2: "Encrypting passwords",
        opt3: "Installing antivirus",
        opt4: "Monitoring users",
        correct: "opt1",
    },
    {
        question: "Cybersecurity ensures:",
        opt1: "Unauthorized snooping",
        opt2: "Protection against malicious attacks",
        opt3: "Unlimited downloads",
        opt4: "Free access to websites",
        correct: "opt2",
    },
    {
        question: "The main difference between a worm and a virus is:",
        opt1: "Worms replicate automatically",
        opt2: "Viruses are harmless",
        opt3: "Worms are not malware",
        opt4: "Viruses spread faster",
        correct: "opt1",
    },
    {
        question: "A set of moral principles guiding online behavior is called:",
        opt1: "Cyber law",
        opt2: "Internet ethics",
        opt3: "Antivirus rules",
        opt4: "Malware control",
        correct: "opt2",
    },
    {
        question: "Messages pretending to be from trusted organizations to steal info are:",
        opt1: "Spoofing",
        opt2: "Phishing",
        opt3: "Worms",
        opt4: "Spamming",
        correct: "opt2",
    },
    {
        question: "YouTube is mainly:",
        opt1: "Audio-based",
        opt2: "Video-sharing platform",
        opt3: "Social networking only",
        opt4: "Messaging app",
        correct: "opt2",
    },
    {
        question: "Antivirus is a vaccine for",
        opt1: "virus",
        opt2: "Trojan",
        opt3: "Malware",
        opt4: "All of above",
        correct: "opt4",
    },
    {
        question: "Which of the following is NOT an antivirus software?",
        opt1: "McAfee",
        opt2: "Norton",
        opt3: "WhatsApp",
        opt4: "Kaspersky",
        correct: "opt3",
    },
    {
        question: "Which of the following is NOT a type of malware?",
        opt1: "virus",
        opt2: "Worm",
        opt3: "firewall",
        opt4: "Trojan",
        correct: "opt3",
    },
    {
        question: "Snooping differs from eavesdropping because snooping can also involve:",
        opt1: "Listening to phone calls only",
        opt2: "Monitoring computer activity and keystrokes",
        opt3: "Installing antivirus remotely",
        opt4: "Sending spam emails",
        correct: "opt2",
    },
    {
        question: "In eavesdropping, an attacker mainly tries to:",
        opt1: "Flood the network",
        opt2: "Secretly listen or intercept communication",
        opt3: "Destroy system files",
        opt4: "Install antivirus software",
        correct: "opt2",
    },
    {
        question: "Which of the following is a hardware or software system that filters incoming and outgoing network traffic?",
        opt1: "Virus scanner",
        opt2: "Worm",
        opt3: "Firewall",
        opt4: "Trojan",
        correct: "opt3",
    },
    {
        question: "Which feature is MOST important for a good antivirus software?",
        opt1: "Ability to play games",
        opt2: "Detecting and removing malware",
        opt3: "Encrypting passwords only",
        opt4: "Blocking social media usage",
        correct: "opt2",
    },
    {
        question: "The main difference between a Trojan horse and other malware is:",
        opt1: "It spreads automatically through networks",
        opt2: "It pretends to be legitimate software",
        opt3: "It encrypts the user’s files for ransom",
        opt4: "It always deletes system files",
        correct: "opt2",
    },
    {
        question: "Phishing attacks usually come in the form of:",
        opt1: "Fake emails or messages pretending to be trusted sources",
        opt2: "Antivirus updates",
        opt3: "Software installation prompts",
        opt4: "Hardware malfunction",
        correct: "opt1",
    },
    			
];

// DOM elements
const questionNumberElement = document.getElementById("question-number");
const questionTextElement = document.getElementById("question-txt");
const option1Element = document.getElementById("option1");
const option2Element = document.getElementById("option2");
const option3Element = document.getElementById("option3");
const option4Element = document.getElementById("option4");
const nextButton = document.getElementById("next-button");
const startQuizButton = document.getElementById("start-quiz");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
const totalQuestions = quizQuestions.length;

// Function to show the quiz section
function startQuiz() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    if (!name || !roll) {
        alert("Please enter your name and roll number to start the quiz.");
        return;
    }

    // Store user info
    localStorage.setItem("name", name);
    localStorage.setItem("roll", roll);

    // Hide user info and show quiz section
    document.getElementById("user-info").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    // Display the first question
    showQuestion();
}

// Function to display a question
function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        goToResultPage();
        return;
    }

    // Reset the timer
    resetTimer();

    // Get current question
    const question = quizQuestions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = question.question;
    option1Element.textContent = question.opt1;
    option2Element.textContent = question.opt2;
    option3Element.textContent = question.opt3;
    option4Element.textContent = question.opt4;

    // Clear previous selections
    document.querySelectorAll("input[name='opt']").forEach(input => (input.checked = false));
}

// Timer reset function
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = 30;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleNextQuestion();
        }
    }, 1000);
}

// Handle Next button click
function handleNextQuestion() {
    const selectedOption = document.querySelector("input[name='opt']:checked");
    const correctOption = quizQuestions[currentQuestionIndex].correct;

    if (selectedOption) {
        userAnswers.push(selectedOption.id);
        if (selectedOption.id === correctOption) {
            score++;
        }
    } else {
        userAnswers.push(null); // No selection
    }

    currentQuestionIndex++;
    showQuestion();
}

// Go to the result page
function goToResultPage() {
    clearInterval(timerInterval);

    // Store results in localStorage
    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", totalQuestions);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizData", JSON.stringify(quizQuestions));

    // Redirect to result page
    window.location.href = "resultpage.html";
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextQuestion);
