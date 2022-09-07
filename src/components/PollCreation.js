import { useState } from "react";

import Nav from "./Nav";

const PollCreation = () => {
    const [textArea1, setTextArea1] = useState("");
    const [textArea2, setTextArea2] = useState("");

    const updateTextArea1 = (textArea1) => {
        setTextArea1(textArea1);
    };
    const updateTextArea2 = (textArea2) => {
        setTextArea2(textArea2);
    };

    return (
        <div className="poll-creation-container">
            <Nav />
            <div className="poll-creation-info">
                <h4>Create Your Own Poll</h4>
                <h3>Would you rather...</h3>
                <div className="option-create-container">
                    <form>
                        <label>Option #1</label>
                        <textarea 
                            maxLength="250" 
                            onChange={(e) => updateTextArea1(e.target.value)} 
                            value={textArea1} 
                            placeholder="Enter option #1" >
                        </textarea>
                        <p>{textArea1.length}/250</p>
                        <label>Option #2</label>
                        <textarea 
                            maxLength="250" 
                            onChange={(e) => updateTextArea2(e.target.value)} 
                            value={textArea2} 
                            placeholder="Enter option #2" >
                        </textarea>
                        <p>{textArea2.length}/250</p>
                        <input type="submit" value="Creat Poll" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PollCreation;