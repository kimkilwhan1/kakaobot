function ub2db(str){
    return (str == undefined ? 0 : str);
}
    
function isMatch(msg, str) { 
    return (msg.indexOf(str) != -1);
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var today = new Date();

    if (sender == "영우짱짱맨")
        replier.reply(eval(msg));

    if(isMatch(msg, "reload")){
        Api.reload(scriptName);
    }


    if (isMatch(msg, "오늘급식")){
        let m="[급식]";
        let parse=LunchParse(today.getFullYear(), today.getMonth());

        for(var e in parse){
            if(e!=0)m+="\n"+parse[e];
        }
        replier.reply(m);
    }


}

function LunchParse(yyyy, mm) {
    mm++;
    if(mm<10)mm="0"+mm;

    var parse1 = ub2db(Utils.getWebText("http://\
    bg.icehs.kr/foodlist.do?year="+ yyyy + "&month=" + mm + "&m=020506&s=bg"));
    var parse2 = ub2db(parse1.split("<th scope=\"row\">"));
    
    return parse2;
}
function onCreate(savedInstanceState, activity) { }

function onStart(activity) { }

function onResume(activity) { }

function onPause(activity) { }

function onStop(activity) { }