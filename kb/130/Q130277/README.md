---
layout: page
title: "Q130277: PRB: WPARENT() Gives Error in 3.0 Different from Error in 2.x"
permalink: /kb/130/Q130277/
---

## Q130277: PRB: WPARENT() Gives Error in 3.0 Different from Error in 2.x

{% raw %}

	Article: Q130277
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing too many parameters to the function WPARENT() as in:
	
	     ? WPARENT("<undefined window name>",<second parameter>)
	
	results in different error messages in versions 2.x and 3.0. Error message # 1230
	is returned in Visual FoxPro 3.0 as:
	
	  Too many arguments.
	
	whereas error message # 214 is returned in previous versions as:
	
	  Window <undefined window name> has not been defined.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro checks the number of arguments in the function before checking for
	the existence of the window in question. FoxPro 2.x checked to see if the window
	existed before it checked to see if the function had too many arguments. FoxPro
	2.x ignored a second argument.
	
	Steps to Reproduce Problem
	--------------------------
	
	Issue the command:
	
	     ? WPARENT("no_window",10)
	
	where the window "no_window" has not been defined.
	
	Notice different error messages are returned in 2.x and 3.0.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
