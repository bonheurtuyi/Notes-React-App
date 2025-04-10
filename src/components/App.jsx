import React from "react";
import Header from "./headers/Header";
import Footer from "./footers/Footer";
import Note from "./notes/Note";
import notes from "./notes/notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;