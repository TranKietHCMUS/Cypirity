import React, { useState } from 'react';
import StoryItem from "../components/StoryItem"

function StoryPage() {
    
    const listData = [
        {
            story: "Đối tượng nhắm vào người đang cần có việc để lừa đảo",
            base64Image: 'https://file1.dangcongsan.vn/data/0/images/2022/04/12/vulinh/1-1.png?dpi=150&quality=100&w=780'
        },
        {
            story: "Scam 150k mua vật phẩm trong game tft",
            base64Image: 'https://checkscam.vn/wp-content/uploads/2024/04/Screenshot_20240413-195338_MoMo-461x1024.jpg?v=1713012838',
        },
        {
            story: "Nhận làm bài hộ, nhận tiền cọc xong và không gửi bài, và chặn facebook.",
            base64Image: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/10/28/mot-bai-dang-gia-danh-shopee-de-lua-dao-anh-chup-man-hinh-16669426152201742989386.jpg",
        },
        {
            story: "Lừa đảo tiền mua tài khoản điện tử",
            base64Image: "https://checkscam.vn/wp-content/uploads/2024/04/FB_IMG_17129843769295474-473x1024.jpg?v=1712984579",
        },
        {
            story: "Lừa đảo kéo tài xỉu, Bảo chuyển tiền thêm để xác thực mới rút đc , lên 1m… rồi , 0 chịu hoàn còn nói chuyện khó nghe ! Đã block tôi",
            base64Image: "https://congan.quangnam.gov.vn/Portals/0/PX03/NAM%202023/anh%20minh%20hoa.png"
        }
    ]
    console.log(listData)

    return (
        <div style={{"display" : "grid", "gridTemplateColumns":"repeat(3, 1fr)", "gap" : "40px", "rowGap" : "130px"}}>
            <StoryItem itemData={listData[0]} />
            <StoryItem itemData={listData[1]} />
            <StoryItem itemData={listData[2]} />
            <StoryItem itemData={listData[3]} />
        </div>
    );
};

export default StoryPage;