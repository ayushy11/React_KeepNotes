import React, { useState } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert("button clicked");
        setAddItem( (prevData) => {
            return [...prevData, note];
        });
        console.log(note);
    };

    const onDelete = (id) => {
        setAddItem( (oldData) => {
            return oldData.filter( (currData, index) => {
                return index !== id;
            })
        })
    };
    
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            {addItem.map((val, index) => {
                return (
                <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                /> );
            })}

            <Footer />
        </>
    );
};
export default App;