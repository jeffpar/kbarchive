---
layout: page
title: "Q186876: PRB: Width_Access Method Fires When Height Changes"
permalink: /kb/186/Q186876/
---

## Q186876: PRB: Width_Access Method Fires When Height Changes

	Article: Q186876
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resizing the height of a form causes the Width_Access method to fire.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run the program:
	
	        PUBLIC oForm1
	        oForm1 = CREATE('oForm')
	        oForm1.SHOW
	
	        DEFINE CLASS oForm AS FORM
	
	           PROCEDURE Width_ACCESS
	           ? "Accessed"
	           RETURN THIS.WIDTH
	
	        ENDDEFINE
	
	2. After the form appears, resize the form, increasing its height by using the
	  mouse to drag a corner of the form.
	
	3. Notice the word "Accessed" appears repeatedly in the form each time the
	  Width_Access method fires.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
