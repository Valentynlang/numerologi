import Image from "next/image";
export default function NewStart () {
    return <div >
        <div className="main__wrapper">
            <div className="matrix-selection-page_wrapper">
                <h3 className="matrix-selection-page_wrapper_h3" >
                    БЕЗКОШТОВНИЙ КАЛЬКУЛЯТОР
                </h3>
                <h1 className="matrix-selection-page_wrapper_h1">МАТРИЦІ ДОЛІ</h1>
                <div className="buttons_wrapper">
                    <button className="btn btn-disabled">МАТРИЦЯ НА РІК</button>
                    <a href="/Calculator" className="btn btn-primary">ОСОБИСТА МАТРИЦЯ</a>
                    <button className="btn btn-disabled">МАТРИЦЯ СУМІСНІСНОСТІ</button>
                </div>
                <div className="social-and-photo">
                    <div className="social-links_wrapper sm:pl-52">
                        <div className="social-links">
                            <div className="social-link">
                                <a target="_blank" rel="noreferrer" href="https://instagram.com/daria.tiutiunnyk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                                    <Image src="/insta-icon.png" alt="InstImg" width={50} height={50}/>
                                </a>
                            </div>
                            <div className="social-link">
                                <a target="_blank" rel="noreferrer" href="https://t.me/mynumerology">
                                    <Image src="/telegram.png" alt="InstImg" width={50} height={50}/>
                                </a>
                            </div>
                            <div className="social-link">
                                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@dariatnumerolog?_t=8h1cvAQlj8w&_r=1">
                                    <Image src="/tiktok.png" alt="InstImg" width={50} height={50}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="img-hero"> </div>
                </div>
            </div>
        </div>
    </div>
}