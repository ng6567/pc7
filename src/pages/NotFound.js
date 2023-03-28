import "./NotFound.css";
function NotFound(){
    return (
        <div className="NotFound">
            <h1 className="NumberError">404</h1>
            <p className="MessageError">Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
}
export default NotFound