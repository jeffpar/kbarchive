---
layout: page
title: "Q136977: DOCERR: Incomplete Instructions for Populating a Grid Control"
permalink: kb/136/Q136977/
---

## Q136977: DOCERR: Incomplete Instructions for Populating a Grid Control

	Article: Q136977
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 354 of the Developer's Guide, and the Help file topic "Populating Form
	Controls" both specify incomplete instructions for populating the grid from the
	results of a query. The text of both state "Set the RowSource or RecordSource
	property to the cursor or table you specified in the SELECT - SQL statement."
	
	MORE INFORMATION
	================
	
	Both resources should also state, "The RecordSource property needs to be
	specified in the grid's property sheet in the Form Designer, and respecified by
	means of the NEXT command after the SELECT - SQL command in the grid's Init
	event."
	
	The syntax to use for the grid's Init event is:
	
	     This.RecordSource = <cursor name>
	
	Reissuing the RecordSource property is required because the properties of the
	grid are lost when the query is executed. They need to be reestablished.
	
	REFERENCES
	==========
	
	For more information about the loss of properties of a grid populated by a
	query, please see the following article in the Microsoft Knowledge Base:
	
	  Q131836 PRB: Grid Not Refreshing Displaying a Cursor From Query
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
