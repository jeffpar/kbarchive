---
layout: page
title: "Q132864: FIX: SET CENTURY OFF Turns 02/29/2000 into Invalid Date"
permalink: kb/132/Q132864/
---

## Q132864: FIX: SET CENTURY OFF Turns 02/29/2000 into Invalid Date

	Article: Q132864
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the command SET CENTURY OFF causes the date 02/29/2000 to be invalid if
	it is stored to a date field in a table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type:
	
	     SET CENTURY ON
	     CREATE TABLE test (date d)
	     APPEND
	
	2. Type 02/29/2000 into the new record.
	
	3. Press CTRL+W to save the record.
	
	4. In the Command window, type:
	
	     SET CENTURY OFF
	     BROWSE
	
	5. Select the record that shows the 02/29/00 date, and press ENTER
	
	An "Invalid Date" error message appears in a WAIT WINDOW at the top right of the
	Visual FoxPro desktop.
	
	This problem does not occur in Microsoft FoxPro version 2.x.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
