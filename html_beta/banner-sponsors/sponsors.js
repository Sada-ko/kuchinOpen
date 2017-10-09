(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ball_sponsors = function() {
	this.initialize(img.ball_sponsors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,240);


(lib.bg_sponsors = function() {
	this.initialize(img.bg_sponsors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,400);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAaAyIAAgZIgzAAIAAAZIgLAAIAAgkIAFAAQAKgLAFgRQAFgQAAgUIAmAAIAABAIAKAAIAAAkgAgGgJQgFAOgHAJIAhAAIAAg3IgPAAQgCAPgEARg");
	this.shape.setTransform(45.2,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVAmIAAgiIgpAAIAAAiIgLAAIAAhLIALAAIAAAgIApAAIAAggIALAAIAABLg");
	this.shape_1.setTransform(36.8,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgJAAgLAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgJAAIgCgKIAAAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAFADAGAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_2.setTransform(28.2,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAdAmIAAg9IgBADIgEALIgTAvIgJAAIgTgvIgFgOIAAA9IgKAAIAAhLIAOAAIATAvIAFAQIACgGIADgIIAUgxIAOAAIAABLg");
	this.shape_3.setTransform(19.4,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgRAiQgIgFgEgIQgEgJAAgMQAAgRAJgLQAJgKAPAAQAQAAAJAKQAJALAAARQAAASgJALQgJAKgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKAAQALAAAGgIQAGgHAAgPQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_4.setTransform(10.1,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAQAmIghgmIAAAmIgMAAIAAhLIAMAAIAAAlIAfglIAMAAIgeAkIAiAng");
	this.shape_5.setTransform(3.1,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgwBKQgQgZgBgxQABgyAQgYQAQgYAgAAQAgAAARAZQAQAaAAAvQAAAzgQAYQgQAYghAAQgfAAgRgZgAgZg3QgIARAAAmQAAAoAIARQAIARARAAQASAAAIgSQAJgRAAgnQAAglgJgSQgIgRgSAAQgRAAgIARg");
	this.shape_6.setTransform(-12.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhABiIAAgYIAxgyQAVgWAIgJQAHgJADgIQADgJAAgJQAAgNgHgIQgIgHgNAAQgLAAgLAEQgKAEgOALIgQgVQAQgNAPgGQAPgGARAAQAaAAAQAOQARAOAAAYQAAANgFAMQgFAMgJALQgKAMgXAWIggAgIAAABIBaAAIAAAcg");
	this.shape_7.setTransform(-28.2,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAKBgIAAh7IABgkIgHAHIgdAZIgPgUIA3gsIAaAAIAAC/g");
	this.shape_8.setTransform(-43.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-51.3,-20.3,102.8,40.8), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAWAlIAAgtIAAgJIAAgIIgnA+IgOAAIAAhJIAKAAIAAAuIAAANIAAADIAng+IAOAAIAABJg");
	this.shape.setTransform(35.4,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAWAlIAAgtIAAgJIAAgIIgnA+IgOAAIAAhJIAKAAIAAAuIAAANIAAADIAng+IAOAAIAABJg");
	this.shape_1.setTransform(26.6,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AggA3IAAhrIAJAAIACAKIABAAQAEgHAGgCQAFgDAHAAQAPAAAIALQAIAJAAATQAAARgIAKQgIALgPAAQgHAAgFgDQgHgDgDgFIgBAAIABANIAAAegAgQgmQgEAGAAAPIAAACQAAAPAEAHQAGAGAKAAQAKAAAGgIQAFgGAAgOQAAgOgFgHQgGgIgKAAQgKAAgGAGg");
	this.shape_2.setTransform(18.1,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAASgJAKQgJALgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAIAKgBQALABAGgIQAGgIAAgOQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_3.setTransform(9.3,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFAlIAAg/IgYAAIAAgKIA7AAIAAAKIgZAAIAAA/g");
	this.shape_4.setTransform(2,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAWAlIAAgtIAAgJIAAgIIgnA+IgOAAIAAhJIAKAAIAAAuIAAANIAAADIAng+IAOAAIAABJg");
	this.shape_5.setTransform(-5.7,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAaAyIAAgaIg0AAIAAAaIgKAAIAAgkIAGAAQAJgMAFgPQAFgRAAgTIAlAAIAAA/IALAAIAAAkgAgGgKQgFAPgIAJIAiAAIAAg2IgQAAQgBAOgEAQg");
	this.shape_6.setTransform(-14.1,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_7.setTransform(-21.4,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgJAAgLAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgJAAIgBgKIgBAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAEADAHAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_8.setTransform(-29,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgFAlIAAg/IgYAAIAAgKIA7AAIAAAKIgZAAIAAA/g");
	this.shape_9.setTransform(-39.6,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgJAAgLAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgJAAIgBgKIgBAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAEADAHAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_10.setTransform(-47,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgeAlIAAhJIAfAAQAcAAAAASQABAIgFADQgEAFgHABIAAAAQAJABAEAEQAFAEAAAIQAAAKgIAGQgIAGgPgBgAgTAcIATAAQAVAAgBgNQABgGgFgDQgFgDgLAAIgTAAgAgTgGIATAAQAJAAAFgCQAEgDAAgGQAAgFgEgDQgEgBgJAAIgUAAg");
	this.shape_11.setTransform(-54.3,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAVAlIgVgeIgUAeIgNAAIAbglIgagkIAOAAIASAcIAUgcIAMAAIgaAkIAcAlg");
	this.shape_12.setTransform(-62.3,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAASgJAKQgJALgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAIAKgBQALABAGgIQAGgIAAgOQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_13.setTransform(-69.9,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAQAmIghgmIAAAmIgMAAIAAhLIAMAAIAAAlIAfglIAMAAIgeAkIAiAng");
	this.shape_14.setTransform(73.2,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgVAdQgKgKAAgTQABgQAIgLQAJgLAOAAQAPAAAHAJQAIAKAAAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAgMgWQgGAFAAALIAlAAQAAgLgEgFQgFgHgJAAQgIAAgFAHg");
	this.shape_15.setTransform(65.1,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgfAmIAAhLIAgAAQAcABAAASQABAHgFAFQgEADgIABIAAABQAKABAEAEQAEAEAAAHQABALgIAGQgHAGgQAAgAgTAcIATAAQAUAAAAgNQABgGgFgDQgFgDgLABIgTAAgAgTgFIATAAQAKAAAEgDQAEgCAAgHQAAgFgEgCQgEgDgJAAIgUAAg");
	this.shape_16.setTransform(57.6,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgRAiQgIgFgEgIQgEgJAAgMQAAgRAJgLQAJgKAPAAQAQAAAJAKQAJALAAARQAAASgJALQgJAKgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKAAQALAAAGgIQAGgHAAgPQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_17.setTransform(49,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AghAlIAAgJIAEABQAIAAAEgRQAFgPACgiIAsAAIAABKIgMAAIAAhAIgWAAQgBAYgDANQgEAPgFAGQgFAHgJAAIgGgBg");
	this.shape_18.setTransform(40.2,-0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgVAdQgKgKAAgTQAAgQAKgLQAIgLAOAAQAPAAAHAJQAJAKgBAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQANAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAgMgWQgGAFgBALIAnAAQAAgLgFgFQgFgHgJAAQgIAAgFAHg");
	this.shape_19.setTransform(32.9,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAUAmIAAgiQgHAEgGADQgGACgHAAQgLAAgHgHQgGgFAAgKIAAgcIALAAIAAAcQAAAMAPAAQAFAAAGgCQAGgBAHgEIAAghIALAAIAABLg");
	this.shape_20.setTransform(24.6,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgLBBIAAg1Ig0AAIAAgXIA0AAIAAg1IAXAAIAAA1IA1AAIAAAXIg1AAIAAA1g");
	this.shape_21.setTransform(9.2,-6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgwBKQgRgZAAgxQAAgyARgYQAQgYAgAAQAhAAAQAZQARAaAAAvQgBAzgQAYQgQAYghAAQgfAAgRgZgAgZg3QgIARAAAmQAAAoAIARQAIARARAAQASAAAIgSQAJgRgBgnQABglgJgSQgIgRgSAAQgRAAgIARg");
	this.shape_22.setTransform(-6.2,-6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgwBKQgRgZAAgxQAAgyARgYQAQgYAgAAQAgAAARAZQARAaAAAvQgBAzgQAYQgQAYghAAQgfAAgRgZgAgZg3QgIARAAAmQAAAoAIARQAIARARAAQASAAAIgSQAJgRgBgnQABglgJgSQgIgRgSAAQgRAAgIARg");
	this.shape_23.setTransform(-21.6,-6.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgwBKQgRgZAAgxQAAgyARgYQAQgYAgAAQAgAAARAZQARAaAAAvQAAAzgQAYQgRAYghAAQgfAAgRgZgAgZg3QgIARAAAmQAAAoAIARQAIARARAAQASAAAIgSQAIgRAAgnQAAglgIgSQgIgRgSAAQgRAAgIARg");
	this.shape_24.setTransform(-37,-6.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgwBKQgQgZgBgxQABgyAQgYQAQgYAgAAQAgAAARAZQAQAaAAAvQAAAzgQAYQgQAYghAAQgfAAgRgZgAgZg3QgIARAAAmQAAAoAIARQAIARARAAQASAAAIgSQAJgRAAgnQAAglgJgSQgIgRgSAAQgRAAgIARg");
	this.shape_25.setTransform(-56,-6.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAKBgIAAh7IABgkIgHAHIgdAZIgPgUIA3gsIAaAAIAAC/g");
	this.shape_26.setTransform(-71,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-79.1,-27.9,157.6,55.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgxA9IAAgPIAKABQAGABAFgEQAEgDAFgJIAEgHIgMhWIASAAIAEApIACAOIAAANIABAAIAJgXIAXgtIAUAAIg1BiQgHAOgIAFQgIAHgLAAQgHgBgFgBg");
	this.shape.setTransform(-18.8,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguArIAAgPIAGAAQAEAAADgCQADgDACgEQADgGAFgOQAGgQAEgIQAEgHAFgDQADgFAHgCQAGgBAJAAQAMAAALADIgSBTIgSAAIAPhHIgFAAQgGAAgEACQgDADgDAGQgEAFgEAQQgHAUgEAHQgEAGgGAEQgFADgIABQgFgBgEgBg");
	this.shape_1.setTransform(-27.6,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAkQgJgJAAgQQAAgOAGgNQAFgNALgHQAKgIAMAAQAPAAAIAKQAKAJgBAPQABAPgHANQgFANgKAHQgKAHgMAAQgPAAgJgJgAgHgXQgFAGgEAJQgDAJAAALQAAAIAEAFQAEAFAHAAQAHAAAFgGQAGgFADgJQADgKAAgLQAAgIgEgFQgEgEgHAAQgGAAgGAFg");
	this.shape_2.setTransform(-36.2,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgjA0QgIgJAAgSQAAgRAGgQQAFgRAJgMQAJgLALgEIASgFIAbgEIACAPIgIACQgbADgIAEQgHAFgFAIQgGAHgDAMQAGgHAHgDQAHgEAHAAQALAAAGAHQAHAIAAANQAAAPgGANQgFAMgKAHQgJAGgMAAQgQAAgIgKgAgLAAQgGADgFAHQgCAJAAAHQAAAVAOAAQAHAAAEgFQAFgEADgJQADgJAAgKQAAgOgLAAQgFgBgHAFg");
	this.shape_3.setTransform(-44.7,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgkA4QgFgGAAgLIABgJIACgKIAJgtIASAAIgJAvIgDAPQAAAKAKAAQAGAAAFgEQAEgEAFgJQAFgIACgLIAIgkIASAAIgSBWIgPAAIABgQIAAAAQgHAJgFAEQgHAEgJAAQgKAAgGgGgAgOgpQgIgFABgLIAAgEIAQAAIAAAEQAAAKAMAAQAIAAAFgDQAEgEABgHIARAAQgDANgIAHQgJAGgQAAQgNAAgHgGg");
	this.shape_4.setTransform(-54.2,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgaAkQgJgJAAgPQAAgPAGgNQAGgNAKgHQALgIAMAAQAMAAAHAGQAHAGAAAKQAAAOgNAIQgNAHgXAAIgDAAIAAADIAAACQgBAJAFAFQAEAEAIAAIALgBIANgFIAAAOQgHAEgGABQgHACgHAAQgPAAgIgJgAgFgXQgGAHgDALIACAAQAOAAAIgEQAJgFAAgHQAAgEgDgCQgCgDgFAAQgIAAgGAHg");
	this.shape_5.setTransform(-63.3,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AguArIAAgPIAGAAQAEAAADgCQADgDACgEQADgGAFgOQAGgQAEgIQAEgHAFgDQADgFAHgCQAGgBAJAAQAMAAALADIgSBTIgSAAIAPhHIgFAAQgGAAgEACQgDADgDAGQgEAFgEAQQgHAUgEAHQgEAGgGAEQgFADgIABQgFgBgEgBg");
	this.shape_6.setTransform(-72.8,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgdAkQgJgJAAgQQABgOAFgNQAGgNAKgHQAJgIANAAQAPAAAJAKQAIAJABAPQAAAPgHANQgFANgKAHQgKAHgMAAQgPAAgJgJgAgHgXQgGAGgDAJQgDAJAAALQAAAIAEAFQADAFAIAAQAGAAAGgGQAFgFADgJQAEgKAAgLQAAgIgEgFQgEgEgHAAQgGAAgGAFg");
	this.shape_7.setTransform(-81.4,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgcAkQgJgJAAgRQAAgPAFgMQAGgNALgHQAKgHANAAQAPAAAIAGQAHAGAAALQAAARgUAEQAPAEAAAOQAAAIgEAGQgEAGgIADQgJAEgKAAQgRAAgJgJgAgTAIIAAACQAAAKAEAGQAFAFAJAAQAHAAAEgEQAFgDAAgHQAAgFgEgDQgFgDgJAAIgQAAgAgHgXQgHAGgDALIARAAQAJAAAGgEQAFgDAAgHQAAgEgDgDQgDgDgGAAQgIAAgHAHg");
	this.shape_8.setTransform(-90.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgxA9IAAgOIAKABQAGgBAEgDQAFgEAFgIIAEgHIgNhWIASAAIAGApIAAAOIABANIAAAAIAKgXIAXgtIAUAAIg1BjQgHANgIAFQgJAGgLABQgFAAgGgCg");
	this.shape_9.setTransform(77.4,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAUArIAPhBIgBABIgjBAIgOAAIgIgzIgBgOIgOBBIgRAAIAThVIAXAAIAHA0IACAOQAEgMAEgGIAbgwIAZAAIgSBVg");
	this.shape_10.setTransform(67.8,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgdAkQgJgJAAgQQAAgOAGgNQAFgNALgHQAKgIAMAAQAPAAAIAKQAKAJAAAPQAAAPgHANQgFANgKAHQgKAHgMAAQgPAAgJgJgAgHgXQgFAGgEAJQgDAJAAALQAAAIAEAFQAEAFAHAAQAHAAAFgGQAGgFADgJQADgKAAgLQAAgIgEgFQgEgEgHAAQgGAAgGAFg");
	this.shape_11.setTransform(57.4,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAIArIAIglIghAAIgIAlIgTAAIAThVIASAAIgIAjIAiAAIAIgjIASAAIgSBVg");
	this.shape_12.setTransform(47.9,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAbAkQgHgIAAgQIAAgDIABgCIgOAAIgHAkIgRAAIAIgkIgMAAQgEARgMALQgLAKgPAAIgLgBIADgPIAHABQAIAAAGgGQAGgFADgKQADgJAAgKQAAgJgDgFQgDgFgHAAIgJACIAAgPQAGgCAGAAQAOAAAHAJQAIAJAAAQIgBAFIAOAAIAGglIASAAIgIAlIAMAAQAFgSALgKQAKgLAQAAIALABIgEAPIgHgBQgHAAgGAFQgFAGgEAJQgEAJABALQgBAJAEAFQADAFAGAAIAKgCIAAAPQgGACgGAAQgOAAgIgJg");
	this.shape_13.setTransform(35.9,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgqArIAAgQIAEABQAEAAACgCIAGgIQAEgHADgDQADgDAEgBQgNgEAAgPQAAgNAJgHQAKgIAPAAIAiAAIgSBWIgSAAIAHgiIgIAAQgFABgCACQgDACgDAGQgGAMgDADQgEAFgDACQgFACgFAAQgGAAgDgBgAgDgZQgEAEAAAGQAAAGAEADQADADAGAAIALAAIAFgaIgOAAQgHAAgEAEg");
	this.shape_14.setTransform(24,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AguArIAAgPIAGABQAEgBADgCQADgCACgFQADgGAFgOQAGgRAEgGQAEgIAFgDQADgFAHgBQAGgCAJAAQAMgBALAEIgSBTIgSAAIAPhHIgFgBQgGAAgEADQgDACgDAHQgEAFgEAQQgHAUgEAHQgEAGgGAEQgFAEgIAAQgFAAgEgCg");
	this.shape_15.setTransform(14.7,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAKAsIALgzIACgLQAAgKgKAAQgGAAgGAFQgEAEgEAIQgFAJgCAJIgIAlIgSAAIAShVIAPAAIgCAQIABAAQAGgKAGgEQAHgEAIAAQALAAAFAGQAGAGAAALIgCAOIgKAyg");
	this.shape_16.setTransform(5.7,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgdAkQgIgJAAgQQAAgOAFgNQAFgNAKgHQAKgIANAAQAPAAAIAKQAJAJAAAPQAAAPgFANQgGANgKAHQgKAHgMAAQgPAAgJgJgAgHgXQgGAGgDAJQgDAJAAALQAAAIAEAFQADAFAJAAQAFAAAGgGQAGgFACgJQAEgKAAgLQAAgIgEgFQgEgEgHAAQgGAAgGAFg");
	this.shape_17.setTransform(-7.5,1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAKAsIALgzIACgLQAAgKgKAAQgGAAgGAFQgEAEgEAIQgFAJgCAJIgIAlIgSAAIAShVIAPAAIgCAQIABAAQAGgKAGgEQAHgEAIAAQALAAAFAGQAGAGAAALIgCAOIgKAyg");
	this.shape_18.setTransform(-17.1,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgiAlQgGgIAAgOQAAgPAFgOQAFgOAKgIQAKgIAKAAQAIAAAFAEQAFADADAHIABAAIAFgMIAOAAIgSBVIgOAAIABgNIAAAAQgMAPgPAAQgLAAgGgIgAgJgXQgGAGgDALQgEAJAAALQAAAIADAEQAEAEAFAAQAHAAAFgGQAGgGAEgKQAEgJAAgMQAAgHgEgEQgDgFgGAAQgGAAgGAGg");
	this.shape_19.setTransform(-30.1,1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgtA/IAbh8IAPAAIgCAPIABAAQALgQAPAAQAKAAAHAIQAHAIgBAOQABAQgGAOQgGANgJAIQgKAHgLAAQgNAAgHgNIgBAAIgCAOIgHAkgAACgpQgFAGgEAKQgEALAAALQAAAGADAEQAEAEAFAAQAIAAAFgGQAGgFAEgKQACgKAAgMQABgPgMAAQgHAAgGAGg");
	this.shape_20.setTransform(-40.2,3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgiAmQgGgGAAgLIABgKIACgKIAKgsIASAAIgKAvIgDAPQABAKAJAAQAGAAAGgEQAEgEAFgJQAEgIACgLIAIgkIASAAIgSBWIgOAAIABgRIAAAAQgHAKgGAEQgHAEgIAAQgKAAgGgGg");
	this.shape_21.setTransform(-48.8,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAIArIAIglIghAAIgIAlIgTAAIAThVIASAAIgIAjIAiAAIAIgjIASAAIgSBVg");
	this.shape_22.setTransform(-58.6,1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgtA/IAbh8IAPAAIgCAPIAAAAQAMgQAOAAQALAAAHAIQAGAIAAAOQAAAQgFAOQgFANgKAIQgJAHgMAAQgNAAgHgNIgBAAIgBAOIgIAkgAACgpQgGAGgDAKQgEALAAALQAAAGADAEQAEAEAFAAQAIAAAFgGQAGgFAEgKQACgKAAgMQABgPgMAAQgHAAgGAGg");
	this.shape_23.setTransform(-68.8,3.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgxA9IAAgOIAKABQAGgBAFgDQAEgEAFgIIAEgHIgMhWIASAAIAEApIABAOIABANIAAAAIAKgXIAXgtIAUAAIg1BjQgHANgIAFQgJAGgKABQgHAAgFgCg");
	this.shape_24.setTransform(-77.1,3.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAiAsIAMgzIABgLQgBgKgIAAQgJAAgIAJQgHALgDAOIgIAmIgRAAIALgzIABgLQAAgKgJAAQgIAAgIAKQgHAKgEAPIgIAlIgSAAIAShVIAPAAIgBAQIAAAAQAMgSAPAAQAQAAADATIABAAQAGgKAIgFQAHgEAIAAQAKAAAFAGQAGAGAAALIgBAOIgMAyg");
	this.shape_25.setTransform(-88.1,1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAKArIgLgeIgYAeIgUAAIAkgrIgSgqIATAAIAKAdIAXgdIAVAAIgkAqIAUArg");
	this.shape_26.setTransform(36.6,-19.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AguAlQgIgGABgMQAAgHACgIIAKgvIASAAIgIAkQAKgBAHAAQALgBAGAHQAHAFAAAKQAAAOgJAJQgJAIgQAAQgPAAgHgHgAghAGIgBAEIgBADIAAADIAAACQAAAMAMAAQAHAAAEgDQAFgEAAgHQAAgHgEgCQgDgDgHAAIgMACgAASArIAShWIATAAIgTBWg");
	this.shape_27.setTransform(26.8,-19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAIArIAIglIgiAAIgIAlIgSAAIAThVIASAAIgHAjIAhAAIAHgjIATAAIgTBVg");
	this.shape_28.setTransform(15.6,-19.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgjA1QgIgKAAgRQAAgSAGgQQAFgRAJgLQAJgMALgEIASgEIAbgFIACAQIgIABQgbADgIAFQgHAEgFAHQgGAIgDAMQAGgHAHgEQAHgDAHAAQALAAAGAIQAHAGAAAOQAAAQgGAMQgFAMgKAGQgJAHgMAAQgQAAgIgJgAgLAAQgGADgFAHQgCAJAAAHQAAAVAOAAQAHAAAEgEQAFgFADgJQADgJAAgKQAAgPgLAAQgFAAgHAFg");
	this.shape_29.setTransform(6.9,-21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgiAlQgGgIAAgOQAAgPAFgOQAFgOAKgIQAKgIAKAAQAIAAAFAEQAFADADAHIABAAIAFgMIAOAAIgSBVIgOAAIABgNIAAAAQgMAPgPAAQgLAAgGgIgAgJgXQgGAGgDALQgEAJAAALQAAAIADAEQAEAEAFAAQAHAAAFgGQAGgGAEgKQAEgJAAgMQAAgHgEgEQgDgFgGAAQgGAAgGAGg");
	this.shape_30.setTransform(-2.7,-19.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAiAsIALg0IABgKQABgKgKAAQgIAAgIAJQgHALgDAOIgIAmIgSAAIAMg0IABgKQAAgKgJAAQgJAAgHAKQgHAKgDAPIgIAlIgTAAIAThVIAOAAIgCAPIABAAQAMgRAPAAQARAAADASIAAAAQAGgIAHgFQAIgFAIAAQAKAAAGAGQAFAGAAALIgCAOIgKAyg");
	this.shape_31.setTransform(-14.9,-20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgHAnQgFgFgCgIIAAAAQgGAJgHAEQgIAFgHAAQgLAAgGgGQgFgGAAgLIACgOIALgyIASAAIgLA0IgBAKQgBAKAKAAQAJAAAGgKQAIgKADgPIAIglIARAAIgLA0IgBAJQAAALAJAAQAIAAAIgKQAHgKAEgQIAIgkIASAAIgSBWIgPAAIABgQIAAAAQgLARgRAAQgHAAgFgFg");
	this.shape_32.setTransform(-28.6,-19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgZAlQgIgJAAgPQAAgPAFgOQAGgNAKgHQALgIAMAAQANAAAKAFIgFAOQgKgEgHAAQgMAAgHAMQgIAMAAARQAAAJAFAEQAEAFAHAAIALgCIAKgEIAAAPQgLAGgMAAQgQAAgIgIg");
	this.shape_33.setTransform(-39.2,-19.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgiAlQgGgIAAgOQAAgPAFgOQAFgOAKgIQAKgIAKAAQAIAAAFAEQAFADADAHIABAAIAFgMIAOAAIgSBVIgOAAIABgNIAAAAQgMAPgPAAQgLAAgGgIgAgJgXQgGAGgDALQgEAJAAALQAAAIADAEQAEAEAFAAQAHAAAFgGQAGgGAEgKQAEgJAAgMQAAgHgEgEQgDgFgGAAQgGAAgGAGg");
	this.shape_34.setTransform(-47.8,-19.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAUArIAPhBIgBABIgjBAIgOAAIgIgzIgBgOIgOBBIgRAAIAThVIAXAAIAHA0IACAOQAEgMAEgGIAbgwIAZAAIgSBVg");
	this.shape_35.setTransform(-58.6,-19.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgiAmQgGgGAAgLIABgKIACgKIAKgsIASAAIgKAvIgDAPQABAKAJAAQAGAAAGgEQAEgFAFgIQAEgIACgLIAIgkIASAAIgSBWIgOAAIABgQIAAAAQgHAJgGAEQgHAEgIAAQgKAAgGgGg");
	this.shape_36.setTransform(-73.1,-19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgsA/IAah8IAOAAIgBAPIAAAAQAMgQAOAAQALAAAHAIQAGAIABAOQgBAQgFAOQgGANgJAIQgKAHgLAAQgNAAgHgNIAAAAIgCAOIgIAkgAACgpQgFAGgEAKQgEALAAALQAAAGAEAEQADAEAFAAQAHAAAGgGQAGgFADgKQAEgKAAgMQgBgPgMAAQgGAAgGAGg");
	this.shape_37.setTransform(-83.4,-18.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgfA5IAVhhIgdAAIADgQIBNAAIgEAQIgdAAIgUBhg");
	this.shape_38.setTransform(-89.5,-21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-96.9,-34.7,194,69.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_sponsors();
	this.instance.parent = this;
	this.instance.setTransform(-162.5,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-162.5,-120,325,240), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTBqQgGgHAAgMQAAgNAGgGQAIgHAMAAQAMAAAHAHQAHAHAAAMQgBAMgGAHQgHAHgMAAQgMAAgIgHgAgRAjIgHiTIAzAAIgICTg");
	this.shape.setTransform(87.9,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABABUIAAiEIgDAJQgIAhgGAPIgeBLIggAAIgfhMQgGgPgIgeIgDgLIAACEIgrAAIAAioIBAAAIAdBIQAFAMAEAOIAEAaIAIggQACgKAEgHIAehLIA/AAIAACog");
	this.shape_1.setTransform(70.4,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgqBNQgTgLgKgUQgKgUAAgaQAAgpAWgXQAVgXAnAAQAYAAASALQATALAKATQAKAUAAAaQAAApgWAXQgWAYgmAAQgYAAgSgLgAgaglQgIANAAAYQAAAZAJANQAIANARAAQASAAAJgNQAIgNAAgZQAAgYgJgNQgIgMgSAAQgRAAgJAMg");
	this.shape_2.setTransform(47.7,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhOB7IAAjyIAmAAIAHAVIACAAQAQgZAeABQAeAAARAXQARAXAAApQAAAbgIATQgHAUgPALQgPAKgUAAQgdAAgQgVIgDAAIADAYIAABEgAgXhLQgJAKABAZIAAAFQgBAbAJALQAHAMARAAQAfAAAAgzQAAgZgIgMQgHgMgQAAQgRAAgHAKg");
	this.shape_3.setTransform(28.8,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgqBNQgTgLgKgUQgKgUAAgaQAAgpAWgXQAVgXAmAAQAZAAASALQATALAKATQAKAUAAAaQAAApgWAXQgWAYgmAAQgYAAgSgLgAgaglQgIANAAAYQAAAZAIANQAJANARAAQASAAAJgNQAIgNAAgZQAAgYgJgNQgHgMgTAAQgRAAgJAMg");
	this.shape_4.setTransform(8.9,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhDABQAAgqAWgXQAVgXAnAAQAeAAAXAMIgOAkIgUgIQgJgCgKAAQgjAAAAAyQAAAxAjAAQAOAAALgDQALgEAMgHIAAAnQgMAHgLADQgLADgSAAQhOAAAAhXg");
	this.shape_5.setTransform(-8.5,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAhBUIAAhGIhAAAIAABGIgvAAIAAioIAvAAIAABCIBAAAIAAhCIAuAAIAACog");
	this.shape_6.setTransform(-26.9,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgqBNQgTgLgKgUQgKgUAAgaQAAgpAWgXQAVgXAnAAQAYAAASALQATALAKATQAKAUAAAaQAAApgWAXQgWAYgmAAQgYAAgSgLgAgaglQgIANAAAYQAAAZAJANQAIANARAAQASAAAJgNQAIgNAAgZQAAgYgJgNQgIgMgSAAQgRAAgJAMg");
	this.shape_7.setTransform(-46.8,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAfBUIAAiFIg8AAIAACFIgvAAIAAioICZAAIAACog");
	this.shape_8.setTransform(-66.4,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhDABQAAgqAWgXQAVgXAnAAQAeAAAXAMIgOAkIgUgIQgJgCgKAAQgjAAAAAyQAAAxAjAAQAOAAALgDQALgEAMgHIAAAnQgMAHgLADQgLADgSAAQhOAAAAhXg");
	this.shape_9.setTransform(-84.3,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhNBVIAAipIAvAAIAABBIAfAAQAnAAATANQATALAAAaQAAA2hLAAgAgeA0IAfAAQAfAAAAgVQAAgJgIgFQgIgEgQAAIgeAAg");
	this.shape_10.setTransform(-6.2,-17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAgBVIAAhHIg/AAIAABHIguAAIAAipIAuAAIAABBIA/AAIAAhBIAuAAIAACpg");
	this.shape_11.setTransform(-26.6,-17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag9BKQgNgOAAgaQgBgbAUgLQASgNAlgCIAdgBIAAgHQAAgagaAAQgTAAgcANIgPggQAegPAiAAQAiAAASAPQATAPgBAeIAABwIggAAIgIgXIgCAAQgMAOgMAGQgMAGgTAAQgZAAgOgOgAALAHQgSABgLAGQgJAHAAANQAAAUAWAAQAQAAAJgJQAJgJAAgQIAAgOg");
	this.shape_12.setTransform(-46.7,-17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgWBVIAAiGIg4AAIAAgjICdAAIAAAjIg3AAIAACGg");
	this.shape_13.setTransform(-64.2,-17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ag6BVQgZgeAAg3QAAghAMgaQANgaAYgOQAXgOAfAAQAgAAAgAQIgPAmIgZgKQgMgFgMAAQgaAAgOAUQgPAUAAAjQAABKA3AAQAXAAAhgMIAAAnQgbAMgiAAQgvAAgagdg");
	this.shape_14.setTransform(-82.3,-20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-94.5,-44.2,189,87.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_sponsors();
	this.instance.parent = this;
	this.instance.setTransform(-320,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-320,-200,640,400), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgLA5QgCgDAAgGQAAgKAJAAQAEAAACADQACACAAAFQAAAFgCADQgCADgEAAQgEAAgDgCgAgKAZIAAgEQAAgJADgGQADgGAHgFQAKgJADgFQADgEAAgHQAAgIgFgEQgFgFgJAAIgMACIgOAFIgEgKQAPgIAPAAQAPAAAIAHQAIAIAAANQAAAGgBAEIgFAIQgDAEgKAIQgIAGgCAFQgCAEAAAIIAAACg");
	this.shape.setTransform(39.7,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAZArIAAg0IAAgKIAAgKIgtBIIgQAAIAAhVIAMAAIAAA1IAAAPIgBAEIAuhIIAQAAIAABVg");
	this.shape_1.setTransform(31.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAYArIAAgnIgvAAIAAAnIgNAAIAAhVIANAAIAAAkIAvAAIAAgkIANAAIAABVg");
	this.shape_2.setTransform(21.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgfAnIAAgMQAOAHAOAAQALAAAGgEQAFgEAAgHQAAgPgXAAIgMAAIAAgKIAJAAQAYAAAAgOQAAgMgTAAIgLABIgNAEIgEgKQANgGAPAAQAOAAAJAGQAIAGAAAKQAAAPgQAEIAAABQAKABAFAGQAEAFAAAIQAAAMgJAHQgKAGgQAAQgSAAgKgFg");
	this.shape_3.setTransform(12.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAZArIAAg0IAAgKIAAgKIgtBIIgQAAIAAhVIAMAAIAAA1IAAAPIgBAEIAuhIIAQAAIAABVg");
	this.shape_4.setTransform(3.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAsArIgmgrIAAArIgLAAIAAgrIgmArIgPAAIAngrIgjgqIANAAIAkAqIAAgqIALAAIAAAqIAjgqIAOAAIgkAqIAnArg");
	this.shape_5.setTransform(-7.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfAnIAAgMQAOAHAOAAQALAAAGgEQAFgEAAgHQAAgPgXAAIgMAAIAAgKIAJAAQAYAAAAgOQAAgMgTAAIgLABIgNAEIgEgKQANgGAPAAQAOAAAJAGQAIAGAAAKQAAAPgQAEIAAABQAKABAFAGQAEAFAAAIQAAAMgJAHQgKAGgQAAQgSAAgKgFg");
	this.shape_6.setTransform(-21.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgaAmQgHgHAAgMQAAgZAogBIAPgBIAAgFQAAgKgFgFQgEgFgKAAQgJAAgOAHIgEgKQAHgDAHgCQAIgCAGAAQAQAAAHAHQAHAGAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHACgIAAQgNAAgHgGgAAIABQgOABgHAEQgHAEAAAJQAAAHAEAEQAFAEAHAAQALAAAHgHQAHgHAAgMIAAgHg");
	this.shape_7.setTransform(-30.2,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AglA/IAAh7IALAAIACALIAAAAQAFgHAHgDQAHgDAHAAQARAAAKAMQAIALABAVQgBAUgIAMQgKAMgRAAQgHAAgHgDQgHgDgFgHIAAAAIAAAOIAAAkgAgSgsQgFAIgBAPIAAADQAAASAGAHQAGAIANAAQAKAAAHgJQAGgIAAgQQAAgQgGgIQgGgJgMAAQgMAAgGAHg");
	this.shape_8.setTransform(-39,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgcAwQgJgOgBgZQABgbAHgQQAJgQASgDIAmgIIADALIgmAHQgLADgGAJQgGALAAAQIAAAAQAFgGAIgFQAIgDAHAAQAQAAAJAKQAJAKAAARQAAAVgKALQgLALgSAAQgRAAgLgOgAgHgFQgGADgEADQgFAEgCAEQAAAVAGAKQAGALANAAQAYAAAAgeQAAgcgWAAQgFAAgFACg");
	this.shape_9.setTransform(-48.9,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgUAnQgJgFgEgLQgFgKAAgNQAAgUAKgMQALgLARAAQASAAALAMQAKALAAAUQAAAVgKAMQgLALgSAAQgLAAgJgFgAgSgYQgHAIAAAQQAAAQAHAJQAGAIAMAAQANAAAGgIQAHgJAAgQQAAgPgHgJQgGgIgNAAQgMAAgGAIg");
	this.shape_10.setTransform(-58.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-65.4,-14.9,110.8,25.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAZA9IAAg1IAAgJIAAgKIgtBIIgQAAIAAhVIAMAAIAAA1IAAAPIgBAEIAuhIIAQAAIAABVgAgUgpQgHgGgBgNIAMAAQABAJAEADQADADAIAAQAIAAAEgEQAEgDABgIIAMAAQgBANgHAGQgHAFgOABQgOgBgGgFg");
	this.shape.setTransform(42.3,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAjArIAAhVIANAAIAABVgAgvArIAAhVIANAAIAAAkIAXAAQAQAAAIAGQAHAFAAAMQAAANgIAGQgIAHgPAAgAgiAgIAWAAQAUAAAAgPQAAgHgFgDQgEgDgLAAIgWAAg");
	this.shape_1.setTransform(31.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAYArIAAgnIgvAAIAAAnIgNAAIAAhVIANAAIAAAkIAvAAIAAgkIANAAIAABVg");
	this.shape_2.setTransform(19.9,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgjArIAAhVIAlAAQAfAAAAAWQAAAIgEAEQgGAFgIABIAAABQALABAFAEQAFAFAAAJQAAAMgJAGQgJAHgQAAgAgWAgIAWAAQAXAAAAgPQAAgHgGgDQgEgDgNAAIgWAAgAgWgGIAVAAQAMAAAEgDQAFgDABgHQAAgGgFgDQgFgDgKAAIgXAAg");
	this.shape_3.setTransform(10.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAZArIAAg0IAAgKIAAgKIgtBIIgQAAIAAhVIAMAAIAAA1IAAAPIgBAEIAuhIIAQAAIAABVg");
	this.shape_4.setTransform(0.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgGArIAAhKIgbAAIAAgLIBDAAIAAALIgcAAIAABKg");
	this.shape_5.setTransform(-8.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AglA/IAAh7IALAAIABALIABAAQAFgHAHgDQAGgDAIAAQARAAAJAMQAJALAAAVQAAAUgJAMQgJAMgRAAQgIAAgGgDQgHgDgFgHIgBAAIABAOIAAAkgAgSgsQgGAIAAAPIAAADQAAASAGAHQAGAIAMAAQALAAAHgJQAGgIAAgQQAAgQgGgIQgHgJgLAAQgMAAgGAHg");
	this.shape_6.setTransform(-16.4,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgUAnQgJgFgEgLQgFgKAAgNQAAgUAKgMQALgLARAAQASAAALAMQAKALAAAUQAAAVgKAMQgLALgSAAQgLAAgJgFgAgSgYQgHAIAAAQQAAAQAHAJQAGAIAMAAQANAAAGgIQAHgJAAgQQAAgPgHgJQgGgIgNAAQgMAAgGAIg");
	this.shape_7.setTransform(-26.4,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAXArIAAhKIgtAAIAABKIgNAAIAAhVIBHAAIAABVg");
	this.shape_8.setTransform(-36.2,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgUAhQgKgMAAgVQAAgUAKgMQAKgLATAAIAMABIAKADIgEALIgKgDIgJgBQgZAAAAAgQAAAQAHAJQAGAIALAAQAMAAALgFIAAAMQgJAEgNAAQgSAAgKgLg");
	this.shape_9.setTransform(-44.7,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgaAmQgHgHAAgMQAAgZAogBIAPgBIAAgFQAAgKgFgFQgEgFgKAAQgJAAgOAHIgEgKQAHgDAHgCQAIgCAGAAQAQAAAHAHQAHAGAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHACgIAAQgNAAgHgGgAAIABQgOABgHAEQgHAEAAAJQAAAHAEAEQAFAEAHAAQALAAAHgHQAHgHAAgMIAAgHg");
	this.shape_10.setTransform(-57.6,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgfAnIAAgMQAOAHAOAAQALAAAGgEQAFgEAAgHQAAgPgXAAIgMAAIAAgKIAJAAQAYAAAAgOQAAgMgTAAIgLABIgNAEIgEgKQANgGAPAAQAOAAAJAGQAIAGAAAKQAAAPgQAEIAAABQAKABAFAGQAEAFAAAIQAAAMgJAHQgKAGgQAAQgSAAgKgFg");
	this.shape_11.setTransform(-65.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-71.5,-14.9,121.2,25.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAXArIAAgiIgWAAIgVAiIgPAAIAZgkQgLgDgFgFQgFgGAAgKQAAgLAIgHQAIgHAOAAIAlAAIAABVgAgSgRQAAAPAUAAIAVAAIAAgdIgXAAQgSAAAAAOg");
	this.shape.setTransform(50.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAZArIAAg0IAAgKIAAgKIgtBIIgQAAIAAhVIAMAAIAAA1IAAAPIgBAEIAuhIIAQAAIAABVg");
	this.shape_1.setTransform(41.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAYArIAAgnIgvAAIAAAnIgNAAIAAhVIANAAIAAAkIAvAAIAAgkIANAAIAABVg");
	this.shape_2.setTransform(31.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgaAmQgHgHAAgMQAAgZAogBIAPgBIAAgFQAAgKgFgFQgEgFgKAAQgJAAgOAHIgEgKQAHgDAHgCQAIgCAGAAQAQAAAHAHQAHAGAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHACgIAAQgNAAgHgGgAAIABQgOABgHAEQgHAEAAAJQAAAHAEAEQAFAEAHAAQALAAAHgHQAHgHAAgMIAAgHg");
	this.shape_3.setTransform(22,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAXArIAAhKIgtAAIAABKIgNAAIAAhVIBHAAIAABVg");
	this.shape_4.setTransform(12.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAhArIAAhGIgBAFIgFAMIgWA1IgKAAIgWg2IgFgQIAABGIgMAAIAAhVIAQAAIAWA2IAGASIACgHIADgJIAXg4IARAAIAABVg");
	this.shape_5.setTransform(2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgUAnQgJgFgEgLQgFgKAAgNQAAgUAKgMQALgLARAAQASAAALAMQAKALAAAUQAAAVgKAMQgLALgSAAQgLAAgJgFgAgSgYQgHAIAAAQQAAAQAHAJQAGAIAMAAQANAAAGgIQAHgJAAgQQAAgPgHgJQgGgIgNAAQgMAAgGAIg");
	this.shape_6.setTransform(-8.7,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AATArIgngrIAAArIgNAAIAAhVIANAAIAAAqIAkgqIAOAAIgkApIAoAsg");
	this.shape_7.setTransform(-16.8,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAXArIAAgiIgVAAIgWAiIgPAAIAYgkQgKgDgFgFQgFgGAAgKQAAgLAIgHQAIgHAOAAIAlAAIAABVgAgTgRQAAAPAWAAIAUAAIAAgdIgXAAQgSAAgBAOg");
	this.shape_8.setTransform(-30.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgUAnQgJgFgEgLQgFgKAAgNQAAgUAKgMQALgLARAAQASAAALAMQAKALAAAUQAAAVgKAMQgLALgSAAQgLAAgJgFgAgSgYQgHAIAAAQQAAAQAHAJQAGAIAMAAQANAAAGgIQAHgJAAgQQAAgPgHgJQgGgIgNAAQgMAAgGAIg");
	this.shape_9.setTransform(-39.4,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgjArIAAhVIAkAAQAgAAAAAWQAAAIgFAEQgEAFgJABIAAABQALABAFAEQAFAFAAAJQAAAMgJAGQgIAHgSAAgAgWAgIAWAAQAXAAAAgPQAAgHgGgDQgEgDgNAAIgWAAgAgWgGIAVAAQAMAAAEgDQAFgDABgHQAAgGgFgDQgFgDgKAAIgXAAg");
	this.shape_10.setTransform(-48.3,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgGA5IAAhlIgkAAIAAgMIBVAAIAAAMIgkAAIAABlg");
	this.shape_11.setTransform(-57,-1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgkAFIAAgJIBJAAIAAAJg");
	this.shape_12.setTransform(-70.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-76.7,-14.9,134.8,25.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-162.5,-120,325,240), null);


// stage content:
(lib.sponsors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,0,3).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(287));

	// sponsor
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(84.5,147);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({x:117.5,alpha:1},3).wait(64).to({y:149},1).to({x:118.3,y:67},3).wait(158));

	// 120
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.4,201.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).to({y:199.6,alpha:1},3).wait(64));

	// 10 000
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.2,151.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({y:148.7,alpha:1},3).wait(84));

	// tournaments
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123,164.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({y:154.6,alpha:1},3).wait(63).to({y:134.6,alpha:0},3).to({_off:true},59).wait(29));

	// life
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.7,125.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:90.7,alpha:1},3).wait(47).to({y:126.1},1).to({y:81.1},3).to({y:83.1},1).wait(63).to({y:85.1},1).to({y:55.1,alpha:0},3).to({_off:true},41).wait(120));

	// sport
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(86.9,100.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({x:96.9,alpha:1},3).wait(49).to({y:101.3},1).to({y:56.3},3).to({y:58.3},1).wait(63).to({y:60.3},1).to({y:30.3,alpha:0},3).to({_off:true},41).wait(120));

	// company
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(78.7,76.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:88.7,alpha:1},3).wait(51).to({y:77.4},1).to({y:32.4},3).to({y:34.4},1).wait(63).to({y:36.4},1).to({y:6.4,alpha:0},3).to({_off:true},41).wait(120));

	// ball
	this.instance_7 = new lib.Symbol7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(139.4,330.6,0.887,0.887,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(131).to({_off:false},0).to({regY:0.2,scaleX:0.72,scaleY:0.72,x:122.8,y:315.4,alpha:1},3).wait(153));

	// bg
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(320,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-80},286).wait(1));

	// bg
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(320,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-80},286).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,640.5,401.1);
// library properties:
lib.properties = {
	id: '1743E623C2169243A18EA50B59B43B3B',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ball_sponsors.png", id:"ball_sponsors"},
		{src:"images/bg_sponsors.jpg", id:"bg_sponsors"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1743E623C2169243A18EA50B59B43B3B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;