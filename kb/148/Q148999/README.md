---
layout: page
title: "Q148999: BUG: ON ERROR Not Called When Update Conflict Occurs in Grid"
permalink: kb/148/Q148999/
---

## Q148999: BUG: ON ERROR Not Called When Update Conflict Occurs in Grid

	Article: Q148999
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use row or table buffering in a form, an update conflict could occur if
	a user attempts to make changes to data that has already been updated by another
	user. In this situation, Visual FoxPro will display a standard update conflict
	error message, which allows the user to revert their changes. You can use an ON
	ERROR routine to trap for this error to more gracefully handle potential update
	conflicts. However, when you use an ON ERROR routine to trap for these update
	conflicts, the error routine will not be called correctly if the error occurs
	while interacting with a grid. This is a bug.
	
	WORKAROUND
	==========
	
	Using the Valid event of the text box object in the columns of a grid, you can
	check for potential update conflicts before actually performing the updates.
	Place the following code in the Valid event of the text box in every column of a
	grid:
	
	     IF InList(GetFldState(This.ControlSource),2,4) AND ;
	        OldVal(This.ControlSource)<>CurVal(This.ControlSource)
	          WAIT WINDOW 'Value has been changed by another user.'
	          =TableRevert(.t.)
	          RETURN 0
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form. Add a table to the data environment of the form and set
	  the BufferModeOverride property to 3. Drag the table from the data
	  environment to the form to create a grid. Save the form as Test.scx.
	
	2. Create a new program that contains the following code:
	
	     SET EXCLUSIVE OFF
	     ON ERROR WAIT WINDOW 'This is my error handler'
	     DO FORM Test
	
	3. Save and run the program.
	
	4. Start a second instance of Visual FoxPro, and run the program under this
	  second instance of Visual FoxPro.
	
	5. Make a change to a field on the first record in the grid, and move off that
	  record to update the table.
	
	6. Switch back to the first instance of Visual FoxPro.
	
	7. Make a change to the same field on the first record of the grid, and move off
	  that record to update the table. Note that the standard update conflict error
	  appears instead of the WAIT WINDOW.
	
	REFERENCES
	==========
	
	For more information about the grid and the ON ERROR command, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130131 PRB: ON ERROR Not Called When Trigger Fails in Browse or Grid
	
	Additional query words: multiuser kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
