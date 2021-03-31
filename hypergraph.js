




//The following is example code for reference, and represents usage of two Javascript Infovis Toolkit graph types, the Hypertree and RGraph, and the use of RGraphs as nodes.


//The First example is a Hypertree:
// https://philogb.github.io/jit/static/v20/Jit/Examples/Hypertree/example2.html
/*
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
        "id": "node0",
        "name": "node0 name",
        "data": {
            "$dim": 16.759175934208628,
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node1",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node2",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node3",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node4",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node5",
            "data": {
                "weight": 1
            }
        }]
    }, {
        "id": "node1",
        "name": "node1 name",
        "data": {
            "$dim": 13.077119090372014,
            "$type": "square",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node0",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node2",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node3",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node4",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node5",
            "data": {
                "weight": 1
            }
        }]
    }, {
        "id": "node2",
        "name": "node2 name",
        "data": {
            "$dim": 24.937383149648717,
            "$type": "triangle",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node0",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node1",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node3",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node4",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node5",
            "data": {
                "weight": 1
            }
        }]
    }, {
        "id": "node3",
        "name": "node3 name",
        "data": {
            "$dim": 10.53272740718869,
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node0",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node1",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node2",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node4",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node5",
            "data": {
                "weight": 3
            }
        }]
    }, {
        "id": "node4",
        "name": "node4 name",
        "data": {
            "$dim": 5.3754347037767345,
            "$type":"triangle",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node0",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node1",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node2",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node3",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node5",
            "data": {
                "weight": 3
            }
        }]
    }, {
        "id": "node5",
        "name": "node5 name",
        "data": {
            "$dim": 32.26403873194912,
            "$type": "star",
            "some other key": "some other value"
        },
        "adjacencies": [{
            "nodeTo": "node0",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node1",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node2",
            "data": {
                "weight": 1
            }
        }, {
            "nodeTo": "node3",
            "data": {
                "weight": 3
            }
        }, {
            "nodeTo": "node4",
            "data": {
                "weight": 3
            }
        }]
    }];
    //end
    //init Hypertree
    var ht = new $jit.Hypertree({
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
        offset: 0.2,
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
                ht.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                      ht.controller.onComplete();
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
            var node = ht.graph.getClosestNodeToOrigin("current");
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
    //load JSON graph.
    ht.loadJSON(json, 2);
    //compute positions and plot
    ht.refresh();
    //end
    ht.controller.onBeforeCompute(ht.graph.getNode(ht.root));
    ht.controller.onComplete();
}

*/

//The second example is integrating graphs as nodes in another graph:
// https://philogb.github.io/jit/static/v20/Jit/Examples/Other/example1.html


