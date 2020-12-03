/*
pseudo-code:


Create two node types:
```
    artistNode
    groupNode
```

```
    artistNode size small, round picture as node
    groupNode size medium, round picture as node with rgraph around node
                                rgraph populated by artistNode edge adjacencies,
                                with graph percentage determined by
                                    (number of projects artist has worked on as
                                    a member of that group)
                                    divided by
                                    (number of projects group has worked on)
                                    normalized to 100%
    selectedNode size large, inherits properties of the selected artist/group node

    selectedNode on newly refreshed page directs to a semi-random node,
                                    as determined by a lottery in which nodes
                                    are given an entry for each token staked
                                    with that node.
```
fetch `artist#/group#` from graph database as `selectedNode`,
```
        Fetch all adjacencies of selectedNode within 5/6 degrees of separation.
        set each node's id to the id# of the respective artist/group
        set each node's name to the Name of the respective artist/group
        add adjacencies for each node's respective connections to other nodes
                            edge width 1 for artist adjacencies
                            edge width 3 for group adjacencies
        add photos for nodes within 2 degrees of separation, others are circles
        reduce size of nodes near edges of graph
```
fetch all relevant information for `selectedNode` and
            display in a separate information display container on the right


*/
