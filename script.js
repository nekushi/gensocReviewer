const divFirstPage = document.querySelector(".first-page")
const divSecondPage = document.querySelector(".second-page")
const divQuizArea = document.querySelector(".quiz-area")
const divResultArea = document.querySelector(".result-area")

const questionArea = document.querySelector("h1 + p")
const label = document.querySelector("label")
const input = document.querySelector("input")
const span = document.querySelector(".p-correct-answer")
// const scoreboard = document.querySelector('.new-scoreboard')

const btnGetStarted = document.querySelector(".get-started")
const btnStart = document.querySelector(".start")
const showAns = document.querySelector(".show-answer")
const restart = document.querySelector(".restart")

const correctScore = document.querySelector(".correct > span")
const incorrectScore = document.querySelector(".incorrect > span")
const percentage = document.querySelector(".percentage > span")
const remarks = document.querySelector(".remarks > span")

const resultCorrectScore = document.querySelector(".result-correct > span")
const resultIncorrectScore = document.querySelector(".result-incorrect > span")


const questions = [
    {
        question: "form of structure of expressions",
        answer: "Syntax",
    }, 
    {
        question: "meaning of expressions",
        answer: "Semantics",
    }, 
    {
        question: "string of characters",
        answer: "Sentence",
    }, 
    {
        question: "set of sentences",
        answer: "Language",
    }, 
    {
        question: `lowest level syntactic unit`,
        answer: "Lexeme",
    }, 
    {
        question: "category of lexemes",
        answer: "Token",
    }, 
    {
        question: "By Noam Chomsky; language generators, class of languages",
        answer: "Context Free Grammar",
    }, 
    {
        question: "1959; by John Backus; to describe Algol 58; (equvalent) to Context Free Grammar",
        answer: "Backus Normal Form",
    }, 
    {
        question: "to describe another language",
        answer: "Metalanguage",
    }, 
    {
        question: "represents classes of syntactic structures",
        answer: "Abstraction",
    }, 
    {
        question: "has left and right hand side; consists of terminal and nonterminal symbols",
        answer: "Rule",
    }, 
    {
        question: "finite nonempty set of rules",
        answer: "Grammar",
    }, 
    {
        question: "repeated application of rules",
        answer: "Derivation",
    }, 
    {
        question: "in square brackets []",
        answer: "Optional parts",
    }, 
    {
        question: "in parenthesis (), and separated by vertical bar |",
        answer: "Alternative parts",
    }, 
    {
        question: "in curly braces {}",
        answer: "Repetitions",
    }, 
    {
        question: "terminals in circles and non-terminals in rectangles",
        answer: "Syntax Graph",
    }, 
    {
        question: "process of tracing or constructing a parse tree for input string",
        answer: "Parsing",
    }, 
    {
        question: "analyze lexemes",
        answer: "Lexical Analyzer",
    }, 
    {
        question: "no single notation for describing semantics",
        answer: "Dynamic Semantics",
    }, 
    {
        question: "describe the meaning of a program by executing its statements on a machine",
        answer: "Operational Semantics",
    }, 
    {
        question: "based on formal logic",
        answer: "Axiomatic Semantics",
    }, 
    {
        question: "expressions",
        answer: "Assertions",
    }, 
    {
        question: "assertion before statement",
        answer: "Precondition",
    }, 
    {
        question: "assertion following/after statement",
        answer: "Postcondition",
    }, 
    {
        question: "based on recursive function theory",
        answer: "Denotational Semantics",
    }, 
    {
        question: "anything that vary",
        answer: "Length",
    }, 
    {
        question: "building block",
        answer: "Connectors",
    }, 
    {
        question: "affects things to be interpreted by the system",
        answer: "Case Sensitive",
    }, 
    {
        question: "reserved words, keywords",
        answer: "Special Words",
    }, 
    {
        question: "storage location; different address;  can be characterized by a collection of properties, or attributes, the most important of which is type, a fundamental concept in programming languages",
        answer: "Variable",
    }, 
    {
        question: "harmful to readability",
        answer: "Aliases",
    }, 
    {
        question: "ssumption during optimization",
        answer: "Aliasing",
    }, 
    {
        question: "collection of cells",
        answer: "Abstract Memory Cell",
    }, 
    {
        question: "variable address",
        answer: "l-value",
    }, 
    {
        question: "variable value",
        answer: "r-value",
    }, 
    {
        question: "association, such as between an attribute and an entity, or between an operation and a symbol",
        answer: "Binding",
    }, 
    {
        question: "time at which binding takes place",
        answer: "Binding Time",
    }, 
    {
        question: "occurs before run time (explicit or implicit)",
        answer: "Binding is Static",
    }, 
    {
        question: "occurs during execution",
        answer: "Binding is Dynamic",
    }, 
    {
        question: "program statement for declaring the types of variables",
        answer: "Explicit declaration",
    }, 
    {
        question: "default mechanism for specifying types of variables",
        answer: "Implicit declaration",
    }, 
    {
        question: "to assign types to entities",
        answer: "Type Inferencing",
    }, 
    {
        question: "getting a cell from available cells",
        answer: "Allocation",
    }, 
    {
        question: "putting a cell back",
        answer: "Deallocation",
    }, 
    {
        question: "operands of operator are of compatible types",
        answer: "Type Checking",
    }, 
    {
        question: "either legal for operator, or allowed  under language rules to be implicitly converted (coercion)",
        answer: "Compatible Types",
    }, 
    {
        question: "automatic conversion",
        answer: "Coercion",
    }, 
    {
        question: "operator to and operand of an inappropriate type",
        answer: "Type Error",
    }, 
    {
        question: "range of statements",
        answer: "Scope",
    }, 
    {
        question: "determine at compile-time",
        answer: "Static Scope",
    }, 
    {
        question: "search declarations",
        answer: "Search Process",
    }, 
    {
        question: "enclosing static scopes",
        answer: "Static Ancestors",
    }, 
    {
        question: "nearest static ancestor",
        answer: "Static Parent",
    }, 
    {
        question: "method in creating static scopes",
        answer: "Blocks",
    }, 
    {
        question: "determined at runtime",
        answer: "Dynamic Scope",
    }, 
    {
        question: "collection of all names",
        answer: "Referencing Environments",
    }, 
    {
        question: "variable that is bound to a value",
        answer: "Named Constants",
    }, 
    {
        question: "binding of variable to a value at the time it is bound to storage",
        answer: "Variable Initialization",
    }, 
    {
        question: "the time during which it is bound to a particular memory cell",
        answer: "lifetime or lifetime of a variable",
    }, 
    {
        question: "Who must use language definitions? (3)",
        answer: "LanguageDesigners Implementors Programmers",
    }, 
    {
        question: "Formal approaches to describing syntax (2)",
        answer: "Recognizers Generators",
    }, 
    {
        question: "Categories of Static Semantics (2)",
        answer: "ContextFree NoncontextFree",
    }, 
    {
        question: "Primary Value of Attribute Grammars",
        answer: "StaticSemanticsSpecification CompilerDesign",
    }, 
    {
        question: "Possible Binding Time",
        answer: "LanguageDesignTime LanguageImplementationTime CompileTime LoadTime Runtime",
    }, 
    {
        question: "bound to memory cells before execution",
        answer: "Static",
    },
    {
        question: "storage bindings are created for variables when their declaration statements are elaborated",
        answer: "Stack Dynamic",
    },
    {
        question: "allocated and deallocated by explicit derivatives",
        answer: "Explicit Heap – Dynamic",
    },
    {
        question: "allocation and deallocation caused by assignment statements",
        answer: "Implicit Heap – Dynamic",
    },
    {
        question: "Categories of Variables by Lifetime",
        answer: "Static StackDynamic ExplicitHeap–Dynamic ImplicitHeap–Dynamic",
    },
]

