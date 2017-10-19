---
layout: page
title: "Q104052: FIX: FoxPro Sends Only Two Decimals to MS Graph"
permalink: /kb/104/Q104052/
---

## Q104052: FIX: FoxPro Sends Only Two Decimals to MS Graph

	Article: Q104052
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxPro for Windows will only send data with a precision of two decimal places to
	Microsoft Graph. In other words, numeric fields that contain more than two
	decimal places will be rounded to just two places. The settings for the SET
	DECIMALS TO and SET FIXED commands have no effect on this behavior.
	
	CAUSE
	=====
	
	This behavior is caused by a limitation in the way that the GraphWizard sends
	data to MS Graph.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro for
	Windows version 3.0b.
	
	MORE INFORMATION
	================
	
	The results of a query in the RQBE window can be sent to a graph by selecting
	Graph from the Output list box. The GraphWizard then takes over and provides
	direction on the creation of the graph/chart.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database that has one character field and two numeric fields.
	  The fields can have the default width of ten. However, make sure the numeric
	  fields have three decimal places.
	
	2. Add three records to the database. In the character field, enter the letters
	  A, B, and C. Enter any number for the numeric fields, as long as it has three
	  decimal places. (NOTE: The third decimal place should not be zero.)
	
	3. In the Command window, issue the following command:
	
	  USE <database>
	
	4. From the Run menu, choose New Query. In the Output list box, select Graph.
	
	5. Choose Do Query. The GraphWizard will take over and provide guidance on the
	  creation of the chart. For purposes of reproducing this problem, choose Next
	  three times. You should now be at the screen that says "Here's your graph!"
	
	6. Choose the Zoom button to open the graph in a window by itself. Double-click
	  the graph to start up MS Graph.
	
	  When MS Graph is open, there will be two windows. The graph will be in a
	  window in front and will say "FoxPro(####)-Chart" in the title bar. The
	  window in the background will contain the datasheet and will say
	  "FoxPro(####)-Datasheet" in the title bar.
	
	7. Activate the Datasheet window. Select (highlight) the cells that contain
	  numbers either by using the mouse or by using the arrow keys while holding
	  down the SHIFT key.
	
	8. From the Format menu, choose Number. In the Format box at the bottom of the
	  dialog box, type "0.000" (without the quotation marks). This is a custom
	  number format that will display three decimal places. Choose OK.
	
	The datasheet for the graph will now display the numbers with three decimal
	places. Note that the third decimal place is always zero. The numbers have been
	rounded. You can manually enter additional decimal places in Graph, but they
	will not automatically transfer over from FoxPro due to the limitation in the
	GraphWizard.
	
	REFERENCES
	==========
	
	Microsoft FoxPro for Windows "User's Guide," version 2.5, pages U13-17 through
	U13-21
	
	Microsoft Graph "User's Guide," pages 35 through 42
	
	Additional query words: VFoxWin FoxWin 2.50 popup Gengraph MSGraph 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.6a,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
