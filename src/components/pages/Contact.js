import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Contact() {
    return (
        <div className="container mx-auto">
            <div className="border px-4 py-1">
                İletişim
            </div>
            <div className="flex border border-t-0 p-3">
                <div className="flex text-xs">
                    <ul>
                        <li className="px-10 py-3 text-center font-semibold rounded-md rounded-r-none bg-gray-100 text-primary">
                            <Link>
                                İletişim
                            </Link>
                        </li>
                        <li className="px-10 py-3 text-center font-semibold rounded-md rounded-r-none">
                            <Link>
                                Güvenlik
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-100 rounded-md rounded-tl-none px-5 py-3">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-gray-200 p-3 text-sm h-80">
                            Markanızı Trendyol.com'da görmek için <Link className="text-primary underline hover:no-underline">tıklayınız.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}