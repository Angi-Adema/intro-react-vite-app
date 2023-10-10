// import React from 'react';

// const CUSTOM_HTML = `
//   <h1>Hi</h1>
//   <div>My name is Angi</div>
//   `;

// function RawHtml() {
//   return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
// }

// export default RawHtml;

// This is NOT typically how we want to render HTML, we definitely DO NOT WANT ANY USER INPUT rendered here as hackers can come in here and enter a script to just additional JavaScript code in order to get the app to do what they want it to do. Sometimes we only have our HTML in a string format and we need to be able to render it as HTML which is what this is for. Really never want to do this but is only used for custom HTML.
