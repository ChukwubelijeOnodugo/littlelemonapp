import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const id = setTimeout(() => {
            navigate('/')
        }, 2000);
        return () => clearTimeout(id);
    }, [])

    return (
        <div className="special-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 360px)' }}>
            <h1>Oops we don't seem to have any thing on this page. Redirecting....</h1>
        </div>
    )
}

export default NotFound