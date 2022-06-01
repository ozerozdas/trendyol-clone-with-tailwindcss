import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Toolbar() {
    return (
        <div className="container mx-auto mb-1">
            <header className="flex flex-row justify-between">
                <Link to={'/'} className="flex w-36 h-14">
                    <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
                </Link>
                <div className="flex-1 h-14">
                    <div className="flex h-11 mx-auto max-w-[620px] bg-gray-100 p-3 rounded-md group">
                        <input type="text" className="flex-1 border-none bg-inherit text-xs placeholder:text-gray-500 focus:outline-none" placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                        <FontAwesomeIcon icon={faSearch} className="flex justify-end cursor-pointer text-primary text-xl" />
                    </div>
                </div>
                <div className="flex h-10">
                    <ul className="flex gap-7 items-center">
                        <li>
                            <Link to={'/account'} className="text-xs hover:text-primary">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                Hesabım
                            </Link>
                        </li>
                        <li>
                            <Link to={'/favorites'} className="text-xs hover:text-primary">
                                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                Favorilerim
                            </Link>
                        </li>
                        <li>
                            <Link to={'/basket'} className="text-xs hover:text-primary">
                                <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />
                                Sepetim
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}