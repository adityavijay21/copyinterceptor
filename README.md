
# CopyInterceptor  

CopyInterceptor is a React component designed to prevent users from copying text on your website. It intercepts copy events and displays a toast notification using `react-toastify`.  

## Features  

- **Restricts Copying**: Prevents users from copying content on your webpage.  
- **Toast Notification**: Displays a notification whenever a copy attempt is made.  
- **User-Friendly**: Built with `react-toastify` for smooth and customizable notifications.  

## How It Works  

The component listens for the `copy` event on the document. When triggered, it prevents the default copy action and shows a toast notification informing the user that copying is restricted.  

## Setup  

### Prerequisites  

Make sure you have React and `react-toastify` installed in your project:  

```bash  
npm install react-toastify  
```  

### Installation  

Download or clone this repository:  

```bash  
git clone https://github.com/adityavijay21/copy-text-interceptor.git  
```  

### Usage  

Include the `CopyTextInterceptor` component in your project:  

```jsx  
import React from 'react';  
import CopyTextInterceptor from './CopyTextInterceptor';  

const App = () => (  
  <div>  
    <h1>Welcome to My Website</h1>  
    <p>This is some text that users cannot copy!</p>  
    <CopyTextInterceptor />  
  </div>  
);  

export default App;  
```  

## Customization  

The toast notification uses `react-toastify`. You can customize its appearance by modifying the toast settings in the component.  

## Contributing  

Contributions are welcome! Feel free to fork the repository, open issues, or submit pull requests to enhance functionality or fix bugs.  

## License  

This project is licensed under the [MIT License](LICENSE).  
