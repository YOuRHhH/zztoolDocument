import{d as defineComponent,r as ref,o as onMounted,j as openBlock,k as createElementBlock,t as toDisplayString,u as unref,a as onUnmounted,l as createBaseVNode,m as renderSlot,n as normalizeStyle,p as withDirectives,v as vShow,f as createVNode,q as withCtx,F as Fragment,x as renderList,y as normalizeClass,z as resolveComponent,A as createBlock,B as onUpdated,C as createCommentVNode,w as watch,D as createTextVNode,E as Teleport,G as onBeforeUnmount,s as shallowRef,H as resolveDynamicComponent,I as createApp}from"./@vue-T1jDMqDe.js";import{c as createI18n,u as useI18n}from"./vue-i18n-BBbvuB5v.js";import{m as marked}from"./marked-DK8KC6kv.js";import{H as HighlightJS}from"./highlight.js-BrBw_Vbc.js";import"./@intlify-DCvRJ7Og.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const en={zh:"zh",en:"en",install:"Install",use:"Use",close:"Close",illustrate:"illustrate",current:"Current ",language:"Language",space:"Space",stop:"Stop",click:"Click",run:"Run",output:"Output",mod:"surprise",index:"Index",alertTitle:"We are travelers in a hurry, and blessings are like spring rain, nourishing our hearts. May you always smile, live a happy and sweet life, and have a prosperous career and a bright future. May health and happiness always be with you.",dialog:{illustrate1:"Document example output is in the console",illustrate2:"You can use commands such as zz.getVersion() in the console to use this tool library.",illustrate3:"If you have any questions, please see the source code"},illustrateComponent:{li1:"Installation (see console)",li2:"Can be used anywhere",li3:"Please see the console for the output results"},publicmethods:{title:"PublicMethods",list:{li1:{name:"GetVersion",title:"getVersion",com:"getVersion"},li2:{name:"ThrowError",title:"error",com:"error"},li3:{name:"Debounce",title:"debounce",com:"debounce"},li4:{name:"Throttle",title:"throttle",com:"throttle"}}},typedetection:{title:"TypeDetection",list:{li1:{name:"GetType",title:"getType",com:"getType"}}},regexp:{title:"RegExp",list:{li1:{name:"IsContains",title:"regIsHas",com:"regIsHas"},li2:{name:"IsEmail",title:"regEmail",com:"regEmail"},li3:{name:"IsPhone",title:"regPhone",com:"regPhone"},li4:{name:"IsIdcard",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"GetParam",list:{li1:{name:"GetUrlParam",title:"getUrlParam",com:"getUrlParam"},li2:{name:"ParamFormat",title:"paramformat",com:"paramformat"},li3:{name:"getValue",title:"getValue",com:"getValue"}}},transfertype:{title:"TransferType",list:{li1:{name:"ToString",title:"toString",com:"toString"},li2:{name:"ToArray",title:"toArray",com:"toArray"}}},utilfn:{title:"UtilFn",list:{li1:{name:"GetRandomNum",title:"getRandom",com:"getRandom"},li2:{name:"GetRandomArr",title:"getRandomArray",com:"getRandomArray"},li3:{name:"GetRandomColor",title:"getRandomColor",com:"getRandomColor"},li4:{name:"Thousandths",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"Data",list:{li1:{name:"DataEqual",title:"dataEqual",com:"dataEqual"},li2:{name:"DataEmpty",title:"dataEmpty",com:"dataEmpty"},li3:{name:"DeepClone",title:"deepClone",com:"deepClone"},li4:{name:"ToTree",title:"toTree",com:"toTree"},li5:{name:"GroupBy",title:"groupBy",com:"groupBy"},li6:{name:"DataMerge",title:"dataMerge",com:"dataMerge"},li7:{name:"DataUnique",title:"dataUnique",com:"dataUnique"},li8:{name:"DataUnEmpty",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"ShuffleArray",title:"shuffleArray",com:"shuffleArray"},li10:{name:"DataChangeIndex",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"ChunkArray",title:"chunkArray",com:"chunkArray"},li12:{name:"GetSameIndexValue",title:"getSameIndexValue",com:"getSameIndexValue"},li13:{name:"DataFind",title:"dataFind",com:"dataFind"},li14:{name:"StrReplace",title:"strReplace",com:"strReplace"}}},date:{title:"Date",list:{li1:{name:"GetDateInfo",title:"getDateInfo",com:"getDateInfo"},li2:{name:"GetDateType",title:"getDateType",com:"getDateType"},li3:{name:"GetDate",title:"getDate",com:"getDate"},li4:{name:"GetMonthDays",title:"getMonthDays",com:"getMonthDays"},li5:{name:"GetBetwenDate",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"GetDateList",title:"getDateList",com:"getDateList"},li7:{name:"GetTimeStep",title:"getTimeStep",com:"getTimeStep"},li8:{name:"getTimeStamp",title:"getTimeStamp",com:"getTimeStamp"}}},calc:{title:"Calc",list:{li1:{name:"Percentage",title:"getPercentage",com:"getPercentage"}}}},zh={zh:"中文",en:"英文",install:"安装",use:"使用",close:"关 闭",illustrate:"说明",current:"当前",language:"语言",space:"空格",stop:"停止",click:"点击",run:"运行",output:"输出",mod:"炫彩模式",index:"首页",alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",dialog:{illustrate1:"文档示例输出均在控制台",illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库",illustrate3:"有不清楚的请看源码"},illustrateComponent:{li1:"安装(请看控制台)",li2:"可以在任何地方使用",li3:"输出结果请看控制台"},publicmethods:{title:"公共方法",list:{li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},li2:{name:"抛错",title:"error",com:"error"},li3:{name:"防抖",title:"debounce",com:"debounce"},li4:{name:"节流",title:"throttle",com:"throttle"}}},typedetection:{title:"类型检测",list:{li1:{name:"获取类型",title:"getType",com:"getType"}}},regexp:{title:"正则表达式",list:{li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"参数获取",list:{li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},li2:{name:"参数格式化",title:"paramformat",com:"paramformat"},li3:{name:"获取值",title:"getValue",com:"getValue"}}},transfertype:{title:"转类型",list:{li1:{name:"转字符串",title:"toString",com:"toString"},li2:{name:"转数组",title:"toArray",com:"toArray"}}},utilfn:{title:"工具函数",list:{li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"数据处理",list:{li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},li2:{name:"数据是否有空值",title:"dataEmpty",com:"dataEmpty"},li3:{name:"深克隆",title:"deepClone",com:"deepClone"},li4:{name:"转树形结构",title:"toTree",com:"toTree"},li5:{name:"数据分组",title:"groupBy",com:"groupBy"},li6:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},li7:{name:"数组去重",title:"dataUnique",com:"dataUnique"},li8:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"},li10:{name:"修改索引",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"数组分块",title:"chunkArray",com:"chunkArray"},li12:{name:"获取索引值",title:"getSameIndexValue",com:"getSameIndexValue"},li13:{name:"查找数据",title:"dataFind",com:"dataFind"},li14:{name:"字符串替换",title:"strReplace",com:"strReplace"}}},date:{title:"日期",list:{li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},li2:{name:"日期类型",title:"getDateType",com:"getDateType"},li3:{name:"获取日期",title:"getDate",com:"getDate"},li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"},li8:{name:"获取时间戳",title:"getTimeStamp",com:"getTimeStamp"}}},calc:{title:"计算",list:{li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}}}},messages={en,zh},emnu={en:"en",zh:"zh","zh-CN":"zh"};var systemLanguage=navigator.language;emnu[systemLanguage]||(systemLanguage="zh");localStorage.getItem("locale")===null&&localStorage.setItem("locale",emnu[systemLanguage]);const locale=localStorage.getItem("locale")||"zh",i18n=createI18n({legacy:!1,locale,messages}),width=120,height=30,_sfc_main$N=defineComponent({__name:"moveBtn",setup(t){const{t:o}=useI18n(),n=ref(),e=ref(!0),a=()=>{const c=zztool.getRandom(0,window.innerWidth-width),l=zztool.getRandom(0,window.innerHeight-height);return{x:c,y:l}},r=()=>{if(!e.value)return;const{x:c,y:l}=a(),g=zztool.getRandomColor(),d=zztool.getRandomColor();n.value.style.left=c+"px",n.value.style.top=l+"px",n.value.style.backgroundColor=g,n.value.style.color=d};return onMounted(()=>{n.value.addEventListener("mouseenter",r),n.value.addEventListener("click",()=>{alert(o("alertTitle"))}),window.onresize=r,window.addEventListener("keydown",c=>{c.key===" "&&(e.value=!1)}),r()}),(c,l)=>(openBlock(),createElementBlock("button",{ref_key:"btn",ref:n,id:"btn"},toDisplayString(unref(o)("space"))+toDisplayString(unref(o)("stop"))+"("+toDisplayString(unref(o)("click"))+")",513))}}),_export_sfc=(t,o)=>{const n=t.__vccOpts||t;for(const[e,a]of o)n[e]=a;return n},MoveBtn=_export_sfc(_sfc_main$N,[["__scopeId","data-v-6813f365"]]),ScrollbarProps={height:{type:String,default:"100%"}},_sfc_main$M=defineComponent({name:"CptScrollbar",props:ScrollbarProps,setup(t){var o=t.height==="100%"?0:Number(t.height.replace(/px/,""));const n=ref(),e=ref(),a=ref(),r=ref(!1),c=ref(0),l=ref(!1),g=ref(!0);function d(){if(t.height==="100%"){let v=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-top"),I=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-bottom");o=e.value.parentElement.getBoundingClientRect().height-Number(v.replace(/px/,""))-Number(I.replace(/px/,""))}let u=0;const f=a.value.children.length,C=a.value.children;for(let v=0;v<f;v++)u+=C[v].getBoundingClientRect().height;u<=o&&(g.value=!1),i()}function i(){const u=a.value.scrollHeight;c.value=o/(u/o)<10?15:o/(u/o),n.value.style.height=c.value+"px"}let s=ref(!1),p=ref(0);const m=ref(0);function h(){g.value&&(r.value=!0)}function y(u){if(s.value){var f=u.y-m.value-e.value.offsetTop-p.value;f<=0?f=0:f+c.value>=o&&(f=o-c.value),n.value.style.top=f+"px";var C=Math.trunc(f*((a.value.scrollHeight-o)/(o-c.value)));$(C)}}function x(u){n.value.style.top=u+"px"}function $(u){a.value.scrollTop=u}function _(u){b(!0),s.value=!0,m.value=u.y-e.value.offsetTop-n.value.style.top.replace(/px/,""),p.value=a.value.offsetTop}function z(){s.value||(r.value=!1)}function B(){s.value=!1}function b(u){l.value=u}function k(u){if(s.value)return;b(!0);const f=(a.value.scrollHeight-o)/(o-c.value),C=u.target.scrollTop;x(Math.trunc(C/f))}return onMounted(()=>{d(),window.addEventListener("resize",()=>{d()}),document.body.addEventListener("mouseup",B),document.body.addEventListener("mousemove",y)}),onUnmounted(()=>{document.body.removeEventListener("mouseup",B),document.body.removeEventListener("mousemove",y)}),{props:t,scrollEle:e,scrollbar:n,scrollbarBox:a,scrollbarShow:r,scrollbarEnter:h,scrollbarMove:y,scrollbarDown:_,scrollbarLeave:z,scrollbarUp:B,scroll:k}}}),_hoisted_1$7=["onmouseenter","onmouseleave"],_hoisted_2$5=["onscroll"],_hoisted_3$4={class:"scrollbarBoxs",style:{}},_hoisted_4$1=["onmousedown"];function _sfc_render$2(t,o,n,e,a,r){return openBlock(),createElementBlock("div",{class:"scrollbarBox",style:normalizeStyle({height:t.props.height}),ref:"scrollEle",onmouseenter:t.scrollbarEnter,onmouseleave:t.scrollbarLeave},[createBaseVNode("div",{ref:"scrollbarBox",onscroll:t.scroll,style:normalizeStyle({"max-height":t.props.height}),class:"boxitem"},[renderSlot(t.$slots,"default",{},void 0)],12,_hoisted_2$5),withDirectives(createBaseVNode("div",_hoisted_3$4,[createBaseVNode("div",{class:"scrollbar pointer",onmousedown:t.scrollbarDown,ref:"scrollbar"},null,8,_hoisted_4$1)],512),[[vShow,t.scrollbarShow]])],12,_hoisted_1$7)}const CptScrollbar=_export_sfc(_sfc_main$M,[["render",_sfc_render$2],["__scopeId","data-v-397eacce"]]),MenuData=[{name:"index",title:"index",com:"index"},{name:"publicmethods.title",list:[{name:"publicmethods.list.li2.name",title:"error",com:"error"},{name:"publicmethods.list.li3.name",title:"debounce",com:"debounce"},{name:"publicmethods.list.li4.name",title:"throttle",com:"throttle"}]},{name:"typedetection.title",list:[{name:"typedetection.list.li1.name",title:"getType",com:"getType"}]},{name:"regexp.title",list:[{name:"regexp.list.li1.name",title:"regIsHas",com:"regIsHas"},{name:"regexp.list.li2.name",title:"regEmail",com:"regEmail"},{name:"regexp.list.li3.name",title:"regPhone",com:"regPhone"},{name:"regexp.list.li4.name",title:"regIdcard",com:"regIdcard"}]},{name:"getparam.title",list:[{name:"getparam.list.li1.name",title:"getUrlParam",com:"getUrlParam"},{name:"getparam.list.li2.name",title:"paramformat",com:"paramformat"},{name:"getparam.list.li3.name",title:"getValue",com:"getValue"}]},{name:"transfertype.title",list:[{name:"transfertype.list.li1.name",title:"toString",com:"toString"},{name:"transfertype.list.li2.name",title:"toArray",com:"toArray"}]},{name:"utilfn.title",list:[{name:"utilfn.list.li1.name",title:"getRandom",com:"getRandom"},{name:"utilfn.list.li2.name",title:"getRandomArray",com:"getRandomArray"},{name:"utilfn.list.li3.name",title:"getRandomColor",com:"getRandomColor"},{name:"utilfn.list.li4.name",title:"moneyFormat",com:"moneyFormat"}]},{name:"data.title",list:[{name:"data.list.li1.name",title:"dataEqual",com:"dataEqual"},{name:"data.list.li2.name",title:"dataEmpty",com:"dataEmpty"},{name:"data.list.li3.name",title:"deepClone",com:"deepClone"},{name:"data.list.li4.name",title:"toTree",com:"toTree"},{name:"data.list.li5.name",title:"groupBy",com:"groupBy"},{name:"data.list.li6.name",title:"dataMerge",com:"dataMerge"},{name:"data.list.li7.name",title:"dataUnique",com:"dataUnique"},{name:"data.list.li8.name",title:"arrayTrim",com:"arrayTrim"},{name:"data.list.li9.name",title:"shuffleArray",com:"shuffleArray"},{name:"data.list.li10.name",title:"dataChangeIndex",com:"dataChangeIndex"},{name:"data.list.li11.name",title:"chunkArray",com:"chunkArray"},{name:"data.list.li12.name",title:"getSameIndexValue",com:"getSameIndexValue"},{name:"data.list.li13.name",title:"dataFind",com:"dataFind"},{name:"data.list.li14.name",title:"strReplace",com:"strReplace"}]},{name:"date.title",list:[{name:"date.list.li1.name",title:"getDateInfo",com:"getDateInfo"},{name:"date.list.li2.name",title:"getDateType",com:"getDateType"},{name:"date.list.li3.name",title:"getDate",com:"getDate"},{name:"date.list.li4.name",title:"getMonthDays",com:"getMonthDays"},{name:"date.list.li5.name",title:"getBetwenDate",com:"getBetwenDate"},{name:"date.list.li6.name",title:"getDateList",com:"getDateList"},{name:"date.list.li7.name",title:"getTimeStep",com:"getTimeStep"},{name:"date.list.li8.name",title:"getTimeStamp",com:"getTimeStamp"}]},{name:"calc.title",list:[{name:"calc.list.li1.name",title:"getPercentage",com:"getPercentage"}]}],_hoisted_1$6={class:"menu-item"},_hoisted_2$4={style:{"margin-top":"10px"}},_hoisted_3$3=["selected"],_hoisted_4=["selected"],_hoisted_5={class:"menu-item"},_hoisted_6={class:"title"},_hoisted_7={class:"item"},_hoisted_8={class:"item"},_hoisted_9={class:"item"},_hoisted_10=["onClick"],_hoisted_11=["onClick","id"],_sfc_main$L=defineComponent({__name:"menu",props:{switchs:{type:Boolean,default:!1},bgColor:{type:String,default:"#fff"}},emits:["change"],setup(t,{emit:o}){const n=o,{t:e,locale:a}=useI18n(),r=ref("getVersion"),c=d=>{d.hasOwnProperty("list")&&d.list.length!=0||(n("change",d),r.value=d.title)},l=localStorage.getItem("locale")||"zh",g=d=>{localStorage.setItem("locale",d.target.value),a.value=d.target.value};return window.addEventListener("hashchange",()=>{const d=window.location.hash.substring(1)||"";if(d){const i=decodeURIComponent(d);console.log(MenuData);const s=zztool.dataFind(MenuData,"title",i);c(s)}}),(d,i)=>(openBlock(),createElementBlock("div",{class:"menu",style:normalizeStyle({backgroundColor:t.bgColor})},[createVNode(unref(CptScrollbar),null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$6,[createBaseVNode("h4",_hoisted_2$4,toDisplayString(unref(e)("current"))+toDisplayString(unref(e)("language")),1),createBaseVNode("select",{onChange:g},[createBaseVNode("option",{value:"zh",selected:unref(l)==="zh"},toDisplayString(unref(e)("zh")),9,_hoisted_3$3),createBaseVNode("option",{value:"en",selected:unref(l)==="en"},toDisplayString(unref(e)("en")),9,_hoisted_4)],32)]),createBaseVNode("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,toDisplayString(unref(e)("illustrate")),1),createBaseVNode("div",_hoisted_7,toDisplayString(unref(e)("illustrateComponent.li1")),1),createBaseVNode("div",_hoisted_8,toDisplayString(unref(e)("illustrateComponent.li2")),1),createBaseVNode("div",_hoisted_9,toDisplayString(unref(e)("illustrateComponent.li3")),1)]),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(MenuData),(s,p)=>(openBlock(),createElementBlock("div",{class:"menu-item",key:p},[createBaseVNode("div",{class:"title",onClick:m=>c(s)},toDisplayString(unref(e)(s.name)),9,_hoisted_10),(openBlock(!0),createElementBlock(Fragment,null,renderList(s.list,(m,h)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["item",[r.value===m.title?"active":""]]),key:h,onClick:y=>c(m),id:m.title},toDisplayString(unref(e)(m.name)),11,_hoisted_11))),128))]))),128))]),_:1})],4))}}),Menu=_export_sfc(_sfc_main$L,[["__scopeId","data-v-95809c5f"]]),strCode$E=`
const version = zztool.getVersion();
console.log(version);
`,_sfc_main$K=defineComponent({__name:"getVersion",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$E})}}}),strCode$D=`
zztool.error('抛出错误');
`,_sfc_main$J=defineComponent({__name:"error",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$D,show:!1})}}}),strCode$C=`
const clickFn = zztool.debounce(() => {
    console.log('防抖');
}, 1000);
`,_sfc_main$I=defineComponent({__name:"debounce",setup(t){const o=()=>{zztool.debounce(()=>{console.log("防抖")},1e3)};return(n,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:e[0]||(e[0]=r=>o())},"点击"),createVNode(a,{contents:strCode$C,show:!1})],64)}}}),strCode$B=`
zztool.throttle(() => {
    console.log('节流');
}, 1000);
`,_sfc_main$H=defineComponent({__name:"throttle",setup(t){const o=()=>{zztool.throttle(()=>{console.log("节流")},1e3)};return(n,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:o},"点击"),createVNode(a,{contents:strCode$B,show:!1})],64)}}}),strCode$A=`
const data = 10;
const type = zztool.getType(data);
console.log(type)
`,_sfc_main$G=defineComponent({__name:"getType",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$A})}}}),strCode$z=`
const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
`,_sfc_main$F=defineComponent({__name:"regIsHas",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$z})}}}),strCode$y=`
const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}`,_sfc_main$E=defineComponent({__name:"regEmail",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$y})}}}),strCode$x=`
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item));
  }
