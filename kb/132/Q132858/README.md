---
layout: page
title: "Q132858: PowerStack with Cirrus Video Adapter Hangs During Startup"
permalink: kb/132/Q132858/
---

## Q132858: PowerStack with Cirrus Video Adapter Hangs During Startup

	Article: Q132858
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 3.51 on a Motorola PowerStack computer that has 16
	megabytes (MB) of memory and a Cirrus video adapter, Windows NT 3.51 stops
	responding (hangs) during startup.
	
	CAUSE
	=====
	
	This problem occurs due to low system memory. The Cirrus miniport driver maps 16
	MB of virtual memory (frame buffer) during startup and does not release it.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt power stack mini port
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
