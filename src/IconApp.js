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
    this.state={r:[],g:[],b:[],text:[]};
	this.iconClicked=this.iconClicked.bind(this);
  }
  
  
  iconClicked(w,i){
	const dispText=[...this.state.text];
	dispText[i]=w;
	this.setState({text:dispText});
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

    //  this.setState({colorval:colorval.push(colors[index])});


      w=w.replace(/\W/g,'').toLowerCase();
      //   .replace(/s$/,'')

      const colorValue='#'+rs[i]+gs[i]+bs[i];
	  console.log(colorValue);

      const sty={
        color: colorValue
      };
	  let wtemp=w;
	  let count=0;
	   	while(wtemp.endsWith('s')){
		if(wordMap[wtemp]&&this.state.text[i]==undefined){
				return (<i style={sty} onClick={() => this.iconClicked(w,i)} key={i} className={'fa '+wordMap[wtemp]}/>);
			
		}
		else if(wordMap[wtemp]){
				return (<span key={i}>{wtemp}</span>);
				this.setState({text:undefined});
			}
		else{
			wtemp=wtemp.replace(/s$/,'');
			count++;
		}
	  } 
	  w=wtemp;
      if(wordMap[w]&&this.state.text[i]==undefined){
			return (<i style={sty} onClick={() => this.iconClicked(w,i)} key={i} className={'fa '+wordMap[w]}/>);
	  }
	  else if(wordMap[w]){
			return (<span key={i}>{w}</span>);
			this.setState({text:undefined});
	    }
      else {
		  while(count--){
		  w=w+'s';
		}
        return (<span key={i}>{w}</span>);
      }
    },this);
    return(
      <p>
      {words}</p>
    );
  }
}
export default IconApp;
