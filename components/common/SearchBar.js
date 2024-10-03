// components\common\SearchBar.js
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";

const SearchBar = () => {
const [query, setQuery] = useState('');
const router = useRouter();

  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
      //We can change it to trigger a search on each input change
    };
  
    //using async for future explore
    // const handleSearch = async() => {
    //   // pass query to the parent component which is header on this case
    //   onSearch(query); // Search triggered when user clicks search button
    // };

   /**
   * helped by chatGPT
   * prompt: how can i use searchBar on different pages
   * @param {*} query 
   */
  const handleSearchQueryChange = async (query) => {
    router.replace({
      pathname: '/all-products',
      query: { searchQuery: query },
    })
  };
  
    return (
        <div className="flex items-center"> {/* Spacing between search box and buttons */}
        {/* search box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={query} // Bind the value of the search input box
            className="p-2 border rounded-l-lg pl-10 w-52"
            onChange={handleInputChange}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
     
        {/* buttons */}
        <button onClick={() => handleSearchQueryChange(query)} className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none">
          Search
        </button>
      </div>
    );



  };
  
  export default SearchBar;