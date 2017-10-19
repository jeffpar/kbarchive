---
layout: page
title: "Q59963: PRB: CodeView Does Display Source File Contents"
permalink: /kb/059/Q59963/
---

## Q59963: PRB: CodeView Does Display Source File Contents

	Article: Q59963
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to open a source code file in CodeView fails. CodeView version 4.0
	sounds the system bell and refuses to load the source code file. CodeView
	versions 3.x displays the application in assembly language mode.
	
	CAUSE
	=====
	
	The first line of the source code file contains extended ASCII characters (ASCII
	codes 0-8, 11, 14-31, or 127-255).
	
	RESOLUTION
	==========
	
	To use extended characters in your source file, begin the file with a blank
	line.
	
	MORE INFORMATION
	================
	
	Even though CodeView does not display an application's source code when the
	source contains extended ASCII characters, you can use CodeView to debug the
	application in assembly language mode.
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	
