const Request = require('request-promise');

const facts = [
  'Chuck Norris’s full name is Carlos Ray Norris.',
  'Norris’ father, Ray Dee Norris, was a World War II soldier and a man of many talents. Sadly he was also an alcoholic.',
  'Norris was named after his father’s minister, Carlos Berry.',
  'Norris has two younger brothers, Wieland and Aaron. Aaron is a Hollywood producer.',
  'He was an introvert at school; Norris was not athletic and was academically mediocre.',
  'Norris has shared that his parent’s unstable finances and the embarrassment of his father’s alcoholism are the main reasons for his introverted character as a child.',
  'Norris is best known for his acting, but he is a man of many talents. He is a martial artist, film producer, screenwriter, and he was an air policeman for the US Air Force.',
  'Norris married his high school sweetheart Dianne Kay Holechek. He was age 18, and she was 17 years old.',
  'In 1958 Norris became an Air Policeman for the United States Air Force. He was posted to Osan Air Base in South Korea.',
  'While on the waiting list for the police force, in 1962, Norris opened his first martial arts studio.',
  'Norris created his own form of martial art called Chun Kuk Do, which means Universal Way.',
  'The Chun Kuk Do world championship tournament is held every summer in Las Vegas, Nevada.',
  'In 1969, Black Belt magazine awarded Norris the Fighter of the Year award.',
  'In 1969, he was awarded Karate’s Triple Crown for having the most tournament wins in the year.',
  '1972 saw Norris appear alongside Bruce Lee as his nemesis in Way of the Dragon, known as Return of the Dragon in the US.',
  'In 1975 Norris published his first book titled Winning Tournament Karate.',
  'In 1982 Norris won the Action Star of the Year award at the ShoWest Convention.',
  'The first video game based on Norris was released in 1983. It was called Chuck Norris Superkicks.',
  'His acting career really started to take off when Cannon Films signed Norris into a multiple film deal. The first film was Missing in Action, which was released in 1984.',
  'Another of Norris’ famous acting features was in The Delta Force, which premiered on February 14, 1986.',
  'Norris became Cannon’s leading star during the 1980s.',
  'Norris voiced a cartoon version of himself in six episodes of the cartoon Karate Kommandos. Marvel later published a comic book based on this story.',
  'Norris’s family roots stem from both Irish and Cherokee ancestry.',
];

const dispatcher = async (event) => {
  let response = {
    sessionState: {
      dialogAction: {
        type: 'Close',
      },
      intent: {
        confirmationState: 'Confirmed',
        slots: {},
        name: '',
        state: '',
      },
    },
    messages: [
      {
        contentType: 'PlainText',
        content: '',
      },
    ],
  };

  console.log('Event: ', event);
  switch (event.sessionState.intent.name) {
    case 'RandomJoke':
      try {
        let url = 'https://api.chucknorris.io/jokes/random';
        let result = await Request(url, { json: true });

        console.log(result.value);
        response['sessionState']['intent']['state'] = 'Fulfilled';
        response['messages'][0]['content'] = result.value;
      } catch {
        response['sessionState']['intent']['state'] = 'Failed';
        response['messages'][0]['content'] =
          'Sorry, no random jokes today, try again a bit later';
      }
      response['sessionState']['intent']['name'] = 'RandomJoke';
      break;
    case 'Creator':
      response['sessionState']['intent']['state'] = 'Fulfilled';
      response['messages'][0]['content'] =
        'I was created by Toria Dev as a showcase :)';
      response['sessionState']['intent']['name'] = 'Creator';
      break;
    case 'Facts':
      let randomFact = facts[Math.floor(Math.random() * facts.length)];
      response['sessionState']['intent']['state'] = 'Fulfilled';
      response['messages'][0]['content'] = randomFact;
      response['sessionState']['intent']['name'] = 'Creator';
      break;
    default:
      response['sessionState']['intent']['state'] = 'Failed';
      response['messages'][0]['content'] = 'Sorry, no info ...';
      response['sessionState']['intent']['name'] = 'Intent undefined';
      break;
  }
  return response;
};
exports.handler = async (event) => {
  return dispatcher(event);
};
