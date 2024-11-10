import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()
    return(
        <div>
        <h2>Opps!!!</h2>
        <h3>Something went Wrong</h3>
        <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error