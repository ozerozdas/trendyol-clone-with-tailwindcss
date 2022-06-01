import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="container mx-auto">
            <div className="flex gap-10">
                <div className="flex flex-col gap-4">
                    <Link className="group shadow-md">
                        <img src="https://cdn.dsmcdn.com/ty441/pimWidgetApi/webBig_20220530144003_2062281KadinWeb202203031602.jpg" className="rounded-md rounded-b-none border border-b-0 shadow-lg group-hover:border-primary transition-all" alt="" />
                        <span className="block bg-black text-white text-sm font-bold px-4 py-2 rounded-md rounded-t-none group-hover:bg-primary transition-all">
                            Bi T-Shirt Bi Jean Bi Sneaker
                            <span className="hidden float-right group-hover:block">
                                Alışverişe Başla <i className="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                    <Link className="group shadow-md">
                        <img src="https://cdn.dsmcdn.com/ty441/campaign/banners/original/607119/d7ee0a70e8_2_new.jpg" className="rounded-md rounded-b-none border border-b-0 shadow-lg group-hover:border-primary transition-all" alt="" />
                        <span className="block bg-black text-white text-sm font-bold px-4 py-2 rounded-md rounded-t-none group-hover:bg-primary transition-all">
                            Trendyol Collection - Yeni Sezon Fırsatları
                            <span className="hidden float-right group-hover:block">
                                Alışverişe Başla <i className="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                    <Link className="group shadow-md">
                        <img src="https://cdn.dsmcdn.com/ty438/pimWidgetApi/webBig_20220525135409_mavi090522weberkek.jpg" className="rounded-md rounded-b-none border border-b-0 shadow-lg group-hover:border-primary transition-all" alt="" />
                        <span className="block bg-black text-white text-sm font-bold px-4 py-2 rounded-md rounded-t-none group-hover:bg-primary transition-all">
                            mavi - Yeni Sezon
                            <span className="hidden float-right group-hover:block">
                                Alışverişe Başla <i className="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                    <Link className="group shadow-md">
                        <img src="https://cdn.dsmcdn.com/ty441/pimWidgetApi/webBig_20220530144003_2062281KadinWeb202203031602.jpg" className="rounded-md rounded-b-none border border-b-0 shadow-lg group-hover:border-primary transition-all" alt="" />
                        <span className="block bg-black text-white text-sm font-bold px-4 py-2 rounded-md rounded-t-none group-hover:bg-primary transition-all">
                            Bi T-Shirt Bi Jean Bi Sneaker
                            <span className="hidden float-right group-hover:block">
                                Alışverişe Başla <i className="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    <Link>
                        <img src="https://cdn.dsmcdn.com/mrktng/crm/rightBnr/2022/mar/28/imgs/eski.gif" className="rounded-md shadow-lg" alt="" />
                    </Link>
                    <Link>
                        <img src="https://cdn.dsmcdn.com/mrktng/crm/rightBnr/2022/mar/28/imgs/eski.gif" className="rounded-md shadow-lg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}