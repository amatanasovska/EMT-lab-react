import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {
    console.log(props)

    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name : "",
        categoryName : "",
        authorId : NaN,
        availableCopies: 0
    })
    // const onFormLoad = (e) =>
    // {
    //     updateFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value.trim()
    //     })
    // }
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log("Updated")
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const authorId = !isNaN(formData.authorId) ? formData.authorId : props.book.authorId;
        const categoryName = formData.categoryName !== "" ? formData.categoryName : props.book.categoryName;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, categoryName, authorId, availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               defaultValue={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange} required>
                            <option disabled selected value> -- select an option -- </option>

                            {props.authors.map((term) => {
                                    if (props.book.authorId !== undefined &&
                                        props.book.authorId === term.id) {
                                        return <option selected value={term.id}>{term.name}</option>
                                    }
                                    else {
                                        return <option value={term.id}>{term.name}</option>
                                    }
                                }

                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="categoryName" className="form-control" onChange={handleChange}  required>
                            <option disabled selected value> -- select an option -- </option>

                            {props.categories.map((term) => {
                                    if (props.book.categoryName !== undefined &&
                                        props.book.categoryName === term)
                                        return <option selected value={term}>{term}</option>
                                    else return <option value={term}>{term}</option>
                                }

                                )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               defaultValue={props.book.availableCopies}
                               disabled
                               required
                               onChange={handleChange}
                               onFocus={handleChange}
                        />
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;
