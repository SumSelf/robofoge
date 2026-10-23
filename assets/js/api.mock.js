/* ===========================================================
 * ROBOFORGE · api.mock.js —— 模拟数据版（Mock Data Layer）
 * 说明：本文件提供全站前端静态模板所需的全部模拟数据，
 *       数据结构与真实接口（api.real.js）保持一致，
 *       切换方式：window.API_MODE = "mock" | "real"
 * =========================================================== */
window.MOCK = {
 "products": [
  {
   "id": "P1000",
   "sku": "CR-100",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "商用清洁机器人 CR-100",
   "nameEn": "Commercial Cleaning Robot CR-100",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 22800,
   "priceText": "¥22,800",
   "img": "assets/img/gen/product/commercial_01.svg",
   "imgs": [
    "assets/img/gen/product/commercial_01.svg",
    "assets/img/gen/product/commercial_02.svg",
    "assets/img/gen/product/commercial_03.svg",
    "assets/img/gen/product/commercial_04.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "商用清洁机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Commercial Cleaning Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1001",
   "sku": "DS-103",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "室内配送机器人 DS-103",
   "nameEn": "Indoor Delivery Robot DS-103",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 29640,
   "priceText": "¥29,640",
   "img": "assets/img/gen/product/commercial_02.svg",
   "imgs": [
    "assets/img/gen/product/commercial_02.svg",
    "assets/img/gen/product/commercial_03.svg",
    "assets/img/gen/product/commercial_04.svg",
    "assets/img/gen/product/commercial_05.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "室内配送机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Indoor Delivery Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1002",
   "sku": "GB-106",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "迎宾导览机器人 GB-106",
   "nameEn": "Reception Guide Robot GB-106",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 36480,
   "priceText": "¥36,480",
   "img": "assets/img/gen/product/commercial_03.svg",
   "imgs": [
    "assets/img/gen/product/commercial_03.svg",
    "assets/img/gen/product/commercial_04.svg",
    "assets/img/gen/product/commercial_05.svg",
    "assets/img/gen/product/commercial_06.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "迎宾导览机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Reception Guide Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1003",
   "sku": "PT-109",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "安防巡检机器人 PT-109",
   "nameEn": "Security Patrol Robot PT-109",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 43320,
   "priceText": "¥43,320",
   "img": "assets/img/gen/product/commercial_04.svg",
   "imgs": [
    "assets/img/gen/product/commercial_04.svg",
    "assets/img/gen/product/commercial_05.svg",
    "assets/img/gen/product/commercial_06.svg",
    "assets/img/gen/product/commercial_07.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "安防巡检机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Security Patrol Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1004",
   "sku": "FL-112",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "商用洗地机器人 FL-112",
   "nameEn": "Floor Scrubber Robot FL-112",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 50160,
   "priceText": "¥50,160",
   "img": "assets/img/gen/product/commercial_05.svg",
   "imgs": [
    "assets/img/gen/product/commercial_05.svg",
    "assets/img/gen/product/commercial_06.svg",
    "assets/img/gen/product/commercial_07.svg",
    "assets/img/gen/product/commercial_08.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "商用洗地机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Floor Scrubber Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1005",
   "sku": "HR-115",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "餐饮传菜机器人 HR-115",
   "nameEn": "Food Serving Robot HR-115",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 57000,
   "priceText": "¥57,000",
   "img": "assets/img/gen/product/commercial_06.svg",
   "imgs": [
    "assets/img/gen/product/commercial_06.svg",
    "assets/img/gen/product/commercial_07.svg",
    "assets/img/gen/product/commercial_08.svg",
    "assets/img/gen/product/commercial_09.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "餐饮传菜机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Food Serving Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1006",
   "sku": "DA-118",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "行李搬运机器人 DA-118",
   "nameEn": "Luggage Carrier Robot DA-118",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 63840,
   "priceText": "¥63,840",
   "img": "assets/img/gen/product/commercial_07.svg",
   "imgs": [
    "assets/img/gen/product/commercial_07.svg",
    "assets/img/gen/product/commercial_08.svg",
    "assets/img/gen/product/commercial_09.svg",
    "assets/img/gen/product/commercial_10.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "行李搬运机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Luggage Carrier Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1007",
   "sku": "QT-121",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "消毒喷雾机器人 QT-121",
   "nameEn": "Disinfection Robot QT-121",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 22800,
   "priceText": "¥22,800",
   "img": "assets/img/gen/product/commercial_08.svg",
   "imgs": [
    "assets/img/gen/product/commercial_08.svg",
    "assets/img/gen/product/commercial_09.svg",
    "assets/img/gen/product/commercial_10.svg",
    "assets/img/gen/product/commercial_11.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "消毒喷雾机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Disinfection Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1008",
   "sku": "WH-124",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "展厅讲解机器人 WH-124",
   "nameEn": "Expo Narrator Robot WH-124",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 29640,
   "priceText": "¥29,640",
   "img": "assets/img/gen/product/commercial_09.svg",
   "imgs": [
    "assets/img/gen/product/commercial_09.svg",
    "assets/img/gen/product/commercial_10.svg",
    "assets/img/gen/product/commercial_11.svg",
    "assets/img/gen/product/commercial_12.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "展厅讲解机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Expo Narrator Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1009",
   "sku": "MX-127",
   "cat": "commercial",
   "catZh": "商用机器人",
   "catEn": "Commercial Robot",
   "name": "仓储搬运机器人 MX-127",
   "nameEn": "Warehouse Transfer Robot MX-127",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 36480,
   "priceText": "¥36,480",
   "img": "assets/img/gen/product/commercial_10.svg",
   "imgs": [
    "assets/img/gen/product/commercial_10.svg",
    "assets/img/gen/product/commercial_11.svg",
    "assets/img/gen/product/commercial_12.svg",
    "assets/img/gen/product/commercial_01.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "仓储搬运机器人，面向商用机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Warehouse Transfer Robot — standardized solution for Commercial Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1010",
   "sku": "CR-100",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "通用人形机器人 CR-100",
   "nameEn": "General Humanoid Robot CR-100",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 100800,
   "priceText": "¥100,800",
   "img": "assets/img/gen/product/embodied_01.svg",
   "imgs": [
    "assets/img/gen/product/embodied_01.svg",
    "assets/img/gen/product/embodied_02.svg",
    "assets/img/gen/product/embodied_03.svg",
    "assets/img/gen/product/embodied_04.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "通用人形机器人，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "General Humanoid Robot — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1011",
   "sku": "DS-103",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "双臂操作机器人 DS-103",
   "nameEn": "Dual-Arm Manipulator DS-103",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 131040,
   "priceText": "¥131,040",
   "img": "assets/img/gen/product/embodied_02.svg",
   "imgs": [
    "assets/img/gen/product/embodied_02.svg",
    "assets/img/gen/product/embodied_03.svg",
    "assets/img/gen/product/embodied_04.svg",
    "assets/img/gen/product/embodied_05.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "双臂操作机器人，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Dual-Arm Manipulator — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1012",
   "sku": "GB-106",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "四足巡检机器人 GB-106",
   "nameEn": "Quadruped Patrol Robot GB-106",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 161280,
   "priceText": "¥161,280",
   "img": "assets/img/gen/product/embodied_03.svg",
   "imgs": [
    "assets/img/gen/product/embodied_03.svg",
    "assets/img/gen/product/embodied_04.svg",
    "assets/img/gen/product/embodied_05.svg",
    "assets/img/gen/product/embodied_06.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "四足巡检机器人，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Quadruped Patrol Robot — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1013",
   "sku": "PT-109",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "轮式人形机器人 PT-109",
   "nameEn": "Wheeled Humanoid Robot PT-109",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 191520,
   "priceText": "¥191,520",
   "img": "assets/img/gen/product/embodied_04.svg",
   "imgs": [
    "assets/img/gen/product/embodied_04.svg",
    "assets/img/gen/product/embodied_05.svg",
    "assets/img/gen/product/embodied_06.svg",
    "assets/img/gen/product/embodied_07.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "轮式人形机器人，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Wheeled Humanoid Robot — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1014",
   "sku": "FL-112",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "灵巧手操作平台 FL-112",
   "nameEn": "Dexterous Hand Platform FL-112",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 221760,
   "priceText": "¥221,760",
   "img": "assets/img/gen/product/embodied_05.svg",
   "imgs": [
    "assets/img/gen/product/embodied_05.svg",
    "assets/img/gen/product/embodied_06.svg",
    "assets/img/gen/product/embodied_07.svg",
    "assets/img/gen/product/embodied_08.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "灵巧手操作平台，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Dexterous Hand Platform — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1015",
   "sku": "HR-115",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "家庭服务人形机 HR-115",
   "nameEn": "Home Service Humanoid HR-115",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 252000,
   "priceText": "¥252,000",
   "img": "assets/img/gen/product/embodied_06.svg",
   "imgs": [
    "assets/img/gen/product/embodied_06.svg",
    "assets/img/gen/product/embodied_07.svg",
    "assets/img/gen/product/embodied_08.svg",
    "assets/img/gen/product/embodied_09.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "家庭服务人形机，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Home Service Humanoid — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1016",
   "sku": "DA-118",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "全身力控机器人 DA-118",
   "nameEn": "Whole-Body Force Robot DA-118",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 282240,
   "priceText": "¥282,240",
   "img": "assets/img/gen/product/embodied_07.svg",
   "imgs": [
    "assets/img/gen/product/embodied_07.svg",
    "assets/img/gen/product/embodied_08.svg",
    "assets/img/gen/product/embodied_09.svg",
    "assets/img/gen/product/embodied_10.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "全身力控机器人，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Whole-Body Force Robot — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1017",
   "sku": "QT-121",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "具身操作本体 QT-121",
   "nameEn": "Embodied Manipulation Body QT-121",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 100800,
   "priceText": "¥100,800",
   "img": "assets/img/gen/product/embodied_08.svg",
   "imgs": [
    "assets/img/gen/product/embodied_08.svg",
    "assets/img/gen/product/embodied_09.svg",
    "assets/img/gen/product/embodied_10.svg",
    "assets/img/gen/product/embodied_11.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "具身操作本体，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Embodied Manipulation Body — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1018",
   "sku": "WH-124",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "轻量人形本体 WH-124",
   "nameEn": "Lightweight Humanoid WH-124",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 131040,
   "priceText": "¥131,040",
   "img": "assets/img/gen/product/embodied_09.svg",
   "imgs": [
    "assets/img/gen/product/embodied_09.svg",
    "assets/img/gen/product/embodied_10.svg",
    "assets/img/gen/product/embodied_11.svg",
    "assets/img/gen/product/embodied_12.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "轻量人形本体，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Lightweight Humanoid — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1019",
   "sku": "MX-127",
   "cat": "embodied",
   "catZh": "具身机器人",
   "catEn": "Embodied Robot",
   "name": "科研人形平台 MX-127",
   "nameEn": "Research Humanoid Platform MX-127",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 161280,
   "priceText": "¥161,280",
   "img": "assets/img/gen/product/embodied_10.svg",
   "imgs": [
    "assets/img/gen/product/embodied_10.svg",
    "assets/img/gen/product/embodied_11.svg",
    "assets/img/gen/product/embodied_12.svg",
    "assets/img/gen/product/embodied_01.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "科研人形平台，面向具身机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Research Humanoid Platform — standardized solution for Embodied Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1020",
   "sku": "CR-100",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制巡检机器人 CR-100",
   "nameEn": "Custom Inspection Robot CR-100",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 57600,
   "priceText": "¥57,600",
   "img": "assets/img/gen/product/custom_01.svg",
   "imgs": [
    "assets/img/gen/product/custom_01.svg",
    "assets/img/gen/product/custom_02.svg",
    "assets/img/gen/product/custom_03.svg",
    "assets/img/gen/product/custom_04.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "定制巡检机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Inspection Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1021",
   "sku": "DS-103",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制分拣机械臂 DS-103",
   "nameEn": "Custom Sorting Arm DS-103",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 74880,
   "priceText": "¥74,880",
   "img": "assets/img/gen/product/custom_02.svg",
   "imgs": [
    "assets/img/gen/product/custom_02.svg",
    "assets/img/gen/product/custom_03.svg",
    "assets/img/gen/product/custom_04.svg",
    "assets/img/gen/product/custom_05.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "定制分拣机械臂，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Sorting Arm — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1022",
   "sku": "GB-106",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制教育机器人 GB-106",
   "nameEn": "Custom Education Robot GB-106",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 92160,
   "priceText": "¥92,160",
   "img": "assets/img/gen/product/custom_03.svg",
   "imgs": [
    "assets/img/gen/product/custom_03.svg",
    "assets/img/gen/product/custom_04.svg",
    "assets/img/gen/product/custom_05.svg",
    "assets/img/gen/product/custom_06.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "定制教育机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Education Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1023",
   "sku": "PT-109",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制农业机器人 PT-109",
   "nameEn": "Custom Agri Robot PT-109",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 109440,
   "priceText": "¥109,440",
   "img": "assets/img/gen/product/custom_04.svg",
   "imgs": [
    "assets/img/gen/product/custom_04.svg",
    "assets/img/gen/product/custom_05.svg",
    "assets/img/gen/product/custom_06.svg",
    "assets/img/gen/product/custom_07.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "定制农业机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Agri Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1024",
   "sku": "FL-112",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制消毒机器人 FL-112",
   "nameEn": "Custom Disinfection Robot FL-112",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 126720,
   "priceText": "¥126,720",
   "img": "assets/img/gen/product/custom_05.svg",
   "imgs": [
    "assets/img/gen/product/custom_05.svg",
    "assets/img/gen/product/custom_06.svg",
    "assets/img/gen/product/custom_07.svg",
    "assets/img/gen/product/custom_08.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "定制消毒机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Disinfection Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1025",
   "sku": "HR-115",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制焊接机器人 HR-115",
   "nameEn": "Custom Welding Robot HR-115",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 144000,
   "priceText": "¥144,000",
   "img": "assets/img/gen/product/custom_06.svg",
   "imgs": [
    "assets/img/gen/product/custom_06.svg",
    "assets/img/gen/product/custom_07.svg",
    "assets/img/gen/product/custom_08.svg",
    "assets/img/gen/product/custom_09.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "定制焊接机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Welding Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1026",
   "sku": "DA-118",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制巡检无人机舱 DA-118",
   "nameEn": "Custom Drone Dock DA-118",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 161280,
   "priceText": "¥161,280",
   "img": "assets/img/gen/product/custom_07.svg",
   "imgs": [
    "assets/img/gen/product/custom_07.svg",
    "assets/img/gen/product/custom_08.svg",
    "assets/img/gen/product/custom_09.svg",
    "assets/img/gen/product/custom_10.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "定制巡检无人机舱，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Drone Dock — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1027",
   "sku": "QT-121",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制搬运 AGV QT-121",
   "nameEn": "Custom AGV Transporter QT-121",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 57600,
   "priceText": "¥57,600",
   "img": "assets/img/gen/product/custom_08.svg",
   "imgs": [
    "assets/img/gen/product/custom_08.svg",
    "assets/img/gen/product/custom_09.svg",
    "assets/img/gen/product/custom_10.svg",
    "assets/img/gen/product/custom_11.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "定制搬运 AGV，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom AGV Transporter — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1028",
   "sku": "WH-124",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制安防机器人 WH-124",
   "nameEn": "Custom Security Robot WH-124",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 74880,
   "priceText": "¥74,880",
   "img": "assets/img/gen/product/custom_09.svg",
   "imgs": [
    "assets/img/gen/product/custom_09.svg",
    "assets/img/gen/product/custom_10.svg",
    "assets/img/gen/product/custom_11.svg",
    "assets/img/gen/product/custom_12.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "定制安防机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Security Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1029",
   "sku": "MX-127",
   "cat": "custom",
   "catZh": "定制机器人",
   "catEn": "Custom Robot",
   "name": "定制陪伴机器人 MX-127",
   "nameEn": "Custom Companion Robot MX-127",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 92160,
   "priceText": "¥92,160",
   "img": "assets/img/gen/product/custom_10.svg",
   "imgs": [
    "assets/img/gen/product/custom_10.svg",
    "assets/img/gen/product/custom_11.svg",
    "assets/img/gen/product/custom_12.svg",
    "assets/img/gen/product/custom_01.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "定制陪伴机器人，面向定制机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Custom Companion Robot — standardized solution for Custom Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1030",
   "sku": "CR-100",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "激光雷达感知模块 CR-100",
   "nameEn": "LiDAR Perception Module CR-100",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 1560,
   "priceText": "¥1,560",
   "img": "assets/img/gen/product/module_01.svg",
   "imgs": [
    "assets/img/gen/product/module_01.svg",
    "assets/img/gen/product/module_02.svg",
    "assets/img/gen/product/module_03.svg",
    "assets/img/gen/product/module_04.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "激光雷达感知模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "LiDAR Perception Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1031",
   "sku": "DS-103",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "IMU 姿态模块 DS-103",
   "nameEn": "IMU Attitude Module DS-103",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 2030,
   "priceText": "¥2,030",
   "img": "assets/img/gen/product/module_02.svg",
   "imgs": [
    "assets/img/gen/product/module_02.svg",
    "assets/img/gen/product/module_03.svg",
    "assets/img/gen/product/module_04.svg",
    "assets/img/gen/product/module_05.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "IMU 姿态模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "IMU Attitude Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1032",
   "sku": "GB-106",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "伺服驱动模块 GB-106",
   "nameEn": "Servo Driver Module GB-106",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 2500,
   "priceText": "¥2,500",
   "img": "assets/img/gen/product/module_03.svg",
   "imgs": [
    "assets/img/gen/product/module_03.svg",
    "assets/img/gen/product/module_04.svg",
    "assets/img/gen/product/module_05.svg",
    "assets/img/gen/product/module_06.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "伺服驱动模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Servo Driver Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1033",
   "sku": "PT-109",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "边缘计算模块 PT-109",
   "nameEn": "Edge Compute Module PT-109",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 2960,
   "priceText": "¥2,960",
   "img": "assets/img/gen/product/module_04.svg",
   "imgs": [
    "assets/img/gen/product/module_04.svg",
    "assets/img/gen/product/module_05.svg",
    "assets/img/gen/product/module_06.svg",
    "assets/img/gen/product/module_07.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "边缘计算模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Edge Compute Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1034",
   "sku": "FL-112",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "电源管理模块 FL-112",
   "nameEn": "Power Management Module FL-112",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 3430,
   "priceText": "¥3,430",
   "img": "assets/img/gen/product/module_05.svg",
   "imgs": [
    "assets/img/gen/product/module_05.svg",
    "assets/img/gen/product/module_06.svg",
    "assets/img/gen/product/module_07.svg",
    "assets/img/gen/product/module_08.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "电源管理模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Power Management Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1035",
   "sku": "HR-115",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "无线通信模块 HR-115",
   "nameEn": "Wireless Comm Module HR-115",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 3900,
   "priceText": "¥3,900",
   "img": "assets/img/gen/product/module_06.svg",
   "imgs": [
    "assets/img/gen/product/module_06.svg",
    "assets/img/gen/product/module_07.svg",
    "assets/img/gen/product/module_08.svg",
    "assets/img/gen/product/module_09.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "无线通信模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Wireless Comm Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1036",
   "sku": "DA-118",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "视觉识别模块 DA-118",
   "nameEn": "Vision Recognition Module DA-118",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 4370,
   "priceText": "¥4,370",
   "img": "assets/img/gen/product/module_07.svg",
   "imgs": [
    "assets/img/gen/product/module_07.svg",
    "assets/img/gen/product/module_08.svg",
    "assets/img/gen/product/module_09.svg",
    "assets/img/gen/product/module_10.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "视觉识别模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Vision Recognition Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1037",
   "sku": "QT-121",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "力控关节模块 QT-121",
   "nameEn": "Force-Control Joint Module QT-121",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 1560,
   "priceText": "¥1,560",
   "img": "assets/img/gen/product/module_08.svg",
   "imgs": [
    "assets/img/gen/product/module_08.svg",
    "assets/img/gen/product/module_09.svg",
    "assets/img/gen/product/module_10.svg",
    "assets/img/gen/product/module_11.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "力控关节模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Force-Control Joint Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1038",
   "sku": "WH-124",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "语音交互模块 WH-124",
   "nameEn": "Voice Interaction Module WH-124",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 2030,
   "priceText": "¥2,030",
   "img": "assets/img/gen/product/module_09.svg",
   "imgs": [
    "assets/img/gen/product/module_09.svg",
    "assets/img/gen/product/module_10.svg",
    "assets/img/gen/product/module_11.svg",
    "assets/img/gen/product/module_12.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "语音交互模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Voice Interaction Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1039",
   "sku": "MX-127",
   "cat": "module",
   "catZh": "机器人模块",
   "catEn": "Robot Module",
   "name": "导航定位模块 MX-127",
   "nameEn": "Navigation Module MX-127",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 2500,
   "priceText": "¥2,500",
   "img": "assets/img/gen/product/module_10.svg",
   "imgs": [
    "assets/img/gen/product/module_10.svg",
    "assets/img/gen/product/module_11.svg",
    "assets/img/gen/product/module_12.svg",
    "assets/img/gen/product/module_01.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "导航定位模块，面向机器人模块场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Navigation Module — standardized solution for Robot Module scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "24V DC / 5A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1040",
   "sku": "CR-100",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "无框力矩电机 CR-100",
   "nameEn": "Frameless Torque Motor CR-100",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 590,
   "priceText": "¥590",
   "img": "assets/img/gen/product/component_01.svg",
   "imgs": [
    "assets/img/gen/product/component_01.svg",
    "assets/img/gen/product/component_02.svg",
    "assets/img/gen/product/component_03.svg",
    "assets/img/gen/product/component_04.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "无框力矩电机，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Frameless Torque Motor — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1041",
   "sku": "DS-103",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "绝对值编码器 DS-103",
   "nameEn": "Absolute Encoder DS-103",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 760,
   "priceText": "¥760",
   "img": "assets/img/gen/product/component_02.svg",
   "imgs": [
    "assets/img/gen/product/component_02.svg",
    "assets/img/gen/product/component_03.svg",
    "assets/img/gen/product/component_04.svg",
    "assets/img/gen/product/component_05.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "绝对值编码器，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Absolute Encoder — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1042",
   "sku": "GB-106",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "谐波减速器 GB-106",
   "nameEn": "Harmonic Reducer GB-106",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 940,
   "priceText": "¥940",
   "img": "assets/img/gen/product/component_03.svg",
   "imgs": [
    "assets/img/gen/product/component_03.svg",
    "assets/img/gen/product/component_04.svg",
    "assets/img/gen/product/component_05.svg",
    "assets/img/gen/product/component_06.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "谐波减速器，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Harmonic Reducer — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1043",
   "sku": "PT-109",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "行星减速器 PT-109",
   "nameEn": "Planetary Reducer PT-109",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 1120,
   "priceText": "¥1,120",
   "img": "assets/img/gen/product/component_04.svg",
   "imgs": [
    "assets/img/gen/product/component_04.svg",
    "assets/img/gen/product/component_05.svg",
    "assets/img/gen/product/component_06.svg",
    "assets/img/gen/product/component_07.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "行星减速器，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Planetary Reducer — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1044",
   "sku": "FL-112",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "总线舵机 FL-112",
   "nameEn": "Bus Servo FL-112",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 1290,
   "priceText": "¥1,290",
   "img": "assets/img/gen/product/component_05.svg",
   "imgs": [
    "assets/img/gen/product/component_05.svg",
    "assets/img/gen/product/component_06.svg",
    "assets/img/gen/product/component_07.svg",
    "assets/img/gen/product/component_08.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "总线舵机，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Bus Servo — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1045",
   "sku": "HR-115",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "动力锂电池组 HR-115",
   "nameEn": "Power Li-ion Pack HR-115",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 1470,
   "priceText": "¥1,470",
   "img": "assets/img/gen/product/component_06.svg",
   "imgs": [
    "assets/img/gen/product/component_06.svg",
    "assets/img/gen/product/component_07.svg",
    "assets/img/gen/product/component_08.svg",
    "assets/img/gen/product/component_09.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "动力锂电池组，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Power Li-ion Pack — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1046",
   "sku": "DA-118",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "深度相机模组 DA-118",
   "nameEn": "Depth Camera Module DA-118",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 1650,
   "priceText": "¥1,650",
   "img": "assets/img/gen/product/component_07.svg",
   "imgs": [
    "assets/img/gen/product/component_07.svg",
    "assets/img/gen/product/component_08.svg",
    "assets/img/gen/product/component_09.svg",
    "assets/img/gen/product/component_10.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "深度相机模组，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Depth Camera Module — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1047",
   "sku": "QT-121",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "超声波传感器 QT-121",
   "nameEn": "Ultrasonic Sensor QT-121",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 590,
   "priceText": "¥590",
   "img": "assets/img/gen/product/component_08.svg",
   "imgs": [
    "assets/img/gen/product/component_08.svg",
    "assets/img/gen/product/component_09.svg",
    "assets/img/gen/product/component_10.svg",
    "assets/img/gen/product/component_11.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "超声波传感器，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Ultrasonic Sensor — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1048",
   "sku": "WH-124",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "六维力传感器 WH-124",
   "nameEn": "6-Axis Force Sensor WH-124",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 760,
   "priceText": "¥760",
   "img": "assets/img/gen/product/component_09.svg",
   "imgs": [
    "assets/img/gen/product/component_09.svg",
    "assets/img/gen/product/component_10.svg",
    "assets/img/gen/product/component_11.svg",
    "assets/img/gen/product/component_12.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "六维力传感器，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "6-Axis Force Sensor — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1049",
   "sku": "MX-127",
   "cat": "component",
   "catZh": "机器人组件",
   "catEn": "Robot Component",
   "name": "工控主板 MX-127",
   "nameEn": "Industrial Control Board MX-127",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 940,
   "priceText": "¥940",
   "img": "assets/img/gen/product/component_10.svg",
   "imgs": [
    "assets/img/gen/product/component_10.svg",
    "assets/img/gen/product/component_11.svg",
    "assets/img/gen/product/component_12.svg",
    "assets/img/gen/product/component_01.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "工控主板，面向机器人组件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Industrial Control Board — standardized solution for Robot Component scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1050",
   "sku": "CR-100",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "模块连接法兰 CR-100",
   "nameEn": "Module Flange CR-100",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 100,
   "priceText": "¥100",
   "img": "assets/img/gen/product/accessory_01.svg",
   "imgs": [
    "assets/img/gen/product/accessory_01.svg",
    "assets/img/gen/product/accessory_02.svg",
    "assets/img/gen/product/accessory_03.svg",
    "assets/img/gen/product/accessory_04.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "模块连接法兰，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Module Flange — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1051",
   "sku": "DS-103",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "快插线束套件 DS-103",
   "nameEn": "Quick Cable Kit DS-103",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 130,
   "priceText": "¥130",
   "img": "assets/img/gen/product/accessory_02.svg",
   "imgs": [
    "assets/img/gen/product/accessory_02.svg",
    "assets/img/gen/product/accessory_03.svg",
    "assets/img/gen/product/accessory_04.svg",
    "assets/img/gen/product/accessory_05.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "快插线束套件，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Quick Cable Kit — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1052",
   "sku": "GB-106",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "可调支架套件 GB-106",
   "nameEn": "Adjustable Bracket Kit GB-106",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 160,
   "priceText": "¥160",
   "img": "assets/img/gen/product/accessory_03.svg",
   "imgs": [
    "assets/img/gen/product/accessory_03.svg",
    "assets/img/gen/product/accessory_04.svg",
    "assets/img/gen/product/accessory_05.svg",
    "assets/img/gen/product/accessory_06.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "可调支架套件，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Adjustable Bracket Kit — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1053",
   "sku": "PT-109",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "散热片组件 PT-109",
   "nameEn": "Heatsink Assembly PT-109",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 190,
   "priceText": "¥190",
   "img": "assets/img/gen/product/accessory_04.svg",
   "imgs": [
    "assets/img/gen/product/accessory_04.svg",
    "assets/img/gen/product/accessory_05.svg",
    "assets/img/gen/product/accessory_06.svg",
    "assets/img/gen/product/accessory_07.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "散热片组件，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Heatsink Assembly — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1054",
   "sku": "FL-112",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "磁吸底座 FL-112",
   "nameEn": "Magnetic Base FL-112",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 220,
   "priceText": "¥220",
   "img": "assets/img/gen/product/accessory_05.svg",
   "imgs": [
    "assets/img/gen/product/accessory_05.svg",
    "assets/img/gen/product/accessory_06.svg",
    "assets/img/gen/product/accessory_07.svg",
    "assets/img/gen/product/accessory_08.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "磁吸底座，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Magnetic Base — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1055",
   "sku": "HR-115",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "减震垫组 HR-115",
   "nameEn": "Damper Pad Set HR-115",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 250,
   "priceText": "¥250",
   "img": "assets/img/gen/product/accessory_06.svg",
   "imgs": [
    "assets/img/gen/product/accessory_06.svg",
    "assets/img/gen/product/accessory_07.svg",
    "assets/img/gen/product/accessory_08.svg",
    "assets/img/gen/product/accessory_09.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "减震垫组，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Damper Pad Set — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1056",
   "sku": "DA-118",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "导轨滑块组 DA-118",
   "nameEn": "Rail Slider Set DA-118",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 280,
   "priceText": "¥280",
   "img": "assets/img/gen/product/accessory_07.svg",
   "imgs": [
    "assets/img/gen/product/accessory_07.svg",
    "assets/img/gen/product/accessory_08.svg",
    "assets/img/gen/product/accessory_09.svg",
    "assets/img/gen/product/accessory_10.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "导轨滑块组，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Rail Slider Set — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1057",
   "sku": "QT-121",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "防水接头组 QT-121",
   "nameEn": "Waterproof Connector Set QT-121",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 100,
   "priceText": "¥100",
   "img": "assets/img/gen/product/accessory_08.svg",
   "imgs": [
    "assets/img/gen/product/accessory_08.svg",
    "assets/img/gen/product/accessory_09.svg",
    "assets/img/gen/product/accessory_10.svg",
    "assets/img/gen/product/accessory_11.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "防水接头组，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Waterproof Connector Set — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1058",
   "sku": "WH-124",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "扩展转接板 WH-124",
   "nameEn": "Expansion Adapter WH-124",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 130,
   "priceText": "¥130",
   "img": "assets/img/gen/product/accessory_09.svg",
   "imgs": [
    "assets/img/gen/product/accessory_09.svg",
    "assets/img/gen/product/accessory_10.svg",
    "assets/img/gen/product/accessory_11.svg",
    "assets/img/gen/product/accessory_12.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "扩展转接板，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Expansion Adapter — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1059",
   "sku": "MX-127",
   "cat": "accessory",
   "catZh": "模块配件",
   "catEn": "Module Accessory",
   "name": "编码器延长线 MX-127",
   "nameEn": "Encoder Extension Cable MX-127",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 160,
   "priceText": "¥160",
   "img": "assets/img/gen/product/accessory_10.svg",
   "imgs": [
    "assets/img/gen/product/accessory_10.svg",
    "assets/img/gen/product/accessory_11.svg",
    "assets/img/gen/product/accessory_12.svg",
    "assets/img/gen/product/accessory_01.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "编码器延长线，面向模块配件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Encoder Extension Cable — standardized solution for Module Accessory scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1060",
   "sku": "CR-100",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "工业铝型材 2020 CR-100",
   "nameEn": "Aluminum Profile 2020 CR-100",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 30,
   "priceText": "¥30",
   "img": "assets/img/gen/product/hardware_01.svg",
   "imgs": [
    "assets/img/gen/product/hardware_01.svg",
    "assets/img/gen/product/hardware_02.svg",
    "assets/img/gen/product/hardware_03.svg",
    "assets/img/gen/product/hardware_04.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "工业铝型材 2020，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Aluminum Profile 2020 — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1061",
   "sku": "DS-103",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "不锈钢螺栓组 DS-103",
   "nameEn": "Stainless Bolt Set DS-103",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 40,
   "priceText": "¥40",
   "img": "assets/img/gen/product/hardware_02.svg",
   "imgs": [
    "assets/img/gen/product/hardware_02.svg",
    "assets/img/gen/product/hardware_03.svg",
    "assets/img/gen/product/hardware_04.svg",
    "assets/img/gen/product/hardware_05.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "不锈钢螺栓组，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Stainless Bolt Set — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1062",
   "sku": "GB-106",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "直线导轨 MGN12 GB-106",
   "nameEn": "Linear Rail MGN12 GB-106",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 40,
   "priceText": "¥40",
   "img": "assets/img/gen/product/hardware_03.svg",
   "imgs": [
    "assets/img/gen/product/hardware_03.svg",
    "assets/img/gen/product/hardware_04.svg",
    "assets/img/gen/product/hardware_05.svg",
    "assets/img/gen/product/hardware_06.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "直线导轨 MGN12，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Linear Rail MGN12 — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1063",
   "sku": "PT-109",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "轴承座组件 PT-109",
   "nameEn": "Bearing Housing PT-109",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 50,
   "priceText": "¥50",
   "img": "assets/img/gen/product/hardware_04.svg",
   "imgs": [
    "assets/img/gen/product/hardware_04.svg",
    "assets/img/gen/product/hardware_05.svg",
    "assets/img/gen/product/hardware_06.svg",
    "assets/img/gen/product/hardware_07.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "轴承座组件，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Bearing Housing — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1064",
   "sku": "FL-112",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "角码连接件 FL-112",
   "nameEn": "Corner Bracket FL-112",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 60,
   "priceText": "¥60",
   "img": "assets/img/gen/product/hardware_05.svg",
   "imgs": [
    "assets/img/gen/product/hardware_05.svg",
    "assets/img/gen/product/hardware_06.svg",
    "assets/img/gen/product/hardware_07.svg",
    "assets/img/gen/product/hardware_08.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "角码连接件，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Corner Bracket — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1065",
   "sku": "HR-115",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "碳纤维板 3mm HR-115",
   "nameEn": "Carbon Fiber Plate 3mm HR-115",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 70,
   "priceText": "¥70",
   "img": "assets/img/gen/product/hardware_06.svg",
   "imgs": [
    "assets/img/gen/product/hardware_06.svg",
    "assets/img/gen/product/hardware_07.svg",
    "assets/img/gen/product/hardware_08.svg",
    "assets/img/gen/product/hardware_09.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "碳纤维板 3mm，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Carbon Fiber Plate 3mm — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1066",
   "sku": "DA-118",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "万向轮组 DA-118",
   "nameEn": "Caster Wheel Set DA-118",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 80,
   "priceText": "¥80",
   "img": "assets/img/gen/product/hardware_07.svg",
   "imgs": [
    "assets/img/gen/product/hardware_07.svg",
    "assets/img/gen/product/hardware_08.svg",
    "assets/img/gen/product/hardware_09.svg",
    "assets/img/gen/product/hardware_10.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "万向轮组，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Caster Wheel Set — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1067",
   "sku": "QT-121",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "联轴器 QT-121",
   "nameEn": "Shaft Coupling QT-121",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 30,
   "priceText": "¥30",
   "img": "assets/img/gen/product/hardware_08.svg",
   "imgs": [
    "assets/img/gen/product/hardware_08.svg",
    "assets/img/gen/product/hardware_09.svg",
    "assets/img/gen/product/hardware_10.svg",
    "assets/img/gen/product/hardware_11.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "联轴器，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Shaft Coupling — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1068",
   "sku": "WH-124",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "同步带轮组 WH-124",
   "nameEn": "Timing Pulley Set WH-124",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 40,
   "priceText": "¥40",
   "img": "assets/img/gen/product/hardware_09.svg",
   "imgs": [
    "assets/img/gen/product/hardware_09.svg",
    "assets/img/gen/product/hardware_10.svg",
    "assets/img/gen/product/hardware_11.svg",
    "assets/img/gen/product/hardware_12.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "同步带轮组，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Timing Pulley Set — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1069",
   "sku": "MX-127",
   "cat": "hardware",
   "catZh": "五金件",
   "catEn": "Hardware Part",
   "name": "铝合金底板 MX-127",
   "nameEn": "Aluminum Base Plate MX-127",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 40,
   "priceText": "¥40",
   "img": "assets/img/gen/product/hardware_10.svg",
   "imgs": [
    "assets/img/gen/product/hardware_10.svg",
    "assets/img/gen/product/hardware_11.svg",
    "assets/img/gen/product/hardware_12.svg",
    "assets/img/gen/product/hardware_01.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "铝合金底板，面向五金件场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Aluminum Base Plate — standardized solution for Hardware Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1070",
   "sku": "CR-100",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "机械臂外壳打印件 CR-100",
   "nameEn": "Printed Arm Shell CR-100",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 50,
   "priceText": "¥50",
   "img": "assets/img/gen/product/print3d_01.svg",
   "imgs": [
    "assets/img/gen/product/print3d_01.svg",
    "assets/img/gen/product/print3d_02.svg",
    "assets/img/gen/product/print3d_03.svg",
    "assets/img/gen/product/print3d_04.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "机械臂外壳打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Printed Arm Shell — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1071",
   "sku": "DS-103",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "关节支架打印件 DS-103",
   "nameEn": "Printed Joint Bracket DS-103",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 70,
   "priceText": "¥70",
   "img": "assets/img/gen/product/print3d_02.svg",
   "imgs": [
    "assets/img/gen/product/print3d_02.svg",
    "assets/img/gen/product/print3d_03.svg",
    "assets/img/gen/product/print3d_04.svg",
    "assets/img/gen/product/print3d_05.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "关节支架打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Printed Joint Bracket — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1072",
   "sku": "GB-106",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "PLA 定制面板 GB-106",
   "nameEn": "PLA Custom Panel GB-106",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 80,
   "priceText": "¥80",
   "img": "assets/img/gen/product/print3d_03.svg",
   "imgs": [
    "assets/img/gen/product/print3d_03.svg",
    "assets/img/gen/product/print3d_04.svg",
    "assets/img/gen/product/print3d_05.svg",
    "assets/img/gen/product/print3d_06.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "PLA 定制面板，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "PLA Custom Panel — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1073",
   "sku": "PT-109",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "尼龙齿轮打印件 PT-109",
   "nameEn": "Nylon Gear Print PT-109",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 100,
   "priceText": "¥100",
   "img": "assets/img/gen/product/print3d_04.svg",
   "imgs": [
    "assets/img/gen/product/print3d_04.svg",
    "assets/img/gen/product/print3d_05.svg",
    "assets/img/gen/product/print3d_06.svg",
    "assets/img/gen/product/print3d_07.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "尼龙齿轮打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Nylon Gear Print — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1074",
   "sku": "FL-112",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "传感器罩打印件 FL-112",
   "nameEn": "Printed Sensor Cover FL-112",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 120,
   "priceText": "¥120",
   "img": "assets/img/gen/product/print3d_05.svg",
   "imgs": [
    "assets/img/gen/product/print3d_05.svg",
    "assets/img/gen/product/print3d_06.svg",
    "assets/img/gen/product/print3d_07.svg",
    "assets/img/gen/product/print3d_08.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "传感器罩打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Printed Sensor Cover — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1075",
   "sku": "HR-115",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "履带轮打印件 HR-115",
   "nameEn": "Printed Track Wheel HR-115",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 130,
   "priceText": "¥130",
   "img": "assets/img/gen/product/print3d_06.svg",
   "imgs": [
    "assets/img/gen/product/print3d_06.svg",
    "assets/img/gen/product/print3d_07.svg",
    "assets/img/gen/product/print3d_08.svg",
    "assets/img/gen/product/print3d_09.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "履带轮打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Printed Track Wheel — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1076",
   "sku": "DA-118",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "机器人底盘打印件 DA-118",
   "nameEn": "Printed Robot Chassis DA-118",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 150,
   "priceText": "¥150",
   "img": "assets/img/gen/product/print3d_07.svg",
   "imgs": [
    "assets/img/gen/product/print3d_07.svg",
    "assets/img/gen/product/print3d_08.svg",
    "assets/img/gen/product/print3d_09.svg",
    "assets/img/gen/product/print3d_10.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "机器人底盘打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Printed Robot Chassis — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1077",
   "sku": "QT-121",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "拼接积木结构件 QT-121",
   "nameEn": "Snap Brick Structure QT-121",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 50,
   "priceText": "¥50",
   "img": "assets/img/gen/product/print3d_08.svg",
   "imgs": [
    "assets/img/gen/product/print3d_08.svg",
    "assets/img/gen/product/print3d_09.svg",
    "assets/img/gen/product/print3d_10.svg",
    "assets/img/gen/product/print3d_11.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "拼接积木结构件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Snap Brick Structure — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1078",
   "sku": "WH-124",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "碳纤维增强打印件 WH-124",
   "nameEn": "Carbon Fiber Print WH-124",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 70,
   "priceText": "¥70",
   "img": "assets/img/gen/product/print3d_09.svg",
   "imgs": [
    "assets/img/gen/product/print3d_09.svg",
    "assets/img/gen/product/print3d_10.svg",
    "assets/img/gen/product/print3d_11.svg",
    "assets/img/gen/product/print3d_12.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "碳纤维增强打印件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Carbon Fiber Print — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1079",
   "sku": "MX-127",
   "cat": "print3d",
   "catZh": "3D打印产品",
   "catEn": "3D Printed Part",
   "name": "柔性 TPU 缓冲件 MX-127",
   "nameEn": "Flexible TPU Bumper MX-127",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 80,
   "priceText": "¥80",
   "img": "assets/img/gen/product/print3d_10.svg",
   "imgs": [
    "assets/img/gen/product/print3d_10.svg",
    "assets/img/gen/product/print3d_11.svg",
    "assets/img/gen/product/print3d_12.svg",
    "assets/img/gen/product/print3d_01.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "柔性 TPU 缓冲件，面向3D打印产品场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Flexible TPU Bumper — standardized solution for 3D Printed Part scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1080",
   "sku": "CR-100",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "IP65 防护外壳 CR-100",
   "nameEn": "IP65 Enclosure CR-100",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 280,
   "priceText": "¥280",
   "img": "assets/img/gen/product/shell_01.svg",
   "imgs": [
    "assets/img/gen/product/shell_01.svg",
    "assets/img/gen/product/shell_02.svg",
    "assets/img/gen/product/shell_03.svg",
    "assets/img/gen/product/shell_04.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "IP65 防护外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "IP65 Enclosure — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1081",
   "sku": "DS-103",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "透明展示外壳 DS-103",
   "nameEn": "Transparent Display Shell DS-103",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 360,
   "priceText": "¥360",
   "img": "assets/img/gen/product/shell_02.svg",
   "imgs": [
    "assets/img/gen/product/shell_02.svg",
    "assets/img/gen/product/shell_03.svg",
    "assets/img/gen/product/shell_04.svg",
    "assets/img/gen/product/shell_05.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "透明展示外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Transparent Display Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1082",
   "sku": "GB-106",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "钣金机箱外壳 GB-106",
   "nameEn": "Sheet Metal Case GB-106",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 440,
   "priceText": "¥440",
   "img": "assets/img/gen/product/shell_03.svg",
   "imgs": [
    "assets/img/gen/product/shell_03.svg",
    "assets/img/gen/product/shell_04.svg",
    "assets/img/gen/product/shell_05.svg",
    "assets/img/gen/product/shell_06.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "钣金机箱外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Sheet Metal Case — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1083",
   "sku": "PT-109",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "注塑外壳套件 PT-109",
   "nameEn": "Injection Molded Shell PT-109",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 520,
   "priceText": "¥520",
   "img": "assets/img/gen/product/shell_04.svg",
   "imgs": [
    "assets/img/gen/product/shell_04.svg",
    "assets/img/gen/product/shell_05.svg",
    "assets/img/gen/product/shell_06.svg",
    "assets/img/gen/product/shell_07.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "注塑外壳套件，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Injection Molded Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1084",
   "sku": "FL-112",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "模块化框架外壳 FL-112",
   "nameEn": "Modular Frame Shell FL-112",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 610,
   "priceText": "¥610",
   "img": "assets/img/gen/product/shell_05.svg",
   "imgs": [
    "assets/img/gen/product/shell_05.svg",
    "assets/img/gen/product/shell_06.svg",
    "assets/img/gen/product/shell_07.svg",
    "assets/img/gen/product/shell_08.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "模块化框架外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Modular Frame Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1085",
   "sku": "HR-115",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "防爆认证外壳 HR-115",
   "nameEn": "Explosion-proof Shell HR-115",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 690,
   "priceText": "¥690",
   "img": "assets/img/gen/product/shell_06.svg",
   "imgs": [
    "assets/img/gen/product/shell_06.svg",
    "assets/img/gen/product/shell_07.svg",
    "assets/img/gen/product/shell_08.svg",
    "assets/img/gen/product/shell_09.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "防爆认证外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Explosion-proof Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1086",
   "sku": "DA-118",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "壁挂式外壳 DA-118",
   "nameEn": "Wall-mount Shell DA-118",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 770,
   "priceText": "¥770",
   "img": "assets/img/gen/product/shell_07.svg",
   "imgs": [
    "assets/img/gen/product/shell_07.svg",
    "assets/img/gen/product/shell_08.svg",
    "assets/img/gen/product/shell_09.svg",
    "assets/img/gen/product/shell_10.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "壁挂式外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Wall-mount Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1087",
   "sku": "QT-121",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "移动底盘外壳 QT-121",
   "nameEn": "Mobile Base Shell QT-121",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 280,
   "priceText": "¥280",
   "img": "assets/img/gen/product/shell_08.svg",
   "imgs": [
    "assets/img/gen/product/shell_08.svg",
    "assets/img/gen/product/shell_09.svg",
    "assets/img/gen/product/shell_10.svg",
    "assets/img/gen/product/shell_11.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "移动底盘外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Mobile Base Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1088",
   "sku": "WH-124",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "防水接线盒 WH-124",
   "nameEn": "Waterproof Junction Box WH-124",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 360,
   "priceText": "¥360",
   "img": "assets/img/gen/product/shell_09.svg",
   "imgs": [
    "assets/img/gen/product/shell_09.svg",
    "assets/img/gen/product/shell_10.svg",
    "assets/img/gen/product/shell_11.svg",
    "assets/img/gen/product/shell_12.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "防水接线盒，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Waterproof Junction Box — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1089",
   "sku": "MX-127",
   "cat": "shell",
   "catZh": "外壳结构",
   "catEn": "Enclosure Shell",
   "name": "桌面机器人外壳 MX-127",
   "nameEn": "Desktop Robot Shell MX-127",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 440,
   "priceText": "¥440",
   "img": "assets/img/gen/product/shell_10.svg",
   "imgs": [
    "assets/img/gen/product/shell_10.svg",
    "assets/img/gen/product/shell_11.svg",
    "assets/img/gen/product/shell_12.svg",
    "assets/img/gen/product/shell_01.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "桌面机器人外壳，面向外壳结构场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Desktop Robot Shell — standardized solution for Enclosure Shell scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  },
  {
   "id": "P1090",
   "sku": "CR-100",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "桌面宠物机器人 CR-100",
   "nameEn": "Desktop Pet Robot CR-100",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 180,
   "priceText": "¥180",
   "img": "assets/img/gen/product/toy_01.svg",
   "imgs": [
    "assets/img/gen/product/toy_01.svg",
    "assets/img/gen/product/toy_02.svg",
    "assets/img/gen/product/toy_03.svg",
    "assets/img/gen/product/toy_04.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.6,
   "sales": 120,
   "views": 800,
   "stock": 20,
   "desc": "桌面宠物机器人，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Desktop Pet Robot — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "180×140×90 mm"
    ],
    [
     "重量 Weight",
     "0.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "8.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:10",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_01.svg"
    }
   ]
  },
  {
   "id": "P1091",
   "sku": "DS-103",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "拼装小车机器人 DS-103",
   "nameEn": "Snap Car Robot DS-103",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 230,
   "priceText": "¥230",
   "img": "assets/img/gen/product/toy_02.svg",
   "imgs": [
    "assets/img/gen/product/toy_02.svg",
    "assets/img/gen/product/toy_03.svg",
    "assets/img/gen/product/toy_04.svg",
    "assets/img/gen/product/toy_05.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 3.8,
   "sales": 257,
   "views": 1323,
   "stock": 57,
   "desc": "拼装小车机器人，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Snap Car Robot — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "192×149×96 mm"
    ],
    [
     "重量 Weight",
     "1.1 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "3.1 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "9.1 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:17",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_02.svg"
    }
   ]
  },
  {
   "id": "P1092",
   "sku": "GB-106",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "STEM 教育套件 GB-106",
   "nameEn": "STEM Education Kit GB-106",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "price": 290,
   "priceText": "¥290",
   "img": "assets/img/gen/product/toy_03.svg",
   "imgs": [
    "assets/img/gen/product/toy_03.svg",
    "assets/img/gen/product/toy_04.svg",
    "assets/img/gen/product/toy_05.svg",
    "assets/img/gen/product/toy_06.svg"
   ],
   "tags": [
    "含3D图纸",
    "工业级"
   ],
   "tagsEn": [
    "3D Files",
    "Industrial"
   ],
   "rating": 4.0,
   "sales": 394,
   "views": 1846,
   "stock": 94,
   "desc": "STEM 教育套件，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "STEM Education Kit — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "204×158×102 mm"
    ],
    [
     "重量 Weight",
     "1.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "4.2 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "10.2 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:24",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_03.svg"
    }
   ]
  },
  {
   "id": "P1093",
   "sku": "PT-109",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "遥控机械臂玩具 PT-109",
   "nameEn": "RC Robot Arm Toy PT-109",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "price": 340,
   "priceText": "¥340",
   "img": "assets/img/gen/product/toy_04.svg",
   "imgs": [
    "assets/img/gen/product/toy_04.svg",
    "assets/img/gen/product/toy_05.svg",
    "assets/img/gen/product/toy_06.svg",
    "assets/img/gen/product/toy_07.svg"
   ],
   "tags": [
    "教育适用",
    "含教程"
   ],
   "tagsEn": [
    "For Education",
    "Tutorial"
   ],
   "rating": 4.2,
   "sales": 531,
   "views": 2369,
   "stock": 131,
   "desc": "遥控机械臂玩具，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "RC Robot Arm Toy — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "216×167×108 mm"
    ],
    [
     "重量 Weight",
     "1.8 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "5.3 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.3 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "11.3 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:31",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_04.svg"
    }
   ]
  },
  {
   "id": "P1094",
   "sku": "FL-112",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "避障小车套件 FL-112",
   "nameEn": "Obstacle Avoidance Car FL-112",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "price": 390,
   "priceText": "¥390",
   "img": "assets/img/gen/product/toy_05.svg",
   "imgs": [
    "assets/img/gen/product/toy_05.svg",
    "assets/img/gen/product/toy_06.svg",
    "assets/img/gen/product/toy_07.svg",
    "assets/img/gen/product/toy_08.svg"
   ],
   "tags": [
    "可定制",
    "含3D图纸"
   ],
   "tagsEn": [
    "Customizable",
    "3D Files"
   ],
   "rating": 4.4,
   "sales": 668,
   "views": 2892,
   "stock": 168,
   "desc": "避障小车套件，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Obstacle Avoidance Car — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "228×176×114 mm"
    ],
    [
     "重量 Weight",
     "2.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "6.4 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.4 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "12.4 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:38",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_05.svg"
    }
   ]
  },
  {
   "id": "P1095",
   "sku": "HR-115",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "编程积木机器人 HR-115",
   "nameEn": "Coding Brick Robot HR-115",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "price": 450,
   "priceText": "¥450",
   "img": "assets/img/gen/product/toy_06.svg",
   "imgs": [
    "assets/img/gen/product/toy_06.svg",
    "assets/img/gen/product/toy_07.svg",
    "assets/img/gen/product/toy_08.svg",
    "assets/img/gen/product/toy_09.svg"
   ],
   "tags": [
    "含教程",
    "支持二次开发"
   ],
   "tagsEn": [
    "Tutorial",
    "SDK Support"
   ],
   "rating": 4.6,
   "sales": 805,
   "views": 3415,
   "stock": 205,
   "desc": "编程积木机器人，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Coding Brick Robot — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "240×185×120 mm"
    ],
    [
     "重量 Weight",
     "2.5 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "7.5 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "1.5 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "13.5 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:45",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_06.svg"
    }
   ]
  },
  {
   "id": "P1096",
   "sku": "DA-118",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "太阳能拼装玩具 DA-118",
   "nameEn": "Solar Assembly Toy DA-118",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "price": 500,
   "priceText": "¥500",
   "img": "assets/img/gen/product/toy_07.svg",
   "imgs": [
    "assets/img/gen/product/toy_07.svg",
    "assets/img/gen/product/toy_08.svg",
    "assets/img/gen/product/toy_09.svg",
    "assets/img/gen/product/toy_10.svg"
   ],
   "tags": [
    "开源",
    "可定制"
   ],
   "tagsEn": [
    "Open Source",
    "Customizable"
   ],
   "rating": 4.8,
   "sales": 942,
   "views": 3938,
   "stock": 242,
   "desc": "太阳能拼装玩具，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Solar Assembly Toy — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "252×194×126 mm"
    ],
    [
     "重量 Weight",
     "2.9 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "8.6 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "2.6 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "14.6 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "3:52",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_07.svg"
    }
   ]
  },
  {
   "id": "P1097",
   "sku": "QT-121",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "仿生机械昆虫 QT-121",
   "nameEn": "Bionic Mech Insect QT-121",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "price": 180,
   "priceText": "¥180",
   "img": "assets/img/gen/product/toy_08.svg",
   "imgs": [
    "assets/img/gen/product/toy_08.svg",
    "assets/img/gen/product/toy_09.svg",
    "assets/img/gen/product/toy_10.svg",
    "assets/img/gen/product/toy_11.svg"
   ],
   "tags": [
    "支持二次开发",
    "现货"
   ],
   "tagsEn": [
    "SDK Support",
    "In Stock"
   ],
   "rating": 3.6,
   "sales": 1079,
   "views": 4461,
   "stock": 279,
   "desc": "仿生机械昆虫，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Bionic Mech Insect — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "264×203×132 mm"
    ],
    [
     "重量 Weight",
     "3.2 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "9.7 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "3.0 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "15.7 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "4:59",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_08.svg"
    }
   ]
  },
  {
   "id": "P1098",
   "sku": "WH-124",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "声控互动机器人 WH-124",
   "nameEn": "Voice Interactive Robot WH-124",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "price": 230,
   "priceText": "¥230",
   "img": "assets/img/gen/product/toy_09.svg",
   "imgs": [
    "assets/img/gen/product/toy_09.svg",
    "assets/img/gen/product/toy_10.svg",
    "assets/img/gen/product/toy_11.svg",
    "assets/img/gen/product/toy_12.svg"
   ],
   "tags": [
    "工业级",
    "开源"
   ],
   "tagsEn": [
    "Industrial",
    "Open Source"
   ],
   "rating": 3.8,
   "sales": 1216,
   "views": 4984,
   "stock": 316,
   "desc": "声控互动机器人，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Voice Interactive Robot — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "276×212×138 mm"
    ],
    [
     "重量 Weight",
     "3.6 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "10.8 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "4.1 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "16.8 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "1:16",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_09.svg"
    }
   ]
  },
  {
   "id": "P1099",
   "sku": "MX-127",
   "cat": "toy",
   "catZh": "玩具机器人",
   "catEn": "Toy Robot",
   "name": "迷你格斗机器人 MX-127",
   "nameEn": "Mini Battle Robot MX-127",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "price": 290,
   "priceText": "¥290",
   "img": "assets/img/gen/product/toy_10.svg",
   "imgs": [
    "assets/img/gen/product/toy_10.svg",
    "assets/img/gen/product/toy_11.svg",
    "assets/img/gen/product/toy_12.svg",
    "assets/img/gen/product/toy_01.svg"
   ],
   "tags": [
    "现货",
    "教育适用"
   ],
   "tagsEn": [
    "In Stock",
    "For Education"
   ],
   "rating": 4.0,
   "sales": 1353,
   "views": 5507,
   "stock": 353,
   "desc": "迷你格斗机器人，面向玩具机器人场景的标准化方案，支持二次开发与模块化替换，提供 3D 尺寸图、硬件接口文档与示例程序。",
   "descEn": "Mini Battle Robot — standardized solution for Toy Robot scenarios, SDK-ready, modular replaceable, ships with 3D drawings, hardware interface docs and demo code.",
   "specs": [
    [
     "尺寸 Size",
     "288×221×144 mm"
    ],
    [
     "重量 Weight",
     "4.0 kg"
    ],
    [
     "供电 Power",
     "12V DC / 2A"
    ],
    [
     "接口 Interface",
     "CAN / RS485 / USB-C"
    ],
    [
     "材质 Material",
     "铝合金 + 工程塑料"
    ],
    [
     "工作温度 Temp",
     "-10℃ ~ 55℃"
    ]
   ],
   "docs": [
    {
     "name": "3D 尺寸图 (STEP)",
     "nameEn": "3D Drawing (STEP)",
     "size": "2.0 MB",
     "type": "3d",
     "icon": "assets/img/gen/icon/doc3d_b.svg"
    },
    {
     "name": "硬件接口说明",
     "nameEn": "Hardware Interface Doc",
     "size": "5.2 MB",
     "type": "hw",
     "icon": "assets/img/gen/icon/hardware_doc_b.svg"
    },
    {
     "name": "软件 SDK 包",
     "nameEn": "Software SDK",
     "size": "17.0 MB",
     "type": "sw",
     "icon": "assets/img/gen/icon/software_b.svg"
    },
    {
     "name": "演示视频",
     "nameEn": "Demo Video",
     "size": "2:23",
     "type": "video",
     "icon": "assets/img/gen/icon/video_b.svg",
     "cover": "assets/img/gen/cover/video_10.svg"
    }
   ]
  }
 ],
 "news": [
  {
   "id": "N2000",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_01.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-01-01 00:00",
   "views": 1200,
   "likes": 30,
   "comments": 5,
   "top": true,
   "hot": true,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2001",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_02.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-02-02 01:07",
   "views": 1927,
   "likes": 121,
   "comments": 18,
   "top": true,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2002",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_03.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-03-03 02:14",
   "views": 2654,
   "likes": 212,
   "comments": 31,
   "top": true,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2003",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_04.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-04-04 03:21",
   "views": 3381,
   "likes": 303,
   "comments": 44,
   "top": true,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2004",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_05.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-05-05 04:28",
   "views": 4108,
   "likes": 394,
   "comments": 57,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2005",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_06.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-06-06 05:35",
   "views": 4835,
   "likes": 485,
   "comments": 70,
   "top": false,
   "hot": true,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2006",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_07.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-07-07 06:42",
   "views": 5562,
   "likes": 576,
   "comments": 83,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2007",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_08.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-08-08 07:49",
   "views": 6289,
   "likes": 667,
   "comments": 96,
   "top": false,
   "hot": false,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2008",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_09.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-09-09 08:56",
   "views": 7016,
   "likes": 758,
   "comments": 109,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2009",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_10.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-10-10 09:03",
   "views": 7743,
   "likes": 849,
   "comments": 122,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2010",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_11.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-11-11 10:10",
   "views": 8470,
   "likes": 940,
   "comments": 135,
   "top": false,
   "hot": true,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2011",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_12.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-12-12 11:17",
   "views": 9197,
   "likes": 1031,
   "comments": 148,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2012",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_13.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-01-13 12:24",
   "views": 9924,
   "likes": 1122,
   "comments": 161,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2013",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_14.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-02-14 13:31",
   "views": 10651,
   "likes": 1213,
   "comments": 174,
   "top": false,
   "hot": false,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2014",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_15.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-03-15 14:38",
   "views": 11378,
   "likes": 1304,
   "comments": 187,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2015",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_16.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-04-16 15:45",
   "views": 12105,
   "likes": 1395,
   "comments": 200,
   "top": false,
   "hot": true,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2016",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_17.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-05-17 16:52",
   "views": 12832,
   "likes": 1486,
   "comments": 213,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2017",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_18.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-06-18 17:59",
   "views": 13559,
   "likes": 1577,
   "comments": 226,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2018",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_19.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-07-19 18:06",
   "views": 14286,
   "likes": 1668,
   "comments": 239,
   "top": false,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2019",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_20.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-08-20 19:13",
   "views": 15013,
   "likes": 1759,
   "comments": 252,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2020",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_21.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-09-21 20:20",
   "views": 15740,
   "likes": 1850,
   "comments": 265,
   "top": false,
   "hot": true,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2021",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_22.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-10-22 21:27",
   "views": 16467,
   "likes": 1941,
   "comments": 278,
   "top": false,
   "hot": false,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2022",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_23.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-11-23 22:34",
   "views": 17194,
   "likes": 2032,
   "comments": 291,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2023",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_24.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-12-24 23:41",
   "views": 17921,
   "likes": 2123,
   "comments": 304,
   "top": false,
   "hot": false,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2024",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_25.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-01-25 00:48",
   "views": 18648,
   "likes": 2214,
   "comments": 317,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2025",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_26.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-02-26 01:55",
   "views": 19375,
   "likes": 2305,
   "comments": 10,
   "top": false,
   "hot": true,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2026",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_27.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-03-27 02:02",
   "views": 20102,
   "likes": 2396,
   "comments": 23,
   "top": false,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2027",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_28.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-04-01 03:09",
   "views": 20829,
   "likes": 2487,
   "comments": 36,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2028",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_29.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-05-02 04:16",
   "views": 21556,
   "likes": 2578,
   "comments": 49,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2029",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_30.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-06-03 05:23",
   "views": 22283,
   "likes": 69,
   "comments": 62,
   "top": false,
   "hot": false,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2030",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_01.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-07-04 06:30",
   "views": 23010,
   "likes": 160,
   "comments": 75,
   "top": false,
   "hot": true,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2031",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_02.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-08-05 07:37",
   "views": 23737,
   "likes": 251,
   "comments": 88,
   "top": false,
   "hot": false,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2032",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_03.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-09-06 08:44",
   "views": 24464,
   "likes": 342,
   "comments": 101,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2033",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_04.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-10-07 09:51",
   "views": 25191,
   "likes": 433,
   "comments": 114,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2034",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_05.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-11-08 10:58",
   "views": 25918,
   "likes": 524,
   "comments": 127,
   "top": false,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2035",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_06.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-12-09 11:05",
   "views": 26645,
   "likes": 615,
   "comments": 140,
   "top": false,
   "hot": true,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2036",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_07.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-01-10 12:12",
   "views": 27372,
   "likes": 706,
   "comments": 153,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2037",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_08.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-02-11 13:19",
   "views": 28099,
   "likes": 797,
   "comments": 166,
   "top": false,
   "hot": false,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2038",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_09.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-03-12 14:26",
   "views": 28826,
   "likes": 888,
   "comments": 179,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2039",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_10.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-04-13 15:33",
   "views": 29553,
   "likes": 979,
   "comments": 192,
   "top": false,
   "hot": false,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2040",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_11.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-05-14 16:40",
   "views": 30280,
   "likes": 1070,
   "comments": 205,
   "top": false,
   "hot": true,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2041",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_12.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-06-15 17:47",
   "views": 31007,
   "likes": 1161,
   "comments": 218,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2042",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_13.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-07-16 18:54",
   "views": 31734,
   "likes": 1252,
   "comments": 231,
   "top": false,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2043",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_14.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-08-17 19:01",
   "views": 32461,
   "likes": 1343,
   "comments": 244,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2044",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_15.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-09-18 20:08",
   "views": 33188,
   "likes": 1434,
   "comments": 257,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2045",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_16.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-10-19 21:15",
   "views": 33915,
   "likes": 1525,
   "comments": 270,
   "top": false,
   "hot": true,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2046",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_17.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-11-20 22:22",
   "views": 34642,
   "likes": 1616,
   "comments": 283,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2047",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_18.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-12-21 23:29",
   "views": 35369,
   "likes": 1707,
   "comments": 296,
   "top": false,
   "hot": false,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2048",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_19.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-01-22 00:36",
   "views": 36096,
   "likes": 1798,
   "comments": 309,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2049",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_20.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-02-23 01:43",
   "views": 36823,
   "likes": 1889,
   "comments": 322,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2050",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_21.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-03-24 02:50",
   "views": 37550,
   "likes": 1980,
   "comments": 15,
   "top": false,
   "hot": true,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2051",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_22.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-04-25 03:57",
   "views": 38277,
   "likes": 2071,
   "comments": 28,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2052",
   "title": "展会直击：星辰机甲 展台人气爆棚，巡检机器人 首发",
   "titleEn": "Expo report: AstroMech booth draws crowds, 巡检机器人 debuts",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/ai_hero_card.png",
   "coverThumb": "assets/img/design/ai_hero_thumb.png",
   "brand": "星辰机甲",
   "brandEn": "AstroMech",
   "logo": "assets/img/gen/avatar/user_23.svg",
   "author": "星辰机甲 官方",
   "authorEn": "AstroMech Official",
   "time": "2026-05-26 04:04",
   "views": 39004,
   "likes": 2162,
   "comments": 41,
   "top": false,
   "hot": false,
   "excerpt": "星辰机甲 于近日公布 巡检机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "AstroMech announced progress on 巡检机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "巡检机器人"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "巡检机器人"
   ],
   "content": [
    "星辰机甲 在本期更新中详细介绍了 巡检机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2053",
   "title": "极客造物 与集成商签约，交付百台 视觉模块",
   "titleEn": "GeekMaker signs integrator deal for 100 units of 视觉模块",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/news_hero_card.png",
   "coverThumb": "assets/img/design/news_hero_thumb.png",
   "brand": "极客造物",
   "brandEn": "GeekMaker",
   "logo": "assets/img/gen/avatar/user_24.svg",
   "author": "极客造物 官方",
   "authorEn": "GeekMaker Official",
   "time": "2026-06-27 05:11",
   "views": 39731,
   "likes": 2253,
   "comments": 54,
   "top": false,
   "hot": false,
   "excerpt": "极客造物 于近日公布 视觉模块 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "GeekMaker announced progress on 视觉模块, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "视觉模块"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "视觉模块"
   ],
   "content": [
    "极客造物 在本期更新中详细介绍了 视觉模块 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2054",
   "title": "技术拆解：铁甲开源 的配送机器人力控关节设计",
   "titleEn": "Teardown: IronOpen force-control joint for 配送机器人",
   "cat": "厂商动态",
   "catEn": "Brand News",
   "cover": "assets/img/design/forum_hero_card.png",
   "coverThumb": "assets/img/design/forum_hero_thumb.png",
   "brand": "铁甲开源",
   "brandEn": "IronOpen",
   "logo": "assets/img/gen/avatar/user_25.svg",
   "author": "铁甲开源 官方",
   "authorEn": "IronOpen Official",
   "time": "2026-07-01 06:18",
   "views": 40458,
   "likes": 2344,
   "comments": 67,
   "top": false,
   "hot": false,
   "excerpt": "铁甲开源 于近日公布 配送机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "IronOpen announced progress on 配送机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "厂商动态",
    "开源",
    "配送机器人"
   ],
   "tagsEn": [
    "Brand News",
    "Open Source",
    "配送机器人"
   ],
   "content": [
    "铁甲开源 在本期更新中详细介绍了 配送机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2055",
   "title": "灵犀机器人 推出玩具机器人教育套件，面向 STEM 市场",
   "titleEn": "LingXi Robot launches 玩具机器人 STEM education kit",
   "cat": "新品发布",
   "catEn": "New Launch",
   "cover": "assets/img/design/product_hero_card.png",
   "coverThumb": "assets/img/design/product_hero_thumb.png",
   "brand": "灵犀机器人",
   "brandEn": "LingXi Robot",
   "logo": "assets/img/gen/avatar/user_26.svg",
   "author": "灵犀机器人 官方",
   "authorEn": "LingXi Robot Official",
   "time": "2026-08-02 07:25",
   "views": 41185,
   "likes": 2435,
   "comments": 80,
   "top": false,
   "hot": true,
   "excerpt": "灵犀机器人 于近日公布 玩具机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "LingXi Robot announced progress on 玩具机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "新品发布",
    "开源",
    "玩具机器人"
   ],
   "tagsEn": [
    "New Launch",
    "Open Source",
    "玩具机器人"
   ],
   "content": [
    "灵犀机器人 在本期更新中详细介绍了 玩具机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2056",
   "title": "智元工场 发布新一代 清洁机器人，开源整机图纸",
   "titleEn": "ZhiYuan Works unveils new-gen 清洁机器人 with open-source drawings",
   "cat": "行业观察",
   "catEn": "Industry Insight",
   "cover": "assets/img/design/home_hero_card.png",
   "coverThumb": "assets/img/design/home_hero_thumb.png",
   "brand": "智元工场",
   "brandEn": "ZhiYuan Works",
   "logo": "assets/img/gen/avatar/user_27.svg",
   "author": "智元工场 官方",
   "authorEn": "ZhiYuan Works Official",
   "time": "2026-09-03 08:32",
   "views": 41912,
   "likes": 2526,
   "comments": 93,
   "top": false,
   "hot": false,
   "excerpt": "智元工场 于近日公布 清洁机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "ZhiYuan Works announced progress on 清洁机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "行业观察",
    "开源",
    "清洁机器人"
   ],
   "tagsEn": [
    "Industry Insight",
    "Open Source",
    "清洁机器人"
   ],
   "content": [
    "智元工场 在本期更新中详细介绍了 清洁机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2057",
   "title": "蓝鲸智造 完成 A 轮融资，加速 机械臂 量产",
   "titleEn": "BlueWhale Mfg closes Series A to ramp 机械臂 production",
   "cat": "技术前沿",
   "catEn": "Tech Frontier",
   "cover": "assets/img/design/bg_industrial_card.png",
   "coverThumb": "assets/img/design/bg_industrial_thumb.png",
   "brand": "蓝鲸智造",
   "brandEn": "BlueWhale Mfg",
   "logo": "assets/img/gen/avatar/user_28.svg",
   "author": "蓝鲸智造 官方",
   "authorEn": "BlueWhale Mfg Official",
   "time": "2026-10-04 09:39",
   "views": 42639,
   "likes": 2617,
   "comments": 106,
   "top": false,
   "hot": false,
   "excerpt": "蓝鲸智造 于近日公布 机械臂 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "BlueWhale Mfg announced progress on 机械臂, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "技术前沿",
    "开源",
    "机械臂"
   ],
   "tagsEn": [
    "Tech Frontier",
    "Open Source",
    "机械臂"
   ],
   "content": [
    "蓝鲸智造 在本期更新中详细介绍了 机械臂 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2058",
   "title": "深度：红蚁动力 在商用场景的落地难点（模块化平台）",
   "titleEn": "Deep dive: RedAnt Dynamics deployment challenges in 模块化平台 sites",
   "cat": "活动展会",
   "catEn": "Events",
   "cover": "assets/img/design/toy_hero_card.png",
   "coverThumb": "assets/img/design/toy_hero_thumb.png",
   "brand": "红蚁动力",
   "brandEn": "RedAnt Dynamics",
   "logo": "assets/img/gen/avatar/user_29.svg",
   "author": "红蚁动力 官方",
   "authorEn": "RedAnt Dynamics Official",
   "time": "2026-11-05 10:46",
   "views": 43366,
   "likes": 108,
   "comments": 119,
   "top": false,
   "hot": false,
   "excerpt": "红蚁动力 于近日公布 模块化平台 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "RedAnt Dynamics announced progress on 模块化平台, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "活动展会",
    "开源",
    "模块化平台"
   ],
   "tagsEn": [
    "Events",
    "Open Source",
    "模块化平台"
   ],
   "content": [
    "红蚁动力 在本期更新中详细介绍了 模块化平台 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  },
  {
   "id": "N2059",
   "title": "开源纪元 开源人形机器人模块化平台，支持二次开发",
   "titleEn": "OpenEra Labs open-sources 人形机器人 modular platform",
   "cat": "开源更新",
   "catEn": "Open Source",
   "cover": "assets/img/design/module_hero_card.png",
   "coverThumb": "assets/img/design/module_hero_thumb.png",
   "brand": "开源纪元",
   "brandEn": "OpenEra Labs",
   "logo": "assets/img/gen/avatar/user_30.svg",
   "author": "开源纪元 官方",
   "authorEn": "OpenEra Labs Official",
   "time": "2026-12-06 11:53",
   "views": 44093,
   "likes": 199,
   "comments": 132,
   "top": false,
   "hot": false,
   "excerpt": "开源纪元 于近日公布 人形机器人 相关进展，涵盖整机结构、模块选型与量产计划，平台已同步上线完整资料包与演示视频。",
   "excerptEn": "OpenEra Labs announced progress on 人形机器人, covering structure, module selection and mass-production plan; full docs and demo video now on the platform.",
   "tags": [
    "开源更新",
    "开源",
    "人形机器人"
   ],
   "tagsEn": [
    "Open Source",
    "Open Source",
    "人形机器人"
   ],
   "content": [
    "开源纪元 在本期更新中详细介绍了 人形机器人 的设计要点与量产节奏。",
    "平台已同步提供 3D 尺寸图、硬件接口文档、软件 SDK 与演示视频下载。",
    "开发者可在 AI 智造页直接提交定制需求，由平台自动拆分并匹配现有模块资源。"
   ]
  }
 ],
 "users": [
  {
   "id": "U3000",
   "name": "机电老张00",
   "nameEn": "MechZhang00",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "level": 1,
   "exp": 200,
   "followers": 30,
   "following": 10,
   "products": 1,
   "projects": 1,
   "likes": 100,
   "rank": 1,
   "verify": true,
   "desc": "专注 商用机器人 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Commercial Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "商用机器人",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Commercial Robot",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3001",
   "name": "开源阿凯01",
   "nameEn": "OpenKai01",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "level": 2,
   "exp": 571,
   "followers": 647,
   "following": 23,
   "products": 8,
   "projects": 4,
   "likes": 1011,
   "rank": 2,
   "verify": false,
   "desc": "专注 具身机器人 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Embodied Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "具身机器人",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Embodied Robot",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3002",
   "name": "蓝鲸官方02",
   "nameEn": "BlueWhale02",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "level": 3,
   "exp": 942,
   "followers": 1264,
   "following": 36,
   "products": 15,
   "projects": 7,
   "likes": 1922,
   "rank": 3,
   "verify": false,
   "desc": "专注 定制机器人 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Custom Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "定制机器人",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Custom Robot",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3003",
   "name": "机器人小学生03",
   "nameEn": "RoboKid03",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "level": 4,
   "exp": 1313,
   "followers": 1881,
   "following": 49,
   "products": 22,
   "projects": 10,
   "likes": 2833,
   "rank": 4,
   "verify": true,
   "desc": "专注 机器人模块 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on Robot Module; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人模块",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "Robot Module",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3004",
   "name": "力控研究所04",
   "nameEn": "ForceLab04",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "level": 5,
   "exp": 1684,
   "followers": 2498,
   "following": 62,
   "products": 29,
   "projects": 13,
   "likes": 3744,
   "rank": 5,
   "verify": false,
   "desc": "专注 机器人组件 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Robot Component; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人组件",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Robot Component",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3005",
   "name": "打印狂魔05",
   "nameEn": "PrintFanatic05",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "level": 6,
   "exp": 2055,
   "followers": 3115,
   "following": 75,
   "products": 36,
   "projects": 16,
   "likes": 4655,
   "rank": 6,
   "verify": false,
   "desc": "专注 模块配件 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Module Accessory; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "模块配件",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Module Accessory",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3006",
   "name": "嵌入式老王06",
   "nameEn": "EmbedWang06",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "level": 7,
   "exp": 2426,
   "followers": 3732,
   "following": 88,
   "products": 3,
   "projects": 1,
   "likes": 5566,
   "rank": 7,
   "verify": true,
   "desc": "专注 五金件 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Hardware Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "五金件",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Hardware Part",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3007",
   "name": "创客空间07",
   "nameEn": "MakerSpace07",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "level": 8,
   "exp": 2797,
   "followers": 4349,
   "following": 101,
   "products": 10,
   "projects": 4,
   "likes": 6477,
   "rank": 8,
   "verify": false,
   "desc": "专注 3D打印产品 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on 3D Printed Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "3D打印产品",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "3D Printed Part",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3008",
   "name": "机电老张08",
   "nameEn": "MechZhang08",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "level": 9,
   "exp": 3168,
   "followers": 4966,
   "following": 114,
   "products": 17,
   "projects": 7,
   "likes": 7388,
   "rank": 9,
   "verify": false,
   "desc": "专注 外壳结构 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Enclosure Shell; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "外壳结构",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Enclosure Shell",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3009",
   "name": "开源阿凯09",
   "nameEn": "OpenKai09",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "level": 1,
   "exp": 3539,
   "followers": 5583,
   "following": 127,
   "products": 24,
   "projects": 10,
   "likes": 8299,
   "rank": 10,
   "verify": true,
   "desc": "专注 玩具机器人 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Toy Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "玩具机器人",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Toy Robot",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3010",
   "name": "蓝鲸官方10",
   "nameEn": "BlueWhale10",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "level": 2,
   "exp": 3910,
   "followers": 6200,
   "following": 140,
   "products": 31,
   "projects": 13,
   "likes": 9210,
   "rank": 11,
   "verify": false,
   "desc": "专注 商用机器人 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Commercial Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "商用机器人",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Commercial Robot",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3011",
   "name": "机器人小学生11",
   "nameEn": "RoboKid11",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "level": 3,
   "exp": 4281,
   "followers": 6817,
   "following": 153,
   "products": 38,
   "projects": 16,
   "likes": 10121,
   "rank": 12,
   "verify": false,
   "desc": "专注 具身机器人 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on Embodied Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "具身机器人",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "Embodied Robot",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3012",
   "name": "力控研究所12",
   "nameEn": "ForceLab12",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "level": 4,
   "exp": 4652,
   "followers": 7434,
   "following": 166,
   "products": 5,
   "projects": 1,
   "likes": 11032,
   "rank": 13,
   "verify": true,
   "desc": "专注 定制机器人 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Custom Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "定制机器人",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Custom Robot",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3013",
   "name": "打印狂魔13",
   "nameEn": "PrintFanatic13",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "level": 5,
   "exp": 5023,
   "followers": 8051,
   "following": 179,
   "products": 12,
   "projects": 4,
   "likes": 11943,
   "rank": 14,
   "verify": false,
   "desc": "专注 机器人模块 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Robot Module; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人模块",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Robot Module",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3014",
   "name": "嵌入式老王14",
   "nameEn": "EmbedWang14",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "level": 6,
   "exp": 5394,
   "followers": 8668,
   "following": 192,
   "products": 19,
   "projects": 7,
   "likes": 12854,
   "rank": 15,
   "verify": false,
   "desc": "专注 机器人组件 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Robot Component; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人组件",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Robot Component",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3015",
   "name": "创客空间15",
   "nameEn": "MakerSpace15",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "level": 7,
   "exp": 5765,
   "followers": 9285,
   "following": 205,
   "products": 26,
   "projects": 10,
   "likes": 13765,
   "rank": 16,
   "verify": true,
   "desc": "专注 模块配件 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on Module Accessory; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "模块配件",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "Module Accessory",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3016",
   "name": "机电老张16",
   "nameEn": "MechZhang16",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "level": 8,
   "exp": 6136,
   "followers": 9902,
   "following": 218,
   "products": 33,
   "projects": 13,
   "likes": 14676,
   "rank": 17,
   "verify": false,
   "desc": "专注 五金件 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Hardware Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "五金件",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Hardware Part",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3017",
   "name": "开源阿凯17",
   "nameEn": "OpenKai17",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "level": 9,
   "exp": 6507,
   "followers": 10519,
   "following": 231,
   "products": 40,
   "projects": 16,
   "likes": 15587,
   "rank": 18,
   "verify": false,
   "desc": "专注 3D打印产品 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on 3D Printed Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "3D打印产品",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "3D Printed Part",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3018",
   "name": "蓝鲸官方18",
   "nameEn": "BlueWhale18",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "level": 1,
   "exp": 6878,
   "followers": 11136,
   "following": 244,
   "products": 7,
   "projects": 1,
   "likes": 16498,
   "rank": 19,
   "verify": true,
   "desc": "专注 外壳结构 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Enclosure Shell; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "外壳结构",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Enclosure Shell",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3019",
   "name": "机器人小学生19",
   "nameEn": "RoboKid19",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "level": 2,
   "exp": 7249,
   "followers": 11753,
   "following": 257,
   "products": 14,
   "projects": 4,
   "likes": 17409,
   "rank": 20,
   "verify": false,
   "desc": "专注 玩具机器人 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on Toy Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "玩具机器人",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "Toy Robot",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3020",
   "name": "力控研究所20",
   "nameEn": "ForceLab20",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "level": 3,
   "exp": 7620,
   "followers": 12370,
   "following": 270,
   "products": 21,
   "projects": 7,
   "likes": 18320,
   "rank": 21,
   "verify": false,
   "desc": "专注 商用机器人 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Commercial Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "商用机器人",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Commercial Robot",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3021",
   "name": "打印狂魔21",
   "nameEn": "PrintFanatic21",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_22.svg",
   "level": 4,
   "exp": 7991,
   "followers": 12987,
   "following": 283,
   "products": 28,
   "projects": 10,
   "likes": 19231,
   "rank": 22,
   "verify": true,
   "desc": "专注 具身机器人 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Embodied Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "具身机器人",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Embodied Robot",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3022",
   "name": "嵌入式老王22",
   "nameEn": "EmbedWang22",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_23.svg",
   "level": 5,
   "exp": 8362,
   "followers": 13604,
   "following": 296,
   "products": 35,
   "projects": 13,
   "likes": 20142,
   "rank": 23,
   "verify": false,
   "desc": "专注 定制机器人 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Custom Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "定制机器人",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Custom Robot",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3023",
   "name": "创客空间23",
   "nameEn": "MakerSpace23",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_24.svg",
   "level": 6,
   "exp": 8733,
   "followers": 14221,
   "following": 309,
   "products": 2,
   "projects": 16,
   "likes": 21053,
   "rank": 24,
   "verify": false,
   "desc": "专注 机器人模块 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on Robot Module; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人模块",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "Robot Module",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3024",
   "name": "机电老张24",
   "nameEn": "MechZhang24",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_25.svg",
   "level": 7,
   "exp": 9104,
   "followers": 14838,
   "following": 322,
   "products": 9,
   "projects": 1,
   "likes": 21964,
   "rank": 25,
   "verify": true,
   "desc": "专注 机器人组件 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Robot Component; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "机器人组件",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Robot Component",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3025",
   "name": "开源阿凯25",
   "nameEn": "OpenKai25",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_26.svg",
   "level": 8,
   "exp": 9475,
   "followers": 15455,
   "following": 335,
   "products": 16,
   "projects": 4,
   "likes": 22875,
   "rank": 26,
   "verify": false,
   "desc": "专注 模块配件 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Module Accessory; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "模块配件",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Module Accessory",
    "Open Source",
    "Developer"
   ]
  },
  {
   "id": "U3026",
   "name": "蓝鲸官方26",
   "nameEn": "BlueWhale26",
   "type": "集成商",
   "typeEn": "Integrator",
   "avatar": "assets/img/gen/avatar/user_27.svg",
   "level": 9,
   "exp": 9846,
   "followers": 16072,
   "following": 348,
   "products": 23,
   "projects": 7,
   "likes": 23786,
   "rank": 27,
   "verify": false,
   "desc": "专注 五金件 的集成商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Integrator focusing on Hardware Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "五金件",
    "开源",
    "集成商"
   ],
   "tagsEn": [
    "Hardware Part",
    "Open Source",
    "Integrator"
   ]
  },
  {
   "id": "U3027",
   "name": "机器人小学生27",
   "nameEn": "RoboKid27",
   "type": "机构",
   "typeEn": "Institute",
   "avatar": "assets/img/gen/avatar/user_28.svg",
   "level": 1,
   "exp": 10217,
   "followers": 16689,
   "following": 361,
   "products": 30,
   "projects": 10,
   "likes": 24697,
   "rank": 28,
   "verify": true,
   "desc": "专注 3D打印产品 的机构，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Institute focusing on 3D Printed Part; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "3D打印产品",
    "开源",
    "机构"
   ],
   "tagsEn": [
    "3D Printed Part",
    "Open Source",
    "Institute"
   ]
  },
  {
   "id": "U3028",
   "name": "力控研究所28",
   "nameEn": "ForceLab28",
   "type": "厂商",
   "typeEn": "Brand",
   "avatar": "assets/img/gen/avatar/user_29.svg",
   "level": 2,
   "exp": 10588,
   "followers": 17306,
   "following": 374,
   "products": 37,
   "projects": 13,
   "likes": 25608,
   "rank": 29,
   "verify": false,
   "desc": "专注 外壳结构 的厂商，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Brand focusing on Enclosure Shell; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "外壳结构",
    "开源",
    "厂商"
   ],
   "tagsEn": [
    "Enclosure Shell",
    "Open Source",
    "Brand"
   ]
  },
  {
   "id": "U3029",
   "name": "打印狂魔29",
   "nameEn": "PrintFanatic29",
   "type": "个人开发者",
   "typeEn": "Developer",
   "avatar": "assets/img/gen/avatar/user_30.svg",
   "level": 3,
   "exp": 10959,
   "followers": 17923,
   "following": 387,
   "products": 4,
   "projects": 16,
   "likes": 26519,
   "rank": 30,
   "verify": false,
   "desc": "专注 玩具机器人 的个人开发者，开源分享 3D 图纸与示例代码，承接定制与集成项目。",
   "descEn": "Developer focusing on Toy Robot; shares 3D files and sample code, takes custom & integration projects.",
   "tags": [
    "玩具机器人",
    "开源",
    "个人开发者"
   ],
   "tagsEn": [
    "Toy Robot",
    "Open Source",
    "Developer"
   ]
  }
 ],
 "projects": [
  {
   "id": "PR4000",
   "name": "商用清洁机器人模块化改造 #1",
   "nameEn": "Modular retrofit of cleaning robot #1",
   "status": "需求确认",
   "statusEn": "Scoping",
   "progress": 100,
   "budget": "¥30,000",
   "deadline": "2026-01-01",
   "owner": "机电老张00",
   "ownerEn": "MechZhang00",
   "ownerAvatar": "assets/img/gen/avatar/user_01.svg",
   "members": [
    {
     "name": "机电老张00",
     "nameEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "开源阿凯01",
     "nameEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "蓝鲸官方02",
     "nameEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机器人小学生03",
     "nameEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "力控研究所04",
     "nameEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机电老张00",
     "ownerEn": "MechZhang00",
     "date": "2026-01-01",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "开源阿凯01",
     "ownerEn": "OpenKai01",
     "date": "2026-02-05",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "蓝鲸官方02",
     "ownerEn": "BlueWhale02",
     "date": "2026-03-09",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机器人小学生03",
     "ownerEn": "RoboKid03",
     "date": "2026-04-13",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "力控研究所04",
     "ownerEn": "ForceLab04",
     "date": "2026-05-17",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4001",
   "name": "具身机器人双臂抓取平台 #2",
   "nameEn": "Dual-arm grasping platform #2",
   "status": "方案设计",
   "statusEn": "Design",
   "progress": 68,
   "budget": "¥47,000",
   "deadline": "2026-02-02",
   "owner": "开源阿凯01",
   "ownerEn": "OpenKai01",
   "ownerAvatar": "assets/img/gen/avatar/user_02.svg",
   "members": [
    {
     "name": "开源阿凯01",
     "nameEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "蓝鲸官方02",
     "nameEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机器人小学生03",
     "nameEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "力控研究所04",
     "nameEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "打印狂魔05",
     "nameEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "开源阿凯01",
     "ownerEn": "OpenKai01",
     "date": "2026-01-02",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "蓝鲸官方02",
     "ownerEn": "BlueWhale02",
     "date": "2026-02-06",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机器人小学生03",
     "ownerEn": "RoboKid03",
     "date": "2026-03-10",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "力控研究所04",
     "ownerEn": "ForceLab04",
     "date": "2026-04-14",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "打印狂魔05",
     "ownerEn": "PrintFanatic05",
     "date": "2026-05-18",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4002",
   "name": "教育玩具机器人套件开发 #3",
   "nameEn": "STEM toy robot kit #3",
   "status": "模块选型",
   "statusEn": "Sourcing",
   "progress": 45,
   "budget": "¥64,000",
   "deadline": "2026-03-03",
   "owner": "蓝鲸官方02",
   "ownerEn": "BlueWhale02",
   "ownerAvatar": "assets/img/gen/avatar/user_03.svg",
   "members": [
    {
     "name": "蓝鲸官方02",
     "nameEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机器人小学生03",
     "nameEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "力控研究所04",
     "nameEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "打印狂魔05",
     "nameEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "嵌入式老王06",
     "nameEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "蓝鲸官方02",
     "ownerEn": "BlueWhale02",
     "date": "2026-01-03",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机器人小学生03",
     "ownerEn": "RoboKid03",
     "date": "2026-02-07",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "力控研究所04",
     "ownerEn": "ForceLab04",
     "date": "2026-03-11",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "打印狂魔05",
     "ownerEn": "PrintFanatic05",
     "date": "2026-04-15",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "嵌入式老王06",
     "ownerEn": "EmbedWang06",
     "date": "2026-05-19",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4003",
   "name": "商用清洁机器人模块化改造 #4",
   "nameEn": "Modular retrofit of cleaning robot #4",
   "status": "集成开发",
   "statusEn": "Integration",
   "progress": 30,
   "budget": "¥81,000",
   "deadline": "2026-04-04",
   "owner": "机器人小学生03",
   "ownerEn": "RoboKid03",
   "ownerAvatar": "assets/img/gen/avatar/user_04.svg",
   "members": [
    {
     "name": "机器人小学生03",
     "nameEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "力控研究所04",
     "nameEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "打印狂魔05",
     "nameEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "嵌入式老王06",
     "nameEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "创客空间07",
     "nameEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机器人小学生03",
     "ownerEn": "RoboKid03",
     "date": "2026-01-04",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "doing",
     "owner": "力控研究所04",
     "ownerEn": "ForceLab04",
     "date": "2026-02-08",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "todo",
     "owner": "打印狂魔05",
     "ownerEn": "PrintFanatic05",
     "date": "2026-03-12",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "嵌入式老王06",
     "ownerEn": "EmbedWang06",
     "date": "2026-04-16",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "创客空间07",
     "ownerEn": "MakerSpace07",
     "date": "2026-05-20",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4004",
   "name": "具身机器人双臂抓取平台 #5",
   "nameEn": "Dual-arm grasping platform #5",
   "status": "测试验证",
   "statusEn": "Testing",
   "progress": 82,
   "budget": "¥98,000",
   "deadline": "2026-05-05",
   "owner": "力控研究所04",
   "ownerEn": "ForceLab04",
   "ownerAvatar": "assets/img/gen/avatar/user_05.svg",
   "members": [
    {
     "name": "力控研究所04",
     "nameEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "打印狂魔05",
     "nameEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "嵌入式老王06",
     "nameEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "创客空间07",
     "nameEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机电老张08",
     "nameEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "力控研究所04",
     "ownerEn": "ForceLab04",
     "date": "2026-01-05",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "打印狂魔05",
     "ownerEn": "PrintFanatic05",
     "date": "2026-02-09",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "嵌入式老王06",
     "ownerEn": "EmbedWang06",
     "date": "2026-03-13",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "创客空间07",
     "ownerEn": "MakerSpace07",
     "date": "2026-04-17",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机电老张08",
     "ownerEn": "MechZhang08",
     "date": "2026-05-21",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4005",
   "name": "教育玩具机器人套件开发 #6",
   "nameEn": "STEM toy robot kit #6",
   "status": "交付完成",
   "statusEn": "Delivered",
   "progress": 15,
   "budget": "¥115,000",
   "deadline": "2026-06-06",
   "owner": "打印狂魔05",
   "ownerEn": "PrintFanatic05",
   "ownerAvatar": "assets/img/gen/avatar/user_06.svg",
   "members": [
    {
     "name": "打印狂魔05",
     "nameEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "嵌入式老王06",
     "nameEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "创客空间07",
     "nameEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机电老张08",
     "nameEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "开源阿凯09",
     "nameEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "打印狂魔05",
     "ownerEn": "PrintFanatic05",
     "date": "2026-01-06",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "嵌入式老王06",
     "ownerEn": "EmbedWang06",
     "date": "2026-02-10",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "创客空间07",
     "ownerEn": "MakerSpace07",
     "date": "2026-03-14",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机电老张08",
     "ownerEn": "MechZhang08",
     "date": "2026-04-18",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "开源阿凯09",
     "ownerEn": "OpenKai09",
     "date": "2026-05-22",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4006",
   "name": "商用清洁机器人模块化改造 #7",
   "nameEn": "Modular retrofit of cleaning robot #7",
   "status": "需求确认",
   "statusEn": "Scoping",
   "progress": 100,
   "budget": "¥132,000",
   "deadline": "2026-07-07",
   "owner": "嵌入式老王06",
   "ownerEn": "EmbedWang06",
   "ownerAvatar": "assets/img/gen/avatar/user_07.svg",
   "members": [
    {
     "name": "嵌入式老王06",
     "nameEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "创客空间07",
     "nameEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机电老张08",
     "nameEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "开源阿凯09",
     "nameEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "蓝鲸官方10",
     "nameEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "嵌入式老王06",
     "ownerEn": "EmbedWang06",
     "date": "2026-01-07",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "创客空间07",
     "ownerEn": "MakerSpace07",
     "date": "2026-02-11",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机电老张08",
     "ownerEn": "MechZhang08",
     "date": "2026-03-15",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "开源阿凯09",
     "ownerEn": "OpenKai09",
     "date": "2026-04-19",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "蓝鲸官方10",
     "ownerEn": "BlueWhale10",
     "date": "2026-05-23",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4007",
   "name": "具身机器人双臂抓取平台 #8",
   "nameEn": "Dual-arm grasping platform #8",
   "status": "方案设计",
   "statusEn": "Design",
   "progress": 68,
   "budget": "¥149,000",
   "deadline": "2026-08-08",
   "owner": "创客空间07",
   "ownerEn": "MakerSpace07",
   "ownerAvatar": "assets/img/gen/avatar/user_08.svg",
   "members": [
    {
     "name": "创客空间07",
     "nameEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机电老张08",
     "nameEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "开源阿凯09",
     "nameEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "蓝鲸官方10",
     "nameEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机器人小学生11",
     "nameEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "创客空间07",
     "ownerEn": "MakerSpace07",
     "date": "2026-01-08",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机电老张08",
     "ownerEn": "MechZhang08",
     "date": "2026-02-12",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "开源阿凯09",
     "ownerEn": "OpenKai09",
     "date": "2026-03-16",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "蓝鲸官方10",
     "ownerEn": "BlueWhale10",
     "date": "2026-04-20",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机器人小学生11",
     "ownerEn": "RoboKid11",
     "date": "2026-05-24",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4008",
   "name": "教育玩具机器人套件开发 #9",
   "nameEn": "STEM toy robot kit #9",
   "status": "模块选型",
   "statusEn": "Sourcing",
   "progress": 45,
   "budget": "¥166,000",
   "deadline": "2026-09-09",
   "owner": "机电老张08",
   "ownerEn": "MechZhang08",
   "ownerAvatar": "assets/img/gen/avatar/user_09.svg",
   "members": [
    {
     "name": "机电老张08",
     "nameEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "开源阿凯09",
     "nameEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "蓝鲸官方10",
     "nameEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机器人小学生11",
     "nameEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "力控研究所12",
     "nameEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机电老张08",
     "ownerEn": "MechZhang08",
     "date": "2026-01-09",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "开源阿凯09",
     "ownerEn": "OpenKai09",
     "date": "2026-02-13",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "蓝鲸官方10",
     "ownerEn": "BlueWhale10",
     "date": "2026-03-17",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机器人小学生11",
     "ownerEn": "RoboKid11",
     "date": "2026-04-21",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "力控研究所12",
     "ownerEn": "ForceLab12",
     "date": "2026-05-25",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4009",
   "name": "商用清洁机器人模块化改造 #10",
   "nameEn": "Modular retrofit of cleaning robot #10",
   "status": "集成开发",
   "statusEn": "Integration",
   "progress": 30,
   "budget": "¥183,000",
   "deadline": "2026-10-10",
   "owner": "开源阿凯09",
   "ownerEn": "OpenKai09",
   "ownerAvatar": "assets/img/gen/avatar/user_10.svg",
   "members": [
    {
     "name": "开源阿凯09",
     "nameEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "蓝鲸官方10",
     "nameEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机器人小学生11",
     "nameEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "力控研究所12",
     "nameEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "打印狂魔13",
     "nameEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "开源阿凯09",
     "ownerEn": "OpenKai09",
     "date": "2026-01-10",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "doing",
     "owner": "蓝鲸官方10",
     "ownerEn": "BlueWhale10",
     "date": "2026-02-14",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "todo",
     "owner": "机器人小学生11",
     "ownerEn": "RoboKid11",
     "date": "2026-03-18",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "力控研究所12",
     "ownerEn": "ForceLab12",
     "date": "2026-04-22",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "打印狂魔13",
     "ownerEn": "PrintFanatic13",
     "date": "2026-05-26",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4010",
   "name": "具身机器人双臂抓取平台 #11",
   "nameEn": "Dual-arm grasping platform #11",
   "status": "测试验证",
   "statusEn": "Testing",
   "progress": 82,
   "budget": "¥200,000",
   "deadline": "2026-11-11",
   "owner": "蓝鲸官方10",
   "ownerEn": "BlueWhale10",
   "ownerAvatar": "assets/img/gen/avatar/user_11.svg",
   "members": [
    {
     "name": "蓝鲸官方10",
     "nameEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机器人小学生11",
     "nameEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "力控研究所12",
     "nameEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "打印狂魔13",
     "nameEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "嵌入式老王14",
     "nameEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "蓝鲸官方10",
     "ownerEn": "BlueWhale10",
     "date": "2026-01-11",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机器人小学生11",
     "ownerEn": "RoboKid11",
     "date": "2026-02-15",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "力控研究所12",
     "ownerEn": "ForceLab12",
     "date": "2026-03-19",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "打印狂魔13",
     "ownerEn": "PrintFanatic13",
     "date": "2026-04-23",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "嵌入式老王14",
     "ownerEn": "EmbedWang14",
     "date": "2026-05-27",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4011",
   "name": "教育玩具机器人套件开发 #12",
   "nameEn": "STEM toy robot kit #12",
   "status": "交付完成",
   "statusEn": "Delivered",
   "progress": 15,
   "budget": "¥217,000",
   "deadline": "2026-12-12",
   "owner": "机器人小学生11",
   "ownerEn": "RoboKid11",
   "ownerAvatar": "assets/img/gen/avatar/user_12.svg",
   "members": [
    {
     "name": "机器人小学生11",
     "nameEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "力控研究所12",
     "nameEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "打印狂魔13",
     "nameEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "嵌入式老王14",
     "nameEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "创客空间15",
     "nameEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机器人小学生11",
     "ownerEn": "RoboKid11",
     "date": "2026-01-12",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "力控研究所12",
     "ownerEn": "ForceLab12",
     "date": "2026-02-16",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "打印狂魔13",
     "ownerEn": "PrintFanatic13",
     "date": "2026-03-20",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "嵌入式老王14",
     "ownerEn": "EmbedWang14",
     "date": "2026-04-24",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "创客空间15",
     "ownerEn": "MakerSpace15",
     "date": "2026-05-01",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4012",
   "name": "商用清洁机器人模块化改造 #13",
   "nameEn": "Modular retrofit of cleaning robot #13",
   "status": "需求确认",
   "statusEn": "Scoping",
   "progress": 100,
   "budget": "¥234,000",
   "deadline": "2026-01-13",
   "owner": "力控研究所12",
   "ownerEn": "ForceLab12",
   "ownerAvatar": "assets/img/gen/avatar/user_13.svg",
   "members": [
    {
     "name": "力控研究所12",
     "nameEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "打印狂魔13",
     "nameEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "嵌入式老王14",
     "nameEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "创客空间15",
     "nameEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机电老张16",
     "nameEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "力控研究所12",
     "ownerEn": "ForceLab12",
     "date": "2026-01-13",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "打印狂魔13",
     "ownerEn": "PrintFanatic13",
     "date": "2026-02-17",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "嵌入式老王14",
     "ownerEn": "EmbedWang14",
     "date": "2026-03-21",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "创客空间15",
     "ownerEn": "MakerSpace15",
     "date": "2026-04-25",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机电老张16",
     "ownerEn": "MechZhang16",
     "date": "2026-05-02",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4013",
   "name": "具身机器人双臂抓取平台 #14",
   "nameEn": "Dual-arm grasping platform #14",
   "status": "方案设计",
   "statusEn": "Design",
   "progress": 68,
   "budget": "¥251,000",
   "deadline": "2026-02-14",
   "owner": "打印狂魔13",
   "ownerEn": "PrintFanatic13",
   "ownerAvatar": "assets/img/gen/avatar/user_14.svg",
   "members": [
    {
     "name": "打印狂魔13",
     "nameEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "嵌入式老王14",
     "nameEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "创客空间15",
     "nameEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机电老张16",
     "nameEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "开源阿凯17",
     "nameEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "打印狂魔13",
     "ownerEn": "PrintFanatic13",
     "date": "2026-01-14",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "嵌入式老王14",
     "ownerEn": "EmbedWang14",
     "date": "2026-02-18",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "创客空间15",
     "ownerEn": "MakerSpace15",
     "date": "2026-03-22",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机电老张16",
     "ownerEn": "MechZhang16",
     "date": "2026-04-26",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "开源阿凯17",
     "ownerEn": "OpenKai17",
     "date": "2026-05-03",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4014",
   "name": "教育玩具机器人套件开发 #15",
   "nameEn": "STEM toy robot kit #15",
   "status": "模块选型",
   "statusEn": "Sourcing",
   "progress": 45,
   "budget": "¥268,000",
   "deadline": "2026-03-15",
   "owner": "嵌入式老王14",
   "ownerEn": "EmbedWang14",
   "ownerAvatar": "assets/img/gen/avatar/user_15.svg",
   "members": [
    {
     "name": "嵌入式老王14",
     "nameEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "创客空间15",
     "nameEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机电老张16",
     "nameEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "开源阿凯17",
     "nameEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "蓝鲸官方18",
     "nameEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "嵌入式老王14",
     "ownerEn": "EmbedWang14",
     "date": "2026-01-15",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "创客空间15",
     "ownerEn": "MakerSpace15",
     "date": "2026-02-19",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机电老张16",
     "ownerEn": "MechZhang16",
     "date": "2026-03-23",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "开源阿凯17",
     "ownerEn": "OpenKai17",
     "date": "2026-04-27",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "蓝鲸官方18",
     "ownerEn": "BlueWhale18",
     "date": "2026-05-04",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4015",
   "name": "商用清洁机器人模块化改造 #16",
   "nameEn": "Modular retrofit of cleaning robot #16",
   "status": "集成开发",
   "statusEn": "Integration",
   "progress": 30,
   "budget": "¥285,000",
   "deadline": "2026-04-16",
   "owner": "创客空间15",
   "ownerEn": "MakerSpace15",
   "ownerAvatar": "assets/img/gen/avatar/user_16.svg",
   "members": [
    {
     "name": "创客空间15",
     "nameEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机电老张16",
     "nameEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "开源阿凯17",
     "nameEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "蓝鲸官方18",
     "nameEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机器人小学生19",
     "nameEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "创客空间15",
     "ownerEn": "MakerSpace15",
     "date": "2026-01-16",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "doing",
     "owner": "机电老张16",
     "ownerEn": "MechZhang16",
     "date": "2026-02-20",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "todo",
     "owner": "开源阿凯17",
     "ownerEn": "OpenKai17",
     "date": "2026-03-24",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "蓝鲸官方18",
     "ownerEn": "BlueWhale18",
     "date": "2026-04-01",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机器人小学生19",
     "ownerEn": "RoboKid19",
     "date": "2026-05-05",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4016",
   "name": "具身机器人双臂抓取平台 #17",
   "nameEn": "Dual-arm grasping platform #17",
   "status": "测试验证",
   "statusEn": "Testing",
   "progress": 82,
   "budget": "¥302,000",
   "deadline": "2026-05-17",
   "owner": "机电老张16",
   "ownerEn": "MechZhang16",
   "ownerAvatar": "assets/img/gen/avatar/user_17.svg",
   "members": [
    {
     "name": "机电老张16",
     "nameEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "开源阿凯17",
     "nameEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "蓝鲸官方18",
     "nameEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机器人小学生19",
     "nameEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "力控研究所20",
     "nameEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机电老张16",
     "ownerEn": "MechZhang16",
     "date": "2026-01-17",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "开源阿凯17",
     "ownerEn": "OpenKai17",
     "date": "2026-02-21",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "蓝鲸官方18",
     "ownerEn": "BlueWhale18",
     "date": "2026-03-25",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机器人小学生19",
     "ownerEn": "RoboKid19",
     "date": "2026-04-02",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "力控研究所20",
     "ownerEn": "ForceLab20",
     "date": "2026-05-06",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4017",
   "name": "教育玩具机器人套件开发 #18",
   "nameEn": "STEM toy robot kit #18",
   "status": "交付完成",
   "statusEn": "Delivered",
   "progress": 15,
   "budget": "¥319,000",
   "deadline": "2026-06-18",
   "owner": "开源阿凯17",
   "ownerEn": "OpenKai17",
   "ownerAvatar": "assets/img/gen/avatar/user_18.svg",
   "members": [
    {
     "name": "开源阿凯17",
     "nameEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "蓝鲸官方18",
     "nameEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机器人小学生19",
     "nameEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "力控研究所20",
     "nameEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "打印狂魔21",
     "nameEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "开源阿凯17",
     "ownerEn": "OpenKai17",
     "date": "2026-01-18",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "蓝鲸官方18",
     "ownerEn": "BlueWhale18",
     "date": "2026-02-22",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机器人小学生19",
     "ownerEn": "RoboKid19",
     "date": "2026-03-26",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "力控研究所20",
     "ownerEn": "ForceLab20",
     "date": "2026-04-03",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "打印狂魔21",
     "ownerEn": "PrintFanatic21",
     "date": "2026-05-07",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4018",
   "name": "商用清洁机器人模块化改造 #19",
   "nameEn": "Modular retrofit of cleaning robot #19",
   "status": "需求确认",
   "statusEn": "Scoping",
   "progress": 100,
   "budget": "¥336,000",
   "deadline": "2026-07-19",
   "owner": "蓝鲸官方18",
   "ownerEn": "BlueWhale18",
   "ownerAvatar": "assets/img/gen/avatar/user_19.svg",
   "members": [
    {
     "name": "蓝鲸官方18",
     "nameEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机器人小学生19",
     "nameEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "力控研究所20",
     "nameEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "打印狂魔21",
     "nameEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "嵌入式老王22",
     "nameEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "蓝鲸官方18",
     "ownerEn": "BlueWhale18",
     "date": "2026-01-19",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机器人小学生19",
     "ownerEn": "RoboKid19",
     "date": "2026-02-23",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "力控研究所20",
     "ownerEn": "ForceLab20",
     "date": "2026-03-27",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "打印狂魔21",
     "ownerEn": "PrintFanatic21",
     "date": "2026-04-04",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "嵌入式老王22",
     "ownerEn": "EmbedWang22",
     "date": "2026-05-08",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4019",
   "name": "具身机器人双臂抓取平台 #20",
   "nameEn": "Dual-arm grasping platform #20",
   "status": "方案设计",
   "statusEn": "Design",
   "progress": 68,
   "budget": "¥353,000",
   "deadline": "2026-08-20",
   "owner": "机器人小学生19",
   "ownerEn": "RoboKid19",
   "ownerAvatar": "assets/img/gen/avatar/user_20.svg",
   "members": [
    {
     "name": "机器人小学生19",
     "nameEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "力控研究所20",
     "nameEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "打印狂魔21",
     "nameEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "嵌入式老王22",
     "nameEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "创客空间23",
     "nameEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机器人小学生19",
     "ownerEn": "RoboKid19",
     "date": "2026-01-20",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "力控研究所20",
     "ownerEn": "ForceLab20",
     "date": "2026-02-24",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "打印狂魔21",
     "ownerEn": "PrintFanatic21",
     "date": "2026-03-01",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "嵌入式老王22",
     "ownerEn": "EmbedWang22",
     "date": "2026-04-05",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "创客空间23",
     "ownerEn": "MakerSpace23",
     "date": "2026-05-09",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4020",
   "name": "教育玩具机器人套件开发 #21",
   "nameEn": "STEM toy robot kit #21",
   "status": "模块选型",
   "statusEn": "Sourcing",
   "progress": 45,
   "budget": "¥370,000",
   "deadline": "2026-09-21",
   "owner": "力控研究所20",
   "ownerEn": "ForceLab20",
   "ownerAvatar": "assets/img/gen/avatar/user_21.svg",
   "members": [
    {
     "name": "力控研究所20",
     "nameEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "打印狂魔21",
     "nameEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "嵌入式老王22",
     "nameEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "创客空间23",
     "nameEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机电老张24",
     "nameEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "力控研究所20",
     "ownerEn": "ForceLab20",
     "date": "2026-01-21",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "打印狂魔21",
     "ownerEn": "PrintFanatic21",
     "date": "2026-02-25",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "嵌入式老王22",
     "ownerEn": "EmbedWang22",
     "date": "2026-03-02",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "创客空间23",
     "ownerEn": "MakerSpace23",
     "date": "2026-04-06",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机电老张24",
     "ownerEn": "MechZhang24",
     "date": "2026-05-10",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4021",
   "name": "商用清洁机器人模块化改造 #22",
   "nameEn": "Modular retrofit of cleaning robot #22",
   "status": "集成开发",
   "statusEn": "Integration",
   "progress": 30,
   "budget": "¥387,000",
   "deadline": "2026-10-22",
   "owner": "打印狂魔21",
   "ownerEn": "PrintFanatic21",
   "ownerAvatar": "assets/img/gen/avatar/user_22.svg",
   "members": [
    {
     "name": "打印狂魔21",
     "nameEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "嵌入式老王22",
     "nameEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "创客空间23",
     "nameEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机电老张24",
     "nameEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "开源阿凯25",
     "nameEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "打印狂魔21",
     "ownerEn": "PrintFanatic21",
     "date": "2026-01-22",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "doing",
     "owner": "嵌入式老王22",
     "ownerEn": "EmbedWang22",
     "date": "2026-02-26",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "todo",
     "owner": "创客空间23",
     "ownerEn": "MakerSpace23",
     "date": "2026-03-03",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机电老张24",
     "ownerEn": "MechZhang24",
     "date": "2026-04-07",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "开源阿凯25",
     "ownerEn": "OpenKai25",
     "date": "2026-05-11",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4022",
   "name": "具身机器人双臂抓取平台 #23",
   "nameEn": "Dual-arm grasping platform #23",
   "status": "测试验证",
   "statusEn": "Testing",
   "progress": 82,
   "budget": "¥404,000",
   "deadline": "2026-11-23",
   "owner": "嵌入式老王22",
   "ownerEn": "EmbedWang22",
   "ownerAvatar": "assets/img/gen/avatar/user_23.svg",
   "members": [
    {
     "name": "嵌入式老王22",
     "nameEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "创客空间23",
     "nameEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机电老张24",
     "nameEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "开源阿凯25",
     "nameEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "蓝鲸官方26",
     "nameEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "嵌入式老王22",
     "ownerEn": "EmbedWang22",
     "date": "2026-01-23",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "创客空间23",
     "ownerEn": "MakerSpace23",
     "date": "2026-02-27",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机电老张24",
     "ownerEn": "MechZhang24",
     "date": "2026-03-04",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "开源阿凯25",
     "ownerEn": "OpenKai25",
     "date": "2026-04-08",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "蓝鲸官方26",
     "ownerEn": "BlueWhale26",
     "date": "2026-05-12",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4023",
   "name": "教育玩具机器人套件开发 #24",
   "nameEn": "STEM toy robot kit #24",
   "status": "交付完成",
   "statusEn": "Delivered",
   "progress": 15,
   "budget": "¥421,000",
   "deadline": "2026-12-24",
   "owner": "创客空间23",
   "ownerEn": "MakerSpace23",
   "ownerAvatar": "assets/img/gen/avatar/user_24.svg",
   "members": [
    {
     "name": "创客空间23",
     "nameEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机电老张24",
     "nameEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "开源阿凯25",
     "nameEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "蓝鲸官方26",
     "nameEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机器人小学生27",
     "nameEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "创客空间23",
     "ownerEn": "MakerSpace23",
     "date": "2026-01-24",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机电老张24",
     "ownerEn": "MechZhang24",
     "date": "2026-02-01",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "开源阿凯25",
     "ownerEn": "OpenKai25",
     "date": "2026-03-05",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "蓝鲸官方26",
     "ownerEn": "BlueWhale26",
     "date": "2026-04-09",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机器人小学生27",
     "ownerEn": "RoboKid27",
     "date": "2026-05-13",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4024",
   "name": "商用清洁机器人模块化改造 #25",
   "nameEn": "Modular retrofit of cleaning robot #25",
   "status": "需求确认",
   "statusEn": "Scoping",
   "progress": 100,
   "budget": "¥438,000",
   "deadline": "2026-01-25",
   "owner": "机电老张24",
   "ownerEn": "MechZhang24",
   "ownerAvatar": "assets/img/gen/avatar/user_25.svg",
   "members": [
    {
     "name": "机电老张24",
     "nameEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "开源阿凯25",
     "nameEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "蓝鲸官方26",
     "nameEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机器人小学生27",
     "nameEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "力控研究所28",
     "nameEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机电老张24",
     "ownerEn": "MechZhang24",
     "date": "2026-01-25",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "开源阿凯25",
     "ownerEn": "OpenKai25",
     "date": "2026-02-02",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "蓝鲸官方26",
     "ownerEn": "BlueWhale26",
     "date": "2026-03-06",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机器人小学生27",
     "ownerEn": "RoboKid27",
     "date": "2026-04-10",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "力控研究所28",
     "ownerEn": "ForceLab28",
     "date": "2026-05-14",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4025",
   "name": "具身机器人双臂抓取平台 #26",
   "nameEn": "Dual-arm grasping platform #26",
   "status": "方案设计",
   "statusEn": "Design",
   "progress": 68,
   "budget": "¥455,000",
   "deadline": "2026-02-26",
   "owner": "开源阿凯25",
   "ownerEn": "OpenKai25",
   "ownerAvatar": "assets/img/gen/avatar/user_26.svg",
   "members": [
    {
     "name": "开源阿凯25",
     "nameEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "蓝鲸官方26",
     "nameEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机器人小学生27",
     "nameEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "力控研究所28",
     "nameEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "打印狂魔29",
     "nameEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "开源阿凯25",
     "ownerEn": "OpenKai25",
     "date": "2026-01-26",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "蓝鲸官方26",
     "ownerEn": "BlueWhale26",
     "date": "2026-02-03",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机器人小学生27",
     "ownerEn": "RoboKid27",
     "date": "2026-03-07",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "力控研究所28",
     "ownerEn": "ForceLab28",
     "date": "2026-04-11",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "打印狂魔29",
     "ownerEn": "PrintFanatic29",
     "date": "2026-05-15",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4026",
   "name": "教育玩具机器人套件开发 #27",
   "nameEn": "STEM toy robot kit #27",
   "status": "模块选型",
   "statusEn": "Sourcing",
   "progress": 45,
   "budget": "¥472,000",
   "deadline": "2026-03-27",
   "owner": "蓝鲸官方26",
   "ownerEn": "BlueWhale26",
   "ownerAvatar": "assets/img/gen/avatar/user_27.svg",
   "members": [
    {
     "name": "蓝鲸官方26",
     "nameEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机器人小学生27",
     "nameEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "力控研究所28",
     "nameEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "打印狂魔29",
     "nameEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机电老张00",
     "nameEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "蓝鲸官方26",
     "ownerEn": "BlueWhale26",
     "date": "2026-01-27",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机器人小学生27",
     "ownerEn": "RoboKid27",
     "date": "2026-02-04",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "力控研究所28",
     "ownerEn": "ForceLab28",
     "date": "2026-03-08",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "打印狂魔29",
     "ownerEn": "PrintFanatic29",
     "date": "2026-04-12",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机电老张00",
     "ownerEn": "MechZhang00",
     "date": "2026-05-16",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4027",
   "name": "商用清洁机器人模块化改造 #28",
   "nameEn": "Modular retrofit of cleaning robot #28",
   "status": "集成开发",
   "statusEn": "Integration",
   "progress": 30,
   "budget": "¥489,000",
   "deadline": "2026-04-01",
   "owner": "机器人小学生27",
   "ownerEn": "RoboKid27",
   "ownerAvatar": "assets/img/gen/avatar/user_28.svg",
   "members": [
    {
     "name": "机器人小学生27",
     "nameEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "力控研究所28",
     "nameEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "打印狂魔29",
     "nameEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "机电老张00",
     "nameEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "开源阿凯01",
     "nameEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "机器人小学生27",
     "ownerEn": "RoboKid27",
     "date": "2026-01-01",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "doing",
     "owner": "力控研究所28",
     "ownerEn": "ForceLab28",
     "date": "2026-02-05",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "todo",
     "owner": "打印狂魔29",
     "ownerEn": "PrintFanatic29",
     "date": "2026-03-09",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "机电老张00",
     "ownerEn": "MechZhang00",
     "date": "2026-04-13",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "开源阿凯01",
     "ownerEn": "OpenKai01",
     "date": "2026-05-17",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4028",
   "name": "具身机器人双臂抓取平台 #29",
   "nameEn": "Dual-arm grasping platform #29",
   "status": "测试验证",
   "statusEn": "Testing",
   "progress": 82,
   "budget": "¥506,000",
   "deadline": "2026-05-02",
   "owner": "力控研究所28",
   "ownerEn": "ForceLab28",
   "ownerAvatar": "assets/img/gen/avatar/user_29.svg",
   "members": [
    {
     "name": "力控研究所28",
     "nameEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "打印狂魔29",
     "nameEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "机电老张00",
     "nameEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "开源阿凯01",
     "nameEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "蓝鲸官方02",
     "nameEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "力控研究所28",
     "ownerEn": "ForceLab28",
     "date": "2026-01-02",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "打印狂魔29",
     "ownerEn": "PrintFanatic29",
     "date": "2026-02-06",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "机电老张00",
     "ownerEn": "MechZhang00",
     "date": "2026-03-10",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "开源阿凯01",
     "ownerEn": "OpenKai01",
     "date": "2026-04-14",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "蓝鲸官方02",
     "ownerEn": "BlueWhale02",
     "date": "2026-05-18",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  },
  {
   "id": "PR4029",
   "name": "教育玩具机器人套件开发 #30",
   "nameEn": "STEM toy robot kit #30",
   "status": "交付完成",
   "statusEn": "Delivered",
   "progress": 15,
   "budget": "¥523,000",
   "deadline": "2026-06-03",
   "owner": "打印狂魔29",
   "ownerEn": "PrintFanatic29",
   "ownerAvatar": "assets/img/gen/avatar/user_30.svg",
   "members": [
    {
     "name": "打印狂魔29",
     "nameEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "role": "项目经理",
     "roleEn": "PM"
    },
    {
     "name": "机电老张00",
     "nameEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "role": "结构工程师",
     "roleEn": "Mechanical"
    },
    {
     "name": "开源阿凯01",
     "nameEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "role": "算法工程师",
     "roleEn": "Algorithm"
    },
    {
     "name": "蓝鲸官方02",
     "nameEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "role": "测试工程师",
     "roleEn": "QA"
    },
    {
     "name": "机器人小学生03",
     "nameEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "role": "采购",
     "roleEn": "Sourcing"
    }
   ],
   "nodes": [
    {
     "name": "需求拆分",
     "nameEn": "Requirement split",
     "status": "done",
     "owner": "打印狂魔29",
     "ownerEn": "PrintFanatic29",
     "date": "2026-01-03",
     "desc": "节点 1 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 1 deliverables: docs, code and test records."
    },
    {
     "name": "方案评审",
     "nameEn": "Design review",
     "status": "done",
     "owner": "机电老张00",
     "ownerEn": "MechZhang00",
     "date": "2026-02-07",
     "desc": "节点 2 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 2 deliverables: docs, code and test records."
    },
    {
     "name": "模块选型",
     "nameEn": "Module sourcing",
     "status": "doing",
     "owner": "开源阿凯01",
     "ownerEn": "OpenKai01",
     "date": "2026-03-11",
     "desc": "节点 3 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 3 deliverables: docs, code and test records."
    },
    {
     "name": "集成联调",
     "nameEn": "Integration",
     "status": "todo",
     "owner": "蓝鲸官方02",
     "ownerEn": "BlueWhale02",
     "date": "2026-04-15",
     "desc": "节点 4 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 4 deliverables: docs, code and test records."
    },
    {
     "name": "验收交付",
     "nameEn": "Acceptance",
     "status": "todo",
     "owner": "机器人小学生03",
     "ownerEn": "RoboKid03",
     "date": "2026-05-19",
     "desc": "节点 5 交付物说明：包含文档、代码与测试记录。",
     "descEn": "Node 5 deliverables: docs, code and test records."
    }
   ],
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "项目目标：基于平台现有模块资源完成整机集成，缺失部分通过工单提交定制需求。",
   "descEn": "Goal: integrate a full machine with existing platform modules; missing parts go to custom ticket."
  }
 ],
 "demands": [
  {
   "id": "D5000",
   "title": "酒店配送机器人定制需求 #1",
   "titleEn": "Hotel delivery robot customization #1",
   "budget": "¥50,000",
   "deadline": "2026-01-01",
   "owner": "机电老张00",
   "ownerEn": "MechZhang00",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "bids": 3,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "商用机器人",
   "catEn": "Commercial Robot",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5001",
   "title": "工厂巡检机器人改造需求 #2",
   "titleEn": "Factory inspection retrofit #2",
   "budget": "¥80,000",
   "deadline": "2026-02-02",
   "owner": "开源阿凯01",
   "ownerEn": "OpenKai01",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "bids": 10,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "具身机器人",
   "catEn": "Embodied Robot",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5002",
   "title": "酒店配送机器人定制需求 #3",
   "titleEn": "Hotel delivery robot customization #3",
   "budget": "¥110,000",
   "deadline": "2026-03-03",
   "owner": "蓝鲸官方02",
   "ownerEn": "BlueWhale02",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "bids": 17,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "定制机器人",
   "catEn": "Custom Robot",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5003",
   "title": "工厂巡检机器人改造需求 #4",
   "titleEn": "Factory inspection retrofit #4",
   "budget": "¥140,000",
   "deadline": "2026-04-04",
   "owner": "机器人小学生03",
   "ownerEn": "RoboKid03",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "bids": 24,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "机器人模块",
   "catEn": "Robot Module",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5004",
   "title": "酒店配送机器人定制需求 #5",
   "titleEn": "Hotel delivery robot customization #5",
   "budget": "¥170,000",
   "deadline": "2026-05-05",
   "owner": "力控研究所04",
   "ownerEn": "ForceLab04",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "bids": 31,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "机器人组件",
   "catEn": "Robot Component",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5005",
   "title": "工厂巡检机器人改造需求 #6",
   "titleEn": "Factory inspection retrofit #6",
   "budget": "¥200,000",
   "deadline": "2026-06-06",
   "owner": "打印狂魔05",
   "ownerEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "bids": 38,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "模块配件",
   "catEn": "Module Accessory",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5006",
   "title": "酒店配送机器人定制需求 #7",
   "titleEn": "Hotel delivery robot customization #7",
   "budget": "¥230,000",
   "deadline": "2026-07-07",
   "owner": "嵌入式老王06",
   "ownerEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "bids": 5,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "五金件",
   "catEn": "Hardware Part",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5007",
   "title": "工厂巡检机器人改造需求 #8",
   "titleEn": "Factory inspection retrofit #8",
   "budget": "¥260,000",
   "deadline": "2026-08-08",
   "owner": "创客空间07",
   "ownerEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "bids": 12,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "3D打印产品",
   "catEn": "3D Printed Part",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5008",
   "title": "酒店配送机器人定制需求 #9",
   "titleEn": "Hotel delivery robot customization #9",
   "budget": "¥290,000",
   "deadline": "2026-09-09",
   "owner": "机电老张08",
   "ownerEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "bids": 19,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "外壳结构",
   "catEn": "Enclosure Shell",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5009",
   "title": "工厂巡检机器人改造需求 #10",
   "titleEn": "Factory inspection retrofit #10",
   "budget": "¥320,000",
   "deadline": "2026-10-10",
   "owner": "开源阿凯09",
   "ownerEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "bids": 26,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "玩具机器人",
   "catEn": "Toy Robot",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5010",
   "title": "酒店配送机器人定制需求 #11",
   "titleEn": "Hotel delivery robot customization #11",
   "budget": "¥350,000",
   "deadline": "2026-11-11",
   "owner": "蓝鲸官方10",
   "ownerEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "bids": 33,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "商用机器人",
   "catEn": "Commercial Robot",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5011",
   "title": "工厂巡检机器人改造需求 #12",
   "titleEn": "Factory inspection retrofit #12",
   "budget": "¥380,000",
   "deadline": "2026-12-12",
   "owner": "机器人小学生11",
   "ownerEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "bids": 40,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "具身机器人",
   "catEn": "Embodied Robot",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5012",
   "title": "酒店配送机器人定制需求 #13",
   "titleEn": "Hotel delivery robot customization #13",
   "budget": "¥410,000",
   "deadline": "2026-01-13",
   "owner": "力控研究所12",
   "ownerEn": "ForceLab12",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "bids": 7,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "定制机器人",
   "catEn": "Custom Robot",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5013",
   "title": "工厂巡检机器人改造需求 #14",
   "titleEn": "Factory inspection retrofit #14",
   "budget": "¥440,000",
   "deadline": "2026-02-14",
   "owner": "打印狂魔13",
   "ownerEn": "PrintFanatic13",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "bids": 14,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "机器人模块",
   "catEn": "Robot Module",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5014",
   "title": "酒店配送机器人定制需求 #15",
   "titleEn": "Hotel delivery robot customization #15",
   "budget": "¥470,000",
   "deadline": "2026-03-15",
   "owner": "嵌入式老王14",
   "ownerEn": "EmbedWang14",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "bids": 21,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "机器人组件",
   "catEn": "Robot Component",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5015",
   "title": "工厂巡检机器人改造需求 #16",
   "titleEn": "Factory inspection retrofit #16",
   "budget": "¥500,000",
   "deadline": "2026-04-16",
   "owner": "创客空间15",
   "ownerEn": "MakerSpace15",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "bids": 28,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "模块配件",
   "catEn": "Module Accessory",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5016",
   "title": "酒店配送机器人定制需求 #17",
   "titleEn": "Hotel delivery robot customization #17",
   "budget": "¥530,000",
   "deadline": "2026-05-17",
   "owner": "机电老张16",
   "ownerEn": "MechZhang16",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "bids": 35,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "五金件",
   "catEn": "Hardware Part",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5017",
   "title": "工厂巡检机器人改造需求 #18",
   "titleEn": "Factory inspection retrofit #18",
   "budget": "¥560,000",
   "deadline": "2026-06-18",
   "owner": "开源阿凯17",
   "ownerEn": "OpenKai17",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "bids": 42,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "3D打印产品",
   "catEn": "3D Printed Part",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5018",
   "title": "酒店配送机器人定制需求 #19",
   "titleEn": "Hotel delivery robot customization #19",
   "budget": "¥590,000",
   "deadline": "2026-07-19",
   "owner": "蓝鲸官方18",
   "ownerEn": "BlueWhale18",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "bids": 9,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "外壳结构",
   "catEn": "Enclosure Shell",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5019",
   "title": "工厂巡检机器人改造需求 #20",
   "titleEn": "Factory inspection retrofit #20",
   "budget": "¥620,000",
   "deadline": "2026-08-20",
   "owner": "机器人小学生19",
   "ownerEn": "RoboKid19",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "bids": 16,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "玩具机器人",
   "catEn": "Toy Robot",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5020",
   "title": "酒店配送机器人定制需求 #21",
   "titleEn": "Hotel delivery robot customization #21",
   "budget": "¥650,000",
   "deadline": "2026-09-21",
   "owner": "力控研究所20",
   "ownerEn": "ForceLab20",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "bids": 23,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "商用机器人",
   "catEn": "Commercial Robot",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5021",
   "title": "工厂巡检机器人改造需求 #22",
   "titleEn": "Factory inspection retrofit #22",
   "budget": "¥680,000",
   "deadline": "2026-10-22",
   "owner": "打印狂魔21",
   "ownerEn": "PrintFanatic21",
   "avatar": "assets/img/gen/avatar/user_22.svg",
   "bids": 30,
   "status": "招募中",
   "statusEn": "Open",
   "cat": "具身机器人",
   "catEn": "Embodied Robot",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5022",
   "title": "酒店配送机器人定制需求 #23",
   "titleEn": "Hotel delivery robot customization #23",
   "budget": "¥710,000",
   "deadline": "2026-11-23",
   "owner": "嵌入式老王22",
   "ownerEn": "EmbedWang22",
   "avatar": "assets/img/gen/avatar/user_23.svg",
   "bids": 37,
   "status": "对接中",
   "statusEn": "Negotiating",
   "cat": "定制机器人",
   "catEn": "Custom Robot",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  },
  {
   "id": "D5023",
   "title": "工厂巡检机器人改造需求 #24",
   "titleEn": "Factory inspection retrofit #24",
   "budget": "¥740,000",
   "deadline": "2026-12-24",
   "owner": "创客空间23",
   "ownerEn": "MakerSpace23",
   "avatar": "assets/img/gen/avatar/user_24.svg",
   "bids": 4,
   "status": "已成交",
   "statusEn": "Closed",
   "cat": "机器人模块",
   "catEn": "Robot Module",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需要整机方案 + 模块选型 + 现场部署，平台资源优先。",
   "descEn": "Needs full solution, module selection and on-site deployment; platform resources preferred."
  }
 ],
 "integrations": [
  {
   "id": "I6000",
   "title": "商用机器人系统集成 #1",
   "titleEn": "Commercial Robot System Integration #1",
   "modules": 3,
   "budget": "¥80,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "机器人小学生03",
   "ownerEn": "RoboKid03",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6001",
   "title": "具身机器人系统集成 #2",
   "titleEn": "Embodied Robot System Integration #2",
   "modules": 4,
   "budget": "¥130,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "力控研究所04",
   "ownerEn": "ForceLab04",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6002",
   "title": "定制机器人系统集成 #3",
   "titleEn": "Custom Robot System Integration #3",
   "modules": 5,
   "budget": "¥180,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "打印狂魔05",
   "ownerEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6003",
   "title": "机器人模块系统集成 #4",
   "titleEn": "Robot Module System Integration #4",
   "modules": 6,
   "budget": "¥230,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "嵌入式老王06",
   "ownerEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6004",
   "title": "机器人组件系统集成 #5",
   "titleEn": "Robot Component System Integration #5",
   "modules": 7,
   "budget": "¥280,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "创客空间07",
   "ownerEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6005",
   "title": "模块配件系统集成 #6",
   "titleEn": "Module Accessory System Integration #6",
   "modules": 8,
   "budget": "¥330,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "机电老张08",
   "ownerEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6006",
   "title": "五金件系统集成 #7",
   "titleEn": "Hardware Part System Integration #7",
   "modules": 9,
   "budget": "¥380,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "开源阿凯09",
   "ownerEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6007",
   "title": "3D打印产品系统集成 #8",
   "titleEn": "3D Printed Part System Integration #8",
   "modules": 10,
   "budget": "¥430,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "蓝鲸官方10",
   "ownerEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6008",
   "title": "外壳结构系统集成 #9",
   "titleEn": "Enclosure Shell System Integration #9",
   "modules": 11,
   "budget": "¥480,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "机器人小学生11",
   "ownerEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6009",
   "title": "玩具机器人系统集成 #10",
   "titleEn": "Toy Robot System Integration #10",
   "modules": 3,
   "budget": "¥530,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "力控研究所12",
   "ownerEn": "ForceLab12",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6010",
   "title": "商用机器人系统集成 #11",
   "titleEn": "Commercial Robot System Integration #11",
   "modules": 4,
   "budget": "¥580,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "打印狂魔13",
   "ownerEn": "PrintFanatic13",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6011",
   "title": "具身机器人系统集成 #12",
   "titleEn": "Embodied Robot System Integration #12",
   "modules": 5,
   "budget": "¥630,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "嵌入式老王14",
   "ownerEn": "EmbedWang14",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6012",
   "title": "定制机器人系统集成 #13",
   "titleEn": "Custom Robot System Integration #13",
   "modules": 6,
   "budget": "¥680,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "创客空间15",
   "ownerEn": "MakerSpace15",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6013",
   "title": "机器人模块系统集成 #14",
   "titleEn": "Robot Module System Integration #14",
   "modules": 7,
   "budget": "¥730,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "机电老张16",
   "ownerEn": "MechZhang16",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6014",
   "title": "机器人组件系统集成 #15",
   "titleEn": "Robot Component System Integration #15",
   "modules": 8,
   "budget": "¥780,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "开源阿凯17",
   "ownerEn": "OpenKai17",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6015",
   "title": "模块配件系统集成 #16",
   "titleEn": "Module Accessory System Integration #16",
   "modules": 9,
   "budget": "¥830,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "蓝鲸官方18",
   "ownerEn": "BlueWhale18",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6016",
   "title": "五金件系统集成 #17",
   "titleEn": "Hardware Part System Integration #17",
   "modules": 10,
   "budget": "¥880,000",
   "status": "集成中",
   "statusEn": "Integrating",
   "owner": "机器人小学生19",
   "ownerEn": "RoboKid19",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  },
  {
   "id": "I6017",
   "title": "3D打印产品系统集成 #18",
   "titleEn": "3D Printed Part System Integration #18",
   "modules": 11,
   "budget": "¥930,000",
   "status": "已交付",
   "statusEn": "Delivered",
   "owner": "力控研究所20",
   "ownerEn": "ForceLab20",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需要把现有模块与第三方硬件打通，提供联调环境与测试用例。",
   "descEn": "Bridge existing modules with third-party hardware; provide debug env and test cases."
  }
 ],
 "tests": [
  {
   "id": "T7000",
   "title": "跌落测试 #1",
   "titleEn": "Drop test #1",
   "standard": "GB/T 37283",
   "budget": "¥10,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "创客空间07",
   "ownerEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7001",
   "title": "续航测试 #2",
   "titleEn": "Endurance test #2",
   "standard": "ISO 13482",
   "budget": "¥15,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "机电老张08",
   "ownerEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7002",
   "title": "IP防护测试 #3",
   "titleEn": "IP rating test #3",
   "standard": "IEC 60529",
   "budget": "¥20,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "开源阿凯09",
   "ownerEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7003",
   "title": "负载测试 #4",
   "titleEn": "Load test #4",
   "standard": "GB/T 36530",
   "budget": "¥25,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "蓝鲸官方10",
   "ownerEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7004",
   "title": "连续运行测试 #5",
   "titleEn": "Continuous run test #5",
   "standard": "企业标准",
   "budget": "¥30,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "机器人小学生11",
   "ownerEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7005",
   "title": "跌落测试 #6",
   "titleEn": "Drop test #6",
   "standard": "GB/T 37283",
   "budget": "¥35,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "力控研究所12",
   "ownerEn": "ForceLab12",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7006",
   "title": "续航测试 #7",
   "titleEn": "Endurance test #7",
   "standard": "ISO 13482",
   "budget": "¥40,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "打印狂魔13",
   "ownerEn": "PrintFanatic13",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7007",
   "title": "IP防护测试 #8",
   "titleEn": "IP rating test #8",
   "standard": "IEC 60529",
   "budget": "¥45,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "嵌入式老王14",
   "ownerEn": "EmbedWang14",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7008",
   "title": "负载测试 #9",
   "titleEn": "Load test #9",
   "standard": "GB/T 36530",
   "budget": "¥50,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "创客空间15",
   "ownerEn": "MakerSpace15",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7009",
   "title": "连续运行测试 #10",
   "titleEn": "Continuous run test #10",
   "standard": "企业标准",
   "budget": "¥55,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "机电老张16",
   "ownerEn": "MechZhang16",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7010",
   "title": "跌落测试 #11",
   "titleEn": "Drop test #11",
   "standard": "GB/T 37283",
   "budget": "¥60,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "开源阿凯17",
   "ownerEn": "OpenKai17",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "cover": "assets/img/design/home_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7011",
   "title": "续航测试 #12",
   "titleEn": "Endurance test #12",
   "standard": "ISO 13482",
   "budget": "¥65,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "蓝鲸官方18",
   "ownerEn": "BlueWhale18",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "cover": "assets/img/design/bg_industrial_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7012",
   "title": "IP防护测试 #13",
   "titleEn": "IP rating test #13",
   "standard": "IEC 60529",
   "budget": "¥70,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "机器人小学生19",
   "ownerEn": "RoboKid19",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "cover": "assets/img/design/toy_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7013",
   "title": "负载测试 #14",
   "titleEn": "Load test #14",
   "standard": "GB/T 36530",
   "budget": "¥75,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "力控研究所20",
   "ownerEn": "ForceLab20",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "cover": "assets/img/design/module_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7014",
   "title": "连续运行测试 #15",
   "titleEn": "Continuous run test #15",
   "standard": "企业标准",
   "budget": "¥80,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "打印狂魔21",
   "ownerEn": "PrintFanatic21",
   "avatar": "assets/img/gen/avatar/user_22.svg",
   "cover": "assets/img/design/ai_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7015",
   "title": "跌落测试 #16",
   "titleEn": "Drop test #16",
   "standard": "GB/T 37283",
   "budget": "¥85,000",
   "status": "待接单",
   "statusEn": "Open",
   "owner": "嵌入式老王22",
   "ownerEn": "EmbedWang22",
   "avatar": "assets/img/gen/avatar/user_23.svg",
   "cover": "assets/img/design/news_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7016",
   "title": "续航测试 #17",
   "titleEn": "Endurance test #17",
   "standard": "ISO 13482",
   "budget": "¥90,000",
   "status": "测试中",
   "statusEn": "Testing",
   "owner": "创客空间23",
   "ownerEn": "MakerSpace23",
   "avatar": "assets/img/gen/avatar/user_24.svg",
   "cover": "assets/img/design/forum_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  },
  {
   "id": "T7017",
   "title": "IP防护测试 #18",
   "titleEn": "IP rating test #18",
   "standard": "IEC 60529",
   "budget": "¥95,000",
   "status": "已出报告",
   "statusEn": "Reported",
   "owner": "机电老张24",
   "ownerEn": "MechZhang24",
   "avatar": "assets/img/gen/avatar/user_25.svg",
   "cover": "assets/img/design/product_hero_card.png",
   "desc": "需第三方测试环境，出具可下载的测试报告与原始数据。",
   "descEn": "Third-party lab needed; deliver downloadable test report and raw data."
  }
 ],
 "posts": [
  {
   "id": "F8000",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜商用清洁机器人 实战经验分享 #1",
   "titleEn": "General | Hands-on with Commercial Cleaning Robot #1",
   "author": "机电老张00",
   "authorEn": "MechZhang00",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "time": "2026-01-01",
   "views": 300,
   "likes": 12,
   "replies": 3,
   "top": true,
   "essence": true,
   "cover": "assets/img/design/bg_industrial_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "商用机器人",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Commercial Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张00",
     "authorEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "floor": "#1",
     "time": "2026-01-01 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 0
    },
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#2",
     "time": "2026-01-01 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 1
    },
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#3",
     "time": "2026-01-01 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 2
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#4",
     "time": "2026-01-01 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 3
    }
   ]
  },
  {
   "id": "F8001",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜双臂操作机器人 实战经验分享 #2",
   "titleEn": "Q&A | Hands-on with Dual-Arm Manipulator #2",
   "author": "开源阿凯01",
   "authorEn": "OpenKai01",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "time": "2026-02-02",
   "views": 631,
   "likes": 49,
   "replies": 14,
   "top": true,
   "essence": false,
   "cover": "assets/img/design/toy_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "具身机器人",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "Embodied Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#1",
     "time": "2026-02-02 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 1
    },
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#2",
     "time": "2026-02-02 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 2
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#3",
     "time": "2026-02-02 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 3
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#4",
     "time": "2026-02-02 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 4
    }
   ]
  },
  {
   "id": "F8002",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜定制教育机器人 实战经验分享 #3",
   "titleEn": "DIY Play | Hands-on with Custom Education Robot #3",
   "author": "蓝鲸官方02",
   "authorEn": "BlueWhale02",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "time": "2026-03-03",
   "views": 962,
   "likes": 86,
   "replies": 25,
   "top": true,
   "essence": false,
   "cover": "assets/img/design/module_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "定制机器人",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Custom Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#1",
     "time": "2026-03-03 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 2
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#2",
     "time": "2026-03-03 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 3
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#3",
     "time": "2026-03-03 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 4
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#4",
     "time": "2026-03-03 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 5
    }
   ]
  },
  {
   "id": "F8003",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜边缘计算模块 实战经验分享 #4",
   "titleEn": "Open Source | Hands-on with Edge Compute Module #4",
   "author": "机器人小学生03",
   "authorEn": "RoboKid03",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "time": "2026-04-04",
   "views": 1293,
   "likes": 123,
   "replies": 36,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/ai_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "机器人模块",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Robot Module",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#1",
     "time": "2026-04-04 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 3
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#2",
     "time": "2026-04-04 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 4
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#3",
     "time": "2026-04-04 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 5
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#4",
     "time": "2026-04-04 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 6
    }
   ]
  },
  {
   "id": "F8004",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜总线舵机 实战经验分享 #5",
   "titleEn": "Learning | Hands-on with Bus Servo #5",
   "author": "力控研究所04",
   "authorEn": "ForceLab04",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "time": "2026-05-05",
   "views": 1624,
   "likes": 160,
   "replies": 47,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/news_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "机器人组件",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Robot Component",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#1",
     "time": "2026-05-05 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 4
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#2",
     "time": "2026-05-05 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 5
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#3",
     "time": "2026-05-05 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 6
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#4",
     "time": "2026-05-05 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 7
    }
   ]
  },
  {
   "id": "F8005",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜减震垫组 实战经验分享 #6",
   "titleEn": "Marketplace | Hands-on with Damper Pad Set #6",
   "author": "打印狂魔05",
   "authorEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "time": "2026-06-06",
   "views": 1955,
   "likes": 197,
   "replies": 58,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/forum_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "模块配件",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "Module Accessory",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#1",
     "time": "2026-06-06 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 5
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#2",
     "time": "2026-06-06 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 6
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#3",
     "time": "2026-06-06 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 7
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#4",
     "time": "2026-06-06 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 8
    }
   ]
  },
  {
   "id": "F8006",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜万向轮组 实战经验分享 #7",
   "titleEn": "General | Hands-on with Caster Wheel Set #7",
   "author": "嵌入式老王06",
   "authorEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "time": "2026-07-07",
   "views": 2286,
   "likes": 234,
   "replies": 69,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/product_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "五金件",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Hardware Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#1",
     "time": "2026-07-07 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 6
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#2",
     "time": "2026-07-07 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 7
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#3",
     "time": "2026-07-07 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 8
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#4",
     "time": "2026-07-07 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 9
    }
   ]
  },
  {
   "id": "F8007",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜拼接积木结构件 实战经验分享 #8",
   "titleEn": "Q&A | Hands-on with Snap Brick Structure #8",
   "author": "创客空间07",
   "authorEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "time": "2026-08-08",
   "views": 2617,
   "likes": 271,
   "replies": 80,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/home_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "3D打印产品",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "3D Printed Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#1",
     "time": "2026-08-08 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 7
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#2",
     "time": "2026-08-08 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 8
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#3",
     "time": "2026-08-08 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 9
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#4",
     "time": "2026-08-08 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 10
    }
   ]
  },
  {
   "id": "F8008",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜防水接线盒 实战经验分享 #9",
   "titleEn": "DIY Play | Hands-on with Waterproof Junction Box #9",
   "author": "机电老张08",
   "authorEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "time": "2026-09-09",
   "views": 2948,
   "likes": 308,
   "replies": 91,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/bg_industrial_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "外壳结构",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Enclosure Shell",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#1",
     "time": "2026-09-09 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 8
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#2",
     "time": "2026-09-09 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 9
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#3",
     "time": "2026-09-09 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 10
    },
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#4",
     "time": "2026-09-09 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 11
    }
   ]
  },
  {
   "id": "F8009",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜迷你格斗机器人 实战经验分享 #10",
   "titleEn": "Open Source | Hands-on with Mini Battle Robot #10",
   "author": "开源阿凯09",
   "authorEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "time": "2026-10-10",
   "views": 3279,
   "likes": 345,
   "replies": 102,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/toy_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "玩具机器人",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Toy Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#1",
     "time": "2026-10-10 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 9
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#2",
     "time": "2026-10-10 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 10
    },
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#3",
     "time": "2026-10-10 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 11
    },
    {
     "author": "力控研究所12",
     "authorEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "floor": "#4",
     "time": "2026-10-10 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 12
    }
   ]
  },
  {
   "id": "F8010",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜商用清洁机器人 实战经验分享 #11",
   "titleEn": "Learning | Hands-on with Commercial Cleaning Robot #11",
   "author": "蓝鲸官方10",
   "authorEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "time": "2026-11-11",
   "views": 3610,
   "likes": 382,
   "replies": 113,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/module_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "商用机器人",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Commercial Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#1",
     "time": "2026-11-11 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 10
    },
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#2",
     "time": "2026-11-11 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 11
    },
    {
     "author": "力控研究所12",
     "authorEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "floor": "#3",
     "time": "2026-11-11 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 12
    },
    {
     "author": "打印狂魔13",
     "authorEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "floor": "#4",
     "time": "2026-11-11 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 13
    }
   ]
  },
  {
   "id": "F8011",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜双臂操作机器人 实战经验分享 #12",
   "titleEn": "Marketplace | Hands-on with Dual-Arm Manipulator #12",
   "author": "机器人小学生11",
   "authorEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "time": "2026-12-12",
   "views": 3941,
   "likes": 419,
   "replies": 124,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/ai_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "具身机器人",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "Embodied Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#1",
     "time": "2026-12-12 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 11
    },
    {
     "author": "力控研究所12",
     "authorEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "floor": "#2",
     "time": "2026-12-12 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 12
    },
    {
     "author": "打印狂魔13",
     "authorEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "floor": "#3",
     "time": "2026-12-12 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 13
    },
    {
     "author": "嵌入式老王14",
     "authorEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "floor": "#4",
     "time": "2026-12-12 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 14
    }
   ]
  },
  {
   "id": "F8012",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜定制教育机器人 实战经验分享 #13",
   "titleEn": "General | Hands-on with Custom Education Robot #13",
   "author": "力控研究所12",
   "authorEn": "ForceLab12",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "time": "2026-01-13",
   "views": 4272,
   "likes": 456,
   "replies": 135,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/news_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "定制机器人",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Custom Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "力控研究所12",
     "authorEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "floor": "#1",
     "time": "2026-01-13 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 12
    },
    {
     "author": "打印狂魔13",
     "authorEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "floor": "#2",
     "time": "2026-01-13 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 13
    },
    {
     "author": "嵌入式老王14",
     "authorEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "floor": "#3",
     "time": "2026-01-13 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 14
    },
    {
     "author": "创客空间15",
     "authorEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "floor": "#4",
     "time": "2026-01-13 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 15
    }
   ]
  },
  {
   "id": "F8013",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜边缘计算模块 实战经验分享 #14",
   "titleEn": "Q&A | Hands-on with Edge Compute Module #14",
   "author": "打印狂魔13",
   "authorEn": "PrintFanatic13",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "time": "2026-02-14",
   "views": 4603,
   "likes": 493,
   "replies": 146,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/forum_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "机器人模块",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "Robot Module",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "打印狂魔13",
     "authorEn": "PrintFanatic13",
     "avatar": "assets/img/gen/avatar/user_14.svg",
     "floor": "#1",
     "time": "2026-02-14 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 13
    },
    {
     "author": "嵌入式老王14",
     "authorEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "floor": "#2",
     "time": "2026-02-14 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 14
    },
    {
     "author": "创客空间15",
     "authorEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "floor": "#3",
     "time": "2026-02-14 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 15
    },
    {
     "author": "机电老张16",
     "authorEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "floor": "#4",
     "time": "2026-02-14 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 16
    }
   ]
  },
  {
   "id": "F8014",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜总线舵机 实战经验分享 #15",
   "titleEn": "DIY Play | Hands-on with Bus Servo #15",
   "author": "嵌入式老王14",
   "authorEn": "EmbedWang14",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "time": "2026-03-15",
   "views": 4934,
   "likes": 530,
   "replies": 157,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/product_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "机器人组件",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Robot Component",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "嵌入式老王14",
     "authorEn": "EmbedWang14",
     "avatar": "assets/img/gen/avatar/user_15.svg",
     "floor": "#1",
     "time": "2026-03-15 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 14
    },
    {
     "author": "创客空间15",
     "authorEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "floor": "#2",
     "time": "2026-03-15 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 15
    },
    {
     "author": "机电老张16",
     "authorEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "floor": "#3",
     "time": "2026-03-15 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 16
    },
    {
     "author": "开源阿凯17",
     "authorEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "floor": "#4",
     "time": "2026-03-15 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 17
    }
   ]
  },
  {
   "id": "F8015",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜减震垫组 实战经验分享 #16",
   "titleEn": "Open Source | Hands-on with Damper Pad Set #16",
   "author": "创客空间15",
   "authorEn": "MakerSpace15",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "time": "2026-04-16",
   "views": 5265,
   "likes": 567,
   "replies": 168,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/home_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "模块配件",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Module Accessory",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "创客空间15",
     "authorEn": "MakerSpace15",
     "avatar": "assets/img/gen/avatar/user_16.svg",
     "floor": "#1",
     "time": "2026-04-16 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 15
    },
    {
     "author": "机电老张16",
     "authorEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "floor": "#2",
     "time": "2026-04-16 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 16
    },
    {
     "author": "开源阿凯17",
     "authorEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "floor": "#3",
     "time": "2026-04-16 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 17
    },
    {
     "author": "蓝鲸官方18",
     "authorEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "floor": "#4",
     "time": "2026-04-16 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 18
    }
   ]
  },
  {
   "id": "F8016",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜万向轮组 实战经验分享 #17",
   "titleEn": "Learning | Hands-on with Caster Wheel Set #17",
   "author": "机电老张16",
   "authorEn": "MechZhang16",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "time": "2026-05-17",
   "views": 5596,
   "likes": 604,
   "replies": 179,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/bg_industrial_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "五金件",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Hardware Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张16",
     "authorEn": "MechZhang16",
     "avatar": "assets/img/gen/avatar/user_17.svg",
     "floor": "#1",
     "time": "2026-05-17 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 16
    },
    {
     "author": "开源阿凯17",
     "authorEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "floor": "#2",
     "time": "2026-05-17 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 17
    },
    {
     "author": "蓝鲸官方18",
     "authorEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "floor": "#3",
     "time": "2026-05-17 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 18
    },
    {
     "author": "机器人小学生19",
     "authorEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "floor": "#4",
     "time": "2026-05-17 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 19
    }
   ]
  },
  {
   "id": "F8017",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜拼接积木结构件 实战经验分享 #18",
   "titleEn": "Marketplace | Hands-on with Snap Brick Structure #18",
   "author": "开源阿凯17",
   "authorEn": "OpenKai17",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "time": "2026-06-18",
   "views": 5927,
   "likes": 641,
   "replies": 190,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/toy_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "3D打印产品",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "3D Printed Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯17",
     "authorEn": "OpenKai17",
     "avatar": "assets/img/gen/avatar/user_18.svg",
     "floor": "#1",
     "time": "2026-06-18 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 17
    },
    {
     "author": "蓝鲸官方18",
     "authorEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "floor": "#2",
     "time": "2026-06-18 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 18
    },
    {
     "author": "机器人小学生19",
     "authorEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "floor": "#3",
     "time": "2026-06-18 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 19
    },
    {
     "author": "力控研究所20",
     "authorEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "floor": "#4",
     "time": "2026-06-18 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 20
    }
   ]
  },
  {
   "id": "F8018",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜防水接线盒 实战经验分享 #19",
   "titleEn": "General | Hands-on with Waterproof Junction Box #19",
   "author": "蓝鲸官方18",
   "authorEn": "BlueWhale18",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "time": "2026-07-19",
   "views": 6258,
   "likes": 678,
   "replies": 201,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/module_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "外壳结构",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Enclosure Shell",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "蓝鲸官方18",
     "authorEn": "BlueWhale18",
     "avatar": "assets/img/gen/avatar/user_19.svg",
     "floor": "#1",
     "time": "2026-07-19 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 18
    },
    {
     "author": "机器人小学生19",
     "authorEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "floor": "#2",
     "time": "2026-07-19 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 19
    },
    {
     "author": "力控研究所20",
     "authorEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "floor": "#3",
     "time": "2026-07-19 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 20
    },
    {
     "author": "打印狂魔21",
     "authorEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "floor": "#4",
     "time": "2026-07-19 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 21
    }
   ]
  },
  {
   "id": "F8019",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜迷你格斗机器人 实战经验分享 #20",
   "titleEn": "Q&A | Hands-on with Mini Battle Robot #20",
   "author": "机器人小学生19",
   "authorEn": "RoboKid19",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "time": "2026-08-20",
   "views": 6589,
   "likes": 715,
   "replies": 212,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/ai_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "玩具机器人",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "Toy Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机器人小学生19",
     "authorEn": "RoboKid19",
     "avatar": "assets/img/gen/avatar/user_20.svg",
     "floor": "#1",
     "time": "2026-08-20 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 19
    },
    {
     "author": "力控研究所20",
     "authorEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "floor": "#2",
     "time": "2026-08-20 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 20
    },
    {
     "author": "打印狂魔21",
     "authorEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "floor": "#3",
     "time": "2026-08-20 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 21
    },
    {
     "author": "嵌入式老王22",
     "authorEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "floor": "#4",
     "time": "2026-08-20 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 22
    }
   ]
  },
  {
   "id": "F8020",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜商用清洁机器人 实战经验分享 #21",
   "titleEn": "DIY Play | Hands-on with Commercial Cleaning Robot #21",
   "author": "力控研究所20",
   "authorEn": "ForceLab20",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "time": "2026-09-21",
   "views": 6920,
   "likes": 752,
   "replies": 223,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/news_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "商用机器人",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Commercial Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "力控研究所20",
     "authorEn": "ForceLab20",
     "avatar": "assets/img/gen/avatar/user_21.svg",
     "floor": "#1",
     "time": "2026-09-21 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 20
    },
    {
     "author": "打印狂魔21",
     "authorEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "floor": "#2",
     "time": "2026-09-21 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 21
    },
    {
     "author": "嵌入式老王22",
     "authorEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "floor": "#3",
     "time": "2026-09-21 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 22
    },
    {
     "author": "创客空间23",
     "authorEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "floor": "#4",
     "time": "2026-09-21 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 23
    }
   ]
  },
  {
   "id": "F8021",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜双臂操作机器人 实战经验分享 #22",
   "titleEn": "Open Source | Hands-on with Dual-Arm Manipulator #22",
   "author": "打印狂魔21",
   "authorEn": "PrintFanatic21",
   "avatar": "assets/img/gen/avatar/user_22.svg",
   "time": "2026-10-22",
   "views": 7251,
   "likes": 789,
   "replies": 234,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/forum_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "具身机器人",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Embodied Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "打印狂魔21",
     "authorEn": "PrintFanatic21",
     "avatar": "assets/img/gen/avatar/user_22.svg",
     "floor": "#1",
     "time": "2026-10-22 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 21
    },
    {
     "author": "嵌入式老王22",
     "authorEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "floor": "#2",
     "time": "2026-10-22 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 22
    },
    {
     "author": "创客空间23",
     "authorEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "floor": "#3",
     "time": "2026-10-22 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 23
    },
    {
     "author": "机电老张24",
     "authorEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "floor": "#4",
     "time": "2026-10-22 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 24
    }
   ]
  },
  {
   "id": "F8022",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜定制教育机器人 实战经验分享 #23",
   "titleEn": "Learning | Hands-on with Custom Education Robot #23",
   "author": "嵌入式老王22",
   "authorEn": "EmbedWang22",
   "avatar": "assets/img/gen/avatar/user_23.svg",
   "time": "2026-11-23",
   "views": 7582,
   "likes": 826,
   "replies": 245,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/product_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "定制机器人",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Custom Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "嵌入式老王22",
     "authorEn": "EmbedWang22",
     "avatar": "assets/img/gen/avatar/user_23.svg",
     "floor": "#1",
     "time": "2026-11-23 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 22
    },
    {
     "author": "创客空间23",
     "authorEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "floor": "#2",
     "time": "2026-11-23 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 23
    },
    {
     "author": "机电老张24",
     "authorEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "floor": "#3",
     "time": "2026-11-23 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 24
    },
    {
     "author": "开源阿凯25",
     "authorEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "floor": "#4",
     "time": "2026-11-23 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 25
    }
   ]
  },
  {
   "id": "F8023",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜边缘计算模块 实战经验分享 #24",
   "titleEn": "Marketplace | Hands-on with Edge Compute Module #24",
   "author": "创客空间23",
   "authorEn": "MakerSpace23",
   "avatar": "assets/img/gen/avatar/user_24.svg",
   "time": "2026-12-24",
   "views": 7913,
   "likes": 863,
   "replies": 256,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/home_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "机器人模块",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "Robot Module",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "创客空间23",
     "authorEn": "MakerSpace23",
     "avatar": "assets/img/gen/avatar/user_24.svg",
     "floor": "#1",
     "time": "2026-12-24 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 23
    },
    {
     "author": "机电老张24",
     "authorEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "floor": "#2",
     "time": "2026-12-24 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 24
    },
    {
     "author": "开源阿凯25",
     "authorEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "floor": "#3",
     "time": "2026-12-24 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 25
    },
    {
     "author": "蓝鲸官方26",
     "authorEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "floor": "#4",
     "time": "2026-12-24 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 26
    }
   ]
  },
  {
   "id": "F8024",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜总线舵机 实战经验分享 #25",
   "titleEn": "General | Hands-on with Bus Servo #25",
   "author": "机电老张24",
   "authorEn": "MechZhang24",
   "avatar": "assets/img/gen/avatar/user_25.svg",
   "time": "2026-01-25",
   "views": 8244,
   "likes": 900,
   "replies": 7,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/bg_industrial_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "机器人组件",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Robot Component",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张24",
     "authorEn": "MechZhang24",
     "avatar": "assets/img/gen/avatar/user_25.svg",
     "floor": "#1",
     "time": "2026-01-25 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 24
    },
    {
     "author": "开源阿凯25",
     "authorEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "floor": "#2",
     "time": "2026-01-25 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 25
    },
    {
     "author": "蓝鲸官方26",
     "authorEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "floor": "#3",
     "time": "2026-01-25 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 26
    },
    {
     "author": "机器人小学生27",
     "authorEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "floor": "#4",
     "time": "2026-01-25 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 27
    }
   ]
  },
  {
   "id": "F8025",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜减震垫组 实战经验分享 #26",
   "titleEn": "Q&A | Hands-on with Damper Pad Set #26",
   "author": "开源阿凯25",
   "authorEn": "OpenKai25",
   "avatar": "assets/img/gen/avatar/user_26.svg",
   "time": "2026-02-26",
   "views": 8575,
   "likes": 37,
   "replies": 18,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/toy_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "模块配件",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "Module Accessory",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯25",
     "authorEn": "OpenKai25",
     "avatar": "assets/img/gen/avatar/user_26.svg",
     "floor": "#1",
     "time": "2026-02-26 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 25
    },
    {
     "author": "蓝鲸官方26",
     "authorEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "floor": "#2",
     "time": "2026-02-26 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 26
    },
    {
     "author": "机器人小学生27",
     "authorEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "floor": "#3",
     "time": "2026-02-26 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 27
    },
    {
     "author": "力控研究所28",
     "authorEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "floor": "#4",
     "time": "2026-02-26 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 28
    }
   ]
  },
  {
   "id": "F8026",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜万向轮组 实战经验分享 #27",
   "titleEn": "DIY Play | Hands-on with Caster Wheel Set #27",
   "author": "蓝鲸官方26",
   "authorEn": "BlueWhale26",
   "avatar": "assets/img/gen/avatar/user_27.svg",
   "time": "2026-03-27",
   "views": 8906,
   "likes": 74,
   "replies": 29,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/module_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "五金件",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Hardware Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "蓝鲸官方26",
     "authorEn": "BlueWhale26",
     "avatar": "assets/img/gen/avatar/user_27.svg",
     "floor": "#1",
     "time": "2026-03-27 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 26
    },
    {
     "author": "机器人小学生27",
     "authorEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "floor": "#2",
     "time": "2026-03-27 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 27
    },
    {
     "author": "力控研究所28",
     "authorEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "floor": "#3",
     "time": "2026-03-27 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 28
    },
    {
     "author": "打印狂魔29",
     "authorEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "floor": "#4",
     "time": "2026-03-27 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 29
    }
   ]
  },
  {
   "id": "F8027",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜拼接积木结构件 实战经验分享 #28",
   "titleEn": "Open Source | Hands-on with Snap Brick Structure #28",
   "author": "机器人小学生27",
   "authorEn": "RoboKid27",
   "avatar": "assets/img/gen/avatar/user_28.svg",
   "time": "2026-04-01",
   "views": 9237,
   "likes": 111,
   "replies": 40,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/ai_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "3D打印产品",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "3D Printed Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机器人小学生27",
     "authorEn": "RoboKid27",
     "avatar": "assets/img/gen/avatar/user_28.svg",
     "floor": "#1",
     "time": "2026-04-01 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 27
    },
    {
     "author": "力控研究所28",
     "authorEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "floor": "#2",
     "time": "2026-04-01 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 28
    },
    {
     "author": "打印狂魔29",
     "authorEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "floor": "#3",
     "time": "2026-04-01 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 29
    },
    {
     "author": "机电老张00",
     "authorEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "floor": "#4",
     "time": "2026-04-01 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 30
    }
   ]
  },
  {
   "id": "F8028",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜防水接线盒 实战经验分享 #29",
   "titleEn": "Learning | Hands-on with Waterproof Junction Box #29",
   "author": "力控研究所28",
   "authorEn": "ForceLab28",
   "avatar": "assets/img/gen/avatar/user_29.svg",
   "time": "2026-05-02",
   "views": 9568,
   "likes": 148,
   "replies": 51,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/news_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "外壳结构",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Enclosure Shell",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "力控研究所28",
     "authorEn": "ForceLab28",
     "avatar": "assets/img/gen/avatar/user_29.svg",
     "floor": "#1",
     "time": "2026-05-02 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 28
    },
    {
     "author": "打印狂魔29",
     "authorEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "floor": "#2",
     "time": "2026-05-02 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 29
    },
    {
     "author": "机电老张00",
     "authorEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "floor": "#3",
     "time": "2026-05-02 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 30
    },
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#4",
     "time": "2026-05-02 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 31
    }
   ]
  },
  {
   "id": "F8029",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜迷你格斗机器人 实战经验分享 #30",
   "titleEn": "Marketplace | Hands-on with Mini Battle Robot #30",
   "author": "打印狂魔29",
   "authorEn": "PrintFanatic29",
   "avatar": "assets/img/gen/avatar/user_30.svg",
   "time": "2026-06-03",
   "views": 9899,
   "likes": 185,
   "replies": 62,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/forum_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "玩具机器人",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "Toy Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "打印狂魔29",
     "authorEn": "PrintFanatic29",
     "avatar": "assets/img/gen/avatar/user_30.svg",
     "floor": "#1",
     "time": "2026-06-03 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 29
    },
    {
     "author": "机电老张00",
     "authorEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "floor": "#2",
     "time": "2026-06-03 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 30
    },
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#3",
     "time": "2026-06-03 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 31
    },
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#4",
     "time": "2026-06-03 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 32
    }
   ]
  },
  {
   "id": "F8030",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜商用清洁机器人 实战经验分享 #31",
   "titleEn": "General | Hands-on with Commercial Cleaning Robot #31",
   "author": "机电老张00",
   "authorEn": "MechZhang00",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "time": "2026-07-04",
   "views": 10230,
   "likes": 222,
   "replies": 73,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/product_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "商用机器人",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Commercial Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张00",
     "authorEn": "MechZhang00",
     "avatar": "assets/img/gen/avatar/user_01.svg",
     "floor": "#1",
     "time": "2026-07-04 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 30
    },
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#2",
     "time": "2026-07-04 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 31
    },
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#3",
     "time": "2026-07-04 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 32
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#4",
     "time": "2026-07-04 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 33
    }
   ]
  },
  {
   "id": "F8031",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜双臂操作机器人 实战经验分享 #32",
   "titleEn": "Q&A | Hands-on with Dual-Arm Manipulator #32",
   "author": "开源阿凯01",
   "authorEn": "OpenKai01",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "time": "2026-08-05",
   "views": 10561,
   "likes": 259,
   "replies": 84,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/home_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "具身机器人",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "Embodied Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯01",
     "authorEn": "OpenKai01",
     "avatar": "assets/img/gen/avatar/user_02.svg",
     "floor": "#1",
     "time": "2026-08-05 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 31
    },
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#2",
     "time": "2026-08-05 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 32
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#3",
     "time": "2026-08-05 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 33
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#4",
     "time": "2026-08-05 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 34
    }
   ]
  },
  {
   "id": "F8032",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜定制教育机器人 实战经验分享 #33",
   "titleEn": "DIY Play | Hands-on with Custom Education Robot #33",
   "author": "蓝鲸官方02",
   "authorEn": "BlueWhale02",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "time": "2026-09-06",
   "views": 10892,
   "likes": 296,
   "replies": 95,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/bg_industrial_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "定制机器人",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Custom Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "蓝鲸官方02",
     "authorEn": "BlueWhale02",
     "avatar": "assets/img/gen/avatar/user_03.svg",
     "floor": "#1",
     "time": "2026-09-06 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 32
    },
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#2",
     "time": "2026-09-06 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 33
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#3",
     "time": "2026-09-06 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 34
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#4",
     "time": "2026-09-06 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 35
    }
   ]
  },
  {
   "id": "F8033",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜边缘计算模块 实战经验分享 #34",
   "titleEn": "Open Source | Hands-on with Edge Compute Module #34",
   "author": "机器人小学生03",
   "authorEn": "RoboKid03",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "time": "2026-10-07",
   "views": 11223,
   "likes": 333,
   "replies": 106,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/toy_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "机器人模块",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Robot Module",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机器人小学生03",
     "authorEn": "RoboKid03",
     "avatar": "assets/img/gen/avatar/user_04.svg",
     "floor": "#1",
     "time": "2026-10-07 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 33
    },
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#2",
     "time": "2026-10-07 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 34
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#3",
     "time": "2026-10-07 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 35
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#4",
     "time": "2026-10-07 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 36
    }
   ]
  },
  {
   "id": "F8034",
   "board": "学习资料",
   "boardEn": "Learning",
   "title": "学习资料｜总线舵机 实战经验分享 #35",
   "titleEn": "Learning | Hands-on with Bus Servo #35",
   "author": "力控研究所04",
   "authorEn": "ForceLab04",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "time": "2026-11-08",
   "views": 11554,
   "likes": 370,
   "replies": 117,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/module_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "学习资料",
    "机器人组件",
    "经验"
   ],
   "tagsEn": [
    "Learning",
    "Robot Component",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "力控研究所04",
     "authorEn": "ForceLab04",
     "avatar": "assets/img/gen/avatar/user_05.svg",
     "floor": "#1",
     "time": "2026-11-08 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 34
    },
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#2",
     "time": "2026-11-08 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 35
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#3",
     "time": "2026-11-08 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 36
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#4",
     "time": "2026-11-08 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 37
    }
   ]
  },
  {
   "id": "F8035",
   "board": "二手交易",
   "boardEn": "Marketplace",
   "title": "二手交易｜减震垫组 实战经验分享 #36",
   "titleEn": "Marketplace | Hands-on with Damper Pad Set #36",
   "author": "打印狂魔05",
   "authorEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "time": "2026-12-09",
   "views": 11885,
   "likes": 407,
   "replies": 128,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/ai_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "二手交易",
    "模块配件",
    "经验"
   ],
   "tagsEn": [
    "Marketplace",
    "Module Accessory",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "打印狂魔05",
     "authorEn": "PrintFanatic05",
     "avatar": "assets/img/gen/avatar/user_06.svg",
     "floor": "#1",
     "time": "2026-12-09 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 35
    },
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#2",
     "time": "2026-12-09 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 36
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#3",
     "time": "2026-12-09 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 37
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#4",
     "time": "2026-12-09 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 38
    }
   ]
  },
  {
   "id": "F8036",
   "board": "综合讨论",
   "boardEn": "General",
   "title": "综合讨论｜万向轮组 实战经验分享 #37",
   "titleEn": "General | Hands-on with Caster Wheel Set #37",
   "author": "嵌入式老王06",
   "authorEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "time": "2026-01-10",
   "views": 12216,
   "likes": 444,
   "replies": 139,
   "top": false,
   "essence": true,
   "cover": "assets/img/design/news_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "综合讨论",
    "五金件",
    "经验"
   ],
   "tagsEn": [
    "General",
    "Hardware Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "嵌入式老王06",
     "authorEn": "EmbedWang06",
     "avatar": "assets/img/gen/avatar/user_07.svg",
     "floor": "#1",
     "time": "2026-01-10 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 36
    },
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#2",
     "time": "2026-01-10 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 37
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#3",
     "time": "2026-01-10 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 38
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#4",
     "time": "2026-01-10 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 39
    }
   ]
  },
  {
   "id": "F8037",
   "board": "产品问答",
   "boardEn": "Q&A",
   "title": "产品问答｜拼接积木结构件 实战经验分享 #38",
   "titleEn": "Q&A | Hands-on with Snap Brick Structure #38",
   "author": "创客空间07",
   "authorEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "time": "2026-02-11",
   "views": 12547,
   "likes": 481,
   "replies": 150,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/forum_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "产品问答",
    "3D打印产品",
    "经验"
   ],
   "tagsEn": [
    "Q&A",
    "3D Printed Part",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "创客空间07",
     "authorEn": "MakerSpace07",
     "avatar": "assets/img/gen/avatar/user_08.svg",
     "floor": "#1",
     "time": "2026-02-11 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 37
    },
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#2",
     "time": "2026-02-11 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 38
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#3",
     "time": "2026-02-11 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 39
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#4",
     "time": "2026-02-11 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 0
    }
   ]
  },
  {
   "id": "F8038",
   "board": "DIY 玩法",
   "boardEn": "DIY Play",
   "title": "DIY 玩法｜防水接线盒 实战经验分享 #39",
   "titleEn": "DIY Play | Hands-on with Waterproof Junction Box #39",
   "author": "机电老张08",
   "authorEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "time": "2026-03-12",
   "views": 12878,
   "likes": 518,
   "replies": 161,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/product_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "DIY 玩法",
    "外壳结构",
    "经验"
   ],
   "tagsEn": [
    "DIY Play",
    "Enclosure Shell",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "机电老张08",
     "authorEn": "MechZhang08",
     "avatar": "assets/img/gen/avatar/user_09.svg",
     "floor": "#1",
     "time": "2026-03-12 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 38
    },
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#2",
     "time": "2026-03-12 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 39
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#3",
     "time": "2026-03-12 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 0
    },
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#4",
     "time": "2026-03-12 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 1
    }
   ]
  },
  {
   "id": "F8039",
   "board": "开源项目",
   "boardEn": "Open Source",
   "title": "开源项目｜迷你格斗机器人 实战经验分享 #40",
   "titleEn": "Open Source | Hands-on with Mini Battle Robot #40",
   "author": "开源阿凯09",
   "authorEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "time": "2026-04-13",
   "views": 13209,
   "likes": 555,
   "replies": 172,
   "top": false,
   "essence": false,
   "cover": "assets/img/design/home_hero_thumb.png",
   "excerpt": "整理了一份从选型到联调的完整记录，含踩坑清单与资料包下载链接。",
   "excerptEn": "Full record from selection to integration, with pitfalls list and resource pack.",
   "tags": [
    "开源项目",
    "玩具机器人",
    "经验"
   ],
   "tagsEn": [
    "Open Source",
    "Toy Robot",
    "Experience"
   ],
   "replies_list": [
    {
     "author": "开源阿凯09",
     "authorEn": "OpenKai09",
     "avatar": "assets/img/gen/avatar/user_10.svg",
     "floor": "#1",
     "time": "2026-04-13 00:00",
     "text": "这个模块我也在用，建议加装散热片。",
     "textEn": "I use this module too, add a heatsink.",
     "likes": 39
    },
    {
     "author": "蓝鲸官方10",
     "authorEn": "BlueWhale10",
     "avatar": "assets/img/gen/avatar/user_11.svg",
     "floor": "#2",
     "time": "2026-04-13 03:17",
     "text": "图纸已下载，感谢分享！",
     "textEn": "Files downloaded, thanks!",
     "likes": 0
    },
    {
     "author": "机器人小学生11",
     "authorEn": "RoboKid11",
     "avatar": "assets/img/gen/avatar/user_12.svg",
     "floor": "#3",
     "time": "2026-04-13 06:34",
     "text": "请问能否提供 ROS2 的驱动包？",
     "textEn": "Any ROS2 driver package?",
     "likes": 1
    },
    {
     "author": "力控研究所12",
     "authorEn": "ForceLab12",
     "avatar": "assets/img/gen/avatar/user_13.svg",
     "floor": "#4",
     "time": "2026-04-13 09:51",
     "text": "实测负载 3kg 稳定，供参考。",
     "textEn": "Stable at 3kg load in my test.",
     "likes": 2
    }
   ]
  }
 ],
 "learns": [
  {
   "id": "L9000",
   "cat": "入门指南",
   "catEn": "Getting Started",
   "title": "入门指南｜商用清洁机器人 从入门到实战 1",
   "titleEn": "Getting Started | Mastering Commercial Cleaning Robot 1",
   "cover": "assets/img/gen/cover/doc_01.svg",
   "author": "打印狂魔05",
   "authorEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 6,
   "hours": "2h",
   "students": 200,
   "rating": 4.0,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9001",
   "cat": "机械设计",
   "catEn": "Mechanical",
   "title": "机械设计｜双臂操作机器人 从入门到实战 2",
   "titleEn": "Mechanical | Mastering Dual-Arm Manipulator 2",
   "cover": "assets/img/gen/cover/doc_02.svg",
   "author": "嵌入式老王06",
   "authorEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 7,
   "hours": "3h",
   "students": 613,
   "rating": 4.1,
   "free": false,
   "price": "¥98",
   "priceEn": "¥98",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9002",
   "cat": "嵌入式",
   "catEn": "Embedded",
   "title": "嵌入式｜定制教育机器人 从入门到实战 3",
   "titleEn": "Embedded | Mastering Custom Education Robot 3",
   "cover": "assets/img/gen/cover/doc_03.svg",
   "author": "创客空间07",
   "authorEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 8,
   "hours": "4h",
   "students": 1026,
   "rating": 4.2,
   "free": false,
   "price": "¥147",
   "priceEn": "¥147",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9003",
   "cat": "运动控制",
   "catEn": "Motion Control",
   "title": "运动控制｜边缘计算模块 从入门到实战 4",
   "titleEn": "Motion Control | Mastering Edge Compute Module 4",
   "cover": "assets/img/gen/cover/doc_04.svg",
   "author": "机电老张08",
   "authorEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 9,
   "hours": "5h",
   "students": 1439,
   "rating": 4.3,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9004",
   "cat": "AI 算法",
   "catEn": "AI Algorithms",
   "title": "AI 算法｜总线舵机 从入门到实战 5",
   "titleEn": "AI Algorithms | Mastering Bus Servo 5",
   "cover": "assets/img/gen/cover/doc_05.svg",
   "author": "开源阿凯09",
   "authorEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 10,
   "hours": "6h",
   "students": 1852,
   "rating": 4.4,
   "free": false,
   "price": "¥245",
   "priceEn": "¥245",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9005",
   "cat": "项目实战",
   "catEn": "Projects",
   "title": "项目实战｜减震垫组 从入门到实战 6",
   "titleEn": "Projects | Mastering Damper Pad Set 6",
   "cover": "assets/img/gen/cover/doc_06.svg",
   "author": "蓝鲸官方10",
   "authorEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 11,
   "hours": "7h",
   "students": 2265,
   "rating": 4.5,
   "free": false,
   "price": "¥294",
   "priceEn": "¥294",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9006",
   "cat": "入门指南",
   "catEn": "Getting Started",
   "title": "入门指南｜万向轮组 从入门到实战 7",
   "titleEn": "Getting Started | Mastering Caster Wheel Set 7",
   "cover": "assets/img/gen/cover/doc_07.svg",
   "author": "机器人小学生11",
   "authorEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 12,
   "hours": "8h",
   "students": 2678,
   "rating": 4.6,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9007",
   "cat": "机械设计",
   "catEn": "Mechanical",
   "title": "机械设计｜拼接积木结构件 从入门到实战 8",
   "titleEn": "Mechanical | Mastering Snap Brick Structure 8",
   "cover": "assets/img/gen/cover/doc_08.svg",
   "author": "力控研究所12",
   "authorEn": "ForceLab12",
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 13,
   "hours": "9h",
   "students": 3091,
   "rating": 4.7,
   "free": false,
   "price": "¥392",
   "priceEn": "¥392",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9008",
   "cat": "嵌入式",
   "catEn": "Embedded",
   "title": "嵌入式｜防水接线盒 从入门到实战 9",
   "titleEn": "Embedded | Mastering Waterproof Junction Box 9",
   "cover": "assets/img/gen/cover/doc_09.svg",
   "author": "打印狂魔13",
   "authorEn": "PrintFanatic13",
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 14,
   "hours": "10h",
   "students": 3504,
   "rating": 4.8,
   "free": false,
   "price": "¥441",
   "priceEn": "¥441",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9009",
   "cat": "运动控制",
   "catEn": "Motion Control",
   "title": "运动控制｜迷你格斗机器人 从入门到实战 10",
   "titleEn": "Motion Control | Mastering Mini Battle Robot 10",
   "cover": "assets/img/gen/cover/doc_10.svg",
   "author": "嵌入式老王14",
   "authorEn": "EmbedWang14",
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 15,
   "hours": "11h",
   "students": 3917,
   "rating": 4.9,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9010",
   "cat": "AI 算法",
   "catEn": "AI Algorithms",
   "title": "AI 算法｜商用清洁机器人 从入门到实战 11",
   "titleEn": "AI Algorithms | Mastering Commercial Cleaning Robot 11",
   "cover": "assets/img/gen/cover/doc_11.svg",
   "author": "创客空间15",
   "authorEn": "MakerSpace15",
   "avatar": "assets/img/gen/avatar/user_16.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 16,
   "hours": "12h",
   "students": 4330,
   "rating": 4.0,
   "free": false,
   "price": "¥98",
   "priceEn": "¥98",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9011",
   "cat": "项目实战",
   "catEn": "Projects",
   "title": "项目实战｜双臂操作机器人 从入门到实战 12",
   "titleEn": "Projects | Mastering Dual-Arm Manipulator 12",
   "cover": "assets/img/gen/cover/doc_12.svg",
   "author": "机电老张16",
   "authorEn": "MechZhang16",
   "avatar": "assets/img/gen/avatar/user_17.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 17,
   "hours": "13h",
   "students": 4743,
   "rating": 4.1,
   "free": false,
   "price": "¥147",
   "priceEn": "¥147",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9012",
   "cat": "入门指南",
   "catEn": "Getting Started",
   "title": "入门指南｜定制教育机器人 从入门到实战 13",
   "titleEn": "Getting Started | Mastering Custom Education Robot 13",
   "cover": "assets/img/gen/cover/doc_01.svg",
   "author": "开源阿凯17",
   "authorEn": "OpenKai17",
   "avatar": "assets/img/gen/avatar/user_18.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 18,
   "hours": "2h",
   "students": 5156,
   "rating": 4.2,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9013",
   "cat": "机械设计",
   "catEn": "Mechanical",
   "title": "机械设计｜边缘计算模块 从入门到实战 14",
   "titleEn": "Mechanical | Mastering Edge Compute Module 14",
   "cover": "assets/img/gen/cover/doc_02.svg",
   "author": "蓝鲸官方18",
   "authorEn": "BlueWhale18",
   "avatar": "assets/img/gen/avatar/user_19.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 19,
   "hours": "3h",
   "students": 5569,
   "rating": 4.3,
   "free": false,
   "price": "¥245",
   "priceEn": "¥245",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9014",
   "cat": "嵌入式",
   "catEn": "Embedded",
   "title": "嵌入式｜总线舵机 从入门到实战 15",
   "titleEn": "Embedded | Mastering Bus Servo 15",
   "cover": "assets/img/gen/cover/doc_03.svg",
   "author": "机器人小学生19",
   "authorEn": "RoboKid19",
   "avatar": "assets/img/gen/avatar/user_20.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 20,
   "hours": "4h",
   "students": 5982,
   "rating": 4.4,
   "free": false,
   "price": "¥294",
   "priceEn": "¥294",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9015",
   "cat": "运动控制",
   "catEn": "Motion Control",
   "title": "运动控制｜减震垫组 从入门到实战 16",
   "titleEn": "Motion Control | Mastering Damper Pad Set 16",
   "cover": "assets/img/gen/cover/doc_04.svg",
   "author": "力控研究所20",
   "authorEn": "ForceLab20",
   "avatar": "assets/img/gen/avatar/user_21.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 21,
   "hours": "5h",
   "students": 6395,
   "rating": 4.5,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9016",
   "cat": "AI 算法",
   "catEn": "AI Algorithms",
   "title": "AI 算法｜万向轮组 从入门到实战 17",
   "titleEn": "AI Algorithms | Mastering Caster Wheel Set 17",
   "cover": "assets/img/gen/cover/doc_05.svg",
   "author": "打印狂魔21",
   "authorEn": "PrintFanatic21",
   "avatar": "assets/img/gen/avatar/user_22.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 22,
   "hours": "6h",
   "students": 6808,
   "rating": 4.6,
   "free": false,
   "price": "¥392",
   "priceEn": "¥392",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9017",
   "cat": "项目实战",
   "catEn": "Projects",
   "title": "项目实战｜拼接积木结构件 从入门到实战 18",
   "titleEn": "Projects | Mastering Snap Brick Structure 18",
   "cover": "assets/img/gen/cover/doc_06.svg",
   "author": "嵌入式老王22",
   "authorEn": "EmbedWang22",
   "avatar": "assets/img/gen/avatar/user_23.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 23,
   "hours": "7h",
   "students": 7221,
   "rating": 4.7,
   "free": false,
   "price": "¥441",
   "priceEn": "¥441",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9018",
   "cat": "入门指南",
   "catEn": "Getting Started",
   "title": "入门指南｜防水接线盒 从入门到实战 19",
   "titleEn": "Getting Started | Mastering Waterproof Junction Box 19",
   "cover": "assets/img/gen/cover/doc_07.svg",
   "author": "创客空间23",
   "authorEn": "MakerSpace23",
   "avatar": "assets/img/gen/avatar/user_24.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 24,
   "hours": "8h",
   "students": 7634,
   "rating": 4.8,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9019",
   "cat": "机械设计",
   "catEn": "Mechanical",
   "title": "机械设计｜迷你格斗机器人 从入门到实战 20",
   "titleEn": "Mechanical | Mastering Mini Battle Robot 20",
   "cover": "assets/img/gen/cover/doc_08.svg",
   "author": "机电老张24",
   "authorEn": "MechZhang24",
   "avatar": "assets/img/gen/avatar/user_25.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 25,
   "hours": "9h",
   "students": 8047,
   "rating": 4.9,
   "free": false,
   "price": "¥98",
   "priceEn": "¥98",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9020",
   "cat": "嵌入式",
   "catEn": "Embedded",
   "title": "嵌入式｜商用清洁机器人 从入门到实战 21",
   "titleEn": "Embedded | Mastering Commercial Cleaning Robot 21",
   "cover": "assets/img/gen/cover/doc_09.svg",
   "author": "开源阿凯25",
   "authorEn": "OpenKai25",
   "avatar": "assets/img/gen/avatar/user_26.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 6,
   "hours": "10h",
   "students": 8460,
   "rating": 4.0,
   "free": false,
   "price": "¥147",
   "priceEn": "¥147",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9021",
   "cat": "运动控制",
   "catEn": "Motion Control",
   "title": "运动控制｜双臂操作机器人 从入门到实战 22",
   "titleEn": "Motion Control | Mastering Dual-Arm Manipulator 22",
   "cover": "assets/img/gen/cover/doc_10.svg",
   "author": "蓝鲸官方26",
   "authorEn": "BlueWhale26",
   "avatar": "assets/img/gen/avatar/user_27.svg",
   "level": "入门",
   "levelEn": "Beginner",
   "lessons": 7,
   "hours": "11h",
   "students": 8873,
   "rating": 4.1,
   "free": true,
   "price": "免费",
   "priceEn": "Free",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9022",
   "cat": "AI 算法",
   "catEn": "AI Algorithms",
   "title": "AI 算法｜定制教育机器人 从入门到实战 23",
   "titleEn": "AI Algorithms | Mastering Custom Education Robot 23",
   "cover": "assets/img/gen/cover/doc_11.svg",
   "author": "机器人小学生27",
   "authorEn": "RoboKid27",
   "avatar": "assets/img/gen/avatar/user_28.svg",
   "level": "进阶",
   "levelEn": "Intermediate",
   "lessons": 8,
   "hours": "12h",
   "students": 9286,
   "rating": 4.2,
   "free": false,
   "price": "¥245",
   "priceEn": "¥245",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  },
  {
   "id": "L9023",
   "cat": "项目实战",
   "catEn": "Projects",
   "title": "项目实战｜边缘计算模块 从入门到实战 24",
   "titleEn": "Projects | Mastering Edge Compute Module 24",
   "cover": "assets/img/gen/cover/doc_12.svg",
   "author": "力控研究所28",
   "authorEn": "ForceLab28",
   "avatar": "assets/img/gen/avatar/user_29.svg",
   "level": "高级",
   "levelEn": "Advanced",
   "lessons": 9,
   "hours": "13h",
   "students": 9699,
   "rating": 4.3,
   "free": false,
   "price": "¥294",
   "priceEn": "¥294",
   "desc": "配套示例代码、3D 图纸与演示视频，学完即可独立完成一个可运行的小机器人。",
   "descEn": "Ships with sample code, 3D files and demo video; build a working mini robot by the end."
  }
 ],
 "tickets": [
  {
   "id": "TK100",
   "title": "资源缺失：需要 商用清洁机器人 的定制方案",
   "titleEn": "Missing Resource: need custom plan for Commercial Cleaning Robot",
   "type": "资源缺失",
   "typeEn": "Missing Resource",
   "status": "待受理",
   "statusEn": "Pending",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-01-01 00:00",
   "owner": "机电老张00",
   "ownerEn": "MechZhang00",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-01-01 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-01-01 10:20",
     "done": false
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-01-01 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-01-01 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK101",
   "title": "定制需求：需要 双臂操作机器人 的定制方案",
   "titleEn": "Custom Request: need custom plan for Dual-Arm Manipulator",
   "type": "定制需求",
   "typeEn": "Custom Request",
   "status": "处理中",
   "statusEn": "Processing",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-02-02 01:11",
   "owner": "开源阿凯01",
   "ownerEn": "OpenKai01",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-02-02 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-02-02 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-02-02 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-02-02 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK102",
   "title": "平台故障：需要 定制教育机器人 的定制方案",
   "titleEn": "Platform Bug: need custom plan for Custom Education Robot",
   "type": "平台故障",
   "typeEn": "Platform Bug",
   "status": "待确认",
   "statusEn": "Awaiting confirm",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-03-03 02:22",
   "owner": "蓝鲸官方02",
   "ownerEn": "BlueWhale02",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-03-03 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-03-03 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-03-03 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-03-03 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK103",
   "title": "合作咨询：需要 边缘计算模块 的定制方案",
   "titleEn": "Partnership: need custom plan for Edge Compute Module",
   "type": "合作咨询",
   "typeEn": "Partnership",
   "status": "已关闭",
   "statusEn": "Closed",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-04-04 03:33",
   "owner": "机器人小学生03",
   "ownerEn": "RoboKid03",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-04-04 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-04-04 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-04-04 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-04-04 15:30",
     "done": true
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK104",
   "title": "投诉建议：需要 总线舵机 的定制方案",
   "titleEn": "Complaint: need custom plan for Bus Servo",
   "type": "投诉建议",
   "typeEn": "Complaint",
   "status": "待受理",
   "statusEn": "Pending",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-05-05 04:44",
   "owner": "力控研究所04",
   "ownerEn": "ForceLab04",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-05-05 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-05-05 10:20",
     "done": false
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-05-05 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-05-05 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK105",
   "title": "资源缺失：需要 减震垫组 的定制方案",
   "titleEn": "Missing Resource: need custom plan for Damper Pad Set",
   "type": "资源缺失",
   "typeEn": "Missing Resource",
   "status": "处理中",
   "statusEn": "Processing",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-06-06 05:55",
   "owner": "打印狂魔05",
   "ownerEn": "PrintFanatic05",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-06-06 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-06-06 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-06-06 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-06-06 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK106",
   "title": "定制需求：需要 万向轮组 的定制方案",
   "titleEn": "Custom Request: need custom plan for Caster Wheel Set",
   "type": "定制需求",
   "typeEn": "Custom Request",
   "status": "待确认",
   "statusEn": "Awaiting confirm",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-07-07 06:06",
   "owner": "嵌入式老王06",
   "ownerEn": "EmbedWang06",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-07-07 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-07-07 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-07-07 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-07-07 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK107",
   "title": "平台故障：需要 拼接积木结构件 的定制方案",
   "titleEn": "Platform Bug: need custom plan for Snap Brick Structure",
   "type": "平台故障",
   "typeEn": "Platform Bug",
   "status": "已关闭",
   "statusEn": "Closed",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-08-08 07:17",
   "owner": "创客空间07",
   "ownerEn": "MakerSpace07",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-08-08 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-08-08 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-08-08 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-08-08 15:30",
     "done": true
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK108",
   "title": "合作咨询：需要 防水接线盒 的定制方案",
   "titleEn": "Partnership: need custom plan for Waterproof Junction Box",
   "type": "合作咨询",
   "typeEn": "Partnership",
   "status": "待受理",
   "statusEn": "Pending",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-09-09 08:28",
   "owner": "机电老张08",
   "ownerEn": "MechZhang08",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-09-09 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-09-09 10:20",
     "done": false
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-09-09 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-09-09 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK109",
   "title": "投诉建议：需要 迷你格斗机器人 的定制方案",
   "titleEn": "Complaint: need custom plan for Mini Battle Robot",
   "type": "投诉建议",
   "typeEn": "Complaint",
   "status": "处理中",
   "statusEn": "Processing",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-10-10 09:39",
   "owner": "开源阿凯09",
   "ownerEn": "OpenKai09",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-10-10 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-10-10 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-10-10 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-10-10 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK110",
   "title": "资源缺失：需要 商用清洁机器人 的定制方案",
   "titleEn": "Missing Resource: need custom plan for Commercial Cleaning Robot",
   "type": "资源缺失",
   "typeEn": "Missing Resource",
   "status": "待确认",
   "statusEn": "Awaiting confirm",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-11-11 10:50",
   "owner": "蓝鲸官方10",
   "ownerEn": "BlueWhale10",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-11-11 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-11-11 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-11-11 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-11-11 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK111",
   "title": "定制需求：需要 双臂操作机器人 的定制方案",
   "titleEn": "Custom Request: need custom plan for Dual-Arm Manipulator",
   "type": "定制需求",
   "typeEn": "Custom Request",
   "status": "已关闭",
   "statusEn": "Closed",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-12-12 11:01",
   "owner": "机器人小学生11",
   "ownerEn": "RoboKid11",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-12-12 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-12-12 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-12-12 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-12-12 15:30",
     "done": true
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK112",
   "title": "平台故障：需要 定制教育机器人 的定制方案",
   "titleEn": "Platform Bug: need custom plan for Custom Education Robot",
   "type": "平台故障",
   "typeEn": "Platform Bug",
   "status": "待受理",
   "statusEn": "Pending",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-01-13 12:12",
   "owner": "力控研究所12",
   "ownerEn": "ForceLab12",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-01-13 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-01-13 10:20",
     "done": false
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-01-13 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-01-13 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK113",
   "title": "合作咨询：需要 边缘计算模块 的定制方案",
   "titleEn": "Partnership: need custom plan for Edge Compute Module",
   "type": "合作咨询",
   "typeEn": "Partnership",
   "status": "处理中",
   "statusEn": "Processing",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-02-14 13:23",
   "owner": "打印狂魔13",
   "ownerEn": "PrintFanatic13",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-02-14 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-02-14 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-02-14 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-02-14 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK114",
   "title": "投诉建议：需要 总线舵机 的定制方案",
   "titleEn": "Complaint: need custom plan for Bus Servo",
   "type": "投诉建议",
   "typeEn": "Complaint",
   "status": "待确认",
   "statusEn": "Awaiting confirm",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-03-15 14:34",
   "owner": "嵌入式老王14",
   "ownerEn": "EmbedWang14",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-03-15 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-03-15 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-03-15 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-03-15 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK115",
   "title": "资源缺失：需要 减震垫组 的定制方案",
   "titleEn": "Missing Resource: need custom plan for Damper Pad Set",
   "type": "资源缺失",
   "typeEn": "Missing Resource",
   "status": "已关闭",
   "statusEn": "Closed",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-04-16 15:45",
   "owner": "创客空间15",
   "ownerEn": "MakerSpace15",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-04-16 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-04-16 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-04-16 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-04-16 15:30",
     "done": true
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK116",
   "title": "定制需求：需要 万向轮组 的定制方案",
   "titleEn": "Custom Request: need custom plan for Caster Wheel Set",
   "type": "定制需求",
   "typeEn": "Custom Request",
   "status": "待受理",
   "statusEn": "Pending",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-05-17 16:56",
   "owner": "机电老张16",
   "ownerEn": "MechZhang16",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-05-17 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-05-17 10:20",
     "done": false
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-05-17 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-05-17 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK117",
   "title": "平台故障：需要 拼接积木结构件 的定制方案",
   "titleEn": "Platform Bug: need custom plan for Snap Brick Structure",
   "type": "平台故障",
   "typeEn": "Platform Bug",
   "status": "处理中",
   "statusEn": "Processing",
   "level": "严重",
   "levelEn": "Critical",
   "time": "2026-06-18 17:07",
   "owner": "开源阿凯17",
   "ownerEn": "OpenKai17",
   "handler": "系统管理员",
   "handlerEn": "Admin",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-06-18 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-06-18 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-06-18 11:05",
     "done": false
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-06-18 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK118",
   "title": "合作咨询：需要 防水接线盒 的定制方案",
   "titleEn": "Partnership: need custom plan for Waterproof Junction Box",
   "type": "合作咨询",
   "typeEn": "Partnership",
   "status": "待确认",
   "statusEn": "Awaiting confirm",
   "level": "普通",
   "levelEn": "Normal",
   "time": "2026-07-19 18:18",
   "owner": "蓝鲸官方18",
   "ownerEn": "BlueWhale18",
   "handler": "平台客服",
   "handlerEn": "Support",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-07-19 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-07-19 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-07-19 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-07-19 15:30",
     "done": false
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  },
  {
   "id": "TK119",
   "title": "投诉建议：需要 迷你格斗机器人 的定制方案",
   "titleEn": "Complaint: need custom plan for Mini Battle Robot",
   "type": "投诉建议",
   "typeEn": "Complaint",
   "status": "已关闭",
   "statusEn": "Closed",
   "level": "紧急",
   "levelEn": "Urgent",
   "time": "2026-08-20 19:29",
   "owner": "机器人小学生19",
   "ownerEn": "RoboKid19",
   "handler": "模块工程师",
   "handlerEn": "Module Engineer",
   "flow": [
    {
     "step": "提交工单",
     "stepEn": "Submit",
     "time": "2026-08-20 09:00",
     "done": true
    },
    {
     "step": "客服初审",
     "stepEn": "First review",
     "time": "2026-08-20 10:20",
     "done": true
    },
    {
     "step": "技术分派",
     "stepEn": "Tech dispatch",
     "time": "2026-08-20 11:05",
     "done": true
    },
    {
     "step": "处理反馈",
     "stepEn": "Resolution",
     "time": "2026-08-20 15:30",
     "done": true
    },
    {
     "step": "用户确认关闭",
     "stepEn": "User confirm",
     "time": "—",
     "done": false
    }
   ]
  }
 ],
 "chats": [
  {
   "id": "C200",
   "name": "机电老张00",
   "nameEn": "MechZhang00",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "lastTime": "00:00",
   "unread": 0,
   "last": "图纸我发你了，看一下尺寸对不对。",
   "lastEn": "Sent you the drawing, check the dimensions."
  },
  {
   "id": "C201",
   "name": "开源阿凯01",
   "nameEn": "OpenKai01",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "lastTime": "01:13",
   "unread": 1,
   "last": "这个模块库存还有 30 套。",
   "lastEn": "30 sets still in stock."
  },
  {
   "id": "C202",
   "name": "蓝鲸官方02",
   "nameEn": "BlueWhale02",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "lastTime": "02:26",
   "unread": 2,
   "last": "报价已更新，请查收。",
   "lastEn": "Quote updated, please check."
  },
  {
   "id": "C203",
   "name": "机器人小学生03",
   "nameEn": "RoboKid03",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "lastTime": "03:39",
   "unread": 3,
   "last": "联调时间改到周五下午。",
   "lastEn": "Debug session moved to Friday afternoon."
  },
  {
   "id": "C204",
   "name": "力控研究所04",
   "nameEn": "ForceLab04",
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "lastTime": "04:52",
   "unread": 0,
   "last": "集成方案初稿已完成。",
   "lastEn": "Integration draft is done."
  },
  {
   "id": "C205",
   "name": "打印狂魔05",
   "nameEn": "PrintFanatic05",
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "lastTime": "05:05",
   "unread": 1,
   "last": "图纸我发你了，看一下尺寸对不对。",
   "lastEn": "Sent you the drawing, check the dimensions."
  },
  {
   "id": "C206",
   "name": "嵌入式老王06",
   "nameEn": "EmbedWang06",
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "lastTime": "06:18",
   "unread": 2,
   "last": "这个模块库存还有 30 套。",
   "lastEn": "30 sets still in stock."
  },
  {
   "id": "C207",
   "name": "创客空间07",
   "nameEn": "MakerSpace07",
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "lastTime": "07:31",
   "unread": 3,
   "last": "报价已更新，请查收。",
   "lastEn": "Quote updated, please check."
  },
  {
   "id": "C208",
   "name": "机电老张08",
   "nameEn": "MechZhang08",
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "lastTime": "08:44",
   "unread": 0,
   "last": "联调时间改到周五下午。",
   "lastEn": "Debug session moved to Friday afternoon."
  },
  {
   "id": "C209",
   "name": "开源阿凯09",
   "nameEn": "OpenKai09",
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "lastTime": "09:57",
   "unread": 1,
   "last": "集成方案初稿已完成。",
   "lastEn": "Integration draft is done."
  },
  {
   "id": "C210",
   "name": "蓝鲸官方10",
   "nameEn": "BlueWhale10",
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "lastTime": "10:10",
   "unread": 2,
   "last": "图纸我发你了，看一下尺寸对不对。",
   "lastEn": "Sent you the drawing, check the dimensions."
  },
  {
   "id": "C211",
   "name": "机器人小学生11",
   "nameEn": "RoboKid11",
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "lastTime": "11:23",
   "unread": 3,
   "last": "这个模块库存还有 30 套。",
   "lastEn": "30 sets still in stock."
  }
 ],
 "messages": [
  {
   "id": "M300",
   "me": false,
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "time": "09:00",
   "text": "你好，想咨询一下这款模块的供货周期。",
   "textEn": "Hi, what is the lead time for this module?",
   "type": "text"
  },
  {
   "id": "M301",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "time": "10:17",
   "text": "你好！现货 3 天内发出，定制 2 周。",
   "textEn": "Hi! In-stock ships in 3 days, custom 2 weeks.",
   "type": "text"
  },
  {
   "id": "M302",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "time": "11:34",
   "text": "能提供 STEP 图纸吗？",
   "textEn": "Can you provide STEP files?",
   "type": "text"
  },
  {
   "id": "M303",
   "me": false,
   "avatar": "assets/img/gen/avatar/user_05.svg",
   "time": "12:51",
   "text": "可以，资料中心已上传，含 3D/硬件/软件/视频四类。",
   "textEn": "Yes, uploaded to resource center: 3D/HW/SW/Video.",
   "type": "file"
  },
  {
   "id": "M304",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_06.svg",
   "time": "13:08",
   "text": "价格还有空间吗？",
   "textEn": "Any room on price?",
   "type": "text"
  },
  {
   "id": "M305",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_07.svg",
   "time": "14:25",
   "text": "50 套以上有阶梯价，已发报价单。",
   "textEn": "Tiered price above 50 sets, quote sent.",
   "type": "text"
  },
  {
   "id": "M306",
   "me": false,
   "avatar": "assets/img/gen/avatar/user_08.svg",
   "time": "15:42",
   "text": "好的，我先下一个样品单。",
   "textEn": "OK, I will place a sample order first.",
   "type": "text"
  },
  {
   "id": "M307",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_09.svg",
   "time": "16:59",
   "text": "已生成订单，请在资金页完成支付。",
   "textEn": "Order created, please pay on the fund page.",
   "type": "order"
  },
  {
   "id": "M308",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_10.svg",
   "time": "17:16",
   "text": "支付完成，麻烦安排发货。",
   "textEn": "Payment done, please arrange shipping.",
   "type": "text"
  },
  {
   "id": "M309",
   "me": false,
   "avatar": "assets/img/gen/avatar/user_11.svg",
   "time": "18:33",
   "text": "收到，物流单号稍后同步。",
   "textEn": "Received, tracking number follows.",
   "type": "text"
  },
  {
   "id": "M310",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_12.svg",
   "time": "19:50",
   "text": "另外想加一个定制外壳。",
   "textEn": "I also need a custom enclosure.",
   "type": "text"
  },
  {
   "id": "M311",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_13.svg",
   "time": "20:07",
   "text": "可在 AI 智造页提交需求，系统会自动拆分。",
   "textEn": "Submit on AI Manufacturing page, it splits automatically.",
   "type": "text"
  },
  {
   "id": "M312",
   "me": false,
   "avatar": "assets/img/gen/avatar/user_14.svg",
   "time": "21:24",
   "text": "明白了，谢谢！",
   "textEn": "Got it, thanks!",
   "type": "text"
  },
  {
   "id": "M313",
   "me": true,
   "avatar": "assets/img/gen/avatar/user_15.svg",
   "time": "22:41",
   "text": "不客气，随时联系。",
   "textEn": "Anytime.",
   "type": "text"
  }
 ],
 "funds": [
  {
   "id": "FN400",
   "title": "项目 商用清洁机器人模块化改造 # 阶段款",
   "titleEn": "Milestone payment for project #0",
   "amount": "3,200.00",
   "in": false,
   "type": "托管",
   "typeEn": "Escrow",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-01-01 00:00",
   "party": "蓝鲸官方02",
   "partyEn": "BlueWhale02"
  },
  {
   "id": "FN401",
   "title": "模块采购订单 #1001",
   "titleEn": "Module purchase order #1001",
   "amount": "6,537.00",
   "in": true,
   "type": "收入",
   "typeEn": "Income",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-02-02 01:07",
   "party": "机器人小学生03",
   "partyEn": "RoboKid03"
  },
  {
   "id": "FN402",
   "title": "平台服务费",
   "titleEn": "Platform service fee",
   "amount": "9,874.00",
   "in": true,
   "type": "支出",
   "typeEn": "Expense",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-03-03 02:14",
   "party": "力控研究所04",
   "partyEn": "ForceLab04"
  },
  {
   "id": "FN403",
   "title": "定制开发定金",
   "titleEn": "Custom dev deposit",
   "amount": "13,211.00",
   "in": false,
   "type": "提现",
   "typeEn": "Withdraw",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-04-04 03:21",
   "party": "打印狂魔05",
   "partyEn": "PrintFanatic05"
  },
  {
   "id": "FN404",
   "title": "测试服务费用",
   "titleEn": "Testing service fee",
   "amount": "16,548.00",
   "in": true,
   "type": "退款",
   "typeEn": "Refund",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-05-05 04:28",
   "party": "嵌入式老王06",
   "partyEn": "EmbedWang06"
  },
  {
   "id": "FN405",
   "title": "项目 教育玩具机器人套件开发 #6 阶段款",
   "titleEn": "Milestone payment for project #5",
   "amount": "19,885.00",
   "in": true,
   "type": "托管",
   "typeEn": "Escrow",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-06-06 05:35",
   "party": "创客空间07",
   "partyEn": "MakerSpace07"
  },
  {
   "id": "FN406",
   "title": "模块采购订单 #1006",
   "titleEn": "Module purchase order #1006",
   "amount": "23,222.00",
   "in": false,
   "type": "收入",
   "typeEn": "Income",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-07-07 06:42",
   "party": "机电老张08",
   "partyEn": "MechZhang08"
  },
  {
   "id": "FN407",
   "title": "平台服务费",
   "titleEn": "Platform service fee",
   "amount": "26,559.00",
   "in": true,
   "type": "支出",
   "typeEn": "Expense",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-08-08 07:49",
   "party": "开源阿凯09",
   "partyEn": "OpenKai09"
  },
  {
   "id": "FN408",
   "title": "定制开发定金",
   "titleEn": "Custom dev deposit",
   "amount": "29,896.00",
   "in": true,
   "type": "提现",
   "typeEn": "Withdraw",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-09-09 08:56",
   "party": "蓝鲸官方10",
   "partyEn": "BlueWhale10"
  },
  {
   "id": "FN409",
   "title": "测试服务费用",
   "titleEn": "Testing service fee",
   "amount": "4,433.00",
   "in": false,
   "type": "退款",
   "typeEn": "Refund",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-10-10 09:03",
   "party": "机器人小学生11",
   "partyEn": "RoboKid11"
  },
  {
   "id": "FN410",
   "title": "项目 具身机器人双臂抓取平台 #1 阶段款",
   "titleEn": "Milestone payment for project #10",
   "amount": "7,770.00",
   "in": true,
   "type": "托管",
   "typeEn": "Escrow",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-11-11 10:10",
   "party": "力控研究所12",
   "partyEn": "ForceLab12"
  },
  {
   "id": "FN411",
   "title": "模块采购订单 #1011",
   "titleEn": "Module purchase order #1011",
   "amount": "11,107.00",
   "in": true,
   "type": "收入",
   "typeEn": "Income",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-12-12 11:17",
   "party": "打印狂魔13",
   "partyEn": "PrintFanatic13"
  },
  {
   "id": "FN412",
   "title": "平台服务费",
   "titleEn": "Platform service fee",
   "amount": "14,444.00",
   "in": false,
   "type": "支出",
   "typeEn": "Expense",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-01-13 12:24",
   "party": "嵌入式老王14",
   "partyEn": "EmbedWang14"
  },
  {
   "id": "FN413",
   "title": "定制开发定金",
   "titleEn": "Custom dev deposit",
   "amount": "17,781.00",
   "in": true,
   "type": "提现",
   "typeEn": "Withdraw",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-02-14 13:31",
   "party": "创客空间15",
   "partyEn": "MakerSpace15"
  },
  {
   "id": "FN414",
   "title": "测试服务费用",
   "titleEn": "Testing service fee",
   "amount": "21,118.00",
   "in": true,
   "type": "退款",
   "typeEn": "Refund",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-03-15 14:38",
   "party": "机电老张16",
   "partyEn": "MechZhang16"
  },
  {
   "id": "FN415",
   "title": "项目 商用清洁机器人模块化改造 # 阶段款",
   "titleEn": "Milestone payment for project #15",
   "amount": "24,455.00",
   "in": false,
   "type": "托管",
   "typeEn": "Escrow",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-04-16 15:45",
   "party": "开源阿凯17",
   "partyEn": "OpenKai17"
  },
  {
   "id": "FN416",
   "title": "模块采购订单 #1016",
   "titleEn": "Module purchase order #1016",
   "amount": "27,792.00",
   "in": true,
   "type": "收入",
   "typeEn": "Income",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-05-17 16:52",
   "party": "蓝鲸官方18",
   "partyEn": "BlueWhale18"
  },
  {
   "id": "FN417",
   "title": "平台服务费",
   "titleEn": "Platform service fee",
   "amount": "31,129.00",
   "in": true,
   "type": "支出",
   "typeEn": "Expense",
   "status": "待确认",
   "statusEn": "Pending",
   "time": "2026-06-18 17:59",
   "party": "机器人小学生19",
   "partyEn": "RoboKid19"
  },
  {
   "id": "FN418",
   "title": "定制开发定金",
   "titleEn": "Custom dev deposit",
   "amount": "5,666.00",
   "in": false,
   "type": "提现",
   "typeEn": "Withdraw",
   "status": "已完成",
   "statusEn": "Done",
   "time": "2026-07-19 18:06",
   "party": "力控研究所20",
   "partyEn": "ForceLab20"
  },
  {
   "id": "FN419",
   "title": "测试服务费用",
   "titleEn": "Testing service fee",
   "amount": "9,003.00",
   "in": true,
   "type": "退款",
   "typeEn": "Refund",
   "status": "处理中",
   "statusEn": "Processing",
   "time": "2026-08-20 19:13",
   "party": "打印狂魔21",
   "partyEn": "PrintFanatic21"
  }
 ],
 "notices": [
  {
   "id": "NT500",
   "icon": "assets/img/gen/icon/bell_b.svg",
   "title": "你的宣发已通过审核",
   "titleEn": "Your release is approved",
   "time": "1 小时前",
   "timeEn": "1h ago",
   "unread": true
  },
  {
   "id": "NT501",
   "icon": "assets/img/gen/icon/check_b.svg",
   "title": "项目节点已更新",
   "titleEn": "Project node updated",
   "time": "2 小时前",
   "timeEn": "2h ago",
   "unread": false
  },
  {
   "id": "NT502",
   "icon": "assets/img/gen/icon/warn_b.svg",
   "title": "工单有新回复",
   "titleEn": "New reply on ticket",
   "time": "3 小时前",
   "timeEn": "3h ago",
   "unread": false
  },
  {
   "id": "NT503",
   "icon": "assets/img/gen/icon/ticket_b.svg",
   "title": "收到新的报价单",
   "titleEn": "New quote received",
   "time": "4 小时前",
   "timeEn": "4h ago",
   "unread": true
  },
  {
   "id": "NT504",
   "icon": "assets/img/gen/icon/bell_b.svg",
   "title": "你的帖子被加精",
   "titleEn": "Your post is featured",
   "time": "5 小时前",
   "timeEn": "5h ago",
   "unread": false
  },
  {
   "id": "NT505",
   "icon": "assets/img/gen/icon/check_b.svg",
   "title": "模块资料已更新",
   "titleEn": "Module docs updated",
   "time": "6 小时前",
   "timeEn": "6h ago",
   "unread": false
  },
  {
   "id": "NT506",
   "icon": "assets/img/gen/icon/warn_b.svg",
   "title": "集成方案待确认",
   "titleEn": "Integration plan needs confirm",
   "time": "7 小时前",
   "timeEn": "7h ago",
   "unread": true
  },
  {
   "id": "NT507",
   "icon": "assets/img/gen/icon/ticket_b.svg",
   "title": "资金托管已到账",
   "titleEn": "Escrow payment received",
   "time": "8 小时前",
   "timeEn": "8h ago",
   "unread": false
  },
  {
   "id": "NT508",
   "icon": "assets/img/gen/icon/bell_b.svg",
   "title": "你的宣发已通过审核",
   "titleEn": "Your release is approved",
   "time": "9 小时前",
   "timeEn": "9h ago",
   "unread": false
  },
  {
   "id": "NT509",
   "icon": "assets/img/gen/icon/check_b.svg",
   "title": "项目节点已更新",
   "titleEn": "Project node updated",
   "time": "10 小时前",
   "timeEn": "10h ago",
   "unread": true
  },
  {
   "id": "NT510",
   "icon": "assets/img/gen/icon/warn_b.svg",
   "title": "工单有新回复",
   "titleEn": "New reply on ticket",
   "time": "11 小时前",
   "timeEn": "11h ago",
   "unread": false
  },
  {
   "id": "NT511",
   "icon": "assets/img/gen/icon/ticket_b.svg",
   "title": "收到新的报价单",
   "titleEn": "New quote received",
   "time": "12 小时前",
   "timeEn": "12h ago",
   "unread": false
  },
  {
   "id": "NT512",
   "icon": "assets/img/gen/icon/bell_b.svg",
   "title": "你的帖子被加精",
   "titleEn": "Your post is featured",
   "time": "12 天前",
   "timeEn": "12d ago",
   "unread": true
  },
  {
   "id": "NT513",
   "icon": "assets/img/gen/icon/check_b.svg",
   "title": "模块资料已更新",
   "titleEn": "Module docs updated",
   "time": "13 天前",
   "timeEn": "13d ago",
   "unread": false
  },
  {
   "id": "NT514",
   "icon": "assets/img/gen/icon/warn_b.svg",
   "title": "集成方案待确认",
   "titleEn": "Integration plan needs confirm",
   "time": "14 天前",
   "timeEn": "14d ago",
   "unread": false
  },
  {
   "id": "NT515",
   "icon": "assets/img/gen/icon/ticket_b.svg",
   "title": "资金托管已到账",
   "titleEn": "Escrow payment received",
   "time": "15 天前",
   "timeEn": "15d ago",
   "unread": true
  }
 ],
 "llms": [
  {
   "id": "llm1",
   "name": "通用大模型 A",
   "nameEn": "General LLM A",
   "vendor": "厂商 A",
   "vendorEn": "Vendor A",
   "model": "model-pro",
   "status": "已连接",
   "statusEn": "Connected",
   "key": "sk-****-a91f",
   "cost": "¥0.012 / 1K tokens",
   "tags": [
    "需求拆分",
    "方案生成"
   ],
   "tagsEn": [
    "Split",
    "Planning"
   ]
  },
  {
   "id": "llm2",
   "name": "代码专用模型 B",
   "nameEn": "Code LLM B",
   "vendor": "厂商 B",
   "vendorEn": "Vendor B",
   "model": "code-x",
   "status": "未连接",
   "statusEn": "Disconnected",
   "key": "—",
   "cost": "¥0.008 / 1K tokens",
   "tags": [
    "代码生成",
    "接口文档"
   ],
   "tagsEn": [
    "Code",
    "API docs"
   ]
  },
  {
   "id": "llm3",
   "name": "多模态模型 C",
   "nameEn": "Multimodal LLM C",
   "vendor": "厂商 C",
   "vendorEn": "Vendor C",
   "model": "vision-2",
   "status": "已连接",
   "statusEn": "Connected",
   "key": "sk-****-77c2",
   "cost": "¥0.021 / 1K tokens",
   "tags": [
    "图纸理解",
    "图像识别"
   ],
   "tagsEn": [
    "Drawing",
    "Vision"
   ]
  },
  {
   "id": "llm4",
   "name": "自建私有模型",
   "nameEn": "Self-hosted Model",
   "vendor": "本地/私有化",
   "vendorEn": "Self-hosted",
   "model": "localhost:8000",
   "status": "待配置",
   "statusEn": "Pending",
   "key": "—",
   "cost": "按自建成本",
   "tags": [
    "私有部署",
    "数据不出域"
   ],
   "tagsEn": [
    "Private",
    "On-prem"
   ]
  }
 ],
 "aiChat": [
  {
   "me": true,
   "text": "我想做一台能在酒店里自主配送物品的机器人，预算 15 万左右。",
   "textEn": "I want a robot that delivers items autonomously in a hotel, budget ~150k."
  },
  {
   "me": false,
   "text": "已收到需求，正在拆分为：整机本体 / 导航模块 / 舱体结构 / 调度软件 / 部署实施 五类。",
   "textEn": "Got it. Splitting into: chassis / navigation / cabin / scheduling software / deployment."
  },
  {
   "me": false,
   "card": {
    "type": "split",
    "title": "需求拆分结果",
    "titleEn": "Requirement breakdown",
    "items": [
     {
      "name": "移动底盘本体",
      "nameEn": "Mobile base",
      "match": "平台有 6 个可选",
      "matchEn": "6 options",
      "status": "matched"
     },
     {
      "name": "激光导航模块",
      "nameEn": "LiDAR navigation",
      "match": "平台有 3 个可选",
      "matchEn": "3 options",
      "status": "matched"
     },
     {
      "name": "货舱结构件",
      "nameEn": "Cargo cabin",
      "match": "需定制 / 3D打印",
      "matchEn": "Custom / 3D print",
      "status": "custom"
     },
     {
      "name": "调度软件",
      "nameEn": "Fleet software",
      "match": "平台有 2 个开源方案",
      "matchEn": "2 open-source",
      "status": "matched"
     },
     {
      "name": "电梯物联模块",
      "nameEn": "Elevator IoT",
      "match": "平台暂缺，建议提工单",
      "matchEn": "Missing → ticket",
      "status": "missing"
     }
    ]
   }
  },
  {
   "me": true,
   "text": "货舱我想用 3D 打印，能帮我生成项目吗？",
   "textEn": "Cargo cabin by 3D print, can you generate a project?"
  },
  {
   "me": false,
   "text": "已生成项目 PR-4012，含 5 个节点、3 个匹配模块与 1 个工单明细，可在项目详情页查看。",
   "textEn": "Project PR-4012 created: 5 nodes, 3 matched modules, 1 ticket. See project detail."
  }
 ],
 "meta": {
  "cats": [
   {
    "key": "commercial",
    "zh": "商用机器人",
    "en": "Commercial Robot",
    "icon": "assets/img/gen/icon/commercial_b.svg"
   },
   {
    "key": "embodied",
    "zh": "具身机器人",
    "en": "Embodied Robot",
    "icon": "assets/img/gen/icon/embodied_b.svg"
   },
   {
    "key": "custom",
    "zh": "定制机器人",
    "en": "Custom Robot",
    "icon": "assets/img/gen/icon/custom_b.svg"
   },
   {
    "key": "module",
    "zh": "机器人模块",
    "en": "Robot Module",
    "icon": "assets/img/gen/icon/module_b.svg"
   },
   {
    "key": "component",
    "zh": "机器人组件",
    "en": "Robot Component",
    "icon": "assets/img/gen/icon/component_b.svg"
   },
   {
    "key": "accessory",
    "zh": "模块配件",
    "en": "Module Accessory",
    "icon": "assets/img/gen/icon/accessory_b.svg"
   },
   {
    "key": "hardware",
    "zh": "五金件",
    "en": "Hardware Part",
    "icon": "assets/img/gen/icon/hardware_b.svg"
   },
   {
    "key": "print3d",
    "zh": "3D打印产品",
    "en": "3D Printed Part",
    "icon": "assets/img/gen/icon/print3d_b.svg"
   },
   {
    "key": "shell",
    "zh": "外壳结构",
    "en": "Enclosure Shell",
    "icon": "assets/img/gen/icon/shell_b.svg"
   },
   {
    "key": "toy",
    "zh": "玩具机器人",
    "en": "Toy Robot",
    "icon": "assets/img/gen/icon/toy_b.svg"
   }
  ],
  "newsCats": [
   {
    "zh": "厂商动态",
    "en": "Brand News"
   },
   {
    "zh": "新品发布",
    "en": "New Launch"
   },
   {
    "zh": "行业观察",
    "en": "Industry Insight"
   },
   {
    "zh": "技术前沿",
    "en": "Tech Frontier"
   },
   {
    "zh": "活动展会",
    "en": "Events"
   },
   {
    "zh": "开源更新",
    "en": "Open Source"
   }
  ],
  "boards": [
   {
    "zh": "综合讨论",
    "en": "General"
   },
   {
    "zh": "产品问答",
    "en": "Q&A"
   },
   {
    "zh": "DIY 玩法",
    "en": "DIY Play"
   },
   {
    "zh": "开源项目",
    "en": "Open Source"
   },
   {
    "zh": "学习资料",
    "en": "Learning"
   },
   {
    "zh": "二手交易",
    "en": "Marketplace"
   }
  ],
  "learnCats": [
   {
    "zh": "入门指南",
    "en": "Getting Started"
   },
   {
    "zh": "机械设计",
    "en": "Mechanical"
   },
   {
    "zh": "嵌入式",
    "en": "Embedded"
   },
   {
    "zh": "运动控制",
    "en": "Motion Control"
   },
   {
    "zh": "AI 算法",
    "en": "AI Algorithms"
   },
   {
    "zh": "项目实战",
    "en": "Projects"
   }
  ],
  "design": {
   "home_hero": {
    "main": "assets/img/design/home_hero.png",
    "card": "assets/img/design/home_hero_card.png",
    "sq": "assets/img/design/home_hero_sq.png",
    "strip": "assets/img/design/home_hero_strip.png",
    "thumb": "assets/img/design/home_hero_thumb.png",
    "m": "assets/img/design/home_hero_m.png",
    "bar": "assets/img/design/home_hero_bar.png"
   },
   "bg_industrial": {
    "main": "assets/img/design/bg_industrial.png",
    "card": "assets/img/design/bg_industrial_card.png",
    "sq": "assets/img/design/bg_industrial_sq.png",
    "strip": "assets/img/design/bg_industrial_strip.png",
    "thumb": "assets/img/design/bg_industrial_thumb.png",
    "m": "assets/img/design/bg_industrial_m.png",
    "bar": "assets/img/design/bg_industrial_bar.png"
   },
   "toy_hero": {
    "main": "assets/img/design/toy_hero.png",
    "card": "assets/img/design/toy_hero_card.png",
    "sq": "assets/img/design/toy_hero_sq.png",
    "strip": "assets/img/design/toy_hero_strip.png",
    "thumb": "assets/img/design/toy_hero_thumb.png",
    "m": "assets/img/design/toy_hero_m.png",
    "bar": "assets/img/design/toy_hero_bar.png"
   },
   "module_hero": {
    "main": "assets/img/design/module_hero.png",
    "card": "assets/img/design/module_hero_card.png",
    "sq": "assets/img/design/module_hero_sq.png",
    "strip": "assets/img/design/module_hero_strip.png",
    "thumb": "assets/img/design/module_hero_thumb.png",
    "m": "assets/img/design/module_hero_m.png",
    "bar": "assets/img/design/module_hero_bar.png"
   },
   "ai_hero": {
    "main": "assets/img/design/ai_hero.png",
    "card": "assets/img/design/ai_hero_card.png",
    "sq": "assets/img/design/ai_hero_sq.png",
    "strip": "assets/img/design/ai_hero_strip.png",
    "thumb": "assets/img/design/ai_hero_thumb.png",
    "m": "assets/img/design/ai_hero_m.png",
    "bar": "assets/img/design/ai_hero_bar.png"
   },
   "news_hero": {
    "main": "assets/img/design/news_hero.png",
    "card": "assets/img/design/news_hero_card.png",
    "sq": "assets/img/design/news_hero_sq.png",
    "strip": "assets/img/design/news_hero_strip.png",
    "thumb": "assets/img/design/news_hero_thumb.png",
    "m": "assets/img/design/news_hero_m.png",
    "bar": "assets/img/design/news_hero_bar.png"
   },
   "forum_hero": {
    "main": "assets/img/design/forum_hero.png",
    "card": "assets/img/design/forum_hero_card.png",
    "sq": "assets/img/design/forum_hero_sq.png",
    "strip": "assets/img/design/forum_hero_strip.png",
    "thumb": "assets/img/design/forum_hero_thumb.png",
    "m": "assets/img/design/forum_hero_m.png",
    "bar": "assets/img/design/forum_hero_bar.png"
   },
   "product_hero": {
    "main": "assets/img/design/product_hero.png",
    "card": "assets/img/design/product_hero_card.png",
    "sq": "assets/img/design/product_hero_sq.png",
    "strip": "assets/img/design/product_hero_strip.png",
    "thumb": "assets/img/design/product_hero_thumb.png",
    "m": "assets/img/design/product_hero_m.png",
    "bar": "assets/img/design/product_hero_bar.png"
   },
   "admin_hero": {
    "main": "assets/img/design/admin_hero.png",
    "card": "assets/img/design/admin_hero_card.png",
    "sq": "assets/img/design/admin_hero_sq.png",
    "strip": "assets/img/design/admin_hero_strip.png",
    "thumb": "assets/img/design/admin_hero_thumb.png",
    "m": "assets/img/design/admin_hero_m.png",
    "bar": "assets/img/design/admin_hero_bar.png"
   },
   "m_home_hero": {
    "main": "assets/img/design/m_home_hero.png",
    "card": "assets/img/design/m_home_hero_card.png",
    "sq": "assets/img/design/m_home_hero_sq.png",
    "strip": "assets/img/design/m_home_hero_strip.png",
    "thumb": "assets/img/design/m_home_hero_thumb.png",
    "m": "assets/img/design/m_home_hero_m.png",
    "bar": "assets/img/design/m_home_hero_bar.png"
   },
   "production_hero": {
    "main": "assets/img/design/production_hero.png",
    "card": "assets/img/design/production_hero_card.png",
    "sq": "assets/img/design/production_hero_sq.png",
    "strip": "assets/img/design/production_hero_strip.png",
    "thumb": "assets/img/design/production_hero_thumb.png",
    "m": "assets/img/design/production_hero_m.png",
    "bar": "assets/img/design/production_hero_bar.png"
   },
   "design_hero": {
    "main": "assets/img/design/design_hero.png",
    "card": "assets/img/design/design_hero_card.png",
    "sq": "assets/img/design/design_hero_sq.png",
    "strip": "assets/img/design/design_hero_strip.png",
    "thumb": "assets/img/design/design_hero_thumb.png",
    "m": "assets/img/design/design_hero_m.png",
    "bar": "assets/img/design/design_hero_bar.png"
   },
   "flow_hero": {
    "main": "assets/img/design/flow_hero.png",
    "card": "assets/img/design/flow_hero_card.png",
    "sq": "assets/img/design/flow_hero_sq.png",
    "strip": "assets/img/design/flow_hero_strip.png",
    "thumb": "assets/img/design/flow_hero_thumb.png",
    "m": "assets/img/design/flow_hero_m.png",
    "bar": "assets/img/design/flow_hero_bar.png"
   }
  },
  "ad": [
   "assets/img/gen/ad/ad_banner_01.svg",
   "assets/img/gen/ad/ad_banner_02.svg",
   "assets/img/gen/ad/ad_banner_03.svg",
   "assets/img/gen/ad/ad_banner_04.svg",
   "assets/img/gen/ad/ad_banner_05.svg",
   "assets/img/gen/ad/ad_banner_06.svg"
  ],
  "bg": {
   "industrial": "assets/img/gen/bg/bg_industrial.svg",
   "toy": "assets/img/gen/bg/bg_toy.svg",
   "tech": "assets/img/gen/bg/bg_tech.svg",
   "social": "assets/img/gen/bg/bg_social.svg",
   "admin": "assets/img/gen/bg/bg_admin.svg",
   "gridcard": "assets/img/gen/bg/bg_gridcard.svg",
   "circuit": "assets/img/gen/bg/bg_circuit.svg",
   "redline": "assets/img/gen/bg/bg_redline.svg"
  }
 },
 "publishes": {
  "cats": [
   {
    "key": "module",
    "zh": "机器人模块",
    "en": "Module"
   },
   {
    "key": "component",
    "zh": "机器人组件",
    "en": "Component"
   },
   {
    "key": "hardware",
    "zh": "五金配件",
    "en": "Hardware"
   },
   {
    "key": "shell",
    "zh": "外壳结构",
    "en": "Shell"
   },
   {
    "key": "accessory",
    "zh": "模块配件",
    "en": "Accessory"
   },
   {
    "key": "print3d",
    "zh": "3D打印件",
    "en": "3D print"
   }
  ],
  "productTypes": [
   {
    "key": "commercial",
    "zh": "商用机器人",
    "en": "Commercial"
   },
   {
    "key": "embodied",
    "zh": "具身机器人",
    "en": "Embodied"
   },
   {
    "key": "custom",
    "zh": "定制机器人",
    "en": "Custom"
   },
   {
    "key": "toy",
    "zh": "玩具机器人",
    "en": "Toy"
   }
  ],
  "licenses": [
   "Apache-2.0",
   "MIT",
   "GPL-3.0",
   "CERN-OHL",
   "闭源商用"
  ],
  "applications": [
   "酒店配送",
   "商用清洁",
   "巡检安防",
   "教育培训",
   "工业搬运",
   "医疗辅助"
  ],
  "difficulties": [
   "入门（1-2 天）",
   "进阶（3-7 天）",
   "硬核（1 周以上）"
  ],
  "shares": [
   "公开全部文件",
   "仅公开图纸",
   "教程公开",
   "暂不公开"
  ],
  "moduleSpecs": [
   {
    "k": "额定电压",
    "kEn": "Rated voltage",
    "v": "24 V DC"
   },
   {
    "k": "额定扭矩",
    "kEn": "Rated torque",
    "v": "17 N·m"
   },
   {
    "k": "减速比",
    "kEn": "Gear ratio",
    "v": "1:100"
   },
   {
    "k": "重复定位精度",
    "kEn": "Repeatability",
    "v": "±0.01°"
   },
   {
    "k": "通讯接口",
    "kEn": "Interface",
    "v": "CAN / RS485"
   },
   {
    "k": "重量",
    "kEn": "Weight",
    "v": "680 g"
   },
   {
    "k": "防护等级",
    "kEn": "IP rating",
    "v": "IP54"
   },
   {
    "k": "工作温度",
    "kEn": "Operating temp",
    "v": "-10 ~ 55 ℃"
   }
  ],
  "productSpecs": [
   {
    "k": "整机尺寸",
    "kEn": "Dimensions",
    "v": "520 × 520 × 1280 mm"
   },
   {
    "k": "整机重量",
    "kEn": "Weight",
    "v": "48 kg"
   },
   {
    "k": "续航",
    "kEn": "Battery",
    "v": "8 h"
   },
   {
    "k": "负载",
    "kEn": "Payload",
    "v": "30 kg"
   },
   {
    "k": "导航方式",
    "kEn": "Navigation",
    "v": "激光 SLAM + 视觉"
   },
   {
    "k": "最大速度",
    "kEn": "Max speed",
    "v": "1.2 m/s"
   },
   {
    "k": "充电方式",
    "kEn": "Charging",
    "v": "自动回充"
   },
   {
    "k": "通讯",
    "kEn": "Connectivity",
    "v": "Wi-Fi / 4G / CAN"
   }
  ],
  "toyBom": [
   {
    "k": "主控板",
    "kEn": "MCU board",
    "v": "ESP32-S3 × 1"
   },
   {
    "k": "舵机",
    "kEn": "Servo",
    "v": "MG90S × 12"
   },
   {
    "k": "结构件",
    "kEn": "Structure",
    "v": "3D 打印 PLA × 6"
   },
   {
    "k": "电池",
    "kEn": "Battery",
    "v": "18650 × 2"
   },
   {
    "k": "传感器",
    "kEn": "Sensor",
    "v": "超声波 × 1"
   },
   {
    "k": "螺丝五金",
    "kEn": "Fasteners",
    "v": "M2.5 套件 × 1"
   }
  ],
  "moduleSettings": [
   {
    "zh": "公开到平台",
    "en": "Public on platform",
    "sub": "所有人可见并可检索",
    "subEn": "Visible and searchable",
    "on": true
   },
   {
    "zh": "允许他人二次开发",
    "en": "Allow derivatives",
    "sub": "标注开源协议后开放改版",
    "subEn": "Open for remix",
    "on": true
   },
   {
    "zh": "开放资料下载",
    "en": "Allow download",
    "sub": "3D / 图纸 / 程序可下载",
    "subEn": "Files downloadable",
    "on": false
   },
   {
    "zh": "加入对比库",
    "en": "Add to compare",
    "sub": "可被其他用户加入对比",
    "subEn": "Can be compared",
    "on": false
   }
  ],
  "productSettings": [
   {
    "zh": "开启在线询价",
    "en": "Enable inquiry",
    "sub": "买家可直接发起询价单",
    "subEn": "Buyers send inquiries",
    "on": true
   },
   {
    "zh": "支持定制改版",
    "en": "Customizable",
    "sub": "接受按需求改版报价",
    "subEn": "Accepts customization",
    "on": false
   },
   {
    "zh": "开放样机申请",
    "en": "Sample request",
    "sub": "支持寄送样机试用",
    "subEn": "Sample trial",
    "on": false
   },
   {
    "zh": "加入平台推荐",
    "en": "Featured",
    "sub": "参与平台首页推荐位",
    "subEn": "Join featuring",
    "on": false
   }
  ],
  "toySettings": [
   {
    "zh": "参加作品秀",
    "en": "Join showcase",
    "sub": "进入作品秀排行候选池",
    "subEn": "Enter ranking pool",
    "on": true
   },
   {
    "zh": "允许他人复刻",
    "en": "Allow remake",
    "sub": "他人可基于图纸复刻",
    "subEn": "Others can remake",
    "on": true
   },
   {
    "zh": "参加本期赛事",
    "en": "Join contest",
    "sub": "同步投稿当前创意赛",
    "subEn": "Submit to contest",
    "on": false
   },
   {
    "zh": "开启打赏",
    "en": "Enable tips",
    "sub": "接受社区打赏支持",
    "subEn": "Accept tips",
    "on": false
   }
  ],
  "fileSlots": [
   {
    "zh": "3D 模型",
    "en": "3D model",
    "demo": "assets/img/gen/product/module_01.svg",
    "icon": "doc3d"
   },
   {
    "zh": "图纸 / 尺寸图",
    "en": "Drawings",
    "demo": "assets/img/gen/cover/doc_01.svg",
    "icon": "doc3d"
   },
   {
    "zh": "实物照片",
    "en": "Photos",
    "demo": "assets/img/gen/product/component_01.svg",
    "icon": "product"
   },
   {
    "zh": "演示视频",
    "en": "Demo video",
    "demo": "assets/img/gen/cover/video_01.svg",
    "icon": "video"
   }
  ],
  "reviewFaq": [
   {
    "q": "审核要多久？",
    "qEn": "How long?",
    "a": "常规 1 个工作日内完成初审，含实物资料的最多 3 个工作日。",
    "aEn": "Usually 1 business day; up to 3 with samples."
   },
   {
    "q": "哪些内容会被驳回？",
    "qEn": "What gets rejected?",
    "a": "参数缺失、图片与实物不符、侵犯他人知识产权、虚假库存。",
    "aEn": "Missing specs, mismatch, IP infringement, fake stock."
   },
   {
    "q": "审核期间能修改吗？",
    "qEn": "Editable during review?",
    "a": "可以，修改后重新进入队列，审核计时重新开始。",
    "aEn": "Yes, re-queued and timer restarts."
   }
  ]
 },
 "applies": {
  "roles": [
   {
    "key": "mech",
    "zh": "结构工程师",
    "en": "Mechanical"
   },
   {
    "key": "algo",
    "zh": "算法工程师",
    "en": "Algorithm"
   },
   {
    "key": "embed",
    "zh": "嵌入式开发",
    "en": "Embedded"
   },
   {
    "key": "test",
    "zh": "测试验证",
    "en": "Testing"
   },
   {
    "key": "supply",
    "zh": "供应链",
    "en": "Supply chain"
   },
   {
    "key": "pm",
    "zh": "项目管理",
    "en": "PM"
   }
  ],
  "capMatch": [
   {
    "zh": "机械结构设计",
    "en": "Mechanical design",
    "icon": "module",
    "pct": 92
   },
   {
    "zh": "嵌入式固件",
    "en": "Embedded firmware",
    "icon": "component",
    "pct": 78
   },
   {
    "zh": "SLAM 算法",
    "en": "SLAM algorithm",
    "icon": "ai",
    "pct": 64
   },
   {
    "zh": "测试与验证",
    "en": "Testing",
    "icon": "test",
    "pct": 55
   }
  ],
  "process": [
   {
    "t": "提交申请",
    "te": "Submit",
    "d": "填写角色与经验，提交至项目经理。",
    "de": "Submit role and experience to PM.",
    "on": true
   },
   {
    "t": "项目经理初筛",
    "te": "PM screening",
    "d": "48 小时内完成初筛，未通过会给出原因。",
    "de": "Screened in 48h with reason if rejected.",
    "on": false
   },
   {
    "t": "沟通确认",
    "te": "Interview",
    "d": "通过初筛后进入单聊或群聊沟通。",
    "de": "Move to chat after screening.",
    "on": false
   },
   {
    "t": "加入项目组",
    "te": "Onboard",
    "d": "确认后加入成员列表并分配节点任务。",
    "de": "Join members and get tasks.",
    "on": false
   }
  ],
  "bidProcess": [
   {
    "t": "提交应征",
    "te": "Submit bid",
    "d": "方案与报价提交后进入应征列表。",
    "de": "Bid enters the list.",
    "on": true
   },
   {
    "t": "需求方比选",
    "te": "Comparison",
    "d": "需求方对比方案、价格与历史评价。",
    "de": "Buyer compares plan, price, ratings.",
    "on": false
   },
   {
    "t": "沟通确认",
    "te": "Discussion",
    "d": "进入单聊细化方案与节点安排。",
    "de": "1:1 chat to refine milestones.",
    "on": false
   },
   {
    "t": "生成项目",
    "te": "Project created",
    "d": "确认后自动生成项目与资金托管。",
    "de": "Project and escrow created.",
    "on": false
   }
  ],
  "inviteStates": [
   {
    "zh": "待接受",
    "en": "Pending"
   },
   {
    "zh": "已接受",
    "en": "Accepted"
   },
   {
    "zh": "已拒绝",
    "en": "Declined"
   },
   {
    "zh": "已过期",
    "en": "Expired"
   }
  ],
  "validity": [
   "3 天",
   "7 天",
   "15 天",
   "30 天"
  ],
  "warranty": [
   "3 个月",
   "6 个月",
   "12 个月",
   "24 个月"
  ],
  "quoteRefs": [
   {
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "name": "机电老张",
    "nameEn": "MechZhang",
    "quote": "¥12,000",
    "days": 30
   },
   {
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "name": "开源阿凯",
    "nameEn": "OpenKai",
    "quote": "¥16,000",
    "days": 40
   },
   {
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "name": "蓝鲸官方",
    "nameEn": "BlueWhale",
    "quote": "¥20,000",
    "days": 50
   },
   {
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "name": "机器人小学生",
    "nameEn": "RoboKid",
    "quote": "¥24,000",
    "days": 60
   }
  ],
  "integResources": [
   {
    "zh": "伺服关节模组 MS-17",
    "en": "Servo joint MS-17",
    "sub": "平台现货 · 24 件",
    "subEn": "In stock",
    "icon": "module",
    "tag": "可直接采用",
    "tagEn": "Ready"
   },
   {
    "zh": "激光雷达 L-40",
    "en": "LiDAR L-40",
    "sub": "平台现货 · 8 件",
    "subEn": "In stock",
    "icon": "component",
    "tag": "可直接采用",
    "tagEn": "Ready"
   },
   {
    "zh": "力控夹爪 FG-2",
    "en": "Force gripper FG-2",
    "sub": "缺货 · 预计 30 天",
    "subEn": "Out of stock",
    "icon": "accessory",
    "tag": "需提工单",
    "tagEn": "Ticket"
   },
   {
    "zh": "定制外壳",
    "en": "Custom shell",
    "sub": "无现成方案",
    "subEn": "No ready design",
    "icon": "shell",
    "tag": "需定制",
    "tagEn": "Custom"
   }
  ],
  "testCaps": [
   {
    "key": "rel",
    "zh": "可靠性测试",
    "en": "Reliability"
   },
   {
    "key": "perf",
    "zh": "性能测试",
    "en": "Performance"
   },
   {
    "key": "env",
    "zh": "环境测试",
    "en": "Environmental"
   },
   {
    "key": "safety",
    "zh": "安全合规",
    "en": "Safety"
   },
   {
    "key": "emc",
    "zh": "电磁兼容",
    "en": "EMC"
   }
  ],
  "testEquip": [
   {
    "zh": "恒温恒湿箱",
    "en": "Thermal chamber",
    "sub": "-40 ~ 150 ℃",
    "subEn": "-40 ~ 150 ℃",
    "icon": "test",
    "tag": "自有",
    "tagEn": "Owned"
   },
   {
    "zh": "振动测试台",
    "en": "Vibration table",
    "sub": "5 ~ 2000 Hz",
    "subEn": "5 ~ 2000 Hz",
    "icon": "test",
    "tag": "自有",
    "tagEn": "Owned"
   },
   {
    "zh": "跌落试验机",
    "en": "Drop tester",
    "sub": "0 ~ 2 m",
    "subEn": "0 ~ 2 m",
    "icon": "test",
    "tag": "合作",
    "tagEn": "Partner"
   },
   {
    "zh": "EMC 暗室",
    "en": "EMC chamber",
    "sub": "需外部预约",
    "subEn": "External booking",
    "icon": "test",
    "tag": "外部",
    "tagEn": "External"
   }
  ],
  "reportForms": [
   "平台标准报告",
   "CNAS 报告",
   "自定义报告"
  ],
  "schedule": [
   {
    "k": "方案设计",
    "kEn": "Design",
    "v": "第 1-2 周"
   },
   {
    "k": "模块采购",
    "kEn": "Procurement",
    "v": "第 2-5 周"
   },
   {
    "k": "整机装配",
    "kEn": "Assembly",
    "v": "第 5-7 周"
   },
   {
    "k": "联调测试",
    "kEn": "Integration test",
    "v": "第 7-9 周"
   },
   {
    "k": "验收交付",
    "kEn": "Delivery",
    "v": "第 10 周"
   }
  ],
  "faq": [
   {
    "q": "站外协作者能加入吗？",
    "qEn": "Can externals join?",
    "a": "可以，通过邮箱发送邀请链接，注册后自动进入项目组。",
    "aEn": "Yes, email invite link; they join after signup."
   },
   {
    "q": "邀请有数量限制吗？",
    "qEn": "Any limit?",
    "a": "单个项目同时待处理邀请不超过 20 个。",
    "aEn": "Max 20 pending per project."
   },
   {
    "q": "对方不响应怎么办？",
    "qEn": "No response?",
    "a": "可手动撤回邀请，名额立即释放。",
    "aEn": "Withdraw; slot frees immediately."
   },
   {
    "q": "需要寄送样品吗？",
    "qEn": "Ship samples?",
    "a": "由需求方寄送，承接方收到后确认并开始计时。",
    "aEn": "Buyer ships; timer starts on receipt."
   },
   {
    "q": "测试失败怎么处理？",
    "qEn": "If it fails?",
    "a": "据实出具报告，不因结果影响结算。",
    "aEn": "Report as-is; result does not affect payment."
   }
  ]
 },
 "enrolls": {
  "fees": [
   {
    "k": "课程费用",
    "kEn": "Course fee",
    "v": "¥299.00"
   },
   {
    "k": "早鸟优惠",
    "kEn": "Early bird",
    "v": "-¥50.00"
   },
   {
    "k": "平台券",
    "kEn": "Platform coupon",
    "v": "-¥20.00"
   },
   {
    "k": "应付金额",
    "kEn": "Payable",
    "v": "¥229.00"
   }
  ],
  "levels": [
   "零基础",
   "有基础",
   "熟练"
  ],
  "payMethods": [
   {
    "zh": "微信支付",
    "en": "WeChat Pay",
    "sub": "推荐",
    "subEn": "Recommended",
    "on": true
   },
   {
    "zh": "支付宝",
    "en": "Alipay",
    "sub": "支持花呗",
    "subEn": "Huabei",
    "on": false
   },
   {
    "zh": "平台余额",
    "en": "Balance",
    "sub": "余额 ¥286,400",
    "subEn": "Balance ¥286,400",
    "on": false
   }
  ],
  "courseFaq": [
   {
    "q": "可以退款吗？",
    "qEn": "Refundable?",
    "a": "开课前可全额退款，开课后按已学课时比例退款。",
    "aEn": "Full refund before start; pro-rata after."
   },
   {
    "q": "课件能下载吗？",
    "qEn": "Materials downloadable?",
    "a": "可以，示例代码、图纸与视频均支持下载。",
    "aEn": "Yes, code, drawings and videos."
   },
   {
    "q": "有学习期限吗？",
    "qEn": "Any deadline?",
    "a": "报名后 24 个月内可无限次回看。",
    "aEn": "Unlimited replay within 24 months."
   }
  ],
  "contestSteps": [
   {
    "t": "填写报名",
    "te": "Signup"
   },
   {
    "t": "提交作品",
    "te": "Submit"
   },
   {
    "t": "评审公示",
    "te": "Review"
   },
   {
    "t": "结果公布",
    "te": "Result"
   }
  ],
  "contestInfo": [
   {
    "k": "赛事名称",
    "kEn": "Contest",
    "v": "第 4 届机器人创意赛"
   },
   {
    "k": "主题",
    "kEn": "Theme",
    "v": "桌面机器人的一百种玩法"
   },
   {
    "k": "报名截止",
    "kEn": "Signup deadline",
    "v": "2026-11-30"
   },
   {
    "k": "作品提交截止",
    "kEn": "Submission deadline",
    "v": "2026-12-20"
   },
   {
    "k": "评审方式",
    "kEn": "Judging",
    "v": "社区投票 40% + 专家评审 60%"
   },
   {
    "k": "奖项",
    "kEn": "Awards",
    "v": "一等奖 1 名 / 二等奖 3 名 / 三等奖 10 名"
   }
  ],
  "tracks": [
   {
    "key": "creative",
    "zh": "创意组",
    "en": "Creative"
   },
   {
    "key": "eng",
    "zh": "工程组",
    "en": "Engineering"
   },
   {
    "key": "edu",
    "zh": "教育组",
    "en": "Education"
   },
   {
    "key": "oss",
    "zh": "开源组",
    "en": "Open source"
   }
  ],
  "contestRules": [
   {
    "q": "评分维度有哪些？",
    "qEn": "Criteria?",
    "a": "创意 30%、完成度 30%、可复刻性 20%、展示效果 20%。",
    "aEn": "Creativity 30%, completeness 30%, reproducibility 20%, presentation 20%."
   },
   {
    "q": "可以团队参赛吗？",
    "qEn": "Team allowed?",
    "a": "可以，每队不超过 5 人，需指定一名队长。",
    "aEn": "Yes, up to 5 per team with one leader."
   },
   {
    "q": "作品必须是新做的吗？",
    "qEn": "Must be new?",
    "a": "需在赛事期间首次公开，往期获奖作品不可重复投稿。",
    "aEn": "Must be first published during the contest."
   },
   {
    "q": "抄袭怎么处理？",
    "qEn": "Plagiarism?",
    "a": "一经核实取消资格并公示，情节严重者封禁账号。",
    "aEn": "Disqualified and published; serious cases banned."
   }
  ]
 },
 "withdraws": {
  "summary": [
   {
    "v": "¥286,400",
    "l": "可提现",
    "lEn": "Available",
    "hl": false
   },
   {
    "v": "¥12,000",
    "l": "冻结中",
    "lEn": "Frozen",
    "hl": false
   },
   {
    "v": "¥64,200",
    "l": "已提现",
    "lEn": "Withdrawn",
    "hl": false
   },
   {
    "v": "3",
    "l": "提现中",
    "lEn": "Processing",
    "hl": true
   }
  ],
  "fee": [
   {
    "k": "提现金额",
    "kEn": "Amount",
    "v": "¥50,000.00"
   },
   {
    "k": "手续费率",
    "kEn": "Fee rate",
    "v": "0.6%"
   },
   {
    "k": "手续费",
    "kEn": "Fee",
    "v": "¥300.00"
   },
   {
    "k": "预计到账",
    "kEn": "Net",
    "v": "¥49,700.00"
   },
   {
    "k": "到账时间",
    "kEn": "ETA",
    "v": "T+1 工作日"
   }
  ],
  "accounts": [
   {
    "zh": "招商银行 ****6621",
    "en": "CMB ****6621",
    "sub": "张 · 储蓄卡",
    "subEn": "Zhang · Debit",
    "on": true
   },
   {
    "zh": "工商银行 ****3087",
    "en": "ICBC ****3087",
    "sub": "机电科技 · 对公",
    "subEn": "MechTech · Corporate",
    "on": false
   },
   {
    "zh": "支付宝 acc@rf.com",
    "en": "Alipay acc@rf.com",
    "sub": "已实名",
    "subEn": "Verified",
    "on": false
   }
  ],
  "history": [
   {
    "amt": "¥8,000",
    "st": "已到账",
    "stEn": "Arrived",
    "date": "2026-01-02",
    "to": "到招商银行",
    "toEn": "To CMB"
   },
   {
    "amt": "¥14,000",
    "st": "处理中",
    "stEn": "Processing",
    "date": "2026-02-12",
    "to": "到招商银行",
    "toEn": "To CMB"
   },
   {
    "amt": "¥20,000",
    "st": "已到账",
    "stEn": "Arrived",
    "date": "2026-03-22",
    "to": "到工商银行",
    "toEn": "To ICBC"
   },
   {
    "amt": "¥26,000",
    "st": "已驳回",
    "stEn": "Rejected",
    "date": "2026-04-23",
    "to": "到支付宝",
    "toEn": "To Alipay"
   }
  ],
  "faq": [
   {
    "q": "为什么被冻结？",
    "qEn": "Why frozen?",
    "a": "托管中的资金在节点验收前处于冻结状态。",
    "aEn": "Escrow frozen until milestone acceptance."
   },
   {
    "q": "提现被驳回怎么办？",
    "qEn": "Rejected?",
    "a": "通常为账户信息不符，更正后可重新发起。",
    "aEn": "Usually account mismatch; correct and retry."
   },
   {
    "q": "需要缴税吗？",
    "qEn": "Tax?",
    "a": "企业账户需自行申报，平台可提供流水凭证。",
    "aEn": "Corporate self-declares; platform provides statements."
   }
  ]
 },
 "payResults": {
  "info": [
   {
    "k": "支付单号",
    "kEn": "Payment No.",
    "v": "PAY20260118001"
   },
   {
    "k": "支付金额",
    "kEn": "Amount",
    "v": "¥92,000.00"
   },
   {
    "k": "支付方式",
    "kEn": "Method",
    "v": "微信支付"
   },
   {
    "k": "支付时间",
    "kEn": "Paid at",
    "v": "2026-01-18 14:32"
   },
   {
    "k": "托管状态",
    "kEn": "Escrow",
    "v": "已托管"
   },
   {
    "k": "预计释放",
    "kEn": "Release",
    "v": "节点验收后"
   }
  ],
  "flow": [
   {
    "t": "支付完成",
    "te": "Paid",
    "d": "¥92,000 已从你的账户扣除。",
    "de": "Deducted.",
    "on": true
   },
   {
    "t": "进入托管",
    "te": "In escrow",
    "d": "资金由平台托管，服务方尚未收到。",
    "de": "Held by platform.",
    "on": false
   },
   {
    "t": "节点验收",
    "te": "Milestone",
    "d": "你验收通过后触发释放。",
    "de": "Acceptance triggers release.",
    "on": false
   },
   {
    "t": "释放给服务方",
    "te": "Released",
    "d": "资金释放至服务方账户，可提现。",
    "de": "Released, withdrawable.",
    "on": false
   }
  ],
  "next": [
   {
    "zh": "查看项目进度",
    "en": "Project progress",
    "sub": "节点 2 · 方案设计进行中",
    "subEn": "Milestone 2",
    "icon": "project",
    "href": "project_progress.html"
   },
   {
    "zh": "进入项目沟通",
    "en": "Project chat",
    "sub": "与项目经理保持同步",
    "subEn": "Sync with PM",
    "icon": "message",
    "href": "msg_project.html"
   },
   {
    "zh": "查看资金明细",
    "en": "Fund details",
    "sub": "托管与释放记录",
    "subEn": "Escrow log",
    "icon": "fund",
    "href": "fund_detail.html"
   },
   {
    "zh": "申请发票",
    "en": "Request invoice",
    "sub": "可开票金额已更新",
    "subEn": "Amount updated",
    "icon": "doc3d",
    "href": "fund_invoice.html"
   }
  ],
  "faq": [
   {
    "q": "可以退款吗？",
    "qEn": "Refundable?",
    "a": "节点未开始前可申请全额退款。",
    "aEn": "Full refund before milestone starts."
   },
   {
    "q": "服务方不交付怎么办？",
    "qEn": "Provider stalls?",
    "a": "可发起争议工单，平台介入仲裁。",
    "aEn": "Open dispute ticket for arbitration."
   },
   {
    "q": "托管有手续费吗？",
    "qEn": "Escrow fee?",
    "a": "平台收取 1% 服务费，由项目预算承担。",
    "aEn": "1% service fee from budget."
   }
  ]
 },
 "reviews": {
  "targets": [
   {
    "idx": 0,
    "order": "#9000",
    "tag": "已购买",
    "tagEn": "Purchased"
   },
   {
    "idx": 1,
    "order": "#9001",
    "tag": "已购买",
    "tagEn": "Purchased"
   },
   {
    "idx": 2,
    "order": "#9002",
    "tag": "已购买",
    "tagEn": "Purchased"
   }
  ],
  "items": [
   {
    "zh": "做工质量",
    "en": "Build quality",
    "star": 5
   },
   {
    "zh": "性能表现",
    "en": "Performance",
    "star": 4
   },
   {
    "zh": "资料完整度",
    "en": "Docs completeness",
    "star": 4
   },
   {
    "zh": "性价比",
    "en": "Value",
    "star": 3
   },
   {
    "zh": "售后支持",
    "en": "Support",
    "star": 5
   }
  ],
  "durations": [
   "1 周内",
   "1 个月",
   "3 个月",
   "半年以上"
  ],
  "settings": [
   {
    "zh": "匿名发布",
    "en": "Post anonymously",
    "sub": "不显示你的昵称与头像",
    "subEn": "Hide nickname and avatar",
    "on": true
   },
   {
    "zh": "同步到论坛",
    "en": "Also post to forum",
    "sub": "在产品问答板块同步发帖",
    "subEn": "Cross-post to Q&A",
    "on": false
   }
  ],
  "faq": [
   {
    "q": "评价能修改吗？",
    "qEn": "Editable?",
    "a": "发布后 7 天内可修改一次。",
    "aEn": "One edit within 7 days."
   },
   {
    "q": "什么评价会被折叠？",
    "qEn": "What gets folded?",
    "a": "含人身攻击、广告、与产品无关内容。",
    "aEn": "Abuse, ads or off-topic."
   },
   {
    "q": "商家能删除评价吗？",
    "qEn": "Can sellers delete?",
    "a": "不能，仅平台按规则处理违规内容。",
    "aEn": "No, only platform handles violations."
   }
  ]
 },
 "bulkFiles": {
  "selected": [
   {
    "zh": "整机 3D 图纸",
    "en": "Full 3D drawings",
    "sub": "STEP · 24.6 MB · 12 个文件",
    "subEn": "STEP · 12 files",
    "icon": "doc3d",
    "tag": "已选",
    "tagEn": "Selected"
   },
   {
    "zh": "零件 BOM 表",
    "en": "BOM sheet",
    "sub": "XLSX · 0.8 MB · 1 个文件",
    "subEn": "XLSX · 1 file",
    "icon": "doc3d",
    "tag": "已选",
    "tagEn": "Selected"
   },
   {
    "zh": "硬件原理图",
    "en": "Schematics",
    "sub": "PDF · 6.2 MB · 8 个文件",
    "subEn": "PDF · 8 files",
    "icon": "hardware_doc",
    "tag": "已选",
    "tagEn": "Selected"
   },
   {
    "zh": "固件与 SDK",
    "en": "Firmware and SDK",
    "sub": "ZIP · 18.4 MB · 1 个文件",
    "subEn": "ZIP · 1 file",
    "icon": "software",
    "tag": "已选",
    "tagEn": "Selected"
   },
   {
    "zh": "演示视频",
    "en": "Demo videos",
    "sub": "MP4 · 210 MB · 4 个文件",
    "subEn": "MP4 · 4 files",
    "icon": "video",
    "tag": "已选",
    "tagEn": "Selected"
   }
  ],
  "formats": [
   "ZIP（通用）",
   "7Z（更高压缩率）",
   "TAR.GZ（Linux）"
  ],
  "namings": [
   "按原始名称",
   "加项目前缀",
   "按类型分目录"
  ],
  "transcodes": [
   "原始画质",
   "720p（更小）",
   "仅音频"
  ],
  "estimate": [
   {
    "k": "文件数量",
    "kEn": "Files",
    "v": "26 个"
   },
   {
    "k": "原始大小",
    "kEn": "Raw size",
    "v": "260 MB"
   },
   {
    "k": "压缩后预估",
    "kEn": "Compressed",
    "v": "约 178 MB"
   },
   {
    "k": "预计耗时",
    "kEn": "ETA",
    "v": "约 40 秒"
   },
   {
    "k": "有效期",
    "kEn": "Valid",
    "v": "生成后 7 天"
   }
  ],
  "history": [
   {
    "id": 300,
    "st": "已完成",
    "stEn": "Done",
    "date": "2026-01-12",
    "size": "142 MB"
   },
   {
    "id": 301,
    "st": "已完成",
    "stEn": "Done",
    "date": "2026-01-08",
    "size": "88 MB"
   },
   {
    "id": 302,
    "st": "生成中 35%",
    "stEn": "Packing 35%",
    "date": "2026-01-18",
    "size": "—"
   },
   {
    "id": 303,
    "st": "已过期",
    "stEn": "Expired",
    "date": "2025-12-20",
    "size": "210 MB"
   }
  ],
  "faq": [
   {
    "q": "打包会占用额度吗？",
    "qEn": "Quota?",
    "a": "打包不计入下载额度，下载时才计。",
    "aEn": "Packing is free; downloads count."
   },
   {
    "q": "大文件有限制吗？",
    "qEn": "Size limit?",
    "a": "单个压缩包不超过 2 GB，超出请分批。",
    "aEn": "Max 2 GB per archive."
   },
   {
    "q": "多久过期？",
    "qEn": "Expiry?",
    "a": "生成后 7 天内可下载，过期需重新打包。",
    "aEn": "Downloadable for 7 days."
   }
  ]
 },
 "tokens": {
  "scopes": [
   "仅 3D 图纸",
   "仅程序与 SDK",
   "全部资料",
   "指定项目资料"
  ],
  "validity": [
   "1 小时",
   "24 小时",
   "7 天",
   "30 天",
   "长期"
  ],
  "list": [
   {
    "zh": "CI 图纸同步",
    "en": "CI drawing sync",
    "used": 128,
    "left": "23 天",
    "leftEn": "23 days"
   },
   {
    "zh": "内网镜像",
    "en": "Internal mirror",
    "used": 4021,
    "left": "长期",
    "leftEn": "Permanent"
   },
   {
    "zh": "临时分享",
    "en": "Temp share",
    "used": 3,
    "left": "2 小时",
    "leftEn": "2 hours"
   },
   {
    "zh": "测试脚本",
    "en": "Test script",
    "used": 56,
    "left": "已过期",
    "leftEn": "Expired"
   }
  ],
  "purpose": [
   {
    "q": "什么是下载令牌？",
    "qEn": "What is it?",
    "a": "一个带时效的授权字符串，可在命令行或脚本中代替登录态下载资料。",
    "aEn": "A time-limited credential for scripted downloads."
   },
   {
    "q": "适合什么场景？",
    "qEn": "When to use?",
    "a": "CI 自动同步图纸、批量拉取 BOM、内网镜像资料库。",
    "aEn": "CI sync, bulk BOM, internal mirroring."
   },
   {
    "q": "会泄露账号吗？",
    "qEn": "Risk?",
    "a": "令牌仅含下载权限，不含登录与资金权限，可随时吊销。",
    "aEn": "Download-only scope; revocable."
   }
  ],
  "security": [
   {
    "q": "令牌泄露了怎么办？",
    "qEn": "Leaked?",
    "a": "立即吊销，已下载的链接在有效期内仍可访问。",
    "aEn": "Revoke; issued links stay valid."
   },
   {
    "q": "支持子账号吗？",
    "qEn": "Sub-accounts?",
    "a": "企业账号可为成员签发独立令牌并单独吊销。",
    "aEn": "Enterprise can issue per-member tokens."
   }
  ]
 },
 "ticketOps": {
  "closeReasons": [
   {
    "key": "r1",
    "zh": "问题已解决",
    "en": "Resolved"
   },
   {
    "key": "r2",
    "zh": "自行解决",
    "en": "Self-resolved"
   },
   {
    "key": "r3",
    "zh": "重复提交",
    "en": "Duplicate"
   },
   {
    "key": "r4",
    "zh": "需求变更",
    "en": "Changed"
   },
   {
    "key": "r5",
    "zh": "不再需要",
    "en": "No longer needed"
   }
  ],
  "closeImpact": [
   {
    "t": "退出处理队列",
    "te": "Leave queue",
    "d": "不再占用客服处理资源。",
    "de": "No longer consumes capacity.",
    "on": true
   },
   {
    "t": "记录归档",
    "te": "Archived",
    "d": "可在工单列表中按已关闭筛选查看。",
    "de": "Filterable as closed.",
    "on": false
   },
   {
    "t": "评价生效",
    "te": "Rating applied",
    "d": "满意度计入处理人服务评分。",
    "de": "Counts toward handler rating.",
    "on": false
   },
   {
    "t": "可申请重开",
    "te": "Reopenable",
    "d": "7 天内可申请一次重开。",
    "de": "One reopen within 7 days.",
    "on": false
   }
  ],
  "closeHistory": [
   {
    "id": "TK110",
    "st": "问题已解决",
    "stEn": "Resolved",
    "date": "2026-01-21"
   },
   {
    "id": "TK111",
    "st": "自行解决",
    "stEn": "Self-resolved",
    "date": "2026-02-22"
   },
   {
    "id": "TK112",
    "st": "重复提交",
    "stEn": "Duplicate",
    "date": "2026-03-23"
   },
   {
    "id": "TK113",
    "st": "不再需要",
    "stEn": "No longer needed",
    "date": "2026-04-24"
   }
  ],
  "resolveStates": [
   "已解决",
   "部分解决",
   "未解决"
  ],
  "resolveFaq": [
   {
    "q": "确认后还能重开吗？",
    "qEn": "Reopenable?",
    "a": "确认后 7 天内可申请重开一次。",
    "aEn": "One reopen within 7 days."
   },
   {
    "q": "驳回会怎样？",
    "qEn": "After rejection?",
    "a": "工单回到处理中状态并重新计时。",
    "aEn": "Returns to processing; timer restarts."
   }
  ]
 },
 "hotwords": {
  "toy": [
   "桌面机械臂",
   "六足机器人",
   "跟随小车",
   "3D 打印外壳",
   "舵机云台",
   "教育套件",
   "蓝牙遥控",
   "开源图纸"
  ],
  "toyHistory": [
   "迷你机械爪",
   "平衡小车",
   "开源模块"
  ],
  "news": [
   "人形机器人",
   "开源模块",
   "3D打印",
   "商用清洁",
   "厂商动态",
   "新品发布",
   "行业观察",
   "技术前沿",
   "活动展会",
   "开源更新"
  ],
  "product": [
   "人形机器人",
   "激光雷达模块",
   "3D打印外壳",
   "伺服驱动"
  ],
  "toyResults": [
   {
    "zh": "桌面六足跟随小车",
    "en": "Desktop hexapod follower",
    "sub": "入门",
    "subEn": "Beginner",
    "img": "assets/img/gen/product/toy_01.svg"
   },
   {
    "zh": "迷你机械爪套件",
    "en": "Mini gripper kit",
    "sub": "入门",
    "subEn": "Beginner",
    "img": "assets/img/gen/product/toy_02.svg"
   },
   {
    "zh": "自平衡两轮小车",
    "en": "Self-balancing car",
    "sub": "进阶",
    "subEn": "Intermediate",
    "img": "assets/img/gen/product/toy_03.svg"
   },
   {
    "zh": "蓝牙遥控机械臂",
    "en": "Bluetooth robot arm",
    "sub": "进阶",
    "subEn": "Intermediate",
    "img": "assets/img/gen/product/toy_04.svg"
   },
   {
    "zh": "3D 打印狗头外壳",
    "en": "3D printed dog shell",
    "sub": "入门",
    "subEn": "Beginner",
    "img": "assets/img/gen/product/toy_05.svg"
   },
   {
    "zh": "视觉跟随云台",
    "en": "Vision tracking gimbal",
    "sub": "硬核",
    "subEn": "Hardcore",
    "img": "assets/img/gen/product/toy_06.svg"
   },
   {
    "zh": "太阳能爬行机器人",
    "en": "Solar crawler",
    "sub": "进阶",
    "subEn": "Intermediate",
    "img": "assets/img/gen/product/toy_07.svg"
   },
   {
    "zh": "开源积木底盘",
    "en": "Open-source brick chassis",
    "sub": "入门",
    "subEn": "Beginner",
    "img": "assets/img/gen/product/toy_08.svg"
   }
  ],
  "notFound": [
   {
    "zh": "发布你的作品",
    "en": "Publish your work",
    "sub": "把做法分享给社区",
    "subEn": "Share your build",
    "icon": "plus",
    "href": "toy_publish.html"
   },
   {
    "zh": "提一个资源工单",
    "en": "Open a resource ticket",
    "sub": "让平台帮你找资源",
    "subEn": "Let platform find",
    "icon": "ticket",
    "href": "ticket_submit.html"
   },
   {
    "zh": "去 AI 智造问一问",
    "en": "Ask AI manufacturing",
    "sub": "让 AI 帮你拆解玩法",
    "subEn": "Let AI break it down",
    "icon": "ai",
    "href": "ai_chat.html"
   },
   {
    "zh": "逛逛作品秀",
    "en": "Browse showcase",
    "sub": "看看别人怎么做",
    "subEn": "See how others build",
    "icon": "toy",
    "href": "toy_show.html"
   }
  ]
 },
 "newsEdit": {
  "status": [
   {
    "k": "当前状态",
    "kEn": "Status",
    "v": "草稿"
   },
   {
    "k": "版本号",
    "kEn": "Version",
    "v": "v3"
   },
   {
    "k": "上次保存",
    "kEn": "Saved",
    "v": "2026-01-18 11:20"
   },
   {
    "k": "审核次数",
    "kEn": "Reviews",
    "v": "2"
   }
  ],
  "revisions": [
   {
    "v": "v3",
    "note": "补充参数表与实测数据",
    "noteEn": "Added spec table and test data",
    "date": "2026-01-10 10:20"
   },
   {
    "v": "v2",
    "note": "修正品牌名称",
    "noteEn": "Fixed brand name",
    "date": "2026-01-11 11:20"
   },
   {
    "v": "v1",
    "note": "初稿",
    "noteEn": "First draft",
    "date": "2026-01-12 12:20"
   }
  ],
  "feedback": [
   {
    "zh": "初审",
    "en": "First review",
    "sub": "需补充参数来源与实测数据",
    "subEn": "Add spec source and test data",
    "icon": "check",
    "tag": "需修改",
    "tagEn": "Needs edit"
   },
   {
    "zh": "复审",
    "en": "Second review",
    "sub": "品牌名称需与官网一致",
    "subEn": "Brand must match official site",
    "icon": "check",
    "tag": "需修改",
    "tagEn": "Needs edit"
   }
  ]
 },
 "production": {
  "lines": [
   {
    "id": "LN3000",
    "name": "蓝鲸智造 组装线 #1",
    "nameEn": "BlueWhale Assembly Line #1",
    "type": "组装线",
    "typeEn": "Assembly",
    "vendor": "蓝鲸智造",
    "vendorEn": "BlueWhale",
    "city": "深圳",
    "cityEn": "Shenzhen",
    "img": "assets/img/gen/product/production_line_01.svg",
    "status": "空闲",
    "statusEn": "Idle",
    "dailyCapacity": 200,
    "monthCapacity": 5200,
    "utilization": 62,
    "moq": 50,
    "leadDays": 15,
    "certs": [
     "ISO9001"
    ],
    "workers": 18,
    "automation": 45,
    "pricePerUnit": 120,
    "rating": 4.0,
    "orders": 12,
    "desc": "支持 组装线 工艺，最小起订 50 台，常规交期 15 天。",
    "descEn": "Supports Assembly process, MOQ 50 units, lead time 15 days."
   },
   {
    "id": "LN3001",
    "name": "开源纪元 SMT 线 #2",
    "nameEn": "OpenEra SMT Line #2",
    "type": "SMT 线",
    "typeEn": "SMT",
    "vendor": "开源纪元",
    "vendorEn": "OpenEra",
    "city": "东莞",
    "cityEn": "Dongguan",
    "img": "assets/img/gen/product/production_line_02.svg",
    "status": "生产中",
    "statusEn": "Running",
    "dailyCapacity": 260,
    "monthCapacity": 6760,
    "utilization": 88,
    "moq": 75,
    "leadDays": 18,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 22,
    "automation": 78,
    "pricePerUnit": 155,
    "rating": 4.1,
    "orders": 17,
    "desc": "支持 SMT 线 工艺，最小起订 75 台，常规交期 18 天。",
    "descEn": "Supports SMT process, MOQ 75 units, lead time 18 days."
   },
   {
    "id": "LN3002",
    "name": "星辰机甲 测试线 #3",
    "nameEn": "StarMech Test Line #3",
    "type": "测试线",
    "typeEn": "Test",
    "vendor": "星辰机甲",
    "vendorEn": "StarMech",
    "city": "苏州",
    "cityEn": "Suzhou",
    "img": "assets/img/gen/product/production_line_03.svg",
    "status": "满产",
    "statusEn": "Full",
    "dailyCapacity": 320,
    "monthCapacity": 8320,
    "utilization": 95,
    "moq": 100,
    "leadDays": 21,
    "certs": [
     "ISO9001"
    ],
    "workers": 26,
    "automation": 82,
    "pricePerUnit": 190,
    "rating": 4.2,
    "orders": 22,
    "desc": "支持 测试线 工艺，最小起订 100 台，常规交期 21 天。",
    "descEn": "Supports Test process, MOQ 100 units, lead time 21 days."
   },
   {
    "id": "LN3003",
    "name": "铁甲开源 包装线 #4",
    "nameEn": "IronOpen Packing Line #4",
    "type": "包装线",
    "typeEn": "Packing",
    "vendor": "铁甲开源",
    "vendorEn": "IronOpen",
    "city": "成都",
    "cityEn": "Chengdu",
    "img": "assets/img/gen/product/production_line_04.svg",
    "status": "维保",
    "statusEn": "Maintenance",
    "dailyCapacity": 380,
    "monthCapacity": 9880,
    "utilization": 40,
    "moq": 125,
    "leadDays": 24,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 30,
    "automation": 60,
    "pricePerUnit": 225,
    "rating": 4.3,
    "orders": 27,
    "desc": "支持 包装线 工艺，最小起订 125 台，常规交期 24 天。",
    "descEn": "Supports Packing process, MOQ 125 units, lead time 24 days."
   },
   {
    "id": "LN3004",
    "name": "灵犀机器人 机加线 #5",
    "nameEn": "Lingxi Machining Line #5",
    "type": "机加线",
    "typeEn": "Machining",
    "vendor": "灵犀机器人",
    "vendorEn": "Lingxi",
    "city": "上海",
    "cityEn": "Shanghai",
    "img": "assets/img/gen/product/production_line_05.svg",
    "status": "空闲",
    "statusEn": "Idle",
    "dailyCapacity": 440,
    "monthCapacity": 11440,
    "utilization": 71,
    "moq": 150,
    "leadDays": 27,
    "certs": [
     "ISO9001"
    ],
    "workers": 34,
    "automation": 55,
    "pricePerUnit": 260,
    "rating": 4.4,
    "orders": 32,
    "desc": "支持 机加线 工艺，最小起订 150 台，常规交期 27 天。",
    "descEn": "Supports Machining process, MOQ 150 units, lead time 27 days."
   },
   {
    "id": "LN3005",
    "name": "智元工场 注塑线 #6",
    "nameEn": "ZhiYuan Injection Line #6",
    "type": "注塑线",
    "typeEn": "Injection",
    "vendor": "智元工场",
    "vendorEn": "ZhiYuan",
    "city": "北京",
    "cityEn": "Beijing",
    "img": "assets/img/gen/product/production_line_06.svg",
    "status": "生产中",
    "statusEn": "Running",
    "dailyCapacity": 500,
    "monthCapacity": 13000,
    "utilization": 83,
    "moq": 175,
    "leadDays": 30,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 38,
    "automation": 70,
    "pricePerUnit": 295,
    "rating": 4.5,
    "orders": 37,
    "desc": "支持 注塑线 工艺，最小起订 175 台，常规交期 30 天。",
    "descEn": "Supports Injection process, MOQ 175 units, lead time 30 days."
   },
   {
    "id": "LN3006",
    "name": "红蚁动力 组装线 #7",
    "nameEn": "RedAnt Assembly Line #7",
    "type": "组装线",
    "typeEn": "Assembly",
    "vendor": "红蚁动力",
    "vendorEn": "RedAnt",
    "city": "佛山",
    "cityEn": "Foshan",
    "img": "assets/img/gen/product/production_line_07.svg",
    "status": "满产",
    "statusEn": "Full",
    "dailyCapacity": 560,
    "monthCapacity": 14560,
    "utilization": 58,
    "moq": 200,
    "leadDays": 33,
    "certs": [
     "ISO9001"
    ],
    "workers": 42,
    "automation": 88,
    "pricePerUnit": 330,
    "rating": 4.6,
    "orders": 42,
    "desc": "支持 组装线 工艺，最小起订 200 台，常规交期 33 天。",
    "descEn": "Supports Assembly process, MOQ 200 units, lead time 33 days."
   },
   {
    "id": "LN3007",
    "name": "极客造物 SMT 线 #8",
    "nameEn": "GeekMake SMT Line #8",
    "type": "SMT 线",
    "typeEn": "SMT",
    "vendor": "极客造物",
    "vendorEn": "GeekMake",
    "city": "宁波",
    "cityEn": "Ningbo",
    "img": "assets/img/gen/product/production_line_08.svg",
    "status": "维保",
    "statusEn": "Maintenance",
    "dailyCapacity": 620,
    "monthCapacity": 16120,
    "utilization": 92,
    "moq": 225,
    "leadDays": 36,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 46,
    "automation": 65,
    "pricePerUnit": 365,
    "rating": 4.7,
    "orders": 47,
    "desc": "支持 SMT 线 工艺，最小起订 225 台，常规交期 36 天。",
    "descEn": "Supports SMT process, MOQ 225 units, lead time 36 days."
   },
   {
    "id": "LN3008",
    "name": "力控研究所 测试线 #9",
    "nameEn": "ForceLab Test Line #9",
    "type": "测试线",
    "typeEn": "Test",
    "vendor": "力控研究所",
    "vendorEn": "ForceLab",
    "city": "重庆",
    "cityEn": "Chongqing",
    "img": "assets/img/gen/product/production_line_01.svg",
    "status": "空闲",
    "statusEn": "Idle",
    "dailyCapacity": 680,
    "monthCapacity": 17680,
    "utilization": 76,
    "moq": 250,
    "leadDays": 39,
    "certs": [
     "ISO9001"
    ],
    "workers": 50,
    "automation": 72,
    "pricePerUnit": 400,
    "rating": 4.8,
    "orders": 52,
    "desc": "支持 测试线 工艺，最小起订 250 台，常规交期 39 天。",
    "descEn": "Supports Test process, MOQ 250 units, lead time 39 days."
   },
   {
    "id": "LN3009",
    "name": "深蓝精密 包装线 #10",
    "nameEn": "DeepBlue Packing Line #10",
    "type": "包装线",
    "typeEn": "Packing",
    "vendor": "深蓝精密",
    "vendorEn": "DeepBlue",
    "city": "武汉",
    "cityEn": "Wuhan",
    "img": "assets/img/gen/product/production_line_02.svg",
    "status": "生产中",
    "statusEn": "Running",
    "dailyCapacity": 740,
    "monthCapacity": 19240,
    "utilization": 67,
    "moq": 275,
    "leadDays": 42,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 54,
    "automation": 58,
    "pricePerUnit": 435,
    "rating": 4.9,
    "orders": 57,
    "desc": "支持 包装线 工艺，最小起订 275 台，常规交期 42 天。",
    "descEn": "Supports Packing process, MOQ 275 units, lead time 42 days."
   },
   {
    "id": "LN3010",
    "name": "华工装备 机加线 #11",
    "nameEn": "HuaGong Machining Line #11",
    "type": "机加线",
    "typeEn": "Machining",
    "vendor": "华工装备",
    "vendorEn": "HuaGong",
    "city": "西安",
    "cityEn": "Xi'an",
    "img": "assets/img/gen/product/production_line_03.svg",
    "status": "满产",
    "statusEn": "Full",
    "dailyCapacity": 800,
    "monthCapacity": 20800,
    "utilization": 89,
    "moq": 300,
    "leadDays": 45,
    "certs": [
     "ISO9001"
    ],
    "workers": 58,
    "automation": 80,
    "pricePerUnit": 470,
    "rating": 4.0,
    "orders": 62,
    "desc": "支持 机加线 工艺，最小起订 300 台，常规交期 45 天。",
    "descEn": "Supports Machining process, MOQ 300 units, lead time 45 days."
   },
   {
    "id": "LN3011",
    "name": "珠三角模具 注塑线 #12",
    "nameEn": "PRDMold Injection Line #12",
    "type": "注塑线",
    "typeEn": "Injection",
    "vendor": "珠三角模具",
    "vendorEn": "PRDMold",
    "city": "长沙",
    "cityEn": "Changsha",
    "img": "assets/img/gen/product/production_line_04.svg",
    "status": "维保",
    "statusEn": "Maintenance",
    "dailyCapacity": 860,
    "monthCapacity": 22360,
    "utilization": 54,
    "moq": 325,
    "leadDays": 48,
    "certs": [
     "ISO9001",
     "ISO14001"
    ],
    "workers": 62,
    "automation": 50,
    "pricePerUnit": 505,
    "rating": 4.1,
    "orders": 67,
    "desc": "支持 注塑线 工艺，最小起订 325 台，常规交期 48 天。",
    "descEn": "Supports Injection process, MOQ 325 units, lead time 48 days."
   }
  ],
  "capacities": [
   {
    "id": "CP4000",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "month": "2026-01",
    "total": 5200,
    "booked": 2080,
    "free": 3120,
    "rate": 40,
    "img": "assets/img/gen/product/production_line_01.svg"
   },
   {
    "id": "CP4001",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "month": "2026-02",
    "total": 6760,
    "booked": 3042,
    "free": 3717,
    "rate": 45,
    "img": "assets/img/gen/product/production_line_02.svg"
   },
   {
    "id": "CP4002",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "month": "2026-03",
    "total": 8320,
    "booked": 4160,
    "free": 4160,
    "rate": 50,
    "img": "assets/img/gen/product/production_line_03.svg"
   },
   {
    "id": "CP4003",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "month": "2026-04",
    "total": 9880,
    "booked": 5434,
    "free": 4446,
    "rate": 55,
    "img": "assets/img/gen/product/production_line_04.svg"
   },
   {
    "id": "CP4004",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "month": "2026-05",
    "total": 11440,
    "booked": 6864,
    "free": 4576,
    "rate": 60,
    "img": "assets/img/gen/product/production_line_05.svg"
   },
   {
    "id": "CP4005",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "month": "2026-06",
    "total": 13000,
    "booked": 8450,
    "free": 4550,
    "rate": 65,
    "img": "assets/img/gen/product/production_line_06.svg"
   },
   {
    "id": "CP4006",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "month": "2026-07",
    "total": 14560,
    "booked": 10192,
    "free": 4367,
    "rate": 70,
    "img": "assets/img/gen/product/production_line_07.svg"
   },
   {
    "id": "CP4007",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "month": "2026-08",
    "total": 16120,
    "booked": 12090,
    "free": 4029,
    "rate": 75,
    "img": "assets/img/gen/product/production_line_08.svg"
   },
   {
    "id": "CP4008",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "month": "2026-09",
    "total": 17680,
    "booked": 14144,
    "free": 3535,
    "rate": 80,
    "img": "assets/img/gen/product/production_line_01.svg"
   },
   {
    "id": "CP4009",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "month": "2026-10",
    "total": 19240,
    "booked": 16354,
    "free": 2885,
    "rate": 85,
    "img": "assets/img/gen/product/production_line_02.svg"
   }
  ],
  "orders": [
   {
    "id": "MO5000",
    "title": "蓝鲸智造 量产订单 #1",
    "titleEn": "BlueWhale mass production order #1",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "lineId": "LN3000",
    "vendor": "蓝鲸智造",
    "vendorEn": "BlueWhale",
    "img": "assets/img/gen/product/production_assembly_01.svg",
    "status": "待排产",
    "statusEn": "Queued",
    "qty": 50,
    "done": 10,
    "progress": 15,
    "startDate": "2026-01-01",
    "dueDate": "2026-01-20",
    "budget": "¥6,000",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "doing",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5001",
    "title": "开源纪元 量产订单 #2",
    "titleEn": "OpenEra mass production order #2",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "lineId": "LN3001",
    "vendor": "开源纪元",
    "vendorEn": "OpenEra",
    "img": "assets/img/gen/product/production_assembly_02.svg",
    "status": "备料中",
    "statusEn": "Sourcing",
    "qty": 200,
    "done": 72,
    "progress": 30,
    "startDate": "2026-02-01",
    "dueDate": "2026-02-20",
    "budget": "¥26,000",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5002",
    "title": "星辰机甲 量产订单 #3",
    "titleEn": "StarMech mass production order #3",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "lineId": "LN3002",
    "vendor": "星辰机甲",
    "vendorEn": "StarMech",
    "img": "assets/img/gen/product/production_assembly_03.svg",
    "status": "生产中",
    "statusEn": "Running",
    "qty": 350,
    "done": 182,
    "progress": 55,
    "startDate": "2026-03-01",
    "dueDate": "2026-03-20",
    "budget": "¥49,000",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5003",
    "title": "铁甲开源 量产订单 #4",
    "titleEn": "IronOpen mass production order #4",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "lineId": "LN3003",
    "vendor": "铁甲开源",
    "vendorEn": "IronOpen",
    "img": "assets/img/gen/product/production_assembly_04.svg",
    "status": "质检中",
    "statusEn": "QC",
    "qty": 500,
    "done": 339,
    "progress": 70,
    "startDate": "2026-04-01",
    "dueDate": "2026-04-20",
    "budget": "¥75,000",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5004",
    "title": "灵犀机器人 量产订单 #5",
    "titleEn": "Lingxi mass production order #5",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "lineId": "LN3004",
    "vendor": "灵犀机器人",
    "vendorEn": "Lingxi",
    "img": "assets/img/gen/product/production_assembly_05.svg",
    "status": "已完工",
    "statusEn": "Done",
    "qty": 650,
    "done": 546,
    "progress": 100,
    "startDate": "2026-05-01",
    "dueDate": "2026-05-20",
    "budget": "¥104,000",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5005",
    "title": "智元工场 量产订单 #6",
    "titleEn": "ZhiYuan mass production order #6",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "lineId": "LN3005",
    "vendor": "智元工场",
    "vendorEn": "ZhiYuan",
    "img": "assets/img/gen/product/production_assembly_06.svg",
    "status": "已发货",
    "statusEn": "Shipped",
    "qty": 800,
    "done": 160,
    "progress": 100,
    "startDate": "2026-06-01",
    "dueDate": "2026-06-20",
    "budget": "¥136,000",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "done",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5006",
    "title": "红蚁动力 量产订单 #7",
    "titleEn": "RedAnt mass production order #7",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "lineId": "LN3006",
    "vendor": "红蚁动力",
    "vendorEn": "RedAnt",
    "img": "assets/img/gen/product/production_assembly_07.svg",
    "status": "待排产",
    "statusEn": "Queued",
    "qty": 950,
    "done": 342,
    "progress": 15,
    "startDate": "2026-07-01",
    "dueDate": "2026-07-20",
    "budget": "¥171,000",
    "owner": "红蚁动力",
    "ownerEn": "RedAnt",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "doing",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5007",
    "title": "极客造物 量产订单 #8",
    "titleEn": "GeekMake mass production order #8",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "lineId": "LN3007",
    "vendor": "极客造物",
    "vendorEn": "GeekMake",
    "img": "assets/img/gen/product/production_assembly_08.svg",
    "status": "备料中",
    "statusEn": "Sourcing",
    "qty": 1100,
    "done": 572,
    "progress": 30,
    "startDate": "2026-08-01",
    "dueDate": "2026-08-20",
    "budget": "¥209,000",
    "owner": "极客造物",
    "ownerEn": "GeekMake",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5008",
    "title": "力控研究所 量产订单 #9",
    "titleEn": "ForceLab mass production order #9",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "lineId": "LN3008",
    "vendor": "力控研究所",
    "vendorEn": "ForceLab",
    "img": "assets/img/gen/product/production_assembly_01.svg",
    "status": "生产中",
    "statusEn": "Running",
    "qty": 50,
    "done": 34,
    "progress": 55,
    "startDate": "2026-09-01",
    "dueDate": "2026-09-20",
    "budget": "¥10,000",
    "owner": "力控研究所",
    "ownerEn": "ForceLab",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5009",
    "title": "深蓝精密 量产订单 #10",
    "titleEn": "DeepBlue mass production order #10",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "lineId": "LN3009",
    "vendor": "深蓝精密",
    "vendorEn": "DeepBlue",
    "img": "assets/img/gen/product/production_assembly_02.svg",
    "status": "质检中",
    "statusEn": "QC",
    "qty": 200,
    "done": 168,
    "progress": 70,
    "startDate": "2026-10-01",
    "dueDate": "2026-10-20",
    "budget": "¥42,000",
    "owner": "深蓝精密",
    "ownerEn": "DeepBlue",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5010",
    "title": "华工装备 量产订单 #11",
    "titleEn": "HuaGong mass production order #11",
    "line": "华工装备 机加线 #11",
    "lineEn": "HuaGong Machining Line #11",
    "lineId": "LN3010",
    "vendor": "华工装备",
    "vendorEn": "HuaGong",
    "img": "assets/img/gen/product/production_assembly_03.svg",
    "status": "已完工",
    "statusEn": "Done",
    "qty": 350,
    "done": 70,
    "progress": 100,
    "startDate": "2026-11-01",
    "dueDate": "2026-11-20",
    "budget": "¥77,000",
    "owner": "华工装备",
    "ownerEn": "HuaGong",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5011",
    "title": "珠三角模具 量产订单 #12",
    "titleEn": "PRDMold mass production order #12",
    "line": "珠三角模具 注塑线 #12",
    "lineEn": "PRDMold Injection Line #12",
    "lineId": "LN3011",
    "vendor": "珠三角模具",
    "vendorEn": "PRDMold",
    "img": "assets/img/gen/product/production_assembly_04.svg",
    "status": "已发货",
    "statusEn": "Shipped",
    "qty": 500,
    "done": 180,
    "progress": 100,
    "startDate": "2026-12-01",
    "dueDate": "2026-12-20",
    "budget": "¥115,000",
    "owner": "珠三角模具",
    "ownerEn": "PRDMold",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "done",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5012",
    "title": "蓝鲸智造 量产订单 #13",
    "titleEn": "BlueWhale mass production order #13",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "lineId": "LN3000",
    "vendor": "蓝鲸智造",
    "vendorEn": "BlueWhale",
    "img": "assets/img/gen/product/production_assembly_05.svg",
    "status": "待排产",
    "statusEn": "Queued",
    "qty": 650,
    "done": 338,
    "progress": 15,
    "startDate": "2026-01-01",
    "dueDate": "2026-01-20",
    "budget": "¥156,000",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_13.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "doing",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5013",
    "title": "开源纪元 量产订单 #14",
    "titleEn": "OpenEra mass production order #14",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "lineId": "LN3001",
    "vendor": "开源纪元",
    "vendorEn": "OpenEra",
    "img": "assets/img/gen/product/production_assembly_06.svg",
    "status": "备料中",
    "statusEn": "Sourcing",
    "qty": 800,
    "done": 544,
    "progress": 30,
    "startDate": "2026-02-01",
    "dueDate": "2026-02-20",
    "budget": "¥200,000",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_14.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5014",
    "title": "星辰机甲 量产订单 #15",
    "titleEn": "StarMech mass production order #15",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "lineId": "LN3002",
    "vendor": "星辰机甲",
    "vendorEn": "StarMech",
    "img": "assets/img/gen/product/production_assembly_07.svg",
    "status": "生产中",
    "statusEn": "Running",
    "qty": 950,
    "done": 798,
    "progress": 55,
    "startDate": "2026-03-01",
    "dueDate": "2026-03-20",
    "budget": "¥247,000",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_15.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5015",
    "title": "铁甲开源 量产订单 #16",
    "titleEn": "IronOpen mass production order #16",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "lineId": "LN3003",
    "vendor": "铁甲开源",
    "vendorEn": "IronOpen",
    "img": "assets/img/gen/product/production_assembly_08.svg",
    "status": "质检中",
    "statusEn": "QC",
    "qty": 1100,
    "done": 220,
    "progress": 70,
    "startDate": "2026-04-01",
    "dueDate": "2026-04-20",
    "budget": "¥297,000",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_16.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5016",
    "title": "灵犀机器人 量产订单 #17",
    "titleEn": "Lingxi mass production order #17",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "lineId": "LN3004",
    "vendor": "灵犀机器人",
    "vendorEn": "Lingxi",
    "img": "assets/img/gen/product/production_assembly_01.svg",
    "status": "已完工",
    "statusEn": "Done",
    "qty": 50,
    "done": 18,
    "progress": 100,
    "startDate": "2026-05-01",
    "dueDate": "2026-05-20",
    "budget": "¥14,000",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_17.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5017",
    "title": "智元工场 量产订单 #18",
    "titleEn": "ZhiYuan mass production order #18",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "lineId": "LN3005",
    "vendor": "智元工场",
    "vendorEn": "ZhiYuan",
    "img": "assets/img/gen/product/production_assembly_02.svg",
    "status": "已发货",
    "statusEn": "Shipped",
    "qty": 200,
    "done": 104,
    "progress": 100,
    "startDate": "2026-06-01",
    "dueDate": "2026-06-20",
    "budget": "¥58,000",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_18.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "done",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5018",
    "title": "红蚁动力 量产订单 #19",
    "titleEn": "RedAnt mass production order #19",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "lineId": "LN3006",
    "vendor": "红蚁动力",
    "vendorEn": "RedAnt",
    "img": "assets/img/gen/product/production_assembly_03.svg",
    "status": "待排产",
    "statusEn": "Queued",
    "qty": 350,
    "done": 237,
    "progress": 15,
    "startDate": "2026-07-01",
    "dueDate": "2026-07-20",
    "budget": "¥105,000",
    "owner": "红蚁动力",
    "ownerEn": "RedAnt",
    "avatar": "assets/img/gen/avatar/user_19.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "doing",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5019",
    "title": "极客造物 量产订单 #20",
    "titleEn": "GeekMake mass production order #20",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "lineId": "LN3007",
    "vendor": "极客造物",
    "vendorEn": "GeekMake",
    "img": "assets/img/gen/product/production_assembly_04.svg",
    "status": "备料中",
    "statusEn": "Sourcing",
    "qty": 500,
    "done": 420,
    "progress": 30,
    "startDate": "2026-08-01",
    "dueDate": "2026-08-20",
    "budget": "¥155,000",
    "owner": "极客造物",
    "ownerEn": "GeekMake",
    "avatar": "assets/img/gen/avatar/user_20.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "doing",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5020",
    "title": "力控研究所 量产订单 #21",
    "titleEn": "ForceLab mass production order #21",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "lineId": "LN3008",
    "vendor": "力控研究所",
    "vendorEn": "ForceLab",
    "img": "assets/img/gen/product/production_assembly_05.svg",
    "status": "生产中",
    "statusEn": "Running",
    "qty": 650,
    "done": 130,
    "progress": 55,
    "startDate": "2026-09-01",
    "dueDate": "2026-09-20",
    "budget": "¥208,000",
    "owner": "力控研究所",
    "ownerEn": "ForceLab",
    "avatar": "assets/img/gen/avatar/user_21.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "doing",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5021",
    "title": "深蓝精密 量产订单 #22",
    "titleEn": "DeepBlue mass production order #22",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "lineId": "LN3009",
    "vendor": "深蓝精密",
    "vendorEn": "DeepBlue",
    "img": "assets/img/gen/product/production_assembly_06.svg",
    "status": "质检中",
    "statusEn": "QC",
    "qty": 800,
    "done": 288,
    "progress": 70,
    "startDate": "2026-10-01",
    "dueDate": "2026-10-20",
    "budget": "¥264,000",
    "owner": "深蓝精密",
    "ownerEn": "DeepBlue",
    "avatar": "assets/img/gen/avatar/user_22.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "doing",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5022",
    "title": "华工装备 量产订单 #23",
    "titleEn": "HuaGong mass production order #23",
    "line": "华工装备 机加线 #11",
    "lineEn": "HuaGong Machining Line #11",
    "lineId": "LN3010",
    "vendor": "华工装备",
    "vendorEn": "HuaGong",
    "img": "assets/img/gen/product/production_assembly_07.svg",
    "status": "已完工",
    "statusEn": "Done",
    "qty": 950,
    "done": 494,
    "progress": 100,
    "startDate": "2026-11-01",
    "dueDate": "2026-11-20",
    "budget": "¥323,000",
    "owner": "华工装备",
    "ownerEn": "HuaGong",
    "avatar": "assets/img/gen/avatar/user_23.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "doing",
      "date": "2026-01-25"
     }
    ]
   },
   {
    "id": "MO5023",
    "title": "珠三角模具 量产订单 #24",
    "titleEn": "PRDMold mass production order #24",
    "line": "珠三角模具 注塑线 #12",
    "lineEn": "PRDMold Injection Line #12",
    "lineId": "LN3011",
    "vendor": "珠三角模具",
    "vendorEn": "PRDMold",
    "img": "assets/img/gen/product/production_assembly_08.svg",
    "status": "已发货",
    "statusEn": "Shipped",
    "qty": 1100,
    "done": 747,
    "progress": 100,
    "startDate": "2026-12-01",
    "dueDate": "2026-12-20",
    "budget": "¥385,000",
    "owner": "珠三角模具",
    "ownerEn": "PRDMold",
    "avatar": "assets/img/gen/avatar/user_24.svg",
    "nodes": [
     {
      "name": "备料",
      "nameEn": "Sourcing",
      "status": "done",
      "date": "2026-01-05"
     },
     {
      "name": "SMT",
      "nameEn": "SMT",
      "status": "done",
      "date": "2026-01-12"
     },
     {
      "name": "装配",
      "nameEn": "Assembly",
      "status": "done",
      "date": "2026-01-18"
     },
     {
      "name": "老化",
      "nameEn": "Burn-in",
      "status": "done",
      "date": "2026-01-22"
     },
     {
      "name": "质检",
      "nameEn": "QC",
      "status": "done",
      "date": "2026-01-25"
     }
    ]
   }
  ],
  "boms": [
   {
    "id": "BM6000",
    "name": "蓝鲸智造 整机 BOM #1",
    "nameEn": "BlueWhale full BOM #1",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "total": 42,
    "ready": 30,
    "missing": 6,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6001",
    "name": "开源纪元 整机 BOM #2",
    "nameEn": "OpenEra full BOM #2",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "total": 48,
    "ready": 34,
    "missing": 7,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6002",
    "name": "星辰机甲 整机 BOM #3",
    "nameEn": "StarMech full BOM #3",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "total": 54,
    "ready": 38,
    "missing": 8,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6003",
    "name": "铁甲开源 整机 BOM #4",
    "nameEn": "IronOpen full BOM #4",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "total": 60,
    "ready": 42,
    "missing": 9,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6004",
    "name": "灵犀机器人 整机 BOM #5",
    "nameEn": "Lingxi full BOM #5",
    "img": "assets/img/gen/product/design_bom_05.svg",
    "total": 66,
    "ready": 46,
    "missing": 10,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6005",
    "name": "智元工场 整机 BOM #6",
    "nameEn": "ZhiYuan full BOM #6",
    "img": "assets/img/gen/product/design_bom_06.svg",
    "total": 72,
    "ready": 50,
    "missing": 6,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6006",
    "name": "红蚁动力 整机 BOM #7",
    "nameEn": "RedAnt full BOM #7",
    "img": "assets/img/gen/product/design_bom_07.svg",
    "total": 78,
    "ready": 54,
    "missing": 7,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6007",
    "name": "极客造物 整机 BOM #8",
    "nameEn": "GeekMake full BOM #8",
    "img": "assets/img/gen/product/design_bom_08.svg",
    "total": 84,
    "ready": 58,
    "missing": 8,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6008",
    "name": "力控研究所 整机 BOM #9",
    "nameEn": "ForceLab full BOM #9",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "total": 90,
    "ready": 62,
    "missing": 9,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6009",
    "name": "深蓝精密 整机 BOM #10",
    "nameEn": "DeepBlue full BOM #10",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "total": 96,
    "ready": 66,
    "missing": 10,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6010",
    "name": "华工装备 整机 BOM #11",
    "nameEn": "HuaGong full BOM #11",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "total": 102,
    "ready": 70,
    "missing": 6,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6011",
    "name": "珠三角模具 整机 BOM #12",
    "nameEn": "PRDMold full BOM #12",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "total": 108,
    "ready": 74,
    "missing": 7,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   }
  ],
  "suppliers": [
   {
    "id": "SP7000",
    "name": "蓝鲸智造 代工厂",
    "nameEn": "BlueWhale OEM",
    "tag": "代工厂",
    "tagEn": "OEM",
    "city": "深圳",
    "cityEn": "Shenzhen",
    "img": "assets/img/gen/product/production_equipment_01.svg",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "rating": 4.0,
    "orders": 20,
    "onTime": 88,
    "moq": 30,
    "leadDays": 10,
    "certs": [
     "ISO9001"
    ],
    "desc": "专注代工厂，年产能 20 万件，服务于多家机器人厂商。",
    "descEn": "Focused on OEM, annual capacity 200k units."
   },
   {
    "id": "SP7001",
    "name": "开源纪元 模具厂",
    "nameEn": "OpenEra Tooling",
    "tag": "模具厂",
    "tagEn": "Tooling",
    "city": "东莞",
    "cityEn": "Dongguan",
    "img": "assets/img/gen/product/production_equipment_02.svg",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "rating": 4.1,
    "orders": 28,
    "onTime": 89,
    "moq": 50,
    "leadDays": 12,
    "certs": [
     "ISO9001",
     "IATF16949"
    ],
    "desc": "专注模具厂，年产能 26 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Tooling, annual capacity 260k units."
   },
   {
    "id": "SP7002",
    "name": "星辰机甲 PCBA",
    "nameEn": "StarMech PCBA",
    "tag": "PCBA",
    "tagEn": "PCBA",
    "city": "苏州",
    "cityEn": "Suzhou",
    "img": "assets/img/gen/product/production_equipment_03.svg",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "rating": 4.2,
    "orders": 36,
    "onTime": 90,
    "moq": 70,
    "leadDays": 14,
    "certs": [
     "ISO9001",
     "IATF16949",
     "RoHS"
    ],
    "desc": "专注PCBA，年产能 32 万件，服务于多家机器人厂商。",
    "descEn": "Focused on PCBA, annual capacity 320k units."
   },
   {
    "id": "SP7003",
    "name": "铁甲开源 钣金",
    "nameEn": "IronOpen Sheet metal",
    "tag": "钣金",
    "tagEn": "Sheet metal",
    "city": "成都",
    "cityEn": "Chengdu",
    "img": "assets/img/gen/product/production_equipment_04.svg",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "rating": 4.3,
    "orders": 44,
    "onTime": 91,
    "moq": 90,
    "leadDays": 16,
    "certs": [
     "ISO9001"
    ],
    "desc": "专注钣金，年产能 38 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Sheet metal, annual capacity 380k units."
   },
   {
    "id": "SP7004",
    "name": "灵犀机器人 注塑",
    "nameEn": "Lingxi Injection",
    "tag": "注塑",
    "tagEn": "Injection",
    "city": "上海",
    "cityEn": "Shanghai",
    "img": "assets/img/gen/product/production_equipment_05.svg",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "rating": 4.4,
    "orders": 52,
    "onTime": 92,
    "moq": 110,
    "leadDays": 18,
    "certs": [
     "ISO9001",
     "IATF16949"
    ],
    "desc": "专注注塑，年产能 44 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Injection, annual capacity 440k units."
   },
   {
    "id": "SP7005",
    "name": "智元工场 电机",
    "nameEn": "ZhiYuan Motor",
    "tag": "电机",
    "tagEn": "Motor",
    "city": "北京",
    "cityEn": "Beijing",
    "img": "assets/img/gen/product/production_equipment_06.svg",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "rating": 4.5,
    "orders": 60,
    "onTime": 93,
    "moq": 130,
    "leadDays": 20,
    "certs": [
     "ISO9001",
     "IATF16949",
     "RoHS"
    ],
    "desc": "专注电机，年产能 50 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Motor, annual capacity 500k units."
   },
   {
    "id": "SP7006",
    "name": "红蚁动力 代工厂",
    "nameEn": "RedAnt OEM",
    "tag": "代工厂",
    "tagEn": "OEM",
    "city": "佛山",
    "cityEn": "Foshan",
    "img": "assets/img/gen/product/production_equipment_07.svg",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "rating": 4.6,
    "orders": 68,
    "onTime": 94,
    "moq": 150,
    "leadDays": 22,
    "certs": [
     "ISO9001"
    ],
    "desc": "专注代工厂，年产能 56 万件，服务于多家机器人厂商。",
    "descEn": "Focused on OEM, annual capacity 560k units."
   },
   {
    "id": "SP7007",
    "name": "极客造物 模具厂",
    "nameEn": "GeekMake Tooling",
    "tag": "模具厂",
    "tagEn": "Tooling",
    "city": "宁波",
    "cityEn": "Ningbo",
    "img": "assets/img/gen/product/production_equipment_08.svg",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "rating": 4.7,
    "orders": 76,
    "onTime": 95,
    "moq": 170,
    "leadDays": 24,
    "certs": [
     "ISO9001",
     "IATF16949"
    ],
    "desc": "专注模具厂，年产能 62 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Tooling, annual capacity 620k units."
   },
   {
    "id": "SP7008",
    "name": "力控研究所 PCBA",
    "nameEn": "ForceLab PCBA",
    "tag": "PCBA",
    "tagEn": "PCBA",
    "city": "重庆",
    "cityEn": "Chongqing",
    "img": "assets/img/gen/product/production_equipment_01.svg",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "rating": 4.8,
    "orders": 84,
    "onTime": 96,
    "moq": 190,
    "leadDays": 26,
    "certs": [
     "ISO9001",
     "IATF16949",
     "RoHS"
    ],
    "desc": "专注PCBA，年产能 68 万件，服务于多家机器人厂商。",
    "descEn": "Focused on PCBA, annual capacity 680k units."
   },
   {
    "id": "SP7009",
    "name": "深蓝精密 钣金",
    "nameEn": "DeepBlue Sheet metal",
    "tag": "钣金",
    "tagEn": "Sheet metal",
    "city": "武汉",
    "cityEn": "Wuhan",
    "img": "assets/img/gen/product/production_equipment_02.svg",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "rating": 4.9,
    "orders": 92,
    "onTime": 97,
    "moq": 210,
    "leadDays": 28,
    "certs": [
     "ISO9001"
    ],
    "desc": "专注钣金，年产能 74 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Sheet metal, annual capacity 740k units."
   },
   {
    "id": "SP7010",
    "name": "华工装备 注塑",
    "nameEn": "HuaGong Injection",
    "tag": "注塑",
    "tagEn": "Injection",
    "city": "西安",
    "cityEn": "Xi'an",
    "img": "assets/img/gen/product/production_equipment_03.svg",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "rating": 4.0,
    "orders": 100,
    "onTime": 88,
    "moq": 230,
    "leadDays": 30,
    "certs": [
     "ISO9001",
     "IATF16949"
    ],
    "desc": "专注注塑，年产能 80 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Injection, annual capacity 800k units."
   },
   {
    "id": "SP7011",
    "name": "珠三角模具 电机",
    "nameEn": "PRDMold Motor",
    "tag": "电机",
    "tagEn": "Motor",
    "city": "长沙",
    "cityEn": "Changsha",
    "img": "assets/img/gen/product/production_equipment_04.svg",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "rating": 4.1,
    "orders": 108,
    "onTime": 89,
    "moq": 250,
    "leadDays": 32,
    "certs": [
     "ISO9001",
     "IATF16949",
     "RoHS"
    ],
    "desc": "专注电机，年产能 86 万件，服务于多家机器人厂商。",
    "descEn": "Focused on Motor, annual capacity 860k units."
   }
  ],
  "processes": [
   {
    "id": "PR8000",
    "name": "SMT 贴片",
    "nameEn": "SMT",
    "img": "assets/img/gen/product/production_smt_01.svg",
    "stdHours": 0.5,
    "yield": 99.2,
    "equip": "贴片机",
    "equipEn": "Mounter",
    "desc": "SMT 贴片 标准工时 0.5 小时，目标良率 99.2%。",
    "descEn": "SMT standard hours 0.5, target yield 99.2%."
   },
   {
    "id": "PR8001",
    "name": "DIP 插件",
    "nameEn": "DIP",
    "img": "assets/img/gen/product/production_smt_02.svg",
    "stdHours": 0.9,
    "yield": 98.9,
    "equip": "回流焊",
    "equipEn": "Reflow",
    "desc": "DIP 插件 标准工时 0.9 小时，目标良率 98.9%。",
    "descEn": "DIP standard hours 0.9, target yield 98.9%."
   },
   {
    "id": "PR8002",
    "name": "三防涂覆",
    "nameEn": "Conformal coating",
    "img": "assets/img/gen/product/production_smt_03.svg",
    "stdHours": 1.3,
    "yield": 98.60000000000001,
    "equip": "AOI",
    "equipEn": "AOI",
    "desc": "三防涂覆 标准工时 1.3 小时，目标良率 98.6%。",
    "descEn": "Conformal coating standard hours 1.3, target yield 98.6%."
   },
   {
    "id": "PR8003",
    "name": "整机装配",
    "nameEn": "Assembly",
    "img": "assets/img/gen/product/production_assembly_04.svg",
    "stdHours": 1.7,
    "yield": 98.3,
    "equip": "贴片机",
    "equipEn": "Mounter",
    "desc": "整机装配 标准工时 1.7 小时，目标良率 98.3%。",
    "descEn": "Assembly standard hours 1.7, target yield 98.3%."
   },
   {
    "id": "PR8004",
    "name": "老化测试",
    "nameEn": "Burn-in",
    "img": "assets/img/gen/product/production_assembly_05.svg",
    "stdHours": 2.1,
    "yield": 98.0,
    "equip": "回流焊",
    "equipEn": "Reflow",
    "desc": "老化测试 标准工时 2.1 小时，目标良率 98.0%。",
    "descEn": "Burn-in standard hours 2.1, target yield 98.0%."
   },
   {
    "id": "PR8005",
    "name": "功能测试",
    "nameEn": "Functional test",
    "img": "assets/img/gen/product/production_qc_06.svg",
    "stdHours": 2.5,
    "yield": 97.7,
    "equip": "AOI",
    "equipEn": "AOI",
    "desc": "功能测试 标准工时 2.5 小时，目标良率 97.7%。",
    "descEn": "Functional test standard hours 2.5, target yield 97.7%."
   },
   {
    "id": "PR8006",
    "name": "安全测试",
    "nameEn": "Safety test",
    "img": "assets/img/gen/product/production_qc_07.svg",
    "stdHours": 2.9,
    "yield": 97.4,
    "equip": "贴片机",
    "equipEn": "Mounter",
    "desc": "安全测试 标准工时 2.9 小时，目标良率 97.4%。",
    "descEn": "Safety test standard hours 2.9, target yield 97.4%."
   },
   {
    "id": "PR8007",
    "name": "包装入库",
    "nameEn": "Packing",
    "img": "assets/img/gen/product/production_qc_08.svg",
    "stdHours": 3.3,
    "yield": 97.10000000000001,
    "equip": "回流焊",
    "equipEn": "Reflow",
    "desc": "包装入库 标准工时 3.3 小时，目标良率 97.1%。",
    "descEn": "Packing standard hours 3.3, target yield 97.1%."
   },
   {
    "id": "PR8008",
    "name": "首件确认",
    "nameEn": "FAI",
    "img": "assets/img/gen/product/production_qc_01.svg",
    "stdHours": 3.7,
    "yield": 96.8,
    "equip": "AOI",
    "equipEn": "AOI",
    "desc": "首件确认 标准工时 3.7 小时，目标良率 96.8%。",
    "descEn": "FAI standard hours 3.7, target yield 96.8%."
   },
   {
    "id": "PR8009",
    "name": "量产放行",
    "nameEn": "Release",
    "img": "assets/img/gen/product/production_qc_02.svg",
    "stdHours": 4.1,
    "yield": 96.5,
    "equip": "贴片机",
    "equipEn": "Mounter",
    "desc": "量产放行 标准工时 4.1 小时，目标良率 96.5%。",
    "descEn": "Release standard hours 4.1, target yield 96.5%."
   }
  ],
  "qc": [
   {
    "id": "QC9000",
    "order": "MO5000",
    "title": "蓝鲸智造 批次质检报告 #1",
    "titleEn": "BlueWhale batch QC report #1",
    "img": "assets/img/gen/product/production_qc_01.svg",
    "sampled": 32,
    "passed": 30,
    "failed": 2,
    "yield": 93.0,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-01-10",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9001",
    "order": "MO5001",
    "title": "开源纪元 批次质检报告 #2",
    "titleEn": "OpenEra batch QC report #2",
    "img": "assets/img/gen/product/production_qc_02.svg",
    "sampled": 36,
    "passed": 34,
    "failed": 2,
    "yield": 93.5,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-02-11",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9002",
    "order": "MO5002",
    "title": "星辰机甲 批次质检报告 #3",
    "titleEn": "StarMech batch QC report #3",
    "img": "assets/img/gen/product/production_qc_03.svg",
    "sampled": 40,
    "passed": 38,
    "failed": 2,
    "yield": 94.0,
    "result": "让步接收",
    "resultEn": "Concession",
    "date": "2026-03-12",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9003",
    "order": "MO5003",
    "title": "铁甲开源 批次质检报告 #4",
    "titleEn": "IronOpen batch QC report #4",
    "img": "assets/img/gen/product/production_qc_04.svg",
    "sampled": 44,
    "passed": 42,
    "failed": 2,
    "yield": 94.5,
    "result": "不合格",
    "resultEn": "Fail",
    "date": "2026-04-13",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": false
     }
    ]
   },
   {
    "id": "QC9004",
    "order": "MO5004",
    "title": "灵犀机器人 批次质检报告 #5",
    "titleEn": "Lingxi batch QC report #5",
    "img": "assets/img/gen/product/production_qc_05.svg",
    "sampled": 48,
    "passed": 46,
    "failed": 2,
    "yield": 95.0,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-05-14",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9005",
    "order": "MO5005",
    "title": "智元工场 批次质检报告 #6",
    "titleEn": "ZhiYuan batch QC report #6",
    "img": "assets/img/gen/product/production_qc_06.svg",
    "sampled": 52,
    "passed": 50,
    "failed": 2,
    "yield": 95.5,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-06-15",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9006",
    "order": "MO5006",
    "title": "红蚁动力 批次质检报告 #7",
    "titleEn": "RedAnt batch QC report #7",
    "img": "assets/img/gen/product/production_qc_07.svg",
    "sampled": 56,
    "passed": 54,
    "failed": 2,
    "yield": 96.0,
    "result": "让步接收",
    "resultEn": "Concession",
    "date": "2026-07-16",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9007",
    "order": "MO5007",
    "title": "极客造物 批次质检报告 #8",
    "titleEn": "GeekMake batch QC report #8",
    "img": "assets/img/gen/product/production_qc_08.svg",
    "sampled": 60,
    "passed": 58,
    "failed": 2,
    "yield": 96.5,
    "result": "不合格",
    "resultEn": "Fail",
    "date": "2026-08-17",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": false
     }
    ]
   },
   {
    "id": "QC9008",
    "order": "MO5008",
    "title": "力控研究所 批次质检报告 #9",
    "titleEn": "ForceLab batch QC report #9",
    "img": "assets/img/gen/product/production_qc_01.svg",
    "sampled": 64,
    "passed": 62,
    "failed": 2,
    "yield": 97.0,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-09-18",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9009",
    "order": "MO5009",
    "title": "深蓝精密 批次质检报告 #10",
    "titleEn": "DeepBlue batch QC report #10",
    "img": "assets/img/gen/product/production_qc_02.svg",
    "sampled": 68,
    "passed": 66,
    "failed": 2,
    "yield": 97.5,
    "result": "合格",
    "resultEn": "Pass",
    "date": "2026-10-10",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9010",
    "order": "MO5010",
    "title": "华工装备 批次质检报告 #11",
    "titleEn": "HuaGong batch QC report #11",
    "img": "assets/img/gen/product/production_qc_03.svg",
    "sampled": 72,
    "passed": 70,
    "failed": 2,
    "yield": 98.0,
    "result": "让步接收",
    "resultEn": "Concession",
    "date": "2026-11-11",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": true
     }
    ]
   },
   {
    "id": "QC9011",
    "order": "MO5011",
    "title": "珠三角模具 批次质检报告 #12",
    "titleEn": "PRDMold batch QC report #12",
    "img": "assets/img/gen/product/production_qc_04.svg",
    "sampled": 76,
    "passed": 74,
    "failed": 2,
    "yield": 98.5,
    "result": "不合格",
    "resultEn": "Fail",
    "date": "2026-12-12",
    "items": [
     {
      "k": "外观",
      "kEn": "Appearance",
      "v": "无划伤/变形",
      "vEn": "No scratch",
      "ok": true
     },
     {
      "k": "功能",
      "kEn": "Function",
      "v": "全部通过",
      "vEn": "All passed",
      "ok": true
     },
     {
      "k": "跌落",
      "kEn": "Drop",
      "v": "1m 六面通过",
      "vEn": "1m 6 sides",
      "ok": true
     },
     {
      "k": "老化",
      "kEn": "Burn-in",
      "v": "48h 无异常",
      "vEn": "48h OK",
      "ok": false
     }
    ]
   }
  ],
  "equipments": [
   {
    "id": "EQ1100",
    "name": "高速贴片机 #1",
    "nameEn": "Mounter #1",
    "img": "assets/img/gen/product/production_equipment_01.svg",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "status": "运行中",
    "statusEn": "Running",
    "utilization": 88,
    "nextService": "2026-01-15",
    "vendor": "蓝鲸智造",
    "vendorEn": "BlueWhale"
   },
   {
    "id": "EQ1101",
    "name": "回流焊炉 #2",
    "nameEn": "Reflow oven #2",
    "img": "assets/img/gen/product/production_equipment_02.svg",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "status": "待机",
    "statusEn": "Idle",
    "utilization": 62,
    "nextService": "2026-02-15",
    "vendor": "开源纪元",
    "vendorEn": "OpenEra"
   },
   {
    "id": "EQ1102",
    "name": "AOI 检测 #3",
    "nameEn": "AOI #3",
    "img": "assets/img/gen/product/production_equipment_03.svg",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "status": "维保",
    "statusEn": "Maintenance",
    "utilization": 20,
    "nextService": "2026-03-15",
    "vendor": "星辰机甲",
    "vendorEn": "StarMech"
   },
   {
    "id": "EQ1103",
    "name": "三防涂覆线 #4",
    "nameEn": "Coating line #4",
    "img": "assets/img/gen/product/production_equipment_04.svg",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "status": "故障",
    "statusEn": "Fault",
    "utilization": 0,
    "nextService": "2026-04-15",
    "vendor": "铁甲开源",
    "vendorEn": "IronOpen"
   },
   {
    "id": "EQ1104",
    "name": "装配流水线 #5",
    "nameEn": "Assembly line #5",
    "img": "assets/img/gen/product/production_equipment_05.svg",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "status": "运行中",
    "statusEn": "Running",
    "utilization": 75,
    "nextService": "2026-05-15",
    "vendor": "灵犀机器人",
    "vendorEn": "Lingxi"
   },
   {
    "id": "EQ1105",
    "name": "老化房 #6",
    "nameEn": "Burn-in room #6",
    "img": "assets/img/gen/product/production_equipment_06.svg",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "status": "待机",
    "statusEn": "Idle",
    "utilization": 91,
    "nextService": "2026-06-15",
    "vendor": "智元工场",
    "vendorEn": "ZhiYuan"
   },
   {
    "id": "EQ1106",
    "name": "振动测试台 #7",
    "nameEn": "Vibration table #7",
    "img": "assets/img/gen/product/production_equipment_07.svg",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "status": "维保",
    "statusEn": "Maintenance",
    "utilization": 55,
    "nextService": "2026-07-15",
    "vendor": "红蚁动力",
    "vendorEn": "RedAnt"
   },
   {
    "id": "EQ1107",
    "name": "激光打标机 #8",
    "nameEn": "Laser marker #8",
    "img": "assets/img/gen/product/production_equipment_08.svg",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "status": "故障",
    "statusEn": "Fault",
    "utilization": 68,
    "nextService": "2026-08-15",
    "vendor": "极客造物",
    "vendorEn": "GeekMake"
   },
   {
    "id": "EQ1108",
    "name": "自动螺丝机 #9",
    "nameEn": "Auto screwdriver #9",
    "img": "assets/img/gen/product/production_equipment_01.svg",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "status": "运行中",
    "statusEn": "Running",
    "utilization": 82,
    "nextService": "2026-09-15",
    "vendor": "力控研究所",
    "vendorEn": "ForceLab"
   },
   {
    "id": "EQ1109",
    "name": "打包线 #10",
    "nameEn": "Packing line #10",
    "img": "assets/img/gen/product/production_equipment_02.svg",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "status": "待机",
    "statusEn": "Idle",
    "utilization": 47,
    "nextService": "2026-10-15",
    "vendor": "深蓝精密",
    "vendorEn": "DeepBlue"
   },
   {
    "id": "EQ1110",
    "name": "注塑机 #11",
    "nameEn": "Injection machine #11",
    "img": "assets/img/gen/product/production_equipment_03.svg",
    "line": "华工装备 机加线 #11",
    "lineEn": "HuaGong Machining Line #11",
    "status": "维保",
    "statusEn": "Maintenance",
    "utilization": 79,
    "nextService": "2026-11-15",
    "vendor": "华工装备",
    "vendorEn": "HuaGong"
   },
   {
    "id": "EQ1111",
    "name": "CNC 加工中心 #12",
    "nameEn": "CNC center #12",
    "img": "assets/img/gen/product/production_equipment_04.svg",
    "line": "珠三角模具 注塑线 #12",
    "lineEn": "PRDMold Injection Line #12",
    "status": "故障",
    "statusEn": "Fault",
    "utilization": 60,
    "nextService": "2026-12-15",
    "vendor": "珠三角模具",
    "vendorEn": "PRDMold"
   }
  ],
  "workers": [
   {
    "id": "WG1200",
    "name": "甲 班组",
    "nameEn": "Team A",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "count": 12,
    "shift": "白班",
    "shiftEn": "Day",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "output": 180,
    "qualified": 92.0,
    "skills": [
     "装配"
    ],
    "skillsEn": [
     "Assembly"
    ]
   },
   {
    "id": "WG1201",
    "name": "乙 班组",
    "nameEn": "Team B",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "count": 15,
    "shift": "夜班",
    "shiftEn": "Night",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "output": 220,
    "qualified": 92.6,
    "skills": [
     "装配",
     "焊接"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering"
    ]
   },
   {
    "id": "WG1202",
    "name": "丙 班组",
    "nameEn": "Team C",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "count": 18,
    "shift": "白班",
    "shiftEn": "Day",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "output": 260,
    "qualified": 93.2,
    "skills": [
     "装配",
     "焊接",
     "调试"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering",
     "Tuning"
    ]
   },
   {
    "id": "WG1203",
    "name": "丁 班组",
    "nameEn": "Team D",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "count": 21,
    "shift": "夜班",
    "shiftEn": "Night",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "output": 300,
    "qualified": 93.8,
    "skills": [
     "装配",
     "焊接",
     "调试",
     "质检"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering",
     "Tuning",
     "QC"
    ]
   },
   {
    "id": "WG1204",
    "name": "戊 班组",
    "nameEn": "Team E",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "count": 24,
    "shift": "白班",
    "shiftEn": "Day",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "output": 340,
    "qualified": 94.4,
    "skills": [
     "装配"
    ],
    "skillsEn": [
     "Assembly"
    ]
   },
   {
    "id": "WG1205",
    "name": "己 班组",
    "nameEn": "Team F",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "count": 27,
    "shift": "夜班",
    "shiftEn": "Night",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "output": 380,
    "qualified": 95.0,
    "skills": [
     "装配",
     "焊接"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering"
    ]
   },
   {
    "id": "WG1206",
    "name": "庚 班组",
    "nameEn": "Team G",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "count": 30,
    "shift": "白班",
    "shiftEn": "Day",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "output": 420,
    "qualified": 95.6,
    "skills": [
     "装配",
     "焊接",
     "调试"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering",
     "Tuning"
    ]
   },
   {
    "id": "WG1207",
    "name": "辛 班组",
    "nameEn": "Team H",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "count": 33,
    "shift": "夜班",
    "shiftEn": "Night",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "output": 460,
    "qualified": 96.2,
    "skills": [
     "装配",
     "焊接",
     "调试",
     "质检"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering",
     "Tuning",
     "QC"
    ]
   },
   {
    "id": "WG1208",
    "name": "壬 班组",
    "nameEn": "Team I",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "count": 36,
    "shift": "白班",
    "shiftEn": "Day",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "output": 500,
    "qualified": 96.8,
    "skills": [
     "装配"
    ],
    "skillsEn": [
     "Assembly"
    ]
   },
   {
    "id": "WG1209",
    "name": "癸 班组",
    "nameEn": "Team J",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "count": 39,
    "shift": "夜班",
    "shiftEn": "Night",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "output": 540,
    "qualified": 97.4,
    "skills": [
     "装配",
     "焊接"
    ],
    "skillsEn": [
     "Assembly",
     "Soldering"
    ]
   }
  ],
  "cases": [
   {
    "id": "CS1300",
    "title": "蓝鲸智造 量产案例 #1",
    "titleEn": "BlueWhale mass production case #1",
    "img": "assets/img/gen/product/production_assembly_01.svg",
    "qty": 500,
    "days": 30,
    "yield": 96.0,
    "cost": "¥210,000",
    "vendor": "蓝鲸智造",
    "vendorEn": "BlueWhale",
    "line": "蓝鲸智造 组装线 #1",
    "lineEn": "BlueWhale Assembly Line #1",
    "desc": "从试产到量产 500 台，用时 30 天，良率 96.0%。",
    "descEn": "From pilot to 500 units in 30 days, yield 96.0%."
   },
   {
    "id": "CS1301",
    "title": "开源纪元 量产案例 #2",
    "titleEn": "OpenEra mass production case #2",
    "img": "assets/img/gen/product/production_assembly_02.svg",
    "qty": 1300,
    "days": 36,
    "yield": 96.3,
    "cost": "¥546,000",
    "vendor": "开源纪元",
    "vendorEn": "OpenEra",
    "line": "开源纪元 SMT 线 #2",
    "lineEn": "OpenEra SMT Line #2",
    "desc": "从试产到量产 1300 台，用时 36 天，良率 96.3%。",
    "descEn": "From pilot to 1300 units in 36 days, yield 96.3%."
   },
   {
    "id": "CS1302",
    "title": "星辰机甲 量产案例 #3",
    "titleEn": "StarMech mass production case #3",
    "img": "assets/img/gen/product/production_assembly_03.svg",
    "qty": 2100,
    "days": 42,
    "yield": 96.6,
    "cost": "¥882,000",
    "vendor": "星辰机甲",
    "vendorEn": "StarMech",
    "line": "星辰机甲 测试线 #3",
    "lineEn": "StarMech Test Line #3",
    "desc": "从试产到量产 2100 台，用时 42 天，良率 96.6%。",
    "descEn": "From pilot to 2100 units in 42 days, yield 96.6%."
   },
   {
    "id": "CS1303",
    "title": "铁甲开源 量产案例 #4",
    "titleEn": "IronOpen mass production case #4",
    "img": "assets/img/gen/product/production_assembly_04.svg",
    "qty": 2900,
    "days": 48,
    "yield": 96.9,
    "cost": "¥1,218,000",
    "vendor": "铁甲开源",
    "vendorEn": "IronOpen",
    "line": "铁甲开源 包装线 #4",
    "lineEn": "IronOpen Packing Line #4",
    "desc": "从试产到量产 2900 台，用时 48 天，良率 96.9%。",
    "descEn": "From pilot to 2900 units in 48 days, yield 96.9%."
   },
   {
    "id": "CS1304",
    "title": "灵犀机器人 量产案例 #5",
    "titleEn": "Lingxi mass production case #5",
    "img": "assets/img/gen/product/production_assembly_05.svg",
    "qty": 3700,
    "days": 54,
    "yield": 97.2,
    "cost": "¥1,554,000",
    "vendor": "灵犀机器人",
    "vendorEn": "Lingxi",
    "line": "灵犀机器人 机加线 #5",
    "lineEn": "Lingxi Machining Line #5",
    "desc": "从试产到量产 3700 台，用时 54 天，良率 97.2%。",
    "descEn": "From pilot to 3700 units in 54 days, yield 97.2%."
   },
   {
    "id": "CS1305",
    "title": "智元工场 量产案例 #6",
    "titleEn": "ZhiYuan mass production case #6",
    "img": "assets/img/gen/product/production_assembly_06.svg",
    "qty": 4500,
    "days": 60,
    "yield": 97.5,
    "cost": "¥1,890,000",
    "vendor": "智元工场",
    "vendorEn": "ZhiYuan",
    "line": "智元工场 注塑线 #6",
    "lineEn": "ZhiYuan Injection Line #6",
    "desc": "从试产到量产 4500 台，用时 60 天，良率 97.5%。",
    "descEn": "From pilot to 4500 units in 60 days, yield 97.5%."
   },
   {
    "id": "CS1306",
    "title": "红蚁动力 量产案例 #7",
    "titleEn": "RedAnt mass production case #7",
    "img": "assets/img/gen/product/production_assembly_07.svg",
    "qty": 5300,
    "days": 66,
    "yield": 97.8,
    "cost": "¥2,226,000",
    "vendor": "红蚁动力",
    "vendorEn": "RedAnt",
    "line": "红蚁动力 组装线 #7",
    "lineEn": "RedAnt Assembly Line #7",
    "desc": "从试产到量产 5300 台，用时 66 天，良率 97.8%。",
    "descEn": "From pilot to 5300 units in 66 days, yield 97.8%."
   },
   {
    "id": "CS1307",
    "title": "极客造物 量产案例 #8",
    "titleEn": "GeekMake mass production case #8",
    "img": "assets/img/gen/product/production_assembly_08.svg",
    "qty": 6100,
    "days": 72,
    "yield": 98.1,
    "cost": "¥2,562,000",
    "vendor": "极客造物",
    "vendorEn": "GeekMake",
    "line": "极客造物 SMT 线 #8",
    "lineEn": "GeekMake SMT Line #8",
    "desc": "从试产到量产 6100 台，用时 72 天，良率 98.1%。",
    "descEn": "From pilot to 6100 units in 72 days, yield 98.1%."
   },
   {
    "id": "CS1308",
    "title": "力控研究所 量产案例 #9",
    "titleEn": "ForceLab mass production case #9",
    "img": "assets/img/gen/product/production_assembly_01.svg",
    "qty": 6900,
    "days": 78,
    "yield": 98.4,
    "cost": "¥2,898,000",
    "vendor": "力控研究所",
    "vendorEn": "ForceLab",
    "line": "力控研究所 测试线 #9",
    "lineEn": "ForceLab Test Line #9",
    "desc": "从试产到量产 6900 台，用时 78 天，良率 98.4%。",
    "descEn": "From pilot to 6900 units in 78 days, yield 98.4%."
   },
   {
    "id": "CS1309",
    "title": "深蓝精密 量产案例 #10",
    "titleEn": "DeepBlue mass production case #10",
    "img": "assets/img/gen/product/production_assembly_02.svg",
    "qty": 7700,
    "days": 84,
    "yield": 98.7,
    "cost": "¥3,234,000",
    "vendor": "深蓝精密",
    "vendorEn": "DeepBlue",
    "line": "深蓝精密 包装线 #10",
    "lineEn": "DeepBlue Packing Line #10",
    "desc": "从试产到量产 7700 台，用时 84 天，良率 98.7%。",
    "descEn": "From pilot to 7700 units in 84 days, yield 98.7%."
   }
  ],
  "stages": [
   {
    "t": "试产",
    "te": "Pilot",
    "d": "小批量验证工艺与良率。",
    "de": "Small batch to verify process.",
    "on": true
   },
   {
    "t": "备料",
    "te": "Sourcing",
    "d": "按 BOM 齐套采购与检验。",
    "de": "Procure and inspect per BOM.",
    "on": false
   },
   {
    "t": "SMT/PCBA",
    "te": "SMT",
    "d": "贴片、回流焊与 AOI 检测。",
    "de": "Mounting, reflow and AOI.",
    "on": false
   },
   {
    "t": "整机装配",
    "te": "Assembly",
    "d": "结构、线束与整机组装。",
    "de": "Structure, harness, assembly.",
    "on": false
   },
   {
    "t": "老化测试",
    "te": "Burn-in",
    "d": "连续运行老化筛选早期失效。",
    "de": "Continuous burn-in screening.",
    "on": false
   },
   {
    "t": "质检入库",
    "te": "QC",
    "d": "抽检判定并包装入库。",
    "de": "Sampling QC and warehousing.",
    "on": false
   }
  ],
  "metrics": [
   {
    "v": "128",
    "l": "接入产线",
    "lEn": "Lines",
    "hl": false
   },
   {
    "v": "96.8%",
    "l": "平均良率",
    "lEn": "Avg yield",
    "hl": false
   },
   {
    "v": "18.6万",
    "l": "月产能",
    "lEn": "Monthly capacity",
    "hl": false
   },
   {
    "v": "32",
    "l": "在产订单",
    "lEn": "Running orders",
    "hl": true
   }
  ],
  "lineTypes": [
   {
    "zh": "组装线",
    "en": "Assembly"
   },
   {
    "zh": "SMT 线",
    "en": "SMT"
   },
   {
    "zh": "测试线",
    "en": "Test"
   },
   {
    "zh": "包装线",
    "en": "Packing"
   },
   {
    "zh": "机加线",
    "en": "Machining"
   },
   {
    "zh": "注塑线",
    "en": "Injection"
   }
  ],
  "lineStatus": [
   {
    "zh": "空闲",
    "en": "Idle"
   },
   {
    "zh": "生产中",
    "en": "Running"
   },
   {
    "zh": "满产",
    "en": "Full"
   },
   {
    "zh": "维保",
    "en": "Maintenance"
   }
  ],
  "orderStatus": [
   {
    "zh": "待排产",
    "en": "Queued"
   },
   {
    "zh": "备料中",
    "en": "Sourcing"
   },
   {
    "zh": "生产中",
    "en": "Running"
   },
   {
    "zh": "质检中",
    "en": "QC"
   },
   {
    "zh": "已完工",
    "en": "Done"
   },
   {
    "zh": "已发货",
    "en": "Shipped"
   }
  ],
  "supTags": [
   {
    "zh": "代工厂",
    "en": "OEM"
   },
   {
    "zh": "模具厂",
    "en": "Tooling"
   },
   {
    "zh": "PCBA",
    "en": "PCBA"
   },
   {
    "zh": "钣金",
    "en": "Sheet metal"
   },
   {
    "zh": "注塑",
    "en": "Injection"
   },
   {
    "zh": "电机",
    "en": "Motor"
   }
  ]
 },
 "design": {
  "demands": [
   {
    "id": "DD2000",
    "title": "整机设计 设计需求 #1",
    "titleEn": "Full machine design demand #1",
    "cat": "整机设计",
    "catEn": "Full machine",
    "budget": "¥40,000",
    "deadline": "2026-01-20",
    "bids": 2,
    "status": "招募中",
    "statusEn": "Open",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "img": "assets/img/gen/product/design_drawing_01.svg",
    "desc": "需要完成整机设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Full machine solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2001",
    "title": "结构设计 设计需求 #2",
    "titleEn": "Mechanical design demand #2",
    "cat": "结构设计",
    "catEn": "Mechanical",
    "budget": "¥45,000",
    "deadline": "2026-02-20",
    "bids": 3,
    "status": "设计中",
    "statusEn": "Designing",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "img": "assets/img/gen/product/design_drawing_02.svg",
    "desc": "需要完成结构设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Mechanical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2002",
    "title": "电控设计 设计需求 #3",
    "titleEn": "Electrical design demand #3",
    "cat": "电控设计",
    "catEn": "Electrical",
    "budget": "¥50,000",
    "deadline": "2026-03-20",
    "bids": 4,
    "status": "评审中",
    "statusEn": "Reviewing",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "img": "assets/img/gen/product/design_drawing_03.svg",
    "desc": "需要完成电控设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Electrical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2003",
    "title": "嵌入式 设计需求 #4",
    "titleEn": "Embedded design demand #4",
    "cat": "嵌入式",
    "catEn": "Embedded",
    "budget": "¥55,000",
    "deadline": "2026-04-20",
    "bids": 5,
    "status": "已完成",
    "statusEn": "Done",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "img": "assets/img/gen/product/design_drawing_04.svg",
    "desc": "需要完成嵌入式方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Embedded solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2004",
    "title": "算法设计 设计需求 #5",
    "titleEn": "Algorithm design demand #5",
    "cat": "算法设计",
    "catEn": "Algorithm",
    "budget": "¥60,000",
    "deadline": "2026-05-20",
    "bids": 6,
    "status": "招募中",
    "statusEn": "Open",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "img": "assets/img/gen/product/design_drawing_05.svg",
    "desc": "需要完成算法设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Algorithm solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2005",
    "title": "工业设计 设计需求 #6",
    "titleEn": "Industrial design design demand #6",
    "cat": "工业设计",
    "catEn": "Industrial design",
    "budget": "¥65,000",
    "deadline": "2026-06-20",
    "bids": 7,
    "status": "设计中",
    "statusEn": "Designing",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "img": "assets/img/gen/product/design_drawing_06.svg",
    "desc": "需要完成工业设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Industrial design solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2006",
    "title": "整机设计 设计需求 #7",
    "titleEn": "Full machine design demand #7",
    "cat": "整机设计",
    "catEn": "Full machine",
    "budget": "¥70,000",
    "deadline": "2026-07-20",
    "bids": 8,
    "status": "评审中",
    "statusEn": "Reviewing",
    "owner": "红蚁动力",
    "ownerEn": "RedAnt",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "img": "assets/img/gen/product/design_drawing_07.svg",
    "desc": "需要完成整机设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Full machine solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2007",
    "title": "结构设计 设计需求 #8",
    "titleEn": "Mechanical design demand #8",
    "cat": "结构设计",
    "catEn": "Mechanical",
    "budget": "¥75,000",
    "deadline": "2026-08-20",
    "bids": 9,
    "status": "已完成",
    "statusEn": "Done",
    "owner": "极客造物",
    "ownerEn": "GeekMake",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "img": "assets/img/gen/product/design_drawing_08.svg",
    "desc": "需要完成结构设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Mechanical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2008",
    "title": "电控设计 设计需求 #9",
    "titleEn": "Electrical design demand #9",
    "cat": "电控设计",
    "catEn": "Electrical",
    "budget": "¥80,000",
    "deadline": "2026-09-20",
    "bids": 10,
    "status": "招募中",
    "statusEn": "Open",
    "owner": "力控研究所",
    "ownerEn": "ForceLab",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "img": "assets/img/gen/product/design_drawing_01.svg",
    "desc": "需要完成电控设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Electrical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2009",
    "title": "嵌入式 设计需求 #10",
    "titleEn": "Embedded design demand #10",
    "cat": "嵌入式",
    "catEn": "Embedded",
    "budget": "¥85,000",
    "deadline": "2026-10-20",
    "bids": 2,
    "status": "设计中",
    "statusEn": "Designing",
    "owner": "深蓝精密",
    "ownerEn": "DeepBlue",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "img": "assets/img/gen/product/design_drawing_02.svg",
    "desc": "需要完成嵌入式方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Embedded solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2010",
    "title": "算法设计 设计需求 #11",
    "titleEn": "Algorithm design demand #11",
    "cat": "算法设计",
    "catEn": "Algorithm",
    "budget": "¥40,000",
    "deadline": "2026-11-20",
    "bids": 3,
    "status": "评审中",
    "statusEn": "Reviewing",
    "owner": "华工装备",
    "ownerEn": "HuaGong",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "img": "assets/img/gen/product/design_drawing_03.svg",
    "desc": "需要完成算法设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Algorithm solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2011",
    "title": "工业设计 设计需求 #12",
    "titleEn": "Industrial design design demand #12",
    "cat": "工业设计",
    "catEn": "Industrial design",
    "budget": "¥45,000",
    "deadline": "2026-12-20",
    "bids": 4,
    "status": "已完成",
    "statusEn": "Done",
    "owner": "珠三角模具",
    "ownerEn": "PRDMold",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "img": "assets/img/gen/product/design_drawing_04.svg",
    "desc": "需要完成工业设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Industrial design solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2012",
    "title": "整机设计 设计需求 #13",
    "titleEn": "Full machine design demand #13",
    "cat": "整机设计",
    "catEn": "Full machine",
    "budget": "¥50,000",
    "deadline": "2026-01-20",
    "bids": 5,
    "status": "招募中",
    "statusEn": "Open",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_13.svg",
    "img": "assets/img/gen/product/design_drawing_05.svg",
    "desc": "需要完成整机设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Full machine solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2013",
    "title": "结构设计 设计需求 #14",
    "titleEn": "Mechanical design demand #14",
    "cat": "结构设计",
    "catEn": "Mechanical",
    "budget": "¥55,000",
    "deadline": "2026-02-20",
    "bids": 6,
    "status": "设计中",
    "statusEn": "Designing",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_14.svg",
    "img": "assets/img/gen/product/design_drawing_06.svg",
    "desc": "需要完成结构设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Mechanical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2014",
    "title": "电控设计 设计需求 #15",
    "titleEn": "Electrical design demand #15",
    "cat": "电控设计",
    "catEn": "Electrical",
    "budget": "¥60,000",
    "deadline": "2026-03-20",
    "bids": 7,
    "status": "评审中",
    "statusEn": "Reviewing",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_15.svg",
    "img": "assets/img/gen/product/design_drawing_07.svg",
    "desc": "需要完成电控设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Electrical solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2015",
    "title": "嵌入式 设计需求 #16",
    "titleEn": "Embedded design demand #16",
    "cat": "嵌入式",
    "catEn": "Embedded",
    "budget": "¥65,000",
    "deadline": "2026-04-20",
    "bids": 8,
    "status": "已完成",
    "statusEn": "Done",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_16.svg",
    "img": "assets/img/gen/product/design_drawing_08.svg",
    "desc": "需要完成嵌入式方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Embedded solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2016",
    "title": "算法设计 设计需求 #17",
    "titleEn": "Algorithm design demand #17",
    "cat": "算法设计",
    "catEn": "Algorithm",
    "budget": "¥70,000",
    "deadline": "2026-05-20",
    "bids": 9,
    "status": "招募中",
    "statusEn": "Open",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_17.svg",
    "img": "assets/img/gen/product/design_drawing_01.svg",
    "desc": "需要完成算法设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Algorithm solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2017",
    "title": "工业设计 设计需求 #18",
    "titleEn": "Industrial design design demand #18",
    "cat": "工业设计",
    "catEn": "Industrial design",
    "budget": "¥75,000",
    "deadline": "2026-06-20",
    "bids": 10,
    "status": "设计中",
    "statusEn": "Designing",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_18.svg",
    "img": "assets/img/gen/product/design_drawing_02.svg",
    "desc": "需要完成工业设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Industrial design solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2018",
    "title": "整机设计 设计需求 #19",
    "titleEn": "Full machine design demand #19",
    "cat": "整机设计",
    "catEn": "Full machine",
    "budget": "¥80,000",
    "deadline": "2026-07-20",
    "bids": 2,
    "status": "评审中",
    "statusEn": "Reviewing",
    "owner": "红蚁动力",
    "ownerEn": "RedAnt",
    "avatar": "assets/img/gen/avatar/user_19.svg",
    "img": "assets/img/gen/product/design_drawing_03.svg",
    "desc": "需要完成整机设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Full machine solution with drawings, BOM and validation report."
   },
   {
    "id": "DD2019",
    "title": "结构设计 设计需求 #20",
    "titleEn": "Mechanical design demand #20",
    "cat": "结构设计",
    "catEn": "Mechanical",
    "budget": "¥85,000",
    "deadline": "2026-08-20",
    "bids": 3,
    "status": "已完成",
    "statusEn": "Done",
    "owner": "极客造物",
    "ownerEn": "GeekMake",
    "avatar": "assets/img/gen/avatar/user_20.svg",
    "img": "assets/img/gen/product/design_drawing_04.svg",
    "desc": "需要完成结构设计方案，含图纸、BOM 与验证报告。",
    "descEn": "Need Mechanical solution with drawings, BOM and validation report."
   }
  ],
  "tasks": [
   {
    "id": "DT2100",
    "name": "设计任务 #1",
    "nameEn": "Design task #1",
    "demand": "整机设计 设计需求 #1",
    "demandEn": "Full machine design demand #1",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "progress": 20,
    "status": "进行中",
    "statusEn": "In progress",
    "due": "2026-01-10",
    "img": "assets/img/gen/product/design_prototype_01.svg"
   },
   {
    "id": "DT2101",
    "name": "设计任务 #2",
    "nameEn": "Design task #2",
    "demand": "结构设计 设计需求 #2",
    "demandEn": "Mechanical design demand #2",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "progress": 45,
    "status": "待评审",
    "statusEn": "In review",
    "due": "2026-02-11",
    "img": "assets/img/gen/product/design_prototype_02.svg"
   },
   {
    "id": "DT2102",
    "name": "设计任务 #3",
    "nameEn": "Design task #3",
    "demand": "电控设计 设计需求 #3",
    "demandEn": "Electrical design demand #3",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "progress": 70,
    "status": "已完成",
    "statusEn": "Done",
    "due": "2026-03-12",
    "img": "assets/img/gen/product/design_prototype_03.svg"
   },
   {
    "id": "DT2103",
    "name": "设计任务 #4",
    "nameEn": "Design task #4",
    "demand": "嵌入式 设计需求 #4",
    "demandEn": "Embedded design demand #4",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "progress": 100,
    "status": "已暂停",
    "statusEn": "Paused",
    "due": "2026-04-13",
    "img": "assets/img/gen/product/design_prototype_04.svg"
   },
   {
    "id": "DT2104",
    "name": "设计任务 #5",
    "nameEn": "Design task #5",
    "demand": "算法设计 设计需求 #5",
    "demandEn": "Algorithm design demand #5",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "progress": 60,
    "status": "进行中",
    "statusEn": "In progress",
    "due": "2026-05-14",
    "img": "assets/img/gen/product/design_prototype_05.svg"
   },
   {
    "id": "DT2105",
    "name": "设计任务 #6",
    "nameEn": "Design task #6",
    "demand": "工业设计 设计需求 #6",
    "demandEn": "Industrial design design demand #6",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "progress": 35,
    "status": "待评审",
    "statusEn": "In review",
    "due": "2026-06-15",
    "img": "assets/img/gen/product/design_prototype_06.svg"
   },
   {
    "id": "DT2106",
    "name": "设计任务 #7",
    "nameEn": "Design task #7",
    "demand": "整机设计 设计需求 #7",
    "demandEn": "Full machine design demand #7",
    "owner": "红蚁动力",
    "ownerEn": "RedAnt",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "progress": 85,
    "status": "已完成",
    "statusEn": "Done",
    "due": "2026-07-16",
    "img": "assets/img/gen/product/design_prototype_07.svg"
   },
   {
    "id": "DT2107",
    "name": "设计任务 #8",
    "nameEn": "Design task #8",
    "demand": "结构设计 设计需求 #8",
    "demandEn": "Mechanical design demand #8",
    "owner": "极客造物",
    "ownerEn": "GeekMake",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "progress": 100,
    "status": "已暂停",
    "statusEn": "Paused",
    "due": "2026-08-17",
    "img": "assets/img/gen/product/design_prototype_08.svg"
   },
   {
    "id": "DT2108",
    "name": "设计任务 #9",
    "nameEn": "Design task #9",
    "demand": "电控设计 设计需求 #9",
    "demandEn": "Electrical design demand #9",
    "owner": "力控研究所",
    "ownerEn": "ForceLab",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "progress": 50,
    "status": "进行中",
    "statusEn": "In progress",
    "due": "2026-09-18",
    "img": "assets/img/gen/product/design_prototype_01.svg"
   },
   {
    "id": "DT2109",
    "name": "设计任务 #10",
    "nameEn": "Design task #10",
    "demand": "嵌入式 设计需求 #10",
    "demandEn": "Embedded design demand #10",
    "owner": "深蓝精密",
    "ownerEn": "DeepBlue",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "progress": 30,
    "status": "待评审",
    "statusEn": "In review",
    "due": "2026-10-10",
    "img": "assets/img/gen/product/design_prototype_02.svg"
   },
   {
    "id": "DT2110",
    "name": "设计任务 #11",
    "nameEn": "Design task #11",
    "demand": "算法设计 设计需求 #11",
    "demandEn": "Algorithm design demand #11",
    "owner": "华工装备",
    "ownerEn": "HuaGong",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "progress": 90,
    "status": "已完成",
    "statusEn": "Done",
    "due": "2026-11-11",
    "img": "assets/img/gen/product/design_prototype_03.svg"
   },
   {
    "id": "DT2111",
    "name": "设计任务 #12",
    "nameEn": "Design task #12",
    "demand": "工业设计 设计需求 #12",
    "demandEn": "Industrial design design demand #12",
    "owner": "珠三角模具",
    "ownerEn": "PRDMold",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "progress": 75,
    "status": "已暂停",
    "statusEn": "Paused",
    "due": "2026-12-12",
    "img": "assets/img/gen/product/design_prototype_04.svg"
   },
   {
    "id": "DT2112",
    "name": "设计任务 #13",
    "nameEn": "Design task #13",
    "demand": "整机设计 设计需求 #13",
    "demandEn": "Full machine design demand #13",
    "owner": "蓝鲸智造",
    "ownerEn": "BlueWhale",
    "avatar": "assets/img/gen/avatar/user_13.svg",
    "progress": 40,
    "status": "进行中",
    "statusEn": "In progress",
    "due": "2026-01-13",
    "img": "assets/img/gen/product/design_prototype_05.svg"
   },
   {
    "id": "DT2113",
    "name": "设计任务 #14",
    "nameEn": "Design task #14",
    "demand": "结构设计 设计需求 #14",
    "demandEn": "Mechanical design demand #14",
    "owner": "开源纪元",
    "ownerEn": "OpenEra",
    "avatar": "assets/img/gen/avatar/user_14.svg",
    "progress": 100,
    "status": "待评审",
    "statusEn": "In review",
    "due": "2026-02-14",
    "img": "assets/img/gen/product/design_prototype_06.svg"
   },
   {
    "id": "DT2114",
    "name": "设计任务 #15",
    "nameEn": "Design task #15",
    "demand": "电控设计 设计需求 #15",
    "demandEn": "Electrical design demand #15",
    "owner": "星辰机甲",
    "ownerEn": "StarMech",
    "avatar": "assets/img/gen/avatar/user_15.svg",
    "progress": 65,
    "status": "已完成",
    "statusEn": "Done",
    "due": "2026-03-15",
    "img": "assets/img/gen/product/design_prototype_07.svg"
   },
   {
    "id": "DT2115",
    "name": "设计任务 #16",
    "nameEn": "Design task #16",
    "demand": "嵌入式 设计需求 #16",
    "demandEn": "Embedded design demand #16",
    "owner": "铁甲开源",
    "ownerEn": "IronOpen",
    "avatar": "assets/img/gen/avatar/user_16.svg",
    "progress": 55,
    "status": "已暂停",
    "statusEn": "Paused",
    "due": "2026-04-16",
    "img": "assets/img/gen/product/design_prototype_08.svg"
   },
   {
    "id": "DT2116",
    "name": "设计任务 #17",
    "nameEn": "Design task #17",
    "demand": "算法设计 设计需求 #17",
    "demandEn": "Algorithm design demand #17",
    "owner": "灵犀机器人",
    "ownerEn": "Lingxi",
    "avatar": "assets/img/gen/avatar/user_17.svg",
    "progress": 80,
    "status": "进行中",
    "statusEn": "In progress",
    "due": "2026-05-17",
    "img": "assets/img/gen/product/design_prototype_01.svg"
   },
   {
    "id": "DT2117",
    "name": "设计任务 #18",
    "nameEn": "Design task #18",
    "demand": "工业设计 设计需求 #18",
    "demandEn": "Industrial design design demand #18",
    "owner": "智元工场",
    "ownerEn": "ZhiYuan",
    "avatar": "assets/img/gen/avatar/user_18.svg",
    "progress": 25,
    "status": "待评审",
    "statusEn": "In review",
    "due": "2026-06-18",
    "img": "assets/img/gen/product/design_prototype_02.svg"
   }
  ],
  "drawings": [
   {
    "id": "DR2200",
    "name": "总装图 图纸 #1",
    "nameEn": "Assembly drawing #1",
    "format": "STEP",
    "version": "v1.0",
    "size": "2.4 MB",
    "img": "assets/img/gen/product/design_drawing_01.svg",
    "author": "蓝鲸智造",
    "authorEn": "BlueWhale",
    "date": "2026-01-10"
   },
   {
    "id": "DR2201",
    "name": "部件图 图纸 #2",
    "nameEn": "Part drawing #2",
    "format": "DWG",
    "version": "v2.1",
    "size": "4.0 MB",
    "img": "assets/img/gen/product/design_drawing_02.svg",
    "author": "开源纪元",
    "authorEn": "OpenEra",
    "date": "2026-02-11"
   },
   {
    "id": "DR2202",
    "name": "原理图 图纸 #3",
    "nameEn": "Schematic drawing #3",
    "format": "PDF",
    "version": "v3.2",
    "size": "5.6 MB",
    "img": "assets/img/gen/product/design_drawing_03.svg",
    "author": "星辰机甲",
    "authorEn": "StarMech",
    "date": "2026-03-12"
   },
   {
    "id": "DR2203",
    "name": "PCB 图 图纸 #4",
    "nameEn": "PCB drawing #4",
    "format": "Gerber",
    "version": "v1.3",
    "size": "7.2 MB",
    "img": "assets/img/gen/product/design_drawing_04.svg",
    "author": "铁甲开源",
    "authorEn": "IronOpen",
    "date": "2026-04-13"
   },
   {
    "id": "DR2204",
    "name": "线束图 图纸 #5",
    "nameEn": "Harness drawing #5",
    "format": "STEP",
    "version": "v2.4",
    "size": "8.8 MB",
    "img": "assets/img/gen/product/design_drawing_05.svg",
    "author": "灵犀机器人",
    "authorEn": "Lingxi",
    "date": "2026-05-14"
   },
   {
    "id": "DR2205",
    "name": "总装图 图纸 #6",
    "nameEn": "Assembly drawing #6",
    "format": "DWG",
    "version": "v3.0",
    "size": "10.4 MB",
    "img": "assets/img/gen/product/design_drawing_06.svg",
    "author": "智元工场",
    "authorEn": "ZhiYuan",
    "date": "2026-06-15"
   },
   {
    "id": "DR2206",
    "name": "部件图 图纸 #7",
    "nameEn": "Part drawing #7",
    "format": "PDF",
    "version": "v1.1",
    "size": "12.0 MB",
    "img": "assets/img/gen/product/design_drawing_07.svg",
    "author": "红蚁动力",
    "authorEn": "RedAnt",
    "date": "2026-07-16"
   },
   {
    "id": "DR2207",
    "name": "原理图 图纸 #8",
    "nameEn": "Schematic drawing #8",
    "format": "Gerber",
    "version": "v2.2",
    "size": "13.6 MB",
    "img": "assets/img/gen/product/design_drawing_08.svg",
    "author": "极客造物",
    "authorEn": "GeekMake",
    "date": "2026-08-17"
   },
   {
    "id": "DR2208",
    "name": "PCB 图 图纸 #9",
    "nameEn": "PCB drawing #9",
    "format": "STEP",
    "version": "v3.3",
    "size": "15.2 MB",
    "img": "assets/img/gen/product/design_drawing_01.svg",
    "author": "力控研究所",
    "authorEn": "ForceLab",
    "date": "2026-09-18"
   },
   {
    "id": "DR2209",
    "name": "线束图 图纸 #10",
    "nameEn": "Harness drawing #10",
    "format": "DWG",
    "version": "v1.4",
    "size": "16.8 MB",
    "img": "assets/img/gen/product/design_drawing_02.svg",
    "author": "深蓝精密",
    "authorEn": "DeepBlue",
    "date": "2026-10-10"
   },
   {
    "id": "DR2210",
    "name": "总装图 图纸 #11",
    "nameEn": "Assembly drawing #11",
    "format": "PDF",
    "version": "v2.0",
    "size": "18.4 MB",
    "img": "assets/img/gen/product/design_drawing_03.svg",
    "author": "华工装备",
    "authorEn": "HuaGong",
    "date": "2026-11-11"
   },
   {
    "id": "DR2211",
    "name": "部件图 图纸 #12",
    "nameEn": "Part drawing #12",
    "format": "Gerber",
    "version": "v3.1",
    "size": "20.0 MB",
    "img": "assets/img/gen/product/design_drawing_04.svg",
    "author": "珠三角模具",
    "authorEn": "PRDMold",
    "date": "2026-12-12"
   },
   {
    "id": "DR2212",
    "name": "原理图 图纸 #13",
    "nameEn": "Schematic drawing #13",
    "format": "STEP",
    "version": "v1.2",
    "size": "21.6 MB",
    "img": "assets/img/gen/product/design_drawing_05.svg",
    "author": "蓝鲸智造",
    "authorEn": "BlueWhale",
    "date": "2026-01-13"
   },
   {
    "id": "DR2213",
    "name": "PCB 图 图纸 #14",
    "nameEn": "PCB drawing #14",
    "format": "DWG",
    "version": "v2.3",
    "size": "23.2 MB",
    "img": "assets/img/gen/product/design_drawing_06.svg",
    "author": "开源纪元",
    "authorEn": "OpenEra",
    "date": "2026-02-14"
   },
   {
    "id": "DR2214",
    "name": "线束图 图纸 #15",
    "nameEn": "Harness drawing #15",
    "format": "PDF",
    "version": "v3.4",
    "size": "24.8 MB",
    "img": "assets/img/gen/product/design_drawing_07.svg",
    "author": "星辰机甲",
    "authorEn": "StarMech",
    "date": "2026-03-15"
   }
  ],
  "reviews": [
   {
    "id": "RV2300",
    "title": "方案 设计评审 #1",
    "titleEn": "Concept design review #1",
    "result": "通过",
    "resultEn": "Pass",
    "reviewers": 3,
    "date": "2026-01-10",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_02.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_03.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2301",
    "title": "详细设计 设计评审 #2",
    "titleEn": "Detailed design review #2",
    "result": "需修改",
    "resultEn": "Revise",
    "reviewers": 4,
    "date": "2026-02-11",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_03.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_04.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2302",
    "title": "图纸 设计评审 #3",
    "titleEn": "Drawing design review #3",
    "result": "未通过",
    "resultEn": "Reject",
    "reviewers": 5,
    "date": "2026-03-12",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_04.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_05.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2303",
    "title": "样机 设计评审 #4",
    "titleEn": "Prototype design review #4",
    "result": "通过",
    "resultEn": "Pass",
    "reviewers": 6,
    "date": "2026-04-13",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_05.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_06.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2304",
    "title": "方案 设计评审 #5",
    "titleEn": "Concept design review #5",
    "result": "需修改",
    "resultEn": "Revise",
    "reviewers": 3,
    "date": "2026-05-14",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "img": "assets/img/gen/product/design_bom_05.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_06.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_07.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2305",
    "title": "详细设计 设计评审 #6",
    "titleEn": "Detailed design review #6",
    "result": "未通过",
    "resultEn": "Reject",
    "reviewers": 4,
    "date": "2026-06-15",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "img": "assets/img/gen/product/design_bom_06.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_07.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_08.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2306",
    "title": "图纸 设计评审 #7",
    "titleEn": "Drawing design review #7",
    "result": "通过",
    "resultEn": "Pass",
    "reviewers": 5,
    "date": "2026-07-16",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "img": "assets/img/gen/product/design_bom_07.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_08.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_09.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2307",
    "title": "样机 设计评审 #8",
    "titleEn": "Prototype design review #8",
    "result": "需修改",
    "resultEn": "Revise",
    "reviewers": 6,
    "date": "2026-08-17",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "img": "assets/img/gen/product/design_bom_08.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_09.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_10.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2308",
    "title": "方案 设计评审 #9",
    "titleEn": "Concept design review #9",
    "result": "未通过",
    "resultEn": "Reject",
    "reviewers": 3,
    "date": "2026-09-18",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_10.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_11.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2309",
    "title": "详细设计 设计评审 #10",
    "titleEn": "Detailed design review #10",
    "result": "通过",
    "resultEn": "Pass",
    "reviewers": 4,
    "date": "2026-10-10",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_11.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_12.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2310",
    "title": "图纸 设计评审 #11",
    "titleEn": "Drawing design review #11",
    "result": "需修改",
    "resultEn": "Revise",
    "reviewers": 5,
    "date": "2026-11-11",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_12.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_13.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   },
   {
    "id": "RV2311",
    "title": "样机 设计评审 #12",
    "titleEn": "Prototype design review #12",
    "result": "未通过",
    "resultEn": "Reject",
    "reviewers": 6,
    "date": "2026-12-12",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "opinions": [
     {
      "who": "结构专家",
      "whoEn": "Mechanical",
      "avatar": "assets/img/gen/avatar/user_13.svg",
      "text": "壁厚建议加厚至 2.5mm，提升跌落可靠性。",
      "textEn": "Suggest 2.5mm wall thickness."
     },
     {
      "who": "电控专家",
      "whoEn": "Electrical",
      "avatar": "assets/img/gen/avatar/user_14.svg",
      "text": "电源走线需加 TVS 防护。",
      "textEn": "Add TVS protection on power line."
     }
    ]
   }
  ],
  "versions": [
   {
    "v": "v1.0",
    "note": "初版发布",
    "noteEn": "Initial",
    "author": "蓝鲸智造",
    "authorEn": "BlueWhale",
    "date": "2026-01-10",
    "avatar": "assets/img/gen/avatar/user_01.svg"
   },
   {
    "v": "v2.1",
    "note": "修正干涉",
    "noteEn": "Fixed interference",
    "author": "开源纪元",
    "authorEn": "OpenEra",
    "date": "2026-02-11",
    "avatar": "assets/img/gen/avatar/user_02.svg"
   },
   {
    "v": "v3.2",
    "note": "更换电机型号",
    "noteEn": "Changed motor",
    "author": "星辰机甲",
    "authorEn": "StarMech",
    "date": "2026-03-12",
    "avatar": "assets/img/gen/avatar/user_03.svg"
   },
   {
    "v": "v1.3",
    "note": "优化走线",
    "noteEn": "Optimized routing",
    "author": "铁甲开源",
    "authorEn": "IronOpen",
    "date": "2026-04-13",
    "avatar": "assets/img/gen/avatar/user_04.svg"
   },
   {
    "v": "v2.4",
    "note": "减重设计",
    "noteEn": "Weight reduction",
    "author": "灵犀机器人",
    "authorEn": "Lingxi",
    "date": "2026-05-14",
    "avatar": "assets/img/gen/avatar/user_05.svg"
   },
   {
    "v": "v3.0",
    "note": "初版发布",
    "noteEn": "Initial",
    "author": "智元工场",
    "authorEn": "ZhiYuan",
    "date": "2026-06-15",
    "avatar": "assets/img/gen/avatar/user_06.svg"
   },
   {
    "v": "v1.1",
    "note": "修正干涉",
    "noteEn": "Fixed interference",
    "author": "红蚁动力",
    "authorEn": "RedAnt",
    "date": "2026-07-16",
    "avatar": "assets/img/gen/avatar/user_07.svg"
   },
   {
    "v": "v2.2",
    "note": "更换电机型号",
    "noteEn": "Changed motor",
    "author": "极客造物",
    "authorEn": "GeekMake",
    "date": "2026-08-17",
    "avatar": "assets/img/gen/avatar/user_08.svg"
   },
   {
    "v": "v3.3",
    "note": "优化走线",
    "noteEn": "Optimized routing",
    "author": "力控研究所",
    "authorEn": "ForceLab",
    "date": "2026-09-18",
    "avatar": "assets/img/gen/avatar/user_09.svg"
   },
   {
    "v": "v1.4",
    "note": "减重设计",
    "noteEn": "Weight reduction",
    "author": "深蓝精密",
    "authorEn": "DeepBlue",
    "date": "2026-10-10",
    "avatar": "assets/img/gen/avatar/user_10.svg"
   },
   {
    "v": "v2.0",
    "note": "初版发布",
    "noteEn": "Initial",
    "author": "华工装备",
    "authorEn": "HuaGong",
    "date": "2026-11-11",
    "avatar": "assets/img/gen/avatar/user_11.svg"
   },
   {
    "v": "v3.1",
    "note": "修正干涉",
    "noteEn": "Fixed interference",
    "author": "珠三角模具",
    "authorEn": "PRDMold",
    "date": "2026-12-12",
    "avatar": "assets/img/gen/avatar/user_12.svg"
   }
  ],
  "boms": [
   {
    "id": "BM6000",
    "name": "蓝鲸智造 整机 BOM #1",
    "nameEn": "BlueWhale full BOM #1",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "total": 42,
    "ready": 30,
    "missing": 6,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6001",
    "name": "开源纪元 整机 BOM #2",
    "nameEn": "OpenEra full BOM #2",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "total": 48,
    "ready": 34,
    "missing": 7,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6002",
    "name": "星辰机甲 整机 BOM #3",
    "nameEn": "StarMech full BOM #3",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "total": 54,
    "ready": 38,
    "missing": 8,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6003",
    "name": "铁甲开源 整机 BOM #4",
    "nameEn": "IronOpen full BOM #4",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "total": 60,
    "ready": 42,
    "missing": 9,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6004",
    "name": "灵犀机器人 整机 BOM #5",
    "nameEn": "Lingxi full BOM #5",
    "img": "assets/img/gen/product/design_bom_05.svg",
    "total": 66,
    "ready": 46,
    "missing": 10,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6005",
    "name": "智元工场 整机 BOM #6",
    "nameEn": "ZhiYuan full BOM #6",
    "img": "assets/img/gen/product/design_bom_06.svg",
    "total": 72,
    "ready": 50,
    "missing": 6,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6006",
    "name": "红蚁动力 整机 BOM #7",
    "nameEn": "RedAnt full BOM #7",
    "img": "assets/img/gen/product/design_bom_07.svg",
    "total": 78,
    "ready": 54,
    "missing": 7,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6007",
    "name": "极客造物 整机 BOM #8",
    "nameEn": "GeekMake full BOM #8",
    "img": "assets/img/gen/product/design_bom_08.svg",
    "total": 84,
    "ready": 58,
    "missing": 8,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6008",
    "name": "力控研究所 整机 BOM #9",
    "nameEn": "ForceLab full BOM #9",
    "img": "assets/img/gen/product/design_bom_01.svg",
    "total": 90,
    "ready": 62,
    "missing": 9,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6009",
    "name": "深蓝精密 整机 BOM #10",
    "nameEn": "DeepBlue full BOM #10",
    "img": "assets/img/gen/product/design_bom_02.svg",
    "total": 96,
    "ready": 66,
    "missing": 10,
    "risk": "低",
    "riskEn": "Low",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6010",
    "name": "华工装备 整机 BOM #11",
    "nameEn": "HuaGong full BOM #11",
    "img": "assets/img/gen/product/design_bom_03.svg",
    "total": 102,
    "ready": 70,
    "missing": 6,
    "risk": "中",
    "riskEn": "Medium",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   },
   {
    "id": "BM6011",
    "name": "珠三角模具 整机 BOM #12",
    "nameEn": "PRDMold full BOM #12",
    "img": "assets/img/gen/product/design_bom_04.svg",
    "total": 108,
    "ready": 74,
    "missing": 7,
    "risk": "高",
    "riskEn": "High",
    "items": [
     {
      "k": "伺服关节模组",
      "kEn": "Servo joint",
      "qty": "12",
      "stock": "现货 240",
      "stockEn": "240 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "主控板 PCBA",
      "kEn": "Main PCBA",
      "qty": "2",
      "stock": "现货 80",
      "stockEn": "80 in stock",
      "lead": "0 天",
      "status": "ok"
     },
     {
      "k": "激光雷达",
      "kEn": "LiDAR",
      "qty": "1",
      "stock": "缺货",
      "stockEn": "Out of stock",
      "lead": "30 天",
      "status": "missing"
     },
     {
      "k": "结构钣金件",
      "kEn": "Sheet metal",
      "qty": "8",
      "stock": "可定制",
      "stockEn": "Customizable",
      "lead": "15 天",
      "status": "custom"
     },
     {
      "k": "线束端子",
      "kEn": "Harness",
      "qty": "24",
      "stock": "现货 600",
      "stockEn": "600 in stock",
      "lead": "0 天",
      "status": "ok"
     }
    ]
   }
  ],
  "cats": [
   {
    "zh": "整机设计",
    "en": "Full machine"
   },
   {
    "zh": "结构设计",
    "en": "Mechanical"
   },
   {
    "zh": "电控设计",
    "en": "Electrical"
   },
   {
    "zh": "嵌入式",
    "en": "Embedded"
   },
   {
    "zh": "算法设计",
    "en": "Algorithm"
   },
   {
    "zh": "工业设计",
    "en": "Industrial design"
   }
  ],
  "stages": [
   {
    "t": "需求澄清",
    "te": "Clarify",
    "d": "明确指标、场景与约束。",
    "de": "Define specs and constraints.",
    "on": true
   },
   {
    "t": "方案设计",
    "te": "Concept",
    "d": "总体方案与关键选型。",
    "de": "Concept and key selection.",
    "on": false
   },
   {
    "t": "详细设计",
    "te": "Detailed",
    "d": "图纸、BOM 与工艺文件。",
    "de": "Drawings, BOM and process.",
    "on": false
   },
   {
    "t": "设计评审",
    "te": "Review",
    "d": "专家评审并冻结版本。",
    "de": "Expert review and freeze.",
    "on": false
   },
   {
    "t": "样机验证",
    "te": "Prototype",
    "d": "打样、装配与测试验证。",
    "de": "Prototype build and test.",
    "on": false
   }
  ],
  "metrics": [
   {
    "v": "486",
    "l": "设计需求",
    "lEn": "Demands",
    "hl": false
   },
   {
    "v": "312",
    "l": "在研任务",
    "lEn": "Active tasks",
    "hl": false
   },
   {
    "v": "1,284",
    "l": "图纸文件",
    "lEn": "Drawings",
    "hl": false
   },
   {
    "v": "96",
    "l": "设计专家",
    "lEn": "Experts",
    "hl": true
   }
  ]
 },
 "flow": {
  "stages": [
   {
    "key": "demand",
    "zh": "商业需求",
    "en": "Requirement",
    "icon": "需求",
    "desc": "AI 拆解商业需求，生成可执行项目并匹配平台资源。",
    "descEn": "AI splits business needs into projects and matches resources.",
    "href": "ai_requirement.html",
    "img": "assets/img/gen/product/design_prototype_01.svg"
   },
   {
    "key": "design",
    "zh": "设计",
    "en": "Design",
    "icon": "drawing",
    "desc": "整机/结构/电控/算法设计，图纸与 BOM 输出。",
    "descEn": "Mechanical, electrical and algorithm design with drawings and BOM.",
    "href": "design_home.html",
    "img": "assets/img/gen/product/design_drawing_02.svg"
   },
   {
    "key": "integration",
    "zh": "集成",
    "en": "Integration",
    "icon": "module",
    "desc": "模块选型、整机集成与联调，缺失资源走工单。",
    "descEn": "Module selection, integration and joint debugging.",
    "href": "integration_hall.html",
    "img": "assets/img/gen/product/production_assembly_03.svg"
   },
   {
    "key": "test",
    "zh": "测试",
    "en": "Testing",
    "icon": "test",
    "desc": "功能、可靠性、环境与安全合规验证并出具报告。",
    "descEn": "Functional, reliability, environmental and safety validation.",
    "href": "test_hall.html",
    "img": "assets/img/gen/product/production_qc_04.svg"
   },
   {
    "key": "production",
    "zh": "流水线生产",
    "en": "Mass production",
    "icon": "production",
    "desc": "试产、备料、SMT、装配、老化、质检到量产交付。",
    "descEn": "Pilot, sourcing, SMT, assembly, burn-in, QC to delivery.",
    "href": "production_home.html",
    "img": "assets/img/gen/product/production_line_05.svg"
   }
  ],
  "gates": [
   {
    "key": "g1",
    "zh": "需求冻结",
    "en": "Requirement freeze",
    "items": [
     "指标确认",
     "预算确认",
     "资源可行"
    ],
    "itemsEn": [
     "Specs",
     "Budget",
     "Feasibility"
    ]
   },
   {
    "key": "g2",
    "zh": "设计冻结",
    "en": "Design freeze",
    "items": [
     "图纸评审",
     "BOM 冻结",
     "工艺确认"
    ],
    "itemsEn": [
     "Drawing review",
     "BOM freeze",
     "Process"
    ]
   },
   {
    "key": "g3",
    "zh": "集成验收",
    "en": "Integration acceptance",
    "items": [
     "整机联调",
     "功能通过",
     "文档齐备"
    ],
    "itemsEn": [
     "Joint debug",
     "Function pass",
     "Docs ready"
    ]
   },
   {
    "key": "g4",
    "zh": "测试放行",
    "en": "Test release",
    "items": [
     "可靠性",
     "安规",
     "报告归档"
    ],
    "itemsEn": [
     "Reliability",
     "Safety",
     "Report"
    ]
   },
   {
    "key": "g5",
    "zh": "量产放行",
    "en": "Production release",
    "items": [
     "试产通过",
     "良率达标",
     "供应链锁定"
    ],
    "itemsEn": [
     "Pilot pass",
     "Yield OK",
     "Supply locked"
    ]
   }
  ],
  "handovers": [
   {
    "from": "需求",
    "fromEn": "Requirement",
    "to": "设计",
    "toEn": "Design",
    "items": [
     "需求文档",
     "指标清单",
     "参考资源"
    ],
    "itemsEn": [
     "Requirement doc",
     "Spec list",
     "References"
    ]
   },
   {
    "from": "设计",
    "fromEn": "Design",
    "to": "集成",
    "toEn": "Integration",
    "items": [
     "3D 图纸",
     "BOM 表",
     "工艺文件"
    ],
    "itemsEn": [
     "3D drawings",
     "BOM",
     "Process files"
    ]
   },
   {
    "from": "集成",
    "fromEn": "Integration",
    "to": "测试",
    "toEn": "Testing",
    "items": [
     "整机样机",
     "测试用例",
     "调试记录"
    ],
    "itemsEn": [
     "Prototype",
     "Test cases",
     "Debug log"
    ]
   },
   {
    "from": "测试",
    "fromEn": "Testing",
    "to": "生产",
    "toEn": "Production",
    "items": [
     "测试报告",
     "量产工艺",
     "验收标准"
    ],
    "itemsEn": [
     "Test report",
     "Process",
     "Acceptance"
    ]
   }
  ]
 }
};
