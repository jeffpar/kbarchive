---
layout: page
title: "Q69185: Windows Err Msg: Cannot Run Windows in Standard Mode (LANMAN)"
permalink: /kb/069/Q69185/
---

## Q69185: Windows Err Msg: Cannot Run Windows in Standard Mode (LANMAN)

{% raw %}

	Article: Q69185
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you load EMM386.SYS in the CONFIG.SYS file, run Microsoft LAN Manager version
	2.0 enhanced as your network, and try to start Microsoft Windows version 3.0
	with the WIN /S switch, you may get the following error message:
	
	  Cannot run Windows in Standard Mode. Check to ensure you are not running
	  other protected-mode software, or run in real mode.
	
	WORKAROUND
	==========
	
	To allow standard mode to run, do one of the following:
	
	- Remove or comment out the line in the [workstation] section of your
	  LANMAN.INI file that reads
	
	          LIM=YES
	
	  -or-
	
	- Make a boot disk with a CONFIG.SYS file that does not load EMM386.SYS if you
	  want to use standard mode.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