/*
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


function init() {
    //init data
    var jsonpie = {
      'id': 'root',
      'name': 'RGraph based Pie Chart',
      'data': {
          '$type': 'none'
      },
      'children':[
        {
            'id':'pie1',
            'name': 'pie1',
            'data': {
                '$angularWidth': 20,
                '$color': '#f55'
            },
            'children': []
        },
        {
            'id':'pie2',
            'name': 'pie2',
            'data': {
                '$angularWidth': 40,
                '$color': '#f77'
            },
            'children': []
        },
        {
            'id':'pie3',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#f99'
            },
            'children': []
        },
        {
            'id':'pie4',
            'name': 'pie4',
            'data': {
                '$angularWidth': 30,
                '$color': '#fbb'
            },
            'children': []
        }
      ]
    };

    var jsonpie2 = {
      'id': 'root',
      'name': 'Making an Extended Pie Chart',
      'data': {
          '$type': 'none'
      },
      'children':[
        {
            'id':'pie10',
            'name': 'pie1',
            'data': {
                '$angularWidth': 20,
                '$color': '#f55'
            },
            'children': [
                {
                    'id':'pie100',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie101',
                    'name': 'pc2',
                    'data': {
                        '$angularWidth': 70,
                        '$color': '#66f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie102',
                    'name': 'pc3',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }
            ]
        },
        {
            'id':'pie20',
            'name': 'pie2',
            'data': {
                '$angularWidth': 40,
                '$color': '#f77'
            },
            'children': [
                {
                    'id':'pie200',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie201',
                    'name': 'pc2',
                    'data': {
                        '$angularWidth': 60,
                        '$color': '#99f'
                    },
                    'children': []
                    
                }
            ]
        },
        {
            'id':'pie30',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#f99'
            },
            'children': [
                {
                    'id':'pie300',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 100,
                        '$color': '#aaf'
                    },
                    'children': []
                    
                }
            ]
        }
      ]
    };

    var jsonpie3 = {
      'id': 'root1',
      'name': 'ST Bar Chart',
      'data': {
          '$type': 'none',
          '$width': 80,
          '$height':20
      },
      'children':[
        {
            'id':'h1',
            'name': 'h1',
            'data': {
                '$color': '#55f',
                '$height':30
            },
            'children': []
        },
        {
            'id':'h2',
            'name': 'h2',
            'data': {
                '$color': '#66f',
                '$height':50
            },
            'children': []
        },
        {
            'id':'h3',
            'name': 'h3',
            'data': {
                '$color': '#77f',
                '$height':70
            },
            'children': []
        },
        {
            'id':'h4',
            'name': 'h4',
            'data': {
                '$height':90,
                '$color': '#88f'
            },
            'children': []
        },
        {
            'id':'h5',
            'name': 'h5',
            'data': {
                '$height':100,
                '$color': '#99f'
            },
            'children': []
        },
        {
            'id':'h6',
            'name': 'h6',
            'data': {
                '$height':110,
                '$color': '#aaf'
            },
            'children': []
        },
        {
            'id':'h7',
            'name': 'h7',
            'data': {
                '$height':150,
                '$color': '#bbf'
            },
            'children': []
        },
        {
            'id':'h8',
            'name': 'h8',
            'data': {
                '$height':110,
                '$color': '#aaf'
            },
            'children': []
        },
        {
            'id':'h9',
            'name': 'h9',
            'data': {
                '$height':100,
                '$color': '#99f'
            },
            'children': []
        },
        {
            'id':'h10',
            'name': 'h10',
            'data': {
                '$height':90,
                '$color': '#88f'
            },
            'children': []
        },
        {
            'id':'h11',
            'name': 'h11',
            'data': {
                '$height':110,
                '$color': '#aaf'
            },
            'children': []
        },
        {
            'id':'h12',
            'name': 'h12',
            'data': {
                '$height':150,
                '$color': '#bbf'
            },
            'children': []
        },
        {
            'id':'h13',
            'name': 'h13',
            'data': {
                '$height':110,
                '$color': '#aaf'
            },
            'children': []
        },
        {
            'id':'h14',
            'name': 'h14',
            'data': {
                '$height':100,
                '$color': '#99f'
            },
            'children': []
        },
        {
            'id':'h15',
            'name': 'h15',
            'data': {
                '$height':90,
                '$color': '#88f'
            },
            'children': []
        }
      ]
    };
    //end
    
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth, h = infovis.offsetHeight;
    
    //create some containers for the visualizations
    var container = document.createElement('div');
    container.id = "infovis1";
    var style = container.style;
    style.left = "0px";
    style.top = "0px";
    style.width = Math.floor(w / 2) + "px";
    style.height = Math.floor(h / 2) + "px";
    style.position = 'absolute';
    infovis.appendChild(container);
    
    container = document.createElement('div');
    container.id = "infovis2";
    var style = container.style;
    style.left = Math.floor(w / 2) + "px";
    style.top = "0px";
    style.width = style.left;
    style.height = Math.floor(h / 2) + "px";
    style.position = 'absolute';
    infovis.appendChild(container);

    container = document.createElement('div');
    container.id = "infovis3";
    var style = container.style;
    style.left = "0px";
    style.top = Math.floor(h / 2) + "px";
    style.width = w + "px";
    style.height = Math.floor(h / 2) + "px";
    style.position = 'absolute';
    infovis.appendChild(container);
    
    //init nodetypes
    //Here we implement custom node rendering types for the RGraph
    //Using this feature requires some javascript and canvas experience.
    $jit.RGraph.Plot.NodeTypes.implement({
        //This node type is used for plotting the upper-left pie chart
        'nodepie': {
          'render': function(node, canvas) {
            var span = node.angleSpan, begin = span.begin, end = span.end;
            var polarNode = node.pos.getp(true);
            var polar = new $jit.Polar(polarNode.rho, begin);
            var p1coord = polar.getc(true);
            polar.theta = end;
            var p2coord = polar.getc(true);

            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(p1coord.x, p1coord.y);
            ctx.moveTo(0, 0);
            ctx.lineTo(p2coord.x, p2coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho, begin, end, false);
            ctx.fill();
          }
        },
        //This node type is used for plotting the upper-right pie chart
        'shortnodepie': {
          'render': function(node, canvas) {
            var ldist = this.config.levelDistance;
            var span = node.angleSpan, begin = span.begin, end = span.end;
            var polarNode = node.pos.getp(true);
            
            var polar = new $jit.Polar(polarNode.rho, begin);
            var p1coord = polar.getc(true);
            
            polar.theta = end;
            var p2coord = polar.getc(true);
            
            polar.rho += ldist;
            var p3coord = polar.getc(true);
            
            polar.theta = begin;
            var p4coord = polar.getc(true);
            
            
            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.moveTo(p1coord.x, p1coord.y);
            ctx.lineTo(p4coord.x, p4coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho, begin, end, false);

            ctx.moveTo(p2coord.x, p2coord.y);
            ctx.lineTo(p3coord.x, p3coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho + ldist, end, begin, true);
            
            ctx.fill();
          }
        }
    });
    //end
    
    //init rgraph
    //This RGraph is used to plot the upper-left pie chart.
    //It has custom *pie-chart-nodes*.
    var rgraph = new $jit.RGraph({
        injectInto: 'infovis1',
        width: w/2,
        height: h/2,
        //Add node/edge styles and set
        //overridable=true if you want your
        //styles to be individually overriden
        Node: {
            'overridable': true,
             'type': 'nodepie'
        },
        Edge: {
            'overridable': true
        },
        //Parent-children distance
        levelDistance: 135,
        
        //Add styles to node labels on label creation
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            if(node.data.$angularWidth) 
                domElement.innerHTML += " " + node.data.$angularWidth + "%";
            var style = domElement.style;
            style.fontSize = "0.8em";
            style.color = "#fff";
        },
        //Add some offset to the labels when placed.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load graph.
    rgraph.loadJSON(jsonpie);
    rgraph.refresh();
    //end
    //init rgraph2
    //This RGraph instance is used for plotting the upper-right
    //pie chart.
    var rgraph2 = new $jit.RGraph({
        'injectInto': 'infovis2',
        'width': w/2,
        'height': h/2,
        //Add node/edge styles and set
        //overridable=true if you want your
        //styles to be individually overriden
        Node: {
            'overridable': true,
             'type':'shortnodepie'
        },
        Edge: {
            'overridable': true
        },
        //Parent-children distance
        levelDistance: 45,
        
        //Add styles to node labels on label creation
        onCreateLabel: function(domElement, node){
            if(node.id == rgraph2.root) return;
            domElement.innerHTML = node.name;
            if(node.data.$angularWidth) {
                domElement.innerHTML += " " + node.data.$angularWidth + "%";
            }
            var style = domElement.style;
            style.fontSize = "0.8em";
            style.color = "#fff";
        },
        
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load graph.
    rgraph2.loadJSON(jsonpie2);
    rgraph2.refresh();
    //end
    //init st
    //This Spacetree nodes' heights are overriden individually
    //so that it serves as a bar chart.
    var st = new $jit.ST({
        'injectInto': 'infovis3',
        'width': w,
        'height': h/2,
        //set orientarion
        orientation:'bottom',
        //set duration for the animation
        duration: 800,
        //set parent-children distance
        levelDistance: 30,
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            overridable: true,
            width: 30,
            type: 'rectangle',
            color: '#aaa',
            align: 'right'
        },
        
        Edge: {
            type: 'bezier',
            color: '#444'
        },
        
        //This method is called on DOM label creation.
        //Use this method to add styles to
        //your node label.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name;
            //set label styles
            var style = label.style;
            style.fontSize = '0.7em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
            style.height = node.data.$height + 'px';            

            if(node.id == st.root) {
                style.color = '#eee';
                style.width = node.data.$width + 'px';
            } else {
                style.color = '#fff';
                style.width = 30 + 'px';
            }
        }
    });
    //load json data
    st.loadJSON(jsonpie3);
    //compute node positions and layout
    st.compute();
    //emulate a click on the root node and
    //add an offset position to the tree
    st.onClick(st.root, {
        Move: {
            offsetY: -110
        }
    });
    //end
}
*/

