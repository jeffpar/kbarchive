---
layout: page
title: "Q81018: Program Filename Box Documented Incorrectly in PIF Editor Help"
permalink: /kb/081/Q81018/
---

## Q81018: Program Filename Box Documented Incorrectly in PIF Editor Help

{% raw %}

	Article: Q81018
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.0 PIF Editor on-screen Help program incorrectly documents the
	Program Filename box.
	
	MORE INFORMATION
	================
	
	Pressing F1 while the cursor is in the Program Filename box brings up the Help
	file for that topic. The last paragraph gives instructions on running other
	commands or terminate-and-stay-resident (TSR) programs before loading an
	application.
	
	Help displays:
	
	  * Create MP.BAT (with a text editor) and make the last command
	    MP.PIF
	
	However, when this batch file is run, MS-DOS gives the error message
	
	  Bad command or file name.
	
	MS-DOS does not recognize the PIF extension as a valid executable filename.
	
	Solution
	--------
	
	To correct this problem, remove FILENAME.PIF from the batch file.
	
	Additional query words: pif winhelp win30 3.0 3.0a environment
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
