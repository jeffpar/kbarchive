---
layout: page
title: "Q93003: FIX: CVW3.EXE Displays No Text Cursor on Some Mono Video Cards"
permalink: /kb/093/Q93003/
---

## Q93003: FIX: CVW3.EXE Displays No Text Cursor on Some Mono Video Cards

	Article: Q93003
	Product(s): Microsoft Programming Utilities
	Version(s): 3.07
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, version 3.07 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the CodeView for Windows debugger (CVW3.EXE) version 3.07 provided with
	version 3.1 of the Microsoft Windows Software Development Kit (SDK), no text
	cursor is displayed.
	
	CAUSE
	=====
	
	The system has one of the following video cards installed:
	
	  IBM Printer Card with MGA output
	  Hercules Plus
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView for Windows, version
	3.07. This problem was corrected in CodeView for Windows, version 4.0.
	
	MORE INFORMATION
	================
	
	When the CodeView screen appears, the mouse cursor appears normally while the
	text cursor is displayed in the upper left hand corner of the screen. However,
	the CodeView application works correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView307
	Version           : :3.07
	Solution Type     : kbfix
	
	=============================================================================
	
