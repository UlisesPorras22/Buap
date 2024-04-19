import { useState } from "react";
import './Chat.css'
import '/src/index.css'
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        setAnswer("Loading your answer... \n It might take upto 10 seconds");
        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCa83TLcRA1bK5Bpzsw08wJunsyhbwiowM
        `,
                method: "post",
                data: {
                    contents: [{ parts: [{ text: question }] }],
                },
            });

            setAnswer(
                response["data"]["candidates"][0]["content"]["parts"][0]["text"]
            );
        } catch (error) {
            console.log(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }

        setGeneratingAnswer(false);
    }

    return (
        <>
            <div className="Chat-container">
                <h1 className="text-3xl text-center">Chat AI + With Gemini</h1>

                <form onSubmit={generateAnswer} className="Chat-formulary">

                    <div className="Gemini-ia-container">
                        <ReactMarkdown className="message">{answer}</ReactMarkdown>
                    </div>

                    <div className="submit-controls">
                        <input required className="" value={question} onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Di algo" />
                        <button type="submit" className="" disabled={generatingAnswer}>
                            Enviar
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
}
export default App;