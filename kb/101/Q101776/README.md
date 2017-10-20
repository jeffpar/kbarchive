---
layout: page
title: "Q101776: How Windows NT Detects Idle Time"
permalink: /kb/101/Q101776/
---

## Q101776: How Windows NT Detects Idle Time

{% raw %}

	Article: Q101776
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	Idle time is detected by computing the time spent in the idle thread.
	There is one idle thread per processor. The idle threads run when
	there are no executable threads. When a clock interrupt occurs, a
	clock tick is attributed to the active thread. When this occurs while
	the idle thread is active, the time is counted as idle time.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
