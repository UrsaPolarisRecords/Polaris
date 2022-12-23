// include the Infovis Toolkit library
const infovis = require('path/to/infovis.js');

// create the data for the two visualizations
const artistsData = {
  id: 'artists',
  name: 'Artists',
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
  id: 'groups',
  name: 'Groups',
  adjacencies: [
    {
      nodeTo: 'group1',
      nodeFrom: 'group2',
      data: {
        weight: 3
      }
    },
    {
      nodeTo: 'group1',
      nodeFrom: 'group3',
      data: {
        weight: 2
      }
    },
    // ... more edges
  ]
};

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
ht1.connect(ht2, 'artist1', 'group1');
