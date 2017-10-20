---
layout: page
title: "Q136902: HOWTO: Create a 3-D Surface Graph in Visual FoxPro"
permalink: /kb/136/Q136902/
---

## Q136902: HOWTO: Create a 3-D Surface Graph in Visual FoxPro

{% raw %}

	Article: Q136902
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 3-D Surface graph is not available as one of the graph types in the Graph
	Wizard. However, you can select the default graph from within the Graph Wizard,
	and then change the graph type to the 3-D Surface graph once in Microsoft Graph.
	Or you can use OLE automation. This article shows by example how to do it.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Issue the following commands in the Command Window:
	
	     OPEN DATA C:\Vfp\Samples\Data\Testdata.dbc
	     CREATE QUERY
	
	2. Select the Orders table.
	
	3. On the Query menu, click Query Destination, and select the Graph option.
	
	4. Using the right mouse button, click the Query Designer, and choose Run Query
	  to invoke the Graph Wizard.
	
	5. Drag two numeric fields to the Data Series list box and drag a character
	  field to the Axis position.
	
	6. Choose the default graph style, and click Finish.
	
	7. After the graph is created, double-click the graph to invoke Microsoft Graph.
	
	8. On the Format menu, click Chart Type, and select the 3-D Surface Graph.
	
	OLE Automation Technique
	------------------------
	
	To use the OLE Automation, issue the following commands in the Command window or
	a program file:
	
	     PUBLIC x
	     x=CREATEOBJECT('Form')
	     x.Show
	     x.AddObject('graph1','olecontrol','msgraph.chart')
	     * class excel.chart could also be used in the above command
	     x.graph1.type=14        && this is the 3-D Surface Graph
	     x.graph1.height=150
	     x.graph1.width=250
	     x.graph1.visible=.t.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
