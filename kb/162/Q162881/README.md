---
layout: page
title: "Q162881: RIP Table Sent While Shutting Down When Silent RIP Set"
permalink: /kb/162/Q162881/
---

## Q162881: RIP Table Sent While Shutting Down When Silent RIP Set

	Article: Q162881
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Routing Information Protocol (RIP) table information may be sent when you shut
	down a computer, even though Silent RIP is enabled in the registry.
	
	CAUSE
	=====
	
	Normally when we send RIP packets, we first check to see if the SilentRip value
	in the registry is set. In the case where the computer is shut down, we did not
	check this value.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To disable RIP broadcasts you can set up the SilentRip registry entry.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ 
	  IpRip\Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: SilentRip
	     Data Type:  REG_DWORD
	     Value:      1 or 0
	
	  NOTE: Setting this to 1 lets the server accept RIP but not send RIP packets.
	  Setting this to 0 causes the server to also send RIP packets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt tcpip tcp/ip silent
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
