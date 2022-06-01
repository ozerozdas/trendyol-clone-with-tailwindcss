import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div className="border-b pb-1 border-gray-200">
            <nav className="container mx-auto">
                <ul className="flex justify-between">
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            KADIN
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            ERKEK
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            ÇOCUK
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            EV & MOBİLYA
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            SÜPERMARKET
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            KOZMETİK
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            AYAKKABI & ÇANTA
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            SAAT & AKSESUAR
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            ELEKTRONİK
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs font-semibold text-black px-4 py-2 border-b-2 border-white hover:text-primary hover:border-primary">
                            SPOR&OUTDOOR
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}