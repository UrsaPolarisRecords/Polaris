// include the Infovis Toolkit library
const infovis = require('path/to/infovis.js');



var artistsData = [{  
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
    "adjacencies": []  
}, {  
    "id": "group1",  
    "name": "Pigface",  
    "data": {  
        "$dim": 20,  
//        "$type": "square",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group2",  
    "name": "Exotic Birds",  
    "data": {  
        "$dim": 20,  
//        "$type": "triangle",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group3",  
    "name": "A Perfect Circle",  
    "data": {  
        "$dim": 20,  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group4",  
    "name": "Puscifer",  
    "data": {  
        "$dim": 20,  
//        "$type":"triangle",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group5",  
    "name": "Jack Off Jill",  
    "data": {  
        "$dim": 20,  
//        "$type": "star",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group6",  
    "name": "Nirvana",  
    "data": {  
        "$dim": 20,  
//        "$type": "star",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}, {  
    "id": "group7",  
    "name": "Foo Fighters",  
    "data": {  
        "$dim": 20,  
//        "$type": "star",  
        "some other key": "some other value"  
    },  
    "adjacencies": []  
}];  
// create the data for the two visualizations
/* const artistsData = {
  id: 'artist0',
  name: 'Trent Reznor',
  adjacencies: [
    {
      nodeTo: 'artist1',
      nodeFrom: 'artist2',
      data: {
        weight: 3
      }
    },
    {
      nodeTo: 'artist1',
      nodeFrom: 'artist3',
      data: {
        weight: 2
      }
    },
    // ... more edges
  ]
};

const groupsData = {
  id: 'group1',
  name: 'NineInchNails',
  adjacencies: [
    {
      nodeTo: 'group2',
      nodeFrom: 'group1',
      data: {
        weight: 3
      }
    },
    {
      nodeTo: 'group3',
      nodeFrom: 'group1',
      data: {
        weight: 2
      }
    },
    // ... more edges
  ]
};

*/

// create two Hypertree.Plot instances
const ht1 = new infovis.Hypertree.Plot({
  injectInto: 'myHyperbolicTree1',
  adjMatrix: artistsData
});

const ht2 = new infovis.Hypertree.Plot({
  injectInto: 'myHyperbolicTree2',
  adjMatrix: groupsData
});

// create an edge between an artist and a group
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

/*
var ht = new $jit.Hypertree({  
  //id of the visualization container  
  injectInto: 'infovis',  
  //canvas width and height  
  width: w,  
  height: h,  
  //Change node and edge styles such as  
  //color, width and dimensions.  
  Node: {  
      dim: 9,  
      color: "#f00"  
  },  
  Edge: {  
      lineWidth: 2,  
      color: "#088"  
  },  
  onBeforeCompute: function(node){  
      Log.write("centering");  
  },  
  //Attach event handlers and add text to the  
  //labels. This method is only triggered on label  
  //creation  
  onCreateLabel: function(domElement, node){  
      domElement.innerHTML = node.name;  
      $jit.util.addEvent(domElement, 'click', function () {  
          ht.onClick(node.id, {  
              onComplete: function() {  
                  ht.controller.onComplete();  
              }  
          });  
      });  
  },  
  //Change node styles when labels are placed  
  //or moved.  
  onPlaceLabel: function(domElement, node){  
      var style = domElement.style;  
      style.display = '';  
      style.cursor = 'pointer';  
      if (node._depth <= 1) {  
          style.fontSize = "0.8em";  
          style.color = "#ddd";  
  
      } else if(node._depth == 2){  
          style.fontSize = "0.7em";  
          style.color = "#555";  
  
      } else {  
          style.display = 'none';  
      }  
  
      var left = parseInt(style.left);  
      var w = domElement.offsetWidth;  
      style.left = (left - w / 2) + 'px';  
  },  
    
  onComplete: function(){  
      Log.write("done");  
        
      //Build the right column relations list.  
      //This is done by collecting the information (stored in the data property)   
      //for all the nodes adjacent to the centered node.  
      var node = ht.graph.getClosestNodeToOrigin("current");  
      var html = "<h4>" + node.name + "</h4><b>Connections:</b>";  
      html += "<ul>";  
      node.eachAdjacency(function(adj){  
          var child = adj.nodeTo;  
          if (child.data) {  
              var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;  
              html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";  
          }  
      });  
      html += "</ul>";  
      $jit.id('inner-details').innerHTML = html;  
  }  
});  
//load JSON data.  
ht.loadJSON(json);  
//compute positions and plot.  
ht.refresh();  
*/
