---
layout: page
title: "Q86813: FIX: Macros w/ Different Case Can't Be Assigned to Each Other"
permalink: kb/086/Q86813/
---

## Q86813: FIX: Macros w/ Different Case Can't Be Assigned to Each Other

	Article: Q86813
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11,1.12,1.13,1.2; OS/2:1.11,1.12,1.13
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.11, 1.12, 1.13, 1.2 
	- Microsoft NMAKE Utility for OS/2, versions 1.11, 1.12, 1.13 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NMAKE version 1.11, 1.12, 1.13, or 1.2 macros that are the same but have a
	different case cannot be assigned to one another. This kind of macro assignment
	results in nothing being assigned. For example, the sample makefile below
	displays
	
	  upper and
	
	when the output should be as follow:
	
	  upper and lowercase
	
	RESOLUTION
	==========
	
	Even though NMAKE macros are case sensitive, this type of assignment is not
	successful. Two workarounds are:
	
	- Use a temporary MACRO to perform the assignment. For example,
	
	       target= file.exe;
	       TEMP = $(target)
	       TARGET = $(TEMP)
	
	-or-
	
	- Give each macro a unique name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMAKE versions 1.11, 1.12, 1.13,
	and 1.2 for MS-DOS and versions 1.11, 1.12, and 1.13 for OS/2. This problem was
	corrected in NMAKE version 1.3.
	
	Sample Makefile
	---------------
	
	  target = lowercase
	  TARGET = upper and $(target)
	
	  ALL:
	
	     @echo $(TARGET)
	
	Additional query words: 1.11 1.12 1.13 1.20 buglist1.11 buglist1.12 buglist1.13 buglist1.20 fixlist1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2
	Version           : MS-DOS:1.11,1.12,1.13,1.2; OS/2:1.11,1.12,1.13
	Solution Type     : kbfix
	
	=============================================================================
	
