---
layout: page
title: "Q136212: How to Activate FoxPro 2.6 Style System Menu in Visual FoxPro"
permalink: /kb/136/Q136212/
---

## Q136212: How to Activate FoxPro 2.6 Style System Menu in Visual FoxPro

{% raw %}

	Article: Q136212
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The System Menu in Visual FoxPro has been redesigned. Some of the options that
	were available in the FoxPro version 2.6 System Menu are either not available in
	Visual FoxPro or are different. This article illustrates how you can activate a
	FoxPro version 2.6 style System Menu in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Basically, you need to get all the FoxPro version 2.6 style menus you need to
	create. Then generate a QuickMenu in FoxPro version 2.6, and run it in Visual
	FoxPro.
	
	For example, to get the FoxPro version 2.6 Browse menu instead of the Visual
	FoxPro Table menu when you browse through a table, use the SYS(1029) function.
	The syntax for this function is:
	
	     =SYS(1029,<n>)
	
	Here <n> can either be 0 or 1. The 0 activates the FoxPro version 2.6 style
	Browse menu, and the 1 activates the Visual FoxPro style Table menu.
	
	Step-by-Step Example
	--------------------
	
	1. Open any existing table, and issue the following commands from the Command
	  window:
	
	     =sys(1029,0)        && FoxPro v2.6 style Browse menu
	     BROWSE
	     && You will get the Browse menu instead of the Table menu.
	
	2. Close the Browse window, and issue the following commands from the Command
	  window:
	
	     =sys(1029,1)        && Visual FoxPro style Table menu
	     BROWSE
	     && You will get the Table menu
	
	Additional query words: sys(1029) VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
