import ReactPaginate from "react-paginate";

type paginateProp = {
  totalPage: number | 0;
  setPage: Function;
  page: number;
};

export default function Pagination({ totalPage, setPage, page }: paginateProp) {
  return (
    <div className="flex justify-center">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPage} // total number of page
        className="flex gap-3 items-center lg:justify-center justify-around"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={(e) => {
          setPage(e.selected);
          console.log(e);
        }}
        activeClassName={"bg-primaryPurple text-white"}
        pageClassName={
          "page-li w-10 rounded-full flex justify-center hover:bg-primaryPurple hover:text-white p-2"
        }
        previousClassName={
          "page-previous border p-2 rounded  border-primaryPurple hover:bg-primaryPurple hover:text-white lg:mr-40 "
        }
        nextClassName={
          "page-next border p-2 rounded  border-primaryPurple hover:bg-primaryPurple hover:text-white lg:ms-40 "
        }
        forcePage={page === 0 ? 0 : page}
      />
    </div>
  );
}
