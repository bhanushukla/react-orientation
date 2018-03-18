# react-orientation

A react component to show message to rotate device to a specific orientation

## Usage
  npm install react-orientation --save
  
## Examples
To import the package

```
import ReactOrientation from 'react-orientation';
```

> To display a message to "Rotate device to landscape mode"
```
<ReactOrientation type="landscape" />
```
This is used when the application is supported in only landscape mode.

> To display a message to "Rotate device to portrait mode"
```
<ReactOrientation type="portrait" /> 
```

> A custom component to display can also be passed
```
<ReactOrientation>
  <div>Please rotate your device to portrait mode</div>
</ReactOrientation>
```

##### In case no type prop is passed to ReactOrientation, type="portrait" will be used by default. It will display message to rotate device to protrait mode.
