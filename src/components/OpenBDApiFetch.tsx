type Props = {
  isbnId: string;
};

export const OpenBDApiFetch = async (props: Props): Promise<any> => {
  const { isbnId } = props
  const openBDApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
  const response = await fetch(`${openBDApiUrl}${isbnId}`);
  console.log(response)
  const data = await response.json();
  return data;
}
