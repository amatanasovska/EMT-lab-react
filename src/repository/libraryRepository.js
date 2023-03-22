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
    getBook: (id) => {
        return axios.get(`/book/${id}`)
    },
    editBook: (id, name, categoryName, authorId, availableCopies) =>
    {
        return axios.put(`/book/edit/${id}`,{
            "id" : id,
            "name" : name,
            "categoryName" : categoryName,
            "authorId" : authorId,
            "availableCopies":availableCopies
        })
    },
    addBook : (name, categoryName, authorId, availableCopies) => {
        return axios.post("/book", {
            "name" : name,
            "categoryName" : categoryName,
            "authorId" : authorId,
            "availableCopies":availableCopies
        });
    },
    getCopies : (id) =>
    {
        return axios.get(`book/copies/${id}`);
    },
    takeBook : (id, booktype_id) =>
    {
        return axios.put(`book/take/${booktype_id}/${id}`)
    },
    addCopy : (isTaken, bookType) =>
    {
        return axios.post(`book/copies`,
            {
                "isTaken" : isTaken,
                "bookType" : bookType
            })
    },
    returnBook : (id, booktype_id) =>
    {
        return axios.put(`book/return/${booktype_id}/${id}`)
    },
    deleteBookCopy : (id, booktype_id) =>
    {
        return axios.delete(`/book/copy/${booktype_id}/${id}`)
    }
}

export default LibraryService;