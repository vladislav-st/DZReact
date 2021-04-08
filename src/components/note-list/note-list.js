import React, { Component, Fragment } from 'react';
import NoteItem from '../note-item/note-item';



class NoteList extends Component {
    state = {
        notes: this.props.notes
    }

    render() {
        const { notes } = this.state
        var NotesTemplate
        if (notes !== null) {
            NotesTemplate = notes.map(item => {
                return (<NoteItem
                    title={item.title}
                    text={item.text}
                ></NoteItem>)
            })
        }
        return (
            <Fragment>
                {NotesTemplate} {/*contactItem collection */}
            </Fragment>
        )
    }
}

export default NoteList