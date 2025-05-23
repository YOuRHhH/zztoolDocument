import { title } from "process";

export default {
    zh:'中文',
    en:'英文',
    install:'安装',
    use:'使用',
    close:'关 闭',
    illustrate:"说明",
    current:'当前',
    language:"语言",
    space:"空格",
    stop:'停止',
    click:"点击",
    run:"运行",
    output:"输出",
    mod:"炫彩模式",
    index:"首页",
    alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",
    dialog:{
        illustrate1:"文档示例输出均在控制台",
        illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库",
        illustrate3:"有不清楚的请看源码",
    },
    illustrateComponent:{
        li1:"安装(请看控制台)",
        li2:"可以在任何地方使用",
        li3:"输出结果请看控制台",
    },
    publicmethods:{
        title:"公共方法",
        list:{
            li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},
            li2:{name:"抛错",title:"error",com:"error"},
            li3:{name:"防抖",title:"debounce",com:"debounce"},
            li4:{name:"节流",title:"throttle",com:"throttle"},
        }
    },
    typedetection:{
        title:"类型检测",
        list:{
            li1:{name:"获取类型",title:"getType",com:"getType"},
        }
    },
    regexp:{
        title:"正则表达式",
        list:{
            li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},
            li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},
            li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},
            li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"},
        }
    },
    getparam:{
        title:"参数获取",
        list:{
            li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},
            li2:{name:"参数格式化",title:"paramformat",com:"paramformat"},
            li3:{name:"获取值",title:"getValue",com:"getValue"},
        }
    },
    transfertype:{
        title:"转类型",
        list:{
            li1:{name:"转字符串",title:"toString",com:"toString"},
            li2:{name:"转数组",title:"toArray",com:"toArray"},
        }
    },
    utilfn:{
        title:"工具函数",
        list:{
            li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},
            li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},
            li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},
            li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"},
        }
    },
    data:{
        title:"数据处理",
        list:{
            li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},
            li2:{name:"数据是否有空值",title:"dataEmpty",com:"dataEmpty"},
            li3:{name:"深克隆",title:"deepClone",com:"deepClone"},
            li4:{name:"转树形结构",title:"toTree",com:"toTree"},
            li5:{name:"数据分组",title:"groupBy",com:"groupBy"},
            li6:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},
            li7:{name:"数组去重",title:"dataUnique",com:"dataUnique"},
            li8:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},
            li9:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"},
            li10:{name:"修改索引",title:"dataChangeIndex",com:"dataChangeIndex"},
            li11:{name:"数组分块",title:'chunkArray',com:'chunkArray'},
            li12:{name:"获取索引值",title:'getSameIndexValue',com:'getSameIndexValue'},
            li13:{name:"查找数据",title:'dataFind',com:'dataFind'},
            li14:{name:"字符串替换",title:'strReplace',com:'strReplace'}
        }
    },
    date:{
        title:"日期",
        list:{
            li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},
            li2:{name:"日期类型",title:"getDateType",com:"getDateType"},
            li3:{name:"获取日期",title:"getDate",com:"getDate"},
            li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},
            li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},
            li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},
            li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"},
            li8:{name:"获取时间戳",title:"getTimeStamp",com:"getTimeStamp"},
        }
    },
    calc:{
        title:"计算",
        list:{
            li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}
        }
    }
}