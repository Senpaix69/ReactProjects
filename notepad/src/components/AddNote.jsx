import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notes from './Notes';


const AddNote = (props) => {

    const date = new Date();
    const today = date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    const [notesArr, setNotesArr] = useState([
        {
            key: nanoid(),
            title: "Welcome",
            text: "Hi, My name is Huraira Younas. This is one of my react project. I hope you will like it. \nVisit my github for more projects.",
            date: "5-8-2022"
        }
    ]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notepad'))
        if (savedNotes) {
            setNotesArr(savedNotes)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notepad', JSON.stringify(notesArr))
    }, [notesArr])

    const [formData, setFormData] = useState({ title: "", text: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: value
            }
        })
    }

    const handleNote = (e) => {
        e.preventDefault();
        if (formData.title.trim().length > 0 && formData.text.trim().length > 0) {
            const newNote = {
                key: nanoid(),
                title: formData.title,
                text: formData.text,
                date: today
            }
            const newNotes = [...notesArr, newNote]
            setNotesArr(newNotes)
            formData.text = "";
            formData.title = "";
            formData.key = "";
        } else {
            alert("Can not add empty notes");
        }
    }

    const deleteNote = (key) => {
        if (key !== notesArr[0].key) {
            if (window.confirm("You want to delete this note?")) {
                const newNotes = notesArr.filter((note) => note.key !== key);
                setNotesArr(newNotes)
            }
        } else {
            alert("You can't delete welcome note")
        }
    }

    const searchNote = () => {
        if (props.search) {
            console.log(props.search);
            return notesArr.filter((note) => note.text.toLowerCase().includes(props.search));
        } else {
            return notesArr;
        }
    }

    return (
        <>
            <div className='Note'>
                <div className='Note--Card'>
                    <input
                        type='text'
                        className='Add--Title'
                        placeholder='Enter Title'
                        onChange={handleChange}
                        name='title'
                        value={formData.title}
                    >
                    </input>
                    <div className="para">
                        <textarea key={formData.key}
                            placeholder='type your note here'
                            name='text'
                            onChange={handleChange}
                            value={formData.text}
                        >
                        </textarea>
                    </div>
                    <span>Date: {today}</span>
                    <button onClick={handleNote} className="Add">add note</button>
                </div>
            </div>
            {searchNote().map((note) =>
                <Notes
                    key={note.key} id={note.key} title={note.title} text={note.text} date={note.date}
                    handleDelete={deleteNote}
                />
            )}
        </>
    )
}

export default AddNote;
