import IconMail from '@/common/icons/icon-mail.svg?react'
import IconTG from '@/common/icons/icon-tg.svg?react'

export const BtnContact = ({ type }) => {
    const Current = {
        tg: {
            link: 'https://t.me/olifem',
            icon: IconTG,
        },
        mail: {
            link: 'mailto:olifemb@gmail.com',
            icon: IconMail,
        },
    }[type]

    return (
        <a href={Current.link} target={'_blank'} rel="noreferrer">
            <Current.icon
                className={
                    'w-12 h-auto hover:drop-shadow-[_0_0_10px_#FFF8] duration-300 cursor-pointer'
                }
            />
        </a>
    )
}
