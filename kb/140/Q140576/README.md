---
layout: page
title: "Q140576: FIX: Backslash Alone in Menu Causes &quot;Illegal Operation&quot; Error"
permalink: kb/140/Q140576/
---

## Q140576: FIX: Backslash Alone in Menu Causes &quot;Illegal Operation&quot; Error

	Article: Q140576
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
	
	Using a backslash alone as a menu prompt will cause the following error when the
	menu is previewed or run.
	
	  This program has performed and illegal operation and will be shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro version 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	If other characters are inserted before or after the backslash, no error occurs.
	If the backslash is the first character, the menu choice is disbled (grayed
	out). The error occurs only if the backslash is the only character.
	
	Steps to Reproduce Problem
	--------------------------
	
	The following example duplicates the error. Please exercise caution if you decide
	to run this because it causes Visual FoxPro to halt. Before running this
	example, you should close any open files or tables within Visual FoxPro and
	close any other open applications. This code is provided as an illustration
	only.
	
	1. Create a new menu named Pad1.
	
	2. Create a menu options under Pad1 named Test and \.
	
	3. Save the menu.
	
	4. Preview the menu, and on the Pad1 menu, click Test. The error occurs.
	
	5. Generate and run the menu. On the Pad1 menu, click Test again. The error
	  occurs.
	
	Additional query words: VFoxWin fixlist3.0b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
