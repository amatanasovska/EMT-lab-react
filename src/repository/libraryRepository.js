import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () =>{
        return axios.get("/book")
    },
    fetchCategories: () =>{
        return axios.get("/categories")
    },
    fetchAuthors: () =>
    {
        return axios.get("/authors")
    },
    deleteBook: (id) => {
        return axios.delete(`/book/${id}`)
    },
    addBook : (name, categoryName, authorId, availableCopies) => {
        return axios.post("/book", {
            "name" : name,
            "categoryName" : categoryName,
            "authorId" : authorId,
            "availableCopies":availableCopies
        });
    }
}

export default LibraryService;