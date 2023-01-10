import { Sub } from "../types/Sub"


interface Props{
  subs: Sub[]
}

const List = ({ subs }: Props) =>{

  const renderList = (): JSX.Element[] => {
   return subs.map((sub) => {
      return  (<li key={sub.nick}>
          <img src={sub.avatar} alt={sub.nick} />
          <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
          <p>{sub.description?.substring(0,100)}</p>
          {/* <p>Subbed for {sub.subMonths} months</p> */}
        </li>)
      })}
  return (
    <ul>
    {renderList()}
    </ul>
  );


}

export default List