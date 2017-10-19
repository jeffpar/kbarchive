---
layout: page
title: "Q140578: FIX: Resizing Field in Grid Builder Causes Error"
permalink: /kb/140/Q140578/
---

## Q140578: FIX: Resizing Field in Grid Builder Causes Error

	Article: Q140578
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resizing a field in the Grid Builder after adding all the fields for a table and
	then removing one field causes this error:
	
	  One or more properties affected by this builder are unavailable and may be
	  protected
	
	If you click the Yes button, a second error message appears:
	
	  Error #1925 in Setgridwidth(0), unknown parent
	
	Under Windows 3.1 or Windows for Workgroups, this will be followed by a Win32s
	error. Under Windows 95, this will be followed by:
	
	  This program has performed an illegal operation and will be shut down
	
	WORKAROUND
	==========
	
	Use the properties sheet to design the grid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following commands in the Command window:
	
	     SET DEFAULT TO SYS(2004)+ "Samples\data"
	     CREATE FORM
	
	2. Using the toolbar, add a grid to the form.
	
	3. Right-click the grid, and click Builder.
	
	4. Click the three-dot button, and select the Orditems table.
	
	5. Click the double-arrow button to add all the fields to the grid.
	
	6. Remove the first field.
	
	7. Click Tab 3, the layout tab.
	
	8. Try to resize one of the fields.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.0b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
