---
layout: page
title: "Q291953: BUG: Visual C++  6.0 May Stop Responding in Devedit.pkg"
permalink: kb/291/Q291953/
---

## Q291953: BUG: Visual C++  6.0 May Stop Responding in Devedit.pkg

	Article: Q291953
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVC kbDSupport
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, on platform(s):
	   - Microsoft Windows Millennium Edition 
	   - Microsoft Windows 98 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a source file or a header file in Visual C++ 6.0, Visual C++ 6.0
	may stop responding (crash) with the following error message:
	
	  MSDEV caused an invalid page fault in module DEVEDIT.PKG
	  MSDEV will now close.
	
	  If you continue to experience problems,
	  try restarting your computer.
	
	This problem only occurs on computers that are running Windows Millennium
	Edition, Windows 98, or Windows 95 if the TypeInfo button is on the toolbar in
	Visual C++ 6.0.
	
	RESOLUTION
	==========
	
	Remove TypeInfo from the toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Click Customize on the Tools menu.
	
	2. Click the Commands tab.
	
	3. Click to select Edit from the category list in the combo box.
	
	4. Drag TypeInfo to the toolbar.
	
	When you select a variable name or a function name in Visual C++ 6.0 and then
	click Customize on the Tools menu, the syntax for a variable or a function is
	displayed based on your selections in the text editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
