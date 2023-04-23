import { RegisterBookCard } from "./RegisterBookCard"


type Props = {
  isbnIds: string[];
}

export const RegisterBooks: React.FC<Props> = (props) => {
  const { isbnIds } = props;
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isbnIds.map((isbnId, i) => {
        return <RegisterBookCard key={i} isbnId={isbnId} />
      })}
    </ul>
  )
}
