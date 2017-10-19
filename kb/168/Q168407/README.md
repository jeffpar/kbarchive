---
layout: page
title: "Q168407: DOC: &#36;(InputDir) and &#36;(ProjDir) Produce Relative Paths"
permalink: /kb/168/Q168407/
---

## Q168407: DOC: &#36;(InputDir) and &#36;(ProjDir) Produce Relative Paths

	Article: Q168407
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT: 5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC500
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article:
	
	  TITLE: Macros for Custom Build Commands URL : mk:@ivt:dsug/D7/S111AB.HTM
	
	states that $(InputDir) and $(ProjDir) evaluate to the fully-qualified path to
	the project directory. This is in error.
	
	MORE INFORMATION
	================
	
	$(InputDir) evaluates to the path of the directory containing the input file.
	This path is relative to the project directory if the input file is in the
	directory tree rooted at the directory containing the project file. Otherwise,
	it is absolute.
	
	$(ProjDir) evaluates to the path of the directory specified for the project,
	relative to the project directory (i.e., always evaluates to).
	
	Additional query words: kbOLDocs kbVC500 kbdss kbDSupport
	
	======================================================================
	Keywords          : kbdocerr kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS NT: 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
