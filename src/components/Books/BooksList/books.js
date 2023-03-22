import React from "react"
import ReactPaginate from 'react-paginate'
import BooksTerm from "../BooksTerm/booksterm";
import {Link} from "react-router-dom";

class Books extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getProductsPage(offset, nextPageOffset);
        console.log(books, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>

                        <thead>
                            <tr>
                                <th scope={"col"}>
                                    Name
                                </th>
                                <th scope={"col"}>
                                    Category
                                </th>
                                <th scope={"col"}>
                                    Author
                                </th>
                                <th scope={"col"}>
                                    Available copies
                                </th>
                                <th scope={"col"}>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            {/*{this.props.books.map((item) => {*/}
                            {/*        return (*/}
                            {/*            <BooksTerm term ={item} onDelete={props.onDelete}*/}
                            {/*                       onEdit={props.onEdit} onTake={props.onTake}/>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*)}*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}
                />
                <Link className={"btn btn-success ml-2"}
                    // onClick={() => props.onEdit(props.term.id)}
                      to={`/books/add`}>
                    Add
                </Link>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getProductsPage = (offset, nextPageOffset) => {
        return (
            this.props.books.map((item) => {
                        return (
                            <BooksTerm term ={item} onDelete={this.props.onDelete}
                                       onEdit={this.props.onEdit} onTake={this.props.onTake}/>
                        )
                    }
                ).filter((product, index) => {
                return index >= offset && index < nextPageOffset;
            })

        )
    }

}

// const books = (props) => {
//
//     return (
//
//
//     );
// }

export default Books;