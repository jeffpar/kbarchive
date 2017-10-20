---
layout: page
title: "Q127158: Amount of Memory Detected by POST and NTDETECT.COM Differs"
permalink: /kb/127/Q127158/
---

## Q127158: Amount of Memory Detected by POST and NTDETECT.COM Differs

{% raw %}

	Article: Q127158
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
	
	NTDETECT.COM detects slightly less memory than the power on self-test
	(POST) does.
	
	This is by design. Before NTDETECT.COM loads, some of the memory is used
	by the initialization of the Hardware Abstraction Layer (HAL). The
	difference in memory detected by POST and NTDETECT.COM varies from platform
	to platform (Intel, MIPS, Alpha and Power PC).
	
	
	Additional query words: prodnt 3.10 ram rom bios cmos ntldr
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
