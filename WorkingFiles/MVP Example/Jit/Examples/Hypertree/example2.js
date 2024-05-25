var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    //By defining properties with the dollar sign ($)
    //in nodes and edges we can override the global configuration
    //properties for nodes and edges.
    //In this case we use "$type" and "$dim" properties to override
    //the type of the node to be plotted and its dimension.
    var json = [{  
        "id": "artist0",  
        "name": "Trent Reznor",  
        "data": {  
            "$dim": 10,  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist1",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist2",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist3",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist4",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist5",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist1",  
        "name": "Richard Patrick",  
        "data": {  
            "$dim": 10,  
    //        "$type": "square",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist4",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist5",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist2",  
        "name": "Jeordie White",  
        "data": {  
            "$dim": 10,  
    //        "$type": "triangle",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist3",  
        "name": "Danny Lohner",  
        "data": {  
            "$dim": 10,  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist5",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist4",  
        "name": "Jeff Ward",  
        "data": {  
            "$dim": 10,  
    //        "$type":"triangle",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist1",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist5",  
        "name": "Chris Vrenna",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist1",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist3",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist6",  
        "name": "Dave Grohl",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist7",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist8",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist9",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist10",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist11",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist12",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist13",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist7",  
        "name": "Kurt Cobain",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist8",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist9",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist8",  
        "name": "Krist Novoselic",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist7",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist9",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist9",  
        "name": "Pat Smear",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist10",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist11",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist12",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist13",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist10",  
        "name": "Taylor Hawkins",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist11",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist12",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist13",  
            "data": {  
                "weight": 3  
            }  
        }, {  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist11",  
        "name": "Nate Mendel",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist12",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist13",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist12",  
        "name": "Chris Shiflett",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist13",  
            "data": {  
                "weight": 1  
            }  
        }, {  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 1  
            }  
        }]  
    }, {  
        "id": "artist13",  
        "name": "William Goldsmith",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist14",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "artist14",  
        "name": "Franz Stahl",  
        "data": {  
            "$dim": 10,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": []  
    }];  
    
    
    var groupsData = [{  
        "id": "group0",  
        "name": "Nine Inch Nails",  
        "data": {  
            "$dim": 20,  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist1",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist2",  
            "data": {  
                "weight": 3  
            }
        }, {  
            "nodeTo": "artist3",  
            "data": {  
                "weight": 3  
            }
        }, {  
            "nodeTo": "artist4",  
            "data": {  
                "weight": 3  
            }
        }, {  
            "nodeTo": "artist5",  
            "data": {  
                "weight": 3  
            }
        }, {  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 3  
            }    
        }]  
    }, {  
        "id": "group1",  
        "name": "Pigface",  
        "data": {  
            "$dim": 20,  
    //        "$type": "square",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist4",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist5",  
            "data": {  
                "weight": 3  
            }   
        }]  
    }, {  
        "id": "group2",  
        "name": "Exotic Birds",  
        "data": {  
            "$dim": 20,  
    //        "$type": "triangle",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist0",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist5",  
            "data": {  
                "weight": 3  
            }  
        }]  
    }, {  
        "id": "group3",  
        "name": "A Perfect Circle",  
        "data": {  
            "$dim": 20,  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist2",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist3",  
            "data": {  
                "weight": 3  
            }
        }]  
    }, {  
        "id": "group4",  
        "name": "Puscifer",  
        "data": {  
            "$dim": 20,  
    //        "$type":"triangle",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist3",  
            "data": {  
                "weight": 3  
            }
        }]  
    }, {  
        "id": "group5",  
        "name": "Jack Off Jill",  
        "data": {  
            "$dim": 20,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist5",  
            "data": {  
                "weight": 3  
            }
        }]  
    }, {  
        "id": "group6",  
        "name": "Nirvana",  
        "data": {  
            "$dim": 20,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist7",  
            "data": {  
                "weight": 3  
            }
        }, {    
            "nodeTo": "artist8",  
            "data": {  
                "weight": 3  
            }
        }, {  
            "nodeTo": "artist9",  
            "data": {  
                "weight": 3  
            }
        }]  
    }, {  
        "id": "group7",  
        "name": "Foo Fighters",  
        "data": {  
            "$dim": 20,  
    //        "$type": "star",  
            "some other key": "some other value"  
        },  
        "adjacencies": [{  
            "nodeTo": "artist6",  
            "data": {  
              //  "weight": 3  
            }
        }, {    
            "nodeTo": "artist9",  
            "data": {  
              //  "weight": 3  
            }
        }, {    
            "nodeTo": "artist10",  
            "data": {  
             //   "weight": 3  
            }
        }, {  
            "nodeTo": "artist11",  
            "data": {  
              //  "weight": 3  
            }
        }, {  
            "nodeTo": "artist12",  
            "data": {  
              //  "weight": 3  
            }
        }, {  
            "nodeTo": "artist13",  
            "data": {  
              //  "weight": 3  
            }
        }, {  
            "nodeTo": "artist14",  
            "data": {  
              //  "weight": 3  
            }    
        }]  
    }];
    //end
    //init Hypertree
   
    /* 
    const ht1 = new infovis.Hypertree.Plot({
        injectInto: 'myHyperbolicTree1',
        adjMatrix: artistsData
      });
      
      const ht2 = new infovis.Hypertree.Plot({
        injectInto: 'myHyperbolicTree2',
        adjMatrix: groupsData
      });
          
    
    */
    
    
    var ht1 = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#088"
        },
        //calculate nodes offset
        offset: 0.15,
        //Change the animation transition type
        transition: $jit.Trans.Back.easeOut,
        //animation duration (in milliseconds)
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
            if (!adj.data.$lineWidth) 
                adj.data.$lineWidth = Math.random() * 7 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht1.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                    ht1.controller.onComplete();
                    }
                });
                ht2.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                    ht2.controller.onComplete();
                    }
                });
            };
        },
        
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onComplete: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = ht1.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        }
    });

     
    
    var ht2 = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#088"
        },
        //calculate nodes offset
        offset: 0.15,
        //Change the animation transition type
        transition: $jit.Trans.Back.easeOut,
        //animation duration (in milliseconds)
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
           
            if (!adj.data.$lineWidth) 
                adj.data.$lineWidth = Math.random() * 7 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht2.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                    ht2.controller.onComplete();
                    }
                });
            };

        },
        
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onComplete: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = ht2.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        }});
    //load JSON graph.
    ht1.loadJSON(json, 2);
    ht2.loadJSON(groupsData);

   

    //compute positions and plot
    ht1.refresh();
    ht2.refresh();
    //end

    ht1.controller.onBeforeCompute(ht1.graph.getNode(ht1.root));
    ht2.controller.onBeforeCompute(ht2.graph.getNode(ht2.root));
    ht2.controller.onComplete();
    ht1.controller.onComplete();
}



