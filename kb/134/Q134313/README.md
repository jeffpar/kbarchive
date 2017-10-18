---
layout: page
title: "Q134313: How to Change Object Properties Based on a Logical Field"
permalink: kb/134/Q134313/
---

## Q134313: How to Change Object Properties Based on a Logical Field

	Article: Q134313
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
	
	Visual FoxPro has the ability to refresh an object on a form based on a logical
	field in a table.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new .dbf file called Junk with a logical field named Logic.
	
	2. Enter two or three records with True (.T.) valuses in the Logic field and two
	  or three records with False (.F.) values in the Logic field.
	
	3. Issue the following command in the Command window:
	
	     CREATE FORM Test
	
	4. Select the command button object from the Form Controls toolbar, and place it
	  on the form.
	
	5. In the Refresh property for th command button, type:
	
	     THIS.VISIBLE=Junk.Logic
	
	  This will cause the object to be visible or not visible based upon the value
	  in the Junk.dbf table.
	
	6. Create another command button on the form.
	
	7. Double-click the button and in the click event for this button, type the
	  following two commands:
	
	     SKIP              && move the record pointer
	     THISFORM.REFRESH  && refresh the screen
	
	8. Click the exclamation mark on the toolbar to save and run the form.
	
	9. Click the second command button and note how the first command button appears
	  and disappears based on the value of the logical field in the table.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
