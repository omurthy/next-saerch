import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router'; 
import { route } from 'next/dist/server/router';
const Layout = (props) => {
    const router = useRouter();

    return (
        <div> 
            <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            </Head>

            <div className="container">
                <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    
                    <li className="nav-item">
                        <Link href="/frontend">
                            <a  className={router.pathname =='/frontend' ? "nav-link active" : "nav-link"}>Frontend</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/backend">
                            <a   className={router.pathname =='/backend' ? "nav-link active" : "nav-link"}>Backend</a>
                        </Link>
                    </li> 
                </ul>
                </header>
            </div>
            <div className="album py-5 bg-light">
                <div className="container"> 
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;