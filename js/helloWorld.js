function helloWorld(container) {
    if (!mxClient.isBrowserSupported()) {
        mxUtils.error('Browser Not suported... Get a new computer fast!', 200, false);
    } else {
        var graph = new mxGraph(container);

        new mxRubberband(graph);

        var parent = graph.getDefaultParent();

        graph.getModel().beginUpdate();
        try {
            var v1 = graph.insertVertex(parent, null, "Pierwszy vertex", 20, 20, 120, 50);
            var v2 = graph.insertVertex(parent, null, "Drugi vertex", 200, 150, 90, 75);
            var v3 = graph.insertVertex(parent, null, "Hello", 350, 130, 90, 50);
            var v4 = graph.insertVertex(parent, null, "World", 500, 25, 90, 100);
            var e1 = graph.insertEdge(parent, null, "jakis podpis", v1, v2);
            var e2 = graph.insertEdge(parent, null, "", v2, v3);
            var e3 = graph.insertEdge(parent, null, "", v4, v1);
        } finally {
            graph.getModel().endUpdate();
        }
    }
}