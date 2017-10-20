---
layout: page
title: "Q126578: Incorrect Amount of Memory Detected on EISA Computers"
permalink: /kb/126/Q126578/
---

## Q126578: Incorrect Amount of Memory Detected on EISA Computers

{% raw %}

	Article: Q126578
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add or remove physical memory and restart your EISA bus computer, the
	correct amount of memory is detected. However, NTDETECT does not detect the
	correct amount of memory.
	
	CAUSE
	=====
	
	NTDETECT reads the EISA data as created by the EISA configuration utility. This
	problem occurs if you do not run the EISA configuration utility to update the
	memory information.
	
	RESOLUTION
	==========
	
	To correct this problem, run the EISA configuration utility provided by the
	computer manufacturer to update the total memory information.
	
	Additional query words: prodnt 3.10 setup ram
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
