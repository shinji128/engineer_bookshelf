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

export enum STATES {
  UNREAD = '積読',
  READING = '読中',
  READ = '読了'
}
