import React from "react"
import {Link} from "react-router-dom";

const BookTake = (props) => {
    console.log(props.copies)
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>
                                Id
                            </th>
                            <th scope={"col"}>
                                Taken
                            </th>
                            <th scope={"col"}>
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.copies.map((item) => {
                                return (
                                    <tr>
                                    <td>{item.bookId}</td>
                                    <td>{item.taken? "yes" : "no"}</td>
                                    <td><button className={"btn btn-success ml-2"}
                                           onClick={() => props.onTake(item.bookId, item.bookType.id)}

                                                disabled={item.taken}>
                                        Mark as Taken
                                    </button>
                                    </td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className={"btn btn-success ml-2"}
                    to={`/books/add/copy`}
                onClick={() => props.onAddCopy(props.booktype.id)}>
                Add a copy
            </Link>
        </div>

    );
}

export default BookTake;