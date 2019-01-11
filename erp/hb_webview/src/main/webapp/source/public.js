// 同意请求公司名称

var projectName = "缘来识你婚恋服务中心";

// 同意请求根路径
var ROOT = getROOTPath();

var FileRoot = "/datafiles";

// 初始化
/*
 * $(function() { $("body").addClass("animated fadeInUp"); })
 */

function PA(text) {
	var ran = Math.random();
	$("#yuyinbofang").attr("src", ROOT + "/service/getAudio?text=" + text + "&ran=" + ran);
}

function getROOTPath() {
	// 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/uimcardprj
	// var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') +
	// 1);
	return (localhostPaht);
}

// 创建二维码
function createQRcode(element, text) {
	if (text.indexOf("?") >= 0) {
		text = text + "&ran=" + parseInt(Math.random() * 100);
	} else {
		text = text + "?ran=" + parseInt(Math.random() * 100);
	}
	element = element.html("<div></div>").find("div");
	var WH = element.width();
	element.css({
		"width" : WH + "px",
		"height" : WH + "px"
	});
	element.qrcode({
		render : "canvas", // 设 置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
		text : text, // 设置二维码内容
		render : "canvas",// 设置渲染方式 （有两种方式 table和canvas，默认是canvas）
		width : WH, // 设置宽度
		height : WH, // 设置高度
		typeNumber : -1, // 计算模式
		correctLevel : 0,// 纠错等级
		background : "#ffffff",// 背景颜色
		foreground : "#000000" // 前景颜色
	});
}

// 预览图片
function previewPhoto(position) {
	var con = "<div class='previewPhoto' style='position:fixed;top:0px;left:0px;width:100%;height:" + (document.documentElement.clientHeight) + "px;'>";
	con += "<div onclick='$(\".previewPhoto\").remove();' class='previewPhoto'  style='position:relative;top:0px;left:0px;width:100%;height:" + (document.documentElement.clientHeight)
			+ "px;background:rgba(88,88,88,0.8);text-align:center;'>";
	con += "<img onload='$(this).css(\"margin-top\",(((document.documentElement.clientHeight)-$(this).height())/2));' src='" + ($(position).attr("src"))
			+ "'style='min-width:230px;box-shadow:0px 0px 50px rgb(188,188,188);max-width:95%;max-height:" + (document.documentElement.clientHeight - 20) + "px;' />";
	con += "</div>";
	con += "</div>";
	$("body").append(con);
}

// 加载样式启动
function startLoad() {
	var docuHeight = document.documentElement.clientHeight;
	var imgHeight = docuHeight / 2 - 50;
	var loadDiv = "";
	loadDiv += "<div class='loadDiv'";
	loadDiv += " style='position:fixed;top:0px;left:0px;width:100%;height:" + (docuHeight) + "px;";
	loadDiv += "z-index:1200;background-color:black;filter:alpha(Opacity=30);-moz-opacity:0.3;opacity: 0.3;'>";
	loadDiv += "</div>";
	$("body").prepend(loadDiv);
	loadDiv = "<div class='loadDiv' style='position:fixed;top:0px;left:0px;width:100%;height:300px;z-index:1221;text-align:center;'>";
	loadDiv += "<div style='height:" + imgHeight + "px;'></div>";
	loadDiv += "<img src='" + ROOT + "/source/files/statics/loading.gif' style='width:50px;height:50px;' />";
	loadDiv += "<span style='font-size:20px;color:gray;font-weight:bolder;'>&nbsp;&nbsp;加载中•••</span>";
	loadDiv += "</div>";
	$("body").addClass("addScroll").prepend(loadDiv);
}
// 加载样式启动2
function startLoad2(content) {
	var docuHeight = document.documentElement.clientHeight;
	var imgHeight = docuHeight / 2 - 50;
	var loadDiv = "";
	loadDiv += "<div class='loadDiv2'";
	loadDiv += " style='position:fixed;top:0px;left:0px;width:100%;height:" + (docuHeight) + "px;";
	loadDiv += "z-index:1200;background-color:black;filter:alpha(Opacity=30);-moz-opacity:0.3;opacity: 0.3;'>";
	loadDiv += "</div>";
	$("body").prepend(loadDiv);
	loadDiv = "<div class='loadDiv2' style='position:fixed;top:0px;left:0px;width:100%;height:300px;z-index:1221;text-align:center;'>";
	loadDiv += "<div style='height:" + imgHeight + "px;'></div>";
	loadDiv += "<span style='font-size:20px;color:rgb(88,88,88);font-weight:bolder;'>";
	loadDiv += "<i class='fa fa-cog fa-spin' style='font-size:80px;'></i>";
	loadDiv += "<i class='fa fa-cog fa-spin' style='font-size:30px;'></i>";
	loadDiv += "<br/>&nbsp;" + (content == null ? '处理中' : content) + "•••</span>";
	loadDiv += "</div>";
	$("body").addClass("addScroll").prepend(loadDiv);
}
// 加载样式启动3
function startLoad3(content, color) {
	color = color == null ? 'rgb(88,88,88)' : color;
	var docuHeight = document.documentElement.clientHeight;
	var imgHeight = docuHeight / 2 - 50;
	var loadDiv = "";
	loadDiv += "<div class='loadDiv3'";
	loadDiv += " style='position:fixed;top:0px;left:0px;width:100%;height:" + (docuHeight) + "px;";
	loadDiv += "z-index:1200;background-color:rgba(255,255,255,0.9);'>";
	loadDiv += "</div>";
	$("body").prepend(loadDiv);
	loadDiv = "<div class='loadDiv3' style='position:fixed;top:0px;left:0px;width:100%;height:300px;z-index:1221;text-align:center;'>";
	loadDiv += "<div style='height:" + imgHeight + "px;'></div>";
	loadDiv += "<span style='font-size:20px;color:" + color + ";font-weight:bolder;'>";
	loadDiv += "<i class='fa fa-cog fa-spin' style='font-size:80px;'></i>";
	loadDiv += "<i class='fa fa-cog fa-spin' style='font-size:30px;'></i>";
	loadDiv += "<br/>&nbsp;" + (content == null ? '处理中' : content) + "•••</span>";
	loadDiv += "</div>";
	$("body").addClass("addScroll").prepend(loadDiv);
}

