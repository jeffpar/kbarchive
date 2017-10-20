---
layout: page
title: "Q191277: PRB: VARTYPE() Function Returns Data Type Mismatch Error"
permalink: /kb/191/Q191277/
---

## Q191277: PRB: VARTYPE() Function Returns Data Type Mismatch Error

{% raw %}

	Article: Q191277
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
	
	The following error may appear after you use a question mark to display the
	value returned from the VARTYPE() function:
	
	  Data type mismatch.
	
	CAUSE
	=====
	
	The question mark does not support the value returned by the VARTYPE() function
	when evaluating a variable created by the SAVE SCREEN command.
	
	RESOLUTION
	==========
	
	Use a temporary variable to store the result of the VARTYPE() function. For
	example:
	
	     SAVE SCREEN to screenvar
	     temp=VARTYPE(screenvar)
	     ? temp
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Type the following commands in the Command window:
	
	     ? "Hello World"
	     SAVE SCREEN to screenvar
	     ? VARTYPE(screenvar)
	
	RESULTS: The error occurs.
	
	Additional query words: kbXBase kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