//the next example is of a similar implemenatation:

//https://philogb.github.io/jit/static/v20/Jit/Examples/Other/example3.html


/*
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


function init() {
    //init data
    var json = {
      'id': 'root',
      'name': 'root',
      'data': {
          //'$type': 'none'
      },
      'children':[
        {
            'id':'pie10',
            'name': 'pie1',
            'data': {
                '$angularWidth': 20,
                '$color': '#f55'
            },
            'children': [
                {
                    'id':'pie100',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie101',
                    'name': 'pc2',
                    'data': {
                        '$angularWidth': 70,
                        '$color': '#66f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie102',
                    'name': 'pc3',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }
            ]
        },
        {
            'id':'pie20',
            'name': 'pie2',
            'data': {
                '$angularWidth': 40,
                '$color': '#f77'
            },
            'children': [
                {
                    'id':'pie200',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
                    'children': []
                    
                },
                {
                    'id':'pie201',
                    'name': 'pc2',
                    'data': {
                        '$angularWidth': 60,
                        '$color': '#99f'
                    },
                    'children': []
                    
                }
            ]
        },
        {
            'id':'pie30',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#f99'
            },
            'children': [
                {
                    'id':'pie300',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 100,
                        '$color': '#aaf'
                    },
                    'children': []
                    
                }
            ]
        }
      ]
    };
    var jsonpie = {
      'id': 'root',
      'name': 'RGraph based Pie Chart',
      'data': {
          '$type': 'none'
      },
      'children':[
        {
            'id':'pie1',
            'name': 'pie1',
            'data': {
                '$angularWidth': 20,
                '$color': '#55f'
            },
            'children': []
        },
        {
            'id':'pie2',
            'name': 'pie2',
            'data': {
                '$angularWidth': 40,
                '$color': '#77f'
            },
            'children': []
        },
        {
            'id':'pie3',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#99f'
            },
            'children': []
        },
        {
            'id':'pie4',
            'name': 'pie4',
            'data': {
                '$angularWidth': 30,
                '$color': '#bbf'
            },
            'children': []
        }
      ]
    };
    //end
    
    //init nodetypes
    //Here we implement custom node rendering types for the RGraph
    //Using this feature requires some javascript and canvas experience.
    $jit.RGraph.Plot.NodeTypes.implement({
        //This node type is used for plotting pie-chart slices as nodes
        'shortnodepie': {
          'render': function(node, canvas) {
            var ldist = this.config.levelDistance;
            var span = node.angleSpan, begin = span.begin, end = span.end;
            var polarNode = node.pos.getp(true);
            
            var polar = new $jit.Polar(polarNode.rho, begin);
            var p1coord = polar.getc(true);
            
            polar.theta = end;
            var p2coord = polar.getc(true);
            
            polar.rho += ldist;
            var p3coord = polar.getc(true);
            
            polar.theta = begin;
            var p4coord = polar.getc(true);
            
            
            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.moveTo(p1coord.x, p1coord.y);
            ctx.lineTo(p4coord.x, p4coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho, begin, end, false);

            ctx.moveTo(p2coord.x, p2coord.y);
            ctx.lineTo(p3coord.x, p3coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho + ldist, end, begin, true);
            
            ctx.fill();
          }
        }
    });
    
    $jit.ST.Plot.NodeTypes.implement({
        //Create a new node type that renders an entire RGraph visualization
        'piechart': {
          'render': function(node, canvas, animating) {
            var ctx = canvas.getCtx(), pos = node.pos.getc(true);
            ctx.save();
            ctx.translate(pos.x, pos.y);
            pie.plot();
            ctx.restore();
          }
        }
    });
    //end
    
    //init pie
    var pie = new $jit.RGraph({
        'injectInto': 'infovis',
        //Add node/edge styles and set
        //overridable=true if you want your
        //styles to be individually overriden
        Node: {
            'overridable': true,
             'type':'shortnodepie'
        },
        Edge: {
            'type':'none'
        },
        //Parent-children distance
        levelDistance: 15,
        //Don't create labels for this visualization
        withLabels: false,
        //Don't clear the canvas when plotting
        clearCanvas: false
    });
    //load graph.
    pie.loadJSON(jsonpie);
    pie.compute();
    //end

    //init st
    var st = new $jit.ST({
        useCanvas: pie.canvas,
        orientation: 'bottom',
        //Add node/edge styles
        Node: {
           type: 'piechart',
           width: 60,
           height: 60
        },
        Edge: {
            color: '#999',
            type: 'quadratic:begin'
        },
        //Parent-children distance
        levelDistance: 60,

        //Add styles to node labels on label creation
        onCreateLabel: function(domElement, node){
            //add some styles to the node label
            var style = domElement.style;
            domElement.id = node.id;
            style.color = '#fff';
            style.fontSize = '0.8em';
            style.textAlign = 'center';
            style.width = "60px";
            style.height = "24px";
            style.paddingTop = "22px";
            style.cursor = 'pointer';
            domElement.innerHTML = node.name;
            domElement.onclick = function() {
              st.onClick(node.id, {
                    Move: {
                        offsetY: -90
                    }
                });  
            };
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(0, 200), "start");
    //Emulate a click on the root node.
    st.onClick(st.root, {
        Move: {
            offsetY: -90
        }
    });
    //end
}
*/

