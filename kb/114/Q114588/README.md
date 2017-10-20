---
layout: page
title: "Q114588: Library Return Codes"
permalink: /kb/114/Q114588/
---

## Q114588: Library Return Codes

{% raw %}

	Article: Q114588
	Product(s): Microsoft Programming Utilities
	Version(s): 3.31,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB for MS-DOS, versions 3.31, 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LIB.EXE returns an exit code (also called return code or error code) to the
	operating system or the calling program. The exit code can be used to control
	the operation of batch files or makefiles.
	
	MORE INFORMATION
	================
	
	The exit code indicates the value that is returned by the Int21, function 4Ch()
	in the AL register. The following table explains some of the exit codes:
	
	Code      Meaning
	
	0         No error.
	2         Program error. Commands or files given as input to the
	         utility produced the error.
	4         System error. The library manager encountered one of the
	         following problems:
	          - There was insufficient memory.
	          - An internal error occurred.
	          - The user interrupted the session.
	
	Additional query words: kbinf 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan331DOS kbLibMan340DOS
	Version           : :3.31,3.4
	
	=============================================================================
	

{% endraw %}