`,_sfc_main$D=defineComponent({__name:"regPhone",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$x})}}}),strCode$w=`
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
`,_sfc_main$C=defineComponent({__name:"regIdcard",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$w})}}}),strCode$v=`
/**
 * 获取url参数
 * @description node环境下参数必填
 * @param url url
 * @returns 参数
 */
  // 无参数则会获取url
  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url);
  console.log(param) // {a: '1', b: '2'}
`,_sfc_main$B=defineComponent({__name:"getUrlParam",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$v})}}}),strCode$u=`
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`,_sfc_main$A=defineComponent({__name:"paramformat",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$u})}}}),strCode$t=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1);
  console.log(str2);
`,_sfc_main$z=defineComponent({__name:"toString",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$t})}}}),strCode$s=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const string1 = '1,2,3,4,5';
  const string2 = '1-2-3-4-5';
  const string3 = '12345';
  const str1 = zztool.toArray(obj);
  const str2 = zztool.toArray(arr);
  const str3 = zztool.toArray(string1);
  const str4 = zztool.toArray(string2,'-');
  const str5 = zztool.toArray(string3);
  console.log(str1);
  console.log(str2);
  console.log(str3);
  console.log(str4);
  console.log(str5);
`,_sfc_main$y=defineComponent({__name:"toArray",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$s})}}}),strCode$r=`
  const random = zztool.getRandom(0,100);
  console.log(random)
