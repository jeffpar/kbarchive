---
layout: page
title: "Q138938: PRB: PUTFILE() Ignores File Extension Parameter"
permalink: /kb/138/Q138938/
---

## Q138938: PRB: PUTFILE() Ignores File Extension Parameter

	Article: Q138938
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT or Windows 95, if you include a period in the filename
	parameter of PUTFILE(), the extension parameter is ignored.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Enter the following line in the Command window:
	
	     myvar = PUTFILE('Find Me','text.file','txt')
	
	2. Enter the following line in the Command window:
	
	  " ?myvar " (without the quotation marks)
	
	The string which is returned is:
	
	  C:\VFP\TEXT.FILE
	
	The .txt extension passed to PUTFILE() is ignored when a period is included in
	the filename.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