/*
 ht1.connect(ht2, 'artist0', 'group0');
            ht1.connect(ht2, 'artist1', 'group0');
            ht1.connect(ht2, 'artist2', 'group0');
            ht1.connect(ht2, 'artist3', 'group0');
            ht1.connect(ht2, 'artist4', 'group0');
            ht1.connect(ht2, 'artist5', 'group0');
            ht1.connect(ht2, 'artist6', 'group0');
            ht1.connect(ht2, 'artist0', 'group1');
            ht1.connect(ht2, 'artist5', 'group1');
            ht1.connect(ht2, 'artist4', 'group1');
            ht1.connect(ht2, 'artist0', 'group2');
            ht1.connect(ht2, 'artist5', 'group2');
            ht1.connect(ht2, 'artist2', 'group3');
            ht1.connect(ht2, 'artist3', 'group3');
            ht1.connect(ht2, 'artist3', 'group4');
            ht1.connect(ht2, 'artist5', 'group5');
            ht1.connect(ht2, 'artist6', 'group6');
            ht1.connect(ht2, 'artist7', 'group6');
            ht1.connect(ht2, 'artist8', 'group6');
            ht1.connect(ht2, 'artist9', 'group6');
            ht1.connect(ht2, 'artist6', 'group7');
            ht1.connect(ht2, 'artist9', 'group7');
            ht1.connect(ht2, 'artist10', 'group7');
            ht1.connect(ht2, 'artist11', 'group7');
            ht1.connect(ht2, 'artist12', 'group7');
            ht1.connect(ht2, 'artist13', 'group7');
            ht1.connect(ht2, 'artist14', 'group7');

   
   */ 