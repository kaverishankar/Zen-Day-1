// Write a blog on the Difference between Document and Window objects ? //

/* DOCUMENT
  
   Document represents the document loaded inside the window or browser.
   It is loaded after the loading window and We can not access windows objects properties inside the document 
   because window contains document.

   example : 

    <script> 
        document.bgColor = "orange";
    </script>

    ( background colour will be orange on document area within the window).

*/

/* WINDOW
  
   Document represents the browser window in which you are seeing the content..
   It is loaded before the document and We can access document object properties inside the window 
   because window contains document.
   The window is the global element for all objects, functions, etc.

   example : 

    <script> 
        window.document.bgColor = "green";
    </script>

    ( background colour will be green on window , which it covers whole area on window).

*/