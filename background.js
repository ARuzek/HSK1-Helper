// thanks to https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQyNWY4ZGJjZjk3ZGM3ZWM0MDFmMDE3MWZiNmU2YmRhOWVkOWU3OTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzczNjc1NzksImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzYyNjI5ODM0Mjg1MzExOTU1OSIsImVtYWlsIjoiYW1lbGlhLnJ1emVrLmtsZWluQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQW1lbGlhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eFltdks3QzRZSmJyWmZRTDAycmFMcUZUZzJfNGZVODBGSWNrU2xxU1E9czk2LWMiLCJnaXZlbl9uYW1lIjoiQW1lbGlhIiwiaWF0IjoxNjc3MzY3ODc5LCJleHAiOjE2NzczNzE0NzksImp0aSI6IjRiZTQzMjAwMjE0ZmI1NDBiZWE3ZjgyNGU2MmM5NGI3ZGE0MGU1OTQifQ.GQvaNiJBFXzwf5wUI14RqfZP45jDz57ephJrVbSu_ZjuiZM-EADucoQwbBDwvxziZd810QlaI47sL7TOyHq2wSWGmz8Pld67xS_Dm5bWBCMjbzA1gwAvyjhXruFVuUBAo9dHow7efl7BQQZnBGPMY4jWbkcd4nl2SrfiS7MaViHjEIIQ76NgjRbAEavMR7NGwqt3NQzvmNx2vV3kQ-EGNWFC1spH1zaEYpsz957OxndY3vdyxNlTiS6rJWlIX2p9C3u_Va7trh2EeYMqgG4fwbR4uDtycqShi-IjAtmjs5yR6_1YWDRonVEom3u1NYDxGEEgnYyrdwBYl3zmWQByzw
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

