import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function HeaderLayout() {
    const router = useRouter()

    const linkedUrl = (url:string) => {
        router.push(url)
    }

    const menuNav = (url:string, title:string, className?:string) => (
        <div className={`px-4 py-2 cursor-pointer text-cream hover-gradient rounded ${className}`} onClick={() => linkedUrl(`/${url}`)}>{title}</div>
    )

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const maxScroll = 300;
        const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const newOpacity = scrollPosition / maxScroll;
    
        setOpacity(newOpacity <= 1 ? newOpacity : 1);
    };
    
    window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className={`inline-flex justify-between w-full fixed py-4 px-2 z-10`}
            style={{ 
                backgroundColor: `rgba(32, 22, 88, ${opacity})`,
                boxShadow: `0px 0px 20px 0px rgba(0,0,0, ${opacity})`,
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <div>
                    {menuNav('', 'Home', 'text-lg')}
                </div>
                <div className="inline-flex items-center space-x-3">
                    {menuNav('cari', 'Rest API', '')}
                </div>
            </div>
        </div>
    )
}
