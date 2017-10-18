---
layout: page
title: "Q135265: How to Use a Combo Box to Filter the Contents of a Grid"
permalink: kb/135/Q135265/
---

## Q135265: How to Use a Combo Box to Filter the Contents of a Grid

	Article: Q135265
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use a combo box in Visual FoxPro to filter the contents of a
	grid by using the value property of the combo box.
	
	MORE INFORMATION
	================
	
	To filter out certain records within a table, use the SET FILTER command along
	with the value property of the combo box.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form by using the CREATE FORM <form name> command.
	
	2. Open the Testdata.dbc database in the VFP\Samples\Data directory. Add the
	  Customer table to the data environment. Drag the Customer table from the data
	  environment onto the form to create a grid.
	
	3. Add a combo box to the form from the controls toolbar, and in the Name
	  property, type:
	
	     cboTest
	
	4. In the RowSource property of the combo box, type some data that you know is
	  in the table, separating each of the values with commas. For example, type:
	
	  " Germany,France,Spain" (without the quotation marks)
	
	5. For the RowSourceType property, select Value.
	
	6. In the Click event of the combo box, type this code:
	
	     SELECT Customer
	     SET FILTER TO Country = Thisform.cboTest.Value
	     Thisform.Refresh()
	
	7. Save and Run the form. When you selecting one of the items in the combo box,
	  the grid reflects only those records that pertain to that item.
	
	Additional query words: 3.00 VFoxMac VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300
	Version           : MACINTOSH:3.0b; WINDOWS:3.0
	
	=============================================================================
	
