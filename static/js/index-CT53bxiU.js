import{d as defineComponent,r as ref,o as onMounted,j as openBlock,k as createElementBlock,t as toDisplayString,u as unref,n as nextTick,a as onUnmounted,l as createBaseVNode,m as renderSlot,p as normalizeStyle,q as withDirectives,v as vShow,f as createVNode,x as withCtx,F as Fragment,y as renderList,z as normalizeClass,A as resolveComponent,B as createBlock,C as createCommentVNode,s as shallowRef,D as resolveDynamicComponent,E as createApp}from"./@vue-tGShkjHH.js";import{c as createI18n,u as useI18n}from"./vue-i18n-Cu2pcuBZ.js";import{g as getRandomColor,a as getRandom,t as throttle,r as replaceAll,m as moneyFormat,z as zztool$1}from"./@zzcpt-IrEE7w-p.js";import"./@intlify-DCvRJ7Og.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const en={zh:"zh",en:"en",install:"Install",use:"Use",close:"Close",illustrate:"illustrate",current:"Current ",language:"Language",space:"Space",stop:"Stop",click:"Click",run:"Run",output:"Output",mod:"surprise",alertTitle:"We are travelers in a hurry, and blessings are like spring rain, nourishing our hearts. May you always smile, live a happy and sweet life, and have a prosperous career and a bright future. May health and happiness always be with you.",dialog:{illustrate1:"Document example output is in the console",illustrate2:"You can use commands such as zz.getVersion() in the console to use this tool library.",illustrate3:"If you have any questions, please see the source code"},illustrateComponent:{li1:"Installation (see console)",li2:"Can be used anywhere",li3:"Please see the console for the output results"},publicmethods:{title:"PublicMethods",list:{li1:{name:"GetVersion",title:"getVersion",com:"getVersion"},li2:{name:"ThrowError",title:"error",com:"error"},li3:{name:"Debounce",title:"debounce",com:"debounce"},li4:{name:"Throttle",title:"throttle",com:"throttle"}}},typedetection:{title:"TypeDetection",list:{li1:{name:"GetType",title:"getType",com:"getType"}}},regexp:{title:"RegExp",list:{li1:{name:"IsContains",title:"regIsHas",com:"regIsHas"},li2:{name:"IsEmail",title:"regEmail",com:"regEmail"},li3:{name:"IsPhone",title:"regPhone",com:"regPhone"},li4:{name:"IsIdcard",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"GetParam",list:{li1:{name:"GetUrlParam",title:"getUrlParam",com:"getUrlParam"},li2:{name:"ParamFormat",title:"paramformat",com:"paramformat"},li3:{name:"getValue",title:"getValue",com:"getValue"}}},transfertype:{title:"TransferType",list:{li1:{name:"ToString",title:"toString",com:"toString"},li2:{name:"ToArray",title:"toArray",com:"toArray"}}},utilfn:{title:"UtilFn",list:{li1:{name:"GetRandomNum",title:"getRandom",com:"getRandom"},li2:{name:"GetRandomArr",title:"getRandomArray",com:"getRandomArray"},li3:{name:"GetRandomColor",title:"getRandomColor",com:"getRandomColor"},li4:{name:"Thousandths",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"Data",list:{li1:{name:"DataEqual",title:"dataEqual",com:"dataEqual"},li2:{name:"DataEmpty",title:"dataEmpty",com:"dataEmpty"},li3:{name:"DeepClone",title:"deepClone",com:"deepClone"},li4:{name:"ToTree",title:"toTree",com:"toTree"},li5:{name:"GroupBy",title:"groupBy",com:"groupBy"},li6:{name:"DataMerge",title:"dataMerge",com:"dataMerge"},li7:{name:"DataUnique",title:"dataUnique",com:"dataUnique"},li8:{name:"DataUnEmpty",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"ShuffleArray",title:"shuffleArray",com:"shuffleArray"},li10:{name:"DataChangeIndex",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"ChunkArray",title:"chunkArray",com:"chunkArray"},li12:{name:"GetSameIndexValue",title:"getSameIndexValue",com:"getSameIndexValue"},li13:{name:"DataFind",title:"dataFind",com:"dataFind"}}},date:{title:"Date",list:{li1:{name:"GetDateInfo",title:"getDateInfo",com:"getDateInfo"},li2:{name:"GetDateType",title:"getDateType",com:"getDateType"},li3:{name:"GetDate",title:"getDate",com:"getDate"},li4:{name:"GetMonthDays",title:"getMonthDays",com:"getMonthDays"},li5:{name:"GetBetwenDate",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"GetDateList",title:"getDateList",com:"getDateList"},li7:{name:"GetTimeStep",title:"getTimeStep",com:"getTimeStep"},li8:{name:"getTimeStamp",title:"getTimeStamp",com:"getTimeStamp"}}},calc:{title:"Calc",list:{li1:{name:"Percentage",title:"getPercentage",com:"getPercentage"}}}},zh={zh:"中文",en:"英文",install:"安装",use:"使用",close:"关 闭",illustrate:"说明",current:"当前",language:"语言",space:"空格",stop:"停止",click:"点击",run:"运行",output:"输出",mod:"炫彩模式",alertTitle:"我们是匆匆的行者，祝福如春雨，滋润心田间。愿你笑容常开，生活美满甜；事业步步高，前程似锦绣。健康快乐伴你左右，幸福永远与你相伴。",dialog:{illustrate1:"文档示例输出均在控制台",illustrate2:"可在控制台中使用 zz.getVersion() 等命令使用该工具库",illustrate3:"有不清楚的请看源码"},illustrateComponent:{li1:"安装(请看控制台)",li2:"可以在任何地方使用",li3:"输出结果请看控制台"},publicmethods:{title:"公共方法",list:{li1:{name:"获取版本号",title:"getVersion",com:"getVersion"},li2:{name:"抛错",title:"error",com:"error"},li3:{name:"防抖",title:"debounce",com:"debounce"},li4:{name:"节流",title:"throttle",com:"throttle"}}},typedetection:{title:"类型检测",list:{li1:{name:"获取类型",title:"getType",com:"getType"}}},regexp:{title:"正则表达式",list:{li1:{name:"是否包含",title:"regIsHas",com:"regIsHas"},li2:{name:"是否邮箱",title:"regEmail",com:"regEmail"},li3:{name:"是否手机号",title:"regPhone",com:"regPhone"},li4:{name:"是否身份证",title:"regIdcard",com:"regIdcard"}}},getparam:{title:"参数获取",list:{li1:{name:"获取url参数",title:"getUrlParam",com:"getUrlParam"},li2:{name:"参数格式化",title:"paramformat",com:"paramformat"},li3:{name:"获取值",title:"getValue",com:"getValue"}}},transfertype:{title:"转类型",list:{li1:{name:"转字符串",title:"toString",com:"toString"},li2:{name:"转数组",title:"toArray",com:"toArray"}}},utilfn:{title:"工具函数",list:{li1:{name:"获取随机数",title:"getRandom",com:"getRandom"},li2:{name:"获取随机数组",title:"getRandomArray",com:"getRandomArray"},li3:{name:"获取随机颜色",title:"getRandomColor",com:"getRandomColor"},li4:{name:"金额千分位",title:"moneyFormat",com:"moneyFormat"}}},data:{title:"数据处理",list:{li1:{name:"数据对比",title:"dataEqual",com:"dataEqual"},li2:{name:"数据是否有空值",title:"dataEmpty",com:"dataEmpty"},li3:{name:"深克隆",title:"deepClone",com:"deepClone"},li4:{name:"转树形结构",title:"toTree",com:"toTree"},li5:{name:"数据分组",title:"groupBy",com:"groupBy"},li6:{name:"取交/并/差/补",title:"dataMerge",com:"dataMerge"},li7:{name:"数组去重",title:"dataUnique",com:"dataUnique"},li8:{name:"数组去空",title:"dataUnEmpty",com:"dataUnEmpty"},li9:{name:"打乱数组",title:"shuffleArray",com:"shuffleArray"},li10:{name:"修改索引",title:"dataChangeIndex",com:"dataChangeIndex"},li11:{name:"数组分块",title:"chunkArray",com:"chunkArray"},li12:{name:"获取索引值",title:"getSameIndexValue",com:"getSameIndexValue"},li13:{name:"查找数据",title:"dataFind",com:"dataFind"}}},date:{title:"日期",list:{li1:{name:"日期信息",title:"getDateInfo",com:"getDateInfo"},li2:{name:"日期类型",title:"getDateType",com:"getDateType"},li3:{name:"获取日期",title:"getDate",com:"getDate"},li4:{name:"月份天数",title:"getMonthDays",com:"getMonthDays"},li5:{name:"两个日期之间的日期",title:"getBetwenDate",com:"getBetwenDate"},li6:{name:"某日期的近期天数",title:"getDateList",com:"getDateList"},li7:{name:"获取时间段",title:"getTimeStep",com:"getTimeStep"},li8:{name:"获取时间戳",title:"getTimeStamp",com:"getTimeStamp"}}},calc:{title:"计算",list:{li1:{name:"百分比",title:"getPercentage",com:"getPercentage"}}}},messages={en,zh},emnu={en:"en",zh:"zh","zh-CN":"zh"};var systemLanguage=navigator.language;emnu[systemLanguage]||(systemLanguage="zh");localStorage.getItem("locale")===null&&localStorage.setItem("locale",emnu[systemLanguage]);const locale=localStorage.getItem("locale")||"zh",i18n=createI18n({legacy:!1,locale,messages}),width=120,height=30,_sfc_main$J=defineComponent({__name:"moveBtn",setup(n){const{t}=useI18n(),o=ref(),e=ref(!0),a=()=>{const s=getRandom(0,window.innerWidth-width),i=getRandom(0,window.innerHeight-height);return{x:s,y:i}},r=()=>{if(!e.value)return;const{x:s,y:i}=a(),m=getRandomColor(),c=getRandomColor();o.value.style.left=s+"px",o.value.style.top=i+"px",o.value.style.backgroundColor=m,o.value.style.color=c};return onMounted(()=>{o.value.addEventListener("mouseenter",r),o.value.addEventListener("click",()=>{alert(t("alertTitle"))}),window.onresize=r,window.addEventListener("keydown",s=>{s.key===" "&&(e.value=!1)}),r()}),(s,i)=>(openBlock(),createElementBlock("button",{ref_key:"btn",ref:o,id:"btn"},toDisplayString(unref(t)("space"))+toDisplayString(unref(t)("stop"))+"("+toDisplayString(unref(t)("click"))+")",513))}}),_export_sfc=(n,t)=>{const o=n.__vccOpts||n;for(const[e,a]of t)o[e]=a;return o},MoveBtn=_export_sfc(_sfc_main$J,[["__scopeId","data-v-16aca347"]]),ScrollbarProps={height:{type:String,default:"100%"}},_sfc_main$I=defineComponent({name:"CptScrollbar",props:ScrollbarProps,setup(n){var t=n.height==="100%"?0:Number(n.height.replace(/px/,""));const o=ref(),e=ref(),a=ref(),r=ref(!1),s=ref(0),i=ref(!1),m=ref(!0);onMounted(()=>{nextTick(()=>{c()}),window.addEventListener("resize",()=>{c()})});function c(){if(n.height==="100%"){let f=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-top"),T=window.getComputedStyle(e.value.parentElement).getPropertyValue("padding-bottom");t=e.value.parentElement.getBoundingClientRect().height-Number(f.replace(/px/,""))-Number(T.replace(/px/,""))}let l=0;const p=a.value.children.length,g=a.value.children;for(let f=0;f<p;f++)l+=g[f].getBoundingClientRect().height;l<=t&&(m.value=!1),u()}function u(){const l=a.value.scrollHeight;s.value=t/(l/t)<10?15:t/(l/t),o.value.style.height=s.value+"px"}let d=ref(!1),h=ref(0);const _=ref(0);function C(){m.value&&(r.value=!0)}function y(l){if(d.value){var p=l.y-_.value-e.value.offsetTop-h.value;p<=0?p=0:p+s.value>=t&&(p=t-s.value),o.value.style.top=p+"px";var g=Math.trunc(p*((a.value.scrollHeight-t)/(t-s.value)));v(g)}}function z(l){o.value.style.top=l+"px"}function v(l){a.value.scrollTop=l}function B(l){$(!0),d.value=!0,_.value=l.y-e.value.offsetTop-o.value.style.top.replace(/px/,""),h.value=a.value.offsetTop}function I(){d.value||(r.value=!1)}function x(){d.value=!1}function $(l){i.value=l}function b(l){if(d.value)return;$(!0);const p=(a.value.scrollHeight-t)/(t-s.value),g=l.target.scrollTop;z(Math.trunc(g/p))}return onMounted(()=>{document.body.addEventListener("mouseup",x),document.body.addEventListener("mousemove",y)}),onUnmounted(()=>{document.body.removeEventListener("mouseup",x),document.body.removeEventListener("mousemove",y)}),{props:n,scrollEle:e,scrollbar:o,scrollbarBox:a,scrollbarShow:r,scrollbarEnter:C,scrollbarMove:y,scrollbarDown:B,scrollbarLeave:I,scrollbarUp:x,scroll:b}}}),_hoisted_1$4=["onmouseenter","onmouseleave"],_hoisted_2$4=["onscroll"],_hoisted_3$3={class:"scrollbarBoxs",style:{}},_hoisted_4$2=["onmousedown"];function _sfc_render(n,t,o,e,a,r){return openBlock(),createElementBlock("div",{class:"scrollbarBox",style:normalizeStyle({height:n.props.height}),ref:"scrollEle",onmouseenter:n.scrollbarEnter,onmouseleave:n.scrollbarLeave},[createBaseVNode("div",{ref:"scrollbarBox",onscroll:n.scroll,style:normalizeStyle({"max-height":n.props.height}),class:"boxitem"},[renderSlot(n.$slots,"default",{},void 0)],12,_hoisted_2$4),withDirectives(createBaseVNode("div",_hoisted_3$3,[createBaseVNode("div",{class:"scrollbar pointer",onmousedown:n.scrollbarDown,ref:"scrollbar"},null,8,_hoisted_4$2)],512),[[vShow,n.scrollbarShow]])],12,_hoisted_1$4)}const CptScrollbar=_export_sfc(_sfc_main$I,[["render",_sfc_render],["__scopeId","data-v-1e1f516f"]]),MenuData=[{name:"publicmethods.title",list:[{name:"publicmethods.list.li2.name",title:"error",com:"error"},{name:"publicmethods.list.li3.name",title:"debounce",com:"debounce"},{name:"publicmethods.list.li4.name",title:"throttle",com:"throttle"}]},{name:"typedetection.title",list:[{name:"typedetection.list.li1.name",title:"getType",com:"getType"}]},{name:"regexp.title",list:[{name:"regexp.list.li1.name",title:"regIsHas",com:"regIsHas"},{name:"regexp.list.li2.name",title:"regEmail",com:"regEmail"},{name:"regexp.list.li3.name",title:"regPhone",com:"regPhone"},{name:"regexp.list.li4.name",title:"regIdcard",com:"regIdcard"}]},{name:"getparam.title",list:[{name:"getparam.list.li1.name",title:"getUrlParam",com:"getUrlParam"},{name:"getparam.list.li2.name",title:"paramformat",com:"paramformat"},{name:"getparam.list.li3.name",title:"getValue",com:"getValue"}]},{name:"transfertype.title",list:[{name:"transfertype.list.li1.name",title:"toString",com:"toString"},{name:"transfertype.list.li2.name",title:"toArray",com:"toArray"}]},{name:"utilfn.title",list:[{name:"utilfn.list.li1.name",title:"getRandom",com:"getRandom"},{name:"utilfn.list.li2.name",title:"getRandomArray",com:"getRandomArray"},{name:"utilfn.list.li3.name",title:"getRandomColor",com:"getRandomColor"},{name:"utilfn.list.li4.name",title:"moneyFormat",com:"moneyFormat"}]},{name:"data.title",list:[{name:"data.list.li1.name",title:"dataEqual",com:"dataEqual"},{name:"data.list.li2.name",title:"dataEmpty",com:"dataEmpty"},{name:"data.list.li3.name",title:"deepClone",com:"deepClone"},{name:"data.list.li4.name",title:"toTree",com:"toTree"},{name:"data.list.li5.name",title:"groupBy",com:"groupBy"},{name:"data.list.li6.name",title:"dataMerge",com:"dataMerge"},{name:"data.list.li7.name",title:"dataUnique",com:"dataUnique"},{name:"data.list.li8.name",title:"arrayTrim",com:"arrayTrim"},{name:"data.list.li9.name",title:"shuffleArray",com:"shuffleArray"},{name:"data.list.li10.name",title:"dataChangeIndex",com:"dataChangeIndex"},{name:"data.list.li11.name",title:"chunkArray",com:"chunkArray"},{name:"data.list.li12.name",title:"getSameIndexValue",com:"getSameIndexValue"},{name:"data.list.li13.name",title:"dataFind",com:"dataFind"}]},{name:"date.title",list:[{name:"date.list.li1.name",title:"getDateInfo",com:"getDateInfo"},{name:"date.list.li2.name",title:"getDateType",com:"getDateType"},{name:"date.list.li3.name",title:"getDate",com:"getDate"},{name:"date.list.li4.name",title:"getMonthDays",com:"getMonthDays"},{name:"date.list.li5.name",title:"getBetwenDate",com:"getBetwenDate"},{name:"date.list.li6.name",title:"getDateList",com:"getDateList"},{name:"date.list.li7.name",title:"getTimeStep",com:"getTimeStep"},{name:"date.list.li8.name",title:"getTimeStamp",com:"getTimeStamp"}]},{name:"calc.title",list:[{name:"calc.list.li1.name",title:"getPercentage",com:"getPercentage"}]}],_hoisted_1$3={class:"menu-item"},_hoisted_2$3={style:{"margin-top":"10px"}},_hoisted_3$2=["selected"],_hoisted_4$1=["selected"],_hoisted_5$1={class:"menu-item"},_hoisted_6$1={class:"title"},_hoisted_7$1={class:"item"},_hoisted_8={class:"item"},_hoisted_9={class:"item"},_hoisted_10={class:"title"},_hoisted_11=["onClick"],_sfc_main$H=defineComponent({__name:"menu",props:{switchs:{type:Boolean,default:!1},bgColor:{type:String,default:"#fff"}},emits:["change"],setup(n,{emit:t}){const o=t,{t:e,locale:a}=useI18n(),r=ref("getVersion"),s=c=>{o("change",c),r.value=c.title},i=localStorage.getItem("locale")||"zh",m=c=>{localStorage.setItem("locale",c.target.value),a.value=c.target.value};return(c,u)=>(openBlock(),createElementBlock("div",{class:"menu",style:normalizeStyle({backgroundColor:n.bgColor})},[createVNode(unref(CptScrollbar),null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$3,[createBaseVNode("h4",_hoisted_2$3,toDisplayString(unref(e)("current"))+toDisplayString(unref(e)("language")),1),createBaseVNode("select",{onChange:m},[createBaseVNode("option",{value:"zh",selected:unref(i)==="zh"},toDisplayString(unref(e)("zh")),9,_hoisted_3$2),createBaseVNode("option",{value:"en",selected:unref(i)==="en"},toDisplayString(unref(e)("en")),9,_hoisted_4$1)],32)]),createBaseVNode("div",_hoisted_5$1,[createBaseVNode("div",_hoisted_6$1,toDisplayString(unref(e)("illustrate")),1),createBaseVNode("div",_hoisted_7$1,toDisplayString(unref(e)("illustrateComponent.li1")),1),createBaseVNode("div",_hoisted_8,toDisplayString(unref(e)("illustrateComponent.li2")),1),createBaseVNode("div",_hoisted_9,toDisplayString(unref(e)("illustrateComponent.li3")),1)]),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(MenuData),(d,h)=>(openBlock(),createElementBlock("div",{class:"menu-item",key:h},[createBaseVNode("div",_hoisted_10,toDisplayString(unref(e)(d.name)),1),(openBlock(!0),createElementBlock(Fragment,null,renderList(d.list,(_,C)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["item",[r.value===_.title?"active":""]]),key:C,onClick:y=>s(_)},toDisplayString(unref(e)(_.name)),11,_hoisted_11))),128))]))),128))]),_:1})],4))}}),Menu=_export_sfc(_sfc_main$H,[["__scopeId","data-v-d869d1a3"]]),strCode$D=`
const version = zztool.getVersion();
console.log(version);
`,_sfc_main$G=defineComponent({__name:"getVersion",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$D})}}}),strCode$C=`
zztool.error('抛出错误');
`,_sfc_main$F=defineComponent({__name:"error",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$C,show:!1})}}}),strCode$B=`
const clickFn = zztool.debounce(() => {
    console.log('防抖');
}, 1000);
`,_sfc_main$E=defineComponent({__name:"debounce",setup(n){const t=()=>{zztool.debounce(()=>{console.log("防抖")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:e[0]||(e[0]=r=>t())},"点击"),createVNode(a,{contents:strCode$B,show:!1})],64)}}}),strCode$A=`
zztool.throttle(() => {
    console.log('节流');
}, 1000);
`,_sfc_main$D=defineComponent({__name:"throttle",setup(n){const t=()=>{throttle(()=>{console.log("节流")},1e3)};return(o,e)=>{const a=resolveComponent("InputText");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("button",{onClick:t},"点击"),createVNode(a,{contents:strCode$A,show:!1})],64)}}}),strCode$z=`
const data = 10;
const type = zztool.getType(data);
console.log(type)
`,_sfc_main$C=defineComponent({__name:"getType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$z})}}}),strCode$y=`
const str = 'how are you?';
const isHas = zztool.regIsHas(str, 'you');
console.log(isHas)
`,_sfc_main$B=defineComponent({__name:"regIsHas",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$y})}}}),_hoisted_1$2={class:"w-50 h-full"},_hoisted_2$2={style:{height:"calc(100% - 37px)"},disabled:"",id:"output",class:"w-full",name:""},_sfc_main$A=defineComponent({__name:"output",props:{content:String},setup(n){const t=n,{t:o}=useI18n();return(e,a)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("h1",null,toDisplayString(unref(o)("output")),1),createBaseVNode("textarea",_hoisted_2$2,toDisplayString(t.content),1)]))}}),_hoisted_1$1={style:{display:"flex"},class:"h-full"},_hoisted_2$1={class:"h-full w-50"},_hoisted_3$1={class:"w-full h-full",name:"",id:"textarea"},_sfc_main$z=defineComponent({__name:"inputText",props:{contents:{type:String,default:""},show:{type:Boolean,default:!0}},setup(__props){const props=__props,{t:$t}=useI18n(),start=()=>{const outputDom=document.getElementById("output");outputDom.value="";const dom=document.getElementById("textarea"),value=dom.value,str=replaceAll(value,"console.log",`var outputDom = document.getElementById('output');
    outputDom.value = outputDom.value + '\\n' + '>>> ' + JSON.stringify`);eval(str)};return(n,t)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[createBaseVNode("textarea",_hoisted_3$1,"          "+toDisplayString(props.contents)+`\r
      `,1)]),props.show?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("button",{onClick:start},toDisplayString(unref($t)("run")),1),createVNode(_sfc_main$A)],64)):createCommentVNode("",!0)]))}}),strCode$x=`
const email1 = 'xxxx@163.com';
const email2 = 'xxxx@gmail.com';
const email3 = 'xxxx1234234.com';
const arr = Array.from([email1,email2,email3])
for(let i = 0; i < arr.length; i++){
  const item = arr[i];
  console.log(zztool.regEmail(item));
}`,_sfc_main$y=defineComponent({__name:"regEmail",setup(n){return(t,o)=>(openBlock(),createBlock(_sfc_main$z,{contents:strCode$x}))}}),strCode$w=`
  const phone1 = '15666666666';
  const phone2 = '11111111111';
  const arr = Array.from([phone1, phone2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    console.log(zztool.regPhone(item));
  }
`,_sfc_main$x=defineComponent({__name:"regPhone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$w})}}}),strCode$v=`
  const idcard1 = '111111111111111111';
  const idcard2 = '46516546549874654x';
  const arr = Array.from([idcard1, idcard2]);
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const result = zztool.regIdcard(item);
    console.log(result); // false false
  }
`,_sfc_main$w=defineComponent({__name:"regIdcard",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$v})}}}),strCode$u=`
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
`,_sfc_main$v=defineComponent({__name:"getUrlParam",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$u})}}}),strCode$t=`
/**
 * node环境下的formData格式 会使用"form-data"包
 */
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`,_sfc_main$u=defineComponent({__name:"paramformat",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$t})}}}),strCode$s=`
  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const str1 = zztool.toString(obj);
  const str2 = zztool.toString(arr);
  console.log(str1);
  console.log(str2);
`,_sfc_main$t=defineComponent({__name:"toString",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$s})}}}),strCode$r=`
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
`,_sfc_main$s=defineComponent({__name:"toArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$r})}}}),strCode$q=`
  const random = zztool.getRandom(0,100);
  console.log(random)
`,_sfc_main$r=defineComponent({__name:"getRandom",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$q})}}}),strCode$p=`
  const random = zztool.getRandomArray(100,0,100);
  console.log(random)
`,_sfc_main$q=defineComponent({__name:"getRandomArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$p})}}}),strCode$o=`
  const color = zztool.getRandomColor();
  const rgbColor = zztool.getRandomRGBColor();
  const rgbaColor = zztool.getRandomRGBA();
  console.log(color)
  console.log(rgbColor)
  console.log(rgbaColor)
`,_sfc_main$p=defineComponent({__name:"getRandomColor",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$o})}}}),money=1e6,strCode$n=`
const money = 1000000;
const moneyFormat = zztool.moneyFormat(money);
const moneyFormat2 = zztool.moneyFormat(money,'~','$');
console.log(moneyFormat);
console.log(moneyFormat2);
`,_sfc_main$o=defineComponent({__name:"moneyFormat",setup(n){const t=moneyFormat(money),o=moneyFormat(money,"~","$");return console.log(t,o),(e,a)=>{const r=resolveComponent("InputText");return openBlock(),createBlock(r,{contents:strCode$n})}}}),strCode$m=`
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
`,_sfc_main$n=defineComponent({__name:"dataEqual",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$m})}}}),strCode$l=`
// false 0 -1 不会为空
  const obj1 = {a:2,b:-1,c:{d:0,e:false}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`,_sfc_main$m=defineComponent({__name:"dataEmpty",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$l})}}}),strCode$k=`
  const obj1 = {a:2,b:1,c:{d:1}};
  const obj2 = zztool.deepClone(obj1);
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
`,_sfc_main$l=defineComponent({__name:"deepClone",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$k})}}}),strCode$j=`
  var data = [
    { id: 1, parentId: null, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
    { id: 5, parentId: null, name: "Item 2" }
  ];
  const tree = zztool.toTree(data, 'parentId');
  console.log(tree)
`,_sfc_main$k=defineComponent({__name:"toTree",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$j})}}}),strCode$i=`
var data = [
    { id: 1, parentId: 2, name: "Item 1" },
    { id: 2, parentId: 1, name: "Item 1.1" },
    { id: 3, parentId: 1, name: "Item 1.2" },
    { id: 4, parentId: 2, name: "Item 1.1.1" },
]
const datas = zztool.groupBy(data, 'parentId');
console.log(datas)
`,_sfc_main$j=defineComponent({__name:"groupBy",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$i})}}}),strCode$h=`
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
`,_sfc_main$i=defineComponent({__name:"dataMerge",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$h})}}}),strCode$g=`
const arr1 = [1,2,3,4,5,5,6];
const data = zztool.uniqueArray(arr1);
console.log(data)
`,_sfc_main$h=defineComponent({__name:"dataUnique",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$g})}}}),strCode$f=`
const arr1 = [1,2,3,4,5,5,'','',6];
console.log(arr1)
const data = zztool.arrayTrim(arr1);
console.log(data)
`,_sfc_main$g=defineComponent({__name:"arrayTrim",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$f})}}}),strCode$e=`
/**
 * 获取日期信息
 * @param str 日期字符串或 Date 对象，可为空
 * @returns {year,month,day,hour,minute,second}
 */
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`,_sfc_main$f=defineComponent({__name:"getDateInfo",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$e})}}}),strCode$d=`
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`,_sfc_main$e=defineComponent({__name:"getDateType",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$d})}}}),strCode$c=`
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
`,_sfc_main$d=defineComponent({__name:"getDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$c})}}}),strCode$b=`
const days = zztool.getMonthDays(2024,6);
console.log(days);
`,_sfc_main$c=defineComponent({__name:"getMonthDays",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$b})}}}),strCode$a=`
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {Boolean} days 返回天数
 * @returns {Array}
 */
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`,_sfc_main$b=defineComponent({__name:"getBetwenDate",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$a})}}}),strCode$9=`
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
`,_sfc_main$a=defineComponent({__name:"getDateList",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$9})}}}),strCode$8=`
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
`,_sfc_main$9=defineComponent({__name:"getTimeStep",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$8})}}}),strCode$7=`
const arr = zztool.getRandomArray(10,0,10);
console.log(zztool.shuffleArray(arr));
console.log(zztool.shuffleArray(arr));
`,_sfc_main$8=defineComponent({__name:"shuffleArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$7})}}}),strCode$6=`
const number = zztool.getPercentage(10, 100,2);
console.log(number)
`,_sfc_main$7=defineComponent({__name:"getPercentage",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$6})}}}),strCode$5=`
// dataChangeIndex 不会修改源数据

  const obj = {
    name: "zztool",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zztool",
        age: 18,
        sex: 1,
        address: "中国",
        hobby: ["打游戏", "看电影"],
        info: null,
    },
    arr: [
        {
        name: "zztool",
        },
        {
        name: "list",
        },
        1,2,3
    ]
  }
  const data = zztool.dataChangeIndex(obj, "name", "Name");
  console.log(data);
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj,'name,info','NAME,INFO');
  console.log(data2);
  console.log('源数据↓')
  console.log(obj)
`,_sfc_main$6=defineComponent({__name:"dataChangeIndex",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$5})}}}),strCode$4=`
  const arr = zztool.getRandomArray(10, 1, 100);
  const data = zztool.chunkArray(arr, 2);
  console.log(data)

  const arr2 = zztool.getRandomArray(10, 1, 100);
  const data2 = zztool.chunkArrayItem(arr2, 4);
  console.log(data2)
`,_sfc_main$5=defineComponent({__name:"chunkArray",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$4})}}}),strCode$3=`
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
`,_sfc_main$4=defineComponent({__name:"getSameIndexValue",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$3})}}}),strCode$2=`
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
`,_sfc_main$3=defineComponent({__name:"dataFind",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$2})}}}),strCode$1=`
/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
console.log(zztool.getTimeStamp())
`,_sfc_main$2=defineComponent({__name:"getTimeStamp",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode$1})}}}),strCode=`
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
`,_sfc_main$1=defineComponent({__name:"getValue",setup(n){return(t,o)=>{const e=resolveComponent("InputText");return openBlock(),createBlock(e,{contents:strCode})}}}),_hoisted_1={style:{display:"flex"}},_hoisted_2={id:"dialog"},_hoisted_3={class:"win"},_hoisted_4={class:"container"},_hoisted_5={style:{"list-style":"inside"}},_hoisted_6={style:{"font-weight":"bold"}},_hoisted_7={class:"closeBtn"},_sfc_main=defineComponent({__name:"App",setup(n){const t=shallowRef(_sfc_main$G),o={getVersion:_sfc_main$G,error:_sfc_main$F,debounce:_sfc_main$E,throttle:_sfc_main$D,getType:_sfc_main$C,regIsHas:_sfc_main$B,regEmail:_sfc_main$y,regPhone:_sfc_main$x,regIdcard:_sfc_main$w,getUrlParam:_sfc_main$v,paramformat:_sfc_main$u,toString:_sfc_main$t,toArray:_sfc_main$s,getRandom:_sfc_main$r,getRandomArray:_sfc_main$q,getRandomColor:_sfc_main$p,moneyFormat:_sfc_main$o,dataEqual:_sfc_main$n,dataEmpty:_sfc_main$m,deepClone:_sfc_main$l,toTree:_sfc_main$k,groupBy:_sfc_main$j,dataMerge:_sfc_main$i,dataUnique:_sfc_main$h,arrayTrim:_sfc_main$g,getDateInfo:_sfc_main$f,getDateType:_sfc_main$e,getDate:_sfc_main$d,getMonthDays:_sfc_main$c,getBetwenDate:_sfc_main$b,getDateList:_sfc_main$a,getTimeStep:_sfc_main$9,shuffleArray:_sfc_main$8,getPercentage:_sfc_main$7,dataChangeIndex:_sfc_main$6,chunkArray:_sfc_main$5,getSameIndexValue:_sfc_main$4,dataFind:_sfc_main$3,getTimeStamp:_sfc_main$2,getValue:_sfc_main$1},e=c=>{console.log(`%c${c.title}`,"background: #000000; color: #FFD700; border-radius: 3px 0 0 3px;padding:2px 5px"),t.value=o[c.com]},{t:a}=useI18n(),r=ref(),s=ref();onMounted(()=>{r.value=document.getElementById("dialog"),s.value=document.querySelector(".closeBtn"),r.value.showModal(),s.value.addEventListener("click",function(){r.value.close()})});const i=ref(!1),m=ref();return setInterval(()=>{i.value&&(m.value=zztool.getRandomRGBA())},100),(c,u)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(MoveBtn),createBaseVNode("div",_hoisted_1,[createVNode(Menu,{switchs:i.value,bgColor:m.value,onChange:e},null,8,["switchs","bgColor"]),createBaseVNode("div",{style:normalizeStyle([{width:"100%",padding:"10px",transition:"all 0.2s"},{backgroundColor:m.value}])},[(openBlock(),createBlock(resolveDynamicComponent(t.value)))],4),createBaseVNode("dialog",_hoisted_2,[createBaseVNode("div",_hoisted_3,[createBaseVNode("div",_hoisted_4,[createBaseVNode("h4",null,toDisplayString(unref(a)("install"))+"/"+toDisplayString(unref(a)("use")),1),u[1]||(u[1]=createBaseVNode("code",null,[createBaseVNode("pre",null,`--- install
npm install @zzcpt/zztool@latest
--- file
import * as zztool from '@zzcpt/zztool';
import { xxx } from '@zzcpt/zztool';
            `)],-1)),createBaseVNode("h4",null,toDisplayString(unref(a)("illustrate")),1),createBaseVNode("ul",_hoisted_5,[createBaseVNode("li",_hoisted_6,toDisplayString(unref(a)("dialog.illustrate3")),1),createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate1")),1),createBaseVNode("li",null,toDisplayString(unref(a)("dialog.illustrate2")),1)])]),createBaseVNode("button",_hoisted_7,toDisplayString(unref(a)("close")),1),createBaseVNode("button",{onClick:u[0]||(u[0]=d=>i.value=!i.value)},toDisplayString(unref(a)("mod")),1)])])])],64))}}),App=_export_sfc(_sfc_main,[["__scopeId","data-v-12872479"]]),widnows=window;widnows.zz=zztool$1;widnows.zztool=zztool$1;const app=createApp(App);app.component("OutPut",_sfc_main$A);app.component("InputText",_sfc_main$z);app.use(i18n);app.mount("#app");
//# sourceMappingURL=index-CT53bxiU.js.map
