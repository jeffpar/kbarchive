---
layout: page
title: "Q189604: PRB: Error in Moved Event of Form Appears to Hang VFP"
permalink: /kb/189/Q189604/
---

## Q189604: PRB: Error in Moved Event of Form Appears to Hang VFP

	Article: Q189604
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is a syntax error in the Moved Event of a form, as described in the
	MORE INFORMATION section, Visual FoxPro appears to hang when the form is moved.
	The buttons on the Program Error dialog box may not respond to a mouse click
	making it look like Visual FoxPro is hanging. This behavior does not occur in
	Visual FoxPro 3.x.
	
	RESOLUTION
	==========
	
	The mouse may not allow you to click the Cancel button. However, either of the
	following actions clear the Program Error dialog box:
	
	- Press the ESCAPE key.
	
	-or-
	
	- Press the ENTER key when the Cancel button has focus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program with the following code and run the program:
	
	        xMovedTest=CREATE('testme')
	        xMovedTest.SHOW(1)
	
	        DEFINE CLASS testme AS FORM
	           CAPTION = "Try to move me"
	           PROCEDURE MOVED
	
	              ENDIF && There is no IF statement
	           ENDPROC
	        ENDDEFINE
	        *-- End of Code
	
	2. Attempt to move the form and the Program Error dialog box appears.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
