---
layout: page
title: "Q103715: FIX: Caret Moves from Memory Window When Modifications Made"
permalink: /kb/103/Q103715/
---

## Q103715: FIX: Caret Moves from Memory Window When Modifications Made

{% raw %}

	Article: Q103715
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The caret in the Visual Workbench switches back to the Source window if you
	change a memory location while the Source window is minimized.
	
	Although the Memory window has its caption highlighted, the caret is in the
	Source window. Clicking the Memory window to retrieve the caret doesn't work.
	
	RESOLUTION
	==========
	
	First give focus to a different window, then give it to the Memory window. For
	example, first click the Source window with the mouse cursor and then click the
	Memory window to move the caret to the Memory window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ 32-bit Edition version
	2.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	1. Create a simple Hello World console application.
	
	2. Build the application for debug.
	
	3. Minimize the Source window.
	
	4. Open a Memory window and go to an address where you can change its contents,
	  possibly the "Hello, world" string.
	
	5. Change any character in "Hello, world." When the first character is pressed,
	  the Source window pops up and the caret is now in the Source window, but the
	  Memory window has the focus.
	
	Additional query words: cursor mouse 1.00 1.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
