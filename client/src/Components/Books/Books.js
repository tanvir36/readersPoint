import './Books.scss';
import book from '../../assets/images/demo-book.jpg';
function Books () {
    return(
        <section className="books">
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
            <div className="books__card">
                <img src={book}/>
            </div>
        </section>
       
    );
}
export default Books