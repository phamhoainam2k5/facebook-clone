import React from 'react'
import '../MainPage.css'
import AvataLayout from '../LayoutLeftRight/AvataLayout'
import avatar from '../../../public/images/dp0.png'

function RightSide() {
  return (
    <div className='right-container'>
        <div className='right-contact'>
            <h3>Contacts</h3>
            <AvataLayout src={avatar} name={"Nụ"} />
            <AvataLayout src={avatar} name={"Hằng"} />
            <AvataLayout src={avatar} name={"HƯơng"} />
            <AvataLayout src={avatar} name={"Thủy"} />
        </div>
    </div>
  )
}

export default RightSide