import {useRouteError,Link } from "react-router-dom"
export default function Error404() {
    const error = useRouteError();
    return (
        <div style={{
             textAlign: 'center', height: '100vh', alignItems: 'center', color: 'var(--Poseidon-2-rgba'}}>
            <h1 style={{
                 width: '100%', marginBottom:  '0rem',}}>
                <strong style={{ color: 'var(--Poseidon-5-rgba)' }}>{error.status}</strong>
            </h1>
            <h1 style={{ color: 'var(--Poseidon-5-rgba)', }}>
            {error.message || error.statusText == 'currentTask is undefined' ? 'Task não encontrada': error.statusText}
            </h1>
            <h1 style={{ marginTop: '6rem'}}>
                Ops! aconteceu algum problema 
                <p>Volte para a <Link to="/" style={{ color: 'var(--Poseidon-3-rgba)' }}>página principal</Link></p>
            </h1>
        </div>
    )

}