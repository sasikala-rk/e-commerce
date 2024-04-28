import { Search } from 'react-feather';

const logoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_69dE6cdCFGTvFj1NSfJX093JL87yJueeh8cLE5KnJethuop";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <nav>
                    <ul>
                        <li className='p-0'>
                            <a href='/'>
                                <img className='logo' src={logoURL} />
                            </a>
                        </li>
                        <li><a href='/grocery'>Groceries</a></li>
                        <li><a href='/electronics'>Electronics</a></li>
                        <li><a href='/dresses'>dresses</a></li>
                    </ul>
                    <ul>
                        <li><Search className='search-icon' /></li>
                        <li>mywishlist</li>
                        <li>my account</li>
                        <li>my bag 3</li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header