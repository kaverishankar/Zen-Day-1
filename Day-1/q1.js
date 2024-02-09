// Write a blog on Difference between HTTP1.1 vs HTTP2 ? //

/* HTTP1.1
   
   It works on textual format and it compresses data by itself.
   HTTP/1.1 loads resources one after the other, so if one resource was not loaded, it blocks all the other resources behind it.

*/

/* HTTP2.1

   It works on binary protocol and it uses HPACK for data compression.
   HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource.
   It consume less bandwidth, are more efficiently parsed and are less error-prone because of binary protocol.
*/