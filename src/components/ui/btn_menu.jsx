import React from 'react'
import IconMenu from '../../common/icons/menu.svg?react'
import { useRecoilModal } from '../../common/hooks/useRecoilModal.js'
import { mobileMenuState } from '../../store/index.js'

export const BtnMenu = ({ className }) => {
    const modal = useRecoilModal(mobileMenuState)
    return <IconMenu onClick={modal.toggle} className={'cursor-pointer block md:hidden ' + className} />
}
