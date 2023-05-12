const express = require('express')
const router = express.Router()
router.get('/articles',(req,res)=>{
  // const query = req.query
  const dataBig=[
    {
        "art_id": "8163",
        "title": "iOS原生混合RN开发最佳实践",
        "aut_id": "1111",
        "comm_count": "254",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "https://img1.baidu.com/it/u=3379508411,2251690270&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
                "https://img0.baidu.com/it/u=1577209043,2430728692&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=288",
                "https://img1.baidu.com/it/u=15638607,2547537490&fm=253&fmt=auto&app=138&f=PNG?w=500&h=288"
            ]
        }
    },
    {
        "art_id": "8089",
        "title": "Typescript玩转设计模式 之 创建型模式",
        "aut_id": "1111",
        "comm_count": "24",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "https://img1.baidu.com/it/u=3845519178,1339519853&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=300"
            ]
        }
    },
    {
        "art_id": "8145",
        "title": "JAVA消息确认机制之ACK模式",
        "aut_id": "1111",
        "comm_count": "99",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "8089",
        "title": "Typescript玩转设计模式 之 创建型模式",
        "aut_id": "1111",
        "comm_count": "24",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "https://img1.baidu.com/it/u=3845519178,1339519853&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=300"
            ]
        }
    },
    {
        "art_id": "8145",
        "title": "JAVA消息确认机制之ACK模式",
        "aut_id": "1111",
        "comm_count": "99",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "8089",
        "title": "Typescript玩转设计模式 之 创建型模式",
        "aut_id": "1111",
        "comm_count": "24",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "https://img1.baidu.com/it/u=3845519178,1339519853&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=300"
            ]
        }
    },
    {
        "art_id": "8145",
        "title": "JAVA消息确认机制之ACK模式",
        "aut_id": "1111",
        "comm_count": "99",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "8089",
        "title": "Typescript玩转设计模式 之 创建型模式",
        "aut_id": "1111",
        "comm_count": "24",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "https://img1.baidu.com/it/u=3845519178,1339519853&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=300"
            ]
        }
    },
    {
        "art_id": "8145",
        "title": "JAVA消息确认机制之ACK模式",
        "aut_id": "1111",
        "comm_count": "99",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    }
]
  res.send(data=dataBig)
  
})
module.exports = router