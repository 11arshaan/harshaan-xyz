import "./ErrorPage.scss";
import { useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <h1>Error!</h1>
    )
}