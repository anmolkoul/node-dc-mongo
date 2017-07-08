# node-dc-mongo
<h2>Source code for the project demonstrating data visualization using d3.js, dc.js, node.js and mongodb<h2><br/>

For the full post please visit: <br/>
<h2>https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb</h2>

Required Components:<br/>
D3.js<br/>
Dc.js<br/>
Node.js<br/>
Crossfilter.js<br/>
Jquery<br/>
MongoDB<br/>

Steps for successful execution:<br/>
1. Install MongoDB <br/>
2. gunzip the data archive in data/
2. Insert the data into mongoDB :<br/>
<pre>  $> mongoimport -d donorschoose -c projects --type csv --headerline --file ../opendata_projects000_20000</pre>
3. Install Nodejs and NPM<br/>
4. Navigate to the node-dc-mongo directory using command prompt and run npm install, this will install the dependencies<br/>
5. Navigate to the node-dc-mongo directory using command prompt and run npm start<br/>
6. In your browser go to localhost:8080/index.html<br/>
