
import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()

  return (
    <div className="flex text-center items-center bg-gray-600 text-white ">
      User: {userid}
    </div>
  )
}

export default User
