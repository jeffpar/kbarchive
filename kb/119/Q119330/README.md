---
layout: page
title: "Q119330: FIX: TAB-Indented Lines Are Not Cut or Copied with New Line"
permalink: /kb/119/Q119330/
---

## Q119330: FIX: TAB-Indented Lines Are Not Cut or Copied with New Line

{% raw %}

	Article: Q119330
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench fails to remove the carriage-return character from a
	highlighted line if that line has been indented using the TAB key.
	
	RESOLUTION
	==========
	
	If you use the TAB character to indent a line, highlight the line again before
	you choose Cut or Copy from the Edit menu.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, perform the following steps:
	
	1. Open Visual Workbench. Open a source file.
	
	2. Highlight an entire line of text by holding down the primary mouse button at
	  the far left of a line containing a carriage return. Drag the mouse downward
	  until one line is highlighted. You can also highlight the line by holding
	  down the SHIFT key while pressing the DOWN ARROW key.
	
	3. Press the TAB key. The line will be indented but still highlighted.
	
	4. Choose Cut from the Edit menu. Notice that the carriage-return character has
	  not been cut with the rest of the text. This is evident because the line you
	  just cut is still there but it is now a line with no text.
	
	5. Highlight a different line, and this time choose Cut from the Edit menu
	  without using the TAB key to indent the line. Notice that the carriage-
	  return character has been cut properly from the source file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	Additional query words: 1.10 1.00 1.50
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
