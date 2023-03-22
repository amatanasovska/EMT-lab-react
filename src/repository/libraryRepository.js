import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () =>{
        return axios.get("/book")
    },
    fetchCategories: () =>{
        return axios.get("/categories")
    }
}

export default LibraryService;