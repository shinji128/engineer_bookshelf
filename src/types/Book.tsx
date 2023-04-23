export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    },
    industryIdentifiers: { type: string, identifier: string }[];
  }
}
