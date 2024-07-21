// import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question({ question, dispatch, answer }) {
  //   const { questions, index } = useQuiz();
    // const question = questions.at(index);

  //   console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
