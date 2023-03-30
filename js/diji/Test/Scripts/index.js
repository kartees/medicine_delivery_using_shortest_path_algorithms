
    //we create a new instance of our graph
    const graph = new Graph();
    var g;
    var vertice,vv1,vv2,vv3,vv4,vv5,vv6,vv7;
   var temp= 1;
   burr.addEventListener('click', e => {
    e.preventDefault()
    const ve = document.getElementById('ver');
    vertice =Number(ve.value); 
    console.log(vertice);
    g = new Gin(vertice);
    for (var i = 0; i <= vertice; i++) {
        if(i==0)
           { graph.addVertex("A");
            g.addVertex("A");
           } 
        else if (i==1)
           {  graph.addVertex("B");
               g.addVertex("B");
            }   
        else if (i==2)
             {graph.addVertex("C");
                 g.addVertex("C");
             }
        else if (i==3)
             {graph.addVertex("D");
                g.addVertex("D");
             }
        else if (i==4)
             {graph.addVertex("E");
                 g.addVertex("E");
              }
        else if (i==5)
             {graph.addVertex("F");
                 g.addVertex("F");
             }
        else if (i==6)
             {
                graph.addVertex("G");
                  g.addVertex("G");
             }
        else if (i==7)
             {graph.addVertex("H");  
              g.addVertex("H");
             }                              
    }
  
   ref.on("value", function(data){
    data.forEach(function (chi)
    {
        var data = chi.val();
        let keys = Object.keys(data);
        console.log(data[keys[0]]);
        if(temp==1)
           vv1 = data[keys[0]];
        else if(temp==2)
           vv2 = data[keys[0]];
        else if(temp==3)
           vv3 = data[keys[0]];
        else if(temp==4)
           vv4 = data[keys[0]];
        else if(temp==5)
           vv5 = data[keys[0]];
        else if(temp==6)
           vv6 = data[keys[0]];
        else if(temp==7)
           vv7 = data[keys[0]];                   
        temp++;
        

    })
  })
   console.log(vv2);
   
   if(vertice ==4){
    v1.innerHTML = vv1;
   v2.innerHTML = vv2;
   v3.innerHTML = vv3;
   v4.innerHTML = vv4;
   }
   else if (vertice == 5){
    v1.innerHTML = vv1;
   v2.innerHTML = vv2;
   v3.innerHTML = vv3;
   v4.innerHTML = vv4;
   v5.innerHTML = vv5;
   }
   else if (vertice==6){
      v1.innerHTML = vv1;
   v2.innerHTML = vv2;
   v3.innerHTML = vv3;
   v4.innerHTML = vv4;
   v5.innerHTML = vv5;
    v6.innerHTML = vv6;
   }
   

     });
   
  // edges

  burr1.addEventListener('click', f => {
    f.preventDefault()
    const ed = document.getElementById('edg');
    edge =Number(ed.value); 
    console.log(edge);
    
  if(edge==6)
 {
   var b1 = document.getElementById('sp1');
   b1.classList.toggle('active');
      var b2 = document.getElementById('sp2');
   b2.classList.toggle('active');
      var b3 = document.getElementById('sp3');
   b3.classList.toggle('active');
      var b4 = document.getElementById('sp4');
   b4.classList.toggle('active');
      var b5 = document.getElementById('sp5');
   b5.classList.toggle('active');
      var b6 = document.getElementById('sp6');
   b6.classList.toggle('active');
}

  else if(edge==7)
 {
   var b1 = document.getElementById('sp1');
   b1.classList.toggle('active');
      var b2 = document.getElementById('sp2');
   b2.classList.toggle('active');
      var b3 = document.getElementById('sp3');
   b3.classList.toggle('active');
      var b4 = document.getElementById('sp4');
   b4.classList.toggle('active');
      var b5 = document.getElementById('sp5');
   b5.classList.toggle('active');
      var b6 = document.getElementById('sp6');
   b6.classList.toggle('active');
   var b7 = document.getElementById('sp7');
   b7.classList.toggle('active');
}
 else if(edge==8)
 {
   var b1 = document.getElementById('sp1');
   b1.classList.toggle('active');
      var b2 = document.getElementById('sp2');
   b2.classList.toggle('active');
      var b3 = document.getElementById('sp3');
   b3.classList.toggle('active');
      var b4 = document.getElementById('sp4');
   b4.classList.toggle('active');
      var b5 = document.getElementById('sp5');
   b5.classList.toggle('active');
      var b6 = document.getElementById('sp6');
   b6.classList.toggle('active');
   var b7 = document.getElementById('sp7');
   b7.classList.toggle('active');
   var b8 = document.getElementById('sp8');
   b8.classList.toggle('active');
}
 else if(edge==9)
 {
   var b1 = document.getElementById('sp1');
   b1.classList.toggle('active');
      var b2 = document.getElementById('sp2');
   b2.classList.toggle('active');
      var b3 = document.getElementById('sp3');
   b3.classList.toggle('active');
      var b4 = document.getElementById('sp4');
   b4.classList.toggle('active');
      var b5 = document.getElementById('sp5');
   b5.classList.toggle('active');
      var b6 = document.getElementById('sp6');
   b6.classList.toggle('active');
   var b7 = document.getElementById('sp7');
   b7.classList.toggle('active');
   var b8 = document.getElementById('sp8');
   b8.classList.toggle('active');
   var b9 = document.getElementById('sp9');
   b9.classList.toggle('active');
}
else if(edge==10)
 {
   var b1 = document.getElementById('sp1');
   b1.classList.toggle('active');
      var b2 = document.getElementById('sp2');
   b2.classList.toggle('active');
      var b3 = document.getElementById('sp3');
   b3.classList.toggle('active');
      var b4 = document.getElementById('sp4');
   b4.classList.toggle('active');
      var b5 = document.getElementById('sp5');
   b5.classList.toggle('active');
      var b6 = document.getElementById('sp6');
   b6.classList.toggle('active');
   var b7 = document.getElementById('sp7');
   b7.classList.toggle('active');
   var b8 = document.getElementById('sp8');
   b8.classList.toggle('active');
   var b9 = document.getElementById('sp9');
   b9.classList.toggle('active');
   var b10 = document.getElementById('sp10');
   b10.classList.toggle('active');
}
});


  eb1.addEventListener('click', e => {
     var ed1 = document.getElementById('e11');
     var ed2 = document.getElementById('e12');
     var val1 = document.getElementById('ev1');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   
   eb2.addEventListener('click', e => {
     var ed1 = document.getElementById('e21');
     var ed2 = document.getElementById('e22');
     var val1 = document.getElementById('ev2');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb3.addEventListener('click', e => {
     var ed1 = document.getElementById('e31');
     var ed2 = document.getElementById('e32');
     var val1 = document.getElementById('ev3');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb4.addEventListener('click', e => {
     var ed1 = document.getElementById('e41');
     var ed2 = document.getElementById('e42');
     var val1 = document.getElementById('ev4');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     g.addEdge(edge1,edge2);    
     graph.addEdge(edge1,edge2 , value);
     console.log("graph added");
  });
   eb5.addEventListener('click', e => {
     var ed1 = document.getElementById('e51');
     var ed2 = document.getElementById('e52');
     var val1 = document.getElementById('ev5');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb6.addEventListener('click', e => {
     var ed1 = document.getElementById('e61');
     var ed2 = document.getElementById('e62');
     var val1 = document.getElementById('ev6');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb7.addEventListener('click', e => {
     var ed1 = document.getElementById('e71');
     var ed2 = document.getElementById('e72');
     var val1 = document.getElementById('ev7');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb8.addEventListener('click', e => {
     var ed1 = document.getElementById('e81');
     var ed2 = document.getElementById('e82');
     var val1 = document.getElementById('ev8');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb9.addEventListener('click', e => {
     var ed1 = document.getElementById('e91');
     var ed2 = document.getElementById('e92');
     var val1 = document.getElementById('ev9');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
   eb10.addEventListener('click', e => {
     var ed1 = document.getElementById('e101');
     var ed2 = document.getElementById('e102');
     var val1 = document.getElementById('ev10');
     var edge1 = ed1.value;
     var edge2 = ed2.value;
     var value = Number(val1.value);
     graph.addEdge(edge1,edge2 , value);
     g.addEdge(edge1,edge2);
     console.log("graph added");
  });
    

   result.addEventListener('click', e =>{
       graph.dijkstra("A");
       var res = document.getElementById('ress');
       var resul = res.value;
       console.log(resul);
       path.innerHTML ="Dijstra Path to Destination  : "+resul;
       patho.innerHTML = graph.getDijkstraPath(resul);
   });

    resultoo.addEventListener('click', e =>{
       g.bfs("A");
       g.printGraph();
   });

 

