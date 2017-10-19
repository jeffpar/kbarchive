---
layout: page
title: "Q116138: FIX: Visual Workbench Toolbar Buttons Don't Use Double-Click"
permalink: /kb/116/Q116138/
---

## Q116138: FIX: Visual Workbench Toolbar Buttons Don't Use Double-Click

	Article: Q116138
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the buttons on the Visual Workbench toolbar to debug the application,
	a double-click does not generate two separate clicking events: The action being
	performed is executed once, not twice.
	
	RESOLUTION
	==========
	
	Use the accelerators included with the debug toolbar buttons to perform actions
	from the debug toolbar at a faster rate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	Additional query words: 1.00 1.10 1.50 run step trace into go
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
