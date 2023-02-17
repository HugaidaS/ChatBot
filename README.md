# Lex chat-bot integrated in React-app

ChuckBuddy bot as a showcase

Lex bot processing 12 intents in total

- Creator ( from the backend )
- Character dob
- Joke ( api consumption from the backend )
- Fact ( random from the backend )
- Character bio
- Welcome
- Goodbye
- Thumb up
- Thumb down
- Help
- Kendra search intent
  P.S. I used built-in intent for Kendra integration, so no additional deploy was required in this scenario
- Fallback intent if neither Lex or Kendra could not find any answers
  For Kendra search is used web crawler connector which is leveraging StackOverflow Q&A platform and AWS dataset, so basically it responds to all programming-related questions.
  Lex bot is integrated into React web application, the application itself is hosted with S3 bucket using AWS CodePipeline CI/CD service and GitHub actions.

