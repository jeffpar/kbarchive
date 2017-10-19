---
layout: page
title: "Q132353: DOCERR: AfterRowColChange Event Documented Incorrectly"
permalink: /kb/132/Q132353/
---

## Q132353: DOCERR: AfterRowColChange Event Documented Incorrectly

	Article: Q132353
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to the Language Reference manual and the Help file, the
	AfterRowColChange event fires only under these circumstances:
	
	  ... when the user moves to another row or column in the grid, after the new
	  cell gets the focus, and after the When event of the object in the new row or
	  column. The AfterRowColChange event doesn't fire unless the When event of the
	  object in the new row or column returns true (.T.).
	
	This description of the AfterRowColChange event is incorrect. The
	AfterRowColChange event is fired even when a row has not been changed.
	
	MORE INFORMATION
	================
	
	To see the AfterRowColChange event fire even when the row has not changed,
	follow these steps:
	
	1. Create a new form named myform.
	
	2. Add a grid to the form.
	
	3. In the AfterRowColChange event, place this command:
	
	     WAIT WINDOW "In AfterRowColChange event" timeout .5
	
	4. In the Command window, run this command:
	
	     USE samples\data\customer
	
	5. Save and run the form.
	
	6. Go to the first record in the grid, and press the UP ARROW key.
	
	7. Go to the last record in the grid, and press the DOWN ARROW key.
	
	In steps 6 and 7, you'll see the AfterRowColChange event triggered even though
	the row has not changed.
	
	Additional query words: VFoxWin BeforeRowColChange
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