let rngQuestion;
const rngQuestionLength = questions.length;

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
        let ans = input.value.toLowerCase().trim();
        if (ans === "") {
            incorrectScore.textContent = parseInt(incorrectScore.textContent) + 1;
        } else if (ans === questions[rngQuestion].answer.toLowerCase() || questions[rngQuestion].answer.toLowerCase().match(ans)) {
            input.style.color = "#66ff66";
            correctScore.textContent = parseInt(correctScore.textContent) + 1;
        } else if (ans !== questions[rngQuestion].answer.toLowerCase()) {
            input.style.color = "#ff0000";
            incorrectScore.textContent = parseInt(incorrectScore.textContent) + 1;
        }
        span.textContent = questions[rngQuestion].answer;
        showAns.textContent = "Next!";

        questions.splice(rngQuestion, 1);
    } else if (showAns.textContent === "Next!") {
        input.style.color = "#ffffff";
        input.value = "";
        span.textContent = "";
        rngQuestion = Math.floor(Math.random() * questions.length);
        questionArea.textContent = `${questions[rngQuestion].question}`;
        showAns.textContent = "Show Answer!";
    } else if (showAns.textContent === "Show Result!") {
        divQuizArea.style.display = "none";
        divResultArea.style.display = "flex";
        resultCorrectScore.textContent = correctScore.textContent;
        resultIncorrectScore.textContent = incorrectScore.textContent;
        percentage.textContent = `${Math.round((resultCorrectScore.textContent / (parseInt(resultCorrectScore.textContent) + parseInt(resultIncorrectScore.textContent))) * 100)}%`;
        remarks.textContent = parseInt(percentage.textContent) >= 80 ? "80% or above, nice." : "review lang GLGLGL!";
    }

    if (parseInt(correctScore.textContent) + parseInt(incorrectScore.textContent) === rngQuestionLength) {
        showAns.textContent = "Show Result!";
    }
}

restart.onclick = function() {
    location.reload();
}

// console.log(questions.length);