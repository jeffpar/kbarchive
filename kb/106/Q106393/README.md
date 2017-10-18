---
layout: page
title: "Q106393: FIX: Print Footer Options Reset to &amp;P in Visual Workbench"
permalink: kb/106/Q106393/
---

## Q106393: FIX: Print Footer Options Reset to &amp;P in Visual Workbench

	Article: Q106393
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, version 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you choose Page Setup from the File menu in the Visual Workbench and delete
	all footer options, the &P option is the default. If you then later choose
	Page Setup from the File menu, the &P option returns.
	
	CAUSE
	=====
	
	The parser for the Footer options box does not maintain an empty string. If one
	is found, the &P option is inserted to include the page number.
	
	You can enter a single space in the options string, which will function the same
	as having no options. However, this is maintained only during the current Visual
	Workbench session. When the Visual Workbench is executed again, the &P
	option is reinserted.
	
	RESOLUTION
	==========
	
	Select one of the centering options, &L or &C or &R. Because there
	is no other text desired, these options will not have any effect other than to
	keep the Visual Workbench from inserting the &P option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Visual Workbench
	version 1.0 for Windows and Microsoft Visual Workbench, 32-bit Edition, version
	1.0. This problem was corrected in Microsoft Visual C++, 32-bit Edition, version
	2.0.
	
	Additional query words: 1.00 1.50 print printing numbers
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
