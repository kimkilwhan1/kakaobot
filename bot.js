const scriptName = "bot";
var MainLink = "https://raw.githubusercontent.com/kimkilwhan1/kakaobot/main/main.js";

var text=Utils.getWebText(MainLink);
eval(text.substring(text.indexOf("<body>")+6,text.indexOf("</body>")));