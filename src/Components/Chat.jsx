import { useState } from "react";
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
            <div className="bg-cyan-800 w-4/5 h-5/6 text-white rounded-2xl">
                <h1 className="text-3xl text-center">Chat AI + With Gemini</h1>
                <form onSubmit={generateAnswer} className=" w-full h-5/6 p-8">
                    <div className=" h-full w-full overflow-y-auto bg-slate-200">
                        <ReactMarkdown className="">{answer}</ReactMarkdown>
                    </div>
                    <div className="bg-cyan-800 text-white submit-controls">
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