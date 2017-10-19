---
layout: page
title: "Q122268: FIX: CTRL+Z Terminates File Load in Development Environment"
permalink: /kb/122/Q122268/
---

## Q122268: FIX: CTRL+Z Terminates File Load in Development Environment

	Article: Q122268
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC200bug kbVC400fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ development environment will terminate a file load if there is a
	CTRL+Z (1aH) character in the file.
	
	RESOLUTION
	==========
	
	View the file in another editor, such as Microsoft Word, and remove the CTRL+Z
	characters. In Microsoft Word, CTRL+Z characters appear as a square box. When
	you save the file, be sure to save it in text format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	CTRL+Z is not used as the end-of-file character in Windows NT. This use of
	CTRL+Z is obsolete and should be ignored.
	
	Additional query words: 2.00 control-z ctrl-z ctrl z
	
	======================================================================
	Keywords          : kbide kbVC kbVC200bug kbVC400fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