const translation = new Map ([
['I','我'],
['me','我'],
['us','我们'],
['we','我们'],
['you','你'],
['him','他'],
['he','他'],
['she','她'],
['her','她'],
['they','他们'],
['this','这 (这儿)'],
['here','这 (这儿)'],
['there','那 (那儿)'],
['that','那 (那儿)'],
['where','哪（哪儿）'],
['who','谁'],
['why','什么'],
['what','什么'],
['how much','多少'],
['how many','几'],
['a few','几'],
['how','怎么'],
['how about','怎么样'],
['one','一'],
['two','二'],
['three','三'],
['four','四'],
['five','五'],
['six','六'],
['seven','七'],
['eight','八'],
['nine','九'],
['ten','十'],
['zero','零'],
['a','个'],
['year','岁'],
['volume','本'],
['some','些'],
['piece','块'],
['no','不'],
['not','没'],
['quite','很'],
['very','很'],
['too','太'],
['all','都'],
['and','和'],
['in','在'],
['at','在'],
['?','吗'],
['hello','喂'],
['home','家'],
['school','学校'],
['restaurant','饭店'],
['store','商店'],
['hospital','医院'],
['train station','火车站'],
['China','中国'],
['Beijing','北京'],
['up','上'],
['down','下'],
['front','前面'],
['behind','后面'],
['inside','里'],
['today','今天'],
['tomorrow','明天'],
['yesterday','昨天'],
['morning','上午'],
['noon','中午'],
['afternoon','下午'],
['year','年'],
['month','月'],
['day','日'],
['week','星期'],
['dot','点'],
['spot','点'],
['minute','分钟'],
['now','现在'],
['time','时候'],
['father','爸爸'],
['mother','妈妈'],
['son','儿子'],
['daughter','女儿'],
['teacher','老师'],
['student','学生'],
['classmate','同学'],
['friend','朋友'],
['doctor','医生'],
['sir','先生'],
['Miss','小姐'],
['cloth','衣服'],
['water','水'],
['vegetable','菜'],
['rice','米饭'],
['fruit','水果'],
['apple','苹果'],
['tea','茶'],
['cup','杯子'],
['money','钱'],
['airplane','飞机'],
['taxi','出租车'],
['television','电视'],
['computer','电脑'],
['movie','电影'],
['weather','天气'],
['cat','猫'],
['dog','狗'],
['thing','东西'],
['person','人'],
['name','名字'],
['book','书'],
['Chinese','汉语'],
['character','字'],
['desk','桌子'],
['chair','椅子'],
['thank','谢谢'],
['you are welcome','不客气'],
['good-bye','再见'],
['please','请'],
['sorry','对不起'],
['It doesnt matter','没关系'],
['be','是'],
['is','是'],
['are','是'],
['have','有'],
['look','看'],
['listen','听'],
['speak','说话'],
['read','读'],
['write','写'],
['see','看见'],
['call','叫'],
['come','来'],
['return','回'],
['go','去'],
['eat','吃'],
['drink','喝'],
['sleep','睡觉'],
['call up','打电话'],
['do','做'],
['buy','买'],
['open','开'],
['sit','坐'],
['live','住'],
['study','学习'],
['work','工作'],
['rain','下雨'],
['love','爱'],
['love, like','喜欢'],
['want','想'],
['know','认识'],
['can','会'],
['be able to','能'],
['good','好'],
['big','大'],
//START OF HSK2 //
//['you','您'],
['it','它'],
['everyone','大家'],
['every','每'],
['each','每'],
['why','为什么'],
['zero','零'],
['two','两'],
['hundred','百'],
['thousand','千'],
['first','第一'],
['times','次'],
['piece','件'],
['do not','别'],
['very','非常'],
['also','也'],
['still','还'],
['the most','最'],
['really','真'],
['be being','正在'],
['already','已经'],
['together','一起'],
['again','再'],
['at once','就'],
['because','因为……所以……'],
['although','虽然……但是……'],
['from','从'],
['compared to','比'],
['to','往'],
['toward','往'],
['distance','离'],
['airport','机场'],
['classroom','教室'],
['room','房间'],
['road','路'],
['left','左边'],
['right','右边'],
['outside','外'],
['side','旁边'],
['in a short while','一下'],
['morning','早上'],
['night','晚上'],
['hour','小时'],
['time','时间'],
['last year','去年'],
['date','日'],
['birthday','生日'],
['older brother','哥哥'],
['older sister','姐姐'],
['younger brother','弟弟'],
['younger sister','妹妹'],
['husband','丈夫'],
['wife','妻子'],
['child','孩子'],
['man','男人'],
['woman','女人'],
['waiter','服务员'],
['fish','鱼'],
['mutton','羊肉'],
['milk','牛奶'],
['egg','鸡蛋'],
['watermelon','西瓜'],
['coffee','咖啡'],
['snow','雪'],
['medicine','药'],
['cellphone','手机'],
['watch','手表'],
['eye','眼睛'],
['body','身体'],
['bus','公共汽车'],
['newspaper','报纸'],
['door','门'],
['topic, item','题'],
['lesson','课'],
['surname','姓'],
['question','问题'],
['matter','事情'],
['exam','考试'],
['ticket','票'],
['meaning','意思'],
['color','颜色'],
['pencil','铅笔'],
['noodle','面条'],
['train station','火车站'],
['company','公司'],
['hotel','宾馆'],
['talk','说话'],
['sell','卖'],
['ask','问'],
['walk','走'],
['enter','进'],
['come','出'],
['run','跑步'],
['arrive','到'],
['wear','穿'],
['wash','洗'],
['give','给'],
['find','找'],
['understand','懂'],
['smile','笑'],
['tell','告诉'],
['prepare','准备'],
['begin','开始'],
['introduce','介绍'],
['help','帮助'],
['play','玩'],
['present','送'],
['wait','等'],
['let','让'],
['get up','起床'],
['sing','唱歌'],
['dance','跳舞'],
['travel','旅游'],
['be on duty','上班'],
['get sick','生病'],
['rest','休息'],
['exercise','运动'],
['swim','游泳'],
['play footbal','踢足球'],
['play basketball','打篮球'],
['finish','完'],
['think','觉得'],
['know','知道'],
['hope','希望'],
['can','可以'],
['want','要'],
['may','可能'],
['tall','高'],
['red','红'],
['white','白'],
['black','黑'],
['busy','忙'],
['fast','快'],
['slow','慢'],
['far','远'],
['close','近'],
['delicious','好吃'],
['tired','累'],
['long','长'],
['new','新'],
['expensive','贵'],
['cheap','便宜'],
['fine','晴'],
['cloudy','阴'],
['wrong','错'],
['happy','快乐'],
//['to','对'],
['right','对'],
['correct','对']
])


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let randomizedTranslation = new Map();
for(let i=1; i<=translation.size;) {
    let word = getRandomInt(translation.size); 
    randomizedTranslation.set(Array.from(translation.keys())[word] , translation.get(Array.from(translation.keys())[word]));
    translation.delete(Array.from(translation.keys())[word]);

}


for(let i=0; i<text.length; i++) {
    randomizedTranslation.forEach(function(value, key){
        if (text[i].innerHTML.includes(" "+key+" ")) {
            text[i].innerHTML = text[i].innerHTML.replace(" "+key+" ", "<span title="+key+">"+" "+value+" "+"</span>");
        }
    })
}

