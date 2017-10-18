---
layout: page
title: "Q249622: PRB: WhatsThisHelp Does Not Work on Objects in a Grid"
permalink: kb/249/Q249622/
---

## Q249622: PRB: WhatsThisHelp Does Not Work on Objects in a Grid

	Article: Q249622
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbDesigner kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeS
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use WhatsThisHelp to display the help for an object within a
	grid, the help topic for that object is not displayed. Instead, the help topic
	for the grid is displayed. If there is not a help topic assigned to the
	WhatsThisHelpID for the grid, one of these two messages may appear:
	
	  No help topic is associated with this item.
	
	or
	
	  Cannot find the requested help topic. This link may be incorrectly authored.
	  Use the search or the index to find the topic.
	
	RESOLUTION
	==========
	
	The following code displays the help topic for the text box control when one of
	the first three columns of the grid is clicked on using WhatsThisHelp. Otherwise
	it sets the WhatsThisHelpID to show the help for the grid. Add more CASE
	statements to continue showing help for the rest of the columns in the grid.
	
	       NODEFAULT
	       DO CASE
	          CASE MCOL(THISFORM.NAME,3) > 18 + THIS.LEFT AND ;
	                MCOL(THISFORM.NAME,3) <= 18 + THIS.LEFT +  ;
	                THIS.column1.WIDTH
	              nWhatsThisHelpID  = 1342177844 && help topic number of textbox.
	          CASE MCOL(THISFORM.NAME,3) > 18 +THIS.LEFT +THIS.column1.WIDTH ;
	                AND MCOL(THISFORM.NAME,3) <= 18 +THIS.LEFT + ;
	                THIS.column1.WIDTH + THIS.column2.WIDTH
	               nWhatsThisHelpID = 1342177844 
	          CASE MCOL(THISFORM.NAME,3) > 18 +THIS.LEFT +THIS.column1.WIDTH ;
	                + THIS.column2.WIDTH AND MCOL(THISFORM.NAME,3) <= 18 ;
	                + THIS.LEFT + THIS.column1.WIDTH + THIS.column2.WIDTH + ;
	                 THIS.column3.WIDTH
	               nWhatsThisHelpID = 1342177844  
	          OTHERWISE
	               nWhatsThisHelpID = 1342177839 && help topic number of grid.
	       ENDCASE
	       DODEFAULT(nWhatsThisHelpID)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form, add a table to the Data Environment, and click on the title of
	  the table and drag it to an area of the form to create a grid.
	
	2. Set the following properties of the form:
	  MaxButton = .F.
	  MinButton = .F.
	  WhatsThisButton = .T.
	  WhatsThisHelp = .T.
	
	3. Set the WhatsThisHelpID of the grid to the number 1342177839.
	
	4. Set the WhatsThisHelpID of the grid's first column's text box to 1342177844.
	
	5. Run the form and click on the WhatsThisHelp question mark in the upper right
	  corner of the form and then click on the text box in column one of the grid.
	  Notice that the Visual FoxPro help comes up showing the grid help topic.
	
	6. Close the form, modify it, and add the code in the Resolution section of this
	  article to the grid's ShowWhatsThis method.
	
	7. Run the form and click on the WhatsThishelp question mark and then click on
	  any one of the first three columns in the grid. Note that the text box help
	  appears. Clicking anywhere else on the grid brings up the help for the grid
	  control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbDesigner kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
