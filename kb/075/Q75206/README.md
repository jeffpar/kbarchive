---
layout: page
title: "Q75206: BUG: Inference Rules Not Invoked on Multiple Targets"
permalink: /kb/075/Q75206/
---

## Q75206: BUG: Inference Rules Not Invoked on Multiple Targets

	Article: Q75206
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1x,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.1x,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.1x, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.1x, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft NMAKE utility may not invoke inference rules when multiple
	dependency lines are used for a single target as illustrated in the sample
	makefile below.
	
	RESOLUTION
	==========
	
	To work around this problem, either avoid the use of multiple dependency lines
	for a single target, or do not use inference rules.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMAKE versions noted above. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When NMAKE processes the following sample makefile, the inference rule to build
	the executable file is not executed. However, the inference rule to build the
	object file is executed correctly because the object files are build as one
	target. Also, the commands stated explicitly for multiple targets are executed
	correctly.
	
	Sample Makefile
	---------------
	
	  # NMAKE options needed: none
	   
	  # inference rule that should be invoked
	  .obj.exe:
	   
	      LINK /INFO TEST.OBJ;
	   
	  all : test.exe
	   
	  # default inference rule executed for single target
	  test.obj : test.c
	   
	  # inference rule not executed for multiple targets
	  test.exe :: test.obj
	   
	  test.exe :: test.def
	   
	      echo Not using .DEF file
	
	Additional query words: 1.11 1.12 1.13 1.20 1.21 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.1x,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.1x,1.21
	
	=============================================================================
	
