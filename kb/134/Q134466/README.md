---
layout: page
title: "Q134466: How to Display a SQL Cursor's Multiple Columns in a Combo Box"
permalink: /kb/134/Q134466/
---

## Q134466: How to Display a SQL Cursor's Multiple Columns in a Combo Box

	Article: Q134466
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation (Developer's Guide, Chapter 11, Using Controls, methods to
	populate various controls, Page 294) describes the functionality of the combo
	box but is not very explicit on how to populate the control. The documentation
	also identifies methods for populating list boxes and drop- down list boxes. You
	can use the methods used to populate the list boxes for the combo boxes as
	well.
	
	However, the documentation does not present a method to populate a combo box from
	a multiple-column SQL statement cursor. This article describes how to do it.
	
	MORE INFORMATION
	================
	
	For a DropDown ComboBox to display an initial value and multiple columns from a
	cursor created by an SQL SELECT statement, Microsoft recommends that you use the
	following property values and methods:
	
	Example ComboBox Properties:
	
	     BoundColumn   = 1
	     ColumnCount   = 3
	     ColumnWidths  = 0,100,100
	     RowSource     = SELECT city+' '+region as MyField,city,region ;
	                     FROM Customer ;
	                     where !empty(region) ;
	                     into cursor MyCursor
	
	     RowSourceType = 3
	
	Example ComboBox Init Method:
	
	     This.Value = MyCursor.MyField
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
