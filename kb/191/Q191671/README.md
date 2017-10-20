---
layout: page
title: "Q191671: FIX: Calling AINSTANCE in Loop Causes Memory Leak"
permalink: /kb/191/Q191671/
---

## Q191671: FIX: Calling AINSTANCE in Loop Causes Memory Leak

{% raw %}

	Article: Q191671
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly calling the AINSTANCE function cause a memory leak in Visual FoxPro
	5.0x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Each iteration of the AINSTANCE() function causes a 276 byte memory leak in user
	object memory as measured by SYS(1016).
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program containing the following code and run the program:
	
	     CLEAR
	     SET TALK OFF
	     ox=CREATEOBJECT("form")
	     ox.ADDOBJECT("command1","commandbutton")
	
	     ox.SHOW
	
	     ACTIVATE  SCREEN
	     FOR i=1 TO 100
	        =AINSTANCE(ss,"form")
	        ? SYS(1016)
	     ENDFOR
	
	Additional query words: kbVFp500abug kbOOP kbfvp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
