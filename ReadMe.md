

## Features

- Lightweight 
- Out of the box loader
- Full Page Loader, Inline Loader
- Custom Loading Message
- Custom Styling Options

<img src = "https://github.com/nijin-vinodan/react-spinner-loader/blob/master/examples/react-spinner-loader.png?raw=true" width = "700"/>


## Installation

With Yarn

```
yarn add react-spinner-loader
```

With npm

```
npm i --save react-spinner-loader
```

## Documentation
You could view the documentation in <a href = "https://github.com/nijin-vinodan/react-spinner-loader">Github Page</a> as well.

## Usage

react-spinner-loader is compatible with both Class and Functional React Components.

```
import Loader from 'react-spinner-loader';
const App = () => {
    const [loader, setLoader] = useState(true);
    return (
        <div>
            <Loader show = {loader}>
        </div>
    )
}
```

## Available Custom Props

By default, react-spinner-loader comes up with the following properties. You could use the following to customize your loader out of the box.

<table>
  <tbody>
    <tr>
      <th>Prop</th>
      <th>Optional</th>
      <th>Default</th>
      <th>Possible Values</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>show</td>
      <td>No</td>
      <td>false</td>
      <td>true | false</td>
      <td>To Show/Hide Loader</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Yes</td>
      <td>inline</td>
      <td>inline | box | body </td>
      <td>To show either full page or inline loader</td>
    </tr>
    <tr>
      <td>message</td>
      <td>Yes</td>
      <td> - </td>
      <td>User Custom String</td>
      <td>To show Loading Message</td>
    </tr>
    <tr>
      <td>stack</td>
      <td>Yes</td>
      <td>horizontal</td>
      <td>horizontal | vertical</td>
      <td>To decide the position of spinner and message</td>
    </tr>
    <tr>
      <td>spinnerStyle</td>
      <td>Yes</td>
      <td></td>
      <td>
        Any Primary and Secondary Color. 
      </td>
      <td>To change the color of spinner</td>
    </tr>
    <tr>
      <td>spinnerSize</td>
      <td>Yes</td>
      <td>
        40px
      </td>
      <td>
        Size in px | em | rem
      </td>
      <td>To change the size of spinner</td>
    </tr>
    <tr>
      <td>messageStyle</td>
      <td>Yes</td>
      <td>
        #101010 (Inline)<br/>
        #FFFFFF (Other)
      </td>
      <td>
        CSS Properties
      </td>
      <td>To change the style of messages</td>
    </tr>
  </tbody>
</table>


## Example

### Prop : <b>type</b>

To show inline loaders, use <b><i>type = "inline"</i></b>. This is the default value.
```
<Loader show = {loader} type = "inline" />
``` 
<a href = "https://codesandbox.io/s/react-spinner-loader-inline-example-qeglg" target = "_blank">View on Sandbox</a>

To show a full page loader with blur background, use <b><i>type = "body"</i></b>
```
<Loader show = {loader} type = "body" />
```
<a href = "https://codesandbox.io/s/react-spinner-loader-body-example-b9xce"  target = "_blank">View on Sandbox</a>

To show a full page loader <u>without</u> blur background, then use <b><i>type = "box"</i></b>

```
<Loader show = {loader}  type = "box" />
```
<a href = "https://codesandbox.io/s/react-spinner-loader-box-example-1k90o"  target = "_blank">View on Sandbox</a>

### Prop : <b>message</b> and <b>messageStyle</b>

Many times, we would want to provide a loading message along with the loader to help user understand why is it taking a lot of time to load the data. <br/>
To achieve this, you could pass custom loading string with <b>message</b> prop. <br/>
Alternatively, you could also configure the message styling with <b>messageStyling</b> prop.

```
<Loader 
    show = {loader}
    message = "Loading Message"
    messageStyling = {{
        color: blue
    }}
/>
```

### Prop : <b>stack</b>
This prop would help to place message either horizontally or vertically with respect to the spinner.
```
<Loader show = {loader}  stack = "vertical"/>
```
<a href = "https://codesandbox.io/s/react-spinner-loader-vertical-example-ppi90"  target = "_blank">View on Sandbox</a>

### Prop : <b>spinnerStyle</b>
Want to align the spinner with your website theme? You could always use <b>spinnerStyle</b> prop to customize the loader colors.<br/>

```
<Loader
    show = {loader} 
    spinnerStyle = {{
        primary: '#46B597',
        secondary: '#2D866D'
    }}
/>
```

### Prop : <b>spinnerSize</b>
Increase or Decrease the spinner size with <b>spinnerSize</b>
```
<Loader show = {loader} spinnerSize = "50px"/>
```