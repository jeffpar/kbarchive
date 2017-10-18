---
layout: page
title: "Q135041: DOC: Help File Gives Incorrect Info on ColumnCount Property"
permalink: kb/135/Q135041/
---

## Q135041: DOC: Help File Gives Incorrect Info on ColumnCount Property

	Article: Q135041
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file incorrectly states the following for the ColumnCount Property:
	
	  For a ComboBox or ListBox control, the ColumnCount property specifies the
	  number of Columns the control contains. If ColumnCount is set to -1, the
	  control mimics FoxPro version 2.x behavior. If you set ColumnCount to 0, no
	  Columns are displayed.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	In fact, if the ColumnCount property is set to -1 for a ListBox or ComboBox
	control, the following error occurs:
	
	  Expression Evaluated to an Illegal Value
	
	In addition, if the ColumnCount property is set to 0, and a RowSource is
	specified, the first column (if applicable) of the RowSource is displayed. For
	example, if the RowSource is set to Customer table, the RowSourceType is set to
	2-Alias, and the ColumnCount is set to 0, then the first column of the Customer
	table will be displayed in the ListBox or ComboBox control.
	
	Additional query words: 3.00 docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
