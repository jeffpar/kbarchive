---
layout: page
title: "Q129228: PRB: &quot;Syntax Error&quot; When Using the GETDIR() Function"
permalink: /kb/129/Q129228/
---

## Q129228: PRB: &quot;Syntax Error&quot; When Using the GETDIR() Function

	Article: Q129228
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the GETDIR() function returns a "Syntax Error" in Visual FoxPro version
	3.0. It did not return any error in FoxPro for versions 2.x for Windows.
	
	CAUSE
	=====
	
	Three parameters are used when the GETDIR() function is called. For example, if
	the following command is issued, the "Syntax Error" message is displayed:
	
	    cnewdir=GETDIR("","Save to:","Save")
	
	Although this syntax was incorrect in previous versions of FoxPro, an error
	message was not returned. The GETDIR() function accepts only two parameters.
	
	WORKAROUND
	==========
	
	Correct the command to use only two parameters:
	
	     cnewdir=GETDIR("","Save to:")
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
