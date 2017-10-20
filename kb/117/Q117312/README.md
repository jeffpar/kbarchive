---
layout: page
title: "Q117312: BUG: GPF When Paging Up To Top, Then Down In Maximized Window"
permalink: /kb/117/Q117312/
---

## Q117312: BUG: GPF When Paging Up To Top, Then Down In Maximized Window

{% raw %}

	Article: Q117312
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Codeview for DOS or CodeView for Windows in 43 or 50 line mode and
	paging up to the top and then down again in a maximized source window, a GP
	Fault may occur. When running Codeview for DOS outside of Windows, you can get
	run-time error R6915 followed by DOSX16: unhandled exception.
	
	If a GFP does not immediately occur, you may experience subsequent display
	problems such as a loss of source code lines and/or register corruption.
	
	RESOLUTION
	==========
	
	Run Codeview in 25 line mode, or use the mouse to scroll the source window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
