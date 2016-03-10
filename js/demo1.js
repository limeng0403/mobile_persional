var clientW=0;//浏览窗口的宽度，为弹出窗口做准备
var clientH=0;//浏览窗口的高度，为弹出窗口做准备

$(function(){
	//获取浏览窗口的宽度及高度，没有考虑屏幕旋转之后重新获取
	clientW=document.getElementsByTagName('html')[0].clientWidth;
	clientH=document.getElementsByTagName('html')[0].clientHeight;
	
	//绑定点击logo事件
	$('.col-xs-3').on('click',iconClickEvent);
	//绑定关闭弹出窗口事件
	$('.div-close').on('click',divCloseEvent);
});
//点击logo事件
function iconClickEvent(){
	var left=event.clientX;//点击时的x坐标，用作弹出窗口的起始左边距
	var top=event.clientY;//点击时的y坐标，用作弹出窗口的起始上边距
	var obj=$(this);//当前点击对象
	var img=obj.find('img');//logo对象
	var imgW=img.width();//图片的宽度，用作弹出窗口的起始宽度
	var imgH=img.height();//图片的高度，用作弹出窗口的起始高度
	var divBgColor=obj.attr('data-bg-color');//获取弹出窗口的背景颜色
	
	var div=$('#trans');//保存弹出窗口对象
	div.find('*').hide();//隐藏弹出窗口内的所有对象
	//保存弹出窗口的数据，用作关闭时的动画倒播
	div.data({
		'w': imgW,
		'h': imgH,
		'srcLeft': left,
		'srcTop': top,
		'tarLeft': (clientW-imgW)/2,
		'tarTop': (clientH-imgH)/2,
		'radius': imgW/2
	});
	//弹出窗口起始位置在点击时所在位置
	div.css({
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'margin-left': left+'px',
		'margin-top': top+'px',
		'transition': 'all .5s',
		'width': 0,
		'height': 0,
		'border-radius': imgW/2+'px',
		'background-color': divBgColor
	});
	//将弹出窗口移至浏览窗口中心
	setTimeout(function(){
		div.css({
			'margin-left': (clientW-imgW)/2+'px',
			'margin-top': (clientH-imgH)/2+'px',
			'width': imgW+'px',
			'height': imgH+'px',
			'opacity': 1
		});
	},500);
	//铺满整个窗口
	setTimeout(function(){
		div.css({
			'width': '100%',
			'height': '100%',
			'margin': '0',
			'border-radius': 0
		});
	},1000);
	//显示弹出窗口中的所有元素
	setTimeout(function(){
		div.find('*').show(300);
	},1000);
}
//关闭弹出窗口事件
function divCloseEvent(){
	var div=$(this).parent();
	//隐藏弹出窗口中的所有元素
	div.find('*').hide(100);
	//读取弹出窗口时所保存的数据，准备弹出窗口倒播
	div.css({
		'margin-left': div.data('tarLeft')+'px',
		'margin-top': div.data('tarTop')+'px',
		'width': div.data('w')+'px',
		'height': div.data('h')+'px',
		'border-radius': div.data('radius')+'px'
	});
	
	setTimeout(function(){
		div.css({
			'margin-left': div.data('srcLeft')+'px',
			'margin-top': div.data('srcTop')+'px',
			'width': 0,
			'height': 0,
			'opacity': '0'
		});
	},500);
}
//Angular框架
//动态加载弹出框中的数据
var app=angular.module('divContent',[]);
app.controller('popContent',function($scope){
	$scope.message="ok";
	$scope.color="#fff";
	
	$scope.clickFacebook=function(){
		$scope.message="Welcome to Facebook!";
		$scope.color="#fff";
	};
	$scope.clickTwitter=function(){
		$scope.message="Welcome to Twitter!";
		$scope.color="#333";
	};
	$scope.clickGoogle=function(){
		$scope.message="Welcome to Google!";
		$scope.color="#fff";
	};
	$scope.clickPinterest=function(){
		$scope.message="Welcome to Pinterest!";
		$scope.color="#fff";
	};
});

