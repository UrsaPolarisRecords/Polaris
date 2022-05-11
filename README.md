# Polaris

![Image of Polaris](https://github.com/UrsaPolarisRecords/Polaris/blob/main/Website%20Mock-up-01.png)

A visualized decentralized incentivized music encyclopedia, with tokens awarded to curators and artists, and used for native advertising

Ursa Polaris Records, or Polaris for short, consists of five stack layers. They are as follows, in the order of data flow:

1. Data Input Field
    - Consists of fields for: Reference Link, Release Name, Release Date, Group(s), Members, Guests, Label(s), Track List, Track Link for each track list
    - MVP is a set of javascript fields that, when all required info is provided, allows the user to submit a blockchain transaction containing all of the entered information, as well as a stake of native tokens.

2. Blockchain Record
    - Consists of blockchain transactions with the "memo" field populated by graph database commands, which can then be replayed to generate the database.
    - Also consists of "Upvote" and "Downvote" commands, which require a small stake of tokens, and are stored in RAM.
    - Also consists of "Comment" and "Like" commands, which are sent in the "memo" field as Graph Database commands, which reference the User ID and Comment/like to the piece of data in question.
    - Also consists of staked endorsements, where a user stakes their tokens to a particular Graph Database node as a means for advertising
 
3. Graph Database
    - Consists of a relational graph database like Neo4j, which creates nodes of each Master Project, Release, Group, Artist, Label, Song, and Sound Recording, and then creates edges representing the connections involved in each release. 
    - Organized with the "Song" as the basic building block, which is used in a Sound Recording that features Groups and other Artists, which is used in a Release that features a Label and more Artists, which is the Master Project if it's the first release or otherwise canonical version of the project.
 
4. Graph-to-JIT-Translator
    - Consists of a tool that fetches a node from the graph database, and any other node within 5 degrees of separation, and uses the information to populate a non-heirarchical Hyperbolic Graph, similar to the "Hypertree" developed by Xerox. 
    - If a user is not logged in with a defined home node, upon initial startup the tool chooses which node to fetch based on assigning a weight to all nodes based on their staked endorsements, and then randomly choosing a node with its likelihood determined by the quantity of staked endorsements.
    - Could potentially use the Javascript Infovis Toolkit (JIT) developed by Nicolas Garcia Belmonte for this purpose. For an example of this toolkit and the desired geometry, see https://philogb.github.io/jit/static/v20/Jit/Examples/Hypertree/example1.html 
  
5. Hyperbolic Graph Interface
    - Consists of a hyperbolic graph, or a representation of nodes and their connections that has been stretched over a hyperbolic space, such that nodes infinitely bunch up close to the edge of the graph, much like Escher's "Angels and Demons". An example of a non-heirarchical hypergraph, rather than the hypertree previously linked, is shown here: https://philogb.github.io/jit/static/v20/Jit/Examples/Hypertree/example2.html
    - Also consists of a text browser where users can read about the selected node of the graph.
    - The bottom layer of the graph consists of the Artists, which are connected to the next layer of the graph, which consists of the Groups. The top layer, Projects, appears when an Artist or Group is clicked on. Clicking on a Project, Artist, or Group will bring up that node's info in the browser. Examples of some of the graphical visualization elements that can be incorporated are available here: https://philogb.github.io/jit/demos.html

Here's what a project input field could look like:

![Website dataStructure-02](https://user-images.githubusercontent.com/36178664/167821145-5b3164b4-bfc2-4a72-b419-6cb850da5cb0.png)


Here are some outlines of the graph and blockchain data structues. Somewhere is an improved version of the graph database structure that includes a distinction between songs and sound recordings, and this document will be updated once it is located.
![Website dataStructure-03](https://user-images.githubusercontent.com/36178664/167820763-24cc9e38-5fed-4b4d-844c-c760013d8bdd.png)
![Website dataStructure-05](https://user-images.githubusercontent.com/36178664/167820813-774332cd-8c9a-4362-b208-8d0e6a031a43.png)
![Website dataStructure-04](https://user-images.githubusercontent.com/36178664/167820858-d1b9d320-d5d3-4e66-9e51-c58dc6a8d8cb.png)

