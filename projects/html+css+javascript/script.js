questionElement = document.querySelector("#question");
answersElement = document.querySelector("#answers");
var results = [];
let currentQuestion = 0;
let category = '';
var genre = "";

var quizQuestions = [
    {
      question: "Which of the following best describes you getting back to work after a holiday?",
      answers: [
        {
          type: "Productivity",
          content: "https://media.makeameme.org/created/now-lets-get-onae4y.jpg",
        },
        {
          type: "Romance",
          content: "https://i.pinimg.com/originals/b0/b4/b4/b0b4b49b177c9000250f056470d47252.jpg",
        },
        {
          type: "Fiction",
          content: "https://media.makeameme.org/created/day-dreaming-about-59bf01.jpg",
        },
        {
          type: "Mythology",
          content: "https://pbs.twimg.com/media/D_TLMQ4XUAEyScI?format=jpg&name=900x900",
        },
      ],
    },
    {
      question: "How do you cope with stressful situations?",
      answers: [
        {
          type: "Productivity",
          content: "https://i.imgflip.com/7iaogn.jpg",
        },
        {
          type: "Romance",
          content: "https://media.makeameme.org/created/and-they-all-fd8eae.jpg",
        },
        {
          type: "Fiction",
          content: "https://i.imgflip.com/7iapjn.jpg",
        },
        {
          type: "Mythology",
          content: "https://www.happierhuman.com/wp-content/uploads/2022/04/funny-memes-work-stress-fairygodboss-story-of-my-life.jpg",
        },
      ],
    },
    {
      question: "Which of these fashion memes you wish to be true?",
      answers: [
        {
          type: "Productivity",
          content: "http://www.quickmeme.com/img/da/dae763172a0c719f79ffba9cc94d8022053d509ebf4884f10f89c03c8e4c1a21.jpg",
        },
        {
          type: "Romance",
          content: "https://scontent.fbom66-1.fna.fbcdn.net/v/t1.6435-9/93426669_163798765094212_1816963585037828096_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=110474&_nc_ohc=w6fx0BH8BGcAX_NFjFX&_nc_ht=scontent.fbom66-1.fna&oh=00_AfB5_9M44M6Qj_JB2WjAk3FWlYcZbSHOdkmeKJKnGQ33TA&oe=64755EE5",
        },
        {
          type: "Fiction",
          content: "https://i.imgflip.com/7k04ux.jpg",
        },
        {
          type: "Mythology",
          content: "https://i.imgflip.com/7k095j.jpg",
        },
      ],
    },
    {
      question: "Which one of these movies is your vibe?",
      answers: [
        {
          type: "Productivity",
          content: "https://m.media-amazon.com/images/M/MV5BMGE0OWUyMTktNjNjNi00ZTg0LWE1N2MtMzEzYjdhNjM5M2M5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        },
        {
          type: "Romance",
          content: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        },
        {
          type: "Fiction",
          content: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg",
        },
        {
          type: "Mythology",
          content: "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
        },
      ],
    },
    {
      question: "Which doggo represents your aesthetic?",
      answers: [
        {
          type: "Productivity",
          content: "https://i.dailymail.co.uk/i/pix/2016/03/28/00/2FB572A700000578-0-image-a-9_1459120952581.jpg",
        },
        {
          type: "Romance",
          content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM-N2IaSxeTwA2XrlWXxUYKxp246qHOW-gw&usqp=CAU",
        },
        {
          type: "Fiction",
          content: "https://thumbs.dreamstime.com/b/dog-wearing-kings-crown-17713329.jpg",
        },
        {
          type: "Mythology",
          content: "https://st.depositphotos.com/1913515/1700/i/950/depositphotos_17007029-stock-photo-siberian-husky-dog-reading-a.jpg",
        },
      ],
    },
]

const number = quizQuestions.length

const displayQuestionOne = (currentQuestion) => {
  questionElement.innerHTML = quizQuestions[currentQuestion].question;
  quizQuestions[currentQuestion].answers.forEach((x) => {
    const label = document.createElement("label");
    label.style.display= "flex";
    label.style.flexDirection= "row";
    label.style.alignItems= "spaceAround";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "radioGroup";
    input.value = x.type;

    const image = document.createElement("img");
    image.src = x.content;
    image.htmlFor = x.type;
    image.style.width = '12rem';

    answersElement.appendChild(label);
    label.appendChild(input);
    label.appendChild(image);
    
  });
};

const displayQuestion = (currentQuestion) => {
  questionElement.innerHTML = quizQuestions[currentQuestion].question;
  const images = document.getElementsByTagName('img');
    for (var i=0; i<4; i++) {
      images[i].src = quizQuestions[currentQuestion].answers[i].content;
    };
};

const nextQuestion = () => {
  const option = document.getElementsByTagName('input').checked==true;
  chooseAnswer(option);
  currentQuestion++;
  if (currentQuestion < number-1){
    displayQuestion(currentQuestion);
  } else {
    displayQuestion(currentQuestion);
    const done = document.querySelector('button');
    done.innerHTML = 'Done'
  }
  
};

const chooseAnswer = () => {
  const selected = document.querySelector(   
  'input[name="radioGroup"]:checked');
  console.log(selected.value);
  results.push(selected.value);
  if (currentQuestion === number-1){
    document.querySelector('button').onclick = location.href='./result.html'
  }
  final();
};

const final = () => {
  if (currentQuestion===number-1){
    category = mode(results);
    console.log(category);
    localStorage.setItem("genre", category);
  }
  else {
    console.log('keep going');
  }
}

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}

displayQuestionOne(currentQuestion);


