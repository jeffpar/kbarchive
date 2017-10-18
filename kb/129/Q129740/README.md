---
layout: page
title: "Q129740: BUG: Grid FixedAlignment Prop Accepts Value for Non-Fixed Cell"
permalink: kb/129/Q129740/
---

## Q129740: BUG: Grid FixedAlignment Prop Accepts Value for Non-Fixed Cell

	Article: Q129740
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FixedAlignment property of the Grid Control is used to get or set a value
	that determines the alignment of data in the fixed cells of a column. However,
	this property incorrectly accepts a new value when applied to a non-fixed
	column; no error message is generated, and the alignment of the text does not
	change.
	
	This behavior is unlike the ColAlignment property that determines the alignment
	of data in the non-fixed cells of a column. If an attempt is made to set the
	text alignment of a fixed-column with the ColAlignment property, an "Invalid
	Column number for Alignment" error message is correctly displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the Tools menu, choose Custom Controls. Then select the check box for
	  the Microsoft Grid Control from the dialog box, and click OK. The Grid
	  Control appears in the Visual Basic Toolbox.
	
	3. Add a grid control (Grid1) to Form1.
	
	4. Add the following code to the Grid1_Click event procedure:
	
	     Grid1.ColWidth(1)=2000
	     Grid1.Col=1
	     Grid1.Row=1
	     Grid1.Text="Hello"
	     Grid1.FixedAlignment(1)=1 ' Right Justify
	
	5. Press the F5 key to Run the program. Click the Grid Control. The text in
	  Cell(1,1), which is non-fixed, is not right-justified but no error message is
	  generated to indicate that Cell(1,1) is an invalid column for this alignment
	  property.
	
	Additional query words: 4.00 buglist4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
