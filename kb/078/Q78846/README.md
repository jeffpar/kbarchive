---
layout: page
title: "Q78846: Incomplete DEVICE Line in CONFIG.SYS Causes Screen Garbage"
permalink: /kb/078/Q78846/
---

## Q78846: Incomplete DEVICE Line in CONFIG.SYS Causes Screen Garbage

{% raw %}

	Article: Q78846
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If random characters, symbols, words, and half sentences are displayed and the
	machine beeps when booting MS-DOS 5.0, an incomplete DEVICE statement may exist
	in the CONFIG.SYS file.
	
	This problem can be solved by removing this line from the CONFIG.SYS.
	
	MORE INFORMATION
	================
	
	For example, the following CONFIG.SYS file would exhibit the problem described
	above:
	
	  Files=30
	  Buffers=20
	  Device=
	  Device=c:\dos\himem.sys
	  Shell=c:\dos\command.com c:\dos /p /e:512
	
	(Note that the third line, Device=, is incomplete.) Incomplete sentences and
	other partially readable output may be displayed. The expected error message for
	this line would be:
	
	  ERROR IN CONFIG.SYS LINE #X
	
	The above message may or may not be part of the erratic output.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
