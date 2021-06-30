//2. Create a App.jsx component..
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            <Note />
            <Footer />
        </div>
    );
}

export default App;