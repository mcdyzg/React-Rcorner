# React-Rcorner-Component 

##  
a triangular badge Fixed on top

## how to run demo ##

```
npm install
```
```
npm start
```
check on localhost:3001

## how to use ##

```
var Rcorner = require('react-Rcorner-component');
```
```
var Header = React.createClass({
  render: function() {
    return (
	<div style={{overflow:'hidden',position:'relative'}}> //necessary   the badge parent element must have sytle like this
      <Rcorner	
		word='hot!'       //necessary    the badge text
		width=80          //necessary    the width of badge
		background='red'  //unnecessary   
		position='right'  //unnecessary  the badge on top-left or top-right
		color='#fff'      //unnecessary  the color of word
		fontSize='16px'	  //unnecessary  font-size
		id='fixnav'
		className='fixnav'>
      </Rcorner>
	</div>
    );
  }
});

React.render(<Header></Header>, document.body);
```

**ex:the badge's parent element must have `style={{overflow:'hidden',position:'relative'}}`**

## how to build ##

```
npm run build
```