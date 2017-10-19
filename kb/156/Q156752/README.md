---
layout: page
title: "Q156752: PRB: Graph Wizard Graph Appears in Black And White"
permalink: /kb/156/Q156752/
---

## Q156752: PRB: Graph Wizard Graph Appears in Black And White

	Article: Q156752
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A graph created with the Graph Wizard may appear in black and white while the
	legend appears in color.
	
	CAUSE
	=====
	
	When a graph contains a large number of data points, the graph output will
	appear in black and white.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If a graph contains a very large number of data points, the Graph Wizard is
	unable to display the multitude of data items in color. The legend reflects the
	colors of the data series of the graph. Because there are fewer data series
	elements than individual data points, the legend appears in color.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Graph Wizard and choose the Orders table from the testdata database
	  located in the \Samples\Data folder.
	
	2. Select the following fields for the graph and choose Next:
	
	  Freight, Order_amt, Order_dsc, Order_net, and Emp_id.
	
	3. Place Emp_id in the Axis area and place Freight, Order_amt, Order_dsc, and
	  Order_net in the Data Series area. Choose Next.
	
	4. On the top row, select the bar graph second from the right. Choose Finish.
	
	5. Select the following options: "Add a legend to the graph," "Save graph to a
	  table," and "Show null values." Choose Finish, and give the table a name.
	
	6. Choose Yes when a warning message appears stating:
	
	  You have over 100 records to graph. The graph may be crowded and hard to read.
	  Do you want to prepare the graph anyway?
	
	7. Note that the graph appears in black and white while the legend has color.
	
	Additional query words: VFoxWin kbdsd
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
