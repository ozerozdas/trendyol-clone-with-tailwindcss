import { Link } from "react-router-dom"

export default function TopBar() {
    return (
        <div className="container mx-auto mb-2">
            <ul className="flex gap-4 justify-end">
                <li>
                    <Link className="text-xs text-gray-500">
                        İndirim Kuponlarım
                    </Link>
                </li>
                <li>
                    <Link className="text-xs text-gray-500">
                        Trendyol'da Satış Yap
                    </Link>
                </li>
                <li>
                    <Link className="text-xs text-gray-500">
                        Yardım & Destek
                    </Link>
                </li>
            </ul>
        </div>
    );
}