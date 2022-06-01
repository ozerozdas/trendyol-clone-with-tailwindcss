import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function StorySlider() {
    const data = [
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/5/23/Post_Kampanya_Tasarim_Top_Story_Firsat_Urunleri_202205231231.png",
            "title": "Sana Özel"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/5/23/Post_Kampanya_Tasarim_Top_Story_Secili_Urunler_202205231231.png",
            "title": "Sen de Al!"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png",
            "title": "adidas"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png",
            "title": "Puma"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355121_Lacoste.png",
            "title": "Lacoste"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png",
            "title": "U.S. Polo Assn."
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png",
            "title": "Nike"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15491619354942_Columbia.png",
            "title": "Columbia"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355085_JackJones.png",
            "title": "Jack & Jones"
        },
        {
            "url": "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/12/3/maviii.png",
            "title": "Mavi"
        }
    ];

    return (
        <div className="container mx-auto mb-3">
            <Splide options={ {
                type: 'loop',
                perPage: 10,
                gap: '0',
                pagination: false,
                arrows: true,
            } }>
                { data.map((item, index) => (
                    <SplideSlide className='py-3 px-5 max-w-[112px] group'>
                        <Link className="text-center">
                            <img src={item.url} alt="" className="h-16 rounded-full border group-hover:border-primary"/>
                            <span className="text-xs font-semibold block mt-2 group-hover:text-primary">{item.title}</span>
                        </Link>
                    </SplideSlide>
                )) }
            </Splide>
        </div>
    );
}