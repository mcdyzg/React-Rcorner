import React from 'react'

// 父元素必须具有relative或absolute定位，和overflow:hidden

export default class Rcorner extends React.Component {
	constructor(props,context) {
		super(props,context)
	}

	static defaultProps = {
    position: 'right',
  }

	getStyle() {
		const style={
			position:'absolute',
			transform: this.props.position=='right'?'rotate(45deg)':'rotate(-45deg)',
    	textAlign: 'center',
			height:this.props.width||'80px',
			width:this.props.width||'80px',
			background:this.props.background||'#FA7862',
   		lineHeight: this.props.width?this.props.width*1.75+'px':'140px',
   		right:this.props.position=='right'?-this.props.width/2||'-40px':'',
   		left:this.props.position=='left'?-this.props.width/2||'-40px':'',
   		top:-this.props.width/2||'-40px',
   		color:this.props.color||'#fff',
   		fontSize:this.props.fontSize||'16px',
   		fontFamily:'Microsoft Yahei',
		}
		return style
	}

	render() {
		const style=this.getStyle()
		const styles={...style,...this.props.style}
		return (
			<div {...this.props} style={ styles }>
				{this.props.word||'hot'}
			</div>
			)
	}
}

