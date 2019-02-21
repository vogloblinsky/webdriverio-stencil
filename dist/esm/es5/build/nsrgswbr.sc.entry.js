import{h}from"../nova.core.js";var Nova=function(){function e(){}return e.prototype.validateScore=function(){"1"===this.score||"2"===this.score||"3"===this.score||"4"===this.score?this.getScoreCSSClass():this.score="1"},e.prototype.isValidScore=function(e){return"1"===e||"2"===e||"3"===e||"4"===e},e.prototype.componentWillLoad=function(){this.isValidScore(this.score)||(this.score="1")},e.prototype.getScoreCSSClass=function(){var e="";switch(this.score){case"1":e="one";break;case"2":e="two";break;case"3":e="three";break;case"4":e="four";break;default:e="one"}return e},e.prototype.render=function(){return h("div",{class:"container"},h("div",{class:"title"},"NOVA"),h("div",{class:"score "+this.getScoreCSSClass()},this.score))},Object.defineProperty(e,"is",{get:function(){return"nova-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{score:{type:String,attr:"score",mutable:!0,watchCallbacks:["validateScore"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-nova-badge-h{display:inline-block;font-family:Arial,Helvetica,sans-serif;font-weight:700}.sc-nova-badge-h   .container.sc-nova-badge{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center}.sc-nova-badge-h   .container.sc-nova-badge   .title.sc-nova-badge{color:#7e7e7e;font-size:24px}.sc-nova-badge-h   .container.sc-nova-badge   .score.sc-nova-badge{color:#fff;width:68px;height:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:80px}.sc-nova-badge-h   .container.sc-nova-badge   .score.one.sc-nova-badge{background-color:#48ab00}.sc-nova-badge-h   .container.sc-nova-badge   .score.two.sc-nova-badge{background-color:#f5cd00}.sc-nova-badge-h   .container.sc-nova-badge   .score.three.sc-nova-badge{background-color:#ec6500}.sc-nova-badge-h   .container.sc-nova-badge   .score.four.sc-nova-badge{background-color:#e90000}"},enumerable:!0,configurable:!0}),e}();export{Nova as NovaBadge};