`,_sfc_main$x=defineComponent({__name:"getRandom",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$r})}}}),strCode$q=`
  const random = zztool.getRandomArray(100,0,100);
  console.log(random)
`,_sfc_main$w=defineComponent({__name:"getRandomArray",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$q})}}}),strCode$p=`
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color)
  console.log(rgbColor)
  console.log(rgbaColor)
`,_sfc_main$v=defineComponent({__name:"getRandomColor",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$p})}}}),money=1e6,strCode$o=`
const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat);
console.log(moneyFormat2);
`,_sfc_main$u=defineComponent({__name:"moneyFormat",setup(t){const o=zztool.moneyFormat(money),n=zztool.moneyFormat(money,"~","$");return console.log(o,n),(e,a)=>{const r=resolveComponent("InputText");return openBlock(),createBlock(r,{contents:strCode$o})}}}),strCode$n=`
/**
 * 深度比较两个对象或数组，返回是否相等或不一致的 key
 * @param {Object|Array} obj1 - 第一个对象/数组
 * @param {Object|Array} obj2 - 第二个对象/数组
 * @param {Object} options - 配置项
 * @param {boolean} options.returnKeys - 是否返回不一致的 key（默认 false）
 * @param {boolean} options.arrayDiff - 是否检查数组内差异（默认 true）
 * @returns {boolean | string[]} - 相等返回 false，不相等返回 true 或不同 key
 */
