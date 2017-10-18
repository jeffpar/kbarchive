---
layout: page
title: "Q142847: Bugcheck 0x1e Caused by Isotp.sys Driver"
permalink: kb/142/Q142847/
---

## Q142847: Bugcheck 0x1e Caused by Isotp.sys Driver

	Article: Q142847
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the ISO TP4 protocol runs (Isotp.sys, available from the Windows NT Driver
	Library), you receive the following error message:
	
	  STOP: 0x0000001E (c0000005 00000002 00000000 00000002)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	Under certain conditions, when TP4 protocol data is received fast enough that
	the messages need to be queued for later processing, a function is called
	incorrectly, causing this STOP message. This problem is somewhat dependent on
	the network traffic patterns.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt ISO TP4 TP UNHANDLED
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
