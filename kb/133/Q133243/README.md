---
layout: page
title: "Q133243: How to Determine Which Key the User Pressed in a Grid"
permalink: /kb/133/Q133243/
---

## Q133243: How to Determine Which Key the User Pressed in a Grid

{% raw %}

	Article: Q133243
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
	
	This article shows by example how to determine if the user pressed the UP ARROW
	key while the pointer was on the first record of the grid or pressed the DOWN
	ARROW key while the pointer was on the last record of the grid.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a table, and create a new form.
	
	2. Create a new form property called FirstRecord.
	
	3. Add a grid to the form.
	
	4. In the grid's Init event, add this line of code:
	
	     THISFORM.FirstRecord = RECNO()
	
	5. In the grid's AfterRowColChange event, add this code:
	
	     Do CASE
	        CASE LASTKEY() = 5 AND THISFORM.FirstRecord = RECNO()
	           =MESSAGEBOX("You're on the first record of the grid")
	        CASE LASTKEY() = 24 AND THIS.ActiveRow = RECCOUNT()
	           =MESSAGEBOX("You're on the last row of the grid")
	        ENDCASE
	
	6. Save and run form.
	
	NOTE: If add complexity, such as filtering the table or changing the index order
	of the table after the grid's Init event fires, this example will not work. You
	will need to change the example to accommodate the additional complexity.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
