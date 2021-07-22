import './Header.scss';
import logo from '../../assets/images/logo.png';
function Header (){
    return (
       <div class ="header">
           <div class="header__logo"><img  src={logo} alt="books logo"/></div>
           <h1 class="header__title">ReadersPoint</h1>           
       </div>
    )
}
export default Header 