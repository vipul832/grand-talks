import { setSearch } from "../../App/feature/searchSlice";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const InputSearch = () => {
  const dispatch = useDispatch();

  const debouncedSearch = debounce((criteria) => {
    dispatch(setSearch(criteria));
  }, 300);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  return (
    <div className="flex justify-center pt-8">
      <div className="relative md:w-[25%] w-[60%]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-primaryPurple text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-primaryPurple font-bold"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputSearch;