// 加载样式停止
function stopLoad() {
	$("body").remove("addScroll");
	$("body .loadDiv").remove();
}
// 加载样式停止
function stopLoad2() {
	$("body").remove("addScroll");
	$("body .loadDiv2").remove();
}
// 加载样式停止
function stopLoad3() {
	$("body").remove("addScroll");
	$("body .loadDiv3").remove();
}

// 判断设备信息
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
// 获取生肖
function huoQuShengxiao(index) {
	switch (index) {
	case 1:
		return "子鼠";
	case 2:
		return "丑牛";
	case 3:
		return "寅虎";
	case 4:
		return "卯兔";
	case 5:
		return "辰龙";
	case 6:
		return "巳蛇";
	case 7:
		return "午马";
	case 8:
		return "未羊";
	case 9:
		return "申猴";
	case 10:
		return "酉鸡";
	case 11:
		return "戌狗";
	case 12:
		return "亥猪";
	}
}
// 获取星座
function huoQuxingzuo(index) {
	switch (index) {
	case 1:
		return "水瓶座";
	case 2:
		return "双鱼座";
	case 3:
		return "白羊座";
	case 4:
		return "金牛座";
	case 5:
		return "双子座";
	case 6:
		return "巨蟹座";
	case 7:
		return "狮子座";
	case 8:
		return "处女座";
	case 9:
		return "天秤座";
	case 10:
		return "天蝎座";
	case 11:
		return "射手座";
	case 12:
		return "魔蝎座";
	}
}

// 返回顶部
function returnTop() {
	$('html,body').stop();
	$('html,body').animate({
		scrollTop : '0px'
	}, 1000);
}
function returnBottom() {
	$('html,body').stop();
	$("#anchor").remove();
	$("body").append("<div id='anchor'></div>");
	$('html,body').animate({
		scrollTop : $('#anchor').offset().top
	}, 1000);
}

// 人民币转大写
function changeMoneyToChinese(money) {
	var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); // 汉字的数字
	var cnIntRadice = new Array("", "拾", "佰", "仟"); // 基本单位
	var cnIntUnits = new Array("", "万", "亿", "兆"); // 对应整数部分扩展单位
	var cnDecUnits = new Array("角", "分", "毫", "厘"); // 对应小数部分单位
	// var cnInteger = "整"; //整数金额时后面跟的字符
	var cnIntLast = "元"; // 整型完以后的单位
	var maxNum = 999999999999999.9999; // 最大处理的数字

	var IntegerNum; // 金额整数部分
	var DecimalNum; // 金额小数部分
	var ChineseStr = ""; // 输出的中文金额字符串
	var parts; // 分离金额后用的数组，预定义
	if (money == "") {
		return "";
	}
	money = parseFloat(money);
	if (money >= maxNum) {
		$.alert('超出最大处理数字');
		return "";
	}
	if (money == 0) {
		// ChineseStr = cnNums[0]+cnIntLast+cnInteger;
		ChineseStr = cnNums[0] + cnIntLast
		// document.getElementById("show").value=ChineseStr;
		return ChineseStr;
	}
	money = money.toString(); // 转换为字符串
	if (money.indexOf(".") == -1) {
		IntegerNum = money;
		DecimalNum = '';
	} else {
		parts = money.split(".");
		IntegerNum = parts[0];
		DecimalNum = parts[1].substr(0, 4);
	}
	if (parseInt(IntegerNum, 10) > 0) {// 获取整型部分转换
		zeroCount = 0;
		IntLen = IntegerNum.length;
		for (i = 0; i < IntLen; i++) {
			n = IntegerNum.substr(i, 1);
			p = IntLen - i - 1;
			q = p / 4;
			m = p % 4;
			if (n == "0") {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					ChineseStr += cnNums[0];
				}
				zeroCount = 0; // 归零
				ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
			}
			if (m == 0 && zeroCount < 4) {
				ChineseStr += cnIntUnits[q];
			}
		}
		ChineseStr += cnIntLast;
		// 整型部分处理完毕
	}
	if (DecimalNum != '') {// 小数部分
		decLen = DecimalNum.length;
		for (i = 0; i < decLen; i++) {
			n = DecimalNum.substr(i, 1);
			if (n != '0') {
				ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
			}
		}
	}
	if (ChineseStr == '') {
		// ChineseStr += cnNums[0]+cnIntLast+cnInteger;
		ChineseStr += cnNums[0] + cnIntLast;
	}/*
		 * else if( DecimalNum == '' ){ ChineseStr += cnInteger; ChineseStr +=
		 * cnInteger; }
		 */
	return ChineseStr + "整";
}