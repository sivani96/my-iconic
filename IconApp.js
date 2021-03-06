import React, { Component } from 'react';
import './App.css';
import icons from './icons';
import './IconApp.css';
import {Icon} from 'react-fa'
console.log(icons);

const wordMap =icons.reduce(function(chain,i){
  const parts=i.split('-');
  var key=parts[1];
  chain[key]=i;
  return chain;
},{});
console.log(wordMap);




class IconApp extends Component{
  constructor(){
    super();
    this.state={r:[],g:[],b:[]};
  }

  componentWillReceiveProps(nextProps){
      console.log(nextProps);
      const nextWordCount=nextProps.text.split(' ').length;
	  const rv=[...this.state.r];
	  const gv=[...this.state.g];
	  const bv=[...this.state.b];
      while (rv.length<nextWordCount) {
        let temp=(Math.ceil(Math.random()*0xFF)).toString(16);
		rv.push(temp);
		console.log(rv);
        temp=(Math.ceil(Math.random()*0xFF)).toString(16);
		gv.push(temp);
		temp=(Math.ceil(Math.random()*0xFF)).toString(16);
		bv.push(temp);
      }
      this.setState({r:rv,g:gv,b:bv});
  }

  render(){
    let words=this.props.text.split(' ')
    const rs=(this.state.r).toString();
	const gs=(this.state.g).toString();
	const bs=(this.state.b).toString();
	
    words=words.map(function(w,i){

      w=w.replace(/\W/g,'').toLowerCase();
      //   .replace(/s$/,'')

      const colorValue='#'+rs[i]+gs[i]+bs[i];
	  console.log(colorValue);

      const sty={
        color: colorValue
      };

      if(wordMap[w]){
        return (<i style={sty} key={i} className={'fa '+wordMap[w]}/>);
	  }
      else {
        return (<span key={i}>{w}</span>);
      }
    });
    return(
      <p>
      {words}</p>
    );
  }
}
export default IconApp;
