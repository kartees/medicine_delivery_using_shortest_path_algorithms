class Graph
{
    
    
    constructor()
    {
        //initialize the array that will hold all our vertices
        this.Vertices = [];
    }

    addVertex(vertex)
    {
        //add a new vertex to the list
        this.Vertices.push(
          {
            "Name": vertex,
            "Edges": []
          }
        );
    }
    

    addEdge(startVertex, finishVertex, weight)
    {
        //get the appropriate object that corresponds to the name of the asked vertex
        var vertex = this.Vertices.find(x => x.Name == startVertex);

        //if vertex is null, then no vertex with that name was found
        if(vertex == null)
          throw "Vertex not found in the list!"; //throw an exception to the user

        //add the edge to the corresponding vertex
        vertex.Edges.push
        (
          {
            "Finish": finishVertex,
            "Weight": weight
          }
        );
    }

    dijkstra(startVertex)
    {
        //get the appropriate object that corresponds to the name of the asked vertex
        var initVertex = this.Vertices.find(x => x.Name == startVertex);

        //if vertex is null, then no vertex with that name was found
        if(initVertex == null)
          throw "Vertex not found in the list!"; //throw an exception to the user

        //initialize all fields related to the dijkstra shortest path finding
        for(var vertex of this.Vertices)
        {
            vertex.WeightOfPath = Infinity;
            vertex.PrevVertexOfPath = null;
            vertex.Visited = false;
        }

        //initialize the weight of the start vertex to zero
        initVertex.WeightOfPath = 0;
        //initialize the previous vertex of the dijkstra path to itself (denoting that this is the start of our path)
        initVertex.PrevVertexOfPath = initVertex;

        //preform the dijkstra algorithm to our graph
        this.doDijkstra(initVertex, this.Vertices);
    }

    getDijkstraPath(finishVertex)
    {
        //get the appropriate object that corresponds to the name of the finish vertex
        var vertex = this.Vertices.find(x => x.Name == finishVertex);

        //if the previous node in the path is the same as the current,
        //then we hit the starting vertex
        if(vertex.PrevVertexOfPath.Name == vertex.Name)
          return finishVertex; //return the name of the current, and at the same time starting vertex

        //if we got so far, we return the name of the current vertex and we also ask the name of the previous one
        return (vertex.Name + " <- " + this.getDijkstraPath(vertex.PrevVertexOfPath.Name));
    }

    doDijkstra(startVertex, vertices)
    {
        //If the current vertex has been visited or it does not have any edges, then
        //there is no point on visiting it
        if(startVertex.Visited == true || startVertex.Edges == null)
          return;

        //we change the status of the vertex to visited
        startVertex.Visited = true;

        //we loop through all edges of the current vertex
        for(var edge of startVertex.Edges)
        {
            //we get the object of the finishing vertex
            var finishVertex = vertices.find(x => x.Name == edge.Finish);
            //we get the weight of the path until this vertex
            var totalWeight = (startVertex.WeightOfPath + edge.Weight);

            //if the so-far weight of the graph is smaller than the current so-far weight of the graph, then
            if(totalWeight < finishVertex.WeightOfPath)
            {
                //we set the current weight of the path to the total weight
                finishVertex.WeightOfPath = totalWeight;
                //we set as the previous vertex of this graph, the current vertex
                finishVertex.PrevVertexOfPath = startVertex;
            }

            //we run dijkstra again by getting the object at the end of the edge, and passing again the list of the vertices
            this.doDijkstra(vertices.find(x => x.Name == edge.Finish), vertices);
        }
    }



   //BFS 
    
     

}   

class Gin {
   constructor(no)
    {
    	this.noOfVertices = no; 
        this.AdjList = new Map();
    }
    addVertex(v) 
     { 
    // initialize the adjacent list with a 
    // null array 
    this.AdjList.set(v, []); 
      } 
     
      addEdge(v, w) 
      { 
    // get the list for vertex v and put the 
    // vertex w denoting edge between v and w 
    this.AdjList.get(v).push(w); 
  
    // Since graph is undirected, 
    // add an edge from w to v also 
    this.AdjList.get(w).push(v); 
      } 

    printGraph() 
{ 
    // get all the vertices 
    var get_keys = this.AdjList.keys(); 
  
    // iterate over the vertices 
    for (var i of get_keys)  
       { 
        // great the corresponding adjacency list 
        // for the vertex 
        var get_values = this.AdjList.get(i); 
        var conc = ""; 
  
        // iterate over the adjacency list 
        // concatenate the values into a string 
        for (var j of get_values) 
            conc += j + " "; 
  
        // print the vertex and its adjacency list 
        console.log(i + " -> " + conc); 
       } 
   } 
  bfs(startingNode) 
{ 
  
    // create a visited array 
    var visited = []; 
    for (var i = 0; i < this.noOfVertices; i++) 
        visited[i] = false; 
  
    // Create an object for queue 
    var q = new Queue(); 
    var str = "";
    // add the starting node to the queue 
    visited[startingNode] = true; 
    q.enqueue(startingNode); 
  
    // loop until queue is element 
    while (!q.isEmpty()) { 
        // get the element from the queue 
        var getQueueElement = q.dequeue(); 
          str = str +" "+getQueueElement;
        // passing the current vertex to callback funtion 
        console.log(getQueueElement); 
  
        // get the adjacent list for current vertex 
        var get_List = this.AdjList.get(getQueueElement); 
  
        // loop through the list and add the element to the 
        // queue if it is not processed yet 
        for (var i in get_List) { 
            var neigh = get_List[i]; 
  
            if (!visited[neigh]) { 
                visited[neigh] = true; 
                q.enqueue(neigh); 
            } 
        } 
    } 
    path.innerHTML  = "BFS path to all Places !"
    patho.innerHTML = str;
} 


}

class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    enqueue(element) 
{     
    // adding element to the queue 
    this.items.push(element); 
} 
dequeue() 
{ 
    // removing element from the queue 
    // returns underflow when called  
    // on empty queue 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
} 
front() 
{ 
    // returns the Front element of  
    // the queue without removing it. 
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
} 
isEmpty() 
{ 
    // return true if the queue is empty. 
    return this.items.length == 0; 
} 
printQueue() 
{ 
    var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
    return str; 
} 
} 