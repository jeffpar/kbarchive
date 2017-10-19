---
layout: page
title: "Q122788: FIX: Access Violation on MSVC.EXE When Scanning Dependencies"
permalink: /kb/122/Q122788/
---

## Q122788: FIX: Access Violation on MSVC.EXE When Scanning Dependencies

	Article: Q122788
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Updating project dependencies or adding a resource file generates a message box
	containing this error:
	
	  MSVC.EXE
	  Exception: access violation (0xc0000005), Address <number>
	
	CAUSE
	=====
	
	The size of the resource file is a multiple of 4096 bytes.
	
	RESOLUTION
	==========
	
	Change the size of the resource file. Use the following steps to open the
	resource file as a text file and add a few spaces:
	
	1. From the File menu, choose Open.
	
	2. Change the Open As: option to Text.
	
	3. Select the resource file.
	
	4. Add some spaces.
	
	5. Save the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words: 2.00 9.00 Update visual workbench
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
