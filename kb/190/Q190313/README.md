---
layout: page
title: "Q190313: PRB: Form QueryUnload Fires Before the Activate Event"
permalink: /kb/190/Q190313/
---

## Q190313: PRB: Form QueryUnload Fires Before the Activate Event

{% raw %}

	Article: Q190313
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, the QueryUnload event of a form fires before the
	Activate event. If code in the Activate event of a form takes some time to
	execute, the QueryUnload event fires before the code in the Activate event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add the following code to the Activate event of the form:
	
	        ? "Inside the Activate event."
	        *DEBUGOUT PROGRAM()
	        FOR i = 1 TO 5000
	              SET MESSAGE TO ALLTRIM(STR(i))
	        NEXT i
	
	2. Add the following code to the QueryUnload event of the form:
	
	        ? "Inside the QueryUnload event."
	        *DEBUGOUT PROGRAM()
	        WAIT WINDOW "Inside the QueryUnload Event."
	
	3. Run the form and click the Command window to remove focus from the form. Now,
	  click the Close control to close the form. Notice that the Activate event
	  fires, then the QueryUnload event fires.
	
	4. Unremark the two DEBUGOUT commands and remark the WAIT WINDOW command. Open
	  the Debugger and note that in the Output window of the Debugger the
	  QueryUnload event fires after the Activate event.
	
	Additional query words: FxprgClassoop FxtoolFormdes kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
