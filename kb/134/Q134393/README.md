---
layout: page
title: "Q134393: FIX: Can't Bring a Grid Forward When It's Beneath Another Grid"
permalink: kb/134/Q134393/
---

## Q134393: FIX: Can't Bring a Grid Forward When It's Beneath Another Grid

	Article: Q134393
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have two grids on a form and they overlap, the one that is behind will
	not come forward and paint properly on the screen when you activate it. This is
	also true for any other overlapping controls.
	
	WORKAROUND
	==========
	
	Use a FormSet or a PageFrame control, so you don't need to overlap any objects
	on the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add two Grids to the form making sure the grids overlap at least a little
	  bit.
	
	3. Run the form, and switch between the two grids. Notice that the grid that's
	  slightly covered by the other grid does not paint properly when it's the
	  active control.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
