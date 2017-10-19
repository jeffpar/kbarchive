---
layout: page
title: "Q73690: Invoking NMAKE with /A Still Evaluates First Target Only"
permalink: /kb/073/Q73690/
---

## Q73690: Invoking NMAKE with /A Still Evaluates First Target Only

	Article: Q73690
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft NMAKE File Maintenance Utility evaluates only the first target in
	a makefile, even if the command line includes the /A option switch. This may not
	be readily apparent from the documentation, which states that the /A switch
	causes NMAKE to rebuild all requested targets, even if they are not out of date
	with respect to their dependents.
	
	MORE INFORMATION
	================
	
	In the sample makefile below, NMAKE invokes the compiler to produce HELLO1.OBJ
	and then stops. The /A switch instructs NMAKE to call the compiler for HELLO1.C
	even if HELLO1.OBJ is more recent. The /A switch does not build all targets in
	the makefile.
	
	To force NMAKE to evaluate each target, specify a pseudotarget as the first
	target in the make file. Specify the actual targets as dependents of the
	pseudotarget. The sample makefile below uses "ALL" as the pseudotarget. Remove
	the comment from that line to build all targets. For more information, please
	refer to the NMAKE documentation provided with your compiler or query in the
	Microsoft Knowledge Base on the following words:
	
	  " nmake and pseudotarget and default" (without the quotation marks)
	
	Sample Makefile
	---------------
	
	  # ALL : hello1.exe hello2.exe  # Remove the comment from this
	                                 # line to build all of the targets
	
	  hello1.obj : hello1.c
	  hello2.obj : hello2.c
	  hello1.exe : hello1.obj
	  hello2.exe : hello2.obj
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	
