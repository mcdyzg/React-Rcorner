import React from 'react'
import Rcorner from '../../lib/Rcorner.js'
import reactDOM from 'react-dom'

export default class App extends React.Component {
	constructor(props,context) {
		super(props,context)
	}

	render() {
		return (
			<div>
				<div style={{height:500,width:500,background:'#eee',overflow:'hidden',position:'relative'}}>
					<Rcorner />
				</div>
			</div>
			)
	}
}

reactDOM.render(<App />,document.getElementById('app'))

