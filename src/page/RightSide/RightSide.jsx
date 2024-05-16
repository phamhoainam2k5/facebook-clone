import React from 'react'
import '../MainPage.css'
import AvataLayout from '../LayoutLeftRight/AvataLayout'

function RightSide() {
  return (
    <div className='right-container'>
        <div className='right-header'>
            <h3>Contacts</h3>
            <AvataLayout name={"Phạm Văn Tuấn"} />
            <AvataLayout name={"Nguyễn Thị Thu Hằng"} />
            <AvataLayout name={"Phạm Thị Thanh Nhàn"} />
            <AvataLayout name={"Nguyễn Thị Hoàng Thủy"} />
            
        </div>
    </div>
  )
}

export default RightSide