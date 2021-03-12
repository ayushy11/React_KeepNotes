import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand,setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;
        setNote( (prevData) => {
            return {
                ...prevData,
                [name]: value, // [title]:note.title, [content]:note.content
            };            
        });
        console.log(note);
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    }
    const expandIt = () => {
        setExpand(true);
    }
    const reduceIt = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="main_note" onDoubleClick={reduceIt}>
                <form>

                {expand ?
                    <input
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                    /> : null}

                    <textarea
                        rows=""
                        column=""
                        placeholder="Add a note..."
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        onClick={expandIt}                        
                    />

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> :null}
                    
                </form>
            </div>
        </>
    );
};

export default CreateNote;