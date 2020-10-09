//尝试创建一个可以执行简单函数的动画
/*
	参数：
	obj:要执行动画的对象
	attr: 要执行动画的样式
	target: 目标位置
	speed:移动速度 (整数向右移动，负值向左移动)
	callback: 回调函数
*/
function move(obj, attr, target, speed , callback){
	//关闭上一个定时器
	clearInterval(obj.timer);

	//获取元素目前的位置
	var current = parseInt(getStyle(obj,attr));

	//判断speed的正负值
	if(current > target){
		speed = -speed;
	}
	//向执行动画的对象中添加一个timer值
	obj.timer = setInterval(function(){
		//获取obj的原来的left值
		var oldValue = parseInt(getStyle(obj,attr));

		//在旧值的基础上增加
		var newValue = oldValue + speed;

		//判断newValue是否大于targets
		if((speed < 0 && newValue < target) || (speed > 0 && newValue> target)){
			newValue = target;
		}

		obj.style[attr] = newValue + "px";
					
		//当元素移动得距离大于target时，将其停止
		if(newValue == target){
			clearInterval(obj.timer);
			//动画执行完毕，调用回调函数
			if(callback){
				callback();
			}
					
		}
	},10);
}
//获取元素样式
function getStyle(obj , name){
	if(window.getComputedStyle){
		return getComputedStyle(obj , null)[name];
	}
	else{
		return obj.currentStyle[name];
	}
}


// 定义一个函数，用来向一个元素中添加指定的class属性
/*
	参数：	
		obj 要添加class属性的元素
		cn 要添加的class值
 */
function addClass(obj ,cn){
	if(!hasClass(obj,cn)){
		obj.className += " " + cn;
	}	
}

/*
	判断一个元素中是否含有指定的class属性值
*/
function hasClass(obj , cn){
	//判断obj中是否含有cn
	//var reg = /\b\b/;
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
}

/*
	删除一个元素中的指定的className属性
*/
function removeClass(obj , cn){
	var reg = new RegExp("\\b" + cn + "\\b");
	obj.className = obj.className.replace(reg , "");
}

/*
	toggleClass可以用来切换一个类
		如果元素中有该类则删除
		如果元素没有该类则添加
 */
function toggleClass(obj,cn){
	//判断obj中是否含有cn
	if(hasClass(obj,cn)){
		removeClass(obj , cn);
	}else{
		addClass(obj,cn);
	}
}