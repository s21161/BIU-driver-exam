export default function usePagination(itemsPerPage, currentPage) {
  const lastPageItem = itemsPerPage * currentPage;
  const firstPageItem = lastPageItem - itemsPerPage;

  return [firstPageItem, lastPageItem];
}
