---
layout: page
title: "Q121077: WFW Print Manager Limitations with Windows NT Shared"
permalink: /kb/121/Q121077/
---

## Q121077: WFW Print Manager Limitations with Windows NT Shared

{% raw %}

	Article: Q121077
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.5 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to move a print job down in the queue of a Windows NT system from a
	Windows for Workgroups system, this message is displayed on the WFWG system:
	
	  This request is not supported by the network
	
	MORE INFORMATION
	================
	
	The WFWG Print Manager allows various degrees of control over print jobs sent to
	a shared printer. How much control you have over the print job depends upon
	where you send it. When you print from a WFWG system to a locally attached
	printer, you can cancel the job or move it up or down in the queue of pending
	jobs.
	
	When you print to a network printer, you cannot move jobs ahead in the queue.
	This is by design: it prevents users from advancing their jobs at others'
	expense. Users can still move jobs down in the queue.
	
	When you print to a network printer shared by a Windows NT system, you cannot
	move jobs up or down in the queue. All you can do is delete your own print jobs.
	
	Additional query words: wfw wfwg prodnt kbinterop kbnetwork
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.5 4.0
	
	=============================================================================
	

{% endraw %}
