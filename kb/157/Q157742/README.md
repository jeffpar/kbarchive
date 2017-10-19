---
layout: page
title: "Q157742: WOW Applications Calling KillTimer() API May Leak Memory"
permalink: /kb/157/Q157742/
---

## Q157742: WOW Applications Calling KillTimer() API May Leak Memory

	Article: Q157742
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbother kbProgramming
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run 16-bit Windows applications on Windows NT, these programs can use
	up memory by requesting and never releasing memory. This problem may occur if
	that application makes a call to the Killtimer() API. This problem only occurs
	in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Stop the Windows on Windows (WOW) application using either Task Manager or
	Pviewer.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork kbother kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
