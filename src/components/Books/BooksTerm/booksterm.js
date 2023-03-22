import React from 'react';
import {Link} from 'react-router-dom';

const BooksTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit`}>
                    Edit
                </Link>
                <Link className={"btn btn-success ml-2"}
                      onClick={() => props.onTake(props.term.id)}
                      to={`/books/take`}>
                    Take
                </Link>
            </td>
        </tr>
    )
}

export default BooksTerm;
