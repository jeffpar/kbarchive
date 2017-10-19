---
layout: page
title: "Q169862: BUG: VFP Functions Cause Infinite Loop in Debugger Watch Window"
permalink: /kb/169/Q169862/
---

## Q169862: BUG: VFP Functions Cause Infinite Loop in Debugger Watch Window

	Article: Q169862
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Entering a Visual FoxPro function, such as GetPrinter(), GetFile(), or
	GetColor(), into the Watch window of the debugger may cause an infinite loop.
	
	RESOLUTION
	==========
	
	One of the four following methods may stop the infinite loop:
	
	1. Delete the entry from the debugger as follows:
	
	  a. Click on the Watch window entry.
	
	  b. When the dialog box comes up, close it.
	
	  c. Click on the Watch window entry again.
	
	  d. When the dialog box comes up, close it again.
	
	  e. With the cursor on the Watch window entry, it should be able to be
	     deleted.
	
	2. Shut down the debugger.
	
	3. Shut down Visual FoxPro from the Operating System (Windows Task Manager).
	
	4. Re-install Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro functions that display a dialog box and then return a value
	based on the entries to the dialog box may cause an infinite loop if entered
	into the Watch window of the debugger. The following functions were tested and
	cause the problem:
	
	     GetColor(), GetCP(), GetDir(), GetFile(), GetPict(), GetPrinter()
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Visual FoxPro Debugger.
	
	2. Enter one of the functions listed above into the Watch window.
	
	3. When the dialog box for the function comes up, try to close it.
	
	4. Click anywhere on the screen. Note that the dialog box that was just closed
	  is displayed again.
	
	Each time the dialog box is closed, it will display again as soon as the mouse is
	clicked.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