//This final example is of the sunburst graph that surrounds the Group nodes and reflects the contribution quantity of each artist node
//The first layer of the sunburst could represent group member contribution, then when clicked, the second sunburst layer could be revealed,
//which represents the quantitiy of contributions of different guests and engineers, etc.

//https://philogb.github.io/jit/static/v20/Jit/Examples/Sunburst/example2.html

/*
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
  var json = {
    "children": [
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 7490, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 7490
             }, 
             "id": "Source/Coordinates/Complex.js", 
             "name": "Complex.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Fixed polar interpolation problem when theta = pi", 
               "$angularWidth": 6390, 
               "days": 2, 
               "$color": "#B0AAF6", 
               "size": 6390
             }, 
             "id": "Source/Coordinates/Polar.js", 
             "name": "Polar.js"
           }
         ], 
         "data": {
           "description": "Fixed polar interpolation problem when theta = pi", 
           "$color": "#B0AAF6", 
           "days": 2, 
           "$angularWidth": 1000, 
           "size": 13880
         }, 
         "id": "Source/Coordinates", 
         "name": "Coordinates"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Scaling done right :)", 
               "$angularWidth": 14952, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 14952
             }, 
             "id": "Source/Core/Canvas.js", 
             "name": "Canvas.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 14759, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 14759
             }, 
             "id": "Source/Core/Core.js", 
             "name": "Core.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 5838, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 5838
             }, 
             "id": "Source/Core/Fx.js", 
             "name": "Fx.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 35549
         }, 
         "id": "Source/Core", 
         "name": "Core"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
               "$angularWidth": 18672, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 18672
             }, 
             "id": "Source/Extras/Extras.js", 
             "name": "Extras.js"
           }
         ], 
         "data": {
           "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 18672
         }, 
         "id": "Source/Extras", 
         "name": "Extras"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 1652, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 1652
             }, 
             "id": "Source/Graph/Graph.Geom.js", 
             "name": "Graph.Geom.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 27921, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 27921
             }, 
             "id": "Source/Graph/Graph.js", 
             "name": "Graph.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 9512, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 9512
             }, 
             "id": "Source/Graph/Graph.Label.js", 
             "name": "Graph.Label.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Change the way edges where stored and used in Graph.js. This is how Graph.js internally handles nodes. The user API should remain the same.", 
               "$angularWidth": 22838, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 22838
             }, 
             "id": "Source/Graph/Graph.Op.js", 
             "name": "Graph.Op.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Bug Fix Extras + Tweaking examples", 
               "$angularWidth": 18950, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 18950
             }, 
             "id": "Source/Graph/Graph.Plot.js", 
             "name": "Graph.Plot.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "(Re)-Implemented nodeTypes using node/edgeHelpers\n    \n    Code is cleaner and NodeTypes are now easier to implement.", 
               "$angularWidth": 6947, 
               "days": 32, 
               "$color": "#ECCFB3", 
               "size": 6947
             }, 
             "id": "Source/Graph/Helpers.js", 
             "name": "Helpers.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 87820
         }, 
         "id": "Source/Graph", 
         "name": "Graph"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 4064, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 4064
             }, 
             "id": "Source/Layouts/Layouts.ForceDirected.js", 
             "name": "Layouts.ForceDirected.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 2198, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 2198
             }, 
             "id": "Source/Layouts/Layouts.js", 
             "name": "Layouts.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 4372, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 4372
             }, 
             "id": "Source/Layouts/Layouts.Radial.js", 
             "name": "Layouts.Radial.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 15570, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 15570
             }, 
             "id": "Source/Layouts/Layouts.TM.js", 
             "name": "Layouts.TM.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 6696, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 6696
             }, 
             "id": "Source/Layouts/Layouts.Tree.js", 
             "name": "Layouts.Tree.js"
           }
         ], 
         "data": {
           "description": "Animated TreeMaps", 
           "$color": "#B2ABF4", 
           "days": 3, 
           "$angularWidth": 1000, 
           "size": 32900
         }, 
         "id": "Source/Layouts", 
         "name": "Layouts"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Fixed passing of general Label object", 
               "$angularWidth": 8079, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 8079
             }, 
             "id": "Source/Loader/Loader.js", 
             "name": "Loader.js"
           }
         ], 
         "data": {
           "description": "Fixed passing of general Label object", 
           "$color": "#E0C7C0", 
           "days": 26, 
           "$angularWidth": 1000, 
           "size": 8079
         }, 
         "id": "Source/Loader", 
         "name": "Loader"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Small tweaks on Tips and Selected nodes in Charts", 
               "$angularWidth": 348, 
               "days": 33, 
               "$color": "#EED0B0", 
               "size": 348
             }, 
             "id": "Source/Options/Options.AreaChart.js", 
             "name": "Options.AreaChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added gradients to AreaChart", 
               "$angularWidth": 386, 
               "days": 37, 
               "$color": "#F6D5A7", 
               "size": 386
             }, 
             "id": "Source/Options/Options.BarChart.js", 
             "name": "Options.BarChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
               "$angularWidth": 392, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 392
             }, 
             "id": "Source/Options/Options.Canvas.js", 
             "name": "Options.Canvas.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Organizing sources and build", 
               "$angularWidth": 3856, 
               "days": 112, 
               "$color": "#FCD9A1", 
               "size": 3856
             }, 
             "id": "Source/Options/Options.Controller.js", 
             "name": "Options.Controller.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added raw Canvas options + and animations\n    \n    Added the CanvasStyles object in Node/Edge properties to define raw\n    canvas properties before plotting a node or edge. For example\n    \n          Node: {\n            overridable: true,\n            dim: 4,\n            color: \"#fff\",\n            CanvasStyles: {\n              shadowBlur: 10,\n              shadowColor: '#ccc',\n              shadowOffsetY: 5,\n              shadowOffsetX: 5\n            }\n          }\n    \n    These properties can also be animated and accessed just like dataset\n    properties.\n    \n    Also there are new APIs for setting multiple properties at the same\n    time. setDataset and setCanvasStyles have been added and can be used\n    like this:\n    \n         node.setCanvasStyle('shadowBlur', 100, 'end');\n    \n         //will perform various node.setCanvasStyle\n         node.setCanvasStyles(['current', 'end'], {\n           'shadowBlur': [100, 5],\n           'shadowOffsetX': [200, 3]\n         });\n    \n         node.setData('width', 100, 'end');\n    \n         //will perform various node.setData\n         node.setDataset('end', {\n           'width': 100,\n           'color: '#ccc'\n         });\n    \n    For more information take a look at test1.js for the ForceDirected\n    visualization.", 
               "$angularWidth": 1475, 
               "days": 31, 
               "$color": "#EACDB5", 
               "size": 1475
             }, 
             "id": "Source/Options/Options.Edge.js", 
             "name": "Options.Edge.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Extras.Events bug fixes", 
               "$angularWidth": 312, 
               "days": 20, 
               "$color": "#D4C0CE", 
               "size": 312
             }, 
             "id": "Source/Options/Options.Events.js", 
             "name": "Options.Events.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "$jit namespace and $jit() for append vis to Global\n    \n    Example:\n    \n    new $jit.Hypertree({\n      'injectInto': 'myvisContainer'\n    });", 
               "$angularWidth": 749, 
               "days": 111, 
               "$color": "#FCD9A1", 
               "size": 749
             }, 
             "id": "Source/Options/Options.Fx.js", 
             "name": "Options.Fx.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Revisiting Extras.js Redesigning MouseEventManager and registered\n    classes to automatically use DOM elements via event delegation or canvas\n    based events.", 
               "$angularWidth": 530, 
               "days": 25, 
               "$color": "#DEC6C2", 
               "size": 530
             }, 
             "id": "Source/Options/Options.js", 
             "name": "Options.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add label types in Label configuration object.\n    \n    Add calls to getLabelData in plotLabel.", 
               "$angularWidth": 203, 
               "days": 26, 
               "$color": "#E0C7C0", 
               "size": 203
             }, 
             "id": "Source/Options/Options.Label.js", 
             "name": "Options.Label.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "* Ignore panning if Options.Navigation.panning = false\n     * Add 'avoid nodes' panning option for panning only when the cursor does not match a nodes position", 
               "$angularWidth": 137, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 137
             }, 
             "id": "Source/Options/Options.Navigation.js", 
             "name": "Options.Navigation.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added raw Canvas options + and animations\n    \n    Added the CanvasStyles object in Node/Edge properties to define raw\n    canvas properties before plotting a node or edge. For example\n    \n          Node: {\n            overridable: true,\n            dim: 4,\n            color: \"#fff\",\n            CanvasStyles: {\n              shadowBlur: 10,\n              shadowColor: '#ccc',\n              shadowOffsetY: 5,\n              shadowOffsetX: 5\n            }\n          }\n    \n    These properties can also be animated and accessed just like dataset\n    properties.\n    \n    Also there are new APIs for setting multiple properties at the same\n    time. setDataset and setCanvasStyles have been added and can be used\n    like this:\n    \n         node.setCanvasStyle('shadowBlur', 100, 'end');\n    \n         //will perform various node.setCanvasStyle\n         node.setCanvasStyles(['current', 'end'], {\n           'shadowBlur': [100, 5],\n           'shadowOffsetX': [200, 3]\n         });\n    \n         node.setData('width', 100, 'end');\n    \n         //will perform various node.setData\n         node.setDataset('end', {\n           'width': 100,\n           'color: '#ccc'\n         });\n    \n    For more information take a look at test1.js for the ForceDirected\n    visualization.", 
               "$angularWidth": 2083, 
               "days": 31, 
               "$color": "#EACDB5", 
               "size": 2083
             }, 
             "id": "Source/Options/Options.Node.js", 
             "name": "Options.Node.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Bug Fix Extras + Tweaking examples", 
               "$angularWidth": 583, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 583
             }, 
             "id": "Source/Options/Options.NodeStyles.js", 
             "name": "Options.NodeStyles.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add an option to resize labels according to its pie slice", 
               "$angularWidth": 380, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 380
             }, 
             "id": "Source/Options/Options.PieChart.js", 
             "name": "Options.PieChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Revisiting Extras.js Redesigning MouseEventManager and registered\n    classes to automatically use DOM elements via event delegation or canvas\n    based events.", 
               "$angularWidth": 1120, 
               "days": 25, 
               "$color": "#DEC6C2", 
               "size": 1120
             }, 
             "id": "Source/Options/Options.Tips.js", 
             "name": "Options.Tips.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Organizing sources and build", 
               "$angularWidth": 1021, 
               "days": 112, 
               "$color": "#FCD9A1", 
               "size": 1021
             }, 
             "id": "Source/Options/Options.Tree.js", 
             "name": "Options.Tree.js"
           }
         ], 
         "data": {
           "description": "Add an option to resize labels according to its pie slice", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 13575
         }, 
         "id": "Source/Options", 
         "name": "Options"
       }, 
       {
         "children": [
           {
             "children": [], 
             "data": {
               "description": "Fixing AreaCharts for IE", 
               "$angularWidth": 13636, 
               "days": 19, 
               "$color": "#D2BFD0", 
               "size": 13636
             }, 
             "id": "Source/Visualizations/AreaChart.js", 
             "name": "AreaChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Append utils, id and Class objects to $jit. Add legends to Bar/Pie/AreaChart examples.", 
               "$angularWidth": 12608, 
               "days": 15, 
               "$color": "#CABAD9", 
               "size": 12608
             }, 
             "id": "Source/Visualizations/BarChart.js", 
             "name": "BarChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 16954, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 16954
             }, 
             "id": "Source/Visualizations/ForceDirected.js", 
             "name": "ForceDirected.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 23448, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 23448
             }, 
             "id": "Source/Visualizations/Hypertree.js", 
             "name": "Hypertree.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Adding $jit as Namespace + Build Refactor + Config (part I)", 
               "$angularWidth": 0, 
               "days": 112, 
               "$color": "#FCD9A1", 
               "size": 0
             }, 
             "id": "Source/Visualizations/Icicle.js", 
             "name": "Icicle.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Add an option to resize labels according to its pie slice", 
               "$angularWidth": 10762, 
               "days": 1, 
               "$color": "#AEA9F8", 
               "size": 10762
             }, 
             "id": "Source/Visualizations/PieChart.js", 
             "name": "PieChart.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Added new Canvas class with zoom/pan options", 
               "$angularWidth": 18010, 
               "days": 5, 
               "$color": "#B6AEEF", 
               "size": 18010
             }, 
             "id": "Source/Visualizations/RGraph.js", 
             "name": "RGraph.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 52895, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 52895
             }, 
             "id": "Source/Visualizations/Spacetree.js", 
             "name": "Spacetree.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Adding new JSON data to the Sunburst and already finding some bugs :S", 
               "$angularWidth": 21436, 
               "days": 2, 
               "$color": "#B0AAF6", 
               "size": 21436
             }, 
             "id": "Source/Visualizations/Sunburst.js", 
             "name": "Sunburst.js"
           }, 
           {
             "children": [], 
             "data": {
               "description": "Animated TreeMaps", 
               "$angularWidth": 16472, 
               "days": 3, 
               "$color": "#B2ABF4", 
               "size": 16472
             }, 
             "id": "Source/Visualizations/Treemap.js", 
             "name": "Treemap.js"
           }
         ], 
         "data": {
           "description": "Merge remote branch 'woot/bugfixes_docnet' into sunburst_fixes", 
           "$color": "#AEA9F8", 
           "days": 1, 
           "$angularWidth": 1000, 
           "size": 186221
         }, 
         "id": "Source/Visualizations", 
         "name": "Visualizations"
       }
     ], 
     "data": {
       "$type": "none"
     }, 
     "id": "Source", 
     "name": "Source"
   };
    //end
    //init Sunburst
    var sb = new $jit.Sunburst({
        //id container for the visualization
        injectInto: 'infovis',
        //Distance between levels
        levelDistance: 90,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
          overridable: true,
          type: useGradients? 'gradient-multipie' : 'multipie'
        },
        //Select canvas labels
        //'HTML', 'SVG' and 'Native' are possible options
        Label: {
          type: labelType
        },
        //Change styles when hovering and clicking nodes
        NodeStyles: {
          enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#33dddd'
          },
          stylesHover: {
            'color': '#dd3333'
          }
        },
        //Add tooltips
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            var data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            tip.innerHTML = html;
          }
        },
        //implement event handlers
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            //Build detailed information about the file/folder
            //and place it in the right column.
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            if("days" in data) {
              html += "<b>Last modified:</b> " + data.days + " days ago";
            }
            if("size" in data) {
              html += "<br /><br /><b>File size:</b> " + Math.round(data.size / 1024) + "KB";
            }
            if("description" in data) {
              html += "<br /><br /><b>Last commit was:</b><br /><pre>" + data.description + "</pre>";
            }
            $jit.id('inner-details').innerHTML = html;
            //hide tip
            sb.tips.hide();
            //rotate
            sb.rotate(node, animate? 'animate' : 'replot', {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
            });
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Add text to the labels. 
        // This method is only triggered on label creation
        onCreateLabel: function(domElement, node){
          var labels = sb.config.Label.type,
              aw = node.getData('angularWidth');
          if (labels === 'HTML' && (node._depth < 2 || aw > 2000)) {
            domElement.innerHTML = node.name;
          } else if (labels === 'SVG' && (node._depth < 2 || aw > 2000)) {
            domElement.firstChild.appendChild(document.createTextNode(node.name));
          }
        },
        // Only used when Label type is 'HTML' or 'SVG'
        // Change node styles when labels are placed
        // or moved.
        onPlaceLabel: function(domElement, node){
          var labels = sb.config.Label.type;
          if (labels === 'SVG') {
            var fch = domElement.firstChild;
            var style = fch.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            fch.setAttribute('fill', "#fff");
          } else if (labels === 'HTML') {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            style.fontSize = "0.8em";
            style.color = "#ddd";
            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
          }
        }
   });
    //load JSON data.
    sb.loadJSON(json);
    //compute positions and plot.
    sb.refresh();
    //end
}

*/
