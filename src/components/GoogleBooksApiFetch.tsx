type Props = {
  title: string;
};

export const GoogleBooksApiFetch = async (props: Props): Promise<any> => {
  const { title } = props
  const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  const response = await fetch(`${googleBooksApiUrl}intitle:${title}&maxResults=40`);
  const data = await response.json();
  return data;
}