// 会对比每一项
  const obj1 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople:[
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "xxx", age: 25 },
    ],
    arr: [
      {
        name: "git",
        lng:10,
      },
      {
        name: "hub",
        lng:30,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  const obj2 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople: [
      { name: "Alice", age: 30 },
      { name: "Charlie", age: 25 }
    ],
    arr: [
      {
        name: "hub",
        lng:20,
      },
      {
        name: "git",
        lng:10,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  // 第一个参数为修改后的数据，第二个参数为修改前的数据
  const data = zztool.dataEqual(obj1,obj2);
  const data1 = zztool.dataEqual(obj1,obj2,{returnKeys:true});
  /**
   * data1值为
   * ["prople.1.name","arr.0.name","arr.0.lng","arr.1.name","arr.1.lng"];
   * 可以使用getValue获取值
   */
  console.log(data)
  console.log(data1)

  for(let i = 0; i < data1.length; i++){
    console.log(zztool.getValue(obj1,data1[i]))
  }
`,_sfc_main$t=defineComponent({__name:"dataEqual",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$n})}}}),strCode$m=`
// false 0 -1 不会为空
  const obj1 = {a:2,b:-1,c:{d:0,e:false}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`,_sfc_main$s=defineComponent({__name:"dataEmpty",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$m})}}}),strCode$l=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
`,_sfc_main$r=defineComponent({__name:"deepClone",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$l})}}}),strCode$k=`
  var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
  ];
  const tree = zztool.toTree(data, 'parentId');
  console.log(tree)
`,_sfc_main$q=defineComponent({__name:"toTree",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$k})}}}),strCode$j=`
var data = [
    { id: 1, parentId: 2, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
]
const datas = zztool.groupBy(data, 'parentId');
console.log(datas)
`,_sfc_main$p=defineComponent({__name:"groupBy",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$j})}}}),strCode$i=`
/**
 * 合并数据，取交集/并集/差集/补集
 * @param {*} data1
 * @param {*} data2
 * @param {*} type 1：并集，2：交集，3：差集，4：补集
 * 并集：合并去重
 * 交集：两个数组都有的值
 * 差集：data1中有，data2中没有的值
 * 补集：两个数组中各自没有的值
 */
const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];
const data1 = zztool.dataMerge(arr1,arr2,1);
const data2 = zztool.dataMerge(arr1,arr2,2);
const data3 = zztool.dataMerge(arr1,arr2,3);
const data4 = zztool.dataMerge(arr1,arr2,4);
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
`,_sfc_main$o=defineComponent({__name:"dataMerge",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$i})}}}),strCode$h=`
const arr1 = [1,2,3,4,5,5,6];
const data = zztool.uniqueArray(arr1);
console.log(data)
`,_sfc_main$n=defineComponent({__name:"dataUnique",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$h})}}}),strCode$g=`
const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)
`,_sfc_main$m=defineComponent({__name:"arrayTrim",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$g})}}}),strCode$f=`
/**
 * 获取日期信息
 * @param str 日期字符串或 Date 对象，可为空
 * @returns {year,month,day,hour,minute,second}
 */
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`,_sfc_main$l=defineComponent({__name:"getDateInfo",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$f})}}}),strCode$e=`
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`,_sfc_main$k=defineComponent({__name:"getDateType",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$e})}}}),strCode$d=`
/**
 * 获取日期
 * 如果只有一个参数，str会被当为type传递
 * @param str
 * @param type
 * @returns
 */
console.log(zztool.getDate())
console.log(zztool.getDate("Y/M/D"))
console.log(zztool.getDate(zztool.getTimeStamp('2020/02/20'),"Y~M~D"))
`,_sfc_main$j=defineComponent({__name:"getDate",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$d})}}}),strCode$c=`
const days = zztool.getMonthDays(2024,6);
console.log(days);
`,_sfc_main$i=defineComponent({__name:"getMonthDays",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$c})}}}),strCode$b=`
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {Boolean} days 返回天数
 * @returns {Array}
 */
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`,_sfc_main$h=defineComponent({__name:"getBetwenDate",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$b})}}}),strCode$a=`
/**
 * 获取某日期的近期天数
 * @param {Date | string | number} date 日期
 * @param {1 | 2 | 3 | 4} step 步长 1=3 2=7 3=15 4=30
 * @param {"before" | "after"} type before | after
 * @param {string} format 格式化格式，默认 "Y-M-D"
 * @param {Record<number,number>} option 步长对应天数
 * @returns {string[]} 日期数组
 */
const day1 = zztool.getRecentDate(new Date('2024-6-15'),1);
const day2 = zztool.getRecentDate(new Date('2024-6-15'),2);
const day3 = zztool.getRecentDate(new Date('2024-6-15'),3);
console.log('前三天：'+day1)
console.log('前一周：'+day2)
console.log('前一月：'+day3)
`,_sfc_main$g=defineComponent({__name:"getDateList",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$a})}}}),strCode$9=`
/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：" + arr)
console.log("步长半小时：" + arr1)
`,_sfc_main$f=defineComponent({__name:"getTimeStep",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$9})}}}),strCode$8=`
const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
`,_sfc_main$e=defineComponent({__name:"shuffleArray",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$8})}}}),strCode$7=`
const number = zztool.getPercentage(10, 100,2);
console.log(number)
`,_sfc_main$d=defineComponent({__name:"getPercentage",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$7})}}}),strCode$6=`
// dataChangeIndex 不会修改源数据
  const obj = { arr: [{ oldKey: 'value1' }, { oldKey: 'value2' }] }
  const data = zztool.dataChangeIndex(obj, "arr", "Array");
  console.log(data);
  console.log('__________')
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj,'name,info','NAME,INFO');
  console.log(data2);
  console.log('__________')
  console.log('__________')
  const data3 = zztool.dataChangeIndex(obj, 'arr[0].oldKey,arr[1].oldKey', 'arr[0].newKey,arr[1].newKey');
  console.log(data3)
`,_sfc_main$c=defineComponent({__name:"dataChangeIndex",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$6})}}}),strCode$5=`
  const arr = zztool.getRandomArray(10, 1, 100);
  const data = zztool.chunkArray(arr, 2);
  console.log(data)

  const arr2 = zztool.getRandomArray(10, 1, 100);
  const data2 = zztool.chunkArrayItem(arr2, 4);
  console.log(data2)
`,_sfc_main$b=defineComponent({__name:"chunkArray",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$5})}}}),strCode$4=`
/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 */
  const obj = {a:2,b:1,c:{d:1,e:[],a:'xxx'}};
  const data = zztool.getSameIndexValue(obj,'a');
  console.log(data);
`,_sfc_main$a=defineComponent({__name:"getSameIndexValue",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$4})}}}),strCode$3=`
/**
 * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
const obj = {
  name: 'zz',
  age: 18,
  sex: '男',
  height: 1.8,
  weight: 80,
  isMarried: false,
  hobby: ['reading', 'swimming', 'running'],
  address: {
    province: '北京',
    city: '北京',
    street: '西二旗',
  },
}
const data = zztool.dataFind(obj,'city','北京');
console.log(data)
`,_sfc_main$9=defineComponent({__name:"dataFind",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$3})}}}),strCode$2=`
/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
console.log(zztool.getTimeStamp())
`,_sfc_main$8=defineComponent({__name:"getTimeStamp",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$2})}}}),strCode$1=`
/**
 * 获取索引值
 * 仅适用于对象嵌套，支持以下形式：
 * - 'xxx.xxx.xxx' 形式
 * - 'xxx[0].yyy' 形式
 * - [xxx, xxx, xxx] 形式
 * @param obj 目标对象
 * @param path 访问路径
 * @returns 目标值或空字符串
 */
const obj = {
    name: 'zz',
    age: 18,
    address: {
        city: 'beijing',
        street: 'chaoyang',
        house: [
            {
                room: '101',
                people: {
                    name: 'zz',
                    age: 18,
                },
            },
            {
                room: '102',
                people: {
                    name: 'zz',
                }
            }
        ]
    }
}
console.log(zztool.getValue(obj, 'address.house[0].people.name'))
`,_sfc_main$7=defineComponent({__name:"getValue",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$1})}}}),strCode=`
/**
 * 字符串替换
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @param icon 替换字符
 * @returns 替换后的字符串
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * strReplace('123456789', 3, 6) // 123***789
 */
const str = "15666666666"
const data = zztool.strReplace(str, 2, 9);
console.log(data)
const str1 = "15666666666"
const data1 = zztool.strReplace(str, 2, 1000);
console.log(data1)
`,_sfc_main$6=defineComponent({__name:"strReplace",setup(t){return(o,n)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode})}}}),dialogProps={modelValue:{type:Boolean,default:!1},width:{type:String,default:"60%"},title:{type:String,default:"提示"},headBg:{type:String,default:"#F1F4F8"},headColor:{type:String,default:"#000"},headShow:{type:Boolean,default:!0},footShow:{type:Boolean,default:!0},bgClose:{type:Boolean,default:!0},leaveText:{type:String,default:"取消"},enterText:{type:String,default:"确定"},leaveColor:{type:String,default:"#000"},enterColor:{type:String,default:"#000"},leaveType:{type:String,default:"primary"},enterType:{type:String,default:"warning"},leaveShow:{type:Boolean,default:!0},enterShow:{type:Boolean,default:!0}},buttonProps={type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"default"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},addClass=(t,o)=>{let n=[];const e=[!1];for(let a in t)a!="loading"&&(e.includes(t[a])||(t[a]=="default"?n.push(`${o}-${a}-${t[a]}`):t[a]==!0?n.push(`${o}-${a}`):n.push(`${o}-${t[a]}`)));return n},_sfc_main$5=defineComponent({name:"CptButton",props:buttonProps,setup(t){const o=ref(),n=t,e=()=>{o.value.classList=[],o.value.classList.add("cpt-btn","c-pointer",...addClass(n,"cpt"))},a=()=>n.loading;return onMounted(()=>{e()}),onUpdated(()=>{e()}),{buttonRef:o,isLoading:a}}}),_hoisted_1$5={key:0,class:"cpt-loading"};function _sfc_render$1(t,o,n,e,a,r){return openBlock(),createElementBlock("button",{ref:"buttonRef",class:"",style:normalizeStyle(t.isLoading()?"padding-left:30px;pointer-events:none;":"")},[t.isLoading()?(openBlock(),createElementBlock("div",_hoisted_1$5)):createCommentVNode("",!0),createBaseVNode("span",null,[renderSlot(t.$slots,"default",{},void 0)])],4)}const CptButton=_export_sfc(_sfc_main$5,[["render",_sfc_render$1],["__scopeId","data-v-9fc1e5c7"]]),_sfc_main$4=defineComponent({name:"CptDialog",props:dialogProps,emits:["update:modelValue","close","enter"],comments:{CptButton},setup(t,{emit:o}){const n=ref(),e=ref(),a=ref(!1),r=ref(t.width),c=ref(),l=ref();function g(_=""){_=="bg"&&!t.bgClose||(y(),x())}function d(){l.value.style.transition="all 0.3s ease-in-out",l.value.style.top="0%",l.value.style.left="50%",l.value.style.transform="scale(1) translate(-50%, 0)",l.value.removeEventListener("transitionend",d)}function i(){l.value.style.width=0,l.value.style.left=0,l.value.style.top=0,l.value.style.transition="",l.value.style.transform="",l.value.removeEventListener("transitionend",i),a.value=!1,o("update:modelValue",!1)}function s(_,z){a.value=!0,l.value.style.width=r+"px",l.value.style.left=_+"px",l.value.style.top=z+"px",l.value.style.transition="all 1ms ease-in-out",l.value.style.transform="scale(0) translate(0px,0px)",l.value.addEventListener("transitionend",d)}function p(_){a.value||(n.value=_.clientX,e.value=_.clientY)}function m(_){_.keyCode==27&&g()}function h(){document.body.addEventListener("mousedown",p),document.body.addEventListener("keydown",m)}function y(){l.value.style.width=r+"px",l.value.style.left=n.value+"px",l.value.style.top=e.value+"px",l.value.style.transform="scale(0) translate(0px, 0px)",l.value.addEventListener("transitionend",i)}function x(){o("close",!0)}function $(){o("enter",!0)}return h(),onMounted(()=>{}),onUnmounted(()=>{document.body.removeEventListener("mousedown",p),document.body.removeEventListener("keydown",m)}),watch(()=>t.modelValue,_=>{setTimeout(()=>{_&&s(n.value,e.value)})}),{bg:c,content:l,closeDialog:g,BtnEnter:$,prop:t,reset:y}}}),_hoisted_1$4={class:"CptAlert"},_hoisted_2$3={class:"body"},_hoisted_3$2={key:1,class:"btn"};function _sfc_render(t,o,n,e,a,r){const c=resolveComponent("Cpt-button");return openBlock(),createBlock(Teleport,{to:"body"},[withDirectives(createBaseVNode("div",_hoisted_1$4,[createBaseVNode("div",{ref:"bg",class:"bg",onClick:o[0]||(o[0]=l=>t.closeDialog("bg"))},null,512),createBaseVNode("div",{ref:"content",class:"content",style:normalizeStyle({width:t.width})},[t.headShow?(openBlock(),createElementBlock("div",{key:0,class:"head",style:normalizeStyle({background:t.headBg,color:t.headColor}),ref:"head"},toDisplayString(t.title),5)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2$3,[renderSlot(t.$slots,"default",{},void 0)]),t.footShow?(openBlock(),createElementBlock("div",_hoisted_3$2,[t.leaveShow?(openBlock(),createBlock(c,{key:0,type:t.leaveType,style:normalizeStyle({color:t.leaveColor}),onClick:t.closeDialog},{default:withCtx(()=>[createTextVNode(toDisplayString(t.leaveText),1)]),_:1},8,["type","style","onClick"])):createCommentVNode("",!0),t.enterShow?(openBlock(),createBlock(c,{key:1,type:t.enterType,style:normalizeStyle({color:t.enterColor}),onClick:t.BtnEnter},{default:withCtx(()=>[createTextVNode(toDisplayString(t.enterText),1)]),_:1},8,["type","style","onClick"])):createCommentVNode("",!0)])):createCommentVNode("",!0)],4)],512),[[vShow,t.prop.modelValue]])])}const CptDialog=_export_sfc(_sfc_main$4,[["render",_sfc_render],["__scopeId","data-v-82998e19"]]),_hoisted_1$3={style:{height:"100%","max-height":"100%"}},_hoisted_2$2=["innerHTML"],_hoisted_3$1=["innerHTML"],_sfc_main$3={__name:"index",setup(t){const o=ref(""),n=ref(""),e=ref(!1),a=ref();onMounted(()=>{g(),d()});const r=i=>{let s="";function p(m){if(m.className==="markdown-body")s=m;else if(m.parentElement.className==="markdown-body")s=m.parentElement;else return p(m.parentElement)}return p(i),s},c=i=>{if(i.button===2){i.preventDefault();const s=r(i.target),p=document.createElement("div");p.innerHTML=s.outerHTML,p.style.width="100%",p.style.height="100%",a.value.innerHTML=p.innerHTML,e.value=!0}};function l(i){i.preventDefault()}onMounted(()=>{window.addEventListener("contextmenu",l)}),onBeforeUnmount(()=>{window.removeEventListener("contextmenu",l)});async function g(){try{const i=await fetch(`https://yourhhh.github.io/zztoolDocument/CHANGELOG.md?timestamp=${zztool.getTimeStamp()}`);if(!i.ok)throw new Error("无法加载 CHANGELOG.md");const s=await i.text();marked.setOptions({highlight:(p,m)=>{const h=HighlightJS.getLanguage(m)?m:"plaintext";return HighlightJS.highlight(p,{language:h}).value}}),o.value=marked.parse(s)}catch(i){o.value=`<p style="color: red;">${i.message}</p>`}}async function d(){try{const i=await fetch(`https://yourhhh.github.io/zztoolDocument/README.md?timestamp=${zztool.getTimeStamp()}`);if(!i.ok)throw new Error("无法加载 README.md");const s=await i.text();marked.setOptions({highlight:(p,m)=>{const h=HighlightJS.getLanguage(m)?m:"plaintext";return HighlightJS.highlight(p,{language:h}).value}}),n.value=marked.parse(s)}catch(i){n.value=`<p style="color: red;">${i.message}</p>`}}return(i,s)=>(openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1$3,[s[1]||(s[1]=createBaseVNode("h1",null,"README",-1)),s[2]||(s[2]=createBaseVNode("div",{style:{height:"10px"}},null,-1)),createBaseVNode("div",{class:"md",onMousedown:c},[createBaseVNode("div",{class:"markdown-body",innerHTML:n.value},null,8,_hoisted_2$2)],32),s[3]||(s[3]=createBaseVNode("h1",null,"更新日志",-1)),s[4]||(s[4]=createBaseVNode("div",{style:{height:"10px"}},null,-1)),createBaseVNode("div",{class:"md",onMousedown:c},[createBaseVNode("div",{class:"markdown-body",innerHTML:o.value},null,8,_hoisted_3$1)],32),s[5]||(s[5]=createBaseVNode("div",{style:{height:"10px"}},null,-1))]),createVNode(unref(CptDialog),{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=p=>e.value=p),headShow:!1,enterShow:!1,width:"100%"},{default:withCtx(()=>[createBaseVNode("div",{ref_key:"container",ref:a,style:{height:"calc(100vh - 96px)",overflow:"auto"}}," ceshi ",512)]),_:1},8,["modelValue"])],64))}},comp=Object.freeze(Object.defineProperty({__proto__:null,arrayTrim:_sfc_main$m,chunkArray:_sfc_main$b,dataChangeIndex:_sfc_main$c,dataEmpty:_sfc_main$s,dataEqual:_sfc_main$t,dataFind:_sfc_main$9,dataMerge:_sfc_main$o,dataUnique:_sfc_main$n,debounce:_sfc_main$I,deepClone:_sfc_main$r,error:_sfc_main$J,getBetwenDate:_sfc_main$h,getDate:_sfc_main$j,getDateInfo:_sfc_main$l,getDateList:_sfc_main$g,getDateType:_sfc_main$k,getMonthDays:_sfc_main$i,getPercentage:_sfc_main$d,getRandom:_sfc_main$x,getRandomArray:_sfc_main$w,getRandomColor:_sfc_main$v,getSameIndexValue:_sfc_main$a,getTimeStamp:_sfc_main$8,getTimeStep:_sfc_main$f,getType:_sfc_main$G,getUrlParam:_sfc_main$B,getValue:_sfc_main$7,getVersion:_sfc_main$K,groupBy:_sfc_main$p,index:_sfc_main$3,moneyFormat:_sfc_main$u,paramformat:_sfc_main$A,regEmail:_sfc_main$E,regIdcard:_sfc_main$C,regIsHas:_sfc_main$F,regPhone:_sfc_main$D,shuffleArray:_sfc_main$e,strReplace:_sfc_main$6,throttle:_sfc_main$H,toArray:_sfc_main$y,toString:_sfc_main$z,toTree:_sfc_main$q},Symbol.toStringTag,{value:"Module"})),_hoisted_1$2={style:{display:"flex"}},_sfc_main$2=defineComponent({__name:"App",setup(t){const o=shallowRef(_sfc_main$3),n=r=>{console.log(`%c${r.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),o.value=comp[r.com]};onMounted(()=>{});const e=ref(!1),a=ref();return setInterval(()=>{e.value},100),(r,c)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(MoveBtn),createBaseVNode("div",_hoisted_1$2,[createVNode(Menu,{switchs:e.value,bgColor:a.value,onChange:n},null,8,["switchs","bgColor"]),createBaseVNode("div",{style:normalizeStyle([{width:"100%",padding:"10px",transition:"all 0.2s",height:"calc(100vh - 20px)","max-height":"calc(100vh - 20px)",overflow:"auto"},{backgroundColor:a.value}])},[(openBlock(),createBlock(resolveDynamicComponent(o.value)))],4)])],64))}}),App=_export_sfc(_sfc_main$2,[["__scopeId","data-v-cf76e630"]]),_hoisted_1$1={class:"w-full h-full"},_hoisted_2$1={style:{height:"calc(100% - 37px)"},disabled:"",id:"output",class:"w-full",name:""},_sfc_main$1=defineComponent({__name:"output",props:{content:String},setup(t){const o=t,{t:n}=useI18n();return(e,a)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("h1",null,toDisplayString(unref(n)("output")),1),createBaseVNode("textarea",_hoisted_2$1,toDisplayString(o.content),1)]))}}),_hoisted_1={style:{display:"flex","flex-direction":"column"},class:"h-full"},_hoisted_2={class:"h-full w-full"},_hoisted_3={class:"w-full h-full",name:"",id:"textarea"},_sfc_main=defineComponent({__name:"inputText",props:{contents:{type:String,default:""},show:{type:Boolean,default:!0}},setup(__props){const props=__props,{t:$t}=useI18n(),start=()=>{const outputDom=document.getElementById("output");outputDom.value="";const dom=document.getElementById("textarea"),value=dom.value,str=zztool.replaceAll(value,"console.log",`var outputDom = document.getElementById('output');
    outputDom.value = outputDom.value + '\\n' + '>>> ' + JSON.stringify`);eval(str)};return(t,o)=>(openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("textarea",_hoisted_3,"          "+toDisplayString(props.contents)+`\r
      `,1)]),props.show?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("button",{id:"run",onClick:start},toDisplayString(unref($t)("run")),1),createVNode(_sfc_main$1)],64)):createCommentVNode("",!0)]))}}),widnows=window;widnows.zz=zztool;widnows.zztool=zztool;const app=createApp(App);app.component("OutPut",_sfc_main$1);app.component("InputText",_sfc_main);app.component("CptButton",CptButton);app.use(i18n);app.mount("#app");
//# sourceMappingURL=index-BeB21Yhu.js.map
