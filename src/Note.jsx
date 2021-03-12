import React from 'react';
import RemoveIcon from '@material-ui/icons/Delete';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                    <RemoveIcon className="deleteIcon" />
                </button>
            </div>
        </>
    );
};

export default Note;