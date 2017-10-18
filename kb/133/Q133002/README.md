---
layout: page
title: "Q133002: How the AddColumn Method Computes New ColumnCount Value"
permalink: kb/133/Q133002/
---

## Q133002: How the AddColumn Method Computes New ColumnCount Value

	Article: Q133002
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AddColumn method allows a column to be added to a grid at run time. The new
	ColumnCount for the grid is calculated differently depending on its value before
	the column was added.
	
	MORE INFORMATION
	================
	
	If the Grid.ColumnCount property is set to 1 or higher, the new ColumnCount
	value is calculated by adding one to the existing ColumnCount value.
	
	If the Grid.ColumnCount property is set to -1, the new ColumnCount value is
	calculated by adding one to the number of fields in the table open in the
	current work area. This behavior occurs because a value of -1 indicates that the
	grid should include all fields from the current work area. The grid itself is
	flexible and can change the number of columns based on the fields contained in
	the underlying table. When a column is added to such a grid, the number of
	columns must now be fixed to one more than the field count, and a static number
	is required.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
