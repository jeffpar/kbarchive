---
layout: page
title: "Q100408: DOC: Incorrect Documentation for LineDDA Function"
permalink: kb/100/Q100408/
---

## Q100408: DOC: Incorrect Documentation for LineDDA Function

	Article: Q100408
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbDSupport kbSDKWin16 kb16bitonly
	Last Modified: 30-JUL-2001
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	SUMMARY
	=======
	
	On page 568 of the Microsoft Windows Software Development Kit (SDK)
	"Programmer's Reference, Volume 2: Functions" manual, the documentation for
	LineDDA incorrectly describes the lParam parameter. The explanation for lParam
	reads:
	
	  lParam
	
	     Points to 32 bits of application-defined data that is passed
	     to the callback function.
	
	The description of the lParam parameter should read as follows:
	
	  lParam
	
	     Specifies a 32-bit application-defined value that LineDDA passes
	     to the callback function.
	
	MORE INFORMATION
	================
	
	An application calling LineDDA can pass more than 32 bits of data to the
	callback function by allocating a buffer and passing a pointer to the buffer in
	lParam.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kbDSupport kbSDKWin16 kb16bitonly 
	
	=============================================================================
	
