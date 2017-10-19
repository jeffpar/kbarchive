---
layout: page
title: "Q188253: PRB: Calling _Htmltag Class Results in Memory Error"
permalink: /kb/188/Q188253/
---

## Q188253: PRB: Calling _Htmltag Class Results in Memory Error

	Article: Q188253
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
	
	Repeatedly calling the _htmltag class located in the _html.vcx Class Library
	while running Visual FoxPro 6.0 under Window NT 4.0 causes the following error
	message to occur:
	
	  There is not enough memory to complete this operation.
	
	If the operating system is Windows 95, Visual FoxPro hangs and no error message
	appears.
	
	RESOLUTION
	==========
	
	Release the object reference explicitly after you create the instance of the
	object. In the example below, replace the line:
	
	  o=''
	
	with
	
	  o.Release
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Genhtml.prg program uses the _html.vcx Class Library. The _htmltag class is
	one of many classes available within this Class Library.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program that contains the following code and run the program:
	
	     FOR x = 1 TO 10000
	        o=newobject("_htmltag",home()+"ffc\_html.vcx")
	        o=''
	     ENDFOR
	
	While the program is running, one of the behaviors listed in the SYMPTOMS section
	occurs.
	
	Additional query words: kbVFp600bug kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
