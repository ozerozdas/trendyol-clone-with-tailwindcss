import { Link } from "react-router-dom";

export default function Info() {
    return (
        <div className="bg-black text-white py-14">
            <div className="container mx-auto">
                <div className="grid grid-cols-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Trendyol</h2>
                        <ul className="flex flex-col gap-y-3 py-5 text-sm font-semibold">
                            <li>
                                <Link>Biz Kimiz</Link>
                            </li>
                            <li>
                                <Link>Kariyer</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>İletişim</Link>
                            </li>
                            <li>
                                <Link>Trendyol'da Satış Yap</Link>
                            </li>
                            <li>
                                <Link>Kurumsal Hediye Çeki</Link>
                            </li>
                            <li>
                                <Link>Güvenli Alışveriş</Link>
                            </li>
                        </ul>
                        <div className="block">
                            <img src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" className="inline-block w-12" alt="" />
                            <img src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" className="inline-block w-12" alt="" />
                            <img src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" className="inline-block w-16" alt="" />
                            <img src="https://cdn.dsmcdn.com/web/production/footer-amex.png" className="inline-block w-12" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">About us</h2>
                        <ul className="flex flex-col gap-y-3 py-5 text-sm font-semibold">
                            <li>
                                <Link>Who we are</Link>
                            </li>
                            <li>
                                <Link>Careers</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Kampanyalar</h2>
                        <ul className="flex flex-col gap-y-3 py-5 text-sm font-semibold">
                            <li>
                                <Link>Aktif Kampanyalar</Link>
                            </li>
                            <li>
                                <Link>Elite Üyelik</Link>
                            </li>
                            <li>
                                <Link>Hediye Fikirleri</Link>
                            </li>
                            <li>
                                <Link>Trendyol Fırsatları</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Yardım</h2>
                        <ul className="flex flex-col gap-y-3 py-5 text-sm font-semibold">
                            <li>
                                <Link>Sıkça Sorulan Sorular</Link>
                            </li>
                            <li>
                                <Link>Canlı Yardım</Link>
                            </li>
                            <li>
                                <Link>Nasıl İade Edebilirim</Link>
                            </li>
                            <li>
                                <Link>İşlem Rehberi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}