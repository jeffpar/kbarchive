---
layout: page
title: "Q116374: FIX: &gt;251 Character Lines in Workbench Cause Random Behavior"
permalink: /kb/116/Q116374/
---

## Q116374: FIX: &gt;251 Character Lines in Workbench Cause Random Behavior

	Article: Q116374
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual Workbench does not allow a user to type more than 251
	characters on a single line. Depending on the version, the Visual Workbench will
	either truncate the line past the 251 character limit or ask if the offending
	line(s) should be wrapped onto the next line. This behavior can cause problems
	in resource files (.RC files) or other project files in which the addition of a
	carriage return is undesirable.
	
	In Visual C++ for Windows versions 1.0, 1.5 and 1.51, it is possible to load a
	file with more than 251 characters on a single line. In this case unexpected
	results can occur, including the following:
	
	- A search-and-replace on the >251-character line may result in a general
	  protection fault.
	
	-or-
	
	- Editing the >251-character line may change the color of the background or
	  text in the edit window.
	
	RESOLUTION
	==========
	
	To work around the problem, you must shorten line length to 251 characters or
	less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was fixed in Microsoft Visual C++, 32-bit Edition,
	version 4.0.
	
	Additional query words: 1.00 1.50 1.51 2.00 2.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
