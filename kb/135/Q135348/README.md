---
layout: page
title: "Q135348: HOWTO: Update a Graph in a Form"
permalink: kb/135/Q135348/
---

## Q135348: HOWTO: Update a Graph in a Form

	Article: Q135348
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to update a graph on a form in Microsoft
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	To update a graph in previous versions of FoxPro, you may have used the DO
	UPDATEGRPH IN GENGRAPH.APP WITH command. Microsoft Visual FoxPro does not
	include Gengraph.app, so a new approach must be taken.
	
	Step-by-Step Example
	--------------------
	
	1. Open or switch to Microsoft Visual FoxPro, and create a new table called
	  Mydata.dbf that contains a character field called Myseries and three numeric
	  fields called Mydata1, Mydata2 and Mydata3.
	
	2. Add five records to the table that contain random numbers between 1 and 20 in
	  the three numeric fields and 'Series 1', 'Series 2', 'Series 3', and so on in
	  the character field.
	
	3. Create a new form called Myform, and add the table Mydata to the data
	  environment of the form.
	
	4. Add a grid to the form. Use the Property window to set the RecordSource
	  property of the grid to Mydata. Leave the RecordSourceType set to Alias.
	
	5. With the Mydata table open in the active work area, type the following
	  command in the Command window:
	
	     DO (_GENGRAPH) WITH "MYDATA"
	
	  This will start the Graph Wizard, so you can create the initial graph for the
	  form. Add the three numeric fields to the Data Series list box and the
	  character field to the Axis field of the wizard. Click the Next button, and
	  follow the instructions provided by the wizard. Save the graph as Mygraph.dbf
	  when prompted. In Visual FoxPro 6.0, by default a graph is saved to a form.
	  In step 4 of the wizard, choose the option button that that says "Save graph
	  to a table."
	
	6. Add the Mygraph.dbf table to the data environment of the form.
	
	7. Add an OLE Bound control to the form. Using the Property window, set the
	  ControlSource of the OLE Bound control to MYGRAPH.OLEGRAPH, and set the
	  Stretch property of the OLE Bound control to Isometric.
	
	8. Add a command button to the form, and change its Caption property to Update.
	  Place the following code in the command button's Click event procedure:
	
	     SELECT * FROM MYDATA INTO CURSOR MYCURSOR
	     TAB = CHR(09)
	     CRLF = CHR(13) + CHR(10)
	     SELECT MYCURSOR
	     NEWDATA = TAB + "Label A" + TAB + " Label B " + TAB ;
	     + " Label C " + CRLF
	     SCAN
	          NEWDATA = NEWDATA + MYSERIES + TAB + STR(MYDATA1) + TAB ;
	          + STR(MYDATA2) + TAB + STR(MYDATA3) + CRLF
	     ENDSCAN
	     SELECT MYGRAPH
	     APPEND GENERAL Mygraph.Olegraph DATA NEWDATA
	     THISFORM.REFRESH
	
	9. Save and run the form. Make some changes to the data in the grid, and click
	  the Update button. Note that the changes made to the grid are reflected in
	  the graph.
	
	REFERENCES
	==========
	
	For more information on this topic, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q129533 HOWTO: Pass Data to Microsoft Graph Programatically
	
	  Q131029 HOWTO: Manipulate Embedded Objects in General Field
	
	Additional query words: graphing executable
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	
	=============================================================================
	
