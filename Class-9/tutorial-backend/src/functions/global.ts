export const pagination = ( page: number, limit: number ) => {
  const skip = ( page - 1 ) * limit;
  return {
    skip,
    limit,
  };
};

export const paginationResponse = ( data: any, page: string | number , limit: string | number ) => {
  const total = data.length;
  const totalPages = Math.ceil( total / Number(limit) );
  const nextPage = Number(page) < totalPages ? Number(page) + 1 : totalPages;
  const previousPage = Number(page) > 1 ? Number(page) - 1 : 1;
  const response = data.slice((Number(page) - 1) * Number(limit), Number(page) * Number(limit));
  return {
    data: response,
    pagination: {
      total,
      totalPages,
      currentPage: Number(page),
      nextPage,
      previousPage,
    },
  };
};