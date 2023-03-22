import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const BookAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name : "",
        categoryName : "",
        authorId : NaN,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log("Updated")
    }
    const element_error = document.getElementById('error-span');

    const onFormSubmit = (e) => {
        e.preventDefault();

        const includes_the_name = props.books.map(element => element.name).includes(formData.name)
        console.log(includes_the_name)
        if(!includes_the_name) {
            const name = formData.name;
            const authorId = !isNaN(formData.authorId) ? formData.authorId : props.authors[0].id;
            const categoryName = formData.categoryName !== "" ? formData.categoryName : props.categories[0];
            const availableCopies = formData.availableCopies;
            console.log(authorId)
            props.onAddBook(name, categoryName, authorId, availableCopies);
            history.push("/books");
        }
        else
        {
            element_error.innerText = "Book name already exists"
        }

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
                               placeholder="Enter book name"
                               onChange={handleChange}
                               onFocus={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange} onFocus={handleChange} defaultValue={props.authors[0]} required>
                            <option disabled value> -- select an option -- </option>

                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="categoryName" className="form-control" onChange={handleChange} onFocus={handleChange} defaultValue={props.categories[0]} required>
                            <option disabled value> -- select an option -- </option>

                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               disabled
                               defaultValue={0}
                               onChange={handleChange}
                               onFocus={handleChange}
                        />
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <span className={"text-danger"} id={"error-span"}></span>
        </div>
    )
}

export default BookAdd;
