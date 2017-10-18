---
layout: page
title: "Q41101: CodeView and Video Pages"
permalink: kb/041/Q41101/
---

## Q41101: CodeView and Video Pages

	Article: Q41101
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	CodeView does not allow you to specify which video page it will use. As a
	result, any application that uses video page one conflicts with CodeView
	and the screen becomes corrupted.
	
	To avoid such conflicts, use the two-monitor option for CodeView (cv /2).
	This option allows CodeView to send the application's output to one screen
	while using the first screen for its own output.
	
	Otherwise, simply avoid the use of video page one in programs that will be
	debugged under CodeView.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	
