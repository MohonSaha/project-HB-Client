
const handleSearch = () => {
    fetch(`http://localhost:5000/${searchText}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
}


const Search = () => {
    return (
        <div>
            <div className="h-24 mb-20 bg-white w-4/5 rounded-sm flex justify-center items-center shadow-2xl px-16 mx-auto md:-mt-12 z-20 relative">
                <div className="form-control w-full">
                    <label className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search hotel by regions" className="input border-yellow-600 w-full" />
                        <span onClick={handleSearch} className="bg-yellow-600">Search</span>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Search;