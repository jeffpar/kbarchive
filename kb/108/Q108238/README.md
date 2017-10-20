---
layout: page
title: "Q108238: Problem with the Copy Command and Multiple Parallel Ports"
permalink: /kb/108/Q108238/
---

## Q108238: Problem with the Copy Command and Multiple Parallel Ports

{% raw %}

	Article: Q108238
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have two or more parallel ports using the same IRQ and you copy files
	directly to the printer port(s) from a command prompt using the Copy command,
	the file may not be directed to the correct port (printer). Note this happens
	when you use the Copy command locally or to its shared networked printers.
	
	RESOLUTION
	==========
	
	To work around this problem, put the LPT ports on unique IRQs.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	On a computer with two or more printer ports installed on the same IRQ (usually
	7), do the following:
	
	1. Open a command prompt or CMD.
	
	2. Copy a file using the following command:
	
	  Copy C:\WINNT\SYSTEM32\CONFIG.NT LPT1:
	
	The print job will go to the default printer regardless which port you copy the
	file to.
	
	NOTE: This problem only occurs when you are using the Copy command to port
	commands.
	
	Additional query words: prodnt parallel IRQ copy LPT command
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

{% endraw %}
