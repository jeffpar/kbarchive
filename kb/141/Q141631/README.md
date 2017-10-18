---
layout: page
title: "Q141631: FIX: Mouse Clicks Continually Stack Up in the Event Queue"
permalink: kb/141/Q141631/
---

## Q141631: FIX: Mouse Clicks Continually Stack Up in the Event Queue

	Article: Q141631
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a right-click, mouse clicks continually stack up in the event queue until
	the right mouse button is clicked again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the Tools menu, click Options.
	
	2. Right-click the title of the Options dialog box.
	
	3. Click outside of the pop-up menu to discard it.
	
	4. Click any of the pageframe tabs or any of visible controls.
	
	5. Right-click anywhere in the dialog box, and note that all of the left mouse
	  clicks previously chosen are executed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
