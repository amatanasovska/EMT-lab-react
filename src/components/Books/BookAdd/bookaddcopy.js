import React from 'react';
import {useHistory} from 'react-router-dom';

const BookAddCopy = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        booktype : props.booktype.id,
        isTaken: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log("Updated")
    }

    const onFormSubmit = (e) => {
        e.preventDefault();


            const bookTypeId = formData.booktype;
            const isTaken = formData.isTaken === 'true';
            console.log(isTaken)
            props.onAdd(isTaken,bookTypeId);
            history.push("/books/take");


    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Book Type Id</label>
                        <input type="number"
                               className="form-control"
                               id="booktype"
                               name="booktype"
                               required
                               placeholder="Enter booktype"
                               onChange={handleChange}
                               onFocus={handleChange}
                               defaultValue={props.booktype.id}
                               disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Taken</label>
                        <select name="isTaken" className="form-control" onChange={handleChange} onFocus={handleChange} defaultValue={0} required>
                            <option value="false"> no </option>

                            <option value="true"> yes </option>
                        </select>
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookAddCopy;
