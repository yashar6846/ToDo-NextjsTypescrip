import RowItem from "./row-item"

const DoneList = () => {
  return (
    <>
    	<h3>Completed</h3>
		<ul id="completed-tasks">
			<RowItem title="See the Doctor" done/>
		</ul>
    </>
  )
}

export default DoneList