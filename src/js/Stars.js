// Import React
import React from 'react';
import ReactDOM from 'react-dom';

function coord(measurement){
	return (Math.floor(Math.random() * measurement));
};

export default class Stars extends React.Component {
    constructor(props) {
        props.count = 200;
        props.width = document.body.clientWidth;
        props.height = (document.body.scrollHeight * 2); 
        props.sky = document.querySelector('[data-sky]');
        super(props);
    } 
    componentDidMount() {
        this.props.sky.addEventListener('scroll', this.scrollHandler, false);
    }
    componentDidUnmount() {
        this.props.sky.removeEventListener('scroll', this.scrollHandler, false);
    }
    scrollHandler(){
        var svgContainer = document.querySelector('[data-svg-container]'); 
        var scrollTopUnit = (this.scrollTop / 100); 
        var scrollTopScale = this.scrollTop > 0 ? 1 + (scrollTopUnit / 10) : 1; 
        svgContainer.style["webkitFilter"] = "blur(" + scrollTopUnit + "px)";
        svgContainer.style["filter"] = "blur(" + scrollTopUnit + "px)";
        svgContainer.style["transform"] = "translateY(" + scrollTopScale + "px)";
    }
    render() {
    	var starArray = [];
        var svgNamespace = "http://www.w3.org/2000/svg";
		for (var i = 0; i < this.props.count; i++) {
          var starStyle = {
            animationDelay: (Math.random() * 2).toFixed(1) + "s",
            animationDuration: ((Math.random() * 6).toFixed() + 3) + "s"
          };
          starArray.push(<circle data-star="" className={'light ' + (i % 3 == 0 ? 'pulse-primary' : 'pulse-secondary')} cx={coord(this.props.width)} cy={coord(this.props.height)} r={3} style={starStyle}></circle>);
		}
    	return <svg data-svg-container="" className={'sky__svg'} id="skySvg" width="100%" height={this.props.height}>{starArray}</svg>
    }
}