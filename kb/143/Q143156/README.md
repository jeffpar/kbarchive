---
layout: page
title: "Q143156: Tape Backup Utility Reports Inaccurate Error Messages"
permalink: /kb/143/Q143156/
---

## Q143156: Tape Backup Utility Reports Inaccurate Error Messages

{% raw %}

	Article: Q143156
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using a Compaq server or workstation configured with a 10 GB/20 GB DLT
	Drive in a Windows NT 3.51 environment, the tape backup utility in
	Administrative Tools may report an inaccurate error message similar to the
	following:
	
	  No tape in drive
	
	  Foreign tape
	
	Also, when you run Ntbackup from the command line, it may cause an access
	violation with Dr. Watson.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Never start the tape backup application while the Tape In Use console light
	  on the tape drive is flashing.
	
	2. When the green Operate Handle console light on the tape drive lights up,
	  remove the tape and reinsert it.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: DLT prodnt
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
