(this["webpackJsonptictactoe-react"]=this["webpackJsonptictactoe-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),s=a(1),n=a(2),c=a(4),i=a(3),l=a(5),u=a(0),o=a.n(u),h=a(7),d=a.n(h);a(15);function m(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(!b(t)&&!t[e]){t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext});var a=this.state.xIsNext;this.props.onToggleX(a)}}},{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(m,{extraClass:this.state.xIsNext?"revert":"",value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=b(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"status"},e),o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onToggleX=function(e){a.setState({classes:e?"revert game":"game"})},a.state={classes:"game"},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.state.classes},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{onToggleX:this.onToggleX})))}}]),t}(o.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var s=Object(r.a)(t[a],3),n=s[0],c=s[1],i=s[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return e[n]}return null}d.a.render(o.a.createElement(f,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.1d6efb69.chunk.js.map