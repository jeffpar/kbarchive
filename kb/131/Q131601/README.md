---
layout: page
title: "Q131601: PRB: AselObj() Doesn't Work for Objects Added in Grid Columns"
permalink: kb/131/Q131601/
---

## Q131601: PRB: AselObj() Doesn't Work for Objects Added in Grid Columns

	Article: Q131601
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AselObj() reports that nothing is selected when the currently selected object is
	a control that has been added to a grid column. AselObj() reports that the
	currently selected object's container is the grid rather than the column.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Test. Add a grid to the form and set the ColumnCount
	  property to 1.
	
	2. Use the properties sheet to select Column1 of the grid.
	
	3. Drop a check box into the column. The properties sheet should now show that
	  the check box is the currently selected object.
	
	4. Click the Command window, and type the following lines of code:
	
	        x=ASELOBJ(y)    && Reference to selected object
	        ?x              && Number of selected objects
	
	  The number 0 is displayed when the expected value of x is 1.
	
	5. Type the following in the Command window:
	
	        c=ASELOBJ(d,1) &&reference to selected object's container
	        ?c
	
	  Now the number 1 (the expected value) is displayed. However, the reference to
	  the selected object's container is incorrect as shown by this command:
	
	        ?d[1].name
	
	  Grid1 is displayed when Column1 is the expected value.
	
	Additional query words: FoxWin 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
