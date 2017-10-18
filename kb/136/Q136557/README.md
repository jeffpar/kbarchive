---
layout: page
title: "Q136557: BUG: SHOW WINDOW &lt;name&gt; REFRESH in BROWSE VALID Does Not Work"
permalink: kb/136/Q136557/
---

## Q136557: BUG: SHOW WINDOW &lt;name&gt; REFRESH in BROWSE VALID Does Not Work

	Article: Q136557
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a BROWSE command that contains a VALID clause to refresh the browse upon
	changing the value in an indexed field does not work.
	
	WORKAROUND
	==========
	
	The user-defined function or procedure referenced in the VALID clause can force
	a refresh by following these steps in this order:
	
	1. Refresh the title of the window.
	
	2. Refresh the name of the window.
	
	3. Refresh the title of the window a second time.
	
	To demonstrate this workaround, modify the 'freshen' procedure in the code listed
	in the "More Information" section of this article to this:
	
	     PROCEDURE freshen
	        SHOW WINDOW customer REFRESH
	        SHOW WINDOW vfpbrows REFRESH
	        SHOW WINDOW customer REFRESH
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Using the Customer.dbf table that ships with Visual FoxPro, create and run a
	program that contains this code:
	
	     USE C:\VFP\SAMPLES\DATA\customer.dbf
	     SET ORDER TO TAG company
	     DEFINE WINDOW vfpbrows FROM 0,0 TO 24,79
	     MOVE WINDOW vfpbrows CENTER
	     BROWSE FIELDS company :V=freshen(), contact WINDOW vfpbrows
	     CLOSE ALL
	     RELEASE WINDOW vfpbrows
	
	     PROCEDURE freshen
	        SHOW WINDOW customer REFRESH
	
	With this code, you'd expect that making a change to the Company field would
	cause the record to assume its new position in the index upon exiting that
	field. However, that occurs only when a change is made to the first record in
	the file.
	
	NOTE: In this code, the title of a browse takes on the name of the table that is
	being browsed. If a title is applied with a title clause in the DEFINE WINDOW
	line, then that title should be referenced in the SHOW WINDOW line of the
	'freshen' procedure.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
