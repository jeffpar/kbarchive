---
layout: page
title: "Q141897: How to Add Columns to the DBGrid Control at Design Time"
permalink: kb/141/Q141897/
---

## Q141897: How to Add Columns to the DBGrid Control at Design Time

	Article: Q141897
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to add columns to the DBGrid control at design time.
	Adding columns is accomplished by setting properties of the Column objects by
	using the right mouse button to click on the control.
	
	MORE INFORMATION
	================
	
	Use of the right mouse button (right click) to click on the DBGrid control is
	not clearly documented in online help; however, it is discussed briefly in
	Chapter 24 of the Programmer's Guide in the Design-time Operations section and
	in more detail in Books Online.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic or on the File menu, click New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. On the Tools menu, click Custom Controls, then check the DataBound grid
	  control.
	
	3. Click OK; this adds the control icon to the toolbar.
	
	4. Add one DBGrid control to the form1.
	
	5. Right-click the control and click Edit on the menu.
	
	6. Right-click the control again and click Insert or Append.
	
	Clicking Insert inserts a new column to the left of the selected column(s) or to
	the left of the column under the cursor.
	
	Clicking Append adds a new column to the far right of the columns in the
	control.
	
	The result is that one additional column is added.
	
	REFERENCES
	==========
	
	Visual Basic Books Online.
	
	Additional query words: 4.00 vb4win vb4all
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
