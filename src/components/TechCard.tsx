const TechCard = ({
  title,
  description,
  listHeader,
  list,
  id,
}: {
  title: string
  description: string
  listHeader: string
  list: string[]
  id: string
}) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
      <h3 className="text-lg font-medium pt-8 pb-2  ">{title}</h3>
      <p className="py-2">{description}</p>
      <h4 className="py-4 text-orange-600">{listHeader}</h4>
      {list.map((l, i) => (
        <p className="text-gray-800 py-1" key={i + '_card_' + id}>
          {l}
        </p>
      ))}
    </div>
  )
}
export default TechCard
