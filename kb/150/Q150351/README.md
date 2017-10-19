---
layout: page
title: "Q150351: FIX: Absolute Pathnames for Source Files Placed in Makefile"
permalink: /kb/150/Q150351/
---

## Q150351: FIX: Absolute Pathnames for Source Files Placed in Makefile

	Article: Q150351
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1
	Operating System(s): 
	Keyword(s): kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Developer Studio generated Makefile contains absolute path names for source
	files.
	
	CAUSE
	=====
	
	The source files reside in a directory other than the project directory.
	
	RESOLUTION
	==========
	
	Modify the Makefile to use relative paths by opening the .mak file in text
	mode.
	
	CAUTION: Be extremely careful not to add any extra spaces or unexpected
	characters.
	
	NOTE: Anytime the IDE writes to the .mak file, your changes are overwritten and
	the full path name is re-installed. Make a backup copy of the .mak file
	immediately after adding the relative paths to ensure that changes can be
	re-entered if there is a problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug nmake makefile mak external vc
	
	======================================================================
	Keywords          : kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410
	Version           : 4.0 4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
