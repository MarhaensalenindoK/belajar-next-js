import React from 'react';
import FontAwesomeIcon from "../component/FontAwesome";

interface Props {
    icon: any,
    title?: string,
    items?: string[],
    colorContent?: string,
    colorCard?: string,
}
export default function CardAbout(cardProps: Props) {
    const {icon, title, items, colorContent, colorCard} = cardProps;
    const itemContent = (texts: string[], colorContent: string) => {
        if (texts.length === 0) {
            return <p className={`text-${colorContent} text-base mb-2`}>No content</p>;
        }

        const content = texts.map((element, index) => (
            <React.Fragment key={index}>
            <p className={`text-${colorContent} text-base mb-2`}>{element}</p>
            {index !== texts.length - 1 && <hr className={`w-52 mx-auto border-${colorContent}`} />}
            </React.Fragment>
        ));

        return content;
    }

    return (
        <div>
            <div className={`shadow-lg px-4 py-4 m-3 text-center rounded-lg min-h-96 bg-gradient-to-r from-cyan-500 ${colorCard || "to-pink-500"}`}>
                <i>
                    <FontAwesomeIcon
                        icon={icon ?? ''}
                        size="5x"
                        className={`mb-6 text-${colorContent ?? 'text-cream'}`}
                    />
                </i>
                <div className="p-4">
                    <p className="font-bold text-lg md:text-xl mb-6">{title}</p>

                    {itemContent(items || [], colorContent ?? 'text-cream')}
                </div>
            </div>
        </div>
    )
}
