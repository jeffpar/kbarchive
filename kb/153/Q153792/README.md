---
layout: page
title: "Q153792: BUG: MESSAGEBOX() Function Displays Incorrect Icon"
permalink: kb/153/Q153792/
---

## Q153792: BUG: MESSAGEBOX() Function Displays Incorrect Icon

	Article: Q153792
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MESSAGEBOX() function does not display a question mark icon when the second
	paramenter, nDialogType, is 32. When the nDialogType parameter is 32, the
	function displays the information icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Help file states that passing 32 to the MESSAGEBOX() function produces a
	question mark icon within the MESSAGEBOX() dialog. However, the MESSAGEBOX()
	function in Visual FoxPro for the Macintosh displays an information icon
	instead.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter the following commands in the Command window:
	
	     ? MESSAGEBOX("Information Icon",64)
	     ? MESSAGEBOX("Question Mark",32)
	
	When the nDialogType parameter equals 64, the information icon correctly appears.
	Passing 32 as the nDialogType parameter, however, does not produce a question
	mark icon.
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
