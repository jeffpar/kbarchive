---
layout: page
title: "Q130364: FIX: Scroll Bars Disappear When No Data Bound to a Grid"
permalink: kb/130/Q130364/
---

## Q130364: FIX: Scroll Bars Disappear When No Data Bound to a Grid

	Article: Q130364
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
	
	When you run a form that has all the following characteristics, the scroll bars
	for the grid disappear from the empty grid object:
	
	- There is a grid object on the form.
	
	- The Columncount property for the grid is set to 1 or greater.
	
	- No data is bound to the grid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form in the form designer.
	
	2. Add a grid object to the form designer, and set the Columncount property to 1
	  or 2.
	
	3. Save and run the form. You will not see the scroll bars for the grid object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
