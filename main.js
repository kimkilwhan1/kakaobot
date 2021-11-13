
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) 
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
const ub2db = (str) => (str == undefined ? 0 : str);
const isMatch = (msg, str) => (msg.indexOf(str) != -1);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var today = new Date();

    if (sender == "영우짱짱맨")
        replier.reply(eval(msg));

    if(isMatch(msg, "reload")){
        Api.reload(scriptName);
    }


    if (isMatch(msg, "오늘급식")){
        LunchParse(today.getFullYear(), today.getMonth());
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