---
layout: page
title: "Q130643: FIX: Closing Resource Browser System Menu Doesn't Save Changes"
permalink: kb/130/Q130643/
---

## Q130643: FIX: Closing Resource Browser System Menu Doesn't Save Changes

	Article: Q130643
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After making changes to the resources in the Resource Editor, you cannot
	double-click the system menu of the Resource Browser window to save the changes.
	The window is closed, but the changes are not saved nor are you prompted to save
	the modified .RC file.
	
	RESOLUTION
	==========
	
	Close the modified Resource Editor Window first, before you double-click the
	system menu to close the Resource Browser Window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a project inside Visual WorkBench.
	
	2. Open the .RC file for that project. This will open the Resource Browser
	  window, which will contain all the resources.
	
	3. Modify any resource you want.
	
	4. Leave this modifed resource editor window open, and double-click the system
	  menu of the Resource Browser Window. This just closes the window without
	  saving the changes.
	
	Additional query words: 2.00 2.10 3.00 3.10
	
	======================================================================
	Keywords          : _IK920 kbVC kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
