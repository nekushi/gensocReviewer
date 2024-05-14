alert("This will only work on mobile, thanks");

const divFirstPage = document.querySelector(".first-page")
const divSecondPage = document.querySelector(".second-page")
const divQuizArea = document.querySelector(".quiz-area")

const questionArea = document.querySelector("h1 + p")
const label = document.querySelector("label")
const input = document.querySelector("input")
const showAns = document.querySelector(".show-answer")
const span = document.querySelector("span")

const btnGetStarted = document.querySelector(".get-started")
const btnStart = document.querySelector(".start")

const questions = [
    {
        question: "it refers to changes to the sexual organs themselves.",
        answer: "Primary sex characteristics",
    }, 
    {
        question: "Pablo is born with the chromosomes XX. Based only on this information, which category of people does Pablo fall into?",
        answer: "Female",
    }, 
    {
        question: "it is a socially learned behavior which is usually associated with one’s sex.",
        answer: "Gender",
    }, 
    {
        question: "it is physical characteristic of an organism that is related to or derived from its sex, but not directly part of its reproductive system.",
        answer: "Secondary sex characteristics",
    }, 
    {
        question: `it is a “process by which individuals develop, refine and learn to ‘do’ gender through internalizing gender norms and roles as they interact with key agents of socialization, such as their family, social networks and other social institutions.`,
        answer: "Gender role socialization",
    }, 
    {
        question: "the Vatican said “marriage should be limited to a union between a man and a woman, and that same-sex marriage is not part of God’s plan for family and raising children”. What perception of gender is it?",
        answer: "External regulations",
    }, 
    {
        question: "it is the standard for correctness that is being attracted ONLY to the opposite sex.",
        answer: "Heteronormativity",
    }, 
    {
        question: "a generalized view or preconception about attributes, or characteristics that are or ought to be possessed by women and men or the roles that are or should be performed by men and women.",
        answer: "Gender stereotypes",
    }, 
    {
        question: "attraction to the opposite sex is called.",
        answer: "Heterosexual",
    }, 
    {
        question: "a person’s biological characteristics dictate their?",
        answer: "Sex",
    }, 
    {
        question: "a condition of having both male and female reproductive organs.",
        answer: "Hermaphroditism",
    }, 
    {
        question: "a steroid hormone that stimulates development of male secondary sexual characteristics.",
        answer: "Testosterone",
    }, 
    {
        question: "it involves various institutions dictating what is proper and normal based on one’s identity.",
        answer: "External regulations",
    }, 
    {
        question: "expectations regarding proper behavior for males and females.",
        answer: "Social norms",
    }, 
    {
        question: "it causes a person to police himself according to society’s standards and norms.",
        answer: "Internalized social-control",
    }, 
    {
        question: "Heterosexuality, homosexuality, and bisexuality are examples of?",
        answer: "Sexual orientation",
    }, 
    {
        question: "someone who is born genetically male and female is said to be?",
        answer: "Hermaphrodite or Intersexuality",
    }, 
    {
        question: "it refers to a person’s internal sense of being male, female, or something else.",
        answer: "Gender identity",
    }, 
    {
        question: "a baby identified as a male by their body (sex) who grows up and identifies as a man is an example of?",
        answer: "Cisgender",
    }, 
    {
        question: "the standard of correctness and belief that heterosexuality is the preferred or normal mode of sexual orientation.",
        answer: "Heteronormativity",
    }, 
    {
        question: "generalized view of traits that should be possessed by men and women.",
        answer: "Sex stereotypes",
    }, 
    {
        question: "it is the expression of a person’s thoughts, feelings, sexual orientation, and relationships.",
        answer: "Sexuality",
    }, 
    {
        question: "it is an umbrella term that refers to someone whose assigned sex at birth does not represents his or her gender identity.",
        answer: "Transgender",
    }, 
    {
        question: "a person who does not subscribe to conventional gender distinctions but identifies with neither, both, or a combination of male and female genders.",
        answer: "Genderqueer",
    }, 
    {
        question: "a term used to describe someone who does not experience sexual attraction toward individuals of any gender.",
        answer: "Asexual",
    }, 
    {
        question: "this assigned sex is called a person’s ______?",
        answer: "Natal sex",
    }, 
    {
        question: "it is an assumptions about a specific group belonging to a gender.",
        answer: "Compounded stereotypes",
    }, 
    {
        question: "it involves assumptions regarding a person’s sexuality that reinforce dominant views.",
        answer: "Sexual stereotypes",
    }, 
    {
        question: "it encompass the roles that men and women are assigned to base on their sex and what behaviors they must possess to fulfill these roles.",
        answer: "Sex-role stereotypes",
    }, 
    {
        question: "it is the way in which a person expresses a gender identity, typically through their appearance, dress, and behavior.",
        answer: "Gender expression",
    }, 
    {
        question: "now all of your friends are discussing the challenges in our society and coming up with ways to solve them if they ran the country. What dimension of wellness is being demonstrated?",
        answer: "Intellectual Wellness",
    }, 
    {
        question: "what dimension of Wellness focuses on a person’s ability to balance work and leisure time?",
        answer: "Occupational Wellness",
    }, 
    {
        question: `another one of your friends is at the cash register when he says, “oh, this is my last one-dollar bill. I spent too much money on ordering pizza yesterday.” What dimension of wellness does this person need to work on?`,
        answer: "Financial Wellness",
    }, 
    {
        question: "your friend just switched the conversation to politics. She believes the government should pay for more space exploration program, while you believe that money should go towards feeding the hungry. What dimension of wellness is being demonstrated during this conversation?",
        answer: "Spiritual Wellness",
    }, 
    {
        question: "your patient’s wife came in to visit today. She was impressed by his improvement, they chatted with each other in the hospital room until she had to go back to work. Which dimension of wellness is impacted?",
        answer: "Social Wellness",
    }, 
    {
        question: "it is the dimension of wellness includes working on your stress management techniques to control your feelings.",
        answer: "Emotional Wellness",
    }, 
    {
        question: "at the hospital, your patient is looking for your support after his surgery. It boosts his confidence when you encourage him to take another step and when he reaches the next goal of his therapy session. What dimension of wellness impacted him?",
        answer: "Social Wellness",
    }, 
    {
        question: "you and your friends go out for ice cream. Your one friend is trying to work on their diet so they choose the light option of frozen yogurt. What dimension of wellness is this person working on?",
        answer: "Physical Wellness",
    }, 
    {
        question: "while at the ice cream shop, you notice your surroundings and how well organized the dining area is. The other customers seem very satisfied with their dessert. What dimension of wellness is being impacted?",
        answer: "Environmental Wellness",
    }, 
    {
        question: "after a stressful day, you decided to release some negative energy by hanging out with some friends. What dimension of wellness is impacted?",
        answer: "Social Wellness",
    }, 
    {
        question: "a field of science which concerns itself with human person’s realities and experiences as part of groups and institutions, including the structures and functions and the dynamics of human relationships.",
        answer: "Sociology",
    }, 
    {
        question: "it is often assessed using indicators that measure aspects of education, physical and built environment, community, and economy.",
        answer: "Objective well-being or Objective",
    }, 
    {
        question: "it refers to language that avoids gender stereotyping.",
        answer: "Gender fair language",
    }, 
    {
        question: "it pertains to people’s actions.",
        answer: "Behavior",
    }, 
    {
        question: "it is the process of internalizing the norms and ideologies of society.",
        answer: "Socialization",
    }, 
    {
        question: "it is the state of extreme emotional closeness.",
        answer: "Intimacy",
    }, 
    {
        question: "it is social script ascribed to individuals pertaining to their role in economic production and related task such as engaging in public affairs and living in the world of work.",
        answer: "Productive role",
    }, 
    {
        question: "it refers to people’s thought processes such as memory, perception, and information-processing.",
        answer: "Cognitive",
    }, 
    
    {
        question: "it is discrimination, prejudice, or stereotyping based on gender, and is most often expressed toward women and girls.",
        answer: "Sexism",
    }, 
    {
        question: "the social script ascribed to individuals pertaining to their role in child bearing or child-rearing and related tasks such as maintaining the household.",
        answer: "Reproductive role",
    }, 
    {
        question: "it refers to how people experience and evaluate their lives and specific domains and activities in their lives.",
        answer: "Subjective well-being or Subjective",
    }, 
    {
        question: "our ______ and gender-related behaviors are originated from what we SENSE, THINK, and FEEL.",
        answer: "Sexual behavior",
    }, 
    {
        question: "it is kind of behavior that is observable and measurable.",
        answer: "Overt behavior or Overt",
    }, 
    {
        question: "it is a tool that reinforce unequal gender relations ",
        answer: "Sexist in language",
    }, 
    {
        question: "a field of science which concerns itself with how people think and feel and how thoughts and feelings interact and lead to behavior.",
        answer: "Psychology",
    }, 
    {
        question: "it is self-focused attention and knowledge.",
        answer: "Self-awareness or Self awareness",
    }, 
    {
        question: "the ultimate goal of understanding psychological aspects of our experiences.",
        answer: "Well being or Well-being",
    }, 
    {
        question: "it is the use of language which devalues members of one sex, almost invariably women, thus fosters gender inequality.",
        answer: "Sexism in language",
    }, 
    {
        question: "it refers to unobservable activities that lead to specific actions.",
        answer: "Covert behavior or Covert",
    }, 
    {
        question: "is rooted in the assumption that men are dominant and are the norm of the fullness of humanity.",
        answer: "Invisibilization of women",
    }, 
    {
        question: "anything associated with mental processes and behavior.",
        answer: "Psychological",
    }, 
    {
        question: "it can also be forms of micro aggression if the underlying perceptions are sexist and degrading.",
        answer: "Hidden assumptions",
    }, 
    {
        question: "it pertains to people’s emotions and feelings.",
        answer: "Affective",
    }, 
    {
        question: "it articulates consciousness, reflects culture, and affects socialization.",
        answer: "Language",
    }, 
    {
        question: "the ______ perspective focuses on exploring and understanding human sexuality in the lens of psychological and social process.",
        answer: "Psychosocial",
    }, 
]

let rngQuestion;

btnGetStarted.onclick = function() {
    divFirstPage.style.display = "none";
    divSecondPage.style.display = "block";
}
btnStart.onclick = function() {
    divSecondPage.style.display = "none";
    divQuizArea.style.display = "flex";
    rngQuestion = Math.floor(Math.random() * questions.length);
    questionArea.textContent = `${questions[rngQuestion].question}`;
}

showAns.onclick = function() {
    if (showAns.textContent === "Show Answer!") {
        let ans = input.value.toLowerCase();
        if (ans === questions[rngQuestion].answer.toLowerCase() || questions[rngQuestion].answer.toLowerCase().match(ans)) {
            input.style.color = "#66ff66";
        } else {
            input.style.color = "#ff0000";
        }
        span.textContent = questions[rngQuestion].answer;
        showAns.textContent = "Next!";

        questions.splice(rngQuestion, 1);
        // console.log(questions.length);
    } else if (showAns.textContent === "Next!") {
        input.style.color = "#ffffff";
        input.value = "";
        span.textContent = "";
        rngQuestion = Math.floor(Math.random() * questions.length);
        questionArea.textContent = `${questions[rngQuestion].question}`;
        showAns.textContent = "Show Answer!";
    }
}